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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LOT4AKT%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpfmG8fDn%2BH%2FoN8luEXy0vOdTQICPP5KOqGWWivVJVMAiATLdOAbnP%2BSKAR9o%2FugaL8e6H9OScSqTx550IF0BnY7CqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr8jtPffsIOgwCavsKtwDPlrngLLcg9F4rHpLqkltVUghOkQY0RnR1YScOWPGWK5Uorf7B3i43Y7I6p9jgd5KFcFyqEmhBjbprGAK239fOG9JVIdzrqJg8Dy78C12B8QnTQQm0XzywP85yHyuaH4aZdezTt8OAAfNj5teVWuPmrRwLZXiPsZnBC0zFtSU9M%2FJm83cvpll%2FyhmGNhxMxcUGT%2FgFVVUrhU%2BklHxC7q4GP4zboifxIMBT0Jrkoey%2FK5OKAjCllXnwbP2YoRJkN7DY3BVAU0Bt5Gd%2B%2FXuOdnvfwtoXLcyiMiqUB8FF8IpmYdRwY7E9%2BYf9AgFxzp7w7S2v%2BDQSYokPkJyoe2DnBbsa2iE%2BWbqdAnihNTVLleUDqo1%2FbLk%2FYYAzp7CCzfgbClcPDOtyPC9KwC901QtUa5WF7G6tlN509LSOQyibjJCEY%2Bj0Q8E26VfwISZsfP%2FOJqNuKCIgS%2BpcaM0CeHDIKPoWdDzWfnvh5ULeY69jQxFFFg4%2BqLl65HQATPo06fsnEOFGmTnCs%2BDE8MOiALH7%2B9WTGpIaT3PaNltYuuPLusdGa24a%2FC2ajpGks9%2BPJWxc2yx63W5jCVRRJRbfx4Ql4XTzt1eZcV0PM0SjQmlMg4e4EZ2picLSkHTJirmAcswho7mwQY6pgF1uFolSAOyD1g8C07VTu4RkckYc7WWBZBMIEDNQpCIj8QhDdt%2BBavQSMIhf9zJgi4GAV%2Fi0qW%2FfcpmQX33S4p11GR2W3tkFaecwHvTgb9Ee2XLQ2ScESr9LJQBWVnADkNGh5FVQjIrdbLGc4%2FFqPgVrjhlFrM2uHqszTE52w6FjMFhhkXswUfyMKTspzzurkkVBnmEiiIkNH47BucUQAA5wpq4Fs%2Bi&X-Amz-Signature=28cbce58d44b971f0dda9538ea296c7e8d48d75da134f73f4e0ceb1b3bc9b0de&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGUZ4XEA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHungoOI9Qdu%2B0pnuOiUbXlR07rlCylQa8IxhGdNBNouAiEAtQpaZSQT4fZfeqIdt8MSKiEUDpZQpd0fXnB8O9Av3%2B4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuLG4LU%2Bn3ttnOUsyrcA6NjkQEEZMHZvwE9BxJGaKNWDuf3gMW78Fl39Tc2L5JMbSzRHGJJRmN%2BYZY1nbKMDWeMtZunp8Wm9O3gVy%2FkE4dn%2BePDxTvu%2B4kG4MApEAvVPXIC8m4BkUQ0wKh67HEJVjS2MzQL7FX9JdrG90c1TnJHgXPV2b0Pw8MpbPjGI8Uh6fMZ%2FEtSwKfK5vs9VUBNr2tb7leHlTOG%2FbmolBvxZETND0HcRUusOcrtwcTorvtg49AOvX0e5eDQlWdCd2rGJFx6URMKVBwgApSqDbXpT1KGXDikz7K%2BPv1hoouhA6K6lM03cL%2FluYfBlH76eCTdo4LtdAmV62mAdW4hRuo%2FSAECT%2Fqo3Yc5bzPjc5J9MGFWHQVrA260ULdRBf2l9lLHjmJF7rQCpKWHoYHc%2F2uvDQZjvNe9d8bdFNC5TNQbY6dIY1WfgsazS%2BeJpe62ZgrrH6SfJ4aWf%2FjMKnhbCj7OheF6JA%2FUjnWG1yoPYIegPoSLcBvjlihXjmP5cn8ay8UOxRPvzDoK2c9LXr27HrKGrd5PqoxmRH2FDzpgYIZq8sLxei00lspgA5TnY8kDTE3VcG1I4be%2FdaUYE0HVMMgWGng85skJjYt2FnIOIqtUioTMlp84d02m5TRR%2B6wxMNKO5sEGOqUBR2pc%2F3pjMb48HWaz6TRtnQzJzX3sAr5hABZsZPt7%2BIbUiUQyWBxEJzrrSSAR4KIkGwfrcouLbv0C6wD0x8R13QYWV1QpnOLthlFJoWeCcWCcB50laRiolQncyQO3u5wCAzAU%2FTXkL4yZzaVV71CmxW7u2IC%2FdNfeaElk0fhtwomywBMfs0GYVBgoLAO01LtpmFxwuRXsn4SbRSuTRBMQ%2BHvvehVu&X-Amz-Signature=a582ab655c1f40edccdcd81cdac821343550b379cb727ece0c4c35ae26d6fe0c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
