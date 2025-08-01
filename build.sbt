enablePlugins(ScalaJSPlugin)

name := "course-and-effect"
//organization := "com.wbillingsley"
scalaVersion := "3.3.6"

// Don't automatically call main
scalaJSUseMainModuleInitializer := false

//updateOptions := updateOptions.value.withLatestSnapshots(false)

// For Metals
Global / semanticdbEnabled := true

libraryDependencies ++= Seq(
  "com.wbillingsley" %%% "doctacular" % "0.3.0",

  "org.typelevel" %%% "cats-core" % "2.10.0"
)


val deployScript = taskKey[Unit]("Copies the fullOptJS script to deployscripts/")

// Used by Travis-CI to get the script out from the .gitignored target directory
// Don't run it locally, or you'll find the script gets loaded twice in index.html!
deployScript := {
  val opt = (Compile / fullOptJS).value
  IO.copyFile(opt.data, new java.io.File("deployscripts/compiled.js"))
}

val fastDeployScript = taskKey[Unit]("Copies the fastOptJS script to deployscripts/")

// Used by Travis-CI to get the script out from the .gitignored target directory
// Don't run it locally, or you'll find the script gets loaded twice in index.html!
fastDeployScript := {
  val opt = (Compile / fastOptJS).value
  IO.copyFile(opt.data, new java.io.File("deployscripts/compiled.js"))
}
