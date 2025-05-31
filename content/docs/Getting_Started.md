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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJHAEHJG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FgrFKMD6fta21qTrXcsnhS0cxbFny8mL9xlwEcQrgiQIgbfh1r7ff%2F0URA2p7efTBt16bc6TlGB5DYrevofBnyXQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMBDamoNbS5PS9SQCrcA7konCMFZO2JA0O8SkCxLri2NbfnCtiXdR8ezzX9jvIRWoTHQR5bPP3YReHVolCgzotCFOb2DdIi96xET7H%2BVFj0RUx0B6sGAlzA74M2yxsaJmC%2BaDn9Ctb5ADE2VSXy1nMClBpa%2BeXEeY7mE%2BscOTz47C%2B7aNIweKGgbPixdu0AEKbZtXMzS4Ts0LMkPKtZbU88j538Xm9JpCPY453H%2F9PKHxizOTTOX5%2Fu4GmHy8mgJUW1RxnFm9FrpFO7ZyF3k9YpjRrkwBmGdNaZkcsSlbmHHw4uCLdrSdQBz4OyTHddA%2FgtzuuJZeIQ5DZBJAK4Te5ynomRx%2BK%2BxVvO%2Bj6R1VFQoN1CJKJ8enmhvjinLqs6OPjLuXczzJ4kB%2FtQePxQS64uU%2FUm0x2uLi%2F%2FleRk17L%2Fzfe1GiW6QBydGsiQenKyyyKXDTD104h9MGY10SnXg%2BitFPqY3FVYnn%2BKEYpmHwCrN1fesha8Vg6jODOcwvxAwa3xeVtq%2F8nvTP%2BjZTQ6Xv7t5BIg3Szk%2F7IOYvCGtYB2PfaMeNnbVNb3zg6salOEwo19VP17RrbJF26FNZ0tWEQJ%2F4UFE7FY6TLqWer0EEYglrGHm7g3d%2F31UNY2kN2SNqLricUubwnYKuAbMNzk6cEGOqUBd7ISXLvZ192m8TZj5i6aDxDT7DgkAl2yD8u%2FmrFeLwZwco8AMwrhopoYNkFdlaexSimtQS5%2FZ3%2B5uGbeNtm1aXaNWLfXaQyqlTifj8MWEX2Ba4bZRPeWOHzxNewdS8llxuDu16jdEmY9SFvkOJpq%2Bwa498MItNHia80gioPjMcB48rzN5R8npV%2F07HOYuu%2FXiMLkeFZBeAw3%2B%2B32WQygYkgnUIHC&X-Amz-Signature=e8817f83f0e5e4a7032b20bbe3abc6312ebc0fb9ec785332f45f8d9757631f16&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJHAEHJG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FgrFKMD6fta21qTrXcsnhS0cxbFny8mL9xlwEcQrgiQIgbfh1r7ff%2F0URA2p7efTBt16bc6TlGB5DYrevofBnyXQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMBDamoNbS5PS9SQCrcA7konCMFZO2JA0O8SkCxLri2NbfnCtiXdR8ezzX9jvIRWoTHQR5bPP3YReHVolCgzotCFOb2DdIi96xET7H%2BVFj0RUx0B6sGAlzA74M2yxsaJmC%2BaDn9Ctb5ADE2VSXy1nMClBpa%2BeXEeY7mE%2BscOTz47C%2B7aNIweKGgbPixdu0AEKbZtXMzS4Ts0LMkPKtZbU88j538Xm9JpCPY453H%2F9PKHxizOTTOX5%2Fu4GmHy8mgJUW1RxnFm9FrpFO7ZyF3k9YpjRrkwBmGdNaZkcsSlbmHHw4uCLdrSdQBz4OyTHddA%2FgtzuuJZeIQ5DZBJAK4Te5ynomRx%2BK%2BxVvO%2Bj6R1VFQoN1CJKJ8enmhvjinLqs6OPjLuXczzJ4kB%2FtQePxQS64uU%2FUm0x2uLi%2F%2FleRk17L%2Fzfe1GiW6QBydGsiQenKyyyKXDTD104h9MGY10SnXg%2BitFPqY3FVYnn%2BKEYpmHwCrN1fesha8Vg6jODOcwvxAwa3xeVtq%2F8nvTP%2BjZTQ6Xv7t5BIg3Szk%2F7IOYvCGtYB2PfaMeNnbVNb3zg6salOEwo19VP17RrbJF26FNZ0tWEQJ%2F4UFE7FY6TLqWer0EEYglrGHm7g3d%2F31UNY2kN2SNqLricUubwnYKuAbMNzk6cEGOqUBd7ISXLvZ192m8TZj5i6aDxDT7DgkAl2yD8u%2FmrFeLwZwco8AMwrhopoYNkFdlaexSimtQS5%2FZ3%2B5uGbeNtm1aXaNWLfXaQyqlTifj8MWEX2Ba4bZRPeWOHzxNewdS8llxuDu16jdEmY9SFvkOJpq%2Bwa498MItNHia80gioPjMcB48rzN5R8npV%2F07HOYuu%2FXiMLkeFZBeAw3%2B%2B32WQygYkgnUIHC&X-Amz-Signature=b087eed9e89039f9b98bfa6a7d1e892e5321639871a234210f4f10f9f25365cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJHAEHJG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FgrFKMD6fta21qTrXcsnhS0cxbFny8mL9xlwEcQrgiQIgbfh1r7ff%2F0URA2p7efTBt16bc6TlGB5DYrevofBnyXQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMBDamoNbS5PS9SQCrcA7konCMFZO2JA0O8SkCxLri2NbfnCtiXdR8ezzX9jvIRWoTHQR5bPP3YReHVolCgzotCFOb2DdIi96xET7H%2BVFj0RUx0B6sGAlzA74M2yxsaJmC%2BaDn9Ctb5ADE2VSXy1nMClBpa%2BeXEeY7mE%2BscOTz47C%2B7aNIweKGgbPixdu0AEKbZtXMzS4Ts0LMkPKtZbU88j538Xm9JpCPY453H%2F9PKHxizOTTOX5%2Fu4GmHy8mgJUW1RxnFm9FrpFO7ZyF3k9YpjRrkwBmGdNaZkcsSlbmHHw4uCLdrSdQBz4OyTHddA%2FgtzuuJZeIQ5DZBJAK4Te5ynomRx%2BK%2BxVvO%2Bj6R1VFQoN1CJKJ8enmhvjinLqs6OPjLuXczzJ4kB%2FtQePxQS64uU%2FUm0x2uLi%2F%2FleRk17L%2Fzfe1GiW6QBydGsiQenKyyyKXDTD104h9MGY10SnXg%2BitFPqY3FVYnn%2BKEYpmHwCrN1fesha8Vg6jODOcwvxAwa3xeVtq%2F8nvTP%2BjZTQ6Xv7t5BIg3Szk%2F7IOYvCGtYB2PfaMeNnbVNb3zg6salOEwo19VP17RrbJF26FNZ0tWEQJ%2F4UFE7FY6TLqWer0EEYglrGHm7g3d%2F31UNY2kN2SNqLricUubwnYKuAbMNzk6cEGOqUBd7ISXLvZ192m8TZj5i6aDxDT7DgkAl2yD8u%2FmrFeLwZwco8AMwrhopoYNkFdlaexSimtQS5%2FZ3%2B5uGbeNtm1aXaNWLfXaQyqlTifj8MWEX2Ba4bZRPeWOHzxNewdS8llxuDu16jdEmY9SFvkOJpq%2Bwa498MItNHia80gioPjMcB48rzN5R8npV%2F07HOYuu%2FXiMLkeFZBeAw3%2B%2B32WQygYkgnUIHC&X-Amz-Signature=5308dfe41ccf155840e7fc35ca300a2bbda872e63290d66749c35fff94c75fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VG6SIL%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAXxkkw2%2BQnIXG9IsU%2B%2Bf1aR4Mn8j6PDjVjATvf6RvzAiEA5DkGNwCtl1tn6iFH5DeHmYpGH0Su1bEondHBtDZ65ecqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfXlRO3%2B1d1Vb08LSrcA7teyyUmJEdoNyz2JekjrYW1X5KVjDZk3QZ0dBFxzFqQQZfT1n9IfXDBIuIs3SYzYTSt1NngrsfAlaHBhS4YHKpKzmXObvdgptCqgwRcT4nkcJGMEZLtkgQxA5Cj%2BWvz4qDzdgC1f7NoIahTTgVlgBcCzEckr1GRHHCimYxghn9IvGo3I445Q%2F5OiYSAirGC3EJUK4VyBlIrSAnZNHy6Y4mhiGBnrCT38Kob3t4pKyjPvFl0o9vHctuMMGjkRaHumeScucHDd5tK0ecCCm7Uivw7HTdJzlLxGI12AApaU2wZcfE4AIwvm6NrMl%2FCebVjsXJRo7sMM1pwbITAZ%2BAGLJn7HpkdFKILa%2FcovZYPqBUBafVvcfI28PgSoAFkmS96xSWxew%2Bm2BwPjTpMbsIIBdmaRabM37Ink2Wl%2B8hyU9qgmARD7skx7Q8OQ9n1oBivW6uK9z7sexx5TY9tPeziadD1SmySTvWtcSXeXl47oFJq8n1VNpuKWB0PU0wS%2F0sT6QWfm9lcNafiSKQ%2BYtz4cu8pTgiSnCSXApxGVYPAOf0rQIOxfn4IWmdI1RZ%2F%2BNCNJzHPuRg3aJUG7C16VxtE4fWkD69JT6c2fER96rMTzmIK%2FZ%2FD3aXFuZB6CQwdMO3k6cEGOqUBzRq6chzC2IXIgvwSZOG7D%2FHz6XfBJKTl%2ByjVw9g6VSoaLEhh6AOWL5hCc0FbhFZj51djE8P%2Bl81S%2BrIymtwoGlW9Fo3rE%2F956nj8YI1EYs91%2F6cvbDr4Sw87foffgnLwxo%2FoIAEIwK0lfjZcAi8%2BwCF%2B990IJxvMQgYGy95YMsbXEUI8rovD5rCrkqKiTXLYi1X3FG13UGZbZ3uLQfkq6M3JHVCy&X-Amz-Signature=82960c8deed61e75614dacdd3c75d239dd0c21669b99c2dfb3e119e488e3216a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6S3IAH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsBfmggnTVmi3G4AnApvgOVF1o4ooGfh5Ij0GBemiU6gIgAwB5uqGCRje6EU1egVJuMPeS3j%2FKcirBYrPxm96cEs0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAAk8tUFJ3ZcL%2BVBSrcA%2BkMfk%2BPRBVJEaSYBkR6VgUzzkOx3%2FrVPLvwLkEVe37MheoDZaEAPUR6tKBCKrXWEtLyxd1sXGQ9wvvWh1QRaTvHfG0h4OIoWQF2UBkv8%2B%2BxQWOI1bUEsM%2FuVnk6XxQEKkbLZCRw1DggOgLA02rluPJvzNHO7sTo1QmZIyKOBtk6%2FYy44ke1r0RlKXYghPRLuQZnxKo1U6G8GE8%2FlafIoRdT5EhH3%2F8NVInUmEa7v7q87M7xHNrA6am0P%2FoktrGDP1ofTbdIwCfXDOEgHGMWYqs7Ib%2B7hjNLKJvoXzezbUWZz7bpvwEtihqyUlA49qUS5aK%2BvISxyGydV2L243A90EyDFikra99akmMog9NYyzpFaKc%2FrKCs4zCzAvokgr%2BCs3gwU8aZlOz91r2rDy9xAmT0XHg1C4vfofFYyL2OPzPQO3J8%2FlKzkk6P6hTLc2g2eEw8SyXBq%2FzU6xj423B16FcoNzmIaLCGXpmlFbccN9b%2Bi0Bgmlxh7RKhkCXSAXP56G%2B4krEZRisqjKAJibHGsiRGueDjPMRldFElKiMA1e1CbT2sF6nvO6VOS9UWRMW6TqYwSbs1ZPjqc%2BTSa9NicDcqOhSFop5LgtNPfqyfV8BKg2fQ%2FF0nsIPEdWxuMPTk6cEGOqUBN%2BkIYPL1ACn%2B54mbvv7Zb2%2BpxAQoNA7P8%2FYYB4hOQdzVwHQEI7D3l%2BzrX2zr2EfBO9CwZRbnypow7TLSz4zEsc95zGQmKq0e7mrr%2BcvSLGkgJe%2F1CBQZcvDmMPNiLoad3fY1CWCZwEE5l05rT%2FVb8XXcG%2BLWni6eIjcGbqsNlElguG%2B1OZZ2L7yEW114Y6k1c4U%2B%2B5FoIH6xxI88n0DkfI6xm18p&X-Amz-Signature=76717f085b4488339f9c7b6e669b265bcdddbc5ffbf8155343b6314d3d66a142&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJHAEHJG%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T033430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FgrFKMD6fta21qTrXcsnhS0cxbFny8mL9xlwEcQrgiQIgbfh1r7ff%2F0URA2p7efTBt16bc6TlGB5DYrevofBnyXQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMBDamoNbS5PS9SQCrcA7konCMFZO2JA0O8SkCxLri2NbfnCtiXdR8ezzX9jvIRWoTHQR5bPP3YReHVolCgzotCFOb2DdIi96xET7H%2BVFj0RUx0B6sGAlzA74M2yxsaJmC%2BaDn9Ctb5ADE2VSXy1nMClBpa%2BeXEeY7mE%2BscOTz47C%2B7aNIweKGgbPixdu0AEKbZtXMzS4Ts0LMkPKtZbU88j538Xm9JpCPY453H%2F9PKHxizOTTOX5%2Fu4GmHy8mgJUW1RxnFm9FrpFO7ZyF3k9YpjRrkwBmGdNaZkcsSlbmHHw4uCLdrSdQBz4OyTHddA%2FgtzuuJZeIQ5DZBJAK4Te5ynomRx%2BK%2BxVvO%2Bj6R1VFQoN1CJKJ8enmhvjinLqs6OPjLuXczzJ4kB%2FtQePxQS64uU%2FUm0x2uLi%2F%2FleRk17L%2Fzfe1GiW6QBydGsiQenKyyyKXDTD104h9MGY10SnXg%2BitFPqY3FVYnn%2BKEYpmHwCrN1fesha8Vg6jODOcwvxAwa3xeVtq%2F8nvTP%2BjZTQ6Xv7t5BIg3Szk%2F7IOYvCGtYB2PfaMeNnbVNb3zg6salOEwo19VP17RrbJF26FNZ0tWEQJ%2F4UFE7FY6TLqWer0EEYglrGHm7g3d%2F31UNY2kN2SNqLricUubwnYKuAbMNzk6cEGOqUBd7ISXLvZ192m8TZj5i6aDxDT7DgkAl2yD8u%2FmrFeLwZwco8AMwrhopoYNkFdlaexSimtQS5%2FZ3%2B5uGbeNtm1aXaNWLfXaQyqlTifj8MWEX2Ba4bZRPeWOHzxNewdS8llxuDu16jdEmY9SFvkOJpq%2Bwa498MItNHia80gioPjMcB48rzN5R8npV%2F07HOYuu%2FXiMLkeFZBeAw3%2B%2B32WQygYkgnUIHC&X-Amz-Signature=3cc08a0854d34f5c71d6e1dade92e6f9a5e0e680e8c478f20de064410180a257&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
