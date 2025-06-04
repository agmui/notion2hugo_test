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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674ZIZ7M4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCOeNockMK4zD9M5Ydwu5B41Nobzw2YzC%2FzoWg%2BPKxkxQIhAIlzH4Eu8gjiq%2FvOc%2FXqIshri4jOstnzRe5I5%2BJki5FYKv8DCDcQABoMNjM3NDIzMTgzODA1Igw4ogUC%2F1zS9dXikJwq3AN1MzsZnDAxUy7vyn7m5IzKlvvhOkGAd1QVpq%2Fm9IHmovuoyZVuHQzNhTcHwUmjfhWpZfOAc%2BnehBvzJzR7fexvs9A7WjjC4qvsr3rVX9kjR0gpXGnZm2sMRUzHXXQxeD22jqaz4oOhCjDTbNWqh4q7snaT2b9hDZcdhbI6fpmS5WPEOLriSfvA9u1dx1XYPIl9ddJaL0tBGTi7qKh3jCzSQ5rGSaO%2FQWYom9wwzr26ZK19c7dwSXnnxlKrYlmOJwCnHlbeZK1qEs06w18Agvkkm9vu81ea%2FmENeFb91ycOeRJqb8UQ3CpDovmPp8yWtNdL8%2F%2Bor%2B1UiScqjP406kUPAZJFw410yjvkBelVt01YdhmCQnDHpl4ITwvuH34ykrqsMQiYj5sC6sPLM3OBiEpMdnDMR4NSeFxykbqqypBYTUlMpmcPR8utWMOyYeIOA6lIPvlfK7ZjVwQ%2F9mwh31xqjhzRC9DWphGAVmjeKivWpFO7xWbFOJ1xS704dE9ZTqoh%2Fy5rvm3kbgAJBmtD21zx1eSO4o6Af2ItxxXMxw%2BPYriI2%2FsIZwlEfMPWTvzFh4VA6xiDPe1fbmZP9Ifb12%2BbVh1H70DilDit67gEsyjVb5AUKQCAqW7Mv2ZQLjCvhYPCBjqkAUtGzpEfVQiYBlYd6h011%2F44ewZDNqU7rw4sPi8D4UKa1Hj9kRp79pUgJZOjfrRdezMOk7f1Iscfc1eWjcSN9XlumN4aocIX0mNIti8g%2FsdM%2BdxWYXplO9q8SBwSkQfX4syZNynWlJcapwqIJbRQtLCwEdhu1ktQk%2B9ZzWYAysn77SuVApuS03wSgzq9SNsQ9RVgtf7hjwnI0awhlhYdpuBlZs0a&X-Amz-Signature=8e81df2163a812c3e3998fd9c422c7f9afaf04a73936ecbb1cfb9e3f925120e1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674ZIZ7M4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCOeNockMK4zD9M5Ydwu5B41Nobzw2YzC%2FzoWg%2BPKxkxQIhAIlzH4Eu8gjiq%2FvOc%2FXqIshri4jOstnzRe5I5%2BJki5FYKv8DCDcQABoMNjM3NDIzMTgzODA1Igw4ogUC%2F1zS9dXikJwq3AN1MzsZnDAxUy7vyn7m5IzKlvvhOkGAd1QVpq%2Fm9IHmovuoyZVuHQzNhTcHwUmjfhWpZfOAc%2BnehBvzJzR7fexvs9A7WjjC4qvsr3rVX9kjR0gpXGnZm2sMRUzHXXQxeD22jqaz4oOhCjDTbNWqh4q7snaT2b9hDZcdhbI6fpmS5WPEOLriSfvA9u1dx1XYPIl9ddJaL0tBGTi7qKh3jCzSQ5rGSaO%2FQWYom9wwzr26ZK19c7dwSXnnxlKrYlmOJwCnHlbeZK1qEs06w18Agvkkm9vu81ea%2FmENeFb91ycOeRJqb8UQ3CpDovmPp8yWtNdL8%2F%2Bor%2B1UiScqjP406kUPAZJFw410yjvkBelVt01YdhmCQnDHpl4ITwvuH34ykrqsMQiYj5sC6sPLM3OBiEpMdnDMR4NSeFxykbqqypBYTUlMpmcPR8utWMOyYeIOA6lIPvlfK7ZjVwQ%2F9mwh31xqjhzRC9DWphGAVmjeKivWpFO7xWbFOJ1xS704dE9ZTqoh%2Fy5rvm3kbgAJBmtD21zx1eSO4o6Af2ItxxXMxw%2BPYriI2%2FsIZwlEfMPWTvzFh4VA6xiDPe1fbmZP9Ifb12%2BbVh1H70DilDit67gEsyjVb5AUKQCAqW7Mv2ZQLjCvhYPCBjqkAUtGzpEfVQiYBlYd6h011%2F44ewZDNqU7rw4sPi8D4UKa1Hj9kRp79pUgJZOjfrRdezMOk7f1Iscfc1eWjcSN9XlumN4aocIX0mNIti8g%2FsdM%2BdxWYXplO9q8SBwSkQfX4syZNynWlJcapwqIJbRQtLCwEdhu1ktQk%2B9ZzWYAysn77SuVApuS03wSgzq9SNsQ9RVgtf7hjwnI0awhlhYdpuBlZs0a&X-Amz-Signature=59e1273140bdc9b60ce526af99cf99a6ed9d6b6ba110c0ea5ed9fdbd490b11b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674ZIZ7M4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCOeNockMK4zD9M5Ydwu5B41Nobzw2YzC%2FzoWg%2BPKxkxQIhAIlzH4Eu8gjiq%2FvOc%2FXqIshri4jOstnzRe5I5%2BJki5FYKv8DCDcQABoMNjM3NDIzMTgzODA1Igw4ogUC%2F1zS9dXikJwq3AN1MzsZnDAxUy7vyn7m5IzKlvvhOkGAd1QVpq%2Fm9IHmovuoyZVuHQzNhTcHwUmjfhWpZfOAc%2BnehBvzJzR7fexvs9A7WjjC4qvsr3rVX9kjR0gpXGnZm2sMRUzHXXQxeD22jqaz4oOhCjDTbNWqh4q7snaT2b9hDZcdhbI6fpmS5WPEOLriSfvA9u1dx1XYPIl9ddJaL0tBGTi7qKh3jCzSQ5rGSaO%2FQWYom9wwzr26ZK19c7dwSXnnxlKrYlmOJwCnHlbeZK1qEs06w18Agvkkm9vu81ea%2FmENeFb91ycOeRJqb8UQ3CpDovmPp8yWtNdL8%2F%2Bor%2B1UiScqjP406kUPAZJFw410yjvkBelVt01YdhmCQnDHpl4ITwvuH34ykrqsMQiYj5sC6sPLM3OBiEpMdnDMR4NSeFxykbqqypBYTUlMpmcPR8utWMOyYeIOA6lIPvlfK7ZjVwQ%2F9mwh31xqjhzRC9DWphGAVmjeKivWpFO7xWbFOJ1xS704dE9ZTqoh%2Fy5rvm3kbgAJBmtD21zx1eSO4o6Af2ItxxXMxw%2BPYriI2%2FsIZwlEfMPWTvzFh4VA6xiDPe1fbmZP9Ifb12%2BbVh1H70DilDit67gEsyjVb5AUKQCAqW7Mv2ZQLjCvhYPCBjqkAUtGzpEfVQiYBlYd6h011%2F44ewZDNqU7rw4sPi8D4UKa1Hj9kRp79pUgJZOjfrRdezMOk7f1Iscfc1eWjcSN9XlumN4aocIX0mNIti8g%2FsdM%2BdxWYXplO9q8SBwSkQfX4syZNynWlJcapwqIJbRQtLCwEdhu1ktQk%2B9ZzWYAysn77SuVApuS03wSgzq9SNsQ9RVgtf7hjwnI0awhlhYdpuBlZs0a&X-Amz-Signature=5a3f7368176456a709292bdc36ce6d7fb7bfe30275ed3e2eba3b1b1055f40374&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMRK7WJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCbylS66iUAL4DtCIJa%2FLskZPVGwAlZY50NXu8p4UOaTAIgQk7rtTjVVkpjs1nj%2FVnL0Lc6Wtl0Tpe24powtlhHAtYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM26Dmfv4NPqAGrQqircA9AxzCeSBGQgo1cQSZSZy0Bc2bdkfIHVZvykXyXxX1sWIsAU3g5Kyd%2BnpE2peDTJFubFrz9G5s%2Bhxhh%2BoS72ArcTuFfxSNRJyBXtoG6kHeBdISM3SbUo3kUO5MHYlncl%2BY8Tm9lfbes3qr1D45cUj9OXEePffZDaROn7lp1AAvlI4K0BgL1qwXfjsGDQ5NwPzWhsqchrFQqCMW7aRF4TFs9Nd63cS80YDlz0qHdd40UzQIlKqTVB5278XDAQc9iavMt%2FR%2Bz3AwNWBJWjn%2BtWr0sSQAAIRpslXv7SKTt80yDedLzQr%2Ba%2BIuWzVj9esHi%2Bd9QJhqZ4saKNB%2BkwrSdevYoB41cm523OhyTqXI1EOfQzW9LjIGr%2Byf2tGTBqhOe5CDnZIUmWMHFH786G9AYgrXRdJgnlvRj%2Ffsi0zDADtzzIUapFfolhadRWwK%2BIZ1iX4z90Fy6xRG%2FFPreDSQXK6kTL%2B9S3upGFg4i54z0xI7yhN2K1371pwOgtvd28s6JqI7OrTC5%2BwRuvS1eIcAON%2Fm1LOOFpCXgWqQFdDFGAh44kdeE61JJwy8YT9BdCVx0SWZva%2BF9tdKX3PPgRo5uNAe%2FfXRGpqoa3Ix5uc8CIT9kXpIOX0Ja%2BVZLe7RX2MK2Fg8IGOqUBcyK7MuSh%2FXGd7EZ7CD7nxziDPvWlFlyJviomwlDxzGZZRpbOW5Ts1QSkAVsg%2Bsls4f%2BgXnuVfhUPs8MDSp%2FQBmIB6y9HFyge57r8cd5%2BeIMX8EP7JcL5MLxctUqzssoAmsv63GCE%2FDLwMabxE7po7UD1qo6DpxN9AgyPGlSSuM9YBvvrW5%2F3gXQUP0uwo2nc5YVQKq0Azy4Su98sWgc2w38L9q5B&X-Amz-Signature=3002c26f864e929eaa53890aba54623e944bfd231d2ba43ec0a549b861e27480&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWIIQLXA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIB3L7zjP7X2mKZUEQyp63hhrJlOiLfEDDhHV1UNZn4AmAiEA%2FuP9u96oZXsnxY2sCIK9mD0e%2FBjfGnI3IY%2B9m2rQ1Ogq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLfZVQwTWXrrzXL5iyrcA8mrsV0Swv7vG1S1FeThKBCoELawEcJ82PQml4opsZ0qF93f8mSGNUH%2BY0TlzrpnZHLWdHy1NeE5Ki8EZAsmz1kq%2BQqYBBenr94CZaW8zpQQS3bL15s2xh0kHAcxCUdM%2BOUrrMcrUNFQDlAO6BTScYrOzExqLmsAvAjrupRh2R681WxfksoktEWHoOl0skJxgugEZSrUHkpstxBVNGXdwYpIy3g3e5ODX3ztLAJwusIjkGkKzgjasMYhv9zOjFuXuDIlNdxyMJYAF2ng2a4pquwxNGMgNaQ4rnT0ZZr1K4pfQS%2FdjWZ7Wmvc%2FQMfX4bXfHmy4bYBNGyOQLHe4QrlcMNAiEf55syKP0SpHYm3rMXHArdHFOB29dnQl6nxywdA0H5YEMBVjXi7ujwFaabYDox1lmzL0Pmy%2BplLL9XCivv3nEQPWNggBrNSUGHvKlrze17JrlWt%2FBxnqGKS1bcCHPGexGrPXxcYALJE9MQpESy9zaXW2CIjG8CTE8GDp64OxjIuGiYh7qqCAtLUVj3eQKHIFr5Vcx3nH3pqFDaVhJdb5M0akDee0hU9MVWmSr9pY6w%2Fa4C31Lbys9eO0Q%2BXIsyQ5%2BEjXgD6SsMG0RRuokTGR9KhgnLJGiwbZ3QOMNmfg8IGOqUBLKM7bnlEtCpzA%2BiEwF9n9y4nDVQmnUkkFy9n7mFH1U%2FHOyCUlw1zmZvWhDtMg2iFXMTBab%2BGuKwNF14Ff%2BU17kp%2Fyjc1BDxaVr3lJwl1Ta6K%2BPHqCFqbm3cFQ2MstEgbwD8DndKg0NUmkWNfQcZgX8sJFBZhxTRio61D6GXjKrFUmHn6Bcv0vaauVWyC40%2FjpB6iBEyiJJJbFfPzyt%2BzBuXKDDc3&X-Amz-Signature=c4e40fed962cc38196ab8031d99fc5a7389866a0acee6359f3e8de2172fde952&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674ZIZ7M4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCOeNockMK4zD9M5Ydwu5B41Nobzw2YzC%2FzoWg%2BPKxkxQIhAIlzH4Eu8gjiq%2FvOc%2FXqIshri4jOstnzRe5I5%2BJki5FYKv8DCDcQABoMNjM3NDIzMTgzODA1Igw4ogUC%2F1zS9dXikJwq3AN1MzsZnDAxUy7vyn7m5IzKlvvhOkGAd1QVpq%2Fm9IHmovuoyZVuHQzNhTcHwUmjfhWpZfOAc%2BnehBvzJzR7fexvs9A7WjjC4qvsr3rVX9kjR0gpXGnZm2sMRUzHXXQxeD22jqaz4oOhCjDTbNWqh4q7snaT2b9hDZcdhbI6fpmS5WPEOLriSfvA9u1dx1XYPIl9ddJaL0tBGTi7qKh3jCzSQ5rGSaO%2FQWYom9wwzr26ZK19c7dwSXnnxlKrYlmOJwCnHlbeZK1qEs06w18Agvkkm9vu81ea%2FmENeFb91ycOeRJqb8UQ3CpDovmPp8yWtNdL8%2F%2Bor%2B1UiScqjP406kUPAZJFw410yjvkBelVt01YdhmCQnDHpl4ITwvuH34ykrqsMQiYj5sC6sPLM3OBiEpMdnDMR4NSeFxykbqqypBYTUlMpmcPR8utWMOyYeIOA6lIPvlfK7ZjVwQ%2F9mwh31xqjhzRC9DWphGAVmjeKivWpFO7xWbFOJ1xS704dE9ZTqoh%2Fy5rvm3kbgAJBmtD21zx1eSO4o6Af2ItxxXMxw%2BPYriI2%2FsIZwlEfMPWTvzFh4VA6xiDPe1fbmZP9Ifb12%2BbVh1H70DilDit67gEsyjVb5AUKQCAqW7Mv2ZQLjCvhYPCBjqkAUtGzpEfVQiYBlYd6h011%2F44ewZDNqU7rw4sPi8D4UKa1Hj9kRp79pUgJZOjfrRdezMOk7f1Iscfc1eWjcSN9XlumN4aocIX0mNIti8g%2FsdM%2BdxWYXplO9q8SBwSkQfX4syZNynWlJcapwqIJbRQtLCwEdhu1ktQk%2B9ZzWYAysn77SuVApuS03wSgzq9SNsQ9RVgtf7hjwnI0awhlhYdpuBlZs0a&X-Amz-Signature=9cf9f3fb23b9c2c2294963eef7cbe85940c371961763609c8f9cf33db8d0d9da&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
