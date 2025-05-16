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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEQODO6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRseL4cip%2FFFNYQ0%2FnARjoPdWjdgvlUgLFAsWOhGiO6QIgQa%2B8su43kgiVlCyLwL%2BcSus9fx5F0A9gcccdtTFlG%2F0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCmJ9uBGhvoLr8cuVircA0L3YWCQTTkZAtEnIlZ1Hlv%2BYm%2FIjrARwLbUEiOilkvvGDuYYDUa2YhMvuhuWHalTEhAOuBJ7aXn2kqxRi90v9QSEPQM8%2B6fIjKyIH7%2B6ClJ3HRCUpRekn7avVa6LEZGxABQf918TOOBCgj2YwKcdjkgxvOWZ7G5Hp07qF5YDyRTTNK9ffh%2FTzrMLuxq6szSz5CyGhi%2BaPik7Lcgq1gYGEzCqXuQRXf%2BE7SxaNvtDoazOL0f0sgil%2F87k1An%2BaCxWy%2B9%2BIaSyEwPNLujso0aOBoJPQaEB1%2FvMPYeX4QS2%2FHof65wHYH4PGDrbrDBAb%2FLF%2FxkbLEKSff4jpf76LhTnwnXTGoqVr2QSluO88uLC0CTU4V%2BHC5m711FbiVnksvrzBQOZC5OHxRykSbhr%2FvSQqm4biabeyDrcIRz4IyURum4HQVSVw0bAMEkn2ip4xDxtbQ5fuCWcjs%2BA4zcnQHDCEDOtZLn3ue9uEUHXD2hroAVU4sgbfZw0aanCX1pc7g82T6dMsMFYhrAbyX5POFc1jBbyn1EKc%2FGABZjmUGXyYipnugrBiYWf7kMwQHOyEpQpz1bPGw8%2FeEK5r%2FfUOQB5EpaCPz61ECDTzfGA2g0Epvfqdrv32NjuXzaJ5mYMMnbnMEGOqUBL5iXxdV4ah%2FEnDo7WJjbKq4nDCXkTRC97GjyjytuFBaSFu8Qzoijbrp8hLL1FGVnAYufy3tIqFRWstdBQ79GwsI8yJzE3jckJgcfXOrxi1lBdSnBUO6nY%2FOMBj%2FoAwBAp9m8fdmC%2B8V%2B7T8tvUZQeeYCEMlJWXXIoS6oIqgnqdUBlAtov%2BiI7ubxkeHoswC%2BDDhcInPw6wnGaccmYiQTEdKzaFfv&X-Amz-Signature=a2256ba8aa51a7e008c7ea6ee74a0898cec35102eda93744eb4c74cad50d32f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEQODO6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRseL4cip%2FFFNYQ0%2FnARjoPdWjdgvlUgLFAsWOhGiO6QIgQa%2B8su43kgiVlCyLwL%2BcSus9fx5F0A9gcccdtTFlG%2F0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCmJ9uBGhvoLr8cuVircA0L3YWCQTTkZAtEnIlZ1Hlv%2BYm%2FIjrARwLbUEiOilkvvGDuYYDUa2YhMvuhuWHalTEhAOuBJ7aXn2kqxRi90v9QSEPQM8%2B6fIjKyIH7%2B6ClJ3HRCUpRekn7avVa6LEZGxABQf918TOOBCgj2YwKcdjkgxvOWZ7G5Hp07qF5YDyRTTNK9ffh%2FTzrMLuxq6szSz5CyGhi%2BaPik7Lcgq1gYGEzCqXuQRXf%2BE7SxaNvtDoazOL0f0sgil%2F87k1An%2BaCxWy%2B9%2BIaSyEwPNLujso0aOBoJPQaEB1%2FvMPYeX4QS2%2FHof65wHYH4PGDrbrDBAb%2FLF%2FxkbLEKSff4jpf76LhTnwnXTGoqVr2QSluO88uLC0CTU4V%2BHC5m711FbiVnksvrzBQOZC5OHxRykSbhr%2FvSQqm4biabeyDrcIRz4IyURum4HQVSVw0bAMEkn2ip4xDxtbQ5fuCWcjs%2BA4zcnQHDCEDOtZLn3ue9uEUHXD2hroAVU4sgbfZw0aanCX1pc7g82T6dMsMFYhrAbyX5POFc1jBbyn1EKc%2FGABZjmUGXyYipnugrBiYWf7kMwQHOyEpQpz1bPGw8%2FeEK5r%2FfUOQB5EpaCPz61ECDTzfGA2g0Epvfqdrv32NjuXzaJ5mYMMnbnMEGOqUBL5iXxdV4ah%2FEnDo7WJjbKq4nDCXkTRC97GjyjytuFBaSFu8Qzoijbrp8hLL1FGVnAYufy3tIqFRWstdBQ79GwsI8yJzE3jckJgcfXOrxi1lBdSnBUO6nY%2FOMBj%2FoAwBAp9m8fdmC%2B8V%2B7T8tvUZQeeYCEMlJWXXIoS6oIqgnqdUBlAtov%2BiI7ubxkeHoswC%2BDDhcInPw6wnGaccmYiQTEdKzaFfv&X-Amz-Signature=df143e4545c842c746c3874ad06f1e19ac89d9c3ac1804a5c503a00f0e14a951&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEQODO6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRseL4cip%2FFFNYQ0%2FnARjoPdWjdgvlUgLFAsWOhGiO6QIgQa%2B8su43kgiVlCyLwL%2BcSus9fx5F0A9gcccdtTFlG%2F0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCmJ9uBGhvoLr8cuVircA0L3YWCQTTkZAtEnIlZ1Hlv%2BYm%2FIjrARwLbUEiOilkvvGDuYYDUa2YhMvuhuWHalTEhAOuBJ7aXn2kqxRi90v9QSEPQM8%2B6fIjKyIH7%2B6ClJ3HRCUpRekn7avVa6LEZGxABQf918TOOBCgj2YwKcdjkgxvOWZ7G5Hp07qF5YDyRTTNK9ffh%2FTzrMLuxq6szSz5CyGhi%2BaPik7Lcgq1gYGEzCqXuQRXf%2BE7SxaNvtDoazOL0f0sgil%2F87k1An%2BaCxWy%2B9%2BIaSyEwPNLujso0aOBoJPQaEB1%2FvMPYeX4QS2%2FHof65wHYH4PGDrbrDBAb%2FLF%2FxkbLEKSff4jpf76LhTnwnXTGoqVr2QSluO88uLC0CTU4V%2BHC5m711FbiVnksvrzBQOZC5OHxRykSbhr%2FvSQqm4biabeyDrcIRz4IyURum4HQVSVw0bAMEkn2ip4xDxtbQ5fuCWcjs%2BA4zcnQHDCEDOtZLn3ue9uEUHXD2hroAVU4sgbfZw0aanCX1pc7g82T6dMsMFYhrAbyX5POFc1jBbyn1EKc%2FGABZjmUGXyYipnugrBiYWf7kMwQHOyEpQpz1bPGw8%2FeEK5r%2FfUOQB5EpaCPz61ECDTzfGA2g0Epvfqdrv32NjuXzaJ5mYMMnbnMEGOqUBL5iXxdV4ah%2FEnDo7WJjbKq4nDCXkTRC97GjyjytuFBaSFu8Qzoijbrp8hLL1FGVnAYufy3tIqFRWstdBQ79GwsI8yJzE3jckJgcfXOrxi1lBdSnBUO6nY%2FOMBj%2FoAwBAp9m8fdmC%2B8V%2B7T8tvUZQeeYCEMlJWXXIoS6oIqgnqdUBlAtov%2BiI7ubxkeHoswC%2BDDhcInPw6wnGaccmYiQTEdKzaFfv&X-Amz-Signature=84b600ace399b95a1060271f605deabea8c4f97d338b9a592f418bbe773add4a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAD3F3M5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9v0SwUxu2e3U3QId%2BcTINpTaFAGNq4qxNz7ie3WLdHAiEA1qSES0zWe2CXsYE9CREVm39uqCgEn2rB%2Bf6X2F1rgeYq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHJyrF5btH%2FTQOWpwSrcA%2F4xZuZugvB7TcYUT2sxQiZzBm59MEKy4%2ByZO0UnmohGcxuOGLcic6jiB%2BucqcffqKYJOkS9j%2FWhKluQh%2BLUSFheY8G7lQc76SoFWBZM7lMpKVNtKNuqcTLeO33XRGQrHosErZ7fHV0Oe02WZzJmTchUPIfMGQfR0841TJOPwluha4SFBLejrbfcYLxInrOaY6Gp%2FkEUE2LgfF2ZDPjOX%2FNgtMfAHBMBxBqxtL%2BBwy0rbNUK%2F0gF0nQojUAxgIZdBJ5LTqiUDqiPkBWl0Wnj%2F8M53XYFpYJ6zRscLF8KzbWcenlHSaYKpSxzGjMweZwyHQdPpFrWYgq5Dvo0m7ES8w%2BdXTdBPN1ATnmsgo6cHpuAQXb1c7a%2Fgp9xEXBYBt7h2Hv%2BUXdSQ60pil9LMwEJzOdX%2FPA2dP2nTO%2FCYv5boefHVNmQp49ETLmoQ9nNkxVr0%2FqSxuJwxzdnqIIztQo1DF4DbYZEZb4Tvq6sK2JyHEISx%2FEI9n43HwWHEx7jGUVS0gBmdNumD74vfHH%2FSiCH6Z7BHKa839PemR5rqrDSfxsiP%2FM%2FLKgyMUwQOIRXTcmEx6mfj4jaMdiVzgEcJdQ6iQQvoG4CT9EY3w2Ypi5yoCKBaIjInXl7sWwGkF3SMJjcnMEGOqUBbxLKWcgOnjfQJ1LwYYKPRMlbLarm8VYKGViPYSfy2CfXuwQ98jM44oMEJ%2BirLRHI71M%2BwQhJYWCu4JtjtiyJGCkorG%2Fi%2B3GvIGGWsfx1%2B2XrvehHmuhETD%2FIbUaXvKop08T436c1Neu38aBJU1Rv%2BuMdqzk3wZ0%2BALQUN%2BElRbCBtnyEQi7kOOC44enmuwqqvv0acTdlmaoOnqxy%2B%2BZIUEhwBhIc&X-Amz-Signature=f1d99c57e9bf9229d28fc961a2f24e17a161fcb341754cf15d7f690cb23be2dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7B227OA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTXJXozH%2BvFhFZXOPumpsawUEZrZxHkFu86I18OpcZ3AIhAJcQsVLK8MZPrKz7iQB1xdIrbQ9f6SCCpxe7XgsKuc9cKv8DCEUQABoMNjM3NDIzMTgzODA1IgxQ3WWXru0HNVLIIF0q3AM3ETHFi3h5o0ElggQoUiR5aNSGSuu7aNnWk%2FLR7ER7qlYYuTEvweZtkVpmTc0fPOFfTSFoLlruDeUa1D%2FPEVrseH8EvG3P0Anf1vkTJejtrCA6Nvoei3PDR1zS75IS3a6LuM53FUqM%2FqOzXoJUqLxzU6cIRWGR%2FQWZvC99jFOO205R0T4%2BlpT8%2FIHzsk6dW4CnqARaL5wuNFlksFaiAHKQikcOJWeQEzSxMGZHPeRHpk1sjFKywH6SIpHDX7umULBEAm1c3uIicXBuDbGbMgpu6x86%2Bqn%2BMoLM03EALuiXHwtAawhNebFtkOqIUCN%2FQNcA%2BYLkojsADf77EMa0clZi8VySevOG9Wf7plh7OlioluAsA4i3KhrpCf79EccHXB5ywUmxn8zRnq2Y1OuQctC95gVUVmEXIHoXxtaWh%2FgVrSti582IwU2u%2B%2BKlm4aZaENR5pjrtDzjgcrkxCJLHXtz%2BruNLpaaklev2vbchkmQL%2FgBXQ%2FZfsOilDObzbKVPz6hHlBmACEnXWjHd2o4A8T%2FDE30sOrvOYMjSh12UzRuq%2FGOZsQ1XnqSHXtsF26NXIQPKt9f0unY44X2Pc3RggjuqN811utF38GLTtoUZOvTeBQ7XAajKW07Gq5DjTCU25zBBjqkAcmluPkHn2N%2F%2BqO8BFqXdy%2B8rpSRLrA2soMwxebfoTjGGinbqub2jbOcJYBEYPSr7VWocoWdTcTxMeU5ssoquN49dk%2Bv%2BgFCalZMIBS8U3Qphp%2FcRAOO9JlvYbRctiyFOCSx2Bu%2FUZzIw%2F6mfMGYjh4vKbE6IlHi%2BUtCsaSTF6q4Sby7GnjMrTM14yOpKDR8zzsqifR2Prr1D0giPJnzQZmtyZHu&X-Amz-Signature=ac8dbd75684bf917b87feda7425d1a356107ae40fdacea5e7caae513bc9186dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEQODO6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRseL4cip%2FFFNYQ0%2FnARjoPdWjdgvlUgLFAsWOhGiO6QIgQa%2B8su43kgiVlCyLwL%2BcSus9fx5F0A9gcccdtTFlG%2F0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCmJ9uBGhvoLr8cuVircA0L3YWCQTTkZAtEnIlZ1Hlv%2BYm%2FIjrARwLbUEiOilkvvGDuYYDUa2YhMvuhuWHalTEhAOuBJ7aXn2kqxRi90v9QSEPQM8%2B6fIjKyIH7%2B6ClJ3HRCUpRekn7avVa6LEZGxABQf918TOOBCgj2YwKcdjkgxvOWZ7G5Hp07qF5YDyRTTNK9ffh%2FTzrMLuxq6szSz5CyGhi%2BaPik7Lcgq1gYGEzCqXuQRXf%2BE7SxaNvtDoazOL0f0sgil%2F87k1An%2BaCxWy%2B9%2BIaSyEwPNLujso0aOBoJPQaEB1%2FvMPYeX4QS2%2FHof65wHYH4PGDrbrDBAb%2FLF%2FxkbLEKSff4jpf76LhTnwnXTGoqVr2QSluO88uLC0CTU4V%2BHC5m711FbiVnksvrzBQOZC5OHxRykSbhr%2FvSQqm4biabeyDrcIRz4IyURum4HQVSVw0bAMEkn2ip4xDxtbQ5fuCWcjs%2BA4zcnQHDCEDOtZLn3ue9uEUHXD2hroAVU4sgbfZw0aanCX1pc7g82T6dMsMFYhrAbyX5POFc1jBbyn1EKc%2FGABZjmUGXyYipnugrBiYWf7kMwQHOyEpQpz1bPGw8%2FeEK5r%2FfUOQB5EpaCPz61ECDTzfGA2g0Epvfqdrv32NjuXzaJ5mYMMnbnMEGOqUBL5iXxdV4ah%2FEnDo7WJjbKq4nDCXkTRC97GjyjytuFBaSFu8Qzoijbrp8hLL1FGVnAYufy3tIqFRWstdBQ79GwsI8yJzE3jckJgcfXOrxi1lBdSnBUO6nY%2FOMBj%2FoAwBAp9m8fdmC%2B8V%2B7T8tvUZQeeYCEMlJWXXIoS6oIqgnqdUBlAtov%2BiI7ubxkeHoswC%2BDDhcInPw6wnGaccmYiQTEdKzaFfv&X-Amz-Signature=89bf93b2ee58e6496b4e578176a62922f96e857268764075f345476f77d25c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
