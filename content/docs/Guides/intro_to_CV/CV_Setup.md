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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKWOBM6O%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCSYKRyfijbeConG1ark4qPLDIv5kxRdxZwdg3EuJBjpgIhALyZh189IGyNE1%2B0wtV7KCrF7qO5FqN6xfa8MnTiTXonKv8DCE4QABoMNjM3NDIzMTgzODA1IgxTTPxOumkkNGnFoGcq3ANS2Pp11yFPb%2FugCBco6MlPJvSfw2a%2BZoZYdWA4dqnHYkmGn%2FxIRPyCOHlp3q%2B6t2uyyCVk5OOmxgR6r3LeDvArR1XMY4eIbxkZ7OpSxgWok8yaHyRrbr7TQbTJ5lnJMXuXyNwXXy9cUM6Giv%2BSHOugHjox7aOuDe%2FdyHlg9kHt5UUHDBEXeq8WnWMgC1LoV2yHBt%2BqbogmZKkfvsEcgNYfcXGTiffwpGpk6rdqIckumfitzzbBFEYdL855B9d5pC7xYb1Yd7uXgBXx47ahPS9pTtzhXXbaORpPpIjtEHD9gkyw4Zfk9ODQwR0u%2Ff%2Fn%2F9dPrtXiZwuX2ypLQYWxcOtP0S4TTYqmtuRQwAwiZMLV5ghHsiUlSHE%2FKhq5PTGYIhPxGsHvSVSFg9I9V25Rq86nIfjAeAoRtJro1k%2BdJ6cJeUhV6FQFYLSoQ4ewoxdJjDwWOYYbIQX4q%2BrO46KXncvurihARafnuKsMfdXUP55qxp%2FLRa%2BpE9QiuQ9MNZ2KgWPMuZxcdv1lOiFferJ0y8KL0xht%2F6cPHAd1aZW1yts8EH%2FlwbWmHZD%2F7K9LpSDhp2u2b56oT6p0%2BQe5oFzp7P2PKSE4sLoffVwQ4Pws94SMHB28ZSCRSOWSaV%2B8DjDj0I%2FEBjqkAeu5fRzCg8q172i4HGiRyBu9UnfT%2Bky%2BGwz4nV0YQqwnIcNhXIdO8jAkAqemwCLCb0ywVWAsuXw7Nb4ipVnLWcomUeR7harDodIxUKz0yFjIIoEWesdGUmm%2Fky2E%2Bie4VytI2Kz%2BX%2BWa3ZaK8Qs5%2B3%2B0TVzVYfO602b%2BsHN0kiqccymUZj3MOReE7JoqZSiWYi8r%2FfYZVVBMIVRtFXmKo9JkZZ9X&X-Amz-Signature=9bdaadc449030225b5be3a87067aeae9463be4f9c4f05951e6ffca18dec55741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WIME3BK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEFtjc05HXJYgtXb6mFwAuCY5KnJ5rBuseZmJL2cw7kFAiEA4NH3HLFozn85m1BKcCCh3YbbwUr%2F7HMrADVhSgIH0TQq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGmugpmVl1Na1I%2B8ZyrcA7mTLgXz2vcDJnYo%2F%2BB3a9wIFnQ1mE5Upp4M2QlkAaLrKsdCboStmjbywBt2TtHgXr9kCOJSGEgcWu1%2FZ7OId8qwQIdhbfApFHYK7CSTDGU%2BEePJ1ysP9I5UOmSSSdTPmrwzNxUAqYAPpm716Vkl0%2B1VWe2%2FOXFADAvxlnPpGSY0xG1UcrSzP1cu3oOXzsBvhC3Mha3HEMxw9bfU%2F2Y9hDC6hfE38uoMlx0p1t8s%2F1LYmjkB7TpdqNaAcqW2WBJg1LHkY03umDQPhvvz9BSqDBgm2N0Npei272H0471XmNuyFOS8S4tqZeJZ7RROvnGvCzX%2Fd%2B9dDHt08odBqGnDwCoKyV77eHLMfofdjV4jCVdcWwxaopOvfsobf22za5K%2FdmPzNwHymqtTYZs4zNLobbz9H7o%2Bh5RULE7SY3rFR2eb2KwU74fBC7Ig268AbETOiw8CLxvc3N7VVO1VWgPY3os5hU7dvZWg6qQPzsd32wRZ09WcjqLirzSN4OXMUkrLcAJ6vCM5v0imLAPnIh41M7sj8p30aWkR7y9mC4JRVba0TYvQiBtGQ8kV%2FHXXvaq9MCSYhW52Y8t6elUlykLl41m0GjbP4wAvAVUo0ZlUZoVaVUDyUY%2FWkHgVOL4nMNjQj8QGOqUBi6CmGaKBkqyfmGKFP9pOEt3Q5arC0%2BIbTyA0vUOxeczQchlkNApLkGiOU5f%2FgWha7r8Jua2qWTBRpLG2s5Hf2DJzvsM%2BeT4qe46EP3pSZosYQORWLuY08J2GB%2BUb8qPvchGQ6OsKudJaV0sECtJ9f7xk%2BhOwrYbiyGPuUx0TMxVI%2FhMvqGm4BogmB0utrcB6Kpf0pnlfvBAjQjC7izgMKx1GC6b3&X-Amz-Signature=769bd699162062289f69a14b37c7f121e2313e2d2ac664df67e5c323ec9391ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
