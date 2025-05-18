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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VRJILPS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNgHTPUKZ3iTqk3yIPfAD3Kw1fuxL7KjSKG95t560w%2BAiEAouKmmrom04BL%2FUIcFC%2FzpbZvnpZNav7OwPfWod5yBkwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDG4PaBwkss6MwpFR8SrcA2rasd%2F5H2OfHRfhDfBCm2Ol05%2FU9EPEd9Szk5VUbrkrwBcnf%2B2Z0DxymEL2CYha87W0RhxiASaaFWDqt%2FeXzHXmrDmU6qwz5agGkKSdaGZnMdiJzPXCgPfiEkx7EmdiW14eGY37DFpIR6DVgTAUFI71WjqLZAXoxsdDg8UiQ1mHPYusV2KlcrdSCBO5HuHYs9hDgMjSET5Id4tvAdHBXOYQu5Uf3SiJdUltp11W2tJdZOdwzmR0o0R3GuL7FT%2FipNRSYgDz6EcifYj34qcWIW26yB1Kh3olQu5UIaeekTemnwMZio%2FUF8RGS%2FQEsQD1twHqAVPrAjnBPvbzlN688sU0F1H4qUQL4SQx5ZC7owiUfe27QPLtcAkWqtYglNodbadPrwJlpUikbheT3QF5HihZ4oKtINI554%2FeSSseIPKg1v5ubkplw3AzLwRCn6i1WTl6Jh8oTJ%2FEBZ2%2FW39V%2FLo4UBO%2BPWOGGDilRk%2FiWjA9I0j0C9i3HXUf6EYgfPyCeHGALJpFPihZ03MVGHc226ZpcAGN2GTTHal%2F6%2FmuPKMMsGBR9PzqRshjXUZ5Yl62IjVkldcq5f0nGAtHiVHjyeS%2FmSG3gxFG6L%2FEmD7k2BvPvSyzSvcyTM2W6iANMN7mqMEGOqUBeLTHPXUDvujUkl%2Bxa5w9BR97LgmpR1gD4f9bl43dtWfpDQQv7EUwMfbgpdgFDK%2FmK9TthmdGnyLlK9DmLDohI8dB5OQCLhOIwQ5ICCLv7kUYY6fkZJmJe8yCBRafi5HgxiDt1paQGlWGafij8P2gXNgRewH5robcYmD1LiQ7T6LETdQz3vKtEKwxTYry53N4eWXkV%2BWNoWjHFm19p4r%2FWDNe%2F4Fb&X-Amz-Signature=c0d09329ee4259c4c58f8da30028cad64f0bed25cc44a17a1a9a8a10d404e682&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VRJILPS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNgHTPUKZ3iTqk3yIPfAD3Kw1fuxL7KjSKG95t560w%2BAiEAouKmmrom04BL%2FUIcFC%2FzpbZvnpZNav7OwPfWod5yBkwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDG4PaBwkss6MwpFR8SrcA2rasd%2F5H2OfHRfhDfBCm2Ol05%2FU9EPEd9Szk5VUbrkrwBcnf%2B2Z0DxymEL2CYha87W0RhxiASaaFWDqt%2FeXzHXmrDmU6qwz5agGkKSdaGZnMdiJzPXCgPfiEkx7EmdiW14eGY37DFpIR6DVgTAUFI71WjqLZAXoxsdDg8UiQ1mHPYusV2KlcrdSCBO5HuHYs9hDgMjSET5Id4tvAdHBXOYQu5Uf3SiJdUltp11W2tJdZOdwzmR0o0R3GuL7FT%2FipNRSYgDz6EcifYj34qcWIW26yB1Kh3olQu5UIaeekTemnwMZio%2FUF8RGS%2FQEsQD1twHqAVPrAjnBPvbzlN688sU0F1H4qUQL4SQx5ZC7owiUfe27QPLtcAkWqtYglNodbadPrwJlpUikbheT3QF5HihZ4oKtINI554%2FeSSseIPKg1v5ubkplw3AzLwRCn6i1WTl6Jh8oTJ%2FEBZ2%2FW39V%2FLo4UBO%2BPWOGGDilRk%2FiWjA9I0j0C9i3HXUf6EYgfPyCeHGALJpFPihZ03MVGHc226ZpcAGN2GTTHal%2F6%2FmuPKMMsGBR9PzqRshjXUZ5Yl62IjVkldcq5f0nGAtHiVHjyeS%2FmSG3gxFG6L%2FEmD7k2BvPvSyzSvcyTM2W6iANMN7mqMEGOqUBeLTHPXUDvujUkl%2Bxa5w9BR97LgmpR1gD4f9bl43dtWfpDQQv7EUwMfbgpdgFDK%2FmK9TthmdGnyLlK9DmLDohI8dB5OQCLhOIwQ5ICCLv7kUYY6fkZJmJe8yCBRafi5HgxiDt1paQGlWGafij8P2gXNgRewH5robcYmD1LiQ7T6LETdQz3vKtEKwxTYry53N4eWXkV%2BWNoWjHFm19p4r%2FWDNe%2F4Fb&X-Amz-Signature=52b56c3c02ee499c3c68781c0fc326e50e6c71ac7e1618e5e523aefb8d583965&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VRJILPS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNgHTPUKZ3iTqk3yIPfAD3Kw1fuxL7KjSKG95t560w%2BAiEAouKmmrom04BL%2FUIcFC%2FzpbZvnpZNav7OwPfWod5yBkwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDG4PaBwkss6MwpFR8SrcA2rasd%2F5H2OfHRfhDfBCm2Ol05%2FU9EPEd9Szk5VUbrkrwBcnf%2B2Z0DxymEL2CYha87W0RhxiASaaFWDqt%2FeXzHXmrDmU6qwz5agGkKSdaGZnMdiJzPXCgPfiEkx7EmdiW14eGY37DFpIR6DVgTAUFI71WjqLZAXoxsdDg8UiQ1mHPYusV2KlcrdSCBO5HuHYs9hDgMjSET5Id4tvAdHBXOYQu5Uf3SiJdUltp11W2tJdZOdwzmR0o0R3GuL7FT%2FipNRSYgDz6EcifYj34qcWIW26yB1Kh3olQu5UIaeekTemnwMZio%2FUF8RGS%2FQEsQD1twHqAVPrAjnBPvbzlN688sU0F1H4qUQL4SQx5ZC7owiUfe27QPLtcAkWqtYglNodbadPrwJlpUikbheT3QF5HihZ4oKtINI554%2FeSSseIPKg1v5ubkplw3AzLwRCn6i1WTl6Jh8oTJ%2FEBZ2%2FW39V%2FLo4UBO%2BPWOGGDilRk%2FiWjA9I0j0C9i3HXUf6EYgfPyCeHGALJpFPihZ03MVGHc226ZpcAGN2GTTHal%2F6%2FmuPKMMsGBR9PzqRshjXUZ5Yl62IjVkldcq5f0nGAtHiVHjyeS%2FmSG3gxFG6L%2FEmD7k2BvPvSyzSvcyTM2W6iANMN7mqMEGOqUBeLTHPXUDvujUkl%2Bxa5w9BR97LgmpR1gD4f9bl43dtWfpDQQv7EUwMfbgpdgFDK%2FmK9TthmdGnyLlK9DmLDohI8dB5OQCLhOIwQ5ICCLv7kUYY6fkZJmJe8yCBRafi5HgxiDt1paQGlWGafij8P2gXNgRewH5robcYmD1LiQ7T6LETdQz3vKtEKwxTYry53N4eWXkV%2BWNoWjHFm19p4r%2FWDNe%2F4Fb&X-Amz-Signature=91a7bc83b1f1c2c75e1ed4c3f1c03d3ff87907c5f79977498074038da097b3fc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGPT4FL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG%2B7MVEa5RPTatU81tU2J7MKp0WyQ93AMuBC1si%2Bo4dgIhAOnVw1imhU3326YtfU4eUki4XwssVR71GOgml7nldmc8Kv8DCHwQABoMNjM3NDIzMTgzODA1IgzIS2mJBJaeRngHEXoq3APnEcZ7boXyXLIWjZaoLP4gBACTBd0ey2fpjw6247w1Dqc6CYZ0jLPna%2BC%2FjoNmCGzG%2B4TbEqMxVw%2BqAap8%2FJoffwIO7KzSE%2BLp38HxhTe5btb%2Bl9AETrGQtcvNRa3wsOvyaQkOiotAaFaKOcEYKWwSKhDMR957HPciY1ie3UVdwhe8iCrsMjyebUkIutHnVSTXH5mPyXqAudgEHcE7QN5Mxp1WTX8XfiFNyYhydagjj6%2FSHgnEibcF46yLd7p04Lj98lYPSzEmk%2F7N5gmMX0jp7SjO%2BIKrqdxpLIRNrcIul0FC8Lb2RWgmAL1HlkmPAOxbpKifTaqRsjC0FtjoIuUPW2vNBGemzO%2F5PJvaNXmyePUIN%2FSSX6fe5fSSpO7hWMGx259oLQpTE6Bb5I57j3tA0vM5vLZ4MjRiFMwNAQK7AXX4EcrOObeAl%2BzximzoMV%2FjGFGNi%2FixkNNdnU%2FConT1LQ%2FNnBOsOhMx3LcRShjT2Om3FN7r5XFXvedRj0nLWni%2FIKX5pyysB3AkcJeF%2FxP7WZMtnL2EgL9JGfA24pfdCseuJFs5%2Bn2nJzLZRGvUbkjOh7ooZo6sgEfJ0Fv2qhyaM0rkAt4Jx%2ByxiDw%2BpQJfeYtCv3zX%2B30VfjzovzCI56jBBjqkAd3ExI5rtL0uqhHbmYwDr7EGOO%2FNb2uq9SPspFTQZpIVSrSbHc2vsYFzCn7496dZkQ%2BO%2B0nXJ9Yab6Jtm7Z5RZTxfLjRCNWwfqfVBnf4O12y%2BY8EGuHA28KXmeTCfWV4XI5sJkAA2zrSKF%2FTwE3qUp8cfp3p8YpKmnwX%2BTiB827YJtn0I2cA7SUA3LEBIH%2FGjha%2Fc%2B2RTzWf8BAELOPT2kht37LW&X-Amz-Signature=d216fafb7f3775f5ab02c33ab04d1f07469e3987c70e74811965d067342dd645&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XHVGCBP%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERrk1g86%2B95FZORLu6i84EhAT4DivP0CprEUdB85UGHAiBnuimiW2FcsuVyzyNAD3fRO8ZdHBlqoYFcNiqbbxDcDyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMpHPE%2F8VQvBpIp3BBKtwDlSn6sNFpJDSr%2FtU3wMc7ghDfU47XatRSRcraah6k7GxAegs94S8c84lK3CxRUN0J043Hk%2FhVOCqNDpiaIC1dM7z0EI5m38EzIb1LZ0NNZ7CTF%2BY1T8koLUSuCvzkOv%2BZxyZdb0nco%2BX7kBa93OEuasZrfXfPHxv7X2Ve6G7oysK6%2BsHC%2FysGEurTl%2BQ0NEshqFt5KUVavHKs22hkSJfUyKp4MP5ZEyV%2FNRY0seT7oK0XVx5ss3xRpMdjR%2BZPme6SrlhRtO%2FM44nJWaHBk3P%2Bnxw6uSiJJTsAo5o7ENSF0i%2FNt%2FgBur3WTjAzS8u9ZAgGQBlk9z69rq3f2uHbH38vA0Z17qn9GVUIXgGdi2KgHN1t2ui3y6Og%2FVdeL3TK8fbtmFRdR0XlR6Nhyfv4TwbZofHDxc4%2BItamhozB2XmWk9JVlKrp06B4Frb8R%2BqhIZhzH0zTqUjTSoArO6eEbik01t4wlpS6jG8RgDJ1P7IpnITYjc0DgD51UogVEo%2Bf0%2F0bkjjCY4tUiZOaC%2BfKLTXw99C%2FkuHnSaHIaFUpI3qPbi7wXrvmWQuion6V%2B5bvdZ0oQwQaotxw2oLVY4wj1Q35ccUInhvWKsiBQlJdzCC8pDrzeHEKHmRSoiezCpsw0p2pwQY6pgHNL87syyk9dcPapAAnmvFpUxszz98d7UvAgs%2F2iy%2Ftq187NDwq25XfjLWxUjGglyMeCqZYAhxGyEJd70EjOkFNu0vaC6GwmMkHprsPbcsEp9tWCEGjZkYlqWs65EMeMtMIJ%2B6GfTgKHRKqTCtTtGzRTX6YZKf6N%2BYd1SFIL2QCfaWhvKwGcEkH1XWihmtY%2FHzcHBLzN8vssOekROggxs6tLWU9vJ6r&X-Amz-Signature=2941c1511ee5122304c3bb148e9655f86e6776f24790bb0d50ae8491f2e7296e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VRJILPS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNgHTPUKZ3iTqk3yIPfAD3Kw1fuxL7KjSKG95t560w%2BAiEAouKmmrom04BL%2FUIcFC%2FzpbZvnpZNav7OwPfWod5yBkwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDG4PaBwkss6MwpFR8SrcA2rasd%2F5H2OfHRfhDfBCm2Ol05%2FU9EPEd9Szk5VUbrkrwBcnf%2B2Z0DxymEL2CYha87W0RhxiASaaFWDqt%2FeXzHXmrDmU6qwz5agGkKSdaGZnMdiJzPXCgPfiEkx7EmdiW14eGY37DFpIR6DVgTAUFI71WjqLZAXoxsdDg8UiQ1mHPYusV2KlcrdSCBO5HuHYs9hDgMjSET5Id4tvAdHBXOYQu5Uf3SiJdUltp11W2tJdZOdwzmR0o0R3GuL7FT%2FipNRSYgDz6EcifYj34qcWIW26yB1Kh3olQu5UIaeekTemnwMZio%2FUF8RGS%2FQEsQD1twHqAVPrAjnBPvbzlN688sU0F1H4qUQL4SQx5ZC7owiUfe27QPLtcAkWqtYglNodbadPrwJlpUikbheT3QF5HihZ4oKtINI554%2FeSSseIPKg1v5ubkplw3AzLwRCn6i1WTl6Jh8oTJ%2FEBZ2%2FW39V%2FLo4UBO%2BPWOGGDilRk%2FiWjA9I0j0C9i3HXUf6EYgfPyCeHGALJpFPihZ03MVGHc226ZpcAGN2GTTHal%2F6%2FmuPKMMsGBR9PzqRshjXUZ5Yl62IjVkldcq5f0nGAtHiVHjyeS%2FmSG3gxFG6L%2FEmD7k2BvPvSyzSvcyTM2W6iANMN7mqMEGOqUBeLTHPXUDvujUkl%2Bxa5w9BR97LgmpR1gD4f9bl43dtWfpDQQv7EUwMfbgpdgFDK%2FmK9TthmdGnyLlK9DmLDohI8dB5OQCLhOIwQ5ICCLv7kUYY6fkZJmJe8yCBRafi5HgxiDt1paQGlWGafij8P2gXNgRewH5robcYmD1LiQ7T6LETdQz3vKtEKwxTYry53N4eWXkV%2BWNoWjHFm19p4r%2FWDNe%2F4Fb&X-Amz-Signature=e19ea4e64e7afe7570be69c1fde2a142dccabe32032ebd60adf53ce1af36b7db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
