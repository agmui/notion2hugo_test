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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TJBOOBB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAsLnfcjlp4MC4tqzcU9iyFbvvZm7GPoiJdflTlidGAAAiAxVIedIBS194tPP2%2BAPNIDTqa6VTA0jCZI57Ju9kJ01Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMB2520dCHX%2BP%2F2U%2BMKtwDS8lZAZGdL7pFa39z81Qrz%2F1NEYzRlb15IgehhSC6m3a%2FRjXcHfrAWoL3ff8Cdh1buJHUqlyDeKNXAKrL02dxxVZKDZi0RureHrukxVWgIbKL7LrLXMSS2a048lRIbZIQ1WdvMMuVhBt6Zc133J1vg%2FP0Xr2e1t3t1y4HpEyeDFE%2FPKZ2tJZejZcebP81LbZIqPaL%2FjWY%2BewzO%2FUgSVWeRw3Hi2fIynbV9vZSZk19vhHHn%2BF5IiGuT8576%2F0i0HzBR%2Br5u8kBywLyS1RqoKSW4uSGp992CMWOElO0LT%2BrhI4D1iKMFU5fK9cSaxf0TcX0g5fG8iu10ngjcDyCggMOgESi07S6G%2FGciN1IYWmgY4TKCNDs3qJEE3at8UFo8643BYiwGHZtDkH%2FIqQjqanC2lYE%2FuSnaJbPfhHng%2FrqQJq2WHONpY8xGOvgSrT76T7PoW%2BsK2eKJgNuC9eLX3xq6%2BejPKL9lJQjNvdTU81JgQMFcsSXbgPK8uqNCz8AvMGbdDQ0hpKBbINdZfV4bLAVj0PaVWrS8Nee4OKST96Nogt70Yi7gcwUD9yB7w%2FG6%2FQy5EW71IaxzLwv52x9KNXBBwDZ9WpT9hT2%2BiYyM6zN6vcYFTIunHqVwTzXxGUwt5awwwY6pgFy62w53LIPsbBEKUlwCMa0Sncg7i9Ums%2F4eZO1emJVHnhkm%2BLxueE3yGk3cv7gbvEqfWck%2FHY5PC6sGOcAb3q4Kgs8ltgigldOGxF0t%2Fdk6U8c1nPY%2FSQJ7opkQy2SfcCOBzL2NyRoXys7aueklxaBqTWhP1%2Fl4yF4KElM5Go%2BzqsU%2FVeWYpgTKHKIdzvADp%2FwAzRd3NRt0axtUyd9vzC5F%2BmigSdo&X-Amz-Signature=f102c488082217e9cedd5b3466b81436dc056161489fa8b756c06e54649c87ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TJBOOBB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAsLnfcjlp4MC4tqzcU9iyFbvvZm7GPoiJdflTlidGAAAiAxVIedIBS194tPP2%2BAPNIDTqa6VTA0jCZI57Ju9kJ01Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMB2520dCHX%2BP%2F2U%2BMKtwDS8lZAZGdL7pFa39z81Qrz%2F1NEYzRlb15IgehhSC6m3a%2FRjXcHfrAWoL3ff8Cdh1buJHUqlyDeKNXAKrL02dxxVZKDZi0RureHrukxVWgIbKL7LrLXMSS2a048lRIbZIQ1WdvMMuVhBt6Zc133J1vg%2FP0Xr2e1t3t1y4HpEyeDFE%2FPKZ2tJZejZcebP81LbZIqPaL%2FjWY%2BewzO%2FUgSVWeRw3Hi2fIynbV9vZSZk19vhHHn%2BF5IiGuT8576%2F0i0HzBR%2Br5u8kBywLyS1RqoKSW4uSGp992CMWOElO0LT%2BrhI4D1iKMFU5fK9cSaxf0TcX0g5fG8iu10ngjcDyCggMOgESi07S6G%2FGciN1IYWmgY4TKCNDs3qJEE3at8UFo8643BYiwGHZtDkH%2FIqQjqanC2lYE%2FuSnaJbPfhHng%2FrqQJq2WHONpY8xGOvgSrT76T7PoW%2BsK2eKJgNuC9eLX3xq6%2BejPKL9lJQjNvdTU81JgQMFcsSXbgPK8uqNCz8AvMGbdDQ0hpKBbINdZfV4bLAVj0PaVWrS8Nee4OKST96Nogt70Yi7gcwUD9yB7w%2FG6%2FQy5EW71IaxzLwv52x9KNXBBwDZ9WpT9hT2%2BiYyM6zN6vcYFTIunHqVwTzXxGUwt5awwwY6pgFy62w53LIPsbBEKUlwCMa0Sncg7i9Ums%2F4eZO1emJVHnhkm%2BLxueE3yGk3cv7gbvEqfWck%2FHY5PC6sGOcAb3q4Kgs8ltgigldOGxF0t%2Fdk6U8c1nPY%2FSQJ7opkQy2SfcCOBzL2NyRoXys7aueklxaBqTWhP1%2Fl4yF4KElM5Go%2BzqsU%2FVeWYpgTKHKIdzvADp%2FwAzRd3NRt0axtUyd9vzC5F%2BmigSdo&X-Amz-Signature=e6ef35f16d33ece195f9670f43f3396997ece30ff85f3a6a545e2187488d4861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TJBOOBB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAsLnfcjlp4MC4tqzcU9iyFbvvZm7GPoiJdflTlidGAAAiAxVIedIBS194tPP2%2BAPNIDTqa6VTA0jCZI57Ju9kJ01Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMB2520dCHX%2BP%2F2U%2BMKtwDS8lZAZGdL7pFa39z81Qrz%2F1NEYzRlb15IgehhSC6m3a%2FRjXcHfrAWoL3ff8Cdh1buJHUqlyDeKNXAKrL02dxxVZKDZi0RureHrukxVWgIbKL7LrLXMSS2a048lRIbZIQ1WdvMMuVhBt6Zc133J1vg%2FP0Xr2e1t3t1y4HpEyeDFE%2FPKZ2tJZejZcebP81LbZIqPaL%2FjWY%2BewzO%2FUgSVWeRw3Hi2fIynbV9vZSZk19vhHHn%2BF5IiGuT8576%2F0i0HzBR%2Br5u8kBywLyS1RqoKSW4uSGp992CMWOElO0LT%2BrhI4D1iKMFU5fK9cSaxf0TcX0g5fG8iu10ngjcDyCggMOgESi07S6G%2FGciN1IYWmgY4TKCNDs3qJEE3at8UFo8643BYiwGHZtDkH%2FIqQjqanC2lYE%2FuSnaJbPfhHng%2FrqQJq2WHONpY8xGOvgSrT76T7PoW%2BsK2eKJgNuC9eLX3xq6%2BejPKL9lJQjNvdTU81JgQMFcsSXbgPK8uqNCz8AvMGbdDQ0hpKBbINdZfV4bLAVj0PaVWrS8Nee4OKST96Nogt70Yi7gcwUD9yB7w%2FG6%2FQy5EW71IaxzLwv52x9KNXBBwDZ9WpT9hT2%2BiYyM6zN6vcYFTIunHqVwTzXxGUwt5awwwY6pgFy62w53LIPsbBEKUlwCMa0Sncg7i9Ums%2F4eZO1emJVHnhkm%2BLxueE3yGk3cv7gbvEqfWck%2FHY5PC6sGOcAb3q4Kgs8ltgigldOGxF0t%2Fdk6U8c1nPY%2FSQJ7opkQy2SfcCOBzL2NyRoXys7aueklxaBqTWhP1%2Fl4yF4KElM5Go%2BzqsU%2FVeWYpgTKHKIdzvADp%2FwAzRd3NRt0axtUyd9vzC5F%2BmigSdo&X-Amz-Signature=9bd581e230e766bd566114f8e3805edbaba468fb2cbb14fadb6a593ceadc2433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJFPSF7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIDnj1FdWEwejbOhsp474%2BdgMgdhx7vRbOZBmDNdfH6PGAiEApCwJZY4gQH2dnjQrkB7%2Fk9hYQJK4wPZL3SgnxbjqX2Yq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDBV3HnIaa9xhuP9OUyrcAykfiWLEjD%2FvTDXEZcYr3NtwIw6X2MBjANo8u%2BN4VKpRaczbnfxg%2FqHaIm4r9DAZS8T%2Bx333uUyjrjP0ALWyscV%2BUW3I2Op1mKP5OVMK3JxvJtNgkTBmne5ALzvLRdOGuUKKeWgACnezz6nBgQgYJYW2wSCZoAYd7WVO%2F7F0T6GYd%2FBcoDape0tVbJ8ACm8crK3hZEu6b9%2BK%2FZnqkgw%2BQQsj6aNKP%2FRLlosOVMFzf%2B3QxrJPwJQ1KCq9CMs%2B9QEQeJIDP4G3VpdM736Bfx3Z3yDAtvjuZVuDVEMcEED3B%2FW%2B4j%2FI2qjPSnD2NXMUPimlN0GQ%2BOaEd12IyGB%2BQusbMS%2BkPQ9G5HPvL96YgSV9BuHrIThIM%2BSQq1%2BcMlwCxMfpeDKZhdlIA3owyMgNS0z4ZMrGS7wZLsUVPPm0Z8dMpEW4f%2BgB52Jq288MMAHuJGiHa4BUoFSOO11xbIJyGXSJoEPSvja1V0tcO9OG9sQdIYq3xWzgdr2cvHLzMN8b3wOGXKPi3Q%2BefHgvI6tbfhZTIdQLVdc871YRC5bPNxqunNrwGOnnfBXRuwBnhJKAEkKi3%2BspBuu6%2BaZYzQ0qpjYYT75s3YmlHHBMWsp96jrO%2Bl6OJShlo4uemwiNIGRjMIeXsMMGOqUB7ROLQJ8%2FbgPqG71UiuS33aTvcbHqEgVfACcOjUFBje1B8ViI%2F0uojXoW4WUgi2qZxBqzeLKzZIYi4MB1w6a5tX4ALHhQpyRHj2fns7vJHDwOHjZwwtDXlsbf5wHWC2gdzNVX%2BE%2FDzU24y4k4Gs6j7J8iJJGWxq%2FwlY20EoLbcwvVfYKJJxJVFpObZ%2FPZ31SyyO6im5VmmYYfzRwtVyZ8K7HKq6qV&X-Amz-Signature=7e790e81e980581eea976a3e3decc876dcec85ff9001ee982bb2881b43782a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAAV7NVI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDG80IcIbN3FpPy9ZkvW%2BAvNxPN2o9jD5U90HCJ4HJWDQIhANsWGEntfAz9EIE8tJU516UioJDSAf07P%2BAzFL3lLAO2Kv8DCHsQABoMNjM3NDIzMTgzODA1IgxOCjeZfNHuZRbo5OEq3APG0ltVSCPDMDsuI3Y2SAgGX1%2B3uuM8u%2BQ%2FO3s%2FB%2BcqTPSPvoGzs2e4ch7Wnxv5xbvYD0k0xrXXMFvnngObRY6LZn%2BJy%2FPF14GPOrNbWLkiFx3zgYqC2O2AOEGBAsgWBxc4A70FfHRDuFRBKEW3HVDBN1lFV8VotDKtDYsr9Jc%2BcBnkE4dtvykicWyYL%2Be2IPpLZSQv0MxdnpzUYEN%2B63dfBs6m0Kj4NpNAdjg7WcxYYcgoWcOLTexI6srNWZV3Hwz8hwpYPifQdL0HOXlBz3s4SMxE7e7O6D9Na2x%2BwnKeVZzXscfyit7U%2FQhVbgWxr8WirA47ChzRtV8PTeIGHbyaHNSCagHlcCd9Zw08CFVm3YoG5Zs6s%2BZNiDqSKvFhaVAs1IM%2F5geKtsh%2FTJ8QaaMUXdw%2FoqkFWuvsk6l3MjUQYHKhOpOG8d%2BOlPHTqBMhjYVmJNH4X9tjJq7KU9q6oEwMEQtscF0WsJJ8lPlPTdLzkBA6Ze6vH9LCCqEzmy9t%2BMl58biRNxAGsAjJyaiQ2IxSD%2BRdrItN%2BvNgWHQ2q52c9SbmhnrL05pG%2B9BfQrJsHAaPczye3zPKimGCapV3ubV6BeqKnVZFGBIfwn5rncPy6i5T66Xbgfj6ioOsuzD6lbDDBjqkAZyStSBC2yQIcLmc1kgv3WTzcd2P7XeJmKr0G0ARHFLMgMrUSwV7iwmNXJeaVfasuAHZtjnR8SS0qW9Qq5yMZhhTY%2BTRlzEFSk1KWBNpfeXAC7PympOYfaWasgGS0q2pXTrADHf4jC9EXLpv%2Fu2BxVelqDfuGGxuV35mKJLh1A0QJpUbMIn8nEtv5njTotJ9tSz09JkdONvXrd1IjOijMItLk%2FoM&X-Amz-Signature=9646a2d623dc1f1258582c9918db4cd8362ad150a04e48da4a0c95b93a7585be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TJBOOBB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAsLnfcjlp4MC4tqzcU9iyFbvvZm7GPoiJdflTlidGAAAiAxVIedIBS194tPP2%2BAPNIDTqa6VTA0jCZI57Ju9kJ01Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMB2520dCHX%2BP%2F2U%2BMKtwDS8lZAZGdL7pFa39z81Qrz%2F1NEYzRlb15IgehhSC6m3a%2FRjXcHfrAWoL3ff8Cdh1buJHUqlyDeKNXAKrL02dxxVZKDZi0RureHrukxVWgIbKL7LrLXMSS2a048lRIbZIQ1WdvMMuVhBt6Zc133J1vg%2FP0Xr2e1t3t1y4HpEyeDFE%2FPKZ2tJZejZcebP81LbZIqPaL%2FjWY%2BewzO%2FUgSVWeRw3Hi2fIynbV9vZSZk19vhHHn%2BF5IiGuT8576%2F0i0HzBR%2Br5u8kBywLyS1RqoKSW4uSGp992CMWOElO0LT%2BrhI4D1iKMFU5fK9cSaxf0TcX0g5fG8iu10ngjcDyCggMOgESi07S6G%2FGciN1IYWmgY4TKCNDs3qJEE3at8UFo8643BYiwGHZtDkH%2FIqQjqanC2lYE%2FuSnaJbPfhHng%2FrqQJq2WHONpY8xGOvgSrT76T7PoW%2BsK2eKJgNuC9eLX3xq6%2BejPKL9lJQjNvdTU81JgQMFcsSXbgPK8uqNCz8AvMGbdDQ0hpKBbINdZfV4bLAVj0PaVWrS8Nee4OKST96Nogt70Yi7gcwUD9yB7w%2FG6%2FQy5EW71IaxzLwv52x9KNXBBwDZ9WpT9hT2%2BiYyM6zN6vcYFTIunHqVwTzXxGUwt5awwwY6pgFy62w53LIPsbBEKUlwCMa0Sncg7i9Ums%2F4eZO1emJVHnhkm%2BLxueE3yGk3cv7gbvEqfWck%2FHY5PC6sGOcAb3q4Kgs8ltgigldOGxF0t%2Fdk6U8c1nPY%2FSQJ7opkQy2SfcCOBzL2NyRoXys7aueklxaBqTWhP1%2Fl4yF4KElM5Go%2BzqsU%2FVeWYpgTKHKIdzvADp%2FwAzRd3NRt0axtUyd9vzC5F%2BmigSdo&X-Amz-Signature=f72b2ca8d1f41d121267735c729b5367fb41d5d1c4a286f65fb49081066acae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
