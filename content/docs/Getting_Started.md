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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647AKDRSQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYt5k1W9kkmp4YeMK4EgLe%2BBKdzx3M0tomJTdeIhkFxAiEAhjYgwhyTSBpHAc4q08SFDVnROtzJGz418WaXB0671AAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLHUrbV0NoUuUsFOyrcA1E2423QhVVgFvKITcQSeNOWgltrpy921DRJA4fHPQOYs%2FScmqGOHFiEKdAYd%2FE%2FhV21jw%2FU3baYYfOM8DUkhhaehiUb2Jro49uUZTd3WS7%2BQ1pMEX9xPOEr8dgb5xlSB81i8ibGsE5BGO%2BgZK5ZLLXdv6nKygDsU3773hUQK9dMiLY6EVXcJsa5EH94CFQHX3PUg4yNOxlN567GVnqDO07Z%2F%2F%2F%2BbiTyz1h%2BibTY1za32ldh9tkD0Lsw5jx7qIKXsVm4qC2dpHFHaWQUZCHD2WQt7KrpcdYTV0Omb1%2FtBXN6oZCcinzJnW1%2BT3%2B59a7IcuT%2FXfpDt5AT3%2B2cSM%2FajAuVBeMF9r3PBPR4b6vDY6e7E6ZgBMjLZpwKSPO2OjKZc27KCPyMHNQI464T8L93tmU%2B1gSx9V%2BrqpoE%2FXD%2Fd07k%2FzEG57OI2U3wN2XS%2F5v2lPJHRyy%2BaC%2Fwiqvtq1ueGE80odDVQ8dtFC3Qdrb6G8Q4i8dtrEdlySnojTPYqPaURcStBsK6tHRA3sQbGB1w4HJ%2BY%2F0ZJlJM1eYwt6a3cfAskdvlmpFZKvoWZppmTdgHNVgRtCNGWHNyv6EPQYoVpc%2Bg79YVow1MAb05D2jQCnbhhKOlKBiyFvb5c8x3MPOZmL4GOqUB4qbtMvIOluAYN4dBb82LxLpi7bWhM4Zq3u8BmWIpwMjvbAaFnm23emjjz%2BYWVp3VHVeor%2FxthHrU0H49tTckRa0llQG1lrdnHEsp1Ndjiee1NmoLnBdyx%2BqdbfoEjXnRJsGzfAB6iKpukpq3AhAKYUWGdJ6dAeui0YLoZpcft71R%2BKIdIiq3sppL4z%2BMoSAgVjVVIs68oSCLQv4nmuaZ5V%2BevaF4&X-Amz-Signature=97ea977938e3c694a3b4a0154a10ed3a44ce49d852223cbadef13c96ced0c0a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647AKDRSQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYt5k1W9kkmp4YeMK4EgLe%2BBKdzx3M0tomJTdeIhkFxAiEAhjYgwhyTSBpHAc4q08SFDVnROtzJGz418WaXB0671AAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLHUrbV0NoUuUsFOyrcA1E2423QhVVgFvKITcQSeNOWgltrpy921DRJA4fHPQOYs%2FScmqGOHFiEKdAYd%2FE%2FhV21jw%2FU3baYYfOM8DUkhhaehiUb2Jro49uUZTd3WS7%2BQ1pMEX9xPOEr8dgb5xlSB81i8ibGsE5BGO%2BgZK5ZLLXdv6nKygDsU3773hUQK9dMiLY6EVXcJsa5EH94CFQHX3PUg4yNOxlN567GVnqDO07Z%2F%2F%2F%2BbiTyz1h%2BibTY1za32ldh9tkD0Lsw5jx7qIKXsVm4qC2dpHFHaWQUZCHD2WQt7KrpcdYTV0Omb1%2FtBXN6oZCcinzJnW1%2BT3%2B59a7IcuT%2FXfpDt5AT3%2B2cSM%2FajAuVBeMF9r3PBPR4b6vDY6e7E6ZgBMjLZpwKSPO2OjKZc27KCPyMHNQI464T8L93tmU%2B1gSx9V%2BrqpoE%2FXD%2Fd07k%2FzEG57OI2U3wN2XS%2F5v2lPJHRyy%2BaC%2Fwiqvtq1ueGE80odDVQ8dtFC3Qdrb6G8Q4i8dtrEdlySnojTPYqPaURcStBsK6tHRA3sQbGB1w4HJ%2BY%2F0ZJlJM1eYwt6a3cfAskdvlmpFZKvoWZppmTdgHNVgRtCNGWHNyv6EPQYoVpc%2Bg79YVow1MAb05D2jQCnbhhKOlKBiyFvb5c8x3MPOZmL4GOqUB4qbtMvIOluAYN4dBb82LxLpi7bWhM4Zq3u8BmWIpwMjvbAaFnm23emjjz%2BYWVp3VHVeor%2FxthHrU0H49tTckRa0llQG1lrdnHEsp1Ndjiee1NmoLnBdyx%2BqdbfoEjXnRJsGzfAB6iKpukpq3AhAKYUWGdJ6dAeui0YLoZpcft71R%2BKIdIiq3sppL4z%2BMoSAgVjVVIs68oSCLQv4nmuaZ5V%2BevaF4&X-Amz-Signature=a4a707773012fd25922b21ce62188a25a8f482239953622bfa7ad30d0d65d6bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X3R2L6F%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGT%2B8%2BQ62R2IlHaTBrRWgbwr5Hs0EhJ0LVpT8bIQQtIAIgDYMi80wWAshbvg1r3KJoRulojpXpGO8ZC6%2BBeCmUMJEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBH0qybxV0iKngltiircAzhZOoSofnXCy10fLiRtbliUHk2kAOkQRZ2oG2cecMDAlGi8L4yxYFha9LQJNOxytj1FlO%2BUrhOWqwd5sLEPNWsz4zcT7t12w6%2BcyiZZTNBeGN56CPYNjdRMnaGEktXu6JKPU68tE6QiIePJeCE5lSDJ8w7LQD8skYVzET2CNt7i7F3CA0I%2FC4H3lpNjJJCC%2FVYFRjdRcb5D8xuaTvy1b2oAsXLiV2vuZmg4ghLzrUGW84lD80%2FsvuR%2BlJ0F0Z%2F4kzJY7D8kXz7osO6GE1wjc3uDdqmYiK3KieDygwxC17AK4hjWx1%2F1tjT4WZ9V9WSDbZ0U69Ojquz6uOazx%2FS%2Bon88T2kfLQj%2BP54GOhya8HPD4iMfTYWxPrZnnRw4sI%2FvMizbfYTeOhcpBPUJDuoniZYD6a2Vt5mUjiXwZou6za4fxnWOEtTCD2xUD5OFuAH4nsR2amh4R%2Bl8uJ%2FRdRivbM5rmzMNbCle4J6fAq9Rc5dx7PiOnwJSxsaLALXUbTrhYADXoOMZjdax3oGsUxs8jUNoltJhtvEL9yrBZhSdsPYsXGpDve%2FgO9Qyifq2%2Fxn%2FiL%2BXOMYFw3O8w9uuReNK804nJdKBCgAgB3cOsFErOh6LCefhHyzGIwizXVoRMPKYmL4GOqUBe%2FiuBAU11arqRH6kGDgtqXHs0RKo1pQdaJIrr11FLkVDpgbKc7F0WCiUTGpVLY%2BMmECMvwRULvfvHAvGJuALCjj4fxoJ%2B2LpjbOZpl4jOMn%2B3PdEz6DF1b4AU79HUUQmD8IPhVvyN14p1vYS1%2BXhzwtYI%2FC2rqNl7rMigcNGSPNg63BkdRvGg8AJ6zojLcoh%2FJlGYBxegb2UDEk3LBbL%2Bas1Ro8R&X-Amz-Signature=1d246787dd6e71a10a997b3e86c570047555bcf492de2a9afd939d1d4a8eeee0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWISPNXT%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYcF%2FOnNfuFcd3lSi9nAY0lc03%2Fi13oagDhDFPWvRqygIhALtxOOTbumME4JzFHPnqLtvJHxJGtLOgN%2FYalPtGKNVUKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcVncrWU2DhW0J5Eoq3ANnVj4FgbZMEZeA%2Fn4MZFWvQffhwAxmzfZvVwRukZablQWNb%2BDiCAwEQoiWc%2Fs93E9Vfa9iLBn5DUBbvkPEA9GBLJkR2Dc1WRXN4y0tEScal%2FupTLiSzHsfuL37n7IKQnD9djuqcHeTCAPBhCiqw0GgzSkr%2FjpakiE%2BZ6zCiEufaw%2BWwCWZ5YsAlEhlgXq8udFBpTiWcOPQtZvL5EFW9ZOWTEWZJNFLn4Uab7CbdcGtB59D%2Fnh0iDg1TB4F8PcDRgX%2BBDSWAI7lKzz3QE%2F03iNM8GFum%2B6PokYx9H56a5tHSD98Pw86Sl8NVSV7mbrmDD%2F49%2BGglNCWD0Pexfsl97kMY%2Fjpdaq8LYcpEHcdIgJKFNExkXUoihZ1doK%2BqiHMoXXvbr0L6Uz%2BccekEg7QFGibaWpc806IFtEaP3HhPT1YnTfm5MDOn%2BdRIRSCNpc6W23iOqMLxxgU%2BUukisQGvMKVKXoURjyiLcJPyi0BAU2RMMYfa62GDslyRRTyWEa%2FfDloTj3ygCIrg%2Fng8%2FecB1DaZkaJ4Nj5PlgOQVxzGKRRuvjnrrU0cCTDVllI%2B%2BLH8tPuJFwutxLXDFFX21SafOIw47seQJDKRdylEsLsFMnkrg%2FqpnD1nSS9LhnajzDfmZi%2BBjqkAWDUUd4%2BvfKV8Mv%2BptyZFxcD6Er%2Fi%2FQlfhdrJ%2BZi1LockipDu0LKCSA6027gMAoFe8%2Fop6H1BhgArzko3zSDQEftD%2Fa9bAvwUB052l8yOrrsVzD3HfO1W9LFUQy2UnxqQaJxs%2B%2FxrQxQ16WaEoOI6RfK0EqRcSnPzrdEjVKbvWVHEHJ%2FbeeQHf6zp8f2DEUV4nnJncbHdnjnLABqEoct9pRKyX5T&X-Amz-Signature=3ed9db00b3059cdbf64e6b434871b51a1dfeb4aca6aa56ee947d357a2cb36284&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647AKDRSQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYt5k1W9kkmp4YeMK4EgLe%2BBKdzx3M0tomJTdeIhkFxAiEAhjYgwhyTSBpHAc4q08SFDVnROtzJGz418WaXB0671AAqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLHUrbV0NoUuUsFOyrcA1E2423QhVVgFvKITcQSeNOWgltrpy921DRJA4fHPQOYs%2FScmqGOHFiEKdAYd%2FE%2FhV21jw%2FU3baYYfOM8DUkhhaehiUb2Jro49uUZTd3WS7%2BQ1pMEX9xPOEr8dgb5xlSB81i8ibGsE5BGO%2BgZK5ZLLXdv6nKygDsU3773hUQK9dMiLY6EVXcJsa5EH94CFQHX3PUg4yNOxlN567GVnqDO07Z%2F%2F%2F%2BbiTyz1h%2BibTY1za32ldh9tkD0Lsw5jx7qIKXsVm4qC2dpHFHaWQUZCHD2WQt7KrpcdYTV0Omb1%2FtBXN6oZCcinzJnW1%2BT3%2B59a7IcuT%2FXfpDt5AT3%2B2cSM%2FajAuVBeMF9r3PBPR4b6vDY6e7E6ZgBMjLZpwKSPO2OjKZc27KCPyMHNQI464T8L93tmU%2B1gSx9V%2BrqpoE%2FXD%2Fd07k%2FzEG57OI2U3wN2XS%2F5v2lPJHRyy%2BaC%2Fwiqvtq1ueGE80odDVQ8dtFC3Qdrb6G8Q4i8dtrEdlySnojTPYqPaURcStBsK6tHRA3sQbGB1w4HJ%2BY%2F0ZJlJM1eYwt6a3cfAskdvlmpFZKvoWZppmTdgHNVgRtCNGWHNyv6EPQYoVpc%2Bg79YVow1MAb05D2jQCnbhhKOlKBiyFvb5c8x3MPOZmL4GOqUB4qbtMvIOluAYN4dBb82LxLpi7bWhM4Zq3u8BmWIpwMjvbAaFnm23emjjz%2BYWVp3VHVeor%2FxthHrU0H49tTckRa0llQG1lrdnHEsp1Ndjiee1NmoLnBdyx%2BqdbfoEjXnRJsGzfAB6iKpukpq3AhAKYUWGdJ6dAeui0YLoZpcft71R%2BKIdIiq3sppL4z%2BMoSAgVjVVIs68oSCLQv4nmuaZ5V%2BevaF4&X-Amz-Signature=03e7f5d09f9c8ee1ae3bbf6dd34164482644d317d542853e105edcde6b3dae89&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
