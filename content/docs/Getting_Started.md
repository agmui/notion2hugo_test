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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZTBXHI%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVPaJqVR9%2Fj6RaOAUTOfc1SeMsKDptt%2BKvX03xyUHCigIhALMTWZqdzVEsjIhWMTh1HWok1scYdsUA3EKIOQSpwwr9Kv8DCB4QABoMNjM3NDIzMTgzODA1IgxHK7yJtI0mooWqd4cq3AOUjxUG%2FoJJfEgz9sV2jJeG4nbxPdSnWotMDJduIjUVaE3ZX4%2FqGSdZncl35Nwm7v8ANcoLkio862pXQ8CPINhi4FJKKaTTCk%2FPmny8T8NMlQaSxRxsDmk8GaOq1VDw9ITDWcOadv%2BskC8SZLK5HhS88DFf1z9xZl9v2dNl7R2LX5jOYkx5fERMtb67nbLOfKrBxK13sDKy8dZjhSttTBHVzt%2BXBdPboLYiTtcNJnjJaLd8GJGmpwzcx4tRMpB3Xef5iOgqajSdU28SDKcyll9xjMAllkg3GpKqyGo6N8cg86wLLUiQwBqVU%2FwmkbhGzZuNRh9CdSEFi9fwNXPKqj0oOu7TOGyF3SWodcUbCKiglCvH4%2FeCGETHNL9fpUvYacMvZGGlm6esdxifAbfeng%2FJf%2BTykqxUflbkK8iJQyWNzb%2Bd%2FssTS0ns7P6eFO4gX2szauCOvMtkrk5Sfo%2Fe7tK6jRr73fFJl4%2BrEGVQwoE6XyubpjrAS8W%2FL9%2Bs%2FChlDTC48dy7DvswcBO%2FRK18TZ2eEmFMlS%2BRLxp9FcCDMGWXnrdXqYjAJ6sQAXPztNjeNWXeK0ngqKM8eghgOW4pUYcctNRsbCrD%2BwqKv1HDGJbOgUF3oyFiMJYdD%2FpnCzDkw9e%2BBjqkAbQBNNec7flCmcSMRqMnjCf76QU9s%2BW0u44hURpftLRFTm3PAqy5klXaGJFD9qQ6524jjy2F6rKc7quEgQ%2BV7TC0IA6ZN0G%2F0%2FcFewncZhGwJKp3ebWOnXs%2BeU7p43gSwZjcp%2BE5T1Fln9blFQY0zYoATcb%2BGfN9IRE%2FWnGEu%2BQWLM9WOrtDXsHzRFkIY%2FoaWuUKNjj8JsWmU3KPeiu3U5Utrl82&X-Amz-Signature=467b9b557553d3a381e81333fedeb5b81666fcbf9c30d1658ea24ae3409e5867&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZTBXHI%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVPaJqVR9%2Fj6RaOAUTOfc1SeMsKDptt%2BKvX03xyUHCigIhALMTWZqdzVEsjIhWMTh1HWok1scYdsUA3EKIOQSpwwr9Kv8DCB4QABoMNjM3NDIzMTgzODA1IgxHK7yJtI0mooWqd4cq3AOUjxUG%2FoJJfEgz9sV2jJeG4nbxPdSnWotMDJduIjUVaE3ZX4%2FqGSdZncl35Nwm7v8ANcoLkio862pXQ8CPINhi4FJKKaTTCk%2FPmny8T8NMlQaSxRxsDmk8GaOq1VDw9ITDWcOadv%2BskC8SZLK5HhS88DFf1z9xZl9v2dNl7R2LX5jOYkx5fERMtb67nbLOfKrBxK13sDKy8dZjhSttTBHVzt%2BXBdPboLYiTtcNJnjJaLd8GJGmpwzcx4tRMpB3Xef5iOgqajSdU28SDKcyll9xjMAllkg3GpKqyGo6N8cg86wLLUiQwBqVU%2FwmkbhGzZuNRh9CdSEFi9fwNXPKqj0oOu7TOGyF3SWodcUbCKiglCvH4%2FeCGETHNL9fpUvYacMvZGGlm6esdxifAbfeng%2FJf%2BTykqxUflbkK8iJQyWNzb%2Bd%2FssTS0ns7P6eFO4gX2szauCOvMtkrk5Sfo%2Fe7tK6jRr73fFJl4%2BrEGVQwoE6XyubpjrAS8W%2FL9%2Bs%2FChlDTC48dy7DvswcBO%2FRK18TZ2eEmFMlS%2BRLxp9FcCDMGWXnrdXqYjAJ6sQAXPztNjeNWXeK0ngqKM8eghgOW4pUYcctNRsbCrD%2BwqKv1HDGJbOgUF3oyFiMJYdD%2FpnCzDkw9e%2BBjqkAbQBNNec7flCmcSMRqMnjCf76QU9s%2BW0u44hURpftLRFTm3PAqy5klXaGJFD9qQ6524jjy2F6rKc7quEgQ%2BV7TC0IA6ZN0G%2F0%2FcFewncZhGwJKp3ebWOnXs%2BeU7p43gSwZjcp%2BE5T1Fln9blFQY0zYoATcb%2BGfN9IRE%2FWnGEu%2BQWLM9WOrtDXsHzRFkIY%2FoaWuUKNjj8JsWmU3KPeiu3U5Utrl82&X-Amz-Signature=6d0e886ef446e1dd25d006e57b1df136ca0f2ab2760f4049bda5a584b9effc2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7MAQPG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxv9KSNYfQmKGd%2Fr0bzEPar9On4%2FqdpTMqLEy320NagAiBnWoPOrWUVqfnHKdaRU2drYJBgX7Hn7%2FjHCbL%2BO6ly6Cr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdQDKXKajIn8YLs1BKtwDU8Os3GtvGgANt1NW%2Brc94w6gU1383vz8Ybw1RleKSJkw%2B6j%2F4Rg3jxIsnuYW4TgTqqDQ0i9XkaHtyL5kx%2BMB2fDs0I33QJDW6vvE1zzPL%2FmmY9vOo1TcXccMc900VubpnGa41wMrnqMcPTltE0E9T816oD9XD5uHmagVH0Z8z7Hg1%2FZbv3EeqEb%2F%2FtxwmdfXJt1q%2FtRSQ7IzD5DjZO4NNzGkFbGzRbwlgk51PQWmzFFc5CbKklDTjLGos5jxSCswN2ZRzW1VdAQwrZTc5Fmq3MtJEVWPoKsa59kNx45aO8cxwu265lIIBf%2FzkRYwa5v5pPmKCZCCd0GXT5MCbC7FjXsqU47luHG%2Bffz%2F0mANHKgCXDp8Kkc%2BPc4tM10NnW6mva6emRmz26QuPf2gRppLfuoSCPRsOnU3VMT%2BYB%2BWsUBRRmtk57oeZkVmeMVHtxcoG%2BR0X%2B4FS8liGIkN%2FqBcad3sz%2FDWH09cww4JrrKaU3ujbEP6WEqWMlmMJSU4xwinLUmG8rclQQ%2BRU5eI3HJzEggFeIS4SW%2F%2Bd2qsietkHHxXpDZtof4ciSF%2BiaHOwCHJwvzJ4BrmLQvAVrlBjClY5gmZOHL8yPXo2wzbZ3gZnlPo36PhMLkLe7iHuN8wzMPXvgY6pgEwr1PwxNfuoATC8KPsbhGLcSWT2Vnbw3z6Q1Jyh5Hbc54cz9Et9%2FQ8rRBhKk6BdSOy90m1ggwNYkUO9SxevuOUs9E3H6SuTxSzi9RkF3ghC9WoUWqhQJorLaAeHqvCvRR3wsbN83EJQbcps2dhakz9YfR9FCSeHt%2BRg36%2B%2BdMWKYfO%2BGvgbFaJ8dQNjI1702b%2FmrM38KYdb7g7bOzROfRfisrq%2FT6m&X-Amz-Signature=07f8cb3ff3b257907811e61c77d0afc2a8832d0816472594878fffe44fc5948f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW5UAIP5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FgUFq2y3%2FDOiAVhEk34viXdZeSAGAiZPQOxAl7u8KRQIhAOL0vhf2NTDkDxtdOkdjDLljIYHU4jGvapN9e7Pv14mDKv8DCB4QABoMNjM3NDIzMTgzODA1Igz6dCvJgh5Lmj3q92Mq3ANLFf2ZRkBP0nveCRttfuSGWMrbEjoIGC9%2BlJBzLER15LhspPjK3ELNWZvSiJoDdHkiFEHVkP9LSFyj19Xe7O3wq8jdBKGti5Q20%2Fz4aA3Jf9AMDvqEHTvHpuRm%2FK7Bgdfid5yzFds9jOaRdQC3qQQesxa38JLMK491kNuPkt0hGqzZ2whAXQvI4u2I8dljILTKGm7BMEYYzPtWCdhiJF3tRdtaOHgzZWe85sPdyy%2FHlvfxvoHOkGitfqemAN%2BmsSObNb1H6Jf8BaLm%2BFEsRpSqTTCdhBSn3BwSoIdKLnPSOMCuIEETe55%2Fs9aFx2Y5pEhHz0%2BoqFg57VB%2BYef%2FbPRT%2BzX%2FYjFQobhZCR%2BSOwc9GwcYxWvUeo0HVQGXNHSaa6iCJfE4jwrDOiNv6OYuihv2GXA6V01yWU6%2F4eYjXBNTcrWqQ3d4ZerGahiJMrbAY7K%2FWdTpoXKsNdxHj9fhDM00mziQpw8lY21DpyqBZTSLtF5Ub2cAaA%2FO1ZkQ8iZic7eA%2F775qWGWT8V7usJEouWT9m8fI1LQsQujZQEIgEKvJQzdnn3FouobN7OwD1%2BMz9Ym67KThcHUZ3nBTU3hbWqxxWypeICzLz0gDicK4yJF5HmxdWlBkxh74XkJ4DDYw9e%2BBjqkAQEendW3bWohg%2FTlTd6M6lwzOV4rA%2F8JId1t%2FMJ4iYg4fOoGmFUgiVqVU3SOmxPDxxu0dhJ%2Fcui6cy%2FDKOEW3Phz2SNpPgVE8HGNROck%2FlbjCt8u%2BR27u6tFOU%2BTYv6BzgcvFjWtGeTAvQzO2GuZshcUGYlB4on9SlHN0dcPn6urh99tbDOQ4yqEXJ%2FH9h7prHCcGSTr%2FZNrFq0cI765Gmgqpw8W&X-Amz-Signature=83e5e8f567e04dffa246f8910f8ad96a7b782aa5a1fe60ff7f9d72200d9447c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ZTBXHI%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVPaJqVR9%2Fj6RaOAUTOfc1SeMsKDptt%2BKvX03xyUHCigIhALMTWZqdzVEsjIhWMTh1HWok1scYdsUA3EKIOQSpwwr9Kv8DCB4QABoMNjM3NDIzMTgzODA1IgxHK7yJtI0mooWqd4cq3AOUjxUG%2FoJJfEgz9sV2jJeG4nbxPdSnWotMDJduIjUVaE3ZX4%2FqGSdZncl35Nwm7v8ANcoLkio862pXQ8CPINhi4FJKKaTTCk%2FPmny8T8NMlQaSxRxsDmk8GaOq1VDw9ITDWcOadv%2BskC8SZLK5HhS88DFf1z9xZl9v2dNl7R2LX5jOYkx5fERMtb67nbLOfKrBxK13sDKy8dZjhSttTBHVzt%2BXBdPboLYiTtcNJnjJaLd8GJGmpwzcx4tRMpB3Xef5iOgqajSdU28SDKcyll9xjMAllkg3GpKqyGo6N8cg86wLLUiQwBqVU%2FwmkbhGzZuNRh9CdSEFi9fwNXPKqj0oOu7TOGyF3SWodcUbCKiglCvH4%2FeCGETHNL9fpUvYacMvZGGlm6esdxifAbfeng%2FJf%2BTykqxUflbkK8iJQyWNzb%2Bd%2FssTS0ns7P6eFO4gX2szauCOvMtkrk5Sfo%2Fe7tK6jRr73fFJl4%2BrEGVQwoE6XyubpjrAS8W%2FL9%2Bs%2FChlDTC48dy7DvswcBO%2FRK18TZ2eEmFMlS%2BRLxp9FcCDMGWXnrdXqYjAJ6sQAXPztNjeNWXeK0ngqKM8eghgOW4pUYcctNRsbCrD%2BwqKv1HDGJbOgUF3oyFiMJYdD%2FpnCzDkw9e%2BBjqkAbQBNNec7flCmcSMRqMnjCf76QU9s%2BW0u44hURpftLRFTm3PAqy5klXaGJFD9qQ6524jjy2F6rKc7quEgQ%2BV7TC0IA6ZN0G%2F0%2FcFewncZhGwJKp3ebWOnXs%2BeU7p43gSwZjcp%2BE5T1Fln9blFQY0zYoATcb%2BGfN9IRE%2FWnGEu%2BQWLM9WOrtDXsHzRFkIY%2FoaWuUKNjj8JsWmU3KPeiu3U5Utrl82&X-Amz-Signature=3122d9996f5d216d51d91b89f0b3205f93ba5ed5de6271ede31c4f3fe4768062&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
