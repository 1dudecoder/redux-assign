import React from "react";
import { Link } from "react-router-dom";

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';

function PdfDown() {

  function printDocument() {
      const doc = new jsPDF();
      const pdfTable = document.getElementById('divToPrint');
      var html = htmlToPdfmake(pdfTable.innerHTML);
      const documentDefinition = { content: html };
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      pdfMake.createPdf(documentDefinition).open();
  }

  return (
    <div>
      <center>
          <button onClick={()=>{printDocument()}}>download</button>
        <div >

          <div id='divToPrint'>
          <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            exercitationem provident repellat culpa maiores. Odio quibusdam
            aperiam sapiente aspernatur officia repellendus dolorum velit quod
            corporis sint minus maxime eaque perspiciatis, totam ea sed
            provident, neque eius voluptatum? Quis fugiat aut et praesentium
            nostrum? Eos vel et placeat repellendus aspernatur nesciunt mollitia
            harum accusamus, facilis molestias distinctio non illum odit
            laborum? Odit magni alias expedita sed, esse iste quasi quod illum?
            Eaque, distinctio? Ad alias dolores sequi tempore. Error fugiat ipsa
            nobis officia enim rerum doloribus asperiores sed repudiandae neque
            numquam recusandae architecto molestiae modi magni qui quos impedit
            sit quasi, dolores quis quaerat itaque aperiam quisquam. Architecto
            odio a quidem, commodi eos quis rerum dignissimos porro in eius
            autem iure eligendi incidunt officia officiis pariatur. Delectus
            inventore fugit quas voluptatem deleniti? Ad saepe optio debitis
            quae architecto harum quisquam laborum aspernatur. Sequi perferendis
            eius adipisci tempore, minima porro reprehenderit ipsa suscipit sit
            quis corporis aperiam, officia ab, autem eum commodi quidem
            necessitatibus quos molestiae a recusandae nemo officiis ipsam.
            Incidunt praesentium officiis, ducimus possimus corrupti quisquam
            impedit veniam eaque unde libero neque esse vitae tenetur
            voluptatem. Laborum earum id, eum in magni atque facilis molestiae
            minima doloribus tempore sint laudantium soluta obcaecati iure
            perspiciatis aspernatur consequuntur accusamus, consequatur
            quibusdam ea sit. Excepturi quos qui quam sint quia vero laudantium.
            Doloribus mollitia incidunt nihil deleniti eveniet eligendi quo ad
            odit temporibus hic debitis aperiam sint dolore, tempora doloremque
            repellendus, delectus veniam fugit, animi earum sit error dolorum!
            Ut nostrum necessitatibus quasi praesentium doloribus autem
            similique nisi, ea laborum nesciunt nulla? Exercitationem aut
            dignissimos repellendus ipsam, cupiditate fugiat vitae? Laudantium
            reiciendis laborum minus odio at veritatis? Est nisi, molestias
            labore saepe qui exercitationem beatae numquam laboriosam unde
            nesciunt molestiae amet, incidunt quasi id nobis. Vero neque porro
            tempora, harum nam excepturi laborum. Maiores laboriosam autem hic
            magnam. Praesentium temporibus cumque deserunt accusantium magnam
            atque perspiciatis. Enim impedit repudiandae autem repellendus harum
            laborum, ab corrupti ipsa sequi, aliquam magni iusto corporis,
            excepturi quas nemo numquam! Error nulla architecto quaerat amet
            iure, eaque voluptatum voluptatem repudiandae magnam, laudantium
            perspiciatis molestias facilis cum repellendus obcaecati itaque
            voluptates impedit omnis eum. Quae voluptate in, odit non porro
            molestiae! Quae vitae explicabo magnam quis perspiciatis enim illo
            amet odit, harum cum quo hic itaque ullam distinctio fugiat suscipit
            tenetur nihil iure laboriosam architecto natus inventore placeat
            esse accusamus! Tempora quam corporis ratione quae amet expedita
            consequuntur magni eum sequi, voluptatum repellat possimus maiores
            ullam dolorem, quisquam aperiam accusantium sunt velit. Ad corrupti,
            impedit inventore nihil odio fuga veritatis repellendus excepturi
            maxime error incidunt iste vitae? Optio vero laborum fuga quaerat
            voluptatem quam commodi alias facilis nostrum. Explicabo iusto
            labore corrupti rerum id in et facere, doloremque tempore architecto
            necessitatibus! Nulla exercitationem veritatis, ex dolore quo illo
            voluptatem, dignissimos pariatur in rem minus? Facilis repudiandae
            nihil eveniet modi assumenda error, corporis, maiores quis nostrum
            veniam consectetur excepturi totam dolores in! Incidunt non, quod,
            quia ipsum corporis alias animi velit autem adipisci itaque magnam
            officia commodi cum, neque eos ut maxime? Corporis voluptates
            distinctio voluptatum eos velit odit id nihil saepe in mollitia qui
            perspiciatis soluta molestiae, libero excepturi repellat nostrum eum
            quia! Dignissimos, aliquid corrupti quae itaque quis odio impedit
            officia facilis maiores ea doloremque earum iure esse sed, nihil
            voluptatum, qui eum voluptates asperiores. Magnam aspernatur
            doloremque laboriosam odit culpa ipsum asperiores eveniet aperiam
            tempore praesentium laudantium voluptates, aliquam, quas obcaecati
            autem vitae, quae nisi? Dignissimos unde aliquid magni praesentium
            enim vitae error nesciunt, quasi, doloribus facilis voluptas ut
            ipsam cupiditate. Possimus temporibus in consequuntur omnis! Ratione
            sunt maiores facere, perspiciatis obcaecati et distinctio
            accusantium enim eligendi eos laudantium omnis ullam deserunt nisi
            dolore est! Eos facilis temporibus laborum excepturi vel voluptatum
            voluptatibus distinctio vero rerum architecto dicta, molestiae,
            dolorum, perspiciatis expedita. Harum, eaque. Odit officia
            dignissimos eius voluptatum, doloribus dolorem ipsum porro assumenda
            corporis beatae nemo fuga ut fugiat magni commodi numquam
            perferendis neque soluta aspernatur alias cupiditate deserunt. Vel
            id atque ex distinctio sit voluptas dicta, perferendis sed nemo
            magni delectus nisi repellat doloribus nostrum eveniet architecto!
            Commodi modi sapiente, eius sint facere rerum debitis ipsum
            repudiandae sit possimus accusantium perspiciatis natus doloribus
            optio, animi illo placeat tempore fuga corrupti at perferendis
            ratione! Nihil rem rerum tempora placeat mollitia, neque earum aut.
            Autem unde voluptate laudantium quae et est iusto, velit explicabo,
            asperiores corporis qui veritatis harum maiores? Ut molestiae
            mollitia animi? Nulla laboriosam temporibus unde porro sint
            praesentium accusamus dolore eos iste quisquam quidem
            necessitatibus, sed ducimus molestias rerum tempore aliquid
            asperiores magnam libero! Cum et porro totam dolores blanditiis nam
            aspernatur nostrum ad, repellendus hic soluta cumque deleniti!
            Aliquam quibusdam voluptas recusandae cupiditate? Nihil tempore
            expedita non! Veniam culpa, perspiciatis minima, modi adipisci ullam
            debitis, quaerat sunt dolore molestiae reiciendis. Eligendi tempore
            maxime distinctio accusantium perspiciatis atque ullam quis nulla
            dicta consequuntur quibusdam expedita aut iste veritatis, cupiditate
            provident fuga vel voluptates pariatur dolor rerum autem. Tenetur
            adipisci nihil facere eum repellat, sint, saepe quae fuga autem
            quaerat alias tempora dolor voluptatem reiciendis excepturi deserunt
            molestiae rerum! Quo qui, rem nobis soluta atque iusto error,
            expedita ut quisquam itaque illo maxime corporis commodi. Sequi
            dolorem quaerat nulla ab consequatur adipisci blanditiis magni
            pariatur qui suscipit dicta corrupti ipsa delectus modi error, fuga
            placeat recusandae ut a dolore similique veritatis odio omnis. Sed
            sequi ratione, adipisci, dolorem voluptates, exercitationem ipsam
            sint dolorum minima tempora quas? Assumenda voluptatibus possimus
            saepe dolores animi suscipit sequi aliquid, temporibus ipsam tenetur
            sint repellendus vero consequatur, molestias maxime! Repudiandae,
            fugit est? Asperiores quia excepturi facilis illo? Perferendis,
            voluptate. Praesentium magnam repellat voluptatibus, nemo neque
            maiores sequi aut deleniti quam recusandae tenetur fugiat nam iure
            possimus iusto eveniet alias id laborum quisquam reprehenderit atque
            modi dicta! Dolorem aperiam dignissimos, soluta iste, eius quos
            voluptates harum iusto earum vitae laudantium assumenda veritatis,
            distinctio minus consectetur laborum quas provident veniam? Optio
            cumque dolorem excepturi impedit vero corporis beatae natus rerum
            ipsum odit quod perferendis numquam nisi, aliquam ipsa fugit
            aspernatur veritatis deleniti. Repellat rem saepe voluptates
            doloremque nobis, consequatur libero aperiam nam?
          </div>

          <br />
          <br />

          <br />

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum
            unde labore obcaecati ullam eveniet odit ad voluptatum sint suscipit
            tempore dolorum maiores, dolor quam non facere nobis! Voluptatum
            cumque delectus libero sint assumenda. Deserunt saepe possimus vitae
            ea laboriosam nostrum et culpa aperiam expedita inventore magni a,
            esse atque? Iure odit explicabo nisi totam excepturi voluptas
            facilis, illo sunt nesciunt voluptate voluptatum magnam quidem sit,
            culpa magni neque dolorem optio et. Harum cupiditate rem velit magni
            assumenda reprehenderit quibusdam nostrum veritatis aliquid! Aperiam
            quibusdam velit perspiciatis totam asperiores dolores, magni iusto
            laudantium, natus quaerat aspernatur rem, nulla ducimus quidem
            expedita esse officiis! Eaque libero rem non reiciendis molestiae,
            fugit fugiat mollitia unde animi nihil distinctio error cum
            necessitatibus veniam, iusto quo quae numquam! Provident, ratione
            repellat officiis placeat dolorum commodi quisquam expedita animi
            voluptatum accusamus vel doloremque rem delectus qui consectetur
            repellendus eveniet recusandae ipsum optio quo atque neque
            repudiandae sapiente voluptatem. Eius dolorum quidem animi error aut
            nobis facere neque, accusamus quam placeat expedita doloribus iure
            eaque. Possimus facilis nam dolorum suscipit enim assumenda,
            voluptates optio esse labore, doloremque architecto, officia dolore
            corporis repellendus voluptas necessitatibus ipsa eaque ipsum
            tempore ex nostrum vero porro sapiente! Qui voluptatibus asperiores
            maiores aspernatur quo expedita quam rem. Labore minus aperiam,
            aliquid ad vero quod fugiat nemo? Hic temporibus illum beatae cum
            porro ullam voluptate rerum suscipit? Repellendus molestias autem
            commodi reprehenderit sed iste! Veniam, corrupti voluptatem ullam
            odio repellat obcaecati perspiciatis modi! Similique necessitatibus
            minus ipsa neque facilis animi, possimus quas illo cupiditate.
            Officiis molestiae repellat adipisci voluptas consequatur
            accusantium temporibus aliquid quis architecto consectetur rem sit
            ut exercitationem assumenda animi iusto, minima eaque. Nam quia hic
            minus necessitatibus explicabo. Quam totam, ipsum aspernatur
            accusamus porro iure id eos quasi magni rem dignissimos consequatur
            maiores at nam accusantium corrupti, fugiat amet earum temporibus
            possimus nobis voluptates eveniet. Iure laboriosam esse laborum
            adipisci, optio accusamus dolorem nam quam eum quae, harum sapiente
            doloribus commodi aliquam possimus perferendis quibusdam minus. Quae
            earum harum totam ipsum ab, porro dolor sequi optio suscipit
            sapiente, fugiat voluptatibus quo labore, exercitationem voluptate
            vel molestiae. Vitae, praesentium. Commodi ratione quos ducimus
            similique perferendis omnis blanditiis consequuntur itaque fugit
            culpa earum mollitia, iste, perspiciatis totam ex dolorum.
            Praesentium explicabo reiciendis temporibus doloremque dolor, nam
            ipsum velit delectus nemo maiores sed obcaecati. Modi eaque
            veritatis provident amet unde, fugiat quod ullam minus neque
            ratione, officiis temporibus reprehenderit quis exercitationem
            suscipit!
          </div>
        </div>
      </center>

      <Link to="/">
        <center>
          <h1 style={{ marginTop: "20rem" }}>BackPage</h1>
        </center>
      </Link>
    </div>
  );
}

export default PdfDown;
