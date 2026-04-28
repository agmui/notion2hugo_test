---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TJYWZI%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD4rXflyP0JZqIs5FL8MGr3BW30RPeLUV%2BYA2%2BSXcSHDwIhAK6Srv%2Fr3sCU0oxOHYAlLBNyWz%2Bo1odxEQRHaKoODymAKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxPdn70HorUjsy4uEq3APQ2vVSEvL71m8iOjApIfkEpqzfNnZErDKhSZUc75t8WRe0Ufhz0T0tNiR1kPuEaaUfzpnaEm3XpOnU7js0JHOMoYEGQ8imjK6dXRg06gaJ2P7NGmc%2F3p7DdZP42fHvVci6QAihoc964u47E59JfWPQHHzlQ2cIpxWsWD1Iao5ZOG0JmLpeTkRd6LMH%2FjQJ8uDCTiklG05Btn8ivsZ%2BwSotQyy8e9dU8Pofd30gaT300%2BBSJaKPX2fYpUg1RXS8O9CS2uKJExb5Xm0rkSykNY4DrUVaU9XqGG%2F7zRgeFYMD%2BBdrmsUeP3rVIBjtyYvk8gxBIpyFWzOgHtJnS2%2FpYibGA0ts6vx3dILcB9cCGXegWxleBsLNU9R%2BlrZ368NJ1Q%2FtPQ7nJbXUTFJmRfxv5K3kIujOh8%2BgsYKLXz2SPeykQHScCVVlElwQx5KJqHxJ5WFgxfbRB1UEhLktybHQc8G7%2FFIC3hQMUj5IevM2VBjRuVFpRcj5qQbt4RdX0UuJOFwd91Me5h7FMACrbVV0RzrK62Wz6IquKxYHBVibTSXVJqIAAX6gRwj7Ygc67fPeplmcgc6gdA%2FJXkOPDDWI5gvyp0y2ZA%2BWHrqKpssLxlz7qO%2FBEekxxaKi%2FeaXFTDepcDPBjqkAVSh4BH7XK57yNJx2dXEikmui4K%2BSurvQTdDYegYhE9H7IoH%2Fs6NiMRJW7Gj7ztDuSP9faXnzIbDNKphiyyN0L3Xr07M%2BsaxwnZ8IXlshJI34CwsDn3MM1mtx5h6MkVGqKNu%2BydmhDO1gmY5hZbJFsVfneU76oKwRWvv9Vei5ZOr2iWpbhaO5z2mS5zamtku5AAYkwdikn2gETzoX5svZM%2BDsnyQ&X-Amz-Signature=f56b316f4727bdb892673cd009352062c25d1d763f7ee8cddf2723edd25be540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TJYWZI%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD4rXflyP0JZqIs5FL8MGr3BW30RPeLUV%2BYA2%2BSXcSHDwIhAK6Srv%2Fr3sCU0oxOHYAlLBNyWz%2Bo1odxEQRHaKoODymAKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxPdn70HorUjsy4uEq3APQ2vVSEvL71m8iOjApIfkEpqzfNnZErDKhSZUc75t8WRe0Ufhz0T0tNiR1kPuEaaUfzpnaEm3XpOnU7js0JHOMoYEGQ8imjK6dXRg06gaJ2P7NGmc%2F3p7DdZP42fHvVci6QAihoc964u47E59JfWPQHHzlQ2cIpxWsWD1Iao5ZOG0JmLpeTkRd6LMH%2FjQJ8uDCTiklG05Btn8ivsZ%2BwSotQyy8e9dU8Pofd30gaT300%2BBSJaKPX2fYpUg1RXS8O9CS2uKJExb5Xm0rkSykNY4DrUVaU9XqGG%2F7zRgeFYMD%2BBdrmsUeP3rVIBjtyYvk8gxBIpyFWzOgHtJnS2%2FpYibGA0ts6vx3dILcB9cCGXegWxleBsLNU9R%2BlrZ368NJ1Q%2FtPQ7nJbXUTFJmRfxv5K3kIujOh8%2BgsYKLXz2SPeykQHScCVVlElwQx5KJqHxJ5WFgxfbRB1UEhLktybHQc8G7%2FFIC3hQMUj5IevM2VBjRuVFpRcj5qQbt4RdX0UuJOFwd91Me5h7FMACrbVV0RzrK62Wz6IquKxYHBVibTSXVJqIAAX6gRwj7Ygc67fPeplmcgc6gdA%2FJXkOPDDWI5gvyp0y2ZA%2BWHrqKpssLxlz7qO%2FBEekxxaKi%2FeaXFTDepcDPBjqkAVSh4BH7XK57yNJx2dXEikmui4K%2BSurvQTdDYegYhE9H7IoH%2Fs6NiMRJW7Gj7ztDuSP9faXnzIbDNKphiyyN0L3Xr07M%2BsaxwnZ8IXlshJI34CwsDn3MM1mtx5h6MkVGqKNu%2BydmhDO1gmY5hZbJFsVfneU76oKwRWvv9Vei5ZOr2iWpbhaO5z2mS5zamtku5AAYkwdikn2gETzoX5svZM%2BDsnyQ&X-Amz-Signature=514cdee270a43f50191dd34744e6be6d2cc8662aaea89183cc9d51b1e06d05ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TJYWZI%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD4rXflyP0JZqIs5FL8MGr3BW30RPeLUV%2BYA2%2BSXcSHDwIhAK6Srv%2Fr3sCU0oxOHYAlLBNyWz%2Bo1odxEQRHaKoODymAKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxPdn70HorUjsy4uEq3APQ2vVSEvL71m8iOjApIfkEpqzfNnZErDKhSZUc75t8WRe0Ufhz0T0tNiR1kPuEaaUfzpnaEm3XpOnU7js0JHOMoYEGQ8imjK6dXRg06gaJ2P7NGmc%2F3p7DdZP42fHvVci6QAihoc964u47E59JfWPQHHzlQ2cIpxWsWD1Iao5ZOG0JmLpeTkRd6LMH%2FjQJ8uDCTiklG05Btn8ivsZ%2BwSotQyy8e9dU8Pofd30gaT300%2BBSJaKPX2fYpUg1RXS8O9CS2uKJExb5Xm0rkSykNY4DrUVaU9XqGG%2F7zRgeFYMD%2BBdrmsUeP3rVIBjtyYvk8gxBIpyFWzOgHtJnS2%2FpYibGA0ts6vx3dILcB9cCGXegWxleBsLNU9R%2BlrZ368NJ1Q%2FtPQ7nJbXUTFJmRfxv5K3kIujOh8%2BgsYKLXz2SPeykQHScCVVlElwQx5KJqHxJ5WFgxfbRB1UEhLktybHQc8G7%2FFIC3hQMUj5IevM2VBjRuVFpRcj5qQbt4RdX0UuJOFwd91Me5h7FMACrbVV0RzrK62Wz6IquKxYHBVibTSXVJqIAAX6gRwj7Ygc67fPeplmcgc6gdA%2FJXkOPDDWI5gvyp0y2ZA%2BWHrqKpssLxlz7qO%2FBEekxxaKi%2FeaXFTDepcDPBjqkAVSh4BH7XK57yNJx2dXEikmui4K%2BSurvQTdDYegYhE9H7IoH%2Fs6NiMRJW7Gj7ztDuSP9faXnzIbDNKphiyyN0L3Xr07M%2BsaxwnZ8IXlshJI34CwsDn3MM1mtx5h6MkVGqKNu%2BydmhDO1gmY5hZbJFsVfneU76oKwRWvv9Vei5ZOr2iWpbhaO5z2mS5zamtku5AAYkwdikn2gETzoX5svZM%2BDsnyQ&X-Amz-Signature=145966baeb1f78fbdb0cb75f7906939bdbc8030c34cf6b9a6f196738b0488835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLYICBXT%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC2f2WMnGy4779XK%2Fifv4THu05UbfGi%2FSHJ3eSVeH8iMgIgH0zSBwlMq%2BJtPt%2B1FDWCBgkyI4%2BAmgP7DxgJq3SEgbwqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnkOP4%2B7%2BkFSIJUDSrcA7RSyQ%2Bg71Cu1kJly5LohlYGXrlx9%2BCTqSoScG8f2k5IV%2BdGn81xXz6nSIC5sVIHG0G1TtJKPO9D3P23GBh%2Fcx2fudcoO1NSUxdd%2Blw%2FfAdlzMzpxmnQIxO6o3VpCEGd%2FN%2F9QsrBoGfVPRJlvi40NKhZzQI0fa%2BKSJPrE%2FxKiGqLXHqxB7J6xP39YIxB%2Btcqgek5dd%2FWtYTtikXacTBbp0DHgz8QWtCAQ8maMq79jyCaSccAHqvZenTdsdKr7Tsp1xMzlB0mgzOvXjscdASEitOhVtmWdYfo638S0dUZzyBGKL81leh86I6s4jhLAaofHmbKjyK8odTo0PpuoEBh9qv87y3SItzr0HCFAoR3gyhQRkxmN47C26tLLHH%2FdqNhEkbfkorUluyYDs%2BRx%2BE8Zin4RB3V6sqqqOYyKWkqtnOUI%2FYk51F3QN2QAkj6LQzF4sUxGCoH7gHBsgxr6gyelnJfICHcq4jz8k0pnif%2FTxCyLMcuz8%2Bop1PEzzJP9%2BAVLGKEJCQpNk1uvDnZPMC%2Bahy52%2BnIdtX6f3Zt%2BktJPT71IBQo2zVwgVUPuFMBj9pkZoNTWyPpEZ8plS3x3flrmfOs1wEeE9oS861BmqNklNJROfPPP%2BtgXPRWN%2Fv0MOSowM8GOqUBmjxYybmgdjWhqVsJcaGRllawirrAzBD4MniGtK4n%2FTIOgEVuxqLzd%2FsVoymedRxjESPZx2o2QZKTZgPfIHXRYrheje%2FqTusgHdBgvVcvwwYZNy8HPbKs7XUzxawbwU13u%2FTo%2BR2U4LhkI5N4RhQ4O4e4p6akkovMB8HkRjfJEJtNJHfMV6tTjCVvK%2BED5LdhDCYwsYPeeqcKB7V9vEH9TOE1z8LV&X-Amz-Signature=3717f6512d32db0735ff4df8a7b359e33d402a0ce053d6286dcbeb70f73ef4e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LKXBEU2%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAZ1MlVABB9xaqwBzTRVLZMcUrEkPXxtz3ARwemDtuMAAiBWbvj%2FwvEqMHdxAtC1KXS6w5DAl6Ar3azgIDNzSouohCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVcCBMx6OdxUScY1tKtwDIlQXOpiLwjEHv7tpFpL17D%2B4396%2B0LOvIPibGOhIqDuMTFEV78DGwUz%2FmJ7yJz%2BleuQ9%2B7yei0Og7eu2WoqUFSCPmm4h9Vf4cD0nmG6Vqufnh4ZUum2ROTNx3tgROdQ5UA6LtKdD6NIEPntLtaDiM7f%2FW1GssMfp1MwxGKbaDykW1ynQmaLgmSOS5ijTvj8uRsOji%2B%2B271H2LJz8SCdAaScMOoGnCQVT0b8n17bR8gAyaVoneRHhBiJ3H2Jy3AUC0Fxjm%2FZwF9SQxaC%2B2FQyHlhXOgcs%2B5HMBLn7XZ9Oh6jPy6V1qP8QKz3F2RBkHpENnOuw3MXD1pt7hOUGPLnhR3pY%2Fk88u6NIbKXv5hzkJyqXAP40XGjCRe5j8xoXVvLEXmZih0Iu9Y7e51d1cwP4Lc6HEY8cbXI68cf61ivsEW0aZCU8qKNdunhEcktQKKkK72yhD6NCmX%2BXutV8NtfpEDGF%2FuyQg41fMBn%2F0RfBjLYr4%2FIufA%2BSlhpk%2BGLTuR6B1kAyN%2FdVYrUWMUqQVlZlM3CsQrjy4o92NP5iTUbKlQ2%2FsoeMBR7o84tTo%2FP18jVTxz6Q5yJXgtNGJhIgO73KxEqRmnFjF3tc0Ck3x0kttof1OwrmMlNkdALfX3Aw6KPAzwY6pgEriaXbe8XQ9AwJKEC1XMUsKYKeJG9a5o0B4nxJfnFCq0gNluBkTAwAzO%2F2Uz6F2GVXmYWeew9ItG%2BjkciXpMI2q61G3nbwGgBNrXs763fat%2FhA0kQAo542azOWP8JRT2WvCYy8P%2ByTrNe1jJL8m72HZPgSG5rl%2FmzJoS3awRp4s2rEpCkVeDTEXxd5lDxJOAxR%2FSFaRAxqEdOeTyYQkT7N1zdG9E7i&X-Amz-Signature=a2919f2033a849f9b16f6f0bee8a9a00bb100149cead0f5af51ad833bed9b2bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TJYWZI%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD4rXflyP0JZqIs5FL8MGr3BW30RPeLUV%2BYA2%2BSXcSHDwIhAK6Srv%2Fr3sCU0oxOHYAlLBNyWz%2Bo1odxEQRHaKoODymAKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxPdn70HorUjsy4uEq3APQ2vVSEvL71m8iOjApIfkEpqzfNnZErDKhSZUc75t8WRe0Ufhz0T0tNiR1kPuEaaUfzpnaEm3XpOnU7js0JHOMoYEGQ8imjK6dXRg06gaJ2P7NGmc%2F3p7DdZP42fHvVci6QAihoc964u47E59JfWPQHHzlQ2cIpxWsWD1Iao5ZOG0JmLpeTkRd6LMH%2FjQJ8uDCTiklG05Btn8ivsZ%2BwSotQyy8e9dU8Pofd30gaT300%2BBSJaKPX2fYpUg1RXS8O9CS2uKJExb5Xm0rkSykNY4DrUVaU9XqGG%2F7zRgeFYMD%2BBdrmsUeP3rVIBjtyYvk8gxBIpyFWzOgHtJnS2%2FpYibGA0ts6vx3dILcB9cCGXegWxleBsLNU9R%2BlrZ368NJ1Q%2FtPQ7nJbXUTFJmRfxv5K3kIujOh8%2BgsYKLXz2SPeykQHScCVVlElwQx5KJqHxJ5WFgxfbRB1UEhLktybHQc8G7%2FFIC3hQMUj5IevM2VBjRuVFpRcj5qQbt4RdX0UuJOFwd91Me5h7FMACrbVV0RzrK62Wz6IquKxYHBVibTSXVJqIAAX6gRwj7Ygc67fPeplmcgc6gdA%2FJXkOPDDWI5gvyp0y2ZA%2BWHrqKpssLxlz7qO%2FBEekxxaKi%2FeaXFTDepcDPBjqkAVSh4BH7XK57yNJx2dXEikmui4K%2BSurvQTdDYegYhE9H7IoH%2Fs6NiMRJW7Gj7ztDuSP9faXnzIbDNKphiyyN0L3Xr07M%2BsaxwnZ8IXlshJI34CwsDn3MM1mtx5h6MkVGqKNu%2BydmhDO1gmY5hZbJFsVfneU76oKwRWvv9Vei5ZOr2iWpbhaO5z2mS5zamtku5AAYkwdikn2gETzoX5svZM%2BDsnyQ&X-Amz-Signature=0e2c522cf1440ed12915435757ddb3260547922fa5536592ac15940d5c1f3753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
