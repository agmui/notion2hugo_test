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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QIIRI4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIFJY7auQ4uM%2FRwdNOhCr966CRq5HMN6pkViY49oijmTaAiEA8BtXfhXA08gYoFb64yLyc6K6%2FASQMJg8zQ%2BWPzqaNZkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgmjckAuhUGNieVQCrcA%2BIYb6AmsC8NHtwBrfa86%2Bbmw86%2FAzMFqhzxENWWB3ccKxD4UZbkPqwbrmKhhF%2BMDW94%2B6hc0BwFEt4ChMcgPzfpmGTt4e670TSnKhOMeG2ATcGEAuUoF72t0dATEe1AOx%2FQQWzQGgPVRBe251xYcDZsYeWgxLptu31sQlR7z6nb34oZ8VuEvV%2FVqYkEYVchgwwcapKq%2BaPmRhslQicqHww4my4qNC%2BMzCDVOX1jdwLpZRsCVsQgk16ZCfPQZ3Ypxg2YTybLJvXnjQyRIRATcZEa1UNo76nLFZrCsv7AWXLo%2BgCGqg3ll0UmhTjf1Dgf0SxY8Cls6015gRzRiblf3NGu8hWo81rYsCsVZoCGzuG2ZNwOMYBdoiEe%2FJ1Fdlqn8usUu6rk8VIC52XWswpLTkojR6lggCtpGbYMWXznZQ3PxbgNa1iE7y3MMaGK%2FWv7bM9n3BjvmgBPgHf%2FwoECM%2FL%2FTKsvc5qs4CV%2FvaYEtXGcf9xBHbfBmmQrFNFTzmcNVtF7Cy2SIc9hh2XoX75hSvnGPsTt0dWoiLLamhAvUlmQLGmhFgVHf4jtpHGSdDdbayq%2BDVCWtmwo%2FQXPcmE44%2FgGGSROkg8Vrr5OIhQXODcIDHoxotCNDwe3nlrCMPXRkMEGOqUBSFdAIKiPd20%2BZQKq%2B5zI4Rn2Hlgdn4m1SY78h%2FYfoWzSbtGi%2BpxoWQxqb7wLJAFNh1MGdhlvsnsOLsUq%2BhlZG0UUdKDzB046GLOGc0WzooseBD%2F9yST7TS%2FebEOWg9u7CefVrrpa3ZYM92uFspmlD%2FdIw8B2PjXfYAorZQ9d69aPacf86YhgN14rmQRUET8LS9szEZShA6ycuhdmHSNED5OUhUkU&X-Amz-Signature=2fa53ef2cbb947a029290a74e4141321ed12078148c9734c6e56751313782a43&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QIIRI4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIFJY7auQ4uM%2FRwdNOhCr966CRq5HMN6pkViY49oijmTaAiEA8BtXfhXA08gYoFb64yLyc6K6%2FASQMJg8zQ%2BWPzqaNZkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgmjckAuhUGNieVQCrcA%2BIYb6AmsC8NHtwBrfa86%2Bbmw86%2FAzMFqhzxENWWB3ccKxD4UZbkPqwbrmKhhF%2BMDW94%2B6hc0BwFEt4ChMcgPzfpmGTt4e670TSnKhOMeG2ATcGEAuUoF72t0dATEe1AOx%2FQQWzQGgPVRBe251xYcDZsYeWgxLptu31sQlR7z6nb34oZ8VuEvV%2FVqYkEYVchgwwcapKq%2BaPmRhslQicqHww4my4qNC%2BMzCDVOX1jdwLpZRsCVsQgk16ZCfPQZ3Ypxg2YTybLJvXnjQyRIRATcZEa1UNo76nLFZrCsv7AWXLo%2BgCGqg3ll0UmhTjf1Dgf0SxY8Cls6015gRzRiblf3NGu8hWo81rYsCsVZoCGzuG2ZNwOMYBdoiEe%2FJ1Fdlqn8usUu6rk8VIC52XWswpLTkojR6lggCtpGbYMWXznZQ3PxbgNa1iE7y3MMaGK%2FWv7bM9n3BjvmgBPgHf%2FwoECM%2FL%2FTKsvc5qs4CV%2FvaYEtXGcf9xBHbfBmmQrFNFTzmcNVtF7Cy2SIc9hh2XoX75hSvnGPsTt0dWoiLLamhAvUlmQLGmhFgVHf4jtpHGSdDdbayq%2BDVCWtmwo%2FQXPcmE44%2FgGGSROkg8Vrr5OIhQXODcIDHoxotCNDwe3nlrCMPXRkMEGOqUBSFdAIKiPd20%2BZQKq%2B5zI4Rn2Hlgdn4m1SY78h%2FYfoWzSbtGi%2BpxoWQxqb7wLJAFNh1MGdhlvsnsOLsUq%2BhlZG0UUdKDzB046GLOGc0WzooseBD%2F9yST7TS%2FebEOWg9u7CefVrrpa3ZYM92uFspmlD%2FdIw8B2PjXfYAorZQ9d69aPacf86YhgN14rmQRUET8LS9szEZShA6ycuhdmHSNED5OUhUkU&X-Amz-Signature=6426cada6f8a2c69fb2d81a46f70c0c66e285a734ce46acb012889aabc244ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QIIRI4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIFJY7auQ4uM%2FRwdNOhCr966CRq5HMN6pkViY49oijmTaAiEA8BtXfhXA08gYoFb64yLyc6K6%2FASQMJg8zQ%2BWPzqaNZkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgmjckAuhUGNieVQCrcA%2BIYb6AmsC8NHtwBrfa86%2Bbmw86%2FAzMFqhzxENWWB3ccKxD4UZbkPqwbrmKhhF%2BMDW94%2B6hc0BwFEt4ChMcgPzfpmGTt4e670TSnKhOMeG2ATcGEAuUoF72t0dATEe1AOx%2FQQWzQGgPVRBe251xYcDZsYeWgxLptu31sQlR7z6nb34oZ8VuEvV%2FVqYkEYVchgwwcapKq%2BaPmRhslQicqHww4my4qNC%2BMzCDVOX1jdwLpZRsCVsQgk16ZCfPQZ3Ypxg2YTybLJvXnjQyRIRATcZEa1UNo76nLFZrCsv7AWXLo%2BgCGqg3ll0UmhTjf1Dgf0SxY8Cls6015gRzRiblf3NGu8hWo81rYsCsVZoCGzuG2ZNwOMYBdoiEe%2FJ1Fdlqn8usUu6rk8VIC52XWswpLTkojR6lggCtpGbYMWXznZQ3PxbgNa1iE7y3MMaGK%2FWv7bM9n3BjvmgBPgHf%2FwoECM%2FL%2FTKsvc5qs4CV%2FvaYEtXGcf9xBHbfBmmQrFNFTzmcNVtF7Cy2SIc9hh2XoX75hSvnGPsTt0dWoiLLamhAvUlmQLGmhFgVHf4jtpHGSdDdbayq%2BDVCWtmwo%2FQXPcmE44%2FgGGSROkg8Vrr5OIhQXODcIDHoxotCNDwe3nlrCMPXRkMEGOqUBSFdAIKiPd20%2BZQKq%2B5zI4Rn2Hlgdn4m1SY78h%2FYfoWzSbtGi%2BpxoWQxqb7wLJAFNh1MGdhlvsnsOLsUq%2BhlZG0UUdKDzB046GLOGc0WzooseBD%2F9yST7TS%2FebEOWg9u7CefVrrpa3ZYM92uFspmlD%2FdIw8B2PjXfYAorZQ9d69aPacf86YhgN14rmQRUET8LS9szEZShA6ycuhdmHSNED5OUhUkU&X-Amz-Signature=47ea59db311ce5f5096d3d5c5a9a71a068e88dbc9352d03e3678c8168047594f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOTFJEFG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIAF4GfrmmGwXzQfdJyYHFtavGZhCd8lznCNot2lA%2BrwuAiBJbpQc9n5EnGzZp5DAmWNbhE%2BsyXlxSct0MHe2isj20SqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg5mi0hVObc3AjaqxKtwDfV4V6%2B6lyuEXzveLkOOBnKHmg81%2BZdM5u4ZDGxtDpZb8UYbqWaB7l2YL%2FHYXJVaHGuXuq7%2BTngnQ2F2zlzE2wmjpdXj4001xKKV6F54e2OAx6BsspWO3WOGSjQPzzc13dbcb47PnBGsRqIYojf4GEuUKbIQuPEekqW%2BepuwhUERMaf2Go%2FssQb2ieb3RELytM1Pfnwmoy9uWrbKg0TkUf7VWXniCUM6jJkGjsQduF%2B5CsxJlUfzQbkjAfK5n%2FBXRimKn5R6jjZKOIIzj6mlvmIwuCVNJqIhQ8B1fp1Djgn6LEFyWA50v9YS27btZbJsRfVGi74kXQpRZpc0ZedUVhCYk7XwDuahw8kSWgKMoIo0i4Uh2F31MI7XPGu6Yhn%2B9i2yq3BMmcs80nWeun9muKZCLYRIJIInyuoQx8vbuDTVojDwkVwwf6%2FzcsKlqLznK7QtvnWWFNXzjw6j1vtOdxjxc7x5Js881c0elbzNKTnKQgXLrsNNP7qSucoABao7dTA8hNHRgjLqG6B5UwWGwgWb0eL%2FoyWMA1yPFbmlhX7y%2BzCrzBVoyt3OFGGQA3qQblxb%2BjyQNAsDO6Nz1e35DCkHIL40OQeu7MAGes9l2%2BpvbiWDEjqjDAJdASusw4dGQwQY6pgE%2FJX%2BA6UZBS%2FmlpDlBI4J4ryyunJ2IMnhfAMiAGM4uo5Z3tcmwV9fWJJafFZCux3iDXNFgdYqXhBMw12lCNyNEcbSNXrZztSp8JHlDa%2BwoPj1sI8ogE6BbRUVawYSdcLJotexASknwEO65D5P%2BQK7sfPHbjmaCvGrSAEnn0EPCD4Y5PC73CsHLdrzKPfKZ9VR85MNj%2FP6nuDaE1Hq3Ig%2BzGJSBiuEM&X-Amz-Signature=0a905fb626e28994193f7322d370abad21b63c3ec3280ab53313890495d27052&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEXT7T6L%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEdrlZD8n8wK2oZv7XeW78UtGtczZdAYXNbDuqjF%2B66YAiBTgW3nkK8hnX9CJbkDnEotTiRsAKF2TJMkXJa%2B%2BvP2tSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80uUeo4dLcEUF9ONKtwDm3k5UyfnrACpWhT9X4cxhPxqRqT8pZ62GkO9HgwAQR4ASvj9cxgRw41mN8oiMupumLQ2a%2FA252quZusurBN24fYpl6tHiOCJcLC2ZGa0KFl40LiIUhFkwaeDBTymdLyXxBdl71xXAEwm1EaswOQmwYtcvUMAEVa%2FyXl%2F1NTluHtcHSnUhXgRqNytejWae3qa9%2FRtq1jQHOipuQsOnH7qa8LiXlYYyAaicp3S%2F%2B5bWBiWnWAI5Iq20%2BvcFF9e88glwMlkvYiC4ZgbHC%2FBvg3ScWnyQyZghY9c1vlANvY1wcmVjrpmKKgvPs1GbmyDyY6K6hE5ieDrg9h0Y5vALPP44ahCLeKH0W2dLnPKQvYQzRV8vzvsdWdevVRDKObwW4QBn%2FpfBC9txy6Cz%2FLd5M7Baz2meuB%2FkeTXUYgRqFqTsDZlTO7PS%2BPKdeJ%2F32bUTlaUvrwXl%2FF6g%2B2TBL%2FmPu6hw%2B6RGSOSIVdr%2BXmByXweaQ0Q9eiy3T4HFVrmSjrjYKmmgMZXVuTyzzHcnBSLO2xHm5w1cc4W9RZEYrcpTBj%2Bid3Ao%2BtK574R4nwgeXDofk3M4lM2Jxh4ah5EK%2FdxKHSXc%2Fx%2FOzs7P6EKba5PBcgkDQl73y3QpGfdmGOJkDUw%2B9GQwQY6pgHdVazJFbh7jd%2FLtSDyRnjPBMQSFZqp3%2BpW%2F0N1PQR37ejsScZYoYyuUaWIymxDL4WEzBLVaw6A%2B2bKEglc5K8dra6DCqeIz689rnGQ0mJbe%2FHzLYm61vgpq%2BCWEgAhV1IGBTYpWAi0HiiYVfoUf9c9JsIH%2FaXMI5a4kNrW%2FzF1FmOy00fTNM1PrT1CcONjHPI6gaF03%2FhpwozXjs1ksffi0avnHAnT&X-Amz-Signature=f550a5d869eb62c080c8c6b188fc9fa7fb90cf2d44dd67a9783d7d7155c45d66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QIIRI4%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIFJY7auQ4uM%2FRwdNOhCr966CRq5HMN6pkViY49oijmTaAiEA8BtXfhXA08gYoFb64yLyc6K6%2FASQMJg8zQ%2BWPzqaNZkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgmjckAuhUGNieVQCrcA%2BIYb6AmsC8NHtwBrfa86%2Bbmw86%2FAzMFqhzxENWWB3ccKxD4UZbkPqwbrmKhhF%2BMDW94%2B6hc0BwFEt4ChMcgPzfpmGTt4e670TSnKhOMeG2ATcGEAuUoF72t0dATEe1AOx%2FQQWzQGgPVRBe251xYcDZsYeWgxLptu31sQlR7z6nb34oZ8VuEvV%2FVqYkEYVchgwwcapKq%2BaPmRhslQicqHww4my4qNC%2BMzCDVOX1jdwLpZRsCVsQgk16ZCfPQZ3Ypxg2YTybLJvXnjQyRIRATcZEa1UNo76nLFZrCsv7AWXLo%2BgCGqg3ll0UmhTjf1Dgf0SxY8Cls6015gRzRiblf3NGu8hWo81rYsCsVZoCGzuG2ZNwOMYBdoiEe%2FJ1Fdlqn8usUu6rk8VIC52XWswpLTkojR6lggCtpGbYMWXznZQ3PxbgNa1iE7y3MMaGK%2FWv7bM9n3BjvmgBPgHf%2FwoECM%2FL%2FTKsvc5qs4CV%2FvaYEtXGcf9xBHbfBmmQrFNFTzmcNVtF7Cy2SIc9hh2XoX75hSvnGPsTt0dWoiLLamhAvUlmQLGmhFgVHf4jtpHGSdDdbayq%2BDVCWtmwo%2FQXPcmE44%2FgGGSROkg8Vrr5OIhQXODcIDHoxotCNDwe3nlrCMPXRkMEGOqUBSFdAIKiPd20%2BZQKq%2B5zI4Rn2Hlgdn4m1SY78h%2FYfoWzSbtGi%2BpxoWQxqb7wLJAFNh1MGdhlvsnsOLsUq%2BhlZG0UUdKDzB046GLOGc0WzooseBD%2F9yST7TS%2FebEOWg9u7CefVrrpa3ZYM92uFspmlD%2FdIw8B2PjXfYAorZQ9d69aPacf86YhgN14rmQRUET8LS9szEZShA6ycuhdmHSNED5OUhUkU&X-Amz-Signature=2133f521e34e2e72b560a035bfcb2e86a91b94a7b606991cb413c8c2be6688e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
