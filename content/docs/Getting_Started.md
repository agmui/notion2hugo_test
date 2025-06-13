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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RFBOLE%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDnEjtZtyZZJqDJHJF1ttwIjXN9cTafu8CVfL4tJXFTzwIgJTqCNNx30M%2F4FY%2F41R1yrgKUVj8WfObYH9Z2t2dPTaQqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqUrqEH9fCV1IKbyCrcA6gFY5lFCkexgNvAKsZ%2BQYbRoryoFTSyvSKDlG7CZU3bJ%2BFwdX7KBPzuVvg8doND33%2F6J43ABI5TRpsXbgJ5JvWOfFNJHrCqAIIKwayZnpZ6%2Brb7vRwiATvHdLfOetrtqEqFQyzwOYey1d%2BbKtFv8yFdKhr9nPgEvJUJybWIS7frZ8lqXqCwgeYpkzEhBc7LiPdB4bY9NFYvmuaV0%2BPunHIYiDcoG%2F%2FuB6fkERL9dGbTOIkYVpd71b0BxHtMWP2Fe7ZOBKoG0EkO7XN3tyATPv5dYfPO9wlu16BEGVkfdpbZVx1bjR%2BzzXLjKCSF%2Fyu0DCuAhCCfecwpWTmr21R8pBkWpokzJH1qaR%2Flhp20VhUu0mV6k51uy0z54EnGx53YtroLi9DTUcH5Jc1p3fZN6K0Iq%2F7Uk1qqkFbWXUUVTFQ1TzII1%2F5MX8EH3spBNjIGJTjjyDoy88sdMQwy8rQfylqEOVTny3sQvsZNv%2BRFgKiolViUb%2BN6v5sAaEfuBZMxTZQ99D20R0v%2Fkdi%2BqQQAxc0rK%2FURSRkDcobUklvCprFjDI8R4oSmnbIjytgHZ3Tr13UkzXBbYCf9LlBY2KFAJPf4LCRNEw9QH3gHuQmyGCsDNXHZQDdt5GjoiILyMPi4rcIGOqUBVYfXoUnYojSG%2F01vUEt32WEQ1E9npf6Xp7wJheUTkrUKMT2lYQTrpKxg3sxNpCVGTy7oQG%2FxGOyJWqyURkfenCaE3%2BUoKZPqHkX4tXOw6Ou7dTQr%2Fk9tIeLiYX4ZnlKQ%2BXkzXp0Gilp8sj0IQKEP3G%2B4alXyKmPUjhqS6fw42UAonnLjHdsvITlm57PYkBCJR0tIqa%2BYR8t5YN72iwUkKK%2FOEgXC&X-Amz-Signature=576f4b383f96f77925a607877c64a2d85939ae61b74276ea12e171593dd7631f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RFBOLE%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDnEjtZtyZZJqDJHJF1ttwIjXN9cTafu8CVfL4tJXFTzwIgJTqCNNx30M%2F4FY%2F41R1yrgKUVj8WfObYH9Z2t2dPTaQqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqUrqEH9fCV1IKbyCrcA6gFY5lFCkexgNvAKsZ%2BQYbRoryoFTSyvSKDlG7CZU3bJ%2BFwdX7KBPzuVvg8doND33%2F6J43ABI5TRpsXbgJ5JvWOfFNJHrCqAIIKwayZnpZ6%2Brb7vRwiATvHdLfOetrtqEqFQyzwOYey1d%2BbKtFv8yFdKhr9nPgEvJUJybWIS7frZ8lqXqCwgeYpkzEhBc7LiPdB4bY9NFYvmuaV0%2BPunHIYiDcoG%2F%2FuB6fkERL9dGbTOIkYVpd71b0BxHtMWP2Fe7ZOBKoG0EkO7XN3tyATPv5dYfPO9wlu16BEGVkfdpbZVx1bjR%2BzzXLjKCSF%2Fyu0DCuAhCCfecwpWTmr21R8pBkWpokzJH1qaR%2Flhp20VhUu0mV6k51uy0z54EnGx53YtroLi9DTUcH5Jc1p3fZN6K0Iq%2F7Uk1qqkFbWXUUVTFQ1TzII1%2F5MX8EH3spBNjIGJTjjyDoy88sdMQwy8rQfylqEOVTny3sQvsZNv%2BRFgKiolViUb%2BN6v5sAaEfuBZMxTZQ99D20R0v%2Fkdi%2BqQQAxc0rK%2FURSRkDcobUklvCprFjDI8R4oSmnbIjytgHZ3Tr13UkzXBbYCf9LlBY2KFAJPf4LCRNEw9QH3gHuQmyGCsDNXHZQDdt5GjoiILyMPi4rcIGOqUBVYfXoUnYojSG%2F01vUEt32WEQ1E9npf6Xp7wJheUTkrUKMT2lYQTrpKxg3sxNpCVGTy7oQG%2FxGOyJWqyURkfenCaE3%2BUoKZPqHkX4tXOw6Ou7dTQr%2Fk9tIeLiYX4ZnlKQ%2BXkzXp0Gilp8sj0IQKEP3G%2B4alXyKmPUjhqS6fw42UAonnLjHdsvITlm57PYkBCJR0tIqa%2BYR8t5YN72iwUkKK%2FOEgXC&X-Amz-Signature=c3f3edd82656159350ad3207ddacf929fc4380d2cc219db0f107d38aa5c885a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RFBOLE%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDnEjtZtyZZJqDJHJF1ttwIjXN9cTafu8CVfL4tJXFTzwIgJTqCNNx30M%2F4FY%2F41R1yrgKUVj8WfObYH9Z2t2dPTaQqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqUrqEH9fCV1IKbyCrcA6gFY5lFCkexgNvAKsZ%2BQYbRoryoFTSyvSKDlG7CZU3bJ%2BFwdX7KBPzuVvg8doND33%2F6J43ABI5TRpsXbgJ5JvWOfFNJHrCqAIIKwayZnpZ6%2Brb7vRwiATvHdLfOetrtqEqFQyzwOYey1d%2BbKtFv8yFdKhr9nPgEvJUJybWIS7frZ8lqXqCwgeYpkzEhBc7LiPdB4bY9NFYvmuaV0%2BPunHIYiDcoG%2F%2FuB6fkERL9dGbTOIkYVpd71b0BxHtMWP2Fe7ZOBKoG0EkO7XN3tyATPv5dYfPO9wlu16BEGVkfdpbZVx1bjR%2BzzXLjKCSF%2Fyu0DCuAhCCfecwpWTmr21R8pBkWpokzJH1qaR%2Flhp20VhUu0mV6k51uy0z54EnGx53YtroLi9DTUcH5Jc1p3fZN6K0Iq%2F7Uk1qqkFbWXUUVTFQ1TzII1%2F5MX8EH3spBNjIGJTjjyDoy88sdMQwy8rQfylqEOVTny3sQvsZNv%2BRFgKiolViUb%2BN6v5sAaEfuBZMxTZQ99D20R0v%2Fkdi%2BqQQAxc0rK%2FURSRkDcobUklvCprFjDI8R4oSmnbIjytgHZ3Tr13UkzXBbYCf9LlBY2KFAJPf4LCRNEw9QH3gHuQmyGCsDNXHZQDdt5GjoiILyMPi4rcIGOqUBVYfXoUnYojSG%2F01vUEt32WEQ1E9npf6Xp7wJheUTkrUKMT2lYQTrpKxg3sxNpCVGTy7oQG%2FxGOyJWqyURkfenCaE3%2BUoKZPqHkX4tXOw6Ou7dTQr%2Fk9tIeLiYX4ZnlKQ%2BXkzXp0Gilp8sj0IQKEP3G%2B4alXyKmPUjhqS6fw42UAonnLjHdsvITlm57PYkBCJR0tIqa%2BYR8t5YN72iwUkKK%2FOEgXC&X-Amz-Signature=61adb2aac417485d9140cacf8c04420057324ce2590a654b6e4cbc284030308a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2L6E4T%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIB3Q3QTcUO57Q3OQUJgLJBNokvuaUlVJgF9XEcomnMvtAiBml2k9JkuXyhz%2FNkeKyUFKxhHYyG7nSWkTrDXE7H6N1iqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEd5FL4AtCmJ3437lKtwD0d7SBDjK50cgiapSVLtjcqfK%2Bu7Q%2BgAhpH1N3d4RablvUTVA5TP4JfGMG5DRZTJu21xpdNw0gsib4HXXsyghsNHaeDFYTq3Vz1VaT%2BQ9jNVdibqdexfVUtMRL2LVnDmgau0vMS%2By7xocx4%2BfrerICVqSrblwfsV7cjj7hfKDlMcqTnxmp481SEpUJ02nmCnTD6zD7i4ewMZSklNlR92iH1tw1nPbsbw00nyhmAqDYlwY1w7smIu3iBxKW3H4OWXs%2BtBSk30A5f4yBVGe1VlyrQpLhLfGYuhh6l%2Bnrl9cIGdRkik6zO0uHn1ZYwesezqhmmBcHKG93snXFL0CHS24WiIJvpd100n%2BixJPOT96EYH43hscRndTTEo7SyrwtX6jeJGEuN01TgFitx1fGP41Xx1YAuBNYws3PI7Blo6b6F%2BSnCC%2BMavgZejJhJS4pFrH51znjt8r2JB3p9ymetaoFPmJdfd%2Fdmu96z%2FpMVzkb9aiUyTX%2BxSbKVwR8MFs7s3W0VcwNBo%2F%2FsqStq6BQtMTnEIQKX6FbakV0xALUc628esEGliUE1vxoen9aq9JgU8QzqnjgsNmRlufeIEwSG%2FTIpJZ%2FfRZNsSRwMRgwKeIKkO8HFb8ddh4Y1sihB8w%2BrmtwgY6pgEDItRdpsumenCgCSOimoNRtkp0ZecEdKRAKrvOSu5cmBWZC7KRRNkBAPUMoypwxCI%2BB0fYeuhugXb0TKfKB5fHPkeCcY%2BUbWqF27UK1xla7XaP7dA7KWlzyyg3aZy%2FEq%2F6Q4tEZr%2FfR9gDVMHlwqEZPgAH%2FF7uOEGBpGVT89GIa%2FDShZahnFQHX8Jwu6QPsfUc6AaSeKMSHSF93hXB9BjPnsip7GfG&X-Amz-Signature=09fe79b546963e0cf19a08ba01fe1306321df2b88eed9512cfceb04544321052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDMT54ZK%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIC22eLM5NTaUTPJq5B1NLKrr12CJhJLiyCH7KW6mWZVkAiEAxk1p92tAoiMTDe%2FFw8L5sOOAGcMdCJ8VeVdEHStJRXsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBAl4y%2BAnh5OwIUMCrcA3LGWgZzAlR%2FZAPg2H7Whx1FBLXGIo7EXwP3SLUzofcteKT0jGdo8i1QYyb1xWOUlNahWZxoYvkVE4F0SIpQbuvXSn7sPBI9XpDfavEgpPMRVoDb2vpZB7qenn0TWwghOAnNGXZy6JboxJdUZxTijaqU7G85Tfw5U9fGOv%2BOZgzEA3LsfM69sxtjLfqvWodTGvDIVGahpiRyTuFPMzWDTsWGUtyxy9Eyup%2BntanySJJjGQqcPgsLE0gxyHrmzkzSKuJ7%2FKS%2B6Z2jfVCRSTHRHmJyvAVwAB5FA7REJDjQ%2FtDVaXQnCA%2BZFnTDgM9IKEvuDSwv9MbCl%2BXjYMY0snWeGYjZeSG%2FJ%2FabgkJm032pBREshVmv9fXYBV7ZBBVlnQ3Ac%2FNKMxo%2BY%2FKb%2Bxn4ux8mk9M%2Bcepvntu8Wyv78EpHLYP0GeI1O3remVJ5McyA%2Fuj0BdPEn05nIO1WA7OxpmoycJ3UgT6Qy%2BKcNaT%2B62LZhAUrbz26bg8EFdGd9Tu4FSgtIdc8fALLzg4DMiguTkBGKN35nRn4GPYFg5FJiBTF8Bdf57NF3liJwQzY5%2B6JvQZ%2BFgFrPDGJx0JARYDHwRc2R70oSDSKeSA5HkgVZyR4Ixvsy62OqUPbiXgG3ItpMPC4rcIGOqUBHQNcYQEuBDkkg7z02AFvr3Rv%2FyhRB4kWk5WjoerW7ztNb2W8F%2BhRycfkR4SDbvNY0LI5O1%2BmSbLe1N%2FbBO3cRDi7KAt0CGI6GH2OB047wGfgb4qEKdIjtqEzTA6MNUQl6GGkt1aWvdOmM%2BtDtzOlr9QTo9Ll%2BoNQ9bcVwwNfCk%2BmCIq3%2FBxAizQTSuqCItJsCZ7SoNy7%2FbFZ%2FOULDy%2BS5L1Tcbqb&X-Amz-Signature=88de7dc85d5c51a513850b138a369d46097d93fef73fa2dea58840113ecbdf3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5RFBOLE%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDnEjtZtyZZJqDJHJF1ttwIjXN9cTafu8CVfL4tJXFTzwIgJTqCNNx30M%2F4FY%2F41R1yrgKUVj8WfObYH9Z2t2dPTaQqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqUrqEH9fCV1IKbyCrcA6gFY5lFCkexgNvAKsZ%2BQYbRoryoFTSyvSKDlG7CZU3bJ%2BFwdX7KBPzuVvg8doND33%2F6J43ABI5TRpsXbgJ5JvWOfFNJHrCqAIIKwayZnpZ6%2Brb7vRwiATvHdLfOetrtqEqFQyzwOYey1d%2BbKtFv8yFdKhr9nPgEvJUJybWIS7frZ8lqXqCwgeYpkzEhBc7LiPdB4bY9NFYvmuaV0%2BPunHIYiDcoG%2F%2FuB6fkERL9dGbTOIkYVpd71b0BxHtMWP2Fe7ZOBKoG0EkO7XN3tyATPv5dYfPO9wlu16BEGVkfdpbZVx1bjR%2BzzXLjKCSF%2Fyu0DCuAhCCfecwpWTmr21R8pBkWpokzJH1qaR%2Flhp20VhUu0mV6k51uy0z54EnGx53YtroLi9DTUcH5Jc1p3fZN6K0Iq%2F7Uk1qqkFbWXUUVTFQ1TzII1%2F5MX8EH3spBNjIGJTjjyDoy88sdMQwy8rQfylqEOVTny3sQvsZNv%2BRFgKiolViUb%2BN6v5sAaEfuBZMxTZQ99D20R0v%2Fkdi%2BqQQAxc0rK%2FURSRkDcobUklvCprFjDI8R4oSmnbIjytgHZ3Tr13UkzXBbYCf9LlBY2KFAJPf4LCRNEw9QH3gHuQmyGCsDNXHZQDdt5GjoiILyMPi4rcIGOqUBVYfXoUnYojSG%2F01vUEt32WEQ1E9npf6Xp7wJheUTkrUKMT2lYQTrpKxg3sxNpCVGTy7oQG%2FxGOyJWqyURkfenCaE3%2BUoKZPqHkX4tXOw6Ou7dTQr%2Fk9tIeLiYX4ZnlKQ%2BXkzXp0Gilp8sj0IQKEP3G%2B4alXyKmPUjhqS6fw42UAonnLjHdsvITlm57PYkBCJR0tIqa%2BYR8t5YN72iwUkKK%2FOEgXC&X-Amz-Signature=811366044581d7d56225d68c7509e10446dfa18552e44397b35934cf2a774897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
