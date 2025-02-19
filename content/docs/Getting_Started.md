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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGSK6AM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBAeJ6QMMhNthi%2BgSJO%2FqRbMgkexCIFWhvmINCTxSoPVAiAm0sA4ezFj%2FfEiyxf46yYLAnMH7kJd1mrzNAU5kHa61CqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4jvOqVWnxHa%2FYRVjKtwDcwdgtnlaxM%2BClDYdSCQk3ORqvZsvPBhKKy8iMSzUqz357a%2Fx8p9psXRXVRB%2BSETkCKI%2BB8IZf9VS%2FooIXOjVeWkEKHusN65FjXxMuACrUdcBL3JrUVdtpGKl3cW0Hu0My5U083RLS54pLZMsaTHD1xIqEsy8utbfqBCe4p%2FiiXXKBTUuWxjcl6V%2FNbRZi%2FoIXJ%2FjvGVSRquAFoYVcwQdVzQnOsOCO7QpVktYSPpp31Kwzrngz9gcO2uijKFzjyiGSvfbX6XoAEnb5q76oTMRqIwuIHzk8YnX7oU%2B64LihiHQ55jl8s2upinS3%2FseXaOPeBHHW1M9PfB4KmQuxp%2FuwOtttLfHbaijk0JhuGMs%2BvgQ5kILh8TyhoVJdCRkzOnNMKuNAoNZ7vZDzqCEDlgUxDbksf1%2BAds6VsNT4oxR9s4z1fLWByJXGMMCc23Cs6lK2tr33iYZcxZ3RZ2QPNF4wy7qRaNIFihR90GBhalXI1nMOL%2FfWGYbkQbuEztY8zKUWHziUClpfY004Png4iau%2FezX%2FfXDSVrXFXsFyv3i8lfAuARFzunAzAMXgAUR56y5TAsCWRIhkcKDUaIGlsrohJ%2FuxpzU6UJ0BCkIyKjox9R04MTCfPASudakNMAw4PrWvQY6pgEzah%2BdORucUgqkK%2F7AlWQGcZcb11aLIQJpdWFJIR6yqBtmrnM3NzqopEsR8F9KSCCZD5E4dE1b%2F%2FtD5N9hW6o30%2Bl78eY5Cf3k5iJxbYb6OgQTSQzlUCjKdoZ9Wuz9B%2FbA0BoZEW9ODsGhYfAQssvl4zucbpfqugI2CvluqWTFvzQPflFYUdoqtIUA5zaxvEf63IxPHK1rXh6B2BIr%2BJKwGh4wqNLF&X-Amz-Signature=b5d7957c199994df6ce5077927704cb4ce2413d4132f89a0dd77b88560b82f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGSK6AM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBAeJ6QMMhNthi%2BgSJO%2FqRbMgkexCIFWhvmINCTxSoPVAiAm0sA4ezFj%2FfEiyxf46yYLAnMH7kJd1mrzNAU5kHa61CqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4jvOqVWnxHa%2FYRVjKtwDcwdgtnlaxM%2BClDYdSCQk3ORqvZsvPBhKKy8iMSzUqz357a%2Fx8p9psXRXVRB%2BSETkCKI%2BB8IZf9VS%2FooIXOjVeWkEKHusN65FjXxMuACrUdcBL3JrUVdtpGKl3cW0Hu0My5U083RLS54pLZMsaTHD1xIqEsy8utbfqBCe4p%2FiiXXKBTUuWxjcl6V%2FNbRZi%2FoIXJ%2FjvGVSRquAFoYVcwQdVzQnOsOCO7QpVktYSPpp31Kwzrngz9gcO2uijKFzjyiGSvfbX6XoAEnb5q76oTMRqIwuIHzk8YnX7oU%2B64LihiHQ55jl8s2upinS3%2FseXaOPeBHHW1M9PfB4KmQuxp%2FuwOtttLfHbaijk0JhuGMs%2BvgQ5kILh8TyhoVJdCRkzOnNMKuNAoNZ7vZDzqCEDlgUxDbksf1%2BAds6VsNT4oxR9s4z1fLWByJXGMMCc23Cs6lK2tr33iYZcxZ3RZ2QPNF4wy7qRaNIFihR90GBhalXI1nMOL%2FfWGYbkQbuEztY8zKUWHziUClpfY004Png4iau%2FezX%2FfXDSVrXFXsFyv3i8lfAuARFzunAzAMXgAUR56y5TAsCWRIhkcKDUaIGlsrohJ%2FuxpzU6UJ0BCkIyKjox9R04MTCfPASudakNMAw4PrWvQY6pgEzah%2BdORucUgqkK%2F7AlWQGcZcb11aLIQJpdWFJIR6yqBtmrnM3NzqopEsR8F9KSCCZD5E4dE1b%2F%2FtD5N9hW6o30%2Bl78eY5Cf3k5iJxbYb6OgQTSQzlUCjKdoZ9Wuz9B%2FbA0BoZEW9ODsGhYfAQssvl4zucbpfqugI2CvluqWTFvzQPflFYUdoqtIUA5zaxvEf63IxPHK1rXh6B2BIr%2BJKwGh4wqNLF&X-Amz-Signature=8aa9571f5837f09481a7eb01e812ff54782a32427961d1923fb4b9a1b909f161&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LPGZZV%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGnJ9NsKP82oerbkw9dLuXg50IJyzG7nGK78Pbzz%2Fjl5AiEAhFOtJ0TOwI%2B7VJ%2B1OcxUILj60X%2BOkSeZ5KpFkEpWuFgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDqmM6FU4StgSbez5SrcA09bylg41TpmovIcihKR4aD9iUkLFF9A8BqtRx8vZ%2BqTu5llpXahCnFV2M5Qa%2FlYXfI8Rn%2BFfmO%2FwGFv7AEi4DWarh7zzqWn%2B6dD7U3H7KfkO6gyqM1%2FwN%2FItvKVqCU46knqF1E4Nk2mtarhGXPDqIo74XVpvRac5VFJ5WvQfu986S08Ov2KBvC8MPRPDmI%2Fx9u%2FvWCCipb%2BGxQp8aOvuc4zV9D0BMssvhmXKMc7Dl68KdRTyp03MIxIt3WV1m8q4p9%2F6dFpvy94K1wkJet5vkYvZwGl%2BlDO9OrvDuxut8a7SRb9bVUJ5QnRvhJL4GdgQfs9vhgzNrG3ftPAiLAZIKhp%2FBGYcLQFZCyvJFWxjbWhYGHmxxyyYlkJWXLqSc5dpp%2FW1L53pSYXcX1Z2C%2FZdHpoI6zjCsyOom1i2Lwxp3b2bi8B3K9RhL6gbcfzB5zuzqC1jgxYjXXNVucFSnZIqmwKxw7Vexx3mzPnkwATgfSE4S1kU%2FsqTKzf02F%2BEIcnj1cD62Tl8qvAf7ZgjYF0P4YazoT%2F%2BntslnmZr6wisSGGtFOHWW5pA0nIuFePk6oa2sOkguBFMVRjbyAjQ5F6M2ybPwMkrVUKkRfF0xLnmUokweJXxvoBaKWs4UPTMPb71r0GOqUBhc%2FOoO%2BBbNOPru2uL33jWO0ACqW8FWfXPXb5rvSuIB8VV3eGxlxBg3CtKICL2fZw5NJOJsnJoEkwI6w2jrsyAWs3NSFwH5W118nWFQr7YmSGzkw3D7Cn9p%2BaHW6ZhpqYuD6sP9NeYGpAaI3K5IpJiOHhfvQIl10OSHXIilp39eBWS3FUHqVyMW2spig4NeLD73arXeIXlAzdlUM0S715JsdJrg6U&X-Amz-Signature=b3204dae704d526817f47205a52b6f3165b52b84847679db007da122852cfbdb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVWTGF3C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBwD1L32cdHLuj%2FsyzFaru3KLWTDKlhp3HfjFohQpGC3AiEAyHCBGcg2ovJLyIbeT1jdtVzNarjCtL950lbgyih9RWYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFAQyjGjb84FFUGAyrcA%2Fjw8a5rAZNMpnDNzl0Ylhk1xP9BWweO04KPl00wFDzGD2qeROBqyNgn8arF4t%2BAKQnun6FUtt0tLqjRrMfdZ%2BIkwhmKoB6NWXqMEnWTfan07T%2FM4Bh238JIn8E5FZ4rc0sevqy%2FMlf%2BRSQwKzWs6Qhsfg8SEoHwbnITNKX4LLewnknkSKtVPrSVTmSDbp9Jl30R%2FEZfY9Fl%2F5Z%2BSivYh0hxHX9LZw3U1knG24lPnqk5W%2FI%2FalZUWAOlWcm%2F4%2FRGxjrOELjqtI%2FTIjOjgDfn1Rh56Zlx6C%2BoVePb8u65%2FMPa9uBMWYhiUSILiTWKQPS3ik1%2BPowF9syGxr1mRK1A%2BCU1fOLVbk%2Fv%2F5biA5s0f9ORgfwzNcI3hkZW41fXKIVjRALAVgt6vjSwqmPIf%2BVoebV7h9EdlRBH92YkF1Gk34gWzb1zWNDsCQF1mtGp4kO1swXQg0f%2F9C9w%2BfkrqpK1aR47gqrAdVev15pGKmt6fKZxJlXA3ZFc%2F7g%2F2cyn4ZsuHhl6%2BG4wccupnB03fimb%2FLU37zodCnqfD3pUe52EaOjvpyGZ%2Bf%2FivQt1608xRcCCuiB6gxHhRimJxW1DJxNqzEadoDtDP3ooI6AF2LKiDCHAmgZen8S6QIDL0Hd0MMT71r0GOqUBe%2FAz0Rzco4hyNB8h40WEPwymwFEPBayc6OA1xmnLjdo03bTzxJGDyKPbEAnTlfmp3zZ2Mt9wvEDt1sqxczQotLrNvWwdORKOujj91xA6jX8wvLU2uIcIVKj9TJzcSm7tZFWCneucYBiaR0H%2FNVgpcHTIG5fCIbZGwIsBlFlLGRTQZ6ImySIE7Sd0xRTqAeLgbayJ%2BqpF2c7jyf%2FQAIblgVVfaI%2B3&X-Amz-Signature=950ff4afa57644979a0abf3e676d9235e985551d54d50da75b59d39ecdb1a7af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGSK6AM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBAeJ6QMMhNthi%2BgSJO%2FqRbMgkexCIFWhvmINCTxSoPVAiAm0sA4ezFj%2FfEiyxf46yYLAnMH7kJd1mrzNAU5kHa61CqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4jvOqVWnxHa%2FYRVjKtwDcwdgtnlaxM%2BClDYdSCQk3ORqvZsvPBhKKy8iMSzUqz357a%2Fx8p9psXRXVRB%2BSETkCKI%2BB8IZf9VS%2FooIXOjVeWkEKHusN65FjXxMuACrUdcBL3JrUVdtpGKl3cW0Hu0My5U083RLS54pLZMsaTHD1xIqEsy8utbfqBCe4p%2FiiXXKBTUuWxjcl6V%2FNbRZi%2FoIXJ%2FjvGVSRquAFoYVcwQdVzQnOsOCO7QpVktYSPpp31Kwzrngz9gcO2uijKFzjyiGSvfbX6XoAEnb5q76oTMRqIwuIHzk8YnX7oU%2B64LihiHQ55jl8s2upinS3%2FseXaOPeBHHW1M9PfB4KmQuxp%2FuwOtttLfHbaijk0JhuGMs%2BvgQ5kILh8TyhoVJdCRkzOnNMKuNAoNZ7vZDzqCEDlgUxDbksf1%2BAds6VsNT4oxR9s4z1fLWByJXGMMCc23Cs6lK2tr33iYZcxZ3RZ2QPNF4wy7qRaNIFihR90GBhalXI1nMOL%2FfWGYbkQbuEztY8zKUWHziUClpfY004Png4iau%2FezX%2FfXDSVrXFXsFyv3i8lfAuARFzunAzAMXgAUR56y5TAsCWRIhkcKDUaIGlsrohJ%2FuxpzU6UJ0BCkIyKjox9R04MTCfPASudakNMAw4PrWvQY6pgEzah%2BdORucUgqkK%2F7AlWQGcZcb11aLIQJpdWFJIR6yqBtmrnM3NzqopEsR8F9KSCCZD5E4dE1b%2F%2FtD5N9hW6o30%2Bl78eY5Cf3k5iJxbYb6OgQTSQzlUCjKdoZ9Wuz9B%2FbA0BoZEW9ODsGhYfAQssvl4zucbpfqugI2CvluqWTFvzQPflFYUdoqtIUA5zaxvEf63IxPHK1rXh6B2BIr%2BJKwGh4wqNLF&X-Amz-Signature=5c0cd1ac83f37711f68eb496b60cd152ed180567717df6688bb3b8e6297a9191&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
