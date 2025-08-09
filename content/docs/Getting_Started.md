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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDQOMWQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6u53IiDZUpglLulwYbfTAr%2FYP2EMVA%2FBrCT%2B6tyGF4AIgb%2FtEZbJBtmAOWR%2FWZalJ6fh8sAE9CsGVV4yFJzCaUmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv4jeRjBl6eMWo3NSrcAzHoJNV9PyckGUUFZHmMd9aNHMasLvyu19mWp0pWM3vPJBMhHIB6WrLLVq2fBHasX5Emxiy%2FXGrhALwZuXU9%2BDNY%2B4Q6h8C8joGq5CEv6gYAsjslWtusvaMrJJ1w7Pab%2FZMWv3dE5bFs%2FCCBXmivwEi%2Bq7v0j9%2FD1Y%2FKAd0H9KDHDzvzeKDbhwKU1rEmBgaoWmvHrcBbdy2QVKrhw81CfsYYPdc8L%2FsUSMeziifMKlwQ%2BxNdmtNNK6G1fQap4pL1OOJikIveKJcAYAexzPlTngxJ2MdfENClPU5czCbdVSfCENLaPZ2Qit7r21czLDBSavnOCIco5UZRRE08xsvHC%2F52mImVwyFWgm6%2BR%2FXJEd7%2BOg0W8V0LGKR%2FvDDNsICd%2BXy%2FT9DBV3fRYpHTrOpTubCMigCs3%2B0pvF2%2FZYVvn7nExMP0NiYu3LAo2ZECHf%2F5ctjm0p9joLuwU9SOAdCKWw0qH99Hi7IOVaJ14TChIaxh4T%2Fa0g1rjs6JhxW%2BjA5uk9HCSNFS8DQ3744tspvEnZ5Vh8hElAbbVI7z3zyz62R8rlVGArUQzKXPOkt4olIH6e25VUfQI5aOZXbA9bqOupVHfR2ioDOsfAFDJOrILk6HBfVJfGLNoJHqr%2BKWMMjl3MQGOqUBcBGjGNsD1RTPMVtNjppcMUIPxsevxgEoPf2%2B6Uo5JBtGwdNrcQonqBrwqzWySdM0%2Fkxoil3Jr%2FNhb76JtEboQCCp7GZLBNcBnUPOHa2wN2By0HcmOA9zACaZbdT%2BJ%2FEe8pCUy%2FFHeN%2BJs08sP12hlK1qPxeh49mmmytdmQmonBXVIMVhcYuDo97%2FTD3MiggjQXLwhr58UTn2c8e3EKhgMGvGdCmR&X-Amz-Signature=75fb467c540b5c631f09fd4f5c46d4ff992a71021bbf3b9238b7d5de80709f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDQOMWQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6u53IiDZUpglLulwYbfTAr%2FYP2EMVA%2FBrCT%2B6tyGF4AIgb%2FtEZbJBtmAOWR%2FWZalJ6fh8sAE9CsGVV4yFJzCaUmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv4jeRjBl6eMWo3NSrcAzHoJNV9PyckGUUFZHmMd9aNHMasLvyu19mWp0pWM3vPJBMhHIB6WrLLVq2fBHasX5Emxiy%2FXGrhALwZuXU9%2BDNY%2B4Q6h8C8joGq5CEv6gYAsjslWtusvaMrJJ1w7Pab%2FZMWv3dE5bFs%2FCCBXmivwEi%2Bq7v0j9%2FD1Y%2FKAd0H9KDHDzvzeKDbhwKU1rEmBgaoWmvHrcBbdy2QVKrhw81CfsYYPdc8L%2FsUSMeziifMKlwQ%2BxNdmtNNK6G1fQap4pL1OOJikIveKJcAYAexzPlTngxJ2MdfENClPU5czCbdVSfCENLaPZ2Qit7r21czLDBSavnOCIco5UZRRE08xsvHC%2F52mImVwyFWgm6%2BR%2FXJEd7%2BOg0W8V0LGKR%2FvDDNsICd%2BXy%2FT9DBV3fRYpHTrOpTubCMigCs3%2B0pvF2%2FZYVvn7nExMP0NiYu3LAo2ZECHf%2F5ctjm0p9joLuwU9SOAdCKWw0qH99Hi7IOVaJ14TChIaxh4T%2Fa0g1rjs6JhxW%2BjA5uk9HCSNFS8DQ3744tspvEnZ5Vh8hElAbbVI7z3zyz62R8rlVGArUQzKXPOkt4olIH6e25VUfQI5aOZXbA9bqOupVHfR2ioDOsfAFDJOrILk6HBfVJfGLNoJHqr%2BKWMMjl3MQGOqUBcBGjGNsD1RTPMVtNjppcMUIPxsevxgEoPf2%2B6Uo5JBtGwdNrcQonqBrwqzWySdM0%2Fkxoil3Jr%2FNhb76JtEboQCCp7GZLBNcBnUPOHa2wN2By0HcmOA9zACaZbdT%2BJ%2FEe8pCUy%2FFHeN%2BJs08sP12hlK1qPxeh49mmmytdmQmonBXVIMVhcYuDo97%2FTD3MiggjQXLwhr58UTn2c8e3EKhgMGvGdCmR&X-Amz-Signature=9c1b91afffce144d14ce5a0f3cfb7d21d6772230a243b3a9e98be166d0752f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDQOMWQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6u53IiDZUpglLulwYbfTAr%2FYP2EMVA%2FBrCT%2B6tyGF4AIgb%2FtEZbJBtmAOWR%2FWZalJ6fh8sAE9CsGVV4yFJzCaUmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv4jeRjBl6eMWo3NSrcAzHoJNV9PyckGUUFZHmMd9aNHMasLvyu19mWp0pWM3vPJBMhHIB6WrLLVq2fBHasX5Emxiy%2FXGrhALwZuXU9%2BDNY%2B4Q6h8C8joGq5CEv6gYAsjslWtusvaMrJJ1w7Pab%2FZMWv3dE5bFs%2FCCBXmivwEi%2Bq7v0j9%2FD1Y%2FKAd0H9KDHDzvzeKDbhwKU1rEmBgaoWmvHrcBbdy2QVKrhw81CfsYYPdc8L%2FsUSMeziifMKlwQ%2BxNdmtNNK6G1fQap4pL1OOJikIveKJcAYAexzPlTngxJ2MdfENClPU5czCbdVSfCENLaPZ2Qit7r21czLDBSavnOCIco5UZRRE08xsvHC%2F52mImVwyFWgm6%2BR%2FXJEd7%2BOg0W8V0LGKR%2FvDDNsICd%2BXy%2FT9DBV3fRYpHTrOpTubCMigCs3%2B0pvF2%2FZYVvn7nExMP0NiYu3LAo2ZECHf%2F5ctjm0p9joLuwU9SOAdCKWw0qH99Hi7IOVaJ14TChIaxh4T%2Fa0g1rjs6JhxW%2BjA5uk9HCSNFS8DQ3744tspvEnZ5Vh8hElAbbVI7z3zyz62R8rlVGArUQzKXPOkt4olIH6e25VUfQI5aOZXbA9bqOupVHfR2ioDOsfAFDJOrILk6HBfVJfGLNoJHqr%2BKWMMjl3MQGOqUBcBGjGNsD1RTPMVtNjppcMUIPxsevxgEoPf2%2B6Uo5JBtGwdNrcQonqBrwqzWySdM0%2Fkxoil3Jr%2FNhb76JtEboQCCp7GZLBNcBnUPOHa2wN2By0HcmOA9zACaZbdT%2BJ%2FEe8pCUy%2FFHeN%2BJs08sP12hlK1qPxeh49mmmytdmQmonBXVIMVhcYuDo97%2FTD3MiggjQXLwhr58UTn2c8e3EKhgMGvGdCmR&X-Amz-Signature=227545113201abcfee5e94bc44bbf792a42ccf97eda341a3c5a60d22f8c97ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7VBHTIX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZf9JRczubrVSw7S7SyG79uqGcPOtvzgmp7hOik%2BZk1gIgIm70jmccMDi71OBwaTZxXnNFm4MuDEqUDuYtmIpRJWEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyKpB1uxdr%2BMzVYUircA4WkzoZs%2FnMzFi0%2BAaHwFCjDq8nU63S0ZxSKbbY4mohweFZO8mUfWS5juQqZMLxmt7a9YkMM9UH6fQUH952nMZoXAjLm2qAmZWNOpuSjvRQzzZLnN6Y6p5rFVn%2Fgz7fV3QtH7iTn0sv0qrnY44IYZt%2BopOhwRKR9nXdI7sFR0vuCFdOqtrefBmf55%2B3jLmnBYLdKQUK0IP2oIhb%2FBrEUGLx7tkQqdGOTcxbJ8LZoI3TUM1VrPt2aQnwK63PorrZSdIiaiVtEnxE66yWiTwoLOLjpLIO86qNjO6detTVU8iPvtoLUfQCW4Zm9qCXgGalT5FVWMjX1huJ2%2FRNnFki9NqII9SvwCveSe%2Bfz1jtrd4L%2F3gKAnRoaesu0zYouq30LBMCA%2BfpsHngSGEYaswAijbdID908Bu71ecnpDJJ5miuiv3d17D7Co4FxdQHj7AYKZE8hwTcsRhndF%2FnZXEYu6B%2Bl%2BfgL01p7W4MonGiEaZpOY9e86Uyot2syH699Iwc%2Bnb97kR1Yl1ipFk8KJGhfUFOWOBSQ2oVuEWaXLM6eJ8MLOdsFZ3d0WBCJzDZB67FRKNP6XF60yAI22rnGxLsuEsUHo2pGU0fGIFfCl7sXPrrk6fMS0c5aEbtUHfM9MIfq3MQGOqUBTVru4extGeHzIxmMrBoLsr5s24pO62MLd6nAjgSVqUnFdJSR2N1FoBmU6U5%2BFO0JGpeQ6ymDv47uzUUqy89t8pdxm8bRFloMeHDhN73GQuHkSv2Rn8UrlOigrrfnoqbE7ZwSbduzsOzfioGMSFSGZVbrqKkhwjWMp3JKz1jEuO%2FhpvrdShYgvAQbf1d5i4t8P4D7tlGbnVEapMRrWkoghHNWBTs%2F&X-Amz-Signature=e61c4231d4efd587c46272cad1ef4c406e225e16069594d3f82a690660fa2ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XDWOHKK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOAKgiN2HGyhIogCli%2B8TOCfIXfFQFQpq7SQFYIHtErAiB7svjbMdYDNfOBynVFZpzLQLuyzOA1iXaY2iSzRd4wsiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLmdy8jYWJpFG4FHwKtwDsv7FpOOwwlek1P5unbHclhinkrYdU0hm12Ncjf8zH6i5NsQbulyE4WVgXt3riOmbiimjh878EUIKYvDJlFtFL0TnkkAQ08TBqHq3RM3QQQe6YJlDZNyldXVeYqovm%2B7dban7WqkqpHoXihVb3VhY2J1FDMUcJhD1zWiWbRlzK65ff4CusG25wQRMNyHzymqle%2BxjU2N0B7h6%2FKx2tX12AoUo%2FD8a%2Fb7DspDQeZyEu7l%2F87pS4GAKmH0BNwXpU3%2BM8fDoqT55jYQnWNMiBalPnLqfOjIv0FHz69jAXAMHEcdig6npEPVZikMFdjfY5GY%2FawEKA0GsulU5iLmJgzWAg42fy5ZH%2FNjLiSbH5NlAWVJknnKklr1qiXC1gw32TnosKQL7SF5n1MzvyyUezKqwsDa1hkWL3OE4tU7KWUAS7IfmbpVhxK2prkyqwv0lSVyJkSBjJivdNA8FoUTmkgT5XWP%2BugFqCPet0Tyjvww%2BFLeR4laCnEBut8z3v7hkobW%2BLr6khvdiSpTCZe2xB3jUyuzeibAHVHuvIlbEB9vOpdjJQF5jIRTzC4xVxCiKWONNjXARk9jbHE6bVppXoFbnIvL5sJpy7lIjgX7Zk%2B5Lf38vuCicNq%2BBZo8iA6sw9%2BLcxAY6pgFwQtCFwJXXBprOpohZ%2F1QCJ70HyBDndKzjClYXbDYkxAVOrXsv9bmnf9aZsyLyptvv2%2Bi5E3hs8Rf1hbtKocTftp4Yaqpdkj17u7eyHpsmNL9%2BGX9UfQudR%2BmY4ba2a4mRvMvsCS6pfLslC8%2FFn%2BPvxwAgKo5tWXI2IZlBcIegMBo%2BIRYiKKUzkZ6GZ2J8PQFUwyVZIfCg6ZyW7b2cFyVATU0Blmkd&X-Amz-Signature=0aa6de34c9dd8a7f1e4ef79696e958bc2745cd1219eb47094afdf64bba45fbcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDQOMWQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6u53IiDZUpglLulwYbfTAr%2FYP2EMVA%2FBrCT%2B6tyGF4AIgb%2FtEZbJBtmAOWR%2FWZalJ6fh8sAE9CsGVV4yFJzCaUmQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKv4jeRjBl6eMWo3NSrcAzHoJNV9PyckGUUFZHmMd9aNHMasLvyu19mWp0pWM3vPJBMhHIB6WrLLVq2fBHasX5Emxiy%2FXGrhALwZuXU9%2BDNY%2B4Q6h8C8joGq5CEv6gYAsjslWtusvaMrJJ1w7Pab%2FZMWv3dE5bFs%2FCCBXmivwEi%2Bq7v0j9%2FD1Y%2FKAd0H9KDHDzvzeKDbhwKU1rEmBgaoWmvHrcBbdy2QVKrhw81CfsYYPdc8L%2FsUSMeziifMKlwQ%2BxNdmtNNK6G1fQap4pL1OOJikIveKJcAYAexzPlTngxJ2MdfENClPU5czCbdVSfCENLaPZ2Qit7r21czLDBSavnOCIco5UZRRE08xsvHC%2F52mImVwyFWgm6%2BR%2FXJEd7%2BOg0W8V0LGKR%2FvDDNsICd%2BXy%2FT9DBV3fRYpHTrOpTubCMigCs3%2B0pvF2%2FZYVvn7nExMP0NiYu3LAo2ZECHf%2F5ctjm0p9joLuwU9SOAdCKWw0qH99Hi7IOVaJ14TChIaxh4T%2Fa0g1rjs6JhxW%2BjA5uk9HCSNFS8DQ3744tspvEnZ5Vh8hElAbbVI7z3zyz62R8rlVGArUQzKXPOkt4olIH6e25VUfQI5aOZXbA9bqOupVHfR2ioDOsfAFDJOrILk6HBfVJfGLNoJHqr%2BKWMMjl3MQGOqUBcBGjGNsD1RTPMVtNjppcMUIPxsevxgEoPf2%2B6Uo5JBtGwdNrcQonqBrwqzWySdM0%2Fkxoil3Jr%2FNhb76JtEboQCCp7GZLBNcBnUPOHa2wN2By0HcmOA9zACaZbdT%2BJ%2FEe8pCUy%2FFHeN%2BJs08sP12hlK1qPxeh49mmmytdmQmonBXVIMVhcYuDo97%2FTD3MiggjQXLwhr58UTn2c8e3EKhgMGvGdCmR&X-Amz-Signature=820042580bbf1c5924f5a6844e0d8f32dbaa89ba080f993917e09f73467cb7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
