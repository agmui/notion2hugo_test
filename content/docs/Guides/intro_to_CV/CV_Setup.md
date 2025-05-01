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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCKVBSE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIHWmn45fvfQpH7P9gQaBBZBbSNp%2F5T8DY4OspniwzXohAiEA93pZNoGGV2Mvpd5WnXxnZhNKA9Ittp%2BS5oEinti8KscqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZB8bZ0Ms43LTbLeCrcAxt4uY8ih1MycD%2FQJ9EIJZf9JZARAzu40Z3l039PPrmrarihA0s3FjxPXHfPLDmAVAcFuE5sd2r51dR595nRJcdTq9a1Q1y4zElXEVU52Tk0Hzcn2zY3fbVuHvexWV0sEuO82vVDZPiZve2%2Bjk%2Be%2Fpqc76JS2MKXFT7CmHaoPWzYKjnYYEvRJbXPAUFy1z1JD1gOSXIKG9itbY%2BGsn6ohytCrOtmHlDCaPNPnhyUSIgCS2peHy8ik07le2lqrEiZbjlavEiBywb5DnalEWUE%2BztqqruT58uPnNW6LknRUunK%2FGJEqnDENtjxW0MwSvLgSUgpUx47tAfwdiLSOJIU14sO7TbcsVltAfYudpu%2BF1aOCPyUZBys0eWeS0Is1COwHKzimBaw5NN%2F%2BIVv%2Fz%2Bs57kR%2F7KU%2B2sSgV5Kb3u8swZX4EENUL7NbZ83l3GEyj9RCZ2REjvv%2FyHApl%2FUvC3MhHjZfac6ce5%2BpRyyp%2Bc666gUKsIoSaB%2FoRGhigNINwNwLgJnGD13%2FzK4CzuJiTvXJ3jWfq4Eq%2BQVgG5F6fcpwZ31NYwvBTQau5RE9Fzovg6xs2KTYBEjp7RKOOn7SfEU3UJWGC6YXROZhxBtEh396yVFHkJ6eLpLW2amArZlMM%2FZzsAGOqUB6qIXTmTBOZiI0dEEXY7t9s4ql4m4iSJJPveHG36tjIdzBKb68rAvxEfuE1HK9XqYQhAe%2BK39rKVbfubjl9PnIdI1z1PTLH2atzVmKmPqVTjduQQmI78ydsNUuz9eOXmVqLreCaLWTiR8WV9361JbOPWJHSyF9Z0vLk005iYlToRM5ORVNI0ZoDNIXxQBoVFxmvvYps%2Bqwoh3mVFhUvPCJpYLzmU2&X-Amz-Signature=7d744d9990497b1e696f5dbe9762053c0c65b348fa8f76ad489ab2ed758cec2d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5LWQM4V%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD9pl5MOJRFjhk%2FHvR5%2FTH6HIre%2FSyQGftCgJP%2FwdpCZgIgJqyrfuesO3tykSIl2DQCEIJZ53CqLbsKEBpR%2BLuvyzcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNrxB%2FrZHIp%2Bim0%2BCrcA9WhhtB5WpmBB8geLuspeG98FO5MU0WYv7CZYA7Kbrz7z2kRLn7UEO7s87zfvFgGP%2FmO0MkcW%2F1QxrCDU2heEBDHgcU6Rmp443OzvXv5UUlZnOh7tGMt1h%2Fi%2BEE5InKlehBJ5G43qW6SdUn7A8Hw8epYt7pomeeEVFIQsgeRTATdSDWbS%2Bkt8ngy5wLAy%2Fnq1GsZOhD%2FySEfbT0YJk%2BVpZ3e7DUgxc7GUhvLJyGzhEdGYlp%2BGYJbDAfsxE1oLm0o%2Fste4idSB1bhLskBnc7ylU3ZepolKq4Qh69Ajsodc8zEyO%2Br7c9TAU6oJU9V7j4idYBKcc1qOwWfDnzFGQ3UixCutJzyjqRTNuqnjsZhyOQVJ%2BzUs7j3MgOkPphxopQicVP%2FqblomjBpjTUO9dFIur%2B7D%2BVSC%2FELbGlhqrSuquKIr1ndAeN5u4SSv1df%2FZY8Qe5xdkC4hRVkRVC0UMSaLiSfmys9De6P2uasbNrWw0CVqTiKHm8kVc4KNqbEAF6iwxViVa%2Bpdo4FjYwFRTf%2Bi7KOoa5aG29NLTMvPbyI5G7VTRDy%2FDF2r6maxeFs4husm37ZUVVCWtyZenL8bZYcxO%2FnNsCXVbjNhyXRwIkU2LHNYy%2BjQ0MKMnLK4E40MNnZzsAGOqUBJzI8AVUkjHTemLfF93%2BfJMMKdgHe7gL9nOhQ%2Bep2IN1JeiPUWzJ3fLCOrX5z2OZkX7mnkihCJt6mrI%2FkyNIPOhgn3HjPnTXxcVeNQ1AX9Hrsx8XZtHViMUzsa385dE7ErkbtEeDntGmEZ0RZ7nbWIRwahENg%2FD7QKE%2ByyBpVdvLDgdP61Zj20rY4Fw66Ax%2B2dYHheOp9X3bRocEQddXgaAQPARGt&X-Amz-Signature=5a4e1fb58b42a29bfb30fc51053bf71012c9e8a7d2be379536876054964b2101&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
