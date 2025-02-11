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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQCJM6B%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD58GE%2BCnh6FFwWiO34aKSz5ZNYzjbJdbwUMa2wAkdZkgIgOo5flQGQVz7MiElkEUt%2FhF9fmvFY8KjY%2FU0ioSn525QqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhvLDHQRRsVqFZijCrcAzPiIQmB%2FsDd%2Ba%2FluBhenxwMlDM1rbM9rIyUNqhvlzc4dUYdEXZBnk69V3p%2BklmEcFey2WDM9DBCyztOLV3BbPV75FhwSxoQMmsnLVDQWlAvtqnwNa47gGrqPbCIZld4C8PoH14CiL%2F50iuFGF6es%2FtCZAm7p8XEUNrNdlJp5B6DntX513V0%2FGUfWxu24nk0MtmA1nFi17YZc8N9FSAgNOQT6INcMPtNw2T5Zg3NvmWC8%2FPXn2I03GQqH2G91DjS%2FnWkaUomHHEj5CIxZqbSsgK4YTFZhNi7w5Zty47FNTJwgqrHAnlMQZ56k1%2Fkoxgg3VUHPhpITgHONhem4n7PBY6cd2SLvU9CAMFsKsrNC6iQJzblG63wR2uPqnF31AhcO5gBco%2FcXG3M7l0XFlzm780LF0XTglBirxEuEwmDR%2FLDx8pORs3t8vyY7BeEJwR4sLEtmwYCI%2B1QcJfz%2Bw3XjcrolP82VulkumwpUW8rNtc2w1RH9rkieEPjAqHLRpmjoq8tiip%2Bx0DqmQlUoFPUUw75zU6Mhd2YwDkr9pEUA6S6o9joLKCNd1j1EHqNN5uuEOwT%2Bhmc2pGN0FvzhwW56XEWnTM%2FcgAu98mO029tu53eIic02eOIca38JmYNMPTbqr0GOqUBjXGUKXVGSbG5hsrdrtn9sfDKaGLGCY7Y8ZVhJIL0oja4T69hecWWDGzhjedh1AWkFET9IPPL%2Bmp9rmrdr2X7aMIZAVIuBiUxWfP7wtGrHT4kzBSWZQpa0CoiR%2BoVExOG%2BvSbexAoUZb9NE5CTRvgBAbbksjAGtJ2QOYQiPUncb0EmzFAhrtk9TvBo1L6dC1l6JagZ6dRY%2ByxfvcsAKwUD%2F03Gohs&X-Amz-Signature=47b24f5c36fb58cbcaaaed45bee1e89c91aca94e6d4bc8ea501dc094357665df&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQCJM6B%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD58GE%2BCnh6FFwWiO34aKSz5ZNYzjbJdbwUMa2wAkdZkgIgOo5flQGQVz7MiElkEUt%2FhF9fmvFY8KjY%2FU0ioSn525QqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhvLDHQRRsVqFZijCrcAzPiIQmB%2FsDd%2Ba%2FluBhenxwMlDM1rbM9rIyUNqhvlzc4dUYdEXZBnk69V3p%2BklmEcFey2WDM9DBCyztOLV3BbPV75FhwSxoQMmsnLVDQWlAvtqnwNa47gGrqPbCIZld4C8PoH14CiL%2F50iuFGF6es%2FtCZAm7p8XEUNrNdlJp5B6DntX513V0%2FGUfWxu24nk0MtmA1nFi17YZc8N9FSAgNOQT6INcMPtNw2T5Zg3NvmWC8%2FPXn2I03GQqH2G91DjS%2FnWkaUomHHEj5CIxZqbSsgK4YTFZhNi7w5Zty47FNTJwgqrHAnlMQZ56k1%2Fkoxgg3VUHPhpITgHONhem4n7PBY6cd2SLvU9CAMFsKsrNC6iQJzblG63wR2uPqnF31AhcO5gBco%2FcXG3M7l0XFlzm780LF0XTglBirxEuEwmDR%2FLDx8pORs3t8vyY7BeEJwR4sLEtmwYCI%2B1QcJfz%2Bw3XjcrolP82VulkumwpUW8rNtc2w1RH9rkieEPjAqHLRpmjoq8tiip%2Bx0DqmQlUoFPUUw75zU6Mhd2YwDkr9pEUA6S6o9joLKCNd1j1EHqNN5uuEOwT%2Bhmc2pGN0FvzhwW56XEWnTM%2FcgAu98mO029tu53eIic02eOIca38JmYNMPTbqr0GOqUBjXGUKXVGSbG5hsrdrtn9sfDKaGLGCY7Y8ZVhJIL0oja4T69hecWWDGzhjedh1AWkFET9IPPL%2Bmp9rmrdr2X7aMIZAVIuBiUxWfP7wtGrHT4kzBSWZQpa0CoiR%2BoVExOG%2BvSbexAoUZb9NE5CTRvgBAbbksjAGtJ2QOYQiPUncb0EmzFAhrtk9TvBo1L6dC1l6JagZ6dRY%2ByxfvcsAKwUD%2F03Gohs&X-Amz-Signature=ab48fde882f86cf476f03bc8a131165465eb43026a141fcb31306ed9d8be47c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTGMORW%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKNjv00vq8IOMw53a%2BbevHqqsz6wQ%2F%2FOOT3tx5kqxQ7AiEA8hI84zIIjs2iT%2FsI23HmeuAMqz0yxyTddWA2BDrM7t8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM34HVp5fQzKY5Y%2BdCrcA9CJG8GXZcA3%2F2EvQXAb%2BAdBwa2QJamREOwgdmzTvobzuDboeuAwFR46EnRnvWgG0K1fey1oDdzazbw4tzBpZeBssbvsiEZ6qz%2FEH36Hee2bQlwEhym8VG%2BiTXwSwzhnCLfnPxuEnSY5yqNlYJB2aZz%2BYt1Qo%2B%2FvH%2FmU2364ZxvtERq1O6geVcOn3M6Qum1imTHzxNUXPhp9CUzV%2FzsR6RdK5Skw990m6g2The4W9%2FsXV6eui%2BFhihtfWHUmJ9nOvWLFxJPRyOlOh7fPFE8ItC5dvP4KqI3mPfAcQm8y2KFVqoPaUV9ern%2F9uCKK%2B8rBIvKDQgUUE9eH02zzCPcKU65D9hBWQ%2BEqMUYnFq7jFDkoSfMXO0OYBHg4CrdmM4w0IEqm7KztJJiecgwK3n1z3plFPDvbFHrKBbj%2BeAUT3oENTk%2F9zk3PCvp1L1VxmPkPl8IBEmy%2BMbJxHelcgzenXTbxe22%2BAn3951K%2BRpE8xz%2F3G6aoJqxeEDCYsBM%2FnpLN4GjTmr3SnR2Hxs7XPttnjBHGeI%2FC5M69xMzMYCuMoPG%2BnYP4lqhDRNLk9vg%2BAILe3Ms8VGgnXXwamBmzbatCssKjos2hSN5rnOOz8vEI8bCU%2FKCIzeMUbQrgF%2BguMOncqr0GOqUB1pTuGOIoBkuzsbLZIJ%2B%2Bo6ROFDQLnDp2M9jYdn2NdduXghH0Ckvzm92vFew6wMCWXb6DE%2BJo4s0nh0DD9eafjjwK1hAhn0JyoD7VbLdanmhR611h%2BJGZhfxJxE1dcTpLhzrGTmSkdUdZdg6svN3zQASJkyWWHp8dvGXfIlMn6G%2BHDZD8Ec0rmZim834vveUSVDuqs2KfliiLBRwgjOAe9aKqwotP&X-Amz-Signature=9f1ee1046767333ca20bddcdb008a48619b784f2170367584f8397eb0b9e4896&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T5SLSPX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXglR9WknalA%2BzIgPsTZmv5pIW1CyFqsED5sbqjFatXAIhANsvtxpPYmlxWlt55AWLRZZtgtBBfMlcweeVIS9FTE04KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpaQMVQR2PGrU2o9oq3APlvy8v3p0aSCBq7DJUleqhOz0amX68iLT5H1b9FmTWQ9Gg9Xr35eRZ1MU0035FHqGjpckVuMQyIuoJDURD4O0UT%2B5nWS3VZG3tmpMs2xeL3%2ByY449aYbdUUpl4HLtPNZv5zyQAU2g%2FfGunKp83JiuJuFy%2BM2yP9aByah6ap5gJOGml%2BtaVluxBxmmy3m%2F49xAjnkoCguqE%2FN7eQuws1VFWDwTcKLXATAQRI08Uns%2BAqthQ8nrUzBhHGsrwpQBeQudZapvYdf%2BvQybcRsZN%2B5PKwBW4dBrKhZg7OccFI64WsP0pBochXXzzEFN%2BchnKpuiGiKZhbD0Jt01%2FnxnHInK9QvOxlV7fzmx0a3mkl5n12gDX9%2FDSTJO64RhWIjewfKzC2qZF4L57%2FSMtxZF0cwx%2Ft7h6kSYj%2FQuTliR%2FThtTwmB9Wn4sOVjHxh51jQNyVx8hZ07m5TQQ1T8uxZqh0inZ02NViri%2BnDlxuTwQZz%2BUK8FmluDojS9IlBCfOA0y73rqzTrf0w3N2LPPuPJDE3l1tTBB3pZ3oav93y3x4N%2BjTFTyrIBUlvrUGSjd2lf6DaccUCgbT42DdwkI%2BTdDcqe5O2y2ByAbnCK6kD%2BtATJ9%2F6Dw15RGvUCYnPzabDCD3Kq9BjqkAbFsrk12KBce1Xi1hsaDVxh7kJQvR3Rp0cdTwN9Y0anriHD5F%2BXU0bIg63SWNk2YkU92L9qGZo%2B9NYv%2FJzDXxSce%2FI9A7VC4n9vdPHZ3DBaIMWHQ6ftKd2NDs7GREYQaVGjHfdXMNFVhKFdDVFD3l3ZxqvDuECvq8C9ckOFLyjEC2sAxWu5UxP4mjeGJobf28zT6Dg3GcQ2tCDS3wgEp53EB5%2FR8&X-Amz-Signature=1644b93166daa3b13d272d5a7a63db1796dcd6dd03db2b84d19c430f9f79c7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQCJM6B%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD58GE%2BCnh6FFwWiO34aKSz5ZNYzjbJdbwUMa2wAkdZkgIgOo5flQGQVz7MiElkEUt%2FhF9fmvFY8KjY%2FU0ioSn525QqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhvLDHQRRsVqFZijCrcAzPiIQmB%2FsDd%2Ba%2FluBhenxwMlDM1rbM9rIyUNqhvlzc4dUYdEXZBnk69V3p%2BklmEcFey2WDM9DBCyztOLV3BbPV75FhwSxoQMmsnLVDQWlAvtqnwNa47gGrqPbCIZld4C8PoH14CiL%2F50iuFGF6es%2FtCZAm7p8XEUNrNdlJp5B6DntX513V0%2FGUfWxu24nk0MtmA1nFi17YZc8N9FSAgNOQT6INcMPtNw2T5Zg3NvmWC8%2FPXn2I03GQqH2G91DjS%2FnWkaUomHHEj5CIxZqbSsgK4YTFZhNi7w5Zty47FNTJwgqrHAnlMQZ56k1%2Fkoxgg3VUHPhpITgHONhem4n7PBY6cd2SLvU9CAMFsKsrNC6iQJzblG63wR2uPqnF31AhcO5gBco%2FcXG3M7l0XFlzm780LF0XTglBirxEuEwmDR%2FLDx8pORs3t8vyY7BeEJwR4sLEtmwYCI%2B1QcJfz%2Bw3XjcrolP82VulkumwpUW8rNtc2w1RH9rkieEPjAqHLRpmjoq8tiip%2Bx0DqmQlUoFPUUw75zU6Mhd2YwDkr9pEUA6S6o9joLKCNd1j1EHqNN5uuEOwT%2Bhmc2pGN0FvzhwW56XEWnTM%2FcgAu98mO029tu53eIic02eOIca38JmYNMPTbqr0GOqUBjXGUKXVGSbG5hsrdrtn9sfDKaGLGCY7Y8ZVhJIL0oja4T69hecWWDGzhjedh1AWkFET9IPPL%2Bmp9rmrdr2X7aMIZAVIuBiUxWfP7wtGrHT4kzBSWZQpa0CoiR%2BoVExOG%2BvSbexAoUZb9NE5CTRvgBAbbksjAGtJ2QOYQiPUncb0EmzFAhrtk9TvBo1L6dC1l6JagZ6dRY%2ByxfvcsAKwUD%2F03Gohs&X-Amz-Signature=2c56b33af4e9eabe84c265094f864e3f93d1fa11eba2dd08636883aa75aa2afc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
