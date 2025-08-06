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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVCZLGOR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIG%2BKBgDVXzuaRAyH8a0WYviUqtTgSOsCqKziwLjS6WAWAiEA08Mk8ZPBPLLvfWavjm2lWOvKJK00K2p2SGuXpZQjFZ4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKXTTx1wa%2FzMa%2BR0nSrcAwT5LSbxp9sMlwGDJZdwSTCNzEvM5gWnwodcPVJSM1Z2Ag%2F8aQ4dSDFnIqK2KHrRT5ngdvWxGTvAVimWFpYHFPnrkkjh2TrQJIETqP2TFh8nYFRIURuSFpS05HpBVL2JcXDUlVfYqMZkIPvVJw70v0MVFB2j55pTIJrTMbYNVLj9r4KiZjPWAH%2BONrY8pllamBFW2J5OPb%2BRKyKgwChokch8J3HgY5MVoUQJqiFxuAev6Vi1ZEXIeLmuHV6bRcH79e0ZwhFa2kF3mxcvXaJagMp8ty4F6vUMnCQyVRYISSlZ1Dn9A3tlRuP4EyTUWO3gRKOzcPBrWLNyFpb9iiVFFFWNxSpf8NVbnDqRFmKYxgYhrvhA3awCrfpbd%2B8etqJSBUoGoGmYsNRytLCyPgt3jJwbUnog61WN57Hwdb09H%2BowOv68fJEmOnlZqeXVpnWPz3vrSCf%2F5hSMDH4wyy4wB8O8OJjbdB0jK1VbR0WwkeQWYV3q0FuRcREmJ%2BBpXcByWt6cO%2F1kBGzsJVvz%2Bnay%2BAn4VrfHwUF31NGwGPTQSrjB243hub2MOgkStHqeqrifNdZzb92AesFc1gYqa2hNqMZeB73SGrFeAky1nonFASLwCDLBkoxQVaA0vAlDMLCKzcQGOqUB5lGPl%2FxHUXvvoHC0vsTV8IMaqnayMvpDk969Tj5rICatEhvpTGKFTL2OmZVIJdhoHxb1TCAwJ01nLGO5R45j4ukoOe36o2LedkuHIA3sDe%2FpILneKF3Z9x2OL9LwCmS74uTD67rx2SZQ5F74vz5vqyotK%2B%2BAZloiA2wppzuqdFYniKBkX09FW3xSYAygwFbCg3HuNctx%2BTGbdOAn6eU0qPE7X%2FCa&X-Amz-Signature=05b88372f3858a02abc19bf133d6ee8d535678e30daa1f8b6fb7111c5deafe9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVCZLGOR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIG%2BKBgDVXzuaRAyH8a0WYviUqtTgSOsCqKziwLjS6WAWAiEA08Mk8ZPBPLLvfWavjm2lWOvKJK00K2p2SGuXpZQjFZ4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKXTTx1wa%2FzMa%2BR0nSrcAwT5LSbxp9sMlwGDJZdwSTCNzEvM5gWnwodcPVJSM1Z2Ag%2F8aQ4dSDFnIqK2KHrRT5ngdvWxGTvAVimWFpYHFPnrkkjh2TrQJIETqP2TFh8nYFRIURuSFpS05HpBVL2JcXDUlVfYqMZkIPvVJw70v0MVFB2j55pTIJrTMbYNVLj9r4KiZjPWAH%2BONrY8pllamBFW2J5OPb%2BRKyKgwChokch8J3HgY5MVoUQJqiFxuAev6Vi1ZEXIeLmuHV6bRcH79e0ZwhFa2kF3mxcvXaJagMp8ty4F6vUMnCQyVRYISSlZ1Dn9A3tlRuP4EyTUWO3gRKOzcPBrWLNyFpb9iiVFFFWNxSpf8NVbnDqRFmKYxgYhrvhA3awCrfpbd%2B8etqJSBUoGoGmYsNRytLCyPgt3jJwbUnog61WN57Hwdb09H%2BowOv68fJEmOnlZqeXVpnWPz3vrSCf%2F5hSMDH4wyy4wB8O8OJjbdB0jK1VbR0WwkeQWYV3q0FuRcREmJ%2BBpXcByWt6cO%2F1kBGzsJVvz%2Bnay%2BAn4VrfHwUF31NGwGPTQSrjB243hub2MOgkStHqeqrifNdZzb92AesFc1gYqa2hNqMZeB73SGrFeAky1nonFASLwCDLBkoxQVaA0vAlDMLCKzcQGOqUB5lGPl%2FxHUXvvoHC0vsTV8IMaqnayMvpDk969Tj5rICatEhvpTGKFTL2OmZVIJdhoHxb1TCAwJ01nLGO5R45j4ukoOe36o2LedkuHIA3sDe%2FpILneKF3Z9x2OL9LwCmS74uTD67rx2SZQ5F74vz5vqyotK%2B%2BAZloiA2wppzuqdFYniKBkX09FW3xSYAygwFbCg3HuNctx%2BTGbdOAn6eU0qPE7X%2FCa&X-Amz-Signature=a14452acbb1b2118b4beec31698550f4cd49cd6bd7c6115089dca0aa8c037764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVCZLGOR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIG%2BKBgDVXzuaRAyH8a0WYviUqtTgSOsCqKziwLjS6WAWAiEA08Mk8ZPBPLLvfWavjm2lWOvKJK00K2p2SGuXpZQjFZ4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKXTTx1wa%2FzMa%2BR0nSrcAwT5LSbxp9sMlwGDJZdwSTCNzEvM5gWnwodcPVJSM1Z2Ag%2F8aQ4dSDFnIqK2KHrRT5ngdvWxGTvAVimWFpYHFPnrkkjh2TrQJIETqP2TFh8nYFRIURuSFpS05HpBVL2JcXDUlVfYqMZkIPvVJw70v0MVFB2j55pTIJrTMbYNVLj9r4KiZjPWAH%2BONrY8pllamBFW2J5OPb%2BRKyKgwChokch8J3HgY5MVoUQJqiFxuAev6Vi1ZEXIeLmuHV6bRcH79e0ZwhFa2kF3mxcvXaJagMp8ty4F6vUMnCQyVRYISSlZ1Dn9A3tlRuP4EyTUWO3gRKOzcPBrWLNyFpb9iiVFFFWNxSpf8NVbnDqRFmKYxgYhrvhA3awCrfpbd%2B8etqJSBUoGoGmYsNRytLCyPgt3jJwbUnog61WN57Hwdb09H%2BowOv68fJEmOnlZqeXVpnWPz3vrSCf%2F5hSMDH4wyy4wB8O8OJjbdB0jK1VbR0WwkeQWYV3q0FuRcREmJ%2BBpXcByWt6cO%2F1kBGzsJVvz%2Bnay%2BAn4VrfHwUF31NGwGPTQSrjB243hub2MOgkStHqeqrifNdZzb92AesFc1gYqa2hNqMZeB73SGrFeAky1nonFASLwCDLBkoxQVaA0vAlDMLCKzcQGOqUB5lGPl%2FxHUXvvoHC0vsTV8IMaqnayMvpDk969Tj5rICatEhvpTGKFTL2OmZVIJdhoHxb1TCAwJ01nLGO5R45j4ukoOe36o2LedkuHIA3sDe%2FpILneKF3Z9x2OL9LwCmS74uTD67rx2SZQ5F74vz5vqyotK%2B%2BAZloiA2wppzuqdFYniKBkX09FW3xSYAygwFbCg3HuNctx%2BTGbdOAn6eU0qPE7X%2FCa&X-Amz-Signature=3f2c22381312a9aef51b9c9d8bd0ce59dab8a1fa596929c48f2c6da88c188a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWFN3PL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCDESwxR329EUjVPlMwYiZ3unB1U8P%2BxQ5sJdHW5HtrhgIhAM18Fj4uP9j7jQppzFT0cQsp2%2Bo%2BG2ZzvlbkTpNlmYuJKv8DCHUQABoMNjM3NDIzMTgzODA1Igw5FxsetiB7VVt1ku8q3AMFR%2Fbif1sAbE9E6nt0JywVRn24JaYpqFK5mgFPH2BsQ4SqY%2FsZAx%2BHVIVwFOBiRQO6WVkWs5g5q%2B5xe2cpou9WsmowAIEAFhb3iqxqFT2qbauq7KOPSEHRo986MUpu29H0fx0eHMMp4BQ1aTAB014JLXG45vRv%2FF%2FQVDID3ORmFSaznyOv6eY19oth6oHcFOpMhwCcE1jNUSkGfUojiuRSjCU9%2Bf%2BUG2sfJ6I34%2BaFAT9HcKWyZezfP4Wth6mjrCUYfl4ov%2FPURIlp4TRuHp8gBgkyeYIGkpiPZ5q7i4RZ4feo39Bqe05BEFrPG5xwLplUTOzky44FgQ3yqJNC%2Fjn77poF%2B6S4mWUZ%2BD%2B7KH6ATagoDsqCs220O36EhLZ2jbUasGnPaPE30HfHMb0LqJzPhf7buCJcqcrnvnDPWTCnCZ%2Fycq0%2FczTXRhxsRnI9QfTcLFIqL%2B2nExdkWovihEStz2l6I1fuGlHpzofeCrlJNCpgEgLI3whu%2FQg089r5qO35A9lbuMm%2BEBQHvv%2FkZ48DWd4d4NWaqKXYAcguxSUM3dXzfxNQcWTevBIknaNgu8s8vfbc6dGKD9XevZWE0jO9DMl0Di7tLBzlnbzU28Vi8oTWIv6dnlBX1glHYDDYhM3EBjqkAdGta0TH5qIlvRIHFMqXg2CkFB9C505KYXS%2BGYsVNqy7sYKM9Iq%2FDJoLwy2E9z%2BfVEjXirFUHmr6UVkpegOuvDLLBtuEsKvC8sNXeJKMXtu3laKBy7SG1fYc8VqxzM2KYzFhxzlyotauLNjgzEsY%2F0lUP3BmVRKIxwBJCoyF7a8PkphG3oqwJlZRTLudMs1%2BdebDZCDEkeWKrOu9yrgwKVK9Ng2h&X-Amz-Signature=bc58e3e10e89e69cc6b0c7c244f52b204c38040d224631418f228eb02209a46f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V6D7FCZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCZm1mD9sUbkvNqKuQKoSB4a%2FYxgPsIL3unWJlz6fDDVQIgbkyHwrzKGp3N%2Bq5PgffvNHZQGa547QYi9DgZA7EEHWgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNj8x3pKRq5f8Dh5JSrcAzPuY5OmX4JrSMpLdMidwe2BLJ4PCjTsJusvpLkyhj5ov6QO%2Fcca6qFZKzHb6xzwHGrPOxhin4e8Ws3WOfG16VSN1erEDtkI8I1%2BWUTtUcQH4hJP7uiIo6tt1Ba8OnQyEW%2FUBUIWzNm%2BFX5QThctS6%2FiEdoFAcVpVWNOAd2oNApRsjd52hiJSXwVLrQag%2BaJovJmZBeCO3XU51ek2MGwGnJCfRGOb2o27JrIlY1hRZZ65F0v4j%2Fc3CeLLvtGKDK8QWCEK9hvS6c%2BNBb6kBG3zrI%2B9AgjPAKE1pBC5SzB4HyWLdosq3zlhGg5i9sB2FVYA3k2nKRRbO%2FItwfJ3gZUCF%2BRp%2FVu2Vet3dB3Map0aeyU0Y21O3OzoOSXHYIRawc0ouWa%2BH72KJr5f2OF1J5K3OMVtvuJdqA6olhEDZkOHrEPZC9CPQcrWJMxlRV4qNtAVC9XHW47T8rsm7XjyGNYme3FQ99tUvnKLEyw4y5Lt038g8Jtgm21rjN4VKUz4HvLT7pb7u120GIT6Rg%2FTfZSg6%2BDbXxTvxNr07Nbl%2FYQayjstQaGUyWQjHcpd5oox5UZk%2B%2FLd%2FIPBbXTzb5Ob%2BgpXoi%2FBLs8ShCjj2yGHsru1zd92wQhZnJd4bMWEb%2BuMOWEzcQGOqUB6PJEz1%2F9LEP6X4oH3wz0qlmSwCAb5qEyXyJe%2BMFi2Gp9WUQjOUy1I1iuLK9qbvu%2BqR1RIMDTKnMP1ZFwCM4P40prOxAfZgPYGLY6nmqGqVH3tBDydS1pojrIPtTNNR%2FmxvAk48Fa3w3IkYOEe%2FcfDhRufp%2BxdR69tSKQkZrFTCUzNTN7bw1rYpNVdgyp3JA2%2BC2c69b9OwtJ7e4A4VO1XiWP324Z&X-Amz-Signature=5d51277e87efe7ba1fcb54eb83d169eb66b7896fd7193b582f0ebc72e10d90db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVCZLGOR%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIG%2BKBgDVXzuaRAyH8a0WYviUqtTgSOsCqKziwLjS6WAWAiEA08Mk8ZPBPLLvfWavjm2lWOvKJK00K2p2SGuXpZQjFZ4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKXTTx1wa%2FzMa%2BR0nSrcAwT5LSbxp9sMlwGDJZdwSTCNzEvM5gWnwodcPVJSM1Z2Ag%2F8aQ4dSDFnIqK2KHrRT5ngdvWxGTvAVimWFpYHFPnrkkjh2TrQJIETqP2TFh8nYFRIURuSFpS05HpBVL2JcXDUlVfYqMZkIPvVJw70v0MVFB2j55pTIJrTMbYNVLj9r4KiZjPWAH%2BONrY8pllamBFW2J5OPb%2BRKyKgwChokch8J3HgY5MVoUQJqiFxuAev6Vi1ZEXIeLmuHV6bRcH79e0ZwhFa2kF3mxcvXaJagMp8ty4F6vUMnCQyVRYISSlZ1Dn9A3tlRuP4EyTUWO3gRKOzcPBrWLNyFpb9iiVFFFWNxSpf8NVbnDqRFmKYxgYhrvhA3awCrfpbd%2B8etqJSBUoGoGmYsNRytLCyPgt3jJwbUnog61WN57Hwdb09H%2BowOv68fJEmOnlZqeXVpnWPz3vrSCf%2F5hSMDH4wyy4wB8O8OJjbdB0jK1VbR0WwkeQWYV3q0FuRcREmJ%2BBpXcByWt6cO%2F1kBGzsJVvz%2Bnay%2BAn4VrfHwUF31NGwGPTQSrjB243hub2MOgkStHqeqrifNdZzb92AesFc1gYqa2hNqMZeB73SGrFeAky1nonFASLwCDLBkoxQVaA0vAlDMLCKzcQGOqUB5lGPl%2FxHUXvvoHC0vsTV8IMaqnayMvpDk969Tj5rICatEhvpTGKFTL2OmZVIJdhoHxb1TCAwJ01nLGO5R45j4ukoOe36o2LedkuHIA3sDe%2FpILneKF3Z9x2OL9LwCmS74uTD67rx2SZQ5F74vz5vqyotK%2B%2BAZloiA2wppzuqdFYniKBkX09FW3xSYAygwFbCg3HuNctx%2BTGbdOAn6eU0qPE7X%2FCa&X-Amz-Signature=1db2b6baf448dda14fb5827b944ad98d8f7f57b78bebafb323752de61bc56297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
