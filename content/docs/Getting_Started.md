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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJCFFIVQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEK0O9SqGnLkQWuo2097HjlNmIvKGG56M%2B56YJnxoGblAiEAl0mPM4aLxJ2X0nWf3k0Uom2o29F8TT27UzeswclPrbkqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlj67xOqUq9TeED%2FCrcAw4paAyokVXryAgtNLAanG71oCZIB3gHaoIN%2FVjZXq68OQPvoDOyYvn0wrtUPMzzyP72oZmrhWjDgg%2FLbBHfr71COhpFeUQNb4SqOSYto8mbirMPOZpk8jd1AMdxD33u%2FEFl3YWGiMBG6l2%2BRKU8pgPU%2Fs%2FfB1aD%2BBLh3zuuEsYzFj%2FFQMo36lFavtvepMTcMdzbbA5fM1w%2FDg5PMq5FvSC%2F5AAOAbAE6ZPVCgOMyIcLE9nEEhBTaYQA%2FgesuXKMbJKWg9H5nbACf8MPp6vpNiSaRH8ZnF4FPVtz%2F%2BSa88DvvRs5b4lIUru2zujXMfWGZit0IFtyFauiOSwOa7R4U7lAFteUEf4yUg63Pw%2FSZpLoLeOW3BdzljHC0R1Dk0DI0kBVJA1eOzy%2F2aZYUtNCbPVHu6zxQNhum5LRTRXsvaXqxQJrb5Z2WCuyI1uCgYtlcuHsEbi8pSdzKmoZ8PQFGop3wP5rx7I9KSlZG0u3Ht9wRDLGlBHYuoBlxwROQfbWKlmEoSkX6Ki1i%2FiCezSBGWb8vtPPiIKl6DU%2BHhpsIWwXJqT8ZgtJ8njuWnq4WijH0imSyjOcyIkSuhd4bccufOlQQUERW8v%2FEV632MpX4%2FQ%2Fo0vs%2B4UJVcfoagE1MMLR18IGOqUBY5QLESbK80NNjUH5%2BBVbAk6c5DgKhuevB3S%2FH0z2%2FVfOjPmtGb7N5I1DDdQk6zjQC9%2FCb1sYK%2Bem%2BANYQNuxrMof%2FBsbkCEcv%2Fb4DxIcaoTDU%2BSwv3ZO2qRzJRWlRtUC04frifGK5JbMOTUBjMYq56PfWohRM7LZPObtPkA33SOl3o%2F7820BWDtzv%2FXAYtkbcvcTadwmrzGwUZ7iUSb6unBz6KaX&X-Amz-Signature=0f9fcca0e01d5481ba9f367cc6851ce340d38fa7a02ff5afdcee6083c0fe52cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJCFFIVQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEK0O9SqGnLkQWuo2097HjlNmIvKGG56M%2B56YJnxoGblAiEAl0mPM4aLxJ2X0nWf3k0Uom2o29F8TT27UzeswclPrbkqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlj67xOqUq9TeED%2FCrcAw4paAyokVXryAgtNLAanG71oCZIB3gHaoIN%2FVjZXq68OQPvoDOyYvn0wrtUPMzzyP72oZmrhWjDgg%2FLbBHfr71COhpFeUQNb4SqOSYto8mbirMPOZpk8jd1AMdxD33u%2FEFl3YWGiMBG6l2%2BRKU8pgPU%2Fs%2FfB1aD%2BBLh3zuuEsYzFj%2FFQMo36lFavtvepMTcMdzbbA5fM1w%2FDg5PMq5FvSC%2F5AAOAbAE6ZPVCgOMyIcLE9nEEhBTaYQA%2FgesuXKMbJKWg9H5nbACf8MPp6vpNiSaRH8ZnF4FPVtz%2F%2BSa88DvvRs5b4lIUru2zujXMfWGZit0IFtyFauiOSwOa7R4U7lAFteUEf4yUg63Pw%2FSZpLoLeOW3BdzljHC0R1Dk0DI0kBVJA1eOzy%2F2aZYUtNCbPVHu6zxQNhum5LRTRXsvaXqxQJrb5Z2WCuyI1uCgYtlcuHsEbi8pSdzKmoZ8PQFGop3wP5rx7I9KSlZG0u3Ht9wRDLGlBHYuoBlxwROQfbWKlmEoSkX6Ki1i%2FiCezSBGWb8vtPPiIKl6DU%2BHhpsIWwXJqT8ZgtJ8njuWnq4WijH0imSyjOcyIkSuhd4bccufOlQQUERW8v%2FEV632MpX4%2FQ%2Fo0vs%2B4UJVcfoagE1MMLR18IGOqUBY5QLESbK80NNjUH5%2BBVbAk6c5DgKhuevB3S%2FH0z2%2FVfOjPmtGb7N5I1DDdQk6zjQC9%2FCb1sYK%2Bem%2BANYQNuxrMof%2FBsbkCEcv%2Fb4DxIcaoTDU%2BSwv3ZO2qRzJRWlRtUC04frifGK5JbMOTUBjMYq56PfWohRM7LZPObtPkA33SOl3o%2F7820BWDtzv%2FXAYtkbcvcTadwmrzGwUZ7iUSb6unBz6KaX&X-Amz-Signature=75969df16b49ec87bfcec0b51bfafeb62fa514f7d8c3f8dd81e344174d6b8537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJCFFIVQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEK0O9SqGnLkQWuo2097HjlNmIvKGG56M%2B56YJnxoGblAiEAl0mPM4aLxJ2X0nWf3k0Uom2o29F8TT27UzeswclPrbkqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlj67xOqUq9TeED%2FCrcAw4paAyokVXryAgtNLAanG71oCZIB3gHaoIN%2FVjZXq68OQPvoDOyYvn0wrtUPMzzyP72oZmrhWjDgg%2FLbBHfr71COhpFeUQNb4SqOSYto8mbirMPOZpk8jd1AMdxD33u%2FEFl3YWGiMBG6l2%2BRKU8pgPU%2Fs%2FfB1aD%2BBLh3zuuEsYzFj%2FFQMo36lFavtvepMTcMdzbbA5fM1w%2FDg5PMq5FvSC%2F5AAOAbAE6ZPVCgOMyIcLE9nEEhBTaYQA%2FgesuXKMbJKWg9H5nbACf8MPp6vpNiSaRH8ZnF4FPVtz%2F%2BSa88DvvRs5b4lIUru2zujXMfWGZit0IFtyFauiOSwOa7R4U7lAFteUEf4yUg63Pw%2FSZpLoLeOW3BdzljHC0R1Dk0DI0kBVJA1eOzy%2F2aZYUtNCbPVHu6zxQNhum5LRTRXsvaXqxQJrb5Z2WCuyI1uCgYtlcuHsEbi8pSdzKmoZ8PQFGop3wP5rx7I9KSlZG0u3Ht9wRDLGlBHYuoBlxwROQfbWKlmEoSkX6Ki1i%2FiCezSBGWb8vtPPiIKl6DU%2BHhpsIWwXJqT8ZgtJ8njuWnq4WijH0imSyjOcyIkSuhd4bccufOlQQUERW8v%2FEV632MpX4%2FQ%2Fo0vs%2B4UJVcfoagE1MMLR18IGOqUBY5QLESbK80NNjUH5%2BBVbAk6c5DgKhuevB3S%2FH0z2%2FVfOjPmtGb7N5I1DDdQk6zjQC9%2FCb1sYK%2Bem%2BANYQNuxrMof%2FBsbkCEcv%2Fb4DxIcaoTDU%2BSwv3ZO2qRzJRWlRtUC04frifGK5JbMOTUBjMYq56PfWohRM7LZPObtPkA33SOl3o%2F7820BWDtzv%2FXAYtkbcvcTadwmrzGwUZ7iUSb6unBz6KaX&X-Amz-Signature=470be291c5b962db5771366b24eca8c74baab74070becf20e3db08114e318caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYHD3NRL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCRKlUGkxMkBCZvxDGfRrrP5rlRGWGM4e%2FFcAsl6eJtQIgchTnwyRoXpurJJO22jOfSySddxIW49M8DCz9R%2BExeuMqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV2I2KNAc6iFwjmySrcAyUt51Wa7%2BCrfIjE%2BhtRFnXn9pxcnLpAjFef82zPfIsKZ3KncAyjrN2aYf6d%2FSijf2rwD%2F5v%2Bh8BtedirJsc%2FO0VWDnRACCKczKr2jJViubiYz5AiLykv%2BMstQydaHQLK%2B9YZDY7%2F7OEoEqVXNKwSZl8QwUDYS4x1YFL%2F6KVkGC98JB%2FmnzsV99pfsAU82Fr8q9MJqslonzT5ZwSJ2AODh1uLzUQG9oVpXq5zRNWedH70vvlzbKXgWrn2KyAdnQsXZEneXEpjPox%2F4YfLb2q8F1wspwBdRYrn9DgHW%2F%2BVg4BlD8jS3eknWFJbSGo2MLD9uTw9UU4b46kG2kJHLBsEBKhIjiwbkomPYz66R0ibp9u8HIGBObDFTuE7ijEAUYSDZ2W8utKttzLnSF0thUfXdTlBmticKaLU908m%2B0%2BhZvMbXIUlFD%2BALt0bqYUIskSVDf%2Bk7FC281gZjE76GXKzWazwYpK482Wge4GgSTtIufcf5DwkLrX7wvYTCLWo8CQapqsU07XYx8yll8r7KXC2BwC8naD6prydsaRTo1VvHdYDlFJU%2BqH%2BCTBxqC80A2FSuV456Q8%2F5j4wyiuLWGaq0LIIJLLiSoli17b4bdoJUyCiXPzvHXBP3ox%2FMs6MO%2FX18IGOqUBZzUKTtVhEVn9pd9yRIBQwvDhTZx4m%2FeT0H%2FTWVZL%2B6mtGE2HszL9KzMQ0rakMonfZ6a3JVwXKmUfUOji0Ml3ij0rh94bpNemqTziW6%2FcpIhEGzLI1rtM1xJ%2BfDEU2y4TlVAXPZ6e0UrJrs8t3bqLGbfMJqxq%2BTlywQHoJFndSkcrAEsnqSA2dnENnsFxtR2X3P2TyEw7gxcJABFYt8sxn%2FA8oPjB&X-Amz-Signature=b0bbdf3ff6b58bb70a58e3a1689cedc7d1ec12f2bf1a81ea31e1ac9948ea5b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HJSA3K%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSMGTRT56Ksx%2BK9np56vxr1TBcDWYLsft0e%2Bghu8Dz5AIgOwOsIWy8Ee%2BcK4UUuraKXgaa35dTFoneC24WeFb9GEgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO8g6YO2UnBUvKpsSrcAxIAZIQzCXL6L1B5rGdFghrOUpua0qUpZ1XyuG%2FwT6hzrzn7o8ZQTIVSXASvTkceygD1mzGoyY6WLeWdRqPXALnQIfCyfjjBWpi2Ggdglw%2F4qWX9ZgjeznX6TBIDFDFNd7snS86weWskic3fGpH1W9tcj5LUryFKAZMaYSVSwPeUj3mN4tzeO%2BlyevsyP3hdgVuv%2FOVGotlAAV%2Bq0bpGwwLdCIbP2Dgg%2FKC8SannJIwZie%2BJLgeIYK8MafTNeFtSwN4%2Bhc2CbkMwcu8y5PaPNKH8Dh6NqMauKFcTq0py9Lzha12%2BeJueDtG8Mwi419rtp8QhuSh49IqnN4iiVZvPR3s41QpHSwtEf9zQMY3afwo53k5C29OBwwfDlJp3ThthQYBqgO7x%2BUk%2Fmal%2FbDrxJhgNOaVgjM6PBNH7rHah1kiw186943D1f%2FNYzUZkkxGUGst%2BwwM5N8wqJSpURncs3XICAXlCeo36YUEXXWcDYe7faPhc0ehtko%2Bvi3hfde4%2FutiekKSslAnJ98wus8%2B4yc11wNlroBf%2BtqMomhDRivey70cSUQQDCTbnyeV69MChCN6MZ4F8LWLxKo0o20VGJh8l%2BbZXzthUWRPY8JO41OVb2R2yC%2BsLokZAppjdMM7R18IGOqUBImk8CsF4U5%2B0kAkMWjDlhPafhBx6wEGFgNiqxlBnNGJ23wXaUVtrFNNq5mgiUdzT8D7bgORJTujZfgGURvRmpOsKMNWF1DcOdzz9aliX0uaQWy%2BqTNq0Q3tbUK50kRl7loPZetntT9OLHdmDV4dn7271tWzGEHbn00Z0ZwR0zkrmpFQ47v6FY2wNwYrXqWAOEX27vawF6xSZHErP8VrdMKZ1Ag9E&X-Amz-Signature=741da459bdb4dfac4c878e95fc00a8635dde6bdc194f50b21717eef54e8aafd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJCFFIVQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEK0O9SqGnLkQWuo2097HjlNmIvKGG56M%2B56YJnxoGblAiEAl0mPM4aLxJ2X0nWf3k0Uom2o29F8TT27UzeswclPrbkqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlj67xOqUq9TeED%2FCrcAw4paAyokVXryAgtNLAanG71oCZIB3gHaoIN%2FVjZXq68OQPvoDOyYvn0wrtUPMzzyP72oZmrhWjDgg%2FLbBHfr71COhpFeUQNb4SqOSYto8mbirMPOZpk8jd1AMdxD33u%2FEFl3YWGiMBG6l2%2BRKU8pgPU%2Fs%2FfB1aD%2BBLh3zuuEsYzFj%2FFQMo36lFavtvepMTcMdzbbA5fM1w%2FDg5PMq5FvSC%2F5AAOAbAE6ZPVCgOMyIcLE9nEEhBTaYQA%2FgesuXKMbJKWg9H5nbACf8MPp6vpNiSaRH8ZnF4FPVtz%2F%2BSa88DvvRs5b4lIUru2zujXMfWGZit0IFtyFauiOSwOa7R4U7lAFteUEf4yUg63Pw%2FSZpLoLeOW3BdzljHC0R1Dk0DI0kBVJA1eOzy%2F2aZYUtNCbPVHu6zxQNhum5LRTRXsvaXqxQJrb5Z2WCuyI1uCgYtlcuHsEbi8pSdzKmoZ8PQFGop3wP5rx7I9KSlZG0u3Ht9wRDLGlBHYuoBlxwROQfbWKlmEoSkX6Ki1i%2FiCezSBGWb8vtPPiIKl6DU%2BHhpsIWwXJqT8ZgtJ8njuWnq4WijH0imSyjOcyIkSuhd4bccufOlQQUERW8v%2FEV632MpX4%2FQ%2Fo0vs%2B4UJVcfoagE1MMLR18IGOqUBY5QLESbK80NNjUH5%2BBVbAk6c5DgKhuevB3S%2FH0z2%2FVfOjPmtGb7N5I1DDdQk6zjQC9%2FCb1sYK%2Bem%2BANYQNuxrMof%2FBsbkCEcv%2Fb4DxIcaoTDU%2BSwv3ZO2qRzJRWlRtUC04frifGK5JbMOTUBjMYq56PfWohRM7LZPObtPkA33SOl3o%2F7820BWDtzv%2FXAYtkbcvcTadwmrzGwUZ7iUSb6unBz6KaX&X-Amz-Signature=870fcd4bb9b6adc19c9e2efce9754761a301428867e7c42c3ff43341d97192d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
