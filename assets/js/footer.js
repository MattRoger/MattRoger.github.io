const quotes = [
  {
    quote: "Do or do not, there is no try",
    author: "Master Yoda",
  },
  {
    quote: "the fox knows many things, but the hedgehog knows one big thing.",
    author: "Archilochus",
  },
  {
    quote:
      "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.",
    author: "Henry David Thoreau",
  },
  {
    quote: "they are the knights of summer, and winter is coming",
    author: "Catelyn Stark",
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const get_random_quote = () => {
  const rand_num = getRandomInt(quotes.length);
  const quote = $("<p>").text(`"${quotes[rand_num].quote}"`);
  const author = $("<p>").text("- " + quotes[rand_num].author);
  const refresh = $("<p>")
    .text("Get Another Random Quote")
    .addClass("get-random");
  $(".random-quote").append(quote, author, refresh);
  $(".get-random").on("click", function () {
    $(".random-quote").empty();
    get_random_quote();
  });
};

get_random_quote();

