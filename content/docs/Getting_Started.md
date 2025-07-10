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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBV2S6PR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM%2FtMBmol%2FqZxScBTi3hKkN7L9DJuXZFXeHNGlKbQAyAiBQrxmhmt09eB34Nt5nkcx45srlJLIpb2sGZFV9waJlSiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tMuYlNEdfh61r26KtwDEuj0D2eocAFQI0sv6bdycWeLACjrMtXKj%2FcBUON%2BSZdHzbSOFHqAUILIX9fd1FX1M6h2BPzRdzJIaifegi%2BDOlp3U4%2FrC51MNNvNUNVM9esiHQ0mGriP4feZTgYWx%2BWs4e8lyq6qZe4C%2FBMwK%2FhmPo1NuhVKymohviW2Pa4BVANmfJhHnOTP3iJ8AqRP%2Bamrpzpd4%2Fd1E7oE3TINVGunUntQFhgyoFCu3jioJdghgLf7Aagwb9fsX1WcrmUb2HSwY4LfKimlxRqr2I4IV2c6Mmx%2BCezwKFD9W125FfwDa%2FKbg4kAgVfts8ZdbdWfLEjf6GS%2Fx40TDWp7YZgy%2FbokcRbBmnF%2Bqdgo6c4dxbLCoQLHyuuZahogs5%2FtvMuPzkrEQldqriMOD0K7xNl3Ky2RRtUkw%2Fa8WxA8XwoZaRFx%2F7zU48VOH4cr9f4fvMQfKXTcTyr59qsJbHkeUbL0fd8jk87W1RHdMWmi8zV9vBtC%2BYuP0jnslK5nCXPVkJvgPA%2BFOqIVWcjE%2FE7FGmSS0NplXPC1OeWy2m7a9fOZcKmqI3XPrfmr7EfbisnOyxaGVy5JvnoNU9K%2BALzt6k4mAgC1qjsFlQpea33izKgAcY%2BCGYgMP1KfEmSsaKA3wCswlc3AwwY6pgHXUH6Yx3XentcvBcdXegaU28sdT10LKfNvAJCmcrOBWoMOFn0hv0Jjq%2F7lx48bi5r0UMZZYHw2l5Z3onOkOTVsP0FXHaXJlLuOjseyr0u%2F6Lr5mdxUrlUYS2fY28Z3v%2FF5k5MBZUbI9Z0oDqrbtRmpp55qrdlJ659qQQMYSr4FkPc%2FghwxKD3RaO%2FWEPSoI3Z2jmT3ChGGWd%2BVJjUXmUjCA6SHq3aV&X-Amz-Signature=d71203ab413f64d55ea3ca736af7a2d62c58023db6fdce9b1e02ffd413c81e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBV2S6PR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM%2FtMBmol%2FqZxScBTi3hKkN7L9DJuXZFXeHNGlKbQAyAiBQrxmhmt09eB34Nt5nkcx45srlJLIpb2sGZFV9waJlSiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tMuYlNEdfh61r26KtwDEuj0D2eocAFQI0sv6bdycWeLACjrMtXKj%2FcBUON%2BSZdHzbSOFHqAUILIX9fd1FX1M6h2BPzRdzJIaifegi%2BDOlp3U4%2FrC51MNNvNUNVM9esiHQ0mGriP4feZTgYWx%2BWs4e8lyq6qZe4C%2FBMwK%2FhmPo1NuhVKymohviW2Pa4BVANmfJhHnOTP3iJ8AqRP%2Bamrpzpd4%2Fd1E7oE3TINVGunUntQFhgyoFCu3jioJdghgLf7Aagwb9fsX1WcrmUb2HSwY4LfKimlxRqr2I4IV2c6Mmx%2BCezwKFD9W125FfwDa%2FKbg4kAgVfts8ZdbdWfLEjf6GS%2Fx40TDWp7YZgy%2FbokcRbBmnF%2Bqdgo6c4dxbLCoQLHyuuZahogs5%2FtvMuPzkrEQldqriMOD0K7xNl3Ky2RRtUkw%2Fa8WxA8XwoZaRFx%2F7zU48VOH4cr9f4fvMQfKXTcTyr59qsJbHkeUbL0fd8jk87W1RHdMWmi8zV9vBtC%2BYuP0jnslK5nCXPVkJvgPA%2BFOqIVWcjE%2FE7FGmSS0NplXPC1OeWy2m7a9fOZcKmqI3XPrfmr7EfbisnOyxaGVy5JvnoNU9K%2BALzt6k4mAgC1qjsFlQpea33izKgAcY%2BCGYgMP1KfEmSsaKA3wCswlc3AwwY6pgHXUH6Yx3XentcvBcdXegaU28sdT10LKfNvAJCmcrOBWoMOFn0hv0Jjq%2F7lx48bi5r0UMZZYHw2l5Z3onOkOTVsP0FXHaXJlLuOjseyr0u%2F6Lr5mdxUrlUYS2fY28Z3v%2FF5k5MBZUbI9Z0oDqrbtRmpp55qrdlJ659qQQMYSr4FkPc%2FghwxKD3RaO%2FWEPSoI3Z2jmT3ChGGWd%2BVJjUXmUjCA6SHq3aV&X-Amz-Signature=df4d960b45189077e6f3efc3291a4557338cbec0aabc30d62314426f39bd232f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBV2S6PR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM%2FtMBmol%2FqZxScBTi3hKkN7L9DJuXZFXeHNGlKbQAyAiBQrxmhmt09eB34Nt5nkcx45srlJLIpb2sGZFV9waJlSiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tMuYlNEdfh61r26KtwDEuj0D2eocAFQI0sv6bdycWeLACjrMtXKj%2FcBUON%2BSZdHzbSOFHqAUILIX9fd1FX1M6h2BPzRdzJIaifegi%2BDOlp3U4%2FrC51MNNvNUNVM9esiHQ0mGriP4feZTgYWx%2BWs4e8lyq6qZe4C%2FBMwK%2FhmPo1NuhVKymohviW2Pa4BVANmfJhHnOTP3iJ8AqRP%2Bamrpzpd4%2Fd1E7oE3TINVGunUntQFhgyoFCu3jioJdghgLf7Aagwb9fsX1WcrmUb2HSwY4LfKimlxRqr2I4IV2c6Mmx%2BCezwKFD9W125FfwDa%2FKbg4kAgVfts8ZdbdWfLEjf6GS%2Fx40TDWp7YZgy%2FbokcRbBmnF%2Bqdgo6c4dxbLCoQLHyuuZahogs5%2FtvMuPzkrEQldqriMOD0K7xNl3Ky2RRtUkw%2Fa8WxA8XwoZaRFx%2F7zU48VOH4cr9f4fvMQfKXTcTyr59qsJbHkeUbL0fd8jk87W1RHdMWmi8zV9vBtC%2BYuP0jnslK5nCXPVkJvgPA%2BFOqIVWcjE%2FE7FGmSS0NplXPC1OeWy2m7a9fOZcKmqI3XPrfmr7EfbisnOyxaGVy5JvnoNU9K%2BALzt6k4mAgC1qjsFlQpea33izKgAcY%2BCGYgMP1KfEmSsaKA3wCswlc3AwwY6pgHXUH6Yx3XentcvBcdXegaU28sdT10LKfNvAJCmcrOBWoMOFn0hv0Jjq%2F7lx48bi5r0UMZZYHw2l5Z3onOkOTVsP0FXHaXJlLuOjseyr0u%2F6Lr5mdxUrlUYS2fY28Z3v%2FF5k5MBZUbI9Z0oDqrbtRmpp55qrdlJ659qQQMYSr4FkPc%2FghwxKD3RaO%2FWEPSoI3Z2jmT3ChGGWd%2BVJjUXmUjCA6SHq3aV&X-Amz-Signature=415a0da7f9041bc43d54bda74b43f6a23f532f2098fef52c7fc95836f4f078a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKWJ5YQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeUrKFmUiccWClzeakHeg%2B20fKHNtQigG82HuYJdsjpAiEAnKtBStspq2CwSf5OyE5RyMxMWlA3flQ0IXB9%2BTDSzHEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6F%2FHC%2FY%2FjEfA3uTircA912RTqt0qup7JlO77oyQzncVJVKp%2BGQm2ZP%2BEvNbks9zkgDLuW5mvzODVXXyRO1G6d2sxIKAOD8Gn6Z4mpPWz7IuZXO2tiqrBINzP9SMYZ6m9H%2BQA04PDDEPMe7iT0YuMPEHLEjOE%2F2q8c%2Fw5bvQw9PbwlnrUO912WIkoj8KV59K6GtvfMwRCTAeZIhMVoPYSvKgm0eFby42jp00XgHme3ohilXc%2Bc4KHOBZIQyX8clQs8eKb%2Fk%2FCWWj3Ug8jISmbHQzhUE0iIYe7UzL1l3Egkq0T2oKsbwD%2BjyBvV9ri1AbxS1T5ezCNEvy68SftHf6QW96bgYYUAC8%2FeiEt2egqFmnqW5rGhr4XpixVKQR96zMFO%2BkYGhnVO5TMI9LhBOAw4j6tnH6%2BusXriIhkWBiLTliUuxPMwpqlebh8iAM9FRQK44PVQ0lG1MbUYIh%2B2f8RcM6JGkHIr2Rc5bkFmkyfY3w%2BdxqtdEk0EOGNgd0N5MukGtGMReIMVaKOkRS6Brx11hcKGJ1Wo%2BAdHS5bzX906NyHf9uF3u7gziU%2BELoCizNzwM7Exqs4ZykEE7R4naydZu6KOpzfIqsWZJuCrLJkVC82%2ByojcemZm3CgjsfY39pzQP4j3m1H6ZJegAMPPNwMMGOqUB%2FhnSYHQmr6BSkLYfXkVNVXsekLiTZKfkOgXmg4kOE1qz%2Bq3ALK%2BsdBcxWRGr4G30Il4j8JotEPDaWjbeGNa%2BPlC0U9j96XgzNa4EODCb9W2eB2ByWTPo7zShHN9g46i8TRwnDnpCt6tFgBSwG4jdr0imJowJI4TyfZv3zFe30YH9l8OIzipGll7%2FTUTwojdwM5xwcefIg97CaOrroURdmesbvZwp&X-Amz-Signature=400d2e4308bc7a41175cbe648b383f6ca717dba3ea7166d279a3ee39239bab96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FISVORR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPSNoNSVMGgKqxuRPdCc8PzLkCMogLRhVcaIIauBE4BAiEA3vgOI5ojlQYpePFBeQn6MRxDxlTn5ZRFdV9mTiF1qXEqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3N47N637xMHbOZPyrcA9kpvAXLSYJh3eRfAK5g%2FdTO5QE9Rde7nUcHlLhyMZNh6vXhdm2Ogyfc%2FzG2GF7HWD4v1x91dsSIU46ezy5TOrs%2B%2FjMQ4cjsWfpBwO%2BI%2B3BQvhGH%2FQ7B60Yz%2BTiKzb2jNiwm0TEWmzlmzCAXldCXlk9BVFt4uzd76jMem%2Frvvl8btRY2eEm7P9w5NorogorRnrBPe8K108xf%2BzgFqbAqCl3YKpmF7xWRMuVN8LCABx8fe6cb1jLo7HKlXoDEZ9t4HqoJn07yTCylORqwALS1PCAxsc01ZyfIzKmpKTGjeRMNsQrbe9nsjXdMapeJu0w1g6LOq4YLK1UWgnZsnMKnx0uVYwfLUdCVP3K0Wl3ohQQ051nzNkfeSKfacgrVqIzf8u%2BAs7lFTspY6pvlT4ObewzRhn3276OETCRkQYL%2FdOW%2BUEICBlJlIID7edcV%2BKTP2n6vLpEH0jm%2BYe8LhhrPWyPKFlRXhYYP55R4XQ5D0yzRcTOHMBdudAIDvpDYjtBBj51vOiDKuYzZof7HtMaQU%2FPsu0GjSCpp3voVe5b3rF85Ono2h6nFqso1EDb72KawO0uGO0A6eHPF7eTpV0f4YvfbuKpZPnrQOKl%2BrD8wh2tstJkCjMt0RGjLTj6HMIHOwMMGOqUBzrABf5n%2FnYHfF%2BHa8RxF5rc1VmrZtUPRo5KK9r68AMfbRlzj59ozsT5o3SeMQErqGemQ%2BV689ZWjCesZjpq0SQCgyOty4uBUbyDhgBUYepNi1tZAEiVxDfY8pBhUk5sWlP70UTd%2BXjZMT%2B%2BJUI%2F8fIKoYc4VEV4dbE27GCTnsPFFd7MWh6Bj4GZxy3wlemfzkyAaBEGd1NBdc6%2BB1Qu8uUNyx70t&X-Amz-Signature=e1eddeee360e32a2a67e1e99a601279901e8d43f0f509c66346c9ea3672f94d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBV2S6PR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM%2FtMBmol%2FqZxScBTi3hKkN7L9DJuXZFXeHNGlKbQAyAiBQrxmhmt09eB34Nt5nkcx45srlJLIpb2sGZFV9waJlSiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tMuYlNEdfh61r26KtwDEuj0D2eocAFQI0sv6bdycWeLACjrMtXKj%2FcBUON%2BSZdHzbSOFHqAUILIX9fd1FX1M6h2BPzRdzJIaifegi%2BDOlp3U4%2FrC51MNNvNUNVM9esiHQ0mGriP4feZTgYWx%2BWs4e8lyq6qZe4C%2FBMwK%2FhmPo1NuhVKymohviW2Pa4BVANmfJhHnOTP3iJ8AqRP%2Bamrpzpd4%2Fd1E7oE3TINVGunUntQFhgyoFCu3jioJdghgLf7Aagwb9fsX1WcrmUb2HSwY4LfKimlxRqr2I4IV2c6Mmx%2BCezwKFD9W125FfwDa%2FKbg4kAgVfts8ZdbdWfLEjf6GS%2Fx40TDWp7YZgy%2FbokcRbBmnF%2Bqdgo6c4dxbLCoQLHyuuZahogs5%2FtvMuPzkrEQldqriMOD0K7xNl3Ky2RRtUkw%2Fa8WxA8XwoZaRFx%2F7zU48VOH4cr9f4fvMQfKXTcTyr59qsJbHkeUbL0fd8jk87W1RHdMWmi8zV9vBtC%2BYuP0jnslK5nCXPVkJvgPA%2BFOqIVWcjE%2FE7FGmSS0NplXPC1OeWy2m7a9fOZcKmqI3XPrfmr7EfbisnOyxaGVy5JvnoNU9K%2BALzt6k4mAgC1qjsFlQpea33izKgAcY%2BCGYgMP1KfEmSsaKA3wCswlc3AwwY6pgHXUH6Yx3XentcvBcdXegaU28sdT10LKfNvAJCmcrOBWoMOFn0hv0Jjq%2F7lx48bi5r0UMZZYHw2l5Z3onOkOTVsP0FXHaXJlLuOjseyr0u%2F6Lr5mdxUrlUYS2fY28Z3v%2FF5k5MBZUbI9Z0oDqrbtRmpp55qrdlJ659qQQMYSr4FkPc%2FghwxKD3RaO%2FWEPSoI3Z2jmT3ChGGWd%2BVJjUXmUjCA6SHq3aV&X-Amz-Signature=5c07f1a7434447947c7987e67880272ce5d8cde84a4c41e0771256801573c7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
