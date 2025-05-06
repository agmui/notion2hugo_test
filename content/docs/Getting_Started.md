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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6O7UPHD%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwoPnjbaEvWdv0%2FaJJ2Td3ETQoC3X4lSWYlFOxtnraawIgVNBKgVesOSagCf1T6rckRr38zXfl3xU7tM64Qo3yrv4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDK%2FafG%2BLkzvNfEATpSrcA0OQsVHZgci3fnrleZSPZ1grV95QJlCcWbXq2Y7WyVr%2FCgK8xFcWBqpqSNAyntUaocpDqLvnkWZVDzNgYOBvUUEWLACdgOXF1J%2Bgm09%2BNcBdJPMM7oujI5reyUdERx0WdiabJQtnr0VdKmCkUZ77wvQjKK%2B7lpvhbYKmwUD13JL0G9H42zah2X%2B4RZbtEprGtdPuQ2WBnirSCaXV%2BUfCxY7Poew8XCGaPPN%2Bzj7bWWZSSzFWYn3WWmZ%2FY4LYfJry7hQKUVWptQCFG4Bs9iFJPhWPzVGuyvqeRuA03G84fVvBc0Vq6tOBjzVJdleF1Z0zYqV%2F5eanl5qSeDS%2B6oy70aFx5JAMZ7cGRBAUGK9vo%2BWSjMqYk2XxSC0jUVScCba%2FrjlmX38PQF3063rEzP5fmL9T9dpgZCyS8IO7VvXZNsqtjDK2aBsjYl%2F6Cwh7GxhAm0VGJIuar%2FzRYdixBXeK3INBt3f8frJHNJ2XmwlYIQEaOI3N2U3iz%2B8d4f0Vz50qqBgpCNLlgN5BB0PaRYlcGVF%2FTrdETH4X%2BUAwWEwbbw9ivOedL71U540J6mIMC6mY96dcikrNM1nx5i3Tc3T%2FwYcwYCJIovYFFD2w4UNDItQIU2TtQTxKP1PNWZIKMKux5sAGOqUB5PvJYeB18v%2FGmb5ywALG909TGoxnj9SKmQ09YZmbdOoJ1RaRqs9ICfWOaIu58mZiFAQunUeNcXYMr8f16yDgPnjnKR7rQq8TTuYCkYL7i0blhn6eAFHzcpJZS3Q%2FoQasba1Cm2hbJMGT07hBAQtfdKYvjhdJCaDNTpGP515v%2BJNkOAjm%2FWSBuySGrbz4slqGS38dj%2B%2FRsiGV3PJAveT7aXW%2Bsmvu&X-Amz-Signature=c64d3c139f316835ec43c4f6844f2b26b21b775060e4027a3835c9c741fdd717&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6O7UPHD%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwoPnjbaEvWdv0%2FaJJ2Td3ETQoC3X4lSWYlFOxtnraawIgVNBKgVesOSagCf1T6rckRr38zXfl3xU7tM64Qo3yrv4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDK%2FafG%2BLkzvNfEATpSrcA0OQsVHZgci3fnrleZSPZ1grV95QJlCcWbXq2Y7WyVr%2FCgK8xFcWBqpqSNAyntUaocpDqLvnkWZVDzNgYOBvUUEWLACdgOXF1J%2Bgm09%2BNcBdJPMM7oujI5reyUdERx0WdiabJQtnr0VdKmCkUZ77wvQjKK%2B7lpvhbYKmwUD13JL0G9H42zah2X%2B4RZbtEprGtdPuQ2WBnirSCaXV%2BUfCxY7Poew8XCGaPPN%2Bzj7bWWZSSzFWYn3WWmZ%2FY4LYfJry7hQKUVWptQCFG4Bs9iFJPhWPzVGuyvqeRuA03G84fVvBc0Vq6tOBjzVJdleF1Z0zYqV%2F5eanl5qSeDS%2B6oy70aFx5JAMZ7cGRBAUGK9vo%2BWSjMqYk2XxSC0jUVScCba%2FrjlmX38PQF3063rEzP5fmL9T9dpgZCyS8IO7VvXZNsqtjDK2aBsjYl%2F6Cwh7GxhAm0VGJIuar%2FzRYdixBXeK3INBt3f8frJHNJ2XmwlYIQEaOI3N2U3iz%2B8d4f0Vz50qqBgpCNLlgN5BB0PaRYlcGVF%2FTrdETH4X%2BUAwWEwbbw9ivOedL71U540J6mIMC6mY96dcikrNM1nx5i3Tc3T%2FwYcwYCJIovYFFD2w4UNDItQIU2TtQTxKP1PNWZIKMKux5sAGOqUB5PvJYeB18v%2FGmb5ywALG909TGoxnj9SKmQ09YZmbdOoJ1RaRqs9ICfWOaIu58mZiFAQunUeNcXYMr8f16yDgPnjnKR7rQq8TTuYCkYL7i0blhn6eAFHzcpJZS3Q%2FoQasba1Cm2hbJMGT07hBAQtfdKYvjhdJCaDNTpGP515v%2BJNkOAjm%2FWSBuySGrbz4slqGS38dj%2B%2FRsiGV3PJAveT7aXW%2Bsmvu&X-Amz-Signature=df59054e17cc03a99d6e5f1e278ab2eddffc886929cfc3a503df83e1872c6c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6O7UPHD%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwoPnjbaEvWdv0%2FaJJ2Td3ETQoC3X4lSWYlFOxtnraawIgVNBKgVesOSagCf1T6rckRr38zXfl3xU7tM64Qo3yrv4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDK%2FafG%2BLkzvNfEATpSrcA0OQsVHZgci3fnrleZSPZ1grV95QJlCcWbXq2Y7WyVr%2FCgK8xFcWBqpqSNAyntUaocpDqLvnkWZVDzNgYOBvUUEWLACdgOXF1J%2Bgm09%2BNcBdJPMM7oujI5reyUdERx0WdiabJQtnr0VdKmCkUZ77wvQjKK%2B7lpvhbYKmwUD13JL0G9H42zah2X%2B4RZbtEprGtdPuQ2WBnirSCaXV%2BUfCxY7Poew8XCGaPPN%2Bzj7bWWZSSzFWYn3WWmZ%2FY4LYfJry7hQKUVWptQCFG4Bs9iFJPhWPzVGuyvqeRuA03G84fVvBc0Vq6tOBjzVJdleF1Z0zYqV%2F5eanl5qSeDS%2B6oy70aFx5JAMZ7cGRBAUGK9vo%2BWSjMqYk2XxSC0jUVScCba%2FrjlmX38PQF3063rEzP5fmL9T9dpgZCyS8IO7VvXZNsqtjDK2aBsjYl%2F6Cwh7GxhAm0VGJIuar%2FzRYdixBXeK3INBt3f8frJHNJ2XmwlYIQEaOI3N2U3iz%2B8d4f0Vz50qqBgpCNLlgN5BB0PaRYlcGVF%2FTrdETH4X%2BUAwWEwbbw9ivOedL71U540J6mIMC6mY96dcikrNM1nx5i3Tc3T%2FwYcwYCJIovYFFD2w4UNDItQIU2TtQTxKP1PNWZIKMKux5sAGOqUB5PvJYeB18v%2FGmb5ywALG909TGoxnj9SKmQ09YZmbdOoJ1RaRqs9ICfWOaIu58mZiFAQunUeNcXYMr8f16yDgPnjnKR7rQq8TTuYCkYL7i0blhn6eAFHzcpJZS3Q%2FoQasba1Cm2hbJMGT07hBAQtfdKYvjhdJCaDNTpGP515v%2BJNkOAjm%2FWSBuySGrbz4slqGS38dj%2B%2FRsiGV3PJAveT7aXW%2Bsmvu&X-Amz-Signature=25913c845c6d326efc8c98dede5817ce53a9acbd7d366846feb90be9534eb494&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2F47MMF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLOalIQUzf3QCADlCFBCHBHktZjkcuGgqmEU%2BTVBOGFAiB3xYxcqwOWUdc4U2uj4iydLSnaoZsXZuupVF%2FhjDdzgir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIML5hUfqJdi95rMFTLKtwDs%2FgJCwIyDImglWHedSimHdze%2FLmVDnh2XLBs%2FmJ4d4OcDR6EwEiiYH7MujxEN9cOfHSI5Ep%2FPJHuqfteQL238HvsvA%2F5UH1pJAllpD6CB5BeOEyjs3HbPsh2jaVBuNNdysjGyRgU6%2Bnf98esQCfJqb3zM4w71iuOH2b%2FU%2F7wiKTYpU0TAYsMCf9f002zu2actZ%2BBmAS3EY6uOm%2F4%2FJx2CqYe6IcybSnsLsDJJmjfZL1%2B6YS7C8pPf9U%2B6vQjIWGZ74CUDLf99KLVQ4HK%2FqacrYzoWOvWSpEGX%2Bpd9t99%2FSyZIKh%2Fp56U9s1toXysi%2FVegDlCltiT6buVTmhVc7XFwBix9%2FohNh6XdC2aWfsiuXhmENTMk9Ku%2Bexj5%2BnrBtGgNHIPVZOpGgvbG9xjoN0p6EHcXIOhIOKai8r8ve0Rn2sKdTa22bYQTiFk6Qr6yoZUs61aVN9QPca4fkHcNwN32Cav106SFEJmZ0GMQB5ATXOrkKn293GQo%2FDG7uWvRTV14OY4nLboEbv6zMK20htglsL4lg7vVJ5vXe9tIU6HOJS2w1sO%2FgvnEpWaeV%2FVUwTQBZ6bMHsKRlXHWN%2BsfrSDopFwvbAuSirHoKFhyYXbHXIbi%2BDgK%2B9mxB0%2BoZ4w8rDmwAY6pgGiy5%2FaongZ7pfH5i%2Bficu3ZNekQgnQaDi%2FiwpB1Eb66pWZNNw%2BCWHu6%2FFT%2Bw8A%2FCsCJNQUmmltN4rsGhfZQq%2BG%2FZx0B1%2Fbutf4%2B86yqXUFkpkXrldOYWN7iGu%2FPN9z1UlMBPxYJJBrd8cr4d4qNpqjkJqoW2zAp%2ByaE7kuiAYBeZGChkIofg3lzjw7fZXizUbX5guSp%2FM7Id%2FtSEJl%2BZnJO2WGJVRj&X-Amz-Signature=f2f56e5f01f87b029248657122514caac9c9a19acf8546b738424ba592dd91cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ST5UCN3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWCqu3sSZWyXg63mpW6hA2kh5nMfocnpSMMI2AIctv8wIgIWende15dpo48N%2Ftk5J1cV3YuyuJ0edM1aaTWE69pgwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMQQzKtMvgZSSzkYqSrcA1xBPrjiCvMpA%2FBM4irDGfrRcHpfW4tRCefwRajYOZyS5v3Wqr8rigzvfzw%2BnVw5vAiJMf8IYDoZN7UGnVTDYLJfk%2FCPBwbdoeV6uYH%2FsJvnW6c6sU3t3fnllHYe6NrtU4rfFGYhwp9YJPUy4ZFzIZlrndru6wAqj%2FAvxzPXSjYwiv%2BXWiV5rEKNBuefzI%2BaLjHwwmXTlKUgkYsu6MLlPrAfdycI4Wc%2BHj1kKY7BeuZbnl%2B3zk5EatLF%2BC6hSBPvM8yGMYrtBo%2Fd%2B3mtLIhlFWXcZl5pQfb2koW8BljxVMTSZp8jGmgpwrdCAKTRzoXQ3fBEec%2FYQj6xuFpsPpRb7F3wrzObio66O5VRVFI7Cc44J1WAkvhSTc22GwmsTFuqd35jG3gV9ObkVaU%2FmFL3uS%2F2GbANdniyyklF8wQuPz3GtMU64j4EoIZzDDCFtJrcLW%2FgIpa7kVCb1Kpx8xHIScsqm0gWgUOr1VSWxJHSmxrBmDZ9pj0x8pnKVqglo4jLQR227IIMat%2BDVXZEoMjOJuFCSbJLRYqq7H5z7iWtx3IsTaErd9e6g15l3a2zboezJEV9Ts69Px34REYkk%2FvGZvzGiuy3y3YYawtkTqPAMhXnCaMtpQVyfLAGZqsCMJWx5sAGOqUBYZGIE%2Fsau1J%2FAzpjwB%2B%2FQZ7%2FCUvA0t7N43uWwOwnQ83RcTI45geUGg2irgUhy9ftwAiZyYPqGrFM58G90BqqG5DzPR31l%2FZicKejXZ835RsN7u%2FsYuq38pSHWvufhP5TvliPLxjkslVAL19F%2F%2BjJnqw42biiusDWQGJ%2FRUP8Vxu2JKSpbDgwXCghG96DtfXwHePffO%2Fi%2BrGOdDDNrDngFrQIBLVp&X-Amz-Signature=e05f0f2f4a229cbc96865ec50aa3cb1e6da305022a7acea86727292815cec1ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6O7UPHD%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwoPnjbaEvWdv0%2FaJJ2Td3ETQoC3X4lSWYlFOxtnraawIgVNBKgVesOSagCf1T6rckRr38zXfl3xU7tM64Qo3yrv4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDK%2FafG%2BLkzvNfEATpSrcA0OQsVHZgci3fnrleZSPZ1grV95QJlCcWbXq2Y7WyVr%2FCgK8xFcWBqpqSNAyntUaocpDqLvnkWZVDzNgYOBvUUEWLACdgOXF1J%2Bgm09%2BNcBdJPMM7oujI5reyUdERx0WdiabJQtnr0VdKmCkUZ77wvQjKK%2B7lpvhbYKmwUD13JL0G9H42zah2X%2B4RZbtEprGtdPuQ2WBnirSCaXV%2BUfCxY7Poew8XCGaPPN%2Bzj7bWWZSSzFWYn3WWmZ%2FY4LYfJry7hQKUVWptQCFG4Bs9iFJPhWPzVGuyvqeRuA03G84fVvBc0Vq6tOBjzVJdleF1Z0zYqV%2F5eanl5qSeDS%2B6oy70aFx5JAMZ7cGRBAUGK9vo%2BWSjMqYk2XxSC0jUVScCba%2FrjlmX38PQF3063rEzP5fmL9T9dpgZCyS8IO7VvXZNsqtjDK2aBsjYl%2F6Cwh7GxhAm0VGJIuar%2FzRYdixBXeK3INBt3f8frJHNJ2XmwlYIQEaOI3N2U3iz%2B8d4f0Vz50qqBgpCNLlgN5BB0PaRYlcGVF%2FTrdETH4X%2BUAwWEwbbw9ivOedL71U540J6mIMC6mY96dcikrNM1nx5i3Tc3T%2FwYcwYCJIovYFFD2w4UNDItQIU2TtQTxKP1PNWZIKMKux5sAGOqUB5PvJYeB18v%2FGmb5ywALG909TGoxnj9SKmQ09YZmbdOoJ1RaRqs9ICfWOaIu58mZiFAQunUeNcXYMr8f16yDgPnjnKR7rQq8TTuYCkYL7i0blhn6eAFHzcpJZS3Q%2FoQasba1Cm2hbJMGT07hBAQtfdKYvjhdJCaDNTpGP515v%2BJNkOAjm%2FWSBuySGrbz4slqGS38dj%2B%2FRsiGV3PJAveT7aXW%2Bsmvu&X-Amz-Signature=97961db394107404d1e4569291fb00787c96d14621597dc96a3f318d17a699cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
