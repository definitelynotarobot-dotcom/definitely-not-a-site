---
title: Definitely Not a Robot
description: Homepage for Definitely Not a Robot, links to community projects, services, About/FAQ pages.
showHeader: false
---

{{< columns count=2 >}}
{{< column >}}

<h1>
  <span class="rotating-word-1" style="color: #ea7200;">Helpful</span><br>
  Projects,<br>
  <span class="rotating-word-2" style="color: #ea7200; display: inline-block; min-width: 80px;">By</span><br>
  People
</h1>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // First rotating word - changes every 2 seconds
  const element1 = document.querySelector('.rotating-word-1');
  if (element1) {
    const words1 = ['Helpful', 'Fun', 'Local', 'Community', 'Thoughtful', 'Collaborative', 'Creative', 'Supportive', 'Meaningful', 'Effective', 'Teambuilding'];
    let currentIndex1 = 0;
    
    setInterval(function() {
      currentIndex1 = (currentIndex1 + 1) % words1.length;
      element1.textContent = words1[currentIndex1];
    }, 2000);
  }
  
  // Second rotating word - changes every 2 seconds (same timing)
  const element2 = document.querySelector('.rotating-word-2');
  if (element2) {
    const words2 = ['By', 'With', 'For', 'Great', 'Real', 'Awesome'];
    let currentIndex2 = 0;
    
    setInterval(function() {
      currentIndex2 = (currentIndex2 + 1) % words2.length;
      element2.textContent = words2[currentIndex2];
    }, 2000);
  }
});
</script>

{{< /column >}}
{{< column >}}

{{< img src="/img/square_crate.jpg" loading="eager" >}}
{{< /column >}}
{{< /columns >}}


# Let's do something human together. Because we're not robots, and doing things for other people is kinda the. Primarily working in the Portland and Seattle metro areas, with locations in Renton and Vancouver, Washington. Powered by People. People Powered Projects. 



{{< cards count=4 >}}
{{< card >}}
#### Our Projects
Check out the kinds of projects your team can take on. We can do projects where you want, when you want, for your cause area.
{{< spacer 5 >}}
{{< button link="/demo-page" text="Demo Page" >}}
{{< /card >}}
{{< card >}}
#### Our Services
We work with companies, nonprofits, schools, parks, and individuals to bring community projects to life. See how to get involved. 
{{< spacer 5 >}}
{{< button link="/faq" text="FAQs" >}}
{{< /card >}}
{{< card >}}
#### About Us
Why do we do this work? How do we choose what projects to take on? 
{{< spacer 55 >}}
{{< button link="/blog" text="Blog" >}}
{{< /card >}}
{{< card >}}
#### FAQ
Have more questions? Check out our FAQ, or feel free to reach out directly.
{{< spacer 55 >}}
{{< button link="/demo-page" text="Demo Page" >}}
{{< /card >}}
{{< spacer 10 >}}
{{< /cards >}}

