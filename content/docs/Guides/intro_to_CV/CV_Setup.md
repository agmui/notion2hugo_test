---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2NGILN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsFs3UBb5Wfj3q79Pjb7Uf7Y3PxodfCLh2f72hAOqXCAiEAtbZ5JAvtxUOBHnW22F5RHaDaIv7V4Z%2BWS5HFINH3S7gq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDADjeSkNd2a%2BMpWAPyrcAyVcImcmIJXIvV5ZLOXu8WexiYsJ2usT29rdVu2UoBeFno8apTHTWy3E9%2Fpcoqr1FwS8nrMjhiNqD%2FLHLOuEDktth0XJmZi6cbF1I6S90Mv9SDjLfsHlvFQd%2BgF0AAenFbdhZnjVSB4PbvJOzidPCU%2FafQNG9A0AZFFmTVUTMiV8TdVcN3vyxKDvWaM5eq2NjRFGh0bihsKAbApEUlb4rQgsmPgFKgGnDubyogEJ1PKFUQ2yoI%2FD%2F%2FsniqK9gmGMM1eWL9bUht8qe9XqK7VsTKhM7DdpZh424Dbe0VA19UYe5wknrvYaPzkG873lN%2BVQBMQhgsQJTAv7bA0%2FQTRtp1BuLu6oWwIOZorFTVxhlvWhN6%2FzQja3G9NsCz%2FLW%2Bvc%2BD%2FLgVjITgcjNq6RKfJ5ZwiunqCH4R8yH62TVyl%2BZoOERiQ0x3hYQlYMQOVVLirzrObnGiDrc2QnmtYxQr3rySnG1FKz%2FKauWAH2eLEI9Qy3%2BpmnJQEySijNfBpMOATxbFjwTuZwJW8fargdQWA2ROpWt4a13u9uL46%2FbSXfVpZlhJpt8NfV%2F7h4ZnNBDXnZAjLTg%2FeQr8nG3Z2DnUcwvnemO3KmW0MlsM5dmtGnRm3aXcDfJgo0L0mcIkSoMO3cp8EGOqUBekjhVIR5mCuc%2FdexvLdOcJ9txvoOTpZoQS5BAOjOH98M20S5tpUejYugIQ9wMaaMzPWfYS9P0hjSVpvFSDret%2F8LcVz3FdcrBCfFYis%2BxhNzrsJ%2Bdowax7hJLE2cQxZqCRBCFe28w6d%2FipGlnh4MjSR4SX3%2BivzfztJnWXr1ROUH%2BZXKLJeeGuKSkUoZdyuvEo42R8QH%2BMgnyeVOifWzCrD6%2Fk63&X-Amz-Signature=e58bb7ff4fbfc7cee81b091cc2f36ef85d5fda6a20b47a1458619efbe930a417&X-Amz-SignedHeaders=host&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5LWZWQV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvtDEPL7IhmkZogYv1Kr%2BzYi6wu6EHPRGZ79BOHekJzAiEAk3ZGy%2FHGGQAkB8Xuv7lHJCN%2BBcoJg3mrXP9GyYJs1f8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKOiZsIskDz%2BwT347yrcA40qSxoXrc2iiuTnw%2BQa28VzxplRUQzfIVrG%2FxS7P6Sg%2BcwuIFC2%2FKrdrN1exzqBHeeUH7mAzZVGRn6FhCBnrMaUtlHgwiVYUUZqSIxSaiwIigGjq7NFTtOqh%2FJSVb%2F8IrTjKo7NrSHsTtv%2B2JvuaaOibc0%2BxRp3Tfbc81lo27meWoBQxkhHrxbyNqaFV0GQDaaao49M7O1SeUdCsS%2Ba0MZPd9gC3ItdyGxnnCyUR9uh3%2BD%2BsG4mmGjpn61UthBYpAQwE8Hlc9yT%2B8Q13u7YghwuTuszLtNyvDQlnKySyTfkcEl941FuY%2FNxE4BtI6I05PriRyJ0Th7OhbG5%2BPHLEyk3EnPAFJejbb9%2B0u5L7jjJT1cMJbFzRvm5jOYL3454ifvNEIacGNRu5Vpe%2B9qbEvTWjAgV1VTF0%2FMkpNF4mAy9HlkhGOK7w0%2FzeJ9CRp6MKdFhAxr76SWi5LoNlEFdutAtZEH88YNQCIMQ3exHcpZJYPLlavcwhWyGE7jXQ0y6bj7Z%2FnSvaiAzwrmP6dpb4SfH9NydjZcMsrVpMsNkcZhmh%2BhmUBzVx%2Bhby3%2FETsPzRoZQzhNGFyX4TkizHgO73yUL9zDdQx9b8n6n%2FdnaYRiWdqwx%2BmWk0qHrkuj%2FMMDapsEGOqUBw0g8EKDLCAbOhgyA9zrDxaazUE4hc49abr%2BTXj6jJZ0DJcNEOoPK03f1gIrxDxz7%2F2e01mkOQmuJpa4ivWBzXBhkx03xwYzcqtRTsnk%2FCdesHvq%2BNYSSnITM9D7suIE6ob6R5ugcrNn6X%2Bqq%2F79HWMMYu2wM19Imd9L%2FPmeBr7H0VuSqN0A0OqVtexPtexzw3VvCEIqQrg2U57kE08kWI%2FIDVEvH&X-Amz-Signature=80d82827219c874db3fd181b46c36b5c0f8753a7c8eaaaaebb0fb53bfb9a785c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
