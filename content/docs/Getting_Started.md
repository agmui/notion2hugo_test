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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIUWGUT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCpRuyYDJF5bi7zmDPH65U6PSKeiowRyLJLGVYuCZDozgIhAKq1A%2FbXSFsmHxe7ORFzJrcUMIKQVly3m8nm0%2FYFUY7TKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B8X%2Ba7%2FiDWv08Mqsq3APmZg2YKCghXChbK38%2BVLk4IBwQ19FnJYnbIMbTD2S39Ex0%2BkeVYYIdgfN12QdGLk7F88oEdR5QmStdI8iVu4CxAYWuASKULgIo8ZyQ1AfeNIj3RyItgSeaJ344n9XNfEpq7i3BovgFyrxU9zFLaov2JFXm2Z6K49l7By2zmtSEZrNvCQc1ggKtIty5xePyB6RGVccN9fdS6Axmw4eD%2BxU%2BIvkiSwggBsWqfZPgMk4OzpC7e2dM2nVj4hl4MYfpHZ2E9kYc8Wxv4lsg6QVj4IE5ITjZizPwF5zH1PqCx4fK2hzgAYOS6w9JN9VQjcyxuv2osg37EI3pCu085P8LDlrKJQsZtu4Ag8qv2BVFgUTwsgC%2BlPjzLi%2FDzY2k0b9E3qHUMYura5uzM2VAwSDrb2f6Z9NtMStNfPBtEnDAxN%2FROik5%2B7zgXxw1AWePfDRruWdWyuZnM4hDczpyT5updx0sqLkJts6x6MbNm0pqdkqKbX6QWaC5kwbXBIxq9Bxq4qHsTvK4e4QoSARLwdGKuqMu52scyeAm9ICCze8HPDjThYyDS3PT6kMbPU%2F15IMPJ5ihNC5D8vSnz%2F9Twnk8eI%2FdhDG3ciCn%2B8tCaFBlTAKMz2FjYKhRCQMGu3aYODCHhs7ABjqkAdORqTE98pUfKJTmN9iNco6PzRJ3qzv7%2FXAz1F5aKSJf9zeOHqGUqJb9vQ5MmqRST9LaVPsKmA%2B4HgaMbuasR0I548TdyXV1aK%2BdAMGWxrt0y1CV%2FFBG62hro2LvhD532fHFnbbT%2BLOgttnbasxuR7aLpWHxtyMLcWmo9z1Kjvg8%2Fz847uJnk5ynLZX493pNaHLEoLNIlFbPiuA0o%2FLF9SleSJCw&X-Amz-Signature=37f0d5b1ac80ef2cd5240e5480f5808ffb90853a85c69ab6d9f9ee757a138982&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIUWGUT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCpRuyYDJF5bi7zmDPH65U6PSKeiowRyLJLGVYuCZDozgIhAKq1A%2FbXSFsmHxe7ORFzJrcUMIKQVly3m8nm0%2FYFUY7TKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B8X%2Ba7%2FiDWv08Mqsq3APmZg2YKCghXChbK38%2BVLk4IBwQ19FnJYnbIMbTD2S39Ex0%2BkeVYYIdgfN12QdGLk7F88oEdR5QmStdI8iVu4CxAYWuASKULgIo8ZyQ1AfeNIj3RyItgSeaJ344n9XNfEpq7i3BovgFyrxU9zFLaov2JFXm2Z6K49l7By2zmtSEZrNvCQc1ggKtIty5xePyB6RGVccN9fdS6Axmw4eD%2BxU%2BIvkiSwggBsWqfZPgMk4OzpC7e2dM2nVj4hl4MYfpHZ2E9kYc8Wxv4lsg6QVj4IE5ITjZizPwF5zH1PqCx4fK2hzgAYOS6w9JN9VQjcyxuv2osg37EI3pCu085P8LDlrKJQsZtu4Ag8qv2BVFgUTwsgC%2BlPjzLi%2FDzY2k0b9E3qHUMYura5uzM2VAwSDrb2f6Z9NtMStNfPBtEnDAxN%2FROik5%2B7zgXxw1AWePfDRruWdWyuZnM4hDczpyT5updx0sqLkJts6x6MbNm0pqdkqKbX6QWaC5kwbXBIxq9Bxq4qHsTvK4e4QoSARLwdGKuqMu52scyeAm9ICCze8HPDjThYyDS3PT6kMbPU%2F15IMPJ5ihNC5D8vSnz%2F9Twnk8eI%2FdhDG3ciCn%2B8tCaFBlTAKMz2FjYKhRCQMGu3aYODCHhs7ABjqkAdORqTE98pUfKJTmN9iNco6PzRJ3qzv7%2FXAz1F5aKSJf9zeOHqGUqJb9vQ5MmqRST9LaVPsKmA%2B4HgaMbuasR0I548TdyXV1aK%2BdAMGWxrt0y1CV%2FFBG62hro2LvhD532fHFnbbT%2BLOgttnbasxuR7aLpWHxtyMLcWmo9z1Kjvg8%2Fz847uJnk5ynLZX493pNaHLEoLNIlFbPiuA0o%2FLF9SleSJCw&X-Amz-Signature=45f5c1c0b99ce522a9dc9f41bca1a2aa6c82bdce7627af1f26c821db9c423435&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIUWGUT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCpRuyYDJF5bi7zmDPH65U6PSKeiowRyLJLGVYuCZDozgIhAKq1A%2FbXSFsmHxe7ORFzJrcUMIKQVly3m8nm0%2FYFUY7TKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B8X%2Ba7%2FiDWv08Mqsq3APmZg2YKCghXChbK38%2BVLk4IBwQ19FnJYnbIMbTD2S39Ex0%2BkeVYYIdgfN12QdGLk7F88oEdR5QmStdI8iVu4CxAYWuASKULgIo8ZyQ1AfeNIj3RyItgSeaJ344n9XNfEpq7i3BovgFyrxU9zFLaov2JFXm2Z6K49l7By2zmtSEZrNvCQc1ggKtIty5xePyB6RGVccN9fdS6Axmw4eD%2BxU%2BIvkiSwggBsWqfZPgMk4OzpC7e2dM2nVj4hl4MYfpHZ2E9kYc8Wxv4lsg6QVj4IE5ITjZizPwF5zH1PqCx4fK2hzgAYOS6w9JN9VQjcyxuv2osg37EI3pCu085P8LDlrKJQsZtu4Ag8qv2BVFgUTwsgC%2BlPjzLi%2FDzY2k0b9E3qHUMYura5uzM2VAwSDrb2f6Z9NtMStNfPBtEnDAxN%2FROik5%2B7zgXxw1AWePfDRruWdWyuZnM4hDczpyT5updx0sqLkJts6x6MbNm0pqdkqKbX6QWaC5kwbXBIxq9Bxq4qHsTvK4e4QoSARLwdGKuqMu52scyeAm9ICCze8HPDjThYyDS3PT6kMbPU%2F15IMPJ5ihNC5D8vSnz%2F9Twnk8eI%2FdhDG3ciCn%2B8tCaFBlTAKMz2FjYKhRCQMGu3aYODCHhs7ABjqkAdORqTE98pUfKJTmN9iNco6PzRJ3qzv7%2FXAz1F5aKSJf9zeOHqGUqJb9vQ5MmqRST9LaVPsKmA%2B4HgaMbuasR0I548TdyXV1aK%2BdAMGWxrt0y1CV%2FFBG62hro2LvhD532fHFnbbT%2BLOgttnbasxuR7aLpWHxtyMLcWmo9z1Kjvg8%2Fz847uJnk5ynLZX493pNaHLEoLNIlFbPiuA0o%2FLF9SleSJCw&X-Amz-Signature=20f56b70debd5e8266c34d855765ed209f7df20325d8cf6ec701900b95f9df10&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VHG547O%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDZn%2BAkCNyWASXkUtSHyws6WN%2Bg4NMIftXSoT7M%2BqJSRgIhAL0TiUsQ43YCCqK9NuIjcl6olyCX3HHpdCoBY8v6bAixKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFyTkO8rhy%2B9Hy9Hsq3AMkf9yVIh1Acdk%2B5UHot5d6bZuFV%2Bz%2BVs9KyJ%2BLScYO%2FNZ%2BAlHMrUgif4UHMKagL0nB2Pd9XX3%2FCbb%2Fl8AVa8rDSBAq14%2FOit87mNTQ89LbCTXLizhRlYgqoEUSj3sfURN0CEooeaWMBjqsOFezAHzbPArZ9ONApPsUUO6U%2FLiM7al548kGeLtu1x4gUDQdjrGh9tglkNhVPldFjpsbtuwmIQIr4YBQUy9lUI7PU5AqsJBWJyv0NCFnwQ7AZjPYacMq2IPuGKmclxhVgXIpAXx%2BSMNQ4%2BJFOEwLwp9Q%2Ba9KZwueze60JEuHBskw%2FV9wjMAalvT6EjIjYeS8%2BQp0xgYfj6bNEtzOdUBeQVB8QTjzrKrf1OrlGSfOJsDFdedy0wwUQKqBCVdAW37X7hITAva1z7V5nNzhN3w6zGSfYIQjX5mCYmxvIREBDSeJpJ%2F0r8s8ZIDIDIdcvuGnHqehoSBHkLdOpwY6aqQAmSg2kUH%2BrmWteYKmAOZCtn1LtHJX5pOujqAVml%2Bp5%2BoJseSGGa3sbJRGAtodBuu%2BGwip74rjjk7PoEJwfq89hHwMsbGesrvSSfc1qtKObtGfI8lHDbrz2wcNKn14M9gJKaG1fUTIqkAb%2BtJ3pPEENpdvajC5hc7ABjqkAWMBhJK5BJlWnnd%2FZ54swVt3kz1iB2pJSpvC2Bvp%2BNeE7F4uT8ojwqK6t9akG51popIYX4NcQumtYcIF5LBKj75PzXWcQ2FdvZvB%2BokBMHhvXuSWu52dZRur0CQl9ja2Xy6q%2F5PO8IXALOGgkyroUyco8b3cTYB0F87jGi7yDKq58s2uJ4zP%2FwG%2Fa%2F8u%2B95VAx%2FBJgLXaxuAkwSE1VhDcGpAfDTK&X-Amz-Signature=cc49fa9a561ff3d9a391c65bab38b81c0f095cb3125b375724a3339eadf617d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJOPTLS2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIHLgGXcW94LNmDm8TC10r6MNlxnJ48D3akeBqPUaKLVfAiANs0kS1fxrzdrmhi%2FqlkNcSNWIHTyFwVi4FZWA0CBAdyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpcNRM8dWjsI%2BXMDNKtwDNEIgQ40tHybLd8mcPoPvy9SFP%2BwE%2BX9dwEJMd9%2F00zwUOOAdZa5OZoE%2BSYJqHanL8JQs8V0sHmxKXVdVXM%2Fgnp%2FJKi%2BJlnBm0PjnHII9x6pqsbX3X2K0NCdNyoinbceZYQ22vJcrk48ioLkIeeCxTV%2BO8ECGRYnakUI7Ie2H26Bt%2FdN16P8a29oAkspinUA5Ioc4OdfqxkTpH%2FSqhaB5ZxmRunzFk8GFfCKqQzO0iLV0SdXSJykE1BJJukHBfjIXHd20jEUqSWoz3c2wxIp%2BVdzfS6YG7yxYOP6UpOcQzcWk1Nfer3lwawLIBlZpi2bynTSj379fx%2F6Yajj%2BLTp8O62dtwpG5oa7ZMmMc6lmDBsEdAcWhuNrdyLhFS9F9SeJ5RkhGkUBOrvi1BJTMYFZby8FfJp2n1wxmxENdcFLwhtw3KwPTP0lDsLljhkkOrQO3AngV6SyVWDAAKY6gTBFLXDwsvruGSG%2FwXdD5A%2F%2Fx45EQlrSuA3vdoTas9eeKATzJsgD1vneMP8z47Y3WxCwQqQWwa9F7yHg94JVaNypzE1mju9nPJE2a0lnR6M7%2FHZX2GzTeaWk%2BjGV%2FFuGLOog%2FcXKy3MwpktuOaqu%2FZEnZH41EcgKipvQAJ9d52cwgYbOwAY6pgFTRYY%2Bf9gfP9oUlEXLWnXaQ7uOwpvUyT35oQrpKHX%2FV8Hn9osJEJP2ng%2Bq0WiAsas%2F5bcKy1lgFoTmV9B9l74ZYHoZQmKV%2BxG96ZDFI77gV9GoLDM4U9UuuGiuSEwGC0%2BQqs0o%2Feg2jhMqZfBha4xKDfzs5FbWtgTrS5XpLRmyzNyQfnGarXecB8WFZPLlFeOxSW9J4762w7SLva5%2BOu4pU7GcaW0X&X-Amz-Signature=3a0b20ab6fc365e06607404e920a97505062cb1357b91a526b782985ada7813d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIUWGUT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCpRuyYDJF5bi7zmDPH65U6PSKeiowRyLJLGVYuCZDozgIhAKq1A%2FbXSFsmHxe7ORFzJrcUMIKQVly3m8nm0%2FYFUY7TKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B8X%2Ba7%2FiDWv08Mqsq3APmZg2YKCghXChbK38%2BVLk4IBwQ19FnJYnbIMbTD2S39Ex0%2BkeVYYIdgfN12QdGLk7F88oEdR5QmStdI8iVu4CxAYWuASKULgIo8ZyQ1AfeNIj3RyItgSeaJ344n9XNfEpq7i3BovgFyrxU9zFLaov2JFXm2Z6K49l7By2zmtSEZrNvCQc1ggKtIty5xePyB6RGVccN9fdS6Axmw4eD%2BxU%2BIvkiSwggBsWqfZPgMk4OzpC7e2dM2nVj4hl4MYfpHZ2E9kYc8Wxv4lsg6QVj4IE5ITjZizPwF5zH1PqCx4fK2hzgAYOS6w9JN9VQjcyxuv2osg37EI3pCu085P8LDlrKJQsZtu4Ag8qv2BVFgUTwsgC%2BlPjzLi%2FDzY2k0b9E3qHUMYura5uzM2VAwSDrb2f6Z9NtMStNfPBtEnDAxN%2FROik5%2B7zgXxw1AWePfDRruWdWyuZnM4hDczpyT5updx0sqLkJts6x6MbNm0pqdkqKbX6QWaC5kwbXBIxq9Bxq4qHsTvK4e4QoSARLwdGKuqMu52scyeAm9ICCze8HPDjThYyDS3PT6kMbPU%2F15IMPJ5ihNC5D8vSnz%2F9Twnk8eI%2FdhDG3ciCn%2B8tCaFBlTAKMz2FjYKhRCQMGu3aYODCHhs7ABjqkAdORqTE98pUfKJTmN9iNco6PzRJ3qzv7%2FXAz1F5aKSJf9zeOHqGUqJb9vQ5MmqRST9LaVPsKmA%2B4HgaMbuasR0I548TdyXV1aK%2BdAMGWxrt0y1CV%2FFBG62hro2LvhD532fHFnbbT%2BLOgttnbasxuR7aLpWHxtyMLcWmo9z1Kjvg8%2Fz847uJnk5ynLZX493pNaHLEoLNIlFbPiuA0o%2FLF9SleSJCw&X-Amz-Signature=645b0ad849504013eeec350eea22fffe11317fea11d7d24133c063712e52fec7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
