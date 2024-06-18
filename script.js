// В блоке Featured Items небходимо реализовать шаблон товаров.
// Для этого необходимо создать json формат данных по всем товарам.
// Из этого файла сформировать блок Featured Items.

const url1 = "/data.json";

async function fetchData(url) {
	try {
		const responce = await fetch(url);
		const data = await responce.json();
		return data;
	} catch (error) {
		console.log(error.message);
	}
}

document.addEventListener("DOMContentLoaded", async () => {
	const data = await fetchData(url1);
	const cordsEl = document.querySelector(".cards__wrapper");
	data.forEach((element) => {
		cordsEl.insertAdjacentHTML(
			"beforeend",
			`
      <div class="cards__item">
							<div class="item-img" style="background-image: url(${element.img})">
								<div class="item-img__hover">
									<button class="item-img__hover-btn">Add to Cart</button>
								</div>
							</div>
							<div class="item-description">
								<h4 class="item-title">${element.title}</h4>
								<p class="item-text">${element.description}</p>
								<p class="item-price">$${element.price}</p>
							</div>
						</div>
      `
		);
	});
});
