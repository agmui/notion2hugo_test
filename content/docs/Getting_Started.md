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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ISTUQS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEPTJCMSGROetANte1nPJcW9KQs5vgvO%2BYoTRtIfKJBAiBD%2BIzAC510K9EuCACszlnr5hh7sj7L3dsRMrjSEV%2Bm%2BiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbtra3Dsq0ML5QxWdKtwDfBhgzrlgSleDEE7mukJ4FFjkk4FJA%2FNBxeL3FMA%2BrMwQQrmtA1cuxJX8Gf%2B047ndDDMyA9%2Bt5tCkYcwX%2BEjMGw20UrJ2ALURn4JsVfdjniPo2mbWHuSoZimmyErd5OqeDC0glWcNiH4eHKdWI5%2BbUdCYLWXgKk4xxcefAbMi%2FRdWHs%2FeemhL8OFOTZdeActubbUaZ8cvuW3AcSS9Q%2F85mddnV5E537bKyZHLvwSSSPanl4i8ZWWHMTU9BbwxinHJqx%2FvbLjLkEBdU9rwKGnNIrONqV2WlReKweRSHs8AJDl%2FwNDEDgfNcC4cc2hhFKoss4R%2FISireO1oda4HN%2FsPjvY4zezaFERN9qkYlxzD23YDL0fkhCvLZRx2RqHAT3f5eA0gP6oUWVfsJT9DD1z3ly6%2BOuII3qF7U4E%2FZiIawZgHxmrwpUvPeCq%2FVSKueBxHHoZR%2BtLnkLhIBWYXaovwAR7ubyrNZl3E5cC%2BgZ4TxYQw%2FT21RoUArcEOHOBswc3A8XwWO7QsmxXxmrzufCjIzDnvtfdpiab%2FwAMzJoGTo%2BBLT43vu2FES8DS5mUfMKrR%2BUWgZ0eRiepNxmakCcky0OXqi%2FkybynYH34BpcIk0zdNjuv6gUCEYLgPkFAw6K%2FpvQY6pgE4VbPohz8JXeI68VHLnUq1eKRuGXtR97NkmliBaADdTZrDyAIX3%2FacmM%2FZlgyDIOzeDvT9m3Wq%2FfwGzLf%2Fvybwq47e5y8%2FPBvZmsb6U%2F5y7GRCuJPJOJ%2B5XDPKIrVzcT1Aea1FDqFaG5tFbpHtLMwQDrqOpENHIappLF%2BrY9Yxn2E1A8AmDbLiLZTFRKUK47L5GW8fqH75H%2FSxT%2B5wu%2BVE0tEvdhBq&X-Amz-Signature=005de4963134252a20732f74a44991dc55205bc5d833a41d3b9da355afd8cb17&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ISTUQS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEPTJCMSGROetANte1nPJcW9KQs5vgvO%2BYoTRtIfKJBAiBD%2BIzAC510K9EuCACszlnr5hh7sj7L3dsRMrjSEV%2Bm%2BiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbtra3Dsq0ML5QxWdKtwDfBhgzrlgSleDEE7mukJ4FFjkk4FJA%2FNBxeL3FMA%2BrMwQQrmtA1cuxJX8Gf%2B047ndDDMyA9%2Bt5tCkYcwX%2BEjMGw20UrJ2ALURn4JsVfdjniPo2mbWHuSoZimmyErd5OqeDC0glWcNiH4eHKdWI5%2BbUdCYLWXgKk4xxcefAbMi%2FRdWHs%2FeemhL8OFOTZdeActubbUaZ8cvuW3AcSS9Q%2F85mddnV5E537bKyZHLvwSSSPanl4i8ZWWHMTU9BbwxinHJqx%2FvbLjLkEBdU9rwKGnNIrONqV2WlReKweRSHs8AJDl%2FwNDEDgfNcC4cc2hhFKoss4R%2FISireO1oda4HN%2FsPjvY4zezaFERN9qkYlxzD23YDL0fkhCvLZRx2RqHAT3f5eA0gP6oUWVfsJT9DD1z3ly6%2BOuII3qF7U4E%2FZiIawZgHxmrwpUvPeCq%2FVSKueBxHHoZR%2BtLnkLhIBWYXaovwAR7ubyrNZl3E5cC%2BgZ4TxYQw%2FT21RoUArcEOHOBswc3A8XwWO7QsmxXxmrzufCjIzDnvtfdpiab%2FwAMzJoGTo%2BBLT43vu2FES8DS5mUfMKrR%2BUWgZ0eRiepNxmakCcky0OXqi%2FkybynYH34BpcIk0zdNjuv6gUCEYLgPkFAw6K%2FpvQY6pgE4VbPohz8JXeI68VHLnUq1eKRuGXtR97NkmliBaADdTZrDyAIX3%2FacmM%2FZlgyDIOzeDvT9m3Wq%2FfwGzLf%2Fvybwq47e5y8%2FPBvZmsb6U%2F5y7GRCuJPJOJ%2B5XDPKIrVzcT1Aea1FDqFaG5tFbpHtLMwQDrqOpENHIappLF%2BrY9Yxn2E1A8AmDbLiLZTFRKUK47L5GW8fqH75H%2FSxT%2B5wu%2BVE0tEvdhBq&X-Amz-Signature=422ce697b582347bab0d76c54f9c436686b06e276be2ef5365737dd49ecdaf12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LD52XYA%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENdp%2FVkZHh6%2FhlZ5f4TdD69blfpygUSZtmOKkf%2F84vSAiEA%2B7WQOwgxlfKAjgl%2F7g7CoEBr2iWpIMDlH2VLHKA3qZcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMc8WaJ6H8WV2XrACrcAxtwtkDij4rsosU%2FXELO0qHtk%2BqxSPbzzNQiysRNurXNKaRFqST9TNp%2FIBtaD%2BJft0x9s3nHp73czJ7LFDjx0pYA4Bnjtj9SdJtr9%2BOOjpY5TD7eeGea3nzxYCCADKblKVPVrSkD1AZacnMrCoZ24w8CW32KXkDqS1epADhySnAH39oiNijJXZ2wwqUVLTx%2FlXrKEe%2FoeTdZr611Qhg1QTGUBGFJy%2FUIi5IOKMh36E4tabAsBSQZWJMrnGn9aYXVUK5rBq6MOPoLPtbovnPoL1clH1TuN961LdQMG6ftsmkYujQ9mAx1P6Boozekzpn9yHiy4LeO4f3CcYSxiiwFeC6mq%2FLdfcYPfPv9%2Fc7uS8MYTr%2FNn53fOAwqlrMtNJaDm2OMGh8%2FLz%2F%2BK1XlcSHvIv6q64yPm%2Fn%2FKxxXdzwHxvYM%2BvwKYJ0%2Bl7I%2FdLUua6z3nzgyYD8Z6DtlxLc71KpohSv5uNM5SmVsdYsGmWWpNAg3izmL3HwVahrWm%2FljmKp%2FIiR%2BmNjgONTYO7x7HdAqtamw9nD3JPj77Jyf8jY%2B1PERpTNhdcEl88vgjbMaUa5hd%2B7YN7HO%2FyYwID3luiKv2ST8rtNRiwyI%2BvieGeFUaO9DMI2jMicmIZrApnwRMOSl6b0GOqUBLCjJ5ZAp7jFTRaUEgq%2FovZzWuy3%2Fl2RJiVJUelb5DAsvUDiEYx2ZEzx3XapxxLQRcRiqOhhYd%2FQYVm6cQ8wp07y8Pfk5hTUipL56WIDrt0aPaVkseLd2spXKFvhDSigsxwT2loYvXn05zmOop%2Fs8l%2BxsdUzopYNgNS9y1urljuDWJuOQPYxs4uzVC7PvmpzefqjwnYokmJcG3E8wfdQi7S3525MP&X-Amz-Signature=001de0c8461556d63b8d576b9756c6d367bad6d5993d749b6e3b7b6cff9f6213&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZD6MQAC%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3qQstDXY8bkpWcEpJn0jJWI0EbRTa%2B507WWs6BnDZ4QIgDBVzjC0SEH1Fa3cQzO2IyslCP7U3qTYZgDc%2B3Rm0TkgqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1L0ezKL9%2B%2BeJ3LESrcA8J66WDgRvFsvQpW2XLce0DPtrw167B5KQPqnUcPiccXnY%2Bn%2BDsp8yYS9j9jnJFv3R4g%2B%2B%2B7HBG%2FtkgbW07FCo%2BuWu0i7YYMGKOJ7sSSsQffWOFKVqwAkcqwdO%2B%2FbVPRpNoOJqLyGi8C%2BUSQkNt8t4ehh6RWy6DbuUnQ%2FVaKx%2BzGKv5l08m6P91xZGYdB4qMT3FmI1XLzFLUVKgBA9rTihELOJNXec7GDQfA6H6qCZRqpuIu4GaaDuTtGM%2BOMx2aFgxVhHwYa%2BgWHR0ygMs4WCkEqjw8DcTXIooFsc4lRmAgkoceZeOEluuQS5MMdg2orcrMn311GrCwrRnJTGga4NSyN0njHl1xCf%2BvowTWdE%2BiYl%2FwCLQ5N4Ykrwzo9%2FTqRXH8JBWtqqJZa7e%2BtZSZUlYzDESztfJwG18jjqksbw5OyXIQdl6G58ChJwBs33X%2BbB%2FdmERmdvlBYwMrhRoJ1%2FVs5vwmtzUtq8%2FIA%2FWGt947KuKOIrsIzLmbP7LV0K3bkQMGeIERQ2NJHskqluJGVdOFVtCGYj1AaJ%2F4j3OVi1pJ2bZJUVEJGCe4TQPXfvcA2eW1jFi1LL6w77vgsXwiA%2ByehpF%2BEY9Ec2PvYagkGjZgjt8XesPYmr2s%2F0buMN6p6b0GOqUBF7z9cgkCudMoItqlkWzh5ByXxCwRBOFxF%2Fz4g200VupO87F9kr5D5Z%2BTL5V8QVVWidiLyY6%2BEwge3vUdepb7XR%2BhQvHw0JVz5MZ4FTWPQ8mbBrpCwv658GZMW4uDUSgAi7DaFhkdnNrL2uMyxnDwgvOt%2Fq14LHNX5JFW23CXA5jbLLRRRtogD3pY5y6bZDUp8VitPhY85F8yMdRCF6wL%2FZx4CP4H&X-Amz-Signature=bdee0f1a619ee9baf474a39b4abdfaeeb859988c9f8d98d8383743909215828d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ISTUQS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEPTJCMSGROetANte1nPJcW9KQs5vgvO%2BYoTRtIfKJBAiBD%2BIzAC510K9EuCACszlnr5hh7sj7L3dsRMrjSEV%2Bm%2BiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbtra3Dsq0ML5QxWdKtwDfBhgzrlgSleDEE7mukJ4FFjkk4FJA%2FNBxeL3FMA%2BrMwQQrmtA1cuxJX8Gf%2B047ndDDMyA9%2Bt5tCkYcwX%2BEjMGw20UrJ2ALURn4JsVfdjniPo2mbWHuSoZimmyErd5OqeDC0glWcNiH4eHKdWI5%2BbUdCYLWXgKk4xxcefAbMi%2FRdWHs%2FeemhL8OFOTZdeActubbUaZ8cvuW3AcSS9Q%2F85mddnV5E537bKyZHLvwSSSPanl4i8ZWWHMTU9BbwxinHJqx%2FvbLjLkEBdU9rwKGnNIrONqV2WlReKweRSHs8AJDl%2FwNDEDgfNcC4cc2hhFKoss4R%2FISireO1oda4HN%2FsPjvY4zezaFERN9qkYlxzD23YDL0fkhCvLZRx2RqHAT3f5eA0gP6oUWVfsJT9DD1z3ly6%2BOuII3qF7U4E%2FZiIawZgHxmrwpUvPeCq%2FVSKueBxHHoZR%2BtLnkLhIBWYXaovwAR7ubyrNZl3E5cC%2BgZ4TxYQw%2FT21RoUArcEOHOBswc3A8XwWO7QsmxXxmrzufCjIzDnvtfdpiab%2FwAMzJoGTo%2BBLT43vu2FES8DS5mUfMKrR%2BUWgZ0eRiepNxmakCcky0OXqi%2FkybynYH34BpcIk0zdNjuv6gUCEYLgPkFAw6K%2FpvQY6pgE4VbPohz8JXeI68VHLnUq1eKRuGXtR97NkmliBaADdTZrDyAIX3%2FacmM%2FZlgyDIOzeDvT9m3Wq%2FfwGzLf%2Fvybwq47e5y8%2FPBvZmsb6U%2F5y7GRCuJPJOJ%2B5XDPKIrVzcT1Aea1FDqFaG5tFbpHtLMwQDrqOpENHIappLF%2BrY9Yxn2E1A8AmDbLiLZTFRKUK47L5GW8fqH75H%2FSxT%2B5wu%2BVE0tEvdhBq&X-Amz-Signature=08eeec8e8109a00cb4a45d821f76a0f98200256a1a0033813577bb7d594f18e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
