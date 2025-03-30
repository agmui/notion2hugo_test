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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664447LPWK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEITmOwswwb4%2FS5Hxm51YwH9djgxvA9%2BNM8Oy9NezN63AiA77r32bhRIjG1K%2FT4M52VkVtDwVWB%2FRWfaFySrLJ%2BEkCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNGcMsJV8feS2ySvgKtwDg4uiBg9rJZya%2BIhUEKlgGrRURTg1jgY11KXwscusWuNIOGMTQjM3W2A0Vd8PYr1vZv4edXFvbUMbsttEtg8%2FcWXcKPdo64HgQj0lfh3%2FCq6niojfz7Wqix2XLFPv4tT7toVNWoNbwRuehZ1g38B7bhhOGpHLcuBiFEuuFiaR%2FFVimhelfdWBbL0q55y3%2BbNzYLoAapuQYNrygjgWO6TCKsEGz%2FNw%2BpHrZkmkQgIo0I7ln0BO5ocg%2FiyhW3gPKeYc37jjfZG%2BET7rpZtytSnBfeZVAyx0vqmvGyCy%2FLMb3ATYNZvT4u8H26ELX%2FqCqAJWZOGEW7sdPaKqemUO0wLl0D6Z2P3Qt1OSvRguEQFUfZG4oYwSBGhGwhYsdgEUb%2FlFlMa%2FDy04RZqNbX0%2Fsq1LyaTBIx39eTtX%2B4am1CMFf1UZE4HzDcoORAMngJRpqzaEkpvLeg3qc4o4a6Jizk8icwoQC0RdaYCaUjIl2GgGBIlqkT7tbAP1%2BXsCyYtsb4Hxctd6hL44dktu21mo73beRH98i0EjkWfEhrZ3sG%2B%2B%2FeJ5FRt6R%2FDMZ9BHiXnVqTlw3jc6mJ1Chs44lX5AQW8vOybRYdoCOuNgPEbebRrkrgs2JKnQZuBm0a7DDZkwoe6lvwY6pgEzT%2BuQRWUXriIPl4ZZ53x9FogwXmaKdoLBV%2BHjbG2j8%2FjopIhLvMjIdM2vw6V5fFQyhtk4wIDGff5Kuk6cKc8Tp9OvO3Q9ZzoIRJveibV58ezENoIwLTtkbYJaSPxRIDQWCf6TkwnSmhZHA%2BR%2B9%2BqaPTeHRQftZMKvxAMaV3EpnecLnYmfIbCJBXzlJgg%2Fmjv4MpBBWuq19QTjWifCxIYQxOHRANiD&X-Amz-Signature=0488db8d4697fd5cc5c22dfecf693bce89ab8e80d3a19d00289bd6fa86f743c7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664447LPWK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEITmOwswwb4%2FS5Hxm51YwH9djgxvA9%2BNM8Oy9NezN63AiA77r32bhRIjG1K%2FT4M52VkVtDwVWB%2FRWfaFySrLJ%2BEkCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNGcMsJV8feS2ySvgKtwDg4uiBg9rJZya%2BIhUEKlgGrRURTg1jgY11KXwscusWuNIOGMTQjM3W2A0Vd8PYr1vZv4edXFvbUMbsttEtg8%2FcWXcKPdo64HgQj0lfh3%2FCq6niojfz7Wqix2XLFPv4tT7toVNWoNbwRuehZ1g38B7bhhOGpHLcuBiFEuuFiaR%2FFVimhelfdWBbL0q55y3%2BbNzYLoAapuQYNrygjgWO6TCKsEGz%2FNw%2BpHrZkmkQgIo0I7ln0BO5ocg%2FiyhW3gPKeYc37jjfZG%2BET7rpZtytSnBfeZVAyx0vqmvGyCy%2FLMb3ATYNZvT4u8H26ELX%2FqCqAJWZOGEW7sdPaKqemUO0wLl0D6Z2P3Qt1OSvRguEQFUfZG4oYwSBGhGwhYsdgEUb%2FlFlMa%2FDy04RZqNbX0%2Fsq1LyaTBIx39eTtX%2B4am1CMFf1UZE4HzDcoORAMngJRpqzaEkpvLeg3qc4o4a6Jizk8icwoQC0RdaYCaUjIl2GgGBIlqkT7tbAP1%2BXsCyYtsb4Hxctd6hL44dktu21mo73beRH98i0EjkWfEhrZ3sG%2B%2B%2FeJ5FRt6R%2FDMZ9BHiXnVqTlw3jc6mJ1Chs44lX5AQW8vOybRYdoCOuNgPEbebRrkrgs2JKnQZuBm0a7DDZkwoe6lvwY6pgEzT%2BuQRWUXriIPl4ZZ53x9FogwXmaKdoLBV%2BHjbG2j8%2FjopIhLvMjIdM2vw6V5fFQyhtk4wIDGff5Kuk6cKc8Tp9OvO3Q9ZzoIRJveibV58ezENoIwLTtkbYJaSPxRIDQWCf6TkwnSmhZHA%2BR%2B9%2BqaPTeHRQftZMKvxAMaV3EpnecLnYmfIbCJBXzlJgg%2Fmjv4MpBBWuq19QTjWifCxIYQxOHRANiD&X-Amz-Signature=9dfdd98bc16721ab61d0488b5c48b55d43f64f97b73cf8b334ba18809c745dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBAEZKNX%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBJRn%2FC7n0j9DdC3hUPd8aJPaGD7UrIz2ecIHVE2FdBmAiADeE9E3I3AvGo0IVwqwAdRQ4bdH8wVmhZzFUIF1H58riqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY1UQxKso4uEGPDVXKtwDn5KugLMEVFeuCXY8ksCGx5wbgGG5oyydS0YrWM%2BiqOj%2F91Zib%2FKDHPRPBQgzPZ1WeuRcKOoFmeG1sipkvOReDVbvK45FOIf%2BjDo966OtLKfP3OsfAZH4s3%2B%2FnV8%2Ftzl3qX4SVKwrKFBjfZy41ig8EKecEdfj8u5KUhtS7TscuONYZDkBbZHswyp5ddCj0dqTz6Fv%2BV9Z9iGuaFiX9pnE%2FRCZ%2BZkFNxSefaktvrPv4iIKeLzgKbhFDXL3f1kNBJVjEHlkcUK22ELLDQGMrdgNeDCjBYKA0iUxSWnWk6jupFKzps3F0cJSzkgPnubLO%2BDQqwqkuy3v8MSNkz0J8A1JtGhwtyBBYft2M3c6hpKqbmFdxj1cyhiHDZPGE4nsZWVkcMf9zB0TxTsPXM5xGFC6B5DcJUsNcoFUOGTsyx%2F53lgteTlCh0WhMAPvcb4p3%2BeskbjFupW%2FsNa7%2F0KsLA9I1uUg0Ci9C6L9uLkCZcbhrHwEkf%2BD3WFOAYOvo3vpoMQ%2Fb2wuGqje6c56Iq6PbOAezclsm3tznDkmJvgcgzLsMS7AoEYLcGkGC6%2FYoQUvkcEkP%2By5J4nsvNwWY1JUx8Cui%2F3yIik9AXTe4OPnWtqon%2FmmqEskrGr14v%2BS5lswje6lvwY6pgHsYqVAc19rHtEJVnozxWjGdTUxUUp1yH5hO9HMIvsFPEhVuC7T%2B%2Br9S4KIOACpZ7YK3LxR3Nk59D3GVI%2FVu4aX6uRPTe2JGXNYccVVl%2BtPcpVj0f3s85Cv1gPo6mcwtWjCLn2YXWbA3n0woFhdAfFZ5ERNwjGbt2zwuoHTO4Me3jG1%2Fn15hskGBoCISutDTjb1B6JlyNxApO1SeS1N6CkhBGRAYRC1&X-Amz-Signature=61f48d4bd363b06aa3542672f98379a66aeac62df7421987263bd2d21b8a033f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J3UJGU3%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAt9dPbgaOBr2HTD%2BGBmsr%2BbB4RpmEXHQ8ZF4Nso1b63AiEA2FIDLg8THIvA1fefxl1t3RwCb%2BVkM9qOeMnE7hLkhsUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwYjBzJCwhbqPK%2BESrcA1OKLuS4h9gpogZN3sdX7BHPjZoT1f%2BkxxLRBjM8MY0JNzaHBaZBKrHyzvRPMn6QQbJNI39jZe0aZq0aFQbfdGrboubyWbiiEca4CcOVl5zlNx%2BuQITSVEWZBi9d%2FzgMdBpyRaKzGc4XkpHRQIxxknGo8vQCO9Lb5qe%2BgLsUYmGUOPhkd%2BDiHv8yhqQN90eunrHaSPIeioRmpqHjwdDWz9NvCQ%2B%2FzK7%2F%2FahhsT2OG8CVkIOB%2B4Q7BkvCrH4OsdgWFSr3v%2FdAhwTIUx%2FWjZ4yZm55odicQzV%2BsrhogyTmjzyGDcdyWvXmN7Jx%2BWac%2BckAvL9ilGve3Jxm3V216%2FEvp8cGlCajb0EnNKdLn0rHqpBqiq10uZeRHgcCNZgtcOZGgTOgye6JHwVNmVI5Cj9bX3M8XJ2vwAXp%2BvhGprpckbTjClBvupftOIZg0yBKMBkfq9dT6PSmXiM72wiksm2h9oBgP00dIuj%2Bpz%2BlzBQsNmWpFnNYbuOd42IUeOcEUTLALCtnafyfnpeEKmrFSFFYXEaVqUgw8B4JA3X8rS%2BMjRXsx3MQScFIrsh8fncq8uuE7B0OGSeg0rbyNwXIhK2x%2FPNJACg1St4KjSHbyT%2FnZ8ZQ6O0UX1KBXiBhiFqIMIPupb8GOqUBijT6mjlJ8EReCYBBq6LaNaIs9sKSmuDOMwvFmrd6vFUOdvHEmhxPnkLlhjnx8fJsN3ELuQdZOYJZG40r%2Bl7GI3Tk9YfK4mc6oZzlX9GE1Q3I3z1AMXAID0jVH227uo7m%2B1Ha%2BDGF1z4peaIkiFC7Vo6DOMlt7vjEWWL46f7qvef81yNHiM6klQqPfZgPrcNWTniJsIGs93ydwI70OU3k65l%2Fzo%2Fo&X-Amz-Signature=a1eb2a571d9506348e454f572c3ea7f72da2f64433cfc68b498279257cfedc3d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664447LPWK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEITmOwswwb4%2FS5Hxm51YwH9djgxvA9%2BNM8Oy9NezN63AiA77r32bhRIjG1K%2FT4M52VkVtDwVWB%2FRWfaFySrLJ%2BEkCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNGcMsJV8feS2ySvgKtwDg4uiBg9rJZya%2BIhUEKlgGrRURTg1jgY11KXwscusWuNIOGMTQjM3W2A0Vd8PYr1vZv4edXFvbUMbsttEtg8%2FcWXcKPdo64HgQj0lfh3%2FCq6niojfz7Wqix2XLFPv4tT7toVNWoNbwRuehZ1g38B7bhhOGpHLcuBiFEuuFiaR%2FFVimhelfdWBbL0q55y3%2BbNzYLoAapuQYNrygjgWO6TCKsEGz%2FNw%2BpHrZkmkQgIo0I7ln0BO5ocg%2FiyhW3gPKeYc37jjfZG%2BET7rpZtytSnBfeZVAyx0vqmvGyCy%2FLMb3ATYNZvT4u8H26ELX%2FqCqAJWZOGEW7sdPaKqemUO0wLl0D6Z2P3Qt1OSvRguEQFUfZG4oYwSBGhGwhYsdgEUb%2FlFlMa%2FDy04RZqNbX0%2Fsq1LyaTBIx39eTtX%2B4am1CMFf1UZE4HzDcoORAMngJRpqzaEkpvLeg3qc4o4a6Jizk8icwoQC0RdaYCaUjIl2GgGBIlqkT7tbAP1%2BXsCyYtsb4Hxctd6hL44dktu21mo73beRH98i0EjkWfEhrZ3sG%2B%2B%2FeJ5FRt6R%2FDMZ9BHiXnVqTlw3jc6mJ1Chs44lX5AQW8vOybRYdoCOuNgPEbebRrkrgs2JKnQZuBm0a7DDZkwoe6lvwY6pgEzT%2BuQRWUXriIPl4ZZ53x9FogwXmaKdoLBV%2BHjbG2j8%2FjopIhLvMjIdM2vw6V5fFQyhtk4wIDGff5Kuk6cKc8Tp9OvO3Q9ZzoIRJveibV58ezENoIwLTtkbYJaSPxRIDQWCf6TkwnSmhZHA%2BR%2B9%2BqaPTeHRQftZMKvxAMaV3EpnecLnYmfIbCJBXzlJgg%2Fmjv4MpBBWuq19QTjWifCxIYQxOHRANiD&X-Amz-Signature=8f2d31a9dcfe79eb0a740d6b3286f83e434eddb9ec8fcff7964d12936ff1262e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
