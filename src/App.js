import { useState } from "react"


function Button({ children, onClick }) {
  return <button className="btn" onClick={onClick}>{children}</button>
}


export default function App() {
  const [isStarted, setIsStarted] = useState(false)
  const [projectName, setProjectName] = useState("")
  const [hobby, setHobby] = useState("")
  const [step, setStep] = useState(1)

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
                setHobby={setHobby} />
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

function SecondForm({ projectName, setProjectName, hobby, setHobby }) {
  return <p>second form goes here</p>
}

function ProjectCard() {
  return <p>project card goes here</p>
}

function Footer() {
  return (
    <footer className="footer">
      <h3>Created by: Tamsin Lloyd (a hobby enthusiast)</h3>
    </footer>
  )
}