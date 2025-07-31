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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBQAACUG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEuk%2FQP3fs2KnfQZcbO2FBEoI9K1FI0V1pMqZ2SDFOXgIhAO0CRiNPqMn%2B5ER5C3xYJQtIxn9kaokXeWyq6O6s766YKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzroibQuLlXsax9VrIq3APMjHBuU%2BoCVl98xMy3bFKrB9PKYURSKN%2B8bZbov7dwnVzugtA1SMOQTWGYDNYlyWNJwKQDu%2BAOvg72crYXv4Dk24eNhq7D0Ygm6S6jdOr0AZXQL6Sy3sfaf2vfa3xDBvnjtkzv%2B249xfe46B8xAbPuWIj6bgSmv0QgMHUKa7tJgSjQl1Tibnns0pjutLDZfARWr67RgLTmBSwezl2eQTDjU7eF6B6AKnurRD3RFaKL9OVsQZ2rjkkPy9K8hgcckwH7yAIqCMQ5oOdRCwNOXPUBo9ZA5VbpT1cV%2BCmqU1hSqFS5hWoeOAlotBWOPkJdlbou9L8xbfG7LvsXZEUBj9QTvYzVcOAzJrnAxF%2BBghM7b8vWYbVM5LcPo8RT9gm82dCBGnBRR4piPcO1joLHtK%2BQwsupP3NvJMQQ7Dm%2FtWREI%2BZ%2BRBKdBWkz3eltT2VvPHtItXtH37DAhJRw1ulKd2SPVTNrDvPAmTo%2BM2p4vKeF%2FL2WrSdC9YUo%2Bh3RFPGdHInM1kOF%2FhbhHsmDxxgPxgIvWOj4z5v5acj%2Fa85QGMO%2FMs2HDvoI7Sv3cbqIOC4LAd4Vwl8qn%2Fn2q5ctjlvWJSsRBKNPTyZX%2BlnqcDjOPIXJIk%2Ft%2FfFx80JXZUB0fTDWga%2FEBjqkAcZVIWmS5VWEMDoFRZ%2FeeDDhH8sjW47V1aBEaygDYAD50T%2BRsMBOAKf7DGdmCAfw6KYfhQZxvN6%2FK7%2FerIhFv%2FQjzjOXjMMjnu7ZdRWjDhZyr0FO%2BAOHw5isGJWLMVGN8aE%2FxgcNrEqLRjyEk14e%2FLLCtyp45C8z3L9BQY6Ywf3Qez5%2BPgMpgKeYbPhTUCD%2BFT0aiSFkfWaxxdvsO2y0nSPAjnw%2B&X-Amz-Signature=f58a579f8c636854891fc0be77d4a577be3daa0b6d57e9ac44e90e3fa0a2aee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBQAACUG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEuk%2FQP3fs2KnfQZcbO2FBEoI9K1FI0V1pMqZ2SDFOXgIhAO0CRiNPqMn%2B5ER5C3xYJQtIxn9kaokXeWyq6O6s766YKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzroibQuLlXsax9VrIq3APMjHBuU%2BoCVl98xMy3bFKrB9PKYURSKN%2B8bZbov7dwnVzugtA1SMOQTWGYDNYlyWNJwKQDu%2BAOvg72crYXv4Dk24eNhq7D0Ygm6S6jdOr0AZXQL6Sy3sfaf2vfa3xDBvnjtkzv%2B249xfe46B8xAbPuWIj6bgSmv0QgMHUKa7tJgSjQl1Tibnns0pjutLDZfARWr67RgLTmBSwezl2eQTDjU7eF6B6AKnurRD3RFaKL9OVsQZ2rjkkPy9K8hgcckwH7yAIqCMQ5oOdRCwNOXPUBo9ZA5VbpT1cV%2BCmqU1hSqFS5hWoeOAlotBWOPkJdlbou9L8xbfG7LvsXZEUBj9QTvYzVcOAzJrnAxF%2BBghM7b8vWYbVM5LcPo8RT9gm82dCBGnBRR4piPcO1joLHtK%2BQwsupP3NvJMQQ7Dm%2FtWREI%2BZ%2BRBKdBWkz3eltT2VvPHtItXtH37DAhJRw1ulKd2SPVTNrDvPAmTo%2BM2p4vKeF%2FL2WrSdC9YUo%2Bh3RFPGdHInM1kOF%2FhbhHsmDxxgPxgIvWOj4z5v5acj%2Fa85QGMO%2FMs2HDvoI7Sv3cbqIOC4LAd4Vwl8qn%2Fn2q5ctjlvWJSsRBKNPTyZX%2BlnqcDjOPIXJIk%2Ft%2FfFx80JXZUB0fTDWga%2FEBjqkAcZVIWmS5VWEMDoFRZ%2FeeDDhH8sjW47V1aBEaygDYAD50T%2BRsMBOAKf7DGdmCAfw6KYfhQZxvN6%2FK7%2FerIhFv%2FQjzjOXjMMjnu7ZdRWjDhZyr0FO%2BAOHw5isGJWLMVGN8aE%2FxgcNrEqLRjyEk14e%2FLLCtyp45C8z3L9BQY6Ywf3Qez5%2BPgMpgKeYbPhTUCD%2BFT0aiSFkfWaxxdvsO2y0nSPAjnw%2B&X-Amz-Signature=ceac34325de324f72bf2fd23feb64b1c6ca3b1d41def7d43682660a29443ad4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBQAACUG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEuk%2FQP3fs2KnfQZcbO2FBEoI9K1FI0V1pMqZ2SDFOXgIhAO0CRiNPqMn%2B5ER5C3xYJQtIxn9kaokXeWyq6O6s766YKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzroibQuLlXsax9VrIq3APMjHBuU%2BoCVl98xMy3bFKrB9PKYURSKN%2B8bZbov7dwnVzugtA1SMOQTWGYDNYlyWNJwKQDu%2BAOvg72crYXv4Dk24eNhq7D0Ygm6S6jdOr0AZXQL6Sy3sfaf2vfa3xDBvnjtkzv%2B249xfe46B8xAbPuWIj6bgSmv0QgMHUKa7tJgSjQl1Tibnns0pjutLDZfARWr67RgLTmBSwezl2eQTDjU7eF6B6AKnurRD3RFaKL9OVsQZ2rjkkPy9K8hgcckwH7yAIqCMQ5oOdRCwNOXPUBo9ZA5VbpT1cV%2BCmqU1hSqFS5hWoeOAlotBWOPkJdlbou9L8xbfG7LvsXZEUBj9QTvYzVcOAzJrnAxF%2BBghM7b8vWYbVM5LcPo8RT9gm82dCBGnBRR4piPcO1joLHtK%2BQwsupP3NvJMQQ7Dm%2FtWREI%2BZ%2BRBKdBWkz3eltT2VvPHtItXtH37DAhJRw1ulKd2SPVTNrDvPAmTo%2BM2p4vKeF%2FL2WrSdC9YUo%2Bh3RFPGdHInM1kOF%2FhbhHsmDxxgPxgIvWOj4z5v5acj%2Fa85QGMO%2FMs2HDvoI7Sv3cbqIOC4LAd4Vwl8qn%2Fn2q5ctjlvWJSsRBKNPTyZX%2BlnqcDjOPIXJIk%2Ft%2FfFx80JXZUB0fTDWga%2FEBjqkAcZVIWmS5VWEMDoFRZ%2FeeDDhH8sjW47V1aBEaygDYAD50T%2BRsMBOAKf7DGdmCAfw6KYfhQZxvN6%2FK7%2FerIhFv%2FQjzjOXjMMjnu7ZdRWjDhZyr0FO%2BAOHw5isGJWLMVGN8aE%2FxgcNrEqLRjyEk14e%2FLLCtyp45C8z3L9BQY6Ywf3Qez5%2BPgMpgKeYbPhTUCD%2BFT0aiSFkfWaxxdvsO2y0nSPAjnw%2B&X-Amz-Signature=12926852fb1e9443bafbec639127f45fa5f0f683782e496e1031b0953969dc9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFRN5MDS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNHRQxZKoNaQ447PDezpIoNuQUNoA%2FH6R5Jd0K78%2BDXAIgE37oCdC7lc626PJMHT%2FXrc%2FZJnFxnZZXVNSRCkBPrggqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALM9JHRDShSmCHeiircA1KBdmnavr8AroIdBjYycfSvCoVmCNN%2B5x6liQlLL%2BZ%2BqIlHdDRFdAcbFSK15e32YqN5Vxl4tDKnO9CDb04D6EpQ7nnxpuVSeJy12D6svhZbDn8Kp4vOhgIeQSoEqCsWsSRH4mCVF0%2B%2B3je3%2BeWzmaNZ%2FlBUlxVHEIgsvKzEbp%2Bo6r9lHD6EtpcqbD%2F0YH2Xdngo%2B%2Ba5XEfme%2Bbk1ONCdj5sIVqKlSf4tl8jpxjGxOGyDfchHEjxwmlrcyEQ9%2BSesip13FxfMRWg06Bh08ZqoGdU3mxSVEe%2BO7uHTYR6HmF3JgmUKpzpm88QfDAy8uou0PvyXwwwMR5YMD8OKdfyhgMIcC7cac4tdVFZg67S%2Bf1wNJwD2EB5FuYGk9dzX9a%2BuN8%2BJndCY%2FP1XeyjmgtMg3hjAA43Qfmj5wnIK9Uu4oBI5Ygnf98P%2B%2BneuUr3xAEQGJ%2Bipv6aCw1%2FWkxn3KqF%2FkugWy2oWlAQsLBVl7%2Bpqv7t4XrQQC70GRXKt6jRhstXkIRsQxOYJpFwJCl0Maifjqtq9MdO6bgvv%2Bwf%2FeXrFpTII3iG7rjFHOBnogGHGRRk0U8cSr5TvWmHUmfbVc%2BhR%2F%2B1W6LabVlXzyUSVOjCQ%2B4k%2FKvGNQt%2FVTShhKFAMPSAr8QGOqUBJ7rldhc2%2FKkrUTqyLpn0jFVd9DLwr6fetYDVC56f2VDYpmJTX9uUFaqhONzQBYa%2Bn%2FN15nCcpc1M9BxdGdqbij53TKHMztpRGps5PFAeJ99oo2pssFnfBhVS%2FKBIEDAOIKWZUnyv%2FD0KZj%2FLMtqqQCWLR50A%2F1UDioMmfwZ5TnK3%2FhnGuHedYDBmvW6%2ByCka3APknXP9sWzMDjL3SzdFeTdu4ufe&X-Amz-Signature=4061035a82b5ec5dfb2d5d22f2aca8df2a04dce33103d68e5ef745fe6033d5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633JUT2J5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBf71fpP4YqtDPgdbM7QApgsl%2BlkV5sdkhJYpVhWzke5AiEAxqQEPH3B4A0bbHPQf5B8Yc%2FSVNBVnW0C0X6PqmoX1p0qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK64HRrCGOHbuZLmeyrcA530auDqOMB4CZtkAYPaWffvR3jAtnU0mxwi9S%2B5CRaRmkkXh3f2wMILBpG6yw4Gpa3KNlJfaGmDL3Qk25Zy3DQSkUsXJMul3gZpMx19WcpxXWmTHWNwWHz2kdup%2BSDAyYsjSnrvvlbU2XWd8bYoiBVC6enccyibPp6rRcf7%2FqEYn8rHfsO7vn6TKgwPQEEomovFEAInucfdfwmtZIZHUlxj4IvcJmxBdb4Z5vME4kVnteaOQ%2BXLvce9wNDokPX6WHdFWRL76bS%2B3CQNCwx5jDp2yyi7u7Eta8talQHLobBhQ4BJlSzzWR%2BhsoRS0X0tDdzeeUAzWjP3yt0iCJiLgLbzlc67xptUtbbB8j5zZYKLUdSK8dxle9%2FIU7YYjz7kUOJ1uBXTm2Ktzqvtz65MI%2F3hMAxTVEWjL7vHoItfe8HJghaeiMj%2BI%2BaTFCpbEdPGGKblGFs6xyB5AEsL4Df7WFcdjZZytDdcT6avcIyEn%2B8aK4D%2FSNdHNkaIrnT7Dnl5RdpJ7xJmYTVFt73FQHCWArXRmlX8WddA8B%2FH4i78HnX2vbTeaKHghx%2FciwbHDm2CUjwmqdsswYaOMPzbX7amEO0kg1eKjyYKtalyHWC6fmGee4IlJPsgt%2BoCJ%2FUeMMqBr8QGOqUB9ZGJ%2FfGZMqd3I6pf5mI%2BaIykcWQcTC5QtvHpFcvXBMlLxi5bP%2FH%2Bo3mYIt4i8JopCYUn6wLe%2FpAW9FW%2FhTu66Om54X2rL24TaOQK%2FeMxN8iMqM3svskvH48rE2zZvF7I79Pn56XhNeQwxzaco5KKCYjVjI950pOD79hh0i9tCnXS35%2FXfJWRavRglAQ23B3rYKFNZ8kF7Cf%2FvWjWFOyeTZWKsuUk&X-Amz-Signature=20f6b4dc5f00655439cd3a1ee91282bd3e38c8d8ea7b8cee37c8a94286ddda91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBQAACUG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEuk%2FQP3fs2KnfQZcbO2FBEoI9K1FI0V1pMqZ2SDFOXgIhAO0CRiNPqMn%2B5ER5C3xYJQtIxn9kaokXeWyq6O6s766YKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzroibQuLlXsax9VrIq3APMjHBuU%2BoCVl98xMy3bFKrB9PKYURSKN%2B8bZbov7dwnVzugtA1SMOQTWGYDNYlyWNJwKQDu%2BAOvg72crYXv4Dk24eNhq7D0Ygm6S6jdOr0AZXQL6Sy3sfaf2vfa3xDBvnjtkzv%2B249xfe46B8xAbPuWIj6bgSmv0QgMHUKa7tJgSjQl1Tibnns0pjutLDZfARWr67RgLTmBSwezl2eQTDjU7eF6B6AKnurRD3RFaKL9OVsQZ2rjkkPy9K8hgcckwH7yAIqCMQ5oOdRCwNOXPUBo9ZA5VbpT1cV%2BCmqU1hSqFS5hWoeOAlotBWOPkJdlbou9L8xbfG7LvsXZEUBj9QTvYzVcOAzJrnAxF%2BBghM7b8vWYbVM5LcPo8RT9gm82dCBGnBRR4piPcO1joLHtK%2BQwsupP3NvJMQQ7Dm%2FtWREI%2BZ%2BRBKdBWkz3eltT2VvPHtItXtH37DAhJRw1ulKd2SPVTNrDvPAmTo%2BM2p4vKeF%2FL2WrSdC9YUo%2Bh3RFPGdHInM1kOF%2FhbhHsmDxxgPxgIvWOj4z5v5acj%2Fa85QGMO%2FMs2HDvoI7Sv3cbqIOC4LAd4Vwl8qn%2Fn2q5ctjlvWJSsRBKNPTyZX%2BlnqcDjOPIXJIk%2Ft%2FfFx80JXZUB0fTDWga%2FEBjqkAcZVIWmS5VWEMDoFRZ%2FeeDDhH8sjW47V1aBEaygDYAD50T%2BRsMBOAKf7DGdmCAfw6KYfhQZxvN6%2FK7%2FerIhFv%2FQjzjOXjMMjnu7ZdRWjDhZyr0FO%2BAOHw5isGJWLMVGN8aE%2FxgcNrEqLRjyEk14e%2FLLCtyp45C8z3L9BQY6Ywf3Qez5%2BPgMpgKeYbPhTUCD%2BFT0aiSFkfWaxxdvsO2y0nSPAjnw%2B&X-Amz-Signature=6e1a8852dbb7224f18e8dcf19737d0f87a427c695c6c2b229f489b4f31b9a146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
