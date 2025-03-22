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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMBVFDX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDSIDHIG%2Fo%2FK33NMogsHnBSdkb7NGOXX%2FnThy2dy0SZ8AIhAIZUL8ONGWCJHw65mfd8gZlTooP9%2F1EnhFDrGDbt6K0zKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx6BiWO4pDOiO3EDoq3ANb5KzfSUs22FYLnRyrjBExMJX8CqVa0jmaxG6G3%2BjYKcBE9UmbwBu%2BzxeNLBeVN2BznbUdpApKU4AuvT8czUzkOMct9pnQ5VCiuoLKIJ2lK6Ju2vuHBTy0Xh3pQjrtSZBRIhAV64kXO1idWgAfUUjVb195L7WPBXqXrnlorJKMfNIADnMXl%2BByoKYVT3wQVHH6vTPl%2BgJ0A43oI8iYN71wRc5oq70eonncmyHc0xAog1kzrskTxVFLUO%2FeltZyhcey2vNh69J42Gh6Zp02iTsaZO1N5jUjt0pD60iax3DKQvR51sXpYEAebQaDLiQdb7MBBg5u3FepP8dwSNzU2lBeaTnc%2B6HmqBlanWP0O0KdTIKfoYpX9q9lO%2BsD7bApW7zJKTjVWu4vXwfINOgvS%2F25nNYn8BzxlRlwos%2BrY8zwKKg7Z4IVMSsbdVcE8L%2F%2FLSiWArYoOWeJ9KE3BNeiYcBgdRP%2Fu%2Bbvn2QXqxquaY4IobMBToefA2IxDOlE6SBE7KPyj27%2BQK5QTFX9zevqKImzYl4cuToGtqZTgxtyLHgRW2SGsduHL1h0YGl%2FcKSnhWNQcKo3od0Zjo3nYPtIh9FOqUG02c2lgy7DYa1gNYYbf0X4KW90Y%2FuQE3BgezCzmPy%2BBjqkAZ9veq2pk%2BetAsCwOyf63brunKy3nbwpzM2lTnKEhmVOziQJN2KIJ5qsqTcz5tydAkFUd%2FryfTjrflt7QhI0m%2F%2F54BGZtTtKvRb4e%2BpnkoOZb6A2AjTRfrDPf%2BDJyRHWTsS9dedsxXk0%2BPUMZHWOhbuU1oCsiRZGE3mYbGFg1xMMxkRCZCe7VhGyiLzqn48V9a6nTe3hV8ITKZ31CFO7VcS7afZn&X-Amz-Signature=cd5fca70620d437c1c9477b7e5df2a1d6f1e7d2d7b67c2ebe6fc78bd7a784307&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMBVFDX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDSIDHIG%2Fo%2FK33NMogsHnBSdkb7NGOXX%2FnThy2dy0SZ8AIhAIZUL8ONGWCJHw65mfd8gZlTooP9%2F1EnhFDrGDbt6K0zKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx6BiWO4pDOiO3EDoq3ANb5KzfSUs22FYLnRyrjBExMJX8CqVa0jmaxG6G3%2BjYKcBE9UmbwBu%2BzxeNLBeVN2BznbUdpApKU4AuvT8czUzkOMct9pnQ5VCiuoLKIJ2lK6Ju2vuHBTy0Xh3pQjrtSZBRIhAV64kXO1idWgAfUUjVb195L7WPBXqXrnlorJKMfNIADnMXl%2BByoKYVT3wQVHH6vTPl%2BgJ0A43oI8iYN71wRc5oq70eonncmyHc0xAog1kzrskTxVFLUO%2FeltZyhcey2vNh69J42Gh6Zp02iTsaZO1N5jUjt0pD60iax3DKQvR51sXpYEAebQaDLiQdb7MBBg5u3FepP8dwSNzU2lBeaTnc%2B6HmqBlanWP0O0KdTIKfoYpX9q9lO%2BsD7bApW7zJKTjVWu4vXwfINOgvS%2F25nNYn8BzxlRlwos%2BrY8zwKKg7Z4IVMSsbdVcE8L%2F%2FLSiWArYoOWeJ9KE3BNeiYcBgdRP%2Fu%2Bbvn2QXqxquaY4IobMBToefA2IxDOlE6SBE7KPyj27%2BQK5QTFX9zevqKImzYl4cuToGtqZTgxtyLHgRW2SGsduHL1h0YGl%2FcKSnhWNQcKo3od0Zjo3nYPtIh9FOqUG02c2lgy7DYa1gNYYbf0X4KW90Y%2FuQE3BgezCzmPy%2BBjqkAZ9veq2pk%2BetAsCwOyf63brunKy3nbwpzM2lTnKEhmVOziQJN2KIJ5qsqTcz5tydAkFUd%2FryfTjrflt7QhI0m%2F%2F54BGZtTtKvRb4e%2BpnkoOZb6A2AjTRfrDPf%2BDJyRHWTsS9dedsxXk0%2BPUMZHWOhbuU1oCsiRZGE3mYbGFg1xMMxkRCZCe7VhGyiLzqn48V9a6nTe3hV8ITKZ31CFO7VcS7afZn&X-Amz-Signature=182f239045c8d15bb959c236f449cad3f638d419efdd4a02f872b76ff5990655&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCTN4ZJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDQeUaFG%2BL%2FEIPlOUE956R87uynzX4xZ8L5igjOOPzJtAIgb9pZvNaKlHXH9k5BZEpkwlzy2xRkWZthIRpuW8YHFWsqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkjHoOPObc2FAzQAyrcAyIPV02oAlMoDAKIrCnaZ9bNKUEJV4pzDnYoPVqNq28VKiSzt6kYiksRXzcc%2BZj7MHkVRGbWEWnIXXqYDrJK4UAMFVMErdAKUEb%2Bxb4ykYUK8U5rlzbmb02y0Cw3qHXJos2CktNfk8ILufAgH8rXpu8%2BKgBxp00rjXg0UO11F0nsT9qjPF93Eqfpu1bM0OAtvhe77M1Q8J0Ook0A4CERZ2n7Q0C6A3fZ%2BvSOawYolkCt1V80sN0NFZZLVGazQJHB4oRYdG%2FEcW%2BayQ85LJkT6W7S9rRu3xlRrLsJN7BKf%2FSpXxEK%2BUM7fq9kNsJu4kSFkoAZaEjC87V3BJjRCEiJa48cGDaD7FwKQU%2Bvf3naOKgWvq4Z%2FA60BEm5wmYKId8Glb13gm%2BLXKyiF6O2ztwuLa2PhWIJVXz42B6eAdh8XvfFagKHI0dic5pQxtP4%2BnR3b8nYQhqN%2BPq4nEsQNflPRkSOisCVDj2K%2FdOyYu%2FaLEoWlT%2FJHUKrGujsDhF8hOXCbEuHwE761mMQ%2FV%2BbaGEb6Wbnd66zm7J3eLjkswi5P1smnJ1DXpvnio4bqIvXASHdcqSfV3B%2FuEN6%2BR4ryp4VSG7nuUP5xlKN%2BA7GyX%2BXpm7YrDY%2B%2FR67srFvbi5RMJyY%2FL4GOqUBgGUt4%2B3JGIMxJELWK6e0zsbduQ5i6FLQMzZURR2M9lnEVXoXCJ8K%2Fy43vVgEmEvL1%2BurwrSY7uUbb6N6JirfcodFfa1rObdPJGQTqbxn1DaqBf%2BFPc4U5I7onrz3ReE0s%2FMS%2FPuX2rPfNOgrmYDi3qH8ROfBkWm3uurfVpF5gkJIK5FVlcdsFO%2BrxLng%2B8LO5%2BH%2FvD24u99EQK%2BUthMSQabgob1H&X-Amz-Signature=2defdb6a3c0e1b1e8a0e37e542d98e6644dacf47b831e56f61f21f297bf40076&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW7RBRBQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDr4lHzl2kmD7xFKYYPC%2BL1B3KiR1uUnSedO8bkTiDMJAIhAJSHEb7s6t1T8E4gbEt10a1kD50LbTRbOYDe5y8MTHYvKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfJdqmnz5%2FOZI9Uw4q3AOJP2%2F4E9ZoWWYD9ACa6qhwlWiaTfQ2VWZJEgr1BNz9sny0sYf72A48Vf%2FUh2au%2B2ZXOJEPW31ykWQuMGNMAR3xinttEoU47IgCBZkEjpJxgepecDUdbSiP2D2opP7PXsrW3gRqf5bNqTfI4POI6TyDrhC0Gefbb3qutPmtYmfmrIahLrstpEmM4UZ1%2Fyv7KDSwsUpQfX26x2PP8FnBvjc7zQXE4B%2FlZtoJHvPa2rwmNmuyaNgnoAK59Zpno1AyayQv6GMLmCFHfRNvagpB%2FquUjsDSwXDghwenUCz2j8gQo54%2BKBYBlUAC0cLS4VJG67zd9OWYWx1lQXd1J9%2FhKLxqy%2FUVKdnAZt5Vo%2BK%2BPB%2BG0u23yWILpOvEe1BqKiMwo7Qn8XbsG5JpjuELr2%2FCsKynmbS%2FubotrD6U3yHuFPrE8pB7jmMCzbsYuoSaQlMEHwHyFYQauY8NhvZu0hdTNffHKnL0%2BbPiCM97TS3CFVBQk2Xb7kwFP7kHaXaT5rZ5ULUfLEBG7zsPzaogowSN1Plq9altjPNG7S0BQxdgpHQHrfK67b%2FXdGrg13lsUffjvY5uTZVyJY4HVWYI0QexljE%2FmXm2G43FYwa8i9fxdM9uuWtEi%2BJAvB0pwhVzvTCfmPy%2BBjqkAd24rFjaTcBLNc97nYlvSRxD43BjDmXi17vZaC6NGgYyOPJTb1biIYbostq4E7F086Pwf22wCKThobTBT%2FuZrUiRZ%2Fs6rr2QsnP6FvDk7aXlbpJr6cRKy9KqOFchPS70AcY%2F5a9%2BWTNYAQHr0OUiIsr04l244I%2Fm6f3E1cwWRPaBnOzF48Zkhjxd0PMngmLxbT2HbQ1Ve6%2B070MfDAv%2FJ%2FU4rmuq&X-Amz-Signature=56b1e834328b2a6a809a8711837c3b7e8113369da291b376ff20e939ddf23d13&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPMBVFDX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDSIDHIG%2Fo%2FK33NMogsHnBSdkb7NGOXX%2FnThy2dy0SZ8AIhAIZUL8ONGWCJHw65mfd8gZlTooP9%2F1EnhFDrGDbt6K0zKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx6BiWO4pDOiO3EDoq3ANb5KzfSUs22FYLnRyrjBExMJX8CqVa0jmaxG6G3%2BjYKcBE9UmbwBu%2BzxeNLBeVN2BznbUdpApKU4AuvT8czUzkOMct9pnQ5VCiuoLKIJ2lK6Ju2vuHBTy0Xh3pQjrtSZBRIhAV64kXO1idWgAfUUjVb195L7WPBXqXrnlorJKMfNIADnMXl%2BByoKYVT3wQVHH6vTPl%2BgJ0A43oI8iYN71wRc5oq70eonncmyHc0xAog1kzrskTxVFLUO%2FeltZyhcey2vNh69J42Gh6Zp02iTsaZO1N5jUjt0pD60iax3DKQvR51sXpYEAebQaDLiQdb7MBBg5u3FepP8dwSNzU2lBeaTnc%2B6HmqBlanWP0O0KdTIKfoYpX9q9lO%2BsD7bApW7zJKTjVWu4vXwfINOgvS%2F25nNYn8BzxlRlwos%2BrY8zwKKg7Z4IVMSsbdVcE8L%2F%2FLSiWArYoOWeJ9KE3BNeiYcBgdRP%2Fu%2Bbvn2QXqxquaY4IobMBToefA2IxDOlE6SBE7KPyj27%2BQK5QTFX9zevqKImzYl4cuToGtqZTgxtyLHgRW2SGsduHL1h0YGl%2FcKSnhWNQcKo3od0Zjo3nYPtIh9FOqUG02c2lgy7DYa1gNYYbf0X4KW90Y%2FuQE3BgezCzmPy%2BBjqkAZ9veq2pk%2BetAsCwOyf63brunKy3nbwpzM2lTnKEhmVOziQJN2KIJ5qsqTcz5tydAkFUd%2FryfTjrflt7QhI0m%2F%2F54BGZtTtKvRb4e%2BpnkoOZb6A2AjTRfrDPf%2BDJyRHWTsS9dedsxXk0%2BPUMZHWOhbuU1oCsiRZGE3mYbGFg1xMMxkRCZCe7VhGyiLzqn48V9a6nTe3hV8ITKZ31CFO7VcS7afZn&X-Amz-Signature=99ba93bb93603fe651f4756601fcaee6fddb6a698acd4634e05e7682d8cf9d41&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
