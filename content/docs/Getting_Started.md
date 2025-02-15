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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z6FCJUX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDWS10oiJxwVXAgD403lBJLZykDpAW5kiH3MyY1jjvswgIgEV0ZY%2FbHKzgLpwJhXrB8Ry2qmtszQcnGBx6V%2FA872nkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFvMIva6GbgKmh4wtSrcA2%2BWgdCnzzEgE5J6icgX0%2BF6D9zQoX56I8zu6ujcH%2FGbCDXhAvdkNaeWRfgVWenH30sB38rtQYgu6T6JGtUuvk%2FuEUvs42bcQaF0i1FcagNIbhGdoBF3kTPg0KCqE675iMPNYFlPXHwbQ0clE0SVewJ8FdYBqOb6G%2F77Zs1s9Vx2Vor1uO3d48Gay56vl3TWgAKu1fpUvdL3yUba2HYZgf6aew7a3373FK7yOLsVfAP8QgOljzG9N7a6srFGQA83zAq%2Bj7VVSN3zsaYWqlqx7Yz5TRFf0bmAWOZO3u0pE7jRHvkwhJQFXAe7xWBAhaIJLFPIkHPXcgbVqDhL1DvFrLgCJzlZ21NxhfK32HFJqtTst8%2Bmg21GRH2Z1aNiAR30nuDamuRjj1VbRbrdHxXAPfiRJ%2BVxWlZnI9MKAF3XfPj1Gn3%2FVc8JZLqf0jFCqWKHDwY9S8t1X8n11jsiqxTz%2BbCGgs5biP5rcRmxuBhWdR%2BKhuBhqI%2BzW611nFblOkPQOJc8AchuMeGkIi%2F%2Fewh6uE8W5lZtIx323MMY8rdC3J36a%2FNxeGdWsDKnFrFDhN8%2BRjJ2ITU9304F%2F6DEdJMNDfHexaDqCbqm6bVnIw2IKUercouH%2FuYMWzKnLgINMOC0v70GOqUBpJpykGxD5HuBc9R4PP1T%2FaRPx%2FRjM1Se2eBo0Pvi2YJ8b%2FuY1vZByK4Hz6JIdbeV5KmN8234RrEjYuHrbxUcuwbj8IMYUG2NhJn2CfC6Nl79mibPHLxx47f5eS5nGDZYg2NCx4SKtlLAZSjX31M%2Fx83y3P2B9a0m5LEEADClfAUAiudxrdjH0E3X8FLdWfi87rZgmPO3V4xmUIKkBuv%2FJAuFhIiD&X-Amz-Signature=8ec2f905ce8a4b1e2421bf57513b8d5c037d11068dd620bf8f84dd72627234e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z6FCJUX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDWS10oiJxwVXAgD403lBJLZykDpAW5kiH3MyY1jjvswgIgEV0ZY%2FbHKzgLpwJhXrB8Ry2qmtszQcnGBx6V%2FA872nkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFvMIva6GbgKmh4wtSrcA2%2BWgdCnzzEgE5J6icgX0%2BF6D9zQoX56I8zu6ujcH%2FGbCDXhAvdkNaeWRfgVWenH30sB38rtQYgu6T6JGtUuvk%2FuEUvs42bcQaF0i1FcagNIbhGdoBF3kTPg0KCqE675iMPNYFlPXHwbQ0clE0SVewJ8FdYBqOb6G%2F77Zs1s9Vx2Vor1uO3d48Gay56vl3TWgAKu1fpUvdL3yUba2HYZgf6aew7a3373FK7yOLsVfAP8QgOljzG9N7a6srFGQA83zAq%2Bj7VVSN3zsaYWqlqx7Yz5TRFf0bmAWOZO3u0pE7jRHvkwhJQFXAe7xWBAhaIJLFPIkHPXcgbVqDhL1DvFrLgCJzlZ21NxhfK32HFJqtTst8%2Bmg21GRH2Z1aNiAR30nuDamuRjj1VbRbrdHxXAPfiRJ%2BVxWlZnI9MKAF3XfPj1Gn3%2FVc8JZLqf0jFCqWKHDwY9S8t1X8n11jsiqxTz%2BbCGgs5biP5rcRmxuBhWdR%2BKhuBhqI%2BzW611nFblOkPQOJc8AchuMeGkIi%2F%2Fewh6uE8W5lZtIx323MMY8rdC3J36a%2FNxeGdWsDKnFrFDhN8%2BRjJ2ITU9304F%2F6DEdJMNDfHexaDqCbqm6bVnIw2IKUercouH%2FuYMWzKnLgINMOC0v70GOqUBpJpykGxD5HuBc9R4PP1T%2FaRPx%2FRjM1Se2eBo0Pvi2YJ8b%2FuY1vZByK4Hz6JIdbeV5KmN8234RrEjYuHrbxUcuwbj8IMYUG2NhJn2CfC6Nl79mibPHLxx47f5eS5nGDZYg2NCx4SKtlLAZSjX31M%2Fx83y3P2B9a0m5LEEADClfAUAiudxrdjH0E3X8FLdWfi87rZgmPO3V4xmUIKkBuv%2FJAuFhIiD&X-Amz-Signature=50b74977a8a5156f1856c094c27fcccf48abf889a555146ca3df9c24672de536&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPUPNH5D%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCwKFD02DTHx4Oc1rAN9JQl2K7jl7VWFkzqTlY7n2s00gIhAKtHR7my%2BR0N%2BRCCnUoE4GpPR0butQwIFTExCGuaGxxRKv8DCDkQABoMNjM3NDIzMTgzODA1Igyj%2FT5J8JaBFWpijIAq3ANMnBsgAn1JrwM8d4j%2Bxc5ebZhDpexzitxrkZIWAn6RzDyUY4ELwK%2FfSzNLA%2FK6mpfpYnRvAY6HPrdIeCQfDCi2CO5xspCVDtIiFp8LSZ%2FnKNk24qhmamlj8juij1csjvjp1XWztdlOhIp6w2Q2ZMI8NKtPNK7MLhFYEa0NmpK4%2BIN0zS9wn4isM8i7%2B5Vrq88mZPQCNVEWwT%2FBl9pxivd18T3H%2FwqiG1qifFG5i5KZQagHMyPPcq%2BpkzYaJNV%2BbkeY0zJgbKBZm6ABKUHMGdIvFcws29T2gcmKEZm3J6K1yxcnR%2BBxJlkSB2vMdZXBFVLnIc%2Fc2L9gbroSgWLQoEB7IxWTqrzTEbGAEehIhgfcVeLgC7jj1afmRPh77w3EG6RVkeML7X5pd7LWBUtzhVDEpAcT62bNVrrrzOPRWgOuKiMLWNVpwj5i4W4mhzCZK0NOvZj3bHF1VFiXheZtxtYjqHIiIIf%2Fho%2F1yJkiIpZ%2BNpZRWosGYI2SG4uC6ikh4zorj9LvPb7BDQXitaJzS4LYVnkME89k5i%2BlmdG7EtjgyuiyGtfVFBbt6mwXvgX52RXOb6tLXJ5aMH6TRt06egQbF6wB8uZnM%2Bf%2BS83j5F3%2Fa8wpDQe0MGJQww5l3jCDtL%2B9BjqkAWVHbdSFeHLLpeDrdiEOFt0dsQLZnsuUvFJZnV1acz%2BKGLCT6p8XaEY6nCHEChhNPEn9h%2FVjOA8LDAXYeNtysHev4c7JubOpiUjrBsTwBU7gOTVJdqUYlnLc9O1%2FpaSvZF8EoI0r8NWERY2WuoikkN1D7LhcpuSpJ5qwOIN7B6LlXSK4Z2SW4St3nc0fZH1LOb4wCAMaGTUk3AJ9IevNVqc8jL2u&X-Amz-Signature=45366127ac96f05e0fbbab9caabe3f983fd73ec588c85c3aafd2684ac420be2f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KVIJ7UO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBZmKWyR%2Bg3DmWr0Y7hnWK0bcPBe9d38ozYdtwX6yXcVAiB0jxmwyFdu0dhMijGa3fKMdbbXAAJVV7zoT%2BqRdAWCRCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMLQlKCp11TPN%2FW5hXKtwD6HWBuDwfZInWEDTu85FiojBdo6l0LRNvMxWAwDfbZ%2BsMVPLeiy2fAAnvS0PMUVuf693PkGQPtkCPtJk8VsvXhW%2FsNHMW2JGLlfSlGVX8IG5IWv4xuz2k4%2FQ1ci3D0Snp5gY1Aym%2FTS65%2F5JBkGm0QRV2K2OYaLGgwLabGkBseQ6unvHSlmYFi2rvNMwYzs9u3raMPOZfhKz6GndWL6ti2tNJynONRctStqARMeBEbtCdCGYoXclAG5Vxnl3uSYgGo30viRXYaHi%2BFRPDeCF1ya3OrOs4wJgnNPWVeQyFGU9HA3v4YceVt3sepOYbCW4nIwrlk7bkASbCd%2BCQ44IoT9p5CdIfk8M8DG5mHecC%2FNcA7zXeaPczJAguCToixJ3dVR8S0r1tO%2ByGZJC1Nm1uPZgamMpUFWGpWeBmkZMKtduIyQUkZAbjnNa89Ga1CWE2AMYCAgZKQtKX9iHTpVCaj4dyBFWDfFLdDflJ0Hlh4brwjbPHAHILHvoA7Axlwwb1kJwA2GGKW6zKuJ6n0m%2BY1nZrQKzK7z4v0Py0Dpo0hydLDQ9IC4b9iJ7dcn317iHULPirzyegk%2BywPtQWfPTjtYNqTHTcvpbPAgZH1LDqpN4TET0JxnE21bfeFS0w3LS%2FvQY6pgHSjCZb3SrlxdL1XKmDu4iFM925DaqEfoUHjn%2B1sSDef9PO6jS9b9As7%2BGrYcetTYyGdS%2F0CkE82RxytRvh5p40OkWrUQzS%2BvK3spUe%2B6LD%2Brs2g9ldmEQy8tqNbIfnPuWCS5Iu3fPTb5Whj%2BwTevfGmv5WgcbIX4xAkC0rIsOt5OSBf9XrjqShhOSeO7UnImdGOhTps6CGMwNy8I9YaCnuRvJYEAC%2B&X-Amz-Signature=c36672f0177279304a55a623c77f47859a1a9b335675389d321ad93888948784&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z6FCJUX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDWS10oiJxwVXAgD403lBJLZykDpAW5kiH3MyY1jjvswgIgEV0ZY%2FbHKzgLpwJhXrB8Ry2qmtszQcnGBx6V%2FA872nkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFvMIva6GbgKmh4wtSrcA2%2BWgdCnzzEgE5J6icgX0%2BF6D9zQoX56I8zu6ujcH%2FGbCDXhAvdkNaeWRfgVWenH30sB38rtQYgu6T6JGtUuvk%2FuEUvs42bcQaF0i1FcagNIbhGdoBF3kTPg0KCqE675iMPNYFlPXHwbQ0clE0SVewJ8FdYBqOb6G%2F77Zs1s9Vx2Vor1uO3d48Gay56vl3TWgAKu1fpUvdL3yUba2HYZgf6aew7a3373FK7yOLsVfAP8QgOljzG9N7a6srFGQA83zAq%2Bj7VVSN3zsaYWqlqx7Yz5TRFf0bmAWOZO3u0pE7jRHvkwhJQFXAe7xWBAhaIJLFPIkHPXcgbVqDhL1DvFrLgCJzlZ21NxhfK32HFJqtTst8%2Bmg21GRH2Z1aNiAR30nuDamuRjj1VbRbrdHxXAPfiRJ%2BVxWlZnI9MKAF3XfPj1Gn3%2FVc8JZLqf0jFCqWKHDwY9S8t1X8n11jsiqxTz%2BbCGgs5biP5rcRmxuBhWdR%2BKhuBhqI%2BzW611nFblOkPQOJc8AchuMeGkIi%2F%2Fewh6uE8W5lZtIx323MMY8rdC3J36a%2FNxeGdWsDKnFrFDhN8%2BRjJ2ITU9304F%2F6DEdJMNDfHexaDqCbqm6bVnIw2IKUercouH%2FuYMWzKnLgINMOC0v70GOqUBpJpykGxD5HuBc9R4PP1T%2FaRPx%2FRjM1Se2eBo0Pvi2YJ8b%2FuY1vZByK4Hz6JIdbeV5KmN8234RrEjYuHrbxUcuwbj8IMYUG2NhJn2CfC6Nl79mibPHLxx47f5eS5nGDZYg2NCx4SKtlLAZSjX31M%2Fx83y3P2B9a0m5LEEADClfAUAiudxrdjH0E3X8FLdWfi87rZgmPO3V4xmUIKkBuv%2FJAuFhIiD&X-Amz-Signature=0d776cc13f98ddbb166177dbd61e9595e5b8d5caee5d7f653681fdc0d4018b13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
