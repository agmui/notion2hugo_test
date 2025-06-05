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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466677YLCTE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDD0lOxF78yPrUQmdcwwlUO0VdhYbF8VbXf%2FtIziUUOYQIhAKApYA6S4DmlhEVQFTLMGdjtqhidIr9l3dg4MsZCIWO9Kv8DCD4QABoMNjM3NDIzMTgzODA1IgxXo1ZUKXKIKjrFEnAq3ANaEKhpf985qc4oCx1LMMRDliZIPWHL4krCfuF6duc9bQGz9OoZdnxirvO5BD9JdCqlK%2BsrDVYlJmNBoEsOPtzCCgOWCZqZ7RysRPJDqZJQNMvIt96YD3wLVeSnr1NqQF9HOS0raRXd%2BJifHb%2Byxb44qJSU9Z2lrmVTzUi6cfJUh0vB31UlzhNBUBW%2B22fUg7zsyurCXZitrJEg50pIR7iO3WPeLIfWTVyNXBjE0cS6eYX%2FWWDCraS9CAkyaj3sjHm9lQhvqrjYIN7TRh3rkhwD%2BLxOd5vpF%2Bs6IRL5QRx6J0d%2B3sQ%2F5Cs6DEGIchk%2B%2BVJfqjPcM%2BCYPACHRtwy2dkT7%2FBOAidhhu7hWm6CqsctPASQzNm7U%2BJhpnxkvsB93VgtMl6Sn%2Bt3ztw0f0bQgclFpKpltOW7%2FRRUIexguIAR5hpozr0IoUuJiOC7MKCrFHtiILYIX0H3fJIGxQJtgYZi6O6AoBOp1%2BpFDUe08%2FuP7xNwAgshdXfPc%2B2514Kpq0V362jNwTx4Pta%2F4j2HkQ0Nh0t9VLM%2B0cIaKYFoAaCoHqaMsdOcIPn0Gxv4%2FvnFuetJDb1lfbBlXkjqs3nzYg3kkCRMapMZRCmXI%2FeJ%2BiPGvkoYyyMd3wKcw2GwyDC4w4TCBjqkASf3RgI1UsaI0XBY4xiMBIvkH7OH2ze%2F822vQ7xfxl5%2F9U4EkXAxNSfgbHZBda1kwVTsMNlNfPQsX9HUu7LfEFgRQNm0sygdz3nZ4wJa2c%2BXcTpqiVe3tYCjOQSSCLq%2Bkx3ijNLaO8X9Od4Kjfh42f8pgDTavciCBpBuOpTRhaZ1G4QV1%2BXOP%2BVLtQR38%2FgNpyA26JTprlycbX7QPPSTYqP8stOw&X-Amz-Signature=eb7078a6470161af8b28258058ac9e3e973f2d01831a3d3dde94353df8c700ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466677YLCTE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDD0lOxF78yPrUQmdcwwlUO0VdhYbF8VbXf%2FtIziUUOYQIhAKApYA6S4DmlhEVQFTLMGdjtqhidIr9l3dg4MsZCIWO9Kv8DCD4QABoMNjM3NDIzMTgzODA1IgxXo1ZUKXKIKjrFEnAq3ANaEKhpf985qc4oCx1LMMRDliZIPWHL4krCfuF6duc9bQGz9OoZdnxirvO5BD9JdCqlK%2BsrDVYlJmNBoEsOPtzCCgOWCZqZ7RysRPJDqZJQNMvIt96YD3wLVeSnr1NqQF9HOS0raRXd%2BJifHb%2Byxb44qJSU9Z2lrmVTzUi6cfJUh0vB31UlzhNBUBW%2B22fUg7zsyurCXZitrJEg50pIR7iO3WPeLIfWTVyNXBjE0cS6eYX%2FWWDCraS9CAkyaj3sjHm9lQhvqrjYIN7TRh3rkhwD%2BLxOd5vpF%2Bs6IRL5QRx6J0d%2B3sQ%2F5Cs6DEGIchk%2B%2BVJfqjPcM%2BCYPACHRtwy2dkT7%2FBOAidhhu7hWm6CqsctPASQzNm7U%2BJhpnxkvsB93VgtMl6Sn%2Bt3ztw0f0bQgclFpKpltOW7%2FRRUIexguIAR5hpozr0IoUuJiOC7MKCrFHtiILYIX0H3fJIGxQJtgYZi6O6AoBOp1%2BpFDUe08%2FuP7xNwAgshdXfPc%2B2514Kpq0V362jNwTx4Pta%2F4j2HkQ0Nh0t9VLM%2B0cIaKYFoAaCoHqaMsdOcIPn0Gxv4%2FvnFuetJDb1lfbBlXkjqs3nzYg3kkCRMapMZRCmXI%2FeJ%2BiPGvkoYyyMd3wKcw2GwyDC4w4TCBjqkASf3RgI1UsaI0XBY4xiMBIvkH7OH2ze%2F822vQ7xfxl5%2F9U4EkXAxNSfgbHZBda1kwVTsMNlNfPQsX9HUu7LfEFgRQNm0sygdz3nZ4wJa2c%2BXcTpqiVe3tYCjOQSSCLq%2Bkx3ijNLaO8X9Od4Kjfh42f8pgDTavciCBpBuOpTRhaZ1G4QV1%2BXOP%2BVLtQR38%2FgNpyA26JTprlycbX7QPPSTYqP8stOw&X-Amz-Signature=515796fc13a0cef1ad01679f94ea148fcd68dca91d46c1b12c6f6a3f13c156d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466677YLCTE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDD0lOxF78yPrUQmdcwwlUO0VdhYbF8VbXf%2FtIziUUOYQIhAKApYA6S4DmlhEVQFTLMGdjtqhidIr9l3dg4MsZCIWO9Kv8DCD4QABoMNjM3NDIzMTgzODA1IgxXo1ZUKXKIKjrFEnAq3ANaEKhpf985qc4oCx1LMMRDliZIPWHL4krCfuF6duc9bQGz9OoZdnxirvO5BD9JdCqlK%2BsrDVYlJmNBoEsOPtzCCgOWCZqZ7RysRPJDqZJQNMvIt96YD3wLVeSnr1NqQF9HOS0raRXd%2BJifHb%2Byxb44qJSU9Z2lrmVTzUi6cfJUh0vB31UlzhNBUBW%2B22fUg7zsyurCXZitrJEg50pIR7iO3WPeLIfWTVyNXBjE0cS6eYX%2FWWDCraS9CAkyaj3sjHm9lQhvqrjYIN7TRh3rkhwD%2BLxOd5vpF%2Bs6IRL5QRx6J0d%2B3sQ%2F5Cs6DEGIchk%2B%2BVJfqjPcM%2BCYPACHRtwy2dkT7%2FBOAidhhu7hWm6CqsctPASQzNm7U%2BJhpnxkvsB93VgtMl6Sn%2Bt3ztw0f0bQgclFpKpltOW7%2FRRUIexguIAR5hpozr0IoUuJiOC7MKCrFHtiILYIX0H3fJIGxQJtgYZi6O6AoBOp1%2BpFDUe08%2FuP7xNwAgshdXfPc%2B2514Kpq0V362jNwTx4Pta%2F4j2HkQ0Nh0t9VLM%2B0cIaKYFoAaCoHqaMsdOcIPn0Gxv4%2FvnFuetJDb1lfbBlXkjqs3nzYg3kkCRMapMZRCmXI%2FeJ%2BiPGvkoYyyMd3wKcw2GwyDC4w4TCBjqkASf3RgI1UsaI0XBY4xiMBIvkH7OH2ze%2F822vQ7xfxl5%2F9U4EkXAxNSfgbHZBda1kwVTsMNlNfPQsX9HUu7LfEFgRQNm0sygdz3nZ4wJa2c%2BXcTpqiVe3tYCjOQSSCLq%2Bkx3ijNLaO8X9Od4Kjfh42f8pgDTavciCBpBuOpTRhaZ1G4QV1%2BXOP%2BVLtQR38%2FgNpyA26JTprlycbX7QPPSTYqP8stOw&X-Amz-Signature=b0a771ebdebb1e1b0dd6a2ffa71cf2a5779a9a778ff71e9c4cac59c23a95fa59&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHLNDA6G%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDAic%2BNkXwQ8VegpYZcfNnj%2F8fq%2BlMzwUnxi3NaHF%2BtwQIhAI%2FUNoUcnCGgefciEAnB933LRN0H0v9BSDpsRUarWHhhKv8DCD4QABoMNjM3NDIzMTgzODA1Igxi2ug%2BZBH0dk6boj8q3ANKCYwx5TmPMxgXv4pfkt0CIkZw8MsEPV88Y9xLYrpj%2BJ0mx0aLhzloGs3SO2A2WFQ705lHe47nedJmxtlYWukVrnatr3f6YaL1Hk1pvZS0MxdWA2N9cdv1lHhsUjO3U8aPiARd1oeK6tWix96OZ0vn%2B7rL9GQzRYQMYPiMcvPVYlA04YCBnm6IqBUpTYrTI9yeDDTkRyf1aYGxK2OtP7lCX97TmHjb2Iv4rH5v0c2HRmDraMcErnlNq2D%2BnbAgAcwTWQYWVKhYwGoAXOoLQsqxrT9%2F1st213TCQUo2vnMsAWXdZhHEfSgEWNmrnzkgoEad7VsZAZNVm4BnEnStMwPLHchHiCamcFgA69tZc1gsv9w%2B618Y7qkO4gCYijiclbnkqN3wM5P%2BtTZbGiPx49omL4ElcSFkDsBZFHJNJUjZiOEuw33r14t7BhzB8l54mWvMKzwi44gczF4ObxKNxYIt4TMfGtZALAYU9TPdcBPZVlvuyoE9LwHNj%2FJzZcSrPXQgaike7fDdW2UjJ8eqJ9cZbxdFnY8b7USXMf3VQmvPlEGchFop8FCZUIVe0kLYpNkBfQ5JR9k6RmqTvV2wlqEUG6%2FQLcu8GIkpXIH4zaHiBbLfksR82arcP4yobjC3w4TCBjqkAaWJmo2%2Bh7EwuncoAZJh8A9UqV3rEWe97IFfLfthTaehvALIO%2FGeD%2F1pz5zOYNScRto1PXCYOlUFm4J1TIdnLuxew%2Fems5psMxVzJnBKzn8iBAHvR7VlAQKiN2KUeNj%2B77Wu59Y4AOpocOxoQoRUptRT%2FbJyOOCn6CueI95d5R9%2FI1TyUIC5jtLZnb55eZiBTZdhlFBBAObv%2BbledrHzjSnhRa3t&X-Amz-Signature=eaadfd2ac3daaee0c824df4034d9b12f59c77e312af45954fec0f6d809e1b09c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643OOACNZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBxgfOTtz7rAO%2Fgue%2BXOKqCNshj8nOFhBwUz8Ht3iCuIAiEAnHb%2FFn%2B9%2BcvNyrX13s2etf3IeghVArFwHIicZNfnGoIq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDE46SeV5vA6FzHdZ8ircA7Z7PrDLljhuXHmFg4upkt%2BaMNylvD3Zg2gMF6sZa7jih4ddMsCYUStl1UPpxzWU3xnnRKKSFA7YYuyVJf790nrp%2BYQUnBU4FW4CPKZWleAQLAahSqhqx3KV1mEOquOX6%2BNqY4GWjr%2F0NDSgJCkmUCWz8EugudgaMOqF0Mpndzz9XvSRH5YvJOcHyd8WlsZzvNNhs345%2F2%2FfUkTnK40LQf550reApxSTROIWai59CqhPENmawcbi2cPIatoG6I4BE3PTuebdF60U0oflq9ZlCSviM1G4bBwXpQQX485pz9xKFfjmZoZHEM0Ost6zTT2kTThzMcq0OxO8eZtfgBWzfoiYoKwQ15eZPYGCdA2EaNoWBFxWSq7hKSLeykht%2FjW3%2BrJj6wL2MJVnRN65nyNGVr6INJTRrfvcJx7InKII3Xt8a0x89T%2FmTYZ6bwOH%2B1WnPQ7ih8yJPLQc4MYH3WIn0E8Juhl8y%2BYDdgZns3djMSfFS3B3ZDCcla2Azx4FoAq8Sb%2FBSaogYreQdEKnKmWcViuY5JSsomLSPbtIK5i1IiGGuMLS5pIPTPwBmWaKBGvudVBZZ1qhUSi0iCYG5zlG5zjgZwX1IOJKnKdbEiiPjp6cmYiWEx8fzev6k%2F4XMPjChMIGOqUBWsJtEm6A9Xq%2B5WArZRMRNz%2FNHjoiQWf5lrU9SdkTIvDqRrn9EZ%2Fa6%2BfWU6FrTjkwBAekCJZYgtyPwBdBO3FI90%2FGPpVT8hhuVCEfPy5IxoLWWGfnVHtJSk7LfecXwPuezcpbMSvJCQcK%2B2S2tVNbRSn5C%2BiiytxUmYwrHkI0IzVdc9q0m5hLIHNiDnHszODr4dXWW2C7V08xWs3g0VarQa%2F40Ddb&X-Amz-Signature=43599294014255bafbd6a9340ea7632e8a035db6e6d3b9bd360982cbb892559e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466677YLCTE%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDD0lOxF78yPrUQmdcwwlUO0VdhYbF8VbXf%2FtIziUUOYQIhAKApYA6S4DmlhEVQFTLMGdjtqhidIr9l3dg4MsZCIWO9Kv8DCD4QABoMNjM3NDIzMTgzODA1IgxXo1ZUKXKIKjrFEnAq3ANaEKhpf985qc4oCx1LMMRDliZIPWHL4krCfuF6duc9bQGz9OoZdnxirvO5BD9JdCqlK%2BsrDVYlJmNBoEsOPtzCCgOWCZqZ7RysRPJDqZJQNMvIt96YD3wLVeSnr1NqQF9HOS0raRXd%2BJifHb%2Byxb44qJSU9Z2lrmVTzUi6cfJUh0vB31UlzhNBUBW%2B22fUg7zsyurCXZitrJEg50pIR7iO3WPeLIfWTVyNXBjE0cS6eYX%2FWWDCraS9CAkyaj3sjHm9lQhvqrjYIN7TRh3rkhwD%2BLxOd5vpF%2Bs6IRL5QRx6J0d%2B3sQ%2F5Cs6DEGIchk%2B%2BVJfqjPcM%2BCYPACHRtwy2dkT7%2FBOAidhhu7hWm6CqsctPASQzNm7U%2BJhpnxkvsB93VgtMl6Sn%2Bt3ztw0f0bQgclFpKpltOW7%2FRRUIexguIAR5hpozr0IoUuJiOC7MKCrFHtiILYIX0H3fJIGxQJtgYZi6O6AoBOp1%2BpFDUe08%2FuP7xNwAgshdXfPc%2B2514Kpq0V362jNwTx4Pta%2F4j2HkQ0Nh0t9VLM%2B0cIaKYFoAaCoHqaMsdOcIPn0Gxv4%2FvnFuetJDb1lfbBlXkjqs3nzYg3kkCRMapMZRCmXI%2FeJ%2BiPGvkoYyyMd3wKcw2GwyDC4w4TCBjqkASf3RgI1UsaI0XBY4xiMBIvkH7OH2ze%2F822vQ7xfxl5%2F9U4EkXAxNSfgbHZBda1kwVTsMNlNfPQsX9HUu7LfEFgRQNm0sygdz3nZ4wJa2c%2BXcTpqiVe3tYCjOQSSCLq%2Bkx3ijNLaO8X9Od4Kjfh42f8pgDTavciCBpBuOpTRhaZ1G4QV1%2BXOP%2BVLtQR38%2FgNpyA26JTprlycbX7QPPSTYqP8stOw&X-Amz-Signature=09aff75139b49b8c279bd482e2c4f41f32cba3545783d6b77a6fb7e81163220f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
