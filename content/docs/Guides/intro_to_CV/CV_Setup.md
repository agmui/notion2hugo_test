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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCPAZTJY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIHjgxlj55Og9i%2BAYT%2F6ssq9R6E4JegAG%2FGvgEt0KYhQHAiAq%2FMVj9DWqI7wO09VPUdDc81pwoVUwgUfBDcAjk4mSWyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOG76FwOcLkKxDh7KtwD4NKC%2Bq4NNzqP8gWsAKP029FwfHserxAxBdt2vgQh9geiF2FfFYet8W%2FBJh36wobGzzCVcMvCePBnIwkkM9pmcARV2xXgAzaE8PWwC%2FkG%2B2NipxNW%2F8bCNZuN6AUfZ%2Bl0zYWiSF21QPBv2i95qgxJMtJR3nIRG2V%2BvAgn%2F1bz8cYuyHiTOnmYW9Dz4d7Q75boikcaon1sv%2FTrvz4QdwWzpeMspBATL5g7GXjmA%2BSohgVeQdLDPkUSemTlvFl0dSt0l4sVUaB%2BL92S27o1JQjQhOLhxLcaMsT4wdAVAG9bxEhiu%2BDXfbyqrVtV8nO2LFaFepJx8SbrgALroVURD9gCgztMNxzrUa081lMaym7%2BNGK9tN1K2mBFfQayPujVsA8VbS4hHYGwf3%2Bu8uUIDBo84Lkp5vl3GszV9yd8qITC5HoU03tIEYzHLk5kOBXKTV59sTzDlCfmwKfpRU2SVBHNyuAPFRviGXYl297gudlydp%2BJ88W1cdWQT4waT3ia3HSu1f3eZFp34DZpAnLycL5tpAVX1TeXP%2FGNZ6UGQ5cCY0Rm2S0Pj20%2FNe6bCBxGlIpfNnr%2BhzdlzS1AbY%2BRU47foQ%2BcKqdmKakToL9wNU6mA2%2B1zsF4s3YJDaCPhjIwqeeqvwY6pgFKN5%2FE7Qn%2BtHc5jpjWUsVuJjLPLg85PLun142h%2F%2BM0RYwHiuDB6ClJUkIDGUG7%2FdjbBsWKV2F9pbkFlvRKOofZFxSbVgutw%2FK6gRfTG5al6j7nDwdkudYlq8ldJ3DsVFSbwKg12SSfdey0G7qv9WQBB2c1eGGksBZ%2BjQruDSHZVdm5PuVn0bp4Nr4vFVQcRYd4WJsz3yYbw1QgWgScRjCKBlWpluXl&X-Amz-Signature=b6e6f249ae5ebc523a67d21515f37c51a36d9a75876d10ca96dd24d15c20a11e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOABDKPW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDToxlZOIYxk3aXE76kUzU5JGvfEorCwa%2FEudlb1wonMQIgMpXjKDhS1uYBMC0VGH5PycpQqX40tOr3HxZZFzGO%2FYQqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx54m1s3JrV%2BR%2FMoircA8sPKcQNQPE72%2B7s%2FQUYW2ez78a6zufDiEXcFgLqDd4LK6j%2FmOcXdD5rUcG2Ktm5sAJrx9G1DHPyoLnUArn2fFMBpO1MxOgpbBuXCRtwBlrVua09sxD2Lca6k6b7obd5nbmDoP%2FjxDdeUNcwVy86G3eW46cUSFPLumXL9V%2FxnrgC3kXgjhlbfwNiHU%2BFTLpxDStSjm%2B5Jaju7sLPkkwoh%2F2YNurNFzHFO41dw83D6OQpPhl0i3p4oQEGt3hTUhfJ3cNLjE6kF%2B1hHWg4gyjfzYGU4KNxrm7gAPkkzZ9hSpWPsFWP8AhPycMdLAN3xH%2BGpuT4CZFgg48hv2dWe90%2F9uI7jeuisWbWnPnKLrRjplEwAGdANMrca48YqLT5HsguET1Yy3xdNKFPrNsctllBll2oHe2Tj4ShGD4mNGrddYXSF%2Baz%2FostuiKkqvvFB67UbXlD62BT%2FZBmD0IGOqRnf1BZHixHnMEsxVNJf8ekmCnkrFc3RT09bKAV%2BxBo0t6Hj1d%2BSCK1xv1xgmNzUHKxkNZT9xvV2KqllUFuQkZ9O5vDpGfXo%2FVuGwfPJdot0kDSL4fc5xLwesRrZhPmHrjMRr1GRRhAq5o8pEcz9S%2B4tCtvKWcrwjixS43e1CSlMLLnqr8GOqUBArMUPGbTw96lZaAUpXUoVw%2FzSCDZAw80UFxSlo9Vv0k8%2BphBbZm4hoUW9G7JkpL%2FRVE%2BC2X1niJ9LT4%2FDgS6Ut1Z%2FDpsCqQzjja%2FR50CQZ1nkoaH5o1%2B3fujiGLZ2cxSCTd3dM0odjioV5fwEnIrONULBe9hoSdyGVGakqrk8BBlCNc5KSO%2B9WtqLX7YCqYKI58POf9cpim7nCzF8xn8WE0DfOrc&X-Amz-Signature=d0f4ac6355843d150e33b20c69e94e29b651db92f5e73860d33283d843fade36&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
