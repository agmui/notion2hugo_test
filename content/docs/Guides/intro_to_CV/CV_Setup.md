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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG6BPBCG%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCUoJILhmNEaHDRLcl7ngjC68eoH2Tn3JPC%2B3FX%2Bnh9fQIgAPOP2T1xMVAcXI2QS7H0e5LXbQ2FPmwOxoEd0%2FP7N60q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDBgY0dtRbqf57XxEeircA6GVl5MEOcl%2FFCb5MqCdoYxjrr9yke3Q3eI34N9gquLAPI2e96FvcuKIUof5jprkKp%2FEP%2Fz32IMcVE8IzqSWeO9aCinxmBCd2C%2F4YZxuuU8CHOgJHj7wyhB%2Fke0BGwyBzpfWBD5yf6f4Jx%2BBUcJl5J7%2Fcqy8KtUVmvQcxYVM2%2Fx9YXQDMFYig9MAUw326sqU2n4rAvMtCgVf3G2aKqg%2F2lP8GY0BnGCTKHdT%2BLSvcDSs8mBbRa9ue4jZBSvya%2B3vcY7BR41YvlsY13yFUPV6g5MTPCz9lAjj%2FOyGFuT9IqVW%2BhUkMfpKqCwbjpj26nJB4Erb0%2FBexg0ldjPwKHt0s4tD3cpFT1x5rj3ietKz%2BN8Q8%2F8piiMXtaXdw45xXgVnMGIWjq5PuKaTXL5K5Yn1YVjDo1I2XElFsDPs7evETG1Ruk44pSmsvGerMqD2yXKJd9VrCwl4be7%2FgPzWyRSs70Nutx1Ou4drn67VwD0mJMYWtg0YXntkVq%2B0M0K6WcIzybJaG53Bg8lKUT2EEWUap39nKdgQu%2BHGHC5kpWTIG7K9wRnCd5MYGw%2BhmKkKN0a%2Fp%2F8gsFx%2FFKb4lBYumLV9AU4UlzS517YllfwRpCH7e2l%2BR6QCUID838k1QWR%2BMKSdk70GOqUBC5Qud122mPJgDfZNoswi9vZPJ39Yg%2B1pgK7WK8kWdnqBhTeVDW6m7EZK7LI04MNWoGxM8BvVxA%2BB%2FZNoNAARVPVRaw4vxYxygRvI1Wcut4AK3yVkexxJQK812fg0d7978HALaVJrlVvOwwbPC9o8J7p9xqcpV4P1rQv2iisyMkFXP8TRUdc0c1I1z95KN8qRH%2F5gQAK%2Fo5RORnW6umZDsVxhwV2S&X-Amz-Signature=8aa51894b28ccce3023010c9d932e69d316f64ed9fc9b2272d8a49416b09a706&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637TTKRFN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIAkVGaJbfNE1MXgOMykIoLhmOx7l8JMX%2B8CJQ8zhp%2BlaAiEAogQSLyLG39LoTik5weUc%2BnPm%2FpJ5tlGzn58Hlnr1c7Yq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNoPwZ7d3ZJbEawnuCrcA67YxiP%2F7b5c%2F7QCKeYve3X7D9RDXZ0PCwCyt4%2Bpx7g2kTCndYGBGG0zt%2F7ElVeKhiR0HvjNPh0MzQWkSlBCWUFOJY5h5k31tWD%2FGVBcs3mTrq29RLZ2K7L8UbXkCOLo5n0xzhG7RLjT1RAi3%2F20SN%2BroXpZrm3f0XZEErgVnZosJQalVG15fk144i14a0u%2BcnO%2BcL2PqLqnhwouRqK3Pp2dvf3pHW0aV9lkDMGHTZYN%2Fu3EEgH%2BxKjOidygOHyIU%2Ffw3puQj8sx0rMMUx2%2BfcrvondalDnHK39MZnDLdvw9fqDlbiLoBjK9EI02r2N5rHpjSlgjEzIDWTgUi4ag9UEutakHlonB%2BXwSr2jicokibOcu7SKqiMtd3SnuiDmx7ZuUYNzwJ%2FX8H0ZLyIHzNEHXd9YX0nVz%2B0eQUoFjsi3VL7sojjSKnm7Vb2afG1CBISWvb1TXSg4Ze5U%2FQneD85onOUQX%2BpmUZYcKESiHGIERpQlPr1EzGrUSkf8rGA5FhU6Xq9SiyP513jLfttN9Efri8NBpg8aP6QX92m%2BOttlkNU4OaVDvEuqMprmPNFfjVWIQSH8GmrtIQyWvAQ8nAzWH4L4okr6UhW6Zp0nM4uO8IPPu60RAExc1yJmbMIOek70GOqUBEW0cJEG8kNGbN0YzEC9YEJ6OC4NCFgarODz%2FNVIWb7S%2BPFTpW6fauRlSVdm4KJu4g%2FwhJfvPQIy6%2FfOOzwsM8w2YtLheNUChBi%2FbHJgHXy6NTCrtJlCtgGanP1r3gnXx9lcbtRnF1n8sKL0y8BrwOzVXE3gQlGGPAqrpSDqDNrQivFTAN12H0aUgwbcxXaKOEBfCATVJSzpTEPhirekYkdamF9ZD&X-Amz-Signature=3efe9cf1058737294de428c7a17e3fffc093aa8af9799e0c454f632c4ee0d267&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
