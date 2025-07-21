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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVEBA7M%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG59qX73rURnB6sMrQ9Sm%2BLGTitAfAVl2NN%2B7ab1sTNAiAC2qEVJcowoSYpdAiJlo8s%2F3XNjDFzIXPi057ZyJ%2BWYCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM76p2U8k8Z9X2%2BHqLKtwDNJB3quOGdjSM5pgoeykHzjZuXyP4moFbC9fXdShslvejBSQCgf1ahRnoPkjKVN%2FVDJ69lyLF5b47sXP2o5GDp9%2FEPNDD2lxgCqce2OmKcK7hPWznumiDKfZSDzEW3tg3np5hLOsyQlvunQlAkQWLWNuO3TfxB4KG6TqNXomcRe29zfPmpkDi49hagZhWG8rp1VAiAXlQN81fEJ0l9jwF5g2YbLSSA0V7Hc8By%2FdtAKPJ9bQsBL04zrxQstNSAeo%2FmlX1E4W94C5rd4NhsJ%2BKqoGgJ1Wq4F%2Fhtd5lh4WntQ1gp1U1Ip2DywcwlwNRuA9y3wVQwheW9SF4u8AbZ%2FORJ7Dt4o6iRxgtpox2sr5dzC9ZMCY%2BzFS9gVeKuU6tQu%2BT71rYCqzmw3NDGmSPbSf6Ux3%2BLPQ6ndcC6u6RiDBdt2ZKuMddWywmrsHIkeO%2FwLAKaSemjh1z2h07ywjzrBn7gb1HLHhk7MelNB46LqMZ%2BW9a38Vm79Vp88b5sqjhzQpd%2FEOSKWmR645bBmSjGSUDwtM7l1NigEnpTJCJOTxNFWwY76IBVL3dT4nNBG23CUKROWyIj%2By%2B7T%2FIk6ymH9N7sUqdNdDAS9K1qihmYnmvB%2FZaRfXuslT%2BxG8H%2Bqgw08X5wwY6pgF1F%2BcrnPkekgf5%2FhTu5fgI5cPgyny4aVXAfXkUjVB1MsDPm9gOdSq28lDPrWHtblAqEG0LMB5TYvEjAuF0rZkn32JMekN96auPOhydOa1RrK2MBWDrKKBkJWAT9cNNJt0Uf%2BvSAWXQ0gXyjthHCqt7tDnhDSebgNcJHe4Yvlou8XDlmMlrsy0EwwDLsV2K8pKeuF9VvWx6fIhKdg4Nv3kE3CVHmcig&X-Amz-Signature=94e09435f147bab6c7e0edbeea3d6b6661a0adc360e421ca22d7e1bc5b14b55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVEBA7M%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG59qX73rURnB6sMrQ9Sm%2BLGTitAfAVl2NN%2B7ab1sTNAiAC2qEVJcowoSYpdAiJlo8s%2F3XNjDFzIXPi057ZyJ%2BWYCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM76p2U8k8Z9X2%2BHqLKtwDNJB3quOGdjSM5pgoeykHzjZuXyP4moFbC9fXdShslvejBSQCgf1ahRnoPkjKVN%2FVDJ69lyLF5b47sXP2o5GDp9%2FEPNDD2lxgCqce2OmKcK7hPWznumiDKfZSDzEW3tg3np5hLOsyQlvunQlAkQWLWNuO3TfxB4KG6TqNXomcRe29zfPmpkDi49hagZhWG8rp1VAiAXlQN81fEJ0l9jwF5g2YbLSSA0V7Hc8By%2FdtAKPJ9bQsBL04zrxQstNSAeo%2FmlX1E4W94C5rd4NhsJ%2BKqoGgJ1Wq4F%2Fhtd5lh4WntQ1gp1U1Ip2DywcwlwNRuA9y3wVQwheW9SF4u8AbZ%2FORJ7Dt4o6iRxgtpox2sr5dzC9ZMCY%2BzFS9gVeKuU6tQu%2BT71rYCqzmw3NDGmSPbSf6Ux3%2BLPQ6ndcC6u6RiDBdt2ZKuMddWywmrsHIkeO%2FwLAKaSemjh1z2h07ywjzrBn7gb1HLHhk7MelNB46LqMZ%2BW9a38Vm79Vp88b5sqjhzQpd%2FEOSKWmR645bBmSjGSUDwtM7l1NigEnpTJCJOTxNFWwY76IBVL3dT4nNBG23CUKROWyIj%2By%2B7T%2FIk6ymH9N7sUqdNdDAS9K1qihmYnmvB%2FZaRfXuslT%2BxG8H%2Bqgw08X5wwY6pgF1F%2BcrnPkekgf5%2FhTu5fgI5cPgyny4aVXAfXkUjVB1MsDPm9gOdSq28lDPrWHtblAqEG0LMB5TYvEjAuF0rZkn32JMekN96auPOhydOa1RrK2MBWDrKKBkJWAT9cNNJt0Uf%2BvSAWXQ0gXyjthHCqt7tDnhDSebgNcJHe4Yvlou8XDlmMlrsy0EwwDLsV2K8pKeuF9VvWx6fIhKdg4Nv3kE3CVHmcig&X-Amz-Signature=89acafb37e2e1e528e1d9eb8158d1d1a7cd77b85abf1c23d7b09e85e63d3f77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVEBA7M%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG59qX73rURnB6sMrQ9Sm%2BLGTitAfAVl2NN%2B7ab1sTNAiAC2qEVJcowoSYpdAiJlo8s%2F3XNjDFzIXPi057ZyJ%2BWYCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM76p2U8k8Z9X2%2BHqLKtwDNJB3quOGdjSM5pgoeykHzjZuXyP4moFbC9fXdShslvejBSQCgf1ahRnoPkjKVN%2FVDJ69lyLF5b47sXP2o5GDp9%2FEPNDD2lxgCqce2OmKcK7hPWznumiDKfZSDzEW3tg3np5hLOsyQlvunQlAkQWLWNuO3TfxB4KG6TqNXomcRe29zfPmpkDi49hagZhWG8rp1VAiAXlQN81fEJ0l9jwF5g2YbLSSA0V7Hc8By%2FdtAKPJ9bQsBL04zrxQstNSAeo%2FmlX1E4W94C5rd4NhsJ%2BKqoGgJ1Wq4F%2Fhtd5lh4WntQ1gp1U1Ip2DywcwlwNRuA9y3wVQwheW9SF4u8AbZ%2FORJ7Dt4o6iRxgtpox2sr5dzC9ZMCY%2BzFS9gVeKuU6tQu%2BT71rYCqzmw3NDGmSPbSf6Ux3%2BLPQ6ndcC6u6RiDBdt2ZKuMddWywmrsHIkeO%2FwLAKaSemjh1z2h07ywjzrBn7gb1HLHhk7MelNB46LqMZ%2BW9a38Vm79Vp88b5sqjhzQpd%2FEOSKWmR645bBmSjGSUDwtM7l1NigEnpTJCJOTxNFWwY76IBVL3dT4nNBG23CUKROWyIj%2By%2B7T%2FIk6ymH9N7sUqdNdDAS9K1qihmYnmvB%2FZaRfXuslT%2BxG8H%2Bqgw08X5wwY6pgF1F%2BcrnPkekgf5%2FhTu5fgI5cPgyny4aVXAfXkUjVB1MsDPm9gOdSq28lDPrWHtblAqEG0LMB5TYvEjAuF0rZkn32JMekN96auPOhydOa1RrK2MBWDrKKBkJWAT9cNNJt0Uf%2BvSAWXQ0gXyjthHCqt7tDnhDSebgNcJHe4Yvlou8XDlmMlrsy0EwwDLsV2K8pKeuF9VvWx6fIhKdg4Nv3kE3CVHmcig&X-Amz-Signature=40f08dc8267419d6575c85934313fb8fab7a17a22f98f5b121aecae383b3ab57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO5XHVEB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXHNhui9HgN95gkixn%2FYSIjU00xOuQV6OdZFRD0w%2BiiAiEAjKDy2gggosUsLeJi4oXxiI30XxZ39gDTatKYzN0IANkqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgRZ55VZq2nnVFw%2BCrcA%2FSlF44q4H1Vgfg0VgcG%2FFuHQFcIpHzR%2FhK4O%2FeKf939CBgd%2F1DzR4CbTDb1TgE5D%2FBrWRwWCIuiXmWXKBJQWtrfIlVPpQul1Y1feXsHfaClbDFQUBB3bg18E3cRgIa3SxEDMIjnoh8QrEvzVSPExvg8TfJEwT6t%2FAuo%2BVzTHm73JZk22fE0hqia9WhiPH5w581k%2FeORo%2BE%2Fa7vidnNnUjUmsiQ0sdGO4tuey2C1gjRYOIHmelJC%2BX3CGPYtjW486LDIvuRuBiODJjj10iSSYPFms%2B2kwJtuYxhrBHWIenqQFVW9pJKJrll3L49KAO6U9qZSsSI8zr%2Bil3Zxg%2FadZ7PuM7nnM26XzblsPTR8KAXlRllCKtxttwv0ALQex6k59fkrebdJRreOJkUYZhajtJIln0Dz0OkUI41MRjxwUbvBWssR2VlUViQIGxNfkV16TdguhH3kplaXDoFeGbgExYz5M8mSIHyFwkzWtOv480X3g0SLQaeSzq8Vo8qLC1AAnNUcndaJdPXcAcqXSIWKv75gziu41ahJSVWbwrR8tuOGnArdWOtd%2BGKuMjt1%2FIDPu1%2FkNsMC%2FqOclJun3zELLsQ%2FLuc%2F2MCXrhanKBzEqZ0bJht1e7nf2iaCLVWzMNrE%2BcMGOqUBoOkld2wC4sh4IY30Jat%2FH5txuuEtQgzBdHgQlxNlqZLyFzReR0KN%2FeRfAQ9INn2r8xsf8JCAaCk6JSxnzK3t9vGmkvbYIz9daSx2AAn6bIwN7zxBreZFPsDDL64FhPWoVxCiLNWE%2FQ5s5i9TRLJnRaUckWgwzEJ7lBlHE%2BNZI%2BCxr7tmWNH5PptaVSaUZBuVDXq2NAk%2BDSRW3Xr9uFsBNAris%2F1Q&X-Amz-Signature=f3d9cce5b5f8b25b55ba5b7257d1b77c4c7f2e445e061345e26b5b7b3fad2b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DRRW4M5%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRcmiyvxvRVnsmateDwJAAvCyzAaDR9qG7DNNQELeWcgIhAKb4QhamCbGmpuDQHzyLHAChVGeO1X7cim5wVRDHFAvqKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylsumOCEY9aOQw0XEq3AOFIUrgbhcrdP0AyDXsUovsFdBhavN1QH9RvQqMGkN7pYzn8%2Fa8fMetz3Gqzoe1OCc9vvflndKAfpyE08SWC%2BfwLzBVY3i1aBS6am8T5WE3VUAo2kr%2FJnbT44v3wvFG%2Foau8lISFw%2FsGdIItOAJjxiJFer%2Frl6FVsAzISQXJUH22K2mXhS4LUXepU2Snxxsu7KmXVTM6pZ71CFAUTGKbME6zLn0Bfqt2QEcYRLHCd8tQ3Y99CY5Ga8TI1mewe2MPZFyB2QyGzj0tteqwGwFzqK8%2FZdrc2mWrbl6v06IRKrwC5Ja%2BvLE39EiF0EDLh1dJRfWfgFcic8WaVg3c%2BBEJryrsX3fqKynhOpiozra7AFzMaSYq4QC%2FJI67v2Z9xo133ufW%2BBiD503LWKcyU1LM%2Fk9xceGgSKqAWk%2BgPlEQrXVEoPj1YDb%2FMuZGpA0tgGqj%2FqapJLuUunVH5SbhJ84nELXgXwBvIo7ksnPRbJDcoOUvoz%2B6kDSO%2FGxrMPq4wL5Z75b8m8Zy7cGOUYZzsf5UVcpRIaECID4rsXNS194lY61Uga2dqiXF6T02o0Et5vfapmODATc5lNGrfn4Cxk7ozKAuiTAs%2B5wUnXYnsF7NJZV%2FPULMCw2DEnQTBhFdDDMxPnDBjqkAZrT2bOEJ8NugM1nRf4ju1%2BERZJ3fipeGSoOfBHnGE2Z1ijvh5ZLZA3643%2F5crx9aO48uyE%2FT%2BNmLtJdILEHGZGjBuGBHdSlQ6JiYsJRZPHSbtNroblUD1fwxaLqrDt6Y6rrIJAGEkUJNPnm8gIt4hi5FUl%2B6NgUYWdbKuo4Ci60jK0%2BVWD6A1CDuwU359Og7jFOMA5QBSt0MKa0FTmBHzTRGrHn&X-Amz-Signature=88d9a0cde74c297ee90ab5db13cdbde4e0116faabdedd33f85110b00e048caf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVEBA7M%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG59qX73rURnB6sMrQ9Sm%2BLGTitAfAVl2NN%2B7ab1sTNAiAC2qEVJcowoSYpdAiJlo8s%2F3XNjDFzIXPi057ZyJ%2BWYCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM76p2U8k8Z9X2%2BHqLKtwDNJB3quOGdjSM5pgoeykHzjZuXyP4moFbC9fXdShslvejBSQCgf1ahRnoPkjKVN%2FVDJ69lyLF5b47sXP2o5GDp9%2FEPNDD2lxgCqce2OmKcK7hPWznumiDKfZSDzEW3tg3np5hLOsyQlvunQlAkQWLWNuO3TfxB4KG6TqNXomcRe29zfPmpkDi49hagZhWG8rp1VAiAXlQN81fEJ0l9jwF5g2YbLSSA0V7Hc8By%2FdtAKPJ9bQsBL04zrxQstNSAeo%2FmlX1E4W94C5rd4NhsJ%2BKqoGgJ1Wq4F%2Fhtd5lh4WntQ1gp1U1Ip2DywcwlwNRuA9y3wVQwheW9SF4u8AbZ%2FORJ7Dt4o6iRxgtpox2sr5dzC9ZMCY%2BzFS9gVeKuU6tQu%2BT71rYCqzmw3NDGmSPbSf6Ux3%2BLPQ6ndcC6u6RiDBdt2ZKuMddWywmrsHIkeO%2FwLAKaSemjh1z2h07ywjzrBn7gb1HLHhk7MelNB46LqMZ%2BW9a38Vm79Vp88b5sqjhzQpd%2FEOSKWmR645bBmSjGSUDwtM7l1NigEnpTJCJOTxNFWwY76IBVL3dT4nNBG23CUKROWyIj%2By%2B7T%2FIk6ymH9N7sUqdNdDAS9K1qihmYnmvB%2FZaRfXuslT%2BxG8H%2Bqgw08X5wwY6pgF1F%2BcrnPkekgf5%2FhTu5fgI5cPgyny4aVXAfXkUjVB1MsDPm9gOdSq28lDPrWHtblAqEG0LMB5TYvEjAuF0rZkn32JMekN96auPOhydOa1RrK2MBWDrKKBkJWAT9cNNJt0Uf%2BvSAWXQ0gXyjthHCqt7tDnhDSebgNcJHe4Yvlou8XDlmMlrsy0EwwDLsV2K8pKeuF9VvWx6fIhKdg4Nv3kE3CVHmcig&X-Amz-Signature=fc3cdcfced5fafc70d60f5ca981ec707314d16e6dab9c571781fd7aeff043811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
