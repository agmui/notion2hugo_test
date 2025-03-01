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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7VPYIUK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T081002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQC8fYx8g65DpT6hYQXPRZubM7u1CVU%2BDoHm7LJ7iNReWgIgDPiZTuoyiu5UIS73abfItDmnXCpUOlmZ%2BJdEbq62ZOoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtTByd6anHyBPRRCircA%2F6t2eeZBztk97diR%2FxFME2DDebOC3jILmpDXVnhYREJtYm6JAVBBOgVdFUaT6y8dkB9nu9JBT4MIvF91MMe5X90DL3DO%2FcM0q3tqig4c%2BA2a99PGen3jkJVEIqtEaJ4ANkEQBdr5Mr%2FJbNJMUvw%2BccYjvOyTMUsbF1jG58aUj2TLC%2BHF2Mdx5YiPIicdiM0C4kbmZpHLnZ%2B6LpQfm%2FbzKWsxtou9xZIY5FWDMgkDB0Tg2A0vQnw%2B5ZJYkCczhzPsfmmcKBGclpWffug1DI8rTLsdXJomttGJCik%2Fev6VjIdN7%2B0vmTPAsyS3MT0HuYGurjUWswjqb8M8EsWgGqztdpGEZZg3Usw5GEQUN2JiKSisIr3QA43keOR1Fx1MFkT%2B2hZC8xXxduGK7fmsTTtOsd4Mri%2FHUEzjlfo0%2FTLVxBQ80WBIsINhiS95mzT6TkfPcgG6ih8FRJ%2BM8J%2FCJno24RAumCwS84ffB6NkSdaDxYBCXdkrHdAL3FhSDCBD51ZIzkBlLx52ja76Awu1Bj4%2FaGqYIxe0Angcc3306OzJYh2NdVU6kDdQcwgHS5mmaXd927iykyZVmEzln2Xz9X2VtF2BGuzstdjWGDqsnslJ7KQMIgFG23Hr%2FfA7ea6ML%2BQir4GOqUBEHa65GSeysSB2wOof%2FM%2FIHZvirDYz5OlO7jGfYv%2Bd65cGMd5QWjkpXbVGNA0oN8ttqECkaOHJAM0sVEY7nwjXf7N7xXb7HBKgTllgGV%2FW9OLBQC4pzb0aPXPh4yh4euxeMAoeATU2kDgdQo8DCNxvS5yatk9eZs9qvYpo5%2FxCkukp%2FAFmEXpdYT0c6kLNlYLUZvSnTRAPcMR0%2FNasuF4yibvB0Ww&X-Amz-Signature=e838a829a92c006a4e799ba2a7be77c170bef32672c25b014e264d562ae269df&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HUJSYTP%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T081001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDTrjJzeSlRrMr5b%2FDyE0lLt3QMDwsl%2F9rB4OJbLm25PwIhANnFiXyhjMal1uHk%2Fais0BAWIJ1CDtS31UJqsMmtvcnsKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbLfDmmsBHS9vJiRMq3AP6VEu5z%2FVoPNquDpFLPKDwmFYm7BdhKvvFyNZyIKtafVURLGqXNHew8zE7T%2BQoDmKvoOjk5orBKVcso6d8nvl8kmhNUkdLpG%2Bh000m4hfIbTJFeV5tvCe%2Bz5Ze1yUwZAhrbC%2FqqyXX02%2F1uAg11sH2ix8WWIMRcPn8R7fY6MQIl3LeKqHc3lmaxYtY6HL2Dvn3fRt7LgiF8Un%2FRpvZt0jKRoNSdv3xMEG0%2Bh4n%2FCiS2uZEUj%2ButDn8yQ66oqF4xh1s7FOWzxAhDsroCMA%2BZFoWZU10f5T5AF8xAlgTme0PBX1k87vxkSJdUjSzKmKWu1bc2hz42DNxqnxBedOfnQDSzPk0eNdJogb%2BIr5OmfzK9bX6vgtwdHMMx34pjd7Ha%2BZ1BD4%2FOUyK0bWiESXXoyYxSsPL3ZV9GnSDgOxumUWRTYoXAPyKDY4JUW%2BbCQdiA3vkUf84vvnKX%2Br12ZGpf8yK2Z9rGFRHYCeAoyfrLfKDOGFJFHSeFoC0y%2FfXuOGzJ9SnVoM3IeVFPJdyeWtWdkO7xl3AlY3Qiql%2BLVAy6qabXNa6aFS0mkXJ88t0QwtOGXZ3b2dKgSzg71a1JnjDlRuqx%2BOHoR%2BPnMaafpHvh0ChXKs0HigVWyKsadPM2TDUkIq%2BBjqkAXXty9wqHtdQdMeWtPqq2fQsq1CEm35YwenQZADZvyXNzFrvWYffCQXviA%2FxWlBNMzhoWc4XEwML0EbMWp85693l1mheMFnDwNhhf%2BLaGh%2FTmtuZ0bKF%2BDKLWsAiJ7TJOtU28jlzVSEtVhmxP%2FZ%2BoZVKAmclH7DjmdY47E%2F%2BGTGCi1azuqTycy77d7VDQdeogvHhJ0WHj%2BV6VGagOT503ELrmBMJ&X-Amz-Signature=c6a26ecfbb7905e780d7b6682667db8f5c8d7fa6cfdff078879973fca73dc70b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
