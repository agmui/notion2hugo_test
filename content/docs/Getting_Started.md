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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEXKN3FE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCDhFei24QcqqL0j7kp8WDiCvBQDl031mZ66OzZzxTlDgIhAK7puT3KHYa2DIu1Kvv99doMnKZOYPVYEZHXJSW7vWQuKv8DCDUQABoMNjM3NDIzMTgzODA1IgzePaf69kDb5CuXjzEq3AMRcqp7L3BNQf7Palk24bxnHKiyiP6XysfXP0D1bSEFpocos1XnUgGzAVeeL4ENq8vnQZAU8LXajdClJEbRz%2Fk7VWauC%2B%2BdaCsEpeQGcgYwrktnGjzwZ%2BjZ0SbwnNAeBSsQfLRlLDR7aJWUYZbBnpxr%2Fh5Z1XjAj5vJoCg%2Bh1S3ut4R1BlQglPpRtAOUgCYMflseYQxx9FfxziTcCcqCY1nke3xUpxiunzmpde%2BkSNF6DeT3KluSgD04MB%2BkUok0viAFD3NmbRk%2FHUGv2C1gvWZHQjZKXNJDXnnfPcG%2B%2BjXuCXKL0MsRfIa9dCFfNk7ljPnfhVsmQGI4y1osc4xFGm8Vn0Uz3uxt7tDtP%2B0dRRidWuKgUURD%2FACOm0nHFhegdHO%2FNd3yPTAHFBpHLUNm2r4bxjnGwUokSSh9hj48HP2lprssTog%2FWJMslSC8ZYgxrtbUze3rvauGGPMBpjHXzNM9lG9ymcxJrde8sRjf%2BZi%2FFX8qCeBqpy0ZTbj2mSf1ZewXyNASsTK46VR5k%2Fy3z0EkXpQZakv7D%2F8WB2HWiHQjkXbhSqI20FD5hFt28GdJsEgqrpqa8TF31OFwp3%2BHPbOpurDmLmHQUvcAzoqUSGl88KY7HjAYGA6uHPSPDDc56DDBjqkAVdBPm0v4jsoFtrCTV2W636AUz4WxbC7RTdsdunqtQDs6t7sc5frz221wFq7zIZYqv0%2F9sQGeEi5LXg8H0WVlVjvmp%2BecTJDcyT1q6ACigcxHlUlXdQWC7Q0oCJ8iA7PPdrKhlWa11Rs2idFcIJ4SYvcABYbXYgYUvCtVcdqFhsMmv%2BiDwMNuQZIIXqQpyNlOuXC%2FNZCiBIM9soxaiwTtMbC%2B%2BOu&X-Amz-Signature=eea63b8a83fe6d04a8d5163d4f8fe7763fea852fc8a818e946759e71eee32ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEXKN3FE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCDhFei24QcqqL0j7kp8WDiCvBQDl031mZ66OzZzxTlDgIhAK7puT3KHYa2DIu1Kvv99doMnKZOYPVYEZHXJSW7vWQuKv8DCDUQABoMNjM3NDIzMTgzODA1IgzePaf69kDb5CuXjzEq3AMRcqp7L3BNQf7Palk24bxnHKiyiP6XysfXP0D1bSEFpocos1XnUgGzAVeeL4ENq8vnQZAU8LXajdClJEbRz%2Fk7VWauC%2B%2BdaCsEpeQGcgYwrktnGjzwZ%2BjZ0SbwnNAeBSsQfLRlLDR7aJWUYZbBnpxr%2Fh5Z1XjAj5vJoCg%2Bh1S3ut4R1BlQglPpRtAOUgCYMflseYQxx9FfxziTcCcqCY1nke3xUpxiunzmpde%2BkSNF6DeT3KluSgD04MB%2BkUok0viAFD3NmbRk%2FHUGv2C1gvWZHQjZKXNJDXnnfPcG%2B%2BjXuCXKL0MsRfIa9dCFfNk7ljPnfhVsmQGI4y1osc4xFGm8Vn0Uz3uxt7tDtP%2B0dRRidWuKgUURD%2FACOm0nHFhegdHO%2FNd3yPTAHFBpHLUNm2r4bxjnGwUokSSh9hj48HP2lprssTog%2FWJMslSC8ZYgxrtbUze3rvauGGPMBpjHXzNM9lG9ymcxJrde8sRjf%2BZi%2FFX8qCeBqpy0ZTbj2mSf1ZewXyNASsTK46VR5k%2Fy3z0EkXpQZakv7D%2F8WB2HWiHQjkXbhSqI20FD5hFt28GdJsEgqrpqa8TF31OFwp3%2BHPbOpurDmLmHQUvcAzoqUSGl88KY7HjAYGA6uHPSPDDc56DDBjqkAVdBPm0v4jsoFtrCTV2W636AUz4WxbC7RTdsdunqtQDs6t7sc5frz221wFq7zIZYqv0%2F9sQGeEi5LXg8H0WVlVjvmp%2BecTJDcyT1q6ACigcxHlUlXdQWC7Q0oCJ8iA7PPdrKhlWa11Rs2idFcIJ4SYvcABYbXYgYUvCtVcdqFhsMmv%2BiDwMNuQZIIXqQpyNlOuXC%2FNZCiBIM9soxaiwTtMbC%2B%2BOu&X-Amz-Signature=0b0f22b492abe0124cc1bbfdfb91690cfb38349d564debe9d43e41f9703f92c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEXKN3FE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCDhFei24QcqqL0j7kp8WDiCvBQDl031mZ66OzZzxTlDgIhAK7puT3KHYa2DIu1Kvv99doMnKZOYPVYEZHXJSW7vWQuKv8DCDUQABoMNjM3NDIzMTgzODA1IgzePaf69kDb5CuXjzEq3AMRcqp7L3BNQf7Palk24bxnHKiyiP6XysfXP0D1bSEFpocos1XnUgGzAVeeL4ENq8vnQZAU8LXajdClJEbRz%2Fk7VWauC%2B%2BdaCsEpeQGcgYwrktnGjzwZ%2BjZ0SbwnNAeBSsQfLRlLDR7aJWUYZbBnpxr%2Fh5Z1XjAj5vJoCg%2Bh1S3ut4R1BlQglPpRtAOUgCYMflseYQxx9FfxziTcCcqCY1nke3xUpxiunzmpde%2BkSNF6DeT3KluSgD04MB%2BkUok0viAFD3NmbRk%2FHUGv2C1gvWZHQjZKXNJDXnnfPcG%2B%2BjXuCXKL0MsRfIa9dCFfNk7ljPnfhVsmQGI4y1osc4xFGm8Vn0Uz3uxt7tDtP%2B0dRRidWuKgUURD%2FACOm0nHFhegdHO%2FNd3yPTAHFBpHLUNm2r4bxjnGwUokSSh9hj48HP2lprssTog%2FWJMslSC8ZYgxrtbUze3rvauGGPMBpjHXzNM9lG9ymcxJrde8sRjf%2BZi%2FFX8qCeBqpy0ZTbj2mSf1ZewXyNASsTK46VR5k%2Fy3z0EkXpQZakv7D%2F8WB2HWiHQjkXbhSqI20FD5hFt28GdJsEgqrpqa8TF31OFwp3%2BHPbOpurDmLmHQUvcAzoqUSGl88KY7HjAYGA6uHPSPDDc56DDBjqkAVdBPm0v4jsoFtrCTV2W636AUz4WxbC7RTdsdunqtQDs6t7sc5frz221wFq7zIZYqv0%2F9sQGeEi5LXg8H0WVlVjvmp%2BecTJDcyT1q6ACigcxHlUlXdQWC7Q0oCJ8iA7PPdrKhlWa11Rs2idFcIJ4SYvcABYbXYgYUvCtVcdqFhsMmv%2BiDwMNuQZIIXqQpyNlOuXC%2FNZCiBIM9soxaiwTtMbC%2B%2BOu&X-Amz-Signature=56e819600a5db32acf9709b45b892eb1a9cb7df6819815e615495486f0e18147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIDMNC3H%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICcPSdnOqlwfeypOgv%2BTK1IPMBIXZP2PrZjXs6vhCUdmAiEAiSMCbfMQ7K1NKP%2BNYORj7dCeYWcoHbF54bhJk%2FqOPsYq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDPyc0EeIwRdXwfPNpCrcA933ReAW5fOVQ1ZdT7rnsOYxARo6qZtdJBkUueuZACvXPH5gN7EnosMh3EkiY0W71tb3JcO4wGIJfl%2B9U6bKYmwMe6MlF5H3FEAT0EvGWq%2BjFcy7aIH6uAR3REHGnVNRNIqShXHzypU%2FR0MWXDcgP6wJMCwDcGmfz3SULKmtrx5l0KsIC5MFvk4dPRK5q9GaICm0go5I1guqyawAnzPXJiu8kepw1I9khkUqbK3PG7wU1XiUeqEyHstTDwN8u5a68VlT9FXwTLnhlIwA1IOjdIniUdzqxczP8VNLQ2%2FyHCRvKMNVXyqhJivKUQ2WrVfWai1tQshBTiBFkrUadypnZg%2FZL83uD%2FW6dX%2BSeEGZ8RgmNoyVPBuzWkqA6%2Fn75bSHAz4krIKxwOiTSXD2UNnX4AxJhdbzxXIXBUOBQMvYweRWOkHSFmdh9BiQUBnmUHmjB7CIdktgufmimsnIRMGUeg4hDu7G72m5YXbiKhG5i5cBrH6NpXpLj81nWndp3mfVk1fxnSkdAQfzAdbWgKzP7wRFeYJABSCefDfbUsOePSUkBWLf02rAXS7yTDpp6pSrQ0%2BsEQWy48oG0VqmSQLey3oanEilVfRKK%2F3gz%2BiT0K%2FQA8eT9ZNcEV5%2FYtC3MPTnoMMGOqUB6EeBNZDYJh7Gkb80dW8HnVslVE7DzChSmdenUFLlE%2F1zMy5zQ%2Fa0bViYY5IIlKO4ccJ7RAmR2gaB97ElqeZKn6DyOd2FJYVElthlbnFXLNfYxMs30L6oPK17ckmGQztwDRNoMxlbJg%2BRyoiQhnKibinr3LkkQ1BRxtBoFWDjp3VwZB0A89fmEOyPUnqMrnEO8zHeWY0n4X7RrRR%2BleB778gPO16p&X-Amz-Signature=d84c2e3a577f5b198a101443aad2c8d1c3600992e4f15da900c7b493fbdb5953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVLYCFG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDhtc841eG%2BUP9YtUz2YYB1inyncfX%2BGQ2Df8p683SFOAIgH9pNd%2FXh1%2FgUcK7vDPkaCEXtwPsw6GWpM0XDtdO%2FCYUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOD%2Bttylyu224YPOWSrcA5JD3g6%2BDbDBOp54OTuLj2XjCq2qz3ZevdadL2N2VLfAJswcmn7c6%2BvNlbvjdavNfrlLnMzCo0xzHNVhdt3K2DvzyV84rMNS3wxCA%2B0TpgceT%2ByyPCkl98SUT0DD1S5A1B%2Fchm4S8WzNNBNsinNruvoUA6Nx2HZRumicZeD1Vt9CFmkBUT2VvD%2F988IGUpOvpuxe%2FLNBJt16ozmLlMvMM00M0FBWUdoVaCwEctQeGVxDpC7SEWBvB30cMzJI8kOIRW%2BrhNUPrlqz0f%2FjUoioILAb3yJgjXCHWtAi%2BBSGBpTD5xAWq%2Faq%2B3YaWVNm3QR7pBZa%2FJpR7P0m2%2BPfhIMoynXySXBNOP%2FwAjfxTW5mlMEwGNVs2jrilzADdcrAZiBZaI1XW3mRQzsd%2BDIK%2FEJFbNMzXKOnXfDXPC9PaC6ptbHnGrue06pJ9br3Twviu4H8ENNGuFCz%2BIilW9Tpw%2FR8U2rU9MBoQc9BtcqYcMOtfkhUjieeqxZgsg%2FCVgmbd2j3eTx8%2FdpPyiQWVsukBh9Dlbft8BcTsirFuXeB%2BiGGmlf%2BkU2%2FbyARinIMkL7VFXFSNJ6vtFpcOG7gI430N%2FrkE6IMkia%2B%2BC%2FgthMZ%2B1q0gOI1zM7DcX9pJILURtx5ML3ooMMGOqUBO4%2FKCPcmXQKH0CHgjAEfbZjmzaZFQiJx1mHOF4SntpFZ1ebgQBgsh7TAkdnYNxCyNHaP5sjl4BNdKt%2FoGCbUBAgyjm7lCmQCqBCumqREveSiXF6HLTzY6FRkWs3iWA0X0n1ZxcoIbKeSTR%2FgEpyBHYl%2BHiDoIViVqVQp4Axhu%2BEuglTfkt9XgXymm14OFHRnUce8%2Fb1V5zZ%2BCAOBuE60501n%2BeDj&X-Amz-Signature=cd5f49519cf57dfac517053137461841a8813e3d7bcae5eb626b927ef1b454a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEXKN3FE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCDhFei24QcqqL0j7kp8WDiCvBQDl031mZ66OzZzxTlDgIhAK7puT3KHYa2DIu1Kvv99doMnKZOYPVYEZHXJSW7vWQuKv8DCDUQABoMNjM3NDIzMTgzODA1IgzePaf69kDb5CuXjzEq3AMRcqp7L3BNQf7Palk24bxnHKiyiP6XysfXP0D1bSEFpocos1XnUgGzAVeeL4ENq8vnQZAU8LXajdClJEbRz%2Fk7VWauC%2B%2BdaCsEpeQGcgYwrktnGjzwZ%2BjZ0SbwnNAeBSsQfLRlLDR7aJWUYZbBnpxr%2Fh5Z1XjAj5vJoCg%2Bh1S3ut4R1BlQglPpRtAOUgCYMflseYQxx9FfxziTcCcqCY1nke3xUpxiunzmpde%2BkSNF6DeT3KluSgD04MB%2BkUok0viAFD3NmbRk%2FHUGv2C1gvWZHQjZKXNJDXnnfPcG%2B%2BjXuCXKL0MsRfIa9dCFfNk7ljPnfhVsmQGI4y1osc4xFGm8Vn0Uz3uxt7tDtP%2B0dRRidWuKgUURD%2FACOm0nHFhegdHO%2FNd3yPTAHFBpHLUNm2r4bxjnGwUokSSh9hj48HP2lprssTog%2FWJMslSC8ZYgxrtbUze3rvauGGPMBpjHXzNM9lG9ymcxJrde8sRjf%2BZi%2FFX8qCeBqpy0ZTbj2mSf1ZewXyNASsTK46VR5k%2Fy3z0EkXpQZakv7D%2F8WB2HWiHQjkXbhSqI20FD5hFt28GdJsEgqrpqa8TF31OFwp3%2BHPbOpurDmLmHQUvcAzoqUSGl88KY7HjAYGA6uHPSPDDc56DDBjqkAVdBPm0v4jsoFtrCTV2W636AUz4WxbC7RTdsdunqtQDs6t7sc5frz221wFq7zIZYqv0%2F9sQGeEi5LXg8H0WVlVjvmp%2BecTJDcyT1q6ACigcxHlUlXdQWC7Q0oCJ8iA7PPdrKhlWa11Rs2idFcIJ4SYvcABYbXYgYUvCtVcdqFhsMmv%2BiDwMNuQZIIXqQpyNlOuXC%2FNZCiBIM9soxaiwTtMbC%2B%2BOu&X-Amz-Signature=1a7cf7f6ebf920b5862e30611c5498168cbbb9c180dd1db224673ed0c45a0ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
