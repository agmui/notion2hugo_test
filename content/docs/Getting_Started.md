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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=b93732024f5480aca93443b5d47082f30c81ecb3974230e304fbcbba794491c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=d28932ca22636e3d59441cf0ffa6a9cb15d31902415d96b715c1ce71bf36c1a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=cf534ec8060436878f1d17ee29d34d725bd3c007ed3513bdb2a0678b890cb6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDU6UPHB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGQ9J%2BYch9NYvwIHwYtKm%2B2ILusZvOJDuKECqEgiA0krAiEAyMEemUk8ghKZA%2F72pbp%2BqEzj3DTC7%2FL%2B2f7xX5Q%2FXm0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNPUrxfR9I7O3cImzyrcA7rtZFf4Jd3ytvIbe92ElJl5YBwCeaD01fvlbLu1pq9X6gMCKZcgus4GREtQZpzn4NX0F%2Frf6JKabMQpsm9zyNu8Z9lAmGvkC8q8Sp5mwOBNavk96xyMFi6e036470LwbgegyhzhTVjmTGe%2FVeI7ogkiD6lPud20Y9evymO7oA4AFJ5tTQcqSQsgMgp9AcPDv%2BMPkAeY3nYXRgmnHEz8ULXTEnW6NkfpYYxPSqrDzCQxTcG8kTmQaKrQpZ92XNxUYbIjVjEJuRyLV0xAHdqdncPuy0GZsylvclA9SJm80wIbgSyZH%2BMksFtKYL3lgmSuqX1T3dKXwh5JRzjQyeoKJiisH4fnOYAi4IGs5Rvs3TB3xrwx8Y8tWCGSiNo7JkYMUAOa5s%2BzjcJhYGgs6dXiEGQ13rKxCQ7vtCXfMM%2BrHMKT6tYxzasl3nFfJgy8gO7saFy6VYFwPff6bLe1qbDLWw7%2B6fzk7Czf8FYlr5LV9of983XxkUSZxt9vtZTeqW6lZjNE3nxYuW5TNMVWjs7qiRgJeJytQW4tL2G9VdI3mpGy4OVC2eqg3pnr3HXR77q6dvSp6puWSfm6c9dgI6yhlKr7BqgGnORiH7A%2BJFzM3E0zBgc9p19WHMUo8oXKMOSi%2BsQGOqUBL3VJUNHgnAr8Ai7unJQiTesvwpHuNbdJmU%2B5gpNaYlPFsttvUFqCNQTph75JnUpwmhje3JOBNfxIvhHNS9QwyeyOrotKwPqvxuJTQEP1qROpFHrZZxXl%2FuuhETxPns5gBwZuxpnsDTfgFLBOIlU3WN%2BXoXw%2F14cS47MRQJDmvDHo8Jl7UUB72%2BqO2yKhKG4lh6WNkcED%2BN6%2FH7VpqyaDiEyMsuYz&X-Amz-Signature=580ef6a7c5681fa5966f0495ba0be41dd03271a52bebf12d39122bccbd23f9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666X5BS3H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCFK3%2Fpxr65hbmEEWPx2Kfqfqdq4FGqBr8Wdar93QgLFAIhANsMZwPzHYljT9aNgJVPL553jjvtQeJY%2BhmtKPTR%2Bdm9Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxVGEBxN1Sfj59KO9cq3AOi48RBj3TWDhKy4Cfs6W%2FXlN1qMmN7m4gghgx6e8BTBxO4FjbaoQs4uEGurM7LshuO%2FbWnVSIXTzG5OwLmfWIw5udW8kIrz15toNrgNJrKbpsVacGoBNM4B5ZnTqpyIsYpeZ20SpdwSz%2BcAphxKz4e4GLGEpiA5B5BPJjvBC6t5WgyWl3UClkov6BsRQmaqIjtaw2dyqVfHDamzsYwXJlrEcNRRH8C4CGTy3ekX5dyukSP%2FdBb4KyhnvxNJm%2FFTgsZ43sWjGBMmJr17kWAl42i1Xwbr3AjDV61O1aCm7IE2QGsLZ1fOltVpI5d4%2Ft74e4bHLHeE5YrkLid%2FwqPjvB6uICfgdh2dpaSjffyMoTgiOH0d1uLmwldDzLeh5yk1tVogyVD5F3%2FfZkqZaVhTRlJLXv3bDpllCGon8J9oeLEuT0uOyLLTZY14uGtQ0KCkRpaXdxfJEdDdJycu1gA7W3178xahSX%2FCAONEWivOWftsi4OjlDxugtiEtldBIgYCAEqY4%2Bm0Delmsfasz7Rq%2FsuASongo5OBjJ%2FFGt3TDGsK1UxVf8CCHq6M6469QioChmOtoqoBzVQ%2FH40q4cwKgm%2FOogj5Hz5nvfeBCYPHsRuflkWokby0Wz08dF%2F9TDhovrEBjqkAb35S6K54NDrKV4TDVdhpJm%2BOtSVPXtGUGuDCVXRvO9ToPqQmeblCx0XfsAdz6YOm6xBJIBNRWz3wmVAPUsQuyspMp0WbTbELq1RCCwbTRh1SRpWSuF8fSnk9quWPpJXnoEVDxyFlRZyARRqyxl5hRiVRYwW%2F1YvhEw4q42JuFbQxV9qQqrrMvLEjJU83uruSSALgPwDxLw3ii9vmr%2BRdoxh1wdd&X-Amz-Signature=6ef3946ccecfb4e3f21565349d42facfc452a91f812ace02e00be5a1bc28221a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYPNPMM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGsij2mumUE%2BB0LVoYAWDibCZxBorD7jmBGa9Souh1%2FiAiAAu%2F7XUHlqvGtPL0DPQfhdAptjAcZicogUqn6HwJ43lir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4%2B%2FxA8zglZ1GC8mhKtwDzPBbd%2Fu9iTRiK6BkWPnaTd6TY1rgnWpPMLqO6gQFywqgz%2FrRq3u62NEnj%2ByNYwbOygLWFZGZPrC2XtsK238Iy8u%2BTRfnHfAqVsCHkzQRP0b74sw7B%2BKqhcOtIjUbJB02vmd82GKSjJEphvrfdYKXoMgMljdeCimK15VkFz5BcOhMzKqhjOXw1d8h7T9qJUSzlPqJMdYpfA3cxAnp47nIBvo%2Ffp3BVOFPJeEcIPLrSqs%2FIQi7TT0843bRdQW59Am4MLI6CrGuLQT1LF2e%2FZxjenjHF8may7eVs6B8DLfmQTQ%2BoBSiW7k4cxXZ9KspihNol5uU5nzLA0HANyUsjcRMiq2CWsF7Ve%2FCfLTe6n4ejAI2taxIeO9iC5hevs1FmRV%2FX7F5GVSI4oE2Ye42YVxdKlK7RlTm2NPbk6Giw7r1jir3sBiDTlnWHoYNl1lQWXtxdRjzieQsRTM13tZNj8zSjaicSvc9DitdSL1YfUT7VhNKcC7lMWvZAY8vnZho%2BXzY7CkCd26ZSaXxWb%2F9OdWGSAmtC2eb%2BH2uZcXHtcGOjLAVe7PznrN%2BX9ekWAFBkHNcsm2dQxG01AAhmeedKbKhhzzXW9Uf%2FvgFPcmils9JH6flhtIcA2549V9DOV8wq6P6xAY6pgHxSc7AQDyq2Yf48x5tLmVxuXl1M01bixH6QrvIs8BplUr53W6FOWke4p3Vin9XyuJtRrQtEhyfZzKTzcPikScpc2qbRA5XuvpQreq84r%2BVOKIbUib%2Fkdn0ZmU6%2FsJVGpYYy06ftc03w68pdesMlSiKq6SQG1fB1FCjnasVOp0MB2ls%2FCmeNdbbp9TP2FocsRDv7O9LFWrCvaNogHgnJbMGh%2BXv5VY9&X-Amz-Signature=32bce9efa39127becce07e995e0f654f7ae5d8ec23cc1e01c24ff128800e155d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
