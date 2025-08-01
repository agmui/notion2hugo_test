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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMYSOPH6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfJ6L4R88CZn5AeqIWymweolHEaVOlVrHgVFUDJerIHAiAbUOmXR3JEukNvIJZEKfMFr7G79TtC%2BOpLGeOVr%2FXJ%2FyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZo8RH%2F0eap2rECXKtwDVF8i9vZoJy76oWSzi37%2BS6DzWDmc3PCjP1%2FVqDisc9LIyVbB5fThduACo5nIGueiUEmlUZ7W78Wx8mhyYE9eQQUTfWOEqb%2BcfMlNB0iWJ7ZI77HuXDdgJU6joWhR6FEXWl0%2FSdPHhSoeFig0opqAPkRw6IjKfaF8wX82ghBehiMmKCkDqfsImc%2BEkp%2BtDbs4zHYCa%2B%2BJh7%2BSUe5fXhbjuXv1NEoFdgPLmlhEVz76nPlQppHhi%2BtqPAha2GLI0SBWhdKczwD%2FyuH4YU%2BYut02f9dSqRLhzOQ14h5MYf2T6Rfv28st0rwaGyW71oNEzLtsoA8p0glNJMMQIwqS9iFnQAq4q%2BKx%2FbmHR5U3cMeis7i8kd6yI2XnK9DxGPMKa6PWy%2BNqMu35PyAe8%2B4gVxTeMoPIXlyLcAvxjx0pfK2IUpc58WYUH6iD4ZNETf%2BVhhmWI1lkmfBIysK1K%2FUXVEKj9vvn9cNcyyCZR19nD%2BNmvELrekJagH10TgjvhGX0lrHkSOuYUshMqDWGEUr0G6AXLzXLSKCGYbCy386BmWDkrwlnVLYUMYXT0zYIQDcJhC88q916iid1%2FR7QFegh%2FCG0Zy4Q0YcyHHr5%2B6dZYY7uzdA1JsR%2BBUrFmexETOYwyuOyxAY6pgHhf5BmFKdrQ7ue%2FbXHqBsGhr4UK2dQs04QhnDSUFzZ5UJOhgEUZzrftX7dlZH7h5ncy1KIYS3rIxlstm3YOc75af%2BW5DsybMAp%2B1GBTmEz8gC9jKFqJvcxInZJ0dThLDgiEOfDNncIgV4%2FVutyWxzKX8mplhojqKqSPMkPlhUZkgZi%2F4WZM%2FgD%2FuN8t9NE1dZNQVI%2Ffnw%2Fk475lBXMbo96wORPyTpQ&X-Amz-Signature=f402a5e91fbb4528b5e9ac925fb2304c8f8f4517537b011f27a4ba898df08e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMYSOPH6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfJ6L4R88CZn5AeqIWymweolHEaVOlVrHgVFUDJerIHAiAbUOmXR3JEukNvIJZEKfMFr7G79TtC%2BOpLGeOVr%2FXJ%2FyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZo8RH%2F0eap2rECXKtwDVF8i9vZoJy76oWSzi37%2BS6DzWDmc3PCjP1%2FVqDisc9LIyVbB5fThduACo5nIGueiUEmlUZ7W78Wx8mhyYE9eQQUTfWOEqb%2BcfMlNB0iWJ7ZI77HuXDdgJU6joWhR6FEXWl0%2FSdPHhSoeFig0opqAPkRw6IjKfaF8wX82ghBehiMmKCkDqfsImc%2BEkp%2BtDbs4zHYCa%2B%2BJh7%2BSUe5fXhbjuXv1NEoFdgPLmlhEVz76nPlQppHhi%2BtqPAha2GLI0SBWhdKczwD%2FyuH4YU%2BYut02f9dSqRLhzOQ14h5MYf2T6Rfv28st0rwaGyW71oNEzLtsoA8p0glNJMMQIwqS9iFnQAq4q%2BKx%2FbmHR5U3cMeis7i8kd6yI2XnK9DxGPMKa6PWy%2BNqMu35PyAe8%2B4gVxTeMoPIXlyLcAvxjx0pfK2IUpc58WYUH6iD4ZNETf%2BVhhmWI1lkmfBIysK1K%2FUXVEKj9vvn9cNcyyCZR19nD%2BNmvELrekJagH10TgjvhGX0lrHkSOuYUshMqDWGEUr0G6AXLzXLSKCGYbCy386BmWDkrwlnVLYUMYXT0zYIQDcJhC88q916iid1%2FR7QFegh%2FCG0Zy4Q0YcyHHr5%2B6dZYY7uzdA1JsR%2BBUrFmexETOYwyuOyxAY6pgHhf5BmFKdrQ7ue%2FbXHqBsGhr4UK2dQs04QhnDSUFzZ5UJOhgEUZzrftX7dlZH7h5ncy1KIYS3rIxlstm3YOc75af%2BW5DsybMAp%2B1GBTmEz8gC9jKFqJvcxInZJ0dThLDgiEOfDNncIgV4%2FVutyWxzKX8mplhojqKqSPMkPlhUZkgZi%2F4WZM%2FgD%2FuN8t9NE1dZNQVI%2Ffnw%2Fk475lBXMbo96wORPyTpQ&X-Amz-Signature=469cd283f9bc2e88ccd345089907dbae08336c8fdb3e1ccfd819ce13b3403523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMYSOPH6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfJ6L4R88CZn5AeqIWymweolHEaVOlVrHgVFUDJerIHAiAbUOmXR3JEukNvIJZEKfMFr7G79TtC%2BOpLGeOVr%2FXJ%2FyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZo8RH%2F0eap2rECXKtwDVF8i9vZoJy76oWSzi37%2BS6DzWDmc3PCjP1%2FVqDisc9LIyVbB5fThduACo5nIGueiUEmlUZ7W78Wx8mhyYE9eQQUTfWOEqb%2BcfMlNB0iWJ7ZI77HuXDdgJU6joWhR6FEXWl0%2FSdPHhSoeFig0opqAPkRw6IjKfaF8wX82ghBehiMmKCkDqfsImc%2BEkp%2BtDbs4zHYCa%2B%2BJh7%2BSUe5fXhbjuXv1NEoFdgPLmlhEVz76nPlQppHhi%2BtqPAha2GLI0SBWhdKczwD%2FyuH4YU%2BYut02f9dSqRLhzOQ14h5MYf2T6Rfv28st0rwaGyW71oNEzLtsoA8p0glNJMMQIwqS9iFnQAq4q%2BKx%2FbmHR5U3cMeis7i8kd6yI2XnK9DxGPMKa6PWy%2BNqMu35PyAe8%2B4gVxTeMoPIXlyLcAvxjx0pfK2IUpc58WYUH6iD4ZNETf%2BVhhmWI1lkmfBIysK1K%2FUXVEKj9vvn9cNcyyCZR19nD%2BNmvELrekJagH10TgjvhGX0lrHkSOuYUshMqDWGEUr0G6AXLzXLSKCGYbCy386BmWDkrwlnVLYUMYXT0zYIQDcJhC88q916iid1%2FR7QFegh%2FCG0Zy4Q0YcyHHr5%2B6dZYY7uzdA1JsR%2BBUrFmexETOYwyuOyxAY6pgHhf5BmFKdrQ7ue%2FbXHqBsGhr4UK2dQs04QhnDSUFzZ5UJOhgEUZzrftX7dlZH7h5ncy1KIYS3rIxlstm3YOc75af%2BW5DsybMAp%2B1GBTmEz8gC9jKFqJvcxInZJ0dThLDgiEOfDNncIgV4%2FVutyWxzKX8mplhojqKqSPMkPlhUZkgZi%2F4WZM%2FgD%2FuN8t9NE1dZNQVI%2Ffnw%2Fk475lBXMbo96wORPyTpQ&X-Amz-Signature=ee72149701a1f2d11d993df0817b7e5740354d88fd00f16f9501c07e15ac33ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PFP4ZOI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChJLtve89H6aSGY%2FN%2FekkPvR1z47EFRtAfTvlJvOCRuAiA%2BewwPAjK6tR9MLFPxHxpyHa%2FvDMj%2B79wBrhIfda7lUSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfYpuzxK4w4NUHfbpKtwDWu9WdY1VQocIwgIhrexMnVyrlvurJzc6IiPSrgIViAe3K3vttLBLCPQm%2FF%2FZYsssQ08vj6vIf1mP6zHJgCjjofmkGU0nZwBFwXy%2FKndhh4VsaJw7n05foclGAH%2BfugyO6F6U9o18vuenxpKyI23J7PrftZZhXoIarH1vinEKOksZF2h2mDRiu%2BT947q8UT3f3tb1voNO%2F%2FJY%2BDFHfjRZDCtteEUYFAWQO0yZsy0HnIliJ7FL3aD3fKbE5CparodoyHTthEo%2BAT97kJg7VBpLNtDI5FcAEi%2B%2Bbhqq8tGq2O3kS5HrJz15eDo908%2F4HvW%2Fc3c55amVsOD6qTILnt3Ybz2k%2BV2FJG6tbqFCsN8td0WcP9D5pUkE6p4rK3bk1mJeoPgvoBkrBemxCeu6qdsUF6vTmfQ3rYSWhLRxXKSK68GYjwZIjeOpyg4%2Fg4eYV2atjx6tFavwgW7YTFnDPmmL0VTHdWGOQ4sl5q7xp6a8d6UdmAGp1Wcwq0999NXKLU4ZSyPGRXBtK2aFDgWbfOzqGN5Ym4Dvk4gAAhZptRINXxx7m6Odvc4iE5ldF7hLRtTcFYVo%2BWopQ1w15HVpnbgwkXZhr6IUW5eqvleJs9mT%2FfzPMDhY14%2B57GXR2aEw0eOyxAY6pgHETWmMsBLkZ9%2BFfprgBsb1il7h8T51DsbtvZk%2Fhhc4SgtkB1iDgCruhGbAI61hBC3TGv0B94sU%2BMATym8W%2FxGQERAuxc3NCj1d0ovz4xITokJGYVlEWzxkdeZm2FEm2fOTkacnQsp3Frds%2Fgwz2Mge86dUbf9erOeUCWSZKxmzFCFyqChlojrtAn5FYF%2FOumsnwu%2FJTkDlEYCXCoFtDIL9WTi4eHZb&X-Amz-Signature=cf2ab75f163d86be48af0b4513161d9f81f7e6fda75919d31b7de4e08b4da14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYAGQGU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDADxx5RFFxjhdYQxE51HYwxXNXzDwqn97kIXa%2Bea2XWAiA03WfxZbGzJGAXwj0zZk9Q2nMUFXIKmRz4C9q6EibdCSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHPfnLDn46zOgZo2LKtwDeSDctE7XbrlA9p1j%2BwK0jDK0G4fKypg%2F63D49X3v2Petz9X9iZ%2F7bOfgoOByIQyvJ8W8n0GNCCKDS0OkQ%2FMb4EuYZOKY8qqE74sl7Ne4WyuZZyV5YR5KroE2nSnnTwngRQz0lzna47nwAN%2F7j8fMrOMibg5s8skgyqBv3hNE4njdoXSw4tF1hj6N6sakYw3ELr%2BlpjXJPypm7HBHVDABTAEwI7dUSQnP60ppD4plGUwJ07gay%2BhoHhMRLRGCrY2bhMclZos%2FfF0pfpH6U9Dc6RCiXHJhGcM0OBTqpLOeobl%2FaYR9nYhoFX3IMgMU40ZzSfBiObga4EThDsQnPk1bmP%2FnXhrOZrEfKVbzN%2FnPDda1H1Q%2Bgew6rxyxVu7xKo8WHmWxLj7CNkWiNKPQEY67oC4e2uYHfRcx8o7wpakqehhsCS7aIlz2cw8kGTojxQFutO0DShOh2w7m8FBieO8kZju9ymJoTOgeo7speLeGEYTqkgGmIy3aU0X8TObsFI7zdaupGpCjA1ONF4xa6KSDr%2BAI5KZEbl6bI313cKvhihDQcOvY%2FQaGroseSXipTWAZ%2FjLTMAyg22i2zhWhtzVqTnisS7KekQLhVKxfgPTp6pyeyWWmTlY1wPBl6X8wm%2BOyxAY6pgER7ftQTMcktifkCCQUa%2BeJeNSmHZ3oezuzF29Q%2FX5qF7Y%2FqOApU0892F5XT0tXNu6%2F15P6RQ7dofZaGIDfLTrnWW%2B%2Bc9ZCF6PLqpwl9mzIxObRPGRl7rqDkSVqYK9hFC1hB01duMp8Ts3Q4p7R26ayMuEY%2FC0IzZkDkaKycZuXcqdCqyIdjww%2F7334VGmbo3l0qPgEueIYVBwtlkaNcVSxJmhg9Wnl&X-Amz-Signature=fdb5686a40a68d539cc903270597951311371ee19f9932cc5ef5f5edd2b0f316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMYSOPH6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfJ6L4R88CZn5AeqIWymweolHEaVOlVrHgVFUDJerIHAiAbUOmXR3JEukNvIJZEKfMFr7G79TtC%2BOpLGeOVr%2FXJ%2FyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZo8RH%2F0eap2rECXKtwDVF8i9vZoJy76oWSzi37%2BS6DzWDmc3PCjP1%2FVqDisc9LIyVbB5fThduACo5nIGueiUEmlUZ7W78Wx8mhyYE9eQQUTfWOEqb%2BcfMlNB0iWJ7ZI77HuXDdgJU6joWhR6FEXWl0%2FSdPHhSoeFig0opqAPkRw6IjKfaF8wX82ghBehiMmKCkDqfsImc%2BEkp%2BtDbs4zHYCa%2B%2BJh7%2BSUe5fXhbjuXv1NEoFdgPLmlhEVz76nPlQppHhi%2BtqPAha2GLI0SBWhdKczwD%2FyuH4YU%2BYut02f9dSqRLhzOQ14h5MYf2T6Rfv28st0rwaGyW71oNEzLtsoA8p0glNJMMQIwqS9iFnQAq4q%2BKx%2FbmHR5U3cMeis7i8kd6yI2XnK9DxGPMKa6PWy%2BNqMu35PyAe8%2B4gVxTeMoPIXlyLcAvxjx0pfK2IUpc58WYUH6iD4ZNETf%2BVhhmWI1lkmfBIysK1K%2FUXVEKj9vvn9cNcyyCZR19nD%2BNmvELrekJagH10TgjvhGX0lrHkSOuYUshMqDWGEUr0G6AXLzXLSKCGYbCy386BmWDkrwlnVLYUMYXT0zYIQDcJhC88q916iid1%2FR7QFegh%2FCG0Zy4Q0YcyHHr5%2B6dZYY7uzdA1JsR%2BBUrFmexETOYwyuOyxAY6pgHhf5BmFKdrQ7ue%2FbXHqBsGhr4UK2dQs04QhnDSUFzZ5UJOhgEUZzrftX7dlZH7h5ncy1KIYS3rIxlstm3YOc75af%2BW5DsybMAp%2B1GBTmEz8gC9jKFqJvcxInZJ0dThLDgiEOfDNncIgV4%2FVutyWxzKX8mplhojqKqSPMkPlhUZkgZi%2F4WZM%2FgD%2FuN8t9NE1dZNQVI%2Ffnw%2Fk475lBXMbo96wORPyTpQ&X-Amz-Signature=e4dd943f6fb9f97c970cfbbc03675c5b6c6f5d654c9a34ba46fe5e854dc0c4f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
