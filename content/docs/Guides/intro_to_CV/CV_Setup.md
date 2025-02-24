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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLOLXNH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcR2oyYirghTzUJk2G8ghUK8hOk35Rqj7s8E605xKaPAiATN4OKArXul0bGUGTM5V0JsEpEH9PM0%2Bkjg%2BD1%2FdAQbyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMaBZ8aR%2Fn5WJGwA96KtwDvSwUZObYF%2FcGOxfQQLG9MF4XELKpFYRyNgtnpiJH%2BL213QIbQFUWz6Kg21cm6ukwtfJsWBPjh5g4cz8VNlm4FrqhJIIy%2F3V3mxlVtDLIP4UqwWvAZtetXOzQp0mMrR0pTuQ3A%2FTwEsnrV8DADFkQOq3b664S76yERWD4LcDEq20HOg8UqMyrcROmP9uAWD%2FTQrt1pn7M20524tijBz1YBSJHnXxUZbvulNuCFfwyBajVKBrjrEBK%2FztAcRcwtEWBxu5wFrSajPLlvyqBQ8keEyrNylo9Uqq88MtXwAEeKaEk7oNhig4XyirWXiszemedazIWge0zIirvjkGH6T8r%2Bj8hjWO2OxgHfFvZWvuvga3tbw8GU0IRg1g6%2BEEFIQdApM5BnqDQlTnixx6ZeyDdmm8mEIpPhRhR0yCCpzMRm9giUdiDp1%2FAueKm5yn%2BDQZmXtarv2bAByHsEROnghUfdSwm30O2zPYJ1jl6SNqSk%2Fd4YUOC%2ByCIGzPm3N28IqTVjUfsw8RgYdT1ugFE5CAevexDzZ2XLELAbkBjpauqVI5cRpw6nApmPWjlDkTbXfysLOWeufeLDQ9GRVQig42hoZoP9VY9Jr7hfijdDcNtjEnKz6KkeTIN1c1aIhgw6tbzvQY6pgEPlBprWpAiRgU5dJHrCAbDZ5PHY%2BkFBbega6z18dvL6seHAs40PcYiqewQ90mQwy%2BIyNJp6GU%2Bm2WagkSSH4idHN0w0YQAxp1OuHFQjpHOf%2BWkdm5EB26sR0MJTBdgcCNoY23HfOLTAcyGUVhOgU0qxLsTLjO4mGB3NadhmXR5SLBMToDmyxWTHClBVB13MYjpgyqKAOwHtTnfPcsfPm0WNM58tpwZ&X-Amz-Signature=f52112d5128b9d84ca505d01fef682c1565cb01e5bee73d8fe0d710aa22bcbd1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIHVL5OZ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICemkMzzYtFcfiF5PS0lqvnuQzGmM%2BJGhktnda7t4M7BAiAuppwQWR%2FZchxJBPfp7VB%2BoqT5pF9uMm4Zk%2B9TfQcKBir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMJ%2FfNSXplKYwzv58PKtwDcaMVYuDb5yshyhnef%2FJfQ70Y8iqVv%2BXMGd8E7Emrb5GZ0PG7GqzPT83Fv84qD7C%2BBBoV33kRcZXEVNOAwB9dGer6t5V4lkJaQm0Jr0jVhtUniIpgq9XLpa5NxmevtZqnGDsK8y4Ggc49zB0xhGPkL0Go6qcZ9bILnyvzYbbMcOvtzXcoRhoItlPIjyBTLp8vj7q1f6TWn8HVhj6MhQPn0nccOA448FbXwHBfTT%2BSEmxjo%2FBU3AcbVl40Hm5BTO%2FlNyFP2xv4wS7KKT%2BgXOgKDd4ba0cVflGsmqIrv%2BtuBgZElsCouKHCEKg3dczrmlFq88tj8dm%2BN%2FQ52Wbz2n%2BdOwyVmph5YRvPT7%2FFhF7KLp7hL0voPtJoogyEPUDzQ6jSkbGG7XyQT5u3sAQlsMPK%2ByvbcBmh1kWSfAMxeCYZbImUsS3YxszWnD8fGlz2%2Bx5qWwTQgEa6t0W82lVXMbGMXfZWb5KQPLyja59ti0k5qDQWZHy7BGAzc8QdyhxuxJSpO2mQDFm6fmuk0HHPNKUZY2wSBXW6azq3vkXNHFj34orR4j1IwSbPCKxExO%2Fgz%2BTCv%2F9iupaKwPl49PwpthVJgnmOWCFfwcNwNXNM3hkKw9Y2gIwCeMBvDI3vtGIwjNbzvQY6pgF3YIyuapH88RE3xB4kjH4AIOz5p6oNX76wsSmHSKsBWsKvAow0gLOif4YcVxrX0GoRVHz2RolODD7GxSci9bLjzr9jfBQyfxOGyCrbxNLd9YpXNYGkBnxS7DmQLUHEnWgMTdGjKbn6UjR7loCR9WAIj68WvCFi4OM6qW3DkslqN%2B6oMa5EZsiAB83%2Fd%2BrvYae2blJSoww7BzQqr%2FVdwJ2vwvnojsyK&X-Amz-Signature=e0af1a7ec34e007f78a770ff7bac6ca0b03b2710c17661f7875df0e0c8101800&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
