---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYRP3V2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiDBpumHKPUHQOaynMcwE4s91Yp0%2F9tcEDh3TzyofONQIgOzRgQP6WIuadKZnSAeYqUH0sXkBxOGg6rQRTgPMpmPgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN5aMQqsJy66egQwircA%2FXABm1FjMT3FEZzzhAlB1z8xwclArPHnWcycBWOUIZ1uxba%2B5QGEjvSv%2F4VInStpHcJNlbIRWO0JysBbp0T61oG4L%2FnhXfVIMBL7sEBdZHWHO%2Fd%2Bi1L2bD3uRb2Ze0bfbvJpoHzHoKIqwtQ8pzPEgr3SAhHYx5wk19pTn8DL%2FgDfQsf80MNrDjRu50XbC6l360Q%2BeOXgTKfZDSadXE%2B6J813cfg1N2llJikMt3g06S1p81aHym%2FaFRbysZ6oPPmX%2B9Xx8YooK12l1cINpjxqkzUyBdyI0moTUmRX6kLgCfqI9N9o5jb1N8ZznNHNL%2BWqUxorGYODqQ7vkoLhwS7n40sFE7xQKv%2BvlC7vUp8sFO2NlMAlZiIzR5tKFFEzBZynWciu6O%2BlR4hYhBnfjLwbwXhYbo6fK30ml79MqG%2FPPcdmwxNWmR3qwcxDhGKmbdle92SkltrnuJgXPLMOc1VItmGgqeU%2BdBVlYPZWGvaKHvCSYg0M%2F%2FWMrNeYsGIofjFid3kqDt7hX40vghJ8n%2FcykJNrKBXn0QZ2oF5IB%2B8RtyB%2BNEGJtzs8AmJxad8AsYGRIqCmZbuMyLUu0jJMiCt5eunIyXFn16Qm7%2FH7rz5mAaeIaySAtpXRcWPxqCBMPH90skGOqUBKCtp68BXDdd7U6mWVGPH6rQX87MDyASQkYiGMWIGqPUZgOkw0zaSsUmhOqB3n6%2B2q6LhaXTeBi4PAgmWPh9EGAfoTYaKJG7rID%2FYtwxuRCGFE5m8abuh%2BWkuQdpYLJdg1ZpOtRNdJVtMdnCX5XwvwfvHV8RaUsgxMm5h0ugF5f8LYfvwEOcN8cjENIiEhnpJ7Va3GW7NvZ2vh2jt7cpE%2FGZEBT%2FT&X-Amz-Signature=455896b8987f68af6f5dc9f2cdac6e2538987a8cb58981e0d6b6717c1e03ccba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYRP3V2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiDBpumHKPUHQOaynMcwE4s91Yp0%2F9tcEDh3TzyofONQIgOzRgQP6WIuadKZnSAeYqUH0sXkBxOGg6rQRTgPMpmPgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN5aMQqsJy66egQwircA%2FXABm1FjMT3FEZzzhAlB1z8xwclArPHnWcycBWOUIZ1uxba%2B5QGEjvSv%2F4VInStpHcJNlbIRWO0JysBbp0T61oG4L%2FnhXfVIMBL7sEBdZHWHO%2Fd%2Bi1L2bD3uRb2Ze0bfbvJpoHzHoKIqwtQ8pzPEgr3SAhHYx5wk19pTn8DL%2FgDfQsf80MNrDjRu50XbC6l360Q%2BeOXgTKfZDSadXE%2B6J813cfg1N2llJikMt3g06S1p81aHym%2FaFRbysZ6oPPmX%2B9Xx8YooK12l1cINpjxqkzUyBdyI0moTUmRX6kLgCfqI9N9o5jb1N8ZznNHNL%2BWqUxorGYODqQ7vkoLhwS7n40sFE7xQKv%2BvlC7vUp8sFO2NlMAlZiIzR5tKFFEzBZynWciu6O%2BlR4hYhBnfjLwbwXhYbo6fK30ml79MqG%2FPPcdmwxNWmR3qwcxDhGKmbdle92SkltrnuJgXPLMOc1VItmGgqeU%2BdBVlYPZWGvaKHvCSYg0M%2F%2FWMrNeYsGIofjFid3kqDt7hX40vghJ8n%2FcykJNrKBXn0QZ2oF5IB%2B8RtyB%2BNEGJtzs8AmJxad8AsYGRIqCmZbuMyLUu0jJMiCt5eunIyXFn16Qm7%2FH7rz5mAaeIaySAtpXRcWPxqCBMPH90skGOqUBKCtp68BXDdd7U6mWVGPH6rQX87MDyASQkYiGMWIGqPUZgOkw0zaSsUmhOqB3n6%2B2q6LhaXTeBi4PAgmWPh9EGAfoTYaKJG7rID%2FYtwxuRCGFE5m8abuh%2BWkuQdpYLJdg1ZpOtRNdJVtMdnCX5XwvwfvHV8RaUsgxMm5h0ugF5f8LYfvwEOcN8cjENIiEhnpJ7Va3GW7NvZ2vh2jt7cpE%2FGZEBT%2FT&X-Amz-Signature=2b3f763474d454efe13c86eac1542f314e42d9ea000c1bf1cc57483ef7cd2c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYRP3V2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiDBpumHKPUHQOaynMcwE4s91Yp0%2F9tcEDh3TzyofONQIgOzRgQP6WIuadKZnSAeYqUH0sXkBxOGg6rQRTgPMpmPgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN5aMQqsJy66egQwircA%2FXABm1FjMT3FEZzzhAlB1z8xwclArPHnWcycBWOUIZ1uxba%2B5QGEjvSv%2F4VInStpHcJNlbIRWO0JysBbp0T61oG4L%2FnhXfVIMBL7sEBdZHWHO%2Fd%2Bi1L2bD3uRb2Ze0bfbvJpoHzHoKIqwtQ8pzPEgr3SAhHYx5wk19pTn8DL%2FgDfQsf80MNrDjRu50XbC6l360Q%2BeOXgTKfZDSadXE%2B6J813cfg1N2llJikMt3g06S1p81aHym%2FaFRbysZ6oPPmX%2B9Xx8YooK12l1cINpjxqkzUyBdyI0moTUmRX6kLgCfqI9N9o5jb1N8ZznNHNL%2BWqUxorGYODqQ7vkoLhwS7n40sFE7xQKv%2BvlC7vUp8sFO2NlMAlZiIzR5tKFFEzBZynWciu6O%2BlR4hYhBnfjLwbwXhYbo6fK30ml79MqG%2FPPcdmwxNWmR3qwcxDhGKmbdle92SkltrnuJgXPLMOc1VItmGgqeU%2BdBVlYPZWGvaKHvCSYg0M%2F%2FWMrNeYsGIofjFid3kqDt7hX40vghJ8n%2FcykJNrKBXn0QZ2oF5IB%2B8RtyB%2BNEGJtzs8AmJxad8AsYGRIqCmZbuMyLUu0jJMiCt5eunIyXFn16Qm7%2FH7rz5mAaeIaySAtpXRcWPxqCBMPH90skGOqUBKCtp68BXDdd7U6mWVGPH6rQX87MDyASQkYiGMWIGqPUZgOkw0zaSsUmhOqB3n6%2B2q6LhaXTeBi4PAgmWPh9EGAfoTYaKJG7rID%2FYtwxuRCGFE5m8abuh%2BWkuQdpYLJdg1ZpOtRNdJVtMdnCX5XwvwfvHV8RaUsgxMm5h0ugF5f8LYfvwEOcN8cjENIiEhnpJ7Va3GW7NvZ2vh2jt7cpE%2FGZEBT%2FT&X-Amz-Signature=73c0028a28fdd8283079e10d65892bae4a9357c78a1cd31de80f7afb34fb5997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPSVPDLV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjo5gdNJje%2F7C6es00vcaMaNLHX90gcpc15oNMCqFgeAiEA%2B8z2IlTn5bAOxVorKlNlvElYZt9Sqlu%2B3usNn5uomjkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEL8q7eJp7PHKpmzDSrcAzgD6iZ4tlQ54rUIu8J8fKloyQL%2FlT2DhSXX1h%2F%2FmQpfZuOsYE8IRl0BUQ8gilU8%2BvaeAYct4ldn%2F%2FN62%2Fph30wINuDBVvQ6yJ5xJ66iLIDSkYscfn8opJfMM6z1wleiq5F2h6jb863jOMj%2FL4F2jZVmbHJXnsSiECw3NxnZa7PUs3OEMmrWClQ8q8i79t7zuMSeljYw0U3bpiS0dNkyDsVFPOa7ODFkFcpd8YTgdu6Evdi05jGq1zYgehyq9IKuZwFErs1OLrgbG9LZmfL%2F6YZf3vD8b03%2BfD6687pID1KMD1wvIghISEWR87mSRP7ldFnzAMAqkqJ9rh1hie4MgY0cvK247HgG77fx5ZMxlut0OOUUMacCEAjzJi9VPRsIReQgDndW5aSknHVp1L4v%2BdiN%2BzG345LTTkc%2B9i%2F9aSy%2FinTRKBCxxTOemcsyUOA7MTbo%2F8BWL6LQO0cEtK8K6%2BriO5VoDwfCCbzhL%2F9mCx1uQKT1Jjygw5zWDzwqzFhXMlfW%2B8j95bdmocnEr0NJTuMf8gpFGvrU%2FoRnITDvpZVwpZSHq7A6iUbTdyAfJne0S1f9SZZZS1RLQ0BVoKXDo%2BPklf1BHhD7quGKSrLQ7qJuYPWSXcAP7B%2FcI47DMOr90skGOqUBrakhdaGLR6q8%2F2TvkkULYUeaoeVYF%2Fd0tdn%2F0qEBTBKhMIcf4fwmyoWBFG18jE2Hdn10jcUdfVbp0sWddoU3iY3uB9ZonRmw%2FPCzB6jsf8hvd5iVB4Rt6e8Ee0R%2FiZ684aJ4uEVVApvPL%2FFJbbcmhHutYnhHCDRsLRmFIV7j1blcI163vL4qs3CYpqT1RIspao9kHodljkTq9auJIlpWUjwjLI9F&X-Amz-Signature=aae5e200b67f693f7bb13271128878a142db9ce22c2405a1065824c79430ea49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IF36CI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKxIxIcq7vY%2BqcpI5kJYH5a%2B%2BzB58xJ2rKyzewQGBukAiEAifvfeE68NVeQrJbF617ekLhoc7jm2fELd%2FBdW36KNfIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA68byhOO8iKWWJsIircA0hoCU3r%2FeIuuJQAydNfovUQTtJ8yBRxEoN87NVMqVr%2BhD1r9mlj0G%2F4nqa3%2F3OW5LldJmK%2BXincQR1DX2bN8XfV3B3VRB2aVj%2F%2BOmQKeDXbuxwMmbT7HgKLyGUaEVIL8DCjgaCPth0oA3vWeEZOKsYO9RZOx%2F1ByDsIDeE7GLK%2FRDhjuhPKNJ4uBBu2%2FES022GaqIi%2BrcSIS9HctpfHJk852fXyOlLWkF%2FZ635zp0Oc%2BYbf4hK4Cqc99eXmJ%2Bi6JQffUamwXzLytK5gFWxRNKtLnZrEX%2F31%2BEbGXwVEXEQneaPo4SurXkTUKlPo4wBXeWo2Ww8UZL2eHSMq7UPeF2pE%2FnJE8XItje7gVeDfDBdgqF4pC61Ah%2Bm1AhlWvU8y6otKFVYlgJ20Kpswhjyo4uJwS75fm42lMNXZtxwld%2FnJMOswfyZS8gmwVcXM1MQMD6P9ND14pTV2A0ylovgewE0ePhvz3oH1SQvlvJAATU30OYgE3vj2lljEpndZ%2BQZsIvNd2%2Fyf6WjjpM7SOx%2BT6R0HUJtAAVZVrWgWG4%2BLEoP4Q%2BdNQdc9IMIg%2BXuN6yQwteDaD6v99vboAiu3kufdcdT9jDo8lQzghC6veCIZ%2B13tXcFV3BSEXImCZMGBMKP90skGOqUBBWUKg5g5nuKlRrAjEdXltVw0zgCn4x%2BursNVUqZrhbemtDD0W8CzVMUNAAv5rBulvsO3UbJlgroXs8stnE9RLOOp%2FJ5v51fOqe%2F4ChOef6stcPDL6RGugAUaSCXTFYbkXHIgg3r4%2BrFh7EvvdgXSRfzyh%2BcY7WhDzF%2B7mMeQezSuJSq6lSHosoCGiNylX2yDXwuKLoNfJEHYkloer6kYOYznp6ZT&X-Amz-Signature=07d41e55125258e7a511efb74f2d89b0d973846a15973dbf3c19fc4c257ae999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYRP3V2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiDBpumHKPUHQOaynMcwE4s91Yp0%2F9tcEDh3TzyofONQIgOzRgQP6WIuadKZnSAeYqUH0sXkBxOGg6rQRTgPMpmPgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLN5aMQqsJy66egQwircA%2FXABm1FjMT3FEZzzhAlB1z8xwclArPHnWcycBWOUIZ1uxba%2B5QGEjvSv%2F4VInStpHcJNlbIRWO0JysBbp0T61oG4L%2FnhXfVIMBL7sEBdZHWHO%2Fd%2Bi1L2bD3uRb2Ze0bfbvJpoHzHoKIqwtQ8pzPEgr3SAhHYx5wk19pTn8DL%2FgDfQsf80MNrDjRu50XbC6l360Q%2BeOXgTKfZDSadXE%2B6J813cfg1N2llJikMt3g06S1p81aHym%2FaFRbysZ6oPPmX%2B9Xx8YooK12l1cINpjxqkzUyBdyI0moTUmRX6kLgCfqI9N9o5jb1N8ZznNHNL%2BWqUxorGYODqQ7vkoLhwS7n40sFE7xQKv%2BvlC7vUp8sFO2NlMAlZiIzR5tKFFEzBZynWciu6O%2BlR4hYhBnfjLwbwXhYbo6fK30ml79MqG%2FPPcdmwxNWmR3qwcxDhGKmbdle92SkltrnuJgXPLMOc1VItmGgqeU%2BdBVlYPZWGvaKHvCSYg0M%2F%2FWMrNeYsGIofjFid3kqDt7hX40vghJ8n%2FcykJNrKBXn0QZ2oF5IB%2B8RtyB%2BNEGJtzs8AmJxad8AsYGRIqCmZbuMyLUu0jJMiCt5eunIyXFn16Qm7%2FH7rz5mAaeIaySAtpXRcWPxqCBMPH90skGOqUBKCtp68BXDdd7U6mWVGPH6rQX87MDyASQkYiGMWIGqPUZgOkw0zaSsUmhOqB3n6%2B2q6LhaXTeBi4PAgmWPh9EGAfoTYaKJG7rID%2FYtwxuRCGFE5m8abuh%2BWkuQdpYLJdg1ZpOtRNdJVtMdnCX5XwvwfvHV8RaUsgxMm5h0ugF5f8LYfvwEOcN8cjENIiEhnpJ7Va3GW7NvZ2vh2jt7cpE%2FGZEBT%2FT&X-Amz-Signature=3b3614a570426696cf052f920840226bb7517ae7f2f38f12616c0c5c8b46dada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
