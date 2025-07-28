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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQ66KNR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEx7fdWb98ZN%2FHhrJVDraOKPtWkj2OQFcXUP1ZvlOw3lAiB61IfCC19njg2jUnpNfVWsOdWZNtOBeQGdoV9anHV69yqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxpvzp1ocdg2oC5JEKtwD4P1MnuhvGUvNKzpT%2FVC1smCDkC1j%2Fe%2FMC39cVTzCEVoXWGT8IL6b8pXUtyEgzGFt%2FiCr0QxK00dEtBe%2FyjoEIXiwR5fj8nnjPHkX63OZXJcUmTuXHf2REj3d6bm6mM%2FIqihqBb%2Ff5GHrc8o%2BekTwyWJR3tmWSOpt1PgYrpPydD8ZR02AFU0eMCAif7AgwRh04p2%2BLzMi3ogic5uTcIZ9J%2BsbccjfpfdofcVbTXCh%2Bmd9p5JqPSYHR28pV6b0SqlBgHrvdXxQOneuWreEYx%2BiCr%2BxfLlboB3%2B8968vAnXBeKcF1P9HFigpBbKoZzrINol1WIRQaEyV27w%2FPRWFeiuFrv5aIRRvdozfY1iwrIFcj0HQ7sJrRICXu27x9UYHpgFUGvhpVn0ERdZ9J6JJfAIKEA4PPnjgzeuwiNZNkjymZ1mNMAVdfqLTnHtinHpZGzHjOVnDULyXFstM%2FdfNWaTG2dyu45O%2BT680WSw75m3VeK2OO9%2FKV4qfYNiVgsR9Vtp8pmtuNb7QRz%2BOWWSax%2F3EZQHckb4Ubi1wOKzRxaEMLG5IHVTppKAcd30a6arB9kvC%2FBP3cj6VDpKoyt6wYTyc%2BgQZ8y475iyFYN2wZhYEkcqvCdJu2xl9VdEXEcwy4%2BcxAY6pgFxO58Hi4MdhVf1OVc1dbI9VZTld4ipk8Gd1WGDLihgsVsF10xrqFuoS8DB31s9AqynheBpHqzzV6hp5w%2BXVaLRKVjF8y3JDxjdWmCbb%2BIAqhFeVqbO1uxMmN%2FzFNDWwumGZxF4iSlq%2FYJ4cNU3xnGsWX5EGzPe5xCr9mEb2IQcHtdi2FRGudL1V1Tf9iKQ2RZ2efgwV88C%2Bi0zJz3XrBbVN9EmwyDI&X-Amz-Signature=c91577ed701bf94fe82eb4022db278781576a72838c0062511296a74318618ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQ66KNR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEx7fdWb98ZN%2FHhrJVDraOKPtWkj2OQFcXUP1ZvlOw3lAiB61IfCC19njg2jUnpNfVWsOdWZNtOBeQGdoV9anHV69yqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxpvzp1ocdg2oC5JEKtwD4P1MnuhvGUvNKzpT%2FVC1smCDkC1j%2Fe%2FMC39cVTzCEVoXWGT8IL6b8pXUtyEgzGFt%2FiCr0QxK00dEtBe%2FyjoEIXiwR5fj8nnjPHkX63OZXJcUmTuXHf2REj3d6bm6mM%2FIqihqBb%2Ff5GHrc8o%2BekTwyWJR3tmWSOpt1PgYrpPydD8ZR02AFU0eMCAif7AgwRh04p2%2BLzMi3ogic5uTcIZ9J%2BsbccjfpfdofcVbTXCh%2Bmd9p5JqPSYHR28pV6b0SqlBgHrvdXxQOneuWreEYx%2BiCr%2BxfLlboB3%2B8968vAnXBeKcF1P9HFigpBbKoZzrINol1WIRQaEyV27w%2FPRWFeiuFrv5aIRRvdozfY1iwrIFcj0HQ7sJrRICXu27x9UYHpgFUGvhpVn0ERdZ9J6JJfAIKEA4PPnjgzeuwiNZNkjymZ1mNMAVdfqLTnHtinHpZGzHjOVnDULyXFstM%2FdfNWaTG2dyu45O%2BT680WSw75m3VeK2OO9%2FKV4qfYNiVgsR9Vtp8pmtuNb7QRz%2BOWWSax%2F3EZQHckb4Ubi1wOKzRxaEMLG5IHVTppKAcd30a6arB9kvC%2FBP3cj6VDpKoyt6wYTyc%2BgQZ8y475iyFYN2wZhYEkcqvCdJu2xl9VdEXEcwy4%2BcxAY6pgFxO58Hi4MdhVf1OVc1dbI9VZTld4ipk8Gd1WGDLihgsVsF10xrqFuoS8DB31s9AqynheBpHqzzV6hp5w%2BXVaLRKVjF8y3JDxjdWmCbb%2BIAqhFeVqbO1uxMmN%2FzFNDWwumGZxF4iSlq%2FYJ4cNU3xnGsWX5EGzPe5xCr9mEb2IQcHtdi2FRGudL1V1Tf9iKQ2RZ2efgwV88C%2Bi0zJz3XrBbVN9EmwyDI&X-Amz-Signature=d6a7189dd281ea351bbf5ae463efc88dfd81c7bb015617232b4c6f43f6de6f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQ66KNR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEx7fdWb98ZN%2FHhrJVDraOKPtWkj2OQFcXUP1ZvlOw3lAiB61IfCC19njg2jUnpNfVWsOdWZNtOBeQGdoV9anHV69yqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxpvzp1ocdg2oC5JEKtwD4P1MnuhvGUvNKzpT%2FVC1smCDkC1j%2Fe%2FMC39cVTzCEVoXWGT8IL6b8pXUtyEgzGFt%2FiCr0QxK00dEtBe%2FyjoEIXiwR5fj8nnjPHkX63OZXJcUmTuXHf2REj3d6bm6mM%2FIqihqBb%2Ff5GHrc8o%2BekTwyWJR3tmWSOpt1PgYrpPydD8ZR02AFU0eMCAif7AgwRh04p2%2BLzMi3ogic5uTcIZ9J%2BsbccjfpfdofcVbTXCh%2Bmd9p5JqPSYHR28pV6b0SqlBgHrvdXxQOneuWreEYx%2BiCr%2BxfLlboB3%2B8968vAnXBeKcF1P9HFigpBbKoZzrINol1WIRQaEyV27w%2FPRWFeiuFrv5aIRRvdozfY1iwrIFcj0HQ7sJrRICXu27x9UYHpgFUGvhpVn0ERdZ9J6JJfAIKEA4PPnjgzeuwiNZNkjymZ1mNMAVdfqLTnHtinHpZGzHjOVnDULyXFstM%2FdfNWaTG2dyu45O%2BT680WSw75m3VeK2OO9%2FKV4qfYNiVgsR9Vtp8pmtuNb7QRz%2BOWWSax%2F3EZQHckb4Ubi1wOKzRxaEMLG5IHVTppKAcd30a6arB9kvC%2FBP3cj6VDpKoyt6wYTyc%2BgQZ8y475iyFYN2wZhYEkcqvCdJu2xl9VdEXEcwy4%2BcxAY6pgFxO58Hi4MdhVf1OVc1dbI9VZTld4ipk8Gd1WGDLihgsVsF10xrqFuoS8DB31s9AqynheBpHqzzV6hp5w%2BXVaLRKVjF8y3JDxjdWmCbb%2BIAqhFeVqbO1uxMmN%2FzFNDWwumGZxF4iSlq%2FYJ4cNU3xnGsWX5EGzPe5xCr9mEb2IQcHtdi2FRGudL1V1Tf9iKQ2RZ2efgwV88C%2Bi0zJz3XrBbVN9EmwyDI&X-Amz-Signature=e1e07cdffc61345dbdf79f05863d763c28ce009d0a3ea0fd965708eeec026f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HJ2G6K3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCl9QOX%2BmLcFsmJhelTPCkwUW6Z%2BKu%2Br18MfndgG8P6NAIgcZX17crp%2FxJo9Ut2ZvBJIS3O1Xgr2gD%2FPFyelg9n%2B1oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtjrpaZBcmgn8BhGSrcA%2BXMWgUA9%2Bl83WnnVicA04zmlLlWhBG%2B3gNbLpttlbdVsYiHg5wU88mGXDm%2B0MKqJ%2BVjhWI1sPIZhIQTD6Uw4%2BnwPOWKTL7MwsK8GGBL%2FQQy9RUrOvADFzb7O1JPNS0PhS2yr0QLlLL22OQb84nD34Y2BkU3CD6%2FSzDQxAeRXWz0NdssrMyPSJ%2BSuiDfu7OHDrhGVwNDiAwl1jvcNElQgHrd1KV2owA5a9a1qPEyiKuWbagpiG%2Fv80zPHqseRU3cF1tjtdOrSEP68FGL9PaNtHdRURItVu%2FklboMG3hbJxO1WQdgjia4Zh7hI1EkvF7EI%2FqAAgvFS3fJELA57x%2BDa5I16PTattdKF5bngi2waJ1TrVLx7IGH9Pu6WUxUjcEsRym4YeqXJ9d932GhAoGnfKI%2BjtCbKr3RZBWm7RZ%2FztVNZ70gv4CcDx3%2F4DKxd0LeXio4ZLkg3ay6eXvKW5st%2Fnmf4W65JMgaX9XcC6yb1SlrshhLYI8LgwsoHF6PvSCSIlnopi22kWzUUWwcOz0T4U%2BKEwIVT4hMXLRPQ3r2yWXYfG6IjvGUDxVSvihA9Qu4BI%2Bv7FzIJg2g5e4bvhs33PqdV5%2FU4%2FWCUYv3T1OuM27TXGWwJIHxFNfwp2ICMKqQnMQGOqUBBvBejvNvrcb62oNLmk3rQBYMmUGleKK6YFziVmtMCExtzh6uup2EvpX0HKoC8EwUyYVkBTS0Yazazb9az7ojRCOrfjzJPTIPHm7wCtKGzIr%2BD9WuSSPCnELA8VToPirmcO6WZq2bNvKgNMcAfZD66IkguY79aqP83DAa%2BN%2BbzgsvGLrQHPk44d%2FH55R7hkLxcSUd1VTxwWjxJtssgp6j98fVuKfI&X-Amz-Signature=683879eb6ae12f1432e52bba6e0ebdc61b4a7a6fe79e3c3bf669248dc7b8f519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTYUE27I%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHZfgESXIJH8hW%2FbXZYgwqTQJI3hjOPCNyYEZRoJA%2FhxAiEA8V5OeX4zF%2Fl1UIf3%2B34PHhrMuytTrrJ1oeLBOFFNPbYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2UFAVD8iyE3SfOSSrcA0D2kktsPJscDd93RNCA4jyTjU%2FxXbRLZ%2BXtaYs6vWOUEdr2zGSkTmpUCfdIvajuoBS3wzAQtibQ5HOBYZ0LRs1y%2BLfTIu8Mr6UH%2BOjpKasdo6EE9RH2zKD3KJjBYuWNH1jn2fM8A74BroimjAkya%2BmnlnmwHDT2o4f4%2BjCm8sEQDVZvgN1wCzzmAQjJyC7rAdFP8C9k8Cqxqd6CRb5ED4ocLsdJYRkHi%2BpbZyRoe%2FR5ehpao3y518ASBMEx9r%2F6EJSxhN8WXq7BITzMfPL7wgVfrZXk9SFdwgsO4BdOHaDYVc7WitjwRNfiq%2Bo71EK81McH9DTh12i3it7Rzw4a8O%2BMdfY6s5srMt4H25QBzWj%2FNpP9hxU5EYWFQccnVarmpl2GVpY3kIYdpOd0KDR3wxIHwRMTgKvAQwOukd5dkNTobivBQihRMxx27wH3mOi%2FSrrcfCOdMMDd7Nb5qzLnx7wZ%2FCaKyJ%2BcUona4jG0F6id1K%2FvAMwemmDQ4J6desH%2B6LE%2FpB2aRxRtaCFhh4%2Fg2Um5SQWcHe6UnOIH6rziQ7inOcbE9BYoP66Bfk%2FCfXZLnHTh26CVCr957%2FGmCrV6yRP2tcn3004V67pCJe6Ilwdh9%2Fg2RnjXuKaoFIXdMN2PnMQGOqUBCcBZbh0wY%2F7O%2Fyh5uP1bf%2BeQFOmGQieIvV4Axl62VQiEiadJ8iCkUSP9X8lDtl%2B9FV5bmLi7TddhVhoM77Z%2B6n5NpZaxOS2EVHJ6WYEEAL%2BtNOMUZcrkJXqB4VcJcmzIo6U3Yf%2BjlyPWD2yGtyVbPtrA6ghj7Ng8iiz7yTnKiJw6305ifsDozLOR8kAGMKuYRYSnORT5DBmHOCMgSrxVkC2m94zx&X-Amz-Signature=9c82dd5490dab1a63f2fa4c0886b489bcd7b5994ba4082cff09bd505d6225389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQ66KNR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEx7fdWb98ZN%2FHhrJVDraOKPtWkj2OQFcXUP1ZvlOw3lAiB61IfCC19njg2jUnpNfVWsOdWZNtOBeQGdoV9anHV69yqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxpvzp1ocdg2oC5JEKtwD4P1MnuhvGUvNKzpT%2FVC1smCDkC1j%2Fe%2FMC39cVTzCEVoXWGT8IL6b8pXUtyEgzGFt%2FiCr0QxK00dEtBe%2FyjoEIXiwR5fj8nnjPHkX63OZXJcUmTuXHf2REj3d6bm6mM%2FIqihqBb%2Ff5GHrc8o%2BekTwyWJR3tmWSOpt1PgYrpPydD8ZR02AFU0eMCAif7AgwRh04p2%2BLzMi3ogic5uTcIZ9J%2BsbccjfpfdofcVbTXCh%2Bmd9p5JqPSYHR28pV6b0SqlBgHrvdXxQOneuWreEYx%2BiCr%2BxfLlboB3%2B8968vAnXBeKcF1P9HFigpBbKoZzrINol1WIRQaEyV27w%2FPRWFeiuFrv5aIRRvdozfY1iwrIFcj0HQ7sJrRICXu27x9UYHpgFUGvhpVn0ERdZ9J6JJfAIKEA4PPnjgzeuwiNZNkjymZ1mNMAVdfqLTnHtinHpZGzHjOVnDULyXFstM%2FdfNWaTG2dyu45O%2BT680WSw75m3VeK2OO9%2FKV4qfYNiVgsR9Vtp8pmtuNb7QRz%2BOWWSax%2F3EZQHckb4Ubi1wOKzRxaEMLG5IHVTppKAcd30a6arB9kvC%2FBP3cj6VDpKoyt6wYTyc%2BgQZ8y475iyFYN2wZhYEkcqvCdJu2xl9VdEXEcwy4%2BcxAY6pgFxO58Hi4MdhVf1OVc1dbI9VZTld4ipk8Gd1WGDLihgsVsF10xrqFuoS8DB31s9AqynheBpHqzzV6hp5w%2BXVaLRKVjF8y3JDxjdWmCbb%2BIAqhFeVqbO1uxMmN%2FzFNDWwumGZxF4iSlq%2FYJ4cNU3xnGsWX5EGzPe5xCr9mEb2IQcHtdi2FRGudL1V1Tf9iKQ2RZ2efgwV88C%2Bi0zJz3XrBbVN9EmwyDI&X-Amz-Signature=3f3fedb0878569d32efc6cb8b91eaa74698d8804e3bdd2b817c9a20ecd2700f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
