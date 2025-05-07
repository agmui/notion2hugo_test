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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWHNYBFU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEni%2FYVUUq4QAHZMIhOdUIy012%2B2czTZfBHrSYHPxdKwIgA6YjppxdmNRPWipB3TviHNP%2BzIzE%2BBaihSST3%2F7qXVIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDP%2BqBGcdkOlVDhE61ircA1GMhqJJM3ULwrNg%2F5TO1kCg0rSoWbmCN7F0qcJAZVNztgGIyBW7wIj23tdA%2B%2B28KZfaf3k1T0NneXOaZnyExoM4W6iDyaqeDYOJkl%2B1ph7XnoUBqHYqDYeV7l8y85kmBJleoqUppq9FZ7MOWNaS7s16DTSw2OBwSh%2BHhypRZIJEmeVKtc4GoV5gNHVwl1iF3uVRQv20eI%2FlK7EgARPdqPPy5xHXPtZaFCE%2BF4%2BEkXr8luwCBlBqBgA%2BLjEG6YMHO1q%2FxMy8SOKQAVnYKDQiKxYroTZJ4j7mqDK6%2B0TkzxlScLsLqhNXNNYygbKD2E7eWbnvHDuNViKgoCMLDZDvpxbwlWy9UXLHtdXWgZVgoM4Qimb4JN37xBjWappuh3yzGv%2FgxM0ncOF44W4Uz2ajU4Mnys7sADv2c7JL0ukYdue%2FHqoitgovCN9E2qxcjlN5p7VacPYQnOsVc5tLKiD558%2B%2FDnycN6hgCX7Z29kmeiCkCV4DXoIquTLk7Ck9HEZ81TkHI5FXGT6gcCgUAnTqNYBXhLipWZ2nCPWt6MgvnRosCP1PNHmDaypFRCfzDV%2F9V0jsPECWePE%2BjPmQo%2FP4hlNJ6HY4Vyp55dcGkksdGGrlRE0TTHVgFAmvORXBMO3n7cAGOqUBPPX7Mt1vZr%2FrXm%2FSgXrkeolOrHk%2BEM%2FqN%2BehuGehnPlna7iT%2BPE5kOc70r%2FflIi%2F6vvYqlEATef62lu5L7SUUb5gPXFXClk%2F2Qyh6U6KFmGH0U2W9DS0S6EhbOXKU4lJkjrKHgLSKAJyr6Y3mPRSuMmtv3qPUl41E348atvQMA9qg9lJlr6PGMXodN7xbsgTwkDKNisxR1BVjcFYTd58yE7DXNwH&X-Amz-Signature=eed1a8d3d3548b2943aff1734ac7efb8c33f2045949a0eb33c3218ac1659bc48&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWHNYBFU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEni%2FYVUUq4QAHZMIhOdUIy012%2B2czTZfBHrSYHPxdKwIgA6YjppxdmNRPWipB3TviHNP%2BzIzE%2BBaihSST3%2F7qXVIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDP%2BqBGcdkOlVDhE61ircA1GMhqJJM3ULwrNg%2F5TO1kCg0rSoWbmCN7F0qcJAZVNztgGIyBW7wIj23tdA%2B%2B28KZfaf3k1T0NneXOaZnyExoM4W6iDyaqeDYOJkl%2B1ph7XnoUBqHYqDYeV7l8y85kmBJleoqUppq9FZ7MOWNaS7s16DTSw2OBwSh%2BHhypRZIJEmeVKtc4GoV5gNHVwl1iF3uVRQv20eI%2FlK7EgARPdqPPy5xHXPtZaFCE%2BF4%2BEkXr8luwCBlBqBgA%2BLjEG6YMHO1q%2FxMy8SOKQAVnYKDQiKxYroTZJ4j7mqDK6%2B0TkzxlScLsLqhNXNNYygbKD2E7eWbnvHDuNViKgoCMLDZDvpxbwlWy9UXLHtdXWgZVgoM4Qimb4JN37xBjWappuh3yzGv%2FgxM0ncOF44W4Uz2ajU4Mnys7sADv2c7JL0ukYdue%2FHqoitgovCN9E2qxcjlN5p7VacPYQnOsVc5tLKiD558%2B%2FDnycN6hgCX7Z29kmeiCkCV4DXoIquTLk7Ck9HEZ81TkHI5FXGT6gcCgUAnTqNYBXhLipWZ2nCPWt6MgvnRosCP1PNHmDaypFRCfzDV%2F9V0jsPECWePE%2BjPmQo%2FP4hlNJ6HY4Vyp55dcGkksdGGrlRE0TTHVgFAmvORXBMO3n7cAGOqUBPPX7Mt1vZr%2FrXm%2FSgXrkeolOrHk%2BEM%2FqN%2BehuGehnPlna7iT%2BPE5kOc70r%2FflIi%2F6vvYqlEATef62lu5L7SUUb5gPXFXClk%2F2Qyh6U6KFmGH0U2W9DS0S6EhbOXKU4lJkjrKHgLSKAJyr6Y3mPRSuMmtv3qPUl41E348atvQMA9qg9lJlr6PGMXodN7xbsgTwkDKNisxR1BVjcFYTd58yE7DXNwH&X-Amz-Signature=72c8c74deb77b3c8c75515db64c19764eab66e9a670a83ea916ec82c19259d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWHNYBFU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEni%2FYVUUq4QAHZMIhOdUIy012%2B2czTZfBHrSYHPxdKwIgA6YjppxdmNRPWipB3TviHNP%2BzIzE%2BBaihSST3%2F7qXVIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDP%2BqBGcdkOlVDhE61ircA1GMhqJJM3ULwrNg%2F5TO1kCg0rSoWbmCN7F0qcJAZVNztgGIyBW7wIj23tdA%2B%2B28KZfaf3k1T0NneXOaZnyExoM4W6iDyaqeDYOJkl%2B1ph7XnoUBqHYqDYeV7l8y85kmBJleoqUppq9FZ7MOWNaS7s16DTSw2OBwSh%2BHhypRZIJEmeVKtc4GoV5gNHVwl1iF3uVRQv20eI%2FlK7EgARPdqPPy5xHXPtZaFCE%2BF4%2BEkXr8luwCBlBqBgA%2BLjEG6YMHO1q%2FxMy8SOKQAVnYKDQiKxYroTZJ4j7mqDK6%2B0TkzxlScLsLqhNXNNYygbKD2E7eWbnvHDuNViKgoCMLDZDvpxbwlWy9UXLHtdXWgZVgoM4Qimb4JN37xBjWappuh3yzGv%2FgxM0ncOF44W4Uz2ajU4Mnys7sADv2c7JL0ukYdue%2FHqoitgovCN9E2qxcjlN5p7VacPYQnOsVc5tLKiD558%2B%2FDnycN6hgCX7Z29kmeiCkCV4DXoIquTLk7Ck9HEZ81TkHI5FXGT6gcCgUAnTqNYBXhLipWZ2nCPWt6MgvnRosCP1PNHmDaypFRCfzDV%2F9V0jsPECWePE%2BjPmQo%2FP4hlNJ6HY4Vyp55dcGkksdGGrlRE0TTHVgFAmvORXBMO3n7cAGOqUBPPX7Mt1vZr%2FrXm%2FSgXrkeolOrHk%2BEM%2FqN%2BehuGehnPlna7iT%2BPE5kOc70r%2FflIi%2F6vvYqlEATef62lu5L7SUUb5gPXFXClk%2F2Qyh6U6KFmGH0U2W9DS0S6EhbOXKU4lJkjrKHgLSKAJyr6Y3mPRSuMmtv3qPUl41E348atvQMA9qg9lJlr6PGMXodN7xbsgTwkDKNisxR1BVjcFYTd58yE7DXNwH&X-Amz-Signature=4caa501fada7d3cd05cc8e53bf2e49c386f539d94d3834b147b3eac3fe44bf80&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE4L3FN2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBD6XjUTEXjJXzxi3kv2NtRsPVWr5n7SXC%2BvGMNp8ISrAiEAiFlkketHbpz5gOI7l1urLmUB8GMfCppbHAQl8a%2B8O6Aq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJseJkmqkfKJ3H%2FlmircA5BfQ9AMsooVF%2BrzQkWLB%2FWpOtGSu5gk4gXIXcRg6BRtjR1iSfO4jcFyURMsmG3qL184rcSXU6oP9VzqHYy8MTZL7UAQWxCPwzCemlMPUzrSBsrSdNbRTrlzD8FvCaieL10eMthkZzQefg71WXs1UgXCuGx0OSf0CQbrUL0JZroMxxVo6qh5p6cYqFvvtegswv%2FQFTW5KgO5RYVlNEdlb2CtcfnbZsOGxBbbb%2FKmtWVfTWEz%2FJ7rNv1LY%2FsFZVVz0X1jjjxPH%2FJLbi%2BvNYtsJYq1iOXudESO862box4ysvIXdCFFRQZZJWkgoBDzy7FkQnwYe3pQwZV7swXr7fss1mZecRb3xXPmdBgBpcnrUS56kclqWP45%2B2lrS8H53u1%2FDLgbFbMl0SamsG8L1WJ1QykEg92dT0y3NcQSL6pnUdKScFYg6N8AY8alny4OVK6nXOVx4Mxgtp1AuMC%2B0VhGBSVD4eQiZgtzMAvjvIr8mkbmunJQ5l%2BvYpEXtt4s8xud1KhbmfZLwsTgryIoLs661XZzYVe%2FbBTVc2qDIRP056m8IO5m%2BBrDN7cXGlYHIzLgiSCr9yhhu%2BcclA1LKr5jfDvAGSZoiJ8rsyvZS8OZkZQGKEr8iVLE6Zt8NaP9MO7o7cAGOqUBJtdRHVrdPzRUP18AwJJyU5JWJBJcN23HZ8Y6gN3WqtRr9sqMQp3VkAN71wjFi7GqfqZ%2FSKb4RZYCdwndllchHolX12PJp3unvwt0rs3VyV%2B1UHxeKxTv9Hn%2BZU6Di9IrrGezMl7aR%2BGBsQ6UMCvuunooMEQwW%2BkS6ytP0S9Ob9GYqYQiTtuNNwdqwyesTS3o4wsSX8p2yy81FK2g9g5D05DcdJ9l&X-Amz-Signature=347c9f62efef602688b89439afa2d7486a04c77e8899eca4a0ab19e80bce4809&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLRLLGA%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtZZgxfuoU%2FvgOS5XkJpEnpAo4RtJPQSloJoG7juKqQAiBVd9wZbZY4ZTVziHpo7m7mzyI0XcAScS9pT07B3iB%2BDir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMOSLoQ4%2F5IM4bbtL8KtwDU3thxzyIEu1ohDrLEl7zwmiSuk3SLtf9j%2BG8DICBCxOD2WEIvGByRppEz%2BN0BRYaNHJ67bBdRy4sBgQgLTKKbzLKknsUVRik6LljDxLRjLU3tqRtUg4VODcTGkYmPo6AqR0wFSAe1G9sjxZt3cieAh0rB7cLnaUwsuIx3w18YwilA9lHYfnvNLz2prYBSrWzOKzOdi8BmQyocLQ7GKw8rG4sbPN9Sr3yzDO3eaHbF5QFP7L7U33uCJktiwD6sllJnxVTEGDEIaAYGaCufni9f5z8bKVrdyhuRE12FAXTaMJiGu9KCZIl3qB5zQCW2LoE3ABujmm5LtIRceAhtk1h4ZmZNEEjSTuTVin6E0idatMnNmESNRxfb0%2B61xmKxHDbCV4j1Jcw8kRhLmPb4xgm8i5XSFMQS75hKZovSLI1bWEMF%2BAtwypDY0osZTBM6OmEbaDpQ2vR23pnXj%2BWxPr63kcA0nqrBtrXVBTHhgV3J9yPleCPTRLsy0q%2F49XYkl%2FJblcLdgbJSHGWc3kOd9wubVsF7FGYK02H%2Fvju9fLEEpIaruaMZZ4EckvtZfBtyLWRJkv6OBg5lWgTQwMZmZngbH2r%2BVwm4QILxnRwlh78KA%2FPK7Debz1FyBxRjtQw2uftwAY6pgFZOvEHo7W7zd%2B7KDmk9Cv1Nt0fN5csuDkseNbLx9Tbs0on9xC3q7HDbE%2Fihyvh1P%2BuIOUBOGCFuEBIMQpAZGZGVO1kuk%2Bbj49PcHR6xcE%2Feze7q3W4sNy8YljpUZDBLgW6h44bIWEfyKU6gWu%2B3gPM%2F3HwzUFrfTqeLzvQGtgDPCvKrLGH8ZjJdWAlb%2FV7fxfgygcrgRIQjcBUaZrTuPyyP0GZhc%2Bg&X-Amz-Signature=cd88c034e81eb5a527d518a0d6cd1d238ad62d8ccba5ea46748d42caa5a294cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWHNYBFU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEni%2FYVUUq4QAHZMIhOdUIy012%2B2czTZfBHrSYHPxdKwIgA6YjppxdmNRPWipB3TviHNP%2BzIzE%2BBaihSST3%2F7qXVIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDP%2BqBGcdkOlVDhE61ircA1GMhqJJM3ULwrNg%2F5TO1kCg0rSoWbmCN7F0qcJAZVNztgGIyBW7wIj23tdA%2B%2B28KZfaf3k1T0NneXOaZnyExoM4W6iDyaqeDYOJkl%2B1ph7XnoUBqHYqDYeV7l8y85kmBJleoqUppq9FZ7MOWNaS7s16DTSw2OBwSh%2BHhypRZIJEmeVKtc4GoV5gNHVwl1iF3uVRQv20eI%2FlK7EgARPdqPPy5xHXPtZaFCE%2BF4%2BEkXr8luwCBlBqBgA%2BLjEG6YMHO1q%2FxMy8SOKQAVnYKDQiKxYroTZJ4j7mqDK6%2B0TkzxlScLsLqhNXNNYygbKD2E7eWbnvHDuNViKgoCMLDZDvpxbwlWy9UXLHtdXWgZVgoM4Qimb4JN37xBjWappuh3yzGv%2FgxM0ncOF44W4Uz2ajU4Mnys7sADv2c7JL0ukYdue%2FHqoitgovCN9E2qxcjlN5p7VacPYQnOsVc5tLKiD558%2B%2FDnycN6hgCX7Z29kmeiCkCV4DXoIquTLk7Ck9HEZ81TkHI5FXGT6gcCgUAnTqNYBXhLipWZ2nCPWt6MgvnRosCP1PNHmDaypFRCfzDV%2F9V0jsPECWePE%2BjPmQo%2FP4hlNJ6HY4Vyp55dcGkksdGGrlRE0TTHVgFAmvORXBMO3n7cAGOqUBPPX7Mt1vZr%2FrXm%2FSgXrkeolOrHk%2BEM%2FqN%2BehuGehnPlna7iT%2BPE5kOc70r%2FflIi%2F6vvYqlEATef62lu5L7SUUb5gPXFXClk%2F2Qyh6U6KFmGH0U2W9DS0S6EhbOXKU4lJkjrKHgLSKAJyr6Y3mPRSuMmtv3qPUl41E348atvQMA9qg9lJlr6PGMXodN7xbsgTwkDKNisxR1BVjcFYTd58yE7DXNwH&X-Amz-Signature=8d8169490e6ef566e2e163dcc8502ac589d9c92e35fce78e7d4980fc1b8d488e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
