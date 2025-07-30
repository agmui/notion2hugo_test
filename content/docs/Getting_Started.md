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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B7LOTWN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA74usfAe%2FpCfoRqejeG9AIdK8eRifv9wRVj04lRJGwYAiEAsZzN87keuv5NCYwmKASyb8snr3JBufCNDhnqFotYGywqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzeKZ0WISaIHXaB3SrcAyGlvQmq7a2g7ogqegSSBDnm4M6uH9nYbsbWm1NFon8QYXiKGKYMF%2BT0WTyt%2Bk1KHEVYVCKpX4C9Ir%2F867uPMMYRW%2B%2BJptJ34DA%2F5de%2BSvU6l76VW%2BWnytDORk4iyKWdI6hj56nmBkLAXEd%2F117tDlhHxhI%2Fh3FU%2Fn%2Fs9zVk2oFAx94x7m4%2BTH9SV2iuiqa%2B7L0BEiMoFdPk2C04NbicG5fXIVkc6KoH4b6trNRp4X4u%2FMCbV8u3vGK9CFRBE5IpGdw9RwP%2BwPeGdJMaaJH8n%2FxmooUp1TP3DWP%2FAuHY4Cul7qwOVBBK0bI7ZNGb7fdHNoyoAf012fwOGIbxwA%2BsWXeLyAfbExjs7ZLM8%2FodI%2BCH1mb3vEccYd3jf6jfJPfcspo0BZsQgbOvope9RyObpu3E20YT1uFieXpKVEvOvUJ9F2PLJKkmXi9iYkb6rjy%2F78Z%2B%2B77cnTZCNWAZyNw%2FM5ctgWLS1%2FaJYqxAUPXhbYhn%2F02H7wf4e8h4m021aLps1w1nXvI5qHcUkODMzX%2B6W8bjfJAzPr5gr4VewQ%2BmHdnQbaPKJcWXW11OwUR5pxynnfpYLfnlBT9MDFwTOF%2BGgPLX0Pevc5cocJsehshkRNQDKlwMKJLrcI6V7FwNMJGjqMQGOqUBLMYUz8rdR26P35BB8dRPvn2TKOZ%2BDv6uKbjRq5ZoD0iSesdJff1aB0TKgy%2FjDQDT3UVByglOIHqGZZCZ02GBNeVRM04NO%2BZqbJaUAHxX38kSzNktllEdMkr3S5YSkWO%2FNCG2x7ml6Ufk66NTrkHTrQnYG%2BO8AowjY%2BrYMjPTL0%2FkN%2FuV6qNybaEHxh10l%2Bq0UQA33N1841Rvey%2FaHsN7wavIAzt4&X-Amz-Signature=93820bdd19fda65ddb9fdc70371ec75bbb52d732e74a385e1341851ade8f21a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B7LOTWN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA74usfAe%2FpCfoRqejeG9AIdK8eRifv9wRVj04lRJGwYAiEAsZzN87keuv5NCYwmKASyb8snr3JBufCNDhnqFotYGywqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzeKZ0WISaIHXaB3SrcAyGlvQmq7a2g7ogqegSSBDnm4M6uH9nYbsbWm1NFon8QYXiKGKYMF%2BT0WTyt%2Bk1KHEVYVCKpX4C9Ir%2F867uPMMYRW%2B%2BJptJ34DA%2F5de%2BSvU6l76VW%2BWnytDORk4iyKWdI6hj56nmBkLAXEd%2F117tDlhHxhI%2Fh3FU%2Fn%2Fs9zVk2oFAx94x7m4%2BTH9SV2iuiqa%2B7L0BEiMoFdPk2C04NbicG5fXIVkc6KoH4b6trNRp4X4u%2FMCbV8u3vGK9CFRBE5IpGdw9RwP%2BwPeGdJMaaJH8n%2FxmooUp1TP3DWP%2FAuHY4Cul7qwOVBBK0bI7ZNGb7fdHNoyoAf012fwOGIbxwA%2BsWXeLyAfbExjs7ZLM8%2FodI%2BCH1mb3vEccYd3jf6jfJPfcspo0BZsQgbOvope9RyObpu3E20YT1uFieXpKVEvOvUJ9F2PLJKkmXi9iYkb6rjy%2F78Z%2B%2B77cnTZCNWAZyNw%2FM5ctgWLS1%2FaJYqxAUPXhbYhn%2F02H7wf4e8h4m021aLps1w1nXvI5qHcUkODMzX%2B6W8bjfJAzPr5gr4VewQ%2BmHdnQbaPKJcWXW11OwUR5pxynnfpYLfnlBT9MDFwTOF%2BGgPLX0Pevc5cocJsehshkRNQDKlwMKJLrcI6V7FwNMJGjqMQGOqUBLMYUz8rdR26P35BB8dRPvn2TKOZ%2BDv6uKbjRq5ZoD0iSesdJff1aB0TKgy%2FjDQDT3UVByglOIHqGZZCZ02GBNeVRM04NO%2BZqbJaUAHxX38kSzNktllEdMkr3S5YSkWO%2FNCG2x7ml6Ufk66NTrkHTrQnYG%2BO8AowjY%2BrYMjPTL0%2FkN%2FuV6qNybaEHxh10l%2Bq0UQA33N1841Rvey%2FaHsN7wavIAzt4&X-Amz-Signature=ef1ee503d97a1a3db9407c47dbd1db5e580c1c9fbc4298784da2fd269c9074f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B7LOTWN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA74usfAe%2FpCfoRqejeG9AIdK8eRifv9wRVj04lRJGwYAiEAsZzN87keuv5NCYwmKASyb8snr3JBufCNDhnqFotYGywqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzeKZ0WISaIHXaB3SrcAyGlvQmq7a2g7ogqegSSBDnm4M6uH9nYbsbWm1NFon8QYXiKGKYMF%2BT0WTyt%2Bk1KHEVYVCKpX4C9Ir%2F867uPMMYRW%2B%2BJptJ34DA%2F5de%2BSvU6l76VW%2BWnytDORk4iyKWdI6hj56nmBkLAXEd%2F117tDlhHxhI%2Fh3FU%2Fn%2Fs9zVk2oFAx94x7m4%2BTH9SV2iuiqa%2B7L0BEiMoFdPk2C04NbicG5fXIVkc6KoH4b6trNRp4X4u%2FMCbV8u3vGK9CFRBE5IpGdw9RwP%2BwPeGdJMaaJH8n%2FxmooUp1TP3DWP%2FAuHY4Cul7qwOVBBK0bI7ZNGb7fdHNoyoAf012fwOGIbxwA%2BsWXeLyAfbExjs7ZLM8%2FodI%2BCH1mb3vEccYd3jf6jfJPfcspo0BZsQgbOvope9RyObpu3E20YT1uFieXpKVEvOvUJ9F2PLJKkmXi9iYkb6rjy%2F78Z%2B%2B77cnTZCNWAZyNw%2FM5ctgWLS1%2FaJYqxAUPXhbYhn%2F02H7wf4e8h4m021aLps1w1nXvI5qHcUkODMzX%2B6W8bjfJAzPr5gr4VewQ%2BmHdnQbaPKJcWXW11OwUR5pxynnfpYLfnlBT9MDFwTOF%2BGgPLX0Pevc5cocJsehshkRNQDKlwMKJLrcI6V7FwNMJGjqMQGOqUBLMYUz8rdR26P35BB8dRPvn2TKOZ%2BDv6uKbjRq5ZoD0iSesdJff1aB0TKgy%2FjDQDT3UVByglOIHqGZZCZ02GBNeVRM04NO%2BZqbJaUAHxX38kSzNktllEdMkr3S5YSkWO%2FNCG2x7ml6Ufk66NTrkHTrQnYG%2BO8AowjY%2BrYMjPTL0%2FkN%2FuV6qNybaEHxh10l%2Bq0UQA33N1841Rvey%2FaHsN7wavIAzt4&X-Amz-Signature=27eab543cc0abb72941973000be6b211f48fed07bbdbaab241c1946400d25b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I62KZ5P%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLB4%2FHWtwHasmI%2FICXGXu2gxGOt9ybMAPx4QXNqDJi7QIgeCIzbe9ekvWj8uJIuKDDE%2Bc4lJ3VXE0gAOEQLB11y4oqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNg242zgbZBRdwsgbircAxeNS6NGsB%2BneSS8Irc2EmIJeIUsa3sDH9s8Y6aOOgqWJPecYOcP%2BzcmAWJM8a9tRkCk%2BNra5E6xFrH5FbbZM%2Bx8tMSnEflRkO%2FwjQgWIztAA7OWd6W57VSKWRqEnDtkNIq%2F2Cj42d2xau82gXPBBnJZY6Kzu633%2BdI1IteSKhxGqT4CCDpZbPve2hrzhViIxzh1P5JXkebj93eDPjWxhd%2B9tfUU8dFuXGR%2FRrGapOoqUjxOyu98kG2nC15TGwMyAjIeGh6khoc9o8wz7dJIAhsOeVMdKXbaaHPqeeGGYw0GS3v3uLDPAo5W1usCCt4lnEvvnbtKPDro%2BfCi9Wp9TEHDhQMD%2BDfwIaP3J7KeXPECciwzSv6o2FDN3L7eRKOU7v3We5H8h3xFLkAKUqnl%2BDGa32%2FtH54ZR0IkVPl5WbbiSNY0jIdKvUxfK5VIiv60icNP%2BEKuCv%2FZQvMN%2FPSOQP3AE43cYWlGONFI3S1zF6SrakL5eoxsqKTSPjReQJ25kISJ4zPchMjk2n1bIWJznMI%2F9sFrPDDtNLpb4YzNcX60rY6CjV48vt1ByYjk%2BiPEXGY2QSeLKm4pG82zbuAT3S46TJZR01%2B2GxL%2B2LE91K2cRQvc6RRwcTw2Ov4WMJGjqMQGOqUBm0lr04iOKcuyf1uepghvtN6hLR%2BygK%2Fejx2t3QHVV5nulPsysfcGgBz9oSfPWGmBsDyuk%2B1a5zhHbixu%2F02yWFtY3eG7MJEo1QenFyHt1zfYZO8KqeckvrWd%2FDJ9ZKsxbsJtqHsc%2FuQcGbIkVGe0ZwmMxseCsr1cj3rIuYxXgKJ4%2BJa889zajCRL%2FjA9Eq%2F%2BDXwsLSIUB5NulTFJHKse1v3nHuQY&X-Amz-Signature=1419ad3e186de7c47a4c54c149866e3e271142a2af16a98a20f76717241df82e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635WREQWF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnA7l0NF%2FQF%2BFeKfsm5wJDurjJ3kkUY%2BeItQ97gD2yiAiEA882umsxdO7y6K%2FkyuBiKRqgNhW9WyCRAcCydiIlBggMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgPwMK%2Bzcr7znvkpCrcA8AJOt9J06KUUxwKq%2FzC3p9R%2FDPD8Z4wly2kSANyYb%2FstFvHlahuAxN7QumbjhY96URkjeio6avZ%2BPKP0%2BJpELSLNRqLedg2PqOraEy%2BCslP%2B4iqRvVC2DvN4CLsjUAUnXPFC6rmF0oFrUHsWbCBewjJBx9xxO5SKXL%2BB4g9U1W%2B20vBEXVLXSuh9tKFYEBf73ZyWN9dHjqkQWV3%2BDamXqS%2FCrkX%2FsSTM%2FfKKLJ%2FuknAihFCEiK1pYXPfns3kCwB6707hO1ruNFLfy0uFV5wgJdcPfh3fCBDT3zCuqMQarTua%2FZgUQwguEUNB%2Bmv9XVPKnjgspLVJ8Ee6DDTjt4g%2BvxXBqtZHjPvPAdVCNaMhNzV%2FVJ2mWG0mjXh%2B%2FjBdlWQmxAaEJcSOQ0WMOT2R38pT6YHsEtbppQGcy5RD4npI8eTmefcoSFUAwmBb2PFMdVhqd6CEHi7tE07QSaLYMAUBAPNOfVfqNZy3nzH7JKv9WJWRxbFBsCX0BqItqSlJTG2wcO16SG9nVqeK%2Fgx6lX80a3gGMWNvME0tSyPg%2F3BsdUBWCxuSVJpkV%2BEk%2BenggO54lNQdNFzWGUbdFseU1IrrEH8qq%2Ff9Cf7X7Fh8PSwQwT%2F%2BIsDHTfhspcpPmQXMIeiqMQGOqUBlyLlhYWLX1KptQ0UdL5El98GuhD1By5p115I5834paK0blFEE%2BX8ptcZ47kDd8TwrRwLIHTJzs%2BolLhPz5sl15CH80s3lkjBRZIoeqCsoKWX6X%2FMr9zS9RF1hipMCrJIEbqd%2FEClMowDq3cryj6bMLyjdVrWTraicP0C5Vrhpg3NTlx%2BDusuP3LT6AdGTZogUC%2FiIDy0LRPW3aHF5CH21vGTPrLR&X-Amz-Signature=fc302c2481af557c0f18b59cc66c4f38d50112c162f35484c85a486a52ab05d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B7LOTWN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA74usfAe%2FpCfoRqejeG9AIdK8eRifv9wRVj04lRJGwYAiEAsZzN87keuv5NCYwmKASyb8snr3JBufCNDhnqFotYGywqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzeKZ0WISaIHXaB3SrcAyGlvQmq7a2g7ogqegSSBDnm4M6uH9nYbsbWm1NFon8QYXiKGKYMF%2BT0WTyt%2Bk1KHEVYVCKpX4C9Ir%2F867uPMMYRW%2B%2BJptJ34DA%2F5de%2BSvU6l76VW%2BWnytDORk4iyKWdI6hj56nmBkLAXEd%2F117tDlhHxhI%2Fh3FU%2Fn%2Fs9zVk2oFAx94x7m4%2BTH9SV2iuiqa%2B7L0BEiMoFdPk2C04NbicG5fXIVkc6KoH4b6trNRp4X4u%2FMCbV8u3vGK9CFRBE5IpGdw9RwP%2BwPeGdJMaaJH8n%2FxmooUp1TP3DWP%2FAuHY4Cul7qwOVBBK0bI7ZNGb7fdHNoyoAf012fwOGIbxwA%2BsWXeLyAfbExjs7ZLM8%2FodI%2BCH1mb3vEccYd3jf6jfJPfcspo0BZsQgbOvope9RyObpu3E20YT1uFieXpKVEvOvUJ9F2PLJKkmXi9iYkb6rjy%2F78Z%2B%2B77cnTZCNWAZyNw%2FM5ctgWLS1%2FaJYqxAUPXhbYhn%2F02H7wf4e8h4m021aLps1w1nXvI5qHcUkODMzX%2B6W8bjfJAzPr5gr4VewQ%2BmHdnQbaPKJcWXW11OwUR5pxynnfpYLfnlBT9MDFwTOF%2BGgPLX0Pevc5cocJsehshkRNQDKlwMKJLrcI6V7FwNMJGjqMQGOqUBLMYUz8rdR26P35BB8dRPvn2TKOZ%2BDv6uKbjRq5ZoD0iSesdJff1aB0TKgy%2FjDQDT3UVByglOIHqGZZCZ02GBNeVRM04NO%2BZqbJaUAHxX38kSzNktllEdMkr3S5YSkWO%2FNCG2x7ml6Ufk66NTrkHTrQnYG%2BO8AowjY%2BrYMjPTL0%2FkN%2FuV6qNybaEHxh10l%2Bq0UQA33N1841Rvey%2FaHsN7wavIAzt4&X-Amz-Signature=9a0a4ff433b1352d21c78251f765ec316c60a41e141ff339da5554a154d44197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
