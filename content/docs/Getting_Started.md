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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQ4NWM7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm6gvGXRhXt%2FUoL5THntDmIN40L0CG16SJfbd7VE6EggIhAJJeV0kWNzVCRAiwmc2b8NPwa6Uv%2Fn3mzWCBOdGRO2ztKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAa%2FE1N0MMSjdBEecq3AN5qCE8Pt7ZxSaEh5yCS3ukfcW%2BovdXRDyi%2FoKJxBXQJunMrkGj40dnbSrTp2lbGIjoAJB4gKmPPj9hvrOM9bbdQ6gzYzXEtHpcUDms1fDod4Cwi%2Fse%2BpR9WQt5sm497Yy64soyTG1OTg9MRadgdXL70EDkw3GZQOhYcKtC7cpzJPqvh0xJPTxWgrmTh1fuYlBGyWfRxVIGhVa1VLlqSWQoU8Rsp5nP5FCEyKBXkOMY%2BgniWw%2BKMYcfblJpNogleTVO%2FpAztQeo9B4XPBPgmhPHP2BG6LdaoQZAfdKehL1ElSJwS0bUsvKjcQ93idJyqH6z2szZ6kEn79YOReoNDglWDfhc6x20aDPm5VZKdylp1%2F%2FOLdxvpDs7HI%2BhkE3ECuxB7PHlmxo1tk4ap19dvnAZMDJm7ZSFmbpun1SeigfOa4%2FeikRziifw3nnW8e%2FGiZcDRgc6SzC5P0k034OwX8tvX6dSS4aeDHZkJ3cF4ZEQnVprJt5pSgeQQ4dcelvAwfd5RzF%2BfC0QblwtUoc4z5H7GK2JBYvUCLK9RXIm2%2FcsZG4b2NQQTvLpnKZGSehQaBoHmw0HpSsh%2BCnq8fgApea0Wne8rlFD4TmQzxn1yS%2FtBGoQy7P7grZhHkSseTCY%2BOXEBjqkAVTXhEqSIG8fqMAQA8lwIi%2FsmEEaKGixirv%2FK7TwR6ngzji5YzreXuAyOsPo9mXek1MmSxC%2BVs4%2BeTrOXr9frIVgQnZQiGAiBOLeUc3ra21SbqHqdGmJFWn%2B%2BDvgMB9zjbzIsvI3t4HGYMZ%2BCQHZ%2Btv83%2BQ64xJFrd%2BtTqV4AFvotsWim6%2FgayHRRzR6QU3t%2BX3jf%2BzeUpMOWJZLmYrCSm8Vy6Qw&X-Amz-Signature=c956cf30078540132ab6b941ecc0c899fc217a81bbd0b0ed800a235558a376e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQ4NWM7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm6gvGXRhXt%2FUoL5THntDmIN40L0CG16SJfbd7VE6EggIhAJJeV0kWNzVCRAiwmc2b8NPwa6Uv%2Fn3mzWCBOdGRO2ztKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAa%2FE1N0MMSjdBEecq3AN5qCE8Pt7ZxSaEh5yCS3ukfcW%2BovdXRDyi%2FoKJxBXQJunMrkGj40dnbSrTp2lbGIjoAJB4gKmPPj9hvrOM9bbdQ6gzYzXEtHpcUDms1fDod4Cwi%2Fse%2BpR9WQt5sm497Yy64soyTG1OTg9MRadgdXL70EDkw3GZQOhYcKtC7cpzJPqvh0xJPTxWgrmTh1fuYlBGyWfRxVIGhVa1VLlqSWQoU8Rsp5nP5FCEyKBXkOMY%2BgniWw%2BKMYcfblJpNogleTVO%2FpAztQeo9B4XPBPgmhPHP2BG6LdaoQZAfdKehL1ElSJwS0bUsvKjcQ93idJyqH6z2szZ6kEn79YOReoNDglWDfhc6x20aDPm5VZKdylp1%2F%2FOLdxvpDs7HI%2BhkE3ECuxB7PHlmxo1tk4ap19dvnAZMDJm7ZSFmbpun1SeigfOa4%2FeikRziifw3nnW8e%2FGiZcDRgc6SzC5P0k034OwX8tvX6dSS4aeDHZkJ3cF4ZEQnVprJt5pSgeQQ4dcelvAwfd5RzF%2BfC0QblwtUoc4z5H7GK2JBYvUCLK9RXIm2%2FcsZG4b2NQQTvLpnKZGSehQaBoHmw0HpSsh%2BCnq8fgApea0Wne8rlFD4TmQzxn1yS%2FtBGoQy7P7grZhHkSseTCY%2BOXEBjqkAVTXhEqSIG8fqMAQA8lwIi%2FsmEEaKGixirv%2FK7TwR6ngzji5YzreXuAyOsPo9mXek1MmSxC%2BVs4%2BeTrOXr9frIVgQnZQiGAiBOLeUc3ra21SbqHqdGmJFWn%2B%2BDvgMB9zjbzIsvI3t4HGYMZ%2BCQHZ%2Btv83%2BQ64xJFrd%2BtTqV4AFvotsWim6%2FgayHRRzR6QU3t%2BX3jf%2BzeUpMOWJZLmYrCSm8Vy6Qw&X-Amz-Signature=c952090f294144b4909b5d84a98d63fe1611a0d18de292d0e429c77c5b654f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQ4NWM7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm6gvGXRhXt%2FUoL5THntDmIN40L0CG16SJfbd7VE6EggIhAJJeV0kWNzVCRAiwmc2b8NPwa6Uv%2Fn3mzWCBOdGRO2ztKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAa%2FE1N0MMSjdBEecq3AN5qCE8Pt7ZxSaEh5yCS3ukfcW%2BovdXRDyi%2FoKJxBXQJunMrkGj40dnbSrTp2lbGIjoAJB4gKmPPj9hvrOM9bbdQ6gzYzXEtHpcUDms1fDod4Cwi%2Fse%2BpR9WQt5sm497Yy64soyTG1OTg9MRadgdXL70EDkw3GZQOhYcKtC7cpzJPqvh0xJPTxWgrmTh1fuYlBGyWfRxVIGhVa1VLlqSWQoU8Rsp5nP5FCEyKBXkOMY%2BgniWw%2BKMYcfblJpNogleTVO%2FpAztQeo9B4XPBPgmhPHP2BG6LdaoQZAfdKehL1ElSJwS0bUsvKjcQ93idJyqH6z2szZ6kEn79YOReoNDglWDfhc6x20aDPm5VZKdylp1%2F%2FOLdxvpDs7HI%2BhkE3ECuxB7PHlmxo1tk4ap19dvnAZMDJm7ZSFmbpun1SeigfOa4%2FeikRziifw3nnW8e%2FGiZcDRgc6SzC5P0k034OwX8tvX6dSS4aeDHZkJ3cF4ZEQnVprJt5pSgeQQ4dcelvAwfd5RzF%2BfC0QblwtUoc4z5H7GK2JBYvUCLK9RXIm2%2FcsZG4b2NQQTvLpnKZGSehQaBoHmw0HpSsh%2BCnq8fgApea0Wne8rlFD4TmQzxn1yS%2FtBGoQy7P7grZhHkSseTCY%2BOXEBjqkAVTXhEqSIG8fqMAQA8lwIi%2FsmEEaKGixirv%2FK7TwR6ngzji5YzreXuAyOsPo9mXek1MmSxC%2BVs4%2BeTrOXr9frIVgQnZQiGAiBOLeUc3ra21SbqHqdGmJFWn%2B%2BDvgMB9zjbzIsvI3t4HGYMZ%2BCQHZ%2Btv83%2BQ64xJFrd%2BtTqV4AFvotsWim6%2FgayHRRzR6QU3t%2BX3jf%2BzeUpMOWJZLmYrCSm8Vy6Qw&X-Amz-Signature=652ca15a88000dd103852ec6d5416cd20151fa65bf5ba6bff58433a4c15c1f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4RINDWU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdZlDjqpMg2gs2W3dL6Asv8Z0BpysRr0HX0Q%2FHPu0jzAIhAPWiMgQNSXBgl0uc8wB4%2BiVX1gSNtC7w8O0b%2FzxejgncKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNMP4QimkBiRIfAJ4q3ANAbf21XkvBt254Kp%2FNbEPRKiiD2px6Kvbawuafh5FNt8Xa8Y9vavbDlg4QspVo%2BDSOZIGLwX3BqnKfZREyVH3woHZ4bad%2Beoobi%2FOVxHnlUvgNHacg9038Rrvm5ZfJgJDzgQ55EJ0sVfrI3iKosdbzEVCuUVM4T2w6uN2e9l5y5C2tMq4fnLHF77aNYHnZEY1WckkETFuNo0YClpGPTx2xk41sPy6dBaZ5BqY7gjUbCqKe9gsNqslKev%2FwVmFWhtyhanT5QJNbyWn%2FysoTO0qDtNdDlrLrezwrq4d%2B11vqZu%2FKfscy536c8q1dQhn23WUa96A9hvTRoJYyYC2J%2F4zLGC7zC%2Bl8IJ8kZmsfI5hDogm9izkMEH%2F3TDIBIVoQQvr3HfAgYNf3OqMVHjrxcKYYPHxaHKtLnCsG8uz%2FxwwiR%2F41IGlAKtxgzJdjIlbOvE16lqUcxv2T9lI6GCVc%2BK4EGZ2ZGfHj%2BCkY8gIrrzMRX%2BNbbezQiOzYkgQOJNUhHyDHoDiYBFiA2W4A3vqG4WkjpP1%2BbFiKUaHkozx2KJSbQGIB6HaP1UGGRLsDn7yiBr2xUDtwIYSW%2BioSsEzk7yuy4ZIkfkyxgB5Bq2Xa3e8ruDG553R%2BZBCK4vyhMTDx9%2BXEBjqkAbtad2TjSH7q5RW3GQ0xc8x%2FbTkOyMXFIONXm4sYJSSr%2FOSk97%2Fp8tRB7%2FOZxLsE3PZRDWOLkZMULEMAnNn%2BU1H0959OgrQU3nbiB234JMIGpP74TbjGuWjphy9lv2R%2BL%2B2PzToh4gWk%2B0f2ibVVh%2Bhcl1c2BC95pvlI3ptkyaJhilx7w8gXwLZcYG30cEBgQYXLfAYb8KQEGlH2yZ8PS%2B2bWx4B&X-Amz-Signature=a56fefb0e0c2b0057ad01b51ebbd66b8e588740e7aedce6082647d70ce3b66fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHOZUI7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdvF68EE9sI7hqiDpCNyCSrT4W0y7%2ForB543PLKQ7tfAiEAi%2FRLu6u4D4D81mI1N0tb7b10qLo3T7cFnEtSkdSe1YMqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIHr70DHp%2Bw8ymuRircA9OspTPxoFRanPAhx5BQyz%2FfIuHih4uWuEPeGMTYcsCSiOYhj31CVVbnsyyj74Z3cwit%2Bj5p4PeQG6qsifSV2kLN2EwvGubFKOkBrE%2F%2Fe4nOgtEV80l0A9NAPmXl14GkgaIzYWBPZ3wZuxyr%2BiAgDmrc0eA%2B50Q6uylXdTblKgA4EOpMrkn%2FF27XFlc%2FIXh83QeByVtA%2BtZXyCQZEycSw2Y6VphQfFikdq74pG1SMd4Q9oLVt5xDBtJL7MnPhsSUhqd1PKLWmN6lO9brNzPuWvqAipQZXzuzOuSYMylIXANZ9MDzoM%2BAnD0WzPPfxHfm3RTlOsc9cacBxNrWgiq8mRARaquKTMxv3HKdtbm3nkyc9uTJdgdmd3jDVubrCFAmRGEm7xARDx3r%2FUafNgmP29LkDh81c3%2FYXkya6wHAzBmO%2B%2FMX518jnG2krZY8ItO%2BI9hX5o4xsn6f7loCzups%2BHztNcHKnhJ66mwpr4d6Tnz7XxRDBQu3%2FVgcdp7pmN4HpDwLLTYLmzkZ5mUPM4v1PsYVG69T9Tcrc6D36hyGT6MWrBga7vVY1TQirlrt9cfIxjBW6XafU%2FnexWV%2BWYx51aEdGrPfQ7ufYsAVBJMM7l5gW1%2BGILwBHKnyx6I0MJj35cQGOqUBYdnitPy2hDVEsekW6iuqzGpkv3XCmQTtFqgKv68B%2BfkhIstAnvPiaybB3C9fMl8AiCs5WoWvqCnfEmKx8QmD19RD3j2QB1lr3EknNkq5G%2FkEsV523waiN1frFyPzk3Nj5QREyO%2Fdf65gMUqgU925IqQMAoHVRhx7ttc%2BQ8U2FjD460qP0lI6sUbvubxBuUjpr0qZPXVOvudVftdrO5VSWddSaRi%2F&X-Amz-Signature=56dddea19b4c0dcaf1a5fa092453d45922137448ae0452cb8c833b1b64ed50b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FQ4NWM7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm6gvGXRhXt%2FUoL5THntDmIN40L0CG16SJfbd7VE6EggIhAJJeV0kWNzVCRAiwmc2b8NPwa6Uv%2Fn3mzWCBOdGRO2ztKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAa%2FE1N0MMSjdBEecq3AN5qCE8Pt7ZxSaEh5yCS3ukfcW%2BovdXRDyi%2FoKJxBXQJunMrkGj40dnbSrTp2lbGIjoAJB4gKmPPj9hvrOM9bbdQ6gzYzXEtHpcUDms1fDod4Cwi%2Fse%2BpR9WQt5sm497Yy64soyTG1OTg9MRadgdXL70EDkw3GZQOhYcKtC7cpzJPqvh0xJPTxWgrmTh1fuYlBGyWfRxVIGhVa1VLlqSWQoU8Rsp5nP5FCEyKBXkOMY%2BgniWw%2BKMYcfblJpNogleTVO%2FpAztQeo9B4XPBPgmhPHP2BG6LdaoQZAfdKehL1ElSJwS0bUsvKjcQ93idJyqH6z2szZ6kEn79YOReoNDglWDfhc6x20aDPm5VZKdylp1%2F%2FOLdxvpDs7HI%2BhkE3ECuxB7PHlmxo1tk4ap19dvnAZMDJm7ZSFmbpun1SeigfOa4%2FeikRziifw3nnW8e%2FGiZcDRgc6SzC5P0k034OwX8tvX6dSS4aeDHZkJ3cF4ZEQnVprJt5pSgeQQ4dcelvAwfd5RzF%2BfC0QblwtUoc4z5H7GK2JBYvUCLK9RXIm2%2FcsZG4b2NQQTvLpnKZGSehQaBoHmw0HpSsh%2BCnq8fgApea0Wne8rlFD4TmQzxn1yS%2FtBGoQy7P7grZhHkSseTCY%2BOXEBjqkAVTXhEqSIG8fqMAQA8lwIi%2FsmEEaKGixirv%2FK7TwR6ngzji5YzreXuAyOsPo9mXek1MmSxC%2BVs4%2BeTrOXr9frIVgQnZQiGAiBOLeUc3ra21SbqHqdGmJFWn%2B%2BDvgMB9zjbzIsvI3t4HGYMZ%2BCQHZ%2Btv83%2BQ64xJFrd%2BtTqV4AFvotsWim6%2FgayHRRzR6QU3t%2BX3jf%2BzeUpMOWJZLmYrCSm8Vy6Qw&X-Amz-Signature=32c95a79ba49e2c0a47c7e82ce5711f91d337c7174cf12c22e5aa83caa399f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
