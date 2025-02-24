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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUNG2H3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA%2BLnKCTmelLPeveOWQ4DW93RLpbtFXmJ5IaYA0A7RjwIgClxA4lE4q09lnqDBfzCU1xaUJZ3%2BKgfO2YRJ5M3%2F2Bsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLC3pe%2FWdGglnJ%2FHTSrcA9Lwb8FcFgqme6VR8GoARc2OnewoxTvM79owrk1wDjzuzivq2cMEstVUR1Wevz%2B0ciR3LBTjY%2FQwgZwwS1F7Mtp1gpONPpKxRg%2BRo6lb4AVD1S3IjjIsVczhDEAN7p1BRrYNuenvYvs%2BBGv5Ln8Wu9LRi%2F6aKRHfAP9bVlABE6B2z7jYPpAd0t2DSfQiw4vJvEiEDGXyMiyI%2Fte45xY34pyu471VFcXlSXlu7uTS3t65jyaBCy4Wpzvj3M%2Fu6OM2mh%2Bq1epF%2BpYbw8BmI2cQosjlpNj7Lwuh8%2FzEmHqA4tCVbLPlB8xNWvPTpQZ58mRrDzDlNMMXR%2F0lnxYxcOMPfzdaiuM0mEgE9Y2iDuEHQ%2F%2FPjJTU5bsAWCUpXMQlhANFP%2B26zyOY0dulgs7fGIUVbQzxJPqLopsJxldfd5m9GPnz3Ii09d5P9dEBqdrBWUEZmMvljPSQqoQHy2BPDbanEpi4InYg0zI26LP1pXe%2BSm6E%2F5whF0cY17GmvggQm5C2d3Y9mdNn%2F2FtazSc1xrjot2VVVCJw6adMjeWPTMmI9QHG%2BAtkor9nxsCbLDQE22BCuktIW1v4Lqzk0yZqaWBG%2BU2xjIMKeDyDGt0xxgPJK7MN2eVKl%2Fk5sV8OYb6MOXN8L0GOqUBgAV39A9BK%2Beo4DzBjoKy8eBAsEfoRlyetlo7GrsBcHJr0rM0hNlDSKP55HubylwDlY2aTyCM87IEw1vX%2B%2FMidYyEEfTvITDJ4W65M0uXyK0lu5r%2BpkCTUqVMTOjd1d%2F5ijr2qfV%2FDAgM32XEtrk2dtScgWDTrT6ssdpBvK48N9cODhbnsB5%2FsS0zpsxbFRTdtObEKi%2BgCbdHJvMehNsPnXVyS345&X-Amz-Signature=ec07187436249cf5efa6322c2712b78c4331b8bee1e3b80a0b24523f124e25e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUNG2H3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA%2BLnKCTmelLPeveOWQ4DW93RLpbtFXmJ5IaYA0A7RjwIgClxA4lE4q09lnqDBfzCU1xaUJZ3%2BKgfO2YRJ5M3%2F2Bsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLC3pe%2FWdGglnJ%2FHTSrcA9Lwb8FcFgqme6VR8GoARc2OnewoxTvM79owrk1wDjzuzivq2cMEstVUR1Wevz%2B0ciR3LBTjY%2FQwgZwwS1F7Mtp1gpONPpKxRg%2BRo6lb4AVD1S3IjjIsVczhDEAN7p1BRrYNuenvYvs%2BBGv5Ln8Wu9LRi%2F6aKRHfAP9bVlABE6B2z7jYPpAd0t2DSfQiw4vJvEiEDGXyMiyI%2Fte45xY34pyu471VFcXlSXlu7uTS3t65jyaBCy4Wpzvj3M%2Fu6OM2mh%2Bq1epF%2BpYbw8BmI2cQosjlpNj7Lwuh8%2FzEmHqA4tCVbLPlB8xNWvPTpQZ58mRrDzDlNMMXR%2F0lnxYxcOMPfzdaiuM0mEgE9Y2iDuEHQ%2F%2FPjJTU5bsAWCUpXMQlhANFP%2B26zyOY0dulgs7fGIUVbQzxJPqLopsJxldfd5m9GPnz3Ii09d5P9dEBqdrBWUEZmMvljPSQqoQHy2BPDbanEpi4InYg0zI26LP1pXe%2BSm6E%2F5whF0cY17GmvggQm5C2d3Y9mdNn%2F2FtazSc1xrjot2VVVCJw6adMjeWPTMmI9QHG%2BAtkor9nxsCbLDQE22BCuktIW1v4Lqzk0yZqaWBG%2BU2xjIMKeDyDGt0xxgPJK7MN2eVKl%2Fk5sV8OYb6MOXN8L0GOqUBgAV39A9BK%2Beo4DzBjoKy8eBAsEfoRlyetlo7GrsBcHJr0rM0hNlDSKP55HubylwDlY2aTyCM87IEw1vX%2B%2FMidYyEEfTvITDJ4W65M0uXyK0lu5r%2BpkCTUqVMTOjd1d%2F5ijr2qfV%2FDAgM32XEtrk2dtScgWDTrT6ssdpBvK48N9cODhbnsB5%2FsS0zpsxbFRTdtObEKi%2BgCbdHJvMehNsPnXVyS345&X-Amz-Signature=8e58a625883b0b4f068419207644fa2b42ce4089661c2c9472fd31cdb0ac5dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCPM2VG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuR2qNrGy%2BWoZHAO3SYy3EENdlXQDumhLpVL99Pa30kQIgN%2FBFZH3kAAo3jhMN0J64ZbB4Yep5phy9ABAN%2Fd6zUQEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAB%2BWsPtpb4ZCimC8ircA9uzWy0zcajFBViOrKhpBznS5GcV5JLBRr1Yo7OgIePP478blzOwLa0LS%2BRRgBFGJcsna6JkYzF31%2FxgD6evyI4eGZMgprERqTsedQea5%2BF%2FNL%2BNUk%2FH5RmX4v0sNimWU3FYVPEbxWV%2BjkjpGuuqnCvnU3IV021c6PRCuUCoAfQ27yjUodCBvKJXKV7PeChFVCTH%2B%2Fa8PFJhcyqUL60Z%2F8gM%2Bepx7biBkDfbIStgted6pdKGf87q5ZOM26nSst3LFWNCBIB5cMM7i61UFFkIRgjH5Buj8wpF3SLnLZK5JQJaMukASXAD9y7Y2%2FFO%2BPybMMXC%2BFUz4ZBCSMd5bqTTqPui%2BK%2BTrs%2F%2BHX%2BTookLEzxtVKvU%2BRlgE9%2FkoMA%2B9CSrtw3KsZK69XAUnILx8tDRutGrTuZaYAAMlhVBTWcinBqVA4O8W8SJcLA4vZgZSV1JQzdLRf7s2J7jTrMafiTg%2FkWTNboI1rXB9ec%2Bfd4n5LZ4NnjsgeLxY9NOacEPAA2ggy9kHq%2FBUFsoP0cPind7E6tgnX%2F7hld8IxlLaxkepaLdXaCA%2Bt5EVcZpIsv0cpGX%2F%2B6s17yjQPzxo3JQkdHt8unouDAFiKbzg5qbiFcLu50JH1J8lvDHVy2sNWizMP7O8L0GOqUBZUc0JIXN%2BIvB1koF2C1UcGt0eU%2FCHYtXVDQ5o%2FKd1nxOccuf%2Fmcr5AXecQVDzjL%2FOfyZ08Mc%2Bz6ys0TZ4XQYsX31LKlr7WP6ggQ4vwtOOcO%2BoBd90tztY3TrGHp66LBGF16VbbrQo0gOYgef%2Fy1XAlc05aWWf7NYZ3aPdXcj2WVNvKbrIGDp2E1OZv3tRigL5hDX9pZr4O2RcBQl%2FlIMPogAA98u&X-Amz-Signature=0671d673be524114816b370733fac9b60b406c998fd0624a1ae14c848c664875&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JLTZPLB%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG34Aa5FoJzfr%2B720Ti5zajqbV0l4WO9%2FMqE1ccDyE76AiA85C02GAao%2BCD55zayR1vdY3wXdcnauir6G1AbEDBLFir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMUFyci6QTjkt%2FNGh8KtwDDRJF51nwj7oYcBnlHxycO8%2Bpp%2F0HdpzyKSqmVAgGpYkB9Y%2BFPJlprFEj94eXG2HAI1M8PvZODWxSYX37Q5uZCZbnFMTK%2Fj3WY88OezDKM6CDDdtw0Rr2KR004LduVY%2BH0WM%2F9Q5EJQxf%2Fsmtd46YTRi7dbmZfardRTwK53tHjydquzfgcrylX9azjPUF%2BFqr%2BuzXWIJbe2pmw1usS%2Fk6pHBf1K%2BKm0hO8L%2FxIE5H%2FqpknnCqbs8ysx3UlKNFETWwwNh9bU%2BQt6Iq8KzfS7IqX4XPLuxmUoo5hNbSKhZ8cyTsi4y9dpNGER%2Bi4hwtLxTl3XJayqH%2F6Bgs1zkY3RZgduu%2FIlDimxM0s6VbNjHgvRdKEyAqsGSmzrX8%2BHM0oMUO9nO0WYhIqNSouDDbTQk3npKgo91P3CKllCHJVuFfb%2BuZsJzhh8fzqRs5jSg%2Fc9iSISpkDsiuc5zzSxKWr9%2Fpxz6UK%2BLwaLrUgQXsNMKtwW139J7eRNvr6kn0DbRPVjZTlqH%2FGZNxY4LBmZwRAEm1Ic2u3GEyRCLAuYQy%2BYN5464G2BQTH4LbVn%2FhBVgLFmdDpYu75oZF%2BgesbB1LqyWkfp3D5ZQEo2prr7UPT3c0roMvblF0Kme%2BAvNkzuYwgM%2FwvQY6pgHLSbmUQiwocqM1hu0DnjQTgM%2Btgtl5s%2FQnznEn0BrrRz3Q22M4vZaQZU5AX4g%2FRTCGK3ERh3SfHk0Mr9QUja4UK%2F4TLtsEgZUl4GTwmQfxX9QSalwpuPMXE%2FwLSa19ck0PjsJAn6qfXu8PJ2t53wP1Mla4wQxMn0UalE%2Bq76H9sP3B2tAQj68Aa08rZKmPizjyy64WwCaoOpdNBP3G7P16uAbR7tEt&X-Amz-Signature=8c3e76884c1e97bddb91ca0d21b1666823ae13aa9ed8792650249ceb8a2b59f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUNG2H3%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA%2BLnKCTmelLPeveOWQ4DW93RLpbtFXmJ5IaYA0A7RjwIgClxA4lE4q09lnqDBfzCU1xaUJZ3%2BKgfO2YRJ5M3%2F2Bsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLC3pe%2FWdGglnJ%2FHTSrcA9Lwb8FcFgqme6VR8GoARc2OnewoxTvM79owrk1wDjzuzivq2cMEstVUR1Wevz%2B0ciR3LBTjY%2FQwgZwwS1F7Mtp1gpONPpKxRg%2BRo6lb4AVD1S3IjjIsVczhDEAN7p1BRrYNuenvYvs%2BBGv5Ln8Wu9LRi%2F6aKRHfAP9bVlABE6B2z7jYPpAd0t2DSfQiw4vJvEiEDGXyMiyI%2Fte45xY34pyu471VFcXlSXlu7uTS3t65jyaBCy4Wpzvj3M%2Fu6OM2mh%2Bq1epF%2BpYbw8BmI2cQosjlpNj7Lwuh8%2FzEmHqA4tCVbLPlB8xNWvPTpQZ58mRrDzDlNMMXR%2F0lnxYxcOMPfzdaiuM0mEgE9Y2iDuEHQ%2F%2FPjJTU5bsAWCUpXMQlhANFP%2B26zyOY0dulgs7fGIUVbQzxJPqLopsJxldfd5m9GPnz3Ii09d5P9dEBqdrBWUEZmMvljPSQqoQHy2BPDbanEpi4InYg0zI26LP1pXe%2BSm6E%2F5whF0cY17GmvggQm5C2d3Y9mdNn%2F2FtazSc1xrjot2VVVCJw6adMjeWPTMmI9QHG%2BAtkor9nxsCbLDQE22BCuktIW1v4Lqzk0yZqaWBG%2BU2xjIMKeDyDGt0xxgPJK7MN2eVKl%2Fk5sV8OYb6MOXN8L0GOqUBgAV39A9BK%2Beo4DzBjoKy8eBAsEfoRlyetlo7GrsBcHJr0rM0hNlDSKP55HubylwDlY2aTyCM87IEw1vX%2B%2FMidYyEEfTvITDJ4W65M0uXyK0lu5r%2BpkCTUqVMTOjd1d%2F5ijr2qfV%2FDAgM32XEtrk2dtScgWDTrT6ssdpBvK48N9cODhbnsB5%2FsS0zpsxbFRTdtObEKi%2BgCbdHJvMehNsPnXVyS345&X-Amz-Signature=e0350d1194bf971708d7076cadc2c4f4c3cc799c1732db3966f11ccfe6fee8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
