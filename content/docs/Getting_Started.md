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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662C4MIC5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUr5EPKXkIzbcrY1t0F0sbTI%2FogusIiSdv37Zo3IYgUwIhAPk1briMd1HlblrVTEP4bkoAdfhAf%2FRWUSik7vuThV0sKv8DCHgQABoMNjM3NDIzMTgzODA1Igy4TCwrHSk0bbu%2FvQsq3AOzrDNlus%2BWIdvChaj5fghJRIdjtmzkFdqazkmHnSU6y2W7zsCpipYrnaVjJ%2FJE2JiXeGTrGa6GXvhNJqgWj%2FhRIrAnGa2ycjsX0aUioPduTmdN8n9YYEVMxGD3iauwtJJ96wQNciFVB4RG87es7ORqGVnEF4613hQHs0OXZzo8xUPeQg3RXmiwC%2BPhm7dpLLweqNdWOru%2FwV7yORiabj21fnXbsNf%2BW08KTGLoGr3hfjMRCOFJW3Cnv6CnoB9ii12e8DYM%2BRN13xE5dvdJXUzcfO6XpCvZHOieiuV392OIQCqlmoETveupsmgyrYbkYRHohFjfr2dXCMlrsRg5PcqY%2BNSlcMEXXke7YSLkav70FlnL291mFygvICNWd0UQ7CPcCCkqsVUdpI4gIcUjJxyVvnW1b5aY%2BmPxKSmD0f5tYMrKfwyOhj9E%2FerXq6GDXc%2FLhXlVhZaBCFKJsoPuSIYmOfM6YdWO%2BRNnAyZrlmba3zLabAjgQhfzZGEv5EvvHRQc3WveRGOdXosOIP3JbsnB9QGlSHhb9bnbRnSCyyq5d1Jgli7F%2Bx0k%2BRn2ovL56lbxzBLhrLSpfkmqUHK8vSpCM%2F9RjgIGZDEA3sEzkDbGhyG4RD3Ihh%2FX9%2F14%2FDCc8afBBjqkAbyLykLDfOYwKtlIUBovGs1nuArPPm8%2FvS1n%2FylLn7XzBliDWwjg0tIyIb2xsMYaGt8ADXmN7DCWV%2B7zkn3%2BkKw%2F%2Bp3DlH%2BNS%2FbpdT9WeIQ%2BZUhY3jkPOlppWN9yeFsifPX6kPZQZk1Y99VHNU9GK7oUOMRuNhVJxVgHqYflDhEzNIWUZVMrpm6XJwQZJ%2FsANs1CiYIE0kl8BC%2FshGyNLHF%2F3t0%2F&X-Amz-Signature=ebdd76cabfa54d46443b13af58012a80c6dd430de53f62463f087f7c6ee07a38&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662C4MIC5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUr5EPKXkIzbcrY1t0F0sbTI%2FogusIiSdv37Zo3IYgUwIhAPk1briMd1HlblrVTEP4bkoAdfhAf%2FRWUSik7vuThV0sKv8DCHgQABoMNjM3NDIzMTgzODA1Igy4TCwrHSk0bbu%2FvQsq3AOzrDNlus%2BWIdvChaj5fghJRIdjtmzkFdqazkmHnSU6y2W7zsCpipYrnaVjJ%2FJE2JiXeGTrGa6GXvhNJqgWj%2FhRIrAnGa2ycjsX0aUioPduTmdN8n9YYEVMxGD3iauwtJJ96wQNciFVB4RG87es7ORqGVnEF4613hQHs0OXZzo8xUPeQg3RXmiwC%2BPhm7dpLLweqNdWOru%2FwV7yORiabj21fnXbsNf%2BW08KTGLoGr3hfjMRCOFJW3Cnv6CnoB9ii12e8DYM%2BRN13xE5dvdJXUzcfO6XpCvZHOieiuV392OIQCqlmoETveupsmgyrYbkYRHohFjfr2dXCMlrsRg5PcqY%2BNSlcMEXXke7YSLkav70FlnL291mFygvICNWd0UQ7CPcCCkqsVUdpI4gIcUjJxyVvnW1b5aY%2BmPxKSmD0f5tYMrKfwyOhj9E%2FerXq6GDXc%2FLhXlVhZaBCFKJsoPuSIYmOfM6YdWO%2BRNnAyZrlmba3zLabAjgQhfzZGEv5EvvHRQc3WveRGOdXosOIP3JbsnB9QGlSHhb9bnbRnSCyyq5d1Jgli7F%2Bx0k%2BRn2ovL56lbxzBLhrLSpfkmqUHK8vSpCM%2F9RjgIGZDEA3sEzkDbGhyG4RD3Ihh%2FX9%2F14%2FDCc8afBBjqkAbyLykLDfOYwKtlIUBovGs1nuArPPm8%2FvS1n%2FylLn7XzBliDWwjg0tIyIb2xsMYaGt8ADXmN7DCWV%2B7zkn3%2BkKw%2F%2Bp3DlH%2BNS%2FbpdT9WeIQ%2BZUhY3jkPOlppWN9yeFsifPX6kPZQZk1Y99VHNU9GK7oUOMRuNhVJxVgHqYflDhEzNIWUZVMrpm6XJwQZJ%2FsANs1CiYIE0kl8BC%2FshGyNLHF%2F3t0%2F&X-Amz-Signature=5eceb9253ebf300c5bf9a9fe76867241a60af86d4471763bb22610e22cbcc63a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662C4MIC5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUr5EPKXkIzbcrY1t0F0sbTI%2FogusIiSdv37Zo3IYgUwIhAPk1briMd1HlblrVTEP4bkoAdfhAf%2FRWUSik7vuThV0sKv8DCHgQABoMNjM3NDIzMTgzODA1Igy4TCwrHSk0bbu%2FvQsq3AOzrDNlus%2BWIdvChaj5fghJRIdjtmzkFdqazkmHnSU6y2W7zsCpipYrnaVjJ%2FJE2JiXeGTrGa6GXvhNJqgWj%2FhRIrAnGa2ycjsX0aUioPduTmdN8n9YYEVMxGD3iauwtJJ96wQNciFVB4RG87es7ORqGVnEF4613hQHs0OXZzo8xUPeQg3RXmiwC%2BPhm7dpLLweqNdWOru%2FwV7yORiabj21fnXbsNf%2BW08KTGLoGr3hfjMRCOFJW3Cnv6CnoB9ii12e8DYM%2BRN13xE5dvdJXUzcfO6XpCvZHOieiuV392OIQCqlmoETveupsmgyrYbkYRHohFjfr2dXCMlrsRg5PcqY%2BNSlcMEXXke7YSLkav70FlnL291mFygvICNWd0UQ7CPcCCkqsVUdpI4gIcUjJxyVvnW1b5aY%2BmPxKSmD0f5tYMrKfwyOhj9E%2FerXq6GDXc%2FLhXlVhZaBCFKJsoPuSIYmOfM6YdWO%2BRNnAyZrlmba3zLabAjgQhfzZGEv5EvvHRQc3WveRGOdXosOIP3JbsnB9QGlSHhb9bnbRnSCyyq5d1Jgli7F%2Bx0k%2BRn2ovL56lbxzBLhrLSpfkmqUHK8vSpCM%2F9RjgIGZDEA3sEzkDbGhyG4RD3Ihh%2FX9%2F14%2FDCc8afBBjqkAbyLykLDfOYwKtlIUBovGs1nuArPPm8%2FvS1n%2FylLn7XzBliDWwjg0tIyIb2xsMYaGt8ADXmN7DCWV%2B7zkn3%2BkKw%2F%2Bp3DlH%2BNS%2FbpdT9WeIQ%2BZUhY3jkPOlppWN9yeFsifPX6kPZQZk1Y99VHNU9GK7oUOMRuNhVJxVgHqYflDhEzNIWUZVMrpm6XJwQZJ%2FsANs1CiYIE0kl8BC%2FshGyNLHF%2F3t0%2F&X-Amz-Signature=a95567d9de79b36041fd3470b1772347203ed582434fe03242957b1b87d3bcee&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZ2VEG7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHRr%2Bo60xKH6exIHInOTthia%2BXLUuq5hTFB0eBK2PGYgIhAI0cwVN6L%2F797HkHqU6QS9QlJ0U%2Fad3wxQ1ndKq1sfpGKv8DCHUQABoMNjM3NDIzMTgzODA1Igx%2BvatStXOLDbeUqCgq3APPXc0d1WjBWdi46StNUhkF27RXK%2Bvp6ztGtsEGlak9ZNF4GPCSlGwPoHyy3il%2B0AHwE21uFqxXTAzqjcRjVcFEW9kyY%2Bz6RO0eQQ1y5gOWZxAzttXeWwl9%2FWPtskNn2fTnahzlSdtaipX29GZt0xn1aoMnu7EPBQKMPCjk72tDH7V7ZDaX72fR%2BZUeuIBSRVNrm2eEdFD1NBArZZjNOmQJ0SL6paY5xK82S0MsiQi4pNw8fV0vRNsoGF4K6O8Tg4CKeOwrAeHS9mV9F041A8H5brNM4LiB5lmyTkt0rPcGGw8KwRg8vv82GbWBEGTLJYfy6AGnCaa%2B35K9qpeXsZEeQFTE8azmmCgEP9ARtPBglTgwXdsxLN561riTDh71hGG0UyuVWt0epbdiDGgpqnHXaJIxdPkkthIN5Ie9HkY62KPYF%2BrWpmdgC%2F%2FqMUHt60sN38JmQEVPRyq5pLaPigsovlHm5JWPQ1Ta198zhP4SbKsXEYsDsGEs1Lm%2BEGZ6B3sSCt5Sdt%2FVmMC6aOJD1HcQxIvWFkR%2F9x03nPiylFuc%2FhMhm0B9pKdfQELRnczgvVPvDuT6ziWET%2FYO24Zr2Gc6G%2FKbHQweFoirue8fGQZMRKkIMrRhYHbAGtCy6jDJoKfBBjqkAWT2IGNp2VBSfhY6oGNbuYju3sFbRReTlJ6KV6zqBB2gzkReDrNAPpitFEkfZEnnCJL5gXAqwK90heirTTy5ADFPmfLehVvd3bB%2BRIP%2F643IdMONFUgjGowr%2Bn04B7LoOYhtJoERpEiF52%2FrxD08om2bAcseG2ntzYcWGF3mdN0yVvbXKYyB%2BQihn2jBnT8z6leyyyzsKm6B0hBNfvabCLDyRco2&X-Amz-Signature=fe4b0d02e92b8ea0da9e682405587d76572cc1b78a266ea084b851b40dd68925&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LJHXLMS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQdlcXDQo9TYI6zqD6tnvSVGGlHrksx25mbWS%2F%2BJBk6QIgB%2FcIcOVRSX5tjFqlFVMWN7ugrYSx2Y%2FtXtqvX7EStCEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOlevBin70tomoNhlircA3V1%2FSsRFB821%2BObk6ZGDoeP8ECZlJWj6YxYaDbWpd%2BV12hEDB3wPJe0hphOlIdbpm5WsitcH8izD3Xlgxvk0zBZJGwl3HJ65AWTYEokhC4VmNA25JztSh0uqwrU2T1wIAywgTwgcbICoxh0B8qxRtz3HJaOzaX2bDdtJ12JGm1T69uo42LA2gr4re45SUr2HUoIdVKXSzMGy%2Fn2YIFjYbLkT8waopYWtPEoK4dTLnDIfVRHAuB9rz4taeaiIy6MaqPAGzSceE6ddIbXhzMDnUlKZrTVv8qb2vPhf4npnaqwcT2j0RLqhGJxq9qZ9y0a11xc2rnj3HY7uZU5v2bZZlBk9EMSEhNYEFVFAIVp%2FXW6N2JNpYFzIU%2FGUBvt7bbFYHveayiKmz%2BgYizaOX2JFNT18xvhF9jaf1HQAHBJFw11%2BoCQFMZRP8gBPV7hl4f1HAxtWENIdFoxQQ3BN63sQm64QrDq6xupofu9dTa3g%2FDr38Xkcs4yoYPZPs4TMzT7zzmYxYYWF%2BUBwGi%2BxTSBxRi4wMxQm2Ic%2FKIVF06vMQd4ULBL3FOrp553QzC466y7zTZGK5FD2XGHNtODnZXeTxeY10fsnGuqa7XATiPxceMwsPneX5lLeweHU3XFMLmUp8EGOqUBkoYl1iztgb2V%2F%2BXXF%2FgSpBy0JYAVFRX48Myc2wfC%2BP%2Bt1YGINtZiO5hXQtQf6kpJGpVwxQfkcmfFePj5wUC9SJjKQzEY5xuAQb3jEigsWHiDgNsCnFbM3bcBAWLrmeKVDLyb%2BCMZ4bq2YuzGi56cmQAz6SUAnTwXKOrz0cBmPsd4rfjhcC9kwunpd2Lle%2FuKjO7yKuVW%2BlO71i9hxm0Y%2FWMfcvL%2B&X-Amz-Signature=3e1836e3956f048b66f93b66f4d72824fa3cd33e80f2b99eae05340c822d4a90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662C4MIC5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUr5EPKXkIzbcrY1t0F0sbTI%2FogusIiSdv37Zo3IYgUwIhAPk1briMd1HlblrVTEP4bkoAdfhAf%2FRWUSik7vuThV0sKv8DCHgQABoMNjM3NDIzMTgzODA1Igy4TCwrHSk0bbu%2FvQsq3AOzrDNlus%2BWIdvChaj5fghJRIdjtmzkFdqazkmHnSU6y2W7zsCpipYrnaVjJ%2FJE2JiXeGTrGa6GXvhNJqgWj%2FhRIrAnGa2ycjsX0aUioPduTmdN8n9YYEVMxGD3iauwtJJ96wQNciFVB4RG87es7ORqGVnEF4613hQHs0OXZzo8xUPeQg3RXmiwC%2BPhm7dpLLweqNdWOru%2FwV7yORiabj21fnXbsNf%2BW08KTGLoGr3hfjMRCOFJW3Cnv6CnoB9ii12e8DYM%2BRN13xE5dvdJXUzcfO6XpCvZHOieiuV392OIQCqlmoETveupsmgyrYbkYRHohFjfr2dXCMlrsRg5PcqY%2BNSlcMEXXke7YSLkav70FlnL291mFygvICNWd0UQ7CPcCCkqsVUdpI4gIcUjJxyVvnW1b5aY%2BmPxKSmD0f5tYMrKfwyOhj9E%2FerXq6GDXc%2FLhXlVhZaBCFKJsoPuSIYmOfM6YdWO%2BRNnAyZrlmba3zLabAjgQhfzZGEv5EvvHRQc3WveRGOdXosOIP3JbsnB9QGlSHhb9bnbRnSCyyq5d1Jgli7F%2Bx0k%2BRn2ovL56lbxzBLhrLSpfkmqUHK8vSpCM%2F9RjgIGZDEA3sEzkDbGhyG4RD3Ihh%2FX9%2F14%2FDCc8afBBjqkAbyLykLDfOYwKtlIUBovGs1nuArPPm8%2FvS1n%2FylLn7XzBliDWwjg0tIyIb2xsMYaGt8ADXmN7DCWV%2B7zkn3%2BkKw%2F%2Bp3DlH%2BNS%2FbpdT9WeIQ%2BZUhY3jkPOlppWN9yeFsifPX6kPZQZk1Y99VHNU9GK7oUOMRuNhVJxVgHqYflDhEzNIWUZVMrpm6XJwQZJ%2FsANs1CiYIE0kl8BC%2FshGyNLHF%2F3t0%2F&X-Amz-Signature=b3d5182b53ef4def1438af473e7c13b366e20f9312f2bc76583620cdef2e425a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
