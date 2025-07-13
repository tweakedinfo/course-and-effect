package ui

import com.wbillingsley.veautiful.Unique
import com.wbillingsley.veautiful.html.{<, DElement, SVG, Styling, ^, DHtmlComponent, DHtmlContent}
import com.wbillingsley.veautiful.svg.{DSvgContent, DSvgComponent}
import org.scalajs.dom
import courses.*
import scala.scalajs.js.annotation.JSExportTopLevel

def effectPage(c:Course) = <.div(
  <.h1(c.name),
  (for url <- handbookUrl yield
    <.p(
      <.a(^.href := url(c.code), "Link to handbook entry")
    )
  ),
  (
    if c.learningOutcomes.nonEmpty then 
      <.div(
        <.h3("Course Learning Outcomes:"),
        <.ol(
          for lo <- c.learningOutcomes yield <.li(lo.text)
        )
      )
    else None
  ),
  Common.markdown(
    """|### Evidence of Learning
       |
       |This maps the evidence of learning and assessment security through the course.
       |
       |At the moment, it just presents it flat. Future versions will filter on the mapping
       |between units and course learning outcomes.
       |
       |""".stripMargin),
  PlanEffectWidget(c.structure)

)


/**
 * Lays out the structure of a course vertically, so that groups of subjects can be seen
 * more easily
 */
