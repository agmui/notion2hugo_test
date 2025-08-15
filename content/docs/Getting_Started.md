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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKILHWFL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIH0csoNaFHt1y%2Fjyym1AkFzgOx2iEv1QDxc%2BYoNaZWFhAiEA8qSvMxiRLwPn3bZjnqXe%2FVePYeyr5W%2BiWTv2zZUfK9sq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDA9AzRq%2FZjsgDiAVnyrcA4SJpUAcQuSMNYdD6oJDamN%2FtyTSzPuJFyPYAsWkI3EcLA31NnkYU80qxrHfe3VYb9R%2F4tkojF4Kqug9Cftjs3mh%2BWIslKvjXU9%2BZSLH2iUoU1pbVflPNP%2FQFgvs3h7HrOsPY3w19Tg75MJuEXhMpEUMm%2F4CZZlGdcn9gIFyfzx5upP0%2B%2FV7jhaRahbnLJF6VoMmeI%2Bla8HNXxZ3TECbe05aECVaK0h27A6pGg%2F35iekrlGI6FeZwZqN2bAW19oi1eO17Bc%2BpNiL5vlwXEaXEdwfZA6Myyi7kaq13wRMl4OBer79EwAYtTnlGJ3nCit1e0KZLNRK02JY0mgdkIcuRcDmzSz3GGsfxoRY%2BbJRilJEEN16W%2BztsWlW9R%2BD9mmbjr25UWNkpu8LmeO1RlnTDWb%2Fac0pfPgoVJmgHnX20gOMOaZmZ8S%2Fp%2B7BaIEDOEuwmmnL7i9sXDknF9BPxFVdhIU0WD8NARnKRTE9GBaXzDmHzyEu%2BNIfIwSwA7dTXIfm52%2Fw2tr9JfVz6eIJWdHmvSJTfZElA8qRcUKon4K%2F9XGyhXF9U4KUOorkv6NbIgZX4gPSI2116gGkmBP4S%2BO1VgmeVQn4NojxY66JP4FWjcrr0iyRjIymjFVhkaW5MPqi%2BsQGOqUBIi9VNVqnLoacgTm3OpXdUZ6L%2FPEAkRfy24OAbGDj9%2BffDcx9MCZJEqZxrdYhMbLmDdskZa0XIrr44NNJEzNeNbFVXU5IoEItT8vsWOGDgTfslYKLsxXEly5MTg3MCzHtpqdMaU6PjSSQOO%2FNif8KYDy7Yxz3GBdFNKFdimoWt6zzHe3zlY8CDDy5fP3ZUm6ufHQBPlzJIOFSOwQEnz7JGYVE7qci&X-Amz-Signature=13fef6e2154d94381b9c10035984ef1f7f4847d607e7bf6a7daafd279b11d2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKILHWFL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIH0csoNaFHt1y%2Fjyym1AkFzgOx2iEv1QDxc%2BYoNaZWFhAiEA8qSvMxiRLwPn3bZjnqXe%2FVePYeyr5W%2BiWTv2zZUfK9sq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDA9AzRq%2FZjsgDiAVnyrcA4SJpUAcQuSMNYdD6oJDamN%2FtyTSzPuJFyPYAsWkI3EcLA31NnkYU80qxrHfe3VYb9R%2F4tkojF4Kqug9Cftjs3mh%2BWIslKvjXU9%2BZSLH2iUoU1pbVflPNP%2FQFgvs3h7HrOsPY3w19Tg75MJuEXhMpEUMm%2F4CZZlGdcn9gIFyfzx5upP0%2B%2FV7jhaRahbnLJF6VoMmeI%2Bla8HNXxZ3TECbe05aECVaK0h27A6pGg%2F35iekrlGI6FeZwZqN2bAW19oi1eO17Bc%2BpNiL5vlwXEaXEdwfZA6Myyi7kaq13wRMl4OBer79EwAYtTnlGJ3nCit1e0KZLNRK02JY0mgdkIcuRcDmzSz3GGsfxoRY%2BbJRilJEEN16W%2BztsWlW9R%2BD9mmbjr25UWNkpu8LmeO1RlnTDWb%2Fac0pfPgoVJmgHnX20gOMOaZmZ8S%2Fp%2B7BaIEDOEuwmmnL7i9sXDknF9BPxFVdhIU0WD8NARnKRTE9GBaXzDmHzyEu%2BNIfIwSwA7dTXIfm52%2Fw2tr9JfVz6eIJWdHmvSJTfZElA8qRcUKon4K%2F9XGyhXF9U4KUOorkv6NbIgZX4gPSI2116gGkmBP4S%2BO1VgmeVQn4NojxY66JP4FWjcrr0iyRjIymjFVhkaW5MPqi%2BsQGOqUBIi9VNVqnLoacgTm3OpXdUZ6L%2FPEAkRfy24OAbGDj9%2BffDcx9MCZJEqZxrdYhMbLmDdskZa0XIrr44NNJEzNeNbFVXU5IoEItT8vsWOGDgTfslYKLsxXEly5MTg3MCzHtpqdMaU6PjSSQOO%2FNif8KYDy7Yxz3GBdFNKFdimoWt6zzHe3zlY8CDDy5fP3ZUm6ufHQBPlzJIOFSOwQEnz7JGYVE7qci&X-Amz-Signature=7a7dfccc48fbf4304244ad368375a6c43f1889b1c978b0c531fc0eab5f4d967c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKILHWFL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIH0csoNaFHt1y%2Fjyym1AkFzgOx2iEv1QDxc%2BYoNaZWFhAiEA8qSvMxiRLwPn3bZjnqXe%2FVePYeyr5W%2BiWTv2zZUfK9sq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDA9AzRq%2FZjsgDiAVnyrcA4SJpUAcQuSMNYdD6oJDamN%2FtyTSzPuJFyPYAsWkI3EcLA31NnkYU80qxrHfe3VYb9R%2F4tkojF4Kqug9Cftjs3mh%2BWIslKvjXU9%2BZSLH2iUoU1pbVflPNP%2FQFgvs3h7HrOsPY3w19Tg75MJuEXhMpEUMm%2F4CZZlGdcn9gIFyfzx5upP0%2B%2FV7jhaRahbnLJF6VoMmeI%2Bla8HNXxZ3TECbe05aECVaK0h27A6pGg%2F35iekrlGI6FeZwZqN2bAW19oi1eO17Bc%2BpNiL5vlwXEaXEdwfZA6Myyi7kaq13wRMl4OBer79EwAYtTnlGJ3nCit1e0KZLNRK02JY0mgdkIcuRcDmzSz3GGsfxoRY%2BbJRilJEEN16W%2BztsWlW9R%2BD9mmbjr25UWNkpu8LmeO1RlnTDWb%2Fac0pfPgoVJmgHnX20gOMOaZmZ8S%2Fp%2B7BaIEDOEuwmmnL7i9sXDknF9BPxFVdhIU0WD8NARnKRTE9GBaXzDmHzyEu%2BNIfIwSwA7dTXIfm52%2Fw2tr9JfVz6eIJWdHmvSJTfZElA8qRcUKon4K%2F9XGyhXF9U4KUOorkv6NbIgZX4gPSI2116gGkmBP4S%2BO1VgmeVQn4NojxY66JP4FWjcrr0iyRjIymjFVhkaW5MPqi%2BsQGOqUBIi9VNVqnLoacgTm3OpXdUZ6L%2FPEAkRfy24OAbGDj9%2BffDcx9MCZJEqZxrdYhMbLmDdskZa0XIrr44NNJEzNeNbFVXU5IoEItT8vsWOGDgTfslYKLsxXEly5MTg3MCzHtpqdMaU6PjSSQOO%2FNif8KYDy7Yxz3GBdFNKFdimoWt6zzHe3zlY8CDDy5fP3ZUm6ufHQBPlzJIOFSOwQEnz7JGYVE7qci&X-Amz-Signature=ec491d53a0afa954cc1ed42b5293746315dbd13f2c6c0090fce374ca90ed20dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEA62O3Z%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDnaLnP1sAEa5c1xhmQV3H%2B2Vb7mbWgnMEd6FjIbJRC4wIhAIQ%2FtxkeFpNU6%2F5U08kjMjsOgOD1WvrIP7ZeACMh1YEUKv8DCFMQABoMNjM3NDIzMTgzODA1IgzmO5LCrvr4HcSIy8gq3APga52XN4uZB5kIBtnVlnhjs6%2Bb4%2FD8tLsYcCeaofsz4CEiPX5gGXYIRgRr6UY6jKoNUzVlmeJaw1Odliph4ecDh%2BcL%2BXpWutXjgjODAG87tJsD1qRHWuj7KA9EpWj3iQK1KIzOl%2FQOPLREFLHegOeNik98RE2pMxsbeVRbizGIGEllpBOZajGg5wchrZwUfi8YAO6icdvg%2FyC9%2BwdoEMA5eh5pXjzPHBEPuk%2FLEdEUuADUiM%2BN%2FIoYYoyh3ZcQXaAGIN0%2FIbzqkS6FdpFbDLhsfi%2B9OJRJih751ZLlOi3gawbZzD9L52vc0k15Eg4kuC2A0A72md77L6KTDkmq2tZAHqTmMeaWxk0LZ0HgDXxIqs4c6%2B5psyZ1qMHEAyIxqDCgBvlWDMXXYyYhoKFbaye2NbsLe0lO6dMz0tsUOfCiAeBuTQQb8NHsduGt5N6uSCs1HLDJ%2BRBN8J1HXwvp8Z5DBR5arcVRJdzulWhqAP2xPmkjSfPHWz681AYIJSJAvorY%2Bca7GNHDuAod%2FdrwaEto0xGM7dg514sMwu5H9PC6o3oGXhjNrRmThi2Iyfb6Kvz3NzB%2B50ImwRZf0wQZE3pOQaXQRXSZIgQATGjxfuqGxgUQo3%2FoSfa%2BT1uF5DDfo%2FrEBjqkAVSRPL5QruCKsZ1W8%2F%2BXIIirYhZ0Q7KPuYLY3w%2Bo1yaO2XCjXJAOuz53cYPQ3w4nUOY8h9Ovg%2FOTVlyijsNW69vU7UHIc%2BvrHLzm924DUSq25rgZ8vhOFeHtEgi0tDKwGMeuSnfql3IdOVTY5PJAfI8kL2GyB0PSPSn6WM8LymtC5iC88Y003Us8QRZZw%2FgqsJf0fpzOlv66hihc4CgS7nYPf50e&X-Amz-Signature=571f08b137dd6930ffe7c0101c95a117de75e41d0274e59563fdc0d22ff9dc51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM2GGDTA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIE9UjgNmgOdNWpmplF7FOft3TsnqaJZ%2Baf%2Fs617X8gReAiBMeJxU9bj0Fsx%2F%2BFcvEDc73tuimJ5MgaZiSIJMUsXYlCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMMRlGT7Xzd6lSGWRIKtwD6DXzGt3lBF%2BjFl651ObADuA8QqcfFWEcpVXRcJ1u1GbyyAjnmr%2FzeuW5gYyWlEUSfACQ4vJBNjHAo%2BC%2FOt8cMG86rJozKU%2Feth996XxHO6droWx7GOkX0lypg7kXNzAvER7SE7zDHatsCPS5e%2F%2BrV5TKeM99%2Bo4wLjUxpLWWUOQFVBarX%2Bz29MQ0YcA5MqlKdoqAqg8m1AbLmnKNyXuac3JHyk98%2FJLOQEQq3Q%2FWrGiPRUSD2MovfmwslYzTih7Yoa2pgktTu%2BBbveuVNVfVNPp7EZO4%2B%2FW%2Bu2Xbe7bKHiftHLnz07h0X21lh%2Fc3MWVJD7UADkc%2F0cZX5l8u6fyNQ8t5VM1nB5cpK7At1kBfkyI71RSuicwuOvp7bj43Tqp73um8Gc01aK%2B5dmAbx8bCyiUZfwVJQeyzQS%2FumPmxYL6eXN%2BAdc5O1UO08mmDhURcTJLx7SLyiOwvZu0UffykAZEOX2XYsAqnJ5OPe5O%2BYtSadQjH9m0CeVTLP62Z9E0iClYU3eQpyXVLbPQue%2BcLFHrk2Kt%2BvEDozoqvn4YG2HG7YBg6jDd%2F%2FBQYg1JWRs73MYiFflkReWxj08zNl31AKUS%2FDPyMxcOwLeclNcaczF0nCwF3hnrjJpieTl4wyaP6xAY6pgHC5ipuNolwteRJ6%2FbIFCckpWktMEh1xta16poFGw3uu55cbaePYaz51dAoZInjQIlDS7cmE6Pudfnc8GE4KihnHmfcMsBqjMSIv0fcEj5Sn4xZt3e0Y6lNdKDH9M1vJ5tsZ5fQgrP4digSu39brRFMAYJU5YjXRLHiDY6ukjWb58xf6BYPttSw4RWM93Wrx1NQ6%2FtCP1hheirzvfNPE0ovMJFIinmk&X-Amz-Signature=baad93a2c7d446a6bee8f3f2a2e88a8d29d7b1b5750d5e8bcfbb97c9d3c81d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKILHWFL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIH0csoNaFHt1y%2Fjyym1AkFzgOx2iEv1QDxc%2BYoNaZWFhAiEA8qSvMxiRLwPn3bZjnqXe%2FVePYeyr5W%2BiWTv2zZUfK9sq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDA9AzRq%2FZjsgDiAVnyrcA4SJpUAcQuSMNYdD6oJDamN%2FtyTSzPuJFyPYAsWkI3EcLA31NnkYU80qxrHfe3VYb9R%2F4tkojF4Kqug9Cftjs3mh%2BWIslKvjXU9%2BZSLH2iUoU1pbVflPNP%2FQFgvs3h7HrOsPY3w19Tg75MJuEXhMpEUMm%2F4CZZlGdcn9gIFyfzx5upP0%2B%2FV7jhaRahbnLJF6VoMmeI%2Bla8HNXxZ3TECbe05aECVaK0h27A6pGg%2F35iekrlGI6FeZwZqN2bAW19oi1eO17Bc%2BpNiL5vlwXEaXEdwfZA6Myyi7kaq13wRMl4OBer79EwAYtTnlGJ3nCit1e0KZLNRK02JY0mgdkIcuRcDmzSz3GGsfxoRY%2BbJRilJEEN16W%2BztsWlW9R%2BD9mmbjr25UWNkpu8LmeO1RlnTDWb%2Fac0pfPgoVJmgHnX20gOMOaZmZ8S%2Fp%2B7BaIEDOEuwmmnL7i9sXDknF9BPxFVdhIU0WD8NARnKRTE9GBaXzDmHzyEu%2BNIfIwSwA7dTXIfm52%2Fw2tr9JfVz6eIJWdHmvSJTfZElA8qRcUKon4K%2F9XGyhXF9U4KUOorkv6NbIgZX4gPSI2116gGkmBP4S%2BO1VgmeVQn4NojxY66JP4FWjcrr0iyRjIymjFVhkaW5MPqi%2BsQGOqUBIi9VNVqnLoacgTm3OpXdUZ6L%2FPEAkRfy24OAbGDj9%2BffDcx9MCZJEqZxrdYhMbLmDdskZa0XIrr44NNJEzNeNbFVXU5IoEItT8vsWOGDgTfslYKLsxXEly5MTg3MCzHtpqdMaU6PjSSQOO%2FNif8KYDy7Yxz3GBdFNKFdimoWt6zzHe3zlY8CDDy5fP3ZUm6ufHQBPlzJIOFSOwQEnz7JGYVE7qci&X-Amz-Signature=d841f476a844fe6d7990ea0cdbfc9f720302a4f4ee21c424e98fe9c8203fcc6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
