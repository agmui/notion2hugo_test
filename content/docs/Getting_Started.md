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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN5EEXYZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC8PEXgo3lA1tAiwLbZiY4mw3LWyCxThc7X6wf8Lod%2BOAIgF%2FsNw9HZeicwFTob4NFZfsLYmxm8mJmKcS4Fc9X8LFgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOwS4%2FgoDsQv29JAByrcAxik%2Fc1cZtWt%2FMdTMxSdXtu7v2Tl369ZdBpPY1ipvmZcV9ByJkqz8Eg7IjzSHUFuAfYQOHYVI1NFUvYXgyHmamVTUA%2BZEFnt4pcpveoPbzpGQABdSoxpczws%2FMg9835%2BlnyG447ShBS%2BhBGT%2F931Y%2F0OcddfVoDqJwxEI%2BvJur%2FNOrp%2F3NH3rWN89LX%2BI0hfGX28%2FolFSZbwV4bAYOWnklUVgEOjP27aRhj1%2FKbD7aDr2BXKwAAI4h4PRERUs89%2BFyJBfVDQKhGffeyg5FPrVJhhQGFktS4y87paF%2B6LNiPdXdpSWsSOlTN6T7mMzf18ntKDeRIocHbHFFVZC8RbW3R8HHeh1t7O3N%2FUYjWUHaXFQM3Lh%2FQ1sHykD85IZsuui0BwLGJbd5IPlfmHXfacNxTnVxoH3YZznTUlAExJkiGv81sPXyUZInFRKfmjS1pd0E0Vpe%2BwKiofJoqzyZKOkukICzY0bUzUlJJeFRqLez%2FrURZMh785xYhRmc6EpZFuxE0SPkMZ8bgUcwqAXul5%2FOQyvKDmIzsipgtqOIoSeZdUdELs9zqnPWZFjTrpAeBk1lySOSu%2FJgOQgpDWbRoMroJqJjFNfiz69lN6VeycnmfTvuwAaA0108D6iYVoMMed9cIGOqUBwCqPtx50fV0xu7LQZyNewEF3Lkq5n46XDt3Q8o85g910uKCx4d83SQbZEjTFhpa0OnU4PkFxzJjt896SgFMR0iaY4U2VqN%2Bt7F5%2BlJvehaOA%2BZNb%2B0xN0HVr%2Fon7ppUF%2BvSSBJWp%2FoQOKeflXOOUeJ%2BCsEZm36DCKnKAPViHeJLwjvtRKxevKuaBEM9wEbU1RdbRVvNWVROzwCYuDGkU8em33nML&X-Amz-Signature=87e66282155d2c0e18aef1bd8931655e97b3aef8f2a02b63169c2542336ac238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN5EEXYZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC8PEXgo3lA1tAiwLbZiY4mw3LWyCxThc7X6wf8Lod%2BOAIgF%2FsNw9HZeicwFTob4NFZfsLYmxm8mJmKcS4Fc9X8LFgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOwS4%2FgoDsQv29JAByrcAxik%2Fc1cZtWt%2FMdTMxSdXtu7v2Tl369ZdBpPY1ipvmZcV9ByJkqz8Eg7IjzSHUFuAfYQOHYVI1NFUvYXgyHmamVTUA%2BZEFnt4pcpveoPbzpGQABdSoxpczws%2FMg9835%2BlnyG447ShBS%2BhBGT%2F931Y%2F0OcddfVoDqJwxEI%2BvJur%2FNOrp%2F3NH3rWN89LX%2BI0hfGX28%2FolFSZbwV4bAYOWnklUVgEOjP27aRhj1%2FKbD7aDr2BXKwAAI4h4PRERUs89%2BFyJBfVDQKhGffeyg5FPrVJhhQGFktS4y87paF%2B6LNiPdXdpSWsSOlTN6T7mMzf18ntKDeRIocHbHFFVZC8RbW3R8HHeh1t7O3N%2FUYjWUHaXFQM3Lh%2FQ1sHykD85IZsuui0BwLGJbd5IPlfmHXfacNxTnVxoH3YZznTUlAExJkiGv81sPXyUZInFRKfmjS1pd0E0Vpe%2BwKiofJoqzyZKOkukICzY0bUzUlJJeFRqLez%2FrURZMh785xYhRmc6EpZFuxE0SPkMZ8bgUcwqAXul5%2FOQyvKDmIzsipgtqOIoSeZdUdELs9zqnPWZFjTrpAeBk1lySOSu%2FJgOQgpDWbRoMroJqJjFNfiz69lN6VeycnmfTvuwAaA0108D6iYVoMMed9cIGOqUBwCqPtx50fV0xu7LQZyNewEF3Lkq5n46XDt3Q8o85g910uKCx4d83SQbZEjTFhpa0OnU4PkFxzJjt896SgFMR0iaY4U2VqN%2Bt7F5%2BlJvehaOA%2BZNb%2B0xN0HVr%2Fon7ppUF%2BvSSBJWp%2FoQOKeflXOOUeJ%2BCsEZm36DCKnKAPViHeJLwjvtRKxevKuaBEM9wEbU1RdbRVvNWVROzwCYuDGkU8em33nML&X-Amz-Signature=bdd44af11b23fc86c56b18346d871edf8f82f4ad7807180d64ae60e6b188ac5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN5EEXYZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC8PEXgo3lA1tAiwLbZiY4mw3LWyCxThc7X6wf8Lod%2BOAIgF%2FsNw9HZeicwFTob4NFZfsLYmxm8mJmKcS4Fc9X8LFgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOwS4%2FgoDsQv29JAByrcAxik%2Fc1cZtWt%2FMdTMxSdXtu7v2Tl369ZdBpPY1ipvmZcV9ByJkqz8Eg7IjzSHUFuAfYQOHYVI1NFUvYXgyHmamVTUA%2BZEFnt4pcpveoPbzpGQABdSoxpczws%2FMg9835%2BlnyG447ShBS%2BhBGT%2F931Y%2F0OcddfVoDqJwxEI%2BvJur%2FNOrp%2F3NH3rWN89LX%2BI0hfGX28%2FolFSZbwV4bAYOWnklUVgEOjP27aRhj1%2FKbD7aDr2BXKwAAI4h4PRERUs89%2BFyJBfVDQKhGffeyg5FPrVJhhQGFktS4y87paF%2B6LNiPdXdpSWsSOlTN6T7mMzf18ntKDeRIocHbHFFVZC8RbW3R8HHeh1t7O3N%2FUYjWUHaXFQM3Lh%2FQ1sHykD85IZsuui0BwLGJbd5IPlfmHXfacNxTnVxoH3YZznTUlAExJkiGv81sPXyUZInFRKfmjS1pd0E0Vpe%2BwKiofJoqzyZKOkukICzY0bUzUlJJeFRqLez%2FrURZMh785xYhRmc6EpZFuxE0SPkMZ8bgUcwqAXul5%2FOQyvKDmIzsipgtqOIoSeZdUdELs9zqnPWZFjTrpAeBk1lySOSu%2FJgOQgpDWbRoMroJqJjFNfiz69lN6VeycnmfTvuwAaA0108D6iYVoMMed9cIGOqUBwCqPtx50fV0xu7LQZyNewEF3Lkq5n46XDt3Q8o85g910uKCx4d83SQbZEjTFhpa0OnU4PkFxzJjt896SgFMR0iaY4U2VqN%2Bt7F5%2BlJvehaOA%2BZNb%2B0xN0HVr%2Fon7ppUF%2BvSSBJWp%2FoQOKeflXOOUeJ%2BCsEZm36DCKnKAPViHeJLwjvtRKxevKuaBEM9wEbU1RdbRVvNWVROzwCYuDGkU8em33nML&X-Amz-Signature=2a4eb684bf6dd39dbf2ea78e9e44b2d702bac08d63cd348338e5bb735a57dfde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQQ4ABBA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFHyEglet%2Fat2XQNSnXUuaKafinCflol%2B%2B5MotnJ0uCgAiBkZgpSlcZ%2FdW9orDSFEg%2F49L5tqXLJp6HYuQL0f7xPDyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM%2FEoZaPjjvP6O%2FpefKtwD7I%2FmaXv3J609f5gbe7%2B4ysGQKXETvtSpb2H%2BQSqF5r896F7BmQWZFJuqKjroIz5ts4R63pG0uOOTY4a982sJSdbV05CadckV42PoxOJTQNf%2Fe2Nd0wwKR53Gj%2BE9pzh4%2FtNwHHQmxl%2B4u3nWxNb8XeHoVyFW85vQTW3TPlHQWJVc8uVfLO20I9ZzaKgzzigcpZxmpcd%2FMS2q6DGnzbwFMgzmqHYLNPlutHIrkuvkAzs03dNwHaMQl9DmMfBY%2FJHYcbRolmtwTbjvgVsFTvfNjSPpVjOdR7rMPzKeVjdqRqgc%2BXkWOF%2FGI44tk%2BjiZ3NUFX7FuQDjcUX7a9Nlj53PNtPkY3y80qDqHfDB7fr1rY1VvfUqAkspDtwrx46o%2Bx9DFpNaZ%2B3Q9sZBaCIX2a9GsqiwJUSIRqhxsJ2sk6a4oYmbGauf4g2U02HAavv9nUi%2BGLbDeS9sAm%2FuX6Qsglkx%2FQiUlwgneuvVwgPVwD%2FW3RfUPQMz2k%2BusQOR9CUNQxl6YHyLiiSlxh70jG2ApPeHTppHKfVepHUXmXOVyXLEOyhQOetZM6JZM8NmM8tKwtL%2FPUTLJeRpN2BnogxYGu5Qo1DFiZ3YVfwymMOiFzFfzgyglNWrrHrwqJ%2Ffrxkw%2F5z1wgY6pgHg0agf%2FFgrL0WBAUYbE7A5gtNhNV%2FE0vBeaGwxFNyaStNlwGmNOWofeaIEYDZBf5ZJsu4xSln7GBe27JhH17vk5WZFT1ler4eBFjQ5MwGkCQKSuD1%2Fk3nxFpoPZviGSXRCLPfTvPC505KPRl8rzgD1MuC%2FMgEhFNNjxi6fpEpJIO5BD%2FH4wjvbM2GFchssI%2BpPTOwCOcsl921bxtYYpqVep%2B5D7%2Bsv&X-Amz-Signature=99e6d0d761572e03eff4b7c4ec3ce8e47aed8eb5204097989bd0e8aa2a37f99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664452UPAI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDOCKc1SGhdW%2BRE3xrWL8RPxn3A5buw%2BTjYlNX4cw2REQIgeLz5j5JCB0%2BBihRsahwa5SXMR5u%2BibqvmFF6egw59Dsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJr2azUauydicX%2BWICrcAyYlZ63wtvInW8sUWL%2B84TvIikxHMvtyTzK2IphyO0n40mssLFGmdNTiRySLscwZtIQ48n27TMi%2FCep9X2RBsBe3%2Fl14OaKaTC2V9sUuRlCJVPiITPLdsLejXlD57IslJRD%2ByEgu4dgsyuAzuB74z3UBxj4DcDBsvCQDiqFTYVyeERY3pYbQYzphviGzcRFGD788f9kmdAqa4PP8%2BHHwZRLfYRDRj9bHUybTWdv51j90fmG1Bftxg5IpvwBQF5rtzdhGojoWh20hJYiCeYzQlfdEO9tSaTmDy5eiDjj7m5b9p%2BLkxw3%2BJM8x0gEdLrr%2BJp93luxzHd9dvrWrFOu%2F7NRvkRzCWjZes%2Bt0R3L9iyjaPcMNe%2FHh%2FBPq1keXXilh%2FZ5oim429eSWcGWfBcE%2FPcSeTUIjtM9AveRf561japxtpKnK4IM53mQWmOUl122AOAd2ubbj6tm7OPNONUsfn%2FZXOzbJFTBGSkL5l5Y1Dv7pg%2BUKx3ehMIHaz%2FXVkZJs5rBOE8AJtrE0WRSl%2BpcJF2xdnBwUds0NArSG3VlKaApL8Sz8PYyVt%2B34xrW2MPt1h930h0AbNzFmxNpOTrJGMfEfR1kRcfSUVImzDk9kAfZtJh5D7tiORq%2BjR06wMMib9cIGOqUBgcXZESYr1%2FG35DV4pp5I3eUQEJKouscivwhH%2BT7Gq383ERpCQ0OfAswUSiNojpOiAxRCY16grD2m9gTF%2BoDg0vTA1nb6Jc3CKqjhngBjfzQoqTI%2FZURa%2FBpCU5af8fpmroNmeAJXfHykApLw6AE%2FnEOWdeTVruPeJvQOjK3Vn6bFuUG4YaIM%2Fg9wTKRAYrO5tpBmXYwVbzVm0fiCpHjyDIT0O71r&X-Amz-Signature=f6c2f17a5ac07a1b63f9261136be42e72646c6124c4c1f88f7218c29b921df46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN5EEXYZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQC8PEXgo3lA1tAiwLbZiY4mw3LWyCxThc7X6wf8Lod%2BOAIgF%2FsNw9HZeicwFTob4NFZfsLYmxm8mJmKcS4Fc9X8LFgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOwS4%2FgoDsQv29JAByrcAxik%2Fc1cZtWt%2FMdTMxSdXtu7v2Tl369ZdBpPY1ipvmZcV9ByJkqz8Eg7IjzSHUFuAfYQOHYVI1NFUvYXgyHmamVTUA%2BZEFnt4pcpveoPbzpGQABdSoxpczws%2FMg9835%2BlnyG447ShBS%2BhBGT%2F931Y%2F0OcddfVoDqJwxEI%2BvJur%2FNOrp%2F3NH3rWN89LX%2BI0hfGX28%2FolFSZbwV4bAYOWnklUVgEOjP27aRhj1%2FKbD7aDr2BXKwAAI4h4PRERUs89%2BFyJBfVDQKhGffeyg5FPrVJhhQGFktS4y87paF%2B6LNiPdXdpSWsSOlTN6T7mMzf18ntKDeRIocHbHFFVZC8RbW3R8HHeh1t7O3N%2FUYjWUHaXFQM3Lh%2FQ1sHykD85IZsuui0BwLGJbd5IPlfmHXfacNxTnVxoH3YZznTUlAExJkiGv81sPXyUZInFRKfmjS1pd0E0Vpe%2BwKiofJoqzyZKOkukICzY0bUzUlJJeFRqLez%2FrURZMh785xYhRmc6EpZFuxE0SPkMZ8bgUcwqAXul5%2FOQyvKDmIzsipgtqOIoSeZdUdELs9zqnPWZFjTrpAeBk1lySOSu%2FJgOQgpDWbRoMroJqJjFNfiz69lN6VeycnmfTvuwAaA0108D6iYVoMMed9cIGOqUBwCqPtx50fV0xu7LQZyNewEF3Lkq5n46XDt3Q8o85g910uKCx4d83SQbZEjTFhpa0OnU4PkFxzJjt896SgFMR0iaY4U2VqN%2Bt7F5%2BlJvehaOA%2BZNb%2B0xN0HVr%2Fon7ppUF%2BvSSBJWp%2FoQOKeflXOOUeJ%2BCsEZm36DCKnKAPViHeJLwjvtRKxevKuaBEM9wEbU1RdbRVvNWVROzwCYuDGkU8em33nML&X-Amz-Signature=6ae8f62d0fc2a360bbb18da4c40f96a538806207f599b2c5b2a774e9e0ea6d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
