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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJO56D2U%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFVJUKRGVYrRpqMfCQv%2BMom4KPLJYvC2cdjNzdoMnKulAiBfQ8aV9Zn%2FLWjbSb%2FLqycPJpsHw%2BAJ7AYzvH0P%2Fe4chSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb2ZtEFCMKAkJJen0KtwDRgjTy0KQjrqR70QP%2FsyvTDl4dsm0QH1UpH%2B1%2FF%2F9CrSFiyarkI%2BCVuWmbIwxCPBF4JaWC9ELvY2QjlZMk3YbJ82gwzO%2Bu7OyvaXvaalFulPRRx0h0ETQBK9pwzShKgG5OpMzKWTjYpvZFWQ3b3rYWMc01Ypdof3cX7DdDsE8dKIY8WHhYfdglQFMTxFyNM0IRzGrifi1vbn9OFnTUvJhW3m6ZKesk2oPwQ0%2FPg5oHLKs5la1pIPItl77y0XtRf8ONZ5rV%2BAL8%2BoqySPpjCApHOMczqk%2F9ognG8N81xWDEBZedZ3gzoqGYuafoSZjPfyM1HSdjQO2aXu5%2BZl7T8przRnyl7rw%2Fjd5P02%2FKCk8IZfVsE2wvhaNzzKYy9eXOLTGtd6hv7ObUutwHB%2B%2FtvTcqAtu%2FnnmTog02ObMRkyzcqi%2FrJnNs%2BQy1pfjOGwP8GTVR%2B8UK44SNxzTslZpvfInYeUoDllDGdnYk3wMOLuqLO35FY9QQ8aV2H3QuxbAtTQS5tUMOijP1cyej41qCzOxwoZbyVixFT0q9FnvoGizosHhQ5vRKW4x2f0lbOd5NjKZ0azWDlRGZcchIVHVjkJtyIyK2ChC5bRzMfjaozRPSfhTAc4wA2okZygYJbMwueDGvgY6pgHQw1WpxnzOoVkbW6EB%2B2sqtz33JLw1q%2BN4smh2rU6or%2BXPjNEZ2idMXoJmk8rOPHudbkXdmfD9o3DXsFhGP%2FnVJx7Cybu0jdhvPW%2BJqb91punnlKjGoJH3wuf1%2FQsVOo1a2Cv6fxRf2P5DfxEaHXUMJRlkwd9KvYQzGdQDh%2FHc%2FcAGIFyMgAgeyEQ8YuhQVhhZCOoieqHszclhHqHdRPUVVpUUIhcV&X-Amz-Signature=bef3d0cb51de062a85fd40c18114c1d6b43a0c231d54c1a5e806954dd95d0c21&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJO56D2U%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFVJUKRGVYrRpqMfCQv%2BMom4KPLJYvC2cdjNzdoMnKulAiBfQ8aV9Zn%2FLWjbSb%2FLqycPJpsHw%2BAJ7AYzvH0P%2Fe4chSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb2ZtEFCMKAkJJen0KtwDRgjTy0KQjrqR70QP%2FsyvTDl4dsm0QH1UpH%2B1%2FF%2F9CrSFiyarkI%2BCVuWmbIwxCPBF4JaWC9ELvY2QjlZMk3YbJ82gwzO%2Bu7OyvaXvaalFulPRRx0h0ETQBK9pwzShKgG5OpMzKWTjYpvZFWQ3b3rYWMc01Ypdof3cX7DdDsE8dKIY8WHhYfdglQFMTxFyNM0IRzGrifi1vbn9OFnTUvJhW3m6ZKesk2oPwQ0%2FPg5oHLKs5la1pIPItl77y0XtRf8ONZ5rV%2BAL8%2BoqySPpjCApHOMczqk%2F9ognG8N81xWDEBZedZ3gzoqGYuafoSZjPfyM1HSdjQO2aXu5%2BZl7T8przRnyl7rw%2Fjd5P02%2FKCk8IZfVsE2wvhaNzzKYy9eXOLTGtd6hv7ObUutwHB%2B%2FtvTcqAtu%2FnnmTog02ObMRkyzcqi%2FrJnNs%2BQy1pfjOGwP8GTVR%2B8UK44SNxzTslZpvfInYeUoDllDGdnYk3wMOLuqLO35FY9QQ8aV2H3QuxbAtTQS5tUMOijP1cyej41qCzOxwoZbyVixFT0q9FnvoGizosHhQ5vRKW4x2f0lbOd5NjKZ0azWDlRGZcchIVHVjkJtyIyK2ChC5bRzMfjaozRPSfhTAc4wA2okZygYJbMwueDGvgY6pgHQw1WpxnzOoVkbW6EB%2B2sqtz33JLw1q%2BN4smh2rU6or%2BXPjNEZ2idMXoJmk8rOPHudbkXdmfD9o3DXsFhGP%2FnVJx7Cybu0jdhvPW%2BJqb91punnlKjGoJH3wuf1%2FQsVOo1a2Cv6fxRf2P5DfxEaHXUMJRlkwd9KvYQzGdQDh%2FHc%2FcAGIFyMgAgeyEQ8YuhQVhhZCOoieqHszclhHqHdRPUVVpUUIhcV&X-Amz-Signature=9511a40b91ad731dd3afa13fd0864d0e94471f3c70c2a2ab81232e9590766950&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652TE5ZTO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCDPwPaG%2FitR2862J9BujkTUTm9FdeN4JTR3nUBjK1BUwIgW2yDHdFEQDmQ1x%2BMYEmkv21MsBrwOyaYmebgdYc8V%2BoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeHDEi88HWmHX4IwCrcA40F00n8%2B5sz4RqTvDr8SRfZydi7dSSORxhndE0M5vaNbdclBf5lkYtQ17qu06ssBqPboiqGun3Z%2FNMzrse3SdlFGXBVRA%2B63r%2BnfohgUeMfBVOFIVlzNTQApnvPD0ceEAvhLDa5Z4mL0Gmn4cR7Nj7Bc0v6NPxVnBmq%2B%2BIRR%2BlE1Hbx%2FJPXhFVGRPFkXpaIpq1ajQL89AE7Cq3GJ1BllgBbZVsXn14HWZSkef629mC2PMgjhtxaNpgU6GtbTMF%2F8GfkFf5NxohPaGWf9edZxsIsfRNfYeSYNLBDjvwASStjr8Z4tFrM6Ul%2B5dqMBl%2BSd8DpoSPhXvhacqpOE5%2B%2Ft40SBwyrNAVbV1gEcC8%2FG9Chr%2Bx6RHzXnh4hiudnyvt1z9nuj2vkLsPnejP9I1%2BjXLukvMZub9tMwSFplMIv38uw6ixPHOyZcV0mzbuBQFSv4ZiVLW%2Bq0hX8z%2Fn8d%2BFCpfqGJDEoS7JdldIIADnHWck4Uw2RwLTqB4x77kj3QtQb%2F5nfyni855fLqY8X8l04%2Bz9e3Xiw8ZPfSiQz9a8iwRCVXZ1Wlg%2Be4uLJSb3CUh9LI7%2B37r9AByJzoDPdgREl0SHfW00TKckGe0nqMe1UAJF5oqoqgGx%2BhuHJANcgMK3hxr4GOqUB6ZJ%2B0TcKODhQqrM8sb%2FxXphNQEIQ3y2HoRW1SDL9Tj8ienj2SHEIjrcl7Rol9QxPO6zOXoW%2Fgoy0YTP4yefQQ4IpSjE8S5%2B9WQDgsGobyn5OHOe6LscqOcMElTqtWzPBO67RdrWWgr81UQMAcEEcaB%2BjrUAdabT9ngozTQ9bLOAxnTzW3cJigcDx8168KXu4Xagwj%2F453R5xK%2BxD306N%2Fki5Tf4X&X-Amz-Signature=fdd7071948f206f0626c9c1640fd507f8850ff8ba9057d28333e2c81ac73d012&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U4UE6QX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCrJNtkVWMEONSJdH6pKSRTXEY1THgDg6YpMA34Ts8eZwIhAJLK6VpYuU%2FL5%2FzS351MBrUomw%2BpfLTBhJ5s4e9WMdmsKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjxnRoUwZjPe83Ne0q3AMIJqwN6JXPMGL353C9m3EUsOGqJvVMrgarHBPBKYpCW5316iT1sQfe7Xx8pzCgT7bmOI8DqNouBuVV%2BWdYH6pb174J7ua2V4AheimQvXL8F%2Bfq5kwpm%2F2%2Fa4xX6MpmiG9Q2%2Bw1jrB4vCMxqsky5aBGZ08noQ1zAan6jazz4kYXZydIVmlOVj%2FE3apBpT4YOIUVY7il5603SdKEuS0JkQYFBwpuIsEuM3tb9NLcclhFzmZuHTDnmhJX9Io4n87v6yK0m%2FZjBayWAkakMkTP1ZUwyhHgEEtzBBmDENrxyZ2KUUXxCmSIcUDAFzxsXpJU2mY0%2Fc%2FpEVh5vENwnI%2BaVK08JSbjmQY7hX%2FD2KoVvKRwdtC8NsJFW%2B7a9%2F9CQMjNBYqoFDF%2B2I1rmSRrnh6ID%2BRp4xyc2PokeSaO7MCXBqtLn2cMfi6zvoGDoxW3DLnCVUEYS6mRkhDhLc9J%2BmROK4f2ek4JvMhiOQu0yZ1r93rndvrRDbuWUh%2B4QN6CkEYYSHkYZuJTFj9MyS2ymsYccPFx25yL86H80aHAQGQtyhMMJzG7AXNvT%2FxJkH37SqFPDfQ33vRv9HAszGCPSK5BOLbx2Hd1JrZzsNIy2G9sBJkQV%2Bst9%2FGfqsyAvzZ8KzD638a%2BBjqkAb6HHZKCDNL0wSun99z8wYroV3QwwPwA1fsYV9fUGEZK%2Ft0z28Hq7byqGX7xXFUqe%2F0bZQRCUOQZKQvjobHp7uGaTCcRKUA6FBzkOGMxZNQ1FPa8SI5ECHZyCfEL8p1U0l8KpG9sb8GvOGPg%2BHbfOVxxZhxePDXt86xD8feg15RIfCOyqulnysueWJXagUMAQY2Pt29eaB8Cq1XxOQZ%2F4HA3OBIg&X-Amz-Signature=a8b68150bbc85711ed9915573e60fd73f3a066a3ece9c4a509eaae72713b4577&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJO56D2U%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFVJUKRGVYrRpqMfCQv%2BMom4KPLJYvC2cdjNzdoMnKulAiBfQ8aV9Zn%2FLWjbSb%2FLqycPJpsHw%2BAJ7AYzvH0P%2Fe4chSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb2ZtEFCMKAkJJen0KtwDRgjTy0KQjrqR70QP%2FsyvTDl4dsm0QH1UpH%2B1%2FF%2F9CrSFiyarkI%2BCVuWmbIwxCPBF4JaWC9ELvY2QjlZMk3YbJ82gwzO%2Bu7OyvaXvaalFulPRRx0h0ETQBK9pwzShKgG5OpMzKWTjYpvZFWQ3b3rYWMc01Ypdof3cX7DdDsE8dKIY8WHhYfdglQFMTxFyNM0IRzGrifi1vbn9OFnTUvJhW3m6ZKesk2oPwQ0%2FPg5oHLKs5la1pIPItl77y0XtRf8ONZ5rV%2BAL8%2BoqySPpjCApHOMczqk%2F9ognG8N81xWDEBZedZ3gzoqGYuafoSZjPfyM1HSdjQO2aXu5%2BZl7T8przRnyl7rw%2Fjd5P02%2FKCk8IZfVsE2wvhaNzzKYy9eXOLTGtd6hv7ObUutwHB%2B%2FtvTcqAtu%2FnnmTog02ObMRkyzcqi%2FrJnNs%2BQy1pfjOGwP8GTVR%2B8UK44SNxzTslZpvfInYeUoDllDGdnYk3wMOLuqLO35FY9QQ8aV2H3QuxbAtTQS5tUMOijP1cyej41qCzOxwoZbyVixFT0q9FnvoGizosHhQ5vRKW4x2f0lbOd5NjKZ0azWDlRGZcchIVHVjkJtyIyK2ChC5bRzMfjaozRPSfhTAc4wA2okZygYJbMwueDGvgY6pgHQw1WpxnzOoVkbW6EB%2B2sqtz33JLw1q%2BN4smh2rU6or%2BXPjNEZ2idMXoJmk8rOPHudbkXdmfD9o3DXsFhGP%2FnVJx7Cybu0jdhvPW%2BJqb91punnlKjGoJH3wuf1%2FQsVOo1a2Cv6fxRf2P5DfxEaHXUMJRlkwd9KvYQzGdQDh%2FHc%2FcAGIFyMgAgeyEQ8YuhQVhhZCOoieqHszclhHqHdRPUVVpUUIhcV&X-Amz-Signature=9ec7da3f101ed9b1fc5b1a14de8792d7eae3238b0f2568d0a8444228fcd15528&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
