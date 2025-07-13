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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3STG2D7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWeJM7p3z9rXAhF8ZaF3pf3WqwVwW%2FzmYZfX578RJz5AiEAsGEpaCym3805fA7Mcdz%2FBDg8rnj8ne9W9BZhdSdzE0EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN15HMR0VrI8NuE7HSrcA2IYsBF651jiTVvcRe61R43JyrhKKsyHpJDS9CoTIHTzaO3SJ%2FdWBFE6wBrH3%2F776mHEPA6b8j6757c%2FNCJkwum7K2JDd6hpItFD6gqnQ8n8%2BPO1hw1u7kSjG9EXp2QxHIdBfIGYoOgES4468%2F21nMExY37Eyx3fQNDWL0gXKEDGeSnxGE4dUxxowRcfr9x3%2F9f9Rsw%2F3gtdSb93zKpUiZ6AnPoh3nQsShu1XeqO4NC3IwHXhH%2BB5JlE2rxhtFI4gloRNU2omND9p%2BWAahlp7eeJdCqqw6c1%2FGDUMCZpGI3Ls%2FzGecZK8k2s8sXyrBopxpefwewIyBGDtMg%2FEd813v4oJo43rltvZ15G1qfb7erPzNbZOkW2N68Y9TjG2xO%2BTeSap8ScWG8pZeA4AjqM982qzIxKld4VRX9FfGhAfrCAvWwkZGW06UUxTUR%2B0bPe9QrQd1x%2BsCuclQ%2FmkUWbc1yMu1urZQagjrmJzijLbvAsgnJRNleTGtYnwKPxFST0p0EkvSiUHzyZnBPC0OPfQvKMABBm1cnM47Gwe5PCowXIouPoyDceY0idjUjgQvcjMcxr2X53M9NUk50z8mK%2Bgwsg3KJerFfL%2FCZ8%2Bz5r5QFyNBeFFcCHOMBpRTruMJGlzcMGOqUBukj8s2HQYKE2sEughH4%2BUepgueNpSz5LRlsE0gTqCGvgKLd8XdewDwh3FjRMVvkthTSZgMLa3zaLiBoUgNVNfULZpZ8dYEsfrvg0WB1ZVEjV1HEIsTravwMzrMz7RTqCc%2FziFInLi4Erp7%2Fyf8%2BYnVaq14KNkxoh0L2b6XZhDv%2BzeRcBhiYf0O%2FtsTlQjcqnwS4iJ%2BVLI53LmqNb8mGkYej2tJcv&X-Amz-Signature=4a55178481a8d47005b5d3ea1fb476acce74ee17e342c6ac2103c858c3fd0b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3STG2D7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWeJM7p3z9rXAhF8ZaF3pf3WqwVwW%2FzmYZfX578RJz5AiEAsGEpaCym3805fA7Mcdz%2FBDg8rnj8ne9W9BZhdSdzE0EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN15HMR0VrI8NuE7HSrcA2IYsBF651jiTVvcRe61R43JyrhKKsyHpJDS9CoTIHTzaO3SJ%2FdWBFE6wBrH3%2F776mHEPA6b8j6757c%2FNCJkwum7K2JDd6hpItFD6gqnQ8n8%2BPO1hw1u7kSjG9EXp2QxHIdBfIGYoOgES4468%2F21nMExY37Eyx3fQNDWL0gXKEDGeSnxGE4dUxxowRcfr9x3%2F9f9Rsw%2F3gtdSb93zKpUiZ6AnPoh3nQsShu1XeqO4NC3IwHXhH%2BB5JlE2rxhtFI4gloRNU2omND9p%2BWAahlp7eeJdCqqw6c1%2FGDUMCZpGI3Ls%2FzGecZK8k2s8sXyrBopxpefwewIyBGDtMg%2FEd813v4oJo43rltvZ15G1qfb7erPzNbZOkW2N68Y9TjG2xO%2BTeSap8ScWG8pZeA4AjqM982qzIxKld4VRX9FfGhAfrCAvWwkZGW06UUxTUR%2B0bPe9QrQd1x%2BsCuclQ%2FmkUWbc1yMu1urZQagjrmJzijLbvAsgnJRNleTGtYnwKPxFST0p0EkvSiUHzyZnBPC0OPfQvKMABBm1cnM47Gwe5PCowXIouPoyDceY0idjUjgQvcjMcxr2X53M9NUk50z8mK%2Bgwsg3KJerFfL%2FCZ8%2Bz5r5QFyNBeFFcCHOMBpRTruMJGlzcMGOqUBukj8s2HQYKE2sEughH4%2BUepgueNpSz5LRlsE0gTqCGvgKLd8XdewDwh3FjRMVvkthTSZgMLa3zaLiBoUgNVNfULZpZ8dYEsfrvg0WB1ZVEjV1HEIsTravwMzrMz7RTqCc%2FziFInLi4Erp7%2Fyf8%2BYnVaq14KNkxoh0L2b6XZhDv%2BzeRcBhiYf0O%2FtsTlQjcqnwS4iJ%2BVLI53LmqNb8mGkYej2tJcv&X-Amz-Signature=912ed47b7bed62665e92f3ec688530b783655be2365b52df204313d4932e9bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3STG2D7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWeJM7p3z9rXAhF8ZaF3pf3WqwVwW%2FzmYZfX578RJz5AiEAsGEpaCym3805fA7Mcdz%2FBDg8rnj8ne9W9BZhdSdzE0EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN15HMR0VrI8NuE7HSrcA2IYsBF651jiTVvcRe61R43JyrhKKsyHpJDS9CoTIHTzaO3SJ%2FdWBFE6wBrH3%2F776mHEPA6b8j6757c%2FNCJkwum7K2JDd6hpItFD6gqnQ8n8%2BPO1hw1u7kSjG9EXp2QxHIdBfIGYoOgES4468%2F21nMExY37Eyx3fQNDWL0gXKEDGeSnxGE4dUxxowRcfr9x3%2F9f9Rsw%2F3gtdSb93zKpUiZ6AnPoh3nQsShu1XeqO4NC3IwHXhH%2BB5JlE2rxhtFI4gloRNU2omND9p%2BWAahlp7eeJdCqqw6c1%2FGDUMCZpGI3Ls%2FzGecZK8k2s8sXyrBopxpefwewIyBGDtMg%2FEd813v4oJo43rltvZ15G1qfb7erPzNbZOkW2N68Y9TjG2xO%2BTeSap8ScWG8pZeA4AjqM982qzIxKld4VRX9FfGhAfrCAvWwkZGW06UUxTUR%2B0bPe9QrQd1x%2BsCuclQ%2FmkUWbc1yMu1urZQagjrmJzijLbvAsgnJRNleTGtYnwKPxFST0p0EkvSiUHzyZnBPC0OPfQvKMABBm1cnM47Gwe5PCowXIouPoyDceY0idjUjgQvcjMcxr2X53M9NUk50z8mK%2Bgwsg3KJerFfL%2FCZ8%2Bz5r5QFyNBeFFcCHOMBpRTruMJGlzcMGOqUBukj8s2HQYKE2sEughH4%2BUepgueNpSz5LRlsE0gTqCGvgKLd8XdewDwh3FjRMVvkthTSZgMLa3zaLiBoUgNVNfULZpZ8dYEsfrvg0WB1ZVEjV1HEIsTravwMzrMz7RTqCc%2FziFInLi4Erp7%2Fyf8%2BYnVaq14KNkxoh0L2b6XZhDv%2BzeRcBhiYf0O%2FtsTlQjcqnwS4iJ%2BVLI53LmqNb8mGkYej2tJcv&X-Amz-Signature=3c3959c894613100620e136aa5848d2886e56b468ad283a0ceeac02cbf139fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U662V2H%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOl9XNyO%2BQ%2Fwk1YcbxcVlWYX9d0pw3z9Vbx50%2FJmAKSAiAkCb89PV5enxL1UJOb8AH4xsdzxQvYTR9aQNCtF%2BaBzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMOkDkebMSkb6DYMjEKtwDf%2FBSGcppBEqUtI%2FMZeQQYs%2BwPM0TLdGUcN1BJZxVfm68W4g%2B5ATFBiqncgcbD8fp33zkT%2FfZcvOBOA%2Bha6TNS9%2FX4oTDrL41Hruf5TQnHubh27om6k%2BitYgtQJA6fHyj1bUfenZnZLh9OCdKCaVEuokT8MlVxo6RIDWwnpY6MJV0GoUXKwk0xh4%2FWtb1c%2FIR0WXtAOnTUgmtbi58zgKlOkWHN4Pe8eCh7hJRZjvKlNQ1OBbLy7eMZbG9AcxkhM9rR0Zl%2FGaB1vQ6LBwBMn9o%2FzCjNrrRJIHLqMdQm5NQ7ws9YcaAsDT%2B714IG05%2FJX6GLHCmi4F5%2BKeFloU4uBh56cS5i7cizm9tIfEWEQp0m3l5dP%2FRp9hpso7nn%2FrO%2BNye1TDWWUKn0%2BkHSP5Vyja0j8XV%2BwzMcBISmhHzB%2Bm6SBziuhYr2Y0rVZwDo4gktpnB%2BsVQCK97CdYB28o5AY%2Fw%2BlR57Z%2F41eztdyLZvNDGKKuLJknZyfcAX73PP0mobESUMiXct14cGFtye6y6YxVoMjycXQyGPhq35YwD8zZG1yh6Z%2F%2B6JZVkjPj9YAePMPx%2FYttAlkB6k0FUCPMORN5mVab6ZwlZVdBIYXCxjQpD9vz3U3Kg0Y2nzuZn0Ngw5qTNwwY6pgH4lSM9BK9G8jZMfd3khwlZjDRQbYpPe2uxm32Ea17it8C%2B6PCUyWpKJ48DG%2BXtexNxiHRrmr7F2J4jPM6l%2FHB%2BrIFtEqFWjj0uzliYeS1h4dwt6YWEHL1FMNnUInIt5oFOOFyuRUCXp5xd5OS0opV9J7cSbPeBly5j5z518AXku1Ym%2FUccOsOleu8sLp7B6GNZogEZUUllPqHKtLaKh%2FZP4FOU8tKk&X-Amz-Signature=ca8df7d7f681ea9edf8b75c4a305cbcc7da5f274119a5b9c19e651715e62ebb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQ4A7NP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ%2Bc8znWGjkS%2FyGa9twVdUwhT3garU0aVWD%2FUv%2FAxuQQIgI4oL19txcmjHzVNte4oRueVNlD5o6r04lm%2B8auLTNAgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGy9yTfptFKsjiaWjircA0yF9PgNRj5A19fktxvpWayoEStorafQ2vJpBKp12ryr0y5kJIT4DQn5bQ%2Fa%2FkzGNKZ%2BD04e9pRQYNeeG18XyUE2IleCcFrS4kgIz1Gr1xZQTYAVWiWmISZANkYiD5oHfdF3miMABME%2Bz0uQdG5EimLbBQlLBzoU%2FndQ%2FF2vrqzUalCSib8%2B2lAA%2Bj3JJkEyEPoERbwkKOpWz3Jpqx8HcN0iQG7oTUNyNQfW2MuUbHH2I8dzV9gQG86Y4PizFysGZPx6T8MKi1aTWcfEwTwEBl66amB%2FpjELXWWFjRtR%2BVHmTQcNBki1pH5zpTHA4xgBnbqVH6AANJW7F%2FWYHLIAHMUmx111Ojzw8cXEiMoEwFp23dVZxD9%2F5CWQvEMaTbvEiUZBK04%2FZEfV5%2BKRIs022lV63XHuW4ZqpL%2Fkq8JgPuV6jY18mOlYt%2FXlaavGZXGH%2FE2BVLLPOOutCRF5FuJkExUoqYuItVdE7GKlE0Ma4pV6B0Ov3vl8BBgmoibuqhBjwNbzYXEU89DVnJzhHHfZgxLDFk1lrC0Wq2%2FmuwppDsQ2un4geQsJrUeoZyyP%2BjUiXFeqMV5GN4LcHHo%2B2VNEJJb%2FAchsLMB8N6dV2zns0VHCCCmkEmWV5Z3SVnOMMPejzcMGOqUBbZcqm2qes4OmoSy7N3h%2BYQ3Zb5%2B1SE6cyib%2ByBPKwpmK8LeHjA9zmfk57JkmiY5Uz8r%2B510kf85b8EAqECigH029Di9t%2Faf%2FiZQFFaE7IIg7z5EyrSjk7tMVNHlJmeZUAEkRT5hL0%2BziQMNH4O6bf49t2fmZhaq7OVTyE9OI%2BsBnHLxwQR32x%2BnIv3g05wo%2FczwELbxyVNwlGZgs0GgXaTno52Zl&X-Amz-Signature=e5b46e01b68548e3898380da53770f70b4d902ec7230a94254315aafa797c9f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3STG2D7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWeJM7p3z9rXAhF8ZaF3pf3WqwVwW%2FzmYZfX578RJz5AiEAsGEpaCym3805fA7Mcdz%2FBDg8rnj8ne9W9BZhdSdzE0EqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN15HMR0VrI8NuE7HSrcA2IYsBF651jiTVvcRe61R43JyrhKKsyHpJDS9CoTIHTzaO3SJ%2FdWBFE6wBrH3%2F776mHEPA6b8j6757c%2FNCJkwum7K2JDd6hpItFD6gqnQ8n8%2BPO1hw1u7kSjG9EXp2QxHIdBfIGYoOgES4468%2F21nMExY37Eyx3fQNDWL0gXKEDGeSnxGE4dUxxowRcfr9x3%2F9f9Rsw%2F3gtdSb93zKpUiZ6AnPoh3nQsShu1XeqO4NC3IwHXhH%2BB5JlE2rxhtFI4gloRNU2omND9p%2BWAahlp7eeJdCqqw6c1%2FGDUMCZpGI3Ls%2FzGecZK8k2s8sXyrBopxpefwewIyBGDtMg%2FEd813v4oJo43rltvZ15G1qfb7erPzNbZOkW2N68Y9TjG2xO%2BTeSap8ScWG8pZeA4AjqM982qzIxKld4VRX9FfGhAfrCAvWwkZGW06UUxTUR%2B0bPe9QrQd1x%2BsCuclQ%2FmkUWbc1yMu1urZQagjrmJzijLbvAsgnJRNleTGtYnwKPxFST0p0EkvSiUHzyZnBPC0OPfQvKMABBm1cnM47Gwe5PCowXIouPoyDceY0idjUjgQvcjMcxr2X53M9NUk50z8mK%2Bgwsg3KJerFfL%2FCZ8%2Bz5r5QFyNBeFFcCHOMBpRTruMJGlzcMGOqUBukj8s2HQYKE2sEughH4%2BUepgueNpSz5LRlsE0gTqCGvgKLd8XdewDwh3FjRMVvkthTSZgMLa3zaLiBoUgNVNfULZpZ8dYEsfrvg0WB1ZVEjV1HEIsTravwMzrMz7RTqCc%2FziFInLi4Erp7%2Fyf8%2BYnVaq14KNkxoh0L2b6XZhDv%2BzeRcBhiYf0O%2FtsTlQjcqnwS4iJ%2BVLI53LmqNb8mGkYej2tJcv&X-Amz-Signature=91c57e3c8203d7b1315a0ab4d982c22231e01e9e3b02215a6d91060c4a498afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
