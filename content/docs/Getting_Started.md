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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XEGZNCZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC57odBKueJk8%2FtVVEbGvsvi%2BgME2cNvLFeT1SFN0MsCgIhAN6RlVZe7dYgVSVSDiGcomeb8EJsn5ERIBN164xFZdXAKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY3DjH5T1EJbNHBOMq3APJJ3qlVgDKeVKvecmuuzc8bNE0vP%2BmNl96H2iMGToo5hZahYx2j7GJ0NvEWFdvmc0BCmlTu6v5Q3bhjpDU3ipu9EXmyl7t91zeDcaLbohnnJOBTga3TwG6F%2FqPmm9TzpnGhnV0XR9II5Lvi28MkHB3mvzi2PNquQiGXiEoOQ5%2BYJL3z2Ds94J75hrf9RVnEVxFE0jaAAHmtm1h99pqM0AgwOF8SRxEBCtZOfh0%2FIGO5X4SaAJQJA5VrE%2F8hcgqMYjBFpveU3YbS%2BY8hDUGf2DTlrbpA%2Fqn93Rvfg6tqC4C29V%2F1vHzJjeKBMLHGzcB5%2B5%2BezylCAjN9%2BWpFjJ5fzskRS45RfvdFuFbn7vh36gCM2ftOBTD6n2XmNo%2FeufRLCQkq9%2FBCvoexUlDyzhjv14R%2FVdJ6zHZUdJQSq3v%2Ff3zyconWp24YXUzllVtoMuRGtg7A4Dl5QSsTt2KkiyVxl0Vdzu9IIVFo%2BmY%2FfGOc%2Bi4FyUKYvgTX%2FKhoinUnLHJtKqCUc5kudR%2BCMnbuRCqc7xAIFs7DPrOF9ArJIDAAFTKh7bMZdkX3PJjdIBGgV6wo3544XL70X6LEwUJProzAd6h6CiBtw7PewO64ndAj4%2BwTxKI8bk%2BIBPmGPBEYDCtxfC%2BBjqkAbeBKq2IxjScrZGqxP%2BXzv1ykAQwfU6ACj1HwMPQwH3V8ll5fC3WTR3gQH4nXPqrMXOE6yNbkNl0Zn98NcJ%2Fsz46gQFkEPOvXqhIE1Cmd7hXcONVSyOekXZUQI1PgjT0bCdKKF9wt1nDhIWVf8BfE7jHrWJoGScmJOh8nF4qBHnQXx8jK6VTv6Su9wYdf9hMlhf2gYcX4OijToJcoEeqJ4ijVklC&X-Amz-Signature=927fc14484e932bb643cbf7c63d4028f5b1b327c7f81ddb794baa2f722772a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XEGZNCZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC57odBKueJk8%2FtVVEbGvsvi%2BgME2cNvLFeT1SFN0MsCgIhAN6RlVZe7dYgVSVSDiGcomeb8EJsn5ERIBN164xFZdXAKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY3DjH5T1EJbNHBOMq3APJJ3qlVgDKeVKvecmuuzc8bNE0vP%2BmNl96H2iMGToo5hZahYx2j7GJ0NvEWFdvmc0BCmlTu6v5Q3bhjpDU3ipu9EXmyl7t91zeDcaLbohnnJOBTga3TwG6F%2FqPmm9TzpnGhnV0XR9II5Lvi28MkHB3mvzi2PNquQiGXiEoOQ5%2BYJL3z2Ds94J75hrf9RVnEVxFE0jaAAHmtm1h99pqM0AgwOF8SRxEBCtZOfh0%2FIGO5X4SaAJQJA5VrE%2F8hcgqMYjBFpveU3YbS%2BY8hDUGf2DTlrbpA%2Fqn93Rvfg6tqC4C29V%2F1vHzJjeKBMLHGzcB5%2B5%2BezylCAjN9%2BWpFjJ5fzskRS45RfvdFuFbn7vh36gCM2ftOBTD6n2XmNo%2FeufRLCQkq9%2FBCvoexUlDyzhjv14R%2FVdJ6zHZUdJQSq3v%2Ff3zyconWp24YXUzllVtoMuRGtg7A4Dl5QSsTt2KkiyVxl0Vdzu9IIVFo%2BmY%2FfGOc%2Bi4FyUKYvgTX%2FKhoinUnLHJtKqCUc5kudR%2BCMnbuRCqc7xAIFs7DPrOF9ArJIDAAFTKh7bMZdkX3PJjdIBGgV6wo3544XL70X6LEwUJProzAd6h6CiBtw7PewO64ndAj4%2BwTxKI8bk%2BIBPmGPBEYDCtxfC%2BBjqkAbeBKq2IxjScrZGqxP%2BXzv1ykAQwfU6ACj1HwMPQwH3V8ll5fC3WTR3gQH4nXPqrMXOE6yNbkNl0Zn98NcJ%2Fsz46gQFkEPOvXqhIE1Cmd7hXcONVSyOekXZUQI1PgjT0bCdKKF9wt1nDhIWVf8BfE7jHrWJoGScmJOh8nF4qBHnQXx8jK6VTv6Su9wYdf9hMlhf2gYcX4OijToJcoEeqJ4ijVklC&X-Amz-Signature=005e3b2b01b421b0e6b421247d8715c4e48ffa852847f881e65c035bbf704f80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIFVI5H%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFD%2BzgVg1%2FZ0lZrKXTmzOvXHL1Wj46HclvpTJB30H1fAAiA2Vc26yzBKMPGNyU1OuuQZuVWE1wmC5bDUBjFViLUkbSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkENPuCZ0DIOaq2v7KtwDIQ%2B1HhtN8YjasZ11QuBZQJScRDdVEGcDk6jaMUwBwdXELx8EBhHN5DN5lvFNhrRUdBWS7r%2FnqJ4qop6CePRZZ%2FBErUd8QNSVzNLqZT1dLc8oSSVZuMegMuWb9C8Sg9h340WQOKEdNl0Bagjgybed%2FjBk%2FlVyzx%2FIEf26R7NTpxGWsvgeCHizcsr3EZ2VNAzNiJ610PqZXUZfo%2Bjigyu07s2o1w8JUzMqwFTlrQUuHslvTD6TSwziRaLYiL69gBdpmvD5IrTH0XA03a8zTzAX1pDs8OcP%2FTLpANTCePGb3HJUAOWuPv1OpxZJROjGg2VuH3vm63HERFkrynnwvIwpS0sK8RWl0Hqgoe%2BaZ%2FQkBnInY5uR5qBDm1cK5oqn5ovVEXjllY%2B%2B4vvG%2B3%2Bn8HTN2ZQUKtM8jOOWkCAzotNQI4xUUqH4Q%2BwEdv3U6AB4FZjnBKaoX3IRzHajmQNjNBvEdus3SZoeElHJnEzUjNHe2esnv85rzHojIlRhjSGuVbUFIobeC4hrivUujivQs1qb8Ftvzofc8nZo2mxDnHAIqqRG28YWC8pyH%2BinqjLXsNP%2F3xZCMIacjo8kjYYgwxP6J%2BAohRRV8dEFTaVLv2YgL2TcpPtVmWyOT5TqSnQwt8TwvgY6pgFFSwqz2QyYq%2BzMcHVSg74zeb8UJcEwPvwyNz5rhWyTczAuOCQeuNBciFm%2Bih6IKgQD83WQPO4idClLBJlmLCr1xZa3VxfCbzfnuLZ7ptmNxo1XqjHK0h52QuM8kBL6qqUaMstWyS7rl2BELkE5IQmjV%2BBnlkLzAL%2FAXPIxYu%2FFycxiMFNMjvXIIv52OxcMAok%2FGX04LBeLi07zN8CS4LMxmiovg0q9&X-Amz-Signature=afefec79126c5fb37a1ed5fae0fbb5dd80d96d9ac84bc6df75f95f928195b079&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDIANE5H%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDSgVcGqVGGaV7SCsZJ9pwmyT7jhsHTirgATTfmAhdcLAIhAIs4pE8VwBKATkuD2H4639Dht4Aufol%2BQmw2ZHA9VKEsKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZtFZDMj4EVnjSh3Aq3AMvHZOQQhZ4wBixS6pbe3CZ8XIQlHalfbnN%2BuAPNh3fo3dst9MXnsHqvnXXeXhLX21pgGXSPmIv9Y7bc6%2B6lZufwumfGRL9ekvViP7uq%2B6hSyzcUr9D7pk1cE4ZBnPNZXj0pv6Ln6tEkptgtLDLwki5VWirz206a%2FJ%2FLGeGslgz1XwbPalwhIVH9f91eJmrAASHYUwkrrKBj%2FuSLL%2FWxmPctP3M6Lrti6FSYng96m7FoyUyIImRCTBkNT0T532D9VrwylEPb8zlbhQMBK%2BW1KjG15MLAGf622YYfChROqW9PClngspjiodpgLcqswcbBA%2B5hW%2BErKefVPB6VfivPJdzNownAN%2B7JFlcUR03j2LQnYPwebRGnjb%2BOR9r4J1Yg0HD%2BbN2R7Lga3%2F1kRihhjrpTKHsump%2BR3OalDChb%2F7ZZjAiccXTCDKVCnz4gJZzMpO16%2BwVX9BMSyHwaUSb8FkEOUFc9UHQpAJYFAiWD8Oy6NkVe2MFP4BoExMKdsmc0mvzSF5cNgbCeepU4pRHt9OSC0EFLVD0gpLPZxA%2Bae%2FARj1GZwHXfBeX9%2FTdT8kMgOUmIunR0UPQvDClagiGuMyBDPizSbkVjlpqB4UF0dAv0ipLoBo2oNk12oLaRTDBxfC%2BBjqkAUu8vwmnUa4JiN4zcbZ9HMIWmip6qAa9bpEhRNeC%2BlfXlV5zNIX1NOHXpCFtfoG7XaolnadR%2BmLGHHJp2dT%2FxerhaBNulcBjk%2BtOKqoStPLAtBKGAm%2B1pwZFJIcyqWqDi03zMg2kMG54%2BduieFz%2BSoq1f0LC5JLZZbUA%2FD96ukvGTaKSDRCeB1%2BU3%2BHOvne8Lz880054ZjfjfJ2WN%2BCjjDG8XeEN&X-Amz-Signature=58bd846d7c1c92215bd755126f9809fe2ac458c9618649c75abf7474c2950f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XEGZNCZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC57odBKueJk8%2FtVVEbGvsvi%2BgME2cNvLFeT1SFN0MsCgIhAN6RlVZe7dYgVSVSDiGcomeb8EJsn5ERIBN164xFZdXAKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY3DjH5T1EJbNHBOMq3APJJ3qlVgDKeVKvecmuuzc8bNE0vP%2BmNl96H2iMGToo5hZahYx2j7GJ0NvEWFdvmc0BCmlTu6v5Q3bhjpDU3ipu9EXmyl7t91zeDcaLbohnnJOBTga3TwG6F%2FqPmm9TzpnGhnV0XR9II5Lvi28MkHB3mvzi2PNquQiGXiEoOQ5%2BYJL3z2Ds94J75hrf9RVnEVxFE0jaAAHmtm1h99pqM0AgwOF8SRxEBCtZOfh0%2FIGO5X4SaAJQJA5VrE%2F8hcgqMYjBFpveU3YbS%2BY8hDUGf2DTlrbpA%2Fqn93Rvfg6tqC4C29V%2F1vHzJjeKBMLHGzcB5%2B5%2BezylCAjN9%2BWpFjJ5fzskRS45RfvdFuFbn7vh36gCM2ftOBTD6n2XmNo%2FeufRLCQkq9%2FBCvoexUlDyzhjv14R%2FVdJ6zHZUdJQSq3v%2Ff3zyconWp24YXUzllVtoMuRGtg7A4Dl5QSsTt2KkiyVxl0Vdzu9IIVFo%2BmY%2FfGOc%2Bi4FyUKYvgTX%2FKhoinUnLHJtKqCUc5kudR%2BCMnbuRCqc7xAIFs7DPrOF9ArJIDAAFTKh7bMZdkX3PJjdIBGgV6wo3544XL70X6LEwUJProzAd6h6CiBtw7PewO64ndAj4%2BwTxKI8bk%2BIBPmGPBEYDCtxfC%2BBjqkAbeBKq2IxjScrZGqxP%2BXzv1ykAQwfU6ACj1HwMPQwH3V8ll5fC3WTR3gQH4nXPqrMXOE6yNbkNl0Zn98NcJ%2Fsz46gQFkEPOvXqhIE1Cmd7hXcONVSyOekXZUQI1PgjT0bCdKKF9wt1nDhIWVf8BfE7jHrWJoGScmJOh8nF4qBHnQXx8jK6VTv6Su9wYdf9hMlhf2gYcX4OijToJcoEeqJ4ijVklC&X-Amz-Signature=cc15f6a5235c7375b598d16f4a73a7cbb2b5109a1a73ac047456806cc5ee80a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
