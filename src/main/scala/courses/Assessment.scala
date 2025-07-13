package courses

import cats.{Comonad, Monoid}
import scala.PartialFunction.Combined
import _root_.courses.EvidenceRequirement.Weighted


/**
  * From the Learning Letters paper, an initial 3-tier top level categorisation of side-effects
  */
enum SideEffect:
  case ObservedWork
  case ExternalRecords
  case HumanInteraction

/** Assessments produce learning evidence, which is categorised by its side-effect */
enum LearningEvidence(val effect:SideEffect):
    case ObserverReport extends LearningEvidence(SideEffect.ObservedWork)
    case ProctorReport extends LearningEvidence(SideEffect.ObservedWork)
    case Performance extends LearningEvidence(SideEffect.ObservedWork)
    
    case ClientReport extends LearningEvidence(SideEffect.HumanInteraction)
    case PeerReport extends LearningEvidence(SideEffect.HumanInteraction)
    case Discussions extends LearningEvidence(SideEffect.HumanInteraction)
    
    case VersionHistory extends LearningEvidence(SideEffect.ExternalRecords)
    case SystemLogs extends LearningEvidence(SideEffect.ExternalRecords)
    


/** What happens if the learning evidence is not produced? */
enum EvidenceRequirement:
  /** Used for cases where an integrity investigation occurs, e.g. where a proctored exam does not produce a clean report */
  case Investigated

  /** Used for cases where the evidence forms part of the marking */
  case Weighted(fraction:Double)

  /** Used for cases where an item CANNOT be passed without this element */
  case Required

  /** Used for cases where an item is not checked in the moment but can be checked in retrospect */
  case Audit 


/** 
 * An assessment can contribute to a student passing a unit in different ways. 
 * 
 * As we're interested in seeing the risks to students passing (rather than their passing grade)
 * we are less interested in the weighting of hurdle assessments
 */ 
enum PassContribution:

  /** Without passing this assessment, the student cannot pass the unit */
  case Hurdle

  /** The assessment contributes to the student passing the unit */
  case Weighted(fraction:Double)


    


/**
  * We need a way of combining scores when a calculation function is not specified. 
  * For numeric scores, this tends to be their sum
  * For pass/fail, whether they have all been passed
  * etc
  */
trait CombinationRule[T] extends Monoid[T]

/**
  * 
  */
trait Score[T] {

    def result:T

    def integrityReport: Map[Assessment, LearningEvidence]

}


case class AssignmentScore[T](assessment:Assessment, score:T, integrity:LearningEvidence) extends Score[T] {
    def result = score
    def integrityReport: Map[Assessment, LearningEvidence] = Map(assessment -> integrity)
}


/**
  * Represents a score converted from one format to another. E.g. from a subject mark to a grade
  *
  * @param f
  * @param from
  */
class ConvertedScore[B, T](f: Score[T] => B)(from:Score[T]) extends Score[B] {
    lazy val result = f(from)

    export from.integrityReport

}

/**
  * Score is a Comonad, as described in the paper.
  * However, as this is done in Scala / JS rather than as a little language with its own compiler, we're just collecting the 
  * Integrity reports at run-time, rather than being able to annotate the Comonad with the kinds of integrity report that are present.
  */
given Comonad[Score] with {

    def extract[A](x: Score[A]): A = x.result

    def coflatMap[A, B](fa: Score[A])(f: Score[A] => B): Score[B] = ConvertedScore(f)(fa)

    def map[A, B](fa: Score[A])(f: A => B): Score[B] = ConvertedScore((s:Score[A]) => f(s.result))(fa)

}

/**
  * Combines scores into an aggregated result using a combination rule
  *
  * @param parts
  */
case class CombinedScore[T : CombinationRule](parts:Score[T]*) extends Score[T] {
    lazy val result = 
        val r = summon[CombinationRule[T]]
        parts.foldLeft(r.empty)((t, s) => r.combine(t, s.result))

    lazy val integrityReport: Map[Assessment, LearningEvidence] = 
        parts.foldLeft(Map.empty)((m, s) => m ++ s.integrityReport)
}


/** A monoid describing how, by default, to combine scores of this type */ 
val sumScores = new CombinationRule[Double] {
    def combine(a:Double, b:Double) = a + b 

    def empty = 0
}


/* -- 
   Static view
 */



type IntegrityAssurance = (LearningEvidence, EvidenceRequirement)


trait GradeCalculation[T] {

    def children:Seq[GradeCalculation[?]]

    def integrityAssurance:Seq[IntegrityAssurance]


}


case class SubjectLearningOutcome(text:String)

/**
  * 
  */
case class Assessment(
  name:String,
  LOs:Seq[SubjectLearningOutcome] = Seq.empty,
  passContribution:Seq[PassContribution] = Seq.empty,
  integrityAssurance:Seq[IntegrityAssurance] = Seq.empty
) extends GradeCalculation[?] {

    type Work = Unit // A placeholder, as we do not actually pass work into the model
    
    override val children = Seq.empty

    /** 
     * The action of marking work involves both the work and the data about its evidence of authenticity.
     * We leave this unimplemented, as we are modelling the assessment system, rather than implementing an automarker.
     */
    def grade(work:Work, integrityData:LearningEvidence):Score[?] = 
        ???

}


import scala.scalajs.js
import js.annotation.{JSExport, JSExportAll, JSExportTopLevel}
import js.JSConverters.*

@JSExportTopLevel("proctoredExam")
def proctoredExam(n:String, weight:Double, mustPass:Boolean = false) = Assessment(
  n, 
  passContribution = if mustPass then Seq(PassContribution.Weighted(weight), PassContribution.Hurdle) else Seq(PassContribution.Weighted(weight)),
  integrityAssurance = Seq(LearningEvidence.ProctorReport -> EvidenceRequirement.Investigated)
) 



@JSExportTopLevel("assessment")
def customAssessment(config:js.Dynamic):Assessment = 

  def parseIntegrityPair(pair:js.Array[Any]):(LearningEvidence, EvidenceRequirement) = 
    try {
      val arr = pair.toSeq
       arr(0).asInstanceOf[LearningEvidence] -> arr(1).asInstanceOf[EvidenceRequirement]
    } catch {
      case x => 
        org.scalajs.dom.window.console.error("Could not parse this as an evidence and requirement pair", pair, x)
        throw x
    }

  try {
    import js.JSConverters._
    import js.DynamicImplicits.truthValue

    val a = Assessment(
      name = config.name.asInstanceOf[String],
      passContribution = if config.grade then config.grade.asInstanceOf[js.Array[PassContribution]].toSeq else Seq.empty,
      integrityAssurance = {
        if config.ev then 
        for 
          jsarr <- config.ev.asInstanceOf[js.Array[js.Array[Any]]].toSeq 
        yield parseIntegrityPair(jsarr)
         
        else Seq.empty
      }
    )

    a
  } catch {
    case x => 
      org.scalajs.dom.window.console.error("Failed to parse unit config", config, x)
      Assessment("")
  }



