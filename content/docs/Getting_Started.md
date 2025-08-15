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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRX2QLWI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIH5%2Fy21loEC4drKPc%2F25LbhcYCuAbq%2Be2WM3gd8tGAP4AiEAt2ZNcPJaiVCkssCm9GMUENnNjVkWU7XRvW%2BdpTaBhmgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLIo0jroSXJSVQjLbSrcA5jGAif5mTnEOtFXGkHlZl0rd9tmyCYsY9D0CRvMV20SGt6zYM8DGZZYs9yt4EOYiqrsumYkap%2FGc%2B6ADvQhSpr01y2fC1seX%2BuD8r4%2FUjALbhIxf8RrI5rVfGI%2Bg7YGBwDe44x%2BKPXruAnXkpUMm3qjeUOMGimvRiTTDOCXYjT4EGB%2B6%2BIier88FIrlZ0Z%2FlUFumFewsBFXh4e6AASLV3CVx%2F5P64a0PIbpVpniO5Qdzq3wLGXcEYmeqDmOa74%2F55Au0BFLadWvp2ezoHTjvIvN7EgCFstlfs7RMGulI4lq%2BB0Og537mRNe8v3cAPvLERSFwT0xQkiVqhIpbgDDR2AVT1b%2FQVuVsHGaPXC1OY5MkHk%2B5ZWfcTSLkpP2%2Fw4DjOx0pZKXPRxt56awr8OTNN9xdyV5Zge8y3rrJpX06V30J2I6SGOO9hs2QfENq4MQ0P5PfMWMtt3R%2BbkpYhph0KrJ2300AOoeAqjze6emCVpbLTTHQp%2FhirnrCp%2F7DLcaB39LB%2FIZm%2Ff%2FJkuPwA6J189OEbF7Yzqu%2FCn2kutYvfinwgR%2FNBNDLGlteQ4a%2BRdND1J7K1WYEnnKLff%2FHjmrpIWIcVoUnkBQE9TMut0qpWzbLXiciGmO0QaEUXl4MK20%2FcQGOqUBaepWKtLZ6pgZoeasQp36KH8jkbE4xfrcG83GPz3yu%2BIIkcSrTzhwJRY47oNxaoApVzuu4KA12b0Vgnse8QBptuFRMZYNhu1Nf2EYWxpyhVb5Zu%2B4mGnax9zSYGDZoUVf828S4iEmBwNTvFs4sh2tSASGj9PzGzSo1HUjIdW8jBbKhdAh0cbQN6waHuxQl01CMxY%2F%2FEFDog3FYOcGSL34pAmqkYB5&X-Amz-Signature=14c6ecc5f8ac247269e76770be892fd782364f2f8d8641b54a199470a6a87431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRX2QLWI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIH5%2Fy21loEC4drKPc%2F25LbhcYCuAbq%2Be2WM3gd8tGAP4AiEAt2ZNcPJaiVCkssCm9GMUENnNjVkWU7XRvW%2BdpTaBhmgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLIo0jroSXJSVQjLbSrcA5jGAif5mTnEOtFXGkHlZl0rd9tmyCYsY9D0CRvMV20SGt6zYM8DGZZYs9yt4EOYiqrsumYkap%2FGc%2B6ADvQhSpr01y2fC1seX%2BuD8r4%2FUjALbhIxf8RrI5rVfGI%2Bg7YGBwDe44x%2BKPXruAnXkpUMm3qjeUOMGimvRiTTDOCXYjT4EGB%2B6%2BIier88FIrlZ0Z%2FlUFumFewsBFXh4e6AASLV3CVx%2F5P64a0PIbpVpniO5Qdzq3wLGXcEYmeqDmOa74%2F55Au0BFLadWvp2ezoHTjvIvN7EgCFstlfs7RMGulI4lq%2BB0Og537mRNe8v3cAPvLERSFwT0xQkiVqhIpbgDDR2AVT1b%2FQVuVsHGaPXC1OY5MkHk%2B5ZWfcTSLkpP2%2Fw4DjOx0pZKXPRxt56awr8OTNN9xdyV5Zge8y3rrJpX06V30J2I6SGOO9hs2QfENq4MQ0P5PfMWMtt3R%2BbkpYhph0KrJ2300AOoeAqjze6emCVpbLTTHQp%2FhirnrCp%2F7DLcaB39LB%2FIZm%2Ff%2FJkuPwA6J189OEbF7Yzqu%2FCn2kutYvfinwgR%2FNBNDLGlteQ4a%2BRdND1J7K1WYEnnKLff%2FHjmrpIWIcVoUnkBQE9TMut0qpWzbLXiciGmO0QaEUXl4MK20%2FcQGOqUBaepWKtLZ6pgZoeasQp36KH8jkbE4xfrcG83GPz3yu%2BIIkcSrTzhwJRY47oNxaoApVzuu4KA12b0Vgnse8QBptuFRMZYNhu1Nf2EYWxpyhVb5Zu%2B4mGnax9zSYGDZoUVf828S4iEmBwNTvFs4sh2tSASGj9PzGzSo1HUjIdW8jBbKhdAh0cbQN6waHuxQl01CMxY%2F%2FEFDog3FYOcGSL34pAmqkYB5&X-Amz-Signature=6369803756b2f2bcf35d8b4449951f207d68585380452226bb2f7bdfdb9388d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRX2QLWI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIH5%2Fy21loEC4drKPc%2F25LbhcYCuAbq%2Be2WM3gd8tGAP4AiEAt2ZNcPJaiVCkssCm9GMUENnNjVkWU7XRvW%2BdpTaBhmgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLIo0jroSXJSVQjLbSrcA5jGAif5mTnEOtFXGkHlZl0rd9tmyCYsY9D0CRvMV20SGt6zYM8DGZZYs9yt4EOYiqrsumYkap%2FGc%2B6ADvQhSpr01y2fC1seX%2BuD8r4%2FUjALbhIxf8RrI5rVfGI%2Bg7YGBwDe44x%2BKPXruAnXkpUMm3qjeUOMGimvRiTTDOCXYjT4EGB%2B6%2BIier88FIrlZ0Z%2FlUFumFewsBFXh4e6AASLV3CVx%2F5P64a0PIbpVpniO5Qdzq3wLGXcEYmeqDmOa74%2F55Au0BFLadWvp2ezoHTjvIvN7EgCFstlfs7RMGulI4lq%2BB0Og537mRNe8v3cAPvLERSFwT0xQkiVqhIpbgDDR2AVT1b%2FQVuVsHGaPXC1OY5MkHk%2B5ZWfcTSLkpP2%2Fw4DjOx0pZKXPRxt56awr8OTNN9xdyV5Zge8y3rrJpX06V30J2I6SGOO9hs2QfENq4MQ0P5PfMWMtt3R%2BbkpYhph0KrJ2300AOoeAqjze6emCVpbLTTHQp%2FhirnrCp%2F7DLcaB39LB%2FIZm%2Ff%2FJkuPwA6J189OEbF7Yzqu%2FCn2kutYvfinwgR%2FNBNDLGlteQ4a%2BRdND1J7K1WYEnnKLff%2FHjmrpIWIcVoUnkBQE9TMut0qpWzbLXiciGmO0QaEUXl4MK20%2FcQGOqUBaepWKtLZ6pgZoeasQp36KH8jkbE4xfrcG83GPz3yu%2BIIkcSrTzhwJRY47oNxaoApVzuu4KA12b0Vgnse8QBptuFRMZYNhu1Nf2EYWxpyhVb5Zu%2B4mGnax9zSYGDZoUVf828S4iEmBwNTvFs4sh2tSASGj9PzGzSo1HUjIdW8jBbKhdAh0cbQN6waHuxQl01CMxY%2F%2FEFDog3FYOcGSL34pAmqkYB5&X-Amz-Signature=d4337964a72db65bc9f48d3dd4b533ef48a59bdbd68b5f57546cf28bf19ee4cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FIUAC2X%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDwBHzLgvCefvxgbjwxTGlAYWnuxmFmi3kO0r4xmPVSQwIhALczkNLuK1XTIHX3uz0AaLsY1DN1bc4assd6v4fAec7vKv8DCGEQABoMNjM3NDIzMTgzODA1IgyLQB9yJM6vg9xWQlcq3AOiij6OPxfQTStLLx0GcgKZ7kig6jumQBZhgajD97IY6tHsRm4AtDHrjk6kKUDU99SlMpOtz%2BhtRmpUJmMwWdi6GBSLyeNOLSwfrfptF204WogjliyfT8upRs1n9%2FuR4tE28V4vhS7lRGrq%2BwJVheGRoieWBKN82yZzDeqhmswqRg9TmfMExDtTHruFBo%2BwQcVZXaIkQLX2nx6And5JvemiE%2BBw6ETlUsaTDlF%2FTwtF28OjbrrtWiGdw6xRCc9MA%2BUHdj8rf50DGMVA3PXipaPv89usw545N5nuvodFdYNNh%2BsUxcV1jiysOyD%2BWBceIXnjaieWK2XEiZyDSHeTEIkigv986E4oB32M%2FWU9cwCm%2FagZ8tL6%2FiFt8BerwJ%2FUZL%2BrH6406nwrRYgC8MFyzIT30HxqbXhaPBdK4AeCb7eYaBWWnuVhZubuptAdCebCWP16u0WjP%2Fr8w4gHwzmjF2a%2BEQ8Ip4UMNLkEcRrEwlkwXbsCb94TiZnbd5DG7BQSz2OVVHEuDWv3fQSmlcjtV%2FIviPQ%2FBNIFKm%2FIXhw9mMlfSRdg90k6Nn61PQSuKYF7lpQ4vnGX0ZLBoXNFluWik8yhcKhY7SzROmvnY1Nzm%2BzfoEgJ2dDdVq9fFqKtJjCbtv3EBjqkARd%2Bidez2af5UhsSCHDamqMg%2B0gNNiY8IEq9abMxNY60Ubtdr6LMYdiJhjJC2VBz2goavywXLtXBFGTHGUJ0MQvP2skhEN72shbYvm2UvFHIIZdchUGbXCoPcc8tFnlhBTukMFNTO6KgrPOgawTZpD4PS1H5G1g5h6i5%2B%2BsffWmI7Fjc3%2BXl2AiUh3hSi1eQwRNTXsCyQFEvZp2hpgm1pp1XYixJ&X-Amz-Signature=703a9ce36f0a28be3caf66579652e92e35279ad7e42b1b52367504523422fc72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FD555OA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFfKBpf6ST9OpQjUVCYC9R3mxJI2EIwvfEM8p8%2BgfQWDAiBke1Pn%2FYihVQdI%2BA4NVT5yauikKiZSa%2F84jHz45%2Fsg1Sr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMXPG0sNmuN0eFKbSjKtwDNDJNO5PXrfEhAIYlCJi7ifoyxjKnOpvL9K%2Bgj9UvUXIfkH0ZzcT88qCflimeHLtZZzqvhzcm3uwRNJBK6g0bVqIJTN8eJmh8D60pgFuqWN3IR%2FxF2gkmitE4T93Jhz4TR6IdCPPy3dTf0aoM5LE73V6khBDUWXa5EMyQLaACqMQV5L9thtwu%2BSSX%2Bx%2FeHQr2X0YRG5wUbM3v73KxMRneKWI36VZFdaFmJ77uUjD00jm%2BczhIPdu6C2ouUiRf5hqPAGKe7eKlpaXJC0fZrr7AUW3hoOLkkq%2FaNbOgutDWuvYOTJVlo9s5Wu1e6UzsVJzVAAi7hdpAyFCoosD5af4UhPjwnPIVTnerM%2BDOq4B8OYTuwasTq0xay%2FH3%2BekX9mXIZGWTC2C2VFOfhMZzNFKwZCFu8ypFGzOtRtqI1oITHJHR%2BRO%2BUDPSegyYBPRF5carL3xvFw0Q%2FUEFFnhv1aOdGx4kSmqYh%2Fx4Bnt%2BpkYWqyOAjd%2FPNjQHitiVNSHYZs0vNGqXkCB30lqObBetCoyLyzkxhZzK5fSMPHamx3XrTSH%2B1YC5%2BuEuH9HFz8k8yoYk%2FdyVFDsoTWslBOBm3ax30n31FgNGfh0UOc2q949RztdvB14YRpbuPGtZIr4wuLT9xAY6pgES1zkxS8UWkMCfMxEE988X%2FLxg9nTua7Nm23AxjFVCTgkI6x4QxNPa7kpm6soBdaA1OHH5gY1tcW6NnkpOHxkXki%2BgC21IMEfdIXW7kCW0uWZpSbzGjhGbd831qTlgTTxrS0wdOI0qjt5v8poQ6ofTEiC69sq0rvRlpr4glrMjO2B1PTKj0VlRNtqnXqgSbtk9dz63N4eoKD8iUYXuQmf7aYsYE4YJ&X-Amz-Signature=8a0aa561e2e3907ef980f324359f3050cb27833b1e14e7d0233105d3a78cf6e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRX2QLWI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIH5%2Fy21loEC4drKPc%2F25LbhcYCuAbq%2Be2WM3gd8tGAP4AiEAt2ZNcPJaiVCkssCm9GMUENnNjVkWU7XRvW%2BdpTaBhmgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLIo0jroSXJSVQjLbSrcA5jGAif5mTnEOtFXGkHlZl0rd9tmyCYsY9D0CRvMV20SGt6zYM8DGZZYs9yt4EOYiqrsumYkap%2FGc%2B6ADvQhSpr01y2fC1seX%2BuD8r4%2FUjALbhIxf8RrI5rVfGI%2Bg7YGBwDe44x%2BKPXruAnXkpUMm3qjeUOMGimvRiTTDOCXYjT4EGB%2B6%2BIier88FIrlZ0Z%2FlUFumFewsBFXh4e6AASLV3CVx%2F5P64a0PIbpVpniO5Qdzq3wLGXcEYmeqDmOa74%2F55Au0BFLadWvp2ezoHTjvIvN7EgCFstlfs7RMGulI4lq%2BB0Og537mRNe8v3cAPvLERSFwT0xQkiVqhIpbgDDR2AVT1b%2FQVuVsHGaPXC1OY5MkHk%2B5ZWfcTSLkpP2%2Fw4DjOx0pZKXPRxt56awr8OTNN9xdyV5Zge8y3rrJpX06V30J2I6SGOO9hs2QfENq4MQ0P5PfMWMtt3R%2BbkpYhph0KrJ2300AOoeAqjze6emCVpbLTTHQp%2FhirnrCp%2F7DLcaB39LB%2FIZm%2Ff%2FJkuPwA6J189OEbF7Yzqu%2FCn2kutYvfinwgR%2FNBNDLGlteQ4a%2BRdND1J7K1WYEnnKLff%2FHjmrpIWIcVoUnkBQE9TMut0qpWzbLXiciGmO0QaEUXl4MK20%2FcQGOqUBaepWKtLZ6pgZoeasQp36KH8jkbE4xfrcG83GPz3yu%2BIIkcSrTzhwJRY47oNxaoApVzuu4KA12b0Vgnse8QBptuFRMZYNhu1Nf2EYWxpyhVb5Zu%2B4mGnax9zSYGDZoUVf828S4iEmBwNTvFs4sh2tSASGj9PzGzSo1HUjIdW8jBbKhdAh0cbQN6waHuxQl01CMxY%2F%2FEFDog3FYOcGSL34pAmqkYB5&X-Amz-Signature=65b0c627edbb18d849f68e5978cfbeb73f3658eb31d00d7615abb56ad56836b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
