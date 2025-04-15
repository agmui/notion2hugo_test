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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2N2A3U%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1TWXbYKnaU2EZauFNbo03acuXT3YCIOV5tEEp%2Fa2SVwIgaSJc9%2FseGMUaUyDuleGBigNMggH824DYjR6oey66fhoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCRp5y8QxR2yBaWdISrcA3EQZTsTGWDTKp2zlTuBS01IqWkApXzJLAkr5OVSEGOVcAAEgxRFc9aZwHA%2Fu1QDptyrephi%2FteVj1aoGVGtXBSx7dauR7bP%2BP0KX8WUJ8CJra7Da3RfCxLRZWSS3qfHGA43aH%2Fan1A33hil1e9BtEZsLNAwXeVL93NNQOMd9nktVAGWlxnaHbd5bP6E5vWb%2FfAcbqLdJTiLTq4h8Iqe9kttik8I8Y%2Bt5f098W5RZv31GU7mm45zRPRdWAI2lZ48I99aa9%2BIDOoQ%2BI5MqZZnwoPCg5nr0mClmPbnDc1IO4DMI4SQwicDC56TrEB6y1A6ltEIgwCudaeRNo%2B7VMMx2wu%2FsNF7HKObZb6G5h%2Bd%2FiSC5RuvLIegk4dUO98gYpLSWgQJ0KMCW1ZzNiQkwToULyNaHgZWmGhs5nJ7IKgWvrFEdwhJCCPDxdIrGAWQrysft1kv5LBJZTyteFfr63fj0Iqz7gQjaO8P%2B64g4KgTEyGvvESEamVuMKygr%2FfE2v8irM6TPE05eqPj2LEtqwELjZn%2FQIPgDTrI5%2BEF7fG1VnPbpqGfNawMJOlKCqYlmkhN%2FGsNO2BJErT8XqzOjxSRbrmHTUV%2Fd3kQxuHyC2U5tbOFfMoo9%2FfNuNuWEAOGMPDW%2Br8GOqUBzYSj6t2zFUNxW4ClTdinst8%2Bv11oPoazl0KlLcQvq1ODZ7NG3jSOG4PwCpKeqTixKyFK9n5cBTCW2xYgjIObTiwgchVjYvj8J%2FLSmJ0yITcUZnf0fr3JDQYaZBNL52RABWP7QciHjP%2FQNCX45Q8tuZXXocsMaGgrTv9apUC3SWwWpVDsQo8%2Bp9RhbTYb0jg1VwTX270syxhIxM38X3QgDwdCSuHf&X-Amz-Signature=600ee3c37ce652ddd80d784aec12a4f58a466b6dba8b98588a9005489f0912eb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGA2CH2Z%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDguoKe8iQr2JkBh94JxYhDH9jcK4G9zuflktSkRMRsuAIgSkM2OIu%2BA2OjiC8FNny0epmI7erDOYm80EljcRfeeIMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKG9JjNWpbpj%2BT4ZNSrcA9uVinhOF0dgtAi484cC4ZFbLhss35YVNxUp2XYNa9ynu%2BJNT69kdiCiWgNOcSeZCfAA1iuCtnINi0s9rwN%2F8uVneEB7LsFdFMc606VyQ1p28q5TQzePm92UKJlhJtzlYXl53Y1xOJSzUCWCGfr7nU9k4DJK6mjixW9ZxUj2nNeIQTr%2BHe%2Fy8Z2xKD0%2BIkTb7d3pFXiz0sgWdShAo8O%2BjbfIDWnPJeFYhV1d3SoTg63p2NYiS3RCEAtQpQiSYs7dGsi7NGVYfr1ztwQOjCXE4N5nBvKLDLlFuUbgCaIc7RdUrvFxVEuf05NqdlM9rGhWLRqiyBJ3fkJa1fcnMu4WvSSs6%2BJmrWw7qyAP%2B59x%2Fqt9amyAqOoHqs2wl%2Fg8h0D%2FFqEpPXOFtprgI%2BRNlvtWCAA%2FSOgl3J3aw6WMd4HKT4VVA6GwpC02BshK5YXcjAqDlDov5O%2F%2FR811Z%2F6m7DO4iYpJ6vBEkU3vE0qodf8W6E33R13xdyicSjRMpJYtZYu4ESeDV8iEt%2BYHS5YuRBYGLM2mcp882ONkZDcEbeiRg5lQ5a1ft57%2BSc7eYnuXHBNHmyP17TGOYEDUx4PftuKoSzKtGTYb9kCXdgUj0zfsFlQX%2FNNi6tX5Spm1mft%2FMM%2FL%2B78GOqUBfxcND%2BUMjiwX15ATSyRwSXQe3SEc7rBYzSQ8KSBv7RsKA3utIplUH73OXfPCpIrCEDpsXB6iDGwF6qEWv13cuaoDXGoXqC5StJ%2FrmytOJC1pnPKp5usKQ%2BqAULLy2K%2FPTjyWxnHZGFnqdk5OaW5b5%2FgSiSgXGQmUn16hawL1svaahON8%2BVuFlw2J6Tn7D4Vy2XxApm9Kb0f8XmEDs1UYoQP1OhYd&X-Amz-Signature=2fb79185bb8f122edf3fb37936cfc00c4aa68a1b06c6cf39355b00718bb0b770&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
