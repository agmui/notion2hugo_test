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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUMWLORT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICbIzckgDimi2XCfBDScfhuECi62R6xuPDy3y0gdH4MWAiBPmcVzVj3YskHzOF%2Fau7ozO1YWTG3W88JS3M9cllsbvSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkwkkNtS8Tz%2FVbl8%2BKtwDVboj3cJaPATCJm%2BEroGbpqj1hC8jXpB2SEXqc%2BQBSQdUZBEDjQg4DBN9QUjLUmPdXXOHyoMD6NYbTQP9EObZ6Hdly%2Fgr8sNCT%2BKAoO13%2Fwl8mmdeOhZzTxuQmklHJa1LG%2BC7gzIGHKekmM%2F45oQ3pGXFlr%2BM3KUAD27EQdaCJaXdizdfn6EwFEq4DlouLS7qrsoZvFkigH2T7Ln%2FKetxOUhCm9kOiFocsra%2BzmkZzdCdByOhggtYewhA%2BHwXpdiEzGE9PWlx%2F6olyMGLuZyg0sYOE%2B%2B8poqaZljTamch7WR3qnPvZqRSIObDd3lbNcEW4Ke6i9F%2FZpzogZ0jnacgRH4o%2B%2BVkqXqgF0Dsmg0xLqH%2FPcIES1PlvKRN7vri3bvhYqxO3NcsNqbWmqrt5QYpBUtcE7S30FNSHwhdbcdMUFLvT7Q0Pu7egoCbpnKokP4%2BtN3Qs7oAtfViXgjBt0OxZv%2BlmuPx01FHJuNnYv9y3X17UWyw1ZzGu2eJ9TqYN4l65wQyphn%2B1MYkXOjmjHLiskGNqGakbroS8%2FBC9A75efruSN7KsPs1WKx3Q8u6bGow%2FI4xH7Ludl%2Fra0AZY95V2fk1ehxzxJUHlJvSZCEJ86rD0NLp31jJdtCljt0wldPVxAY6pgF8i0B0sC73LtkORtkwI8zOWigexe1HI0wJCUtaPBEYQKnIhnavY7tnX5BQuErQ37hyG80m%2FeT9HYrr4W%2BRhOApg72zAUAMrtUQDrkMSqLiMi5RshejZB%2FNPr9CYY9u7vk%2BCrHYL2%2BYF74j%2F8jo8HhaF1gkSZwvZnt4ajLMpl%2BRxPXseY6JR7QTNzgzKpBp2lPMPrFl3IPxBpjKO5Y0d%2FHeznMVmJTm&X-Amz-Signature=89521d6a2af39cf9d62e3877ac4accc8189ce5f56f30a94feaa1fc6a4caf755c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJEMPJV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAqO4d81ChSmxp7%2FnUrFGFH4dkyF165%2FM%2BYEzIly10TbAiBKjHO0pQlMJyrFjf4bYvflT%2Br2DWCFC5SwfflIZN%2FdRSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR7AvldMgGV18RBmeKtwDvMNaQKbCyJWI7nwvX7Zoj0RCXlkW4UfdNs7BEbLpT86vJM989yl8reyVPzgHHJocNtrZFC9u7Pwizdgvj7TzwQNmnt1i6KwUu2u1CJ5PoWOO5K0wzjp8Km63OHSvaXyScqkdcPc%2FC886tp2uwNXsAk3vptaRVoSWavi1H3WqlgiKS3I%2BGkhN7JTC7ziN4DtgmQyuL9A1Y4A1B%2BqfEnRvn8WM2O1rHevOwKlEWOL8fP6p253fdSkfzK2pjx9S7qUBQQtg%2FbD8wjgcp5r6GKQtR%2BaOxfl9GFUvd0hgV9HrSvW%2B2d0yG75jkYawPFOaPfm1YQ6ueNYq2DJstlQ%2BCqIBqWUxmXUS0g29NPVWvj1rDR5V73n5sNFSo8k88Px5flvKU3gZ%2Byj7vkIc7OB4%2Bb7cAi1Tjy0aK%2BWi1fp%2FB2Fzjm3T4MhKzg2MCrNt9IvQgOfnXcy82EezVNJ5oiLI3yUWRCGLfeHXg1MwIaB6bdCv4cUGenbzWuE1IGOQY09XXeBczcfJipw%2Bj4moAvePrPHyjzDxffI0Q77FF9ov8gJDvwaCtxVK%2BWFT5iFwPGe4KhbLQVhTzPGMs9ONjew%2BgRkxs9biliO4l34sOBBvm9cfwvxX5ywWgWdf7J2u2S4wwNPVxAY6pgHFQtBqh6w%2BxHs75SyIqniUYMk3%2BjAZX75QeDLXaPymWwWUrJ1IJUdDYfmw%2FLSggjtzxILg1xq2groiHTJFbD%2BZm2HAqx1%2FW2zPOBkBxuSmhQNaaamAO2hdZt6yKr1Kpnbkvle4ADLYJwYjsxmendqS8CUEh4Wo4K%2BGXQ1ph%2F2zzBz1qCk%2B3oP9myrvI9n4neMguelaRNQ5binG60eihmyiWjndo9cY&X-Amz-Signature=1f8cdad958f38149917c48e2754962cdb210a5f3cf8d0de8c74fa5b923760c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
