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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TJ4Z5U%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoLzvzYrFLbQ2z0%2B9tmYkdDSFgLEbTcAh5p01CpPtB8wIgAZuPDWBTNb%2FxzuzZyv1YFrnFWCGvSBEOTlr%2Bev4lRvwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDH9%2BAKDN4MWsGQhDHCrcAzHPK0L0Bk49ONGgVF8epfUJXjY56liSlDDXpcOVJVlR2U8fqeApP%2BUspkeqNc9Rw27anBgUgxBsYIlZiJuF8dtETEgcTF4Ru4DEozCMc%2FPssE8VGsYLSaSutK9284ubYNSp3YrORIQUNqAUxDHVWPU0uWOaA2BceFOBFrAzEY2yK%2BPjw1QVOdE8YzO%2FvLGPOGBitnsDnwnB%2FSu%2BKjXVtgYBfDU7sIPPiFcS6qOMYDU5W%2F8a29wz5aJaRrnuy1XYKIqj9oGSp%2Bk96wlCl8ToNwClF7LFbggMA8%2BZhcg8GBvv1kudvLdo4RijwmYUQpKRkndSYrLt2oe1GMF7c3kJ%2FGOayOliRsBkZQs7tzG0K6EQ0e%2F7nHR0BaRF3yNqpHcqVKq2QDAKVTV8%2FVKBaxTsTJCthYVT%2B5%2BdxRs76KrjIqDRoU%2BrMU0ZRtKc5IaXf8hHeiE1k0G28nJwQhkD3wengNy7%2B3mwRQJvJtE7wAzag%2FIkBLjIAfhprKbSC8LREw7ElPPcBAcecPFIh8ga0JD5ErF%2F4cX2pJZsSPd0%2BxK64W2xXi%2BtGRTuVxIExcIctAsiaqdLJGZl%2Foj3RPL5htEmlGAsH7RHDe9y1OMDvskre9My7VJzIsVdmg8F6xZWMP%2Fv3b4GOqUB2eEQdpO07R4pfkgvi7OezlkRtA3sfNzephHhDbexhNwtCaR8zrxQfMawdEu%2Bj2J0MzB%2B2b8zQIiBIRCy1saHA2SUpm85F93uGjmYgGcWdDJcw2LoDqKQkZuXeJ9awPGg6%2B3B3P%2F3s1hQNXl3gRK6dNb8u9%2FC2zBSfKIEV2TrK76XvPTNkYtInxq29McDe5fjB79RS2S6PzSsuEEGT2EPWXaUrXfd&X-Amz-Signature=05ba9828c33db65291fb502464ff6b3e5376e7dc12f1a8fc65e560607bd5a878&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TJ4Z5U%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoLzvzYrFLbQ2z0%2B9tmYkdDSFgLEbTcAh5p01CpPtB8wIgAZuPDWBTNb%2FxzuzZyv1YFrnFWCGvSBEOTlr%2Bev4lRvwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDH9%2BAKDN4MWsGQhDHCrcAzHPK0L0Bk49ONGgVF8epfUJXjY56liSlDDXpcOVJVlR2U8fqeApP%2BUspkeqNc9Rw27anBgUgxBsYIlZiJuF8dtETEgcTF4Ru4DEozCMc%2FPssE8VGsYLSaSutK9284ubYNSp3YrORIQUNqAUxDHVWPU0uWOaA2BceFOBFrAzEY2yK%2BPjw1QVOdE8YzO%2FvLGPOGBitnsDnwnB%2FSu%2BKjXVtgYBfDU7sIPPiFcS6qOMYDU5W%2F8a29wz5aJaRrnuy1XYKIqj9oGSp%2Bk96wlCl8ToNwClF7LFbggMA8%2BZhcg8GBvv1kudvLdo4RijwmYUQpKRkndSYrLt2oe1GMF7c3kJ%2FGOayOliRsBkZQs7tzG0K6EQ0e%2F7nHR0BaRF3yNqpHcqVKq2QDAKVTV8%2FVKBaxTsTJCthYVT%2B5%2BdxRs76KrjIqDRoU%2BrMU0ZRtKc5IaXf8hHeiE1k0G28nJwQhkD3wengNy7%2B3mwRQJvJtE7wAzag%2FIkBLjIAfhprKbSC8LREw7ElPPcBAcecPFIh8ga0JD5ErF%2F4cX2pJZsSPd0%2BxK64W2xXi%2BtGRTuVxIExcIctAsiaqdLJGZl%2Foj3RPL5htEmlGAsH7RHDe9y1OMDvskre9My7VJzIsVdmg8F6xZWMP%2Fv3b4GOqUB2eEQdpO07R4pfkgvi7OezlkRtA3sfNzephHhDbexhNwtCaR8zrxQfMawdEu%2Bj2J0MzB%2B2b8zQIiBIRCy1saHA2SUpm85F93uGjmYgGcWdDJcw2LoDqKQkZuXeJ9awPGg6%2B3B3P%2F3s1hQNXl3gRK6dNb8u9%2FC2zBSfKIEV2TrK76XvPTNkYtInxq29McDe5fjB79RS2S6PzSsuEEGT2EPWXaUrXfd&X-Amz-Signature=25ce9e742ab16b003b459e5bb3416e6402b22592e15b80d5389b79fe97eb63d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOJNI62%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD9yH6rduwGcB7rMiPSwCG%2FfbslmSeB1hduKHEIuMHdgIgaAJ%2FruSkMtM3atjPMdJGwIrwpBm5ubMJkqJ1pBTEKR0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIqZq9IFk%2FJY0l6wYyrcA7HEy%2FsbfszZQc4vV35qk2qgChGzu5%2FoeLkEQkqHkhb2K6bfnH2l11t1KYvveMSrAeaCeBFDTno9eWFYYm3OppiL4FBzKyBHmglUApnIse0fjkcopvoY5MV%2FOMiTm27nbwb7EPZyYyIxwgMwepUlpT%2BGlTvvVnZmAv1jKnsr3WYLE4x4MNnUn1Yrg18pZOLzzXUW1rzr9sImG7ncAeWIQzcDuc3JzYFgTHNj68%2FERtvdFLaSTlc89SJ6Qxe%2FXavAkwuSxSEp1d92QblIIiISIIFEC8%2FiWUS1c4GjEpcCiOVc43zH2an1FY5gxdscfK4E6lY%2FprdCjrv4uUX3Q3p62pVCHLdELRXr6jolFz2Whag%2FtwvcqYPjcMAHhNU9inEMZFM56%2B%2Fi296OIFbwYzSctL6LAQBD2co3bCsUkRysdCas60OVqOC7T9oV7I8JVPj6s5JMDuGHZSFcIvRxTWKG8y1h6IT93V8qftu9YxfbKaIVi2LR31%2FkHOYLKuy0hxZV1FqGGiCOLp1aGI2SXNKJGOAmod17axzfH5VDdkj96wpmiJwlcThrZQtgZAdEaX7dZ29DaRVeZ7jy%2BTLnQfQk031xSurh5P9w9EDJomoyZU60p%2B25AhsF07XkSKIuMJPw3b4GOqUBgLcxSYHesmJZRl2q2CFA6JHB%2FP0e1PVIQuuy70zut3rO4v7gGVkOFBfoko587d0nlaRxAzi8xH6Xf%2F%2FdoKgR2ycfn3bsa3%2Brz%2FQaf750Ns%2F9GQUsL4ueKpGoPs79PX1332089Spa8wjyRwI9XZ6SEDexm2C7rYAEqYZHqQln%2BrRLBjgfnc2fX8JKhU%2B2XTTRru7kHsC%2BnxAnG3iS%2BuZCAHe204Oc&X-Amz-Signature=1786e76e36651428a8faef1397a3349710db768cb0aec09054d7c0b4de5fd72f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OZRWAF7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPOp6b0NAMSjlXgj%2BGdL%2FKd3UoD73K4m12ohMEobuniQIgBaQL%2FQoTulfEiWfDjXJyz73F5U9TIh60GjDB8M0MUDYq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMVhE4q4GYRkfRTL7SrcA%2FKQIvoGDbW%2Fyoz2kq%2FpZWRXzfPL2cLV2UUuk3oaWdNS%2B6nGng4PS%2Fbbzk%2B4GL4RmcxGsv5XHnv0BCPCMRujU8GKPQ0DOsSWlARuchDfK1tkbW9Ab2LRAdYaM2rzJUiCWn62MNWDVyDkeBc0dqKcqAtV4Fk1FeWPgY%2FuvKNJSLuKxMBLmDkkDTy1%2BtecpBb8zDWEih2akD4apf6a5RzSEFy2nK631jJkAKKQfByM4m9whBqh0gGjHEGTySrz7T8fC1cwn7Okv%2Fh%2FdMtIB0UCe2mKW4Oif7KKDi2it3AY5dO8jH1B0bK1RN6tCNaRpE5a7NvccvYpW8QRbfF9udLQa0A5DWKYH%2BJG7DrYYyBwdKNnx9rnLWa6lvH4IiXQMez7OeriKYoxTAozpRcEvyWJRagaA03dWMG5EmI8c1SGXSkS7pgcBlGHvQsDOMCshVrC9dkC94ml8p9lIP6G4Hk4pgbGfdfn%2FiD4S8RT%2B2XU6Q%2FlhZoM%2FigZlUw7VYynf%2BQQuX04%2F8V6KQxEnsLf1sdfCAzauYzHmmGhu1S9QB4T9eJK%2BD%2BNNOUSoVUPnzsQXQIK1A%2FaJWDlT216sYegHLUJ7AVJPhZJ5L1QRKDY1KXyiBDZSkvK6iGb8EU8lw0eMIbw3b4GOqUBdmuaNaBU8Rvh1dUadnZHfdyW5ZgpRVyaSITzLG98nOK4XDJnEls%2FH8Xd67Hnt6jsk18JId6RJljkKfHYRCX6Fa%2FrkHBeuj4phURhwo1rVpK5AIGs1ZF0lDNVyprrl9ZY9PfDhUdhnyXv8CBiuKM8um%2BZTzSkCaU%2FJAO%2BkoMezdwsFikPN9ygZSTz46yYiG92T4yfOYqA%2BOBQaoZfQzXlawFcNnA%2B&X-Amz-Signature=a5ae5c1065fcc303bc1fc2d322e0d9a4e08d1db79864c822b80bccae83e91229&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TJ4Z5U%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoLzvzYrFLbQ2z0%2B9tmYkdDSFgLEbTcAh5p01CpPtB8wIgAZuPDWBTNb%2FxzuzZyv1YFrnFWCGvSBEOTlr%2Bev4lRvwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDH9%2BAKDN4MWsGQhDHCrcAzHPK0L0Bk49ONGgVF8epfUJXjY56liSlDDXpcOVJVlR2U8fqeApP%2BUspkeqNc9Rw27anBgUgxBsYIlZiJuF8dtETEgcTF4Ru4DEozCMc%2FPssE8VGsYLSaSutK9284ubYNSp3YrORIQUNqAUxDHVWPU0uWOaA2BceFOBFrAzEY2yK%2BPjw1QVOdE8YzO%2FvLGPOGBitnsDnwnB%2FSu%2BKjXVtgYBfDU7sIPPiFcS6qOMYDU5W%2F8a29wz5aJaRrnuy1XYKIqj9oGSp%2Bk96wlCl8ToNwClF7LFbggMA8%2BZhcg8GBvv1kudvLdo4RijwmYUQpKRkndSYrLt2oe1GMF7c3kJ%2FGOayOliRsBkZQs7tzG0K6EQ0e%2F7nHR0BaRF3yNqpHcqVKq2QDAKVTV8%2FVKBaxTsTJCthYVT%2B5%2BdxRs76KrjIqDRoU%2BrMU0ZRtKc5IaXf8hHeiE1k0G28nJwQhkD3wengNy7%2B3mwRQJvJtE7wAzag%2FIkBLjIAfhprKbSC8LREw7ElPPcBAcecPFIh8ga0JD5ErF%2F4cX2pJZsSPd0%2BxK64W2xXi%2BtGRTuVxIExcIctAsiaqdLJGZl%2Foj3RPL5htEmlGAsH7RHDe9y1OMDvskre9My7VJzIsVdmg8F6xZWMP%2Fv3b4GOqUB2eEQdpO07R4pfkgvi7OezlkRtA3sfNzephHhDbexhNwtCaR8zrxQfMawdEu%2Bj2J0MzB%2B2b8zQIiBIRCy1saHA2SUpm85F93uGjmYgGcWdDJcw2LoDqKQkZuXeJ9awPGg6%2B3B3P%2F3s1hQNXl3gRK6dNb8u9%2FC2zBSfKIEV2TrK76XvPTNkYtInxq29McDe5fjB79RS2S6PzSsuEEGT2EPWXaUrXfd&X-Amz-Signature=961a3e90ffd8c75351c2da1bea3a52dd695eaaa7641d26f73003c72f501b6bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
