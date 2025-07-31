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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UJWQNVK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMfkvzTp7vm7T2pefGnEAtc6EIOvqM67TAc%2B4WrYv8UAiBJ7bCPBfqQ12%2B9Y6TcZyd2On1%2Bv1ZBZTzGgstzK%2FyPnyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAEDzYG0EKDipBBWyKtwDEAu3E2TuvfqsAqo3kOBpjBjNesFF7wmbG61R8Zfv0o783cLiS3wyNK2t8Ebq%2B6MgJYL1RVaGDZYts%2Bf1o2plStWjrBDPoG%2BkCS2nKN9bgYiXDwZ2iTqyoo1%2FmXBybkyow5BP%2FSWBI3zb1R%2BCVqKQWCBNi6v9ST349hpV2TRUnH90%2FcZVuIC1Jx%2FCngxu3AzxYjYMAfSU7rDA1iZlQxg%2BGwe7CDpBGizOP4KMOwzhGvgvKxHFKwL21tDFgrwR4T5bOwzgA254w0EnFgF8eqZ8un%2FALxIOd4xSb%2BMsorlXfpJ9SKo5ZZuf2SXJlzX3xmpbP074SLrtkAZZS2q9jtg8%2FVDQG7p8bP%2B%2B4lgRYypjDukl5Ry26zXMenwgZNuNv44F0kgAurjZi2NW%2FiJdOMO998a04N1dfJbWHWCJRzxIrcWHASlkGVQl7Werm9zig%2BEcxvV5FcywbkpHwO6FLb%2BAm5jzAo0mS65GsaXENiXK%2BMcl5CpgnorlTG0jpvNqOIgTmwIhpQervZjdAxS26aKrmeV4tcOkKX9g7VDZI60MdAFp5a8HrxRygJvTnhkaMGVBIWLk9GScfiN1jSa7ha4acECTHyQwhHHgX3stQjPsKFVqup4kldFjxks%2Fj38wzriuxAY6pgH1%2FGM%2BD8ZK8I%2BShxfa7ln78dIxCJsEI%2Fgdp4ANNZdo2OVF7tMSWGq9kVw5M8LGe8tNr84BBHALZ71%2BFk2%2Fs%2FX1Qa7C5XhkwS5qVHpzT9VX0zodDPUpWKZVpXr4RNN3L60tmCZAHdN0TR11W6Lxh08dKZ2b8OdNQkCowxZx4Lz6JauJK%2BRHyqQq3h3jywx8utR76drKmI6DuQQBMLuD7Uv7eHgi9ITV&X-Amz-Signature=e93fd7845f962f8e957dea5e81849ea4313e2c4e43cfb64d4016cc0b50592780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TXRQ67%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3UcmmoI20WZdxD7VhKyLkWGiAwUtUgLIxlBuaz3eRLAiEAjP7w3cpAYA2etkgZJVK6sbppzGjgHUJcx2Ae4asUFzwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9a2RJVyOmAj09DLircA8wkHGrFWmcfvoM1tprc34Yr5zWwL5Q7df%2FNKZvQsQKCdqBsYMzW9Al3x%2BCKCc1n2iBTwGzxZ8%2FHfR%2FboYf8jMA6MYwCN6C5UJCe8t3Qon9QVIzk%2FCRsk34mSoMETs9lEc5Hk4tLDcSQuTFNSiHKU%2BP%2B2e%2BAKneyz6D7kqJCv17S9c1nbA7Dx9FBNBf5qSFMwLqkYvEJ3kdNVwNpp74%2F1OA%2FRuBy%2B199hECFq4ys5qUKD2waL24k1nZrOrH8yrbSBe9rJdJQ%2B968mlKJFAYYP1B7R32T9gnaqEFa4un6O%2FilzcEAuDfaTaEa9rtaHcJFl1tzDrjZyZysCYWrV%2FmDqxDEyhMU2uvltgaebuO3E8e60Px1ablvrOQfzfxGnRUVxKh0Y9FjFOuOfBI6UEBSyfJtcPkflAktu51JnAQnA5kLCvfA5LrXj8JM9NPwxY2rnBHuUDiWlhWJRZvKpxY1S0hLrpBY1GkUy8jqiRi8oed00PystNEPe8nbkONtvpdcKHMG6jydm%2FSEQ7dFuS4IQwmvLjMxCbqG9pny3yhtWwTwWMyDF1nuwzVAVsPA%2FVG%2BoKzDWO4qw1zVxwvopE04LwHIYVpguNJ7bC6Aqodj1svwUoOslr6yJe3wFeRzMIq5rsQGOqUBZRdJIqHXEs%2Fz9v2u%2FRFiBd0OKr8vKrt%2FOBd2aUTJZJGtZrXOTcWuzZ0%2FZ3Wb7be6Nvk%2Bncf1Ez%2F0CM7YW8w4tapHyxG9zPPJaThwltHS%2BmQW99aSUfI3yCXKnfDteuuCKmr%2BKoEBy34cQIsz4r%2BvMrYQyjsW9SsKX1%2F3eVXXP00QfooVhMHctRN1CX0WItuPB27W%2FgblLIibtNifEVTVORLcXoID&X-Amz-Signature=70be98b2c6a2fb7147927b3cd857db1d982a019292c5bc1cd75af1a5d34026f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
