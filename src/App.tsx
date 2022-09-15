import { useState } from "react";
// import "./App.css";
import Aside from "./components/layouts/Aside";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

function App() {
  const [open, setOpen] = useState(false);

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
      <div className={open ? "container" : "container open"}>
        <Header open={open} handleOpen={handleOpen} />
        <div className="content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          consectetur, a aspernatur eos cumque numquam alias consequuntur
          doloribus modi officiis iure at voluptas esse maiores hic sapiente
          enim excepturi sequi dolorum mollitia quisquam. Quisquam provident hic
          maxime, exercitationem porro esse, recusandae cupiditate molestias
          itaque, eius voluptas? Nisi aliquam mollitia a ipsa. Vero consequatur,
          perferendis enim aspernatur ducimus consectetur provident ipsa
          deserunt atque quidem vel, saepe voluptas sapiente molestiae. Vero sed
          autem ea, neque quae pariatur? Voluptatibus ipsam labore consectetur
          accusamus illo consequuntur facere magni ad deleniti tenetur tempora
          fugit, inventore sed voluptas doloremque enim? Maiores qui tenetur
          deserunt molestias quasi nesciunt delectus voluptates ab iste
          distinctio voluptas, dicta placeat totam impedit? Quidem sed tempora
          adipisci quod recusandae. Autem odio sit earum sapiente veniam,
          deserunt quibusdam iusto sed atque quis facere dolorem. Natus ipsum,
          quod maxime beatae animi quis doloremque blanditiis perspiciatis
          totam, cupiditate exercitationem facere dignissimos nam ipsa et, eos
          tempora sit corporis. Distinctio dolore atque similique, iusto quia
          vitae eaque odio incidunt blanditiis temporibus dolorum quaerat unde
          consequuntur ipsam sint, molestias, accusantium velit accusamus fuga
          nesciunt nostrum quae fugiat ea. Aspernatur voluptatibus voluptate
          suscipit corrupti optio, a, voluptatem dicta eaque in doloribus
          reiciendis est ipsum eum beatae, tenetur cumque nam. Veritatis, sed
          qui. Sunt aspernatur voluptatum harum aut laborum, vero autem
          repudiandae, maxime cum id ex labore animi vel beatae natus rem culpa
          optio dolor hic. Nulla maxime quos libero voluptatem quas molestiae
          porro aut tempore minus ex blanditiis deleniti modi quasi dolore magni
          quam aperiam culpa, itaque asperiores nihil explicabo suscipit,
          consequatur enim! Animi eos, illo ipsum accusamus omnis in?
          Voluptatibus fuga quidem non ex aspernatur sed a corporis repellat
          velit recusandae quibusdam, accusamus animi aliquam deleniti! Ratione
          laudantium sint eum corporis similique quia modi id officiis
          exercitationem perspiciatis alias molestiae nihil animi, fugiat
          debitis numquam voluptatum provident amet tempora dignissimos nam
          minus. Minus molestias enim asperiores quidem quis nesciunt?
          Recusandae ad earum maxime temporibus totam ex ipsam possimus corrupti
          tempora dignissimos qui deleniti eum obcaecati molestias voluptates,
          cupiditate non veritatis iure provident modi voluptatem amet ab, quos
          deserunt. Nesciunt voluptas nobis eos mollitia nulla quasi sit, omnis
          porro rerum eligendi earum quam amet esse adipisci pariatur corporis
          alias nam odit, fugit, atque doloremque. Laboriosam ut ipsam aliquam
          eaque eveniet, cum optio asperiores, facilis vel maxime ducimus
          officiis in id itaque suscipit cupiditate unde animi excepturi eum
          reprehenderit nostrum pariatur qui vitae? Nihil, quibusdam similique
          dolores dolor odit odio reprehenderit, rerum sit qui, labore non sed
          inventore enim earum maxime? Aperiam eos quos autem beatae
          voluptatibus officiis! Aperiam magnam debitis, impedit fugit
          reprehenderit, aut ea quasi laborum eius, minus esse iure. Eaque a
          accusamus repellendus libero? Voluptatum minima, quisquam
          perspiciatis, laudantium illo voluptate ad, nemo consequatur hic et ut
          soluta voluptates quos distinctio incidunt obcaecati iure. Rerum vitae
          accusantium facere enim atque, error velit voluptatum! Iure quod
          repellat consectetur vel, dolore sunt. Pariatur facere commodi dolores
          perferendis? Adipisci ullam delectus unde inventore sunt illum
          laudantium nisi molestias quos atque ut perferendis quidem qui nulla,
          vitae ducimus labore reiciendis voluptatibus consequatur consequuntur
          tempore praesentium aliquid possimus aliquam. Quis corrupti quidem
          earum facere explicabo nobis iure ipsum sit, facilis eaque enim magnam
          veniam harum, a aliquid quae! Atque numquam illum culpa deserunt
          facere et voluptatibus eius repellat dolorum quod suscipit quas fuga
          officia tempore sit quasi animi, sequi rem reprehenderit nesciunt
          ullam doloremque voluptates, ab doloribus? Alias officiis cumque porro
          repudiandae, reiciendis tempora aspernatur voluptates, eos quod
          provident laudantium. Similique culpa sed voluptatem ab reiciendis
          delectus dicta dolorum provident necessitatibus numquam, enim minima
          placeat alias. Reprehenderit quos iure quod, nam necessitatibus
          aliquam earum itaque modi ipsam, dolorem totam hic dolores vel beatae
          error eaque quia ab et quidem porro ipsum! Obcaecati, in corrupti.
          Provident exercitationem libero deleniti earum optio eveniet, atque
          magni iusto est quo doloribus qui illum praesentium mollitia, impedit
          eaque quae doloremque vitae odio fugiat iure officia! Voluptatibus
          esse qui ea sit repellat ut quo aperiam libero praesentium eaque,
          laboriosam impedit nostrum dolore obcaecati earum adipisci harum
          optio. Eius odio facere magni voluptatem neque rem nostrum quidem
          maiores distinctio, in saepe nobis earum debitis. Blanditiis officia
          aliquam voluptas! Unde repudiandae optio excepturi! Cupiditate a ullam
          sunt alias deleniti. Vitae iste dolorum laborum itaque quasi, dolor
          cum, voluptas doloribus eligendi voluptatum sequi nihil? Qui suscipit
          distinctio ullam ipsum voluptate, omnis in nulla dolores cumque id.
          Necessitatibus placeat eos tempore vero repellat temporibus ex.
          Quisquam ullam maiores numquam unde ea illo necessitatibus aut
          laudantium praesentium culpa, earum quam beatae aliquam! Blanditiis,
          aliquam facere. Earum debitis neque quam eius voluptatum labore
          cupiditate, nam voluptatibus nesciunt id blanditiis, adipisci, aperiam
          vel fugiat soluta harum? A modi fuga repudiandae reprehenderit natus
          maxime perspiciatis, ipsum libero minima? Delectus error vero
          excepturi itaque saepe eveniet! Impedit sed maxime expedita officia
          enim illum nostrum cum error, dolore aspernatur at rerum quis
          consectetur quas voluptate labore. Est, doloribus? Alias ex eius,
          blanditiis ea facilis doloremque quaerat repudiandae earum quas dolor
          delectus quibusdam ipsam laudantium rerum modi architecto placeat
          explicabo aut, eum beatae ipsum vero! Rem sequi doloremque veritatis
          error, quas quod fuga ratione molestias impedit. Ipsam nostrum
          dignissimos delectus ducimus ad at illo, ab sequi rerum, corrupti
          possimus, fugit ullam laboriosam est iure optio quas neque tempore id
          omnis! Fugiat, earum nemo, laborum soluta, nisi ipsa ex ab quia
          adipisci velit est! Beatae at nam quidem optio nemo assumenda ipsam
          odit veritatis harum recusandae. Perspiciatis ducimus dolores est
          molestias dolorem! Nihil, inventore? Saepe, repudiandae, hic
          dignissimos quidem eos atque vel totam explicabo neque temporibus,
          eius modi. Nostrum dolore, non porro consequatur facere, cupiditate
          maxime voluptatum deleniti error iste, obcaecati adipisci odio cum
          eius pariatur totam omnis at autem velit ducimus. Culpa ad nostrum
          eius quas, voluptatibus perferendis id soluta expedita fuga, magni
          asperiores, quod nulla at voluptate est aliquid sapiente. Minus quas
          quis unde tenetur aperiam dolore blanditiis a ab voluptates. Quaerat
          eius quod laboriosam ullam aut officia illum tenetur reiciendis labore
          voluptatibus odit nulla id consequuntur commodi distinctio voluptate
          maxime possimus, repellendus rerum, iure odio vel. Enim obcaecati
          possimus vero excepturi nobis magni quibusdam esse facere!
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
