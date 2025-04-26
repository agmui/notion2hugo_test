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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FXMMHL5%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5jOng%2F9Pm8x7kW1E01d%2FJAHr0nbYLw05H9SZTuu%2FGBAiB%2BSCKw6xC2wbdoF1RVOxL9bIOVSFtubNMhNyE7T9Ja1ir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM4Qa0Bcsn%2BV%2FUM67FKtwDaQIQqm55BRY4YJZkZtljeszedUEJZ%2FGinjAFRVRlCssJ%2BIE%2BttNP1Qf%2Bghu9vwiLguLQcnz5KgfPreGqohQ9Q4DZ1FYZeeo3oJIzKOmh0X%2FDG%2BUIbYsvrr7KiuE1itRq0oDCW7gBrbcjDMOIfWKASWAiTwWTUt0N6srbocWnEB1zyxI0G0JVsiHWNVmsOeNJk8OJKw%2B4jK5Yt%2FCxma%2BZckkk5yaZS3b30nYyFgHbTDXMiROrehz34TdMu%2BpFOpxhZjqZ8hg3XiMjPOm%2FBgE7H1EcSlPALQ%2B6fonPx%2BO%2BU7B3a6N2n0kUr4b%2B1HKd6gCgOgofBnb4%2BtekRsI%2BMZqDvRhb7i%2FCdjPZEekjSG6%2Fet461NSAC3WlJ5ckjDksrXOkxbdb2%2B0X0kOOPfuPUeRrAB3jsqH0ermcu3owUCzewJ7YkugHoyBk%2FE%2FYyekDQjhpgKJDHpiWTDyI%2FO7mgGymSZgj%2BvhsM75Bqbwe8wJHP8smxQt80HYF7h%2F%2FVr8ej9NqV6zOptU%2B%2FDZ%2FgCWsFGnZ%2BLWBTFdTAI9CJUso68SgwvBPwlwrc3y%2FcsjrEZ5RjMdXtuAstKMKTIwN9BN8a3EneNZoSGfiQYvKpvtLLsjS5wRXnrhLhfA6l0nyVE8wq7%2B1wAY6pgGDm8v3Bitql2c9A1TQapn5Ufc9EqtrEUrP7zsAqVdp%2BTNBHVNzQwrYwCR5jU1%2BfX76pk0BGimKwpM%2FZu7A%2FcyfWcxGxnFWYnFgZiUlZv8Mvse6BSPTfImd4ZmW%2FQEZlzxQblaDxsFrDVGOpqNH24reP%2BlcpnK64AxQS%2BpMWRowfdzd2MwmUE8UFmmigj23VAGvfOw6d3z5RJoAjKXOxaz9MW4syh0X&X-Amz-Signature=2e87887614f802dc4e7faee19afa85b05c1111dd23392e688e9fe0bc4e1fb660&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FXMMHL5%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5jOng%2F9Pm8x7kW1E01d%2FJAHr0nbYLw05H9SZTuu%2FGBAiB%2BSCKw6xC2wbdoF1RVOxL9bIOVSFtubNMhNyE7T9Ja1ir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM4Qa0Bcsn%2BV%2FUM67FKtwDaQIQqm55BRY4YJZkZtljeszedUEJZ%2FGinjAFRVRlCssJ%2BIE%2BttNP1Qf%2Bghu9vwiLguLQcnz5KgfPreGqohQ9Q4DZ1FYZeeo3oJIzKOmh0X%2FDG%2BUIbYsvrr7KiuE1itRq0oDCW7gBrbcjDMOIfWKASWAiTwWTUt0N6srbocWnEB1zyxI0G0JVsiHWNVmsOeNJk8OJKw%2B4jK5Yt%2FCxma%2BZckkk5yaZS3b30nYyFgHbTDXMiROrehz34TdMu%2BpFOpxhZjqZ8hg3XiMjPOm%2FBgE7H1EcSlPALQ%2B6fonPx%2BO%2BU7B3a6N2n0kUr4b%2B1HKd6gCgOgofBnb4%2BtekRsI%2BMZqDvRhb7i%2FCdjPZEekjSG6%2Fet461NSAC3WlJ5ckjDksrXOkxbdb2%2B0X0kOOPfuPUeRrAB3jsqH0ermcu3owUCzewJ7YkugHoyBk%2FE%2FYyekDQjhpgKJDHpiWTDyI%2FO7mgGymSZgj%2BvhsM75Bqbwe8wJHP8smxQt80HYF7h%2F%2FVr8ej9NqV6zOptU%2B%2FDZ%2FgCWsFGnZ%2BLWBTFdTAI9CJUso68SgwvBPwlwrc3y%2FcsjrEZ5RjMdXtuAstKMKTIwN9BN8a3EneNZoSGfiQYvKpvtLLsjS5wRXnrhLhfA6l0nyVE8wq7%2B1wAY6pgGDm8v3Bitql2c9A1TQapn5Ufc9EqtrEUrP7zsAqVdp%2BTNBHVNzQwrYwCR5jU1%2BfX76pk0BGimKwpM%2FZu7A%2FcyfWcxGxnFWYnFgZiUlZv8Mvse6BSPTfImd4ZmW%2FQEZlzxQblaDxsFrDVGOpqNH24reP%2BlcpnK64AxQS%2BpMWRowfdzd2MwmUE8UFmmigj23VAGvfOw6d3z5RJoAjKXOxaz9MW4syh0X&X-Amz-Signature=9f6a45411560a46f1923f67509ad00561dafbf7905cb6da917f0edf637fae784&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLOO35R%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSAiEMQJV9T58YOnqLfK6oYMLAKDvlgnwYVCcv%2FMrj0wIhAO1oryz%2FGaj91dYXaEWk8p%2BNJUglLxpatWBbr4OnZi%2FQKv8DCFAQABoMNjM3NDIzMTgzODA1Igxr3D2FbEo5MXwSH7Iq3AMClkbaEL7JFs%2BLao%2Ffxzb14uzXF1fCgZSHSf%2BV1khfWW9HNEfsNvT51qA1nW1DASpy09ULoG%2FBEGAcPd%2FCYWRsUSdFpUsYjgZN6jvogCRN6nkWrhwFfIkHj7MKutBJmZhH4gO4KG6GPI21mEA47e6VWzM%2Bwo2awxyx46oXdvL9sQpe%2BybM%2F4NGCDHkKEkfe34a2p4TQ0rdFyaQfCuYFmFpDSgmvHgkZ4wPaZPEjo2Y4IAuMXMNHIPzYLyICNeraMtmK737pagbZfYcwBaXwM%2FtCjGWedBIsMDSs9QARd5JxngFcuY56NKfw651%2BPexM5So4BjUEoYLtuT9SCSxQBpV2TT2Jaklr78OwtLekIF%2FcplLuSXklUnN2Nj1cjYu4iX1VsosGkvZz3dUxQrwr1UCHcRLhQcs1xaoacIIi9X5IhoPgxL0Kerv%2FUIUXisdjlJXQ%2FZi4otR5G8w%2FnDcuduz7wANqy1rt%2BVdKwXOm9TiQcFPjvs0VTpkUDKa3ASpHMuHXs4X1BIbcKDBbc%2FJCc2TlOdKiNQT6udPPQqQhBr87opeUxCCnwUYsP0c7ZFKQRHbPVvRuWJCkNSVY5H%2FdyE4%2Ffz5GVk4kXHf7fDJ4%2B3vk8Q8IjGODW4hByatITCov7XABjqkAUmAcib7n8t504xgcpL2oOwx%2FPOWOMFVMJiXiHD%2F1j6h1zJINrLZpz90Auf5HlVzmo9eQIS1doFaJoqxMTAloUJiekar%2BxmiTrcGiyeh42yhC2%2B3IPp1J2cbiqQvtS3qM4MJY0hMe1Mku%2BG3K0gIDGIrl2v%2FhgHGOBcM%2FXxF%2FMglJUMmNX3CEGKdr%2Fla7KDcQb5GNDkXKaActAUYWDsBd4505HrA&X-Amz-Signature=c3872a9c299382651bf6d17c9e633580d6fd3b7b051b19e3c8d54c22875f6509&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HJ4WZZH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnwpUbAGeKNuvfcxcQ7PVc9gyKRbeq7HN6GWw5b%2B83BAiAQUcflI3buoQxrs6UU5d%2FN3zzRXSyi5vZSmgsKdX2pFSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMejBrABQOLLN7zo%2FbKtwD7RTvbowyrynslNDLXzu0hEBBa7L320xswhHrANeGGcW%2BAgXiGPLOFSIY3EE4Qx08UuELQ8E4DVjkLADnQyoXhIZFkpreM1lbhZ2SjbrIdr5efis8jTtBcEpmGz6%2Ff2p3XissY%2F%2FWkN1dEC5NWBFmISgesrEdDvSv03BAC4%2BalLSqE5dgnb1LSfEDnFcCKVE6RVOtfSVgCsxmSlqW4BIKp%2B%2BlE%2BryJ3%2B%2FW0FSG1Vty6ry214hBZyXXcbcbTdjlXJ9SIcVBl77UZ%2FGM6JozOjRKnbavJ6WGyfL2md0Q%2FbLQTeM4ygn%2BD4v42Boqr0lPhIHM8S4P4KwlAJ4T9KB5wEmPdno9KF7q7TkD20knKyPt0GCIwCp9VMbIMLNWKnZlZkXCJx%2B3bq0XgFwRtolcV1lcLY8SSqiCuNLI6uxG1VNQRJbmBWY8TsfyxYsZ%2BqjApcMUi680jCGiG58gW2l0SBCbL%2BSYPO6yPyCnUG0p5xTo8bPSrFvful3kDf7fBtdTCEH39UK8uSZDaive87W3921%2BJEyLKOoLD%2B0Wi8IxM3cQLMffyzGwciDFewJ5%2FBcgCa57MzttawBmqnXPw9o81r3fuDCmkOrldt2iS%2BWEE9gc1hSGMkpntnhENildL8wzr%2B1wAY6pgFKZggkRCd%2FqMOfN0ur2tK47aFy7AZXqiClfCvg7XXRRxeflIhXnH9xRYIzFlmsoP%2B%2BV%2FH53RO4QQFXVjx5rkV9Ba9LOJMldV3D%2FnEMNAd1X3%2FOtsC5MxZBanHIS%2FyedA4gqZX6dIH26BHkPNjY2R3J3f6tHLRyTQ7vhBS74CD6HFr7GO6yUgvRU9MHBQ0JtWW0FI%2Fqm9YufYs5OfPvuzHOoeyUn7Xv&X-Amz-Signature=768e1ebdfb40eb3e7693beb4d5255bda2b7b6957db85af8ff386e4cbae18399d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FXMMHL5%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5jOng%2F9Pm8x7kW1E01d%2FJAHr0nbYLw05H9SZTuu%2FGBAiB%2BSCKw6xC2wbdoF1RVOxL9bIOVSFtubNMhNyE7T9Ja1ir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM4Qa0Bcsn%2BV%2FUM67FKtwDaQIQqm55BRY4YJZkZtljeszedUEJZ%2FGinjAFRVRlCssJ%2BIE%2BttNP1Qf%2Bghu9vwiLguLQcnz5KgfPreGqohQ9Q4DZ1FYZeeo3oJIzKOmh0X%2FDG%2BUIbYsvrr7KiuE1itRq0oDCW7gBrbcjDMOIfWKASWAiTwWTUt0N6srbocWnEB1zyxI0G0JVsiHWNVmsOeNJk8OJKw%2B4jK5Yt%2FCxma%2BZckkk5yaZS3b30nYyFgHbTDXMiROrehz34TdMu%2BpFOpxhZjqZ8hg3XiMjPOm%2FBgE7H1EcSlPALQ%2B6fonPx%2BO%2BU7B3a6N2n0kUr4b%2B1HKd6gCgOgofBnb4%2BtekRsI%2BMZqDvRhb7i%2FCdjPZEekjSG6%2Fet461NSAC3WlJ5ckjDksrXOkxbdb2%2B0X0kOOPfuPUeRrAB3jsqH0ermcu3owUCzewJ7YkugHoyBk%2FE%2FYyekDQjhpgKJDHpiWTDyI%2FO7mgGymSZgj%2BvhsM75Bqbwe8wJHP8smxQt80HYF7h%2F%2FVr8ej9NqV6zOptU%2B%2FDZ%2FgCWsFGnZ%2BLWBTFdTAI9CJUso68SgwvBPwlwrc3y%2FcsjrEZ5RjMdXtuAstKMKTIwN9BN8a3EneNZoSGfiQYvKpvtLLsjS5wRXnrhLhfA6l0nyVE8wq7%2B1wAY6pgGDm8v3Bitql2c9A1TQapn5Ufc9EqtrEUrP7zsAqVdp%2BTNBHVNzQwrYwCR5jU1%2BfX76pk0BGimKwpM%2FZu7A%2FcyfWcxGxnFWYnFgZiUlZv8Mvse6BSPTfImd4ZmW%2FQEZlzxQblaDxsFrDVGOpqNH24reP%2BlcpnK64AxQS%2BpMWRowfdzd2MwmUE8UFmmigj23VAGvfOw6d3z5RJoAjKXOxaz9MW4syh0X&X-Amz-Signature=1322cf4580108d4eb7d8de89c5d05093a8d6c9d0f6f8601134501993d9e23054&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