case class PlanEffectWidget(plan:Plan) extends DHtmlComponent {

  import acssite.given

  val leftMargin = "50px"

  val unitStyle = Styling(
    """font-family: 'Lato', sans-serif;
      |font-size: 15px;
      |dominant-baseline: middle;
      |padding: 5px 5px 5px 5px;
      |background-color: #f5f5f5;
      |
      |width: 800px;
      |margin: 2px;
      |""".stripMargin
  ).modifiedBy(
    " .code" -> "font-size: 13px;",
    " .requires" -> "font-style: italic; font-size: 13px; color: #d55;",
    " .tag" -> "margin: 2px; padding: 2px 5px 2px 5px; background-color: #add; font-size: 12px;",
    " .tag.Capstone" -> "background: #dad",
    " .tag.Applied" -> "background: #dda",
  ).register()

  val sectionStyle = Styling(
    """font-family: 'Lato', sans-serif;
      |font-size: 18px;
      |fill: black;
      |dominant-baseline: middle;
      |""".stripMargin
  ).modifiedBy(
  ).register()

  val orStyle = Styling(
    """font-family: 'Lato', sans-serif;
      |font-size: 15px;
      |font-style: italic;
      |fill: black;
      |dominant-baseline: middle;
      |text-anchor: end;
      |""".stripMargin
  ).modifiedBy(
  ).register()

  val chooseStyle = Styling(
    """font-family: 'Lato', sans-serif;
      |font-size: 15px;
      |font-style: italic;
      |
      |writing-mode: sideways-lr;
      |text-align: center;
      |border-right: 1px solid black;
      |""".stripMargin
  ).modifiedBy(
  ).register()

  val flexRowStyle = Styling(
    """
      |display: flex;
      |flex: 1 auto;
      |width: 100%;
      |""".stripMargin
  ).modifiedBy(
  ).register()

  val assessmentTables = Styling(
    """
      |display: flex;
      |flex-direction: column;
      |width: 100%;
      |""".stripMargin
  ).modifiedBy(
    " .assessment-entry" -> "display: flex; flex: 0 auto; gap: 5px; align-items: baseline;",
    " .name" -> "font-weight: bold",
    " .pass-weight" -> "font-style: italic;",
    " .pass-hurdle" -> "font-style: italic; background: lavenderblush; border-radius: 5px; padding: 3px; font-size: 80%;",
    " .integrity-row" -> "margin-left: 3em;",
    " .integrity-row .ObservedWork" -> "color: brown;",
    " .integrity-row .ExternalRecords" -> "color: darkblue;",
    " .integrity-row .HumanInteraction" -> "color: darkgreen;",
    " .syntax" -> "font-style: italic;",
    " .integrity-row .Audit" -> "color: darkgreen;",
    " .integrity-row .Investigated" -> "color: brown;",
    " .integrity-row .Required" -> "color: darkgreen;",
    " .integrity-row .Weighted" -> "color: darkblue;",

  ).register()


  val rowH = 50
  val halfH = rowH / 2

  val unitBlockStart = 50 - 4
  val unitBlockWidth = 600 + 8

  def subjectDetails(s:Subject) = <.div(^.cls := unitStyle,
    <.div(<.span(^.cls := "code", s.code), " ", 
    <.span(^.cls := "name"), s.name, " ", for t <- s.tags yield <.span(<.span(^.cls := s"tag $t", t), " ")),
    if s.prereq.nonEmpty then <.div(^.cls := "requires", "requires: ", s.prereq.stringify) else None
  )

  def assessmentDetails(a:Assessment):DHtmlContent = 
    <.div(^.cls := assessmentTables,
      <.div(^.cls := "assessment-entry",
        <.h6(^.cls := "name", a.name), 
        a.passContribution map {
          case PassContribution.Weighted(fraction) => <.span(^.cls := "pass-weight", s"weighted $fraction%")
          case PassContribution.Hurdle => <.span(^.cls := "pass-hurdle", "hurdle")
        },
      ),
      
      for (ev, req) <- a.integrityAssurance yield 
        <.div(^.cls := "integrity-row",
          <.span(^.cls := "syntax", "produces: "),
          <.span(^.cls := ev.effect.toString(), 
              ev match
                case LearningEvidence.ObserverReport => "observer report"
                case LearningEvidence.ProctorReport => "proctoring report"
                case LearningEvidence.Performance => "watched performance"
                case LearningEvidence.ClientReport => "client report"
                case LearningEvidence.PeerReport => "peer report"
                case LearningEvidence.Discussions => "logged discussions"
                case LearningEvidence.VersionHistory => "version history"
                case LearningEvidence.SystemLogs => "system logs"            
            ),
          "; ",
          <.span(^.cls := "syntax", "consideration: "),
          <.span(^.cls := ( req match {
            case EvidenceRequirement.Weighted(fraction) => "Weighted"
            case x => x.toString
          }), 
              req match
                case EvidenceRequirement.Audit => " auditable"
                case EvidenceRequirement.Investigated => " investigation trigger only"
                case EvidenceRequirement.Weighted(fraction) => s" assessed $fraction%"
                case EvidenceRequirement.Required => " required to pass"
            )
        
        )
    )


  def assessmentDetails(s:Subject):DHtmlContent = 
    <.div(^.cls := assessmentTables,
      for a <- s.assessments if a.integrityAssurance.nonEmpty yield assessmentDetails(a)
    )

  def subjectBox(offset:Int, s:Subject):DHtmlContent = 
    <.div(^.style := "display: flex; flex: 0 0 auto;",
      subjectDetails(s),
      assessmentDetails(s)
    )

  def labelledBox(offset:Int, s:String) = 
    <.div(
      <.div(^.cls := unitStyle.className,
        <.div(^.cls := "code", " "),
        <.div(^.cls := "name", s)
      )
    )   

  def singleUnitBox(offset:Int, s:PrereqElement.unit):DHtmlContent = 
    <.div(^.cls := flexRowStyle,
      <.div(),
      subjects.find(_.code == s.code) match {
        case Some(subj) => subjectBox(offset, subj)
        case None => labelledBox(offset, s.code)
      }
    )


  def box(offset:Int, el:PrereqElement):(Int, DHtmlContent) = el match {
    case s:PrereqElement.unit =>
      1 -> singleUnitBox(offset, s)
      /*SVG.g(
        SVG.rect(^.attr("x") := unitBlockStart, ^.attr("width") := unitBlockWidth, ^.attr("y") := offset * rowH + 2, ^.attr("height") := rowH - 4, ^.attr("fill") := "rgba(120, 120, 120, 0.2)" ),
        SVG.text(^.attr("x") := 50, ^.attr("y") := offset * rowH + halfH, ^.cls := unitStyle.className, unitText(s)),
      )*/

    case PrereqElement.or(a, b) =>
      2 -> <.div(
        <.div("or"),
        <.div(
          box(0, a)._2,
          box(1, b)._2,
        )
      )
      
    case PrereqElement.choose(num, units) =>
      2 -> <.div(^.cls := flexRowStyle,
        <.div(^.cls := chooseStyle,
          num match {
            case i:Int => s"choose $num"
            case (from, to) => s"choose $from-$to"
          }
        ),
        <.div(
          for (u, index) <- units.zipWithIndex yield box(0, u)._2
        )
      )

    case _ => 
      0 -> <.div(s"Unexpected: $el")
  }

  val planStrings = flatStrings(plan)
//  println(planStrings)

  def prereqLines(plan: Plan, active:Option[String]) =
    def arrow(startRow:Int, endRow:Int, number:Int) =
      val startX = unitBlockStart + unitBlockWidth
      val startY = startRow * rowH + rowH - 6
      val endY = endRow * rowH + 6

      val midXOffset = 50 + (startRow % 40) * 10 + number
      val midY = (startY + endY) / 2
      val endsX = startX //(endRow * 25) + (number * 5)
      SVG.path(
     //   ^.attr("d") := s"M $startX $startY C ${startX + midXOffset} $startY  ${startX + midXOffset} $endY $endsX $endY l 4 -4 m -4 4 l 4 4",
        ^.attr("d") := s"M $startX ${startY + number} l ${midXOffset - 5} 0 q 5 0 5 5 L ${startX + midXOffset} $endY q 0 5 -5 5 l ${5 - midXOffset} 0 l 4 -4 m -4 4 l 4 4",
        ^.attr("stroke") := "red", ^.attr("fill") := "none"
      )

    SVG.g(
      for
        (code, endRow) <- planStrings.zipWithIndex
        subj <- subjects.find(_.code == code).toSeq
        prereqCodes = for c <- subj.prereq.flatMap(subjCodes) if planStrings.contains(c) yield c
        (prereqCode, number) <- prereqCodes.zipWithIndex
        startRow = planStrings.indexOf(prereqCode)
      yield arrow(startRow, endRow, number)
    )



  override def render = <.div(
    {
      var row = 0
      def textY = (row * rowH) + rowH/2
      for
        (name, els) <- plan
      yield
        <.div(
          <.h4(name),
          {
            row += 1

            for
              el <- els
              (h, content) = box(row, el)
              c = {
                row += h
                content
              }
            yield c
          }
        )
    },
  )

}


import scala.scalajs.js
import js.annotation.{JSExport, JSExportAll, JSExportTopLevel}
import js.JSConverters.*


@JSExportTopLevel("effects")
@JSExportAll
object EffectsJs {
  val page = ("Learning Evidence", "course-effects", effectPage)
}

@JSExportTopLevel("grade")
@JSExportAll
object grade {
  val hurdle = PassContribution.Hurdle
  def weighted(frac:Double) = PassContribution.Weighted(frac)
}

@JSExportTopLevel("evidence")
@JSExportAll
object ev {
  val audited = EvidenceRequirement.Audit
  def marked(frac:Double) = EvidenceRequirement.Weighted(frac)
  val required = EvidenceRequirement.Required
  val investigated = EvidenceRequirement.Investigated

  val logs = LearningEvidence.SystemLogs
  val versionHistory = LearningEvidence.VersionHistory
  val peerReport = LearningEvidence.PeerReport
  val clientReport = LearningEvidence.ClientReport
  val observerReport = LearningEvidence.ObserverReport
  val discussions = LearningEvidence.Discussions
  val proctorReport = LearningEvidence.ProctorReport
  val performance = LearningEvidence.Performance

}

