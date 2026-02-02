---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6LGPISF%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCkDAIu8%2FcziesDw5FDs5rMYOFLgK4Qp%2BftzIZUpnJ4CQIhAIonBpxMEtOcsVAVbhviL07jg7iXI53jE9OuOSJGYDRbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPT1kT6mVahPeR9nwq3APGhKX36%2FfKDkhsGUvZXIDmAy1%2B8cXvyMGFe6MxYyBBDFxc7TAYzO1TffF3KJwR2JdQNM%2FArXVcSM3%2Fn51XZIBdrx8upIcUOJSkvmbqUQ77m5xTNWP4kNe0qfpIDP6HnA2yjX%2BoAWcNzWAevwSfO%2FEoWXv7%2B2nWp1BNdB1sHFhOe3J4VLYwCjYEnXZub51RKQm3yhGJwqJDvXBZ%2B7kuxnXO28bfsKv8vZHUris%2Fm0V%2BoppKQ%2BQwuAa8YThQWwJljgBy%2BKKZKZ0J8PjBMvKYOc0D1jwfZjhiQ964%2BVVRgZNTan3hG78zIXEIzk3nmTGzcah0J%2B0QravFbR2ztaQwWiE3QPihw%2BFOQuR1k15K6gqC8viTOHPXZTEeIhdP8PRpKYLs9UDDuUsXm3RWyg3nf2gINj9UP%2FPZNPSD5vIOVRuPy%2BSWcjnFy9qvL3n7aeNy7HN9OGTViAAcjFHc7%2BLwe5QZfclPnNeG7hP6YJov%2BDrPcn%2BcUevacyr7Hpg4vRZqKVZ8sNNtqIYzD8Gg8j2lWPUaIOyB3%2BrKMWb7N0RmI5Rc%2F6DsL1ijXniIyZJ0hHg7BVX9PraSsUAp0cPzJ6Ppmgx2X2ct2JVyjTKcZMNJYOXKwvvhvSY%2BnKhXiEDJwDDUhoDMBjqkATAROSAVTRbVk8STPfxT6iqeON5ep8PgzpdMcOed%2BeOuBqghHLBd8MaAQWi%2FouzCIoVNdtWn9oBFlNWyFrft8p3kkJtuXN4VD9wCDyHfIQDC5%2Fdpi1p67Wn6O1VXRTIXitZXDE6eB80i2FMkITlkQStlImyjZ3E6DGrFdsfhdxZo6dGpCZc%2BV8No8SPJ0ApK2gbORadHQseHrAkuvy2SMZONM2pu&X-Amz-Signature=2aec2e22063cc7d419eec99ccfc19aaf1c7bfffd790fe593c32be4c3bfffd4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6LGPISF%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCkDAIu8%2FcziesDw5FDs5rMYOFLgK4Qp%2BftzIZUpnJ4CQIhAIonBpxMEtOcsVAVbhviL07jg7iXI53jE9OuOSJGYDRbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPT1kT6mVahPeR9nwq3APGhKX36%2FfKDkhsGUvZXIDmAy1%2B8cXvyMGFe6MxYyBBDFxc7TAYzO1TffF3KJwR2JdQNM%2FArXVcSM3%2Fn51XZIBdrx8upIcUOJSkvmbqUQ77m5xTNWP4kNe0qfpIDP6HnA2yjX%2BoAWcNzWAevwSfO%2FEoWXv7%2B2nWp1BNdB1sHFhOe3J4VLYwCjYEnXZub51RKQm3yhGJwqJDvXBZ%2B7kuxnXO28bfsKv8vZHUris%2Fm0V%2BoppKQ%2BQwuAa8YThQWwJljgBy%2BKKZKZ0J8PjBMvKYOc0D1jwfZjhiQ964%2BVVRgZNTan3hG78zIXEIzk3nmTGzcah0J%2B0QravFbR2ztaQwWiE3QPihw%2BFOQuR1k15K6gqC8viTOHPXZTEeIhdP8PRpKYLs9UDDuUsXm3RWyg3nf2gINj9UP%2FPZNPSD5vIOVRuPy%2BSWcjnFy9qvL3n7aeNy7HN9OGTViAAcjFHc7%2BLwe5QZfclPnNeG7hP6YJov%2BDrPcn%2BcUevacyr7Hpg4vRZqKVZ8sNNtqIYzD8Gg8j2lWPUaIOyB3%2BrKMWb7N0RmI5Rc%2F6DsL1ijXniIyZJ0hHg7BVX9PraSsUAp0cPzJ6Ppmgx2X2ct2JVyjTKcZMNJYOXKwvvhvSY%2BnKhXiEDJwDDUhoDMBjqkATAROSAVTRbVk8STPfxT6iqeON5ep8PgzpdMcOed%2BeOuBqghHLBd8MaAQWi%2FouzCIoVNdtWn9oBFlNWyFrft8p3kkJtuXN4VD9wCDyHfIQDC5%2Fdpi1p67Wn6O1VXRTIXitZXDE6eB80i2FMkITlkQStlImyjZ3E6DGrFdsfhdxZo6dGpCZc%2BV8No8SPJ0ApK2gbORadHQseHrAkuvy2SMZONM2pu&X-Amz-Signature=94cfd34aeee669a3ab623917d37c2fb612b5c0428454f79031eaf3ac7d30935c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6LGPISF%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCkDAIu8%2FcziesDw5FDs5rMYOFLgK4Qp%2BftzIZUpnJ4CQIhAIonBpxMEtOcsVAVbhviL07jg7iXI53jE9OuOSJGYDRbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPT1kT6mVahPeR9nwq3APGhKX36%2FfKDkhsGUvZXIDmAy1%2B8cXvyMGFe6MxYyBBDFxc7TAYzO1TffF3KJwR2JdQNM%2FArXVcSM3%2Fn51XZIBdrx8upIcUOJSkvmbqUQ77m5xTNWP4kNe0qfpIDP6HnA2yjX%2BoAWcNzWAevwSfO%2FEoWXv7%2B2nWp1BNdB1sHFhOe3J4VLYwCjYEnXZub51RKQm3yhGJwqJDvXBZ%2B7kuxnXO28bfsKv8vZHUris%2Fm0V%2BoppKQ%2BQwuAa8YThQWwJljgBy%2BKKZKZ0J8PjBMvKYOc0D1jwfZjhiQ964%2BVVRgZNTan3hG78zIXEIzk3nmTGzcah0J%2B0QravFbR2ztaQwWiE3QPihw%2BFOQuR1k15K6gqC8viTOHPXZTEeIhdP8PRpKYLs9UDDuUsXm3RWyg3nf2gINj9UP%2FPZNPSD5vIOVRuPy%2BSWcjnFy9qvL3n7aeNy7HN9OGTViAAcjFHc7%2BLwe5QZfclPnNeG7hP6YJov%2BDrPcn%2BcUevacyr7Hpg4vRZqKVZ8sNNtqIYzD8Gg8j2lWPUaIOyB3%2BrKMWb7N0RmI5Rc%2F6DsL1ijXniIyZJ0hHg7BVX9PraSsUAp0cPzJ6Ppmgx2X2ct2JVyjTKcZMNJYOXKwvvhvSY%2BnKhXiEDJwDDUhoDMBjqkATAROSAVTRbVk8STPfxT6iqeON5ep8PgzpdMcOed%2BeOuBqghHLBd8MaAQWi%2FouzCIoVNdtWn9oBFlNWyFrft8p3kkJtuXN4VD9wCDyHfIQDC5%2Fdpi1p67Wn6O1VXRTIXitZXDE6eB80i2FMkITlkQStlImyjZ3E6DGrFdsfhdxZo6dGpCZc%2BV8No8SPJ0ApK2gbORadHQseHrAkuvy2SMZONM2pu&X-Amz-Signature=43867bbdd1ad4bdc45579547be48a0ab172712a32abee26a7c5dab47043841f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQXACLLW%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFjpMeNFBLyeoTk43hRTijfjxwCnS4ik7Wi6jpNbcprSAiAUsKKrcv7uf39uhRHqpLOpkXhPrK6hBEMSFlXQqV4sCyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8O2aNpQUmXDngFJjKtwDf53SwWjcNkS6KGuaFnB%2BmCpicutIYvQGZk1ZBt8yfECBBLb9p77gUIhhzKvxAUs8YDplUqnCY9MicyJRGyxNQnp8VPKIPE0S5LxVWoVoRQSBVeZzHno3TVh5OewLPXACOC%2FKnyJp1ZmG3Tthj3yRgc1nXY8CUGUJsoqlG25aG3RX%2Bf6Pmr7D2RqwSFfTYVkjlrPDGPs6QfOLiMF%2FEiA%2F9jrORS0dhdPMm%2BTiygS7DZJ6m%2F1jHKeXv5rj%2B8oVYUWBoMmu67f5jn3EgAtrhdLBEpPFVzGn0sQJdWG68U1MCNiscQB4czHV%2BqkZRZ%2F6JFwd2umToc%2FTawIoDozRO3ypEuAHPgmmhYUw%2FEgoNWTy%2FtKD1yWDc0617W1e82BHSzS0zW5sLIkKv6bqo73vAB%2FdO6Zcg7lOJYtW15Hoa1CzPM9%2Bu6z3PJtK%2FjzUrBea%2FOXah9qZ8DEJ39fYFtrsRXblP7YVlCSWmaLyU8hrXxge5zxQWT0k910ZqTPjyph06c0c%2FiqGvhA07es7AGjVAqIzO38nZzEBukjCetvGmvkmHICPSJu0bPf%2Fti%2BC4YppL9Hvuq%2FqiznA6wCxTz9QtU93Shs00z0BbNhs2MxPZBO1VjlQOFakwjflDgV2HkUwmYiAzAY6pgEeR9ep75u6zjrhtlG6X7bfOhlgVRqSGgbfuh46np9ZKyfhwfiPoIx%2BbHHrqNGrin4wEMRV74DuU4ddEjRZyrtvcvO%2BICcvZyNmgxIsBoVsSTUgfFZ%2FaCw9vxs5O5kUSsiB2tF5QebnKKWRVa12HDPspI0ltHRiMK5oTbAz18ziKTtpp7Wwp0wuMaHhMqIi46unXw3F8jU6JGQKiyg4r5ateO7wHxY3&X-Amz-Signature=6255e0410f18c29aae09dfa4300ce6c8177f2011add3d033f22290f0930051f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R6MZIHP%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDRu3sCXL4IhHZ4DHj554P2wRn%2F0wyYUriGswcVORzdzgIhAM1MqUajq6lJhyZ0U7si9drL9OWRYq5zpUs99TXCB8rqKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXkjkwoXFnUNCSo8gq3ANevAFTl7VIonrW%2FCiI6NFeTfae9onKIyFRAPpe6%2B9eWkcWWVvTvmWaxiDS2q0g%2BRZcc972LNS5xb%2B%2FS6ETMoby2jRFBF2ze2MgvwG49ypbj3viR8NVigxSBmsoOHnXKnVRIovTHW7IR%2BUxuZCk8ZAqDUXMRCnnGG7acfNCsPgU0eJAqxPnTv0AM6Giw47Vu7cEImI4oii0Ce4AUrEi%2BzD%2FwPTLDVWCma1TOaQqiPvfEyW%2BlfGav92359ufqhJD9H7k9ZekZMaeo3rxbZLOs9pDzOQ8RuecX%2B8Vt14gbb%2BvLzSv7N1lKWLIM2cdgn%2FpnsZb9k17z3z9uDPuNmji5WVEy7PEWRkumuBZBuLFd3ASO4I4cz0q7t0B5%2BqBRLPyf%2BCEkx0rdzydP0u9joY6ReWq9gfDZ7HCBgv%2FbP6JWE%2FHVCz80m3fWSp6nzT6jDX6zMncbRHAU%2F%2BfSuuYmH1zb2kapbn0w0oCg7CHDteSSfIn144EqprLCd3FebTyChKFDKiWYJ51dRLMMk8Iv6HL1LHwAvkxvkWcf4REJXj%2BubJIP4wo55Afx3qQArUW3muPua2Yfm3yssAZwzNo6OD9AxOQomfL3hR5BYD4sv4dGhmMZAsQ%2BKN67zQxaYY83zCCiIDMBjqkAVjVb3gJlZQ6Oq%2BvoZAD3HlM3ZdKffG%2BsywUDYgbKTD3qTxxwPokBt1RhP1aZNpUePHPxg5Qu6sduGAi8daw%2FXUWopIE3Rt95fQZxzUG0dKG9xZPwspbuB%2BhCubGh1QBYceSV2e6FxEOAYlJrXoJaa6qLTguRfWT1jLAq5cifve3RxL9Yi0DQggc3RRzC3qb1WQK7hj9lz3KWjDJCN4Anvbisnh3&X-Amz-Signature=9dd99d64f8ea6aea9e758bf0be937b129c4deff701ff01493e53e9200087213d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6LGPISF%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCkDAIu8%2FcziesDw5FDs5rMYOFLgK4Qp%2BftzIZUpnJ4CQIhAIonBpxMEtOcsVAVbhviL07jg7iXI53jE9OuOSJGYDRbKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPT1kT6mVahPeR9nwq3APGhKX36%2FfKDkhsGUvZXIDmAy1%2B8cXvyMGFe6MxYyBBDFxc7TAYzO1TffF3KJwR2JdQNM%2FArXVcSM3%2Fn51XZIBdrx8upIcUOJSkvmbqUQ77m5xTNWP4kNe0qfpIDP6HnA2yjX%2BoAWcNzWAevwSfO%2FEoWXv7%2B2nWp1BNdB1sHFhOe3J4VLYwCjYEnXZub51RKQm3yhGJwqJDvXBZ%2B7kuxnXO28bfsKv8vZHUris%2Fm0V%2BoppKQ%2BQwuAa8YThQWwJljgBy%2BKKZKZ0J8PjBMvKYOc0D1jwfZjhiQ964%2BVVRgZNTan3hG78zIXEIzk3nmTGzcah0J%2B0QravFbR2ztaQwWiE3QPihw%2BFOQuR1k15K6gqC8viTOHPXZTEeIhdP8PRpKYLs9UDDuUsXm3RWyg3nf2gINj9UP%2FPZNPSD5vIOVRuPy%2BSWcjnFy9qvL3n7aeNy7HN9OGTViAAcjFHc7%2BLwe5QZfclPnNeG7hP6YJov%2BDrPcn%2BcUevacyr7Hpg4vRZqKVZ8sNNtqIYzD8Gg8j2lWPUaIOyB3%2BrKMWb7N0RmI5Rc%2F6DsL1ijXniIyZJ0hHg7BVX9PraSsUAp0cPzJ6Ppmgx2X2ct2JVyjTKcZMNJYOXKwvvhvSY%2BnKhXiEDJwDDUhoDMBjqkATAROSAVTRbVk8STPfxT6iqeON5ep8PgzpdMcOed%2BeOuBqghHLBd8MaAQWi%2FouzCIoVNdtWn9oBFlNWyFrft8p3kkJtuXN4VD9wCDyHfIQDC5%2Fdpi1p67Wn6O1VXRTIXitZXDE6eB80i2FMkITlkQStlImyjZ3E6DGrFdsfhdxZo6dGpCZc%2BV8No8SPJ0ApK2gbORadHQseHrAkuvy2SMZONM2pu&X-Amz-Signature=f9670cc4c316abe01e9d0f1ddd7e5325c3fb4f3009344bbbfa70a369fdbffd7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
