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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYB2OUVU%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCIF6EZF6PiqzzPQoDi%2BuqOTBH9yvXMUPuChtOZMX94igIgVqTUwyArSfLRCgbzQDJRDfwbpu3BLQWuOEvkSeV8ltYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMHjkW%2BxzCPArUZ2AircA6MONh01UHnN2fvpD%2BVRxEpEkek%2BMT0aj3KlYiio2SZQR98ZwSBcrHl1%2BfX5ek2oUcKLjtkF4S4Qe5i1o4lz3Hr%2Fw1CA%2FxPVfOTSvgMnaTFQ3XhnLhuOJQ1VVOGxpAwUYuD6CQz5fbHUW163dCeOnr5TyucSeTXeaxN7qy62%2B3KrmWuc%2B1cmFqjjL8tLLaEWIyyF%2BrGr8ktxPx%2F3UmLwySHGvewR6BzqeemSmEfw5GUrMsyQNW4%2B97LN81KkM%2BRKjySrpYtBHqoO2st15P3BecEMKKhA4w4apE8wPrygsCP4azVXCJf5vV5vwL98FfbqT%2BRzbg%2FjjeyA6juOBk0xkaUKG1NsFzy0orfbtp5zEZIP08KCZZMuUEQWo43EBCC7NKuF%2Fo3RAr4KXBqr914HsraM4YV%2BhP55LKbr7oLgep%2FSo4mwH4g%2B8VrYiqxICex827uYyd2XpYQwQL6kD5FUJIDRCzjeZQrXEHUCqrBRwalOnOS0gLYuwW6FXPeGNOtP7JrWNgKa4WauXjy3TP%2F2BDohwKLK0xlBjW%2BsMlFGv1VWmgh5RFxk56FYlQyRMTMBuuPqjSKjEF4DF4GUgayGg%2FNPSuncBaeZBy9%2BnLkWCW3%2FInEyTukc8eBKrDf%2BMPXw7NEGOqUB%2FUv16RMDrcrO4WAHmoyT7pSgG75xZiCK9VgPAOA4QP%2F5JjZBNsOV4pfi4v7T64nx0ja%2BQa2444jWATZnAj%2FtbjJg7knKmfbYEqvl%2FQMo3OYFO%2B2ZhmSpquGM%2BUp%2BMB5byGbbwAY06PddNfFFckHwsK22ExPvSb%2B%2Bqa2nss3wePoe8biQDzOAaK46SKAF7PYwbEfA4Vu8R2F%2F3lp7Se7faChlCZEm&X-Amz-Signature=2eb1d28a035cd374fddf5eedcf50bfb74d57e6241aa5635580b1d732de12c085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYB2OUVU%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCIF6EZF6PiqzzPQoDi%2BuqOTBH9yvXMUPuChtOZMX94igIgVqTUwyArSfLRCgbzQDJRDfwbpu3BLQWuOEvkSeV8ltYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMHjkW%2BxzCPArUZ2AircA6MONh01UHnN2fvpD%2BVRxEpEkek%2BMT0aj3KlYiio2SZQR98ZwSBcrHl1%2BfX5ek2oUcKLjtkF4S4Qe5i1o4lz3Hr%2Fw1CA%2FxPVfOTSvgMnaTFQ3XhnLhuOJQ1VVOGxpAwUYuD6CQz5fbHUW163dCeOnr5TyucSeTXeaxN7qy62%2B3KrmWuc%2B1cmFqjjL8tLLaEWIyyF%2BrGr8ktxPx%2F3UmLwySHGvewR6BzqeemSmEfw5GUrMsyQNW4%2B97LN81KkM%2BRKjySrpYtBHqoO2st15P3BecEMKKhA4w4apE8wPrygsCP4azVXCJf5vV5vwL98FfbqT%2BRzbg%2FjjeyA6juOBk0xkaUKG1NsFzy0orfbtp5zEZIP08KCZZMuUEQWo43EBCC7NKuF%2Fo3RAr4KXBqr914HsraM4YV%2BhP55LKbr7oLgep%2FSo4mwH4g%2B8VrYiqxICex827uYyd2XpYQwQL6kD5FUJIDRCzjeZQrXEHUCqrBRwalOnOS0gLYuwW6FXPeGNOtP7JrWNgKa4WauXjy3TP%2F2BDohwKLK0xlBjW%2BsMlFGv1VWmgh5RFxk56FYlQyRMTMBuuPqjSKjEF4DF4GUgayGg%2FNPSuncBaeZBy9%2BnLkWCW3%2FInEyTukc8eBKrDf%2BMPXw7NEGOqUB%2FUv16RMDrcrO4WAHmoyT7pSgG75xZiCK9VgPAOA4QP%2F5JjZBNsOV4pfi4v7T64nx0ja%2BQa2444jWATZnAj%2FtbjJg7knKmfbYEqvl%2FQMo3OYFO%2B2ZhmSpquGM%2BUp%2BMB5byGbbwAY06PddNfFFckHwsK22ExPvSb%2B%2Bqa2nss3wePoe8biQDzOAaK46SKAF7PYwbEfA4Vu8R2F%2F3lp7Se7faChlCZEm&X-Amz-Signature=bb1f44449d251e2637b1b8b9bda4954a801d954d57fe8a6ca68e96a400f5942d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYB2OUVU%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCIF6EZF6PiqzzPQoDi%2BuqOTBH9yvXMUPuChtOZMX94igIgVqTUwyArSfLRCgbzQDJRDfwbpu3BLQWuOEvkSeV8ltYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMHjkW%2BxzCPArUZ2AircA6MONh01UHnN2fvpD%2BVRxEpEkek%2BMT0aj3KlYiio2SZQR98ZwSBcrHl1%2BfX5ek2oUcKLjtkF4S4Qe5i1o4lz3Hr%2Fw1CA%2FxPVfOTSvgMnaTFQ3XhnLhuOJQ1VVOGxpAwUYuD6CQz5fbHUW163dCeOnr5TyucSeTXeaxN7qy62%2B3KrmWuc%2B1cmFqjjL8tLLaEWIyyF%2BrGr8ktxPx%2F3UmLwySHGvewR6BzqeemSmEfw5GUrMsyQNW4%2B97LN81KkM%2BRKjySrpYtBHqoO2st15P3BecEMKKhA4w4apE8wPrygsCP4azVXCJf5vV5vwL98FfbqT%2BRzbg%2FjjeyA6juOBk0xkaUKG1NsFzy0orfbtp5zEZIP08KCZZMuUEQWo43EBCC7NKuF%2Fo3RAr4KXBqr914HsraM4YV%2BhP55LKbr7oLgep%2FSo4mwH4g%2B8VrYiqxICex827uYyd2XpYQwQL6kD5FUJIDRCzjeZQrXEHUCqrBRwalOnOS0gLYuwW6FXPeGNOtP7JrWNgKa4WauXjy3TP%2F2BDohwKLK0xlBjW%2BsMlFGv1VWmgh5RFxk56FYlQyRMTMBuuPqjSKjEF4DF4GUgayGg%2FNPSuncBaeZBy9%2BnLkWCW3%2FInEyTukc8eBKrDf%2BMPXw7NEGOqUB%2FUv16RMDrcrO4WAHmoyT7pSgG75xZiCK9VgPAOA4QP%2F5JjZBNsOV4pfi4v7T64nx0ja%2BQa2444jWATZnAj%2FtbjJg7knKmfbYEqvl%2FQMo3OYFO%2B2ZhmSpquGM%2BUp%2BMB5byGbbwAY06PddNfFFckHwsK22ExPvSb%2B%2Bqa2nss3wePoe8biQDzOAaK46SKAF7PYwbEfA4Vu8R2F%2F3lp7Se7faChlCZEm&X-Amz-Signature=457e79a9cb1de9a94a32b18174227c7bc278635d22059207c0144c0e3c1fc296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QY5I2ZI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQChhv%2B1KV4Qw9gOOTKYAAkIVpCNIkFXTcgI%2F9CWi3aaKQIhAKOH9euFfB%2Faet4Mffltw6FdxUX8l81RZamTanJ4NJHtKv8DCCsQABoMNjM3NDIzMTgzODA1Igx%2FZHncqyayelc5NkQq3ANDbRQ8tp5z6GNkywn4p3W%2F6TMHzxbQikNfuzFcuCJ68Y7QmujkNMgrjvXcOihROsPwtBkCmXM7WJ%2FUZwET6S52kVqlfgKL7PnV8tXwKyUOnmbj2gORuOVp4pJRK5rJTzkn65jCb0ihsNcg%2FFQtk%2FnAEzcjcCvCV30GXmdHUXeJWVQanijkZKctJFyguZPNTgRflYC07dvQ7%2FhxMn%2F%2B5MEJkzqItJK%2BebqYr%2F9AbkJigY3i6Ob%2B5Fo0b8JaYNwQ3%2BvEavlAGkalFGH%2FJUP%2BIQSVoFir%2FVRwo%2Bt0dR17liIeLObjNVYaUTQhtJt3KCp2WExh5ni5KO6Wld0iBOCxulbWe%2BeKW0qo4u6pfRNwZ3eLD0EH8B2GJledbK%2F1KZFkvd%2B1Ih3Q2X7HG1BxwejY7fEro6MUfhwQV9aYqPs5UcHMWxxmnN3q8G9MXB8lza2z0xpBDgfxrk%2BRudbGcSMEOF1uwd99bdb61t4g2MIazFBCcyh0Iizwn7FAWxyiAb0vJbu9ndbVL2Ye4jeEvTbK7FcjScJooMoDXSntMGGWJf%2FUwaYoZ269AJVnwr%2B1mHC%2B532gEuIeCArpuU1Hgg09O0CU84%2BakgtEGQFmjiirjyqW7vGSFguFy1LkVRksLDCU7%2BzRBjqkAZYO5pf5AHm9lQrHzfBiR0rLiB6JuGUVBEb9qf9cnp75%2BOr75%2FQ7llf6eMVnLXYzVB%2Fr9rmTKJmBStxEI4EoeSSPucoXOirDTmIJE5av4qcpgz5MbNK5ZWSjwMAhoeGGPU8l7echhJl19KW4jggiJTorksAXbuJH7uXLl6kmqlhEtU7lVOgdxhGBr5NEhkHL6v%2F8utlx70YesHn%2BF6l6oX42LQOR&X-Amz-Signature=0909ac6b81ac01d6b12f3d85d68005d2c8664a28809b6deca7b15d39a5c96ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJWDRF2%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFUkqNksoFB56vVz3sd2TpyzdcxJv%2Fa8WZFDITcwjoQQAiEA1Kzr%2Bqqbtp%2FDv9Vcgr61JKGV%2BHJVyBYc7K3wU1X7L48q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIZMsyTdH%2B2ZukyK6ircAyzv6oMAFzCht97fr2xnHmuipPCmw%2FfeFJTnfcgDINeam3VXB56op8bvn9vcH%2FjAGYr9hvwH9mKK4Qbne50SAdzw%2FanCZ4ek%2FmGT5PT9%2B6iuSDAoRxiQUiAMXQgspKvzY4lDrGaf3CgjeVZOQ%2B4KQKrA%2FXp55KYiA3Is911FNfXQ2tALYByqQwt%2Bk%2BcXxJcqwH2g6Yjpcu4ZHmG0gtmPXhn2FcVedjwRiJ87hMome4EylJwzXl4j46g5KoUJ%2FBlg%2FhmSeNMQBgEUJsxg1ntPUFBvfT%2BMOZPKRC24NOHn9pWiGy0JbmxukfT3XJzlyx6QOhgKmHwy00DeYuSxSbJZNDD3BoRAVanCc1SbdpFfmyBhc0J0gcoV6XumZL3UOViZLmThWW8eSVKSjwAVaDZCwNOWg%2FjuEFX0ibDtiHuXgBWB7h%2BxpMY3mEopEncGZhwwpa4zc0676fgQ3mxa4Vfreob4vvVit9TpvW8aCpd78L6wb6vWTVt6EfsNc11rjCx%2BhZ9bPb9pghuWkyM1cYN8go8%2FQEXWZDbEjoFUKI4FpMx0j%2B47agrLcjQvnvdnyHNl%2BpaIFX81FZAjJip2cZ2NTE2nWHTD7h1rNIQqjg6JRhQQcHYtig5hadS9RnnhMOHx7NEGOqUBgQUK6%2FgsxGJSibOEeG3zm9%2BqfR%2FZtzzuCAGn%2Bott0ziuvhPYlMW8DnTCxZClvq8sw5mWMFiJh%2BzlQpLdFocPyHxAH8VibJkgWuojPwjvnZBJjpN%2Fcp8gRIgz2r0Kw0e1FzjWlDbCuaXcUH4Sj1mxOCOFKXsMRa5iKZYNIVOxqirxFkXt137CCi18G%2BpRPbDH8cYt3qlWTpKaZbeab5hXhsyWgK7n&X-Amz-Signature=7345b056436b6f507fe5ae6cf396fd701dae51c06c70ca7c34348ccda5f610e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYB2OUVU%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCIF6EZF6PiqzzPQoDi%2BuqOTBH9yvXMUPuChtOZMX94igIgVqTUwyArSfLRCgbzQDJRDfwbpu3BLQWuOEvkSeV8ltYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMHjkW%2BxzCPArUZ2AircA6MONh01UHnN2fvpD%2BVRxEpEkek%2BMT0aj3KlYiio2SZQR98ZwSBcrHl1%2BfX5ek2oUcKLjtkF4S4Qe5i1o4lz3Hr%2Fw1CA%2FxPVfOTSvgMnaTFQ3XhnLhuOJQ1VVOGxpAwUYuD6CQz5fbHUW163dCeOnr5TyucSeTXeaxN7qy62%2B3KrmWuc%2B1cmFqjjL8tLLaEWIyyF%2BrGr8ktxPx%2F3UmLwySHGvewR6BzqeemSmEfw5GUrMsyQNW4%2B97LN81KkM%2BRKjySrpYtBHqoO2st15P3BecEMKKhA4w4apE8wPrygsCP4azVXCJf5vV5vwL98FfbqT%2BRzbg%2FjjeyA6juOBk0xkaUKG1NsFzy0orfbtp5zEZIP08KCZZMuUEQWo43EBCC7NKuF%2Fo3RAr4KXBqr914HsraM4YV%2BhP55LKbr7oLgep%2FSo4mwH4g%2B8VrYiqxICex827uYyd2XpYQwQL6kD5FUJIDRCzjeZQrXEHUCqrBRwalOnOS0gLYuwW6FXPeGNOtP7JrWNgKa4WauXjy3TP%2F2BDohwKLK0xlBjW%2BsMlFGv1VWmgh5RFxk56FYlQyRMTMBuuPqjSKjEF4DF4GUgayGg%2FNPSuncBaeZBy9%2BnLkWCW3%2FInEyTukc8eBKrDf%2BMPXw7NEGOqUB%2FUv16RMDrcrO4WAHmoyT7pSgG75xZiCK9VgPAOA4QP%2F5JjZBNsOV4pfi4v7T64nx0ja%2BQa2444jWATZnAj%2FtbjJg7knKmfbYEqvl%2FQMo3OYFO%2B2ZhmSpquGM%2BUp%2BMB5byGbbwAY06PddNfFFckHwsK22ExPvSb%2B%2Bqa2nss3wePoe8biQDzOAaK46SKAF7PYwbEfA4Vu8R2F%2F3lp7Se7faChlCZEm&X-Amz-Signature=9737df47842cf63982f577e416043eabe02e4b747141d94763126f55b20f7051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
