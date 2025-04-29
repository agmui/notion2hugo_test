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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GXN64R%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIZf3nBPuU6vEVUgCtlKAl7oWN4NpH6KS50TXHvZa8cwIhAJ3enroorIUjqJwZdNcFpB3yUD3gIIbUL7o2I1lmWTJGKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLT43mA91HDLEYuZkq3AMhwKiPY5BoBFDXs9Nk4SYRxXHKE4uv3WwBg4TGWGXYp1tzEnSdw4of8FX3DNbjSpMAJAI7uPar6PEFCtl6sr58b6X%2Bl%2Fo0e7cOkYL1V6u36Z1hWiPsBX3GVxfRtz09kWn%2BQ84BVxx%2BC9zpXJPOJoHkcfm79vpwLC6HW45Mp4Rkc0QaN5bZKWpbM9TPlMzFqpfdCO%2B7VggEC0wSAVkdXfch18kUw7AaYYbl1oKFYko%2FvO4proP9Qw1zsuZY5R78Pp9B88vQsLFrrAUeCOwEseysvz%2Bfy7dyV1O8Px2x%2FmNd%2Fp887eZwwXuUrzU9xIrLVmWQiRjDHOIoTcVIKCrvxb1g6CrTxBcWtQ7SOfnX0F%2FHasrDDfyN91DRmmqyC738g%2FllU1pLiUhYmya%2F0HanXoMgtD7naxjt%2FgKubtFDnlk0ZgcIEAHW7NRzKVVT2fB8Vx5U57Hf6o6CMJqcGkXqvsMZQVXnz%2Bl99G9dl1UfnakfiyhU953RKgmtyEr7ENp5iEIVv6We0DsLiBBKlf4HwDA7Up3t6ytw9%2B7n4YbPZWOhvhp6VygCa0FE144j7jXOtR1IaecP%2BZQsJDa4HEsGNnb5xz7BRWkZxoWBDOYLOBZNmlArmGeh%2FSt7hfccZjCXosXABjqkASTLhPS8y%2FmImjDMoD4iSlU%2BAFiojSUc%2B13nkDWRRnW6PTbIkHycnG2nsOhtuNK3V0zX8KRaS5TsbUnqXcca6PGn490kjHfrudsuJFP83FVHuMM70rmGlcXdmMfQ8jLnzxBJZ50GG4thnHk2CSi5QStN%2BSDKqqZ7oNoIjvrsPcYHsWIjd4%2F1gxojnct53bQBPrh3cP2qmlOGyTwo9EKoeaxxMHU%2F&X-Amz-Signature=4c6e1e16b12ea267c52d2832ee8ab74edee46b3f98c1ad7353818b9fc537c257&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFOMQLH5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyztgAGj50L5zMsFKKr6JbUDcInnOlGs82fYbpDGfhwIgMogmGbR1quiMMwq%2FVVL4EJRUCt1%2BLBQN%2BibbJ5d2ja8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrldZS1RmtH7XMPoSrcA5IizOok36CzLajLjqIT5vpgkwaTgPePTd%2BWXwU8NBikNMIWWg%2FQA83Y98qHcmOrgLWYoVctxGiCRRLqNrmgTsIZKgXLvMvLnLhrRLesg5R6%2BIxuMD%2FK9NJc0pssMn5LByQM3vdSky3OhlJD3KIb8%2B1%2FQN6FQmBvECbsfKTIZgcZHN%2B9J1jpn6ZhEI%2B7HuewYIujfP588ghk9%2BmsnK0ASbRlxoh8htibmFI6OymKdLyQQF9ZUbY7ApsontkMu0hucHdPcsiK79hjTnV%2F4PF27YiEF66MnAgQg1MP9ZUuCjIq7S%2FhGvGyIlvXvZXlJ9o%2BtZlJe97hBJDuM2gk69axQAGu8OC%2B%2Fh9pzM41%2FFoGGpv%2FPTHU89tQ5d0ZWReMfL8crg9FYr1FtU%2FKAVdQU2x%2BNm3UFGX%2BzSmp3x%2Fq1Ihcuh%2FvslQwmW9wk1uOeCuijXIR0DNKur%2BDRBTHixMn1KUs10DAcnKo%2Bw7PoLrmvEfKTUVZSdXcEMIIDVoIkzXvQG3PfZat4GOCMEUbBpGD%2BZuR4NMdu%2Ff7VjF3nbsnBAHv3JDv8%2FdfEX3RI8bxtpyTLr2UnZT7kxt2u85%2B7j%2FvuInC2cSTK8iKFRpbBMe5eDrnqDXnrbdxaCzzP5qzMJs1MMmhxcAGOqUBjZB%2FHGNRWrsbHStsx1GRVEjx5VqOhS1T48OkDDg%2FskzuN2d0pcpsnnN2baHHe6BJBABgRHzLlOmDU0lhkD8yQ0Q0cSrxuA7PD1p40yKXGYcCuI3r31%2F5GzoU%2F08Y9iRMJkq5KM5jNkHUoptnQTexDFV266%2FSSfYT%2BUj9ltW2UxE4zGV%2BNOYEQ0SW8e63kdQRSqjcQq1X0nhHpsqEceTGdTxydYdv&X-Amz-Signature=e9826bf8d4f7f64f440282a9cb8e1702dcc457debc36ed6fdc68644fd35a6651&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
