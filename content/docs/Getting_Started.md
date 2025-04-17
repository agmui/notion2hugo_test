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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EGU4UQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNi0NwgGZQlrX8c%2FhDQgCxHgCmZ%2FxV4wVIf6kWHXib5AIhANOb6LiAxJ920J0wm0UaX9gBgaCKSBYRmOPsIToYvsqnKv8DCGYQABoMNjM3NDIzMTgzODA1Igw%2Fy3on%2F%2FbjQs4SWSMq3AMgrHEzL2MzFCvOtye40uB%2BElDxZ0VDmJP%2Blg5mRkHex5zMZAChMHiASAuf28Fww01iJyrRN4OSHylYyU4KK9Nm%2FPTrYD0Tr0iX7U59urMoqYJwnEv24nKAsq2hiOPC6WYuIzviGWQXmSX3jQUaMP1CwhSnmMw%2F7TNm8Y2XEumMJQXRH6M%2Bb%2Fvfko57EDdDG%2FQ5T4F33Y%2BTUdV2KNJELAnHpO2RJ1sOqPF1jAZ24IlV0fF%2FE9HDSRCMfY%2BTNoZmKCAtYkepSkyT77Vb0wQBe1wxU6%2B%2FeSrBjpUbW%2FuscbTqVo2RqaFfhvI9kpnJyWZ%2FsL9wWqQUo0%2B5HDpWogguZjIJfOQVRGhOxbdWkVKlq1H0CRB7XOZQU3LwAPdwujh7FFU7arvA3sTXuGgl7VAAcD1wOjfyoIO4aRKJOhcf0Wk9CTFmDqnRFxMLB1RgXKK3F1G41obdKUjHaCYqBP9Ex%2BjQVIKO5AcpWhxM%2FJtIw3WDPOeWYFxrcTHbqtC5zBX5i0jwVxHD61YhFF8CSFLnGo2RPNHkusyKic8IOsA%2F5aEUF4zEiwerkSPGhrDTrJx9sdloU7vKsja1wlNZoN7ypNPPCCp9hQ6VxviKxD8U1RXY7hDHjS0w3%2BwfGhha2DCK0oXABjqkAYnVPbsQJucJ%2FvvE3JspCNiD88CJ79jOUF54%2FW28G2Oglk49IWeC4uoeRM8lsPFXfwc8GDq4JCaDtmAnuyx%2BJvirCSvLaWZTs9DRydXz8S%2Fd%2Fh52dO%2Bk%2FCiiwUMKctyScOrvbuRspoCjMqUypwZ%2BJ9Lf8cpCR9uSNTaKeKoP7AyVgxWiovwl4JKeq%2FGYp8s0CLY3rsW847X3%2BNs8WoPRzDfjd6tJ&X-Amz-Signature=3589c31dee3480b3248c03e9cb9b5d48a219ec13e7c6117b59d3f08666a65953&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EGU4UQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNi0NwgGZQlrX8c%2FhDQgCxHgCmZ%2FxV4wVIf6kWHXib5AIhANOb6LiAxJ920J0wm0UaX9gBgaCKSBYRmOPsIToYvsqnKv8DCGYQABoMNjM3NDIzMTgzODA1Igw%2Fy3on%2F%2FbjQs4SWSMq3AMgrHEzL2MzFCvOtye40uB%2BElDxZ0VDmJP%2Blg5mRkHex5zMZAChMHiASAuf28Fww01iJyrRN4OSHylYyU4KK9Nm%2FPTrYD0Tr0iX7U59urMoqYJwnEv24nKAsq2hiOPC6WYuIzviGWQXmSX3jQUaMP1CwhSnmMw%2F7TNm8Y2XEumMJQXRH6M%2Bb%2Fvfko57EDdDG%2FQ5T4F33Y%2BTUdV2KNJELAnHpO2RJ1sOqPF1jAZ24IlV0fF%2FE9HDSRCMfY%2BTNoZmKCAtYkepSkyT77Vb0wQBe1wxU6%2B%2FeSrBjpUbW%2FuscbTqVo2RqaFfhvI9kpnJyWZ%2FsL9wWqQUo0%2B5HDpWogguZjIJfOQVRGhOxbdWkVKlq1H0CRB7XOZQU3LwAPdwujh7FFU7arvA3sTXuGgl7VAAcD1wOjfyoIO4aRKJOhcf0Wk9CTFmDqnRFxMLB1RgXKK3F1G41obdKUjHaCYqBP9Ex%2BjQVIKO5AcpWhxM%2FJtIw3WDPOeWYFxrcTHbqtC5zBX5i0jwVxHD61YhFF8CSFLnGo2RPNHkusyKic8IOsA%2F5aEUF4zEiwerkSPGhrDTrJx9sdloU7vKsja1wlNZoN7ypNPPCCp9hQ6VxviKxD8U1RXY7hDHjS0w3%2BwfGhha2DCK0oXABjqkAYnVPbsQJucJ%2FvvE3JspCNiD88CJ79jOUF54%2FW28G2Oglk49IWeC4uoeRM8lsPFXfwc8GDq4JCaDtmAnuyx%2BJvirCSvLaWZTs9DRydXz8S%2Fd%2Fh52dO%2Bk%2FCiiwUMKctyScOrvbuRspoCjMqUypwZ%2BJ9Lf8cpCR9uSNTaKeKoP7AyVgxWiovwl4JKeq%2FGYp8s0CLY3rsW847X3%2BNs8WoPRzDfjd6tJ&X-Amz-Signature=b34761ba5c244118c5f986b734adc6b671a137a930cdf02c7e91bcdcf067ca8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDMNHI2X%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsznFbNyFAUzc6OYh3DQ%2FfvFo6nOUwRVH0C59dmycrtQIhAIjUNcNO7w6k5KO0eSIgh275r42wta%2F9kYSMiiCCKZGWKv8DCGYQABoMNjM3NDIzMTgzODA1Igzwi4SRLRHvjWYViqMq3AMnX3kzbfFegjQFxzqL%2BClvIiGd1YpDmHnc2%2FU%2FWI1TBnPuFCi3G8pX9tgqlZfFtd%2BtBHx0%2BRarVqF9SQ%2BYFCyubsuGUHAMt0dBekdZfC5UVmFsSzaCe0%2BhOuHgdfbTt9liIhionupbXmYeEUcjWJ7M3N1kkQhKUR9mDZjoIwnsn%2B%2F0QTA37aBKuy57SkqSHlG88kK3vPdvHwMQHvBhynaE7fgWTCjrLHDzJYVJq7pYhtF9pzUu32iZrsQatf459mskvHI1Q3owUQsoImYcUntteaVYdi5PDcjnzyR5aJIWHRVy2Te4Las2YThV4o4A6ig0ddaAp1wZK9noPp4Vpy2Hblv2K%2BlBz%2F6GdM4Hx7wLWQkURTELGABoFMFzfdWvx3AEhofu83%2BOXlPF94V3lFLQFt4IAjtl4Z2XT4ZY6wbUS1to2e4nLYXh0qxZQzxAo%2FoEaQnDDdqNPO0jf%2FH5y6YYheZ62WKYvWkBjJ8cAgdaYNaj5G6PKn9XpAyHlHhyfKv%2B3EkYgzCgWz%2BRSOB6JqhPsSbUsoR4QOIasorPOahHwoaPQNSCKO1fHdRsEcjm9rcW8KLe%2BCDZoY4Xz1OzwmjwGUsi4rFWjppHAKQsR3QiShtwEDg4fePxJ%2Fg6FDDI0IXABjqkAZqunq42NMVU%2B3o7yngRdhSv%2FBcH6pLCPxddq4DD2QyY7ibxIitoWF9XCVI77MiOQSZL076yis61ljEg81meQHKJ12JSnkF%2BQgzk6m%2BFH3knhubzHeXDWAB%2Fi9RAg2HbCArmhlI%2BvgA23x1a%2BJcYxDz4xtMJxQBWWbs83BY%2BONzlPbwRLWUq%2BwNthZOkYtEZGXuo18k%2BVF43c1dfCi85nTT4H3%2Fl&X-Amz-Signature=6be83c869c2cab89bd71849172824d507e7dc7aaeec68ec8f36955cf613fdd3d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHKVXPN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNoJldxbUqx%2FG5rzqeAbwKsbNavcrhx1hsYM0nPpydQAiEA4NBIKaKBu8ftHIblpwHYI4KDIi0USxx%2FAyZpLZwg6w4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNd%2Fg39MyE3V9XKjlircA9fTsh%2B3D54sjY2gFbTCwr%2BHttVvZfORm%2FwuMib1KFBqM1PiCFynkRiV9IGPNoey%2BF3Yis8wgLM1SjpcKPA4z1UfhFwlG9FenlOn1wX7wNzord59jgeSZrixRC%2FJSMZeuq4XDvDpUilvm6wz3JdbX0W0mqC%2Bao2JoZt6tu7swbEwkh1HS3K3Km1H1T%2BdLR7qwhHNxMbmC3Agxwvb%2Bnxj19VPhVvXoV0JawXcYJf4eeKHom38llL%2FNBNrrPoMxOdxSjPvxnC75iOMOueOYHyay6Vru%2FiPUafKNKUzAqRQNwyc7KdXkwqZxccRKno8ILIpTJkzvg5b6lNS4tEeJhNeFuzsBXZ1ZQ2h0f2uFSGA7kWv0barHbWab1MJoIl6bFTf1dvWJopHkFOJoNC4KuiSWK6DwLcoxkWchpO1GhAtlZR0Ru%2FUCk2BRdgSCl1joAHTY6PP6TTizqNEVxxC21cCAGr6fKe3jgm1Nv7L1ZGZcWpl1JXwpMnaqIF6gqKMghGgJoDoBpMEhwo7TBzBnVueo%2Fnop%2BAydAY%2FBlqjG4oDOeyKWUi%2FAbNSxWh5hOnHqkW0K5ja%2FZFafxRvzXx7PUIrXdhG70BYvRhIRggFQRqQu2YL1y9KD0oL6MEBH2ruMJTRhcAGOqUBZ6Drea1JOX8pU7AtxvkdaUKDwppNCAqGaXTAaT46RgCGZe1FkGSMbWpcuAYqJXkfPMQBkjlq6fmmqPeCUTGA6n%2BemMIQM14GMd3zHlyayjwLohJHanGy077jVxEhjvzABoVpjtVWDQS6B04nnZ0sOodYu7JEXVIzpnlE8SEEJgHIEw82%2F2QWxycsy3w8qN0%2FB320YeT8RXKd2SEIyXuMyJV7D3sl&X-Amz-Signature=076b513a7529be40b2581b8f02bcda7f0fce38a1e1cbbc24b0ef0367faebdbc9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EGU4UQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNi0NwgGZQlrX8c%2FhDQgCxHgCmZ%2FxV4wVIf6kWHXib5AIhANOb6LiAxJ920J0wm0UaX9gBgaCKSBYRmOPsIToYvsqnKv8DCGYQABoMNjM3NDIzMTgzODA1Igw%2Fy3on%2F%2FbjQs4SWSMq3AMgrHEzL2MzFCvOtye40uB%2BElDxZ0VDmJP%2Blg5mRkHex5zMZAChMHiASAuf28Fww01iJyrRN4OSHylYyU4KK9Nm%2FPTrYD0Tr0iX7U59urMoqYJwnEv24nKAsq2hiOPC6WYuIzviGWQXmSX3jQUaMP1CwhSnmMw%2F7TNm8Y2XEumMJQXRH6M%2Bb%2Fvfko57EDdDG%2FQ5T4F33Y%2BTUdV2KNJELAnHpO2RJ1sOqPF1jAZ24IlV0fF%2FE9HDSRCMfY%2BTNoZmKCAtYkepSkyT77Vb0wQBe1wxU6%2B%2FeSrBjpUbW%2FuscbTqVo2RqaFfhvI9kpnJyWZ%2FsL9wWqQUo0%2B5HDpWogguZjIJfOQVRGhOxbdWkVKlq1H0CRB7XOZQU3LwAPdwujh7FFU7arvA3sTXuGgl7VAAcD1wOjfyoIO4aRKJOhcf0Wk9CTFmDqnRFxMLB1RgXKK3F1G41obdKUjHaCYqBP9Ex%2BjQVIKO5AcpWhxM%2FJtIw3WDPOeWYFxrcTHbqtC5zBX5i0jwVxHD61YhFF8CSFLnGo2RPNHkusyKic8IOsA%2F5aEUF4zEiwerkSPGhrDTrJx9sdloU7vKsja1wlNZoN7ypNPPCCp9hQ6VxviKxD8U1RXY7hDHjS0w3%2BwfGhha2DCK0oXABjqkAYnVPbsQJucJ%2FvvE3JspCNiD88CJ79jOUF54%2FW28G2Oglk49IWeC4uoeRM8lsPFXfwc8GDq4JCaDtmAnuyx%2BJvirCSvLaWZTs9DRydXz8S%2Fd%2Fh52dO%2Bk%2FCiiwUMKctyScOrvbuRspoCjMqUypwZ%2BJ9Lf8cpCR9uSNTaKeKoP7AyVgxWiovwl4JKeq%2FGYp8s0CLY3rsW847X3%2BNs8WoPRzDfjd6tJ&X-Amz-Signature=d30dd22c8e0d284b98a5a2fc006f3f807acda90b0d40c9d13627e131187e04d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
