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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJGGMUS%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDC3c3d7BnDmlcqdvAqzGf7SyLLGA08xAz69Xi6ks8IiQIgNbqn7SZatEAViwb%2Fq%2FPvGibFh0MfqNquexOyvfoHgFgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLztEiD4%2BNbosvkbCrcA12IPKDvccXVz72WjRSv3n91Qt4L8iGQ9UfbERcm8b90UaBEFnRFE3tHy4mRk4lTpDN7RyJG4OgKGtSqOUYW9RsMpt1OQmkgAf9Hw5ps3dWQXSp1y%2B%2BuW1VOLXJ9B9K2Mf9G3mC5qq1qBrR0SGQY368gm%2BQMF2sCxuCglo15Pk13B4TBnG%2FPuVkeMQs%2FidFpK46QqfJEpAOpckDpWrTF0yomskNYJPFm8vefw9XB6GmqQmBAWmKPmwXOHT7DWhP9Ta8gN5v4BOTW8h%2Bq5TJZk8wtYHqwr44zuS46k%2FH%2FMkP%2F3r0ToZoPRBlaktN1y1K0Dej5p8WgpykmwoFRIzcdsAmbQl1kGYt52w2%2FY5aY6ri%2BgVnED1kVbcfQ9QPnWIvsvj98DaVJ%2BdEG1nY6CTJjIi0ho4H4SEJG3rDkYzfcoJgiXZfr0XMJ5pYZrW1Z2EtaQMLPwZji85dTIRx2cxgFKFhI0gifeGd0N6j86uAUPCKK7sa4f1WUrUHQ8CwfO2QBB86JRPnZ8rpyqmPXpIdQuyYYc16EdVhdtSq297TYF2vz%2BqfvpdK0Cun%2FNkbwcy%2B7ml2pvRpgupTemFzDLBArp7z%2Ft9mqDfYu1ljnLZ0pMrdynwFnGJjH8TsOT8%2B%2BMInSs9QGOqUBpH1LP%2BY8ylk0hDP3eDrAN%2FdDyqJL%2BgukGJ8FYqoLtOzk%2BFx7rNh0cCD8Ko53t9ZBIx6Xir3aytK8u9dJopGvQxFAWf1cjJbBkewfmCLYOn9boIRwTvEQ4Muf6qe%2FtPViy57RtI0lY7UrH%2BPi4UATKYbWgqOqZ8zmL2qWVTtB4KIEpqOXQOqPddxTQfHP%2F4jZa7oHaVzdoOJVv5JU7GE228aNKZYs&X-Amz-Signature=187a4ff19a704ed04267e63f81da477c9880cbfc8238298e7fa7c3a9ca624921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJGGMUS%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDC3c3d7BnDmlcqdvAqzGf7SyLLGA08xAz69Xi6ks8IiQIgNbqn7SZatEAViwb%2Fq%2FPvGibFh0MfqNquexOyvfoHgFgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLztEiD4%2BNbosvkbCrcA12IPKDvccXVz72WjRSv3n91Qt4L8iGQ9UfbERcm8b90UaBEFnRFE3tHy4mRk4lTpDN7RyJG4OgKGtSqOUYW9RsMpt1OQmkgAf9Hw5ps3dWQXSp1y%2B%2BuW1VOLXJ9B9K2Mf9G3mC5qq1qBrR0SGQY368gm%2BQMF2sCxuCglo15Pk13B4TBnG%2FPuVkeMQs%2FidFpK46QqfJEpAOpckDpWrTF0yomskNYJPFm8vefw9XB6GmqQmBAWmKPmwXOHT7DWhP9Ta8gN5v4BOTW8h%2Bq5TJZk8wtYHqwr44zuS46k%2FH%2FMkP%2F3r0ToZoPRBlaktN1y1K0Dej5p8WgpykmwoFRIzcdsAmbQl1kGYt52w2%2FY5aY6ri%2BgVnED1kVbcfQ9QPnWIvsvj98DaVJ%2BdEG1nY6CTJjIi0ho4H4SEJG3rDkYzfcoJgiXZfr0XMJ5pYZrW1Z2EtaQMLPwZji85dTIRx2cxgFKFhI0gifeGd0N6j86uAUPCKK7sa4f1WUrUHQ8CwfO2QBB86JRPnZ8rpyqmPXpIdQuyYYc16EdVhdtSq297TYF2vz%2BqfvpdK0Cun%2FNkbwcy%2B7ml2pvRpgupTemFzDLBArp7z%2Ft9mqDfYu1ljnLZ0pMrdynwFnGJjH8TsOT8%2B%2BMInSs9QGOqUBpH1LP%2BY8ylk0hDP3eDrAN%2FdDyqJL%2BgukGJ8FYqoLtOzk%2BFx7rNh0cCD8Ko53t9ZBIx6Xir3aytK8u9dJopGvQxFAWf1cjJbBkewfmCLYOn9boIRwTvEQ4Muf6qe%2FtPViy57RtI0lY7UrH%2BPi4UATKYbWgqOqZ8zmL2qWVTtB4KIEpqOXQOqPddxTQfHP%2F4jZa7oHaVzdoOJVv5JU7GE228aNKZYs&X-Amz-Signature=c4d0af7aded098763fa4388279d692e574ae623a9300168a2ac3bea07f1eb19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJGGMUS%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDC3c3d7BnDmlcqdvAqzGf7SyLLGA08xAz69Xi6ks8IiQIgNbqn7SZatEAViwb%2Fq%2FPvGibFh0MfqNquexOyvfoHgFgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLztEiD4%2BNbosvkbCrcA12IPKDvccXVz72WjRSv3n91Qt4L8iGQ9UfbERcm8b90UaBEFnRFE3tHy4mRk4lTpDN7RyJG4OgKGtSqOUYW9RsMpt1OQmkgAf9Hw5ps3dWQXSp1y%2B%2BuW1VOLXJ9B9K2Mf9G3mC5qq1qBrR0SGQY368gm%2BQMF2sCxuCglo15Pk13B4TBnG%2FPuVkeMQs%2FidFpK46QqfJEpAOpckDpWrTF0yomskNYJPFm8vefw9XB6GmqQmBAWmKPmwXOHT7DWhP9Ta8gN5v4BOTW8h%2Bq5TJZk8wtYHqwr44zuS46k%2FH%2FMkP%2F3r0ToZoPRBlaktN1y1K0Dej5p8WgpykmwoFRIzcdsAmbQl1kGYt52w2%2FY5aY6ri%2BgVnED1kVbcfQ9QPnWIvsvj98DaVJ%2BdEG1nY6CTJjIi0ho4H4SEJG3rDkYzfcoJgiXZfr0XMJ5pYZrW1Z2EtaQMLPwZji85dTIRx2cxgFKFhI0gifeGd0N6j86uAUPCKK7sa4f1WUrUHQ8CwfO2QBB86JRPnZ8rpyqmPXpIdQuyYYc16EdVhdtSq297TYF2vz%2BqfvpdK0Cun%2FNkbwcy%2B7ml2pvRpgupTemFzDLBArp7z%2Ft9mqDfYu1ljnLZ0pMrdynwFnGJjH8TsOT8%2B%2BMInSs9QGOqUBpH1LP%2BY8ylk0hDP3eDrAN%2FdDyqJL%2BgukGJ8FYqoLtOzk%2BFx7rNh0cCD8Ko53t9ZBIx6Xir3aytK8u9dJopGvQxFAWf1cjJbBkewfmCLYOn9boIRwTvEQ4Muf6qe%2FtPViy57RtI0lY7UrH%2BPi4UATKYbWgqOqZ8zmL2qWVTtB4KIEpqOXQOqPddxTQfHP%2F4jZa7oHaVzdoOJVv5JU7GE228aNKZYs&X-Amz-Signature=bb9433dc75345c7d6f68d1bd9e6b3d82a1ac0b1a3b9f5f6006e8da83d90591f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2D3DPPS%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQC4MznHMHt473sj%2BeTYn9SvckdNHcAZr1ehonsZop4XlQIgCi56oxOD3RNmeX6f2%2BH%2FVoxmU2uca4E3bTBsPJKEFC0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFlwkoxmY8bCB0i4yrcA5zVzUn4pnJsqHx8ZLkJizOpbGCoUBu0Lm4xmHO7z2%2B2CBF%2BAybcWU%2B4oVZjsyMWRtlGi2tMVrdZ6uwn%2Bl5z8C4y4fqZa8BcWouId2xnqJ95mr%2F0%2BR0B3qO%2FG%2Bu7tIBZLXUesvClP2AXojmT7PesxrOLb0LXHoJmhesfWj2VSt9f6IjOTpN%2BbgonxC%2FxMwVbC6gahLI8bJMnLeM7il0aqB1t3n0alkJ6Azejp2RVQ9k70Ut292OzcHUd1U2%2Fk3LKRQnd8yx8IzthmnyY4s7dJdXaCA%2BNfJksa3UIKEG7NEYFetCfUjDbE2TqPgYKvVKFP1S5Bne0xNjJwbqH8xgOpNIDcnV%2BVD%2FIwfZyTq1TELwA70PxuIeYOb1pxrYGrZ31Vi5fnr1%2FhCppSP0aDOzpFBQZLap%2B1tl2tQh3YThLn4eJYabJOUorQpgycZCHRW7q5QnNubDoi%2BBLq0xso%2BV4B%2FbYz3qYj1RbqTFUbRvUtSPBfReuU1ve3hl76ZENhdXrZIO5zXPiWIlnTXCs3vYbWmaH2Fpn4dtpWBn2dE%2FkZOAfaod9K%2F60BCAgPdXCp4CQNic8Lo1J1OiN36BZMkUK3VFGZG46hfPvxhhGCrFnV%2F2t4eGIJLQKMLwGTpcUMJjTs9QGOqUBkF3WpNiW%2BWbAZnvTQA0X0xJsF2LBVt3x3Bc%2BR3rcMYB2Cvjc193w8zy0E%2B%2BCY2PnllvLfbj7kqt06zZnDbVUCQ3d4MjeA4EpCvr4PT%2FDbnVVFAEyJHeRlg3Vy8TnMxVLPnSMb6BVldL%2Bwkc9q5sswDijvsr2w3xs4aGYCMEht4JfpwcdjPNpTyEOuUB%2B6WREnFXnqOEhVXN6sqHfB%2F8uKzZj5hWB&X-Amz-Signature=688f11a462bf9ad6cd1dae2daa6b8c4bdf9e5379c060267f7a039e7576b8c9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DHVBSJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQC482b0%2Floz5i4qiAMKYWj0pwTGXbibDHJRGRTrFHnjrQIhAPaKXwSBuj10wMoYLps73cVgoQHY9UPy%2B%2BcIWFQkUTkfKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0XvsnyN4SWQhNWE4q3APXZ5D5wCCfpu2xEslKrQnWjPgpdyjVVTe%2FuTo7j%2BmOIifESoHByFqZaBk8gB7FyQRvgEfMyZqTPyV5xKEmjvWpXJRxqE7mYVTP%2Bc2iaUl1WxByAnltjlGFBbBmFF%2Fb5lT1exGHsBTXw%2F6Q6%2FpYKEy9c39pXmdFPA9le568EOSLH8SSK%2FqTyJ64JrrBUzHA5TeV%2F0qU56PRy8foXRPWivzUw0PTOcQ8Y8uBXfYs7ELjGSIzaU5f8r0cSC1IaZfuK7ZpkX8XgPlw9GgSsUmu3Tq4vMfnJMZ7NMV8XVUKEmN0yGqNfpADw0xoPXQwIDcNwtFRaxmq80hbG%2BjmfaxvFhnSo2FqvigMhZRPLu1Ys56SktpDWrFkuXlSDpPNwmZbl0%2FtJtYNFlw41XcA2heL%2FzGasBPAGdzc9d%2B99PfcVmYnmh%2BHL1Zg726WT%2FWgr5Q4JEpHlzC9hYpzR1ZbcLFp%2FoVhVrMYFyOAE6w8BjFApkbsGiOMS%2BuSsBJaRnpKXrL0eh4ooV%2FAzzWLUl%2B8UJ88Dwukj%2F0zFZiHylU538lELqBqxz3muNUWAkHz9amy%2FIMv7ljPTIRs4vKIhPY0yc%2FfhzntZguDwvSRT2XuqdpnpAFeKS8GUCIU4102UoI3UzC20bPUBjqkAYD2jeJEBo88lyVh9NnUxSdJYZh4xDcAY7Zqbed5BSxs6abDRdgSQrg9pOsmd9EJpyuf8hNEs2uCjvInkvlO7OxNZ7guBDJ8V8O8Ru8At4%2BoNR%2FNwmneHL1aH%2F3Rn85scRfWTHBuH2MSQ4c3VCPNt3WmtxTDdC3gAanRkzci3mZb0Fx9SjwAS0GVomIzavJVdz%2FoQ5QwZcCWjnfu3nXOBG5cAKn8&X-Amz-Signature=786d790af6802a1b30bedee42e31678bc9686a9a4b6cb6269e2fa3c9765548d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJGGMUS%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDC3c3d7BnDmlcqdvAqzGf7SyLLGA08xAz69Xi6ks8IiQIgNbqn7SZatEAViwb%2Fq%2FPvGibFh0MfqNquexOyvfoHgFgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLztEiD4%2BNbosvkbCrcA12IPKDvccXVz72WjRSv3n91Qt4L8iGQ9UfbERcm8b90UaBEFnRFE3tHy4mRk4lTpDN7RyJG4OgKGtSqOUYW9RsMpt1OQmkgAf9Hw5ps3dWQXSp1y%2B%2BuW1VOLXJ9B9K2Mf9G3mC5qq1qBrR0SGQY368gm%2BQMF2sCxuCglo15Pk13B4TBnG%2FPuVkeMQs%2FidFpK46QqfJEpAOpckDpWrTF0yomskNYJPFm8vefw9XB6GmqQmBAWmKPmwXOHT7DWhP9Ta8gN5v4BOTW8h%2Bq5TJZk8wtYHqwr44zuS46k%2FH%2FMkP%2F3r0ToZoPRBlaktN1y1K0Dej5p8WgpykmwoFRIzcdsAmbQl1kGYt52w2%2FY5aY6ri%2BgVnED1kVbcfQ9QPnWIvsvj98DaVJ%2BdEG1nY6CTJjIi0ho4H4SEJG3rDkYzfcoJgiXZfr0XMJ5pYZrW1Z2EtaQMLPwZji85dTIRx2cxgFKFhI0gifeGd0N6j86uAUPCKK7sa4f1WUrUHQ8CwfO2QBB86JRPnZ8rpyqmPXpIdQuyYYc16EdVhdtSq297TYF2vz%2BqfvpdK0Cun%2FNkbwcy%2B7ml2pvRpgupTemFzDLBArp7z%2Ft9mqDfYu1ljnLZ0pMrdynwFnGJjH8TsOT8%2B%2BMInSs9QGOqUBpH1LP%2BY8ylk0hDP3eDrAN%2FdDyqJL%2BgukGJ8FYqoLtOzk%2BFx7rNh0cCD8Ko53t9ZBIx6Xir3aytK8u9dJopGvQxFAWf1cjJbBkewfmCLYOn9boIRwTvEQ4Muf6qe%2FtPViy57RtI0lY7UrH%2BPi4UATKYbWgqOqZ8zmL2qWVTtB4KIEpqOXQOqPddxTQfHP%2F4jZa7oHaVzdoOJVv5JU7GE228aNKZYs&X-Amz-Signature=8c9d284f84c18aae82840083620dd7b372e5bf295d1442fff2821381766430b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
