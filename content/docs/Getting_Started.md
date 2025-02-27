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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674KQRHJV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICBHuIPMBQBgdhn2%2BuMZAZNo%2B3p6AL213FEQfQjxPk6fAiEAkSpeB3jN6BVpLCX3%2FxSFHq%2FKqMAvTcue%2By7O3zUDCmoq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDF9X1sQ3B%2BKTOkbjmSrcA0KNE7Z0KSYiL%2BHSw%2FOFod6STFxA5Dv8dZCHvVxEAMvmq4T8uQP98rxgL0Gj64%2BGShFSLgvivFVzw8q0kCwxKgA32zZ7HLO82j63m%2FquWv5xd1EsEIRmryzefqsskigpJSqIqWMoOCV7i33SvVQnkF7x4fmGwsR6vOo%2FpMKEVAAwmas3oGKNNdDyW8GKwgUtDdYpdpAKy6LPG0NIaFb%2BHeQuh0SXX4J4SD7lyIGV9HamamqqOA0UO1rRNXd%2F1%2B2mqxipNRRszfUDnRtAjOXCgz2Ao03w9yi9FuXESzYPJAK4M%2F8B3A3dRtKNYOrnydhAE%2FmEkxoo%2FF%2Be4tyE7Sxt2zI088dgtiJZyWjYVl36V8ovmIXVB4FRGEHjP7%2BENZ380wgN%2FiLhTkuV9I0E57U%2BMubVcRgs27u6CivEl%2B7RYfpfSJzedMPHn5bNx8yDHQEl%2FwD%2B5eQ6Ovw%2FyJb5I82Y1%2BYzD4AKRoHQR2yYe6%2B%2B%2FVT2EDJ3hocDDRsIJqkD3t58Iaf%2B2O6i%2FAKht6D16zrg%2Fk0m1YS6iLfisX8%2FECRW5R9COVj%2BuP0InHuNsJ4pxcqDsH6NTw2HFQzcYHhVavsOv56%2B1mNEZYaj7g8NKDwULydeNT%2B2qJWONV4Fw3v%2FMPzwgr4GOqUBgq7MT9M1%2BsZJR4Gp9FJBtEm2S4QeM2rKUwAFHFi4YQE6%2FasXSNgsO8sAwdojLuSMO7r3H4xstgj9qSSuUVAJBqEOIRju4JDKnI9uDz0KUtuKukuCkqUkQ4ZtQj1qSySVZ44nbbahphOGU7Kw4sUBjRjKXzWasL7%2FW6KvY2cTx4jiKVRv7zpbwzYZjT4ElowCGynrCBAlRzwh4momMHQojKRp7%2BfP&X-Amz-Signature=0b34a638d6fdab7bb03b321424d6a42cd4c2b53cc35bafd92e3d4d60b9e33e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674KQRHJV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICBHuIPMBQBgdhn2%2BuMZAZNo%2B3p6AL213FEQfQjxPk6fAiEAkSpeB3jN6BVpLCX3%2FxSFHq%2FKqMAvTcue%2By7O3zUDCmoq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDF9X1sQ3B%2BKTOkbjmSrcA0KNE7Z0KSYiL%2BHSw%2FOFod6STFxA5Dv8dZCHvVxEAMvmq4T8uQP98rxgL0Gj64%2BGShFSLgvivFVzw8q0kCwxKgA32zZ7HLO82j63m%2FquWv5xd1EsEIRmryzefqsskigpJSqIqWMoOCV7i33SvVQnkF7x4fmGwsR6vOo%2FpMKEVAAwmas3oGKNNdDyW8GKwgUtDdYpdpAKy6LPG0NIaFb%2BHeQuh0SXX4J4SD7lyIGV9HamamqqOA0UO1rRNXd%2F1%2B2mqxipNRRszfUDnRtAjOXCgz2Ao03w9yi9FuXESzYPJAK4M%2F8B3A3dRtKNYOrnydhAE%2FmEkxoo%2FF%2Be4tyE7Sxt2zI088dgtiJZyWjYVl36V8ovmIXVB4FRGEHjP7%2BENZ380wgN%2FiLhTkuV9I0E57U%2BMubVcRgs27u6CivEl%2B7RYfpfSJzedMPHn5bNx8yDHQEl%2FwD%2B5eQ6Ovw%2FyJb5I82Y1%2BYzD4AKRoHQR2yYe6%2B%2B%2FVT2EDJ3hocDDRsIJqkD3t58Iaf%2B2O6i%2FAKht6D16zrg%2Fk0m1YS6iLfisX8%2FECRW5R9COVj%2BuP0InHuNsJ4pxcqDsH6NTw2HFQzcYHhVavsOv56%2B1mNEZYaj7g8NKDwULydeNT%2B2qJWONV4Fw3v%2FMPzwgr4GOqUBgq7MT9M1%2BsZJR4Gp9FJBtEm2S4QeM2rKUwAFHFi4YQE6%2FasXSNgsO8sAwdojLuSMO7r3H4xstgj9qSSuUVAJBqEOIRju4JDKnI9uDz0KUtuKukuCkqUkQ4ZtQj1qSySVZ44nbbahphOGU7Kw4sUBjRjKXzWasL7%2FW6KvY2cTx4jiKVRv7zpbwzYZjT4ElowCGynrCBAlRzwh4momMHQojKRp7%2BfP&X-Amz-Signature=6d578c2e1210016c35b9e0d0a7fd4d70b34cbfb944eb9835d089be468cd9e6df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVFXYMSE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIA9MXsA3JVFZBKxPE2ZRJuT6htFana32puiDgCCkRcSfAiEAgoyq%2BtMzm2N0cCFMaG98%2F8IgMn1e1uLHjnHGyDBkaCUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNGtTkGj8CTF8MlVvyrcA71CLLYiDBdxxqPurKobD8mMsKUdCDFd7k%2FPXDVyaNIu3FG9%2BB67W%2FEkz33bO9tHxJBobQscVKxcwwMpAWVN%2FyU%2BjmzUWOXpVI86DIy%2BA7hUbs4C7Yjr8Bi9TtNryXUQOPz01m2Kw6epjIMBsnrUvRm9kL6evaUmBKIdm4L%2F3vZBxjVIp1m6h6z%2FCadyenrj21NrqXHr42UXijNVKZkYiprRPOvGxteVzhrpcsML4%2FdKnqsc32nCokzFACROnzFlNkJNm9czXgf%2BzjTJvx1mTQ3H6paFHFOJ7U9SCvZUuxAol0m6gMWPWkuoj34MGpnv1ha8%2FoT2b7WxMWp3w61XNS6ZaNP4OY0e4SqJ46NjPHO%2BxQu9dtsnvLZhOSVxs%2BcbAt6MEd8viAAu1NTpyBjf7RIctQ7FUCOVjuJAQruriZKb%2FoQl8nAXd8noMUxQ549unj6S9gRqKNeic49UabhQBdyvwHlqCJxnFR0kaHJg%2BDxFhYF68aL%2BSjTaPn40Q8PggXrBhXtgO1%2BjT10vLioQzxCLOLLgqsZDEp9%2Fucwav8oLt8g6A1TXqZkCqbLcY61BTU8LdWWqkhkplvVeNb7ePpL6uavY6BfHvdasphaoKgzNLMGqh%2B6cNOws2zf4MJzxgr4GOqUBkvHKBWX7hysij0W6wrBP%2Faf1I2Ekhmgnmifw9hZCxBs%2FpUfvnKn10LTuUvH3sAhkRu9IpMJGtiz3heqkFIrriH0k7%2BjEnLVCyyLmEKOwAt6aL10%2Fp3XNMDQeFD4HKhZx%2FpkgkOuykLNNmgJRQRd%2Br%2Bk6dzupLDN%2By2JV53Fiez5SZpWNvWcwyVwFxYfXm0IVLjImu5A6hii8BMQobRwoe85iRz8Y&X-Amz-Signature=971e4985eceab3dc19c90b28ae4e37cc02970fa8da1682a63fca0c9d6c12d579&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG45UWFI%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDde4LKD2b9LLMR0eCLNyaaCexUMBRPs8ZyO%2FYQyooSdAiEA2ha4wUfURzAtL2Z7utlufltDg4v41vM5jufQusOGi5Iq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGKmweuI%2BkDEJCvqZSrcA0Dc2Z4uRCsCYpmHWww2VCC%2FwpAiO7b2tb%2F86IYOYwJpsf7YiaStxUCUFbzBlAPCV%2FiGUao2FLojRaRKB1oT83yd46PesZ1dIIkjIRb8uk46EnIsAh%2B%2FfoxZtMhXsab%2F2V0Jotsbj5FT3jvHL%2Fg4X%2F4HusqsqZh4k%2FEvScygKBKYDn38i2Fb3RJENS0BbRLBJuVPkaip8PGuedjjsGShUQKhn0Vc4%2BuMcyF90KZ9LEIjALt%2BKoCvn2dUqJcI2TjiGt5seoFLrlmvek0bPFhWJ9rVj9Ax%2FOcJ4XP%2FQS3lXLttzp645m3a%2FKRYS9FfPImNcvoX8%2FaCKjfeTq6gpLzaoiMT7OkrKlBoujIm0uzEBNVuqxCQQQN4khebxRMlk4wenSgI2kn9dYlqRkWYEgZ1T0p57qfRX0QJC35mWWICkVENk%2FqIp9Cfs7nb9g54zqiXz9Jr9izCuj5okYLh9xagNAY1Bdcrc29ee%2FkICg3mqunci0tucj1mOX5AEIi%2BxcQ8fkWm65hR7T%2BtRyjC7q9e7hGcmslqVSQwAE1VES757UpGZJ7dCdf0o7DUAN7y6jb11yoRDKFkqpXtQTpaTrvCvmJdFUy2vA8%2FTr9ZbsRFAznF18H4vUi9RW6QgcqyMPbwgr4GOqUBJSfJptAOJL2l%2FvbAOo8bQr2qNEavZsEFyqD9%2BCeD70qfCSkfSj7WffkerWPeEUNYr8OoAZV%2Fq0AGKDBYv28ztUwwx6Q8jHwsRhylsNAXFHE6qIqErQ6miRde0ViKzMS209wxkenDVUqSWqIh8GkIvMrQNLUkWBzb0a1SmvdZaiy1kHKQYD1mcDfJCL47ZRr6n9saoA9qbpCleK%2F7fzGebqrDAGQN&X-Amz-Signature=48967ad97a80e54892d687d8c850f2bab503aac39f05897bbdb780379ff07ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674KQRHJV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICBHuIPMBQBgdhn2%2BuMZAZNo%2B3p6AL213FEQfQjxPk6fAiEAkSpeB3jN6BVpLCX3%2FxSFHq%2FKqMAvTcue%2By7O3zUDCmoq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDF9X1sQ3B%2BKTOkbjmSrcA0KNE7Z0KSYiL%2BHSw%2FOFod6STFxA5Dv8dZCHvVxEAMvmq4T8uQP98rxgL0Gj64%2BGShFSLgvivFVzw8q0kCwxKgA32zZ7HLO82j63m%2FquWv5xd1EsEIRmryzefqsskigpJSqIqWMoOCV7i33SvVQnkF7x4fmGwsR6vOo%2FpMKEVAAwmas3oGKNNdDyW8GKwgUtDdYpdpAKy6LPG0NIaFb%2BHeQuh0SXX4J4SD7lyIGV9HamamqqOA0UO1rRNXd%2F1%2B2mqxipNRRszfUDnRtAjOXCgz2Ao03w9yi9FuXESzYPJAK4M%2F8B3A3dRtKNYOrnydhAE%2FmEkxoo%2FF%2Be4tyE7Sxt2zI088dgtiJZyWjYVl36V8ovmIXVB4FRGEHjP7%2BENZ380wgN%2FiLhTkuV9I0E57U%2BMubVcRgs27u6CivEl%2B7RYfpfSJzedMPHn5bNx8yDHQEl%2FwD%2B5eQ6Ovw%2FyJb5I82Y1%2BYzD4AKRoHQR2yYe6%2B%2B%2FVT2EDJ3hocDDRsIJqkD3t58Iaf%2B2O6i%2FAKht6D16zrg%2Fk0m1YS6iLfisX8%2FECRW5R9COVj%2BuP0InHuNsJ4pxcqDsH6NTw2HFQzcYHhVavsOv56%2B1mNEZYaj7g8NKDwULydeNT%2B2qJWONV4Fw3v%2FMPzwgr4GOqUBgq7MT9M1%2BsZJR4Gp9FJBtEm2S4QeM2rKUwAFHFi4YQE6%2FasXSNgsO8sAwdojLuSMO7r3H4xstgj9qSSuUVAJBqEOIRju4JDKnI9uDz0KUtuKukuCkqUkQ4ZtQj1qSySVZ44nbbahphOGU7Kw4sUBjRjKXzWasL7%2FW6KvY2cTx4jiKVRv7zpbwzYZjT4ElowCGynrCBAlRzwh4momMHQojKRp7%2BfP&X-Amz-Signature=bc37cadd656865bebbaec1886baf33517d566a5d6985b2461ad2493b7c4c8723&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
