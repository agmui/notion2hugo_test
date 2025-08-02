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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TM6C2ML%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCwbIBTSwwCOIz1mmKP3ot8u17iy8%2F3rHEDyfw%2BlVvVQIgYeO5A57eMcDocCnMjFeij%2BrPrOaDvUoTkfDUPeS%2BGc4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIoOuNVfn1H%2FSnNzyircAxMDP%2FKuOTgzQlan5SabBipQJxN6%2BdWkUPH7%2BM9CgNOu41vNjlivrwo3aBKstvzTxf5hGiWNOvElGHIkrcb9hehw8fOhiJYtWoMeC4J7lMCIVFIZivNDTvSEOCGusxfGqI1KQBpJfhHf4VPJvm70DJgKb4mIUGqs8jJV6K38o%2BNffG7QVFl4dmtYljngy0RDo7JKZcd28kBs08%2BEf0IjEZlVJa%2FuSLhfej94dL6iB9qudTfvrB98MwD49Oyy6zzWvvRUoPYCwAlU9k3em9P7ISStbG6QA2CZFrIThquyEr6oOgylgIqVNmgpw33g5ZIKS%2FMuD%2F1NpZ9qLjiERFhEjtyDaGj2f17mtsdXYyqn%2B7bRPcWcFkOaU8GZWMbXi4kxzrsuhAan99l6g0JJQgsbktCwLTNa99sPboLWJEX7SqRZF7XQsYtsC8Kb7I7yBg5CuycrnqtNtCOFAZZoLzzBKfP04bLPVjpOqC8esJNdbWDNN9M304x9Mgb96dA4NGxsVMxEmUner7dvrcE8VTkY3ZsfYg5wQ20H6nf25jGfaIFSdALY3WogrqTTRHOtgy7Z3MPgxXMF6oRAbdnBjZZAN8PSS%2BQXfIBvYIpV6B6HO3oANpyv19rouuAY%2BuOzMLrwtsQGOqUBDmN23yX7OQ634vvLz%2B0RuB%2BwiCHcCK%2Bw7lI0ZiG6PMxboMW%2B3yqcsyXe7YXbMTdcqeqNyKFQYup2pOwpe%2B28RWlVIPj%2B3fM%2BWtt%2B6xAAdYPYiMxahfr0L5YL7a0w%2FoThcjrCjigmIi71d3c04juL%2FQULXaFyc4z77rQjKW6F3irEPS2Nk2iCmS4kzlxV555PGJremSqtL2xqxWly0B4n%2FF3duryY&X-Amz-Signature=b83e647fdaf477cd56e2fb8613971cd255c8a4712242d9f44d0b04eb940a9184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TM6C2ML%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCwbIBTSwwCOIz1mmKP3ot8u17iy8%2F3rHEDyfw%2BlVvVQIgYeO5A57eMcDocCnMjFeij%2BrPrOaDvUoTkfDUPeS%2BGc4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIoOuNVfn1H%2FSnNzyircAxMDP%2FKuOTgzQlan5SabBipQJxN6%2BdWkUPH7%2BM9CgNOu41vNjlivrwo3aBKstvzTxf5hGiWNOvElGHIkrcb9hehw8fOhiJYtWoMeC4J7lMCIVFIZivNDTvSEOCGusxfGqI1KQBpJfhHf4VPJvm70DJgKb4mIUGqs8jJV6K38o%2BNffG7QVFl4dmtYljngy0RDo7JKZcd28kBs08%2BEf0IjEZlVJa%2FuSLhfej94dL6iB9qudTfvrB98MwD49Oyy6zzWvvRUoPYCwAlU9k3em9P7ISStbG6QA2CZFrIThquyEr6oOgylgIqVNmgpw33g5ZIKS%2FMuD%2F1NpZ9qLjiERFhEjtyDaGj2f17mtsdXYyqn%2B7bRPcWcFkOaU8GZWMbXi4kxzrsuhAan99l6g0JJQgsbktCwLTNa99sPboLWJEX7SqRZF7XQsYtsC8Kb7I7yBg5CuycrnqtNtCOFAZZoLzzBKfP04bLPVjpOqC8esJNdbWDNN9M304x9Mgb96dA4NGxsVMxEmUner7dvrcE8VTkY3ZsfYg5wQ20H6nf25jGfaIFSdALY3WogrqTTRHOtgy7Z3MPgxXMF6oRAbdnBjZZAN8PSS%2BQXfIBvYIpV6B6HO3oANpyv19rouuAY%2BuOzMLrwtsQGOqUBDmN23yX7OQ634vvLz%2B0RuB%2BwiCHcCK%2Bw7lI0ZiG6PMxboMW%2B3yqcsyXe7YXbMTdcqeqNyKFQYup2pOwpe%2B28RWlVIPj%2B3fM%2BWtt%2B6xAAdYPYiMxahfr0L5YL7a0w%2FoThcjrCjigmIi71d3c04juL%2FQULXaFyc4z77rQjKW6F3irEPS2Nk2iCmS4kzlxV555PGJremSqtL2xqxWly0B4n%2FF3duryY&X-Amz-Signature=755e7252d940964040b84b09a82f7f8b1a92bcc260cf1f96dee3570637955765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TM6C2ML%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCwbIBTSwwCOIz1mmKP3ot8u17iy8%2F3rHEDyfw%2BlVvVQIgYeO5A57eMcDocCnMjFeij%2BrPrOaDvUoTkfDUPeS%2BGc4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIoOuNVfn1H%2FSnNzyircAxMDP%2FKuOTgzQlan5SabBipQJxN6%2BdWkUPH7%2BM9CgNOu41vNjlivrwo3aBKstvzTxf5hGiWNOvElGHIkrcb9hehw8fOhiJYtWoMeC4J7lMCIVFIZivNDTvSEOCGusxfGqI1KQBpJfhHf4VPJvm70DJgKb4mIUGqs8jJV6K38o%2BNffG7QVFl4dmtYljngy0RDo7JKZcd28kBs08%2BEf0IjEZlVJa%2FuSLhfej94dL6iB9qudTfvrB98MwD49Oyy6zzWvvRUoPYCwAlU9k3em9P7ISStbG6QA2CZFrIThquyEr6oOgylgIqVNmgpw33g5ZIKS%2FMuD%2F1NpZ9qLjiERFhEjtyDaGj2f17mtsdXYyqn%2B7bRPcWcFkOaU8GZWMbXi4kxzrsuhAan99l6g0JJQgsbktCwLTNa99sPboLWJEX7SqRZF7XQsYtsC8Kb7I7yBg5CuycrnqtNtCOFAZZoLzzBKfP04bLPVjpOqC8esJNdbWDNN9M304x9Mgb96dA4NGxsVMxEmUner7dvrcE8VTkY3ZsfYg5wQ20H6nf25jGfaIFSdALY3WogrqTTRHOtgy7Z3MPgxXMF6oRAbdnBjZZAN8PSS%2BQXfIBvYIpV6B6HO3oANpyv19rouuAY%2BuOzMLrwtsQGOqUBDmN23yX7OQ634vvLz%2B0RuB%2BwiCHcCK%2Bw7lI0ZiG6PMxboMW%2B3yqcsyXe7YXbMTdcqeqNyKFQYup2pOwpe%2B28RWlVIPj%2B3fM%2BWtt%2B6xAAdYPYiMxahfr0L5YL7a0w%2FoThcjrCjigmIi71d3c04juL%2FQULXaFyc4z77rQjKW6F3irEPS2Nk2iCmS4kzlxV555PGJremSqtL2xqxWly0B4n%2FF3duryY&X-Amz-Signature=bb17566fc3ef3dab38c1279015d4d54b0d6b5a2d88d0dc74c687d851772c5b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPC2PQS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXRUdZ%2F0FKWlxDZBS%2F6JuwE%2Bzf9EcLgno2uZiIzxEE4gIgNH6as3f0u1eY%2FhveaCOlSeOEONIIH40eZnsObXdZCvkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLNADMTERiKT3%2BwaJSrcA%2FUZcp4Gt88J9WIED2tlksgbwxtyYS8WrpJlcRrWK7FSyqDrv%2FgYhT1vikbhF7R0fArwNipQulmMJ9TBq2kjq%2BohBEC3U%2FIcZjT7wRDMXkjsORyiFXe%2BWSCbisR4oGSBsv53efRYmb%2Bn3cq8OuWA2xIwOEXI2H39rk5IfuZcloF5se4zfqNhwjXJmXKU1nY4ACAJFo1PBzktpI%2FgTi2vW5lYyMCxVLc6wdf9Fu8uBPkdgIOh9Cu%2FVzTSWIFXPLn0BdeCJQWetFYkQmM%2F%2FKSL%2FBctlGxQHC3mL232TpCb1MpvsLZdTUUoTNVymimbOs4ea0pgLA%2B54gr3h7g%2B%2FUSRjAIAdA6hrd9ahPTKY0GP%2FT0zALYPq74SbPVb%2BkJ8epUeo%2ByRhca9bZXGfxypSV0G0QjKxR%2FSz0APPn0pGuxJpZyBkxKMOOFR2YZrmSA83ZsDBONEuImfGetVgPhyS6Db2Ie3HZtjUYWHmFhXnrKqyunfrhvVp1j9ZkFWeKJLbdkBPs%2FSv0i5VQak5edX8mwjrDyb4Ebbo4VccJzd1eZq2%2BUkR5L9paOPZyHxnwD1yiK9WWoBKMDelJBLH1mpw6G38CTVb7ghIv%2BROmBDUGALlFI87oeBoDmorQJiBQtsMJzwtsQGOqUB1ZWAPz0BGOtB9oM7sGeZoegHN1oSrBh77osknE1ZrSipkE8%2FD3ElBYyDDBazX8onuvqWpZg6hhcBr%2B%2FmaV5eBHvMNd9k5CWmuLMO79rVXMveXt5gTbUdIw60ozM1%2Be5L1R1gIO%2BWrI0SBL7zlIeHdToV1Yvr0QwpyZ9OGF8yj9FrhAez77mtUSx8RVQy3DBZ0BJnv8Q4N%2FCDzAOJcQ2%2Bb2cyucL%2F&X-Amz-Signature=924cfe88a31faa518195b9118c97563c1cbcec1bff19e42a67f14b09d62a3e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCFTVOL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPeC2pZEiZ42fmv1QQAFBJRcG89lxjp04tznjPJv0K9AIgZgSix5rC6D%2ByJGH2joalGbMuHPSQNDNJvd0rXGd56r8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD6fBTYNaQ4Nk2nBmCrcA6NgUI7b020qAKBBlYNYplssOs8dj1n5JdSunrCaZXeOfkonG7yHHtVtm5JZ9fcTN%2FlwVG48CpXoWMtgXCGY02gYmny6deFcHK4rFoYTjUaOUI8wNUjTaXdVZ3FX2E%2Fz7%2BsF%2F6RkqNOA8eU8Y8lXNQE8FMqBbWQ3CIyvSaZ01gkZ6H3k7gxET0vegbpTdwKf4rxEVaEs%2FTK26rmvZSDJ0havrqsyldf%2Fx2hlrw6meD0B2dp0MrNOwM74oOfdi43dZG0WCp12Vw%2BGQc2fshcg5G4Ghf2BCNu%2FQv1XGdYjPnhORn0UAD6oUlghymUCp6HrDIOqShJVffcRkm90n5foZM6bSdWEcAiWsu982jPp5qApDQMO9el9tP3KfhMZJsyHGvDHyeVcV3sRS55oqazLzj5aStv6vovZz48Ir8J91tbj2yvOn%2F0hGmJGKYyor1LMuoLwAG1qQmBRipU3cKH1ig1PwNfhfuHTeAMKu%2F2g4c%2Bkw5HQ8ZVJiOlD3PVI5xm6LnJYN%2B6cxcbCIG7P1cuZpIODpyGOZ23xD4nKBGImnauUcqo0ibAAIIFHNiR%2FaLE30hZwCADpnYkEmHay16OG51Nr2xVDbiDK1Hqt8Ky56xoaRezdUArbWYYhi4CDMOHvtsQGOqUBfj%2BkVskVJ5PxpC2OjpC6mxNQZcS8wjGwi%2FNolNSgIFiMZpYEbXukboz4NRthfZrGMnUYjjTCDTJ6A13pI6%2Bp%2B5Xi1kZe1FH%2F2u5UU8bkV9MdWxzSmVa%2BD8MrrbSSYSWNHaTaYRjGAnDkepakmkdzM%2BQPrQurYqR%2Bwe48Kh9sUutNcaXzUK7bKMcBCOkQcKQExeLXao7%2FxHCbuOJAjQY%2BQ72YVDwj&X-Amz-Signature=e0b28dc25fcd9599d5f43fde700b24a0d8d8f0440f9f35987056a49822dc46fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TM6C2ML%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCwbIBTSwwCOIz1mmKP3ot8u17iy8%2F3rHEDyfw%2BlVvVQIgYeO5A57eMcDocCnMjFeij%2BrPrOaDvUoTkfDUPeS%2BGc4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIoOuNVfn1H%2FSnNzyircAxMDP%2FKuOTgzQlan5SabBipQJxN6%2BdWkUPH7%2BM9CgNOu41vNjlivrwo3aBKstvzTxf5hGiWNOvElGHIkrcb9hehw8fOhiJYtWoMeC4J7lMCIVFIZivNDTvSEOCGusxfGqI1KQBpJfhHf4VPJvm70DJgKb4mIUGqs8jJV6K38o%2BNffG7QVFl4dmtYljngy0RDo7JKZcd28kBs08%2BEf0IjEZlVJa%2FuSLhfej94dL6iB9qudTfvrB98MwD49Oyy6zzWvvRUoPYCwAlU9k3em9P7ISStbG6QA2CZFrIThquyEr6oOgylgIqVNmgpw33g5ZIKS%2FMuD%2F1NpZ9qLjiERFhEjtyDaGj2f17mtsdXYyqn%2B7bRPcWcFkOaU8GZWMbXi4kxzrsuhAan99l6g0JJQgsbktCwLTNa99sPboLWJEX7SqRZF7XQsYtsC8Kb7I7yBg5CuycrnqtNtCOFAZZoLzzBKfP04bLPVjpOqC8esJNdbWDNN9M304x9Mgb96dA4NGxsVMxEmUner7dvrcE8VTkY3ZsfYg5wQ20H6nf25jGfaIFSdALY3WogrqTTRHOtgy7Z3MPgxXMF6oRAbdnBjZZAN8PSS%2BQXfIBvYIpV6B6HO3oANpyv19rouuAY%2BuOzMLrwtsQGOqUBDmN23yX7OQ634vvLz%2B0RuB%2BwiCHcCK%2Bw7lI0ZiG6PMxboMW%2B3yqcsyXe7YXbMTdcqeqNyKFQYup2pOwpe%2B28RWlVIPj%2B3fM%2BWtt%2B6xAAdYPYiMxahfr0L5YL7a0w%2FoThcjrCjigmIi71d3c04juL%2FQULXaFyc4z77rQjKW6F3irEPS2Nk2iCmS4kzlxV555PGJremSqtL2xqxWly0B4n%2FF3duryY&X-Amz-Signature=0cae59e8113b04baafaf29f3f967c7b710c7be3dfcf761e4efa229637a6d2da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
