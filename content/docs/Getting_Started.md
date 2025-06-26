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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGVT5HL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDpdUt1pETg0Ze5oJxWYgEvZ6mn36yuAdeobmuoRVCSLgIgPKybbGzHEU8KXYCj1oWUYRNPe6RVgkESF9ylpNQ9J48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFzF8qsN4guWxQ2wzSrcAxyr2E0kDMSWRlbbynkh3%2FaqJw4N%2FRyD4t7R99OQ%2FPlJGEAkZ6dL4AZUQ2fRrzt57RzyoW25kd7B7ZiX6bUtH83vpOXnA6eaEjpKsaBgGFoCn1UXThsJRUMebTktRqlTWQ7s%2Bh57fCHPP4MiX2GCcWBCRc62pWJqWA3kFNv1tAn8uT%2B07PmqzrVHkiOj46gjw3xEM26zuDcaDmt3BihEyFJ5eMRkFvsnOu3z9hiyJxTNFSga6MJ2lISdmb8b0zX0yffMCZDSNzr2sQa1R0R%2FDnlV2zM7czd8ezn56WRjuPfsva66Eu3bOF0j2rJEw3gT%2FfV53Qf8m2qbRqTIRDnq7UJHpHEr376RSFAB2Gamyc6GXX5LqzyqrWg9wknSwj1euJXcSviqkqEr%2BDuB1QwZDeXIQrzsH5aOjJ2Dq%2BLuSSC3pq1iAK91mn7FRjUxXg4Q0Nzdm4FHi45doGezF35qlHP3DG%2FXW8fPRxYMJXuupBK8ZFFelsTG3gZUn85hsYY3oxSsBOoS%2F8PbVh06zw11Fx8W3s42CZLlYjEWYgSoxQWggmOmxpzlDVN9RjxWlQhY8Y%2Fi6cDPRBololkfdE1iI0OJUBpJUG1ILRx%2FjPzl24wnvBHQQQjr4TFUCAupMJGJ88IGOqUBltVNRift3NnGc2zXuuct3gGDxl4EHFERJT1QarX4ci3yRl1O2y1RVb9OLn5B%2FBX2WJeGtAD3RpZdNqD2h85PLpnpUIpQkoyuniF7iHxIYJqkvUB4so6U6iAZy2YzSuTBkHhlRkeso1t6IDYuW2ruQ5e8m83iLA%2Bh8nIuvLq9207XSsHzUrloxgQiL30GxCZBXutzJZcIe2gO8ZpMeTW2iEKoQ6EV&X-Amz-Signature=a64b4a8610d1c13a60b9dbca338d2cba34aaeaf321c5b0bf3a7311755f5485c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGVT5HL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDpdUt1pETg0Ze5oJxWYgEvZ6mn36yuAdeobmuoRVCSLgIgPKybbGzHEU8KXYCj1oWUYRNPe6RVgkESF9ylpNQ9J48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFzF8qsN4guWxQ2wzSrcAxyr2E0kDMSWRlbbynkh3%2FaqJw4N%2FRyD4t7R99OQ%2FPlJGEAkZ6dL4AZUQ2fRrzt57RzyoW25kd7B7ZiX6bUtH83vpOXnA6eaEjpKsaBgGFoCn1UXThsJRUMebTktRqlTWQ7s%2Bh57fCHPP4MiX2GCcWBCRc62pWJqWA3kFNv1tAn8uT%2B07PmqzrVHkiOj46gjw3xEM26zuDcaDmt3BihEyFJ5eMRkFvsnOu3z9hiyJxTNFSga6MJ2lISdmb8b0zX0yffMCZDSNzr2sQa1R0R%2FDnlV2zM7czd8ezn56WRjuPfsva66Eu3bOF0j2rJEw3gT%2FfV53Qf8m2qbRqTIRDnq7UJHpHEr376RSFAB2Gamyc6GXX5LqzyqrWg9wknSwj1euJXcSviqkqEr%2BDuB1QwZDeXIQrzsH5aOjJ2Dq%2BLuSSC3pq1iAK91mn7FRjUxXg4Q0Nzdm4FHi45doGezF35qlHP3DG%2FXW8fPRxYMJXuupBK8ZFFelsTG3gZUn85hsYY3oxSsBOoS%2F8PbVh06zw11Fx8W3s42CZLlYjEWYgSoxQWggmOmxpzlDVN9RjxWlQhY8Y%2Fi6cDPRBololkfdE1iI0OJUBpJUG1ILRx%2FjPzl24wnvBHQQQjr4TFUCAupMJGJ88IGOqUBltVNRift3NnGc2zXuuct3gGDxl4EHFERJT1QarX4ci3yRl1O2y1RVb9OLn5B%2FBX2WJeGtAD3RpZdNqD2h85PLpnpUIpQkoyuniF7iHxIYJqkvUB4so6U6iAZy2YzSuTBkHhlRkeso1t6IDYuW2ruQ5e8m83iLA%2Bh8nIuvLq9207XSsHzUrloxgQiL30GxCZBXutzJZcIe2gO8ZpMeTW2iEKoQ6EV&X-Amz-Signature=ec8a67398614024eb6e648fd4ae7a4fffde9513bc27b1e94895e517dfc852b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGVT5HL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDpdUt1pETg0Ze5oJxWYgEvZ6mn36yuAdeobmuoRVCSLgIgPKybbGzHEU8KXYCj1oWUYRNPe6RVgkESF9ylpNQ9J48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFzF8qsN4guWxQ2wzSrcAxyr2E0kDMSWRlbbynkh3%2FaqJw4N%2FRyD4t7R99OQ%2FPlJGEAkZ6dL4AZUQ2fRrzt57RzyoW25kd7B7ZiX6bUtH83vpOXnA6eaEjpKsaBgGFoCn1UXThsJRUMebTktRqlTWQ7s%2Bh57fCHPP4MiX2GCcWBCRc62pWJqWA3kFNv1tAn8uT%2B07PmqzrVHkiOj46gjw3xEM26zuDcaDmt3BihEyFJ5eMRkFvsnOu3z9hiyJxTNFSga6MJ2lISdmb8b0zX0yffMCZDSNzr2sQa1R0R%2FDnlV2zM7czd8ezn56WRjuPfsva66Eu3bOF0j2rJEw3gT%2FfV53Qf8m2qbRqTIRDnq7UJHpHEr376RSFAB2Gamyc6GXX5LqzyqrWg9wknSwj1euJXcSviqkqEr%2BDuB1QwZDeXIQrzsH5aOjJ2Dq%2BLuSSC3pq1iAK91mn7FRjUxXg4Q0Nzdm4FHi45doGezF35qlHP3DG%2FXW8fPRxYMJXuupBK8ZFFelsTG3gZUn85hsYY3oxSsBOoS%2F8PbVh06zw11Fx8W3s42CZLlYjEWYgSoxQWggmOmxpzlDVN9RjxWlQhY8Y%2Fi6cDPRBololkfdE1iI0OJUBpJUG1ILRx%2FjPzl24wnvBHQQQjr4TFUCAupMJGJ88IGOqUBltVNRift3NnGc2zXuuct3gGDxl4EHFERJT1QarX4ci3yRl1O2y1RVb9OLn5B%2FBX2WJeGtAD3RpZdNqD2h85PLpnpUIpQkoyuniF7iHxIYJqkvUB4so6U6iAZy2YzSuTBkHhlRkeso1t6IDYuW2ruQ5e8m83iLA%2Bh8nIuvLq9207XSsHzUrloxgQiL30GxCZBXutzJZcIe2gO8ZpMeTW2iEKoQ6EV&X-Amz-Signature=21f0118daa667ae0b2a8b6eab685c11abd7513d7e6e846ded5c39e61d851d8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2WRZQI7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDpfqXZkiaLpekPyn686Gvj%2BHVDJroFKUvtIFeRsw4d5gIhAPvXT6epjRy2VOYiMI9fVvpg8f1YHRQRAiiUjJiv7whJKv8DCFUQABoMNjM3NDIzMTgzODA1Igw1SHWEAb8QP1tVAdkq3AN3pARnAYyG9lNwMP6mtyZNtzAb49dxp2d0DDEp3IJWoiBllFl52RdnevEFstRMyW3SGhQBYw2qU5m3Z2ymYbRP9thGeYoI8M9wLYCHjoQ5tIXqiAKmltHsjuHwY0ViM9nYoW%2BYlmUtx8W22EDAeaGQErBmRhgjmN0p8ur60CJi0h5e2MKJT8RTjEADqQbsfybYjIFFYEiZV5MMVX3rkCLukUyfvu3uV52JY8MVQ1LY5KYbB3WtQjKSIboflJVwbFtvRWAvKBQMkgMPVI58PKxJtBnpkK78TyqeER%2FmM6TR6qjd0TNu47kbviRUxXv8Xlhecxyjnd3McQAmo1014UDRU7ylILP1lQoDEDWBpwEv9c7YJBMyx5tPGTx%2B6OU4urWW1ByaCqphvlbcxIWDiKaCxA%2BOMsZ4gyWDHyI1LT7FXB0PRfc2co9uiliD8Cvk3uR5yRQrcsKtX1psBfKZL%2BXeVd2OpA3WLBAlheQcenhEtC%2BbPUeLToMbrLvnmZGV%2BhiZ1u%2F36rOHQnkYkxMj%2B4oV3Rqgykzm0iBR%2BeMnIbyTz81GphAodr2o52KHHlwLQAgYDy4MaqOrXrBdxmY2%2Fwk8N05QV1wLZTluRUjDZS%2BPWpCBCLGel4wTx2PXvTCJifPCBjqkASzkA8mqyY%2FNzO%2B6Ih7lda8aexzSIbDpQEbNijTIM7xf8%2F2eELTtU5rOs0f0IuPOEjva83k8OlnNNyV50XgoDvJWrY2iok5vZ2Te6QRVn6SHEBnH0AgURwFaNOKbosrTOObzp7bMiaanyG3zwvtQqXAnm2kcVFhj1991vzt1%2FQmCn%2B4yhXm0YDkGV%2BUvH%2BlmDOS0jGwSMTvG28SeKopbEFav17It&X-Amz-Signature=28010df5df79949dbb404c1300b555af185c8c91be0c92d3a26ce16edf347025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WQRYLI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIH%2BkgQZA6fSUuBarzgawgZzSkyKwW0N7%2Bc6tVJ5AERKoAiAeJdSYvFvqpwXdEzCTNzhqQHOYIGNCAmkL1o2coe3q0ir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMchmdXycohqFmG0zlKtwD4fR3nORvsXdj1nt1d34m4QDCtixNK4iKFACxuCPAF%2BkTzfDhBxx%2BfXZDsxcjKzlelybYRZ7LT2TLzrQbRfE6Z19A1bba0Aqsz%2FHhAv4TjCXG%2BbpWTfbiUFv%2FIsjClHO9StM58HORXxbTUVc9snY5fYEFny39sewK7vhIJqLqVnR6%2BXTDntQMFoGghtjQTXiWzKeK42sv8Syejq3Lt%2BfYtwlNPtwwspKLYp9%2F4rwd8zDIJYq3R3GS%2FCvuq1%2B9K%2FN2Pmud27G58SOOnVkgY6W9vKHS5DA09cm4FHNab90ckmf2GbwrzVYuPumJMeTZOZWRj3bKFvs6WMcpOL0j68R31Q7Bv%2Bbza4vypH%2FujskgFjLSReVe%2FWx7gnHUD5le8dqAoYZWvw%2Bo2nICe2fbSeZ6pYDWADsQP5Er7VTAVLt710hkGP1YZZfYlG68tzuog5Alg8toiNluD8iCFhn%2BB9YSumMjOu9aUPxOTxYpHZ6q%2BJo6hKyML93YA0%2Fl0YyIe%2Ft5ZqVM6jQan2bjqxWMaB8fUtNsh3CkcXMeb9t4fhorF0CB7EsSCSJm9ehXVWEJ7NE%2B9s%2FG30SRzOXhgYBZiuOzZajYkp5yzaSLf3VP9zHKNEelGhDTdjDAVwOrtjAw4YjzwgY6pgGNaQCTBP1G6qR1cUWLydJGUgY%2BYM3Z6s7mdqa4g91Zi%2F%2BLFaOLz6wGUurlDy67ucwNdgyQ2%2F3AaREIJfFUUGqfC2oP2Q8ndTrCkeeU2V4XEvkZf811esKq87%2F%2Bd7V4JQU671U0%2Bjuqdphgb3iBpsKtQId0Z7jwGoHqmalM6Uj5poDrhlxQHfckkRJyokAcH%2Fa%2BPG9ZyapqrnFIXDcPrC6P5No5wkii&X-Amz-Signature=7c2a8e68bcec8c56691bcc02cff57bc2fbc77a2be5c67e1f069f8fe3e85a9789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VGVT5HL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDpdUt1pETg0Ze5oJxWYgEvZ6mn36yuAdeobmuoRVCSLgIgPKybbGzHEU8KXYCj1oWUYRNPe6RVgkESF9ylpNQ9J48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFzF8qsN4guWxQ2wzSrcAxyr2E0kDMSWRlbbynkh3%2FaqJw4N%2FRyD4t7R99OQ%2FPlJGEAkZ6dL4AZUQ2fRrzt57RzyoW25kd7B7ZiX6bUtH83vpOXnA6eaEjpKsaBgGFoCn1UXThsJRUMebTktRqlTWQ7s%2Bh57fCHPP4MiX2GCcWBCRc62pWJqWA3kFNv1tAn8uT%2B07PmqzrVHkiOj46gjw3xEM26zuDcaDmt3BihEyFJ5eMRkFvsnOu3z9hiyJxTNFSga6MJ2lISdmb8b0zX0yffMCZDSNzr2sQa1R0R%2FDnlV2zM7czd8ezn56WRjuPfsva66Eu3bOF0j2rJEw3gT%2FfV53Qf8m2qbRqTIRDnq7UJHpHEr376RSFAB2Gamyc6GXX5LqzyqrWg9wknSwj1euJXcSviqkqEr%2BDuB1QwZDeXIQrzsH5aOjJ2Dq%2BLuSSC3pq1iAK91mn7FRjUxXg4Q0Nzdm4FHi45doGezF35qlHP3DG%2FXW8fPRxYMJXuupBK8ZFFelsTG3gZUn85hsYY3oxSsBOoS%2F8PbVh06zw11Fx8W3s42CZLlYjEWYgSoxQWggmOmxpzlDVN9RjxWlQhY8Y%2Fi6cDPRBololkfdE1iI0OJUBpJUG1ILRx%2FjPzl24wnvBHQQQjr4TFUCAupMJGJ88IGOqUBltVNRift3NnGc2zXuuct3gGDxl4EHFERJT1QarX4ci3yRl1O2y1RVb9OLn5B%2FBX2WJeGtAD3RpZdNqD2h85PLpnpUIpQkoyuniF7iHxIYJqkvUB4so6U6iAZy2YzSuTBkHhlRkeso1t6IDYuW2ruQ5e8m83iLA%2Bh8nIuvLq9207XSsHzUrloxgQiL30GxCZBXutzJZcIe2gO8ZpMeTW2iEKoQ6EV&X-Amz-Signature=22f76b9fdecf16c4e91564c1fe1df0375c12e0247c26457e15e8f746703dfad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
