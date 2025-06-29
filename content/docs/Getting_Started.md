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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZBH6PIU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqlhCVvrPGGHK11gBiqj%2F2BYVB2qz702Knp6e41cNUgIgfpH3seuj%2BZRr4InTjI9y31HOuv%2BGzkb6h24zxG5SKUwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0%2Bk4pRurhMm0Eu3SrcAy6ow0vkG%2BlnBVR6vl139bGRU%2B3Q8CA5%2FyYdRq7aXIgjFp9VUUWO0oIhrm%2BP7kSsG0UzqEgVTZ6bRmZHHTJsI4M%2BQuqLA0BRHnugrGvSZxrn8KKwrtmggsI0W%2Fa50qAUJ59rZeHzPr4ruRxFmiyMgNHbXgpzAGkIjzeTbIKnmOiVt01fAt5xY5MKSzTIUatwI%2Fw58CIFkP7vNaG6cyW74nks%2B2kUWPhti9kKx%2F9zyHSMBzFwz7F4CXqlR2Zfw2dYcKhI9zhPm%2BULIENkLoxEQQUENVI84TlPoQg%2FtCv8pz61zwSNSAYWimc12aN4rg7KRaWWVzVh1syN4g0V40tusIBNGcdNJtwOow2byhdBi5zItPtdBJzBIusvWBYuoPLp%2Fgcf10QJZfsMecYXFVZXkFHtUEU3STeGkjJcVAfFK%2B3Of9sgCDtxmGbIO3jkwnE9zbPGPEuL5e78%2Fn1%2FBuP%2BJ4EsiRhf9syORO1QLfqi29OGmdFTsMbLuS7cUJBFeqsRBnmNU7J%2BzOHrDvPQgEYQ9y0roOxFmYTS44VsLfxaOLaFxA%2BCwR2HWlGCrFAfKvYcDvGo4BizNJvbK40aeQtMmKVTNoiU%2BqW7Z6hipIehP6myiCEqXudzKBV9QR6QMLfNhsMGOqUBECfqo0cTuvaHXXVyHdHJOO6XRXRj%2BTazQ%2BAfnNyK1Iq8e32V2eG79KpNdYbFMgWkuL5ZfS0C8EEiy967gxlBq5VaNjTKEvgLVOjMaz7MUZRFQthSJwZBt04oBMDCB0XhkeAktd%2FzXvW%2BbRCq94f7QSpyZlba1siUd4eH5zWNsHcwIUBEZOLDILldUUNy70GjrBMOF77O6YmcehV47HbjMtcCmC%2Bw&X-Amz-Signature=be5d8505410e4bfb3302b204ba88a79ff351c9e8b1093fbe46a0ec56de4a8e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZBH6PIU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqlhCVvrPGGHK11gBiqj%2F2BYVB2qz702Knp6e41cNUgIgfpH3seuj%2BZRr4InTjI9y31HOuv%2BGzkb6h24zxG5SKUwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0%2Bk4pRurhMm0Eu3SrcAy6ow0vkG%2BlnBVR6vl139bGRU%2B3Q8CA5%2FyYdRq7aXIgjFp9VUUWO0oIhrm%2BP7kSsG0UzqEgVTZ6bRmZHHTJsI4M%2BQuqLA0BRHnugrGvSZxrn8KKwrtmggsI0W%2Fa50qAUJ59rZeHzPr4ruRxFmiyMgNHbXgpzAGkIjzeTbIKnmOiVt01fAt5xY5MKSzTIUatwI%2Fw58CIFkP7vNaG6cyW74nks%2B2kUWPhti9kKx%2F9zyHSMBzFwz7F4CXqlR2Zfw2dYcKhI9zhPm%2BULIENkLoxEQQUENVI84TlPoQg%2FtCv8pz61zwSNSAYWimc12aN4rg7KRaWWVzVh1syN4g0V40tusIBNGcdNJtwOow2byhdBi5zItPtdBJzBIusvWBYuoPLp%2Fgcf10QJZfsMecYXFVZXkFHtUEU3STeGkjJcVAfFK%2B3Of9sgCDtxmGbIO3jkwnE9zbPGPEuL5e78%2Fn1%2FBuP%2BJ4EsiRhf9syORO1QLfqi29OGmdFTsMbLuS7cUJBFeqsRBnmNU7J%2BzOHrDvPQgEYQ9y0roOxFmYTS44VsLfxaOLaFxA%2BCwR2HWlGCrFAfKvYcDvGo4BizNJvbK40aeQtMmKVTNoiU%2BqW7Z6hipIehP6myiCEqXudzKBV9QR6QMLfNhsMGOqUBECfqo0cTuvaHXXVyHdHJOO6XRXRj%2BTazQ%2BAfnNyK1Iq8e32V2eG79KpNdYbFMgWkuL5ZfS0C8EEiy967gxlBq5VaNjTKEvgLVOjMaz7MUZRFQthSJwZBt04oBMDCB0XhkeAktd%2FzXvW%2BbRCq94f7QSpyZlba1siUd4eH5zWNsHcwIUBEZOLDILldUUNy70GjrBMOF77O6YmcehV47HbjMtcCmC%2Bw&X-Amz-Signature=efe1beceda4697776c4d59666941b3ec987bc1a60e0939f9e09ec223f91aa080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZBH6PIU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqlhCVvrPGGHK11gBiqj%2F2BYVB2qz702Knp6e41cNUgIgfpH3seuj%2BZRr4InTjI9y31HOuv%2BGzkb6h24zxG5SKUwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0%2Bk4pRurhMm0Eu3SrcAy6ow0vkG%2BlnBVR6vl139bGRU%2B3Q8CA5%2FyYdRq7aXIgjFp9VUUWO0oIhrm%2BP7kSsG0UzqEgVTZ6bRmZHHTJsI4M%2BQuqLA0BRHnugrGvSZxrn8KKwrtmggsI0W%2Fa50qAUJ59rZeHzPr4ruRxFmiyMgNHbXgpzAGkIjzeTbIKnmOiVt01fAt5xY5MKSzTIUatwI%2Fw58CIFkP7vNaG6cyW74nks%2B2kUWPhti9kKx%2F9zyHSMBzFwz7F4CXqlR2Zfw2dYcKhI9zhPm%2BULIENkLoxEQQUENVI84TlPoQg%2FtCv8pz61zwSNSAYWimc12aN4rg7KRaWWVzVh1syN4g0V40tusIBNGcdNJtwOow2byhdBi5zItPtdBJzBIusvWBYuoPLp%2Fgcf10QJZfsMecYXFVZXkFHtUEU3STeGkjJcVAfFK%2B3Of9sgCDtxmGbIO3jkwnE9zbPGPEuL5e78%2Fn1%2FBuP%2BJ4EsiRhf9syORO1QLfqi29OGmdFTsMbLuS7cUJBFeqsRBnmNU7J%2BzOHrDvPQgEYQ9y0roOxFmYTS44VsLfxaOLaFxA%2BCwR2HWlGCrFAfKvYcDvGo4BizNJvbK40aeQtMmKVTNoiU%2BqW7Z6hipIehP6myiCEqXudzKBV9QR6QMLfNhsMGOqUBECfqo0cTuvaHXXVyHdHJOO6XRXRj%2BTazQ%2BAfnNyK1Iq8e32V2eG79KpNdYbFMgWkuL5ZfS0C8EEiy967gxlBq5VaNjTKEvgLVOjMaz7MUZRFQthSJwZBt04oBMDCB0XhkeAktd%2FzXvW%2BbRCq94f7QSpyZlba1siUd4eH5zWNsHcwIUBEZOLDILldUUNy70GjrBMOF77O6YmcehV47HbjMtcCmC%2Bw&X-Amz-Signature=9d1a70dbeb5abd9076e025fe5a22fca6ac5dc807540346236a8316179d4bff92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75X5JID%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHIE6JDpd9IlkGjpY0w6gT7SNf42EGTStXKhvdefDakAiAfKUaZjzW9DtgkFImESSpqluy1ksIwD6L0rAs9MUK9vSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjKDwUd9WLdJHptfWKtwDljaBh3q3nWTNuNQDyiylFFCa5FE1ESrbdoLig%2BpRNWR1tqdAqMF7AU3fVfuD2%2FJAWLaVIZY1xPNLBz7fQc94sdeBZ2YlpSUveJeCu4uBLpDsLb1vXEbV5xf2QADoVidfhVEjtWParHQlBIB%2BTDXKd0Wn7FYBHt0xvTBiXJ6qdXhXeY7LCrOykS17v6XGUBLMtasTO%2BZ%2BD%2Ba1Lc9Lc6qIVhIaAkaRxA%2F3P4q7%2BtZfpkvVW4fOj8B1pYJM6Yclqndd7A22zocAcWO%2FxOnQl2TPrqQeRBywdm%2BIsUEjMTKQ9vR2J7C%2B9d3ZKNa07KVjBci%2Fgcbq3xLARqthtdMnWLP4dvhFrCL2hQmY7WezkzQqwQVmB50pYVv5D5qPvyRPaZANQnE14CkmzXadEWTnrX1AGT3vRuUpKw9toXML6%2Bf7IG6VvUXNPu%2FvDbeuobpbYJ%2F2TpAGPnVDMQPvGPp7GOBp0Km5auGKvJaju5kwHhD2qRi1rPpij%2BGTymevZwps06hr%2BA36o%2FSjJmpEKtwptup%2Fz0zcYpVQMZGY9LSmIPOsUazxD%2Bhe7wkSbLTJeyClXjqJUUzp4PfY%2BPehmBH7tlJW%2FXeWNIAj9ogQifvM2ZDd9OGMHM6MCDE2x01nXq0wys2GwwY6pgHRnHJeM6Pc8%2Fc3CZkHgQm7pgVKQ0E0IGJ7v0PRlxucwTd4M83iJBvrCdLVYbSjecQAjDsCKYFkNRrHCgRMOS0m%2BDX2%2FDUpg%2FwHljfXuNuzduqDdgpYS2vhc0Nhve0dqKvPLiL5vgkJlXlhJQIdu3w05wJZo0i6WkcRgi8%2B9bckJDYhCKsi9wXyfMh4KjXxOZE9RtAmNz2ykHAtFj0%2BM2XGdWZTuiKV&X-Amz-Signature=03da4611792c0db4f62aaadb63ee9921c425c163cda0cdb884655bb69874eddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVWAKSQ5%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FVhX1O8nvxeNI1X6OyOfXtXMyFNM6oPYwSeTWRpVVqAIgWMv%2B6gD1xo7nVQE08SGjRJv4ZFJtIy1%2F%2B%2BB3jobXVBMqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiOOJrJywR1w4UtxSrcA%2FpuEnLNEYCncHZOxNmRVFB8xKQiilekGDexIK8kdL04bhZf7x0n%2FXyQKXh%2BrHFXHRH0za9MPoANETd8gVr49RYGy828Xh5cSBaTortI6fIE0SRW7Y0QzsG24wcjHqywomm9FAwNqd6r%2BHocPpSqVLLFBwhN2DQVwtUeboni96XXRZ2OiwPrT8wmmxVCVJvyH7giXHxT0UlOt%2F6NvlHA0aR6aWrSiR83mzBeeQfRT9hTY8yFvoy7pW3C9nKiFi4kKKqYAb75O4ghjISdwKbeISOGjTy5QCsNE8tZjgneHtAmK5Vux%2FTzyhz94v1o9h4ECKvEJosJJ9z0fF%2FI3yzv7FmudDZ89YCV8zaNbdCuZLNqirtrNken0MD09MwAd9PgJ9RD4y4BGa6Jq69gASfYGJZmiU6r5LBRn61mAjLeEkUQ2iW2nFSiUEqJmtptWl1cUboLOYR9c54xCM7ocjU1EOQGx0XZjrt9%2BKwcT3Q6uBEDYIWYFRh2GZLyJLphyqc1TIgafOh%2FJvk6yBPBe%2BbSIBn1pi9g6zNoec86HC4fzogc0u4QyXx%2BQkuNmGYpIDpB9jyuofwfObz84Fe9ZSMccJiafZJHS8DTjzKhKm%2BgTBBkG1MvV0QzH%2Bmd%2BsxpMJHUhsMGOqUBI60ayVAKEcDRQPZYwrrOWNU5nEAcTK2NyFUYSstq1JcpypnNIoC8Xw2YnsFBZKjxQtW92%2BpfYL1mKyM%2B7uH%2B075%2FfSzXfB10Fuc1kZGntdblmc0tTT5ED4DtH%2FkcFDziwEuFyvYmTuWx8rWR%2BsGk%2Fsx1aqEXoQkm4p2QeaflRfSsl32gIMwDCaDZUSdZ%2FRZFfRf5NZIPiE7bHtQuJkKVg4chcyt0&X-Amz-Signature=6f4cd330c49db3bae22d89690ccec33b17d96d984c7443ca02ed82205e179460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZBH6PIU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqlhCVvrPGGHK11gBiqj%2F2BYVB2qz702Knp6e41cNUgIgfpH3seuj%2BZRr4InTjI9y31HOuv%2BGzkb6h24zxG5SKUwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0%2Bk4pRurhMm0Eu3SrcAy6ow0vkG%2BlnBVR6vl139bGRU%2B3Q8CA5%2FyYdRq7aXIgjFp9VUUWO0oIhrm%2BP7kSsG0UzqEgVTZ6bRmZHHTJsI4M%2BQuqLA0BRHnugrGvSZxrn8KKwrtmggsI0W%2Fa50qAUJ59rZeHzPr4ruRxFmiyMgNHbXgpzAGkIjzeTbIKnmOiVt01fAt5xY5MKSzTIUatwI%2Fw58CIFkP7vNaG6cyW74nks%2B2kUWPhti9kKx%2F9zyHSMBzFwz7F4CXqlR2Zfw2dYcKhI9zhPm%2BULIENkLoxEQQUENVI84TlPoQg%2FtCv8pz61zwSNSAYWimc12aN4rg7KRaWWVzVh1syN4g0V40tusIBNGcdNJtwOow2byhdBi5zItPtdBJzBIusvWBYuoPLp%2Fgcf10QJZfsMecYXFVZXkFHtUEU3STeGkjJcVAfFK%2B3Of9sgCDtxmGbIO3jkwnE9zbPGPEuL5e78%2Fn1%2FBuP%2BJ4EsiRhf9syORO1QLfqi29OGmdFTsMbLuS7cUJBFeqsRBnmNU7J%2BzOHrDvPQgEYQ9y0roOxFmYTS44VsLfxaOLaFxA%2BCwR2HWlGCrFAfKvYcDvGo4BizNJvbK40aeQtMmKVTNoiU%2BqW7Z6hipIehP6myiCEqXudzKBV9QR6QMLfNhsMGOqUBECfqo0cTuvaHXXVyHdHJOO6XRXRj%2BTazQ%2BAfnNyK1Iq8e32V2eG79KpNdYbFMgWkuL5ZfS0C8EEiy967gxlBq5VaNjTKEvgLVOjMaz7MUZRFQthSJwZBt04oBMDCB0XhkeAktd%2FzXvW%2BbRCq94f7QSpyZlba1siUd4eH5zWNsHcwIUBEZOLDILldUUNy70GjrBMOF77O6YmcehV47HbjMtcCmC%2Bw&X-Amz-Signature=9dadfffb8eb6b1cfb550ed30648bb533dadbd91aa517ecf1a1d97c1b239dc246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
