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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X344A767%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIE8iU9sNzKunH%2Bt%2B5QEsSYxxINRkNZQDdgXcUveS8J9qAiBNYNuP%2Bo49uh0FuNS6EfrHCV1hQ%2FI1iTUg7EtNnK7W9yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM2kVADFI6icFmsY21KtwD0Y%2FlZkqtnU%2FTNSzA4bb%2BmFUoOQoLSTfiCaxeSBKB9vURdJsPmzGgnDMcrJpfCGawb%2FacT4M0FBnZb0jrCHRD8mTqVMAo17eB2JbrC0ETRxoaQpzfIBUF%2BqvRAYmfG3OqXDou2EG47It3FOzwWgt08FxFn1FCWH3uwQyvu6Xvuz0cVGtd6%2FtPO1CNnTAGoIlTDwKfsE8DKKf9y8QEws4Z5uqhIxp7gWPd5y05za%2BSVooYyT0FEU8Rg5fpkvE68nIXItx3e%2FZgkAK7TaeFRlumgAilMyXcgqfHDwl10dAAFhbUZpe9PshtPTl1YUVMHPkEBmnzcBsJhQczGUu3xuA5sXFs4YHJzvzhg4nnLtl3Bo2L8fC1P9RfgN3J%2Fr5hnMoW4tJr7y2HzufGvPdkwMIOYWO4EPVL8w8xhKHgSHtBuaTCt2tKYJc9moXZvkYKZKoePCV36IJ9VX%2FT6q%2FZx7Z%2BeDezFs3ll05CqeA39Cc%2BXWMS83Rpln7hesWzOWogKYoChq2hz77%2B5L20WupvmskkQkR8ZtueeQf%2BWkFxw22mrNw0td0eqrckB8K5lAeBuCXI7jcx2cVhEv1kWSPhDTBXMphaz1f9RcqI0pjs%2B63ov8e94uBGalS5gLmTFTcw%2FOq8vQY6pgEtihiKB3hPUyFoeD7Coxn%2FafV%2Bb3vlHVZEbTStnNv5DFdu76gs1PeLHQxLeecsRv4MdzPhiehvuCt76dtNFz3hfsqzpRIvaMsMJBPYhRRZMrWOp0IQtfCd%2BPTSVLK4KJBo6xN73FPeQVgoxU%2FMCrg9IOURVw6Me9qzE6mSMsk4%2FPqATAZfXfSWA5I1Klk9omYNQf0P8MDQc%2F3MbKvNIqCt9UR%2F6agZ&X-Amz-Signature=c410ef025a51378d1dc6378c5e00ab66106e73e4db4533d526922deee4e920b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X344A767%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIE8iU9sNzKunH%2Bt%2B5QEsSYxxINRkNZQDdgXcUveS8J9qAiBNYNuP%2Bo49uh0FuNS6EfrHCV1hQ%2FI1iTUg7EtNnK7W9yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM2kVADFI6icFmsY21KtwD0Y%2FlZkqtnU%2FTNSzA4bb%2BmFUoOQoLSTfiCaxeSBKB9vURdJsPmzGgnDMcrJpfCGawb%2FacT4M0FBnZb0jrCHRD8mTqVMAo17eB2JbrC0ETRxoaQpzfIBUF%2BqvRAYmfG3OqXDou2EG47It3FOzwWgt08FxFn1FCWH3uwQyvu6Xvuz0cVGtd6%2FtPO1CNnTAGoIlTDwKfsE8DKKf9y8QEws4Z5uqhIxp7gWPd5y05za%2BSVooYyT0FEU8Rg5fpkvE68nIXItx3e%2FZgkAK7TaeFRlumgAilMyXcgqfHDwl10dAAFhbUZpe9PshtPTl1YUVMHPkEBmnzcBsJhQczGUu3xuA5sXFs4YHJzvzhg4nnLtl3Bo2L8fC1P9RfgN3J%2Fr5hnMoW4tJr7y2HzufGvPdkwMIOYWO4EPVL8w8xhKHgSHtBuaTCt2tKYJc9moXZvkYKZKoePCV36IJ9VX%2FT6q%2FZx7Z%2BeDezFs3ll05CqeA39Cc%2BXWMS83Rpln7hesWzOWogKYoChq2hz77%2B5L20WupvmskkQkR8ZtueeQf%2BWkFxw22mrNw0td0eqrckB8K5lAeBuCXI7jcx2cVhEv1kWSPhDTBXMphaz1f9RcqI0pjs%2B63ov8e94uBGalS5gLmTFTcw%2FOq8vQY6pgEtihiKB3hPUyFoeD7Coxn%2FafV%2Bb3vlHVZEbTStnNv5DFdu76gs1PeLHQxLeecsRv4MdzPhiehvuCt76dtNFz3hfsqzpRIvaMsMJBPYhRRZMrWOp0IQtfCd%2BPTSVLK4KJBo6xN73FPeQVgoxU%2FMCrg9IOURVw6Me9qzE6mSMsk4%2FPqATAZfXfSWA5I1Klk9omYNQf0P8MDQc%2F3MbKvNIqCt9UR%2F6agZ&X-Amz-Signature=7b6d1fc61ee8c29fdb12ab033de1aa98a11df2fc06a638b9bc3d58b696dcbb44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFZP5OG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCfLapssp0yHk%2FFufq0f9kKY49KigLqYP1D75ScYrgMxgIhAMHfyQIbqQz%2FWdYdrpywJHu0tQ2qiXipLEXpUIQqaoJtKv8DCC0QABoMNjM3NDIzMTgzODA1Igyapoi5Ytel%2FL1FQGYq3AMjmcLTK3HoCdl2Rs2wXNJri6h4Fed30CcJhEABb%2Bq62HXUFR4pYRjxMzEZsO6nyUEMk8ZlMuAxBesiuwrcb84vNx%2BbiJ7u8WacnRfwvrd5UIv4Uy3vI5jOPRc7Mxwt1Gw98h3t3trEISaL3MD2A%2FTixGeoe6YRfSiTJV%2FDYshA1nfPE3zLwhu2hXYhCPnCCXa2QxmXK3XxRBuxoNNwz4zC6UqK5sSGORUYDZAz1uMeFq5dz9Jetng%2FZ7WVHd4AD7H0%2BpKF9FGnL2wW8l%2FEnnOqJT5GPsNo3sypGv2t7do%2F27Gup76Zdz6omQte9WLWXQkGcZSwhb%2FqXaxCzTrU4sEss1NZ50mHlZ%2BiA8XagCyuEg47iB1V0ayGfLGDBdbJ3c5x9US7X%2FnT5L0ST75e3QrXEWM86Qqz60YZesxwz%2BNi0b4VQT%2FTsPQwVt%2F0ndPnxhkSwvrOTQHIDDOAXxAdRErbKSzhpYimS3qvS2kUcb%2BsRzgTcyJgvPCO0GLYnPtgiS8MgjSwMqX%2BQopY1%2BNbY4cFetBpi4TmBZ8gKBfnffW3dr3NkDPq%2BzZHCery15dG6LKTcyhlY4z5aMxUAmKfBxavi62G0bFAtcEZNd4uqSZ3BZDQDCbM2J5Hry7mnTCI67y9BjqkAcxa13XeLSFe%2BSKSeXiQfdsZs3V0FFX7hcQsdMcv0wO46vT6rJByovMhopHmVlqiqCFD4ah9m3jZdOy6WmDulfTM3kES9KbiCL%2FDaak23E3uTNYbtWmO538vnDNLIwTRDyQLuS%2F3y1dXuKIMiUxRwDK7vL91I7hIvp6%2F5ESf3%2Fm%2FyKpoVOVEQFpLJQ713pNIiNEQuz3%2BUB%2BVT3%2F%2FUFtpu4djZ2Y%2F&X-Amz-Signature=9b1d33cc3f970acdf30440612a8e6cd6a9ff4d3bc4cf7b8f32d3152773f09025&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7AILWC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCuHzISLTdGDCdhAA4fViYF8x8tXkkRbmVpATUODNm0GAIhAJ3pdmxmst25ROAxmn8KJtggQM12XYNB%2FqHwxb7V0BGhKv8DCC0QABoMNjM3NDIzMTgzODA1IgzgqG8bsx42BjybP%2Boq3AMEr2y2GAlYJiMEPeTKJUiCprUkhe%2B7kqWiw8Qai3prFL8%2FXGrX4x8qbrjJsQOQ43HX6HR1QmvMzbBib2JatKd3dRDIAMPxYREEMNBRuxrnnOAEkc7RyzQrBsN4IXy4KyZvVmMrNeIl7HkmjRtwjv2ETmLLMThsjE1SPpJv4p5%2FhmNXnV0goeKE314%2BjfT%2BSRe4Wbjfa06bdINKzEwpZVdfEAwNXZPkwTEQZDTWUdEMldqw5HEzEC5eoqy9YCxw8RyX65lSD7NBO4cVJ66n4GyGA2TlMZ5ejiR1UHfm%2FkYENPKpHsJhPE0fevvv7LsV2MLXIHeHcGiVpOZjBbSN9F4ClEryZI4JUw%2BvrXJzKlfFdYrC4wTQ%2FCgH71W1%2BMxBCjljHPDHDpxkLZn%2BuenDHlk%2BaBgtdnci50V4ocogKGMNqhT1%2FIh5HGbQHesQYtb7TDkreQpvqPi2L1B1kbYtIK%2BggNGeSDHQtaR7TAJs1uzdX6pFay%2BP9lAJsjhBZDa3qnRKmQzXBpm4B2E5O6p%2BPTvh0Ys5jy64yCK9zhnIPSJZjEq3c0PpeIiBPTwAG%2B6TEWdfUuVUdN6iq5LrdPAW699l9R4iy5HO2sCvoPd1eifWSjcgJJ235aZhhJWhojDp6ry9BjqkAWCoo%2FJnwG7TLAWXGsnVEaoX7%2Ftat%2BMiHeFrqasAl%2BtliR0D9%2FVUGmiUXhj050hBz5NgBHZcUDFt%2FPgQjL%2BllXlT2IXJg%2FUfiujpPh0Lh6yBuIuCPBATZjy%2FB%2FCOQAzdgenwo1vTMW%2FKP0asXglvUDEvGXx%2BxWzr60M0fiVs1ZOhwnvWOUfewQu%2FALW%2FU16YFdKvGWhkPaLLMxOwPp8T2jO2VPEw&X-Amz-Signature=875636a4e48f76820654f0dd8f0e6c73448012a4de02fc24cd098808ae806804&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X344A767%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIE8iU9sNzKunH%2Bt%2B5QEsSYxxINRkNZQDdgXcUveS8J9qAiBNYNuP%2Bo49uh0FuNS6EfrHCV1hQ%2FI1iTUg7EtNnK7W9yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM2kVADFI6icFmsY21KtwD0Y%2FlZkqtnU%2FTNSzA4bb%2BmFUoOQoLSTfiCaxeSBKB9vURdJsPmzGgnDMcrJpfCGawb%2FacT4M0FBnZb0jrCHRD8mTqVMAo17eB2JbrC0ETRxoaQpzfIBUF%2BqvRAYmfG3OqXDou2EG47It3FOzwWgt08FxFn1FCWH3uwQyvu6Xvuz0cVGtd6%2FtPO1CNnTAGoIlTDwKfsE8DKKf9y8QEws4Z5uqhIxp7gWPd5y05za%2BSVooYyT0FEU8Rg5fpkvE68nIXItx3e%2FZgkAK7TaeFRlumgAilMyXcgqfHDwl10dAAFhbUZpe9PshtPTl1YUVMHPkEBmnzcBsJhQczGUu3xuA5sXFs4YHJzvzhg4nnLtl3Bo2L8fC1P9RfgN3J%2Fr5hnMoW4tJr7y2HzufGvPdkwMIOYWO4EPVL8w8xhKHgSHtBuaTCt2tKYJc9moXZvkYKZKoePCV36IJ9VX%2FT6q%2FZx7Z%2BeDezFs3ll05CqeA39Cc%2BXWMS83Rpln7hesWzOWogKYoChq2hz77%2B5L20WupvmskkQkR8ZtueeQf%2BWkFxw22mrNw0td0eqrckB8K5lAeBuCXI7jcx2cVhEv1kWSPhDTBXMphaz1f9RcqI0pjs%2B63ov8e94uBGalS5gLmTFTcw%2FOq8vQY6pgEtihiKB3hPUyFoeD7Coxn%2FafV%2Bb3vlHVZEbTStnNv5DFdu76gs1PeLHQxLeecsRv4MdzPhiehvuCt76dtNFz3hfsqzpRIvaMsMJBPYhRRZMrWOp0IQtfCd%2BPTSVLK4KJBo6xN73FPeQVgoxU%2FMCrg9IOURVw6Me9qzE6mSMsk4%2FPqATAZfXfSWA5I1Klk9omYNQf0P8MDQc%2F3MbKvNIqCt9UR%2F6agZ&X-Amz-Signature=18755e810d4714b5c97231c2e0a75c647a118445253a75e6771dde451fe94e31&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
