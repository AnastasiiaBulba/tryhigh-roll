// Sample data structure - in real implementation this would be loaded from JSON files
const siteData = {
  reviews: [
    {
      id: 1,
      author: "Traffic Master Alex",
      text: "Drive.IO completely changed my perspective on traffic management! The way you have to think strategically about timing traffic lights while managing multiple vehicle types is brilliant. I've spent countless hours perfecting my intersection control skills, and the satisfaction of achieving perfect traffic flow is unmatched. The emergency vehicle mode is particularly challenging and realistic.",
      rating: 5,
    },
    {
      id: 2,
      author: "Intersection Queen Maria",
      text: "As a logistics coordinator, I was skeptical about traffic simulation games, but Drive.IO blew me away! The realistic scenarios mirror real-world traffic challenges. I love how each intersection presents unique problems to solve. The rush hour mode is my favorite - it really tests your decision-making under pressure. This game has actually improved my real-world traffic awareness!",
      rating: 5,
    },
    {
      id: 3,
      author: "Signal Controller Tom",
      text: "My 12-year-old son and I play Drive.IO together every weekend! It's amazing how the game teaches traffic safety concepts while being incredibly fun. He's learned about right-of-way rules, emergency vehicle priority, and timing without even realizing he's learning. The different difficulty levels are perfect - we can both enjoy it at our own skill levels.",
      rating: 5,
    },
    {
      id: 4,
      author: "Traffic Flow Expert Sarah",
      text: "I use Drive.IO during my lunch breaks at work, and it's the perfect mental reset! The traffic simulation is incredibly realistic - you can feel the pressure of managing multiple lanes and different vehicle speeds. The scoring system is fair and motivating. I've become obsessed with achieving perfect scores on complex intersections. This game is pure genius!",
      rating: 5,
    },
    {
      id: 5,
      author: "Road Safety Guru Mike",
      text: "Drive.IO is the traffic management game I've been waiting for! The interface is intuitive, the graphics are clean, and the gameplay is addictive. I love how each scenario feels different - from simple four-way stops to complex multi-lane intersections. The emergency vehicle mode adds a whole new level of challenge. This game has become my daily stress relief!",
      rating: 5,
    },
    {
      id: 6,
      author: "Traffic Strategist Elena",
      text: "This game is absolutely phenomenal! As someone who works in urban planning, I appreciate the realistic traffic patterns and the way the game simulates real-world intersection challenges. The different vehicle types behave authentically, and the traffic light timing mechanics are spot-on. I've recommended this game to all my colleagues. It's both educational and incredibly entertaining!",
      rating: 5,
    },
  ],

  news: [
    {
      id: 1,
      title: "New Emergency Vehicle Mode Released",
      category: "Traffic Management Updates",
      icon: "🚨",
      date: "March 15, 2025",
      excerpt:
        "We've added a new game mode that focuses on emergency vehicle priority. Now you must manage traffic while ensuring emergency vehicles can pass through intersections quickly and safely.",
      fullText:
        "We're excited to announce our newest game mode - Emergency Vehicle Priority! This challenging new mode puts you in control of intersections where emergency vehicles (ambulances, fire trucks, police cars) need immediate passage. You'll need to quickly assess traffic situations and make split-second decisions to clear the way for emergency vehicles while maintaining regular traffic flow. The mode includes realistic emergency vehicle behaviors, sirens, and flashing lights. Players will earn bonus points for quick response times and safe emergency vehicle passage. This mode is designed to test your reflexes and decision-making skills under pressure. All existing game modes remain unchanged, and you can access the new Emergency Vehicle Mode immediately. We've also improved the overall traffic simulation engine to provide more realistic vehicle behaviors across all modes.<br><br><img src='./depictions_car/drive1.jpg' alt='Emergency Vehicle Mode' style='width: 100%; max-width: 500px; border-radius: 8px; margin: 20px 0;'>",
    },
    {
      id: 2,
      title: "Community Traffic Management Stories",
      category: "Traffic Diaries",
      icon: "👥",
      date: "March 28, 2025",
      excerpt:
        "Discover amazing traffic management achievements by our community members. From perfect intersection scores to innovative traffic flow strategies, see how players are mastering Drive.IO.",
      fullText:
        "We're absolutely blown away by the incredible traffic management skills our community has been demonstrating! This month, we're featuring some of the most impressive achievements shared by our players. From players who've achieved perfect scores on complex intersections to those who've developed innovative strategies for managing heavy traffic flow, our community continues to amaze us with their strategic thinking. We've seen everything from players who can manage multiple intersections simultaneously to those who've mastered the timing of traffic light changes for maximum efficiency. Many players have shared that the game has helped them develop better decision-making skills, with some even applying their improved strategic thinking to real-life situations. We love seeing how each person approaches the same traffic scenarios with completely different strategies, creating unique and effective solutions.",
    },
    {
      id: 3,
      title: "Performance Improvements & Bug Fixes",
      category: "Traffic Management Updates",
      icon: "⚡",
      date: "April 12, 2025",
      excerpt:
        "We've optimized the game for smoother performance and fixed several minor bugs. Your traffic management experience should now be even more fluid and enjoyable.",
      fullText:
        "We're constantly working to improve your Drive.IO experience, and this update brings significant performance improvements and bug fixes. We've optimized the traffic simulation engine to provide smoother vehicle movements, especially on older devices. The traffic light controls are now more responsive, and we've reduced loading times between different intersection scenarios. We've also fixed several minor bugs that were affecting the user experience, including issues with vehicle collision detection and traffic light synchronization. The game should now run more smoothly across all devices, providing an even more enjoyable traffic management experience. We've also improved the auto-save feature to ensure your progress is always protected. These updates are part of our ongoing commitment to providing the best possible traffic simulation experience.",
    },
    {
      id: 4,
      title: "New Complex Intersection Collection",
      category: "Traffic Management Updates",
      icon: "🚦",
      date: "April 25, 2025",
      excerpt:
        "Introducing our new complex intersection collection with 20 challenging scenarios perfect for advanced traffic management. Each intersection is carefully designed to test your strategic thinking.",
      fullText:
        "We're thrilled to introduce our brand new Complex Intersection Collection! This special release features 20 intricately designed intersection scenarios that are perfect for advanced traffic management challenges. Each intersection has been carefully crafted with attention to detail, providing the perfect balance of complexity and accessibility. The designs range from simple four-way stops to complex multi-lane intersections with pedestrian crossings, ensuring there's something for every skill level. Many of our players have found that managing these complex intersections helps them develop better strategic thinking skills, making it the perfect activity for improving decision-making abilities. The intersections are designed to be managed in any order, allowing for complete creative freedom in your approach. We've also included special traffic flow suggestions for each design to help you get started. This collection represents our commitment to providing not just entertainment, but also educational value through realistic traffic simulation.<br><br><img src='./depictions_car/drive2.jpg' alt='Complex Intersection Collection' style='width: 100%; max-width: 500px; border-radius: 8px; margin: 20px 0;'>",
    },
    {
      id: 5,
      title: "Player Story: From Gamer to Traffic Strategist",
      category: "Traffic Diaries",
      icon: "🧠",
      date: "June 8, 2025",
      excerpt:
        "Read the inspiring story of Alex, a logistics manager who discovered the practical benefits of traffic management simulation during his daily commute planning.",
      fullText:
        "Today we want to share the inspiring story of Alex, a logistics manager who discovered the practical benefits of traffic management simulation. Alex works in a busy city and was struggling with route planning and traffic optimization for his delivery fleet. He discovered Drive.IO during a particularly challenging period and found that the strategic thinking required in the game helped him approach real traffic problems more systematically. 'I started playing during my lunch breaks at work,' Alex shares. 'Even just 15 minutes of traffic management simulation helped me think more strategically about route planning and timing.' Alex's story is just one example of how our game is helping people develop practical skills through entertainment. He has since completed over 100 intersection scenarios and has even started a small traffic management discussion group with his colleagues. 'It's amazing how something so engaging can have such practical applications,' he says. Stories like Alex's remind us why we created this game and inspire us to continue improving the experience for all our players.",
    },
    {
      id: 6,
      title: "Advanced Traffic Analytics Released",
      category: "Traffic Management Updates",
      icon: "📊",
      date: "June 22, 2025",
      excerpt:
        "New advanced traffic analytics including detailed performance metrics, traffic flow analysis, and optimization suggestions are now available for premium users. Transform your traffic management with data-driven insights.",
      fullText:
        "We're excited to announce the release of our advanced traffic analytics for premium users! This major update introduces data-driven features that will take your traffic management to the next level. The new analytics dashboard provides detailed performance metrics including average wait times, traffic flow efficiency, and collision prevention rates. The traffic flow analysis feature helps you identify bottlenecks and optimize your intersection management strategies. Advanced optimization suggestions include timing recommendations for traffic lights and vehicle flow patterns that maximize efficiency. We've also added a performance history feature that tracks your improvement over time, making it easier to see your progress and identify areas for improvement. The analytics are designed to be intuitive while providing powerful insights. Early feedback from our beta testers has been overwhelmingly positive, with many users reporting that these new features have helped them achieve higher scores and develop better traffic management strategies. The advanced analytics are available immediately for all premium subscribers, and we're offering a special discount for new users who want to try these features.",
    },
  ],

  contact: {
    email: "info@tryhigh-roll.com",
    phone: "+1 (403) 767-5555",
    address: "67 Main Street, Vancouver, British Columbia V5K 0A1, Canada",
    mapLocation: "67 Main Street, Vancouver, British Columbia V5K 0A1, Canada",
  },
};

