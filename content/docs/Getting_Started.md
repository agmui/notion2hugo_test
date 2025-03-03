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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4RO4OB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqnvEcTlSqhXeaM7PM6g7NvK7RhE8Q0327CmO165SXwAIhANmVe87MO%2BJCFxW13hP4VU%2B%2FRZCqOKzVcHtwuan1BmLzKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPwpvxk%2Fw%2Fi274WqIq3APAQJfnF5K%2BS%2FSJeUvznzpAc3gLHFe2FwzHnAHZmMXSBHFBPucbod8Xu6MLu5sRyvmwG9nVTM1yUcuwl90jLc5y8GeAqkSkIpp3fCEPrmCzGpjhyThsfYZDmVBIkU8F%2Frln1KsoiRQh4FHQyl7TegjJud%2BAFWVXd8wAAAde9d4bSoo%2BcGLD87zTD7iaBBJSCmxehUL4VeoEh4DLufsPBoQZLYGOlykxJzPojqv194GzaKf5cUnCGh0J1Lt3whvpJnNaxTCjYYIN%2BkRJ7xTeRaI3Sk2XRVB4cqxzfmGZY0JvCzzeJHBsUCNrE0bZFhZizvu%2BP6Zepx9R%2BPBgADuTkptnTXGo2etfjuxA8Im%2FXzFQKbQgbWuxg11xSPqfJr7xoJA41KE%2BXWeuD7ML%2FUgWveQJrbVX2gJi%2FNP5ElXUDvrOG%2FssObDwNcCYV8u9FPQy9L%2FiymOAefg0x98LT1ATlR0urmPJfviBUGI%2BtAT5lVnusk79qLzcX5frHRXpDRvZmIgqtf3VO6%2FMLbIM6f4yzT%2BKfmUUr7v%2BBEP8qE%2BxKXtyyA3QSWkSWXdtxEYKeSXZSqHNZUdLCekzVl%2Bcvevyami3XAxfScYRh8a%2BisR%2Brb30GvHjZOPdcyV3wwXX3DDVm5e%2BBjqkAcu9rVuZcuefVNx9d5wsz3beZQ00WMRF3wqQ3xHDCPUJX8tuQAqQcVAW0PmUrIfsks8G1T6WjOejbvic8HddqmlNK9Jkg%2BEiWQDbXWugIlsnJQwXnwOPEj1WW%2F375NrGo9mYTAXqnc%2F%2B2KNeEEfAmEh69%2FjRVL%2FTQxosKgDZyVwUR%2FXHmH0ku2jOC8fEu9DSAWAwzs%2BNanoGo9253QQXSPXKMeoD&X-Amz-Signature=2cb4441695f01ad28754d8466078aaf95e949a18a6a879bf027078d291b5ef5a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4RO4OB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqnvEcTlSqhXeaM7PM6g7NvK7RhE8Q0327CmO165SXwAIhANmVe87MO%2BJCFxW13hP4VU%2B%2FRZCqOKzVcHtwuan1BmLzKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPwpvxk%2Fw%2Fi274WqIq3APAQJfnF5K%2BS%2FSJeUvznzpAc3gLHFe2FwzHnAHZmMXSBHFBPucbod8Xu6MLu5sRyvmwG9nVTM1yUcuwl90jLc5y8GeAqkSkIpp3fCEPrmCzGpjhyThsfYZDmVBIkU8F%2Frln1KsoiRQh4FHQyl7TegjJud%2BAFWVXd8wAAAde9d4bSoo%2BcGLD87zTD7iaBBJSCmxehUL4VeoEh4DLufsPBoQZLYGOlykxJzPojqv194GzaKf5cUnCGh0J1Lt3whvpJnNaxTCjYYIN%2BkRJ7xTeRaI3Sk2XRVB4cqxzfmGZY0JvCzzeJHBsUCNrE0bZFhZizvu%2BP6Zepx9R%2BPBgADuTkptnTXGo2etfjuxA8Im%2FXzFQKbQgbWuxg11xSPqfJr7xoJA41KE%2BXWeuD7ML%2FUgWveQJrbVX2gJi%2FNP5ElXUDvrOG%2FssObDwNcCYV8u9FPQy9L%2FiymOAefg0x98LT1ATlR0urmPJfviBUGI%2BtAT5lVnusk79qLzcX5frHRXpDRvZmIgqtf3VO6%2FMLbIM6f4yzT%2BKfmUUr7v%2BBEP8qE%2BxKXtyyA3QSWkSWXdtxEYKeSXZSqHNZUdLCekzVl%2Bcvevyami3XAxfScYRh8a%2BisR%2Brb30GvHjZOPdcyV3wwXX3DDVm5e%2BBjqkAcu9rVuZcuefVNx9d5wsz3beZQ00WMRF3wqQ3xHDCPUJX8tuQAqQcVAW0PmUrIfsks8G1T6WjOejbvic8HddqmlNK9Jkg%2BEiWQDbXWugIlsnJQwXnwOPEj1WW%2F375NrGo9mYTAXqnc%2F%2B2KNeEEfAmEh69%2FjRVL%2FTQxosKgDZyVwUR%2FXHmH0ku2jOC8fEu9DSAWAwzs%2BNanoGo9253QQXSPXKMeoD&X-Amz-Signature=2ffb4dbad55d91edbc56b588473e4f81b50fb72ece7969a272a4c5a6c8887ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647F4VYI2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjxomUdjZeXzVpWUNbFYvVZtWm6wPKzsmF1OTMpTYn1AiEAxHvTiX1oemxJ153Hh6%2F4qjGYWhAfml9PWQtnD3xYNyQqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDzm4bjyo39b9K5MircAwq%2BCBMHQRiUSg8AnS63Q%2BsHB%2FC2gEQ4%2BTvtizJXrZ0nmgi75M4mlT3tjj2vBmvCozM6enSbfYGIcydfptPq6VM405eB5JBDr07dKUau7fVjd6jPiEEs6m773y8V5LOomWWYFFFBoRnrvZ%2BsOdg2u4wIUB26O7p9e1leYzXAr01ma3qxmChVaq%2BqufHEgrno%2F5EXb6EFs%2Fh0%2B9HIExcNWd%2FKlemTqvULl73n%2FspvTyopHXnd18UEja0nJkrg%2BOkm7vS1cdusHfE6VdORx38fqajXYCzqcydPEXHLAeITYjU3WEmsJy%2FHyyRlqaALZSvni5ciTNPQmI8Rj7bC%2Fjg%2BI9haYA8zovEgI05NVPl9sB7qyhNGTKgA5quhQ5D17rGESHFQMvqGcTGgufVO2zRpwHmHwwS3oCxCEoq2ylHRFqGfBVxMaNFTebo1zHHAwSjP5Caap2%2FZm%2FS6GrTAY32gzyhJ%2FUS80ld2OhHuCXa2h5DU26ccfAoirjETuPIyO2SqZfI17DAGGpZ4%2FJ9jm9Fqy9o3ercXNZU0dePXgT86S708UbvJOmd1aOEjfqZotfJ%2Fy3jgZ%2FPgdFulv4LXl1Jhrq6rNJAA84ARnRA1mzgDolyNVb1EqRJTZQUikEnWMLycl74GOqUB1Sx6pfjuvABgYY2qKauM9wm02HEkX0Y790MNNjlGwZfssBIYLdmb1kYusUWyGj7%2FeUNv8%2FPhD0Wl%2F3FG7HM8KHMZMMkleD8dvUp016Y8B5QxcIeuHg%2B9Zn7sh1PG1XiPP0dyKc0qvxOkATwEHKYmKWZkWwpb1INMplKAsPtmBoSlIZd5zxXWyVrlMbiZKC92ypl3dKjodSfLVO6KWCl6FHD5QTys&X-Amz-Signature=7beb25e784f038cf46ef6f18f3fe74a715f0213c4614c78d5b238a10fef7f22d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LD7522C%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWXtpQFGp7j0v5cL6rqxvj7TWfLYGs%2FeVSdA59QFJqEQIhAM11lSyrg1K8Dq6OEYdzInJ5JTwNPyYS%2BNve40WmU4JEKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQ1ec%2BkoedDKp1ffcq3AOWJTPZ6H8LAZ41MAeTVK2PvemXiy6ERYhbx4auWMDPodDiv%2BXhRgDXGLEmALNpFTzD2ZxwfSNS1wUQN7Nsg34IQkA4t7TCB5P%2Fb1928sThX%2FO4AWtazk9ux0EyjUhX58bhRikByMHGc38EGZwGRDcq97Bw6zVSCdeYqm6YrehvdiyIUNDrEq1By6gimyYq4qOEvWN0zwSn3BgHW2YMMBxlmjBA8idu%2Brk4N5%2BWT3wThBx8vC47foildVIOJuk32OAaN1FkZHjVqg%2F15HGf%2FC584HIo2OrPJCZWVPqQ28%2BHMZN8I2DjLlIpJc7TODM3VeZLB8AQa2Xql%2Bmng%2BWBd1zi0o28Ytih5NRF6CtinFCv%2B0FwuBxZrhv4FBf8fp7rBD9%2FqbfeL6xlBfm95gDSqdcO1sqyoP90RI8PNPlsLgSvB8dJNSHvlmJT28%2F36dVYD26bg6QThFw1uoh%2F%2Bs%2FmLuNRXHIU%2BlId2Sci%2BQN7VjDuA7hRxf0CCbYxdDU82aEF5Mj%2FuB7E8DItyCF7ltQ2GC1vqWmHUs2X%2Frv8xMmMkotQj3P7rXdfdlWaHMAiNlfhG%2BQokZpE9ewNm2QAC0e%2Bpn%2FMQy7ZiE92%2BmrBnijN75czMgXawA%2BdFaOhczTvZDDum5e%2BBjqkAUbNUZzFSywjTFqQiLGlgZo1jrKvs3ivhXmv1PdNbbruPYbq9jAX3S3COcXNvFnHZIYpE2u%2FLBmCJmbMwzJwq1nFSBmjIvm%2FYK0WZHf0VpRsV7twiulpnmLcrOzraLmtEa6BPxEhBtar9t2kPTZ%2BBwTWTrUfSLS06kYckC2nHlXXfWtQEMwcYtynRiOPZm%2BjaBoV5xujWGbUxqxgNnI2O5vkks9G&X-Amz-Signature=a56b5167a1f98da19a95a64eb80b57da4c22bf97d0d904ac4cbeecd745373925&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4RO4OB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqnvEcTlSqhXeaM7PM6g7NvK7RhE8Q0327CmO165SXwAIhANmVe87MO%2BJCFxW13hP4VU%2B%2FRZCqOKzVcHtwuan1BmLzKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPwpvxk%2Fw%2Fi274WqIq3APAQJfnF5K%2BS%2FSJeUvznzpAc3gLHFe2FwzHnAHZmMXSBHFBPucbod8Xu6MLu5sRyvmwG9nVTM1yUcuwl90jLc5y8GeAqkSkIpp3fCEPrmCzGpjhyThsfYZDmVBIkU8F%2Frln1KsoiRQh4FHQyl7TegjJud%2BAFWVXd8wAAAde9d4bSoo%2BcGLD87zTD7iaBBJSCmxehUL4VeoEh4DLufsPBoQZLYGOlykxJzPojqv194GzaKf5cUnCGh0J1Lt3whvpJnNaxTCjYYIN%2BkRJ7xTeRaI3Sk2XRVB4cqxzfmGZY0JvCzzeJHBsUCNrE0bZFhZizvu%2BP6Zepx9R%2BPBgADuTkptnTXGo2etfjuxA8Im%2FXzFQKbQgbWuxg11xSPqfJr7xoJA41KE%2BXWeuD7ML%2FUgWveQJrbVX2gJi%2FNP5ElXUDvrOG%2FssObDwNcCYV8u9FPQy9L%2FiymOAefg0x98LT1ATlR0urmPJfviBUGI%2BtAT5lVnusk79qLzcX5frHRXpDRvZmIgqtf3VO6%2FMLbIM6f4yzT%2BKfmUUr7v%2BBEP8qE%2BxKXtyyA3QSWkSWXdtxEYKeSXZSqHNZUdLCekzVl%2Bcvevyami3XAxfScYRh8a%2BisR%2Brb30GvHjZOPdcyV3wwXX3DDVm5e%2BBjqkAcu9rVuZcuefVNx9d5wsz3beZQ00WMRF3wqQ3xHDCPUJX8tuQAqQcVAW0PmUrIfsks8G1T6WjOejbvic8HddqmlNK9Jkg%2BEiWQDbXWugIlsnJQwXnwOPEj1WW%2F375NrGo9mYTAXqnc%2F%2B2KNeEEfAmEh69%2FjRVL%2FTQxosKgDZyVwUR%2FXHmH0ku2jOC8fEu9DSAWAwzs%2BNanoGo9253QQXSPXKMeoD&X-Amz-Signature=97b0138e5d5f1193eb6120df05b9cf2ddb49b103a60658fcc9307b1c83169a34&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
