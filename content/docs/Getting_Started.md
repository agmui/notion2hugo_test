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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFAV43YL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIoQ4qQ8zIUoNVvp5iw7VA5tgYrULUizk3gdpUmmM95AiEAj3K190m358KsfJhQ%2FYEoUniAZSNmWcmQcAVIuJJod1cqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbcm0HrkbcXuXLE5ircA%2Fx6hlnKD8cPV8Y8eMQ2u2H4js7nUEYm9jrQ0GoFCx4WYidzwT92M7wmUVYiHeBv36zqoJLE7TNv0Cxy%2FUi5fM2ILjGtnH1bYNkJQ33x9CtOLYeLhaeI9tVRXr7T4edx1qgot3DDBA5nQ%2FPWrdp2mHiGXI4mT%2FGHXivS0om2CHc2jgzFiEmQ1HaE37FenwF%2BEZBqvBR%2FDGy19OD46UX%2F4r%2BBmHRk0Fbrh4NecF8T27EIMfxm4i2PkDspJsrOqL2tpkq1UHx3TIGPNhwjPsaRHjdI7ENq4j5pY9FwU%2FNPBk9SIlBdXSGTyz1Z2hYLxsC%2Fl7N%2BXMi%2Bj%2BkTGLTo6u7fhI8fe%2BITuQoopINwDrxWECo5mHMEr4l%2BUEYXj8t04Mgy0D%2BzHp9fcRO5JmdLyHCwf2UIxWz2p5Wpc%2BrpBGQkebmIaAC3eNE8VJ0iID%2B6ZGNsCbMcejN1W5TKwu7kBblJNcVELMc2acwFGN%2Bo71yo3HiaoCrKmgm5vOOAT6RpFy4jOqw59L4admK%2Fn02DG%2FBMCPTdb1nMhGUU%2BjbPwDFcXCKWvPvFjq6tSJhCBKHk9uVQ8rzSGwAzkG3yxvU12MxxfiOukusGHHKDKABnnV73ZI5P4BZ1iEi8sgvU7rFcMKq58b8GOqUBFE4RiNDe2meq3jEKI3cgUeG4NdMAjSd0GeSQrpsf%2FGzo3WGB1nrO%2FaAkSMAzbe445I1Hic92xV9VrlbJza6KsisWayntDpuyjykrPKgRPl1PC2QhJCdSkj5ni8458rHdqXjg%2BmSQTvoh%2B0rBEjmwgECK99l4cz6zgs7%2BMaxUCLPA44YQHERxcS8bSAfGnhDwYcjQaZPVvP64zCrkP1qVwUzFc92o&X-Amz-Signature=1da488e1ca02e97bc526eff030a424e599da13843f018f9773598d95d953b861&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFAV43YL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIoQ4qQ8zIUoNVvp5iw7VA5tgYrULUizk3gdpUmmM95AiEAj3K190m358KsfJhQ%2FYEoUniAZSNmWcmQcAVIuJJod1cqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbcm0HrkbcXuXLE5ircA%2Fx6hlnKD8cPV8Y8eMQ2u2H4js7nUEYm9jrQ0GoFCx4WYidzwT92M7wmUVYiHeBv36zqoJLE7TNv0Cxy%2FUi5fM2ILjGtnH1bYNkJQ33x9CtOLYeLhaeI9tVRXr7T4edx1qgot3DDBA5nQ%2FPWrdp2mHiGXI4mT%2FGHXivS0om2CHc2jgzFiEmQ1HaE37FenwF%2BEZBqvBR%2FDGy19OD46UX%2F4r%2BBmHRk0Fbrh4NecF8T27EIMfxm4i2PkDspJsrOqL2tpkq1UHx3TIGPNhwjPsaRHjdI7ENq4j5pY9FwU%2FNPBk9SIlBdXSGTyz1Z2hYLxsC%2Fl7N%2BXMi%2Bj%2BkTGLTo6u7fhI8fe%2BITuQoopINwDrxWECo5mHMEr4l%2BUEYXj8t04Mgy0D%2BzHp9fcRO5JmdLyHCwf2UIxWz2p5Wpc%2BrpBGQkebmIaAC3eNE8VJ0iID%2B6ZGNsCbMcejN1W5TKwu7kBblJNcVELMc2acwFGN%2Bo71yo3HiaoCrKmgm5vOOAT6RpFy4jOqw59L4admK%2Fn02DG%2FBMCPTdb1nMhGUU%2BjbPwDFcXCKWvPvFjq6tSJhCBKHk9uVQ8rzSGwAzkG3yxvU12MxxfiOukusGHHKDKABnnV73ZI5P4BZ1iEi8sgvU7rFcMKq58b8GOqUBFE4RiNDe2meq3jEKI3cgUeG4NdMAjSd0GeSQrpsf%2FGzo3WGB1nrO%2FaAkSMAzbe445I1Hic92xV9VrlbJza6KsisWayntDpuyjykrPKgRPl1PC2QhJCdSkj5ni8458rHdqXjg%2BmSQTvoh%2B0rBEjmwgECK99l4cz6zgs7%2BMaxUCLPA44YQHERxcS8bSAfGnhDwYcjQaZPVvP64zCrkP1qVwUzFc92o&X-Amz-Signature=6240dd307ae784f0a15325729972e38fcf8dd3b0ea018b5094e6d57bacac5e14&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXEYWH2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHH9Q36JwcWhcw97YIGvW3VfueN0nOLUF4jruChXqi%2FNAiAJDnMPY5zAX0rLYhD3o%2B9cZCUKL74%2FEH4vVcYvHbRRxyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrtOfWvRPoFo0Vuj6KtwDZMVLBpxZtn9oYPrIJtr78n8IzeAnDvnSGDD4kMPM9yTfJozq0heA7hKBHFnr3dTHS6FO%2FBTw8O7phH9iMlD1EAX4u9pdy8tg9zqepRV1Nu0oZ6f2il%2BWPqzljM0VOXV1VHGpUdFjGYw%2FnXFWrIsuW6kc0uWpWTYXsK1GatzN0wNOPGkufJXh%2BlBkD12BlALZnAAhuzmvXngYg9RfqmgwproeIGNF6feucgh4dsgU39tE5QiBTKKe7i3gFFVQE67NU6vshyuNbSvnkcIOJXawOQgguu294KjWmU1W0RU1yD0HQ1TmUSZzSq9HoxrNTtpKulOxYVLCEWZGOjg0UvcyQpnNuxNFU067ErmaZ8nKYj73YvnhBiSyXTFjLfuZk5pQ%2FVMfONo9Y38fV7AYA6AurtbLVhskL8kS9YhedcxmlxNwlssILyob1JsDZeMiGP%2Bq2UJDZZuDRHELJDSEl4JRoF%2FGYLdq5RmBQ2EoXNfvAR7cqUWdLw1Xr%2FbZVQMuuN7m1wnNP46pCUOpapKYC5fq5grB5ZfB8oxKiXBYM2pTU5kO5T0%2BcdcGJNL1eiU2LrobqxmHOh3tdo29l9LN54z2BoSNwrHseN8%2FdsqY9qKbqh%2BRNYkiUvn%2FvHgKGgAwvbjxvwY6pgE1SubAJiLMK0%2F6f05dpZCIX%2BkDIDOJ0SW%2FLaUOp%2FY8%2BFPCc3lRPV2Tw5DJDinvrerXjuP1aWQ0SsHaa72OPPaHPnXgSZXVvMWny0OjHaDe0BkLwkgicU9JST2Sq1bcgQLBkk%2BEyc09iXqaBvEbx1Qe8cTj%2F1o%2Fi4u4NLoo8fWvliLYWLs9lECxGmt10ZyU1wG43Fmghu15SBE73IUw2GSYnpO4DcZB&X-Amz-Signature=ebd6f93e8db37f9e660c547951c5c52c963a82df902948237e910ef19407584f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO54Q5BJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyQBcuBntsOJwON6bz0u31bqhXguiNDXiOFrik3qJm3AiEA%2F1x4xxBTcfWBlB5%2FgAaOFFBK9cyERa6GpEL%2BuiExhDMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFCawOQXtOD90gEbircA9f9kBEUQsr6NWdrJWy%2FpNX8p7mTRguMYUjbTe9Dy2yuJsvFoKnFkra6hI%2BjZgXhhQlMH%2Fu2wQ%2B7ilxL3VU8PI%2BxieRopTNSsC7F6H1BKuCe9yuG1TgdnyEpa0vCmzM2tOVXDKNwvbbrGcLmAnxXu9dVa7LpBvotTVaaxudAvLE%2Fz5txgTnu50eOJLhGsx4T%2Fr%2FH1wawekhKqMOAFq1zdfFJGXXfckhCfFXY3XoIwkR4yn7JsIPyAxlrnKbTKSeaQzlPBdqwmm1PuTHPcFGFsu27IBUJ5Pg1PwokdnzarYi0cKQB2Zwzl7OlPixRHBNI%2BL1EeA%2B%2B9L%2BGyexeIO2Y4eY2KSglOZjuVAHDO44BwAHr8YHEPlGSEfG4omGlxGLcfJar4VhM23jdZtkqPHJ2BEeAZpji5CRWmk%2F3QsU5DJ5Ox9OJtW3xFepuaKKNcCpwXyJ8d%2FoyT%2FwpJ%2BBbYWt1A4zE4Dn2aymuJUzCY%2BQvJW%2Bo42F7XzSpFbBdyoH%2ByybDU5l5JcKS5WX6Q%2BbeRbmfM2t9orF9bdCYarMd1ENi6FTchU%2B%2FCZLMdWnA7iWwxdFYsx5EtcY7%2FDDwP%2F6UcmWc5ylePpbVsrKQG1negQGkDiHNWolqcIMaCn8u5XhRMNy58b8GOqUBD0jq9tg2cQTDSwZzp8e6aSKup5asIJmrhaQgNUnKt7zQOfuSeH8GgEZm8lTkecBzoqAR0IyttGVmP7ZQkVE4q9fcpC6Kvh5lVYkTiyXQZs6oRzkQ8Ph0V9KdvPg0Hm4S4RV1cD8YO%2BOp8epoMZFJ929XBxqpU4ENzslXZayqZmIqlWOA529BN1rYlal4zsIIcHVSv1NNAEx7NsO6V%2BoK%2BfqxHu5S&X-Amz-Signature=e56e5a74ef2c227e70894e885d7532aca7b65a9c03b32393f8d63a1b43339505&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFAV43YL%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T033054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIoQ4qQ8zIUoNVvp5iw7VA5tgYrULUizk3gdpUmmM95AiEAj3K190m358KsfJhQ%2FYEoUniAZSNmWcmQcAVIuJJod1cqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbcm0HrkbcXuXLE5ircA%2Fx6hlnKD8cPV8Y8eMQ2u2H4js7nUEYm9jrQ0GoFCx4WYidzwT92M7wmUVYiHeBv36zqoJLE7TNv0Cxy%2FUi5fM2ILjGtnH1bYNkJQ33x9CtOLYeLhaeI9tVRXr7T4edx1qgot3DDBA5nQ%2FPWrdp2mHiGXI4mT%2FGHXivS0om2CHc2jgzFiEmQ1HaE37FenwF%2BEZBqvBR%2FDGy19OD46UX%2F4r%2BBmHRk0Fbrh4NecF8T27EIMfxm4i2PkDspJsrOqL2tpkq1UHx3TIGPNhwjPsaRHjdI7ENq4j5pY9FwU%2FNPBk9SIlBdXSGTyz1Z2hYLxsC%2Fl7N%2BXMi%2Bj%2BkTGLTo6u7fhI8fe%2BITuQoopINwDrxWECo5mHMEr4l%2BUEYXj8t04Mgy0D%2BzHp9fcRO5JmdLyHCwf2UIxWz2p5Wpc%2BrpBGQkebmIaAC3eNE8VJ0iID%2B6ZGNsCbMcejN1W5TKwu7kBblJNcVELMc2acwFGN%2Bo71yo3HiaoCrKmgm5vOOAT6RpFy4jOqw59L4admK%2Fn02DG%2FBMCPTdb1nMhGUU%2BjbPwDFcXCKWvPvFjq6tSJhCBKHk9uVQ8rzSGwAzkG3yxvU12MxxfiOukusGHHKDKABnnV73ZI5P4BZ1iEi8sgvU7rFcMKq58b8GOqUBFE4RiNDe2meq3jEKI3cgUeG4NdMAjSd0GeSQrpsf%2FGzo3WGB1nrO%2FaAkSMAzbe445I1Hic92xV9VrlbJza6KsisWayntDpuyjykrPKgRPl1PC2QhJCdSkj5ni8458rHdqXjg%2BmSQTvoh%2B0rBEjmwgECK99l4cz6zgs7%2BMaxUCLPA44YQHERxcS8bSAfGnhDwYcjQaZPVvP64zCrkP1qVwUzFc92o&X-Amz-Signature=1b414d3cbab45f37cd493c40cdc6f79fd8f4cbf08fddcb00af821923eef5394d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
