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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQJTIVD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCdayVkCr%2FNubcDceSA6hL0gZtJHLKyaIN2%2FYPL8lJewAIgZcuDtKWw9UryfUs1YP6TnlLz7h9ILQie%2FjGNssXZ%2FUoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPoY%2BEYKNWFbD9hnCrcAxZkQnJbQZsIm96urpoBxUQmTFyNcwowcKA1LWhoVhEBIfRVg4HIR0irUWeBjKnMZYakC8F083gy1yMX0U6jcds1m%2F3VxCaG%2F82UGq%2B0xEj2aROapzgAuBR2bk%2Bzvr56kN8vOTpiUXisIw4WAGe8kCzh%2FommmnSnTgRD%2BT08Q4OcdS0dN7YVcYzFBl%2FGpqrhavZ%2FCZODDtXYG88Yz%2BznfKiuaVirqxayc8raFO7Ev%2BaGVsw%2FhTznhe71vdnl5IJ9rxtq9bBc9htinQ%2FDWkFomq6SZHhQy5agvXbkbJ78IPjvtDdkzAeQBL%2BqhFuX2NSu08bPmiU1oQA7wFeWLmfwemlvqJ1CKOzcTZZb6%2BqdyQSQGkzlgRPC3cXzLaVmcPUBG0aSA%2B3SouTuQdpW7sq1Id0IPM7HTkEDmqNeyIWq3FoeDfmE1Y2cFj5q3rShc2f2BFu2YbpPTMALplBOQTVUu8R9Vlzo2sZqkLXDyOS1bRDxA5BsSC50PNHKHotNv3nuakj2y%2BOgW%2FhdKho3pKRX95Yuj2E0jLjjfQSaTDhkYGLOjZlfh3gB8EcMJwtGAQaRheuMUtQ6KSg%2Bd7jkYh8c7bRVaWyOZaBdUmNoPfuMV9ps1XjXH4sTVIGWAofdMNCk3r8GOqUBkE%2FNIz%2Fjp33mAiqdqmpKG3S9Gz5I6xXtti2f5xUvIvHwqfHLNMjaMZOq1jSkJroijfkMMg2RSJlbpFll4hVKyhzmMB1Cr9RxdF2cM6Jgude%2FiTtn0HyapNDXWykMQre6tjVqEpab%2FFG3MWT9QAyTfKcZUkQSkoqLT%2BlLLCYNAjN3I5iiNv8PmeXvvtgirc7CAT68iXvjzQa0Y5qWfogs6AVwzTiX&X-Amz-Signature=015f3f880863ea4a829a6974e116914a6a434da6208e1018a9ddf438bb2684d5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQJTIVD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCdayVkCr%2FNubcDceSA6hL0gZtJHLKyaIN2%2FYPL8lJewAIgZcuDtKWw9UryfUs1YP6TnlLz7h9ILQie%2FjGNssXZ%2FUoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPoY%2BEYKNWFbD9hnCrcAxZkQnJbQZsIm96urpoBxUQmTFyNcwowcKA1LWhoVhEBIfRVg4HIR0irUWeBjKnMZYakC8F083gy1yMX0U6jcds1m%2F3VxCaG%2F82UGq%2B0xEj2aROapzgAuBR2bk%2Bzvr56kN8vOTpiUXisIw4WAGe8kCzh%2FommmnSnTgRD%2BT08Q4OcdS0dN7YVcYzFBl%2FGpqrhavZ%2FCZODDtXYG88Yz%2BznfKiuaVirqxayc8raFO7Ev%2BaGVsw%2FhTznhe71vdnl5IJ9rxtq9bBc9htinQ%2FDWkFomq6SZHhQy5agvXbkbJ78IPjvtDdkzAeQBL%2BqhFuX2NSu08bPmiU1oQA7wFeWLmfwemlvqJ1CKOzcTZZb6%2BqdyQSQGkzlgRPC3cXzLaVmcPUBG0aSA%2B3SouTuQdpW7sq1Id0IPM7HTkEDmqNeyIWq3FoeDfmE1Y2cFj5q3rShc2f2BFu2YbpPTMALplBOQTVUu8R9Vlzo2sZqkLXDyOS1bRDxA5BsSC50PNHKHotNv3nuakj2y%2BOgW%2FhdKho3pKRX95Yuj2E0jLjjfQSaTDhkYGLOjZlfh3gB8EcMJwtGAQaRheuMUtQ6KSg%2Bd7jkYh8c7bRVaWyOZaBdUmNoPfuMV9ps1XjXH4sTVIGWAofdMNCk3r8GOqUBkE%2FNIz%2Fjp33mAiqdqmpKG3S9Gz5I6xXtti2f5xUvIvHwqfHLNMjaMZOq1jSkJroijfkMMg2RSJlbpFll4hVKyhzmMB1Cr9RxdF2cM6Jgude%2FiTtn0HyapNDXWykMQre6tjVqEpab%2FFG3MWT9QAyTfKcZUkQSkoqLT%2BlLLCYNAjN3I5iiNv8PmeXvvtgirc7CAT68iXvjzQa0Y5qWfogs6AVwzTiX&X-Amz-Signature=f96d80ef7c3ea89d24dbd50390a373f5c0165e12506d3b3e34cfd2c22de161df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2DXCGUP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCILgsB72O7kRxbrfcfab2A6YKlYShxd1x4Nhm7%2BCJ0aAIhAOU76hX49KJ51PqzuxEXdGbldHb1xQf0ZzsNWs0fpXivKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9%2FYFc66vkNL8V9AEq3ANxvNSAzFgO5QMFesT2%2Bxd7g99UiUVqmRPwbKGrM6uxbjUKFNq1LhvsKK%2FeKLaAIfqs2MXBdMZKMWW3NWaPTaSNzxxScd8ZWNY%2BKn0xGKH6SutUwyPpov4Bi6RFJ925siby9z5zlv3se9K9yMBrqba3xbjKxUxxXbo5wD%2F6nScsOrqApYeTkweR%2BLXzwJLylRqy5nKjbyUzFupHwkv1VXqgAj%2FIV55eJhjvuYsobx7khfgY%2FSKQFCEO%2BvaZ1k3e%2FbsPyn0QRwtI%2F6ngMNODG0re3iz9Au99PJ%2B%2FyYQ%2FWa7OHh1bepCTeupjG2JILsY8AfLglg92BFO62r3fCZlTKPFpZMpz%2BYEg8xJ2U6G%2FfruLvsTG32Q8Pk8fA%2B2LPg1X6b6EbPWrQXAmheuU027x44PzASJ2Zs%2BtMg%2B0iOdr%2FMhRIiE8w24jyfldVfT5yOBMnIFC27dRfCSJNdeFXkmEkj1KNa%2FSFHzqP8kusgSs7usxKLQMpsEa%2FO1efCAe7OHtvgHBSk0v5ySQ%2BBKTre08T9pYY%2BjcSLHUx%2BOkd%2FfOkbxCladIjZFKyXnIMjfPpylwsQyPdIU8gi1ARNkTl0seJ3%2BUUZVp3rtp1XlkNVZ2hl7y0YkPidP%2FBXTGuP%2F4azCMpd6%2FBjqkAXoqBlUTW7gNHDx%2FIDfgqSFRgPRloYik8FG7M4i6Ez9lkF9h%2BxuUxA57L5%2Brba4vSp0QulzU0A%2Bus2kJnVA5fFjzZwQM2o%2BASnVbXjfpsllvJ9nSFttbAWz8p6vHHVM7yr%2BE1Ae8erYEAlloL%2ByULcw7g0Je4dJTNFSoU11xchoTGtAdaNrp9t3Uz9OgvG3%2BSOQYiAvWNATSHdxu7wWjzBPr%2Fnmi&X-Amz-Signature=9aebefa108e212ccbe2552198f49cbd340829c29a79d5f1a910a58d57e474260&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LJCYCT2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCZLJmGkjHSbSXLphhbjcOBdWloFlDddXzqggpcdcxdewIgKTw8MdCV4JJTdlPBxy0fF54b3MFcSqLeHQZ4sgxYGZMqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhjMEEB3y63qfDXAircA0Xw%2Bn8Hd%2BK0gLyhAtucw5AX7yel8u%2BsoZK8cu6xcIiqbXwFkTSjRSsxSj0J94FqgRyYJAYE9IBOIL3mwha%2BvDYTyz0t2esnixAXN9HdvseLU1WtDXGoULKc%2FEqYOeycfROWgHscLK8SdOeBmbumSeWHng%2BD%2BKv3e2emmwtm53gi5SidZmB%2FGktCtDY9y5JXJeUEhEg%2FpwFX7i0u2SLqH2K834uTYk0iTTjG%2BO0GQVl%2Bvc8DJCf0XaS%2F2vQU0hPzf8zVSHfeQD0A2bHTHJFDQrlCWJsoxxJOVbrJ2gkQbTahktPbPgFmyjaC%2BmyBSJLn%2B1p9JJVNhQttY71px0eBUCC9sOwK5iswWBurni4t41VbwZSzxLd5xbVA%2BTrThGEimTBw3hKFFB%2B2Q8UkvRG35jWVoS30hfIQnYMD32TClTg3Ri201SZV2TXcQlxm59WBND%2BMXqWBwkB%2F1F8xkODl0wJB3DKmpBQ9N6HcHS5VJ832ukklEk5Si%2BuHvyuLh26l7WNiQ63BAUiUhXI3kiQvnqSPD%2BA8NQXlHemd7PR%2BkjintOjEtBeTXfiGC3aZolIHADe8z%2F5DMKR1rrvN%2FFK%2F0XZtk%2Fz5zdrc%2BTFc8njDidTDmOgMO%2FZSoTVOIXOGMNuk3r8GOqUBwYQW%2F%2FZRr%2B3djee%2BAOJK4RTmgpkyYOqSbxVi6%2F1geEK1l2rSeb281bnfMD6IR6a%2F7aVEX7Hfaz0vjDEi93JSduH2ttPWebubG3dHsHQE0zImV%2Be1ffbKVc2ZGoMtw%2BcNX%2B8lW%2F%2FwkW0b1mNegSw82P4h2JV629G5gizApjk%2Bopfwrj56vN5K2z0jPfjfovvpRnUsMRFodnxT4Kl61yxK6WqS%2BCPm&X-Amz-Signature=c24e47b8482009af49f584ca40e5d8db2705408645b77cc977b1ae89b1342840&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYQJTIVD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCdayVkCr%2FNubcDceSA6hL0gZtJHLKyaIN2%2FYPL8lJewAIgZcuDtKWw9UryfUs1YP6TnlLz7h9ILQie%2FjGNssXZ%2FUoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPoY%2BEYKNWFbD9hnCrcAxZkQnJbQZsIm96urpoBxUQmTFyNcwowcKA1LWhoVhEBIfRVg4HIR0irUWeBjKnMZYakC8F083gy1yMX0U6jcds1m%2F3VxCaG%2F82UGq%2B0xEj2aROapzgAuBR2bk%2Bzvr56kN8vOTpiUXisIw4WAGe8kCzh%2FommmnSnTgRD%2BT08Q4OcdS0dN7YVcYzFBl%2FGpqrhavZ%2FCZODDtXYG88Yz%2BznfKiuaVirqxayc8raFO7Ev%2BaGVsw%2FhTznhe71vdnl5IJ9rxtq9bBc9htinQ%2FDWkFomq6SZHhQy5agvXbkbJ78IPjvtDdkzAeQBL%2BqhFuX2NSu08bPmiU1oQA7wFeWLmfwemlvqJ1CKOzcTZZb6%2BqdyQSQGkzlgRPC3cXzLaVmcPUBG0aSA%2B3SouTuQdpW7sq1Id0IPM7HTkEDmqNeyIWq3FoeDfmE1Y2cFj5q3rShc2f2BFu2YbpPTMALplBOQTVUu8R9Vlzo2sZqkLXDyOS1bRDxA5BsSC50PNHKHotNv3nuakj2y%2BOgW%2FhdKho3pKRX95Yuj2E0jLjjfQSaTDhkYGLOjZlfh3gB8EcMJwtGAQaRheuMUtQ6KSg%2Bd7jkYh8c7bRVaWyOZaBdUmNoPfuMV9ps1XjXH4sTVIGWAofdMNCk3r8GOqUBkE%2FNIz%2Fjp33mAiqdqmpKG3S9Gz5I6xXtti2f5xUvIvHwqfHLNMjaMZOq1jSkJroijfkMMg2RSJlbpFll4hVKyhzmMB1Cr9RxdF2cM6Jgude%2FiTtn0HyapNDXWykMQre6tjVqEpab%2FFG3MWT9QAyTfKcZUkQSkoqLT%2BlLLCYNAjN3I5iiNv8PmeXvvtgirc7CAT68iXvjzQa0Y5qWfogs6AVwzTiX&X-Amz-Signature=a5655b5f55b7cdbf4f31798836315daaf22fe10477d7013eb03271a8d20ef20c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
