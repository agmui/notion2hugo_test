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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYSVVEK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEbN%2Fkb47r85yb3oaznV8LcL2Ld6DAuW52I543qugbOpAiBUWf6N5kT09wTRcBae9H2H8MtjgBJABwR4DIc5e0CiJyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZt2o96472EtHuT%2B6KtwDg2ugAKR3%2BPTr7no9uyK%2Bvq9Z7Tl9WJ8BCSdd6QGJQC8HhQXpDWhrjJNuc9shvsCkqQ7CbWO6nJnP5KS8UKf5NiUUhaZCmcWmcWlMW5M1O1ZIN6n70g02EROfnvp7QAyUQavIS1ELJFWOyYtaT%2Bc812ZtDc5fnDaVS3bDt8xdlw2nie2osoqTkrU0WI0TKgQGuczbtp%2BI4I5BtN%2Fav%2FUyYelWCvP9YhS2uC2ffyxNBeTtt8NDgM5SSwp07C%2BnIU65Dmh3lAnhjoYxxbOoU9ih6Kpl7WvR3HqSlqMLO%2FrNqYLWYIwbUI81fDNSkvgMcSQeMz5JkfSRpGhsRzkIYEPAYb0wKcfTv7h0Sar2azUOlMvfG1Ma%2B0jQOEqs7lSKaH3k%2BfM6QC7XRvoJZ3shKCUqYKYObr7VeIqeLHqDsyn3ZYXMTxsQwLb%2FTLVxjBEKSLnSbLFa0EwmdLfnNsw2ZtDCUVjjd4pzwHxXq8khYrgPCPVVLp32zSdFh07eAF03lB%2FC3D19rc6LNR0VO4TPyGnHsA%2BfHgM4shAsgqpToB1d%2BkiUbZ%2BS8C9CF4sSLVWPhcrhWtfxKddp4jNKo4ueEYVDHxRblMyO60PbSQna0uzfGflQX9WFtyNQctMBWGowrOWmwAY6pgEaLlzV3YTIIhGSqQnf8nS2DgH%2BFb6%2Bka64gvLnO77njLBEL52jf4pGD%2BXtjp19YU%2Fbn1voxzrkp%2FBOHb%2FWUe96awnNp35eSnEv9Hj9192%2BfuP%2Bnq3LjZE0JAyHeAc3dsJKe4BWdaVM7Ku8KhSOHtaYsIe7YPl3ly949cyfuW6V9tUZRrXvSVMAs1tUb0%2BhjrDKj9SSz38UHsAIw%2BNrxHtnMTiKaths&X-Amz-Signature=6872eaf2347ba73dc9e85365a025f96aef7a240472acc68fcceed75a138957b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYSVVEK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEbN%2Fkb47r85yb3oaznV8LcL2Ld6DAuW52I543qugbOpAiBUWf6N5kT09wTRcBae9H2H8MtjgBJABwR4DIc5e0CiJyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZt2o96472EtHuT%2B6KtwDg2ugAKR3%2BPTr7no9uyK%2Bvq9Z7Tl9WJ8BCSdd6QGJQC8HhQXpDWhrjJNuc9shvsCkqQ7CbWO6nJnP5KS8UKf5NiUUhaZCmcWmcWlMW5M1O1ZIN6n70g02EROfnvp7QAyUQavIS1ELJFWOyYtaT%2Bc812ZtDc5fnDaVS3bDt8xdlw2nie2osoqTkrU0WI0TKgQGuczbtp%2BI4I5BtN%2Fav%2FUyYelWCvP9YhS2uC2ffyxNBeTtt8NDgM5SSwp07C%2BnIU65Dmh3lAnhjoYxxbOoU9ih6Kpl7WvR3HqSlqMLO%2FrNqYLWYIwbUI81fDNSkvgMcSQeMz5JkfSRpGhsRzkIYEPAYb0wKcfTv7h0Sar2azUOlMvfG1Ma%2B0jQOEqs7lSKaH3k%2BfM6QC7XRvoJZ3shKCUqYKYObr7VeIqeLHqDsyn3ZYXMTxsQwLb%2FTLVxjBEKSLnSbLFa0EwmdLfnNsw2ZtDCUVjjd4pzwHxXq8khYrgPCPVVLp32zSdFh07eAF03lB%2FC3D19rc6LNR0VO4TPyGnHsA%2BfHgM4shAsgqpToB1d%2BkiUbZ%2BS8C9CF4sSLVWPhcrhWtfxKddp4jNKo4ueEYVDHxRblMyO60PbSQna0uzfGflQX9WFtyNQctMBWGowrOWmwAY6pgEaLlzV3YTIIhGSqQnf8nS2DgH%2BFb6%2Bka64gvLnO77njLBEL52jf4pGD%2BXtjp19YU%2Fbn1voxzrkp%2FBOHb%2FWUe96awnNp35eSnEv9Hj9192%2BfuP%2Bnq3LjZE0JAyHeAc3dsJKe4BWdaVM7Ku8KhSOHtaYsIe7YPl3ly949cyfuW6V9tUZRrXvSVMAs1tUb0%2BhjrDKj9SSz38UHsAIw%2BNrxHtnMTiKaths&X-Amz-Signature=b6786c3c634b60fa8fd359125c466e29b08825e9b53410d7ed972cc07e399063&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ4NCBJL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDIv9%2Bvg9jGn%2BlOoRSWuk2RoS9l%2BAQ%2FOaVGAXVddUv7bgIgd%2FINR%2BXVcRKX4TjvmO72VoDNpCnMC%2B6ajjTyxVFnC3oqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWHkMHt72MLUFM%2BhyrcAzNw2fJ%2BOOGlPPKqJVRAP0opdfi3Fa7yeL5S3n3tGxy7RvWO0o%2FIb3MIG2nyZOpNzyLG6HnoD7HtPRjBQLb7IbpnMZiauq7vRTLdcNTqw3wx%2FNVtDA1ktS8C5VeB%2FWt84%2Fuk5po9NSfzHmFOrTZvlm48BOKiKyzPTmSg5WlwTEySD%2FBHEXhsJxRMHn4TGQSV315gTw9LK6qBk%2F9xv2pmSDFL9%2Bmv%2FnTXHbeSuS2RAmuwFO0NxBGgrjtgOKF5oT%2F9bvEVdKK6hsDzxbcEr2rwi84Sqzv%2FUVAmxgflkIZggqjdoHiswub%2BRr9hVeDnGLx2F3D1xCa0OUs%2FT6ZSn7vGnvqI2yb7ZMA%2B%2B3AR%2BJLzyTRJ5yKax3j0XXerG1P4eD3oK64d2kqGKEMsPdiuit286j471DbiIYA4Cly2s5AVD1DaRS7HNaxoc5z18pPoVEe9%2BF%2FSuVexd8cxu6KCs%2FTVacYghN2dXUNPB3%2BY4X5B2SCU%2FbHtu8uByCF41gLTmh%2FyTvPB7EwqGty%2BKa4t8R%2BD%2BptVQK8V%2Fu9QVrZTVhgq2WQ76ymq3CGxvfZnBWICkTS%2FoMtXlaxENadHK0FnYXluWCbnEztrf2L9CdEkYrEc1wMVk%2FmFzOsETZZXZmUmMP7lpsAGOqUBc%2BL7rBLVjWcA6Mf6eITGXxJ7Y7MFzccoeuFnPdizEuvpyuCjwtdICTpKJpHIzDjRaTyZQ%2FV54wdxbiHEs58H9o5%2Bv3R8DSwPY6BndSMuCGUkocE1JLOYwTIpBYN6dRr3ropx1zn6zVntdAWks65pxeoH9mzAEWcVy3hcBqS4Ujhg8P2zCA2PpeUqb%2BTSLiu8VCQy5L5CLoHjXD1BrbI49lY7GP7h&X-Amz-Signature=cd0537e93941dde19bb2286024e63c208f7621c4590f00934baef39bc9b7fbb5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JJLE4VQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCID5ukhfjP28ZAzM8UBk7lKrEZ1vr2fnbXi%2BsQNa9LgaqAiBEl%2FL%2FmGLHA%2BzYo2QBLrt21PtFkoeL3m3LbtKT2UM06CqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPqkzTSugmZBVkcHbKtwDVwUS%2BIkBUfufUutFg9KUmMXXbUo3xGtfvMWldmZNhXSQrhlu6qoN%2FFPkh21VU4prAU8DhNBlxF8n42epMFfREMCOSYcfTwsLCDenyP4NVD55xUoOHLuc9MZ9sAcjTmXwMYap0zjM70AszP8Yq4AB2NhWoNOuNsCnUpHiJbZRLnZzv1f3n0W8o7c2KECfvVUPqgsUFOkHj0Vje2q8YiYyWs7AOW3XFWUwyHFCyAYUg5l882PMn2jOFEyJLqf90MdQOtbOZ2c%2FFcuvvjcESiB80i%2F8rnTo%2FrFyz5ZEjoVU9K1u8i9hspjjoJBL6qZ9iRTRlvSTErs6g3%2BWDEvRITbwDm3R9kGoHRY5pPMMnanIfPClY1H994L1tLuxI0kto%2BWTmyB7eIY%2BbbLfs5PKJv%2FCawPZv%2F7rH9UeM%2FSKNwDcet1CWRXFMLTOFzVphWNTlAST6nsMNKkn6PvyEXuCfzmQC2Pl7tkBcYVzbO6Aji4M%2FqZ6WvhoaomRbXpqvNbJ%2FvTXzNvD%2F4hNUL8929kkRpXtKgoEzroXHpOZyBhsba9GPBXq1Jvj4OVUcqHLykvSY7kCG82yakVcJ6Gs0lWrZ6pfwW1U7B28cVlcamtV5EehP3SehXSub997UMrf5sUwnOWmwAY6pgGRdZzvsRO6YmnAF2jNLFb3pwxXXoXemYbh29ME65y8KnZo7PlhipM4c2CpCfEQ4a%2BKTQrXwm5g3uXaWkQGBueRhsIfQo90C5NI%2FYeSURSNxaN%2F1SqZYj68vOa2DICBfDa7z7X%2F00xW6%2FZZWptJ7jqy9YMscaQcnhXPaXvcWXtMJNjImMp8xEH3DNuyNKxNRRUsACavCGR5hrTzdHNyVIxSAGKxJI1F&X-Amz-Signature=2d4858c26de09e8158a430190d21f0fe8184d20e2a03f3882745ebf08fb0b559&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYSVVEK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEbN%2Fkb47r85yb3oaznV8LcL2Ld6DAuW52I543qugbOpAiBUWf6N5kT09wTRcBae9H2H8MtjgBJABwR4DIc5e0CiJyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZt2o96472EtHuT%2B6KtwDg2ugAKR3%2BPTr7no9uyK%2Bvq9Z7Tl9WJ8BCSdd6QGJQC8HhQXpDWhrjJNuc9shvsCkqQ7CbWO6nJnP5KS8UKf5NiUUhaZCmcWmcWlMW5M1O1ZIN6n70g02EROfnvp7QAyUQavIS1ELJFWOyYtaT%2Bc812ZtDc5fnDaVS3bDt8xdlw2nie2osoqTkrU0WI0TKgQGuczbtp%2BI4I5BtN%2Fav%2FUyYelWCvP9YhS2uC2ffyxNBeTtt8NDgM5SSwp07C%2BnIU65Dmh3lAnhjoYxxbOoU9ih6Kpl7WvR3HqSlqMLO%2FrNqYLWYIwbUI81fDNSkvgMcSQeMz5JkfSRpGhsRzkIYEPAYb0wKcfTv7h0Sar2azUOlMvfG1Ma%2B0jQOEqs7lSKaH3k%2BfM6QC7XRvoJZ3shKCUqYKYObr7VeIqeLHqDsyn3ZYXMTxsQwLb%2FTLVxjBEKSLnSbLFa0EwmdLfnNsw2ZtDCUVjjd4pzwHxXq8khYrgPCPVVLp32zSdFh07eAF03lB%2FC3D19rc6LNR0VO4TPyGnHsA%2BfHgM4shAsgqpToB1d%2BkiUbZ%2BS8C9CF4sSLVWPhcrhWtfxKddp4jNKo4ueEYVDHxRblMyO60PbSQna0uzfGflQX9WFtyNQctMBWGowrOWmwAY6pgEaLlzV3YTIIhGSqQnf8nS2DgH%2BFb6%2Bka64gvLnO77njLBEL52jf4pGD%2BXtjp19YU%2Fbn1voxzrkp%2FBOHb%2FWUe96awnNp35eSnEv9Hj9192%2BfuP%2Bnq3LjZE0JAyHeAc3dsJKe4BWdaVM7Ku8KhSOHtaYsIe7YPl3ly949cyfuW6V9tUZRrXvSVMAs1tUb0%2BhjrDKj9SSz38UHsAIw%2BNrxHtnMTiKaths&X-Amz-Signature=80856356c8db49a07de8aff58e4f869d7c1d4afdb2fba1ba1aca688ab61af99c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
