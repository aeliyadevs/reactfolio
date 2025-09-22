import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Details() {
  return (
    <>
      <Header />
      <main className="content bg-black py-large">
        <div className="container">
          <div>
            <h1 className="heading text-light">Web Application</h1>
            <p className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              sapiente a tenetur, incidunt sunt saepe, architecto rem nisi
              voluptas quam suscipit. Nemo natus maiores ab praesentium animi
              delectus ad adipisci?
            </p>
            <p className="text-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
              culpa iusto harum, distinctio aut reprehenderit! Necessitatibus
              magnam a optio ratione harum nobis fugiat minus culpa quisquam
              saepe. Temporibus veritatis vero impedit, natus repellendus
              officiis ex dolorem nulla veniam, harum autem. Quibusdam vero
              incidunt molestiae doloribus commodi vel voluptas architecto dicta
              fugiat, sunt quia corporis ut animi ducimus, reprehenderit, fugit
              eligendi nihil quis fuga tempora omnis illo? Neque animi impedit
              reiciendis architecto. Necessitatibus, incidunt nostrum fugiat,
              maiores reiciendis natus asperiores animi suscipit ipsam at minima
              neque eos doloremque?
            </p>
            <div style={{ maxWidth: "768px" }}>
              <img
                src="/images/projects/project-1.png"
                alt="project-1 thumbnail"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
