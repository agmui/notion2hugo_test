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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHCRV5J%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIDiK%2BdYFHemOylT4N6e31K8ou6SzFbRyfd3VmsnUST6JAiEAt69q4C3oTq6fEzovl%2FDdYICak3gwCaQCD3l4iyI0ddEq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDG6YX5SA2TtglSDaPCrcA8qb6B%2BanX7LcBOrMkYWfZMZKWoEUr6atDzkXG6Q4T49W20KeyONR8UUr753jKKwbthllYlVgBmStA8gjEm2m%2B2fVxF7AsRUEk68YOgNoIivwEf6HyphPb3s7LHY5aDADoNVGE1AXWMijoyZi%2FwfRBnNc%2BmYEt5fgr5vazVGWU78NWuux6ahRrGak9Xgy2gY%2BPiAiEjWgekNF6AT66CVyE7eoCjjkXJqk6qvSoq61tcbrsTZKxs5X%2B0%2B0dNke0BAXk%2B8CmasSP%2Bm3XhzpDUuIZvgUlk7TX0PlR%2BatQRmXQpj0Rc59MjYlpDmHQZ8crtLzho0HjUEHhfA08g8wOcYh3ci6XypbdAjWDJKbW2u0iY9wpGv8WhOYdAwmfl6aJ76os4r%2FKpyRnicpb9GsGAf%2FnGUi%2BsbIPavU4ss4HqGyraWVZN5dDSRjFuk9GIU043dhSvph66BjL2Dsoe40vgNd2ASo%2F95WMJND233QzH2VkwtAQp6XK0Oeec1DTzbQKk438CEhE%2F1143lV0Ai%2FfPCfRvhsJnZv8RJoVQkhlkj9RM44fS6IWv6sESBpI2vuXq20T757M50CMPCFQF%2BxCpm1DgEsfxN0Q0jGpq9zc1JuNdBR5UGK9lbx4t7lvBkMP%2Bf%2FMEGOqUBlsunmA%2FARDJhbQx18LGDHMTu%2Buq1zj4mv9RGdvTC%2F8iZekZGsf0J%2F5DtXOlEhAze%2BIiWHkjj2N63665vsjITVJ2BnWrTlESR6k9UtYu7ows1s9EIvfbpJDpa%2Bsutv7pIbpO6kGEdZmq1%2BkJmZa6c8kDPyAVh0LIMk9EAYJTWhKArAYykvNaK9akJuZmz%2BK1iMF42ZN2ML%2FSLX3xCz6obN3u%2Fx463&X-Amz-Signature=da33d406a7e36f83d613ebcf778c9fdf0e435c4d377d19e260002ff322d97aab&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BRC6T7%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDucRqg5TMMMsSLSz4541kWtDDsz0k5k%2BFQP5FXbTRlRgIgBGdq0ARS0B4vR4eTtHqmeq7b3qssIR2qkYg2QIJucasq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDA7fE%2BVXqtjHo0lJkSrcA1H1A%2FwIomG%2BVwYychRv4Ug9uEzaxTe9HVgEaQjwzCdethPcKD7AL0CGNxs%2B8nFSIhxHaXuAeI%2FbejsT39ht8fLUkJCxySxT2IjusEN6y4Bd732Hjg9HfUuTESJ%2Bk%2Bvt2SWWFVhI5KEqZEVXIK7irmh1SBBdzHcaCBCOVc14xP6eDANWUXHLpiFiTjtbYIiMGaH12KRo7GYb6X2SwUDIXEyNad%2FCiSpUlxcGqb05kzIWxULjZU8UvjPHBWYEr9Tt%2FznuE3GmwnhoHzkpesXDZkcuh4ztoOlfp%2Fek638ynNAEU4c8Yyi%2FOLKH4Nmghch3ckDRlQQERS7a2qJ6fN4uCoYoaX9%2Fc8UCs5YIN9C7mszXFYlmojQSNxd%2BswvOwRwVnmQ1KxP2qJODbs%2BOnmB0xFWdTvihEwe7193j9mEvukfYVOIBthSAKlyrDOwa7fyuj4FxjJFNSkqiU3HjNc2pHUU%2FH2Wjr6l5F8jcd0Vy1ONi1eKN0rNhn2IMeMrjdY0TbHGSlMx1TdF1LQhIqtMVx%2B7f6%2Bg7i45%2Fo4q%2FLlz5Izs60H%2BJyP3sCoO1qsishiUsMl8A3KfrjmEKqCSmHY96epehW6qYJk0IVmbW1m2y%2F%2FKQXVRAG0vxpef%2BHLEFMK2g%2FMEGOqUBpk10jW6ZodxuKHVk81rHFLyvQ5Pv6uxemlamej8wSdpSm%2FkycJ2oSXwJh5QnGNG8bb6%2BJyG1i3icAyaR7FQ3cmAJYM3f8aH53r1%2B20HsUC2DCqJTG0p9SqiwOznLvZG%2BabhM9WGZbxbUCZaB4KScpaCMfPVSDiiwGA47AgURF%2BIHM9VyhDR2m4gWkMQASmujq9ctcQPm7s5D%2BruiQvIVB1MMJUXq&X-Amz-Signature=3491ab9bf89d3a8e81e3507477cf70c7db4a32c59debb3a9c6d8d336bbd6d3a3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
