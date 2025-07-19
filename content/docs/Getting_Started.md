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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VLJA5RC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMlop2ZO1URp51iAps2qTPpa1bhk4OPXAjI%2Fm1WGgp5AiBhFt5%2Bl3ts3CZQ%2BJZ7AvDIFOqeppSw8Z6tyaRLLMbZdiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqhjIRDHsYUBCbI%2BsKtwDVIT6ctH17k%2F%2FZn8kLMVPkWR183fwaRagMCPuXJ7puhjaS1UuDxUOJJbCVwQBrCvun8kn5%2F1Cl7Wtbn26BIfRvz04btjjcXjspcCs3imJTklLzW%2BPwmKTrfZOlS7LozcIyW0axq2kltw%2FZOAV29M29kbOX4xR4aD%2FWqRuDg%2FosqwANUNrnSjVkEK9LOBSEHtJndeRG5DFai4MJlTOvL3ros%2BbieCHPCI%2Fq7mhecytjwDWuRMnB8AVOwt6yFbWzHMOn4UUNpNOGUds%2B52d1cAUN2mTi92dtAQ16tfmPP3ssvkpaPImH%2FZNQ0dweiutaEyvhq2e1iPr3wnG5Y1mhVWeFz22djJktAmT6V%2BlJHQBum6F0jyPcjXB2xElqKs0FDU%2F644ciy6op3qtKlN0ZZjnfQrglZG7vrB9Oiz3%2FfmXEku0OGeCxd820JyEiRhlE2IGaUBepgegprmJrallLsdg3AYWQO9%2FqQ%2FXkJeFaCBIBZ9YXmTs%2F%2BK2o4TLqXj63tvUSHsTPiJsRLYsu0efW3TB83ci0wTV80PBBdFOZNr3hvfJITDjC6uHZ9ws4bqkV%2BDS6uzYU0%2BeM1vm3Z4xfQL9PvZ1s1K930jlkT9frdDkhrAxk9%2FfDgypdFgS97Aw%2FvXvwwY6pgEI%2FGP50q7CMGZctnDRkJLb5lj616B4k8tcaq9jgWAyDB5P4oehcVNISzpNsj0tTZOv6PbG17HD8G6Q8KUmEzdZyhgG8ncAncpGsKAkublQLyhJnZf223m1vXJpWp2VhFM74PZ0TrIR2oFu9j4ZMnpUKBsOw%2B%2F30qsqt0fjLt3W5UWsv%2F9ceAd3pBHTTOeRy%2FZtDSHVKu%2BBwRk4qus6%2FVm5HYGTMjhJ&X-Amz-Signature=fc04ee691d0911b5a81e010f2a3e78337e64e1dfcc33dd5771736ca1d8448994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VLJA5RC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMlop2ZO1URp51iAps2qTPpa1bhk4OPXAjI%2Fm1WGgp5AiBhFt5%2Bl3ts3CZQ%2BJZ7AvDIFOqeppSw8Z6tyaRLLMbZdiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqhjIRDHsYUBCbI%2BsKtwDVIT6ctH17k%2F%2FZn8kLMVPkWR183fwaRagMCPuXJ7puhjaS1UuDxUOJJbCVwQBrCvun8kn5%2F1Cl7Wtbn26BIfRvz04btjjcXjspcCs3imJTklLzW%2BPwmKTrfZOlS7LozcIyW0axq2kltw%2FZOAV29M29kbOX4xR4aD%2FWqRuDg%2FosqwANUNrnSjVkEK9LOBSEHtJndeRG5DFai4MJlTOvL3ros%2BbieCHPCI%2Fq7mhecytjwDWuRMnB8AVOwt6yFbWzHMOn4UUNpNOGUds%2B52d1cAUN2mTi92dtAQ16tfmPP3ssvkpaPImH%2FZNQ0dweiutaEyvhq2e1iPr3wnG5Y1mhVWeFz22djJktAmT6V%2BlJHQBum6F0jyPcjXB2xElqKs0FDU%2F644ciy6op3qtKlN0ZZjnfQrglZG7vrB9Oiz3%2FfmXEku0OGeCxd820JyEiRhlE2IGaUBepgegprmJrallLsdg3AYWQO9%2FqQ%2FXkJeFaCBIBZ9YXmTs%2F%2BK2o4TLqXj63tvUSHsTPiJsRLYsu0efW3TB83ci0wTV80PBBdFOZNr3hvfJITDjC6uHZ9ws4bqkV%2BDS6uzYU0%2BeM1vm3Z4xfQL9PvZ1s1K930jlkT9frdDkhrAxk9%2FfDgypdFgS97Aw%2FvXvwwY6pgEI%2FGP50q7CMGZctnDRkJLb5lj616B4k8tcaq9jgWAyDB5P4oehcVNISzpNsj0tTZOv6PbG17HD8G6Q8KUmEzdZyhgG8ncAncpGsKAkublQLyhJnZf223m1vXJpWp2VhFM74PZ0TrIR2oFu9j4ZMnpUKBsOw%2B%2F30qsqt0fjLt3W5UWsv%2F9ceAd3pBHTTOeRy%2FZtDSHVKu%2BBwRk4qus6%2FVm5HYGTMjhJ&X-Amz-Signature=c9cde5c28bf1040bc84cd1a6b9e71a08097da837e43ec4e423ee98009e0997bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VLJA5RC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMlop2ZO1URp51iAps2qTPpa1bhk4OPXAjI%2Fm1WGgp5AiBhFt5%2Bl3ts3CZQ%2BJZ7AvDIFOqeppSw8Z6tyaRLLMbZdiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqhjIRDHsYUBCbI%2BsKtwDVIT6ctH17k%2F%2FZn8kLMVPkWR183fwaRagMCPuXJ7puhjaS1UuDxUOJJbCVwQBrCvun8kn5%2F1Cl7Wtbn26BIfRvz04btjjcXjspcCs3imJTklLzW%2BPwmKTrfZOlS7LozcIyW0axq2kltw%2FZOAV29M29kbOX4xR4aD%2FWqRuDg%2FosqwANUNrnSjVkEK9LOBSEHtJndeRG5DFai4MJlTOvL3ros%2BbieCHPCI%2Fq7mhecytjwDWuRMnB8AVOwt6yFbWzHMOn4UUNpNOGUds%2B52d1cAUN2mTi92dtAQ16tfmPP3ssvkpaPImH%2FZNQ0dweiutaEyvhq2e1iPr3wnG5Y1mhVWeFz22djJktAmT6V%2BlJHQBum6F0jyPcjXB2xElqKs0FDU%2F644ciy6op3qtKlN0ZZjnfQrglZG7vrB9Oiz3%2FfmXEku0OGeCxd820JyEiRhlE2IGaUBepgegprmJrallLsdg3AYWQO9%2FqQ%2FXkJeFaCBIBZ9YXmTs%2F%2BK2o4TLqXj63tvUSHsTPiJsRLYsu0efW3TB83ci0wTV80PBBdFOZNr3hvfJITDjC6uHZ9ws4bqkV%2BDS6uzYU0%2BeM1vm3Z4xfQL9PvZ1s1K930jlkT9frdDkhrAxk9%2FfDgypdFgS97Aw%2FvXvwwY6pgEI%2FGP50q7CMGZctnDRkJLb5lj616B4k8tcaq9jgWAyDB5P4oehcVNISzpNsj0tTZOv6PbG17HD8G6Q8KUmEzdZyhgG8ncAncpGsKAkublQLyhJnZf223m1vXJpWp2VhFM74PZ0TrIR2oFu9j4ZMnpUKBsOw%2B%2F30qsqt0fjLt3W5UWsv%2F9ceAd3pBHTTOeRy%2FZtDSHVKu%2BBwRk4qus6%2FVm5HYGTMjhJ&X-Amz-Signature=b14fdee18fedc82a914f89b2a306e4206a4fa0428b76e9876446e06a336e181c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624YS5ZYR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqXi%2BzuFVdJ0bVp%2BIdmrrH%2BtHxeHT%2BEosPjB7YKIaJJAiEA43Cqztwpmxs4Zxtf1CSlJkAuYBeYIXacH7CPO8RsbawqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8myhw62SCd1iJ%2BPSrcA9B%2FsvyaamsQkvd9HN1twrvMhbBBTzW3URuMCqKwJycWq0zXhS534aTfuY3uHDwiBldYG1GKy6yESkHTu7wjZDrfM4Ws2bqa7ZFM040dPHGsoTy2dED7OAbXWbZ3%2FLRH6Sod7sLZdkKZZFnr6B%2BEERs6SMYZGYoog787hSIiGnnFs3Hmx%2BQ4p9H5lOoAsN6o%2BSKH6avQp%2FG18Ok%2Bk%2B1ixa6ZLtRNEccZYloWFtDAesI7XEfJa4WCXJ4OeObnuEC4PRV2EByWUhRnlIRjNndLmDy%2Bhw6l%2B35uwyaV5dQhCMFBmoqbo1r0Hd4ejdz9Dk%2F10zR5HnhHuKkHDlECrV6ovif82P5fP87gFm0UWpXYH%2B1QsmCmqpVlOoorwFOPLHLjINl2jH7UZmxTJ%2FeyLiOcqF0TRNaQq%2BMEdTRTlHMFeAHQbtgX8l6o0vcL2rSHeK489k9C37rVqdZQTLI1YD6gdvVOI9ONy4xP1idzbU9l8Pp1XZS81uBaLLElfY1foCrQDDjRtfhHX32mmI2LMWP9%2BPaHoIQKNW2L%2BfZIRLuns6Bp37Gk76Fj%2BJNpw%2FA%2BfZXl50OfVSBd%2FDrfumLFxRGyvJTy3OayOWzaptDUI7EYmQbVBnID4oxs%2B1YKAWBzMLP178MGOqUBAx%2BgNjV1xKTD%2FtjbpjrenW8S2aIRdLRx4iOu0wdd8mQAUl%2FJr1sroacazmueYai93NSLzg%2BMNxCmG%2BL72%2F%2B5ScbQX7evEkAJfleZcKnKITPugdWqSuYFo2Woeb9B1%2BqQsQk5SIPjSCEd1imuseGHCvwF7FpKXUpXwxH9JIm1cSV7kLHnlN%2Fhvhs572TJ79ZuMv3JLafsxfo3WwcufdHMTtfWneDz&X-Amz-Signature=43b0b3e2191b1ff75d00d88e430a1fc20c48c99874049c1640ce34244fd711b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M5YQRHJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD30PgPNH1WR%2FQPp%2F%2Bmk%2BiAPQ6ccjyyw6xbFpAfCb1VrAIhAI1kPHXo17t68Apzefi5lECubuPiD9mEnIV%2FxfYU3I%2BfKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx44arYiq6vOSaOjeQq3AMg4DrvpJAQy1bqZmeOHMjOkQcr8K7U7SKACovFCl0sWCEnKkNVp9YHZnS5b5QhqRblZVVITYdT2GP60hGAem2kUB3CLtB3TFycI17VWy3Ynw9xqIKj0tWfc6dwmQwCbqsIWj9GG6%2Bblgx%2FLt03YPSdMdzTtCpvVh%2FtpmAL64Ync9brL8%2FfeGe0%2FrzLpJ%2B3OqeSA218fLUshTz%2FyqpLO9B55P2UPshbsNZfRo%2BoSC0MaS6cC2tXYCe3XRAhBHVoYnFkZdoF0p5%2BNyQqpn1p66tNPJ%2BC3oLlClgFEw4uxQbsqWO6g4sE2wojNnuOgf8z9BDawiKaqOn4T5oBUyB6U62be3Icd1P%2B4%2BWmQsDUGaUHPO4KIMklQe0aPI4qMe21s35mLQZddsuhQIOVdwNJb9tALnGIM%2B5ssvUn9sMA6mWwvKT8sBDuKbv2%2BQ6cUZVvR80vyFH4kckfEqwbPEtyFHbsUNuA85MCjw0tERDhPTAm9GYMpYORWmxjjFCInMaOTNE2F8ppejzZBLPlZ%2Bhn013WaW9gQ6tN%2FSyVzL5C4LVeSit27d6Cyvm85bLyLAwJA3%2FaqPW6sMAkTMO128G6siPEbATLdoChMI%2F%2BisXZmy35otW%2Br5U4y%2B74JtDJmDD%2B9e%2FDBjqkAbCajaWP6juZxrSISkFFdz99LwmmwFv1nGaUl00AWq4%2BrIDRviKc1WUrFeAjs0wIL%2F9hCxdkHw6yr7ITOTL9K6bH51nJpkDqnL50KMWul0rC25Eg8mUQbpn5cdIjcXqfguuNrPsG9XzBpIXgN0u1wORpUeZbGBAWlMkp0HjfEexkPJoxpI7pV%2FITWo1gr5z5jxaZZmGxh5FPHmTm53jV9wn6w1qV&X-Amz-Signature=d66ae6d5b05bc79737041a9862ba349dce0492c0fe7e9a91faccea3e4117c9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VLJA5RC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMlop2ZO1URp51iAps2qTPpa1bhk4OPXAjI%2Fm1WGgp5AiBhFt5%2Bl3ts3CZQ%2BJZ7AvDIFOqeppSw8Z6tyaRLLMbZdiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqhjIRDHsYUBCbI%2BsKtwDVIT6ctH17k%2F%2FZn8kLMVPkWR183fwaRagMCPuXJ7puhjaS1UuDxUOJJbCVwQBrCvun8kn5%2F1Cl7Wtbn26BIfRvz04btjjcXjspcCs3imJTklLzW%2BPwmKTrfZOlS7LozcIyW0axq2kltw%2FZOAV29M29kbOX4xR4aD%2FWqRuDg%2FosqwANUNrnSjVkEK9LOBSEHtJndeRG5DFai4MJlTOvL3ros%2BbieCHPCI%2Fq7mhecytjwDWuRMnB8AVOwt6yFbWzHMOn4UUNpNOGUds%2B52d1cAUN2mTi92dtAQ16tfmPP3ssvkpaPImH%2FZNQ0dweiutaEyvhq2e1iPr3wnG5Y1mhVWeFz22djJktAmT6V%2BlJHQBum6F0jyPcjXB2xElqKs0FDU%2F644ciy6op3qtKlN0ZZjnfQrglZG7vrB9Oiz3%2FfmXEku0OGeCxd820JyEiRhlE2IGaUBepgegprmJrallLsdg3AYWQO9%2FqQ%2FXkJeFaCBIBZ9YXmTs%2F%2BK2o4TLqXj63tvUSHsTPiJsRLYsu0efW3TB83ci0wTV80PBBdFOZNr3hvfJITDjC6uHZ9ws4bqkV%2BDS6uzYU0%2BeM1vm3Z4xfQL9PvZ1s1K930jlkT9frdDkhrAxk9%2FfDgypdFgS97Aw%2FvXvwwY6pgEI%2FGP50q7CMGZctnDRkJLb5lj616B4k8tcaq9jgWAyDB5P4oehcVNISzpNsj0tTZOv6PbG17HD8G6Q8KUmEzdZyhgG8ncAncpGsKAkublQLyhJnZf223m1vXJpWp2VhFM74PZ0TrIR2oFu9j4ZMnpUKBsOw%2B%2F30qsqt0fjLt3W5UWsv%2F9ceAd3pBHTTOeRy%2FZtDSHVKu%2BBwRk4qus6%2FVm5HYGTMjhJ&X-Amz-Signature=afa6400b6068766cd5fcd12a998870c3b63f2fd8735debda8f14bea15458b880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
