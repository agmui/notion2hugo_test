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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXS6BMZ5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIG5qG0AMGOI2532%2F6JuffqezttzjTCJ%2F5ngR1Z0gde8kAiAe%2BPcSibCozT7ae2r3X9E53wfXoMyvDQ%2B%2BbQUEx%2FNn%2Fir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMQ94JOFzfot2lU9XOKtwDzzAkw9D1TO9AYJO6bgf3TUFcRvELfaZNwXu%2Fs5L6nVoMAvUOUS%2F4XEkobpdUejX7Ztjt%2BCYXK4IJxPrhWc2otPPNLCzlc69PlYfOwhLwcV1fIwKJyRQbeskRa7rRcR5f60w6GQqkk1GIvC1H7PZmXniCuiV1sS4YP8pZrHVeDUwrIr4SsArgpT5zamVcQ0E5A%2Br5OiAOpZiYyS668gQrAqhRk2CW5nyPLJp1ygN%2FnHrPt4CBItQh5bR119p44j%2B0j7CMjjH8MpO80lRk33ajlqqSQIA68bempR6294vDKkZsgYJGKFOhzqLjoiZfGMqPJaUHutAsJYIvZVGRD0mL8UpNDpzg40%2FNw8w7mh1vaS0k7xJ4xuJnyU5esvxpX1mb88H%2FYxIOLcWT9OCtY2nZlSaCqiE299je%2BLjaM1tOwm4BNkkyMotFmYUHMMiMBKUv8T8kgFcqNl7wpD6a8dAE9h663j4aRGkPk9Yp%2BNEsf3qekigVQ07ZjaZX9KE%2FtcDme%2FpK17hmFdWJE6pd3kNtxudvwydJr4H7yRyxmJ%2Fnb%2FYpP55u1hG4qHRyJhBbIInnaKtnXV9i0PDnETxTdPjM4D3F7ky7e5iF6J%2F4F7yTwdHgZXtm51GJyB0qBv4wsO3BvQY6pgEKvXkJPNWjJJ2Z5JJF1%2BkxsSaMks7QIBE%2BHgPjWdiXeRCL0q10GhipDjlHAVNRAvnQXB1cx55Y2d8PGbw8ATY00yx%2FOI10s8StUQJ4wzKVA5K2hJU%2Byampp%2FBQQGN1VSWnRmB%2Ba1%2BVTpUXRnHUT9vtZfX6xcTh7njkAKzYBKI8ZKWNE5FPxzE0EEiqF9ixsHTlFGyx7%2FquUuZFYkrcUc2IfyCuD55q&X-Amz-Signature=bf54b0f4f90b737d7faf225eb1b1a033281dafa864df3363142b29a37c55c898&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXS6BMZ5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIG5qG0AMGOI2532%2F6JuffqezttzjTCJ%2F5ngR1Z0gde8kAiAe%2BPcSibCozT7ae2r3X9E53wfXoMyvDQ%2B%2BbQUEx%2FNn%2Fir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMQ94JOFzfot2lU9XOKtwDzzAkw9D1TO9AYJO6bgf3TUFcRvELfaZNwXu%2Fs5L6nVoMAvUOUS%2F4XEkobpdUejX7Ztjt%2BCYXK4IJxPrhWc2otPPNLCzlc69PlYfOwhLwcV1fIwKJyRQbeskRa7rRcR5f60w6GQqkk1GIvC1H7PZmXniCuiV1sS4YP8pZrHVeDUwrIr4SsArgpT5zamVcQ0E5A%2Br5OiAOpZiYyS668gQrAqhRk2CW5nyPLJp1ygN%2FnHrPt4CBItQh5bR119p44j%2B0j7CMjjH8MpO80lRk33ajlqqSQIA68bempR6294vDKkZsgYJGKFOhzqLjoiZfGMqPJaUHutAsJYIvZVGRD0mL8UpNDpzg40%2FNw8w7mh1vaS0k7xJ4xuJnyU5esvxpX1mb88H%2FYxIOLcWT9OCtY2nZlSaCqiE299je%2BLjaM1tOwm4BNkkyMotFmYUHMMiMBKUv8T8kgFcqNl7wpD6a8dAE9h663j4aRGkPk9Yp%2BNEsf3qekigVQ07ZjaZX9KE%2FtcDme%2FpK17hmFdWJE6pd3kNtxudvwydJr4H7yRyxmJ%2Fnb%2FYpP55u1hG4qHRyJhBbIInnaKtnXV9i0PDnETxTdPjM4D3F7ky7e5iF6J%2F4F7yTwdHgZXtm51GJyB0qBv4wsO3BvQY6pgEKvXkJPNWjJJ2Z5JJF1%2BkxsSaMks7QIBE%2BHgPjWdiXeRCL0q10GhipDjlHAVNRAvnQXB1cx55Y2d8PGbw8ATY00yx%2FOI10s8StUQJ4wzKVA5K2hJU%2Byampp%2FBQQGN1VSWnRmB%2Ba1%2BVTpUXRnHUT9vtZfX6xcTh7njkAKzYBKI8ZKWNE5FPxzE0EEiqF9ixsHTlFGyx7%2FquUuZFYkrcUc2IfyCuD55q&X-Amz-Signature=90da5eb94bd9bbe638e09fbc32e84881543d6a8faffbe016d85016476f2e3d74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QZXFLXS%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF1hKvbLjA3creqFen2kevA8O1dI68bcGY90vsBMSE6AAiEAzrlWW7tVdcZqFurEQpP9Kuro2iEPNIRN5DIQK7cbCHIq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAFR1AP08ThVfpR%2BCCrcA%2B7JkkAQ3RsO%2FWThYwpUN5DqHy62wPRO5AELnNEYpiNcmRCdKwA1RVadM9a49gtUR2MsVRew4yreV71YSTXGV58OsOcxI5AoxFzdKGSnU%2FC0dkL%2F9AMeLIr2zw%2B2FuRm0%2Fi7mk5kACFqIZqlKTNU2TVSWctF2U89xsd2xTmHUsFFvrEpTAsLqRqge6nc8yoZrCWTjXINhQg7ofaNSDEj4LHSGDkoNeeja2uwqWkFGeAuSNbr486Z8wO4y893b0I3frBIADrCbX3fOyH95oSuAlXmOdCwilVO2UF4zs%2FiVS4PFFNsd0Ur%2FQOgZZUwLFeDHj51CV2NwJ3v3CN68fj%2Fxd9l%2BgksNUE4QFi3IjVN3lNnTtmTVm3pr%2BmyZaeNfsTtnqQP%2BtQM3eQRVPUehD0LNau67q8R1GlEbX6F4SOPp1qNMSFq0OMjLtjVPWGvPiAvX0frsOb69zf%2FgmC3zNgw7XksrqRVa8rSSVES91vQD2783Q3XnqD2%2BD5fuNzsA50uPoZlSFt1X%2BaR2zFb3%2B%2B2GTBZXNrSXej%2BecHfFlNTr7rHT%2FNWD1XyZE7FsTfg5uUfIry%2Bgrf8gp%2B5WlQsEYNvIms9EIpvbsD4sSv10HVBS8vvV5%2B1I5YaGSS7%2BgFLMNrswb0GOqUB6YNsGQVdVDH1KKyc7prJLYvdUcvrxT2d6EwljcgDCGBx0wpUq0%2FW0d1wi7XewHRHmt5CCqYNACCLZbMwEWf0ZVHfwcPs5aSlkG%2BrtAHrd4L8aWdLF4ht2Iy0CYaMhaD%2FYNqW7TOflG4hsEaamiFC6s3PEKEow%2BVGOQ10sJlYAqgKgThk8Ufoo092zgwu9AK4lmbuQ%2FbahHRsGL5FIDESP3r1YYzx&X-Amz-Signature=e248bd5ec0e298a11ed28b96d56c226743b0d6574a7a0e44288aa8225fcb8612&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MW5OGTO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICaq3IxhhtggQHFFtz7m8rf9MufGSp%2FgQDz6Q8KdS3wcAiBn9LouoHpJnvgxzjSWSbnsIhkGX9SkT3lOa8qT2iEAdSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIML6rffXBxkgNDmZI6KtwDlYTVz1aV39jrCn1s7ejzCNeWQGQ8gei3c0endRHNdoLd4bEZbsZo9J8Z%2B8jh6UbFuIXiAKm4rBdpTvkeCbT3HkgJJU%2FKDP%2FAWxhjVdJ1mAdZCtK3D1V1GlB7z8bI%2F3ySZ1w6zEKgbwA2Nm%2FFOYwP3YkvGxvfeMax6Nkcfav23UIyh9MLVMsy1s05oDRoRnXB%2B9NlVQEyluvL384luWTHhUeKSpVWB0WnTtC%2Bz9V08VLve6YpbilHtEmiRMv33Me9vJMUuwR%2F%2FpD4VGgkWUa1%2Bt7hmZi%2BJlfXoC0mNRYPfSgImuPAP8RBG3fBNb0%2BqH4i1GkB%2BJnWg2%2F%2B67YvLzq1HyXKln1k1Th2BYYW07G%2BvNShmlIYtwAKkNb3IibQY%2FrD91mUIyqRsP9O7K5Gdxuyqk21J5o%2BZ8qt1CgbfeywyI2mFUTfzLlvLM%2FHHw%2BG0scqjeOp5LlF0yx%2Fj5Z3dGIrqXzokB7Uz1RyQa4fJPrYs7dwml89rsofWbnQrn8xUIhZ73SAbavAyBk%2BUUmR2Sv61LgVUxa%2Fhrqx624bFVs93ABJOyD6nGFPWGW6aHKkbPLyUCOLE4vpSifWRyJq4FiLiLdwObK66e8t1bC%2Fc%2BFGd%2B2LsehXadlLHJqOqsUw9e3BvQY6pgHI2Fr%2BisI%2B%2FPRAxDD7RlG9mMTk2SVlWV2R4%2BUBUmB5y9nvFN68RZQ7gWmRtFI%2FQJFHIeZ574XttYYCSGAr7os%2BZw%2Bkt6MoZWgmRu48MXmRyNbp4kVKiu4KF%2F7K8gwXGozz9kJ2v6A2ygsOQux1eNpJbGBWfMw8hC6t8STFOmxk6D7BOsHfE3UE2B1czEGEAS4IW946ylWsVrBzYfu4nlpZg5u1t21S&X-Amz-Signature=19693886b6830cccc9f9d2956603421dcc3afdbdc77b1eebdf04761151c70d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXS6BMZ5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIG5qG0AMGOI2532%2F6JuffqezttzjTCJ%2F5ngR1Z0gde8kAiAe%2BPcSibCozT7ae2r3X9E53wfXoMyvDQ%2B%2BbQUEx%2FNn%2Fir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMQ94JOFzfot2lU9XOKtwDzzAkw9D1TO9AYJO6bgf3TUFcRvELfaZNwXu%2Fs5L6nVoMAvUOUS%2F4XEkobpdUejX7Ztjt%2BCYXK4IJxPrhWc2otPPNLCzlc69PlYfOwhLwcV1fIwKJyRQbeskRa7rRcR5f60w6GQqkk1GIvC1H7PZmXniCuiV1sS4YP8pZrHVeDUwrIr4SsArgpT5zamVcQ0E5A%2Br5OiAOpZiYyS668gQrAqhRk2CW5nyPLJp1ygN%2FnHrPt4CBItQh5bR119p44j%2B0j7CMjjH8MpO80lRk33ajlqqSQIA68bempR6294vDKkZsgYJGKFOhzqLjoiZfGMqPJaUHutAsJYIvZVGRD0mL8UpNDpzg40%2FNw8w7mh1vaS0k7xJ4xuJnyU5esvxpX1mb88H%2FYxIOLcWT9OCtY2nZlSaCqiE299je%2BLjaM1tOwm4BNkkyMotFmYUHMMiMBKUv8T8kgFcqNl7wpD6a8dAE9h663j4aRGkPk9Yp%2BNEsf3qekigVQ07ZjaZX9KE%2FtcDme%2FpK17hmFdWJE6pd3kNtxudvwydJr4H7yRyxmJ%2Fnb%2FYpP55u1hG4qHRyJhBbIInnaKtnXV9i0PDnETxTdPjM4D3F7ky7e5iF6J%2F4F7yTwdHgZXtm51GJyB0qBv4wsO3BvQY6pgEKvXkJPNWjJJ2Z5JJF1%2BkxsSaMks7QIBE%2BHgPjWdiXeRCL0q10GhipDjlHAVNRAvnQXB1cx55Y2d8PGbw8ATY00yx%2FOI10s8StUQJ4wzKVA5K2hJU%2Byampp%2FBQQGN1VSWnRmB%2Ba1%2BVTpUXRnHUT9vtZfX6xcTh7njkAKzYBKI8ZKWNE5FPxzE0EEiqF9ixsHTlFGyx7%2FquUuZFYkrcUc2IfyCuD55q&X-Amz-Signature=7719c592596a4da9fde7845b767906465b8e78acfe5811e781a79b77b9cb12df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
