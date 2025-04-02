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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZYGLHQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBL0lhwRBih9iZeMRoxLoxImUhxBLvztYdyJyqKykS%2BUAiBi6AvC3dq%2FiUQfYxBmQpKX0yWMNc5U9aHiH8eiqEza4SqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGJrgQWAQ3k5oMv9UKtwDuWAturIWxWxFIO%2BVQAZf%2BpqP38hUGORu2MKPdmAKaPGknV9knL8%2BcX0nk6BLRw3z0i9VbJ3AOhD%2FgRXUC%2FDT4nfJ%2B%2BAPhxFrtH3H0t3HcCdNkiSGWyRQo3HQD70o9FFGkd22iueOG0BriF7mwWlk8DJ%2FJ8pWHwxlu8pps%2Bhti4NCr7ZGVUl40l9lLZVMAuedmjmA9i%2BrcGqtzJTUVspWhnhFWl73UIpfQBICAftnGnd0MnMTxbHPHtoWp3GzrYWFz2hSxGL0x%2FKl1QchO9CRwpvMQsVQMtD3Kq03Ns2w3BMvZrBbJkjIlz19sUibdOmbFs8KqGtFHfkr2Fx%2B3Jj1QDybGpiMRnQ0ESQ1EUTnFcx4WNXi%2BRlnsrWcXUsedbANyjoeC4SaJqa%2F%2BD0B6w2BOwYfLVBGOnO6EYM8sB4HGVu7Pe83xXa%2B598oanlxWszNYap70%2FftpqUnf2KSNRlKPYimrOvJkrX1hNr0BL38PmeqeLdCKu7%2BGBd5y8dcfwKQfJaQNXBJDTUDX8DdtQdHfkbEk7rtCiLhK0YPSZp59rHoBFADA3kMjNHyNhxrxa9mQ0EWLQ0dfCw3UGrI4WSCTTSbk2pYrTLsL%2FI1S793akhHwotFdeo3d%2F4DcE8wvte2vwY6pgGcnx9VzFmdu7Tr8fKvXcJQEpATh2%2BkP2f0iJA3NP69OruAd4QYpyaaDEpcy4BAzwpnMbI8dbaZ2G7aHX%2FYTQMEbhzCvfXzsqeErEGZvqL%2BsPaVKMSIrc9PYyS%2FGjBoYhLvSDPhOk%2BCHZnkceiMzEIvuz5Xm1H6MmBzigrSV55SjjEJ%2BZfYkrAZt%2B%2FH6NsVgT7vqYGT48PsVfN2xoi3UojCfDVACbmw&X-Amz-Signature=7deb8c98a0d80f891d070fa0fb521dd17609231b3a39864ec6496c3272a0ab75&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU35QBXO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICpW%2B7BxzNvuxQ5IBnkTXUiwWyyPJ4twBjWJgztaMeRaAiEAl5GfI0cHRBaDGTwcueN%2F3xiDnzRbetfgKU%2B5A3TqAqcqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFauriy7B%2BF1md%2B2qircAxHIuIOSxxRYgqaUJgizY9PAu8v3a0zgOYazk4s%2BDaSgoK0GLshjhtOC1nZ%2B617jGsu1vItnrOHtm6UPsdciYzm4d7Itw%2FPV0gPQl%2FyA2y9aRq%2B6PAFccchovOH2Uq1dhpwOpcIqYgb008X%2FupTFrE3u4ZAymhKkvJ4rN4Y1f38Wfp9x%2BE%2F2IDn%2F0qgTSzF3bRpBZfRUvgELtMHovSSBNgxg4a1IJNqHX2C7leEgsQCEMl1PyJgoqNRG2rMxzQKBnI%2FXccxk0if322%2BbMtJSyyn0qCEEp0XKeEaTJWBui7feeSEyOwIAl6f1r4yTClk2LRqaTWUHSxKqqPT0XWw4cFDxstHkCtuQhsAKZ4A%2FrldgnLeRJ2p%2BXfIemG%2F4TgdYFFD5iLIKniq1ZsfmOATbN4h1Isene2bKJJG8gZ5Zll3PWqYh1DSnbRnJWBx15gnMERkdui0BUNddMnYtC5lR2psHbXYBdOSE4get0oHPIuenAsxa2Js1glT7ouM%2Bq890vOPGoLnGm%2FElhH2BQXAt75%2B66DqPWO7bw7qk29%2BnrDWqawgIDF4tirw7lVBUauQvaVr5FpQuxzawCvWbvGTKclJm8ILyDWVZZrcjHb0fKbhJMxxbAoauR3ocXSS3MMbXtr8GOqUBZCPaMqWAUtt2BZUNtJA0mb4MTGTDnBTGcoEEw3lvhP%2FCpEWTngeglRsjtkHJsddA00EV7FQM8AtHxYh%2BmnTP4yNn3t9Bjkeixjgw1AHj3djn24jqeUqd9t2oj6qo4X5rUOrMmwUJCtud34A7hNbgcjaDRiJcWUil0H4czDCVxb7N1J7QBb5aMsRh7yj3k%2FVamNCUl0xqCO2VW0WHC7R%2FHavHKR8d&X-Amz-Signature=e4e80833c57b7ece2eb8479c9845c60db8b0986b5a094d1fa2c31cde81e73dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
