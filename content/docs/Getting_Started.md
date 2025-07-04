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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVX7G4G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICng1015Pk1A0ZZCw16f0%2F52yiAGaCuqWy3Sgq0E7CQJAiAqMF%2FNrQggEbQdJDyGwNBSP%2FFebM0Iy1uprn%2FBUPPH4ir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMd3haBNv35iBsTIj7KtwDnE4%2BaCJczV%2BAc2JVJEvqC1rc%2FNTL%2BUW7hiM4hVjTE%2FmLXgxIf8AeBZmE6Cet%2Fu5OOW1P2uE4kkEn7M6RVxT0%2FU2uGXe2bVqnBki0T2AIuuUQDjPDzSWNZ6oaZeNBHUNAohmndgQYVXfKieGiDToicrpbmHlG86WdW7nZNJiJo%2BjgCQnoE74t69qaUu0QcmP%2FKCcPhEpjE4KGfq0m%2FeqGhCMq6G%2FHB7rPWYZmBn5A80iAXTsFEk7iAJTTeC1LR%2B0JUDQgnoHi6r5DAcMja8jfACwZ3U5crBmiPF2bbyRZfgEIjxBAm8fGcINVksx0oEI318b%2BwNvldbz9cR1ClcUqX0I466rwpU4cb4jZS%2BVIfHidIld28CNYq3A4jThOOHgf0WGYzUqo38gO9rh%2Fqu80nl8z7oI0jULHulYyem%2FxEbLkzsws%2F21qZvqLKeOg5ZYPvmii4IBmISSAZxVEfoXLkbJVAJ%2BLqRDf5dNmHVqYxUDwAGS7lNy4G%2FazD1wxPbpFS4qOl8sjRX%2FPeij1Sym1zR42HBUmF6kGiGL9ZXDX2wcj1kUpzkdJIND4ATre9wLpBA6VsMjC%2BQrhfRzeHfIlfKnkWlMFfVeH6ohIULZOzC47faTaHbIazVJX0iswo%2FOewwY6pgFt8kTS1RpnDFh2qcqAtspS6W078Oiy9bja5ipPQoZQYj78zrF5qKy8eF%2F2tJjcp3tAR6eQz0tz59bvwujs0LxDWxd%2BxgKBDBS9FvKx4HwExgcZLJRWVHKrXYtVwype8orbPscyvYbZuD7BPctqOaYUYrbp4sghcw%2F2OZrGmndSE%2F%2B0CTvqyEscpARmAJSeoVI3wVFEE4ybZ8b%2F%2FKFL8HYLOaDtob5o&X-Amz-Signature=edeb88868879018e8b528215cfbcd778ccd6a42767962ba218e05a5d23769854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVX7G4G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICng1015Pk1A0ZZCw16f0%2F52yiAGaCuqWy3Sgq0E7CQJAiAqMF%2FNrQggEbQdJDyGwNBSP%2FFebM0Iy1uprn%2FBUPPH4ir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMd3haBNv35iBsTIj7KtwDnE4%2BaCJczV%2BAc2JVJEvqC1rc%2FNTL%2BUW7hiM4hVjTE%2FmLXgxIf8AeBZmE6Cet%2Fu5OOW1P2uE4kkEn7M6RVxT0%2FU2uGXe2bVqnBki0T2AIuuUQDjPDzSWNZ6oaZeNBHUNAohmndgQYVXfKieGiDToicrpbmHlG86WdW7nZNJiJo%2BjgCQnoE74t69qaUu0QcmP%2FKCcPhEpjE4KGfq0m%2FeqGhCMq6G%2FHB7rPWYZmBn5A80iAXTsFEk7iAJTTeC1LR%2B0JUDQgnoHi6r5DAcMja8jfACwZ3U5crBmiPF2bbyRZfgEIjxBAm8fGcINVksx0oEI318b%2BwNvldbz9cR1ClcUqX0I466rwpU4cb4jZS%2BVIfHidIld28CNYq3A4jThOOHgf0WGYzUqo38gO9rh%2Fqu80nl8z7oI0jULHulYyem%2FxEbLkzsws%2F21qZvqLKeOg5ZYPvmii4IBmISSAZxVEfoXLkbJVAJ%2BLqRDf5dNmHVqYxUDwAGS7lNy4G%2FazD1wxPbpFS4qOl8sjRX%2FPeij1Sym1zR42HBUmF6kGiGL9ZXDX2wcj1kUpzkdJIND4ATre9wLpBA6VsMjC%2BQrhfRzeHfIlfKnkWlMFfVeH6ohIULZOzC47faTaHbIazVJX0iswo%2FOewwY6pgFt8kTS1RpnDFh2qcqAtspS6W078Oiy9bja5ipPQoZQYj78zrF5qKy8eF%2F2tJjcp3tAR6eQz0tz59bvwujs0LxDWxd%2BxgKBDBS9FvKx4HwExgcZLJRWVHKrXYtVwype8orbPscyvYbZuD7BPctqOaYUYrbp4sghcw%2F2OZrGmndSE%2F%2B0CTvqyEscpARmAJSeoVI3wVFEE4ybZ8b%2F%2FKFL8HYLOaDtob5o&X-Amz-Signature=47191479983995c4202aa64d41fa03328adc1a7aad9f589c5aa9fddc819782dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVX7G4G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICng1015Pk1A0ZZCw16f0%2F52yiAGaCuqWy3Sgq0E7CQJAiAqMF%2FNrQggEbQdJDyGwNBSP%2FFebM0Iy1uprn%2FBUPPH4ir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMd3haBNv35iBsTIj7KtwDnE4%2BaCJczV%2BAc2JVJEvqC1rc%2FNTL%2BUW7hiM4hVjTE%2FmLXgxIf8AeBZmE6Cet%2Fu5OOW1P2uE4kkEn7M6RVxT0%2FU2uGXe2bVqnBki0T2AIuuUQDjPDzSWNZ6oaZeNBHUNAohmndgQYVXfKieGiDToicrpbmHlG86WdW7nZNJiJo%2BjgCQnoE74t69qaUu0QcmP%2FKCcPhEpjE4KGfq0m%2FeqGhCMq6G%2FHB7rPWYZmBn5A80iAXTsFEk7iAJTTeC1LR%2B0JUDQgnoHi6r5DAcMja8jfACwZ3U5crBmiPF2bbyRZfgEIjxBAm8fGcINVksx0oEI318b%2BwNvldbz9cR1ClcUqX0I466rwpU4cb4jZS%2BVIfHidIld28CNYq3A4jThOOHgf0WGYzUqo38gO9rh%2Fqu80nl8z7oI0jULHulYyem%2FxEbLkzsws%2F21qZvqLKeOg5ZYPvmii4IBmISSAZxVEfoXLkbJVAJ%2BLqRDf5dNmHVqYxUDwAGS7lNy4G%2FazD1wxPbpFS4qOl8sjRX%2FPeij1Sym1zR42HBUmF6kGiGL9ZXDX2wcj1kUpzkdJIND4ATre9wLpBA6VsMjC%2BQrhfRzeHfIlfKnkWlMFfVeH6ohIULZOzC47faTaHbIazVJX0iswo%2FOewwY6pgFt8kTS1RpnDFh2qcqAtspS6W078Oiy9bja5ipPQoZQYj78zrF5qKy8eF%2F2tJjcp3tAR6eQz0tz59bvwujs0LxDWxd%2BxgKBDBS9FvKx4HwExgcZLJRWVHKrXYtVwype8orbPscyvYbZuD7BPctqOaYUYrbp4sghcw%2F2OZrGmndSE%2F%2B0CTvqyEscpARmAJSeoVI3wVFEE4ybZ8b%2F%2FKFL8HYLOaDtob5o&X-Amz-Signature=dadf5f919ad4078e742d65841966f4b311c06f524237dbddf6333208d85e6ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQQZNN4%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIBgBrmyZFH66CthLH9W7p5QsJNFDNT8DT9GjMhpfx4YEAiEAlGnHxdJHgrX23snbZfyvwfZgdHF10IA95y%2Bbr01ICWAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDK0RKNgnSoXS2%2Bh3cSrcAyPVHd5KrcS4%2BzepgxmWqwwQNNYQqvPt5t1W1qpyngNHj2va0SUbMAdq8riWZFRUoQtO%2BvyuvtofDCqDu%2BNbB6nc6%2BTXqFgT04ZKXvVuE%2FHFQEj1%2BRBb0vvZjrjQD5UQP09M%2Bpan6N1nvD0VWAJ%2Bc3%2FPtrqNHMTTXvVg3cq06yqCuSWaX8NmgNQApDy9nEin5CnhGSI0FU%2B1uMvj4ylDH9reiiLMM7Tv7GZNlESEU7XGCEgCyb6ijXVK8sezK6wHy3Enm4k9rk3gobkwgvksP07u7sZVvamnVuZQCu%2F%2Ffo3fq6Aa5duVcWOqP23X4C6uJaLsKHNLTXNfyAEccPvn5HIDjEUKszobLgbKELxq1dOUTjXLCUCIPpL%2Fo15zr9G%2FjPd3kggsZwCZ64X3lR3%2Bzuj4z4wgr2UFWJ3QBPfZo9lA2%2BN9MCf%2Fs5lCc7jZtEvyoKVC%2FPipUg%2FghpX24yX6GJyJq9htVLq1oydj4UM09VrKGx0MMHs5R2HYkeEBnf3PwQ1Kz0mvR2ht8IVMdRvC6YR1%2ByEy0KR6ncmaGddsTFlNi3BShxHR5C5rWVPh4q6bJuEFdYW3TU0l9QeESmrJmy%2FAEjN%2F7BXS9UqmBt5G9JUue%2FMkzHGhIDAG%2FlfcMJnznsMGOqUBEJxiM47o6GrkQ824nmgRJnz7ZaSUysidT9xKomfQhORrxsyHeZ%2Fn%2Bvn2M%2Fzymit1xh1A0zn2ElRtoZr6Fe5Vr1DYyPx7bH5riCRiIhSqUHrZXRnNqZeSDqdpUDx7V3ElOKf5gWV1WPD9CXqqzE1zWc07PetPEXbpkY2wy1AvS9EG333eaHpTdzzRtrT%2BNcfQnIyMNaLY8BPS9tpZRi%2FLd%2BPOdLsI&X-Amz-Signature=876d5b150fdd7d49094541ece3606eefe6bda7f519b8dbd6dacc8116cce0fec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBDOOOW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCeGEr7gjYHzkNIZYLg1qAdBmQK2zieolxkJE%2FV%2BjAm%2FQIgM8V2gHoGv%2F%2BqJnVqJIMx7uTytduTQdxX00XwXHqQrBoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDqdWMccnYgXEayudSrcAwXmyalv8ZlXjqUhI4s9bRKExJ0b%2BbxXTnu7G%2Fh%2FnWuFv%2FrtCHoEHN65LvEYMr%2BibwrKJW8xBbiZTwVKi%2B86m9yBtOzRB%2B1uryO3xihO4Gx4wVgr%2FrglCxxjpaEgurFzwFK%2BHHxQdAzbYzFoWv18Vte8jdsQPKYCdSm6vkR3Ww8hVGTzrCnRmypI9nkN6YqZLnDRmnqD8ekWL%2BvOVUzelk8MjveKYI%2BmkGE%2FiMHn4OuJ%2FW2QI5WBbUao1A8Ugka99%2Be4C8mISRHDYPPAoRl%2FkBoCh6bj%2BANIrpDSGhVqSaAcgaetni3ZEahOCyUK6FGsjrxuJWfl0fYMvSspWSH6BtJMdW9xNPh%2BqWLlsDN%2FrMhOw147F%2FLff8us6KPcON3F5%2F%2ByMakCbVPJ%2BF4oXIhAbrFQMrxazyH8oCwVphdFQcy0vXhQQLZcQ7Jx6HXNxT4t0X93NxzBZOiKDBKo%2F9kIG7g6pu7Rk91osM2R1f4MzHlN%2BrVsR5c5fZUKguMjJbamE5eFfo0RDMbhkwPXDn73SlovTmYzjZDjmnnvcbpRaWs2r9FuQRSmMd4AcCtKnjXSmdEfAwBmyQG1TKD7sI1ZxJTwmZ0%2FkQXmarGRH49ZRQ6vFVmwqga8nwfRa7yzMKjynsMGOqUB7EkHWxI00yRVU5xiqNasP57i0Q50LTOrn0oYQjxsfoDcItpaH%2B6XQTYKBznKAn6Ce1kXWuWcbNAbJiXZ%2Ffo3jE1cvQNzneoBMGaRX1cUd2N3uP9iz6LR5MqQAD9088C7q7u6dzItnD72EjqGy2Jcn795ab4aNitGr2QMa9f4uZKtEOkaEPQfZw3wLo6qfhspNPzbVYMzrsKkqAzwm%2B2rlqQF%2BJUO&X-Amz-Signature=f7daacce575b9d592f8db6518c1942d508446da9b63e1aafdbafe7809dcf8c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVX7G4G%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICng1015Pk1A0ZZCw16f0%2F52yiAGaCuqWy3Sgq0E7CQJAiAqMF%2FNrQggEbQdJDyGwNBSP%2FFebM0Iy1uprn%2FBUPPH4ir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMd3haBNv35iBsTIj7KtwDnE4%2BaCJczV%2BAc2JVJEvqC1rc%2FNTL%2BUW7hiM4hVjTE%2FmLXgxIf8AeBZmE6Cet%2Fu5OOW1P2uE4kkEn7M6RVxT0%2FU2uGXe2bVqnBki0T2AIuuUQDjPDzSWNZ6oaZeNBHUNAohmndgQYVXfKieGiDToicrpbmHlG86WdW7nZNJiJo%2BjgCQnoE74t69qaUu0QcmP%2FKCcPhEpjE4KGfq0m%2FeqGhCMq6G%2FHB7rPWYZmBn5A80iAXTsFEk7iAJTTeC1LR%2B0JUDQgnoHi6r5DAcMja8jfACwZ3U5crBmiPF2bbyRZfgEIjxBAm8fGcINVksx0oEI318b%2BwNvldbz9cR1ClcUqX0I466rwpU4cb4jZS%2BVIfHidIld28CNYq3A4jThOOHgf0WGYzUqo38gO9rh%2Fqu80nl8z7oI0jULHulYyem%2FxEbLkzsws%2F21qZvqLKeOg5ZYPvmii4IBmISSAZxVEfoXLkbJVAJ%2BLqRDf5dNmHVqYxUDwAGS7lNy4G%2FazD1wxPbpFS4qOl8sjRX%2FPeij1Sym1zR42HBUmF6kGiGL9ZXDX2wcj1kUpzkdJIND4ATre9wLpBA6VsMjC%2BQrhfRzeHfIlfKnkWlMFfVeH6ohIULZOzC47faTaHbIazVJX0iswo%2FOewwY6pgFt8kTS1RpnDFh2qcqAtspS6W078Oiy9bja5ipPQoZQYj78zrF5qKy8eF%2F2tJjcp3tAR6eQz0tz59bvwujs0LxDWxd%2BxgKBDBS9FvKx4HwExgcZLJRWVHKrXYtVwype8orbPscyvYbZuD7BPctqOaYUYrbp4sghcw%2F2OZrGmndSE%2F%2B0CTvqyEscpARmAJSeoVI3wVFEE4ybZ8b%2F%2FKFL8HYLOaDtob5o&X-Amz-Signature=69079a133204fd5efec57312be37474c7e8a5e6bec31f5e5544e373a3d4b739b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
