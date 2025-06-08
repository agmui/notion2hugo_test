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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REIUCXUF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuIBFG8b2Ap9Vh28yIMiMW2KKjBDc%2B1LCILzFjopUTzQIhAMdv%2Bu01Edp5wDJ45JLYVovwrPKEIH%2FQHPEpPgwcNyO5KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKs5PMUN4azdneRXQq3ANBmxVxzZeEFE%2F8A2bJZRVV5lmVfdCqieqjvOljmnyJwAkDBa%2BzX1e7ANB2hOXDizU8YHic%2B2kKbxy7vs00WVBi6MAsqDeengy1u9rKNfB5HtOxrRsTt4QTVdzwEL817Lp1My9YxvBUZhVKvbz2XFH5ZkIxlSIF60QeZDSOFA6xQhfN%2BIYYw%2FZoSBzFwfjcI4x0BBf17D5dBMEYuw6MCxv30AVB%2FifPAmuVLXjD1viKvzaQLHDUdmFags27pC%2FiZUjAzqGwfeWKodzxnwjtR%2BQQRhXbY00o3RnHdsfotsraeXVzeS57%2BZgmdmTu%2FfC7FVSV3gva7xrpJUWYxKYwLKRYYYQWEeG6GeI%2Fam8P1DuqbZM2uCT1Zc83ECTrq34Ons%2BV%2BTKcwejBDYH91VCg%2BBIRzVF4B9pt6qR%2FqIHLV%2BQzKHtbJcOvDYGqxYPfLRpH%2F8D5tSpNc%2BbuqX%2FElOB2WflenT%2BqPn96797prpMvJ14g6chZj8CIbd2ziIo%2BbZpDWGoAIsbkQiR0fs5%2FG2ou%2BODwMDNrquRjHWXSlV8TQDbxXwVKB6sLtngGRWHUcgBRdBSXqnPrnzWVTIlULqtgIJvxwuZtPnXwTSy%2FJKtau4UyFriKEncSzr8nB18ZijDOspbCBjqkAaheSCwJ0IMb%2F36dWmGe9Kyh2FrYoljZCi4ROW%2BOR6Err0LYy33N0%2BgbKVzbvaj%2FCGecEVb%2FWjvOWdJJ7revq%2F4%2BbmgfyVg%2FOlcl5vBDXXramYCdBkCQ3yNrOLrPkNz4XRY4VHBJJoHqHFbimL3AXGbm%2Fr43yJqMR0BJ%2BhNpN3U%2FoTirjk9xwHhEfBzjJMDnlxiM5ys6d9tKReq1CbNkGtuHJDax&X-Amz-Signature=568a149de99d2b5235eb959daa2451da808de625e48f9a0008d291e29da62bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REIUCXUF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuIBFG8b2Ap9Vh28yIMiMW2KKjBDc%2B1LCILzFjopUTzQIhAMdv%2Bu01Edp5wDJ45JLYVovwrPKEIH%2FQHPEpPgwcNyO5KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKs5PMUN4azdneRXQq3ANBmxVxzZeEFE%2F8A2bJZRVV5lmVfdCqieqjvOljmnyJwAkDBa%2BzX1e7ANB2hOXDizU8YHic%2B2kKbxy7vs00WVBi6MAsqDeengy1u9rKNfB5HtOxrRsTt4QTVdzwEL817Lp1My9YxvBUZhVKvbz2XFH5ZkIxlSIF60QeZDSOFA6xQhfN%2BIYYw%2FZoSBzFwfjcI4x0BBf17D5dBMEYuw6MCxv30AVB%2FifPAmuVLXjD1viKvzaQLHDUdmFags27pC%2FiZUjAzqGwfeWKodzxnwjtR%2BQQRhXbY00o3RnHdsfotsraeXVzeS57%2BZgmdmTu%2FfC7FVSV3gva7xrpJUWYxKYwLKRYYYQWEeG6GeI%2Fam8P1DuqbZM2uCT1Zc83ECTrq34Ons%2BV%2BTKcwejBDYH91VCg%2BBIRzVF4B9pt6qR%2FqIHLV%2BQzKHtbJcOvDYGqxYPfLRpH%2F8D5tSpNc%2BbuqX%2FElOB2WflenT%2BqPn96797prpMvJ14g6chZj8CIbd2ziIo%2BbZpDWGoAIsbkQiR0fs5%2FG2ou%2BODwMDNrquRjHWXSlV8TQDbxXwVKB6sLtngGRWHUcgBRdBSXqnPrnzWVTIlULqtgIJvxwuZtPnXwTSy%2FJKtau4UyFriKEncSzr8nB18ZijDOspbCBjqkAaheSCwJ0IMb%2F36dWmGe9Kyh2FrYoljZCi4ROW%2BOR6Err0LYy33N0%2BgbKVzbvaj%2FCGecEVb%2FWjvOWdJJ7revq%2F4%2BbmgfyVg%2FOlcl5vBDXXramYCdBkCQ3yNrOLrPkNz4XRY4VHBJJoHqHFbimL3AXGbm%2Fr43yJqMR0BJ%2BhNpN3U%2FoTirjk9xwHhEfBzjJMDnlxiM5ys6d9tKReq1CbNkGtuHJDax&X-Amz-Signature=ec263a7cb635e2d8e2bd118842ac24c873f5f14e442affbdcd6d4ee6a0a7c6f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REIUCXUF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuIBFG8b2Ap9Vh28yIMiMW2KKjBDc%2B1LCILzFjopUTzQIhAMdv%2Bu01Edp5wDJ45JLYVovwrPKEIH%2FQHPEpPgwcNyO5KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKs5PMUN4azdneRXQq3ANBmxVxzZeEFE%2F8A2bJZRVV5lmVfdCqieqjvOljmnyJwAkDBa%2BzX1e7ANB2hOXDizU8YHic%2B2kKbxy7vs00WVBi6MAsqDeengy1u9rKNfB5HtOxrRsTt4QTVdzwEL817Lp1My9YxvBUZhVKvbz2XFH5ZkIxlSIF60QeZDSOFA6xQhfN%2BIYYw%2FZoSBzFwfjcI4x0BBf17D5dBMEYuw6MCxv30AVB%2FifPAmuVLXjD1viKvzaQLHDUdmFags27pC%2FiZUjAzqGwfeWKodzxnwjtR%2BQQRhXbY00o3RnHdsfotsraeXVzeS57%2BZgmdmTu%2FfC7FVSV3gva7xrpJUWYxKYwLKRYYYQWEeG6GeI%2Fam8P1DuqbZM2uCT1Zc83ECTrq34Ons%2BV%2BTKcwejBDYH91VCg%2BBIRzVF4B9pt6qR%2FqIHLV%2BQzKHtbJcOvDYGqxYPfLRpH%2F8D5tSpNc%2BbuqX%2FElOB2WflenT%2BqPn96797prpMvJ14g6chZj8CIbd2ziIo%2BbZpDWGoAIsbkQiR0fs5%2FG2ou%2BODwMDNrquRjHWXSlV8TQDbxXwVKB6sLtngGRWHUcgBRdBSXqnPrnzWVTIlULqtgIJvxwuZtPnXwTSy%2FJKtau4UyFriKEncSzr8nB18ZijDOspbCBjqkAaheSCwJ0IMb%2F36dWmGe9Kyh2FrYoljZCi4ROW%2BOR6Err0LYy33N0%2BgbKVzbvaj%2FCGecEVb%2FWjvOWdJJ7revq%2F4%2BbmgfyVg%2FOlcl5vBDXXramYCdBkCQ3yNrOLrPkNz4XRY4VHBJJoHqHFbimL3AXGbm%2Fr43yJqMR0BJ%2BhNpN3U%2FoTirjk9xwHhEfBzjJMDnlxiM5ys6d9tKReq1CbNkGtuHJDax&X-Amz-Signature=6da2315b0bde43aee4f31e610628a9e2c798adde368faa8f065637a47b881832&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C6NGDLF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRPG3XufUF9Ow7ucj8ild5GlPWex0epZ8mQewh%2F53DPAiAW%2Bw%2BKYJlAdwyK6kh18uf4KroNI4gFSI81xfv%2F8A9%2FEiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHlhCTW2zp6ILlBNbKtwDcgF8NRKMkpuCZPRzF1Ddhwmxr1zALsEDik7bRJLqttMqicY8aSmYU5ruYq%2B%2FOd6s9jysDSgP73hsihzYCe7ZT5XZ1jWvWbJRvtwgTZk6xOKsqGt7O06tA4hGUK0Jpo0TuDgZnRGvvvm3lPFu3QrZILpbWNnDlCgE%2FDrHzPC%2B%2BHlEeLuIKPiKe4b5VTciXvtS%2BU%2FYTuqBufu8cJxrM3hp%2FowDpTL1LuOxOEhurowFm4qPCF3x9CI4hc2qNdItuhLpEAmSjrx7skSXaAV9sBD9UE24bVC0dDcWIpTgB5quvQtMKXFsTaEFABE7xb2HRWveWgIXr7KAyZCMptWfjgSGR%2FV1zCLYIyubVSaXX3P4BKrg5Fg2tKPeBglWTkKEJi00J%2FinaDXhW2EIRf5EZmNwwIF9HzeX%2BWisr8MS36hlaxIrF6aTH9Kfm2I799UgytrH9KAjGLN%2BHL3NYE0bQeD3eIA0M28n%2FhbpNkJileu9z%2F74tExUePygAOV87w8FoqKCHN93CCwanIphoTStFQRl7ZrRDbM8Cm7R1MnBHck6xEoOiVoWUoBDKHWGhVnZ0vvyCe0v%2FMrrhhk%2BFMM0ghwQtzKN4SpB7l45zqmyOZwK%2BpnJx%2FJ2jElpJIXQHEMwyLOWwgY6pgEQTtwx3M7Kagnyj%2BcwOa6StmKcAX8aPV7qodcWeRNVCDpdALJa3TNXHJpduB8JBH9Efo8M8uo3%2BH7N0Io6Px9z1BrJdt1o%2BbIK8rKxcWhufgYsawoSv52QvLvgvIZnq4%2FYnmdYDwzbjz2qPMWXlVu3pocvIN%2BUTFPKnB%2FVq8kx8mYueckZTsb27igGvAATyfIKpod2T493pTBJemOqgj%2FRwEeOzaqE&X-Amz-Signature=5d33767729e1c6e4c8abe48d66f44f91b47f3725fcea9ba609d1da14e9b67967&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC4JOMWJ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLKyYhs2p5W3Du0%2F80fN4BiL%2FjEeTr1y7aAU7rGE55WAiEA5fjAeMme27T%2FGVgf0B2w07xB3SG4ew0KFblTE6L9bXUqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCelvIzVIX2N6zEr7CrcA9WF1%2Fw7UJhyW%2F48OIUEsZruYf0MTMrl7VUIlcaUso%2BXUgxtabw%2FVhwLxC555I2bBkxIpFPCs3g5rxKgt%2F5YqwF9xRm360bezrdjQ3GJb4%2BIi8737ZR97hqxmyoOILeMEkTFOTX6On3WZO2TGZNg4lzPtV8N24bpaNoN%2F9XCyWzfUPoe1i%2FM%2F23Vr5GizqG2tW7uNB0wUG49AuWbcufidnsCykdoXBZu06pzt7ZP68keLhBJqofcEJmRGYNkFNV4B%2BLoPBZ4F0YiakLtG01d09egEhaeM3mp7jYwnj5TfJzg%2F6VFpaTjJPHFDcf2UlLlPLisyx%2BgVDOtKSrNWFLoYJETz%2BOmZCiEZXdbC%2Fx85Iy5P2qrYuJd6XD%2BENUKOQ8k9XjW1Zvjrzm84Om3%2BBkeXvlFbfmx8y6jyFPiawpP%2FwiN5DwN5gQwzi9SwIxscmhiAf3ht0OZ%2F6tJYXwcg4K6BfEnnGZVcS%2FphOiUmgi72IleF5O4hJrPrDPjTCED%2FlK0PEcT32M3k1tCPnOEKkxig%2BN7L0sq5AFWUq3NVHl1nfwrwA%2BBnX9JvmmmXXYcLgoYlOmyXQwMvvlvOJHNGuHOjSiETWKCRCEIqTIcAXoAPzEA8HisMKZyfg4D2TIkMMWylsIGOqUBHKyPj2xQLarBPz01oNMiYI8%2Bxn%2FInjyXzNXSavl8dBYBun56LH%2BqBTuHQM5Mv5vOj4rLrZV2B4QAk6%2BBG%2BTCcDM51kRKcjIyOMJyWqlUYyEwaKg98GmURET5iJJYAnq7maCDkVHYNrEbYS%2FrJq1ENp9L%2FR%2FsT0DnBv%2FvdKHa0ch4BwSGQoRilFsmvmFfjptRzfTEPJ3%2FY%2FXkCwqjA37lOfaULv7P&X-Amz-Signature=f4ce13c914e2dacebc2678d8f6f8ad1723330e4e236e0aae8d7d392a62c86a62&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REIUCXUF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuIBFG8b2Ap9Vh28yIMiMW2KKjBDc%2B1LCILzFjopUTzQIhAMdv%2Bu01Edp5wDJ45JLYVovwrPKEIH%2FQHPEpPgwcNyO5KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKs5PMUN4azdneRXQq3ANBmxVxzZeEFE%2F8A2bJZRVV5lmVfdCqieqjvOljmnyJwAkDBa%2BzX1e7ANB2hOXDizU8YHic%2B2kKbxy7vs00WVBi6MAsqDeengy1u9rKNfB5HtOxrRsTt4QTVdzwEL817Lp1My9YxvBUZhVKvbz2XFH5ZkIxlSIF60QeZDSOFA6xQhfN%2BIYYw%2FZoSBzFwfjcI4x0BBf17D5dBMEYuw6MCxv30AVB%2FifPAmuVLXjD1viKvzaQLHDUdmFags27pC%2FiZUjAzqGwfeWKodzxnwjtR%2BQQRhXbY00o3RnHdsfotsraeXVzeS57%2BZgmdmTu%2FfC7FVSV3gva7xrpJUWYxKYwLKRYYYQWEeG6GeI%2Fam8P1DuqbZM2uCT1Zc83ECTrq34Ons%2BV%2BTKcwejBDYH91VCg%2BBIRzVF4B9pt6qR%2FqIHLV%2BQzKHtbJcOvDYGqxYPfLRpH%2F8D5tSpNc%2BbuqX%2FElOB2WflenT%2BqPn96797prpMvJ14g6chZj8CIbd2ziIo%2BbZpDWGoAIsbkQiR0fs5%2FG2ou%2BODwMDNrquRjHWXSlV8TQDbxXwVKB6sLtngGRWHUcgBRdBSXqnPrnzWVTIlULqtgIJvxwuZtPnXwTSy%2FJKtau4UyFriKEncSzr8nB18ZijDOspbCBjqkAaheSCwJ0IMb%2F36dWmGe9Kyh2FrYoljZCi4ROW%2BOR6Err0LYy33N0%2BgbKVzbvaj%2FCGecEVb%2FWjvOWdJJ7revq%2F4%2BbmgfyVg%2FOlcl5vBDXXramYCdBkCQ3yNrOLrPkNz4XRY4VHBJJoHqHFbimL3AXGbm%2Fr43yJqMR0BJ%2BhNpN3U%2FoTirjk9xwHhEfBzjJMDnlxiM5ys6d9tKReq1CbNkGtuHJDax&X-Amz-Signature=268b234afc9401b55da9b4cfcbde41fd81cbfab040c4ecabee4f016e52b5d4a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
