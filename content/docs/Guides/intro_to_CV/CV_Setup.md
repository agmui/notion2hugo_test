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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667SY4Y6B%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEJ2E3uIBohumeDXvNzaepNgA6vOHTqTbu%2BHP1PjZHa%2FAiEArKGdBtYIiys4l%2Bej9pL9dAz6eTx%2Fnx%2BSYZ%2BdUH5%2B4ecqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL72bPoteboVOtJJ%2FCrcAxGiANNqL1CwGRzL1nAsZR2p03Pq1BAB1lhWxjF8KRa3nLINSvXNiBxR8uw%2F7u%2F7GpHRPPddv4UWM%2FcBs3yz2TmJnQji0wyxs9308G4PdZBvUvzEKZDOQwyslka3CM02kpddu7y%2BtNzi0FUrhICUtn1hTPBIvp9YfHYO7iMRWBPUQqUShvqqwzWZSfmp%2BtksrBM5aXXgTGD3vo2%2BeyIRTsiLt1RmOzRRwEz350nnFQJf78RV6YR9uTk2vidumQrerOt%2FMcEj0HbtNqhX2jwsfbcNv1iL5qysi7yqq3nug6y6zioGQUDaH12LXQiEpRtYheIDBknK4tc6V0G8dwkOVbWymXNFYu0aChoInv5twUqSe0YjAhFt19cQF0NLYISSbX1NsYf8jt0E%2FXovKvsxe8IMrU%2FRmYMFipQ%2Fj1u6zX%2FrrkgCwaBLNr3yBc1qG1qpoQb%2BwP2GqePLiH0ufeFfgrLEU7TXEotreyjrCxedRJUQYlhZyoI64ngF1OlqvJswYMVm2rkXuTm7Hpm%2BgJK6JicY4mt%2B0a63Fj2HKn88RMJ14CtHJSfuIXzcKaU4Rz3xDDfPybxWLxefaMgOA9W%2BPDhIBN383iC3VOwLwlxg7HG%2FMv5vqjDQNy7AA793MMja070GOqUBFpjtL3k%2B%2B0075NZleNGVT2OQxVlkCV9l6p2yXSPhZCHS78IOVT%2Bg5UAJrA6oEojAJ2E6%2BY6UoP7RruYBlEFr%2Bz6ELDcI%2B2%2FYnb3j6jkbJDnZ%2FjbnLA%2FjgnQ19GdTp1xj1Vw9suFzU5pfeQ06RbO2PTX7NyYDR25SvjvpZieESoqx4T4B%2FKCPwrwqURJwcmFCKOJmgi75HGh7YCl0kC4EgOkm5com&X-Amz-Signature=f7829ba511ffd5d93cc7c86391f01b972e683ba09d9fc86937e5ea15a8a74968&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOUCVS57%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD4uRMfkHjy%2B5U%2B2TaJl5HauFeNezPnm3qkOMfvIqrQmwIhANO8qMO5blfBNoPbJKXjZ1QkoaNeLl1he7T%2Bmgg4PniPKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydHhHrENIJYVey8CIq3ANUXOH94s9mitdFjuhJQ3mkZ38cgVwezgwVYs%2BYXMXz5OphtIUll4NVWJOMnf35wdVCO5QOlDTo4dYECtjRigUYwrF7MHQQPKrkH9JU4L0wz5PG82FH4mkEyqf%2FscNVaFGi%2FK8lxKa%2FfvBWRYYec7QRQKLClzEUSSWw1oF7U7y%2FzdafnPtVABcMj%2Bqfd%2BatvFNUkxdiq6OUA%2Bclhj9MbkNdoyDKtQrNGuYFTW5EwjA07jnFEEHq3XcEUYn88bInIYJ8rEILEanTe0Qf4f3DkjOb7F0dkZJP0a60ZXU45sUAvrdnGT51D2psETxQ4X85Gs%2B68k%2ByStsCgrNQRdxK5U9otrsj7KsQ%2FxNjCIIkj7jlNF%2F2XmbxXX6bB33Pck%2FbYES4baqdRrW%2FhtJc3urpUUDh50UyEF%2FuxKo4i4gdR38ci3NWmzbHJupe2%2BvAmfi3AQjMGmKcBQ1dICUE8YbGstD%2BtL2Vb1PC6rI0%2FmQFYjOpXa0c5Bg7qD%2Bac0R5KU%2BZeGWLPnPI0oKzheJ4rZ1MT1wWryPePjX%2FHOv80mDakJeP37iCDjKG0u8DqStR9UUJliKD5h33OFeaUeNKUYDqG%2FM1Xj3VfmdpORhyhC76KxX7MYhfI0Qr4VWc8sJPADD42dO9BjqkAZhTK4VfACeQ5Fp2QGS1MqTpnX0gWqBeT1th236YoJQQlw4AULLMvzlPSNfTatJ57J%2FeVfEGkvjkVlnI09baFaB04XYEtruclAhmW%2BpdwurYZQYbTyiuS6d%2BHC1ra9OdHH9ZEVj8Mp5NjpEPudt%2F7njppeYDDYivcikHdoI2x8W9%2FKOJ7zya3h9AfzDB2yzq94%2BtOiyAFiBbQiperCwQztSqOPJp&X-Amz-Signature=e1cd789600e7bb6adac3aac8befd1529fe81b0683a5b9caaa4628bb44c3a0b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
