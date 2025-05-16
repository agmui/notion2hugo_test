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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6QDCEY5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqgRpUK2ws1cIuc%2BbUgmQijTAJUhD64lexh%2F5LGcUEbQIgUa%2F80HXQLKHpiawf7ahpXi2RmGo4QuymOfNLaAu%2FvVoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLg2Vt8JgxTGVb0%2BGCrcAz8n0H38wzPAP2GI3VIpOKdrnirSE2JNzDHMUQpvXK1ZQiLhslNySisOQcm%2F9hDpA4qBFA3Iz%2FgJN%2BxXh1dKZaJQPS3OaerSJyq0ltvMSDGVfE74xBYVS0xulLfkwVlY5psSR3hFPrSH0UJ9VQ5MZz1WKfWe%2FIfMzQRMi93orPxYQaZftgYXahgUMe3cvdmzXPnflPNuyyhBIxUYHNs7jYiFchj162SWtAfIVqoUGydA6UfMIrfnLabcy6opg3rlmmEJx6mHCXMCg%2BI7MBm7HZ%2BgM4Iiy6mKr34rj0uEBtuFG146oHcBYQcQ5Fgsod1QiD5945X6ZFkCdRvQBtKhKBzNobTwe87hBpBdM0oQXfxMOhP0LZcupdtyghngOjoxcz6sCka2iG1GhoyRR%2BnNyDTgp4U88Hgi%2BHkv%2Fia2tBY%2FIZD6Q2ZCKKb9qS%2BgqogHLTXZWagfPNbBSxKpJ8YOpi0cnPmazgEn2QXLR93Z%2FdSrH8muRzXdduPPznnaA0b%2BiMaytL58HzYt4V2WJSanlH6UoixS4ExjohvMNMOe5Nbhu%2Ftvp6ZN%2B%2Be7p3P5Hp0gKb5SUq8YXXBzxvaeBU1BYPCDiHe2XoIEz8V0btmI6uLKPtoJ1mSOFRLD2UgpMNHvmsEGOqUBKrbjptt9W%2BlO%2BEzKojayBHfCYhnhDd58132KZltehnkq6iEc09ArUKhMTDbkchaqzgJO270BLTvTOF8LE%2Bo1BfIMH5yMa8tBWmJWGevYGdqqQkPRC2Qq572lju8EfOQd0KE%2BVHsm0UXgUINwfH2xfabM70ZII%2BtjfHl2f8ZT%2FagcVdH0IuqNuc5bQUHzfLG5ilREC8TYKAjHwX5ka1aULtZ9e2YN&X-Amz-Signature=49b49736c925ccc3b88b2d9f5c988fbd6c6497c18d4b9a647da218e6e8c543db&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6QDCEY5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqgRpUK2ws1cIuc%2BbUgmQijTAJUhD64lexh%2F5LGcUEbQIgUa%2F80HXQLKHpiawf7ahpXi2RmGo4QuymOfNLaAu%2FvVoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLg2Vt8JgxTGVb0%2BGCrcAz8n0H38wzPAP2GI3VIpOKdrnirSE2JNzDHMUQpvXK1ZQiLhslNySisOQcm%2F9hDpA4qBFA3Iz%2FgJN%2BxXh1dKZaJQPS3OaerSJyq0ltvMSDGVfE74xBYVS0xulLfkwVlY5psSR3hFPrSH0UJ9VQ5MZz1WKfWe%2FIfMzQRMi93orPxYQaZftgYXahgUMe3cvdmzXPnflPNuyyhBIxUYHNs7jYiFchj162SWtAfIVqoUGydA6UfMIrfnLabcy6opg3rlmmEJx6mHCXMCg%2BI7MBm7HZ%2BgM4Iiy6mKr34rj0uEBtuFG146oHcBYQcQ5Fgsod1QiD5945X6ZFkCdRvQBtKhKBzNobTwe87hBpBdM0oQXfxMOhP0LZcupdtyghngOjoxcz6sCka2iG1GhoyRR%2BnNyDTgp4U88Hgi%2BHkv%2Fia2tBY%2FIZD6Q2ZCKKb9qS%2BgqogHLTXZWagfPNbBSxKpJ8YOpi0cnPmazgEn2QXLR93Z%2FdSrH8muRzXdduPPznnaA0b%2BiMaytL58HzYt4V2WJSanlH6UoixS4ExjohvMNMOe5Nbhu%2Ftvp6ZN%2B%2Be7p3P5Hp0gKb5SUq8YXXBzxvaeBU1BYPCDiHe2XoIEz8V0btmI6uLKPtoJ1mSOFRLD2UgpMNHvmsEGOqUBKrbjptt9W%2BlO%2BEzKojayBHfCYhnhDd58132KZltehnkq6iEc09ArUKhMTDbkchaqzgJO270BLTvTOF8LE%2Bo1BfIMH5yMa8tBWmJWGevYGdqqQkPRC2Qq572lju8EfOQd0KE%2BVHsm0UXgUINwfH2xfabM70ZII%2BtjfHl2f8ZT%2FagcVdH0IuqNuc5bQUHzfLG5ilREC8TYKAjHwX5ka1aULtZ9e2YN&X-Amz-Signature=33027c5fca692ce828a86502d2b974ed0ccddae3d33aaccf5e296db692545fff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6QDCEY5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqgRpUK2ws1cIuc%2BbUgmQijTAJUhD64lexh%2F5LGcUEbQIgUa%2F80HXQLKHpiawf7ahpXi2RmGo4QuymOfNLaAu%2FvVoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLg2Vt8JgxTGVb0%2BGCrcAz8n0H38wzPAP2GI3VIpOKdrnirSE2JNzDHMUQpvXK1ZQiLhslNySisOQcm%2F9hDpA4qBFA3Iz%2FgJN%2BxXh1dKZaJQPS3OaerSJyq0ltvMSDGVfE74xBYVS0xulLfkwVlY5psSR3hFPrSH0UJ9VQ5MZz1WKfWe%2FIfMzQRMi93orPxYQaZftgYXahgUMe3cvdmzXPnflPNuyyhBIxUYHNs7jYiFchj162SWtAfIVqoUGydA6UfMIrfnLabcy6opg3rlmmEJx6mHCXMCg%2BI7MBm7HZ%2BgM4Iiy6mKr34rj0uEBtuFG146oHcBYQcQ5Fgsod1QiD5945X6ZFkCdRvQBtKhKBzNobTwe87hBpBdM0oQXfxMOhP0LZcupdtyghngOjoxcz6sCka2iG1GhoyRR%2BnNyDTgp4U88Hgi%2BHkv%2Fia2tBY%2FIZD6Q2ZCKKb9qS%2BgqogHLTXZWagfPNbBSxKpJ8YOpi0cnPmazgEn2QXLR93Z%2FdSrH8muRzXdduPPznnaA0b%2BiMaytL58HzYt4V2WJSanlH6UoixS4ExjohvMNMOe5Nbhu%2Ftvp6ZN%2B%2Be7p3P5Hp0gKb5SUq8YXXBzxvaeBU1BYPCDiHe2XoIEz8V0btmI6uLKPtoJ1mSOFRLD2UgpMNHvmsEGOqUBKrbjptt9W%2BlO%2BEzKojayBHfCYhnhDd58132KZltehnkq6iEc09ArUKhMTDbkchaqzgJO270BLTvTOF8LE%2Bo1BfIMH5yMa8tBWmJWGevYGdqqQkPRC2Qq572lju8EfOQd0KE%2BVHsm0UXgUINwfH2xfabM70ZII%2BtjfHl2f8ZT%2FagcVdH0IuqNuc5bQUHzfLG5ilREC8TYKAjHwX5ka1aULtZ9e2YN&X-Amz-Signature=c1f2986a2e49801d35e54311d507365bedd77956e75041d67c2ce8e6e50ae89e&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJB3ZDW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU2%2FOTV%2BPhSQnVsxZlMvKvhqbb1RxDoDnEoftw9%2BVrzQIhALLpndUXPEvM9D6aGZIyc5CFa0GNBF9I8dD5nmfUDUjfKv8DCD0QABoMNjM3NDIzMTgzODA1IgzEGE4wgKEg0CGgx6sq3AP0ksButeeb9BLn86zDlCc0wYvCQ313bMnwAIMfIZDPGVXJnyWF5lNS8AB0pTF6cg%2FFE3fgOchPkKIy2JdoFolxu44JAvVbFcjYvsP9yHP3FdkW99IkNPVPj0YBAEsTFTtHwDb7uxcAsDve14svw6X2P8zjubbRBnuH6hekXmrKaOKZpbnBOBA%2Fi1iutDTqYCwq1RbnuuUHg6KiK6PoFB%2FN8od77naWAW%2BBJH9zEhFvvffe4fjhwzf72OWBZ%2B%2B8rckMwEC6BnYxnYU6G43WnCqH4LwkWOj2X8qIs1jc%2BVKcayPyvB5l%2Bl5uyUSfX0hKhOY4epvDzZfn6loY820967iMAwKCqpXAw5ACF%2BeLwaqs0P4T7C0NgfM8Lkzp7YiGIE22rHGBLyOIhE5NdLb0ihvLs2P3ihVdkmFVlL6jlBDcj41Gld7H4Hk48pukuerlN2SnDwuWc%2FZ%2FqYLMy%2Fx0GnNH4KATUOfcXRgJ0qS0cyV5UdZe5OyYk2AjMS6NxWHG6l6%2BFbfgjQOQHlLPPHthnDSFom2XS%2FWumGPpI02u0bjBXXsA5mhkx5pVKCR1sttRMT72izQOHFIEwk2l3gKcZMEJL%2B5NBH0yeNSnTQWeMhX4oH0iMJkFlv7uSUejtjDG75rBBjqkAXBZx%2BP5vy0GaGwQPJ%2FWNhDkqNegn%2FUXiqp5uzVDU0wk8NEkAThc9H0hUC%2FgPSBy4MH%2FgK1EKrfZuU6SPiLxWYLKYis1TlZbAbywhBwP98%2FTUgiYITSHInKDalv%2By34nPonOFC46gr3xAzHN9v9Kq80jyTcfPCQvqJONY0gHmLzkiizu1VqaqiPpnMZTdMiurI%2Fob0ZYOImnPWkejlXFqY7GVv88&X-Amz-Signature=3e523a7c17953f47d21a87273deb084dab1ab6efe1076f2b5c55aed7a9797e6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYAV73WE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCla74NXBNHTMDhImxBZqN9noGok3LzJIDY0fElU7ik4QIgQwYMvopGdp1w8Q3RTRZv4gTCp9tzCCuAD6dJ1SJ3EBUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAQ6ZjR%2Ftsk%2B221P4yrcA2FUkvZy9sG8mSWxB%2BPKYU56PfZf9%2F8T63b6wu2SDrUR%2FJmyozpbKTMZ8xKW7SS%2Be8aDQmtvT3%2Fg0nZA3oTztC%2B6KulQ%2BBkafjP7MHiPHYfSYF2w1f3nUg1MbIA5IJ6O5AYocrvTXgfr0JrzIyOdXi%2FK21VpilDAZe%2FNNfNkFiyOLxzyHpcBxbBKEd6v8jtWoL4dfvqaEYFUnhwMfUKR%2Fv5KFAHIlU9CjAVgDKFRKhG2YSx%2BGcMUjJIWpA8ALO%2F5uHCB2lPiqw%2FKcZIvSQ4fvHk7OjWT291hKM1b6am%2BaBT4X855Mibt7qLoQiGesMG9DD3zD%2BOzKcOwZOdzJ25hPAiz2cq%2FkraWsKYFEOUXSLmBVqTjtKjCT448nGyvhYqp5WmWecCrHooQ2GMkQNjyAgNgnY%2FigecxvX1SdiO6HcyD75Kb6NfIh5eSh%2BMU3RhoQRKN%2BoleblFYG05vIkTt2RIe05%2BuCDF592nYgnxI148GFBjk0EjhUCSZ4UyB33EcMsVpE2mHAqPIFJ377V8iEBdgMKIq4390t1b%2FbWQgDchnNlvFnYYHzclTWCNlQSSLa8j2iVpezu%2F9U2ABzrFeW7IwWDSEJaDhqyqN%2FLrbFkKCFHhgCV2BksKnVqL1MPrvmsEGOqUBCHL%2F4NmXYH%2FaJ5OV4gax8EuFKdibHF0HXhlFucLsOqbKLdAq203bBXi%2BSh5c4fkgu84hffuEq%2BoqD5pfiKeMVW6oyuUOCxjOVJESIpYCgjmeDMJjK1txLogJn8M%2FLXqMfNfrJm989KOGMrZcSHG7DkFG8FI1HqD86AtgpP%2BoQoOoK2f2ss%2BuwjCbkIKBw9gFYffzmCdHapnw%2FtsXmf32hbNk7aZo&X-Amz-Signature=6aa71d207f19b98b4768851bbd026d0f76a392d79185d4c109964b453fd9eb41&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6QDCEY5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqgRpUK2ws1cIuc%2BbUgmQijTAJUhD64lexh%2F5LGcUEbQIgUa%2F80HXQLKHpiawf7ahpXi2RmGo4QuymOfNLaAu%2FvVoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLg2Vt8JgxTGVb0%2BGCrcAz8n0H38wzPAP2GI3VIpOKdrnirSE2JNzDHMUQpvXK1ZQiLhslNySisOQcm%2F9hDpA4qBFA3Iz%2FgJN%2BxXh1dKZaJQPS3OaerSJyq0ltvMSDGVfE74xBYVS0xulLfkwVlY5psSR3hFPrSH0UJ9VQ5MZz1WKfWe%2FIfMzQRMi93orPxYQaZftgYXahgUMe3cvdmzXPnflPNuyyhBIxUYHNs7jYiFchj162SWtAfIVqoUGydA6UfMIrfnLabcy6opg3rlmmEJx6mHCXMCg%2BI7MBm7HZ%2BgM4Iiy6mKr34rj0uEBtuFG146oHcBYQcQ5Fgsod1QiD5945X6ZFkCdRvQBtKhKBzNobTwe87hBpBdM0oQXfxMOhP0LZcupdtyghngOjoxcz6sCka2iG1GhoyRR%2BnNyDTgp4U88Hgi%2BHkv%2Fia2tBY%2FIZD6Q2ZCKKb9qS%2BgqogHLTXZWagfPNbBSxKpJ8YOpi0cnPmazgEn2QXLR93Z%2FdSrH8muRzXdduPPznnaA0b%2BiMaytL58HzYt4V2WJSanlH6UoixS4ExjohvMNMOe5Nbhu%2Ftvp6ZN%2B%2Be7p3P5Hp0gKb5SUq8YXXBzxvaeBU1BYPCDiHe2XoIEz8V0btmI6uLKPtoJ1mSOFRLD2UgpMNHvmsEGOqUBKrbjptt9W%2BlO%2BEzKojayBHfCYhnhDd58132KZltehnkq6iEc09ArUKhMTDbkchaqzgJO270BLTvTOF8LE%2Bo1BfIMH5yMa8tBWmJWGevYGdqqQkPRC2Qq572lju8EfOQd0KE%2BVHsm0UXgUINwfH2xfabM70ZII%2BtjfHl2f8ZT%2FagcVdH0IuqNuc5bQUHzfLG5ilREC8TYKAjHwX5ka1aULtZ9e2YN&X-Amz-Signature=0292703f4ad39bd733409b86bc4c3cc923a8fb7ca3107ec4512a02e253288aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
