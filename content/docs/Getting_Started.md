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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJNFGDZK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDh%2FH4JQunC%2FwpU1aVP%2BQQbjlMFjrc1f9HDJU3iWxKzsgIhALKFxExwX3j7UkXVN9FzhXKpWZJprbwB0zzxtrrnCBXLKv8DCB4QABoMNjM3NDIzMTgzODA1IgygUd5Z9ynkVZMZuH4q3ANvKsJ0bgq5SErL7b%2BRK4ymK0ike%2BqOlGnMbsAoym4O9JxRag9yp3Jef%2FeamWxvp3Gw3piunhBWCfRozzr78BrDgCjSX5TEr7UTg0an7uyKKh5czRee3KlImiiYV12HukxRd%2B%2F93D7m7nHjqkZO%2F3qh31IwwbxhD6KurYgslPvngIwu5GjYd8YaPN6D0ZdXVCjaZQzYQxTEfKQLFoGqBwyt1sAMEG%2BOYwhNlut6ZcWM9O1WntXujDR3SOl0I8ciLOTUPly3kM0xkM8DkoQC1lMkoaN3Xe5MtiSpMdBGcnoKlsfEPZgrnjlN%2FOXn9umt%2FeceibDmd%2FTFJOPVgB1jWXXl4I%2BjjaQJHYtHTgKauv2WTT4Cpbt81sCXUyM6QxmletZGn1DY7oBMkjEDJ9PLh7F83eXOmZnB7OUO76HLO%2FLRB4VGB1ZSML7zFN5WCxy5Oa61S1Pl9yIkj5ZuOnGi%2FUOXTEzsIuPfaCYWeacLRUmY4PLl9jR8ZoyicZBZa6Wvtc%2FhAizKcwCkqtLF8VxlmYD2IbtZJCZIcrf29PMjVSam5YHEv1deuk%2FVWZuXf0asXcPpFNG%2FrjT8%2F7xodwA2mQe%2BkMgJHN700Ccucl86L2an6g4E9x2Ls8L%2FpjpMZTC4rN%2FABjqkAeXrL5V1e%2B4LaGY0Gd%2BJJi1CMX3eCSnhHxOt9YZaCGVM9koYg8VzkasXZViap%2FQnN%2FbEDH8DQQ%2FAQN606FLypc3UqX9ZLt82AF9vuYOT%2BYBeeCO1zH5pPqpyalIgXad7V0frQP83Q%2B4E%2BC6TR9K3qt4pUXD2CnRRKScjOMQ2htouSnvlRbNTyqeOgsFAxPhpYVrsFpGBk2adRiWx3n0t2HpQqkSV&X-Amz-Signature=f3ae7489ea205e7051c1adcbaa47456f76d9253068dfab4e63da5513d3a98ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJNFGDZK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDh%2FH4JQunC%2FwpU1aVP%2BQQbjlMFjrc1f9HDJU3iWxKzsgIhALKFxExwX3j7UkXVN9FzhXKpWZJprbwB0zzxtrrnCBXLKv8DCB4QABoMNjM3NDIzMTgzODA1IgygUd5Z9ynkVZMZuH4q3ANvKsJ0bgq5SErL7b%2BRK4ymK0ike%2BqOlGnMbsAoym4O9JxRag9yp3Jef%2FeamWxvp3Gw3piunhBWCfRozzr78BrDgCjSX5TEr7UTg0an7uyKKh5czRee3KlImiiYV12HukxRd%2B%2F93D7m7nHjqkZO%2F3qh31IwwbxhD6KurYgslPvngIwu5GjYd8YaPN6D0ZdXVCjaZQzYQxTEfKQLFoGqBwyt1sAMEG%2BOYwhNlut6ZcWM9O1WntXujDR3SOl0I8ciLOTUPly3kM0xkM8DkoQC1lMkoaN3Xe5MtiSpMdBGcnoKlsfEPZgrnjlN%2FOXn9umt%2FeceibDmd%2FTFJOPVgB1jWXXl4I%2BjjaQJHYtHTgKauv2WTT4Cpbt81sCXUyM6QxmletZGn1DY7oBMkjEDJ9PLh7F83eXOmZnB7OUO76HLO%2FLRB4VGB1ZSML7zFN5WCxy5Oa61S1Pl9yIkj5ZuOnGi%2FUOXTEzsIuPfaCYWeacLRUmY4PLl9jR8ZoyicZBZa6Wvtc%2FhAizKcwCkqtLF8VxlmYD2IbtZJCZIcrf29PMjVSam5YHEv1deuk%2FVWZuXf0asXcPpFNG%2FrjT8%2F7xodwA2mQe%2BkMgJHN700Ccucl86L2an6g4E9x2Ls8L%2FpjpMZTC4rN%2FABjqkAeXrL5V1e%2B4LaGY0Gd%2BJJi1CMX3eCSnhHxOt9YZaCGVM9koYg8VzkasXZViap%2FQnN%2FbEDH8DQQ%2FAQN606FLypc3UqX9ZLt82AF9vuYOT%2BYBeeCO1zH5pPqpyalIgXad7V0frQP83Q%2B4E%2BC6TR9K3qt4pUXD2CnRRKScjOMQ2htouSnvlRbNTyqeOgsFAxPhpYVrsFpGBk2adRiWx3n0t2HpQqkSV&X-Amz-Signature=d51354ccc1b6ae03a745bb97d2ff0b4a137f2ddb8332261141ea11c1ef5d6ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJNFGDZK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDh%2FH4JQunC%2FwpU1aVP%2BQQbjlMFjrc1f9HDJU3iWxKzsgIhALKFxExwX3j7UkXVN9FzhXKpWZJprbwB0zzxtrrnCBXLKv8DCB4QABoMNjM3NDIzMTgzODA1IgygUd5Z9ynkVZMZuH4q3ANvKsJ0bgq5SErL7b%2BRK4ymK0ike%2BqOlGnMbsAoym4O9JxRag9yp3Jef%2FeamWxvp3Gw3piunhBWCfRozzr78BrDgCjSX5TEr7UTg0an7uyKKh5czRee3KlImiiYV12HukxRd%2B%2F93D7m7nHjqkZO%2F3qh31IwwbxhD6KurYgslPvngIwu5GjYd8YaPN6D0ZdXVCjaZQzYQxTEfKQLFoGqBwyt1sAMEG%2BOYwhNlut6ZcWM9O1WntXujDR3SOl0I8ciLOTUPly3kM0xkM8DkoQC1lMkoaN3Xe5MtiSpMdBGcnoKlsfEPZgrnjlN%2FOXn9umt%2FeceibDmd%2FTFJOPVgB1jWXXl4I%2BjjaQJHYtHTgKauv2WTT4Cpbt81sCXUyM6QxmletZGn1DY7oBMkjEDJ9PLh7F83eXOmZnB7OUO76HLO%2FLRB4VGB1ZSML7zFN5WCxy5Oa61S1Pl9yIkj5ZuOnGi%2FUOXTEzsIuPfaCYWeacLRUmY4PLl9jR8ZoyicZBZa6Wvtc%2FhAizKcwCkqtLF8VxlmYD2IbtZJCZIcrf29PMjVSam5YHEv1deuk%2FVWZuXf0asXcPpFNG%2FrjT8%2F7xodwA2mQe%2BkMgJHN700Ccucl86L2an6g4E9x2Ls8L%2FpjpMZTC4rN%2FABjqkAeXrL5V1e%2B4LaGY0Gd%2BJJi1CMX3eCSnhHxOt9YZaCGVM9koYg8VzkasXZViap%2FQnN%2FbEDH8DQQ%2FAQN606FLypc3UqX9ZLt82AF9vuYOT%2BYBeeCO1zH5pPqpyalIgXad7V0frQP83Q%2B4E%2BC6TR9K3qt4pUXD2CnRRKScjOMQ2htouSnvlRbNTyqeOgsFAxPhpYVrsFpGBk2adRiWx3n0t2HpQqkSV&X-Amz-Signature=3b2cc54f6d9c7907777247e055bc189b301afc3a43704b97133a373391c9f96c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4WFZQK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIGHtTSgLk5kid%2BtyO0Vv6KwYy4lYgUL%2Bh2a%2FtoIjNWEuAiBp6roOAWKMO9rf9AY7e2gFknzgfVvLLY7er69t%2Fl1ybSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMUyG7sdN5s9WIBMu4KtwDdwYI0cC%2BKZLy2fegy5xrfli5FBWYYKP9YeO6%2FihuqGuFFhrADkEbdn4U0c5TEYXLeiLOvHhKOpQXCkvEChad72aUchd%2Bc8Xss3GKcvy3tngPQLA4kVOhsDNeKmInXn%2FKr1%2FCRjC2K7i%2BBKV1o%2B28adm%2BJAIBjlk2lSx2MITmfZQU3%2BWWZNyOMOQxB%2Bb2BcG37u4mzRONvO0DnMoYvt6iRjjPx2rIZpdj8PZgOC%2Fff6QtlsNn3HasmgRwq7x%2BZ3oYtci6AgpWbODE%2BcLgu%2B3dphYsSYdu7BUdX8M3DYIANAQnwgZgnCqn%2FAdxFRpRQaR6fkny6dTPHOI6CWoqltRRxB92CUk%2Fz%2FQL0EMX1O4wA1b4Rn9jzuJc4IHUmPMndAq3vgQ5Q7KSpkHhRsUsVJwlyEcq2MuXVic%2BMES%2F%2FFgDtN1xKKlSaLbY7r%2B8L6RH%2BQhBMRGPWcJf5RjrnnrhM30gT9Ygea0U8Cp3BxjFokA0d8S0GPFhKp0CU5rcvgS0fooIfmi2lTJXUS%2FgEc6oU2NO%2BOnpIKFoyq0M%2FBZ9HrBwiwZfxAKVjNTG3WPBU38aRN7aD46uIVQ4ch0WcM9tdVBvIR5bMNNW%2Bm0fU5JCuX4%2BsMr2F5seox3iDRgncF8w2azfwAY6pgEIIYSWKyTbEuHzH5zTf%2Fxh41NsB2pj0RjHGzcspKN3Lmb4rCyZt6wORGqMsYKiK33K%2BBz4hRjGBtFYkEJ9VJU2XuPGGOdGlBLLGQ7piudqUvxcuYlV%2Fa60abvvdkT3BYRIYA%2B1ETF1HaqpSPhG79932BARa%2BTCWnnlMi%2BrYMK3LI39zicDqg4vjVO57TFDWz61KHmawg8K4ceV%2B995MnkJm1OKnhv%2B&X-Amz-Signature=764841e548b86caa7400a8948b96e9854c60d1c9394c4df92bf5152a1bed3c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUHJADPD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDc5PdiL5dkAczVtvtoHkYXecdUqAKSr3vQvz5%2BIu%2FHnwIgMA4eTmj5Vvu2PDJggkCi5PrKvC0nthe3WPEinvyN3s0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNWZc7uC%2Bawo5aUvMSrcA%2FSWFSQ%2FsfAgZE3BjoUnBlivDxDp8bsSTHdpVEQvHLhbVBNAigdgIoEBa2BPMKJ%2FfhLJRH5tWEgd%2FJYLeltCnvyz9u2IXv%2Bw%2FOvi9cRgZr1FW0hC%2FOq7eVb74cLw%2FrBQCDTZGrr%2F9J%2FKT%2BBrY%2FdDO%2B3BUZAADcXvMnO8B843sopvB62GJQptzvCJXWVuLsam8Zf3o9CYIbFPP7CLlBNykjaTtKh5qlUt5Mgnv0JjurVvPgDzUqYbGbcD5w%2FP3GbcwZNAsDxgKmeyCZMsyVoMTfK4%2F8gFIoEAayuXcec%2BSqG6ZUNy7%2BkxsFdYyCFRjd%2B5VnoCIC%2FLV7YPGEE4eTZrgOLrXvpk2dCRqc4AqLsw6SbL6JSi%2FHtzWYaKCKyruFRwj8VC6Pn3DriMv5Pzp3NkGbpU6aYnVOkCtRlZroTswy3VBKnCUk64M9f9eS5pDWBpCZ0NICPltmgucWU9HHdkg38W1DtGQ%2F6y3fuEvEqnmd9FSJuCp1diY%2BdfEmIHaV%2FGxKXowhH1TllJeTfrtMyhDw9T8TqQciatPKWvG1GNpYwue4kbkJVHnnCcyDzV2sSYk8jSIlHxbcXtUhl3xeYwdD0ckO6eKMxK3ORMir7kc7jz%2BUD3t7g9eiJprpduMPGs38AGOqUBREr3ALYYq3RU4KBz0KN2RZcDzrsNLB8rSVFvkWvxV05g0eCZ7tbw4m412XP7R8k0AqdDFK5UdXD80VS5Z3wx33LSTgZS4MUhPPlMRLVebhQUGMHyNoh2X%2Bh5muxmclKdrNimZ%2BEvm5wGb6UKHa4OIQf1nNimqGO%2BS78ZjNXTSTYw6%2BeONSXnVTvizMkWDcE%2FESqYa9Hz4bGnDHR%2BgR5CMqVpFJ2c&X-Amz-Signature=32f8a2849511fbf3b4f882f62411795f57dae6fd8a3f502dcb8e21a64ed2368f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJNFGDZK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDh%2FH4JQunC%2FwpU1aVP%2BQQbjlMFjrc1f9HDJU3iWxKzsgIhALKFxExwX3j7UkXVN9FzhXKpWZJprbwB0zzxtrrnCBXLKv8DCB4QABoMNjM3NDIzMTgzODA1IgygUd5Z9ynkVZMZuH4q3ANvKsJ0bgq5SErL7b%2BRK4ymK0ike%2BqOlGnMbsAoym4O9JxRag9yp3Jef%2FeamWxvp3Gw3piunhBWCfRozzr78BrDgCjSX5TEr7UTg0an7uyKKh5czRee3KlImiiYV12HukxRd%2B%2F93D7m7nHjqkZO%2F3qh31IwwbxhD6KurYgslPvngIwu5GjYd8YaPN6D0ZdXVCjaZQzYQxTEfKQLFoGqBwyt1sAMEG%2BOYwhNlut6ZcWM9O1WntXujDR3SOl0I8ciLOTUPly3kM0xkM8DkoQC1lMkoaN3Xe5MtiSpMdBGcnoKlsfEPZgrnjlN%2FOXn9umt%2FeceibDmd%2FTFJOPVgB1jWXXl4I%2BjjaQJHYtHTgKauv2WTT4Cpbt81sCXUyM6QxmletZGn1DY7oBMkjEDJ9PLh7F83eXOmZnB7OUO76HLO%2FLRB4VGB1ZSML7zFN5WCxy5Oa61S1Pl9yIkj5ZuOnGi%2FUOXTEzsIuPfaCYWeacLRUmY4PLl9jR8ZoyicZBZa6Wvtc%2FhAizKcwCkqtLF8VxlmYD2IbtZJCZIcrf29PMjVSam5YHEv1deuk%2FVWZuXf0asXcPpFNG%2FrjT8%2F7xodwA2mQe%2BkMgJHN700Ccucl86L2an6g4E9x2Ls8L%2FpjpMZTC4rN%2FABjqkAeXrL5V1e%2B4LaGY0Gd%2BJJi1CMX3eCSnhHxOt9YZaCGVM9koYg8VzkasXZViap%2FQnN%2FbEDH8DQQ%2FAQN606FLypc3UqX9ZLt82AF9vuYOT%2BYBeeCO1zH5pPqpyalIgXad7V0frQP83Q%2B4E%2BC6TR9K3qt4pUXD2CnRRKScjOMQ2htouSnvlRbNTyqeOgsFAxPhpYVrsFpGBk2adRiWx3n0t2HpQqkSV&X-Amz-Signature=a16705c4eab49fea90e38f4fea5789d6c1876208210edb2ec32541f37cac349b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
