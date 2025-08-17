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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IRV5VLC%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDxFVkVSA%2BiwH%2BHqodI7VxqEtwIupM5u8ZVK0xVPi02qgIgKkDlOBppDkea%2BshnKHmSHpSqPpBp7myCcZ0FVJ5FmvQqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYjT3%2FMHkbsO4IzJircA1ThwfMbp2h9iRk%2Fs1MdfKG1Pe%2FGjuDMuTyc8gDDsMLOnNhj8ElApfOmFlO%2FM9MQn9dH5u%2BUXXuBnrS2jmNl8zM4AX1fObXyMPDGrtNweatpY6ze3qbHTvZM8YiSElwMPDtEPW0bkxgAvGyEcDUUtlJ%2B5GSatcVeAgVBLAOvRo0GYDERhZxAmSgRkDi5aS9rA8F%2FNmo%2B6gSWOvchBwzqQw5a7Obmz6QUDhFvUAuTLZopqDmYbmwrRJva8zyIJJZIBIaqMKKCMplFo7JGpZCP%2BDhC7GKqjejHyC1MWmDwoTy2CZrKRbst%2FtENLTPQ5B%2B%2FhFpTkugxwhV54AXqjyZajhVbsPaiPLl86%2B1uxcSWYrrSQibP4lQtEN5JDtHb8GaYs4aoj%2F3ydsMjmzajA7qKPC4f0nKLRjeEw4f4L%2BXGpwDKeXxvYF1Iirw7e1EsEQfuRYevSWpMMI2LbKyFDIvyVJb7qu%2F7x9MxFCPjcJG78crFSrr7dopF5JENYETkDgMwxgZRlWgYHVyxknLYQ579skD735P8BYeo%2FcfIB32ejjazj9H550tmarYnXaZtJwa%2BMW%2FA%2FdZaMyjT7%2FhhrMwT8z99vqiizUWWzQ9xtjTgceNmcOadbT1TbbzQbMXZMO3NhMUGOqUBLGuvAmatjbpdWUU3DKoEPZkW63wdyIo17Z7TL7qtfn50%2B9yqUyalOzO3uictQf%2BlgHkwhdC%2FPoqvFo6TBaA%2FW%2Fe1GSnkl4RsqEmQ4N1nAKclHxhXErEurN1SkLUKdYAbveDHiSzZSwq6bw%2BlrQ3Yz7SlKl0wKFwOvaV91u3LuqXXqu%2FBzNT8q%2FN3I78cyDJFwxGdYK%2B7MV%2BJFg0HCs%2FxfAcVcCJf&X-Amz-Signature=0e8eb959b5fe82311a2d0fb6974be952122a44b9aa093636b94b023aa12975ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IRV5VLC%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDxFVkVSA%2BiwH%2BHqodI7VxqEtwIupM5u8ZVK0xVPi02qgIgKkDlOBppDkea%2BshnKHmSHpSqPpBp7myCcZ0FVJ5FmvQqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYjT3%2FMHkbsO4IzJircA1ThwfMbp2h9iRk%2Fs1MdfKG1Pe%2FGjuDMuTyc8gDDsMLOnNhj8ElApfOmFlO%2FM9MQn9dH5u%2BUXXuBnrS2jmNl8zM4AX1fObXyMPDGrtNweatpY6ze3qbHTvZM8YiSElwMPDtEPW0bkxgAvGyEcDUUtlJ%2B5GSatcVeAgVBLAOvRo0GYDERhZxAmSgRkDi5aS9rA8F%2FNmo%2B6gSWOvchBwzqQw5a7Obmz6QUDhFvUAuTLZopqDmYbmwrRJva8zyIJJZIBIaqMKKCMplFo7JGpZCP%2BDhC7GKqjejHyC1MWmDwoTy2CZrKRbst%2FtENLTPQ5B%2B%2FhFpTkugxwhV54AXqjyZajhVbsPaiPLl86%2B1uxcSWYrrSQibP4lQtEN5JDtHb8GaYs4aoj%2F3ydsMjmzajA7qKPC4f0nKLRjeEw4f4L%2BXGpwDKeXxvYF1Iirw7e1EsEQfuRYevSWpMMI2LbKyFDIvyVJb7qu%2F7x9MxFCPjcJG78crFSrr7dopF5JENYETkDgMwxgZRlWgYHVyxknLYQ579skD735P8BYeo%2FcfIB32ejjazj9H550tmarYnXaZtJwa%2BMW%2FA%2FdZaMyjT7%2FhhrMwT8z99vqiizUWWzQ9xtjTgceNmcOadbT1TbbzQbMXZMO3NhMUGOqUBLGuvAmatjbpdWUU3DKoEPZkW63wdyIo17Z7TL7qtfn50%2B9yqUyalOzO3uictQf%2BlgHkwhdC%2FPoqvFo6TBaA%2FW%2Fe1GSnkl4RsqEmQ4N1nAKclHxhXErEurN1SkLUKdYAbveDHiSzZSwq6bw%2BlrQ3Yz7SlKl0wKFwOvaV91u3LuqXXqu%2FBzNT8q%2FN3I78cyDJFwxGdYK%2B7MV%2BJFg0HCs%2FxfAcVcCJf&X-Amz-Signature=1efdc08d7dc344bd842735acbaa3e0a53ab3087ca1976ef8ce936cc56b41939d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IRV5VLC%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDxFVkVSA%2BiwH%2BHqodI7VxqEtwIupM5u8ZVK0xVPi02qgIgKkDlOBppDkea%2BshnKHmSHpSqPpBp7myCcZ0FVJ5FmvQqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYjT3%2FMHkbsO4IzJircA1ThwfMbp2h9iRk%2Fs1MdfKG1Pe%2FGjuDMuTyc8gDDsMLOnNhj8ElApfOmFlO%2FM9MQn9dH5u%2BUXXuBnrS2jmNl8zM4AX1fObXyMPDGrtNweatpY6ze3qbHTvZM8YiSElwMPDtEPW0bkxgAvGyEcDUUtlJ%2B5GSatcVeAgVBLAOvRo0GYDERhZxAmSgRkDi5aS9rA8F%2FNmo%2B6gSWOvchBwzqQw5a7Obmz6QUDhFvUAuTLZopqDmYbmwrRJva8zyIJJZIBIaqMKKCMplFo7JGpZCP%2BDhC7GKqjejHyC1MWmDwoTy2CZrKRbst%2FtENLTPQ5B%2B%2FhFpTkugxwhV54AXqjyZajhVbsPaiPLl86%2B1uxcSWYrrSQibP4lQtEN5JDtHb8GaYs4aoj%2F3ydsMjmzajA7qKPC4f0nKLRjeEw4f4L%2BXGpwDKeXxvYF1Iirw7e1EsEQfuRYevSWpMMI2LbKyFDIvyVJb7qu%2F7x9MxFCPjcJG78crFSrr7dopF5JENYETkDgMwxgZRlWgYHVyxknLYQ579skD735P8BYeo%2FcfIB32ejjazj9H550tmarYnXaZtJwa%2BMW%2FA%2FdZaMyjT7%2FhhrMwT8z99vqiizUWWzQ9xtjTgceNmcOadbT1TbbzQbMXZMO3NhMUGOqUBLGuvAmatjbpdWUU3DKoEPZkW63wdyIo17Z7TL7qtfn50%2B9yqUyalOzO3uictQf%2BlgHkwhdC%2FPoqvFo6TBaA%2FW%2Fe1GSnkl4RsqEmQ4N1nAKclHxhXErEurN1SkLUKdYAbveDHiSzZSwq6bw%2BlrQ3Yz7SlKl0wKFwOvaV91u3LuqXXqu%2FBzNT8q%2FN3I78cyDJFwxGdYK%2B7MV%2BJFg0HCs%2FxfAcVcCJf&X-Amz-Signature=576215f3e07498487ea2e32550e4869a7f344a817ce68f6d5cc68c96e679a8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCSRATIR%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDZPJqekbeePbbuLpnYA5t1gmrAzxvvZWgEwfN6MDM20AIgAbgez0AulBRumQF2gjR3VnI5qBW%2B2knYBevjPHJIUKQqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgfNoFEHhBH3hAn4SrcAxvRfdIYkm975p74Ky%2BqiJuWnjaqoycgDfFf3H%2B5olH33gNsJpRY40WCo%2BkHP66v1VJOD%2BrOkxMyVZDMFc0A9fkRQ0ZJb6ciySssN0f588DSO57DGKO2cnajucNYwoxLOFpF3Hg%2BBTxFJmUGcxlX8GiFCG5dZv18iezUX0uwZKfP37ZIsfxGIVpCEI3Bovbn2C8GvKX3S0Hmk6IU6%2Bp1SVawWJrNV90KQ4KJ9bGM7yoqjskRNyJ%2BeHvpe0dJi0WGr1TkqUceeETaeMb5CAWd0M9C74xVSR3OXwxEyTbPQ1K%2F%2BBMzaYqOwDwOC%2FvbFFm3knrnzqd0jyny%2FL6kpzE%2FMn1StZjpLCB%2Fceh7%2Bo6wYx6%2FqSWH5PRql8MYofTw4CbguM%2F3%2Fhcxc5d0POV%2BEbbazjBs4glcP0ZPij%2BguVbV6R7sbfb5S2lyKo13LavsveUrjT3jNJDzb2FacQfsFnlUoZsVifOR83i7HHDSFdrV9%2FtAhvSybGYVNgd%2FV8KDTDqwljSvr2PziFUF42dIejpOKp0IYnI3RMDRGNj2uSw7AF73JeyL6v6K71cRo1THc1tu01iICFXlnAIHpDnVWvm5vkkDQQfKqHigfu03xSc9mAN%2FWZQL6f5KA%2BpnSWWQMK%2FNhMUGOqUBrWhIpLah%2FMA8%2FmvFQO71uOybwO%2F918S%2BD9GQdoYAXtje8OXT0f7X7s4H2jv1KIuORdmw0ltzB42F%2FZY0QEF213BJAsAdz9aRk8%2FMtdGVHykKvmUo04YBhMwdlzLg3%2Bs0UwgTtPrjoEX%2FjEVG1Z%2FxgKnfIpfnT2PAf2KWMiPLCC4Hy8tDdDuPN1ZvRMhs2IiB3e%2Be78VCRuTFxBBWqNNNXUb5fd%2F7&X-Amz-Signature=7d6e8e66d326ca633c2113a42bc82eaec9250d13b18b1328164280a91b22f352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQKTLXDM%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEZbv5NunjKkGTwIOHBcFczxD2jujiDanxnOLbyQgFRrAiEA9RpbOHHF5riGX%2BSUMQtL%2FYX1oBN9GtcXsSz9lTK8w4IqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnBwzeLoijhEYTuXSrcA16OUtIUAvv6cWCxHM1xe2ZtS7IwqnA%2BslkT9Jaj1rc13qRi4rb%2Bg6Q92uWP4h1vji0qVwVD9OwuXi5PyOnpUeMirIsird2iwZUFjXnXnybvFYntWCaC%2Bt4b%2Fk%2FrfJnRYVSvDbXWpw6SQErL%2Fv7wRzAxEAT3NKom%2BXkgzTLoYkcd1RfbPPBxtlR061LC2aF%2FRMr8ugJUImQjv1HplZVKAxB8%2F6WjKP4EkXyVWIKCSRh%2B455up5ihwZQjPGoWpVQKhslsdbXleQ8sb0%2BjWBxNx7Cdp%2FPQzmhY0q0dhIXD%2BNC9LkZHDNlg%2B8B40CkFrYM6X3Gs1oFT%2Fz7LUVqDD3YBEVa1K2Ocb8R79ntHwlj2I74uEpGN3ZUs1vYHpS%2BkSJD6YjENXhjjyJkxLCAIKBpvEMxt%2FbP7flnDWqL4RA11lwlWM5Coiq%2BqdiRDL%2B1obK1nT6x9hdNIXwhfvc5efR%2FEnbCD9zFPRdWcFRdAxS30l7LOKyAUEGbggvEVKigNeYFHKMJwofL5aXVQa0IXvH7agk%2FIOtVWPmyaUWDgY8XBfRC1LCeAJkAup%2BBMrHHzR6TLPeDsmSITcLGmNEd2KLEDpEsr%2F5YQ4mxEfjbVq7fdDbFrUCih67RHHJc7HCvSMKLNhMUGOqUBXJTiuMTz1M7lH575T53r%2BfMx%2FytaHZVkVc4%2BMf88pt9TTo13rdbnKyRW0Hk%2FXbkBk3%2Bu2kWVrmheC6EChgthQekL4m5rbrGvFFbiOaTNHHpM8SZ%2B4vg3%2F9kcWc17hhobTf5tttSYhSn%2BAYO6RYriEkjPTM3i5eYMTpyV4w37GqM6KaiUfQCvbHVGQSlwFsMxmajzdDJaJXYK2PsvBH4BYra7Qlqa&X-Amz-Signature=adcad0cbf4f23666f469fa029285b8a168872ba821ce3541eacd4f84b0b3b271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IRV5VLC%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDxFVkVSA%2BiwH%2BHqodI7VxqEtwIupM5u8ZVK0xVPi02qgIgKkDlOBppDkea%2BshnKHmSHpSqPpBp7myCcZ0FVJ5FmvQqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYjT3%2FMHkbsO4IzJircA1ThwfMbp2h9iRk%2Fs1MdfKG1Pe%2FGjuDMuTyc8gDDsMLOnNhj8ElApfOmFlO%2FM9MQn9dH5u%2BUXXuBnrS2jmNl8zM4AX1fObXyMPDGrtNweatpY6ze3qbHTvZM8YiSElwMPDtEPW0bkxgAvGyEcDUUtlJ%2B5GSatcVeAgVBLAOvRo0GYDERhZxAmSgRkDi5aS9rA8F%2FNmo%2B6gSWOvchBwzqQw5a7Obmz6QUDhFvUAuTLZopqDmYbmwrRJva8zyIJJZIBIaqMKKCMplFo7JGpZCP%2BDhC7GKqjejHyC1MWmDwoTy2CZrKRbst%2FtENLTPQ5B%2B%2FhFpTkugxwhV54AXqjyZajhVbsPaiPLl86%2B1uxcSWYrrSQibP4lQtEN5JDtHb8GaYs4aoj%2F3ydsMjmzajA7qKPC4f0nKLRjeEw4f4L%2BXGpwDKeXxvYF1Iirw7e1EsEQfuRYevSWpMMI2LbKyFDIvyVJb7qu%2F7x9MxFCPjcJG78crFSrr7dopF5JENYETkDgMwxgZRlWgYHVyxknLYQ579skD735P8BYeo%2FcfIB32ejjazj9H550tmarYnXaZtJwa%2BMW%2FA%2FdZaMyjT7%2FhhrMwT8z99vqiizUWWzQ9xtjTgceNmcOadbT1TbbzQbMXZMO3NhMUGOqUBLGuvAmatjbpdWUU3DKoEPZkW63wdyIo17Z7TL7qtfn50%2B9yqUyalOzO3uictQf%2BlgHkwhdC%2FPoqvFo6TBaA%2FW%2Fe1GSnkl4RsqEmQ4N1nAKclHxhXErEurN1SkLUKdYAbveDHiSzZSwq6bw%2BlrQ3Yz7SlKl0wKFwOvaV91u3LuqXXqu%2FBzNT8q%2FN3I78cyDJFwxGdYK%2B7MV%2BJFg0HCs%2FxfAcVcCJf&X-Amz-Signature=b123952b2bc1ffe0b0770bd610bf1a3116eec8dfc2d1886bd6c5558485de8f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
