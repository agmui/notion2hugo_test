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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J57VEF2%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFjLXDF4xtBvR0XxggStqVel0DWA37R0LAaa%2B9HilUrMAiEAx0aGbikwtO1Tu%2F34LR3ALxT6%2FGGSXUWdsLKH69q72EEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRirbCVV74bsrfF8CrcA7iw1mjmPPKxFrlS6FPTjsfyb9BI2O%2BRNpwYpvQ7PTFHMm5haikyL6ncooqZA%2BTwkG7W4IVHFynJkPTTAo70y%2FsZAvM1xucn%2FevT3t8Dmhjgk6rekyvq%2BltugDw0iNss1dKgd%2B5ovIZAU4R%2BdHU4sGxX0BnvGk2CJJcTgYFmmNeQBUSENxzMTXL3VVT7SjOFrSzJBSkxYcqpNskGeo4sCurS6F5mwAAgFBG9cS0CPyp7f5SVEkbV9Mo2UpJbC5MflO%2F2sQA%2FPTK5smzF56%2BDLoP6mLqkq0GW10BmLE2h76hoX5Ewiaw31flOGf6zPnnQs8wrCbnrI1QeK56XzNgv0Cb4Ea0EJFOajD6tiVrIIlte4G2csXiNJrAfYAQ8s4TdBh62vwNj9QjtvG4lS77dIqgnf3HZXtTb342FcLB7HLudVOAoTIMPU2IrGIfEm2MS%2BDbEQrVHsITROdvCd41WRIFzvzY9ZxeVrN4PHjgXXLjzhPl3rHfYIQQuYF%2Fp0FXm3L2G1Xz5M925uKjQJCBlJtnHeuP0fN%2Fkb1hRsWFmaWuvdGOAgm1bqzQ6LqivVeGQKVGSaMb2rbD7OX6iPnN7ssZrWxZ1%2BgGW8FhSQvjn5MVU4cLQiBZLzSkCrDVHMNH09cEGOqUBb73TY6%2FH7tyPiF5h1WD4VPDHJ2HY%2FwsWReqTxTk0Tw6SdqMtSg7nF%2BxXuCirG7ElTU79BQ%2BbzZQAB6wmMeOPvZFr3Yneff79mneZ9au%2BXTeeu1hr15k1ESdRSmM%2FoZcO1gZ7Sel7Nr394XQbkdaOegTwZXOvBlpo9NN0RLK%2F%2FaW2zKYuzLc4TMwbFzom1L1bRag52U1MAzGkwiPI4%2BdEaA3sprW2&X-Amz-Signature=ef678db8837d44c7d1a949dfd7d021fff6bb74f37ad3e88b8c21a61f4a348516&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKMAMBRY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCICH5oGuH4HvvHws4enKDmQ321mYs37ya7RX35t0O7MjPAiAnbQkcYUKeoTDrNSCqT04i6b%2F6zqD4GkPFBF3gPiNdRyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgeNeCNABszH9gmbTKtwDBEm9JeTOHl6Cmd7dw0vYzAUNjAra8gWO7JAkQwW7ZG7lS9RUDtN7x3pWS3afFVKFFPtdQbCstWfmH7OKnR%2F2IoszHh9Sn3RFsTXDJoJEwcIpd7paXQYr1YBJcRfZcEILfbkcF6hZHH2xLq7sEhLzJr7nsaJ2vrvPQ11pwqdfpBfJI%2BGv0T4Xit1ape%2BSh6APUyIjd2ReJK6eDtvFPESFPzaWcgHsS5TrgthHVkNFMjneBNaHzCb6gfJtUI%2B8ZrZpNMNQ%2BmIHN0fc5wu4w3SOT1lvtpyI1zLZaUqcjso5y4s6ggzaUeQvKUOrgTw9FH4gD5GPn4IdsoqSpdh0Aw6FQNNg0bivEQshD08oBr9wqdj5PLTE3RCEUDuSh10L0CF4XNMN9siMxPPYK2dc4%2BxZHxv5jFb2ur0WKhK%2FiDrOK5Ct4DgeG%2Bl4BpFryW7kZbGaPP0nJCRyzklLlQnAQbw1brlsnufftucXb4K%2BI7%2BXzfq3mQ3BGQPJc5M5FbHgxpqVS6xxbJVmaZ5KOgzni9B10lN26eglLoPkPboc53RDDWCrTA57cuJmhgX2qK78wQWvx0zwUVl%2FopdJ5KL3cos2wgCQmV2cT%2FN5x0HhY16FA27TlWJNaQUpKxEuKoMw7vT1wQY6pgH2aQK9AUylYSd3XQoyawACTpwXgG2grEHR4cWMAxMwdV6%2FdTYC2D%2F9NvS463kz%2BMCBahVFaukTwIpjhsJz0OI08qmiVjRBs85upCa%2BEPlJLYfM%2F7i9BXAq%2FO%2BzTWeFr%2FxuHoxfXyXhUlUDkQVj5nmxqJL7HqQ4PDkk7A0%2BHxIUWQVA88HlKeukC%2B%2F7SbQ%2Bh4AaVzqPuYDwfg6CttWYKz26OlhuPObZ&X-Amz-Signature=bd4387cd74307eee5217f46341b612ce517c9a49218a712638ad88acaeb9f42d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
