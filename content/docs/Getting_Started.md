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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4MRNF5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGAoEnNVioFdTUWwbVxSWmzqPEOr%2FzUb2PADyECHmiItAiADNIJ4nG53j6A%2F7beEYIr6QBKq6uO1PYOvJ8Qj9%2BM02iqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5g8ec9PI0GX8y4R7KtwDuOAjISewzJbDZX8usOIflyeUOroEDLe%2BqI9lVBn92jmtttT0399OE17L%2BZ8Fgfrj3WEDD%2BHouQyjUyNDJlxkVXE3G0eTAcIBlDogmqT4eVZ8AuAAPlM3K2H3%2Bp8JA%2Fr1pBUbJGm%2FGhcYKvSaWLNVLaf10ddChI5ZDSVF5GOyufstoFMVsi311r1avrur6p2LEUACbNVj2BZ4RTEHjq5wGoUEX0%2FqCVhj2qpG%2FrT%2FcOQ0htNQD4hxqUUhT6AHl8RrUnsNb1lTqpkFhU31ETyv1WXiiqJ2bebWKC4%2FOe96XV8yZvcDeX3tjM%2F51Cp0F4noZLqR%2Bm78%2BrzkWQOQqJFZWEaFLwgO9uvnOmM%2BqHAeqkBqu2ktq%2Bj8o2k6Lg%2FdgzLMb%2B8twVIVgllPdH0UKs3OByEpsU8c2b2P%2BKODiJUlBuf297ccTFNkBM2WMXDsBsKzut2O6meD3D4QbdDqWakKAaMp3Y2KXfSJuuqbL5FaONpZ2TRTXDGFAs7HDV435%2F218S1jupqjw9n3kgGSnad%2Ftu3lN5ZLWAULJ%2BRwAw%2Bu3L7WskrdcQG%2B30rMEJ1aQY57309we2J%2BZ8bf%2FB6WKXzVkhfzTdDQmD%2Fph9IBgkmTB0gEYrxRuG%2BfReSRpl8w1JLZxAY6pgEK773%2FedBcWRFSRsAZoBt5fC6rFJMYU30GlWaOaHkpY1Mh%2FHzoi4GKmdtFp9gCZxYCiPeOjXtx59M3U9nHq5Pa0PvK4zHPjgk6%2BbP3%2FiEp2jwOK%2BRTeNh9zsfAQAB1EP2maPcgXUCbrpzIQCYjMtWtTTAElOPcqbRAcEpXmFTNDSJQvB1KVvkgE0%2BIiqY7oVnR28AZFXxIpoLM%2BTHdQgDHFpt9c%2F4P&X-Amz-Signature=5c724c64cf7f9f35bb14d55ab4f78a489cce088c801e7c3d4a7d9f004314bafc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4MRNF5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGAoEnNVioFdTUWwbVxSWmzqPEOr%2FzUb2PADyECHmiItAiADNIJ4nG53j6A%2F7beEYIr6QBKq6uO1PYOvJ8Qj9%2BM02iqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5g8ec9PI0GX8y4R7KtwDuOAjISewzJbDZX8usOIflyeUOroEDLe%2BqI9lVBn92jmtttT0399OE17L%2BZ8Fgfrj3WEDD%2BHouQyjUyNDJlxkVXE3G0eTAcIBlDogmqT4eVZ8AuAAPlM3K2H3%2Bp8JA%2Fr1pBUbJGm%2FGhcYKvSaWLNVLaf10ddChI5ZDSVF5GOyufstoFMVsi311r1avrur6p2LEUACbNVj2BZ4RTEHjq5wGoUEX0%2FqCVhj2qpG%2FrT%2FcOQ0htNQD4hxqUUhT6AHl8RrUnsNb1lTqpkFhU31ETyv1WXiiqJ2bebWKC4%2FOe96XV8yZvcDeX3tjM%2F51Cp0F4noZLqR%2Bm78%2BrzkWQOQqJFZWEaFLwgO9uvnOmM%2BqHAeqkBqu2ktq%2Bj8o2k6Lg%2FdgzLMb%2B8twVIVgllPdH0UKs3OByEpsU8c2b2P%2BKODiJUlBuf297ccTFNkBM2WMXDsBsKzut2O6meD3D4QbdDqWakKAaMp3Y2KXfSJuuqbL5FaONpZ2TRTXDGFAs7HDV435%2F218S1jupqjw9n3kgGSnad%2Ftu3lN5ZLWAULJ%2BRwAw%2Bu3L7WskrdcQG%2B30rMEJ1aQY57309we2J%2BZ8bf%2FB6WKXzVkhfzTdDQmD%2Fph9IBgkmTB0gEYrxRuG%2BfReSRpl8w1JLZxAY6pgEK773%2FedBcWRFSRsAZoBt5fC6rFJMYU30GlWaOaHkpY1Mh%2FHzoi4GKmdtFp9gCZxYCiPeOjXtx59M3U9nHq5Pa0PvK4zHPjgk6%2BbP3%2FiEp2jwOK%2BRTeNh9zsfAQAB1EP2maPcgXUCbrpzIQCYjMtWtTTAElOPcqbRAcEpXmFTNDSJQvB1KVvkgE0%2BIiqY7oVnR28AZFXxIpoLM%2BTHdQgDHFpt9c%2F4P&X-Amz-Signature=3e2f745d09b9892909f7667d0ee8e2627662e67c7bb023f79cc11c2cbc938156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4MRNF5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGAoEnNVioFdTUWwbVxSWmzqPEOr%2FzUb2PADyECHmiItAiADNIJ4nG53j6A%2F7beEYIr6QBKq6uO1PYOvJ8Qj9%2BM02iqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5g8ec9PI0GX8y4R7KtwDuOAjISewzJbDZX8usOIflyeUOroEDLe%2BqI9lVBn92jmtttT0399OE17L%2BZ8Fgfrj3WEDD%2BHouQyjUyNDJlxkVXE3G0eTAcIBlDogmqT4eVZ8AuAAPlM3K2H3%2Bp8JA%2Fr1pBUbJGm%2FGhcYKvSaWLNVLaf10ddChI5ZDSVF5GOyufstoFMVsi311r1avrur6p2LEUACbNVj2BZ4RTEHjq5wGoUEX0%2FqCVhj2qpG%2FrT%2FcOQ0htNQD4hxqUUhT6AHl8RrUnsNb1lTqpkFhU31ETyv1WXiiqJ2bebWKC4%2FOe96XV8yZvcDeX3tjM%2F51Cp0F4noZLqR%2Bm78%2BrzkWQOQqJFZWEaFLwgO9uvnOmM%2BqHAeqkBqu2ktq%2Bj8o2k6Lg%2FdgzLMb%2B8twVIVgllPdH0UKs3OByEpsU8c2b2P%2BKODiJUlBuf297ccTFNkBM2WMXDsBsKzut2O6meD3D4QbdDqWakKAaMp3Y2KXfSJuuqbL5FaONpZ2TRTXDGFAs7HDV435%2F218S1jupqjw9n3kgGSnad%2Ftu3lN5ZLWAULJ%2BRwAw%2Bu3L7WskrdcQG%2B30rMEJ1aQY57309we2J%2BZ8bf%2FB6WKXzVkhfzTdDQmD%2Fph9IBgkmTB0gEYrxRuG%2BfReSRpl8w1JLZxAY6pgEK773%2FedBcWRFSRsAZoBt5fC6rFJMYU30GlWaOaHkpY1Mh%2FHzoi4GKmdtFp9gCZxYCiPeOjXtx59M3U9nHq5Pa0PvK4zHPjgk6%2BbP3%2FiEp2jwOK%2BRTeNh9zsfAQAB1EP2maPcgXUCbrpzIQCYjMtWtTTAElOPcqbRAcEpXmFTNDSJQvB1KVvkgE0%2BIiqY7oVnR28AZFXxIpoLM%2BTHdQgDHFpt9c%2F4P&X-Amz-Signature=2b2952c9a0cd5ac59e6347239de79b11a29f61e4a8793383c5df2d5aefaac5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4T75JOR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHAGbQ0zuTkbU0NHuHW%2BLEZKo2v7ioYMFDo9qkkr0gvvAiEAhp5JF03X1E4T3H1vWwIT3Oh%2FjsUviqZnlW%2FOlsVkoysqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFk2jQ%2BNccXYW5XchircA7G6MYPPG0eNCQIcFGJchXgsaUpArf0zlyNlNbEJ7EOhgebLdTAtYSE7a9AoEz4ol5SLDLbwbyeJeZFzZ2F869I4O%2F%2BW8p8LajU1k0YANoSixZel2vcNGjFw2CpZBAOf%2FHcjTbjSuIc9o%2BZO0zcWp%2F4OkRod7FoQao9LOx9ODk%2FEDL5SUhWPXdMaKPJd0pPTLoi13UvdZBQtPXkhN6MTo%2BA2SBmcdx1uXX05P6g4%2BMddZks6Fy8HBIxOcG%2Fx1TK6213BQR6PFAifuV1OzegfGmbaa1KLC953MGb9gaEW66HudpWzLzJti3fCHnqIu9Jq%2BygL5dUA44%2B6fItrsgJce4x8%2FNSX5%2FqASKebRFLCgH1WZlDlwBqVZtVymmHFUs7NUkxYjjrM66E%2B3OmPvn4qKX3%2F6rpuEJa3JZf5LQ2YLXrBumsXC98XAMVEG9U6Av0HprXqR41lyHjhYP1KvdYo8642gluLG0D8RORD31Og1WKo6aCLyDCKswm6jT%2FsEm4eHGChswEYadn6GogU%2BFGtDKfhmiCo15elsBsUkJAt%2BNynkbIdctfge6dsi71QvV3aSBON73mmC7Fyuz8TXFr%2BXhSVkYixRGZrWE7YziEk0LpAAH9P%2BILjoY6KL45UMOqS2cQGOqUBvUcJx8NbZOpL1KorHQCJqyqNnde5VMt53dbvZJOOKoxGasXbf3OcRldIFH8zLR1algcOdXXyrmC3CmMkyJZNZcyPPYxNU%2F0Nnp9GDHNKEcP9IMH3c%2FWdIpuqAEKP6MXHkYlTtj%2B0gAItn7KzYBILtnJ2GjwuT3N2t3XdPnwxDikZD1p1a525Rf44b66m96dUZSyR9fIHgaemd%2BIJTRhzLJJKwXgc&X-Amz-Signature=9ddaf7ae927c7bdbd318240ef7e8a4313a98d6e1cc1d1199a9fa676034556d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXW5U2I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDx0MqYDock74lMV1qyA2HJHG0UmtYrqWylJEe60eO2nQIgSPExG52eNcjfLEihypvPRcFMf7h67gdrwBYMQfUL6awqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCA7ZSGz%2FlzQNTRiSrcA1K5g4rt6TjRFiNN72Pf%2BWlampUSL%2Bd0FzDvhVeY27Tgn3n%2BAdz3cAuiG6%2Bkxk%2FvQ9bP0Iq1mUP1UJMpX%2Fr9urdZ%2FC%2FfTw3aCZupdtvlKBT41Nm4VLK7O3qE0%2F8re2b6mmI0JOFlPvnQwV4yd6zF5F5zjxkhbpogXgsBj8rLqxkb74myuEubbRgTwqHvwdDsT9g6T1ug1IjdupLph2%2Bq%2F5RT%2BzBCaLFOaBZZ4nSfdcZCFmXBGFb4qYr2B99HNChgqVM1%2BYC8Hj9SvknL1jvaq96bJCEK29b0evoDW3h78vu%2F6c%2FTXAguBHHTMrdtzS6kMtrdhwS21EWRq2Ft9rWpVvVshfeOb2GHYUBb1l52CIytOAuLM0UmhIwSQz982ysL29p3cHQYk5V6dJa6Lono4NB17Q1yk00Ku8pm26sf6IbhAHaUt9FqpbSUTMETeXz6MeG1qa0ZJjc3fFYsfTe2jo3q9Gb0XbBwx4zCbAnas%2BVl9Rl1UbVHSxFovvzWtylPGSryoBFhGex35Cml1%2BiZCbM2dOJrXG%2FqU8yJjdXca6TDjYsJbbmjtCivkSl6dlpcZmZlWN3vJIpPOjFJwRtSyl4TS27GJWQesLUGi8vlq0RQ4Pa0dlltTXoM38xzMNSS2cQGOqUBaCzeVAIX9kn%2B7L6MUcYSJPzQw4SqMquwBTI55hUo1oM%2BS9UglWX%2FSxAmZwlGZ9OhokFMmFuBLuzi9AUuNYVU7UsZzR%2F6fuHz%2BdRgXaAiGQyDj9Ds2AP0NfP9a5ZwQAH2Enk3NuGfOupp4CZlxdpjLpmXqoRTsGhy2xwfes7%2FgvvWZt9RCBCodrAN4QSdPNTKNxe3NkTmhlyz18t%2BVN73u7mkpdOq&X-Amz-Signature=8921ce9f16a2183dc307b2f6896d17e0c4dd8c14b70a2e70c3f8a9cc0c820e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4MRNF5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGAoEnNVioFdTUWwbVxSWmzqPEOr%2FzUb2PADyECHmiItAiADNIJ4nG53j6A%2F7beEYIr6QBKq6uO1PYOvJ8Qj9%2BM02iqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5g8ec9PI0GX8y4R7KtwDuOAjISewzJbDZX8usOIflyeUOroEDLe%2BqI9lVBn92jmtttT0399OE17L%2BZ8Fgfrj3WEDD%2BHouQyjUyNDJlxkVXE3G0eTAcIBlDogmqT4eVZ8AuAAPlM3K2H3%2Bp8JA%2Fr1pBUbJGm%2FGhcYKvSaWLNVLaf10ddChI5ZDSVF5GOyufstoFMVsi311r1avrur6p2LEUACbNVj2BZ4RTEHjq5wGoUEX0%2FqCVhj2qpG%2FrT%2FcOQ0htNQD4hxqUUhT6AHl8RrUnsNb1lTqpkFhU31ETyv1WXiiqJ2bebWKC4%2FOe96XV8yZvcDeX3tjM%2F51Cp0F4noZLqR%2Bm78%2BrzkWQOQqJFZWEaFLwgO9uvnOmM%2BqHAeqkBqu2ktq%2Bj8o2k6Lg%2FdgzLMb%2B8twVIVgllPdH0UKs3OByEpsU8c2b2P%2BKODiJUlBuf297ccTFNkBM2WMXDsBsKzut2O6meD3D4QbdDqWakKAaMp3Y2KXfSJuuqbL5FaONpZ2TRTXDGFAs7HDV435%2F218S1jupqjw9n3kgGSnad%2Ftu3lN5ZLWAULJ%2BRwAw%2Bu3L7WskrdcQG%2B30rMEJ1aQY57309we2J%2BZ8bf%2FB6WKXzVkhfzTdDQmD%2Fph9IBgkmTB0gEYrxRuG%2BfReSRpl8w1JLZxAY6pgEK773%2FedBcWRFSRsAZoBt5fC6rFJMYU30GlWaOaHkpY1Mh%2FHzoi4GKmdtFp9gCZxYCiPeOjXtx59M3U9nHq5Pa0PvK4zHPjgk6%2BbP3%2FiEp2jwOK%2BRTeNh9zsfAQAB1EP2maPcgXUCbrpzIQCYjMtWtTTAElOPcqbRAcEpXmFTNDSJQvB1KVvkgE0%2BIiqY7oVnR28AZFXxIpoLM%2BTHdQgDHFpt9c%2F4P&X-Amz-Signature=70b91f88bdf72af8f46c3005f57729f2fe4af1a0bbb319ffefc4e8572c8a7c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
