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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672N2XJ2Q%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICHUinCajzdMUkn%2FMTqbWtHik0Q6VQzRWc14x1vfcX%2FwAiEAq0JpXeFQBRdw9amaMYblGrfSDgR7TqGemWFc1e6h41sq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDHHfPoKUB7vYZ4UkircA5uuV9%2Btkcvot6WHeZrC4EcKoqw1%2Fqicrz0reDSiRNy4jSOSVNlLt%2FZr7VjpRrc321XUBA7VONqck%2FXPgMQrJlSC8Z56Qy6oYqJDEFLsEeX9%2BCeQHUd4rMXfZZ9x1XR%2BPN6%2BvGy9uSPNzDTCIQRUosRs5kynCfrI4rrh1ZZmHmw6h3i2XTG6NenDoqEVXg68zOBPaOpM%2BzDlqffKtOKia%2FZX3BUtQXE%2FEeZhyeC8vthwtqtX6EQA6sy8Rx%2FFmjsCOyUO1nv22PPv9R1PnvyhdTievdIzsI01fdiXgLJzpyCK9PaZttBgFwCn1sWIpMVG8c1YUlyIVj%2B9fdwA5Srrfko2GyWrSQQVwnOz3zF0sG21FNFWioC%2BmbVY3XIGYIkl%2BA9G%2FNEZvGNpHZL3oHT3%2BpdpJc1%2FStxGckKn4xxhYSNVp0OL7jwqkYr%2Bn8WIxSujobP6Ma%2FQj%2B3NaEwyqoCGGoZ6zIVKK%2BeweENfsvdGj3p6FQCs8PTuABwNVQcDPmAH0fPmldtb1R39srrlX69HCEnFV5LTKEtZMHsnNFkJNrP%2BrdOc7h6Twv40DxRRqWwSrIDCRyC7drx2M7JVEbzPrf%2BomxRtUhZ3Hej7wVentGqrrmNlxKVuoQ%2FKLNi3MPHo9b0GOqUBvtxH1wR6pjaBOeTaL6c7RQ6yfcZlwGER3BmeSSDJ%2BVCoykSDGPXE5GHJa0d5J90euxoEwlh4lwd9akMqzIas%2FGkVZZUM%2B%2Bm0x1m2NLXMdHV73dkL1vbk9u7IIOru6VM7VGseiRVyfqY2OQnrhty4BfDOJbbp6VUPhb9OnxEseafn6c1tRD39iF7VSMmh1cI%2Fm7hXvKQO%2FnU%2BSrXPRuGGQyasKY33&X-Amz-Signature=05b9614515d0aeb0739d11e5bffcd501e489c4193cefc4b8496b3fb5e1b5e8ac&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBC2RSEL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDbMbBEVtlutLRYZOzXJGISpz62pDhCNqhW6v9Zam4oPwIhALkMxGs5CNNnMPWWOk1WqicfB2gClj2wUyg2xaciQdS8Kv8DCEEQABoMNjM3NDIzMTgzODA1IgwZ9koEr%2B37DYJl7BYq3APABXx0dGpmoIJDVgW1B7HAKVUxXXS2xz2lafUvcPMeLObTdFA99ojjTDXeflMkhpYgExxwrim3zxYHFdIRcPf6kUTeD9V4o6TIKsGSf1nGCgc9XC7V3YcbtsZKmqFS%2B%2FuxGPo7mm%2FROx3tyyD728g7vhST6BfzdCEGTHL%2F9zYhVuyR0pz6cPseC3V07%2FdVmjajn%2Byoitg5XZGiqYq9u9QbTDsD7Txbaqs57EKqgVJz%2Fs5wntNtGkJl9Plw79gGr7bn1KTCsQKaNEfxsvNbGKXNkiLEUkQWHE3D8UnYAOsyBjtDJLptFbe2Rt%2FdGzd%2B9jJVKfutA%2Bi9U52ZpjG3%2Fn3JadoqO6bgqHGxfchpR7JXj65mXSofR4i9ttt4EG%2BdNYIGNCufCM%2B%2BPGx%2BMBwiMQ4RSYdTFHdHWEnuEVEpchQT%2B8wub98BtPYpMcQlTBjRI6F0lG1Mq%2B0ahfvxaljvZ6SDKS6HelFuNnibI7Kn1YgJAjbqqYBUIAxrXBkRBm7usexVGBf4I%2Budu0VPOP8fpo9gZKbGWKp8R3BdJ%2B8WeIMg%2Fe%2BcgyGFMRnr4J9ulv8xYoyysUXHX3k9guPbjOBJ2dT1ojJ0pJYwB1LpwajZPDX%2BsUvbyHaLHwtHQ2oTPjCR6PW9BjqkAcNULMZlq4f9GjxNFS6HqLlEXvQ6F324ANIISwEpXxRMINpAv1ng6GmpGYWosgqJMwejvk63Q%2FoqL7UzJ46dXNUzDh%2BBvkH3%2BOldzN0RWC8Ck0ad%2BlNS47J4r%2BdT9%2BlrKV94r09Gu6YqD6e%2BcByq8z%2FfI%2BjTlxqB9vgO2yUJFLweNmFnFkBkHakKD5WxbXYB%2BXaDZr%2Bv%2BCCj0GNlk8l9OXctJ0es&X-Amz-Signature=37cdd99070ae52401bc2ad84144c82f49d5ad42e2a740bf349b6d3b66ae233d4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
