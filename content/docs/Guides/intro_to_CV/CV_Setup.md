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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4B3N7M7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGDrFIeS3PlzXbW7DSyn4P4W0pmz%2BN70Vd0OAjmtag8qAiEAm0DU8qE8d54eqrmB40xVIAQO%2FJBDDu4iw%2FqvUBJVJB4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKz%2FgXR%2Bal8qi3iipCrcA5uBI8oMxnSghtR3UK2Np3IuM1kt%2FfPL6v8Wf9SGLVXPNUWYNTGpJlb45x41tiLcMdnMJfMf9VkMk17FpIkJ5ot%2BMnV5dsDA8ppQZSjdngoMKrib9FnkhrjFgB%2BMV430GqkD2kJcvGDvvSyKHjwz%2BguMMXqhdoNTcABgocBYMb%2BcbE89DGNUF%2BdsPQWoFCLQ17qwTpb0vfday9PTUm64fhiVj2sxmftUwtzRamPu%2BcDW15J1ZYjVO1F84RMT4KMzZwNvGe4L25c74SiX31K%2FVz4fne7pm0AJ9jm39jWB4jhZIRo9BlEFrT%2F2tgtSLYePO3Io8B9oaHtdJ7uq769BYRThcURQ42UImt91XrAuEGytrOCdyfQlZ9kc4Oo9BvMCTx64%2F3igYtctPaimeys50d0fMSwsCoBPkkX5kZUAdvnDmH3ilJZhsXofME8CW5h37lNy749VcC5SU8YU9wMOs8mXB2L6B2KMZw8gYMupwjLKYhDpcOfPc%2FVXalooU739ZPy%2BsRli2lzEwL1jAl7Kn2Z4Dd%2Fn59MOMnPzSzv8tm7IdOcqdTfcvhpOdVYF8SJtQksL8Tmjue0ThKICBi0U0DM8%2F%2Fcps%2FxJLaCdm5hlhW2%2B55%2BCticy9V0OtFEIMM%2F65cMGOqUBu%2F0B9q2YFfEIFI7AUq6V2S7w0vdop9Uq%2B3kb7HpyRdlFd2eu9q5lVYI8w0ginCR4WiCYU7QRQm5WYELkhWKkJCHsrTfDZ%2FEwtZu%2FJgPHfuX6c8Lj%2BfsNatdzKejDIfx33NKO7jqCYpk0FhbRXNG6d5pmav1kE5RFNopSBj0VuuN%2BoC9%2BHHHy2JfpuTbZb9YKk6pcRKeMd5H%2FfDnsAB8GR1iGuFoB&X-Amz-Signature=809f9742213a7b82c43a372349c29aa3dba1409253553594224682aa24e35f10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DUTXKPM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDyYag97%2F%2Be1nPnkEuZ1Bf2tP6f29VyBnoC3vGdAjpyFAiAxhk%2BieDen13Sg3eFfcFwSeAx2QCDSaQ9DtqvRL2uHbCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk16cfVcpa79ZL2%2BYKtwDaYEv2aYB1fHBUDe0rLhOkr2QtjMOD1aF0c0dW2WzMRsudsI7twhypVAveQuAf8ZgOLsWJ66jUo3Y0r07DrUM5mtVhNBEbmZq5gtT0jLGIQD4zcPCNFRDawiKT48vLOxK7qvPPfN1hGEgxs2UmKC8Hdhu8J9DEPP3NAfb6R2BUBC%2FJDwUmOQktNmvGsjloTembeLSS28zQLlBjadxtk60ql%2F0ZNmi6wYnoi2zbvHdYHc97g9QfQaF2Sfm%2BYVJcmc5%2FgmwFD8XPhsbW8MMosvnIyjB0qxJJwyfcmzMsfMHg51Wd9SKRGTJqu59A8AaXI63Rfse2deq12yWE5gl4OyIMJg0k4s1ndYXJFtZlTK%2Bxqq16oxOZfpTIQ9R2paTrTx28k8P3YIJ3%2FQZlMfLh1GV2%2B1z%2BUZuHbLFjXYjDZisE0T4z5H3ucB5z%2Bve5dnEa%2Fzl92QqKH%2FlBBuyN97CKy%2BEZvysc6bSM1IPJFIsnnLrAZf6l1ccF7ll7VLOr7S%2FRjxrXXdyqbwDy%2FgqAuZcDNEvBKA6f%2B%2B3yXTaYONOlUzu4%2BHld8o9SURgdVxQtI79TM3TotYT69M7ZDtEeucq53PX6FwD%2B9S%2FdzxhaEIN8niJJXLAMGomIOt1%2BhY3l44wrfvlwwY6pgHD4zt8Nez6FSYD5ZiOXRmxWtOiKs2j%2BXG8toqnzlQ0QDXLM78rCPN2lQt2l1iA32OVh7k9%2Ft1ZXZuWx0sQlNepXrZqMIrbCVqDDf2BPzeOvnptcrq9pffpkgMC8YxZYEmp9chAsSThjGO6VpUXnlbm7FncfmZTBcWmOoZ%2BAnrSrxS6RQ8LtPmPbb3yl7rf9Pi5dwT1lFQU1c8%2Fpnz5QM3qfYrKEz8a&X-Amz-Signature=c8c33653de282c4004dda0d293fbd0838028b4d3f9e77d561a63014f350a2f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
