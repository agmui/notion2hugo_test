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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6RC7DP%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCCP6NgoTZG2dpD1%2FKjPIOOVA0qb228GoXSc7TqbgvbsQIgU7%2FmQxwJsALqSn4elu5nnydfFdzdrCjELIhsVqQZGCcq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAkwQySC9xTb4KDpMyrcA2xoRCuwA7DPR6XcCHOOzYc8yZq%2FG7WEhyknaeA%2F5VjKs6TAjKOvONLVRiNsavtQkTIW8jrVn%2BA3oKFNA1YlmU%2FB%2FHHwmmAr9psSn5n8AeR88Y8IhaEPuW1TIP3dRaVPltHzeaqcii8Bc2EV98w1tN8pr8X6rS%2FJPUKRzQfVmNJy6WJeBO97YU%2BoBTTMLPZqtU3ZgM3d0w1%2BTGo7q4%2B0%2FC46NR2nWZ4FBiadNxfo7rUmG%2F8WwvJ0%2BAGkcpbjZcXBBcHMAal9fdgldXL1Ln7f2c9B%2BETHzA8if0KCQas708cWrj7442LFUVpO89YuhlO1qvoW6YAEfBOpqlg44MoJrE4%2FcOCebH%2FVobWPKXpPKRgLBpxf5Kra5RKQeSc1kGAsbnSRsK%2F5X3eiJtx8MgnDTMvxs9UMM%2FUGDBhYMP%2FngZFF4lZ2F1HwPGXPcI3hhhWexBMlE3YM4emrVJjTMhehUcWqKQhawfbZazaAm%2BSG0gw%2Bgl4nYIWBQc8WabBn56diTbTnt2LTgPCsAD08rWpeIDEQpwYjzT%2B7dQi1amZvFrdEHzMSYDHj7Dc9SXK10qaURPZu5BjVCZv4vWnJMyslNyZ4F0jXbazlHHmGhkvUArgYQrJ48qrHU0kYSw48MK%2F6tsIGOqUBXj5Q2Zy7zbN%2B3uTJe5zoXkyvQtDNPwrWguhlC2AJnVLf%2BhHA5IOB%2BCu%2Fqxh%2F5rmadAOg64NYz3cLMClma18%2Bnw2HD1EAJSuQSuyjvevOcyoFfDBNn5j9dVCScoMPTvYqqVoQS3fYRzgdZUaFMk0h8UcpzvgPyvmzzNuBFbtKNDMVEFH7Kl%2BDu2aqREwZVgMbEbGHL0TUb4%2Blr5cjSNOTaWBctkX1&X-Amz-Signature=40dc3aa2ae595b4601fe2db9818e9baf9aeb6e5ac35104ff9f35bf27cf54fbd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6RC7DP%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCCP6NgoTZG2dpD1%2FKjPIOOVA0qb228GoXSc7TqbgvbsQIgU7%2FmQxwJsALqSn4elu5nnydfFdzdrCjELIhsVqQZGCcq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAkwQySC9xTb4KDpMyrcA2xoRCuwA7DPR6XcCHOOzYc8yZq%2FG7WEhyknaeA%2F5VjKs6TAjKOvONLVRiNsavtQkTIW8jrVn%2BA3oKFNA1YlmU%2FB%2FHHwmmAr9psSn5n8AeR88Y8IhaEPuW1TIP3dRaVPltHzeaqcii8Bc2EV98w1tN8pr8X6rS%2FJPUKRzQfVmNJy6WJeBO97YU%2BoBTTMLPZqtU3ZgM3d0w1%2BTGo7q4%2B0%2FC46NR2nWZ4FBiadNxfo7rUmG%2F8WwvJ0%2BAGkcpbjZcXBBcHMAal9fdgldXL1Ln7f2c9B%2BETHzA8if0KCQas708cWrj7442LFUVpO89YuhlO1qvoW6YAEfBOpqlg44MoJrE4%2FcOCebH%2FVobWPKXpPKRgLBpxf5Kra5RKQeSc1kGAsbnSRsK%2F5X3eiJtx8MgnDTMvxs9UMM%2FUGDBhYMP%2FngZFF4lZ2F1HwPGXPcI3hhhWexBMlE3YM4emrVJjTMhehUcWqKQhawfbZazaAm%2BSG0gw%2Bgl4nYIWBQc8WabBn56diTbTnt2LTgPCsAD08rWpeIDEQpwYjzT%2B7dQi1amZvFrdEHzMSYDHj7Dc9SXK10qaURPZu5BjVCZv4vWnJMyslNyZ4F0jXbazlHHmGhkvUArgYQrJ48qrHU0kYSw48MK%2F6tsIGOqUBXj5Q2Zy7zbN%2B3uTJe5zoXkyvQtDNPwrWguhlC2AJnVLf%2BhHA5IOB%2BCu%2Fqxh%2F5rmadAOg64NYz3cLMClma18%2Bnw2HD1EAJSuQSuyjvevOcyoFfDBNn5j9dVCScoMPTvYqqVoQS3fYRzgdZUaFMk0h8UcpzvgPyvmzzNuBFbtKNDMVEFH7Kl%2BDu2aqREwZVgMbEbGHL0TUb4%2Blr5cjSNOTaWBctkX1&X-Amz-Signature=f23c8942d5232441ef2be31b69b4dc960ba255f85e1682d051bbbf29b71db130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6RC7DP%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCCP6NgoTZG2dpD1%2FKjPIOOVA0qb228GoXSc7TqbgvbsQIgU7%2FmQxwJsALqSn4elu5nnydfFdzdrCjELIhsVqQZGCcq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAkwQySC9xTb4KDpMyrcA2xoRCuwA7DPR6XcCHOOzYc8yZq%2FG7WEhyknaeA%2F5VjKs6TAjKOvONLVRiNsavtQkTIW8jrVn%2BA3oKFNA1YlmU%2FB%2FHHwmmAr9psSn5n8AeR88Y8IhaEPuW1TIP3dRaVPltHzeaqcii8Bc2EV98w1tN8pr8X6rS%2FJPUKRzQfVmNJy6WJeBO97YU%2BoBTTMLPZqtU3ZgM3d0w1%2BTGo7q4%2B0%2FC46NR2nWZ4FBiadNxfo7rUmG%2F8WwvJ0%2BAGkcpbjZcXBBcHMAal9fdgldXL1Ln7f2c9B%2BETHzA8if0KCQas708cWrj7442LFUVpO89YuhlO1qvoW6YAEfBOpqlg44MoJrE4%2FcOCebH%2FVobWPKXpPKRgLBpxf5Kra5RKQeSc1kGAsbnSRsK%2F5X3eiJtx8MgnDTMvxs9UMM%2FUGDBhYMP%2FngZFF4lZ2F1HwPGXPcI3hhhWexBMlE3YM4emrVJjTMhehUcWqKQhawfbZazaAm%2BSG0gw%2Bgl4nYIWBQc8WabBn56diTbTnt2LTgPCsAD08rWpeIDEQpwYjzT%2B7dQi1amZvFrdEHzMSYDHj7Dc9SXK10qaURPZu5BjVCZv4vWnJMyslNyZ4F0jXbazlHHmGhkvUArgYQrJ48qrHU0kYSw48MK%2F6tsIGOqUBXj5Q2Zy7zbN%2B3uTJe5zoXkyvQtDNPwrWguhlC2AJnVLf%2BhHA5IOB%2BCu%2Fqxh%2F5rmadAOg64NYz3cLMClma18%2Bnw2HD1EAJSuQSuyjvevOcyoFfDBNn5j9dVCScoMPTvYqqVoQS3fYRzgdZUaFMk0h8UcpzvgPyvmzzNuBFbtKNDMVEFH7Kl%2BDu2aqREwZVgMbEbGHL0TUb4%2Blr5cjSNOTaWBctkX1&X-Amz-Signature=ef76878c518990395e862043b3d9c1520c62c015333bb2a2f7897c4910123ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRQD7YGV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDDozBqkCqOze5huioxTq2GB6RHHFCoVQ4U5lJfkhir%2FAIgQDowj%2F3T0FB8qPf9x%2BKbunDIhZ%2BVAlVH%2Bki69EOmvRQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDZca3WvA9uVUBDIbSrcA%2FrccHgN%2Fa6vQXTq%2FkM%2FPES2O8C06f4TrVULcPp6XZre5syW2%2BmeFmDhtFU4oKV7FL%2FQ6r%2BKFaf3m9HnO%2B35wn59rxxPqdbTPvWy7NYCgGlgqTOqlmalUEsMEdlySNEYAFFgrYUSistrB90JadLewFddmqWQ4o%2FOQy86A%2BNAbwfofrljDi3vFeNIuiwRI%2FqNoYByp3Y4jeVZ3XGnPiLYKGX3hGT3503YGwI29Dy3assuyGc5Tk6v0GDeGyo%2FW7NCMVKARTxy8xGwaKO9PNI2XGSCdNZg6QdajDUrHGZoZtJOyCh4zUU86Tld22aoGsZzO%2F%2FZ%2FKde1s3zsR1y0hBlSQf7IpJnEvf5GrDjAkokGUlLuZjXMWZTOltd5px914kXn1hPBaBsos5HwLBwtDOJ16%2BRQmltXjKwBwa9Z1gStGhHIHNRMWLdr2ZLmwucJn1M4GXLGG9dOuWIm%2BDqevMfwi3Jd0V9svKW3XtI3D9vY0PsQ9M3kwOEt%2BzhVax4%2BckS4TOizoJiPToDLl2Yw2fDiCoad9TvxacIv9ZTZfI20pU9II1LCA5xtDgv0Xfp%2FTcKOwmKqgT8NbIIiqrAJiiAR6481z9p59PNSosAP%2BNic2Hdc2fKNO3pnipG7gQcMOr6tsIGOqUBRxXX3Tu1SChmZePd8hVZW0lDRwcLoTfvvds9AhjRkQz7tv%2FzkHlnxvIq4nX019sipb3ihqlwObHriXrpqJvgs11CsqiY4PGtQcuMZInmNtDlcvPfT98kMNfeGF7S%2B19Zis6xmcc43dORXFM8BRU%2BCTKvVi798NbsQ0wfQfMbYzomfSiaCaWdq5xcxTKZACInYdCKj8dI69p7QtRBpK4jU5%2Fi%2Fc6x&X-Amz-Signature=1be08389336fdaf2e54283e4036a34a77fd4a56dbb977cd3c693cf02ebcdea64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGMGKHE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBNQ1PHUn%2FR0AhC4rA9R9nf0k02fNcHEDDUcjl09XD7fAiAFjECpAHtchiUdr%2FAn%2F1cSS2BOO56kTnl83JYcrTxelSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMnkZ7ti7r7mTMq6YwKtwDFQTXuA68Y3gUYnNMehYKq2wbQ9jtqMiNxF%2FVSU7rCWYecv0LbP9gt1TirwHvs%2FOdMdPGPlFDgjEnIm4viCB%2B2OHlFXzXINHp0x8bcaGEdhzZovSu1hpU6RouOIKALM8q3A5K3YltxuCVZW%2FQrzN%2FyqLSr7JYXdRCqdnXT31Kqg473R82Ji0BXCvlg5j2uJ0PeBTzDTdn46%2FF0zsViUsNnxzgkHYmYa2X0wBNb3Axu9r6LLhbRlRc%2BweMklSPMsldlvrJiH51F%2BDuVyPc4lhAyl7NYe7vaRmCW0ffwqqXdjy0pOVLJ0acFTEEpVKT8hGTZg3iTXCVqcGLS12d6K2A39meEGXUn%2F6RsLld%2FlOOeS3%2Bf17ACEnJrOu4j1ZCN3Olk9iQvEJOnT6VscBbmr4y09%2FikN9cZSNW2kglCgj7RJFEazrWagkSQCQP%2FGtzC39JHmwnlN7LkhoM8wfm8B3NJzbIgLz25JCrNYa2nZOMmzLOsNRHCLb7puHJJCPwWzpTEFxL6nw2R9bhSUdIjmF60rbluWxs2eNWKGCQRHW02mLSFjmPIjDHcqBg8gpNXdCyu9rMmj4bGuO7gGObCNSA1b125EnQPUNZqfNVcwuDMKChxbPhBzVdUEOncagwr%2Fq2wgY6pgEIsWg4F0CbYekZjT%2B4Lp4jHX56dz0QD7ylVR%2BMOl%2Fda6nx8usXuVOlvgAiSD1C176Zht0e2awoMX3oE9qbDmbGsJngP7HyCOiYZJg5p2vBZ3QVzxCse%2B0d8vWLhZ7kbnIh2YVGFEMvOhuKBJpHk53BS81QeS93CkztzSGRJ%2Bm8u2St2yTz5TntZYV%2Bbhr1oexDlqJyMf%2BSS6JBSTNvwhVYadfAR5JT&X-Amz-Signature=11e3cefb1e43883fdbd308c7e1c7ddad8ee645b7880461991c7e8a9e9cc9c53c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6RC7DP%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCCP6NgoTZG2dpD1%2FKjPIOOVA0qb228GoXSc7TqbgvbsQIgU7%2FmQxwJsALqSn4elu5nnydfFdzdrCjELIhsVqQZGCcq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAkwQySC9xTb4KDpMyrcA2xoRCuwA7DPR6XcCHOOzYc8yZq%2FG7WEhyknaeA%2F5VjKs6TAjKOvONLVRiNsavtQkTIW8jrVn%2BA3oKFNA1YlmU%2FB%2FHHwmmAr9psSn5n8AeR88Y8IhaEPuW1TIP3dRaVPltHzeaqcii8Bc2EV98w1tN8pr8X6rS%2FJPUKRzQfVmNJy6WJeBO97YU%2BoBTTMLPZqtU3ZgM3d0w1%2BTGo7q4%2B0%2FC46NR2nWZ4FBiadNxfo7rUmG%2F8WwvJ0%2BAGkcpbjZcXBBcHMAal9fdgldXL1Ln7f2c9B%2BETHzA8if0KCQas708cWrj7442LFUVpO89YuhlO1qvoW6YAEfBOpqlg44MoJrE4%2FcOCebH%2FVobWPKXpPKRgLBpxf5Kra5RKQeSc1kGAsbnSRsK%2F5X3eiJtx8MgnDTMvxs9UMM%2FUGDBhYMP%2FngZFF4lZ2F1HwPGXPcI3hhhWexBMlE3YM4emrVJjTMhehUcWqKQhawfbZazaAm%2BSG0gw%2Bgl4nYIWBQc8WabBn56diTbTnt2LTgPCsAD08rWpeIDEQpwYjzT%2B7dQi1amZvFrdEHzMSYDHj7Dc9SXK10qaURPZu5BjVCZv4vWnJMyslNyZ4F0jXbazlHHmGhkvUArgYQrJ48qrHU0kYSw48MK%2F6tsIGOqUBXj5Q2Zy7zbN%2B3uTJe5zoXkyvQtDNPwrWguhlC2AJnVLf%2BhHA5IOB%2BCu%2Fqxh%2F5rmadAOg64NYz3cLMClma18%2Bnw2HD1EAJSuQSuyjvevOcyoFfDBNn5j9dVCScoMPTvYqqVoQS3fYRzgdZUaFMk0h8UcpzvgPyvmzzNuBFbtKNDMVEFH7Kl%2BDu2aqREwZVgMbEbGHL0TUb4%2Blr5cjSNOTaWBctkX1&X-Amz-Signature=d73f85009ecc36ac82881c69822251f9193640c6c3a44e5c8aa91df2456aa911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
