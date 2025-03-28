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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNDLDHB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtNp4gQBEf1nNHtWOr%2BdlM2N1OpUklwAmtVz0shvqgyAiEA8K8H6URrMWp%2BZO5UfM1qhhRvH4aAdC3%2FsGFCTZweYukq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKBOMIguu%2FKHO7v2gircA05H%2BChIVDTDs2HVGzrhSb59GaW6UjczKjD4fo8wqHU54fz5x7rbll63zUrSwk77PjruyfIOWNiBk9ao5AFu21Tie4TNBq7m2VpWmpFPRG5CNT8XAP1S4DHc1uKR%2FFWf2Zjxe2GVpp0qkrWwH0QoYiHL860JdnP1UrI2ukv%2FFA5UsTlA4YsjIf4eVspzEap6YxBVTUVy0Q6gyocnDcRgFh3RtJlfuPc0%2FiNIMnVAGaQAyV3CDJEwhMreG8Tno3iBMdCKmIOn1SeaoHK2hqri36tJzdcPHv1OxrLY0%2BrpYPEwFXDI%2Fgm1aLUiUkgGKpAQRJREBqQ8lPvODFRm2ngSVGVH%2FgXKaNflRKTkoO8%2F5%2Fdl%2FRZK578JqZqAyp0uNY%2FVWKeS0wP8%2FgB%2FXFG6OzGdgBI%2BboCDeJTmiC151EAucSBih3OHjSpl8WvaTdrTAZfmmC%2BFjmZx8FIMgDnKPk2BhUgrYn%2F3lIop0aQEhd%2FikG7sOjLDRbmYBFJ%2FRV4mXQJx389s87tqc5prfGEfoNvNXKubWBEM2jnUpItzKlaoR%2BZ49%2BxIp2BRmIkdZqdOjMgxxzhgoHxaUKNjjRo9PaLtHtRRPXKCp6uDNrhDeXB%2FwRhzPxGXTdD2nKIAiKuvMK%2FRmr8GOqUB2W52g7SDJ2zAqOHM5D5UVYVoZ7DeKrteEvDhHjJxsdnZdMldln7tW0mUFxqnzFP7%2FHrCjOzP1iMrSjpon3lQweBZhMRa7mT%2FnxF97NPWyg9V1FcUqic6Owzw0uOqrr6mSKUNyI%2F8JvUN01IW86RuoPLCBjKZFElAYd4vWLmn%2BUuE8%2FdkjlSUeXX4va8a%2FnD1w6rpHAj5hnPuKFG64DVBZFSAYXKF&X-Amz-Signature=f3512955b2530445100c270d56141fadc79520c51b12feb4a10e262395627142&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNDLDHB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtNp4gQBEf1nNHtWOr%2BdlM2N1OpUklwAmtVz0shvqgyAiEA8K8H6URrMWp%2BZO5UfM1qhhRvH4aAdC3%2FsGFCTZweYukq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKBOMIguu%2FKHO7v2gircA05H%2BChIVDTDs2HVGzrhSb59GaW6UjczKjD4fo8wqHU54fz5x7rbll63zUrSwk77PjruyfIOWNiBk9ao5AFu21Tie4TNBq7m2VpWmpFPRG5CNT8XAP1S4DHc1uKR%2FFWf2Zjxe2GVpp0qkrWwH0QoYiHL860JdnP1UrI2ukv%2FFA5UsTlA4YsjIf4eVspzEap6YxBVTUVy0Q6gyocnDcRgFh3RtJlfuPc0%2FiNIMnVAGaQAyV3CDJEwhMreG8Tno3iBMdCKmIOn1SeaoHK2hqri36tJzdcPHv1OxrLY0%2BrpYPEwFXDI%2Fgm1aLUiUkgGKpAQRJREBqQ8lPvODFRm2ngSVGVH%2FgXKaNflRKTkoO8%2F5%2Fdl%2FRZK578JqZqAyp0uNY%2FVWKeS0wP8%2FgB%2FXFG6OzGdgBI%2BboCDeJTmiC151EAucSBih3OHjSpl8WvaTdrTAZfmmC%2BFjmZx8FIMgDnKPk2BhUgrYn%2F3lIop0aQEhd%2FikG7sOjLDRbmYBFJ%2FRV4mXQJx389s87tqc5prfGEfoNvNXKubWBEM2jnUpItzKlaoR%2BZ49%2BxIp2BRmIkdZqdOjMgxxzhgoHxaUKNjjRo9PaLtHtRRPXKCp6uDNrhDeXB%2FwRhzPxGXTdD2nKIAiKuvMK%2FRmr8GOqUB2W52g7SDJ2zAqOHM5D5UVYVoZ7DeKrteEvDhHjJxsdnZdMldln7tW0mUFxqnzFP7%2FHrCjOzP1iMrSjpon3lQweBZhMRa7mT%2FnxF97NPWyg9V1FcUqic6Owzw0uOqrr6mSKUNyI%2F8JvUN01IW86RuoPLCBjKZFElAYd4vWLmn%2BUuE8%2FdkjlSUeXX4va8a%2FnD1w6rpHAj5hnPuKFG64DVBZFSAYXKF&X-Amz-Signature=be9e932d3319e1ff7b359a9ba31881e13c8ab3b056fc286ef1458e4420120013&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWXRATTS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu%2BGlF%2FGDn6tEpB5y4bO4YkY1sXdHJx3AR54rd12C2wQIgQSxvhxySgfLtDBk7qFMAA4tF0f3Ff8WXFeaKuDP904Yq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCj0HfH6Q%2FVQfTZu8SrcA0DYRUo7nUUK4oFsx9gp0rjQlrC%2BRT8%2FSrih8F%2BMGDv7CYu%2BWWchEJFVYI%2Fa9b695eKwrMu0bXc7sAON2li%2F5ZMzMSkn67TYwrfGMhkD3Dd9qu0pEDz5KnHAyH8J7iaO7147OSqqQ%2FiH%2FrektWF%2FyTaqdU1%2BVdTnTBUgjBBqbu%2FWWqKZcizkTN96p9HPi3yiS2uwGB6oVXdpR3zn4VMKjt1hKwOO0gO8O4R8smew%2BvGse%2FFyIDjoHuWn%2FMJHZesm3lkCORx0K0PcPsMp48hAzVfNcRrkFX9xzaLJIQDOFMI8ltcdG9x7DL7ycMduYSihXuUzvAULY8MULTvo9beeBfpvVQ%2BXxYGJpgJ0H%2BI%2F8%2FtbU0OFS6CpW3wQ8dcud0Po7eEsMNpup7Z4QgFyWhjGPzUR5XiyuyfFLvFvw%2FIt6CsjNAcNQQUioKS6HgdysMTH5Uw0EL5Qn9LttKv%2F5LWR19t60yoyLtG4bNsZPrGyWvXv4Lnmgkmr0wIBjhLLGYmdmWRAan65l6yYQLgH4MJGPGa1r3F29f04B6J6StXXT8jlZfkm1Av%2FJE1DKYdeZoTY5uKnNbohcLUvDaL9gj3IjRuBsltVvcTK1y5C99bCwRto7STmqH19OnhmuI0HMITRmr8GOqUBh8nG8auHYssbvGwI3VoB%2Fok9n6tN59tDyLA4q%2Bj8mMbOiFYH%2Be9kaclYm9dVSK%2FjSWxz9gxx7a%2Boh%2B0EeSy%2BApg06SQBl%2Bzic%2Fv5CVP9dTWBVCXiKqfo6qFx8BpHqg5%2Folr%2BzIB6z610OUZ7aoWABGvAzG%2Fm6zQzpm%2FVCu3xEY%2B%2BeebYNRbBFjxS%2BH8lDppayk%2FMgpvsoIvAZuO5TH9T%2FxT5Q36n&X-Amz-Signature=9973add79afa6708fc85eb24f6f8788675f4f19205d5dabd94fb93a8f604d4fe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNS6MIGL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuW3%2BKMYh0uUBK9rbBmFcBjbkrfoOycoTob12Tj8tzZgIhAL8GftKJLLOaknDU2MPa1yjyQ8hjUoRNsIGvFHcQzCQKKv8DCF8QABoMNjM3NDIzMTgzODA1Igz%2FwX4ob8teu8ME%2F34q3AOFlgnsqxdjgNzvw5nNgdUVE6zuU%2FzSpBYIJ%2Bp56vJvYGd7bKdghg3Wmee17hHMJ2NoQ8gJ08RRnwyngKvUn7cYBwu6QNSF9S7nX%2FVNcLlF4XGorcO9ANl1vP8tMPVBCGCgENFoeC6CSO63JyOnSH41tW0boI6dyR4XzyVGBxa6Mpc7YktSwQSlzKkuNF1hTpE%2FU1XP0Ye2wNs%2Fx2SWL5u632EQv8YkVJs2tK2mwYeNsbi3XGHh9jggoaRoRoyV1BNAHR1ewWPQniQc6spGLOKoqPaX35IFm6p2a6AhztVCg3oc5YXRcqDPpIyEzCoo6FonOE%2FKwMkjY25UdEDwJykczsdT76QYEZB4ErhKZN9mb0EE4XZDFalVkgON7Bxqi%2FpqlP98hpXkR4uhkCDCNhbSw8w9O1fr5QAPPWSj2qGp71eeGUM8cdqeKZFYxYwnYCyoSbOpjA3O4JMcT1grW3rMaDCYC%2FkJyKxV7BbjE3IY1SaaiazPheznrYg5UGNj5YOX%2FI%2BbCe4DeeTlF7QCYPsJFesq6kJzt7yWwe%2FfoUUvxgPEnoUv3Bi5k3Q7BL%2BRifsgVt467%2FHgusBGJA%2FzmHUAbkGgz5%2FKXMBc3VUEg%2BMk1us7eQ27gqAJcJkixzD60Jq%2FBjqkARIafXnrjNJrZF3m7UzmRvyETAYAnDdKX3seFw8u4XZZUEU1FvDK2URhsT1dUMOFPIN2ooWiza%2FvO7LmYX2pRWfB4I3gILOC5msqii%2FT2ZZ5wOUobvKHSIaKu7PEem8ADIYgfy3Le2mmYp%2BzUe1aG3YaNuUuVA3B0x%2FbUzsBoIEpdfbTxdqDKxb%2Blmk3LtWDyFxF3RuZbLF9tEutYm%2FK8qgTvK8W&X-Amz-Signature=03fa33767b727d45ed22f75e89a58d968c78b7eb7a0d94daaed3d426924be99c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNDLDHB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtNp4gQBEf1nNHtWOr%2BdlM2N1OpUklwAmtVz0shvqgyAiEA8K8H6URrMWp%2BZO5UfM1qhhRvH4aAdC3%2FsGFCTZweYukq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKBOMIguu%2FKHO7v2gircA05H%2BChIVDTDs2HVGzrhSb59GaW6UjczKjD4fo8wqHU54fz5x7rbll63zUrSwk77PjruyfIOWNiBk9ao5AFu21Tie4TNBq7m2VpWmpFPRG5CNT8XAP1S4DHc1uKR%2FFWf2Zjxe2GVpp0qkrWwH0QoYiHL860JdnP1UrI2ukv%2FFA5UsTlA4YsjIf4eVspzEap6YxBVTUVy0Q6gyocnDcRgFh3RtJlfuPc0%2FiNIMnVAGaQAyV3CDJEwhMreG8Tno3iBMdCKmIOn1SeaoHK2hqri36tJzdcPHv1OxrLY0%2BrpYPEwFXDI%2Fgm1aLUiUkgGKpAQRJREBqQ8lPvODFRm2ngSVGVH%2FgXKaNflRKTkoO8%2F5%2Fdl%2FRZK578JqZqAyp0uNY%2FVWKeS0wP8%2FgB%2FXFG6OzGdgBI%2BboCDeJTmiC151EAucSBih3OHjSpl8WvaTdrTAZfmmC%2BFjmZx8FIMgDnKPk2BhUgrYn%2F3lIop0aQEhd%2FikG7sOjLDRbmYBFJ%2FRV4mXQJx389s87tqc5prfGEfoNvNXKubWBEM2jnUpItzKlaoR%2BZ49%2BxIp2BRmIkdZqdOjMgxxzhgoHxaUKNjjRo9PaLtHtRRPXKCp6uDNrhDeXB%2FwRhzPxGXTdD2nKIAiKuvMK%2FRmr8GOqUB2W52g7SDJ2zAqOHM5D5UVYVoZ7DeKrteEvDhHjJxsdnZdMldln7tW0mUFxqnzFP7%2FHrCjOzP1iMrSjpon3lQweBZhMRa7mT%2FnxF97NPWyg9V1FcUqic6Owzw0uOqrr6mSKUNyI%2F8JvUN01IW86RuoPLCBjKZFElAYd4vWLmn%2BUuE8%2FdkjlSUeXX4va8a%2FnD1w6rpHAj5hnPuKFG64DVBZFSAYXKF&X-Amz-Signature=01ab4ab2015c2a9da14efd49791d868d6683b14d7cc17b9af3a3daecac658007&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
