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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X5YPZT3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIF7BXloC%2BhVhGGFofdisKT6n9cFKmb%2BTr98kCxms25o%2BAiAxf3V%2BgLCcYAOfPYFdc4BUkFI8QxHA8p2UrsNjeOfVYir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMffgygZQGxg2ATONsKtwDmBC8ZLkU0Dlo332HV9irotYsN7VHYXCgAbpv%2B1%2F8Cj2U6uRkB%2FQPtuEUUrXhHp86J2He1CBTDgC5YFs4%2BTu2%2B4B7%2FxL49b0TmE%2FCE25H8R0ZDAqR%2B8ovgD1kSry5F2cjf0d73qydhdvAqblmbTgf62lRjmO1mAZqH%2BUqFCDY7mdOdRNn8VuJd2tl0eF6RcMSQ5tb8X0rch0bQkD06F%2FLRpPTC%2FSELgDkvHqiVB6OWp5dbZGa3g7N2EfFKe9c1KMRu%2FOOHwOL%2Fk9R4rqGOStgrUnfVSxWHKBiItjPfDFVP2aT3cPdcsGV0LDb53D8AuitwWix1p2cs5kmPxEE39trnr2e1TczM0MnxXP62XIqBwSKAYf3242rLUHA003hgKNUX5FYVx1ONOt8tgaDVbZjtGvJDErQWf03BtXg2FsuGQAQjNcT%2B6IQuTRz1fSjfo%2FuF3qFIXqHm9q2hdre6rPfOKSIwaT8i6WAJs03ANTgkpZ6qKjxZLhCsKO0hb%2FOdYKycEpiCII5UrLPXYp1rgv64sZ59uHRtfM729YJ6LlwxSWEb24GMSKYX4K4dSJECVWJ31mUCROMiddEy735Cqg7Z%2Fj2psn5r3848umw5w31A1GaS5i59WYnkPA%2B6xEwwv%2BUxAY6pgGgzHegQd%2F2CPqSP8HPjYmNeIt6xeT3oNt6r7rkajvNGgGMLqHQOYbuoRjYSnkwvnSVgDshdDadQXL2fspU6DSSK1oYuRzY%2Bwkql5nu8e9FZ8%2FrfKcigCv%2B2aAr5PW%2Fr4m24fmk0GwbVbL9ZpR6gwcl4GmmX7rdjBrzVY5tLfFJJPk6Pw%2FDw46YAVZkAFRkbSifWTFWvPA5QUJhGdcHOq%2BMw%2B%2FC2Gh7&X-Amz-Signature=f08f6208d06b1a6aef5376dd56dce628f36592b6b61f5d3876fc5b2010ba5ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X5YPZT3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIF7BXloC%2BhVhGGFofdisKT6n9cFKmb%2BTr98kCxms25o%2BAiAxf3V%2BgLCcYAOfPYFdc4BUkFI8QxHA8p2UrsNjeOfVYir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMffgygZQGxg2ATONsKtwDmBC8ZLkU0Dlo332HV9irotYsN7VHYXCgAbpv%2B1%2F8Cj2U6uRkB%2FQPtuEUUrXhHp86J2He1CBTDgC5YFs4%2BTu2%2B4B7%2FxL49b0TmE%2FCE25H8R0ZDAqR%2B8ovgD1kSry5F2cjf0d73qydhdvAqblmbTgf62lRjmO1mAZqH%2BUqFCDY7mdOdRNn8VuJd2tl0eF6RcMSQ5tb8X0rch0bQkD06F%2FLRpPTC%2FSELgDkvHqiVB6OWp5dbZGa3g7N2EfFKe9c1KMRu%2FOOHwOL%2Fk9R4rqGOStgrUnfVSxWHKBiItjPfDFVP2aT3cPdcsGV0LDb53D8AuitwWix1p2cs5kmPxEE39trnr2e1TczM0MnxXP62XIqBwSKAYf3242rLUHA003hgKNUX5FYVx1ONOt8tgaDVbZjtGvJDErQWf03BtXg2FsuGQAQjNcT%2B6IQuTRz1fSjfo%2FuF3qFIXqHm9q2hdre6rPfOKSIwaT8i6WAJs03ANTgkpZ6qKjxZLhCsKO0hb%2FOdYKycEpiCII5UrLPXYp1rgv64sZ59uHRtfM729YJ6LlwxSWEb24GMSKYX4K4dSJECVWJ31mUCROMiddEy735Cqg7Z%2Fj2psn5r3848umw5w31A1GaS5i59WYnkPA%2B6xEwwv%2BUxAY6pgGgzHegQd%2F2CPqSP8HPjYmNeIt6xeT3oNt6r7rkajvNGgGMLqHQOYbuoRjYSnkwvnSVgDshdDadQXL2fspU6DSSK1oYuRzY%2Bwkql5nu8e9FZ8%2FrfKcigCv%2B2aAr5PW%2Fr4m24fmk0GwbVbL9ZpR6gwcl4GmmX7rdjBrzVY5tLfFJJPk6Pw%2FDw46YAVZkAFRkbSifWTFWvPA5QUJhGdcHOq%2BMw%2B%2FC2Gh7&X-Amz-Signature=5260d1a579f9698ebfef8244f558a5cd7e2638b2183c9522803bd7f7dabefcdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X5YPZT3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIF7BXloC%2BhVhGGFofdisKT6n9cFKmb%2BTr98kCxms25o%2BAiAxf3V%2BgLCcYAOfPYFdc4BUkFI8QxHA8p2UrsNjeOfVYir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMffgygZQGxg2ATONsKtwDmBC8ZLkU0Dlo332HV9irotYsN7VHYXCgAbpv%2B1%2F8Cj2U6uRkB%2FQPtuEUUrXhHp86J2He1CBTDgC5YFs4%2BTu2%2B4B7%2FxL49b0TmE%2FCE25H8R0ZDAqR%2B8ovgD1kSry5F2cjf0d73qydhdvAqblmbTgf62lRjmO1mAZqH%2BUqFCDY7mdOdRNn8VuJd2tl0eF6RcMSQ5tb8X0rch0bQkD06F%2FLRpPTC%2FSELgDkvHqiVB6OWp5dbZGa3g7N2EfFKe9c1KMRu%2FOOHwOL%2Fk9R4rqGOStgrUnfVSxWHKBiItjPfDFVP2aT3cPdcsGV0LDb53D8AuitwWix1p2cs5kmPxEE39trnr2e1TczM0MnxXP62XIqBwSKAYf3242rLUHA003hgKNUX5FYVx1ONOt8tgaDVbZjtGvJDErQWf03BtXg2FsuGQAQjNcT%2B6IQuTRz1fSjfo%2FuF3qFIXqHm9q2hdre6rPfOKSIwaT8i6WAJs03ANTgkpZ6qKjxZLhCsKO0hb%2FOdYKycEpiCII5UrLPXYp1rgv64sZ59uHRtfM729YJ6LlwxSWEb24GMSKYX4K4dSJECVWJ31mUCROMiddEy735Cqg7Z%2Fj2psn5r3848umw5w31A1GaS5i59WYnkPA%2B6xEwwv%2BUxAY6pgGgzHegQd%2F2CPqSP8HPjYmNeIt6xeT3oNt6r7rkajvNGgGMLqHQOYbuoRjYSnkwvnSVgDshdDadQXL2fspU6DSSK1oYuRzY%2Bwkql5nu8e9FZ8%2FrfKcigCv%2B2aAr5PW%2Fr4m24fmk0GwbVbL9ZpR6gwcl4GmmX7rdjBrzVY5tLfFJJPk6Pw%2FDw46YAVZkAFRkbSifWTFWvPA5QUJhGdcHOq%2BMw%2B%2FC2Gh7&X-Amz-Signature=8bf5c9e98efe7fe82562cec5b5c3bd3c84881995c20a9f5ab2743bf9d6117e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3NT7G2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCatgbVX2aVk0CGrqyi5Hkd5Pwr%2FgulBmzdWjuKygi7XgIhAJ5uCzUCYR93dF%2F4SboARBiuDoC7Z96NLXWqpHMh%2BBNsKv8DCGYQABoMNjM3NDIzMTgzODA1Igzi3dTTx8PbzvezLV4q3AO%2FeJg1Na33US%2B%2B30ct0RIJ6%2FM8YjELZwg2DdQZbWHDyKLO9khesQzfOzw5m37RWouHUCXSn3GRXq2AoRmbTDvDIYWterojWscfZO8X0%2FYf52cECuMN5%2FfduDPCMrIJdBZ2WO0VQdAIAzCyNJse8janlzI39eK8inmSQFCN5r7%2B%2FB5lY7jmVgjOwStW%2FrKCoT6As66Nzz29qhkucDO%2B1s%2Bj%2FOxi4A6IZE2PO5ULthXtvFGc4NRRu8yyfVPkkUPtt4VcCbXiQXiPZOWc4cwutiQtbsOX96%2BkS4xZGUUgNfAWKHoVvofWbB%2FOBEpSESU86dOgQrDMt0YsWr0%2FV%2FCxSXFJineOWwxOCjLZHI9YqsCg7mlwVSg%2FFtnrR8mqQgN9dIa2nyq8DBL6zvmzOdA9I%2Bc7Fdda1l%2BNGDzXAZDAqZ5087xXDJD3fh8OFqtILV4ZtN7RG0g%2Faa0Tvxsam2JyjjL1z8Ri0dkkdneUqY6VJ0XnuirWF7%2BiO9JG84%2FqhzI1kKyMVJFU1nXsvSDg%2BKVJTjxuwKL7QU0OkSr407DrE07HXiPS2u5UK1QFPjSQUTsQaa%2BSDTs8OAQIo3wBygXFn4uLjJrRw%2FRVOfcxs8EFljQHZ%2FbMTrSW7kQqqX7TcjDb%2F5TEBjqkAScMySZ%2BQM82IOAG2caJmb3lIgtz6hiXsn8H7AYXgvfM9rwLUlJ1yYaO99iLu5v5oz03Z4LK5x6nlM13onyyZy9AqtMnuVv3u3gHK4ZwoV%2BDa%2F5UFH3bnyEixKKVT3RlCtI%2BOOPDEI7C9vO0XcgiF%2BHBkf3rs68l6fm6mBjkfHqXfs4MUYUk6TtZUIQKAPjBs0%2FfPMPZ2ME%2BNkq%2BqXFAsyl%2ByE6n&X-Amz-Signature=f40910847b3072e340b5b1ee88f9f17f9a9abe94c75882425ddf0605d40458a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HXRMKK6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEfXdB1l0pZbO%2Bm39ww0G5REbZrIL4sfFjW58VQsxbUGAiBu2op3vTHGftLfPap0EHQiCLM%2BDVJlKIkmfS78gUuBWCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMZ4zf0018qXPONxTEKtwDSp8PwR8h56DFaTHXhggjqB%2FFVMMW4mU4CmJii18rIztWTVhct9w9O8VFlCP2VqF01TuX%2FTiWxmb9l9cbnJ5YTpp7pKvkN6zYOlIed5XvQ9bat1nccJQvOqb9sN6NECXcwKM%2FGW9tGvHFnveBlVYwtWk5e1r4XtIYONGZw9XRgCBOr5GqaRl4DXNl1LA0sb34IBXWcz4n4d0mnaJ2jNa%2F9%2F8nYDT%2BkM4Do85EH5p%2B04I1Psd2FfkauSOWRx7H2Hex0GHiC9Cg2f4jNfoetikz1lqrxlHTOTwDwAo6LQubKJVvUr3reWWto3spl8M%2F%2Bmqi%2FoELp7NfTiE%2Bis1FeSYA7aaLdQoamBx8Dd%2FtQYdrsQ3hbFJ3g9nEUm41JhYqcnS159cm1QvKyhtSK3ScjWBOKTWKsg4amsLgiEuKbVSXwmePn6naJC3TD9TyUzts7ktFMFdl6b1T2%2BGWGJiH7mdg3MdUujmuSgNnR2gJQWAbdoJ8bMwdBXI3MuVVPZlFrb3eAkyAZ%2BL8kftTGbE7xjVAtFuO7qTHJDg6kdqqnwwknkVtYvukCcgt5YNkdf9LaDlL8GEKt5nCtC90vq6eCij9Y1vC2HlnsAmqh9VXZtOK8wE%2Fpx%2FTqrey%2FHWz%2FFAwzf%2BUxAY6pgGwIOBVaJdw%2Bi7VyRgTbzhRu9uT3fPmOA%2B2RB0dbJ5JPMQaF0b40uX6lkHk76yV84mHPhd3ndVLixyk%2F7kG76jfTYZIkZWz2M4T9WaIMV7EA58Ia23YOfU1HGp1dJ9HNJpvXIGs7jn8BG6Pw52dUk9t7scsevAcLeIBi%2BI6xP0P8Qhq%2FsXZBBG%2FhWb%2Bzn3rAlzERdMomiZgx8h1qTvnY3ZhN5RJGjUU&X-Amz-Signature=5e3704fc6679a686e25c65be4e4ec4f7434d19736ca7a5ed89bada5c2f572d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X5YPZT3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIF7BXloC%2BhVhGGFofdisKT6n9cFKmb%2BTr98kCxms25o%2BAiAxf3V%2BgLCcYAOfPYFdc4BUkFI8QxHA8p2UrsNjeOfVYir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMffgygZQGxg2ATONsKtwDmBC8ZLkU0Dlo332HV9irotYsN7VHYXCgAbpv%2B1%2F8Cj2U6uRkB%2FQPtuEUUrXhHp86J2He1CBTDgC5YFs4%2BTu2%2B4B7%2FxL49b0TmE%2FCE25H8R0ZDAqR%2B8ovgD1kSry5F2cjf0d73qydhdvAqblmbTgf62lRjmO1mAZqH%2BUqFCDY7mdOdRNn8VuJd2tl0eF6RcMSQ5tb8X0rch0bQkD06F%2FLRpPTC%2FSELgDkvHqiVB6OWp5dbZGa3g7N2EfFKe9c1KMRu%2FOOHwOL%2Fk9R4rqGOStgrUnfVSxWHKBiItjPfDFVP2aT3cPdcsGV0LDb53D8AuitwWix1p2cs5kmPxEE39trnr2e1TczM0MnxXP62XIqBwSKAYf3242rLUHA003hgKNUX5FYVx1ONOt8tgaDVbZjtGvJDErQWf03BtXg2FsuGQAQjNcT%2B6IQuTRz1fSjfo%2FuF3qFIXqHm9q2hdre6rPfOKSIwaT8i6WAJs03ANTgkpZ6qKjxZLhCsKO0hb%2FOdYKycEpiCII5UrLPXYp1rgv64sZ59uHRtfM729YJ6LlwxSWEb24GMSKYX4K4dSJECVWJ31mUCROMiddEy735Cqg7Z%2Fj2psn5r3848umw5w31A1GaS5i59WYnkPA%2B6xEwwv%2BUxAY6pgGgzHegQd%2F2CPqSP8HPjYmNeIt6xeT3oNt6r7rkajvNGgGMLqHQOYbuoRjYSnkwvnSVgDshdDadQXL2fspU6DSSK1oYuRzY%2Bwkql5nu8e9FZ8%2FrfKcigCv%2B2aAr5PW%2Fr4m24fmk0GwbVbL9ZpR6gwcl4GmmX7rdjBrzVY5tLfFJJPk6Pw%2FDw46YAVZkAFRkbSifWTFWvPA5QUJhGdcHOq%2BMw%2B%2FC2Gh7&X-Amz-Signature=8fd3030af0756cc2ba07b980f0f9da69cdd6e9daa20911cada3b58d9208a2e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
