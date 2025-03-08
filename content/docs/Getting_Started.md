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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCPJHW5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDaofZ2M4fS0O2Wn8RdkqUdISbRNj3%2F03mT9O1yQ1mGugIhAISUghK2IlcUXJkUWHSJ%2F8rm8kkwqouYd%2Bz2G6%2FMvoN6Kv8DCFUQABoMNjM3NDIzMTgzODA1Igy0oWyzhXgL6A0IA7wq3AN1WPTxwz5HUcVBs%2B6b9kHdD%2BX5K8Wr9ZyOkFSRbMonmIAB8rlONJbmHgzv%2B56PrN5UeLbCzL4ASJaeEqr35%2BgdJJKZ1QZ14Uyo5FZfyZxepk394BOkUqIAgiMCehPi%2FBgT%2B05sUV%2FKmKmMCeb46bqKfnCH1jauwUnLP6HKrXu5D6QEu%2Fru5SgOITLpQjJgd9fSIeoCDV793rgWFw6WoFo81MnNrsASQGb8Q5tVDowKDbyoS2W9noHv4%2BM1SJOlm%2BNvtU%2B4wl8QJ05PQOde1NoVkzu%2B1Gc9i%2BQzQ8ZInMbMo2QKhvRClw4P4Mv7UFId3D6Dsp4LwrfWfqy7ySjgnPGxl4rpZ9MPZg3c6tYV1eSYHvmlaxUhYeRujTLp8JiMfBHeQ0W7kCn6dsX1tLJhLT1mqUalWGZzzF2RPmN04KgYrv20LagU%2F%2FXx0rk%2F7olPQBihu9ITrSYm71KxLwru%2F%2FNLGvA6kYmNCTwpoLx%2Bx3rFo35rz2%2BnG8eMwyj7ua6Q81%2B2mvCdEJQdopcUrYVwU6toHFcnI0aPr5pUfewcqLcZ6nD9SpGsR11lVa%2B%2Bs%2BWQ1a7y5YkHXPR0a5b1CYlyYRV%2FOc%2B4KDWN6PBW89J0eejK8HqexX95bJZGva6e0DCs%2B66%2BBjqkAeoqTqBRhvsSzfCgv0N2F86W%2B4t5QbnYfokuBgUV3dV0KKsI%2FPc8o%2FIHlWFXZpMSQbgnS%2F2AK6nwo9fzAPcv6EQfwJta7FSbNn8r1lD2GQ15p17RkiixroMCfHZobR3BsTJhdBUPsleNDBbFah1dBwAnK4R3SdHfiEWiwSuZ0tLEWlKoLBJsSdJmvpc2so7vFLEGSOZLHx8y5FMuhFKoXrVpK2tq&X-Amz-Signature=a10deb176a16ce4a9969576db1773c4f300626a0548fa95b53fbaa1f69afa7e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCPJHW5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDaofZ2M4fS0O2Wn8RdkqUdISbRNj3%2F03mT9O1yQ1mGugIhAISUghK2IlcUXJkUWHSJ%2F8rm8kkwqouYd%2Bz2G6%2FMvoN6Kv8DCFUQABoMNjM3NDIzMTgzODA1Igy0oWyzhXgL6A0IA7wq3AN1WPTxwz5HUcVBs%2B6b9kHdD%2BX5K8Wr9ZyOkFSRbMonmIAB8rlONJbmHgzv%2B56PrN5UeLbCzL4ASJaeEqr35%2BgdJJKZ1QZ14Uyo5FZfyZxepk394BOkUqIAgiMCehPi%2FBgT%2B05sUV%2FKmKmMCeb46bqKfnCH1jauwUnLP6HKrXu5D6QEu%2Fru5SgOITLpQjJgd9fSIeoCDV793rgWFw6WoFo81MnNrsASQGb8Q5tVDowKDbyoS2W9noHv4%2BM1SJOlm%2BNvtU%2B4wl8QJ05PQOde1NoVkzu%2B1Gc9i%2BQzQ8ZInMbMo2QKhvRClw4P4Mv7UFId3D6Dsp4LwrfWfqy7ySjgnPGxl4rpZ9MPZg3c6tYV1eSYHvmlaxUhYeRujTLp8JiMfBHeQ0W7kCn6dsX1tLJhLT1mqUalWGZzzF2RPmN04KgYrv20LagU%2F%2FXx0rk%2F7olPQBihu9ITrSYm71KxLwru%2F%2FNLGvA6kYmNCTwpoLx%2Bx3rFo35rz2%2BnG8eMwyj7ua6Q81%2B2mvCdEJQdopcUrYVwU6toHFcnI0aPr5pUfewcqLcZ6nD9SpGsR11lVa%2B%2Bs%2BWQ1a7y5YkHXPR0a5b1CYlyYRV%2FOc%2B4KDWN6PBW89J0eejK8HqexX95bJZGva6e0DCs%2B66%2BBjqkAeoqTqBRhvsSzfCgv0N2F86W%2B4t5QbnYfokuBgUV3dV0KKsI%2FPc8o%2FIHlWFXZpMSQbgnS%2F2AK6nwo9fzAPcv6EQfwJta7FSbNn8r1lD2GQ15p17RkiixroMCfHZobR3BsTJhdBUPsleNDBbFah1dBwAnK4R3SdHfiEWiwSuZ0tLEWlKoLBJsSdJmvpc2so7vFLEGSOZLHx8y5FMuhFKoXrVpK2tq&X-Amz-Signature=cde903ed77207268a242bcd01362e79f61d0b18d64712c8cbfb1afa4ed8a3b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IT67BJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDb7w6gMLUAf6wOx5J4yg3lLT9sN4u5AbPcJl%2FsVajGRgIhAMhJ%2Bg24agljBJOs6jjb6DMiMuc2Zvcybe5OtfCtNnyqKv8DCFUQABoMNjM3NDIzMTgzODA1Igzn73DHjdAernw73eYq3AO2bVOHQLf%2Fkn41HhSW%2Fg1bKpjp65ACDa589HXdTjSB03KuSuRpf9hB0C3iKNCxnSO0xXW2Q6hk4px1C%2FOTa8LeTI3rRs3fFchXBbhW%2BigL2vBS2XMLD%2B7uUBGcorWGRV5SEahaJX3td2A8s9k%2B04lz0Im1PQlIYyKX5Z2KFJyx5q3xIlOWyrCbtuFxuL8ucvUZ2EUh%2FF%2Fx3JeKEBkR1kXkl2ocxNz8EEdVVWcHFxcGhg%2B%2B3rIFx62Ev07413lLanDNMOCpSicqbz%2B4D9LlTtI3KHPCNU3J4Wuu0YeIGFyPHT0cC53TOlgqPZHiGIo%2Fc1hYkRidHty1bsdYr0pZM2%2FI8CpBCgLAGVvZVBBdVAkGHKBgmZ2hbNmYf0ak6OYT0J7Lta%2FOcPl0UsfdwvzX5xytGt%2FFI61nUON%2BdfRB1GNfcnEhWU8DSMUPIqaZ3SujCrv7l1EISubl%2Bakx6mUrk869BQGyMqojmuMa7nUj8jMxLCRVYd4urAS0a27eDAHjnzeyjNCeCEdPyoY%2FL38GD8J4XGP3DTdlutZNt4yNtuVj5YSrx%2FDmsoj4mOc0wWTleAOwL%2F2u9nWaH57qv12ACQsvzzSUUEIfa4%2BXa31A4JcHOYUH3FoP%2F4xoAt8sqDCI%2B66%2BBjqkAVITi4eN4Ls%2BB5M5Edwlx23D9DeyvoAoWSzv1vhJVtS1lcg0qYbJLMmR5UIaxZXlDVSMljTkhdbgJaIewu97vfO0xptZDXszEsE6%2BExuIqMC54pgerzoLtWL2VIUjEf1BuFSCsFEZIlwVLv6sE9FX39jhfH%2Bx%2B%2BV%2FLn8f6qaG2KKC0fEvVjPjIHA2YsqfMytGwHIghLNY7Yd3Z4HdaHDQsqoct3x&X-Amz-Signature=b57d2c815daacb4c77eb6bece2bee86644502b4cdbb2b945512d79a7efb8063a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSJC6NZ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGxIzgrf0yuch2juw861B%2BlsMDC3nMRKddcvPZFzpaCuAiEAw52S6RGSPLhiAGIsU1SbTXrnYfTzcCdH3T20%2Fu8BIjYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDDcl9lVRGXKrp4d0MSrcA%2B4PrlCbsicIrCznWQPIyR4UIZCZh%2Bf1%2Ba3EXb8uzAw7OD8Y%2FGkePDFO8%2F6Mw0s89cnPc4V9F%2BWnDq0LoY7n46aA%2B1TumNwwLN09IrgpdmiNUj8qdHaI8ZNr1Eh2yw%2BU3ulo2ycKM4r8vMDvGDqU8MuzwMu3R40nHUuNXaDt3iTwpLOwEkntE83FbGV1Wvp2oeGmaYSggMTo1d5GgBecxw5Mel8i0hciCIdnKzGOR2H3OohnpevZ6cjP%2BAVoindoOEy5zEHz7CHbfHQd6tsR%2FMOonvasRxjabnV5NToXNp6mZDLE%2BLOVbkMZFr6hCxBar71oc%2BgdTHZwPLvPjw3m3v%2BK0G1PZs%2FUrD%2BA0gh0l9yWMTdi0XL5hMec%2B72%2BONmUdw%2BtqB36LwTCvs0dGOrTsiqefJisIgGXT%2BKH%2BDrsEVGlD623XIJUwulQ%2Bv6Y9BrW5TycaDgfl%2Fmvcyp1c%2BeVvnR4maAbMQR6aPBI%2B06dj55PXed7GKORKxwce0fa1xBiOAQdmH9T9Kbaemc7gicIEJ1f4UmEARkiC5nA9L8E3ZSSu3TF2q4kWQLJLCTecsFXN653ieWugTp5eFj%2BMZU%2Flx%2BGOj6Ub2KwV8vVwMnsvmJSQCpRsnvweQp6zwONMP6dr74GOqUBtOOw5%2FpDhA8KTvxXC1ZK2Y3kKZPCFye%2B3h%2F8sBNMl%2FqSGQCiIzwgGK%2BmgrtJnxJlT%2FKsRKnMnu2mHdoU56blt1Ah4qkkxNI79r%2Bfl800zh17Dwx0v0v77hxWg8uGzVH8iRwcApgImtqBrbl3%2B9hSPcxwKYmZ3C2qhabaglRnGpjWuCcKJ2MxmvkEjW558GG%2BgYSmj%2Bkc81WiG%2Bwsh04r%2B%2F%2FtvM6u&X-Amz-Signature=22295bf95682b5c981f33f2916e2d1cdd26b52f2b207b4ffa4b3c9984a6c7cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCPJHW5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDaofZ2M4fS0O2Wn8RdkqUdISbRNj3%2F03mT9O1yQ1mGugIhAISUghK2IlcUXJkUWHSJ%2F8rm8kkwqouYd%2Bz2G6%2FMvoN6Kv8DCFUQABoMNjM3NDIzMTgzODA1Igy0oWyzhXgL6A0IA7wq3AN1WPTxwz5HUcVBs%2B6b9kHdD%2BX5K8Wr9ZyOkFSRbMonmIAB8rlONJbmHgzv%2B56PrN5UeLbCzL4ASJaeEqr35%2BgdJJKZ1QZ14Uyo5FZfyZxepk394BOkUqIAgiMCehPi%2FBgT%2B05sUV%2FKmKmMCeb46bqKfnCH1jauwUnLP6HKrXu5D6QEu%2Fru5SgOITLpQjJgd9fSIeoCDV793rgWFw6WoFo81MnNrsASQGb8Q5tVDowKDbyoS2W9noHv4%2BM1SJOlm%2BNvtU%2B4wl8QJ05PQOde1NoVkzu%2B1Gc9i%2BQzQ8ZInMbMo2QKhvRClw4P4Mv7UFId3D6Dsp4LwrfWfqy7ySjgnPGxl4rpZ9MPZg3c6tYV1eSYHvmlaxUhYeRujTLp8JiMfBHeQ0W7kCn6dsX1tLJhLT1mqUalWGZzzF2RPmN04KgYrv20LagU%2F%2FXx0rk%2F7olPQBihu9ITrSYm71KxLwru%2F%2FNLGvA6kYmNCTwpoLx%2Bx3rFo35rz2%2BnG8eMwyj7ua6Q81%2B2mvCdEJQdopcUrYVwU6toHFcnI0aPr5pUfewcqLcZ6nD9SpGsR11lVa%2B%2Bs%2BWQ1a7y5YkHXPR0a5b1CYlyYRV%2FOc%2B4KDWN6PBW89J0eejK8HqexX95bJZGva6e0DCs%2B66%2BBjqkAeoqTqBRhvsSzfCgv0N2F86W%2B4t5QbnYfokuBgUV3dV0KKsI%2FPc8o%2FIHlWFXZpMSQbgnS%2F2AK6nwo9fzAPcv6EQfwJta7FSbNn8r1lD2GQ15p17RkiixroMCfHZobR3BsTJhdBUPsleNDBbFah1dBwAnK4R3SdHfiEWiwSuZ0tLEWlKoLBJsSdJmvpc2so7vFLEGSOZLHx8y5FMuhFKoXrVpK2tq&X-Amz-Signature=4c6ebb5b5e7dac5b57e5fdf6c4527d0db16cfa696ac657ff608e39ec7f6b9883&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
