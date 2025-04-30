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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWF5M3KR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIC%2Bjm77moM%2FcboHED7FoZrqmi5r1wpQMAgXrkWs994X7AiBxQ0QJ7CNPxIRaM%2BSa9OnSaJdyQOme%2BMiN997KbiBPWyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJN%2F5FamU%2Blds1nrlKtwDWaNF1mctxU35kjWr%2FL9EUXoMxUoCENuY7HwO6tPa2F6sr8fbJNZL2wXW1fgS4A%2BhcppWrfPzGEEtHS%2F4G%2F2l0oNncDVlXBTtoHX%2FcKCr7WDI8SyNJn45oswina%2BXjQM0DrVl6H6Q0DSAa9YQmlk7HgHTBHhkxAsnmCVhmINirPbE06hfhBLjFBPcUmmlxwEnECtluFWoU%2FVamY1OnNP6UB%2BFF4ALp4Mfr0%2BRKUIEy%2FfvTUqpAAuTJ5DnYgEhCmNNe6hRwORIvAteSSYA90w6Rpt8bhp2maEwODwMclVU4kAvbevaMI83LrHjCyI3CDW53Yk1XFugh%2BSujZf1azbTXetY%2FgzQOKj%2B%2BlQZIGyZwpHMDBR5W6WlXXxPByT7Ov7sk4vH8P7M5fquh5TAKsKYR%2FduWTVIvPKGiLnA8rHtDLLse9Q6wn63MIH%2B%2FQWNDPYyLbKvTuiQ9udiSN5H0j6asjIbc2%2FdLk2%2FJKJnSN0gP2d21r%2BagwucX4UAaJti87SYEog4raC3B%2BHhgdgwrM1Xr8RryN3xTTeMpQwsDecS9Rn26g4SBxD7rTjLg8I1YttgoB0SFZ2G%2B2HId%2BEy8%2FOPgVuMpMPXeGzYwoayFsc%2FM1%2BCELPI2i0W5GaIHYswgvrGwAY6pgFV1LutbrBUpgu1cdknvb%2Bvop1ItaX0v6gSSmRl4xQSLl3yBzgYuv2p6XnBSzDe3Iv32%2FgzUJ1s3j%2FGhDUbX5TNIxlsoInEbc%2BFmYMQcJPMVhghimainXJOiKe%2FGvjTT43nXzt1AAkEgUfMhNDbbsgjStXXAg14jdwMZ1Ayc0Yle30Vya%2Ba3gMSD4HAnQrKQrLeB2sOlZo1QDeWWNhL5iCrZkA%2FotfR&X-Amz-Signature=8b6df634df9196214254a8836cfc853750787d189366738bd7bfdc3644d1ff12&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWF5M3KR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIC%2Bjm77moM%2FcboHED7FoZrqmi5r1wpQMAgXrkWs994X7AiBxQ0QJ7CNPxIRaM%2BSa9OnSaJdyQOme%2BMiN997KbiBPWyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJN%2F5FamU%2Blds1nrlKtwDWaNF1mctxU35kjWr%2FL9EUXoMxUoCENuY7HwO6tPa2F6sr8fbJNZL2wXW1fgS4A%2BhcppWrfPzGEEtHS%2F4G%2F2l0oNncDVlXBTtoHX%2FcKCr7WDI8SyNJn45oswina%2BXjQM0DrVl6H6Q0DSAa9YQmlk7HgHTBHhkxAsnmCVhmINirPbE06hfhBLjFBPcUmmlxwEnECtluFWoU%2FVamY1OnNP6UB%2BFF4ALp4Mfr0%2BRKUIEy%2FfvTUqpAAuTJ5DnYgEhCmNNe6hRwORIvAteSSYA90w6Rpt8bhp2maEwODwMclVU4kAvbevaMI83LrHjCyI3CDW53Yk1XFugh%2BSujZf1azbTXetY%2FgzQOKj%2B%2BlQZIGyZwpHMDBR5W6WlXXxPByT7Ov7sk4vH8P7M5fquh5TAKsKYR%2FduWTVIvPKGiLnA8rHtDLLse9Q6wn63MIH%2B%2FQWNDPYyLbKvTuiQ9udiSN5H0j6asjIbc2%2FdLk2%2FJKJnSN0gP2d21r%2BagwucX4UAaJti87SYEog4raC3B%2BHhgdgwrM1Xr8RryN3xTTeMpQwsDecS9Rn26g4SBxD7rTjLg8I1YttgoB0SFZ2G%2B2HId%2BEy8%2FOPgVuMpMPXeGzYwoayFsc%2FM1%2BCELPI2i0W5GaIHYswgvrGwAY6pgFV1LutbrBUpgu1cdknvb%2Bvop1ItaX0v6gSSmRl4xQSLl3yBzgYuv2p6XnBSzDe3Iv32%2FgzUJ1s3j%2FGhDUbX5TNIxlsoInEbc%2BFmYMQcJPMVhghimainXJOiKe%2FGvjTT43nXzt1AAkEgUfMhNDbbsgjStXXAg14jdwMZ1Ayc0Yle30Vya%2Ba3gMSD4HAnQrKQrLeB2sOlZo1QDeWWNhL5iCrZkA%2FotfR&X-Amz-Signature=b0c210bcb478abd08dc8f6c27bdb5695c3d1510a2b72dc8cfda616b51a5b4eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWF5M3KR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIC%2Bjm77moM%2FcboHED7FoZrqmi5r1wpQMAgXrkWs994X7AiBxQ0QJ7CNPxIRaM%2BSa9OnSaJdyQOme%2BMiN997KbiBPWyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJN%2F5FamU%2Blds1nrlKtwDWaNF1mctxU35kjWr%2FL9EUXoMxUoCENuY7HwO6tPa2F6sr8fbJNZL2wXW1fgS4A%2BhcppWrfPzGEEtHS%2F4G%2F2l0oNncDVlXBTtoHX%2FcKCr7WDI8SyNJn45oswina%2BXjQM0DrVl6H6Q0DSAa9YQmlk7HgHTBHhkxAsnmCVhmINirPbE06hfhBLjFBPcUmmlxwEnECtluFWoU%2FVamY1OnNP6UB%2BFF4ALp4Mfr0%2BRKUIEy%2FfvTUqpAAuTJ5DnYgEhCmNNe6hRwORIvAteSSYA90w6Rpt8bhp2maEwODwMclVU4kAvbevaMI83LrHjCyI3CDW53Yk1XFugh%2BSujZf1azbTXetY%2FgzQOKj%2B%2BlQZIGyZwpHMDBR5W6WlXXxPByT7Ov7sk4vH8P7M5fquh5TAKsKYR%2FduWTVIvPKGiLnA8rHtDLLse9Q6wn63MIH%2B%2FQWNDPYyLbKvTuiQ9udiSN5H0j6asjIbc2%2FdLk2%2FJKJnSN0gP2d21r%2BagwucX4UAaJti87SYEog4raC3B%2BHhgdgwrM1Xr8RryN3xTTeMpQwsDecS9Rn26g4SBxD7rTjLg8I1YttgoB0SFZ2G%2B2HId%2BEy8%2FOPgVuMpMPXeGzYwoayFsc%2FM1%2BCELPI2i0W5GaIHYswgvrGwAY6pgFV1LutbrBUpgu1cdknvb%2Bvop1ItaX0v6gSSmRl4xQSLl3yBzgYuv2p6XnBSzDe3Iv32%2FgzUJ1s3j%2FGhDUbX5TNIxlsoInEbc%2BFmYMQcJPMVhghimainXJOiKe%2FGvjTT43nXzt1AAkEgUfMhNDbbsgjStXXAg14jdwMZ1Ayc0Yle30Vya%2Ba3gMSD4HAnQrKQrLeB2sOlZo1QDeWWNhL5iCrZkA%2FotfR&X-Amz-Signature=63e00f3a963cacbcc5c97ce21230e8b03e2e4e0184645ba7e472dec01d905e06&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6DBHZK%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBkDQ6P3ulVCocfJCt5BHOTiSNE4n7rbHZKljV2OxbkAAiEAr9NBGAyG4c6vGZpd855C4%2F8TUE4bcUR7dMMAebhpNnQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBzGjJl1PQ5gIK%2FhyrcA%2FW4y9GLc08axatVWj9gL6YEH6wef%2FWfvcverGq83yBjSB4QICGHLaowNgCi7z%2B6yaANViGnHjsufMHFGm7pMPV1W4z%2B%2BZ5TNydJ%2BIMdpQCSmlvO0GlRkSsMTnum4Dm6qC30Qik3b%2FbUI3mKm8SgVsEnoeoQEXm%2FUN%2BemYqR5dvaYgWxse2TX50%2FVDq8T4Cp7Vov9bjUUNG29yYyqNss4Dc99O%2FzhApJfq9LosO%2BR%2BSzbPeqCGFLG6TjL%2B6%2BRlSDEjLAY%2FDDWgpXm6kraACEJ1HjgeC4G1PLysVUcxKSghpFR%2B2aZS3S8gYbNiy17rZTBnk8e7NQEdv%2F1HqFAZOsjEkLPAzVPEY%2BGMwi7m79iQhKHz3FYwjB9BUnVhBmnITNvI44h64Goo6s9OHSAWXIVIPl4diWM3J1LgyicubqUcX1s9nd%2BKPrEw%2B5AlSy%2BuSb5Jljw87WSxX2vrsBjLLHXiddRNrCxt%2FFdKOHW%2BN4hDGe%2BX8bUZXrRAhGkuV7zwGE0xEr9nWZ0ias82K0F4SSMj%2BoEpYgQUPYOF%2FFv0iTqO1pAYJrGwPECbvCzx1er9snZ6NHnc2NeqDogv1yIvGTHRZ5ix5YFgnWW4ca5y6%2B8nfahOevrpm0SvddcjDoMNn5xsAGOqUBTU7B%2BjuaYs7udrRr9J8iXgI5CAnoeX9hgQALrozwyqXsyD5xcPn4lpLXggD1XwMTOMLxYtDiklt0Kgo7DkMDIzz9j%2Bg9PaMQ0ELAOOunAsmtpQt821%2FbZlR7R9G2k0pIFH7Z%2B7fhK0kVHsG6Bb5D6Wp0BXfi34yjvH8io3d0Q9x5UlTzzacUBbhxPE%2FDgiJ2u6DLxikgg44KeytG6pxnUAp1C5na&X-Amz-Signature=d0850b13fc0e1c7b37059b7d6b378fc5e4d1428e46d994264b3d2a634c520378&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LO6CJQL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEajVkf%2FG853hVZFfDuJLWdZ9Y%2FumNI%2FQnclC0kN%2FDCgAiEAhrxWkefsD%2Bn8CgrOdLNbn4MT7PAwGU8GoUGIVSDSQSwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FKhtkovVxfVcaPCyrcA4OcesHlk0aOsKGXj1Er8qFwDFOLIzJITnZvu0sFhJ9E5ZZe8kbFR1iIL8TDiROAheIHdV%2BWqiwmZo8RZsvYutdeHPa6x85etKsvP8KunwxYjuy%2FIFOBu8F99XDGa8M%2FbmvuTbpJqE3y5v5QzcxXhIRTIAFwoXT2WApy58GHPsJS4B5zJFvEnerO4F6tWZLlgm9IJEsNAaNu5QtyN9ofhy7P%2Fs%2Bx46p9syDKK%2F45nqwNcRq8IVrDElhOIWiNleVttGUxZrUAFV7J5m9FfOfdP7ImeOwaFFHD8MLDo70fEnkHEQ1X7II%2FNBX57P%2BSMw8JCFqrVIhsf4yzrWGJgevQoCnx%2BLsPqoHguAqSjjqqkQEbMfwV16JCavmibfnZJQFeozfq1kLPkkJgA9po6JxUUYEz%2FKUF9XCmOSwT9f6osX3Gjf5OKRmqNP0P%2BUKJ95yHHJD8FJtz7m93JokaBS%2FuySJ23WL4AJQF%2FJ56MvsZYK7diOGYuF8Qoe1PAA6WrfV7hoJveHlEglIqy0byPH2yrErUGLf8EeOjH31F4GbPmgvvO8%2Fm4ebf6BuoXTJeFuniWUhVsgrnoxZq%2FcUpCeDpfHeDBL0NopQJqJqnhYI7tiROra%2FpD8NSqqN4CaRYMKL7xsAGOqUBr0Y%2BpQR2hlx5t5EkfhY37l3vtWuif3%2BtnYbGDAKc2ON7PnAAT64AqmHppvmpOmg8LqiPm%2Fs%2B3sR4AQLI9fK9RBMlz6RPEWJSIvlX8s%2B28TsZYSbl95wDscPMsFHbx78AQS%2BKJqbBabrnp5gUIyNv5aoXOk4S%2BJDRCVA86Y1O9fg3iGfEMNXMtdwhyDUWehF%2BvpdQDwP8ZSYqKmlD0AwHtl2awcph&X-Amz-Signature=7e86cdfcf1ee1953e523f328eeba372cf78622c00fdabfee5fa99918b479e004&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWF5M3KR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIC%2Bjm77moM%2FcboHED7FoZrqmi5r1wpQMAgXrkWs994X7AiBxQ0QJ7CNPxIRaM%2BSa9OnSaJdyQOme%2BMiN997KbiBPWyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJN%2F5FamU%2Blds1nrlKtwDWaNF1mctxU35kjWr%2FL9EUXoMxUoCENuY7HwO6tPa2F6sr8fbJNZL2wXW1fgS4A%2BhcppWrfPzGEEtHS%2F4G%2F2l0oNncDVlXBTtoHX%2FcKCr7WDI8SyNJn45oswina%2BXjQM0DrVl6H6Q0DSAa9YQmlk7HgHTBHhkxAsnmCVhmINirPbE06hfhBLjFBPcUmmlxwEnECtluFWoU%2FVamY1OnNP6UB%2BFF4ALp4Mfr0%2BRKUIEy%2FfvTUqpAAuTJ5DnYgEhCmNNe6hRwORIvAteSSYA90w6Rpt8bhp2maEwODwMclVU4kAvbevaMI83LrHjCyI3CDW53Yk1XFugh%2BSujZf1azbTXetY%2FgzQOKj%2B%2BlQZIGyZwpHMDBR5W6WlXXxPByT7Ov7sk4vH8P7M5fquh5TAKsKYR%2FduWTVIvPKGiLnA8rHtDLLse9Q6wn63MIH%2B%2FQWNDPYyLbKvTuiQ9udiSN5H0j6asjIbc2%2FdLk2%2FJKJnSN0gP2d21r%2BagwucX4UAaJti87SYEog4raC3B%2BHhgdgwrM1Xr8RryN3xTTeMpQwsDecS9Rn26g4SBxD7rTjLg8I1YttgoB0SFZ2G%2B2HId%2BEy8%2FOPgVuMpMPXeGzYwoayFsc%2FM1%2BCELPI2i0W5GaIHYswgvrGwAY6pgFV1LutbrBUpgu1cdknvb%2Bvop1ItaX0v6gSSmRl4xQSLl3yBzgYuv2p6XnBSzDe3Iv32%2FgzUJ1s3j%2FGhDUbX5TNIxlsoInEbc%2BFmYMQcJPMVhghimainXJOiKe%2FGvjTT43nXzt1AAkEgUfMhNDbbsgjStXXAg14jdwMZ1Ayc0Yle30Vya%2Ba3gMSD4HAnQrKQrLeB2sOlZo1QDeWWNhL5iCrZkA%2FotfR&X-Amz-Signature=0198dd59d7c6f599a3384f9eb2c86de21aeb2c76a2ccda7d9ddba720b71b67d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
