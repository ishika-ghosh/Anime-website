
try {
	fetch("https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=DwzOspIPCo8&part=id%2Csnippet&type=video&maxResults=50&chart=mostPopular", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "youtube-v31.p.rapidapi.com",
			"x-rapidapi-key": "be5314a7b0msh6e622b08562a18fp118c9bjsn3adde9dd8b11"
		}
	})
		.then(response => response.json())
		.then(data => {
			console.log("in then")
			console.log(data)
			
			data.items.forEach((item) => {
				fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${item.snippet.channelId}`, {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "youtube-v31.p.rapidapi.com",
						'x-rapidapi-key': 'be5314a7b0msh6e622b08562a18fp118c9bjsn3adde9dd8b11'
					}
				})
					.then(response => response.json()
					)
					.then(data => {
						
						item.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
						$(".video_container").append(
							`
					<a href="video.html" class="videoIdLink"><div id="video" onclick=showVideo(${item.id.videoId})>
							<img src=${item.snippet.thumbnails.high.url} class="thumbnail">
						<div class="content">
							<img src=${item.channelThumbnail} class="channel-icon">
							<div class="info">
								<h4 class="video-title">
									${item.snippet.title}
								</h4>
								<p class="channel-name">
									${item.snippet.channelTitle}
								</p>
								<span class="channel-name">${item.snippet.publishedAt}</span>
							</div>


						</div>
					</div></a>
	
	
	`
						)
						


					}

					)

					.catch(err => console.error(err));

			})



		})

} catch {
	err => console.error(err);

}
function showVideo(videoId) {
	console.log("Inthe function")
	fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "youtube-v31.p.rapidapi.com",
		"x-rapidapi-key": "68197b1ce6msh6ce7056f6ff81b8p15f267jsn3e6a795b9c4a"
	}
})
.then(response => response.json)
.then(data=>console.log(data))
.catch(err => {
	console.error(err);
});

	
}

//search-videos
const searchInput=document.getElementById("search-input")
const searchBtn=document.getElementsByClassName("search_btn")
// location.href='https://www.youtube.com/watch?v=${item.id.videoId}'


