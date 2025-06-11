import { useState } from "react"


function Button({ children, onClick, type }) {
  return <button className="btn" type={type} onClick={onClick}>{children}</button>
}


export default function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [step, setStep] = useState(1)
  const [currentProject, setCurrentProject] = useState(null)
  const [formData, setFormData] = useState({
    projectName: "",
    hobby: "",
    knitting: {
      yarnName: "",
      needleType: "",
      knittingPattern: ""
    },
    crochet: {
      yarnName: "",
      hookType: "",
      crochetPattern: ""
    },
    sewing: {
      fabricType: "",
      sewingPattern: "",
      extraMaterials: ""
    },
    pottery: {
      methodOfMaking: "",
      toolsNeeded: "",
      colourScheme: "",
      methodOfColouring: ""
    },
    baking: {
      ingredients: "",
      recipeNameAndProvider: "",
      extraMaterials: ""
    }
  })

  const [submittedProjects, setSubmittedProjects] = useState([]); // or useState([])

  function handleStart(e) {
    e.preventDefault()

    setIsStarted(true)
  }

  function handleNext(e) {
    e.preventDefault()
    setStep(2);

  }

  function handleFinish(e) {
    e.preventDefault()
    setCurrentProject(formData)
    setSubmittedProjects([...submittedProjects, formData])
    setIsStarted(false);
    setStep(1);
    setFormData({
      projectName: "",
      hobby: "",
      knitting: { yarnName: "", needleType: "", knittingPattern: "" },
      crochet: { yarnName: "", hookType: "", crochetPattern: "" },
      sewing: { fabricType: "", sewingPattern: "", extraMaterials: "" },
      pottery: { methodOfMaking: "", toolsNeeded: "", colourScheme: "", methodOfColouring: "" },
      baking: { ingredients: "", recipeNameAndProvider: "", extraMaterials: "" }
    });
  }

  return (
    <div className="app">
      <Logo />
      <main className="main">
        {!isStarted ? (
          <Button onClick={handleStart}>Start a New Project</Button>
        ) : (
          <>
            {step === 1 && (
              <FirstForm
                formData={formData}
                setFormData={setFormData}
                onNext={handleNext} />
            )}
            {step === 2 && (
              <SecondForm
                formData={formData}
                setFormData={setFormData}
                onFinish={handleFinish}
              />
            )}
            <ProjectCard project={currentProject} />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

function Logo() {
  return (
    <h1 className="logo">My Hobby planner</h1>
  )
}


function FirstForm({ formData, setFormData, onNext }) {

  function handleSubmit(e) {
    e.preventDefault()
    if (!formData.projectName || !formData.hobby) return;

    onNext(e)
  }


  return (
    <form className="form"
      onSubmit={handleSubmit}>
      <h3>What is the name of your project?</h3>
      <input
        type="text"
        placeholder="Type name here"
        value={formData.projectName}
        onChange={(e) => setFormData(prev => ({ ...prev, projectName: e.target.value }))} />


      <h3>Select a Hobby</h3>
      <select value={formData.hobby}
        onChange={(e) => setFormData(prev => ({ ...prev, hobby: e.target.value }))}>
        <option value="">--Select--</option>
        <option value="Knitting">Knitting</option>
        <option value="Crochet">Crochet</option>
        <option value="Sewing">Sewing</option>
        <option value="Pottery">Pottery</option>
        <option value="Baking">Baking</option>
      </select>
      <Button type="submit">Next</Button>
    </form >
  )
}

function SecondForm({ formData, setFormData, onFinish }) {

  const { hobby } = formData;

  if (!hobby) return null;

  const handleNestedChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  };

  const renderFields = () => {
    switch (hobby) {
      case "Knitting":
        return (
          <>
            <label htmlFor="YarnName">Yarn name</label>
            <input id="YarnName"
              type="text"
              placeholder="Type yarn name here"
              value={formData.knitting.yarnName}
              onChange={(e) => handleNestedChange("knitting", "yarnName", e.target.value)} />
            <label htmlFor="NeedleType">Needle type(s)</label>
            <input id="NeedleType" type="text"
              placeholder="Type needle type here"
              value={formData.knitting.needleType}
              onChange={(e) => handleNestedChange("knitting", "needleType", e.target.value)} />
            <label htmlFor="KnittingPattern">Knitting Pattern</label>
            <input id="KnittingPattern" type="text"
              placeholder="Type knitting pattern here"
              value={formData.knitting.knittingPattern}
              onChange={(e) => handleNestedChange("knitting", "knittingPattern", e.target.value)} />
          </>
        );

      case "Crochet":
        return (
          <>
            <label htmlFor="YarnName" >Yarn name</label>
            <input id="YarnName" type="text"
              placeholder="Type yarn name here"
              value={formData.crochet.yarnName}
              onChange={(e) => handleNestedChange("crochet", "yarnName", e.target.value)} />
            <label htmlFor="HookType">Hook type(s)</label>
            <input id="HookType" type="text"
              placeholder="Type needle type here"
              value={formData.crochet.hookType}
              onChange={(e) => handleNestedChange("crochet", "hookType", e.target.value)} />
            <label htmlFor="CrochetPattern">Crochet Pattern</label>
            <input id="CrochetPattern" type="text"
              placeholder="Type crochet pattern here"
              value={formData.crochet.crochetPattern}
              onChange={(e) => handleNestedChange("crochet", "crochetPattern", e.target.value)} />
          </>
        )

      case "Sewing":
        return (
          <>
            <label htmlFor="FabricType">Fabric type</label>
            <input id="FabricType" type="text"
              placeholder="Type fabric type here"
              value={formData.sewing.fabricType}
              onChange={(e) => handleNestedChange("sewing", "fabricType", e.target.value)} />
            <label htmlFor="SewingPattern">Sewing Pattern</label>
            <input id="SewingPattern" type="text"
              placeholder="Type sewing pattern here"
              value={formData.sewing.sewingPattern}
              onChange={(e) => handleNestedChange("sewing", "sewingPattern", e.target.value)} />
            <label htmlFor="ExtraMaterials">Extra materials</label>
            <input id="ExtraMaterials" type="text"
              placeholder="Type extra materials here"
              value={formData.sewing.extraMaterials}
              onChange={(e) => handleNestedChange("sewing", "extraMaterials", e.target.value)} />
          </>
        )

      case "Pottery":
        return (
          <>
            <label htmlFor="MethodOfMaking">Method of making</label>
            <select id="MethodOfMaking" value={formData.pottery.methodOfMaking}
              onChange={(e) => handleNestedChange("pottery", "methodOfMaking", e.target.value)}>
              <option value="">--Select--</option>
              <option value="On the wheel">On the wheel</option>
              <option value="Slabbing">Slabbing</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Freehand">Freehand</option>
            </select>
            <label htmlFor="ToolsNeeded">Tools needed</label>
            <input id="ToolsNeeded" type="text"
              placeholder="Type tools needed here"
              value={formData.pottery.toolsNeeded}
              onChange={(e) => handleNestedChange("pottery", "toolsNeeded", e.target.value)} />
            <label htmlFor="ColourScheme"> Colour Scheme</label>
            <input id="ColourScheme" type="text"
              placeholder="Type colour scheme here"
              value={formData.pottery.colourScheme}
              onChange={(e) => handleNestedChange("pottery", "colourScheme", e.target.value)} />
            <label htmlFor="MethodOfColouring">Method of colouring</label>
            <input id="MethodOfColouring" type="text"
              placeholder="Type method of colouring here"
              value={formData.pottery.methodOfColouring}
              onChange={(e) => handleNestedChange("pottery", "methodOfColouring", e.target.value)} />
          </>
        )

      case "Baking":
        return (
          <>
            <label htmlFor="Ingredients">Ingredients</label>
            <input id="Ingredients" type="text"
              placeholder="Type ingredients here"
              value={formData.baking.ingredients}
              onChange={(e) => handleNestedChange("baking", "ingredients", e.target.value)} />
            <label htmlFor="RecipeNameAndProvider">Recipe name and provider</label>
            <input id="RecipeNameAndProvider" type="text"
              placeholder="Type recipe name and provider here"
              value={formData.baking.recipeNameAndProvider}
              onChange={(e) => handleNestedChange("baking", "recipeNameAndProvider", e.target.value)} />
            <label htmlFor="ExtraMaterials">Extra materials</label>
            <input id="ExtraMaterials" type="text"
              placeholder="Type extra materials here"
              value={formData.baking.extraMaterials}
              onChange={(e) => handleNestedChange("baking", "extraMaterials", e.target.value)} />
          </>
        )
      default:
        return null;
    }
  };

  return (
    <form onSubmit={onFinish}>
      {renderFields()}
      <Button type="submit">
        Finish
      </Button>
    </form>
  )
}


function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <div className="project-card">
      <h2>{project.projectName}</h2>
      <p>Hobby: {project.hobby}</p>

      {project.hobby === "Knitting" && (
        <>
          <p>Yarn: {project.knitting.yarnName}</p>
          <p>Needle Type: {project.knitting.needleType}</p>
          <p>Pattern: {project.knitting.knittingPattern}</p>
        </>
      )}
      {project.hobby === "Crochet" && (
        <>
          <p>Yarn: {project.crochet.yarnName}</p>
          <p>Hook Type: {project.crochet.hookType}</p>
          <p>Pattern: {project.crochet.crochetPattern}</p>
        </>
      )}
      {project.hobby === "Sewing" && (
        <>
          <p>Fabric: {project.sewing.fabricType}</p>
          <p>Sewing Pattern: {project.sewing.sewingPattern}</p>
          <p>Extra Materials: {project.sewing.extraMaterials}</p>
        </>
      )}
      {project.hobby === "Pottery" && (
        <>
          <p>Method of Making: {project.pottery.methodOfMaking}</p>
          <p>Tools Needed: {project.pottery.toolsNeeded}</p>
          <p>Colour Scheme: {project.pottery.colourScheme}</p>
          <p>Method of Colouring: {project.pottery.methodOfColouring}</p>
        </>
      )}
      {project.hobby === "Baking" && (
        <>
          <p>Ingredients: {project.baking.ingredients}</p>
          <p>Recipe provider: {project.baking.recipeNameAndProvider}</p>
          <p>Extra Materials: {project.baking.extraMaterials}</p>
        </>
      )}

    </div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <h3>Created by: Tamsin Lloyd (a hobby enthusiast)</h3>
    </footer>
  )
}