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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVM35CQY%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHBdC%2FaopzXU9s%2F165NmBIva7GPgxc%2FfgdYJQu1AIfARAiBKHQNvsLgpYaxbRdKxnWWykplH2v7DLuNQsx0bp5PCpyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMJsxE%2BsrPlArsgXMdKtwDrFrdsdX4oQaa0ontTNhk277bHA7sByCdNjnuN3GgS2dDzjCyJ60yuonYrQsS%2F1EMeSb713Rl9G3opeQGyRRg%2FODw5EvbRLOGlCUsEIojlzGBD4ymLMYKi6CH6WHryl3sqYfEtQRD1HxSDPOey85YGmWswy4K8WvRAOfR9KNfFkS%2B8y%2Bvce58B5D%2BR1XC1%2Bg9xZlGX%2BB%2FS2CCE3hXfW7ug%2BIspxzHcVh2HxWVs8gQr7BbfxXm5wXA5XYz6Emyi0ayuE9bTj7piiHv27ubCZYBh5cTeHb4KDQ3bmfKHX1aJz%2BrxY5Ky8VaTLPujPdSV%2BeQECxziqYkG8XPd8D80%2FTWKlDsLH7ORz8K2LLMMg21CSEY0W6ad%2B1QBv8jI3hIUlW%2Fc89PhE7mbIPTsmSVK3LUQ%2FsKFyPdpUpgiIsVQ5j6eC40VzWCtjJJ5HFTtA68VjPpMMnHmKMgo%2FF4ldScTTHGi%2Fy8f8%2F1WXDCFDSL6IXe7tSsuVitWN3tPpwEJTuOatIVbfXtdpEbQ3ishbOD0cw76w6vN5mYajJ%2BQR7Tmg5t%2B6XUHpQ5NPW2t%2BgpZ1At9I4i1m6gK5dJlnanXX%2B9OGklk%2BnOHgexQ7GBpSVc2bsBfyWLh8WnHJf%2FuTiSxgswjdKAvgY6pgHp5S9xAXoMjK9CNTOqjo8wtRlRC7TqLDXvIUEJ%2FR1xtELIeW%2FZAS0Yed1X%2FOLpl2gJ1Dp1GMjOtA%2BEv9AXv76%2FfCvB1B8c2N0oqu3hpUYz6hZaEQXlhBU7czLYlO1TflKexUKXlgp7MQakQ3z6yFiNYaDXVRnKrSSpvy9TtC1NetXlUo6l79rozK5IJLh9c2HoUwZMDERVqAy2pLXiXc%2BxsVh%2F3ub1&X-Amz-Signature=743c385d7fb2cbf435b8c79be6f6e232ce9b7a8e6610a09fa99732300a08b6bb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVK6R4F7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCm8ppaW6CTZ6jsIKWICxFmnL%2BbDTvgJ5skz%2FnLql66pAIhANlb%2FFpTMz9W%2BDo7zsVAKceLiN%2FJAfiBvkSKRawg0sNRKv8DCHIQABoMNjM3NDIzMTgzODA1IgwdPEZ6GpQCuI7bepwq3APyxjRqlp2oUikvhZ8WZZvenDeS6C4%2FBQMJ8ygRYvDFNwnllUdlbaHW29XRQfBoSy5S7aqzeX9zPHMOLtNv1wvGjx5cr4LVqhuN91tsF4R9iJHmrQSCRhBaqkvMJv1CK9C1qq7tLbY9bTlD3qTaBfGC5XQXEhDJp9xIgUEloSSdY7KI8RgodujWrU8y6ByKekAo27ZbR9Bqa1dW13Iy79ZlKdim3s4QJ2XQY7VyRQTbF%2BPmxGL%2BpqDLHSLcbyEshNAwqlHPuXX%2FUdwdXCwR5pkjlRODruAaORzcR5gtYpa35ZMm31rCYJjJpC6TjrUfE5A1REGrM9edvi1FHZTme3SeCZN2wGEkm9%2F0dl9e5IeBIytNgqDf1cdlzO5hlJhaOyfCr6w6h4R2d1ubMGp2br27Ru72WMtCPYcTBmwJXWcxBCsQm32xYjIdfYUuortpKK9F4vImyXu%2BxFNgB1AB8PLmV%2BwRVIkKkg2%2B8jTDJ6v9AVQlpqfI6kjOgBDxnkEWPAsx4HEUq7s%2BmCMyl6IgJ%2Ft%2BtADaunph8NrrkswuWC3OxSs69kEcY9hM5YvAiPALauHhHcYagN3sKEyyy4gEsTbflfWhgna1d2dxhs4Zj7zYTEOl4Q7STop1JmXA2zDT0IC%2BBjqkAT3bweGfI5zgOgsWt%2Ft0HxCW0XRxY6aVxJfqjPxaHZ8Iu5qpyfOrO8Tl9ZQqif1XId4e2KO4M%2BqzeQXcHaLbe5PA4jcGtFTrIvKdA6J4Q6k3YWJbF9uEGU8Q3Z3A0JUoJz9VlSnp1%2BmJ3INlcqP0Ln%2FxS1oZJJpOjgx4AzHCT5K5HmDxAkcT%2Bi9Te%2F8oFMhRrTribQoUKQwcEW9cwUe0f0SsQ39i&X-Amz-Signature=0b0e6081c32c998053fd25c2ac9e33d2a6343d9d107d6a8e69cfc62908529d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
