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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDYUKAM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3l0yIaDld6x7rqSKsWOJ6jiWSqUuVXb%2BLmGEMP6MrVAiEAqYGX8MdkoY0L7hrG50JKHs3RS%2BT2lT36qL72ynlAHcIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAB0vsbui%2FFnGXsqLircA93CJO4YSkGGtnq4huW8fw6pBrLFU8VFclRepWjVzOB4UREIdndtAPDvlsGYpSrBawCz6RTl0Dhp3vhs2Uh0%2F031GJylI0taCYstojFqmPXUPoPvNqbwmAZDIyYT6VzlV11LiWk%2FRdYIpaHofrxhAhMPLUkukrAipTbLZM0alLUsTFH9a4S%2BXOvW4S7Nu92FtZ6a9s4wfESs%2FHG7R%2BGhzloHF50KD2XrS6%2FZ4R7tAcw6Ei%2FkV9fXrL8oB5RNBDdQWs7cIcQGlEDYRFBCzwOfZe42UdZtaSb6S5esefyUX%2FrMRiYEt3dzlR9umTTvzchdyF5ECB%2BLObppPzsTaccMYo1obEUst8k0GdB%2FkWWAv8dEj36RoS4c382rlFnkhOLefAkW2BgVnvo6BAbkunyXP14dYkbD9r2UtoKaQzImdVFCm7mRAjSPaoKgLo5ncmWTB8MCe5SCh4aiZWv3tanWe7uNRG5%2FXG3B5l4UC5XU1wK8nwMT8RNele1%2Bk4I0dSSE1HErxULGU3t33T4vqB7XBuFlagNEddvkoXsNHt%2FkHmOOvd69YMq2tY4oVt%2FQAzNYSMyTyLnMUve9pH6tqmtCSxv22w4UkAGwVesQetc7lr%2Bc%2F9JA0pORA%2BuX2Rz1MPWF4L0GOqUBdah4y9z0uIPgosEu2JJgesKLRkgSz6neqS6gndwh0s5rI10nYoBsKuYk41ESNudnGVp5gKEoA%2Bj2ZPiBJH7DvPTw7i%2FKZvFe5lMgmuVzeCVG1zrJyDGyqJY%2BerIHjDDptKQlHn4K5kJBYGweNMfJdEpqRVzQIiwDVIjO6pu4MiTVBOZQD5Wcu2G7mZEYEG6NWdkhe7JxHF40n5bQoFGSdgep5DeQ&X-Amz-Signature=6870aea8b7dbcc8ebccd3a670216654ce618260228542f3dfce0d79e5ef8b772&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDYUKAM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3l0yIaDld6x7rqSKsWOJ6jiWSqUuVXb%2BLmGEMP6MrVAiEAqYGX8MdkoY0L7hrG50JKHs3RS%2BT2lT36qL72ynlAHcIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAB0vsbui%2FFnGXsqLircA93CJO4YSkGGtnq4huW8fw6pBrLFU8VFclRepWjVzOB4UREIdndtAPDvlsGYpSrBawCz6RTl0Dhp3vhs2Uh0%2F031GJylI0taCYstojFqmPXUPoPvNqbwmAZDIyYT6VzlV11LiWk%2FRdYIpaHofrxhAhMPLUkukrAipTbLZM0alLUsTFH9a4S%2BXOvW4S7Nu92FtZ6a9s4wfESs%2FHG7R%2BGhzloHF50KD2XrS6%2FZ4R7tAcw6Ei%2FkV9fXrL8oB5RNBDdQWs7cIcQGlEDYRFBCzwOfZe42UdZtaSb6S5esefyUX%2FrMRiYEt3dzlR9umTTvzchdyF5ECB%2BLObppPzsTaccMYo1obEUst8k0GdB%2FkWWAv8dEj36RoS4c382rlFnkhOLefAkW2BgVnvo6BAbkunyXP14dYkbD9r2UtoKaQzImdVFCm7mRAjSPaoKgLo5ncmWTB8MCe5SCh4aiZWv3tanWe7uNRG5%2FXG3B5l4UC5XU1wK8nwMT8RNele1%2Bk4I0dSSE1HErxULGU3t33T4vqB7XBuFlagNEddvkoXsNHt%2FkHmOOvd69YMq2tY4oVt%2FQAzNYSMyTyLnMUve9pH6tqmtCSxv22w4UkAGwVesQetc7lr%2Bc%2F9JA0pORA%2BuX2Rz1MPWF4L0GOqUBdah4y9z0uIPgosEu2JJgesKLRkgSz6neqS6gndwh0s5rI10nYoBsKuYk41ESNudnGVp5gKEoA%2Bj2ZPiBJH7DvPTw7i%2FKZvFe5lMgmuVzeCVG1zrJyDGyqJY%2BerIHjDDptKQlHn4K5kJBYGweNMfJdEpqRVzQIiwDVIjO6pu4MiTVBOZQD5Wcu2G7mZEYEG6NWdkhe7JxHF40n5bQoFGSdgep5DeQ&X-Amz-Signature=ebea352469525b0aac17926fb6b63dcc6a182185e67ad3b2b30f8da5a1087c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AV6V5C3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BD39DPpp%2FHMUxhS44C5CSvb4opuEBgsp2%2FVpLHmtgAIhAI2mn1fD4EqvX8YwMkHu08S%2FDXtTF3qg8maKBr%2FF8cg5KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgctLUMZ99DRmI334q3ANNxYOLBchhC1bv4ZdPriCOx2tHRS27CsRxfJlHA8kaYWXKR8%2B40PsuMxogy1jfzP6mudNZXlyfj97EWngdPd56UYLk9VP09YkOSF03WtEp0PPwgYsJtv5YLU19YLN%2F32KqCi2j5vCkaxoIrGDEFGvDpxZfqT1MNanTAYSYtf38laSxRXCDRhKldLR7L%2ByIvE3S0BhA%2ByxVmuErfEZiRDniQiyF%2BZh5Ecnr5g9Gqa%2FuaOBakWv39gXZsmI%2FnL3Eq7eiPTf9SrYVhOg%2Bv83aZCGzDhmfQxTlsJWtLnXWlTNdTDXWsGZ825K58r45DcGQVS6x1PpcSmtjr%2B7xHYni8WoX5nB6f0Ie6wNZiJZVpNM72AimlISfp%2F6lS8wsyv4yTt6oxrwYjjHKL%2BoJDx0GyuXuRIkVOBxD76wnsSWb0oCqfa5R7PfDzk1kgUXLGNm2Qki9OEbnfwgf9Df9St7RaBmWpkT4pncPInjvJEcpK9VauqIzGkwtiung42AgpU7I0hs9MFuf5z%2BT3cXBw0wdoD6PSPEQND%2FaH3L92xyju4o1UPa8nry8LBMH%2F%2Ff4wiLYlxgb12y%2BHqMdqBC9rfGGCUSTU7ya68rXMFkDL3SFqSAtq%2BKUfTJjwEKpX3HMZDDihuC9BjqkAYNnNnwOqFTmd3%2Ff4OBa4etm0gOlYqz78fJaWSdJZw2foAGe1aWBJU0dhZqKiq8YMz1YN1S6n7%2BvgigIYxAZM03nPqfaTY4eBBdZM8mBJtg1lt1FDEElMaTagxvoJRvnVOOmGhI%2F5CZ5lu5XP6%2BRa2ZK%2BQf8vUaP65eS1ZVQtL35Jztx2iqW4r60dUyJBdUj3KkQL8cQ6ysC8Pc7wcWKYU4JQPBL&X-Amz-Signature=dc32b6528b8a819544eca4d1f45157ff9ecf1220a4e3a56907b5c5455de5aca6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YC4SHP2%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0X0CaQnpYCKlhj63nmxF7Rb6Rx7p8lChlrud82OKQKAiEAg7U4tZd%2F66kxcdOwuQNno%2BCfi355NDmB8iMlHVhDXtIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIXg30paM6vMHKqnCrcA1jPSe8kuJuCtb%2BVOIlfYVtCzzmeHVGwzd41IiwFxPQiwNws%2BrWmawZgZRlE6gqdF%2Bn1azzrR1Pw9BrmcGCFP%2FX9Y7C7H4eHW%2Fhv7lfYadf1MIFILjguLNzVwqzQqZSQ88ByN1i6BAEXjDm8pKR4TvGglmkO94X0zC3aopm1c%2FN9%2FJMszisMlF9KEMBiNpDzaTpFQsreq%2B2ejPPXEkKoHYMR1ugDl5ErfVhK9QWADUqpzFsqKqdkcYtCce41lxY70x1KPwugx1rGMDPoSMK%2B1rDdaNuThvwyGBAL1ZgYMGHx0TFVnaUfYEj0W70TWHy8lVkwTLHswRyIDXzfKCnuLi4FeKoSYocePjspkYLCQfBhuSj34Bpbc9jK%2BN0O9w%2FksXNbh2V7OnkUbYbrEdzWsXTyqXu9bQmLFf2t%2FLLRuzODsQ6iBrIESi3v9g7w2HkSS8z%2BS1uHPLnEAcuGXFzbNbN6IrFyV8kFk93aUknSrAP0zV4To4O%2F521yHV1PRtOy31kbzYFD1ozaj6EKHdZ88AtwXAXajGwsERDigKft0NvqGnL6XVawplZ9upjageciWD1xzD8xhYAsYhpSYQUkfznNZ3CEDBuzbioF40Rx0lQJ%2F9%2BpXsfsDxLtZLb2MJ%2BH4L0GOqUBBm5Qxsss7noWHgskxabSD8eoc7wUFwyvMxV1KdnhZ7u1ktfytHAA1%2FxR1B7pOqGOPmxowxQ5AEbg6CfT2Ma0jd4EXFnNffq0WIW6wm4iA5x%2B9tqxh0KomUhALybmqpAoVcOaEKO%2FPBE9KyYMc0lE9BQduESHrx5zJnwF6LJpGqm%2BqvuSgkuiSaAi0YCFynA%2BTITSFRbM%2BvQ%2FfA0mwro%2FfkyupN2m&X-Amz-Signature=daa16674122c35daf342ecf7fe7b18b85c2aaf36741d794806ec765ca5080a91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDYUKAM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3l0yIaDld6x7rqSKsWOJ6jiWSqUuVXb%2BLmGEMP6MrVAiEAqYGX8MdkoY0L7hrG50JKHs3RS%2BT2lT36qL72ynlAHcIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAB0vsbui%2FFnGXsqLircA93CJO4YSkGGtnq4huW8fw6pBrLFU8VFclRepWjVzOB4UREIdndtAPDvlsGYpSrBawCz6RTl0Dhp3vhs2Uh0%2F031GJylI0taCYstojFqmPXUPoPvNqbwmAZDIyYT6VzlV11LiWk%2FRdYIpaHofrxhAhMPLUkukrAipTbLZM0alLUsTFH9a4S%2BXOvW4S7Nu92FtZ6a9s4wfESs%2FHG7R%2BGhzloHF50KD2XrS6%2FZ4R7tAcw6Ei%2FkV9fXrL8oB5RNBDdQWs7cIcQGlEDYRFBCzwOfZe42UdZtaSb6S5esefyUX%2FrMRiYEt3dzlR9umTTvzchdyF5ECB%2BLObppPzsTaccMYo1obEUst8k0GdB%2FkWWAv8dEj36RoS4c382rlFnkhOLefAkW2BgVnvo6BAbkunyXP14dYkbD9r2UtoKaQzImdVFCm7mRAjSPaoKgLo5ncmWTB8MCe5SCh4aiZWv3tanWe7uNRG5%2FXG3B5l4UC5XU1wK8nwMT8RNele1%2Bk4I0dSSE1HErxULGU3t33T4vqB7XBuFlagNEddvkoXsNHt%2FkHmOOvd69YMq2tY4oVt%2FQAzNYSMyTyLnMUve9pH6tqmtCSxv22w4UkAGwVesQetc7lr%2Bc%2F9JA0pORA%2BuX2Rz1MPWF4L0GOqUBdah4y9z0uIPgosEu2JJgesKLRkgSz6neqS6gndwh0s5rI10nYoBsKuYk41ESNudnGVp5gKEoA%2Bj2ZPiBJH7DvPTw7i%2FKZvFe5lMgmuVzeCVG1zrJyDGyqJY%2BerIHjDDptKQlHn4K5kJBYGweNMfJdEpqRVzQIiwDVIjO6pu4MiTVBOZQD5Wcu2G7mZEYEG6NWdkhe7JxHF40n5bQoFGSdgep5DeQ&X-Amz-Signature=eb47132eb36bcd964c759400dfaa24cdb2e6d6943a3f0f546ded5360802c6358&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
