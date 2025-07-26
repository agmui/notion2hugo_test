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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGXMGHX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDUPnbt6OjhoWIuxyga8vrovYgwjCRlvtM4DoDn%2FJwYqQIhAI1FROq3%2B%2FHZF8RfK5F%2B5WXRF26ZQAA%2BZv62vYYJ8GHzKv8DCGUQABoMNjM3NDIzMTgzODA1IgzVqWb5OJ7gR8J0M8wq3ANR4DR2r7Wg2%2FSqOzrGSIoGoHJBcJRzrV0D9m9Ze1K7DC6z36Yx5vQLZbS%2FOaLWP1fWC%2B1amUqwz%2Fz%2BqXnKKQ%2BvrirA4B8%2BdR22TSY6P%2FhyES8zbyKIZQouPTF7JAWVfK1PvJJzKrSM6aPdZZfF1Hz4MB7SV3zJtZFXyFGqOqjD1r1zMWeSG3YQ64%2FbVqaGwHWERc5fM9OZsV0nJ8tRb23Lvgd9D9Gr1ikeqzW60IpZ528nA8uUB7YpY7MEXSScLf%2B%2Fc8ZN%2B8FbKnCkhg%2F9wgsj42VpK2OFsXXTZmSs3hP2BAKZAfwrzF6YL%2FW4Ka1oFRm%2FBxZ43NR5RdEHMLTZi76nQqQghbBe5UcdOy3F8HaX%2Ff%2FKgOhAv5gqnKv%2BQlcXF3d5%2BPj9sT89JTIl8TZd6YYHAqruWM3zcEdU%2B%2Fi91hJ%2FgGnoltTnFpX8v%2Foa1pkvlifA3eWsYmy6u%2BHC2r66EGyvNvoYcgXux36rLcSnpvn3j8w%2FFo8EOU%2FbWSQxkLivS%2FRo6ny65lrN80vjYYftgKD99SAYwd%2BEl355Nit1PtY7E%2Bp8QDkXFhwyjBwHxSXJHtb23DcHWONi9TGE22ir6o%2FE5egnmxxi%2BHFSie2fWokqnfaC5GrT8YBvHS%2FApTCf2ZTEBjqkAWOxdo64GjZqPVKz8Qf5w%2BsAOl3jvkqAF4325VYEK95BpG7rd%2FJwZjULzx%2FwS6dBqFIYVVbXpQJ53c7coAQtt44Rzz5POoLOrgUzISc9CsWtpKAwYyU4JaihYNiDERqVA37C3LHnuhsE85RUcRNCddNmyLTeu0rR%2FJRuU17myRXP40Px0tXaDu1YuoYNiLWCvkXSX7VNjt6roFMG8VdxUTN7VZsA&X-Amz-Signature=35513ed415f4e831f16b42a955f5cec58c00b43b7ff911b455fce2fb840179cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMAAKJ4T%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIHkY5iX8aSn7%2Fn8ZUqYWFCnOU0FwVMiQb0qlFzXuCup%2BAiBvo%2FVkYKoRvIXthwLrCvFeybOTPVV0Nair8kx07kpGFSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMWEVW1%2F2pkeTbmP0VKtwDegnXfmbEqJ82FYfW9R3C6VctU0G3hBbg17Yu3tglNMiDm3n%2BVI9dEhUyvJH2Gpg%2FDmuLW4X9n7utXBPj5Hs80sgxByvGn9sjKkx5i9oMWYhFMqhOI8xQLqPTNtYarGyeZu%2Bv5fYE71VDOf9v%2FMXLmwNGxNFT6nT8Lxu5BF8%2Bzow54NQ8aiCtecck%2FsPRBVhyZE9uKKbrONWKi1EdhPbsE3cqesApMtj%2FIyYfXU%2Bp27A8CQXguAejqPPXTcl1TMP%2BIQ6q%2BzGQWijxEtiOFtY0FiH1mncAbyPzrq6ukLhfWpNmZJCopdJCXh9Nn1JVNoFqTO8j8hFg6wDgYsjuXCHmvUOYaQ4tvE1ljK%2B26tJr47zRXGcP5byUeInHlHzz7XJs8uqd0iwRhPrDP0YpsmIhgEWn8T%2BsZBnbJm1vf13YEw0tANP7thx8giLH06EUfQTS6iVI64t5E8Q6ugEWv1R8KSikyVMymDVCW4qKvIORMCbKSV1ysH%2BZJi3q9NIqit5RGAqa7AZtJNKoyc%2BECSF9zLYXzm2QY2ni7NIQm%2FoXT74qNSrsDkSzGvpMpbni%2BzT%2BVhRPcOQxsQTY5nfyIfDfssieT7hFkWN1h7YltyJEwPbh9ufZW1FEqobTsbow0NiUxAY6pgG917%2BRTWPF8o4GqNKGgPdbWCJK8v6kfKvB5Osza%2BZa4jZ9bLRqcLMs6P%2BZ5cPYG2izMFyqrOUbYj6DaUTuFbnvmP3vz2tCoAlXGv4I8SBgZtIut81tAWhtmDwuCnZYnMLdoaDVwttysrwlN7rzwQQAZvEsnQuEAiwYjIKC44g%2FcO%2Fn3OtoTebabwr0ePVWY02FOaOuefnf8zrqGYQd9uSK3hQP9xrp&X-Amz-Signature=16d09a3810c851c34f5f4f66a007e3dd0dfed25b247b743365cf6d48badc3176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
