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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEOLXS6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQChJX2S0FfWw8PCKSKlEPnWz7aUomqIZ2GOBe55b6LejgIgEzRuW1nKmu%2BOJQtDtqF%2FYJjBy0pBbVwY22KT22tiTJoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNcKcRats7FkWUaPDyrcA2TmiF6ZNNFk%2Bb3eB338ZjqBn8pEY4EtdX6Ryvgk047j1tnIp%2FcEV9Z5IQLkifD7uT%2FhnTLoVZ1CqH3plWW%2FD1F9HdZ6Ft1CQMahkPMzayHHxWfqFEW4Yuxq5bdh%2B2gcIs%2BGxlXJyMSDSFm%2BLIh0cXKYAr2YXl3ZvNOVkGyp5328g%2BIESrIC4IpSe913DjP0tHygVynlA4zKgb3KNAMFMwO9g%2BFq26hZnCQlmgMuCh0pVLtIVmMIToD8zcdEL2XHK0oAZ91Cdvti89YeMTCxlmQlNPy4InMJZ1l9fxFzWyshXY25%2FYIfHRNzYYouVhg3yBRPpZlu6PbXLjG%2FbwC3fqGCAENb%2FppKdqaCMynS%2FdkgMXioncCDssJJlFvEOWETXdKmv11q0SKVGxPUyIZ8xFvjMZ%2FiuCdiW3cVIOpJpkuqkpvwNhmRZzW7rPHjZKG1KR0iYt7LhsNbCaUIl5fp80RL1OEco4Xfaz6tpHPQ%2BJc1VG2ovxfyPeuRVMMOqH1dUk%2FMsLsq7dqH4yK9oRcg0fKeLsGtskHG54SqozgZ0d0uqtr3sb03gVWi1qVTMkiHLRz43%2Bv2egdDWzdXM%2BFVBYbkV2tPl1ySLAydSXyJ%2BdegASBqfvNqQNaASYibMLT9psMGOqUByJvBuLXU7iFSCxAtfgjaQM%2FPnqmOOxKNqTakCidx6t8z%2Ffm9p9Mj6zAw%2B9iQaAf1T5POUHsUVmnecZlAM2Ro4p9pfosYg7SHoWu%2BkvSPoXm7lcDtGxr1fJDY2tdkUNl1hL8%2B%2FoTqbOHekQOEW6WyDyZtBk5spLt6LM2Vh6xvS2el3ucpkfYa5zsiR5AFzQCu6IbkxO9NqNTyOPyt8pqb%2FVCyLRnh&X-Amz-Signature=c6471d26c51da1266624c784350bcbbd8487e85a0b0cccc2fb46711a46a35586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEOLXS6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQChJX2S0FfWw8PCKSKlEPnWz7aUomqIZ2GOBe55b6LejgIgEzRuW1nKmu%2BOJQtDtqF%2FYJjBy0pBbVwY22KT22tiTJoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNcKcRats7FkWUaPDyrcA2TmiF6ZNNFk%2Bb3eB338ZjqBn8pEY4EtdX6Ryvgk047j1tnIp%2FcEV9Z5IQLkifD7uT%2FhnTLoVZ1CqH3plWW%2FD1F9HdZ6Ft1CQMahkPMzayHHxWfqFEW4Yuxq5bdh%2B2gcIs%2BGxlXJyMSDSFm%2BLIh0cXKYAr2YXl3ZvNOVkGyp5328g%2BIESrIC4IpSe913DjP0tHygVynlA4zKgb3KNAMFMwO9g%2BFq26hZnCQlmgMuCh0pVLtIVmMIToD8zcdEL2XHK0oAZ91Cdvti89YeMTCxlmQlNPy4InMJZ1l9fxFzWyshXY25%2FYIfHRNzYYouVhg3yBRPpZlu6PbXLjG%2FbwC3fqGCAENb%2FppKdqaCMynS%2FdkgMXioncCDssJJlFvEOWETXdKmv11q0SKVGxPUyIZ8xFvjMZ%2FiuCdiW3cVIOpJpkuqkpvwNhmRZzW7rPHjZKG1KR0iYt7LhsNbCaUIl5fp80RL1OEco4Xfaz6tpHPQ%2BJc1VG2ovxfyPeuRVMMOqH1dUk%2FMsLsq7dqH4yK9oRcg0fKeLsGtskHG54SqozgZ0d0uqtr3sb03gVWi1qVTMkiHLRz43%2Bv2egdDWzdXM%2BFVBYbkV2tPl1ySLAydSXyJ%2BdegASBqfvNqQNaASYibMLT9psMGOqUByJvBuLXU7iFSCxAtfgjaQM%2FPnqmOOxKNqTakCidx6t8z%2Ffm9p9Mj6zAw%2B9iQaAf1T5POUHsUVmnecZlAM2Ro4p9pfosYg7SHoWu%2BkvSPoXm7lcDtGxr1fJDY2tdkUNl1hL8%2B%2FoTqbOHekQOEW6WyDyZtBk5spLt6LM2Vh6xvS2el3ucpkfYa5zsiR5AFzQCu6IbkxO9NqNTyOPyt8pqb%2FVCyLRnh&X-Amz-Signature=4fd9469f00b17a474d13e0d0ce93f78c9247a423edb762d461c94940d661fe1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEOLXS6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQChJX2S0FfWw8PCKSKlEPnWz7aUomqIZ2GOBe55b6LejgIgEzRuW1nKmu%2BOJQtDtqF%2FYJjBy0pBbVwY22KT22tiTJoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNcKcRats7FkWUaPDyrcA2TmiF6ZNNFk%2Bb3eB338ZjqBn8pEY4EtdX6Ryvgk047j1tnIp%2FcEV9Z5IQLkifD7uT%2FhnTLoVZ1CqH3plWW%2FD1F9HdZ6Ft1CQMahkPMzayHHxWfqFEW4Yuxq5bdh%2B2gcIs%2BGxlXJyMSDSFm%2BLIh0cXKYAr2YXl3ZvNOVkGyp5328g%2BIESrIC4IpSe913DjP0tHygVynlA4zKgb3KNAMFMwO9g%2BFq26hZnCQlmgMuCh0pVLtIVmMIToD8zcdEL2XHK0oAZ91Cdvti89YeMTCxlmQlNPy4InMJZ1l9fxFzWyshXY25%2FYIfHRNzYYouVhg3yBRPpZlu6PbXLjG%2FbwC3fqGCAENb%2FppKdqaCMynS%2FdkgMXioncCDssJJlFvEOWETXdKmv11q0SKVGxPUyIZ8xFvjMZ%2FiuCdiW3cVIOpJpkuqkpvwNhmRZzW7rPHjZKG1KR0iYt7LhsNbCaUIl5fp80RL1OEco4Xfaz6tpHPQ%2BJc1VG2ovxfyPeuRVMMOqH1dUk%2FMsLsq7dqH4yK9oRcg0fKeLsGtskHG54SqozgZ0d0uqtr3sb03gVWi1qVTMkiHLRz43%2Bv2egdDWzdXM%2BFVBYbkV2tPl1ySLAydSXyJ%2BdegASBqfvNqQNaASYibMLT9psMGOqUByJvBuLXU7iFSCxAtfgjaQM%2FPnqmOOxKNqTakCidx6t8z%2Ffm9p9Mj6zAw%2B9iQaAf1T5POUHsUVmnecZlAM2Ro4p9pfosYg7SHoWu%2BkvSPoXm7lcDtGxr1fJDY2tdkUNl1hL8%2B%2FoTqbOHekQOEW6WyDyZtBk5spLt6LM2Vh6xvS2el3ucpkfYa5zsiR5AFzQCu6IbkxO9NqNTyOPyt8pqb%2FVCyLRnh&X-Amz-Signature=b8d83e5d3c4c8cfe49187df6920be7dc17e772695a44d5ff539cc94a9879eca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLHTGET%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDdmlgRY%2FTvuQ2jPGOmmDzk0UiK5aAfNxDqF4lvL7qnrgIhANS8A6gJv0WW9cQv0ial6y59PtjbzymMMkfQtFBrD67tKv8DCFIQABoMNjM3NDIzMTgzODA1IgwEIz4DPB88BEVDsoIq3AObo6lwioYUoctSR8gD47cfjbPglV50o9ISknFDIvkbvl9DtuPnVdsCrcQbAUusVcWCTYI1NCHhzEcg7AAt0MpAQFciAArqhM210%2FsM7n7HxDg7lXoqJHsRATYREF4TA2OgjGWCwKsmWuHB2M%2FefGQgUJrKbYh%2BUfgciv366oBtyt3g5kOpElTAc2FIXAKrpZmUfq5Kjr%2FNEncwzCLto36WiH0Fx7gJeV7ms%2FGKBnbtkmByhYo9F4ullz%2FD1%2FvF5yUqVbbjfmSojfB52LCPJp7uS8R11sdEZRUFUkYLx9Kb8svFpQe4gwwwfJk49C0jfOJwJqyIx9MTxmN0KKizXXA9Yt43lf1%2BeZUKLc8GfX0%2BN6kr4HNj7yzhIjo9P1B56Q%2BxQFaJUO8XCL2ZHWn9fGeu3YD4XDVk4ozPeRf7Id6Y7XGCTDXtBtN%2F1iyr5QKcjOxgmQWY8XnQu635NBAJQ%2F5j0WbC%2BFwnBEWNjYY2JzIomv6eSuVcSz%2F9XFyC%2FqD4mgsjxPy6mvy5Vp4IYLm2kyCEp1j8edsxuh6DhhFd%2F7Z0eswPl9McCdcWvBvGqqhUoGWSKWlOurshZhINj1qWvztk5VI8M%2FxJWL46SOt1aHNWzqIVxJA2WuL13255LzDnjKfDBjqkAeD5YPxFmW%2FQqOqGaQY1u4dHfEKix3Z3pfXy7cBsIKJKSDugcRqjPUF6HCShJslJxKpgOHYJQcA9%2BX39NQBju5GB6mz%2FvRgzTMBAymhsWzrnE%2F4WDEMV%2FwxVsqg6bu1zneF%2FGslvUdtrveAaa7x0JCcnNHHMfAkeM%2BpEd0WXtH4nYWxkzpGGAMM4DJsbe%2FOofJzkFa%2F10PgU1vCNjIDyaW8M%2BSi%2B&X-Amz-Signature=040fd6d82e3c804c7454ff67099b447f5aadb88b059fb7ffdde3578515902030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KIGIKDM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCuCnpQVpE4hz3j4vFOI1kosi%2BaSMTDzQ0x9V68tny0iQIhAKGq9GofJ8lBUaAAXD5tjjAENbLK6N%2FIan9xO%2BPXGvmrKv8DCFIQABoMNjM3NDIzMTgzODA1Igx9lLp3sbU1x5rqXFwq3ANIY3sXB98tqmfpuQeIVAzZMgIaK203qR2trjZiycyhnnZ2YlxWPbz2dlnnZwefClMMNSk6i%2FxxGTsre4u6Qbe5kToGrxR0NE%2B1KLI4ljkRE73k1A5v%2Bm5ByJkcrVrTGinGBJau1fO4iq0Dqqx12wNIW%2FkzHS6ZjN%2BUulUF65fSE03cxC1iVqOxvh58MLXUoNYCnVD6GYrbqtIzHx3beJ4maZNauJbscJjUHvWFC1%2Frj4XHDViSD5qPpRVgHoTSUtBj%2FWWeO2%2F5rJ1x1g3Qv4nPytnzN3LB1rXMUuCN9elpFUfyjt35JqesOEJzBzZ9W3ZRBeS6mq23k7shc9I9b0DLoOEGgSwoEu0FbRB3JsAboExnyTOHcGTyT3TA8VNoCEMwZ8QdpreO%2B6rIegz8vdVfGKQg8DQdm4JWnHUr9Cl6r2JtVv%2BoRIuzV7YBbeitavdTzOCfC7VDNNYUL4GA9S5R6%2Bl7m7wVvqW6xubmLNR3Ia%2BdfZnqL3aAkkdkzFnN%2FPfEBBWUlxwfFQl8QEqNMtlEtVBAEqtyXhXgKqO0Ykr5cZ3Lpkzluu9taxywej1oLOsH5unfOHGb8oN5U8Gzpgc2NGG5%2Fc0M%2FWy%2FmMXqc4h7g41WjorW5e47wE1mmDDxjafDBjqkAYbMOw5OOFTe50hD8Nij9ti6%2BAqSxWnGVPqJGuHuc77Q2%2Ft9GFZ358zhKKXOmL3prh6glsswVkBzGrV3LToOGEMW4fN8jHpot3v1ss%2FXtlASg8sXuqlkqp%2B6853N407K4qRdkQg0JInK5GIcAx%2FlEFPvgMzQw7qv%2BpO7j2T8NoGxcH1hJA%2BvVAPcHrJcqmiVLIILPS7n6Sp0YxYX5IIJZyy2Orjb&X-Amz-Signature=c671c76435cf1786fced6f736fc79d0422913131e30412260e0ecf0ee9d6ca32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEOLXS6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQChJX2S0FfWw8PCKSKlEPnWz7aUomqIZ2GOBe55b6LejgIgEzRuW1nKmu%2BOJQtDtqF%2FYJjBy0pBbVwY22KT22tiTJoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNcKcRats7FkWUaPDyrcA2TmiF6ZNNFk%2Bb3eB338ZjqBn8pEY4EtdX6Ryvgk047j1tnIp%2FcEV9Z5IQLkifD7uT%2FhnTLoVZ1CqH3plWW%2FD1F9HdZ6Ft1CQMahkPMzayHHxWfqFEW4Yuxq5bdh%2B2gcIs%2BGxlXJyMSDSFm%2BLIh0cXKYAr2YXl3ZvNOVkGyp5328g%2BIESrIC4IpSe913DjP0tHygVynlA4zKgb3KNAMFMwO9g%2BFq26hZnCQlmgMuCh0pVLtIVmMIToD8zcdEL2XHK0oAZ91Cdvti89YeMTCxlmQlNPy4InMJZ1l9fxFzWyshXY25%2FYIfHRNzYYouVhg3yBRPpZlu6PbXLjG%2FbwC3fqGCAENb%2FppKdqaCMynS%2FdkgMXioncCDssJJlFvEOWETXdKmv11q0SKVGxPUyIZ8xFvjMZ%2FiuCdiW3cVIOpJpkuqkpvwNhmRZzW7rPHjZKG1KR0iYt7LhsNbCaUIl5fp80RL1OEco4Xfaz6tpHPQ%2BJc1VG2ovxfyPeuRVMMOqH1dUk%2FMsLsq7dqH4yK9oRcg0fKeLsGtskHG54SqozgZ0d0uqtr3sb03gVWi1qVTMkiHLRz43%2Bv2egdDWzdXM%2BFVBYbkV2tPl1ySLAydSXyJ%2BdegASBqfvNqQNaASYibMLT9psMGOqUByJvBuLXU7iFSCxAtfgjaQM%2FPnqmOOxKNqTakCidx6t8z%2Ffm9p9Mj6zAw%2B9iQaAf1T5POUHsUVmnecZlAM2Ro4p9pfosYg7SHoWu%2BkvSPoXm7lcDtGxr1fJDY2tdkUNl1hL8%2B%2FoTqbOHekQOEW6WyDyZtBk5spLt6LM2Vh6xvS2el3ucpkfYa5zsiR5AFzQCu6IbkxO9NqNTyOPyt8pqb%2FVCyLRnh&X-Amz-Signature=c6a237c76bf5e0cca805cbf1a0ab7216d948280cea63aaa86714de1ad7c7724d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
