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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625KCNAPS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAkOmWXVSfElNT%2F20jg4IGbeMyT7wQ2%2B%2F5%2FpKfR%2BP4HoAiBtng%2BGC4OHzUMkbRHXfspieabLeVUQTsO55c7lZB%2BYECr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMd11xJUTHTAeOqol3KtwDwBfQ6vP%2F95JqPnYgEnJWNb1Ll15IznbXP0%2BEpFlUi5zw6lP6S0%2FAiTY6TolsFsJuOn57PnPTTDpDoNZZ2W%2BXm%2F%2B1ctXRgjPu1Azuz7hyefEZcYq%2B9XySBHzpiaLfIDZLSoX5WrdiiLbzl8Dpd25nhQtbUfycBzFId%2FSoRSxxCmETaOmnl0katSS1XlkwPQaGwn5hhCO9YRg8lva7ZhcD4gy3mY5Ek1PJPaP9XvQxn6%2BHJAj26RjERCG1dJZrGwiu%2BVDdM1CwVdJLuJcoIV6gL4E%2BRqBQ9IqUGTIiDD1AAZuj47J4OX9ozjPmvDEU6RnUhYoU6roWH937oKZVyZ4YGkspvIKaSyZCwOH%2BugKiCzea1Tz0tGMl9RZq%2BTdLv%2Bbnjp9qt%2B%2FUWLzhCTe5%2FqW%2BL9YTWPgIiKyvl01GUAmhsCIbGr%2Bw896erlXKT5mAqUoKKDaZMJjB3BBjtuwJQVGHv7dnuBvfuiatsdLT8Ri653HATEDsJstbe7AohHsrmttvCKgxkFqB9rVIr6NMf5ROqQUdD5HfrFjr7NpYBSea255TkXgdVivcd5JZtKIz1l02SkXr89yllXNP3KQ4y2F7GAQAP7ZEGpnu0UChSUb9FqYUrcaHbZqeMF1xs%2BwwmuigwwY6pgHn9iJZKHMecqZxnDtHFCUJf4sjk0MYcobTz8l%2F9G%2BCyVT2%2BW%2FJxsPHg2n5bQhxMGaZroX%2ByJT02WtBwKP7qB8NJPiSt0EnyIzeAIf4NYszoCcUDHnM0U3DZ36KIyoc7Sr2Xcq87W9XDSrf4utqEwRVvzHYvfIEbPP%2FEeqpK3Q24SNIQzNoQgQH2lDKT45UCnAu2p7VI%2BZDHIBXxL4ayDQSEvE98gjx&X-Amz-Signature=2b534ecaa3ee8c9c3633fd24a4389f56f5bf476fc5f4a17010d2cbdd11cca12c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625KCNAPS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAkOmWXVSfElNT%2F20jg4IGbeMyT7wQ2%2B%2F5%2FpKfR%2BP4HoAiBtng%2BGC4OHzUMkbRHXfspieabLeVUQTsO55c7lZB%2BYECr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMd11xJUTHTAeOqol3KtwDwBfQ6vP%2F95JqPnYgEnJWNb1Ll15IznbXP0%2BEpFlUi5zw6lP6S0%2FAiTY6TolsFsJuOn57PnPTTDpDoNZZ2W%2BXm%2F%2B1ctXRgjPu1Azuz7hyefEZcYq%2B9XySBHzpiaLfIDZLSoX5WrdiiLbzl8Dpd25nhQtbUfycBzFId%2FSoRSxxCmETaOmnl0katSS1XlkwPQaGwn5hhCO9YRg8lva7ZhcD4gy3mY5Ek1PJPaP9XvQxn6%2BHJAj26RjERCG1dJZrGwiu%2BVDdM1CwVdJLuJcoIV6gL4E%2BRqBQ9IqUGTIiDD1AAZuj47J4OX9ozjPmvDEU6RnUhYoU6roWH937oKZVyZ4YGkspvIKaSyZCwOH%2BugKiCzea1Tz0tGMl9RZq%2BTdLv%2Bbnjp9qt%2B%2FUWLzhCTe5%2FqW%2BL9YTWPgIiKyvl01GUAmhsCIbGr%2Bw896erlXKT5mAqUoKKDaZMJjB3BBjtuwJQVGHv7dnuBvfuiatsdLT8Ri653HATEDsJstbe7AohHsrmttvCKgxkFqB9rVIr6NMf5ROqQUdD5HfrFjr7NpYBSea255TkXgdVivcd5JZtKIz1l02SkXr89yllXNP3KQ4y2F7GAQAP7ZEGpnu0UChSUb9FqYUrcaHbZqeMF1xs%2BwwmuigwwY6pgHn9iJZKHMecqZxnDtHFCUJf4sjk0MYcobTz8l%2F9G%2BCyVT2%2BW%2FJxsPHg2n5bQhxMGaZroX%2ByJT02WtBwKP7qB8NJPiSt0EnyIzeAIf4NYszoCcUDHnM0U3DZ36KIyoc7Sr2Xcq87W9XDSrf4utqEwRVvzHYvfIEbPP%2FEeqpK3Q24SNIQzNoQgQH2lDKT45UCnAu2p7VI%2BZDHIBXxL4ayDQSEvE98gjx&X-Amz-Signature=28bbd01cd256da263f9b09908024de4596be112a52f63c00e683bc237a18414e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625KCNAPS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAkOmWXVSfElNT%2F20jg4IGbeMyT7wQ2%2B%2F5%2FpKfR%2BP4HoAiBtng%2BGC4OHzUMkbRHXfspieabLeVUQTsO55c7lZB%2BYECr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMd11xJUTHTAeOqol3KtwDwBfQ6vP%2F95JqPnYgEnJWNb1Ll15IznbXP0%2BEpFlUi5zw6lP6S0%2FAiTY6TolsFsJuOn57PnPTTDpDoNZZ2W%2BXm%2F%2B1ctXRgjPu1Azuz7hyefEZcYq%2B9XySBHzpiaLfIDZLSoX5WrdiiLbzl8Dpd25nhQtbUfycBzFId%2FSoRSxxCmETaOmnl0katSS1XlkwPQaGwn5hhCO9YRg8lva7ZhcD4gy3mY5Ek1PJPaP9XvQxn6%2BHJAj26RjERCG1dJZrGwiu%2BVDdM1CwVdJLuJcoIV6gL4E%2BRqBQ9IqUGTIiDD1AAZuj47J4OX9ozjPmvDEU6RnUhYoU6roWH937oKZVyZ4YGkspvIKaSyZCwOH%2BugKiCzea1Tz0tGMl9RZq%2BTdLv%2Bbnjp9qt%2B%2FUWLzhCTe5%2FqW%2BL9YTWPgIiKyvl01GUAmhsCIbGr%2Bw896erlXKT5mAqUoKKDaZMJjB3BBjtuwJQVGHv7dnuBvfuiatsdLT8Ri653HATEDsJstbe7AohHsrmttvCKgxkFqB9rVIr6NMf5ROqQUdD5HfrFjr7NpYBSea255TkXgdVivcd5JZtKIz1l02SkXr89yllXNP3KQ4y2F7GAQAP7ZEGpnu0UChSUb9FqYUrcaHbZqeMF1xs%2BwwmuigwwY6pgHn9iJZKHMecqZxnDtHFCUJf4sjk0MYcobTz8l%2F9G%2BCyVT2%2BW%2FJxsPHg2n5bQhxMGaZroX%2ByJT02WtBwKP7qB8NJPiSt0EnyIzeAIf4NYszoCcUDHnM0U3DZ36KIyoc7Sr2Xcq87W9XDSrf4utqEwRVvzHYvfIEbPP%2FEeqpK3Q24SNIQzNoQgQH2lDKT45UCnAu2p7VI%2BZDHIBXxL4ayDQSEvE98gjx&X-Amz-Signature=e966a64f92567784d795f9710b4bdba93aca882ca978983bf6dd1f01c048278a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642VC6YCK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDXf2pOLOwWD6OesMqcZs%2BGSRqfYQ9cfBTW48XgkAFNfwIhAMiNgBOpN2H9AUFLRTYNNSR4iH7O2ePxZ2c22MZIu9a6Kv8DCDUQABoMNjM3NDIzMTgzODA1IgzHuXleD5ZvB5%2FfzZQq3AP%2B22fVy40g1sZ5Ia4JlFnJZw7Dpv1%2BBMzeqOCSVEb%2BxzAYPS%2FBWsnE8HZ9XS6Abdm%2BEbx0Eh2kV52QQ1HDeCMXPGmZkMO1FSL6khtz%2FzmdF4Sb9ApQ2AtX%2FmFCpArpugicoIeNSgAahevPPTJRLZG965aMx%2FV9qJuqLZmaokycKDtAjSFoyLWkuzkqcwge6FKBR%2FjFhMCDNWZE6Dty19NRxk37zTugYbwKWxrAIjnRRtx%2BEff6q76vUWmrJpC2Zm7S1OlACyA8K4iHho0KJA4w1f6LZxMyLh%2B3BkVkr602b7fR2s8m08nnmN78GLYZ5pyeBEo8p%2FMSbGHJzZSo4wtZhkRKQZwBo80zk5Rz1zIgbU3eTVs5lHcnPd4DW2vNPlLl6LS8gyGulXBgyyujpMA0%2Bdaj5Ju4qdseEeKec3n5CGxklD%2FrsugMJzXYpTFUICueBdB%2B2i%2BPnO01a8AmfGZTp7xACOjDkWP8ZACZhv7bZGGZK1x9wP3n4CpEMPSAm7tJYaXWeDnNzXUnpGp7EGJuV9dfyUqqvonCx3%2FuJ2ebcLWGr21p2QF7Vs9povS9bf9%2B%2BqEEKZMj0vXI9QJdP3uRYAwckShP0%2BcFOGx4NVfhna%2Funf%2BUrRH3uSgQNjDg56DDBjqkAd7buKc%2BfI%2FXzIW5btz5gIzUyp1QfNnU7ny1C%2BMqba%2FI2gIZJ%2FmoLiQKFsU7vcVvfBO75iMpRo1X8qB7WZ3qxoh1zvkcnW6ieEMEu6M7yfDEtiLHKApPe0aV9jIhOkamm7aPOgWhhkSDMQWNUAWuGxffHy%2BBGAAUlSXCTsDMoDOsiWI7KzVZHLudDRv5bvZxIz8hbEXHJL5Rpnk%2Bc%2BWMh%2Bk0JwOd&X-Amz-Signature=a96201287ca74281cfa2e9466b33fa0b6eed15469a08e4307aca1ec35aca5b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSGQFKB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICJJB0LgK%2FAwwHiHcmqeXF3%2B78eWDl3%2BwMjQlKhW7vDFAiA5e4UUGAyWxYK%2FkzynkOO1fuDctmz2txbYkqMoSpK9aSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM%2BCbi%2FhdfVHevPoxpKtwD6ucNdivP8yfqvj5DgmzVZ2haBAIMFR82xy7wWs8htk9nvbavkkxqE5Xti365ep5p203w%2FMKXBPTmYhv1Nk76%2BUi2LNU%2BBC8Hr%2FeekK5fpx3D5Ec1cUM7Udu3meS9aD%2FNB9M3KrB8zRrSGmjLBDtoEcn%2FUAH2Ezb2NrNsoiTYf0YLKVz4%2FnVBdi9VMGCLktBb8LsO%2FgjwShNHulHB4sFwVO2gNi3icpq%2FDZYkPdk0N7tcwBSeSMwOsE21Ll2GlYHZqOlDS3r%2FRIhWxGIvJcvTVbTu53nsjJ5OK1nQbvFlN8OMFCItvDkPgFyFfLa3ILC8S0MmFzXFR1uDEwzGrEV7aigtI%2FySn08NtUavj3pdFIk58AYMLiqYWvHX7oh6gQNL4R008KlOQvwPd2qDkCtRwE4ggGDIJx9ULJdU5%2FTjWyW%2F7kqB7g6Ozt1BWooE7d53hGDszHbsRWDES%2BC6aXXlbzTW1IPv8xc3QesTL0I3jDxw4JlccDhb%2BB2tGM0RdxyPKtT9CoDbaykYx9C3cmMNkVO2fmMvdFk1AVGRZodEmenF62tpowPIhTTOMEFBwwg0B1XaTSNSemzlAE16d14jCrLFRBD3HFdc0MKMxeFhVYhIlNXdAEHaEGwk06sw6OegwwY6pgHf5N%2Feor9DaMHu9ElDRtw4fCZlyUfM567e2jIhiHUyGz7KmPIWwuuAfkeiqCdqINZrbG8Zbnle8GCyhzHS9NsNkALluJlfsZCneAbty1O4zAjDNZEi679jgnh3%2BFHYSCsN%2FJsuFbTIYW68%2Fl3PNfl2LZLH5UC7ETUF%2BfsjgZlIM90XMCYnQsmdtag6vkM4oqe%2BamjiwawQMJSiYpGcWD9XBCLB9K40&X-Amz-Signature=7a1b6bbc1e40d00f48b875f271010b2811f4aa09ec2fc0e814948fadcce1029c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625KCNAPS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAkOmWXVSfElNT%2F20jg4IGbeMyT7wQ2%2B%2F5%2FpKfR%2BP4HoAiBtng%2BGC4OHzUMkbRHXfspieabLeVUQTsO55c7lZB%2BYECr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMd11xJUTHTAeOqol3KtwDwBfQ6vP%2F95JqPnYgEnJWNb1Ll15IznbXP0%2BEpFlUi5zw6lP6S0%2FAiTY6TolsFsJuOn57PnPTTDpDoNZZ2W%2BXm%2F%2B1ctXRgjPu1Azuz7hyefEZcYq%2B9XySBHzpiaLfIDZLSoX5WrdiiLbzl8Dpd25nhQtbUfycBzFId%2FSoRSxxCmETaOmnl0katSS1XlkwPQaGwn5hhCO9YRg8lva7ZhcD4gy3mY5Ek1PJPaP9XvQxn6%2BHJAj26RjERCG1dJZrGwiu%2BVDdM1CwVdJLuJcoIV6gL4E%2BRqBQ9IqUGTIiDD1AAZuj47J4OX9ozjPmvDEU6RnUhYoU6roWH937oKZVyZ4YGkspvIKaSyZCwOH%2BugKiCzea1Tz0tGMl9RZq%2BTdLv%2Bbnjp9qt%2B%2FUWLzhCTe5%2FqW%2BL9YTWPgIiKyvl01GUAmhsCIbGr%2Bw896erlXKT5mAqUoKKDaZMJjB3BBjtuwJQVGHv7dnuBvfuiatsdLT8Ri653HATEDsJstbe7AohHsrmttvCKgxkFqB9rVIr6NMf5ROqQUdD5HfrFjr7NpYBSea255TkXgdVivcd5JZtKIz1l02SkXr89yllXNP3KQ4y2F7GAQAP7ZEGpnu0UChSUb9FqYUrcaHbZqeMF1xs%2BwwmuigwwY6pgHn9iJZKHMecqZxnDtHFCUJf4sjk0MYcobTz8l%2F9G%2BCyVT2%2BW%2FJxsPHg2n5bQhxMGaZroX%2ByJT02WtBwKP7qB8NJPiSt0EnyIzeAIf4NYszoCcUDHnM0U3DZ36KIyoc7Sr2Xcq87W9XDSrf4utqEwRVvzHYvfIEbPP%2FEeqpK3Q24SNIQzNoQgQH2lDKT45UCnAu2p7VI%2BZDHIBXxL4ayDQSEvE98gjx&X-Amz-Signature=c7d49b9c1b578506748a8af2096b80c985cf13db6c43881e4b37f329a86295ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
