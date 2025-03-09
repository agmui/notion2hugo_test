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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645D7YSDY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDmRWuRCuGh3d08O10nR%2Bg%2F14PwXbrc6dQpEiPGbCiCDgIgZxyETvrpO2ptP4ovo13x0OAL9LCi9Az3I3gJqEVfBCEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLxIBEtCuXl2qdF4%2BSrcA%2BJXivRAqlz8XFSsiPkrE62cUixKEXGHTftaNNSXa4zXEKq3ze%2BdxMB4s2t1XoVySBSVD9Sc3Cng9uzNdL9BdJ4GM905JMlMiaospShhQTbfH4dRIhX7hpc3S2eEAp0i9rbZHmJiRb6t00jVJP7PHpPd409AgqnmMtFmT0kkvoYP%2FF4WqRarJSi6XMt4%2B131PA8OpI8yzc7%2BtrkM5IFHvJ8mVeCDY8r9RHnPe8IeWFaRM%2BCuTpUkxYDdDrZoEBgbvqdNmUJX3cCnt1wCI4CzJijy3kV4ZrWDDyUOteMFHfDcJcQZLWHoaBfjBwKXl7qQS9l6bw5pl%2BcY%2BNuxctAOps78F3OJb3XrahscoyLMnf8%2FOxXQgbjrpCJu3pGReXecGHBOtgwxNC0f5Q9kWx%2Fk%2FIemylF58CaBiwVdCjft8%2FemVb15soouh6%2BdLHcFTqesLpvhwjuu6g2Y6e6KY9tEkVJ3esCD1b4igPnKVjY%2BniJQ4HcvJpbvzJ3q9ydYB%2F8K%2BXF1H9d4mf2%2BrSb%2BIyuEIbN%2FYCJnMTYrSP%2B1SnrvNPvJ6WzWXM90yrKNfkNpXrf4K59ZunLwMkmLAUHjadbYcTpJRQfEi4%2BFPci2%2BbK%2BP3nK5Pfjcfn4terDH6sSMIyLtL4GOqUBAm3GSxQPP6RPCSnvFbxMNiipOPjuDV8GuK1HGlrbR87IjI%2F4y5Yu9gVNvRwASh8M0OFaluJ0pVhdb0GtTCEshEyqKyHHmVvFRec%2FBu9f0ykAbowfhYJrfzdwdoWQiwQRFvs0NJf8Ffd%2B3Mhpc0HcfmtbFGckXeenAW6VCIOnRt%2BYsKXN9PTwPWxkF0jahVIRvzNkrM%2FIXfp%2BHF3PIsJRjToqEYhn&X-Amz-Signature=5efb0664274965914d068ca86e3d007ee096479797082f7b52c9c23958412e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645D7YSDY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDmRWuRCuGh3d08O10nR%2Bg%2F14PwXbrc6dQpEiPGbCiCDgIgZxyETvrpO2ptP4ovo13x0OAL9LCi9Az3I3gJqEVfBCEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLxIBEtCuXl2qdF4%2BSrcA%2BJXivRAqlz8XFSsiPkrE62cUixKEXGHTftaNNSXa4zXEKq3ze%2BdxMB4s2t1XoVySBSVD9Sc3Cng9uzNdL9BdJ4GM905JMlMiaospShhQTbfH4dRIhX7hpc3S2eEAp0i9rbZHmJiRb6t00jVJP7PHpPd409AgqnmMtFmT0kkvoYP%2FF4WqRarJSi6XMt4%2B131PA8OpI8yzc7%2BtrkM5IFHvJ8mVeCDY8r9RHnPe8IeWFaRM%2BCuTpUkxYDdDrZoEBgbvqdNmUJX3cCnt1wCI4CzJijy3kV4ZrWDDyUOteMFHfDcJcQZLWHoaBfjBwKXl7qQS9l6bw5pl%2BcY%2BNuxctAOps78F3OJb3XrahscoyLMnf8%2FOxXQgbjrpCJu3pGReXecGHBOtgwxNC0f5Q9kWx%2Fk%2FIemylF58CaBiwVdCjft8%2FemVb15soouh6%2BdLHcFTqesLpvhwjuu6g2Y6e6KY9tEkVJ3esCD1b4igPnKVjY%2BniJQ4HcvJpbvzJ3q9ydYB%2F8K%2BXF1H9d4mf2%2BrSb%2BIyuEIbN%2FYCJnMTYrSP%2B1SnrvNPvJ6WzWXM90yrKNfkNpXrf4K59ZunLwMkmLAUHjadbYcTpJRQfEi4%2BFPci2%2BbK%2BP3nK5Pfjcfn4terDH6sSMIyLtL4GOqUBAm3GSxQPP6RPCSnvFbxMNiipOPjuDV8GuK1HGlrbR87IjI%2F4y5Yu9gVNvRwASh8M0OFaluJ0pVhdb0GtTCEshEyqKyHHmVvFRec%2FBu9f0ykAbowfhYJrfzdwdoWQiwQRFvs0NJf8Ffd%2B3Mhpc0HcfmtbFGckXeenAW6VCIOnRt%2BYsKXN9PTwPWxkF0jahVIRvzNkrM%2FIXfp%2BHF3PIsJRjToqEYhn&X-Amz-Signature=bb994473c6621363206b235eb50ede276f59edba17dd432f91d0e322ecbed041&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3CS5RMO%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIDAG%2BbDmDoc6rtIWryJ6zWTU6mhbMDN%2Bn160ezAMvb5yAiEA1Ssea1vOhIHC0ivjdmKcRNKd0o5UIxanuHlcL%2FlLvCEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHJRex%2FMU24MbzL5pircA%2Be2XEYJMGthRLfUxGK9R%2F%2Fq%2BUzeV7jHNp8mki1hOHoKN6KrNtroXp4WzUaUs14lzGFRVhF8i5tpFw14xADzyVkMVLcF3PSQcFKNUUfxlr9FCc02cWmD%2Fg5QKis8rj98V%2FRmqqksi%2FcpO98BVa4wQ1HWUtYnLWFZ2E5i2uuN0c0zuNyjbGKeEbIoGxJJ4yCMSElAUwvBMrDV%2FLayVExa6cmfZgNYwhdBDhfTGnZ6WXwbSLsCMpvt7J7%2BQb5zVEBuspnJpAklbWO02vwa%2FkDP25STX%2BrIY8S9GBqGxpmZiL4M%2FUVnWwCc3UUXil1R9QsAdiYAgIyCTFLoupSQWFg7pyJXq0tD6X%2BdyMW6H2CyuyXiHgSa0jEGeVwCUedtt88J7mxdxPeJYucYdp%2BYQGcGYkvmAqCZTcf%2FKl5HXjtLl4KWIlTCoSXiiMiLNHHNtFmNBXUcEpZyE%2BzdQwcittsckjWCUzZX1bCOIDeYOCN28eW1ZN1CMqBKkDJZDGhXqTDavL3iGOPWfABSs%2FzZMiBqtC57xz%2FXs6XTIAJ%2Budf2I67e5FaoNbSC9hgTurbTVi%2FTSa9We4e1K5OOshGHSzlO3uRspsidIhKv8S4Wsf52PPYGOlzVJtX5rTpQszApML2KtL4GOqUBv7v1QCsd09pd7JkeDheARbVMP3Z5FVuqeHEbnHKkv2FiZPm5jG1zug%2FxO5DLswf0ojTd9W72oOn3L7Q4gat5v9rGER0pB5ZsUG1GfOLE%2Bji83xjNXz%2Fc377NA6AN%2FE49mBChEDabsWAIf3%2Fo5EKElj5pduyxiSDVAmtcXYRcX2Q%2FNtjW2L54ApRqZLhar8Yv6BUmPiDkjrRt1EUOuOikYa489owp&X-Amz-Signature=8968b89e933b50b15933b8d0138cd6b7a3803e1a9d3ccca3a2246b1033c6bca1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643R2JNYC%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDiB5cBtWQ009GbSD7BK77Ri3aqFaaRS0nlJsp3ua0VYAiBdxUsuByFoDPyHUjf11W%2FwcKLBfkVXLfycy9yo%2BJEU3yr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM2tWvCFPuwN%2B%2BcS%2FAKtwDPuD7qltxX8%2Bx8gZNelvTH7qyXOo6O2fhuK%2FkfsoXWKh%2BSW%2B434KMr7t30F1tdaKvV1yZY1RBAhOD9pxJkm%2Fs7s2u9KcLI0ztuLPZiAqAjHGc2W8oUHxXlO6O5Cj3oYJEk7F%2F2K26%2B6d4%2FcbatOflyWjKRqQuDaAE6firCadHcd8BITmygyMUPYj3n%2BsiHck6s29VePiJeT2jNw54mWfRiGsZ8wKQUx14pmlbLcs4QYb0N2wnbefR3%2BDyqkAILF%2BguWmFP4QcNOPzwEAc%2FGcLJRGayK1CQxuf2IT4J9ftWeixkQX%2B2XA9lvpxr3KSTN%2BMqCHqQS7XfAWHSIKNED3PlpCO5zU6Z%2F3SFnlX%2BUD2Orxs9ht5fkmCYTHSHw7zuvtYhnNXTqEBRn63sevo6pBLhDjBEadwc6CPQU3RICpdofvq6wZnWOyitBZg2EAs3GZtlgnoDEP1EbH0V1s%2BMPJaJlNv%2BKl5qMmUJ1FhThWIdyrb1xBsa8hvRWaEiT9CYjkOk36rJA3aiyfy4iYm9RZt5kPwvvT%2FSX%2Bogi2d1FhVessyPSv8bZ9FPQqvB2K%2BkSuw9hXak8DfynbQSFkJQe1RD%2BK4onj%2FJSMJmwIfeHWvxKbBhDVeskL%2BNrEAmOswtIq0vgY6pgGNCm1n8Ak%2BzXW%2FI3cGKK130VeZCM6YC%2Ffrx640FF%2F46vNSoP0EjX38PGsEVt0zKr8BcSBfSoMbj7ZTQOQWavVuR%2B1GkIVZAubckhXRLsjnBXCKRbPybZC3ixTPKlcCxFcJxYGw7xndzSosIKDN4Nk1kkA33ZeXU5mflvUkap3vfWL0nlJhB5ggC%2FGrsmmbBB2QTAG7I8KGlhiLvtyyGVPojoeVqCn2&X-Amz-Signature=9216f5d9402f53a25daecd4954251f631011af040d3225bf631cef46d43fdb33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645D7YSDY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T040744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDmRWuRCuGh3d08O10nR%2Bg%2F14PwXbrc6dQpEiPGbCiCDgIgZxyETvrpO2ptP4ovo13x0OAL9LCi9Az3I3gJqEVfBCEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLxIBEtCuXl2qdF4%2BSrcA%2BJXivRAqlz8XFSsiPkrE62cUixKEXGHTftaNNSXa4zXEKq3ze%2BdxMB4s2t1XoVySBSVD9Sc3Cng9uzNdL9BdJ4GM905JMlMiaospShhQTbfH4dRIhX7hpc3S2eEAp0i9rbZHmJiRb6t00jVJP7PHpPd409AgqnmMtFmT0kkvoYP%2FF4WqRarJSi6XMt4%2B131PA8OpI8yzc7%2BtrkM5IFHvJ8mVeCDY8r9RHnPe8IeWFaRM%2BCuTpUkxYDdDrZoEBgbvqdNmUJX3cCnt1wCI4CzJijy3kV4ZrWDDyUOteMFHfDcJcQZLWHoaBfjBwKXl7qQS9l6bw5pl%2BcY%2BNuxctAOps78F3OJb3XrahscoyLMnf8%2FOxXQgbjrpCJu3pGReXecGHBOtgwxNC0f5Q9kWx%2Fk%2FIemylF58CaBiwVdCjft8%2FemVb15soouh6%2BdLHcFTqesLpvhwjuu6g2Y6e6KY9tEkVJ3esCD1b4igPnKVjY%2BniJQ4HcvJpbvzJ3q9ydYB%2F8K%2BXF1H9d4mf2%2BrSb%2BIyuEIbN%2FYCJnMTYrSP%2B1SnrvNPvJ6WzWXM90yrKNfkNpXrf4K59ZunLwMkmLAUHjadbYcTpJRQfEi4%2BFPci2%2BbK%2BP3nK5Pfjcfn4terDH6sSMIyLtL4GOqUBAm3GSxQPP6RPCSnvFbxMNiipOPjuDV8GuK1HGlrbR87IjI%2F4y5Yu9gVNvRwASh8M0OFaluJ0pVhdb0GtTCEshEyqKyHHmVvFRec%2FBu9f0ykAbowfhYJrfzdwdoWQiwQRFvs0NJf8Ffd%2B3Mhpc0HcfmtbFGckXeenAW6VCIOnRt%2BYsKXN9PTwPWxkF0jahVIRvzNkrM%2FIXfp%2BHF3PIsJRjToqEYhn&X-Amz-Signature=c79376e6f0707ecaeb5a8a442d408ef9a888d718c4c7e17e1085cbd3430cd85a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
