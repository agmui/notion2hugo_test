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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ53VBAZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxnNAoLDIOp9pul%2FJ67QNITDWmOj8EO2nt2LPOuhOGFAIhAJbWjOUCvRb84Nkbs7DNP56wPm2Cb%2F73RJZmYiK66ID%2FKv8DCBYQABoMNjM3NDIzMTgzODA1IgzzCt86cFuAbxcVlw4q3AMhcaNBkFfo0SZoPH%2F72kFO7Y2GEf84Kgbl4%2Fw%2FOczJo7q2PG%2Bkbo1Mpozs7EOXLpjODrf2OjpaJPz%2FAjffOSbC3qsKWKFVRwZMFbxa7nCVv4sO%2FzwX0tRZ0j57cCWKkfLl2NRloHp%2Fg5Cvy3lyaRzJ6q%2BZoQ%2BX7Ru9y6OWFqrtFomTE6rY2ErV%2BmotFQ527E3rkNO7G%2FkcUnLStO52mSyfSKvGLNQ%2FJuRuNGBMCabuJFT4TJT8pgipbs8vFKDeS07NYPeT3Qc3wLwfsafsRHDqYbYQQXH%2FOLXF5ZIxVoCYrpTB%2BApBbOgt45JMHtFleMpPtSFxRkJ0btYTnIUZ85f%2FD9Mo4ZpdTmc2HIOpGJb%2F7DbGMn6uw9VduIrXGl0%2BykSA3UU9HMR7ld8OdMZIO34CjpU1YOMim6IFkV2ZgYMj%2FC9oPQsBp37svG0UllRMXxV71yB8si%2Bh51RybV%2BGrEe1gA7r7pvMcXydGyOeiV%2FTE3scnml2NUtyj2lxf9w40XuHEn5CHMNIza%2BXMVxKIOfZwdEDcaXvyo5WnZdmyW1MjAYbnQLOQgN5EIhsrAQ8L4q93nJjNGDwFPzYgkyF3Q%2Fapo4uGll9aqXSvKpFOtCetuZaOLMmPiCJTQyZlTCCsr%2B%2FBjqkAVqC43680D0DnW4N1gbKVbFMxNPKNRBwgghVBE87GCl0cEx%2FKSw%2F0VKOPHvD%2Fu9p2yMxub8X%2FthKuK3Vrvl86ivMr0610yg6QFh16CczDggTYdf7iFTkxUM6S5yUOScgXRUzT7sXsOhNaSCRWQ%2B2qKYRw1XwIHtAe1xsIEgKpOYIBsbkvL0G9Zx8E%2FZly3kflrMs4XlEFHy4cYs9gVNLIEBOYaQ8&X-Amz-Signature=cf6a7e5560250b04f680694100f83e6afc45641a36b8006ad9ea7d706d0ba368&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ53VBAZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxnNAoLDIOp9pul%2FJ67QNITDWmOj8EO2nt2LPOuhOGFAIhAJbWjOUCvRb84Nkbs7DNP56wPm2Cb%2F73RJZmYiK66ID%2FKv8DCBYQABoMNjM3NDIzMTgzODA1IgzzCt86cFuAbxcVlw4q3AMhcaNBkFfo0SZoPH%2F72kFO7Y2GEf84Kgbl4%2Fw%2FOczJo7q2PG%2Bkbo1Mpozs7EOXLpjODrf2OjpaJPz%2FAjffOSbC3qsKWKFVRwZMFbxa7nCVv4sO%2FzwX0tRZ0j57cCWKkfLl2NRloHp%2Fg5Cvy3lyaRzJ6q%2BZoQ%2BX7Ru9y6OWFqrtFomTE6rY2ErV%2BmotFQ527E3rkNO7G%2FkcUnLStO52mSyfSKvGLNQ%2FJuRuNGBMCabuJFT4TJT8pgipbs8vFKDeS07NYPeT3Qc3wLwfsafsRHDqYbYQQXH%2FOLXF5ZIxVoCYrpTB%2BApBbOgt45JMHtFleMpPtSFxRkJ0btYTnIUZ85f%2FD9Mo4ZpdTmc2HIOpGJb%2F7DbGMn6uw9VduIrXGl0%2BykSA3UU9HMR7ld8OdMZIO34CjpU1YOMim6IFkV2ZgYMj%2FC9oPQsBp37svG0UllRMXxV71yB8si%2Bh51RybV%2BGrEe1gA7r7pvMcXydGyOeiV%2FTE3scnml2NUtyj2lxf9w40XuHEn5CHMNIza%2BXMVxKIOfZwdEDcaXvyo5WnZdmyW1MjAYbnQLOQgN5EIhsrAQ8L4q93nJjNGDwFPzYgkyF3Q%2Fapo4uGll9aqXSvKpFOtCetuZaOLMmPiCJTQyZlTCCsr%2B%2FBjqkAVqC43680D0DnW4N1gbKVbFMxNPKNRBwgghVBE87GCl0cEx%2FKSw%2F0VKOPHvD%2Fu9p2yMxub8X%2FthKuK3Vrvl86ivMr0610yg6QFh16CczDggTYdf7iFTkxUM6S5yUOScgXRUzT7sXsOhNaSCRWQ%2B2qKYRw1XwIHtAe1xsIEgKpOYIBsbkvL0G9Zx8E%2FZly3kflrMs4XlEFHy4cYs9gVNLIEBOYaQ8&X-Amz-Signature=d6d063d742092bb092172062c652c2de02fed4595391552c94cfb12b1104c6fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNTBHQVY%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjtievDdX2a8p4egKwjkgNMBGQVpmRdqmAsqLqhXGNUAiEAhJvEUZFEcMNtJ2Pl6UaLXtaNJsP1Zfb12BYAqPA5Oocq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAUVj57QOJSLHGlf6SrcA6A3Wx7NDJQkYM0EHVWlPpJrgPlQRS1FkDa7OYLXSJudOITCP%2F2jTu%2BErVxFzXpqruoTSO4qdGXSBrqw%2BWSxA1fSwU1llHObBc4W2Zc39ejUlyXfxZSsEtFpzDRQkslrgQKgFH8z8wz1grhktuLX3nEkMnZqFLTwG5GhZM%2FXzdeyoBEELmBQ9jgu%2BQUnRDYjmj5RnrT6t%2Br28dtrrnT%2Btro9F%2BSGeb2AKtzH054zNX%2FDOS%2BrYPUjG5jc%2BCkyf3nMBdT88ocTqMHf%2Beka1ylb50xgiXVzVjL4rDtV0KF%2Fiv%2FdWavIGrGXGEafA7fgoMSYPrC1f2BwPUQH5nk3gChl7p2cw8lTTe0LpXT3cD%2B4zvAG4Z1WtzihKmzfwBUVJcfRXc7cqSHp%2FAYLZAy2btu53YRRRN%2Fv0qmKIRh1tolunYu6B4VHLOFubRJW8w%2F7uP3%2B8ubhvaQsCg0C2F6F6WaRvk84ZF%2FRSEyeVJz%2F7Cxr2Wr5N5nUXH1Lx5zPC5oLmgGK717oYN3tWqZYfoTXJ%2BatVvHmKnfhR9BdCl%2B01kzRcvoaAD%2FZQo0bbLt412rroI9R3MSr1JZhMmKydx47F4ry2Zxgbwp4dr%2BgCyzWNYjRv44Ikmk0S3McNOlweDr9MLGyv78GOqUBlbwe5UNxfUrfUR0TXppiwTbiR0895vZN59xsIOy0CU9gdew%2BPn8vyZK2R3CMHANaYzAlmjgsmxPTaWnNq8OGD%2FpqYWFCqPwyD1mwYfDN3X16I5TH53HuI9pizUhtpA7ebj9lHtqHNxAF1xwZkNA36btOlQg%2BN%2BkZqLWWm9HfDP8%2FTAr39yzqSLp0YEJ2gJ3z6ARjLekapqps9duPzk5wycOQP6j%2F&X-Amz-Signature=fbee8f8323dd271d6e5c680a933b61286529bfaf43209a27c4ae02764a0b06ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEQAFTJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3MJyuFTwm9Qk0mJLaH%2BJPVCsaKJnqxUloBFx%2F0E8ijAiEA09NzjG0CZOGKc9aa8jjhAme%2FSrFX%2BSmsgQpmuyIvXRgq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNVRiDVlNKjR4flD5yrcA0Vx8x2ZW3PfIu5T8c1BWwk6DutolB02D5tkWbVAHv1ORekWvIKEpUvcQhbqdsNEAV2NDRrtKoX%2Fv5SSaMKtxfrJohAoocqdWnE2kXYpBEKoajlT9EvQjs6a2ta7%2BMfsBMPjviyPP1R%2FK5dy7jGVaUY1Hz1%2F5gQ9ILt5Vc9Nu7h6yGOhlTfvcF0%2FGWPzzwsnqCW%2FNTmq%2FUJvucrImrQIu26sKv%2F2Xnianj9GbFQuLTD8DLc0bXiKIlz1LJuZfcDcNQvodXMJTptwwKhqzvACfen1OGqYLEYBnhFBAmsnSGGXOQa5Y2riDBtv0M3R3QG78yVeZBIOnHfJdkLjdJKfidobI27XOC6TiIdrIBYZLtrjH2Cs%2BfvgLkG3R4Vg3Hf5B%2FoB3p9DE8W3VbiS0qjz7SL%2FM%2FuNXa3f2zu5V6Yrce7eZjT7FIowpYqm8768BY0bE1fFC8Y4kSwsaiRQeT%2B3QKh%2F6q86LejHvGx4s8wLo1HE95trXX3bdGdwBhwuFk0qPCq0%2BrEAutKlEUxtuBYo2b6AQP5XF1YXcFnu9Md9GkyDP7OT1CBGKZjB0QxYuwjEK7V%2BUMv7hGJvExMEIvof4F4qe5tBs3QLrwdizsIkMnIVbTNPUYZFGOHRf91bMJmxv78GOqUBn12jVjsC5jbzK7GruOzsPI0BXNHr42Mzr%2F3AAnt8bW9Lhdhz7P6GGEMZfhtbymrJJLOpPmiZ3ukt7uT2vkNkL0Rw6CAmz5COLpTYYNN%2B%2BFzkKu7aWxYJzqsENqfZohfWL%2FpIDVNkO0YWjWeuLhTbCoRHjlM2cWCaR44AJTGufn0KbfIiSVHqNe%2F27uPZLNUNOdIDZB%2FJy38yo823XdKNf2UvvcR3&X-Amz-Signature=2886f739cdffe785a2ad3d4d80b8336dce4b987a716efb28d93a98dd57493b04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ53VBAZ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxnNAoLDIOp9pul%2FJ67QNITDWmOj8EO2nt2LPOuhOGFAIhAJbWjOUCvRb84Nkbs7DNP56wPm2Cb%2F73RJZmYiK66ID%2FKv8DCBYQABoMNjM3NDIzMTgzODA1IgzzCt86cFuAbxcVlw4q3AMhcaNBkFfo0SZoPH%2F72kFO7Y2GEf84Kgbl4%2Fw%2FOczJo7q2PG%2Bkbo1Mpozs7EOXLpjODrf2OjpaJPz%2FAjffOSbC3qsKWKFVRwZMFbxa7nCVv4sO%2FzwX0tRZ0j57cCWKkfLl2NRloHp%2Fg5Cvy3lyaRzJ6q%2BZoQ%2BX7Ru9y6OWFqrtFomTE6rY2ErV%2BmotFQ527E3rkNO7G%2FkcUnLStO52mSyfSKvGLNQ%2FJuRuNGBMCabuJFT4TJT8pgipbs8vFKDeS07NYPeT3Qc3wLwfsafsRHDqYbYQQXH%2FOLXF5ZIxVoCYrpTB%2BApBbOgt45JMHtFleMpPtSFxRkJ0btYTnIUZ85f%2FD9Mo4ZpdTmc2HIOpGJb%2F7DbGMn6uw9VduIrXGl0%2BykSA3UU9HMR7ld8OdMZIO34CjpU1YOMim6IFkV2ZgYMj%2FC9oPQsBp37svG0UllRMXxV71yB8si%2Bh51RybV%2BGrEe1gA7r7pvMcXydGyOeiV%2FTE3scnml2NUtyj2lxf9w40XuHEn5CHMNIza%2BXMVxKIOfZwdEDcaXvyo5WnZdmyW1MjAYbnQLOQgN5EIhsrAQ8L4q93nJjNGDwFPzYgkyF3Q%2Fapo4uGll9aqXSvKpFOtCetuZaOLMmPiCJTQyZlTCCsr%2B%2FBjqkAVqC43680D0DnW4N1gbKVbFMxNPKNRBwgghVBE87GCl0cEx%2FKSw%2F0VKOPHvD%2Fu9p2yMxub8X%2FthKuK3Vrvl86ivMr0610yg6QFh16CczDggTYdf7iFTkxUM6S5yUOScgXRUzT7sXsOhNaSCRWQ%2B2qKYRw1XwIHtAe1xsIEgKpOYIBsbkvL0G9Zx8E%2FZly3kflrMs4XlEFHy4cYs9gVNLIEBOYaQ8&X-Amz-Signature=c827da0de92109113381bdf356393f9a94a1a6e9cc0ebf7aa54c3586593fc0b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
