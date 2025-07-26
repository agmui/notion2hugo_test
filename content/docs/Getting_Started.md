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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB4IJJZU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCfj1Aal%2Bb6ejSA3LC1BiPuHhhk2%2B5hSWghQpIhVsiTngIhANZEUVXTUYGyY%2BG5JVj6wMvt0zf5gkxyunPUrk9JjEH2Kv8DCE0QABoMNjM3NDIzMTgzODA1IgyHbMLX3Bw3%2F2wFMQUq3APD34O0WxrdbnInZbKFzqkF3PB9Ty3vdkKWrh56uepBOXYNVENCAq9rIzV1R9avZIz0NU96CpX95921Acf%2FWXtnD41aIbbVnPGEcFAbEI%2Bi%2B5lZAkXQkWSEGhEVPO9k%2BGKefDECfQpBP8Z%2BW%2FtepM7cobIOU3NKzg2uPnWjuPjtr0v27NRz8Wenm%2F%2BMujhyy0HFeNQHPwq%2FSl59uqVHTj4UbwA%2BoihD%2Bvy8RhnI9mRtQccBkhUNDUK1xuxwhfm8mUKp1r7R2IIlKpyrvktP05KTyqanGjeqwj0B7YVFB%2FwTgzUuioYq5uzp2QrOEIOz77vBDOn%2Bm9Vq6l9t5yAYe4RGD5Md9509wFMWSH90PtctiRqIUBaum8bjqp1l9LEhS9ONBlIQQtKO94wsNIayRVy95W5dq6SGNp3LGlkwXfeLZDB9eyEdUs4%2BXsZsldyO%2BSju9ZlI7Q8W%2FTgs73zclZJQneh90ZMPdYltJBLYBQfV9bCMTUf5kXV3tOpqnXuL5mwHcJrC2m3mzbus4pQN2SOS8hRx5OSw1lq7mdIBz33%2BEbZC3i0bIPwc5zP4zl9eBI5MQOVw%2BTQk2ocqwO6mX%2FlplhdOpxaXDm6THJD2dOiSuXtyU5YxZ6o%2BTkwluDCD0Y%2FEBjqkAVe7rvcIDyMaf3cfG%2BNIhO%2BO5ha4jpTdvLsGz87GD%2BXKKnf96y5afHz1iFLiamQDRsb%2F3HgnbYYo14ro1aYjEpKHrxw5qRLc2xvjjj9LSJtos0Ho7UdIBEJoLr1d6TSrgGktSMBHuXMHe%2FiMacyPis47xdewcSkXsAc2ZEedKZLOdmVL1%2F4e1dSTDvHJU%2FiQER5%2Bzw%2F54u884a5U26qZ6EL4agsq&X-Amz-Signature=b47f101546e24a6cc06188dc23c3c42a17cdfe75d0c944be34413e524f3d908b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB4IJJZU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCfj1Aal%2Bb6ejSA3LC1BiPuHhhk2%2B5hSWghQpIhVsiTngIhANZEUVXTUYGyY%2BG5JVj6wMvt0zf5gkxyunPUrk9JjEH2Kv8DCE0QABoMNjM3NDIzMTgzODA1IgyHbMLX3Bw3%2F2wFMQUq3APD34O0WxrdbnInZbKFzqkF3PB9Ty3vdkKWrh56uepBOXYNVENCAq9rIzV1R9avZIz0NU96CpX95921Acf%2FWXtnD41aIbbVnPGEcFAbEI%2Bi%2B5lZAkXQkWSEGhEVPO9k%2BGKefDECfQpBP8Z%2BW%2FtepM7cobIOU3NKzg2uPnWjuPjtr0v27NRz8Wenm%2F%2BMujhyy0HFeNQHPwq%2FSl59uqVHTj4UbwA%2BoihD%2Bvy8RhnI9mRtQccBkhUNDUK1xuxwhfm8mUKp1r7R2IIlKpyrvktP05KTyqanGjeqwj0B7YVFB%2FwTgzUuioYq5uzp2QrOEIOz77vBDOn%2Bm9Vq6l9t5yAYe4RGD5Md9509wFMWSH90PtctiRqIUBaum8bjqp1l9LEhS9ONBlIQQtKO94wsNIayRVy95W5dq6SGNp3LGlkwXfeLZDB9eyEdUs4%2BXsZsldyO%2BSju9ZlI7Q8W%2FTgs73zclZJQneh90ZMPdYltJBLYBQfV9bCMTUf5kXV3tOpqnXuL5mwHcJrC2m3mzbus4pQN2SOS8hRx5OSw1lq7mdIBz33%2BEbZC3i0bIPwc5zP4zl9eBI5MQOVw%2BTQk2ocqwO6mX%2FlplhdOpxaXDm6THJD2dOiSuXtyU5YxZ6o%2BTkwluDCD0Y%2FEBjqkAVe7rvcIDyMaf3cfG%2BNIhO%2BO5ha4jpTdvLsGz87GD%2BXKKnf96y5afHz1iFLiamQDRsb%2F3HgnbYYo14ro1aYjEpKHrxw5qRLc2xvjjj9LSJtos0Ho7UdIBEJoLr1d6TSrgGktSMBHuXMHe%2FiMacyPis47xdewcSkXsAc2ZEedKZLOdmVL1%2F4e1dSTDvHJU%2FiQER5%2Bzw%2F54u884a5U26qZ6EL4agsq&X-Amz-Signature=f311dbf8c6fecf8f4ea28cd3e10004c8664c84026e61f6836456941eeb616121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB4IJJZU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCfj1Aal%2Bb6ejSA3LC1BiPuHhhk2%2B5hSWghQpIhVsiTngIhANZEUVXTUYGyY%2BG5JVj6wMvt0zf5gkxyunPUrk9JjEH2Kv8DCE0QABoMNjM3NDIzMTgzODA1IgyHbMLX3Bw3%2F2wFMQUq3APD34O0WxrdbnInZbKFzqkF3PB9Ty3vdkKWrh56uepBOXYNVENCAq9rIzV1R9avZIz0NU96CpX95921Acf%2FWXtnD41aIbbVnPGEcFAbEI%2Bi%2B5lZAkXQkWSEGhEVPO9k%2BGKefDECfQpBP8Z%2BW%2FtepM7cobIOU3NKzg2uPnWjuPjtr0v27NRz8Wenm%2F%2BMujhyy0HFeNQHPwq%2FSl59uqVHTj4UbwA%2BoihD%2Bvy8RhnI9mRtQccBkhUNDUK1xuxwhfm8mUKp1r7R2IIlKpyrvktP05KTyqanGjeqwj0B7YVFB%2FwTgzUuioYq5uzp2QrOEIOz77vBDOn%2Bm9Vq6l9t5yAYe4RGD5Md9509wFMWSH90PtctiRqIUBaum8bjqp1l9LEhS9ONBlIQQtKO94wsNIayRVy95W5dq6SGNp3LGlkwXfeLZDB9eyEdUs4%2BXsZsldyO%2BSju9ZlI7Q8W%2FTgs73zclZJQneh90ZMPdYltJBLYBQfV9bCMTUf5kXV3tOpqnXuL5mwHcJrC2m3mzbus4pQN2SOS8hRx5OSw1lq7mdIBz33%2BEbZC3i0bIPwc5zP4zl9eBI5MQOVw%2BTQk2ocqwO6mX%2FlplhdOpxaXDm6THJD2dOiSuXtyU5YxZ6o%2BTkwluDCD0Y%2FEBjqkAVe7rvcIDyMaf3cfG%2BNIhO%2BO5ha4jpTdvLsGz87GD%2BXKKnf96y5afHz1iFLiamQDRsb%2F3HgnbYYo14ro1aYjEpKHrxw5qRLc2xvjjj9LSJtos0Ho7UdIBEJoLr1d6TSrgGktSMBHuXMHe%2FiMacyPis47xdewcSkXsAc2ZEedKZLOdmVL1%2F4e1dSTDvHJU%2FiQER5%2Bzw%2F54u884a5U26qZ6EL4agsq&X-Amz-Signature=20cbf1aa77b26f389e26f54194ca9222dbd4c799072aeec77e24df87c0d2165c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMXFS5D%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIC7rJcFmaWKz%2BOU8zk48uxpnd0Er%2B1Ge83ggKTJl0x6%2FAiEA5%2FmgPNYL%2FPA4zeJ3A2rBQpJIYI7Fd%2FGJrtBKGT18wc4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKNSoOOSOW3h48MZxircA3EcVHZjsGCh0N5AZMX6ta8keWCJbWPkTXVEm90t8%2FNi5E3onMJebbvbENVCdStPCai7WM4hdoGFVUoKLkBps41d7et7aEOiFdxBe6UNe9l0tGEusjLw%2BMoH6CAM1rq6%2Bcvz8fG9SvbxFl9iWBIH5ShYiqJe%2BhnYyqr5RCwjjepHpUb5GUasF%2F4w37E1fCW7mcxV1Z951Om5QOsgvmGu3BuVr4s26eS8rViGDBFzTOlraJZCe9DCgJHSlrzCDpMnqmjJSGZJ8kX%2Fi4aEVXDzLLOjs6CH8RCWgRG5tZI38YLAuqMCj22E1yo6pPY0k1om5dKC6i4PyvqhjXfkyAm%2BBRTZ5mjBubeX2r%2FZOd0aT61kt6LvM4mG4PatOwqXOc4V%2BTbuI2f6PdNpINpDVg5uQJc0FGEN1DPBNoOgBPhP1uv3nWp1FOiI9yoTrwyB9KN1dyYiUDOK11%2FSoRSdEvawSzWFxqgI3v9Vr8gUU6PJD3N4f9jT1%2BF9Ba0O3pfBsg%2Byy2BlrUTLuI%2Fmfjhi2anMAN2oPp034nHhNCpiK%2Bsm0nNYs9kvG5%2FBj434PY%2FSqvbh42EKU%2Buz%2Fo8KaqmJoGTiJuygcN16jAnKP3xM5DNl76%2FyDn1CNwy1Bz173buNMLDRj8QGOqUB6SC6X%2FDzpkrO2BWymEy46W5%2FAI1Hli7ubE608QIwLrzNqBNBkju2VsDGsVEc1EtFBHa5HMoTDvFOHAXXO7i9q8kaasFfiNMRQW%2BpndqoSihcNtD2MR6kECzBhvcRh%2FXP9Myvt2WBmbrxNdDzpWR1Jek7Ev0ZBIJ0rqBqSqHtJHLuAVmGoMT9TZlOaB3CQZlZBq5dWf9E0oNaaTftcs%2Bdt4PREOtl&X-Amz-Signature=cfe370e182475fcf9233975354e6bd18a27644c43874a170f5aceb329394b87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWP3ICR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIB64wegGUZ1Ce3h%2B9yVOVno0jaULaAOBMq6Kj%2BuLIkLkAiB17eTHD%2FhBYDaGu2ZbGYjfIsTmpPaaPryiI%2BuZL7Nlsir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMjZmz3hKqAXz4e2XKKtwDR2Ewdyka2pHZxGhOucXmSkJn6NP3rrxN7nz%2B9gnSc5ToRRF%2FnJhUHRoaO3CJjbaIC2%2FViFQmG0DgzGNj4LsAEFUfQb0HKEnL882kQdO68NT3hoEuBX%2Bu8TpWLnubtL9rfw4a6AiAJQa52CJvgDgK0YrdE8G8NRPGa%2Bfn4Q43De3VOfT5yewqTvxqOVVRw8ZZ9yBLhtAgF4cYNJ0bKGun6mCVwFL4i82Cd8ZT3MaKLYtOP%2F4cd63ebjWbT51xflYo75Flw0KnNCmTu4N9LvxzJ3bIbilH%2FJa%2BWe1c0MDesHEiXLtSqBgWzdER4iBo1Nm1wmJJyc%2B02IDQyL3u%2FD75CQ4wxaZ87i%2Fe4YXFxvkMe3%2F34SVZD0j1SbmiZOZlYaz3Tl%2F1FV79dHfPmuhD%2FJzZDZD6Yg4LM2HhYqKpAu%2Ffw1JmMjNfR2d%2BNpSRZqSMPsfvfFubFLfeJ1cHsNbsMmdDac7YER4MAS6m%2Fg2sIU4ei3a2F%2F3O5EptvxAtKuTCAUlTlkgNxoHte6c1pv0H7fKXPhJALRVtXS9T4VMdICAxcMwa5yxZGJCTRV0FHI5Lwz%2Bvf%2FGbyxiwtqzdiQXdWtT8D1PwYxAf%2BPk33NA3UN%2Fjxo872FMpVW%2B28UXJZbQwvdGPxAY6pgEPJtsSzQD%2BoXCQiNANEqKtNcfZVMSXrcSYcXlQdgwZ9nRBMo5Ri3jl%2F0Hl2pZvqIXR%2BtMftAZMMg%2FX2pQFnDtbA0ZFx7LK%2BjQWqw5bd1I1yFirXCAQEzIO2D%2BK5H%2BYL3e5frD70RKzo%2F35%2FZYgv0%2FDet5q4HoReUtS42LVdKZUs4o8D%2B3seMABWved6eNDD9XZR%2FN9uHWIrXXA1CF3xHzSGLkaD5dx&X-Amz-Signature=0cc5f353197bfc75e668d9cdef9f52913ba2520e1f2f61ec847d9805f35c677d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB4IJJZU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCfj1Aal%2Bb6ejSA3LC1BiPuHhhk2%2B5hSWghQpIhVsiTngIhANZEUVXTUYGyY%2BG5JVj6wMvt0zf5gkxyunPUrk9JjEH2Kv8DCE0QABoMNjM3NDIzMTgzODA1IgyHbMLX3Bw3%2F2wFMQUq3APD34O0WxrdbnInZbKFzqkF3PB9Ty3vdkKWrh56uepBOXYNVENCAq9rIzV1R9avZIz0NU96CpX95921Acf%2FWXtnD41aIbbVnPGEcFAbEI%2Bi%2B5lZAkXQkWSEGhEVPO9k%2BGKefDECfQpBP8Z%2BW%2FtepM7cobIOU3NKzg2uPnWjuPjtr0v27NRz8Wenm%2F%2BMujhyy0HFeNQHPwq%2FSl59uqVHTj4UbwA%2BoihD%2Bvy8RhnI9mRtQccBkhUNDUK1xuxwhfm8mUKp1r7R2IIlKpyrvktP05KTyqanGjeqwj0B7YVFB%2FwTgzUuioYq5uzp2QrOEIOz77vBDOn%2Bm9Vq6l9t5yAYe4RGD5Md9509wFMWSH90PtctiRqIUBaum8bjqp1l9LEhS9ONBlIQQtKO94wsNIayRVy95W5dq6SGNp3LGlkwXfeLZDB9eyEdUs4%2BXsZsldyO%2BSju9ZlI7Q8W%2FTgs73zclZJQneh90ZMPdYltJBLYBQfV9bCMTUf5kXV3tOpqnXuL5mwHcJrC2m3mzbus4pQN2SOS8hRx5OSw1lq7mdIBz33%2BEbZC3i0bIPwc5zP4zl9eBI5MQOVw%2BTQk2ocqwO6mX%2FlplhdOpxaXDm6THJD2dOiSuXtyU5YxZ6o%2BTkwluDCD0Y%2FEBjqkAVe7rvcIDyMaf3cfG%2BNIhO%2BO5ha4jpTdvLsGz87GD%2BXKKnf96y5afHz1iFLiamQDRsb%2F3HgnbYYo14ro1aYjEpKHrxw5qRLc2xvjjj9LSJtos0Ho7UdIBEJoLr1d6TSrgGktSMBHuXMHe%2FiMacyPis47xdewcSkXsAc2ZEedKZLOdmVL1%2F4e1dSTDvHJU%2FiQER5%2Bzw%2F54u884a5U26qZ6EL4agsq&X-Amz-Signature=8e304af2051582510c04ab49b37fc0f63bd2c79e9798b008f94d0dec08cd1a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
