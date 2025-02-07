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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGCOLDCH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDolMRhcUcIsBWcXcQNOLB0hXvbq4nyJDuf8ZyI%2F4ZUbAiEAiA9JzyBIErKxNN%2Flcugo4%2Bd79Abm7vzqfnZ%2BmYXLzhUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDay6txxg6F7qe8cXyrcA0urbz6hehKQDDsOOuBox2ZJOQQK12PoeKOgWqznQoWrhgEtjJ6Ayylo%2BmMLVvgC5vZhq2LGXbIxhwwOkUGDfkKD%2BccEFE%2Fr4ZG0aLmwo15LDzhOgrPYvKBSIg%2Bqvhp4McGQXxZGgv35nBDRCgdgc4NWGJBhsT9RSXhKo61HSaazXBR1edP1eq%2BatbTr0C2VjG4w8gX%2B2ahVv5RgT68F2HVowwZB96q2e6G58MvIqA7yrxW1BoAJPoP0TtijqtK2mJgbnTBA2D7DhuNXMETXQDdQb5FkeRFsYF3JvTvfw7ed07do5SIUvmiGAb9BuzkYz8QjRHpSRPB3f1Wv3O%2B8AnfO4phn3Ob7MXDORnch7Pw6P1xCc0%2BB1rmXM%2BFh6M%2FlJSJPlAUbr5%2Bjefiz0mPswMYAbqvr3WCoZm5b03aZ%2BsUslhxBY85PEOPIc9dg5tJ%2FhEv0mE0hY60H1jGgGIPapQZUEbExfgp4LECSnqXUKulHhhZp6iNVMhLFEpHe%2FNFXOr3U9U306bwuTu15fuY%2Bf%2FXKRz9CzroHNEMENmZjvCwJqxDow%2B66sI2mSzQ%2FIMRCxBzlxysO7ru6ToAFd32GTDlyM8KwRR1JAdERRpCLTRAJTrb9WStjj907tf0JML%2Bamb0GOqUBMSjZ%2B9Vglruuinl5WZqWMeyGFkVYQv2RNnC%2BYXcAVPga29eeNLekjxqlTxMlBV0vB%2FFs8Mi4SsyCSdC3IN5W8%2FXJseWJikrYRcxTyiMwCjFzPxU1O9XTo%2BCIz2v20xlbrH4IBpalvGpND9P3kWp6uf2Jd%2BjdEcbaSMpQR0Nh6VDPB3nce%2FO1karpNk4ZzoQAPkVnKAYI2DL4CQjU6sXOT%2FGrGJsD&X-Amz-Signature=26f74cdc483ddef1922c61f1c413689f02976c17dc0d380e4ee193eccd41fd3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGCOLDCH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDolMRhcUcIsBWcXcQNOLB0hXvbq4nyJDuf8ZyI%2F4ZUbAiEAiA9JzyBIErKxNN%2Flcugo4%2Bd79Abm7vzqfnZ%2BmYXLzhUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDay6txxg6F7qe8cXyrcA0urbz6hehKQDDsOOuBox2ZJOQQK12PoeKOgWqznQoWrhgEtjJ6Ayylo%2BmMLVvgC5vZhq2LGXbIxhwwOkUGDfkKD%2BccEFE%2Fr4ZG0aLmwo15LDzhOgrPYvKBSIg%2Bqvhp4McGQXxZGgv35nBDRCgdgc4NWGJBhsT9RSXhKo61HSaazXBR1edP1eq%2BatbTr0C2VjG4w8gX%2B2ahVv5RgT68F2HVowwZB96q2e6G58MvIqA7yrxW1BoAJPoP0TtijqtK2mJgbnTBA2D7DhuNXMETXQDdQb5FkeRFsYF3JvTvfw7ed07do5SIUvmiGAb9BuzkYz8QjRHpSRPB3f1Wv3O%2B8AnfO4phn3Ob7MXDORnch7Pw6P1xCc0%2BB1rmXM%2BFh6M%2FlJSJPlAUbr5%2Bjefiz0mPswMYAbqvr3WCoZm5b03aZ%2BsUslhxBY85PEOPIc9dg5tJ%2FhEv0mE0hY60H1jGgGIPapQZUEbExfgp4LECSnqXUKulHhhZp6iNVMhLFEpHe%2FNFXOr3U9U306bwuTu15fuY%2Bf%2FXKRz9CzroHNEMENmZjvCwJqxDow%2B66sI2mSzQ%2FIMRCxBzlxysO7ru6ToAFd32GTDlyM8KwRR1JAdERRpCLTRAJTrb9WStjj907tf0JML%2Bamb0GOqUBMSjZ%2B9Vglruuinl5WZqWMeyGFkVYQv2RNnC%2BYXcAVPga29eeNLekjxqlTxMlBV0vB%2FFs8Mi4SsyCSdC3IN5W8%2FXJseWJikrYRcxTyiMwCjFzPxU1O9XTo%2BCIz2v20xlbrH4IBpalvGpND9P3kWp6uf2Jd%2BjdEcbaSMpQR0Nh6VDPB3nce%2FO1karpNk4ZzoQAPkVnKAYI2DL4CQjU6sXOT%2FGrGJsD&X-Amz-Signature=1e7add1bf5dd2eb262a1b1f866103317739a6ee675cc9c5f73747677a262a8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFYDEY4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCxAQMAKpdHZA%2F8tcYC0kBa1alQJOY9kQqq5zxS%2Bff9CwIhALSC7PoLX6MmIBcuc4pN%2Bx1ETRKFU7XIaPZcMGx%2FyWqWKv8DCHsQABoMNjM3NDIzMTgzODA1IgyomhWKY5z5vMU25XEq3ANtOSjrOF1Xqc1q8V7%2F3Y9NXj3F9RdNbThUgdZvt3ai7zBivFs5uGfYc4KAV1hhNFqIVJpGQrmnv41iyCrqeGTA8gofo4j4qDVyVeuvMJZAB5H6mE4dQ%2BaDsnYa7E0dkk3byYwodU36Dpz2f5zwFt9rNg1tXyfLq1sJt48rvQQ9Aml6fj61%2FaOfFqTMpGOx3GvlSBDJQyMtzPHjxFIPHmxpj0356x9WVUNr7SzcZU%2Bm2PJfuIo1%2BhPncb09njNZ6PTT%2FziHtQ%2BQOZoiywwvo5nleOjaj%2BCLnJ24Jag4cUcGRJYgNulPCKNq8PvoGKwHSJ8N7dPhEZVycEO326uwQ5cVl9BZva1%2FTZnpm8X1%2BgtoQIZHioNBpWBxBy5BQYNu2cweM7ppDkMmWd3%2BdQhDX9t7em%2BjgwhsnS2kEqtmXJDxe07g9XriDuPt1EBsefSM4K317KmChGbPBW3WkaMSUAt5IiH%2F9h4syLv7ZxJRhqHWjABIoOt59nPlEJdBG91L6sWMkjONSi0%2BUgWSQBDaF8ByrS2CRjB91m4u65ra32RVRO6etxNfW4DZ5ITMXmOKrnGYQIZQyKXcvSC2ZHK%2Bg0QzcHguiGIp9jkn2N5wvwPAozgZjUEER%2FwamFuNIzC6mpm9BjqkAWLKaOGduB3kqQF5jvx6fpDcvFylfWLYyS5uD%2BcDSAGht%2BLzwbxLOSyo6nIFr2F%2FouM67UiGMVCexegc0yewAO76TzgKA%2FrFKAm6szJkT21gEBQxO%2F0AqHgth4tCS0lVwZp%2BnvPNal7AWafC64Ha%2FEJx9Md%2BBr%2B0ia%2FF6ABWO3de0NkyLZAbeXeTHnYkGQYOovZ7aX3L7nNnrpxkqriOT5CFPZZK&X-Amz-Signature=e9cd74bc8b9b5f27a550f39f568bc99416796318bb63070650f10e6a71488bce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHCVZGS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDmSKl%2BhCR4DLcfRRN2c9wHXguYwgZk2InL21vNrsmx%2BQIgKm5SC2qZMBu9pcxopy%2FuwT8Zl5AUDcU4P%2FyBcQh4q1Qq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGUSFPUWyJzfcouHVSrcA1%2BC7FWyBjc3JztDhx4qR6y%2FuTXb3%2BJvDHinJSlawXc1ZEm6Iwpdb%2BBS3kTDpd%2FuulwdbD11TBaonJ0YnuW1qoD3C2Gj9EO%2FpJliBAgiG7ql3hJ2aULduyX4j%2FMpUZEIqOuc3g%2BNxOQAR7do%2Bj1NmQakGKHWonxW89C6h5KGABTSCRpMMkmwirfiHJb3Tc%2F2bTb0OHJdXMstanxIdsz1rCCxMjmE30twmYcZkGDjijv3AsEGk5M%2BXViVAqP4qkmGGobYhH%2F1FGwi2%2Bi1alBl6FiwBXxQ0I9WtMn%2FJaZCCnBOSL%2FPkhkK8ws6TdGLxQCqY7s0D%2F9u8V9h9L%2BjapFgubHqnn1t3PjAsV4F2RBTfZQBDZ1smqw%2BzGH6N6%2BCgmrw1dxTqU%2FizPm8P8F439S9cUAyl3UlheSoBbXsFFEp15kESSM05%2BSnlapuJcoBlS08eNdIflAtL5OtYjMzswQv5WGuzum42IcpNkL4yNOGWZKAQ8B9YM0RhHzxUS5WApVQjYq9747n1et9RbUivY9g9HsERoZONguoco8cWanv7tegdtE3RG0m3FhJhFGprA4m9Wg7zVq3iYeRXauBvCPRct1ACKWm%2Fuy2s91NbJFkkWx7BM%2B4I49F4zYyJaJEMOGamb0GOqUBW7RTSqe1ybnEiiMO33p%2FpAlV3n%2Bo2HkEPG71C8c%2B7XUW9z8w6B%2BwVXoXMzrTWD2Yk5hz2buVqTkNuQS%2BDG0U%2BWCCcYD6dwlG0tgmsuPtEZ4w5HV0w2mtk84XbdxbeC5fBjb16FtUlLsVh2R0i6fsplhGO7RtMbBC3OD%2FheDXs7869VLibrT%2FAXvkMdi4Y1WvYG%2BFyLfQWi0Ui6I1dU48ndvM%2FSgz&X-Amz-Signature=1c0795c30582699ce4a6a4b016f2318e7b11e6195779800616fc680dab748ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGCOLDCH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDolMRhcUcIsBWcXcQNOLB0hXvbq4nyJDuf8ZyI%2F4ZUbAiEAiA9JzyBIErKxNN%2Flcugo4%2Bd79Abm7vzqfnZ%2BmYXLzhUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDay6txxg6F7qe8cXyrcA0urbz6hehKQDDsOOuBox2ZJOQQK12PoeKOgWqznQoWrhgEtjJ6Ayylo%2BmMLVvgC5vZhq2LGXbIxhwwOkUGDfkKD%2BccEFE%2Fr4ZG0aLmwo15LDzhOgrPYvKBSIg%2Bqvhp4McGQXxZGgv35nBDRCgdgc4NWGJBhsT9RSXhKo61HSaazXBR1edP1eq%2BatbTr0C2VjG4w8gX%2B2ahVv5RgT68F2HVowwZB96q2e6G58MvIqA7yrxW1BoAJPoP0TtijqtK2mJgbnTBA2D7DhuNXMETXQDdQb5FkeRFsYF3JvTvfw7ed07do5SIUvmiGAb9BuzkYz8QjRHpSRPB3f1Wv3O%2B8AnfO4phn3Ob7MXDORnch7Pw6P1xCc0%2BB1rmXM%2BFh6M%2FlJSJPlAUbr5%2Bjefiz0mPswMYAbqvr3WCoZm5b03aZ%2BsUslhxBY85PEOPIc9dg5tJ%2FhEv0mE0hY60H1jGgGIPapQZUEbExfgp4LECSnqXUKulHhhZp6iNVMhLFEpHe%2FNFXOr3U9U306bwuTu15fuY%2Bf%2FXKRz9CzroHNEMENmZjvCwJqxDow%2B66sI2mSzQ%2FIMRCxBzlxysO7ru6ToAFd32GTDlyM8KwRR1JAdERRpCLTRAJTrb9WStjj907tf0JML%2Bamb0GOqUBMSjZ%2B9Vglruuinl5WZqWMeyGFkVYQv2RNnC%2BYXcAVPga29eeNLekjxqlTxMlBV0vB%2FFs8Mi4SsyCSdC3IN5W8%2FXJseWJikrYRcxTyiMwCjFzPxU1O9XTo%2BCIz2v20xlbrH4IBpalvGpND9P3kWp6uf2Jd%2BjdEcbaSMpQR0Nh6VDPB3nce%2FO1karpNk4ZzoQAPkVnKAYI2DL4CQjU6sXOT%2FGrGJsD&X-Amz-Signature=148343361df85549879d6b1b0cc671f9e2252029e50d61b60879dcde29964207&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
