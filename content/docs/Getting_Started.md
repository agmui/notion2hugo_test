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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXUG3AKN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEZcPlBrfUvKQXtNlGQIBT7%2BtJyoB1zpVD%2Fgvoy4JcmgIgMP8Y8nleeRaJTr9aEHEE95vCziStenDWDfYPwTe6MA8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhYELbGaJUxcdjwdSrcA6j%2FMB0InVR8BxlwWcpkQG5fddXOnh2ljSRLGZzJeAG3a3LOvQCXzhcJWBcwVtwcASIHJRrz%2Fr7z0HMFIwKhNJGktk%2Bk1%2B%2BmKOI876513uG5XKYcxg05K%2BijMPFdntczNFV%2FikWXG7gEk%2FcHmDm2of5xg1euoubpClGpU6CUDzbbAGA%2BbbFIEkO69IvssXwQ5CmgPR9ixjkKNQqTLZM30KH5%2Bsyft7FsGZB%2BUFMdvutUJ7Kb3hAktkKCDIT%2FUqRiuJKn84E%2FAepkJ%2Fm04lUYqxBiu6Wnlwgh0lXH%2BYhhhvdefudTlwCsCODqcJWiDrjXZxuemgHQ%2FdzSin4HEHd2zSGYHWXyYq1zmnGxxWudGUTxf7vF2d73HpGCK5KAhFCqonYCSAt5G5MEd1qKtGFFO8R5yxiD3C%2BrmFX7C6gjIvt4PMHkjMrkBaX2K050SCWTLgqCHG2Sq%2BJaoBQnSEEA3rCJTw95RT7RNKvYMO2XSZ0lHNKMhPd0DLR%2BDqexEKbn6CPuvC7Jcmb4pc2FUMcCRYFGq2GoaU7VmUkg72kcqSfvLeSeljnwLrfSpV87XIG321JarxSfn4aRNoMmblW7kynHyoDvtbQB2pCZ5xdg3CmYVpraOB3NsMvN5M8CMJS0tsMGOqUB6j98dwjQt6os1T%2Bxokk8V0TlSbC4mFxW1p0xDExog7WhHNy9Onj1kK2MOWnoI5yejO7imfgMZyCDZ9USyRhujVAgqx7NkI3xi7PxW77rh%2BoGwcf%2BXi0C1DQ3sJtVQcowIvvCAdg%2Bm8A6TY0NfsfETXNbqWw1B28xdEoNGifp%2FFnHhsrpE4TeYWvnRAgTlNeUtD5LlRvs64PbU35JICLtn%2BNzS6ao&X-Amz-Signature=4c509b80a5bec2ca208eb82812babfd9e1bfff7b118d3a5080711823552b5d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXUG3AKN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEZcPlBrfUvKQXtNlGQIBT7%2BtJyoB1zpVD%2Fgvoy4JcmgIgMP8Y8nleeRaJTr9aEHEE95vCziStenDWDfYPwTe6MA8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhYELbGaJUxcdjwdSrcA6j%2FMB0InVR8BxlwWcpkQG5fddXOnh2ljSRLGZzJeAG3a3LOvQCXzhcJWBcwVtwcASIHJRrz%2Fr7z0HMFIwKhNJGktk%2Bk1%2B%2BmKOI876513uG5XKYcxg05K%2BijMPFdntczNFV%2FikWXG7gEk%2FcHmDm2of5xg1euoubpClGpU6CUDzbbAGA%2BbbFIEkO69IvssXwQ5CmgPR9ixjkKNQqTLZM30KH5%2Bsyft7FsGZB%2BUFMdvutUJ7Kb3hAktkKCDIT%2FUqRiuJKn84E%2FAepkJ%2Fm04lUYqxBiu6Wnlwgh0lXH%2BYhhhvdefudTlwCsCODqcJWiDrjXZxuemgHQ%2FdzSin4HEHd2zSGYHWXyYq1zmnGxxWudGUTxf7vF2d73HpGCK5KAhFCqonYCSAt5G5MEd1qKtGFFO8R5yxiD3C%2BrmFX7C6gjIvt4PMHkjMrkBaX2K050SCWTLgqCHG2Sq%2BJaoBQnSEEA3rCJTw95RT7RNKvYMO2XSZ0lHNKMhPd0DLR%2BDqexEKbn6CPuvC7Jcmb4pc2FUMcCRYFGq2GoaU7VmUkg72kcqSfvLeSeljnwLrfSpV87XIG321JarxSfn4aRNoMmblW7kynHyoDvtbQB2pCZ5xdg3CmYVpraOB3NsMvN5M8CMJS0tsMGOqUB6j98dwjQt6os1T%2Bxokk8V0TlSbC4mFxW1p0xDExog7WhHNy9Onj1kK2MOWnoI5yejO7imfgMZyCDZ9USyRhujVAgqx7NkI3xi7PxW77rh%2BoGwcf%2BXi0C1DQ3sJtVQcowIvvCAdg%2Bm8A6TY0NfsfETXNbqWw1B28xdEoNGifp%2FFnHhsrpE4TeYWvnRAgTlNeUtD5LlRvs64PbU35JICLtn%2BNzS6ao&X-Amz-Signature=400000a94f6575109765e7dd7c017fdbc081949191bb47c7287c8260efc9b14d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXUG3AKN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEZcPlBrfUvKQXtNlGQIBT7%2BtJyoB1zpVD%2Fgvoy4JcmgIgMP8Y8nleeRaJTr9aEHEE95vCziStenDWDfYPwTe6MA8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhYELbGaJUxcdjwdSrcA6j%2FMB0InVR8BxlwWcpkQG5fddXOnh2ljSRLGZzJeAG3a3LOvQCXzhcJWBcwVtwcASIHJRrz%2Fr7z0HMFIwKhNJGktk%2Bk1%2B%2BmKOI876513uG5XKYcxg05K%2BijMPFdntczNFV%2FikWXG7gEk%2FcHmDm2of5xg1euoubpClGpU6CUDzbbAGA%2BbbFIEkO69IvssXwQ5CmgPR9ixjkKNQqTLZM30KH5%2Bsyft7FsGZB%2BUFMdvutUJ7Kb3hAktkKCDIT%2FUqRiuJKn84E%2FAepkJ%2Fm04lUYqxBiu6Wnlwgh0lXH%2BYhhhvdefudTlwCsCODqcJWiDrjXZxuemgHQ%2FdzSin4HEHd2zSGYHWXyYq1zmnGxxWudGUTxf7vF2d73HpGCK5KAhFCqonYCSAt5G5MEd1qKtGFFO8R5yxiD3C%2BrmFX7C6gjIvt4PMHkjMrkBaX2K050SCWTLgqCHG2Sq%2BJaoBQnSEEA3rCJTw95RT7RNKvYMO2XSZ0lHNKMhPd0DLR%2BDqexEKbn6CPuvC7Jcmb4pc2FUMcCRYFGq2GoaU7VmUkg72kcqSfvLeSeljnwLrfSpV87XIG321JarxSfn4aRNoMmblW7kynHyoDvtbQB2pCZ5xdg3CmYVpraOB3NsMvN5M8CMJS0tsMGOqUB6j98dwjQt6os1T%2Bxokk8V0TlSbC4mFxW1p0xDExog7WhHNy9Onj1kK2MOWnoI5yejO7imfgMZyCDZ9USyRhujVAgqx7NkI3xi7PxW77rh%2BoGwcf%2BXi0C1DQ3sJtVQcowIvvCAdg%2Bm8A6TY0NfsfETXNbqWw1B28xdEoNGifp%2FFnHhsrpE4TeYWvnRAgTlNeUtD5LlRvs64PbU35JICLtn%2BNzS6ao&X-Amz-Signature=6b266d8905bf915d22ad1d8118be9173fd3fcd34aa271084b768068905c7c34b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHRVE6R%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoZk5TjEcAKMMD3NTl8HBHD5J0cy4tjQPYhYC8t70OBAiA2ndnvOkLOAxlnBXWlMWUr1LMG2S9w4%2B%2B8i2vGLkt8XyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2F%2BEDfA8k2Id9GlXKtwDcUEKt1aLdxbKIlwXMINnHGWPGSxlCOsvUN1m0kW9rWdIWANGY6s%2Fp0JPCdo%2BS8s7G3YB%2FfBykjnHW1r1Vl2zfHK1TkV1mu6j8hOkzqCD8zPgO8gnTzkTBmzXZe2eFRPN2aEG6FGx7XmtUbP2qQgbEuDlLHkp6G9h9XeM6VG6ZBEmqChtVkNHkkDVuBfb522fZT6XwzbrCcYxRh19Xbe3aing3HXKdlVtEnZOu%2FoguP5hbCz0RjrtoEGmdja0eUQx4LIeU1EsoL%2B0G0tDGCh5bCcAMnMZgI%2Fq%2FJ%2B%2BM24rxyHOHMSyPeIrVz%2FL1ZSnwlWQEVGF0lM%2FESM9yDhMY2oE8zoO2sWWYaMZpQMJX5LyF1sVZPRh%2BddxBFUmF3KMp2pYkoGWCiy%2BUpi4VIzV77okGhmwLPy0r2LPlevTQpy8c5tUmX1nOyI8hGMpipm7JvUaJu56VloPQaPTV1SNrlucrLiYaq9lGkGvHvEpv4BfO89dBcBcUcGAwsAv9hSiruYdydmccIR042vDegvF97YcMS2Fh2fVzimnqmtjhYUl1BFKKQxSrfxWuxhZutfF6z5oqd5GqDGqlVJL2sVSD746iITtxwzN3pMowP6%2F6rjEIXvZNc%2F0OQ9EZ21XggQworS2wwY6pgFLK9lgiBxqv9wtZ2w5Rv3r9Qnzfz5pyijpgvAOK2xYNpwnG7mZfS7XjUCHZY8xXm4%2FV5u2UEiPjfK64vq0kG32sjYA9nyUSjf3DWqSQmfKfNtZx2DYS0NY6DZtkQbWOD3Z%2FTG3O49i7zwIL6of82sbTgVCR3bVnFIerWNDPX93bxlzpZjm8bhr15q7SIPVR8urIQa1PpFh%2FyGFE3ebNM5rRMF8t19X&X-Amz-Signature=6ae2439cf38e824ff50a3571b9952fc7af0629988c33a7d583355547517b7623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CXMBTUA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNxnmyI5ps%2BqPpNCQ5g7rUBlXJSiUfLofe4eRuZm1IdQIhALkuQqSu4Z6xKJySywzMguc4nZmBbRrEEv0dg8DVDr9rKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvnN1KyDnT1qwX%2FqUq3AMvaCPh5I%2FI76zywgfDdrYAsR8okDoZEku3toKx18%2FqRSbcdMCyoLVxyZ%2Fh1HSSdhBY7a5YGPxZhyQ4eGgasdNDT%2BACs1Rr970ruCWKdGRg%2FwmicvWw%2FJLhAPBflYhemyrCqFnA1RcB6onkmfLs59yodv4WrnSefkLlZ%2Bmvl0PDBVfvm24lViDL2cwuWWOp77tIUgtQ1oUNpS%2BqaW1KudRn8xc%2BK9OqDhvy2fDr6VQezXe6loYasluKuCGfWrpLnqHCVD3rnBMPYkQRPanso9%2BHe%2BDhe94Mq5KDx9kaTOLLDiJotHuABR8ex4Vrp4KwRseDLdtpK7OLiqf5rOUMqKxZr2uo%2FCtUp3gqPNlhY9atyNh0hJAOkMqTbCw0Ue50b7M%2FXDcCOInXaeXuQvlHcJWXU1JsQkTUz1JJCT8s50qql4nNo4aPZcUnSQ7abt8eOTdMxyJOWafVAWwJp2wfA2QUlWOp87yyWynaGdmQnfieAxMCEVscopejShX9sFS6l0E3CRFJRBYZVZgLmoJN82kiquLTQwd%2F%2BG%2ByLNXCWm5P4zw2G%2F3Q6ZQFPzL2U0oF9Pg8HVlP8kSgCEtaXRtvTr4lNDOWDPJW9AjCiPPAQDQ3Yt9kBwa3JzH9s1sJeTCBtLbDBjqkATw%2FsBzp8m9Xk91wYGrWJ1kbKvVx9MagCennEKYF%2FX7Kwf6nQfwKE26V1OM%2BAx7EYr2OA3Pc4gSmQjfai4scg1I%2F9t5DTqIMYunLHVR1uw7VuSAco3xQJ2pnOJjdvGtv3tcO37PQ2aHSoMDLRs%2BZUvJGJbnX1qZnqM1gzEaqkuh03EYSjVe073Mh4PVZ5BicyaEk0%2B2LSerw9hvjnEDmyVDehNsJ&X-Amz-Signature=06a94119b33b303af2f06a0a695ea732dfe59295498e9a081e291d1995e20202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXUG3AKN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T024411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEZcPlBrfUvKQXtNlGQIBT7%2BtJyoB1zpVD%2Fgvoy4JcmgIgMP8Y8nleeRaJTr9aEHEE95vCziStenDWDfYPwTe6MA8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhYELbGaJUxcdjwdSrcA6j%2FMB0InVR8BxlwWcpkQG5fddXOnh2ljSRLGZzJeAG3a3LOvQCXzhcJWBcwVtwcASIHJRrz%2Fr7z0HMFIwKhNJGktk%2Bk1%2B%2BmKOI876513uG5XKYcxg05K%2BijMPFdntczNFV%2FikWXG7gEk%2FcHmDm2of5xg1euoubpClGpU6CUDzbbAGA%2BbbFIEkO69IvssXwQ5CmgPR9ixjkKNQqTLZM30KH5%2Bsyft7FsGZB%2BUFMdvutUJ7Kb3hAktkKCDIT%2FUqRiuJKn84E%2FAepkJ%2Fm04lUYqxBiu6Wnlwgh0lXH%2BYhhhvdefudTlwCsCODqcJWiDrjXZxuemgHQ%2FdzSin4HEHd2zSGYHWXyYq1zmnGxxWudGUTxf7vF2d73HpGCK5KAhFCqonYCSAt5G5MEd1qKtGFFO8R5yxiD3C%2BrmFX7C6gjIvt4PMHkjMrkBaX2K050SCWTLgqCHG2Sq%2BJaoBQnSEEA3rCJTw95RT7RNKvYMO2XSZ0lHNKMhPd0DLR%2BDqexEKbn6CPuvC7Jcmb4pc2FUMcCRYFGq2GoaU7VmUkg72kcqSfvLeSeljnwLrfSpV87XIG321JarxSfn4aRNoMmblW7kynHyoDvtbQB2pCZ5xdg3CmYVpraOB3NsMvN5M8CMJS0tsMGOqUB6j98dwjQt6os1T%2Bxokk8V0TlSbC4mFxW1p0xDExog7WhHNy9Onj1kK2MOWnoI5yejO7imfgMZyCDZ9USyRhujVAgqx7NkI3xi7PxW77rh%2BoGwcf%2BXi0C1DQ3sJtVQcowIvvCAdg%2Bm8A6TY0NfsfETXNbqWw1B28xdEoNGifp%2FFnHhsrpE4TeYWvnRAgTlNeUtD5LlRvs64PbU35JICLtn%2BNzS6ao&X-Amz-Signature=f8d0d2ec44606546e3c255190794603b7b89f70cf724236ac536e441460d3e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
