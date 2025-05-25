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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQWRAPM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDbpU0JG9cWJT2FHZDQWy8uUh4ZgbFpBHn0mxGs9j9H%2BwIhAPLU6aFRKKGTloRI4ltV1bGkZOP7NnHd00tynhWQwlEgKv8DCCwQABoMNjM3NDIzMTgzODA1IgxkkAupxVWppt5k%2BZAq3AO8G4d1YK%2FYD%2BCs2utMTVMWSbDxjwxOEN1NVXasf%2BWb8EEycQf0sf55xUlDRkzXOFWwIvLZEE18mQwAUpOh7TWHSsK51cDzWJv6AKTxelnoK4YkZsT1uZjGFddQMlMz4DSOAtwgs6Xeg3ZFrxG%2Fr3Emqo2a5VPG%2BH%2B8sTSwaJWfVzzRZ00YeZmumna734rdYQov2%2Fob9U%2FyNDg7rrVBpHOKkRPogofUCck0kSeM%2FG9vPG%2B4ZzR9oQhgw%2FsbG2naoz6yU%2Fggo6XsDtQAFp1yB8HyGfYuIGeVuRYzG%2FKaaQwjUgscUveXMLHw08IpT5KMhooSfwapUyobuNofSogMLxy2ejhSMqXJnFTTG82gkyJXtQsAUmZsebZMMtZrwYMT0G83nCA5n%2FXcgmKEgkbVQjvCBv58HBT%2FuVL4dhJnxaoAyoiGQxo0I0ukktCV1EeiFSf1ky%2B9z4S77MLZxFJ2%2FmMXwi0dyKJjTzA49gNFKC0TdlSiSmdMjtNBlQbh8lFX%2BgNNT3IPMc86iTodTHQt0VCPMk0%2BxWgVpc9BER3SzfBIak3kJH4GhZDc4%2BMkJgIKFxVDcCkAeSdzNBbZFNqAYdPUQq82%2B4QW6lgBC%2B3fwQJ5IxWI50SufmT%2FDIFwszDj38vBBjqkAcNWuH%2FrPLdKg7D8xjumd0TNZhQc%2Bn48mXTCnpgrJGymigRC3ktacmfDsUApOyaMrakqWeAqt5zqKvaK2skYR6oJ3chwOuwwTKjuLJ5Tztnr72BC7a3IHoWhUg%2BwQ%2BxKhK4CohuQ88cj8WKk5qRgffQk9kWBiFecnAxdi1rwIxDUuTlXn6cO2rGLW2Dp5o7x8cORPaqCLXrySGSdG8S7MybpHjUM&X-Amz-Signature=7a68f8a1b69aacd78d0b66cbc176225098479d6f983f173620c0219e1cb912d2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQWRAPM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDbpU0JG9cWJT2FHZDQWy8uUh4ZgbFpBHn0mxGs9j9H%2BwIhAPLU6aFRKKGTloRI4ltV1bGkZOP7NnHd00tynhWQwlEgKv8DCCwQABoMNjM3NDIzMTgzODA1IgxkkAupxVWppt5k%2BZAq3AO8G4d1YK%2FYD%2BCs2utMTVMWSbDxjwxOEN1NVXasf%2BWb8EEycQf0sf55xUlDRkzXOFWwIvLZEE18mQwAUpOh7TWHSsK51cDzWJv6AKTxelnoK4YkZsT1uZjGFddQMlMz4DSOAtwgs6Xeg3ZFrxG%2Fr3Emqo2a5VPG%2BH%2B8sTSwaJWfVzzRZ00YeZmumna734rdYQov2%2Fob9U%2FyNDg7rrVBpHOKkRPogofUCck0kSeM%2FG9vPG%2B4ZzR9oQhgw%2FsbG2naoz6yU%2Fggo6XsDtQAFp1yB8HyGfYuIGeVuRYzG%2FKaaQwjUgscUveXMLHw08IpT5KMhooSfwapUyobuNofSogMLxy2ejhSMqXJnFTTG82gkyJXtQsAUmZsebZMMtZrwYMT0G83nCA5n%2FXcgmKEgkbVQjvCBv58HBT%2FuVL4dhJnxaoAyoiGQxo0I0ukktCV1EeiFSf1ky%2B9z4S77MLZxFJ2%2FmMXwi0dyKJjTzA49gNFKC0TdlSiSmdMjtNBlQbh8lFX%2BgNNT3IPMc86iTodTHQt0VCPMk0%2BxWgVpc9BER3SzfBIak3kJH4GhZDc4%2BMkJgIKFxVDcCkAeSdzNBbZFNqAYdPUQq82%2B4QW6lgBC%2B3fwQJ5IxWI50SufmT%2FDIFwszDj38vBBjqkAcNWuH%2FrPLdKg7D8xjumd0TNZhQc%2Bn48mXTCnpgrJGymigRC3ktacmfDsUApOyaMrakqWeAqt5zqKvaK2skYR6oJ3chwOuwwTKjuLJ5Tztnr72BC7a3IHoWhUg%2BwQ%2BxKhK4CohuQ88cj8WKk5qRgffQk9kWBiFecnAxdi1rwIxDUuTlXn6cO2rGLW2Dp5o7x8cORPaqCLXrySGSdG8S7MybpHjUM&X-Amz-Signature=aea2c8bdab633105d6507c8cdc54c253a21a01f52fc934caeb0a655e213f2f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQWRAPM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDbpU0JG9cWJT2FHZDQWy8uUh4ZgbFpBHn0mxGs9j9H%2BwIhAPLU6aFRKKGTloRI4ltV1bGkZOP7NnHd00tynhWQwlEgKv8DCCwQABoMNjM3NDIzMTgzODA1IgxkkAupxVWppt5k%2BZAq3AO8G4d1YK%2FYD%2BCs2utMTVMWSbDxjwxOEN1NVXasf%2BWb8EEycQf0sf55xUlDRkzXOFWwIvLZEE18mQwAUpOh7TWHSsK51cDzWJv6AKTxelnoK4YkZsT1uZjGFddQMlMz4DSOAtwgs6Xeg3ZFrxG%2Fr3Emqo2a5VPG%2BH%2B8sTSwaJWfVzzRZ00YeZmumna734rdYQov2%2Fob9U%2FyNDg7rrVBpHOKkRPogofUCck0kSeM%2FG9vPG%2B4ZzR9oQhgw%2FsbG2naoz6yU%2Fggo6XsDtQAFp1yB8HyGfYuIGeVuRYzG%2FKaaQwjUgscUveXMLHw08IpT5KMhooSfwapUyobuNofSogMLxy2ejhSMqXJnFTTG82gkyJXtQsAUmZsebZMMtZrwYMT0G83nCA5n%2FXcgmKEgkbVQjvCBv58HBT%2FuVL4dhJnxaoAyoiGQxo0I0ukktCV1EeiFSf1ky%2B9z4S77MLZxFJ2%2FmMXwi0dyKJjTzA49gNFKC0TdlSiSmdMjtNBlQbh8lFX%2BgNNT3IPMc86iTodTHQt0VCPMk0%2BxWgVpc9BER3SzfBIak3kJH4GhZDc4%2BMkJgIKFxVDcCkAeSdzNBbZFNqAYdPUQq82%2B4QW6lgBC%2B3fwQJ5IxWI50SufmT%2FDIFwszDj38vBBjqkAcNWuH%2FrPLdKg7D8xjumd0TNZhQc%2Bn48mXTCnpgrJGymigRC3ktacmfDsUApOyaMrakqWeAqt5zqKvaK2skYR6oJ3chwOuwwTKjuLJ5Tztnr72BC7a3IHoWhUg%2BwQ%2BxKhK4CohuQ88cj8WKk5qRgffQk9kWBiFecnAxdi1rwIxDUuTlXn6cO2rGLW2Dp5o7x8cORPaqCLXrySGSdG8S7MybpHjUM&X-Amz-Signature=7ef44a295fa3f2cafda7d87d55d88d8a8151bec9221fac03ab2951f572b8b147&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U5TROZ6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDU80qOoEE79BzrawfEK2Tcw%2BHa%2FX9jdHvVtwyj3j3jagIgOvVbReRGycjtmAA75oltfdnBBfobJ31RjRr0RIt5G3Aq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJuxl1puHcLIdu6O0yrcA8v0cpNxvlMEmnYfuQY3WU10voVODPnwyUpnpizAu0pwWysHdrC3uS08bWrU5mZDHaWo9vuRl%2FKR263lrAlYUmSuduzy5ttIpE%2FNAXiYvwXOwnVlv0gEZuDWppASdVtiduJJNFNz%2F5PIm8DMxqpsqqe1SnJUWHyrqJV5OGeKcyJavBZX98XQY%2FG6icPlt6eJ%2BinDta%2Fdv1qlEV%2F6FRCJ7DZnkeZk%2FOJ6qo8Nl6g0oKuEcsCe0yoCkJZfPZvNcPQy0nZyg7V5%2BCLkih867dcLyzev0MJZgejJrqnFMnUEKWF2vk3nr2UTxhdKeGgyv9BKolYS%2BXS818koefM22yyuZgMXOdN79C2%2FaPcdaLMCZqVoxz7RJWrlJiOiH%2BocjQ1h%2FxOKUUIYE4rkJTTKSxnu7nv3X%2BpLkPRq597iOmqFYRq2eopVacAqQ0B5fWnLmmUHnqIxkdSvN%2FI%2FZhLvz9OfA%2BgEi0vHcvwxQYMzv8KDGg%2BtB%2BcRyuB1rjUvY6vUObuSbAwwvEe%2F4vsDMmfk%2B614z6oPJxg9LBrEtfLM%2FwtYVnesXym72buwYOM7HR7joglvXbvW0tK1E9VFcoOFAlw9%2BT9haq2SOSpCQK%2FFJNyHs9LZR3UCNMFqKvNhG34ZMOfTy8EGOqUBfr%2FW2vZkbtONQ4eqjQYFJuC%2BAIk2j%2BncesHSerpz%2BF1g4YPudd%2Bk8E%2FmM9jpc9vlBQ6G%2FR16UPZuLQEK5FojUkoess35mGUR6kTH7u53K5PfXvC53qcUCsAhwGkQcvFBjoB9wwYuCHcg%2Fp%2Bo4XxnSXJupnbMw0sd5WQfqf4bSmEbu7jJtqz5UpFLyMm8d5lT%2Fpz6%2FmlOyQcdxcvHqJ79LZHEPOwn&X-Amz-Signature=3cd1eb5a07cdbd00da3b7c4b73a31e46aebd3de9ddcc3ef0df8fc0e5c9bc4e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGI72UZ6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHPukeZUx0GQP2dXNDRZUSteTKcpwl7nCrmiE4vmrXDWAiEAycc%2BUAG6OYEhDX6ID6eV85xyI%2B31hRAVAFfsc8UR%2FNMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH7h8dT5oew45NWGWircA5MXabjyUfHHLJwRCRgPJPGAHR%2FLYNL1bHKzbUCzMu%2FMBgDkacV38sQkv7MyWUAFX5gwBO6mpx90%2B19sHKmZ5YkWCzg7k309iNaFO%2BrIui8H%2FVoHuitqIeJTZ%2BuU%2B7fXnLqCpX6qIPjtwI%2FoUUMVCSco2%2FXmHmvF%2Bi9j9b3mb5NzKjq9oovbfL0FMg8l0u%2FZGcqY1Vhxp7YaNTzjfNCJxkCFrufZmiwVbJIXci2agLOMnQf%2B1csIcmmwHSJ6dbtYpNzb%2BKpAVTu8s1whv1bXTg8l%2BOsM614MIVHUbvwVJQG%2Bncn%2F3hzzPmf29w3QBW9d5Ei34HU%2BGWioqdZZpEuWKQdwpQdOPzfqB3uL4RIz8GiYtqBlOzSZdbjxmYbjwFbbwQXicvCXSEslKYnWXvwIsMlaEoDvgTT3YONKnAPnqO3XYJDBuCiOuJhlCEg%2BhWJADmgLVahqjpOuGOuvPADW57nRZXi1Fk5tEf8LAxA0WiRhjsK9zY%2BoxK%2FEOzfVGo8DgWZDSG5IwCsMzLOURMN79gSwJhwPEEX7Vc0uvWXzZYhWJM%2BctDN9TWtr8L1OazYOesZbrTsj5DfX5gPXlU6pIA2fg0iJsWIOZZ2WfRrld096vnJqRT5KEbfXdV4RMOnby8EGOqUBlQwTdFoG7vP5RKz3TWg2%2Bh3ZdftzzQHlD37VmnWHm9Ho5SxZj%2FkFq2Q%2FXiRYhK7o2QoKhEiyIVI9WlRjDNt7VkVKFn1nOH3GfN5sHLrv9%2F8YTvAesH3bV6rQLOGKZktVXqoPCHvQAh%2Brt39QVqy62QsXi8jKuerJfxeCDfyXfb%2F6NkWk7yP%2BQ74huH%2BonCTTxkAXYoU%2FMaL8%2BLiHTo1qnt1Y2tDl&X-Amz-Signature=6d0439d58d4e17a552773a6844c6b8fb6f06cdd27997b71eab8be01be732f633&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQWRAPM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDbpU0JG9cWJT2FHZDQWy8uUh4ZgbFpBHn0mxGs9j9H%2BwIhAPLU6aFRKKGTloRI4ltV1bGkZOP7NnHd00tynhWQwlEgKv8DCCwQABoMNjM3NDIzMTgzODA1IgxkkAupxVWppt5k%2BZAq3AO8G4d1YK%2FYD%2BCs2utMTVMWSbDxjwxOEN1NVXasf%2BWb8EEycQf0sf55xUlDRkzXOFWwIvLZEE18mQwAUpOh7TWHSsK51cDzWJv6AKTxelnoK4YkZsT1uZjGFddQMlMz4DSOAtwgs6Xeg3ZFrxG%2Fr3Emqo2a5VPG%2BH%2B8sTSwaJWfVzzRZ00YeZmumna734rdYQov2%2Fob9U%2FyNDg7rrVBpHOKkRPogofUCck0kSeM%2FG9vPG%2B4ZzR9oQhgw%2FsbG2naoz6yU%2Fggo6XsDtQAFp1yB8HyGfYuIGeVuRYzG%2FKaaQwjUgscUveXMLHw08IpT5KMhooSfwapUyobuNofSogMLxy2ejhSMqXJnFTTG82gkyJXtQsAUmZsebZMMtZrwYMT0G83nCA5n%2FXcgmKEgkbVQjvCBv58HBT%2FuVL4dhJnxaoAyoiGQxo0I0ukktCV1EeiFSf1ky%2B9z4S77MLZxFJ2%2FmMXwi0dyKJjTzA49gNFKC0TdlSiSmdMjtNBlQbh8lFX%2BgNNT3IPMc86iTodTHQt0VCPMk0%2BxWgVpc9BER3SzfBIak3kJH4GhZDc4%2BMkJgIKFxVDcCkAeSdzNBbZFNqAYdPUQq82%2B4QW6lgBC%2B3fwQJ5IxWI50SufmT%2FDIFwszDj38vBBjqkAcNWuH%2FrPLdKg7D8xjumd0TNZhQc%2Bn48mXTCnpgrJGymigRC3ktacmfDsUApOyaMrakqWeAqt5zqKvaK2skYR6oJ3chwOuwwTKjuLJ5Tztnr72BC7a3IHoWhUg%2BwQ%2BxKhK4CohuQ88cj8WKk5qRgffQk9kWBiFecnAxdi1rwIxDUuTlXn6cO2rGLW2Dp5o7x8cORPaqCLXrySGSdG8S7MybpHjUM&X-Amz-Signature=454d1dd96f57e4a2f627e102416edbfdb9f44dc4b8a6b10ba75832ff7b585e22&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
