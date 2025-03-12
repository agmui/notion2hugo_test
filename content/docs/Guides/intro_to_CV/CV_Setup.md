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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UV7BDY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD5%2BUt%2BY4kGJCaZBYosIKxRriZD2KRGPxyw100H7jLxdgIhAMHXdizBTAUpJmWsjugV08IkGZZM63pGLRmmF0FOY3%2BFKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVeMUz9fqsqPXzGQIq3ANZgL%2FRakIjL6n4%2BQxAPfQEtggkmOrDtwVz4UMqvh7%2B3QdfFHA7MNuHkfv0HzpgnumehrUpKayoBRlxHADNdCd7ws9cdT84l7s5yHqUFmesEjuhp%2BJ4x6y%2FFrLQ24kfrpy%2FmvNE6pOowfwSWmvQs3Jps9qTXjYNm%2FaKju%2BZKTVyqxLudL1Lmk6Q4HQkoUg4ZeFtozcxn1MIhOJydxFKeaiOI9sms%2FFG3GMSTPRPyf%2BW9cf3ed4iA6DSSlDCw2wiN67Vl1RdEjFktZS6jMlli1xQbCfoXpwws6Oc7644uCM0IYR7jryo6Ibdfcal4nBvTU0qWYoHIF5vjo4yLGn4UIL6Zfx8zuu0yF8FBbakn%2FN%2FRCATF3s8C27bZwoeO7q1Vdg%2BzmZGaBH4px9wvmvAS4OMqS00%2FrO5nZYRxUFmnH5fqA9W%2BI9VlhyVSr4ZnpqTJIByrzjXRs9sR6z0zvWCx172paXkV4IhEBaKscNrTCBjPYut4OALl%2BeXd3Ob9BLltVGwLCg0Qiwt7kLrq1lop%2Fs3HPYR%2BozyXsVv1d%2FMqlrW4KUvLNT6I%2BaEGC5YsTEUMpsXr5GRWtzMRdMbE8x%2FhMhg96tCCdUIDO%2BC2kePTEMy9CFbGdKRXyn8aQvCojCE4Ma%2BBjqkAQfA6YH%2FB%2BK2IUnEDZFDqgGGh5G6GeN46FnyjfuyTO%2FaET1njLyXgUe1E9JDlSyIS%2BV7vHR%2F2YgqvFAz9uk%2BD5EHCYgLkqg4lz5n6nPMzGLQJZq%2BokibJYMxWxalkLiQyJ5ZIKq7VJNWY8m8xvu2YymusipuZpwJyj9nPDIdUHD9tB6wAmwUEYXdQsVYSFThA1arlhRF4zBrm6Sfg6RD6GpRsUqe&X-Amz-Signature=9138516e044ef94bf9df8dde6a6ff9d9df2bcf6cff430d4781f14e435c360729&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IMOGSNU%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCKOipwmjYvinBlzwuG8MnV0qPG3B%2Bl4JEm2jIFXHRzJQIgKZ63O2mPxt8Zsg8QuT%2BiHzJH6o6Jgyx1p%2FWwspEqaJAqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND5JIVvnwWljwXB2CrcAzCGnGVpxI0QaJjgNgvKi2MhTxxrdipY1MlU%2FkwF1gecoVK8fb8Hg4MlzsThpgbRjrYOqHR5ok8a7qQMvEa%2BRdsHhX3AqLYuTxZVgXQ2jc46g7e5y1DNYv%2B33kKFXT5bwWCd0Ly%2BklaI9zFq6CU5dztjBfW75idfTOPHKY8gxfzstdIdHL4umPSfKPPCK3wj%2Bi%2BL6Ht%2FzclRaXPc7aEvP2aY0WEOYAhA6zozXi%2FgKrh2L1dSJRDuCepkGlnDQ8569hTMzAblYmN1kz%2BEt44CMQ5w2EGNtfpPdWSvS%2BuLEu1wnXSiW93m27z3qUNb0Vre%2Bbh9qZOQ7wo4DMdkuUsfps6YV7Z5VSwVPJR7g1K%2FeKgfjSdoWTCt7W0WrIQu6dJjOzg%2BWcqMuo7yb0TJhzFDl9xyS0pZ2EnoP%2Fm7Qn2Smw4Isw%2BtJT9LDaulfhObY2sU7YhmdslZkR52sOcXPTCFo37R0KWn9npvlFlHPIs%2Biy7DmAJu9ezYBS7m6VuDPM4FpRN0sHl7n1fqItsv37Jg%2B7GB%2B6ArGBLJ7HcWpqdX0l4QBsQfpjQhs63JMz6%2B9JpTptps2UszBpzEZLfU9%2B1bbiuLRMiFrJwobXaJaP5adubeSG9oatZuIUQ2Q0LEMObgxr4GOqUBNcYo9nBCzTla20M1Ya%2Bx4QbJOEeY7BfLS4TtL0eYtHqnX3TVM5dhPiviqicUINoomy1PI9MiU9Iw1ZNwn9GEGhqr7QjLFPsVAz1BjGFWEJRFC5pOJMGoEV27M6RDIZe5VeIrv6Oytouhzcim9LNWdlEYdk72hSh%2FOe8OWOth0z%2B45v5Gi876tPA4xGCKhwjRoqMlL%2FGlQnwWnUoxBlNNAtTL%2FL%2F3&X-Amz-Signature=84885270ff1a78ad0dc05c7afebe66ce7ab74a02be52f6d6b42c706d34d3c818&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
