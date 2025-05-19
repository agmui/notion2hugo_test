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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERPI2DF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbdtPYmxxs45x%2BWHgTn1q5IFXyi9mSJjhV2DSTjObyTAIgFe7spAagv%2BL8XfCYCqzLm%2BZT9sFro3nKZjFjBKlPqzcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdSQq6Syzewy%2BdBWircA1SOLmlPityb6zU24mGjg7HtJ2gI1hOvrty626C25xRTGN3UXXU%2BnzfVYPvqAXsqPcXNmMkwWxiqdTwxfTL%2FDL2XnideNII5rVyF%2BheT3W2zwIftRr05Q9FYAOaX0bFzR013HSL%2FuFevkOX1vHlqmqtznARL3m%2FgYmeqS3mnS5GV9apBl2sjnn4J0LfToQFqXBymXUW1e0CAGOFiAbKq3q2GD1Kzg6WgYoIwBQQ%2Fr%2BaM5oitx2yvqmL8nk1iBqgldq37Gtk3201w5tYwkC3xIMYY1KqFdPbMFpskfsdCpxQLXOpQyLZNElfYF09HjW8Cfu0o5T0ofIYZKR46lGaNOfrC9MNK%2FKOEuN3yQic8Om5rUCEOurcgwqIUahlIUnTo6BvZnIapoKsGA0CmkyaY7kpi12XI8VVYl0ehG7u0oveunmrI3XHbMkzrGAuFgo8kxf4Rg%2F5r6B4nKNt8As3IpadeQmnTXfUB041eGhXHpLap%2FRsliUY0mrnePNG9l8K5HdxOsIXmX4EZkbluv6jiUpBcwMhJvxfTE52PeYuryz27gU3ZKuKFYekthkN7JsfQ3fEnL3GeeAe86dOFUu7Ip%2FhiGd53PD2GvBSvQr2fnbBOdc4vI0YHo%2BMan94VMMXHrsEGOqUBe%2BQXQYtCKvrkG51uzhm9UMYgeBWNbtRO%2F6a6RmrHXTZWbkOlCW%2FUgYnV3HqYcX%2FjLrMet7ohY02PAJg%2FiuCJqFrXLNSh%2F%2FHTFlzVwT4uQWbo6HeXhzxqkOt%2BWsdfQ%2BZcT2smcvf5kDZ%2FzyVlf729gDLuEIdJi0sm5kYzeaQuzjLp1NxX9PI56bRQtGTxVG%2BTLGzmesMXHg6Bg0UQAPWLid7dNIPh&X-Amz-Signature=3576507481a00962a8dfc3232bb88b137c8df8c80654c83d38c766caf8c9843f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERPI2DF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbdtPYmxxs45x%2BWHgTn1q5IFXyi9mSJjhV2DSTjObyTAIgFe7spAagv%2BL8XfCYCqzLm%2BZT9sFro3nKZjFjBKlPqzcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdSQq6Syzewy%2BdBWircA1SOLmlPityb6zU24mGjg7HtJ2gI1hOvrty626C25xRTGN3UXXU%2BnzfVYPvqAXsqPcXNmMkwWxiqdTwxfTL%2FDL2XnideNII5rVyF%2BheT3W2zwIftRr05Q9FYAOaX0bFzR013HSL%2FuFevkOX1vHlqmqtznARL3m%2FgYmeqS3mnS5GV9apBl2sjnn4J0LfToQFqXBymXUW1e0CAGOFiAbKq3q2GD1Kzg6WgYoIwBQQ%2Fr%2BaM5oitx2yvqmL8nk1iBqgldq37Gtk3201w5tYwkC3xIMYY1KqFdPbMFpskfsdCpxQLXOpQyLZNElfYF09HjW8Cfu0o5T0ofIYZKR46lGaNOfrC9MNK%2FKOEuN3yQic8Om5rUCEOurcgwqIUahlIUnTo6BvZnIapoKsGA0CmkyaY7kpi12XI8VVYl0ehG7u0oveunmrI3XHbMkzrGAuFgo8kxf4Rg%2F5r6B4nKNt8As3IpadeQmnTXfUB041eGhXHpLap%2FRsliUY0mrnePNG9l8K5HdxOsIXmX4EZkbluv6jiUpBcwMhJvxfTE52PeYuryz27gU3ZKuKFYekthkN7JsfQ3fEnL3GeeAe86dOFUu7Ip%2FhiGd53PD2GvBSvQr2fnbBOdc4vI0YHo%2BMan94VMMXHrsEGOqUBe%2BQXQYtCKvrkG51uzhm9UMYgeBWNbtRO%2F6a6RmrHXTZWbkOlCW%2FUgYnV3HqYcX%2FjLrMet7ohY02PAJg%2FiuCJqFrXLNSh%2F%2FHTFlzVwT4uQWbo6HeXhzxqkOt%2BWsdfQ%2BZcT2smcvf5kDZ%2FzyVlf729gDLuEIdJi0sm5kYzeaQuzjLp1NxX9PI56bRQtGTxVG%2BTLGzmesMXHg6Bg0UQAPWLid7dNIPh&X-Amz-Signature=e3cb8d30c0ddc30c760f5ceebd3a9796bac31d12103210a28097f27a10224ee4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERPI2DF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbdtPYmxxs45x%2BWHgTn1q5IFXyi9mSJjhV2DSTjObyTAIgFe7spAagv%2BL8XfCYCqzLm%2BZT9sFro3nKZjFjBKlPqzcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdSQq6Syzewy%2BdBWircA1SOLmlPityb6zU24mGjg7HtJ2gI1hOvrty626C25xRTGN3UXXU%2BnzfVYPvqAXsqPcXNmMkwWxiqdTwxfTL%2FDL2XnideNII5rVyF%2BheT3W2zwIftRr05Q9FYAOaX0bFzR013HSL%2FuFevkOX1vHlqmqtznARL3m%2FgYmeqS3mnS5GV9apBl2sjnn4J0LfToQFqXBymXUW1e0CAGOFiAbKq3q2GD1Kzg6WgYoIwBQQ%2Fr%2BaM5oitx2yvqmL8nk1iBqgldq37Gtk3201w5tYwkC3xIMYY1KqFdPbMFpskfsdCpxQLXOpQyLZNElfYF09HjW8Cfu0o5T0ofIYZKR46lGaNOfrC9MNK%2FKOEuN3yQic8Om5rUCEOurcgwqIUahlIUnTo6BvZnIapoKsGA0CmkyaY7kpi12XI8VVYl0ehG7u0oveunmrI3XHbMkzrGAuFgo8kxf4Rg%2F5r6B4nKNt8As3IpadeQmnTXfUB041eGhXHpLap%2FRsliUY0mrnePNG9l8K5HdxOsIXmX4EZkbluv6jiUpBcwMhJvxfTE52PeYuryz27gU3ZKuKFYekthkN7JsfQ3fEnL3GeeAe86dOFUu7Ip%2FhiGd53PD2GvBSvQr2fnbBOdc4vI0YHo%2BMan94VMMXHrsEGOqUBe%2BQXQYtCKvrkG51uzhm9UMYgeBWNbtRO%2F6a6RmrHXTZWbkOlCW%2FUgYnV3HqYcX%2FjLrMet7ohY02PAJg%2FiuCJqFrXLNSh%2F%2FHTFlzVwT4uQWbo6HeXhzxqkOt%2BWsdfQ%2BZcT2smcvf5kDZ%2FzyVlf729gDLuEIdJi0sm5kYzeaQuzjLp1NxX9PI56bRQtGTxVG%2BTLGzmesMXHg6Bg0UQAPWLid7dNIPh&X-Amz-Signature=5c9db29c5fae7aff1935a288ab22c5c7e1a18df68d8e6e50556492e556d9eb69&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR5AF6JC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZXOmnuMfRJJ0vrQkCWpfU7n7YQLb7H%2Fim1R2V9bh9gwIhAJbr1lY5jlN8Aw8PplCAsLeZWz8NMF9UwiSanANI0XfSKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywNbxIgwh0oo0T9m8q3AMkx6EEYx3lLEXtO4zjHHMMeAjiGU2G5b1waAytQr5NQrHcfppzJnNS5UmRHOiXsEQbnUqPa8ztb3f0MJRWZue46s%2FEgBr0m7V3%2FXA1ByzzjSOf71CG%2FoLxLRQFtd94FgfU%2BJsn7mlGJDLsvv%2Fh6hpO0P0IUScpkj%2FcuO%2FKaP3Z1cpQDP8dbZ38HjxGk7nYGC66z1xGJuWt8m%2Bz1k0lszb%2BzPBS9oXaRgPRja%2FDFMqzcwADdXMqh3enC%2FnJwZh6LmJcBrLmWd%2FuiLNCy1besCBm0eNI1jiMoHzemrwlkPQ%2FYIID013O%2BXZ5uOB9MW9tiOSahiDzzNSrRK0%2B9t6%2F5Xtk3tDUrJWVzUOvHWHH6kGDegC7EDZNeN914yjflcwUpBPMVOTJyTYQuHsSuyw4racp5OqPX3UqmWe%2B4xOKsP%2Bal8mk7UaagEoDKEXUBHNqNKyZfJSXrHxaKsrJODNgJiukq5RbBlifmlflIstnh00EKpvXwK2x%2FOPFptB5IrJxKfgZvs3qHl1K%2FE8YFtTgUV0YfK1ejObLkbR4uD8U2khi4%2B0HlTJsKVoyCUgAb34wyLGucxg3k4clx3NPGcXc7seGHIeFWRy0VuaCErv5vYRAsQyMftOp9ictl3BkcTCvx67BBjqkAYhf80wTsBcqBcCKy8DhehNduq2j%2BGxsZe%2F6k6gZWhT7rsMa3fOaxnmbyIyFbDU9T%2F2RtNof%2Bd%2B3JyexbStnNc5muMW6zjEV9RsmdHX2LPDVBAZzV4uLJ%2F4DZfnSzhzrv3xL3JnJJPdnbRFQ%2FoJ2YqQ7xnoQpB%2FFawKys3fQbnFJCJrk9jQsKBa4jACto24yFW%2BwYoJtYpD%2BkieZEnQYeVH69ZRM&X-Amz-Signature=f3547838068d45d306c5562d3992f8b57c6ee36f3cdd3e74bba418470edcca0f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYWGRAOG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4qnUvqgaf8UiTewypLimQTLw73BhS5FqhCpBCn9LNDgIgIc138V%2F14QrirMRL7hHEgXrEJcR66WfoIy531vUtVG0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBd8cBB6IMoaV09z2SrcA2h%2BmFkski%2Bdiy13l772Pfw7lIqAd11OH6L9rKipaIdLtBGOJgwzy1BOhMontTFX7s6xPy3jypeKVbsE%2FBjmdCy6gpu68FvX0Uo5XQtqg7n%2FT7%2BP2n8IwGSxuypjOUQ3aTlOypiXL6tbb13Ui5KPY75fMU6CE60jM9FSeUhu%2F7rN0e7y7nXK0bE28b%2FVBy50uwf5x8NR8Lelz6E4rmvwVvsRmXCACkZciZtxWKbA5KjvaEpDYxupS%2B0voh9wuRWQPEW4wo%2BVbpDyERXBzHw%2Bnua3sJSbqtWKrXNTO4dGtDiWJg4c8gc9FcLAAJbV6CexIWd0dYn45GtWNAP2d%2BqcjSRgY7VLsicL2SisX1j3dSF38hHBerKgSE9MjWqUcBnHj%2Fp%2Bl3fK03XupVH69i2%2FwBvwVFt5IcFYHhFz4WtPYALydA%2BF7a6TLad4mC29Y%2FANrzG0ktDJ697C6sEccsnj801m6c7dydrPHvqdciGmLzNC8UgPqXsR1pMEWwQxvW3tQFtkPai8dohfD6AyVqWmKxbZ0awJ45dgDZ6DT8dw1jAFJJsjzo8YEEgyMVXxlT2LSrPGGQ90oYa8Mm4j%2B9UTVCruSIRqDyYmQXd5mP%2FA4EBrscfO0W%2FX9T%2Bq9sn1MNnHrsEGOqUBKeDzfkLaNEjbJQPQGPOEHOKW%2Bkx7LcUcm2F6X%2BIp90WPBSb6vR2U9Ix1B0vuIWkrPlttcOWm%2BlQG8M8yJgjUFNqG0Vt%2Bh4sfx2Cz2rtjAz0EY028cKmjLzA6M63S5m08iFBSLEJP0CTd%2Fvvh2Hfbz49rKFJ%2BEphE%2Fm6OutFOFZn0c0x4WnM9V%2F7UMgNgAwB6YszVFS67yThi%2FbjgniLINuoH3MOT&X-Amz-Signature=b5a3b51207463b76dcf82b7ed11480ddb0bb7a219566912ac6a0f40356ab03fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QERPI2DF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbdtPYmxxs45x%2BWHgTn1q5IFXyi9mSJjhV2DSTjObyTAIgFe7spAagv%2BL8XfCYCqzLm%2BZT9sFro3nKZjFjBKlPqzcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdSQq6Syzewy%2BdBWircA1SOLmlPityb6zU24mGjg7HtJ2gI1hOvrty626C25xRTGN3UXXU%2BnzfVYPvqAXsqPcXNmMkwWxiqdTwxfTL%2FDL2XnideNII5rVyF%2BheT3W2zwIftRr05Q9FYAOaX0bFzR013HSL%2FuFevkOX1vHlqmqtznARL3m%2FgYmeqS3mnS5GV9apBl2sjnn4J0LfToQFqXBymXUW1e0CAGOFiAbKq3q2GD1Kzg6WgYoIwBQQ%2Fr%2BaM5oitx2yvqmL8nk1iBqgldq37Gtk3201w5tYwkC3xIMYY1KqFdPbMFpskfsdCpxQLXOpQyLZNElfYF09HjW8Cfu0o5T0ofIYZKR46lGaNOfrC9MNK%2FKOEuN3yQic8Om5rUCEOurcgwqIUahlIUnTo6BvZnIapoKsGA0CmkyaY7kpi12XI8VVYl0ehG7u0oveunmrI3XHbMkzrGAuFgo8kxf4Rg%2F5r6B4nKNt8As3IpadeQmnTXfUB041eGhXHpLap%2FRsliUY0mrnePNG9l8K5HdxOsIXmX4EZkbluv6jiUpBcwMhJvxfTE52PeYuryz27gU3ZKuKFYekthkN7JsfQ3fEnL3GeeAe86dOFUu7Ip%2FhiGd53PD2GvBSvQr2fnbBOdc4vI0YHo%2BMan94VMMXHrsEGOqUBe%2BQXQYtCKvrkG51uzhm9UMYgeBWNbtRO%2F6a6RmrHXTZWbkOlCW%2FUgYnV3HqYcX%2FjLrMet7ohY02PAJg%2FiuCJqFrXLNSh%2F%2FHTFlzVwT4uQWbo6HeXhzxqkOt%2BWsdfQ%2BZcT2smcvf5kDZ%2FzyVlf729gDLuEIdJi0sm5kYzeaQuzjLp1NxX9PI56bRQtGTxVG%2BTLGzmesMXHg6Bg0UQAPWLid7dNIPh&X-Amz-Signature=f13019f3de987006faf9c87d2424cb28245080131af06ca5ec389137eb0f8f65&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
