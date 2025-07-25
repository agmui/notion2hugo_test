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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGQI73OR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCJOnQYkWhquL78R4D0fICK8xobqQVNYWPCQN8YbiEHJwIhAJi7I0yNl7X3TRMtQcX8S9f9C9XuQzDZHqclunbusOBrKv8DCEIQABoMNjM3NDIzMTgzODA1IgwyYSwV%2FYvSOllLu5wq3AMCWtqtTKL5YFPjoEGAQlpcMpnA0Oz04%2BtDa4Vg7zg77rvzL0yx8xvrudf7n%2FUw5v6epal1%2BDYifYDqGHjPeto38hnfN76DKp%2BAZhHaTcdDim1UWssuIOXoHUIcqny62D%2B6JZi0XR%2BHneCpTbehBb2O7OjUUBoNM5FcP7wm0kPSiS22RkW6rqxGjPvg0khUr0aBM2eZprlmNq%2FF2H7CER%2BmC5UFos%2B3Mqmh%2BvOGxO55DvVAcVBovll%2FVg%2F7UdovX%2BxWpUYVaV3CuPIdmj5MXelS5VQ69QMr%2Bd6ZaPvOHPGPxA1G00w3H1g8lJvtU3ACb8nryIScU7c5rRPsLq8lRpc%2Bh7Ts5XYDKuhwExEMy0NXb8eH8fKr2EpfTf3fJ9LsqrU9eEVipbZCnMv74%2Fs6xV2DViCf%2BwizqW5SKm2fB1BC7W%2BYNZr4F3z7P7zMZYCdUv5jfCtQDIfpi4lCGA0VJwywBObyvLrJlLIPRXsFhhzdabn%2FgAZ0q%2BoNRTZPUXXwZvZIVcciq7Yp%2Bcx1i82qWGhv01N44uzW4hX20ZGuVNwOMg4YaAoF7vx5zSAMmv%2BLbrcU7NxbbdgXkx%2FoGybkLAbxN3ZxHlU7ibHHKFysNmrq7HSH3MblEb5lnA6r5TDBjY3EBjqkASmPcVUx3wOPydpUb%2FKRMh5EiJkkc1i1EojUqOfKRlRw7%2F3HzSqLYiK6MMLRpASrF%2Bah6CoHQfBqHkc5tyPRYNzrWxKY0Y20Fn3YM3yVtLpt8vZSyf6th4ro0mx9oXeILuezvlwPYbAtiSJmSV8AjvUqH%2Bav87STWb%2Fn4xbp%2BgsWMQH7PO7hQO%2BKQ9m8KxfZkoOnVnHi%2BfjXG4yGPjR0depL%2F8Fo&X-Amz-Signature=b66f101591d8970e11b4c95f7d793cbbb1ea6827e396f2abeb62f1234cc96685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626P2AELS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDc3tfJGU0SCI%2FN8W9dKGqHJ3zHiczl7pF%2B6lRfrjcx3QIgaQmeKuCrH8D7Lb8LL7ajx9wCxKyNFmW2u36Nb5Q3M8cq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLxXVjRNg9%2FntLi1MyrcA6o92UbGDtakbfpz41FL0BB5qIimbXFTIlUso3A9GJqf14cA0%2Bh5wpbxHQ3ZsdnkSkqxL%2FHb0R3ii7g%2FJjDBAl3wEoa4sQPOHxGik1z7ElvMXKJg33TD9GeOAaqzgAsRGKUJdvX%2BdcMjllOZ9it7nXMPVkoZCmwuJonfOMvRR00TeyCs7%2BXsS5wmz67m81zYrLXANNR1e6FRTn6XElHH8Khg1zjRr%2F4%2B00dF4f%2FYekrvoQl62XClZeYEcZ7ES7TXtMZUp33YQN0pxOdD97IRgENyY55YbccWFlBhNUH5AwUSGnF%2F8a1H7vEWxXxktV13JQ9PP5%2FuqafNt45zz6WBQWnglMyOKu4WK1hT8tMco2z4deweHQKwqowymJOKt97P1htJ2HDZAJSVLak7XUNoKnEwznRdtlXftJh0noJ0lzzzI0nRzCXL5VAgZ7dfRy4PNdPeJ1LNhi07TM5JUAus7JXGvxyTtjoIMwbNc4e0jooR17XXJOye5Z5IRX1cnTh%2F03Vi0OgjN1nMMj2xnr1z1ExbI4lTlo3lCIVc3yeKRKm%2B9vvkzQyOM2%2FQjsRTqxTH2k7My1bQqRCjWsFnVQfXJp8RgLlkQ%2FaVjoXCgFKjZmS66Jr72dOj%2FO2VQl1IMLSMjcQGOqUBlWiDUtmYKR73r40%2Bv5M8nCluWomMLhD9O55A0RbwXdNuDMFku42u6VDGLCNg6EcGL%2BBqKYnrNdXDEreb8piro2WurBGxLiQ0AiErJ9dGaiNK%2FN4uY5YtaE5P6FVZipN90YNum6yLXIwTzkD0%2F6HRP2QaC6sOvJd44BLs6brHUvTnysys6r0KygkCZGgXjOqbTV1LqExAZiVlQJIV3A0gzrE0SBB1&X-Amz-Signature=05d3e29b9a498035331956b2bdf43c93bbd6acda38f17eb24b8299b339fa4dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
