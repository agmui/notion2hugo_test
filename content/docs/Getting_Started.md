---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5C6LW33%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlY0BUQFuSxMQcVyNa4EJZ56ZNsjbcY17SClntK%2Bc93AiEAkVlX2yFkXYyMq%2BHi7kfH4iQN9gzBCgUAVwCTi9HgmTEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8UuBIBXkstXhJCpircA3aYEGxThO1gJLK6pLPI2PnBxvK9YYbmPHHyD%2F79KtvAzc6ZomAcJ4K7irEK2XyhubYz9%2BwnJs8pKrGi%2FwHSJOceZkIvrzcNCtzD335ssLvHXWI0V1QlpNgEffjLhOH%2B315KPGGkHFgKL5Fcgam%2B6OSvofXNGs1w5qJuM3noyOOusFd5w3ZB6BUIVmBx%2FYW0GKB9Zhey0t2S%2FEIBdSAuCJ9z%2F4eMfMa%2BVMFUtau%2Bwh1fuNe2bPNB6g4GQBJ3W9hX%2F2u4cqE23Vsd%2F1wOxOlO9w%2FVayrQHU4Je31WTTGDCDpqXC7%2B0ejDVkzyHY2L9BRhwEKIVi6BJUN7htxIxUZunSOCz92cDOhE7tYAvf0ADddU%2Bfn%2F8eMwTcxptd%2BKWlD1FjVibe4F2v5rAwhLErGnFeYpRcvzEIUV2vHfcL4sGjFmA1TL%2B%2BM29Zhg0nJBvRRWv8jVad80JfyFlcPAbqHc1EFHjWtDL3oeQ3pQaVc6eoxlwDJK7p6gCyBPWXcmobcblKhwqCUn6iVPukHIX3Fr%2FTXv7pvbZzb8vwkyasDpKR01wpkx%2FMNh9SkviubyKTgRHt9nt%2FJwptV9huPg4qMnoMBd4cC6abPNHyHVdoSC2%2BP3YhzKG%2BKL7VP1cwemMMLx%2BcsGOqUBpf4%2BbkrQjJNbc8hedTcOoA1E7AUXB%2BVM8NI1ztbToMZasCWtFFzpp0vhwweBpQ%2FbK0DQSUF7wnaPd9DpVXm6jNyRoQx50CRngrGWV2VpHejkOTfG5rKOHH%2B8ZGF0YzFq5GrVjg8R%2BmGBqDcX4FQ%2FVdrLMm191JYRhzd6gPj95ORf9AfwKwMhlhPTxnA2ZpfOILS%2Bi1OstuI2wBmn5sJWTchk%2BzkE&X-Amz-Signature=07a784c8b8bfe17c1b26f460fc943983f1c4cbb03b2b3319b096b22a29319eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5C6LW33%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlY0BUQFuSxMQcVyNa4EJZ56ZNsjbcY17SClntK%2Bc93AiEAkVlX2yFkXYyMq%2BHi7kfH4iQN9gzBCgUAVwCTi9HgmTEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8UuBIBXkstXhJCpircA3aYEGxThO1gJLK6pLPI2PnBxvK9YYbmPHHyD%2F79KtvAzc6ZomAcJ4K7irEK2XyhubYz9%2BwnJs8pKrGi%2FwHSJOceZkIvrzcNCtzD335ssLvHXWI0V1QlpNgEffjLhOH%2B315KPGGkHFgKL5Fcgam%2B6OSvofXNGs1w5qJuM3noyOOusFd5w3ZB6BUIVmBx%2FYW0GKB9Zhey0t2S%2FEIBdSAuCJ9z%2F4eMfMa%2BVMFUtau%2Bwh1fuNe2bPNB6g4GQBJ3W9hX%2F2u4cqE23Vsd%2F1wOxOlO9w%2FVayrQHU4Je31WTTGDCDpqXC7%2B0ejDVkzyHY2L9BRhwEKIVi6BJUN7htxIxUZunSOCz92cDOhE7tYAvf0ADddU%2Bfn%2F8eMwTcxptd%2BKWlD1FjVibe4F2v5rAwhLErGnFeYpRcvzEIUV2vHfcL4sGjFmA1TL%2B%2BM29Zhg0nJBvRRWv8jVad80JfyFlcPAbqHc1EFHjWtDL3oeQ3pQaVc6eoxlwDJK7p6gCyBPWXcmobcblKhwqCUn6iVPukHIX3Fr%2FTXv7pvbZzb8vwkyasDpKR01wpkx%2FMNh9SkviubyKTgRHt9nt%2FJwptV9huPg4qMnoMBd4cC6abPNHyHVdoSC2%2BP3YhzKG%2BKL7VP1cwemMMLx%2BcsGOqUBpf4%2BbkrQjJNbc8hedTcOoA1E7AUXB%2BVM8NI1ztbToMZasCWtFFzpp0vhwweBpQ%2FbK0DQSUF7wnaPd9DpVXm6jNyRoQx50CRngrGWV2VpHejkOTfG5rKOHH%2B8ZGF0YzFq5GrVjg8R%2BmGBqDcX4FQ%2FVdrLMm191JYRhzd6gPj95ORf9AfwKwMhlhPTxnA2ZpfOILS%2Bi1OstuI2wBmn5sJWTchk%2BzkE&X-Amz-Signature=b586e2c8d8a65ff47e11646381382efb575fb62d0b09da33aa442118ae4c7824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5C6LW33%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlY0BUQFuSxMQcVyNa4EJZ56ZNsjbcY17SClntK%2Bc93AiEAkVlX2yFkXYyMq%2BHi7kfH4iQN9gzBCgUAVwCTi9HgmTEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8UuBIBXkstXhJCpircA3aYEGxThO1gJLK6pLPI2PnBxvK9YYbmPHHyD%2F79KtvAzc6ZomAcJ4K7irEK2XyhubYz9%2BwnJs8pKrGi%2FwHSJOceZkIvrzcNCtzD335ssLvHXWI0V1QlpNgEffjLhOH%2B315KPGGkHFgKL5Fcgam%2B6OSvofXNGs1w5qJuM3noyOOusFd5w3ZB6BUIVmBx%2FYW0GKB9Zhey0t2S%2FEIBdSAuCJ9z%2F4eMfMa%2BVMFUtau%2Bwh1fuNe2bPNB6g4GQBJ3W9hX%2F2u4cqE23Vsd%2F1wOxOlO9w%2FVayrQHU4Je31WTTGDCDpqXC7%2B0ejDVkzyHY2L9BRhwEKIVi6BJUN7htxIxUZunSOCz92cDOhE7tYAvf0ADddU%2Bfn%2F8eMwTcxptd%2BKWlD1FjVibe4F2v5rAwhLErGnFeYpRcvzEIUV2vHfcL4sGjFmA1TL%2B%2BM29Zhg0nJBvRRWv8jVad80JfyFlcPAbqHc1EFHjWtDL3oeQ3pQaVc6eoxlwDJK7p6gCyBPWXcmobcblKhwqCUn6iVPukHIX3Fr%2FTXv7pvbZzb8vwkyasDpKR01wpkx%2FMNh9SkviubyKTgRHt9nt%2FJwptV9huPg4qMnoMBd4cC6abPNHyHVdoSC2%2BP3YhzKG%2BKL7VP1cwemMMLx%2BcsGOqUBpf4%2BbkrQjJNbc8hedTcOoA1E7AUXB%2BVM8NI1ztbToMZasCWtFFzpp0vhwweBpQ%2FbK0DQSUF7wnaPd9DpVXm6jNyRoQx50CRngrGWV2VpHejkOTfG5rKOHH%2B8ZGF0YzFq5GrVjg8R%2BmGBqDcX4FQ%2FVdrLMm191JYRhzd6gPj95ORf9AfwKwMhlhPTxnA2ZpfOILS%2Bi1OstuI2wBmn5sJWTchk%2BzkE&X-Amz-Signature=c9bd079223abe22135bbca0aeecb25896b5aacb121bb939a108345f7c856bbb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GH4UXA7%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPAgJiyI1IO5xTFKtuqb6CX2aoomEiNkClnrI2JDJynAiBHjeQRqehmg1t5G%2FtK2t5PlIe8cSNcExnqHmceL67SsyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAmD0O7e%2FQMaHwYg7KtwD0mYrlvv7iE7KPIkE0HG%2Fqmad5KipWWjwHrqkE%2F%2BFNztUCHoAIGEpY3vSBoxQlk%2Fj2xhWtQDm%2FX3QfAfEjgikdE%2BwQrt%2BV1hspSgEn%2BBavvCtPsFeIF64G2IOYGWSM17NxfsBh6cYqhxLekxFwyDJ58EhH0hI9StgpKc9kA3GFeEYTL7YMzrgR5uxszCF%2BjNKdlj2lViHDflFJBi%2FcLt73NWwrKDRROiywmAqo8q%2BtAPzf05lcePFSgBmBmMVbzt5MYilVEVOPW%2B%2FPYdrywWgB1vJu83nEvGYcy7j6nOK7LWA%2B6ffiqCgwWFy%2FvqD3ofv9vOuy5JZuZgXLz4ye16qzJnmse2NBzq%2F4h2AUh5oGtfgckssTVWD55Ej1%2BNftM6lnpCPbfsioTgBmjkO2BKjni4Jr%2Bqjz%2BoWy77iK%2FUjVrD8IICOk6crqGSL83UGue13RxcCuqNSgOw5pVR9rEc295tFCzKuhsOML8JY9n%2BKBN2Ssr3fU%2BI8zPWkLmpkOv5AsC7VyzjLqfql0mKNqvmcFJn2GsocWVpPaXvecQF9KrQsorP4EHniXeZlv5%2BkKXBGHyB2yEzx98RrFRfwp8Fl0nEq%2FLexnb8XNKrhltjFLp9JUKWiAW73PX9Ge0QwuPL5ywY6pgGTA28uGosNb9N%2BG%2Ftl9WUbfk2hI3ha8BPPdIsHmRv0QU1Q5QFygJ4avBFuwGLhrmlQxnfRh%2BGt1%2FZqu5AWDoBQkPQsCLPdUeZa%2FVdAhJBjslyLFfR2fHfAPLOHWqzaiElXQCMvNQ3HEn66ZXBfoAp7Js5y8uNVoTshxwYu%2BCkMHXCiS3mLzM7qBXvxWAfG54J8rlfNOwE351Mqvm2fZ%2BoYgP2jy3TA&X-Amz-Signature=d103c7e987ee4bba4327cdbec2af81e6b037dab7faa4a1e58ea9fd948b2dd30e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NEUMEPQ%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoVseFc%2B3NVur9lziQ81aqKNzYsJNFg4nCkFLzhgr2YAiEA2WquHLd7sD5F%2FcbxZG1n20Qx8esxx2k9Oop67D%2B5wAoqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuqgsOcv7tWBaQzFCrcA9OA86%2FmhalAZcmh14n0Aean46LGEGHYBzLFaADJzOtGn9BnuvO7TkzjCi6VNB4lL88wJY8P049xGRjKWAlUqkwyM2CA%2FuIIJUKqPoK2vDbFlvBZ7DVj8iKjtb1o3oLekjaIUSWQcW9W6erOfnH0WLrYuSeKkM3xl07ra3nfP1WdMlA%2FmQKsW%2F309LZUabgrnkKdd%2FhNJn8rbjWS016DE6IkkpxYNAWGe09SV0IIrXnWT7ZGVuDOGpT2WhSUSc7HYmjf6fo%2FC4SbUCNtINEROVhUIWU7ifEeeKTLj9rtkdGMQ%2FM9RSg3vr91KX0Hqjb2MEnvE2IE4MruPTdTbelby2pJxc6W5baqVzn9DI7XSGZU1eWG1YreAl4gdAB6Q2iF%2FMNVEy%2BMWnDoAW1VTEKNVpr%2BDl2M9iSS1K1FtHIkK%2BiktVT4c8RHepZ4x1p6%2BY8gJv73CCQG%2BeFKAiJS7ZDH1Kq2uw5ZMYB6xKTOV%2F86%2B6fLbp0CqmwVvprw9eS9U1zv2S%2BtbJu0SQvqUQB72H2qHiUTLI4QWo5jkBxzqnYjkI4xpA65F8AGtd95fV%2F%2Bfn33965W3a6yx768CBgMTHLn%2BSqeXjo495JhdcT0wLIO9RyqIf3%2FkVWH%2F9r6%2B3Z3MMTx%2BcsGOqUBtlYAKdZv7U8iwTHYpq4EQE16hzH2VqcpCMdqVGCAY0SuauEXhX9kzUcD0IXdqgfmImUoF9R%2FQx4qoOX7WGZo0%2BbvjZC6CYTRZeDeLjEEQA5j%2BJMgbAzaYE9jKRKlR93RBx9M%2B0kFGm3I%2BgkmxRoZeVIytN8JEZm3zW%2FfOiSaFLuFjP7JW9XDSA84iCJ3OXzxlmGep2Kfud0njYhbo5Rfi2RrDJQ3&X-Amz-Signature=320833ae24d6f72dc3fb97e99c5668807ea8dd62e2f67a2bf905abb10ed5d72e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5C6LW33%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlY0BUQFuSxMQcVyNa4EJZ56ZNsjbcY17SClntK%2Bc93AiEAkVlX2yFkXYyMq%2BHi7kfH4iQN9gzBCgUAVwCTi9HgmTEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8UuBIBXkstXhJCpircA3aYEGxThO1gJLK6pLPI2PnBxvK9YYbmPHHyD%2F79KtvAzc6ZomAcJ4K7irEK2XyhubYz9%2BwnJs8pKrGi%2FwHSJOceZkIvrzcNCtzD335ssLvHXWI0V1QlpNgEffjLhOH%2B315KPGGkHFgKL5Fcgam%2B6OSvofXNGs1w5qJuM3noyOOusFd5w3ZB6BUIVmBx%2FYW0GKB9Zhey0t2S%2FEIBdSAuCJ9z%2F4eMfMa%2BVMFUtau%2Bwh1fuNe2bPNB6g4GQBJ3W9hX%2F2u4cqE23Vsd%2F1wOxOlO9w%2FVayrQHU4Je31WTTGDCDpqXC7%2B0ejDVkzyHY2L9BRhwEKIVi6BJUN7htxIxUZunSOCz92cDOhE7tYAvf0ADddU%2Bfn%2F8eMwTcxptd%2BKWlD1FjVibe4F2v5rAwhLErGnFeYpRcvzEIUV2vHfcL4sGjFmA1TL%2B%2BM29Zhg0nJBvRRWv8jVad80JfyFlcPAbqHc1EFHjWtDL3oeQ3pQaVc6eoxlwDJK7p6gCyBPWXcmobcblKhwqCUn6iVPukHIX3Fr%2FTXv7pvbZzb8vwkyasDpKR01wpkx%2FMNh9SkviubyKTgRHt9nt%2FJwptV9huPg4qMnoMBd4cC6abPNHyHVdoSC2%2BP3YhzKG%2BKL7VP1cwemMMLx%2BcsGOqUBpf4%2BbkrQjJNbc8hedTcOoA1E7AUXB%2BVM8NI1ztbToMZasCWtFFzpp0vhwweBpQ%2FbK0DQSUF7wnaPd9DpVXm6jNyRoQx50CRngrGWV2VpHejkOTfG5rKOHH%2B8ZGF0YzFq5GrVjg8R%2BmGBqDcX4FQ%2FVdrLMm191JYRhzd6gPj95ORf9AfwKwMhlhPTxnA2ZpfOILS%2Bi1OstuI2wBmn5sJWTchk%2BzkE&X-Amz-Signature=7650444e6c0e4a178c6243a71f409c7d4528b370b56efa71be108bf1a0046590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
