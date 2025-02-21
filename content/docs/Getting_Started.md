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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5P7OXD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCruHHZQ%2FbAy9wDFV1MNROty657LAhJjd%2FYTpyPXomy8QIgX6SWHBTNpGEUMCXCLjZdOprrNMwYilETG0f77NlZna0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWns9wEOHFMqh1jSrcA8uce%2FWZ1OL8zf6dGg0bol90B4hh%2BlcXrGtbjivjFrMPY4m5axNKtI4bI0NHwkzYT003%2FgY2jMg2arjSjbJhk0SoNdn1PiojqsCetCyhq%2B8u3bglbX3Ak7RAVjeU1wYdj0o2fhLCuFslExxbd6ad4R6CcJeKHBzg5rzfrHSgcN24FMYVi5dZ9UkaCPYQ2XCNbpGOFC0muew0FNPbgw6IyML%2FOHYaLTJttwTDsDjJD9OyplT%2BLxijQVLNpKZliY3i4JlVSpiPsimoN6DaRa%2BvpmuCnMM7uORsMh675gmnyqBtH%2FLMHtdzSfL%2Fvo2851Y2kl0%2FjFsN2kwQ9nrJun1y7IZtAFiPwldS0cXFxNDRWrbaTNWLXqRHSFyZmQ2yGWzWCUzx44yKYM0GWl%2B%2Fs%2FNej%2FQQzDFn7KltUGO1AiWBrAp57ng0a9JYdZVuFVvEYUPcfU1%2B5uhQFUtxODaj83y9zcOhh7Sx1we1icbzloprlMP2W5jo52QSWlIVGeVdiS4ekV3vM7hjV61ccVjXjPPlwqGgXSgHOIZtyXiLWbENDFoVndVDY2qDc5GP8gS8NGvlcrUQvVn67msAXcBzaO0r6WSa%2BXlZif4iRP49npm8NLPrw%2BMH2FiK4zSWkeizMP684r0GOqUBstzPzANIiBy9sMJqlHrhIJnu9RfY2dKTnCqJ%2F6bPELWhatlifPIZi2wASAmFXsirOkozjvS%2BM22Mok2Bz9YHN83BbZent943MAKFS0b8s3nGRyCKT9wLiAlA5Apb8qJ3T0Nr1Ilzkk%2Bt85Wt%2Fd4kCsQq8OAUhRNO2xgiftJsTtsDqlVGiTgZzl%2BS69QdRz1F%2FDYqonQPP0MrQSJ0Ayp8fWZ1OOrX&X-Amz-Signature=65ea8319fd9b7d92ae2575f0e324634821dca1eb13434f574cb63a66ba1f0713&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5P7OXD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCruHHZQ%2FbAy9wDFV1MNROty657LAhJjd%2FYTpyPXomy8QIgX6SWHBTNpGEUMCXCLjZdOprrNMwYilETG0f77NlZna0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWns9wEOHFMqh1jSrcA8uce%2FWZ1OL8zf6dGg0bol90B4hh%2BlcXrGtbjivjFrMPY4m5axNKtI4bI0NHwkzYT003%2FgY2jMg2arjSjbJhk0SoNdn1PiojqsCetCyhq%2B8u3bglbX3Ak7RAVjeU1wYdj0o2fhLCuFslExxbd6ad4R6CcJeKHBzg5rzfrHSgcN24FMYVi5dZ9UkaCPYQ2XCNbpGOFC0muew0FNPbgw6IyML%2FOHYaLTJttwTDsDjJD9OyplT%2BLxijQVLNpKZliY3i4JlVSpiPsimoN6DaRa%2BvpmuCnMM7uORsMh675gmnyqBtH%2FLMHtdzSfL%2Fvo2851Y2kl0%2FjFsN2kwQ9nrJun1y7IZtAFiPwldS0cXFxNDRWrbaTNWLXqRHSFyZmQ2yGWzWCUzx44yKYM0GWl%2B%2Fs%2FNej%2FQQzDFn7KltUGO1AiWBrAp57ng0a9JYdZVuFVvEYUPcfU1%2B5uhQFUtxODaj83y9zcOhh7Sx1we1icbzloprlMP2W5jo52QSWlIVGeVdiS4ekV3vM7hjV61ccVjXjPPlwqGgXSgHOIZtyXiLWbENDFoVndVDY2qDc5GP8gS8NGvlcrUQvVn67msAXcBzaO0r6WSa%2BXlZif4iRP49npm8NLPrw%2BMH2FiK4zSWkeizMP684r0GOqUBstzPzANIiBy9sMJqlHrhIJnu9RfY2dKTnCqJ%2F6bPELWhatlifPIZi2wASAmFXsirOkozjvS%2BM22Mok2Bz9YHN83BbZent943MAKFS0b8s3nGRyCKT9wLiAlA5Apb8qJ3T0Nr1Ilzkk%2Bt85Wt%2Fd4kCsQq8OAUhRNO2xgiftJsTtsDqlVGiTgZzl%2BS69QdRz1F%2FDYqonQPP0MrQSJ0Ayp8fWZ1OOrX&X-Amz-Signature=43ef7b9dcc08d1502473cc7c34935712c506877aafad3bf42d3df14ef42d267b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656E5JWU6%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhxFepousjSdz6Cha6zN7XvfN4TshHw%2FsMUq3Sv%2FhqcAiEAkTdaVsltDz8WDPKvDE5qEbwyYnPDW%2BtwJ%2B3XHRgEmdMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7apIsZtsGgi21WOCrcA4gga2Njsxi1o%2BwuDRaDkbIcXNzh4SMT%2FhZnojXGV6qebFjYG656YZemwkR3PX6%2BbiSkSlpoH5HxVzsJ%2BDKcIPJ%2BWGuRH2XqdPKy0D2%2BgBddvTUlir883Nle94d7LDOsqRqAmD%2Bg5NaSJRlczDO%2B%2FJuJKG2SkynjGJPZhz7eqJQuQH0gGF6iADK%2FAoXVFt2hBXRS%2Bqn7eSjWA7cm15RjYKMIJDTMKQi0uB%2FLLrJSjYyCC2ox3Jq2ONPaBgpaq2eYmwequZbcCEYiNv9bmGoXbo1xxLgEkxW9RvgJqB7HF5iUWWsXt0Dsrf1U7XvMUbAiFI8MRNsW7QfZV8h84uC%2B1CGJiK04ysiCZzE%2F2QAuAGGCql%2B%2BCgW6ZL0Nys8dG6npgPzpShGFRM6MVzaD5V264BPPuGawQDH307shQORzlMFFyZEXerFKVnV2pwIzQV42C1Pu5rOdXKTfAk9yhDmHpWpOEU0HRlLpsP%2B98gy3gQifkvY6qeHdj5eIcegyMIVGGyPEqMRxtsQF0o%2FjKjMC8iDiVkDMnf5fHrl7I6yP%2FPDcTSiyNU9NWh5w5SsAJtxOQ8XguLyCxB8%2FarwkEdyb9GWAlWxaqObDdltDPhJsQ%2B7HmgogfOO4%2Fcw3v2PVMIa%2B4r0GOqUB3MSziCn6%2BvGyKspfwzlEnv5Ecmz1cUzmbmbfYWd1R7k2tGavd9Z0I9%2BL9aTVWwGFar1pIabmF%2FVM%2B5GvzMsPPK06cIFqPTFSGJNRbjrXeUs7dhbyZvmK25qvgnL1ZhM7lAM4cQFTjVQRwNXd7zpxdkaNi4krKfsRynzBIUd9ot4Rxf23BVmN450WXp1nIzd0lBNMn1LkdorVusrZj%2FIa4cZ4YE%2Bm&X-Amz-Signature=219a1855d27f7fdc8c2f880749c023ac19a52eac755855c5e8af2990febc67c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VCI7JK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoL%2FTCKur1dEqyfPmAQ1JjgKcPpUU8dSESsE2Z%2FErcjQIhANoDXtkoB8Xrli0yAmVIuu6R9ac1QwVnOhfEhsD4th2PKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNsx6%2FOiK4s2vsZXEq3ANjBG84Q6lNUMmgqcNre8giWcu%2Bi%2BPqfnkkfyS1KJWOVKq68TdEXptNZdX3fWRgS5zNiqoXRVBHurAJOLslZFr79xcbw%2BHXyf4Bdg1Li3XbwLHOGBXzs227WBF%2BApdobguWZzrZPZwmz9jVuYMsrXCkEReBWZsHXvwfAvEzgWiR4yfhkZ3Ybaax%2BeAckRgNEdaVB8RmZxHjvTWClCsS1k%2FIbhi8eFHFqabL7nRYi8ticwjv3QnsgnxkNvYCxhMFLLbp96trgqC6FU%2F3nBDfG6I9%2FTzlYwE9ZP7BiXWcabpsb9SKu8SJuVp31ieqKpgpHtDTq%2FZXbgluwBOOXx%2BbDOi8rCz9h%2FtyaVKoT3F2eELweCbbYZS99d09uIYE8FTWbqcBnLb8E8n0jkmeXUV7vCsfT6GJ1O51f7rirdT4G2T07%2FIaFF3arbDDLDetSmSlwLOyRntHsj7JiuYwlyf39ON8l50E59KXfSQjz4RWThNTEYXuMXgQlvh3UB%2FCDdfnCVQMFurnUiyds41GR309puhvefiYXmzrLCSxCXfKlR6K%2Fg6D6JOJdtK%2FzfxcBaqEgHnTAr3Nmilz5rJRaN1OpFlbIVX4wt4Ue8e1ko5qfsl534ll4Lnl3A4GdTk%2BlTDfveK9BjqkAVdAspQULZJpJBl1rYu2pfevPsxlv8Y9M2KEKN26hPsEqlrgMl46iTNPeRpWN11Vty27X9tzx3gBlw3bWyR8WMcYezS%2FJ2kBJ7wVZ%2BxYLtBgZFA1ygdKxRuVp8jhd1h3OQI559AroinbiGOo1OWrQ88YfMz6x5SiuZu1bpUtdjA5rky2Flyx7p%2B6eeanGeO4o6E8MimcF2eECbMRiEp7Ct6sxfLo&X-Amz-Signature=a546b74aa580019a349b7c42612fa79e3e68b8338046a14342b8ef4bad00b77d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5P7OXD%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCruHHZQ%2FbAy9wDFV1MNROty657LAhJjd%2FYTpyPXomy8QIgX6SWHBTNpGEUMCXCLjZdOprrNMwYilETG0f77NlZna0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaWns9wEOHFMqh1jSrcA8uce%2FWZ1OL8zf6dGg0bol90B4hh%2BlcXrGtbjivjFrMPY4m5axNKtI4bI0NHwkzYT003%2FgY2jMg2arjSjbJhk0SoNdn1PiojqsCetCyhq%2B8u3bglbX3Ak7RAVjeU1wYdj0o2fhLCuFslExxbd6ad4R6CcJeKHBzg5rzfrHSgcN24FMYVi5dZ9UkaCPYQ2XCNbpGOFC0muew0FNPbgw6IyML%2FOHYaLTJttwTDsDjJD9OyplT%2BLxijQVLNpKZliY3i4JlVSpiPsimoN6DaRa%2BvpmuCnMM7uORsMh675gmnyqBtH%2FLMHtdzSfL%2Fvo2851Y2kl0%2FjFsN2kwQ9nrJun1y7IZtAFiPwldS0cXFxNDRWrbaTNWLXqRHSFyZmQ2yGWzWCUzx44yKYM0GWl%2B%2Fs%2FNej%2FQQzDFn7KltUGO1AiWBrAp57ng0a9JYdZVuFVvEYUPcfU1%2B5uhQFUtxODaj83y9zcOhh7Sx1we1icbzloprlMP2W5jo52QSWlIVGeVdiS4ekV3vM7hjV61ccVjXjPPlwqGgXSgHOIZtyXiLWbENDFoVndVDY2qDc5GP8gS8NGvlcrUQvVn67msAXcBzaO0r6WSa%2BXlZif4iRP49npm8NLPrw%2BMH2FiK4zSWkeizMP684r0GOqUBstzPzANIiBy9sMJqlHrhIJnu9RfY2dKTnCqJ%2F6bPELWhatlifPIZi2wASAmFXsirOkozjvS%2BM22Mok2Bz9YHN83BbZent943MAKFS0b8s3nGRyCKT9wLiAlA5Apb8qJ3T0Nr1Ilzkk%2Bt85Wt%2Fd4kCsQq8OAUhRNO2xgiftJsTtsDqlVGiTgZzl%2BS69QdRz1F%2FDYqonQPP0MrQSJ0Ayp8fWZ1OOrX&X-Amz-Signature=e496b35fa5524e65589dfcb961dca23bf2b0a5f8b288e81872eddbeb329fa015&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
