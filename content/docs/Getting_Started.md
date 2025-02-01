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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C7ALVDE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZePLh6cmr30ZD4DaRkoJkvxNluBNETfe5LaIxJ%2F6wGAiBiPbxY%2FUOTem4230aJ3UuzKaFhiXDDNfSbtCkSIfirkiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnXleOTsLvPV%2BAlIrKtwDrA3ISo91hslGJqTzsOMlbzldhkJ065Y1E3wvQTZFYWnn7yer0Dzzjf0i4aVRpKk8oWoNbHXlsoWy93oDb2nq90sV%2B%2Fd5bWW%2FTMW3Ijw8bqDbokCXInhpx%2FLtHYcM4g3RA4rMqHvbKb2hBqz%2FeMKwgA6Dbn2OHHNJWp1jD3nbdKzrCGTOKMBWn6k7jfszbJAKZU%2F7IXX71I4D%2B1%2B3buGxHLtwo13JUfh0NWt67Q%2BDtMwn8q%2BvKq%2B%2FRlltaaJCFJv6h%2BB5VrXN1KUKSvfCN%2FVBz8RVid8rtQJqqr9FK21HNOe3wrh9KVKnBA3elsfB4VKa76%2Fii17EiHf2q%2FnKPYSgeNeKtYQnRToqpU6shj42d8u8mEhylQ9H5Jw1N%2B%2F4ILmHSKwSgCIQfn3f8PziR8dN9hgByPGslxcHnJMtjNujBcQBCNFBAIHLEWEi3d5IJMS2dmJRYuq9HD4HX18Cb9loM2hUDon82mKBgud0YzdqaOnp4PmQ2UwCvXlt9hnrvdxW1Bg7IqZFIo2A5VRqFXy02Mv12jV1w7fao%2FN1gDU6DG1zaKn1ExhC4Fro1v7p0YRQsh%2B1tmxN6vqxnhh4%2F21BOlmeeYwtq4HG3O%2BbVeuup5NSYjgtvMDRFgqODIIwk6b3vAY6pgELuAzyE06FiYm5habhLhxm9o9yY39TVWhUYwwJYQIay3a12Dt7KxwruT4hyUlU9hILglu2RI40jZA0bxJ8zI0xXFChcunlKIHcD%2BHr91SOQT6VSH9d3cwRbJN%2BpFVUKeF9cKP7ufVZkZ1GNW%2FDrfbB2e9h50l8cXpw4OHf6ooegRsMHZ2Vn0vEB1j5RQanK68N%2BgMIfbl3tDvqCPdcI6BU9U90KfnZ&X-Amz-Signature=dffef85cb33d610bd9c0e491f7299c3ae7c267fe3adffa0d9e20827e56ab672c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C7ALVDE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZePLh6cmr30ZD4DaRkoJkvxNluBNETfe5LaIxJ%2F6wGAiBiPbxY%2FUOTem4230aJ3UuzKaFhiXDDNfSbtCkSIfirkiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnXleOTsLvPV%2BAlIrKtwDrA3ISo91hslGJqTzsOMlbzldhkJ065Y1E3wvQTZFYWnn7yer0Dzzjf0i4aVRpKk8oWoNbHXlsoWy93oDb2nq90sV%2B%2Fd5bWW%2FTMW3Ijw8bqDbokCXInhpx%2FLtHYcM4g3RA4rMqHvbKb2hBqz%2FeMKwgA6Dbn2OHHNJWp1jD3nbdKzrCGTOKMBWn6k7jfszbJAKZU%2F7IXX71I4D%2B1%2B3buGxHLtwo13JUfh0NWt67Q%2BDtMwn8q%2BvKq%2B%2FRlltaaJCFJv6h%2BB5VrXN1KUKSvfCN%2FVBz8RVid8rtQJqqr9FK21HNOe3wrh9KVKnBA3elsfB4VKa76%2Fii17EiHf2q%2FnKPYSgeNeKtYQnRToqpU6shj42d8u8mEhylQ9H5Jw1N%2B%2F4ILmHSKwSgCIQfn3f8PziR8dN9hgByPGslxcHnJMtjNujBcQBCNFBAIHLEWEi3d5IJMS2dmJRYuq9HD4HX18Cb9loM2hUDon82mKBgud0YzdqaOnp4PmQ2UwCvXlt9hnrvdxW1Bg7IqZFIo2A5VRqFXy02Mv12jV1w7fao%2FN1gDU6DG1zaKn1ExhC4Fro1v7p0YRQsh%2B1tmxN6vqxnhh4%2F21BOlmeeYwtq4HG3O%2BbVeuup5NSYjgtvMDRFgqODIIwk6b3vAY6pgELuAzyE06FiYm5habhLhxm9o9yY39TVWhUYwwJYQIay3a12Dt7KxwruT4hyUlU9hILglu2RI40jZA0bxJ8zI0xXFChcunlKIHcD%2BHr91SOQT6VSH9d3cwRbJN%2BpFVUKeF9cKP7ufVZkZ1GNW%2FDrfbB2e9h50l8cXpw4OHf6ooegRsMHZ2Vn0vEB1j5RQanK68N%2BgMIfbl3tDvqCPdcI6BU9U90KfnZ&X-Amz-Signature=5482386d1a7e234e8b474e85cd44fe0a194f741021ce3cc9ff26d76a910d3532&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLJKGW3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeOmtlWLuSR2%2F%2FpXVFQLB0qEGZrIyVOcvHu60BORlBQgIgCABlRdCWZX3tYOndaDDLZ2DEW4OBeNh%2BgUsucFehHGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FRCHfFv0lJBHnx2CrcA3R1HDNcfaaITHFrFhQ2I0tUCEvI8HWWHqDVQ1BvvmHJPdA7nDVM4FO2o1R4hl7TgZJOXF8qlma8csQUeMZWkrWmrxN5wMEPWe1RJHtUtiVJLufQ9SkATgbxqMyHnTF3fojNtCdmbLCn1QRXrnOIx5roBvVQb6BmvANX0XR6bsBNeS0kHp6Ee1X5PNakSOqqMAxvDqHa%2BXp0Gm3oG8id%2BxyKGYpYj%2FGemTuHHLr2gnaPUy6mRuM59oT4AWBJx2qviSl%2BkZ0nA%2BZjcVyuln1Q5f%2BGlBCCwmd%2BSHIssL8%2FlHqAND2B0fNk5vCx2%2FFXH8kToTnumqwstteQmJN6LK4IibRo6dT7wVE%2BMsuEX0dDeZlBM7Atz%2FgUxZsEZzveC5xNspECcELv7SR36h2b08SH8kYpg4LsIDig9v5fOdnMR%2FhkRpOb%2Ff4%2BaFgG%2FY8bUbAqYixQUoT0gVhMjvYZl8mIGcGvAAczdcHQiRc3JaweRUWtYeoBVKS03fYkPqvFiyZjOMz7mJ2XPZUTiGUkBG8KKdBjUY2RQasX56V856CEzC2%2BsjcDp1wMR03U3ertSpxml4%2FIhJ4P3NU3q1Lz8aFHi3ZNJwhrqPv0ID59rfXRA%2BS7AiRF31ctow2WlAcjMNul97wGOqUBFOL7Oj8%2BjLoHS3r9D%2F4HCWzennDYhTWRE0Qg%2F6HV%2BHrGtn2ZrGTTLLxH8amKStsA7Uxh2G2YbdghvCfDvNZSzOrrDE7WBOTXq028qe3F5mdAX%2FrV2H%2FRtk608iVRnVwrvT21IE%2BC2juoUjiUJAc8Qms6x63gXyo4gDO9a3M5tzbbc5DdBQmNo129PlNnOffVcSU9LidvRO1WqgMIvhLoD3pyxZJt&X-Amz-Signature=f59d27311f3412635343a80a4a2e7c9540430349d4dfc20e9fc02cc6f900eebd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667COESN4N%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNHXunpueq8NMQiKRgxJ%2Bb13oWU3YVmeDhonhqAyPLPAiEAyUl79B0NigQIm7MID6qlG98d0%2BGfC95fidMmMA%2BTVwkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkBmfF3vFY9MPTELircA7ADkMr0efp9OZbHnkbPdfSh6c1Zf5mJctj3aUJ25yewQCmF8m3IPJynSa2gPtLz3ZrA9eRoa27ncT%2FnDiKn1kzQwW2zmzHMG4jm4h3uBEJaUxI1kK%2BxRptfda70ICoas%2B5%2FLSLlClAAfUGylil3%2Fmnun3CDf1pM9oVswLvEin%2BHfXSR3UgyT5lnACda8iTUuFM%2FBcHn0q53v2gX4AZknIiofbuaYtoF5595o%2FOMzseBMI6pjEjWVswTYKKK5RYu1fdZdsdHBcbmuMSGxxmMTQygwNy1iUZQsyaSy9PfHMCTMnogiZqPNrEX2jQqniOvY0uAk%2F6YuBPv0LygEIIUXO%2BpICwCKFrBhTN8W5Nhp9YPv5%2FhXAzuKjowgSyg3g8hsGq4GqJEI%2FhFy%2BroxqERgxS9ko50HOXYLiYFx9c6KaI6kiT8q3e7tbInKJAcXmtJcy%2Bn6ZaoDIisJ12D7WzTjZinnrElIULGRhg2aiN4G54lpyxh2nDQmv4K7nhE6JKK72DdlpSZn%2BokJ0GSJoCXliwyvOogJg1aYidEIhRl9qq4AT%2BDNstu10A68Ag7Ct%2B7WfQKQwVPx5iLwhyCJKBwgXud5CEmKR8atVPEMYsv9cBq%2BOGXgQTwYh44GIUYMOel97wGOqUBLIRL16feW9%2BESOPnbm4mmO%2Be6JJnhIwpertC97sbBo9dtT5yH5TD09Kvn0ms4ykCcjX9nfxPu%2BhY6ZwoJFge76thNSGxkFLXVFknlpDjTalXv8DUyfG22CE2WOy1HVRsibSBWHo%2BD7NaYvbSJaXgqhhb3UyyzehrqRxE9po6sBsIzik0v6Vh4bq%2B0MX6o4PW3sGGdLIfh982Dbix9krjZc0dr2yy&X-Amz-Signature=c76fd7861cb559359a5543e44f784ce90da03aa9ef3247f97f3436fd06530810&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C7ALVDE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZePLh6cmr30ZD4DaRkoJkvxNluBNETfe5LaIxJ%2F6wGAiBiPbxY%2FUOTem4230aJ3UuzKaFhiXDDNfSbtCkSIfirkiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnXleOTsLvPV%2BAlIrKtwDrA3ISo91hslGJqTzsOMlbzldhkJ065Y1E3wvQTZFYWnn7yer0Dzzjf0i4aVRpKk8oWoNbHXlsoWy93oDb2nq90sV%2B%2Fd5bWW%2FTMW3Ijw8bqDbokCXInhpx%2FLtHYcM4g3RA4rMqHvbKb2hBqz%2FeMKwgA6Dbn2OHHNJWp1jD3nbdKzrCGTOKMBWn6k7jfszbJAKZU%2F7IXX71I4D%2B1%2B3buGxHLtwo13JUfh0NWt67Q%2BDtMwn8q%2BvKq%2B%2FRlltaaJCFJv6h%2BB5VrXN1KUKSvfCN%2FVBz8RVid8rtQJqqr9FK21HNOe3wrh9KVKnBA3elsfB4VKa76%2Fii17EiHf2q%2FnKPYSgeNeKtYQnRToqpU6shj42d8u8mEhylQ9H5Jw1N%2B%2F4ILmHSKwSgCIQfn3f8PziR8dN9hgByPGslxcHnJMtjNujBcQBCNFBAIHLEWEi3d5IJMS2dmJRYuq9HD4HX18Cb9loM2hUDon82mKBgud0YzdqaOnp4PmQ2UwCvXlt9hnrvdxW1Bg7IqZFIo2A5VRqFXy02Mv12jV1w7fao%2FN1gDU6DG1zaKn1ExhC4Fro1v7p0YRQsh%2B1tmxN6vqxnhh4%2F21BOlmeeYwtq4HG3O%2BbVeuup5NSYjgtvMDRFgqODIIwk6b3vAY6pgELuAzyE06FiYm5habhLhxm9o9yY39TVWhUYwwJYQIay3a12Dt7KxwruT4hyUlU9hILglu2RI40jZA0bxJ8zI0xXFChcunlKIHcD%2BHr91SOQT6VSH9d3cwRbJN%2BpFVUKeF9cKP7ufVZkZ1GNW%2FDrfbB2e9h50l8cXpw4OHf6ooegRsMHZ2Vn0vEB1j5RQanK68N%2BgMIfbl3tDvqCPdcI6BU9U90KfnZ&X-Amz-Signature=83c79ddeb2f8365f116fe6a54fd0f86c8eb81a8ba369c532cc8f1c1cc2061edd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
