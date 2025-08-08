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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULWKT7L6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD7LbUplIPqkO3tQzwX8p6jJoYORxIMewBBqDs8urQxWAIhAMZ9zp9bUVZJZlOMW0j8X1HHq3eV7CsWhjwRk7t5x%2FoxKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqO%2FZVMrbKVb0Tx54q3AN%2Br0holpDqv%2Biqo687ZTpODs6twysjtnDXRTPUjimtXfBCvMhuBXaBb0Ku5NQWLnJNbiIoOYkN3brwOpYj2OK3TayO4aVpmMBd5MauTqxNoxpKpuJ%2FG%2FYEfC0Aauv7yjZ91YTaKGtIb9V%2BcbUksgor1RnqJI9zpftauKFKP44b3GgqkYzxFbagn5IacwQZOsZhxpinT1C36gnnHStgu1F2U88qlPfBWkyGlTvbYScSaaNzwkIgbac%2Bwv7Zu9qR1mk2X4cELDCm0go5YpKEW90gK0AsN53iswxor350%2BZzaV4%2BEfp%2FT%2BVzwzfZQmgpiR3En42pmppVu%2BnhqoICLIZ5gHU0zKQc4fhoj77bjoFw%2Fw94aB8CSlQ1brW5tmNzvMT2CeJUwTachWFEXRzfKNTK6EUPaAZLI%2FGQT0RkxvrdEOEmumEIBvsbRreDQftxyidrxGv%2BKCS6GSCnL1h5E1ab66Tk4GSNkz5Jtno0oL%2F7bmH0bKC2SVy6XlOOLEcigSN%2Bo2w2Mfib5iAVpp%2BkHI165GklZLHuCoO%2Ff8j7S6Yimqt9lucEwVCe683StolGrUO3I%2F0%2BNTRNAHN0CMDaouRXyDFik7K4a7MeyscL2EKMYxFTjhu7gz9Q68cFyhzDFx9bEBjqkAW0%2BWebnxoQWIcwMAm9PQ1Ftt%2F6XRWa6SEYkxIadhVwvjURXQDL2WfnjCatn4b3c33tKRPkEur7AuT9TO92jxrb3U%2Fg8kODyK2jpKDkQmTGbPxx1JvR8W6tuzS%2BJpLHPajKIx9oR91OVvmzx27MhZERioeQYshG2QdUzzX6wnRzSfl%2Fy47XzAFxtHF7Sopp0BJsBNUwRK3KCFaKYDZF%2FihHrrNbL&X-Amz-Signature=bfecfb43120a470ab41f8faffc13bbdfeb72e56831c7518c36c272e3beaaeaca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EMMFPQH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDcuQf4mxu6Ajs7phWv%2Bov957nUW2UeMj9RWEPeLGu16gIgYJ5uNF0%2B%2BbYlteQG4ElOOD8H8B9ajCzMLcek2s9MQjYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjbTk%2FyPWqKLJ10byrcAyS9VYZ553%2BGpDmVqWyX6Yy5%2BjaOJ6IsILq4DUMSaYqfkVvrHaCu4Oo2kIY5WEAhn7Vq9ivpZR8hqZjaZuaRgeD1ut%2FfUaADCTmvYy8COpF0L%2BytNVUod%2BtFa0yNkll7VhnrdyP2v3yneAfdyQ9ul24SrIWWykrBmsHgbtnczoN2SZFKXaresQO%2BXXjklNvF1QL5xkrryWkLBPSJjiEU8F%2FvYFPXSl%2B7OL2aeGj1BrDCEB2Il71AjlptbM1dujUq4KNTJnZHC3KdDAF9mLvyDapwS22jLWG9xgJFk6QxGWNZCh5TxaEJokD5AFMebG3TPeiZILl67aCvInAYJHz3strHZ23wau2%2FVqdXed8p%2B7z7AMNVnqVmxn6E3Tt63bhIzgezW9lVxTfYjmK%2FLf0O0V5zwwKUqqNabYpGMOhOiZ0X3p9KCKK%2BPibUWReLlV%2BZ6aLubPqqZz5onkW3IKGOduCv%2Bgy8ynv8m04rU5lvry74PsQx7LTy%2B%2Br7amU5W9SJU3eoriJp6ss%2FQ14ocW09PMAWrwMJAHuTc1fan7tn1YARZqmY6CccLpXg8KCjXu2f%2BObYlSw8bN8K7%2FPRakysBacbeedhTiP%2BDsX0aKZR9MzFG5U7idMptEOX%2BxlFMMLH1sQGOqUBFII1Oz8dkL8%2BLQf%2BfbACCeul2pw7YJslp%2BCFIGtCmwh%2B6XxGlsQ3j9Vz4DMe4%2Bt9cyn7BICeMIjbGNnmCFztsHwxhQ1Lg5AtPf3vtk8zFsf%2B1H1EOTZ%2Fk%2Fi5Q6Me1uXbW%2BoAOov5BzIk5IpQzeZ%2FT%2BILdsCpbJ4VEjou0aZzMRb8WDv6EhkbqCbBwYH0vKTTziW2k2uSy1ynOLmYbi0kPjceETky&X-Amz-Signature=1b47ff619568c0eba7ec2b91f097da047980ff6a602e48cc15ecd44ec7bcd6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
