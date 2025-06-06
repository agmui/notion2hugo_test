---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665URDIQLX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPS7d%2FDFa2Gq%2BCNFC898Xtz%2BnWiI8zUoONKkTHKFn1TAiARt%2FjLkbEL4pcHP2PdqGE7HVn8ZRS9Z7WSPi5gvv6r%2BCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMUMrjL1CLnFXcF%2BvrKtwDQiQF%2FYCqaQ56VbkEOoyn0ZihxVlRX5C2Gt1Jgw1q3QDhHPjLoLEGxoUyS0KJJNb9fz3RG3UgWhiVR%2BU3yZ4mClYZgNRtUXVPwl5CSzqHDwcbVS5KgJBRt3dJmDxaDbjoaRo1rm9TAXUxvsWkwXG91RCm%2Fuwc%2Bp4gPb6ynxn0pBSjIABkiH2j2bxH8EPGk287bm%2FAIEMpBerNNDcXk8BOhgPL0nx0QeeGp2GmPSVljpKoxe6NWcjWdAgrbMH68rtu4o9n0Y0g4jEvdGnJ3eF25quK6Q3kCQY%2FPmcyf8MATas%2FEKH8LS89bLjx%2FTsHqQcVKbvLuOfd3lubcubDfZWVTN20jXWbktORYJLzmBAu%2BQYqpkw8cLJAiexMvt0j6Ic%2FnvX%2F8gKHBz24ShYz26T9pk%2BIqM3%2BuMdbSPjd6frDimwK%2Fhxi8djcRqDDHdrDyiap7CB%2BxzgRfOT5Rrj2ZRWnr4kpxaoVUnJ8yyWLPhM1r1rvztuWXpnxb21oUpE5dUnNiud7ihRsVY5ZSFg05%2FA%2FBH79GE3KrfYSID%2Fx5FPPbudDAdaakw23E51tvbHzv2uC299wUQVRdj1PdqO1mfK1ExGMp%2BtLlD12vVdj8la9uYWcu1PF4ziJ286uc4cw9ZGNwgY6pgF1z6qWyY9qm59jHIOYPFE202h0HLU8SmHsJo6RKlfdScPd%2BmPr8mqZ6UCh1bDI3cOkwZKGp6y6ogvtQQUF0EmBLl81FAPVTogBaExbk%2FKQQ5J5vQXFDpLnoyDvmbvShimanLCWXjzTX%2FAXCgbcawF%2B01M65o3dHzzNqisLaZVdkPwdY4CX4C%2B5E2rl%2BcmouZk7EuKwDiexUwAb%2FpppJb8kglsMQN77&X-Amz-Signature=60219d09964facdde7e236f02ee3a0284f47e265eab47f4e7f03d0f1a4c34459&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665URDIQLX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPS7d%2FDFa2Gq%2BCNFC898Xtz%2BnWiI8zUoONKkTHKFn1TAiARt%2FjLkbEL4pcHP2PdqGE7HVn8ZRS9Z7WSPi5gvv6r%2BCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMUMrjL1CLnFXcF%2BvrKtwDQiQF%2FYCqaQ56VbkEOoyn0ZihxVlRX5C2Gt1Jgw1q3QDhHPjLoLEGxoUyS0KJJNb9fz3RG3UgWhiVR%2BU3yZ4mClYZgNRtUXVPwl5CSzqHDwcbVS5KgJBRt3dJmDxaDbjoaRo1rm9TAXUxvsWkwXG91RCm%2Fuwc%2Bp4gPb6ynxn0pBSjIABkiH2j2bxH8EPGk287bm%2FAIEMpBerNNDcXk8BOhgPL0nx0QeeGp2GmPSVljpKoxe6NWcjWdAgrbMH68rtu4o9n0Y0g4jEvdGnJ3eF25quK6Q3kCQY%2FPmcyf8MATas%2FEKH8LS89bLjx%2FTsHqQcVKbvLuOfd3lubcubDfZWVTN20jXWbktORYJLzmBAu%2BQYqpkw8cLJAiexMvt0j6Ic%2FnvX%2F8gKHBz24ShYz26T9pk%2BIqM3%2BuMdbSPjd6frDimwK%2Fhxi8djcRqDDHdrDyiap7CB%2BxzgRfOT5Rrj2ZRWnr4kpxaoVUnJ8yyWLPhM1r1rvztuWXpnxb21oUpE5dUnNiud7ihRsVY5ZSFg05%2FA%2FBH79GE3KrfYSID%2Fx5FPPbudDAdaakw23E51tvbHzv2uC299wUQVRdj1PdqO1mfK1ExGMp%2BtLlD12vVdj8la9uYWcu1PF4ziJ286uc4cw9ZGNwgY6pgF1z6qWyY9qm59jHIOYPFE202h0HLU8SmHsJo6RKlfdScPd%2BmPr8mqZ6UCh1bDI3cOkwZKGp6y6ogvtQQUF0EmBLl81FAPVTogBaExbk%2FKQQ5J5vQXFDpLnoyDvmbvShimanLCWXjzTX%2FAXCgbcawF%2B01M65o3dHzzNqisLaZVdkPwdY4CX4C%2B5E2rl%2BcmouZk7EuKwDiexUwAb%2FpppJb8kglsMQN77&X-Amz-Signature=00deb17339fdd20e7db4b3272e5a435635d715ecbb51071ee80bb9f6db8ccbd4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665URDIQLX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPS7d%2FDFa2Gq%2BCNFC898Xtz%2BnWiI8zUoONKkTHKFn1TAiARt%2FjLkbEL4pcHP2PdqGE7HVn8ZRS9Z7WSPi5gvv6r%2BCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMUMrjL1CLnFXcF%2BvrKtwDQiQF%2FYCqaQ56VbkEOoyn0ZihxVlRX5C2Gt1Jgw1q3QDhHPjLoLEGxoUyS0KJJNb9fz3RG3UgWhiVR%2BU3yZ4mClYZgNRtUXVPwl5CSzqHDwcbVS5KgJBRt3dJmDxaDbjoaRo1rm9TAXUxvsWkwXG91RCm%2Fuwc%2Bp4gPb6ynxn0pBSjIABkiH2j2bxH8EPGk287bm%2FAIEMpBerNNDcXk8BOhgPL0nx0QeeGp2GmPSVljpKoxe6NWcjWdAgrbMH68rtu4o9n0Y0g4jEvdGnJ3eF25quK6Q3kCQY%2FPmcyf8MATas%2FEKH8LS89bLjx%2FTsHqQcVKbvLuOfd3lubcubDfZWVTN20jXWbktORYJLzmBAu%2BQYqpkw8cLJAiexMvt0j6Ic%2FnvX%2F8gKHBz24ShYz26T9pk%2BIqM3%2BuMdbSPjd6frDimwK%2Fhxi8djcRqDDHdrDyiap7CB%2BxzgRfOT5Rrj2ZRWnr4kpxaoVUnJ8yyWLPhM1r1rvztuWXpnxb21oUpE5dUnNiud7ihRsVY5ZSFg05%2FA%2FBH79GE3KrfYSID%2Fx5FPPbudDAdaakw23E51tvbHzv2uC299wUQVRdj1PdqO1mfK1ExGMp%2BtLlD12vVdj8la9uYWcu1PF4ziJ286uc4cw9ZGNwgY6pgF1z6qWyY9qm59jHIOYPFE202h0HLU8SmHsJo6RKlfdScPd%2BmPr8mqZ6UCh1bDI3cOkwZKGp6y6ogvtQQUF0EmBLl81FAPVTogBaExbk%2FKQQ5J5vQXFDpLnoyDvmbvShimanLCWXjzTX%2FAXCgbcawF%2B01M65o3dHzzNqisLaZVdkPwdY4CX4C%2B5E2rl%2BcmouZk7EuKwDiexUwAb%2FpppJb8kglsMQN77&X-Amz-Signature=745c898b7fb1114c06c87d00f39231e88b951219e91a579151acc0a5b63e16bf&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6PRIETP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICixfMqN7XkqNuACXmaje%2Fom0D0ivsR1dphUMmfTjqLhAiBzn61YAh8keIMQt1w8IiL%2Bb%2BaQmoGqzV6SPWR4vIYlryr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMBG4LEMk1y0HWvCWeKtwD7N32G3tXMqxa4j504dbhOkpHnpnvPEd3IK7jkWl%2BN2eC4yaI1Nahhl%2FethrNH5wjHy0ej27WvL8PuM7%2FC4iw%2BR2NP3Dc06OfMj1U6X3MILphqR3QTxcLzGZvk0UlaqoMnZPnlXnCzf9kikBMzKpbWu9j9wxcZDIUPSenlpjTDv2a3CUriB7abhaGM4jD4Brfa5VEA4VRdvnYGUoqLq7DqV3gjt0WPrwyewo0R31YMEjvCfQ8IzTfYI5O%2FPjXaNVF4zUr9kir2i43%2B4DZn1EiIBqufvuaMCdwOlEGM%2FUB7dT%2FWNQfyWnpeVes4gyM9P4FcXW8O3LxDP1%2F9VizyMCdtvEonZkyzVjb8b1j4tHlsEiuwjtWlZPvqsJNkyepBDfwix3f3ykFzGKB2PRcz3f23RjTgxeMhCXY5KSER9rGsoRIkiTojy8ZULJztWmcFd%2BJYFsmqvtVr72ACuuHxNEUkFsAz4LFtza7Wa6degEnSVaHb23LYOr6itJnYzw5LNTM8L%2Fu47WIJi3YOtwXx3l3xYDo%2BVyA8USfjKqwP3NJ6Lvz%2F3DW9A4cIU8G6PBZHhHVvwuFiE%2Bd90FsFuZKjcPt94YimNXpircUmCwxqQphHzFQdDLJ5KdDppdc82IwyJGNwgY6pgEUubLBVgFTxiJVCrP%2F%2F%2FzzW26M6fsOrUMvpFvsvJQbQFMo%2Bmh%2BONsCRo2jcnpjk55qNLzujiMiaZ3BiUHEMvPqxy5X1NDZvOq10jwdTy%2FykLTiXWxClfz0SY%2F%2BQeutvQegGR3szxy6aFIkAgr9pnAEfUzydk8b51XAf2VUi1FIh6KQZxgsjxz62o9BDprNhN3f30cmRRxZurcnsPzVkVaRtC2qFFXs&X-Amz-Signature=58b915ce0093330bd458db7fb13a1968ceb25561e9f364dce665a3697c489983&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWVJS7C%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3xpIXYb%2BlUz2SHFvKe6tsgwSnqCsgJRmThXGoReVvTAIgL%2FxnvNYqzSeDXRuKWWVDswRWB8ENcemziG2YrntfvOwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBac5TPXtI1%2F8gwzhircA4bTN8GbphYOl22wRl11wdc4K0tFnRc1Itss5v8K2HAzhEQn3rVFLti4vQ1aUABXjpA3NyBTZp8vEnu9%2F2lSEhlwwjyP1h5IfJpmqbPDLzR5u%2BZrOYRGDsUPppMuHQfcSq8ORozfmc43Ydt7MzVU5oJVl3uYbb8Gswp5gUBbaNpv90QzLaUFKsmQGI5mESbii5%2Fo8d8BRPC374EeDeCJBqrhz2CFgLimFezKDAv2Ndf84oFqx6yG9waptFCBDly8FSssbVcUnay5ko5HhP1Pc8go63adtilBmflk9IKJShdAcgVUU9MDtnOORaeSu6G0DiRXCzccq5MXs7%2BzGhsmngmeeWEosmraM4nG9aHdNjZjcw%2BhGkuinmaSgkztSAYzCfudVat7TgTPPZVFATxNDzZ%2BK3G8taqtPi4QB47X5ysKXYAobdpWxfWIHqqeuWuNGoBN4IX88so2HJJGZEVSK9mZCt7y3%2FVQUGtebgE%2Fs4SdBGj9hm6LpeAIHVi4Ncycj%2F6Jp0jhD2y5eSja0OUBUycnAhoTDSKyCMeirZ5bXURH14ry7JXhcxrjgFCc1JcXXA15opLEmkd09FBGd0JlWQu7HipB29MYg8Nedij4rCE2LC7Y0wRiKGN4eWKHMKiRjcIGOqUBW9vP%2FW2duN%2FbRM5kYqJUWRY%2FS31XTEJeN2JyqTMLM4JNA%2Fkeq%2Bk1KVPmT1uw%2FW%2FXju1KwiDQTe%2FlA%2F6On8vafLwbkI4PrpJB97MjvANojhO1BB92Xljd77Vm8GEK1p9f%2BHSxyMbKKHC0ywoz1oTy0zAHU81xlRF488pf4iu2eVjCTPjGHcKnCN%2B3rXs5S9OUQMs5yQnYD4CBUc8XrscSuN5Xxu8n&X-Amz-Signature=c2f9f2b916fa3e61c3fe813d8df4ac3b31744456b9e6e90bb32ba49b327d0585&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665URDIQLX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPS7d%2FDFa2Gq%2BCNFC898Xtz%2BnWiI8zUoONKkTHKFn1TAiARt%2FjLkbEL4pcHP2PdqGE7HVn8ZRS9Z7WSPi5gvv6r%2BCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMUMrjL1CLnFXcF%2BvrKtwDQiQF%2FYCqaQ56VbkEOoyn0ZihxVlRX5C2Gt1Jgw1q3QDhHPjLoLEGxoUyS0KJJNb9fz3RG3UgWhiVR%2BU3yZ4mClYZgNRtUXVPwl5CSzqHDwcbVS5KgJBRt3dJmDxaDbjoaRo1rm9TAXUxvsWkwXG91RCm%2Fuwc%2Bp4gPb6ynxn0pBSjIABkiH2j2bxH8EPGk287bm%2FAIEMpBerNNDcXk8BOhgPL0nx0QeeGp2GmPSVljpKoxe6NWcjWdAgrbMH68rtu4o9n0Y0g4jEvdGnJ3eF25quK6Q3kCQY%2FPmcyf8MATas%2FEKH8LS89bLjx%2FTsHqQcVKbvLuOfd3lubcubDfZWVTN20jXWbktORYJLzmBAu%2BQYqpkw8cLJAiexMvt0j6Ic%2FnvX%2F8gKHBz24ShYz26T9pk%2BIqM3%2BuMdbSPjd6frDimwK%2Fhxi8djcRqDDHdrDyiap7CB%2BxzgRfOT5Rrj2ZRWnr4kpxaoVUnJ8yyWLPhM1r1rvztuWXpnxb21oUpE5dUnNiud7ihRsVY5ZSFg05%2FA%2FBH79GE3KrfYSID%2Fx5FPPbudDAdaakw23E51tvbHzv2uC299wUQVRdj1PdqO1mfK1ExGMp%2BtLlD12vVdj8la9uYWcu1PF4ziJ286uc4cw9ZGNwgY6pgF1z6qWyY9qm59jHIOYPFE202h0HLU8SmHsJo6RKlfdScPd%2BmPr8mqZ6UCh1bDI3cOkwZKGp6y6ogvtQQUF0EmBLl81FAPVTogBaExbk%2FKQQ5J5vQXFDpLnoyDvmbvShimanLCWXjzTX%2FAXCgbcawF%2B01M65o3dHzzNqisLaZVdkPwdY4CX4C%2B5E2rl%2BcmouZk7EuKwDiexUwAb%2FpppJb8kglsMQN77&X-Amz-Signature=6a31e56abfee15ddd63027bd48f8e9a418dec0cecd16097ee73b76f860f2848a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
