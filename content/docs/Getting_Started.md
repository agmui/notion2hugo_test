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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q73W76R2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQD%2FbNGgaZXiF3Xi1YuAtmW1pz4d7DHu1HqOdi8qdXyRqgIgZaMvFoqc0osu%2FJSWktDp6u%2B1PgWHykpFLRSq%2FTWsha4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ7gUP%2FhaCI58K5oSrcA7w%2FLVmMx%2F%2B1Zz4eUUdW6FxBVZhvQcEWfM4%2FatQoSoye6bFULpIre6rBi42CC%2FcSS6VhCw%2FgKqYmvNbpw96jCvo%2FMbRqTljpP%2Ba3ZOXRd8dCycNn0IxyckyFG9LR9TCjK5dmlnQ%2B7BL1SXSI5anPoCmmJLOGnEDBp3WNUdx52awtvsWIF5NyptaTVeZq3L3JZJYWY8T4sU6cVOgvXCcuq69bBit7aRD5BY5hWEJG479N30UkGFVyPknYO3D2yydaaEUJmXogezX9udYWUbnELSII7Ug1q%2FqwnM%2FSLYCK4sITOBniWn1c7NlecuNxHJrY8ms4jGBfpojvBq6AboOz8kJu3j5oNCrRQ3fFgfntrQ0mFbGtjDJry7rgGT%2F2h37beth9j2%2BKvx66F0oZ24QuP7tCu%2BnbOX3BSr2ZFAeiOZj9Q48O%2BbJ5ByQ1mjnzre2LvpVMo9HbtiU6c1Iv0STeuBVffAbwhMK3mdblj7nB832CMv0xKJZvoni4oU5qRa%2FLRYac7bgYxtxwPq%2BIH%2FwVvAgO9hgweQXx%2ByQLe0NTupZFst4u6xVmRQeVbnAG6Eb4q3gQ4PV%2FzP8kgS9Tl8bJL5HOb0Y16FnmMQH3t0%2B%2FI%2FEWDQ94vNjg0FpdruA3MISM8cEGOqUBEs10f14hH86zHj6Zivmw%2BJ84Z89Uh6BiJuwB5MTxafq92MN4%2F5tMncnsBZIHnuBTEVnxY8cyqlfW0bHl5xw%2BayQQpBXeuxk8Tsed4TPtF60w9xzRZUWjOCcrFE19TWki6hHVS9tE%2FXWU82v2e2JEixT1o2KeLGltnMyj2C1KcgjdT2n9QYUKzR7Euplcys33iLijvfsmWOYcDSgrN%2F%2F6Zss4sBvx&X-Amz-Signature=1db0292f11292f95b8275c87e725965d31a14baea04c9399659645724891d3f5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q73W76R2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQD%2FbNGgaZXiF3Xi1YuAtmW1pz4d7DHu1HqOdi8qdXyRqgIgZaMvFoqc0osu%2FJSWktDp6u%2B1PgWHykpFLRSq%2FTWsha4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ7gUP%2FhaCI58K5oSrcA7w%2FLVmMx%2F%2B1Zz4eUUdW6FxBVZhvQcEWfM4%2FatQoSoye6bFULpIre6rBi42CC%2FcSS6VhCw%2FgKqYmvNbpw96jCvo%2FMbRqTljpP%2Ba3ZOXRd8dCycNn0IxyckyFG9LR9TCjK5dmlnQ%2B7BL1SXSI5anPoCmmJLOGnEDBp3WNUdx52awtvsWIF5NyptaTVeZq3L3JZJYWY8T4sU6cVOgvXCcuq69bBit7aRD5BY5hWEJG479N30UkGFVyPknYO3D2yydaaEUJmXogezX9udYWUbnELSII7Ug1q%2FqwnM%2FSLYCK4sITOBniWn1c7NlecuNxHJrY8ms4jGBfpojvBq6AboOz8kJu3j5oNCrRQ3fFgfntrQ0mFbGtjDJry7rgGT%2F2h37beth9j2%2BKvx66F0oZ24QuP7tCu%2BnbOX3BSr2ZFAeiOZj9Q48O%2BbJ5ByQ1mjnzre2LvpVMo9HbtiU6c1Iv0STeuBVffAbwhMK3mdblj7nB832CMv0xKJZvoni4oU5qRa%2FLRYac7bgYxtxwPq%2BIH%2FwVvAgO9hgweQXx%2ByQLe0NTupZFst4u6xVmRQeVbnAG6Eb4q3gQ4PV%2FzP8kgS9Tl8bJL5HOb0Y16FnmMQH3t0%2B%2FI%2FEWDQ94vNjg0FpdruA3MISM8cEGOqUBEs10f14hH86zHj6Zivmw%2BJ84Z89Uh6BiJuwB5MTxafq92MN4%2F5tMncnsBZIHnuBTEVnxY8cyqlfW0bHl5xw%2BayQQpBXeuxk8Tsed4TPtF60w9xzRZUWjOCcrFE19TWki6hHVS9tE%2FXWU82v2e2JEixT1o2KeLGltnMyj2C1KcgjdT2n9QYUKzR7Euplcys33iLijvfsmWOYcDSgrN%2F%2F6Zss4sBvx&X-Amz-Signature=71b1f12b1eadcb3f9464f26da5aeb6066964da2c88b97044146eb9f2296fd602&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q73W76R2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQD%2FbNGgaZXiF3Xi1YuAtmW1pz4d7DHu1HqOdi8qdXyRqgIgZaMvFoqc0osu%2FJSWktDp6u%2B1PgWHykpFLRSq%2FTWsha4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ7gUP%2FhaCI58K5oSrcA7w%2FLVmMx%2F%2B1Zz4eUUdW6FxBVZhvQcEWfM4%2FatQoSoye6bFULpIre6rBi42CC%2FcSS6VhCw%2FgKqYmvNbpw96jCvo%2FMbRqTljpP%2Ba3ZOXRd8dCycNn0IxyckyFG9LR9TCjK5dmlnQ%2B7BL1SXSI5anPoCmmJLOGnEDBp3WNUdx52awtvsWIF5NyptaTVeZq3L3JZJYWY8T4sU6cVOgvXCcuq69bBit7aRD5BY5hWEJG479N30UkGFVyPknYO3D2yydaaEUJmXogezX9udYWUbnELSII7Ug1q%2FqwnM%2FSLYCK4sITOBniWn1c7NlecuNxHJrY8ms4jGBfpojvBq6AboOz8kJu3j5oNCrRQ3fFgfntrQ0mFbGtjDJry7rgGT%2F2h37beth9j2%2BKvx66F0oZ24QuP7tCu%2BnbOX3BSr2ZFAeiOZj9Q48O%2BbJ5ByQ1mjnzre2LvpVMo9HbtiU6c1Iv0STeuBVffAbwhMK3mdblj7nB832CMv0xKJZvoni4oU5qRa%2FLRYac7bgYxtxwPq%2BIH%2FwVvAgO9hgweQXx%2ByQLe0NTupZFst4u6xVmRQeVbnAG6Eb4q3gQ4PV%2FzP8kgS9Tl8bJL5HOb0Y16FnmMQH3t0%2B%2FI%2FEWDQ94vNjg0FpdruA3MISM8cEGOqUBEs10f14hH86zHj6Zivmw%2BJ84Z89Uh6BiJuwB5MTxafq92MN4%2F5tMncnsBZIHnuBTEVnxY8cyqlfW0bHl5xw%2BayQQpBXeuxk8Tsed4TPtF60w9xzRZUWjOCcrFE19TWki6hHVS9tE%2FXWU82v2e2JEixT1o2KeLGltnMyj2C1KcgjdT2n9QYUKzR7Euplcys33iLijvfsmWOYcDSgrN%2F%2F6Zss4sBvx&X-Amz-Signature=4218b8f115e25ccdc78a00ccd4229e85ef5ce91665fd292eef82ca417c07cfbd&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSFO53TP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQC4iW69l0MVo7CEyj5mLB%2BJieD0Y%2BdCEczaNrluyemyIwIgGygmxugQxEvbkFvWmPqelnm7TXLm8iW%2FUszUoWMvylAqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASITL1bwC%2F6c79AqircA3as3l6U6vQxCHJR6acdD72o%2BgF68zZMvKXdBV3Stb1Ti7%2Fo4KvzaZsxT1kmS0d8j6pWNFnJ5OaPof%2FnFa7aGE%2BWN9irPQiPFfWb2GK9AMVSai%2FeNtaDaYw1xrFxrhoH8%2FPasMY39973RkGT66EeGkxdnlEcx%2FFKPps8Qr2HzX7B%2FiP3GyNp8NLvy1Sbv1JtNb8xvmv8HmLvmR3ed0WASopU7q7TC3BbpvbBTI78HvPxF0R%2FdClcPQEryGzWOMGryOGu0GdEdAkSB2%2FJnolyFyteV7fay1z5J%2F9v1mLo8W2lmelvXX22tj9Ouz%2FxH1FU1J7keXl%2FOAP9rj2wByafez5uf9QYNflZOjc2f0rhsAMfUZG4LsIxW2DYFo2xuAoWsDktb%2BYLt1P8Ezfk0ZeldbTJ8IPBM4qWxBSoxoiPmPsjyq4O3n%2BRjpQ8RtyDhVDmUnadpGsqjVnNn421MpcIhlDII9j7UGhB%2BPZrNdqtD03MdO7sh0j5LPwq9R5b%2FWEn70oLQK3GF9ubHC7LdAKC2JSaSt9sEkBVjzRwJMQ74aN%2BL2dMOOQRYhCVjNvtvEqL2KU1R1EwGl23yuYyOAMdFOiXeLa5WmXrTtHx5AMc86K2srFQbndkiJt2TKjRMNae8cEGOqUBOWsQw3deTWtHbEtVtMFKxn0XHM7xS4zaOeICmeTJzayQlSjQ5meqPKZuHRhCRTOTljedDRtRWySDIlWRSxyruzm4Fi5In7VzDh9FvOZ85m5UEKzx2K4FkpCTnqFhCXxi6Y7rno3V2InpmHF0MCPg5%2BhtjPbCNMJHIOd9%2FhgW9ctv%2B0mjV84jLJLSadteti5Jt2pvTqlub%2BTKcAPWuOIZKtL4Ijq0&X-Amz-Signature=6f2e32e685b312e7a1b163fbbd2956465ebc1af27828adac13da2ac3a0955850&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRFANEG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCwS457%2FsLNUzwFosuv4ivx2EIB7rLKomEchDb%2B2xNLZQIhALNVZ1qr0qRhwgtatvS8KyH1TmPXg9BaZX844N9lAqveKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxg1BcwtdQU7mG3E6Iq3AMd0by57iUWW%2BLVN%2FMYWSNB%2FDHCiXBxYGCKuNG5GfrV3SQqND73JBE7%2BXT4FN1QN866ImPXRpPQbfe9T7gcsVAIHOEomSDM6SUKRmwtgQjubXB1qaB4gjFM2VM%2FfrsWUTBQ%2BIo%2B4SCopvdQb%2BtSkFGv7Xu8VW%2BXLlMLyBuTGopYISsUweHn35sPn%2FFl6qkb1m90%2F5LzSVO0rkKtH1W7K%2B%2FUqKmeobFOXuaooh8PTW7KmhqTjYfOJ00eZnou1FE5gVi5ZlIaKJCn4DdvxmtRDoqxPkj81VTiUH7elc5mUIu4tAs%2ByNKZQ9YDqcYXW%2B5FU3%2FRMw929YF7%2BAvj4OsP5QimPxZQiUnfB49sueMhGYrr2X0wo0SKx4AiXxJQCzizAd9C7%2F2KnaGYnKHmUoqmTktBRCk54TbYFfjnOE15ckBp4b%2BXel%2F3m6ktc8VFVRfuw84GNt7INP8ZKudY1joZcVk0SYc7WLrfurWuV37kXoQ3ysciX5GPPRXpHYuvh6sUORxWOwIfTyV%2FExDJgPUhWMUlouAXNsb1a76Ak%2B2hcynzFxXSOjcTijfFUEgLHyMwwaUKSIxXsynCztqBU1DF2sbHmjdEByAuFlpFkxLRacjJE8asL9seXfksDkx6iDDEgfLBBjqkAVkvcs1A3StCgJQ%2FwnWHujwNqseFIkFTW%2BPtBxkXdPttAq8bHXDZXUm6aWh0iuRHm%2FjzmlAy9V%2F6veenSHXZo7JDBpAjVJuQzWjmPkknIwTPCIntRhWhgYneaxZr3Uu37ck2apRPcqW1ViJcUlcY3I9qixnZzvBSUGVljdMC8a4piaBpiR9gaWEHAv%2F2pnstWnu%2BsSZJgUP3Q2EstXBxm2IfpDgd&X-Amz-Signature=10fb6830fbae78bf19c28056baf4ed82d6b563bada3a5eb74c4854f17db61120&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q73W76R2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQD%2FbNGgaZXiF3Xi1YuAtmW1pz4d7DHu1HqOdi8qdXyRqgIgZaMvFoqc0osu%2FJSWktDp6u%2B1PgWHykpFLRSq%2FTWsha4qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ7gUP%2FhaCI58K5oSrcA7w%2FLVmMx%2F%2B1Zz4eUUdW6FxBVZhvQcEWfM4%2FatQoSoye6bFULpIre6rBi42CC%2FcSS6VhCw%2FgKqYmvNbpw96jCvo%2FMbRqTljpP%2Ba3ZOXRd8dCycNn0IxyckyFG9LR9TCjK5dmlnQ%2B7BL1SXSI5anPoCmmJLOGnEDBp3WNUdx52awtvsWIF5NyptaTVeZq3L3JZJYWY8T4sU6cVOgvXCcuq69bBit7aRD5BY5hWEJG479N30UkGFVyPknYO3D2yydaaEUJmXogezX9udYWUbnELSII7Ug1q%2FqwnM%2FSLYCK4sITOBniWn1c7NlecuNxHJrY8ms4jGBfpojvBq6AboOz8kJu3j5oNCrRQ3fFgfntrQ0mFbGtjDJry7rgGT%2F2h37beth9j2%2BKvx66F0oZ24QuP7tCu%2BnbOX3BSr2ZFAeiOZj9Q48O%2BbJ5ByQ1mjnzre2LvpVMo9HbtiU6c1Iv0STeuBVffAbwhMK3mdblj7nB832CMv0xKJZvoni4oU5qRa%2FLRYac7bgYxtxwPq%2BIH%2FwVvAgO9hgweQXx%2ByQLe0NTupZFst4u6xVmRQeVbnAG6Eb4q3gQ4PV%2FzP8kgS9Tl8bJL5HOb0Y16FnmMQH3t0%2B%2FI%2FEWDQ94vNjg0FpdruA3MISM8cEGOqUBEs10f14hH86zHj6Zivmw%2BJ84Z89Uh6BiJuwB5MTxafq92MN4%2F5tMncnsBZIHnuBTEVnxY8cyqlfW0bHl5xw%2BayQQpBXeuxk8Tsed4TPtF60w9xzRZUWjOCcrFE19TWki6hHVS9tE%2FXWU82v2e2JEixT1o2KeLGltnMyj2C1KcgjdT2n9QYUKzR7Euplcys33iLijvfsmWOYcDSgrN%2F%2F6Zss4sBvx&X-Amz-Signature=4a42f00c5991ebba3c8652d35762640208fb2eff6890e2ae1699183dfbac9824&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
