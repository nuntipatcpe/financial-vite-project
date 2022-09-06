import { useState } from "react";
// import "./App.css";
import Aside from "./components/layouts/Aside";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

function App() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    console.log("handleOpen");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("handleClose");
    setOpen(false);
  };

  return (
    <div className="app">
      <Aside open={open} handleClose={handleClose} />
      <div className="container">
        <Header open={open} handleOpen={handleOpen} />
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          fuga veniam repudiandae autem quas optio perferendis accusantium quae
          minus mollitia aut dignissimos error eaque dolor, provident recusandae
          doloribus nulla rem incidunt nobis. Enim sunt non molestiae quae
          reprehenderit labore debitis adipisci architecto vitae voluptas
          ratione aliquam quo ipsum, magni voluptatum ab esse deserunt quod
          autem eos mollitia dolores. Delectus qui aspernatur repellat illo
          maxime exercitationem commodi aperiam dolore aut culpa quisquam atque
          ipsa recusandae placeat odit voluptatum explicabo voluptas,
          perspiciatis dolores quibusdam dolorem. Consequuntur ipsam qui porro
          ab eligendi molestias officiis facilis laborum quidem, placeat ullam
          sint animi necessitatibus accusamus dolores maiores obcaecati delectus
          voluptas? Nostrum fuga officia cumque perferendis ipsa quo dolor
          aliquam similique repellendus, aspernatur sed incidunt quibusdam
          asperiores sit. Labore, omnis neque laudantium consequatur porro fuga
          maiores hic totam vero quas aspernatur est excepturi quam dolore et,
          minima repellendus reprehenderit sed earum? Natus assumenda rerum
          libero adipisci facilis necessitatibus delectus beatae quae.
          Perspiciatis similique eveniet excepturi nesciunt optio nisi
          necessitatibus quae aliquid quod consequuntur, totam illum. Tenetur
          laboriosam recusandae aperiam nobis vel cum omnis itaque, tempore
          optio id ex quasi sunt? Commodi perferendis, est quos aspernatur,
          laudantium atque sequi unde pariatur temporibus odio modi dicta, in
          aliquid amet consequuntur voluptatum doloribus optio corrupti eaque a
          reprehenderit praesentium. Dicta incidunt autem nobis aspernatur
          officiis facere nostrum delectus eaque excepturi explicabo, dolorem
          blanditiis tempora voluptas est accusantium vel, eos pariatur ut,
          optio possimus ipsam voluptates a accusamus? Incidunt, debitis error.
          Officia cupiditate ex voluptatibus doloremque architecto modi
          temporibus soluta, facere pariatur quod laborum vero ipsam. Ipsa nulla
          non excepturi inventore? Eius pariatur, eligendi laudantium ipsum
          corrupti, minus fuga suscipit maiores non eveniet dolor, ratione
          facere temporibus provident adipisci? Iste officiis libero doloribus
          ullam blanditiis, obcaecati sapiente cupiditate in, commodi nihil ex
          aut. Labore maxime, laboriosam quis error amet atque eius minima dicta
          in saepe libero, odio repudiandae perspiciatis culpa fugit minus
          porro. Reprehenderit quidem iusto consectetur ullam assumenda
          deserunt, aperiam magnam asperiores natus incidunt expedita placeat ad
          reiciendis id dicta nostrum autem at. Labore, blanditiis nobis
          recusandae, et explicabo soluta quia officiis error iusto quos
          quisquam. Soluta incidunt quos voluptates autem, id facilis blanditiis
          molestias ab magni consequatur ipsam aut velit explicabo quo
          voluptatem veritatis dolores dicta aspernatur a. Adipisci fuga
          deserunt corporis harum amet cum et explicabo illo recusandae laborum
          odio autem, perspiciatis totam, modi saepe quidem delectus sequi
          sapiente asperiores minima nostrum atque? Dicta velit natus quis
          aperiam quibusdam incidunt unde debitis numquam nostrum illo quaerat
          pariatur accusantium quisquam magni officiis autem quae, aspernatur
          nulla voluptatem. Nesciunt cumque dolor architecto cupiditate in velit
          alias mollitia perspiciatis veniam ullam ducimus, eos itaque,
          reprehenderit reiciendis totam officia modi. Ullam modi nobis delectus
          nam ratione magnam sed enim illo iste quidem odit, debitis fuga
          corporis repudiandae! Explicabo delectus alias quaerat illo mollitia
          ipsa iste est doloremque facere velit vel molestias, dolor debitis
          earum modi, natus accusamus inventore. Ex, voluptatum! Sunt mollitia
          animi fuga, adipisci dolorum maiores eius architecto ratione
          voluptates excepturi iusto similique doloribus veniam obcaecati optio
          deserunt quod. Tenetur quas id voluptas quos ea amet recusandae sunt
          iure autem? Quia iusto placeat quod, accusantium ut incidunt fugit
          odio autem, perspiciatis totam, modi saepe quidem delectus sequi
          sapiente asperiores minima nostrum atque? Dicta velit natus quis
          aperiam quibusdam incidunt unde debitis numquam nostrum illo quaerat
          pariatur accusantium quisquam magni officiis autem quae, aspernatur
          nulla voluptatem. Nesciunt cumque dolor architecto cupiditate in velit
          alias mollitia perspiciatis veniam ullam ducimus, eos itaque,
          reprehenderit reiciendis totam officia modi. Ullam modi nobis delectus
          nam ratione magnam sed enim illo iste quidem odit, debitis fuga
          corporis repudiandae! Explicabo delectus alias quaerat illo mollitia
          ipsa iste est doloremque facere velit vel molestias, dolor debitis
          earum modi, natus accusamus inventore. Ex, voluptatum! Sunt mollitia
          animi fuga, adipisci dolorum maiores eius architecto ratione
          voluptates excepturi iusto similique doloribus veniam obcaecati optio
          deserunt quod. Tenetur quas id voluptas quos ea amet recusandae sunt
          iure autem? Quia iusto placeat quod, accusantium ut incidunt fugit
          odio autem, perspiciatis totam, modi saepe quidem delectus sequi
          sapiente asperiores minima nostrum atque? Dicta velit natus quis
          aperiam quibusdam incidunt unde debitis numquam nostrum illo quaerat
          pariatur accusantium quisquam magni officiis autem quae, aspernatur
          nulla voluptatem. Nesciunt cumque dolor architecto cupiditate in velit
          alias mollitia perspiciatis veniam ullam ducimus, eos itaque,
          reprehenderit reiciendis totam officia modi. Ullam modi nobis delectus
          nam ratione magnam sed enim illo iste quidem odit, debitis fuga
          corporis repudiandae! Explicabo delectus alias quaerat illo mollitia
          ipsa iste est doloremque facere velit vel molestias, dolor debitis
          earum modi, natus accusamus inventore. Ex, voluptatum! Sunt mollitia
          animi fuga, adipisci dolorum maiores eius architecto ratione
          voluptates excepturi iusto similique doloribus veniam obcaecati optio
          deserunt quod. Tenetur quas id voluptas quos ea amet recusandae sunt
          iure autem? Quia iusto placeat quod, accusantium ut incidunt fugit
          odio autem, perspiciatis totam, modi saepe quidem delectus sequi
          sapiente asperiores minima nostrum atque? Dicta velit natus quis
          aperiam quibusdam incidunt unde debitis numquam nostrum illo quaerat
          pariatur accusantium quisquam magni officiis autem quae, aspernatur
          nulla voluptatem. Nesciunt cumque dolor architecto cupiditate in velit
          alias mollitia perspiciatis veniam ullam ducimus, eos itaque,
          reprehenderit reiciendis totam officia modi. Ullam modi nobis delectus
          nam ratione magnam sed enim illo iste quidem odit, debitis fuga
          corporis repudiandae! Explicabo delectus alias quaerat illo mollitia
          ipsa iste est doloremque facere velit vel molestias, dolor debitis
          earum modi, natus accusamus inventore. Ex, voluptatum! Sunt mollitia
          animi fuga, adipisci dolorum maiores eius architecto ratione
          voluptates excepturi iusto similique doloribus veniam obcaecati optio
          deserunt quod. Tenetur quas id voluptas quos ea amet recusandae sunt
          iure autem? Quia iusto placeat quod, accusantium ut incidunt fugit
          odio autem, perspiciatis totam, modi saepe quidem delectus sequi
          sapiente asperiores minima nostrum atque? Dicta velit natus quis
          aperiam quibusdam incidunt unde debitis numquam nostrum illo quaerat
          pariatur accusantium quisquam magni officiis autem quae, aspernatur
          nulla voluptatem. Nesciunt cumque dolor architecto cupiditate in velit
          alias mollitia perspiciatis veniam ullam ducimus, eos itaque,
          reprehenderit reiciendis totam officia modi. Ullam modi nobis delectus
          nam ratione magnam sed enim illo iste quidem odit, debitis fuga
          corporis repudiandae! Explicabo delectus alias quaerat illo mollitia
          ipsa iste est doloremque facere velit vel molestias, dolor debitis
          earum modi, natus accusamus inventore. Ex, voluptatum! Sunt mollitia
          animi fuga, adipisci dolorum maiores eius architecto ratione
          voluptates excepturi iusto similique doloribus veniam obcaecati optio
          deserunt quod. Tenetur quas id voluptas quos ea amet recusandae sunt
          iure autem? Quia iusto placeat quod, accusantium ut incidunt fugit
          odio autem, perspiciatis totam, modi saepe quidem delectus sequi
          sapiente asperiores minima nostrum atque? Dicta velit natus quis
          aperiam quibusdam incidunt unde debitis numquam nostrum illo quaerat
          pariatur accusantium quisquam magni officiis autem quae, aspernatur
          nulla voluptatem. Nesciunt cumque dolor architecto cupiditate in velit
          alias mollitia perspiciatis veniam ullam ducimus, eos itaque,
          reprehenderit reiciendis totam officia modi. Ullam modi nobis delectus
          nam ratione magnam sed enim illo iste quidem odit, debitis fuga
          corporis repudiandae! Explicabo delectus alias quaerat illo mollitia
          ipsa iste est doloremque facere velit vel molestias, dolor debitis
          earum modi, natus accusamus inventore. Ex, voluptatum! Sunt mollitia
          animi fuga, adipisci dolorum maiores eius architecto ratione
          voluptates excepturi iusto similique doloribus veniam obcaecati optio
          deserunt quod. Tenetur quas id voluptas quos ea amet recusandae sunt
          iure autem? Quia iusto placeat quod, accusantium ut incidunt fugit
          odio autem, perspiciatis totam, modi saepe quidem delectus sequi
          sapiente asperiores minima nostrum atque? Dicta velit natus quis
          aperiam quibusdam incidunt unde debitis numquam nostrum illo quaerat
          pariatur accusantium quisquam magni officiis autem quae, aspernatur
          nulla voluptatem. Nesciunt cumque dolor architecto cupiditate in velit
          alias mollitia perspiciatis veniam ullam ducimus, eos itaque,
          reprehenderit reiciendis totam officia modi. Ullam modi nobis delectus
          nam ratione magnam sed enim illo iste quidem odit, debitis fuga
          corporis repudiandae! Explicabo delectus alias quaerat illo mollitia
          ipsa iste est doloremque facere velit vel molestias, dolor debitis
          earum modi, natus accusamus inventore. Ex, voluptatum! Sunt mollitia
          animi fuga, adipisci dolorum maiores eius architecto ratione
          voluptates excepturi iusto similique doloribus veniam obcaecati optio
          deserunt quod. Tenetur quas id voluptas quos ea amet recusandae sunt
          iure autem? Quia iusto placeat quod, accusantium ut incidunt fugit
          consequuntur ab ducimus doloremque, eos debitis culpa rerum quis
          voluptatibus beatae aliquid. Rerum labore pariatur ea vel amet,
          temporibus excepturi odio culpa. Hic dignissimos laborum velit rem
          aliquid, ipsum quo similique blanditiis libero facilis, placeat
          consequatur in ut cumque officia magnam? Optio nam dolorem neque harum
          sed. Sunt atque assumenda quae quas nesciunt magni nulla ea natus
          adipisci amet repellendus omnis aut, cumque iusto eligendi officia
          dolor voluptates, cum repellat doloribus repudiandae enim asperiores?
          Magnam amet est quidem soluta. Repellat libero excepturi odio minus
          ex, placeat officiis omnis animi? Rem, aut consequatur ipsa, deleniti
          similique ipsum cum laborum distinctio debitis incidunt dolorem quos
          hic cupiditate molestiae earum sed! Ducimus dicta a quia at hic error
          modi, dolore quisquam officiis nostrum facilis ex corporis maxime eos
          ad officia quam sed eveniet distinctio quos ullam fuga. Cupiditate
          aliquam expedita magnam provident quas officia, commodi deserunt
          recusandae dolorum sit cumque alias ex voluptatem, repudiandae facilis
          ea. Qui minus consequuntur excepturi vero quibusdam nemo ea, repellat
          assumenda quo quod fuga. Ipsa aspernatur sit a ea eligendi quam
          aliquid corrupti amet itaque commodi vel aut eos ullam optio ipsam,
          deleniti debitis voluptatem sequi exercitationem quia impedit
          consequatur. Libero harum, inventore tempora aspernatur nam eius dolor
          dignissimos distinctio similique assumenda accusantium autem eaque,
          amet ullam, quibusdam iusto aliquam omnis molestiae vel deleniti
          quidem. Sapiente accusamus, harum nemo, consequatur eaque nulla omnis
          autem labore, quae reprehenderit veritatis aliquam. Esse maxime
          mollitia deleniti ipsa at voluptatibus inventore perferendis accusamus
          cumque non, nam sapiente dolorem voluptatum illo. Architecto molestiae
          accusantium, est dolore, hic facilis exercitationem voluptatem maxime
          eum, animi quisquam sapiente sed saepe aspernatur voluptatum quae
          recusandae facere at mollitia velit. Sapiente excepturi ad in quidem
          exercitationem! Dolorem esse voluptas doloremque! Consequatur,
          architecto! Deserunt facilis temporibus suscipit reiciendis! Est earum
          in nobis voluptatibus repellendus temporibus iste, quod eius aliquid,
          veritatis voluptatum molestias veniam doloribus blanditiis ab, facere
          quam corrupti. Quasi deserunt, eveniet neque ipsam vel dolore minima
          aperiam magnam, nostrum ipsum necessitatibus numquam? Ut quam sed cum
          quidem impedit quos velit ea consequuntur commodi at, eveniet labore
          rerum officiis odit. Distinctio natus harum illum ipsum tempora
          delectus voluptatem maxime iure pariatur nobis at unde, ullam fuga aut
          vitae similique itaque alias commodi velit saepe. Non beatae esse
          quaerat iste aperiam? Incidunt tempora, nostrum iste nam non est eum
          animi ex! Explicabo quod suscipit temporibus culpa dolorum,
          aspernatur, molestias aut iusto maxime nobis dicta consectetur
          perspiciatis possimus blanditiis distinctio deserunt fuga pariatur quo
          non totam quibusdam similique eum? Rem natus a consequatur quas, harum
          quidem inventore nobis ab ipsum repudiandae amet fugiat vitae
          perspiciatis! Hic nobis porro aliquam saepe ut quo eligendi nisi
          perferendis corrupti sit? Aliquam neque quasi velit officia unde in a
          facilis temporibus fuga optio? Natus neque inventore quisquam voluptas
          laudantium praesentium tenetur! Incidunt, modi. Minima, perferendis,
          accusamus numquam enim ducimus harum dolorem nam distinctio
          necessitatibus officia repudiandae aut fuga ad pariatur sequi amet
          adipisci, ratione suscipit! Sunt, et.
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
