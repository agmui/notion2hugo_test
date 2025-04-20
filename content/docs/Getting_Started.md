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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOWXOWSP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDxE3wzgKEFnciFlA2shoRvaqWroaO6aDmqW8%2B3Zsf77AIhALObarkStTM%2FqReOymcD9clUsdmBo8va4aqVQ3stm5aAKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnVXQmrc4rXR3XYYUq3AOCODfJOcUltf0%2FyyPovsXiI%2BbNibONA%2FehgzWSZxQEC7DmumJTMXo0F%2BLkk81Ca6%2BTwLTrEnoC%2FtrplzZR5eeKMA1K4tvQtUcip1pb1NgGApAc0bgkjG%2FEFrcc3GRfsE76%2B%2BCcv26m5wBGWl5UmDnv%2BVzZj1sJjVlJzsrKC%2B9PjJwDufvpwlDNPJY2AZqokyq9M30qfRrhT2AWVSow2IfKf7jgijTv1NCkmPFIIG5vq9usUTOESCPLPsW5Ani7MALYYg%2BMy0H07qwoubSB9ovXlUJQahnsGmwW3a%2BrK4YolH4HgsT%2Bi7IWrg%2FcnXsaZASkwIwgqxA5OrzvgTHjOyS0S%2BFISXIc8D5I%2Bu%2B6REsXeISF7iSnGnlMVcOT%2BA9gCrZy%2FQdHjhiGcJjFRI4qwg1CfyU1HV8dl9Dunt31BSsXSpLeReJnZsWW8Hc5P7TiHnRldzS3uTy%2BxHpLNqhlgNSjJ7nsBDhTR54qe%2FHgwii4lqY4FndTzhLEhmLQ2uvbi4zc1C6yO859q8h3l4hNtWbglMKumPTqDpVJP0YYGSK%2Box7143jOHMDzeAAB94d%2Bwu3VsNRhiYG8IGE3MNsNbXLOVqBpGYvdhWMqjvEfby%2F5wOvOowXGFL6Lika0pjCD65TABjqkASkMjPmSsYGgK686mCEHCC%2Fk0VTtB9r64kkGi3EUpcw%2BkrxQGFbHED4LG3BBVMYpu5YlDuHSMS7aqr59jXH0Wu2CP3a9l0tpH%2BjS%2F7dd0FSjp%2FdzlFaE2hxAh7dvmckP812WZ0wTsM6ZX73DRuTEOYsBhaUE19YXXCN650SmyoGeJKBk3ODs4R0pSlfx7isCHzmhV5x4Ta4BODXAG8Q%2Bp5dncS3r&X-Amz-Signature=b1951262f10e3328eaa71526c26fdb9afb61e8d9f7e8b728d63fa131736c9ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOWXOWSP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDxE3wzgKEFnciFlA2shoRvaqWroaO6aDmqW8%2B3Zsf77AIhALObarkStTM%2FqReOymcD9clUsdmBo8va4aqVQ3stm5aAKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnVXQmrc4rXR3XYYUq3AOCODfJOcUltf0%2FyyPovsXiI%2BbNibONA%2FehgzWSZxQEC7DmumJTMXo0F%2BLkk81Ca6%2BTwLTrEnoC%2FtrplzZR5eeKMA1K4tvQtUcip1pb1NgGApAc0bgkjG%2FEFrcc3GRfsE76%2B%2BCcv26m5wBGWl5UmDnv%2BVzZj1sJjVlJzsrKC%2B9PjJwDufvpwlDNPJY2AZqokyq9M30qfRrhT2AWVSow2IfKf7jgijTv1NCkmPFIIG5vq9usUTOESCPLPsW5Ani7MALYYg%2BMy0H07qwoubSB9ovXlUJQahnsGmwW3a%2BrK4YolH4HgsT%2Bi7IWrg%2FcnXsaZASkwIwgqxA5OrzvgTHjOyS0S%2BFISXIc8D5I%2Bu%2B6REsXeISF7iSnGnlMVcOT%2BA9gCrZy%2FQdHjhiGcJjFRI4qwg1CfyU1HV8dl9Dunt31BSsXSpLeReJnZsWW8Hc5P7TiHnRldzS3uTy%2BxHpLNqhlgNSjJ7nsBDhTR54qe%2FHgwii4lqY4FndTzhLEhmLQ2uvbi4zc1C6yO859q8h3l4hNtWbglMKumPTqDpVJP0YYGSK%2Box7143jOHMDzeAAB94d%2Bwu3VsNRhiYG8IGE3MNsNbXLOVqBpGYvdhWMqjvEfby%2F5wOvOowXGFL6Lika0pjCD65TABjqkASkMjPmSsYGgK686mCEHCC%2Fk0VTtB9r64kkGi3EUpcw%2BkrxQGFbHED4LG3BBVMYpu5YlDuHSMS7aqr59jXH0Wu2CP3a9l0tpH%2BjS%2F7dd0FSjp%2FdzlFaE2hxAh7dvmckP812WZ0wTsM6ZX73DRuTEOYsBhaUE19YXXCN650SmyoGeJKBk3ODs4R0pSlfx7isCHzmhV5x4Ta4BODXAG8Q%2Bp5dncS3r&X-Amz-Signature=3063e8a1010f8eaf06b4399bad6e653d3764d4ef5ba77068a479837676e168ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY67RTEA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCPoLvAa%2F6%2Bfswpjx%2Blc1cV%2FDi7SehqyzKJyiQDvIhtrAIgDWEzeNbT32i1h1uhWkGx%2FzfA%2BG0vayEpgA4H6FSnEEIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ26YeGZcyXMAjiT5CrcA15HC5JuaN4XV%2FsXGL7rcyrkXKJxKsjVnDE8u0HTe6ary%2BtoddCBhzrhlew7kN7n3IhbBythhE3jhtFtNnalpysQPAKU8xBZHK012cn9mFjwcCKJvdecbDOXTjtfN06%2Bc0vClnolvY032phcGmNR0mhXLoHYlMuhsMH8Rpt77lIOzLgYWap4l2UoSe81tAOA8x82T0j2dzOliz8vN5jSGUNm8OFCBGCAR%2Bq4KDxCbis4NuF%2FBKk03v%2B27De8S3vZJdAdCT3ytU7jSTDkGkRd2VeZ54c9yhCcGiz%2BCUmdwW%2Bcz0WnfHRL3Fi%2BZr8y4zJGgx%2FK%2BtQs6Qxmf%2Bht%2BLfUTjZND5YtYqZ%2BmrU%2B3wRecJSRAMDizxROGZOGJGTwY4deAAC8fmSuUhBIhHq4hD5gbmxmNRvpOyqZlwySuz8K48AK9Z8JQ75JD0BeV4ha5RzbXxgVOplqAXzOQ4ux5eDT95PqdkrzORXWP92d4UqXmMhYvOgYrfpC2QmWn3N2TCk2MnxmRuk5hYZrrdAV0%2B8UoY6E2%2Bd60kTM%2BCcuxQZOuvLvLCY8lzIzEvXHiFYNJ1mKy0z6bHFTOFACAAaKM08ZIL%2FNG3j8zUz8lWXQeGo92AfTlNlHLveMa3UDrN56MLGelMAGOqUBhoeXgqcLLOb8H8rTiYiFQ9hef1pXAefTuF%2BTX5WBg7GjTib%2F%2FoPEnkd9%2BLyUI7OxRlP5omPHtmbviDPe4YNDAxgWvgelfeP7sXpLCFsPlQrc%2Be2La1Uug%2FKcoQnpYzt0PSiw7WMnUBvzxB8bSyRGu2Pv7RNiaONcziuWnE4raGyl3f%2FRivjyE9GbuKR3A2ERsTcC0%2BbawDYqQ4SoUyzhgVCAfQHM&X-Amz-Signature=5898dddaa46cd4dcc86abdb8a192a01e6babd3cd138ae0e2c5caf57898e318f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGRKPCH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIDtTZpwokhP41Oc1Go46y7aGBtxtkhZTVgqUbRKofWjAAiBxSuua9kA2c7PY1aVUIMz5OvhRi%2B0S2rdkfPd1r46uDSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9QfoWlgDnjrbZuDaKtwDf60BQpP1l9bk0s5NAkLaITOeRPXIgsX2%2FtLGcVEVrbYbKCa3fcp3kbxvCzjS8B2Xx0%2FjxwogQVTScWcLdHTuErg2WfccR0sPeliZ%2BDLhhI4JbANM7juEt56JmjQHrwAwkeB5mezVHrhy9MJODJ1asrSfa0UEZn7Vt02qdAqqq0As4HmoZiNVrWSPbo7TmORuy70YdlVp3Cppb395akLt8W6JUggPHbhvl1vuigTtQNu3a4sQdi%2F37WYXAiDJtEuML08%2B8iFILE3grwWA1%2BhGh7bC%2FlvZiFB%2BCQYTcyTZ6LHiTAAUgL62gNMPQky4nJ5em7mVJHsXNjnnYhBPXD3K%2B66bLRnwjlpj7vKREhB0VVMHedfjjBS46hz0DUD0dzIXOp5IXUtqzlY2UQj0UQPXbIYDurvysARFgXw4sKijiodsdouyvbjWtzVvT11yELiRhtg9fRULhY6JlSykDgYIrnhEmVI8BWyWNgsYoJ84vY6xuyJASC4wVUIx0Bp0sLcOBXC7%2FpQ5mgpfw2fe5z2VxqAK9d17X4ZNmIE9faSlbmYgjqjtRAZlXPvhcC2rHtNop%2FDQzQ85Ni%2F1IjoHd2mJHn7gKJU40FfdoRGCl5Z5rEs4bHNgQGpqkz9GqsAw3eaUwAY6pgGXznCEt3ZPpR2bN60sJ8WRKhTQop9wYpXiUaAOM7Do%2Btod6bqcuQksdOXsDj7ELN%2F8wIhajGamLnvXjpYeO9jSzdGdXCfcIl3%2B8DjHFvykMA7j4LUEjR1B3hEL3AHPuMdR57cnKy%2B5eRmGTO4n%2BfBh2Wd6sJFEXYb6SfYSAh%2FVE7vkj8kUHX8dfOe4EYLYmbno6jOXgW9GCPEKDJ8IDWNYaiPU%2FEbI&X-Amz-Signature=4f6a64de29d8a525d4cfdbb2210f74da2b1e7cff07e1226973aa67ab3394a80a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOWXOWSP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDxE3wzgKEFnciFlA2shoRvaqWroaO6aDmqW8%2B3Zsf77AIhALObarkStTM%2FqReOymcD9clUsdmBo8va4aqVQ3stm5aAKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnVXQmrc4rXR3XYYUq3AOCODfJOcUltf0%2FyyPovsXiI%2BbNibONA%2FehgzWSZxQEC7DmumJTMXo0F%2BLkk81Ca6%2BTwLTrEnoC%2FtrplzZR5eeKMA1K4tvQtUcip1pb1NgGApAc0bgkjG%2FEFrcc3GRfsE76%2B%2BCcv26m5wBGWl5UmDnv%2BVzZj1sJjVlJzsrKC%2B9PjJwDufvpwlDNPJY2AZqokyq9M30qfRrhT2AWVSow2IfKf7jgijTv1NCkmPFIIG5vq9usUTOESCPLPsW5Ani7MALYYg%2BMy0H07qwoubSB9ovXlUJQahnsGmwW3a%2BrK4YolH4HgsT%2Bi7IWrg%2FcnXsaZASkwIwgqxA5OrzvgTHjOyS0S%2BFISXIc8D5I%2Bu%2B6REsXeISF7iSnGnlMVcOT%2BA9gCrZy%2FQdHjhiGcJjFRI4qwg1CfyU1HV8dl9Dunt31BSsXSpLeReJnZsWW8Hc5P7TiHnRldzS3uTy%2BxHpLNqhlgNSjJ7nsBDhTR54qe%2FHgwii4lqY4FndTzhLEhmLQ2uvbi4zc1C6yO859q8h3l4hNtWbglMKumPTqDpVJP0YYGSK%2Box7143jOHMDzeAAB94d%2Bwu3VsNRhiYG8IGE3MNsNbXLOVqBpGYvdhWMqjvEfby%2F5wOvOowXGFL6Lika0pjCD65TABjqkASkMjPmSsYGgK686mCEHCC%2Fk0VTtB9r64kkGi3EUpcw%2BkrxQGFbHED4LG3BBVMYpu5YlDuHSMS7aqr59jXH0Wu2CP3a9l0tpH%2BjS%2F7dd0FSjp%2FdzlFaE2hxAh7dvmckP812WZ0wTsM6ZX73DRuTEOYsBhaUE19YXXCN650SmyoGeJKBk3ODs4R0pSlfx7isCHzmhV5x4Ta4BODXAG8Q%2Bp5dncS3r&X-Amz-Signature=7a926df7909892d747c938f95c703ba08099e5ce476cbc3c859e7870e5a6a7b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
