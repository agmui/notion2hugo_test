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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25T5MVJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQerG%2Fc9f%2BJDNNSgqpj0I5D4KHUUyRMhB8tIwNXO%2F5SAIhAJ61FaDICAcI9OkDR2jrjazHH%2Bbvba0%2BRimom4oUWvPiKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMevf8h8dVqnk99ucq3AOERosVNpb9q9Mv4Q9aABcJO9Yg2m3dz7fVdCtyXotqGlGmv%2BKpB9%2BW4LeJqiko0JFrGktynlEEU1ymoegPk0YPZ6DNtUKdcTZkGN2ia4H2d%2Fc47zD0RdBO9sQNDug85Z1NsPhtkzz%2FMk8xARfIivIWHE7M5WbbJ43kSeowajBtvQFaFz4sdnHNDxUmfGrc3yFkdCQR3%2BZlT6SOr38IWp9p7zHz8loiE%2FQCz0we%2FWbl2GmBCrYP0h9uJgdVxmfoBM5Bjne1UYmbtiqbZ%2FXmcmHUdVHB98czUJ%2Bl9kWV0ruRX8dR8D6337MS0DYSTEJ5j3NTav6HF63vIUi02EfeQVapmThNhd%2BCottZ20KkjATRZFlOI2J%2BWOXvZTI%2FzTelPknvERMkPq77T3WrbS5sgFhEFO4jUGrfU%2B4leIpedvSuE20wXUNAE07CiKGXHqAJRgJfkBUWMV%2FqagmKWOveeWPz08aK5tTa1cyvdj042WsDyihzU85nXLl7PfrMTABWlVF%2BU%2Brz7QTU%2FHJEuL5jrf%2FJaeOCKYdxtKwm4oWtbefy7uf0XiWq%2Fzxb%2BIOC89J5q3bdVYikodqUfJ5tfzFgfY6onYMqZIvqvbOqR5AXvbRLrVwBHHySznK5Wn0eBzC90rXEBjqkAYF0HS7jQofMyPIyaE1WpSwnsKxbafLekHWqoPD4I%2FDc7xHjEwZFI6NreGCTUb7gRW8QZwsAl%2FkXOAcoKbRmWFNNoCAoBzB5zXW9Qvdt30VgWabntTLa82%2FvzHYAjP7W8c5JM2w6PVJCAfbLa8vwqSuYsWc1Vc6%2F6SuzkoyQ3Mq%2BC5btVP3mYcTCWQz6pHUnfrsBj3F9futRo4RyFmD5wdWWc7%2Bi&X-Amz-Signature=cad9d262cadfc3b196fc99fef7f8d8a286c713b569ef2df10e906429f9650a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25T5MVJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQerG%2Fc9f%2BJDNNSgqpj0I5D4KHUUyRMhB8tIwNXO%2F5SAIhAJ61FaDICAcI9OkDR2jrjazHH%2Bbvba0%2BRimom4oUWvPiKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMevf8h8dVqnk99ucq3AOERosVNpb9q9Mv4Q9aABcJO9Yg2m3dz7fVdCtyXotqGlGmv%2BKpB9%2BW4LeJqiko0JFrGktynlEEU1ymoegPk0YPZ6DNtUKdcTZkGN2ia4H2d%2Fc47zD0RdBO9sQNDug85Z1NsPhtkzz%2FMk8xARfIivIWHE7M5WbbJ43kSeowajBtvQFaFz4sdnHNDxUmfGrc3yFkdCQR3%2BZlT6SOr38IWp9p7zHz8loiE%2FQCz0we%2FWbl2GmBCrYP0h9uJgdVxmfoBM5Bjne1UYmbtiqbZ%2FXmcmHUdVHB98czUJ%2Bl9kWV0ruRX8dR8D6337MS0DYSTEJ5j3NTav6HF63vIUi02EfeQVapmThNhd%2BCottZ20KkjATRZFlOI2J%2BWOXvZTI%2FzTelPknvERMkPq77T3WrbS5sgFhEFO4jUGrfU%2B4leIpedvSuE20wXUNAE07CiKGXHqAJRgJfkBUWMV%2FqagmKWOveeWPz08aK5tTa1cyvdj042WsDyihzU85nXLl7PfrMTABWlVF%2BU%2Brz7QTU%2FHJEuL5jrf%2FJaeOCKYdxtKwm4oWtbefy7uf0XiWq%2Fzxb%2BIOC89J5q3bdVYikodqUfJ5tfzFgfY6onYMqZIvqvbOqR5AXvbRLrVwBHHySznK5Wn0eBzC90rXEBjqkAYF0HS7jQofMyPIyaE1WpSwnsKxbafLekHWqoPD4I%2FDc7xHjEwZFI6NreGCTUb7gRW8QZwsAl%2FkXOAcoKbRmWFNNoCAoBzB5zXW9Qvdt30VgWabntTLa82%2FvzHYAjP7W8c5JM2w6PVJCAfbLa8vwqSuYsWc1Vc6%2F6SuzkoyQ3Mq%2BC5btVP3mYcTCWQz6pHUnfrsBj3F9futRo4RyFmD5wdWWc7%2Bi&X-Amz-Signature=29aff63026930f50e3ef49144189a03e2beec84c445991ff3f588013e7b2b996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25T5MVJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQerG%2Fc9f%2BJDNNSgqpj0I5D4KHUUyRMhB8tIwNXO%2F5SAIhAJ61FaDICAcI9OkDR2jrjazHH%2Bbvba0%2BRimom4oUWvPiKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMevf8h8dVqnk99ucq3AOERosVNpb9q9Mv4Q9aABcJO9Yg2m3dz7fVdCtyXotqGlGmv%2BKpB9%2BW4LeJqiko0JFrGktynlEEU1ymoegPk0YPZ6DNtUKdcTZkGN2ia4H2d%2Fc47zD0RdBO9sQNDug85Z1NsPhtkzz%2FMk8xARfIivIWHE7M5WbbJ43kSeowajBtvQFaFz4sdnHNDxUmfGrc3yFkdCQR3%2BZlT6SOr38IWp9p7zHz8loiE%2FQCz0we%2FWbl2GmBCrYP0h9uJgdVxmfoBM5Bjne1UYmbtiqbZ%2FXmcmHUdVHB98czUJ%2Bl9kWV0ruRX8dR8D6337MS0DYSTEJ5j3NTav6HF63vIUi02EfeQVapmThNhd%2BCottZ20KkjATRZFlOI2J%2BWOXvZTI%2FzTelPknvERMkPq77T3WrbS5sgFhEFO4jUGrfU%2B4leIpedvSuE20wXUNAE07CiKGXHqAJRgJfkBUWMV%2FqagmKWOveeWPz08aK5tTa1cyvdj042WsDyihzU85nXLl7PfrMTABWlVF%2BU%2Brz7QTU%2FHJEuL5jrf%2FJaeOCKYdxtKwm4oWtbefy7uf0XiWq%2Fzxb%2BIOC89J5q3bdVYikodqUfJ5tfzFgfY6onYMqZIvqvbOqR5AXvbRLrVwBHHySznK5Wn0eBzC90rXEBjqkAYF0HS7jQofMyPIyaE1WpSwnsKxbafLekHWqoPD4I%2FDc7xHjEwZFI6NreGCTUb7gRW8QZwsAl%2FkXOAcoKbRmWFNNoCAoBzB5zXW9Qvdt30VgWabntTLa82%2FvzHYAjP7W8c5JM2w6PVJCAfbLa8vwqSuYsWc1Vc6%2F6SuzkoyQ3Mq%2BC5btVP3mYcTCWQz6pHUnfrsBj3F9futRo4RyFmD5wdWWc7%2Bi&X-Amz-Signature=89e648a91db085d09b527c6b9487644336e33e21d3d3b4adbf535b3f1f11d04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPOBXN3D%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJb9aZ0SIFEuTU8yfHdamaecaKcAIIig5JcUALz%2FBwcAiEAzzb9d3edzRcpMBd0OQnl6CyQHu3CwRAenA00nfKq7NwqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDAcLvNmTAVaXUh%2FSrcAyWNYnxu14DQvdNjhivui9qcA%2BSEl3XFuoe8U8CKIRzSzoUXAqsfoSoDJdFM80oL1HJHSTmI5oj1kC6MTul5yRu3KKzwoJ3BqCaPkfxW1LYgBW8C0X%2B0UgkAkGXH8r0DwTdTcTdeNeVYrbC6xXrdTnS0P8BnX5PA6HGZHC0rprY%2BYbHAyOFGlm6vhnEy%2B44fSIV3U1gNn6IPj9NExptde3gVkjy7o9OCnAxlF708Iwuxqai%2FfIDCGffewH5UTjDL3lEEBLqrueu2g0UoMebNK1NZMZmwT8NZ2LkcciIcSSZVt%2BRJuTC%2Fbk93%2BmyuyvEQNtIaOXThpQhUJKhmGVJRDtPvwkIJ9qu2vopblSjFBGajUime0%2F%2FOj9kZCAi9p%2FEG3a0v92kRbws4NpfoGscaXMZyIm9OLOJiszAbsIXLb6PkN40ZMBXdbFLQOuItZ5gG42s3gMV6DuJYh6OexD4UPiB1ZyXG8kx9aegsImFpBgOdwIV%2FLJBJwUNStoPF%2BHb7ScA2l6EJAwNaci82pQzdx0Thjo5uWywZNRBoc%2BSFqK9mRCoP%2BYqrzo6gKKl0%2FMGAmfZ178Q4cMjIG1ceFgoe6kBrJtau%2BZsqZPCkgGtsfnwRvK25kg5w%2FIHmrieVMK73tcQGOqUBN%2Fko0pg%2BQuSyu%2FvL1clWDU7p3hAEA9XAqeuoF9n3t%2FmdIv4c3lfkDdoHNxHQI90otmSDDB3xzTNq%2F%2FD8IXniaQaYsdEJNhM8E6p7Lz7ftfGiTeuT1bVF8Z7fbtezpwLk0NApXsWXz5eYPBlJ77j63nTZkuMIbANBKS3vsQ9CDwYq4lmh4RtxqocVDXUbDERwhBqBnTJ6QDmHJbc9BMVLANXZ%2F%2F4X&X-Amz-Signature=ece022f7cc56c1eb3a5b38b281e4086d6cef855edc29dcf327568be8d8b14d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y23BV5WC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfhCeiIpTzM8E6kiMZXH52I7l858b41L5fHDy6vT8h9AiAvEG0bwSaN8WrWrl37GOv774KO3HSeMpaDUtthmhsx%2FSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBNN0%2Fg4%2B1YiP0xMUKtwD%2BPbjGxqDo4uQUZQPAXM4sMkmZb8oaGVBuRBLIPDErbBB0PJxAg11qoC%2FRGq%2BdbQg7IoLCbsbbnUxkwwNuWUNDRU8TjK2ZJ%2Fayz1ClgFY77rzlLMJ3UmlJWJ9iAtuUK2NQAQudlXJVXxWidQMy5%2Fe%2BCBKR6CmSIgaVgBzrYYnwbbjxrjYNq%2B5S%2Fd%2F4HlYuJeQCL%2B8K8dlrya%2BitBK5n7mqEaJ8pjbX%2Fh4SXV2W1%2F7GNClsfknw9Vl4rygJMtOMfAaWU4yoD%2B32B0DBCpJFta9BOkmThGLM0c1L8iUKsRRUvKwhKarCdk2R27y2sosBEi8q2KVytMXcF2r5NPHhrCCnAYehzhb3e8ijT3Reo6XjhGY8mIkfFNVMm3yl0NyL2t5KhvRaSb8qNK9xCONyeIi41NPBNLAJjAjWGOPeqQHM7yPpb6ZZ%2FptiEUZB1QkC70FQ6XXPQPuINg%2BvU0IdFHGsjpVbIa%2Bp%2FuBULOnJ7K6A7LWdgQv33vT3EGcqQ18tDQ1iEDzoi8P1fp8bzTdOY2LeeW0D%2B6uMFxHRHzgd4NkS80jfL8bQTc4OxoAf%2BPhytqCCOgxOOupMZRwN3KERMhvx9V99Cs1muwxQ%2BQ8hUJLPlO2yuSqybIN05cEcJEwwNK1xAY6pgFhKi%2BIqTGdvyrSxfolghLMJaSE%2F1emfWEaXAEJbXmuf8oX%2BmqQiXEIb%2FnhuonpEpY11BoJ18d3UkrC9Z2E7%2F8ZU0B%2Fbela%2BVGFHmjro2uIPq5ooL5bjeNaaqm7Tj6Di0KvGSqBEYUYThxihxYVDLNmngkspnOhBC4%2B1iSlBhhrrtSOFghUy62EVNRvcKvKt9ri%2F2zthNhEV2YU%2B4MYcHl6CE8hkL%2BR&X-Amz-Signature=1b18fcaea98eea7dfce3e2ec32398bf3c0cfdbd3edc4efac800d84a17ae40921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25T5MVJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQerG%2Fc9f%2BJDNNSgqpj0I5D4KHUUyRMhB8tIwNXO%2F5SAIhAJ61FaDICAcI9OkDR2jrjazHH%2Bbvba0%2BRimom4oUWvPiKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMevf8h8dVqnk99ucq3AOERosVNpb9q9Mv4Q9aABcJO9Yg2m3dz7fVdCtyXotqGlGmv%2BKpB9%2BW4LeJqiko0JFrGktynlEEU1ymoegPk0YPZ6DNtUKdcTZkGN2ia4H2d%2Fc47zD0RdBO9sQNDug85Z1NsPhtkzz%2FMk8xARfIivIWHE7M5WbbJ43kSeowajBtvQFaFz4sdnHNDxUmfGrc3yFkdCQR3%2BZlT6SOr38IWp9p7zHz8loiE%2FQCz0we%2FWbl2GmBCrYP0h9uJgdVxmfoBM5Bjne1UYmbtiqbZ%2FXmcmHUdVHB98czUJ%2Bl9kWV0ruRX8dR8D6337MS0DYSTEJ5j3NTav6HF63vIUi02EfeQVapmThNhd%2BCottZ20KkjATRZFlOI2J%2BWOXvZTI%2FzTelPknvERMkPq77T3WrbS5sgFhEFO4jUGrfU%2B4leIpedvSuE20wXUNAE07CiKGXHqAJRgJfkBUWMV%2FqagmKWOveeWPz08aK5tTa1cyvdj042WsDyihzU85nXLl7PfrMTABWlVF%2BU%2Brz7QTU%2FHJEuL5jrf%2FJaeOCKYdxtKwm4oWtbefy7uf0XiWq%2Fzxb%2BIOC89J5q3bdVYikodqUfJ5tfzFgfY6onYMqZIvqvbOqR5AXvbRLrVwBHHySznK5Wn0eBzC90rXEBjqkAYF0HS7jQofMyPIyaE1WpSwnsKxbafLekHWqoPD4I%2FDc7xHjEwZFI6NreGCTUb7gRW8QZwsAl%2FkXOAcoKbRmWFNNoCAoBzB5zXW9Qvdt30VgWabntTLa82%2FvzHYAjP7W8c5JM2w6PVJCAfbLa8vwqSuYsWc1Vc6%2F6SuzkoyQ3Mq%2BC5btVP3mYcTCWQz6pHUnfrsBj3F9futRo4RyFmD5wdWWc7%2Bi&X-Amz-Signature=e4cacc5d3a0492539d21380d1173ec3aa3f7196e898ccb277a7b238893ff249c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
