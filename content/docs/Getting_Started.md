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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDBYHBD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC9iJ6Z17SmPFeSdPtAMmojRD%2FyDrOIqJr6i0QfOJB3mgIhAN00TzFMlyp0CxfX%2FfGU0tX5g5%2BRDQ%2BYkn8x88xkw%2F%2BjKv8DCEkQABoMNjM3NDIzMTgzODA1IgyYtacrPn%2F13fpL7ugq3AMyRKNZitktvbxbFMlFIhqbzMADKbn96s6iiHoVLq23xrz6z4yxoP8%2FIlI7QvHcR9iINNH%2Bp3pOKeu527%2BvoyhXcF4TZZ8hhrR13uqDD9clZL%2FwPF4oTG7883VikXRy3eREJVdjEXDcdKbMjBt%2BjD%2BoVJZBVMQkAYBNSgy1IrC1PSaNk8NLwYDY33ZNXVpWr%2Bj%2B0GCD8PuYeo0sgotYE12FGi7pyj3hKdDl1JM6P6CDwAfOQ4BqltKl%2BI1GWAFZIaZcO6pOT1zetzrafJ%2Fo8c8ZqBaYBY1SQ8gpT%2FoJwD59Eyml%2FxVZmOFq7GxLzqOMSq0GGutIyKcYGxlUzx07s8cHC%2BSwbbg8mKuk%2F2GHvkmkMdLDepV5lASUJ%2BbXZRQD0W5pKFuH1LiBmXKRrsgDIhmn4HPSHuYdza26UZlY%2FXGyKJWV2gqdbfLLzhuzKCAB0KxjD5KMEHUhgmj0VXCfB6fk0%2FQ36I8KSVbAFRIw42gzPodX6wwZhT3qZ0vB9ooOXBw8817jR2aoHWhHiBmlqtyPwviwfM0%2B7F%2BkXz4KN%2FBpZCm03wJvUpW2zqJJI%2FoeFr%2BpjNOhw65hyzdmOtJVAxg5p%2F5gcBnDeGvmI7j0kDsIlOWNnVQGSBX0M06FFTDRhYfCBjqkAbHyvFF1AC9fVji96i7laGNcq2KqvWcoHWihWi%2Bbe6YIbmPW86%2FLapReKE0IgbrfUvO4cuDcENWPYPa3GLaFd9zzVmMgvloAqkuNUoJrG9eoLJBmOjzg7w5OvpUzBRELHy%2BYjYkjpRrmsEpTVhpHGmpizQsCr73O6bGhJWsa8JMdScZGeKyVE4zb7p%2BrVbyL0DutXtJBRTNOgUpY%2FURJ1TefT4b%2F&X-Amz-Signature=7cc57f7c3f5987d830c73a66d4aaa48f2545299cead004ccc8e7d71953be05d9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDBYHBD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC9iJ6Z17SmPFeSdPtAMmojRD%2FyDrOIqJr6i0QfOJB3mgIhAN00TzFMlyp0CxfX%2FfGU0tX5g5%2BRDQ%2BYkn8x88xkw%2F%2BjKv8DCEkQABoMNjM3NDIzMTgzODA1IgyYtacrPn%2F13fpL7ugq3AMyRKNZitktvbxbFMlFIhqbzMADKbn96s6iiHoVLq23xrz6z4yxoP8%2FIlI7QvHcR9iINNH%2Bp3pOKeu527%2BvoyhXcF4TZZ8hhrR13uqDD9clZL%2FwPF4oTG7883VikXRy3eREJVdjEXDcdKbMjBt%2BjD%2BoVJZBVMQkAYBNSgy1IrC1PSaNk8NLwYDY33ZNXVpWr%2Bj%2B0GCD8PuYeo0sgotYE12FGi7pyj3hKdDl1JM6P6CDwAfOQ4BqltKl%2BI1GWAFZIaZcO6pOT1zetzrafJ%2Fo8c8ZqBaYBY1SQ8gpT%2FoJwD59Eyml%2FxVZmOFq7GxLzqOMSq0GGutIyKcYGxlUzx07s8cHC%2BSwbbg8mKuk%2F2GHvkmkMdLDepV5lASUJ%2BbXZRQD0W5pKFuH1LiBmXKRrsgDIhmn4HPSHuYdza26UZlY%2FXGyKJWV2gqdbfLLzhuzKCAB0KxjD5KMEHUhgmj0VXCfB6fk0%2FQ36I8KSVbAFRIw42gzPodX6wwZhT3qZ0vB9ooOXBw8817jR2aoHWhHiBmlqtyPwviwfM0%2B7F%2BkXz4KN%2FBpZCm03wJvUpW2zqJJI%2FoeFr%2BpjNOhw65hyzdmOtJVAxg5p%2F5gcBnDeGvmI7j0kDsIlOWNnVQGSBX0M06FFTDRhYfCBjqkAbHyvFF1AC9fVji96i7laGNcq2KqvWcoHWihWi%2Bbe6YIbmPW86%2FLapReKE0IgbrfUvO4cuDcENWPYPa3GLaFd9zzVmMgvloAqkuNUoJrG9eoLJBmOjzg7w5OvpUzBRELHy%2BYjYkjpRrmsEpTVhpHGmpizQsCr73O6bGhJWsa8JMdScZGeKyVE4zb7p%2BrVbyL0DutXtJBRTNOgUpY%2FURJ1TefT4b%2F&X-Amz-Signature=7e2759f3e911a0626cbe3a54d69ade99bb6b806e07b1a949e46ac0d4319e789b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDBYHBD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC9iJ6Z17SmPFeSdPtAMmojRD%2FyDrOIqJr6i0QfOJB3mgIhAN00TzFMlyp0CxfX%2FfGU0tX5g5%2BRDQ%2BYkn8x88xkw%2F%2BjKv8DCEkQABoMNjM3NDIzMTgzODA1IgyYtacrPn%2F13fpL7ugq3AMyRKNZitktvbxbFMlFIhqbzMADKbn96s6iiHoVLq23xrz6z4yxoP8%2FIlI7QvHcR9iINNH%2Bp3pOKeu527%2BvoyhXcF4TZZ8hhrR13uqDD9clZL%2FwPF4oTG7883VikXRy3eREJVdjEXDcdKbMjBt%2BjD%2BoVJZBVMQkAYBNSgy1IrC1PSaNk8NLwYDY33ZNXVpWr%2Bj%2B0GCD8PuYeo0sgotYE12FGi7pyj3hKdDl1JM6P6CDwAfOQ4BqltKl%2BI1GWAFZIaZcO6pOT1zetzrafJ%2Fo8c8ZqBaYBY1SQ8gpT%2FoJwD59Eyml%2FxVZmOFq7GxLzqOMSq0GGutIyKcYGxlUzx07s8cHC%2BSwbbg8mKuk%2F2GHvkmkMdLDepV5lASUJ%2BbXZRQD0W5pKFuH1LiBmXKRrsgDIhmn4HPSHuYdza26UZlY%2FXGyKJWV2gqdbfLLzhuzKCAB0KxjD5KMEHUhgmj0VXCfB6fk0%2FQ36I8KSVbAFRIw42gzPodX6wwZhT3qZ0vB9ooOXBw8817jR2aoHWhHiBmlqtyPwviwfM0%2B7F%2BkXz4KN%2FBpZCm03wJvUpW2zqJJI%2FoeFr%2BpjNOhw65hyzdmOtJVAxg5p%2F5gcBnDeGvmI7j0kDsIlOWNnVQGSBX0M06FFTDRhYfCBjqkAbHyvFF1AC9fVji96i7laGNcq2KqvWcoHWihWi%2Bbe6YIbmPW86%2FLapReKE0IgbrfUvO4cuDcENWPYPa3GLaFd9zzVmMgvloAqkuNUoJrG9eoLJBmOjzg7w5OvpUzBRELHy%2BYjYkjpRrmsEpTVhpHGmpizQsCr73O6bGhJWsa8JMdScZGeKyVE4zb7p%2BrVbyL0DutXtJBRTNOgUpY%2FURJ1TefT4b%2F&X-Amz-Signature=ecc88c677f77bd1866155cec34b36b87a0ce509eb0d99990f023614d307415d1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ5EWEGJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDou8qPBBHhnVCqpeAvYgZ0GyDDrGNyDfHr38sLWT%2FiOgIgFJoHgr%2Fwqj%2BJ0BP1nBf3a6trVR1wHNzTQR7AezjMQIgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNQy4koRBOtrjeI1FSrcA3h9exYirMWzQFm2uira7h1p6T8hlk9n5zDcK0BR1BKq%2BrwL7ai%2BZz9%2B9Q4wcC7v8LGLyY3om1fUYRpSirmjX4OcW7WTrYGJ1pThhUutSerzSRZLso4t%2FIwLSdMkJmy8RwdoI2mitaJxoOy3uHza17CZI%2BPY%2FBeR75TBjMyL%2Bd3PIjJR7i6UkxtSwB5hehzVE96SYRIYUQMz%2BMXqlKRrzv9HO5R%2FjObgrqOZQ5NkRcxsii9gr%2F0%2F7eb3ydzvdASOA98q3jobSJC4KqqQ%2B7nY3dGB%2FZ26Rnj%2FSMR%2F%2FLp%2FtS7SaWaPK6aLMuP7Zg2DprivWqOBzwuYSNdBfXkFbw%2F5a9yyEzuBz8dRoExrPC02qiIRh75ah1C0QmdcyQputki%2BvgQ6dHB%2BUQa1aUCkbgiXS%2FJDXPlo4W9H2KX7HbFN3R1JMD3ngdoOiq5Z%2FnqZFvwIB0s437saSY4kKijq76jOIC%2FjGQ%2BDQoezqF3%2FybUAGYY%2FFsCO53gW9QDfLTiZjb7YgPwXUK0fQi73FT2zWILd8tQf1oIuDHHtH%2FyqHHdOCJuDBMmxe%2Bf2P%2BMmCCSB4rNcbKOtflRZnimKaPTiu2u2S5A2VyEg0IXli%2FNTgxTcgbvaXHnAnSfOL8mhNa12MP%2BEh8IGOqUBI%2BL%2B262mmEcLqVKp8Tn6J8Fk8yQUOhK8f4iEt6YJtva21%2F7kARUwJe%2BqY%2FV%2FVumEtuJTXTDrSzG2HGtXMY0fGqCgJucLenj43rCs3uWZVrxLgpvOyAvwzvDRWM1M3sjzBMvQ1isKA31ijQIFQdcZcylvsHVU71o4JiQg7TtugNsyPAQ3p62xjld00kzqx7a4NpBsRya4XwkcRlcfaPOZu1%2Blr%2BWq&X-Amz-Signature=3c6a3ad4771fdd5ba0a5090ce8a025a280ea49bed148becba7c93caf2044070f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2B3SI3Z%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDoNyoL8ziTjUxuxb6JvI5rvDYcTFk7VoKU1w%2FNKHJ5JgIhAOIKCKKK%2Fm0Usy8QPGZf5d49wktQppfwyGXY39MsKVcqKv8DCEkQABoMNjM3NDIzMTgzODA1IgzAiJQfQc7%2F2k2pyJ8q3AMYAXlOOrn7aI3yRe372OwTjmcyFx7FKFWXWYPQhpuU5RsW5mhRiRBZ0J0N7TbbIosI1tpDibk96Bv%2FzwxmjjX3pzaiXN9DYapPrTcwt0PH0KtlBrNLgEy%2FguWOGfNMGoFjbhKpgUXV%2Fg2PfuqlTrMaQT%2FBrf1sfwhXtuwhDtMUw3hOo%2F%2FG5gi%2BhcxZ2oEVRmAYqb04v%2FJMTM1B7e0GY2udigviwOPNaIG1cGn8mtFIocNb32LiTFLVy0863umOWLWGN1F31fXxquxH4rS0yv4DtOw41P00MdCfD7OJGZJe7sbgHGA5%2FVtRaRlDmNSGjRDXSRed0bbxAQAtzHyCH%2BShEf9icxbx4xhrlaqyYGm8I%2FRHjsOEcO%2BjaPS%2FNDzH5wAe%2BLUaEs4IF2KiqzWts%2FEyDAOst3S9ImzUE9mdgH9Cg%2FQASDb88qHxABrquPlPDE4YCSn74CA8OWulK6zA7tgB7DER%2FICBU5ty1TWgc05BkvqVKzb18dlbSLE%2FNFgiz3vEcXRvwdIt9DMKf4T5y%2FMl973V4NifQ%2B1Wd%2BKT%2Bqhj1DJOcShKM%2FGLsy2qCcLNKrDiXsDE8cIeVOT%2BMHgnO2oXa2nIQvPet42JlMMEMz%2B%2F1D0Gfp2HyH7zyssF5DD3hIfCBjqkAQIxxri8Oo9fM5LtJ0vT9%2Bnp%2B4ucTtpcF4tQus9o4eZFgCd69DcWBhawnGXV%2F1UL%2B9suQyhDdc63jK7rU0IW5n1RfMhRydHwRy48nTCnYMEuusm5dcUq3EnwusWW5oqUHxkumjfrgQMMuWU1y%2BjfRd9hcJSxl84a7FJELKNu6YfomfuEohpblc4Hr8jjDCLmxZToBEp1eDL2YnwdSb7Tkyg5pC7F&X-Amz-Signature=171ecae2bf8fd7157b6bd666bdb4eefba66a26b6777d62ac45a2a9278b30140a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDBYHBD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC9iJ6Z17SmPFeSdPtAMmojRD%2FyDrOIqJr6i0QfOJB3mgIhAN00TzFMlyp0CxfX%2FfGU0tX5g5%2BRDQ%2BYkn8x88xkw%2F%2BjKv8DCEkQABoMNjM3NDIzMTgzODA1IgyYtacrPn%2F13fpL7ugq3AMyRKNZitktvbxbFMlFIhqbzMADKbn96s6iiHoVLq23xrz6z4yxoP8%2FIlI7QvHcR9iINNH%2Bp3pOKeu527%2BvoyhXcF4TZZ8hhrR13uqDD9clZL%2FwPF4oTG7883VikXRy3eREJVdjEXDcdKbMjBt%2BjD%2BoVJZBVMQkAYBNSgy1IrC1PSaNk8NLwYDY33ZNXVpWr%2Bj%2B0GCD8PuYeo0sgotYE12FGi7pyj3hKdDl1JM6P6CDwAfOQ4BqltKl%2BI1GWAFZIaZcO6pOT1zetzrafJ%2Fo8c8ZqBaYBY1SQ8gpT%2FoJwD59Eyml%2FxVZmOFq7GxLzqOMSq0GGutIyKcYGxlUzx07s8cHC%2BSwbbg8mKuk%2F2GHvkmkMdLDepV5lASUJ%2BbXZRQD0W5pKFuH1LiBmXKRrsgDIhmn4HPSHuYdza26UZlY%2FXGyKJWV2gqdbfLLzhuzKCAB0KxjD5KMEHUhgmj0VXCfB6fk0%2FQ36I8KSVbAFRIw42gzPodX6wwZhT3qZ0vB9ooOXBw8817jR2aoHWhHiBmlqtyPwviwfM0%2B7F%2BkXz4KN%2FBpZCm03wJvUpW2zqJJI%2FoeFr%2BpjNOhw65hyzdmOtJVAxg5p%2F5gcBnDeGvmI7j0kDsIlOWNnVQGSBX0M06FFTDRhYfCBjqkAbHyvFF1AC9fVji96i7laGNcq2KqvWcoHWihWi%2Bbe6YIbmPW86%2FLapReKE0IgbrfUvO4cuDcENWPYPa3GLaFd9zzVmMgvloAqkuNUoJrG9eoLJBmOjzg7w5OvpUzBRELHy%2BYjYkjpRrmsEpTVhpHGmpizQsCr73O6bGhJWsa8JMdScZGeKyVE4zb7p%2BrVbyL0DutXtJBRTNOgUpY%2FURJ1TefT4b%2F&X-Amz-Signature=c7eae6974976142468110951bcc709a0fa6472456f2cdd284c7202478c9eed15&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
