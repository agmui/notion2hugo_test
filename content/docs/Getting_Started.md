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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKWI47Q%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqTHzKeMMPTBXva7pkQzJ0Hs4XGeF8Wj%2FzwAzMvyeTiwIgPH4J1MAuWdEZJBQ5AZfsrt8Df2pF2G%2BlrT%2BcdvBvTEgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCovBtn7aqkZ7eFufSrcA9Az0AviDuLcJdtiTnk0iYecYtcxyiOpxBorJ8Clydq7fstdIIq2wyddXpKPqJZb3M9MllnDJlVpO45SZXm5KHx0tTw90aiKi%2FaJBqHbRcLjAAX4Vkz07mKDFgPxM4TbswgbWSRNA%2BBhneRd%2BnrCdr25KEZrRhaCGb%2B6kOH3mIhlFlos%2BlbdqmFrs6fqAGPLx%2BS%2BSc43lRZ55fx7BUAxNgOEN7TM%2F6lHkxzE6mpXIJ2gNTASBLd8Mh%2BOujy0Yxd1sdaNWDgckm26iwlovSBzStsULw%2FEIya7kTrxq6oGNE8GRUoko%2FroRBTHsxYm1vJKirAzmXfAfaQsPiBd%2Fq4fHZHAxbBI7ssRPcpUnrqCKL9GEeDLF9IbG5nLlsNF3iWpKYIR7tovqPXDkGIVau1BbIItyC6qxDkLU1r6%2BUZsj4x5hfBJqdqDQBgBLy5aCoO5x7KlLZ44mwea3HsPEXtV3uWUlow9h57wnSrdSAK5zQ7P%2BPrdvYnlUsORqnkSrjbzJulCtLb5ghQpZgG60smvN65dBvbLmcSQutgM7Tpzq0nCSr3Np51HiFPcL4fDf%2F4G9eThh3DftFlibfkUsWTmoFTX0o2GTv3lsY8Mgflwgg0gTN93QzviS5BR57vXMOeB2L4GOqUBFEWCzjMIKi6Vaqe%2FTLNnLjLEip2HkHPcnMrttmyd2ton0cVNNVqMftt9TnnEUOs3mE5HE4gENolK%2BTxfg2OvrHwTnuBEcPGiYOcb84SpUbXcVVSfGPne7YJ8Rdujzmv1UxjfCvGWpQg3iYLJJ7QvZLbAEIXEP%2FoFhK05sDXBFRSyOF6h7kbYMWXGrJUZrw%2Bx4YDe7AW9b4FeYqYdoCSsxb0gn%2B3S&X-Amz-Signature=15c3478a1f9124b3f9d1cf277d6d09f9ab2a84f04b6121fa329ac353b7444a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKWI47Q%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqTHzKeMMPTBXva7pkQzJ0Hs4XGeF8Wj%2FzwAzMvyeTiwIgPH4J1MAuWdEZJBQ5AZfsrt8Df2pF2G%2BlrT%2BcdvBvTEgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCovBtn7aqkZ7eFufSrcA9Az0AviDuLcJdtiTnk0iYecYtcxyiOpxBorJ8Clydq7fstdIIq2wyddXpKPqJZb3M9MllnDJlVpO45SZXm5KHx0tTw90aiKi%2FaJBqHbRcLjAAX4Vkz07mKDFgPxM4TbswgbWSRNA%2BBhneRd%2BnrCdr25KEZrRhaCGb%2B6kOH3mIhlFlos%2BlbdqmFrs6fqAGPLx%2BS%2BSc43lRZ55fx7BUAxNgOEN7TM%2F6lHkxzE6mpXIJ2gNTASBLd8Mh%2BOujy0Yxd1sdaNWDgckm26iwlovSBzStsULw%2FEIya7kTrxq6oGNE8GRUoko%2FroRBTHsxYm1vJKirAzmXfAfaQsPiBd%2Fq4fHZHAxbBI7ssRPcpUnrqCKL9GEeDLF9IbG5nLlsNF3iWpKYIR7tovqPXDkGIVau1BbIItyC6qxDkLU1r6%2BUZsj4x5hfBJqdqDQBgBLy5aCoO5x7KlLZ44mwea3HsPEXtV3uWUlow9h57wnSrdSAK5zQ7P%2BPrdvYnlUsORqnkSrjbzJulCtLb5ghQpZgG60smvN65dBvbLmcSQutgM7Tpzq0nCSr3Np51HiFPcL4fDf%2F4G9eThh3DftFlibfkUsWTmoFTX0o2GTv3lsY8Mgflwgg0gTN93QzviS5BR57vXMOeB2L4GOqUBFEWCzjMIKi6Vaqe%2FTLNnLjLEip2HkHPcnMrttmyd2ton0cVNNVqMftt9TnnEUOs3mE5HE4gENolK%2BTxfg2OvrHwTnuBEcPGiYOcb84SpUbXcVVSfGPne7YJ8Rdujzmv1UxjfCvGWpQg3iYLJJ7QvZLbAEIXEP%2FoFhK05sDXBFRSyOF6h7kbYMWXGrJUZrw%2Bx4YDe7AW9b4FeYqYdoCSsxb0gn%2B3S&X-Amz-Signature=6bd7ddb17775c6591f7eabce55c4f36b4d78d400ac973a39af124df92fe165ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCIR36K%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvQAyHCODCSmnSAKU5mdGw9KW%2FR22Exfu8U4gEBfx2IgIhAP2%2FqNvmDLWE7j2mbH0jCR4byZVhm4XMd5h3Ek220pZ3Kv8DCCAQABoMNjM3NDIzMTgzODA1IgyGc7PrDPAKATg%2FboIq3APJWRQhFkET4McWkDoUItqKZg%2Bet1K63YZX%2F72CqUgt33LUyAg59zkpUIN%2F9OaSI%2F%2F%2FN%2FAOYZK1EB4mS%2FIQBAZBkZz5IDfQCFm44jIA6aLDAb4UDE4TWi6pcHvEPyDsnRfFYUEyB8VPAHUQoqEra%2BoF0ND3phNTtc1F3ZCfOl39DF%2F%2Fhq98%2BVpzprB3GdpHiNirZaidsWiaihzwd7L6trAFECYDyQxt3ZvoMv1Khf2qV4lBulcVIFOTDXiXqgd%2BtorCXQ4Q%2BpPEbZmq1Se0Fyj9FqQbpbg4bibhYfgLJi24Qex5tflUjT8L6x%2Ffu4g1R0L3%2BToVL27NLOoYtrKY4AKIPjtVgsgiLH6wuVY%2F42pmH83dcTzYch%2ByS6dt2WxOBAOOt%2BgJOAGl31RBd3R%2FniIgl7r5TvPgDU2oHHbIEpjmkBb3wu4D7tKU3bHzl1f863tegU2JDY8rmhkKhFo3yqXryYcZTozizCct5ip%2FHWgPUtI28bDh1b3abYbMRyzPzR1LrgWFKdWKLT7zzaLfD8Dtr7srkwS0Oc2Hk8eulYpQWVCFO5IplQtn7JN%2FsC81VQEdoU7172emiLvn5qY%2BJ8qUIIbfE%2FkvgbELBcfmFDzi%2BaOb5i0dULYtnVJdJjCOgti%2BBjqkAZXwdFFmQ99JfdT5eB62eE8Uuj8bWAfgjFbF7%2BL2nyScjoVIOfiXEK8DMTa6iXafnby7Dn2hfAHA4lHELO97d3dXh8wmOfDJMMXu68wbUAYsO2UvKQnhvsWwXPl2UXy%2BXS4RGgzPGxZ9yrCyVubLyKhYs%2Bk5gfXDah05DwFrX5osEiJeKzH4QaLZyJlVqpd5CAJ6IUsQPUqay01fnV5BCaJqCOnD&X-Amz-Signature=ea474b208316def75b4e42a7ee47d75b505a83d3ecf39ec646ab75d7d2c84f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676C43OHT%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRcWnJK5WBBKFbTx49wMdcfgmyXLA9YaulL0UBw8iD0AiBq%2FGExl51Li2I%2Bj7aoYtJtJSmJvA8FXEBlieGxNWjT5ir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMrb9k12VRb07o92vFKtwDlUjHpdtJSdPIFU4FpgH%2Bis2nVWEu9jsl2pIjDjqBoeMd0mYEYg7lpG5LnCAzDp3Ccbui5bEKVdR7oY0upVEtpzH2gulTPC2OEQ%2FaaubjXnGaA9AYo%2Be%2F0Jw2yEvMmCgNKMcoxRxx96KKfYWZjKPkh6oHN0uFfxU7g52gK1H0uCIHesiMjRAF%2F5FPyT6rS2go34nutAzWmFSkjGu0d6dQzzyOCbeNELP3YJQ4RxxR%2BIlM3N0BL3XpZlZgr%2Bj3OoFEQFJDpMa61RWxMovFEZbW0HUskcq9lI4CG4IcsFjlZfwhnSafp9VpjnkNl%2BkFVIafwk6bpOMagKpgtbA5uQmH3NnILqrpdZDTcHEfHWGPJmk396AonRwMl%2FEp8qsnO3jE5pQMzc4alxlsLnCoQr2Q%2BbkalaN8EMUp8op6qUJv33u0WQJ6VdxKVqB2p8O5uHSKw1bfljne8BzUEfYQ3SN8uxg3IqIr8tx0NkWSUtVWwai5EclhCNWjWQ40KIkVdiFaJwON5zTfsYoohcYn78JAYVk%2FzZ%2BzfO0%2FU5bFi5pI2fAmf74brBUqCSHY685MSUiUIjMK9shAn9a1obHN3yhwvkMIqAB%2FwFCYsw21jfeY2ID4S0eu%2Fdeca6axW%2Fkw6YHYvgY6pgFwzIfTLj0ssF3wT7GI67biDFyZvGmjnukQo1f9qKa1y0EyDfodHqNy%2BfUB%2F23Po9GTjxxW7fyETbbXgpt1RbAim3osbNni2scg54GEYUqgjwUrsCuDmUxZ29A4z8u9j4O%2FXztwgNFB%2BQbRX299aZrWB9PnZznjOmVjxZQyy0wm7%2FuOvQsQ%2F7tVOCYOY9ui6l2uLr1VhkbD%2Bm9wiuabrisEvK%2FTfV3T&X-Amz-Signature=f9812d2ac1fec9631dc6c39eeac808e14cf1ad0dd5337b12525aff877b1d40c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKWI47Q%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqTHzKeMMPTBXva7pkQzJ0Hs4XGeF8Wj%2FzwAzMvyeTiwIgPH4J1MAuWdEZJBQ5AZfsrt8Df2pF2G%2BlrT%2BcdvBvTEgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCovBtn7aqkZ7eFufSrcA9Az0AviDuLcJdtiTnk0iYecYtcxyiOpxBorJ8Clydq7fstdIIq2wyddXpKPqJZb3M9MllnDJlVpO45SZXm5KHx0tTw90aiKi%2FaJBqHbRcLjAAX4Vkz07mKDFgPxM4TbswgbWSRNA%2BBhneRd%2BnrCdr25KEZrRhaCGb%2B6kOH3mIhlFlos%2BlbdqmFrs6fqAGPLx%2BS%2BSc43lRZ55fx7BUAxNgOEN7TM%2F6lHkxzE6mpXIJ2gNTASBLd8Mh%2BOujy0Yxd1sdaNWDgckm26iwlovSBzStsULw%2FEIya7kTrxq6oGNE8GRUoko%2FroRBTHsxYm1vJKirAzmXfAfaQsPiBd%2Fq4fHZHAxbBI7ssRPcpUnrqCKL9GEeDLF9IbG5nLlsNF3iWpKYIR7tovqPXDkGIVau1BbIItyC6qxDkLU1r6%2BUZsj4x5hfBJqdqDQBgBLy5aCoO5x7KlLZ44mwea3HsPEXtV3uWUlow9h57wnSrdSAK5zQ7P%2BPrdvYnlUsORqnkSrjbzJulCtLb5ghQpZgG60smvN65dBvbLmcSQutgM7Tpzq0nCSr3Np51HiFPcL4fDf%2F4G9eThh3DftFlibfkUsWTmoFTX0o2GTv3lsY8Mgflwgg0gTN93QzviS5BR57vXMOeB2L4GOqUBFEWCzjMIKi6Vaqe%2FTLNnLjLEip2HkHPcnMrttmyd2ton0cVNNVqMftt9TnnEUOs3mE5HE4gENolK%2BTxfg2OvrHwTnuBEcPGiYOcb84SpUbXcVVSfGPne7YJ8Rdujzmv1UxjfCvGWpQg3iYLJJ7QvZLbAEIXEP%2FoFhK05sDXBFRSyOF6h7kbYMWXGrJUZrw%2Bx4YDe7AW9b4FeYqYdoCSsxb0gn%2B3S&X-Amz-Signature=1f8314ae172387497cb1db424801da5bba57333d5f05dd7da0305f78237dd501&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
