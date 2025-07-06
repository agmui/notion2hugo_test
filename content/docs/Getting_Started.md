---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBJAQXX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDYX5llkhIYhqGcIrpFPm7lDP62sFrn7UEmG8j%2BTa%2FbIAIgePOWFwcFM9D40oxNr5hzxEhniPdM60XGJPMJj72Hmosq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBsABR0Pd0Iwe7dotCrcA3pAv7FKChL5CRDHDjJCwtFWDI6Xq3szfP94VU4aBinZngp%2BdXvRH0s4egiP0X3iJ8NKWJp7Wxv%2BNUnRByuhSAXf1MZCW3YRDWtRG6fRxHXFZ2pR%2Bvzg0nbv0HZfK81%2FEBx464mxBwIIehDxAkCitPamIxG2MTOlkDTBWOZAOns9rMMZXnrEvCRI7JBOeGGtkh%2BBnFwffP7i%2F5XAhH8207Ofzy7Hm3AxZn5CckT%2BnitsCVP06OXVoKSNY9OzUAaBYnQ9JRGPQetrRyPZPhu9iLzzQg5P8EKtEHWmvTCFeUfEqPJ6mnfKDj9VfFh9wYU1GLFUmPVBgj4M%2BnCPACfKTh%2Fh0WQ91vqo9T%2FgaMHm4Yzu4LadC0t5tFaHydoyOaSOrjoP0nO9jBgMVE%2B1Qqr4dERz1J%2B0hQKUcK89D8j9MvCXLRTDV7Qpc%2F9AR%2Bw9myLe6UeBU2%2BF34BRPpCSeWZBek8tkHkK%2FkqsAF%2FxuFxmXQadvJKAVVrTzuAI2cpnb1%2FiLcLXYfDBVdS9dkShYHXdz%2Bp46zqLaZw7YGdPt4k%2FCY%2FCHaUXoFOO%2BusHZ2gTvhGyWaFLTq9scaVfHe2cHQJDu6hUiracAkiL2MnaEzRvPTE1NzNNSyTP0DuJsb35MNyUp8MGOqUB3ApzPa34yOA6xL7KLr3lwlToogBt6BDWtdJkeJm4KYhbn8qfEVttu3wgC40hQPA2SrfrRW06OZZQfXixvzJVdDr1FYBnajc5zQZh5YC5tRB58f5lTXnZDYXDXTb9r9jw5e%2FYhNf7TZlhiEXRblyrZJZ66qEn1xuPc7WKHrY0nEExdjzNSe4pvcqtf43kb%2F3Jrxx2jpjfyzvZD2BSL7o41VX4Y8Of&X-Amz-Signature=94b2f7396d2ed50cdc0fcec9589c42e164b89dd2821252f923b5b9d2e6e9243c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBJAQXX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDYX5llkhIYhqGcIrpFPm7lDP62sFrn7UEmG8j%2BTa%2FbIAIgePOWFwcFM9D40oxNr5hzxEhniPdM60XGJPMJj72Hmosq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBsABR0Pd0Iwe7dotCrcA3pAv7FKChL5CRDHDjJCwtFWDI6Xq3szfP94VU4aBinZngp%2BdXvRH0s4egiP0X3iJ8NKWJp7Wxv%2BNUnRByuhSAXf1MZCW3YRDWtRG6fRxHXFZ2pR%2Bvzg0nbv0HZfK81%2FEBx464mxBwIIehDxAkCitPamIxG2MTOlkDTBWOZAOns9rMMZXnrEvCRI7JBOeGGtkh%2BBnFwffP7i%2F5XAhH8207Ofzy7Hm3AxZn5CckT%2BnitsCVP06OXVoKSNY9OzUAaBYnQ9JRGPQetrRyPZPhu9iLzzQg5P8EKtEHWmvTCFeUfEqPJ6mnfKDj9VfFh9wYU1GLFUmPVBgj4M%2BnCPACfKTh%2Fh0WQ91vqo9T%2FgaMHm4Yzu4LadC0t5tFaHydoyOaSOrjoP0nO9jBgMVE%2B1Qqr4dERz1J%2B0hQKUcK89D8j9MvCXLRTDV7Qpc%2F9AR%2Bw9myLe6UeBU2%2BF34BRPpCSeWZBek8tkHkK%2FkqsAF%2FxuFxmXQadvJKAVVrTzuAI2cpnb1%2FiLcLXYfDBVdS9dkShYHXdz%2Bp46zqLaZw7YGdPt4k%2FCY%2FCHaUXoFOO%2BusHZ2gTvhGyWaFLTq9scaVfHe2cHQJDu6hUiracAkiL2MnaEzRvPTE1NzNNSyTP0DuJsb35MNyUp8MGOqUB3ApzPa34yOA6xL7KLr3lwlToogBt6BDWtdJkeJm4KYhbn8qfEVttu3wgC40hQPA2SrfrRW06OZZQfXixvzJVdDr1FYBnajc5zQZh5YC5tRB58f5lTXnZDYXDXTb9r9jw5e%2FYhNf7TZlhiEXRblyrZJZ66qEn1xuPc7WKHrY0nEExdjzNSe4pvcqtf43kb%2F3Jrxx2jpjfyzvZD2BSL7o41VX4Y8Of&X-Amz-Signature=c40698e09f5c07f1507997436d74ea79637fd59b28a3c2a6016812f52aa90e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBJAQXX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDYX5llkhIYhqGcIrpFPm7lDP62sFrn7UEmG8j%2BTa%2FbIAIgePOWFwcFM9D40oxNr5hzxEhniPdM60XGJPMJj72Hmosq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBsABR0Pd0Iwe7dotCrcA3pAv7FKChL5CRDHDjJCwtFWDI6Xq3szfP94VU4aBinZngp%2BdXvRH0s4egiP0X3iJ8NKWJp7Wxv%2BNUnRByuhSAXf1MZCW3YRDWtRG6fRxHXFZ2pR%2Bvzg0nbv0HZfK81%2FEBx464mxBwIIehDxAkCitPamIxG2MTOlkDTBWOZAOns9rMMZXnrEvCRI7JBOeGGtkh%2BBnFwffP7i%2F5XAhH8207Ofzy7Hm3AxZn5CckT%2BnitsCVP06OXVoKSNY9OzUAaBYnQ9JRGPQetrRyPZPhu9iLzzQg5P8EKtEHWmvTCFeUfEqPJ6mnfKDj9VfFh9wYU1GLFUmPVBgj4M%2BnCPACfKTh%2Fh0WQ91vqo9T%2FgaMHm4Yzu4LadC0t5tFaHydoyOaSOrjoP0nO9jBgMVE%2B1Qqr4dERz1J%2B0hQKUcK89D8j9MvCXLRTDV7Qpc%2F9AR%2Bw9myLe6UeBU2%2BF34BRPpCSeWZBek8tkHkK%2FkqsAF%2FxuFxmXQadvJKAVVrTzuAI2cpnb1%2FiLcLXYfDBVdS9dkShYHXdz%2Bp46zqLaZw7YGdPt4k%2FCY%2FCHaUXoFOO%2BusHZ2gTvhGyWaFLTq9scaVfHe2cHQJDu6hUiracAkiL2MnaEzRvPTE1NzNNSyTP0DuJsb35MNyUp8MGOqUB3ApzPa34yOA6xL7KLr3lwlToogBt6BDWtdJkeJm4KYhbn8qfEVttu3wgC40hQPA2SrfrRW06OZZQfXixvzJVdDr1FYBnajc5zQZh5YC5tRB58f5lTXnZDYXDXTb9r9jw5e%2FYhNf7TZlhiEXRblyrZJZ66qEn1xuPc7WKHrY0nEExdjzNSe4pvcqtf43kb%2F3Jrxx2jpjfyzvZD2BSL7o41VX4Y8Of&X-Amz-Signature=c122dc9815df85da2a68b3e232f05d0a9283c33db919246d7316ed3b82dbf397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKIEQDK%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCK7vr1UJG%2FxV6Je4qq7AGZBjvO2vBB%2BriECiO670aG6gIgfd1KqUpudmSUYNrJNcd0BT%2FKaT6oP5pqtuGhvaDYbI0q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDARabGA7D2kuTczLQSrcA%2B0%2F%2BMKBWPwhMNPS%2BI32m1Kl5iaAgT002tztZNftc9HVyh3qloQETYJ0bya76eoeq3zj%2FqIFAYvU1RSWSiF%2Fn1cXYYGXm5BjMsZTMjxq1oAHsH7TScA1xwKrhttCKI8FwbEPIdQxrZNP%2Bf13U1HS6ujOZbK4bUvtdMkm%2BRKdqSiyLM5%2FNPyOB5sUgqJcjihUjJ7CmF6J%2B7JjD41Cp9ixdO3oVTHL2VEmnrLhXGanT%2FOH5R8sH2ByPBkPsv1RMzAbkWFAFDppiBx90WYvD6kAN%2Fufpo5Na%2FzCIK5twR%2FVwccOBHKsha40nBrZ3XQJbgbQTFij4yEQdRVqc5u75aA7T0o1szVAUBD0Jm188lIWVfyvYrWyBuTPjfX0do1MSKRUX4G2HRniQTgDUfztnp70%2F109qKeLouh07q%2FgYRl5GTkUJsb9xV233L%2Bk0c0snkivqirF1ZiVswz9Y25CwebOBeG%2FrvkpmWo%2FK%2FTXP6xCJHezvL88A01mmgEj4KiZsTBTp69vQM0vq2l7nEy91TWOUa4dK%2BWuwrjuZLSBeLbDH613V4nvs1hH4olZwtCHVZpIv5uhQYhLw6GfQATmqAFclHhUTJXsNXRC%2F8BJ%2BePwfoes8Gs5f2iyw8TQUxJMMKeQp8MGOqUBcNgxgOhS2s0UHAJY8VWJ4AwvvAMLQVsSCafNg%2Fh0IGsud0Xubg1SVdO3OSJikppTEpkD6f0IedhERHBJQtBJzXM9CDw3YCSy6DwPrdCihHyG08uGtKuVHR7XrTCDvlW39Q%2FJel92U7czj9pH1vwAyc2faMprzeZSGfwJoXHnNRNwi33pGOb4CTTL8xztLj5Envx%2FAyUPV%2FCWc4g63pvwyd0GT3ll&X-Amz-Signature=b30d39e95d2f641bd16a5f012d46e0f36f9acb570d150e751c16ef3a436676cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUFRQXWU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDkY4thL5qJpfE%2FYI7dsZzmSvHxDr5tTu4TcVdCuehhAAiAcSFCfTxqkQ4ckS5ZJWMEd2x0h4Epfl7V9q3dhCNV1Uyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMpyYQf8YWELcj8M03KtwDImlKK57Oj39k7ynY4sCXbQJa8mThpZFh7GBjL8FOiCFRffnVT%2FyFT5j%2FqVwOBFInabxiaPi9kbFY0xzHkTsjO7dRe%2BBjKkZEw0xlmC1U6ROQVsQfBzCCZET6hMk4hjppyAuw1tQL4F2Ueh3LlsuKNkpyn4mprpRLGvTkHhsnz0FuHVH7o6FrOJMCQbpiVnl%2Brz9RrlcsIkJJYEpSfdJYOVbGXzpP3%2F7hLAS%2FjnB%2BM55Em5MNUYGNcLG4Y5w5%2B3ghdHOcFUWo9x51jkkbE7i60j3NYa3YCR2RIWe5cemijk996122cfpKPvH9YBC9nW6BDoZHnqRCmeCCL%2FTh2v3ffmEQnIHsdo02IJb5Cf3eIq5XiPPJMNNxr9xLCvYTsTCK12Pq5OWg8lolYSUsszEN7Cwb%2F%2BqCpKqxM0806T0eH03mOXqTtl2EnbI4YAivKDBm8k9qfOcg%2F%2B1O5%2BKcQBorYZb7CnZNVhhPZOP2EMocWdSvoo4tIgrDAN1Uu940QW06A0bAbofhy8FQmYEDPfsxEnmJSl6xUDA3CN6XTWAVJS4BpKhq%2B4BW%2FWg03%2BG0UlDwqfCh1raoSU5sqFA4RfqvcidkqOGj2WP8GHHtMf6QirOj5jKvNfXt%2F6lyMakw7ZCnwwY6pgGFVUWYbF0ub8uDy3PxMWVCQOVmePlLUWVFZiq%2Fen6cviooIyFQwQ%2FD4YGV46IMsG%2Bg3i%2FQ%2F4%2FzEVMujwtSSEvIDE0la6vPijcaF1GCmOoQ%2FoEzccRpZ%2B2NMURltqgrTBCQv%2FReXux2q%2B0S8iacLtDGYNv5vtmQxBPg%2BdWVPde4HndX3G3O6%2BcvjfoMDc7rgFr1g3BpwXxBiIM1G28PU8B7FeKMxmYE&X-Amz-Signature=bd26c714ff01cbf6c1b2b5de0dada8b592e7314b00b0a2b08a3155cb33a8e224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBJAQXX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDYX5llkhIYhqGcIrpFPm7lDP62sFrn7UEmG8j%2BTa%2FbIAIgePOWFwcFM9D40oxNr5hzxEhniPdM60XGJPMJj72Hmosq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBsABR0Pd0Iwe7dotCrcA3pAv7FKChL5CRDHDjJCwtFWDI6Xq3szfP94VU4aBinZngp%2BdXvRH0s4egiP0X3iJ8NKWJp7Wxv%2BNUnRByuhSAXf1MZCW3YRDWtRG6fRxHXFZ2pR%2Bvzg0nbv0HZfK81%2FEBx464mxBwIIehDxAkCitPamIxG2MTOlkDTBWOZAOns9rMMZXnrEvCRI7JBOeGGtkh%2BBnFwffP7i%2F5XAhH8207Ofzy7Hm3AxZn5CckT%2BnitsCVP06OXVoKSNY9OzUAaBYnQ9JRGPQetrRyPZPhu9iLzzQg5P8EKtEHWmvTCFeUfEqPJ6mnfKDj9VfFh9wYU1GLFUmPVBgj4M%2BnCPACfKTh%2Fh0WQ91vqo9T%2FgaMHm4Yzu4LadC0t5tFaHydoyOaSOrjoP0nO9jBgMVE%2B1Qqr4dERz1J%2B0hQKUcK89D8j9MvCXLRTDV7Qpc%2F9AR%2Bw9myLe6UeBU2%2BF34BRPpCSeWZBek8tkHkK%2FkqsAF%2FxuFxmXQadvJKAVVrTzuAI2cpnb1%2FiLcLXYfDBVdS9dkShYHXdz%2Bp46zqLaZw7YGdPt4k%2FCY%2FCHaUXoFOO%2BusHZ2gTvhGyWaFLTq9scaVfHe2cHQJDu6hUiracAkiL2MnaEzRvPTE1NzNNSyTP0DuJsb35MNyUp8MGOqUB3ApzPa34yOA6xL7KLr3lwlToogBt6BDWtdJkeJm4KYhbn8qfEVttu3wgC40hQPA2SrfrRW06OZZQfXixvzJVdDr1FYBnajc5zQZh5YC5tRB58f5lTXnZDYXDXTb9r9jw5e%2FYhNf7TZlhiEXRblyrZJZ66qEn1xuPc7WKHrY0nEExdjzNSe4pvcqtf43kb%2F3Jrxx2jpjfyzvZD2BSL7o41VX4Y8Of&X-Amz-Signature=65d687af9db1c2847ced4ef9ea815204626d386ee8c8833f6eef294ef3e0f2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
