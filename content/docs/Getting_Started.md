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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZ32ZFF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEtA2jTR9LGmI3ghyJLFIc1RHlo6nbfxS2fV3S48iBR5AiAsSlqRlA6N867BjEyP%2FNSwZCFngx0O2QVmT1qtH4MVMCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMCMUGEIBv5Qoo2F8pKtwDfiw0jDHgfKegmNitiuIqjIz9uBm7en6vE3FD81gxumGflH1tj4n0emBuKZuUl7sFXI3wWm0KnpPppcNEe7HsCBE91zbdk%2BVnDXHS9OVVCF7Xcy8nItRyZl65iIeL2Lx7xnIpGvGMgWxLlZ3PvQjPEGEDMJwbCRC0xtJqytI6jYWbXfmqKJ6jv%2By3%2FDb%2BMSBFNvwBiCgQRSl2J0GLH5O6%2Fjz8JT%2BuxHxlmkQ5mUdN1wRCaicx4DOrtZ%2F7L%2BNO6sZotqbNy0sjqOYKdVy6IO25GzjnlWKV%2FoQLzqMw%2F8UoFyUpr8hrj0eDBUlLAO4v787%2BiYnNuI9mQx%2BxJwKExNId0UpDT7RDooF6EhCvLsfzFqJqN3szb%2FPLK9CkJXh1x3dvQizpo3GRNwUGo3VglUf9utPWyw45T84AgMj70h7vwet0VoSAymm3Vd3KpEffh2SfhIQiblBMxrvi8mmfHal7YswdVpFeh2dUL1K1uhOCLujHlIvAXuJKLSGCeXQ3aHTv%2Fo0RzHgaxStbzFbncqvLy21LOizOt%2BXarreHn6GxweA6EtJ3L%2FZPGxzDutkBSNJoNcyrgmyO9BUgCHFLFTiHnW78NchxdFkXiXnfoqnASpzFpP1qRxKKeY2gVqkwyr3ovgY6pgFrp2%2BDF3mE7MQAKLRrPShC%2BNKvA13iICbVW2h6%2BHkKJEzOOug3HAHhZnhvtTAePzPpt3pYZsI9gBsme1IUoo4aAgurTA%2Fft1c1zrfauIQOLB%2FpTj1aHAG03%2FLZgyU262LkyGsCTljXcoYa8qB3MOP9jOf%2BoACvHdpSYz7lkUCxqxX5GNcut65VOJ3rvFTlrsGFAOiN8nJStn3hqKG1yGG%2F3tWekxmc&X-Amz-Signature=56965eeadec7e7dad5365583d3801f86be1b378b56190183067e1561abe98ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZ32ZFF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEtA2jTR9LGmI3ghyJLFIc1RHlo6nbfxS2fV3S48iBR5AiAsSlqRlA6N867BjEyP%2FNSwZCFngx0O2QVmT1qtH4MVMCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMCMUGEIBv5Qoo2F8pKtwDfiw0jDHgfKegmNitiuIqjIz9uBm7en6vE3FD81gxumGflH1tj4n0emBuKZuUl7sFXI3wWm0KnpPppcNEe7HsCBE91zbdk%2BVnDXHS9OVVCF7Xcy8nItRyZl65iIeL2Lx7xnIpGvGMgWxLlZ3PvQjPEGEDMJwbCRC0xtJqytI6jYWbXfmqKJ6jv%2By3%2FDb%2BMSBFNvwBiCgQRSl2J0GLH5O6%2Fjz8JT%2BuxHxlmkQ5mUdN1wRCaicx4DOrtZ%2F7L%2BNO6sZotqbNy0sjqOYKdVy6IO25GzjnlWKV%2FoQLzqMw%2F8UoFyUpr8hrj0eDBUlLAO4v787%2BiYnNuI9mQx%2BxJwKExNId0UpDT7RDooF6EhCvLsfzFqJqN3szb%2FPLK9CkJXh1x3dvQizpo3GRNwUGo3VglUf9utPWyw45T84AgMj70h7vwet0VoSAymm3Vd3KpEffh2SfhIQiblBMxrvi8mmfHal7YswdVpFeh2dUL1K1uhOCLujHlIvAXuJKLSGCeXQ3aHTv%2Fo0RzHgaxStbzFbncqvLy21LOizOt%2BXarreHn6GxweA6EtJ3L%2FZPGxzDutkBSNJoNcyrgmyO9BUgCHFLFTiHnW78NchxdFkXiXnfoqnASpzFpP1qRxKKeY2gVqkwyr3ovgY6pgFrp2%2BDF3mE7MQAKLRrPShC%2BNKvA13iICbVW2h6%2BHkKJEzOOug3HAHhZnhvtTAePzPpt3pYZsI9gBsme1IUoo4aAgurTA%2Fft1c1zrfauIQOLB%2FpTj1aHAG03%2FLZgyU262LkyGsCTljXcoYa8qB3MOP9jOf%2BoACvHdpSYz7lkUCxqxX5GNcut65VOJ3rvFTlrsGFAOiN8nJStn3hqKG1yGG%2F3tWekxmc&X-Amz-Signature=f0ba375fe7eee772795084e64c586cfd5eff8d3049187d4077aa0fe0a5db1fda&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWR2XHY%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDcpRtFZOH9GNNAwkrUg3ORlX885Mk%2FhxIctkgh6%2FYAYwIgNsVgW9OGja19ZJsjp9SgsrXaFMbggR%2FoXxGIPKW0fZEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJiG0qTCC%2BGVhupb3yrcA9mROLf2ojROAbaqj8E%2FWv1v99%2FJe0MlVV7UB4c8Wu284HvwJNoyiYSLmHwZ6qgQNrAy%2FhdCsZmLjYnROkW2pPODghdegzXd7wWulFXhAkU7%2Fi6FovZzP1KMjmcI9shMw9hCvpcF8J878sbhy2rNW2VR%2Bfaec4UioFQ3VVgS3WjuF2crLf8%2Fbb21U8FUGt3lYE0SboNjdaI60zyjEwpdNCwpyO0XOMxBDGVhVlBBCNfqJ5jEcPtpHdV9xXDcvRs5fvYyivNShYHqp7F5djGf7S6rpO71MYAXYTu%2FtHJiWeNDY7YNSJ1jAeZ0C6UiG%2Bo0ChczF13O0pKG0vo0y%2BSchNDGBrMzjBf08mTewsl%2FW7vQrmgGCC2ChwPgRth3KOMyahEqREa45FNjZFK2%2Foyp0FR5C2LZsBUlnT7vi9BiyxrrLPrRuMJ2OM5uOJN142W3RKq%2FSLJG6jm%2FO2rWu3%2FWynYlgSQRhGuZNNzIzB%2FO%2FfpNUJIWLXtbLsS5TbMH7KvxuZmXscgJdVVdoniwiOOq2t%2BGCWqBIxIaJiK25O1Bfu%2FHvMcAsCRwcOLYS8gjjpGF8viABUv2o6Cz%2FDxCtuOsGeAeTg4vMq4vexKaC0vRkJsOhTkOcM2%2BOlR%2Bj8mWMOS86L4GOqUBYe9%2BRbU1uUHNfysmNyl%2Byq78pRLsZbqAGyWcf3LFFEdNdLt1UynAi7a1fI28jGfHxOtbgbE3LE%2FNVvXXJAjt3LLjZtS32qU%2B7cjPqncP%2B4Nut3OEu%2B52yrPcPqCGUC3Qa4zoWx1oSRGLy0N52LG2pXxzLP%2FIm4aS3%2BO6EzfOzWayKrLud3ig%2B5dAvO3ivUWRaMaPfqTCtCtGy0WdwhEUx7jCj9Nl&X-Amz-Signature=9018a9952f19933bac3758edda8a424fa21cdff6cd369987d6eb0b7f99aafa3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPHC43HF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIHZFiZgKx4lAX%2FGP2tfSice5BjAnSYOkCdsZeC1K1CJ1AiByz7dDuR%2BELLkxxBnuC3ZFLrqym0MhK0SETukxYzR9dir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMf%2FxqKfg63jNllCpDKtwDUNdHvDSK86evFVYb5fzlIm6NESDAPTjanrvFmNL7oproZ8XifPY9hrf2fPpxd4ntzxe0JzROoscWNxdWBR2b6%2FW34rrdmzoLpfebNrqfCXE%2Bs4msO%2Bc%2BUSJNazJJRV1vdFfKmHT0Irc38tK2YLUDNZyEnz2tbCXh2cgKB5jmvvQvdfdVofSesb7Cu0kjuGWKRvUx4gnwlI3%2BE%2FbyGoLSFSso2tyaXpOGAfHCEj6sLz876xdNDRaeXKwEI5ZXrelK5E2fS9kIa59TcrTW%2FoCnp6chahTjYyqeVPqvhMj4w1ocYv6ts3F56FXV62%2FWXeVsJk3KS0EdmKd%2BfLWzQk6oYnYcIFwDEVBZspMRZe6fEQR71Gm%2BmmxNbs6qQXILEumOI74kUVvgk%2FCc7LcTe2VREzF5HXpwy1HYk7KBQWGHOmbiU4LB9eYDpd3TD%2BJUQwHKmeqamTyiYmt%2BnbCV9Z5mRUIlU8V33hIo4AzZ8yUZ5m5CbgomdqpGuTF0wWWV8J74Tr6RBs%2BcU95GYMQmtwgtdTJ0qyiBHjYRjZdkuwOD2Tw4IBUr9A1uXSrM6oDaP2UqQqwIeFa04YbjBMJxDritSRM2T8jG%2FYcjGS9sRD1ned0Cpe15P8pnmYz1tAowrL3ovgY6pgEliGC6pvOuAUIRCDpdZK5W831ewhzxpsi%2FcGZC%2FYX6lqKMNCC7g9uUYnT5URAaCTsVoV%2FnB4grC%2BK78FZUfbh3P1HFABgkyqc6jwYImoiqkugU6W%2B8P%2F4wczjoRJ%2BBryFqzgd%2Fq53zxDzmhpLINo%2FGY4GCJoM4GlaXp2Sy%2Fska%2F42b4LiJ%2FGghxzoNkViETOsFwFCh4Rw0z%2FnWSIPDow2oscOER98L&X-Amz-Signature=d94c4deabbbf32887036820b9aa06a1d40f817da42c5abdd3759474f48927873&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZ32ZFF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEtA2jTR9LGmI3ghyJLFIc1RHlo6nbfxS2fV3S48iBR5AiAsSlqRlA6N867BjEyP%2FNSwZCFngx0O2QVmT1qtH4MVMCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMCMUGEIBv5Qoo2F8pKtwDfiw0jDHgfKegmNitiuIqjIz9uBm7en6vE3FD81gxumGflH1tj4n0emBuKZuUl7sFXI3wWm0KnpPppcNEe7HsCBE91zbdk%2BVnDXHS9OVVCF7Xcy8nItRyZl65iIeL2Lx7xnIpGvGMgWxLlZ3PvQjPEGEDMJwbCRC0xtJqytI6jYWbXfmqKJ6jv%2By3%2FDb%2BMSBFNvwBiCgQRSl2J0GLH5O6%2Fjz8JT%2BuxHxlmkQ5mUdN1wRCaicx4DOrtZ%2F7L%2BNO6sZotqbNy0sjqOYKdVy6IO25GzjnlWKV%2FoQLzqMw%2F8UoFyUpr8hrj0eDBUlLAO4v787%2BiYnNuI9mQx%2BxJwKExNId0UpDT7RDooF6EhCvLsfzFqJqN3szb%2FPLK9CkJXh1x3dvQizpo3GRNwUGo3VglUf9utPWyw45T84AgMj70h7vwet0VoSAymm3Vd3KpEffh2SfhIQiblBMxrvi8mmfHal7YswdVpFeh2dUL1K1uhOCLujHlIvAXuJKLSGCeXQ3aHTv%2Fo0RzHgaxStbzFbncqvLy21LOizOt%2BXarreHn6GxweA6EtJ3L%2FZPGxzDutkBSNJoNcyrgmyO9BUgCHFLFTiHnW78NchxdFkXiXnfoqnASpzFpP1qRxKKeY2gVqkwyr3ovgY6pgFrp2%2BDF3mE7MQAKLRrPShC%2BNKvA13iICbVW2h6%2BHkKJEzOOug3HAHhZnhvtTAePzPpt3pYZsI9gBsme1IUoo4aAgurTA%2Fft1c1zrfauIQOLB%2FpTj1aHAG03%2FLZgyU262LkyGsCTljXcoYa8qB3MOP9jOf%2BoACvHdpSYz7lkUCxqxX5GNcut65VOJ3rvFTlrsGFAOiN8nJStn3hqKG1yGG%2F3tWekxmc&X-Amz-Signature=41a8e9bcfcbfc4c5964782da3706c5ffee3b0ace3475884b66375bf561c71b29&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
