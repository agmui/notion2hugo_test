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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZLVMO6Q%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIF1YVjhd9ZvDgWwvJUz%2BsxUmaZrD4FTXZah5dKR8eZA6AiAvz49phPad61%2FNm6cF%2FtWOXAGvEOfAk7BDVEc7BvkS9ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMZO7hXJEWOFBlIaIqKtwDyBJa0TsO5gDlLuZmWYEnamBkI8nLG%2FHACq8s%2FlrmsgQnJDjY%2FlzvcztOXVNjW8EjgZAuXHjYYan5lBlm0AbqNiRROxzxQatf2YxwMMYF8D6xwtoBrgpeeLerxpv4aZjMmSkK34YJxtzetShnSF0lzVTaBFfZXi3PvVBz4XbAjJwMUtJPF7cfhueObtceUgLMpfrnFQQjGKPg6KXNs%2FXAwSD0ty2umQzZKBV%2BgSwfYHiEurZytbww8tEpXAHnPb2WUrwqe7yK0wgAb7CzNGdMWKbnxXPxeqAZUuhKnfBNY6GHq48HOs1QkuRp9vTXEoNA1s%2BoRQhVAwqKAPFcUg8reeFy2b%2FDzE%2BWJQGX1W6xM8qMuTs%2Fl59ybleMyExSG12U8n3RPsrEmcC3cAdvu0vu4S7WaqIoJluzkH7jevUD5OMgoylGpfr84vz8Fgm8WUFbwHTNBw7UWaiV%2FVhFa5HYhaKShe%2B1WqZLfoyJZmSM8qnEtPQEjbROeTIHM%2B9w%2Fo1YA2rnjqVrF3zovC54kjP7nFPYpWw%2FcuDaSrZywHHih2yq%2BhgkFLURsXWJOqCPeGMoTyKThan7mgz9IKbfRxIgH6hcsz7a5qYi7OPY7mD%2FUtM47OCptfWCxt4Nkbww2armwgY6pgG3cLUFlhWN14J%2F3JA5FqcCqsQPKDwYJJEZes%2BQ0O9k0B0RT6z3OtlPeMOELxy5YDNvy2aLLLWixzIQwcwtsS7ETxP5HPj2%2BX1rMLnt3QqBZXVZiJ7jKB8Rv2Jq8LujmApdKFswAuZ7Mxj8xjX%2FTcRN%2FShxpsqHx0ANYEswlYUgj8DeTQSAxVqV%2F9ImTZg8xfVo6A3SH6vmvMZ%2BlJAcCyu%2Bzy848aaH&X-Amz-Signature=032b5b9fdc384c487ed178f097a533328747ae5c4124dd65b33681bf89d42288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZLVMO6Q%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIF1YVjhd9ZvDgWwvJUz%2BsxUmaZrD4FTXZah5dKR8eZA6AiAvz49phPad61%2FNm6cF%2FtWOXAGvEOfAk7BDVEc7BvkS9ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMZO7hXJEWOFBlIaIqKtwDyBJa0TsO5gDlLuZmWYEnamBkI8nLG%2FHACq8s%2FlrmsgQnJDjY%2FlzvcztOXVNjW8EjgZAuXHjYYan5lBlm0AbqNiRROxzxQatf2YxwMMYF8D6xwtoBrgpeeLerxpv4aZjMmSkK34YJxtzetShnSF0lzVTaBFfZXi3PvVBz4XbAjJwMUtJPF7cfhueObtceUgLMpfrnFQQjGKPg6KXNs%2FXAwSD0ty2umQzZKBV%2BgSwfYHiEurZytbww8tEpXAHnPb2WUrwqe7yK0wgAb7CzNGdMWKbnxXPxeqAZUuhKnfBNY6GHq48HOs1QkuRp9vTXEoNA1s%2BoRQhVAwqKAPFcUg8reeFy2b%2FDzE%2BWJQGX1W6xM8qMuTs%2Fl59ybleMyExSG12U8n3RPsrEmcC3cAdvu0vu4S7WaqIoJluzkH7jevUD5OMgoylGpfr84vz8Fgm8WUFbwHTNBw7UWaiV%2FVhFa5HYhaKShe%2B1WqZLfoyJZmSM8qnEtPQEjbROeTIHM%2B9w%2Fo1YA2rnjqVrF3zovC54kjP7nFPYpWw%2FcuDaSrZywHHih2yq%2BhgkFLURsXWJOqCPeGMoTyKThan7mgz9IKbfRxIgH6hcsz7a5qYi7OPY7mD%2FUtM47OCptfWCxt4Nkbww2armwgY6pgG3cLUFlhWN14J%2F3JA5FqcCqsQPKDwYJJEZes%2BQ0O9k0B0RT6z3OtlPeMOELxy5YDNvy2aLLLWixzIQwcwtsS7ETxP5HPj2%2BX1rMLnt3QqBZXVZiJ7jKB8Rv2Jq8LujmApdKFswAuZ7Mxj8xjX%2FTcRN%2FShxpsqHx0ANYEswlYUgj8DeTQSAxVqV%2F9ImTZg8xfVo6A3SH6vmvMZ%2BlJAcCyu%2Bzy848aaH&X-Amz-Signature=3e66dcc83e2539b050de96433043a475a7c98fc0446132666baa6ec6caf2ef9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZLVMO6Q%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIF1YVjhd9ZvDgWwvJUz%2BsxUmaZrD4FTXZah5dKR8eZA6AiAvz49phPad61%2FNm6cF%2FtWOXAGvEOfAk7BDVEc7BvkS9ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMZO7hXJEWOFBlIaIqKtwDyBJa0TsO5gDlLuZmWYEnamBkI8nLG%2FHACq8s%2FlrmsgQnJDjY%2FlzvcztOXVNjW8EjgZAuXHjYYan5lBlm0AbqNiRROxzxQatf2YxwMMYF8D6xwtoBrgpeeLerxpv4aZjMmSkK34YJxtzetShnSF0lzVTaBFfZXi3PvVBz4XbAjJwMUtJPF7cfhueObtceUgLMpfrnFQQjGKPg6KXNs%2FXAwSD0ty2umQzZKBV%2BgSwfYHiEurZytbww8tEpXAHnPb2WUrwqe7yK0wgAb7CzNGdMWKbnxXPxeqAZUuhKnfBNY6GHq48HOs1QkuRp9vTXEoNA1s%2BoRQhVAwqKAPFcUg8reeFy2b%2FDzE%2BWJQGX1W6xM8qMuTs%2Fl59ybleMyExSG12U8n3RPsrEmcC3cAdvu0vu4S7WaqIoJluzkH7jevUD5OMgoylGpfr84vz8Fgm8WUFbwHTNBw7UWaiV%2FVhFa5HYhaKShe%2B1WqZLfoyJZmSM8qnEtPQEjbROeTIHM%2B9w%2Fo1YA2rnjqVrF3zovC54kjP7nFPYpWw%2FcuDaSrZywHHih2yq%2BhgkFLURsXWJOqCPeGMoTyKThan7mgz9IKbfRxIgH6hcsz7a5qYi7OPY7mD%2FUtM47OCptfWCxt4Nkbww2armwgY6pgG3cLUFlhWN14J%2F3JA5FqcCqsQPKDwYJJEZes%2BQ0O9k0B0RT6z3OtlPeMOELxy5YDNvy2aLLLWixzIQwcwtsS7ETxP5HPj2%2BX1rMLnt3QqBZXVZiJ7jKB8Rv2Jq8LujmApdKFswAuZ7Mxj8xjX%2FTcRN%2FShxpsqHx0ANYEswlYUgj8DeTQSAxVqV%2F9ImTZg8xfVo6A3SH6vmvMZ%2BlJAcCyu%2Bzy848aaH&X-Amz-Signature=57ee69f2bbcbd3ea2b5e9038009342d6e252602add84f6f1bcccd1a09a67df41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RYNZWL7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIFybXYQp%2Fz5oNfcICpUClK9146kbU7I%2F3vIsb2co63nzAiAjsi2lRym03LXmjpr0R8Cfyq3NSVkp%2Bu3Prg7MRAuYUyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMnza54Qgz%2FodqBjMlKtwDpAiBExOOBojg61Fg6uqG2sSQgSTTzKT4UfewETj13gP7%2FYFOKCXnN4L6NTlWwVvKMTK60JbFzUgEXcW%2BLUzsd0BHmxAFzbjlybgtODEMMkNDIl0lH9i3seKFSfsHZhepfvM8vJsh%2BSZWAPiK4buP%2FFnODgLaXyFO622mxJNmhNuifge9%2BWxtwEMSq4mUhtWUV74KliUdTtJhAAQxPIpk%2Fb6KtNpJ5Su9Ay6tycehPEWPWT%2FCN%2Fr0qT5I1roQW7q2BF6yNAZSyEqPKUxIsjpVUHqfwmfd37psQzQDl5eRz4AtXxvgt3j4VzITcml57LvyeTO3RhShG4b65zxUg3DdrY7jn2IGMj8TjUdSQ89CKKLPe%2BVxlYALh9iGXnlw3WF2XBZ0RZRvtypiT4bQN2oDgtdNQX8NkEGO7qy4e7V1SjD59NQazahAXdzeV2xkQTSuJa0Kr5oAlG2UpOAl96LVF%2B%2FzMkWnVfAlAdP91tomn5POX5fdHj5cg%2FodMRsAXNWWyazF1BefOyMxwgB9mJtIznGg%2B8pCPvLWfDoyZFJIyzwpOht2ihwe%2FvZ3M01QAZMrjHO6Y8CqoAnTBXXxJ5mLpNtih1ZiqJImhp%2FnQBWQqKEipsOHU6r1HGjt8scw2armwgY6pgGpJQR4PeCUZR45OpsBXwtDL1vnh5vBfoUix4Y5kx88mv%2FsNvKzPNK%2FYbl%2BD5UF%2BquBJNrD%2BLBOnB109gcu2NRHZP42TnTAYIYqqbEytOdNY%2BLnX6JJMEGvg1aSoajP9vNhAOBOpayghvz73zKMOMXJxsfu29FHGJ7RBjKw0PCUksjPx1UEDt%2BgLZQ0lZo4N4TlJhe3nguwQnBGG5kXe4c7aXRWU840&X-Amz-Signature=ed74dbbeb1df6fa7f872ea616f2352cc2aa72ec5bda352cdbffcdfd280ddef26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSINEHQB%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIDVFHHUkPoLS%2FAGSEVa%2B%2FrzJVhhtvkOAhvesR9ekUA9pAiAPh%2BM%2FoR1rbagIlrTRfgyYjxAV1kolDAUI2viaJmyaqCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM5bqLP2dUBZpUAvoTKtwDXGIVfpsibej7TfN9iczkAyl5Zn1pNeEsbf%2Bu46wxf0B0hqPow%2F4XRavseEi1RoX42q%2BwlkQbi1alUPh%2BN3IOcFcukb4e7TqdEztgERxL3dogb0bRoNaljGCNmrg6pAndCAuL%2FQ3hdH6ZUSm2kxKbfmzsgfUTovkS%2BA1%2FZ6vCbHVxtENd5Le6%2FNh3A5HwD0HMgUP%2FuqYXziH79rzK7nZL36abjtH7n%2BKg7y2unM27RczCOL1iDASGs%2FXQoab337zEIopnQxghRYxo3686NGy98TLW6cMTXzREpa%2B7Y19upixSwhLuZmRS1c%2B3yfwEyILictmbI2HE4hWCigBhXjT8CaOWGKPSfuhW4PcSzdfuvQvtpRgA8idS%2FbAvF74R7P5Fgb8MYi0ASAGAllIUJlB%2Bcv8X1BDy2w%2BleFoRXbCvsf0Oq2mVTn085Qv4a%2F3I3LPIkoGSuXUHRFy1zP0KCk%2BnB0dt%2BybqZzAKC1hj4TieuX8Tduk1lWRkb4xu5W0Hxa2ovqLG3yS6zRMI6nE%2BzJAuw%2BMWo8feDwA2UqRWij1iR1SeMzDH3AdzKH70bvmGB%2FQievgNO5kdjCG7nFnvBbIgUCcNRrkkxPoLWCL4Z%2FcDA%2Bcpg%2Bb8hXGr9GzcaJsw%2FqnmwgY6pgFND82XAP0LmW2CW56Do1%2FB%2Fw8R9ZwuOOgd8M4Dgf%2BuH6FjonV1hZCPVS6ECep%2BlZXpFLGvNn2z8%2B2u0H3P8ET2YyWbhVqafDDP9HorRNriTCKEea9O0sRxVZUSYQSpg1I4ltHdo1ZT%2BmKBtJTNczjiuDc%2F89s3YPtSwcytOIAjhY%2F39wypLt%2B2c9DuQdWLL%2FZFiHFygfORAW88W9OytOXr5FcXrzbM&X-Amz-Signature=97daf58e91b2d78731c5675d3df109114fb0cd05af72166a12558d62b55e28ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZLVMO6Q%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIF1YVjhd9ZvDgWwvJUz%2BsxUmaZrD4FTXZah5dKR8eZA6AiAvz49phPad61%2FNm6cF%2FtWOXAGvEOfAk7BDVEc7BvkS9ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMZO7hXJEWOFBlIaIqKtwDyBJa0TsO5gDlLuZmWYEnamBkI8nLG%2FHACq8s%2FlrmsgQnJDjY%2FlzvcztOXVNjW8EjgZAuXHjYYan5lBlm0AbqNiRROxzxQatf2YxwMMYF8D6xwtoBrgpeeLerxpv4aZjMmSkK34YJxtzetShnSF0lzVTaBFfZXi3PvVBz4XbAjJwMUtJPF7cfhueObtceUgLMpfrnFQQjGKPg6KXNs%2FXAwSD0ty2umQzZKBV%2BgSwfYHiEurZytbww8tEpXAHnPb2WUrwqe7yK0wgAb7CzNGdMWKbnxXPxeqAZUuhKnfBNY6GHq48HOs1QkuRp9vTXEoNA1s%2BoRQhVAwqKAPFcUg8reeFy2b%2FDzE%2BWJQGX1W6xM8qMuTs%2Fl59ybleMyExSG12U8n3RPsrEmcC3cAdvu0vu4S7WaqIoJluzkH7jevUD5OMgoylGpfr84vz8Fgm8WUFbwHTNBw7UWaiV%2FVhFa5HYhaKShe%2B1WqZLfoyJZmSM8qnEtPQEjbROeTIHM%2B9w%2Fo1YA2rnjqVrF3zovC54kjP7nFPYpWw%2FcuDaSrZywHHih2yq%2BhgkFLURsXWJOqCPeGMoTyKThan7mgz9IKbfRxIgH6hcsz7a5qYi7OPY7mD%2FUtM47OCptfWCxt4Nkbww2armwgY6pgG3cLUFlhWN14J%2F3JA5FqcCqsQPKDwYJJEZes%2BQ0O9k0B0RT6z3OtlPeMOELxy5YDNvy2aLLLWixzIQwcwtsS7ETxP5HPj2%2BX1rMLnt3QqBZXVZiJ7jKB8Rv2Jq8LujmApdKFswAuZ7Mxj8xjX%2FTcRN%2FShxpsqHx0ANYEswlYUgj8DeTQSAxVqV%2F9ImTZg8xfVo6A3SH6vmvMZ%2BlJAcCyu%2Bzy848aaH&X-Amz-Signature=6ccffd90cc5aa100691c02d363d3af7f578a69279b68fde5dc50d567ae0f8309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
