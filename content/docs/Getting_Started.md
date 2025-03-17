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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CJG7QKJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFXnDT6VH0g1Wcyhi3bCvTqsB7OMBBonElOF9NS5FSqwIgHXO9KKzk933GEGt8T9xDZUmHO4vm3%2BxsQg5Dj5z%2FM44q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDN1SRQyX4I7fsZvlLCrcA74dynto9STldJurxQ2Af8FFDxKrCqlEkk6oHPZaQJdyKB908HXWdkR3jqdVqq8NuFdOMWSube7k%2FtBeayYOUJb3uhUdjRf319Mvb%2BEomVe9l6yIDWXRxg6oG33Cgb8Bo9pMh%2F7TCnSLKplZ7eh3pRIY7x5gE6t6b3DreictfjW9QlyCJCdTlNroYYeot4StUUQZnQTuecAIhfeaF3%2FdI67hYj7TSBOCVxfrV%2BfL9dhyJBeAjgmXbazdEmnB%2FiOEyYKigCi1iOLpjc7KwWi4E8Cn4T2inDpY6ok7LH6TuKAeFX1FpajG49Sxn7lqKZGYme%2BCQuC7v88G08fpT2ed%2Bu%2Blrx0ThZc4tI84A6hxItbd%2B23WMyusWzcjJgwAIhrI%2B0eTpyyUf%2BQErTzj1luRPZ7%2FL0LrFeQxNclTUaWYskOsAbopyi0AYouvKJzSy03mbyO0BtFtLmwWocKAgFLMGYxYWf1iFW9%2FZwx7v%2BwdkZpxNGaVj8HGXxNp0MhI9y%2BySoHGCCeCeVcbkchzlQluRP%2BjKIRYdLaU2yWnKcn7vlNtaWci46N0WEJ9DDPmky1VaqJiUdkKDVa0hiAGKyYHqz%2Fk9JbyGJMZ4Eh9I3jTdpIs1UA0Rj9TTWLcJwQYMPDb3r4GOqUBM4sWjqNjasYHnGWKdhQ0HKqzvIesUHBx6714ghCXLS09AX%2FeIHpQI6S0rl2fsgDtJSI9qbeyb68NbTSywYBr5FjnDnt6wlgKC2wRi9nZhwurGqysoWDzXbhbbocWy71dUy6v8zY8BzyJW%2BnYTCvqc1vTUw5NzgwLTO4T1zb1bsA%2FfRRVOQmqIL7Cb%2F6AhYXgMbI0QFrsvIXyNWomnVRpoTCp9X%2Bs&X-Amz-Signature=b47e44c720f90b463771a225305cdbbd6e5a6a2c6324425bc0cb6278e98158ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CJG7QKJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFXnDT6VH0g1Wcyhi3bCvTqsB7OMBBonElOF9NS5FSqwIgHXO9KKzk933GEGt8T9xDZUmHO4vm3%2BxsQg5Dj5z%2FM44q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDN1SRQyX4I7fsZvlLCrcA74dynto9STldJurxQ2Af8FFDxKrCqlEkk6oHPZaQJdyKB908HXWdkR3jqdVqq8NuFdOMWSube7k%2FtBeayYOUJb3uhUdjRf319Mvb%2BEomVe9l6yIDWXRxg6oG33Cgb8Bo9pMh%2F7TCnSLKplZ7eh3pRIY7x5gE6t6b3DreictfjW9QlyCJCdTlNroYYeot4StUUQZnQTuecAIhfeaF3%2FdI67hYj7TSBOCVxfrV%2BfL9dhyJBeAjgmXbazdEmnB%2FiOEyYKigCi1iOLpjc7KwWi4E8Cn4T2inDpY6ok7LH6TuKAeFX1FpajG49Sxn7lqKZGYme%2BCQuC7v88G08fpT2ed%2Bu%2Blrx0ThZc4tI84A6hxItbd%2B23WMyusWzcjJgwAIhrI%2B0eTpyyUf%2BQErTzj1luRPZ7%2FL0LrFeQxNclTUaWYskOsAbopyi0AYouvKJzSy03mbyO0BtFtLmwWocKAgFLMGYxYWf1iFW9%2FZwx7v%2BwdkZpxNGaVj8HGXxNp0MhI9y%2BySoHGCCeCeVcbkchzlQluRP%2BjKIRYdLaU2yWnKcn7vlNtaWci46N0WEJ9DDPmky1VaqJiUdkKDVa0hiAGKyYHqz%2Fk9JbyGJMZ4Eh9I3jTdpIs1UA0Rj9TTWLcJwQYMPDb3r4GOqUBM4sWjqNjasYHnGWKdhQ0HKqzvIesUHBx6714ghCXLS09AX%2FeIHpQI6S0rl2fsgDtJSI9qbeyb68NbTSywYBr5FjnDnt6wlgKC2wRi9nZhwurGqysoWDzXbhbbocWy71dUy6v8zY8BzyJW%2BnYTCvqc1vTUw5NzgwLTO4T1zb1bsA%2FfRRVOQmqIL7Cb%2F6AhYXgMbI0QFrsvIXyNWomnVRpoTCp9X%2Bs&X-Amz-Signature=790c3c9c8333676232ec049379820999b5e2cd45f9645d3ca8e8633a4e211e74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QD6JFH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhw2U2W4h4wPMFm1vRs4w7J8eRDFoNQXu6PG0dU%2Bvd8wIhAKLPxPb9Jipnm3wO5p9b1szRCgYqXp6eF5KiDW2PUFQ0Kv8DCD4QABoMNjM3NDIzMTgzODA1Igyhp81uPv3FnKRwpV4q3AOvR%2FsdRDVJzJxExC2V5eu55ld8pzBMGZnCQayb6heUqTdJvpOvbbkB9BBLkZKRRoxhtxZk6M41sCXBrqeMLVjMDl3wJS3Nr0PrO%2B%2Fqxz9c%2BxistN%2FnAIM0eHffI0s8wNeGM0gI51ngQ%2F%2FR2edtLRl3hgP%2BF0BKzXRmGWovuITETI49jzfQI0jHpkFJZ1%2BKER%2BLMCLAeKGPFcbxDnbciCogy9dJoYxfomjsIapzOlF7oTDwCWOWNcrlbMiRV94AGEDVep6T6AaPkXqxUq7eZlwqu7%2BdwDphv6MDs24GjGBFlWhGBqr5iIBFsOIR6ci0VQG7qVg1%2BgbGZnhw%2BlGc5sto%2FAkT9UJ7gLSaA5d9iGlRYTEOaaumICMTYaw1jrutL1YVU7pqSQ1M%2FxeLXQasD6yTMAgHxcupVHHBzgbJMVQQFnPkd038t8Ole7gV8XVCSUeyUew339Djbc5dokDpGRkTCqksqQHsV4Lbt81hEZZBDzMQRQ7e1%2FM9P3gjzcIVjymtAOm9%2ByYeln%2BVMkeKok3hNSfn%2BEereAyQtZJRF4Xx3WZOd4nTT4hZyQh%2B7AXpIF7ksBvhbRqrHfSFz0U1HmMKZWKgoX1IZsdu4gUFCk%2FHwl9LPrNhNXm95iXMzDDv296%2BBjqkAePEs1ojpJKlR4T3rSi0cj1Ojz3uJM9%2F%2F7ziIezH7PmMCnqs%2BYbKAG%2B0sx%2B8NMt%2FVr83bCCueSXidXhGiCdD%2BazdXvBiWwVvFLzEmjao30K9VLfvG8nSUEmif4LBZ3SUWM6FOfrGJ9aunNgbLchCBhtbzUt0unzf80zoOjCL2%2Fwr1U2h4nWDDABpSNMmVGM4DN59Q53hYHJQPJWUX%2FdFddTYifhX&X-Amz-Signature=67e7b1a9e780d9cf1b7b751e4223ab2416bbd0586bd288f24ee5e8245d8c1ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZWBFL6I%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2jcrE93CjltvIH3biXoGQEDy6lj3XUm4L%2FmOtZ%2FN1%2FwIhAKdSKHFpP%2FY0cPz7K%2FDRCH827XSSYjSHh3tYL7P%2FSonTKv8DCD4QABoMNjM3NDIzMTgzODA1IgwZ%2BOg5r5th2KibmpQq3ANuNx%2B4xVXmMyQ4JhJ0xfoT%2BtkSYEDEKMKgvSMfCKzbZVrbO1aXfXWlf9AUCdMkgb4OR%2BPntbhYLy13JBIPM9X9LbmoBxGFSrw4tdongzW4WPiFjmcq%2BCwGIFP0vrw5qNY9e%2FBKXE0n7qkfLvf0WvSeHPKF8JEDToJJK4VtsRylZK1ow02Hlvo%2BgzyV6ghCea11kAQ5RBN6WaxXfeTyt1WqiugIb8%2FEkWzmky0jreGyqNt1M%2FHSNgSCuiKSE9JURwbZOLapdfzRrHBgpZp1igceHEzIYcdOwpSMW%2BRTqtiyhg%2FiVsyycSK49yBKWvivrNGp1CemDi0Y8Wphpar8dSjPOqkUmh8XMqij2E9icREN3AVCQjKP0oDi8hhymaCtMBw0QUqyqpyykd4ARdCLcv%2FtNKQCz5DP4%2FdVC3nnxlHjrHQIKgwv2jJze0bY9iQG3oWtSQKs%2FlEK1TOeE92TbYEM4nOhAOxyrP4qb0bvQWR0XqoXecvcQzDbxF1cOqZCWBymVK4vvj3ixYlRVUEbi2ChDUoPXkK7KkIBxF3gbv%2FxP%2BajbNlFFxD1PFSAZ9iHt29eaU%2F1Q%2F%2B6LuaHQGqd5W49ygKDto2nYzxOBp%2FHeO6Oe2EW7XZFVKwZMDeCFjDN296%2BBjqkAc%2BK6z3KSQMSSV599hzYIohTalRb5V3gUgLDO8mNgNSzra4Ft6%2FdR0Yy6Rfq%2BP%2FXaiqrgdw008PSxRGZDeW1Ypi2Jo7%2BvTBGrOKl%2F1XbC%2BgWW7500qzXmD4pIGGMtwI1wWYLtrv2V4DESg2kF%2FLy1PwJA5WM9jKMRJgJ3dQweEd8wcv0iXP4eId6xMQUnc1VSknr8jvp%2FYPHYvYiAth%2BTS5JQQYF&X-Amz-Signature=c889f19516b4fc9e120082a03c53b35be83e99743e67334c1fcee19f91917dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CJG7QKJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFXnDT6VH0g1Wcyhi3bCvTqsB7OMBBonElOF9NS5FSqwIgHXO9KKzk933GEGt8T9xDZUmHO4vm3%2BxsQg5Dj5z%2FM44q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDN1SRQyX4I7fsZvlLCrcA74dynto9STldJurxQ2Af8FFDxKrCqlEkk6oHPZaQJdyKB908HXWdkR3jqdVqq8NuFdOMWSube7k%2FtBeayYOUJb3uhUdjRf319Mvb%2BEomVe9l6yIDWXRxg6oG33Cgb8Bo9pMh%2F7TCnSLKplZ7eh3pRIY7x5gE6t6b3DreictfjW9QlyCJCdTlNroYYeot4StUUQZnQTuecAIhfeaF3%2FdI67hYj7TSBOCVxfrV%2BfL9dhyJBeAjgmXbazdEmnB%2FiOEyYKigCi1iOLpjc7KwWi4E8Cn4T2inDpY6ok7LH6TuKAeFX1FpajG49Sxn7lqKZGYme%2BCQuC7v88G08fpT2ed%2Bu%2Blrx0ThZc4tI84A6hxItbd%2B23WMyusWzcjJgwAIhrI%2B0eTpyyUf%2BQErTzj1luRPZ7%2FL0LrFeQxNclTUaWYskOsAbopyi0AYouvKJzSy03mbyO0BtFtLmwWocKAgFLMGYxYWf1iFW9%2FZwx7v%2BwdkZpxNGaVj8HGXxNp0MhI9y%2BySoHGCCeCeVcbkchzlQluRP%2BjKIRYdLaU2yWnKcn7vlNtaWci46N0WEJ9DDPmky1VaqJiUdkKDVa0hiAGKyYHqz%2Fk9JbyGJMZ4Eh9I3jTdpIs1UA0Rj9TTWLcJwQYMPDb3r4GOqUBM4sWjqNjasYHnGWKdhQ0HKqzvIesUHBx6714ghCXLS09AX%2FeIHpQI6S0rl2fsgDtJSI9qbeyb68NbTSywYBr5FjnDnt6wlgKC2wRi9nZhwurGqysoWDzXbhbbocWy71dUy6v8zY8BzyJW%2BnYTCvqc1vTUw5NzgwLTO4T1zb1bsA%2FfRRVOQmqIL7Cb%2F6AhYXgMbI0QFrsvIXyNWomnVRpoTCp9X%2Bs&X-Amz-Signature=a4e77bc957fdd39f229e14896559a0a1f0df6638f81dcd7557f85025fcf31d94&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
