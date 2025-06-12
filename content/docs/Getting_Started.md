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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK772QQN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCMnZiV5Bzx3U9sP91uPoVKAyLCWw9J62N%2FZvXZMBPD0QIgPkGCB81ZVpVbGb5DeKFPNGS%2B6XOaFAUSPNhZdi1pvVEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyGzgt50BPpdn%2FoECrcA03Adlw6SwGyB84LNdIJslgz3P0j0DdoSPG6FcEZhYDBVEvMmJqRC9md6shcgE67FK1FVRCWOJWFY13C%2FK4D4OiPIGz1LZq1PTH6mkioJyjtgmwAYAwQlyq9HRAYxbSZysrQuebA%2BFjpnsGvq8185P50b%2BuGgKXMyhG%2F6IUWaeVTsp389UQXCst%2B%2B4mIe4OiWcQ6mkxkte%2BqmMagOLIoyKlBwjszd56jz%2Bilbn2r74dpTe%2F6s50EC3NyYCbqe0QPgsivmaIeSzDQMEGGE3keal90lEDCAHdvutyGTxj2p7rS5jKNFCcBQj2RuRGtP7qBk%2FjTO1QTl10I2vIN4I%2F7EseKrie8VW848%2BtWO4xmABcVDpIqhluYfVLs51ClYOIIV3KdJSSEl0EL6Qr15qEYSKo09WFyFl3a2sh1lM2xitgHIMxoxmJFizAvvWJ40du7D%2FgwBqITJSLphU02hAhdIMMH%2FRpvP4GgUDB84hsn81yMVMBWhwGYH9NT5cMJnIz6vbX9XVW1ykL17JR4pGOjRfbuvT4ja58rGuV%2FiMAa66jMvz2saiqx9mFjJT4Ecnx4oXoAr%2B%2BxgNCDQi0%2F72SEXWaeLsPq7IbkxPSbwGrvzxEEKgNKp8MFBROduuQRMPPvq8IGOqUBpetHNb8mIFpV0x2bHtJE8L%2BWHjwx9Zc74HI1hiKsWaex%2F9zmWPMfOMcdxmNvkvHWAQIeFtEud9Dos6o3hRqEHJgyuMU%2Fp2cWky1CApNbCWt%2BcnSzZkJZtY93I5sjGH1aRADVr551fcz9lr0foLAzwJB%2F7MKaSyJBf5NvCd4Z8EocVgiK1g0rbZeTWYptq%2BiWjPk8Bn7f8gH%2BjQSI0YdmhqigtIsf&X-Amz-Signature=494cf261f561ea6e687ca049e89c0097d07abcab9aec9495c6d2828cb5ad74b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK772QQN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCMnZiV5Bzx3U9sP91uPoVKAyLCWw9J62N%2FZvXZMBPD0QIgPkGCB81ZVpVbGb5DeKFPNGS%2B6XOaFAUSPNhZdi1pvVEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyGzgt50BPpdn%2FoECrcA03Adlw6SwGyB84LNdIJslgz3P0j0DdoSPG6FcEZhYDBVEvMmJqRC9md6shcgE67FK1FVRCWOJWFY13C%2FK4D4OiPIGz1LZq1PTH6mkioJyjtgmwAYAwQlyq9HRAYxbSZysrQuebA%2BFjpnsGvq8185P50b%2BuGgKXMyhG%2F6IUWaeVTsp389UQXCst%2B%2B4mIe4OiWcQ6mkxkte%2BqmMagOLIoyKlBwjszd56jz%2Bilbn2r74dpTe%2F6s50EC3NyYCbqe0QPgsivmaIeSzDQMEGGE3keal90lEDCAHdvutyGTxj2p7rS5jKNFCcBQj2RuRGtP7qBk%2FjTO1QTl10I2vIN4I%2F7EseKrie8VW848%2BtWO4xmABcVDpIqhluYfVLs51ClYOIIV3KdJSSEl0EL6Qr15qEYSKo09WFyFl3a2sh1lM2xitgHIMxoxmJFizAvvWJ40du7D%2FgwBqITJSLphU02hAhdIMMH%2FRpvP4GgUDB84hsn81yMVMBWhwGYH9NT5cMJnIz6vbX9XVW1ykL17JR4pGOjRfbuvT4ja58rGuV%2FiMAa66jMvz2saiqx9mFjJT4Ecnx4oXoAr%2B%2BxgNCDQi0%2F72SEXWaeLsPq7IbkxPSbwGrvzxEEKgNKp8MFBROduuQRMPPvq8IGOqUBpetHNb8mIFpV0x2bHtJE8L%2BWHjwx9Zc74HI1hiKsWaex%2F9zmWPMfOMcdxmNvkvHWAQIeFtEud9Dos6o3hRqEHJgyuMU%2Fp2cWky1CApNbCWt%2BcnSzZkJZtY93I5sjGH1aRADVr551fcz9lr0foLAzwJB%2F7MKaSyJBf5NvCd4Z8EocVgiK1g0rbZeTWYptq%2BiWjPk8Bn7f8gH%2BjQSI0YdmhqigtIsf&X-Amz-Signature=b825c4a94957de5a97fabe10f5864980ad6beb851bd0c42722dc9441ce13dace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK772QQN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCMnZiV5Bzx3U9sP91uPoVKAyLCWw9J62N%2FZvXZMBPD0QIgPkGCB81ZVpVbGb5DeKFPNGS%2B6XOaFAUSPNhZdi1pvVEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyGzgt50BPpdn%2FoECrcA03Adlw6SwGyB84LNdIJslgz3P0j0DdoSPG6FcEZhYDBVEvMmJqRC9md6shcgE67FK1FVRCWOJWFY13C%2FK4D4OiPIGz1LZq1PTH6mkioJyjtgmwAYAwQlyq9HRAYxbSZysrQuebA%2BFjpnsGvq8185P50b%2BuGgKXMyhG%2F6IUWaeVTsp389UQXCst%2B%2B4mIe4OiWcQ6mkxkte%2BqmMagOLIoyKlBwjszd56jz%2Bilbn2r74dpTe%2F6s50EC3NyYCbqe0QPgsivmaIeSzDQMEGGE3keal90lEDCAHdvutyGTxj2p7rS5jKNFCcBQj2RuRGtP7qBk%2FjTO1QTl10I2vIN4I%2F7EseKrie8VW848%2BtWO4xmABcVDpIqhluYfVLs51ClYOIIV3KdJSSEl0EL6Qr15qEYSKo09WFyFl3a2sh1lM2xitgHIMxoxmJFizAvvWJ40du7D%2FgwBqITJSLphU02hAhdIMMH%2FRpvP4GgUDB84hsn81yMVMBWhwGYH9NT5cMJnIz6vbX9XVW1ykL17JR4pGOjRfbuvT4ja58rGuV%2FiMAa66jMvz2saiqx9mFjJT4Ecnx4oXoAr%2B%2BxgNCDQi0%2F72SEXWaeLsPq7IbkxPSbwGrvzxEEKgNKp8MFBROduuQRMPPvq8IGOqUBpetHNb8mIFpV0x2bHtJE8L%2BWHjwx9Zc74HI1hiKsWaex%2F9zmWPMfOMcdxmNvkvHWAQIeFtEud9Dos6o3hRqEHJgyuMU%2Fp2cWky1CApNbCWt%2BcnSzZkJZtY93I5sjGH1aRADVr551fcz9lr0foLAzwJB%2F7MKaSyJBf5NvCd4Z8EocVgiK1g0rbZeTWYptq%2BiWjPk8Bn7f8gH%2BjQSI0YdmhqigtIsf&X-Amz-Signature=588e41b1acab39273a8dbaae3cbea7b32aeae7b205792f1b55ca6a66c5d7b147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHOQU5B%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCla%2BvVL9D5fz26%2FLFVGjCi8jFTNmduOXocemhqJrrKJgIhAJFA47fEm1ralWIQxyd7XTn50hoOGIXt7wWK8n%2FuLXV3KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwotnlQWV%2BighMecm0q3ANuqgDCCB%2BoV2o4Cm6LwCgcdV4yjdQRbM5qUNtoMkAjJ2go9vXvENBKLytzKExgal%2BmYs0Pbiyg4V2REl2G6F7BDyOkBp2Y4rcoF1FPwk2MaxsEIOubWoK4%2BlaVmhGuBrg1CATvJfvjDutip8HUOaCWy%2Fzbxv2jJR2ZrEJGf%2FuxBUuzCTmEyB1JnTcBuRG21t1CRi3V78exvjYetByMZ6S6dJc2oQaM28XCSWA3LJSXsg1zsPuIjcSYYZyfzixSypoxN3kUhLB7Uc2xCNwWNatfQe%2FebBEONzCBaIxgaJM1gJJji7CV%2F%2Frv2PaiZI%2BgJsIHyIOGEu%2BTXKAGFvabaqo8QERuPo4YMONoHsrRKQpdb3im%2FjINKP2y5zOZODTpFcROvWRt2yPEaIeR1VnaDeHbCclC43l03AtDZqg8FYTP%2Ftw7EytTU4BcIvssN0UJu%2Fg%2B%2FNKQFO5Tu1ddvkOjmtwM%2BGJJXXInu%2BDXChxEypVNYa2%2ByJlKXaMWmNWusvxEj7bRn0LC5kEGFm4aivDOndMPqGpriIqCUgK30UbXjzeFTZahpoXYysQ0mRC342BCXA7l64HUJ2SVj9sBJxOvffFCTzCh%2Bvv%2Bi2G02Zr5nyjXc%2Bu%2B1LmkdwRsJloVVjDWrKvCBjqkAYk9Y%2F3lfqMdfizV9J0qlhzCdfGHw1L5sAIxhedeO5bYwcg3TamFNjl0g70xBNDekD%2BaOK%2FJhsRdQ1JZYESUlrk579wY%2FSBjJXoTQgjCj7L%2FwLiI3l2dCafj%2BwwC1pEDuQeGAKkE1BG%2BM%2F9yj%2Bcvvgqk359NswBLYmu2bhOb9CxIsWDRnfZjQGj7uVWK6MlFr7JmeJHKUjIuOj2P6XBAI8Nw6FS5&X-Amz-Signature=f655b41113fcb03222ebba27175cd58d4970e6a9c43bbe3128b9f571fda42fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX364YVX%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIE1FbBNrzsd2APP%2FFkcuruEhULqzPd7qw8pci2jMpXaAAiEAwf6QgykQMB6RPUDQ5DjtYXDccYwnivw%2BW8OJ2lxuypYqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiw%2BiFH4Hr%2BL8dIAircA%2FexW7yvtj8ENt0N5nrJbXpp3p%2FO6FB%2Bf%2FWKZQQ8efO4sfXyUE27qiC9drl3rkzCujyDWC4adzUFIWLDg2K1DiPw1qmg5IbreWQbbQLd2%2B9rjlHFg0ZcUU1y7349W7yf2YeYYxXyBeANNaUWfsMRxOVNRuVG98klFRDN336OsFi6c1LiprE03wE8canzb0q1fLDzZnzAPqwywbek2mZ%2B4RDVADdELvISAba%2Bl5HONg0O6oUpi6GUGpv9vkpq0yGmXe9PB3r60zVr9TJsFP9GWgiI7MuwCjXENwNZrbW1ywocdqrpgFAmzqMoRAhNRQ4Io3U4W8ZKP%2FSsiQucx8uX9iKXlqTnGf8OKuvs38wsn2uDERbQ5UI%2FVwkZ7NX5qTwgZMkpjTln9RNhHGoGrJDF6Z76tTqSmQeG%2F73mnOACQBy%2BdSZ41xg47RJg%2FRbDie782zFgptMqg2MC32Gr%2BqhITsaXQAmb%2F7E6tn3CizPaclQ2IYsBh9fXdt2e8pBdQJjpIam7V79F7SqMIM9gvKXeFERI2qKvmayz7GPvQqsNhKS9KUKREPrNAvNfsVL%2FS1sZp8L3OeTp3Q9qOuYJ9JvZo4z3Whhb2ti%2BvJaDjA637QtCz7jMg%2BybhrjiuLDHMJHOq8IGOqUB%2BkcFiw%2BBMSBGDfIip2Qs1WyTnM6nqoJmj7b6L8zhvGcr1fN34Aan6EPtvs36HHw0zWAADFql%2Fj%2Bvaj8N03fj1UVGabtwRxp%2FE6O1zCNoDxH0p7IumsHLh2ek2agQook0kVFtKg5MGSJ1z2%2FFd1IrRCgc3CWmcrLuBb7oEBnKD29UYscASL0nDE6cQF1HF8TVKmC%2BpMrVc381f8%2BGqmrDCog0V%2BA%2F&X-Amz-Signature=6f0f3ce463954b650d1cc859fa8a464607a40cded9bc452d4dc953ece7a85c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK772QQN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCMnZiV5Bzx3U9sP91uPoVKAyLCWw9J62N%2FZvXZMBPD0QIgPkGCB81ZVpVbGb5DeKFPNGS%2B6XOaFAUSPNhZdi1pvVEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyGzgt50BPpdn%2FoECrcA03Adlw6SwGyB84LNdIJslgz3P0j0DdoSPG6FcEZhYDBVEvMmJqRC9md6shcgE67FK1FVRCWOJWFY13C%2FK4D4OiPIGz1LZq1PTH6mkioJyjtgmwAYAwQlyq9HRAYxbSZysrQuebA%2BFjpnsGvq8185P50b%2BuGgKXMyhG%2F6IUWaeVTsp389UQXCst%2B%2B4mIe4OiWcQ6mkxkte%2BqmMagOLIoyKlBwjszd56jz%2Bilbn2r74dpTe%2F6s50EC3NyYCbqe0QPgsivmaIeSzDQMEGGE3keal90lEDCAHdvutyGTxj2p7rS5jKNFCcBQj2RuRGtP7qBk%2FjTO1QTl10I2vIN4I%2F7EseKrie8VW848%2BtWO4xmABcVDpIqhluYfVLs51ClYOIIV3KdJSSEl0EL6Qr15qEYSKo09WFyFl3a2sh1lM2xitgHIMxoxmJFizAvvWJ40du7D%2FgwBqITJSLphU02hAhdIMMH%2FRpvP4GgUDB84hsn81yMVMBWhwGYH9NT5cMJnIz6vbX9XVW1ykL17JR4pGOjRfbuvT4ja58rGuV%2FiMAa66jMvz2saiqx9mFjJT4Ecnx4oXoAr%2B%2BxgNCDQi0%2F72SEXWaeLsPq7IbkxPSbwGrvzxEEKgNKp8MFBROduuQRMPPvq8IGOqUBpetHNb8mIFpV0x2bHtJE8L%2BWHjwx9Zc74HI1hiKsWaex%2F9zmWPMfOMcdxmNvkvHWAQIeFtEud9Dos6o3hRqEHJgyuMU%2Fp2cWky1CApNbCWt%2BcnSzZkJZtY93I5sjGH1aRADVr551fcz9lr0foLAzwJB%2F7MKaSyJBf5NvCd4Z8EocVgiK1g0rbZeTWYptq%2BiWjPk8Bn7f8gH%2BjQSI0YdmhqigtIsf&X-Amz-Signature=5587e60e723f042ce56bc01210f3adbe054f6b5650021700d183a1847fd03722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
