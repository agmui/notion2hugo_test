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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDOOEMSV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhd40D8D4bBg6kE4GFqJfHNq5MulrWIb0B0%2Fc%2BIhNJAAiEAuTc%2BQxChBib5LBJ2OGJssn%2FHHSyXrWHG45ZImHIeVZcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOOJvCXUMNIfvMZIlircA5n5He8lH0XxMzh0TXZcgTqg%2BKIenCOu2pgeXK7XhfbPq5V12er0wJ9zpB19D%2FoGocf7PzxG5I7XSvkNSLK3lo5rZYMD%2B73bVODAWofVl3w3GZuM5om02lkGtHL5G%2FvH859Sr%2BqK0n6TzBKnQxoq8653J1%2Fbh4o3nEJea5xNuYsdUcVDLDCEDcfxcGn1ZHsTpHdI1yqMbLhbIz89T0%2BhL90AnLrd1gL7lugRgtWD1i2NaC9rumnuS1FTJCTjYB9ES423kKklzbWUh2UFFhKkQiRuPGr1vzsmHgJfZq5dgYzrIEpxwOZh4ce%2BTPGx7qjo9hdsHLRGATLYhLr1p%2FEAwuL7Hz%2Bla2ohs3pVfZBafjAFUKnZ%2F%2BjHbTs7szvtNWs41vKUFUdkGfS1ooT%2FpBEYLWPmJ9dbckjbXYtEsqf1lbrdQSQMMx0Gv6Cmp3An6pWDaKK02pgfCnZYBqTj87DpL5Fu%2BTAEW3jix3YadtGlPYzSJZXO%2FfMNYJowhpJniNXhk0ngHXI9KPhp5fggtfdpugvBfEcBkY4CW1S8jw15GxgVV0dlHpNgBhlv4yp4oiiBUv16gqtwSDxJwJTvKy7HD2LHtEs4BLNccLt0kWXSXD4EoR7ANZi0Xbv3zXG4MOf5q8AGOqUBOCeagf8uf6UXxmqH0Mw1ouVCfVJi%2FxwKy1c1KNFr7cFtuZ30oqv577TkfvcduEM8GuBdrTXbPtaclN6wTl5Ar1SVgRUwoOaF6pVWRduvVRBfouMXj2CGTBhuClRNtMIU1MI2p0I4yOPejwfKn%2Bjq5SKOW1FY16BKJz69xsGKw2KceAXxZ%2Fpk7sQ5%2BLmMjdfuablR%2FUG6reIqkcY4bzDQosktePbX&X-Amz-Signature=6273113148fcbcfd336631a7d1aecf20d5f5372d1135b8aead850a2d2f7bf9af&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDOOEMSV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhd40D8D4bBg6kE4GFqJfHNq5MulrWIb0B0%2Fc%2BIhNJAAiEAuTc%2BQxChBib5LBJ2OGJssn%2FHHSyXrWHG45ZImHIeVZcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOOJvCXUMNIfvMZIlircA5n5He8lH0XxMzh0TXZcgTqg%2BKIenCOu2pgeXK7XhfbPq5V12er0wJ9zpB19D%2FoGocf7PzxG5I7XSvkNSLK3lo5rZYMD%2B73bVODAWofVl3w3GZuM5om02lkGtHL5G%2FvH859Sr%2BqK0n6TzBKnQxoq8653J1%2Fbh4o3nEJea5xNuYsdUcVDLDCEDcfxcGn1ZHsTpHdI1yqMbLhbIz89T0%2BhL90AnLrd1gL7lugRgtWD1i2NaC9rumnuS1FTJCTjYB9ES423kKklzbWUh2UFFhKkQiRuPGr1vzsmHgJfZq5dgYzrIEpxwOZh4ce%2BTPGx7qjo9hdsHLRGATLYhLr1p%2FEAwuL7Hz%2Bla2ohs3pVfZBafjAFUKnZ%2F%2BjHbTs7szvtNWs41vKUFUdkGfS1ooT%2FpBEYLWPmJ9dbckjbXYtEsqf1lbrdQSQMMx0Gv6Cmp3An6pWDaKK02pgfCnZYBqTj87DpL5Fu%2BTAEW3jix3YadtGlPYzSJZXO%2FfMNYJowhpJniNXhk0ngHXI9KPhp5fggtfdpugvBfEcBkY4CW1S8jw15GxgVV0dlHpNgBhlv4yp4oiiBUv16gqtwSDxJwJTvKy7HD2LHtEs4BLNccLt0kWXSXD4EoR7ANZi0Xbv3zXG4MOf5q8AGOqUBOCeagf8uf6UXxmqH0Mw1ouVCfVJi%2FxwKy1c1KNFr7cFtuZ30oqv577TkfvcduEM8GuBdrTXbPtaclN6wTl5Ar1SVgRUwoOaF6pVWRduvVRBfouMXj2CGTBhuClRNtMIU1MI2p0I4yOPejwfKn%2Bjq5SKOW1FY16BKJz69xsGKw2KceAXxZ%2Fpk7sQ5%2BLmMjdfuablR%2FUG6reIqkcY4bzDQosktePbX&X-Amz-Signature=4c5369a0c922ba1a16d45e0ca8ad4a285df3d3dfd14e8343a1296a773b137bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVGPYCN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FFR%2FXnJZxD7W55NZujsdZx5bFZo2qaI1MeMz304vTHAiA6yvSuVX7JLJpe4QcdF7PTeuNSe41MhjE%2FvZj4nPyhYSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMe5me0zSHn%2FbokCv7KtwDUlLnaKX2knRA10TsvMAWRw5hg2tL%2F%2BzwiervKOdj4ov7kJAClAa6HEH6PC5B5TRuyBcHf7xdbfLyj2KbpfygXQ%2BLewqq8M1n9Mos9JiRh2vARBn%2BKZZU3KeRhBcz8nkg1fDFCX8RICPkDcACAc%2FVqKUqi%2BMnqqnDntB7TC5kRoMCcA2BjIDD%2F5g5264vFhANo14%2FpEvEplnNU7rLdhKtTeXZs%2FbwRDfkpvvpVNocGJ1KYnBAOotCXMVvTISojgyNncZpgHfqw99eKYVRiMoAKCFQEscz36f%2BitlcQok3nai0JrWxQNsyCG66EIqgWHgn5vtdIRJkfTonB3mbHQfAYVD26j8a%2B3L2eAQr4FlwobHyfeTVsXghRTe4woKkezD2av%2BDDeTo%2FclyVUJJlO4e20cMsvIqXZZAEr6%2FvsaPO1jVraaUH%2BNQjRJEFjHLxHVNCXC%2FUT8ldSgMcpA0HFUOR2%2FOdPXdyO5dXEouHbnQ8LOWliQE4Ssm4IWYCN7VMquel7PHrQhFsMTfNjeZ0HkzIeF3C3lXWuRkTfcf1DiE46w1YIV2rrsfscI5G7NQY5YcvcNuGRF5OfwQbRBLIK%2BCoHJIjWrHHomxXExZj1mX69XG3cbfAuZpVaTfIGYwgvurwAY6pgHLJNFRkksAGUH4Ryb5tWEMZajSMHFkgZdE7megRhzojSiHLXQcsYA1kabC7hQl%2F3JnjGaqEv43N14x70rQrLxrmWsNOjMVkwZEdfni56bfIGvh1hSQwfOg1YpY3dHQ3pHWAmRf5fpNTv%2BWe1WDpQdzlg3m29AVBIK3Vf13h6VIHWgyiWgU32lgbqVMzXvpr9V7rd9Ncu775xMxHQpm2fqQK9WHaI16&X-Amz-Signature=83ecf6e86dcce1dd887cf5b1cf6f3c03fa9552a90b2bdb9bee042fa12f821fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OULBWBU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU%2FaauS5Qn%2Fzphvu5ojgJvOQ3QGkkpCzAXHEalvuRZpwIhANMVSehaQNcAOxNqGkjpN9ByVc06bp3rkOsT2o86hWICKv8DCCQQABoMNjM3NDIzMTgzODA1IgwfP8RLHHuKOX8juGgq3APH%2B7ZDnt5nF3almy%2F0uedueJQ%2FgNvBIFuiRau3UT9nhAiCSC62yftseFpEju6pSbF%2BzbsUfmCGlr6glomjm5OIF7UQ7sLXSYS%2BIspHVgn%2BaNShL%2Fn%2FN62g8X6oKVjNWrwaf1t5ODEoebr8FiGM%2Fzchi5YbC9XCFiBGlhpGkSkOSyD85pqXqpVcF0b1jpNmb3hkhOiv6%2BrceTRwfMg6tg0xUjsI9bEYX5ilAF8I1p227oXrl8FuinzG4cbrrYQv3jEUcLgYHvvU9YR4Y4iLRyAjxDsSI9y1Q8WnzJ5EoaNl91unQh%2FrHxO7%2BbrMXJzTudjn%2Fv4OVEK6G0XNZhiaFUPOwO77PqgFjHFWIb0DkBLUwaDuAMDOtbg81m9MDPqQoDeTTAdM9UD0Y66vTXkm%2FDs7Qz%2BgzH%2F3fb37VtY1GIZ2xqDYjUUX6HOge2WsiNZ7ChbqiPwenRKASwSBFgTVAMKo0TOxdAVCn1aVugFjeeOEY6gR91DMhwnrNZ%2BJjphDzqCFpxct5BjLtRj9aRtp6dIPDgzOoPTZQ845%2BaWnKXcY8D6WEwSTWyh0enXDx0Ct4fk162s%2F9j2Fr5T6InDKLz34tE%2BIH1qD47rlzejFQP6zsVJbAZMx2I03nJAlvjDR%2BqvABjqkAf2LTfTX8Lm8m%2F0%2BdqJzGiZM1ld6FktD9jmRPQNR9DvMlgCcNQsef0IH8y2nxZ0rgJ92SpnFFCwPP3hA9ByTfhz0M1ZqLG09ov42u9DS0c97mc1Q12BJv%2BbACAfhQktKJ%2FqjsTr0%2F6mhIgut95YJK9PvSQR%2B%2F1ke7znYRXXQh5wCCTG%2BqGsMKpL8Kz6t9yF1tFM9BPIxxWtYr2BT4BmaLMSi5DW%2F&X-Amz-Signature=91952ee7bfd4e83e0a8c66298954e5cb73659177c06a42ed58c85ef250f30b05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDOOEMSV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhd40D8D4bBg6kE4GFqJfHNq5MulrWIb0B0%2Fc%2BIhNJAAiEAuTc%2BQxChBib5LBJ2OGJssn%2FHHSyXrWHG45ZImHIeVZcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOOJvCXUMNIfvMZIlircA5n5He8lH0XxMzh0TXZcgTqg%2BKIenCOu2pgeXK7XhfbPq5V12er0wJ9zpB19D%2FoGocf7PzxG5I7XSvkNSLK3lo5rZYMD%2B73bVODAWofVl3w3GZuM5om02lkGtHL5G%2FvH859Sr%2BqK0n6TzBKnQxoq8653J1%2Fbh4o3nEJea5xNuYsdUcVDLDCEDcfxcGn1ZHsTpHdI1yqMbLhbIz89T0%2BhL90AnLrd1gL7lugRgtWD1i2NaC9rumnuS1FTJCTjYB9ES423kKklzbWUh2UFFhKkQiRuPGr1vzsmHgJfZq5dgYzrIEpxwOZh4ce%2BTPGx7qjo9hdsHLRGATLYhLr1p%2FEAwuL7Hz%2Bla2ohs3pVfZBafjAFUKnZ%2F%2BjHbTs7szvtNWs41vKUFUdkGfS1ooT%2FpBEYLWPmJ9dbckjbXYtEsqf1lbrdQSQMMx0Gv6Cmp3An6pWDaKK02pgfCnZYBqTj87DpL5Fu%2BTAEW3jix3YadtGlPYzSJZXO%2FfMNYJowhpJniNXhk0ngHXI9KPhp5fggtfdpugvBfEcBkY4CW1S8jw15GxgVV0dlHpNgBhlv4yp4oiiBUv16gqtwSDxJwJTvKy7HD2LHtEs4BLNccLt0kWXSXD4EoR7ANZi0Xbv3zXG4MOf5q8AGOqUBOCeagf8uf6UXxmqH0Mw1ouVCfVJi%2FxwKy1c1KNFr7cFtuZ30oqv577TkfvcduEM8GuBdrTXbPtaclN6wTl5Ar1SVgRUwoOaF6pVWRduvVRBfouMXj2CGTBhuClRNtMIU1MI2p0I4yOPejwfKn%2Bjq5SKOW1FY16BKJz69xsGKw2KceAXxZ%2Fpk7sQ5%2BLmMjdfuablR%2FUG6reIqkcY4bzDQosktePbX&X-Amz-Signature=b74bef565b2136cfa7eeb21acd22d65a2f643c2d211f74cbfcdbc8efb0e2bcf6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
