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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JW6R37%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCgAzD9a6YFMdGZ%2B4UBHsbAdwkCcfTQqDAscJ54TdXOnAIhANv4YyxxGhtQgLTmVUk%2Fr9ae6EGYj6IfSGGtW8ip9VAJKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxglcfDDSVtPTS9%2F9kq3AMMT9eLwie1f2ir9FKyMBLFMXQY1DOBp4qy86cwdIek2FvSMYE1tRTabWxITqqztEJbwyhWI8Z6XeuHSal1R6fyI0X5FIynDOajoOeRdhj4DXLK1f70okY2xOOkR00hTW99Cw08S9mJTmm04TrNb96xlWN2ajmUiuuM4aHfYYioxhV7ZcsVuvvKKpkM11eF9fyTufmt5dsNCDBQrYYYdcSO3AvgzBWBr2djrxAN0%2BClr0cw4A6oaYoSV981iL5raTN%2FBA1KDOlXIA4TF8PcwlnNL6s2zBodVhiWHyq6SIQ68xZh66CUCHQaEhufJI0%2Ben9WRfOoUbf3Enx0Hiv9zOET80U15pqigW8F1BLRnzXSRo183Wc9jJeau%2BWt8OHdrtFVtQ0f0ylFjy3etxuPtc1Wh%2FLNfveC4X0GON4VA7GWHmxC5m5MP%2Bzr0DQt6qjVDVHsNxY5pWQVTS83LBrnpLtRdoqJkY94T9gA40sQ0ezWpNbUzNVVKum4O%2BZFuUxb2O%2FpGKNvO8L%2FP385uRSDl%2FokmGh%2BAPVhSxJVs8M5y7HMkkYrOkrZbolNXtEk0dpKOKouvQtaTCaRJWFeefUSyxuC5tYeAx5hsfDONBT%2FBUlQPJ44W7yfg3Ie4r2G5jDCmJ%2B9BjqkAbvD2fJqS15RBqPoFheczxl0qfWS7k%2B3FWDe4%2F7NtMcBLPu8E6Z0eNr79FMK5gun8ygFPg%2B7%2B%2BUaggRBXDJfi9dL%2BQD5cNYDWcTfT6IIkfG%2BhydQ8vMMvCXN%2F0aJghvuHZ36sUbwOCb4%2BeX1sV%2BLS%2B8s35eoomOmOKaFM0Bn1Kq21Lq6vKUscdAxMLhmXU6oXZB7MC5TLe4ZUV2KWwhAolEUygyZ&X-Amz-Signature=78b4280508d8e8415b62f26e2dddc25e62a546998c03a9516788ccf5486cd536&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JW6R37%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCgAzD9a6YFMdGZ%2B4UBHsbAdwkCcfTQqDAscJ54TdXOnAIhANv4YyxxGhtQgLTmVUk%2Fr9ae6EGYj6IfSGGtW8ip9VAJKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxglcfDDSVtPTS9%2F9kq3AMMT9eLwie1f2ir9FKyMBLFMXQY1DOBp4qy86cwdIek2FvSMYE1tRTabWxITqqztEJbwyhWI8Z6XeuHSal1R6fyI0X5FIynDOajoOeRdhj4DXLK1f70okY2xOOkR00hTW99Cw08S9mJTmm04TrNb96xlWN2ajmUiuuM4aHfYYioxhV7ZcsVuvvKKpkM11eF9fyTufmt5dsNCDBQrYYYdcSO3AvgzBWBr2djrxAN0%2BClr0cw4A6oaYoSV981iL5raTN%2FBA1KDOlXIA4TF8PcwlnNL6s2zBodVhiWHyq6SIQ68xZh66CUCHQaEhufJI0%2Ben9WRfOoUbf3Enx0Hiv9zOET80U15pqigW8F1BLRnzXSRo183Wc9jJeau%2BWt8OHdrtFVtQ0f0ylFjy3etxuPtc1Wh%2FLNfveC4X0GON4VA7GWHmxC5m5MP%2Bzr0DQt6qjVDVHsNxY5pWQVTS83LBrnpLtRdoqJkY94T9gA40sQ0ezWpNbUzNVVKum4O%2BZFuUxb2O%2FpGKNvO8L%2FP385uRSDl%2FokmGh%2BAPVhSxJVs8M5y7HMkkYrOkrZbolNXtEk0dpKOKouvQtaTCaRJWFeefUSyxuC5tYeAx5hsfDONBT%2FBUlQPJ44W7yfg3Ie4r2G5jDCmJ%2B9BjqkAbvD2fJqS15RBqPoFheczxl0qfWS7k%2B3FWDe4%2F7NtMcBLPu8E6Z0eNr79FMK5gun8ygFPg%2B7%2B%2BUaggRBXDJfi9dL%2BQD5cNYDWcTfT6IIkfG%2BhydQ8vMMvCXN%2F0aJghvuHZ36sUbwOCb4%2BeX1sV%2BLS%2B8s35eoomOmOKaFM0Bn1Kq21Lq6vKUscdAxMLhmXU6oXZB7MC5TLe4ZUV2KWwhAolEUygyZ&X-Amz-Signature=d0784abf174e88fb61798ccbd22b6cabac59dda493a40306a3ba03348072bff1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WD256BR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEt5QdPqquoYGHCYiR1kwilrSkUUTX%2BQqsKrQH96mRIVAiAtSXfcCV%2Bil65%2FRiVSvxjUQvWyu5QWDiZZqcRI24S6jiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqpGFO7rrlALo4F0iKtwDoQpJW1thDDDotWdQu3gicV86mNYZVf68Jb0Wb1q5hFi5AGx1lSqjF3T1LSC%2FQAW9evraslfUuFNFzF1iF%2BD%2Fvo3oL4Zovx1Vz%2F0HLUIzXfmWoq93zdpA82vSPdPgMkio2le46f9chhxAOyi2i7dA3kgSwkMHOGaqINGdRk7249ujvj4yLmmr7YwsQ40s9CiSiVSwt754v4naiw2zGbiM0EoLDBpn7FshRjTtYTpo3q3lv6r75qu1l0YoTz4y8FgtAQ2tmMSKPKuo0GA7bjKYN9U8lG%2FX1kIyC9DY58638VZm1SiQ9fMqoaRBFD6BRUGh%2BUMeZjFfI6RlYdkwv1r4fm3wMmE897mV4gyu%2FvgW377lT0McMUg0pxEhz9lX5vyDNKMuBgpkO%2B%2FTxpWpU9wz0sq1TR3EeZFbYPZJBaqgyJzJ%2FeztoAgnR1R6aewfXdK8QqmL7fT4X%2FFPFQjZgy7qwfC8DoKEeUkNlwro6jwCYUL4XxgQIIINn6khJdh0MR9PMV%2BAkpDhyi9Yz%2FsX4WS%2F8vunBOqaGV5y6IKcHYKkIuIcOqnRb8%2FdWjrgPlFD8ah0O5nygn7FI1iY234t4ZCBOuytH9Z6QBkL2hBdy6BUPHbhrmgULpu25CsDsBowuJifvQY6pgHAg81%2BiUqlxrrhLGHJh9g3jFaJhm%2BJRfyJa%2Bmr6QoDfe9bpiRQ1RxQtNUWUON50leFe5RMvzJGqwSloSdFXHfRezZ6qsbpJT759fy4fwsNV1dpmcdM%2BXKUpNnGXEcZNbqK%2FuLwh5VDYcGaSInWYwj%2B5wmKaB5IxqqTc3WWgymHGotrfQkS%2B8%2FXcYGD7qs6TZxxZx0n6UxqJXJUQw44O09X0Yn7okBz&X-Amz-Signature=cec78878c32ee40ff03952e7a805616cd5f64084754f3be638db70cf7754710e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I3WLEHA%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAnP%2Bxyc3t8hQC0QSFhucH6ft29ISeHAgv2t50wvEC03AiASoARpv%2FSEFiX5Vzddz6Pl%2FYyjvGZewJv7dEO8bCe0DSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcfpSavFGXX%2F1HMsvKtwDbBNf41CbB2fD%2Fuo1Dya3JnCRDDpciigT9eBnWLpT8a2xpgVaA5FY2vqZ2c478Jb12LDi5vRpjY0V479b%2FB2QCi0swx99hzLe9nclLYdnSrtdwSg3qr%2Bacz3SVt6s7EUrcAIIq%2FwPkN5bLW8QJaoh4RVjz1Z823tyWPQHt0TsQHezmbrE8eFIhh05wP5vzDaKZCgYMnXhRoGeWaMj6CaNJ8G%2FISVV8CejsSA1%2F1vttFwL91hYbmaeMWlDr9Ag1DMsH32XRzHgqFI6P9IQI%2FiU%2Bo43uuv2Y8SeV7f%2Be3eLI4weawWK0qbWHce76qMbmckzo3NJ3ezblBg9iWPR1jBQRvlCs2MYy6j%2FvqrBDxhQd%2F5Mwbt72dbDlVVa31z7ZGHwCt7HcYVKWghjuuGjbkhPdOJbMb2ljU62yGmhAuNCW%2F9ivot6K6r4bDBkM0%2BisFtAflD5GNaVOvkB0nTz9QXG40BfQCh%2B4yXCxq32crZRYdn%2BHpPuUZG6Bmp48nvBdgPDlwTkGAJhTMVRk3r9tWEpnzYaXf%2FQ1C8jtCNQLu8qD5CzR9LCs1zaa15yzpuQR6RPbBaV8jws%2FgX%2Bi3%2B9TqjfhPjiq21WX%2F%2BAmSVznK11PsWM2yKSR6uxjbPtSo4w95ifvQY6pgHzsQ9W6T6qZHaJgcF8LT5ntYe8QS9r8949jC6i2NpR%2BRSwukaJwyUeBy1%2BjFP7lJTzSKFdq5Foh7Nzib5wlyhXsJ5iMZ2vT8wT50kXLd7o32WOJU1b%2BPgsTdbqBKElqgojlvt6MmL89pbAC%2Fy7X0kjeqQaR7FFc1zLBPnUXFRQ1DsQrmxNkA4acPvtFwf9pwo4Mc9RRCuirGzTGNFnoPTWwuV4U6Pg&X-Amz-Signature=24710972189e17fa517dff9706e4f33b2b2ff85a67c4236e57dee61c11b22d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JW6R37%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCgAzD9a6YFMdGZ%2B4UBHsbAdwkCcfTQqDAscJ54TdXOnAIhANv4YyxxGhtQgLTmVUk%2Fr9ae6EGYj6IfSGGtW8ip9VAJKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxglcfDDSVtPTS9%2F9kq3AMMT9eLwie1f2ir9FKyMBLFMXQY1DOBp4qy86cwdIek2FvSMYE1tRTabWxITqqztEJbwyhWI8Z6XeuHSal1R6fyI0X5FIynDOajoOeRdhj4DXLK1f70okY2xOOkR00hTW99Cw08S9mJTmm04TrNb96xlWN2ajmUiuuM4aHfYYioxhV7ZcsVuvvKKpkM11eF9fyTufmt5dsNCDBQrYYYdcSO3AvgzBWBr2djrxAN0%2BClr0cw4A6oaYoSV981iL5raTN%2FBA1KDOlXIA4TF8PcwlnNL6s2zBodVhiWHyq6SIQ68xZh66CUCHQaEhufJI0%2Ben9WRfOoUbf3Enx0Hiv9zOET80U15pqigW8F1BLRnzXSRo183Wc9jJeau%2BWt8OHdrtFVtQ0f0ylFjy3etxuPtc1Wh%2FLNfveC4X0GON4VA7GWHmxC5m5MP%2Bzr0DQt6qjVDVHsNxY5pWQVTS83LBrnpLtRdoqJkY94T9gA40sQ0ezWpNbUzNVVKum4O%2BZFuUxb2O%2FpGKNvO8L%2FP385uRSDl%2FokmGh%2BAPVhSxJVs8M5y7HMkkYrOkrZbolNXtEk0dpKOKouvQtaTCaRJWFeefUSyxuC5tYeAx5hsfDONBT%2FBUlQPJ44W7yfg3Ie4r2G5jDCmJ%2B9BjqkAbvD2fJqS15RBqPoFheczxl0qfWS7k%2B3FWDe4%2F7NtMcBLPu8E6Z0eNr79FMK5gun8ygFPg%2B7%2B%2BUaggRBXDJfi9dL%2BQD5cNYDWcTfT6IIkfG%2BhydQ8vMMvCXN%2F0aJghvuHZ36sUbwOCb4%2BeX1sV%2BLS%2B8s35eoomOmOKaFM0Bn1Kq21Lq6vKUscdAxMLhmXU6oXZB7MC5TLe4ZUV2KWwhAolEUygyZ&X-Amz-Signature=7205357b8540bbdccde32b810cc821419dc6c6461f2fafdecdb10228d9a16d15&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
