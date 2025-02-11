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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFL2NHMB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkiZ%2FUtgCKyezozMtgLQgURwvRwSw%2F3SnN3foZcrRTEQIgFIcD77w5mCCTtuT5bPSkGDlj53wneHJBO2ssl5tBFq4qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2%2BEw73wDoMATfELircA7ftE%2FDr0Fs5sJECKAbdQVn%2FkdnaSVQsVkLlVNvQzuw1Z4XSNZZlsdRCPe5EhzHEA1xVQW%2BKnI%2FFuPjSBJZ0osUiUi6IeFUzsExrsboEoGFUXp2hRh0s9UkaYjojAB3hLPQc1yfn%2FaTif%2BNH9%2BMeP%2BbTQGzCkKhYzmrj56u%2FDmezbsHJs7Im%2FAKWBvFRFxiENiDY5yd%2BF0ixYiCRs2DPn4yzzCf3ituWSjGkhMgJ5QhfwJo3THKRPr4iIY5ikJm%2FkBatBc1OMMqF0a4Xt8nhrql08rXdjlJaNVibUONI59uaJfY2MnaxkzGU%2BAaKwnRH04xzav%2FkLCL0sKfR9QGI7c4GUkNAF9iAXY%2BLhmntDfrWDsHr8A5sK9CRVdxSskSIHsOZuEeMULb7hu9Fw6jgEidYwu9aiW36VOD2JAnNQ7zxAxmZcZs%2F3dkdqtaWHmnHLvMEz0T%2FT9DzUVJ7mSfUkB%2BRu5XkpM0Cvh1KDeX9NOtEic5K2GrO0km2EifHKoWIGjMDy8yldbw4dZ%2BP5P6h5phaKmXRzanWJs%2BM0PubFS36z%2BBFVRhuHERYE1V0Cum2E8h3jTCqtVic%2Fk09IkXqQL%2F0E%2BaNAt%2BJb3OHTkMXz9%2BfHRUChM9Q%2Ff2V8wKOMMXJrr0GOqUB0PPCxp6%2BZd5m1kUb9ZUcal2FIQzySgzbTYvZS1x1oAHZMfy%2Bk2PZYqaxuyL2yCkkSpEjVTQCS9fDPPIlBMgy7yiP9wRHTz36gueJGE76IisxKoeYggOUKgu5qyx0KapM1qL%2F8dIdrhwW3%2BpKuIsV7mU7b4OiS%2FNiPjV0txpIYKJsSs90SxCMIp2AKtLffNn7P7EEgePBleqis9XEc6vqeDrGLRA%2B&X-Amz-Signature=818fc1f25bb8015ed21bcd093ed7544b509f28601924061da81afd98ee3f646a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFL2NHMB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkiZ%2FUtgCKyezozMtgLQgURwvRwSw%2F3SnN3foZcrRTEQIgFIcD77w5mCCTtuT5bPSkGDlj53wneHJBO2ssl5tBFq4qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2%2BEw73wDoMATfELircA7ftE%2FDr0Fs5sJECKAbdQVn%2FkdnaSVQsVkLlVNvQzuw1Z4XSNZZlsdRCPe5EhzHEA1xVQW%2BKnI%2FFuPjSBJZ0osUiUi6IeFUzsExrsboEoGFUXp2hRh0s9UkaYjojAB3hLPQc1yfn%2FaTif%2BNH9%2BMeP%2BbTQGzCkKhYzmrj56u%2FDmezbsHJs7Im%2FAKWBvFRFxiENiDY5yd%2BF0ixYiCRs2DPn4yzzCf3ituWSjGkhMgJ5QhfwJo3THKRPr4iIY5ikJm%2FkBatBc1OMMqF0a4Xt8nhrql08rXdjlJaNVibUONI59uaJfY2MnaxkzGU%2BAaKwnRH04xzav%2FkLCL0sKfR9QGI7c4GUkNAF9iAXY%2BLhmntDfrWDsHr8A5sK9CRVdxSskSIHsOZuEeMULb7hu9Fw6jgEidYwu9aiW36VOD2JAnNQ7zxAxmZcZs%2F3dkdqtaWHmnHLvMEz0T%2FT9DzUVJ7mSfUkB%2BRu5XkpM0Cvh1KDeX9NOtEic5K2GrO0km2EifHKoWIGjMDy8yldbw4dZ%2BP5P6h5phaKmXRzanWJs%2BM0PubFS36z%2BBFVRhuHERYE1V0Cum2E8h3jTCqtVic%2Fk09IkXqQL%2F0E%2BaNAt%2BJb3OHTkMXz9%2BfHRUChM9Q%2Ff2V8wKOMMXJrr0GOqUB0PPCxp6%2BZd5m1kUb9ZUcal2FIQzySgzbTYvZS1x1oAHZMfy%2Bk2PZYqaxuyL2yCkkSpEjVTQCS9fDPPIlBMgy7yiP9wRHTz36gueJGE76IisxKoeYggOUKgu5qyx0KapM1qL%2F8dIdrhwW3%2BpKuIsV7mU7b4OiS%2FNiPjV0txpIYKJsSs90SxCMIp2AKtLffNn7P7EEgePBleqis9XEc6vqeDrGLRA%2B&X-Amz-Signature=b938c6abf49bbfe9fca56870544a4d78958b1ec10313801a904283edd2566a48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2Q2IYZQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYuua0cCuSMRxiMx0B1KSLKFyGozOpj%2B%2Ff%2BB5lIh6WtAiBpNtcdCVYSWHbiaEZBkEYFyiSUqQfFTySQ5RFuwsyiAiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMucX0s7I913sqcQnyKtwD1U%2BmWo3Gv2Nn%2FWVpg7k1ReVOVTKi6LSnCIc%2B2vNzIbLNFJw44%2BC%2BsqAmmv4cpCSScjrd0Su4xD2mYNswhxNWcOqYp1REU765%2FSeJB361LLFvBq299QH%2Fht7DcPbBcFX36K9E2ghZwV%2Fre80rAi85iTlj%2BfuC%2B8JtbhPXCja8Dm6j1hqqMpJOU%2FMjtufrkKAFfKiz4fXGMdTszG4tADyww8OX%2FiErqUKFYtJOgbUxXfC4C5jGOwMLueGBvB0dySEr59c81vk4wi%2FZ4NFKXtPk3CtSCcAGJynKOKnQrgifiK5%2F9XPkJCow36BUt00cOsK4IumEjXSgA2QF%2FK1UO7OtuDFQEoduH3HoV0U5DtA%2BCMtiZeQGcdPKBk32twzj1rxRUsUPoZC6T7YB9GV4hqfexV%2Bp3pqhjGTc4DoNrtLrCog4qkWVDnRTM3IcuTckHCUGTWsF5HFyeMMZxPxkoWMcfUrNt4at2SM6x8aGfzQ9Xcb3KxQ5x%2Bx8nF%2Flg1HyOsIpW9Q3B1COiWBV9aCzfpimuQGHIAi%2BJBR0de0WHai7%2FGOPDS2dtcUcJlx3EYYfNUI6EqaBmFIxioglGs1LQBI1WnioHBX0yiCQPijieSiLVjBEb%2BWWJz2ArGp9fzow9siuvQY6pgFkGFlMf0C8bSDlX%2FD3jACyKq7VrqGqfXmZkQVWS5iBfSH2jfXum7BFwBbWZ3QRfDFUkPk34MMYLhCaSWOzKe80uNVTXf7ZcAE0k8HhQsgBfT8PVwuz39Cn916%2FcfER9SdLbjwVvERquGmehm1KJmxIb8wfc9%2FpSXGIB7mkUUta6MYsK6EqMhEpfq6hnQD7krxzYpfBuyhptXctM9GvYCL67uUefEz0&X-Amz-Signature=3a533be4e12db7cd59c49802209663fd29288e48b101dd86d76e6cc3fe36a503&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCPBR3WW%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgQABNPmD%2BpZm4yNwwMpb6XXGN6TpaRxexco%2BMRPCnJAiBEVl6xbGaveC3%2FpPc0M9RWVehN278Iob0ip83Jv%2BVClSqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPNiaEjqQCDimdW51KtwDdXyUhhwZktsav1QNjm55eY1%2BkzL9mwbWXJn8HYAT62pahgLfapR505tkt51pkQg3CWYsN2amOI8VJQstY%2Bf8UKaj5y6Y4%2BzWMVp5qjaHCPryN8JKHYCtpfSNP3wT0L4%2BhWy55ETI8ls7Rwk6%2Fb3OEel51elgEEGvF1wqghCRUsIDetKwfgtRh4Wo%2FGUJRFaE%2Bt3dpXLmvikGKYbfbwhswptFkYpdwjQl0A5sc8%2F%2BEY0ZJDQXoQDqomdZaLcv3%2BHpX0HVnSx%2FHRyAiuxP7al0AVtFwzrhpsdtPxQUwKV4UQrElkA%2BOuSAJW086FV4Vw5nh%2FLMiN7uN8MWOsVow5ZqALcFJnEbbLQ1YQ71LWnMNOxeyv0x7MqFcCZ5jkAFwDeJUU%2F6Pqro6IAXSNxVAqYobn2s3e2NeP8aqOF%2BrtfTBU5Yrwsh0xhepxLMpWNRC%2FOMtKCPf84gzH2QMSJt9yaJ%2BoOfrMVqLs896YJNZunoT1ishZg%2F2oOlaLJzygBnsnmaTraRXgKJDjFKfR5T9uXe5W9MZ3hsDwpq6G8lOKZSaGJHDIHGGltQHBRawJZ5TojMXOtZK2%2F40T2YzEDPwJN%2B9h4WSxt5De2AB1%2BKBPlgvqVvYxlLcV7Y%2Fwtly%2BEw0ciuvQY6pgFTJwNDPzEMvlKpMW75y6SQSrdGX7kCky%2BVTNcwrWG7D0mOPICjqBjAeyqHXhl3AnRWLE7x3ex2TQT%2Bb26EGr25C%2B3rjDH4iYqaIZVP3MeIrTnlzeSV5cJF6P8M1kDyxDtNuakvCkApn6A9rMJ4F87Y9NeIm6DZsBBA9oNSp6YiUqxhxS6H%2FAU5qkQQfxOdWKY8K4ZOynvfFJdJnja7YUqlqdQ5MQWN&X-Amz-Signature=5242ef1a6a4923e29cb89f0d09999331cb50e567b25797c4583691d5e80a0f97&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFL2NHMB%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkiZ%2FUtgCKyezozMtgLQgURwvRwSw%2F3SnN3foZcrRTEQIgFIcD77w5mCCTtuT5bPSkGDlj53wneHJBO2ssl5tBFq4qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2%2BEw73wDoMATfELircA7ftE%2FDr0Fs5sJECKAbdQVn%2FkdnaSVQsVkLlVNvQzuw1Z4XSNZZlsdRCPe5EhzHEA1xVQW%2BKnI%2FFuPjSBJZ0osUiUi6IeFUzsExrsboEoGFUXp2hRh0s9UkaYjojAB3hLPQc1yfn%2FaTif%2BNH9%2BMeP%2BbTQGzCkKhYzmrj56u%2FDmezbsHJs7Im%2FAKWBvFRFxiENiDY5yd%2BF0ixYiCRs2DPn4yzzCf3ituWSjGkhMgJ5QhfwJo3THKRPr4iIY5ikJm%2FkBatBc1OMMqF0a4Xt8nhrql08rXdjlJaNVibUONI59uaJfY2MnaxkzGU%2BAaKwnRH04xzav%2FkLCL0sKfR9QGI7c4GUkNAF9iAXY%2BLhmntDfrWDsHr8A5sK9CRVdxSskSIHsOZuEeMULb7hu9Fw6jgEidYwu9aiW36VOD2JAnNQ7zxAxmZcZs%2F3dkdqtaWHmnHLvMEz0T%2FT9DzUVJ7mSfUkB%2BRu5XkpM0Cvh1KDeX9NOtEic5K2GrO0km2EifHKoWIGjMDy8yldbw4dZ%2BP5P6h5phaKmXRzanWJs%2BM0PubFS36z%2BBFVRhuHERYE1V0Cum2E8h3jTCqtVic%2Fk09IkXqQL%2F0E%2BaNAt%2BJb3OHTkMXz9%2BfHRUChM9Q%2Ff2V8wKOMMXJrr0GOqUB0PPCxp6%2BZd5m1kUb9ZUcal2FIQzySgzbTYvZS1x1oAHZMfy%2Bk2PZYqaxuyL2yCkkSpEjVTQCS9fDPPIlBMgy7yiP9wRHTz36gueJGE76IisxKoeYggOUKgu5qyx0KapM1qL%2F8dIdrhwW3%2BpKuIsV7mU7b4OiS%2FNiPjV0txpIYKJsSs90SxCMIp2AKtLffNn7P7EEgePBleqis9XEc6vqeDrGLRA%2B&X-Amz-Signature=7724543a3871868af5c05952207d8d5dc60be75dd0803b889997a989f20bf80a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
