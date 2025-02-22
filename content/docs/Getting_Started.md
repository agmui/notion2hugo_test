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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPRXCLP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPO%2FTQUA0HCy%2Bb4VR5P7HH8lZzpQgORBLPhpZ5pph5zAIgGQF207eNodUBS5na36Zj0TBX372ooq43YH%2FNz94ACioqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1vBPjoDksqdT7%2FJSrcA%2BRe0g84vYJnmKxlxdROhXEAFQxgPe89gh5X5iAcefbtkHIfZFAEUEBxuWS3PCBqAu1l%2BEmhOPp%2FMVrO37xcy5SoarrbWHXU8%2FkQuJpCEGnhVrgsMBONd01pq1Yv3ZvE13RQVIqVIbgBAtRd2%2FpdxV5N43S6ZfWhU9ZEfJiPjK0IZjs1pnjMZNHnMkTzFZqvz157GxM8vn8DgQlBkj1zzJkEXuwrZ6W4GIi9NaB1WQiC0w%2BBGwCCRntZhv8YNDszdEEDVPIwFhTC6VjrNGoxEHMDthgR715HB6GBiUzbxQQnUbMRwaWgXE4k2vdP5WoCj4l7ARs26xN9RZNy1MCjGlsb%2BJ%2BpspCX6XTharA7%2BOs1O67JrZRh5ZAaZzX0bol2RJNciF001ebbJTYL48hEu0YHCRe6uJBL4Qbh3yXIRcDDNUFvqHDsAkosB58aOBdvH2LQ5FrWMocF09943RPLeWmQc9okilorC0m6SxVJdFJAMqqZ%2FkCAe90PcSuhj%2Bmbk4h3hTrhu%2BTubT%2Bi4M%2Fh5fcyG14P%2F7UGA%2Bi7ZgdhB2K1wblxEeLUdAeZ8lpohZ1%2F69t4vCjOgmIMcsM%2BbWwdq9e%2BBNtsgI0DP%2Fv6THq2%2BP3mVnMAeZfU3sz5WOL2MLDH5b0GOqUBs7DVV%2Bt1o5Qw%2FnWr7ngX2ElW0ppml347xnvz06PM3WwgxqeDXzno6bIrt1H0cErOyrI7LEUdPd7Y6%2FTNrPPX1oeuiCwjzzAZ11m11xtYME9BluJo7PUuUyV58dFvAFLaOlrwRKhJzYTAIGHpP%2BKYuuxKRTHqZ2ZV%2Btr5PakKccfQfiYZ%2B4%2F1NRpAV0KG6xsDNRykrsIVI5oYhEkfkFp%2F7w7C%2FluR&X-Amz-Signature=2fe91bb1b1dbf2cc969335b24acba445be511a188052bec92bcb097d788df17e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPRXCLP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPO%2FTQUA0HCy%2Bb4VR5P7HH8lZzpQgORBLPhpZ5pph5zAIgGQF207eNodUBS5na36Zj0TBX372ooq43YH%2FNz94ACioqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1vBPjoDksqdT7%2FJSrcA%2BRe0g84vYJnmKxlxdROhXEAFQxgPe89gh5X5iAcefbtkHIfZFAEUEBxuWS3PCBqAu1l%2BEmhOPp%2FMVrO37xcy5SoarrbWHXU8%2FkQuJpCEGnhVrgsMBONd01pq1Yv3ZvE13RQVIqVIbgBAtRd2%2FpdxV5N43S6ZfWhU9ZEfJiPjK0IZjs1pnjMZNHnMkTzFZqvz157GxM8vn8DgQlBkj1zzJkEXuwrZ6W4GIi9NaB1WQiC0w%2BBGwCCRntZhv8YNDszdEEDVPIwFhTC6VjrNGoxEHMDthgR715HB6GBiUzbxQQnUbMRwaWgXE4k2vdP5WoCj4l7ARs26xN9RZNy1MCjGlsb%2BJ%2BpspCX6XTharA7%2BOs1O67JrZRh5ZAaZzX0bol2RJNciF001ebbJTYL48hEu0YHCRe6uJBL4Qbh3yXIRcDDNUFvqHDsAkosB58aOBdvH2LQ5FrWMocF09943RPLeWmQc9okilorC0m6SxVJdFJAMqqZ%2FkCAe90PcSuhj%2Bmbk4h3hTrhu%2BTubT%2Bi4M%2Fh5fcyG14P%2F7UGA%2Bi7ZgdhB2K1wblxEeLUdAeZ8lpohZ1%2F69t4vCjOgmIMcsM%2BbWwdq9e%2BBNtsgI0DP%2Fv6THq2%2BP3mVnMAeZfU3sz5WOL2MLDH5b0GOqUBs7DVV%2Bt1o5Qw%2FnWr7ngX2ElW0ppml347xnvz06PM3WwgxqeDXzno6bIrt1H0cErOyrI7LEUdPd7Y6%2FTNrPPX1oeuiCwjzzAZ11m11xtYME9BluJo7PUuUyV58dFvAFLaOlrwRKhJzYTAIGHpP%2BKYuuxKRTHqZ2ZV%2Btr5PakKccfQfiYZ%2B4%2F1NRpAV0KG6xsDNRykrsIVI5oYhEkfkFp%2F7w7C%2FluR&X-Amz-Signature=69ddb0ce516e3272d95070d3fd08afa916695641406f2cfe3bbf00249c78f065&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRWGZKBI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4sCjdsr9DRbxQyz90JQEQUdRfyZkPWJo6tSgd6SWbagIhAOvXwwlMpFLXEQFHmxqhljyzgMCNkUVi7XbtL9pQu%2BnOKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybMBms5DJWxFsIOzkq3ANBbIfl3UFnGycpEt1S9bbO%2FDMSoN84Wb7rKFZC3T7D%2Fsl%2BIrUR3KDFaX%2Bypd5n87qI89crg5p9DjypUrPQ5P3nnUuxRPan9ymAKAvbtVSNt3Qe%2BlVIGYDznKT5WATB%2BvV7cHzucnRSHzTRWuf86%2FrLjzKfqCi%2Bp%2BoJAUHrwodW%2FDqQrY3JFWyEJjNLbdj6f7qtWUPA9X6OrhdNUODhlCa4Wmug3BXNV0V9Z24E7l4cNfoJJOTPQZzbwpAv1m2nSrkt1knL4f2dVpVFxX9O5rsQ8ixyWwMhVExmy3SunFP%2BcUGwkceD6TPWHfjoS6ykvj8auIDaNC5vRIiXXavXbBgVKQ%2B63Y1cKN0ddkQq2zbwEumOQGm03pUd4IqEN2vZAybn2rUWvp7gOCAuUPrp2dBlMCK4ouPTUmFO1J%2FFPHaAdPzvYZPCNvFYWFXHxkPaKf03ED9yvscUsUOM%2FMVYf3ptWU6ASn2DDF9fQ4NgX7%2B2pl8jwuNKvKpGqRjq3knO9ZCIXOsQPBVaHvpf9rIrg38zTPHSXhydCfy9XGY4aPYasNY1mCEyV7mAI%2BsL4xXXYEb8uWnsS4IsyoFp8mpwQcJcPSKuJau0eWlBtB1iixplgv%2BmuIMYm%2FUlZr1FeDC7x%2BW9BjqkAU6CiHFAcZiY5V9go9B%2FK9q2Vj7cPEKK53Mr97lUSFm1t%2BqvnfykFJicGTI3pVlLPN73jEcGRmSk1wqf%2FU8S%2Fekgdg6UW72wG161nr%2Fx6cAyOQRLqKMWxnRuCAfE12Ol%2Fxki%2Blv9CtnMFCLb5zb5fNP5tbrcka0QYIZDx8H5mzFQZRHIPhniZhN2Zv2LX19Ou3SJs2dSQt59yoFnBAWPS7NoHGY9&X-Amz-Signature=e420088c4cba4866a7b1bfcb2f226fc19a5f44b8348dcea83249e5f65ea6d713&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QSL2EA%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1BJFDFEJxVa%2Bf2wjy8bqr2JWMUUreDFJRR%2Fnr8oap1QIhAP4cnYQEoCqlJ9TrAXOOvchEb%2Fnh6a%2BuZcRCy6XzhlAVKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B%2BFN3o64cd4e8tsgq3APAlPwuBllfbntAaKCLqNjHkFr4gME7WwnWox%2BKIXbpKVM2AANqJYghRDRGVc23KF4ljxdIBYVS8x%2Fdal7FBMSbo%2FNWxO7jBCzZMxfqeEFHVRJ52LBbPdMWCs0qsjzN5JVOq1WdtcuAKNUThFTSDhi9%2BRVxrAEOBuaVnQ8vG%2Fj5JozutnXAIWit4Uig1jByQWERqKqKQVNTOPBjS3QVJVToGq8oHtrqg6q88HoMC0Qde9KyuqtVNs3v7vaTkjjV7PtctprBvBAh1hwqNTX8LTH7F4dHkZ7pSNBdMKt97Jb3jHGCHrwZt%2BSgZZ0pQ4WuxUluQya1DnbQcCZO%2BoUlHS%2BVLkZp2u3J1F8xM1BeNP46xEl7lBPL2Woxs5RIz2rGbFpdJ3QfOg23wLEWw3%2Fnz1tdu3Q5m%2BXeMH7dc44NJ5nwghqxCc4u8uhb7JE3FPt0OuLExQXjv2Ql2dcXT1iDK5kMBcKa52cxaMUS2S%2BNMLDKJ%2FFsG%2BKlQUZXk8SWHYwp02UtQjxwr4oARSS3P%2FbzAdljzBT3dbNQCLl390TQjOzv2tsd0nJMLfr8F%2BKNkxg5vzNfRKJ5ScaouF%2F9Mu%2BU%2FZYvtHXC3cC%2B5ix7pGoRiMeUUeCgbfEnnEing7vG%2BTCSyOW9BjqkAW8xJVUryq0%2Fyd7QUNcOa9e%2F0i4sje%2BjkOyOwAwmBpprxcPgc8yswdRprZKpuA322vXIPgTxpPJRGn3QQ0ik99ywFJxfIsL819k0VqFGFkglbcpA35b3mF3Mjfg%2BmeO2GVsTBEyi2YcLm3DLKdjrpRJAXxXgax1DJy6%2FsRmFMLIqEMBkQlmcvl59lGG%2F7XeVZGYGaB4v8Ge9Q7w3eew1ntAuI02D&X-Amz-Signature=cfc0c56694f650d2dcba3edd0cc3df371ff150dd427e80677bc2b2b442c6666d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPRXCLP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPO%2FTQUA0HCy%2Bb4VR5P7HH8lZzpQgORBLPhpZ5pph5zAIgGQF207eNodUBS5na36Zj0TBX372ooq43YH%2FNz94ACioqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1vBPjoDksqdT7%2FJSrcA%2BRe0g84vYJnmKxlxdROhXEAFQxgPe89gh5X5iAcefbtkHIfZFAEUEBxuWS3PCBqAu1l%2BEmhOPp%2FMVrO37xcy5SoarrbWHXU8%2FkQuJpCEGnhVrgsMBONd01pq1Yv3ZvE13RQVIqVIbgBAtRd2%2FpdxV5N43S6ZfWhU9ZEfJiPjK0IZjs1pnjMZNHnMkTzFZqvz157GxM8vn8DgQlBkj1zzJkEXuwrZ6W4GIi9NaB1WQiC0w%2BBGwCCRntZhv8YNDszdEEDVPIwFhTC6VjrNGoxEHMDthgR715HB6GBiUzbxQQnUbMRwaWgXE4k2vdP5WoCj4l7ARs26xN9RZNy1MCjGlsb%2BJ%2BpspCX6XTharA7%2BOs1O67JrZRh5ZAaZzX0bol2RJNciF001ebbJTYL48hEu0YHCRe6uJBL4Qbh3yXIRcDDNUFvqHDsAkosB58aOBdvH2LQ5FrWMocF09943RPLeWmQc9okilorC0m6SxVJdFJAMqqZ%2FkCAe90PcSuhj%2Bmbk4h3hTrhu%2BTubT%2Bi4M%2Fh5fcyG14P%2F7UGA%2Bi7ZgdhB2K1wblxEeLUdAeZ8lpohZ1%2F69t4vCjOgmIMcsM%2BbWwdq9e%2BBNtsgI0DP%2Fv6THq2%2BP3mVnMAeZfU3sz5WOL2MLDH5b0GOqUBs7DVV%2Bt1o5Qw%2FnWr7ngX2ElW0ppml347xnvz06PM3WwgxqeDXzno6bIrt1H0cErOyrI7LEUdPd7Y6%2FTNrPPX1oeuiCwjzzAZ11m11xtYME9BluJo7PUuUyV58dFvAFLaOlrwRKhJzYTAIGHpP%2BKYuuxKRTHqZ2ZV%2Btr5PakKccfQfiYZ%2B4%2F1NRpAV0KG6xsDNRykrsIVI5oYhEkfkFp%2F7w7C%2FluR&X-Amz-Signature=9081be760fb2bc692154e1659d1b0e48d05771265b9e2d056a74a34f18087db2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
