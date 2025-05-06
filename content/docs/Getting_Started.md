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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4MI2I5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9zduRAJjNFEgjzJubQgtUO4AoLkdGtnQK5xnmxUhxjwIgDHjlPRGSqe%2BDDfuogxmatsT1khf%2B4yPMySuOZxaLvUgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEKAhdauyFyzme5xQyrcA%2BusA5O89SpsvLiNutggxVtbptbi1BhtvFy6KEEtXstNs9fjJPq9JPWqsVYguqVBsTftZfL%2FJqawvo9fhBaBJ4OuhQ0Zd3w835W2V8MdAdgL3%2FIh27UhWfH1Vlip1cwWwHyUZvIYRQjnVR68prHtrfwJD5BmHqBsTOFnO1AyHsKR8%2FkxZbtzYMqt14ozC6oqE8NqnTx0t0meTNmVKDMdJSHtkRi1mZVxds0%2FqgFY%2FZETajZugXdRnCKmuhxhvwCba9co53iNAfxmqv5HDeZWszsR2Yl07Q3eCkhzaCQFFBHyzBU1f8PnzAXrQWsCSMJE1EJBAPvKbmrln6cq%2BU%2B7l%2FHQgMmREY4ExuDgYl5RvkT%2BT03GwhkMhP3qeVwXJC4GgnSm3tEwj7wz2b%2FojuIInk7oO8XTPxp%2B53PNsl7B%2BHYYWMNcN4MUdDO9WbM3QQzFAW2iZ3T4KFZi%2F24x611eQPO2%2BjE5Oz833K70zxAP%2FPypAH3jfY92a5lGx2HEdSXuaRUVvcCy8fP5oJ2WCnNL513yl1PCpjSdxnHi1hG%2BgxUBNjSZx7aXBzNWVCBv9OyKjpE7vZhAXZljqGcfz6yOE6POot0h2tShjS7OKQoBW9TxHO4duSl9%2BCXXkL3SMK7v5sAGOqUBiUXMcuqViYq2jYgwR51CMHQMUZf%2B3C2MTD6GhRzwXMW6JZRNaH0ID7GbwWhIv2ikbX4rY7bn83%2BkktOBJYym6MP93xx7rUFl0gbWleTdui6r6%2FN07MZ6DsDWOI9N4NUK1k11srCg1PeSwgF7h%2FD2lIIgDAgelC6bDt9sHNtT%2BdNHnuCaBnwaXaebs1R63XIP18as0Xj4Pt7Pg3Z%2BhTtIU5Rng43p&X-Amz-Signature=abf6f3ce26fa01dfe7e7faa00491d95845461978cd7e5d3ede8ddb2d1d06278f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4MI2I5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9zduRAJjNFEgjzJubQgtUO4AoLkdGtnQK5xnmxUhxjwIgDHjlPRGSqe%2BDDfuogxmatsT1khf%2B4yPMySuOZxaLvUgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEKAhdauyFyzme5xQyrcA%2BusA5O89SpsvLiNutggxVtbptbi1BhtvFy6KEEtXstNs9fjJPq9JPWqsVYguqVBsTftZfL%2FJqawvo9fhBaBJ4OuhQ0Zd3w835W2V8MdAdgL3%2FIh27UhWfH1Vlip1cwWwHyUZvIYRQjnVR68prHtrfwJD5BmHqBsTOFnO1AyHsKR8%2FkxZbtzYMqt14ozC6oqE8NqnTx0t0meTNmVKDMdJSHtkRi1mZVxds0%2FqgFY%2FZETajZugXdRnCKmuhxhvwCba9co53iNAfxmqv5HDeZWszsR2Yl07Q3eCkhzaCQFFBHyzBU1f8PnzAXrQWsCSMJE1EJBAPvKbmrln6cq%2BU%2B7l%2FHQgMmREY4ExuDgYl5RvkT%2BT03GwhkMhP3qeVwXJC4GgnSm3tEwj7wz2b%2FojuIInk7oO8XTPxp%2B53PNsl7B%2BHYYWMNcN4MUdDO9WbM3QQzFAW2iZ3T4KFZi%2F24x611eQPO2%2BjE5Oz833K70zxAP%2FPypAH3jfY92a5lGx2HEdSXuaRUVvcCy8fP5oJ2WCnNL513yl1PCpjSdxnHi1hG%2BgxUBNjSZx7aXBzNWVCBv9OyKjpE7vZhAXZljqGcfz6yOE6POot0h2tShjS7OKQoBW9TxHO4duSl9%2BCXXkL3SMK7v5sAGOqUBiUXMcuqViYq2jYgwR51CMHQMUZf%2B3C2MTD6GhRzwXMW6JZRNaH0ID7GbwWhIv2ikbX4rY7bn83%2BkktOBJYym6MP93xx7rUFl0gbWleTdui6r6%2FN07MZ6DsDWOI9N4NUK1k11srCg1PeSwgF7h%2FD2lIIgDAgelC6bDt9sHNtT%2BdNHnuCaBnwaXaebs1R63XIP18as0Xj4Pt7Pg3Z%2BhTtIU5Rng43p&X-Amz-Signature=d38adb8ebcc27c53491f27df43a9ec8c5e5571beb0ee73c3d9042f32ebad291f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4MI2I5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9zduRAJjNFEgjzJubQgtUO4AoLkdGtnQK5xnmxUhxjwIgDHjlPRGSqe%2BDDfuogxmatsT1khf%2B4yPMySuOZxaLvUgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEKAhdauyFyzme5xQyrcA%2BusA5O89SpsvLiNutggxVtbptbi1BhtvFy6KEEtXstNs9fjJPq9JPWqsVYguqVBsTftZfL%2FJqawvo9fhBaBJ4OuhQ0Zd3w835W2V8MdAdgL3%2FIh27UhWfH1Vlip1cwWwHyUZvIYRQjnVR68prHtrfwJD5BmHqBsTOFnO1AyHsKR8%2FkxZbtzYMqt14ozC6oqE8NqnTx0t0meTNmVKDMdJSHtkRi1mZVxds0%2FqgFY%2FZETajZugXdRnCKmuhxhvwCba9co53iNAfxmqv5HDeZWszsR2Yl07Q3eCkhzaCQFFBHyzBU1f8PnzAXrQWsCSMJE1EJBAPvKbmrln6cq%2BU%2B7l%2FHQgMmREY4ExuDgYl5RvkT%2BT03GwhkMhP3qeVwXJC4GgnSm3tEwj7wz2b%2FojuIInk7oO8XTPxp%2B53PNsl7B%2BHYYWMNcN4MUdDO9WbM3QQzFAW2iZ3T4KFZi%2F24x611eQPO2%2BjE5Oz833K70zxAP%2FPypAH3jfY92a5lGx2HEdSXuaRUVvcCy8fP5oJ2WCnNL513yl1PCpjSdxnHi1hG%2BgxUBNjSZx7aXBzNWVCBv9OyKjpE7vZhAXZljqGcfz6yOE6POot0h2tShjS7OKQoBW9TxHO4duSl9%2BCXXkL3SMK7v5sAGOqUBiUXMcuqViYq2jYgwR51CMHQMUZf%2B3C2MTD6GhRzwXMW6JZRNaH0ID7GbwWhIv2ikbX4rY7bn83%2BkktOBJYym6MP93xx7rUFl0gbWleTdui6r6%2FN07MZ6DsDWOI9N4NUK1k11srCg1PeSwgF7h%2FD2lIIgDAgelC6bDt9sHNtT%2BdNHnuCaBnwaXaebs1R63XIP18as0Xj4Pt7Pg3Z%2BhTtIU5Rng43p&X-Amz-Signature=7515f1db56b764ea15c51aa15fd8bd5ba64b4994872060fa599a11e5c3c91d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5HBIVFY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2oOnZzfzMJsRtZWHfp6m2urwaftGc38Ku%2BaOl1K9F%2FAiB0dy4JtTrj9SJc7TWu%2Bysa1GCNq%2Be0naWhyp8fbozGQCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM0vBbim9nuSsCd6jYKtwDtCe5qac5SFwaPEjWg%2FM2iAMv9%2BxC15ZS1fgDyL8sDWWSKThcnTbEJBfJGDeejbA7xW1FTSpD5yZvSuQwNkkj4I%2F8HjIbrH3uChF%2FdGciwraUqu6KP74e%2B%2BZbA3F6BGiBC6TfneUrI%2F%2BU%2B1DBmDID51SSnyraPB7%2B%2BYrYXgb6qu7RuQCmHi8eATJcXfc0OIlDRixF4Wap2jH7eCeJyd57SPk1BktiWkoHTzx%2B3ZEAi45c46h9Kx0QtMrOcFLx7NpfjFvgJ7Y0Yii%2F0lDVA94kEfcjiRUQ3pBzXR1xYvLK7Ubk5PnCoEYZaE4TZ9LekHarM56jWNrtHZldSF9Hl7fQpi6yfGflVFm%2BujzMsFQaamkSM%2BrUd02KsZ152AYVqX82JNJQsDD6KkN11iwGx6TtLRl2XLAtR70PSRX%2B0FwQL%2FWl5hwXDPvh1B9rNfU3NWpsvuRhf7liz7Hclbl23E7gTDSc%2Bzw2an6ogpj1iOQ62OCMeQH%2B9xF0woBdAoJ9w7JMtuSlJEWEvguLmKSImROewUjM0dfUniPxxLNP7B7fTPzGO8FO3P7eF8QIo85q8N3QBY5s7uyVOBQlM0ufRFgTszf8DBW3fHG0zA1AkUKlwaP87BNj51kfHCXw69Ew2u%2FmwAY6pgFo%2B1oM70aqF2cwP8P7wmt0WTNYvVDqMmV05F%2BTTgVFqMDEc3TIEF60eVCHgPdrmiaygokXkIPzOQv3ztDji3ZAUMU6BbAlv%2FrAaq9VDGH0%2F126nX6M1NDbd4H8entGHM40iNid1HocbZJiPnqH0pb7RX%2FOEB%2BasDUfKURrSHeYs3rp121f%2BUzJmJkp1Lt1AMjaLO9Qm4gI9fC23lzgt7v07ZTNFJu6&X-Amz-Signature=2b8652802dc94591231324cc537f85aa52c34dd7b692f096182a5f263a955e82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B6ZPLN6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDM9ZTGooQEZ4SwMJHpDXAkREc27d%2FoMPpcIH1%2BbxfuAiAo9kO1SDSTVEK27bueGM9gTGAvmcQXvYaiFvUrHOEhoyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMYQZI7p137oIoFWsDKtwDauMJRhbR5ooIek13T%2B32GN%2BXiFxlM7%2FoQkuud1qYGko4cEnrC0CvjeX2FY2ulaI%2FetG%2BUa%2FpZYDf8Gn2%2FnT%2BCdApMh0apyZFqk3783Vjqi%2FGBQhKMxjkp1FRg5qcTONp7X44veQ%2BtIAGEUnnovbGI4N8uW8T7zI%2FHL366oXswr7SKpv6W1CGioRxBoPxlKZ8PjO7HhpzSSGMVX4c1%2BGf8LnwH1eQlH91jWoBOZvHv%2FxgkTZdijt9nMjq2YoWek6dQW1coDbplCpviUthQgbsZqX41kJwexOTrga2YIlISWsXIzY67a7fodoV5g1qZsGhcCrowWfmneHlzOnMkvSl61T4%2BZedUHDlealTqvFf3C%2FD37MT6iIqDiFTU74549EJQ19ur2GsuLSJDkf8Wk9R9myh%2FVjIGfO3bZ6r%2FYfJ16RhkgyOsZDGEXCLdgZ51v%2FkdW8dd2tC%2BNqbQQ5drrj%2Fn3qMTLTt7HJa5RC6ZpJ%2BAZan0sDnSxukLd%2B%2FmwiqNv2HwS6Ht85NcBrovX0chXWv%2BXkaNTh49uhcg2H9kb92pV9kGFBZ0uG2Vi4psLQsn%2FqyzrpYAwv3G8TjbsYLqxWHEEY9IrehlGZxdtyJ7YnTwlMG%2BFeDrQ6xbQOTAnkw6e%2FmwAY6pgHm6ToUpjM8KU9IgxwYl8i4Afs%2Fz1G84vq8mA2Yw30IZ6m%2BhtZThHJi%2FZatCazofCsEKa1YjieAZasydkKyeu25UEuL6sFeFutDRZmLUTR8LwNZMLAEUGPujwLHSUlIF7%2ByeQkOYZjmfQogzmoFEk4dCkXGG9DvFSBwIXnGdNHdUob7NigvyfbUEHboBkNtJf5UWjzUHppUnt3xsSMjD4NUSwYtlC9i&X-Amz-Signature=a8870597786345dbf80a58c6540a1171058baaab976e4d9be0a153f800b37a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4MI2I5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9zduRAJjNFEgjzJubQgtUO4AoLkdGtnQK5xnmxUhxjwIgDHjlPRGSqe%2BDDfuogxmatsT1khf%2B4yPMySuOZxaLvUgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEKAhdauyFyzme5xQyrcA%2BusA5O89SpsvLiNutggxVtbptbi1BhtvFy6KEEtXstNs9fjJPq9JPWqsVYguqVBsTftZfL%2FJqawvo9fhBaBJ4OuhQ0Zd3w835W2V8MdAdgL3%2FIh27UhWfH1Vlip1cwWwHyUZvIYRQjnVR68prHtrfwJD5BmHqBsTOFnO1AyHsKR8%2FkxZbtzYMqt14ozC6oqE8NqnTx0t0meTNmVKDMdJSHtkRi1mZVxds0%2FqgFY%2FZETajZugXdRnCKmuhxhvwCba9co53iNAfxmqv5HDeZWszsR2Yl07Q3eCkhzaCQFFBHyzBU1f8PnzAXrQWsCSMJE1EJBAPvKbmrln6cq%2BU%2B7l%2FHQgMmREY4ExuDgYl5RvkT%2BT03GwhkMhP3qeVwXJC4GgnSm3tEwj7wz2b%2FojuIInk7oO8XTPxp%2B53PNsl7B%2BHYYWMNcN4MUdDO9WbM3QQzFAW2iZ3T4KFZi%2F24x611eQPO2%2BjE5Oz833K70zxAP%2FPypAH3jfY92a5lGx2HEdSXuaRUVvcCy8fP5oJ2WCnNL513yl1PCpjSdxnHi1hG%2BgxUBNjSZx7aXBzNWVCBv9OyKjpE7vZhAXZljqGcfz6yOE6POot0h2tShjS7OKQoBW9TxHO4duSl9%2BCXXkL3SMK7v5sAGOqUBiUXMcuqViYq2jYgwR51CMHQMUZf%2B3C2MTD6GhRzwXMW6JZRNaH0ID7GbwWhIv2ikbX4rY7bn83%2BkktOBJYym6MP93xx7rUFl0gbWleTdui6r6%2FN07MZ6DsDWOI9N4NUK1k11srCg1PeSwgF7h%2FD2lIIgDAgelC6bDt9sHNtT%2BdNHnuCaBnwaXaebs1R63XIP18as0Xj4Pt7Pg3Z%2BhTtIU5Rng43p&X-Amz-Signature=a854f486e4b5d38281eb6e1571d09a6f2c4d639d66762a7dbff79fee0a2e9fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
