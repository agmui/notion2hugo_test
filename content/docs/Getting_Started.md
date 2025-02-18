---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZEVKPY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCFWb3DlVSksrroqv0vL8caaN01Ng8Vjz3zQlRg6lbojAIhAPxnOLZKJVvw6RpkMA%2Bd%2FFdYS5pFDAStU1tK8g5jP4T%2BKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG5xSV%2BjF6NYFypPMq3AOJhyLA0xdhIYOd%2BjBEPxMONLXvBAat0u4rhcVX1%2BKM0M9fpHR7GN0vJ7B1NODOMfWRg81t6fgOwxSD%2BATY6eTekBS%2BWuRBGIBLgVGp2zZJ76UI08GGNjcq56QTFEb8jouGKp3SElurI%2FUs%2BNJGY%2BAXQijo0eXL7nVG4u580%2Fno%2BYsNZSlgzxA5lw5O1%2B1aU75ow%2BywZ4JaliQbQJ3jzupsBv01%2F2%2FGmFwW7sRqcka4v5mJUozmtoP0mH8QAqzC9bn2EDFBxnQ8smnpU500DejR9SwqOifYLMM30DWFnNZG5kO0CxeSOtf79h0tIrgmCrM211A6Tp3J6gIkhJ%2F%2FoxFNoXP48gf6ab31xUxXtpn5jONlGV93wFIxi6%2BHZZ5WEJigXkXbSyJyANxRtEz3jfpHDrj%2FM7e976KZ%2FyCs5lz%2BgaFzjQA%2BKdQfcVo4uOBgOWerhsqm5pQ8TXRTqM2Gw9zaew2NusEsf9yRcy1TZdwMNwwqV5PJE0exnt7%2FfYzzHpxlMWGQntRtAO3EPIVCGi1tBcgD678HFiqNcdZLD2MK%2FpxmM3SRydGIJd9LCgmborCDwDUMEr0crRhBL4gdLj9khe%2Fs9rsolHOwFAy1Gdw5qqClaOZNixyhy9I7tDDF9tO9BjqkAaQUd1Sh4arvZBDL3fwLZh28%2Fjbfon6VsbTf%2FHaPsq%2Fzu%2B1jNd2%2BeCfkdcY4guj%2F2dDYu6h2cyaHF3bsf0arIYu4VVeDoG0ouwzIudBntEUU1k%2BFtQT3Tx1QZZSESNxMQZmn8tgWmDHwEvugcz8fXjH7QqQt1UtcVOhCr2B8KDgzUd0ikNmsLBTAR5LIL2T46x329N%2FsDheWY126Z04Cqp3CQhyV&X-Amz-Signature=3fa54916fffdf55694f2f6e31aa4054be2cb311c69516843e5a8e7b89b5c8486&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZEVKPY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCFWb3DlVSksrroqv0vL8caaN01Ng8Vjz3zQlRg6lbojAIhAPxnOLZKJVvw6RpkMA%2Bd%2FFdYS5pFDAStU1tK8g5jP4T%2BKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG5xSV%2BjF6NYFypPMq3AOJhyLA0xdhIYOd%2BjBEPxMONLXvBAat0u4rhcVX1%2BKM0M9fpHR7GN0vJ7B1NODOMfWRg81t6fgOwxSD%2BATY6eTekBS%2BWuRBGIBLgVGp2zZJ76UI08GGNjcq56QTFEb8jouGKp3SElurI%2FUs%2BNJGY%2BAXQijo0eXL7nVG4u580%2Fno%2BYsNZSlgzxA5lw5O1%2B1aU75ow%2BywZ4JaliQbQJ3jzupsBv01%2F2%2FGmFwW7sRqcka4v5mJUozmtoP0mH8QAqzC9bn2EDFBxnQ8smnpU500DejR9SwqOifYLMM30DWFnNZG5kO0CxeSOtf79h0tIrgmCrM211A6Tp3J6gIkhJ%2F%2FoxFNoXP48gf6ab31xUxXtpn5jONlGV93wFIxi6%2BHZZ5WEJigXkXbSyJyANxRtEz3jfpHDrj%2FM7e976KZ%2FyCs5lz%2BgaFzjQA%2BKdQfcVo4uOBgOWerhsqm5pQ8TXRTqM2Gw9zaew2NusEsf9yRcy1TZdwMNwwqV5PJE0exnt7%2FfYzzHpxlMWGQntRtAO3EPIVCGi1tBcgD678HFiqNcdZLD2MK%2FpxmM3SRydGIJd9LCgmborCDwDUMEr0crRhBL4gdLj9khe%2Fs9rsolHOwFAy1Gdw5qqClaOZNixyhy9I7tDDF9tO9BjqkAaQUd1Sh4arvZBDL3fwLZh28%2Fjbfon6VsbTf%2FHaPsq%2Fzu%2B1jNd2%2BeCfkdcY4guj%2F2dDYu6h2cyaHF3bsf0arIYu4VVeDoG0ouwzIudBntEUU1k%2BFtQT3Tx1QZZSESNxMQZmn8tgWmDHwEvugcz8fXjH7QqQt1UtcVOhCr2B8KDgzUd0ikNmsLBTAR5LIL2T46x329N%2FsDheWY126Z04Cqp3CQhyV&X-Amz-Signature=047c557680551741c1a0b2fe724ea91fed5612adb7186e9e04b194d8e517db62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NASW6QH%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIGJqHEbsljReP3ODYPPZDTYtOhAshU6aAUJvYwWsi%2BGkAiBNrPYKJENoMoO4j7z3AVK61m9E82Ll%2Fm0tPRH3JV1f0iqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbX5JCorH%2FuwSMWFjKtwDY%2BImeykH8ZIVjYD1OdH6bRxxnXdMrfdHuGW9aIdDyls88Aatv0QDacHQc22g359yoagfHqGthcLwge%2BpbODvoU8t8YnoV08W0toJLe1xQ1v1sF227VwBtSSGDJM5W6saSxfDTZdonPePKWUPgjYkALrxucbR502YUipJiK6cfLd7x%2F%2BmsRmSWUNuemExbbra0tQJdr88xMThEdz%2FboP2MyQzhKKF%2FSKXC7HLFCTIS7hOs0uH2ssZwmb%2F9Aq7i9bXUZ4EN8h95HoQzmaIDyLvu2Tc1YKpavzPCbqCcivg1Ra%2FxvaTPFddOGXiXHBzS9Lrhv3Is9ZWMgacqrrg89AO3%2FzmjUaKa3pODrft3lzHihgzVAEw4tek22Zd%2FlPeg%2FpgA1wpAxsZmWMFPpVmJ3pW1TU4djjRPSoFIxqEYFkumAuMKOo0VeRTBExNUsdi%2BoOUfMCAKhZJP01tsubSYlxY9D5vNc3GseCv%2B0oH1hKEl8N7luM5dXG7nHkCc3bKQkQ1751G9fmp4lPSTXbpw6dxDJX%2FiS67RWSBKfl4IPRrnOHec2hdwlWSyZt4R6cIt7wE%2Bn9c1N2q%2BMlMgB8yggBqXOzy%2FPMrGmBGeLcFHj8S5Ey9%2F8uuVu0KEpMuYXIw%2FvbTvQY6pgFGgahaquY3JpZoOiN%2Ff7tXo3sprXy71NIJAiBd5MMHTmxiZLtPGTJNrwQVSjx1ElW5E0vuS13lLxTI%2FlmR%2BufXutpB1zHH3A90LZVnywIAthNfyiXptNfoFLy2L1DnN2Jh0SrjOWzVJlIcsS2CyneGyIv4A%2BlAewEQQLwfwFEr2Eu6gnNSk8IkIdm0Nps8gOIwwJCOQoGzHEuoSkd7RRLEvLLKPkoV&X-Amz-Signature=1db0fcd6513d069d8c257d7def26ddf283e9cc28aa65183bac2d07cd5c45dc3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOPV7PWG%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDw61UYVuYNa1ti2vjE2HPBqB79jwraANp57th0YOS0CAiBgF2q%2BJ72Tr9xR3bvY99Zd48jH%2Blrg%2FoYKTU5SIP7trCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIS4p9TehY8SR83ZcKtwDGG%2BFQCndgu3SBnToS4qAPM%2FVWj72%2FCRYSamQfnB6W%2F26dVRMpLuw2dmmydSJvPae5CXBNaHskgZo3wIizu8JG3w2hUfFE3OS38%2Bb5yqiTGCl0Rc9LJOb8QDigiDNw%2F3LixXLpg73U%2BE79MmiMY56a%2FXb6z8BLgy7uZ0iodL2G6gxBR6G1badQ1ZfX%2BAI3etbT%2BcbGDkEGqSxOHKXgFk7Bftj9u%2Bzmez81kP%2B4ZJOpOk3LCnd659SSP2vwT3H8xnqbLDYQGy7IXD%2BoEisAo4jSNWFRAWLiNXG5rLKabypa9GLQjBGWSs%2BR8WAllgplK%2F6s%2Bj3bRk%2BUwWMsKBM3MstH4pfRaunbzIHuZ6IVCXupR8gSGtuDevT%2FTPVeOJuH6jAOPeLcOqnBjubRasoob%2FqkxQQH3i3NoMvPWr7FtWrdp1aX%2BgnirBZDtizjvIVtZC2yzVss3IXtcIZ9ZdLuvujV6yPzl7%2B2rVjzDE8jgI6BwkF7cXaCHvJVg889ddoQvDop%2B%2F5m5AaH7fl7CftjYyl9H5YH32fwVfT2zsOOKw1zCig6vDg%2BDGgUlUz3VNymtKk3ycMOFMudAh2KqO8SVOJvkJ%2FuxSnIOWVx7QktwnjRX9LcmgOKrHh82YTaP8w%2B%2FbTvQY6pgF3ES8j8JkpKDB11Ecuf3rlkT5J5cL3oHil4cvS0A%2FSRexezoY1Lnq9T3Vf5dfBpZpqZPhz%2B6FWUCPNh4fJMtYWJmAYTK15Jl3rdmmYk6nUlQTluwKz%2F2bHmSSW2BUG7T%2BeuxPa%2BeoQaXx9jKpR46AYkI%2BZhQMrz859icLql9pRUzao5pWGDuo9%2B4KENW6NWAuiYfwwXnFssxNZX0lb3mi6JzCCmGuH&X-Amz-Signature=d7db69e99b27688b76bbb1cb0fccdafa7b9171d89f776a1db7fcb28a9a36c37c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZEVKPY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCFWb3DlVSksrroqv0vL8caaN01Ng8Vjz3zQlRg6lbojAIhAPxnOLZKJVvw6RpkMA%2Bd%2FFdYS5pFDAStU1tK8g5jP4T%2BKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG5xSV%2BjF6NYFypPMq3AOJhyLA0xdhIYOd%2BjBEPxMONLXvBAat0u4rhcVX1%2BKM0M9fpHR7GN0vJ7B1NODOMfWRg81t6fgOwxSD%2BATY6eTekBS%2BWuRBGIBLgVGp2zZJ76UI08GGNjcq56QTFEb8jouGKp3SElurI%2FUs%2BNJGY%2BAXQijo0eXL7nVG4u580%2Fno%2BYsNZSlgzxA5lw5O1%2B1aU75ow%2BywZ4JaliQbQJ3jzupsBv01%2F2%2FGmFwW7sRqcka4v5mJUozmtoP0mH8QAqzC9bn2EDFBxnQ8smnpU500DejR9SwqOifYLMM30DWFnNZG5kO0CxeSOtf79h0tIrgmCrM211A6Tp3J6gIkhJ%2F%2FoxFNoXP48gf6ab31xUxXtpn5jONlGV93wFIxi6%2BHZZ5WEJigXkXbSyJyANxRtEz3jfpHDrj%2FM7e976KZ%2FyCs5lz%2BgaFzjQA%2BKdQfcVo4uOBgOWerhsqm5pQ8TXRTqM2Gw9zaew2NusEsf9yRcy1TZdwMNwwqV5PJE0exnt7%2FfYzzHpxlMWGQntRtAO3EPIVCGi1tBcgD678HFiqNcdZLD2MK%2FpxmM3SRydGIJd9LCgmborCDwDUMEr0crRhBL4gdLj9khe%2Fs9rsolHOwFAy1Gdw5qqClaOZNixyhy9I7tDDF9tO9BjqkAaQUd1Sh4arvZBDL3fwLZh28%2Fjbfon6VsbTf%2FHaPsq%2Fzu%2B1jNd2%2BeCfkdcY4guj%2F2dDYu6h2cyaHF3bsf0arIYu4VVeDoG0ouwzIudBntEUU1k%2BFtQT3Tx1QZZSESNxMQZmn8tgWmDHwEvugcz8fXjH7QqQt1UtcVOhCr2B8KDgzUd0ikNmsLBTAR5LIL2T46x329N%2FsDheWY126Z04Cqp3CQhyV&X-Amz-Signature=bdf1bd869d50241b70bc073f2a02aa4d01d0d4b5b23f3552ccf873ec211b4ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
