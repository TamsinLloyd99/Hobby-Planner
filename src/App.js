import { useState } from "react"


function Button({ children, onClick, type }) {
  return <button className="btn" type={type} onClick={onClick}>{children}</button>
}


export default function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [projectName, setProjectName] = useState("")
  const [hobby, setHobby] = useState("")
  const [step, setStep] = useState(1)
  const [yarnName, setYarnName] = useState("")
  const [needleType, setNeedleType] = useState("")
  const [knittingPattern, setKnittingPattern] = useState("")
  const [hookType, setHookType] = useState("")
  const [crochetPattern, setCrochetPattern] = useState("")
  const [fabricType, setFabricType] = useState("")
  const [sewingPattern, setSewingPattern] = useState("")
  const [extraMaterials, setExtraMaterials] = useState("")
  const [methodOfMaking, setMethodOfMaking] = useState("")
  const [toolsNeeded, setToolsNeeded] = useState("")
  const [colourScheme, setColourScheme] = useState("")
  const [methodOfColouring, setMethodOfColouring] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [recipeNameAndProvider, setRecipeNameAndProvider] = useState("")

  function handleStart(e) {
    e.preventDefault()

    setIsStarted(true)
  }

  function handleNext(e) {
    e.preventDefault()
    setStep(2);

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
                projectName={projectName}
                setProjectName={setProjectName}
                hobby={hobby}
                setHobby={setHobby}
                onNext={handleNext} />
            )}
            {step === 2 && (
              <SecondForm
                projectName={projectName}
                setProjectName={setProjectName}
                hobby={hobby}
                setHobby={setHobby}
                yarnName={yarnName}
                setYarnName={setYarnName}
                needleType={needleType}
                setNeedleType={setNeedleType}
                knittingPattern={knittingPattern}
                setKnittingPattern={setKnittingPattern}
                hookType={hookType}
                setHookType={setHookType}
                crochetPattern={crochetPattern}
                setCrochetPattern={setCrochetPattern}
                fabricType={fabricType}
                setFabricType={setFabricType}
                sewingPattern={sewingPattern}
                setSewingPattern={setSewingPattern}
                extraMaterials={extraMaterials}
                setExtraMaterials={setExtraMaterials}
                methodOfMaking={methodOfMaking}
                setMethodOfMaking={setMethodOfMaking}
                toolsNeeded={toolsNeeded}
                setToolsNeeded={setToolsNeeded}
                colourScheme={colourScheme}
                setColourScheme={setColourScheme}
                methodOfColouring={methodOfColouring}
                setMethodOfColouring={setMethodOfColouring}
                ingredients={ingredients}
                setIngredients={setIngredients}
                recipeNameAndProvider={recipeNameAndProvider}
                setRecipeNameAndProvider={setRecipeNameAndProvider}
              />
            )}
            <ProjectCard />
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


function FirstForm({ projectName, setProjectName, hobby, setHobby, onNext }) {

  function handleSubmit(e) {
    if (!projectName || !hobby) return;
    e.preventDefault()

    const newHobby = { id: Date.now(), projectName, hobby };
    console.log(newHobby)
    onNext()
  }


  return (
    <form className="form"
      onSubmit={handleSubmit}>
      <h3>What is the name of your project?</h3>
      <input
        type="text"
        placeholder="Type name here"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)} />


      <h3>Select a Hobby</h3>
      <select value={hobby}
        onChange={(e) => setHobby(e.target.value)}>
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

function SecondForm({
  projectName,
  setProjectName,
  hobby, setHobby,
  yarnName, setYarnName,
  needleType, setNeedleType,
  knittingPattern,
  setKnittingPattern,
  hookType,
  setHookType,
  crochetPattern,
  setCrochetPattern,
  fabricType,
  setFabricType,
  sewingPattern,
  setSewingPattern,
  extraMaterials,
  setExtraMaterials,
  methodOfMaking,
  setMethodOfMaking,
  toolsNeeded,
  setToolsNeeded,
  colourScheme,
  setColourScheme,
  methodOfColouring,
  setMethodOfColouring,
  ingredients,
  setIngredients,
  recipeNameAndProvider,
  setRecipeNameAndProvider }) {

  if (!hobby) return null;

  switch (hobby) {
    case "Knitting":
      return (
        <>
          <label >Yarn name</label>
          <input type="text" placeholder="Type yarn name here" value={yarnName} onChange={(e) => setYarnName(e.target.value)} />
          <label>Needle type(s)</label>
          <input type="text" placeholder="Type needle type here" value={needleType} onChange={(e) => setNeedleType(e.target.value)} />
          <label>Knitting Pattern</label>
          <input type="text" placeholder="Type knitting pattern here" value={knittingPattern} onChange={(e) => setKnittingPattern(e.target.value)} />
        </>
      );

    case "Crochet":
      return (
        <>
          <label >Yarn name</label>
          <input type="text" placeholder="Type yarn name here" value={yarnName} onChange={(e) => setYarnName(e.target.value)} />
          <label>Hook type(s)</label>
          <input type="text" placeholder="Type needle type here" value={hookType} onChange={(e) => setHookType(e.target.value)} />
          <label>Crochet Pattern</label>
          <input type="text" placeholder="Type crochet pattern here" value={crochetPattern} onChange={(e) => setCrochetPattern(e.target.value)} />
        </>
      )

    case "Sewing":
      return (
        <>
          <label>Fabric type</label>
          <input type="text" placeholder="Type fabric type here" value={fabricType} onChange={(e) => setFabricType(e.target.value)} />
          <label>Sewing Pattern</label>
          <input type="text" placeholder="Type sewing pattern here" value={sewingPattern} onChange={(e) => setSewingPattern(e.target.value)} />
          <label>Extra materials</label>
          <input type="text" placeholder="Type extra materials here" value={extraMaterials} onChange={(e) => setExtraMaterials(e.target.value)} />
        </>
      )

    case "Pottery":
      return (
        <>
          <label>Method of making</label>
          <select value={methodOfMaking} onChange={(e) => setMethodOfMaking(e.target.value)}>
            <option value="">--Select--</option>
            <option value="On the wheel">On the wheel</option>
            <option value="Slabbing">Slabbing</option>
            <option value="Sculpture">Sculpture</option>
            <option value="Freehand">Freehand</option>
          </select>
          <label>Tools needed</label>
          <input type="text" placeholder="Type tools needed here" value={toolsNeeded} onChange={(e) => setToolsNeeded(e.target.value)} />
          <label>Colour scheme</label>
          <input type="text" placeholder="Type colour scheme here" value={colourScheme} onChange={(e) => setColourScheme(e.target.value)} />
          <label>Method of colouring</label>
          <input type="text" placeholder="Type method of colouring here" value={methodOfColouring} onChange={(e) => setMethodOfColouring(e.target.value)} />
        </>
      )

    case "Baking":
      return (
        <>
          <label>Ingredients</label>
          <input type="text" placeholder="Type ingredients here" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
          <label>Recipe name and provider</label>
          <input type="text" placeholder="Type recipe name and provider here" value={recipeNameAndProvider} onChange={(e) => setRecipeNameAndProvider(e.target.value)} />
          <label>Extra materials</label>
          <input type="text" placeholder="Type extra materials here" value={extraMaterials} onChange={(e) => setExtraMaterials(e.target.value)} />
        </>
      )
    default:
      return null;
  }

}


function ProjectCard() {
  return
}

function Footer() {
  return (
    <footer className="footer">
      <h3>Created by: Tamsin Lloyd (a hobby enthusiast)</h3>
    </footer>
  )
}