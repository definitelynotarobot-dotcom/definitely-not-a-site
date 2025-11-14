---
title: People Powered Projects.
description: Where teambuilding meets community impact.
showHeader: false
layout: "single"
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
    }, 3000);
  }
  
  // Second rotating word - changes every 2 seconds (same timing)
  const element2 = document.querySelector('.rotating-word-2');
  if (element2) {
    const words2 = ['By', 'With', 'For', 'Great', 'Real', 'Awesome'];
    let currentIndex2 = 0;
    
    setInterval(function() {
      currentIndex2 = (currentIndex2 + 1) % words2.length;
      element2.textContent = words2[currentIndex2];
    }, 3000);
  }
});
</script>

{{< /column >}}
{{< column >}}
{{< spacer >}}
{{< img 
  src="/img/food_kits.png" 
  alt="food kits" 
  width="1184" 
  height="864" 
  loading="eager" 
  >}}
{{< /column >}}
{{< /columns >}}

---

{{< center >}}
## What We Do
{{< /center >}}

{{< intro >}}
We design meaningful teambuilding projects that connect teams to real community needs, primarily serving the **Portland and Seattle metro areas**. Every event we create is locally requested and thoughtfully planned, giving participants a chance to build, create, and give back. 
{{< /intro >}}

---

{{< center >}}
## Who We Work With
{{< /center >}}

### Companies

{{< intro >}}
Bring your team together through purpose-driven projects that strengthen connection while giving back. We handle the planning, materials, and facilitation so your group can focus entirely on impact. Choose from flexible options: get **[In the community]({{< ref "projects/community.md" >}})** for hands-on service, engage **[At your workplace]({{< ref "projects/office.md" >}})** for maximum convenience, explore our popular **[Make and take]({{< ref "projects/makeandtake.md" >}})** projects, or organize service **[On your schedule]({{< ref "projects/yourschedule.md" >}})** with project boxes.
{{< /intro >}}

### Nonprofits and Community Partners

{{< intro >}}
We develop projects based on your real needs. From schools to community gardens, our projects lead participants in creating meaningful items and improvements for your organization. [Reach out and let's have a conversation around how we can help!](/faq/#nonprofits)
{{< /intro >}}

### Individuals

{{< intro >}}
Looking to get involved? We'll help connect you to local volunteer opportunities or group events that fit your interests and schedule. [Learn more](/faq/#individual-involvement) 
{{< /intro >}}