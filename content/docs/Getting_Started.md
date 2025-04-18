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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTL76BST%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FAIn%2BKqCmWOo3WUIuWxOtrqMqIUiXYJZknDPuGqqA1AiA%2BQZQIr3BkQjW%2BvZRskL3PbFOGF1fCGlw8v1HTOiE6Hir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMebjuLXBmKkyj38XoKtwD4NxNZpFl%2F%2BmBH94NPMPXmQmvERuX9dwR7iVRPCMR%2BRqgcur5uOBD5BVHeoQtyBZ5hrdhUwGI8Dc62FYSaCJrD4O816wxao0wyBgqY8ySo1h%2BKTsH8Bb2rA6osve6NxIksmf3prqDz1uUBryFrs3Fx8Zog7VT4lBkKCenkotFwc70a%2Ffe0b63q%2FE13BhCPj0XtCq52RhyiIpOS%2F%2Fo19Ik8EsQCX39sFzjiRnR39tBhKYH9O3sDr938s6rIVNMAlCk4BxQLf2Jb1Pkm7hxiEZ%2FiOp2TyzljSaXeV0KVO6qic0VJCWzEY5bkhW1Kq01rGapKeBNt%2B4QfDIfTjwabR0pOxGlqqNXeFG0VY8ef3CngRTh%2FOj23l7N38KfY0YCoAIO%2FE8BaRvkY3IVOPRKa6ikqWdKcx4Slb2S6rCv4FdgjHvq6%2BYDeAbZFGRlJjj4rtb%2B93eQ4SgbYD5gUjdk2mGly4UqAiuscv%2BoqKinpcNTwrSYedHmH%2BeFgSlVkwQfacgcIH2YhZ7E2E6%2Fst%2F7rqhz1KkEasC%2F7o223SGzI%2FHsl6IqLIYZFPXLvihSC4wVZGcjcKcl0%2FCVKlYN3VYkPkkQthkzHMFZb6TtivUtCxP5nrHHlAfSh6PkEet2OVgwhvSGwAY6pgGtYXfciJkDts%2FiaJvVR4C4fGhxmCHkHo1UY%2B%2B5ofaR9aeol%2BA%2FX13VkgnKaBngdPVQsYFZ%2FOBV%2BniQ3H5fj5V5PBFmPqfMcN%2B5IxI6mDgdKtGt12pT0A%2BgaSSuff3urC496fD%2FsKgxO61nj0l2AfndMfqGsbblbdYWFMsGvi59WR0UP1acnEwB4%2BvR9yxwgWaHqwUe7%2BIaO30lLaUiGURtxrsBbb%2B7&X-Amz-Signature=0b971afccd6ba4c9b3c0ca9d82624e8c58d1d3e0529fa6a198ee99ac56b12d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTL76BST%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FAIn%2BKqCmWOo3WUIuWxOtrqMqIUiXYJZknDPuGqqA1AiA%2BQZQIr3BkQjW%2BvZRskL3PbFOGF1fCGlw8v1HTOiE6Hir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMebjuLXBmKkyj38XoKtwD4NxNZpFl%2F%2BmBH94NPMPXmQmvERuX9dwR7iVRPCMR%2BRqgcur5uOBD5BVHeoQtyBZ5hrdhUwGI8Dc62FYSaCJrD4O816wxao0wyBgqY8ySo1h%2BKTsH8Bb2rA6osve6NxIksmf3prqDz1uUBryFrs3Fx8Zog7VT4lBkKCenkotFwc70a%2Ffe0b63q%2FE13BhCPj0XtCq52RhyiIpOS%2F%2Fo19Ik8EsQCX39sFzjiRnR39tBhKYH9O3sDr938s6rIVNMAlCk4BxQLf2Jb1Pkm7hxiEZ%2FiOp2TyzljSaXeV0KVO6qic0VJCWzEY5bkhW1Kq01rGapKeBNt%2B4QfDIfTjwabR0pOxGlqqNXeFG0VY8ef3CngRTh%2FOj23l7N38KfY0YCoAIO%2FE8BaRvkY3IVOPRKa6ikqWdKcx4Slb2S6rCv4FdgjHvq6%2BYDeAbZFGRlJjj4rtb%2B93eQ4SgbYD5gUjdk2mGly4UqAiuscv%2BoqKinpcNTwrSYedHmH%2BeFgSlVkwQfacgcIH2YhZ7E2E6%2Fst%2F7rqhz1KkEasC%2F7o223SGzI%2FHsl6IqLIYZFPXLvihSC4wVZGcjcKcl0%2FCVKlYN3VYkPkkQthkzHMFZb6TtivUtCxP5nrHHlAfSh6PkEet2OVgwhvSGwAY6pgGtYXfciJkDts%2FiaJvVR4C4fGhxmCHkHo1UY%2B%2B5ofaR9aeol%2BA%2FX13VkgnKaBngdPVQsYFZ%2FOBV%2BniQ3H5fj5V5PBFmPqfMcN%2B5IxI6mDgdKtGt12pT0A%2BgaSSuff3urC496fD%2FsKgxO61nj0l2AfndMfqGsbblbdYWFMsGvi59WR0UP1acnEwB4%2BvR9yxwgWaHqwUe7%2BIaO30lLaUiGURtxrsBbb%2B7&X-Amz-Signature=99687053850d69cad21a5b3f545d21396415e80a1d2fc3a01273fb4ba7fcbac3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XKXG4CR%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEDTKZlVMg%2BZeeZGc65OtR6MKHqN2QXp1lPXhy1HjDMAIhAO5t%2Bj3mr%2BkBZ3rDbTHz9qqYnOUNYe5RR5bo6Jx0ze5iKv8DCGwQABoMNjM3NDIzMTgzODA1IgxEWKIkY%2B%2Bc%2FObA8jUq3AMVUJ%2F0NCwJC2vZrfFFboWPSr5bnJgVxeWvm7X%2B9lwiPDDGVYwdxzksTWdhzrcwPH67UucUJHOZrfqU42wzzgwnP1pE7a2wF2KlYRvRbljjtDScHw3oGOzjcZmeJyrHWsyOPFNVRybOGuHQiwCzWQyWbGeDA3hLdacT2sFB6FBcGqh9lpc51ijk15tbHqE01RoBAF0kl35yzKV0sGLjy3hj5ED2LhyfKhdhgkIPEEWWjj7eFBDhl0d8jeQ6wE3AfZGUt%2FcFsGgn3I91BllZQ3RNm0uTdRtJgZtPIP%2Fc4Y9SRqgBEfSdq3ZlN%2BIw9vZofr8Tc3m3HjLWtH9n8aZj%2FOC32xFHGorj8tWrawxxPSHG8djqE7CwJ2%2BmTyRK6Z8fWC3GUvetgcZDaroBTI5QEsMe5YozOfDbCZFqHmbkCNZcSyP9tUTZia9%2BmxouqQblWRJv4p3%2BqqL47Lghf6c4KIt5zkvRFdpAvSL9MgaU8%2FEG13AaBAjuGLWrHFtZ4h%2FEexYb311881MLWhZHC7zvKnrlcnvfU9wkRSjOfpZ9gwhJF03pxk0w%2Bk3CEaos1AJnS%2FqD8tJR1UfpiQk5SkytGTaa%2B2Fdk2e5292bN%2BqNf54c9BERfor7Q4Hgh29b9jCX9IbABjqkAf4qFtaIFY8yY%2BSPXloXxmPR85ss7YLRhvMcDoBYzf2mcqMNoX2MMiam14rGen02bTsGQOqvM7XCZ%2B5hJ6hodvfJHYowYzFjiTTHtS37HbtTEsR9N8Wh08H4%2BuNtz3ZqKNsgJyYjldxYLNuBk4w9WRFiVcnG5tKGvA7Bae%2BEJ98EvoXQB5wuNfLymD48ncrezTtA5QDVGIihaGJr76P%2Fx1qnB3T8&X-Amz-Signature=ce2eb1cdc84ad66ce89c348c4438545fba0b8324b90862005f89253fe769950c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U24YQXAF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9d%2B626OXGQvRQbDuU4uPHtqHs07gmmJNV3wfqiikQQAiBfZe%2F22tl3wYb3fNyb22RIkcmNRuoQR0sbSxC533l%2FACr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMULLxCfSBWFaK9FSyKtwDASuTnJetyFKvLAuoMmfTRNOsPGbyla4pNpYLBEo%2BITMUEwTmFz6sgNW4og3e2YZ%2BPPSLdhA%2Bpp7T5cJbZLgin4AMQbMH%2FQlYRg6Khei3hhIpOCEHhzic0vIZWNOyL3PANWQ3DjzCX6iYGi8gDpnwkJDVC%2FlKMJwS5U2%2FaaOl9uS%2BCPrBP7AGzeRUb0Htv5ugj128IdRj5yHJsMl2hsg%2FdF5SArxRMymVBNrhhSAvnxB5USrtWGp48uj8GwMaoSjiPHusT8zJTfH%2BIr0uE82yOkmcw5wgncHlzTUTbFyf09ZJ5DK3iWXWPCs35jidMQG1Ml0TZi404SRjozFAraZwmnvlW2qu5iF23hJzTbgkXpToNYs3uj%2FiONmHMrr3iPtg3uAs5S15pZFs%2FmqUUQyoGVkF5zvsu99igTPr97sLXws6qVFVm86VahTzE9q9fsDUAaBGxQ6YPauemIESAWcGBLpUQFtlMbop4HBax0nrHj%2BMQgjTGOkv%2Fy4OGZem1vjjjiH%2BXXb%2BMnbYUPKx29SH1FTj9erOAL9YmOHcm21Oo3lItq7F809kc6ZUPRAiukTeWlwtQmBMr3oGjcNvqMsLwOAx45AdJr5NiQ9nFBGAP9pc4JdeuMt%2BpZh22oUwvfSGwAY6pgHZsehdIq433eJrMVB9NNbGrmPPKYzaNgxg6%2F%2Fwkl9d6c67W09jAYAFAYp20V9C4y2Ur7P%2Bhj8%2FaWPO1HBRzyVbHqiES95tD%2FSmapvMPpq0W2pIPjf5Z7blHCh%2BXh%2B2NnP5lwvtDsYcjU4%2Fqtr4PQpqGOsisitJdJNu25FrLa%2FwAZSbyfEgIV%2FTHIOzSNIgW%2BUJGOwXtzS%2FtySHieHQ%2FaSQfmOMElHT&X-Amz-Signature=cd616eb7dfedeeb1ee2a024f8b62433a550c679ef0dd58bd91ed2afab9a22496&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTL76BST%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FAIn%2BKqCmWOo3WUIuWxOtrqMqIUiXYJZknDPuGqqA1AiA%2BQZQIr3BkQjW%2BvZRskL3PbFOGF1fCGlw8v1HTOiE6Hir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMebjuLXBmKkyj38XoKtwD4NxNZpFl%2F%2BmBH94NPMPXmQmvERuX9dwR7iVRPCMR%2BRqgcur5uOBD5BVHeoQtyBZ5hrdhUwGI8Dc62FYSaCJrD4O816wxao0wyBgqY8ySo1h%2BKTsH8Bb2rA6osve6NxIksmf3prqDz1uUBryFrs3Fx8Zog7VT4lBkKCenkotFwc70a%2Ffe0b63q%2FE13BhCPj0XtCq52RhyiIpOS%2F%2Fo19Ik8EsQCX39sFzjiRnR39tBhKYH9O3sDr938s6rIVNMAlCk4BxQLf2Jb1Pkm7hxiEZ%2FiOp2TyzljSaXeV0KVO6qic0VJCWzEY5bkhW1Kq01rGapKeBNt%2B4QfDIfTjwabR0pOxGlqqNXeFG0VY8ef3CngRTh%2FOj23l7N38KfY0YCoAIO%2FE8BaRvkY3IVOPRKa6ikqWdKcx4Slb2S6rCv4FdgjHvq6%2BYDeAbZFGRlJjj4rtb%2B93eQ4SgbYD5gUjdk2mGly4UqAiuscv%2BoqKinpcNTwrSYedHmH%2BeFgSlVkwQfacgcIH2YhZ7E2E6%2Fst%2F7rqhz1KkEasC%2F7o223SGzI%2FHsl6IqLIYZFPXLvihSC4wVZGcjcKcl0%2FCVKlYN3VYkPkkQthkzHMFZb6TtivUtCxP5nrHHlAfSh6PkEet2OVgwhvSGwAY6pgGtYXfciJkDts%2FiaJvVR4C4fGhxmCHkHo1UY%2B%2B5ofaR9aeol%2BA%2FX13VkgnKaBngdPVQsYFZ%2FOBV%2BniQ3H5fj5V5PBFmPqfMcN%2B5IxI6mDgdKtGt12pT0A%2BgaSSuff3urC496fD%2FsKgxO61nj0l2AfndMfqGsbblbdYWFMsGvi59WR0UP1acnEwB4%2BvR9yxwgWaHqwUe7%2BIaO30lLaUiGURtxrsBbb%2B7&X-Amz-Signature=43839e95a3e09c7642b245d9ffae435e5610fb204fd8d389873070e95414dc7a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
