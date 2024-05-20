import image01 from "@img/image-01.jpg";

export default function App() {
  return (
    <section className="m-4 border">
      <h1 className="text-green-500">Hello React</h1>
      <p>React + Webpack</p>
      <h3>ENV</h3>
      <span>APP_INFO: {JSON.stringify(process.env.APP_INFO)}</span>
      <img src={image01} alt="" width={500} />
    </section>
  );
}
