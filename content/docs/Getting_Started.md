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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSDYNKG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIC6V%2Fzj7Fg4doJitjWqTi1gnezGaMkzUNhHPcbI3v77aAiBdOcfTzvkhXb%2BkdDPxqkC3G3o5BKluEloqeZysTXGouyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTQpPgDeoA08C%2FHOYKtwDKSInKK3VEZkoKuZNk7%2BYSARJwixYx%2FuyAkXshOr2ljqPez6WTFIfuB2AaoEzx71x998rM9tdVAP1zvBwP5jPYipXzzalIqWxrV7v8FeCYA5q1IhT3TR3gWkC%2FsaSDgY4%2FqGDAXl5n1u5Zy9%2BlI%2Fp5RLaTJubOIKkuQcOSZWczfk5Bd8UHRKsZANn1Zg46ej2mWRF5IVaqUXMdncEYG4BLOSnD5JQhVyBTixdJmN40kmcdLPTbh2FOYoy2fXz3ujtc0i87%2FnUQ7cOys%2FBUX%2FPXOkYYZBhZUXFnXsbup0420KT5CKtg9ga81c8j1HkvVTV%2F%2FbL6UWhKLm5GxRlizHx52SYRpFxGnnFWoo6Ir2RahT%2BkmWsZTs65uEfQof9vAVsVlh0N2IpjZVgD7KUKVn0qbXkHDC2ONn7X8wn28DVndx2mVGNeIEfeUiymM5E7X90tXmP6w1ssXyZoZqJ315KlMxwCU6uK53PzWgSWAX8KSeub%2Bkd1WNeceIrMSoMn4ypJqnS7RnQdsne3r355bDHPhEOkGQ7lW23aAjk544xTp0yud1M5rTWz45jx4Aih8%2FOrnBc6l3YtSATDwOPnJvpUikKGtiqb3qremtpYw%2Bmt%2F7rXmg0dbJr0Snhbx4wlPjcvwY6pgF%2B4cFSnmYMHw7m%2FRCt7Te87nbaWwwsmwnF0YCNRaLG1syobyf34QPZCCIp4GfrizW7EwR0jTle0FdUYxx78CD1G%2F%2F6cCvRhQB2X2MxX09yToNI0oHoQUI4%2BEhOupsGQ1G4hhBvUt8h%2FJ2sS9Jexpg%2FZsFkYRubzAts3o3DZsdQ%2BJM%2FvNqM9txaCB0IzP%2FjbZPUqxx8TcnDTnIetr9UtelFeDUB5Br%2F&X-Amz-Signature=8475dc9ffe6cd29e98f53c85cff0ec377e450ae6e63fab086bb7d482c1e60ad8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSDYNKG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIC6V%2Fzj7Fg4doJitjWqTi1gnezGaMkzUNhHPcbI3v77aAiBdOcfTzvkhXb%2BkdDPxqkC3G3o5BKluEloqeZysTXGouyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTQpPgDeoA08C%2FHOYKtwDKSInKK3VEZkoKuZNk7%2BYSARJwixYx%2FuyAkXshOr2ljqPez6WTFIfuB2AaoEzx71x998rM9tdVAP1zvBwP5jPYipXzzalIqWxrV7v8FeCYA5q1IhT3TR3gWkC%2FsaSDgY4%2FqGDAXl5n1u5Zy9%2BlI%2Fp5RLaTJubOIKkuQcOSZWczfk5Bd8UHRKsZANn1Zg46ej2mWRF5IVaqUXMdncEYG4BLOSnD5JQhVyBTixdJmN40kmcdLPTbh2FOYoy2fXz3ujtc0i87%2FnUQ7cOys%2FBUX%2FPXOkYYZBhZUXFnXsbup0420KT5CKtg9ga81c8j1HkvVTV%2F%2FbL6UWhKLm5GxRlizHx52SYRpFxGnnFWoo6Ir2RahT%2BkmWsZTs65uEfQof9vAVsVlh0N2IpjZVgD7KUKVn0qbXkHDC2ONn7X8wn28DVndx2mVGNeIEfeUiymM5E7X90tXmP6w1ssXyZoZqJ315KlMxwCU6uK53PzWgSWAX8KSeub%2Bkd1WNeceIrMSoMn4ypJqnS7RnQdsne3r355bDHPhEOkGQ7lW23aAjk544xTp0yud1M5rTWz45jx4Aih8%2FOrnBc6l3YtSATDwOPnJvpUikKGtiqb3qremtpYw%2Bmt%2F7rXmg0dbJr0Snhbx4wlPjcvwY6pgF%2B4cFSnmYMHw7m%2FRCt7Te87nbaWwwsmwnF0YCNRaLG1syobyf34QPZCCIp4GfrizW7EwR0jTle0FdUYxx78CD1G%2F%2F6cCvRhQB2X2MxX09yToNI0oHoQUI4%2BEhOupsGQ1G4hhBvUt8h%2FJ2sS9Jexpg%2FZsFkYRubzAts3o3DZsdQ%2BJM%2FvNqM9txaCB0IzP%2FjbZPUqxx8TcnDTnIetr9UtelFeDUB5Br%2F&X-Amz-Signature=92f905c4fe39fd9e2dd32af178f2218855bd965173eb3c522db0c9b8789edef1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4RGACVA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD9SdUIUz6iyTla8TE3Onte8qGZ3fGAGF36o00wpNNkgwIhAKDunrU26Lwsu2PrxR7bp4ZHNbm7L5LwlbNAKBt50dmCKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkx0KUp4PVlakXTPkq3ANAaN4wNP2eUr0R5KhoCLVy55IMlLlsSRqbXxkceufGrUr6rv5RUKOa6w9vtAu7h7T4SOlOWKh%2BogmOYBlBZ2hF3Ojokle%2FC4PvH7hTOzyRY%2FH90E1AE%2BEGZwBM02nRDLcR7MCia93tO7BnoyMhGgKbgPLKb10mWQv41QQMWUq7kRIjNvDo4nJG2trCU87rx%2FgWhrFUNUzEnyFrXG%2Fr3t1uZA5yRVlnYNo%2FwawV8IBoLp2qi1W%2BOle%2F07RXWuSd3v6ngDJR%2BOewnrMlNhEqZSlyN71ZNAQeDP45aYHZWcGt6MrkbQulC%2B2WmTzJQ2QIUBGzxnThg6ohoM%2BKqjwen%2BgB4E%2Bp9ObpBSDK7GHnJilja%2F%2FeMhlVH1wPm1uYGlvGw9VPYjBLWj20qVX2mqz0h%2FDYTRJfbwbd8aYzDffhiwNV7zxWgAoK8sc2KwpjW8JZtoysiobCYOxxLi8UeZtztxVC44nLxrIwkIUC2ZNSmWdlUbk7ixnVWWOHflJxw4%2BFEP8KJNsvFW6uqNLbbp8u4UmuzFshsELl3ZGrT5Wicz6fKz3v0orKfu6OUeowY%2FarsLItT7DPa2uXmLEtItyeAVzCuEwqP04KqdC3P3KEAbKLfs9KHuh5ZokEySUZUzDY99y%2FBjqkAVEXzHL9apNt6Qxxoxr8PQu9g7Tt%2FmkIthYvxFaTFgs88gZ5cc5ry5fJ76ZdQezfoC7wb63yCSqm1XdUzYBGJgiv%2FxoqprdR%2BEyKwmz55xGUXGO50DlH82YIwOziY0B6FOybyGH5Dz6dQm3nEVzCAmqfdyD4qgL6H2SQrJkJrRCnqGRQY%2BS4%2BVT%2BNGbrlpWFy15Mhnub4Ze2CXepSrH01Ks2kRyO&X-Amz-Signature=46d3a8d30da65bb3be3eaa3a9ee28a70203a2646016b8e8e6ccdfe1822883240&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MFJANZM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIB3eJ1GsrIuywe5Qujh0qZ8C%2BYYJFIseCcxABo%2FbddOtAiEAyHEk5IdbpIrdiivWMj0V0KK4ffT%2Fq%2BaL0mzK4sSswVsqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDZYK357M0GvkeORSrcA3f5zzV7bsi6xGwr4RqF6nPC%2BFD1aqoDTjU1Zri2ivwjVOSNCyrvST4WmhqxOfoC%2BjvK%2FH6WDa7FQn18JKVsW5JQusK2zqU5J3XRhL0NcRYYn1RAcl12v8N3a0%2B0bpqthR%2Fe6bFZRlvEGqrQ5nkbUR6N%2BrxvOzdOF2BFIlobqEpsIVRIIov8UBVLpqGu9%2FVynMMBATphEMp1CSHcmuhlfTWXONFgGfADDqbT4kfqpaK3%2Bo1XlOoLBDxjGjF%2BuZXAA1W%2FlCJl3rHXTgLvO5XA5HoExWlHP9toLB0OfX59uTnpqqIxwXRZlHfvaenAs6Om99p5QqduvOkPa8wtnez0F7iMvU%2BWA%2BFowng5Lz28K2kYII1s5xfUhR1jeEi6dFiYCAb1%2BJ5ikaDDRPnMv1NtnAxp%2F%2FWjcZ%2BZGuevc7BZhHGlIZ4SZ7BHpD6lo4oIv7Q0ZwEuudmvGd7g3zBObufGueWBegzX4rVzcd57xTQiexPlrOaK68a0dHeofQsfn4UOeTpCGInWLuR0QZQQSGH6UYfv6nx%2FTXjNhHYlHXxpF2BQJ7co%2B6lG3UgVAT0eEJIrds5ZF8qPFNB%2F%2FD4Cct1YKuL8ARVi2%2FxyiF4t%2BNm6daDllc0iY3q5UOknP%2BlLMJH43L8GOqUBryhDp9zQOPGiKZQMUg1a%2BFh4nitCBhgcc3WmCg5wi66sYpfs1%2BIsXwVhorAK%2FXuTLNeSYqLb2VJQZP%2FEmampDYN9MalckDMTpRwW3653SZcgN5C4leQB%2BlWFyHDKrvn6IT%2Bg6r72YEyuhD%2FVxgLR8sLlZU%2Fj1NUyQWYkzn3WVL9nj4zo8TGIANhjESWOAMMltCromQvkOhntA8WCZQCfC8jTuFY9&X-Amz-Signature=0a99819aa38b590900e69deb33b5e00b5a2f5b52ce4ca9f2b23516c56ed28131&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RSDYNKG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIC6V%2Fzj7Fg4doJitjWqTi1gnezGaMkzUNhHPcbI3v77aAiBdOcfTzvkhXb%2BkdDPxqkC3G3o5BKluEloqeZysTXGouyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTQpPgDeoA08C%2FHOYKtwDKSInKK3VEZkoKuZNk7%2BYSARJwixYx%2FuyAkXshOr2ljqPez6WTFIfuB2AaoEzx71x998rM9tdVAP1zvBwP5jPYipXzzalIqWxrV7v8FeCYA5q1IhT3TR3gWkC%2FsaSDgY4%2FqGDAXl5n1u5Zy9%2BlI%2Fp5RLaTJubOIKkuQcOSZWczfk5Bd8UHRKsZANn1Zg46ej2mWRF5IVaqUXMdncEYG4BLOSnD5JQhVyBTixdJmN40kmcdLPTbh2FOYoy2fXz3ujtc0i87%2FnUQ7cOys%2FBUX%2FPXOkYYZBhZUXFnXsbup0420KT5CKtg9ga81c8j1HkvVTV%2F%2FbL6UWhKLm5GxRlizHx52SYRpFxGnnFWoo6Ir2RahT%2BkmWsZTs65uEfQof9vAVsVlh0N2IpjZVgD7KUKVn0qbXkHDC2ONn7X8wn28DVndx2mVGNeIEfeUiymM5E7X90tXmP6w1ssXyZoZqJ315KlMxwCU6uK53PzWgSWAX8KSeub%2Bkd1WNeceIrMSoMn4ypJqnS7RnQdsne3r355bDHPhEOkGQ7lW23aAjk544xTp0yud1M5rTWz45jx4Aih8%2FOrnBc6l3YtSATDwOPnJvpUikKGtiqb3qremtpYw%2Bmt%2F7rXmg0dbJr0Snhbx4wlPjcvwY6pgF%2B4cFSnmYMHw7m%2FRCt7Te87nbaWwwsmwnF0YCNRaLG1syobyf34QPZCCIp4GfrizW7EwR0jTle0FdUYxx78CD1G%2F%2F6cCvRhQB2X2MxX09yToNI0oHoQUI4%2BEhOupsGQ1G4hhBvUt8h%2FJ2sS9Jexpg%2FZsFkYRubzAts3o3DZsdQ%2BJM%2FvNqM9txaCB0IzP%2FjbZPUqxx8TcnDTnIetr9UtelFeDUB5Br%2F&X-Amz-Signature=73795353955399e14443fca20c3bc28f623e192084d2ba83ea8ae18ab79a6240&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
