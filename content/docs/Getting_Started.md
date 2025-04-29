---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSF35MZ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeugCl8xxibbCFkKQ4KhhJMVjV2yStUMb7i0I5R5KDGQIgezjhggBZ96nae4MpKjtji0BO9C4mGwjEs1nBlINzP1gqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlhuC%2BARNcOHjCq%2ByrcA4DkdklanPubD6sCzw7HmXB88TUeR7tF7Wg5BF%2B4mDbJJeIZjvfwaaXCd3eLN753YHp%2FnQhLzaNPEx9C0l9hUiPWGYq9ohY%2FCLeWzQLrfIxttjv0kJv0WYOaFLHWtudbxUW2EmZgdKMQj0ap4tQpF3VpAB9%2BggtnTbl6htG1XghDCJ%2ByaVTT9LWFzcXKRjuKz6GjL9cJQ%2FS6PIqdGJ9P8H4a9nUMOHgkhXrOTOHzZ9vOi0gO9LdZIfLA7AX6%2FXQfe8ftXE8MQZuvjGMnq4%2FfCHob5hH1YyswzPGgyykLSJHRTX6lTb652VHgwQBmp9kkp4wgViIs6HIR%2FH5WcqDG6LvHKI5qV%2BKdKbOY6sJwEGK%2BKdgn%2BDMAnpT8VUt8wW6U0jAglizggPae08g%2FHnWlN6V11BzwjVD5N18aT8BO3xjCQYWi%2BJb7153un6QaMeM1LfWdiQiwNVj%2BDrOMPiiBzd0vGszWgAaPTtO83JZ%2FMsvHMYiLVgOUkXmbAF36T4IyESw1nj8UGmi96eOl8HlgAJRnJjfe7AsyZU8kV%2FYpQSNcjuuGfpIkb6%2BBltPPJ3JvgPq2V1S0dwiceZif7oWia%2B3bquoYhuPYGkiA9E8Xra4zgeO1l9ERAJnN7SkOMKrDwsAGOqUBgF6yLbL6pS7Gyp39rKk3tT4ikWvFs56SAOTif2jhePLvFTmQkN7CTtRlgr8gnfPMvTUy70dsEbXJhonDBXVidinFCDixjnJpLxsNrEburlUI9vA6%2BtxRDXuZO64LEIcm%2Fjhw0Vw1pxCOlGuA7K%2FIF14tv1j0LtZqq5IO6wkGxGeXTYFfXbgdyRPpbMlWOLReiNux6qscDwbBJh6xVJ40RhlyqJjD&X-Amz-Signature=0a9573880f4ea489746c37bd3ce937f94a8a4a5c38eb84e818fc66d7c37fc412&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSF35MZ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeugCl8xxibbCFkKQ4KhhJMVjV2yStUMb7i0I5R5KDGQIgezjhggBZ96nae4MpKjtji0BO9C4mGwjEs1nBlINzP1gqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlhuC%2BARNcOHjCq%2ByrcA4DkdklanPubD6sCzw7HmXB88TUeR7tF7Wg5BF%2B4mDbJJeIZjvfwaaXCd3eLN753YHp%2FnQhLzaNPEx9C0l9hUiPWGYq9ohY%2FCLeWzQLrfIxttjv0kJv0WYOaFLHWtudbxUW2EmZgdKMQj0ap4tQpF3VpAB9%2BggtnTbl6htG1XghDCJ%2ByaVTT9LWFzcXKRjuKz6GjL9cJQ%2FS6PIqdGJ9P8H4a9nUMOHgkhXrOTOHzZ9vOi0gO9LdZIfLA7AX6%2FXQfe8ftXE8MQZuvjGMnq4%2FfCHob5hH1YyswzPGgyykLSJHRTX6lTb652VHgwQBmp9kkp4wgViIs6HIR%2FH5WcqDG6LvHKI5qV%2BKdKbOY6sJwEGK%2BKdgn%2BDMAnpT8VUt8wW6U0jAglizggPae08g%2FHnWlN6V11BzwjVD5N18aT8BO3xjCQYWi%2BJb7153un6QaMeM1LfWdiQiwNVj%2BDrOMPiiBzd0vGszWgAaPTtO83JZ%2FMsvHMYiLVgOUkXmbAF36T4IyESw1nj8UGmi96eOl8HlgAJRnJjfe7AsyZU8kV%2FYpQSNcjuuGfpIkb6%2BBltPPJ3JvgPq2V1S0dwiceZif7oWia%2B3bquoYhuPYGkiA9E8Xra4zgeO1l9ERAJnN7SkOMKrDwsAGOqUBgF6yLbL6pS7Gyp39rKk3tT4ikWvFs56SAOTif2jhePLvFTmQkN7CTtRlgr8gnfPMvTUy70dsEbXJhonDBXVidinFCDixjnJpLxsNrEburlUI9vA6%2BtxRDXuZO64LEIcm%2Fjhw0Vw1pxCOlGuA7K%2FIF14tv1j0LtZqq5IO6wkGxGeXTYFfXbgdyRPpbMlWOLReiNux6qscDwbBJh6xVJ40RhlyqJjD&X-Amz-Signature=5a7b587887b3a10cf6da42d6de615b17d3adb557eb8705fecdb26cd2e99d09d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT5Z4PW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmFZqO9rVHdWIJ45yjliLqyBHwZTUkPc5P8LPRTO4lDAiEA6%2BTEn%2B45A3MU0OSGP5GZOTfqBeAIAUMvRUNuRgedHM4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlQlfJ4POseCsA5rCrcA5B4wbDFJCXzuWT0XBfkgxOPlhcK7h0rB5yCyn5TDVrz%2F3U%2F9KqQfbjR9pDlyDzpRIz%2B7OyivBzyeWNpFnUhKhqQnYXp4uC%2FVQdhRVWjnjfF8UPfAgidsHoozSKhiaJBGJwva9YuhqFWPP6i2IQNf%2F9qff0x%2B6AbK0nxgvmytHXHPvDhFMjae6I9JE9j27M7mcF2Fur%2BUFd7zhow41MTlnTWr7dA8RemVXZF2GED%2FlIBnnpbUqXDZKmlClc9gvsv6crFcKjiBA0RiSWBRP49hepXOS7O4Y0mGnxIXP7q%2FYGnTRBgFAwG0WGV7X2CpNMjmO2uq1DGwkRxANhKuA8WzoWwf%2F5pceP%2BWmqV4xpaNZPR46bJQ%2FW8pOcAfYsVI9GB8OwbLtggYgHwI3WSwwjast0gGlflZKkiPx3BXOKwyEe24dj2%2BMh6dWbd%2Fh9LpEe152GZJr4LXTdPcUFVfXcFR80sHvS6c%2BgbL8uEUA2xkiz3UV1161OWIMr6v4TE2%2FS6i5Fuq%2FNH%2BeJyA4vG9hL6Par3DFRagtQoKQqaK6urbAtyRVFtPfUm69xKiYMFK7hi2DMlGvRCxksCQMI%2B9p7U%2BvAoDxq6M0yrrX0QlK49r%2FseBLS7DGX8%2BBaku%2B9GMLnEwsAGOqUBgIpAXoQn9IT%2BGEfFzNB9fZn8XEMJYt9J3zUiEcFG2xxyysT7eHPtQkGbrGYALC6aPGkJL6CqCmwlfZLe75ZXrJoiJiZ%2FAquEGRoTdoZvtzPxTWSguOBpomjM2tgWCn85wToD11lE0TpdrxwOaAjgjqZB8Fw6PJpAlK93V52hla2UiPXBoa8kQauT8xg26RdMqkGImVS12qiinpX7m7rgVkYBRIH4&X-Amz-Signature=b930cdabca1e8b1cfa20bce0f0728707a0b0cd6d93bac417f551b22b205be601&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGTJPYDM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FiFWsHR8oM4jvYPezaxThm1oFZPZs1FaZmQRvfPeOtAiEA6r3Lne5aaLkU%2F6WHeTvpBjXtVPZLpp4D7LsVxB3FRwoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPr%2F2mR5EUOozRlAuCrcAzuEjmNjC3yGMunGM70yzK2eM3ZLvK4hjti1CdG7SNVW4eu%2FfzelqMRt3L6NyAVfyETn7E7lcXe%2FGpFc1tkGbZ9g2VI4NjsZtPSAEFO9qMBpV5bJ%2FP1%2FQ607GFlNAZbpNVuw6KsSNRlIP9QuOXZnCpyHgwrTdKcgNRswkSmDX1yKN1%2BEP4jp117Rk%2Fzy9NrE5Z5cYkzyj4t2tyEZ6%2B8Gz7cWg%2BLc%2F%2BDM44Fu8xlAaAzEf%2FqiTqD43R3ikS3SzlsiDxROnlwjcOqYkKHTx%2FK%2BQmdcWGAy5zjrtAaiaMhV7Hmv%2BVFuJwz%2FFKbxv92p01jyQlaKOczl34Iiur7NCvlexQwEYvWmFgwdQo%2FE8j%2BY2Js%2B2nWi3gzj1c%2FlWCOXtBZ7%2FFhAhpBdIrkLXZ3Ae4Sy1hEX8762ZMXDhOeX3riEgk4aVmd2A8KTWMUqqOYcXtrkkotkAxyfy%2BNFKhNCy6hkD5IjBFRgqtOg1I5AgFYiITh1wDwBl7moXGt1dpkNdEVZBFoSZRZiEM4EPimlA3HpHfXvQtnzKNZsJjppq4p0ba8um9Npo5%2FtcWRHn1rIX2RX%2FBO%2FtQYbF06f40vJApPIxTGQ9U0QtKLA0B4vlVn1rgn5FfSe4Ea739wkNRecMKzDwsAGOqUBEiJL8Jog8LRFa15GYP2jIuwXbg0ACCR4fKS4QOdKrmgI25Xb6b8SYYmcdRCBY6QLcElS81jXpvUBwlaU0BTYu55ls4sj8WtUD7OT%2FWlOnU2Cx9AbJ1055HwIVk2%2FvO8aI2ufzDQg%2FBmip4DKh4OynAIABmFoCVvJ6vVIk5hLTU6%2BcLRLp8PQVpkPbRWepD2ne7841LyNGmJgDQRIaLqeqygqDEGj&X-Amz-Signature=f88f3764afdef18382782ad1eca48a69f46dfec251336ae3b1d4ad8425113544&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSF35MZ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeugCl8xxibbCFkKQ4KhhJMVjV2yStUMb7i0I5R5KDGQIgezjhggBZ96nae4MpKjtji0BO9C4mGwjEs1nBlINzP1gqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlhuC%2BARNcOHjCq%2ByrcA4DkdklanPubD6sCzw7HmXB88TUeR7tF7Wg5BF%2B4mDbJJeIZjvfwaaXCd3eLN753YHp%2FnQhLzaNPEx9C0l9hUiPWGYq9ohY%2FCLeWzQLrfIxttjv0kJv0WYOaFLHWtudbxUW2EmZgdKMQj0ap4tQpF3VpAB9%2BggtnTbl6htG1XghDCJ%2ByaVTT9LWFzcXKRjuKz6GjL9cJQ%2FS6PIqdGJ9P8H4a9nUMOHgkhXrOTOHzZ9vOi0gO9LdZIfLA7AX6%2FXQfe8ftXE8MQZuvjGMnq4%2FfCHob5hH1YyswzPGgyykLSJHRTX6lTb652VHgwQBmp9kkp4wgViIs6HIR%2FH5WcqDG6LvHKI5qV%2BKdKbOY6sJwEGK%2BKdgn%2BDMAnpT8VUt8wW6U0jAglizggPae08g%2FHnWlN6V11BzwjVD5N18aT8BO3xjCQYWi%2BJb7153un6QaMeM1LfWdiQiwNVj%2BDrOMPiiBzd0vGszWgAaPTtO83JZ%2FMsvHMYiLVgOUkXmbAF36T4IyESw1nj8UGmi96eOl8HlgAJRnJjfe7AsyZU8kV%2FYpQSNcjuuGfpIkb6%2BBltPPJ3JvgPq2V1S0dwiceZif7oWia%2B3bquoYhuPYGkiA9E8Xra4zgeO1l9ERAJnN7SkOMKrDwsAGOqUBgF6yLbL6pS7Gyp39rKk3tT4ikWvFs56SAOTif2jhePLvFTmQkN7CTtRlgr8gnfPMvTUy70dsEbXJhonDBXVidinFCDixjnJpLxsNrEburlUI9vA6%2BtxRDXuZO64LEIcm%2Fjhw0Vw1pxCOlGuA7K%2FIF14tv1j0LtZqq5IO6wkGxGeXTYFfXbgdyRPpbMlWOLReiNux6qscDwbBJh6xVJ40RhlyqJjD&X-Amz-Signature=bf5e6d1352a5960036167923da998e88a542b20c4fa6ec109b8162e3f439fc66&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
