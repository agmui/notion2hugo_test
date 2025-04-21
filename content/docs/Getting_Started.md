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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHF5HJW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICJnJ5AqRI4b88RteICfr1FvpiAe21WC77uRu%2FL%2FRj4DAiEA%2FhogMUudam5I0LkrnqNdwKCBEIFqCbLpb7lJvhYpEM0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHukmuuk%2BJunyCQjbircA%2FDlD%2BrKds4a3aFTariOmyZAXpwAv1Y8XE7yT8pun72hrWSVWyYs6FQGl8yJ6EaX1P8tF1XOYlA%2BIPMMURRMBtbF2Xpv6kcikK6fV%2FHL0Wd%2BCyAUt4uV%2FHLMgMVI9ysH1TRGA1V6Xv26ILgIk2VrrgG%2BDWagktX2N5yRQQOUdD1ILVijurZ42zJMj1hulbYuhJY2oygon7KZVj%2BFPlpy4hdTmnolWGYOtHaPHsn5CmItun3S2dMmYm%2F3VUTzPOWsS0L2frUs4dvzezTbx8pA6mCbwysEnWH2f1F%2ButkW1zUIITVwNqwJtcVvekcIF0RBsPioCWcveUPRDHiyaiuVkbvWHwzSZ6vZF9nQpS%2B2z6q2hNmmcmu9%2FXu8xnlmbhisCDEd%2FjVCMt7rjceYtN8H858NvP9oEMHZ4wDkD0TcMnMCVp3xCH%2B8R89u78Vwb1l1D%2F21Mzb2ZKv6jeX5Ei6jNvHd0dM3q2s2CnZocfxxlPZh8AUcnC7J7OafM%2Bn7s3Lpn%2BvBiRI0doTyi%2B34VUOKoI7nMYmfID3eRi67uJyGx57%2FtiijW2msBkYvCSml5LH03ag2out2OgnKdpJB4hYw80gSQ9HCk167U%2BoO66vYlqrmdjSSeDPXXLZDBWktMOqAl8AGOqUB1GU7PAnqR6PAWI9%2BjMVDUQHdXx3kQI1Q5J7TzPtwGhsBB%2BaFpDO62unWAjRSDlLyDfCB%2BTgkUwg6wyksZkcS16oGE%2Fkq%2FFhhOQvZ81HwdYVG5c2ItCKVFdQqVzrDif66wP6wnaHEDd3QwskN4U%2BB7YSQvFx6iJuqxyO2OoNSL8x41SB8GZEkVTEGWEONTVg0GQhkMHCihqv3AOhyEWzzeDO%2FYTdk&X-Amz-Signature=fcef78489edf987d9a62cec590c81d91f7c51b4c1556d40c376ffb152816ed0f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHF5HJW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICJnJ5AqRI4b88RteICfr1FvpiAe21WC77uRu%2FL%2FRj4DAiEA%2FhogMUudam5I0LkrnqNdwKCBEIFqCbLpb7lJvhYpEM0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHukmuuk%2BJunyCQjbircA%2FDlD%2BrKds4a3aFTariOmyZAXpwAv1Y8XE7yT8pun72hrWSVWyYs6FQGl8yJ6EaX1P8tF1XOYlA%2BIPMMURRMBtbF2Xpv6kcikK6fV%2FHL0Wd%2BCyAUt4uV%2FHLMgMVI9ysH1TRGA1V6Xv26ILgIk2VrrgG%2BDWagktX2N5yRQQOUdD1ILVijurZ42zJMj1hulbYuhJY2oygon7KZVj%2BFPlpy4hdTmnolWGYOtHaPHsn5CmItun3S2dMmYm%2F3VUTzPOWsS0L2frUs4dvzezTbx8pA6mCbwysEnWH2f1F%2ButkW1zUIITVwNqwJtcVvekcIF0RBsPioCWcveUPRDHiyaiuVkbvWHwzSZ6vZF9nQpS%2B2z6q2hNmmcmu9%2FXu8xnlmbhisCDEd%2FjVCMt7rjceYtN8H858NvP9oEMHZ4wDkD0TcMnMCVp3xCH%2B8R89u78Vwb1l1D%2F21Mzb2ZKv6jeX5Ei6jNvHd0dM3q2s2CnZocfxxlPZh8AUcnC7J7OafM%2Bn7s3Lpn%2BvBiRI0doTyi%2B34VUOKoI7nMYmfID3eRi67uJyGx57%2FtiijW2msBkYvCSml5LH03ag2out2OgnKdpJB4hYw80gSQ9HCk167U%2BoO66vYlqrmdjSSeDPXXLZDBWktMOqAl8AGOqUB1GU7PAnqR6PAWI9%2BjMVDUQHdXx3kQI1Q5J7TzPtwGhsBB%2BaFpDO62unWAjRSDlLyDfCB%2BTgkUwg6wyksZkcS16oGE%2Fkq%2FFhhOQvZ81HwdYVG5c2ItCKVFdQqVzrDif66wP6wnaHEDd3QwskN4U%2BB7YSQvFx6iJuqxyO2OoNSL8x41SB8GZEkVTEGWEONTVg0GQhkMHCihqv3AOhyEWzzeDO%2FYTdk&X-Amz-Signature=dcd02a3e0ce382a4d0d19ec1d96ec7ac5fe35b436fb3c9870b52b556957d1984&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOD7SV2%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHtEzfxAXGH%2F9GHZwtfraLhM28r4atkYnYsh5s5JSrlaAiEA3QW%2BCu4SZh9ZBos6KvaCDuXNLavE5%2FTwzXYvA1Nt5xAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlZfiplOkTCpCNvzircA2eZdfd2osNGKECdvmSJu%2FUNOvzV%2BjMXTndyZHOMxZB8Fh85aREzR9FT4xgKsIVjmy0NBmlCKg0%2FDdkH0TFntW%2FwT3412Chwco5q5%2BEhPnDEX1oE%2BVd9hqiAheiA%2BJ9P6mhD4pJKyVkNVbRTWu2wxVs0ZrxSt4dlwU2K0EznKpSGJJArkO%2BI3Yy2%2BcQcTft0kZAWaNiXvcZUe5atyWtkSmgAhZtI7Ty8n9CzOa%2FbiXYktalkWQX6S94uF5OyvtsuQZpD1L6EZpc6KLVufLH%2F6H51auoE%2FJl%2BSTY7w90qGM3lxGah5vIuCL2QP0FASFWQjvyUVZ9tsTQ61COHSs44fWZVvftUf42FkaQtMj%2FoA%2Fkw8QPxvj3vhblkExboEB2UqW%2BxSQnnRF%2BRCgGX7o%2FvK2JYPEowgq7SZKSmnhKPkkOvjufSBrOsNuodmfaMqsDJnY0m19ZnzQ42GOPK%2F1BpH9MUns4KXSBc9NTkSfgh2hKvvoxVyQKC8rimuP%2FlyxGoO154G6lQokiaUWGF%2BC51QygxkBHkC9mJ3PAiHDeVNkGXa3eVT9TfApS3Mj8Amyf70ptTibX7QsTQJS%2FK2R8J7VB15UGYLYEkYGuByzUcx9mKpFhLbyAqm%2FDv434zMPqBl8AGOqUBwIrHenUwRqT03bBNnlcxcvCMxvzV21HK7VbuoONnpEkksiuY%2BqY3M5xItNwg85nBCubeUQf2NYDU4VHQMBL%2BJKDEANM%2Fx3e%2B6ImXvU6ecUg4V25lzzDdV1orsgwpI8O0iV4z44jFdV%2BnL7Xb%2B0Kb4OJ6Zh%2BV1fgTquYQwGFIworCssuRSxtwm1L%2FsDWAi5YlghEafr9nLOVNd%2BW4eDGA6auo05hs&X-Amz-Signature=5d1527ee7f56c3c4876f38233a46ffada7e23eed96f229a2ac5cc451755472d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKQB3LDE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBoUUlJQ9oYQBXhaQIN1cvnlTuZLjX75GW5LdoqvQ5EjAiEA7rpXLsmAK89ZqggPRRlP742%2BgAs5svADc1ciG9EZyGQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3SzXaFJokNQy%2FraSrcA%2BYRplRlt7inVVfY79t92NNciEjHOnrGswnPQPRVLotf20QQ%2FJvb3YNnawXluBntuXpENKxNTgy40CPdOnwyg6WT9Bdj9iMlU20PMZQDFIICIBQ3epX7qx06aYrJ2h9zC2dNzXr7KV5HE5WMR%2BMgltbCxxNIWTqXrfjBzZkUCLIHQqWQ02sLoc5XRHYL2NirxPYdVvFvQtAUkM6PQIoRhLLKQdfObXg7PMvfyTa%2BosYA5MeQKrkldXug9Hbl3dvQOpD17NfovPbbHYJxtZA4jwDC4emiVmWw1BuIvpIfByBakP5d3PZ3yDdGp%2Brcs9TbA3W3hQH3Aa5aogut9x3xq%2FZbhvOo2GUo%2Fdfenq1hjJBqhYRAlw5NK3z4pr%2FMV%2BX7pn4iZZ87BP1sBVTBObmfP2paQ4MwKg%2B6wUZd623Rtc5a%2Buf3l2DXx3gXzHYSqj0OU7%2FcNDnKm%2BqcV3ORLpvZ%2FWMR%2Fs%2BaQbZ4CUp79odgVdd99RyV%2BLDSQ2PBe30oQxEZoX9P06VIE5naZ9ZNg2FVEXxpswQbdJlqQf21F2SUeu%2Fs3nUDXpzqg9is%2Bmka9EugTjIRharPTixJE3s2wQ17rxy2NTwPMsdJ5RPWZNr26e%2F%2FYtE7StOXc%2Fn1M2rEMP3%2FlsAGOqUBGMqDQKjuA62Vy3aLVW6POkFz1YAFXTuG5CSJvWXOTozkUBOS1aDd8gwly7hBW1Ca69jbKU5hTgyuaRQnY%2F7oqYyUnAEw%2B0czdp3KKDNAd7jODm%2FirNR7yNQnCvL9PHFI%2FYL5k7rv%2BTypcaBHQQvLu2qUhiFtwDqMoqqFrecLZMShSljbuZzoThfxsMTJJTLQ5lLVVCcgy64UZmSPtq9UEmKXyFzl&X-Amz-Signature=7d0968882d8fb846b92bf79186b8e54a9c60f98a1e01fe2421999dff2416ae6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BHF5HJW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICJnJ5AqRI4b88RteICfr1FvpiAe21WC77uRu%2FL%2FRj4DAiEA%2FhogMUudam5I0LkrnqNdwKCBEIFqCbLpb7lJvhYpEM0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHukmuuk%2BJunyCQjbircA%2FDlD%2BrKds4a3aFTariOmyZAXpwAv1Y8XE7yT8pun72hrWSVWyYs6FQGl8yJ6EaX1P8tF1XOYlA%2BIPMMURRMBtbF2Xpv6kcikK6fV%2FHL0Wd%2BCyAUt4uV%2FHLMgMVI9ysH1TRGA1V6Xv26ILgIk2VrrgG%2BDWagktX2N5yRQQOUdD1ILVijurZ42zJMj1hulbYuhJY2oygon7KZVj%2BFPlpy4hdTmnolWGYOtHaPHsn5CmItun3S2dMmYm%2F3VUTzPOWsS0L2frUs4dvzezTbx8pA6mCbwysEnWH2f1F%2ButkW1zUIITVwNqwJtcVvekcIF0RBsPioCWcveUPRDHiyaiuVkbvWHwzSZ6vZF9nQpS%2B2z6q2hNmmcmu9%2FXu8xnlmbhisCDEd%2FjVCMt7rjceYtN8H858NvP9oEMHZ4wDkD0TcMnMCVp3xCH%2B8R89u78Vwb1l1D%2F21Mzb2ZKv6jeX5Ei6jNvHd0dM3q2s2CnZocfxxlPZh8AUcnC7J7OafM%2Bn7s3Lpn%2BvBiRI0doTyi%2B34VUOKoI7nMYmfID3eRi67uJyGx57%2FtiijW2msBkYvCSml5LH03ag2out2OgnKdpJB4hYw80gSQ9HCk167U%2BoO66vYlqrmdjSSeDPXXLZDBWktMOqAl8AGOqUB1GU7PAnqR6PAWI9%2BjMVDUQHdXx3kQI1Q5J7TzPtwGhsBB%2BaFpDO62unWAjRSDlLyDfCB%2BTgkUwg6wyksZkcS16oGE%2Fkq%2FFhhOQvZ81HwdYVG5c2ItCKVFdQqVzrDif66wP6wnaHEDd3QwskN4U%2BB7YSQvFx6iJuqxyO2OoNSL8x41SB8GZEkVTEGWEONTVg0GQhkMHCihqv3AOhyEWzzeDO%2FYTdk&X-Amz-Signature=9b07708dfb9b3dcd4baf839a10d6ffcd72800632d1e78702f235521234ce3905&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
