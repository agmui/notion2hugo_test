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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKJQSDK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCU%2F6idf5YnAcLTgJ08NOuyTx676VKcY85rblj4KCN4bwIhAIXiyQHksX9tTjI%2F6cr1Vndynx5tmgXAJOKr96RwRHwHKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOAbgeYJSWBmjSMS4q3AM%2BBHVpqhnSB2T5BZFeC%2FnFf9MX%2B9xXME88fbOw%2BQpht8iWXPrq9w2Uijgq9GBr9aR5SyWKuepMEhpndORX2%2B5kChj13Hr0AKnt4fefg%2F4POlACAtv6M7qCd0csOnqdb1KS8FfJ%2FtOJlJd9yTRp5yQpEIwuWkvl5CTkNIdN6ZsPqufhbshRhtF2P%2B28DwMv6ivRsBa9ex9OjaXty88p6fE957eg5tY40iBoXRQCSVG69QIWldWJNCCGnv0voIL%2F%2BGV0sr8LQDIQ1DVC%2BwIjBTeoiFBOhxF7wzSoU0n5P7b6MnXIo6Fo%2Fx0gAFk9zWZ%2BFxewUc5iS%2BgwMjdzrz7lfEhD0b71WnoFeFyImhRJL%2BdHniAE1NFPKG5lpO%2B2kbyGEe0yxPD3uMYSkDyyMLQAHHelMUPPtYIYH%2FeZp3bjq8b0l%2B9naCAdip9rfHynlZFBTHKqZbuTgCu%2FSk22VZk%2BxPCHXnqSw3OfmnqxPbUIURu7iBc7qwF7AaGAPnJa5zJwOqanasGdWY9VgW00%2Fs1dMjmDXLRiZd2df0ZwVB71iAEXXgY2o0a12VJCAleVnqvKP9cuVPuox2Ew0MTsGaGYWE0kBbCXvmfQ6PUe%2FjdFWoiKhqeUsRcXk37MHzXB9zCnqe%2B%2FBjqkAcor%2Ft5ElXZf3lguutLyFgqM3ZrFTcHV1NPpANoy9rJAsAHMtAEofHekq%2BWT2dOBXdcYzwJONKH%2BbOUNfZYZcVrvagGcn%2BakVG6N9d%2FpG%2BFHbDqLUGOMRaZ%2FYjUNkd6AWEYUgdIPv%2F5Zw3y9fT3sfq0HOqX5uq8vBDDtz1wL6bWSeg5Nqby%2FZa27dsPdPP5USJmpIJ6AF%2Bt2hOlvV2%2Faj5x2qDar&X-Amz-Signature=2d745210a7cbf51d8c65617fc026f53927f7e86b96afa7726caee8ad347e7ee1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2GDABWE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDJuswjV1O8XBZVSuYz2wANd%2FR6fyiyE0yJNVrv%2BbwdrAIgSmB3sm4yHo6MgKjpkwzFG2ceIlCYGJuz6pBqcYT0UpwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKr%2Ft0efPggi%2BYXPyrcA7k0skj%2B44LFwJxqbzndXANYt%2FCQ6ObG62RlXRjnTvUmo0MIk%2FdWPhDTBWcgnrGNWdvQ8%2B%2F88gNlkyzWbeqWWWG5tgbzpLapI23aOdvDHRaewM%2Blq3hTLEQ9tQxDvdLyiuBGUNtZV0yw7jJiybdMYJfVJpjGn0uHs8ulRmDyTPNhVqcYu1dJzUeC6w%2FDEHtG2Y8SrTU2sobCntE%2FwV%2BTzb5FxhTZmirivpGVtsGXUwhBLuxDtFhgM0lM1LwIdRNftWYIFjG4wNZu98MCnhZQFxdVj6Z7S2XcX%2FuBwDfIRyzfKD0Gjq1Dn%2FvM8iRq7nt6ifc%2BJ00IYfdSD7QPUnf1Ha7wEuHyUhBj0gIU7j%2BzQa1440zyDYVePPo2ivdau8lhuG2wBf7xtplUWW6oVhueavH4QreBecfQxYBmT4%2F%2B105BvU1VnL4UidPsWk5jRurFw4Si3kmOmCNuCGvh39G1iu%2FK31B2y3VVy9ZjsOykqDoMNEvKij5a8GsH5ArOzLWZrN2ouod%2Fno%2F2nl%2BTOg9wWyEtBTogXmKd5C49fokS0mA0%2F7C1sAMpxmMffKzzCLq56TVtjipjPZvu329YcEe%2F3vb%2F8LQvmkZcuwyQk4xFR78eWUxxisviolcXUYYPMKDf778GOqUBWHJBjmx3PutJwBY2bixtDcrooANy48rn4aXlbK8D3XVpbIRc7BGmDB%2FOvW3%2BSCPqAZwNMa1UXvBzuff5wyzWB7m5%2F5c9EXrOpe6x7gLRl5D67%2Bs9MzDe3NTiGZyTGqeg9VsH%2B8KIpN5BV%2Ft7XX9PhHiP9gzQ66VPV1Ir7W6C4ogOjT6JDht4lsAz1yLJp7m%2BK6IWxS4AlY3LuWC0JSaYLQy%2Fyg%2F6&X-Amz-Signature=8711fe4548cf32875879fcb36bdc7f7cdd5ad2e1ee56bedfc9f01e2a254e82ad&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
