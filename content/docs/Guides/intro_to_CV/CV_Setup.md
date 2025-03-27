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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6QFLCFG%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk1UJgdTpVtfl5YHHJlf0byDRzUi3cp98uTUxoDtFGFQIhALbYie3wfwnaGaBP4FX7xbZEwiB8TThJfZXvs5Aa4CPhKv8DCEoQABoMNjM3NDIzMTgzODA1IgwKbCncUWnUYupfxyoq3APyuclPnpt%2FsUvpff2ziXuBN9hg4Rz%2F7u0s84mX1V7wU%2BjUkWJhov3z7Zx7dzDvV8ec3pOHLszgGKcDrqHlEG3CH%2FZ0UcxzMm3dcJN4nFLsKiX5wqURQv5wZqQ%2FU9LncbktLCrCZj6JLhAQ0HZWUHYpqm%2BA%2F8%2F%2BLPeb1tfjMkKYJ%2FT34b4av52mmVvCEQ8NvYVo5FOGZTOa%2BY337wmLVhLgz2Dh5dnuahxpXeJwFYjKlD16S61SIWxUnEq6ljhf%2BKGM%2Btlw9T09ytgWSqIi8y7uM%2BDYj0a2Q4l19Qgzf6B0UXkQAUMTNFLgF4v61Jkz0AkNHooVOjR0FtBJpm%2FB4XT8Hl%2BNcncQMfaQLQRU3EsxZ06YzIzKGLVr9MlGZ9SBkDRfJzN4koJgAhhaw8k33WiT8hODcD7H91TU%2FO0Fr0zi%2BdyRYSuW%2BJS1ZE1kxr4McVp0EkUD8oGWaOdMuog5ddYpu%2BCY%2FiO0RUUvt2PX1RPZCiJf0U8DVLgsN6x4ooGO63KmEtn20ZLVZJOhxgCK0u9xKD3LMaoUVzOaD3tT5QzZglZeb6L7Yof1YPT1b%2BdBenOyB%2FLiLHUYQ3OU603TA5TeMmRQbpsamDmsTHMjCV2vm3JK8tQO9graeUWk6TChhpa%2FBjqkAcJXtieJe6LFWgVfwo%2FLfW9o57kVDTluFD4oAWE9t90zBmFsol6p7P53IKnU4guHnHCcHFI1TxDf5KZ1qqOKxTcrlfr1a4rF11%2BBWcw%2FJ1GQpFmnE1rl06x9fDELp24Nu%2B7WIpqvwWKPcKCprb40P7cAl%2F5yEAtW6FhfzJwOHVcxnsdmb2WtgEKqkxIlZP7Rr34HuuSabq3GyoUv%2FAO1tKe1jnBT&X-Amz-Signature=e0d891b3daeb7be61056868ba17fd296258205b6912c3e51ba9dfdb2467b0a4f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644AX2QEZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT556%2FPLa19WkPOlt0MyqawozO6DfekS15C8Zbce5kBwIhAMYYTCXISRlnhgfZkID36q9dgs8xM%2Bd5u3RPb216VooNKv8DCEoQABoMNjM3NDIzMTgzODA1IgwIVwMxxUOHhal64Mkq3AN5PDd%2FI2%2FlGzQ%2BtNAVj9Hm7%2B%2FgeMo3QpSufFyoiJ0HxTVDnWda4%2By2VWOdV38hwI3wRNphMdBYtlt4FvkPLAW8nPXwKRiG208Hlb0i0nnQpx9yr1CgMlGDQe3NKxaeK8RpT3dLhmpDVJj5wD4W%2B9W8aEhBXhyb7pppX9awe1guTPP5odR2OrDjQ164%2B7DtPPFzSgGOw%2BO0vW%2Fx9JfkgpHBIujaDzD0Lp16t4%2BKRDRY9joGhgqGuZYRFqWRo6g8MDJJTeHBGJxow0a8dLp7dwl1T%2FENFsZOMhiJHR%2FF6avU8MHPaFwzgd4dWbvpv2OgO1h8iEILyRCRTPvv7rJpTUPi6fhO32Gff3kZc%2FZERZ7pmAc7GJtpHfJWI8FMkmC0bTA2%2F0PddptjxukmzsrhhVMk7de65a9ud04tsvT%2F1%2BykgHJ5E3wpW7nKejzoMtHg4ekdD7nR9%2BwdU1E4cLsngzo9q0qZuIuQtEHDMRAs8sVsn3zl0g3MvoUy1bNkKdz5%2F5LTrcotYzeO7RW8kXyk9TpHkVx86eHWi55cbZV6aMu%2FfQpqHtV8VcwrwJp6ZwV%2F9knAIa%2Biuia59HwGMziOSTa0qKy3daH7yZySDoT9CCxwgcxEkjJAsZxKQMLo4DCMhpa%2FBjqkAbnk9R0CUpnWjx4l%2FQtkMqP3UHF8VLSu%2FMPRwgE%2B%2F8KAF7GHtlBbzSuLuW8ZIDGhKveDC41pIOnu7DZv5i8oZLdAsut8ob5D4iEMl2j7DdF7dKPghDSBdLlddIL2AhByIEWn10j4VFOswdBL7Mg%2B3KMxezo2pJYKYK0A6QoFKOdGV1lpI0XC7NXdPeHEMngH%2BEyV6moeNsiLfDFIB9PqU2fPQ73Z&X-Amz-Signature=f88372498108a45d8bec6c612726d7cb5187c39901d2fa02a5ab77581b9a2874&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
