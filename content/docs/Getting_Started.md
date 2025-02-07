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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YA6KQ5C%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCFyZu%2BYb41Qq2qvZtQS2FreaBaBkn9J%2FlkqucL7z45qwIhAIN5T5ZJya4Hu30KnLtvLRponIveP0eQsseUH9ClJBXgKv8DCHEQABoMNjM3NDIzMTgzODA1IgwzQaENld69cBMwLqQq3ANdHGKPE%2Fk1cNU5oLpy9OySsE9duWIIEeAdAOz%2F1HH9dvVBSS%2Bq2u256gaiFqMXsJEgzVbT5nShLHJ0uUtOl77wnyer8wgDMQc7KxeH2%2FH5xH8gg711pUvI5TeGWZMSMCKRfBDqF3yuEmqXTA3wUtkAipggJt8Q6oBZifBndt6otEoIT1O1fDGdcd8TdapCL2dZBjxZoOjT%2B3uJZo%2BJi%2FTcAKftAgNOTb0GwOPsflTptTfCN5fo5ARPYpEZt%2BkD95NrOagGlG7XKLIdrpykMN%2B%2BYotlySUJ7M81x7eiBXel8%2F1o0A4%2B9erZP0RDodcPZTP9rf5w2M8HyPxVdoHWFA7lIS4TVCSpu6rhaAir6uYrtg8aAPdsM2QLfnAXsXm7aSHqU%2FYqPYT63CI40Yu%2B%2Be%2BuA97YQdOuwFAuNYCTLXI8FnrR6UOvvQV43wtirxDOOTiVgoT7AWd1oOnrytG%2Bma9xISEaAC4bDYoxG576gDZCgnByE7qDEvZRlFdR%2BSUzGj1PEV%2FsBU0QwlAL8fZnX4NpmQPmLIGdRpi807K%2BrtBNPOLB5VzuauGsh96oKXYUpkgmt6xO7fVtuB3H4lBGztlPIGmn2F%2FIonbaKATUPR9GWymayaAXFaeppSz0uDD3%2Bpa9BjqkAf84aYWW%2B%2BzBOwpva0YwK7YcYKlv9Li8UA5Wpsr9kwHxJdzuwgX1nYPJiLWHGt4nZUQsuVg5vi%2B%2FeYgnj7f4ulFxzVL6S0tCquc42bgvRxqHmfhuOAciAQtMdJBwklNrhd1Pk%2FcI6XYIWZYg8J8BypuQVsG6A%2FB5GHTN5Zea3pZZyOWbXp8thRrR2G56EVJRdpCVMi8U8x8xd6WJOqrVItt7vAUG&X-Amz-Signature=8e8c6fb025ddec48eb046cc1d03b30c9b7f3b4903cb23bd4b870879c894064b8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YA6KQ5C%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCFyZu%2BYb41Qq2qvZtQS2FreaBaBkn9J%2FlkqucL7z45qwIhAIN5T5ZJya4Hu30KnLtvLRponIveP0eQsseUH9ClJBXgKv8DCHEQABoMNjM3NDIzMTgzODA1IgwzQaENld69cBMwLqQq3ANdHGKPE%2Fk1cNU5oLpy9OySsE9duWIIEeAdAOz%2F1HH9dvVBSS%2Bq2u256gaiFqMXsJEgzVbT5nShLHJ0uUtOl77wnyer8wgDMQc7KxeH2%2FH5xH8gg711pUvI5TeGWZMSMCKRfBDqF3yuEmqXTA3wUtkAipggJt8Q6oBZifBndt6otEoIT1O1fDGdcd8TdapCL2dZBjxZoOjT%2B3uJZo%2BJi%2FTcAKftAgNOTb0GwOPsflTptTfCN5fo5ARPYpEZt%2BkD95NrOagGlG7XKLIdrpykMN%2B%2BYotlySUJ7M81x7eiBXel8%2F1o0A4%2B9erZP0RDodcPZTP9rf5w2M8HyPxVdoHWFA7lIS4TVCSpu6rhaAir6uYrtg8aAPdsM2QLfnAXsXm7aSHqU%2FYqPYT63CI40Yu%2B%2Be%2BuA97YQdOuwFAuNYCTLXI8FnrR6UOvvQV43wtirxDOOTiVgoT7AWd1oOnrytG%2Bma9xISEaAC4bDYoxG576gDZCgnByE7qDEvZRlFdR%2BSUzGj1PEV%2FsBU0QwlAL8fZnX4NpmQPmLIGdRpi807K%2BrtBNPOLB5VzuauGsh96oKXYUpkgmt6xO7fVtuB3H4lBGztlPIGmn2F%2FIonbaKATUPR9GWymayaAXFaeppSz0uDD3%2Bpa9BjqkAf84aYWW%2B%2BzBOwpva0YwK7YcYKlv9Li8UA5Wpsr9kwHxJdzuwgX1nYPJiLWHGt4nZUQsuVg5vi%2B%2FeYgnj7f4ulFxzVL6S0tCquc42bgvRxqHmfhuOAciAQtMdJBwklNrhd1Pk%2FcI6XYIWZYg8J8BypuQVsG6A%2FB5GHTN5Zea3pZZyOWbXp8thRrR2G56EVJRdpCVMi8U8x8xd6WJOqrVItt7vAUG&X-Amz-Signature=83fa3aabb406b9e0a001aa0bae3de493eb28e37a9b89b0a88492e4c28a6747bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625AUUXEA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIEEgsVXEGpu%2FoOdmefARt84tIRumUL4zYpPElajzZor%2FAiEAoeKdeYoDDzPenFjuKrTk4IeivotHZ0qhvAPJHSPI%2Bz4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDF3k1vWjc7emyaBf4CrcA5Lu3VDvDjREDNgfpZdM0VC%2BPb9u38UQ94cGZdauRHlXXEHD1H3n3ex3GW0Xbe5pl4NRO4LC2UuNYdV%2BtFU3XsIC%2B3wWnvUcy5HcsWnvKfg4JVQokYYwhnDbPLp3OzG9zfn0QRa56pi7Qkwf3%2BaY8Nq%2BFc7y%2BXy%2BL7qg%2B%2Fx9e4ACaAGQ3d%2B2iF2ICMyLDig4Er7sAuhTBcbTDYIV5QgocDTzEMqmh0Lbu8U0kHdw%2FsbC9FynoCMHq0XR8EAgmwKs7TZR47n1jBEhGOnveTRqMT6VyZxCMDdRMwmhoPv4QTkOy8Qi0uIBmHPuYcir%2F0L7zYR0ySSSaiu%2BtaZ8wAlilBGugv1M0GS9CbvmcLVWL57wxNgPpmHrD17LHckjvSXDQNe9sISiJAj%2BQPkLMLpnQ5h1Y1iIrTKTM%2F%2BUtZqBQZI3t1WIjVziXWp%2FEuPmGphc93Vkman8N1boyxXrfpKnp14vvXUiW1zJ%2BBycw%2BLDf5IcWEyPZnARS9O2xr5dZEyVvfaJDXAnXCe%2FPEpo2ROjf5HlFHcZ4tQCtpXbFFBPh4xO7cO8n49fA5KTc1mPVJywT%2Fo2pnPe6IYe7C4UlItVHRl0ToI9w%2BMXx5h5CSD1dtr5sJBhZwvPkWT0LjAPMIH7lr0GOqUB0zxnSvaUstCWx7WJCI0F3s0jWvvf1VilO2cbKf6YlZrsimDQRbsaQLgpZW4Yzyk4hl%2FBBBYHVpE1LNuLmaS0dxHdKr9KQIJumzlRIcMGSxdg7%2FIkDX4XNksEJWNPaeZIdsHljwQlO6iaPll%2F9IXqT7yRCzitMuCB8m7swhmQDhopF1uwg%2ByNQiEaBg7u0dL3dg%2BOIipA%2FtKY9rHxdxUNS5H1E7qO&X-Amz-Signature=f34433895bb74944c3e28356d23cc45cf9043632a2ae78c9fbe23a5ec30fad35&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSYSVO7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCaaX3FUnfCTPLUQtn9x4JNoTYcwbksEiu56bRj0ovPeQIhAPffvxZlvicytS31Baq4D%2BAFCnDXXTv%2BShPdYv%2F3eDjWKv8DCHEQABoMNjM3NDIzMTgzODA1IgweWPPtsc948YNrlkwq3AOURVbcIxJiHq2X%2Fw7o20VuM36Ax%2BTsMgg9YNHW2Pym4IDsJOxMe0ODTZ5e79gfdNmRWRSEhVY03eLSbc1SUoX0F9IikjoabS5dWk9PMz2gpn%2FOjnVoYi5VwAOCe2RhikX3zeYWXOs6QXIaqf8vk6gywDXEEf0TtAEPFiWqChv6damtWbeqW8Q0fFWLMOcFYdLQc%2FXI8x1aqiJaqpuaUz0RHryQwDgkCm5AslNmqgwgoSlPn6n7uqwjjjFJ5JUcyYh3%2FjF80cVR8N8EXQjec%2FAYrP%2F8kh2xAymhwDX8gTM%2BTyxaUrypPTJKbLHbD3YWbwHPr6l6jnBGLOtKBYE1NdgqdADE4fhS096Fy0fgzdCnB6Op63NQs6q7M%2F5OB4HH1gZBMI53apNUydrKTvFanFOhNU1ao79ZAkZY3JqRcm3glUzBN3ile7tqEhZU4bvteIACexVZHJJSmbmDaxfwGh4mrljed5sPW06zFA2ClRmyBbHUmHUN4%2FG%2BpAesTWXgRMd7ONw6GQsdDeQFFlGYDZJObvxd7SlmTpKilg9BGDqxIZ8qZ9eNjyhXwBTowPrCENN5WRcr0SwdQsSXuDGJkMCTNzsdQ3tBIq9Nb24IJEDAffp1NObXtK6rduKUQzCQ%2B5a9BjqkATI5E6YOomIMO3fvEc9kZNkWLPq3f6hwj%2Bg7FRr5Ej3UOcBL%2BFEWDsri2MxTn3KImtuqKM4eOlrtxCdizr8zs1QtE%2BCHHX30KemEO24qw3AMhMSJgXbHBzHh8zWTgBHuRbAeOUmMk9Mpm9jPa0qcI%2BmVel50ZBlz4RB70UphFiahOjUU6BzUAAtj1GFh7qHA4CuJF4mK6SQSZdIXkjbAdpw6QCrY&X-Amz-Signature=9bbb3eb327f681047d9ad9282654cf0e1164d2b0f3781fb3dac899221fd3a765&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YA6KQ5C%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCFyZu%2BYb41Qq2qvZtQS2FreaBaBkn9J%2FlkqucL7z45qwIhAIN5T5ZJya4Hu30KnLtvLRponIveP0eQsseUH9ClJBXgKv8DCHEQABoMNjM3NDIzMTgzODA1IgwzQaENld69cBMwLqQq3ANdHGKPE%2Fk1cNU5oLpy9OySsE9duWIIEeAdAOz%2F1HH9dvVBSS%2Bq2u256gaiFqMXsJEgzVbT5nShLHJ0uUtOl77wnyer8wgDMQc7KxeH2%2FH5xH8gg711pUvI5TeGWZMSMCKRfBDqF3yuEmqXTA3wUtkAipggJt8Q6oBZifBndt6otEoIT1O1fDGdcd8TdapCL2dZBjxZoOjT%2B3uJZo%2BJi%2FTcAKftAgNOTb0GwOPsflTptTfCN5fo5ARPYpEZt%2BkD95NrOagGlG7XKLIdrpykMN%2B%2BYotlySUJ7M81x7eiBXel8%2F1o0A4%2B9erZP0RDodcPZTP9rf5w2M8HyPxVdoHWFA7lIS4TVCSpu6rhaAir6uYrtg8aAPdsM2QLfnAXsXm7aSHqU%2FYqPYT63CI40Yu%2B%2Be%2BuA97YQdOuwFAuNYCTLXI8FnrR6UOvvQV43wtirxDOOTiVgoT7AWd1oOnrytG%2Bma9xISEaAC4bDYoxG576gDZCgnByE7qDEvZRlFdR%2BSUzGj1PEV%2FsBU0QwlAL8fZnX4NpmQPmLIGdRpi807K%2BrtBNPOLB5VzuauGsh96oKXYUpkgmt6xO7fVtuB3H4lBGztlPIGmn2F%2FIonbaKATUPR9GWymayaAXFaeppSz0uDD3%2Bpa9BjqkAf84aYWW%2B%2BzBOwpva0YwK7YcYKlv9Li8UA5Wpsr9kwHxJdzuwgX1nYPJiLWHGt4nZUQsuVg5vi%2B%2FeYgnj7f4ulFxzVL6S0tCquc42bgvRxqHmfhuOAciAQtMdJBwklNrhd1Pk%2FcI6XYIWZYg8J8BypuQVsG6A%2FB5GHTN5Zea3pZZyOWbXp8thRrR2G56EVJRdpCVMi8U8x8xd6WJOqrVItt7vAUG&X-Amz-Signature=e4a597a632cd8cdd8b465be32d6d72ef162aaf33fbcc9fd7a2f302dcfeefa9c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
