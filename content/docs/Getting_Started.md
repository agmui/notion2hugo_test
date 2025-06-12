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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATGYUH7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIB26x2neKqdMZmJNrJVxWcILDVc1akTLc0ziwtY0vLN8AiBb%2B%2Bi49WRawkL2ICnHIy3XfmvFhH6ISmr7M6%2FAmisjNiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FriGzzSq9rKuLEaKtwDRjU%2Bu1fTXd9qBnikXvDVIn%2BE4Yw37PRfkYq9VkOotLG8kESWQkasTHyJittam1WSTPKQtdbaL11u3A%2Fmwlx6Djzx0%2Bq2f1OY8XWfaeRw6DOzZWDX%2FmSBVdMICRBdaXjSKC79CyeAXB5vWAY%2B5kKFxyJARSsDXK8F1f2cQtv0gjlcBqnNGFtPKU4Z0fwqXKBdTCmn%2BJsYHZFNT%2BdwgIsVdX%2Fgmbw18lIjSVBSn4v%2BBhRZ82MjbDW6bJHXrNTgWEWKY42HkEKFzYDYTbrfQt7OW%2BmElhMEHsu8PU2gLTf6%2Fwy9sc1mnqPcVLRjpxEuCFgJ4oaz5Ipe0h1WK4vmtAlL8BKSvYjnyDYfwpU7ZXguGoBAuMrCRy36eK5%2Bhj%2FYsrT6G%2F7tlb6OYUUxBLS3EkI7adlVDmdAIdIB1zvs035V5IUdmEm3JemSI6uD%2F7Cw4vxeWPupgjDTQZX%2BiB9QKCSRctvTpT1KrWTSHvmV%2Bp74pw1SpCnqO0QcZPwNSNd7golQ27BLk89hBOO0ZBCUxAkf4d0jJDlDI0rLwt9QAlSpFY%2BrCwAkkR%2BKjIQJy2f7U7a%2BSgBwLnPYaBKJJErrNAU%2Fz21Ht1%2BJdBbaeTGRpETIzwLTy1qGdAqmgWJZGcIwjZGswgY6pgFWZ0gishDq%2FJAkI75QvTbk6HV0DKfjLTRFfoiojQOc3rJBUzDTLxZs7rsget0Q4ZP1gnIw6jSD3g%2F47mCOrha3%2F3QNPPQkZ46BM8cyXieXFh2SlAVrHRklnGblT7rXuyoD0icqvLuLMl3ZarEGo92lBVEH5ur5ifVQSr%2BzRwoBtHc03%2F8cQmiB%2BQ%2FnIn319IckQiORmAFXKTNklc%2FrTZFcgtD0GZoB&X-Amz-Signature=f014b790bad26bfdf3f9befd31a8d9fc240cf889e2db80b9d83f674c04f0d9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATGYUH7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIB26x2neKqdMZmJNrJVxWcILDVc1akTLc0ziwtY0vLN8AiBb%2B%2Bi49WRawkL2ICnHIy3XfmvFhH6ISmr7M6%2FAmisjNiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FriGzzSq9rKuLEaKtwDRjU%2Bu1fTXd9qBnikXvDVIn%2BE4Yw37PRfkYq9VkOotLG8kESWQkasTHyJittam1WSTPKQtdbaL11u3A%2Fmwlx6Djzx0%2Bq2f1OY8XWfaeRw6DOzZWDX%2FmSBVdMICRBdaXjSKC79CyeAXB5vWAY%2B5kKFxyJARSsDXK8F1f2cQtv0gjlcBqnNGFtPKU4Z0fwqXKBdTCmn%2BJsYHZFNT%2BdwgIsVdX%2Fgmbw18lIjSVBSn4v%2BBhRZ82MjbDW6bJHXrNTgWEWKY42HkEKFzYDYTbrfQt7OW%2BmElhMEHsu8PU2gLTf6%2Fwy9sc1mnqPcVLRjpxEuCFgJ4oaz5Ipe0h1WK4vmtAlL8BKSvYjnyDYfwpU7ZXguGoBAuMrCRy36eK5%2Bhj%2FYsrT6G%2F7tlb6OYUUxBLS3EkI7adlVDmdAIdIB1zvs035V5IUdmEm3JemSI6uD%2F7Cw4vxeWPupgjDTQZX%2BiB9QKCSRctvTpT1KrWTSHvmV%2Bp74pw1SpCnqO0QcZPwNSNd7golQ27BLk89hBOO0ZBCUxAkf4d0jJDlDI0rLwt9QAlSpFY%2BrCwAkkR%2BKjIQJy2f7U7a%2BSgBwLnPYaBKJJErrNAU%2Fz21Ht1%2BJdBbaeTGRpETIzwLTy1qGdAqmgWJZGcIwjZGswgY6pgFWZ0gishDq%2FJAkI75QvTbk6HV0DKfjLTRFfoiojQOc3rJBUzDTLxZs7rsget0Q4ZP1gnIw6jSD3g%2F47mCOrha3%2F3QNPPQkZ46BM8cyXieXFh2SlAVrHRklnGblT7rXuyoD0icqvLuLMl3ZarEGo92lBVEH5ur5ifVQSr%2BzRwoBtHc03%2F8cQmiB%2BQ%2FnIn319IckQiORmAFXKTNklc%2FrTZFcgtD0GZoB&X-Amz-Signature=fe8da0a7748b425052b7eaada30993d43e0acb42ee93c57f26ef733f023e0361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATGYUH7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIB26x2neKqdMZmJNrJVxWcILDVc1akTLc0ziwtY0vLN8AiBb%2B%2Bi49WRawkL2ICnHIy3XfmvFhH6ISmr7M6%2FAmisjNiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FriGzzSq9rKuLEaKtwDRjU%2Bu1fTXd9qBnikXvDVIn%2BE4Yw37PRfkYq9VkOotLG8kESWQkasTHyJittam1WSTPKQtdbaL11u3A%2Fmwlx6Djzx0%2Bq2f1OY8XWfaeRw6DOzZWDX%2FmSBVdMICRBdaXjSKC79CyeAXB5vWAY%2B5kKFxyJARSsDXK8F1f2cQtv0gjlcBqnNGFtPKU4Z0fwqXKBdTCmn%2BJsYHZFNT%2BdwgIsVdX%2Fgmbw18lIjSVBSn4v%2BBhRZ82MjbDW6bJHXrNTgWEWKY42HkEKFzYDYTbrfQt7OW%2BmElhMEHsu8PU2gLTf6%2Fwy9sc1mnqPcVLRjpxEuCFgJ4oaz5Ipe0h1WK4vmtAlL8BKSvYjnyDYfwpU7ZXguGoBAuMrCRy36eK5%2Bhj%2FYsrT6G%2F7tlb6OYUUxBLS3EkI7adlVDmdAIdIB1zvs035V5IUdmEm3JemSI6uD%2F7Cw4vxeWPupgjDTQZX%2BiB9QKCSRctvTpT1KrWTSHvmV%2Bp74pw1SpCnqO0QcZPwNSNd7golQ27BLk89hBOO0ZBCUxAkf4d0jJDlDI0rLwt9QAlSpFY%2BrCwAkkR%2BKjIQJy2f7U7a%2BSgBwLnPYaBKJJErrNAU%2Fz21Ht1%2BJdBbaeTGRpETIzwLTy1qGdAqmgWJZGcIwjZGswgY6pgFWZ0gishDq%2FJAkI75QvTbk6HV0DKfjLTRFfoiojQOc3rJBUzDTLxZs7rsget0Q4ZP1gnIw6jSD3g%2F47mCOrha3%2F3QNPPQkZ46BM8cyXieXFh2SlAVrHRklnGblT7rXuyoD0icqvLuLMl3ZarEGo92lBVEH5ur5ifVQSr%2BzRwoBtHc03%2F8cQmiB%2BQ%2FnIn319IckQiORmAFXKTNklc%2FrTZFcgtD0GZoB&X-Amz-Signature=650ec7b2f26b8c154e9c4542c6b128e5e69e9a7fe0b9da90b2c5dde213a714e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLR3ZZLC%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDoUHrv1c9XK0EjM6nIfhTlTE8uGYLLQqlpxpkHdyhp%2BAIgHe2B1wPMSlEk%2BmpxzxgNydTqNlNyJHSh%2FokDPpLBkrcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoWEAKXRbTX8O9sYircA56ysqINEwdtnfnZ74NkHOagW5Cw6eBmRb6eKjEORu4BhUKDpP5XPaFcs1MOXQ4XXQPoeKhGgkdJTad%2B%2FoZcRaz1ByHX%2BvMZI5SbgivUuakbCJYG1aSZ2afdjXaWFXxWjnSE14gEWXpWfayGXlwQGT8cQqvzKsidJYt1JWKuxFVhSNPIdY33chslZJVTOzuozlNJv3VOJDPszQlot%2FGSpZ2ecqx3b7UEwVTKLpNOks1fw9bz4%2Bz5y6F2WjdVoRg3TwtrDq1bifdTzE5mtju7yWpIwL4IE6WxoUse5k%2BYOU76MDZKdzppUZCro1k1wK1VYNe8HRXMFIZ7yQjx%2BL24858NnW2orulSjX9nxdd0%2FFVMbFQy5XZFKVIlwxoMASda33011PKe5QP5Cf%2FglznVzNpLZKc6Jchhr2Y0RWCB7cm%2Bzv3cCSJPn%2Fop6wy3WuumJGvfC65MjsNN4Ed2kJhxxkL%2Bj0ppbpClERrl%2BjQSgr%2Bzh%2FgQcCLkUCzeoxaxIdkEX1IQTWk%2BqyAbpp13T2zR2cLBb8Qs5QCBYLgE6E7iQkD0Df%2BDzA7vpnXrLaZmRqPk78XI5Rm8smfbhqUlThBARokYiMkW78UoAwjNnvX%2B3u5B9YziEEjECsNIPjESMIeQrMIGOqUBbFN9ce1DBsc7Blaq8hBE1QMhpXavrk%2FhgqDfBBw7EXpaLBE5TeayeMDgTpiVP8LCTvxRj9pbmsumGJIYUZH%2FJ%2FwVeN4uds2%2BrkLMhs2F1QkpKqTMpWveJazZFKrH5zSVGCRs%2FXTT%2BBEmyx6hdFKGlJmPKOUZX19cuLbX7cPf6QzhYLxFtl1STttt%2FXi%2BmuFA1FuC%2BBwHBKmoW8kXgBZC5l4IgXyV&X-Amz-Signature=44cafea180ec6e38d55c2d909156d1dbe2189ae10dd5f75d2d4cc4df17e288cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA6EFL7V%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICKGokbP8PiisvoW2vHTrvmTTkRrCvI2wMP5Lj6eo0CpAiAhYeJriH7f6759PjnOefJRHyv3dhJXWlDL6GLc%2BIp62yqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6AfHPe4TAzigTlBKtwDVIevkSu53aeMuMQ9FDMzE%2BQFAUdVGCaa1vPoZXD4cTKJ2zre7G6uGeM%2FKh%2FmHxa5AUwJ%2BG7WiQEKxvTmeQnQvC7sDyxMIwgq5vMRQRWeX3Xc9M1OBTSLbm2etX22iVFYYOyIZQEtcYk5uiSawCQs1EBwlvmt8Kt2GjtkDLOQpwX1KCV3%2FAucYCSPXn4%2FozUjjXk0Xx%2Fq0m9yujxzyeTmsCw2sb9cD9cPCAkCDVpPnRD1HywxpZiFwGR6clfhziuvSS3MSdS74SAONtKp%2B1j1SHhZ%2F5HCHobux%2Bcb7dCBySl92QyQu6evbX1StOkgwujCFcvUeWulJ%2BjzZQ4wq%2FzhTUWK%2FUK9pYUmbirFEB5E4U7Z4rh%2Bk%2FrNRONVj8nofW4AHs5id0SCELv7e1JNTwrvTbW3YQWrAIrL1fq2H0CCPz%2BmgXnagryNRJOuTiyJLpYVblCGP2iGt7zwIow87HEU%2FXX5VgS9UGBjIQqqWPUjNYOtGkCAWjy92hp026u3AZ5Xwu8lm0EJLx6MPDDbOTr5Lj5hi5TWd1yxZwaqnWgJGrJP%2BDDJ9WNrOGCR3MSuLnkgMJjmiFgkhUPUsisNjm3JvawTge5qmtsC%2BFUIjeIoGrDGU46MBYKohw3GaUcwhZCswgY6pgEowuG%2BVTa%2BhAnXQ3Q3mEjnSEnG2o1ZaoWPy9fnEy003LiOEQ9WALAyR%2F0rEmdLwniz514NTDGk6j0LqxBu8d1YdSNm7Mm59Jo8pf79tkWNB7CeW9ncoo%2Fj0rtGUbbFcK8H3N6BmJhZhvH2JtHAj%2BJHDTnvZQepv9JM7gc7%2Bu0UQtO26ricNhfJPaYFc0cjEKzCqPozL07TyvrKdYw1t2erWPWdYlWZ&X-Amz-Signature=e8aa953c074ce225b446821d7a7011394aab282343e45a6b56c273842df0ec46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATGYUH7%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIB26x2neKqdMZmJNrJVxWcILDVc1akTLc0ziwtY0vLN8AiBb%2B%2Bi49WRawkL2ICnHIy3XfmvFhH6ISmr7M6%2FAmisjNiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FriGzzSq9rKuLEaKtwDRjU%2Bu1fTXd9qBnikXvDVIn%2BE4Yw37PRfkYq9VkOotLG8kESWQkasTHyJittam1WSTPKQtdbaL11u3A%2Fmwlx6Djzx0%2Bq2f1OY8XWfaeRw6DOzZWDX%2FmSBVdMICRBdaXjSKC79CyeAXB5vWAY%2B5kKFxyJARSsDXK8F1f2cQtv0gjlcBqnNGFtPKU4Z0fwqXKBdTCmn%2BJsYHZFNT%2BdwgIsVdX%2Fgmbw18lIjSVBSn4v%2BBhRZ82MjbDW6bJHXrNTgWEWKY42HkEKFzYDYTbrfQt7OW%2BmElhMEHsu8PU2gLTf6%2Fwy9sc1mnqPcVLRjpxEuCFgJ4oaz5Ipe0h1WK4vmtAlL8BKSvYjnyDYfwpU7ZXguGoBAuMrCRy36eK5%2Bhj%2FYsrT6G%2F7tlb6OYUUxBLS3EkI7adlVDmdAIdIB1zvs035V5IUdmEm3JemSI6uD%2F7Cw4vxeWPupgjDTQZX%2BiB9QKCSRctvTpT1KrWTSHvmV%2Bp74pw1SpCnqO0QcZPwNSNd7golQ27BLk89hBOO0ZBCUxAkf4d0jJDlDI0rLwt9QAlSpFY%2BrCwAkkR%2BKjIQJy2f7U7a%2BSgBwLnPYaBKJJErrNAU%2Fz21Ht1%2BJdBbaeTGRpETIzwLTy1qGdAqmgWJZGcIwjZGswgY6pgFWZ0gishDq%2FJAkI75QvTbk6HV0DKfjLTRFfoiojQOc3rJBUzDTLxZs7rsget0Q4ZP1gnIw6jSD3g%2F47mCOrha3%2F3QNPPQkZ46BM8cyXieXFh2SlAVrHRklnGblT7rXuyoD0icqvLuLMl3ZarEGo92lBVEH5ur5ifVQSr%2BzRwoBtHc03%2F8cQmiB%2BQ%2FnIn319IckQiORmAFXKTNklc%2FrTZFcgtD0GZoB&X-Amz-Signature=9684e1ea0cb6a04d5c93ffa746c38646e49f3e0348fa1b179eabec7c8b68d51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
