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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVWKPK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAWpv5zpn75xCQAZYikNmlNHyOjh%2Fa6NZc3BC5nLAFqAiBWDLneBBIGfiw1LEpDYl9W6tPnaddHlVizrjrv%2FBGRaCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjyknmoVbkiDqSyK7KtwDxn1dy7fEqfKJE7X06l5Nqt%2FE%2By%2BJGiJamar9ciHhXQ3iL%2FqQNab%2B8CzqZmbWusWMbU7dGl%2FttD7XEF%2BtmFkKFl%2F%2BwoWc9mj%2F5J5pFDhh1jH%2FmIvdalCrjBnNIYwXrC5SiCLV%2B%2BoR39MSYrmwMRGY8QcCRCH7FRkESytET6fJHR70V%2Bdtfe%2Fs8DxwXv6dvLB7E7aUE3M5d2Ul8MVNVZpERK6RtQ6ehRc0MK5nmASN9ew0TyD2fKIp9d4Iq24GvB5MIbDdFtnd%2F9JoJ0z9gCPIv0qLY4QkdV9QxGV3BCJqGUi5bKKTrBEGUDp3zC5xU6HZFx7KttjtehNoC7NeFx3a0ry%2Fgtz22z892f0NcyqGAMKpFh%2BcpliG%2FgLasAY10ABYv6SeFjOt04up5tjfKJSwUN5nNP9u6%2Bf696Lugvi4jESvPhCoyR0lS6qDfjbBZ3H25PAM7oZiCm80vsbG3OcuYNZPIBwyaRom%2BnwMS5EdJ8im2m5g3AzkYMGB5h1wJjyhRD3UMPkfaMI0eSmkL79IqRHPUQN6NCna1%2Fm9dNiKwY0WB17C3B7VHyNZYYgXJezU2wL14h9w5Ox4JewuT2nx6%2Brnp5ZdFZKhXI4oh0Ts5Co0yfSeeI6QBwqjqREwo%2BWlwgY6pgFG1jYdCTs11BI%2B2XWb25oq%2F8SANdxatz3LxVvwQ0A4T7CdCeWFLztj149IKkyxsVOOI3zu0ZNQoEYnvJ5wVXL85rTDfJC9HUFoMlBbY4cmHIs6axTV1FsD%2BC29ikJqqgceHmjyzRZd%2B3mA5gw28QAxtBPYfwPwQB%2FoRiEqcLxd6OeGixIGO%2FJfWmHCJPSlzeTKB7rV5zNy2LpWsL1l%2FyoIOCOw4yE1&X-Amz-Signature=a93a1625eefb3fe47972187c2cf48d60609110976bdabac7e1a6e3d63f592540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVWKPK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAWpv5zpn75xCQAZYikNmlNHyOjh%2Fa6NZc3BC5nLAFqAiBWDLneBBIGfiw1LEpDYl9W6tPnaddHlVizrjrv%2FBGRaCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjyknmoVbkiDqSyK7KtwDxn1dy7fEqfKJE7X06l5Nqt%2FE%2By%2BJGiJamar9ciHhXQ3iL%2FqQNab%2B8CzqZmbWusWMbU7dGl%2FttD7XEF%2BtmFkKFl%2F%2BwoWc9mj%2F5J5pFDhh1jH%2FmIvdalCrjBnNIYwXrC5SiCLV%2B%2BoR39MSYrmwMRGY8QcCRCH7FRkESytET6fJHR70V%2Bdtfe%2Fs8DxwXv6dvLB7E7aUE3M5d2Ul8MVNVZpERK6RtQ6ehRc0MK5nmASN9ew0TyD2fKIp9d4Iq24GvB5MIbDdFtnd%2F9JoJ0z9gCPIv0qLY4QkdV9QxGV3BCJqGUi5bKKTrBEGUDp3zC5xU6HZFx7KttjtehNoC7NeFx3a0ry%2Fgtz22z892f0NcyqGAMKpFh%2BcpliG%2FgLasAY10ABYv6SeFjOt04up5tjfKJSwUN5nNP9u6%2Bf696Lugvi4jESvPhCoyR0lS6qDfjbBZ3H25PAM7oZiCm80vsbG3OcuYNZPIBwyaRom%2BnwMS5EdJ8im2m5g3AzkYMGB5h1wJjyhRD3UMPkfaMI0eSmkL79IqRHPUQN6NCna1%2Fm9dNiKwY0WB17C3B7VHyNZYYgXJezU2wL14h9w5Ox4JewuT2nx6%2Brnp5ZdFZKhXI4oh0Ts5Co0yfSeeI6QBwqjqREwo%2BWlwgY6pgFG1jYdCTs11BI%2B2XWb25oq%2F8SANdxatz3LxVvwQ0A4T7CdCeWFLztj149IKkyxsVOOI3zu0ZNQoEYnvJ5wVXL85rTDfJC9HUFoMlBbY4cmHIs6axTV1FsD%2BC29ikJqqgceHmjyzRZd%2B3mA5gw28QAxtBPYfwPwQB%2FoRiEqcLxd6OeGixIGO%2FJfWmHCJPSlzeTKB7rV5zNy2LpWsL1l%2FyoIOCOw4yE1&X-Amz-Signature=78de4329a2575ae7eef563807d941c643059162d9bb59a01ac666111f760a852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVWKPK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAWpv5zpn75xCQAZYikNmlNHyOjh%2Fa6NZc3BC5nLAFqAiBWDLneBBIGfiw1LEpDYl9W6tPnaddHlVizrjrv%2FBGRaCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjyknmoVbkiDqSyK7KtwDxn1dy7fEqfKJE7X06l5Nqt%2FE%2By%2BJGiJamar9ciHhXQ3iL%2FqQNab%2B8CzqZmbWusWMbU7dGl%2FttD7XEF%2BtmFkKFl%2F%2BwoWc9mj%2F5J5pFDhh1jH%2FmIvdalCrjBnNIYwXrC5SiCLV%2B%2BoR39MSYrmwMRGY8QcCRCH7FRkESytET6fJHR70V%2Bdtfe%2Fs8DxwXv6dvLB7E7aUE3M5d2Ul8MVNVZpERK6RtQ6ehRc0MK5nmASN9ew0TyD2fKIp9d4Iq24GvB5MIbDdFtnd%2F9JoJ0z9gCPIv0qLY4QkdV9QxGV3BCJqGUi5bKKTrBEGUDp3zC5xU6HZFx7KttjtehNoC7NeFx3a0ry%2Fgtz22z892f0NcyqGAMKpFh%2BcpliG%2FgLasAY10ABYv6SeFjOt04up5tjfKJSwUN5nNP9u6%2Bf696Lugvi4jESvPhCoyR0lS6qDfjbBZ3H25PAM7oZiCm80vsbG3OcuYNZPIBwyaRom%2BnwMS5EdJ8im2m5g3AzkYMGB5h1wJjyhRD3UMPkfaMI0eSmkL79IqRHPUQN6NCna1%2Fm9dNiKwY0WB17C3B7VHyNZYYgXJezU2wL14h9w5Ox4JewuT2nx6%2Brnp5ZdFZKhXI4oh0Ts5Co0yfSeeI6QBwqjqREwo%2BWlwgY6pgFG1jYdCTs11BI%2B2XWb25oq%2F8SANdxatz3LxVvwQ0A4T7CdCeWFLztj149IKkyxsVOOI3zu0ZNQoEYnvJ5wVXL85rTDfJC9HUFoMlBbY4cmHIs6axTV1FsD%2BC29ikJqqgceHmjyzRZd%2B3mA5gw28QAxtBPYfwPwQB%2FoRiEqcLxd6OeGixIGO%2FJfWmHCJPSlzeTKB7rV5zNy2LpWsL1l%2FyoIOCOw4yE1&X-Amz-Signature=d41fdfc6094c696bbddf80d24e3ccf7a8fd9e86a5f9896df335ca8cc6335898d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674DMUVEC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi18woUvk3Qc6Q5FK13%2FO6Ov2rz61wfB0lRQ7KeJY9yAiAZcDE8GfpIGcMppp03P18Dg47uvmAq7%2F3yZtrpkmrdWyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsey0BElS9%2F4iOiNaKtwD5TjSiO8FEDKQywEtNlPNq1ulIVOMMhDEo2yMfUum50eT2UZrfTvMdsUELMSAAiSIhCQvJSD1q7cPq%2BZaNNpvyd%2Ft%2Fsg5fZKRwy0WYnf1B32Pjjd5Sa2O9B7ETWNxDsh1jGLIQ7j%2FFX0ZclMz%2BzKmrwjJTGs9w6EBj912MIU6JvWWHj07gUCmk0oR5DT%2FI6BXWK%2F9Y7019bO4pfl05pjGmzm7k0mPyT0TMUcSyt7QNmRWpPTazjvgJUlMPkG1DEmuEdxUfdmWjiKR6EwUhma3wngv8sjVCPbgsx8OYYuuKyJAOXsED5pZdcXaT%2B8iKm8V%2FbXJxWUhjDkvfbXmyrEghUnwDpRK9kEk74hWq41i%2FHQyWAZxbauDu4lUHL7L%2BxK6o%2BnA%2B%2FGgfzc%2F8YZ%2FrxRHuXhfEiaL9%2FlwtXGTsh0t%2BKJ5HPQdaAelC6Nkh63LE1gShQF7PuJ3w%2BEfuPKfNcOTHex8GOnqgsgHf0kLsQhF2rBhXIP%2FKlMA2KVupnOe9WoBdyjFO3xsTOatGy7YaF9EAKC1L9sCC59LaWdTlE9lrHjuTasZDNKucSzpXu%2BuVe5vUdjnBTzl1FUOL3VQhxqn8cMjCLvAPykgzn5Y2OMqWxGbgkDfZ5iQ44Gk5zYwjealwgY6pgF9HotxD6CXis7MqBkQigSVSDdr1q1v2GerbNZoG%2F6x4tXbi4soMm4z2Esuq1OeOEUdOXHaogjk5Thvl%2BbDPwoUBk%2F%2BnRKttcEkPGQVWebIXhcB6fJovVBpG8cduaNVp3lk8HpNTTSk9CSur27eGY%2Bm8kz5Zh7QNQ1t%2F4UD%2B%2BdH0VTZHAq%2BjVD4vX8qSCqVtkwKcN3QEvND5%2Fp7ppTyB3qGOWpWxWb%2F&X-Amz-Signature=f5b3016e469a7ce6c9e8d8676e6b629b9ec2803c33ea6a3f77ac27d64bc9b0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OKQMTF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDizr7ctHxI3%2B7a%2FY5QMp5kU73H4LrB3Sq1eSWvWxXTkAIgVWWIy6ralj0hQ2EBLTz8t37rf0%2FFRE0Je6dVz%2F%2F8G%2F0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCWh4LKz8%2B4hLFN%2ByrcA4BsF4B1hzrjV%2FsQT9ByPf3RYxeA3n9UyiZu0zEW7VL7LlGOlMCkxSx3Gf1J4SwNnEGydb8Rpr6jNxCEFZhsKliaN92AOqcNGdEP%2FE3WbN0GpCVrtm73PWYYy0qLoBxr9C2zxIgCtHIJIb9t8XEOivSD5Pl0%2Bo8xSFMuAiNAN%2Fu4YA%2FotmectExR8SyZesPSYZvXMUKdVKSsSAZsXB9p%2Bfi3DfKmxlJaKxf9ZdjyZd2nBfzCvdZ0AI3YyDSJQpKp0hJN%2BegV0WBigcM%2B7aPLEouRD%2F5lyE39vatUaZY162zXGxEnqxBUSuZpCYgIkDcz8VScXSsdPqY%2FwpQFn%2FVtcmPHYc5cOL5KJklV1zv0GYYKFtU2uZioAagF7cHiXIZ2AIglbSd17BfiaWKAU4NoUEypzKv%2BvwWMGQJVLE1Yyy0yDg6vs4kHQSsTcWILUJBNCrmvnE48qU8Wr7a6OB5LvNLCOOAJfls5QS0ZdI6i3WZoMywMyCBENQeQalgVmj9VZMaDXM2TQtx8zyaS%2BpPfWrU0V4cKZBgT4h5wsAUu%2FowXckO6l1DUoHYOLC2NCXz5yfG10jR6XUhKDrRobnqf4O9uXMRH073FE7fEdxMXnRhOet1W6QoIx1TjPFxDMJi4pcIGOqUB4pmIQ4cFELmiORxzUAv%2Ba%2BwwCeFqVq3Fr2uOWJnwLRmY%2FIzTDRFDtibazT%2BUSc49vMTg5hELqAIKUzgYFGA7NdWcfXbN4XXRutXVscfd5WdqzXCZaZ%2BZVGIJfi7lQPGWJpy1j6BjYTmXmoqAoEluXrgiz7LxWSvvjY5iYYgueZoIefO13632K1b%2BwQAgUOtQOBhPvdWrdfGSj1M%2B8dsaiVa3SUsD&X-Amz-Signature=5995e21b6ee5cf95be4db61a6cd2d1c9f6ce334ebb04defbb353cdd6fc89e4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVWKPK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAWpv5zpn75xCQAZYikNmlNHyOjh%2Fa6NZc3BC5nLAFqAiBWDLneBBIGfiw1LEpDYl9W6tPnaddHlVizrjrv%2FBGRaCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjyknmoVbkiDqSyK7KtwDxn1dy7fEqfKJE7X06l5Nqt%2FE%2By%2BJGiJamar9ciHhXQ3iL%2FqQNab%2B8CzqZmbWusWMbU7dGl%2FttD7XEF%2BtmFkKFl%2F%2BwoWc9mj%2F5J5pFDhh1jH%2FmIvdalCrjBnNIYwXrC5SiCLV%2B%2BoR39MSYrmwMRGY8QcCRCH7FRkESytET6fJHR70V%2Bdtfe%2Fs8DxwXv6dvLB7E7aUE3M5d2Ul8MVNVZpERK6RtQ6ehRc0MK5nmASN9ew0TyD2fKIp9d4Iq24GvB5MIbDdFtnd%2F9JoJ0z9gCPIv0qLY4QkdV9QxGV3BCJqGUi5bKKTrBEGUDp3zC5xU6HZFx7KttjtehNoC7NeFx3a0ry%2Fgtz22z892f0NcyqGAMKpFh%2BcpliG%2FgLasAY10ABYv6SeFjOt04up5tjfKJSwUN5nNP9u6%2Bf696Lugvi4jESvPhCoyR0lS6qDfjbBZ3H25PAM7oZiCm80vsbG3OcuYNZPIBwyaRom%2BnwMS5EdJ8im2m5g3AzkYMGB5h1wJjyhRD3UMPkfaMI0eSmkL79IqRHPUQN6NCna1%2Fm9dNiKwY0WB17C3B7VHyNZYYgXJezU2wL14h9w5Ox4JewuT2nx6%2Brnp5ZdFZKhXI4oh0Ts5Co0yfSeeI6QBwqjqREwo%2BWlwgY6pgFG1jYdCTs11BI%2B2XWb25oq%2F8SANdxatz3LxVvwQ0A4T7CdCeWFLztj149IKkyxsVOOI3zu0ZNQoEYnvJ5wVXL85rTDfJC9HUFoMlBbY4cmHIs6axTV1FsD%2BC29ikJqqgceHmjyzRZd%2B3mA5gw28QAxtBPYfwPwQB%2FoRiEqcLxd6OeGixIGO%2FJfWmHCJPSlzeTKB7rV5zNy2LpWsL1l%2FyoIOCOw4yE1&X-Amz-Signature=32721389a615ea2148ff94c210c9026f7d6579a2627c664080da106d386b7858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
