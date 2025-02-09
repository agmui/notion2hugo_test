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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU7YMRV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXqeP7Mkanx3N6L4slEGDOY%2BSauNaiHiNOCFpkKP0IAQIhALi0gLl8ktSeCnTHoWmIG1VbBxVHhL8qdLg3Z%2FLkS5iRKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4aLDBN2YgTRro3zIq3AMHsOjRXxXGZzdX7LM4Ysa%2F0LV%2FDlH7n7Ju%2BAVgorUIxUUMIjrnXmiy3%2FfL5sfU3VEsVwlPqYXyNxXAAOHT4heTatFqeQvIkvU91LKajne%2FVFbmiZvZ3jGZSwOfYFqD3fHlh3q8kYTndzImLUp0KfxyZpzzuwPIkSSGgo7yqwEkZ0M0dGjPP%2Bmklom2D7p7s93LfF3%2F2uYZH979oHj5RN43igkwBc2aGC5X60Zja97wahqPFpCV0f7nYMhBlaZbZe8NECgB3BilhHmFMSQiUyCP116BVI3lrZQMOnRe8tecDCbo4wobHvv4ulTTLQQ5u%2BRsth5lFSaOHzY0NXgoeiUj2iLm9cn0d78WGQ2b4UguZpIbeG2KyRkC6MmpzR5ASrGr04wWI4zNzdSS%2FY%2FgLetnb%2Fo5%2BRwYXLomuagEYKarhzZFeT%2FJNhFB5Fh63UA6vV1RxlRu37fxdQ47U3Fg1yTY%2F48JjN2ColZvlb7H8YGP36ZYSms%2FemRi3ntvO4iy2I99SKl6PPcIcrXb49DpR9CkOpG3DpABfowEmMFqYmSQ0noqjS6xLA9crJPcxp%2FTD3TRsDli6y4pWHSO76RL7pQa65SSF5%2FEdNd2qS6a86bxZzFeRx6U7txGdpG%2BgTDXvqC9BjqkAeDIfHB8cPKoduylYJ%2B%2B41RDDShHNlwO6sqwc%2BLLxhhGbI9p8nd%2BD2hb7VawLJAobgtRpXgDsiv4NkNXChxGjBg6lXTFguxhN8LkKzSRLK6whtlKaVomxhCUKB1xNJIiujgznLYFsC0WTa3YXdZJytYaHFyWRDleoy9Plq6Jj%2Bi99jnRAiy5qD5pSnJEWTLsa2zsnDvLs4gRfGpm03RVR%2Bz0HQrk&X-Amz-Signature=d7023db89921f402f16daf3f542e98aedc6069b34b2ee16a91a9685aa88c39d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU7YMRV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXqeP7Mkanx3N6L4slEGDOY%2BSauNaiHiNOCFpkKP0IAQIhALi0gLl8ktSeCnTHoWmIG1VbBxVHhL8qdLg3Z%2FLkS5iRKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4aLDBN2YgTRro3zIq3AMHsOjRXxXGZzdX7LM4Ysa%2F0LV%2FDlH7n7Ju%2BAVgorUIxUUMIjrnXmiy3%2FfL5sfU3VEsVwlPqYXyNxXAAOHT4heTatFqeQvIkvU91LKajne%2FVFbmiZvZ3jGZSwOfYFqD3fHlh3q8kYTndzImLUp0KfxyZpzzuwPIkSSGgo7yqwEkZ0M0dGjPP%2Bmklom2D7p7s93LfF3%2F2uYZH979oHj5RN43igkwBc2aGC5X60Zja97wahqPFpCV0f7nYMhBlaZbZe8NECgB3BilhHmFMSQiUyCP116BVI3lrZQMOnRe8tecDCbo4wobHvv4ulTTLQQ5u%2BRsth5lFSaOHzY0NXgoeiUj2iLm9cn0d78WGQ2b4UguZpIbeG2KyRkC6MmpzR5ASrGr04wWI4zNzdSS%2FY%2FgLetnb%2Fo5%2BRwYXLomuagEYKarhzZFeT%2FJNhFB5Fh63UA6vV1RxlRu37fxdQ47U3Fg1yTY%2F48JjN2ColZvlb7H8YGP36ZYSms%2FemRi3ntvO4iy2I99SKl6PPcIcrXb49DpR9CkOpG3DpABfowEmMFqYmSQ0noqjS6xLA9crJPcxp%2FTD3TRsDli6y4pWHSO76RL7pQa65SSF5%2FEdNd2qS6a86bxZzFeRx6U7txGdpG%2BgTDXvqC9BjqkAeDIfHB8cPKoduylYJ%2B%2B41RDDShHNlwO6sqwc%2BLLxhhGbI9p8nd%2BD2hb7VawLJAobgtRpXgDsiv4NkNXChxGjBg6lXTFguxhN8LkKzSRLK6whtlKaVomxhCUKB1xNJIiujgznLYFsC0WTa3YXdZJytYaHFyWRDleoy9Plq6Jj%2Bi99jnRAiy5qD5pSnJEWTLsa2zsnDvLs4gRfGpm03RVR%2Bz0HQrk&X-Amz-Signature=50ea5d1dddee3063690037a63c34148a1e0fb2060f071030ada4f42130668af4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4YZSIE%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhjvBRyJr7GglJuaRACao%2BxkvFbg6C2xDGtwjVrwLXRAiEAyHOR7o3MFrdrSsk%2Fz8GcUHPWyT6MWIZd9xkfJaWMfVUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL55257LRlsmwWPeLyrcA3liAjDY9DjcZdQ181ikdCR2DITLrwcNqua5IEbhkEzuUTlpbrFSaV7Z2xcA759U3KFiD0Ydu8SXVU14%2FdrhP0KqwlkE3SYdIactXxzVzYzsjc3CYIZLu0R%2BYIsg1WpVSnEUd3E1V2RhiJ3pVoFihCBbDvb1qfVQ06L7T%2FuTTHWcfy7t5jWsS5wURSQO6FtFo%2BCC1%2BDKQqjhF0PaBT1zesTf%2FhyZi5zLc8pgHR4j1djBHRAjysJOfHRqNwHGdRxJs4hSAhjCAIA%2Bzi3B1QiVHBWD5Xq%2B1dTsL5fT%2BSnyjRYSijWDOfDqbSHIWSkYhXsbmGO9j9bbTqHm8YPAB0Y2%2FRKUi4YSNC03ghG657vGKd2kDkFf5QDGO6vZPVEbc2FN4nuNa2I99HIq%2F38VrS6yGHRe25nCbAD50%2BplThNX3uGOy1fmaX08khpKZ2MrFshKNA1lZYjt995i8PQJK8z5d8x7yF3P0dETA5tG14f9rLpqu6tYLSdSlqYmbfkSZ2EFmDxEneIlO5YQEFRj2fGQyJ0nga2yi4u7QLlfrCubO1AVdKgiJeSi%2FpIij6yq7ENu8jv%2FAauDQguTYVLY9uythm1IjOd%2FxGHG4V4irh2%2FllGSq8CiGqBFyErd3k7fMI2%2FoL0GOqUBw%2Fy6KZfxUesQqWC1MZQ%2Bvc%2BZJNGfyWs12zw1RVXYTnIKirfQGBwzXzQ1EsFZIc5wTJlJCKS8tLX8FXBtLq6b0jqqTNmnZQh%2B77vf1KHd3m%2FMe9EFHB9keRzKeyvlARqf9F%2FZMT1%2FqSeOelFdbbV6bfZCs5CAQkVGDtRuFYTnRCaO8PzV81ODJKHI2vB%2F%2BYgO%2BUBbdwAh9gaOwN5pSstNS%2FU4%2F4En&X-Amz-Signature=81d062534fc8d05efb8c06ffc546aa609ee7589f84e5f466c654e6b40312b71d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZBBAY7X%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUtM%2FwC8PBAAUNQEybrCKdKKTxACWszb9L1ebsDBn7rwIgJ2nvixhj44qrel%2Fh6GrqaqkGiMc5MIgD1buGOGFh3R8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHlYF%2FMG4u9p4jD9mircA3CrpnSsymRpEvtjyra9n3SLXBmLs1ed%2BUpWsfPgFsnZ2JvYkheLIXgV0Q1Z1YYKwP3HUzPXDPKy4bXswaQmTKJJNYUQsdNFsqzbQNoTXqzx5StakHHgZhy01xEoUg%2BOlkqwVbwPrc7H7b3OjiCtUeqh356e71FeYiqEmqMTKJ7qq5D%2B%2B%2FS96YBuAtxa2Gnm1lbU1Ea%2FwM0kQ5JhNpt4%2B7bPgtaMmqI3%2FE%2BoxdFtDGUFVzqkOBjKzZ1xAdvz%2F22Y3sEESsRqMmUfwJgTP%2F8iyd9NceuWtpuYoPQNEwB%2BGJ9I5iDHDSqtEia79EvSXNGE8FPgQZkpu%2FAxdYjI2IYkWgmU9bEXFI4Yjej0YRfVNcm4JbmL1JnO5M5FP78oGrlKLM3tYketM0dxGW%2BFxm0CuQM24yr%2FTfi%2BCvftP2imEg2Rk%2BzuJlWoNjfz5sp9Yp2sMq74RXqQt%2BtM2QROtTORtvT9Bb57R1J47u0Rqe5rAnxjV9%2Bodb%2Fqa48T1ZwSw6mUf%2FboKwmhzAw0EysY1kjhXm%2B6Zaitvl%2FDktHtsBjLf98z2ZUqyE5YIl4ABDLwOP4Ah8WTZkUs3RvZnzEf%2FRgD5LkGUOBnOXAfgpebK0ryxPUwImLCdTYMth8zOQ%2B5MPS%2BoL0GOqUBtJnHaaPgEiGurTO2EXT7QsbQnPr6CEwQANqFDvAsS6cbwbGCUPR4Lbh79K5EL%2BWn3HaZjUmGy9cJCoRcOJRkgPp8%2B%2BSibrD70hw%2BYsCDCPyRi2zyXPf4IcD0bklmFNPTlS3axXgLJJydaM61Ci34vs2LKLZ%2B1TRKGfMke%2FseLPezKBA1z2B5%2Fv1QG7H8ZG1oHRYL1LQxFqD%2BNeecfm8v2%2FjSMSHS&X-Amz-Signature=8cd1ea8eadf0f1d912056454a710684c801c756abdaed978f1b486c20e44cae6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU7YMRV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXqeP7Mkanx3N6L4slEGDOY%2BSauNaiHiNOCFpkKP0IAQIhALi0gLl8ktSeCnTHoWmIG1VbBxVHhL8qdLg3Z%2FLkS5iRKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4aLDBN2YgTRro3zIq3AMHsOjRXxXGZzdX7LM4Ysa%2F0LV%2FDlH7n7Ju%2BAVgorUIxUUMIjrnXmiy3%2FfL5sfU3VEsVwlPqYXyNxXAAOHT4heTatFqeQvIkvU91LKajne%2FVFbmiZvZ3jGZSwOfYFqD3fHlh3q8kYTndzImLUp0KfxyZpzzuwPIkSSGgo7yqwEkZ0M0dGjPP%2Bmklom2D7p7s93LfF3%2F2uYZH979oHj5RN43igkwBc2aGC5X60Zja97wahqPFpCV0f7nYMhBlaZbZe8NECgB3BilhHmFMSQiUyCP116BVI3lrZQMOnRe8tecDCbo4wobHvv4ulTTLQQ5u%2BRsth5lFSaOHzY0NXgoeiUj2iLm9cn0d78WGQ2b4UguZpIbeG2KyRkC6MmpzR5ASrGr04wWI4zNzdSS%2FY%2FgLetnb%2Fo5%2BRwYXLomuagEYKarhzZFeT%2FJNhFB5Fh63UA6vV1RxlRu37fxdQ47U3Fg1yTY%2F48JjN2ColZvlb7H8YGP36ZYSms%2FemRi3ntvO4iy2I99SKl6PPcIcrXb49DpR9CkOpG3DpABfowEmMFqYmSQ0noqjS6xLA9crJPcxp%2FTD3TRsDli6y4pWHSO76RL7pQa65SSF5%2FEdNd2qS6a86bxZzFeRx6U7txGdpG%2BgTDXvqC9BjqkAeDIfHB8cPKoduylYJ%2B%2B41RDDShHNlwO6sqwc%2BLLxhhGbI9p8nd%2BD2hb7VawLJAobgtRpXgDsiv4NkNXChxGjBg6lXTFguxhN8LkKzSRLK6whtlKaVomxhCUKB1xNJIiujgznLYFsC0WTa3YXdZJytYaHFyWRDleoy9Plq6Jj%2Bi99jnRAiy5qD5pSnJEWTLsa2zsnDvLs4gRfGpm03RVR%2Bz0HQrk&X-Amz-Signature=d9fa4ef486b741999d48399acbae845043dcb65794489cdb34498ddde5a1556a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
