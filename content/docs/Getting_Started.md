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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STD4NGA3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChQnqmjIY%2FoS%2BgtEq3EqKtujSnm6Nk%2B97FQZSEF37cuwIgDupMGgzfYdHC%2BvhnvzA8Igq9SmW2HN%2FtJH2ra45ANTsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGuT8bKagyhHilJKCrcA39E9bFYHwpoyQaKHR7acAxfSDhvQudmqhptS6c6uMIlzVSw12xOvfJnYx6PxpVKlsg8u0QtDt5aAisw91HVICtWudLhEAy733wdYv3FmpHZzRI%2BD%2FftGwMwhVcx0oZdUNHI4NvNA%2F5NtJ6h54zhXUL2WFPH7R2f1ZyUwLu9ijFKxO%2FwNCNTIq37IyoOdz68OaGdlv8NQU6raoMa2GbkuBvWri8UvsCnCZmSod7vIpv1TtNTpp8xexMi09roLysCRQ%2BzQBs4KEtv6R6%2Fe3c6PGI%2B7xE5jRvzObuLHeT3mIksW0a5vK977WHvaeXH3xac3RTEXD36Uj3Yi30Dd%2FmB9wliUxFOoY16u0cz0s7Op3gevVysKY%2BIWPR4bx4%2BH57AfJzMLIm%2FC8YyaiJ45tfOpsx3fxLemPGmVw17%2FhTKAMsTTq2iwVE9eq3ngAmBOo%2BoKP3p%2B89gKt%2F55TvkF4T8HZ98bZJAabB85ZIn901nro3Vam9oSRKGesbyGl7PK9AJqtvAfkS3NQ9Vm9KajApf%2BcKLpCuDWa%2Bt39C25wBtuiHFnoDFr8l4RxU0lO8GW3dN91x%2BdgUIsmBrZ%2BXa%2Fp765sQ%2Bmd7m95FIqNWHYMA6G8xYJoAozSP1%2B78GmiRVMMmJ9LwGOqUBLmn0t%2Bxt7V2ARvONCGNhSDy6zhWZj5VxgklH4KDgPlMOtoq8LHKCYZsrHuslCbg890kwNK7Omb6kMFsDpzTKsVoPp%2FRqRi4%2BlQZwohbDTnkEs1IUeRZHqUgiovrmayuFKb%2FuS6Jw0FqeFByF4hdpY8V9Vp3ANItSaebQAA24%2BjZurO9J1buTnrKsHj3KCCJNpiaQ8viWau8zjMFxuAeXjmut5Amu&X-Amz-Signature=3cde035ce68814783fcf34648ac0336518cd3322e4e7454f24ec5915d509f0fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STD4NGA3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChQnqmjIY%2FoS%2BgtEq3EqKtujSnm6Nk%2B97FQZSEF37cuwIgDupMGgzfYdHC%2BvhnvzA8Igq9SmW2HN%2FtJH2ra45ANTsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGuT8bKagyhHilJKCrcA39E9bFYHwpoyQaKHR7acAxfSDhvQudmqhptS6c6uMIlzVSw12xOvfJnYx6PxpVKlsg8u0QtDt5aAisw91HVICtWudLhEAy733wdYv3FmpHZzRI%2BD%2FftGwMwhVcx0oZdUNHI4NvNA%2F5NtJ6h54zhXUL2WFPH7R2f1ZyUwLu9ijFKxO%2FwNCNTIq37IyoOdz68OaGdlv8NQU6raoMa2GbkuBvWri8UvsCnCZmSod7vIpv1TtNTpp8xexMi09roLysCRQ%2BzQBs4KEtv6R6%2Fe3c6PGI%2B7xE5jRvzObuLHeT3mIksW0a5vK977WHvaeXH3xac3RTEXD36Uj3Yi30Dd%2FmB9wliUxFOoY16u0cz0s7Op3gevVysKY%2BIWPR4bx4%2BH57AfJzMLIm%2FC8YyaiJ45tfOpsx3fxLemPGmVw17%2FhTKAMsTTq2iwVE9eq3ngAmBOo%2BoKP3p%2B89gKt%2F55TvkF4T8HZ98bZJAabB85ZIn901nro3Vam9oSRKGesbyGl7PK9AJqtvAfkS3NQ9Vm9KajApf%2BcKLpCuDWa%2Bt39C25wBtuiHFnoDFr8l4RxU0lO8GW3dN91x%2BdgUIsmBrZ%2BXa%2Fp765sQ%2Bmd7m95FIqNWHYMA6G8xYJoAozSP1%2B78GmiRVMMmJ9LwGOqUBLmn0t%2Bxt7V2ARvONCGNhSDy6zhWZj5VxgklH4KDgPlMOtoq8LHKCYZsrHuslCbg890kwNK7Omb6kMFsDpzTKsVoPp%2FRqRi4%2BlQZwohbDTnkEs1IUeRZHqUgiovrmayuFKb%2FuS6Jw0FqeFByF4hdpY8V9Vp3ANItSaebQAA24%2BjZurO9J1buTnrKsHj3KCCJNpiaQ8viWau8zjMFxuAeXjmut5Amu&X-Amz-Signature=58fbd52cba727ab192f8a69c1727b0d5b99cabfa1ee58866d6031050b85c8bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CBLQ4JZ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeYXim70YpaHEZM6nyqdbnIrLHvQiQdN9%2BQaAxknQSngIhALHN%2F0annA0OYVKGWKV3Mlg92Hckw%2FBnOu3CwZu401UQKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUgPPR7WYOT%2BC5xcMq3APnbr5wDvHm0aR6ta8z74qGvO7uo8fpwTvY%2FXMQWKvdAN3XTU8Wu%2FMd504U8QEJBZRe7%2FPZO6%2BcSqjJDfcZ%2FLfmeEwxcMkZHm1D6gw4O9MvGVBeQc2Z4xgcNXQ8TYYPqcT6O2aZeW7c%2BSP%2BFU%2F%2BC4gCJp7EXSymkoQdEh2fWNtWdtVAuboMxj5lUXpz7UadVsYNLwDZSwdtCghKS%2B8MRBvisiFmvaPRUSZaEYqXx4%2F%2BVkAizuyE0IvGLuVkG0d5EUohE5CtJ4PPSha1ZHBEYq9lsYT8q%2FCxDyRoC1f%2FYupliQm2Qr9VdpMQdykSBMuj8YWPWUmGxu5THIvZ1Nc6YoaPMfGne0HfFn9%2F%2FtjFLPKqtoxnxN4EReP5LWRkqP46CLqfYLihRyZkjrOLPMSwB3Ue5l07nkMY0RqjreQ3Vut2ZSxv9bF4kFHMeP58xhdat7PhTiwFUWykF%2FKwN%2FjzhkkzT5%2BI1XwZK4b0Wsg%2F9EaZitfSg4OX8x8b%2FgP4hDQ1JN3n2pPAc1ZJV6I%2B2Yp%2FbdEoie8PdFltWqtuuhAB4nIp2WBR8yZOBCB5W8nWIv6TlaKoz4IM%2FjR%2BULU3breAGgOYfV9CUoQObmefgiqR8NQH0IaFXU%2FamlUuYT6fsjDrifS8BjqkAb265kurMC82c2zZNULQe4ctYB6rJanmO9Krfk4gYJ2Ua1%2FOeGVo7ersyd2uKWJMPw7ASljyZjbk7p%2BlHRYWsIXSVV5TN4ANJgbLv9jptIsXB5ii1yF4pPZ1YVSw6vQbl2tuWJWAw52kUQBLFq5gR0ssFHKlmCXupp%2FFMDglG15z%2FfnazjAiNjkuf6oS%2BBBjzjV5Q3YACXrtJWOjI4%2F9HSvoO4za&X-Amz-Signature=110115321b443fb1117e2a1a4916d7c60d0e3638f5a276e668dd4fcf4aa2a334&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3E22WW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICaFhIIg%2BlnfDm%2Fg%2BDl6PCCAvLaLNauIxnL1CbBwoIewAiEApi4sJQuT%2FhPq0rTVt0VytPGfE9DZlRTaKpyVUO2tpPEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP95raS3Nl%2BaN8p%2FGCrcA%2BtCjU5Unax3Nda4WhovU325Hkt1EirogzerPJ%2BaMbSbgsrTp8J88FFxYHR%2F4mRwP0%2BvH3uTUrWHkCpE71xXo9b4UrG5vi%2FDX6EOzv0RWX0IG9Dj0yjNy%2BL81%2FxMcmipCnlugXmL1sj6zhl%2FY7grPBW0h%2F2mklxmZyUUI4J%2Fn5y9eK%2BNlz4%2FXkGOwwag8MAVeo8pI37joPOpQ71%2BOhFN%2B8t3Kob6O8Bgv1XBgoWy41jx0ND1xzYZAnKc3Mva%2FQ3mG01eT27g7G2zdTiVYF9pDUSAdmAn06tI3JUz%2FryCPDhSvJbsxpSH3swgAyfxpxwG%2BPmvtn9%2FAmIwRP1Wa4fpoacw3q87J3X3lthF4zC%2BrucX2SL4hMqFwW6gOxI8vwnNDFX%2FulOK2GhdazLL9f3v9cFZG6Qwn%2BZe8s%2BBJQe4UyL00XSh3R0HzASdhxOsgLeZlUDO%2FiuhJY344GoD4j%2BDS8y6me5D4DLhIL5R2f%2FgQvJoTrjLpr5DeGP6hzPXtyqiRbkMOAQ5O8N%2BuqAHDkbqHdeZT3BaCqycEA6Q9hbjepgBD10HV197FSHluKvvcSg7akFvm2afb7AFj%2B5E5rGAtdCrfmjH9c7wgnbBvxbXWh3J4qXgwt2noyynOe4VMJ6J9LwGOqUB8DMbD%2BYU8xw0vNj6dirB5tAvJKHl8p%2FLPTsH6flWEs%2Beai2vsfY72cUX8cVb5%2BBroixrIQKas46QPJ%2B03vfbPgJpHB9%2ForBCUN40lf6DO7Yutvaf8T0PkIuQnLD3IFlygiMAnfyVrdcpWJCaEOIUVHV1KCmQkQkOSEK01iAULwSsUEr5ujaDXTZ4ehGaKXy0xsSZ8Db5Rv%2F%2BuuMyVob%2FQY5QsTYf&X-Amz-Signature=e47681806ebb3bca150306b54ef2842bffce2823a163b8c69bd5845cb4a2122a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STD4NGA3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChQnqmjIY%2FoS%2BgtEq3EqKtujSnm6Nk%2B97FQZSEF37cuwIgDupMGgzfYdHC%2BvhnvzA8Igq9SmW2HN%2FtJH2ra45ANTsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGuT8bKagyhHilJKCrcA39E9bFYHwpoyQaKHR7acAxfSDhvQudmqhptS6c6uMIlzVSw12xOvfJnYx6PxpVKlsg8u0QtDt5aAisw91HVICtWudLhEAy733wdYv3FmpHZzRI%2BD%2FftGwMwhVcx0oZdUNHI4NvNA%2F5NtJ6h54zhXUL2WFPH7R2f1ZyUwLu9ijFKxO%2FwNCNTIq37IyoOdz68OaGdlv8NQU6raoMa2GbkuBvWri8UvsCnCZmSod7vIpv1TtNTpp8xexMi09roLysCRQ%2BzQBs4KEtv6R6%2Fe3c6PGI%2B7xE5jRvzObuLHeT3mIksW0a5vK977WHvaeXH3xac3RTEXD36Uj3Yi30Dd%2FmB9wliUxFOoY16u0cz0s7Op3gevVysKY%2BIWPR4bx4%2BH57AfJzMLIm%2FC8YyaiJ45tfOpsx3fxLemPGmVw17%2FhTKAMsTTq2iwVE9eq3ngAmBOo%2BoKP3p%2B89gKt%2F55TvkF4T8HZ98bZJAabB85ZIn901nro3Vam9oSRKGesbyGl7PK9AJqtvAfkS3NQ9Vm9KajApf%2BcKLpCuDWa%2Bt39C25wBtuiHFnoDFr8l4RxU0lO8GW3dN91x%2BdgUIsmBrZ%2BXa%2Fp765sQ%2Bmd7m95FIqNWHYMA6G8xYJoAozSP1%2B78GmiRVMMmJ9LwGOqUBLmn0t%2Bxt7V2ARvONCGNhSDy6zhWZj5VxgklH4KDgPlMOtoq8LHKCYZsrHuslCbg890kwNK7Omb6kMFsDpzTKsVoPp%2FRqRi4%2BlQZwohbDTnkEs1IUeRZHqUgiovrmayuFKb%2FuS6Jw0FqeFByF4hdpY8V9Vp3ANItSaebQAA24%2BjZurO9J1buTnrKsHj3KCCJNpiaQ8viWau8zjMFxuAeXjmut5Amu&X-Amz-Signature=14cc4bc68af33a153c9b4e25aedfcc52e802c0b0be3abcbc09dfe40c743c537c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
