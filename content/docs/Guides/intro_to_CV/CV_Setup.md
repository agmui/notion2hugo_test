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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR5EJLWW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCpPMvuzMHNzDbcxVvFruOqA3uw5oFm%2FQhXqOEuDQQxGAIhAIPsGbI16BT9N6qe%2BJCFURTHcghvM0nzqyRft3tLxcgmKv8DCF8QABoMNjM3NDIzMTgzODA1IgwBLx8w5z6%2F%2FO6Y9qsq3AP9TNY6aRwfBxIXaxpMyR%2FjCKvAY8eMuvKYw5FFraX8ZLopapYtAp%2Fu4aNiS84aiOzQExpKk%2FHJyKE7U9bb6hE2pFpbOQI6rnG0yregmyMhOGzk8nf5%2BS4pMF7DRKbv8%2FVMXk9b4iFIGTkFH47sGkQirdkRfp3DUXYGFWKiLb6CW9eCTJgpspQUFgEpwuyMKWeS7o50vhu%2BHRlJQaQn4M5dGwSwzFc2OT6K0aLt6HruDgjXp4ZAQOW2RF5YHkH3SpvFAAgp2gGO4w0q1v6X1AIPTpzU1lsU0M3iTcoVGWmwmuyhnzXjJIAV%2B4Ai7z%2FsNByIOSAbCtMDRQVrnAvTuLcOqYomtN1kclKvw45%2BiK68mS4cejtW2G2SwkUEK1WP7ZoLFkwpZgQ3SiJyX69jMbqe%2FtmwujaN8pGtSH%2BWvhksxLFOloW1goWX97bGQuwY3eZGjIhQhhTc8us8P3PEhMrPvn%2FNk2Krz2R2t5z3vPRis%2FFyyafq5C5jH8wj3tS201Y3Kg5vSE4pzXy9Zl4ZgWDmuKWkrssEh%2FbOj8c1p7XE3WJZ%2FN%2BonIyKd0UVU94PX3DQ3HxsoXA3OHSVpPLr5BxfLJ73EjtbROYzWOGnJVNzYj4%2ForSc7dXPHM2SkjD5nfXCBjqkAUfDVv6prJSg3G9zAtC7FDwJ%2BeM5zBt5zAWRvbfc1zXrZgfJkPK92%2B%2BfjQZNoEZVPct4TvpAuY6HJ%2BiXRUVzoFxOirsrssfiZlVmryXrU1W9bezEPsPifavlxPJlCkHJvxbg5fr7N69PLljiNHTk3f06rhWj90sv6Z0vszvLbtTaNqWMaIRn3yJUywGqv1zj95gkJzGAVV4xR8ylIjkm51VjrKKP&X-Amz-Signature=81492d86dddf87f9d3e2f76a6bae8116147cc63b50cc8b244c09c1e854e151d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIHYUEQA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDnzzmQPB%2Fd9NgoOh%2FZ%2BT8vG344w21SOnVkVld4XbQOVAiEA1qY4PxxWyZhpMfqixeGQ3xkgpOy8MoB5TQBr7mNp5T8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDC0zs0hFi7YVdnnAXCrcA1aB3R%2FzxJGxstYGjpb629sZ267Kd05HS5JUx75LG%2BFh7lLhkOgSxArMoZ63E2SrNcxTP9pHc3%2FDzJ5l0DBXlJMAViYjwOzUMLMNUR0KEm7jeIjNtOJWpjq9vjiOH6%2BH4NSnb7rCfD0iPySbj7OPvXvWgXRlFLXZdHZ8LhMDvWa851PgBUZT85nWT3ETBNtOw%2B5syEm5BJr26KFLv0YD01PGNsrTpdaYQvtd47U574vz8MSSxATG8QqCGSAeZjGRNnE5td7kCNLIlgF2QlEqP76smLtQMSSeqnm5otGWTYxTcjUlwxmyz7szBi4iTMgdKCLhVs%2B6DapDVVLw17OhwTylo9sCxNtzsz8h6VP8epnoKJFWQq2bpb94RG9Q8dgoknCMcgWALsCE79qovIlw1gb0wdeNL%2BjgbNpTDRs%2BWy4FPFkzZ7R0yvmTpo2GrIflX3tlar4GfeKZuH7fdD6HOHMFe0BdjecWMxYmj4RZQ8%2BIF9ZQ74w0H7MtQp%2BdTbRNF0hOj1Vs8Cw185%2Fbt%2BM4ACL5Q0QX19xk4RD0pKVStctE74aXlWOo2LDpzf5XamsGdWG9Tlw521Zp9o0kzEs4uazaXjvhf9MjBgIr2MYeh%2FoIgN5Qm%2F8x%2FWP6dztwMLCc9cIGOqUBny%2F0PkdXBTz9FkhcyEe%2FbKZcNR7jzqFtdgHNk8sHArey11ENGdW%2FStz3GcFuaagnkICL4WiLQWGtGMwFHzHMm0Ys1cT3WltXZtORwbgTMuWHTn6SGeeSgsMlMhkWwheQQuVJvb6ot1e9vW%2Bd3uDBfkpOFV5BK27Gwgi4QhyCKCsXpdSwhkqUEeOJdNrLAh%2FiPMpUFx8T%2F%2FBiLZxPfBE7yphwx8Ke&X-Amz-Signature=65bb73f79519e7c4199e274ae0f3c64bd6b7149ba0dc1ea337bff6b607169f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
