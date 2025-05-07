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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LJLXJHH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAERqMLjMzAqpwEXePeTP%2ByaT4eh3LExBQkAG3hFUTj9AiEA8708NBBkxozObGF2JKvPPCi5%2BqlK9hCDOKVToMOMXdYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAVb%2FDjnuPCFvniszircA2Sggcss8tUgyc8d2XURUrCsZSHBLfSQO7Z7%2BC%2FCOp306I5B6I4kPNDDUYlZ1oVIlLMh1OXJN9X%2Byn%2BLq%2FFGusLQTqND4DwAEmG1tO3LaUE2dLGam2HoAmK1z%2B3%2FP9AVH4%2B%2FcwSCSlY9UY0U7rolFekLNY4xlSfMBdvjlCeX3kSI5hMDU6wPr4bRQur%2FVXu1ho1Jo8k1XbBspwaH0stTlo8dP1mgeF1YR3mTR1lKqKIbVMJSl23Tn8aIQDMQ4PwdC%2F%2BttohxWbb43YU4XDJbjhujVMGLNJuUV0A1DkQfBCsnmwVc%2BUrXJSLJgaqHut1ug%2BgMsBA%2BJMqMGFlpmcrpws0zSDang46jLuWkZ0WtLogDhQtGrBd4WwDKJGXbzIBDAhTvqLZnLGSDA3m%2BliYfShuxt%2BVzTBNOnHF5lK6XetVox%2BndqaJJqbk4xlY7Jd2OKFfT9Y7ej3PApdJI6JIZ%2Bz%2F4aWJWkR%2BnfbaLzUG7R500t%2FSY0D2c4iXDq2%2Ft9PKRw8Crp5lj6amOxmMcxenC5o6tnvxirjI8aGejzw8WDaa%2Br%2BoYdRvo2oPG3ldNxJWgmOlZeIiwctwD%2B6o%2F3pRm2BgmpguAxu7u%2B5zXGA%2BJnRzhZieQXhBZyDny3pGCMLGR68AGOqUBCIDCNzzHmILkqpfwsv%2Fxz0To2HXI7NBnmpEfl1e8xzm9CD%2Bz3aHgfHrwzdFM8wxVEXRMgs2LBmKLTcTN%2BYYuFWxae98RYVFdgGiWX93kW5vj%2Feoc1LJWtTLIHX2J9ufAtsOCWZ6ndkyUBQ1baYBrXY%2FHgzZmRsfN5CcFqFr7CbJ8tejv5%2FxH40yHs4dHvqxzk8ZKuErwSn3RnmVcNBi22%2BbnPgpf&X-Amz-Signature=541e7ab218a9b1d9900634adad4c4a217096ca6851479f1846b11343cc536ced&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466735TXAHQ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9kDftjxWdcxqpnrBvcdn4QHOfB69%2FIMlbDU9ZflxE3gIgaDzVuJF8m58QubYQIGWZe1ZIctwFtJd76oOrTl7eMEoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKBcGtOH3lumENMt7CrcAwfA36H%2BMpf4tulGOXx0MncVdHB0z6Pz8cZSbDeeLgoLXRAeGVo%2FI1aNcCy6uR3iUJ725J9LcpNsRnDB6ADSFPhoGly92Fw7MxMD6i3VW5%2FIqkYbq6KVtoLd8Fr58wKww5AoAqNO9AcjOPH0fo9Tjvi2mHSbWBrV62qrl%2Ftrb3Xb6S7ekapcIkSqNhztmeGBdW%2Bs%2Bcq6j8ILJesbpHdAzQLH5QjPXUSsm%2FL1TyBrEib7NdBuK%2BN6ywwDICP2MAITIfr3%2Fzi%2Fb6gQuZdxkZVJXp67cLXoTbaGCVrcVfipkn5nw%2Bl57gNi7eLKUFs6vSMgxOLDtvD70sWC6O%2FZsULlBMlEwYI2COsqcipfj5rL9zq5Wn410LTWFjssJDP4aGAdG%2F%2FmogIEgkfrMPxzbacJ%2BOF%2F8vqv2xiLsXQtfc5YhZxY6O8ynH7K9agSAUvzvHLVE3Shw86c4aiMS2hubhsKuO%2FIiseqB9dxv%2FDrq6RCUmEz3xYWE8n58WjjPwXviqZqNTLRlnC97CGz8T%2Bpwc8%2FWAltaUmM2YRkN6Dvv0kJAl3F6wguMzDHuHw9EHbNydN%2FXGdq5%2FctYrDShObItSBrDjPc%2FcVnOsDRKHt9iWFe3oz1g5VzMt2W79MLvtTjMOix68AGOqUBfauLRsR9WmLXs3Yqku4JwJa8rkB2EPX%2Blf1ZhtGtL1Od%2BU6%2Bdak8AbducT3Wzxcio3qs%2B50tc9wNXUX7QieDm8JV%2Ff4%2FfLyVOZ7cCXoD%2FH6n6PlzUB3q4iSJcZ6faQ411UgxREEzEHVAWte3S%2Bm4nkdLEyJodXXQb%2B%2F2dc5NN1Af9H9QOX3D5dyQgyxvlGoemGT10Qp7XjjHfpFrNst3aDIiCMn%2F&X-Amz-Signature=63f7109eff10ceeb2fe0c3bcf522ee62a03d20b6131e29370738c604cb021bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
