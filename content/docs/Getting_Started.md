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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHN3U6HW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbwf%2B8C32yRSc%2F6IF6HdnusuMYJl6pfbiYNMQnaSbczAiEAxBz5wDMnWgn51W3UHlKEnmhXJzL1WCbgRoDfoZpRUhMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOKtSeACvap5bcJAmSrcA5c7oFZ8XloYw43fxFg4BrMr5FFdD%2BfCRGogeDFYCeZF9TYoKbQzIloQzyAjEbODdQbSPZx3MiewnKCstTFi%2BzdePo%2BAQkxesi4PWI%2F6M30DOLFB1htnmJgnJf6y20hN%2BCFD6g5GJSK0NhvCi8Af6WH%2FjTHJiHXCJWfWExmoTK9VMnlSHTp57%2Bg4BRMOXHtp%2FQbGY4lck4zN9z2t6n5JxLEPfWhwhtYo87IQHhM7vTzyiyeMDhBOAgg0MgEOM3NJ9eeLEEQJSdNJfuStY%2F0ey8CNa%2Bi4sbTle9dy5bA3Z0BfXVyinS6ttWZ%2FXgSGUhixhzkJFx2UMKTdSggZHiwDYbvP8teaeKa3cFgjM82eaE1Z2ZrznH12VfMAmMlKgQKUQ4wSZCkiIq59X%2FgNcsLjKdvZPwD9nzKYhXYm7nw3AdpDgZp%2FP9pvYCcfVcYG67dW8%2BxbKx0femDqGT0Lo3UKGv40cFANrgZgU1GFZVI%2FdDCCna0H%2FvwPAkneZXL148FBQ21tI8KEYblomHrsHmRnOV3QeNA9aLcKJqfgihiWhshyOOvoXuAejOT9WxvbGqQMBS2vVwaS%2FBN5x1MxImYrQi0nFjU%2FxDdYtxFk7mBXAcPnKGuDgmnVjgV0OjEZMMi3v8AGOqUB9RaH3vgWFNgDdxLZYaZAPBHST3c6kwxF3oBcm%2BjfEcyurEcyN81RlUX1D9GCaBYWBQl6c5dfIKXH5ncgHBQg%2B5veuSgvn%2FQViGtau%2FPd%2FvTH%2Fg83eAqCcXF%2B%2FF0E%2FXSk2z94SugvXWv1uwpzwCqWvlWM87eLWkDcCwf%2BzCbRJShUx8JWTxpZyTFOC8ZaPDqh0DWKy2YMoNhynWQexT8BZARqJHoL&X-Amz-Signature=730cf96d43244292dc3085a7bb8fd127548f04a7a46b70f1fc74e9c7b6726e64&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHN3U6HW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbwf%2B8C32yRSc%2F6IF6HdnusuMYJl6pfbiYNMQnaSbczAiEAxBz5wDMnWgn51W3UHlKEnmhXJzL1WCbgRoDfoZpRUhMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOKtSeACvap5bcJAmSrcA5c7oFZ8XloYw43fxFg4BrMr5FFdD%2BfCRGogeDFYCeZF9TYoKbQzIloQzyAjEbODdQbSPZx3MiewnKCstTFi%2BzdePo%2BAQkxesi4PWI%2F6M30DOLFB1htnmJgnJf6y20hN%2BCFD6g5GJSK0NhvCi8Af6WH%2FjTHJiHXCJWfWExmoTK9VMnlSHTp57%2Bg4BRMOXHtp%2FQbGY4lck4zN9z2t6n5JxLEPfWhwhtYo87IQHhM7vTzyiyeMDhBOAgg0MgEOM3NJ9eeLEEQJSdNJfuStY%2F0ey8CNa%2Bi4sbTle9dy5bA3Z0BfXVyinS6ttWZ%2FXgSGUhixhzkJFx2UMKTdSggZHiwDYbvP8teaeKa3cFgjM82eaE1Z2ZrznH12VfMAmMlKgQKUQ4wSZCkiIq59X%2FgNcsLjKdvZPwD9nzKYhXYm7nw3AdpDgZp%2FP9pvYCcfVcYG67dW8%2BxbKx0femDqGT0Lo3UKGv40cFANrgZgU1GFZVI%2FdDCCna0H%2FvwPAkneZXL148FBQ21tI8KEYblomHrsHmRnOV3QeNA9aLcKJqfgihiWhshyOOvoXuAejOT9WxvbGqQMBS2vVwaS%2FBN5x1MxImYrQi0nFjU%2FxDdYtxFk7mBXAcPnKGuDgmnVjgV0OjEZMMi3v8AGOqUB9RaH3vgWFNgDdxLZYaZAPBHST3c6kwxF3oBcm%2BjfEcyurEcyN81RlUX1D9GCaBYWBQl6c5dfIKXH5ncgHBQg%2B5veuSgvn%2FQViGtau%2FPd%2FvTH%2Fg83eAqCcXF%2B%2FF0E%2FXSk2z94SugvXWv1uwpzwCqWvlWM87eLWkDcCwf%2BzCbRJShUx8JWTxpZyTFOC8ZaPDqh0DWKy2YMoNhynWQexT8BZARqJHoL&X-Amz-Signature=39964dee5157c195305f59c50fc068fefb68d11cbd8cef2f817c104e6687a617&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2IY5Y3T%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzklnpik90zkI1JZenAIlhdO0UtDjTGze5jess9HtXTAiEA%2FN8PzWoDXzm%2BAxlj2otofqoBtKnXWWMjw2yUwzfl%2BHcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOY8JB%2BPwNoTn0JAIyrcA%2Fk%2FL2h8cNG8zSlPI29EybLwndbzhlBnTTLkmWTrLL92x6HlNFYAsu4m8%2BZhkbNYJpCZmycRorrWr7%2FWv8WDUQGkRTuNnC56rlEGbfR7V0hkY03%2FPP7eoQoEzMB2V5MgtlQFLNG2%2B1IOPkYquhS7eTU2d1%2F4E4CvuFMJqsExP3%2BQ7fpg%2FtaS0NgiXDQmgs2bjXpVXHErkStfRCQHr%2BnND%2B3kGyBvVNt%2B8B%2FsNLWLA5Y5Dj%2BKn2LRLQSQ4JlKednq4aqGaw33RQDc32he4jxcu%2FoA%2BswVb%2FldkkyTbK9rap9ldb%2BckunbwpxfYm8tP%2Flwq2l6EM%2BJKfBIHImvfnNu780v%2BqwPIGcK%2F3yAi7ns7pbH%2BbSx8h8KF48x1qfm%2B5thUmWLnKJzszvSxsbRkOXOVVDZv0T6TsnzWzDvLRRL9TxNKhc8FyZGTzx%2BLACEozgo4bk5Ymlu51K%2FZ0Fi1yglttqE%2F9H4p7Sk3YWNSwvw4ZF8xnI%2FI9oWtG%2BvhKnhPdGzi%2BOvzmndBsvPWFiI8voEorKox8EiAer5c16TEyd827tVd9JeU%2FMjBkVAuwAS1qIpWDm4NGN396qNWBvPIze5r8b%2FeMWO7nNEldH7kFvDcHacDm3TfnYRKxmEEiQvMKG3v8AGOqUB4GKC05ZWElJqa5umkGYzSJ1FRJcEC7cJwpcgZzioWz0p8IYdnEhtIuL6lLiVVjeZ5EUSCGojNneedk%2FGI4CWGfDBoXi50sK7UV0Yf6gq6lpnMdCx0dtAuZrKLYoPxFpSJawcBaKKvJ0kB1Ubf3J83kB9%2BmdrjEAO7r7lNFo94LD%2FadY%2FJt%2BUm4i88UfNEXHmPWeAbE0l7tlKDc6%2FkpwO3es7tpJW&X-Amz-Signature=63eca7ed9dbd799f6d6231069e9fcb78c55b9d5bc8c285ef315f85eb1dfaf6a1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J25HD4A%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBTO6PX3h7qjh0NHeOXGMRKTebUWmSOYgH9H3f%2Fo17JAiAd4jlUFS%2BZBHUQPp%2BIseDBD7PXOSlzuSFE6OGpUbvZNSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8%2FIMzoTKENMBqhU7KtwDj0gmX0ysKs%2F01Flvgb97rbxjyFlciKylI3J%2Fr2DDvEyc7xKPlakTcZiaNwBtmU46jPL%2BB%2Flc%2FFqNlJdg1CnTZHsK9VkpwmQh7lHV8Tzb9sKsdZt%2Bwz6QMDp6cGwKE83wcZwMXkpVaykcQPS2z2RcHikdxFeWXR5uMnV6SBBkyKJQuAMNOgeZLSaa6%2Fg4As10jcqh6B0VdA6AlSlQe8x%2F5uExOGRy%2BTGaYF54c97sN5xktEWPhOLuAxCCo56Svdg%2BxuYaExbfh7mz6C9Bl6kSTrTc9PsvrKIw%2BPsqJLeccDhnZOTAhHmtWIGKGw7jNd%2FK7eppN1dF%2FthsABhJFdmVZyKCYANf4GGrKCtAg38ERYXFUIFrveSipjdCrU2G6pFhokSiLxaLR9bBuHGClJFUwX5gg62jZL%2FJnRug43PikDjMXt6LoAei2Xg6c96nGaTdQB%2FMsCjjOEJ5NE5ClFYWikYXOJ8HlBRBypPFZ9WpCWUsTUNhEILKhVF15Sfzvje%2FkM%2F3gA%2FZdQAUGxbmJ1Z1710rgebXuA8x3%2BQekQVExsA6CPTeMvrOCplESHoHZoNDWKETY5WtFutw08SZUDBm%2FzPw68r76Cn%2FEqMKOlchfD6frd0A4vRZNhMw8qwwm7e%2FwAY6pgHSob3ppEWMdTvs0uBKSbaqtx3UXy7Xva%2BRcnIy87vWNctFOgGM4hfGzjA82ck0Lu8KRMyiGGMJ9%2BD4DQD2GlBOL8imt7zeDPfvxaaE97kECbYB%2BjcZU5zM%2BePosytQHS0iys7oj77UFq5ImmLig5RQRkbbKBjhy4e6uoYolvtk4JuOU68a3yhlXkuHabnfVpauMKa98XA96oN9Od7jC7Xuv%2BvjRZ4c&X-Amz-Signature=231cc7d3a0e9d88ec659e05a37408868493c2384f3a1d06d264eeebcff6b773f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHN3U6HW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbwf%2B8C32yRSc%2F6IF6HdnusuMYJl6pfbiYNMQnaSbczAiEAxBz5wDMnWgn51W3UHlKEnmhXJzL1WCbgRoDfoZpRUhMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOKtSeACvap5bcJAmSrcA5c7oFZ8XloYw43fxFg4BrMr5FFdD%2BfCRGogeDFYCeZF9TYoKbQzIloQzyAjEbODdQbSPZx3MiewnKCstTFi%2BzdePo%2BAQkxesi4PWI%2F6M30DOLFB1htnmJgnJf6y20hN%2BCFD6g5GJSK0NhvCi8Af6WH%2FjTHJiHXCJWfWExmoTK9VMnlSHTp57%2Bg4BRMOXHtp%2FQbGY4lck4zN9z2t6n5JxLEPfWhwhtYo87IQHhM7vTzyiyeMDhBOAgg0MgEOM3NJ9eeLEEQJSdNJfuStY%2F0ey8CNa%2Bi4sbTle9dy5bA3Z0BfXVyinS6ttWZ%2FXgSGUhixhzkJFx2UMKTdSggZHiwDYbvP8teaeKa3cFgjM82eaE1Z2ZrznH12VfMAmMlKgQKUQ4wSZCkiIq59X%2FgNcsLjKdvZPwD9nzKYhXYm7nw3AdpDgZp%2FP9pvYCcfVcYG67dW8%2BxbKx0femDqGT0Lo3UKGv40cFANrgZgU1GFZVI%2FdDCCna0H%2FvwPAkneZXL148FBQ21tI8KEYblomHrsHmRnOV3QeNA9aLcKJqfgihiWhshyOOvoXuAejOT9WxvbGqQMBS2vVwaS%2FBN5x1MxImYrQi0nFjU%2FxDdYtxFk7mBXAcPnKGuDgmnVjgV0OjEZMMi3v8AGOqUB9RaH3vgWFNgDdxLZYaZAPBHST3c6kwxF3oBcm%2BjfEcyurEcyN81RlUX1D9GCaBYWBQl6c5dfIKXH5ncgHBQg%2B5veuSgvn%2FQViGtau%2FPd%2FvTH%2Fg83eAqCcXF%2B%2FF0E%2FXSk2z94SugvXWv1uwpzwCqWvlWM87eLWkDcCwf%2BzCbRJShUx8JWTxpZyTFOC8ZaPDqh0DWKy2YMoNhynWQexT8BZARqJHoL&X-Amz-Signature=1638b960a5b9c790df9dc06df248f0081640e40981b763a291e6eb0d82c13e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
