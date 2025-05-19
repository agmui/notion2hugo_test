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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAS27GP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNKmW921IYxzS9COPA0KR%2FwzFpWOA0q5qUrkNoFsoRaAiEA%2BoZ5kyr8U03wQOQRdb7LkJSdimaOnxMUzEpybwbEMlEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPY8t9pNP0%2FqrcGBSrcA4Ev%2Fk4RXm5KsNJ6zoeWLtbYYS02mvoSVZM2NnEflmt%2FztbS%2BXHSEQ2CmPYzBZcba%2FbyfWSTENbXlqp1unsEUQSO8xAdZGyeF%2FaujraFCPef5IXyTA9DjGgom%2BQkPZfZGWbmNlu0ExEOywOTCuRcDdRCc12t1ZxTv%2FXlGtWQM8yFzmdsl2y1WrmsvG%2FFnMUOqV0JKUKdxojC4XFBZrgx46FaWnUpCyGaZ57fvFMLBMRrXFXRNYBh3JhadY8ULO6yITPEWrcLP5gn9okk%2F8bY4VYOdPPRI2culRUOY4DTc4TTcDHEBZKbWB6Gd8eCTb9pGMMNRFrFwbHp7DsXfQaS3ymtUroElLJRtVpCMdHHcowO6qHLeqiwIi6BK5ditWby%2BKq3JINqdkQWBDUNMXYBvfis1EEO96dINaRnKQGQDGRTxyVl0aBysb%2B%2F6GKb%2BJ2cW8WQKLDrYXDS3HoXgajQpCQc1iJwOXa0xK1V9XvP%2BtLd2sKAcE0AxLE%2Bl3tUKQ2SG3uzEGbDn7Qz1z4J6cM39uUNl8ajCBVcs2FPR4dNAzErVjrf7C3ilw9Hq9%2ByEZkED3StykyL%2FJpXSbxib7v44MRS%2BobNVZWjK8h0kiV9eauMkDKOz%2Bcsv2KFVuKdMJGxrMEGOqUBzRZvO%2BqcjGnPANg5VGHLrMhEtQuzN4cxX1z8eJ5hsmzHtYxi3z0Uf4MHyB6ap%2BeTwAop3IIdSsmUFP58tpnLKGYnKM6yS9HaoDNTfpczJ9A8hK%2FE32XchUb%2FhqFVag0z5wgj77UkBcuUBeK6DKQJq91BLBmyXTQ1Y3lMBpZ8%2BVV%2FUkt7gjEAywY7mAgjYeY6BXgKw1VwL6uOcL2z7jP8CNBJnHc%2F&X-Amz-Signature=f81926166e68f35dbf527e2f382f56ae583add966c4da991e01ccc26f05bb0ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAS27GP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNKmW921IYxzS9COPA0KR%2FwzFpWOA0q5qUrkNoFsoRaAiEA%2BoZ5kyr8U03wQOQRdb7LkJSdimaOnxMUzEpybwbEMlEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPY8t9pNP0%2FqrcGBSrcA4Ev%2Fk4RXm5KsNJ6zoeWLtbYYS02mvoSVZM2NnEflmt%2FztbS%2BXHSEQ2CmPYzBZcba%2FbyfWSTENbXlqp1unsEUQSO8xAdZGyeF%2FaujraFCPef5IXyTA9DjGgom%2BQkPZfZGWbmNlu0ExEOywOTCuRcDdRCc12t1ZxTv%2FXlGtWQM8yFzmdsl2y1WrmsvG%2FFnMUOqV0JKUKdxojC4XFBZrgx46FaWnUpCyGaZ57fvFMLBMRrXFXRNYBh3JhadY8ULO6yITPEWrcLP5gn9okk%2F8bY4VYOdPPRI2culRUOY4DTc4TTcDHEBZKbWB6Gd8eCTb9pGMMNRFrFwbHp7DsXfQaS3ymtUroElLJRtVpCMdHHcowO6qHLeqiwIi6BK5ditWby%2BKq3JINqdkQWBDUNMXYBvfis1EEO96dINaRnKQGQDGRTxyVl0aBysb%2B%2F6GKb%2BJ2cW8WQKLDrYXDS3HoXgajQpCQc1iJwOXa0xK1V9XvP%2BtLd2sKAcE0AxLE%2Bl3tUKQ2SG3uzEGbDn7Qz1z4J6cM39uUNl8ajCBVcs2FPR4dNAzErVjrf7C3ilw9Hq9%2ByEZkED3StykyL%2FJpXSbxib7v44MRS%2BobNVZWjK8h0kiV9eauMkDKOz%2Bcsv2KFVuKdMJGxrMEGOqUBzRZvO%2BqcjGnPANg5VGHLrMhEtQuzN4cxX1z8eJ5hsmzHtYxi3z0Uf4MHyB6ap%2BeTwAop3IIdSsmUFP58tpnLKGYnKM6yS9HaoDNTfpczJ9A8hK%2FE32XchUb%2FhqFVag0z5wgj77UkBcuUBeK6DKQJq91BLBmyXTQ1Y3lMBpZ8%2BVV%2FUkt7gjEAywY7mAgjYeY6BXgKw1VwL6uOcL2z7jP8CNBJnHc%2F&X-Amz-Signature=218d79be24c7ed89eb2b3455d6940434556b454314763b2f6f398d88f29a99a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAS27GP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNKmW921IYxzS9COPA0KR%2FwzFpWOA0q5qUrkNoFsoRaAiEA%2BoZ5kyr8U03wQOQRdb7LkJSdimaOnxMUzEpybwbEMlEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPY8t9pNP0%2FqrcGBSrcA4Ev%2Fk4RXm5KsNJ6zoeWLtbYYS02mvoSVZM2NnEflmt%2FztbS%2BXHSEQ2CmPYzBZcba%2FbyfWSTENbXlqp1unsEUQSO8xAdZGyeF%2FaujraFCPef5IXyTA9DjGgom%2BQkPZfZGWbmNlu0ExEOywOTCuRcDdRCc12t1ZxTv%2FXlGtWQM8yFzmdsl2y1WrmsvG%2FFnMUOqV0JKUKdxojC4XFBZrgx46FaWnUpCyGaZ57fvFMLBMRrXFXRNYBh3JhadY8ULO6yITPEWrcLP5gn9okk%2F8bY4VYOdPPRI2culRUOY4DTc4TTcDHEBZKbWB6Gd8eCTb9pGMMNRFrFwbHp7DsXfQaS3ymtUroElLJRtVpCMdHHcowO6qHLeqiwIi6BK5ditWby%2BKq3JINqdkQWBDUNMXYBvfis1EEO96dINaRnKQGQDGRTxyVl0aBysb%2B%2F6GKb%2BJ2cW8WQKLDrYXDS3HoXgajQpCQc1iJwOXa0xK1V9XvP%2BtLd2sKAcE0AxLE%2Bl3tUKQ2SG3uzEGbDn7Qz1z4J6cM39uUNl8ajCBVcs2FPR4dNAzErVjrf7C3ilw9Hq9%2ByEZkED3StykyL%2FJpXSbxib7v44MRS%2BobNVZWjK8h0kiV9eauMkDKOz%2Bcsv2KFVuKdMJGxrMEGOqUBzRZvO%2BqcjGnPANg5VGHLrMhEtQuzN4cxX1z8eJ5hsmzHtYxi3z0Uf4MHyB6ap%2BeTwAop3IIdSsmUFP58tpnLKGYnKM6yS9HaoDNTfpczJ9A8hK%2FE32XchUb%2FhqFVag0z5wgj77UkBcuUBeK6DKQJq91BLBmyXTQ1Y3lMBpZ8%2BVV%2FUkt7gjEAywY7mAgjYeY6BXgKw1VwL6uOcL2z7jP8CNBJnHc%2F&X-Amz-Signature=83a5c421daaee341f26d4d207cadb3c9d855d61a95b0eac1eac52961fbea90f1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4O5GXQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA1jAM6ndBqmaSyONUxDQmriTPPdj%2FacuejWAwJ6%2FOZQIhAPTfk7ccY9EzOLgNkXdfRWf17oFu%2Bm3V%2Fl%2Fp2nDi1a5RKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1ZLi9EPv4iYHLMUsq3AMUndxdI9hxK%2BwhvAZdiJoQWkEteAr7cVpHAzVXeHEfLDadA3D5yR54rotH8p6pbKnw17n5e36JO03%2Fv3WDNw47ZVp0JRTlz%2FGaEgC7UQxmtEMsRXRg31OY7hnCdLXuRtVJtDFVINCvTp0Ttvx%2FKJd83tdbCERJJVY3779EOTDECFZxtDyglExXADwYjk94GUoQ7nvUmh7MSjHutHtHwDzFHlAJ%2Fk7nkpN6lzMUU5SW72WxY5LRpcnlW0KF%2Bpz1iXlFufDN2gSY2mm4okhPhLSXTF%2BjRILkhHUx9qoB5%2FNdpsUTwKtItzGTmDKiLi%2F2san2IHHZ3ZDKYrlRH3ovw9pQjty0xRlU6bp3WCezgjGl3zgybpGSQYMTnsWgyeV79rwraqFRlx8jCzuoRDyoC%2F2Ov%2Fyh4PJEOLdI3Dm2MBEEZNs34QlMG6vhGedEo1kDdEXfT5pVyMi3HVWHDnSjh%2FP375aCheg8tHIF29sOvDQewqaf7tWZhgLbGYv0vKnMA7qTbFLb%2FW2oKocmhDlMkIXpojnDiKIWBPvVNPU2lO%2BUd7JmzLJHODNmb0waH%2F5lwxiCdbBRWZAYe7Jn4foT3aCEgqUrsSbYQ4%2BbF5eOzyhc3JmmXvJLm3RDQ2BhxDC4sazBBjqkAWvBfcLOemZT%2F0uDVLXZqnx3U3tk570KDHS4aAiO4VCInAzmfgiUGu77VAg%2FHZQz4pD2vQV3Gq28ed5K%2BkxDoL7sNL4%2FVBSua4dekSV6rwlgtmnKu138kFG0MOunH4xHZWf5fo%2FmTzeyHBMm4jnVSaBeQ9bdK%2FacDtLKQUVo3QnZKshREdYXQpJdXGhTACpvIKbcqwI2%2Fij1CSQkUqwLsJOyK604&X-Amz-Signature=25b5ae2ac33897bec69f96782e3b7341e5a2cc2063e645ee0d3ddf16fe94c033&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQAAGHK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaXmzp5PKuvGwDL1MlHcouRksFgs0cxqR5WMIEjg8cxAIhAK%2BKBzun8DeznNB4B%2Fy76VMHC62Pv9IPzgt7WAadR69sKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzzllx3l42IVsQ5B2Mq3AOG%2B5isB3wKmtwr7Pl7A6Qyr77s8KIse7pSXvS66CtOTDilOk%2BgIksbaV%2Fc8Y%2FiKuXBYkTJug4Yz58JoVStIdQYrfaRyt1uMG6EZvsumKRvLvHWN%2BNetiZDPP5K%2BBBaoAC4UUEDlwmjlcmegGoMphhjtAiLXl0joY8WDfe4jkchvLDVnvpDvJucZfHjxH6grosr20xtByjQFZ03UoK2NJCPXRFcWWrddOlPPoGpFBCNevsiFFFM8%2FnmSiHZKveyCZLz5hAbXzqVWAirXycSaHc9dHjivcMhPsdxFSRp7qqrlmbQ13lGuUtk7MM3LSLLvEaU7Zb5hniaFdmEr2%2FfMIXoQ8otEoTmkWKEWuedpilb%2FUA2K%2FvJ52UtOM7vKNYY3tcmG4zbF5i1%2FQgHFuu4U2uSoSW%2BaxVwpHH%2Bp16MBcKscqwTQS8gZxnJ8desFsgn8DGthflPnKPrs%2FXR5cbUB37EaFw%2BM3YRgKMn%2BVX0e6INuBEn%2F0bUh6XIyuhzYHkABqtN82HIghfnBy96YxsH%2B3b%2BU%2FsLwu07ia1ASfzAIDeJOqk0%2BFIxgDe%2BfvcBXPMck4ekjGRiujyFg7ImI73zrMBipoyGso0u7u5cNYUZmyA3a8%2FJuMOfJWMngunw4jCdsazBBjqkAQrE5gS72RhkYsw59WzQFIMlNF96XQyJTd6bNoDVknnP7BRf6Qsn%2Btu7pWEev%2BEbhFzsf8qmXR4%2FU%2BZzOubFJShY2ZWlnUJfGusq0riDXGuBQJBZ2oWB8NBOzC6WJ0ItFeSn8fg%2BcMP%2BKfk2sRQiT4lXjEB58WZYn9992IrdmWSLdqC197N%2BkoBYdBLS%2BGet1%2BcEN6WTMkZCdtf3dUKoZrdh6x36&X-Amz-Signature=87538be669842f92108123a4fdf69165444d546074f687d0f20f8e9eba544d05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFAS27GP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNKmW921IYxzS9COPA0KR%2FwzFpWOA0q5qUrkNoFsoRaAiEA%2BoZ5kyr8U03wQOQRdb7LkJSdimaOnxMUzEpybwbEMlEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPY8t9pNP0%2FqrcGBSrcA4Ev%2Fk4RXm5KsNJ6zoeWLtbYYS02mvoSVZM2NnEflmt%2FztbS%2BXHSEQ2CmPYzBZcba%2FbyfWSTENbXlqp1unsEUQSO8xAdZGyeF%2FaujraFCPef5IXyTA9DjGgom%2BQkPZfZGWbmNlu0ExEOywOTCuRcDdRCc12t1ZxTv%2FXlGtWQM8yFzmdsl2y1WrmsvG%2FFnMUOqV0JKUKdxojC4XFBZrgx46FaWnUpCyGaZ57fvFMLBMRrXFXRNYBh3JhadY8ULO6yITPEWrcLP5gn9okk%2F8bY4VYOdPPRI2culRUOY4DTc4TTcDHEBZKbWB6Gd8eCTb9pGMMNRFrFwbHp7DsXfQaS3ymtUroElLJRtVpCMdHHcowO6qHLeqiwIi6BK5ditWby%2BKq3JINqdkQWBDUNMXYBvfis1EEO96dINaRnKQGQDGRTxyVl0aBysb%2B%2F6GKb%2BJ2cW8WQKLDrYXDS3HoXgajQpCQc1iJwOXa0xK1V9XvP%2BtLd2sKAcE0AxLE%2Bl3tUKQ2SG3uzEGbDn7Qz1z4J6cM39uUNl8ajCBVcs2FPR4dNAzErVjrf7C3ilw9Hq9%2ByEZkED3StykyL%2FJpXSbxib7v44MRS%2BobNVZWjK8h0kiV9eauMkDKOz%2Bcsv2KFVuKdMJGxrMEGOqUBzRZvO%2BqcjGnPANg5VGHLrMhEtQuzN4cxX1z8eJ5hsmzHtYxi3z0Uf4MHyB6ap%2BeTwAop3IIdSsmUFP58tpnLKGYnKM6yS9HaoDNTfpczJ9A8hK%2FE32XchUb%2FhqFVag0z5wgj77UkBcuUBeK6DKQJq91BLBmyXTQ1Y3lMBpZ8%2BVV%2FUkt7gjEAywY7mAgjYeY6BXgKw1VwL6uOcL2z7jP8CNBJnHc%2F&X-Amz-Signature=fd412681029440b36e0f460b7cfb9f725bb857f2f383574d977f10848d4c1952&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
