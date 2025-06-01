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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKNJ5VW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICddwQyhiJhKXfDZZVU9PxFJ5EB7yLQoBC9fASZZWbXQAiEAlcqZM%2B9anjOBKyJACdX%2FH%2FeWf8rd11hVpj%2BdcKGKfWkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4GfKsNaVieX6rfGyrcA69bS5JhLvJNlHHXIrPF8pfR64jvVTGab66qjAv0srtucBmzvBbO5SczDu086juLZ649BkwgUQtjGAP%2BPZuyGrqihjm1T9r0a4g3B4%2BL%2FtHkP6MKYX6vogR5CW4H%2FdG4DZXktJTwFsDnvlroKN1lYtVAMLAC%2FTlYa4WjbW1OcwjT6nwmXEpavjyclFqc5gjReUgne0CFe4joGdXJYmiqAHRd77tCGQyEFXiX72dFdf9HMcYBd7nkFZst%2FVYRoLVOd%2FdtoLN73UDBwWwtZbigka2m4n9Cfwb5LSCKEZopY2UqtoJBtOwYhn0mqbeBddq%2Bjh5JsacdCmwsjAjF2G%2F31YNWDx6bk5D%2Bp0KBrvK1MC5R5U9mjRDnU0WaSwfT1ydMWfdAAFqT4RX%2FcF9NqQ3GZVKLGnAnYJoTJDUfQk9RLVz5HXpfJyi%2B7Grgs8462PwSdTo%2BQh0r5Uf%2F0pWi%2B%2B45SkFXCvCBp6g2p7J3rnJF2z3YwcM17jhsybYkPCmrEbmo8Vz4Drd3%2FIFTHNKlfGsJCAEoUlNC8pcsHCPxvxgKIDkKujSol%2B7s2TP4aNKDSajS6tVqWjetJ8TkKmtdLYBcce7coX3%2FGkz4J8sga%2BLUzDbtAwYHrHLKas%2BpG0feMLWA88EGOqUBIXzPQBSw5Tjo5ZW%2BzVprbcVrocnxOzvaAgksmcLqz3ff%2FwQ4pr0VM%2BDNHnUR%2BlpOGA0zrAf4swWu%2F%2Fjs6K7wAhGomG34L8XPvTX9TGrqFTDds9ts9ogb66%2BakLsc2ZcvTFx6hYgDpJHcDvWQRe4248FqG%2B43Kh4cmgeN9FLqJOWOEHc5cbF5LSwEJer24CC4dBjQTxJKvUVxqAJOxd5wBqQnyFpf&X-Amz-Signature=3b6d4899ac0eb6ac174a32565ad17d29830bf09e8b10538c8bc08f48f00c38c0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKNJ5VW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICddwQyhiJhKXfDZZVU9PxFJ5EB7yLQoBC9fASZZWbXQAiEAlcqZM%2B9anjOBKyJACdX%2FH%2FeWf8rd11hVpj%2BdcKGKfWkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4GfKsNaVieX6rfGyrcA69bS5JhLvJNlHHXIrPF8pfR64jvVTGab66qjAv0srtucBmzvBbO5SczDu086juLZ649BkwgUQtjGAP%2BPZuyGrqihjm1T9r0a4g3B4%2BL%2FtHkP6MKYX6vogR5CW4H%2FdG4DZXktJTwFsDnvlroKN1lYtVAMLAC%2FTlYa4WjbW1OcwjT6nwmXEpavjyclFqc5gjReUgne0CFe4joGdXJYmiqAHRd77tCGQyEFXiX72dFdf9HMcYBd7nkFZst%2FVYRoLVOd%2FdtoLN73UDBwWwtZbigka2m4n9Cfwb5LSCKEZopY2UqtoJBtOwYhn0mqbeBddq%2Bjh5JsacdCmwsjAjF2G%2F31YNWDx6bk5D%2Bp0KBrvK1MC5R5U9mjRDnU0WaSwfT1ydMWfdAAFqT4RX%2FcF9NqQ3GZVKLGnAnYJoTJDUfQk9RLVz5HXpfJyi%2B7Grgs8462PwSdTo%2BQh0r5Uf%2F0pWi%2B%2B45SkFXCvCBp6g2p7J3rnJF2z3YwcM17jhsybYkPCmrEbmo8Vz4Drd3%2FIFTHNKlfGsJCAEoUlNC8pcsHCPxvxgKIDkKujSol%2B7s2TP4aNKDSajS6tVqWjetJ8TkKmtdLYBcce7coX3%2FGkz4J8sga%2BLUzDbtAwYHrHLKas%2BpG0feMLWA88EGOqUBIXzPQBSw5Tjo5ZW%2BzVprbcVrocnxOzvaAgksmcLqz3ff%2FwQ4pr0VM%2BDNHnUR%2BlpOGA0zrAf4swWu%2F%2Fjs6K7wAhGomG34L8XPvTX9TGrqFTDds9ts9ogb66%2BakLsc2ZcvTFx6hYgDpJHcDvWQRe4248FqG%2B43Kh4cmgeN9FLqJOWOEHc5cbF5LSwEJer24CC4dBjQTxJKvUVxqAJOxd5wBqQnyFpf&X-Amz-Signature=64418db1671cdd34ec1db3af14e8e69f7df2c7c0a8d0233d0c2d6f99e181354e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKNJ5VW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICddwQyhiJhKXfDZZVU9PxFJ5EB7yLQoBC9fASZZWbXQAiEAlcqZM%2B9anjOBKyJACdX%2FH%2FeWf8rd11hVpj%2BdcKGKfWkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4GfKsNaVieX6rfGyrcA69bS5JhLvJNlHHXIrPF8pfR64jvVTGab66qjAv0srtucBmzvBbO5SczDu086juLZ649BkwgUQtjGAP%2BPZuyGrqihjm1T9r0a4g3B4%2BL%2FtHkP6MKYX6vogR5CW4H%2FdG4DZXktJTwFsDnvlroKN1lYtVAMLAC%2FTlYa4WjbW1OcwjT6nwmXEpavjyclFqc5gjReUgne0CFe4joGdXJYmiqAHRd77tCGQyEFXiX72dFdf9HMcYBd7nkFZst%2FVYRoLVOd%2FdtoLN73UDBwWwtZbigka2m4n9Cfwb5LSCKEZopY2UqtoJBtOwYhn0mqbeBddq%2Bjh5JsacdCmwsjAjF2G%2F31YNWDx6bk5D%2Bp0KBrvK1MC5R5U9mjRDnU0WaSwfT1ydMWfdAAFqT4RX%2FcF9NqQ3GZVKLGnAnYJoTJDUfQk9RLVz5HXpfJyi%2B7Grgs8462PwSdTo%2BQh0r5Uf%2F0pWi%2B%2B45SkFXCvCBp6g2p7J3rnJF2z3YwcM17jhsybYkPCmrEbmo8Vz4Drd3%2FIFTHNKlfGsJCAEoUlNC8pcsHCPxvxgKIDkKujSol%2B7s2TP4aNKDSajS6tVqWjetJ8TkKmtdLYBcce7coX3%2FGkz4J8sga%2BLUzDbtAwYHrHLKas%2BpG0feMLWA88EGOqUBIXzPQBSw5Tjo5ZW%2BzVprbcVrocnxOzvaAgksmcLqz3ff%2FwQ4pr0VM%2BDNHnUR%2BlpOGA0zrAf4swWu%2F%2Fjs6K7wAhGomG34L8XPvTX9TGrqFTDds9ts9ogb66%2BakLsc2ZcvTFx6hYgDpJHcDvWQRe4248FqG%2B43Kh4cmgeN9FLqJOWOEHc5cbF5LSwEJer24CC4dBjQTxJKvUVxqAJOxd5wBqQnyFpf&X-Amz-Signature=77e2e59a323f181b4384df4a7134e18b8a6b291e2096e3031ed266224825533a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWITFWTF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCgAvcsAlRfNDM24x9zT9hTv1YcYgGkul%2BCteZi44VdUAIhAMmUSrIo5nlawJJ4Zvfxa9vx8BSMYSbKgCLhiVwuLfc7KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq5HJMnJd%2BhaKkdVIq3ANu0frAJ7IMm9wZj2HhzPZZGbm%2FHmR3OkeQ62%2Fo1VIy9r817%2B4nQRvVADK7Kod7drcuB2sfnNdYgqNk47Llw%2BbK9Gjarzx9R8ReBxh2W1IHcQ%2BvyJGMMO2sMZltyfWDLU5p7I9%2FKLlDxOUtJb7mQ4TAw37KYJEqWIqocVqQ7eLjalX8WaOmsjNELAXchUm2JSBj3FI%2FfcP2aQP8moHiXbuCKgoI3i2sCZGpUqaOZ0Krb5EGzS%2BKrsvVw2Q%2BSJmdu5J9m66PLyZARvJ18YpXV0fcb%2B5kFlsgTuN8AGCNMUsoCF%2BrgmqVcYJA8%2FWhpruhah5vtu3GHT71pDwpDRnOMbDKrbAuQ1iQUjjDKFTAsIFBUg3uhXB0cVgWKIpmolxSEr%2FRcF9%2BQWVPiDGe1Q8gWu%2BgfStpUR5bur%2BMydLWAEavwKDkFgkkt1wjxl3VjiKcJCdunIXpQmXKOTJHyqsNlv9wbDN2QGQwuzoo0JDkY%2Bh5jDLbRCFQlr1i85FLdd0r2O8cgp8h%2Bu9jaCMLg0AxrUMaBSs%2FzW4sPQSsVHIOTMmCQ83rWWxxJQ0yhzMg1C2vH9rerPG4dfOjuW8Iu8br8zw6vZpSso73MoGntG2uSA2pPTU9sqygxm09lR9nBzCjgPPBBjqkAZJ8NYeMP3uefFk9kLf2BRrL7EyoKsJ6%2B90Ce%2BOCy%2BixAFeu77ve7PWUqRLJFm982D%2FDWsrWfU%2F7K4yVOJeXGcQ0V81XsDNpl4tmgeMU3CgoVof08rGFvA8kSit08JyQWteFHB5d3gx2kLHjYpUYcH9iWKOfrVh1CbXIPw3BqOXedk6kuh1I2O%2BHWcuW2wrJ9bBqAQ0qEdq5mkQXsV%2FcC7XveA6u&X-Amz-Signature=42faf02a6a056b038836c45c233d426bbd91665e9285c4fe6d874b2a7ebb6349&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DLPZ377%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGiCe6%2Bh9ZGA9gQcmgl82RtYCnCtjMjETW4I1TD4wjsWAiEA5INL2SPKM2VN4DUkC8ko6kRp%2BDoa8OuiG5CqojVOWoEqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZQKTQBZDaxlR8nqSrcA73MLLL9iDOD6GOXHSpR1Rwb4InIxNrgYQ56Vip8YJV5p1HKTFte5%2BCDmlTuMARuX28a3LkQLDZwS9xphiYaY7%2FX98wrHth5dtw1TFROY7uCCTXx%2Ba97%2BS%2FkeX3MtzEqJOtN%2B6ba6FlmnX3yxq8b3ALozH%2BnWNk4NN65gJeYYGnoD1vJPH1s1Ad8AXqAVaLxWNxDpIK0yY2tTYMjwZDa9tkkGvnCiCzDNz%2FK0vH4uzDy6dMhuVDhnOarQL%2BIkHY6%2BJIXkSj7nM%2BGXW7F40OYigRFo%2BY4dDe9ah6ClK3UQsjgjfCRdJho%2FMcJJRKYzyv%2Fx0P3JM%2FeHDNg%2F5PAuAhuHnNlYZeKEH4WvEJkgaltllyGvBZDsa8DzC00B3ValhxB9Oz9U80TN0iL8IHiYmdvXyQ4Xy3RNyMJ65s9hUGsMJc4nohPgbdrV1aI4hkWIDRr1jbOgUaJOe3Q4zuGB0mC7P19wjeUofvTdQdi51ELd0eR%2Bjmb9GgtHylS2jtAztx2q4zYymHxSFVYlqwOe4guZKMOqAVMVcyJ1x31r16y0E30sKibdpyapjzU3gBW9uInZtyMfbfGzTUJsyi%2Br0N2OZntywbfLkWxG8YjsDb3A6ciejFmxC9jHKH90X8%2BMJqA88EGOqUBMcIg0svEiuVrb0nGTq0IwKdTf%2Fm5duoN%2FZzWLxV8%2F0yvcuWVqrO%2FdP9arAhZIBmiWYtn7f0S2OmlErUcCA23euX97suxNSnlT8io7zYJy3nJQIGuunQxoxYFa8vR5wmsL6db2yN%2Bq4upGaMDKyZDvHLi6C3SkquqI2kSlacSnZTgyL3Z6cxzbZwuevVGtNYVLM7bp02onaDaErIm655NCFPkhwOc&X-Amz-Signature=b87aa2605a72411c3fab20674aae719094785b082a90da4d92836b81215a8c60&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKNJ5VW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICddwQyhiJhKXfDZZVU9PxFJ5EB7yLQoBC9fASZZWbXQAiEAlcqZM%2B9anjOBKyJACdX%2FH%2FeWf8rd11hVpj%2BdcKGKfWkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4GfKsNaVieX6rfGyrcA69bS5JhLvJNlHHXIrPF8pfR64jvVTGab66qjAv0srtucBmzvBbO5SczDu086juLZ649BkwgUQtjGAP%2BPZuyGrqihjm1T9r0a4g3B4%2BL%2FtHkP6MKYX6vogR5CW4H%2FdG4DZXktJTwFsDnvlroKN1lYtVAMLAC%2FTlYa4WjbW1OcwjT6nwmXEpavjyclFqc5gjReUgne0CFe4joGdXJYmiqAHRd77tCGQyEFXiX72dFdf9HMcYBd7nkFZst%2FVYRoLVOd%2FdtoLN73UDBwWwtZbigka2m4n9Cfwb5LSCKEZopY2UqtoJBtOwYhn0mqbeBddq%2Bjh5JsacdCmwsjAjF2G%2F31YNWDx6bk5D%2Bp0KBrvK1MC5R5U9mjRDnU0WaSwfT1ydMWfdAAFqT4RX%2FcF9NqQ3GZVKLGnAnYJoTJDUfQk9RLVz5HXpfJyi%2B7Grgs8462PwSdTo%2BQh0r5Uf%2F0pWi%2B%2B45SkFXCvCBp6g2p7J3rnJF2z3YwcM17jhsybYkPCmrEbmo8Vz4Drd3%2FIFTHNKlfGsJCAEoUlNC8pcsHCPxvxgKIDkKujSol%2B7s2TP4aNKDSajS6tVqWjetJ8TkKmtdLYBcce7coX3%2FGkz4J8sga%2BLUzDbtAwYHrHLKas%2BpG0feMLWA88EGOqUBIXzPQBSw5Tjo5ZW%2BzVprbcVrocnxOzvaAgksmcLqz3ff%2FwQ4pr0VM%2BDNHnUR%2BlpOGA0zrAf4swWu%2F%2Fjs6K7wAhGomG34L8XPvTX9TGrqFTDds9ts9ogb66%2BakLsc2ZcvTFx6hYgDpJHcDvWQRe4248FqG%2B43Kh4cmgeN9FLqJOWOEHc5cbF5LSwEJer24CC4dBjQTxJKvUVxqAJOxd5wBqQnyFpf&X-Amz-Signature=c254716906eb6ebe6242919008ad9f381055f5c6b13885a5b85d3745396e994b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
