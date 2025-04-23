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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CWHXUD7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDoh4W7jnPUOWVKKefV0uyBkPV3yxW0oW7bbpAyTSRD0AIhAL0nwcmTyQk2ebED%2BTceK3zGdY2wtMp253OeZrGRcE32KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQstfRyDMUCnfNO2kq3AMaeSL%2BCti8I4clBh6wVbeqKWE%2FxS5hlNmclEHxtNGGY6bCBYWUk5TrcqCw7vtt68c%2BOuCxDS00nSuHhaEabT2xhGyG2CmuP9B0%2ByhL8InGFb7QTWu7WsYjEhrh5xW73t1DQFUo%2BCnx9lHjx38IavOQwzuQjoDIJzVLMaci1xXNgOfFKhm8WV9HyjucCCMUsT3XyB80%2FqcEYglcpLyZMtm0Rh1pTiZFwN6bBZ9oG3sZKAc87ImlJMN0oPN0dMajIWz8U0CbZYyLU0pjDRJfERwVn2wt%2BBrFc6HKSOLRrChZf1et%2BlDo5e7KiHjiKVUklbk11gz%2BSpj4GpunweRFnWPQ0X9LOWkrhYfvZD47zdqTgc0Rtmy%2BuhbRCQjYaWZRtFLKPt3rZKFML%2B1YexuU0vdMBApPyh%2FhDrNcujm7gO7JH5JFoHmuFQrNn7HucxhfWX1s3YsFoeQLX8l2O35O91bvAOVBjnwWp6uqtIbF7pD%2B3P7Dr1VY27OH7LYkdYAhD5LBkxMIdYgkRJC7WW%2FukJhwmw7%2B5xxwtYt%2FhYSxZvF3JpOKd3upSUmweMl9zzpDBoRpP%2B4Cynr7oCEhKeXen%2FGtaO%2BhH9NQiEBZRgFs5gh24uc%2Fpdo4GaSKVEBlBTCZu6PABjqkATtIUeQbpWED2EzBY%2BwwyYLhNk0kKHjw266Xz%2BQEjQhvbsi0SI5yf99F8KniQCbBdL6AKR%2BTar1pl3hLwbMMZxJ2TkZDACqAORtyGACzQIlPlLYEaPd2Jhkhyrsod%2BclJDgO3LNOzOvN4QXYaEYfQa7pCI5Kd6NuF4aLnL3oQngQ7KEC9XtpakuAGOUmvFhgnZWhPfzIt1rilbKeY4MwK%2FYAzeBy&X-Amz-Signature=fd1ae0b68c8d195fd63561ef17f2a833a39d117b7b43fac0617ea0723230fd5d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CWHXUD7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDoh4W7jnPUOWVKKefV0uyBkPV3yxW0oW7bbpAyTSRD0AIhAL0nwcmTyQk2ebED%2BTceK3zGdY2wtMp253OeZrGRcE32KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQstfRyDMUCnfNO2kq3AMaeSL%2BCti8I4clBh6wVbeqKWE%2FxS5hlNmclEHxtNGGY6bCBYWUk5TrcqCw7vtt68c%2BOuCxDS00nSuHhaEabT2xhGyG2CmuP9B0%2ByhL8InGFb7QTWu7WsYjEhrh5xW73t1DQFUo%2BCnx9lHjx38IavOQwzuQjoDIJzVLMaci1xXNgOfFKhm8WV9HyjucCCMUsT3XyB80%2FqcEYglcpLyZMtm0Rh1pTiZFwN6bBZ9oG3sZKAc87ImlJMN0oPN0dMajIWz8U0CbZYyLU0pjDRJfERwVn2wt%2BBrFc6HKSOLRrChZf1et%2BlDo5e7KiHjiKVUklbk11gz%2BSpj4GpunweRFnWPQ0X9LOWkrhYfvZD47zdqTgc0Rtmy%2BuhbRCQjYaWZRtFLKPt3rZKFML%2B1YexuU0vdMBApPyh%2FhDrNcujm7gO7JH5JFoHmuFQrNn7HucxhfWX1s3YsFoeQLX8l2O35O91bvAOVBjnwWp6uqtIbF7pD%2B3P7Dr1VY27OH7LYkdYAhD5LBkxMIdYgkRJC7WW%2FukJhwmw7%2B5xxwtYt%2FhYSxZvF3JpOKd3upSUmweMl9zzpDBoRpP%2B4Cynr7oCEhKeXen%2FGtaO%2BhH9NQiEBZRgFs5gh24uc%2Fpdo4GaSKVEBlBTCZu6PABjqkATtIUeQbpWED2EzBY%2BwwyYLhNk0kKHjw266Xz%2BQEjQhvbsi0SI5yf99F8KniQCbBdL6AKR%2BTar1pl3hLwbMMZxJ2TkZDACqAORtyGACzQIlPlLYEaPd2Jhkhyrsod%2BclJDgO3LNOzOvN4QXYaEYfQa7pCI5Kd6NuF4aLnL3oQngQ7KEC9XtpakuAGOUmvFhgnZWhPfzIt1rilbKeY4MwK%2FYAzeBy&X-Amz-Signature=3d4e676e28681eed0680080d5b6540abc3bfc1648692c9eee25c0f769cb3bdb4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVSZGOCW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBGAkjTNK6r%2FRQOYoAZmONQiOmGByMTSF1YywmpyP%2FeQAiEA1cFpb0CR3RSJTWIwMD6U1xd%2FbqTPwqBZtF3KkA8y0BcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOoX09d4%2FKXgQWOoSrcA3WB2qQMcRYBMUgwxXfktUkKnimeqLzykA0JkRH9ciJDZpv%2Flji3ldDjR%2FPolIMSdDTNm4GMVVLT8zTUDZu5xjEmIHS8SnVLL8%2BeZ1b4QeWn6yMdLSiUAuH9gZK7frzdTbecy9%2BCjVAX7VKl5WdPXMUNVJ%2FQfNJrtqcnkkjh23e4fRK7r9xI8zZpB%2FkjMtmdk%2F9VoeZrstrILfdrmat8E6d9rXvdH%2F%2F%2FVGzl5KFjacrRjNOSPk63s9Az6Tl9tvOMXfFECAVW5OuZOVnl1hdAZ1dPzLEMEEhjyPPEaQCeOgjXR3kR%2Blp9TtWWj0fywgxTni3N1aLym%2BlTVM5pBbcLqnVvRfR2TQB2wp3GCMzThDlinEF6qKM4X2LkPbVIqZiqqM%2F46cd576nYJ5oMVRxFQZzx5LU51riW7rWMEjioLb%2B%2FWKf0kOUsB%2FgyYX5pslWiB5SzAI6SGwxa%2FtFlP7BTSnIKLjpS4aq8922VgZAmDI865zVtP%2FPfbKVU7HB193s3QuVenMLUFgfQPipatToispg3D%2FVTrTdXob2eIIJJnWpIV6SQVGQCCKHk2jNAuM5xE76P0OIuef08tuMneivofn8Ft1Wou6XnOzvC%2B%2BHtnG5oYER0YJLqMalqnrS5MKe8o8AGOqUB%2FN01LpDvb7BgnJr8yv4G2nQsw49IT22nPv5pLW0uJVBN0yLMKmX5wwvV%2B8lW27U6vi%2FZU87sa20XPaAmnY9qnjxbazlQnlkEEJl53mzBphYRM4TsZpwf%2BcxLFLjbFMlbcWxgg8%2FRjLhRL9kyoFNKvo%2BLtq4mbJHCIpCDT8nBJ6zqONGP74ZJe4c6PDOTOERtWR1wfKsyWXFFomXnQdN5zf6o7Mwe&X-Amz-Signature=bd5c58d2301546a14e21dbe7d47e738347c1b0eb2dcd93ec3cd9c7acb2a6fa14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NNCNONB%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCICUsu4bYt9MN08S3JnmKqXYKdXmyMAiCqWvdaLfqT7XpAiEApL1P4AQSZxhzjys4cVcgOj%2FU4i%2B70qBdqEIdH15PXw4qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvN%2BgbRkI%2FFZW2bdSrcA%2FIlc1Thzap9kaQJHLhnxS3Gzs6q6gxTEG6UmbXXUznT4mvHWphN%2FL4%2BvTtqdShmc7gm34nnkvV8CK%2FgO1uDPD6yaPGTHSAdYW2lDElvOHIx2utHYf10%2FdKc8Q7TLhAqgM5nRR64SDErv34%2BIs%2BU7M85Kqp82WhC%2BsJl0xpm3GR7K9oTxBqY1UQqxTk6ddlRhHWGGX2CrlJtukYfMmr%2FrPsn4l5bPohl4VKU1Twouhs2Yl0yb3i%2B80o6lx%2ByvgoJviZfQDLfTvjrd9DdiieHGV36npJLgNfjIGNuetaoKnn1qBAhuu0pGJMGWBuOQQcXKKTENduuHXk1U%2B%2Fj1wcwj1zSRrPso747okwcTiM4Ov8%2BFWv2ym%2FyOmmI6WncTo4J4qOt5vSut5gmcuNtd5oI3RwWR0Ald4MBIFMWw6tJ2ZLRfNK811E172UatdGFbCTUSTewGJPWcT7JttTpBxVvIiGrjYRHpZf6fu9MABQbLQCEJ55UW1UPmZUDiHdqxZMgUMZdFumZ%2FS6M%2BVOlKidfdOpwKHi%2BuIBoPi1pJGVYcOAOsv3DdXWV0cDAfBEJ81ESQu0DPBEttIPt3mADgc7C2kOP8pC9s09HuS0I77loYoIPctDgEOb2KFTG1HpkMOS7o8AGOqUBtJWCd0jPQVg6qIaEU1D9rFU9BF%2FsNQuDvDrZhFy4ZcacXhyu9SlH9IN503JYbPGMIbQLx13%2B0WTY3W8Mog8upZ5k7iRpej79iGL%2F9X4jYcB0wYm%2FYMelDSBKUznFn%2FjK3JmRmUEPkbHjerT5fu64FuoKeegy%2FzD6UDjNLD9ugCRbwqzKzWhAo34pvChmZBFnLulzDf%2FCjddKQMjQvmBgA45Y%2BWmc&X-Amz-Signature=6fdbf48263089d601161c0ef4b0686f9973e10ea52b0b6d4f941ee54b5c9819e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CWHXUD7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDoh4W7jnPUOWVKKefV0uyBkPV3yxW0oW7bbpAyTSRD0AIhAL0nwcmTyQk2ebED%2BTceK3zGdY2wtMp253OeZrGRcE32KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQstfRyDMUCnfNO2kq3AMaeSL%2BCti8I4clBh6wVbeqKWE%2FxS5hlNmclEHxtNGGY6bCBYWUk5TrcqCw7vtt68c%2BOuCxDS00nSuHhaEabT2xhGyG2CmuP9B0%2ByhL8InGFb7QTWu7WsYjEhrh5xW73t1DQFUo%2BCnx9lHjx38IavOQwzuQjoDIJzVLMaci1xXNgOfFKhm8WV9HyjucCCMUsT3XyB80%2FqcEYglcpLyZMtm0Rh1pTiZFwN6bBZ9oG3sZKAc87ImlJMN0oPN0dMajIWz8U0CbZYyLU0pjDRJfERwVn2wt%2BBrFc6HKSOLRrChZf1et%2BlDo5e7KiHjiKVUklbk11gz%2BSpj4GpunweRFnWPQ0X9LOWkrhYfvZD47zdqTgc0Rtmy%2BuhbRCQjYaWZRtFLKPt3rZKFML%2B1YexuU0vdMBApPyh%2FhDrNcujm7gO7JH5JFoHmuFQrNn7HucxhfWX1s3YsFoeQLX8l2O35O91bvAOVBjnwWp6uqtIbF7pD%2B3P7Dr1VY27OH7LYkdYAhD5LBkxMIdYgkRJC7WW%2FukJhwmw7%2B5xxwtYt%2FhYSxZvF3JpOKd3upSUmweMl9zzpDBoRpP%2B4Cynr7oCEhKeXen%2FGtaO%2BhH9NQiEBZRgFs5gh24uc%2Fpdo4GaSKVEBlBTCZu6PABjqkATtIUeQbpWED2EzBY%2BwwyYLhNk0kKHjw266Xz%2BQEjQhvbsi0SI5yf99F8KniQCbBdL6AKR%2BTar1pl3hLwbMMZxJ2TkZDACqAORtyGACzQIlPlLYEaPd2Jhkhyrsod%2BclJDgO3LNOzOvN4QXYaEYfQa7pCI5Kd6NuF4aLnL3oQngQ7KEC9XtpakuAGOUmvFhgnZWhPfzIt1rilbKeY4MwK%2FYAzeBy&X-Amz-Signature=8a7eaa291fedf6228926f58b9a4fc7e0bedcdf0d4b8c2c1eda016fd83e2d4ba0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
