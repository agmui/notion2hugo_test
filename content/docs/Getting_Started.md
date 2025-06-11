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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6MTNZO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfGV1WzP5vyNm8hfmno5EjCe5mAAj6qdyin%2FFJkBsXaAiEAj3aSiWyvT3hsl3rQQCILfrQouaYJGRPXxAJuntqA0E0qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFUTqROJpqGda9HhyrcA2sK8EmxBpG0MdsBLTsbVsxSdvjyFp5jW7NsdIY%2FTsZNYZsSL%2Fb2Fs7cF3%2BcRArwldAixQeA3uhBFMe89LGiXOtvwZBleYPaWwSS1QxHKu6g%2BzDm06gtTykbRqU%2BJd2qCadfkaVinEkUaAGUDfBaWY4kdkGkJLD6vU8ZV5xy1CnaF%2Bgk3rnWXka7Qat5lNO9NHMJ0uiwQGOKxUi%2BqDceJeXaRvQdHe6NE8PHOBzgh2KO7oSIVB8NVTD1vEJBLIpqG64q%2FmTDpPXcGH1Ic0RxnLL3rdC9mbPQaq4AgoYdmA5cr2L5WlAqCagSFgdGaIXQIQhWR9Oh69uf6q%2FNpJw3Ig3t2jELvarXNjp76Xze00lD8Cyls5AxK8XznAwODGQQ6qnvwLYIeM5WN4Wv42vfi0Ipk49H5BcEABC2wqzQyKCe6a3Q2n%2BHu96gcg%2FnfRO4xzeUtqj8asnkiXSDwN9Z7bf6TbiIXZELi3fJCo82J1Qsime6Tb8fx5sMcyoj0ZrgloCusS%2BGBMKRuQVgh5bCYRW4NncC9poFA9eUt%2F9gMCojN5Mrny7Kys7sPuqQoHty7z9J88NTtGO9FtUratLyc6fZTshwNcFf%2FtL4LAPfovL08WsGCjPVDPxhv1p2MOLJpMIGOqUBxs5ZVyMOqGAKGqQD6E4%2F8f%2FKj6dmUDNAVPgGzuP7CWbVOJKnohlmZI6L7XxXTFkPbzIJ%2FB5CYlzw7hiMeFC0NyEM5obJNde5OUCA6HJ6g8n90ANfzrYpzoH2D6LCriIQpfY%2B2mHj9ljiQro8%2F%2FmzKIttdHI1Nnan6gxBJ7KvjsdOyqfUqO3wJF1tDDIW5p%2B4xcbg8XJPX9GQ3%2B9VbADOFpJoMUmo&X-Amz-Signature=8d04a2b279f448b1f9e7fb8a3f84ba41a8ad950d26052f49e95872c52746a676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6MTNZO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfGV1WzP5vyNm8hfmno5EjCe5mAAj6qdyin%2FFJkBsXaAiEAj3aSiWyvT3hsl3rQQCILfrQouaYJGRPXxAJuntqA0E0qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFUTqROJpqGda9HhyrcA2sK8EmxBpG0MdsBLTsbVsxSdvjyFp5jW7NsdIY%2FTsZNYZsSL%2Fb2Fs7cF3%2BcRArwldAixQeA3uhBFMe89LGiXOtvwZBleYPaWwSS1QxHKu6g%2BzDm06gtTykbRqU%2BJd2qCadfkaVinEkUaAGUDfBaWY4kdkGkJLD6vU8ZV5xy1CnaF%2Bgk3rnWXka7Qat5lNO9NHMJ0uiwQGOKxUi%2BqDceJeXaRvQdHe6NE8PHOBzgh2KO7oSIVB8NVTD1vEJBLIpqG64q%2FmTDpPXcGH1Ic0RxnLL3rdC9mbPQaq4AgoYdmA5cr2L5WlAqCagSFgdGaIXQIQhWR9Oh69uf6q%2FNpJw3Ig3t2jELvarXNjp76Xze00lD8Cyls5AxK8XznAwODGQQ6qnvwLYIeM5WN4Wv42vfi0Ipk49H5BcEABC2wqzQyKCe6a3Q2n%2BHu96gcg%2FnfRO4xzeUtqj8asnkiXSDwN9Z7bf6TbiIXZELi3fJCo82J1Qsime6Tb8fx5sMcyoj0ZrgloCusS%2BGBMKRuQVgh5bCYRW4NncC9poFA9eUt%2F9gMCojN5Mrny7Kys7sPuqQoHty7z9J88NTtGO9FtUratLyc6fZTshwNcFf%2FtL4LAPfovL08WsGCjPVDPxhv1p2MOLJpMIGOqUBxs5ZVyMOqGAKGqQD6E4%2F8f%2FKj6dmUDNAVPgGzuP7CWbVOJKnohlmZI6L7XxXTFkPbzIJ%2FB5CYlzw7hiMeFC0NyEM5obJNde5OUCA6HJ6g8n90ANfzrYpzoH2D6LCriIQpfY%2B2mHj9ljiQro8%2F%2FmzKIttdHI1Nnan6gxBJ7KvjsdOyqfUqO3wJF1tDDIW5p%2B4xcbg8XJPX9GQ3%2B9VbADOFpJoMUmo&X-Amz-Signature=4944dcb68b89d3d7794ecb724a38c2bfee5b70c6214030e24bfac9d99ceec585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6MTNZO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfGV1WzP5vyNm8hfmno5EjCe5mAAj6qdyin%2FFJkBsXaAiEAj3aSiWyvT3hsl3rQQCILfrQouaYJGRPXxAJuntqA0E0qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFUTqROJpqGda9HhyrcA2sK8EmxBpG0MdsBLTsbVsxSdvjyFp5jW7NsdIY%2FTsZNYZsSL%2Fb2Fs7cF3%2BcRArwldAixQeA3uhBFMe89LGiXOtvwZBleYPaWwSS1QxHKu6g%2BzDm06gtTykbRqU%2BJd2qCadfkaVinEkUaAGUDfBaWY4kdkGkJLD6vU8ZV5xy1CnaF%2Bgk3rnWXka7Qat5lNO9NHMJ0uiwQGOKxUi%2BqDceJeXaRvQdHe6NE8PHOBzgh2KO7oSIVB8NVTD1vEJBLIpqG64q%2FmTDpPXcGH1Ic0RxnLL3rdC9mbPQaq4AgoYdmA5cr2L5WlAqCagSFgdGaIXQIQhWR9Oh69uf6q%2FNpJw3Ig3t2jELvarXNjp76Xze00lD8Cyls5AxK8XznAwODGQQ6qnvwLYIeM5WN4Wv42vfi0Ipk49H5BcEABC2wqzQyKCe6a3Q2n%2BHu96gcg%2FnfRO4xzeUtqj8asnkiXSDwN9Z7bf6TbiIXZELi3fJCo82J1Qsime6Tb8fx5sMcyoj0ZrgloCusS%2BGBMKRuQVgh5bCYRW4NncC9poFA9eUt%2F9gMCojN5Mrny7Kys7sPuqQoHty7z9J88NTtGO9FtUratLyc6fZTshwNcFf%2FtL4LAPfovL08WsGCjPVDPxhv1p2MOLJpMIGOqUBxs5ZVyMOqGAKGqQD6E4%2F8f%2FKj6dmUDNAVPgGzuP7CWbVOJKnohlmZI6L7XxXTFkPbzIJ%2FB5CYlzw7hiMeFC0NyEM5obJNde5OUCA6HJ6g8n90ANfzrYpzoH2D6LCriIQpfY%2B2mHj9ljiQro8%2F%2FmzKIttdHI1Nnan6gxBJ7KvjsdOyqfUqO3wJF1tDDIW5p%2B4xcbg8XJPX9GQ3%2B9VbADOFpJoMUmo&X-Amz-Signature=c37aebd3d275cab96dc1d96165e62f35e857df8ba9b72743098def4c4050ce26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466475BAT5V%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEVGPGUrWJ01%2B85NlL%2F7uQ66JewWEZpL2AKfcaRgAP%2FAiBnXPJ%2B7tmdgewcXKp9K2B18kQMAZy%2FQ86g2Z3nKtA%2BiCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMTu%2FPAi%2BC6xY1z02KtwDSIz%2BQcBoqxvTyJ3%2BMXeu1Ixv2AkquwadnyrRmY3Awm%2F%2B2pTH6vRwDooEmN1Rtd5AdIk59VLAkVA0aQ3bVqKE1fS9goERvUueepIR3iUi0gaWNPbpE%2FaJcOGjc%2Fr%2BfHGyXbi6JvGWqpg2YITpjl%2BQ4tKBSS2GGe7ssQVg%2Bct4f1BzKrueZ12CKnTZrgBUf%2Fx2IsvpEVZRtnU%2BT4qsEKNheuF%2BUfdAdqO1be15ocz8sUW%2FWVWLOxdyaQe34rPbHTwN88zqzznNWdMGmaa0YdbM36vKzJrEQS47i0qre6u4bu8bi8wLyA2Ro4LwiS4sdpgoSFwGIleopY%2FbAa6sF9O0ncGQ7oSTBbITHtJogIcOp%2BPUpkoZFmpdPMUZn2jMGLBxOAIbI757ZGKQbibKfYmodUpX8PgNsXtZFzXjUrQySl88r4f7WWeLR%2FLzTx1IvTLCVVzhA%2FvS7whLtMC0pn5zPMaWMbL8sjH64FUaYmsZkwX5219XrFy%2FyEtaOdV%2F1yuU9XsNhAd%2FGlFNy8eNN0RvPxs%2F5Y4DxrjPGIzCXm4o%2Fxyz4QdfIGzObTI22vQLAuwBxL5G9%2FQFTwnZGMKV%2F25M4l4xpqPHerUEp%2Fdu4peaJbizO2kViAL6rLu%2FdBswqMmkwgY6pgGZyycyfGkqdRLNNcXVtsuT6zwcfFU6bily0vV%2F49B3jru0U7G8ND98H7LkgR06MNu%2BEjRPYIA4ugPYGMPWUs7YuhuTO1Zpx3ZdRK0VQksL7ROKOLCiBHPPDH5uqW9OhHAeeIDSeHA273wgCmC3iuTI%2Bbn0vCMRAGheaWEa2juPWHP%2Bu%2F1VjCqGP2ecc2rQxWkF81eqbgq2O4vGLUy37cOplv%2BbJ88D&X-Amz-Signature=dea65306be9522777d54fc2474478fbc78e739a111641a877a533258c21a473a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652BRFD2I%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1BaTavG9pu6phCMyLAUYgpKpTtY9mSUCa0jv%2BPVK6vAIgT%2B7KFjFo%2BaSb4FVmIoXsBCTCBO6iSotZzFsRq2ucns4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTAyVAnS0RpqxTK0CrcA0NXjhDnnuhrlYcs14YQq5fUxVyAZeJUVfmSWwHO8hyiXQ0S6CHIDKZlNTtdMJx782%2FAxg8Oq51Zi619w02h0UGpfgmPpl4JkLMJcjzRgZVhs42NVpdJsh0DEd3j2uVkAmS%2Bsk5Qi6BKC1liTrxWu9nIV5vFXZuDvXb%2FhydZ9Qtumu13lPkh2eJ6p9V0GUNeb625b2cDr3rS8Ej4R%2Fn8SlFLfl6uPwygjJtnd%2FzTsk0PkzT0AfcIJDWN6dgkglxt33K%2B9If9kZAt7y8Snwh9pNylO5MpG6T8sJ84dQROPNG4%2FBbIYlwd09jRhjutJkYROmhpkRPjTlBbDehV3%2BYzETLImtbatS1Xk%2FLWatB%2FDZ6WU3pbdXuzY62LXRKZd9%2FTxzS8dXB6gj73F6%2BE%2Bmllfd0h1lXW9WjWRr%2BAvk20GC6hpAib%2F27ZR%2B2eRS6eROF0hMUr8n5W8au3x%2BaYYRtQPbXO4eAWNDOy6eYZJ3gvRC9rckmEbBwEXoy9IQX4Tr7Cur5JZGeTWHGgYUMyJD8R1jYgTWdfXc2nNNzAAZEwHpBT6u3wROq3QYbTYTXRXM0EqPK2MsoPBUBLDqCmJFsYxH%2BInzMYGvZMMLdTwGvrq2VqLYFXmV7OL7i8CGPmMKfGpMIGOqUBjcA3JiaDJb2YBC0yZSwKEbH0SQXd6fzWzxQp48NByOYPI%2FKHS2tvP%2BnK6qFh%2FjZ5%2FoI3qYVQWXhcXpi0%2FYzuP4WT1YBAmPTGCNWI5bEL%2FNIAdx9Nydbyt5R7dfNqgL0W0HByT5nkEjNontL1KtW90E%2BZi5omth%2FJB1YO0DezBKgNLVDds5WszgRkG6RTGVrqL2gU0sSLLpVESH%2B6N%2BifIn6gE2q9&X-Amz-Signature=37bde5ecdbb62d5bbb60b15e33602f3ddd346a3c4f980422bb13562dd2f88a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6MTNZO%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfGV1WzP5vyNm8hfmno5EjCe5mAAj6qdyin%2FFJkBsXaAiEAj3aSiWyvT3hsl3rQQCILfrQouaYJGRPXxAJuntqA0E0qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFUTqROJpqGda9HhyrcA2sK8EmxBpG0MdsBLTsbVsxSdvjyFp5jW7NsdIY%2FTsZNYZsSL%2Fb2Fs7cF3%2BcRArwldAixQeA3uhBFMe89LGiXOtvwZBleYPaWwSS1QxHKu6g%2BzDm06gtTykbRqU%2BJd2qCadfkaVinEkUaAGUDfBaWY4kdkGkJLD6vU8ZV5xy1CnaF%2Bgk3rnWXka7Qat5lNO9NHMJ0uiwQGOKxUi%2BqDceJeXaRvQdHe6NE8PHOBzgh2KO7oSIVB8NVTD1vEJBLIpqG64q%2FmTDpPXcGH1Ic0RxnLL3rdC9mbPQaq4AgoYdmA5cr2L5WlAqCagSFgdGaIXQIQhWR9Oh69uf6q%2FNpJw3Ig3t2jELvarXNjp76Xze00lD8Cyls5AxK8XznAwODGQQ6qnvwLYIeM5WN4Wv42vfi0Ipk49H5BcEABC2wqzQyKCe6a3Q2n%2BHu96gcg%2FnfRO4xzeUtqj8asnkiXSDwN9Z7bf6TbiIXZELi3fJCo82J1Qsime6Tb8fx5sMcyoj0ZrgloCusS%2BGBMKRuQVgh5bCYRW4NncC9poFA9eUt%2F9gMCojN5Mrny7Kys7sPuqQoHty7z9J88NTtGO9FtUratLyc6fZTshwNcFf%2FtL4LAPfovL08WsGCjPVDPxhv1p2MOLJpMIGOqUBxs5ZVyMOqGAKGqQD6E4%2F8f%2FKj6dmUDNAVPgGzuP7CWbVOJKnohlmZI6L7XxXTFkPbzIJ%2FB5CYlzw7hiMeFC0NyEM5obJNde5OUCA6HJ6g8n90ANfzrYpzoH2D6LCriIQpfY%2B2mHj9ljiQro8%2F%2FmzKIttdHI1Nnan6gxBJ7KvjsdOyqfUqO3wJF1tDDIW5p%2B4xcbg8XJPX9GQ3%2B9VbADOFpJoMUmo&X-Amz-Signature=bac034130e4ad6490e02a05829eeb06439c97abcd1ab6b99ca65f02d0bb26876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
