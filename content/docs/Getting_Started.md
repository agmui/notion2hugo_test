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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ASXAS2U%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC1qbUutxBPkw7XBhbfce%2BE8Jy12P%2B8gjvwW9NpbOTj7QIgJeqzZ9FVsu3aulA4eR6GZ28oF9P9GsTYJ7BA%2FqE3b2Uq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLA94Y6Ox8lUwOew2yrcA%2FsoIZjhrz8INM%2BUDQ7rT5HH5BS1sW8tMbtcjMwVnvmDFMwE1ib2TscZU48qZKjWJ37Cy4ZOdei%2FWnEDLAeBpNdiIspeb3FDMC1xXbl37TgUhJcbHUPNCsrmJDzPN8PiM8tCXBOnzdaz9nFfsR2tqVEYEJqvN2l%2BmGkzQZyyfhfwKPaN%2F3XMNcgORC6MhDvo3GWtVjBZsczNMceLQ5qpYSFNYX32Osh9rCBHfyyNaO6QfhGK8KJzpJcUmOAdvnMgPkpiq88vD%2BVAiBUjgkPP79cGWKOvTWQec%2BWuz6c1rEI3O6R32SHrvfYAbDFR3vPO6wm%2BxVhIL7NU9Vt%2BZxX0xSdIQ3%2BGXsiblJI8lbjB7Rb6lvs9p5qneCKz6Iz7dT1lX41wFXRKeYmGBlw8NNcxD76M%2B4wLEbqftHjENY96gZw4T%2BM6fVnnO9cYgi7DBVHgw2boL4xRMcFma4Lo%2BwVpp6VTCaYVl70axfMAGKOXPw14GALhrb5xf7BzXZVV0Lj6NSuMj4FDvZGnJLi7kOVnwgaDHGah44lhVtbDd%2BgXWbrVwgEZsNPe282KXfvZSttIAlnzHbMc%2F1l345oMIpBE8FWLiPk4rpAGicnpJAdefP4Ko2ahk%2FgjfdKfqY5uMKH%2FzMEGOqUBUv%2BvhXB398ABP3Yhcocm%2BwoNcspNbVt6ERLGm1cK7YawBDKqj8qSXuWMaB99gvaWC2lf4SabMTL3DnLiIAxp7GFBmmOAiKLgYU%2FQ0C4bodq6Ho7GBcdNei4JDHLdwdeecfrzgq1XiBUWOyL6vSLccIv2E8Mp5C0btsh1QlZX81Jz8UvXsUC3x8SUpClEl%2BZKUXRZPsE%2BdTA3lZYzjwaka7qWJMdl&X-Amz-Signature=75fa528f2aba0717566aca0e691e46c4c0a3d30511fd82ccbd8fd5499a52aa9d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ASXAS2U%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC1qbUutxBPkw7XBhbfce%2BE8Jy12P%2B8gjvwW9NpbOTj7QIgJeqzZ9FVsu3aulA4eR6GZ28oF9P9GsTYJ7BA%2FqE3b2Uq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLA94Y6Ox8lUwOew2yrcA%2FsoIZjhrz8INM%2BUDQ7rT5HH5BS1sW8tMbtcjMwVnvmDFMwE1ib2TscZU48qZKjWJ37Cy4ZOdei%2FWnEDLAeBpNdiIspeb3FDMC1xXbl37TgUhJcbHUPNCsrmJDzPN8PiM8tCXBOnzdaz9nFfsR2tqVEYEJqvN2l%2BmGkzQZyyfhfwKPaN%2F3XMNcgORC6MhDvo3GWtVjBZsczNMceLQ5qpYSFNYX32Osh9rCBHfyyNaO6QfhGK8KJzpJcUmOAdvnMgPkpiq88vD%2BVAiBUjgkPP79cGWKOvTWQec%2BWuz6c1rEI3O6R32SHrvfYAbDFR3vPO6wm%2BxVhIL7NU9Vt%2BZxX0xSdIQ3%2BGXsiblJI8lbjB7Rb6lvs9p5qneCKz6Iz7dT1lX41wFXRKeYmGBlw8NNcxD76M%2B4wLEbqftHjENY96gZw4T%2BM6fVnnO9cYgi7DBVHgw2boL4xRMcFma4Lo%2BwVpp6VTCaYVl70axfMAGKOXPw14GALhrb5xf7BzXZVV0Lj6NSuMj4FDvZGnJLi7kOVnwgaDHGah44lhVtbDd%2BgXWbrVwgEZsNPe282KXfvZSttIAlnzHbMc%2F1l345oMIpBE8FWLiPk4rpAGicnpJAdefP4Ko2ahk%2FgjfdKfqY5uMKH%2FzMEGOqUBUv%2BvhXB398ABP3Yhcocm%2BwoNcspNbVt6ERLGm1cK7YawBDKqj8qSXuWMaB99gvaWC2lf4SabMTL3DnLiIAxp7GFBmmOAiKLgYU%2FQ0C4bodq6Ho7GBcdNei4JDHLdwdeecfrzgq1XiBUWOyL6vSLccIv2E8Mp5C0btsh1QlZX81Jz8UvXsUC3x8SUpClEl%2BZKUXRZPsE%2BdTA3lZYzjwaka7qWJMdl&X-Amz-Signature=2fb14796b9c0b5a80a4141099c2c48f5c20dbc65bacf0ae432c6c9cc2f7f4c00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ASXAS2U%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC1qbUutxBPkw7XBhbfce%2BE8Jy12P%2B8gjvwW9NpbOTj7QIgJeqzZ9FVsu3aulA4eR6GZ28oF9P9GsTYJ7BA%2FqE3b2Uq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLA94Y6Ox8lUwOew2yrcA%2FsoIZjhrz8INM%2BUDQ7rT5HH5BS1sW8tMbtcjMwVnvmDFMwE1ib2TscZU48qZKjWJ37Cy4ZOdei%2FWnEDLAeBpNdiIspeb3FDMC1xXbl37TgUhJcbHUPNCsrmJDzPN8PiM8tCXBOnzdaz9nFfsR2tqVEYEJqvN2l%2BmGkzQZyyfhfwKPaN%2F3XMNcgORC6MhDvo3GWtVjBZsczNMceLQ5qpYSFNYX32Osh9rCBHfyyNaO6QfhGK8KJzpJcUmOAdvnMgPkpiq88vD%2BVAiBUjgkPP79cGWKOvTWQec%2BWuz6c1rEI3O6R32SHrvfYAbDFR3vPO6wm%2BxVhIL7NU9Vt%2BZxX0xSdIQ3%2BGXsiblJI8lbjB7Rb6lvs9p5qneCKz6Iz7dT1lX41wFXRKeYmGBlw8NNcxD76M%2B4wLEbqftHjENY96gZw4T%2BM6fVnnO9cYgi7DBVHgw2boL4xRMcFma4Lo%2BwVpp6VTCaYVl70axfMAGKOXPw14GALhrb5xf7BzXZVV0Lj6NSuMj4FDvZGnJLi7kOVnwgaDHGah44lhVtbDd%2BgXWbrVwgEZsNPe282KXfvZSttIAlnzHbMc%2F1l345oMIpBE8FWLiPk4rpAGicnpJAdefP4Ko2ahk%2FgjfdKfqY5uMKH%2FzMEGOqUBUv%2BvhXB398ABP3Yhcocm%2BwoNcspNbVt6ERLGm1cK7YawBDKqj8qSXuWMaB99gvaWC2lf4SabMTL3DnLiIAxp7GFBmmOAiKLgYU%2FQ0C4bodq6Ho7GBcdNei4JDHLdwdeecfrzgq1XiBUWOyL6vSLccIv2E8Mp5C0btsh1QlZX81Jz8UvXsUC3x8SUpClEl%2BZKUXRZPsE%2BdTA3lZYzjwaka7qWJMdl&X-Amz-Signature=f60a2bcb0e88bcf2ce8a97ba9506b3997d5b2c79eb542d0820f87e06a6178c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KJ7SWDQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDsnoY4kTHNASPnovt50lenMOlBq8LRkswWt%2BizaTRZ6gIhAK0Q4nkqXetJCCcNBaBQNFZquAxpd4nUrIjNXFKj5KvVKv8DCDEQABoMNjM3NDIzMTgzODA1IgyNeJCweGwHWTznaGwq3ANUQgCk1bRPHklRXiAmd3xKNFO1Yky3Fu7OOKNmJ23PlDV5PWSTSy%2FuyRyHqk2Ylec1RXQElAktN3DrMUDQ0IsoPVqut5dMRGlTo2RRCYifpL4sNxr%2F5q5mfQkleoq1Q%2FjLf%2B1csddA4GYb3bKLUB9R3hkGHaAqNpdmWNMOJu0RmHdv%2BrXWEtADBsX72BF9gRhlQMkH9YngUJIzk8kHidHVQqlHPS%2BgHIorQg12%2F4CGUlF4p1My1ZB0XPtjIxzeZUXWE%2F%2Fih7SdKzMpAYc9ixhFn6Ng6dO9l8aWHYoCVuWDjxwZILXvTWUBU3n0UJoqUG9a4b4v1O1pvTag2ekUBxSP61F1GItABBjC01707OsVvVSM%2FRejqf3V7%2Fdst9SO5COkpr5AZ1cvJxLnj32500gC%2BLgimFy8x4a35AvwL%2BDcja21%2BN8IR4lUsGBsoHdauOK3Xo5iqKCZaVWh17A6uxndub1CTldQ15Lm5x%2FYCm%2Fj5GRBakmnBN85NUPRFZ1xekZmBAiPiOepSLAXiwGXtPyFgWCpYC4FPmmrecNtNxm5JJXMMphgGdDgKpt3kX6BnTDubSbSKLjDHI0%2FbVxcxAk1VypxF9LEcGRNh80rw8L7gdmkh7hc7v13TTV3xzCc%2F8zBBjqkAcprxhaiW6RD%2BI2BPE%2B2yrEFf1sLbAG1XtGTohZXqUkB8xt%2B25sAXvrGa4g3nkY95Peko69Gb2ZmLwalQpG4EPQqVn4Koeys192fa9lJMw8nB6HPKraDYQ3PVPnPoyujiQBAXpd6irZ5468n8Ma5ZtR9W%2BBemFrCalm8wbhT%2FkzyFk%2FajOLU2GyMCnBqnCHazLOoTjlNc10%2BmyVHY3rdQfgEc0KA&X-Amz-Signature=219fe3ef43dd64648c53839ed8e2af74c4d8ac1ded7205c649e4d6360969a33a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K3NJUPB%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCAPoPE4htHLIVLorxsH57avmhvJzo5IlgsHoZ%2FGyGJvAIgKu2WDTwtfl8cYMl8GynGDQZvNwgdd6uYe50rBSvqU8Qq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHyrh3nTO4G2hrhVcyrcA9rWI7cBW6aWzt90J8cERUuG31%2Blc9kdtcfHfjpp1YM1s6e70I%2BWwIDUJnghR5qHijbt4js5NxhcvWxsyy%2BFVS3CrvXJ2NToKNL9fN1RssxoDtGPzV9FxhN8wHhEC9DeBAg%2BcZjORLAdOlVNB3JQ7d8DAD6tJFDeXZEXdHgcYLzVbY6VOnphzlREiZ9f1E0U8oGs9ehozzl5GffKpX6ec8r1w3tjBxRLxnFlOgd6eOASXmHkU8a1C%2BeZrJJE1qFIkaWzpNJIkjMzG4AtlGgAg%2B9y37Tznt50ucWw2MXYsh%2FZ7LUE0SGuLaGTVq%2BwTrFQLt7d7%2F8w8wndff6xJfvaIwY3LHvn3mJQKw%2F9tlNYYzgIRBqmUXSulRk2e8p0exjzM3FH%2FZoVWpEghaYzTyRhDe5RpCfZynefz6mI0UCSBrnBK1BXHP6GwKU0AyWf0W80AAbErZKsAyROODKWOdKtfS5kJsMsbsRo5e8iBUAgEVBsPcxKPK4%2FuycZfeQFcRlxCtwQJaa61FyQkyhSQUzNmP1U9P8nCb0HEStxJ1qJs2uROjrv8tAfMkog2eYZatioZxdQKMB8OvF5mosAljmc2jkfmLmz0H4BBc8IZO20m18kHBq2A%2FjHtHIAYfhaMJL%2FzMEGOqUBkT8Cm832EuTOw1u0qwTL6qpQWLso0imG%2B6WXG9I05Z903dtcfIHZ5A2OqHFKQnE%2BhUnYjn%2BGiNHieG49wT6saD2UCAGpAKYNK3teyQuj09JcrGrTY%2FsPi6%2FrHzNjKtDxzC%2FNOoQpyUiYCEID4RNaNDl0LCcOuTX%2BBu1yhpfT4kpYRQkuxshEbLC%2FnMkCtZNQOPYBORtoNv%2FqHrLFr%2BVlSn%2FA0IW3&X-Amz-Signature=3df3fb1670f62ae8fdf2eb2bb4e7cee40e143de46371a5d2d6dda9b4f63ee3eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ASXAS2U%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC1qbUutxBPkw7XBhbfce%2BE8Jy12P%2B8gjvwW9NpbOTj7QIgJeqzZ9FVsu3aulA4eR6GZ28oF9P9GsTYJ7BA%2FqE3b2Uq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDLA94Y6Ox8lUwOew2yrcA%2FsoIZjhrz8INM%2BUDQ7rT5HH5BS1sW8tMbtcjMwVnvmDFMwE1ib2TscZU48qZKjWJ37Cy4ZOdei%2FWnEDLAeBpNdiIspeb3FDMC1xXbl37TgUhJcbHUPNCsrmJDzPN8PiM8tCXBOnzdaz9nFfsR2tqVEYEJqvN2l%2BmGkzQZyyfhfwKPaN%2F3XMNcgORC6MhDvo3GWtVjBZsczNMceLQ5qpYSFNYX32Osh9rCBHfyyNaO6QfhGK8KJzpJcUmOAdvnMgPkpiq88vD%2BVAiBUjgkPP79cGWKOvTWQec%2BWuz6c1rEI3O6R32SHrvfYAbDFR3vPO6wm%2BxVhIL7NU9Vt%2BZxX0xSdIQ3%2BGXsiblJI8lbjB7Rb6lvs9p5qneCKz6Iz7dT1lX41wFXRKeYmGBlw8NNcxD76M%2B4wLEbqftHjENY96gZw4T%2BM6fVnnO9cYgi7DBVHgw2boL4xRMcFma4Lo%2BwVpp6VTCaYVl70axfMAGKOXPw14GALhrb5xf7BzXZVV0Lj6NSuMj4FDvZGnJLi7kOVnwgaDHGah44lhVtbDd%2BgXWbrVwgEZsNPe282KXfvZSttIAlnzHbMc%2F1l345oMIpBE8FWLiPk4rpAGicnpJAdefP4Ko2ahk%2FgjfdKfqY5uMKH%2FzMEGOqUBUv%2BvhXB398ABP3Yhcocm%2BwoNcspNbVt6ERLGm1cK7YawBDKqj8qSXuWMaB99gvaWC2lf4SabMTL3DnLiIAxp7GFBmmOAiKLgYU%2FQ0C4bodq6Ho7GBcdNei4JDHLdwdeecfrzgq1XiBUWOyL6vSLccIv2E8Mp5C0btsh1QlZX81Jz8UvXsUC3x8SUpClEl%2BZKUXRZPsE%2BdTA3lZYzjwaka7qWJMdl&X-Amz-Signature=1402fc905baa40d5c7bd7552319ba5eb4327affeb2ef729345b15970f7a51739&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
