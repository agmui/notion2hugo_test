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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDBSLBK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxVQqiPMh3GWI7IYuJKC5RaR5XRfEF3mafb3g2mMVx%2BAIhAJrp7W7Hn3sN4DUJyJMX7s4lyCi4CvymWrOtGkZob%2BD2KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxPmheoSccsKvXNuEq3ANBSUU43OxrT1zm8IpW5S15UMg9sWrDP%2F0VopDVwa1DjkmKlOIw2LodlVDtp8wILJvdQk55tg7snKL3SKhNA8TpNFevaMlfUnY8DlBwPaUVKNF5lNMMMq3MoRbEytgLcMr3j3oXBS1zoTP5PKsINstFW2R0NhGElSgt9EnCTKcABdnP0W6VZ9%2F45wj36tgxESdjsuwcJgAO6Lyiathf0zSu3vkNxqZkdY6FhtaIH8B3B7Y5d7vJ%2B6vX%2F%2B4En9192TubOqyDCI3aealb4FG4zfpl3NfjneAMD5LL4Fm37usULRu5hagn%2FBVL%2FJ9vSNQFOAMD1vZ4yeRBsRXkq1%2B6NCC%2F7%2Furp2v3Yrkc%2FWZBfsC2PXGaY4SGnUn5uXMhxA41RyoWT3%2FAyLuX3NqmL6soU1nNs6gSOcI1sC61ARMDH7sNXZBXCltqlhFK%2BcEaM4mCMmgYcnBV1xejw%2Fp6i2dCSizeyStyPus43HpE5Myb8XLU4%2FNGqg3RC8MmYHxTdlp9nla2R31cnAnhpLnHPKKs97ADQTD1NKt970u8HAeD7j3SNd7kBebr3twLfBLOCbwss9G4qvy1MBIxaEiUQJM5UeroHGNAJE1dFTSORf2cSFD0csOGKQLPnhunN6OxYzD2oqjEBjqkAeOB54aUY026vPJuYIW2VRQkx6iUEXEGJjJn1yOq2vR0V6PFmEuQe1Gc%2FPDnBeg%2BW86NFfVn3OAULAIYpoTV4UEobY7a%2FyWGaVJiSkNRa7AgcRtFTuPWMF3mpNahryDmaEgIpnfL9qMKSooMnLNi95j6wWSoM3OolRcOKHqmcOslF9M23qv3HS2QyrVdaiNrv3aXPpANsqhzWA%2Fu7R31pjShgjVO&X-Amz-Signature=05d55ef90aafe01c8d4e0e8a80e870465f836177201166d8be80fdadb9646fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDBSLBK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxVQqiPMh3GWI7IYuJKC5RaR5XRfEF3mafb3g2mMVx%2BAIhAJrp7W7Hn3sN4DUJyJMX7s4lyCi4CvymWrOtGkZob%2BD2KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxPmheoSccsKvXNuEq3ANBSUU43OxrT1zm8IpW5S15UMg9sWrDP%2F0VopDVwa1DjkmKlOIw2LodlVDtp8wILJvdQk55tg7snKL3SKhNA8TpNFevaMlfUnY8DlBwPaUVKNF5lNMMMq3MoRbEytgLcMr3j3oXBS1zoTP5PKsINstFW2R0NhGElSgt9EnCTKcABdnP0W6VZ9%2F45wj36tgxESdjsuwcJgAO6Lyiathf0zSu3vkNxqZkdY6FhtaIH8B3B7Y5d7vJ%2B6vX%2F%2B4En9192TubOqyDCI3aealb4FG4zfpl3NfjneAMD5LL4Fm37usULRu5hagn%2FBVL%2FJ9vSNQFOAMD1vZ4yeRBsRXkq1%2B6NCC%2F7%2Furp2v3Yrkc%2FWZBfsC2PXGaY4SGnUn5uXMhxA41RyoWT3%2FAyLuX3NqmL6soU1nNs6gSOcI1sC61ARMDH7sNXZBXCltqlhFK%2BcEaM4mCMmgYcnBV1xejw%2Fp6i2dCSizeyStyPus43HpE5Myb8XLU4%2FNGqg3RC8MmYHxTdlp9nla2R31cnAnhpLnHPKKs97ADQTD1NKt970u8HAeD7j3SNd7kBebr3twLfBLOCbwss9G4qvy1MBIxaEiUQJM5UeroHGNAJE1dFTSORf2cSFD0csOGKQLPnhunN6OxYzD2oqjEBjqkAeOB54aUY026vPJuYIW2VRQkx6iUEXEGJjJn1yOq2vR0V6PFmEuQe1Gc%2FPDnBeg%2BW86NFfVn3OAULAIYpoTV4UEobY7a%2FyWGaVJiSkNRa7AgcRtFTuPWMF3mpNahryDmaEgIpnfL9qMKSooMnLNi95j6wWSoM3OolRcOKHqmcOslF9M23qv3HS2QyrVdaiNrv3aXPpANsqhzWA%2Fu7R31pjShgjVO&X-Amz-Signature=1d9ab0c38d9d153322865e98466d4a02f2561b7b3562b080d32f5965e14d9835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDBSLBK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxVQqiPMh3GWI7IYuJKC5RaR5XRfEF3mafb3g2mMVx%2BAIhAJrp7W7Hn3sN4DUJyJMX7s4lyCi4CvymWrOtGkZob%2BD2KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxPmheoSccsKvXNuEq3ANBSUU43OxrT1zm8IpW5S15UMg9sWrDP%2F0VopDVwa1DjkmKlOIw2LodlVDtp8wILJvdQk55tg7snKL3SKhNA8TpNFevaMlfUnY8DlBwPaUVKNF5lNMMMq3MoRbEytgLcMr3j3oXBS1zoTP5PKsINstFW2R0NhGElSgt9EnCTKcABdnP0W6VZ9%2F45wj36tgxESdjsuwcJgAO6Lyiathf0zSu3vkNxqZkdY6FhtaIH8B3B7Y5d7vJ%2B6vX%2F%2B4En9192TubOqyDCI3aealb4FG4zfpl3NfjneAMD5LL4Fm37usULRu5hagn%2FBVL%2FJ9vSNQFOAMD1vZ4yeRBsRXkq1%2B6NCC%2F7%2Furp2v3Yrkc%2FWZBfsC2PXGaY4SGnUn5uXMhxA41RyoWT3%2FAyLuX3NqmL6soU1nNs6gSOcI1sC61ARMDH7sNXZBXCltqlhFK%2BcEaM4mCMmgYcnBV1xejw%2Fp6i2dCSizeyStyPus43HpE5Myb8XLU4%2FNGqg3RC8MmYHxTdlp9nla2R31cnAnhpLnHPKKs97ADQTD1NKt970u8HAeD7j3SNd7kBebr3twLfBLOCbwss9G4qvy1MBIxaEiUQJM5UeroHGNAJE1dFTSORf2cSFD0csOGKQLPnhunN6OxYzD2oqjEBjqkAeOB54aUY026vPJuYIW2VRQkx6iUEXEGJjJn1yOq2vR0V6PFmEuQe1Gc%2FPDnBeg%2BW86NFfVn3OAULAIYpoTV4UEobY7a%2FyWGaVJiSkNRa7AgcRtFTuPWMF3mpNahryDmaEgIpnfL9qMKSooMnLNi95j6wWSoM3OolRcOKHqmcOslF9M23qv3HS2QyrVdaiNrv3aXPpANsqhzWA%2Fu7R31pjShgjVO&X-Amz-Signature=ae4029153ea5adab50997e0de00e1ca8925037d78150880a760c9ad74775e98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY2XAK4U%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9i0EReqa4zgxu%2Btk3ukND2I4WizugKaUbEuAHIv61bAiEA%2Bk%2Ft04OM2ZMEEBrQiL3ekKL3zF1LonPzTfg6UgBWurwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0s3Im97cWA0%2FgmJSrcA%2Fi%2FgUu4q0ov9mjA9lIsr1n8K6LUb6cRZkyLgxMO%2Bo6b38hryVM8Qv3BxtxzAWnVD124kaCYLx9bwapfp7lcmaOzrED6rAdKAst6ILQdd6SqbL50tBHA%2B%2BiJZAef%2Fglh%2BLO4KgkJnslQHtVv8I544EReQbTKTchuWscsaJuprqVLtkzX8nkkaLUAMRDXNw2rQfRZLtNYjTtw1zFXLCDzF74849%2FGlPnh%2FIyEncIifXlLN4b5VTx1HjeghtB9OpO9CSSA%2F3zeRpIY8wOvLSv4iGZFFnwyk6GQYdRRUpVcSwhC4eC%2FI4jnCSei%2FEbvLgvzxgfHhtJeEHCa%2FniTUSiUT5bhO6FJ5maCRCkUdBwyWo3t0G8KS4ZInAP1fYZ8HHT7RXwVqPplayentwexnTytAlZeJ03pGXLh8KQvXmzmPRYhwqsAE19UuEtUER%2FrPL81zF%2FUXJ9J7qxgqovUyPVaWw27iWeOr2MvG8eXfozDEyR8sFhW0XYBwHpK5ZDXpJ2o1PIojsBmqjnenTBHVB93NOfg1Yr3WWpVc7BY%2BoZ0hMd%2F%2BU5OGJCTPeofux0FZ%2BYiOXJrJNwwpsXj0GLUgsDq9RgmyfmZoNpeDvw%2BWmwq%2F6vAGfoxujzy8cheP8ZJMJujqMQGOqUBKwAnRLvdOGyraBnpKb39vhq5pkAAW7D61%2B8EbNTVmgYCPq434cwn%2BEd8ZSBLSW1Itu8ySNRqGUBNQ%2BsGEHdSHN4pfhxf%2BnYnMuc91ztB8Fm%2FDtDgnrgOKJlCR6y0pcIQheK6wUlvwsbfFponB9kAL%2BPCuEnNnNPFS0VDO1IVmnIlUfyV6ayODvhRvNsCgI5C6Ooei74IudAlSGqqA6q2OAoppQ91&X-Amz-Signature=0f776f3933f8b91d9cba336de4cdfb077a308399ef2206c45630858b7971d6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUBJSWZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8S1UTjqWxUsEtxEX0%2BuPrmtEUnXuh5Zej%2Fw6G3ZPwRgIgDQg79r84UlEVjq%2BVLEmS15E88pWU00nWjZb60yhs25QqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEctftrof96wmwU9xyrcAzanG9pLvKzWosznzIJosWgvmuDzyIg2niulgTjWy4MozOPDb7shlgNrJBQ%2FFEIvuwh%2B8pTjUHVyWySnRtEnHzdf%2F%2FePLWvtj36dq%2BWD2iCJzOx2%2F%2F1ZqZhfvlGjyaZoGnb2%2BL9XWZd1xCRsctSpvuUoHaAzqFQvGaI3W7PgeDP286WUllBAxWWRtAVdt8ZNT2KiW9rbcuI4EFzlsrZSOdv11fdJse34yqAYj2TqScBSMjlwpzqlG9dqNl%2FW8dHK56reW5YHFqn2kdkKAk4k1gbpfq3bBFU%2Fn3tv4AFyu%2BSbh%2F6Cv4imazggsnN6b5X6WAeVb6r5y6boRWGPEsB0n%2FcpiWo8lwPJ3IidgNwBi8aLoasSPDnX66ti1bVPcc%2F0IeO1rn36HaqjCXG0Peo5nZE7S2vKmfjgXoyAT%2BOMQGief0aolNBBzq6CzOoQ4dZqPUpPt67MR9gDf17MqlnHo8GpQmDnMH%2BHRf0fQ87uvejN3orVKzhWMkIkjOn8aeMPmKBndjBQqY9QcBZf6bbraPKk%2FThvOS%2FTEAxiguC%2BMDS2prj01a4Vw3v0i6LlrYG8DAwb0u5JfFeIpms%2FBLotqvlQwFhjjTuZsBNTfSqKPtTxQ27V4dlAB16vJztfMOWHqcQGOqUBs%2BoLRoeFGBCjGrk1XObEmwJHnTCuDXFaZvCAFjtF5vDpV6LBQT23fLtnNI0KhVVfefYhOINxMgJUxOYJ3IacHMRdPBeoP5ba9TGgh6O4UlDhqxo%2BPKTl7ngFUSCjxIlQSTjipUzUmFm02fLpxkxp5egJxE0DFDN%2BwVkgcim38ILrIWn61ptnHLksc9V80mH8obDFfziiKRufE0I3qfSXzpolMQWG&X-Amz-Signature=d7c7579e43231dd5d33d96acb20f1a8f8fd8f820b10c99567558233f90a0c3e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDBSLBK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxVQqiPMh3GWI7IYuJKC5RaR5XRfEF3mafb3g2mMVx%2BAIhAJrp7W7Hn3sN4DUJyJMX7s4lyCi4CvymWrOtGkZob%2BD2KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxPmheoSccsKvXNuEq3ANBSUU43OxrT1zm8IpW5S15UMg9sWrDP%2F0VopDVwa1DjkmKlOIw2LodlVDtp8wILJvdQk55tg7snKL3SKhNA8TpNFevaMlfUnY8DlBwPaUVKNF5lNMMMq3MoRbEytgLcMr3j3oXBS1zoTP5PKsINstFW2R0NhGElSgt9EnCTKcABdnP0W6VZ9%2F45wj36tgxESdjsuwcJgAO6Lyiathf0zSu3vkNxqZkdY6FhtaIH8B3B7Y5d7vJ%2B6vX%2F%2B4En9192TubOqyDCI3aealb4FG4zfpl3NfjneAMD5LL4Fm37usULRu5hagn%2FBVL%2FJ9vSNQFOAMD1vZ4yeRBsRXkq1%2B6NCC%2F7%2Furp2v3Yrkc%2FWZBfsC2PXGaY4SGnUn5uXMhxA41RyoWT3%2FAyLuX3NqmL6soU1nNs6gSOcI1sC61ARMDH7sNXZBXCltqlhFK%2BcEaM4mCMmgYcnBV1xejw%2Fp6i2dCSizeyStyPus43HpE5Myb8XLU4%2FNGqg3RC8MmYHxTdlp9nla2R31cnAnhpLnHPKKs97ADQTD1NKt970u8HAeD7j3SNd7kBebr3twLfBLOCbwss9G4qvy1MBIxaEiUQJM5UeroHGNAJE1dFTSORf2cSFD0csOGKQLPnhunN6OxYzD2oqjEBjqkAeOB54aUY026vPJuYIW2VRQkx6iUEXEGJjJn1yOq2vR0V6PFmEuQe1Gc%2FPDnBeg%2BW86NFfVn3OAULAIYpoTV4UEobY7a%2FyWGaVJiSkNRa7AgcRtFTuPWMF3mpNahryDmaEgIpnfL9qMKSooMnLNi95j6wWSoM3OolRcOKHqmcOslF9M23qv3HS2QyrVdaiNrv3aXPpANsqhzWA%2Fu7R31pjShgjVO&X-Amz-Signature=1e287dea2c5dc77f78f63f519f7d4e016e8a7ca620128deac0c47f6cdefe6697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
