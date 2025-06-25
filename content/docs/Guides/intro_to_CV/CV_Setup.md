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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGBUPZB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDu1sl6SaNIrXjxD%2BHdgowl5kX6%2BvImSRa3H3PgWv%2FK4AIgQxRI0GOiqv8c%2B6GM2IVw63gVsdTIhay56BGFHHyQ%2BYMq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMZTB5lyRw5BepHNuSrcA1yF7ISn8JNVxu6pc2avUbXCBFDuocgap75Le84PTIo875NB3m%2B8glXMXRgsj%2Fpl772HfRT0auqVg1%2FoGYS8vCY9wOkBU8EasW21LV8FqW2rvlQ3N4YXeJ%2B33kD650L5WDsE%2FucfG%2F8dYCWLIcNlAw%2Fez%2FaTDWHB7QvGsVbtCtfCNfBS%2BKXcdhCwFmzdKSjQmCA66%2BFpIbFY9msA%2FRKyQS8szNVovm390zy9l531nq%2ByfHUK5qbYVu7UOxZ%2B3rVJsoiQWIhi2ymJPHfnytwGBfGTi00WWk2IlcGtR%2FRqqWB3zpqnTnQ0EMCS3Sj5jFygwd%2FeUPyAmY4BGgsgsHNZ5TNXCwRl0U7FehmXeUmg3pEWcClKvvcGKBc8vUSx1%2B49d1aHg6pPlKKrLlbaOptb%2BERMnvGti8L2HVOow2zpKp5Yy8YHYUfzF2upVD0EKE%2BqF66xfiOa5p5Mlys%2BxdBpOStUHlrHQrSvoaA3Jk7D0OwjYev6mX3f%2FF9YYYTZJzdzsYPq0dLpDgdtQNuH3ZrL4MA%2Bv%2FPUfyojrYU5R58bpAi%2BMW5s2FY4poHc5MkhFQ1sldvicXpO72nbCsABN8xFj%2B3ScVQJCqRclPhT%2F7qlc99AnWQvcdZdBo7LxnQTMNfC7cIGOqUBtfJOA4f7n%2B4al89guEUDOXv545eDjSlRLm5wjdvN5izsrcJzyfclaWoM7uO%2FW7n0SkC2dSjCw1q7h%2FmkRgXa0SqPuY98E2lXqCMnndDSsEsaNwo36EejJuFR3RlX9nZzU%2BPobueU%2FbbPOB%2F1QdWBptbvNYpTE0a4fTQOo1w%2Bd%2BEUBpN79kV1WJmwxdJ4QHJDhHqBqYQrb8iWMYWSacp6DUR19nIN&X-Amz-Signature=4620cbff841e5bcf9eaf13039bbf3b7d69728f51c57bf61496093995892cf75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVHOSTSS%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD%2Fugcp%2FcdlIlVQks3IifOHqTBgx2izVzkbdsZ1fOhwbAIgFioebHA3qMwEdsr1ruBlIAkNx%2B6uW5iF6i04ywOYyRAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLOCbNFI%2FWadp1em2SrcA3l9ASqydS%2FpTOqusxKZk4eLBhl9N3fRYsXWjw5CGa9CTTI1OBb4fI8yR70BHk%2Bz0HohlmBE37ilyZX5vE0kSvQmbNoFgAAkSAh1sMaax%2B9psK3gdBB38%2F7BX1Im%2BWkFN6ZHmNiVzEzGlSTJaRklbfMyjB5iuHHpYRJla5zlvW9hbtH3loM1VhxP2NcHCPGIkmoUXFSsgMcBrpPGcbDKJth0W%2B1fLsodk8Wk2BWYJFNfjd5QK9Xa7LGrOhHJhO%2BUtjnz2qYYTMDoWuJruKIE5TKovpKwKam9twetKoHybXC6Th8kQVmOFpr3p6cM1jOOqLdkrYHX575k60y%2F8VuPqgpejdfYSBdD39xqHv%2FJI3IDDEyys4h69pSCwLiiFCtk3f1o9YX718FKg29q%2B0Wx%2BNpAWyBpG7UTuaZssuLXRY3oNEDhiIWZtKSi5XNX5QRCluy0T8u2%2FhzEgdj6fyTWfo0E6G38hfWw6KXQd18WKTvKx4e5qiHkDOuN0yRFmgjNW%2FZN0dKVifbvGtZdzHs9X3Q4UIEUyQttwQ5Phz96m5phPdMZtDQ%2FhCmXzwHmam7LcOQMABuKxKk3cDs8tkM%2FWxrYnZ%2FVCuMiU2VU2QuK6W9oI3bE%2FzxOob4y6APqMJvD7cIGOqUB%2BkJKyDgHkqb1evgB4gXxCJnhhjYZxcoKRL3amyYPAVbD8AnUG%2BJgt58TdxEy9gtJpmLHlwMnaPoePFHXkbqcNKVVBLuITfd4X84UNxbmbaTMBkWoQosJdUCGD5u3FUO5rqrBLTM2vcoEwrnyaYCEmcd0yczedhEoRgeLbPpYhAhIVMnAFXGBy%2FjPvvLc%2Bonh5FsRrQD%2B%2BOCEwPEhABSFihQMVHKw&X-Amz-Signature=d8388a6c1a08ba3eff75b2213baa1bd9baf2c5bd6121af7b4126af6216de29d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
