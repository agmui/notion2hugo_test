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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBBTQKWL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDy3ibTNLeoJ1E4ppLfCWL9QM5vNFvXFMR1c1Oa1cTJ%2FwIge556bWtTNMi0HEjA6Ni2cyi3DPKAC7ew6GxZmt3f7J4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLm%2BXibwvEsshsfxuSrcA2TZdfa8aJowdN6y1i0ryJfXENE6uOsL0upCM8CZ8Gs2HLYVbgQ197vi8ko%2BBDKCuNIO%2BXOIEAeL6J%2BgYzlOm4hNJ8HHofM%2BaR1IyKXhtr8kO0XyUXLe8Xa4UVMN2wacCp1XfKRZ%2B4bKJVcZ4dt0JEUwHItPX%2B6vFwBzwAVsxDeuYn%2Fhv%2Bym8Iht2UM%2BGJxd4Yz32KGKaTH683Dm6VK0kjJI1%2BdjahdI3BhRfsud9l09f3iqQCcMCS5Zky0EmIZ853WPPIVZ3%2FdFVorWzhw%2BYqFRDD6hTs8XnM0OmkIJU0eC9dr7DTKsIIX1At1Cgin73DSi9XolXuX%2FdAeh1xzWKgNrlFqeM1FMzmnomxPE7wg84EeJJbfqZiGQI9LiLqHYgL0zAoPXGyD6%2BeukHUhglswOLzgbB6JN83LdPs8jXmerewV7NNQDjxubAXnY7VjVf0cuWiUUyPkkJ3thD3HiZO8t0JFC9%2BaYHEmeORJuOKUnugqwwcReSK4cOHw%2FB4n1Ou4d6s9lQEtE%2FCjF5eqTSVHkl9C54DGxKuSkJlLp3IvLQGxQ8jwZcOeoqhW89Ufr%2BWCa5wyjq0yiu61kc1lGiXBiExOZ0LjnO2GrJazFzw7Wk46mkQpyz1taJ5A0MKL44MMGOqUBCB5oYSJO%2BZruabZVQp6VFoez%2FcWHVHRD6H9dDVfSpnSLmh0OK7ugfbymP22iQ%2BxG7b5WmVad8NLjjwRa0Fexj4FJVCdR9SPkHQDFXtVRU7rqmAzE4s0PBR9S%2F%2FE2wOvLyJLRR6rcsQ0fs78GjD4PNMGdozdXsq5EekwNDIf5z6IBsSb1yTGkOERWkDXzTdvDFHpKAtXekWJuZRGN7oDXzEvt9Xci&X-Amz-Signature=40a944fa64467e22be9dc73b7b83af8122dd54779b3f3231aef497029169b4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DP7FIQX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCzNL6uT1qS5mII0XeA2xYHDY%2Fz8LF7%2B7OXo2kghlAkRQIgWCU6VSUc99l4d3RvgOQf1MfTSu6fWU52ehMYlJeMMoQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCRpT2Nwah5L291dsyrcA9nRChS1VSm2QmMr%2BHZmTbAmb0K4wjPuRb%2FOrgoEt8NArAJFsYeR7Re9S6qSvlD2ie%2BFaek%2BnhhSYqAz2VDaNMjx1eyj5tENkIp9Nmr9W8FLZ%2BtQhohlhXRGa1lg9p9KSqv6HIBSGV0%2FzIcEPYqV%2FUzI1wVwQ8lKA%2BbKIDhWglYfOHFHfqkqYh7O1p%2BHRNyXsBpU672dd9%2Fy5617gD9fDPMBfnVy26nfcm7blHk8CRy7Y%2BMVp4VQCsEEt6KNX2Qj62FdrIQKgVDEd8YWOxZYfWFAVOt1qpshjmAvxEDK8bxu0wFKaBKS%2FytLtT9mNQLcIXnPXz%2Be3Edtu3F7XaaCX7QeM2fKsQHYkkSehp91ozA%2BxZsXBinYU%2FezFLKRRNr3bERN%2B9M8kYIPfQr9BsK3VQQfPaeOWUa6NPHn1cT307EFoGwODnDPloaAHVL4jqQyIosX3PtE%2FbBXV0SgpzxvFV5Qg%2FkLM6sIzbMARXdrL60zR6dccblUzTDNs52b4uK3J5Wn%2BK5EqRTH2Oo2nfCyL6zPI4ROV31X3Lq0BrMe%2FOIagoxRrD6XzoQlbhABwmc0e8Pyakbdt88pWvx3OCV8Tk3LvUXUtOtA0Tu0rn76omo36iKSwLINGauTLvjQMIz54MMGOqUBhIX4fF5P5RHxtNsHh68HXM8FWm9iDKW2v4iAMV%2BXuWcMkiOcfaA0ksxqn2v8gtvf5ananyIQpyysa6SklIJstz0geININkTvdUXrEcV4vP1jejpf%2B3HV%2BB1lJDzV5ly%2FBeg52dYjT7fD83aY6RDakJLxGLahjecAREQ6WvQvnO6I9zufEQWhD1rUB12PqbRINvX12nIWBZXMJnIeY2Cr457XtzKA&X-Amz-Signature=6e3a365f3aa03390a7a4e7f06fb46282da94376859b4b5b3133e07422c010363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
