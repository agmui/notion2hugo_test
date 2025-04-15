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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHALFVR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTMAm1lim4HnM%2F4%2F89J4PRAuu7uyiWONh0DJK6KnK%2FMwIhALe5fyXe6eY6HAM8EXUnQtp6RRbAg85LMrgIrcsVrBjBKv8DCDQQABoMNjM3NDIzMTgzODA1Igylocb5fwP3XPsRr6kq3AOsc1Lon%2FrLvkRbe5WFeP4JoEIRfOu0addoP7ZbuK0fgYkkrrZ9r5dQF3KQeqjIMp7L1dMll5wiMijErLy2FtCQBWKtO84uzPnozVIg9MWGZlLYDt%2BCyfkRD5HPq7T6Djdc4AT3B3PKQOOWR%2B%2FAls0ZKS%2Bbne81GXj7wVGVqRn7iPJx762bDQF9wz%2FKj0QGCMKju8geHU9Hl2GNwWsyjIkdLHGkG8O4soCeTsZHAR6SaYUruSAEvGG5vhmlz87wx2ejIwvhPf2jlMcyrRSWxEZ1gkLqkST9MtZIY8pm%2BLQPbZBN4EruE%2FAoYdoOzuebq09xZNJKRDyoMeoXW7euWwojgiUlyJ6FmnJHCJ8e3Z0iaGCElQuo4B9uAiPJ5%2BfaBSMQvtp8%2F3%2FI4V%2F%2B9z9WaDvvMxSGIsoXGpUh5%2FkZvCFKZVK%2F%2FAFWfulwdXT77OAyBwOXjaXdAu2u857AM2So3ih18LSOEhYORn%2BgdOi4778Yq7x0H54jYstiCY9gdDAYw1dcmjHjdFfWa8PEDBnPVYIlvJ7od6sWQRLc3cJrn0PFa%2Fb2CnQZoT94D%2BGmOU59775%2BIXIXzeM9oyTJNej2gy2Kb1JtYiBVSSR8cpe%2FIqcgL2SXykQRas0wrXzhdDCK1vq%2FBjqkAW4gergpLs%2FuBksTBW9edoCH%2FIVv6Kk4ZjkKQKLz%2FeBYQZx9yz2jfJYJRxpflRdOg8JPGbHfEEdbItMzupQlNa7%2FESNYGO%2FXY6bx2BiMvdhVQ5EADPdkXNKiqkcToLyEkcdw4hCJ8wMA2jz2CB%2FplHcaCev1QbrmbrPgAuzilW0QjJMPJR9bkIqtb%2FlVlWpmTnjvSJhyCEHzO2K5OS8uTOiSN5H8&X-Amz-Signature=7cc2adb90d3b655ecb3794f8a31a6b1475eea49910572e7afe7b8823b5927254&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHALFVR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTMAm1lim4HnM%2F4%2F89J4PRAuu7uyiWONh0DJK6KnK%2FMwIhALe5fyXe6eY6HAM8EXUnQtp6RRbAg85LMrgIrcsVrBjBKv8DCDQQABoMNjM3NDIzMTgzODA1Igylocb5fwP3XPsRr6kq3AOsc1Lon%2FrLvkRbe5WFeP4JoEIRfOu0addoP7ZbuK0fgYkkrrZ9r5dQF3KQeqjIMp7L1dMll5wiMijErLy2FtCQBWKtO84uzPnozVIg9MWGZlLYDt%2BCyfkRD5HPq7T6Djdc4AT3B3PKQOOWR%2B%2FAls0ZKS%2Bbne81GXj7wVGVqRn7iPJx762bDQF9wz%2FKj0QGCMKju8geHU9Hl2GNwWsyjIkdLHGkG8O4soCeTsZHAR6SaYUruSAEvGG5vhmlz87wx2ejIwvhPf2jlMcyrRSWxEZ1gkLqkST9MtZIY8pm%2BLQPbZBN4EruE%2FAoYdoOzuebq09xZNJKRDyoMeoXW7euWwojgiUlyJ6FmnJHCJ8e3Z0iaGCElQuo4B9uAiPJ5%2BfaBSMQvtp8%2F3%2FI4V%2F%2B9z9WaDvvMxSGIsoXGpUh5%2FkZvCFKZVK%2F%2FAFWfulwdXT77OAyBwOXjaXdAu2u857AM2So3ih18LSOEhYORn%2BgdOi4778Yq7x0H54jYstiCY9gdDAYw1dcmjHjdFfWa8PEDBnPVYIlvJ7od6sWQRLc3cJrn0PFa%2Fb2CnQZoT94D%2BGmOU59775%2BIXIXzeM9oyTJNej2gy2Kb1JtYiBVSSR8cpe%2FIqcgL2SXykQRas0wrXzhdDCK1vq%2FBjqkAW4gergpLs%2FuBksTBW9edoCH%2FIVv6Kk4ZjkKQKLz%2FeBYQZx9yz2jfJYJRxpflRdOg8JPGbHfEEdbItMzupQlNa7%2FESNYGO%2FXY6bx2BiMvdhVQ5EADPdkXNKiqkcToLyEkcdw4hCJ8wMA2jz2CB%2FplHcaCev1QbrmbrPgAuzilW0QjJMPJR9bkIqtb%2FlVlWpmTnjvSJhyCEHzO2K5OS8uTOiSN5H8&X-Amz-Signature=bea1dc61c7d8d3ed7b94b60eff62f7d3ae749db6b87ec50eddbc1a1095de9bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7S6JTB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCha%2BXgB5uHgZedu00sWemQdp50Ie4mKAEq18N6hJIOjQIgJ2vOFVcuaEpRQr%2BleAn3gfBTd95fQafK9iiR2zW4LR8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJwT39yCu4M2kjx0HCrcAx8spfch7%2BuLsuntLci9NRq493FgTRISqEJY33U3tFEtfWpsvTbDa4xdCsnL3bTsPD8xuly3Hl3tyDJ%2B1Ay3agfhtpb1YLHnVUKRIXeX0c5Vp9ILrqXm5RT4MeQ8wN%2ByQ1m5%2FqhLDuhM7r6TsE56l75aD6%2BbdpPwfmHzU5DSJLzUV8rINQivSf%2FpXLDd3aVca2DpLAHws3vZOn4aSwBQaOYauGpvWXnzdoKYC%2FXw4P86b%2BRUr6%2FUfqts9aCfVcFNKFdttfMGCk%2FruwK4HS9ZyoylSfIdcBmc3820br%2B%2FMkTl3KjfN5QPURAoyOfeyrxFY%2BR5ueqMMS3xNs2K9Op66hzCzbEAGsYpU%2B3aw8XckSVoP8Zw93O%2FFqiXqBt3I10b9MgCSgqqMMHaHRHRaWP2eJ9E6bzJOvJQXZVfEZM%2B1Qp7GAV2pfsf70g7LammZiCzWaCddUfmaV5%2FNl2v2%2FDHKEB45Qci4bqQSCK7ewiPT59P9jbXlUfSJ5slZd0yDJ7YaqpK1FNZVcFm%2BkDwsZ%2Baz1qIxlwvDj%2BsHesoNd%2B20bX6L6krzcf2zDldYjAs9mvwG2axhOqQ7OX55WBlvq7aRlKDx2eUcac6ppjuxMwVRmwpM9Z%2BFb8BxalHteWgMPbV%2Br8GOqUB2xfmsDlAkiqZ8YgwISVGF7hvaW1vTglBdCwGNNOVtv5vgaZdP%2BOyFTX2t4kDNcASxJreENOxUN0S9oQToE9Np61JPBm6893UQS%2FzQh6%2FA9hUHQzHgaFANzFN7PLLWrW84dNKsiX7vd7TPQfBLgoBmKeyrIZ%2Bryu307JnycsZsKbJiYD0UoCucyyYuZX8NP%2FIZfkg1c4N94jzga9jDnpK5x85BV1z&X-Amz-Signature=9f2f1b92a2b7cd8761a929add6bb13063b237372d00ffc91e8adb0effef46da2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5S6CMH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrcb%2FbqRueSdszy8ZdudySdnx53wmct51I1XVwJyV5fAiBE%2BA3EK5MINcxKlsN86woB%2BKeuMxECgpN%2FWJ8ZqQUH4Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM7Tt8JxsQ3TtmOgWYKtwDdR9aP0jAvzSWY%2FiVneBXc0Pbk0dDMlK6sECbaR8Y3xMsKUb2eLWKAoCz3wgjCzwnefDo1iI0Ai6tFPk9DaQ5RV%2BQCY2mNg1EucnykCiQw9FtigB%2FVPxrDMGX4yt2uVl1AO8njsPkrXCIMhMdpWLGMdKsbrXOxUEsflBZLqjK8FLtuN%2FtyRt%2FpCkIubRBlO%2BaiyDhr9nwZ1PzDrIqf5ck67iWSjidPRDd1E0K7mECXGOcbdNNvHlzLDpvcesOsmm6Fh%2BDE9ehOcp3ePXrFkFqkt%2FlJW%2BSKtHXP37aKgRMNvHC6RxtkhioVKGQW0sc584%2FkW8Sg%2Fxva2tng%2FX4AVDpozKJs8dWP9uAUDO9S1CQoKiAlUZYc%2FQ%2FifgkeWkLA7jP7f7xnwkPrXQ2vOvsZcivE9oKwkKrnH%2B5qzzbgAkCH6QeX40BtlMr0LB9F8FqO9NZh9lb6%2BLpqYHvVT6x3N5QleY2dZCaWq2w3abzUt2K29ix3mVvvZjD80DWXXlu9yNfdAaXqcmTB1VSp52TbTYj0c5B0CXkx7Bg8ig7MwjXYSGpHEPPBWDhwTrFfJsZwhS87lmFFqbi75nAKwbqTFb%2B0etps6sp0NnqaC8Tqykh8gHsau%2BY61kYZ%2BGEFekw39b6vwY6pgH45mQUQpMY5l2AAleRMbPW1u6WEbab2e5U9%2BUH1Q%2BLjPZxjHG73FExekbbWwKi2hFhwIXYAGp5KBoBGCMT7ARkGUxViPCYiSGlnF9exgQr8yzJ74O3Dnzi5%2BcMzkGoNATovU%2BemyFkfGAkvUcWB8RW%2FpYFlsXmaj3%2FXjy2J%2FKAadF1HXGS6TNBBbLLY8A4DLYUv%2FuIm5OFVuyczVRuL6AYwKVJejgd&X-Amz-Signature=2bd6063fe90184a844e3a40c1ca83735c01eec427faf59091a4299e3482abcb0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WHALFVR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTMAm1lim4HnM%2F4%2F89J4PRAuu7uyiWONh0DJK6KnK%2FMwIhALe5fyXe6eY6HAM8EXUnQtp6RRbAg85LMrgIrcsVrBjBKv8DCDQQABoMNjM3NDIzMTgzODA1Igylocb5fwP3XPsRr6kq3AOsc1Lon%2FrLvkRbe5WFeP4JoEIRfOu0addoP7ZbuK0fgYkkrrZ9r5dQF3KQeqjIMp7L1dMll5wiMijErLy2FtCQBWKtO84uzPnozVIg9MWGZlLYDt%2BCyfkRD5HPq7T6Djdc4AT3B3PKQOOWR%2B%2FAls0ZKS%2Bbne81GXj7wVGVqRn7iPJx762bDQF9wz%2FKj0QGCMKju8geHU9Hl2GNwWsyjIkdLHGkG8O4soCeTsZHAR6SaYUruSAEvGG5vhmlz87wx2ejIwvhPf2jlMcyrRSWxEZ1gkLqkST9MtZIY8pm%2BLQPbZBN4EruE%2FAoYdoOzuebq09xZNJKRDyoMeoXW7euWwojgiUlyJ6FmnJHCJ8e3Z0iaGCElQuo4B9uAiPJ5%2BfaBSMQvtp8%2F3%2FI4V%2F%2B9z9WaDvvMxSGIsoXGpUh5%2FkZvCFKZVK%2F%2FAFWfulwdXT77OAyBwOXjaXdAu2u857AM2So3ih18LSOEhYORn%2BgdOi4778Yq7x0H54jYstiCY9gdDAYw1dcmjHjdFfWa8PEDBnPVYIlvJ7od6sWQRLc3cJrn0PFa%2Fb2CnQZoT94D%2BGmOU59775%2BIXIXzeM9oyTJNej2gy2Kb1JtYiBVSSR8cpe%2FIqcgL2SXykQRas0wrXzhdDCK1vq%2FBjqkAW4gergpLs%2FuBksTBW9edoCH%2FIVv6Kk4ZjkKQKLz%2FeBYQZx9yz2jfJYJRxpflRdOg8JPGbHfEEdbItMzupQlNa7%2FESNYGO%2FXY6bx2BiMvdhVQ5EADPdkXNKiqkcToLyEkcdw4hCJ8wMA2jz2CB%2FplHcaCev1QbrmbrPgAuzilW0QjJMPJR9bkIqtb%2FlVlWpmTnjvSJhyCEHzO2K5OS8uTOiSN5H8&X-Amz-Signature=0c74cf0476b52e852a61830747425aaf920795b659a1aa7b04424bac0c37d635&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
