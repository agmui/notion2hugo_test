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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHI4N7G%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9np2kf43cjXEjo52YD3j7iN7YLGEuwu0KxQBcqrCU7AIhALqPtKcZo%2FoGQIjvgbtxAkOlRRyyTvON50L7AhcXmwcfKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmh7WwUx9%2FHw1dW%2Bgq3AOYW6Mpl5vGUXYbVuKuutcrnkkFAj%2FgZGecn4htX02rgVIKwFMBynTQQ3Vj%2Ft77g1pgwsPAmIHQJn%2BBD34BRJul5tErb91JN%2FPIofUKZ%2FlqSdMjEKf9YmStA5ib3ghjZqINgHb64ntPjxGp0CxLc6tbHGw2ai3SBqaw8uZURqRJxFlhoSxqASrXV%2BGcEX0GO7HveYDChZNFFIFp9GI6K4Z8%2FAMaNw3Hqu1n7r09OLKRDbJVyGQuzfXldu4yFiqeKLW8Nep5RqNXAWz1M2C%2BY76EYFqEiTa3vq5rPo%2Fw7AJX1owvrJQ%2FJ4do0szKxYi876EWZ9zYEAIHOst6GAm5YfUYLzTMQByAqCp%2BRMugi2HG%2Bk85gfX0EmWS7OAvyo4eQ8rtkcDnqgOMfCqq3qr7V2HFyC4UWalF%2FNk32xFbco0cE5uyxg%2FpF7DYTPdO75ZVdH9SOSMAqL85y6sjTMmmQxPlwoR%2FV%2B5y%2FVYykfHd21SN8VqSLDm3y8kjGW6HymXfwM1pDvsE35rR%2FbEpidMmvfaH2fxRek%2FRaGo51vX%2FK1IkgK%2Bjt%2Bl3XjDFLaVA6fUPqqmxnWzN68U%2B%2BYQ4dSaUm26zBkjFTspbcJXmte5wRIqx8b0SkACU7JDtSH1XCDDxtMy%2BBjqkAfjsmCA0Z58iTD2He4yXbGI3jCtekA9gFLu8bmcIqxcooQykp2dZhJcRm2Qb%2B1ysD3qPn4Hq6uu3HAP9Yh18TF8t74lg1aWqydE88g2flxUGJTIyJXDKPXwo8VgeFDlRYeRD4x6wAMxlSbnntmTlhPvvhsbAi41Ke%2Bf2izzdUUKTk4bt3fuPAjBFGji5R1MKP7UBnpxAA%2FxETE2GgtE0EMJiIcSX&X-Amz-Signature=512c26a64fa1688b49ff512677b9b648a66c69388bf63d648654a1ce77d73fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHI4N7G%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9np2kf43cjXEjo52YD3j7iN7YLGEuwu0KxQBcqrCU7AIhALqPtKcZo%2FoGQIjvgbtxAkOlRRyyTvON50L7AhcXmwcfKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmh7WwUx9%2FHw1dW%2Bgq3AOYW6Mpl5vGUXYbVuKuutcrnkkFAj%2FgZGecn4htX02rgVIKwFMBynTQQ3Vj%2Ft77g1pgwsPAmIHQJn%2BBD34BRJul5tErb91JN%2FPIofUKZ%2FlqSdMjEKf9YmStA5ib3ghjZqINgHb64ntPjxGp0CxLc6tbHGw2ai3SBqaw8uZURqRJxFlhoSxqASrXV%2BGcEX0GO7HveYDChZNFFIFp9GI6K4Z8%2FAMaNw3Hqu1n7r09OLKRDbJVyGQuzfXldu4yFiqeKLW8Nep5RqNXAWz1M2C%2BY76EYFqEiTa3vq5rPo%2Fw7AJX1owvrJQ%2FJ4do0szKxYi876EWZ9zYEAIHOst6GAm5YfUYLzTMQByAqCp%2BRMugi2HG%2Bk85gfX0EmWS7OAvyo4eQ8rtkcDnqgOMfCqq3qr7V2HFyC4UWalF%2FNk32xFbco0cE5uyxg%2FpF7DYTPdO75ZVdH9SOSMAqL85y6sjTMmmQxPlwoR%2FV%2B5y%2FVYykfHd21SN8VqSLDm3y8kjGW6HymXfwM1pDvsE35rR%2FbEpidMmvfaH2fxRek%2FRaGo51vX%2FK1IkgK%2Bjt%2Bl3XjDFLaVA6fUPqqmxnWzN68U%2B%2BYQ4dSaUm26zBkjFTspbcJXmte5wRIqx8b0SkACU7JDtSH1XCDDxtMy%2BBjqkAfjsmCA0Z58iTD2He4yXbGI3jCtekA9gFLu8bmcIqxcooQykp2dZhJcRm2Qb%2B1ysD3qPn4Hq6uu3HAP9Yh18TF8t74lg1aWqydE88g2flxUGJTIyJXDKPXwo8VgeFDlRYeRD4x6wAMxlSbnntmTlhPvvhsbAi41Ke%2Bf2izzdUUKTk4bt3fuPAjBFGji5R1MKP7UBnpxAA%2FxETE2GgtE0EMJiIcSX&X-Amz-Signature=13ee5b4d82c024303c22a4b39ca83e6858e39666ed0681ac06af9e00cbd2f22e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPA7QMPF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4%2BHmqNqdzn0AMqrSpo3Myn03oVfMHO5dEyCIOFaG5CAiEAsVp0DUK9PhQeJwhbqe63CcUxCBVMRmK7qY4cLdlFGykqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVtCNHUJ2pC8%2FXyKircA788taR%2FweoSeKm5GNuv%2Fli2C%2BF1UAr7ApY8iXS91P7E2I0Cum4diQeOCGmRf2PAYdLQb28bZE8zu7QY2u3%2BcARyzcdaGxrueQ2Yvpcp2DTL%2B7a5QWRCkPSualX6D77giUclzDkb3k9oGo0ym%2FO4pWVlqObWdNcES0PbdBXd8i5xG8GEFWq79l0dMZlxwYEocF0tXfhaRCrP5uklFHqeYmiA%2B9z2iM3WYLQ1wfwFGmk9InmeLFlplgpr%2BV2C566Mf4WtiN8SwX%2BBu%2BL%2FGBG60%2BQrC3F3vG21ehR4WM05yZGd6t25P9IXh0dXoK3%2FHlZbcKg4oXb7%2FUv%2FJGmdzTRxn9f%2FR5%2Flmr6VSoDF2jPyRB43aPPeF7b%2BpE7%2FrJmkF1e7pcMpWcnTrL%2FrPVwTvhFsOWuLR0dhdnaRVhNjeNlgThcGkijtSMm2%2BJieslAoIYPUki9FlomXaACbF7iVlisMPOeUf6ZEQPaIncSc8Ng5wi8FoTHkJdOpee0QaEapJ%2BMVpx6qysy9D8FDp8jiH%2FNI%2FRWmCz9GGSLLpZCo%2FH6AAkFkc8OO7PlYZeKSHMuf21hMnW1sKOaV8LPt3NCLcmAuW%2FtXbiAyg8FmpucBScdqktrj9kwVWKHXJ2Qzs%2FF9MNe0zL4GOqUBj2IKF0Nddd%2FjKjJ4tkpblMVNRpTf7ey7SWBnjt%2BTfVpHV%2B5uNTyHjk1ShCuFcOJL8WxxP6wsn0NnXWAOXhvRUkw3HmpegQ20mHTKJJeBWDTI2164nJOUH%2BzW68r19akPa%2F6U%2FSiQSfguXBCEP51MhPXKW%2BIRhpKpeD7Ca6oP8nbDLnNBLbUcnTFV0%2F5v1cMf0qJUJF9mtY%2FLwddsM%2F6J1IEBYZWs&X-Amz-Signature=3faf513b94b9dc14a1b4fe65f78435005867c55c0fe5efa4b5aba9cd13156828&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642QZFCFW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFGfEJutyWh5qoIn5mKWxLUGU5s4JkS6wh%2BcMRvA7BQAiBVw8coH3oY6LNmMPQyYrD03X%2BlRdWia3MxBoJC%2Fh0ZWiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7O3F0cVHfA%2Fn025ZKtwDD9Nyveh1VihQrtEble5vL9xicFFjayvTQCDS7HfwtNqgmLj6kkgnVyyDvdMt7eXrYjBlvx9hGUSJBEa%2Bp%2F5UhPGy%2B30T5pg%2B9yMgQivwablDXlqxGVppBnPh4tTcs%2B8J185AEk%2BDzVgK7C3GClugdutiFDEdzJe5MNl3MCCOmyHGuuWUAZY614efGeOKVSYCmMMEm6s7xwqnv7tysflXGDM8QwPdZyaTFM8Hdln0k%2FVgZhBKZTLoJfGM6yoo7oj7wnN6Mrj0VedcKjoTJdtv4Gv8YkeFLYHLT6JpYvUo0Ojj1JVA%2BdLmb5mOBtCGCuLghoMRDaBFP2OAxJn9V1LFJ0R3azLNMRtX5V0Iq%2F9zadsh0O9zRSyzspVxfMTdTNpoel9YlZ0PpNdhb7KJeXxs0lAhH50e4g5pI6NY3dIkyD6NpwUI8xpMdKwDep4%2BqdQ3xqn3%2BdvcMHBXnc28yEDaUlKGJtnmJ3VbmBpp%2BL6VhoOjwEGGm9ytqFdSZgwcj8S85BqGQheUx2Izue31SV0CSownDXNpq2TPlHLeRfomOp0uQIbvOY03DKt%2Bu2nQ%2F%2FZNN2oF%2BRa5xgRieLnEBnEnrJmH0kH1D6meImhszzcwsS%2FBilhvUkZ8Bcb5pBow3LTMvgY6pgF6Cc2uW9ZANHXLVQGna1kW4WDH4wcpnloN1g775IVMsgsDVwPzhJDcRHijaBS9lV7kgmvUAwj6bmUBMmfxgYzKxYBgM15Vs83hDSYuaocL34CRhdEx8pFbk5QWBo7l5eVTW%2F0%2F8P88ENTAyYtSolPjU7CJZ4w63iHvtf8avSVRyR57RQbWPHfzV%2Bc5v0oMTblLqiYxKpJWTiUBrDp71rsddleDrSvV&X-Amz-Signature=e727f99a6ac9aa8efabfb3364c2adaf1e0a1bb5cdae5b9c970a814575d54b513&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHI4N7G%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9np2kf43cjXEjo52YD3j7iN7YLGEuwu0KxQBcqrCU7AIhALqPtKcZo%2FoGQIjvgbtxAkOlRRyyTvON50L7AhcXmwcfKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxmh7WwUx9%2FHw1dW%2Bgq3AOYW6Mpl5vGUXYbVuKuutcrnkkFAj%2FgZGecn4htX02rgVIKwFMBynTQQ3Vj%2Ft77g1pgwsPAmIHQJn%2BBD34BRJul5tErb91JN%2FPIofUKZ%2FlqSdMjEKf9YmStA5ib3ghjZqINgHb64ntPjxGp0CxLc6tbHGw2ai3SBqaw8uZURqRJxFlhoSxqASrXV%2BGcEX0GO7HveYDChZNFFIFp9GI6K4Z8%2FAMaNw3Hqu1n7r09OLKRDbJVyGQuzfXldu4yFiqeKLW8Nep5RqNXAWz1M2C%2BY76EYFqEiTa3vq5rPo%2Fw7AJX1owvrJQ%2FJ4do0szKxYi876EWZ9zYEAIHOst6GAm5YfUYLzTMQByAqCp%2BRMugi2HG%2Bk85gfX0EmWS7OAvyo4eQ8rtkcDnqgOMfCqq3qr7V2HFyC4UWalF%2FNk32xFbco0cE5uyxg%2FpF7DYTPdO75ZVdH9SOSMAqL85y6sjTMmmQxPlwoR%2FV%2B5y%2FVYykfHd21SN8VqSLDm3y8kjGW6HymXfwM1pDvsE35rR%2FbEpidMmvfaH2fxRek%2FRaGo51vX%2FK1IkgK%2Bjt%2Bl3XjDFLaVA6fUPqqmxnWzN68U%2B%2BYQ4dSaUm26zBkjFTspbcJXmte5wRIqx8b0SkACU7JDtSH1XCDDxtMy%2BBjqkAfjsmCA0Z58iTD2He4yXbGI3jCtekA9gFLu8bmcIqxcooQykp2dZhJcRm2Qb%2B1ysD3qPn4Hq6uu3HAP9Yh18TF8t74lg1aWqydE88g2flxUGJTIyJXDKPXwo8VgeFDlRYeRD4x6wAMxlSbnntmTlhPvvhsbAi41Ke%2Bf2izzdUUKTk4bt3fuPAjBFGji5R1MKP7UBnpxAA%2FxETE2GgtE0EMJiIcSX&X-Amz-Signature=57366c8c1a412dcb4c6f5138904d8894c0f955334ff520f25804310eb9045d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
