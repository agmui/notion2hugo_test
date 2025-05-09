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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5O7R3J%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER2FbqzHslpOOqt%2FSDCAS1zK26USEGRSiCcLJSyL%2FHtAiEAyaoYpGf35cXOClufsH4nRjMgf1GSwwSVZEEjcZU72PUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMG%2F%2FIQGqvgqkCIcCrcA%2FGA1NbrztkieWZiEXRkVHA%2Fj%2BmHmUhOqKmOg6vNYPM5nU%2BCon%2B7FX9eHQl8YASE3EKUitM%2F4YsezV2vsl7i5FUHHTwuwEtyP1yDSqISRut%2FaGDGkyakdIFzcLEANryMd2kKh8YoQb7dKd%2FVSEIj635e5oXwFdnOu7TvQfX%2B%2FeMHQcwKDsuKiiNz1JSi5Jg44Pmvp6aAv14zMJh%2BaseYp%2Ft6JXgoG9dZH7Fm0WOXGZl1kpu0f8Ni1hC7I8lCwe7a%2Bv0gw%2FXwQ2ITDJgM7LG%2FQgN%2FsFOsB4ouEE2rCoCd3EScwnAdkdCu%2FkWCD3LF%2FN8dKv%2BnMoJRogIROeP5PJzraSUVatf4ZCOTlNWltG36%2F5c3dIGY7tRxQoUmNntywagoCdj7v5zuel4aiiXOYPmPm6EJrr2vazChanoiu3Lzj%2FfSyiAyN1sZhz8TUsaUhsJfO5sy5DnscwSMwL03ddo2hPTioHkuVi9ZCRF6FRVr3ZXE94kT37PzP8XwiQ%2BZzVKOiYgpNavuzatL%2Ffo4TpDnXgsnI%2F72Ldnp0ZXEVwG5iwXJCSkwwTCXb%2BPkSWCWWIIKfkm82eQDmt7BLGcZUlYYB3vZZF3ANLXd32DsUC4uD2iiFe9hhSNCH4xzXskzMJPj9MAGOqUBuCFu9r83xcqRyz1vGCciGubSGSo9z2WHC0bG1NHzuh7G6jYuJYe0baukA%2FRMq3DnFkv61OSdKQ4fi6g6EQYWXknjXg29IxKLstxL4pi0tAj2eLXx9%2BmhRG29XnsCMSwvMzYEGniD7V4HVphsWO0Vv%2FveXGVtdvqWnB2%2BhPoU9x07Co0cwS02KR1z%2FbvByhdwdyRF%2F%2B55K%2FjB08JdzVzjbqMz4FiR&X-Amz-Signature=ed03d88b003e7dbbde2b6d78c2c61911639385978f9fa93f690f73206b0c0908&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5O7R3J%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER2FbqzHslpOOqt%2FSDCAS1zK26USEGRSiCcLJSyL%2FHtAiEAyaoYpGf35cXOClufsH4nRjMgf1GSwwSVZEEjcZU72PUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMG%2F%2FIQGqvgqkCIcCrcA%2FGA1NbrztkieWZiEXRkVHA%2Fj%2BmHmUhOqKmOg6vNYPM5nU%2BCon%2B7FX9eHQl8YASE3EKUitM%2F4YsezV2vsl7i5FUHHTwuwEtyP1yDSqISRut%2FaGDGkyakdIFzcLEANryMd2kKh8YoQb7dKd%2FVSEIj635e5oXwFdnOu7TvQfX%2B%2FeMHQcwKDsuKiiNz1JSi5Jg44Pmvp6aAv14zMJh%2BaseYp%2Ft6JXgoG9dZH7Fm0WOXGZl1kpu0f8Ni1hC7I8lCwe7a%2Bv0gw%2FXwQ2ITDJgM7LG%2FQgN%2FsFOsB4ouEE2rCoCd3EScwnAdkdCu%2FkWCD3LF%2FN8dKv%2BnMoJRogIROeP5PJzraSUVatf4ZCOTlNWltG36%2F5c3dIGY7tRxQoUmNntywagoCdj7v5zuel4aiiXOYPmPm6EJrr2vazChanoiu3Lzj%2FfSyiAyN1sZhz8TUsaUhsJfO5sy5DnscwSMwL03ddo2hPTioHkuVi9ZCRF6FRVr3ZXE94kT37PzP8XwiQ%2BZzVKOiYgpNavuzatL%2Ffo4TpDnXgsnI%2F72Ldnp0ZXEVwG5iwXJCSkwwTCXb%2BPkSWCWWIIKfkm82eQDmt7BLGcZUlYYB3vZZF3ANLXd32DsUC4uD2iiFe9hhSNCH4xzXskzMJPj9MAGOqUBuCFu9r83xcqRyz1vGCciGubSGSo9z2WHC0bG1NHzuh7G6jYuJYe0baukA%2FRMq3DnFkv61OSdKQ4fi6g6EQYWXknjXg29IxKLstxL4pi0tAj2eLXx9%2BmhRG29XnsCMSwvMzYEGniD7V4HVphsWO0Vv%2FveXGVtdvqWnB2%2BhPoU9x07Co0cwS02KR1z%2FbvByhdwdyRF%2F%2B55K%2FjB08JdzVzjbqMz4FiR&X-Amz-Signature=5f0fe9d9b7a280b0fb75182537739ac57c560a7a83b300bac929399c02556ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5O7R3J%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER2FbqzHslpOOqt%2FSDCAS1zK26USEGRSiCcLJSyL%2FHtAiEAyaoYpGf35cXOClufsH4nRjMgf1GSwwSVZEEjcZU72PUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMG%2F%2FIQGqvgqkCIcCrcA%2FGA1NbrztkieWZiEXRkVHA%2Fj%2BmHmUhOqKmOg6vNYPM5nU%2BCon%2B7FX9eHQl8YASE3EKUitM%2F4YsezV2vsl7i5FUHHTwuwEtyP1yDSqISRut%2FaGDGkyakdIFzcLEANryMd2kKh8YoQb7dKd%2FVSEIj635e5oXwFdnOu7TvQfX%2B%2FeMHQcwKDsuKiiNz1JSi5Jg44Pmvp6aAv14zMJh%2BaseYp%2Ft6JXgoG9dZH7Fm0WOXGZl1kpu0f8Ni1hC7I8lCwe7a%2Bv0gw%2FXwQ2ITDJgM7LG%2FQgN%2FsFOsB4ouEE2rCoCd3EScwnAdkdCu%2FkWCD3LF%2FN8dKv%2BnMoJRogIROeP5PJzraSUVatf4ZCOTlNWltG36%2F5c3dIGY7tRxQoUmNntywagoCdj7v5zuel4aiiXOYPmPm6EJrr2vazChanoiu3Lzj%2FfSyiAyN1sZhz8TUsaUhsJfO5sy5DnscwSMwL03ddo2hPTioHkuVi9ZCRF6FRVr3ZXE94kT37PzP8XwiQ%2BZzVKOiYgpNavuzatL%2Ffo4TpDnXgsnI%2F72Ldnp0ZXEVwG5iwXJCSkwwTCXb%2BPkSWCWWIIKfkm82eQDmt7BLGcZUlYYB3vZZF3ANLXd32DsUC4uD2iiFe9hhSNCH4xzXskzMJPj9MAGOqUBuCFu9r83xcqRyz1vGCciGubSGSo9z2WHC0bG1NHzuh7G6jYuJYe0baukA%2FRMq3DnFkv61OSdKQ4fi6g6EQYWXknjXg29IxKLstxL4pi0tAj2eLXx9%2BmhRG29XnsCMSwvMzYEGniD7V4HVphsWO0Vv%2FveXGVtdvqWnB2%2BhPoU9x07Co0cwS02KR1z%2FbvByhdwdyRF%2F%2B55K%2FjB08JdzVzjbqMz4FiR&X-Amz-Signature=d9f037e3c91bfbd42c571ab70de28f293648eaa649892d3448dff447acc143d7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUZ7KN7V%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXoi1CqWoJ%2FD%2BQf7wsycOexTE9mH7Lae2D%2B51Wh1QYTwIgMZbklr4JI5ac%2FgEMqvyG8TCmeBzGWpD6Khju5dtPc14qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFbPVAbvAz0apw9ZyyrcA2Dfub9EejCfnq8BRDwFOAn9QTaxikl6rP0T88nFinFFDk8M%2FX4iD00eG6afo8Vw8TDxbglvlE4lJ8p0A7gO3Ku%2FucN1ka%2BX3wkhe9aTG6h1Oxb71h5GwNMUrN2ayndr6GQmejrPPfD2mcQWdCCNt6DQ6N%2F78I7RtUHrRucYEXj%2B9L7gZ2ccdog0q7fDnr9dRm%2FRpz8kIKT35Sfx%2BqGpzyyHwksr9etX94T1SIlDHlAjtUHcyElvPgoj7PhIllIckvHdOlQ67FoSJ%2BYfXqe%2BTAD35IfTm8oXSs%2FBB0mzSifyqgdbcMBVEVJsGNmWOhKpvfvb6sGZNci3u2ogx%2B6lic%2BeuEtcebXgqXhcXS110C%2Fhe4n5NLBkCgA%2Fy12YagDbORqOPbG%2BY0Khs6Ass5ThiZLCP5xCDIKEk0eEGWu52QTgL%2FKoHxKNQc3B0VkvzlDwUYf3%2F7ZHmop3JYB%2Bb59xFlXDFWC4hvjgx9%2FEYLHcQwCsW7yw4Hh01yjDUsmqKuIcY%2BHQ8x6R6iByyKppE0ASpbKf7o5uVFMBhrsSnqSea8fKpOIBqzV0d7Wj%2Fz6iMDgiHiU6O6OCVV7qHrrqrcnprLZkSYyCQRl38lIN6x8UL6yF7NKygxYwLlIHu6dqMLLj9MAGOqUB3Z6ydd2QSIwaMFaMQpTSQIRPz1hssZa7QZd9CIBEdZEbTn%2FmX6ULPC3sy5ff1QtRoCNROWrwbVJNenH5PYpfR0%2BVAel1ubKbJnhwspRW7ob54Ok6bvLyHtTSegIJWAWS0WTt4U8y6QbiWGub1%2BgpJa1aZmXtFVGCf5jXDQl%2BMCj8pvR7cDZrJ5WkMipzhmb%2BOB%2BHK1IQBseGiaqpZQTh%2Bciir2sz&X-Amz-Signature=811e36027cd8aa8006b35de6633e9193ce6a80af73c57ef154130f7cb34121d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR2XBB76%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQo72Ozet%2BqFLvLADcJSeuLA7ZveDdJUTC59wm4cH%2F5AIgFbuzdD3apebDYZvz4KgdP7%2FpR%2Be1H5s%2BLS1wuK0ZQCYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWSVgcG%2Fj0te4DzcSrcA%2BPQt3D%2FtxRWHagZsJRVOVQNiksLnrMJI1T%2BSLy7H4u%2Fg8%2FA1AvIaR1TMF5kvXShpb2FyKLETSfkbGjnQGsl%2BagQqR1RSSasozjbUBF7xQ7y4e8raN1y%2FH5z2p2cb8KQfL2nkIQJlmyqtPrie0q596eJo%2F1T%2FMHn8zeWb4bnZI50hqEyoJYjcyrgxxaG3NkwjHWo7IpKAzYoC6MW52GxcyTxkJa2BLwEJ2Gjpe87N2HA7XdLzbZAgC%2FFsgsnGEYGZqCwxMWzSzuS%2Bh8%2B2RZDETDFx4Q5QQFpzpd1ajHumcQaL9IYI4vHe91iuJmwnVtAs1m%2FlpX7k%2BwO8rGfWACs3cmlhh6Gsjw2EVscjh2jAMYqSKYRqf%2FjeG6qmBmJxOXMkxL957g3Ice9U7%2FhMC2GPKR0jd%2F1u0s9G%2Fu8i8ogVxdqseiaAxI7ZL0GsUnC8pAJY6rDSi1i8h4wAiKhMmvefPNCkY849KRHUHqvL1dlMl1ZyUB9Lpa31l4z0xURU2nHfZ30OxRehV1wmkMob0OvD0R7DvUDnfuSOabB6wEtlxmBEiAkk%2BCzUNmHlQUjcQCwsbFvA7zZyW%2FiFXq5ovBYL%2F6hziJ2f69EYVej%2Bp4tAzihUp5Fik%2F8W%2FCEz%2FF1MMTj9MAGOqUBdXZtj2gNAxPCBsJlakmpbQgGrIbTLOiPZMWx9%2BVLkyhTZgxHcnb1%2FYwyEW082axaKRIrOYpQHSUbGxn7Opo%2FF1Pi2OXrVHENctjU77p7pweemZYYQA83w0uFyEqQgl3TvztDaCMpQ7T3ranQmRd1aksj09yBIy6YENCA0ODxflv%2FC839XWMibKk2GD1i5PQPrusyJfgt7hEKDThS8xJANVYCQxL2&X-Amz-Signature=b6fdd26580be9a62753bd053f412c2e0ef20b2d4575ca9b310968b78866b7ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5O7R3J%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER2FbqzHslpOOqt%2FSDCAS1zK26USEGRSiCcLJSyL%2FHtAiEAyaoYpGf35cXOClufsH4nRjMgf1GSwwSVZEEjcZU72PUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMG%2F%2FIQGqvgqkCIcCrcA%2FGA1NbrztkieWZiEXRkVHA%2Fj%2BmHmUhOqKmOg6vNYPM5nU%2BCon%2B7FX9eHQl8YASE3EKUitM%2F4YsezV2vsl7i5FUHHTwuwEtyP1yDSqISRut%2FaGDGkyakdIFzcLEANryMd2kKh8YoQb7dKd%2FVSEIj635e5oXwFdnOu7TvQfX%2B%2FeMHQcwKDsuKiiNz1JSi5Jg44Pmvp6aAv14zMJh%2BaseYp%2Ft6JXgoG9dZH7Fm0WOXGZl1kpu0f8Ni1hC7I8lCwe7a%2Bv0gw%2FXwQ2ITDJgM7LG%2FQgN%2FsFOsB4ouEE2rCoCd3EScwnAdkdCu%2FkWCD3LF%2FN8dKv%2BnMoJRogIROeP5PJzraSUVatf4ZCOTlNWltG36%2F5c3dIGY7tRxQoUmNntywagoCdj7v5zuel4aiiXOYPmPm6EJrr2vazChanoiu3Lzj%2FfSyiAyN1sZhz8TUsaUhsJfO5sy5DnscwSMwL03ddo2hPTioHkuVi9ZCRF6FRVr3ZXE94kT37PzP8XwiQ%2BZzVKOiYgpNavuzatL%2Ffo4TpDnXgsnI%2F72Ldnp0ZXEVwG5iwXJCSkwwTCXb%2BPkSWCWWIIKfkm82eQDmt7BLGcZUlYYB3vZZF3ANLXd32DsUC4uD2iiFe9hhSNCH4xzXskzMJPj9MAGOqUBuCFu9r83xcqRyz1vGCciGubSGSo9z2WHC0bG1NHzuh7G6jYuJYe0baukA%2FRMq3DnFkv61OSdKQ4fi6g6EQYWXknjXg29IxKLstxL4pi0tAj2eLXx9%2BmhRG29XnsCMSwvMzYEGniD7V4HVphsWO0Vv%2FveXGVtdvqWnB2%2BhPoU9x07Co0cwS02KR1z%2FbvByhdwdyRF%2F%2B55K%2FjB08JdzVzjbqMz4FiR&X-Amz-Signature=beeab7308c2bc6e81213362fff2a26a989aa61a6ff456dc030a5ba60913447a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
