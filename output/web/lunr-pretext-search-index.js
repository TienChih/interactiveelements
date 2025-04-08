var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Tien Chih    This is a collection of interactive elements.   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "Interactive Elements",
  "body": " Interactive Elements   PreTeXt, in addition to having superb accesibility features, also allows for easy inclusion of interactive elements, which can greatly enhance intuition building, provide additional scaffolding, and allows for unique active or inquiry learning opportunities.  Many of these activities were taken from PreTeXt sample article who in turn were taken from PreTeXt projects by various authors. We encourage you to visit this site and peruse the sample interactives for inspiration and as a starting point.   The most basic version of an interactive element is a sage cell . We include a sample below, taken from Linear Optimization: A Geometric Inquiry Course : Note that subsequent sage cells are allowed to call upon previous entries, allowing for scaffolded activities.   Sage cells need not neccesarily run sage, they can be written to call upon a a number of languages . Below, we include a simulation in R illustrating the confidence interval. R cells may also access data files hosted on github, allowing for interactive explorations of data. Here, we compare birth weights between mothers who smoke and those who do not, from the OpenIntro introductory statistics labs .    DoenetML is a markup language inspired by PreTeXt for semantically describing interactive mathematics applets for the web. Use interactive[@platform=\"doenetml\"] with a slate[@surface=\"doenetml\"] to include DoenetML content within your document.  We include a Doenet acivity below illustrating the determinant geometrically from the Team Based Inquiry Learning: Linear Algebra .   Proofs can be challenging to incorporate in an active or inquiry course, as typically this is a lengthy activity done outside of class time when done by students. Interactive elements such as drag and drop proofs can help with the scaffolding and allow for easier inclusion. The following example is taken from the sample article .    Parsons Problem, Mathematical Proof  even numbers   Create a proof of the theorem: If is an even number, then .     Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So we have the displayed equation: .  This is a superfluous second paragraph in this block.    Thus .     Dorothy will not be much help with this proof.     Finally, many authors have already written Desmos or Geogebra or similar interactives for students. These can easily be included into PreTeXt as well.   "
},
{
  "id": "number-theory-proof",
  "level": "2",
  "url": "section-1.html#number-theory-proof",
  "type": "Exercise",
  "number": "1.1",
  "title": "Parsons Problem, Mathematical Proof.",
  "body": " Parsons Problem, Mathematical Proof  even numbers   Create a proof of the theorem: If is an even number, then .     Suppose is even.     Then is a prime number.    Then there exists an so that .    Then there exists an so that .     Click the heels of your ruby slippers together three times.    So we have the displayed equation: .  This is a superfluous second paragraph in this block.    Thus .     Dorothy will not be much help with this proof.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
