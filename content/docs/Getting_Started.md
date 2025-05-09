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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2HWWACN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkT8R48i6FxwL9yI2Ikx4cb8zgKwVdonkJ8RbwQcAaPwIhAIorCECWXUXZUxcinsl3IJZ4iVfiGnj4cfxdTkhcGYYaKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVXH1eItFprlCpb4q3AOIjH9QLwMOd4A3uu8JX4DXz1AvaLPGTmQV%2FU08yTeHxEZIH2bNKvxZn8FzY9YBbxj1R2aR59aoReoVQoxnJTKGMd9xHFILTbknIYea8mtC9TVAmjBw8A8HxMwM%2FAC1rAytWi15FAwtG83rhJzsB0R9Mzb2OmXOpTcKcVRJ76PCbktnVVoEu%2FxZoLhUUOKIU9%2FTPJVH3lR2DW5OFOapd5w%2Ft%2BmW%2Bx06o7dw%2BlxA%2BIimKY3bptaDUaWNz47HZdIPhd%2FC5O0X7N88N96rmgD7VMLrRR4xafVFKiIkqioE7ZUFe9w4pCksw6eTtLJVEbUwWEJYMexSzGp1pF8x0G5UIY1jOF8fb8Yq3xgVYj3KgEDoFIHUe2aR29Cqj2odSIxWFZ0arInbXo6APzT4jMS1%2Bqt3KfkyjNPStEQR32fJr6ew7YW%2BPbLIGJI%2BUarYGPr5XpR2CjWUXbaCJtZjY0UVE1vYX9l1uNFOpz5eRQtPUcj%2BpTe85faf%2FO4x5Vx4qb1HjupLOxi9OrLWGZbQbY3OddGfnHMcHXKhR47tioigb9BaaOqXfkSd4%2BvxhbfNEhGqvD6fYRRSzFiaoRkslEHSO3MAzI5IF1LW2pZ3djByB34%2B6Ko59wf0PtkL95aUHzCfx%2FbABjqkAaAganQMt8bycgJhgmbsWXvg4CQhgU%2FI0SwQ5M6hHt19UJueEfX2e8ZtOBPaXY4AO%2BCQ5GKH0kR6PAYjeQKhAZilUE6D%2BCl4YvsdMFSyYhCuTp%2B46Tt9iptZPX4Q281o51ODfeD2DMJ3Mzs6SshpdgxC8664ler%2BALALScxP3JNfJByaYKME437qQ2e3Wd2nurRINpAoNvBW1YCIxbpBmwV1D1vc&X-Amz-Signature=bf224a44178522d8ccb263ee9483f3f0f584beb33961f62936a97ad0d0687142&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2HWWACN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkT8R48i6FxwL9yI2Ikx4cb8zgKwVdonkJ8RbwQcAaPwIhAIorCECWXUXZUxcinsl3IJZ4iVfiGnj4cfxdTkhcGYYaKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVXH1eItFprlCpb4q3AOIjH9QLwMOd4A3uu8JX4DXz1AvaLPGTmQV%2FU08yTeHxEZIH2bNKvxZn8FzY9YBbxj1R2aR59aoReoVQoxnJTKGMd9xHFILTbknIYea8mtC9TVAmjBw8A8HxMwM%2FAC1rAytWi15FAwtG83rhJzsB0R9Mzb2OmXOpTcKcVRJ76PCbktnVVoEu%2FxZoLhUUOKIU9%2FTPJVH3lR2DW5OFOapd5w%2Ft%2BmW%2Bx06o7dw%2BlxA%2BIimKY3bptaDUaWNz47HZdIPhd%2FC5O0X7N88N96rmgD7VMLrRR4xafVFKiIkqioE7ZUFe9w4pCksw6eTtLJVEbUwWEJYMexSzGp1pF8x0G5UIY1jOF8fb8Yq3xgVYj3KgEDoFIHUe2aR29Cqj2odSIxWFZ0arInbXo6APzT4jMS1%2Bqt3KfkyjNPStEQR32fJr6ew7YW%2BPbLIGJI%2BUarYGPr5XpR2CjWUXbaCJtZjY0UVE1vYX9l1uNFOpz5eRQtPUcj%2BpTe85faf%2FO4x5Vx4qb1HjupLOxi9OrLWGZbQbY3OddGfnHMcHXKhR47tioigb9BaaOqXfkSd4%2BvxhbfNEhGqvD6fYRRSzFiaoRkslEHSO3MAzI5IF1LW2pZ3djByB34%2B6Ko59wf0PtkL95aUHzCfx%2FbABjqkAaAganQMt8bycgJhgmbsWXvg4CQhgU%2FI0SwQ5M6hHt19UJueEfX2e8ZtOBPaXY4AO%2BCQ5GKH0kR6PAYjeQKhAZilUE6D%2BCl4YvsdMFSyYhCuTp%2B46Tt9iptZPX4Q281o51ODfeD2DMJ3Mzs6SshpdgxC8664ler%2BALALScxP3JNfJByaYKME437qQ2e3Wd2nurRINpAoNvBW1YCIxbpBmwV1D1vc&X-Amz-Signature=0299f50a6f51c572ed74701679269ea2653fedb41823cbb39a826265b5af7fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2HWWACN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkT8R48i6FxwL9yI2Ikx4cb8zgKwVdonkJ8RbwQcAaPwIhAIorCECWXUXZUxcinsl3IJZ4iVfiGnj4cfxdTkhcGYYaKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVXH1eItFprlCpb4q3AOIjH9QLwMOd4A3uu8JX4DXz1AvaLPGTmQV%2FU08yTeHxEZIH2bNKvxZn8FzY9YBbxj1R2aR59aoReoVQoxnJTKGMd9xHFILTbknIYea8mtC9TVAmjBw8A8HxMwM%2FAC1rAytWi15FAwtG83rhJzsB0R9Mzb2OmXOpTcKcVRJ76PCbktnVVoEu%2FxZoLhUUOKIU9%2FTPJVH3lR2DW5OFOapd5w%2Ft%2BmW%2Bx06o7dw%2BlxA%2BIimKY3bptaDUaWNz47HZdIPhd%2FC5O0X7N88N96rmgD7VMLrRR4xafVFKiIkqioE7ZUFe9w4pCksw6eTtLJVEbUwWEJYMexSzGp1pF8x0G5UIY1jOF8fb8Yq3xgVYj3KgEDoFIHUe2aR29Cqj2odSIxWFZ0arInbXo6APzT4jMS1%2Bqt3KfkyjNPStEQR32fJr6ew7YW%2BPbLIGJI%2BUarYGPr5XpR2CjWUXbaCJtZjY0UVE1vYX9l1uNFOpz5eRQtPUcj%2BpTe85faf%2FO4x5Vx4qb1HjupLOxi9OrLWGZbQbY3OddGfnHMcHXKhR47tioigb9BaaOqXfkSd4%2BvxhbfNEhGqvD6fYRRSzFiaoRkslEHSO3MAzI5IF1LW2pZ3djByB34%2B6Ko59wf0PtkL95aUHzCfx%2FbABjqkAaAganQMt8bycgJhgmbsWXvg4CQhgU%2FI0SwQ5M6hHt19UJueEfX2e8ZtOBPaXY4AO%2BCQ5GKH0kR6PAYjeQKhAZilUE6D%2BCl4YvsdMFSyYhCuTp%2B46Tt9iptZPX4Q281o51ODfeD2DMJ3Mzs6SshpdgxC8664ler%2BALALScxP3JNfJByaYKME437qQ2e3Wd2nurRINpAoNvBW1YCIxbpBmwV1D1vc&X-Amz-Signature=e3148de2cdd8a0b224e67881955cd5c2c1837c8c0c69a34a4e0c482c4f9eeeb5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGDHU2N%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNALZLp9LvLFYZt8NucwhK7cDBjLM%2F549p921hpiRq%2FAIgcbcMFtbk%2FePKbRgKlukbRvXeKd1u1IgAfy7p0aqt7qQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9PN58ROnPTjO%2BoHyrcA1cUmEvLP4DueZS1f9omeNBSkONiKQy0QBe1KN57WkOUkL4Kx6hv2I6q47kxM0LDAa%2B8798abr3wqpv8adtt2Ol2rfmHO%2BriytdTFmkeroQx4stCe2rZqRbUozpvnBvh40zt7zWvBmRpjDDS3FXcNGM7tdeMcn2fhakU7dWghEA0aDW4uTqDIlK6G0n7hPa3tpr%2BU4WaUEZIeu5ikLKGbtnuXzU6R18jgRAhYnHo9g0qUt60M9EraNLVp%2B6js0Pmi3c7kzVY0PQJgbSEi9I%2FdU%2FZVu%2BMOfTZdr3qvnKy%2Bb9PmoQ8FUwtMD5QpUxN%2BFlx9jj0oQeLr%2BaG4Xt%2FtuW8Hg8mb4KJCGRdHKSmLphOW7TN3dpl7VPdKvhM3%2FlfFdyguL3P3qEyYW%2FvNjZftCC7390a2ZUC%2BhaLc7p82ib%2FuJ45TInVdyGHmeNFB1Apramtt9668%2F7hjvhHEcmqEy0WTEsgOZn1NIimKiPuDdyP4meOKOrzMX%2FBPLdii%2FkUUjVDjYRpC%2BTOxhrXANmZZKwxOAfK1quPu%2Fk1L%2BQYM1PZRrLtJ6sll0eNDSrP4bYkAALxF6jnGR2chvNp7TtFeHMhw%2B5iUOFzPZ4pXorXkK1WaGh%2BQ8QkRehdrk7kM1wtMKDI9sAGOqUBQDVOmeOR9RpPx9q0JCAmP1ZBmOuMn6QxOU1Dw22MQOmJW%2FOQuVGWVMSs%2BEN4okqJgSVw3WoHBvPyPSrj3fQbhO8KuIVrTcsLNO6K4KGylwDELzqWFqbtZNGoMYFkt4xTxM%2FDM%2BXgaChmFJMYvHbxsR1CRfcAhcqsyAM0%2BPv8OL8ZaN1uvv8bB%2Bg61LlWCQib%2Bzqb8CWtGI5GGLOehF%2FQY04TmFK3&X-Amz-Signature=172a59b1edbc7b718ad63accfefc4759199dda42ec543441f6dfbddd2a9e0dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AI3UG47%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHgQcKT85K0zErO%2BFLernvfb93aKp0MH3O%2FqkHV%2F6IDAiBdefaohyy4utqsXn%2F2nX9QOUJaq1LiMOFthIXrKa6R%2FSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePB7BFHlTJIlSlcwKtwD8CNY%2BhbeZ3ZiKVgp0L2%2FtLlDlE5De5g4zSgrdpljPRw381mQn2p3q6h1gMAtR7NR5vN0oZ7PIY%2FpkIlB0%2BeG8wlV%2FYIHU4My%2B0sTaWogIavIHjO9QmSTXPwyplsaLVMCirwXphlcfeZaBJq141wyOEUwbbZ1SwYK2u882m%2F1AZe8WI6bDQ9fXXD8XjIfF60p3foWgHfuPKMzHuCiqDz9qc79CMZYfIjRIfxtXohgnspf9nfW6LA%2Fbd74EaYd3uGGGs5JKhuH3QoYsTeOryw1KIBA8GmYF%2BkL2xh3wgSImqDSNWjBT%2BlnnUM0DnVbosnbJtgZBzF5%2F4ID1HaEceg9UCmrJmy1pnPbFsZMtnUrDxGjsZgqH2a72JhKsDpOK2zI6tiOFh%2BahBBiuJbOWQzMBVkX3T%2FyQqFPGbvkbXHEsej5nKurNkKDUc7OOEDyVyzawPuw2r39Plg3jxw8Ph9RCTt25s9hjQOEJ0%2BXFsNg%2F2XugRVN22OCzfwTEoC6yPInQt4l3hbal%2BLYM716SlTK0eMbPTAKp7IkOid0KvRL3PSoezjBuBJugqxZlm41GAXG59UVirjOAmc4pPsF0qB9Uu0HG1SGUEqSkR8OhJWYkMNHKFP773VzbQI90RUwusf2wAY6pgEhUF8fSf7siSD8IltQcZ4sIPAGx6LyCPM31H91jDIDK0M8q%2FTSZ5Eg4S7bjMrHgoxDQYaIXa8dP%2FhZcJJ%2B3p%2BcUva%2BVW7XdRbJIu4pIle48VTu0sM2wNk4xhQszj4KqbiGq6E9kopVYs20Hwd0XLenHkYiKYMlgLEFkXn5GqRexsyFkj%2FX6O9vURkpwFkxsMDlNRRr0tY5ez%2FDfFdmo5d51cTewTF4&X-Amz-Signature=f5f0627f39b133be638001c1c2611fdbf0a7f36e194987eb3451da30a2355549&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2HWWACN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkT8R48i6FxwL9yI2Ikx4cb8zgKwVdonkJ8RbwQcAaPwIhAIorCECWXUXZUxcinsl3IJZ4iVfiGnj4cfxdTkhcGYYaKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVXH1eItFprlCpb4q3AOIjH9QLwMOd4A3uu8JX4DXz1AvaLPGTmQV%2FU08yTeHxEZIH2bNKvxZn8FzY9YBbxj1R2aR59aoReoVQoxnJTKGMd9xHFILTbknIYea8mtC9TVAmjBw8A8HxMwM%2FAC1rAytWi15FAwtG83rhJzsB0R9Mzb2OmXOpTcKcVRJ76PCbktnVVoEu%2FxZoLhUUOKIU9%2FTPJVH3lR2DW5OFOapd5w%2Ft%2BmW%2Bx06o7dw%2BlxA%2BIimKY3bptaDUaWNz47HZdIPhd%2FC5O0X7N88N96rmgD7VMLrRR4xafVFKiIkqioE7ZUFe9w4pCksw6eTtLJVEbUwWEJYMexSzGp1pF8x0G5UIY1jOF8fb8Yq3xgVYj3KgEDoFIHUe2aR29Cqj2odSIxWFZ0arInbXo6APzT4jMS1%2Bqt3KfkyjNPStEQR32fJr6ew7YW%2BPbLIGJI%2BUarYGPr5XpR2CjWUXbaCJtZjY0UVE1vYX9l1uNFOpz5eRQtPUcj%2BpTe85faf%2FO4x5Vx4qb1HjupLOxi9OrLWGZbQbY3OddGfnHMcHXKhR47tioigb9BaaOqXfkSd4%2BvxhbfNEhGqvD6fYRRSzFiaoRkslEHSO3MAzI5IF1LW2pZ3djByB34%2B6Ko59wf0PtkL95aUHzCfx%2FbABjqkAaAganQMt8bycgJhgmbsWXvg4CQhgU%2FI0SwQ5M6hHt19UJueEfX2e8ZtOBPaXY4AO%2BCQ5GKH0kR6PAYjeQKhAZilUE6D%2BCl4YvsdMFSyYhCuTp%2B46Tt9iptZPX4Q281o51ODfeD2DMJ3Mzs6SshpdgxC8664ler%2BALALScxP3JNfJByaYKME437qQ2e3Wd2nurRINpAoNvBW1YCIxbpBmwV1D1vc&X-Amz-Signature=08d37c3bc4a798abf1047d400b2ff8c0434bb36801a52080c59eb07fc15d1384&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
