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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HBRKJL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIA%2FxTB2X9NxvJURGZuWtQhEOI6gENZbjTptWZ42bM%2FTeAiBRrqpArhH%2FNNu441nezXXFsWXtGjN%2FcDX1RG1wpGmanyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMd08wvV3xb7LwXPllKtwDcnVm1xu3dvfdQbsZopuss8bXVDLvhh7hAOOv5PHH%2F7RifhdPTJ42Mpn9y746EeC6%2FkQkZBqTXmfR7Pho3Zae6DUJa55AtHZEPVaFM9xghdBncOGFMu%2BZvws5oi%2BL6bLyvmlg5EoJWOFfynyb%2FCaef5ZeseJcRUs3cykEnnTQLtrPq%2BrGjXOjpdJGRl8fC9VSpds%2FPJeW82ev7phra2OZ3%2Bgx5T2W4xZrOgNgixQd6Wm0Ni6ZIde6E9xb4uotIEzBLTjm3fmuWO1s4esx7%2F0ZMHfgfH5ed4Nf5iOqB%2FIeVaYkEzeaD1AJLEE5Lrl7M6ef%2B4RywFM5doHqS3lKtzYa2NEGc9svNS57iLMa%2FmwR0SQcpbIb7UPtvBnIBT9O7Nzruambgpuk5Qnq4HQlGvZFrz8liMDAMpP1R%2BaYlte%2FOgOzagGgeP349YV7nD9ICV9QxwWTZsy9WPH0SAb9hXOj1tXI8PfFO2fzRjGkZbRnyriTOfTtxawqQUR6FsuY7RqwlIiVvq8pi5KLY9oaKUlqGDnu%2Fkjhm1l28BHxSes%2BfF0ZlTHs0tP%2BFp0HYVXk8JUgU04Yb6W2njUGsHylecRDW%2FgQ5l7%2F9gqeOST95wxci7CrtEHj15Tv2XECBXAwopbiwwY6pgGaZrJQiiNSTaQ1gJdslV0FsYu0xCYvrJiugRphFEJAlYKv39bp2Jeb4MovN40G5N3N7PC5WP25GO4rYiwfJBaknfc6jDZmhOBRs0zbF7VLA%2B%2BvqfsX0dvU58Yx1XrwEJtI5OrsXKFvoZb%2Fh3ASoMx50HiPpqKRRp84yZReda7kdVGfIHZp3oNgX2k%2FPR5RadbWDx%2FqkrYVNk16DDSaa6OMR48Ot4vC&X-Amz-Signature=91d14ce0c3f97317a3b29615b5abc2305c028131feac5462203035ba990e8ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HBRKJL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIA%2FxTB2X9NxvJURGZuWtQhEOI6gENZbjTptWZ42bM%2FTeAiBRrqpArhH%2FNNu441nezXXFsWXtGjN%2FcDX1RG1wpGmanyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMd08wvV3xb7LwXPllKtwDcnVm1xu3dvfdQbsZopuss8bXVDLvhh7hAOOv5PHH%2F7RifhdPTJ42Mpn9y746EeC6%2FkQkZBqTXmfR7Pho3Zae6DUJa55AtHZEPVaFM9xghdBncOGFMu%2BZvws5oi%2BL6bLyvmlg5EoJWOFfynyb%2FCaef5ZeseJcRUs3cykEnnTQLtrPq%2BrGjXOjpdJGRl8fC9VSpds%2FPJeW82ev7phra2OZ3%2Bgx5T2W4xZrOgNgixQd6Wm0Ni6ZIde6E9xb4uotIEzBLTjm3fmuWO1s4esx7%2F0ZMHfgfH5ed4Nf5iOqB%2FIeVaYkEzeaD1AJLEE5Lrl7M6ef%2B4RywFM5doHqS3lKtzYa2NEGc9svNS57iLMa%2FmwR0SQcpbIb7UPtvBnIBT9O7Nzruambgpuk5Qnq4HQlGvZFrz8liMDAMpP1R%2BaYlte%2FOgOzagGgeP349YV7nD9ICV9QxwWTZsy9WPH0SAb9hXOj1tXI8PfFO2fzRjGkZbRnyriTOfTtxawqQUR6FsuY7RqwlIiVvq8pi5KLY9oaKUlqGDnu%2Fkjhm1l28BHxSes%2BfF0ZlTHs0tP%2BFp0HYVXk8JUgU04Yb6W2njUGsHylecRDW%2FgQ5l7%2F9gqeOST95wxci7CrtEHj15Tv2XECBXAwopbiwwY6pgGaZrJQiiNSTaQ1gJdslV0FsYu0xCYvrJiugRphFEJAlYKv39bp2Jeb4MovN40G5N3N7PC5WP25GO4rYiwfJBaknfc6jDZmhOBRs0zbF7VLA%2B%2BvqfsX0dvU58Yx1XrwEJtI5OrsXKFvoZb%2Fh3ASoMx50HiPpqKRRp84yZReda7kdVGfIHZp3oNgX2k%2FPR5RadbWDx%2FqkrYVNk16DDSaa6OMR48Ot4vC&X-Amz-Signature=7855580d3773a24b54d9a8109c31ef0e059ef0dc6976336d3a30e880fbca5895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HBRKJL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIA%2FxTB2X9NxvJURGZuWtQhEOI6gENZbjTptWZ42bM%2FTeAiBRrqpArhH%2FNNu441nezXXFsWXtGjN%2FcDX1RG1wpGmanyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMd08wvV3xb7LwXPllKtwDcnVm1xu3dvfdQbsZopuss8bXVDLvhh7hAOOv5PHH%2F7RifhdPTJ42Mpn9y746EeC6%2FkQkZBqTXmfR7Pho3Zae6DUJa55AtHZEPVaFM9xghdBncOGFMu%2BZvws5oi%2BL6bLyvmlg5EoJWOFfynyb%2FCaef5ZeseJcRUs3cykEnnTQLtrPq%2BrGjXOjpdJGRl8fC9VSpds%2FPJeW82ev7phra2OZ3%2Bgx5T2W4xZrOgNgixQd6Wm0Ni6ZIde6E9xb4uotIEzBLTjm3fmuWO1s4esx7%2F0ZMHfgfH5ed4Nf5iOqB%2FIeVaYkEzeaD1AJLEE5Lrl7M6ef%2B4RywFM5doHqS3lKtzYa2NEGc9svNS57iLMa%2FmwR0SQcpbIb7UPtvBnIBT9O7Nzruambgpuk5Qnq4HQlGvZFrz8liMDAMpP1R%2BaYlte%2FOgOzagGgeP349YV7nD9ICV9QxwWTZsy9WPH0SAb9hXOj1tXI8PfFO2fzRjGkZbRnyriTOfTtxawqQUR6FsuY7RqwlIiVvq8pi5KLY9oaKUlqGDnu%2Fkjhm1l28BHxSes%2BfF0ZlTHs0tP%2BFp0HYVXk8JUgU04Yb6W2njUGsHylecRDW%2FgQ5l7%2F9gqeOST95wxci7CrtEHj15Tv2XECBXAwopbiwwY6pgGaZrJQiiNSTaQ1gJdslV0FsYu0xCYvrJiugRphFEJAlYKv39bp2Jeb4MovN40G5N3N7PC5WP25GO4rYiwfJBaknfc6jDZmhOBRs0zbF7VLA%2B%2BvqfsX0dvU58Yx1XrwEJtI5OrsXKFvoZb%2Fh3ASoMx50HiPpqKRRp84yZReda7kdVGfIHZp3oNgX2k%2FPR5RadbWDx%2FqkrYVNk16DDSaa6OMR48Ot4vC&X-Amz-Signature=b87c961d008790fbb7ef649abb45a9ca018b8496a87e0899ee91a6b5d351690a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWE7R2D6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQClXr9D3OLVgjaByl%2FYSnVigGvYvJaHVcWMOTYUIiBVoAIgU8NQ7c6PMGa0I5Vac0PpVUOUEXj3i%2B8vfCMXv%2FL8ugMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDI69Qjf5tNsqcnC5qCrcA9%2BI7MDo%2FcY%2Bjwi1HVc15vKiK8pPkN5Kezdnw098zeGK1or91755jZtai8uombE0wqIizApe9sES8LXUPJoMijlEICKxcGtDb3vtKJdx7UzgGDNQ1oiNXmVcerzmqr89EH2GJ5E1%2B49ZbcaxAnPUVGkQsIoBymIpppX8S2Xo9ld5z9xT0mXTtxrxFCQmucg4OEefFzZQigqJlCPnCmDe654vI9EABPvgFiBGflwq4uZ86OHwjGXar%2FJsml6TR8WbOrR6Syf3Ifwp%2B0NTBvtd50fDmxQ2h6XYDSGhe3g2263kUHVZHhLkN4UCGzn9H0UxfRzzCUmXiFLTDKzGldj7HsLIwFK%2B6wv5mn3V79nAC9KWJiskVwhFvdU9c7nNW3Diaf0ocDRtqKIsZtJtTVr6SmIjV%2B9AiPfNuUx8fNBrQgfCYNs%2BvzpfRAH82WPCYKDGp%2BR9rI4Nzg%2F%2Bzd6lkQD%2F1qZioXZMSBUSDXMYKVChcxwg5wf%2BM5BqzDc09VQrLbruVIHlGO2zowOorOCNFuKrNLpH4fO03OT68V1MmobwqW1wIY3J7G6jjJADKk7fjC%2B89K92Kl5Nw7%2BXbog8kcNnrNqmow7ASGVINWIG8hsI%2FIffnQFZqUpmZFrCeOZoMIeV4sMGOqUBAPaZgRVi2mUiu8GgLFA2vs2EFr6sCwGIItj06AbXYgnocSzH5enkSC8mwjSfCEsn%2BOYaqjVZ23heHgOBS7hXgGEZhHbd1DJsNCYG4N0hM1mbK8aMZJW1LR1uh2ruy%2B4gFNhGcoG%2BNxtBmO5U8E8s88VD48q0a4Fvp%2BMYLfrhJY%2FFU8JYAJOl4sVqy9fYQhu2i3jxkZBLUG4exQrICGzMLdbccdnP&X-Amz-Signature=6af31dab06f95aa14e73c28df266023e309e36d9134249fb267f6059ef60404c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VBQD4T%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDu0PtQnrWx1IUj5mYiC8nsq8JfAoni3O9XOjO4mwbISAIgZmyblrlDpLDEDk9LHJM3uiFcs4UsmvTSKt8fPAz16zcq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGujfiHVRHAV3nKRlSrcA1h4iV9kqoYu9KJ3AMR%2Bm1KYz%2FlhwUY8uYfck8hEFCHm80KPR3NCCHTniR3X6kjXu2PPzZheDb3ctpXAty0m6vxTVW021KOLjXOnkCgvT1OeeW4S1WQAI1dS8XEsLqVMszqlQurqyrB8RhtG1fwFRmcw5zCUmFkUt9mXbjqwnUjzY00YCLrBMQFWhzxNW3QCWGVG%2FIyu%2FnMZmUUfAoHvU2iqqOEn1D%2BSKMFWHbWZ6vhAJcyrgJp4fzVerdrtj4lc372I2ommxGcmozDx7np1uBbtICF8%2BAFKBzszELWrvLqbNJDbHdaOc%2FbX%2B9CoXD3NWVb%2F968%2BSZez71TFW419ILeZjCXi3zCsPv9AXbeH18XJu5xY5xNWrt8UWs6s4ebLB3LGbwtt%2FpwKmOan8oj0WipH%2BEy4L5cz996FP6uIMsxwOgHwwXdn8S6sEsRatCYgRIlHyoOJiq0Kp48j9qYJVYFlsVd1u%2Fz6Jfp%2BsYXYwvQnsTDsy7B%2BV9lsn7mflWzW8IUM%2FLmkXXSWmcYRhsrib5XABu5nHHhT1b%2B8nKeMlG268JfyXxqK%2FCqX%2BWmLgRD8C9wbwKofH5aBNIYWzWwWDUywro7fYzq57C8NxiA6C06e%2BT3ml7nCJwG8g%2BCtMIKW4sMGOqUBMGTMkVAQy53DTS0RZbWXLXfdN737Ksqm7ZUXrh%2FiM4TRrgMJ9nhnZ6j0mAWWOHBC8KDSXInY08sCtHIRt9ea%2Ff47xa%2BQDDQioKsBcwoeqttPTZLjMqcsrXlEt7Ze8NJ7rLoz636k%2BytqDwn2QsbP%2FJKynurIIPFon8UzzP9cxjgiVIGSeglQlxGm%2FhaHmRSBj63cqzN%2F3r6EkIgcdjefKVpuzs%2F%2F&X-Amz-Signature=95b1c0eed7e8835fcad17bce5acdc1e785a1f9a02ecff846c753a3d234212922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HBRKJL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIA%2FxTB2X9NxvJURGZuWtQhEOI6gENZbjTptWZ42bM%2FTeAiBRrqpArhH%2FNNu441nezXXFsWXtGjN%2FcDX1RG1wpGmanyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMd08wvV3xb7LwXPllKtwDcnVm1xu3dvfdQbsZopuss8bXVDLvhh7hAOOv5PHH%2F7RifhdPTJ42Mpn9y746EeC6%2FkQkZBqTXmfR7Pho3Zae6DUJa55AtHZEPVaFM9xghdBncOGFMu%2BZvws5oi%2BL6bLyvmlg5EoJWOFfynyb%2FCaef5ZeseJcRUs3cykEnnTQLtrPq%2BrGjXOjpdJGRl8fC9VSpds%2FPJeW82ev7phra2OZ3%2Bgx5T2W4xZrOgNgixQd6Wm0Ni6ZIde6E9xb4uotIEzBLTjm3fmuWO1s4esx7%2F0ZMHfgfH5ed4Nf5iOqB%2FIeVaYkEzeaD1AJLEE5Lrl7M6ef%2B4RywFM5doHqS3lKtzYa2NEGc9svNS57iLMa%2FmwR0SQcpbIb7UPtvBnIBT9O7Nzruambgpuk5Qnq4HQlGvZFrz8liMDAMpP1R%2BaYlte%2FOgOzagGgeP349YV7nD9ICV9QxwWTZsy9WPH0SAb9hXOj1tXI8PfFO2fzRjGkZbRnyriTOfTtxawqQUR6FsuY7RqwlIiVvq8pi5KLY9oaKUlqGDnu%2Fkjhm1l28BHxSes%2BfF0ZlTHs0tP%2BFp0HYVXk8JUgU04Yb6W2njUGsHylecRDW%2FgQ5l7%2F9gqeOST95wxci7CrtEHj15Tv2XECBXAwopbiwwY6pgGaZrJQiiNSTaQ1gJdslV0FsYu0xCYvrJiugRphFEJAlYKv39bp2Jeb4MovN40G5N3N7PC5WP25GO4rYiwfJBaknfc6jDZmhOBRs0zbF7VLA%2B%2BvqfsX0dvU58Yx1XrwEJtI5OrsXKFvoZb%2Fh3ASoMx50HiPpqKRRp84yZReda7kdVGfIHZp3oNgX2k%2FPR5RadbWDx%2FqkrYVNk16DDSaa6OMR48Ot4vC&X-Amz-Signature=3bdda358622f0b9248fe0b567f2a1c260d75742ae115f6e7a8f782e5968fd6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
