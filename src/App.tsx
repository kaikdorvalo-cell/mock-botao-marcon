import "./App.css";
import Logo from './assets/logo.png'

function App() {

async function createStudentAccess() {
  const response = await fetch("https://transfere-api-stage-52421872894.us-central1.run.app/api/v1/auth/students/access", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "college-id": "019a83b9-9205-7152-b772-15037cd80640",
      "college-token": "1f388a34-521c-440c-8aaa-d8099b680e18",
    },
    body: JSON.stringify({
      name: "Teste criado",
      email: "criadomockportadl@gmail.com",
      ra: "223344556",
      courseId: "1.2ADM",
      curriculum: "1.2ADM.2023.01",
      courseName: "Bacharelado em Administração",
    }),
  });

  if (!response.ok) {
    throw new Error(`Erro: ${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  window.location.href = data.data.url
  console.log("Resposta:", data);
}

	return (
    <div style={{ backgroundColor: "white", height: "100vh", display: 'flex', justifyContent: "center", alignItems: 'center'}}>
      <button onClick={createStudentAccess} type="button" style={{ backgroundColor: '#128bfcff', color: '#ffffffff', height: '80px', width: '400px', fontWeight: 'bold', fontSize: "20px", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <img src={Logo} alt="logo"></img>
        Transfere Fácil
      </button>

    </div>
	);
}

export default App;
