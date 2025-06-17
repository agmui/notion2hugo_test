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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUASPMJ7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsahCd3CimKnvCYHYllAukLRF1G%2FeRSlUd%2BsFsQTa9vAIgfBL0HC8NWgl4eiBdv%2BM3iA5FF%2BC1V0%2FISXJoOh%2F9Emoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPwUg%2BDQI3OdGY6hOSrcAzDbue7N7qvR2fb5YYnXnKrxYdVU0ZZzNlwWvlC7mehSs1tK6SxFN7RyUr5Ks0U7QcH1pTqlxe3dwVWSEmIOAEQ31do6OWLHlOefGpt5a8r8I1cjuZVZiZMNre%2BAT7eE3hpeA%2Fim8%2BDAuqRO36tOwrB2dE0dHsZzfmr9T6zOppocOmzJQwgeTo103%2F38hY%2FxIJYh5PvGMdYlL%2FHnvnp0owmzR%2BMv3603aNLtuqgA97fqhVS6XOhkiGW5AoWKo7a9jv7d7Kml5NmiHK%2B3KWh5WaIlQDE42bODy1aVmWLAtqaHshUejuYvI01lJ9U73wP13FHICZ2wMkXqSI4FH2mVkMjcnLfT1ze2EwME3HREIJBusZTLC3vN54SR9Kt9FuxLzt8YYO3VNGMPY6JsbDKL0iO6lEUXxqMbHl%2Fl%2FefoYAM0N1jJ2OLLsrLzQfqxRgBOJnP7H%2BIj%2B50rjmF903KwUcfR9E0NasB4vP6hF2AeSj4CnCe%2Fx%2FsmY%2B6qlRm3Z6zLkxO4lQrwCne3VqRTaqXwWbWvFhhc8yehttRLOJu0eE9ZXSEizN2MWuM%2FslptYO0lZ%2FuED9xTag3uk%2BU2BoX35dQDHKaqEHDy%2BzDN1rKFOkNvZnhNGfgPaNwvwVcWMMKJx8IGOqUB6HGhWMjLTaDAaLihb2fNrpneF12dRUK5MHhHh13Qiidav3HVAyWgYi%2Bvd6G5NBJh%2Be%2FlH18XLEgOk1jImt%2FMHK9OvvYQXvddtgJsfePf5PEaZeR77wur0cuwtpaWBosGg85FyVBofinj3sBEBIfy6DyuyJrMCsx9Eh%2FMlsyKR9zrW1%2B%2BIBKJZH05oUpaGV2S87B2IbmxdIKAKA3WQt89oArV9NCm&X-Amz-Signature=cb22ac0dc3e644d9a2600b0ce69b3256efe0ef26386b89f04b4c9a08056bb96f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUASPMJ7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsahCd3CimKnvCYHYllAukLRF1G%2FeRSlUd%2BsFsQTa9vAIgfBL0HC8NWgl4eiBdv%2BM3iA5FF%2BC1V0%2FISXJoOh%2F9Emoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPwUg%2BDQI3OdGY6hOSrcAzDbue7N7qvR2fb5YYnXnKrxYdVU0ZZzNlwWvlC7mehSs1tK6SxFN7RyUr5Ks0U7QcH1pTqlxe3dwVWSEmIOAEQ31do6OWLHlOefGpt5a8r8I1cjuZVZiZMNre%2BAT7eE3hpeA%2Fim8%2BDAuqRO36tOwrB2dE0dHsZzfmr9T6zOppocOmzJQwgeTo103%2F38hY%2FxIJYh5PvGMdYlL%2FHnvnp0owmzR%2BMv3603aNLtuqgA97fqhVS6XOhkiGW5AoWKo7a9jv7d7Kml5NmiHK%2B3KWh5WaIlQDE42bODy1aVmWLAtqaHshUejuYvI01lJ9U73wP13FHICZ2wMkXqSI4FH2mVkMjcnLfT1ze2EwME3HREIJBusZTLC3vN54SR9Kt9FuxLzt8YYO3VNGMPY6JsbDKL0iO6lEUXxqMbHl%2Fl%2FefoYAM0N1jJ2OLLsrLzQfqxRgBOJnP7H%2BIj%2B50rjmF903KwUcfR9E0NasB4vP6hF2AeSj4CnCe%2Fx%2FsmY%2B6qlRm3Z6zLkxO4lQrwCne3VqRTaqXwWbWvFhhc8yehttRLOJu0eE9ZXSEizN2MWuM%2FslptYO0lZ%2FuED9xTag3uk%2BU2BoX35dQDHKaqEHDy%2BzDN1rKFOkNvZnhNGfgPaNwvwVcWMMKJx8IGOqUB6HGhWMjLTaDAaLihb2fNrpneF12dRUK5MHhHh13Qiidav3HVAyWgYi%2Bvd6G5NBJh%2Be%2FlH18XLEgOk1jImt%2FMHK9OvvYQXvddtgJsfePf5PEaZeR77wur0cuwtpaWBosGg85FyVBofinj3sBEBIfy6DyuyJrMCsx9Eh%2FMlsyKR9zrW1%2B%2BIBKJZH05oUpaGV2S87B2IbmxdIKAKA3WQt89oArV9NCm&X-Amz-Signature=39ff1e1922b46683875fbad0c57c20732bb3ae0f146f1e556bdd48684173053a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUASPMJ7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsahCd3CimKnvCYHYllAukLRF1G%2FeRSlUd%2BsFsQTa9vAIgfBL0HC8NWgl4eiBdv%2BM3iA5FF%2BC1V0%2FISXJoOh%2F9Emoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPwUg%2BDQI3OdGY6hOSrcAzDbue7N7qvR2fb5YYnXnKrxYdVU0ZZzNlwWvlC7mehSs1tK6SxFN7RyUr5Ks0U7QcH1pTqlxe3dwVWSEmIOAEQ31do6OWLHlOefGpt5a8r8I1cjuZVZiZMNre%2BAT7eE3hpeA%2Fim8%2BDAuqRO36tOwrB2dE0dHsZzfmr9T6zOppocOmzJQwgeTo103%2F38hY%2FxIJYh5PvGMdYlL%2FHnvnp0owmzR%2BMv3603aNLtuqgA97fqhVS6XOhkiGW5AoWKo7a9jv7d7Kml5NmiHK%2B3KWh5WaIlQDE42bODy1aVmWLAtqaHshUejuYvI01lJ9U73wP13FHICZ2wMkXqSI4FH2mVkMjcnLfT1ze2EwME3HREIJBusZTLC3vN54SR9Kt9FuxLzt8YYO3VNGMPY6JsbDKL0iO6lEUXxqMbHl%2Fl%2FefoYAM0N1jJ2OLLsrLzQfqxRgBOJnP7H%2BIj%2B50rjmF903KwUcfR9E0NasB4vP6hF2AeSj4CnCe%2Fx%2FsmY%2B6qlRm3Z6zLkxO4lQrwCne3VqRTaqXwWbWvFhhc8yehttRLOJu0eE9ZXSEizN2MWuM%2FslptYO0lZ%2FuED9xTag3uk%2BU2BoX35dQDHKaqEHDy%2BzDN1rKFOkNvZnhNGfgPaNwvwVcWMMKJx8IGOqUB6HGhWMjLTaDAaLihb2fNrpneF12dRUK5MHhHh13Qiidav3HVAyWgYi%2Bvd6G5NBJh%2Be%2FlH18XLEgOk1jImt%2FMHK9OvvYQXvddtgJsfePf5PEaZeR77wur0cuwtpaWBosGg85FyVBofinj3sBEBIfy6DyuyJrMCsx9Eh%2FMlsyKR9zrW1%2B%2BIBKJZH05oUpaGV2S87B2IbmxdIKAKA3WQt89oArV9NCm&X-Amz-Signature=776803d4432315f9ca32e1d0fc1f11df7689111a30ad81d7e79533407106bf8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FVU5CEJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICasLFp62XJJv8HaSNcraAsj8YiTpNI980XWCJsQm2GsAiEAwX0IEDKlQVbmBXD3reOukHvfZ7MXBiOxW0z4dbN5CUIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDD3rkTXAelKy10HNTyrcAzO9Agm6o7EivHAdSTDu516fj930ZGYnnsce6FbGKboJIFEUJYl5luUd1%2BWcFIJyd5xYpiCPGlt6nfpSpSmYRYqLRBGXDugTJzrpU%2Bgg28dP1tLBXQy%2F1S2yynC9VwVMmWYpRNAXj8%2FNQ5N1PFt2WX2fXtk22KVh04FFmwzPTTYOwtHht%2FpgOQvqTCnlHFRp%2BaA6bX6hjrHCol%2BZMV98xKK2glLjua%2FIwGJX%2FOdNA4crZUEr2lst8WWPFgsvIONI3mpzyoFs49kYreloG7bA4Leu9Evxe%2BTV8ME2BM1TS7AzT7zYVbcddvkJIAGQYeIvjwB7CNZoP6PMGifGtYXuRA73TfedEZyZHX0LYHRN9CuTbCZGiwZJbDmD1SLLpUB0nhTecGR%2FZEFB%2BBp34xWcFSOwcpqNt4m7MJEFlT4DcC6XBSaLDHormoNfWflxTxhryBedw%2BJd7iCAQ3JpN5Ra0BCtneS%2F419Zd1oKScM0nIY5RWGpmv0y6meBwyzISq9l505PK3fZPm5B1rMghGRTyyx6%2FHQP52J%2FNUxi0LXDjcInBqw0943uD%2BDFw%2FtM%2FbFVJX5WojKmBfgk4sOKTPwHiqhSUHUgfKe3oFXARSYKt%2FODaRqe7Pa99iA7rSkiMKyJx8IGOqUBqVL6xnGITBnclEyWORfMiZTE6M%2FQVVdcJPIdmjFnKa2ZOtqqAMJNcTuOdQDkVil269gwTmb2FhI8pTiJOvchVqpmtQ3rkaasWEOEBohuhjN9l%2B355FXmsomjc3ib2zm6wOHjKradDiT8iYf3TZEeY1kev0NZh5ef03dDrVioKH26sDooyaBqLa86rpytQWA%2FL8EKKyhK08tbkKD77KE90GKBMmCA&X-Amz-Signature=e0c7a070974135301cd3b95978e7e94187886e9fb0d3bcc1aee8124accac2967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BNJCVKK%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyWqNnsFFzX4ZZ%2FjL7oKHKxSzirci%2FRGK6mfZ3L460KAiA3wRBWC2YJ9WYTlI%2FAhyy1JDTBgipHlTPxrR5EduTrair%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM1pMutA5EuwQBN870KtwDkwXLx%2FaYfA5FZ7rxOvmzcEB7b4SkZQJGcLr1IjEdFQ%2FaOjWlfJqTunS3lXZFTOQvNW4cgYdFsIJ4lsObkiJBAutsxOUWDsY%2Buu5v8ttg9%2Br6y1JoApK9xrD9RcAek9NHT9K5f0W8KgvcofztXu1CewTLnn1PzegB%2B%2BX%2BRcDHdnOSzM9OSv7rzA2hH8eXVDFvq6qj3GcdySnPeIhDRyWsiNK5JkjeJEO3JiNF%2Fy5OD6qduL3D%2BOZTrWPmFKAlCEz5JtwEoCFwBGIRB%2F2jiewH%2B3eIgQfLyMDD%2Fc3NFg8MEj2b2zkebU7enP1VwU3MOKpP7Mn9H0Zn42dWayoN2912mV0BOx7il3LiSanHEKubcvWXt%2FfzmZZEviXgj%2F6jVmgvY27jtUfChLNqMgTb8ZDVNhWqluoOJ3GfGfELW0qwvqYpPfvD0WR8sqCw%2BC1BVAOtuq9QvRMMKm8%2B2aHd6NBdHSQrdvcmGqOQN1Jsakn6CeS%2FS3jVk1AcAYN60WtFqNgj32v5eqU9QxFO7sCjvIBNlXxyH4clS8M2HoSFj15vA6gM0brfTU69qf7fG%2BPc3VzDxUL7CR%2F2W7BbIwOq534JYGr9Ihyo3Wq%2Fkx64XQVrva1D5M8y7%2BlJQ0Vz4jkw%2FojHwgY6pgFPxoHVfXgFZkPzOoJf7xHUVj7DldND480fjihnMFnAdK5C2lGO3vHRJ0v1m3kWkZ5l9hFr%2Be5bmmjjSbwauQZg2Jns9wVSZO8dlPmtitLA2cd7ICFZPTTrrHA%2FZZE%2BSw%2BrNy1xPTwhQIDHckU02KV%2FGDeP5%2BGemTMmKJ6uASPXcCMyMf%2BKA1l7geE9g3OPrFM5ugzZaYOL4R0HyabJSf0fEoCeEhDq&X-Amz-Signature=9c53a031af51471a4da847ec2fb62f7104a94c7e56d5d54fcb940bd736e9e5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUASPMJ7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsahCd3CimKnvCYHYllAukLRF1G%2FeRSlUd%2BsFsQTa9vAIgfBL0HC8NWgl4eiBdv%2BM3iA5FF%2BC1V0%2FISXJoOh%2F9Emoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPwUg%2BDQI3OdGY6hOSrcAzDbue7N7qvR2fb5YYnXnKrxYdVU0ZZzNlwWvlC7mehSs1tK6SxFN7RyUr5Ks0U7QcH1pTqlxe3dwVWSEmIOAEQ31do6OWLHlOefGpt5a8r8I1cjuZVZiZMNre%2BAT7eE3hpeA%2Fim8%2BDAuqRO36tOwrB2dE0dHsZzfmr9T6zOppocOmzJQwgeTo103%2F38hY%2FxIJYh5PvGMdYlL%2FHnvnp0owmzR%2BMv3603aNLtuqgA97fqhVS6XOhkiGW5AoWKo7a9jv7d7Kml5NmiHK%2B3KWh5WaIlQDE42bODy1aVmWLAtqaHshUejuYvI01lJ9U73wP13FHICZ2wMkXqSI4FH2mVkMjcnLfT1ze2EwME3HREIJBusZTLC3vN54SR9Kt9FuxLzt8YYO3VNGMPY6JsbDKL0iO6lEUXxqMbHl%2Fl%2FefoYAM0N1jJ2OLLsrLzQfqxRgBOJnP7H%2BIj%2B50rjmF903KwUcfR9E0NasB4vP6hF2AeSj4CnCe%2Fx%2FsmY%2B6qlRm3Z6zLkxO4lQrwCne3VqRTaqXwWbWvFhhc8yehttRLOJu0eE9ZXSEizN2MWuM%2FslptYO0lZ%2FuED9xTag3uk%2BU2BoX35dQDHKaqEHDy%2BzDN1rKFOkNvZnhNGfgPaNwvwVcWMMKJx8IGOqUB6HGhWMjLTaDAaLihb2fNrpneF12dRUK5MHhHh13Qiidav3HVAyWgYi%2Bvd6G5NBJh%2Be%2FlH18XLEgOk1jImt%2FMHK9OvvYQXvddtgJsfePf5PEaZeR77wur0cuwtpaWBosGg85FyVBofinj3sBEBIfy6DyuyJrMCsx9Eh%2FMlsyKR9zrW1%2B%2BIBKJZH05oUpaGV2S87B2IbmxdIKAKA3WQt89oArV9NCm&X-Amz-Signature=8b13517b5aadaf97ea0f63912831030dc2344a95a4cf78f12ab47136d57169a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
