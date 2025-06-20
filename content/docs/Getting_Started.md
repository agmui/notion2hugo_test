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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGT6OSD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChlsjd57u8Ulpk1Zu1n9wFYlMi61j%2FumvqACwS%2FD%2BSXAiBxFaCoXCsjeyoRbZblfi%2FCinGNW%2Beawe66wfrsAh4NxSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHH%2BLmGQ2hItAaI4wKtwDGJRbCbvBW8JpeLy3vV5brF%2BZubFh2fHe9iJgSI1ZTqJilhtBrNVk4qztfG0fhSqbNAPltiWhotZcos5Dn%2Fw9WNLcSeszqUUoDduP0nc%2F7bPPEi3kAczyz8X7CGR7CZsYS%2BzoN9U3TI0mnzgCHCwYiIlH3W17ndaTxgem9qpvUKZ0JZgFL3halFRGI2AxpM%2BGzU0hWSBXD53WJE5Th71pk0Ct7SzZLjL1IYHYzg3ab25oGkTe97MdhpcSN07UFiDMD4AieAYsubwNWC851ZA1lafhvdG7ZZgbkDYmYqlQE0WPpFLlGUudj6umQKlO%2FNAnKbfprTLu5lVannVdiqYacZYB8THz%2FvShaX9ggB2LaWE945l7V2W8okluEUhGCuNeABJfX69UMHsxURvICdm%2BY%2BF7SAp2UaWniX0RP%2Bg7qSy1ed80hOpFdz%2B%2BMgDzhAV0xt1xiEQa2bIiVCjPI6OOK38qCOQlgR%2Fz7mX9iAqqhOYJs2bMYDZYlCyAReixBDm7jWEYeLdAgxx4IHqfKZxU%2Fu2g4aOoP8W%2FNDc03UhpfAvEzph244tX4CN56Mn%2BNNPDao7UfpBHeAmwj8FEeLvZQc38mXeZJy5R93vLS%2FYWM6m%2BaKBxyK80bma1m8Qw5L%2FUwgY6pgF0hhYEJgl3b8%2FddyN%2FB5fXI5TgLCOd3vQARdZTMZDvzfnvALhxYbvIpeseZ8FZs6fA06A%2F0btsGf61OAIc5Cxxd2YTWbBoMYrgnFTucgp%2F1kyBXhoblY3sDJ8EJRJgyKhElexrDxkyOikjjm1J3hNFSub30KVVty56rJ%2FWl2pOnhTAhpUmX%2FurBgK7E1pe7Glvtxdba7pkedj1V6nUtOMLXsACptn5&X-Amz-Signature=f1d4480d85c17dd15def76af3a9979915df29585a318ed1edd63d32957b08012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGT6OSD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChlsjd57u8Ulpk1Zu1n9wFYlMi61j%2FumvqACwS%2FD%2BSXAiBxFaCoXCsjeyoRbZblfi%2FCinGNW%2Beawe66wfrsAh4NxSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHH%2BLmGQ2hItAaI4wKtwDGJRbCbvBW8JpeLy3vV5brF%2BZubFh2fHe9iJgSI1ZTqJilhtBrNVk4qztfG0fhSqbNAPltiWhotZcos5Dn%2Fw9WNLcSeszqUUoDduP0nc%2F7bPPEi3kAczyz8X7CGR7CZsYS%2BzoN9U3TI0mnzgCHCwYiIlH3W17ndaTxgem9qpvUKZ0JZgFL3halFRGI2AxpM%2BGzU0hWSBXD53WJE5Th71pk0Ct7SzZLjL1IYHYzg3ab25oGkTe97MdhpcSN07UFiDMD4AieAYsubwNWC851ZA1lafhvdG7ZZgbkDYmYqlQE0WPpFLlGUudj6umQKlO%2FNAnKbfprTLu5lVannVdiqYacZYB8THz%2FvShaX9ggB2LaWE945l7V2W8okluEUhGCuNeABJfX69UMHsxURvICdm%2BY%2BF7SAp2UaWniX0RP%2Bg7qSy1ed80hOpFdz%2B%2BMgDzhAV0xt1xiEQa2bIiVCjPI6OOK38qCOQlgR%2Fz7mX9iAqqhOYJs2bMYDZYlCyAReixBDm7jWEYeLdAgxx4IHqfKZxU%2Fu2g4aOoP8W%2FNDc03UhpfAvEzph244tX4CN56Mn%2BNNPDao7UfpBHeAmwj8FEeLvZQc38mXeZJy5R93vLS%2FYWM6m%2BaKBxyK80bma1m8Qw5L%2FUwgY6pgF0hhYEJgl3b8%2FddyN%2FB5fXI5TgLCOd3vQARdZTMZDvzfnvALhxYbvIpeseZ8FZs6fA06A%2F0btsGf61OAIc5Cxxd2YTWbBoMYrgnFTucgp%2F1kyBXhoblY3sDJ8EJRJgyKhElexrDxkyOikjjm1J3hNFSub30KVVty56rJ%2FWl2pOnhTAhpUmX%2FurBgK7E1pe7Glvtxdba7pkedj1V6nUtOMLXsACptn5&X-Amz-Signature=b0eb594b7362cd245bfdb14a33062eeb57865970aa91ce1c9f62fc2367fa0e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGT6OSD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChlsjd57u8Ulpk1Zu1n9wFYlMi61j%2FumvqACwS%2FD%2BSXAiBxFaCoXCsjeyoRbZblfi%2FCinGNW%2Beawe66wfrsAh4NxSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHH%2BLmGQ2hItAaI4wKtwDGJRbCbvBW8JpeLy3vV5brF%2BZubFh2fHe9iJgSI1ZTqJilhtBrNVk4qztfG0fhSqbNAPltiWhotZcos5Dn%2Fw9WNLcSeszqUUoDduP0nc%2F7bPPEi3kAczyz8X7CGR7CZsYS%2BzoN9U3TI0mnzgCHCwYiIlH3W17ndaTxgem9qpvUKZ0JZgFL3halFRGI2AxpM%2BGzU0hWSBXD53WJE5Th71pk0Ct7SzZLjL1IYHYzg3ab25oGkTe97MdhpcSN07UFiDMD4AieAYsubwNWC851ZA1lafhvdG7ZZgbkDYmYqlQE0WPpFLlGUudj6umQKlO%2FNAnKbfprTLu5lVannVdiqYacZYB8THz%2FvShaX9ggB2LaWE945l7V2W8okluEUhGCuNeABJfX69UMHsxURvICdm%2BY%2BF7SAp2UaWniX0RP%2Bg7qSy1ed80hOpFdz%2B%2BMgDzhAV0xt1xiEQa2bIiVCjPI6OOK38qCOQlgR%2Fz7mX9iAqqhOYJs2bMYDZYlCyAReixBDm7jWEYeLdAgxx4IHqfKZxU%2Fu2g4aOoP8W%2FNDc03UhpfAvEzph244tX4CN56Mn%2BNNPDao7UfpBHeAmwj8FEeLvZQc38mXeZJy5R93vLS%2FYWM6m%2BaKBxyK80bma1m8Qw5L%2FUwgY6pgF0hhYEJgl3b8%2FddyN%2FB5fXI5TgLCOd3vQARdZTMZDvzfnvALhxYbvIpeseZ8FZs6fA06A%2F0btsGf61OAIc5Cxxd2YTWbBoMYrgnFTucgp%2F1kyBXhoblY3sDJ8EJRJgyKhElexrDxkyOikjjm1J3hNFSub30KVVty56rJ%2FWl2pOnhTAhpUmX%2FurBgK7E1pe7Glvtxdba7pkedj1V6nUtOMLXsACptn5&X-Amz-Signature=9ac536aaabd23dd0f5563c7cb0f6168f466417b38e307c0de603e7febd52d35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDYRYJZ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBSUxTQ0b1kJ90NNByrtxgD5tykJqTlAo1DeQWEXEHVQIgXOFHIeDCvk%2FptwSExFFg9z76vlkqbx8OwbP2snG77GkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA38FKwqtOW%2FZMTyGCrcA7XDZFXZA%2FTOjF%2BmibBpxDUF%2ByUgXcqe9lz0XuEyR5NwryK4t%2F0axLmERJArH9Qr9TnjpR9D92z%2FCDhDqSklJv7m%2BNrU4aVp%2FguwAAQ3YTgQcjdmT3aoEmT%2Fm5mWYKnKagpRrNM%2FWd3%2B57q67%2Blfp1hcveWcq6z8qx%2FLRfD2HnS8rBxaRAQ5%2BqPFAt8KirSsbDQKuFoTkH7nLBy6ojJScEiRC8tdKlNYZj1i3v4IzA2qe3bTE4Y0vzQIIxpmkGqKQjBtNg728EjSoxkpwkNPMMynIUimlK1gp8T8OhvA0MD%2Beg2z1AKOahWGkRQPMhcXa7FATtIPRaGO1mAYokdj3Npc33BKQfWMi5PqcTM9O9l0qe%2Bpjfn5avrRhzq3MfjCgW9QhszqrqyK9ZVnJSh5v%2B93XJe6rFT1yyWkXAc3Ug2Xur%2FvHpUESGnb621c%2BcNLlLhJnWZtER2PW7Uk6jbOqEy5ga1cAoVpe4u4RWgIDr%2F4PXwHI9rXIHpdSGu8NYxPmQ8i0JiIlOMfEf4hJp4U9IUXVzbA9AKtX9zeCwpdnDzeqLOmUkFLMFXoZWvnAWTBmowEGBa4Xdzj4bwAtEiPX3Ze1CBO15WaQ52v02%2BRerPEmTlSivreIfLy2YxRMKe%2F1MIGOqUBKw04NcZLf31INkzf%2Fm0l6yH6t7SuXlsCGnaDeB1L9n6BNmDn%2B0pS0wvp0xQf%2BkF8HD3jBfGeQddC64BrR3TAFJyTGqjfynrRWVeIeJSFV2xnJ%2BEmF0jiyN87w7KL%2FSwPPMuQt8uCARgAitYw%2FsZ6jwa50yMNlrZu40T9gBsYgTQLRecw%2Bi0mX4GEgi2xYpZ%2FtNwGA3a1fC6YwU4jK%2FW4ObueeJ3R&X-Amz-Signature=1def2e7afc7bc3d55ff8180b5a611d60598c3b844f043fe1a48be9b5247d0327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OL2JWUH%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXIhXe4p8LH1BMfq6n3xpzt%2BStHEBJwCH6cpkBQb4I5AiAFW2oGHVw5UlMJ%2BPx7muVoCk8hrYM36PgCgiQE8u71GiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXlUPPJKdjQmOjSWLKtwDHoGJhvcccyovXJAU87lTirUtzcClTc%2F38Jwt%2BuWqYaTINyot2HAnU0MUsXSxyLd%2BK%2BxKuZGqjiBlk3LWu6ZyDIKLIm8WY1c%2FcIJOe1FF5p4IUKtOaPNaZzXTp5K0LYWwLQQ%2Bmd%2FaPE10tQPT7s878sWZW0T3CtSXV9j%2B6TllBYglhuCCrkQGG5%2B%2BDQUWju2cz1DvGi2sgRxcbEJl%2BiGky5gaDL0fJh%2B2DQx6lBlI9w5eEP2hUjM2uyY48%2BE3IgxYOkvUGd4KDu3Rq4Vh%2B9dkhl6VHha1n1599iXLRMB%2BvcNnyyviiZqM5WXqEV8yEEe2OHi8X40toa566Ydy3U221k7FLHw4%2Bi3yVgCIjs0aSui9CseTzOPE7T3SIzMmPm%2Ft%2BF9qzQCo%2BuiUrvqTc4GyPiesxhYwul36HOQXT28xhiuwttieAE5oOx%2BpRCRtK%2FUmjWPYxOoOad21yF6h32GEL0ily7WndvIRR7%2F7POzJ0gawg8wGgybE%2BSOhdRFCU6SSG%2FKVI%2FKiJAQ4Ftk4WAjUYGAmFL5sVKXvPkJnJ3W32OJDabvPEElzGkFoaSD3TrLse3YbFyK25NKkvRHQP9BmDd%2F5b%2BgU8PE3P9%2Bbb8HvErIurCrgpfwljd8VP%2B4w88HUwgY6pgF40kR5AIPs%2F1VaUmUttXOJryZqzI9iwtN6667JyltkfQh1WpLB5%2FLuqSZNbJ1Lg2ys5pYcK55nja7KVdGYLC31kJiHYIYOlAvi87WHXPpnOsW4zF4O%2FKDZV6UjhfgpI1IJbqKTYBssp70B8mf6Ue%2BtyQJlkQL7IhMm8kIINMaRJ2v1KFS4DvW%2FFJy0%2BAuMlRK4MLYMyTs36GwGqHVL52HK7jufK4ZD&X-Amz-Signature=79f5e9dbaed304211befb533064caac9cdaeaa89a573d8f9c27362ed6398593d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGT6OSD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChlsjd57u8Ulpk1Zu1n9wFYlMi61j%2FumvqACwS%2FD%2BSXAiBxFaCoXCsjeyoRbZblfi%2FCinGNW%2Beawe66wfrsAh4NxSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHH%2BLmGQ2hItAaI4wKtwDGJRbCbvBW8JpeLy3vV5brF%2BZubFh2fHe9iJgSI1ZTqJilhtBrNVk4qztfG0fhSqbNAPltiWhotZcos5Dn%2Fw9WNLcSeszqUUoDduP0nc%2F7bPPEi3kAczyz8X7CGR7CZsYS%2BzoN9U3TI0mnzgCHCwYiIlH3W17ndaTxgem9qpvUKZ0JZgFL3halFRGI2AxpM%2BGzU0hWSBXD53WJE5Th71pk0Ct7SzZLjL1IYHYzg3ab25oGkTe97MdhpcSN07UFiDMD4AieAYsubwNWC851ZA1lafhvdG7ZZgbkDYmYqlQE0WPpFLlGUudj6umQKlO%2FNAnKbfprTLu5lVannVdiqYacZYB8THz%2FvShaX9ggB2LaWE945l7V2W8okluEUhGCuNeABJfX69UMHsxURvICdm%2BY%2BF7SAp2UaWniX0RP%2Bg7qSy1ed80hOpFdz%2B%2BMgDzhAV0xt1xiEQa2bIiVCjPI6OOK38qCOQlgR%2Fz7mX9iAqqhOYJs2bMYDZYlCyAReixBDm7jWEYeLdAgxx4IHqfKZxU%2Fu2g4aOoP8W%2FNDc03UhpfAvEzph244tX4CN56Mn%2BNNPDao7UfpBHeAmwj8FEeLvZQc38mXeZJy5R93vLS%2FYWM6m%2BaKBxyK80bma1m8Qw5L%2FUwgY6pgF0hhYEJgl3b8%2FddyN%2FB5fXI5TgLCOd3vQARdZTMZDvzfnvALhxYbvIpeseZ8FZs6fA06A%2F0btsGf61OAIc5Cxxd2YTWbBoMYrgnFTucgp%2F1kyBXhoblY3sDJ8EJRJgyKhElexrDxkyOikjjm1J3hNFSub30KVVty56rJ%2FWl2pOnhTAhpUmX%2FurBgK7E1pe7Glvtxdba7pkedj1V6nUtOMLXsACptn5&X-Amz-Signature=6c347e806262aaa44d6bcbd74a206ac1754347398116e1a7d7f2078f00b14608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
