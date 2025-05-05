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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IC6ANER%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3KLaUQoY4d1pwfJJMDp%2BRYeMaH55cckIQ92ziZDvYygIgS83hLlyPoCnP3kgVj88oolC5wDDx%2FMDAfcQQsa9dm5cq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPh2%2BvimS1RGCb%2BwoircA8S4eBAlt4BGd4sOwML6gmC1cLBbzNsJowvUn00IVf%2BSluA8GQrP%2B8LPJkJfn%2Bvj8uZ7fpbLAMV9ZEgtzOJkVqnCI1mHyfI2D3S5e3z%2Bfh1BIXdraQOnk1zMQmsVzmYKCa2BcslU7tKOw%2BunvAWozcK2q79P%2FfwBfhgW1RFnbMwPV0yNMEDWUCcd0Gx%2F6KO%2Bnk8O8VF4eess%2FVkcdqBcpv7rS2APc5tIxPcrcvJaVJLoAJRkXbU9KmkGAyWv9gGPNbbl8ZJw6JxgPKMphyzqoNfLffgRDHfiVI81op159Hj1NxLc%2F6XBbWwVj2EWJFARCrHbSyFEy34HPIHe0ftiNuQNO7LVnIjNd2Ik5F6gzE6Qq4CTA%2BkfITEJJMMg%2B5tALiqE1Pf86k6dyE%2FrtstyoyAwzmwVNFlFJO%2B34dhk36aNp%2B6rdsLa4m0emYq4wo8jUXckYGOclaX4uMOuKEUCu5g3ABh%2BFrG%2BdLjh%2FF9NbfUqM3PAcAiWXKYaYioruBO9evsJ%2FsnMVZ1JU5yYVq6xtok2NV4IuUwW6BwN0hXgsga3XoLOxpLDCfBVonOL2JWU20Xs5EPz1cnHOyP7ROU4RJXd0OHbN88BpJaI5zL381vDTXRLnMNN0zPBfuKXMJzP4cAGOqUBTAp3ohv3AZdH56nV93qWVTzo86qIcx%2Fch7NlfGLr1OB6o0Zw4MkeUFWZUKFosltySB1s3dR%2FxjTs1j%2BJXhp6jNc0A2H1rHNTxjI%2FLWJvRwjgh5yQqz%2FWI9oz7HwSGWlDpsAjSYYIIywZaI9gTuD4R39rdIKmjQ2bXGIQYn70VC0RYrrpGin%2F1WteKZNEeZ61uc2n2tbM4Ip1bNrerBGM2WYu8eyF&X-Amz-Signature=b5977f56aa2d79c195edc3efa8dd7516d5c1f55d761e0dd4b0dc355e7111b3d4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IC6ANER%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3KLaUQoY4d1pwfJJMDp%2BRYeMaH55cckIQ92ziZDvYygIgS83hLlyPoCnP3kgVj88oolC5wDDx%2FMDAfcQQsa9dm5cq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPh2%2BvimS1RGCb%2BwoircA8S4eBAlt4BGd4sOwML6gmC1cLBbzNsJowvUn00IVf%2BSluA8GQrP%2B8LPJkJfn%2Bvj8uZ7fpbLAMV9ZEgtzOJkVqnCI1mHyfI2D3S5e3z%2Bfh1BIXdraQOnk1zMQmsVzmYKCa2BcslU7tKOw%2BunvAWozcK2q79P%2FfwBfhgW1RFnbMwPV0yNMEDWUCcd0Gx%2F6KO%2Bnk8O8VF4eess%2FVkcdqBcpv7rS2APc5tIxPcrcvJaVJLoAJRkXbU9KmkGAyWv9gGPNbbl8ZJw6JxgPKMphyzqoNfLffgRDHfiVI81op159Hj1NxLc%2F6XBbWwVj2EWJFARCrHbSyFEy34HPIHe0ftiNuQNO7LVnIjNd2Ik5F6gzE6Qq4CTA%2BkfITEJJMMg%2B5tALiqE1Pf86k6dyE%2FrtstyoyAwzmwVNFlFJO%2B34dhk36aNp%2B6rdsLa4m0emYq4wo8jUXckYGOclaX4uMOuKEUCu5g3ABh%2BFrG%2BdLjh%2FF9NbfUqM3PAcAiWXKYaYioruBO9evsJ%2FsnMVZ1JU5yYVq6xtok2NV4IuUwW6BwN0hXgsga3XoLOxpLDCfBVonOL2JWU20Xs5EPz1cnHOyP7ROU4RJXd0OHbN88BpJaI5zL381vDTXRLnMNN0zPBfuKXMJzP4cAGOqUBTAp3ohv3AZdH56nV93qWVTzo86qIcx%2Fch7NlfGLr1OB6o0Zw4MkeUFWZUKFosltySB1s3dR%2FxjTs1j%2BJXhp6jNc0A2H1rHNTxjI%2FLWJvRwjgh5yQqz%2FWI9oz7HwSGWlDpsAjSYYIIywZaI9gTuD4R39rdIKmjQ2bXGIQYn70VC0RYrrpGin%2F1WteKZNEeZ61uc2n2tbM4Ip1bNrerBGM2WYu8eyF&X-Amz-Signature=c2ef036be814ecad19ebcd411b233c4b8350fdc5a7155e3a9688496f250a0117&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IC6ANER%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3KLaUQoY4d1pwfJJMDp%2BRYeMaH55cckIQ92ziZDvYygIgS83hLlyPoCnP3kgVj88oolC5wDDx%2FMDAfcQQsa9dm5cq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPh2%2BvimS1RGCb%2BwoircA8S4eBAlt4BGd4sOwML6gmC1cLBbzNsJowvUn00IVf%2BSluA8GQrP%2B8LPJkJfn%2Bvj8uZ7fpbLAMV9ZEgtzOJkVqnCI1mHyfI2D3S5e3z%2Bfh1BIXdraQOnk1zMQmsVzmYKCa2BcslU7tKOw%2BunvAWozcK2q79P%2FfwBfhgW1RFnbMwPV0yNMEDWUCcd0Gx%2F6KO%2Bnk8O8VF4eess%2FVkcdqBcpv7rS2APc5tIxPcrcvJaVJLoAJRkXbU9KmkGAyWv9gGPNbbl8ZJw6JxgPKMphyzqoNfLffgRDHfiVI81op159Hj1NxLc%2F6XBbWwVj2EWJFARCrHbSyFEy34HPIHe0ftiNuQNO7LVnIjNd2Ik5F6gzE6Qq4CTA%2BkfITEJJMMg%2B5tALiqE1Pf86k6dyE%2FrtstyoyAwzmwVNFlFJO%2B34dhk36aNp%2B6rdsLa4m0emYq4wo8jUXckYGOclaX4uMOuKEUCu5g3ABh%2BFrG%2BdLjh%2FF9NbfUqM3PAcAiWXKYaYioruBO9evsJ%2FsnMVZ1JU5yYVq6xtok2NV4IuUwW6BwN0hXgsga3XoLOxpLDCfBVonOL2JWU20Xs5EPz1cnHOyP7ROU4RJXd0OHbN88BpJaI5zL381vDTXRLnMNN0zPBfuKXMJzP4cAGOqUBTAp3ohv3AZdH56nV93qWVTzo86qIcx%2Fch7NlfGLr1OB6o0Zw4MkeUFWZUKFosltySB1s3dR%2FxjTs1j%2BJXhp6jNc0A2H1rHNTxjI%2FLWJvRwjgh5yQqz%2FWI9oz7HwSGWlDpsAjSYYIIywZaI9gTuD4R39rdIKmjQ2bXGIQYn70VC0RYrrpGin%2F1WteKZNEeZ61uc2n2tbM4Ip1bNrerBGM2WYu8eyF&X-Amz-Signature=8f911c7644434f3ce5e8f0d90e8fcf954a7494dce2716cf1dab19c357ba38c24&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XN76FAY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVKmVDuKQcssdIHhmX6xfbn5wU0ZENe4ICRvheQ9hIMgIhALJweyII4QvhDs5dLjk%2F6XGuGrFdJtDm0fIF478SnyP5Kv8DCCkQABoMNjM3NDIzMTgzODA1IgxA5wue1t8r%2BxSWUfMq3ANoTx2lBGFEMfrXxC%2Bdj7aVg9hDk%2Ba7zMGmhbJjMvsG6RXWujopkKGEM4Kk2kdN8TsFKOXtcSCblODOMwMYOKRDJEqAHe84ADD3qJQumREmrp5SvL7lKCz%2F9HuwiamA2n8Mih%2FYZn8a6BDNKDSta2ChntAxNPRIGqBEK2NSdYan6q5ldxirRszFxJhWTKTEQkJEoT6GDMf2ckSbEDG0veDUBpETzzFYOJxKMPN4x4JsBFoVkfbFF27ZYSOrhWS9vBokYCQ9A75269rtFEz4LSHfCHaR5hjV8k%2BJEU52NG5kqkY12XhX%2BLm%2B%2F6UQu7OOyo9KLIrIzCDK7z60mYuiaIn9x0dfgckCfbBbVxPaF8uxV4d2gz9DZMF5VZ0PZXlV6YAmVa4ncc1FZ2ZlRDVDkmnA5q1HO4KQOjPyWgArW9pwqY8%2FzqB1rUDUAU0ql%2Fao5OvPU4zlo1E%2BSgQpMZMa5fNd6d5GGY0IgufVD%2B4OWT1an4gaKkmutWdFm1UplyYRnMVB8CGQ3YCxpBfYLpvC0e83wquVcD1RUk2AomWAYGcGbU0HFupAghvObcW%2B%2FiqPVy99deoHxsKN1gleda4zRosvz6k3bJfx0EcuGjv3mS0qBC84rNHIRSfuib8aGDDaz%2BHABjqkAZ01eHGgfgysk4WF8FyuCRxabI8c9%2BqXH0JwPs9V11Jv4wRs7zEIp2QnJiYinUgCToz%2Frn%2FTXXHtE4So6AoQxL2AQsL%2FcEOcQr7qoirpA4Ux0fdpI%2BZsk6YgWGM8rM0Y1BH5sfuNoexzTHXXQC%2BjtuSxQL6KSU4B%2BgvkalsM2YfOiYo6bUhvAt%2F%2FVTReZrUCtbpQbix026Kjd%2BYY9UNehMGPDkHz&X-Amz-Signature=b29606fe4d333ecac7e119c7783bdeb630a7c9de70aae10bbd274b5e893a512e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSYJIUE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIdumMvm4kjQdv%2Bx4tAjjE1%2FQIqe3lCgVRZQ97uqvoVAiEAlaXIR9OWQ5S1nbtR0kCydah1%2BQoi6xdiQfQeq2Zvg3Iq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIqpvc7nzCCahcszkyrcA01IdU6KkGApuBLKjvr7%2FIiC3f6ZQ9QgIXsCs8U8dSGmdiu%2F0BYtYXoM8uGLsze5mHVx1SwfkLmaqm%2BPB%2BZMHQ3JMIxKAMoKMkc7aG9PdI%2FT2qQCb7DHGR3qXWA3CrXU%2FYwNk2JndAHuI6XcMPA4qKIdYypWXkwnRY7rHapfVvLriufxiVyXdv7WmKs3gmKQSDsWKMJDqPzESccNySBLk5xdFDJthyvT%2Bm3gXmIv%2FSQCUWqfB3iypSJ8OuZzVtsA1mmdT%2FwkeIp%2FG3qQQVHnkiqAIGoRMer4W5FHOgKFVKojL8BoBw2IxzOHs8boiGxA%2BKzNUZuckTesILOvVvy3wkzzaqYn3q3juvorgVeAUDaJbi15pT5KVtrR%2Bn7zoYeYOX%2BJJtHP4HhezaWfOVDK9ef4QRCDvu%2F0c24x%2B47KwiPcZnklXY5MC1BXAMwejw7QH2UM4Dj8K49ylX2uLb1A6oOviorzZqpQV45XZPojoVj2P7EPiFVsN9usaHXDJb6HOCTT3294PCc1QOrTza8P9YRScvfITmvMYhWr3wyWtykivrizS0rkZVbKuItCIrS1Hdhz9J139VUN1uhY7kDjfvPSjCPRkoVAK8RY8sYawGMJHNrsM21Ej0PD5jHvMNHP4cAGOqUBm1bHU%2BRfasTK2NIiKqCCxlpULoXWaMEZjOCKAOEpFCZ3ZgvB63rTooLYP39jdsjTx1JuH5jIdPs8F9sWB%2B8nD2OxD4T1JZeUk16AHecKSKqsZkCsijUazWo6pX6nQZKDikZqbE7vM14I26%2FjQuiqOBptQ8%2FkKXzmjTx9AHf%2FFp8Hj49W2eb7uGQ8QH2CSyI6oX5tjTTwJOPW%2F9xSTYgRQCIWOx1l&X-Amz-Signature=a31635a6326f596e7136853ca9654a91325704f95f169e371b252986c914ed0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IC6ANER%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3KLaUQoY4d1pwfJJMDp%2BRYeMaH55cckIQ92ziZDvYygIgS83hLlyPoCnP3kgVj88oolC5wDDx%2FMDAfcQQsa9dm5cq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDPh2%2BvimS1RGCb%2BwoircA8S4eBAlt4BGd4sOwML6gmC1cLBbzNsJowvUn00IVf%2BSluA8GQrP%2B8LPJkJfn%2Bvj8uZ7fpbLAMV9ZEgtzOJkVqnCI1mHyfI2D3S5e3z%2Bfh1BIXdraQOnk1zMQmsVzmYKCa2BcslU7tKOw%2BunvAWozcK2q79P%2FfwBfhgW1RFnbMwPV0yNMEDWUCcd0Gx%2F6KO%2Bnk8O8VF4eess%2FVkcdqBcpv7rS2APc5tIxPcrcvJaVJLoAJRkXbU9KmkGAyWv9gGPNbbl8ZJw6JxgPKMphyzqoNfLffgRDHfiVI81op159Hj1NxLc%2F6XBbWwVj2EWJFARCrHbSyFEy34HPIHe0ftiNuQNO7LVnIjNd2Ik5F6gzE6Qq4CTA%2BkfITEJJMMg%2B5tALiqE1Pf86k6dyE%2FrtstyoyAwzmwVNFlFJO%2B34dhk36aNp%2B6rdsLa4m0emYq4wo8jUXckYGOclaX4uMOuKEUCu5g3ABh%2BFrG%2BdLjh%2FF9NbfUqM3PAcAiWXKYaYioruBO9evsJ%2FsnMVZ1JU5yYVq6xtok2NV4IuUwW6BwN0hXgsga3XoLOxpLDCfBVonOL2JWU20Xs5EPz1cnHOyP7ROU4RJXd0OHbN88BpJaI5zL381vDTXRLnMNN0zPBfuKXMJzP4cAGOqUBTAp3ohv3AZdH56nV93qWVTzo86qIcx%2Fch7NlfGLr1OB6o0Zw4MkeUFWZUKFosltySB1s3dR%2FxjTs1j%2BJXhp6jNc0A2H1rHNTxjI%2FLWJvRwjgh5yQqz%2FWI9oz7HwSGWlDpsAjSYYIIywZaI9gTuD4R39rdIKmjQ2bXGIQYn70VC0RYrrpGin%2F1WteKZNEeZ61uc2n2tbM4Ip1bNrerBGM2WYu8eyF&X-Amz-Signature=b83ef266c2912462c970c39030616e3ff28c36ebf6b1631e6aa7d98a119037c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
