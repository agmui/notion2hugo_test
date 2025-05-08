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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWXCI6K%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5nf0WqQhOSHiaMEIIEUkGs46LgOf%2B9KcE3PLLKyggiwIhAOpXikRF55y4eIZN%2BhLGjO%2BsForlxp5dq6jLtkGL5S4XKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzpE06muFhY0LnAg0q3AMdVH4UgSH1TsxBUOER87IT5viOb77HSbuVizKtsAdhKz3Sbhmtwk0%2F6a2QHY6Q8NBJp0fKN7lNY1BMxhMsB9siOo13htLQN%2FzT4sTQ4U8cWKUppiJS1lRWX25KOYm0uEaPsMbrt%2FaURuU1vIzO7v0vcXyLljATZrDOB06ZhhQ%2FT9g4fUtXWiUaZKqmg6FRcxdRAeyJiMmK6FxdutiQmm5NKxeutqjmDS3T1ZCWS4W%2FgrWkugwx4IMxhpfbBkiZH9XZXA5uq7K%2BtIRvDc37lV9JJYplNgZZsxmKue8%2Bc%2F0TlthilgPr8hr2SrdZs6R2xAgi6%2BTNxqJrzjkf5ycxwRGg2%2Fx2Fj%2B3eFGXeSWScr4H4gKo%2B2A0yk6OtrOCDculMjb%2FFP%2FD2pIoKp%2B7u4iXliAZK7OvdsrFlvLCVes%2FAoOyvFet4bst%2FcOKDI%2BzGdlvxVDRFiKvWf7g7A0DezYZcfz2OYupY9tdI80lTyA3iIMNYSrNS4wZkkzniLzhY9Ej0TiMeynXvyJSdUdGbw0OO6XvghMq2%2F292rLTTntgij6pblGwQ9k2kYcSxwyiEoEd4ySbCdJgOmxezA3nJ7CbDIDCCOfP883XOH2dm1CXy1gyYYtbq6AFNKtq5mL%2FNDD34%2FTABjqkAfBtA5ZQZ9x7f3gomcdze%2F5eiq9GMyGZ5Zp933E7rNGyTKzYT1Hli1WJguBk0%2F3Uwz4vIYX0KHNn44hgAtQ5F27t2fdKbJW5PzGQCgLexGanFADWDGVft9%2BtzqU8lxyBp5Vfp7rRLMKNkULZ9nnchn8LKtAZ0FlfmG5IkRPEM7B9qw81MuXXxwcx6mv9w8f3LE%2BrS9STZ9ialcyil48vMlLWtsiy&X-Amz-Signature=34942e99b7afa3cc4f076132aa6b55a9ff4a7421e4aa1a61fc8ade2f057853e4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633G7ZQMA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3aGoMQqOMx0IPrhVVh6%2FwvgVQYqstCpVVhypu%2BnnV3QIhAOUnKUuooN0%2FUM7qbtUCCc7W29SgEUtV026%2FSI8LY1KcKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1kYm%2F9EIZpUTIsboq3AOdOI0r1rlUNniSQ1L2Oq0wLBKTkg81NTwNaNU%2B0Tdxk0I%2BjuzEicap1Wahqtx0qkVYTku4gyAhS1if18Eeo4EdgnErCVfK%2B89wfW3GfUvd26Zm0o2JBsUsfkmEi1x0cE0VDiE2p748fZCFWJm65xKOj57e6YIMjs8AnJI%2FEMO82gY74niDRu9jONswuQ1i%2FzOHgGfcY%2BN8whEMrc01XaoSLuaxXZ9eXp37iOtxSRopKVKV9e%2BmLaUWEj65DUa0JhC1WDqP0yyBXU%2BQn%2BR%2F4vchB%2BQNHQbz7b8mugw0fU8Y4y8nu08MMbJ4pOR2aXzReNdJRFAOF%2BSkZWP4F8ot5XxlPxFhcKpTytsDMjm0txYHMWMqU%2FT4hxl1XwH52GwqNisz%2Ba%2BEWMC1fXOL6FLBa3s81qYYpLhc9COWHodAkfQ43PYJv0%2ByEZl9Z8rM8ao7pG%2BVP0%2BZfIKHdfpAXX08Sb53%2BGct3xeatCKckyYPPDLWZSErps79dm%2B%2FyT0u%2F9BmmB4w6idteaRxfR1cxXGK5x3DegrhUFB6vl3DuwPx%2B73ZEPRdRAbwyhhqBnN6%2FXCpq9lr9FhZS7M7HGqGkFYtdFrwX5azoCNdQOKOqzj7mTMpOsVkJ%2BqPo5r5mI0bpjD34%2FTABjqkAdy4i5OJZ6YLyyLjZokXrWoiUCt9YovtsX1RqRk53rT0dGvjnaSamfONOXgan%2F8Bq25LokNl5CA8V4mb12pZwhvKOY7Wc9kjmNXza1Dry6OGf3XnQfEEx3pibaKcWZtyvGhmleCUR56sY7jep0bp9VwO8bjdZEgqUFFQT7BlpP5kcSLLcaqPkHZ9cow%2BF%2BKm2hGxxAvd3gGdxOI7ZEJc7U7kAGX%2B&X-Amz-Signature=5bca5bce06b2c3e4eaf88efb924f5caea19752492c25bfe82fd0265ec1f2648a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
