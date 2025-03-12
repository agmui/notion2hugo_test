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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RB7NYZQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCzcVeRcL3w6xADeO%2B6fOYfioRYOzlDbBALyl%2BkThVI2AIhAKYTq983kcnLJZtArouTbN0mod4vVAdg26UqASO4xXm5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHhiXYXMkXWI6j8bAq3AMOzySclCGZ6unTNmLZlAAB%2BtDjWQmGcKw0tV3fO0Nm9cVuIFzivSzb3%2BXGm0%2FYHiMkDZE2wUQaqKI8fUf1Sc22QlOr8twnvr1dkIFT01eqJuLKBpIaqYLbUIrqyDa%2FlSZSuBXmnBQzOmlk4Pe2fj1ZlP%2BD05Jv3u0J4P4OvgXxVlT7gIb4nuWOVPPSm629zasBWp8JR7kD5q9AzLYZlLRK47dB5p%2BBBET%2FIUYKkOpMTFFVa4UvCOcKK3YwXqrgZ5WCJWrjlOQ%2FtKHcOdioYEW4DjNumVG7bFWh5HUNU8%2F3sa05fd97TktHdYbHU8gjTpWM9lto2zwzZRAa3OZDLcgj8bXu13fIcylURqh%2FUs2ShcrrNAkAoGmGF%2FglrN6p5kb6cfYmF9luMcLQ4VrwlZydvuWI1pgy95muYmZCwQk21PpZhGFXIA%2B%2FDAjy0zWQJ19wYAeDSK7Xj7cpo8Mla4bMic9LUmBFWOx9M3sreiGhwDLpljUq2CTl9pZ1biizNalSp%2Ftrx1kGQoTgeUg7vIrCkcWJnCXGhjWn8gVxRRUv5sp0m1REVo8rrta%2FC8qF5m0KkeOMUM4tVNW%2Bz2c%2FRzVK%2BP7oTXS%2BhTzovmjP%2FXq3NqWt42KeUWms%2BQH0mDDxm8W%2BBjqkAUQvMN%2BDLTRDzWUYWaPVFn8x6zEX9%2FN5DHv2VVmkIzc6oyNwfKm83JBT6ZUDawm1nlw7TPoO5rzpsXztyGJvT0Gws28dMRF5yMBcnYZJclHWcCdHbsE%2BYkH%2FqWPOE6zNx1Ym%2FMjmZQNouZd5xSljwOo5ky2a8cvOuXGYf%2FPPvd7fD9Vm6Df4W6ctbPafChWFS2rOu9NmQ3VpfU1stO264mZve8Du&X-Amz-Signature=2fb280bfc1797d059139cad002bc457575198fccceded7f55e888550ad861674&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RB7NYZQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCzcVeRcL3w6xADeO%2B6fOYfioRYOzlDbBALyl%2BkThVI2AIhAKYTq983kcnLJZtArouTbN0mod4vVAdg26UqASO4xXm5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHhiXYXMkXWI6j8bAq3AMOzySclCGZ6unTNmLZlAAB%2BtDjWQmGcKw0tV3fO0Nm9cVuIFzivSzb3%2BXGm0%2FYHiMkDZE2wUQaqKI8fUf1Sc22QlOr8twnvr1dkIFT01eqJuLKBpIaqYLbUIrqyDa%2FlSZSuBXmnBQzOmlk4Pe2fj1ZlP%2BD05Jv3u0J4P4OvgXxVlT7gIb4nuWOVPPSm629zasBWp8JR7kD5q9AzLYZlLRK47dB5p%2BBBET%2FIUYKkOpMTFFVa4UvCOcKK3YwXqrgZ5WCJWrjlOQ%2FtKHcOdioYEW4DjNumVG7bFWh5HUNU8%2F3sa05fd97TktHdYbHU8gjTpWM9lto2zwzZRAa3OZDLcgj8bXu13fIcylURqh%2FUs2ShcrrNAkAoGmGF%2FglrN6p5kb6cfYmF9luMcLQ4VrwlZydvuWI1pgy95muYmZCwQk21PpZhGFXIA%2B%2FDAjy0zWQJ19wYAeDSK7Xj7cpo8Mla4bMic9LUmBFWOx9M3sreiGhwDLpljUq2CTl9pZ1biizNalSp%2Ftrx1kGQoTgeUg7vIrCkcWJnCXGhjWn8gVxRRUv5sp0m1REVo8rrta%2FC8qF5m0KkeOMUM4tVNW%2Bz2c%2FRzVK%2BP7oTXS%2BhTzovmjP%2FXq3NqWt42KeUWms%2BQH0mDDxm8W%2BBjqkAUQvMN%2BDLTRDzWUYWaPVFn8x6zEX9%2FN5DHv2VVmkIzc6oyNwfKm83JBT6ZUDawm1nlw7TPoO5rzpsXztyGJvT0Gws28dMRF5yMBcnYZJclHWcCdHbsE%2BYkH%2FqWPOE6zNx1Ym%2FMjmZQNouZd5xSljwOo5ky2a8cvOuXGYf%2FPPvd7fD9Vm6Df4W6ctbPafChWFS2rOu9NmQ3VpfU1stO264mZve8Du&X-Amz-Signature=1d7bec8092e8d856a24abe0bcc1f54f8dd6c7eef906de7f4d48ba51ecf78822c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372BKM3P%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCRGmKrWDHCL5WcTb06MDWLUxbVLODlRGYOqoNUtSJrqQIgR2CZ77%2BhuVMivXg1MpKujZTXoBusmmiKXfdchHnK6EgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsJIJ2mY2oY8HwqUyrcA8PKhqtPPeqHejgvQF5dECKelWPToaDanTGQNhQasZJ0LB2OlodQeysWLk2vDmflQDeUsX9zPQiin%2FAzBkiEaB%2FYniTcERnLYVS%2BopGL0Lp5ay26FGTjOfy7qS3obJZA7HDucW%2B0Q6o9UqG1TyXZK8Oirt4ec2cl3buWj2hRAoqc5P7vHcNG3p33L2ScNkX4wAchRFNU1qD8fIRsnlf585ytBcbhtbSh%2B5kIFGKsYQ%2FyBXOO8i6qeJRNgNj%2FXj0ntyTDXx4fCyr47x%2B0oFJuIdXGDnmxrjfdCVQ3n7PLVNzaYf9zVo39sgq%2By2atC6OMFB1cHjfTzWNmmV%2FW6dznWHL9yYjlt%2BcyybwTlNbx1fojlJukeyCGcR0e8ZaTyBVApi28dm57wegaIj96R%2F9mfv76ibyUqob9R%2BmIGcpksvtZ5wF8LUHCJLhdXzOwtzlskbBcz1tmVbkr5tp0mTRRrQDpp2F3m1DQz5GOoy2MVWI7Zv3YNwCZ80QuGUYbcGXafobzmumKbalHvZKoIwFpCeQC3Ub4mFx6kjPvfHIEobCLrc0iG35QrI6lzx%2BUk1i9J7wpYJhq%2Fo%2FWxZPCJi0McSZN%2F%2F9c8NwwpSatNZN1dq8ri6Z7BYUGbys0uYa4MMibxb4GOqUBGY7B79MhGxQSEIt6kDiF45eH89FLepT2HAVocOzD4Lskkrxy61FCTgJ0p5QKj2oJkutbbwJX39ziT1KGVJhXNxqM76AM20s5ycaFsr3AtRmy%2FYZfvpZkBttJjfgl4iZBQ3PFPMWxyJGSywzwUtTAz8FAQHO%2BnCioD1zH1N2JBUUPnIZ0SO9AfIblirj7hFSthhzdoQzsULz%2BK7V2kg3M5f8FidEk&X-Amz-Signature=23c0cc1e14715511ddce08375b785fb1189fa3683d286591c711fbfb077f8f10&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGT2HCHN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBJhYfts4oYpkzazrl%2FIGWaE0GIYZz8oB7DnjvtY9jLlAiEA3q%2B%2F5H0ffxd1CudTpEsieTfpe5l2U6RTuFbP1MZcNisqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4pOfx3OU0didBHTCrcAwkVCENTCqS1g%2FX8mk%2FeEmySy2AA6NbfhZNeBkRra57oxjBBzTQN6KxbEynkIzIc8detgP4hzJVd7nFSAw2AZ6gsIdK6iBb5dXATLDw1BIfmd4FRUASODZ%2FvtWX5lFcFyHoR7Qtvzeg8Ni5HZ5O0XXwP%2B%2B1j7%2BPXFCbiE3apPt0X4q%2BQuqW2nxT8pbrMV58ysclG7ZkwHCy%2Bqc8rKoNY%2Bd%2BAhQu3AhcyijLBQwWxuA%2BqLNBouy3H%2Fw7kdPtkUkd9DlnqG9BjIO08izsRRbZBqTjiktWWyjOzxw%2F%2Fo2YNNSM2gF0oV2pki6YQjep8TAgUk%2BQRHmnoptZdxbeH81wCRvjUqmsknPqXimy4SUPPPMT%2Ff9smNHePxe4FLM6WCkaNyknfOxhvRdtJPHKzZ5N5898G%2BJ%2FWeJwA6yocnhlCjRDSavn1b%2BaJDULKVMKqlW8PL%2FemcvxMgIpxQawvICN4QpX%2FrAPu9FN1JDBTmRpeq2qX7rMsTNTz5dbKhRUUrGDuH3AbPbTBWG7JlKdPyNQ9a6NrTPJkaD17eE6SUrgQG4%2BJfiPuEnV8VorF%2BNjWUQK0hHS0qmDpB1MnR8spSjInmaw9JTLJkl%2BrSvN6MYDnBWkfL3ALatKajIP2lFSSMKqcxb4GOqUBSo2oFZBG9dy82JtjQqLRv2l%2BHFefJEpBfMKxkDg%2ByS%2FM9xZF%2BjSpNk3IWLBtRBn1ee8duvrmBb%2FYcqwQ5qanc5%2FPzK6YFZgxJs5uyWcSUVQmJE3qZqohdlJMkQ75BfKQnLPqzh3a0zle328A88Ut7novwNrjFOgWDVCX2tWP9ontWJrWgbfzCgtSpvYbzJDIWuT7XER8gbl3DhDxTlajNeAuE9BX&X-Amz-Signature=4cb29a596a3dc7da5977c773a0a71bea56f97940f9af95ff1061942b4cc648e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RB7NYZQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCzcVeRcL3w6xADeO%2B6fOYfioRYOzlDbBALyl%2BkThVI2AIhAKYTq983kcnLJZtArouTbN0mod4vVAdg26UqASO4xXm5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHhiXYXMkXWI6j8bAq3AMOzySclCGZ6unTNmLZlAAB%2BtDjWQmGcKw0tV3fO0Nm9cVuIFzivSzb3%2BXGm0%2FYHiMkDZE2wUQaqKI8fUf1Sc22QlOr8twnvr1dkIFT01eqJuLKBpIaqYLbUIrqyDa%2FlSZSuBXmnBQzOmlk4Pe2fj1ZlP%2BD05Jv3u0J4P4OvgXxVlT7gIb4nuWOVPPSm629zasBWp8JR7kD5q9AzLYZlLRK47dB5p%2BBBET%2FIUYKkOpMTFFVa4UvCOcKK3YwXqrgZ5WCJWrjlOQ%2FtKHcOdioYEW4DjNumVG7bFWh5HUNU8%2F3sa05fd97TktHdYbHU8gjTpWM9lto2zwzZRAa3OZDLcgj8bXu13fIcylURqh%2FUs2ShcrrNAkAoGmGF%2FglrN6p5kb6cfYmF9luMcLQ4VrwlZydvuWI1pgy95muYmZCwQk21PpZhGFXIA%2B%2FDAjy0zWQJ19wYAeDSK7Xj7cpo8Mla4bMic9LUmBFWOx9M3sreiGhwDLpljUq2CTl9pZ1biizNalSp%2Ftrx1kGQoTgeUg7vIrCkcWJnCXGhjWn8gVxRRUv5sp0m1REVo8rrta%2FC8qF5m0KkeOMUM4tVNW%2Bz2c%2FRzVK%2BP7oTXS%2BhTzovmjP%2FXq3NqWt42KeUWms%2BQH0mDDxm8W%2BBjqkAUQvMN%2BDLTRDzWUYWaPVFn8x6zEX9%2FN5DHv2VVmkIzc6oyNwfKm83JBT6ZUDawm1nlw7TPoO5rzpsXztyGJvT0Gws28dMRF5yMBcnYZJclHWcCdHbsE%2BYkH%2FqWPOE6zNx1Ym%2FMjmZQNouZd5xSljwOo5ky2a8cvOuXGYf%2FPPvd7fD9Vm6Df4W6ctbPafChWFS2rOu9NmQ3VpfU1stO264mZve8Du&X-Amz-Signature=92daeef2d287208e4cb462a84318aea20d4588bc3798c91b210108ad85bf5e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
