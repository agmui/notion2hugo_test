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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS45WTRN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIDtmn44lu1wa7LrMRNVDDRPwTOeGVSwP6Xi5pk2W2EawAiBrGsLsnjIBNDK4WzS%2F4RssNvwPNcbGsgXe%2BxE%2BqWpXjCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMXK7GDxgClKRYc9YRKtwDO4cRrZC07gdU8Fzw4OzAqwDWCvjMEewAMaIYuwbUm2sM%2B2SjU%2FMIyjIRy8Om8qfQDdKxhYWmc7v3x3qeP1NK6%2FshlUsGaa3F1V4vOS9PI3p8EbbOMrdZxQ1gQzY5oTfYP6lTEwz4MWZ4i4OP2FtbKIIN%2FMcbZRMwSCvZV8OJh1CHEmn0cbDt6cB7aKEqWMaLzDMO6JYmIuk8rlyfUkX27qSARoPo5Jiihbr70W%2BIeLdg21QSTBa0GCsBZOB3lWxTuI1DnxGj0dcmt9ST0a8JozCXJNf2pYBLwAjCu4o1YRPFSZNc4yEpe1Um2bNNLjximYFyPEHLpjIfR03Z38tZkMX5kcQ965e65yYSIzFV1MvX5FCKyusASbYju3jijMtflOqOumEIrrKbOHB3EidrteiYNdyNEnwuMl50B2QQEALvgA%2B6iwWdr4ArtVvWYsN4X4OTas0BIlwhJ%2BXdxYd3m3qWAXRAZbBfstPR6e5wKGgjzQeonktnP3ZZqCHaVTgekQbEUlk0%2FB6jaKTQY7ZUdRh6SaQjvn0yEfJTxS9aiw4%2B2dq5bqaCWfNzk%2FhyghQbs4nfX72l6VtQdiztCv2ECLm3AQDhXDfNesccLM4Q7EkAhMDRhPA6iDBr%2BNow0cjJvQY6pgEV2zZfw%2Bs9hMU4VoQFx66hDcFmUL%2B4eZXXixGe99K%2BBE8WFU83xRz0uIOxQFIqb8z5uoqhcXNe3LAngsjBhT%2Bv6949vjiphB7aP6j4z8r45OaYq5DzcRAVVSLWrwGEPQpuCR50cysrVTUgz9Dp%2FEIN6i6ecxTwK3RhFaT8sBd5fowt4xBCAL7GfokrhZLgn8VmDlsrqQD39XYXZ6ivGdxk%2BWILcudr&X-Amz-Signature=1b4b7ae3eb46435566e9ee4893b5841f227f5430f5e2eea667e1deed9837ec11&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OKSSN2X%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDI1%2Bc8jNP%2BjdBzzUsZUNEbPQu1CNGloK3%2BGRQefL%2FV9AIgdwd%2BuDPOcHr0Dup2zX9UwQCkKvp3DHTFJceP3uApLMsq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKt%2BXwPRejL%2B5Y3KpircA%2Fp6oI78DFUqVjb6%2F0Zdxdk8zt26eHpSlD%2BB5%2Bfkrol83%2FPk%2BODrBNcUllVBT%2FdTkqTiZZ8O90J%2B2RD1Av2sGpMSWYVUyZYphlnvHbXCTNqb%2Fn0SJ%2FuiIK%2FpQNYu3mZf0lSecTALzsPXvKR8hJwVVV1sNlk%2F0Pm4bp0TLFYK8HIQX9qzAo%2FzTEkshP%2FpgHWjwVku6V5ArlriPv7PUbQLta%2BlKJmQP8nhoOqehUedheGSCKLqj3dk4%2FR3UmIMz%2B%2FjDMgHCBuQDesPOCLmBlnogXmlklteHY8jw91T8sbjGOWHve6BDlztjisiwarhdw3fVu%2BowFr1YtMK06XviMSXrqjSos3FmMquzBC7D2skc9mrXaLnsgIjNBcA0UOZYysmWicLadxySydez5mwZQjdIhiw34QbJunszvVBrN0bWOezRczhMhf1ZUlgbeuKNvfG1fG%2FycpTeJaDKV%2FnKk0wUiyGn5LkWdEwcyIMdq9KFNWrEX13drxgJkUcHvcnk6HVhwXMup8uqLYG96QQRcW84LGRUjBFSUhj%2B92t7aQjffC1eQleIuq2X1Cg8WoyUggYvPNVDRqIaq3dRBymnt9%2FZVg0NZe%2B5PAp83VCGSeol8bTv9Uq3DHyjnMlPgK9MNvIyb0GOqUBH7DjXuhgLcEzF2GjW%2FASq20uf%2BjVWsVhZmjbG07EemyLzxAkL29hTSlkDoqAr9Kx4Fk0qOiF%2FWxANK2PtP01JlFFXj5S0IuFTPvjNcmlfKH2MZee4UA0%2F9kTpb95eay2TNYx5lpD1Av4glbnEKFF8q6HfdSu6B58axjvhTbcS%2BP6Gl2rq16RUx45kBu038lC8NVvC5NOQptTEhfCT1JAmxNQ1SFp&X-Amz-Signature=5c0bde73878b25ec2438a041689870f69d408370c35cdd10b0250000e0a7d49a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
