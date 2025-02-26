---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM562WXS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDTwqFEMMuzUvSzWURaz12hx%2BhykVxQpC4WzDFuiAOcRAIhAMqX0w4mmnyPr3TCBCiSWB%2BX17KFZZJzUr4%2FP%2BkjWOszKv8DCF0QABoMNjM3NDIzMTgzODA1IgzpUOS0wkfyUH8i0X8q3AMLbl2T2fDrcrZW4VSOPnXdhGWT47yCS5N5WY26wfBhKwfnwxGMEro4CKYXrKo76r35fMaC7iHCnMIZ6dHAyy%2BvKDp8%2FqtC48UrUhd8DmuByxhxhYHtNI95AJIC0SmQy%2BE86hyjg7r%2Fo1EsJWzXgsnndT43BDf02z12hy5TVFwMVaA2HbiHr4WBGQ7UILCHsk1%2FyqHsZotuAnHPsvznI%2FitFvbAdMBsSUOTVz5xsomkg3Ug7%2BX5G%2B2ZpJHADv0qjC006bhR5NketQmvluVwGmSDTuc8SEAn8ZpdKmy%2F%2FzUIuKccZL5HoIMQxf%2BVYF4i%2Fet25i5Rzezp13dp4Rgbqor3d0sKC7IQF7rLQEmXsUZLDMOKpIKOkPZJge3aQlNsk%2BeRvmT%2Fh68aobK%2Bsn2hhnYyjvFclA%2FBclLWpe4juc%2B3h50NvjU5LCMAaOfGX5GQSZgsB4d%2FeuBM1yKLYhUB42rORQrjzjLLUjgkpNRJxOqh9OQ%2FqTn3thZAAeHGIPQoArsC2KnzwJGg8iAw%2BGXqdODbKcg%2BUhePNpOicpKIe%2BkMOs5NnEGz89%2Fgahrkmn7ywIQhtznV9LsO5wzLC3RpYeJp9nEV2SVLgP7Rdp8LYKUGDzCDEa2e%2F13hwmRa3TCFiPy9BjqkAbOdb4UvNSYXc21Ai1uVv4RXWjZIIfGikrqTWGghKuR9sl6%2BydexFhg5uc00wZOGCxPt%2Fcb4lwQN2hVSZtZjLnpUvRRQuJhV6CIj6LZ%2BBII4QG%2Bbv7qB2T%2FwJuSv4WQEICjMksRxpfVa6rwM%2BqYM1LmtQ5lRiBq0rY9TvsnINfOkHMgALPufvE8ZR7rWJvypP%2ByIxMAl0xKFamaX%2FnvKYL2IEPYg&X-Amz-Signature=a12a58bb7018809cac79fd949c18280b7fcf30af5f514282c3ac665ee6f823d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM562WXS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDTwqFEMMuzUvSzWURaz12hx%2BhykVxQpC4WzDFuiAOcRAIhAMqX0w4mmnyPr3TCBCiSWB%2BX17KFZZJzUr4%2FP%2BkjWOszKv8DCF0QABoMNjM3NDIzMTgzODA1IgzpUOS0wkfyUH8i0X8q3AMLbl2T2fDrcrZW4VSOPnXdhGWT47yCS5N5WY26wfBhKwfnwxGMEro4CKYXrKo76r35fMaC7iHCnMIZ6dHAyy%2BvKDp8%2FqtC48UrUhd8DmuByxhxhYHtNI95AJIC0SmQy%2BE86hyjg7r%2Fo1EsJWzXgsnndT43BDf02z12hy5TVFwMVaA2HbiHr4WBGQ7UILCHsk1%2FyqHsZotuAnHPsvznI%2FitFvbAdMBsSUOTVz5xsomkg3Ug7%2BX5G%2B2ZpJHADv0qjC006bhR5NketQmvluVwGmSDTuc8SEAn8ZpdKmy%2F%2FzUIuKccZL5HoIMQxf%2BVYF4i%2Fet25i5Rzezp13dp4Rgbqor3d0sKC7IQF7rLQEmXsUZLDMOKpIKOkPZJge3aQlNsk%2BeRvmT%2Fh68aobK%2Bsn2hhnYyjvFclA%2FBclLWpe4juc%2B3h50NvjU5LCMAaOfGX5GQSZgsB4d%2FeuBM1yKLYhUB42rORQrjzjLLUjgkpNRJxOqh9OQ%2FqTn3thZAAeHGIPQoArsC2KnzwJGg8iAw%2BGXqdODbKcg%2BUhePNpOicpKIe%2BkMOs5NnEGz89%2Fgahrkmn7ywIQhtznV9LsO5wzLC3RpYeJp9nEV2SVLgP7Rdp8LYKUGDzCDEa2e%2F13hwmRa3TCFiPy9BjqkAbOdb4UvNSYXc21Ai1uVv4RXWjZIIfGikrqTWGghKuR9sl6%2BydexFhg5uc00wZOGCxPt%2Fcb4lwQN2hVSZtZjLnpUvRRQuJhV6CIj6LZ%2BBII4QG%2Bbv7qB2T%2FwJuSv4WQEICjMksRxpfVa6rwM%2BqYM1LmtQ5lRiBq0rY9TvsnINfOkHMgALPufvE8ZR7rWJvypP%2ByIxMAl0xKFamaX%2FnvKYL2IEPYg&X-Amz-Signature=464676f4aef5557ab2e3950e97dc849470cb01e08864106487d818f652a02937&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSUC5OL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC131jpvPcWVYQC8idSSx54BHIr7WbHLemDnE9SjsueNAIhAL7%2F61v2XfhY89aXws2HDWKfxus7t5NrsZlYpXpNcD5hKv8DCF0QABoMNjM3NDIzMTgzODA1IgyOvnp3hyjyqKgPFLYq3APovIXgb0e6wrvg6VvMfN8DaxgUDA9Gebl4SuyhoNMTiasxiGlCCF5FHGUSm1WUskrTIVbRndwLCVckfDPiYXhOnIspI35GfUeypAI6iZJVFRpb%2B%2Bxanu4Qqv24nYjA8IR4E9lOCV%2BWKCjOHGByfCX1icOLnlZlBUBHItIXCSxtuwP1swzRo7mKQA6eNkDvf8ZpICgiAlSIQsd7YatBN5cbt4YjkOaDUoXql%2Bov5q3Ugx1ds%2FYPjjIU6ENI9nKjlnEtiel%2FwxQhu1NShReqCUS60OiUK7FXx2WPJ7YrjamdDx9Q%2BXgjov7rD2Gy5cE%2F7%2FVfUF2GBOCNSXEOy9yBNxjjZ6qeC5WCBHK9zn3eI2VTGaT0BQk9rSqvn3BAmv3I09bOoe4tp0FsPW2s2BQOEUDaF2DfYHbcPgIwOpDMuHe1%2BknwqXYzWchidoWyFlRrMElw4vobWKXQgtnJwe4X01ocUyI0oAGoKkcdVG2A8EkFX%2BC8N440yeC7rDz%2BSXC2zOkiYbSEllsyagKH5NDpea4Iaz6IWwe2aUJc3sckJTFWHcVldwrPx4Sd7cY1TQoccW5irGC0OOQbvH99ux%2Ffs5BmlPvi32c4nyp2DFLRS8WYMRsVaj55Qy4tAzUJIjDmh%2Fy9BjqkAUkFrTm1jj%2BOjfyMEqJFJ2g0rG%2FWi7s7%2BR3eLTw%2BMAXWqLKhe3oAEw0hhwobEtEriiVoDCnKbXf1%2BtqRt0fbM4ZUa%2BMefE9aEbIk1Nf6AGyZ0vm9jld27j3AdHxS7lwMDqpbX3LyyzYcfhDv6wc4ODH3yW9g%2FlLRH1oXTBS3VpWZJ6cVt3%2BXOcZVjW1%2FzOXVEaiWKgRNsQ7o42cID0pjNcqNs6ku&X-Amz-Signature=1293b1990746b95e26b4233c836d0d568e996bdc98078d83a1e654e48de3ebaa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOQKCWV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHM3Fe9E4OXKVUW8Puu%2FIzLt2xqsp76oFHdh7Ks0pSmdAiApl32EIV6aTrZLL0u8O3xS6hgkmNRqQ5jo%2F6xxWTfzEyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMc0lGFOvrCA5A39s8KtwDDQvHmwiXulyc009vtqov3Om2J52kcxNE%2FZKdF9i9pRIgh5nXt%2FaGkHc7A%2B3QFqEyaZtZjLLjyCXALfVwBgFpHMHg9B8IwI%2BHeGdDijKY%2BOBpWPt6eTS0JL3P3ImOyMtxLtPf7QHbt9pVvyoiTfsqbU4hxN0kUHWqmW%2FjOkb9ABm8QojalDvXAIkTxC9Virye5G0zESpnBIu9SCI92R8iLMKN40qfGRiih6Hq%2FvcFQn0%2FCRrACXlzcY7ORlOHXwj83DZqMx5twHl3jTWO5Uz8XNJGzx0YOVTxOJp5YZEygBCCvn3WIXKwVQs5zolL%2Bl8Ll1gEbjwW%2BK4ouAIXg%2BChUs8V1eTHOz%2FTjI769kGSKV1nNPIHrKGy6CZDcIRdIBYY5%2BQXi3A0cJzC%2F5Jm4pdavsyOjvRF6%2BRBSYzn8%2BRtifePYBULbDW1PsDngtzcYG15h2B4JMCFCPMR4WAoZJWURuSbj5jKmFU9dnFm1gjCbK4JwPqwuAkK8EzhgNHR%2F%2B9ubuOo5afHG48D1fHe3kbNd%2FrEoHUvOCSYw6vQFjoDu998p5XxooiV8GMUUxhZEFc73ryXn0ZbB57uHIkxlEzhZuGYGdkYof7kEuLI5B8fgcRXQnCPhX3uFlEb5kkwzYj8vQY6pgHn%2FXrBDFkLdvJ%2B6Al7ZrGeY%2FYxgemunBqN2mToKGutpmYUo6WnXzHVtxq%2Bql0vVeIuW8pi3b46G6hl3yfKdP6%2F%2FsTZKYWXenmGdSlBAUZ%2F0IzJapU%2B%2BCGiymNkCW%2Bm37Ar2DToaBMyUF8oij%2FxFNjaArqUaHM0bNbpkw3RogBnfV3uaZs38eHO0bnGtBoPBJUq34HmK5NC0RqY7B9dC8CHaUs3yKFF&X-Amz-Signature=16ac1bf5b508a83ac2466bad52308a4b25a4bdb9f1a075dde903f8c7d2c2e606&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM562WXS%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDTwqFEMMuzUvSzWURaz12hx%2BhykVxQpC4WzDFuiAOcRAIhAMqX0w4mmnyPr3TCBCiSWB%2BX17KFZZJzUr4%2FP%2BkjWOszKv8DCF0QABoMNjM3NDIzMTgzODA1IgzpUOS0wkfyUH8i0X8q3AMLbl2T2fDrcrZW4VSOPnXdhGWT47yCS5N5WY26wfBhKwfnwxGMEro4CKYXrKo76r35fMaC7iHCnMIZ6dHAyy%2BvKDp8%2FqtC48UrUhd8DmuByxhxhYHtNI95AJIC0SmQy%2BE86hyjg7r%2Fo1EsJWzXgsnndT43BDf02z12hy5TVFwMVaA2HbiHr4WBGQ7UILCHsk1%2FyqHsZotuAnHPsvznI%2FitFvbAdMBsSUOTVz5xsomkg3Ug7%2BX5G%2B2ZpJHADv0qjC006bhR5NketQmvluVwGmSDTuc8SEAn8ZpdKmy%2F%2FzUIuKccZL5HoIMQxf%2BVYF4i%2Fet25i5Rzezp13dp4Rgbqor3d0sKC7IQF7rLQEmXsUZLDMOKpIKOkPZJge3aQlNsk%2BeRvmT%2Fh68aobK%2Bsn2hhnYyjvFclA%2FBclLWpe4juc%2B3h50NvjU5LCMAaOfGX5GQSZgsB4d%2FeuBM1yKLYhUB42rORQrjzjLLUjgkpNRJxOqh9OQ%2FqTn3thZAAeHGIPQoArsC2KnzwJGg8iAw%2BGXqdODbKcg%2BUhePNpOicpKIe%2BkMOs5NnEGz89%2Fgahrkmn7ywIQhtznV9LsO5wzLC3RpYeJp9nEV2SVLgP7Rdp8LYKUGDzCDEa2e%2F13hwmRa3TCFiPy9BjqkAbOdb4UvNSYXc21Ai1uVv4RXWjZIIfGikrqTWGghKuR9sl6%2BydexFhg5uc00wZOGCxPt%2Fcb4lwQN2hVSZtZjLnpUvRRQuJhV6CIj6LZ%2BBII4QG%2Bbv7qB2T%2FwJuSv4WQEICjMksRxpfVa6rwM%2BqYM1LmtQ5lRiBq0rY9TvsnINfOkHMgALPufvE8ZR7rWJvypP%2ByIxMAl0xKFamaX%2FnvKYL2IEPYg&X-Amz-Signature=486873587abdd74ede6815a0419e5e5a4804193cfdf615f27d081dfee7281fc6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
