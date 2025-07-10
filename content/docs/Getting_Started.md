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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZESOFTSA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCeshSPKeGewRm%2FjTw3L9a%2BewEUdHlPBtfkRocpoG3uQIgfAw9eZWt%2FI%2Fd7bdTqNbq71ZBX4x2QikL1VQ1LxMVcuEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwFjvvTkVUbvyipIyrcA1GmSU9by0mV9ZibVWSxi7y3HMcDnlnT5Kvw8duttS8PyeDH6i%2BIMVqu1Njsbq%2FhzfMWd1QfvMd0Rq2zOdtX6nc0ColeeSBK9%2B0NtKQQ2RgcHz2eNp8dTcL1LxAP5qjNEe3i7tO06xcPTkJw5s%2BkQEDKp4KklByui3v45Avvwqc2YRoeZuwsp%2FimBsCWON7eFiaPAWRi9Bs8EwZjvkTqci9wghxIt3xQ5cHBTjUcLh1aeuVvrtSzyVIvywzRMI5bohOusUQPA8I3g9UCrU1Sr9GCClUiz3bB%2FkHXmYWtMeH8XOuK8inQ2C1xzboaUJWuZbHN0lu4I%2FgxRQ7vp8%2ByVB4iubCNEEvEcwnIJP%2F%2BbdgBm0cQRhGZdnNquEa5OcLdcLfyzezEMfBsXm0m%2F%2B8vSyEjeSASMtgpwmZVKuZkAbhzZntgn%2BCvhax9x8byhoEJTpMYsKiB7bP8RqGCuDX4hVl%2BhXVq6pJAr%2BSk62lQEltzRhI1yWfLwGYppCAe%2BRRe84Qormh5qzpqzSOUoRVeesmlKTcnAEshGB06K2YThsi4FwFJy%2FXJfZtB8YrVz4Qi9UzouDQizSwIwjXP8GzMH4D2BnMo4gETCQuJN%2B42N4k6MQuYCoOe%2FQ%2FIHzngMMP5v8MGOqUB0rA07HK%2FxygR0d4yRK5D5Y9hs09un7Yfau%2B%2F9lY4%2FVm9qOU94uhN0RdOj%2B6tnsAyEZJudjf%2FS%2F0OK8DZXZzmjfRpqYQumye8b8daJslyZro3gO0K8uhnKT9io3%2BH91f3bfw%2BsMQOwc64R2V7MpZPaqmV1G6Gav64w6TUhFZvvgfhcpRpXhMA3AbQOjffDroOh%2FTnFAPgrU9GX8U90Hv2o614Diu7&X-Amz-Signature=7457df2314d230db8b707417d6f800e3d7b1eea24ffa7de6fecd1a44ebb7a927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZESOFTSA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCeshSPKeGewRm%2FjTw3L9a%2BewEUdHlPBtfkRocpoG3uQIgfAw9eZWt%2FI%2Fd7bdTqNbq71ZBX4x2QikL1VQ1LxMVcuEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwFjvvTkVUbvyipIyrcA1GmSU9by0mV9ZibVWSxi7y3HMcDnlnT5Kvw8duttS8PyeDH6i%2BIMVqu1Njsbq%2FhzfMWd1QfvMd0Rq2zOdtX6nc0ColeeSBK9%2B0NtKQQ2RgcHz2eNp8dTcL1LxAP5qjNEe3i7tO06xcPTkJw5s%2BkQEDKp4KklByui3v45Avvwqc2YRoeZuwsp%2FimBsCWON7eFiaPAWRi9Bs8EwZjvkTqci9wghxIt3xQ5cHBTjUcLh1aeuVvrtSzyVIvywzRMI5bohOusUQPA8I3g9UCrU1Sr9GCClUiz3bB%2FkHXmYWtMeH8XOuK8inQ2C1xzboaUJWuZbHN0lu4I%2FgxRQ7vp8%2ByVB4iubCNEEvEcwnIJP%2F%2BbdgBm0cQRhGZdnNquEa5OcLdcLfyzezEMfBsXm0m%2F%2B8vSyEjeSASMtgpwmZVKuZkAbhzZntgn%2BCvhax9x8byhoEJTpMYsKiB7bP8RqGCuDX4hVl%2BhXVq6pJAr%2BSk62lQEltzRhI1yWfLwGYppCAe%2BRRe84Qormh5qzpqzSOUoRVeesmlKTcnAEshGB06K2YThsi4FwFJy%2FXJfZtB8YrVz4Qi9UzouDQizSwIwjXP8GzMH4D2BnMo4gETCQuJN%2B42N4k6MQuYCoOe%2FQ%2FIHzngMMP5v8MGOqUB0rA07HK%2FxygR0d4yRK5D5Y9hs09un7Yfau%2B%2F9lY4%2FVm9qOU94uhN0RdOj%2B6tnsAyEZJudjf%2FS%2F0OK8DZXZzmjfRpqYQumye8b8daJslyZro3gO0K8uhnKT9io3%2BH91f3bfw%2BsMQOwc64R2V7MpZPaqmV1G6Gav64w6TUhFZvvgfhcpRpXhMA3AbQOjffDroOh%2FTnFAPgrU9GX8U90Hv2o614Diu7&X-Amz-Signature=2163941a0333dca067c3752bc461c314c6eaeaa070e61cd4cdcf858d4709422c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZESOFTSA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCeshSPKeGewRm%2FjTw3L9a%2BewEUdHlPBtfkRocpoG3uQIgfAw9eZWt%2FI%2Fd7bdTqNbq71ZBX4x2QikL1VQ1LxMVcuEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwFjvvTkVUbvyipIyrcA1GmSU9by0mV9ZibVWSxi7y3HMcDnlnT5Kvw8duttS8PyeDH6i%2BIMVqu1Njsbq%2FhzfMWd1QfvMd0Rq2zOdtX6nc0ColeeSBK9%2B0NtKQQ2RgcHz2eNp8dTcL1LxAP5qjNEe3i7tO06xcPTkJw5s%2BkQEDKp4KklByui3v45Avvwqc2YRoeZuwsp%2FimBsCWON7eFiaPAWRi9Bs8EwZjvkTqci9wghxIt3xQ5cHBTjUcLh1aeuVvrtSzyVIvywzRMI5bohOusUQPA8I3g9UCrU1Sr9GCClUiz3bB%2FkHXmYWtMeH8XOuK8inQ2C1xzboaUJWuZbHN0lu4I%2FgxRQ7vp8%2ByVB4iubCNEEvEcwnIJP%2F%2BbdgBm0cQRhGZdnNquEa5OcLdcLfyzezEMfBsXm0m%2F%2B8vSyEjeSASMtgpwmZVKuZkAbhzZntgn%2BCvhax9x8byhoEJTpMYsKiB7bP8RqGCuDX4hVl%2BhXVq6pJAr%2BSk62lQEltzRhI1yWfLwGYppCAe%2BRRe84Qormh5qzpqzSOUoRVeesmlKTcnAEshGB06K2YThsi4FwFJy%2FXJfZtB8YrVz4Qi9UzouDQizSwIwjXP8GzMH4D2BnMo4gETCQuJN%2B42N4k6MQuYCoOe%2FQ%2FIHzngMMP5v8MGOqUB0rA07HK%2FxygR0d4yRK5D5Y9hs09un7Yfau%2B%2F9lY4%2FVm9qOU94uhN0RdOj%2B6tnsAyEZJudjf%2FS%2F0OK8DZXZzmjfRpqYQumye8b8daJslyZro3gO0K8uhnKT9io3%2BH91f3bfw%2BsMQOwc64R2V7MpZPaqmV1G6Gav64w6TUhFZvvgfhcpRpXhMA3AbQOjffDroOh%2FTnFAPgrU9GX8U90Hv2o614Diu7&X-Amz-Signature=6af40fd3553978823d367b0847c13bf83d01ad663f3e2ca135b41e009c3914f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5PTKCD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQ1%2B4UU8UhmOZVSObbyxvFTA0xOpEQvCE2yqUBXERN4AiASC0jNtBIxxAlpvu%2F%2B3oDfGzJcU9CPUgI%2B9H1Rkxgl0iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Jc7OKwAsT5XVMzaKtwD%2FzRb9aoEYmwdbtWxkPcEN4IIvJqPTcNhn5xkdZgt0SLqNx2X%2BXbIVgmKEh9IN8m7IONXgMvaLoWYndg8Gh0FFdbWJyk6nJ%2B7idXFdkFmDtk%2Bc9i42i7j91pSwyqABm0LPeWUQFp65JQger%2B0ju2f7Krcz65y41v3t2Z%2BX%2FJ0Y%2BgpaH5aY3VSn%2BRatgEq01szqMGs85n9uCTjdULPX1Nko1cXNphyoXGhZHJR0%2FAzdMZoJkv266J4U%2BQTQU3oxNyAPSIoxBIi03VX%2BdVGf6mdEBstHqWGH3xmo6P1CNQMpuyEoE6BCUlWmQdg1%2BM%2BncIFt98ioUTSkJ8MLScxpmbnrdCOW3wCYmxP34bDPAjd%2Fe9BTFK4uHvlxXbjNeF9e6n0hhVlycsNLcvTRC9UN%2F7vIpuDExFgQT0pQKmqxy5Z4jdvUBpaw5LGM%2BttvHGotNlawhqXCJDPs9DHW9jAThRrObhVFoHj3%2FJzls2x3jK9HoYXW5c4gVw%2BjX5SgzGnLv2ikX2UjChcGICwPID%2FrJK4mwIU9izdyWDc1RA6RVvbqHeH8lP8KA7sDZqzhUosvXLP%2BC02ZQu5fpSHmVCqtlAD%2Fc26wIhF%2FeWbPNaMtclOzOMxuByxWOfW%2BkBoNqkwqfm%2FwwY6pgGKzcBAiorHaBeaQ4K7JWfD%2BKiStIO6rSq%2FRklJjh5sAtt0hsl6bfg3kHr9bMEFWyIuH2w3vafEqfLn1RSXOeAHv7xWb4PlC4M8rSrzgeDOf0KQg1APbofvf35IIB0MGO6C8nT6IdtHE8n3YuNQsqzAU10q9R4jppGgdQ8%2F454z3%2BLRs97n670Lf5WDcUIZ2yv83nKqyp4%2FLv23H6MuK0HmWpLa7ASV&X-Amz-Signature=261d82891f6e9f658571db51e2b45aa5028d9d7cc9d495c613758fdefefbabaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z27HSTQ2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDX%2Bil2lwaMsdutf4kqt3Y9KldrpDGQsuZcnhCY3pbjAIgJDWw7d2NHNF7mYqHCzJVSlBYVtnsZq%2B1%2Bjo%2B%2Bqryh8YqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDmfZzNpq9HOIoGqircAy%2FMyd5jiERuLsFkbTlNA2Rj4i5kM0tPccjtSeunCBfW6neTFuQ4q%2B11keAQp2xcsxB6XeTzfKH1njxT4JQ9FcFrjimUhgsWQlcSPOrZWZB6ITgqphtwS3FkeSIstFYRWmzMhFQ%2B0UFJJjPwrOeXogOp81bylZhJZ2gCHBzFxUSRpOljgnT1%2FKNfscLKLNxcE%2BSmnOEmSM3PglXRZ%2FpFdbAhmgM3IXaLY3L4xEIxaPF5e%2FxJXGIvKCO7hN2AIirFdrAdceJiTXRQmK5Kg5PHTPSIN6CxaioSqvsSOmJ7WJqRgQ0f2J6ImIRcFK2JDMVHBbx3ThcTcu4UIBfQX%2B2tR6G%2FbHXwoGU0l%2BxJAmNhEWgpX00ReeWf9WI1g4fktz9eFnZOLkl16AuSvc4MK6qDRKd03ZyvNlEN%2BAu9%2BOrkKfmV10My3acc9N1y9CfDlR%2F717a0xBc398Xh6j2SDIf7Q3SFlRMxyerOfAikpCo%2BGBkdFB5zN9IZRnW4Ji%2BWtYTze9CZI1jk06ANhhCwzbbkgdCDXFdYOCEhmwXD4RbbGiBGVEggqGre5kD%2FFdcyUiogAF5YPW5f1pDlOIrR4qmVu1qMWXjAoa5KjFt51a036zCna9K1fS%2BSfRuFccWAMMT5v8MGOqUBZSRZKdKNbGaEuTGTeeVQMOFXhE04CBU8ogMx%2FjI5ohijIZEdzQSarOlock4%2BF1nj79PdWrfL8Cl0PzCnObXuNKxMsa1EXm4qI5z50cJELv%2BAjuueSnl%2Fd64MHcWfZSc2k1T8%2FBN9ao4cEa1wr4%2Bvlv3dd8cgDQMedOyU0FVogQl5z2jmbbGkFi3K%2BJjqYWX%2BTs10OP8zCLMG3DIB21H5j%2BWVoT6%2F&X-Amz-Signature=e71158838bbc41e5189240783a0fabb9645916c733e01b5844f264d0ba84f3ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZESOFTSA%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCeshSPKeGewRm%2FjTw3L9a%2BewEUdHlPBtfkRocpoG3uQIgfAw9eZWt%2FI%2Fd7bdTqNbq71ZBX4x2QikL1VQ1LxMVcuEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwFjvvTkVUbvyipIyrcA1GmSU9by0mV9ZibVWSxi7y3HMcDnlnT5Kvw8duttS8PyeDH6i%2BIMVqu1Njsbq%2FhzfMWd1QfvMd0Rq2zOdtX6nc0ColeeSBK9%2B0NtKQQ2RgcHz2eNp8dTcL1LxAP5qjNEe3i7tO06xcPTkJw5s%2BkQEDKp4KklByui3v45Avvwqc2YRoeZuwsp%2FimBsCWON7eFiaPAWRi9Bs8EwZjvkTqci9wghxIt3xQ5cHBTjUcLh1aeuVvrtSzyVIvywzRMI5bohOusUQPA8I3g9UCrU1Sr9GCClUiz3bB%2FkHXmYWtMeH8XOuK8inQ2C1xzboaUJWuZbHN0lu4I%2FgxRQ7vp8%2ByVB4iubCNEEvEcwnIJP%2F%2BbdgBm0cQRhGZdnNquEa5OcLdcLfyzezEMfBsXm0m%2F%2B8vSyEjeSASMtgpwmZVKuZkAbhzZntgn%2BCvhax9x8byhoEJTpMYsKiB7bP8RqGCuDX4hVl%2BhXVq6pJAr%2BSk62lQEltzRhI1yWfLwGYppCAe%2BRRe84Qormh5qzpqzSOUoRVeesmlKTcnAEshGB06K2YThsi4FwFJy%2FXJfZtB8YrVz4Qi9UzouDQizSwIwjXP8GzMH4D2BnMo4gETCQuJN%2B42N4k6MQuYCoOe%2FQ%2FIHzngMMP5v8MGOqUB0rA07HK%2FxygR0d4yRK5D5Y9hs09un7Yfau%2B%2F9lY4%2FVm9qOU94uhN0RdOj%2B6tnsAyEZJudjf%2FS%2F0OK8DZXZzmjfRpqYQumye8b8daJslyZro3gO0K8uhnKT9io3%2BH91f3bfw%2BsMQOwc64R2V7MpZPaqmV1G6Gav64w6TUhFZvvgfhcpRpXhMA3AbQOjffDroOh%2FTnFAPgrU9GX8U90Hv2o614Diu7&X-Amz-Signature=59e861ae481b4ced0fab2d56ab26f6b2d256176de73d33b64dfc570bebab912b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
