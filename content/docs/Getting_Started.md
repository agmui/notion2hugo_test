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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647J6SHC3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDM5kPdvFTST8X3%2BCYpaedOCxa7%2BlrI5j7xDq02oBD0wAIgannqJkK3be6mNZFkJnXwqnhk1JxuQiysmTMRKSduxGMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDqRwpUBoIgEYC97FyrcAwfAa5mhqZW3CrV%2Fg4KPzxgiF7jqR75s9Hcr0KLI90%2By4uPWQpR46N7LR6p4Q92RtKmY%2BpWjvoh%2BTcBzzokLsDKM0KfoBs%2FEs4c3iT1b86pBNQMfeZZnRVEn9BTIrretF0ZwwQ0th2MwmPaqnlREbhaf6Z%2BfWcn9iJmCQWET8XP6aYD8aC39TWvE0srP5gWh0mjujb75ByM2kC1HqVOTW9H9oE44JCHJiYQTiK5kS7C9w2jSmW0a1rkWIodvrYQx5qxtoIogxqCFOEFtQqUDTBQmmkeKzuSMD3z12Jvia3vNNNgb3EA%2BLQUkQ23J8qFacGOm3Cv2YMqzDzXOr%2BxWnshIZz9DG7krZjYshz%2Fipl2M%2F6NDpMg5UFI5Aj5QeBdIc2irCx1ywfDl2bhStOD4goC4jgiXc5ZdCvzO%2BpmmDCpJ9ufoyxvFvNsXFYuJVCFXA1DGUTSKDmrHzgrxURcQYYSpjWquvgDmpKvbfYeYACAAGCRRGFtdS9qJTGIT%2B4E%2FFFqrTBOKfZQsXBs%2Bt%2FKQVD6ahlokLBLYQVsshbxPF7CjgFtho4ODpVTVfllXdUDFmTB4%2FIRMpcXxLsC%2BA7ffGXgQ6FIfToaH5g7vA%2BQYfKcafsS4rk%2FABRVrxPx5MPqJi8QGOqUBrzv3irja0%2FWOzZKE80YcC0J5%2B2iKpnF01JfcttSMxoXNZvtX0JkcFrntKsutbguQCnnFKPGzkS0gl4HmdFNDnbt0ZIQIL7HEU5IdywclCHrgCeRwCWhMj6S9nms5FquSuAhnKN6Z8O4%2BS%2B3bu6Kia2WzmMrUAurIy9lc0gwGo13%2FBQWflHYukjBOdP%2BaZgUc1lX70vOWGz2o9z%2F%2B%2B473R%2Fo5Vpr%2F&X-Amz-Signature=c693ae6d3749703f0b891df16b7ec51c7fa01f74246cf3533de882dcbd9ceec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647J6SHC3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDM5kPdvFTST8X3%2BCYpaedOCxa7%2BlrI5j7xDq02oBD0wAIgannqJkK3be6mNZFkJnXwqnhk1JxuQiysmTMRKSduxGMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDqRwpUBoIgEYC97FyrcAwfAa5mhqZW3CrV%2Fg4KPzxgiF7jqR75s9Hcr0KLI90%2By4uPWQpR46N7LR6p4Q92RtKmY%2BpWjvoh%2BTcBzzokLsDKM0KfoBs%2FEs4c3iT1b86pBNQMfeZZnRVEn9BTIrretF0ZwwQ0th2MwmPaqnlREbhaf6Z%2BfWcn9iJmCQWET8XP6aYD8aC39TWvE0srP5gWh0mjujb75ByM2kC1HqVOTW9H9oE44JCHJiYQTiK5kS7C9w2jSmW0a1rkWIodvrYQx5qxtoIogxqCFOEFtQqUDTBQmmkeKzuSMD3z12Jvia3vNNNgb3EA%2BLQUkQ23J8qFacGOm3Cv2YMqzDzXOr%2BxWnshIZz9DG7krZjYshz%2Fipl2M%2F6NDpMg5UFI5Aj5QeBdIc2irCx1ywfDl2bhStOD4goC4jgiXc5ZdCvzO%2BpmmDCpJ9ufoyxvFvNsXFYuJVCFXA1DGUTSKDmrHzgrxURcQYYSpjWquvgDmpKvbfYeYACAAGCRRGFtdS9qJTGIT%2B4E%2FFFqrTBOKfZQsXBs%2Bt%2FKQVD6ahlokLBLYQVsshbxPF7CjgFtho4ODpVTVfllXdUDFmTB4%2FIRMpcXxLsC%2BA7ffGXgQ6FIfToaH5g7vA%2BQYfKcafsS4rk%2FABRVrxPx5MPqJi8QGOqUBrzv3irja0%2FWOzZKE80YcC0J5%2B2iKpnF01JfcttSMxoXNZvtX0JkcFrntKsutbguQCnnFKPGzkS0gl4HmdFNDnbt0ZIQIL7HEU5IdywclCHrgCeRwCWhMj6S9nms5FquSuAhnKN6Z8O4%2BS%2B3bu6Kia2WzmMrUAurIy9lc0gwGo13%2FBQWflHYukjBOdP%2BaZgUc1lX70vOWGz2o9z%2F%2B%2B473R%2Fo5Vpr%2F&X-Amz-Signature=f415637f8b8ee75c7de2d8885368fb7a7cbe0590734d7b6cc586336b560b737d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647J6SHC3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDM5kPdvFTST8X3%2BCYpaedOCxa7%2BlrI5j7xDq02oBD0wAIgannqJkK3be6mNZFkJnXwqnhk1JxuQiysmTMRKSduxGMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDqRwpUBoIgEYC97FyrcAwfAa5mhqZW3CrV%2Fg4KPzxgiF7jqR75s9Hcr0KLI90%2By4uPWQpR46N7LR6p4Q92RtKmY%2BpWjvoh%2BTcBzzokLsDKM0KfoBs%2FEs4c3iT1b86pBNQMfeZZnRVEn9BTIrretF0ZwwQ0th2MwmPaqnlREbhaf6Z%2BfWcn9iJmCQWET8XP6aYD8aC39TWvE0srP5gWh0mjujb75ByM2kC1HqVOTW9H9oE44JCHJiYQTiK5kS7C9w2jSmW0a1rkWIodvrYQx5qxtoIogxqCFOEFtQqUDTBQmmkeKzuSMD3z12Jvia3vNNNgb3EA%2BLQUkQ23J8qFacGOm3Cv2YMqzDzXOr%2BxWnshIZz9DG7krZjYshz%2Fipl2M%2F6NDpMg5UFI5Aj5QeBdIc2irCx1ywfDl2bhStOD4goC4jgiXc5ZdCvzO%2BpmmDCpJ9ufoyxvFvNsXFYuJVCFXA1DGUTSKDmrHzgrxURcQYYSpjWquvgDmpKvbfYeYACAAGCRRGFtdS9qJTGIT%2B4E%2FFFqrTBOKfZQsXBs%2Bt%2FKQVD6ahlokLBLYQVsshbxPF7CjgFtho4ODpVTVfllXdUDFmTB4%2FIRMpcXxLsC%2BA7ffGXgQ6FIfToaH5g7vA%2BQYfKcafsS4rk%2FABRVrxPx5MPqJi8QGOqUBrzv3irja0%2FWOzZKE80YcC0J5%2B2iKpnF01JfcttSMxoXNZvtX0JkcFrntKsutbguQCnnFKPGzkS0gl4HmdFNDnbt0ZIQIL7HEU5IdywclCHrgCeRwCWhMj6S9nms5FquSuAhnKN6Z8O4%2BS%2B3bu6Kia2WzmMrUAurIy9lc0gwGo13%2FBQWflHYukjBOdP%2BaZgUc1lX70vOWGz2o9z%2F%2B%2B473R%2Fo5Vpr%2F&X-Amz-Signature=6bd281b43ec91e9783e65ee4eff0e75fd520be88240247db38d3d340cf9f9dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2IDHSX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGUOqJRhxw4cc%2B9Zt5UuK%2FW10TFZnR9Sd%2FqfBpI9avN2AiEAhQDOwt1xI8922DqqXg1Zfeje%2Fcr9pSnReosfLWdNM4cq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFlc11BKUC4Po25CvircAyPVTm1jZ4Mr3tu7Kzxfq26C2LhUvBkMG0jXvHKK6o42GZ%2BMw3%2BPcos4bQQGlMlisQgdKxZCbT2C4OuxIOrTR%2B1k%2BN1t7h9gJYHaX32Hg5D9iUTGBYB4WG1XUd7CbHK5VAIUABdCV%2BalVUw9uSv5UI%2BoWwTxkP32cBbO6ZKmE59KR2voeYcqw91SaiC2zO9XZgo1dz4i1i4usUaa7q1Cyrj0R%2FPknI2FZaYhmj1OUai2oJ0rApVEl59h7fPmDXWdVzBv%2FqUV55Jd1iStyDH2ZkHBGIAIy%2BzN03fWZ79jW%2B7EC4r4OSH45RGiEERKhqLmuxo%2Bk2j3%2FwHbqPtpb9c%2BE%2F0NrFEk96mQ%2Bh2ux80PAZzNI8Jj2NDVXJ19ULxENI2g35wMD65t%2BeZTOUNGQrUDlMpjWxmmFJnf9LUljpt9HXEd%2FOl5yxS33DdUvY1vTu4d6UkjOulYnRFpNP8CGG7fVqM6k4OKCYV8c2LRU1%2B5xG19Hc7Sfw%2BWHbHyXW2JRN%2BBIB%2Bc4QiyWFvosKCNb5T4GkmmVGerZBGPTyrqpwP4nVhZD6ndxWEVj%2B6BMifoKKH5D4LUhMHeRZB9%2FroLLqRMg%2BV7GeRq8%2B3jhkqsjpkiL2kn6T3AtvQx8pPtK1CQMNSKi8QGOqUBOmyXCp73NDbjF5ajS%2BJYWUPjjCW%2FqX98CT3hxbjt1T8TQB%2FLcsl2bKZcN84%2FlCAgnqQPHNFZyiaSa7hC%2F3rEzT3IwGn0X0s6dfbf7P3zu6fnA%2BH21DoJxHEsnt7yLEoKWwFExlvqkZDj2slw3ikR0mymk7ikxrZG%2BsWcaEHAad40RrJE%2B7U0Hkv5MM0su3ViWnm4U5gWFvZ2udTa9Qc5hDNlHH6u&X-Amz-Signature=5fa898ffabe6bfd0d2390c5d93caa54b7135a1d11fd0cc692c5dd637b526c7cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2E4SHZT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIG0pfe%2FXcpueQApo0LDDjehYVPL%2FJCKvvIzJGFa%2FE8H0AiAZkuxzvEKA%2FzRHfd7X7wB4W4%2FJMdzz%2BUPECDMHS0PVnyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMadjAw6FAlAGGJvssKtwDVSKWAtKn4TFTjv9pHMuG%2FAMCfKnkuiiFGrZ0FR%2Bh%2FOza0DcDptfAiJiOV708crkf8kIoNcOoJnBYnH8317rgciuwbFI0QDswV2gi1cFvfPpSY8Lxua4SCn9oWIVG%2BBO7LIFh%2BjyrI2pEt5MG8hnWaeoF2clu83kzl8XjrZ5GCeY7DlgPjAbbmbMAySqz5m1f5EbBMyY7mlWs5oDwT0vN8YCPBoAB9Y8DcVFp10LwoIyuhTnes14oibyYh5ZmgQoYfN%2FFXhcqDu8a8AToQjqf1wes9y3JnSOaZF4ugSgQj5NTdOdHPEQXfm%2Fjb3J8%2BhZvu%2FycvaHD7%2F6y2gnKILEaHCPWEPs8cyn91%2Flmad3aJR%2FKscmudFj6tCOkWbyeYTrBAqysenDd3xKIOeZ34l%2F4Q8EEsBn5Uy5JX8aRPFrF1Hx6FcITo6MdDU45Bi9lrEeSuDAk2NGucayi%2B6Eri92GrvX9reaoyshJzebAF0LunyjYeKpdqOKPgqzFlXtzH6SsWgiO98jdya%2FlciXZjMyc21xDhPSir2VJGwYbaYtPzDDj1lqIm3N48wr2LT4navHPbikj%2B7l1q1Mx14wruywPXFNznKDhZS4htAZHyky6PTKNtEdjVeg3IJMZJuswpIqLxAY6pgHqIMO3GGcNtUS78FyhalWgLLn0ukpgOEk%2BUrozqblJh1DoV48wtwaNHK7q2EmB39ilkFPd0ZvrRu5BhkIGBPaWwvjwFQVIU0J662y3oqt8G6u7ezspiykVCWe67o%2F%2FGXmUFyvwM4sA%2FFcA6YY%2BP3Nznd0IEQpEdPVAnHMZLLf23Lcwl52eOBgeRuxM3qDSv1K7szNvS0MskeyU8n27YOEZvRwBYlDJ&X-Amz-Signature=aba93d9e72cffacaff9fa19b2f5cffa1f088fa93220155c549763d1dd93fa384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647J6SHC3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDM5kPdvFTST8X3%2BCYpaedOCxa7%2BlrI5j7xDq02oBD0wAIgannqJkK3be6mNZFkJnXwqnhk1JxuQiysmTMRKSduxGMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDqRwpUBoIgEYC97FyrcAwfAa5mhqZW3CrV%2Fg4KPzxgiF7jqR75s9Hcr0KLI90%2By4uPWQpR46N7LR6p4Q92RtKmY%2BpWjvoh%2BTcBzzokLsDKM0KfoBs%2FEs4c3iT1b86pBNQMfeZZnRVEn9BTIrretF0ZwwQ0th2MwmPaqnlREbhaf6Z%2BfWcn9iJmCQWET8XP6aYD8aC39TWvE0srP5gWh0mjujb75ByM2kC1HqVOTW9H9oE44JCHJiYQTiK5kS7C9w2jSmW0a1rkWIodvrYQx5qxtoIogxqCFOEFtQqUDTBQmmkeKzuSMD3z12Jvia3vNNNgb3EA%2BLQUkQ23J8qFacGOm3Cv2YMqzDzXOr%2BxWnshIZz9DG7krZjYshz%2Fipl2M%2F6NDpMg5UFI5Aj5QeBdIc2irCx1ywfDl2bhStOD4goC4jgiXc5ZdCvzO%2BpmmDCpJ9ufoyxvFvNsXFYuJVCFXA1DGUTSKDmrHzgrxURcQYYSpjWquvgDmpKvbfYeYACAAGCRRGFtdS9qJTGIT%2B4E%2FFFqrTBOKfZQsXBs%2Bt%2FKQVD6ahlokLBLYQVsshbxPF7CjgFtho4ODpVTVfllXdUDFmTB4%2FIRMpcXxLsC%2BA7ffGXgQ6FIfToaH5g7vA%2BQYfKcafsS4rk%2FABRVrxPx5MPqJi8QGOqUBrzv3irja0%2FWOzZKE80YcC0J5%2B2iKpnF01JfcttSMxoXNZvtX0JkcFrntKsutbguQCnnFKPGzkS0gl4HmdFNDnbt0ZIQIL7HEU5IdywclCHrgCeRwCWhMj6S9nms5FquSuAhnKN6Z8O4%2BS%2B3bu6Kia2WzmMrUAurIy9lc0gwGo13%2FBQWflHYukjBOdP%2BaZgUc1lX70vOWGz2o9z%2F%2B%2B473R%2Fo5Vpr%2F&X-Amz-Signature=9b4d44e117354155c1016bd2712aafcbf3d3b3296fc762f52ceb8f0160c8bfea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
