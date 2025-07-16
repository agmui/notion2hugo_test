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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYWMQW3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHqwM1TqKMO5ZCg1av1cfPWi9BGdUEzbdT2I63m7GhgcAiEA7uIQAmGPHwTkj9weiLknG%2Fq2DgsDGq%2BmDa%2Fd0QZkxIwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFg4Q88jkGD3nDKByyrcA8hH%2FaIzYl6ap66%2FpUNxIGAg6gCdnadgDWLiol0osCAxMsjub%2Bg4oCTNVXnElkQEOMdzVsZc1CNDeuuGbJ1plZryADHsRYGZe9GjUlGeS%2FokWRXA16EeiBYZZP3KndAGPd9y%2Fyz%2FDX3XHuz%2ByqvkCCPQSR2HCGbYvSQVIzodQfv%2Fjhdqwac5UyW1Db41%2BgpWE%2FRYPAUzj6mZw%2BhvLW1kH0mryhvH2b8vQnqLZUb13AGY5CJNUE8qALwCjLcow0c9Eu3ZlXXke058ZBLmf1ArkXgKvuxl2wESfEQVP%2BAPuCP3V9WX20VRd9DycuOS5oiooEXw8MY3tDfYU83%2FZekxx547vFt5ZTwqMGUa4Avrb4SkM5fg690EdqWWP5mlMrz9QRMunms94mPP%2B3OtUxd6JuSJ4d8uKWliDgCvKNrJ68VwdDpM8Y%2Bbt5ZyZFSgaAj088BmZrUUn90HDHGktv3koDCQpV2WmcywG4LQty4QLIC1nfGQIbFz%2BM60OfvK1cWKsXYqMfgVrXOS8yhj1LARZ%2FsHJSRySrtU0EGY2fx4K5oowFMVC0CKgPo99Y5VesZ4rhy3IvnOddGWeKDHVsehfB%2FGOnnI%2F67qJexKwJ6VA0u3jAUT%2FADXuYvD2MY%2BMObn3cMGOqUBnlfp%2Bm1nctlfTZfPMZIip4BFSwPf1ZSx82j4LIZ1Eum6PhKzI1gCpmB7MXUoowlQ%2F2BTjpGhkUWVlvRRjEW0nmdOW9fg4O8i%2BuQK1yiTQvRXELej02%2BPLAlsm73gXo02QrRxdO1O3SDYup2tGt%2B1xK4JauDdpeL8Cw5p%2BPunFq0j7ZZnmOT0EN9fgP4M2YiSSFyYiJtW76InxWu0rrc%2F920bDVKM&X-Amz-Signature=8e3566a55578b1ff7c27f6b661394c4fb702fb9c88708dc7b8f44275722ff5b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYWMQW3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHqwM1TqKMO5ZCg1av1cfPWi9BGdUEzbdT2I63m7GhgcAiEA7uIQAmGPHwTkj9weiLknG%2Fq2DgsDGq%2BmDa%2Fd0QZkxIwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFg4Q88jkGD3nDKByyrcA8hH%2FaIzYl6ap66%2FpUNxIGAg6gCdnadgDWLiol0osCAxMsjub%2Bg4oCTNVXnElkQEOMdzVsZc1CNDeuuGbJ1plZryADHsRYGZe9GjUlGeS%2FokWRXA16EeiBYZZP3KndAGPd9y%2Fyz%2FDX3XHuz%2ByqvkCCPQSR2HCGbYvSQVIzodQfv%2Fjhdqwac5UyW1Db41%2BgpWE%2FRYPAUzj6mZw%2BhvLW1kH0mryhvH2b8vQnqLZUb13AGY5CJNUE8qALwCjLcow0c9Eu3ZlXXke058ZBLmf1ArkXgKvuxl2wESfEQVP%2BAPuCP3V9WX20VRd9DycuOS5oiooEXw8MY3tDfYU83%2FZekxx547vFt5ZTwqMGUa4Avrb4SkM5fg690EdqWWP5mlMrz9QRMunms94mPP%2B3OtUxd6JuSJ4d8uKWliDgCvKNrJ68VwdDpM8Y%2Bbt5ZyZFSgaAj088BmZrUUn90HDHGktv3koDCQpV2WmcywG4LQty4QLIC1nfGQIbFz%2BM60OfvK1cWKsXYqMfgVrXOS8yhj1LARZ%2FsHJSRySrtU0EGY2fx4K5oowFMVC0CKgPo99Y5VesZ4rhy3IvnOddGWeKDHVsehfB%2FGOnnI%2F67qJexKwJ6VA0u3jAUT%2FADXuYvD2MY%2BMObn3cMGOqUBnlfp%2Bm1nctlfTZfPMZIip4BFSwPf1ZSx82j4LIZ1Eum6PhKzI1gCpmB7MXUoowlQ%2F2BTjpGhkUWVlvRRjEW0nmdOW9fg4O8i%2BuQK1yiTQvRXELej02%2BPLAlsm73gXo02QrRxdO1O3SDYup2tGt%2B1xK4JauDdpeL8Cw5p%2BPunFq0j7ZZnmOT0EN9fgP4M2YiSSFyYiJtW76InxWu0rrc%2F920bDVKM&X-Amz-Signature=2b48e05c69203ccb7f88682ee7473fbfd233471cbb3eaaffd9b9e6c7d7e07d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYWMQW3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHqwM1TqKMO5ZCg1av1cfPWi9BGdUEzbdT2I63m7GhgcAiEA7uIQAmGPHwTkj9weiLknG%2Fq2DgsDGq%2BmDa%2Fd0QZkxIwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFg4Q88jkGD3nDKByyrcA8hH%2FaIzYl6ap66%2FpUNxIGAg6gCdnadgDWLiol0osCAxMsjub%2Bg4oCTNVXnElkQEOMdzVsZc1CNDeuuGbJ1plZryADHsRYGZe9GjUlGeS%2FokWRXA16EeiBYZZP3KndAGPd9y%2Fyz%2FDX3XHuz%2ByqvkCCPQSR2HCGbYvSQVIzodQfv%2Fjhdqwac5UyW1Db41%2BgpWE%2FRYPAUzj6mZw%2BhvLW1kH0mryhvH2b8vQnqLZUb13AGY5CJNUE8qALwCjLcow0c9Eu3ZlXXke058ZBLmf1ArkXgKvuxl2wESfEQVP%2BAPuCP3V9WX20VRd9DycuOS5oiooEXw8MY3tDfYU83%2FZekxx547vFt5ZTwqMGUa4Avrb4SkM5fg690EdqWWP5mlMrz9QRMunms94mPP%2B3OtUxd6JuSJ4d8uKWliDgCvKNrJ68VwdDpM8Y%2Bbt5ZyZFSgaAj088BmZrUUn90HDHGktv3koDCQpV2WmcywG4LQty4QLIC1nfGQIbFz%2BM60OfvK1cWKsXYqMfgVrXOS8yhj1LARZ%2FsHJSRySrtU0EGY2fx4K5oowFMVC0CKgPo99Y5VesZ4rhy3IvnOddGWeKDHVsehfB%2FGOnnI%2F67qJexKwJ6VA0u3jAUT%2FADXuYvD2MY%2BMObn3cMGOqUBnlfp%2Bm1nctlfTZfPMZIip4BFSwPf1ZSx82j4LIZ1Eum6PhKzI1gCpmB7MXUoowlQ%2F2BTjpGhkUWVlvRRjEW0nmdOW9fg4O8i%2BuQK1yiTQvRXELej02%2BPLAlsm73gXo02QrRxdO1O3SDYup2tGt%2B1xK4JauDdpeL8Cw5p%2BPunFq0j7ZZnmOT0EN9fgP4M2YiSSFyYiJtW76InxWu0rrc%2F920bDVKM&X-Amz-Signature=521b8ad9fe4a161ebd2fd96bfd2eb666438cd6b8393a30682ed15e88d9ba1999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYEYQJ5P%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHEKGK9YjnItqZPddfohlR7h2tibikHbqT20Ctc%2Fp1G5AiEAiNDCtazlNYXygkrvKDmjBmFpS8a1kn%2Bp5JhUAaKOToYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCvddM%2F0F%2Bm%2BsdL9rircA7o%2FKPoRktc6Qtyc4ogvkXAFqrO8USZwp6q9PauxnARUqhexpeQ4jIqYS65Nww%2BFgwmGT3o5gOgrJhxcsjlj8rZoB6YmGiu2Y5r4kBo36BvAI7MuBXWhe3TrUjMhUrw9kzref7zLlMwTcTkCS0QvT8k6YgQjwWWOLzxQVRWv9uhCv1UI2ekMKIyft0oLk29nZlDvnVxLA%2BWQSqq36DmZMCllmauM8xSuoC9aZTTQab%2FLoGNkTbrBs1hAr4sZD%2FCgA21yLoGWBEui9glvA60uuhwWPJ3eg6nv1mApIOA3NuyN1WxcUHnRlhagVl453HZzT00Bcz5Ku0DdkOskDLdyPv4H8C4YqXfy3KUDd7Wtfi6Wg1rG1M%2BfnbAhv3R7PMO4aW%2FhBNd6Xe6hmfRlsnlHQprxQogMMoSjhI8JQleqBESwr0kpmqm7QAGpGj6%2BdkzM%2FCSfWmpaN4RAdYRuCjgdA%2Fs7Y0NEB6rXyRH0Ll2ahYKl1zHEUajD6seYRwiNgxLvTAapkkunDUkI4VzOc7JNLCtKBpct6LuqT3bl%2FoHwg%2BAWqC3Zf0LrgQypoeWBh2JYAXpN%2BUPMNAlUkqReppSBQXWpmIZ%2F%2F4YV%2BxQJUgBcDkh9jxHm9bhteKe0INwoMIDo3cMGOqUBQneBK5h1QeDBsUDO7myDPi0Tk%2FALe9eq8fG%2BnsQ88E0iXB4eKV7wMNabL2akMfJgwt4YjzrM2ow1i0P3zrbe7VxI1cQ5o0a38DQc%2BHk07flJXEPKzRRAELGYJ1Mg%2B5RwBwTiB%2B%2BHwECgeirJhpvXO3qFudA290YHZp4nqCfjdHVeqE4%2BEKcOAcn%2FSli%2BfWTmDhu3HLvGoZmB4cHTY2s541faHJc%2F&X-Amz-Signature=2815fb694c8a4e63ce1aab1939e8414ec3def3ca6c80ec1b48bf459559df9574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCGQPCSR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCICigHuAIs0%2FTdnXCM1H0FL30TMC3zzuf6ASyNC7YFvbGAiAG4o5uyICgoaT5MzF1QPnBhmGsUZ0fbkWn8hMGou0OWyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMA0QzTlBN2%2BDdCA%2FpKtwDpd0jmH49K0DNCVf4hkJA6PWe9k9tZV9MS2TgJGn8g4dXs6sR50sy6cpoL4AuIA90WaXcywW%2FVJkAsBCMLI6I76yLFcBn%2Bjl%2BwQHb8mVX5859iKjCc5y67gnfiBxHWXS8t%2FX69IFLsYWpXxmMMEpmfpJ6uqR7FQxx9Xnnwp5nKRBHpFc7HUxHziYMSEYHys2ofHb7O2ynfwlhevc41KjoUwd1arN2ykg29LutoYWr%2Fsc3slY5WKIRhzqAkqsAzbQbjCe5sANSi4ac66%2BJ1EtuC%2Bi5KiubnxfAhBNzAtUmeZGlQxN2BSwO6FnDVHkc1tPxAUzf0e5FIwNc05zNAztJmYZjy2M1tfi95Y3jBfHg95Mgp4U9iubec7PgeyKqf6VIlxObjpGi%2BkHIcrSwNNTZADqQO%2BB2YZ0CHX5WXf0%2F%2BQOW9fq7pRyLzRiqaf2C5UHITbzTwPa5GjTG4r6a9F1bsqosYWy2R3%2FtWfyCTID1PyK01G3qCfsAkLriqLkD0F3AEVEdp%2FHGw94rgZxWE49kGkLoevCgvWZxAVXuHqUb5xuy%2B7K9G%2BopNsSRBbhNa48pT%2Frk264a25OLEQku8AnvyQNt4Q5N5%2B%2B%2BWyYWyabVz%2Fa3dqkjnyVAGKbK0v0wy%2BjdwwY6pgE4Qekfi6TMLK%2B28wknbTMXGz7gCiVL%2B2CRmmMgJ%2Bd0vzwU3I0hi2nI%2BwWRn2MP6MDG2Y%2FTthFR92bAsNzYjgV7eoC8%2BPItl2G3hpVY5%2BeljC%2F8wkovDCJbRzsbgN2h2zHt7yimAIZRIvyos1%2Fqua7wafWtPzt8aZd76R99RkoP0mzYxcI8ROpmUVYELz%2Fiia7TKYmDAioH7kMrzn97qvVYhX4iJSu3&X-Amz-Signature=aa0109ca1ee70713a8d863c921bea8d9cb0747c4688f1bf9ecfda8e35d80fd39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYWMQW3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHqwM1TqKMO5ZCg1av1cfPWi9BGdUEzbdT2I63m7GhgcAiEA7uIQAmGPHwTkj9weiLknG%2Fq2DgsDGq%2BmDa%2Fd0QZkxIwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFg4Q88jkGD3nDKByyrcA8hH%2FaIzYl6ap66%2FpUNxIGAg6gCdnadgDWLiol0osCAxMsjub%2Bg4oCTNVXnElkQEOMdzVsZc1CNDeuuGbJ1plZryADHsRYGZe9GjUlGeS%2FokWRXA16EeiBYZZP3KndAGPd9y%2Fyz%2FDX3XHuz%2ByqvkCCPQSR2HCGbYvSQVIzodQfv%2Fjhdqwac5UyW1Db41%2BgpWE%2FRYPAUzj6mZw%2BhvLW1kH0mryhvH2b8vQnqLZUb13AGY5CJNUE8qALwCjLcow0c9Eu3ZlXXke058ZBLmf1ArkXgKvuxl2wESfEQVP%2BAPuCP3V9WX20VRd9DycuOS5oiooEXw8MY3tDfYU83%2FZekxx547vFt5ZTwqMGUa4Avrb4SkM5fg690EdqWWP5mlMrz9QRMunms94mPP%2B3OtUxd6JuSJ4d8uKWliDgCvKNrJ68VwdDpM8Y%2Bbt5ZyZFSgaAj088BmZrUUn90HDHGktv3koDCQpV2WmcywG4LQty4QLIC1nfGQIbFz%2BM60OfvK1cWKsXYqMfgVrXOS8yhj1LARZ%2FsHJSRySrtU0EGY2fx4K5oowFMVC0CKgPo99Y5VesZ4rhy3IvnOddGWeKDHVsehfB%2FGOnnI%2F67qJexKwJ6VA0u3jAUT%2FADXuYvD2MY%2BMObn3cMGOqUBnlfp%2Bm1nctlfTZfPMZIip4BFSwPf1ZSx82j4LIZ1Eum6PhKzI1gCpmB7MXUoowlQ%2F2BTjpGhkUWVlvRRjEW0nmdOW9fg4O8i%2BuQK1yiTQvRXELej02%2BPLAlsm73gXo02QrRxdO1O3SDYup2tGt%2B1xK4JauDdpeL8Cw5p%2BPunFq0j7ZZnmOT0EN9fgP4M2YiSSFyYiJtW76InxWu0rrc%2F920bDVKM&X-Amz-Signature=b743cca0598a9b768649c4155f7ee9e7be2b9e4bdae787774b6f1ee2f4f3a81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
