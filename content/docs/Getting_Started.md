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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERKGPPG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAXhIZpSloeC6SWmNNOFZqrJ3nulOFgtp3uTYGxvhLFLAiEA4S5BpGxqFHA7j6enmqXZrqA6rdVMk6M2IwndAQkSMbwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Fi%2BXyukIvmSgG58CrcA0kvGitNcFuY7Kr1IyLmQIJ90hGnb5jDt2dP6S7JmQaE59pQ06JbNdSE%2Fmkhp1%2Ffr%2FxXqfkfSouwgnAm9pWrV13E4jPiUm%2BH6cftSDbkvg8gy1SPwNnU9TrAjKv8rD4CuWrUOK7ulyj4kSoZNkH6dc%2FGf9KaYfZoPHFhzBwDT7DrTGpWL4sWJRUA%2FYv82Dyoh0l1%2F8OCI6mFG1NU4vBsLFWRfX6uBA%2BoxTlflhQnKgxJqi53s9JP2LJ1hj3a%2BhdYHJ3JA2KaYLyX850UQDFyB4JKg89XV3KgQnOj5m6u3QbJWJdMSZV92ockhm17Za7Gtu5DPQgKy%2FfQlpZfsW6dwW7oeVeBgWacId%2BaSfEeNmly5Fle%2FbrY2sCRTzdTCeT%2FwFwvGlolgcHSeiLqhX8bOw0y8MXHe2scuPirP44OEPXarbD%2F6PGbiQjRVtXF3X8aWANv5AO0zuW5V9yM4eZAM0%2FwQBqTqCpkN34HjrVnCayvwMQxUBCyuZkKSeNZ5eIxU62XYuchaMZm0PihBbIESwcfILUawM20YtOQ%2BSpPCOPgfp5wicEDJiF2cWoQ37hH3osGRocozn1fncr6UGRvdllYqhPHT35MvMfItzNl%2BFDf58DGiZUahDsZKmtOMM3pub4GOqUBLMOq56c8Xwbbm2go3FgjeI2nqC74xxLawmOXhETGBiLcohfSDhgGOt%2BmSWFmhu0f32kf2Yl%2BSx3KD2wbt0lzMRuTBI0r0PNpLfX%2FxOhHkl7ccQyg7JcntTL%2F2TvP6HPOOn%2Fx4XlJlFAWoTuQy0zU86k%2F6AvOxLcsWAMJx%2FXsmEpz38fWT2GLzYR58L2zRIiDqJhng%2Fp9ngoKLasaLCca6N56vnoH&X-Amz-Signature=7748faf24d375df2f27b4d812434bce506be1b07f414f86513e372d7e6ac4fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERKGPPG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAXhIZpSloeC6SWmNNOFZqrJ3nulOFgtp3uTYGxvhLFLAiEA4S5BpGxqFHA7j6enmqXZrqA6rdVMk6M2IwndAQkSMbwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Fi%2BXyukIvmSgG58CrcA0kvGitNcFuY7Kr1IyLmQIJ90hGnb5jDt2dP6S7JmQaE59pQ06JbNdSE%2Fmkhp1%2Ffr%2FxXqfkfSouwgnAm9pWrV13E4jPiUm%2BH6cftSDbkvg8gy1SPwNnU9TrAjKv8rD4CuWrUOK7ulyj4kSoZNkH6dc%2FGf9KaYfZoPHFhzBwDT7DrTGpWL4sWJRUA%2FYv82Dyoh0l1%2F8OCI6mFG1NU4vBsLFWRfX6uBA%2BoxTlflhQnKgxJqi53s9JP2LJ1hj3a%2BhdYHJ3JA2KaYLyX850UQDFyB4JKg89XV3KgQnOj5m6u3QbJWJdMSZV92ockhm17Za7Gtu5DPQgKy%2FfQlpZfsW6dwW7oeVeBgWacId%2BaSfEeNmly5Fle%2FbrY2sCRTzdTCeT%2FwFwvGlolgcHSeiLqhX8bOw0y8MXHe2scuPirP44OEPXarbD%2F6PGbiQjRVtXF3X8aWANv5AO0zuW5V9yM4eZAM0%2FwQBqTqCpkN34HjrVnCayvwMQxUBCyuZkKSeNZ5eIxU62XYuchaMZm0PihBbIESwcfILUawM20YtOQ%2BSpPCOPgfp5wicEDJiF2cWoQ37hH3osGRocozn1fncr6UGRvdllYqhPHT35MvMfItzNl%2BFDf58DGiZUahDsZKmtOMM3pub4GOqUBLMOq56c8Xwbbm2go3FgjeI2nqC74xxLawmOXhETGBiLcohfSDhgGOt%2BmSWFmhu0f32kf2Yl%2BSx3KD2wbt0lzMRuTBI0r0PNpLfX%2FxOhHkl7ccQyg7JcntTL%2F2TvP6HPOOn%2Fx4XlJlFAWoTuQy0zU86k%2F6AvOxLcsWAMJx%2FXsmEpz38fWT2GLzYR58L2zRIiDqJhng%2Fp9ngoKLasaLCca6N56vnoH&X-Amz-Signature=e3b34d69cd7c12ef29aa8e13c0973c83edc23efb525846d71203f65aea0077f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCG7MLY%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC0ILlf3%2FvzpZJw9mVJSpX5%2FQAIiUv5TbGNsIghtoad1AIhAKtIbWl7%2FfWypdiEXTi6d0%2B1pbJL49eR3p4jHQ9r%2FVwBKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1OtYyYqTUdYw6iyEq3AP7vWvhbSAFuyc7SD87iI91%2BdzH112mKZ0E2qvXC0epUyVqEO2fScPGtgV1GbPeyCM%2BEKf4ER2%2B03l2fExGx858ZQGsXySJTO9wGoqawTMgJagb%2BGKLk1rc%2FJMyv8dOGo5RstMOxa3%2Fvsd0ah8MujLs8lW6xZEZ7LLm%2FdzwEpVy6P%2FDRLywpqyp2vsE2%2Fk%2FtdWjKkffw%2BR5xkvubA6WgfGS9Fd1DsN1KRLkX12JB0HkBmq2LCpiphPV3PHrK%2B2Ly8HS357rgVJHl5495hq8FKh8DVFViLQV6b5J6IWLPjbP8yck8xUb%2Fi5v92pVs0v1JjRwv9KxsOKayJBEVnppB8g0ZcwF5JMx%2BlIFmdDcopbN%2Fq8bhy6wT3Uwan766mc2gHfgiPNgurhj%2Be3ksnpPD0p8wAplC1oloz1K0hkzIR5n%2FLsmOjESKaKVnPhEF6QCO%2FO%2FCLO9IGVNRruRsLdzDR4JInl7xjben9F8idjF2xfjt5J6hBGUPX8ilXx9a%2BWjyaw5EtgNeT2BYng1WOI3PGtmjieaAeZkTfQZx1q77%2BJixn7dw7fLtL1O6Qm7iZs4%2BaA%2FSr%2Feo%2BQOF68BNWgps%2BYoOXCSSfT8WzZtdNpcKgR%2BRp2xmbXOfAMz3ecnUDDr6bm%2BBjqkAQxW%2BdPFpZyMZpc8ZDc53eZ%2FllIFeQBe61dQceOzKYH6XfTRRvo9iQVB9eaJFScNGZAcQmyogDBTFqlhlAtA0oNuIlfLB8T6DwCOtRRvVMlaO%2BnfFvatJVqPpT%2B3xlmQU3vaYgXBeyEMgCDGmdh07bHgnoRtSpzOR7mPtI55mGCjV7ot7bm2pKWf72YcTO8YtjY0gW%2BBBmtYE3AZrjTzQLoN4fSr&X-Amz-Signature=488fc3c810972665ffdd211858f9bc20180ea0e6c572669fba56a38f8ba9b9f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHETJF4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCeuSfuvok7PRgybWZhv%2FsCnlPGuk16nshdIso8NgHHVwIhAMNt0WuTAfGanLAFILgpZaYH1u%2B5q9bUVQSGwWD7Uko8KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiOQsvYjzBLHzYfd4q3AMETTLQ1suqfOKSlREPnpF8%2BVCPp8XrcmWVc8dBSCERK1oALhP0AFlf%2FWiaiXv6c6DxVrNdj%2Ba6zSR0XFqH8BUXnsn0vkLI61xdc4tNy9SryEK1JmGZgGrSbNTqJ%2Bw9sB6ZQPOq3ynUPtYrzf0s77DpTCxOHNd%2BXChE91cpoxTQ3zFRldvPTfJ5b5CMi1NzG4sHsaKZNBJN5OF%2BSfQtbPztCOiqVRB3Z1qPQMBTAUJ%2BD4pTJ6jTdFQLnp42Mzb5Y%2BrGBRG%2Bx05rKXhwReUr2Vy5q8AjZLdVTNByEr7LImsytuetC88glyJMH9jMz7Gw9P2vgquAoL0HJvFWJDeVp8wIoRLB0E%2Fg0OsKgLmIe65jyzyZ5f7tBZJ%2BYGKAo3phyPi6uooTB6Rp3U3LH8roaESjfNCmi8TLRepl33O%2FoFBATXon93LMxOMlKOc7de6uASkSz3kyKwOdco1Wieb2OzvUUu95IOGs%2BejsPE4wafpixVvpPyKcE5Liji2LmS4ilGxzGkMhGlLHj%2BN7YDGG0QSW1eMGimYrVfLVl%2F0iH78vDFG8lv%2Bro99uJ2RDGc8ODtgQwnGUhZSIc%2BO%2F929jYOJkXRtU0nClz20UBdDK8SbCzj%2B7RABormsvQeqLcDDX6bm%2BBjqkATQTA8hhckZjGyW2chsthwyvR01ZtDhwmLo8pLZHa72t%2BpWVbZFua%2F537QRKeedU0quA6EHgBZOdlI%2FCv9G4CNXE31RbN2bahFA%2Bo%2BVmPvYwej1%2Fe%2BKtRDNbLG9tpD6l60SipNEkB84dOvoR0SO513GmqXyq0kbxV0t42VCIPFp%2FNHwm7loRnTD32v3EDPmp0LKL5llV1vr%2BId7GahbLavo0y7jK&X-Amz-Signature=94ef61bcac9339e6b2195f7339d16b1f10eda1eafc7228da47c125e6c219215a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RERKGPPG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAXhIZpSloeC6SWmNNOFZqrJ3nulOFgtp3uTYGxvhLFLAiEA4S5BpGxqFHA7j6enmqXZrqA6rdVMk6M2IwndAQkSMbwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Fi%2BXyukIvmSgG58CrcA0kvGitNcFuY7Kr1IyLmQIJ90hGnb5jDt2dP6S7JmQaE59pQ06JbNdSE%2Fmkhp1%2Ffr%2FxXqfkfSouwgnAm9pWrV13E4jPiUm%2BH6cftSDbkvg8gy1SPwNnU9TrAjKv8rD4CuWrUOK7ulyj4kSoZNkH6dc%2FGf9KaYfZoPHFhzBwDT7DrTGpWL4sWJRUA%2FYv82Dyoh0l1%2F8OCI6mFG1NU4vBsLFWRfX6uBA%2BoxTlflhQnKgxJqi53s9JP2LJ1hj3a%2BhdYHJ3JA2KaYLyX850UQDFyB4JKg89XV3KgQnOj5m6u3QbJWJdMSZV92ockhm17Za7Gtu5DPQgKy%2FfQlpZfsW6dwW7oeVeBgWacId%2BaSfEeNmly5Fle%2FbrY2sCRTzdTCeT%2FwFwvGlolgcHSeiLqhX8bOw0y8MXHe2scuPirP44OEPXarbD%2F6PGbiQjRVtXF3X8aWANv5AO0zuW5V9yM4eZAM0%2FwQBqTqCpkN34HjrVnCayvwMQxUBCyuZkKSeNZ5eIxU62XYuchaMZm0PihBbIESwcfILUawM20YtOQ%2BSpPCOPgfp5wicEDJiF2cWoQ37hH3osGRocozn1fncr6UGRvdllYqhPHT35MvMfItzNl%2BFDf58DGiZUahDsZKmtOMM3pub4GOqUBLMOq56c8Xwbbm2go3FgjeI2nqC74xxLawmOXhETGBiLcohfSDhgGOt%2BmSWFmhu0f32kf2Yl%2BSx3KD2wbt0lzMRuTBI0r0PNpLfX%2FxOhHkl7ccQyg7JcntTL%2F2TvP6HPOOn%2Fx4XlJlFAWoTuQy0zU86k%2F6AvOxLcsWAMJx%2FXsmEpz38fWT2GLzYR58L2zRIiDqJhng%2Fp9ngoKLasaLCca6N56vnoH&X-Amz-Signature=d9359e70dfffcc4cb7bfd78f999c9eea2a6fcd577d94b055905dd0bb3d849154&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
