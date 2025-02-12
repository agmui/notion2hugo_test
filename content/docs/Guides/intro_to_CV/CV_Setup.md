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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664475IRRY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfRF8zOZsgAadQ2QwLEibV5FIJIoVlqNZecczYKXaR0AiApk8VPs3mDftdbfc7%2BzyxTexLE5MuPcmLsw7UZ6PS9sCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3DPL%2BbmBxljxfUHWKtwD0cPwx0jtWdiCRurJjx0j5lmFb7ulEAEmy14yu5PeofZlewk7NITFyCochgPCRLwqXRL%2BrLPeUSRWnqbzjN3ZrbH8979c17E1uwondr5DTYGts8we8j1KyJQmg8Enfmk4a8CEbcKgiFMxqw0stPSa2gZsB3%2FrcrmoH3GFrC0%2FsRfM%2Bq9%2FIb1yw73GkkikUC6J09%2FwnTGPcDOhI8V7m9PbW8Kds4pNRrWOKYcFeQBfLnnVgXVd08Lp1OjiqXnVtwSBtiMaFNFsh92t0G7o90Z0ws9Eaaav6%2B3AP8Pqag4ffN1oMaSa7KlT2e3pDnwDDjjFOcMR6YgBAcQFPMCyOxEIuhTvXNgU7FlNQcfFaFvC%2FlKq6IBqZJmPXHYoPLuPZEsirEiaU5D8EiVP%2FIdaq4H3N2dafJn7uOqTqs%2BStrSC6F7G5cB7xcFBv1H3JeNPefxIXBM8xW1KvIo33b9BzCCmCsqAghbKDDPWNwc5UmqPUVO9t9IuwvwQ4jjsXnJBK3PIkxo%2FJuX4T9uX2cFLslQ%2FX2yXu%2FaNAEjAuBo8sUpzwWda%2F5iOxfyXY9dFd6cpnhO%2F68HxjfpHKkI0QQISznLWSqxUnzUgfMT8PNjjg3qoB%2BcasieT0cFfsuZJRrUw24uxvQY6pgG00gEatJr6wcNcuKjKlbMp1VCY1MnoFlNeQKMumNdKQdUZx0tBE2bK0e6AcusQoJ86OrmOnp%2FG40V9UpRzgAd14kPR8RaMmLPFOMT7fPvCN6775Rrj%2FA%2BhVGwPftX22GyVOSSJKnxO3YzvFDJiA7nITmIVRZWGyCCU2dkWyooAe2UCWMk35mtAA2Ed351a9S5NazxrCvUY4oaDBXXsG8CUWBLS9vUc&X-Amz-Signature=60a779acedbf1f9d434524a5cf7ea5b4cd22b6d23c9231f3dfc0d2aa7641d2e3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDMI5IKH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBARmdUwhKEMZE0PAGPzhnFna2qmqty6vMdKeBaxOkcAiEAgGWjM5MnpZfcmA5lImS5axU50bi3%2FHywHdlrfChGZS0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPP%2F%2FSG%2FVop84D2U6yrcA3O2hG1nHAkfaKX%2FMB3E15XG9jLiyVFva%2FH4MYuD141tdBAjyOjUJEiWPFuefrQ4L%2BY2a6b5Rx8kpgrKzLrzAu3J6jBptSDR6ldZVp8bZZFey41IJUmkGxU8DA6WerHzvGmi7vJ9jYTLHe2cfH%2Fz5CFT5qJj0SzIjTruaUUzvuHfcrcIOXH2q5Yqz1PZsfL%2BCV0eP2QPfaFN52%2FkJJJhKMsTnUjmcWo5c2BrsRlXGlQZWkV7tbKzIT%2FfONwVd343euujnJbhuPRjkIpTHans1lsfoiyyqeK7cml568ytdBiuynuWsusFD%2FKeZQ1D98A5DsLn6JkVJGqcdRnTTfgyQzeGBVsLr0T%2BeAgnWxj5w5kdYrlMaru%2FAp3zZgpcLREtTcqG%2B4C3najzTpTOG5kQQr%2FX8YOSVyvW1G6a7lhzZPMg5ufJuP1Lb1Ro79%2F7J7jq%2F%2FETIyhxcmJ1Am31Cz4wZMxkiiX47A3rKsCJrW1RtYRYBcP62lade75sTMydV4CfUdUZHaxmXHrogjeGQZAynxRsFjlbMaeEeLzPxpyQV1INKlf9wq%2FhU0pA%2Bd%2F9XOipgjtJmyxxv%2BC%2B2a4nC2ElIU3f4SX3Tav%2FhlcTKquZh6YHO%2F%2F1GEIpknnpVP%2FxMMKFsb0GOqUBwUE3z4Exd5avd5IHQa35VyU0omlpMoZcxd8KAI7TxBXNdXUHJ8%2B3M2yYNHNHIfoU9f%2FxYsFFooc6OwQpovriqlH0OaOrcUOVZPQjv3Go%2BTf8BNmDEVAAFJ9pSlRumT5AdSk88DF%2FYQgyJGq68vN5BlunIlmdJR4zbsSsnnNfHsXcArsZ5GTqRb2C7q6QoiZGuIumhZq7RnzdGgqw1MJZxvJCuwh0&X-Amz-Signature=c94909098379ffa063d85f8dbf690fdb7a2ba392dfcd119472a05baa912e84a1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
