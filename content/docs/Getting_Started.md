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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SGAZCUK%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaaXUyqXtv7sY1lnNNYEovPxq7TrblxWWqpOjTHvhd2AiBHbjEwIN%2FI4xpfeCWIk4%2FT9wEvX4MPPYHqKlBdyUAufyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMqNaz6PeJqsLdAgveKtwDb%2F1YQlGhjk5OAhYjy3HSw73P%2B2qrcN5wNmP42zz3X%2BiaFP6MAyXo1Tx7PA5nn2dP%2FxOxCoBkFpuKR8DpkF0u%2B%2FoxYAyDSEALkDE%2F%2BE3TBAfygPDgrZ3bJbgOlcVVxGW9P969sFpc49DxRXpqhUvO%2BxLSoVKkGT3iK01i9t08jkKXrn0zW%2BR4lvQlxtzhHTS7qaGHm4CImRIJZr%2FpfzPGMEVeqZ1q82jmMccOIrzxKqSM8lmiSWd45scTql9Y1rPYJDqh9TsUVxHDvdhhmj9WTKJp0ya9UZ4X3OiM1fARFgSSoy%2FMqC9X5Fd7aRl9RqzWiK%2BkMRwkCKm0c39ISZzh71WBhdIos2HA%2Fylgn%2BEzd%2FYQG087GhS0Cm%2F1fK2rukt7djh%2B%2BoPK%2FPq4oS2O0usQzIr3mS43AcGi3bgMejUUdlCEi5nSmRLN%2FTvFm4eTL%2FHwhTGTkx0ntwf0S2%2BGCt9ozTjcWFQWCIBcLqAUpSh4lipMtcovFni4hVZdMwqJbNHUH1lGeEXYjw1oiH9BFvVXI47zsBGL3fD8mQgo%2FKXEZQpKUYZ%2FOw73kV9wxQBzs%2F1J7zbi3ycm%2F3DFSu7LCc8Upani6wUHJd35j8Fa4FjD%2FXyk5uFCrBtZiQhghMMwx9yOyQY6pgFjBlRCuP%2F2HEdIkMHkIoGcXeCYfgf0Q0KDRZ3rubAstaUlwE2Og1H9N1NMyD8EbajhNJ5%2BVQtB9fySEj2%2BS0M1OSqH5S6PSFBk1IydCrIRD5fBoy8bM3YDd0jSDVC5vsNWHMyXVhfnlT4DM2UpahhMfd%2FnXI6YvXYfZA0QyJraQp2vnioFnxrzuTXm3z4vCPv5FpgTTrNlePiL2CeqjVHLNPYTK1hB&X-Amz-Signature=9264228bd8aa842cd551523c0d89d262be93ba32c55ee3f3da7fb5176d87697a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SGAZCUK%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaaXUyqXtv7sY1lnNNYEovPxq7TrblxWWqpOjTHvhd2AiBHbjEwIN%2FI4xpfeCWIk4%2FT9wEvX4MPPYHqKlBdyUAufyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMqNaz6PeJqsLdAgveKtwDb%2F1YQlGhjk5OAhYjy3HSw73P%2B2qrcN5wNmP42zz3X%2BiaFP6MAyXo1Tx7PA5nn2dP%2FxOxCoBkFpuKR8DpkF0u%2B%2FoxYAyDSEALkDE%2F%2BE3TBAfygPDgrZ3bJbgOlcVVxGW9P969sFpc49DxRXpqhUvO%2BxLSoVKkGT3iK01i9t08jkKXrn0zW%2BR4lvQlxtzhHTS7qaGHm4CImRIJZr%2FpfzPGMEVeqZ1q82jmMccOIrzxKqSM8lmiSWd45scTql9Y1rPYJDqh9TsUVxHDvdhhmj9WTKJp0ya9UZ4X3OiM1fARFgSSoy%2FMqC9X5Fd7aRl9RqzWiK%2BkMRwkCKm0c39ISZzh71WBhdIos2HA%2Fylgn%2BEzd%2FYQG087GhS0Cm%2F1fK2rukt7djh%2B%2BoPK%2FPq4oS2O0usQzIr3mS43AcGi3bgMejUUdlCEi5nSmRLN%2FTvFm4eTL%2FHwhTGTkx0ntwf0S2%2BGCt9ozTjcWFQWCIBcLqAUpSh4lipMtcovFni4hVZdMwqJbNHUH1lGeEXYjw1oiH9BFvVXI47zsBGL3fD8mQgo%2FKXEZQpKUYZ%2FOw73kV9wxQBzs%2F1J7zbi3ycm%2F3DFSu7LCc8Upani6wUHJd35j8Fa4FjD%2FXyk5uFCrBtZiQhghMMwx9yOyQY6pgFjBlRCuP%2F2HEdIkMHkIoGcXeCYfgf0Q0KDRZ3rubAstaUlwE2Og1H9N1NMyD8EbajhNJ5%2BVQtB9fySEj2%2BS0M1OSqH5S6PSFBk1IydCrIRD5fBoy8bM3YDd0jSDVC5vsNWHMyXVhfnlT4DM2UpahhMfd%2FnXI6YvXYfZA0QyJraQp2vnioFnxrzuTXm3z4vCPv5FpgTTrNlePiL2CeqjVHLNPYTK1hB&X-Amz-Signature=f09b6818965a334c8c705f4b3252c12086d7f0812a02e5dc4dd82d2d9f914c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SGAZCUK%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaaXUyqXtv7sY1lnNNYEovPxq7TrblxWWqpOjTHvhd2AiBHbjEwIN%2FI4xpfeCWIk4%2FT9wEvX4MPPYHqKlBdyUAufyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMqNaz6PeJqsLdAgveKtwDb%2F1YQlGhjk5OAhYjy3HSw73P%2B2qrcN5wNmP42zz3X%2BiaFP6MAyXo1Tx7PA5nn2dP%2FxOxCoBkFpuKR8DpkF0u%2B%2FoxYAyDSEALkDE%2F%2BE3TBAfygPDgrZ3bJbgOlcVVxGW9P969sFpc49DxRXpqhUvO%2BxLSoVKkGT3iK01i9t08jkKXrn0zW%2BR4lvQlxtzhHTS7qaGHm4CImRIJZr%2FpfzPGMEVeqZ1q82jmMccOIrzxKqSM8lmiSWd45scTql9Y1rPYJDqh9TsUVxHDvdhhmj9WTKJp0ya9UZ4X3OiM1fARFgSSoy%2FMqC9X5Fd7aRl9RqzWiK%2BkMRwkCKm0c39ISZzh71WBhdIos2HA%2Fylgn%2BEzd%2FYQG087GhS0Cm%2F1fK2rukt7djh%2B%2BoPK%2FPq4oS2O0usQzIr3mS43AcGi3bgMejUUdlCEi5nSmRLN%2FTvFm4eTL%2FHwhTGTkx0ntwf0S2%2BGCt9ozTjcWFQWCIBcLqAUpSh4lipMtcovFni4hVZdMwqJbNHUH1lGeEXYjw1oiH9BFvVXI47zsBGL3fD8mQgo%2FKXEZQpKUYZ%2FOw73kV9wxQBzs%2F1J7zbi3ycm%2F3DFSu7LCc8Upani6wUHJd35j8Fa4FjD%2FXyk5uFCrBtZiQhghMMwx9yOyQY6pgFjBlRCuP%2F2HEdIkMHkIoGcXeCYfgf0Q0KDRZ3rubAstaUlwE2Og1H9N1NMyD8EbajhNJ5%2BVQtB9fySEj2%2BS0M1OSqH5S6PSFBk1IydCrIRD5fBoy8bM3YDd0jSDVC5vsNWHMyXVhfnlT4DM2UpahhMfd%2FnXI6YvXYfZA0QyJraQp2vnioFnxrzuTXm3z4vCPv5FpgTTrNlePiL2CeqjVHLNPYTK1hB&X-Amz-Signature=11c0cf769d74901b657297a8c7ccff3da101ced41ffb32c786166502ca5b8492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HFF4CUM%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnscdQHmv0ijURZ%2FVD%2F1S0vi%2B%2FADkVb0HVxqTy%2Fdot4AiAGDb6XMfVmjIdfi4iVN1GScj6JRUNqq%2BGu0IM%2BhQuq1yr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM%2FPExiihm%2FFlhnZ%2BPKtwD62RYEgHBbOEtVUS%2F%2FIc3Dz7Xz6MLxkh6AC%2BCsz9mU4%2BAek4qDW0v0SvscXs5kMCE4n%2F5SYpEVbX8L95afmEOOVRAWXF02Y%2B5rKqpgRjHwvZRywkPLXO6nSq58pKnOIvhxDPZHAyKLF%2FvDziRWhsp1dfPFkuyKSjq8qDb3RakG%2Foxc0%2FvNFRMspJeROraWTsX5xLvONlk2nScPF2K01XDUxx9JCg7NSdyunPWPdxFS78wmid39WKiMV2BZtmC4e8eod24H2Q1VPQnPkUzoFPrtUyTEn0DPnOmFIP%2Fqg3dI5Mief60yCHVVsr4n18FyavrMDOCiNbMwfsGvrtfGxJga9XScJi0AcoIehVL9AQZaY4El6%2BaNrc%2FoNsmb2EtYuVn0%2BOC8sdQo3FxGkiQYmyOH%2BHV8DL0xW5M%2Fb0LvXH2Dt1St%2BXvZodDC04Du4%2BzCkxabFSDhsta2h%2BlxWB6reSROQulOVTCMxV52zuokrToq9RjxLUjbQQeeIIsC6V12yO8f5ctivXAEVldjjx3zjffV9Mkr7v1KaVPBvDv4st0CLj6yZNqntAsF3uTo369W1l78WkzP7mKx%2F1Je5zsfmdaAigxPeomc9Gyj5N9ryp7jfrCn%2FZZgVQX3NSEv1owvtyOyQY6pgGHw253ihRhlJhzgHUMc2SSo6E0tcrGoo6jA0%2BgxdMs5MQSjUED3XJ4O3nU%2BOXETERtAFMEDTVu5Aa%2BW8xs47QXoGA9ZE7WnNX9WE076o8bfTTcvMsZVrCPesoPXPVXzT21MVDzS3lUagMBXHmj58YflgWp5KOZStpZRz5174lt2co%2BEq9ZNVjfPskG%2BDasfCT%2FwfMkELHtyLEQneU0IuPnZYvs9gG2&X-Amz-Signature=3eba14bc96be2425b04269f7f756d541fa4bcebfc8de1a2e2ed3214ec36c7d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CAQDC5L%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkzI823T01ayQuKx2rAoHv%2BL%2BMWORdQTrCwRU1IQM%2FeAIhAPq8wsgl4QfiwCvy7kGwK7f%2Fqc3reRA4T5wmeij4mkCdKv8DCEoQABoMNjM3NDIzMTgzODA1Igx9hXS9I5GnhX7Nlv4q3AM8DXrkXBgNUj9m2Te0sWiG4xwwvc5vjk2l%2Fgzu9oBCCP6FGajKqp2MBUVtcMfPESqvtyZiASh7C8HGNTfDVR%2BD5yyp%2Fxtx%2BIiZ3s7PoM%2FNpUox7kiUsJ%2FBSpCdXTEFS92ncNDCqHJ4ytGlm%2BnY3ytT0gv%2FLnoBCVcHyMDqIspDEeh0VP8AKTlzD37i%2Bvw%2FGlVSK0fHIUCCCkBAq0%2FmfWKIy9ISSy1zRxb6MC9MBHpeo8VidFYdUFeEImSSla4QLsQ1V12wyZvLRP1bL1qr2eXI2Je6vbHpihrtVeUYoHA9RPyqMLiyHWUx2hvDkHnXcDQLMGENHoJbynKUXzL8RD1OHKSJZEt2PrJ2l3aeY5ExnHzjQar%2FKjCEQ3ZV4QsNPCZUGFhDmmvg%2BtIwYp7D6l8aXsq8WAHU%2FUcULFE2r39Kwi6bmBbguAsK0GF0d8%2ByQT%2FE4mJRkwH86NUedfRAWrL4Ax1TGKzH4sA987Hw3dQhItyOHs2%2BILs8%2Bj3y6NwxV%2FgqZ8uW7Kn7nbzfiMf%2BODpUsGklJRMOSjXXzNwlfCzc3TZlc2%2Bmgr3vs0o0RlLsMTzPiPnFuach5uEaFl%2Fy5ynnyWHwihqYypDWxTvHlY36lSSFAF3ZKPJLgyMlqTD0247JBjqkARy8a3i1egrhTKSXC3d3XRJNjq%2F4Va7jQ9iAwTvdQ9n1L7Exo8Ari7z%2BNgv2IX%2BB1Rc7NIEQfrWIYFeS2RqQQvTXA9uoz7NwE0OC4Rl2mBIN6QPcOyUvTbRmI7uGfsQmzwbjuMhQAMXcNT%2FZB5BnbLfkNZNcuJsCdVKCqZBl32%2F6pWMSESr1Of6A0MTIBsAB8aHVwaqTydr3ZwH0ZeXkGMpWdbjG&X-Amz-Signature=46b361c491b09df24261a9722d69b76ea907904e023f36d331fe77e8ff12fb5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SGAZCUK%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaaXUyqXtv7sY1lnNNYEovPxq7TrblxWWqpOjTHvhd2AiBHbjEwIN%2FI4xpfeCWIk4%2FT9wEvX4MPPYHqKlBdyUAufyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMqNaz6PeJqsLdAgveKtwDb%2F1YQlGhjk5OAhYjy3HSw73P%2B2qrcN5wNmP42zz3X%2BiaFP6MAyXo1Tx7PA5nn2dP%2FxOxCoBkFpuKR8DpkF0u%2B%2FoxYAyDSEALkDE%2F%2BE3TBAfygPDgrZ3bJbgOlcVVxGW9P969sFpc49DxRXpqhUvO%2BxLSoVKkGT3iK01i9t08jkKXrn0zW%2BR4lvQlxtzhHTS7qaGHm4CImRIJZr%2FpfzPGMEVeqZ1q82jmMccOIrzxKqSM8lmiSWd45scTql9Y1rPYJDqh9TsUVxHDvdhhmj9WTKJp0ya9UZ4X3OiM1fARFgSSoy%2FMqC9X5Fd7aRl9RqzWiK%2BkMRwkCKm0c39ISZzh71WBhdIos2HA%2Fylgn%2BEzd%2FYQG087GhS0Cm%2F1fK2rukt7djh%2B%2BoPK%2FPq4oS2O0usQzIr3mS43AcGi3bgMejUUdlCEi5nSmRLN%2FTvFm4eTL%2FHwhTGTkx0ntwf0S2%2BGCt9ozTjcWFQWCIBcLqAUpSh4lipMtcovFni4hVZdMwqJbNHUH1lGeEXYjw1oiH9BFvVXI47zsBGL3fD8mQgo%2FKXEZQpKUYZ%2FOw73kV9wxQBzs%2F1J7zbi3ycm%2F3DFSu7LCc8Upani6wUHJd35j8Fa4FjD%2FXyk5uFCrBtZiQhghMMwx9yOyQY6pgFjBlRCuP%2F2HEdIkMHkIoGcXeCYfgf0Q0KDRZ3rubAstaUlwE2Og1H9N1NMyD8EbajhNJ5%2BVQtB9fySEj2%2BS0M1OSqH5S6PSFBk1IydCrIRD5fBoy8bM3YDd0jSDVC5vsNWHMyXVhfnlT4DM2UpahhMfd%2FnXI6YvXYfZA0QyJraQp2vnioFnxrzuTXm3z4vCPv5FpgTTrNlePiL2CeqjVHLNPYTK1hB&X-Amz-Signature=66b400fd36b054b0458cc1f4931bec8bff4667f32faada50280995dc3d309229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
