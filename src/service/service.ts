import { Iservice } from "./Iservice";

export class service implements Iservice {
    GetData() {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=5ab379e6")
            .then(resolve => resolve.json())
            .then(data => {
                console.log(data);

                let container = document.createElement("div");
                let poster = document.createElement("img");
                let title = document.createElement("h1");
                let year = document.createElement("h3");
                let plot = document.createElement("p");

                poster.src = data.Poster;
                title.innerHTML = data.Title;
                year.innerHTML = data.Year;
                plot.innerHTML = data.Plot;

                container.append(poster, title, year, plot)
                document.body.appendChild(container)
            })
    }
};