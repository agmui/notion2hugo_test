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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2E7EWMW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDM36L5DqlC9wZ5OZb04%2F20vveWQAmJSyt2q9Jr4w%2FRfAiAlvbD%2FrVh05vKnt6%2FitI7Za9Cas9pT%2FTOyzPWFkgscWSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZd8tJsigsWWa6omzKtwDfwnBO%2B7d%2Btb3PrhJLVOCHnQVAymDNFQ75LzM183ax7PL9vXGLFG0bpOTVRZ1ZhkjXJ76tk262OjnE7I9fIx88YyK2A3srYlSXeUy7JzrLdcV94V%2BrRa3s%2Bo3IInTPnC61A%2FwZQfNKNv26gimVLmiZ3VDZ5mBuusKf9z%2BYizHqqbM6ZdaXD7lcUfrih7x0A9daN4vYl%2FxfBDR6cJ36bYFEjgp7HrM1g1O73%2BEti8U%2BTJVqYuqszjwRrmTBD7l645dcFpJPP2onsFnF3mPFoJiF6SWxd7Msy42TxN%2FF4gvbL9FxYkdzbJzuQuRH39pdy6tVYUNaCWKORRVxb9s0pRcqlq3dmDv1MZAy3IbuZYhcUtjhg8%2B6zf1tgq6nd2BwC%2FFOlEj1%2BIwyhWHQkPUz61WRD0P%2FaQLD6ngc%2F2fjX%2FLqRTbT0snzcioppZMMnbE9geec2ST3v15h9lRiWVyGgksJCa9pLNKJ%2Bb3oG%2BoBKG4F82fZ%2BGeJTc0yB5CnA3EfVXreHT1O%2F2G8ixmsvoPQeMFK4LJMI7H7u8tWkceGBLYmuARLxDdv3wrHd%2F%2B2ZC2NJhIev%2BGOm3573smAM27XGkGJZmu4MYAr%2BDWVrEvtGzYBxLCKjztidSlTGYpN2Ew9qL6xAY6pgE%2B4UhKu9gJKeOQ%2FyrOsMeZbsWU0aZytb64FsQqW2t7urvBpNKbqFMM6EcCNiSJFFYuzi7SCKbVHj3yeCm17DUqicHqOO3PO6RkTXY6mI9I1amHl4Ifw1POPJXeA8Oa5Fom77K%2BXtx%2FeF2ZFa51rzMhYbKKv70Q1GJKUNLb%2FOcM1MSd%2F3FEnkSyKtKDtiTIKAHVJAmhzH42etcgnr2C1xNA1NNZKPbV&X-Amz-Signature=923378b3fff50b1929c5dc0905b785a25580637167f28c392a63aef6866feb8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2E7EWMW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDM36L5DqlC9wZ5OZb04%2F20vveWQAmJSyt2q9Jr4w%2FRfAiAlvbD%2FrVh05vKnt6%2FitI7Za9Cas9pT%2FTOyzPWFkgscWSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZd8tJsigsWWa6omzKtwDfwnBO%2B7d%2Btb3PrhJLVOCHnQVAymDNFQ75LzM183ax7PL9vXGLFG0bpOTVRZ1ZhkjXJ76tk262OjnE7I9fIx88YyK2A3srYlSXeUy7JzrLdcV94V%2BrRa3s%2Bo3IInTPnC61A%2FwZQfNKNv26gimVLmiZ3VDZ5mBuusKf9z%2BYizHqqbM6ZdaXD7lcUfrih7x0A9daN4vYl%2FxfBDR6cJ36bYFEjgp7HrM1g1O73%2BEti8U%2BTJVqYuqszjwRrmTBD7l645dcFpJPP2onsFnF3mPFoJiF6SWxd7Msy42TxN%2FF4gvbL9FxYkdzbJzuQuRH39pdy6tVYUNaCWKORRVxb9s0pRcqlq3dmDv1MZAy3IbuZYhcUtjhg8%2B6zf1tgq6nd2BwC%2FFOlEj1%2BIwyhWHQkPUz61WRD0P%2FaQLD6ngc%2F2fjX%2FLqRTbT0snzcioppZMMnbE9geec2ST3v15h9lRiWVyGgksJCa9pLNKJ%2Bb3oG%2BoBKG4F82fZ%2BGeJTc0yB5CnA3EfVXreHT1O%2F2G8ixmsvoPQeMFK4LJMI7H7u8tWkceGBLYmuARLxDdv3wrHd%2F%2B2ZC2NJhIev%2BGOm3573smAM27XGkGJZmu4MYAr%2BDWVrEvtGzYBxLCKjztidSlTGYpN2Ew9qL6xAY6pgE%2B4UhKu9gJKeOQ%2FyrOsMeZbsWU0aZytb64FsQqW2t7urvBpNKbqFMM6EcCNiSJFFYuzi7SCKbVHj3yeCm17DUqicHqOO3PO6RkTXY6mI9I1amHl4Ifw1POPJXeA8Oa5Fom77K%2BXtx%2FeF2ZFa51rzMhYbKKv70Q1GJKUNLb%2FOcM1MSd%2F3FEnkSyKtKDtiTIKAHVJAmhzH42etcgnr2C1xNA1NNZKPbV&X-Amz-Signature=ce7e5c25af531c8f8903ca5784f32ea28efeb45d17633dd999e310e318739afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2E7EWMW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDM36L5DqlC9wZ5OZb04%2F20vveWQAmJSyt2q9Jr4w%2FRfAiAlvbD%2FrVh05vKnt6%2FitI7Za9Cas9pT%2FTOyzPWFkgscWSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZd8tJsigsWWa6omzKtwDfwnBO%2B7d%2Btb3PrhJLVOCHnQVAymDNFQ75LzM183ax7PL9vXGLFG0bpOTVRZ1ZhkjXJ76tk262OjnE7I9fIx88YyK2A3srYlSXeUy7JzrLdcV94V%2BrRa3s%2Bo3IInTPnC61A%2FwZQfNKNv26gimVLmiZ3VDZ5mBuusKf9z%2BYizHqqbM6ZdaXD7lcUfrih7x0A9daN4vYl%2FxfBDR6cJ36bYFEjgp7HrM1g1O73%2BEti8U%2BTJVqYuqszjwRrmTBD7l645dcFpJPP2onsFnF3mPFoJiF6SWxd7Msy42TxN%2FF4gvbL9FxYkdzbJzuQuRH39pdy6tVYUNaCWKORRVxb9s0pRcqlq3dmDv1MZAy3IbuZYhcUtjhg8%2B6zf1tgq6nd2BwC%2FFOlEj1%2BIwyhWHQkPUz61WRD0P%2FaQLD6ngc%2F2fjX%2FLqRTbT0snzcioppZMMnbE9geec2ST3v15h9lRiWVyGgksJCa9pLNKJ%2Bb3oG%2BoBKG4F82fZ%2BGeJTc0yB5CnA3EfVXreHT1O%2F2G8ixmsvoPQeMFK4LJMI7H7u8tWkceGBLYmuARLxDdv3wrHd%2F%2B2ZC2NJhIev%2BGOm3573smAM27XGkGJZmu4MYAr%2BDWVrEvtGzYBxLCKjztidSlTGYpN2Ew9qL6xAY6pgE%2B4UhKu9gJKeOQ%2FyrOsMeZbsWU0aZytb64FsQqW2t7urvBpNKbqFMM6EcCNiSJFFYuzi7SCKbVHj3yeCm17DUqicHqOO3PO6RkTXY6mI9I1amHl4Ifw1POPJXeA8Oa5Fom77K%2BXtx%2FeF2ZFa51rzMhYbKKv70Q1GJKUNLb%2FOcM1MSd%2F3FEnkSyKtKDtiTIKAHVJAmhzH42etcgnr2C1xNA1NNZKPbV&X-Amz-Signature=8649d8138e267b92d91456b714c3463e24fef1af7f1e5ef630d7189632d398ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XR465PJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEx2BQm9PuyJWlBO29GyYF4CUA2VkBSrEp3EiA8ktgLnAiEA%2BCnJrYsqHhro8VJ0CO3ch%2FL3hQUBs3PbmHx8n3epX5Mq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLbsMomwmwLDe2wCFCrcA%2BSv6Yr8RLwkO7%2FLUNQGmqmYsrRse%2FB%2FNy%2Bz%2BLRPGc1b3vaBGe40g0ro%2F077GjstSIIpli7M4Jghq%2BDOjFsRRCpDDekIUzFuhxdUEZhQqPL6en9Ra9SdFV6WQe3PH%2FIAH234cm5SxBOFMD6iKcb3rcWLBbqJ6nQY%2BPihV2rm2XKg2Hdur%2F5RZB73riFHgEJRHqcTE4A0Mah784mzpq3A9xjZomJGxtXdgseQZINutm%2BKLGX1wkkmwc5zq9Nzu0o8mmctXpYPV2ce7fbNaT1eM2TAUZ04FKm9aAxIauwR0nYbswmnb14RqaDKHvRddXnAKOrAelCNRGp1r2R9jdz4gE%2FwEGvA4A9RVM8S%2Fz04dhRo%2BNKDbEKBs11tXtKvG0WwLepzhxROBqpf4giWSPmTrB6K%2FrTj9kRZSdvinnF8FZnDujxO4LxW%2BRCP0mETvuy7WnxX4iUsX4ZGyf3%2BsCSfn5SGlmUk8HqW12RomU259pYHMKA7sIMsINFz%2BOIdbkg4gvIZ4f7QKzXgcWcEU7iscyC4Q0XolsPgkJOFQAbMRguNegQJic66qERWrYrNEfS4QW89ESZyyekrl7hHP4MEVbZctKklSTW4VFizkeEi2tVB6FizlUnIj7%2F3JNWTMPOj%2BsQGOqUBpBB2pwumpxCLhe8STbLQttxqZcWQAcTWxDlx2Gqajo4Ll5WWdiSO7VgKg5mcSXCZKKSycVOM6vD46fbOVhxQJPcgs1u35TmkUJ%2FxAc3dZD%2BlG8wt05TB7LCweK%2FlABrXCgBwV8lj25%2FK7PjsmmBo7sXKd2jYvzCgfZFY30KKMDC6xffNlGfpGpA6wiLTMAHVvYG3Il2Af8b1taXRQd2EHGc5x4xW&X-Amz-Signature=cceacfdfddc408e188604a78fb7ed2b8ae1bc8a352ab3aa3b76ffc5340a5a516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZNHHIYD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCCTHtADLw%2BKIUWgbTclHirY6TmQnomKzLmigpzoTZ8LAIgbQE9jXxz18PPOaMXcxv8pYKkLiH3xwSm3CIZjU%2FTF7Uq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDSXWA6ErAVdaGg1WSrcA2QbWLNehaBeDyr23Pac6tn13hEhlG7%2F30NcSRuljRocbN5eKiVJzkR%2BpQmrjheGeFPuyuKXmkpSoYL0y2dyECW9gKhdak8tgLAysosLJ8daFZgYPUAaZW2G1xRxSoaACB8zoTphYgSUrYnktAL5aYoPxWd2mo2gD18pqmVgaAlgnNI0vP5bGmG47LlPg3jTcoisbUZbu2ViVvgt%2BhqQX8TatdIVvZNaR%2BFvmg23XvaR9gx8GAcO76sfEudylkEpI%2FVlCjHDLh%2ByzOwMEi2erUOceSxcNHUzcQ7pidu5Zjj95CW4CCYofvQxLFENblOLyd7Mp9Pyc8Md%2FuEiM1qXMKG0RJ23Vtnzi4AM%2FBYtuzoB8pbfhYCP24KTiu9T9G3JN%2Bu0ur5OshDw1kD3nWkTIGxTGxrS2zwiJ2C%2FaPh6cb0ElrvO0vPDlo31FMxoMfMKMFDTuo1EYt%2FS4EypWK1qUwsNFCaIqZSH18zzUklYsR0r9ZNICtQBsZnFE4EGj%2FNJBnjMug4JmL3v%2FDe%2BSyX%2FgU5kxUfx%2FWY0XP0dxJWWRerq9b5kbd4eJhXFT%2FlxAC36rFAscLGVcH%2Baw0PWenvtYuHTQwoya5%2FRjpqkYNpN2OTom5LTL7w5T3e2hJJVMJaj%2BsQGOqUBeNnbjRM7O8hUX8L3ns%2BVu1NjnpwyYUUU34xYANZ6FiA9ZeQ8Ev9gVInDwP4S458l%2FPbZr8gccteiYf99w3Oaltgu6yjWPhTEqrrt2NcAq857MhtoSbdJq9KH7P5ndHSyVR3ifaNcbjWizhqeLRNrMGJ3nmVtWE5Obl3u%2BgmmnU9RpdO8ysWPTcHTeEcSIRiI3SPWAK7QnaKiUvaBIAotC2QGy6ws&X-Amz-Signature=02cd15039bd3376a7af18c78c6dde98b67bf1696c30ceeb3dd4e7829caa6260e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2E7EWMW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDM36L5DqlC9wZ5OZb04%2F20vveWQAmJSyt2q9Jr4w%2FRfAiAlvbD%2FrVh05vKnt6%2FitI7Za9Cas9pT%2FTOyzPWFkgscWSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMZd8tJsigsWWa6omzKtwDfwnBO%2B7d%2Btb3PrhJLVOCHnQVAymDNFQ75LzM183ax7PL9vXGLFG0bpOTVRZ1ZhkjXJ76tk262OjnE7I9fIx88YyK2A3srYlSXeUy7JzrLdcV94V%2BrRa3s%2Bo3IInTPnC61A%2FwZQfNKNv26gimVLmiZ3VDZ5mBuusKf9z%2BYizHqqbM6ZdaXD7lcUfrih7x0A9daN4vYl%2FxfBDR6cJ36bYFEjgp7HrM1g1O73%2BEti8U%2BTJVqYuqszjwRrmTBD7l645dcFpJPP2onsFnF3mPFoJiF6SWxd7Msy42TxN%2FF4gvbL9FxYkdzbJzuQuRH39pdy6tVYUNaCWKORRVxb9s0pRcqlq3dmDv1MZAy3IbuZYhcUtjhg8%2B6zf1tgq6nd2BwC%2FFOlEj1%2BIwyhWHQkPUz61WRD0P%2FaQLD6ngc%2F2fjX%2FLqRTbT0snzcioppZMMnbE9geec2ST3v15h9lRiWVyGgksJCa9pLNKJ%2Bb3oG%2BoBKG4F82fZ%2BGeJTc0yB5CnA3EfVXreHT1O%2F2G8ixmsvoPQeMFK4LJMI7H7u8tWkceGBLYmuARLxDdv3wrHd%2F%2B2ZC2NJhIev%2BGOm3573smAM27XGkGJZmu4MYAr%2BDWVrEvtGzYBxLCKjztidSlTGYpN2Ew9qL6xAY6pgE%2B4UhKu9gJKeOQ%2FyrOsMeZbsWU0aZytb64FsQqW2t7urvBpNKbqFMM6EcCNiSJFFYuzi7SCKbVHj3yeCm17DUqicHqOO3PO6RkTXY6mI9I1amHl4Ifw1POPJXeA8Oa5Fom77K%2BXtx%2FeF2ZFa51rzMhYbKKv70Q1GJKUNLb%2FOcM1MSd%2F3FEnkSyKtKDtiTIKAHVJAmhzH42etcgnr2C1xNA1NNZKPbV&X-Amz-Signature=50ce9e1e8f3f7305767a955555de1a0efab33e43cd89e4868e25e9d41617d96e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
