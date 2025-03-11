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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVH2W227%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCek83MWRCPM%2FnyEXi%2B5xFeNa2yG2j5CN6PU7yieR82%2BwIgDqPzH7UipUjh%2Fi%2BqUBXs6LH2K53XLveT4ioHCdvOfkEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMizLpRS5JwzlXWACrcA4Xd60pWiVDoV%2BIubVfF0CoJQ5DuVKDZxzjmRh0YlDNleFmj%2FYPWfGIenQADEJO7vxCkpJVnPUjb2yfeW2ydsoUp8cboTgSTKykGlA2joH4Q1N7qEBKez%2BHYFstCcwk8Z1bArRyBEf8SICrNutb73pzm8ypQbp13N8YaPLhwtj7lwSAX3ChGP7r%2BzVkgVHVQ6LY%2BFiDZ5V4b36n%2FlkG7fos1wtMUHLN5j6oxmLY7LbcJljzhTj1vKV4nMkodHccCuuvXmK3vokl%2B9j6yAd4E7WogNuv74tWcUIjD7NLQRPc6GuxJiEI6Jy%2Bca5c9%2F0HkRHzZKxj%2F5m4XuQTxlmjmq3324AyI7h%2B2cXEyf1nrdhnukP%2FCGm0TWNFpglcgGrRrly%2FSiSb122k3aei22AR0c8gBeTIg2KwmV1IIF%2FyS4moyUZVxO6HhlSHb6nDkkIJWbMqlXHUFXmFCCIsL3HsNv%2B86EZL6w1DWzefiS3WTEwLXenSWoL99WVl8%2B7oU%2FGKcekLaYHUb3Xef21%2BjhUnSUokvionvyurG8eDUeeIJ4WbMAE4KJBU21ZpcHnzsEXkTIK7GgbU9z8FpGUWcQMqX44GDjLbYA60TB4hDR6X8isN9%2BC7AwL30c07AXwEfMP%2Fywb4GOqUB9KNrFMz37ZCIg7NZC5yc3RhLye5UusXIUis2RdidH6%2FeFa4O58jpj4VDzT86Bb20kBoms69aPzyBvdjz380QI7EIeBAQcceIr2lXkgDFitCWvq1uGYCZSSzYjFSvWBgTKljnGC8Pktiei5EcxOAPxO5ml0KVShY0ddVHKTGZu1nQoyAflp%2FHTLBfWC99yUcrNKvnEUfp3TWVwpkwq%2B5MmKvN0MQO&X-Amz-Signature=8b21a2a34cd13133ca139782fa470acb9b3192aa5707d2e5d962cea97b304270&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVH2W227%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCek83MWRCPM%2FnyEXi%2B5xFeNa2yG2j5CN6PU7yieR82%2BwIgDqPzH7UipUjh%2Fi%2BqUBXs6LH2K53XLveT4ioHCdvOfkEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMizLpRS5JwzlXWACrcA4Xd60pWiVDoV%2BIubVfF0CoJQ5DuVKDZxzjmRh0YlDNleFmj%2FYPWfGIenQADEJO7vxCkpJVnPUjb2yfeW2ydsoUp8cboTgSTKykGlA2joH4Q1N7qEBKez%2BHYFstCcwk8Z1bArRyBEf8SICrNutb73pzm8ypQbp13N8YaPLhwtj7lwSAX3ChGP7r%2BzVkgVHVQ6LY%2BFiDZ5V4b36n%2FlkG7fos1wtMUHLN5j6oxmLY7LbcJljzhTj1vKV4nMkodHccCuuvXmK3vokl%2B9j6yAd4E7WogNuv74tWcUIjD7NLQRPc6GuxJiEI6Jy%2Bca5c9%2F0HkRHzZKxj%2F5m4XuQTxlmjmq3324AyI7h%2B2cXEyf1nrdhnukP%2FCGm0TWNFpglcgGrRrly%2FSiSb122k3aei22AR0c8gBeTIg2KwmV1IIF%2FyS4moyUZVxO6HhlSHb6nDkkIJWbMqlXHUFXmFCCIsL3HsNv%2B86EZL6w1DWzefiS3WTEwLXenSWoL99WVl8%2B7oU%2FGKcekLaYHUb3Xef21%2BjhUnSUokvionvyurG8eDUeeIJ4WbMAE4KJBU21ZpcHnzsEXkTIK7GgbU9z8FpGUWcQMqX44GDjLbYA60TB4hDR6X8isN9%2BC7AwL30c07AXwEfMP%2Fywb4GOqUB9KNrFMz37ZCIg7NZC5yc3RhLye5UusXIUis2RdidH6%2FeFa4O58jpj4VDzT86Bb20kBoms69aPzyBvdjz380QI7EIeBAQcceIr2lXkgDFitCWvq1uGYCZSSzYjFSvWBgTKljnGC8Pktiei5EcxOAPxO5ml0KVShY0ddVHKTGZu1nQoyAflp%2FHTLBfWC99yUcrNKvnEUfp3TWVwpkwq%2B5MmKvN0MQO&X-Amz-Signature=7fadce98078ada4f9839de3fa58e748ab416679b906215f648d7aa552b4ddd4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TEPWSLI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBeUTF0FuVdzPQTiLQIPm0RsulFCBnFZ4FcputlEkXxdAiAbJbvKMCK15x93xVsUyJvfLxvR7NKnc5XLQ6u%2FeClNvSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAArDStQVeCV2R7yXKtwDk1YG0YTWS%2BClQvZsnujTGJ0tIxusLKNxXvkL3bS2S%2FtsU6HBpadG6GfK0Oohgr7nHzScr%2FB6zi%2Bsf%2FCX3HhR4UHIJGpVdZSqgg%2Bj5D5iYdy64M0soiXOSjsIeFmV9dwVYmtIrJmOSIMjBvRGLvjigxy6sb7zZoPz4CEl%2BycMM%2Fng1il3Tpqx1BJyG55G3U9r0mBpHFfe%2B1V%2FoB4yOXbSMSuiyxFm%2By3Z06dWCySEiy03MLvTcO0w%2BfFEwSKweIFi7gQFq3I3dfODTxpNtvkAiaJ5UO7u%2BiDyKJvsy5%2BIvsF01ikwVMAHzyiyhhOXGpUGTP%2F%2F1SWVKOJ9S%2BORWYGzAymYTiu8D8up1fonW5qG4PeaGyh3g4x%2FC%2Bghhos6aLZtGMUeG1kAgG7Z3H3bPNTk3vdTgcqlkcPOsilWBMVCsfiHrxz8kdqoPBbfV8GgmXY4cfzzSKONYGw8HklTIvHezhAk5VfcpOK78YTlL6exIjuRAiEZi6hbla3xPaqrCUqd0miyXxEXWpDKRYwNENB1mSm4Otvy18lqKGbsHgEhB%2FXNb%2BeobB8yLVniOmlcACOYqhnDGmpASOOjvPfjenkq3EogYlOlrhGdpkdO8IFYEsXxGWArb59p4oZrn4YwkPPBvgY6pgEPXGDOD5fR%2FgvpIe2SGGjoSAw5EKr%2BHQnT1UbCjx%2FAvRWyNiSaN0XgigsRYLDGMD5QnpTWWsiJr8eLhk5U3osreqcSBRYpPnWZHM3u6Ntjc13ewxrr55mFxStsHsLT4RX9mOOFC37NRnFuPvRdAaFscNdM2OZsu1CXXW4SBJTqw5Zu3eApl4yLTiSoHzu45OcguemDvTRONHwFCE3kR3WN6vetsEEr&X-Amz-Signature=c644fabd9185d0adedfe239057d6da64a7f1c9fe261213b5bc852e8cc9af8255&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXIBLZHH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCgq0rbJuy%2Fa%2BEIRMyAxp2IbZnYari2YT0iXTadCc2q%2BAIgUI5idz2bjTfFncJ9czUATDvVQdg4t9Z3Wkt69yWmW%2BAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1MIavhjrxoi92OZircA4Xmmn%2BP85IUCapNEN56x1d4uoXQlKm5Y2n3w2ZbdfX4SrOUJ9CCyZjO70LS3CWMBelq7v6V%2B0lfa9sD5fB9o8UgPc4oKPZbCz2P2LeGl7kV%2FD6wX0s%2FU7CtJVL7gtxgzs%2FoWtQ9wmP4igs%2BoTebVsysCVwviW45R0IdrHxOw16PONTf2ICzGYXnRu8w98llQ0CBrHXllICRnHfv0gVVX5toky2c064O1MhkntbqBUPOC0b79eoKRnhDXhVP4E1e4J%2Fzv%2Bt6Rq8aCjs8lIMBPRr5Md%2BDTQ9%2FO18CSWzX71bU4RUuxjHfHGKw1OzZWDx1vUB%2BhPiBYZYeR6R8O3V543YxeIjjwbvrLrEPUbK1ljX3nmO9vXjhu%2FmssKtTyIvqYT%2FIfyuNj%2BB%2Fb11Z2Jl6I5eO0y60bUcIoNjf%2Byncuabk18pA1qgy%2BG%2BRNZqf8Qm0k0R1%2BwafWTkEqCP%2FPO9LFWlBESuYFL7YxJzROqP7g6Bsl4fgpVFvqG3ikBV15QJcE0NqsBGZQhInN8BBOwWrrk6eCdRHX2FbaanKgC9fnXxsmj4pEdbqeUSGe2U6XlctZJhImvuqPS67CWWre7KXQGpPXClbmJeTJajb8YCfX7pW0yAS2ZWqOXXhmnWPMNbywb4GOqUBnJRe6sLezBUbgwBsoLXqysOE8W4bVA%2B0Syjnh3GPWIi78rWzvncYPbcFrz7p5W0fZ8N27%2BiHMWbrIHoERF7jLVcyIk8dKPUh9KgngIfvgg1EqgGVQWOSsikcxhll%2F31vIA1WiVXGq01WbtGmarGbLXsL3tziVgSBUmbTs9O6EEoien3vcuwAL9YPdJls3ljV7fNEL%2FSgGTIh7KEys%2B3Wlh0jz49%2B&X-Amz-Signature=b311703a74092c68a7c4d2764a1a8008874262d394f174c50715dbf6b2815d68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVH2W227%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCek83MWRCPM%2FnyEXi%2B5xFeNa2yG2j5CN6PU7yieR82%2BwIgDqPzH7UipUjh%2Fi%2BqUBXs6LH2K53XLveT4ioHCdvOfkEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMizLpRS5JwzlXWACrcA4Xd60pWiVDoV%2BIubVfF0CoJQ5DuVKDZxzjmRh0YlDNleFmj%2FYPWfGIenQADEJO7vxCkpJVnPUjb2yfeW2ydsoUp8cboTgSTKykGlA2joH4Q1N7qEBKez%2BHYFstCcwk8Z1bArRyBEf8SICrNutb73pzm8ypQbp13N8YaPLhwtj7lwSAX3ChGP7r%2BzVkgVHVQ6LY%2BFiDZ5V4b36n%2FlkG7fos1wtMUHLN5j6oxmLY7LbcJljzhTj1vKV4nMkodHccCuuvXmK3vokl%2B9j6yAd4E7WogNuv74tWcUIjD7NLQRPc6GuxJiEI6Jy%2Bca5c9%2F0HkRHzZKxj%2F5m4XuQTxlmjmq3324AyI7h%2B2cXEyf1nrdhnukP%2FCGm0TWNFpglcgGrRrly%2FSiSb122k3aei22AR0c8gBeTIg2KwmV1IIF%2FyS4moyUZVxO6HhlSHb6nDkkIJWbMqlXHUFXmFCCIsL3HsNv%2B86EZL6w1DWzefiS3WTEwLXenSWoL99WVl8%2B7oU%2FGKcekLaYHUb3Xef21%2BjhUnSUokvionvyurG8eDUeeIJ4WbMAE4KJBU21ZpcHnzsEXkTIK7GgbU9z8FpGUWcQMqX44GDjLbYA60TB4hDR6X8isN9%2BC7AwL30c07AXwEfMP%2Fywb4GOqUB9KNrFMz37ZCIg7NZC5yc3RhLye5UusXIUis2RdidH6%2FeFa4O58jpj4VDzT86Bb20kBoms69aPzyBvdjz380QI7EIeBAQcceIr2lXkgDFitCWvq1uGYCZSSzYjFSvWBgTKljnGC8Pktiei5EcxOAPxO5ml0KVShY0ddVHKTGZu1nQoyAflp%2FHTLBfWC99yUcrNKvnEUfp3TWVwpkwq%2B5MmKvN0MQO&X-Amz-Signature=083882641e5813dfe307c19aeb2a04b936a42ebd1d7b76051f9064a96c0293a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
