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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI33BZT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFN3RcSrzkYMX650ht12G3cqZxZ5ngtEXPzhtNeSUYdtAiAJjgfggqbs%2BVxT7qwPvd3mX8CyJtVPyE84T9LxZlwvMCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOOwifq7ItRBIzHpPKtwDLWv%2FrWU5BkK3BIE9M%2F8TN%2BPAJxAj28791uhmdTVG7ARgoBDQnMbSUvUnPzg0mllNEIqJTObBIgca8p7DsMS8ccnNzv0rekL%2BeUZE7bz1yA7lgB4bb0yypwjYGMSVZO4QoGHRNJXmXT7XelBGnVQnw2rhRWO%2Fm0cuFX6k70SHS2V4VMwpEsYxjS54p3b3n7FFBifUgNt%2B%2FMZJ5h5jF3QBqZKwk9M1HtZ1IGwienZq3zX%2BWn5CHCBgklnzON3Jb1Y825rsOvlSPjGzwtpvNekNh8D2a4jJtdJMWLrgTu6ezW2q9VLNt09mGjq1IBjLWMI4FArgC1Gs3KALE%2FB2x0HjrdhDvChdx8Im487mtAX7CozrydPSIh6UNh9yzZ1TkSDXMzjsm9C3T2bQfyWLodCYELsL%2B%2BNp1DmDAj0gsSUYTEkBRYCsYnrPzHRwRUPif2YdpzK%2ByDhqIVddu8zrckI0FoQqc%2FRfvFsrL0T01Zddll9n9Er9FoezWg7DxpLXoqB8Kog92gPmv6AaMBw%2BU10zA4NEA35w75KcTcUSzYqR0%2FZKFBFJc5SBQdVeqbzVsN2hx5%2FVTTBexK9aFI2LiNnAAitFMHF%2B%2FAm1x9KreTvbf8e1MIB5cYxHpHfh%2Fn4whPuQvgY6pgGdzh1JXagN5dtpkD%2BwfhR4%2BAxwjX4Cxp78SQpiO66DIEjaL7cY9oLw9i3rO1gShjMKgv2kA2WPec4qIUZu4H3wEWUte5ZctsV1ljsO4PA1KiqWbKKhbO5nTrsMFijmrnyVkUsYG2NxZE3s%2FMtPvYHIhXFpc1WqHpoWFB%2F3QVzqhBq3CHR03pbPXvR1caGUjesz2lewCQpezmbfMrnQr%2FHnGvyb6z0K&X-Amz-Signature=e42286ae490db4ecb44e9d5cadfe409364db2c198235fa0e9760a0326b0b39d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI33BZT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFN3RcSrzkYMX650ht12G3cqZxZ5ngtEXPzhtNeSUYdtAiAJjgfggqbs%2BVxT7qwPvd3mX8CyJtVPyE84T9LxZlwvMCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOOwifq7ItRBIzHpPKtwDLWv%2FrWU5BkK3BIE9M%2F8TN%2BPAJxAj28791uhmdTVG7ARgoBDQnMbSUvUnPzg0mllNEIqJTObBIgca8p7DsMS8ccnNzv0rekL%2BeUZE7bz1yA7lgB4bb0yypwjYGMSVZO4QoGHRNJXmXT7XelBGnVQnw2rhRWO%2Fm0cuFX6k70SHS2V4VMwpEsYxjS54p3b3n7FFBifUgNt%2B%2FMZJ5h5jF3QBqZKwk9M1HtZ1IGwienZq3zX%2BWn5CHCBgklnzON3Jb1Y825rsOvlSPjGzwtpvNekNh8D2a4jJtdJMWLrgTu6ezW2q9VLNt09mGjq1IBjLWMI4FArgC1Gs3KALE%2FB2x0HjrdhDvChdx8Im487mtAX7CozrydPSIh6UNh9yzZ1TkSDXMzjsm9C3T2bQfyWLodCYELsL%2B%2BNp1DmDAj0gsSUYTEkBRYCsYnrPzHRwRUPif2YdpzK%2ByDhqIVddu8zrckI0FoQqc%2FRfvFsrL0T01Zddll9n9Er9FoezWg7DxpLXoqB8Kog92gPmv6AaMBw%2BU10zA4NEA35w75KcTcUSzYqR0%2FZKFBFJc5SBQdVeqbzVsN2hx5%2FVTTBexK9aFI2LiNnAAitFMHF%2B%2FAm1x9KreTvbf8e1MIB5cYxHpHfh%2Fn4whPuQvgY6pgGdzh1JXagN5dtpkD%2BwfhR4%2BAxwjX4Cxp78SQpiO66DIEjaL7cY9oLw9i3rO1gShjMKgv2kA2WPec4qIUZu4H3wEWUte5ZctsV1ljsO4PA1KiqWbKKhbO5nTrsMFijmrnyVkUsYG2NxZE3s%2FMtPvYHIhXFpc1WqHpoWFB%2F3QVzqhBq3CHR03pbPXvR1caGUjesz2lewCQpezmbfMrnQr%2FHnGvyb6z0K&X-Amz-Signature=240ab867773e35b3fb04376da74a39b4c17a612008f829624b75471c9a9fc790&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHT3O2RW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd85c4ffp%2BZ%2BpIYjTKUWtoGsaWh2467i3XpyPgP7JFZwIhAP8nHas1OxMD0T18ZXiXz46fYBAeDzOORfvtT6Vv1M7vKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FnFoHNjx4G%2FYxMfAq3ANoxIjHGXiwxb3BLtmMomMqIT84%2BxJpcOEp9sTvzglPdSgUIxhkGATA8Twc2o14Tdt09TnKgEITs7WyovK48u8M5ENaER0JZ3P4eFkJu5eQasqYu30G%2FvQgDcWYpeDW1WDGcGQJjvltLxzOAGSPPkAvBShGhVrLKtxXq%2BwtqvAEy%2FqJVlnnbcDpuSzbsRV1rr3dIhYL80gnPkAWzVukuobScp7wB3DeAgH4y1uZNJAGGPsZNHNzSQn%2F%2F8QWLvk6cauxMQaqpjmIvQb9W7FNvziI5AzzTswMSwBVJB7JniCqROjPwAHIyzyO3JPbKcG6XogLPAIyI4a35JRZkRvnJFXC%2BhikEMq%2FdNgQQ7FAk%2F6zb5SiDP%2BBGXZFL0kG4pIMFvf00L6OZ9J6OymQa%2BS8ZRuiF53EM9umOjiOyMNwK8p4vL2k%2FkN%2BYkUq0mAEV178vHlgCys4rvQOqr63kIa8yKCrB9Z3CGAOIcep1cXNwi3saP0upOFX52u7Hr%2Fh4%2FUoeojkaPQ3Oei5fzl5daioN3Oj9r8uiDpZxwnA2FKZ89YD162SYNmYSiTyIKCxr5f2ZK7wnbxPQHDknJLADL9HLaXRP%2FCy59gDRlDUHjIf9YOq6vqEYtPoX9eqW9ViIjCDlpK%2BBjqkAQgY3fUYaKRnJJo5ntO7oRQFhQLYJ61%2FjOpaPLb25SilOfmgczDPm7HVG6RR85aOgX0y%2FNeK%2Bz9tS%2Bu1I7Ha9H2pIGUetUg82eJGRdeMfG7bHqHk9q0P%2FVeHmB0Pj92P4uvurOpPR20A%2BzE%2BZfxhRy7h%2BVsrqgKhpcffPjX2mpm6WDu6dizQidFpxfPXKWpqjsLVT8YaoPRZ2zJHxKmWRGMabvj%2B&X-Amz-Signature=bec6edc9c499d8e8d87f08946fd6d1babcc88b11a4d474899c4dc47246322b90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PTAISGH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID78KXYDbKgMjNA7iZAV%2B8VZyqsQK3gtK46Vo7%2FKP%2BYdAiAZufCqFVpZaFSUW%2B8TyMZ20D9OQvapZjEoH2gTfLmjJSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiKNz90TysjxQjKxQKtwDbzvAJb%2Fi1eoCSdOr3se00OUF9HpKGYNu6FluTVtDrSA4LkeyOcX%2F80rXObVEPQGtYbcENlgBX0yywImjslVBFnxqcJQY70j%2B%2FXXIbd74Vv1lzeJmUlQdAKv7z%2FpnhLZ2wXo6H3Mfc2s%2F9G7Huv%2F0OAp8mtGDVYO7eOYKimHlhkeKiN2t4YUyviBaJEqrs88P%2FSVgmfNgsR%2FZMmqLYZURacjz83O6fHjn38oeIuK1H1%2BXDo9IMI%2B2E0iqFu0YO6g3aH%2FGlY6cgu25I4cN2yZIIRnsW7hB%2FP7RXCWE4qsys%2F%2B8vAktELaCD8nmMLcWoWA6mUnNp%2B9wFrLwknihUsqOuCCd%2F0cylYTzTAl2cO2v1PXFgwp8CmDmWPMGNeEK76x1k7qBKOZq%2BXJ4SPNHGQq7pLwZThMiSjpWlhKuQl9RaLpBXlvz9HnhIhbm3kzUPYg37Esk9MpaD6f2%2BXRIqVQ0m5FcOnudG%2FPDRq%2Bf0TrK%2Fb4WiuKVGQ3Sz5m6RzsKbBT6zVPlYGwDtQCJBiwfFmFhWUqVXBW0ZHMAUOAd%2FBeUsAitls9LeTNbEwjOTHjLDa6JozhYnkYSEoRcz9DdO7GjiqP8w9fMrnYPTxGR%2FwAKF4yTfBqH73%2F1u0K8N5UwipKRvgY6pgH1BLixQSDyf%2FBiOP8ob1zCMpF4Xm%2FDPqUGCwLLasCH2%2BFWY1JIEOz2cvMaDyGZET8tKie7GaEEQdHc%2B9zlZ6Ez%2Fn5Y7kLIslFuvmBOCjLmJ%2F%2FAv3CUtWdNBwcGWJVaNMgiFkzIpIWZ9w9ALZVGi0Snbs0lf7jT0iyYlr7tzEoeuvm4uOhu8RsK5XryhzXMSvDJjN8KF7pae%2FwOw9R%2FFv5IOiGVYI2h&X-Amz-Signature=f12fa3b3f3563fb826ffaba75c906388970279750fa42ab0a961bf3f6c95a00c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI33BZT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFN3RcSrzkYMX650ht12G3cqZxZ5ngtEXPzhtNeSUYdtAiAJjgfggqbs%2BVxT7qwPvd3mX8CyJtVPyE84T9LxZlwvMCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOOwifq7ItRBIzHpPKtwDLWv%2FrWU5BkK3BIE9M%2F8TN%2BPAJxAj28791uhmdTVG7ARgoBDQnMbSUvUnPzg0mllNEIqJTObBIgca8p7DsMS8ccnNzv0rekL%2BeUZE7bz1yA7lgB4bb0yypwjYGMSVZO4QoGHRNJXmXT7XelBGnVQnw2rhRWO%2Fm0cuFX6k70SHS2V4VMwpEsYxjS54p3b3n7FFBifUgNt%2B%2FMZJ5h5jF3QBqZKwk9M1HtZ1IGwienZq3zX%2BWn5CHCBgklnzON3Jb1Y825rsOvlSPjGzwtpvNekNh8D2a4jJtdJMWLrgTu6ezW2q9VLNt09mGjq1IBjLWMI4FArgC1Gs3KALE%2FB2x0HjrdhDvChdx8Im487mtAX7CozrydPSIh6UNh9yzZ1TkSDXMzjsm9C3T2bQfyWLodCYELsL%2B%2BNp1DmDAj0gsSUYTEkBRYCsYnrPzHRwRUPif2YdpzK%2ByDhqIVddu8zrckI0FoQqc%2FRfvFsrL0T01Zddll9n9Er9FoezWg7DxpLXoqB8Kog92gPmv6AaMBw%2BU10zA4NEA35w75KcTcUSzYqR0%2FZKFBFJc5SBQdVeqbzVsN2hx5%2FVTTBexK9aFI2LiNnAAitFMHF%2B%2FAm1x9KreTvbf8e1MIB5cYxHpHfh%2Fn4whPuQvgY6pgGdzh1JXagN5dtpkD%2BwfhR4%2BAxwjX4Cxp78SQpiO66DIEjaL7cY9oLw9i3rO1gShjMKgv2kA2WPec4qIUZu4H3wEWUte5ZctsV1ljsO4PA1KiqWbKKhbO5nTrsMFijmrnyVkUsYG2NxZE3s%2FMtPvYHIhXFpc1WqHpoWFB%2F3QVzqhBq3CHR03pbPXvR1caGUjesz2lewCQpezmbfMrnQr%2FHnGvyb6z0K&X-Amz-Signature=740fb825ccb5b1b9f99cc008edc278502adbd34958b65a5f8488f58919f94161&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
