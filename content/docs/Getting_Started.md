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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN6KL2FE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCip9kJaJP1ysP2n7BTuo1FUFG5bsq8EPXBB7uK0BlvdQIgIJ671u8%2F596BqIOIWfX9JSeAOSy8vo%2BgZ22t5eig9kgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhlO%2BH92fjR9l1liyrcAy646q6kqp9My3lDP7K%2BwfnU9F2NwTUa7aOwy8OTem%2FFTCc5ANvL%2FktGJCSUCi4hKtHLmdUjNBb%2Bd%2B20na1U016umwopmLIgKa6%2BahitdM%2Fc84kqOZPDxvOFzeYY3%2F0NfZFvQl3C171zw%2F4eP0s3OlViCBaJS8oI8RMvzjRdpvs%2FKMvwW%2FPAJbj6L7pTyoE59mYUj6DbUmQePYsolIi3Mn4%2Fi4DYOd%2FXCBAfEZV%2Fq1rKBiby%2B%2BjSGZ2VorhSnA9MDsyZ9iTxqAG3OX6MvKLvG5CzzFJbLUL1HElLk%2BkAathTWpIO2tje1EL4DTLMcRGffkfmu3qp9GROrIXPqH56s6iSyXNJ2Uku6o34WxL7mQzoTC%2FAhfHxoMZ%2FHRTxsVKHACT1l1OnZz9PtfWlDzJ9b%2FXuK6VWQ4mln91jaJcEFJ%2FvvaWnIfSUjR8L7OvLdFklDQOug9109KkxzXF57FIdy4xT2kLOKO1I6wkDk%2BrdspbSX%2FoMcCnyJg9EGFK%2FswbOV4Y1T9PrUeCyQpqqx7UO6ox1huZlSJV2cxdtNDfVqmD66yLhPtgg0tzq8dG8OZwBGQVDe7JsX%2BmfzcOI96GNOVuriPVoIiK4h8eWL1qrBS%2FVbyy8Dj%2BxPHToec68MNbttcEGOqUBbD%2FPExWLMz2gYUKAc83PziOZqLQG3yXboWbjD8j4bBB9B5waDToWos9UOLFHyQDEBqisR9W%2B6Q%2FQwYU9RmvdjrDoPR7J3RP%2BHcaTMVDV7CwM9gP%2BxDLiUIbNu79%2F2BWxxvDkN3nbflRy6AqBSR9OHN%2F32ATg%2F0XhS%2FUx3dcpDGWW6T26szXYcDC8ECPHlYVrxiW1AfRi4wxaUGmoQyFZKQUm%2BDpk&X-Amz-Signature=01f50b0831a7455caa30aafc3bb16771d4d3ea0ccf2278e1a36b4d2d74147c78&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN6KL2FE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCip9kJaJP1ysP2n7BTuo1FUFG5bsq8EPXBB7uK0BlvdQIgIJ671u8%2F596BqIOIWfX9JSeAOSy8vo%2BgZ22t5eig9kgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhlO%2BH92fjR9l1liyrcAy646q6kqp9My3lDP7K%2BwfnU9F2NwTUa7aOwy8OTem%2FFTCc5ANvL%2FktGJCSUCi4hKtHLmdUjNBb%2Bd%2B20na1U016umwopmLIgKa6%2BahitdM%2Fc84kqOZPDxvOFzeYY3%2F0NfZFvQl3C171zw%2F4eP0s3OlViCBaJS8oI8RMvzjRdpvs%2FKMvwW%2FPAJbj6L7pTyoE59mYUj6DbUmQePYsolIi3Mn4%2Fi4DYOd%2FXCBAfEZV%2Fq1rKBiby%2B%2BjSGZ2VorhSnA9MDsyZ9iTxqAG3OX6MvKLvG5CzzFJbLUL1HElLk%2BkAathTWpIO2tje1EL4DTLMcRGffkfmu3qp9GROrIXPqH56s6iSyXNJ2Uku6o34WxL7mQzoTC%2FAhfHxoMZ%2FHRTxsVKHACT1l1OnZz9PtfWlDzJ9b%2FXuK6VWQ4mln91jaJcEFJ%2FvvaWnIfSUjR8L7OvLdFklDQOug9109KkxzXF57FIdy4xT2kLOKO1I6wkDk%2BrdspbSX%2FoMcCnyJg9EGFK%2FswbOV4Y1T9PrUeCyQpqqx7UO6ox1huZlSJV2cxdtNDfVqmD66yLhPtgg0tzq8dG8OZwBGQVDe7JsX%2BmfzcOI96GNOVuriPVoIiK4h8eWL1qrBS%2FVbyy8Dj%2BxPHToec68MNbttcEGOqUBbD%2FPExWLMz2gYUKAc83PziOZqLQG3yXboWbjD8j4bBB9B5waDToWos9UOLFHyQDEBqisR9W%2B6Q%2FQwYU9RmvdjrDoPR7J3RP%2BHcaTMVDV7CwM9gP%2BxDLiUIbNu79%2F2BWxxvDkN3nbflRy6AqBSR9OHN%2F32ATg%2F0XhS%2FUx3dcpDGWW6T26szXYcDC8ECPHlYVrxiW1AfRi4wxaUGmoQyFZKQUm%2BDpk&X-Amz-Signature=2632e17f049b5892293cfa2af8773221a073412e940228c0c439adb7e5a411ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN6KL2FE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCip9kJaJP1ysP2n7BTuo1FUFG5bsq8EPXBB7uK0BlvdQIgIJ671u8%2F596BqIOIWfX9JSeAOSy8vo%2BgZ22t5eig9kgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhlO%2BH92fjR9l1liyrcAy646q6kqp9My3lDP7K%2BwfnU9F2NwTUa7aOwy8OTem%2FFTCc5ANvL%2FktGJCSUCi4hKtHLmdUjNBb%2Bd%2B20na1U016umwopmLIgKa6%2BahitdM%2Fc84kqOZPDxvOFzeYY3%2F0NfZFvQl3C171zw%2F4eP0s3OlViCBaJS8oI8RMvzjRdpvs%2FKMvwW%2FPAJbj6L7pTyoE59mYUj6DbUmQePYsolIi3Mn4%2Fi4DYOd%2FXCBAfEZV%2Fq1rKBiby%2B%2BjSGZ2VorhSnA9MDsyZ9iTxqAG3OX6MvKLvG5CzzFJbLUL1HElLk%2BkAathTWpIO2tje1EL4DTLMcRGffkfmu3qp9GROrIXPqH56s6iSyXNJ2Uku6o34WxL7mQzoTC%2FAhfHxoMZ%2FHRTxsVKHACT1l1OnZz9PtfWlDzJ9b%2FXuK6VWQ4mln91jaJcEFJ%2FvvaWnIfSUjR8L7OvLdFklDQOug9109KkxzXF57FIdy4xT2kLOKO1I6wkDk%2BrdspbSX%2FoMcCnyJg9EGFK%2FswbOV4Y1T9PrUeCyQpqqx7UO6ox1huZlSJV2cxdtNDfVqmD66yLhPtgg0tzq8dG8OZwBGQVDe7JsX%2BmfzcOI96GNOVuriPVoIiK4h8eWL1qrBS%2FVbyy8Dj%2BxPHToec68MNbttcEGOqUBbD%2FPExWLMz2gYUKAc83PziOZqLQG3yXboWbjD8j4bBB9B5waDToWos9UOLFHyQDEBqisR9W%2B6Q%2FQwYU9RmvdjrDoPR7J3RP%2BHcaTMVDV7CwM9gP%2BxDLiUIbNu79%2F2BWxxvDkN3nbflRy6AqBSR9OHN%2F32ATg%2F0XhS%2FUx3dcpDGWW6T26szXYcDC8ECPHlYVrxiW1AfRi4wxaUGmoQyFZKQUm%2BDpk&X-Amz-Signature=221dcce19c9cbb39b93ed368ff55cc7b295fdd08163d2ec757a0321e47c73ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDVHAKA6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5RDrq77%2BKYVvK3VOY7YYBRtPE1difO%2FkZWXyn8PQ3GwIhAM5MdamtD9V5svu4jOhIAyff4024Bvrwbr8S%2Be7nUfAQKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxn%2BSZzmnwUB3EiP2Qq3APJjUZfqeWJUeua844k96JGtTPHzEl97fNf%2FR5AKrEyLkDGAcuec7ILv5zX1H%2B4uJ%2BsgZU1r0OXYNL8V8W0Tc%2B12YO9wbBw%2FaAtCEbHMb%2BrybfFwUWdjLMcyQQr68y1dPQ%2Fs7P8Fbs7gmaLIaid6NzBEEJzm76xIx8OvhOvip2YcLuo9csgr07kY3jv%2BIftLQocFHheqPSANH2B7MVAq051%2BMwv5MdInpdwc2YeVvjnqXOgoZTc9vVf7S2olHBA1LWA1Qp0bLWz4HzjfdmZFYQg0Y1VRmgAY8KJmvGAHEEE%2F2ZOGAmaThri94n2xX3n5nEgtaAx%2F4iWwdbXqnNTZRlmbtTQb4JgRVoKjWmbvxENEoMXvhqH%2F%2BzVJxctFoatJReoe89ytrF%2FJtgDScTJRv1gZ7bHMMNHQRAd%2FL3xa67graklCWHjneorkj3BjD%2BjWZfFbsGH6WT2wX1rBOZUC3UTULTkh8hhKvDn3NQJiWbDVLew7H%2Fuq2Vsw98Qw%2FMqVHPgVL%2FhoFQ2M13MZqIRGgjVl%2B6Zdc0cJ5cx1vnZuUwwxa4vd0G7C5dGU5YVe8m5TXz5148LHgyFKGgF9okyo55tSFvZwPnmLpDSGF7gKkchp7pQRmgXdqlOM56UGjDr7bXBBjqkAR9PlcR36Ge4EuPZuwZi%2Bh%2FD0JfZdu89t71C8Q6xDj1rGwmHV%2FjOa93tQ6lwsjq2ViNNtMJk0jvhw5r52blKfrquKnF%2F7mhZbOIvnGX6IlkHLPAScnKK%2F6xwhg2%2F5r2pwgwKielwiYUT5ZizNjUiNB69Svtirm6TrP3GsVU1VwQBI5SRryTcuU5GfsUlL2GA%2Fy2j26%2B%2FbrnZh81pgx4PNnCJWjep&X-Amz-Signature=66274e6c2e80cc187548def1339d283ae3e086a857c3eb8093df9ade6ad8bf11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JBHFG6U%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0WFdWHLc1zF73211FUykw3vqVKThb4%2BV3Iv2iXEDoQgIgNjP09pnGG8%2Fv6Sz0kgGV2GwoeWlQ4xhzQooknlRbeh0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2r1f%2F68IaH%2FMbvtCrcAygWtTd7HR8I6bA%2Fy09x%2BTtM5h4S3L5FRDhFb7BLIovNU6tpDB6Ltv0W3qQ59hLdz%2BcyXUnHx89LIRZ56plVAFmpdB5LzG2dcsPhW39CzdnoHdVrkMp9NFQ3nCWznoCz2sECFUSX6irPF1XBGaWT%2Fa1IlOe0o05XTc6EV8s%2FMGJ8euAwY8gHj412CR4gViP7zhNv%2BLgw9BT8JbxjF077NrgOdTQsBOSUkmPzbwWPWjNqUDDQPHygocfiBiyR0yoCh%2FEnyWbDP1QaTxBM%2BAyob4nvo5npVrXY33MhAsQoBXufJkWjdCIRqjTlTTvfmT%2BuELJ%2BeAG5Y6Xx%2B9V4eM87KhEzQY17Pwx3C3uqJQwjHXZiFEMrb1kOttjYsgs2xawFXUp%2BKLlH5QZ%2FSm2S8Fl5%2B%2FIAYn%2BcSpcAKucLw0%2BIlfqaVwgw%2FtsEYr0Umv3k06yRn2hrkQ2rVYtm0Ftr7F96m%2BG6SxFBhouskUhD4O5J9jKbApbx%2F5ne5cGGpL6yyMBbuLbWG9hr9THi92vsWPtFtT1nIoVS%2BqK0sZb2pkg8kAz797L1U7mpytq%2FipcCze75SaXAkbBXszKnmE4QE8cNqCPI3oQZPVK9P5JRSmQW3kramq2ViUQKMaioZRT3MPnstcEGOqUBjd350henwH3ABhvs%2FAseF0BiXcL04EP2HaHVJx6hg0uxFPbFQuFoUot9fAVXSuDMBh8vHV6sIlmciK%2F4SLN%2BU4kSNaP6LscMXSZCIX18HKt5D1sTvAyKYnPf52ordDBL3FPkQoCO%2Bg3nPY5wiyHb6jxDfM9jih3pOtx4hIJPJKYWqSO9Kubc9IHwExTU6NFaIkqJVzb5NPRV59cSMtJJjK%2FswN6h&X-Amz-Signature=b17f11a138e9e2dfa8b6ac5a595855358b046da1c64d75af0668ed11f2277b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN6KL2FE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCip9kJaJP1ysP2n7BTuo1FUFG5bsq8EPXBB7uK0BlvdQIgIJ671u8%2F596BqIOIWfX9JSeAOSy8vo%2BgZ22t5eig9kgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhlO%2BH92fjR9l1liyrcAy646q6kqp9My3lDP7K%2BwfnU9F2NwTUa7aOwy8OTem%2FFTCc5ANvL%2FktGJCSUCi4hKtHLmdUjNBb%2Bd%2B20na1U016umwopmLIgKa6%2BahitdM%2Fc84kqOZPDxvOFzeYY3%2F0NfZFvQl3C171zw%2F4eP0s3OlViCBaJS8oI8RMvzjRdpvs%2FKMvwW%2FPAJbj6L7pTyoE59mYUj6DbUmQePYsolIi3Mn4%2Fi4DYOd%2FXCBAfEZV%2Fq1rKBiby%2B%2BjSGZ2VorhSnA9MDsyZ9iTxqAG3OX6MvKLvG5CzzFJbLUL1HElLk%2BkAathTWpIO2tje1EL4DTLMcRGffkfmu3qp9GROrIXPqH56s6iSyXNJ2Uku6o34WxL7mQzoTC%2FAhfHxoMZ%2FHRTxsVKHACT1l1OnZz9PtfWlDzJ9b%2FXuK6VWQ4mln91jaJcEFJ%2FvvaWnIfSUjR8L7OvLdFklDQOug9109KkxzXF57FIdy4xT2kLOKO1I6wkDk%2BrdspbSX%2FoMcCnyJg9EGFK%2FswbOV4Y1T9PrUeCyQpqqx7UO6ox1huZlSJV2cxdtNDfVqmD66yLhPtgg0tzq8dG8OZwBGQVDe7JsX%2BmfzcOI96GNOVuriPVoIiK4h8eWL1qrBS%2FVbyy8Dj%2BxPHToec68MNbttcEGOqUBbD%2FPExWLMz2gYUKAc83PziOZqLQG3yXboWbjD8j4bBB9B5waDToWos9UOLFHyQDEBqisR9W%2B6Q%2FQwYU9RmvdjrDoPR7J3RP%2BHcaTMVDV7CwM9gP%2BxDLiUIbNu79%2F2BWxxvDkN3nbflRy6AqBSR9OHN%2F32ATg%2F0XhS%2FUx3dcpDGWW6T26szXYcDC8ECPHlYVrxiW1AfRi4wxaUGmoQyFZKQUm%2BDpk&X-Amz-Signature=3eec5cc92dbef10bc3a41212a4dfb2c07e8df70ca290d4338a4a0888e41fec80&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
