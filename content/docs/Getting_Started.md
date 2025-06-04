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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCV4Z3ZX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGYXhVhmmB5AE%2BAQMGNHDLgYCYYrTi7LIE3J0wFqXABpAiEA%2BANRoLeaQxt0A831QE%2FCPp4u105Jh0kCerhTKpAJdncq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDG3zmsjCOx0OFPw2PyrcA19Li1KPLtzpk38GBjgFe0MEh8svtDKb9cZtPCoSYQUT9wnaM09CP6o9v75VTHzFV1JibDQzD9eI%2FCU4QXYUAeooHxiu0EuvGHaAVS%2FLJFMt9Ax48pWYYBUv5BWAP2ddEcSOzMyT7yAfzWQRKJnEMrkIIUV%2FPUGO8o8Ca%2BZSadYNdtOL4EWeDyiBf6ku7D4wg%2B%2FwuGUoSRV8kgfsyVGZdL%2B1K3plwKGcIJUrfI6V4C5IMhx4GAosi4fwTjBkE1VWdVqgjotSsgtc%2FUeWIcD0GTRU1i1QV%2Bmy6knb9LiAS2JtEFPCJ8sAxinlBiJ0F2%2FjnLcOKr%2FZ3GqOlhlI9ZjlC%2FaG34fwdwuYhzayHswSTeRC6XYE2hQIRGCGHFAj9hKNGz%2BJeMHj8oe8TwrIa9G6xgAWUuqnWGjLReFfteT8tK%2B39mp%2FxW6jU76XFW6QfQdFUFBmRWlmsvqGLcb01ivS9wK7DZ8saF8KpaPU%2FogkWvbzEeHXzXWOl52ZkRZrE6v8l56JVMzwuWotx41XoSKg3tfUBjz%2FgS37NOn9R%2BhsxfDi604VrvGK09RguDzKpgbxwN8VR226pwjXyen5PIJpwDjEaxHB7PA3ry3E%2B7CNqbCIg4dbu9M1CAO%2FP86SMI%2FegcIGOqUBWUu2M36gQBxLMAjsX2Jvy90Fu8gLhz9jb5LyD8dGDDApkVo9zc%2FDTUYJ24A7MCYAdbvx87rBw7AHlBqhDFlWhFnHZ1Rw69mI3Ct%2BZPVY%2BuGCL6nwoJrBOTAxMJFurgIagwDhFoodkVZwfTS4crfENGtIYnHbyKNIcJ8UP1opmCZQiboQwO0%2Bj0Yo9v4I2VhToYRRyq4A3t8lrL2ukTXqYZOe7VFy&X-Amz-Signature=28b33cdbd7f91f8dd72014c3b161eaa5c706abeb89fd9a5bd7cc3e4ee7cdf774&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCV4Z3ZX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGYXhVhmmB5AE%2BAQMGNHDLgYCYYrTi7LIE3J0wFqXABpAiEA%2BANRoLeaQxt0A831QE%2FCPp4u105Jh0kCerhTKpAJdncq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDG3zmsjCOx0OFPw2PyrcA19Li1KPLtzpk38GBjgFe0MEh8svtDKb9cZtPCoSYQUT9wnaM09CP6o9v75VTHzFV1JibDQzD9eI%2FCU4QXYUAeooHxiu0EuvGHaAVS%2FLJFMt9Ax48pWYYBUv5BWAP2ddEcSOzMyT7yAfzWQRKJnEMrkIIUV%2FPUGO8o8Ca%2BZSadYNdtOL4EWeDyiBf6ku7D4wg%2B%2FwuGUoSRV8kgfsyVGZdL%2B1K3plwKGcIJUrfI6V4C5IMhx4GAosi4fwTjBkE1VWdVqgjotSsgtc%2FUeWIcD0GTRU1i1QV%2Bmy6knb9LiAS2JtEFPCJ8sAxinlBiJ0F2%2FjnLcOKr%2FZ3GqOlhlI9ZjlC%2FaG34fwdwuYhzayHswSTeRC6XYE2hQIRGCGHFAj9hKNGz%2BJeMHj8oe8TwrIa9G6xgAWUuqnWGjLReFfteT8tK%2B39mp%2FxW6jU76XFW6QfQdFUFBmRWlmsvqGLcb01ivS9wK7DZ8saF8KpaPU%2FogkWvbzEeHXzXWOl52ZkRZrE6v8l56JVMzwuWotx41XoSKg3tfUBjz%2FgS37NOn9R%2BhsxfDi604VrvGK09RguDzKpgbxwN8VR226pwjXyen5PIJpwDjEaxHB7PA3ry3E%2B7CNqbCIg4dbu9M1CAO%2FP86SMI%2FegcIGOqUBWUu2M36gQBxLMAjsX2Jvy90Fu8gLhz9jb5LyD8dGDDApkVo9zc%2FDTUYJ24A7MCYAdbvx87rBw7AHlBqhDFlWhFnHZ1Rw69mI3Ct%2BZPVY%2BuGCL6nwoJrBOTAxMJFurgIagwDhFoodkVZwfTS4crfENGtIYnHbyKNIcJ8UP1opmCZQiboQwO0%2Bj0Yo9v4I2VhToYRRyq4A3t8lrL2ukTXqYZOe7VFy&X-Amz-Signature=9d6b8827747607d257e1757555abe45a6a854dc5c52b9684a56841fe591a100b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCV4Z3ZX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGYXhVhmmB5AE%2BAQMGNHDLgYCYYrTi7LIE3J0wFqXABpAiEA%2BANRoLeaQxt0A831QE%2FCPp4u105Jh0kCerhTKpAJdncq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDG3zmsjCOx0OFPw2PyrcA19Li1KPLtzpk38GBjgFe0MEh8svtDKb9cZtPCoSYQUT9wnaM09CP6o9v75VTHzFV1JibDQzD9eI%2FCU4QXYUAeooHxiu0EuvGHaAVS%2FLJFMt9Ax48pWYYBUv5BWAP2ddEcSOzMyT7yAfzWQRKJnEMrkIIUV%2FPUGO8o8Ca%2BZSadYNdtOL4EWeDyiBf6ku7D4wg%2B%2FwuGUoSRV8kgfsyVGZdL%2B1K3plwKGcIJUrfI6V4C5IMhx4GAosi4fwTjBkE1VWdVqgjotSsgtc%2FUeWIcD0GTRU1i1QV%2Bmy6knb9LiAS2JtEFPCJ8sAxinlBiJ0F2%2FjnLcOKr%2FZ3GqOlhlI9ZjlC%2FaG34fwdwuYhzayHswSTeRC6XYE2hQIRGCGHFAj9hKNGz%2BJeMHj8oe8TwrIa9G6xgAWUuqnWGjLReFfteT8tK%2B39mp%2FxW6jU76XFW6QfQdFUFBmRWlmsvqGLcb01ivS9wK7DZ8saF8KpaPU%2FogkWvbzEeHXzXWOl52ZkRZrE6v8l56JVMzwuWotx41XoSKg3tfUBjz%2FgS37NOn9R%2BhsxfDi604VrvGK09RguDzKpgbxwN8VR226pwjXyen5PIJpwDjEaxHB7PA3ry3E%2B7CNqbCIg4dbu9M1CAO%2FP86SMI%2FegcIGOqUBWUu2M36gQBxLMAjsX2Jvy90Fu8gLhz9jb5LyD8dGDDApkVo9zc%2FDTUYJ24A7MCYAdbvx87rBw7AHlBqhDFlWhFnHZ1Rw69mI3Ct%2BZPVY%2BuGCL6nwoJrBOTAxMJFurgIagwDhFoodkVZwfTS4crfENGtIYnHbyKNIcJ8UP1opmCZQiboQwO0%2Bj0Yo9v4I2VhToYRRyq4A3t8lrL2ukTXqYZOe7VFy&X-Amz-Signature=ff207fa1f68b0b87c7df2a033b2cdd3f047da880974bda25e8d8bb60603a9bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRBJMSWB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCz%2BTPhFLl0qy1Djcd4BCZeTJr2DiLrXLyfCb8YoCDp0AIgEjvW5pfiZulpvjgpjQKoIftGqxVLOFiQuWnnjZMS67gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDCnp5Djaqva%2FntpZSyrcA6BJ9hqee3C71Ivz75ClDMnJ3EAb3OJoVg2Xx1VSJSc4wswGtidXX9B11ATMswgUpJc1KJYR54ArxUSr37utBZnb9bog6RqLMcKv%2Fqxvt4LX%2FHP44USlIClY8BJxUBC6tIaltLaNnAWNKIprl0c6cUIqyn%2FETISio06SCMsczv%2F8VB5HHA7rkEv9sE10M%2BOaGPmykkl5VYCR8f5bqkCP%2FKz9Tj3dZcyqtaD71wwM07ELFXYyH2CErc5Ie78heCqL9MZ2thHYq7PspvQYALEED6D%2F5g%2BgEwPI%2FuLAoxqm0TDmRz%2B8Xgb5J%2F9ObKYe5OMNsABmPBY4wAQPRKfc908jgTs2hCn%2B8iVZ0TMZM%2B5TcY%2BRCtwqAvKKRK3zI0kL4ElwFSp%2FCjib4fBf3fd4mVixuvrFmXJXG9WBPf40YOIfOhwszgFv95F3LfjCmzsK1g7SSeWEsLsOsTPsNwkUzSTKVWB6Jw75sWzEnNAdHG6FS8qdLv2poIxZ3skiElkhxc4GoGCB0%2BHITZ4cLXSy9RnGbnTLylNIFIlofroDXQPGoupdZQM1xWJvjFukk3kUYvDl9TSggw2urBzfYMvVwKm6R%2Bzmj5CMFfdEKDvkpTcYwpcTeU0mfPembskEp%2FaFMPregcIGOqUBi2iUKJOSDCXE21CTwMFDcwqaVS6XDAd78RiaDthj%2BsKpnulvk0QoIZFA%2Bx0r2h8xStzAKV7rMikchxPRZAiTFiRtwAgQgOuacU8t1vE9oZJ9%2FOt6NS6DiatfY99mQMcqlHOzr%2FIO3VmScJFFxTZFFC5XB5kUrR%2Fi5Jr0XyEqqSD4%2Bh0gmTxnPbAp3Uk%2BAFqCnZUDIiFrh2zwdNHgHaOXtGgp9R4b&X-Amz-Signature=abd60c2a239ca58878b1e056bbd8cf7d85a9f0a1a66cba6d9db474f51d5406c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DEWOMD%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDzSka3wvSs8dyxvMt%2BjmW6KvT0hNvnUyT9GWcOVCSVuQIgGb6xjrdRqcSDvjI7OGg07SpOr6A0167sKhjdMVAMdqYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJTV13n5XLhzf0J8byrcA5SQunR9y2zvasJG%2BwWzXHxGINP%2FVtzmXEKHPm1Rr77TXLHZoPfE4tGejLFOwUHxxXZyunB5DEvltXWtb3a79cs0zAgnk%2BmCKLQ5nmfEBiq7XqhHv9p%2FvZU6menm6jFScvEj6U04cP38wlLHbeMuukt2da4MWomKHzB9CI3mCnfHE1%2FSEK3H5VAX%2BGjTo1X%2BUBG3jSia6ZlUGad2f5LDZxxU5bgDkSQH2xR63zDnKF71o5hzkuzKCW4OM%2Bd4Pvi%2BB0ySGgKxJ9QeqZVXGyjRlkgOPP9VzdfHOLyCwkOq%2B9G0igpFzObM%2FFA0lC3D23sdw4jZSgGaBGBAmsyijjN2Cx0yhJ%2F6YUjesKYfdCmM2%2BYMVNZ68TGCajTo%2B70jmuPvI%2BRiEi9H1FJnrIaTCVYrHpN66Y0B2%2FyOGJKIHVGV%2Bs1Z5q2KKHs%2F1ON5HfQvyoyqWaLbMEX7B%2BpjbrvlsYPdrRlW5797nTYL%2FFicSPtcpGgv96Yba3Eiy0Sg3HnfOHLF6bc6gvkstM8FwmpcFFIoq48v809xeKXX5IVCNaej19YMGmvbCfuxgrH7iyF5R0lrSxi%2FfrB%2F%2Fxtf4NyJ3WV3m3XZ9yh7RW0dUyfsEkuo9THQ40pQHz2EteolNuL2MNzegcIGOqUBHWZRU4OzBS0OzOq8akXGkCwmQ25MmwkvoaawTu6XLvtK5kKweOl1iFeKTU%2BKmrKRTtsaIOeV4NbMWGf34u2l%2Bjp%2BA73CS%2FNOY9tTiDYN21K4CtCrFyThiJqIT5lhTPoYsl%2B56V6axCitpD39Mb92WEvmsllzcZ487frO5Is2zoR7b6ejBJgOzCGeTfmITRKyVQhmMN0tnjQaKA7VP5Nx9Q7xlx04&X-Amz-Signature=e8027c24dc2d146060cbbb67f242d32408daef2dda372d75162d50a2b13d0172&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCV4Z3ZX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGYXhVhmmB5AE%2BAQMGNHDLgYCYYrTi7LIE3J0wFqXABpAiEA%2BANRoLeaQxt0A831QE%2FCPp4u105Jh0kCerhTKpAJdncq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDG3zmsjCOx0OFPw2PyrcA19Li1KPLtzpk38GBjgFe0MEh8svtDKb9cZtPCoSYQUT9wnaM09CP6o9v75VTHzFV1JibDQzD9eI%2FCU4QXYUAeooHxiu0EuvGHaAVS%2FLJFMt9Ax48pWYYBUv5BWAP2ddEcSOzMyT7yAfzWQRKJnEMrkIIUV%2FPUGO8o8Ca%2BZSadYNdtOL4EWeDyiBf6ku7D4wg%2B%2FwuGUoSRV8kgfsyVGZdL%2B1K3plwKGcIJUrfI6V4C5IMhx4GAosi4fwTjBkE1VWdVqgjotSsgtc%2FUeWIcD0GTRU1i1QV%2Bmy6knb9LiAS2JtEFPCJ8sAxinlBiJ0F2%2FjnLcOKr%2FZ3GqOlhlI9ZjlC%2FaG34fwdwuYhzayHswSTeRC6XYE2hQIRGCGHFAj9hKNGz%2BJeMHj8oe8TwrIa9G6xgAWUuqnWGjLReFfteT8tK%2B39mp%2FxW6jU76XFW6QfQdFUFBmRWlmsvqGLcb01ivS9wK7DZ8saF8KpaPU%2FogkWvbzEeHXzXWOl52ZkRZrE6v8l56JVMzwuWotx41XoSKg3tfUBjz%2FgS37NOn9R%2BhsxfDi604VrvGK09RguDzKpgbxwN8VR226pwjXyen5PIJpwDjEaxHB7PA3ry3E%2B7CNqbCIg4dbu9M1CAO%2FP86SMI%2FegcIGOqUBWUu2M36gQBxLMAjsX2Jvy90Fu8gLhz9jb5LyD8dGDDApkVo9zc%2FDTUYJ24A7MCYAdbvx87rBw7AHlBqhDFlWhFnHZ1Rw69mI3Ct%2BZPVY%2BuGCL6nwoJrBOTAxMJFurgIagwDhFoodkVZwfTS4crfENGtIYnHbyKNIcJ8UP1opmCZQiboQwO0%2Bj0Yo9v4I2VhToYRRyq4A3t8lrL2ukTXqYZOe7VFy&X-Amz-Signature=3ee5715f7f7d53f9b41e8b283070701b3c11705d66f501a547f2d3d59b956f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
