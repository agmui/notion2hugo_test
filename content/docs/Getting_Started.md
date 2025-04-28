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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2STIQNN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGphVmlhH46TljXYYABmcmKD41YI5G%2Fy3yigs4bVYBrJAiBhAt50PXkHuzermEjUtzxJXHnI%2FWHD%2BVrt25JlLyJ4PCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMXnxbyGQFXUhGDVkGKtwDnmd0xsrrAqPronlmerUZzIU5v%2B9GVsngrILrI91lj6zUlNr%2BYujZPbZe3rcwEvLobMaCSOEvgVuvsKs6qkqKmuhXeu9EhNIkDBbEsbTJSLC54OP0RgPLbCvkwVgX%2FQnfzQzlEVakAR0eHnuecUbxBscJFu%2BuUbyRCoPHrqgkpjkgGy8qMbLTr0TluP7po3N%2BxvlGzjwBWGLiOIg%2F9fBrLyDPenk8zaA%2BqE2lKzSbEUmQukzz%2FXQOlyyaFGtW4Jv%2BBbSXxWKVYHnGwneD0jq8EbUnRY5ul9J%2BwX%2FxtOkO2aO0hwssU9cDEmV3AqkYKpfJQWp6wTedpx3%2B0QqkP30Yq51tbRvZTWdw%2FOeaCCd9OXeW2cFczd83aw8Qmv3wlIZ3oXXUp4jVHMNN3UEqnSvE5h57YiFfciBxCuIeUjCbuO%2F111KigT6Lid%2FxBbyEzsnbo85X09MuKCMWGScKpmO%2BI59PRi40fagWUMlKVntRNYAW9yCKRAEpBevpqxrk6LFK1l7c1x9yPROVCJ9fUEwnpBqWhFVoIE%2FFjx7sDBJwVrHlW2mNSEZB2SSdBgCoITS7k4tyDZlOKB40CZUwGzCNLP1qZ6WqfKdfF7SiiQDWyOyQuoRav9fxp0azZd4wjaO7wAY6pgE7OKwNXT4bGSGvUpoBCj0SZMEtLZiyreMfWuTr0fIxuT3swKC0N6uBsF2rMWUr0QESjbOjLQgoG123g98wACERXDpOr6L0dQ073tBEuhvTeYjdvXebgARYJF%2B42G4alA%2FF5jzVkAREGbupVO1Me9BuFmgzvWKQgY%2BHzWssaNEwNhz6xR%2F8B7pPFDuDGOiCMK3JCYSiJ3IFMhufzmys%2FvuND2vXz6wn&X-Amz-Signature=345f05c7eb6b58448c9eb157a818145cc3b857d370c617148c930ec62a16e036&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2STIQNN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGphVmlhH46TljXYYABmcmKD41YI5G%2Fy3yigs4bVYBrJAiBhAt50PXkHuzermEjUtzxJXHnI%2FWHD%2BVrt25JlLyJ4PCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMXnxbyGQFXUhGDVkGKtwDnmd0xsrrAqPronlmerUZzIU5v%2B9GVsngrILrI91lj6zUlNr%2BYujZPbZe3rcwEvLobMaCSOEvgVuvsKs6qkqKmuhXeu9EhNIkDBbEsbTJSLC54OP0RgPLbCvkwVgX%2FQnfzQzlEVakAR0eHnuecUbxBscJFu%2BuUbyRCoPHrqgkpjkgGy8qMbLTr0TluP7po3N%2BxvlGzjwBWGLiOIg%2F9fBrLyDPenk8zaA%2BqE2lKzSbEUmQukzz%2FXQOlyyaFGtW4Jv%2BBbSXxWKVYHnGwneD0jq8EbUnRY5ul9J%2BwX%2FxtOkO2aO0hwssU9cDEmV3AqkYKpfJQWp6wTedpx3%2B0QqkP30Yq51tbRvZTWdw%2FOeaCCd9OXeW2cFczd83aw8Qmv3wlIZ3oXXUp4jVHMNN3UEqnSvE5h57YiFfciBxCuIeUjCbuO%2F111KigT6Lid%2FxBbyEzsnbo85X09MuKCMWGScKpmO%2BI59PRi40fagWUMlKVntRNYAW9yCKRAEpBevpqxrk6LFK1l7c1x9yPROVCJ9fUEwnpBqWhFVoIE%2FFjx7sDBJwVrHlW2mNSEZB2SSdBgCoITS7k4tyDZlOKB40CZUwGzCNLP1qZ6WqfKdfF7SiiQDWyOyQuoRav9fxp0azZd4wjaO7wAY6pgE7OKwNXT4bGSGvUpoBCj0SZMEtLZiyreMfWuTr0fIxuT3swKC0N6uBsF2rMWUr0QESjbOjLQgoG123g98wACERXDpOr6L0dQ073tBEuhvTeYjdvXebgARYJF%2B42G4alA%2FF5jzVkAREGbupVO1Me9BuFmgzvWKQgY%2BHzWssaNEwNhz6xR%2F8B7pPFDuDGOiCMK3JCYSiJ3IFMhufzmys%2FvuND2vXz6wn&X-Amz-Signature=57ba3bc0cfc3e616c3ffbf0e6f35ccde6a63a29634b5e80ff964a9032ba93228&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXF74ACZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpi%2BsAydRXx2x0zqGtStri%2F%2BmEdLelxqTtUMtVK%2F8moAiBpMRM7M9scV%2Fbeii%2F7qccgNXgCglhLn6epmnkAo3nukir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMjkn8bSuabwPDdOieKtwD%2BNHeforBQ3tBcRY7FEx%2FJcws28YvewRghZhdIpEeI8nakTvahQNPyVmMFJD7O3%2F0fksms1rXukfYxKy7T79CGRtlyOu0dU4O3zclzwY4oZWuvlvJylCivbd1DlGy2LF6tgYnib84XZBcTrzuA%2BrdwwP9k0VAYOtcqQ8nBA%2B%2B5FI8Lf45OUg%2BmejNDt7BYzqoY2baT%2BMyHRE70XCL87%2B97iuITCwe6jytv28ZyaGXyw69jPhqp7R0Gc2uuKy72yJ9aOAiF79QuF9At9jI9mXjkhzXvko5L7jmA25GCuKkkT7m%2FTde9AwDAE8KuX4N%2F%2FzLnsAUSRiQL7qALSqhWS3CASwO4AL1MVe2y%2BW1MTmw5RSwDsJmwXiuvkih5SrSg2jOB4rPHp%2FVeNbVND0JtEsMFLyXQObTezo1FPRWHbRFsxYphh%2BeRhKCgedSudegcvJRf1AUknMDIqrRcleR79bo5n7rIhJz9fYRxI1cHCQVyoarZmceWoApLCLGYjx6S4uYu7aptFEB0sln1vzxGcJlFzuXq0GaYjBGY3XkPf3qX3HqAah8eMjihmRgbp0WbpUT1JIbkNlNHiUdW7W7iI4GfgbTdJ0HLD8RFjtA%2FQHKpahlV%2FvhDNrWJPxN%2F24w6qK7wAY6pgENGczOYUyt0%2BpOZF7lRy9nwPqsSMW%2Fde5j3wTLafhxXF2HdLDYDMdvYrDcOOVfI3ebichRR79nhklyormhDnq1bLEz%2BPtnHBqyZ4mtDTPP%2F%2BJy%2FCDMVbYv%2BJQOS8rZeOszbkt%2FYnfNoynyq1Rqd4hV8S%2FHJqeqW5GVoY%2BogIdJdHtBokm7fcgzOy%2BK5EOdNHQWTekdMIZoT4EC7csmNvomTS9TcSJ8&X-Amz-Signature=e13dba5e6fd6e8c069cd1bd1b194fd14baa0b377573710ae20a36cf0674e67f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBDYT26%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwRm1TbiUFtMkag7PRKQUPIXSOHoUzOv1qDqz5POi0PAiBIG%2BLg%2FrLZG5u5wt1dDIgIOCouJ8NlUcECOrKIOeSMbCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMS1BhUbsWA35IDRpdKtwDLitGWfe4a15We1Ksq%2BI0baxgD%2Bxaj9slAXP2izPIvIKqKJexB02Y62zdhQK2xixY7Vn%2FFjv6BhBBtXDjHaHw5he1nLWp7MHsJNd0x41NtyZjRamkNhHnOyqcYaT5%2BIO%2BC8zIEMNia9Gr1CSuq0mfpbTnYv3SuPEsU9Bx3ncaed2Fz7wRONdmc2335qxiYCgfCjObHNgtAHGpvew%2BXgGNh%2BypZG3gBID3T0%2FMDr%2Bi6GvU9NIqEVFhTmvJWeD8WkvgYsr%2Bvv%2BKkLfAmpl0p0k1RmUwmFpcm8aZITfUzFszOMdJf5qB2OKovSjYJl7LmD6scrSZNIywsGHSZCOL7S7n5iDfDcvKsqm%2FVw%2Fuzh1q6SwGJFxJfCIg124O8D2O0K%2FL1dyRMFl%2BmCQOBoefH3w4XatAlmpHdeOnCTqb5f2%2B%2F7G%2FpoBd20LNIJk0kIIF8DlYf6ECNNTfNV%2Blu6MeqObxgagU3DIZqGEUSr2T%2BlvCuMDm8y1H%2BN0KOTV1lfPzIlEJlrwbNG2%2FwtBJaC%2Be0HD71gQf2wdvbGw1V8%2B3PVtioTkn5Cqs7Ef6whl77ek%2FcXn3BnowHIhdITnWbSyCU4XBUr9OBFkgTW%2F3dJK1xHMa3MHPF9oobi0WoyIZIAYwi6O7wAY6pgFoJbmHYlQQsr4oxDjX0S8IPlsb4nRP82Uc9vGuUMaVfzlGJIg%2FiPC6jkkcrNbb6%2FZxn39Ngzup8FIoYU%2FPdYYlM%2BdsGzG87C3Fx57FxWvWMHYMERTBY1JnyQSi9rpVJLGqHpq5%2B8QxVExCLbwUIFqHFspEgIF7s%2BUdiBNYg6SzTzwJB79Ubud2wmFP1GgebpfbRGTPdMe%2FrRpV4Sr%2BujmAiqOcP60S&X-Amz-Signature=3721222a9393752d5743b656c7980fc44580a5482eb11d708473fa7f99d3c3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2STIQNN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGphVmlhH46TljXYYABmcmKD41YI5G%2Fy3yigs4bVYBrJAiBhAt50PXkHuzermEjUtzxJXHnI%2FWHD%2BVrt25JlLyJ4PCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMXnxbyGQFXUhGDVkGKtwDnmd0xsrrAqPronlmerUZzIU5v%2B9GVsngrILrI91lj6zUlNr%2BYujZPbZe3rcwEvLobMaCSOEvgVuvsKs6qkqKmuhXeu9EhNIkDBbEsbTJSLC54OP0RgPLbCvkwVgX%2FQnfzQzlEVakAR0eHnuecUbxBscJFu%2BuUbyRCoPHrqgkpjkgGy8qMbLTr0TluP7po3N%2BxvlGzjwBWGLiOIg%2F9fBrLyDPenk8zaA%2BqE2lKzSbEUmQukzz%2FXQOlyyaFGtW4Jv%2BBbSXxWKVYHnGwneD0jq8EbUnRY5ul9J%2BwX%2FxtOkO2aO0hwssU9cDEmV3AqkYKpfJQWp6wTedpx3%2B0QqkP30Yq51tbRvZTWdw%2FOeaCCd9OXeW2cFczd83aw8Qmv3wlIZ3oXXUp4jVHMNN3UEqnSvE5h57YiFfciBxCuIeUjCbuO%2F111KigT6Lid%2FxBbyEzsnbo85X09MuKCMWGScKpmO%2BI59PRi40fagWUMlKVntRNYAW9yCKRAEpBevpqxrk6LFK1l7c1x9yPROVCJ9fUEwnpBqWhFVoIE%2FFjx7sDBJwVrHlW2mNSEZB2SSdBgCoITS7k4tyDZlOKB40CZUwGzCNLP1qZ6WqfKdfF7SiiQDWyOyQuoRav9fxp0azZd4wjaO7wAY6pgE7OKwNXT4bGSGvUpoBCj0SZMEtLZiyreMfWuTr0fIxuT3swKC0N6uBsF2rMWUr0QESjbOjLQgoG123g98wACERXDpOr6L0dQ073tBEuhvTeYjdvXebgARYJF%2B42G4alA%2FF5jzVkAREGbupVO1Me9BuFmgzvWKQgY%2BHzWssaNEwNhz6xR%2F8B7pPFDuDGOiCMK3JCYSiJ3IFMhufzmys%2FvuND2vXz6wn&X-Amz-Signature=9552ab25715d4d547957fa437ea28cc5241e79c5416cfff5ef2b5c495c39c7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
