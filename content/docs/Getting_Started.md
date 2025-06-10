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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMIYHTHE%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9xL%2FyRjC8ySG%2FNpWsSETh7aRrB9mnJ45ervu5QosjUAiBuH389ZWu0pclQSZAw2Pqj5Ui%2B1jeR7zovlhUhPM6YXCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMov9emnWV5yXU4904KtwDKZCiQGE9QuBxjLTqmWu5OC%2FTYRr%2BOMGfIJNfRH%2BwQH0WOJnlMuH9C%2FQ4jONR7IeKu5MsMGJHO971JV3GE09lOaWYClLINx1YmR3QLBaKb%2BrEESyr0LhUdPy9KKxsbTPmDgzFb8CRnOj2Eube6PRkl%2F7%2BvNKgXK8pJpCW7YWM6Sh7jIk4%2B%2BcFthlRc54knM1hHaC4UVTL3fIMy1ZgRxhOqtyoPz4FwMmU%2BnOBAn5a%2F1umQBI8nYpuWi5Ozkbo6u0CA58wx8jrROw3fynOWQr88TuFqhj%2FiCavOY39XRVx4FSU1HAdQeSu83EB%2B1nurSoeJfr9o%2Bxb7y%2FKZQg%2FzIGXCrP0VMyaXLCnz8FMwKMm43EIq%2FGhMZqRomsgbgo5A2EejqkRU0V%2B6f1iCjfw9QvxbcZVPg0dgYLl%2ByGuf5uis2tMoRkbCcEiiarXOPTyDx1MXfwyH5dWmKWkkjSMXf8ef%2B6yw1A%2F%2FmiM8xUefbAGqUaeFZcWKiisK9AlvrYU2sOTe9A73lDag23q6zS5BBnkb5nsrIy59Oc70izaH%2Faq%2BdOjQAtt0YZjis2658fn9EP4rcRff61%2FsNB6OFqSxuFQymCKrBCSN5%2Ba4YxM0xymB05yHw8bccwuISlVCvIwrr6gwgY6pgFixEjpuP8S8L%2BOJEJuJREAZ5Uc4lZKcZozgkG%2FE3Om0QCKcrPprT7gSIkhF9ej0Ex5pRZ2qXkwbqBBsDlPStsxg4N6jfzt2vXJ3tJ%2FIAjc3fFFxSHq3GPKa3Th3CV1sjwxSlafdFmyxwHTLFOTAW%2BqGjhV8cC8CO%2BqA3m913MNphh0RdQFcxHBxDJBQPjLlzBaNcFBl%2FTTAKLrn7yJC%2BoDrOk7IoAa&X-Amz-Signature=c0c6a43c6c6abf48c50fcfad4f1cb7f518e12c8611cb0d5fa929a5d5533644c7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMIYHTHE%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9xL%2FyRjC8ySG%2FNpWsSETh7aRrB9mnJ45ervu5QosjUAiBuH389ZWu0pclQSZAw2Pqj5Ui%2B1jeR7zovlhUhPM6YXCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMov9emnWV5yXU4904KtwDKZCiQGE9QuBxjLTqmWu5OC%2FTYRr%2BOMGfIJNfRH%2BwQH0WOJnlMuH9C%2FQ4jONR7IeKu5MsMGJHO971JV3GE09lOaWYClLINx1YmR3QLBaKb%2BrEESyr0LhUdPy9KKxsbTPmDgzFb8CRnOj2Eube6PRkl%2F7%2BvNKgXK8pJpCW7YWM6Sh7jIk4%2B%2BcFthlRc54knM1hHaC4UVTL3fIMy1ZgRxhOqtyoPz4FwMmU%2BnOBAn5a%2F1umQBI8nYpuWi5Ozkbo6u0CA58wx8jrROw3fynOWQr88TuFqhj%2FiCavOY39XRVx4FSU1HAdQeSu83EB%2B1nurSoeJfr9o%2Bxb7y%2FKZQg%2FzIGXCrP0VMyaXLCnz8FMwKMm43EIq%2FGhMZqRomsgbgo5A2EejqkRU0V%2B6f1iCjfw9QvxbcZVPg0dgYLl%2ByGuf5uis2tMoRkbCcEiiarXOPTyDx1MXfwyH5dWmKWkkjSMXf8ef%2B6yw1A%2F%2FmiM8xUefbAGqUaeFZcWKiisK9AlvrYU2sOTe9A73lDag23q6zS5BBnkb5nsrIy59Oc70izaH%2Faq%2BdOjQAtt0YZjis2658fn9EP4rcRff61%2FsNB6OFqSxuFQymCKrBCSN5%2Ba4YxM0xymB05yHw8bccwuISlVCvIwrr6gwgY6pgFixEjpuP8S8L%2BOJEJuJREAZ5Uc4lZKcZozgkG%2FE3Om0QCKcrPprT7gSIkhF9ej0Ex5pRZ2qXkwbqBBsDlPStsxg4N6jfzt2vXJ3tJ%2FIAjc3fFFxSHq3GPKa3Th3CV1sjwxSlafdFmyxwHTLFOTAW%2BqGjhV8cC8CO%2BqA3m913MNphh0RdQFcxHBxDJBQPjLlzBaNcFBl%2FTTAKLrn7yJC%2BoDrOk7IoAa&X-Amz-Signature=1e6c73e684866fbe0242e0f48905c927b3770a2b97d3a97727c654fd15945272&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMIYHTHE%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9xL%2FyRjC8ySG%2FNpWsSETh7aRrB9mnJ45ervu5QosjUAiBuH389ZWu0pclQSZAw2Pqj5Ui%2B1jeR7zovlhUhPM6YXCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMov9emnWV5yXU4904KtwDKZCiQGE9QuBxjLTqmWu5OC%2FTYRr%2BOMGfIJNfRH%2BwQH0WOJnlMuH9C%2FQ4jONR7IeKu5MsMGJHO971JV3GE09lOaWYClLINx1YmR3QLBaKb%2BrEESyr0LhUdPy9KKxsbTPmDgzFb8CRnOj2Eube6PRkl%2F7%2BvNKgXK8pJpCW7YWM6Sh7jIk4%2B%2BcFthlRc54knM1hHaC4UVTL3fIMy1ZgRxhOqtyoPz4FwMmU%2BnOBAn5a%2F1umQBI8nYpuWi5Ozkbo6u0CA58wx8jrROw3fynOWQr88TuFqhj%2FiCavOY39XRVx4FSU1HAdQeSu83EB%2B1nurSoeJfr9o%2Bxb7y%2FKZQg%2FzIGXCrP0VMyaXLCnz8FMwKMm43EIq%2FGhMZqRomsgbgo5A2EejqkRU0V%2B6f1iCjfw9QvxbcZVPg0dgYLl%2ByGuf5uis2tMoRkbCcEiiarXOPTyDx1MXfwyH5dWmKWkkjSMXf8ef%2B6yw1A%2F%2FmiM8xUefbAGqUaeFZcWKiisK9AlvrYU2sOTe9A73lDag23q6zS5BBnkb5nsrIy59Oc70izaH%2Faq%2BdOjQAtt0YZjis2658fn9EP4rcRff61%2FsNB6OFqSxuFQymCKrBCSN5%2Ba4YxM0xymB05yHw8bccwuISlVCvIwrr6gwgY6pgFixEjpuP8S8L%2BOJEJuJREAZ5Uc4lZKcZozgkG%2FE3Om0QCKcrPprT7gSIkhF9ej0Ex5pRZ2qXkwbqBBsDlPStsxg4N6jfzt2vXJ3tJ%2FIAjc3fFFxSHq3GPKa3Th3CV1sjwxSlafdFmyxwHTLFOTAW%2BqGjhV8cC8CO%2BqA3m913MNphh0RdQFcxHBxDJBQPjLlzBaNcFBl%2FTTAKLrn7yJC%2BoDrOk7IoAa&X-Amz-Signature=a29d8322986c1cfbcaeb15ec372e36e2fd8ffe84d4a7accf92699e639f0c7f37&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6JYJFMD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNgzP6GYkUFz62bxFIMwd15sKSUJDOh2AkFDYs6vhkIgIhAPdOtNXt5Dzpeo%2Brt%2FV%2BZ9Bsp%2Fvnk0fpPChGQUW2XjJjKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B54sdgW1os8ybkPQq3APd3hG9hzgoAGEK%2F8ljxQGUllPBteSAhY1ghith%2FBSIOQGqHI15efi9HIq17IGfodCwHlE6ysu056Pi7pjE%2BbBLN7TkZMmqtV%2B9jCSxfhZGXOUAEdD0vfblPEadqassIwLwlvCAS1SmmTdkaFBimnMAtwpYREQFdQLnOF7ZEqLDZZ56%2F%2BvmIwNCU8ACq5GLrHuYgJuWo2rDKvConKpbldVq5NhET2lm6rftuDLR%2BQ%2B3zplethEia3KLxzO%2FL5WyyDNZvnGjZBKZghkgPMrV4PunSDhdfNP%2Bj8d%2BrMvNcFhCERv5lGe3u1T106ePmhTyiWgLIIqafYgw8qmtY0upO92F7zomK8Py2muCrm%2Bytg0nYBIMv7sBt0Shs7Bf6B7ydPJK2A6aoSpsQZmBhTS4eBDfCdffQx7trxngJ%2F%2BGPF1s%2F8ZkwiCjDVgDOvUuuqlZdCSTpQLzf0lq0l%2BpEjGAfktKgzC%2BGx7nkJHYdrsbAa37FPCbyjoPkE%2BERMeqDRl9LMjKpmyqFaUq0IzOU9b7TpK0ywKcewd9uZtzIqasghbdWFBLXDiyUrK47A55%2F6DegWHx7bQ2LjdTI%2B%2FtAJw4ke1xmFijEtdfnr%2B9Ub9vJhhTS5G%2BkaKXOvUz%2FUB%2BcjCuvqDCBjqkAU2j8%2B7jKKV0gnRdcDuw6oWZMfzXI7ofkKCbNq7vtJZquYGn1EOv%2BWACLKS7mpYFIsRuufaKamv8p3uRH8hq5lIIFOPUF0XXUhkw2rcTerTxpewTDDa2Ll3MrFR0rwyc3LHcSl1R2ta2VSLSHNrVqEcN2vCefR5lTR9EklG027O95VN1dAUq9iVhTypeble6l%2FBKGZOEpgF19t9Zb1iN%2Bp4zWFNg&X-Amz-Signature=cbe1947ec6fb22fd13ddd1878721e3b34f9c67012f5b09f92f9487010c6df86c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL5SBPTV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc1sbUsUfvnEdltPAXH3%2FFJc2K2ly8KADtcBQY%2BW9TLAIhALeJPLUsdSsWEmuInK6IW1dylMPAGge%2Fnv3YX4hjRdjTKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEKHujHZPslVwhUdMq3APcSBOXDGi0IeMh9eqZTbta4kRf6%2FhkW9zcPdkELYHopNNf6YUN0HPBOJPO8wRhB%2ByFcyUN7l3v%2FmuHC3Fb46EKy6N03dr8ULH4WgkKuPU8JzIQdDLe74CfVpyvCREzXRCfI4k22ahqKGIAb8eq1w90v361oYIIPXQq0uOL6eUVImRPlYCD2lZ3LNjHC3qsNkkEbwzqB3OYLjNMIunlTbrJ9JTWI92BOXf%2FMDGumMAT3gM0FPlqmHcI47DcOekHpCDpgcnmeTbH%2BIq%2BSZcQlayPOg4m6AZvp1r8l2fDlPAxXEC0kR2eY7N0BJLYrdjAuQXJghH90Esuu9LbjhX9TQSVZB2cY0yLjFDlnVvoOePbbD0wIlcqnMjTsCI%2By42KDznB6cHk%2Bi5RNDuorjso4exVwUNFr09q5SaJhr7JlzD5iPmMozAp2J%2BuKqPVP0zmSTCWrZgj3LZDmQqV1ItYeN23GA6JYnqsNJVVc2uyNe5hsL14ft5ctyCISEWbq8T6kwiwOhmKVe62qyRrfixnz%2BaWaih5bwxT%2FC79VVGpDQFakTUkXaXxOZlr%2B02d65hv8MDSjRjBps3mETAP4kULKlhfIGFUptwYfm9BG7SdSyjMOp2B%2FafJID1gblu71TCD0qDCBjqkAYKHfd8zBOilmVBtM749JXhEz50lIyMpNSxOqnb2%2FaRPmZu6SqB0sWYEA5L4Xq2nLaipNVEzNartrCB3WDofU5J4mK%2FD9wzAComnJOsRamwdOc3vqnqukEBsC9o6h8Dg31bdMpdlqhQ7zY1wAujikXRr0vXX6cmwlsOu7asTQsLwfW0IrCQE7SxBNV3mRh7y64O9wuMLA%2FFrPEzPrcxCINNU7UuT&X-Amz-Signature=90e8759b04b8c29d2c36886bc62b1a74a137853d56fd8fa16a6e707d03a0cd72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMIYHTHE%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9xL%2FyRjC8ySG%2FNpWsSETh7aRrB9mnJ45ervu5QosjUAiBuH389ZWu0pclQSZAw2Pqj5Ui%2B1jeR7zovlhUhPM6YXCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMov9emnWV5yXU4904KtwDKZCiQGE9QuBxjLTqmWu5OC%2FTYRr%2BOMGfIJNfRH%2BwQH0WOJnlMuH9C%2FQ4jONR7IeKu5MsMGJHO971JV3GE09lOaWYClLINx1YmR3QLBaKb%2BrEESyr0LhUdPy9KKxsbTPmDgzFb8CRnOj2Eube6PRkl%2F7%2BvNKgXK8pJpCW7YWM6Sh7jIk4%2B%2BcFthlRc54knM1hHaC4UVTL3fIMy1ZgRxhOqtyoPz4FwMmU%2BnOBAn5a%2F1umQBI8nYpuWi5Ozkbo6u0CA58wx8jrROw3fynOWQr88TuFqhj%2FiCavOY39XRVx4FSU1HAdQeSu83EB%2B1nurSoeJfr9o%2Bxb7y%2FKZQg%2FzIGXCrP0VMyaXLCnz8FMwKMm43EIq%2FGhMZqRomsgbgo5A2EejqkRU0V%2B6f1iCjfw9QvxbcZVPg0dgYLl%2ByGuf5uis2tMoRkbCcEiiarXOPTyDx1MXfwyH5dWmKWkkjSMXf8ef%2B6yw1A%2F%2FmiM8xUefbAGqUaeFZcWKiisK9AlvrYU2sOTe9A73lDag23q6zS5BBnkb5nsrIy59Oc70izaH%2Faq%2BdOjQAtt0YZjis2658fn9EP4rcRff61%2FsNB6OFqSxuFQymCKrBCSN5%2Ba4YxM0xymB05yHw8bccwuISlVCvIwrr6gwgY6pgFixEjpuP8S8L%2BOJEJuJREAZ5Uc4lZKcZozgkG%2FE3Om0QCKcrPprT7gSIkhF9ej0Ex5pRZ2qXkwbqBBsDlPStsxg4N6jfzt2vXJ3tJ%2FIAjc3fFFxSHq3GPKa3Th3CV1sjwxSlafdFmyxwHTLFOTAW%2BqGjhV8cC8CO%2BqA3m913MNphh0RdQFcxHBxDJBQPjLlzBaNcFBl%2FTTAKLrn7yJC%2BoDrOk7IoAa&X-Amz-Signature=5497ab30ecb8bf7fe260e80ba6d0e328c522fe671aee5a000d694a12d8242f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
