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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6JPGOS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDyj31EIHpAZ5t%2FJacXrBsey42c4l6vB12%2BUUq%2Fwg67kAIgH17fB5cWoxRKNE6C1E%2FotfUpwW5lhsDpRsz%2BX5xml0IqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpnuks%2Bivfr6ilHUircA%2BE7ZxTZrK5H4wyY9dzdtpG%2BXBymOBPHYelNdXYfVW5Q7aEYiogbUa4ppoST7q2BFfd8XmTSa4NAw6IflpwLcdAx2VptK4Rk42fq%2F5zPoTlMHgD4gPQvpBu6W8ouqi2ZUuqKhNO%2BV94fHBJCtiMTrKXI%2B9IpwJ9btto%2B%2F3sMIn9u6m06Em85HSmB4iNd2UyqK6qAjUneJjVAzv8EOKy7loJVVosYtIJOoyi92%2BlUbhBAoWHDWKI2yJrSekqfSga%2Be26oCHa1P6DP4ujZK5FlbuBGBzylbHWXuycFyn7U%2BL0alvD9KFB542iaw%2BbjKxx1aY4U%2BRF4P%2FqBJpKZVOBXugYKdbJ8RjRZwN4Ywu%2Fui6GcJVNpGYy19%2FzN5RWRf%2FjjevSU5%2BVFniRuZg4TxI6%2BTM1WDzE%2BNugorzT8gEk75xxXDG5wESGdH3RSliHpjw6BheM3xs%2BV6%2BsYdELYl26qwnic3BF3SEbz4A%2F1Z%2B8zhpUHzX9bHuaUY%2BCLs0dk4Qc%2Bn%2FNoel1pPoNTVwcZF7uFlDalVJnMVASKwnAX%2F9uFTo4ag2YS618KW7YcTN16A1uMLtKAEKbBln%2BfaopxWJK84etaLPN7lEdtMWdNDUeQs6UJuK5x3xbkPeYdrB2VMLPRv74GOqUBzhPvsv6zpMiZzebV%2FG12fS2blhlp3%2F7Tk5VMLe9x5bWIBiQdHQ5ScGkO6nDOfDb1GvwPp3WHPSZApDQMM8bcywVakqqOw36VFdPxM15HDMB1j%2FY%2F00HbdR7r0nQL0q8TKXZkp7wgxIlWRg1mldi7JU45cJ%2FgumfG3mSi8%2BOgbnqreDj%2FW62i89%2FRUD%2Bbs5wWFNiSrSdUaf2tmNfhH%2B2vsMzTkL49&X-Amz-Signature=92763f7dc4d00995dc7d2d90c2f0bc8271c18950382aeb3a88685dbfbf9a1f1e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJKXE3H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDA753EOHnirc2M2pmWo%2F9XDFe0dAMyiZVZZPvZSRyBLwIhALO2crTKRlpK6hdJS1RLdQAtar18LhqvO8bqlRIrIEx7KogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLrHJOkrz1qjhl%2BUsq3AO1lsct9i8R%2BkPQ9PVeFP3XX2aU9vKa02IP0r%2F95FVeXKAEMqWFThh30yf2ptI7Fo%2FIj%2BP%2FHU6qXETFv4nk41M5YCiR3Gn7ZBJz2%2FmsigQxbTdgJ9Hcp9zL64Fiui1cHluKgq7JdYKaFcu95ckrGLecC%2FZ%2B60PaoYdTTlaKj8uuDFnHHNq7SvJSEpMQmuATsy7EtMnQnXtaQlPmMNudpvD67YiGZfS7IXkjtQPEd8qPTaHgZpmgfB%2BJKGSRyPpw6yhPjHEzRFK81FCJTG2gmmdScAsTCMLimAYA6uJhM15nl46v3g%2FUzGtQ7D1CwFOvWEcautJr%2Bn5DSULv12uTvfiBo%2FuEDSkCstRXvcPRFoI1LruowPqdRt37eTcVGF38ucbCO9zKPb376X3Du4vETKc7snk1x8IqVi8yUkla%2FZvv0Jih2g9emnmAtjl5OsSrTfkQg0eS3W%2BY2JSznwmUY4LxLU90xORFhqha0aP6NHQdUgbb1Q%2BxKTKMTczSKZFvJQqkRMGh%2Btizw2n88VU5zObMW%2F3GqTXqHGlQciSh1oajG7tEHzVG1E%2BydxASdWgaJ3Tkmd5nqtRL%2BVcO6hrKO4gd%2BvaW%2F2C37jqNx%2FavWGQKECnVTYwS6IBVSN29UTDf0L%2B%2BBjqkAc0pIJhglR443QMUY%2B18wUNzhprPMI05BrHJMdeo5ZbbluADXzuNFjy4tk%2FwN6YWgS1cI31aRtEVwe3RP%2FO2EmjRDNi7jXhU0ULvOowNpq48XJlBIZC%2BEghOkQ75x9HLWyZB7bTbRbMeF9%2BiJRjLq7DdaBpXCioZuHdJw%2BtAXvaMB8ibqdO5hzDoMIEwZ0RB%2FBD%2F5N%2FsyXjS%2FEqYsVVQ400qXvIA&X-Amz-Signature=43f41dd40ea8c98f0aef1a3e3b84f0d2acb2e26eac85ac14cc229d5b8153ede5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
