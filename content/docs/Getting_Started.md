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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYW7B3NX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXHpQt2%2BCWksPVkcgVBfbJT21uA1KE4u18k%2BfrHu9s6QIgHxwZ%2FYCC7bTB41MQ9mdKnixGWCPy49ukTffx7UK98Eoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDkaXUT%2FEnTtASIEtircA0vIIM%2FPrzgTd9fH6HEF2hUnPCG%2BLWlcrhQKiauGc%2FK8VUtOhL4%2FH6TVxRRg3WrZ6gPPLndPO8S2xTR54x2IlG5JdLE4IWHXEFFxKnv9Ryqn5wE8Z5p7tLt5lx6xEUE1fpQw9k1UEjl6%2FKf9GJYLHSXPU4PuauxXQNInnw%2FxIEVuh2a5FURVMxNSUG4r6LHQVpWFNIRkVwtp2xR2BblM22vkaJVDXBFAkJrLa0ChS3Cvx%2FHkYLJxJAl9iaivovTiZa6aCbYJ1tC9jOJ4DLnXEleI2FZtfDFq5wkI8ueq0dnQRkllXwxqz%2B3CRNOjrE5l%2B%2BO68RjSB4hTYmv9V4yt0M96jF3Th%2BT20i02xaymiEr9l4YiufEfIp4n5apA99o1UmlFTaMcIAstmVZrNn68tvdLOblorzFxh1SU0EOC5maDTlvBXzCZzxW%2B%2F9ktpiuRiPj%2FngmPKmN1wNyqL8YzoBFm0kxd%2BquXzR8KgczNIHn2rw%2Btm8MdE0ATZj0d2CRt3XQfQeo90NmAc4Ugnhnp1B%2FdaTxDDgPIgu0pzqfV3Hie0tTg0OgnSEV92ePYKBS6Uu%2ByLXU5i%2BfIy7W7r0b1rMyIJWAB04YAIFCAIYUXRSwaBsUMzUpSyskmKA3SMKuv2cMGOqUBsJkDLolGHIXEu3qseOrgDddg%2BirqZ893TRM3WNzE2%2FOl0ffY36rPqfxdcKjE5UOcLO7NusCSXj%2B4JRTXCcvz0tgff35Rh%2BTVHUGorGjLEOwP0%2F9O3IqtSHZqEmaO%2Bs4RG4EI3ffilSPTPkSIAIH4DyR4NnE6VVeroAg2YAtOVM%2BgmqfGIWAmJdsO2SOJXmGdCEFIUNfogK2faoxN93yfHJZzd2mq&X-Amz-Signature=04ac4f98bbb2b008f59ac0eaf8b921de80df15d64c30e65fbb6e7c9c12b42ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYW7B3NX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXHpQt2%2BCWksPVkcgVBfbJT21uA1KE4u18k%2BfrHu9s6QIgHxwZ%2FYCC7bTB41MQ9mdKnixGWCPy49ukTffx7UK98Eoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDkaXUT%2FEnTtASIEtircA0vIIM%2FPrzgTd9fH6HEF2hUnPCG%2BLWlcrhQKiauGc%2FK8VUtOhL4%2FH6TVxRRg3WrZ6gPPLndPO8S2xTR54x2IlG5JdLE4IWHXEFFxKnv9Ryqn5wE8Z5p7tLt5lx6xEUE1fpQw9k1UEjl6%2FKf9GJYLHSXPU4PuauxXQNInnw%2FxIEVuh2a5FURVMxNSUG4r6LHQVpWFNIRkVwtp2xR2BblM22vkaJVDXBFAkJrLa0ChS3Cvx%2FHkYLJxJAl9iaivovTiZa6aCbYJ1tC9jOJ4DLnXEleI2FZtfDFq5wkI8ueq0dnQRkllXwxqz%2B3CRNOjrE5l%2B%2BO68RjSB4hTYmv9V4yt0M96jF3Th%2BT20i02xaymiEr9l4YiufEfIp4n5apA99o1UmlFTaMcIAstmVZrNn68tvdLOblorzFxh1SU0EOC5maDTlvBXzCZzxW%2B%2F9ktpiuRiPj%2FngmPKmN1wNyqL8YzoBFm0kxd%2BquXzR8KgczNIHn2rw%2Btm8MdE0ATZj0d2CRt3XQfQeo90NmAc4Ugnhnp1B%2FdaTxDDgPIgu0pzqfV3Hie0tTg0OgnSEV92ePYKBS6Uu%2ByLXU5i%2BfIy7W7r0b1rMyIJWAB04YAIFCAIYUXRSwaBsUMzUpSyskmKA3SMKuv2cMGOqUBsJkDLolGHIXEu3qseOrgDddg%2BirqZ893TRM3WNzE2%2FOl0ffY36rPqfxdcKjE5UOcLO7NusCSXj%2B4JRTXCcvz0tgff35Rh%2BTVHUGorGjLEOwP0%2F9O3IqtSHZqEmaO%2Bs4RG4EI3ffilSPTPkSIAIH4DyR4NnE6VVeroAg2YAtOVM%2BgmqfGIWAmJdsO2SOJXmGdCEFIUNfogK2faoxN93yfHJZzd2mq&X-Amz-Signature=025b5d6b4c745f5267dba70a58abb6906da4e9e3eeaf5fd884bce5428fa8c482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYW7B3NX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXHpQt2%2BCWksPVkcgVBfbJT21uA1KE4u18k%2BfrHu9s6QIgHxwZ%2FYCC7bTB41MQ9mdKnixGWCPy49ukTffx7UK98Eoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDkaXUT%2FEnTtASIEtircA0vIIM%2FPrzgTd9fH6HEF2hUnPCG%2BLWlcrhQKiauGc%2FK8VUtOhL4%2FH6TVxRRg3WrZ6gPPLndPO8S2xTR54x2IlG5JdLE4IWHXEFFxKnv9Ryqn5wE8Z5p7tLt5lx6xEUE1fpQw9k1UEjl6%2FKf9GJYLHSXPU4PuauxXQNInnw%2FxIEVuh2a5FURVMxNSUG4r6LHQVpWFNIRkVwtp2xR2BblM22vkaJVDXBFAkJrLa0ChS3Cvx%2FHkYLJxJAl9iaivovTiZa6aCbYJ1tC9jOJ4DLnXEleI2FZtfDFq5wkI8ueq0dnQRkllXwxqz%2B3CRNOjrE5l%2B%2BO68RjSB4hTYmv9V4yt0M96jF3Th%2BT20i02xaymiEr9l4YiufEfIp4n5apA99o1UmlFTaMcIAstmVZrNn68tvdLOblorzFxh1SU0EOC5maDTlvBXzCZzxW%2B%2F9ktpiuRiPj%2FngmPKmN1wNyqL8YzoBFm0kxd%2BquXzR8KgczNIHn2rw%2Btm8MdE0ATZj0d2CRt3XQfQeo90NmAc4Ugnhnp1B%2FdaTxDDgPIgu0pzqfV3Hie0tTg0OgnSEV92ePYKBS6Uu%2ByLXU5i%2BfIy7W7r0b1rMyIJWAB04YAIFCAIYUXRSwaBsUMzUpSyskmKA3SMKuv2cMGOqUBsJkDLolGHIXEu3qseOrgDddg%2BirqZ893TRM3WNzE2%2FOl0ffY36rPqfxdcKjE5UOcLO7NusCSXj%2B4JRTXCcvz0tgff35Rh%2BTVHUGorGjLEOwP0%2F9O3IqtSHZqEmaO%2Bs4RG4EI3ffilSPTPkSIAIH4DyR4NnE6VVeroAg2YAtOVM%2BgmqfGIWAmJdsO2SOJXmGdCEFIUNfogK2faoxN93yfHJZzd2mq&X-Amz-Signature=dc07ef78a432e3f019fae003a7e23702f0d9df9d0bdc82a8e5a6be7e884846e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZR5RTXS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCqf5rAwQhPCDaop6vh7%2BDNJaHPrSz%2BItaWr449e%2B1dwAIgfFczalo%2FzLJ9sLUUtJoOEwd%2Bent24rftPt80f%2FAAyyUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDONJwtd%2BLV%2FVGNfpnSrcAydXOH4KJwMsan9x6stJrBMvpFt9FOnLyDU1WCJplbNUE1LDpgvPj95A5Z85WNH133UIgkuFXn62TEMOLckC9lt6B3J2oWZrRP6ue3GYLlvF2vfLDkFt80dOOixGvQQHmmgu35DHlXWEvuPX2OOgKt4CoscSMKKF9tRQuq%2FrDdJ%2BByGgemtgNX7Lj1Q6fPqHdOexPu%2FqveMhwNuuR5nYqb%2BRDTH5CToLqhJ66l2nw%2Bv81WA1VZlyF43dCmDk5dxIQNtWx4ULRagyV8nXTJC3wNWd%2F%2Ft8lj2DOFqVippBhIumc3U7NX9W%2FKL2p46QJSRuBwW8QhAw5ta7tDldriFuS7QnzLj7Re52Ic%2Bw2KCvfjMDVOPisjL3CenRg5AXgKvEJ5nM%2FP69p2gd6YL5VkWyMJUwRYhZ83O7EG%2Bh%2FaMZKgA9I8FFb2m665XwDsfYt8hslr4A7lJGqaIdsjVgyo9qIFjqYmuZSJGItqLC0fXxeS9cBjwAR3hPj6bCtioWhmJTT%2FmcwDbEPMDcvJ4XAI6SP0XfUjfCjx9GOd9dJ%2F4ZJZXBw98Kpx%2FCFsDLEZwHjD0pdjhH1QuB4EL9pVipEP5mUNCsC%2B6ciXm1p1VKS%2Bh%2FL5DMZ9exicVU7WJuvRvMMJiu2cMGOqUBeMxe5D5KGLav%2FMWYbkFmcVZ4zevCD4yNjRvikC0PU0ULL%2FvKjCaaoCAHKgb7Kv8L1GEO5%2FheJK81Oplo9VSsISY80M0i%2FBtgdvS%2FyY%2Flx%2BcC4YNMDHOFPu29OCx7ZlS2m7Df%2FA8xsxHmhA8oGbYT%2B9CHlXG%2BvyfsOc3i7RqYzODkvHE%2BpHchXeis1XaZCl5A%2FOB1WHl4bjV6GEBMal4J3z%2B96bEE&X-Amz-Signature=b2cc891c2b967f9b0a96c0de3a32aa89aae208384f05388d9934c3d05589e78d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE3EYX7W%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCID93adVp4txYp2WRT2yoWtHr6toz9QHff7QFWf8FOPjQAiEAr45OaRkEOW5f9tRCbGw5zl93zJN6Z5zJdRgu1yShUEMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPCADuaUHg1PesFgnCrcAy1ADTuntQZLt2CTsqNUAQWROc2UlCzkIsbYvjaespOVvy8DpQI7dKNPCZbT12KJTaqGONeNUnmxB0q5pozGopkT5lQm399%2FnwXifxauTSYZVFTkAFxh15MwWkn%2FatQvmoJMr2H9dQLMCP%2FFkIFbQdkB2fv95vAaJfIq1YgC4QjftD15%2Fqj5U3fWQb9VChGRHAt18fQ4YpcqpiePnNNCM%2Bbv5V%2F2lEn264gRpCBIiOCfpAPdk4lL7gsheftsT1n2gHWVDNwZL3pjCJGZlalQSKeAHmp%2FOvh2B2bLkg2WMgTPlyClcNBZSbPMmcurN2xbruOk8WKUWxZ5eCkf0P5rVp%2BS1mYAxJlmD6%2F8Y%2Bl5rFre8xsupvtS1gfwJN2hWDgHinoEfCOVl90NyVQUSeq3B0B3OjRSIJgXHa8%2FnaBHqzuYFGrwwhD%2B0zCeLJGCbCfo3oY3WNISR%2FeyNAiFboCKgAsJHMxzT2hLdjNku1YRTJAxrJZAlzGWY7VmvyLg2oTpjC3ph8a%2Fj2UZG8X7DgluOcyUuTOcyg6nqc1ctqtecCCS26mebKMGAM%2FLzzgtqbRM26wiUfUh6LO%2BRpT4I2AUA6NJt03iGnvJpdkLPoQllYI5%2BIgI5W0uyLZjguo%2BMJev2cMGOqUB1yVcwmi%2BU2ZX4eIlctnt7L72G7qkTuO8H4NohD%2BCryxEDcgoLw0A6diA8KOC%2BmyBY8M3iEK2PEKbZ4Y691%2BhBxrxmFfyG1N2LwH8FOfvzsdqkLZ89fowUImOc5QJbqejMunX7ye3IJ1L1eb47Eas159sd75iz1gTJmdJeIJAMmUtZsZN9MRcVc%2F2eKn%2Fy510zZ5%2ByoCnUwv9mim7WVtfczTnZLe0&X-Amz-Signature=0b8f24d96e4f6fb9d521a8bdf07e6fad11d327324cf8f918cbf8ae6e2f1f5c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYW7B3NX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXHpQt2%2BCWksPVkcgVBfbJT21uA1KE4u18k%2BfrHu9s6QIgHxwZ%2FYCC7bTB41MQ9mdKnixGWCPy49ukTffx7UK98Eoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDkaXUT%2FEnTtASIEtircA0vIIM%2FPrzgTd9fH6HEF2hUnPCG%2BLWlcrhQKiauGc%2FK8VUtOhL4%2FH6TVxRRg3WrZ6gPPLndPO8S2xTR54x2IlG5JdLE4IWHXEFFxKnv9Ryqn5wE8Z5p7tLt5lx6xEUE1fpQw9k1UEjl6%2FKf9GJYLHSXPU4PuauxXQNInnw%2FxIEVuh2a5FURVMxNSUG4r6LHQVpWFNIRkVwtp2xR2BblM22vkaJVDXBFAkJrLa0ChS3Cvx%2FHkYLJxJAl9iaivovTiZa6aCbYJ1tC9jOJ4DLnXEleI2FZtfDFq5wkI8ueq0dnQRkllXwxqz%2B3CRNOjrE5l%2B%2BO68RjSB4hTYmv9V4yt0M96jF3Th%2BT20i02xaymiEr9l4YiufEfIp4n5apA99o1UmlFTaMcIAstmVZrNn68tvdLOblorzFxh1SU0EOC5maDTlvBXzCZzxW%2B%2F9ktpiuRiPj%2FngmPKmN1wNyqL8YzoBFm0kxd%2BquXzR8KgczNIHn2rw%2Btm8MdE0ATZj0d2CRt3XQfQeo90NmAc4Ugnhnp1B%2FdaTxDDgPIgu0pzqfV3Hie0tTg0OgnSEV92ePYKBS6Uu%2ByLXU5i%2BfIy7W7r0b1rMyIJWAB04YAIFCAIYUXRSwaBsUMzUpSyskmKA3SMKuv2cMGOqUBsJkDLolGHIXEu3qseOrgDddg%2BirqZ893TRM3WNzE2%2FOl0ffY36rPqfxdcKjE5UOcLO7NusCSXj%2B4JRTXCcvz0tgff35Rh%2BTVHUGorGjLEOwP0%2F9O3IqtSHZqEmaO%2Bs4RG4EI3ffilSPTPkSIAIH4DyR4NnE6VVeroAg2YAtOVM%2BgmqfGIWAmJdsO2SOJXmGdCEFIUNfogK2faoxN93yfHJZzd2mq&X-Amz-Signature=0f7fa2d7ae87b4a9597a7bbe1ffe8eb3c2c50e5dbb58b233d01cea8d5b173fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
