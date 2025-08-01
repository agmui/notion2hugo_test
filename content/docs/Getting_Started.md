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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3U27NI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSG6NtOrGb4bo%2BTN7mHCtKHzGmfGUtksy8n8GLqfMOqwIgO5ZUpju0vpMnkDvHAbTlBhf5eaUEAW56Q3Ky9qXAZ44qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoKuvU9h%2FdMs4mxMCrcA5vWV3ls0u2mwdJ%2FnEEvxjwnxdVx2xrorcnPsah50YmpcN0o7z%2BoN9T9OLk%2BbB%2BUpYLFYPooHJFVE%2FO3AV2UC4ZI2Eqd2l7tPRRmXnm2S25iWIgIpXX1bL%2F2x6uePOVFZyfsqLyysg0Xa4r3C9QvgTvAZ%2Bdyh0oTLingEnEzrl3rVFRRefZEStc6F7bXrUY6krusNcO1fuNjRloXAgXyR0SVie6KXSf0GwOTeZ1Xfrex4R%2FoCzQwo%2FFb4dIfTbp1MhBAG7pcCQe4Z6qkB6GIIB%2Fbj37rql700MIx0NmwW6AEcS2lzo6Cl9uJKURGFgkREqvPT4S7Boz3nekhKbYPS28dzNmAQ%2BQ1%2F5vu2eofx8Bzl66XspOmHV5lUNqcBchS7zuUuGYmDXsCPQmIxTiMzLCtrTxm13Pkqt%2Ft6opiTYbzzhpRI1i7ZZsk%2BVDsSEwxKDn1doBq7Zwjp01JLk97jun%2BFagJU4Rdtz62PJXms2vuQaLXcmU9DWHLqkP%2FJZtfIK2XUD6gBLEmvV19xJn1e4EfnfpKHmJSxTQVa489gqs9bftGKgj7tTw9aamQhqqheZQk4JtPsUu%2F8%2FRG5tjgizoAzk5VbpToVQICjKjWA9RrCPu3Q5LONARjmLBhMJiws8QGOqUBFJ3JfXxLXxa23iNna17zRqT5Q2cn%2FxADhZEqc9ai2%2BbDSmndh0O%2FUjt8CMhtR1V3LW8RWgpliST%2BOhJgbEVZLsZnl9O80kpaahnrW2wxnWFxmPo2EEor4j%2BHvNzpuZgw2P8Td003v6mYyMymwTQDTzdG6x7y%2B2GWKR%2BgLHvE6ohku7zyBfRJq4coyN7%2FpzDvdbp2qoCQyOhJpbsVoQspFH5POuC9&X-Amz-Signature=4650e7bfe76b4fd142f322857701efe04fd25699852356240eb533f2a7631549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3U27NI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSG6NtOrGb4bo%2BTN7mHCtKHzGmfGUtksy8n8GLqfMOqwIgO5ZUpju0vpMnkDvHAbTlBhf5eaUEAW56Q3Ky9qXAZ44qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoKuvU9h%2FdMs4mxMCrcA5vWV3ls0u2mwdJ%2FnEEvxjwnxdVx2xrorcnPsah50YmpcN0o7z%2BoN9T9OLk%2BbB%2BUpYLFYPooHJFVE%2FO3AV2UC4ZI2Eqd2l7tPRRmXnm2S25iWIgIpXX1bL%2F2x6uePOVFZyfsqLyysg0Xa4r3C9QvgTvAZ%2Bdyh0oTLingEnEzrl3rVFRRefZEStc6F7bXrUY6krusNcO1fuNjRloXAgXyR0SVie6KXSf0GwOTeZ1Xfrex4R%2FoCzQwo%2FFb4dIfTbp1MhBAG7pcCQe4Z6qkB6GIIB%2Fbj37rql700MIx0NmwW6AEcS2lzo6Cl9uJKURGFgkREqvPT4S7Boz3nekhKbYPS28dzNmAQ%2BQ1%2F5vu2eofx8Bzl66XspOmHV5lUNqcBchS7zuUuGYmDXsCPQmIxTiMzLCtrTxm13Pkqt%2Ft6opiTYbzzhpRI1i7ZZsk%2BVDsSEwxKDn1doBq7Zwjp01JLk97jun%2BFagJU4Rdtz62PJXms2vuQaLXcmU9DWHLqkP%2FJZtfIK2XUD6gBLEmvV19xJn1e4EfnfpKHmJSxTQVa489gqs9bftGKgj7tTw9aamQhqqheZQk4JtPsUu%2F8%2FRG5tjgizoAzk5VbpToVQICjKjWA9RrCPu3Q5LONARjmLBhMJiws8QGOqUBFJ3JfXxLXxa23iNna17zRqT5Q2cn%2FxADhZEqc9ai2%2BbDSmndh0O%2FUjt8CMhtR1V3LW8RWgpliST%2BOhJgbEVZLsZnl9O80kpaahnrW2wxnWFxmPo2EEor4j%2BHvNzpuZgw2P8Td003v6mYyMymwTQDTzdG6x7y%2B2GWKR%2BgLHvE6ohku7zyBfRJq4coyN7%2FpzDvdbp2qoCQyOhJpbsVoQspFH5POuC9&X-Amz-Signature=ccfcad586f6550996dd57454c7c98eff92227abc97a11840bfc0cae207cf5ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3U27NI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSG6NtOrGb4bo%2BTN7mHCtKHzGmfGUtksy8n8GLqfMOqwIgO5ZUpju0vpMnkDvHAbTlBhf5eaUEAW56Q3Ky9qXAZ44qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoKuvU9h%2FdMs4mxMCrcA5vWV3ls0u2mwdJ%2FnEEvxjwnxdVx2xrorcnPsah50YmpcN0o7z%2BoN9T9OLk%2BbB%2BUpYLFYPooHJFVE%2FO3AV2UC4ZI2Eqd2l7tPRRmXnm2S25iWIgIpXX1bL%2F2x6uePOVFZyfsqLyysg0Xa4r3C9QvgTvAZ%2Bdyh0oTLingEnEzrl3rVFRRefZEStc6F7bXrUY6krusNcO1fuNjRloXAgXyR0SVie6KXSf0GwOTeZ1Xfrex4R%2FoCzQwo%2FFb4dIfTbp1MhBAG7pcCQe4Z6qkB6GIIB%2Fbj37rql700MIx0NmwW6AEcS2lzo6Cl9uJKURGFgkREqvPT4S7Boz3nekhKbYPS28dzNmAQ%2BQ1%2F5vu2eofx8Bzl66XspOmHV5lUNqcBchS7zuUuGYmDXsCPQmIxTiMzLCtrTxm13Pkqt%2Ft6opiTYbzzhpRI1i7ZZsk%2BVDsSEwxKDn1doBq7Zwjp01JLk97jun%2BFagJU4Rdtz62PJXms2vuQaLXcmU9DWHLqkP%2FJZtfIK2XUD6gBLEmvV19xJn1e4EfnfpKHmJSxTQVa489gqs9bftGKgj7tTw9aamQhqqheZQk4JtPsUu%2F8%2FRG5tjgizoAzk5VbpToVQICjKjWA9RrCPu3Q5LONARjmLBhMJiws8QGOqUBFJ3JfXxLXxa23iNna17zRqT5Q2cn%2FxADhZEqc9ai2%2BbDSmndh0O%2FUjt8CMhtR1V3LW8RWgpliST%2BOhJgbEVZLsZnl9O80kpaahnrW2wxnWFxmPo2EEor4j%2BHvNzpuZgw2P8Td003v6mYyMymwTQDTzdG6x7y%2B2GWKR%2BgLHvE6ohku7zyBfRJq4coyN7%2FpzDvdbp2qoCQyOhJpbsVoQspFH5POuC9&X-Amz-Signature=b84214f56687d203381d9d2a5324162a5cc432118fb0921ee511081269110146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNM2E6M%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqesFQFO6jHSe40%2FauFv%2FUcuzZ0gdDTYeetlRfAdxOdAiBW%2B%2FLYY8%2BxUbug62iX9abX7UMXoeneiCSFzjmt9Ql64SqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGB%2FsXQCGV9ZAbTlQKtwDqnU7m6oJk2QWozpPAXKA33T5zXY8V8PnMWmbH16t0xDruqrH9HSOjH1bBJAQiZ%2FUxUheyC1VtXQu%2FsACZnkuXEVIvmMW0oicZNKXZ3ubb2PUkz4XKvS4qEm571wKZiU7mQSzdwtgOkuyFfKevQ%2B8fG5mjBHfDWvm3XZK4PHDQzsG%2F%2BGIQisZRTc01JmjwqcIuerCDIFdusxohQ9tUjbMN0BHKHvT52PqvmoMuyAiJUgymldLjgr5pwP7OCab9bH51t9MVY5cONKqe3n0T3lX6o%2Bfw6M%2BvAERoumL7U2m09OQgXXRmzYpaIEXOIQqNsBkzRj0DxYh77ZVzS5DVie8GxjlO8IivqflTUvIfnry8VrBzUHDswvvMgSRiwVKcTqNS8D5I7xeu7EgxaWcx4EjKLgiRLmyo1WnIelGf4Cv80%2BxKA76fD3rfCkdrtq4jhZwOppBDq8IT7pdDdJv%2BZbVV8wabnN%2B832Dbl0ttt4YPRHeRXqGC8lGBM7zejTkNGqzC%2BDOiKF2PQdDuOUU%2BjK4rtaFB2jW%2BrXgOPnQ%2FBOX%2Bg7wx24VrppiF4a3Vt01PNF4q1%2BlhteFDQgYUssC5aRCqotecW9T9%2BElTNAdYtskVkw3AsBKdHFM1m0w4oIwxLGzxAY6pgEmA3MjUxq3rsfkcAc%2BS4sgQuhmP3DuMnIj8BSfI%2BVc11XFOch2l3TSa77LsPCWy1O5kzT4jW8XTQix1y%2FeSEUJhoPvl4WkyAP%2BZRKSAO8hxCadqvb7ocXu66Ahr6sKGyWFVVSwgHVQWtcko2aXAtg3k8y00RNhnz8wF5FMQfopJvrWzyQK6kvmcpb5EE2o64YRHXh6jaj10kNl5pzsNsLpuG3R0aVo&X-Amz-Signature=823e0ee63bee80794fbc0e3ae8b14d2890976e16b678e83cdd762806f5b77688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3JS57Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMmhIxVLKzCC8b%2B3IaqF5HNouW1tLa9ow7jr1dcaUR6QIhAKPj7vuJqppxx7lwsASZygejo%2FU4oEIfM0p1%2F3udmBKyKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxoh6z7yMJO%2BGZ3MRkq3ANgcV6gsqvxGeTtLYfZlDkBdKoNKHU1VRg%2BHRAxnrOBPbxQuEnXjLKZ4%2F%2F24TEYMAkL%2FuEZZth5IFskrsKnZYBHlHDG8KISdMFhHQIiqnd6LD%2BTaFbHOeuD2hySUIlrvPMlb0IoF9lkV047PAxKIJG6Y5jXUDtAfJkzCT52gkRJPEejGUYhXsDB5d3sQqgxrkd76B1pmR6FjMpbWlrDDNhCyTrK1iu2uy0xc8qargxvEr0vCPSy7hUCNFX89W3nEHMAeKlwwDoUYS%2BvJeMOGbXHJ%2Fd51Ep2Xx3erHi7czv9LCgob9esYvxYRiKpskbBuGdZkWT26ppt6YannDKs2Lm1YkTED1HRoMo%2FWYRho3JboK3Sz9tiujpjkauoP7ztnDU%2BQi25PFESpL8OUDQDHdOHe6hho%2BwTthBS%2FCgBw4BRIopq0MOEb9fCoqlqnIg5qusdmyA8Pgq7cLpambi1cwlPxbp1Wd35X7%2F%2Fs2lmZLex8zzrwjKyl0dZocgxbzHgAMyq1nyxUi%2FNAAw6zJVQT6LFHrZbN%2FFIQe%2BqCROy3WsNBgzrBwzIECnnNQ6fdavC6Wml7WnWQgJ57oyPl19yAh0F8bdsCWULGHEZEzGQz5S%2BkzXrC8pJEJButV%2FDVTDSsbPEBjqkAVF3Hj7zveTJ5RItfrm2IbWIdmEdltEuKzBuodbrs2kjU3akTVaViv6NaG2toL%2Fwxhi7wwFB%2FAqmqtoxWNecOXRvlAb2Z5GI6T4wmMB9otR8%2F4kBef7DIv9t0NCB9xnVDYFTlHfpC7WfVyu%2BIEm2cHngrTvURcvQN%2Bj5%2BLcflAFwIGl2NHmBWKzhbAQoBSFi%2BcDS2cdg9UjwgaodSmhxd5lPihUu&X-Amz-Signature=f1fd4e53da9b8da62c679089cb6393b898823752515b09030afe423ff57e5b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3U27NI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSG6NtOrGb4bo%2BTN7mHCtKHzGmfGUtksy8n8GLqfMOqwIgO5ZUpju0vpMnkDvHAbTlBhf5eaUEAW56Q3Ky9qXAZ44qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIoKuvU9h%2FdMs4mxMCrcA5vWV3ls0u2mwdJ%2FnEEvxjwnxdVx2xrorcnPsah50YmpcN0o7z%2BoN9T9OLk%2BbB%2BUpYLFYPooHJFVE%2FO3AV2UC4ZI2Eqd2l7tPRRmXnm2S25iWIgIpXX1bL%2F2x6uePOVFZyfsqLyysg0Xa4r3C9QvgTvAZ%2Bdyh0oTLingEnEzrl3rVFRRefZEStc6F7bXrUY6krusNcO1fuNjRloXAgXyR0SVie6KXSf0GwOTeZ1Xfrex4R%2FoCzQwo%2FFb4dIfTbp1MhBAG7pcCQe4Z6qkB6GIIB%2Fbj37rql700MIx0NmwW6AEcS2lzo6Cl9uJKURGFgkREqvPT4S7Boz3nekhKbYPS28dzNmAQ%2BQ1%2F5vu2eofx8Bzl66XspOmHV5lUNqcBchS7zuUuGYmDXsCPQmIxTiMzLCtrTxm13Pkqt%2Ft6opiTYbzzhpRI1i7ZZsk%2BVDsSEwxKDn1doBq7Zwjp01JLk97jun%2BFagJU4Rdtz62PJXms2vuQaLXcmU9DWHLqkP%2FJZtfIK2XUD6gBLEmvV19xJn1e4EfnfpKHmJSxTQVa489gqs9bftGKgj7tTw9aamQhqqheZQk4JtPsUu%2F8%2FRG5tjgizoAzk5VbpToVQICjKjWA9RrCPu3Q5LONARjmLBhMJiws8QGOqUBFJ3JfXxLXxa23iNna17zRqT5Q2cn%2FxADhZEqc9ai2%2BbDSmndh0O%2FUjt8CMhtR1V3LW8RWgpliST%2BOhJgbEVZLsZnl9O80kpaahnrW2wxnWFxmPo2EEor4j%2BHvNzpuZgw2P8Td003v6mYyMymwTQDTzdG6x7y%2B2GWKR%2BgLHvE6ohku7zyBfRJq4coyN7%2FpzDvdbp2qoCQyOhJpbsVoQspFH5POuC9&X-Amz-Signature=f9ec2689d7a86d6825a764838970d6dfa313580c091def41c0c51b4671bbc9ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
