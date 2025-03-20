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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3NW3LS%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAOeecECRWDOopP%2FKt1dULLRswaq%2F8ggRZC2dhdJMBgCAiBqGNgOe8DOho87xQaHijfGkVLRutdtm%2BI5KW%2F%2BkaO6VSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FYyeArMgRHtzFZmjKtwD4BWdXd%2BaT85ImUH38C8irHL0rSjIjmWN5f5imyxLPIemFnNHvCe1ngXFCREDjFXE6DKthOlry2H5fsnOpmbpNepdUh3YoMHj%2BIJBevGzDHn9JOLd3VpwR8XHY0%2FPnTCbiXkqLP6WToDjtEBbbTckfRngIzkkoBehdZpDpntZ3q%2FPoZ%2FiGCSbq8P5e06VtH0UgC3%2FwpteJsuwtSi2ZYZeRvbkPnrifbY%2Bbr3DB84uwYU8ftDCDqgiGxIZ75Kd08Wq0z%2BRBMwT20LD945Sfxaknu84P5xcmhy8CiS7fDgc3ZBfhUHCu4alWUQgy%2FtfMT%2BSv3n1Ul3euI7VdJq92s7lyGXDaJ4295U3nT%2BUnMbScjPdDDHgWbBGz0WJpNHi39TmWhCzl%2F53Zxud4nyK9CfsSyOULZ9bUBTiNB8tTgP73bl659liG7BeyiGR1TV1Uiar61GoGtuq0BjpaoeQIeudD4ThDlVB075Ss6K79E8Swsx17r1ONI65DR9R9JYh%2BhO2wprI5JYOk1JzNUllTWc4Z0uICnj%2Be2BUX%2Fu3C3VXYjiEpoOhV7O6ZeqheLej8ugb0EOO9z8oKbcT2HuUdoq%2FYloZ7ynmncmOsJwjPRJoW%2FtsugR4jBSdG3MJCqkwiafuvgY6pgEpGBpXJPNtR2rIcwltUKXybUsPSoawKcjsr1qrcX%2FN%2Fdutbdpxm1emXG19b4S05HR4LgUaKR4UoXPR%2B5T6HI0zwGprp1wrE0MMvhM30brUgLMEtFkdQrPc05ZzKYSMLaG3uk%2BVZRUNpFC8rvKshZDnC7qEf%2F3Illd%2FoLhPKXyy%2FtOUYJY0WpagshShGBIuZ8%2FUiLOrB01gZt4CQTrMXlyWAJLmLmH8&X-Amz-Signature=1a080fc985132a96e5b8f61169e23acf552734b2d4c48ab8e9ed5fd606cadddb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3NW3LS%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAOeecECRWDOopP%2FKt1dULLRswaq%2F8ggRZC2dhdJMBgCAiBqGNgOe8DOho87xQaHijfGkVLRutdtm%2BI5KW%2F%2BkaO6VSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FYyeArMgRHtzFZmjKtwD4BWdXd%2BaT85ImUH38C8irHL0rSjIjmWN5f5imyxLPIemFnNHvCe1ngXFCREDjFXE6DKthOlry2H5fsnOpmbpNepdUh3YoMHj%2BIJBevGzDHn9JOLd3VpwR8XHY0%2FPnTCbiXkqLP6WToDjtEBbbTckfRngIzkkoBehdZpDpntZ3q%2FPoZ%2FiGCSbq8P5e06VtH0UgC3%2FwpteJsuwtSi2ZYZeRvbkPnrifbY%2Bbr3DB84uwYU8ftDCDqgiGxIZ75Kd08Wq0z%2BRBMwT20LD945Sfxaknu84P5xcmhy8CiS7fDgc3ZBfhUHCu4alWUQgy%2FtfMT%2BSv3n1Ul3euI7VdJq92s7lyGXDaJ4295U3nT%2BUnMbScjPdDDHgWbBGz0WJpNHi39TmWhCzl%2F53Zxud4nyK9CfsSyOULZ9bUBTiNB8tTgP73bl659liG7BeyiGR1TV1Uiar61GoGtuq0BjpaoeQIeudD4ThDlVB075Ss6K79E8Swsx17r1ONI65DR9R9JYh%2BhO2wprI5JYOk1JzNUllTWc4Z0uICnj%2Be2BUX%2Fu3C3VXYjiEpoOhV7O6ZeqheLej8ugb0EOO9z8oKbcT2HuUdoq%2FYloZ7ynmncmOsJwjPRJoW%2FtsugR4jBSdG3MJCqkwiafuvgY6pgEpGBpXJPNtR2rIcwltUKXybUsPSoawKcjsr1qrcX%2FN%2Fdutbdpxm1emXG19b4S05HR4LgUaKR4UoXPR%2B5T6HI0zwGprp1wrE0MMvhM30brUgLMEtFkdQrPc05ZzKYSMLaG3uk%2BVZRUNpFC8rvKshZDnC7qEf%2F3Illd%2FoLhPKXyy%2FtOUYJY0WpagshShGBIuZ8%2FUiLOrB01gZt4CQTrMXlyWAJLmLmH8&X-Amz-Signature=b2c3ddb4b2b8e8f6c4187b830f0ed53cf7dcccea8a59572edfd421d5f7cdfda1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4NQAF5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICBc0WKpCmdUaEQYM7oJXjoKegb%2B6skuX9rsrAY21C2QAiEAzVwdi0W%2B6Mid%2Bn%2F3mvXDIuxYcYs2QBUFaV8E9O8xatEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVEuHqfMGijtQQK8SrcA52uw7LwFV0Od6UG%2FXKKExtX%2B6DFJEpdnJ3VuMj3YIO54Mr8Qusogj%2B3oNFTQhzWk4%2FOz62pdL8F6YgtxaHOij0SLWgN8BIMPD3ZiY9B0C6gTC2oIfnlHhxwXf4IX6Up8i3f8IfKRKi%2BDFMj%2B6yjLiazLHvQ6NPfnQ0GGyJx8MEtB1ABalSxXSTHNuMTo8bThX%2BhxWf4j33GHbdh0MBBNdqdEocsH6ZtEZf8lx377h0wFQBJnOrTLfhsK0t%2BGlLBsTuupcUgwHE4XfCVSThXx1QUbOaJOficIhcN53MBSApkdtxfgMnCgiwu6v2QHCwkA9tbFoKgUeTtk5rkHjitOOwYPMdiTm9K%2BrQk7tFjxNCfh3UoO9BfYDeDx1x5YRwfCAG6DmJG7rqSg%2BiMvjb33u6uaP4g2ZiBMnKkQvY7by9%2BjMKWmxNGDmBsFnMGtUh5yhGNNNVDtK4d6uPPTwwJuBtwGqaO%2Bw495thzj6Yj0Wp2z7lXTMgvZ6foUAH%2FE8RWTkGLRJ60Lwov0j%2FHQm%2Fg1Aqkx0P2YdsVlnmFi%2FIOXHhPXj%2FN7SyUkPTfu9DwduW0VJQu073RvW0H662HW5GX4rHm1giOqVFlUOkwSvUr6gHtJ0I%2BzUx%2ByOpISqHxMIyn7r4GOqUB%2FZTLALJAA7BrK2Z2BW4dKJ3Q3L1x0Ik1REO0GsvXbbgfqIZDEc3uv2FxVR7CT4AVhw3i1gw4Jp6mdVLjrsVW2hnMQm9b%2FA%2BWoxk%2BU9WSLAlEoF6wiExuNrNpAdl%2B0UD364YhNVZ0pKS23EhwC9G2yoLHfMAZPXfztbhuGRRu%2FKEeisC4xCUcwt0LZkhSDTnl4IO8S5Hu8xHKxnTOxA8FBCLUoZGP&X-Amz-Signature=bbd221be07d900578dde28d6e225383f4120429988689f5bd6f26da7782e273e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTH3MHX6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIHls3CjYl4vjsT1NSv%2BI2Ym6OrWsRoksTRe20Iww3Oa6AiBMDvveBko%2FoNCLmDwceLdZtwD%2B6xb6P3uGNsQqRBaOhCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4%2FU0Cp5ijvNR5OeWKtwDiEwD1Ej9DhIiNSwS0mhRvJC4h5X%2FZIUOjNF8P%2F3CfawrLODm2KHI7AGhF0ZDGcAuQiidKjtxPs29inwNBwsLKyFXm0uaeIY80DWDgazQx7gtpGRfWArU2pu4Gf8nG%2FUXe6D71iYTIh1MbeaNP8aayWqG1wFMFlDv%2BL59pM%2BYJkN7jlU%2BIvEW269lITZgSlX6C9dz5J7XiRsLEaSK5ywVz%2BRHHgtJIEvbwY2j19a2sQYKRCOqGk6XJvOmwBLmtWeBQK%2BIuzV%2BfNfcRpZWpr1UUTzifNnm428ZzO3fGndWgdDIRJEFhzvS%2BlqvvLYiF%2F9mMQp2xXk102BfcXFJwFCSEGe9zH4PXPCVJfBKz%2B0ad1UzJpO65RunXIlCYSxnhu1NDWD3h4a08V57t1DMXSgaS0EUUGJk1K9Mr3wl0x2Vi0RiOT2iU9YaEE5xVrfUXF%2FO3Hw4a0HTSi5K3%2FD0n5ua%2FkTYnCJjAKesx8UQx7iCkcCPWBDs9uPMor5GNeQUkFBIS%2BzYHB7cU45YL316a05l%2BBi%2Fhaoa12EK2SOIsdz%2FR1C3GLbUWt3m98P2rmAlZbH%2B%2F4vIjLPsHNadSFTbvySSdaZlsb7T%2BlSHk8W%2Fu5LwZF4GVInPf99UE%2Fgp4gUwt6buvgY6pgGExSuWAP21AqhzN45%2Fnnku33sYzwpMPpFAHk980QfQKGknkZBFL9WOzwm6JukhYCUkt1mu22fL5cs0IKEHSNml81jazAYikC22ZwodZzzE12kq8zG12qXuQi9GC%2FC4gNPoWZLaiC6nn2MOolCvpw%2Bv3QSXovJj7V4zq%2Fhx%2F2z8j2T249QxlSqDADfso9E47%2B5kV5S3Zs6OrxrW5RswTqOfmP5wXjZm&X-Amz-Signature=78fb04627388e1e2be894ca13186a752e6bf2091c3ea0edfa24d73bb5e43dcda&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3NW3LS%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAOeecECRWDOopP%2FKt1dULLRswaq%2F8ggRZC2dhdJMBgCAiBqGNgOe8DOho87xQaHijfGkVLRutdtm%2BI5KW%2F%2BkaO6VSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FYyeArMgRHtzFZmjKtwD4BWdXd%2BaT85ImUH38C8irHL0rSjIjmWN5f5imyxLPIemFnNHvCe1ngXFCREDjFXE6DKthOlry2H5fsnOpmbpNepdUh3YoMHj%2BIJBevGzDHn9JOLd3VpwR8XHY0%2FPnTCbiXkqLP6WToDjtEBbbTckfRngIzkkoBehdZpDpntZ3q%2FPoZ%2FiGCSbq8P5e06VtH0UgC3%2FwpteJsuwtSi2ZYZeRvbkPnrifbY%2Bbr3DB84uwYU8ftDCDqgiGxIZ75Kd08Wq0z%2BRBMwT20LD945Sfxaknu84P5xcmhy8CiS7fDgc3ZBfhUHCu4alWUQgy%2FtfMT%2BSv3n1Ul3euI7VdJq92s7lyGXDaJ4295U3nT%2BUnMbScjPdDDHgWbBGz0WJpNHi39TmWhCzl%2F53Zxud4nyK9CfsSyOULZ9bUBTiNB8tTgP73bl659liG7BeyiGR1TV1Uiar61GoGtuq0BjpaoeQIeudD4ThDlVB075Ss6K79E8Swsx17r1ONI65DR9R9JYh%2BhO2wprI5JYOk1JzNUllTWc4Z0uICnj%2Be2BUX%2Fu3C3VXYjiEpoOhV7O6ZeqheLej8ugb0EOO9z8oKbcT2HuUdoq%2FYloZ7ynmncmOsJwjPRJoW%2FtsugR4jBSdG3MJCqkwiafuvgY6pgEpGBpXJPNtR2rIcwltUKXybUsPSoawKcjsr1qrcX%2FN%2Fdutbdpxm1emXG19b4S05HR4LgUaKR4UoXPR%2B5T6HI0zwGprp1wrE0MMvhM30brUgLMEtFkdQrPc05ZzKYSMLaG3uk%2BVZRUNpFC8rvKshZDnC7qEf%2F3Illd%2FoLhPKXyy%2FtOUYJY0WpagshShGBIuZ8%2FUiLOrB01gZt4CQTrMXlyWAJLmLmH8&X-Amz-Signature=a759c21a39f6a2c2cbd4afb0300ed9fd53982fb935047487ed301f30f71108b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
