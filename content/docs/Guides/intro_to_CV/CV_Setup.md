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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UEDPCO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD8vOq3STvfg3i2c4zQ8HkT%2B1hLdgHU4rfOljXfms%2B%2B5wIhANBAyzNvjueHGx4rhyERj%2FTxqwzJC5Ze%2Fo%2FAlScPsUohKv8DCHIQABoMNjM3NDIzMTgzODA1Igw5fcslAb%2FZe%2BUzT6wq3AMhNlc8U8zKm7WHc%2BldrYZHbK49%2FhwR%2FHgre8reQcYgWR2dTLaAurRZ0nkwU7YCCxJi0yQz8U5KaJ60NNLZAZzRHNCJsPeYmX30gwq%2FE2o%2FVVhlnOTn%2B80rMj%2Bhx2bFsHAVqKbzKDFeAJa6dD5tYL%2FJR2gjuBxdiJUl8398odHxIs3bJfdWz4jAFV8OIKG1xAyq71MCsNJQvtH6l0BR8%2B%2FUjJ3M9gp2C9mfOYdxs0hBZJjPFxx1cvzguFTr3tp5XqSjdN85InLiun1tpSyMZ56RIB0IZKDr6W4Tttr4LycAKk4mQ8VjxizTv4TheX2zyyaLqqBVxqSo9WsjoBSQpVy03KTF2%2BxWbGeS62%2FVo5d%2BZwImf8BYf%2Fm1NQYubg0Fle4LQiqQTSPkJnwIwGw%2B4BHVBYRgpFms%2F7eiF67J5vzpaQOxIrc1NbPAbDJ1SiWvvU56CpdyyuJNjlv2bnGnwye2vdLITigCr66jb40IkLxYwtLVYMCX8mL7NEAujVD5Pq1ww86WOf4iVSa2C%2BRAxQwkpuRXBtzjqTU0NvqUFSfNCi0M98P2J%2BlCI%2F6oUMRSic2ocRZ%2B%2BU7%2F0Fa2PrKAK7GTr2EDwtGYBjI%2F3RmEiz7y7dXIh5M6zcwm%2BwRgPzDAguq%2BBjqkAW6DQLQtGyDpSdvK%2FPDDxVgMucpN%2FKwIZwQs3BQAsEl35XNTvDZfGiT%2FVVLV%2FVFiUqH9wE0WvjT1Rob9TAOeV8v5JBZtIRjhJj5uJhGaeYF6KwT%2ByHb0sH4UyTOX8QhOcb8F0fs3%2FiKEwwWWvz21wMQmGm1n5f191s7P56oY%2BSfWNyS8QJTSETHiUX9qoDkMjlDBvcxLfYHCDaun9XXMEljQlLgL&X-Amz-Signature=1b8066df78d712027cf80e0e2bad885b0fbabdff33481a94c29185703b09330c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6XT2U74%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCeUXf36rSXScNG2ajY4sfRDBgQpk%2F93VSozBhw7PRbMwIgKEExHYXko5XJ8MYA5mgJO84C5izzL6Zj3N6Uani91Xcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKt%2FOLuV%2BiCZAhwGiCrcAxj0Lz55QBgQwiSXcwU%2FqeFQsCup0QCo%2BoWAcwGMT50dOBzVO0XBm%2BD99uNldOlcP4SvGIckouz2eUVmmQVGRs0KLcjA1JhkKZSQOXg38vl7UOBQ57oMBImQGmb3n%2FWZbMGH7Hc%2BMlEkDNL8IbAI3EeR9Sc2%2F5OF0PPYpM8C8VYX8JRDKLPXejuwbcTGpG46rathvrQ04zIjruPO35yTbqUrEQWZD2Jl1fKj7WrLPsf2GOpBgvx5URI2ax07%2BuT5UIM%2FkN2BTYdvEh4sf%2Fi8K9ChRfBsyjAB%2FBGWOiT4m6b%2FnUpBehNv3MyrsfUGkiXPD3%2BDDkvTwQXAD%2BHmo%2FyNzyVMaQRsi3NwK7%2F%2BHCQUhOWV7riB5QqT4sGM2%2BnTFzMw2cJhQt5UKCrGqO74h7QTzTGTcXM3u12SsUBL9LvGqYTKFdSqW3Af4Yqg7W7B17NQSYZJM6DCwXDsm99oSuUgXYQc7eRJ%2BWMeugxwhAStqPiglf27wJqTsWFiyqbQoyQXMkI3FUcJhRcjm01gJMNhUQNccaI%2BS0nvYGEVYfH6SRRarz%2FqK%2BMVyV%2FEfWNSkrYsFu%2FpN4hspDgoRobzSyCPCVp%2BkNM684PGTUjFb%2FON6Qa%2FOvluCuNp98aRSW3NMIuD6r4GOqUBWFQCYuFXUIqmB8xdXMNEqEC%2BbUS2IZ0TJf8Dniuo%2FrkdK7mrh2zuqImOR0mvRpDVW%2BlPH%2FF5M%2BhnZZCeNlqNIOfJOwSkpukAL3%2FImG4bxQNsSN3SaVB2msPfRx7nePVeUgmvQ3LXCBSYW6odImtt3IRtz%2F3bvsFCINQt5AYkrwyUG%2BKthYT%2F%2Fa9EYGR2dyk157kTyLkdq1UuTe4yzI9W4bFKyNTd&X-Amz-Signature=d7a9042e05c3d7f0894471d93ba0b140715a3bd5b3cd984dc7429d55c5a6b3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
