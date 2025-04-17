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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYUPSAZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSPAuRMr3trCwm%2FKvfWrn8UQEZuFt%2BnUdBMAZ2Q0AK9AIhAIKhEtKVRNkHhAq18ohFlMyllLPf4xNy3%2FvoZG44nil%2BKv8DCFMQABoMNjM3NDIzMTgzODA1IgzEhJuZV%2BL7xes9v4oq3AN6LdaQgFg2j5faJs3bEC66QpVeDoiuRFqouKq%2FHi8lbahUuE5dokIEAsHmki8thzu4PimRLVXgiR3ZsIySojnIpdkDUV%2B9%2BR6jMo%2BJuMYbTHfiVZZ5aPIt0mKzesuy1W4X5K0p78PDfLoyd8%2Fvbt55QlHdfQu%2FvuPCa2Aovry8%2F8VahOElnVrfkxBxMUOTmc2iGxs4SMCrm91jdRVHxMK8sDAhROrujpY2CtVz1%2FDjgxBr%2BS5wVxk0Fcq86RYdjxlo0DTJLs3nJQn5XnER0FOdBpPxgA6tuO7%2BuZ6c59443KHoZ9uyDaGhDa41wYzHu%2BZ8fW89EBDJN4xOHfcDQCATcBZdIbsAsYTENT7WgnNYut73VnpEIXM6vmGyYBvaDMNfXTWnanVyaeDGgsnrDheXIUQzeCOO12dkiiPwHK9GwrQJMwcxAVlnIgdIxzalfFVFG4tHUnzsDnFp73%2BSn%2B7DgoZrhJtMfvwl6ST4EF7Mn3gqR5SmxdIvjV5U3aGQRX8extyQv0dwf9vvQgQncKqYHyz6bdGRWyRc9h0OpzSnF6DVhc5uDQ7DmF4h0V%2BqXnzDjjXCzJrUiY7%2BYbVRRDzL7%2BuMX4C46u9iHAx4WMOOLxKN45Ws9frzeHb7sDCYx4HABjqkATtRojwV1ho%2BGD454oCnysNSGcY6D7o7nUOgPDSMp9dlnfBrDVNgL6bJ9uQUvZ4RjaMw1%2BpuuQoJyHK02JuPEdiKL%2Fiw3i3rj3Ahvrg0F6699V53sv2s9sodzpgrUqj3Z%2F9Bud116Y4B%2Bg3NEtHf%2B7ohUkaRkRkh9JsC4jGDefUHVTQFTI8F1d%2BcrvGFq8wkrL6jO127yu%2FQh3s8kRDAHtoosKst&X-Amz-Signature=5f95d2b1f06e3b56f4f00a390884923ba3f3a234178fbe7b42ad3a3109cf81a0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYUPSAZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSPAuRMr3trCwm%2FKvfWrn8UQEZuFt%2BnUdBMAZ2Q0AK9AIhAIKhEtKVRNkHhAq18ohFlMyllLPf4xNy3%2FvoZG44nil%2BKv8DCFMQABoMNjM3NDIzMTgzODA1IgzEhJuZV%2BL7xes9v4oq3AN6LdaQgFg2j5faJs3bEC66QpVeDoiuRFqouKq%2FHi8lbahUuE5dokIEAsHmki8thzu4PimRLVXgiR3ZsIySojnIpdkDUV%2B9%2BR6jMo%2BJuMYbTHfiVZZ5aPIt0mKzesuy1W4X5K0p78PDfLoyd8%2Fvbt55QlHdfQu%2FvuPCa2Aovry8%2F8VahOElnVrfkxBxMUOTmc2iGxs4SMCrm91jdRVHxMK8sDAhROrujpY2CtVz1%2FDjgxBr%2BS5wVxk0Fcq86RYdjxlo0DTJLs3nJQn5XnER0FOdBpPxgA6tuO7%2BuZ6c59443KHoZ9uyDaGhDa41wYzHu%2BZ8fW89EBDJN4xOHfcDQCATcBZdIbsAsYTENT7WgnNYut73VnpEIXM6vmGyYBvaDMNfXTWnanVyaeDGgsnrDheXIUQzeCOO12dkiiPwHK9GwrQJMwcxAVlnIgdIxzalfFVFG4tHUnzsDnFp73%2BSn%2B7DgoZrhJtMfvwl6ST4EF7Mn3gqR5SmxdIvjV5U3aGQRX8extyQv0dwf9vvQgQncKqYHyz6bdGRWyRc9h0OpzSnF6DVhc5uDQ7DmF4h0V%2BqXnzDjjXCzJrUiY7%2BYbVRRDzL7%2BuMX4C46u9iHAx4WMOOLxKN45Ws9frzeHb7sDCYx4HABjqkATtRojwV1ho%2BGD454oCnysNSGcY6D7o7nUOgPDSMp9dlnfBrDVNgL6bJ9uQUvZ4RjaMw1%2BpuuQoJyHK02JuPEdiKL%2Fiw3i3rj3Ahvrg0F6699V53sv2s9sodzpgrUqj3Z%2F9Bud116Y4B%2Bg3NEtHf%2B7ohUkaRkRkh9JsC4jGDefUHVTQFTI8F1d%2BcrvGFq8wkrL6jO127yu%2FQh3s8kRDAHtoosKst&X-Amz-Signature=b7ac7d1af5d4a20252998de2ae65af97c58502966b303ddeb05ea6093224b4ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXIOL2EV%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCvbXjh5b0%2FtHntMX%2F8VQRiEU9ngUDkVaze7rA1Ye0gwIhAPXntJCOCgprXYvuWf4jO9AwpdHMTFfDPLlFBU%2Fca0inKv8DCFMQABoMNjM3NDIzMTgzODA1IgzBpdCUjZNfULVYjpQq3APrZGkf%2BEOD7dFBM1l8AfCCYNX27yqMZ2xvwaa6OQRTKaOpjII9XG5003mWasL0pbNv41cowru%2B8vT5CTrq%2FdqPadU87CEuADj58lYV6yJX0Znpqc4e6C%2FdfXco9wa2chxcpS66GHIJSjtVtr6WozTIgORO1XAhmghlJw3vxE3Tb%2F9WLCN1hRR7P%2FXRM4sjzsNcCz%2FNbxkCP0Hv%2FecqM5Hi%2FOF9Zkwpk629ysYyxSzjVICmk1PVN3W47rWvmRf2wBOEcNE%2FwmzTl1h99dwEqg0faiIVkBajG6s4Pzm58dyOPWFtvtlK0btC0RPJD6xva3y%2F%2FVTnNSttdT%2Bun23URUr%2BRizQ47EbA1dxF428fgZESC8pVAdkS8f6gD8URywc8kN29Fsl0XUM9DD%2Fp0ZSKwLBf0j22MZ1NmXL6PrvAeAgTIo9raW6g8kZ5Najd457aJfH11KiC2lDXd446opNQZCAj5H2jEbYh5W2XTHl9%2FcqGw0tyPhXM6wNAX25znvjZwcnng%2BqT%2F5TQgGAfHwx%2F2m0e1rqQo9oz3DSB1FhLLzMrT1ACsPiOU4paBrLhuMXOI%2FuoohMpKz71wrQF%2FaPtZRqnipCLLok%2BHPVkp3rVWU65rCBpfWU4Q4dllbBcjDQxoHABjqkAYCCW48o%2BAj0fOBzGKtcfBlBTbJobHyiEN195RacxTQmnjN4O1Ub%2FoRQhv5X8xwYpJk%2B2LKI2Fui1hnrIi2fvEmdybaQ%2FFf0q8ciqFwL1mVA0sv%2BDu8AH3zz8F%2FFKkqLTLVZUCInJk61SVxgGGiI%2BlzhstyG8wfiAm75xcHCQLpTyd56cAPGUAsZ7DcUQe001GHMPcj7%2BZ%2FCJW6UpIUTkrknEfLw&X-Amz-Signature=05f8e51f0ee5b5ac2842b3d88f7669bdda8a8168970104d3bfee4c6e68ac7062&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N73RAIY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL%2BFINIa2GOim0xCb92eJiNPVcxUupA3VQAEg1fhc07gIhALxV%2B%2B8cVu8XEXw%2BMJyIGhss3fmH9cl9cFnYlGbI8%2FEOKv8DCFMQABoMNjM3NDIzMTgzODA1Igyc1Q3iiU%2BIPrJrXJUq3AN3A7I2KZK7i6oaLCxYyRlHWI16wfWz4DvopkJ5PyfDdLnR6vUTUn4Bvr1t70UDfJVFXC5j0Tw97miDazMG13cDzyqgC7%2FvkFRYEnKksrjkd68vWE8uGqNGr%2FilzvLbhjmED1EaB7Q3e3FpOPbMm9sE2tZlMz7XpV5s2tF2y8LDHJ%2FnLzMZQeqiKfSuCR36qK%2FJJszf3s9kT1N48rRWHuWJC9G3wr%2F3s%2FAB8G9M%2FZUgu%2BxgOw%2FftCJpAtZfUAaZwSMWixaWgic89fX%2BsqtHuoEcZphszOAxkRyvCKu%2FsCDuuGoMA2qTiDGVxrwSXlw%2FYIWlOZqt7HV8iGMlYzeBATjmFbtleEQjvkPvRrZp8lTTN%2Bgi34j8TbBcZhtD4KCoowVFbht54inQuTJHA8hbNDbFFxbzNQUwSYsO90PTQvW12aIszl2h4xLxhOZo53IahDVNXOsRt7e%2BL5rHBVJdULJuuGZHBM%2BvnIOzdzLGD8fTIzfDKrk%2BVwrqW%2Bd5seJVN61upNfIEyBO5rlnqiKxxQy8KBjZFCi%2FKxrcCyU8NA940Ts%2B31Hc4AhuJU5AgP7UHJyvrduWiFsCoPmagwjwdPK2X7GHDDE2W7j82evAos9X7yysGAMzDiRd%2FTte%2BzCZx4HABjqkAUMXsE2ihce94U6dxcDVMh6f2I9uNzQbfqE5gt0aUxeZGbPAUNADlCCtEW4Wys%2Fachsv3lo7l2ZyzuXID9hBQrXW05biYZcL5Ei%2FEKcJ2Yx0RBSjB8SKCUHUAuDRUJoVdmm8Uyh7dIRx3irLeN5RuLo0AHO4CRrvlPkwdsMCQto6RvEGEv376gcNKXeGNTYTK9qV7pAc8z0cCel9DOUeR6hSE%2B5J&X-Amz-Signature=3d6d58d67cb7bafb10fe8ea28a9f7010715cfe385144a2dfc1120d5a2b483556&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKYUPSAZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSPAuRMr3trCwm%2FKvfWrn8UQEZuFt%2BnUdBMAZ2Q0AK9AIhAIKhEtKVRNkHhAq18ohFlMyllLPf4xNy3%2FvoZG44nil%2BKv8DCFMQABoMNjM3NDIzMTgzODA1IgzEhJuZV%2BL7xes9v4oq3AN6LdaQgFg2j5faJs3bEC66QpVeDoiuRFqouKq%2FHi8lbahUuE5dokIEAsHmki8thzu4PimRLVXgiR3ZsIySojnIpdkDUV%2B9%2BR6jMo%2BJuMYbTHfiVZZ5aPIt0mKzesuy1W4X5K0p78PDfLoyd8%2Fvbt55QlHdfQu%2FvuPCa2Aovry8%2F8VahOElnVrfkxBxMUOTmc2iGxs4SMCrm91jdRVHxMK8sDAhROrujpY2CtVz1%2FDjgxBr%2BS5wVxk0Fcq86RYdjxlo0DTJLs3nJQn5XnER0FOdBpPxgA6tuO7%2BuZ6c59443KHoZ9uyDaGhDa41wYzHu%2BZ8fW89EBDJN4xOHfcDQCATcBZdIbsAsYTENT7WgnNYut73VnpEIXM6vmGyYBvaDMNfXTWnanVyaeDGgsnrDheXIUQzeCOO12dkiiPwHK9GwrQJMwcxAVlnIgdIxzalfFVFG4tHUnzsDnFp73%2BSn%2B7DgoZrhJtMfvwl6ST4EF7Mn3gqR5SmxdIvjV5U3aGQRX8extyQv0dwf9vvQgQncKqYHyz6bdGRWyRc9h0OpzSnF6DVhc5uDQ7DmF4h0V%2BqXnzDjjXCzJrUiY7%2BYbVRRDzL7%2BuMX4C46u9iHAx4WMOOLxKN45Ws9frzeHb7sDCYx4HABjqkATtRojwV1ho%2BGD454oCnysNSGcY6D7o7nUOgPDSMp9dlnfBrDVNgL6bJ9uQUvZ4RjaMw1%2BpuuQoJyHK02JuPEdiKL%2Fiw3i3rj3Ahvrg0F6699V53sv2s9sodzpgrUqj3Z%2F9Bud116Y4B%2Bg3NEtHf%2B7ohUkaRkRkh9JsC4jGDefUHVTQFTI8F1d%2BcrvGFq8wkrL6jO127yu%2FQh3s8kRDAHtoosKst&X-Amz-Signature=2966a79ab51c3e2d9de589aca6c35c4a9270585333deef1328b86da4fac40a6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
