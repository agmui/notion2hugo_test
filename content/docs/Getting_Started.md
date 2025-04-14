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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVIA4QD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAW0YBGNouPBmNpTpk4LwQS5gDmsNHBRohrnbSgnNE7AiEAkHsG8KEJ5wiMfRWplP%2B1lKfyLR71fe%2B5xZi4J%2Bq7NNUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDcACX272nXSSJV45CrcA4soD3ROEKt5hcp%2FZ7Vp18Vt%2FDgLjCVr2rrpj5dawTfryQ0VpheFhiuKQzDcdcCjfnb3NtQiggsxxVFczkdDmOmAQhFqBzXiDk4s0IE65zPqMKLhOfMb79hgSgZW%2F%2F3WgVgXklPCvMYU6baMKVW25c1slBcQBon%2B%2BUnopgCdsuJRKBzxh5yeE2yx%2BpSBOKIhBrl4cAXAFapOr8KiH%2Byl8ph5NhrZ0Gbm9fR86SLH%2F6LBsDrmW%2FYaXLNuL9CQAdmMu4bRTK5oDxvP%2FrsqXFona%2Bt4VDCCuhI2Zxr99VpYcrmPO0hTZS36wVmCSufVyKXs3kNrL%2BdVvC4Ojax0w4WeEW6z5lByjMWzMeXQ8flHFPU3IsnOdmRz7iIw%2B2AcYGE3rStAKDgD9ycuJvI4hjJGAGnpIOWyVs8ZX0t495NUyOgehFeeT3eMhh31Pw82RVFCkejp21bHB10MUDwjT1PJvh9XadrfwaBrQ8vunlkwp9WVfn9NJrnbJNSdtXfsYcqzWOdqkotj0wXmPtTAGzCoTQ678EfcaDQ9l2xKRb4edgmXyjoKIKdv7kDZCgA9PIgWHEGpPeMX99b17vJt87eyI1UAaGQW5%2BFIlzcLi7STcnEO48c%2BNaku3iN1QBXdMMHj8r8GOqUBzJmuQObD2GhRZqCqEsqM1GOWZAQjWWl8HomjddSbOdFvQW5r4Plw0l4xC8NPileAm72lz9tbRPwwWQeoCVcfEOPhehLsp7ItPds%2BgYovrU7%2BVDgkz7fjT16uLFv7Qjz3KYjq2Sg4c8auLltS7gSl%2FGE0MvuImDF6M01ggUxyZlq77ccmJnQxZXZsbRvby4ctCUoGnqtCoVA2wGJaGwoze0y0aDVA&X-Amz-Signature=22c8f2c974ba507d16ad97d2ef94ccddf64227b5e9605a8fc6b9b1ae36028b61&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVIA4QD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAW0YBGNouPBmNpTpk4LwQS5gDmsNHBRohrnbSgnNE7AiEAkHsG8KEJ5wiMfRWplP%2B1lKfyLR71fe%2B5xZi4J%2Bq7NNUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDcACX272nXSSJV45CrcA4soD3ROEKt5hcp%2FZ7Vp18Vt%2FDgLjCVr2rrpj5dawTfryQ0VpheFhiuKQzDcdcCjfnb3NtQiggsxxVFczkdDmOmAQhFqBzXiDk4s0IE65zPqMKLhOfMb79hgSgZW%2F%2F3WgVgXklPCvMYU6baMKVW25c1slBcQBon%2B%2BUnopgCdsuJRKBzxh5yeE2yx%2BpSBOKIhBrl4cAXAFapOr8KiH%2Byl8ph5NhrZ0Gbm9fR86SLH%2F6LBsDrmW%2FYaXLNuL9CQAdmMu4bRTK5oDxvP%2FrsqXFona%2Bt4VDCCuhI2Zxr99VpYcrmPO0hTZS36wVmCSufVyKXs3kNrL%2BdVvC4Ojax0w4WeEW6z5lByjMWzMeXQ8flHFPU3IsnOdmRz7iIw%2B2AcYGE3rStAKDgD9ycuJvI4hjJGAGnpIOWyVs8ZX0t495NUyOgehFeeT3eMhh31Pw82RVFCkejp21bHB10MUDwjT1PJvh9XadrfwaBrQ8vunlkwp9WVfn9NJrnbJNSdtXfsYcqzWOdqkotj0wXmPtTAGzCoTQ678EfcaDQ9l2xKRb4edgmXyjoKIKdv7kDZCgA9PIgWHEGpPeMX99b17vJt87eyI1UAaGQW5%2BFIlzcLi7STcnEO48c%2BNaku3iN1QBXdMMHj8r8GOqUBzJmuQObD2GhRZqCqEsqM1GOWZAQjWWl8HomjddSbOdFvQW5r4Plw0l4xC8NPileAm72lz9tbRPwwWQeoCVcfEOPhehLsp7ItPds%2BgYovrU7%2BVDgkz7fjT16uLFv7Qjz3KYjq2Sg4c8auLltS7gSl%2FGE0MvuImDF6M01ggUxyZlq77ccmJnQxZXZsbRvby4ctCUoGnqtCoVA2wGJaGwoze0y0aDVA&X-Amz-Signature=d2309114d41d2be3bf060b2877d7904066b454e122e194bc1238a49251d64dd4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377XSL2G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxYcFJTIT%2B23u8uZWU3IcwuwLHh0ym%2FkOnCwgG0Gp1%2FAiA%2FmJxiDY3eD1ovIaZ%2B0CaDG3hM9LFVDWjcljbbU3LyDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMGENq3pYLLtu0QlIVKtwDHlapqnGFCmLQScRfNiCUtw%2Bb7wrxtjI7fjN2hixWEBcl0bfr4WoMrlBe30r8z%2BtYvcccPx3lo9cfwSwKEfcE4nckTVwwzq9kZvDcut5V6FU044tEhBSXDBDqOw9sriRq7bWzUigeB7AB8WhzrX%2BChfDXSAaSDP%2BH4GzgkCDC%2BNY%2Bfi1qYeTBVUO6DCk%2FKnK6QfZBMgdiDBx9eeGaRtVyxPsoa3Tkxb4%2FBKtn%2BjJOwQTVl2DzNjDoJL0iIMxgN0ufn64k84dAEa%2FqGpilrfyhYTAxzQlWSvFl6kFzOoOKAv1uFgY8zyC992s7BsVOhPQOD0tYKPb4bp6hNThV6a2JxzHHnWkyKwpFZ8O0oxV%2BArmpmnddmkY%2Bgx9OTqmLmEIBWBeL17U4r7TE%2FQOkI1aKxA2UpOJXEW%2F3Ii5p6TlQ6Kg8CYla5DWPElgKtCQh1HZ79HlpnzUH%2FP40xmudkA0uCSHQzWuGRAOFOM26UiVr5qNVArjEq8MkEhOn6G59HMhjnxp5Bl%2BUadk3c3Fjc5qqu%2FV0JBYvUiiJcdLh2Ym5mC0dsg3PPOh18zLbbxYYWp82Z1%2F1orZ%2FzCQ6ptUIl7cmqbJifzeatRZTqefbYTkgTPIFI42uQjVeebTJKMMwx%2BPyvwY6pgFqxGRcUrcQvpUYI8kTaC9z%2BdsYZIIQ%2FEBAoSlgOTD6dXLO5oRHpliokWhPApzOormuI7Z5KggLEkldWfTLluQvBQtFlvqOnX0RH%2FId3nijsogZsO9pfP6YLtPEyTYFaJ2hJ%2Fcn0VQilu8QP1xxj2dwwWMvWg0SKHmV9BjrOTfOEq9JQbcjhob63dom%2FMLMxNnCNQedd79HFOaXK6xycAdyFkZ4ZErR&X-Amz-Signature=c42d5105e2a90cf444ac7fb20f27ebaa60fa99ee035a1b87207f7ce85822cb44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHSLUS7L%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDW1eutqNfw5901erTk7FjQjcBfmCJwo3WJCIbnBQbVQIgVcLKBA63f94oAzrLkIDRYzF4DLU4CJw60OpivJJaBx0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGdTqqSPeGWTCg%2Fp4SrcA2rRNkwid0s0bFJbMlHyoWCRMk473aopoqGfLfB9NHLLs%2FqY3Ct0M2DoCbFiuO41AsjxgLjbY4T%2Fz3HY8Niuf5fvLOnsTmSWb5lm8lAIGmRkYf%2FQxBbugQjVNExSuTZ9%2FvtbfCCdKB7gRp2iqd6tQBdFjJ5OUD%2FMv8XvSGZ9%2B%2FMJdK82lp6EnsqAQMvr3YJX2jPbooUmuX5W4lwqWs4%2BuNPx82yUfJlMWeBJ8AQU3%2Fy5A3wQqsKQdySlhTBVevsy24r%2Furv4BWpWIVp0nLpKbRJd9rZrC6VTGugwlG426Wv6h0D4PPP1d3TpU7cj63cnhAMlvGSS8YVVPj2U02WmBs5Uoo8R0tyTeXtn4lsnUQ4PG5gYfYAW%2Bw0W%2BFw6Py%2B1dQyQcC%2Fg%2BmRMMSpr3E8MSZqP%2FLnj977WDe%2FskmaU%2FWe%2FMeDX%2BagiT9DT6ayghmbvYPBsYKfGWvP5r3m19LjbS%2BolhtBAHDZ0Zjfww7VjQuHCV%2BckHkFHyaj0xMWsLPuPsK4QPIyfWaWgZsau%2BJFm8UvncCNcYe6qomlwZ%2FrNJMTMhmXkP7aVJEOBu%2B6GUa6Up8X9DdBcgzAz7i%2Bejj%2FuSD%2BM77H8Ib2b2IYV%2BTWzsNdBeslNlyBD3K2guKB4MPbj8r8GOqUB3E8Wobaefv4apZPqm%2F09J01Pkyv5QruV1UdiCBIKT%2BbgfBxl73mweu5rO8kdhHtFoCLJnx2fYQwsgkkMVLwWdwWBh6xD4urydRHZmCAHDvyyUAovRJthFxMpgeiow7v%2FjmEDuclglRHpRvbkcISmAxCBQlOWEYOB2uxUNiG6rXIHmnG9rzq12PZ%2FK3V1%2FQhaTtF6J%2BYCnQPO61miSYQEGoLCB9wI&X-Amz-Signature=6d1122c8746771a3f9b29327491a560e444ce95d67e8b4e6dec999ceee5c45a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVIA4QD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAW0YBGNouPBmNpTpk4LwQS5gDmsNHBRohrnbSgnNE7AiEAkHsG8KEJ5wiMfRWplP%2B1lKfyLR71fe%2B5xZi4J%2Bq7NNUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDcACX272nXSSJV45CrcA4soD3ROEKt5hcp%2FZ7Vp18Vt%2FDgLjCVr2rrpj5dawTfryQ0VpheFhiuKQzDcdcCjfnb3NtQiggsxxVFczkdDmOmAQhFqBzXiDk4s0IE65zPqMKLhOfMb79hgSgZW%2F%2F3WgVgXklPCvMYU6baMKVW25c1slBcQBon%2B%2BUnopgCdsuJRKBzxh5yeE2yx%2BpSBOKIhBrl4cAXAFapOr8KiH%2Byl8ph5NhrZ0Gbm9fR86SLH%2F6LBsDrmW%2FYaXLNuL9CQAdmMu4bRTK5oDxvP%2FrsqXFona%2Bt4VDCCuhI2Zxr99VpYcrmPO0hTZS36wVmCSufVyKXs3kNrL%2BdVvC4Ojax0w4WeEW6z5lByjMWzMeXQ8flHFPU3IsnOdmRz7iIw%2B2AcYGE3rStAKDgD9ycuJvI4hjJGAGnpIOWyVs8ZX0t495NUyOgehFeeT3eMhh31Pw82RVFCkejp21bHB10MUDwjT1PJvh9XadrfwaBrQ8vunlkwp9WVfn9NJrnbJNSdtXfsYcqzWOdqkotj0wXmPtTAGzCoTQ678EfcaDQ9l2xKRb4edgmXyjoKIKdv7kDZCgA9PIgWHEGpPeMX99b17vJt87eyI1UAaGQW5%2BFIlzcLi7STcnEO48c%2BNaku3iN1QBXdMMHj8r8GOqUBzJmuQObD2GhRZqCqEsqM1GOWZAQjWWl8HomjddSbOdFvQW5r4Plw0l4xC8NPileAm72lz9tbRPwwWQeoCVcfEOPhehLsp7ItPds%2BgYovrU7%2BVDgkz7fjT16uLFv7Qjz3KYjq2Sg4c8auLltS7gSl%2FGE0MvuImDF6M01ggUxyZlq77ccmJnQxZXZsbRvby4ctCUoGnqtCoVA2wGJaGwoze0y0aDVA&X-Amz-Signature=2794fc28168eb93af3ab0eeb470102b602e5df5509c55eaa938fcfbd7970527c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
