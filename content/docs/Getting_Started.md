---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PLOTJI4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCduXxvF8IkTYtmwWQqJo1BYjU2Nmygrv4QdgbSgwrQQwIhAJ%2FyMHAAV7W3ji9jFS8qRp%2B58wAHTI066dhzuAtylWZLKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdVq7%2BtmO6aUSg5egq3AM4Lr9u6OJBynkM84Jjen03rtxSh2j1BOtcoKoFWrxleBphN3RXtKGHeIc%2BiqoWzDg5%2Fn%2BLXtfEzOyWgUCNnambgRZRpW9mtU%2BQ0MhLU0enfE0CMMyh4hL7w6Ef1nTleV%2FfnMJUthtfIX%2F9xUEJNZBIYBkFjxALPS404GW6w6F7oRMC2H5UX1zQsWKj754Eqr9NPjePQP8xgrBtiC8p24dpMtTfugRBK1CLlFCTGF%2BKcxsI5fdlbSIB2%2FSGt0%2BC0E3Yv2pF6w6cKsCrguITZ2euDp88p4J0cPgPwm4oob6KR4q54qNXLst%2BR7Q%2B8bpnpYWmrHSE7aoltan%2FQak7Ty19YkCICzDWVrpxyWzeoOCff2Vr1HmFi4U%2F9CFJUrVYeSiVKgBriKDaIfQ0TR4i9fzwthtj9sMl1tBzHkv66giYHxsxKV75krpCm4%2B%2F7%2FfiZ8xubbso3DuqVhjhSPp0lfGTCibpm8%2B5Mww%2B2vxuP9aqj5s6AlGy%2F7TlS%2F5gRnPKixR9Yv3BcSG4oV6OG33bjCFt21woCVNUWWkFP5JT3zhmabjOAoSKzDWMAnCjOdhVN46ogvnvqoKOBfcY4hWehHfOfN9JcNEaAco%2BYEkZ7kzG7RwrEXc0kfGfpQjk6DDCn73GBjqkAUAY2leiZYeuvCRI2oAeG5lTeqlZjmfrYWzjDZA7s7SQddsDpdhdbhrvXr3XMaZYmwileMM4%2Bux6a%2BDFzPb2DPqofWaf2IoSXq7gXWnD1%2FJrPz%2B6pOetQ4l9FPQHV%2B5nhqU%2Fu%2Fdx6LHsJQD%2BR%2B4nDoJSDPf%2FkIE4LQxBWeoFRMrGiKf3RBnmq%2BPztVd788hrnYnAhYCSU8nS4OuGhQsnI%2FKUDgMV&X-Amz-Signature=f475fd19f730f9c8d4a84e861be1a64d7147f2377ede7239ccd6472115574da7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PLOTJI4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCduXxvF8IkTYtmwWQqJo1BYjU2Nmygrv4QdgbSgwrQQwIhAJ%2FyMHAAV7W3ji9jFS8qRp%2B58wAHTI066dhzuAtylWZLKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdVq7%2BtmO6aUSg5egq3AM4Lr9u6OJBynkM84Jjen03rtxSh2j1BOtcoKoFWrxleBphN3RXtKGHeIc%2BiqoWzDg5%2Fn%2BLXtfEzOyWgUCNnambgRZRpW9mtU%2BQ0MhLU0enfE0CMMyh4hL7w6Ef1nTleV%2FfnMJUthtfIX%2F9xUEJNZBIYBkFjxALPS404GW6w6F7oRMC2H5UX1zQsWKj754Eqr9NPjePQP8xgrBtiC8p24dpMtTfugRBK1CLlFCTGF%2BKcxsI5fdlbSIB2%2FSGt0%2BC0E3Yv2pF6w6cKsCrguITZ2euDp88p4J0cPgPwm4oob6KR4q54qNXLst%2BR7Q%2B8bpnpYWmrHSE7aoltan%2FQak7Ty19YkCICzDWVrpxyWzeoOCff2Vr1HmFi4U%2F9CFJUrVYeSiVKgBriKDaIfQ0TR4i9fzwthtj9sMl1tBzHkv66giYHxsxKV75krpCm4%2B%2F7%2FfiZ8xubbso3DuqVhjhSPp0lfGTCibpm8%2B5Mww%2B2vxuP9aqj5s6AlGy%2F7TlS%2F5gRnPKixR9Yv3BcSG4oV6OG33bjCFt21woCVNUWWkFP5JT3zhmabjOAoSKzDWMAnCjOdhVN46ogvnvqoKOBfcY4hWehHfOfN9JcNEaAco%2BYEkZ7kzG7RwrEXc0kfGfpQjk6DDCn73GBjqkAUAY2leiZYeuvCRI2oAeG5lTeqlZjmfrYWzjDZA7s7SQddsDpdhdbhrvXr3XMaZYmwileMM4%2Bux6a%2BDFzPb2DPqofWaf2IoSXq7gXWnD1%2FJrPz%2B6pOetQ4l9FPQHV%2B5nhqU%2Fu%2Fdx6LHsJQD%2BR%2B4nDoJSDPf%2FkIE4LQxBWeoFRMrGiKf3RBnmq%2BPztVd788hrnYnAhYCSU8nS4OuGhQsnI%2FKUDgMV&X-Amz-Signature=44cbf4bd13d6db9f2ca2e0654ce986a8419f284b84040db55603ce6c4ad78331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PLOTJI4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCduXxvF8IkTYtmwWQqJo1BYjU2Nmygrv4QdgbSgwrQQwIhAJ%2FyMHAAV7W3ji9jFS8qRp%2B58wAHTI066dhzuAtylWZLKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdVq7%2BtmO6aUSg5egq3AM4Lr9u6OJBynkM84Jjen03rtxSh2j1BOtcoKoFWrxleBphN3RXtKGHeIc%2BiqoWzDg5%2Fn%2BLXtfEzOyWgUCNnambgRZRpW9mtU%2BQ0MhLU0enfE0CMMyh4hL7w6Ef1nTleV%2FfnMJUthtfIX%2F9xUEJNZBIYBkFjxALPS404GW6w6F7oRMC2H5UX1zQsWKj754Eqr9NPjePQP8xgrBtiC8p24dpMtTfugRBK1CLlFCTGF%2BKcxsI5fdlbSIB2%2FSGt0%2BC0E3Yv2pF6w6cKsCrguITZ2euDp88p4J0cPgPwm4oob6KR4q54qNXLst%2BR7Q%2B8bpnpYWmrHSE7aoltan%2FQak7Ty19YkCICzDWVrpxyWzeoOCff2Vr1HmFi4U%2F9CFJUrVYeSiVKgBriKDaIfQ0TR4i9fzwthtj9sMl1tBzHkv66giYHxsxKV75krpCm4%2B%2F7%2FfiZ8xubbso3DuqVhjhSPp0lfGTCibpm8%2B5Mww%2B2vxuP9aqj5s6AlGy%2F7TlS%2F5gRnPKixR9Yv3BcSG4oV6OG33bjCFt21woCVNUWWkFP5JT3zhmabjOAoSKzDWMAnCjOdhVN46ogvnvqoKOBfcY4hWehHfOfN9JcNEaAco%2BYEkZ7kzG7RwrEXc0kfGfpQjk6DDCn73GBjqkAUAY2leiZYeuvCRI2oAeG5lTeqlZjmfrYWzjDZA7s7SQddsDpdhdbhrvXr3XMaZYmwileMM4%2Bux6a%2BDFzPb2DPqofWaf2IoSXq7gXWnD1%2FJrPz%2B6pOetQ4l9FPQHV%2B5nhqU%2Fu%2Fdx6LHsJQD%2BR%2B4nDoJSDPf%2FkIE4LQxBWeoFRMrGiKf3RBnmq%2BPztVd788hrnYnAhYCSU8nS4OuGhQsnI%2FKUDgMV&X-Amz-Signature=bbefdb69ff9061a3fb2c58c3c1969b8e71b25f8f4611681e11bea4b49a6e4838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQO4ORGR%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3fUYqgeftJl5x6Leg0x1zvRs6FxTm%2BfcECvuy2L0XZAIga0IOwdyK1bAghIglnSOhB69%2FrLsv%2Bt36lM6FpdZ4hQ8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAMMlaFO1XzpRO86SrcA%2BROwFPGtV1O5AAg4dF9J3EM9PKqcrGhqHf04a48oHUJq8d7uizQrIxHuLTUxJf3hbdfNDdyTx6vABqChEB4jEGoinMNWm2zAkwdKyOAhOuK8pz2h0IwjicV1U5P6n9MFWPWkAq0IUO8V9SfW1yhFFWf%2B%2BkXYhkP3geDOQF%2Bb5bU4jjnKboxCwUMxcIRkc3Qyx6wivyR0735CQCnjbeApzehJbNYuEDSfwJo9XOgNQc7jLdduWbFtT16F15HJZFGQgMntDjMl0x9vTftNYohismeVFI6CfTJQCfzIY%2FPW%2FT8FnvAYQ8kh5jsHTEwrXhiU3FdXwX8x7J3UbT5RUWXnYobcUH%2FZ9xOzFRmM6qONpcLK8OwgxEHQv0kfyJh8DTX4LIrcvHp0oZEMKf97teaRo0JsLXUrquVApobJxI7YpDVg3D7ulss0ygf7rP9MO6sAIUkKxGGekl6szgu56KwGiPLLCDcdDRIAbTUST3s7MfAvc1LxpViMb6%2F1olNYS41vhPhmFWJetrv2rcHQ1JhGMAUermkhaXirTX8sBoILSE3CWDl0V71px0r7fgCms4LgkV5%2FCzUnBb5uQnDvE0AjthA1lnYM20YfqfOD%2BfEe%2Bzgb%2Fy%2Bmb9MNE2ZlS0xMI2fvcYGOqUBwk9bSYXRRha%2FBpnRFLAx%2FZsjhZMbY7Sz9x4S87O3WiWoulQ2IjB4FEi86%2F9Y9LU37k269qO500D89f%2BJy2FIrBnwTC6dAUAJ9MnQ8KtbC9jH8fNEg004NBqThEYzPnKcTArz2I3fJio1DpaNjhf3cP%2B1ozUXyjNSyHVB1WTzHFpOWfR0fNGW2EUaAXHZSr8iav6nYZ4z4lQOmEXwjGmXRkooHjdo&X-Amz-Signature=c57543b919adb13790c5aba73589febe7142ae8c1140f2974e4e4e7f3d1a100e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVMS7YE%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY57eTxHg5fveTHRRghpbCei43%2F1G7Nt2Zj9QT7UeuswIgZGYq3z84GLRXLt6C6bvJtInEcGFs%2BuS4%2BgnGtcBGhgwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwFoligjZtl5e85HCrcA4c53rsw5McO9UyHMioe%2BkEMRUsu6tKz4AV6mic7GlfwJUERuDWK6p6lgXBImGLWdTEk10jl49759OT5k%2BbzMpIxAsRvl%2BQ%2BDb6o%2BPtDWgLdOCIxWL20mTbr77ug6i5B5Qqo4TNA2LdAoRh30rR0wXAb8wnwvciAwomWUDsN2QmpgDTsSrY7yZqol58CYfBvn7dLJSN6j%2B%2B0Vi8wJJdbwxBq5j0djD9WQdYVCFhpDRpjkk%2BwBZWVWX2h%2FCvfSBwb9Gtpyo%2BzgIS5eEsulo%2FRutaM%2B%2FOpd84tTiDe3w7L8wxKko0i78ALzrBF8lzf2C3pSlKJN%2Byqkz4r9Z4u5%2Bug%2Bned4VQDb9lfTz6T%2FjrBu%2BRX2JO9T6cmlUvOmCEd2u3UXSItEOqulFrJX21IF6YW%2FJO5dcLhsRkL09vRr1JnRd8txhVCACGQtnqbbuat1Cp8fDpeEaaFiZZ1i8Xu1dLoKQ41uKkIOY371tCwa1c6IIeA1%2BUmOIgYvxzmYuzcIOg6GtzK2spAhY5nusxfzK%2BpmpvfbwzT0tepDf0f%2Bnaw8ICMEbKh7vNdNKUY1JoiRZzMD32REfjGbioATVe7aSmvCprTfGbDyvXZ4B%2FFqhTQnafSBSmnd3XoBkbXDeYoMK2evcYGOqUBQnPChhu1d0p74vAPq%2BXIOCoULYMzmZhKwR0vw23RTd9ARZsO6QRPppObLCj64PBgZW1eX5EDU%2B%2BaRm8hRriajBOIIms8CZhDeryxCS2MRCq%2Bi%2BlzST3bUgbe3DqNhswQJpfqdwFeg3qlVf0EBP%2FzCVFarVQ1GXeezXnFin7dYHbz9p7Xay5%2FxOuKb2ZTqaAxfvkWz6IXYFH1mOSGPyJ56YnmBySW&X-Amz-Signature=d0b1cea384ce458e27ef8cbc22ad8aba0fdc3f977651efd546f6df8eae011d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PLOTJI4%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCduXxvF8IkTYtmwWQqJo1BYjU2Nmygrv4QdgbSgwrQQwIhAJ%2FyMHAAV7W3ji9jFS8qRp%2B58wAHTI066dhzuAtylWZLKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdVq7%2BtmO6aUSg5egq3AM4Lr9u6OJBynkM84Jjen03rtxSh2j1BOtcoKoFWrxleBphN3RXtKGHeIc%2BiqoWzDg5%2Fn%2BLXtfEzOyWgUCNnambgRZRpW9mtU%2BQ0MhLU0enfE0CMMyh4hL7w6Ef1nTleV%2FfnMJUthtfIX%2F9xUEJNZBIYBkFjxALPS404GW6w6F7oRMC2H5UX1zQsWKj754Eqr9NPjePQP8xgrBtiC8p24dpMtTfugRBK1CLlFCTGF%2BKcxsI5fdlbSIB2%2FSGt0%2BC0E3Yv2pF6w6cKsCrguITZ2euDp88p4J0cPgPwm4oob6KR4q54qNXLst%2BR7Q%2B8bpnpYWmrHSE7aoltan%2FQak7Ty19YkCICzDWVrpxyWzeoOCff2Vr1HmFi4U%2F9CFJUrVYeSiVKgBriKDaIfQ0TR4i9fzwthtj9sMl1tBzHkv66giYHxsxKV75krpCm4%2B%2F7%2FfiZ8xubbso3DuqVhjhSPp0lfGTCibpm8%2B5Mww%2B2vxuP9aqj5s6AlGy%2F7TlS%2F5gRnPKixR9Yv3BcSG4oV6OG33bjCFt21woCVNUWWkFP5JT3zhmabjOAoSKzDWMAnCjOdhVN46ogvnvqoKOBfcY4hWehHfOfN9JcNEaAco%2BYEkZ7kzG7RwrEXc0kfGfpQjk6DDCn73GBjqkAUAY2leiZYeuvCRI2oAeG5lTeqlZjmfrYWzjDZA7s7SQddsDpdhdbhrvXr3XMaZYmwileMM4%2Bux6a%2BDFzPb2DPqofWaf2IoSXq7gXWnD1%2FJrPz%2B6pOetQ4l9FPQHV%2B5nhqU%2Fu%2Fdx6LHsJQD%2BR%2B4nDoJSDPf%2FkIE4LQxBWeoFRMrGiKf3RBnmq%2BPztVd788hrnYnAhYCSU8nS4OuGhQsnI%2FKUDgMV&X-Amz-Signature=7698b2de587d8ab76fa44e890d8e865638115e8bc45d5cf753c259f7b935f709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
