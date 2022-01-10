let VideoCard = document.getElementsByClassName("video_container");
try {
	fetch("https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "youtube-v31.p.rapidapi.com",
			"x-rapidapi-key": "68197b1ce6msh6ce7056f6ff81b8p15f267jsn3e6a795b9c4a"
		}
	})
		.then(response => response.json())
		.then(data => {
			data.items.forEach(item => {
				fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${item.snippet.channelId}`, {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "youtube-v31.p.rapidapi.com",
						"x-rapidapi-key": "68197b1ce6msh6ce7056f6ff81b8p15f267jsn3e6a795b9c4a"
					}
				})
					.then(response => response.json()
					)
					.then(data => {
						item.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
						makeVideoCard(item)
					}

					)
					.catch(err => console.log(err));

			});



		})
} catch {
	err => console.error(err);

}
const makeVideoCard = (data) => {
	VideoCard.innerHTML += `
	<div id="video">
	<img src=${data.snippet.thumbnails.default.url} class="thumbnail">
	<div class="content">
		<img src=${data.channelThumbnail} class="channel-icon">
		<div class="info">
			<h4 class="video-title">
				${data.snippet.title}
			</h4>
			<p class="channel-name">
				${data.snippet.channelTitle}
			</p>
		</div>


	</div>
</div>
	
	
	`

}

// ${video_details.snippet.channelId}


