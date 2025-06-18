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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634HVT5JQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyHA4isxaACKcauQeNW%2BFgTSgTjPTW6SCOexJ5JhG%2BoAiAS0eCnDYv8IBvRmdDJaHXk8kyUXkDudnS%2Fmx%2By18JeHSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCDwPv6XnapM6h%2FyjKtwDALcLi31xZRuHsUZHtyIL%2FYcOFf1Duu4eav6cs3OKAvPu090jRsT3BzPTEVsn1vLrh%2BkLkCgVYya3KOa0kcI3GnPRtGLJWOQ2yROPe%2F0mON1knvf%2FObPLh1jt1gtU4FES6MQHFMnwrJORReJgeuGdqfMPQZx9s81JjNWDuMjMxDUeILdlQ5oDdZfJcuTNncJcosZCLsgZ2o%2FfLS4SVvyudUDnQPVBz4jZ0TWfbUbGFyucgDfiJhJwQT8%2BKJ%2FEYh6UEIS%2FImK6DWK%2B9wlHKWcZxcNhfrgdnsRlpMhWN%2FcaNDNvN9LKVsUAhnoVkMeRN53HOfhAPSWB6cpKJKRI4Cn0%2BBJXE2NB7DcAnZiq3H3K1Son%2BP1mJjNFmZlFLo3y0VTRM0blvcsF8xAO0%2FZNvZieT%2F%2FF56eIP0A1h3U0YnWziNZ2b3qGYafHIS84dG8IVrkEI64122j2YtEB6U9OJXetAr2HqX1rSruWrjs%2FzlXXSa9UGXw02uIAYX3rbt3VFxgLPf70vqjqrt9HzWu9uo4KU7hmlTaOUML2XPsIjz5YbUN9eCjf%2F175OcUKIPNWqwhzpHXq6rSdXxG%2F5XEWT%2F04JRQCJyAGm%2Fq2Eji7tz1o%2FH0RuqU0QIQCT%2Fgn5xAwpfTKwgY6pgEvLQfkC6w4ZYskaRNM1JEEvKcAD%2BqveffbFAOYidF3yGJK%2Fn4qanWZOmWNvjasq%2Bg%2BflGKspioK78Zbj9Eijg2DWlH90PVHDr%2Bdmc40oGN%2BgmdvaqLAe4smab9vqbzQQxz8wwEiFnXhqnPZ1t5y5T1xXh85S4rqpUSJ1yHdR03uIdzP5%2F71qIX24Y9bDKl9HLzbZaxVDezYBKwVgm50dy1U8lI0FQZ&X-Amz-Signature=d95dea68867d3952ab2f53131f0e5efc67603a37f93814e6a489060279c1bfbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634HVT5JQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyHA4isxaACKcauQeNW%2BFgTSgTjPTW6SCOexJ5JhG%2BoAiAS0eCnDYv8IBvRmdDJaHXk8kyUXkDudnS%2Fmx%2By18JeHSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCDwPv6XnapM6h%2FyjKtwDALcLi31xZRuHsUZHtyIL%2FYcOFf1Duu4eav6cs3OKAvPu090jRsT3BzPTEVsn1vLrh%2BkLkCgVYya3KOa0kcI3GnPRtGLJWOQ2yROPe%2F0mON1knvf%2FObPLh1jt1gtU4FES6MQHFMnwrJORReJgeuGdqfMPQZx9s81JjNWDuMjMxDUeILdlQ5oDdZfJcuTNncJcosZCLsgZ2o%2FfLS4SVvyudUDnQPVBz4jZ0TWfbUbGFyucgDfiJhJwQT8%2BKJ%2FEYh6UEIS%2FImK6DWK%2B9wlHKWcZxcNhfrgdnsRlpMhWN%2FcaNDNvN9LKVsUAhnoVkMeRN53HOfhAPSWB6cpKJKRI4Cn0%2BBJXE2NB7DcAnZiq3H3K1Son%2BP1mJjNFmZlFLo3y0VTRM0blvcsF8xAO0%2FZNvZieT%2F%2FF56eIP0A1h3U0YnWziNZ2b3qGYafHIS84dG8IVrkEI64122j2YtEB6U9OJXetAr2HqX1rSruWrjs%2FzlXXSa9UGXw02uIAYX3rbt3VFxgLPf70vqjqrt9HzWu9uo4KU7hmlTaOUML2XPsIjz5YbUN9eCjf%2F175OcUKIPNWqwhzpHXq6rSdXxG%2F5XEWT%2F04JRQCJyAGm%2Fq2Eji7tz1o%2FH0RuqU0QIQCT%2Fgn5xAwpfTKwgY6pgEvLQfkC6w4ZYskaRNM1JEEvKcAD%2BqveffbFAOYidF3yGJK%2Fn4qanWZOmWNvjasq%2Bg%2BflGKspioK78Zbj9Eijg2DWlH90PVHDr%2Bdmc40oGN%2BgmdvaqLAe4smab9vqbzQQxz8wwEiFnXhqnPZ1t5y5T1xXh85S4rqpUSJ1yHdR03uIdzP5%2F71qIX24Y9bDKl9HLzbZaxVDezYBKwVgm50dy1U8lI0FQZ&X-Amz-Signature=4f406d92164b7c1432f8f5ceae1bc978f15b3d0ecd34b43181bf86fd13a7e4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634HVT5JQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyHA4isxaACKcauQeNW%2BFgTSgTjPTW6SCOexJ5JhG%2BoAiAS0eCnDYv8IBvRmdDJaHXk8kyUXkDudnS%2Fmx%2By18JeHSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCDwPv6XnapM6h%2FyjKtwDALcLi31xZRuHsUZHtyIL%2FYcOFf1Duu4eav6cs3OKAvPu090jRsT3BzPTEVsn1vLrh%2BkLkCgVYya3KOa0kcI3GnPRtGLJWOQ2yROPe%2F0mON1knvf%2FObPLh1jt1gtU4FES6MQHFMnwrJORReJgeuGdqfMPQZx9s81JjNWDuMjMxDUeILdlQ5oDdZfJcuTNncJcosZCLsgZ2o%2FfLS4SVvyudUDnQPVBz4jZ0TWfbUbGFyucgDfiJhJwQT8%2BKJ%2FEYh6UEIS%2FImK6DWK%2B9wlHKWcZxcNhfrgdnsRlpMhWN%2FcaNDNvN9LKVsUAhnoVkMeRN53HOfhAPSWB6cpKJKRI4Cn0%2BBJXE2NB7DcAnZiq3H3K1Son%2BP1mJjNFmZlFLo3y0VTRM0blvcsF8xAO0%2FZNvZieT%2F%2FF56eIP0A1h3U0YnWziNZ2b3qGYafHIS84dG8IVrkEI64122j2YtEB6U9OJXetAr2HqX1rSruWrjs%2FzlXXSa9UGXw02uIAYX3rbt3VFxgLPf70vqjqrt9HzWu9uo4KU7hmlTaOUML2XPsIjz5YbUN9eCjf%2F175OcUKIPNWqwhzpHXq6rSdXxG%2F5XEWT%2F04JRQCJyAGm%2Fq2Eji7tz1o%2FH0RuqU0QIQCT%2Fgn5xAwpfTKwgY6pgEvLQfkC6w4ZYskaRNM1JEEvKcAD%2BqveffbFAOYidF3yGJK%2Fn4qanWZOmWNvjasq%2Bg%2BflGKspioK78Zbj9Eijg2DWlH90PVHDr%2Bdmc40oGN%2BgmdvaqLAe4smab9vqbzQQxz8wwEiFnXhqnPZ1t5y5T1xXh85S4rqpUSJ1yHdR03uIdzP5%2F71qIX24Y9bDKl9HLzbZaxVDezYBKwVgm50dy1U8lI0FQZ&X-Amz-Signature=f477382b0c8271f47fcf7fb0a2cf545505c6a2c344e24bf4b84a52598db3f24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVLRBQT%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHLVPl%2Fn5oIEtEG1I44SiSW1hnYa%2FsgkWd4%2FFApH73WgIgShKsKBXWBriUy%2BTmjx%2FqrqAyaqN42B6i1WFObvNDhYwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU2R9lA%2FeeBiPeylCrcA6sPrTJHRAwv6APTVtBIVpe2yhm2cuRnSQsGeF8Wc3rscP6VTujg2jQEzvKEvBWGmPQzGR%2Bl8F7Z1mrJToF8S7OIsk3%2BPB2Fn%2FjJaDi5JrA%2FQF5k8Id3ZoO4mC6uuT7VzujA8IBFfsls%2B3eB3zRBgRpSjtN9uFSOluYryjkT50cNXyYQO%2FgVMsiIhX5PDlhBB0fpLcjV7djFUhz5ulklo6kKF9y4t0H3qZkfdy%2BrKvpmWACtbychH4eqXCxh%2B452RCnM9tDcp8pP5wi4puudwFHe7DviJMTJBo%2FgNjVteEYAmESeqHOBlBHR32kw6eX6RXrPEnFq6zhcJCyaKu%2FNmTGOxoDf1ycMj%2FlQfoq%2BgEZKOz7abxUVK7PN5lIq7uBA4aMiIxHFC6SNdKeu14iSQB0xqCThltsY9Tqz%2FReAZmbynEbTdONfE1vxIDX4zhIephU9QfBK%2BFZJ%2FxLNzLijyOTR0hLuqmW6oXc%2FxzNT5B7mGFupY8J2oagn4PrQphr0eJfpxNQsH8r4lnicigcztK7Ndd6IVaDb4K4f985UJipf4nAp81Olw40co2a2lINF6un3mF8Kohf73ccpug2bBXQDGhdSRvq2sc34EiSmKc7D%2Bl%2F%2BOoP1ljabGXgCMLnzysIGOqUBDRHPADcHrDVL9EfhBi4XDSFS3%2FXG6kUIcOEp7Jr%2BPYwuziHHmlKGftawXg1Xb8ltguq9vMptr223%2FIkbhuT%2BDu%2FmRfXSIXHxbIcHBdFWSH7PbtAqEHHlhw%2FR7CDITXs7%2Buo%2FWeYpKEzea3Sx5hjm%2FWtGcvnaMGiI0DbJOTyMG8PsO6dXlcVwNPnJtGO7kWgCwUAU1hXyJUmcJ4Yt9zM2Hc4Mkgbx&X-Amz-Signature=0b37ed24842b16e0e52013e6271c82fbc2ffb365e86903108d7c4cc0fd0c1c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RV3Q724%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfX%2FcuDlWSV3fugeU6sCX2rRsaGQp3qggKU6%2B4Vdoe4AiAz3Ycr4jNHoD0ioL1EgCq1yiq6pWuYAMl31vjIQuIFxCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2F9ad4MxnVUHX6IbKtwD6fPkcKphkdynxUg6Sv7%2BS6CuQ%2BGtKixgLK%2FHVgwTWy8WnSnYW0V%2FUFFYZ4lUsa0CEN1voUoKD9%2FPh8O%2B8I49CAlFHXm%2FJMHSPQ16EHEiu4QVdu9nffgFOrOYkGuQL%2F8lBUhvgYngliQXVe88%2BE2ejkmGvlY6fkZR5oUB7pflusQqVCkgvvmKvG9CA6F95XylHxSYwtL8jTgCfxz8h4YRe%2Bnu3CNJhImiWfiTMiyXHyYKQBytQBUNPHwIH%2FtBhxK3LelGBFYKEf76nQNlXjTOwtjwv%2BjdKSY%2FuTfAJJJsy3PhZxnAAIaGTG3QVM4%2Fr9ycclFJnFkGqsB9AX3o3X%2FkfwXEalvh%2BwnQ%2F16wxXzSAHHApZ0iAUuDXY9lxz4633thYoQ%2F8Cnu7IL%2FHwr5zThhxtgVSVwpuhjAobk8wvzdPWEfo5%2BZ0t3lleWc1ojSXJhVdnfBhwrcIzUgvd8cXxbYBRfwNtTSWT1tU3m0g%2BdqyCHu%2F0QRtggpHV9N06sf7KROpVyO08bIjHTEk8atTUGx5loFeFanMrg2KykwsWDS6kht%2Fa5G6JHwGCB680JGTwxV3aAzbUm7jIMXw41%2BIqoO7z18NKySttNoEHNuRX3pvDx773PAnSvUWXnStAkw3PTKwgY6pgEFgYYmbKFcerowEqenoKwXGIi%2BFIx%2FIzUaswomwo%2BNSv5tALu0mlx8TvRmSkhzh3kHCtaWeW3nl6igDXHGTUWpTAxvtoxJr0SOEZSkLcmMFuIlTxeWmDclRodGfWLrV%2BA%2BXW9gAMw1zRo42VjZaGOHrwa21qBCcbiErlYxSmed2WHHBuXAVeZ3p5zS%2FQDX7VSULtYVQwQ9hf8Gqo6CTzGbiyUnaxCm&X-Amz-Signature=1adcedb1b1d2fb3268337811e42adff872d82c625cba0c34f4fc430225a3d5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634HVT5JQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyHA4isxaACKcauQeNW%2BFgTSgTjPTW6SCOexJ5JhG%2BoAiAS0eCnDYv8IBvRmdDJaHXk8kyUXkDudnS%2Fmx%2By18JeHSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCDwPv6XnapM6h%2FyjKtwDALcLi31xZRuHsUZHtyIL%2FYcOFf1Duu4eav6cs3OKAvPu090jRsT3BzPTEVsn1vLrh%2BkLkCgVYya3KOa0kcI3GnPRtGLJWOQ2yROPe%2F0mON1knvf%2FObPLh1jt1gtU4FES6MQHFMnwrJORReJgeuGdqfMPQZx9s81JjNWDuMjMxDUeILdlQ5oDdZfJcuTNncJcosZCLsgZ2o%2FfLS4SVvyudUDnQPVBz4jZ0TWfbUbGFyucgDfiJhJwQT8%2BKJ%2FEYh6UEIS%2FImK6DWK%2B9wlHKWcZxcNhfrgdnsRlpMhWN%2FcaNDNvN9LKVsUAhnoVkMeRN53HOfhAPSWB6cpKJKRI4Cn0%2BBJXE2NB7DcAnZiq3H3K1Son%2BP1mJjNFmZlFLo3y0VTRM0blvcsF8xAO0%2FZNvZieT%2F%2FF56eIP0A1h3U0YnWziNZ2b3qGYafHIS84dG8IVrkEI64122j2YtEB6U9OJXetAr2HqX1rSruWrjs%2FzlXXSa9UGXw02uIAYX3rbt3VFxgLPf70vqjqrt9HzWu9uo4KU7hmlTaOUML2XPsIjz5YbUN9eCjf%2F175OcUKIPNWqwhzpHXq6rSdXxG%2F5XEWT%2F04JRQCJyAGm%2Fq2Eji7tz1o%2FH0RuqU0QIQCT%2Fgn5xAwpfTKwgY6pgEvLQfkC6w4ZYskaRNM1JEEvKcAD%2BqveffbFAOYidF3yGJK%2Fn4qanWZOmWNvjasq%2Bg%2BflGKspioK78Zbj9Eijg2DWlH90PVHDr%2Bdmc40oGN%2BgmdvaqLAe4smab9vqbzQQxz8wwEiFnXhqnPZ1t5y5T1xXh85S4rqpUSJ1yHdR03uIdzP5%2F71qIX24Y9bDKl9HLzbZaxVDezYBKwVgm50dy1U8lI0FQZ&X-Amz-Signature=a0989012d5d4d2ab55a98e400366b0945b7d2af3ee89c6a820740d576fbcf18e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
