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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJX7RE3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGY%2FE22VlVQZJUZiW%2Br25sikbR01NhAAZC6cunhcd8xqAiEAqgDbV8h124qWdki1mnC0Ca9XNjHOB6bT2%2FdZcK48cTgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSMdO0tj16giDpbDSrcA5UU71ZaCg8BDueXNU%2FSYTmkP8g8g9dsxqb5Ez373k3SRcggfrmpqW70Ow0FpKozCSMfYx6A5cBVfAgft7iyj2mGHaalpiHEeEPcf6Sk%2Fkw%2B0NsBEflTO2SzZH7YKbczcMTI%2FDsVUnmjV1v3c6p382CjcvlL3vX58A0VL7XmjH%2BjcBtrYk9%2BcbsysVx3534%2ByFD4gc8h6EtKqa3VJZ3wTNuwRZJ1T%2Ba8Kd%2Bhy1a1PHXFGSlmNHim%2BbOILp1ZWBi5uW17XzSF%2FVb6Cvc7CeU99Td%2Fi0LQq8x3xRt5CNaT53OrLiZ2LpbnMmUJ1pvTXZcCyEtZDFQh2tT1kMQ65KbAbFz%2BqGtVIYGxQzomfvfg%2BwW2P04hgb1%2Brgw9kfq0h08yfh5bQ1AHYV10%2FbqwsW9mp%2BFV4SA7FO4jVA7P5ekZlOS8W2hNZf%2BTY%2FwgyPU5d8lXYs%2FO%2FWODli2bVpQZqS1tOmwqQ3wyNsvIkNMiMOCZ8MMrhPosHnpruJACTxl%2Fh%2Fyfbc0MuyxYRBRGCdrCZI%2BuFMzxv5ofRwU879y7ZdX0ruvBxpSQxoZME%2BssrrRe3UoCNn1EE%2FicLT34HcM35Njz0lUTpQamIkFxhZAV%2FEXdSONQDbKEYkRAztjNOWrnMLHypcQGOqUBiiearaKJx3i%2BwZS3kY7O%2Fa3gvwPQ1alIHjFbf%2FELOwmL8JuX%2F9GJOa8GrTIYHmQ1Cm0grrAWaiERPZeis5l65iwSzGVzo3Wk1YJJKFzA5ZX0d7ckGOx8eGGM7kG07v%2FQMoZp7l9jfnduFuxpNXm9PODzCTxzQyIO5Ym4bs0rFZbinjLwU00BK5FR%2BwfZvZyrb4yyus3w5glvjXxpBW0IG5IXAPrA&X-Amz-Signature=770d412b9255d06859688bae5dcaf2e6fb49e07e2c8d8257bc273e4941b8de6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJX7RE3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGY%2FE22VlVQZJUZiW%2Br25sikbR01NhAAZC6cunhcd8xqAiEAqgDbV8h124qWdki1mnC0Ca9XNjHOB6bT2%2FdZcK48cTgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSMdO0tj16giDpbDSrcA5UU71ZaCg8BDueXNU%2FSYTmkP8g8g9dsxqb5Ez373k3SRcggfrmpqW70Ow0FpKozCSMfYx6A5cBVfAgft7iyj2mGHaalpiHEeEPcf6Sk%2Fkw%2B0NsBEflTO2SzZH7YKbczcMTI%2FDsVUnmjV1v3c6p382CjcvlL3vX58A0VL7XmjH%2BjcBtrYk9%2BcbsysVx3534%2ByFD4gc8h6EtKqa3VJZ3wTNuwRZJ1T%2Ba8Kd%2Bhy1a1PHXFGSlmNHim%2BbOILp1ZWBi5uW17XzSF%2FVb6Cvc7CeU99Td%2Fi0LQq8x3xRt5CNaT53OrLiZ2LpbnMmUJ1pvTXZcCyEtZDFQh2tT1kMQ65KbAbFz%2BqGtVIYGxQzomfvfg%2BwW2P04hgb1%2Brgw9kfq0h08yfh5bQ1AHYV10%2FbqwsW9mp%2BFV4SA7FO4jVA7P5ekZlOS8W2hNZf%2BTY%2FwgyPU5d8lXYs%2FO%2FWODli2bVpQZqS1tOmwqQ3wyNsvIkNMiMOCZ8MMrhPosHnpruJACTxl%2Fh%2Fyfbc0MuyxYRBRGCdrCZI%2BuFMzxv5ofRwU879y7ZdX0ruvBxpSQxoZME%2BssrrRe3UoCNn1EE%2FicLT34HcM35Njz0lUTpQamIkFxhZAV%2FEXdSONQDbKEYkRAztjNOWrnMLHypcQGOqUBiiearaKJx3i%2BwZS3kY7O%2Fa3gvwPQ1alIHjFbf%2FELOwmL8JuX%2F9GJOa8GrTIYHmQ1Cm0grrAWaiERPZeis5l65iwSzGVzo3Wk1YJJKFzA5ZX0d7ckGOx8eGGM7kG07v%2FQMoZp7l9jfnduFuxpNXm9PODzCTxzQyIO5Ym4bs0rFZbinjLwU00BK5FR%2BwfZvZyrb4yyus3w5glvjXxpBW0IG5IXAPrA&X-Amz-Signature=193c96fa777bf50744a93bed01a02733e5ff9a372143d8c49079f316d644efae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJX7RE3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGY%2FE22VlVQZJUZiW%2Br25sikbR01NhAAZC6cunhcd8xqAiEAqgDbV8h124qWdki1mnC0Ca9XNjHOB6bT2%2FdZcK48cTgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSMdO0tj16giDpbDSrcA5UU71ZaCg8BDueXNU%2FSYTmkP8g8g9dsxqb5Ez373k3SRcggfrmpqW70Ow0FpKozCSMfYx6A5cBVfAgft7iyj2mGHaalpiHEeEPcf6Sk%2Fkw%2B0NsBEflTO2SzZH7YKbczcMTI%2FDsVUnmjV1v3c6p382CjcvlL3vX58A0VL7XmjH%2BjcBtrYk9%2BcbsysVx3534%2ByFD4gc8h6EtKqa3VJZ3wTNuwRZJ1T%2Ba8Kd%2Bhy1a1PHXFGSlmNHim%2BbOILp1ZWBi5uW17XzSF%2FVb6Cvc7CeU99Td%2Fi0LQq8x3xRt5CNaT53OrLiZ2LpbnMmUJ1pvTXZcCyEtZDFQh2tT1kMQ65KbAbFz%2BqGtVIYGxQzomfvfg%2BwW2P04hgb1%2Brgw9kfq0h08yfh5bQ1AHYV10%2FbqwsW9mp%2BFV4SA7FO4jVA7P5ekZlOS8W2hNZf%2BTY%2FwgyPU5d8lXYs%2FO%2FWODli2bVpQZqS1tOmwqQ3wyNsvIkNMiMOCZ8MMrhPosHnpruJACTxl%2Fh%2Fyfbc0MuyxYRBRGCdrCZI%2BuFMzxv5ofRwU879y7ZdX0ruvBxpSQxoZME%2BssrrRe3UoCNn1EE%2FicLT34HcM35Njz0lUTpQamIkFxhZAV%2FEXdSONQDbKEYkRAztjNOWrnMLHypcQGOqUBiiearaKJx3i%2BwZS3kY7O%2Fa3gvwPQ1alIHjFbf%2FELOwmL8JuX%2F9GJOa8GrTIYHmQ1Cm0grrAWaiERPZeis5l65iwSzGVzo3Wk1YJJKFzA5ZX0d7ckGOx8eGGM7kG07v%2FQMoZp7l9jfnduFuxpNXm9PODzCTxzQyIO5Ym4bs0rFZbinjLwU00BK5FR%2BwfZvZyrb4yyus3w5glvjXxpBW0IG5IXAPrA&X-Amz-Signature=c318ac356016325f5f05dc4676a446e4f25ef5f420b97029bd900fbc2b8dba88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP3DEOZW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQac8H7eee6xFAyyhwnyd462%2Fwv586UZ3nBKw5ssuKoAiEA8VgsiQad0eXK%2Foqlus8W2hlkNwzph6PHfR%2BmNnlFWgwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGegJx42WuUgT5oxaSrcA5fzYadG2QiEBuUIwU5F0pd0786XgGW6y6Dgv7msaeb26gpATAlE%2FRzJGjXPYKOOoeOpn3l7y5%2B%2FqHxJKKa810DV4QchYG7msJzYZBzUShSSyWzdznAyp6PN6eZR2C6M5n%2BxOHFh2nZHpXMJcQZZkh5YBpWYoUF%2BPIZBcPyYI%2BK0V3Ka17RaNK%2BBsW5rpSdnoBsD%2BLkdWBD9kCOpbNRO5QHAJSKtaDr4a2RFYcG%2B4lFsNvxEZ%2BQjNnXMvzVn9br%2FvDARqyWjiwuURk1avPKmhtjBopbXgzia9htIvVTu00%2FE6gwRgvIvYqKzeFc%2BFPNPBowpHAjHgJTiOj2L%2BDPrAJSO25AJFhIRjWU2Wm5kx5COeExAV%2FTSVf08nXUjtMF5l8ke4kF%2B99xQ%2FPSWuu8TdQct0vy8o%2FwnjeQzg2%2B9ixzcy7LXwIWQdvMNUj5DJTK1kpqMZVBL3hbOUa3uIXxdbHZiM%2BYSiAYQJIP3pleCem7ZPJ2cxDhINyQsrQQ5l9ZrYmKcEb0CMCC8V55OR68PLZNfxLIQJhsQ8kHKYNQZRbkaMrF53q%2F2UoFqZ1EOwi60IT%2FDvcKgHjWIvqA0rHvYYFYZ7F9ONXCL2LMDYwU7txUtZSLOMA8aPj18v%2FIDMLrypcQGOqUB1XHcBTDYkz2ucqiNJO1jMwPUJ9ubBHLUTM%2FBUp5VxPBo3sOk2X%2FjW9x2Aw1zWNom3nAc4lzNtBq1agHs89mJRG3zJTRSQYjSMhC3%2BW3%2BqIYR%2BK1UY6jA4KRRoZMf3XUWOGc8DKPoYONcjJDuaHvomFydIVW9O%2BjFPWf0I%2Bnj%2BSqyDOqmp4vUG01uhXSXSry0RiLjJ1Cl6497Rk2MPHgBK9aBqUHL&X-Amz-Signature=87ff0e2af57428251f3599a4d7ba2141747d57f04fb1df2352ea20c0d619e6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNV5Q224%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPkUAzDmlqBlYW2RMPSEfTKzt6qVpRkMKkSQ8z8kwWvAiA25Ep9g4s1NEfJQJRkypm1YFPmcoiCt4mdB2DME%2FgzVSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhz3DOjrz8VCqUe7vKtwDXsVDeNr7b927E8fxv9JBpJ31FvEfhrZIiPyBGS9BLBBuHZCO7xphEe3q6ypL5u5dKzWfQP3bQsRPwHvt8WXy6zcaT1bVtPCNyb1eIELJ0EOcV4v5SRt0OBgXRZlULb1%2F23QU%2BTJA35YsqiegIS0XDVsUC09l2VUW2WakBDNims6gkaUybVNGe0FGRMdfms%2B8tEKsMreUU19v%2FPwN1Pzk9N4bsiUdNWct3RMbXwBv%2FV%2Fv%2FM4Se92faHY0c17os6n6dYzRSj2jBi8SHDx39V%2BAdeel%2BfIt1MrfT%2B3L7wvwg5gKrFKTKLM5UXzkzTGq1iOIId%2FBtJVpsSvQFKV2vsPSX6u4ScRBMr68FCytPGhttnoTeyRoJha5tmSx1V%2BBI3nQyP9Gyw05b6PpWkCF1sklVo1XAkH%2Fwt8QleBBH9y5WrkS0DFJLkQ56WZo13fpFwSu7LyH65%2FKcWTRBsQeS6fxuiQT5ssNXMZ95TobSLKxjImeveSlzWsi8h98R9F4xzDgOGwg2xo%2F3N4ZATEEjo3Ux80YXP2v2tBRIsyOx0oD9GYG0iStDGWafeWLCL97AjhfOW3evgKIm7W4pw1O60xo8bUzi%2FQEb5deHhvmUg3eLYazgOOs8E6nMm3oXYMw5PGlxAY6pgFyAXFKoKRrPq4%2FjNmZ%2BGbRCz%2BwzRtP74%2FBtVEDQsZq9eXUl3QFO%2F29lJTa2mds3N3h1NtHvvT0VtseiqQZPn2IIej590z%2Bi7eXyEzPSQueujhQgvQU2Vp7VOkNMqGSvaZE7hfYo%2BWjY3mtHaETLFspXaWL9gP0Y%2FKgGvzuxidTjs2YX2exjeZahwSNQxLTc8bksD%2Br2SE8PoVfW%2FctsISLxZOd7Deo&X-Amz-Signature=77a1949a9f6ddd9796bc7581eec6ec523b9cbd6fc5d95cbfbb98eccb02258d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJX7RE3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGY%2FE22VlVQZJUZiW%2Br25sikbR01NhAAZC6cunhcd8xqAiEAqgDbV8h124qWdki1mnC0Ca9XNjHOB6bT2%2FdZcK48cTgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSMdO0tj16giDpbDSrcA5UU71ZaCg8BDueXNU%2FSYTmkP8g8g9dsxqb5Ez373k3SRcggfrmpqW70Ow0FpKozCSMfYx6A5cBVfAgft7iyj2mGHaalpiHEeEPcf6Sk%2Fkw%2B0NsBEflTO2SzZH7YKbczcMTI%2FDsVUnmjV1v3c6p382CjcvlL3vX58A0VL7XmjH%2BjcBtrYk9%2BcbsysVx3534%2ByFD4gc8h6EtKqa3VJZ3wTNuwRZJ1T%2Ba8Kd%2Bhy1a1PHXFGSlmNHim%2BbOILp1ZWBi5uW17XzSF%2FVb6Cvc7CeU99Td%2Fi0LQq8x3xRt5CNaT53OrLiZ2LpbnMmUJ1pvTXZcCyEtZDFQh2tT1kMQ65KbAbFz%2BqGtVIYGxQzomfvfg%2BwW2P04hgb1%2Brgw9kfq0h08yfh5bQ1AHYV10%2FbqwsW9mp%2BFV4SA7FO4jVA7P5ekZlOS8W2hNZf%2BTY%2FwgyPU5d8lXYs%2FO%2FWODli2bVpQZqS1tOmwqQ3wyNsvIkNMiMOCZ8MMrhPosHnpruJACTxl%2Fh%2Fyfbc0MuyxYRBRGCdrCZI%2BuFMzxv5ofRwU879y7ZdX0ruvBxpSQxoZME%2BssrrRe3UoCNn1EE%2FicLT34HcM35Njz0lUTpQamIkFxhZAV%2FEXdSONQDbKEYkRAztjNOWrnMLHypcQGOqUBiiearaKJx3i%2BwZS3kY7O%2Fa3gvwPQ1alIHjFbf%2FELOwmL8JuX%2F9GJOa8GrTIYHmQ1Cm0grrAWaiERPZeis5l65iwSzGVzo3Wk1YJJKFzA5ZX0d7ckGOx8eGGM7kG07v%2FQMoZp7l9jfnduFuxpNXm9PODzCTxzQyIO5Ym4bs0rFZbinjLwU00BK5FR%2BwfZvZyrb4yyus3w5glvjXxpBW0IG5IXAPrA&X-Amz-Signature=e279406a9b5b38f8e993df3645c397977939a813e19c8a574b88baf6fcbefbeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
