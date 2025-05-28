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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JI25FVV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxhpXG9TbyqoOut67iSMAeJ0NSspS%2FDWh4SPZQ82FfsAiEAkl2ltAJp6PGIznAb0E9Zt8HvdVCsjQ7PvWgO8yNMlrMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLddUODVpHSyJD%2FjSSrcA5dA2vGovMcuKqFldXCtBOi8eWmpdwr6Ly%2Fmi%2FUuSrJWSAII%2Fvlh0bB7EcXtQZgh69k0a7xvGk3fGmSOnNQijIEg6UKQhYCE655NEXyFSKKCTSS%2BH1iIvplDPc3eLOL3K86WAYrmY8VUjrUwCLPA8aEdMIBEOinluLOmxyLC08qoIvFcqHxLTnsr3WG1c7dqE0TlKZHZ7ZEjSR01uXSC7h4l7ueYmWqz6OwVGTz6WCBFhzqbvZ0rz6bFnmVwgHsTC%2BIYGmVGGqAVyrerLAmmPMZIBcPZ%2FZqViTZ1A3DLXtYt4qP7K0%2FRK9EE7wcromuPqW26oKssX%2Bl%2FdGgFutVBqO7jdH85y6tWquHqyHB%2FpUzJ22xeX4UMzWFBW59TFuGPZiYpzE2OhIreMTKJhokBB3lancvz6DK7XF3EmL56qhCEyGcj4nGkMQyuxDcj8YgFl5XdlwQd9XiNnZCx2OG71csaEwKANToI%2BiRVyC42aSmQZ9RZP1IH68rZxTSaMQu5xitieeXKa5YwJ4Nky3B%2FIeHBumpO8HvgcYBYPZ%2BaoFD6k79JT0hDbYt%2FGhQsD5WrZpAfY2FsTDBV9vhpYdM7G8XU%2BS2KdY3%2BIN4kyam2t%2BSvO9gEimW9oPjKq40hMJ2Y2sEGOqUBlKqC4h8eVPMUCTcEcok%2B%2BklR8pBwarICNcYpojesQI7LNKruF0%2FoTrhCeHfYCq92qYlU%2BTJZevn8POO%2BJB9DPEd4qKQw4CE0SdeKZdeZNa3Bq%2FrFtBu2O8Ibsasfhs8U%2FsHyQhGRyZ7cYCgX0uYe5Db3Dd9sLSmt2n%2FSRPDdxAOktT9RR0CCLiY2lYOuz%2FmvNkq%2Bp1cubOgkF2gji9H9NP58lvFY&X-Amz-Signature=c5c446f6e6c17741348abc9afd2a87335465dfe7d452a66d220447dc7aa4a688&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JI25FVV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxhpXG9TbyqoOut67iSMAeJ0NSspS%2FDWh4SPZQ82FfsAiEAkl2ltAJp6PGIznAb0E9Zt8HvdVCsjQ7PvWgO8yNMlrMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLddUODVpHSyJD%2FjSSrcA5dA2vGovMcuKqFldXCtBOi8eWmpdwr6Ly%2Fmi%2FUuSrJWSAII%2Fvlh0bB7EcXtQZgh69k0a7xvGk3fGmSOnNQijIEg6UKQhYCE655NEXyFSKKCTSS%2BH1iIvplDPc3eLOL3K86WAYrmY8VUjrUwCLPA8aEdMIBEOinluLOmxyLC08qoIvFcqHxLTnsr3WG1c7dqE0TlKZHZ7ZEjSR01uXSC7h4l7ueYmWqz6OwVGTz6WCBFhzqbvZ0rz6bFnmVwgHsTC%2BIYGmVGGqAVyrerLAmmPMZIBcPZ%2FZqViTZ1A3DLXtYt4qP7K0%2FRK9EE7wcromuPqW26oKssX%2Bl%2FdGgFutVBqO7jdH85y6tWquHqyHB%2FpUzJ22xeX4UMzWFBW59TFuGPZiYpzE2OhIreMTKJhokBB3lancvz6DK7XF3EmL56qhCEyGcj4nGkMQyuxDcj8YgFl5XdlwQd9XiNnZCx2OG71csaEwKANToI%2BiRVyC42aSmQZ9RZP1IH68rZxTSaMQu5xitieeXKa5YwJ4Nky3B%2FIeHBumpO8HvgcYBYPZ%2BaoFD6k79JT0hDbYt%2FGhQsD5WrZpAfY2FsTDBV9vhpYdM7G8XU%2BS2KdY3%2BIN4kyam2t%2BSvO9gEimW9oPjKq40hMJ2Y2sEGOqUBlKqC4h8eVPMUCTcEcok%2B%2BklR8pBwarICNcYpojesQI7LNKruF0%2FoTrhCeHfYCq92qYlU%2BTJZevn8POO%2BJB9DPEd4qKQw4CE0SdeKZdeZNa3Bq%2FrFtBu2O8Ibsasfhs8U%2FsHyQhGRyZ7cYCgX0uYe5Db3Dd9sLSmt2n%2FSRPDdxAOktT9RR0CCLiY2lYOuz%2FmvNkq%2Bp1cubOgkF2gji9H9NP58lvFY&X-Amz-Signature=393428b3d0767d21ccce5a5f17a7fcd5fc6c3ed8bf11a728dd6a9fff8f78fb57&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JI25FVV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxhpXG9TbyqoOut67iSMAeJ0NSspS%2FDWh4SPZQ82FfsAiEAkl2ltAJp6PGIznAb0E9Zt8HvdVCsjQ7PvWgO8yNMlrMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLddUODVpHSyJD%2FjSSrcA5dA2vGovMcuKqFldXCtBOi8eWmpdwr6Ly%2Fmi%2FUuSrJWSAII%2Fvlh0bB7EcXtQZgh69k0a7xvGk3fGmSOnNQijIEg6UKQhYCE655NEXyFSKKCTSS%2BH1iIvplDPc3eLOL3K86WAYrmY8VUjrUwCLPA8aEdMIBEOinluLOmxyLC08qoIvFcqHxLTnsr3WG1c7dqE0TlKZHZ7ZEjSR01uXSC7h4l7ueYmWqz6OwVGTz6WCBFhzqbvZ0rz6bFnmVwgHsTC%2BIYGmVGGqAVyrerLAmmPMZIBcPZ%2FZqViTZ1A3DLXtYt4qP7K0%2FRK9EE7wcromuPqW26oKssX%2Bl%2FdGgFutVBqO7jdH85y6tWquHqyHB%2FpUzJ22xeX4UMzWFBW59TFuGPZiYpzE2OhIreMTKJhokBB3lancvz6DK7XF3EmL56qhCEyGcj4nGkMQyuxDcj8YgFl5XdlwQd9XiNnZCx2OG71csaEwKANToI%2BiRVyC42aSmQZ9RZP1IH68rZxTSaMQu5xitieeXKa5YwJ4Nky3B%2FIeHBumpO8HvgcYBYPZ%2BaoFD6k79JT0hDbYt%2FGhQsD5WrZpAfY2FsTDBV9vhpYdM7G8XU%2BS2KdY3%2BIN4kyam2t%2BSvO9gEimW9oPjKq40hMJ2Y2sEGOqUBlKqC4h8eVPMUCTcEcok%2B%2BklR8pBwarICNcYpojesQI7LNKruF0%2FoTrhCeHfYCq92qYlU%2BTJZevn8POO%2BJB9DPEd4qKQw4CE0SdeKZdeZNa3Bq%2FrFtBu2O8Ibsasfhs8U%2FsHyQhGRyZ7cYCgX0uYe5Db3Dd9sLSmt2n%2FSRPDdxAOktT9RR0CCLiY2lYOuz%2FmvNkq%2Bp1cubOgkF2gji9H9NP58lvFY&X-Amz-Signature=7fc027c571066fa91c8df6ad5db8d2ea1c9917bcf9cbe2928017d3d00f6dedb4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLEZABRY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpvgeadrHnJcW6k9ffi05MLAmJdyLDfvEOVhogW0DtYAIgSvhIzuJOwnxQybWzMJyunZr%2FM8X5OwBs6hgiJprpzv8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBcgKLwVeTQtgcbDJCrcAxkfDxFaSPpiFHnYY3aGnvqvEHOalJMjUZqm39KcI25uOLzuPuZghYsZ%2B89uJIALLtcLtZT%2Fyn6DEQyKKbmns4xyqgxt5bQ3fWmZWx5HlWm7SlS9IwMQSLCgsiKVTZim1mNpi9KKUZHgB9V1PfPy70Qf%2BOMre9yjQ5I%2BOyBRZd8yLuGBxFAo2LVVYG%2BcGlgY9K2uVakRDM6Kkapb%2BOGIUyBneDdvztLrZM1xVYf972kgPb6mp7EMQB4dZ96m6tL4YSlcLv8SJwWAdV7zEoaaDEXIgelk4e7ZyNV%2FL8CsHndVLxJAlD%2FuBW%2BH8ysCunZ%2Bo2F9q0LolsacFazyqeuwRIdTRxqpcp34wYW3bAeFi2MCkCJUNtlMof8Oh%2BO4k4nyq%2Fcc%2BQjYGNsd%2FCROtU%2BjiUT5A3aT1hVqwb8GaAXybIR9WMgRHBuZyRmqsaAE8x3%2FS7wP6of8F0XDVoT1c2p2cF0CeY0c54ZP7l0NYV%2FRFVJyX9sWIO8mr7x50y1aPq3OfBXdQid9M6i7q4ahMd9DaLBnXAuSJUNqBZ%2BEnK7KkPw0BLx%2BwjR3AR4RL88nHfSGDxj9Y1JrCXuIVo4yZxGNsfE13Tzpz1vYvBVKeeeJuRK4JJWuXWyHbLbz6RP%2FMNWX2sEGOqUBYeNho3XWF3OfeCdVmXb4SyE%2B0lxc3%2FAFHHQKCNN3Wzjwnjau8pFG6qU0nUAXuGEKjA%2B0sJy%2BkN5aLs3672h08HrlmWOjqKJtHRo%2Fn1oA5PdA2mAl5QBM%2F74pFEAnqVZke%2FFRZGxUD%2FjfW36RMIQ%2BCIDNyuqXM2olyh4yggDLO9iygFfZpQwvd1MVjkD4MKcx8mYphGZcxIqU9zuYSnkjKLP30VMY&X-Amz-Signature=ebf6eade7f6e8fc0f0cdf8fca5195e78af97e9f18c5a38f8c7117d4852cb827e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXNQCI7%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxPso7wMcswxeO6V39fYjvPsi1jnRjxjwtaVHe1t7vgQIhAOC6icxVoQfqzFolHWWkhOC%2BeT1%2BHP2u%2FGc1SjZodxVuKv8DCG0QABoMNjM3NDIzMTgzODA1IgyVfOjN%2FnFiSQ%2Bp0fAq3AN8HGL7e2SV8UU%2BzO72vqtoK1fZOMdfSmnoLPg4hFn%2FkruzAtajET3WBKuvurRbvQKtWU%2BInk7fEZ2wK%2BkwpLvPf1QzP8IW8XQ9D0S7EwM8FcD5cxxH1hIvLRWcX0ZYy66xJwi0vBxdi8mNHIubifvud%2ByWMBKLWSQ4yaxFtMC3Q3a7k0HsB0rCaJEGdB6PM39tnRGuZRQVSHh8CefvM0Dfo3pmLEESdy3P26sM%2BwO0K6cz9YAbACFRF7q74IgNLgfyw4y%2B31X%2B9ka2g2ZLy46sztowQS7gk34wI6bBEtv0Vf%2F2JI2MAJuit%2FZjoZvkz7302U2Fffqwl%2BdEjDHmWqaUJfv2j5%2FJQ9LgC9kSrTUmO0j87l51JKdypMCABaP%2BohJGKsuNVlTJL1ps9oesTmkIQ4tE4J9HDQbUCCMDf1Hqqx950GrmuP%2BY2fznvZxkSYD5Oi2MVBMY5xlezmlaVnYyOUDDym5bysEPXPlbxszHx%2FhcyO%2Bjfu4y7rZnKlQ9n2zK085z3ML%2FTUC5CdeJbBZa3%2FVdIB6IJ020KHuWx029Fej6XBeo%2FDlVkP2bIfXZHG8l%2BZYw2XcydDiaT5lcYRuaJkESCBDQCOqShhdKxnHktajZENQJttZWYpK1EzDSl9rBBjqkAYkSxEoH%2FAami3FpDOR9UFkDWCNytra8u%2BqfXmhUQjO4Fne0o9lohDPnVVuiJ7wCtAkswZIOhrKh1W7KaepBB2WaNoyMqfaKxu3VTvi8gp%2FI3b4UwBJcuZZDnd%2FtrpGnOlMQQxoC5nWpkE9wuYL9O6xPt2sN8HN9ZbSfBhIVERBTOYx%2BwJO4EfsPx0poxQACNkBniIXqq%2Bnu6FFRgYSsdm3tSXmq&X-Amz-Signature=1690a6855600f265e257e4904cf019c7c3890a9737ab3034dd620482eab848fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JI25FVV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxhpXG9TbyqoOut67iSMAeJ0NSspS%2FDWh4SPZQ82FfsAiEAkl2ltAJp6PGIznAb0E9Zt8HvdVCsjQ7PvWgO8yNMlrMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLddUODVpHSyJD%2FjSSrcA5dA2vGovMcuKqFldXCtBOi8eWmpdwr6Ly%2Fmi%2FUuSrJWSAII%2Fvlh0bB7EcXtQZgh69k0a7xvGk3fGmSOnNQijIEg6UKQhYCE655NEXyFSKKCTSS%2BH1iIvplDPc3eLOL3K86WAYrmY8VUjrUwCLPA8aEdMIBEOinluLOmxyLC08qoIvFcqHxLTnsr3WG1c7dqE0TlKZHZ7ZEjSR01uXSC7h4l7ueYmWqz6OwVGTz6WCBFhzqbvZ0rz6bFnmVwgHsTC%2BIYGmVGGqAVyrerLAmmPMZIBcPZ%2FZqViTZ1A3DLXtYt4qP7K0%2FRK9EE7wcromuPqW26oKssX%2Bl%2FdGgFutVBqO7jdH85y6tWquHqyHB%2FpUzJ22xeX4UMzWFBW59TFuGPZiYpzE2OhIreMTKJhokBB3lancvz6DK7XF3EmL56qhCEyGcj4nGkMQyuxDcj8YgFl5XdlwQd9XiNnZCx2OG71csaEwKANToI%2BiRVyC42aSmQZ9RZP1IH68rZxTSaMQu5xitieeXKa5YwJ4Nky3B%2FIeHBumpO8HvgcYBYPZ%2BaoFD6k79JT0hDbYt%2FGhQsD5WrZpAfY2FsTDBV9vhpYdM7G8XU%2BS2KdY3%2BIN4kyam2t%2BSvO9gEimW9oPjKq40hMJ2Y2sEGOqUBlKqC4h8eVPMUCTcEcok%2B%2BklR8pBwarICNcYpojesQI7LNKruF0%2FoTrhCeHfYCq92qYlU%2BTJZevn8POO%2BJB9DPEd4qKQw4CE0SdeKZdeZNa3Bq%2FrFtBu2O8Ibsasfhs8U%2FsHyQhGRyZ7cYCgX0uYe5Db3Dd9sLSmt2n%2FSRPDdxAOktT9RR0CCLiY2lYOuz%2FmvNkq%2Bp1cubOgkF2gji9H9NP58lvFY&X-Amz-Signature=11f1a34ac4d866cd1d70ea73bc4d0e3a58889f383e591a1829b85c44f4753e13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
