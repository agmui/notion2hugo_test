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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOT3YQHJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICtfdSCGW7yIttnQg7fQPhjeZDOMhngqS65d5kKTsbD3AiAoQMzNyiJCNS3QZzCEp14AksNNyj%2BUAD4%2FDzQhu2Muzyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMFgZpYKU9YnP%2BjrOpKtwDIxUmfJoMFVGltouc62KLZGx8YIvvqOa0yf%2Bt4bDFLIlPmDtfw7NOx%2FZp%2FIxVZnUG1SZdhid8O1vxHe3j6AqTk2uP%2BctRsz1%2BN7IUDrw1zcdFIem2q2xzb77hVEJakSjlWgzg%2BboTXxt76vF455%2BE5TMzILxj79Kyd23YU6BIcAPpp4GjWUUHuIVZOIisl4%2B9CKtGEiS%2FWHqA10WE99aq0U2Mx1AaJfbaH6wvlPuqRknQm88Cu5cnR6bF9W3Efn8vTeJi2TrE5vT9HwlPEZbAatpx83S54Xoew6meMBEl02OPPdhzCC%2BpXOQbDAqt0OYgCEIGzC0n9B31mEpQTLcaqdeWCVW%2FkTws6JUio7alBA7n9vKZpBFniRP9013PdnSfSAGmZAdyNWRFLZ1L5Nj0%2BkGvbG0g8xzVw%2BOIopYbsY5zy79UGmzCEY6JuWCDX19s7UMa8vGyi7kcogpO1B5wtFkiX%2F2yu%2F0k0n9hO7x%2FAnPrYI7pVlpF7t7uWclcSTgDaTep4PaaOt06IWr21qfKQm2zAx0jhYj%2BMBv1t9a2lyoEebiGtOtiP%2BTugSjYHHJZvJVmg%2BuKikun3bk8B6Ih7N3BVfiEsym6ACYwOiaahaysz%2BNwFRBZ8FITjsQwl7zrvgY6pgFFZ1UHk4jRO%2FOWctke6IlNVZdSlHJCRtcXaDKbcmIPxkrkdH9%2F7aC9%2BDUnpYHMXtFqCuwI2NvBRucYPyqYsVviaJt9RHEabpMAKR2IY33pxTwpHnI6vUM42B6hnPodKnbx75jQ6kz5s%2BVfKmVPxQruTTtiQprQdjVsmfjEdYIEHl6D8ewkpZeZ1d9LehOakoq3o7f5MLQcpjgRbesCD%2BVMtu52DCe5&X-Amz-Signature=73b20a80058cf3efdb3d8eb33141e3313373be8102e8ac8fc82371b6fdd6d3ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOT3YQHJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICtfdSCGW7yIttnQg7fQPhjeZDOMhngqS65d5kKTsbD3AiAoQMzNyiJCNS3QZzCEp14AksNNyj%2BUAD4%2FDzQhu2Muzyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMFgZpYKU9YnP%2BjrOpKtwDIxUmfJoMFVGltouc62KLZGx8YIvvqOa0yf%2Bt4bDFLIlPmDtfw7NOx%2FZp%2FIxVZnUG1SZdhid8O1vxHe3j6AqTk2uP%2BctRsz1%2BN7IUDrw1zcdFIem2q2xzb77hVEJakSjlWgzg%2BboTXxt76vF455%2BE5TMzILxj79Kyd23YU6BIcAPpp4GjWUUHuIVZOIisl4%2B9CKtGEiS%2FWHqA10WE99aq0U2Mx1AaJfbaH6wvlPuqRknQm88Cu5cnR6bF9W3Efn8vTeJi2TrE5vT9HwlPEZbAatpx83S54Xoew6meMBEl02OPPdhzCC%2BpXOQbDAqt0OYgCEIGzC0n9B31mEpQTLcaqdeWCVW%2FkTws6JUio7alBA7n9vKZpBFniRP9013PdnSfSAGmZAdyNWRFLZ1L5Nj0%2BkGvbG0g8xzVw%2BOIopYbsY5zy79UGmzCEY6JuWCDX19s7UMa8vGyi7kcogpO1B5wtFkiX%2F2yu%2F0k0n9hO7x%2FAnPrYI7pVlpF7t7uWclcSTgDaTep4PaaOt06IWr21qfKQm2zAx0jhYj%2BMBv1t9a2lyoEebiGtOtiP%2BTugSjYHHJZvJVmg%2BuKikun3bk8B6Ih7N3BVfiEsym6ACYwOiaahaysz%2BNwFRBZ8FITjsQwl7zrvgY6pgFFZ1UHk4jRO%2FOWctke6IlNVZdSlHJCRtcXaDKbcmIPxkrkdH9%2F7aC9%2BDUnpYHMXtFqCuwI2NvBRucYPyqYsVviaJt9RHEabpMAKR2IY33pxTwpHnI6vUM42B6hnPodKnbx75jQ6kz5s%2BVfKmVPxQruTTtiQprQdjVsmfjEdYIEHl6D8ewkpZeZ1d9LehOakoq3o7f5MLQcpjgRbesCD%2BVMtu52DCe5&X-Amz-Signature=42d5fdd9cd0af7b1469c1c93c23ca0f47561a3fa523538d59e15e38d32c0940e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXHUNYY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCnNJxRq7UUqy4GfQ7yJmtHQvzbR7bgrcXLE6ZqPJO9SgIhAPDOO9p6hCI67AF23eaUO0d0fGUuKLN6XwIRz71EuAxLKv8DCHgQABoMNjM3NDIzMTgzODA1Igxo92zoZSAA4N%2FtRYUq3AOe2IwCDxHh8MGy6LrrovBsS5g9R3vtYuH2js746v1vl%2B4kdpJSLOfOZHl7NioFY3RfZ8HKwEsRdRy7T2RizNhf77E4BpvSZGADXDx1TYGRxs3iatkfzJC3qEEctFB%2BHq9lRI0GLPVhi%2BWFHmIhbkas3GV6eboghOwW6utx36JAV%2FojrkOZCEW7RsUgB11PpLl5apUKtlXuJZWlIpWtN7LlIijOKkvCGn6M658l42eC3cg1Ln6VJqvxrZa7c1kNUZmDAEkcDiqMES0yIWH1G0%2BEyrPXXvDpIu1WDsV5DHHPf6HcTXlA38yj5xjqDa8d4Jm3OD8HdN7jVPCyHD9EFV0f0oBZJIm8Ndv%2F2%2F0k2cepCnEOfqZ7827qx1zRllVGGjA3whL6B%2Fh96Dp3sH%2B6%2FQ%2FX44D42K1nuV7hOGnFLamMHH5ATM1wWj4GvHZAbBiy8qkVCcsm3GiDRCtyVG%2BzVfYh%2BuWQkpoJgZjYbhy3KUdfmKcCEa1atcgOVdSd50FbG5CpgPQ4MOP2wo%2F1Ia4zPHX3Q6XNDGA5yqwThVzTKou6HfwI1ahURs0ggPFDxvSgRj75oN0tMu1Uyf6k30ecI%2B3Y%2BdAfuqgpcp%2BSn9l9QVdw6u4oV9BVZMlehdMMejCOvOu%2BBjqkATonunru0STchcuQLBo24b0xSSuETRBzEeJfp9FurET4ypm60lDwOqsbd2XYhEIkSyKpt2lf2vU4GMxIaCBHbACvl8guHWr913zHo2VASL45CxBSc4Zb3%2BXWtp%2F%2BBYm7BuOrqjfh00AzGtSK4L9BQ8JLPS4zwwCCzAaS%2FYHQU8fqHXvck%2FH2%2FB0Xi%2BbYoi1Ko12PxO8Hqsq%2BwxQwlosO3k7L0OAQ&X-Amz-Signature=b04f2621b2374de75e0c75becd332e357f553c2a46eb1a1bffd1bd4e81e8613b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFMH2S3%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDBrb58UvATcK3ueHdpOIx3mhLidnFF1CWq%2BX8bc6slQgIhAPC%2FyhcfSdSJDij6K7vyBkWAucLJ47SeDFGaGQqJJSs1Kv8DCHgQABoMNjM3NDIzMTgzODA1Igw0EPBixRxyEuPgIyQq3AOMEhKmXfOdFj5rSMmpGTB4Efhh37VVqzcNxCrflC8Fjo8vvgG5H%2F0aC64l8mW1Vmw8w%2FpnC2FRdadY9XFPJNMnVcr6a2OpRJX%2FgkLMHMbCm5GaEc%2BMwD8oPiIlABzRKPQMveK8romAvD23dGW4H3W2REkL0TsO4PgVVnRmyoS6wj8XnlMDZf6c%2Fc9v02olHB2z9ZCspX%2B1jx25ZFq%2F2uPR2qso7wupK%2Fvc30LF7WinB3XRWW2p5aYFzLdmCczqrfs%2B9Y3o75G35fLVgmnq1Nm94dcrRIjhlNjM5oSSRmqhVPEAr8D8u4%2BdVQdPXeF5wkZD%2BqkUJ594NoSxtZ567pwb%2FovzjAJAU1G6t1tWcC6p39VRj%2FqJ5yj7rrMCJ9AKZzkxtCny3UleVaHgjdqH5JbhHFxDBL0L44hwd3QhAvZ9DKrJp221u8caG6yJz27vFmwVF%2BYmCv3lled6NRbyyPkB8AhCqOOMinGCWluJ%2BVO11sB2ElszXQ3WeEsCrblPuRWRFN3S6QOrgaN7PvGHgueVWHGUKJ86IbAJ4CmeouMgGu0EuMfH7leMkpLmngLX9j4FX1cJ1yXY7kHqf9yEKgqjMscdqdjbZi5gqjKfAvTdglm0W%2BIsPm%2F9P%2BdaEzCPvOu%2BBjqkATchQDKbm5qCb%2F5NnrsjhntH0gd0C%2FScsF9et7JlnQ3hbGWHO3DVtzsECDDeA8z4hU4qYeTDP%2B9aa5VRU5NQAo80s%2FtMjqtTz8T3Icc1FFYGvEVaf3j4JYSXNLdH9MxZrb4Q1ZRs2yw9E90XQNssLCYv6EisRm6MnblbOpt8W75s7m4nXByIrTErKLK0%2BdqiMCugX5MyAxNpCXF5ALnaNeu8kII4&X-Amz-Signature=4fcf4f2f420202c6c5dfd58851ad639fffaaac397f0ede3136b0a2f3914184ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOT3YQHJ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICtfdSCGW7yIttnQg7fQPhjeZDOMhngqS65d5kKTsbD3AiAoQMzNyiJCNS3QZzCEp14AksNNyj%2BUAD4%2FDzQhu2Muzyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMFgZpYKU9YnP%2BjrOpKtwDIxUmfJoMFVGltouc62KLZGx8YIvvqOa0yf%2Bt4bDFLIlPmDtfw7NOx%2FZp%2FIxVZnUG1SZdhid8O1vxHe3j6AqTk2uP%2BctRsz1%2BN7IUDrw1zcdFIem2q2xzb77hVEJakSjlWgzg%2BboTXxt76vF455%2BE5TMzILxj79Kyd23YU6BIcAPpp4GjWUUHuIVZOIisl4%2B9CKtGEiS%2FWHqA10WE99aq0U2Mx1AaJfbaH6wvlPuqRknQm88Cu5cnR6bF9W3Efn8vTeJi2TrE5vT9HwlPEZbAatpx83S54Xoew6meMBEl02OPPdhzCC%2BpXOQbDAqt0OYgCEIGzC0n9B31mEpQTLcaqdeWCVW%2FkTws6JUio7alBA7n9vKZpBFniRP9013PdnSfSAGmZAdyNWRFLZ1L5Nj0%2BkGvbG0g8xzVw%2BOIopYbsY5zy79UGmzCEY6JuWCDX19s7UMa8vGyi7kcogpO1B5wtFkiX%2F2yu%2F0k0n9hO7x%2FAnPrYI7pVlpF7t7uWclcSTgDaTep4PaaOt06IWr21qfKQm2zAx0jhYj%2BMBv1t9a2lyoEebiGtOtiP%2BTugSjYHHJZvJVmg%2BuKikun3bk8B6Ih7N3BVfiEsym6ACYwOiaahaysz%2BNwFRBZ8FITjsQwl7zrvgY6pgFFZ1UHk4jRO%2FOWctke6IlNVZdSlHJCRtcXaDKbcmIPxkrkdH9%2F7aC9%2BDUnpYHMXtFqCuwI2NvBRucYPyqYsVviaJt9RHEabpMAKR2IY33pxTwpHnI6vUM42B6hnPodKnbx75jQ6kz5s%2BVfKmVPxQruTTtiQprQdjVsmfjEdYIEHl6D8ewkpZeZ1d9LehOakoq3o7f5MLQcpjgRbesCD%2BVMtu52DCe5&X-Amz-Signature=22318c56f6b484b48be1408f3027ae84557abc33b5f7abb98feef454a79950e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
