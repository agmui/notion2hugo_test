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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBFGMGL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4wvVD8PftLk28yejZo2BP3KrllAD%2BtU9%2B%2B%2FI%2FzmjwnAiEAzx%2FxIHmSa39yY%2BBfe9Ce6Uzi5Y59E856%2FwvgGY7ZLbkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2J2pHQad4mHSrdHSrcA4kBrF%2FUiOhNKb455eZ6u3FZrtB5evJr8RK%2FPerTFJR3OJOJ4pYqObK11i9NlbqKGqi2tyiqkHS1hhM2KCR9FfqoIKLyv2iIISySD9e43uTl5pg81qti0XGv8qde4ey%2F1tFwwAqo1mHTKZt0tEGyzSLbOhbKR1k06LK%2FsYG8HRLQSm430NJdo%2Bff1O%2For%2BTOi0wPAM61UBQJcmnb2Y7tN6UJ%2Fv9QbUVFJO8%2FituZG6il6ckrGX3CLSxxyuY76gIr6q4RyW8tcgQ0JT%2BlCxk7kGSrqVupq3iirTy%2BdlEk6SKgHpeBIy9vWJJW2FuHEIjWe63lmPiHzi%2BqVf4pSEkAQTDQ63zzog8%2Fu4NvLekyqqfDw0KvjCBRoT%2FWlY%2Fj6FI4eRDu5A0T4W%2B%2FloMjLGbT2IYrMuqrDkM1WR7anR7TBqjOgGEWSCAVXuI7RmN2VxxJctJ9EMnFPd2pWr6vUZ7Fcs6gJ8uo8289pUtVRtyaaFX%2BEAs5j3CX95vKe2zvnJ58pgBRMGQa7emDfLP9EwXb4z%2FOSd%2BE8MwikBrEBv2IAMKqrgEwq6g2kQrws%2Fj3jSFHZ3aTc3hUfKezc0iPueZlpgEFT4l%2BDw7zUBtnvQZOkgb7CX4H1XKR2DpL5c5GMKL%2F8bwGOqUBrLqv40yzj1ma214LaxLhyPaNt%2FRLts1WDu%2BqOYDmOorkXdQFYnmXsixDJec%2BoJ4KSRmA4YM6S6WaiWm%2BNT7gHWTpb%2BDpnRti1YCxmCijEP2rq%2BPkEzPtDtZZv%2B3mtpqMHksr0RxPmARdhYPT23U4gOADLeuFRympgKV%2BRgM4s8OrDxPwNtkrKpxyZOBa0hqYS1%2BneJSjxloHSHGKnKYs%2F2BsBCnx&X-Amz-Signature=871dbabe79022e29bf6e7f4dd00fdceebeb1fe70b24d3cb057bd3bd6f6c2e0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBFGMGL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4wvVD8PftLk28yejZo2BP3KrllAD%2BtU9%2B%2B%2FI%2FzmjwnAiEAzx%2FxIHmSa39yY%2BBfe9Ce6Uzi5Y59E856%2FwvgGY7ZLbkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2J2pHQad4mHSrdHSrcA4kBrF%2FUiOhNKb455eZ6u3FZrtB5evJr8RK%2FPerTFJR3OJOJ4pYqObK11i9NlbqKGqi2tyiqkHS1hhM2KCR9FfqoIKLyv2iIISySD9e43uTl5pg81qti0XGv8qde4ey%2F1tFwwAqo1mHTKZt0tEGyzSLbOhbKR1k06LK%2FsYG8HRLQSm430NJdo%2Bff1O%2For%2BTOi0wPAM61UBQJcmnb2Y7tN6UJ%2Fv9QbUVFJO8%2FituZG6il6ckrGX3CLSxxyuY76gIr6q4RyW8tcgQ0JT%2BlCxk7kGSrqVupq3iirTy%2BdlEk6SKgHpeBIy9vWJJW2FuHEIjWe63lmPiHzi%2BqVf4pSEkAQTDQ63zzog8%2Fu4NvLekyqqfDw0KvjCBRoT%2FWlY%2Fj6FI4eRDu5A0T4W%2B%2FloMjLGbT2IYrMuqrDkM1WR7anR7TBqjOgGEWSCAVXuI7RmN2VxxJctJ9EMnFPd2pWr6vUZ7Fcs6gJ8uo8289pUtVRtyaaFX%2BEAs5j3CX95vKe2zvnJ58pgBRMGQa7emDfLP9EwXb4z%2FOSd%2BE8MwikBrEBv2IAMKqrgEwq6g2kQrws%2Fj3jSFHZ3aTc3hUfKezc0iPueZlpgEFT4l%2BDw7zUBtnvQZOkgb7CX4H1XKR2DpL5c5GMKL%2F8bwGOqUBrLqv40yzj1ma214LaxLhyPaNt%2FRLts1WDu%2BqOYDmOorkXdQFYnmXsixDJec%2BoJ4KSRmA4YM6S6WaiWm%2BNT7gHWTpb%2BDpnRti1YCxmCijEP2rq%2BPkEzPtDtZZv%2B3mtpqMHksr0RxPmARdhYPT23U4gOADLeuFRympgKV%2BRgM4s8OrDxPwNtkrKpxyZOBa0hqYS1%2BneJSjxloHSHGKnKYs%2F2BsBCnx&X-Amz-Signature=75bb0aaacdb1fb401d5b3553706b3b72e1fce6f26830e9a17f09df046543c670&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVTX6HO2%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzFOApPjG6FWQgc%2FDY6MBtYINJ9Lq0X8CBt3OSm4WzMAiEA4cYGDDKiEaIa1zKW2T3iCYBujk7w7LCsvGO2LJ%2BfyWQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGIoWPbEaB00yzknyrcA0QsqUzOi1ZlirnhqD3h7DxD7ZiPL6PtJbzZaujzHKIT78lvRzYySLUQrZ00xpBXT%2Fpd%2BEQr0T5JesIzDg3kJBYklCzVkCPoOUCNQGUzgWxlL0XR%2FL0iq807rpwZAnz2FcDZpYJ54fzx4SoLjtrjvZ6JiPv095pOjfeeSHzstwXET5NcCIlA8fEfE%2FK1DMPEeAiWPX8i5PTpiOrzT2NX2v0OV087ztt1SKWXrxMKsSy99NQyEPcVHv3r%2FPK55U3yRsmzx0%2F7OwqnV8%2BYRXiDgFBRlXSW0iehtzeQ2RoHSqK2nIp1sG57pY9rN%2BBsMa0LmdIkA7DMkpQfyCX07dhDxoD4mHHpDXYr6uZNjFqRUhAMuIJcigD6%2BKZhfzGYRFoWC2sOP2IP%2FERCbHKTkvA1u0tAWD1Bjb1zeBuSOuAAeuRrPgWRB%2BwHQbus3AtX0g4lFsfvK1T2iAFfS611lZmOchMkqCxn8816P4BRc5wnVMijf6H74gOF%2BOKUxlJCkojcuq%2Fz6NMagFE5WNXk%2BbKLopnGITMRvknndVjeNFbQiU0JlNzTkj5qEZXubeln1qQvbM%2BFo85MRO8G5WVCByeNLLE55crviP6Lqmgvk4QNCnRe0E6UCYeJ9nGjvXVlMOL%2B8bwGOqUBZDQvos37az7W%2FTJF6rutRPB11xrooltHCGVw675CjgyVXfF99pxR9JtT2ci9Yri9fDTuOQ6kxocUacxRFgMbnY24i%2FduDJIY64TZG%2FUexLnKkWtZA6D2Li%2BgNvx%2Bt08G22nXJNgmDEFmFF8VDsNYB7bpoRYdLdlIme4iYFZuFt5IT6wHfVyPr8MeS%2BMmLYeeVfq7rOXIJz9d1JdM6Y%2BL3RZ0wC4B&X-Amz-Signature=1a6d40d3d615030da017a806b10de537ba5fe64547cc2b0c21272cad369fde2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JM52EXJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6SNEvRM0LhuJLLxcwgs%2FT3V%2Bd84eXddKtZivrMS1GRAiEA9GsF6XvhseCYuOx0DRUE1F1ivkNVThpHQN4G%2BbamLakqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxJty1m4xTaFARUuyrcA5xNrkOU3fBMcZ5gyatjgv4Hd0Ae8VTlxuLmgrTLP9PKI6Vt9UXfp%2FJk1J0eF4wrUJuq7zVJpm%2F7OVON8c4G0%2BIby0YC8EHgY7banpK3GAuvpSG6u4LniEluSvG9j6W2C1YaWDAHxQ4B0U6csLJ%2BTAhUjWtttJCOdtbiQ9fM8f%2BTZfnNH%2Fxg6k5gSFbPvxbubfYhbtyh%2FZsZSlbNIcr4%2BRtMUoGdeLo%2Bb824Ffsdj3ZWBunG5v9wBvhPsWYbPMgn6pr4kGJLVWfne%2FqxETig2FwF08oFNN9n0IeMwmk1cTkC3pMTDEBwkRf39P%2FuQIyCjmvFjf0CfcEId4uiLESGchSXNdNY2ciqSqLOfXu3b7tkp%2FH64UhS%2BU64z597JCzGX5XnIJe8BRCUFiFxW0Z%2BYTtVYX%2FJm7lIE2AQziBHtOB93X558LLZhOBSR%2FAw4We3y3Noy8hdibJpQZNasB05nAiyGJUrN2HxDLX3Q5keH8APMJDjMF34gOZLFWqlEjtO3oc9guW4xlQRnq4%2BbMOBm3xg0aWUicJKtIEbqssYP3grd8f1Cou7zN0DCm8BMxAhUDgQewGwS5Y9V%2BqE5nm88BMCigDLRLHJThKg3ezVzo3qMItudv3t0loRdmgyMIf%2F8bwGOqUBrOh8DA2usk36vLGspSHveZlcLbldLQyeZMFCIVFRIruIi%2FnOW4xgK3Vp%2BDQliovsHIOJ%2BjlJiZloG%2B%2FO3FWVBoSGgbRS9TP4AHZy746K1sQLzv7Rh6RrVZVc3p8r9UvcLZ8NZdtCKTuTFOYQGlCTVchprbdpTMip0Q4Q48UnT1dj0ridavo78QnpMkz1Ebo228XC%2B2BdkrRPwT2XRUxZMY3RmGen&X-Amz-Signature=d32a75c090b28c81469f95f525bb11a093f7e456b3b85937eb03d32c8ee8953f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRBFGMGL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4wvVD8PftLk28yejZo2BP3KrllAD%2BtU9%2B%2B%2FI%2FzmjwnAiEAzx%2FxIHmSa39yY%2BBfe9Ce6Uzi5Y59E856%2FwvgGY7ZLbkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2J2pHQad4mHSrdHSrcA4kBrF%2FUiOhNKb455eZ6u3FZrtB5evJr8RK%2FPerTFJR3OJOJ4pYqObK11i9NlbqKGqi2tyiqkHS1hhM2KCR9FfqoIKLyv2iIISySD9e43uTl5pg81qti0XGv8qde4ey%2F1tFwwAqo1mHTKZt0tEGyzSLbOhbKR1k06LK%2FsYG8HRLQSm430NJdo%2Bff1O%2For%2BTOi0wPAM61UBQJcmnb2Y7tN6UJ%2Fv9QbUVFJO8%2FituZG6il6ckrGX3CLSxxyuY76gIr6q4RyW8tcgQ0JT%2BlCxk7kGSrqVupq3iirTy%2BdlEk6SKgHpeBIy9vWJJW2FuHEIjWe63lmPiHzi%2BqVf4pSEkAQTDQ63zzog8%2Fu4NvLekyqqfDw0KvjCBRoT%2FWlY%2Fj6FI4eRDu5A0T4W%2B%2FloMjLGbT2IYrMuqrDkM1WR7anR7TBqjOgGEWSCAVXuI7RmN2VxxJctJ9EMnFPd2pWr6vUZ7Fcs6gJ8uo8289pUtVRtyaaFX%2BEAs5j3CX95vKe2zvnJ58pgBRMGQa7emDfLP9EwXb4z%2FOSd%2BE8MwikBrEBv2IAMKqrgEwq6g2kQrws%2Fj3jSFHZ3aTc3hUfKezc0iPueZlpgEFT4l%2BDw7zUBtnvQZOkgb7CX4H1XKR2DpL5c5GMKL%2F8bwGOqUBrLqv40yzj1ma214LaxLhyPaNt%2FRLts1WDu%2BqOYDmOorkXdQFYnmXsixDJec%2BoJ4KSRmA4YM6S6WaiWm%2BNT7gHWTpb%2BDpnRti1YCxmCijEP2rq%2BPkEzPtDtZZv%2B3mtpqMHksr0RxPmARdhYPT23U4gOADLeuFRympgKV%2BRgM4s8OrDxPwNtkrKpxyZOBa0hqYS1%2BneJSjxloHSHGKnKYs%2F2BsBCnx&X-Amz-Signature=dc41fd0de7333bddf0d13e5ec951fcbca03ee8f80705776a6f000010b846df66&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
