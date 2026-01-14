---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVGR5EHZ%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCgZ2IhKJmyShpnhnsKjVCyFrvxrN2fg1pDXhHJSq9n5AIgEyYHVNqSlx5W6BUwgIMCJ9ywQsQybfeOTL3xmNo3nyQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNwWE8bQeZXcD6YGlSrcA4%2BtTy2aSYVjfUlqGshqd6TRnc8ZLrnwvsZz91%2FKJ4klCh8IodaM0Gm9VKuTD3lnGNLjwN3%2BpPNbjhb%2FCjgAOtT185dbGBpnGy%2FAtjpyb%2F25PmV4CYnLrGRLFTArTimw5hUMj7hhjaXAhVaN9LYW2oPl%2BWe2uGw0Ar%2B1B3qE0hqUY0Naeq1A3xpbsy1U8XLr4Cy6KPUAjdUXkpiUoVgjS2IYp5%2BSzmSScyzmfDHx5vozezgmrx571FV3zju08yybhKTVRY2%2FKPDtkbgSMPvP9jYRZ3hDPSSZ17uht9yetUu3R%2B5%2BBeyxj8L3HG12gQVGa7VAAvvnkuzT%2BiJpy406VrqLc0crW%2BHU8uBpj7uDyp2P8rG5uRHWzNnIF%2FUUt0eLfRJsqmQHGsmmIGabOO6JnnI27AUB1qevjDKfeig69y6Cnqdqf3yEaPRjplnxnWcygZOF3bNJ6zjAjyQYLnmG1i%2Fd8VOn5%2BpbR8HwpvX7oTwATVZMdihQjGU4Dy8diSrGKzZ1h650vRTgDh4QzkYaquHEaNzcPRnjEUpL2RqYFyKOa3oGw1dAnUvzNWjSKCCQ7PfU7jmF1kG3Cd%2FJgfaFdbrlO6B0Gauq%2BDu4Z4D4q5J7T5YSRESvxUQ%2B3Ph%2FMJrOm8sGOqUBtI5Ey2znS9WyJZFaauBROIrAdI%2FsvPEERbTTuNAcYvn7Bs1NwP5NpCDh7tYpoglrbgV46vXq%2FcsSkMJGOGRq67jeoDjFn2thHe3Y2NMZMIPLv8lx58VnxZvM2T8DvNZ4xFCwJt5dzbaTaZqjDIWmFp41KDy1RT%2FXl9rZIHmDExPmbf7zQF9WYuksXz%2Bcca3MqCTxItPnYg16DIFkowDqXcQpcA%2Bm&X-Amz-Signature=8ebcc8502957bbbe47a1349c4a8a87ad184361e42703cbcced63cd8aa88d183d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROL7JHMX%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCqMMSHrXt90YmpggIdZ%2FIZA3saX5VO%2B0R%2FmBwoQcENtwIhAKJXlVT2z7UPPdmI0L5OFTOO9fYHAaYb5Gxth1Stk9XpKv8DCBIQABoMNjM3NDIzMTgzODA1IgxRCWImNNV02pGrwWoq3AO%2FleRzeEz%2FWJwz1wCC4Tan9DIQzi2m6J4Jlr6Td%2BZpxfszaAI5ZvbwvHbL5S1ImZoO2sIbLAb4kXtE63PCRe%2BY6bTOwlhSFOR07U3loktm2H5VldU%2FstjZs9PkfM5H9yATImMgQ3wX%2BaTDETTXN6AIz7GOnsBSdbcjTCrlpVgYIkCGE8s2Mo3o2l%2Fy%2BSJVjShymEZA3u1B0rCZAnPHZTtv1jpENJuyITe9XDIYXxzxEH%2FSRI2JCSkpyh9FoUD4pxRtxYwYuWLIXcSsTtubVDKRd%2BZ5cv45yVnaFstQGpz44y0Lno2QUCsOy1v4QhVdLoMHDIzH3nVXG0VLcQMf333zy1MBIyT1hwPd0Jn%2B72EjxrxmAUTqMGVwHEe7eodiFMeLXyT%2BTNWJW6C8qOkXRzeTOFzbS4%2Fbxrvvv90m59rBW0lgeJvklS2yh5YkSphJBCnRgn9u1WOFe5ofTeKkymQ0AtSTnnN%2BmecTIZHw1jB%2BP8ZhmONyBWSpFmErv4kyt24Brb9JtSs%2FgfngUCv0RvtOni%2BZwZpDNWLFO2A3JU1q7CNBP%2FZSYoAuLsL5c2u9XGPhJUNUbrf3%2F0veKHJpquavoTybnBjeeKZ1wVq5Rfeye4Vznl0c7rTTdMbknDCIzpvLBjqkASPXPHaX1zd%2BlAwZWHldrnKGuhXwXV8rIeJiJvv7umwhq%2FxvOg6tcEwvT1ZRY1RlPXK5%2BGTZfL3JpDICxMGbkeJohGfxmhrMpX8u21SqX%2FhleGHlVzSU4wyX7KtcK7%2BtT%2FOLwBjixmQ5sXaiSFuHy8rZhDKf4x2%2BjH1nHgAkS61NnRz0VB7kGhgsxM%2FDSeMl5y0ZJnyzCeYhEpwFZ3INCw4o7GZG&X-Amz-Signature=c41bf006b2c970e64f2ab8d40c1d26a856e18183f8c3879f1ab0cf1e988a4834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
