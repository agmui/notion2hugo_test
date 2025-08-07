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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGM2YUZI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC%2BJSBk6SOXETQNKJw9Dlc6wvbtl%2F8iNG4Iq2%2B%2BsE8Z7AIhAOlFAK99SLlD9lGBJk8WghKRy9s%2FTGaREshbAtDv6ea8KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLTVMu6qNYJ1mC9xEq3AO%2B0TinvS6xdNnFzaNh1Wo0k05B%2F%2BU0qLYbvf9bxEyJVbjsszm0fhMKNL7%2F9YoGDAaRnJXSIqc7sCEWxmGxhHqjqkR3twIFaL9H05o6ynuU4drBK4chyTw3g0TUAGCYaXDDXg5k%2B4ImbKgCQnW29EMkQBMKOhAwPbOnn2znM%2BWMp8Q9Lyy5qkHW9pUOh8cmhQv5DXtSJZBch%2BPUzow26vKZVut4h8dGk3YiwAHf60siM4L0lBtDYVDI8NDTpPPJ5itis0PO4Nn50IzFe0UTuMHO81oCuq8ddgPH3DgI2CaQcOPwA%2ByVrFn2tf%2FnRnEGtCHVM2zxIARFnnc2xE1Secaf8hqpekEv%2B2RWsTiXzIEUE3necO41%2FaV20C3z%2F9J5eMIID5V%2F%2BXHqcZHvLHblXZMrOSmhcxT0oxQwjj50L0w66daBKzYqewu5KXay8JEIavTFAZtl1vDQa%2BudlGBbzsmDLAKe7Ki5wdn%2BmWfIAecqZUuv63Ob%2FKkimAYnqPTHJC0aJe3YLIyte0YgpzagP7sUbqaGKCH92Tqismwpn04RnaV1cRFOudajv%2Br3YwzMwjBzqBIrkPpy6mIiIsANZDCg20bE48gKXj5L7s%2BcAUul6b2GFLZpAyeovXn5rzCmiNLEBjqkAYCshlnceCQpYMOzUEt6ZEtzsNsKbXb4n6x1sH9a%2FaXaXXPsvNf%2BQA5Vvp9teVZUBpBaF3DCem1%2FVwt%2Bd4OOjGWx0mTBZR0KFo4hYGtrPXtseRsBLfWGcBccVCnVSbJZLxO0lGlZ%2Fjct5NsHlehmnKuBxC7Vb1TIUK0t4M2PoGmnOWdCHmSkl9wH1hg1l9wwzKZQ2yh0zDioW%2F77R%2BAD6QtDGFD%2B&X-Amz-Signature=6873adc6089662e6779f5f8377024c1cdc92ab55ea7fe423673a50745634dcbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGM2YUZI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC%2BJSBk6SOXETQNKJw9Dlc6wvbtl%2F8iNG4Iq2%2B%2BsE8Z7AIhAOlFAK99SLlD9lGBJk8WghKRy9s%2FTGaREshbAtDv6ea8KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLTVMu6qNYJ1mC9xEq3AO%2B0TinvS6xdNnFzaNh1Wo0k05B%2F%2BU0qLYbvf9bxEyJVbjsszm0fhMKNL7%2F9YoGDAaRnJXSIqc7sCEWxmGxhHqjqkR3twIFaL9H05o6ynuU4drBK4chyTw3g0TUAGCYaXDDXg5k%2B4ImbKgCQnW29EMkQBMKOhAwPbOnn2znM%2BWMp8Q9Lyy5qkHW9pUOh8cmhQv5DXtSJZBch%2BPUzow26vKZVut4h8dGk3YiwAHf60siM4L0lBtDYVDI8NDTpPPJ5itis0PO4Nn50IzFe0UTuMHO81oCuq8ddgPH3DgI2CaQcOPwA%2ByVrFn2tf%2FnRnEGtCHVM2zxIARFnnc2xE1Secaf8hqpekEv%2B2RWsTiXzIEUE3necO41%2FaV20C3z%2F9J5eMIID5V%2F%2BXHqcZHvLHblXZMrOSmhcxT0oxQwjj50L0w66daBKzYqewu5KXay8JEIavTFAZtl1vDQa%2BudlGBbzsmDLAKe7Ki5wdn%2BmWfIAecqZUuv63Ob%2FKkimAYnqPTHJC0aJe3YLIyte0YgpzagP7sUbqaGKCH92Tqismwpn04RnaV1cRFOudajv%2Br3YwzMwjBzqBIrkPpy6mIiIsANZDCg20bE48gKXj5L7s%2BcAUul6b2GFLZpAyeovXn5rzCmiNLEBjqkAYCshlnceCQpYMOzUEt6ZEtzsNsKbXb4n6x1sH9a%2FaXaXXPsvNf%2BQA5Vvp9teVZUBpBaF3DCem1%2FVwt%2Bd4OOjGWx0mTBZR0KFo4hYGtrPXtseRsBLfWGcBccVCnVSbJZLxO0lGlZ%2Fjct5NsHlehmnKuBxC7Vb1TIUK0t4M2PoGmnOWdCHmSkl9wH1hg1l9wwzKZQ2yh0zDioW%2F77R%2BAD6QtDGFD%2B&X-Amz-Signature=8dede425c564229b9908d94de0545c53deeb92c89f2af0f24a5bd21cc98d9e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGM2YUZI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC%2BJSBk6SOXETQNKJw9Dlc6wvbtl%2F8iNG4Iq2%2B%2BsE8Z7AIhAOlFAK99SLlD9lGBJk8WghKRy9s%2FTGaREshbAtDv6ea8KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLTVMu6qNYJ1mC9xEq3AO%2B0TinvS6xdNnFzaNh1Wo0k05B%2F%2BU0qLYbvf9bxEyJVbjsszm0fhMKNL7%2F9YoGDAaRnJXSIqc7sCEWxmGxhHqjqkR3twIFaL9H05o6ynuU4drBK4chyTw3g0TUAGCYaXDDXg5k%2B4ImbKgCQnW29EMkQBMKOhAwPbOnn2znM%2BWMp8Q9Lyy5qkHW9pUOh8cmhQv5DXtSJZBch%2BPUzow26vKZVut4h8dGk3YiwAHf60siM4L0lBtDYVDI8NDTpPPJ5itis0PO4Nn50IzFe0UTuMHO81oCuq8ddgPH3DgI2CaQcOPwA%2ByVrFn2tf%2FnRnEGtCHVM2zxIARFnnc2xE1Secaf8hqpekEv%2B2RWsTiXzIEUE3necO41%2FaV20C3z%2F9J5eMIID5V%2F%2BXHqcZHvLHblXZMrOSmhcxT0oxQwjj50L0w66daBKzYqewu5KXay8JEIavTFAZtl1vDQa%2BudlGBbzsmDLAKe7Ki5wdn%2BmWfIAecqZUuv63Ob%2FKkimAYnqPTHJC0aJe3YLIyte0YgpzagP7sUbqaGKCH92Tqismwpn04RnaV1cRFOudajv%2Br3YwzMwjBzqBIrkPpy6mIiIsANZDCg20bE48gKXj5L7s%2BcAUul6b2GFLZpAyeovXn5rzCmiNLEBjqkAYCshlnceCQpYMOzUEt6ZEtzsNsKbXb4n6x1sH9a%2FaXaXXPsvNf%2BQA5Vvp9teVZUBpBaF3DCem1%2FVwt%2Bd4OOjGWx0mTBZR0KFo4hYGtrPXtseRsBLfWGcBccVCnVSbJZLxO0lGlZ%2Fjct5NsHlehmnKuBxC7Vb1TIUK0t4M2PoGmnOWdCHmSkl9wH1hg1l9wwzKZQ2yh0zDioW%2F77R%2BAD6QtDGFD%2B&X-Amz-Signature=e5083c7697dd28cacd35b6933b600451fd8147d98699ef78166ecd4295d8319c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GF4DDPX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGig57O8PRxFeG8%2BDx8t1DKyxsybsOBGxbjFGzB1oVVoAiAD8lQ9XQOV397MqDuYoCBhtYMmTcZmslPvpHnaRen%2BaSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPN%2Bw2cqv5Kdxx76NKtwDP5xKmTLosgc9lniY6lhQFRHd60beQ3zbqVyqv8%2B4C%2BM%2BPv0%2FGQs075ewlH96hmKXXWogeZYCA9dCCLu24%2FLyBGyk%2BGsfBVGnXeSyHd1DdD1SQ5noQH%2FQHGiYiZJ9v51fg0bm8c5xvHNmSeJOHgEhPm24WHjUKVbKc3EY8gPI5h%2FEDc%2Fwqd4NODfQloqF2dr5dtRoYI7eYPl4zNPTClnhdxmYPWwfL5mtzVfNnRTgKWAugFqI66U7BuJDsoJJ3NsnhF5pvXqlqeWQgru%2Fa6iODRbQqwob1ccamHEGXxciSSYoj6iAO8UBL%2FhjUrCfTJMgCaHGwqFdHetWs8O0y3m%2Bawyd5ml5GITxF4KotN%2Fu%2BX7ykqzzgDr6yhJxRY4XdkMNpMvRCScT2oW3BkNTMQKSdkIb7D%2B%2FVmPvT4wRKYLmQWSQ7A%2BYfPcaMNRoeMda1gLwiFveU%2FxeqQSSUwb7t42wehwMNPJVzcZfR5Qnby6W%2BZsGZcu9wqZ8CYwc288xhnsAmYRZKoSVUjwXWvGpST8JDS%2BQOgoA0swVIcXg3PRYAco8zyzr8WL%2FkveoniwSV358m1h7Nd3sVuTsPT92XLc8tdEgGZmeAGNxzGh3DOj1vpDaVSIILRWfICNLRKgwnIjSxAY6pgG2a0e2ZDyM9YRuzX8v3E3t3RMB6fOCWVzxm%2BiZHXM4tQxONfRes6K8HA2nHE1n%2FsLX8Qx%2B15An3Ikg%2F%2Fmq%2FAzcPu5dpgo%2FHnKi2IKfvz4KVmd5Et%2BVf7uG9xK0Og8TQ2t2tGzztMgshmr8Womj6d0DH2sHBW%2BI5FV%2FiQfislmv9EHmBWh3MSvucZCZXR%2FNCLZi4C72oocRZ6sYLA%2B%2B5ydILhJoeVdh&X-Amz-Signature=936f2f03e574b865d007e5b35daa65e0546f3772a95e61711dccabc4bd7293ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJVFAC2S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCID%2BxVBchDvlKEcKmuBz7MAtXhVGyGCc8B4SPGJcOT6fgAiA%2FJmf87mN8zvxHh1k%2F7wg5LhglnfM9vRJCkgb%2FhMQSYCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp0LJTJUZ4C8iGVcJKtwD1VKD%2B7ASCdyEcfrQ2nRFnkoVKiSjIkvTutMejsaBr803yLD9XvFOLOdns8ciBrkRbm3%2Ftw%2FrI%2FySiOq2817r8loA%2FkqECMtJXpe8X%2FmFVxxf13kAIzWLVjR6AQGA9xxiQ%2B9DC43Gq64Oi86IF%2FrGZ%2F0HWYJ9BvRvl%2BIdSuLkvb7yoi5qej1cd9REtB8KDpeby7%2FLyEfi9x4gz%2FrjDhexfsmWJpF8e5niJUifVUGj%2Fz4SY3T9DtLiQbXJLC9nhK0fWxvZr%2BHtFd9plQTs3s5qfUkqRPqom4FCEn0dfWJX9g1Jvv7MBRxYGEkyump19o%2B6738OWraWLb8232DhlbirT98IG9U57NZxIBSRCz22NB%2BogR52Af%2Fp6c1SJZYTbJYFAyxW3jFDGms7KLGTYjig5yVgia3EMx2rQfbg2NlNaykl63Uh2wA4LO4SopKnYUMXHz6MJRj0vHZZLzHCIA2wcP06ddPLRcvWqUrghBSE48nJFHNQ99vO631EwqTreOlfJ4bEL9BC%2FfUo%2BlxX%2FrzR0iRQ%2BxhW1fKXCt%2FjFed4QkWaa5BkmOY8MxopmjSlt945pIr2E8Ld%2F86sZb01HQX%2BvkpaSZPY2VxrqGRW5E3RIqx9fty56i19vaSa0LEw0IfSxAY6pgFE1pFMKO%2F8FC8ZFIVk6dBQnFZ0I%2BEA6mJIr%2FIxdgWR201DXqsttuRS187MnnW9uiBlpW6t9wfKoZCLt0EOT22zy6xzPlNbg9%2FSwRm%2BuEz0XomC0QxayD3lCIATx60rWWBvlPEALJ71wpdeLvcJgR2fY8u8PlNeEgIYq0Sq2zqN2w77yqLoZlN0hAfdG%2BAZlaHT7g%2BP51ewgRzOnqUdfnxtuq3Dfu4%2B&X-Amz-Signature=c92b5e5f37ab2a35e1484016e2af4b38077c8c609af8fc55900b26aec59f46bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGM2YUZI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC%2BJSBk6SOXETQNKJw9Dlc6wvbtl%2F8iNG4Iq2%2B%2BsE8Z7AIhAOlFAK99SLlD9lGBJk8WghKRy9s%2FTGaREshbAtDv6ea8KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLTVMu6qNYJ1mC9xEq3AO%2B0TinvS6xdNnFzaNh1Wo0k05B%2F%2BU0qLYbvf9bxEyJVbjsszm0fhMKNL7%2F9YoGDAaRnJXSIqc7sCEWxmGxhHqjqkR3twIFaL9H05o6ynuU4drBK4chyTw3g0TUAGCYaXDDXg5k%2B4ImbKgCQnW29EMkQBMKOhAwPbOnn2znM%2BWMp8Q9Lyy5qkHW9pUOh8cmhQv5DXtSJZBch%2BPUzow26vKZVut4h8dGk3YiwAHf60siM4L0lBtDYVDI8NDTpPPJ5itis0PO4Nn50IzFe0UTuMHO81oCuq8ddgPH3DgI2CaQcOPwA%2ByVrFn2tf%2FnRnEGtCHVM2zxIARFnnc2xE1Secaf8hqpekEv%2B2RWsTiXzIEUE3necO41%2FaV20C3z%2F9J5eMIID5V%2F%2BXHqcZHvLHblXZMrOSmhcxT0oxQwjj50L0w66daBKzYqewu5KXay8JEIavTFAZtl1vDQa%2BudlGBbzsmDLAKe7Ki5wdn%2BmWfIAecqZUuv63Ob%2FKkimAYnqPTHJC0aJe3YLIyte0YgpzagP7sUbqaGKCH92Tqismwpn04RnaV1cRFOudajv%2Br3YwzMwjBzqBIrkPpy6mIiIsANZDCg20bE48gKXj5L7s%2BcAUul6b2GFLZpAyeovXn5rzCmiNLEBjqkAYCshlnceCQpYMOzUEt6ZEtzsNsKbXb4n6x1sH9a%2FaXaXXPsvNf%2BQA5Vvp9teVZUBpBaF3DCem1%2FVwt%2Bd4OOjGWx0mTBZR0KFo4hYGtrPXtseRsBLfWGcBccVCnVSbJZLxO0lGlZ%2Fjct5NsHlehmnKuBxC7Vb1TIUK0t4M2PoGmnOWdCHmSkl9wH1hg1l9wwzKZQ2yh0zDioW%2F77R%2BAD6QtDGFD%2B&X-Amz-Signature=3863c5343a51d24ccea675cc6d5928215e7a47fb9d0df7c26b44daee2395488c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
