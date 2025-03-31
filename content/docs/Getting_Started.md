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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZGJIAL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCw4wzIFM4o7dyqBPkB7T%2BaszovUip8n%2BtxI2iWL4IN5AIgA%2B%2FkbrI9SfGP2ztVng2IWxGsKrO040BEliJug7R%2BPtYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5Q33gFHVwaYk5ljCrcAz7Up8Ea47gvXWOACIWRpuKLWplNOTSKV43Vxjc4EauBMR1pIDiSAXOMf8Jq0wJrBCJs%2F1S0OYi04wXomMbGAakxGh6vt7NuHbbOh%2B6wlZ025Xc6QmsBXvKS6Pp8Rg91qGdKkr8zz5JuJowPUPOVZpfn%2FOHD%2FMKP9sR8MCuZiVG9u2txdmRNIJF2w2v8VMMMwe0wA5sOWef%2Fwd8yyz52vCtGweIc14Xnt8459yQkcssrtPMqwLPmYOt49n3vAfZECF0bhyRgNik3h4lLm%2FORNT59kjtptQnc11568mxEy%2F7HfbhdL9Vkq%2BOf2TOH6VNVOJALyZCGZNa%2B7KVtaO6Ef2ZRcT1Dror2k%2BT2yljhfmyTX6hRFrqUvtiAerbpVeQj7%2F1TZadBAQy38%2FYw2VAG9oo%2FEOwhEhwKjnGIuUTP9NaLgvUIc%2B8O2c%2B223uhJ4xH0seSHYDGhepamwAIdKeoXZo%2FrdajcyH87bbuUXcWk60NMqnFUs%2F%2Feh3pE0PdwqqcQKvyaSAeaCkXwJZmv1r2vVAs631DqW3fxasLPDI%2FwDBbTuYr5%2BggZizKzN4rO%2BPG6zqC5z7y5JqQPsBXeeHpGHynmATysRbNAhoxLqV9tUBZ9WFb5JeGsOGc0O1YMKyjqr8GOqUBEYpVJ7MqqeFfdXvjTc0yyu6RfmqRgwouYiBQXziuOtU5TGF6HTSgsKsCtvPXUEr76EUPhfrtJbimXbkmi0reif%2B9rQzjiajMDK3ryNRrHXyu7aWW0Qt%2B1adQ3Wl3UAygCMLg33rgc2uRBbI0b9ESKelwE4I5u2aJcBplGVF%2FcPrptrLEHP3fk2vhuRubHdyHUoOl8Z9z4nlGi9VId5CuZpObcQEJ&X-Amz-Signature=4a281f1ad06eefcbd72fe880c07bc7ac2b73f22b5b5f04b625f6602b15f26589&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZGJIAL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCw4wzIFM4o7dyqBPkB7T%2BaszovUip8n%2BtxI2iWL4IN5AIgA%2B%2FkbrI9SfGP2ztVng2IWxGsKrO040BEliJug7R%2BPtYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5Q33gFHVwaYk5ljCrcAz7Up8Ea47gvXWOACIWRpuKLWplNOTSKV43Vxjc4EauBMR1pIDiSAXOMf8Jq0wJrBCJs%2F1S0OYi04wXomMbGAakxGh6vt7NuHbbOh%2B6wlZ025Xc6QmsBXvKS6Pp8Rg91qGdKkr8zz5JuJowPUPOVZpfn%2FOHD%2FMKP9sR8MCuZiVG9u2txdmRNIJF2w2v8VMMMwe0wA5sOWef%2Fwd8yyz52vCtGweIc14Xnt8459yQkcssrtPMqwLPmYOt49n3vAfZECF0bhyRgNik3h4lLm%2FORNT59kjtptQnc11568mxEy%2F7HfbhdL9Vkq%2BOf2TOH6VNVOJALyZCGZNa%2B7KVtaO6Ef2ZRcT1Dror2k%2BT2yljhfmyTX6hRFrqUvtiAerbpVeQj7%2F1TZadBAQy38%2FYw2VAG9oo%2FEOwhEhwKjnGIuUTP9NaLgvUIc%2B8O2c%2B223uhJ4xH0seSHYDGhepamwAIdKeoXZo%2FrdajcyH87bbuUXcWk60NMqnFUs%2F%2Feh3pE0PdwqqcQKvyaSAeaCkXwJZmv1r2vVAs631DqW3fxasLPDI%2FwDBbTuYr5%2BggZizKzN4rO%2BPG6zqC5z7y5JqQPsBXeeHpGHynmATysRbNAhoxLqV9tUBZ9WFb5JeGsOGc0O1YMKyjqr8GOqUBEYpVJ7MqqeFfdXvjTc0yyu6RfmqRgwouYiBQXziuOtU5TGF6HTSgsKsCtvPXUEr76EUPhfrtJbimXbkmi0reif%2B9rQzjiajMDK3ryNRrHXyu7aWW0Qt%2B1adQ3Wl3UAygCMLg33rgc2uRBbI0b9ESKelwE4I5u2aJcBplGVF%2FcPrptrLEHP3fk2vhuRubHdyHUoOl8Z9z4nlGi9VId5CuZpObcQEJ&X-Amz-Signature=2369e3025c921f398fb1fe268cb661a7bc0627480129e64010312a338aa0df07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675FRT52Z%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEcsw5bc5lWjguQvCHnrJVOEnZnAm7i1Vi4Z4aWNrL1rAiEAtt6kA0b0oGPjhOUuTBJ%2B6YYMndD%2BVbspunqvWSBoEPQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMOVa99sug95nN%2B4ircA4ArOMgzv%2BdML2rsVPyLfYK7bd4dgdH3qxeugxAx%2FcBGOeWfl0qNPl9pG%2FQ76etUiqADxja1GS29w4kg4mibkIIOBmdSnY6jLDtjlyrYuNBrkIbY1NE4EjuXTicV1ZVvT0WsONmjTrduZ70s7lUSi9mY9Bu%2BklVZehYOmlw%2FzuN26sDix3DIMzZkzk%2BkaE34OISg%2BmR6FPOxIIyauGQEp5icuRhQC%2BUN%2FFeQCKZcD1yhqW6K7xbH70e5yATQhU1YyrYN6WKtTe5inBRKUwBE1qeZhmFELZqQpMu2e9mt%2FmVZXQSB0gy32EcfcpqdFKYu%2FVAA6uRy05Hd6Xg7kQdm%2BuUuHXxgL1maFz2yIYwVQq%2FASYUHXKs11oXCTEAer9Fav9n%2F8KM8Nk%2B4S5Iemey17WPgCDHmCtOqWG1oL%2BK6%2FcQtxPiz3IK1LWTKd3y4wuWIEYh5pU1q20ARBmyQZ6xPuYBs2Q%2B5rLjPHtXJPyfA6KWMrNV%2BfSVxkM39JOIqRzR2XqmIlKnO3f2wQV0pGVA2YqbvcZeI%2Fu5yCe47kludc5YPDQlvtX7zHV%2FLmRVKQyaB%2BlzBP6EknryCvHcqN088C9GdEN7Tg5CH9%2BoKq%2FEcXntfm98aBAriD17JvVL5MPChqr8GOqUBWzjCxqf2Kcl00ERiOuv6uTV%2F9O3Ieben7cxMAz3DP%2FY%2FnHZC%2BT72okHN7XnnBOEYWj1xMgrJhbI4NQtXfXF2RQPQ1mkW%2FWHfdazqUwDP%2FlJhHRRNseBM%2B4oZm1NkV%2FinKlCIh0uCeWq%2BSUS0hQVdbuPplXelOehP3VP5x5YjNsLS4uk5T95v4A7u0W3E4uWiWMOf%2Bu9COHeVXl1QyjM8b6NzrDLV&X-Amz-Signature=6cad7082ca8787c7d5b631c25b59f2249da8b6222a8501340d6b32968cb33e90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVE32H7Y%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEl2ZYeyxUXlZVP2NfDU2XVmWPb7OrvlGqi51RRQ%2FXlaAiEAt3EY0WBsU1FweCm%2BjjuUq%2BerMcBV9maQ%2BGaxG7gDiUEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqOVMYJR%2FD0cfn8hircA5LTIUTJ1zXBoWdLejXA%2FHLGA%2BZkwS0hOs8MYmB%2F%2FNnPfpySu3EnnJyVVlG0Uv%2F530aHv4BM42hNzjhiKzztJdPVWrW0%2BOPR%2BVZW%2FDZ7FciEI69B8NoAcp3UdWeOZF7HXKoD1o5SO2QO7uivmcaRyM%2FDEs93u2AbS29F%2F2fIPqlTUAM6GY9%2Fuv9noi6Kf8J16JGLfNGKMbfmY%2FSjnsrouvcayS2qJz1O%2F99P1Al%2BBpaBHGN%2F1m%2FHUjgLsQ%2BmK4L2AvGwgvwOaxDAwlDkdMx%2FT0XjtDI4pLEn2OTiHu1TnRccKlk6KNqcrcW%2FW533PMBLurfnclYFPqMYjr4usca4H1eunKb94RfJY%2FM5h42OORdptLYp8pTDyEGDvzWXn1BJyhySvkXiFmh%2FCNJlemmpqWJETspoTB6AdMMYaTVpKa1tkHwJsMK%2B1fr0XCQgOKUB%2FQV5A%2FNMHqibbGMu66sj%2B1JyX2qH1B182tydX84MjRAOjmqp77cukz8lgRVlfknV2NmmIgsDMsWCZezQmZ7zDOaJhpJRKlIam7jqkCEawgoBKa4Ac2arXXBrJpEj9LOUG5OiaYDdJTb%2FTRZnKu1FZKIBBUPniGljib4qoc76nAQvDioa0fOQa1%2BklsZHMIOjqr8GOqUBkuXSa%2BPrZOiCjWWFUrp3WUwUM18czoJgoRlvCScXWl982hmOfC%2FCIb2nFElMfFRygcfs06BaCb56pp%2F7Mgye3zs8lVtVG2Ecc%2FIvPwxGrMWzKGvmZq8wZAHSwVIo4%2FftbA%2BVJpDgfgwXcQ2sJahWgDR6uEaJr7cC43e5w9nSYfhXskL5EyOtaSbzq7tARbl32IlFJZCyI2E6fZSI3WJm45I%2BBQxI&X-Amz-Signature=ab3bf6c62fa002315c1177991291d741db39bcdf91ad001b3f87485798cda51c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZGJIAL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCw4wzIFM4o7dyqBPkB7T%2BaszovUip8n%2BtxI2iWL4IN5AIgA%2B%2FkbrI9SfGP2ztVng2IWxGsKrO040BEliJug7R%2BPtYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5Q33gFHVwaYk5ljCrcAz7Up8Ea47gvXWOACIWRpuKLWplNOTSKV43Vxjc4EauBMR1pIDiSAXOMf8Jq0wJrBCJs%2F1S0OYi04wXomMbGAakxGh6vt7NuHbbOh%2B6wlZ025Xc6QmsBXvKS6Pp8Rg91qGdKkr8zz5JuJowPUPOVZpfn%2FOHD%2FMKP9sR8MCuZiVG9u2txdmRNIJF2w2v8VMMMwe0wA5sOWef%2Fwd8yyz52vCtGweIc14Xnt8459yQkcssrtPMqwLPmYOt49n3vAfZECF0bhyRgNik3h4lLm%2FORNT59kjtptQnc11568mxEy%2F7HfbhdL9Vkq%2BOf2TOH6VNVOJALyZCGZNa%2B7KVtaO6Ef2ZRcT1Dror2k%2BT2yljhfmyTX6hRFrqUvtiAerbpVeQj7%2F1TZadBAQy38%2FYw2VAG9oo%2FEOwhEhwKjnGIuUTP9NaLgvUIc%2B8O2c%2B223uhJ4xH0seSHYDGhepamwAIdKeoXZo%2FrdajcyH87bbuUXcWk60NMqnFUs%2F%2Feh3pE0PdwqqcQKvyaSAeaCkXwJZmv1r2vVAs631DqW3fxasLPDI%2FwDBbTuYr5%2BggZizKzN4rO%2BPG6zqC5z7y5JqQPsBXeeHpGHynmATysRbNAhoxLqV9tUBZ9WFb5JeGsOGc0O1YMKyjqr8GOqUBEYpVJ7MqqeFfdXvjTc0yyu6RfmqRgwouYiBQXziuOtU5TGF6HTSgsKsCtvPXUEr76EUPhfrtJbimXbkmi0reif%2B9rQzjiajMDK3ryNRrHXyu7aWW0Qt%2B1adQ3Wl3UAygCMLg33rgc2uRBbI0b9ESKelwE4I5u2aJcBplGVF%2FcPrptrLEHP3fk2vhuRubHdyHUoOl8Z9z4nlGi9VId5CuZpObcQEJ&X-Amz-Signature=0f70fca9b283c61211a65f75aa1519c5e7ad2c73ea21e1c963dc71d02ea86520&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
