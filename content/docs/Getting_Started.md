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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ66DO5F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE4la58nAJYugveA8BnsLdcfqcOoMdOdYHWlrkmtpFsAiBbbSkE1CQxwjxb0sOPAp7GprSVA631QBtICdRHOxcN1Cr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMLsjMa2kSZPNThCNDKtwD9ra7YWtiqeNldkxFM2hNzJAjNYIITn0W7vKshW4iYqnaP38JkrGji0mLlPjtzIA8hMJ4R%2FoOgbg97BTyXJoO5SU8KGl3VCAyuEYLh26cvHm%2B19MqWna%2BWZRqS9vcFaLwvgvvg0%2BaP8qGXwycCFwSlMB9kqJ47AjJy%2BVNpqFjdPmS7wgG%2FbinRIHbgZtLvab9Og3zcVsqonmy5o4G57HTlpafpnweDAqkbmoj8Ao%2Fxe1v1yW02VuzJgnWlrg4L%2BJyC4cX8z%2BxElQTvcLVvtcc0fbprZw%2BPY9Rx3SWnf8cNucI4UIdahctD6LgoVYyp%2B34ydV4RK44jVH5QHfPMyEn0i0qmuaqUP4NFYxH%2BgYmMFawVf%2BbiaibtpdhA7SmfyjjyWRnSz5%2FAuJHEC2n%2F0QVExf7UEQMx%2FYVigpXoJNger9YTzNCpbDIQkROTHolhZ0h3yFC08ILJUUCZRqIal3n2i95YC1nlfLHfpX7tMb6OSGsvILoaLbdLVmJwXmc2sMbLRXxkpsvgqcs4LfXKMMuLwTHrR%2FmVsh%2BkC4uprj94qws9epxiyURtn16OskhVAbAEPIpS%2Bh%2FcYAe6FWX32cvS7h%2FvkAfkzswYYKoww8Nil%2FJtl%2B5DOiO%2F9%2B1wNAwuPakvgY6pgFmtbrDeb09Y7Krgjh7n%2F2QDFbnsnzebCo8vj5n9jJDKQLktiECKnMXS3oZGVFhubv40xG4sSU%2FSE0mne1jtzOFcZJisGB44qdRWSOjXljEDDh7TOqAdNGHwDxR%2BH01Bjhga2o%2F8U0xL52QmicURnwNFBofEaEM%2FvTb0%2BWwCRLD%2FGBHgutrVELC02R6v30211xmqhaKjG5G5xbbdlLrqBCR9WvvN7x7&X-Amz-Signature=7fdaafc1fa93de86d5cca16d1dcb227af452b4a19ca0dce0474d5367e2f706a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ66DO5F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE4la58nAJYugveA8BnsLdcfqcOoMdOdYHWlrkmtpFsAiBbbSkE1CQxwjxb0sOPAp7GprSVA631QBtICdRHOxcN1Cr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMLsjMa2kSZPNThCNDKtwD9ra7YWtiqeNldkxFM2hNzJAjNYIITn0W7vKshW4iYqnaP38JkrGji0mLlPjtzIA8hMJ4R%2FoOgbg97BTyXJoO5SU8KGl3VCAyuEYLh26cvHm%2B19MqWna%2BWZRqS9vcFaLwvgvvg0%2BaP8qGXwycCFwSlMB9kqJ47AjJy%2BVNpqFjdPmS7wgG%2FbinRIHbgZtLvab9Og3zcVsqonmy5o4G57HTlpafpnweDAqkbmoj8Ao%2Fxe1v1yW02VuzJgnWlrg4L%2BJyC4cX8z%2BxElQTvcLVvtcc0fbprZw%2BPY9Rx3SWnf8cNucI4UIdahctD6LgoVYyp%2B34ydV4RK44jVH5QHfPMyEn0i0qmuaqUP4NFYxH%2BgYmMFawVf%2BbiaibtpdhA7SmfyjjyWRnSz5%2FAuJHEC2n%2F0QVExf7UEQMx%2FYVigpXoJNger9YTzNCpbDIQkROTHolhZ0h3yFC08ILJUUCZRqIal3n2i95YC1nlfLHfpX7tMb6OSGsvILoaLbdLVmJwXmc2sMbLRXxkpsvgqcs4LfXKMMuLwTHrR%2FmVsh%2BkC4uprj94qws9epxiyURtn16OskhVAbAEPIpS%2Bh%2FcYAe6FWX32cvS7h%2FvkAfkzswYYKoww8Nil%2FJtl%2B5DOiO%2F9%2B1wNAwuPakvgY6pgFmtbrDeb09Y7Krgjh7n%2F2QDFbnsnzebCo8vj5n9jJDKQLktiECKnMXS3oZGVFhubv40xG4sSU%2FSE0mne1jtzOFcZJisGB44qdRWSOjXljEDDh7TOqAdNGHwDxR%2BH01Bjhga2o%2F8U0xL52QmicURnwNFBofEaEM%2FvTb0%2BWwCRLD%2FGBHgutrVELC02R6v30211xmqhaKjG5G5xbbdlLrqBCR9WvvN7x7&X-Amz-Signature=216fa939baa30a8998c70aab077d48bd31aa7cd2e0a130fc7729881e7ee0950f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625T25UXP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk1wYG69UVWK2nejBZcKEuYOL9QBrc9BqhuXozNwveJwIgWWNGrCoqZonLoFz6DK7TCybKExMUBiu48nbI9MMlJH0q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDL3DaBwlf5TRZAuVLSrcA2tU8%2FaCR3kpySGLL88Zigioyw9AbZuAu5dAYwIk3sCDxQCTQHVcDHjDxDfAMS6V9PYZO7jfb0IrjTDZgrsXu%2FQ0xAFE67esin8tlo14zkxiz%2Bq1domDHpAIak372N6khu6V4S8vTFMef0CyhOGbtXPvc0RkBZ1QTr32q1imnvg6PPODeio6i1iaUqV66tOjnQfHDtmZRyQSl1QPipOHIOb9PlPugPLDA7cGr6XI2JMdwyoyRFyevN1c0p4U9fTc%2B8SATH6nFUmEJIp9gxjS40Kqau2nLw6n7V9vyhjxiBH9i10xbuSf7Favo80bXhmK%2BudARpaY%2BBseu9cvTOmLSfo8LhLQrrFvRikB3eJTOS1ZB8BR46O77GUsGhfwVbCtbdHfCLEqQfXO0sj02bltItRjsCm7TUu2NqUlCgjfyU4bbs77rhLmlBboY9gr4sZ%2BiVJBDHzY6jcOAPIC1HmXCGMG2XxffWHfqW0pzyGvbT3sAHa62PNEZQd5EIg%2BitRJQg1wEZS8JcEg4RFzcSHne8UDtciX5HSc4zqIsNiYtxT%2Bj20nEcjwguK4vd6S9thuPNP6r0crBGuYLMSbZb8O7HZFM0NsM%2F0Acy2lAYKnhOMzkHslXKJ1jTLn6aZ5MJL2pL4GOqUB%2FqRPazVfoUot%2By98birS5QG7W55R4g%2Fn2PiHvgafsc6%2FqS5FmmvJzjee77R2JK8Ext8HODsScBSy5Dgqgd99WIqOsVqE9JT7QUqzCOINnlqw5NV6LaJ%2Be16nzYr2ncq%2BgRjkA6Ne54rVdYplnEjoTLBuL6F91%2BN%2Fk6KPqAeJAb97NvlzMWHK4eZ5n%2BE1ANwf5SfjDL5qHanK6f5dtkB7EeUqCCV8&X-Amz-Signature=2af64be6006dffa5ae3bbad231e14025c3bb16d53441fecfa81367b1f1a8b101&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VKHKLTT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxFdTJG%2B0XlTKPDV3zCurq%2FAffQfUQTYB1aEH4L8nWeAiEAiVGPWfEHnGOIaE5hZB4as%2FLT1LGT%2FDajsjWZLEVMM1Aq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOhnN1Du%2Bnip%2F3XiLCrcA0DBcew204dR3cFE3gRTKE07JzEhwuj3gIs%2BpDF%2F5904u9hwq6iuMV7ompxkHixMFSewfALoNg4TpZUCQc7Bjs7uTKvlvfTMoySvuX0VZrMud2iQplAhE2u6B0mckwH68BavklT9ez7WtWiHy3VnMooqxAOmS%2BY%2FrltMGHQWmWf3hKcpIqHuiSS%2FHnLe68TBvA1OLDehzgf5hAMFh0CnhLPoCPTXZ8KQgGooY524nSSC3qm3pGsPMBkZWKG340W96R17ZSOPa69sAk1D2WnoChUn5wE1z5K8t0wUpQkCvZEEvyQQ1cqS70YtFJ%2B%2BW3IKZMPBnp7QvmXFyF%2BMkgGvI0Wg%2FVl18s4wjtv4762PHIGfCNx7RVTaTDawsrNVcUi0i8IA0%2BDen4nuko3iP3gmXZcchiNYF2DinicG7z1Bg9eBX%2FEtyeJm2Ku2o0nqQ74rD6cnrPa8YIcpN4FBHQwpAtfUmAu%2FLbeBCGhT3wX%2BaukRnYD6FRWr4nvguXFch0IiM%2FxIWJZNB7AdlhYr7QU0RhKMZtUpa%2FULDZsWkE8v2%2FsLaPP3ZmzHLiyVLGiw8f9sPUCPjSmnhsvfLTPchHEcCMhywsbQTFr0qX%2FXrN2slriutSI7rrWrPAwbiO6dMKz2pL4GOqUBstMBU4pumKpdTEXphGXUboBzClXv3plZ8Tntb73RpxplY36q5KEDzazHeK8Zaxf%2B%2Bjh9BF689BDZsOswLcKg30IdlnYd2Nd4vLbgBdsfVODIVB3Kl6O%2Ff0O4zpmN6inQnhc6UBEBzEBSOPrH30oVW8WyAnEmI3Lg14sA2S57JngHUC7qjwwGUnqPRwyF5LFATlQNWJhTTQaGdYk4LukQzBY8EvfO&X-Amz-Signature=f910efaccf518aaaffc840180174d7153e4bf6758c385745e67cdc1ff4d92c74&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ66DO5F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBE4la58nAJYugveA8BnsLdcfqcOoMdOdYHWlrkmtpFsAiBbbSkE1CQxwjxb0sOPAp7GprSVA631QBtICdRHOxcN1Cr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMLsjMa2kSZPNThCNDKtwD9ra7YWtiqeNldkxFM2hNzJAjNYIITn0W7vKshW4iYqnaP38JkrGji0mLlPjtzIA8hMJ4R%2FoOgbg97BTyXJoO5SU8KGl3VCAyuEYLh26cvHm%2B19MqWna%2BWZRqS9vcFaLwvgvvg0%2BaP8qGXwycCFwSlMB9kqJ47AjJy%2BVNpqFjdPmS7wgG%2FbinRIHbgZtLvab9Og3zcVsqonmy5o4G57HTlpafpnweDAqkbmoj8Ao%2Fxe1v1yW02VuzJgnWlrg4L%2BJyC4cX8z%2BxElQTvcLVvtcc0fbprZw%2BPY9Rx3SWnf8cNucI4UIdahctD6LgoVYyp%2B34ydV4RK44jVH5QHfPMyEn0i0qmuaqUP4NFYxH%2BgYmMFawVf%2BbiaibtpdhA7SmfyjjyWRnSz5%2FAuJHEC2n%2F0QVExf7UEQMx%2FYVigpXoJNger9YTzNCpbDIQkROTHolhZ0h3yFC08ILJUUCZRqIal3n2i95YC1nlfLHfpX7tMb6OSGsvILoaLbdLVmJwXmc2sMbLRXxkpsvgqcs4LfXKMMuLwTHrR%2FmVsh%2BkC4uprj94qws9epxiyURtn16OskhVAbAEPIpS%2Bh%2FcYAe6FWX32cvS7h%2FvkAfkzswYYKoww8Nil%2FJtl%2B5DOiO%2F9%2B1wNAwuPakvgY6pgFmtbrDeb09Y7Krgjh7n%2F2QDFbnsnzebCo8vj5n9jJDKQLktiECKnMXS3oZGVFhubv40xG4sSU%2FSE0mne1jtzOFcZJisGB44qdRWSOjXljEDDh7TOqAdNGHwDxR%2BH01Bjhga2o%2F8U0xL52QmicURnwNFBofEaEM%2FvTb0%2BWwCRLD%2FGBHgutrVELC02R6v30211xmqhaKjG5G5xbbdlLrqBCR9WvvN7x7&X-Amz-Signature=d29ed04854440940aa1940addd1432fb30dcb2f92c5e40db3881cd55be838117&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
