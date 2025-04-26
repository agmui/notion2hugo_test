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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGG2YCJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHJPZKlpLr29tC1XmKK8jusIR5T7Xq%2FKvU0Zr3kg2EMwIhANfNKLV6XBpNNvJl587V7tW3Zj47YuyvVKWUXME8k7VrKv8DCDwQABoMNjM3NDIzMTgzODA1Igy%2FVQ5qdbOa81PaeKUq3AOLsoOdstLkt4kskrDrz7uVLKLzUaVJNpJ1qhMgzynvFbgCSDvtYB3pEKJBr27WbfQKp%2BFUVbDbnlb9ZhIutIU5q6MfbNVbiNmRKlNLceN97esIhFyDjeXCglgf9U0cJHmMsgzX%2FcNfa6kAa4ESicGqQ6N%2BwO6sz3C1lyqbTbvAU6PdAEVP5DiJkOIl%2FqIz%2FsbW6l2QWDmx5BZDlxT3v8C1rR50hEkg8eFNSIINEz%2B0Kwh%2Fp%2BvrF4ge9qJpzyzT8Fl6DmYTCNn01H3V%2BjTwbXrQ%2FRqQef14Hg2kLXHZ%2FYATwH3PWt4j7uToDwjcvvGFea7l%2BhzlLBJPLrchcgBMg9TmHRwgcAh1BXk56BHVg3GkTEWtWMKf2Nw%2Fbp5eSPH1xnpd5LMhsd2EUPxsuhQuMo6l5yFU3MBORm1Ggfnim%2BTRsnMN2dC%2BE5lK4SmyUtoLulTbcm9FCE5LMymvmHC7b6%2FBnALpPgM2%2FLmjShTLv1Tl5swBV7KK0Giep6UdmewuKmUFt2TdwsenzSpPK%2FkBTchgE5HeB1FpdBOsaDD9fRLTQNfz1pOhIuaBWDRfObYbyDlFplsAQRjblGH6elIptgDp2rvPNrURJdznPeySxb9jrQM9RWFheA8dk6JptTCbkrHABjqkAZ3I3Da7j94g5HFteQgrQDyRFvDNL73bGucTvhVVWT9z2xGfKSCLjAeHV5y1JYi1lKu%2FdZ1RODNv5poQ4Fj8ZoveBGyg8aKBoOghzcLLneugM1u5ikLf0SCK4MWI3KP6hDljO%2B95RdNwsoZ%2BqSbytsXtOC4IKJ8porzg7FBUSREixn4xPo0xfQ3F1vqypLzXOEMMaXuURFUlRNFPgjjl7wVoARSH&X-Amz-Signature=1d095a1a17daffaeb29754dbb0a1b73d5ffd4490651fd2226ec1918f3969e6e7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGG2YCJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHJPZKlpLr29tC1XmKK8jusIR5T7Xq%2FKvU0Zr3kg2EMwIhANfNKLV6XBpNNvJl587V7tW3Zj47YuyvVKWUXME8k7VrKv8DCDwQABoMNjM3NDIzMTgzODA1Igy%2FVQ5qdbOa81PaeKUq3AOLsoOdstLkt4kskrDrz7uVLKLzUaVJNpJ1qhMgzynvFbgCSDvtYB3pEKJBr27WbfQKp%2BFUVbDbnlb9ZhIutIU5q6MfbNVbiNmRKlNLceN97esIhFyDjeXCglgf9U0cJHmMsgzX%2FcNfa6kAa4ESicGqQ6N%2BwO6sz3C1lyqbTbvAU6PdAEVP5DiJkOIl%2FqIz%2FsbW6l2QWDmx5BZDlxT3v8C1rR50hEkg8eFNSIINEz%2B0Kwh%2Fp%2BvrF4ge9qJpzyzT8Fl6DmYTCNn01H3V%2BjTwbXrQ%2FRqQef14Hg2kLXHZ%2FYATwH3PWt4j7uToDwjcvvGFea7l%2BhzlLBJPLrchcgBMg9TmHRwgcAh1BXk56BHVg3GkTEWtWMKf2Nw%2Fbp5eSPH1xnpd5LMhsd2EUPxsuhQuMo6l5yFU3MBORm1Ggfnim%2BTRsnMN2dC%2BE5lK4SmyUtoLulTbcm9FCE5LMymvmHC7b6%2FBnALpPgM2%2FLmjShTLv1Tl5swBV7KK0Giep6UdmewuKmUFt2TdwsenzSpPK%2FkBTchgE5HeB1FpdBOsaDD9fRLTQNfz1pOhIuaBWDRfObYbyDlFplsAQRjblGH6elIptgDp2rvPNrURJdznPeySxb9jrQM9RWFheA8dk6JptTCbkrHABjqkAZ3I3Da7j94g5HFteQgrQDyRFvDNL73bGucTvhVVWT9z2xGfKSCLjAeHV5y1JYi1lKu%2FdZ1RODNv5poQ4Fj8ZoveBGyg8aKBoOghzcLLneugM1u5ikLf0SCK4MWI3KP6hDljO%2B95RdNwsoZ%2BqSbytsXtOC4IKJ8porzg7FBUSREixn4xPo0xfQ3F1vqypLzXOEMMaXuURFUlRNFPgjjl7wVoARSH&X-Amz-Signature=32d38d5073ce6587fada2f281c96f1f06cf9c060eb035fdf80dd3740beff576d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRGDJRS4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHeXsH0cub5DxWX%2BOpVcUWv7LaxB9wIay%2BXkx97EXVBAiAlwMEVLzReqJNeb77SuVCOQsVqG%2FZ1KVl3SQLRiJNToyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMDSswN%2Fl0%2BQJ%2BGB5sKtwDLQ0AR%2BeLIJZeNBPxKRkHV44wmBZiZsehHhxA4vy9w401N9co3aDi3n0HoJWSG4t2HnFpLW1LXPbTZhfzgJNPFUB%2Bdhc2QuJw%2Btr%2BTe6CHO5z%2FYnm59s%2FYmrFAbZ5ZKyKRQ98Ax4jzjqFWZDGLsiXJU2tUUvex43V0XTv4WSju3roX6u1ZHjaPOYnz%2BC2dOSYbbLLOxFNIipzrBCOoz1fQFiHUJzgj6rIvXYPJ8SzOhMKvUjmroDVpCHTvEPXsJZQtEgQK9B6QGWQkh1L2ykMc%2Fw3OyekOJhWsWhftChvf1d5XM70NeFLceMm1YNrmqEJdsbS7PSTHd3AdVLGG9tjJ5lvLmjhyEdWBZpbFT25wVYAFLNZiKPrJID4tRoE1%2BvKMOYoFqtdJ%2FBtbjnTON8iNAL75hpawjTuvxQsv1jK4giuRGWlXEkYzB7L7sX7PPXiavw0HyAgx9tseH5cXis71TfIjaMWYJm5NRTTTCST3rz4c0QipLbkR9PQqRa58CLZpztfhMwCA%2F%2FD9DtEd%2Fu9ZhIViIBIwVgeGwU3SafOG23xlTZkOy%2Fzu%2BLuEqzfSLjjHfw%2F6YRpBoQEOWaG%2BRNvZj4b4WImZKx5YERWXkZBe4ZvnnFb%2BHGcd3V1WCcw%2FI2xwAY6pgEy3GksOOmUHX94s1PoGE%2Fqqh6QYUQf1YjZqlRg33PMHqyU60kSzSS4ycOfx4ZpjunXUH%2BbRi967c%2B113hxFeo55xbEchmSrto4ckn%2FifgMNOVn5fEISiMMyCgQGmdVkt0aBY%2BBgy%2FybzT39AhURBHuatX9NUAVexn8lAn4C72rh6Qr9BcMkTiYLn8d65wuJ4XNb0tVGiL7CB5U9q5k6IFR1h67Hste&X-Amz-Signature=6efaea2dea3d68363887f9947aaeaf74d43ec5e9b30109e9a6b03918fd135193&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFTHEUDC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjb1O10sRwda9lG1zLovYtM7%2BVEteOlybkG%2FPLKBavBAiEA7vnRc5ESPsDC7EvFNzn6wOAZXD1DiKk95GrtjLQvE1oq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFBmlE4c1WvMa4s%2FaircA0zg5kgcnGxX5cfUOLz%2B5KhMMnf7TP5mySX1kxa6m9WeUBbl3Qwxinu3%2B%2B41XLGwgvuLJJyz1Wh47LNShcyeWdxPJkYcGlw7tWwry%2B6HT8gc8q7viLCTSsGvdYwaT%2BrzwGDrMNZB53d8capgDuN5UDa7lSTORCAPtLHINLhsJDEcdcY8WydFGisAraSOnQn8KgC%2FsPmfWHhuhFBbBBabWUAnlMju%2B9p7YCyYW80kNruEwQjUV77oJiwu71lr4p8wzv4r5l9OPFiKDlg4UPr%2FCDtANYTcZ7IKCvEGNvryGPxHBUR3rkfMS7ixQFnmlUq2b7SoFwmPBT%2Fw2Fq6suf4%2FfHX%2Brx7IyDNPp4fjYoKIk02FqSI2tEIF4Z1Z1ojtXyendK0F%2FhMCnRbJO0Q7Gjy0nltc3C5y6No5MFqaYx2KsEqT%2BGQFQpptKuouAxmev2yEv4dRx0bRhePosRJfxr%2B%2FUD3bcKOMWgzL%2F6KW1wjFvAHu5E%2FnJ7JpEnYJCGKMpRej2B1S7rdYoR%2FwQAYDGGqscST8dKgSYYY%2FLn6THvZEPX8G2q%2FiIHMtnT8ct65FCXQI8rJiOMTlMuC6jQZzHjVi%2Fxkw7iZ%2BeLejfmLjMdBg%2B8wZLk0r72WcOcvVZulMPmNscAGOqUBTQGX72FtERJ5T0sKeiwtrpiiwXH2so2BVIWTezAjggBfIIr6FBKfp8Ucs2Jx1lv5mAEVMLH2OQYPSQTbqjXcT3fp%2BRi1qrgD9TYuFScGVObpRZo7sqok5poMyXw7uI9CIck2O9O004fCxFxzN05kx7jWYrP4Z8cAtxpDWXqYn2noVNoWedoNWOENHDlHx7kWpw%2BX3HmsisyaQDwdUqfUNITaciEs&X-Amz-Signature=1220d7f3d72e5fdb89b7d9b588551c8f8bf095a5153e45452d39ebf5aa96fb02&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGG2YCJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHJPZKlpLr29tC1XmKK8jusIR5T7Xq%2FKvU0Zr3kg2EMwIhANfNKLV6XBpNNvJl587V7tW3Zj47YuyvVKWUXME8k7VrKv8DCDwQABoMNjM3NDIzMTgzODA1Igy%2FVQ5qdbOa81PaeKUq3AOLsoOdstLkt4kskrDrz7uVLKLzUaVJNpJ1qhMgzynvFbgCSDvtYB3pEKJBr27WbfQKp%2BFUVbDbnlb9ZhIutIU5q6MfbNVbiNmRKlNLceN97esIhFyDjeXCglgf9U0cJHmMsgzX%2FcNfa6kAa4ESicGqQ6N%2BwO6sz3C1lyqbTbvAU6PdAEVP5DiJkOIl%2FqIz%2FsbW6l2QWDmx5BZDlxT3v8C1rR50hEkg8eFNSIINEz%2B0Kwh%2Fp%2BvrF4ge9qJpzyzT8Fl6DmYTCNn01H3V%2BjTwbXrQ%2FRqQef14Hg2kLXHZ%2FYATwH3PWt4j7uToDwjcvvGFea7l%2BhzlLBJPLrchcgBMg9TmHRwgcAh1BXk56BHVg3GkTEWtWMKf2Nw%2Fbp5eSPH1xnpd5LMhsd2EUPxsuhQuMo6l5yFU3MBORm1Ggfnim%2BTRsnMN2dC%2BE5lK4SmyUtoLulTbcm9FCE5LMymvmHC7b6%2FBnALpPgM2%2FLmjShTLv1Tl5swBV7KK0Giep6UdmewuKmUFt2TdwsenzSpPK%2FkBTchgE5HeB1FpdBOsaDD9fRLTQNfz1pOhIuaBWDRfObYbyDlFplsAQRjblGH6elIptgDp2rvPNrURJdznPeySxb9jrQM9RWFheA8dk6JptTCbkrHABjqkAZ3I3Da7j94g5HFteQgrQDyRFvDNL73bGucTvhVVWT9z2xGfKSCLjAeHV5y1JYi1lKu%2FdZ1RODNv5poQ4Fj8ZoveBGyg8aKBoOghzcLLneugM1u5ikLf0SCK4MWI3KP6hDljO%2B95RdNwsoZ%2BqSbytsXtOC4IKJ8porzg7FBUSREixn4xPo0xfQ3F1vqypLzXOEMMaXuURFUlRNFPgjjl7wVoARSH&X-Amz-Signature=eb1d75b8106be5860c74565c6e86e43c522a4a40daca58cb015ecf7518360957&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
