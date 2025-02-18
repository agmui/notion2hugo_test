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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672APLVG2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCwvKGKdAHAH1HOjsOycyto4PSfpEbEPcqPcOMuQmo5VwIhAKh0uXwK5zo2I3FwmAzQWIzdAk1kMOpgXrVaziCp1XZqKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTu522fvlTYH9J7T4q3AN2uZ9Dge7CMoZyjIj8TlfgCPNm3GNO601o1cD61RhWEvfEyrjDLGxrDvgSXXYxx3vjgq7naAZgA%2FjEvri3BiyP1h%2FxL593zBKFRpmbA4pWWTplyL6ylmEsOoG4vzyvitjTOXcMStB74dPqtJlEeM18mHgPTo7t61fX8QkgiM2wOEj5Qa7SXIEFq8KGdsZHm%2BqKmE3G7nqcf1nw4NQKegdy5fJrBSSk34F0xRa4HzLVEN3rbzphiFsK9iHid287qsZJoEkqz%2FKPSguYQVYAIPXCbb7pcKHMYB9wSf%2B5sDa2uNYK1p5aNFXZRn3i9xkdqtF5ewznfM66G77tyhVBHLYQUd%2BiOfey09tKXqIQ0ngMraKCHm701XNJK1DoT40I380FVjHaBdlf6qwlobE0UPGpmbJSN2AU5ttZApU3IkYllWdneGO3JiIQNb7cPxFBkZW4TXQFtXNBW%2FvlBBLpuM%2Fs0Na90oCQwhOjWSE%2BxeBvaZCk%2BIr4eCIuQM6IyrX0hio9InKJMW7JsgPuihxJxRa7Zf6GZl3mY6wRClbzi14hYanZ0bpb9nf3GKNlJ6ARj%2BbqrqQ0sax7bZRxnBVmSCRDEd1ejbo%2F21TJAYtka8fZ7QBAlAQR1FoAjqC83zDjyNC9BjqkAfpJwfQzZ6YJrzG4w7nkdWN5BkGNtEIl57KqzWIyF1gIO48JQ9VVHoK0UlD4cLT4Faia25x3tqOxBHccBaJwhAZErpAXTCocwoQaeXhUbDDaLj6HQVvb%2FFCBpHuEYXbpVRESeFwA9C4vSWW25vHX8912e5JOwgvmPgEE9nkZxhVsD%2BQbAZoJnXvIXbj46uo%2FlQxU0iFqM%2FLkWnt7uwE6Ju5oUV7J&X-Amz-Signature=70f52d6404d5a1e0c1b641ae4cf6545ed4a876d792eca89efde235dfd4fd3a22&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672APLVG2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCwvKGKdAHAH1HOjsOycyto4PSfpEbEPcqPcOMuQmo5VwIhAKh0uXwK5zo2I3FwmAzQWIzdAk1kMOpgXrVaziCp1XZqKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTu522fvlTYH9J7T4q3AN2uZ9Dge7CMoZyjIj8TlfgCPNm3GNO601o1cD61RhWEvfEyrjDLGxrDvgSXXYxx3vjgq7naAZgA%2FjEvri3BiyP1h%2FxL593zBKFRpmbA4pWWTplyL6ylmEsOoG4vzyvitjTOXcMStB74dPqtJlEeM18mHgPTo7t61fX8QkgiM2wOEj5Qa7SXIEFq8KGdsZHm%2BqKmE3G7nqcf1nw4NQKegdy5fJrBSSk34F0xRa4HzLVEN3rbzphiFsK9iHid287qsZJoEkqz%2FKPSguYQVYAIPXCbb7pcKHMYB9wSf%2B5sDa2uNYK1p5aNFXZRn3i9xkdqtF5ewznfM66G77tyhVBHLYQUd%2BiOfey09tKXqIQ0ngMraKCHm701XNJK1DoT40I380FVjHaBdlf6qwlobE0UPGpmbJSN2AU5ttZApU3IkYllWdneGO3JiIQNb7cPxFBkZW4TXQFtXNBW%2FvlBBLpuM%2Fs0Na90oCQwhOjWSE%2BxeBvaZCk%2BIr4eCIuQM6IyrX0hio9InKJMW7JsgPuihxJxRa7Zf6GZl3mY6wRClbzi14hYanZ0bpb9nf3GKNlJ6ARj%2BbqrqQ0sax7bZRxnBVmSCRDEd1ejbo%2F21TJAYtka8fZ7QBAlAQR1FoAjqC83zDjyNC9BjqkAfpJwfQzZ6YJrzG4w7nkdWN5BkGNtEIl57KqzWIyF1gIO48JQ9VVHoK0UlD4cLT4Faia25x3tqOxBHccBaJwhAZErpAXTCocwoQaeXhUbDDaLj6HQVvb%2FFCBpHuEYXbpVRESeFwA9C4vSWW25vHX8912e5JOwgvmPgEE9nkZxhVsD%2BQbAZoJnXvIXbj46uo%2FlQxU0iFqM%2FLkWnt7uwE6Ju5oUV7J&X-Amz-Signature=70e033b5dfa52c863088d83e7d81bdf0f8fc5ac0494473002f493e6a4622dc46&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FXY2Z6F%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDSFicMZuI%2Fs3V19A9x%2FgmOihpzWkGyczMSpKfAxuVSdQIhAIjQ1BCljV2%2B9DcHPnUQH1l%2BucBjB9aKQUOn1WUFaVEJKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3olvTN%2BAcW8GXQ5Qq3APJm9Btr1UhLrhRdNqI%2Fmu%2B7CVOczgVujulmMWSikEfHlxCP19OXiZoeKp%2FLDucczUN%2BcJBQ3Rf5NDTkaQpX0tKY1%2F6y104BFIhuur3Obr6itOVen5WnQheTRffMPU9Lv7qXwXof27H8BDfs3h0GKqsMU1JzMQ%2BzGbPzQig3FZUGZ5cHyrn%2FtMmkEOX1%2BJNwSS5OdNLJMpFOBVQgJ4Gv7ZeKlYLamVQIqo%2B%2F8uTE1G94%2BBx5D69erAv%2FQw9MbB4aoQLqbUMCfdk2VgGyhOB4HlyCRCJMdDVK9CmkgvDGU9cyC3VoqlbDphfBS%2FmAelpmoJJmRoDwGN0hkHk6uqdPHYLs6UYJx2iWqbA%2FVcIU1NBpvywYS%2BWL0yXlIcbMaReZcjwoXxdepDmsNce%2BCpGwjcYcmeXyzU0v3Z1VeHdXeqagZizzoyWUu5GugxL0xk4kZFygj3D2617xFxvVPez3rFpD1CXRzSBGckz7DUjNopgLuunUWuU4bxWTIw2fdluz8IDlpsYrPU%2FdSWLeCiXMGM36mAGbjx%2BFbZb%2BYafecaZrRdmsfe7lHyBOC73dKyGIFInTp5xeS87DEoleV8qyrulfJfVQXrvV9KXARpJqyBO5b34ZAvf6H2PpH8FATDQ4tC9BjqkAVJdH8WiLzIxbNdkrk%2Fb57uuPocchrGVswior%2FALCuUwHgp%2BDU4m2EBX9T%2FLbvFP9f%2FsIOxDfgLBkJMk4mlExsW%2Bmfu1xlr176QYgdgPFJiU4c0Dn4aYzErn0zgASH9NZhJe5hJP3Ew3pcenfdVkC5oo6f4chrXVhl2molORZDGYXWnikUayWPGXKQ2SZEmFhbrZb53rfSJ%2FgMqnC%2FQh2ewelUAK&X-Amz-Signature=001cdb634cec5fb8af7fae00dff9945b9da6295cf3f9afb3e98c04970513ffbb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKXQSBT%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIGkepZdeodmqcxp2YvglmB3GfmA%2BVGBaBOVGidbv1C8EAiBQPlQBr5Hd3iR%2FQbbl45wdSlAta04yk5wy2%2FIfJ%2Ff%2FXCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6WUnzvOsV5TqH7ZpKtwDtqUPOUciASxKXJHLHJ35dQ6%2FOa9vX6Wy0bDxR8mzthNCpe5P%2BEM%2FGOlXRhQWcXycFA2hHG33ZgR9p6ATQq8QpO9%2FYBenJlZkJX6SrOGQlfHTjAw%2BGx3sfIeowi4uAdo%2FTJV3mvYUoWGOrHPKbm2nvJLZ8G4pgOttnalbqfYePbEU5YS5hVHAzGmQMuJ%2Bxvbu56bHvAbVyEC1V57Q%2BO9LvckfJTc0HNzC8dDq5DjVYCdyu%2FPh0XW3yNt757LMXtr2UXj%2FMODX%2FeuXHdjg9ObBdQMa4jAfzPaZ%2BQlCiaGDakJVlEbwJ0NhZd%2F3N3ls0gL9XKMoXVa6hgy%2Bf8XrpMmU%2BLqmYllg96VI98N%2Ffi%2BZe7j90c43hSMhfABdLr%2FWAH9NiEJREpkpvZ4jGiDUC875pNAR1Q8HLLdlnauUdX0VVv5CvMDt2chQOLWJH72IkajIevrBCd7nWMoR0MDLO%2FPmrRh3B0Bx5ei%2F5bSqeeRCe7RzFfkeOcN2LiMjBtr0BFYEBvVjd%2FEBTyrfrBOLmlXQsJHWmpH5lPc4VFWUDkrBv3WJF3%2FxCfNk5WOULop9gL8hC3zcrdnCLEY7xjbc9hGH%2BUwyV5dvo3eIUmaZtQC1TEtFQO0DiR1dakLQ1CowlcjQvQY6pgEpkzm8GjazjQRf2qr5pAPgWeyTrpE4Jbfl2kSQTaRvg2PWPgZqRXvCXgORibN3Tg8At7zczl2W8r%2BSzpVGirc60SGE9wYDYmi7NAXmN%2F3GG%2FEh5Wx4Vda1bmc9RjhNOCqd5XWs%2BIDvlC%2FLBYYp1JQi8H9MJBtJt%2FLPuSY8%2BZUaZvSf%2FrUUqJKjiQ4gRDkch2gHHX3mIjbCL09JMyIb915aB9%2FtwTIU&X-Amz-Signature=d8047e8d215fbbe27d323c2cd2942f4ff768b6a530b963773651e281ba8ae4dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672APLVG2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCwvKGKdAHAH1HOjsOycyto4PSfpEbEPcqPcOMuQmo5VwIhAKh0uXwK5zo2I3FwmAzQWIzdAk1kMOpgXrVaziCp1XZqKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTu522fvlTYH9J7T4q3AN2uZ9Dge7CMoZyjIj8TlfgCPNm3GNO601o1cD61RhWEvfEyrjDLGxrDvgSXXYxx3vjgq7naAZgA%2FjEvri3BiyP1h%2FxL593zBKFRpmbA4pWWTplyL6ylmEsOoG4vzyvitjTOXcMStB74dPqtJlEeM18mHgPTo7t61fX8QkgiM2wOEj5Qa7SXIEFq8KGdsZHm%2BqKmE3G7nqcf1nw4NQKegdy5fJrBSSk34F0xRa4HzLVEN3rbzphiFsK9iHid287qsZJoEkqz%2FKPSguYQVYAIPXCbb7pcKHMYB9wSf%2B5sDa2uNYK1p5aNFXZRn3i9xkdqtF5ewznfM66G77tyhVBHLYQUd%2BiOfey09tKXqIQ0ngMraKCHm701XNJK1DoT40I380FVjHaBdlf6qwlobE0UPGpmbJSN2AU5ttZApU3IkYllWdneGO3JiIQNb7cPxFBkZW4TXQFtXNBW%2FvlBBLpuM%2Fs0Na90oCQwhOjWSE%2BxeBvaZCk%2BIr4eCIuQM6IyrX0hio9InKJMW7JsgPuihxJxRa7Zf6GZl3mY6wRClbzi14hYanZ0bpb9nf3GKNlJ6ARj%2BbqrqQ0sax7bZRxnBVmSCRDEd1ejbo%2F21TJAYtka8fZ7QBAlAQR1FoAjqC83zDjyNC9BjqkAfpJwfQzZ6YJrzG4w7nkdWN5BkGNtEIl57KqzWIyF1gIO48JQ9VVHoK0UlD4cLT4Faia25x3tqOxBHccBaJwhAZErpAXTCocwoQaeXhUbDDaLj6HQVvb%2FFCBpHuEYXbpVRESeFwA9C4vSWW25vHX8912e5JOwgvmPgEE9nkZxhVsD%2BQbAZoJnXvIXbj46uo%2FlQxU0iFqM%2FLkWnt7uwE6Ju5oUV7J&X-Amz-Signature=4e3701b995644a4e9a00befe8056347329b45be51a4fbc3d2c6064ec85d99e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
