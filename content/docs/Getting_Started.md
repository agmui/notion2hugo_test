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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAVJ45C%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3yNuy%2BKmO8DpKI1%2BbO0PEGN8QwO%2FZpNvF7HBMZtbkdAiAWINdbCJOU56Dr9tMhLmiYUkAjliytaHBxhjToNm5usiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6La9BGR6BMRovWyvKtwDJRQBnfl%2FVwzp87heLRC7f%2Bu8RtQuLPWoSZKD%2B0OW9jTqMz2GaTG0wzOncL7p5UMuZJXph6ynN5j7AoLbCuCnXHZAumbrwdZETt%2FOv2%2BuNV8b%2FD0v%2BR1ME%2FkLrAY0Z50Oy3YZxQN%2BVeoWDzrST1rmb%2BLVSGgNYyWvQzHsSub6wMCXHt7mVnG3sxkGr9KzwASzr%2BiInMsz7gJ24EXzWY85Mxi8FwhpI1SwnjUOlUeMTwJ0RtyqnS%2B1zK2rJ7pwvnR7oYsbKxTkOSqNcwwk39VsVUwydBU04F%2FBsmfNexSY9Y9ttfKbWro3Im%2BW1MyjmMad7VsC6rBi0QJxoOCWlyCH%2Fz4eoK%2BhR%2BXWGQiRxkPOyJB26dysHzQoOwAsmGdJbtMd1xiRSwU7bji63aqhhCQ2L7msQkZbmKbnj2%2FdaG1mDGVbQqt6prq9vwjgUiCPwg4NySNzrQ4pK4q3IK1czzRPacI9Z8Fwjj4tlpZE0JB6AW5mUtKqkA4aqLpFU3nYfgN6G7c3OeSKpeHKI50pQsxVKEWV6MG1gvw%2BgJM1NqbPNcdhFNhxjvCViNzptCNTVrElXfLyXPZ6yKWFJNo5fQ6x9nOzxx%2Fwj6gJjNzjeOG67KxvsG3rzOlbiRI1PJwwndaewgY6pgF7X7sxJC%2BRKC0trXgpyUimVXn54ZUXOX%2F%2FZNv33%2FLaKc33NM%2BE3KpPv9sHnAGsxNma%2F4yYlG4YnHcT81hMVxz%2FfwZd1rLWyxKVJvH7MMpWsWCrMexrYsAJjxgt8QjsyIT7SPV4KrTmXoUqK8GqT09jRRdGQN4SIjIx2CLykG7UY9Yy8X3w7UolsR1%2FktDg%2BHVS66V2Pxj7p81nyVpAeZ%2BBFzwRMaNj&X-Amz-Signature=5207ae954784a9bb425d95bf4f5bbe245eba10ddcbfa028b5548e72400b6f489&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAVJ45C%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3yNuy%2BKmO8DpKI1%2BbO0PEGN8QwO%2FZpNvF7HBMZtbkdAiAWINdbCJOU56Dr9tMhLmiYUkAjliytaHBxhjToNm5usiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6La9BGR6BMRovWyvKtwDJRQBnfl%2FVwzp87heLRC7f%2Bu8RtQuLPWoSZKD%2B0OW9jTqMz2GaTG0wzOncL7p5UMuZJXph6ynN5j7AoLbCuCnXHZAumbrwdZETt%2FOv2%2BuNV8b%2FD0v%2BR1ME%2FkLrAY0Z50Oy3YZxQN%2BVeoWDzrST1rmb%2BLVSGgNYyWvQzHsSub6wMCXHt7mVnG3sxkGr9KzwASzr%2BiInMsz7gJ24EXzWY85Mxi8FwhpI1SwnjUOlUeMTwJ0RtyqnS%2B1zK2rJ7pwvnR7oYsbKxTkOSqNcwwk39VsVUwydBU04F%2FBsmfNexSY9Y9ttfKbWro3Im%2BW1MyjmMad7VsC6rBi0QJxoOCWlyCH%2Fz4eoK%2BhR%2BXWGQiRxkPOyJB26dysHzQoOwAsmGdJbtMd1xiRSwU7bji63aqhhCQ2L7msQkZbmKbnj2%2FdaG1mDGVbQqt6prq9vwjgUiCPwg4NySNzrQ4pK4q3IK1czzRPacI9Z8Fwjj4tlpZE0JB6AW5mUtKqkA4aqLpFU3nYfgN6G7c3OeSKpeHKI50pQsxVKEWV6MG1gvw%2BgJM1NqbPNcdhFNhxjvCViNzptCNTVrElXfLyXPZ6yKWFJNo5fQ6x9nOzxx%2Fwj6gJjNzjeOG67KxvsG3rzOlbiRI1PJwwndaewgY6pgF7X7sxJC%2BRKC0trXgpyUimVXn54ZUXOX%2F%2FZNv33%2FLaKc33NM%2BE3KpPv9sHnAGsxNma%2F4yYlG4YnHcT81hMVxz%2FfwZd1rLWyxKVJvH7MMpWsWCrMexrYsAJjxgt8QjsyIT7SPV4KrTmXoUqK8GqT09jRRdGQN4SIjIx2CLykG7UY9Yy8X3w7UolsR1%2FktDg%2BHVS66V2Pxj7p81nyVpAeZ%2BBFzwRMaNj&X-Amz-Signature=22f05c7329cdf0b627e80bdf5ff3456cda2d25508555455cd1a7f0782342eb3b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAVJ45C%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3yNuy%2BKmO8DpKI1%2BbO0PEGN8QwO%2FZpNvF7HBMZtbkdAiAWINdbCJOU56Dr9tMhLmiYUkAjliytaHBxhjToNm5usiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6La9BGR6BMRovWyvKtwDJRQBnfl%2FVwzp87heLRC7f%2Bu8RtQuLPWoSZKD%2B0OW9jTqMz2GaTG0wzOncL7p5UMuZJXph6ynN5j7AoLbCuCnXHZAumbrwdZETt%2FOv2%2BuNV8b%2FD0v%2BR1ME%2FkLrAY0Z50Oy3YZxQN%2BVeoWDzrST1rmb%2BLVSGgNYyWvQzHsSub6wMCXHt7mVnG3sxkGr9KzwASzr%2BiInMsz7gJ24EXzWY85Mxi8FwhpI1SwnjUOlUeMTwJ0RtyqnS%2B1zK2rJ7pwvnR7oYsbKxTkOSqNcwwk39VsVUwydBU04F%2FBsmfNexSY9Y9ttfKbWro3Im%2BW1MyjmMad7VsC6rBi0QJxoOCWlyCH%2Fz4eoK%2BhR%2BXWGQiRxkPOyJB26dysHzQoOwAsmGdJbtMd1xiRSwU7bji63aqhhCQ2L7msQkZbmKbnj2%2FdaG1mDGVbQqt6prq9vwjgUiCPwg4NySNzrQ4pK4q3IK1czzRPacI9Z8Fwjj4tlpZE0JB6AW5mUtKqkA4aqLpFU3nYfgN6G7c3OeSKpeHKI50pQsxVKEWV6MG1gvw%2BgJM1NqbPNcdhFNhxjvCViNzptCNTVrElXfLyXPZ6yKWFJNo5fQ6x9nOzxx%2Fwj6gJjNzjeOG67KxvsG3rzOlbiRI1PJwwndaewgY6pgF7X7sxJC%2BRKC0trXgpyUimVXn54ZUXOX%2F%2FZNv33%2FLaKc33NM%2BE3KpPv9sHnAGsxNma%2F4yYlG4YnHcT81hMVxz%2FfwZd1rLWyxKVJvH7MMpWsWCrMexrYsAJjxgt8QjsyIT7SPV4KrTmXoUqK8GqT09jRRdGQN4SIjIx2CLykG7UY9Yy8X3w7UolsR1%2FktDg%2BHVS66V2Pxj7p81nyVpAeZ%2BBFzwRMaNj&X-Amz-Signature=4744a8dde47066bfce83b051075c3ae51a8c49e37c514f7aad096c5f3f3b4943&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRCVJJ6%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ0w38VGJZlQZ40R%2F40%2BB9vqRtsUU%2BCcggryxrQ%2BlbkwIgWRwDs417Dq%2FrGe0ikBYIAItEYhYsvq0VedExF0pkKTIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGcFxl5zaPQ1dZPWircA9yMNjJoC%2FFa2StYv5%2FfvCPOuMkRrfKn3GFjhCTjzViZ2pCFsf2BuQQOvRjBG%2FVe5DzDaSDjsOVxK0raNNrayQCrjVBtIP%2Fqfcu60j0tTDNWJzRH8PgrOb0iSUwCzuyWMCtS%2B4avgk4zodSmAKS7LRAeFlcqOeYuNUkY4jhZuUBUe07%2B21%2FQTu0i4FJs%2FKYxEYOuLJLHBhDDN%2BRqXINMG4Xt%2Bde0MW3nksnpt5Hleg%2BydEO%2FR7b7pkmbsBTnUjw%2FJI%2BIveNFY1dvOCtEkSk2SrWn5ZEJHHkeScNuMvBOKo1H3VGvB1Iu75ZKpWjccji%2FALjn51Y6BuohrLQWdVtvW%2BRWP3%2BXObQ88LPGveIvfgQvNCE4RqN6NRO3ce57gda6LB5K8TRxWXqsZNRWqzvvgOf07YK6zRCfD%2BLELg6qil%2BHiCD7O9QrIv4NC4x8XWZnlAT6ngxxpU%2F0Bs76D1BK1ATMF1Elo0gWdkwTfa6JIwyPgZozfJ4YVGc1801lzPfdH71N2ZBC32BuRRXOHBJlDLNFlTeDyDRU%2BgxNVWQZMkQZ%2BOxr2CIaLLQiKOd3%2BDW4MaG3fFND%2BliiXLE9%2B3%2Bj8aj8%2By5uGunQ%2BAN7HeW%2BJYGEIRpWgC5zN0lW3i6rMP3VnsIGOqUB9GlC5iKvLKiUnt2M7wWwX4YeDTzDR2eg4rxgw3uW120aThbKkoVPYtJ8CP8pyz3FIzKKhe4fXO2G9JZu8ZZ7%2FDAdx1biWrzhjXcxieEt%2B5sLLHsql2LFjZ9TZRuMzhBek9moVXhc1L0XjUt6rYtCroocpr8MjAYq0ZIuvRGzj%2BXLGt6l6vFI6d%2BvHtIs0414%2Bd7%2FGVmwZNPlrw%2BKB2BMh0oMrOeG&X-Amz-Signature=59232285be6939a6f1c3b1188ad0332cec50991529ea331490ce9bc135389a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VH4HM5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK%2BpR%2FJUvAZ9Xjr%2FFk1zUJQ%2F5L5dK5GYw%2F0E0vErKQcAiAfPeMfJAyvc2oGAxK5OaD4zcQAKlSUy5g3qgTfE8xC9yqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9HeGLahUmgURy9qKtwD9b6WKedREBZJqtaBfQ%2FFdfrbKniRKm3Jk9hsedDH8e7AocjhtZNxM0928tMbVeiLfvIZv8xbn17crQri3G8YHKtIXJXNZ5ABx%2BlSimBxMLac9ZNF9QFBJpKGBlzlBPgUbAFLdqReQgDo24zNm4KzP9VSemhCq9cN8Bt3hMvyc7MkhQH2qnj8Ujbr4L3fYSg9Ld9XSo8Bry%2F8j2TniB2fGSqkhbiAHste4ojJkMhZhxbFhqdzD4y5DyqbMqdEZzca1zhm6oCrub8BuW0opf0GH11uROauNPtVZobi3CUAd%2FfnnYBJ3H9sTuDlqtbjX3hhJSvoQZMiAOczbArz%2FnpPFZx3KN69fELQtH0lnT49RjW2cuOqsMOvAoP%2FhZ%2FYo8typB8OpYwsOGD1I324qxKMZ6rZSJRfmLdF8B6xPhaTQzFEiDFgduWsUzuK7Lx3R%2FJKXi8gfPc0hSM7vQRnREyT1xCvFrYND9psVipxPyrPzbJK8YdL8kMlpXCl3XARQhzi7Qaj1j0wQ1s%2Fuxn3%2FgYVm8P1yMhc2g20sCxoXtSl2z06EyRIoHjyHD8RTQPNsRnD6Yawwuwo6%2B%2Fr2eT9bFVs2PcgNobfENvaZY70z5iTso3lnahRM%2F9LFZ1lZwkw8tWewgY6pgHGRUmalRk0ME2h8Sw59KxoIbmkMcRpkDAQ%2BDsIPRWfdI1MW7TqoAMNJjC%2FtkHT6JJGSvVBetlIYebCMlkN0TOA9faoDv0o1AvU3VjvRKtAIDW%2FJ8pUgoVj3xjOdgY68zsLDBGotxI0yU2MTAYH96T9jKQXMsx4LFVXxp6xYTGP4tqiEodhgkmvR8gOPNYgXAplR0%2BHio%2BB98PC%2B1OwnkLKYY9jCIFy&X-Amz-Signature=f6e3ce9ba58f76a3b56b734e9c11228194fe0d8b129eb13fb268b2ad1f0b7d61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAVJ45C%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3yNuy%2BKmO8DpKI1%2BbO0PEGN8QwO%2FZpNvF7HBMZtbkdAiAWINdbCJOU56Dr9tMhLmiYUkAjliytaHBxhjToNm5usiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6La9BGR6BMRovWyvKtwDJRQBnfl%2FVwzp87heLRC7f%2Bu8RtQuLPWoSZKD%2B0OW9jTqMz2GaTG0wzOncL7p5UMuZJXph6ynN5j7AoLbCuCnXHZAumbrwdZETt%2FOv2%2BuNV8b%2FD0v%2BR1ME%2FkLrAY0Z50Oy3YZxQN%2BVeoWDzrST1rmb%2BLVSGgNYyWvQzHsSub6wMCXHt7mVnG3sxkGr9KzwASzr%2BiInMsz7gJ24EXzWY85Mxi8FwhpI1SwnjUOlUeMTwJ0RtyqnS%2B1zK2rJ7pwvnR7oYsbKxTkOSqNcwwk39VsVUwydBU04F%2FBsmfNexSY9Y9ttfKbWro3Im%2BW1MyjmMad7VsC6rBi0QJxoOCWlyCH%2Fz4eoK%2BhR%2BXWGQiRxkPOyJB26dysHzQoOwAsmGdJbtMd1xiRSwU7bji63aqhhCQ2L7msQkZbmKbnj2%2FdaG1mDGVbQqt6prq9vwjgUiCPwg4NySNzrQ4pK4q3IK1czzRPacI9Z8Fwjj4tlpZE0JB6AW5mUtKqkA4aqLpFU3nYfgN6G7c3OeSKpeHKI50pQsxVKEWV6MG1gvw%2BgJM1NqbPNcdhFNhxjvCViNzptCNTVrElXfLyXPZ6yKWFJNo5fQ6x9nOzxx%2Fwj6gJjNzjeOG67KxvsG3rzOlbiRI1PJwwndaewgY6pgF7X7sxJC%2BRKC0trXgpyUimVXn54ZUXOX%2F%2FZNv33%2FLaKc33NM%2BE3KpPv9sHnAGsxNma%2F4yYlG4YnHcT81hMVxz%2FfwZd1rLWyxKVJvH7MMpWsWCrMexrYsAJjxgt8QjsyIT7SPV4KrTmXoUqK8GqT09jRRdGQN4SIjIx2CLykG7UY9Yy8X3w7UolsR1%2FktDg%2BHVS66V2Pxj7p81nyVpAeZ%2BBFzwRMaNj&X-Amz-Signature=2e89327cbe0fc57f28da7ba4fbd0fa6b8cdcca7cb193e020da0608d36854ef44&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
