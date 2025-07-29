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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FP3BZD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBjah%2BjKgdfY2Drw9OycBLes2zv9CsURgrmJjPWdup1fAiAIjD1Wt4%2BcmLB9kGMFYrZyRJIxNd8a6mggRgNGCIv79iqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BUplyb4cxXZb%2FRyCKtwDteN4fTLaGFElLg8AblJ4H1Z7rgD43UnlpGtGwpdFF%2BYgr4pi3BbFB7X1vxhQOQlacUy7cebLaJtbLN539clBMaNr2fAtANfNWXSFB%2FTCG%2FYlblWeSj1gB%2Bpdjee%2F%2F%2BoJEQ8u8JqBqJvTEjWEoKf5pZsdktTy%2F2LE%2FHbKD7ivErFNFzhrwKy3GaFc10Y3pEKIS7WoK3CpNtJVLKom1fmHi2FFn%2FdXojN%2Fbn4O%2BpcTZamoBfVGZPYLKWWq1O3Bp8os2BnAWk7ArPiUhPJgKooXqHjPkg%2FT5uGoOStS%2FwAM%2Bx3GkwhCSR6CJeYHbe92%2BZVd741Gx4NkWQqFgmXeMIwbhXUkEX%2B6m0AqUko9UN%2FOwP2OYCKVpAMK3EYeLC%2BGMSHpEbYKH19GEQPq8W0PUWLdIyYUOlCFez%2FQAsNuv0w%2Fm3puBTBdTzn7gJpQ5us%2FyhkYhkmrfPV5oSzHfplYxHO8u1ORiRZHXbIVKE7E%2FEwI2Duu2UMQYhEqoJnLSH3s%2BbndA5QIJq4%2FyJGQQS0MFpFMVMJrZIS1PIkUjOBW%2F90VL06bkZtu3M0vL41zKoya2TCC6Oiy6RFsYkH2vELBLxNL%2BCgz822gtAROyZfCqn83gISeWmMpKd1aR%2BgghYEw45ijxAY6pgE6%2BJEl5EKqNTCN3JRNZebPcfFh6DHmeX%2B%2FOYJpf%2F4CmzpttnhzDesUGjbzEEcvcKwCBKDkkRXuBYWL7bjTZgqYeR8v8f57FI%2BGUyFkh4KOveX%2Bo95uQizVStL67rNrZGhsx6IEylh8vS12hhY0e1S0%2B7JFsoPn7Y2gtX5R6siozSqqyXPWfY6mtXlDgwZ89zSaANBT9sIiMNIza%2F3HdNGdzIcpthNB&X-Amz-Signature=c7980954a19efe62edd1f294b7ed1008fe77ebf5c9745c86bb0a750922cb4128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FP3BZD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBjah%2BjKgdfY2Drw9OycBLes2zv9CsURgrmJjPWdup1fAiAIjD1Wt4%2BcmLB9kGMFYrZyRJIxNd8a6mggRgNGCIv79iqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BUplyb4cxXZb%2FRyCKtwDteN4fTLaGFElLg8AblJ4H1Z7rgD43UnlpGtGwpdFF%2BYgr4pi3BbFB7X1vxhQOQlacUy7cebLaJtbLN539clBMaNr2fAtANfNWXSFB%2FTCG%2FYlblWeSj1gB%2Bpdjee%2F%2F%2BoJEQ8u8JqBqJvTEjWEoKf5pZsdktTy%2F2LE%2FHbKD7ivErFNFzhrwKy3GaFc10Y3pEKIS7WoK3CpNtJVLKom1fmHi2FFn%2FdXojN%2Fbn4O%2BpcTZamoBfVGZPYLKWWq1O3Bp8os2BnAWk7ArPiUhPJgKooXqHjPkg%2FT5uGoOStS%2FwAM%2Bx3GkwhCSR6CJeYHbe92%2BZVd741Gx4NkWQqFgmXeMIwbhXUkEX%2B6m0AqUko9UN%2FOwP2OYCKVpAMK3EYeLC%2BGMSHpEbYKH19GEQPq8W0PUWLdIyYUOlCFez%2FQAsNuv0w%2Fm3puBTBdTzn7gJpQ5us%2FyhkYhkmrfPV5oSzHfplYxHO8u1ORiRZHXbIVKE7E%2FEwI2Duu2UMQYhEqoJnLSH3s%2BbndA5QIJq4%2FyJGQQS0MFpFMVMJrZIS1PIkUjOBW%2F90VL06bkZtu3M0vL41zKoya2TCC6Oiy6RFsYkH2vELBLxNL%2BCgz822gtAROyZfCqn83gISeWmMpKd1aR%2BgghYEw45ijxAY6pgE6%2BJEl5EKqNTCN3JRNZebPcfFh6DHmeX%2B%2FOYJpf%2F4CmzpttnhzDesUGjbzEEcvcKwCBKDkkRXuBYWL7bjTZgqYeR8v8f57FI%2BGUyFkh4KOveX%2Bo95uQizVStL67rNrZGhsx6IEylh8vS12hhY0e1S0%2B7JFsoPn7Y2gtX5R6siozSqqyXPWfY6mtXlDgwZ89zSaANBT9sIiMNIza%2F3HdNGdzIcpthNB&X-Amz-Signature=f9acbc223b0ff2e008621512cb028aa0d284ebb2045efa2fa96c90813d71d475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FP3BZD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBjah%2BjKgdfY2Drw9OycBLes2zv9CsURgrmJjPWdup1fAiAIjD1Wt4%2BcmLB9kGMFYrZyRJIxNd8a6mggRgNGCIv79iqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BUplyb4cxXZb%2FRyCKtwDteN4fTLaGFElLg8AblJ4H1Z7rgD43UnlpGtGwpdFF%2BYgr4pi3BbFB7X1vxhQOQlacUy7cebLaJtbLN539clBMaNr2fAtANfNWXSFB%2FTCG%2FYlblWeSj1gB%2Bpdjee%2F%2F%2BoJEQ8u8JqBqJvTEjWEoKf5pZsdktTy%2F2LE%2FHbKD7ivErFNFzhrwKy3GaFc10Y3pEKIS7WoK3CpNtJVLKom1fmHi2FFn%2FdXojN%2Fbn4O%2BpcTZamoBfVGZPYLKWWq1O3Bp8os2BnAWk7ArPiUhPJgKooXqHjPkg%2FT5uGoOStS%2FwAM%2Bx3GkwhCSR6CJeYHbe92%2BZVd741Gx4NkWQqFgmXeMIwbhXUkEX%2B6m0AqUko9UN%2FOwP2OYCKVpAMK3EYeLC%2BGMSHpEbYKH19GEQPq8W0PUWLdIyYUOlCFez%2FQAsNuv0w%2Fm3puBTBdTzn7gJpQ5us%2FyhkYhkmrfPV5oSzHfplYxHO8u1ORiRZHXbIVKE7E%2FEwI2Duu2UMQYhEqoJnLSH3s%2BbndA5QIJq4%2FyJGQQS0MFpFMVMJrZIS1PIkUjOBW%2F90VL06bkZtu3M0vL41zKoya2TCC6Oiy6RFsYkH2vELBLxNL%2BCgz822gtAROyZfCqn83gISeWmMpKd1aR%2BgghYEw45ijxAY6pgE6%2BJEl5EKqNTCN3JRNZebPcfFh6DHmeX%2B%2FOYJpf%2F4CmzpttnhzDesUGjbzEEcvcKwCBKDkkRXuBYWL7bjTZgqYeR8v8f57FI%2BGUyFkh4KOveX%2Bo95uQizVStL67rNrZGhsx6IEylh8vS12hhY0e1S0%2B7JFsoPn7Y2gtX5R6siozSqqyXPWfY6mtXlDgwZ89zSaANBT9sIiMNIza%2F3HdNGdzIcpthNB&X-Amz-Signature=43a059b533ace9a9e868a7876985468427dbd4ea7d451a21700e087d576b31d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQ2VLZY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJFMEMCH1bXW78pYKABuVe5Y5KEL80zOKleTjd5cdvDrywiPPYCIHileqykX1wt9IIYt%2FTnxqrO3KT6tlnoSOP992MVX8hJKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FpY5mlSFiH3XbVIIq3AML8L9U4ouOTxL5uvBA7tyhJwGWlx74so9HYKsolhUqble6b%2BG8mpRUDBeTlZzvNkRDJ5lYPma8Z9PQ4svQQDfz8sSQPsQfE2h5jAl4l3GAvZIwd0JKKX1ySbXzw3Gk9Wu1opdyy%2BgjEmdqwfneI4yAh9klyyu%2B%2Bm2TP9B8v7gejnpQH8lg6Idelg0iI6KM47cvoSFEXOTCWOhBB0OAQ81jSUdgfDrZZ3S8m7y2aBFe4PMGHNVvjUz7NPXbKGfFMsyHidygwCkhTYOttEfw7hK%2BGbCFBcOyRIt7QDGMw7uZZzCwSeeHH8IChWzOJnpsSVWsmYx2w479jDPWk22LXr7tipOUW%2FyEYheW3JfTP4T9OyaP04RL89w8jAi9PzBssrKd21vWIqawLf2DJ3e%2Fq5Nl8KNAgrNvUIblhXKBwM3W8hEZuzlvdrrxzZok3ffRGSkNSjjHwciKJquryonBvUaaBsItQrIzxQtXyYC%2Fb2zw3ftrhX8A3uU%2BUhMziAtL%2FbxuFoOVlaA2%2BcxFc4Jg3cVRaoJ7I1ZNicqO5QJz8UgbcnPnaMUdLOnXWaPGwMsxRHPGl6icmZymEDkZxR4U6hJuKYlkvyBUa3MTPXlSngLQqhBGxq1hxb0uu77gHzCNmaPEBjqnAeI2ThTOCSbDL2MkSlapOmZ7MTyxgBM5qpuJ%2BbW3ZsTOG9qxikaWz%2F8StznZ8AELz71Kss5Tfq8drGAe2X0rxcKKl7xVX0N3nmSHpKsgJx8Q1Lw1QYbbOG1pGONSpBUkK1BaOmOik2S6%2FoyLPIx%2FT32FI7UhhUsLmw6Wd23b3NhZ4%2BDasL4gAP4BPSoas0LQ2fSgY%2BUiQulazdHYPyKE1431zsz7bcWi&X-Amz-Signature=51edb2b96000e57e6090f43e3b71a4b1da1d42433e8eb878e40c431cd98cae1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7YQPS2I%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGwHMBzqZjk%2Frdzbq75f6YfCvcwF9LSfG%2FiXlb5UBFPhAiA3o8UkziQr2r38c%2FVOVHLj%2BaCeQyxlmPPJIWCGqmvIUSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjtKEk1y1rApVwYKXKtwDKrNowSViA%2F6p%2FWVc0%2F6pBk6%2BQM%2Fj44hJ5GQ1vq9alGPjxzYjbIqVMpNJqpL3pVDHUqg8VYkUltDOL0BdMNY8p02gZn6IVFUNuR4nxOO%2FEf2RvezwmFUotXeaovIVqFkQliAUkY8boWDJvf%2BgY9ChPOTimMg176aYNoKc3RFE8FNHea9pGWxZeZIYaFg4TFEAUvX2JE%2FqTW3CHz9EfDGYAc9wyeznHzbuyEsFfKhPjewoBVduVubJbuv7Q2jENkQpqEQeiXz6XXSrjU6KeioabJt7O3IEk0SihLvCohtZGPfa0ruG9TdfLH1eIjqIfo2RZ5tD7Abl1g%2BoCSzuAwUvKy1zp6CNy%2F19msHIXtcl%2BENYgVPjIe8xWg%2BfKGFVQRfw0GyXc8UWnOz6YCTBjHk9vM1eQqYjnNdJnXCGn8aSw8BWz9NY2%2BfOnEE4gvmNwL2cifwJ7onaXMPIvvPCVWq8t5xM2W8%2FK4X2U0oSGeTfGUj6jTh8qlatpivQTk%2B1CMA9fkQNOzOkuaFWGK5xsGT7fG69rb%2FdcMAhBWiWyGVvaW3q4yoJap5U0ohwDIUXgMVX3A3Skq2tpvs1mhJMB5mZZNRM7WxsYUykQ%2BTvA02m6gpHUSnAQPRXKXGZDKwwoZijxAY6pgEmxaRO9vcOBKdHKM30f6SVCTZoXDCvQ3oL0fyd3dx%2FeRmRnKouecozOfvn%2F1nyXCqBrP3iid2cPwGXFNVX53alEfiNSSHGpbRd%2FuHxoPe5vKnEx4WKiUnHl4h%2FicJdYdkMSxNNrjEh9dg4qMiXgqKvP217zzKGKqaz8ehNL8wuWly5hmchf5mUV3TxNZ88e%2B%2FUMnh4psOyCisnYpNoMCfXo56c16gn&X-Amz-Signature=5c311267ecfb4352a270a1c71558c45cb422569d3f8de97ca7f79a33a9731b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FP3BZD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBjah%2BjKgdfY2Drw9OycBLes2zv9CsURgrmJjPWdup1fAiAIjD1Wt4%2BcmLB9kGMFYrZyRJIxNd8a6mggRgNGCIv79iqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BUplyb4cxXZb%2FRyCKtwDteN4fTLaGFElLg8AblJ4H1Z7rgD43UnlpGtGwpdFF%2BYgr4pi3BbFB7X1vxhQOQlacUy7cebLaJtbLN539clBMaNr2fAtANfNWXSFB%2FTCG%2FYlblWeSj1gB%2Bpdjee%2F%2F%2BoJEQ8u8JqBqJvTEjWEoKf5pZsdktTy%2F2LE%2FHbKD7ivErFNFzhrwKy3GaFc10Y3pEKIS7WoK3CpNtJVLKom1fmHi2FFn%2FdXojN%2Fbn4O%2BpcTZamoBfVGZPYLKWWq1O3Bp8os2BnAWk7ArPiUhPJgKooXqHjPkg%2FT5uGoOStS%2FwAM%2Bx3GkwhCSR6CJeYHbe92%2BZVd741Gx4NkWQqFgmXeMIwbhXUkEX%2B6m0AqUko9UN%2FOwP2OYCKVpAMK3EYeLC%2BGMSHpEbYKH19GEQPq8W0PUWLdIyYUOlCFez%2FQAsNuv0w%2Fm3puBTBdTzn7gJpQ5us%2FyhkYhkmrfPV5oSzHfplYxHO8u1ORiRZHXbIVKE7E%2FEwI2Duu2UMQYhEqoJnLSH3s%2BbndA5QIJq4%2FyJGQQS0MFpFMVMJrZIS1PIkUjOBW%2F90VL06bkZtu3M0vL41zKoya2TCC6Oiy6RFsYkH2vELBLxNL%2BCgz822gtAROyZfCqn83gISeWmMpKd1aR%2BgghYEw45ijxAY6pgE6%2BJEl5EKqNTCN3JRNZebPcfFh6DHmeX%2B%2FOYJpf%2F4CmzpttnhzDesUGjbzEEcvcKwCBKDkkRXuBYWL7bjTZgqYeR8v8f57FI%2BGUyFkh4KOveX%2Bo95uQizVStL67rNrZGhsx6IEylh8vS12hhY0e1S0%2B7JFsoPn7Y2gtX5R6siozSqqyXPWfY6mtXlDgwZ89zSaANBT9sIiMNIza%2F3HdNGdzIcpthNB&X-Amz-Signature=9b439943f076575e43878ebba2031f7d01c71dad5b6dcfa7adcc32ba25deac04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
