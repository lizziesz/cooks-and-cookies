<template>
  <div id="trickTip">
    <div class="eachTip">
      <p><strong>Tip #1 (Measuring Flour):</strong> Did you know there is a proper way to measure
        flour? If you just scoop your measuring cup into your flour bag, you may not be getting
        enough! Instead, you should spoon flour into the measuring cup and then shake the measuring
        cup to level. This method may be a little more tedious, but it will ensure you get the
        proper amount. </p>
    </div>
    <div class="eachTip">
      <p><strong>Tip #2 (Follow the Buttery Directions):</strong> One thing I have definitely
        learned is to listen to the consistency directions when it comes to butter. This means that
        softened is not the same thing as melted - I speak from personal experience that it will
        make a big difference! I usually microwave my butter to get it to the right consistency, so
        microwave in small amounts of time so you don't accidentally melt your butter if you're not
        supposed to.</p>
    </div>
    <div class="eachTip">
      <p><strong>Tip #3 (Chilling the Dough):</strong> Speaking of things that make a surprisingly
        big difference, if the recipe calls for chilling the dough, make sure you stick that dough
        in the fridge! If you want soft cookies, this chilling step is key.</p>
    </div>
    <div class="eachTip">
      <p><strong>Tip #4 (Read the Whole Recipe):</strong> I know, I know, this seems obvious, but
        make sure you read the entire recipe before you begin. Again, speaking from personal
        experience, nothing is more frustrating than starting the recipe only to find out you don't
        have the right ingredients or enough time to finish.</p>
    </div>
    <div class="eachTip">
      <p><strong>More Resources:</strong></p>
      <li><a href="http://sallysbakingaddiction.com/" target="_blank">Sally's Baking Addiction</a>:
        I love this blog! This is where I have found most of my favorite cookie recipes, like the
        Nutella Chocolate Chip and Snickerdoodle cookies. It is definitely worth checking out!</li>
      <li><a href="http://www.sprinklebakes.com/" target="_blank">SprinkleBakes</a>: Unique recipes
        are my favorite recipes, and this blog is full of those! From coconut cappucino muffins to
        root beer float marshmallows, you're sure to find something new that you can't resist here.
      </li>
      <li><a href="http://www.thesugarhit.com/" target="_blank">The Sugar Hit</a>: Not gonna lie,
        part of the reason I like this site is for the comic book-inspired graphics. Comic books +
        baking, how can you go wrong? The Sugar Hit mixes it up with some non-sweet recipes, if you
        need a break from sweets (I don't see this happening, but I guess it's good to have other
        options.)</li>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Archivo+Narrow:400,700');

.eachTip {
  color: black;
  text-align: left;
  background:rgba(255,255,255,0.5);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  font-size: 20px;
  font-family: "Archivo Narrow";
}

.eachTip li {
  display: block;
  padding: 5px;
}

@media(max-width: 435px) {
  .eachTip {
    font-size: 0.9em;
  }
}

@media(max-width: 405px) {
  .eachTip {
    font-size: 0.9em;
  }
}

@media(max-width: 390px) {
  .eachTip {
    overflow: scroll;
  }
}
</style>
