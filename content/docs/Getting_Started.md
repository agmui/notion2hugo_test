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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWV2C634%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIASQPY9yBDpHZL16nYpS%2Bt0K2Fx697fEld2m23qeXObKAiEAjrdtRm2fZoYe45tqjS1PsCAMuD5U31%2BKnoKhII1yNvwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDF7F0aU0ViLnBB%2BMKCrcA2YAKcTOOyYPH5R3Frf%2BjvT8RTfdBOk%2Fyj7ib%2F5hEIuGx0KgiFKcNbz424CGefVk6NBaZPV2FhAdaLo49xkvYnvCdvfn5onYQ1aTVtqLioT%2FoJUbX591INEQWcNWY5qY6ZscmtP3otd6m%2FVvq29WuhJntrviNF4Iojt5sqe7z6Tyi9ylqygRMw5ehxjncBFmJ73wAOjaAJSVz4mqFZCsDNcdZ5K8Mx8RrR2pi9Xu5NhvO3%2FIQ%2FoteVVx2%2B1xCM30f2AXi2p3jf6b8XZnNZHFNzT3%2BuvgNFOKhHuj%2F3qX3tHZgDB2NDL6tXL4Jm%2BCMXkSEq2Iu87NlfeA78nJCWXyTXNIyVIxY9aJ2Cb7SrTBVGZiz2CyGD0jPotYyz30aNDhYakwXLtpzPI1FDvQPNmohq3q6Ou3OgbkAKbuMc%2FRGsQwHnFUmLrVLSutXaHU17BfgFld47V%2BPforVwN%2Fz9QratgDZ%2FMsdYue%2FoodH7eI5An9kLq6jvx8HGoWdoihjczsdzqvTy6mH0i78Fr23Lrp2m8SEl9GdqOEKtSBwpSyVf5yk%2FASqIds98tBsRyFn60JgpyH9A%2FmcYH%2FYuMwfkFZEhYF%2BxezC60eX6WhfNUoTS7PtGkO50bpdye21VRSMNeejr0GOqUBnfeYMvzTC75AUKpJrhVnJvjF3h6faTMndc0Uvkz%2BonlBTAt6MTgJFBMyLyyuSsFheTYtWzdWACUAPyqrSr34ML2%2FAAefyzh9oXt3kfOvT4wn3lClGOf9L0G7tT6NH4lZP8u8xCop03Xeag%2BCt1dUe3LWa0JVMWRR4bjRjHbsV74%2Bo4lhT%2F7s595pWWgy6KIXFWwcUvwoCITty1M95UJtCYBBta6t&X-Amz-Signature=b394964a8641f49d8dfc9e9a83a12b8880d40d09bb57bb6388fefafa27efba44&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWV2C634%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIASQPY9yBDpHZL16nYpS%2Bt0K2Fx697fEld2m23qeXObKAiEAjrdtRm2fZoYe45tqjS1PsCAMuD5U31%2BKnoKhII1yNvwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDF7F0aU0ViLnBB%2BMKCrcA2YAKcTOOyYPH5R3Frf%2BjvT8RTfdBOk%2Fyj7ib%2F5hEIuGx0KgiFKcNbz424CGefVk6NBaZPV2FhAdaLo49xkvYnvCdvfn5onYQ1aTVtqLioT%2FoJUbX591INEQWcNWY5qY6ZscmtP3otd6m%2FVvq29WuhJntrviNF4Iojt5sqe7z6Tyi9ylqygRMw5ehxjncBFmJ73wAOjaAJSVz4mqFZCsDNcdZ5K8Mx8RrR2pi9Xu5NhvO3%2FIQ%2FoteVVx2%2B1xCM30f2AXi2p3jf6b8XZnNZHFNzT3%2BuvgNFOKhHuj%2F3qX3tHZgDB2NDL6tXL4Jm%2BCMXkSEq2Iu87NlfeA78nJCWXyTXNIyVIxY9aJ2Cb7SrTBVGZiz2CyGD0jPotYyz30aNDhYakwXLtpzPI1FDvQPNmohq3q6Ou3OgbkAKbuMc%2FRGsQwHnFUmLrVLSutXaHU17BfgFld47V%2BPforVwN%2Fz9QratgDZ%2FMsdYue%2FoodH7eI5An9kLq6jvx8HGoWdoihjczsdzqvTy6mH0i78Fr23Lrp2m8SEl9GdqOEKtSBwpSyVf5yk%2FASqIds98tBsRyFn60JgpyH9A%2FmcYH%2FYuMwfkFZEhYF%2BxezC60eX6WhfNUoTS7PtGkO50bpdye21VRSMNeejr0GOqUBnfeYMvzTC75AUKpJrhVnJvjF3h6faTMndc0Uvkz%2BonlBTAt6MTgJFBMyLyyuSsFheTYtWzdWACUAPyqrSr34ML2%2FAAefyzh9oXt3kfOvT4wn3lClGOf9L0G7tT6NH4lZP8u8xCop03Xeag%2BCt1dUe3LWa0JVMWRR4bjRjHbsV74%2Bo4lhT%2F7s595pWWgy6KIXFWwcUvwoCITty1M95UJtCYBBta6t&X-Amz-Signature=017267f38ccfe751fb442d7bbac5e8077557d5318a1c4e3c6d2ccb65d4d91601&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNQCKJU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCW%2B%2Fm%2FizMBapLaZcjx1MaO71xU%2BB9wr8h%2BINZWQ1n%2B3gIgIOQ5fy5uxBCLWROYSzrkllZHlzB%2FXux6NtpuVfylGiUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNGJfNRpuEB02NiEpircAyxIis%2BsAvt0sPMC7I%2BTK3aXP%2BZtTtYZif0p5STEWieVSVHUSTc3UfC4ArxUwqi2%2BNHP4i88y0XD8QSTyyiJbPxEx7uF7gxAvFHq23XkWKhq8hWwyTUDLhQ3Rir6EF322Kc5pzYZ8tCX6sGzdIFQBUfZA8djx1tarGHrroGSx%2Fideyme1gGj8wtCmGO0oQ6lKDb1%2Bne6EWzqSvlWbp38qMouOuiTucdw6hhnZV65j0nVDTGD4UO5S1Hl8BupGyzUuz2i9HXTRhOjasSaVWKwr7ugoiv0kcLN2W2HA76azfHOzNtQCYrlFSbcgR5MKQAZdBB%2B22EaA8TLNDSwhof%2BWhbCAyGWiRQ8%2FWrap3OWf7KKMzrQ3hi2SI1gFn%2BijKb1EbNgiuzIIKQ96jHoH3oD7sqm68d79DFEaX6pFf2D%2B1YBCaCh5pauV6X6HUvrCNDplg77QTaDwjeT0BLydoG%2FvpX3DpK2C2B7nAmW%2BYAdCc43NRdYP2PoET1d3vUfhg7ZVcAaeBGOLlEOXKPDCdO9VyTArAROjZiSwmK1DAVV31YoOItFztkqssa9OHOcuPPpe7Q%2FkvTo6GdkD5DCKWf5jHo8ZqtySAWnY1wetZErvUG4TtYbRaiqQ01E31oiMOOejr0GOqUBqhY%2BicZWgPSIXGzD2i2REnbDyK3oUYQX1MavD7TA2JFW9tQRq59jAdRrQmTkxL%2F%2Bqsy97Mfklikpt0gMt68ydlAE8V%2F%2B1AfwgPzuAwI39oa0yrAC68yOD5U2ayOY2Q5WPD4WKehZFPCBL2ozA3Db%2F%2BC%2BJqFeuL3aiwAeuOHUxebS0QT2y6534w3yxiPTI6aT3hgmal%2B4ukp47fHuUvHwhvxYo3Qa&X-Amz-Signature=cc5a44946672ee797ab759694574a3fe9f27e00cbb73e13a962e9fffe425cad8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDF6HLXQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIBhPhCUL1D%2BubbiBj6oW8CdNfprJssWIoZfytEPQkqNyAiB7rfmbeo4VuPb0k4c4XV9iHSZi4LKfKlvAB0b%2BoZZcGSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMYc7kH2tVdj5R9BNnKtwDpWezN%2BvxgoowP5Byr36lG2%2Bq%2F3tXSU29JMgmZpDrLYgTA3snVHSTdy5ULD9XYdmdepBly5Q2ICXJR8ccIE7MM8avDROmQvwiAMt8ON9ULsVFVsHx3aC2cZGIebasMmm%2FZCO1EHwPoKlursCq9jdzmKQohpJMh7bvGcsZZzi5kwydys6o5zBTnN2Zxjk3gzJUSiJFNoNNaDCj8VFO9byW%2FGS1xZWov8jhadGZ7nps8PZSfZpKc2W4%2BQQfljAP1vtmmGQvCB56SiBJX%2FsWpQyrhKZbqpG%2Bb%2FNQaF938NhAhW4Wvq%2BUDvy1pNvDNLKXVG%2BfbRm17Ud%2Bp1rGxhQcJ%2BebzrZNYojTlTn5u0Et6MxFYLZur4O%2Bv7Iomg4shcSyo9xEK%2BXEqoRaPvP88%2FKFKPsnckNKUPOITCTcDAPxOVKozB2NxJeiiATaRtQTPBKvgSqT7bsxyexwmy8MBgYOLDAvmhBrfeCbg5kC%2B17H%2FpzqOg46DqAA%2BQ96UcnYDecuaL5ivRVdi%2BWbAC7%2FaSLt5%2Bagiht4GLEcDGnewZtXq5Cr3HxwkVUI1h7TgfGuVAVBATPLJFG9o0SY7HqBKBBud9UFkNLB3F%2BjWghzmPs7ynZ1Jg1JcQgZ7bGNao04P%2FQwu5%2BOvQY6pgHSim24TIPJwuQneGxo6G5uRtKL3ZRTU2TIUm%2F%2FBaliGRVoY46YixE9qLFCbJfgDoIz02RPXpOnq3su5VIGj3%2BwcoqNRg5HnWJlzp8d%2FY3YtgnFuq2UBvYDjkK9vozJqVN8Ivwt%2FTNDRkCbLIhWzdxKIdsmoUNZEvP%2BTqHtyn8Lf2BuX8esLuvTzFdWxgW1%2FmDYGByDLmlV3fPgsjfwjcQ4CUTVCccB&X-Amz-Signature=65c56089959138ba3b007e963998f4f78b57951806704aa2687abf9ce04374b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWV2C634%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIASQPY9yBDpHZL16nYpS%2Bt0K2Fx697fEld2m23qeXObKAiEAjrdtRm2fZoYe45tqjS1PsCAMuD5U31%2BKnoKhII1yNvwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDF7F0aU0ViLnBB%2BMKCrcA2YAKcTOOyYPH5R3Frf%2BjvT8RTfdBOk%2Fyj7ib%2F5hEIuGx0KgiFKcNbz424CGefVk6NBaZPV2FhAdaLo49xkvYnvCdvfn5onYQ1aTVtqLioT%2FoJUbX591INEQWcNWY5qY6ZscmtP3otd6m%2FVvq29WuhJntrviNF4Iojt5sqe7z6Tyi9ylqygRMw5ehxjncBFmJ73wAOjaAJSVz4mqFZCsDNcdZ5K8Mx8RrR2pi9Xu5NhvO3%2FIQ%2FoteVVx2%2B1xCM30f2AXi2p3jf6b8XZnNZHFNzT3%2BuvgNFOKhHuj%2F3qX3tHZgDB2NDL6tXL4Jm%2BCMXkSEq2Iu87NlfeA78nJCWXyTXNIyVIxY9aJ2Cb7SrTBVGZiz2CyGD0jPotYyz30aNDhYakwXLtpzPI1FDvQPNmohq3q6Ou3OgbkAKbuMc%2FRGsQwHnFUmLrVLSutXaHU17BfgFld47V%2BPforVwN%2Fz9QratgDZ%2FMsdYue%2FoodH7eI5An9kLq6jvx8HGoWdoihjczsdzqvTy6mH0i78Fr23Lrp2m8SEl9GdqOEKtSBwpSyVf5yk%2FASqIds98tBsRyFn60JgpyH9A%2FmcYH%2FYuMwfkFZEhYF%2BxezC60eX6WhfNUoTS7PtGkO50bpdye21VRSMNeejr0GOqUBnfeYMvzTC75AUKpJrhVnJvjF3h6faTMndc0Uvkz%2BonlBTAt6MTgJFBMyLyyuSsFheTYtWzdWACUAPyqrSr34ML2%2FAAefyzh9oXt3kfOvT4wn3lClGOf9L0G7tT6NH4lZP8u8xCop03Xeag%2BCt1dUe3LWa0JVMWRR4bjRjHbsV74%2Bo4lhT%2F7s595pWWgy6KIXFWwcUvwoCITty1M95UJtCYBBta6t&X-Amz-Signature=31ff753da9e143e5380d8b31316872821776023b1cf739760777d5e4f2937487&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
