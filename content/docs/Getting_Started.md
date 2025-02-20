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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYKSUJQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECLhtWnI7fkvTaDMGL%2BBw3ZGJO64Od5NulIjSPQ3DufAiEAtjT6%2BE%2BQahYHNj2VsKM%2FylRwNZY4V2ke%2B3ac%2Fae529YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3NM%2BxMWpI77mKElyrcAx3KiVI97yn6wxGfVuIa6o6mpBJLRXs8gsuT6EP7zrR0Bjo1XuOdsNo6ckb6T9UA2Rwa56WKd1IASVwCaMu4h6x67UvPn%2F1qaI8vnm0KezVIrAN6w3rCynD3lv4ECzwZfhMNoYC6XgBMggk%2BQ24HtE5HUWxEx9KSas8C%2FidA1IIoB0iR9KiO73En51WXJyXFHcV4q%2BfJsItIMg988yyZDhnt60E3CyMiXAXgOWDzcitqoJdhL5Cs2OWzrPR1VIbDnGi%2FKfdL50oMsSItXCPvUQhnLdiFjTx4v5%2FQnAu0t%2B79U5rd4AShU7Od5EIvQExn%2FYDE6B1Ee9xWUrpW8DOBGsfOMnrXHTwqWsu7fSZ2HVqiiP%2BqltJ2DjCE2dzWaBk4xbaU%2BvvHKtcYUJVML7pM6zSdgOXeA6t3SHgtAToWQM1RZleABk6rgzeZlJQCX9viuEXmPcXefUHuS3RpAUjy0Ukpq8oxjr4Yo%2BbmeY8iD8eYxMEvVS%2BDDCXfAuwizbZWTx1oZ1Qf553ZbgchQGXNGX8VwoJ0i%2BILrg1RwWk9K3hmG%2FdHilyXKwz%2BmTPSWnJZfaIMm2QFepS7jv48ft6nn%2BnideE5o1v8dQ20%2B285xLSIiK%2BiYJB2K%2FbyX4vNMMjK3L0GOqUBYmjMPgzTa9nlLXg2PWE0LsDt2HeWxZBMa%2B0l9HjHkfAErWNQyVB%2BUJCLVCLHg8j9wsaEIlmvlR7OMvWuBzCbHYn%2Fm4XZhJqw0T%2FjYJZN6zQvy%2BDzDzUchmjtnYesknSc3V7KEuhgGHsCH2YH8Zonehg2zH%2Bx%2F2B6xfUDh22XOh9vbS6hx%2FQgLUrnC99nLypFQoyhcgbqKpz12slkWTMTCjwYka8b&X-Amz-Signature=cb2b8e1dbbb460664e3c064584a0d5e5dce265d3b2d8a3b9df36d7b8325b519a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYKSUJQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECLhtWnI7fkvTaDMGL%2BBw3ZGJO64Od5NulIjSPQ3DufAiEAtjT6%2BE%2BQahYHNj2VsKM%2FylRwNZY4V2ke%2B3ac%2Fae529YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3NM%2BxMWpI77mKElyrcAx3KiVI97yn6wxGfVuIa6o6mpBJLRXs8gsuT6EP7zrR0Bjo1XuOdsNo6ckb6T9UA2Rwa56WKd1IASVwCaMu4h6x67UvPn%2F1qaI8vnm0KezVIrAN6w3rCynD3lv4ECzwZfhMNoYC6XgBMggk%2BQ24HtE5HUWxEx9KSas8C%2FidA1IIoB0iR9KiO73En51WXJyXFHcV4q%2BfJsItIMg988yyZDhnt60E3CyMiXAXgOWDzcitqoJdhL5Cs2OWzrPR1VIbDnGi%2FKfdL50oMsSItXCPvUQhnLdiFjTx4v5%2FQnAu0t%2B79U5rd4AShU7Od5EIvQExn%2FYDE6B1Ee9xWUrpW8DOBGsfOMnrXHTwqWsu7fSZ2HVqiiP%2BqltJ2DjCE2dzWaBk4xbaU%2BvvHKtcYUJVML7pM6zSdgOXeA6t3SHgtAToWQM1RZleABk6rgzeZlJQCX9viuEXmPcXefUHuS3RpAUjy0Ukpq8oxjr4Yo%2BbmeY8iD8eYxMEvVS%2BDDCXfAuwizbZWTx1oZ1Qf553ZbgchQGXNGX8VwoJ0i%2BILrg1RwWk9K3hmG%2FdHilyXKwz%2BmTPSWnJZfaIMm2QFepS7jv48ft6nn%2BnideE5o1v8dQ20%2B285xLSIiK%2BiYJB2K%2FbyX4vNMMjK3L0GOqUBYmjMPgzTa9nlLXg2PWE0LsDt2HeWxZBMa%2B0l9HjHkfAErWNQyVB%2BUJCLVCLHg8j9wsaEIlmvlR7OMvWuBzCbHYn%2Fm4XZhJqw0T%2FjYJZN6zQvy%2BDzDzUchmjtnYesknSc3V7KEuhgGHsCH2YH8Zonehg2zH%2Bx%2F2B6xfUDh22XOh9vbS6hx%2FQgLUrnC99nLypFQoyhcgbqKpz12slkWTMTCjwYka8b&X-Amz-Signature=7ab161ff11d465fba2d2a4474c1ceed1c0e5c697f2159ca13ad2d32ce7473c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AVWQQA5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChxGfqIqTNhdk3oOaPO3P7fDQJgdikXwthUjsUrNBrfgIhAK3c25rebIanCNKS7ZIDzP1OYEGdUyuXEIukLjJbXLbJKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxV7%2BzkfI47rN%2F6Idcq3APKuZi5LheguHzheCdxZdqontG%2Bx5p%2BJIWLhanar5FA1%2BjAEnKxeeCPnsyN%2F3GPePYJJu%2FTuBViBgb6SDmSETVzjr%2BzCL34%2FqLOGFbGijM%2Fc%2FURa6QtB4fanX%2BFU3crGW%2FFLMtMPMLqvPIpHdO%2F2j3zGQHbenf6D0e1JbpZGjN9sLlyQ7zxAy0VqwlV8SPFxh0QbUlIbHu63SNKshsRPL9eWJGbbdbWh0WEM9RPBxImGLafbFs3iKSl5KCiuhYETkry2LBKJpmpxIeECbCa7ed9xFbNGEtObNmVoV%2Fx8lRa3oPJhVqJhNN9RyJvQlStqpplyyV065nwYN8k5WjNELgoQ8m3SCZn8jeXrBCHJCsqJ9Ni1AFsw14plukV9fdeH45td66qlGcPyVpbQRvnryfZnW7yLMU6ZJl6tfodCIMsc49vBPOdCubYDWw8wCrPO%2FmHkrnMbFi2Q1xjPhN5AdtauydNeSaLIcqi9xwaVJFumhITENdncK08AjBmLqGS5kUabrk8%2FulptGjiTtYAqQ0VXDOBSdS4cBZPR0zzGAyof%2FAC%2BaMhqG%2BlywlU1dmikndc0GYTubhABlYHrsCHey4NbC35NjLzI6HC1Z4ByUvIGjXk7RrOxPVN5i%2FYgDCny9y9BjqkAcI2QsH%2FR8PKVOVDVUgW%2F9dVn%2F7O8G2oMhUXrlTZgE5W3oK7Ut%2FX%2BhIONk2J%2Fv4uGZAP0ewkaqpnsOfhQ0wnfJIefDkEKtKP5tEflh1r35UxUJQKZyZim%2BW%2BWWNsGP41f%2BnQ%2FfkrfBI3UnqtMHabP3HUjSRLqeOqFAAIJEXKUTwxamtcqNVvgWWFArmKL9NmyYSNnmJ1P6qw6dttMlw%2BMQP%2BEut7&X-Amz-Signature=9ce41c8c430c9ebf6ed104ed5c5d8e46dd2256d40c5df75a72ea15ecd7db4b96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566SMGYI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSglQcDx8ez9wGqDBg96%2FV6dQqsBG0tsO3W2u12RDTLAIhAJg0DreTSE%2FmtMW1M1WYp0YL2lPzhdKe%2FAwI1s2JRqpuKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSaQ%2FkGvCv9i4PwW8q3AO%2Fi0sc0PcBPqk2LfjLDaW82TXN3VatHf5Q6Si9nFP28ib7wkF0trh9jMRsC3Cekh00DFJgmZirh8mfhDb5RpQWU3sqKwv%2BtYBRlnyVgVbiY2vlWrTDBFBVyEiXD%2BDcJ26kEr9LPhWeXcFKYiEgTnqyMRDMP7sJteXO9ToMEiiY4cqPr02Ad9rbpcTT4LqJOOrcUZDEl32LKXWTt5cgZibcTxYkYLp3kd8Kq5cgzXDkTvX3LWLWFIwAaFfEEEuUkCfOZ0g%2BuA2EQHWgw8BknvSf03D0UE1KElc3B7D3j03hsXZsmvWmRWxTxLbEYueyJqGVSgedF1bT3q9jBIPcqy8QINyinw2UFopFKKmmWP334SAiX0F1WAE5%2F%2F2I849jDPPShzgRZjtPzALGmKLCezPrTz9vgDn1R2zmUsk4lRBNjjF3Kxhyv3KHIWH1CeRC3VYGqS47Sr7%2BXg%2BvZDJiOS5mXGYGuq0qoFCTnzB04YSzKIDqTn2i4fOdA5gh5mnRHX2wosPL5bbVp5tPNp8cb5lBmD1w7r2BzHDpu90X4G6Je64FqQ1vO8GFySulqiZjpmUk4px8WIS0ZjNr7awOCaAUAVWRZGJiyF7PoxBR9AY7Ti2gf9A%2FeMXIJKhuqjDDyty9BjqkAVJON9nkIIrOiilA1qxIixHyPTWvr5YqfgoI4i8yp5YFDdAPLqmQojx0Hiwwd5HfOKUj1NphEPjsgkm189W%2BjhzbFmg9ihP5onyVFtVfSdEY1KilykfpY1E2fV8cgq0ZYoE2XiMCalLBI%2F6JfvPsmJW8NbgC3GFy3ozjCYwjwU2JokXHSzY%2Fp8X22dT3j%2FgfZ1sr288hR9NtQmaBMcLSvDD7fHFD&X-Amz-Signature=17eb993bb55d86808e47967afc47d214725b2a943d6cd8515db6f7560a16faa8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EYKSUJQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECLhtWnI7fkvTaDMGL%2BBw3ZGJO64Od5NulIjSPQ3DufAiEAtjT6%2BE%2BQahYHNj2VsKM%2FylRwNZY4V2ke%2B3ac%2Fae529YqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3NM%2BxMWpI77mKElyrcAx3KiVI97yn6wxGfVuIa6o6mpBJLRXs8gsuT6EP7zrR0Bjo1XuOdsNo6ckb6T9UA2Rwa56WKd1IASVwCaMu4h6x67UvPn%2F1qaI8vnm0KezVIrAN6w3rCynD3lv4ECzwZfhMNoYC6XgBMggk%2BQ24HtE5HUWxEx9KSas8C%2FidA1IIoB0iR9KiO73En51WXJyXFHcV4q%2BfJsItIMg988yyZDhnt60E3CyMiXAXgOWDzcitqoJdhL5Cs2OWzrPR1VIbDnGi%2FKfdL50oMsSItXCPvUQhnLdiFjTx4v5%2FQnAu0t%2B79U5rd4AShU7Od5EIvQExn%2FYDE6B1Ee9xWUrpW8DOBGsfOMnrXHTwqWsu7fSZ2HVqiiP%2BqltJ2DjCE2dzWaBk4xbaU%2BvvHKtcYUJVML7pM6zSdgOXeA6t3SHgtAToWQM1RZleABk6rgzeZlJQCX9viuEXmPcXefUHuS3RpAUjy0Ukpq8oxjr4Yo%2BbmeY8iD8eYxMEvVS%2BDDCXfAuwizbZWTx1oZ1Qf553ZbgchQGXNGX8VwoJ0i%2BILrg1RwWk9K3hmG%2FdHilyXKwz%2BmTPSWnJZfaIMm2QFepS7jv48ft6nn%2BnideE5o1v8dQ20%2B285xLSIiK%2BiYJB2K%2FbyX4vNMMjK3L0GOqUBYmjMPgzTa9nlLXg2PWE0LsDt2HeWxZBMa%2B0l9HjHkfAErWNQyVB%2BUJCLVCLHg8j9wsaEIlmvlR7OMvWuBzCbHYn%2Fm4XZhJqw0T%2FjYJZN6zQvy%2BDzDzUchmjtnYesknSc3V7KEuhgGHsCH2YH8Zonehg2zH%2Bx%2F2B6xfUDh22XOh9vbS6hx%2FQgLUrnC99nLypFQoyhcgbqKpz12slkWTMTCjwYka8b&X-Amz-Signature=ff77ef7ca2849a820db8f029f50361f591304ed09c60bf6dc8ef33c39b6888ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
