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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZJVB5N%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICSGeKZrocY67s7FoCk0LG3ZITAveXc8ECrL1hfi6aHzAiAlOMAnnVsSs87EtW%2BfaZtBDslAVuTnoEM8CSXyyFq31ir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMaH795JvbiEAMA97hKtwDK9cIQaFuWCeAhrhYvlyfDNONBxpbqb2C3h86l5btuxzYoALPuU%2FeKtd%2BkCotcdu8RO04Txb6VICezwmff%2BefbiDt9%2B%2BKeJcSOgK8El%2BA2GF3XSHnvEBNJnbl5h2sFjc9GTIowqTXOhPTPpgw0qVu4I2QfRoetkmv%2FzQOdFvOGmDkPxpgZG1oWshy7%2BjRgShvHrEcRlw5XUzk3JySQMzukX9lmmtSKsOHRSYs88s%2BFs8lld%2Br5tydTtczwSk4jDkrI5QYHM8w60RTLxqRSbdT%2FRa1mA6iNQ04O95yL%2FWhr1iChfVFR4mQzyJnJPg2HbeF9rglsPw53%2BJnLth%2Bbvi%2BM6r%2FBxWJLr4D5QAWaQFk7CUj2A9qcICbQ4neKigx7BFSve9HZ8Sz02coBo5MpwvcFoa9ImZnLMm6SRMVipX9T%2FQgPnH3WeBtku4qnYQsejesHFOWqCcCEUmE3LKiKEtxPnqd9e7Kh4m6HPwvlGPvuKSU%2BJZiQ8CJ%2F%2BE%2F5ryOlWZKifNmhZxpGAkS49CCgQsVMleBl4DpSEjjxWr0Yxgov6sxdRC7f3Oh28uJrvAzL7FkjWjxh1UKdbXpdqe2v0Sen8zzjdE1hoNKyUGqSSIgZoM2aiGa53w7bGqWJ8Ywj8vKvQY6pgHt1DA3xSSxBK7k5KgrjAAMvSzb6I89H8SOsrFKZ%2BRIASAP7OJWjegoVjTYjNwkTXs5YwwBIzRP1AY4HE4%2FT1paxQYUHU8RdjgN%2Bsxd3I89oWG39lmekN94NBaMMu1p18h8YMMFc%2F8IVYJkWE84wnqL5oJ8vKw3nNJyPfXK3mLCChFh%2FjJGQOnK8FBKkz3%2Fd6IU1Blxf6GvbVE9OfB%2BhWvKlekZhhw4&X-Amz-Signature=33487b025d95aaba8b1def4b0e3e7f455959da156da3580dc30dcfdf7074da17&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APXAP54%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIH0D1%2F0VCsp1PQBvNTrvm435fvphyf5SBDv3Mz9WJlnKAiEAqwMt23t9JXDZkjNt%2FcdPaspH9I8nQ3MIV%2BHioL5xtV0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCAzDsOAgtkFxQInWircA5XTjaR82PX76sIMxSWC6WynkPSkRicwYJ0vDojksCuS5%2BruwiXxjLOQVkgt7QZHkhKL4uxV6FS888RpWtpImyosoJCXl4wHoK39Aflr2wYCjalBO00cr3u1GCBlmwUJ9mDfNH3GXVvwNloSObypB%2B8WJgbISddBD%2FmokUqFZYHepsRlu6vitsTdmHvgPffR%2FdaLtpPHjkERvHr2EUZ8GVCkIbH8zjG9c7ks7e0FzkwZZlARCWefAtVnngpBYTueIcXG0EeOT6AuHJT41InydXVw55eu5URoDpSSsLjT6qDLVt6IXZaWtkXNiZ6bpV5635mw08ijYC6SfL0t0tgxbCTHztA5klIws6z6R%2FTnhb9GmNefNqKmpe92%2Fuxx3GwcMohNvQFAFgAwm5te%2FFv95fpouwRUJRK5eEItLE%2F5mXC9ZTYOz57JxCQXVie7ANBSN8z3dCAJIBgrQjLiVAFASgseZzmJ8FzSfy8THv%2BCWO44VqQFduGxm4CSqCwv5%2F0%2BgB%2FP3SbvAzD1uIZGYVhAdsITM6nkpIsHR1vxdpU9JAJLzT%2Frbn1Gp%2FRt9T4yOM0rkj%2FHTXwId2HLVjs5YKOmEAHwdi0WjtO7oXVYmndou0mFZ%2BXBYgpe8llbG7ldMNbJyr0GOqUBZua0ByVSRc62PQQt%2B5L9KjNtPmf7I3zGmOpd%2FUYIxHHIfeap1X82IEvBZhI8kksJ9HagoXmBLBj1E%2FspH%2B9a3qWUROd%2BsXn%2BmsXRSQVO3KBmjkDc9n1aPPsEa1uTQZyCv6J1vzWZgpCJ93BhovftKkxHj6MDnqAPQ8DwVvD7M4In3yhbHOpOsBYA9aZlt%2B3fIuT8qj7qhBLOCosef2zpZhuw8ABT&X-Amz-Signature=e9a62b14dbfceb34d7f86a70b43658982386ebdf837d0dafdf47195d7ece480f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
