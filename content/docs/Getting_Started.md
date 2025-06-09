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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJN5JRT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCSGm4NtZhFjTfiyf%2Bs5tU8EH0T%2FjcjYuRCuWuEUfNQIhAOHVSvPX9%2BUvTXYV6hgUiI%2B%2Bp1m57V%2BPzmsb404fJyKfKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj6AWqszdOIhz0%2BD4q3AOV6XSSQvSXVQA34em0Qvis2ySNm%2Bl0zEHlVgj74ielzz2MHYQNDc09Al3tX7zHOkjk40uL3PxPRvSJcE9X01m%2Bz2c2oAE6SMLT3jJf0br7hS7sg9QFCO7b9%2BVFQuJUcTEmX7HppF7GkP3BBgLzpDzmFh%2F%2BGo7pgzaWXYdJjpJTx9BU50s0gaG1hFxDtBp7xL%2Bo3lM9aX80UZouk7eDktG837OA8rD5gn8xDkJFAYbZwp3gLrx1wUbzcE8TLMd2O6gkrTAN6hI8Ix2%2FNe2%2Bs0YwKoNxTsb45gih06pOD6S5c9UoMCfFTxYrCcNkF%2B0WPeXVZuVWmauWVozdTO0qYpaU3vo0%2FgrLdXG1fP8mVE%2B27GaN%2B4h2NjyGM%2BtgZ%2Ft9nCJpxUWPu7j7cRdSIC%2BcZBXRxgsQqZvmZjCT%2FIk6hMNE6GqZC%2F3X8%2BBnysJPiw7HQN0mh2Hfxvcx3D3e5Y0L2BCTPHdiaFp%2BmSK%2BPJcWKu8dyb72rlvjSzuOg0Y5Gd7KlwNIACeQCEEF8OuVEr7txNTvRVhPkLxlBOMUTNztSl9h3VyhwGfPOZ5bRlLRgan1YKVN0O3qjMpvYT8EKdu0SeAw3ScWVQSdsorPtCz5EZI1vy7wsPFbSAouzpPYfjCCypzCBjqkAQ8iTlqA%2BdQ2eIwJKPKxxE8ch51TrGaCp75UkhhBtzfIH4W3kWGdHnFM4Zv2Cy8VYDgg5kGsIPj9g5U2MnT0%2BK3G%2B0SKMwPC5GsTRUZEz1O89ync94l15yuEYgduv%2BHXyR2ggG3Bc%2F9Ys2B1yLPplrGYVKKq%2FdaBTIf%2BaeTtEs%2BGgbyN%2BpwuDBXd7QGxHooNkcNsaojZn6ewiM9et2OxQ39z%2BOsw&X-Amz-Signature=8ff9619afbf9d133b1175a6cca198f0550668188fdc5d69333d95d70e0baea8c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJN5JRT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCSGm4NtZhFjTfiyf%2Bs5tU8EH0T%2FjcjYuRCuWuEUfNQIhAOHVSvPX9%2BUvTXYV6hgUiI%2B%2Bp1m57V%2BPzmsb404fJyKfKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj6AWqszdOIhz0%2BD4q3AOV6XSSQvSXVQA34em0Qvis2ySNm%2Bl0zEHlVgj74ielzz2MHYQNDc09Al3tX7zHOkjk40uL3PxPRvSJcE9X01m%2Bz2c2oAE6SMLT3jJf0br7hS7sg9QFCO7b9%2BVFQuJUcTEmX7HppF7GkP3BBgLzpDzmFh%2F%2BGo7pgzaWXYdJjpJTx9BU50s0gaG1hFxDtBp7xL%2Bo3lM9aX80UZouk7eDktG837OA8rD5gn8xDkJFAYbZwp3gLrx1wUbzcE8TLMd2O6gkrTAN6hI8Ix2%2FNe2%2Bs0YwKoNxTsb45gih06pOD6S5c9UoMCfFTxYrCcNkF%2B0WPeXVZuVWmauWVozdTO0qYpaU3vo0%2FgrLdXG1fP8mVE%2B27GaN%2B4h2NjyGM%2BtgZ%2Ft9nCJpxUWPu7j7cRdSIC%2BcZBXRxgsQqZvmZjCT%2FIk6hMNE6GqZC%2F3X8%2BBnysJPiw7HQN0mh2Hfxvcx3D3e5Y0L2BCTPHdiaFp%2BmSK%2BPJcWKu8dyb72rlvjSzuOg0Y5Gd7KlwNIACeQCEEF8OuVEr7txNTvRVhPkLxlBOMUTNztSl9h3VyhwGfPOZ5bRlLRgan1YKVN0O3qjMpvYT8EKdu0SeAw3ScWVQSdsorPtCz5EZI1vy7wsPFbSAouzpPYfjCCypzCBjqkAQ8iTlqA%2BdQ2eIwJKPKxxE8ch51TrGaCp75UkhhBtzfIH4W3kWGdHnFM4Zv2Cy8VYDgg5kGsIPj9g5U2MnT0%2BK3G%2B0SKMwPC5GsTRUZEz1O89ync94l15yuEYgduv%2BHXyR2ggG3Bc%2F9Ys2B1yLPplrGYVKKq%2FdaBTIf%2BaeTtEs%2BGgbyN%2BpwuDBXd7QGxHooNkcNsaojZn6ewiM9et2OxQ39z%2BOsw&X-Amz-Signature=df6c35490239db280ac54b90498b00cadd3d8e26f83f95a2422ec294279459af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJN5JRT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCSGm4NtZhFjTfiyf%2Bs5tU8EH0T%2FjcjYuRCuWuEUfNQIhAOHVSvPX9%2BUvTXYV6hgUiI%2B%2Bp1m57V%2BPzmsb404fJyKfKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj6AWqszdOIhz0%2BD4q3AOV6XSSQvSXVQA34em0Qvis2ySNm%2Bl0zEHlVgj74ielzz2MHYQNDc09Al3tX7zHOkjk40uL3PxPRvSJcE9X01m%2Bz2c2oAE6SMLT3jJf0br7hS7sg9QFCO7b9%2BVFQuJUcTEmX7HppF7GkP3BBgLzpDzmFh%2F%2BGo7pgzaWXYdJjpJTx9BU50s0gaG1hFxDtBp7xL%2Bo3lM9aX80UZouk7eDktG837OA8rD5gn8xDkJFAYbZwp3gLrx1wUbzcE8TLMd2O6gkrTAN6hI8Ix2%2FNe2%2Bs0YwKoNxTsb45gih06pOD6S5c9UoMCfFTxYrCcNkF%2B0WPeXVZuVWmauWVozdTO0qYpaU3vo0%2FgrLdXG1fP8mVE%2B27GaN%2B4h2NjyGM%2BtgZ%2Ft9nCJpxUWPu7j7cRdSIC%2BcZBXRxgsQqZvmZjCT%2FIk6hMNE6GqZC%2F3X8%2BBnysJPiw7HQN0mh2Hfxvcx3D3e5Y0L2BCTPHdiaFp%2BmSK%2BPJcWKu8dyb72rlvjSzuOg0Y5Gd7KlwNIACeQCEEF8OuVEr7txNTvRVhPkLxlBOMUTNztSl9h3VyhwGfPOZ5bRlLRgan1YKVN0O3qjMpvYT8EKdu0SeAw3ScWVQSdsorPtCz5EZI1vy7wsPFbSAouzpPYfjCCypzCBjqkAQ8iTlqA%2BdQ2eIwJKPKxxE8ch51TrGaCp75UkhhBtzfIH4W3kWGdHnFM4Zv2Cy8VYDgg5kGsIPj9g5U2MnT0%2BK3G%2B0SKMwPC5GsTRUZEz1O89ync94l15yuEYgduv%2BHXyR2ggG3Bc%2F9Ys2B1yLPplrGYVKKq%2FdaBTIf%2BaeTtEs%2BGgbyN%2BpwuDBXd7QGxHooNkcNsaojZn6ewiM9et2OxQ39z%2BOsw&X-Amz-Signature=c513104eeb9cce610c4101064b2b539db0360b5bd881240d0397a885d16a6e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BWUABMB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7p90693ytJLEEzzoUnk8rmNyDGvanbCSrNT2MyInuDAiEA9a9SEWQxN1BUm%2B0jySbzCOpJw%2BoswOHG7Or7bCiFea8qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8tJ779aZadMJrVNircA5IotVCYHZjzPrbcQnYkqAzU1NJiPS0AEO0CN5bP%2FFybTi0r0gjMBRJmQD45z9b7vlGYh5CQkcKx%2BGR6wqBNO71pXV9%2BhxKZ9NBJ6NZfOnuo2gVttXXn2qOkra5B1FgzbWUJ7uOr1SWb8oU8oE6bL3cHh2FnHGFhSWx2CZANTjA%2BZwTkQagv2%2F3Qidl%2FHOBy8FsKpEGg3dNDDaT6wW1uu5GgooPDPRKJp7qKVOcjLTbevhuPmByfq8L91RR4Ux9vXo%2BVmE93BatvEFZVu4RuAJqMvxWXxsyF0aRhoOKDoL2aYfOqOSxyGunTLFRBxG1Wzp3eq5LSrUyPKfqUoCRLwTvnUBcxH7elRts%2BdOA7ghz%2F7zqcWIqiZE5zEN1tMnBVAD0JGRe7sWZkjl4fYY45caTMWJn%2B6LqJ%2FcetN7XnbV0zcSOoBH9rr4mTvJOCQj07WXDlNHrwP2eNIZ2s1ochVjZYyx0k6OEMixeTwCKz6nt5I%2Fgnh8bobV4QSWowyy%2FlsDJv9XJIuu9uU3U7rCdLvgYU7cZmEkey847ZlOyszDM7LzL0aGx%2BQWeK9ClaFKC7uuV79u3oG1aqRUehup%2Bk1wZSbc3jcQmJDmajCaCJM5xSrQI0rYhnzceRFueuMM3KnMIGOqUBJWU%2BMyNt8rJ1zotXyZcSRGWIukMKIRkug4yP2IsbT2s6Y5qdFkjqzeEpOcYE4jn3R%2FTzYONkXswf1vvltvULo9B2Wa4DWZE3CrZPibT4dBEKRYwTuSEFYLNLK3u2a4g7kWBDlCd3FavhUfU%2BU71d9IrH2Qzg%2BRsCGNoU4O3fSmuTSZh5Qk3osPQHZ9H7vjVwTqirT8tnL8B%2FCYIMXOUJPlLKm9fN&X-Amz-Signature=c11c18e05f450f822b2b490707aa017221cf1effe58a56d15a8dc2899ff71b11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UIGF2X%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHfBSmwBBLr%2FpH2j%2BEaNdNApMwP3EfgKH30r7TGhAHDgIgAU6MKBpj4b5MmS9qAzDYfnMiszQ6A7doPP6Eoogi%2FgoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMJEmZM1qGi0KO02CrcA3iyY2aFsizxRiV2RVPe%2B3o8IGQNP0eEtv9nbQa8UF5G8t6Rcefjw%2Bghzk%2Bs6%2FcD2ki%2FsIGXEK%2Ft0z5KTC4JFMWwwAHOi5Haw2aoSfyUfdT5cfGzJkvBYvxpyUj2JUzajFJJPJ3nX%2FPcoUzv0CmqGooMc4mhvnwTH469io%2BGDM9kORZjU016pzyCr5JTGWZMMJWO02m4KmoN1fjylzUcIoG%2FWR8npM6M1cQhxUgpmlB4KnYbQMGcZCDglN%2B5c5l58rdh2Unsxg2CGgm%2F543cM%2FOuJqH07a%2BD2MXT%2BZVvgz2B6qs9vPdjRd3tp9bI7V%2BF8s9YoMa2qdXatQ4QLURBz6UWcrcXoWpAQKzcIJiWFo7%2Fr%2BF1WXoRIVnkg3mlYYNMTTgFPQo4BqSXVMOBL4ipoie3A7r9lSoHvcLqD5IwKRZNma%2BHZasTyVCrGlWoJX5nCex1Ry7O%2BxEVAwdcZKz6oItqkDWhdfl96w62dapHHxsx%2BC%2B2yhQw4%2FroA2MpqqHe0uGMQE3Y9XDF4bQ9ZwQGQ6zmRL38jP4f%2FAvmbw0WFwXJBDKl4f3qodpsTe5DaIyWdYJ5i3U9Cwr6NiV1CFi4LRVg0gCt5wzeEIN5XxM1jbplqXvnhstxQTJ7b2pQMMTKnMIGOqUB5AZIK4Ok4XrKs4UXz4F1RczalO8xFI1uFnkuFPPf6oiVFnNGOhvkoufQAerDvbVgkeb6xpS08OwgHunmE4vwqId7GkReIN1EMA0ir9F0VbxbbrBp%2B6rOBCZ%2B%2Bx8u%2FLlXCDq0GpVFAaPFKVyqMfLHgYvAQj3SGXk5AUQyuYHVQyt9FFDWGSjEZMOHbG45Pm68z%2FbeCRoB%2FPOiA%2BS8UKAi9Vt5XORK&X-Amz-Signature=9bf8e0a5482ad37174aeafdfdf9b66fa05e421f6c167a822b0c98cca13e01e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJN5JRT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCSGm4NtZhFjTfiyf%2Bs5tU8EH0T%2FjcjYuRCuWuEUfNQIhAOHVSvPX9%2BUvTXYV6hgUiI%2B%2Bp1m57V%2BPzmsb404fJyKfKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj6AWqszdOIhz0%2BD4q3AOV6XSSQvSXVQA34em0Qvis2ySNm%2Bl0zEHlVgj74ielzz2MHYQNDc09Al3tX7zHOkjk40uL3PxPRvSJcE9X01m%2Bz2c2oAE6SMLT3jJf0br7hS7sg9QFCO7b9%2BVFQuJUcTEmX7HppF7GkP3BBgLzpDzmFh%2F%2BGo7pgzaWXYdJjpJTx9BU50s0gaG1hFxDtBp7xL%2Bo3lM9aX80UZouk7eDktG837OA8rD5gn8xDkJFAYbZwp3gLrx1wUbzcE8TLMd2O6gkrTAN6hI8Ix2%2FNe2%2Bs0YwKoNxTsb45gih06pOD6S5c9UoMCfFTxYrCcNkF%2B0WPeXVZuVWmauWVozdTO0qYpaU3vo0%2FgrLdXG1fP8mVE%2B27GaN%2B4h2NjyGM%2BtgZ%2Ft9nCJpxUWPu7j7cRdSIC%2BcZBXRxgsQqZvmZjCT%2FIk6hMNE6GqZC%2F3X8%2BBnysJPiw7HQN0mh2Hfxvcx3D3e5Y0L2BCTPHdiaFp%2BmSK%2BPJcWKu8dyb72rlvjSzuOg0Y5Gd7KlwNIACeQCEEF8OuVEr7txNTvRVhPkLxlBOMUTNztSl9h3VyhwGfPOZ5bRlLRgan1YKVN0O3qjMpvYT8EKdu0SeAw3ScWVQSdsorPtCz5EZI1vy7wsPFbSAouzpPYfjCCypzCBjqkAQ8iTlqA%2BdQ2eIwJKPKxxE8ch51TrGaCp75UkhhBtzfIH4W3kWGdHnFM4Zv2Cy8VYDgg5kGsIPj9g5U2MnT0%2BK3G%2B0SKMwPC5GsTRUZEz1O89ync94l15yuEYgduv%2BHXyR2ggG3Bc%2F9Ys2B1yLPplrGYVKKq%2FdaBTIf%2BaeTtEs%2BGgbyN%2BpwuDBXd7QGxHooNkcNsaojZn6ewiM9et2OxQ39z%2BOsw&X-Amz-Signature=68b8c23859e62deabd0be8b04ec3992ae4a679260f56fad34857c33358a43cef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
