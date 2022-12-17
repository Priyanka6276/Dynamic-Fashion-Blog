import image1 from "../images/blog-image-1.jpg"
import image2 from "../images/blog-image-2.jpg"

export default function Article() {
    return (
        <main className="blog">
            <article className="blog-post">
                <time dateTime="2020-11-12">11/12/20</time>
                <h2>On the Street in Brooklyn</h2>
                <img src={image1} alt="styles of brooklyn" />
                <p>When it comes to fashion, Brooklyn is always up for a challenge. From the cutting edge to the classic,
                this borough is full of style. Whether you're looking for something new to try or want to learn more
                about the fashion of Brooklyn, this guide will have you covered. From street style to high fashion, read
                on for everything you need to know about the fascinating world of Brooklyn fashion. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Tempore suscipit dicta mollitia assumenda ea pariatur
                exercitationem, totam iste a ut modi eum, sit eligendi. Autem minima unde nulla vero perferendis. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae at animi nihil similique, perferendis
                obcaecati praesentium ipsa velit, mollitia ex voluptatum nisi molestiae, est asperiores quidem quo eos
                porro.</p>
                <h4>Continues...</h4>
            </article>
            <article className="blog-post">
                <time dateTime="2020-11-11">11/11/20</time>
                <h2>Vintage in Vogue</h2>
                <img src={image2} alt="vintage in vogue" />
                <p>Vintage is making a comeback in fashion, and not just as a trend. Vintage pieces can be classic and
                timeless, and they can add a touch of luxury to any outfit. When shopping for vintage clothing, it's
                important to remember that not all vintage pieces are created equal. You'll need to find clothes that
                fit well and are in good condition. Vintage clothing can be expensive, but it's worth it if you find the
                right piece. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat enim amet eos maiores
                eaque velit, nobis esse deserunt excepturi quia assumenda perspiciatis cum, fuga molestiae aut commodi
                vitae saepe maxime. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores atque commodi amet
                eum magni? Repellat rem vitae tempore, optio pariatur nobis non facilis aliquam. Sint maiores ex tempore
                quibusdam expedita!</p>
                <h4>Continues...</h4>
            </article>
        </main>
    )
}