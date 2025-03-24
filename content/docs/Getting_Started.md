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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKUQFSS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu%2BM0btKyjgYt3x1QJQUg3AhyU00EgpOiPSKQ6xOQ0NAiAh2czq0qMPuBjGfwYma3fpvR5R2uQbLD5XRYFfjfJ34iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaPU1llzU0l3bu8aHKtwDtfgZbVXVuU5KvceNkFKPrfzF4SPIoAUI9FVFBh4x8PYCT7P7dcQG2b6UnaLRTPCby1FGXgDTwO9iWoVnTAHdsJpr2BGmtLf345nKlcmVA9kpKKjxj%2BHY0RcWASCPdgFEy8J3TJ2imNsXmxumGaKgxUBLmBOADVuDnxpRlJuO%2Fxls9T1z2fsWuoFzqcIoYkZ0FcmDSPMZUbcfV04GaikILidgxateyA648q58ivGGWbIK5vHIQEcA%2BTbkB90TZD5YTs1IKG7enyhekw%2FLNZSXrJ%2BXSBXIO7L4ZZUE9q%2B4lQeEaOfYQN%2FsMHhyStZG0TXwrME%2FZNm%2BYenX8mY1DKrZKWfvWE7ppBVJxHkqoN%2BHv1enfD0WJWyzXQPoWxcvzCOrD%2BDpCYsv4S49i3IQPSEKe%2BQVCpV2fCujUkt7k9evw3x%2Fh6sD1ZAO1qKBii%2FlK1W1KKe8J8%2B3w8dSshfR7ZiZ0F9mSRZjfPNoqMtI3txNVo4yBFvZij6TRILF2JVS6sRrJxyxj4jKpIXpVRBoqXc78q5923lb%2F3tidQj7tmwxAJ21HQkDb0BevzCXc4EjhXYOP9RbUF8wqNtnaJLWv9jdBaUbj%2FNnfNNfd%2FVL0Hsvb764cgYNuq2zBX0cbYgw2bGCvwY6pgFEGeh7qjpzFVIG9ptFaTuX7hOpim%2FvjmuOfGPsbd6QlMg%2FSFfZ4B%2FcW3fpYcMY%2Ft4YqPZfhYCz2%2BI%2BnTN3GX%2Fk%2FLhF2PzzdBZ2P6n5Ftzn0PjA%2BDCDgDnUIcqO6BWvNlqmCK%2Fcc1IX6%2F3bHngveMA734pfItEh%2BDQwqhZ4EfJhsOjJyJOJekO9HLDRtbubvkaxFQiGDbiU0aYbtRsibE%2BpJxe4a4Ee&X-Amz-Signature=066f96d125822b0d826aba6382d75c709199796b1b6d7311e743a18584958d62&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKUQFSS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu%2BM0btKyjgYt3x1QJQUg3AhyU00EgpOiPSKQ6xOQ0NAiAh2czq0qMPuBjGfwYma3fpvR5R2uQbLD5XRYFfjfJ34iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaPU1llzU0l3bu8aHKtwDtfgZbVXVuU5KvceNkFKPrfzF4SPIoAUI9FVFBh4x8PYCT7P7dcQG2b6UnaLRTPCby1FGXgDTwO9iWoVnTAHdsJpr2BGmtLf345nKlcmVA9kpKKjxj%2BHY0RcWASCPdgFEy8J3TJ2imNsXmxumGaKgxUBLmBOADVuDnxpRlJuO%2Fxls9T1z2fsWuoFzqcIoYkZ0FcmDSPMZUbcfV04GaikILidgxateyA648q58ivGGWbIK5vHIQEcA%2BTbkB90TZD5YTs1IKG7enyhekw%2FLNZSXrJ%2BXSBXIO7L4ZZUE9q%2B4lQeEaOfYQN%2FsMHhyStZG0TXwrME%2FZNm%2BYenX8mY1DKrZKWfvWE7ppBVJxHkqoN%2BHv1enfD0WJWyzXQPoWxcvzCOrD%2BDpCYsv4S49i3IQPSEKe%2BQVCpV2fCujUkt7k9evw3x%2Fh6sD1ZAO1qKBii%2FlK1W1KKe8J8%2B3w8dSshfR7ZiZ0F9mSRZjfPNoqMtI3txNVo4yBFvZij6TRILF2JVS6sRrJxyxj4jKpIXpVRBoqXc78q5923lb%2F3tidQj7tmwxAJ21HQkDb0BevzCXc4EjhXYOP9RbUF8wqNtnaJLWv9jdBaUbj%2FNnfNNfd%2FVL0Hsvb764cgYNuq2zBX0cbYgw2bGCvwY6pgFEGeh7qjpzFVIG9ptFaTuX7hOpim%2FvjmuOfGPsbd6QlMg%2FSFfZ4B%2FcW3fpYcMY%2Ft4YqPZfhYCz2%2BI%2BnTN3GX%2Fk%2FLhF2PzzdBZ2P6n5Ftzn0PjA%2BDCDgDnUIcqO6BWvNlqmCK%2Fcc1IX6%2F3bHngveMA734pfItEh%2BDQwqhZ4EfJhsOjJyJOJekO9HLDRtbubvkaxFQiGDbiU0aYbtRsibE%2BpJxe4a4Ee&X-Amz-Signature=4169ed91990d83365d777611b3cb3b054280ef4fc55b3453e1dc897071236ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGJT6QE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHfNJYuSHBmWumW3b4IZqLe3FYTxTWcGNgZdSgT9jGGAiEA%2FaKK1bZ5EtwpV9P2jK3%2FFL1Y%2B74DTI%2BRdtxZh%2FSMSlAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6%2FwwKDkXRW9m3m9yrcAy88vHv0qqpIyoo0cqKpm0WMiBM8kbmFBnC%2FXGDBaA1r7jl13Fw00c%2BobpX2nYMEVBvsFrHx9hcQb0fIBESCt7ZWbFNRldswaQKoVXBMqElu6TBPp2AlMrgew3CVFCWaV02oGNiJLiQRNJW4GKxPe0jSAlV2v2wsA5jI1JLztjn7Ulw0%2FisOJk8I%2FgVG9wwApn6g8sOVkK4cD18pUY5yZQf%2FxCB70dBtBqRw3dk1YL0aT%2FwPEsrjp8wPuWp8684m5y2sFzwIrU%2F3cMW9HEyo4RfYu7YfNLgMkbgrsFECC31k01RHvGhEz551RIU5xGHjB2MRIUp0op6GbuHNmJ%2BgeHfn%2Bw%2FvvVlTl4noMFZ8n5qdXS0jfCM9f%2BYUTfgklRWyIOwO5s2Ka96Uvv%2B8xscr2VrNiBzFZhlWTHPPxm669%2FpG1m%2FzffByWSPqy2jGCBjxiYpWksPC02qUKxJbp3BEx6b%2B6rTjUU7Me%2Be394JFASQKEtUP%2FIpgxqe59Z%2FfqCn0rP6VsRruFkYrM1hYj9VNIeI04Hr7YWlZ0VCVttwHAY%2B2hI%2FZWDqwMl%2BrhM7YBPA%2FTkydsFSXL4v0UwPGt7RyAO%2F2juIJcG5krdqw0Lnp9gaI1j1PbBOHq3idMTUZMI2wgr8GOqUB%2BIJDNKz2euYCRB7eS4YAoTPNH%2Fo%2BSsDVRFxpOsEabT7w6BR7RPnEOJXybFKraPxDaH1n7%2BZMRk275KR0cBrhhCzz6KboiCCpg77uax1c7Nab65ywu9narEsV%2FlevW9JLnh6nC1ovuGWx%2BKzgpxFYFeZSJub4tnYaUyjh4igtWSctIy10ZeX9ovdUdGwCS%2BFbWbtunLUbERZEQhKl109v4ZWfRXUl&X-Amz-Signature=da05a3b446f7f865f3bb414dcae77332f409906f7eaf57647b894ea8dc4a57b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZIBIK4A%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzb7ZKcIu1YeuN9mEHkTNZ%2B4Hw622CzAnzyOhLlv6jKgIgeXJaJDfOoYHoKgPp%2FBlWxil%2FuJhylkHEfw00F7f5kf0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZf%2FjjCxjb%2B%2FmTTKSrcA2e%2B%2FENL41dV5niUThQnFEO5gDqzM4Tnq%2FSU%2FS4dhFAuNzXN0fQ7ew5lbgqT4xwwZ12Jxai9IqSG1mLe4RIMNYZdF15fx04oH%2FXbrhBhcAEySCbr5RaLjKmeF0zKsK4hBJ3FOx0E6Bec%2FVvrObns61OYr%2BxdCn3bj%2B0SJg8pz9Vw73aMpZwQLRr8iFmp0Yfq%2FGLTGvVioaJ9X6QFbF3FHdCKOLqitlBbECo8Mw6cppo4Ql5bTV8G%2BkJIH71OhMQyP66v1md%2FIorvxkzbtbvqL3x9JOnyRFoLQnQovYPYQVlHqvmQ5iPTmsSs0ImAnCzf2JWZehLpCm9Yk8pXJXiY5gWRWwjl8GM86CoTGT3STx%2F1JGze3Qtf60Eo9IeYfEgreheIsaFSGzwtr9BCLRavUkU1t7ijri3nl8uvdsC989i9uKN6QmpGpb%2FfDHcmQ3ZaJJ8ZhNZGtYpF0TJFalQA3HiQEdHCGHxwqOeBE1z%2FTu8AmvY3QFExzA6ShgBaX7pToI3D4hmDTLdAAehOSjLQyaGu2E%2FNbUn7Cv7KM2aU4KkZBrz7jGOZtV5JHA7tPVe4ljgXnXeMF3XiKL68FXyUfjVV8yayFNsuNLTnklnczAyYB55NzBZV1wtxNm0sMKixgr8GOqUBf%2BGt3nsRS4l87cNA5DKdPUrkT8PJNFHvcJcYHjY%2F%2BopYOlVhTxlFWJS%2BBEXgxEIEXvG6JQaO4J5sT0IY77%2F4uHtLlV391Xta7SiROYI8xMV9q%2BWt5pGaw7tiLI8mdNkCWPGVUGLJUJ7OdOFknfN0QRcB3JeTmS9sEGiCDnpW0q8IT14X79Tl5RzFGyrpDZVQaFWdn4WfJBEWDUgAwfKsUoAg%2Bi69&X-Amz-Signature=4ea42f40289b2d37c02e38c56b304fdcebd19f21aa2f447672212ba91f049772&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THKUQFSS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu%2BM0btKyjgYt3x1QJQUg3AhyU00EgpOiPSKQ6xOQ0NAiAh2czq0qMPuBjGfwYma3fpvR5R2uQbLD5XRYFfjfJ34iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaPU1llzU0l3bu8aHKtwDtfgZbVXVuU5KvceNkFKPrfzF4SPIoAUI9FVFBh4x8PYCT7P7dcQG2b6UnaLRTPCby1FGXgDTwO9iWoVnTAHdsJpr2BGmtLf345nKlcmVA9kpKKjxj%2BHY0RcWASCPdgFEy8J3TJ2imNsXmxumGaKgxUBLmBOADVuDnxpRlJuO%2Fxls9T1z2fsWuoFzqcIoYkZ0FcmDSPMZUbcfV04GaikILidgxateyA648q58ivGGWbIK5vHIQEcA%2BTbkB90TZD5YTs1IKG7enyhekw%2FLNZSXrJ%2BXSBXIO7L4ZZUE9q%2B4lQeEaOfYQN%2FsMHhyStZG0TXwrME%2FZNm%2BYenX8mY1DKrZKWfvWE7ppBVJxHkqoN%2BHv1enfD0WJWyzXQPoWxcvzCOrD%2BDpCYsv4S49i3IQPSEKe%2BQVCpV2fCujUkt7k9evw3x%2Fh6sD1ZAO1qKBii%2FlK1W1KKe8J8%2B3w8dSshfR7ZiZ0F9mSRZjfPNoqMtI3txNVo4yBFvZij6TRILF2JVS6sRrJxyxj4jKpIXpVRBoqXc78q5923lb%2F3tidQj7tmwxAJ21HQkDb0BevzCXc4EjhXYOP9RbUF8wqNtnaJLWv9jdBaUbj%2FNnfNNfd%2FVL0Hsvb764cgYNuq2zBX0cbYgw2bGCvwY6pgFEGeh7qjpzFVIG9ptFaTuX7hOpim%2FvjmuOfGPsbd6QlMg%2FSFfZ4B%2FcW3fpYcMY%2Ft4YqPZfhYCz2%2BI%2BnTN3GX%2Fk%2FLhF2PzzdBZ2P6n5Ftzn0PjA%2BDCDgDnUIcqO6BWvNlqmCK%2Fcc1IX6%2F3bHngveMA734pfItEh%2BDQwqhZ4EfJhsOjJyJOJekO9HLDRtbubvkaxFQiGDbiU0aYbtRsibE%2BpJxe4a4Ee&X-Amz-Signature=460e26bb4706156243f6cb698d9fdce7a9440d5f81c10f18bd4925a7091f62a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
