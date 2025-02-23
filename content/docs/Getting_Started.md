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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HZPTYH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcQoouJ4h3XKV7t3WYD9IIRatFjx2N1%2BIVm9oAplPSgAIhAMACeMayf7K84iIHnQhxV6mF7yRjaT1OckOy2ykTlagGKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjKF2koRh1umnHFocq3AOJy92SnIA60Pf%2F7FkMIJGGtsMddCxQRU%2BUm5hXuCxMD4mJEWQeGC8ygW3DGMyyMbvMeyUdwVxJJEuihLjTirwcHCJ6lJqQh6%2BvASPn9LIwx%2B01qsbsm61GtTRFxvju7A9SgjQKas2Ew5tL4Ku9J%2F6poz4PghnetJxcdjqgyj7qoV1%2BUW1DM3c8IEBSEXUHappzve6MC3ma8yL2qxMuvPzk4%2B4Zm3fSNDaFdBQffbSkx2hcJW7zliQG9DtVpKIBZ%2B4eKlWLN%2FHgiL4RSC5tYWW1AyfQqtowUdwc7OT8TXOVROLKWNoSYAjt0b8dCw84Ldr81xVyCXdsLw0Qv52iTIGvM0JsiCj8T3tJxwpBSUwlPaG32E%2Fg26FY2zPoosYZVxBKua3K%2BSpjkWumnTlQVeKfV%2FAweuEruwFClTWj4PwbWsWzPzjdmflmkF3l%2FPe1oaKZEzf634SGrzsbfKhoJ5sZ%2BL5Hbk%2FMZIjR11ZM9yGcFmFXIsxvcAif5al3WVOszdD7dTATVnIrC8xnHeJJ%2BkaBUv56PwfhRwhC8uwcatnY4xJ2hfI20eIpKR18VDIkpVuQi4utOYytWv%2F%2FvBihM4MunQWbJAILp8mOarvXd8UJQoaWEZu9qbbSnh2g5jCfuOq9BjqkAQNEXP16PVM%2FWCA0KAP77Qo7h8cFrJbrbXiQJYOO0YOTk61pUKKR0dBpXOZC9qRNe2GRMpn79UbnaXKUwuPpl3%2F937z90%2FPIo7ePH6ne4Hbj9OV7%2BYgpadObSpb6o6e96MQWLSSFEhZZJagK4AAi6amb8rdL8TbTLcePpumlXJY9OHcafHv2Rhp1V08UpCmdc5pQw0qWdFxm3SA7U91IQVRShMau&X-Amz-Signature=1b0645fc88465623d6a8c7c3861cb7218d30805e9411db0ea384850184acbffa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HZPTYH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcQoouJ4h3XKV7t3WYD9IIRatFjx2N1%2BIVm9oAplPSgAIhAMACeMayf7K84iIHnQhxV6mF7yRjaT1OckOy2ykTlagGKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjKF2koRh1umnHFocq3AOJy92SnIA60Pf%2F7FkMIJGGtsMddCxQRU%2BUm5hXuCxMD4mJEWQeGC8ygW3DGMyyMbvMeyUdwVxJJEuihLjTirwcHCJ6lJqQh6%2BvASPn9LIwx%2B01qsbsm61GtTRFxvju7A9SgjQKas2Ew5tL4Ku9J%2F6poz4PghnetJxcdjqgyj7qoV1%2BUW1DM3c8IEBSEXUHappzve6MC3ma8yL2qxMuvPzk4%2B4Zm3fSNDaFdBQffbSkx2hcJW7zliQG9DtVpKIBZ%2B4eKlWLN%2FHgiL4RSC5tYWW1AyfQqtowUdwc7OT8TXOVROLKWNoSYAjt0b8dCw84Ldr81xVyCXdsLw0Qv52iTIGvM0JsiCj8T3tJxwpBSUwlPaG32E%2Fg26FY2zPoosYZVxBKua3K%2BSpjkWumnTlQVeKfV%2FAweuEruwFClTWj4PwbWsWzPzjdmflmkF3l%2FPe1oaKZEzf634SGrzsbfKhoJ5sZ%2BL5Hbk%2FMZIjR11ZM9yGcFmFXIsxvcAif5al3WVOszdD7dTATVnIrC8xnHeJJ%2BkaBUv56PwfhRwhC8uwcatnY4xJ2hfI20eIpKR18VDIkpVuQi4utOYytWv%2F%2FvBihM4MunQWbJAILp8mOarvXd8UJQoaWEZu9qbbSnh2g5jCfuOq9BjqkAQNEXP16PVM%2FWCA0KAP77Qo7h8cFrJbrbXiQJYOO0YOTk61pUKKR0dBpXOZC9qRNe2GRMpn79UbnaXKUwuPpl3%2F937z90%2FPIo7ePH6ne4Hbj9OV7%2BYgpadObSpb6o6e96MQWLSSFEhZZJagK4AAi6amb8rdL8TbTLcePpumlXJY9OHcafHv2Rhp1V08UpCmdc5pQw0qWdFxm3SA7U91IQVRShMau&X-Amz-Signature=e2576aac259b4d6296a349c09fc58b9b06f51fee7fdb1536416297e673a1ed67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIRQ2FB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNJGhixyXaEXTk5OzoGg59HDJCyUN8Mbv6lZ6RsPovrAiAAgLSQVFOnoIwpW1bs668lwvceF8P6oWJ2t3ds3MTyZiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIalaaDbzOaWPp%2BlXKtwDxC0EsJntQ8eBWU6PaAvNE8kR4LCMJiL7T0QfCWF6gy5WAtitl6rbSZiv%2Bgoh43Bl8qWbytZgwdHG%2FiAqQzKq9jFzLNbX3OGm6dTbrDxbHaflwtsB48ZR36LdfFmYSpUKPV37k0tqeU6LFdXVoePUeXvqiBrK4aNNq7gWXBdvldsMpcMJn2kr8RvI26u5cM%2F4jQJCcZyfQ7aqG3Do8Cv%2BJpaqTonxxsHJ0TAPKwObqgxryVnS1NmG%2FnL%2BnpFp5IL7VpQmDtpOGqsD9DXRTkh7ggEjNsDjQDJWHW5VU%2BgjR72FxwoQO7dGLN0nCbgTsEAFTv%2Fn6xAyAGpK02UMkJok9bC6cH2WxF0I7JD2Ikb1oQz9OHkk8mF6LfHlSFQv2kzhAG3QaFKE70635DcBknXE0IRjal934ll%2BOnX1kXkU8%2FJ%2FpxzgqSgInWwjIuUcGthW7vPdKKjoQeWO748RZ1ScnktC3TuGmQjJ1FwjcdbpkBloU0cMgK4ykVCerpHOJbCS%2FFBbdzKLpM%2BO8aHEh6uc1ozTZnU0vjSz15wDb4lR6bk4hQs12lXDbuDrtf2pK81ZKuKgYX%2FT0daMCRI6jK6Mh3HC%2F6Ks%2FbEZxIZFBm4cC59DPSWhSmmz%2BPU%2BRDswrNbqvQY6pgELzgkg7VaQnT0rXpmEhs3Ys%2FBLOR2uJ2oablqXE0O5tTlON%2F9Sw3PR0k1ocJ61JC2zuGsV48cD2L4BxR8ZvOjwArVAf22NIPTEkzpj4iG8nz9j%2BGTmgwFiZVecngcu3KIP4QxZsqLtz4kT020bCj1p4z9HtrITPpZmgXX75V%2Fl3B7ncyKqW%2Bh%2F64s7iQF0vZIqGL%2FELwyqc8HycjmCaELzstwMWONd&X-Amz-Signature=2d354303ad9426dcd4aaffdc231e84ba12b4341f11a5dcc8d7fc97bcddaa5523&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDFAXNB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6RZVdvu1x42sD7qRkXFvwzW42swVyurKMBaQPdx1PxQIgFXfF5PmK1BhMJvh9IMYR0O3t9yATPT614R4kitdcZAUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtYpvvBW95kdElGHircA0cSaKlvvCa9BBPFYWGbxeDtOXLGelDg7ZmpqwmjFbIYvMLbcrvgE88WFRmJ1qDj%2BypQci6ddS1qz9EsJ%2B8d45%2FXsIrvCh%2B4CMh49BAFXJ0yYM5oBAFTP%2Br%2FryQd6DurBOQRaidP%2BiCW5nEx%2FRmHADNnqIBkA0Pu4BlEjM2FH1Y8VQbl2mONREPx5vFDmfiQb5ZzfiNWDEDRJY7StWQWOcxOkolvBzsfCUek9BEW%2BBnLM1ZNl9uO1XPnTprZczhP%2BJr7cS95AgzFCyHoh9xSG1xu%2BoR%2BIYlMdcjlz14rquDqcR%2FOhjkhzr%2Bsb4lT7R0FsAx19a6jO1QPObDi1uL9%2BVH4dr%2F7kuTAu8zlCl6d8eqEp19nLfiiqHDykBSq8ZFJ%2BW1SzYssbvXCwFZkd8SjJ37CrIWxpA8xDsxMZNIa1%2BKth0%2FkepDb8O7wGYoBUDGwadpUO9vXmyP%2By3lZrM1X%2BHi4bIV9we%2F6LyQ05cIpe4AScz19zoWIXiP%2BuV3z0ikcMQelSb1x8hiNasv%2F3PlLfE2o5GEQRFi1R7KgDW93odKbOTfhtFrQbU4sWbm6ea9SpdBdQW%2F2cUm16MoAnFcxxgjbxtvgknnfeMF3qHQNEdr0geOQ3gUePb4iKEFBMJrE6r0GOqUBfJygZrsPJV%2BeCcL9PjAYpd9sq8wkem1ggluC38mVHcTdFVpxTZzt7PpeEyH0%2F9AC4pLcnlWW4s7dUCOFzsVEhXCT9B8N0VM1roWnJ8RiW4YGLZPX8cPsl3B4v69fjXOEPRi%2FzNBBKpJnSrK6A31nvvMYo7%2BZfIRoAvmAhNB9HBrS2rqIvxRaS%2B0RZBJqNXC8aeNA%2B05mrweHfhThtpBwdNjdlkan&X-Amz-Signature=0396413265b64d4e128ae6bde95c5cfe7caedee86d09330fe2825502aad62337&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4HZPTYH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcQoouJ4h3XKV7t3WYD9IIRatFjx2N1%2BIVm9oAplPSgAIhAMACeMayf7K84iIHnQhxV6mF7yRjaT1OckOy2ykTlagGKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjKF2koRh1umnHFocq3AOJy92SnIA60Pf%2F7FkMIJGGtsMddCxQRU%2BUm5hXuCxMD4mJEWQeGC8ygW3DGMyyMbvMeyUdwVxJJEuihLjTirwcHCJ6lJqQh6%2BvASPn9LIwx%2B01qsbsm61GtTRFxvju7A9SgjQKas2Ew5tL4Ku9J%2F6poz4PghnetJxcdjqgyj7qoV1%2BUW1DM3c8IEBSEXUHappzve6MC3ma8yL2qxMuvPzk4%2B4Zm3fSNDaFdBQffbSkx2hcJW7zliQG9DtVpKIBZ%2B4eKlWLN%2FHgiL4RSC5tYWW1AyfQqtowUdwc7OT8TXOVROLKWNoSYAjt0b8dCw84Ldr81xVyCXdsLw0Qv52iTIGvM0JsiCj8T3tJxwpBSUwlPaG32E%2Fg26FY2zPoosYZVxBKua3K%2BSpjkWumnTlQVeKfV%2FAweuEruwFClTWj4PwbWsWzPzjdmflmkF3l%2FPe1oaKZEzf634SGrzsbfKhoJ5sZ%2BL5Hbk%2FMZIjR11ZM9yGcFmFXIsxvcAif5al3WVOszdD7dTATVnIrC8xnHeJJ%2BkaBUv56PwfhRwhC8uwcatnY4xJ2hfI20eIpKR18VDIkpVuQi4utOYytWv%2F%2FvBihM4MunQWbJAILp8mOarvXd8UJQoaWEZu9qbbSnh2g5jCfuOq9BjqkAQNEXP16PVM%2FWCA0KAP77Qo7h8cFrJbrbXiQJYOO0YOTk61pUKKR0dBpXOZC9qRNe2GRMpn79UbnaXKUwuPpl3%2F937z90%2FPIo7ePH6ne4Hbj9OV7%2BYgpadObSpb6o6e96MQWLSSFEhZZJagK4AAi6amb8rdL8TbTLcePpumlXJY9OHcafHv2Rhp1V08UpCmdc5pQw0qWdFxm3SA7U91IQVRShMau&X-Amz-Signature=92e4b3fffbd6bed9aa6d0ad15034298fe71a14256ec2076890778c931d9bda58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
