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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BP4Y5S%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDgu%2FprSSPQYdkcep1QWwPpljIwOwz17rnUti9iCUAPOAiAi66X8apkUeqeczXE%2F%2BvySqu%2BeMxMec3zxAxcqQFN2%2Fyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM5PIHXcbYJnFHUxrFKtwD3kVE75mO2lf0Fqiiz38BqubbIZfNtocI%2FAUUr70Pn46GRJELP7s6ZwHe13CK6HhkG63lpyGv4Zl6D8uw%2FvWuwAQRAnxO5Y5OU2pCcSABvZOrS4zRFhfMSv4oODBfr%2BOPvH%2FAlS4sl7yjLfezjEYez%2FPC3JMRyABNk0kJ2%2BP4uxI4WBz%2FVWGG41A9GttTYsi%2BGjL3lZ7ANpe89t0SpBGy0zQCgRcheiDg%2B0OvSi3Piu4fTD1hpS9YEpv3t%2Fkmf3OC0z7D7Y%2FXieT6AyrPUEizoQwUw%2FX6fdRcnonrkDed0XQLnaLmF3PwGfo9AUtFyd2MJfliH8b1SIZjhAB4PZEfjCMlPuCdKGwXY7jJ%2B%2FXED3NLRJjI7UqMzxAKg7orPHF4KmMok7dUfGiajyujojkKf7%2FVOCQtYgsYvewR3KhPQBoF0R%2FhvbZMEDmiePkp9b6NtxZT2VltedIT10J1RvxHsR2%2FhOO1rek51pwfmXa%2BsWmSgmWyi%2B6rutOqdIgv9AIo4vO9tBeVOHxWQ3tTvTK3W9ltE6fHPvYtTChGTXoZfcC8%2Bo%2BUL%2FInyLdu2BAU3LBHW4q4X4gJemBWH66a0m1NMaK%2BiJMtHnOR27P8MQhZ%2B2zMNUHjZgy00Wz42IUwgNiHwgY6pgGdJIoM0oFDUPQhQCxZ7WGaPkEWQ4FcAVLu6NdGvKWVhYGfTaskA%2B4EtIkPTx0JKhXimckdMK5TtYHEFPz314EGACCln%2BDA15fqrMa8qEb8m6e7yC%2F8VL3JRakYfJt%2Fu8i%2FDT4MiaPyJ%2F6iMqhhXPat4Ogyym9iz9OIycdOypg2lSEN9YKzefj39Cz4jm2JkHU36p%2BsT%2FRqoenKA59864za6Glg%2F04U&X-Amz-Signature=b5bfdea38bbcb0235a82a5f3a1ab2c1baf03b7cd078f7131b7de392688893e80&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BP4Y5S%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDgu%2FprSSPQYdkcep1QWwPpljIwOwz17rnUti9iCUAPOAiAi66X8apkUeqeczXE%2F%2BvySqu%2BeMxMec3zxAxcqQFN2%2Fyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM5PIHXcbYJnFHUxrFKtwD3kVE75mO2lf0Fqiiz38BqubbIZfNtocI%2FAUUr70Pn46GRJELP7s6ZwHe13CK6HhkG63lpyGv4Zl6D8uw%2FvWuwAQRAnxO5Y5OU2pCcSABvZOrS4zRFhfMSv4oODBfr%2BOPvH%2FAlS4sl7yjLfezjEYez%2FPC3JMRyABNk0kJ2%2BP4uxI4WBz%2FVWGG41A9GttTYsi%2BGjL3lZ7ANpe89t0SpBGy0zQCgRcheiDg%2B0OvSi3Piu4fTD1hpS9YEpv3t%2Fkmf3OC0z7D7Y%2FXieT6AyrPUEizoQwUw%2FX6fdRcnonrkDed0XQLnaLmF3PwGfo9AUtFyd2MJfliH8b1SIZjhAB4PZEfjCMlPuCdKGwXY7jJ%2B%2FXED3NLRJjI7UqMzxAKg7orPHF4KmMok7dUfGiajyujojkKf7%2FVOCQtYgsYvewR3KhPQBoF0R%2FhvbZMEDmiePkp9b6NtxZT2VltedIT10J1RvxHsR2%2FhOO1rek51pwfmXa%2BsWmSgmWyi%2B6rutOqdIgv9AIo4vO9tBeVOHxWQ3tTvTK3W9ltE6fHPvYtTChGTXoZfcC8%2Bo%2BUL%2FInyLdu2BAU3LBHW4q4X4gJemBWH66a0m1NMaK%2BiJMtHnOR27P8MQhZ%2B2zMNUHjZgy00Wz42IUwgNiHwgY6pgGdJIoM0oFDUPQhQCxZ7WGaPkEWQ4FcAVLu6NdGvKWVhYGfTaskA%2B4EtIkPTx0JKhXimckdMK5TtYHEFPz314EGACCln%2BDA15fqrMa8qEb8m6e7yC%2F8VL3JRakYfJt%2Fu8i%2FDT4MiaPyJ%2F6iMqhhXPat4Ogyym9iz9OIycdOypg2lSEN9YKzefj39Cz4jm2JkHU36p%2BsT%2FRqoenKA59864za6Glg%2F04U&X-Amz-Signature=adf252411ff0c2049b041a91b51913faaf029505b01f4cf96fe8b3042632937e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BP4Y5S%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDgu%2FprSSPQYdkcep1QWwPpljIwOwz17rnUti9iCUAPOAiAi66X8apkUeqeczXE%2F%2BvySqu%2BeMxMec3zxAxcqQFN2%2Fyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM5PIHXcbYJnFHUxrFKtwD3kVE75mO2lf0Fqiiz38BqubbIZfNtocI%2FAUUr70Pn46GRJELP7s6ZwHe13CK6HhkG63lpyGv4Zl6D8uw%2FvWuwAQRAnxO5Y5OU2pCcSABvZOrS4zRFhfMSv4oODBfr%2BOPvH%2FAlS4sl7yjLfezjEYez%2FPC3JMRyABNk0kJ2%2BP4uxI4WBz%2FVWGG41A9GttTYsi%2BGjL3lZ7ANpe89t0SpBGy0zQCgRcheiDg%2B0OvSi3Piu4fTD1hpS9YEpv3t%2Fkmf3OC0z7D7Y%2FXieT6AyrPUEizoQwUw%2FX6fdRcnonrkDed0XQLnaLmF3PwGfo9AUtFyd2MJfliH8b1SIZjhAB4PZEfjCMlPuCdKGwXY7jJ%2B%2FXED3NLRJjI7UqMzxAKg7orPHF4KmMok7dUfGiajyujojkKf7%2FVOCQtYgsYvewR3KhPQBoF0R%2FhvbZMEDmiePkp9b6NtxZT2VltedIT10J1RvxHsR2%2FhOO1rek51pwfmXa%2BsWmSgmWyi%2B6rutOqdIgv9AIo4vO9tBeVOHxWQ3tTvTK3W9ltE6fHPvYtTChGTXoZfcC8%2Bo%2BUL%2FInyLdu2BAU3LBHW4q4X4gJemBWH66a0m1NMaK%2BiJMtHnOR27P8MQhZ%2B2zMNUHjZgy00Wz42IUwgNiHwgY6pgGdJIoM0oFDUPQhQCxZ7WGaPkEWQ4FcAVLu6NdGvKWVhYGfTaskA%2B4EtIkPTx0JKhXimckdMK5TtYHEFPz314EGACCln%2BDA15fqrMa8qEb8m6e7yC%2F8VL3JRakYfJt%2Fu8i%2FDT4MiaPyJ%2F6iMqhhXPat4Ogyym9iz9OIycdOypg2lSEN9YKzefj39Cz4jm2JkHU36p%2BsT%2FRqoenKA59864za6Glg%2F04U&X-Amz-Signature=58e5e62f62e551ec499c7b600c6f0ad12f7d2affa66d821ea561ae360f42af03&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VUNT5YA%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCgJg1HJy%2BEXHeG4J0NgbR7ZFxvvoGsthy8O4PuGULsfwIhAOhIRA8GLSCdqu1Wp1luHIiT1RIrEDlO30UTtpKdAjiOKv8DCEwQABoMNjM3NDIzMTgzODA1Igyg4L99Xn0QUi0JpfUq3APHtvAxingbgzXXTFbCJwdNVQsJyUKH0nvPdo02zNT1TasnkR4B2RscVKOND5srbZNnzXK8AsxrN%2BVzVodp8in%2FWy2hmbJmUoSgMjEKOLymhGbXMY%2Fr2Xvl8NCLxq3VnX6w0ZDHmddlqXsl%2BgLs2F%2Fb%2ByXH23RhHTTCtzDjx%2FPAOUA6vBW2E7g21ukOplw3UnSR3MvlT6FES91S50FkSb8NW8keGOtogH82ADtgaAKMSPYpfaVgalDH5Vyw4pD2voBj9C5YrCTRk1qMY0SLsALw46Vul5coUu1i6KT7MtdgIsf1fZpzqaE93Z%2B44WaEJh8uUsTvvaXhIIg3P%2BcWPVTw8wXmMifmrGI6Br%2BY%2BQccfuOsXz7G9DKloEPN%2BBiTwNlbdylx1tLI33V64aGud9bGZusdAjVox%2BqLT8ZwokK71LLQ3rlBGz%2FmeJurAuBfhRv7M%2FF7YOl5b3twPStLyqfY5MJuVMbNL3uDl5SOiXM9xnJHJVwccUltKduQH9AJry48ghxhlgM1ArwGxVxoVsA6aqprBguHvEqSV5EypbTbFpdA0eCw16NPAFaejL7yurgwsmDqsJ3OC4%2BgfkU%2FCnlnpqml%2BmpjdxBBh6bl0Mis7rBzvXO%2F8mA0DfluUzDL2IfCBjqkAW3ZAGg2PfO75Ap8DK3UsI5EtJ6kFUcBNOX8%2FFXYh2cWDbPgvq2NtolDftOJnItVRUFwvFdsO1UZsDQ18GsXftyLAW8YLjBBNQpHhMVUYeQBF6VGxTsFUad8EoryL2F7cji677cvcfW9DI4ddQ%2BW68l%2B5QN1zzTmIRE6KYcHESsI8A0xs%2FSWoeLTwO4iej2LtKUvz9dDYC4LuBuSJqBGL2KurFW%2F&X-Amz-Signature=397978cfc9e5d422ea12d1d5cab9c8a97e20cdd03b1d580df03e246aa9bdde3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJE3MOGT%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBwPmc4Si2s6mqVfk9mq4uOIiHxBQoUBGTjcOclY70qgAiAqgSl8Pl8EtusbCBJ3URKIxpKJcEr6A3WRNyFEcxevHyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMSoI0HYNslMQ%2BgutlKtwD2GGdHHONLoY1UE0YM6Zij%2B8EoUZt12mwVUg3IOD9fH0BSMwEnVdoyvwa4Q9YDYrF3ckazlpaWBYjGLBY%2ByjfCeOoXWUaX3nqC4DdanfRpyx0gZ%2BEq4nhaXujcqTLWdrFGpdiEskMy2a%2BBlx4DT8op%2FHPwGDHf%2BuVyytm0FwjqydBnXiwLZioB1Eg9cbj39%2BdSsTBgjNRkWCB%2FtbUGn9EX%2BeiT419DWubpamkB0CWaPejR9gOsyHZ5Q2ki1Z45fs2JCOnMFUCIwBv8zZkQIRSUVgGv0vpJ1WDCFaZllFmivLNS0%2BmFoTMjmgeJZNnJeHUY9Baqv4pMfcu65L6FwStPiVFbe6%2F0eHoLJcUDn9P853VQDf2aisYghE9IVWwsKoSPdHJWuqd2l4YRXUGvamtduenRxvESTvPxVUQKtic4DWVP21pjh8upis41LUnL%2FC7AKWw9JA%2BZylhV1BopbORS6oMmv%2BzGtGVogQrf6LP8nylDoHlkgX%2BBUuMkOI1ydyMQtsOqHgkO0pa2Uiqp1jN2jKRnDuceTPktjYtlBOmLlEEr5YS3yYUQcvWPyxWPiEfTJwnRiPV9UToXiQNbB86vcypF%2FFB9FRgni5NbeSAw8Ahlf2QG4RC6%2FDniZgwi9iHwgY6pgH%2BknJZI08oah7Xvp9V1RvFnDTAc0WbOEMfqP9dnqzfzRHGHvLuEjhYrxNLR4XfVH7GCAyQJMCVokFMNNRSnOUS4TgPWHz%2FFt%2FnB%2FMlxcMpa9NKA3wEiSQytarRK3mLp1vvb27ty0skaBHl%2BtVyrbFM%2B4NoGfIxsq8PHnBKM84fhvkA4ldBX5ByGjlZ5zMUAoJEQr5SGJLLWeUGNVhPQd44XxoXi3tu&X-Amz-Signature=21218a567f449614e60baee4f22708c6489c1e949d831025b724f056c4735de3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647BP4Y5S%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDgu%2FprSSPQYdkcep1QWwPpljIwOwz17rnUti9iCUAPOAiAi66X8apkUeqeczXE%2F%2BvySqu%2BeMxMec3zxAxcqQFN2%2Fyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM5PIHXcbYJnFHUxrFKtwD3kVE75mO2lf0Fqiiz38BqubbIZfNtocI%2FAUUr70Pn46GRJELP7s6ZwHe13CK6HhkG63lpyGv4Zl6D8uw%2FvWuwAQRAnxO5Y5OU2pCcSABvZOrS4zRFhfMSv4oODBfr%2BOPvH%2FAlS4sl7yjLfezjEYez%2FPC3JMRyABNk0kJ2%2BP4uxI4WBz%2FVWGG41A9GttTYsi%2BGjL3lZ7ANpe89t0SpBGy0zQCgRcheiDg%2B0OvSi3Piu4fTD1hpS9YEpv3t%2Fkmf3OC0z7D7Y%2FXieT6AyrPUEizoQwUw%2FX6fdRcnonrkDed0XQLnaLmF3PwGfo9AUtFyd2MJfliH8b1SIZjhAB4PZEfjCMlPuCdKGwXY7jJ%2B%2FXED3NLRJjI7UqMzxAKg7orPHF4KmMok7dUfGiajyujojkKf7%2FVOCQtYgsYvewR3KhPQBoF0R%2FhvbZMEDmiePkp9b6NtxZT2VltedIT10J1RvxHsR2%2FhOO1rek51pwfmXa%2BsWmSgmWyi%2B6rutOqdIgv9AIo4vO9tBeVOHxWQ3tTvTK3W9ltE6fHPvYtTChGTXoZfcC8%2Bo%2BUL%2FInyLdu2BAU3LBHW4q4X4gJemBWH66a0m1NMaK%2BiJMtHnOR27P8MQhZ%2B2zMNUHjZgy00Wz42IUwgNiHwgY6pgGdJIoM0oFDUPQhQCxZ7WGaPkEWQ4FcAVLu6NdGvKWVhYGfTaskA%2B4EtIkPTx0JKhXimckdMK5TtYHEFPz314EGACCln%2BDA15fqrMa8qEb8m6e7yC%2F8VL3JRakYfJt%2Fu8i%2FDT4MiaPyJ%2F6iMqhhXPat4Ogyym9iz9OIycdOypg2lSEN9YKzefj39Cz4jm2JkHU36p%2BsT%2FRqoenKA59864za6Glg%2F04U&X-Amz-Signature=d86dee7273bdbaeaf4d9da94ec6a2bfd518669274129bc3e9d96c33a5366e860&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
