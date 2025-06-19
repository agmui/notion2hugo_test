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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FJFZI5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAM0PJKAhrBd0G%2FJA5mQokKL1hfwNfb4iCx7dClbbbeqAiEAkTUSPBm6nONpF4B%2FuEwmeFgwFAGMlHiAWCVZ5bH5mTkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCa6HiULXnWwaF9JyrcA09ELBiMYqdBxY4j%2FOkxpfthbC7ojm04HwODU7QLmRZhVbyxO8oe26Ij4fbAmJyqiVDyQ4LTq1l2136q4A6k93Ah1EtgxjMw4YpLpUo2lRykVhBOK%2FJqky%2FlTIWcu44ZUxTP01cx2FlPTBUlruU8r%2B%2FUTin3aw%2FS581nOkRSNFYfvpDn4OhGmLPKRoBwUnaiG8MMDSwSzMbH2FE2ExeLxbNW9MYiHsVqkGXyPxB%2Fn2ClSRUaThJBLMjad9JhiSIK03iC8SbdbUe%2BvFR1XckOW0hnV0ZlhnjiuiBoTDrQN80QLo7zEz7vtuJRzOT3%2B0SmNJmRo%2Bu1nkxu8kLjahjsXI2ThEwVhNBGePvPNAaDey6bnRuzfqh68rNJUoQRfwpWDbK1%2Fu9zPdaZ0o2knw%2B%2Fsm05u3Mvgt6Ug%2Fx%2BxMcQQx8LzJBXzuL0SYDZRdf4EbDQ%2Buq1diZp%2Fc1%2F%2FuCm3qnSKjucnk3%2FGoeojbS3b58B0yiAtTJHDY5RWsMaPjb5RgGwBuG2OwjngOO8LCbTIiES9Rt%2BzekS0JgA8wR9YbfD8Uxyh0Ei8gSEzC6WccMUzPeLd%2BaDxmQLIjW2NDfZHm%2BJPYTl%2F0Imgl3HwfOSAU6WoEiHhmDpbkviSklnkrjwMM7LzcIGOqUBvT2WXCbP2gDf%2FBoraLw5xddnchnc%2F39M3SVaZeAICVsod%2BLZrK%2BQNiKMjztahLwnHdZ07L1C9epk8Z7WSwHfW4YfOkz9lPVWXEHUshpJzUrBL5xMXxrEQzo1R%2FdTVVcsOPTLoR1WOTNQgJP9vD2kPOZjh5KPW8wu9Ljzc4VLD%2Bw6ppRfkD5JD8w8cetIhwLFZ7CyH%2BlXt8opLdmEp3lR%2Fxuj8nSc&X-Amz-Signature=1aec3672d498c9229ee29e30634a1a3f2626a819701ad3eaae092541e47acd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FJFZI5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAM0PJKAhrBd0G%2FJA5mQokKL1hfwNfb4iCx7dClbbbeqAiEAkTUSPBm6nONpF4B%2FuEwmeFgwFAGMlHiAWCVZ5bH5mTkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCa6HiULXnWwaF9JyrcA09ELBiMYqdBxY4j%2FOkxpfthbC7ojm04HwODU7QLmRZhVbyxO8oe26Ij4fbAmJyqiVDyQ4LTq1l2136q4A6k93Ah1EtgxjMw4YpLpUo2lRykVhBOK%2FJqky%2FlTIWcu44ZUxTP01cx2FlPTBUlruU8r%2B%2FUTin3aw%2FS581nOkRSNFYfvpDn4OhGmLPKRoBwUnaiG8MMDSwSzMbH2FE2ExeLxbNW9MYiHsVqkGXyPxB%2Fn2ClSRUaThJBLMjad9JhiSIK03iC8SbdbUe%2BvFR1XckOW0hnV0ZlhnjiuiBoTDrQN80QLo7zEz7vtuJRzOT3%2B0SmNJmRo%2Bu1nkxu8kLjahjsXI2ThEwVhNBGePvPNAaDey6bnRuzfqh68rNJUoQRfwpWDbK1%2Fu9zPdaZ0o2knw%2B%2Fsm05u3Mvgt6Ug%2Fx%2BxMcQQx8LzJBXzuL0SYDZRdf4EbDQ%2Buq1diZp%2Fc1%2F%2FuCm3qnSKjucnk3%2FGoeojbS3b58B0yiAtTJHDY5RWsMaPjb5RgGwBuG2OwjngOO8LCbTIiES9Rt%2BzekS0JgA8wR9YbfD8Uxyh0Ei8gSEzC6WccMUzPeLd%2BaDxmQLIjW2NDfZHm%2BJPYTl%2F0Imgl3HwfOSAU6WoEiHhmDpbkviSklnkrjwMM7LzcIGOqUBvT2WXCbP2gDf%2FBoraLw5xddnchnc%2F39M3SVaZeAICVsod%2BLZrK%2BQNiKMjztahLwnHdZ07L1C9epk8Z7WSwHfW4YfOkz9lPVWXEHUshpJzUrBL5xMXxrEQzo1R%2FdTVVcsOPTLoR1WOTNQgJP9vD2kPOZjh5KPW8wu9Ljzc4VLD%2Bw6ppRfkD5JD8w8cetIhwLFZ7CyH%2BlXt8opLdmEp3lR%2Fxuj8nSc&X-Amz-Signature=6420367f28b4a9320d0cee455e42394c8818b04727b4be3251a6892114b904aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FJFZI5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAM0PJKAhrBd0G%2FJA5mQokKL1hfwNfb4iCx7dClbbbeqAiEAkTUSPBm6nONpF4B%2FuEwmeFgwFAGMlHiAWCVZ5bH5mTkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCa6HiULXnWwaF9JyrcA09ELBiMYqdBxY4j%2FOkxpfthbC7ojm04HwODU7QLmRZhVbyxO8oe26Ij4fbAmJyqiVDyQ4LTq1l2136q4A6k93Ah1EtgxjMw4YpLpUo2lRykVhBOK%2FJqky%2FlTIWcu44ZUxTP01cx2FlPTBUlruU8r%2B%2FUTin3aw%2FS581nOkRSNFYfvpDn4OhGmLPKRoBwUnaiG8MMDSwSzMbH2FE2ExeLxbNW9MYiHsVqkGXyPxB%2Fn2ClSRUaThJBLMjad9JhiSIK03iC8SbdbUe%2BvFR1XckOW0hnV0ZlhnjiuiBoTDrQN80QLo7zEz7vtuJRzOT3%2B0SmNJmRo%2Bu1nkxu8kLjahjsXI2ThEwVhNBGePvPNAaDey6bnRuzfqh68rNJUoQRfwpWDbK1%2Fu9zPdaZ0o2knw%2B%2Fsm05u3Mvgt6Ug%2Fx%2BxMcQQx8LzJBXzuL0SYDZRdf4EbDQ%2Buq1diZp%2Fc1%2F%2FuCm3qnSKjucnk3%2FGoeojbS3b58B0yiAtTJHDY5RWsMaPjb5RgGwBuG2OwjngOO8LCbTIiES9Rt%2BzekS0JgA8wR9YbfD8Uxyh0Ei8gSEzC6WccMUzPeLd%2BaDxmQLIjW2NDfZHm%2BJPYTl%2F0Imgl3HwfOSAU6WoEiHhmDpbkviSklnkrjwMM7LzcIGOqUBvT2WXCbP2gDf%2FBoraLw5xddnchnc%2F39M3SVaZeAICVsod%2BLZrK%2BQNiKMjztahLwnHdZ07L1C9epk8Z7WSwHfW4YfOkz9lPVWXEHUshpJzUrBL5xMXxrEQzo1R%2FdTVVcsOPTLoR1WOTNQgJP9vD2kPOZjh5KPW8wu9Ljzc4VLD%2Bw6ppRfkD5JD8w8cetIhwLFZ7CyH%2BlXt8opLdmEp3lR%2Fxuj8nSc&X-Amz-Signature=5f5a947ba054e2346fbdf9ed588d260231230b9ceb65ba02dacc66b53c1fdfff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YCMY24%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG1%2BMkp85sx9wG4WQIBTKa3GZqrj7F%2BUEyDFfvPPaA1gIhAMefZA315G8sIrffqGd2Bx63O8ZSPalawtTLsU9nPibLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7KhVJ8HTh2PnWPE4q3AMYsG7hNJOmPdtbPgf0w%2B2EY9lz9HnH685DGf79eQni5LnFlw%2FH1QHVj%2F4RsUonACq6ec3eGL1mWKDBzZMq2xYPaTDnZExzKox%2BduI%2Buu6xKvJw8MoBtFnD5G0pr5ibYyFHWelkwoGy6pbY7VJsy%2F7lUDHfjRl100%2BxAK%2Ft6kW%2FrVBGTewREYDH1Y1v%2BhYYEGOiViHXnkU1lMvMWENsrAZgaQtQsklEALwEfgy5n2wgQiIAEzs%2FxLooSDTWwV6La5S1114qoLdG1bzwlV9gEmt7vwObkIADEz9wAFpRDCywd14cCPu44LXm78cgxWpBAjttIvllrLQn0WcZEd47edL6ojqn6UDpNQJsA8%2FB1EnGU%2B%2FW9W1CMnTS6GtkquJNvOwqLilg3X7Xq6zttiIm2TLJ5XkIcBzSc2Era4DsDFksRNy6Iq7HejOGWAEo2F%2FlRBUItlOUxEsicHZJhr2DCdOzHNp361Y%2BtP2gCnCfDyJrJ2wx%2FwCvTjtNmkz4OoWnVMhZb8RRXioAST%2FEBtC%2Bs1aB2dYP0uAtVNrgUBP4jpNO0%2FdS7geR2MeP7FHhXGJSAi26dGVwpgIB63THQ4tLS%2BnE%2BUt0ugVTt9bjO26v3%2F7Ts1UTdJRNTPf%2BwY0BxDDhy83CBjqkAd0fp1YR7LNdwobGOmEnoGcQjxtPbw8vgrs0Bf6uTVcfuQCF%2FKZO6%2Fv%2BA6i2ggAv4yxN0WJYuZ6ntCTaxa2KGZQWWrv6waPPrNVMqa%2FRXun5NYuqyMv2jZwSV0ZVM9UqDH1v2IGC%2BMcxTY%2BGzJiy5e%2Fu7x%2BNgv0i2Xhnq2hiQ%2BdMteFzl8TzyG8jqIJz%2BVOn9aNOxnwQ9wQ3HbDFgS8PHGgT6ilw&X-Amz-Signature=f16f122031d8d84b7565cb8085009a10e6c493e8c46c17fe16a18164efa7f62c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGTF26W%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FXUsBCHdXnO9303nxqkHdaEJnor%2FlMNggNRrWurkR5wIhAKSQ3CD0%2B0yZ%2Fz7nsq7LDX7adIvX39TCuTkoQhgOiYDfKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMoTlCGXpC11h3pQsq3AMzwZVuc%2FbztZi%2B2fgHz9Fdi2TwsoZGx1YkPV3UrlYQgfP4WxV0yaTIqSRP5wRvxI%2FfOyOKg24zp3ZwLPhFhcc915HYjGoGFmA8SLIqsgBphGjyCGASAAQhrNZNrcOg8HRoRpIKMEy6gy%2BSMKUO1NhS1zyNuJa9%2FA0rnCj96ZwQ9r9TBKFykX4rGpCAQm9auGQ7mn9keK6uxxIix3k19tb4qk%2BO0dOcMoZTIVulMp6OP4tmPhtqSh%2Fsd9ioFF5wcqPLXtIBiWQEsr0p69g8GLFd0LexheZyR1i15XhntseSCx8Ex6MMRQBwcDB%2BPfOP2AUQEki3CLjwJlvLcPFRzpLTthKY15t%2BRnztbSgpaR4%2B74AYPE2M1dsauCpzq1NDKz7AGlIJYIEm3sPyFw1gTrYGTC2SQnPh9gxcNJ92TMcCi2VKMKSTEffaS5h5bvnvwagDKFeoiX23gLIsJqfDlRWaiqRINtd2JvqD%2Bsut3U2MWPO%2FuruprWYr1SHmzXHIm1CdBORaT%2FcW2duU8r2Q4cjDDOQ8gh1gj%2BydHw7m2hCqdqQ0HiSLe2lE9vCtyWlylLj%2FsWAxgFm7DZzL%2FAHR9ZmR2SlUrTh6yC6YWICwMQDTrgdlEWnfldSU4tf4kjCWys3CBjqkAaKx2ZFJyC8LQu45zNRwfx3vyrROb%2BgZrXs8S4dk7frOSIfSm6qP5nJBwV7U6QLrCX9jfIjTow4MayWAz1%2F7xQX4l%2B79kuvq6sGfi0VqKzH5aDxHiOmJTSV9JmvRgMwn24AM2KuuFLhlLPVNrA7WVtHqqQs7766Arox%2B0GACc2MNw%2Bsk%2FW8YnuSxWBav1ecSJQhmK4vr0L%2BRxtdjJq4qdmTs%2BrJd&X-Amz-Signature=90ed944c2686d22b3bed42c598781a999d98c1d680f908247a9e440bd6224928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652FJFZI5%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAM0PJKAhrBd0G%2FJA5mQokKL1hfwNfb4iCx7dClbbbeqAiEAkTUSPBm6nONpF4B%2FuEwmeFgwFAGMlHiAWCVZ5bH5mTkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCa6HiULXnWwaF9JyrcA09ELBiMYqdBxY4j%2FOkxpfthbC7ojm04HwODU7QLmRZhVbyxO8oe26Ij4fbAmJyqiVDyQ4LTq1l2136q4A6k93Ah1EtgxjMw4YpLpUo2lRykVhBOK%2FJqky%2FlTIWcu44ZUxTP01cx2FlPTBUlruU8r%2B%2FUTin3aw%2FS581nOkRSNFYfvpDn4OhGmLPKRoBwUnaiG8MMDSwSzMbH2FE2ExeLxbNW9MYiHsVqkGXyPxB%2Fn2ClSRUaThJBLMjad9JhiSIK03iC8SbdbUe%2BvFR1XckOW0hnV0ZlhnjiuiBoTDrQN80QLo7zEz7vtuJRzOT3%2B0SmNJmRo%2Bu1nkxu8kLjahjsXI2ThEwVhNBGePvPNAaDey6bnRuzfqh68rNJUoQRfwpWDbK1%2Fu9zPdaZ0o2knw%2B%2Fsm05u3Mvgt6Ug%2Fx%2BxMcQQx8LzJBXzuL0SYDZRdf4EbDQ%2Buq1diZp%2Fc1%2F%2FuCm3qnSKjucnk3%2FGoeojbS3b58B0yiAtTJHDY5RWsMaPjb5RgGwBuG2OwjngOO8LCbTIiES9Rt%2BzekS0JgA8wR9YbfD8Uxyh0Ei8gSEzC6WccMUzPeLd%2BaDxmQLIjW2NDfZHm%2BJPYTl%2F0Imgl3HwfOSAU6WoEiHhmDpbkviSklnkrjwMM7LzcIGOqUBvT2WXCbP2gDf%2FBoraLw5xddnchnc%2F39M3SVaZeAICVsod%2BLZrK%2BQNiKMjztahLwnHdZ07L1C9epk8Z7WSwHfW4YfOkz9lPVWXEHUshpJzUrBL5xMXxrEQzo1R%2FdTVVcsOPTLoR1WOTNQgJP9vD2kPOZjh5KPW8wu9Ljzc4VLD%2Bw6ppRfkD5JD8w8cetIhwLFZ7CyH%2BlXt8opLdmEp3lR%2Fxuj8nSc&X-Amz-Signature=3f92d5e757d51dc6be46d44e262f51a30f00cc96f6f7a66fa5da53c86559a6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
