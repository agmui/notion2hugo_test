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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEXKB3M%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDmrjvP7blOqc8oWxIQ8zScapjI14f61tfYzQp90xKXFwIgIT9UVdZlDnTQcXE3b6TDeT2iF%2B9wMksFQQ9g9exzziYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEHFcOZm8xOp1vfneCrcA72%2FuREeNT6y%2BivuM0wBP5WFuDtlTlBNggBU9sO%2F6cFNbTKIpJevnFgrNmDsp4gZ6Fhj7eMXPt0Oi47pq04wzwASjVfsZuWfliaUp2uJIrd%2FWteBuCWxenaTIiTOWgpWtj6fl3Uh5%2FabvW73%2Bk6Ewheh%2BuIzVWb12yxpgCz3341nylGI1SD4A4lCa5JvfYrxEgkV6KFZPI2spCQ9QcsRp51sL%2BPlZgjii7%2BcRrIRCSzjjUnfRbcauaDPspi7cbqneS0jAow0Y5mJDpQvsSfbj9E%2BHyBNOco7%2F8kRd9b0wxeru%2BuP7HeHW%2BBnLHFwTQmZvj%2ByDXSFAv%2BHzfcHrumRaCLPXHkW6hSITQ0wQ05lJ0ZnkjtaUjk6222CjcZWyk9uC7cJFroGrmzJX%2Be8alTex8vNh4bWOOX9mdVWZqNYJbgX2PKfEYeaGH4M5KB92drQc0nHjlIwtsl%2FWu4jHC6pva3y2IxH7e1KqDotOkkEyq1jnRQr8GYKe%2FKmZEAETt3lCVwkASRix1cT8xDtrAV4ipV%2B4nlWXB%2BgNvyRWlGKcrWGclWuaEQ5SkRJsZc4ldOB3fytZ3cAN1Jy1lBDkCPxbHZ28rZcK9UVIe15eGngfaJiSGKt5V8QywkrKejkMMSM8cIGOqUBQH17Z6lWg2p2N670hdTajOKhrreIZq0Yz%2F1D5YvKi7z%2FQhla2xqF86n1HQK86BWi6a04afUhRPaDcccVcsUCGHav04K04%2FpOEvnzwUclnLXGO90XYptErK18Xla30JEts9kAa%2B6JHpe4%2FE74b0dIOzHJaXW6JsWZUCovIi%2FUHmOYpt7yEYeh3VJAilaylw6232Pkq7CfWbxc1nsgMGHFeGM7oOAx&X-Amz-Signature=b067d8ec941a3165654ab2c43ec07023318efd7d73ae1db071e798452c099f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEXKB3M%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDmrjvP7blOqc8oWxIQ8zScapjI14f61tfYzQp90xKXFwIgIT9UVdZlDnTQcXE3b6TDeT2iF%2B9wMksFQQ9g9exzziYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEHFcOZm8xOp1vfneCrcA72%2FuREeNT6y%2BivuM0wBP5WFuDtlTlBNggBU9sO%2F6cFNbTKIpJevnFgrNmDsp4gZ6Fhj7eMXPt0Oi47pq04wzwASjVfsZuWfliaUp2uJIrd%2FWteBuCWxenaTIiTOWgpWtj6fl3Uh5%2FabvW73%2Bk6Ewheh%2BuIzVWb12yxpgCz3341nylGI1SD4A4lCa5JvfYrxEgkV6KFZPI2spCQ9QcsRp51sL%2BPlZgjii7%2BcRrIRCSzjjUnfRbcauaDPspi7cbqneS0jAow0Y5mJDpQvsSfbj9E%2BHyBNOco7%2F8kRd9b0wxeru%2BuP7HeHW%2BBnLHFwTQmZvj%2ByDXSFAv%2BHzfcHrumRaCLPXHkW6hSITQ0wQ05lJ0ZnkjtaUjk6222CjcZWyk9uC7cJFroGrmzJX%2Be8alTex8vNh4bWOOX9mdVWZqNYJbgX2PKfEYeaGH4M5KB92drQc0nHjlIwtsl%2FWu4jHC6pva3y2IxH7e1KqDotOkkEyq1jnRQr8GYKe%2FKmZEAETt3lCVwkASRix1cT8xDtrAV4ipV%2B4nlWXB%2BgNvyRWlGKcrWGclWuaEQ5SkRJsZc4ldOB3fytZ3cAN1Jy1lBDkCPxbHZ28rZcK9UVIe15eGngfaJiSGKt5V8QywkrKejkMMSM8cIGOqUBQH17Z6lWg2p2N670hdTajOKhrreIZq0Yz%2F1D5YvKi7z%2FQhla2xqF86n1HQK86BWi6a04afUhRPaDcccVcsUCGHav04K04%2FpOEvnzwUclnLXGO90XYptErK18Xla30JEts9kAa%2B6JHpe4%2FE74b0dIOzHJaXW6JsWZUCovIi%2FUHmOYpt7yEYeh3VJAilaylw6232Pkq7CfWbxc1nsgMGHFeGM7oOAx&X-Amz-Signature=11a9f178b8e36003b4de75b6aeb71d8e432c6dfa6396b3f2c7318f057b0ffd24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEXKB3M%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDmrjvP7blOqc8oWxIQ8zScapjI14f61tfYzQp90xKXFwIgIT9UVdZlDnTQcXE3b6TDeT2iF%2B9wMksFQQ9g9exzziYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEHFcOZm8xOp1vfneCrcA72%2FuREeNT6y%2BivuM0wBP5WFuDtlTlBNggBU9sO%2F6cFNbTKIpJevnFgrNmDsp4gZ6Fhj7eMXPt0Oi47pq04wzwASjVfsZuWfliaUp2uJIrd%2FWteBuCWxenaTIiTOWgpWtj6fl3Uh5%2FabvW73%2Bk6Ewheh%2BuIzVWb12yxpgCz3341nylGI1SD4A4lCa5JvfYrxEgkV6KFZPI2spCQ9QcsRp51sL%2BPlZgjii7%2BcRrIRCSzjjUnfRbcauaDPspi7cbqneS0jAow0Y5mJDpQvsSfbj9E%2BHyBNOco7%2F8kRd9b0wxeru%2BuP7HeHW%2BBnLHFwTQmZvj%2ByDXSFAv%2BHzfcHrumRaCLPXHkW6hSITQ0wQ05lJ0ZnkjtaUjk6222CjcZWyk9uC7cJFroGrmzJX%2Be8alTex8vNh4bWOOX9mdVWZqNYJbgX2PKfEYeaGH4M5KB92drQc0nHjlIwtsl%2FWu4jHC6pva3y2IxH7e1KqDotOkkEyq1jnRQr8GYKe%2FKmZEAETt3lCVwkASRix1cT8xDtrAV4ipV%2B4nlWXB%2BgNvyRWlGKcrWGclWuaEQ5SkRJsZc4ldOB3fytZ3cAN1Jy1lBDkCPxbHZ28rZcK9UVIe15eGngfaJiSGKt5V8QywkrKejkMMSM8cIGOqUBQH17Z6lWg2p2N670hdTajOKhrreIZq0Yz%2F1D5YvKi7z%2FQhla2xqF86n1HQK86BWi6a04afUhRPaDcccVcsUCGHav04K04%2FpOEvnzwUclnLXGO90XYptErK18Xla30JEts9kAa%2B6JHpe4%2FE74b0dIOzHJaXW6JsWZUCovIi%2FUHmOYpt7yEYeh3VJAilaylw6232Pkq7CfWbxc1nsgMGHFeGM7oOAx&X-Amz-Signature=703bc260741717f2504c509e4d5f1fcd435ffbfbfb5f882dd0aad3c60811538b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGWCAVB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCwlvrH9j1Ei%2F6kyWkqUo%2F1zaRj4v2TXyLeNh%2FibLRoxAIgF5kPodVBc%2FgmWohKy5awYxHn0ZcEmiii6htz9898w0Mq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCvJNF%2F4zOW1mH8FQSrcA56rZM6p9y7QV%2BpRQbQtemeUjTPD0WnLOKwWf8cji5lf50xlT3Q1anae75BnIjKQ3SjEEwVFfAg7rqWAyHKp1OiEclSvF8X5ZPPAGA7oW7GS4fQHuHq%2Bxqp0gBurWnln%2FAgodLXNd6ir7%2Fm7gxCFVFlA8LBxSOoOjgDa1johEFE8HPCE2Q0iTVLeaTk53NWufChP0vpSVNLO9K4yFHpCml491shUR%2Fqs8J2gnDgzq%2FFTQDPCxYP4BfKSzQf6Mi43yPsolQlpUZolSe8ukyJtGG7IiM6jPmsRzRvzuj%2Fap5rGZZIfSg2%2BUZAiGGY5nqfQZSYgDyf%2Fdc%2FcvMa4JF9sMfPxXCTqYcFANZ42yKiSyW8k79t9AxdvGXGPvWrwm32WKWrtN60ToeZWoy5QgEpXmiDxEaBgNnGz%2FDpSYswx5hIs9P8u5CwcSJEtZ5OcHvm1tMKbbbNCfydLgy3xiBoCSdtSRMb%2Fw6pNB7h1DdQu8O3FxIvqhug%2BRdMHVjWUC8oQjzxJtEMF9ofnKpYC5kAboQhiGiOKJ2DQvt0i%2FpPsz87hwsm9125hunYnvi9P6WR5wJtik9XP%2FMbyv58nqUPQ3LrQlR3Jb9Rj5zJWfAW%2BQxv4JP2zmHn7ogbhgtWQMJ%2BN8cIGOqUBIV0y4vjw1KHD0iNFBH5ZQlaqfkwjt3DdEkjdxBFtx6W1D71uHwkkyJub4ohrmGazFE0cBo415efiuY7t7B6MsOpzINKXfx223s9kG2X%2BLVXiEQsfc5vl6u1nbdujear%2BPHelGZSLr%2BdIqhd8l6hDt00dtmAbiI8qMkEhz3HBDpxruGrCGYxNXaHk2CzdfgbhuqCnl50kzyB2IT9ZARMB0LRDtQHx&X-Amz-Signature=86a1d9d12d4ae2d381647c58dbe8737d0593e0513215bc2815b51d94c5e4ddb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LD7VUY4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDYF2PJo4NLpYHHeOujMuxIJzt6IT9c%2FWADvBQJrUEgyAIhAOpbFutOKgLOzQ3vBXsYpqW4NXtH5mb3K8%2FVilFiycZ3Kv8DCEwQABoMNjM3NDIzMTgzODA1IgxfPKe5zojNFkvQR8cq3AP0Vx3v%2B5UTMvA%2BbxzLz5F6mtXllUC7o37Y2zS1NN2SoMTcRg4KzoEEM%2BO8vUaFFzQm6ZtyxEinQBybcnAgGx4q4m%2FlQUsP7tha5ohnGIVQ3j8KNkTecK4OciKN%2FdLNuiquoTwVShiUeNQm8cZ8xwRMn%2BARunHhZkf8WmKsvf%2BnAAyJOgaIcpwTB0WB4gt3jpsmmKoZrM2%2Bxb9l4vIceVkJ6RqQweT7kxu8fSydyXQ87vMOpiIRcT0JGDGdz6%2B6qqUUmGrpNgit%2FdCBW6ViLmgZQwjGT0lpf2h4PvYPMrOvIFYETAFRuO3pjZqSrz2zjfHeUnglvKMRIdEXVQJRm0DfBnjjcEZtlf0qUi89GxOMqw1PMafomDvT7ILBloLDi1yTwuBPQTiZfxlUOIZR%2BkGv%2FlfQf2t9E9bG6gVWAFOG2jmmrECFAKKb05PvM8JCFPwCrpRw%2F4j3UpvvoWFVv7tyoKqkXBoBnOD6nWZUTSmC%2F80%2FrPjNpU0d8h1PDemee%2BDB3Tz8nJXREG%2FwQU32H0p4mHo4zddx3burYXiQ2vvG3WM%2BYLTd89DrElnlpWEJIsqcEGfyV2bvT2wMq4jzKEAouT3nc9bgBLwtt3nlTA8j1iYlVwFITpRJkXvgSzCVjfHCBjqkARpaJ440Y6lgyLQeLMajZT%2Bn0xfqXqAAQX%2FAKRdhOGmk%2FwX4TybxRURYoMySl8NMaxfsDrOxYaKJkxFFALwW%2Fc7IA0fszGc33LUQr5s4FInFgk7uKcVGBs3r%2FALeBQIEPybv51N08waOcyMc9mB8Djtiximk3QSZnQ7ksbCuWU5zPmLMgta11RG4EoP4YJy6aqBvElM1NJ7jBWGMpMNOcWC3jzKW&X-Amz-Signature=c127272058c9752d7fa80cf4dcaf6ad081a45046acb39bf88e510da8a429fc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEXKB3M%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDmrjvP7blOqc8oWxIQ8zScapjI14f61tfYzQp90xKXFwIgIT9UVdZlDnTQcXE3b6TDeT2iF%2B9wMksFQQ9g9exzziYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEHFcOZm8xOp1vfneCrcA72%2FuREeNT6y%2BivuM0wBP5WFuDtlTlBNggBU9sO%2F6cFNbTKIpJevnFgrNmDsp4gZ6Fhj7eMXPt0Oi47pq04wzwASjVfsZuWfliaUp2uJIrd%2FWteBuCWxenaTIiTOWgpWtj6fl3Uh5%2FabvW73%2Bk6Ewheh%2BuIzVWb12yxpgCz3341nylGI1SD4A4lCa5JvfYrxEgkV6KFZPI2spCQ9QcsRp51sL%2BPlZgjii7%2BcRrIRCSzjjUnfRbcauaDPspi7cbqneS0jAow0Y5mJDpQvsSfbj9E%2BHyBNOco7%2F8kRd9b0wxeru%2BuP7HeHW%2BBnLHFwTQmZvj%2ByDXSFAv%2BHzfcHrumRaCLPXHkW6hSITQ0wQ05lJ0ZnkjtaUjk6222CjcZWyk9uC7cJFroGrmzJX%2Be8alTex8vNh4bWOOX9mdVWZqNYJbgX2PKfEYeaGH4M5KB92drQc0nHjlIwtsl%2FWu4jHC6pva3y2IxH7e1KqDotOkkEyq1jnRQr8GYKe%2FKmZEAETt3lCVwkASRix1cT8xDtrAV4ipV%2B4nlWXB%2BgNvyRWlGKcrWGclWuaEQ5SkRJsZc4ldOB3fytZ3cAN1Jy1lBDkCPxbHZ28rZcK9UVIe15eGngfaJiSGKt5V8QywkrKejkMMSM8cIGOqUBQH17Z6lWg2p2N670hdTajOKhrreIZq0Yz%2F1D5YvKi7z%2FQhla2xqF86n1HQK86BWi6a04afUhRPaDcccVcsUCGHav04K04%2FpOEvnzwUclnLXGO90XYptErK18Xla30JEts9kAa%2B6JHpe4%2FE74b0dIOzHJaXW6JsWZUCovIi%2FUHmOYpt7yEYeh3VJAilaylw6232Pkq7CfWbxc1nsgMGHFeGM7oOAx&X-Amz-Signature=9b1ea807cfa417224a1b7b216a5dd81b6d839adc047199d513000337e1bf7b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
