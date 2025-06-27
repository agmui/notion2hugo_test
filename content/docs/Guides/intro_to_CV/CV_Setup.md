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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSCYYSLZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC00mAbms3wLdilymmX1hpEau%2BsfwfNQKfqqnmJ58BmMwIgUReZnmThjsNTdOYwcHk%2BQbNIbhyzk8r1dtMZVaaLum8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJmB9bCLuPhIH6jnkCrcAwpM4yJCWr1IOdS9pdo36DuY0CFhuYwphYv%2FCgwK5wCWZH%2FNMee6fruWHui3ERgTmkH5ILJ1qqgf6TQXRCOQdIKFmNlJiD4axMnMitC%2FUlqf1BxIVTzjBQhJ3V1Xlqhb04k3p%2FdEOnwzeXtYeVzOxEPxzXZZjeQ4Uq5J4U3Qy7j65btGeGrqoNybWe%2BJwFLo4x6ZOl02Il3BT8c%2Fa%2Bz9H4K%2BPyUcAPgrbS8YGwtLTkMpGcLMA%2BV92lhgUtjB%2FrQeUOuWer%2BhzpFTQuMx0pQxHxGTpjeV0uuvTju7aRoE5vWRx77FvWz0VW2DYZ2oiH3LgOV2JtlELhlJllzEm5zQGsavlpxkloMXCFDxoPpjgQ%2BV9NUVgKWXnweMCtO5DndsArl9tNSAbFKtXpa4zytFJjc5j1o9yPegVrzGotnHvscg0wZuVy02W1G17A1zhmI0mmZbbY1%2FoPdes2Rpi%2BziIVAk%2BcdFTyA%2F7ab52cb3GJ7cePbgFh0FBEZk90B%2Fi67YajVuBjyalDSaOtGq6wC%2BhhWW3NwFXJZcbnOy8EUlu3b9VrchWsbFW8A%2FwYKva64AUVlDRtqhIR%2B0FlBa3SZuULIQXBJ9r1DCS5Sm4MdUmKqDBQkgo7a4QrPw0DANMLP3%2BsIGOqUBhz%2F5VFaoFhoH%2FcnSKUeA71JXFoi8Yl2B7iU2Y6hfAAt5CMDrOzy0ry4rlQCCcm%2BOIby8dafZES8WPzc6Hw2sMBPwwWhfS4DrXmdy1smwKTYqi%2BchbzovJ6LutQimnBKaKjvXUr70Qn9GYX49xdbcyFJdHzsT%2F6I4dcflG%2BleJ3LFDd8NNH3AbXSiMQAAtDS%2BkSl9JUu5nMQZi0lKfV0IaH3IHLnm&X-Amz-Signature=d57ba380ab017f3dfb768f07cab4f674644693c020f05ad6fea9a1795133800c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKGOMWO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD63Qu7oHCFNBAGXShGYq6lgFe3725JTaCnPoYybifddwIgKRzEnsEuS6xHt4MGGdu2XnBbpzQOjFrB%2FaXF92udkWYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBxtgoOoF72vb7CsLircAwU56R6CwH7egDpjr4InTfZq9Dh%2F4765NAEu4CdlcQO%2FM8dOb5O%2FJQArvDC%2FXT9kicBgrv48GyWijtADOZapD6QLtn0IsbYMf5IE5m1hc90NySEvmhfcvsqs9uTas4BMKHrR3SWCuwljL4IMnW9WZmK6uWao2XBDlFw6rj0O2mg8pql%2BnZe%2F1NBAzTOHRRv8ZqRWBJ5z5kCLCx1mK8lmwUyo%2FJsDc3SSlHWUbZmlnD96Zuo8ofzigNEg%2F0oTon92JP%2B8sbGuIBE%2Fmz7KWuzGfZoAjU%2FRp3KntlZIZ%2BVrx10mjZhIJFQbMBUiGunRdLOuA6SH2WDYdRRAYUsm8oZ5hp7RNrwpMr7qgnwQCtNZWWgmJczouxaYAhKL9yM3zhfSUtjB31J9b856meomRRVZUYn41cCpDIRxeCDRD0Kqu%2FU0GH9Yv69CewtOl4JzRXFBN2PzXfffpJphgV3qnjELaYyTmqkWtqWnx2PxOW5LyRAiDaiVvk2qwGyUaR0NbFFTiCAwtS4%2FcMvwnDFDkcMn37BEfAnijQ1RO3k%2F1%2FDOJBabrrcxircRtNCXSA6m5nCpToWDfZHw7ELw1NbsbThu6rG8kBpKiZGQn5WDu5JdNcWRxqpIBIZk2KCNlQ2mMOL3%2BsIGOqUBIfpcfpMtqss62aBDXhG%2BfDxjX8vK0EZ4BicRCVEasCXuXeROCI%2B603ZU5vGnTSpL4jbYQBcCIqbPSJeU18odQJ3IkHvpljlZaMVBuwSyZazEXrawSo8QyGB6xxhOUhmg3YjN7MBZXtaWr0MDjpewVBAXwq8SrRSO5r9PEeqN%2BfFnmQcPRGtRCG5fLIYiZIuQHCfr2vUeVLMsLYCjYtPWkNKivc5O&X-Amz-Signature=450cc076ee5eb8bb7981487f37c6c4b771bbd5e674eb1a6c41527fe617ef5caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
