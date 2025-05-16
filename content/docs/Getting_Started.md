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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVLWLLI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDMDXUaxMkTw%2BDYpirpPkwzDFtiiPzh8qRIfxhFwitWAiAKMVfFsXsjbLSnk8PCfFo0dVR7RuSs%2FK1blMzv2unycSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMwwr77%2FGO%2F%2FTECR5MKtwDcu1KojpPwmehTJIpA1HFF7NK1J%2B7n49ZSgxnlKIOgGSp3w%2BWaMRuNo8NhapK%2FQohZf4%2FlxBQ3J0%2BnORy5pxPAbgA1GLLYLbIOTmGJYoLAV%2FUPxTMXqEmu7NUaJOcPiydoeI1nuFpkB%2BrvPFc9DXi6RVWgzfjPft3JTCnDWtbfRCNATSkNGQAzkPMsS%2B9KGne0%2B65SDWW7L6sV4blnoiTtGJfjyNJ%2B0kVwJ3RCZd7dWl4QSaLAKya7mx0wBspgUBSKWhysuPq4rH23xQl02jw947nz5r8nd8qdsmQG4Mvgc%2FYT72PXsln5DW2TfIXFwS43PdomHKflXbmP1NQ0m7vITJHYGKgi6UIoP7yFEwcx10cPI50G9d5HJLWR9o2JdcQ1hlxcqoMCbSheRIN58R8FZgulURYTr1cXLAFx9fvBTm3CEV07nO6NEVxBD3HLk3v1Gl9RdK9cjnU5y1eaGtvBZntfiN0tGbANgqHLHo2ZDEr%2Fy602c1tkO4G1EMipRQ%2FcEyWJSZFJrDYm6ptqS3ULJBTxy%2BEkyKmOyNwwBJIfrzFolX84efHdg9BXCCLb7TNYK%2Bv0tE%2FKxBP9yAM5JM66Gh4Q9S3RV182q47e%2BlWldsUzoP7hYWvOsw6dZgwv8KcwQY6pgEtMKlkMBmiP0ndV7r7dSJj7Qc8eu2P36xlKEcSSrjJUcv0CkQyutqhcNkkJQF5Tkjy9bxngzXrhTvexcUT%2ByJsLYQ2E613GM5TpZ%2FaLqlopgqGj%2F9Ybas4xqnJlGB%2FrNZiJkry8wWVGf%2BXxxX2GihQzjbGxBrP%2FZeXZj35VTncyXY5QV2iBySWdyZrBZo1dHt%2BlLl3sMpbhIwTwjhKP5LIMZWJje62&X-Amz-Signature=7a16fc4399ad98cd309cfdbb81f5f1682993a7a5dbc5449f556b2b692a2cd5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVLWLLI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDMDXUaxMkTw%2BDYpirpPkwzDFtiiPzh8qRIfxhFwitWAiAKMVfFsXsjbLSnk8PCfFo0dVR7RuSs%2FK1blMzv2unycSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMwwr77%2FGO%2F%2FTECR5MKtwDcu1KojpPwmehTJIpA1HFF7NK1J%2B7n49ZSgxnlKIOgGSp3w%2BWaMRuNo8NhapK%2FQohZf4%2FlxBQ3J0%2BnORy5pxPAbgA1GLLYLbIOTmGJYoLAV%2FUPxTMXqEmu7NUaJOcPiydoeI1nuFpkB%2BrvPFc9DXi6RVWgzfjPft3JTCnDWtbfRCNATSkNGQAzkPMsS%2B9KGne0%2B65SDWW7L6sV4blnoiTtGJfjyNJ%2B0kVwJ3RCZd7dWl4QSaLAKya7mx0wBspgUBSKWhysuPq4rH23xQl02jw947nz5r8nd8qdsmQG4Mvgc%2FYT72PXsln5DW2TfIXFwS43PdomHKflXbmP1NQ0m7vITJHYGKgi6UIoP7yFEwcx10cPI50G9d5HJLWR9o2JdcQ1hlxcqoMCbSheRIN58R8FZgulURYTr1cXLAFx9fvBTm3CEV07nO6NEVxBD3HLk3v1Gl9RdK9cjnU5y1eaGtvBZntfiN0tGbANgqHLHo2ZDEr%2Fy602c1tkO4G1EMipRQ%2FcEyWJSZFJrDYm6ptqS3ULJBTxy%2BEkyKmOyNwwBJIfrzFolX84efHdg9BXCCLb7TNYK%2Bv0tE%2FKxBP9yAM5JM66Gh4Q9S3RV182q47e%2BlWldsUzoP7hYWvOsw6dZgwv8KcwQY6pgEtMKlkMBmiP0ndV7r7dSJj7Qc8eu2P36xlKEcSSrjJUcv0CkQyutqhcNkkJQF5Tkjy9bxngzXrhTvexcUT%2ByJsLYQ2E613GM5TpZ%2FaLqlopgqGj%2F9Ybas4xqnJlGB%2FrNZiJkry8wWVGf%2BXxxX2GihQzjbGxBrP%2FZeXZj35VTncyXY5QV2iBySWdyZrBZo1dHt%2BlLl3sMpbhIwTwjhKP5LIMZWJje62&X-Amz-Signature=1e8513b3e92b3a488a599c7bf2a2786ff273b94c4236c5effe268e65f1a1da8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVLWLLI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDMDXUaxMkTw%2BDYpirpPkwzDFtiiPzh8qRIfxhFwitWAiAKMVfFsXsjbLSnk8PCfFo0dVR7RuSs%2FK1blMzv2unycSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMwwr77%2FGO%2F%2FTECR5MKtwDcu1KojpPwmehTJIpA1HFF7NK1J%2B7n49ZSgxnlKIOgGSp3w%2BWaMRuNo8NhapK%2FQohZf4%2FlxBQ3J0%2BnORy5pxPAbgA1GLLYLbIOTmGJYoLAV%2FUPxTMXqEmu7NUaJOcPiydoeI1nuFpkB%2BrvPFc9DXi6RVWgzfjPft3JTCnDWtbfRCNATSkNGQAzkPMsS%2B9KGne0%2B65SDWW7L6sV4blnoiTtGJfjyNJ%2B0kVwJ3RCZd7dWl4QSaLAKya7mx0wBspgUBSKWhysuPq4rH23xQl02jw947nz5r8nd8qdsmQG4Mvgc%2FYT72PXsln5DW2TfIXFwS43PdomHKflXbmP1NQ0m7vITJHYGKgi6UIoP7yFEwcx10cPI50G9d5HJLWR9o2JdcQ1hlxcqoMCbSheRIN58R8FZgulURYTr1cXLAFx9fvBTm3CEV07nO6NEVxBD3HLk3v1Gl9RdK9cjnU5y1eaGtvBZntfiN0tGbANgqHLHo2ZDEr%2Fy602c1tkO4G1EMipRQ%2FcEyWJSZFJrDYm6ptqS3ULJBTxy%2BEkyKmOyNwwBJIfrzFolX84efHdg9BXCCLb7TNYK%2Bv0tE%2FKxBP9yAM5JM66Gh4Q9S3RV182q47e%2BlWldsUzoP7hYWvOsw6dZgwv8KcwQY6pgEtMKlkMBmiP0ndV7r7dSJj7Qc8eu2P36xlKEcSSrjJUcv0CkQyutqhcNkkJQF5Tkjy9bxngzXrhTvexcUT%2ByJsLYQ2E613GM5TpZ%2FaLqlopgqGj%2F9Ybas4xqnJlGB%2FrNZiJkry8wWVGf%2BXxxX2GihQzjbGxBrP%2FZeXZj35VTncyXY5QV2iBySWdyZrBZo1dHt%2BlLl3sMpbhIwTwjhKP5LIMZWJje62&X-Amz-Signature=6cb7d7b696ed79e89d0b8fbe3fed6b4f5734dd88278e17fba811b72eea941024&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HSRTQM4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5SEMQ%2B1Cw2KO9v7RuEizsFJK0jixOiDg%2BeLZ%2F0tySWAiAfJ%2BNyQ5PfUATSLRdjTU08BF7RKEW7mN5BwyGzWtoXfyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMTo%2Fl2EgYKV3a7H%2BrKtwDzj7I24RggeDt4u0Q46WjVOn2NztRWqGo7KDhy09nep5SvKpHR%2FEVmQmNF7dFLYJxpPpGLAtUUZv76uGoLv860gv6PJHZt3rInbiibuXibVmdbVul1ndxhH2juaSb4uOKqVJ0exjty9ZcwaYvU2cD1Vs5U60KXrouU4YznQR9a3ANb7Q6iD6qTfjfBNUXYiP5kA8RNk6PVc0v%2BBYD56v%2F5hEmwfhjlSp9sVOFmXYwKcEQsR907uLf0COaCbT11jKOpPMNXrDcR07A%2Fdcbn9hmFON26MHDtJlYpIosTHERj4nUpcDQJBhZIBE0FywHuXAMOVSsD603DN%2Fn6QUZvW6e26k2KWg4%2F920i%2BNph24XiL1IZcRC9fBh8sYKPVqa2kCsLuzT3zKOuNkSk%2FIioDUvBGIVuhTV%2FYjZ%2BgaBqSVcRjNjZjMVhd3FFGHNkgeWIo%2ByGCZJ%2FAJZJ1r3kxZx6qIugQJiQ5E47CKxidtvUNOXzeBJxutnRfMwR3SkIPcZ8%2BY1Q7nsntmYDS1R5uiYuFKgh7jL8DW8UDCydgC8JddVdHoZPG6Y3JyBPun0JO8K%2FWr357ExjlC1wn%2FwKfLd8N1jyzcDY%2Bb7atwUt5ApMLH6DvYAKkAZKWkMZBRwPfEwnMOcwQY6pgGwlHP%2FvgKBCyLJ8QmAwx%2FFXr1EEWroS0qyzMjTDExJ1R%2BKykrfBbKrVE7EAVMScueoC0%2B%2FtNNh4irvVqVmNd%2BzU5ijEQEdkBJlMO%2BtKcLawu1%2BXi0rVD6o4Gjujr0mVFovMq3GjpAxutu9v7FwIeAVaar1kqZpp%2F9NjznRQAC7mF%2BZvufriJnIEFPrK06wcrJooa4Ua3yLeP0rDrLQTwggXzcKiM%2FR&X-Amz-Signature=ccc50757093e3d7397750a0414d376831a7f96e2ca2cde210010db31adc58dea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6EFUKV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAySLT7FSAoF7LhuX7r%2Fi4gRNKeDJ93hUUfBVE%2F5DgxeAiBx0FXAWb95eXGghIF55UXrip5NApiHFczSx8htwGrJVir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM%2FCcLEpwLpbkmNm8BKtwDuQc%2F55ylQfm0CrK1ZqAXqy%2FpnCLg1qpCjXkuKf%2FIoM4gRAcrh%2BYorsTxfy5fvkj%2BVqv69%2FBJdCoBY22Djb4q017jqbwXX8z4WcPMKGb89omxIUmJCsiqyxFXVuU8ykhFxBWfCATu5Dwc9yZhQ2BDqUbQp53cok0sIDSkg9zYJPj5HS7aAuJBr0xhzy0bPjsEldQ0dT3cN5axTVwrcJ%2B8O%2FOA01e7zZCnu3z0kg6piVC3VXc3fvaupL89rz055qeUuZFGr%2BZwbR7wYDDnZrvMEmlaXZVGzlOB3Oy9ll6KOTIndYYoPEp4TsmqxFcoQCHiQVOjRgNfO951P9dWlId1Tv%2BPlXr1JVro3tc4cMqphDpsFAfJMQPAhENk3iCrEIkSEo%2Bk1NZAvYIcXYA%2FanW9%2BNJzmIzM3XKdlYFY%2BSiNlW2XrmCmzG0qBKIyPFYC8%2BkxKABijY%2FjGeBKZMqH6FI8nqtyrQnWlFEbdp%2BBZQTBWdyE0f0jxn5YK4VZVFa1jaaSxNq%2Fkwo48a5ybilH55CCh7Gh91UJ9LmYUSdfmXtZllSzeMe33rfLyBYIonmEOqT5dTWcHGh5IFR%2B10HbOHR3VgD1QRGMezHANEW6N7gx4BcoWLFWvGLOIZFKzQkwvcKcwQY6pgFDGH6XqxaKBKfexVwtJPiZpbhGGFAwsZIjISN8IzZn514vPoxQhjXP4f8cWf53gnEYANgi7DTUaLwmTky2pW6aWZMevbSf5oN06NZkA2JAu%2BVPCk5ga0VKrrooWUNA3BzWLKtteMFRlgnzHrp9050VVOtzqtEvKlxNhkAHR8dmT5J1C9DgO1k%2B8k4qPsdsODTtlbmbo3%2BmjRULGYzHC7bLxfXdZBGV&X-Amz-Signature=3782091daee18cb36f0f7efacd912524c1cbe368809da7d214ddc3c298b449d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVLWLLI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDMDXUaxMkTw%2BDYpirpPkwzDFtiiPzh8qRIfxhFwitWAiAKMVfFsXsjbLSnk8PCfFo0dVR7RuSs%2FK1blMzv2unycSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMwwr77%2FGO%2F%2FTECR5MKtwDcu1KojpPwmehTJIpA1HFF7NK1J%2B7n49ZSgxnlKIOgGSp3w%2BWaMRuNo8NhapK%2FQohZf4%2FlxBQ3J0%2BnORy5pxPAbgA1GLLYLbIOTmGJYoLAV%2FUPxTMXqEmu7NUaJOcPiydoeI1nuFpkB%2BrvPFc9DXi6RVWgzfjPft3JTCnDWtbfRCNATSkNGQAzkPMsS%2B9KGne0%2B65SDWW7L6sV4blnoiTtGJfjyNJ%2B0kVwJ3RCZd7dWl4QSaLAKya7mx0wBspgUBSKWhysuPq4rH23xQl02jw947nz5r8nd8qdsmQG4Mvgc%2FYT72PXsln5DW2TfIXFwS43PdomHKflXbmP1NQ0m7vITJHYGKgi6UIoP7yFEwcx10cPI50G9d5HJLWR9o2JdcQ1hlxcqoMCbSheRIN58R8FZgulURYTr1cXLAFx9fvBTm3CEV07nO6NEVxBD3HLk3v1Gl9RdK9cjnU5y1eaGtvBZntfiN0tGbANgqHLHo2ZDEr%2Fy602c1tkO4G1EMipRQ%2FcEyWJSZFJrDYm6ptqS3ULJBTxy%2BEkyKmOyNwwBJIfrzFolX84efHdg9BXCCLb7TNYK%2Bv0tE%2FKxBP9yAM5JM66Gh4Q9S3RV182q47e%2BlWldsUzoP7hYWvOsw6dZgwv8KcwQY6pgEtMKlkMBmiP0ndV7r7dSJj7Qc8eu2P36xlKEcSSrjJUcv0CkQyutqhcNkkJQF5Tkjy9bxngzXrhTvexcUT%2ByJsLYQ2E613GM5TpZ%2FaLqlopgqGj%2F9Ybas4xqnJlGB%2FrNZiJkry8wWVGf%2BXxxX2GihQzjbGxBrP%2FZeXZj35VTncyXY5QV2iBySWdyZrBZo1dHt%2BlLl3sMpbhIwTwjhKP5LIMZWJje62&X-Amz-Signature=8baa763547a9fc8ac930656acf35fa78cb4f01fb9b5489929f92fdf1ff8cd53e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
