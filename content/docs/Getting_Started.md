---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676CJ32PA%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBLBa8KW%2BpOnVX9BqZCcMG3458QuJox%2BBg4Y676o0Nd3AiEA9SamOyI9%2B0LnYMZ22GOXT1%2BtYmZdk9ruKcGneYKpDo4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7BNcOPcrdOuEF6gircA3TSyUt%2FZjwehpK7SmDGSFhes2%2FHCKO%2BGV%2BtDYAH7CQeBonlaWshJqJQVafw%2BwE7mdrGjplD5krFuViGTpPxx0pNcoZXw0D4ABsuaM8Bj7elekSvTx%2Bp%2FbTE1Q07mDTSynTLG0ChtdWODPtNQ4x9B%2BTHoSy9U5y7kmGae4h1jchTDwkT%2FFnOKP0tUrYyjTH0MJzgDF%2FvFsF3%2BKrJTr9Zd%2B08B%2B1nWxuw5SSXwohkc36%2F%2BfMbsC7a9RIf0yJWoNNdW%2B%2BYO7IPjbYr2qLpDTYgvUjVVP375BwAPy93Ko9Gl3h%2FJBlqmmMUjNX7OYynycTE9xhUQA83qH%2FKJ57b%2F%2FTS2owIWN9NzNTl%2B8iVxtVkeYcdLFH8H3zuvDSAsHFUgblBhrN3ZH5DQBkh03%2BcDbS85VS0PE7EMaJG%2FDBAqlLJzESUMzA6T9EiLpDOYKYpFg%2BS4Don4CGfSppDKjmQN%2BO%2FtT%2F4QifWyMc5DR5gwrwnA5r3pzfqgqZfnkfqEk7j3aj2GnwkjdlxFAGOX4Nac70csrK6L3BdIj1FRz03%2FU8wSbc2rKVYcksqGrXKmu96fIyO1zFDUlfmpB0o6c0cF6BOslxr8z%2BGsF4ERtuWBm5WJ5FwMLOBXDpRSaF0eMJYMKDprc0GOqUB%2FfWQwBgwETKbXzYmJFWpiEkYu7b4hjNmFELKqGKy6vuEjo0MVzEX0onV%2FSFLN4cbli64ttLQff%2BEAVQqKplfky0JOj3IwdtpHug%2FcHV8ZkmF0NB4dXHkaFAZtOh3FUkcge7wFFSoxnBH6WAXt0qR6ZRfafEH48%2Bj02Pb%2BkvWE30aJI0euMlEFG%2BbzNkpOrRJ5ugB199zLJYuojmKJ4XOMHfEqTuo&X-Amz-Signature=888faaaa41207a949ae2834f959b20fe5de588d43458ecaaa5f0527a40c4921e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676CJ32PA%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBLBa8KW%2BpOnVX9BqZCcMG3458QuJox%2BBg4Y676o0Nd3AiEA9SamOyI9%2B0LnYMZ22GOXT1%2BtYmZdk9ruKcGneYKpDo4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7BNcOPcrdOuEF6gircA3TSyUt%2FZjwehpK7SmDGSFhes2%2FHCKO%2BGV%2BtDYAH7CQeBonlaWshJqJQVafw%2BwE7mdrGjplD5krFuViGTpPxx0pNcoZXw0D4ABsuaM8Bj7elekSvTx%2Bp%2FbTE1Q07mDTSynTLG0ChtdWODPtNQ4x9B%2BTHoSy9U5y7kmGae4h1jchTDwkT%2FFnOKP0tUrYyjTH0MJzgDF%2FvFsF3%2BKrJTr9Zd%2B08B%2B1nWxuw5SSXwohkc36%2F%2BfMbsC7a9RIf0yJWoNNdW%2B%2BYO7IPjbYr2qLpDTYgvUjVVP375BwAPy93Ko9Gl3h%2FJBlqmmMUjNX7OYynycTE9xhUQA83qH%2FKJ57b%2F%2FTS2owIWN9NzNTl%2B8iVxtVkeYcdLFH8H3zuvDSAsHFUgblBhrN3ZH5DQBkh03%2BcDbS85VS0PE7EMaJG%2FDBAqlLJzESUMzA6T9EiLpDOYKYpFg%2BS4Don4CGfSppDKjmQN%2BO%2FtT%2F4QifWyMc5DR5gwrwnA5r3pzfqgqZfnkfqEk7j3aj2GnwkjdlxFAGOX4Nac70csrK6L3BdIj1FRz03%2FU8wSbc2rKVYcksqGrXKmu96fIyO1zFDUlfmpB0o6c0cF6BOslxr8z%2BGsF4ERtuWBm5WJ5FwMLOBXDpRSaF0eMJYMKDprc0GOqUB%2FfWQwBgwETKbXzYmJFWpiEkYu7b4hjNmFELKqGKy6vuEjo0MVzEX0onV%2FSFLN4cbli64ttLQff%2BEAVQqKplfky0JOj3IwdtpHug%2FcHV8ZkmF0NB4dXHkaFAZtOh3FUkcge7wFFSoxnBH6WAXt0qR6ZRfafEH48%2Bj02Pb%2BkvWE30aJI0euMlEFG%2BbzNkpOrRJ5ugB199zLJYuojmKJ4XOMHfEqTuo&X-Amz-Signature=b75ea3f353537662ce1944b82ec3fd88a95b5ed55a1fe12ed198f246fc3f3df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676CJ32PA%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBLBa8KW%2BpOnVX9BqZCcMG3458QuJox%2BBg4Y676o0Nd3AiEA9SamOyI9%2B0LnYMZ22GOXT1%2BtYmZdk9ruKcGneYKpDo4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7BNcOPcrdOuEF6gircA3TSyUt%2FZjwehpK7SmDGSFhes2%2FHCKO%2BGV%2BtDYAH7CQeBonlaWshJqJQVafw%2BwE7mdrGjplD5krFuViGTpPxx0pNcoZXw0D4ABsuaM8Bj7elekSvTx%2Bp%2FbTE1Q07mDTSynTLG0ChtdWODPtNQ4x9B%2BTHoSy9U5y7kmGae4h1jchTDwkT%2FFnOKP0tUrYyjTH0MJzgDF%2FvFsF3%2BKrJTr9Zd%2B08B%2B1nWxuw5SSXwohkc36%2F%2BfMbsC7a9RIf0yJWoNNdW%2B%2BYO7IPjbYr2qLpDTYgvUjVVP375BwAPy93Ko9Gl3h%2FJBlqmmMUjNX7OYynycTE9xhUQA83qH%2FKJ57b%2F%2FTS2owIWN9NzNTl%2B8iVxtVkeYcdLFH8H3zuvDSAsHFUgblBhrN3ZH5DQBkh03%2BcDbS85VS0PE7EMaJG%2FDBAqlLJzESUMzA6T9EiLpDOYKYpFg%2BS4Don4CGfSppDKjmQN%2BO%2FtT%2F4QifWyMc5DR5gwrwnA5r3pzfqgqZfnkfqEk7j3aj2GnwkjdlxFAGOX4Nac70csrK6L3BdIj1FRz03%2FU8wSbc2rKVYcksqGrXKmu96fIyO1zFDUlfmpB0o6c0cF6BOslxr8z%2BGsF4ERtuWBm5WJ5FwMLOBXDpRSaF0eMJYMKDprc0GOqUB%2FfWQwBgwETKbXzYmJFWpiEkYu7b4hjNmFELKqGKy6vuEjo0MVzEX0onV%2FSFLN4cbli64ttLQff%2BEAVQqKplfky0JOj3IwdtpHug%2FcHV8ZkmF0NB4dXHkaFAZtOh3FUkcge7wFFSoxnBH6WAXt0qR6ZRfafEH48%2Bj02Pb%2BkvWE30aJI0euMlEFG%2BbzNkpOrRJ5ugB199zLJYuojmKJ4XOMHfEqTuo&X-Amz-Signature=d0630005d57db954889502f1d0cf24b5f1343e002b49cdd83f3880daec593ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXL3JCZV%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDsojzS58VKYuhEGB5%2FBdhemxdES9pY4PIRLunqs8bDAwIhAIwV1r1EuyGfL0ZH3G%2FHlcRUY1KibKypveQQ1PduTRiWKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4X7cN%2F7Q%2FWQQzT4kq3APapAbcJzTNNI22BytNG7yfr8WVlYbOCpTnhoOJiJIV2YvY6dtVDr55BEFauaskCJ9hDm1DVLRxbr%2FR%2BigbSA3tot5d1utZLYoqLeMhVjT3T4fSVcZl%2BHBAcZm4KKhbzuEgRUwg0EJN%2FqntatxS%2BddsM4n62LbEkp1%2FfTA2eoW4m%2BDj6pdF8UK4IrpwrFQr7hfdjz9IJxOD7XtU9UB25HSzGYnkDkW%2F1z%2BnOahQ4iwr76bdyo2zf5OW%2BuQXRZ%2BeCxnP34Mk%2FwZ%2BHOpBFT42MGbNyTecTRVclNcUD16eGtSFkkk4iK%2FyXgsHGmRCjxJ2sSZKr94va8XfnImJ%2FI%2Br%2FY2xoUOpo46hkEWJo%2B%2BTcL6mIIvpPQlQfQYNtgViOdfSi1uYohaqoPeROpXQi02NhesxR5AvESGTFzVpj0XxRUj%2BRESNyB8D3bUBcQ6fQVoqG0hK8zG%2F0jEtCcAn291Bpqtfgqkfz7V7mQMUov1A%2FN6rfb0M1K3LFIhIgx4rAf8xitXMpZVClrYrr4oiDT%2BQZECDxF3C5h%2FsIHX4jUzx587zxufBlbj71vXBJhSE3%2FYGsQtJZP75MwG8mwaTt5%2BJfjf%2FwajK2IVjMSvYMxc4DLsbifCEumvcbF1cPfZI9zDX6K3NBjqkAfi5nVQSGe4e703TPrF8V2jE2e5f%2FzhahEVMO0x0%2FRyke4r2KWqHUS%2BffAI0us%2BCdHuEfjrRwHuswMmmRg5DrL36iOgrcndqHkWgI5U8n81n2sralQ8hy7WZXTzAJaHpv8gLsoVrDpTK%2BvrNyyjSLrfHkifrBQnVYrBLAYagSrNFc%2BIn8vrTFBs9wPAMFk8VkqbS1ZdwarHIIqFuNZCRW1Pgobpb&X-Amz-Signature=dd4e2746e384da22e8e724f5fc3dafd533623eb29aefdd6922d66e0db448e032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQWOCT3I%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCn35yQs9hGtqQV6cO45yCxhwJROmC0X3eYpu5OAmEKMQIgT7rf%2FXqA8jlL%2F65g8K8tiLAZHIpnwsiT7oTfceZrKQcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmofNFyx6lPU25gnircA%2BHpYfHFHoyYGg5NLIfu25R9fIpygMy1qjuY3U2Gsje2V7pY%2FFT1cJj9nz9siotsoCLKhA%2BnTE8O580hxRU87CmCmI4437R%2B%2FHI%2B4lUauwEu2i2JCrRwX4HXkX1jdc78iBsbe0xud4eqjsC1KqJQCnFQi%2B9zG1L0dKbo97kiEeBC8qGd1LPnXNLaZPruBtPSt%2FqPyBFcoA4CGE4vVv6ycqbHjpXV1G%2FormG5ApkcFzHW2Inju7wDcVG0BqWvGcFxurMglK7%2BcBm%2FROnl9LsnmKM4VeI5HVZ6ieyIxcuEUooNK%2FBjOxc6l20pRWxLoOsBHsep85oT8nfuetOVstgBCQd7UrHG96e0uelQqotMcvThxrZqhsgU19mr4Q3te89Vy8sOqi2CwWv0ONebPofGVAH8U%2Fiw9liBHKp7XOme3KD3F28xPtoMxSRedgDaitlyP%2B1E2sN8F70o97Y2ZF9qBZK%2FzamHcVMNIFVolj84hWNw0d91234ZsS7ZGwVqT0yFH%2FPP0rZ48gQnDA8LTTreAW7bkOFs1A1mS%2B3kNIIq7mYKE1Z2qwTgroBcSlL%2BWKKAACDSv7P9oUtup971McWiNrER5%2BMfmALmJZWQo%2BEyGIQ8qgVFPeHyjGkyZEvuMNborc0GOqUBk4Iryga3knQPCuiIDPSVLEKFyJP%2FnWQWh97GDEQYONI1weWLCQmm4mq7JG8QNsSWCgCMf5mqQaV094FqgiFrlLTT5CRW6c5uXkNBhcuUbqL3Sp1VS%2Bs0vmz1IBHk8Oao9Ruh7pszjkCiJl0E4A7z1YPsUGcdX1fse2wK6rAi8JF446I1AIVw3Cw%2F7FHo7rbuADFCU8F3hXQk7JLi7bd%2FtSzpxBFX&X-Amz-Signature=dc428c62987875393578f0f948c11bd78d2583d5ad914e14b147fd04c6924a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676CJ32PA%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBLBa8KW%2BpOnVX9BqZCcMG3458QuJox%2BBg4Y676o0Nd3AiEA9SamOyI9%2B0LnYMZ22GOXT1%2BtYmZdk9ruKcGneYKpDo4qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7BNcOPcrdOuEF6gircA3TSyUt%2FZjwehpK7SmDGSFhes2%2FHCKO%2BGV%2BtDYAH7CQeBonlaWshJqJQVafw%2BwE7mdrGjplD5krFuViGTpPxx0pNcoZXw0D4ABsuaM8Bj7elekSvTx%2Bp%2FbTE1Q07mDTSynTLG0ChtdWODPtNQ4x9B%2BTHoSy9U5y7kmGae4h1jchTDwkT%2FFnOKP0tUrYyjTH0MJzgDF%2FvFsF3%2BKrJTr9Zd%2B08B%2B1nWxuw5SSXwohkc36%2F%2BfMbsC7a9RIf0yJWoNNdW%2B%2BYO7IPjbYr2qLpDTYgvUjVVP375BwAPy93Ko9Gl3h%2FJBlqmmMUjNX7OYynycTE9xhUQA83qH%2FKJ57b%2F%2FTS2owIWN9NzNTl%2B8iVxtVkeYcdLFH8H3zuvDSAsHFUgblBhrN3ZH5DQBkh03%2BcDbS85VS0PE7EMaJG%2FDBAqlLJzESUMzA6T9EiLpDOYKYpFg%2BS4Don4CGfSppDKjmQN%2BO%2FtT%2F4QifWyMc5DR5gwrwnA5r3pzfqgqZfnkfqEk7j3aj2GnwkjdlxFAGOX4Nac70csrK6L3BdIj1FRz03%2FU8wSbc2rKVYcksqGrXKmu96fIyO1zFDUlfmpB0o6c0cF6BOslxr8z%2BGsF4ERtuWBm5WJ5FwMLOBXDpRSaF0eMJYMKDprc0GOqUB%2FfWQwBgwETKbXzYmJFWpiEkYu7b4hjNmFELKqGKy6vuEjo0MVzEX0onV%2FSFLN4cbli64ttLQff%2BEAVQqKplfky0JOj3IwdtpHug%2FcHV8ZkmF0NB4dXHkaFAZtOh3FUkcge7wFFSoxnBH6WAXt0qR6ZRfafEH48%2Bj02Pb%2BkvWE30aJI0euMlEFG%2BbzNkpOrRJ5ugB199zLJYuojmKJ4XOMHfEqTuo&X-Amz-Signature=1da340666a0b626929bbaa1ad05a151c57b954c43fb52945ffb0695b8a054efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