// Load reviews
function loadReviews() {
  const reviewsContainer = document.getElementById("reviews-container");
  if (!reviewsContainer) return;

  siteData.reviews.forEach((review) => {
    const reviewCard = document.createElement("div");
    reviewCard.className = "review-card";

    const trafficLights = "🚦".repeat(review.rating);

    reviewCard.innerHTML = `
            <div class="review-rating">
                <span class="star">${trafficLights}</span>
            </div>
            <p class="review-text">"${review.text}"</p>
            <div class="review-author">${review.author}</div>
        `;

    reviewsContainer.appendChild(reviewCard);
  });
}

// Load news (for news page)
function loadNews() {
  const newsContainer = document.getElementById("news-container");
  if (!newsContainer) return;

  // Group articles by category
  const trafficUpdates = siteData.news.filter(
    (article) => article.category === "Traffic Management Updates"
  );
  const trafficDiaries = siteData.news.filter(
    (article) => article.category === "Traffic Diaries"
  );

  // Create Traffic Management Updates section
  const updatesSection = document.createElement("div");
  updatesSection.className = "news-section-category";
  updatesSection.innerHTML = `
    <h2 class="category-title">Traffic Management Updates</h2>
    <div class="news-grid-category">
      ${trafficUpdates
        .map(
          (article) => `
        <div class="news-card">
          <div class="news-icon-container">
            <div class="news-icon">${article.icon}</div>
          </div>
          <div class="news-content">
            <div class="news-category">${article.category}</div>
            <div class="news-date">${article.date}</div>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <button class="btn btn-secondary read-more-btn" data-article-id="${article.id}">Read More</button>
            <div class="news-full-text" id="full-text-${article.id}" style="display: none;">
              <p>${article.fullText}</p>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  newsContainer.appendChild(updatesSection);

  // Create Traffic Diaries section
  const diariesSection = document.createElement("div");
  diariesSection.className = "news-section-category";
  diariesSection.innerHTML = `
    <h2 class="category-title">Traffic Diaries</h2>
    <div class="news-grid-category">
      ${trafficDiaries
        .map(
          (article) => `
        <div class="news-card">
          <div class="news-icon-container">
            <div class="news-icon">${article.icon}</div>
          </div>
          <div class="news-content">
            <div class="news-category">${article.category}</div>
            <div class="news-date">${article.date}</div>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <button class="btn btn-secondary read-more-btn" data-article-id="${article.id}">Read More</button>
            <div class="news-full-text" id="full-text-${article.id}" style="display: none;">
              <p>${article.fullText}</p>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  newsContainer.appendChild(diariesSection);

  // Add event listeners for read more buttons
  const readMoreBtns = document.querySelectorAll(".read-more-btn");
  readMoreBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const articleId = this.getAttribute("data-article-id");
      const fullText = document.getElementById(`full-text-${articleId}`);
      const btnText = this.textContent;

      if (fullText.style.display === "none") {
        fullText.style.display = "block";
        this.textContent = "Read Less";
        this.classList.add("active");
      } else {
        fullText.style.display = "none";
        this.textContent = "Read More";
        this.classList.remove("active");
      }
    });
  });
}

// Initialize data loading when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  loadReviews();
  loadNews();
});
