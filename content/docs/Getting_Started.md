---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXNMTDG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCFhz44caQghJDs%2FXvyhF9YFE8WViNvfi4axjbxutppKwIgfFnBddgnrE8Az2S9tFeI3lMmS%2BHxazCagJkXnqdV%2BnYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3tBSYJHLlUV7B1DyrcA2dAuacYpRSWltK79K4ND54W7BXP0Vj0EcyrkR2MhrLWJq01YUSPDikLhvF9RSG8Uyzb%2FrR0yYX1XuoBq9S6ATXLUuOA960u6rQZyki0Jyp42ViOYszSpUeTe5130Bu%2F1q6%2F4YutYS557VTHRq%2FcspsOhenmL205cBrFv76SW2uHefcFoRKvP8LNFBh9uZydLyb5JQ1MqU4WyuJT1b2hYb2pWtWuvULOjfDBrtN3%2BJYMwMk%2FMAxMqdZ19ZHvJ%2FKSTO6gFwkWs76jpWL6FLd31fMnwmX%2BRNAAgW4Qcs923Qpyq2xrldh7TbRinC7vkqs4keSE0qR58Lbo%2FqelHJKjPOHvp7uT3qYLQ0faszZZTqWs7EZxkNBlgMC2QKSgzpVJ639HuV0e1nV%2F5J5PaD5d2qLs5nPBR1BbyBhPmfk0%2FHfTz5rw8nUAVw40YWIXVDNeeenO5llLTKTow6CjpNIYG61rP1m%2FL%2FCMCs2UUxMuUWUGjPzsGabAIJfmkFVVjMp9CZQLQGLniFIFQaHBu4fDZX%2FrDESHa%2FutEHrvKJk060XbkOfeV38gIyewu%2FafObNrKQ4harTxui2WlQTWDKemJvFKyTRY2qXWQipbRN81%2BiigGcifb2KWaQ9gAT88MM3b3b8GOqUBnAaDNxWnvPj%2B5UGYURk%2BiAz%2Bggdvmv5TNxjjN2TKHAye%2FuwIaUO82KCuruRcYI7W0%2Fu60JVN7Vw87B4vqha1o3BfmhrYc1RyoHAfLAISUcvUi44uWo7lzD8hEMEnZvOwigjNIA8WNIX1FAIiBEHcyVE8J4F4sQILmBFxbU%2FjMT8t7K2b0Ow%2FHcF1pMVXZlXqsfJD1Uci%2B0clsI2libuj2xL2GqXf&X-Amz-Signature=08f250586e6c286a96d65834b21d987fef06b7d4d1727899d90d1b9704af8cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXNMTDG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCFhz44caQghJDs%2FXvyhF9YFE8WViNvfi4axjbxutppKwIgfFnBddgnrE8Az2S9tFeI3lMmS%2BHxazCagJkXnqdV%2BnYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3tBSYJHLlUV7B1DyrcA2dAuacYpRSWltK79K4ND54W7BXP0Vj0EcyrkR2MhrLWJq01YUSPDikLhvF9RSG8Uyzb%2FrR0yYX1XuoBq9S6ATXLUuOA960u6rQZyki0Jyp42ViOYszSpUeTe5130Bu%2F1q6%2F4YutYS557VTHRq%2FcspsOhenmL205cBrFv76SW2uHefcFoRKvP8LNFBh9uZydLyb5JQ1MqU4WyuJT1b2hYb2pWtWuvULOjfDBrtN3%2BJYMwMk%2FMAxMqdZ19ZHvJ%2FKSTO6gFwkWs76jpWL6FLd31fMnwmX%2BRNAAgW4Qcs923Qpyq2xrldh7TbRinC7vkqs4keSE0qR58Lbo%2FqelHJKjPOHvp7uT3qYLQ0faszZZTqWs7EZxkNBlgMC2QKSgzpVJ639HuV0e1nV%2F5J5PaD5d2qLs5nPBR1BbyBhPmfk0%2FHfTz5rw8nUAVw40YWIXVDNeeenO5llLTKTow6CjpNIYG61rP1m%2FL%2FCMCs2UUxMuUWUGjPzsGabAIJfmkFVVjMp9CZQLQGLniFIFQaHBu4fDZX%2FrDESHa%2FutEHrvKJk060XbkOfeV38gIyewu%2FafObNrKQ4harTxui2WlQTWDKemJvFKyTRY2qXWQipbRN81%2BiigGcifb2KWaQ9gAT88MM3b3b8GOqUBnAaDNxWnvPj%2B5UGYURk%2BiAz%2Bggdvmv5TNxjjN2TKHAye%2FuwIaUO82KCuruRcYI7W0%2Fu60JVN7Vw87B4vqha1o3BfmhrYc1RyoHAfLAISUcvUi44uWo7lzD8hEMEnZvOwigjNIA8WNIX1FAIiBEHcyVE8J4F4sQILmBFxbU%2FjMT8t7K2b0Ow%2FHcF1pMVXZlXqsfJD1Uci%2B0clsI2libuj2xL2GqXf&X-Amz-Signature=2767a40eb89d0413f39e634da40ee8875f9a6a8d64cd15f602ad74e4958e6b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YAF6HTQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCICkf%2BjnotkVHDyEBOpcFA5JGzbX9Hu70tBSWcPJST2ZoAiEAqMY%2F0p4i8HbTdaZEuHa4IxuOhHLX8h8eZLvEQ4PkffAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHW6gKsWqS%2BQ7srOUCrcA%2FrxlzJK2K3gvUr2Cr39RLh%2ByevjQCRaS%2BNytkhuDyTVyOuHE%2FqMNhN74Nrte2cVXZhvchDJdQFxWYGKocsMTkALK4%2BFNV4bdSgq6%2FENl3G6XP%2F%2BzyytJygm%2Fqv252SYLIKlDCX0tf5S0FPCKxUrXCdDK%2F3vKxa5peXNePERSWofmIQuO%2FLhOKjxkrbQwj3bSsAL73CUETq%2BDt1%2FnFdrTW3I1PA2%2FRx4jxs%2FkSakNng1P69DbFbnPqP5Wg4IjN%2BBKr2PjkDuRkEwR4Fc6MSFjMHWxxrAh%2BG0KAyJgbCFyv36W76lIElXDdHlfNPmZvou0x1f1WzJZDvuOHILH8NQwhlk5FYbFCNk6ksrm8S09rPbj6FmyJgVSAWEPqCoCEDL7BDz2CMaLzq2uGqST5wqlTSf5zlB0FEjhMyPLhSWQ9Cckib1MS9To9yKXG9661gHnOi04a65LqCBSGM6WbqPniarVzXIS38eTl1s7Rz60UE6Xde2aIpJbEed%2FApI2NDj6iLWfbQXfk0di5XAvTUQ94KFGCWRGoKDk2%2FwJsrrQN41IIph6Yz1rXEaHhUEztrBxMDsJKs5O7Jk7cv1wjRoHE6w33Tl08pu2Jr0FkhdoEIrtykpT4MUqrPE8IwvMNDa3b8GOqUB4KzBKN9bd4S0Vbwf3wQWXNlxsP8CuiKW8JJFeQnq1SMNxhIjBwUI16v%2BqJUbrfCPvYyHgEjpRC2FKtF7BSh%2BfgqakZSg6tzBHeHLllEVRtJJWhsDPqqYti3bUom5FoPhJcfXrKhyP9VgRF9hcySd5FN%2BY6oVIBzGF%2BkBLfCFYUOzUn4%2BqME3W78VK7bQ%2FpLSju9A%2Bc%2FTjjTJkAbBTTdKG2lhPQiC&X-Amz-Signature=eb8ed4147520c7eda10e89f1c167ccb0b531ebdc4b121cf7ad9a4c6d278cddeb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T5HTCOB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCwLRNXw0FjbT%2BpV77Aopbie4HHRbGz%2Fxv6B8%2BO7C93ygIgbDgwcSg%2BeavzrDLaPv5wqd7uAKFnsnL9Bi1yQFIkKVwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxAC3c06N2vd6u0mSrcAyNhVbUBKGMiTWgH21P9%2F0A7y3uv%2Fxg%2FmgNRCNAGQrCaxTebYBMxmAaCZdwkTo2%2BdnUBw0HsZfH2OrJgV8Q6TlxDwtm2CnmxVuLCqqBCcIXvbsEuKOJxxKveYIclGzh%2FDDJeUmn9U6y0QRdqTuMKEQUxmxmnytqtZrQAYTzgALId%2FEGx0%2Bpgd%2B9bevbZWZciBZuPdLt20xyq9hDfbZ9EYdEFo7RCZQHa4ghuhwikhAh3YCil%2F0MzKFdCT4mhGN4DRNJCBfBvX9I6PtSfspfQDukKq3PJAeO6lbGcM9TVzY6J2sv%2BoVrCrPCet3w9D87gIriQIgn6k7crw6EuMnlNgJg9E1%2F4jL2qAzyqSpjPgb4tle7bMYIySq0cTAz8OldLJ2ISPnmfRhdfvdOXr3vFWyMT7fhjE6CH9qvOCgVRDbAn%2BsO5kHajdoGrazLXr59LJ70lVAy1mF4suLnYo78yGaPv%2FynSdb%2BzTwsLCD%2B3pHgpfIoTwNjJ9pgHUd0MmzQmBLZoO2uEoRnrqfKgEqVQxFTFIAjV7hka6ef1UeLc9Y77jnT9tBf%2BwvIbyDEETCJDTSJW85abL0XWfbfaz2h%2BYFuZGRFhp%2B1GK0gYTRV9jIw6OBRf7WG4tYVG5PNDMInb3b8GOqUBHTFa2%2F90KnXKeFPtV%2FtIEWGKjMk4RifCiXBpM2XoSLbKqJuk2FvPZjPyhkiY739c1CbD6xrtnCPEGsHyow9SKdemVVJ4IPd6qBX%2FsyeTWVwxHxWaQijLDRWs4NbBH1dDUBNLZeN0%2BzAIUEHJyXvWZpCsiZT7iFBl1ITmzG2KYdrKX5M%2B7O7kDcx2OL%2FKzWfC8fO8AI2OlfR4LbHoZDA5pjMU9sse&X-Amz-Signature=e77793786272ef8d575429d526ac2ce170a11e501b54ed658d7c974557b81cea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXNMTDG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCFhz44caQghJDs%2FXvyhF9YFE8WViNvfi4axjbxutppKwIgfFnBddgnrE8Az2S9tFeI3lMmS%2BHxazCagJkXnqdV%2BnYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3tBSYJHLlUV7B1DyrcA2dAuacYpRSWltK79K4ND54W7BXP0Vj0EcyrkR2MhrLWJq01YUSPDikLhvF9RSG8Uyzb%2FrR0yYX1XuoBq9S6ATXLUuOA960u6rQZyki0Jyp42ViOYszSpUeTe5130Bu%2F1q6%2F4YutYS557VTHRq%2FcspsOhenmL205cBrFv76SW2uHefcFoRKvP8LNFBh9uZydLyb5JQ1MqU4WyuJT1b2hYb2pWtWuvULOjfDBrtN3%2BJYMwMk%2FMAxMqdZ19ZHvJ%2FKSTO6gFwkWs76jpWL6FLd31fMnwmX%2BRNAAgW4Qcs923Qpyq2xrldh7TbRinC7vkqs4keSE0qR58Lbo%2FqelHJKjPOHvp7uT3qYLQ0faszZZTqWs7EZxkNBlgMC2QKSgzpVJ639HuV0e1nV%2F5J5PaD5d2qLs5nPBR1BbyBhPmfk0%2FHfTz5rw8nUAVw40YWIXVDNeeenO5llLTKTow6CjpNIYG61rP1m%2FL%2FCMCs2UUxMuUWUGjPzsGabAIJfmkFVVjMp9CZQLQGLniFIFQaHBu4fDZX%2FrDESHa%2FutEHrvKJk060XbkOfeV38gIyewu%2FafObNrKQ4harTxui2WlQTWDKemJvFKyTRY2qXWQipbRN81%2BiigGcifb2KWaQ9gAT88MM3b3b8GOqUBnAaDNxWnvPj%2B5UGYURk%2BiAz%2Bggdvmv5TNxjjN2TKHAye%2FuwIaUO82KCuruRcYI7W0%2Fu60JVN7Vw87B4vqha1o3BfmhrYc1RyoHAfLAISUcvUi44uWo7lzD8hEMEnZvOwigjNIA8WNIX1FAIiBEHcyVE8J4F4sQILmBFxbU%2FjMT8t7K2b0Ow%2FHcF1pMVXZlXqsfJD1Uci%2B0clsI2libuj2xL2GqXf&X-Amz-Signature=6af8b891270747b682c0369bcd7107f742d7d266ad1e4d22794a95a8d5e124bc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
