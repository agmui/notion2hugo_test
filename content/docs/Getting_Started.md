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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX4YAK4S%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAREYDFkv%2BRCoBNs4w0La0Mlt9Y1bhq62FrXWLBuV%2BtQIgPNYXsHloUv%2F9GdgCFyHmLKDphpn%2BZAAt4aGgiKXhr0wqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2Bbgkc%2Fk5vNPhm9syrcAyhzEo8vENoFuKR%2Bx2d%2F9RzMzOjPwCWsDjVk6KN60Dl87v%2Bm7Rm26ZpZOeKsO1mdaR3RYiZN87xxgwjhX3BsYY4O9xY4AXCUViCOH%2BuZtiMQ28jrpApLtpMctUAIKGuJJt0pgJoJbvRG1OejCOQmopoEgOJRRg8IfxmaMEObAQN3A83CqtTaIBX7C0d2wlfAbKjmlyTDS7C6Plhm2XZXk6bl6%2B7E9c0Cze%2FTzE3w0c3z8VyX%2F3ZAqE2C0m3C%2B5bRTH0oBuYxRsRrx7oD75RGyBImaKVDg8S91OGLF2WL%2BPQRocQnVfyKOS2JC6c6EKmp2VoPxhk7zoWBTNz9CQ2ISPSmmRQSbMJ0nr9z00rN4Bkp%2BwwPT0GpljlGxIkk3Ms%2BSp3HdPLPtU%2BEFHndrB07o00Ti0zTKDX04pCL6y%2FwpAPmzC2dDSeNbszLIA1t%2BVmHIxVvTN7USnzEJqGgtKCc6RWRq0TXWyYlAat%2Bf2z9Zi7D6uidoC1QXiN5kCgRZS7OP5UzlKcL%2Bh6ceBW6x%2BKWkkuoTInit5ZXixAKZgKeX%2Bz6I6XAdJpMecLwIXfSrQDg3T%2FZNNl05u0jsqZDxUUtPT6VDNp2o1aj92KRAcXk98erUPvuOx3E3hHsz%2BbDMNmehL8GOqUB8kmafsdMUBYZsRgTLc4qm07Liq2kZX7mKy9eIO6d0RRq5%2B2QKgXwIWQyWKfDJtqyF73lOAGkpblnOPULMLU320JdktaAl0mw6zH%2BgbD%2BVx62xzSkEJafIp2lwHuIlZHNm3mWRIj0GTKPJREUGegzuz4ofGSeIM1NoKh0h3FCu4iNcJ%2F1vhnPfJKN1qaPZm%2FYmUb2HjOuzLToQtpMFpOLu1gLwynS&X-Amz-Signature=2f250d5f57e5e7e3030a1dcf8ca3c87b5b7265a55a87625f128e3df58168b0d2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX4YAK4S%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAREYDFkv%2BRCoBNs4w0La0Mlt9Y1bhq62FrXWLBuV%2BtQIgPNYXsHloUv%2F9GdgCFyHmLKDphpn%2BZAAt4aGgiKXhr0wqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2Bbgkc%2Fk5vNPhm9syrcAyhzEo8vENoFuKR%2Bx2d%2F9RzMzOjPwCWsDjVk6KN60Dl87v%2Bm7Rm26ZpZOeKsO1mdaR3RYiZN87xxgwjhX3BsYY4O9xY4AXCUViCOH%2BuZtiMQ28jrpApLtpMctUAIKGuJJt0pgJoJbvRG1OejCOQmopoEgOJRRg8IfxmaMEObAQN3A83CqtTaIBX7C0d2wlfAbKjmlyTDS7C6Plhm2XZXk6bl6%2B7E9c0Cze%2FTzE3w0c3z8VyX%2F3ZAqE2C0m3C%2B5bRTH0oBuYxRsRrx7oD75RGyBImaKVDg8S91OGLF2WL%2BPQRocQnVfyKOS2JC6c6EKmp2VoPxhk7zoWBTNz9CQ2ISPSmmRQSbMJ0nr9z00rN4Bkp%2BwwPT0GpljlGxIkk3Ms%2BSp3HdPLPtU%2BEFHndrB07o00Ti0zTKDX04pCL6y%2FwpAPmzC2dDSeNbszLIA1t%2BVmHIxVvTN7USnzEJqGgtKCc6RWRq0TXWyYlAat%2Bf2z9Zi7D6uidoC1QXiN5kCgRZS7OP5UzlKcL%2Bh6ceBW6x%2BKWkkuoTInit5ZXixAKZgKeX%2Bz6I6XAdJpMecLwIXfSrQDg3T%2FZNNl05u0jsqZDxUUtPT6VDNp2o1aj92KRAcXk98erUPvuOx3E3hHsz%2BbDMNmehL8GOqUB8kmafsdMUBYZsRgTLc4qm07Liq2kZX7mKy9eIO6d0RRq5%2B2QKgXwIWQyWKfDJtqyF73lOAGkpblnOPULMLU320JdktaAl0mw6zH%2BgbD%2BVx62xzSkEJafIp2lwHuIlZHNm3mWRIj0GTKPJREUGegzuz4ofGSeIM1NoKh0h3FCu4iNcJ%2F1vhnPfJKN1qaPZm%2FYmUb2HjOuzLToQtpMFpOLu1gLwynS&X-Amz-Signature=4d766d85f8a804ca45156adb32dd2edbc6172b445f0d38aa8b48e387b7b8f860&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUIXHY3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZiMsp9YFlMO9Cv79nNt%2BFag3F1nWzw4ZteBEf8zHHYAIhAP6CNi2SE2urr7q6x%2B%2BLNHQvbR7BBH9mgeujx9TK3nReKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJA9f9U8dkuEMoD4wq3AMu2tufeQK%2BzLO3jGxEaNBdvByjRljDL9SHvcs%2BhjIBxiDCIWlQTTGgUcDnP23KXVKfUbjtzsqVeRxuF7qYjEqkWAuGVFMfxb3rhurbrc3x53lNsWToN6VeEKw9ec%2FTwteFuEvTUXuY%2F5rZYrycur00qaee2yLVGG0W4KdTJmSaYKQW2tW9qC1sNr0ffcSNHR%2Bh%2BruvBOMeS9dIanNwAgcRI99hCZUDu%2Fgt08V5H9q6C4VGTvzPDpJx9aoJHT6Vt8VJIBvgZH5RDlLvbiHdRw%2B8J%2Fxhcl1%2BC79mdmH4I372x69krIWeKiMBH0M0bMCbQ07r3p3MSqAMc9i0D2%2FK4lBPTjbuGmwJIgePYYE1P10UgLuLu2T1qsSVmuSNpcRs5GvqcKBVz1OpTsYUCbg4J1ifQ5PmiKL4Oqsu8OxF%2BXb9JMz5sUVko%2BdVHgE4y5CPdfXSHwqaMh4sqEt423G1oy%2FF5RZLzGPbkhDbqCCRAJCxOhk6niKKoCtuamTZYLSsxZKxxevBHnJY0IVwhsNyqPxS345eAkWXFDel5SMKkaiiGkfgHPVX6T6eZsu%2BzIQUZhsm7SUtL3mzkVrgsqHDYwQib2pPiY2rPflftBTvCl1X3rW0VijKGTEoMzCJvzDTnoS%2FBjqkARrl6YYh7Q1eUyKd4HjlVO5TL9VbA0q8ZPeIdaGkd5Cdr9APd%2B%2BQVjwuVgN0iOQTDGkUfYus07RnJUxQdWiguFnBCMymb5N1rsSyQ2UzuvXObRW9LBdmWC9hDYvSrzpgfULsvNRlv2tVLX4h6VbA3RrHmTsSy0xR9N8sdu9Tma2k0lYW%2Fwf8tJCAYFNDmu0O6jf%2BLZmqlRDoz%2BGRbZgIFFJRuCUH&X-Amz-Signature=08301135b3d83e5ad5f57c0fe423e988334dc6790e0eebb4807c6063f7da0ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPFMJE7B%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSXUP58pMTREHpAAjVCnE%2FUMP2LmJC0NRTv%2F%2FwEGvGHAiEAqZ%2B5V6KN85crANa6fOI%2FpthAGOFYtgJrLuBS%2BPxKf2sqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbStIs1tnshgqVmYircA4VEp%2BGp8cVTHFT3VFd3qdhfOf6R4WjWF1%2F1tkMXiQPa8bwtZWo28WcjfZ%2FbVnAVrSY3fOaXQDnXg8OAbm9LcT40SviCaf06rwC4grrW%2Fv0M8fdawbLCL9FzJX9A%2BIEZsaFFy1GWfjmEL4EILZCg5I5T6oewcRsCvqfez9XMr1dc%2BR19mVYLZT7Jb9HMj5IM3JBbP1Rm86PEz3hF7IwiDu2%2Fn32KuMgYBVKPMeA4a%2BZ9IGkOG4F75aCfuT4UVCXfKltscEYtP9VW4HC6TQMPCpNifaljFyeA3tBv01YUp278mnmlc1ccunr%2Ba%2B9B0kLH3QS5%2BgQGpeJ5unGorj77nPZMOiQuow2oFuqvwgYfh6hMPqhfp4LAZ5zMYgQ18h%2FKIYJGjgaJr9s5HG47jS%2Fm%2FHe3XwsOnnIs%2BQLGVuJ2i8A6UiH6u62f9uBRYgm6feuhttQc6CIF%2BpBQAR9LgCET20Jlyu4uK3AKf51rD1%2BRVVdakJtt3GYC1O3R%2FNtDo%2BUypn5%2FowhtnoLqQyvBr523TeXPMAISkDUPTTSAe%2B9ODxDcV9Ug2ZXTBMNbuJNcRBp2aV%2Ft58T8N3k4zTJilTVFPUto3O3oEYC3NymFS8ue6IBK2Q2Co%2BmhIaCZBjI1MLWfhL8GOqUBWq4%2BdD%2BCtv%2Br08ACmHqJwzXMiN2cWKdi5M0vnUjOK3KrVXcGSy6BhqHFY0nF2%2Bs4JFXJotIHbxWAtGSGf0apbzzxUt6MdQ%2F30c8SGIDHH6Q0H%2FBEjfL9iSs4Isd1Dntw3gWKo0oo%2FgS%2FvIXTO6N8pM6v7mqkTK7WvT2zi297vPWYT3G8Afn58yUAl9Ie6B3kIQiDkE%2Bal5i%2FMAsAERID%2B3ZsFvOE&X-Amz-Signature=0c6e0a6999e61e16c6712a9321896b339fe11281cf9e915803a601b9f6028a11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX4YAK4S%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAREYDFkv%2BRCoBNs4w0La0Mlt9Y1bhq62FrXWLBuV%2BtQIgPNYXsHloUv%2F9GdgCFyHmLKDphpn%2BZAAt4aGgiKXhr0wqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2Bbgkc%2Fk5vNPhm9syrcAyhzEo8vENoFuKR%2Bx2d%2F9RzMzOjPwCWsDjVk6KN60Dl87v%2Bm7Rm26ZpZOeKsO1mdaR3RYiZN87xxgwjhX3BsYY4O9xY4AXCUViCOH%2BuZtiMQ28jrpApLtpMctUAIKGuJJt0pgJoJbvRG1OejCOQmopoEgOJRRg8IfxmaMEObAQN3A83CqtTaIBX7C0d2wlfAbKjmlyTDS7C6Plhm2XZXk6bl6%2B7E9c0Cze%2FTzE3w0c3z8VyX%2F3ZAqE2C0m3C%2B5bRTH0oBuYxRsRrx7oD75RGyBImaKVDg8S91OGLF2WL%2BPQRocQnVfyKOS2JC6c6EKmp2VoPxhk7zoWBTNz9CQ2ISPSmmRQSbMJ0nr9z00rN4Bkp%2BwwPT0GpljlGxIkk3Ms%2BSp3HdPLPtU%2BEFHndrB07o00Ti0zTKDX04pCL6y%2FwpAPmzC2dDSeNbszLIA1t%2BVmHIxVvTN7USnzEJqGgtKCc6RWRq0TXWyYlAat%2Bf2z9Zi7D6uidoC1QXiN5kCgRZS7OP5UzlKcL%2Bh6ceBW6x%2BKWkkuoTInit5ZXixAKZgKeX%2Bz6I6XAdJpMecLwIXfSrQDg3T%2FZNNl05u0jsqZDxUUtPT6VDNp2o1aj92KRAcXk98erUPvuOx3E3hHsz%2BbDMNmehL8GOqUB8kmafsdMUBYZsRgTLc4qm07Liq2kZX7mKy9eIO6d0RRq5%2B2QKgXwIWQyWKfDJtqyF73lOAGkpblnOPULMLU320JdktaAl0mw6zH%2BgbD%2BVx62xzSkEJafIp2lwHuIlZHNm3mWRIj0GTKPJREUGegzuz4ofGSeIM1NoKh0h3FCu4iNcJ%2F1vhnPfJKN1qaPZm%2FYmUb2HjOuzLToQtpMFpOLu1gLwynS&X-Amz-Signature=ecb45d3000140c0f50d0bf3ae99a39f5f7dbe89fe864235f17b6cef95f26af99&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
