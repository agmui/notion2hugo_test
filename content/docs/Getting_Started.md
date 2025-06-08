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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BG6SZJY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaGCDH7%2FPMB1fiVDE3oxRxCL6J5T2j8u%2FJN76cE0WYAwIgMIOpmm0azF6DiEAB4HXpOTSQ9F6t22Y6w6vtzcBRClgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBADyvNNUgd5OncHeSrcA0hnDRs%2B0mt6cmj%2FJgTfKCE7tW5z8aJTsxmHf30DFSfHllizfgpFZt23tt9ZH%2BqW6gKJ42oTnFfuExmUcaNDYU4i0gPptEUq52v8yCiCCeEArbt7Uicwpl4eiWb1UCziwHFTW1PJgMTtZVyXsqbpJ8wh2ptCsuiAr95p64QlyzBgvbhuBHjCrvViJBc7gLBAW3Vp1L%2B1mRnOI%2BXXAGUFAs7vYp02h4nBknvCUcVVzgHPlFVLgLzyUMfC5tIhZvN38OaNmBoc9MjSSE2gn8u0jk%2FqQOfnvqvc7FlEnJSuH26go2AYxKlzLFQzyTrbnI8Y083DlcczY%2F%2F8sG55fsksZ%2F3Tc8MCDFtS7L6ML8xSNLGY%2FF9NGZ078pv%2BJ1IciQfSe%2BWGofbGmDNGwch7MYAiHXaCGPTbrFFQHi22gpSscZsAjAMAgXDJUl7ddW9HYZ1z%2Fz6F%2Fk%2FbYhK80FNLzbc2u4Cx3%2BoCn2guoaWQVH5QNngEpfXJUl%2Bs1OSgv1e9TblDY2i8F9gp%2FkFWRQvlN48j7bhe5ugYwCM1D71GlmqikNhi8fXeea4cY8B%2B5mCNfkZKCUgHfuIDSC80S5xdlB0LNrMYulh%2FppCNAcKYrUknB27UDzTQpFjOJryvRpttMMqimMIGOqUBHE%2BOgJs2cp5bNd0VGaTNH7O3mFaVID3MfYjPu3RGHSt3rwrejXL7dtGIj50%2FCpmYGs3T5PzMW9LQT2C8qM8Nx%2BCqcTI0eQD5bmvE2g7f5oSCjH2yIl6H6hw%2FGxfT7MgItMuhfqLtd8zh4AG2gx%2BeNjq1ijr8wBTUAfIx6xl%2B1Z6mrcXQkygr3RPaVoXsr5KNOCE%2FKOd4Ys2F0C6QmIg1BVGsKtDD&X-Amz-Signature=2d91e81ea9576309f476ca59120d996cea75ee979fb2a071e42e4ae5a74cd0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BG6SZJY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaGCDH7%2FPMB1fiVDE3oxRxCL6J5T2j8u%2FJN76cE0WYAwIgMIOpmm0azF6DiEAB4HXpOTSQ9F6t22Y6w6vtzcBRClgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBADyvNNUgd5OncHeSrcA0hnDRs%2B0mt6cmj%2FJgTfKCE7tW5z8aJTsxmHf30DFSfHllizfgpFZt23tt9ZH%2BqW6gKJ42oTnFfuExmUcaNDYU4i0gPptEUq52v8yCiCCeEArbt7Uicwpl4eiWb1UCziwHFTW1PJgMTtZVyXsqbpJ8wh2ptCsuiAr95p64QlyzBgvbhuBHjCrvViJBc7gLBAW3Vp1L%2B1mRnOI%2BXXAGUFAs7vYp02h4nBknvCUcVVzgHPlFVLgLzyUMfC5tIhZvN38OaNmBoc9MjSSE2gn8u0jk%2FqQOfnvqvc7FlEnJSuH26go2AYxKlzLFQzyTrbnI8Y083DlcczY%2F%2F8sG55fsksZ%2F3Tc8MCDFtS7L6ML8xSNLGY%2FF9NGZ078pv%2BJ1IciQfSe%2BWGofbGmDNGwch7MYAiHXaCGPTbrFFQHi22gpSscZsAjAMAgXDJUl7ddW9HYZ1z%2Fz6F%2Fk%2FbYhK80FNLzbc2u4Cx3%2BoCn2guoaWQVH5QNngEpfXJUl%2Bs1OSgv1e9TblDY2i8F9gp%2FkFWRQvlN48j7bhe5ugYwCM1D71GlmqikNhi8fXeea4cY8B%2B5mCNfkZKCUgHfuIDSC80S5xdlB0LNrMYulh%2FppCNAcKYrUknB27UDzTQpFjOJryvRpttMMqimMIGOqUBHE%2BOgJs2cp5bNd0VGaTNH7O3mFaVID3MfYjPu3RGHSt3rwrejXL7dtGIj50%2FCpmYGs3T5PzMW9LQT2C8qM8Nx%2BCqcTI0eQD5bmvE2g7f5oSCjH2yIl6H6hw%2FGxfT7MgItMuhfqLtd8zh4AG2gx%2BeNjq1ijr8wBTUAfIx6xl%2B1Z6mrcXQkygr3RPaVoXsr5KNOCE%2FKOd4Ys2F0C6QmIg1BVGsKtDD&X-Amz-Signature=143a0e5d11f81eaafebb5ea945e94657af16599aee51d7579bbe385ba5236c7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BG6SZJY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaGCDH7%2FPMB1fiVDE3oxRxCL6J5T2j8u%2FJN76cE0WYAwIgMIOpmm0azF6DiEAB4HXpOTSQ9F6t22Y6w6vtzcBRClgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBADyvNNUgd5OncHeSrcA0hnDRs%2B0mt6cmj%2FJgTfKCE7tW5z8aJTsxmHf30DFSfHllizfgpFZt23tt9ZH%2BqW6gKJ42oTnFfuExmUcaNDYU4i0gPptEUq52v8yCiCCeEArbt7Uicwpl4eiWb1UCziwHFTW1PJgMTtZVyXsqbpJ8wh2ptCsuiAr95p64QlyzBgvbhuBHjCrvViJBc7gLBAW3Vp1L%2B1mRnOI%2BXXAGUFAs7vYp02h4nBknvCUcVVzgHPlFVLgLzyUMfC5tIhZvN38OaNmBoc9MjSSE2gn8u0jk%2FqQOfnvqvc7FlEnJSuH26go2AYxKlzLFQzyTrbnI8Y083DlcczY%2F%2F8sG55fsksZ%2F3Tc8MCDFtS7L6ML8xSNLGY%2FF9NGZ078pv%2BJ1IciQfSe%2BWGofbGmDNGwch7MYAiHXaCGPTbrFFQHi22gpSscZsAjAMAgXDJUl7ddW9HYZ1z%2Fz6F%2Fk%2FbYhK80FNLzbc2u4Cx3%2BoCn2guoaWQVH5QNngEpfXJUl%2Bs1OSgv1e9TblDY2i8F9gp%2FkFWRQvlN48j7bhe5ugYwCM1D71GlmqikNhi8fXeea4cY8B%2B5mCNfkZKCUgHfuIDSC80S5xdlB0LNrMYulh%2FppCNAcKYrUknB27UDzTQpFjOJryvRpttMMqimMIGOqUBHE%2BOgJs2cp5bNd0VGaTNH7O3mFaVID3MfYjPu3RGHSt3rwrejXL7dtGIj50%2FCpmYGs3T5PzMW9LQT2C8qM8Nx%2BCqcTI0eQD5bmvE2g7f5oSCjH2yIl6H6hw%2FGxfT7MgItMuhfqLtd8zh4AG2gx%2BeNjq1ijr8wBTUAfIx6xl%2B1Z6mrcXQkygr3RPaVoXsr5KNOCE%2FKOd4Ys2F0C6QmIg1BVGsKtDD&X-Amz-Signature=37c53feaeda4c38f284dac78460f3f373160e7fbf19c7736b2e0f847efd5e068&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCCFFAS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1fk%2Fd2NPcPhqdadoMzy6U%2B0FgPsWEa%2BFCUD3z3khJaAIgNvlolGiqKNuSHTBB4uVu%2BY6WTf%2B2Yrgc%2BAdweegv1fkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD5hJpfTPlnsY4lUCrcA8RLsYlWwAHL%2FfT7YTBKY8qkvdew9AE9dcJ5lymf5AP1X2hJV1hGMZT5KQFuLqpSKekZXz7CIoslu3Mm4lh14V0fP8kffqLxKafWBjRPZBbKFiWrkzIkYwAp3Zz6zCv3YqyA%2F9gFDMFSt3nTW1v5PiO8gIgBPPNsBppMeS0TyS%2BB8gTf2SC2T%2FdRBjBwWZYeJiz4jp45gbb4luJ3lKKysMLeXsEHqj33bdf2VCV4qKu2CFkpp3y6jgPGb3KhV9kYaWVEctI358PPBIcXMyHboG8fGaSX7Hd3uGNItVG1EsxsfJMEz6cnKYhnj5fFD40MKygDSwmNempaMcoDIUcccuAEG0EF6e%2BoCiW1kGL%2FhXcJxJ2zZiN54hTvddzcbIjBbx68pujAFuVY1j%2F90QH19rr4PrP0X0snKPgvMMX4d7Uq2mmR%2FHYZzRkwyyI0j9ZGQ1lOFGPTymnZUOgn7d2NQnA9sHagceyNWZrwBFhpTDYB5BKEir11moAqm6XiIFAdp6fyRZafmLUzvWFh89C9LEAAuj32ndJpUe0IUElQeNXEVFYM3kQ4cWNn%2FEcV5M2Mf8w2q%2FzIwnckeEsIkbCX3P51viBzU%2Fdojkbsvgt1LpkH1D5v1j48P8U48HCfMIyimMIGOqUBLuJSH77OKrf7fXagFDeVMfBdi6w8bhoUL%2FDKZGV%2FkqhH8sGeCKBjA3i%2BtCYyzNflVuGT1YBYN2GmD5P4zamLWtxokOL%2F6V790fEofQAF4eU6inzXFQPHLPh8CgjEXc1DmABHOWRGUi%2F5o%2FbziVJJvbP67%2BxyyOxxsEELyLlwNAK3dP%2F7mEfZb1RRTRRX84LoKehaiJ0Yzbe8oJjtzxP0xTTMMm0W&X-Amz-Signature=79ebef9d584657a7df4e704646df8c71e009da684b2593fc93a45a80ed95d091&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNWVBDV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8Vj%2F5lRPcelB5WnAJWj1Ws1hfRS9LA9bj%2FV6h9STx6AiEA1ZKcv9K1AX6cJfcucszJwtAjohkSzTgEzJFfqxbhl8IqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjr2sq%2Bg2jYDQHdYCrcAyNAiaAuiNLeuoDNfpmye12nuPv%2F6Iptd6%2FA0cHzbNfGes%2BxgVjIyUUalp1vKgZgpR9iEUKuQ0tZyAkzSO2%2BZcxmkog5Nr%2BoyyJZaj1WRLz8vxHc2yKBDw8M6%2F8q5mTZS%2BGjjMBfajJZ65RzC%2B%2B7%2F8Mb7ZaWJL%2F9ywvKs0F62Mv4iui9q9LIy7JGlN3AzRq2TCYRRdzHtLhfsWLITGRudD33LME6d8vl2Lrgq9o2ZBKg0BNA1wJHrItl90GEtiKaH0VoGmTq0X4c7MqQ8LkfcuEHzwrmfrnEEG8gZEcYORObzEJsrY5HY149sLazbe925BvADqbEY%2Bpsn2U2lAYvokcOrZi%2FLtl2gdfQ83E9JZdUeXqWn2lG%2FDf8Tv%2Fklos0xkrm9nAtO19Xz6l461DJ7RsTrIjXrAjxteNMJYibONhbx%2B7j9pspksO5TApeppv4vIm%2FG7AreViJJWZ6EMBLgFVMK%2FXXb9GdYJOzllw%2FB%2F1cqWl377pZGxAj3krI2ZPFZRbXmqKB5pNvdJilpi1f5hOj4g5UWnXAJHLRS9ig1kUSoEbzPLaOen7XT1nN6FMWm5u379XlpuqafTElNFrCSwnNeg2q8IUQvaZsRZgS8CEzg3a2CGMHW%2F%2BC2ElyMMuimMIGOqUBTtrOXTidyg4UvFuYio%2FEZV9qChA5AIUiWuS866IyyryuI255N0OdcN3NR4RyPn3NuxOAK87gBsdpX4Gqn%2BUCV4%2FVV6W%2FPIY%2Bz%2BP%2B68u9ioZSgZej4o1jnYcTnQcrgCWLoEzD5uou%2FYLcW9TrI%2F2nH7aNT4Dq0AKg6GjLJ1pfa0ejgB6vnbR0jaTg%2BYffE%2B8y84zV4o0bu41VER4XtkyWrV%2Fakdxw&X-Amz-Signature=9dd103aa0b7617518d0d12d7523584e8faec3aa163e80d87e1d9be7f7c139f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BG6SZJY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaGCDH7%2FPMB1fiVDE3oxRxCL6J5T2j8u%2FJN76cE0WYAwIgMIOpmm0azF6DiEAB4HXpOTSQ9F6t22Y6w6vtzcBRClgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBADyvNNUgd5OncHeSrcA0hnDRs%2B0mt6cmj%2FJgTfKCE7tW5z8aJTsxmHf30DFSfHllizfgpFZt23tt9ZH%2BqW6gKJ42oTnFfuExmUcaNDYU4i0gPptEUq52v8yCiCCeEArbt7Uicwpl4eiWb1UCziwHFTW1PJgMTtZVyXsqbpJ8wh2ptCsuiAr95p64QlyzBgvbhuBHjCrvViJBc7gLBAW3Vp1L%2B1mRnOI%2BXXAGUFAs7vYp02h4nBknvCUcVVzgHPlFVLgLzyUMfC5tIhZvN38OaNmBoc9MjSSE2gn8u0jk%2FqQOfnvqvc7FlEnJSuH26go2AYxKlzLFQzyTrbnI8Y083DlcczY%2F%2F8sG55fsksZ%2F3Tc8MCDFtS7L6ML8xSNLGY%2FF9NGZ078pv%2BJ1IciQfSe%2BWGofbGmDNGwch7MYAiHXaCGPTbrFFQHi22gpSscZsAjAMAgXDJUl7ddW9HYZ1z%2Fz6F%2Fk%2FbYhK80FNLzbc2u4Cx3%2BoCn2guoaWQVH5QNngEpfXJUl%2Bs1OSgv1e9TblDY2i8F9gp%2FkFWRQvlN48j7bhe5ugYwCM1D71GlmqikNhi8fXeea4cY8B%2B5mCNfkZKCUgHfuIDSC80S5xdlB0LNrMYulh%2FppCNAcKYrUknB27UDzTQpFjOJryvRpttMMqimMIGOqUBHE%2BOgJs2cp5bNd0VGaTNH7O3mFaVID3MfYjPu3RGHSt3rwrejXL7dtGIj50%2FCpmYGs3T5PzMW9LQT2C8qM8Nx%2BCqcTI0eQD5bmvE2g7f5oSCjH2yIl6H6hw%2FGxfT7MgItMuhfqLtd8zh4AG2gx%2BeNjq1ijr8wBTUAfIx6xl%2B1Z6mrcXQkygr3RPaVoXsr5KNOCE%2FKOd4Ys2F0C6QmIg1BVGsKtDD&X-Amz-Signature=948ccab4f0e15e416ef40a6ffa67c4d9533274d4c242310c019bea0a65bbeded&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
