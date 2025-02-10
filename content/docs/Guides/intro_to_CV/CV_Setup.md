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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K2C7GO7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBu3ImGdNAaC%2F6hVn3JYDOPQeihjIBSaq0D0keDX7CawAiBOuGfUdhdnhwWR8NhkCkfZ66h%2Bv0RWVJb%2BklkxJXAiEyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42rm1lOBgqM34%2BjdKtwDZ87oxNL1mncGQx7W1DcntBGFAb1W8sHuyF30p7EvtAIHIhVRIhQuHgSFzSZaipGhs%2FZOYxzEl0i4H5R2DavdwZyUOKse6KdMEAhPiaxmZ55TPDPPX31Oc08H%2BVXd4S1%2FUtn6lRfRRN1qzdzgJeuSUR4b54eMo44F4a4T8yqq4pD5W7IGTZmbvpaQJVI%2BHLh%2FQRSjocShGQHkDF%2B17XUMKRiQlKBc%2BuAKen8%2FNBWTZDLaZoDryqdVp8xTa8P9Smfm9EC9eU8U5z2%2FUjJJ4fTxSnyqaWLf8yJ5uV4d1k761UysffLr%2FfDKGHU0wkZhrru3Vm%2FAVpsShLzouIL9PR1PUoe7J%2FItGvWLWX3Z8LAoV54wvg522oqM8yQhZY51N2ZI7k%2Fkn5bBNPc9u60iRw%2FflnCd%2FiIxhS0S0Ih0deJaWxM8tb9WnicF5sC0OWMqMaiFsT6IeHBbgl%2Fu1DidvnTkDr1t%2BfAWZ8%2B5wD5HJGg0i75eWRm96x4OpWlv3LLER7x1K4G9n8C5gxIX2AVAj3gOhbF3hohTDBUZKKak7EEAv2VGQuPGwVps2FbuhlArrUw0JlowemqgOyaYtvd6M%2Fy4yY5%2FMbtBJSRYUT2ooBZWamSHLMTGoU53rUVbqz0wjfqlvQY6pgFeiZFWGF5p8hrirCkZ3KDgAj2XQBiocJTORwyiGomAUjQVOSCcGlGE%2BboxRWE0oCjufNpjf1YGD%2BDUB8IStI3Ox9WDsjR6fbhldIFRZElHBTiHWcF4ZAAuBaPG07g0Gn11v48ZfGTprJFbj6gk78MnO4HHU2iTgY6D2LTdcfk0iVaVxO%2FFhu13Fodz80DDG2vc4zpId0VjszLxrScRNt5jTv98fcxX&X-Amz-Signature=aa76ca7fdfb79eda1a773213ed0f6ea7887e2f962974e706b37233c14ae058b9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MJGRGIZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQcSCDWu6Y5rsHuDHTyL7VsdGrEvt7cnJbr6eigroMcQIhAOSF1tDHuXIV6iDtS%2FHG5FiyOrboxWhEOY0T4aVZ4reNKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNjQqZIKF4f9hNfy4q3ANi6JLnQ%2FB6Hy7QGlZQ9buOnNhwOJSLm1Yw3a9lk678LAa5UeYr5ynUI%2BLwy5x29qEEIH8mgktK2wtHty40Alc2ejfHzeTJjvIEoijrdkiFO8u4K%2BbaxyXuBWfg%2Fn8OLbVYtsViQnu0BcAAeqbDsAyogM%2BeMy8uueg0KCzgf5TCUxw1B1n3cLEgmmN3uqFfMlDCw%2BfQS27VMlcoVSPXwqOTG7EXIh2KTJma%2FfoLuS3voA%2FnZrvnBzqM%2BcAbLxkKzTAhNGwQhVNLY1SNeWaskdLIHc8XABuTeR7EbpiZ68ilr8DckV02EU4SkY6BN4W2VwWjAboHRma1HfsPhxU7FViLt5TVFvk8Nu1ZcninGGKfxsVm1L1LYIbtLrSdxg7MSWofGBNBtbleY6qtKk6Ba8jFtoHSqELERGiHJPKN8q4mmoIKC86heW%2FPEnZE8tvs0Rgn8urJdW8L%2FujwxQ2iqztmJ2NNXRW%2BthK%2FnMQqHJdHdRWU%2BfBfyIC462pJJbAG6NYxf2dIsCvq3gzO6BYqgmv4aUgId2VY1et2AeMpi4UQBUD3yYksYb3tnB%2BcYgHWNMyC%2B8a5frlAL%2BqDmcNn0XE8XAYBVck%2F9wc5a7Bz%2BxN1I%2BTBaB1X7FqFlR3HkTDg%2BaW9BjqkAcKJrSmNpT0zavgw8E%2BKZ%2B0uS7xbYRoUNKUzH2%2BItKjT%2F1FiKbLFlMM1ZgDMBHOafHObvqkjY6Sb4f7qZUEceu%2FSJkXybYnHyatis0CRdkFUnnkCetY9VfMK6%2FYStFkPYHJtruTWEdyVsfUANDHTjCLjU8GS5PdqOzF0T6nYL%2BQGVgKhzhHC2xes%2B34jA59hg%2FyOAVPjM92OSu0MjlqRSDtapivj&X-Amz-Signature=15f77b57ab0160e81b0091b3457698942949cbfa6c40dcf32835887e5ef7b8de&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
