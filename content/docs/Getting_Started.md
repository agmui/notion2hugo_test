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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ535OQ7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGwGc%2BUl6dQkMj0eWCvXLZfRqKv6NWD0nyvIc17ADHoxAiBrWn2Wq9jHhcCC2ViqUt8jkdrgeBmSAi%2FbTgipS8AL0SqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FIhEJBpDYdqMajbKtwDJ4B%2F0DuPJ1ZPvJ8pSp3jDR4Fx4JR5nW24bVXfLsfF00lZQjojO4UyZCrgAwlF4clUIpHI2pfs1S9s3JHfsDmhFamA4hwXjMS9clBAe8BoK3Rl4PPCc8CnjoGkcF7vsuW%2BNqwRVEUehv1pnzMok8jwcN6gmU1Ed14ureLvQcmKnuGIfBVzIweGtif2VS1OPD9qzfbfZADevcMRBNbVbBcDd5jn8te8aUgPBrTtkGC9sc7N%2F03epm%2FbZBMyIJxswyhBEarSRmNVEZ%2F3aAfeeRj%2Fg1mAKrJV6VWlDu2pNePDYseo05BE5ME0t3pq2a8dTvcQKgFXAUOYinenXJ4e2zgUFXf8csAKq0cMJb26Z1CLOYalNf3e%2Bpr9GbQDYDX9B%2Fki9foB8XNUdN8Rdp8lv8Bmrci2jcj8Qg%2Bhq9gG7JkH07Y4pRKzjBsQInM7C%2FWDgtCJwJ6%2FclzQOAWMWjhQdzykKLuEPaI%2F6uPZ2Q78K2ik1FsEdvYKCKMQk1CyS09oYtLOGwAB%2BUaYJ4EQFgobKTF4TLjqLh2yz6WoG2d1SmMDI5ceQKLLu%2FQYBkMsdF%2FGGSgrirlhfT%2BXqpt4IDeyCkhfR%2Frj55UQsUCh8Sxb58zLxkSTW7lPw8qwyhHk4Mw%2BIPYwAY6pgEbySiDRxpGHv2eJHDHlotLkYHDAWVP0N0h4%2BG%2BgB1TOkSt2h1sqKDOFEZXdw%2Fnrdhp%2BKi5I2LtyoYtKSyPr5dZ3HTFFd%2BGtDK4Y%2BmV1qyix8CyD4ij5XTfjNCKX%2FIczqSZrcuqNQ8i1osebydyle%2Fb9WZ1IOYfqxIkUK7b7lYnSd9N5WNojP6UaIhyr7hSaGYxY4d%2BPKW0CiH1IVO66lMc8yXDDe6i&X-Amz-Signature=506e3fb4e019affa86ec892caab9159dedb4caf60ea316e2c42a5b1d5132b149&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ535OQ7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGwGc%2BUl6dQkMj0eWCvXLZfRqKv6NWD0nyvIc17ADHoxAiBrWn2Wq9jHhcCC2ViqUt8jkdrgeBmSAi%2FbTgipS8AL0SqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FIhEJBpDYdqMajbKtwDJ4B%2F0DuPJ1ZPvJ8pSp3jDR4Fx4JR5nW24bVXfLsfF00lZQjojO4UyZCrgAwlF4clUIpHI2pfs1S9s3JHfsDmhFamA4hwXjMS9clBAe8BoK3Rl4PPCc8CnjoGkcF7vsuW%2BNqwRVEUehv1pnzMok8jwcN6gmU1Ed14ureLvQcmKnuGIfBVzIweGtif2VS1OPD9qzfbfZADevcMRBNbVbBcDd5jn8te8aUgPBrTtkGC9sc7N%2F03epm%2FbZBMyIJxswyhBEarSRmNVEZ%2F3aAfeeRj%2Fg1mAKrJV6VWlDu2pNePDYseo05BE5ME0t3pq2a8dTvcQKgFXAUOYinenXJ4e2zgUFXf8csAKq0cMJb26Z1CLOYalNf3e%2Bpr9GbQDYDX9B%2Fki9foB8XNUdN8Rdp8lv8Bmrci2jcj8Qg%2Bhq9gG7JkH07Y4pRKzjBsQInM7C%2FWDgtCJwJ6%2FclzQOAWMWjhQdzykKLuEPaI%2F6uPZ2Q78K2ik1FsEdvYKCKMQk1CyS09oYtLOGwAB%2BUaYJ4EQFgobKTF4TLjqLh2yz6WoG2d1SmMDI5ceQKLLu%2FQYBkMsdF%2FGGSgrirlhfT%2BXqpt4IDeyCkhfR%2Frj55UQsUCh8Sxb58zLxkSTW7lPw8qwyhHk4Mw%2BIPYwAY6pgEbySiDRxpGHv2eJHDHlotLkYHDAWVP0N0h4%2BG%2BgB1TOkSt2h1sqKDOFEZXdw%2Fnrdhp%2BKi5I2LtyoYtKSyPr5dZ3HTFFd%2BGtDK4Y%2BmV1qyix8CyD4ij5XTfjNCKX%2FIczqSZrcuqNQ8i1osebydyle%2Fb9WZ1IOYfqxIkUK7b7lYnSd9N5WNojP6UaIhyr7hSaGYxY4d%2BPKW0CiH1IVO66lMc8yXDDe6i&X-Amz-Signature=78212dfb555a917e3298c0e443402b81d919b06cca9e1837bf91389fd960fe36&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ535OQ7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGwGc%2BUl6dQkMj0eWCvXLZfRqKv6NWD0nyvIc17ADHoxAiBrWn2Wq9jHhcCC2ViqUt8jkdrgeBmSAi%2FbTgipS8AL0SqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FIhEJBpDYdqMajbKtwDJ4B%2F0DuPJ1ZPvJ8pSp3jDR4Fx4JR5nW24bVXfLsfF00lZQjojO4UyZCrgAwlF4clUIpHI2pfs1S9s3JHfsDmhFamA4hwXjMS9clBAe8BoK3Rl4PPCc8CnjoGkcF7vsuW%2BNqwRVEUehv1pnzMok8jwcN6gmU1Ed14ureLvQcmKnuGIfBVzIweGtif2VS1OPD9qzfbfZADevcMRBNbVbBcDd5jn8te8aUgPBrTtkGC9sc7N%2F03epm%2FbZBMyIJxswyhBEarSRmNVEZ%2F3aAfeeRj%2Fg1mAKrJV6VWlDu2pNePDYseo05BE5ME0t3pq2a8dTvcQKgFXAUOYinenXJ4e2zgUFXf8csAKq0cMJb26Z1CLOYalNf3e%2Bpr9GbQDYDX9B%2Fki9foB8XNUdN8Rdp8lv8Bmrci2jcj8Qg%2Bhq9gG7JkH07Y4pRKzjBsQInM7C%2FWDgtCJwJ6%2FclzQOAWMWjhQdzykKLuEPaI%2F6uPZ2Q78K2ik1FsEdvYKCKMQk1CyS09oYtLOGwAB%2BUaYJ4EQFgobKTF4TLjqLh2yz6WoG2d1SmMDI5ceQKLLu%2FQYBkMsdF%2FGGSgrirlhfT%2BXqpt4IDeyCkhfR%2Frj55UQsUCh8Sxb58zLxkSTW7lPw8qwyhHk4Mw%2BIPYwAY6pgEbySiDRxpGHv2eJHDHlotLkYHDAWVP0N0h4%2BG%2BgB1TOkSt2h1sqKDOFEZXdw%2Fnrdhp%2BKi5I2LtyoYtKSyPr5dZ3HTFFd%2BGtDK4Y%2BmV1qyix8CyD4ij5XTfjNCKX%2FIczqSZrcuqNQ8i1osebydyle%2Fb9WZ1IOYfqxIkUK7b7lYnSd9N5WNojP6UaIhyr7hSaGYxY4d%2BPKW0CiH1IVO66lMc8yXDDe6i&X-Amz-Signature=4f13d4d16d4680bb0643c9062bd7eff56f98b331745c1881483765ad55b216eb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644US7HG4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICqbDJ0kizKvJO9mrJbdrl%2F32Qob2uaotyMCYIQHj%2FyYAiEA3CHDUodhtlSY4TuX9%2BM7fYd8nQLguXgkCcVvsB%2Fiw5kqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXm%2BKzZHgQzwSwY8CrcA1Z58GTw%2BwyQzdRyjA2bKM2iZ51rNPmqhAvLhXP6q0DZ5toUPqllXUq1QvlA91ePfUwrE4rFfP2TMglfaM4keI8LVO26ZLHlgIuSVQIKDaHMU8%2FlOtKOnidwb5dPASBqE5R1f7D7P%2F18Lri4RjvQBdLZkapU8w4EoJ1WF79rdvWftOzFMVb%2BwH65S3KP2f1KH9Y4jcFrj1UgBQIqqnho4nnNeGOdh0B0HxXruJSO6%2BnY%2BBIzGoGltebFGV0uVNQsShxsifAFJqrWgFIdO5QLSRmvKhjeFzzBjMUZSOXDdhyijZsKpYZI9S%2BMZnGY2K1bcEjkp0pyuquh1KJ8MvMzMIrkXdacQxIWglsHrVHrPKFpsjDIgIJbgEZkEyWEQXtRN8wdASS78IZvq%2Bv0aEprwAfhPb5jfChEYIchMcRwqoxCXUQSeD7QIIVF0UTAG1bdNACJF7S70jWftOFzICp8tSlkQeaVLzTRBFpJ%2BgVQsnCdSXUaXmn1f8Olx3rjwGYUNbtv7Q1zQuZ1k2waczU%2FKJMzetP3wvpq3JyIjZl4d%2FmnNxmgWXLq%2FSqf8ks3oLw%2F5heJxaq7ewGn0KBa001Ltgy%2BkKRWtZIhOQEyA%2FPYlBwQhU3n9g7%2FjBzfaFI8MLbe18AGOqUBFTGe9D%2BgdOA69b6owf2ETdtgVDWdPir5ev0fAgLCiYG5UsLLlbc5VR0ebMwFNsFXnoUx%2BD%2F34MnTXZJhpXovxCZJBWjQcU%2FWmgHekYlMKR1VpuYGLWMxvkM0gg%2BOxM3ZBWXAmBL1aM%2BQgtY0Vy5SZraS4BjOCA2g%2B0ugrChC65PDBF7C8KzoSVOcpSaLLs17A%2F4g%2BuudR6QRI2DEmPSy%2FAOIieNe&X-Amz-Signature=9b07c1298aba32880ab4d6e99f16646708898cd7e54f45cd0e72306f122272db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626IWHRJF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBHSomh1yHTQslkUX0YFgoiJtL%2B%2Fv4ttrFx6Blz0jBTBAiBhkqWDDGxIwyBrl0HOMN9wnjIacTH4t%2Baown0TMI07PyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr2w0mWjeyjljG%2Bm0KtwDK0nEe4nzlxlfIRvK2zGkRbKBwb%2B1A9Q8c9ysUrS20K2IONIMz6eyGSyjmXeUEmRZ8LXFz5Ttqy3xZVLvo05113ewgMASdOB%2F5K49yO8saoCp8VeHCqhyhhlghSt85mxypjkI%2BnMLBqBcbPsdcAIr7xCTiezfakr4WMCj4MylBu4R%2BgL4RDU%2BZTRX1W2MT2NA4MUcUPGMG4WeJirVw2tH8h9wUgocJae9r4NBAkZ453w2SinhbRJtBR5aqhbYsW9%2BnUQg8fJ3mScreTbCSMzRoFsQfmKlNBYrhYUWJGwBEq6VIVIkP5Y7VCRHKfSFxwfuTeGfIhazyBWc7V9juM8v89hOCtLR93UrdBSX0HGYD%2BADVE8zGEs%2FgjHTIfNfAPBHBaUBqA7hGGTkPoewzJFVAeVGdj8BWaucQ5xPdYiTrfee0Od%2FnlU4CuAVHNL3qpFd1YpOBbunlyai7AVdGi9dk6uv4FkbdroH8JuXYswPUXtAzRfixsvhe2rsbKYz4S%2F24Bx6NqEBvAYVqEorwx8d%2Bio8zWulTuWRZyHPTucLubZg88YjBNHsy2uaZEfw19PGtpmEGvP1I8S6hRr7MxazigqgRldrmoGcyPQL5VHjwguP27hxK8rz7YmtalswqN7XwAY6pgEkK5NCNjzkpz%2Bdp1iVt3WS5Xu70z1F%2F316Y9aULd1IxEEW5z%2Bq6ukShh2UgzMkhti3rmG4l1aCBIZRv9dXYkDZ8vVdPqGM7DX2nW1kn%2FNavnMCnEVBMro1pXo%2FOV8FGO10tgbAKwBphvSd5cxmOQ7buutHEeEJZnGYjihhsq23zcOplnEcggatP7qAUnaWGVaz6uMwqQXqFKlDlWYPDwpCHL6poOHk&X-Amz-Signature=43ec70c82fb642358aee39714dec0c24d0e536b874921d9a467cfb211d649bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ535OQ7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T140707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGwGc%2BUl6dQkMj0eWCvXLZfRqKv6NWD0nyvIc17ADHoxAiBrWn2Wq9jHhcCC2ViqUt8jkdrgeBmSAi%2FbTgipS8AL0SqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2FIhEJBpDYdqMajbKtwDJ4B%2F0DuPJ1ZPvJ8pSp3jDR4Fx4JR5nW24bVXfLsfF00lZQjojO4UyZCrgAwlF4clUIpHI2pfs1S9s3JHfsDmhFamA4hwXjMS9clBAe8BoK3Rl4PPCc8CnjoGkcF7vsuW%2BNqwRVEUehv1pnzMok8jwcN6gmU1Ed14ureLvQcmKnuGIfBVzIweGtif2VS1OPD9qzfbfZADevcMRBNbVbBcDd5jn8te8aUgPBrTtkGC9sc7N%2F03epm%2FbZBMyIJxswyhBEarSRmNVEZ%2F3aAfeeRj%2Fg1mAKrJV6VWlDu2pNePDYseo05BE5ME0t3pq2a8dTvcQKgFXAUOYinenXJ4e2zgUFXf8csAKq0cMJb26Z1CLOYalNf3e%2Bpr9GbQDYDX9B%2Fki9foB8XNUdN8Rdp8lv8Bmrci2jcj8Qg%2Bhq9gG7JkH07Y4pRKzjBsQInM7C%2FWDgtCJwJ6%2FclzQOAWMWjhQdzykKLuEPaI%2F6uPZ2Q78K2ik1FsEdvYKCKMQk1CyS09oYtLOGwAB%2BUaYJ4EQFgobKTF4TLjqLh2yz6WoG2d1SmMDI5ceQKLLu%2FQYBkMsdF%2FGGSgrirlhfT%2BXqpt4IDeyCkhfR%2Frj55UQsUCh8Sxb58zLxkSTW7lPw8qwyhHk4Mw%2BIPYwAY6pgEbySiDRxpGHv2eJHDHlotLkYHDAWVP0N0h4%2BG%2BgB1TOkSt2h1sqKDOFEZXdw%2Fnrdhp%2BKi5I2LtyoYtKSyPr5dZ3HTFFd%2BGtDK4Y%2BmV1qyix8CyD4ij5XTfjNCKX%2FIczqSZrcuqNQ8i1osebydyle%2Fb9WZ1IOYfqxIkUK7b7lYnSd9N5WNojP6UaIhyr7hSaGYxY4d%2BPKW0CiH1IVO66lMc8yXDDe6i&X-Amz-Signature=df370db78d9b7e13a824a397d5f6eefc53c2f8fde96b4dedf62b071d281a2141&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
