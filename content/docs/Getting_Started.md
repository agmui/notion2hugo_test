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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BF6UR4L%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDVoQdBMO7b4QKP56E5qx0psxM6zuiqbHa55aL3u2ncuwIhAKYDddWeARaj39l3SvpTcG20c7P6MPbhc2Xo5gcI8tQdKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7rZw0Qhozn%2FkfUwYq3AOMLj4Z1ylCxwi7kzs8zHi69rBrbClBr7%2Fmz%2BZvAUt8vym2O8HIgCbAmLShM39sl0AbbTR%2BdEk0I4hBU%2B8XxaPzofMpPck2dAYneEP%2BX4%2FnAYc1whhtrBXfaDCCZGQiehkjmE1Ld6CF1DYYIo%2Bu7L2r04cjUQp6ptV4HVijrfpAZeOH%2BKvhV%2B7SS1Eb%2FcvnKGu0xRTZkCS7TrcqmI2Oe6g54enn736%2F%2BJceOacMPk24RpgyK99z4EyQT4dGAhSsdpswJmy8QE4fNBjiFYpjhK%2BcIIyIi%2FYpbvoMEuiGEcmhDId1pYmisYF8cHk0ietdlC2wwMcidAe3G6%2B%2FWRs5ga4BoAbcUCgBfFmIzacQEiOsTPs4RbPQBBIpLXCPuX7RWySra5yER5rC0qE%2F9FHk9l7o776h9WhvhLAPcfDZm%2Bb38lvJxU1ihDpA6tEnBhs0KpczZ493HotsBEKr8E6yoa0GTcpa6wSMp7dMYqDPOkMIKcNOY8vPW9VhFS0qYDUkDk%2BmRPfRqG82YjpqFWKz%2FEwayDhNRWZYbf%2Fivy%2FkA94mM60T5KNb9L8A4dbPgXiozR0AeYr634jSQ6QhfTvXl83ABThC0fSOc%2BpCZTifVIDGGAvflk8%2Fw7PH4H%2FGYjDh%2B%2Bm%2FBjqkAU8vDjWEovCxPHZfIyYdOptaDCcpd49KyI0C6a5SnYYIb2D0JZ7PqaWVYQszWweBfyMbBOftEoXXOymkSNHdV4%2F2qiXWbrmzXER1IMjBFinTBnToE8s%2BFqbQlWBl7RRvidzkEvTItdPVkAmLLtjDSguBEopJWX9Q8%2BjOGVgbVC4CxVT8S20dfcyV4cc4bP2AjriaHx37dQRf9nSv8jmifi0G9xhp&X-Amz-Signature=7f206fbe171a1adec79284efbf9f8fbb304af8d672c15fc2741d532680716aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BF6UR4L%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDVoQdBMO7b4QKP56E5qx0psxM6zuiqbHa55aL3u2ncuwIhAKYDddWeARaj39l3SvpTcG20c7P6MPbhc2Xo5gcI8tQdKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7rZw0Qhozn%2FkfUwYq3AOMLj4Z1ylCxwi7kzs8zHi69rBrbClBr7%2Fmz%2BZvAUt8vym2O8HIgCbAmLShM39sl0AbbTR%2BdEk0I4hBU%2B8XxaPzofMpPck2dAYneEP%2BX4%2FnAYc1whhtrBXfaDCCZGQiehkjmE1Ld6CF1DYYIo%2Bu7L2r04cjUQp6ptV4HVijrfpAZeOH%2BKvhV%2B7SS1Eb%2FcvnKGu0xRTZkCS7TrcqmI2Oe6g54enn736%2F%2BJceOacMPk24RpgyK99z4EyQT4dGAhSsdpswJmy8QE4fNBjiFYpjhK%2BcIIyIi%2FYpbvoMEuiGEcmhDId1pYmisYF8cHk0ietdlC2wwMcidAe3G6%2B%2FWRs5ga4BoAbcUCgBfFmIzacQEiOsTPs4RbPQBBIpLXCPuX7RWySra5yER5rC0qE%2F9FHk9l7o776h9WhvhLAPcfDZm%2Bb38lvJxU1ihDpA6tEnBhs0KpczZ493HotsBEKr8E6yoa0GTcpa6wSMp7dMYqDPOkMIKcNOY8vPW9VhFS0qYDUkDk%2BmRPfRqG82YjpqFWKz%2FEwayDhNRWZYbf%2Fivy%2FkA94mM60T5KNb9L8A4dbPgXiozR0AeYr634jSQ6QhfTvXl83ABThC0fSOc%2BpCZTifVIDGGAvflk8%2Fw7PH4H%2FGYjDh%2B%2Bm%2FBjqkAU8vDjWEovCxPHZfIyYdOptaDCcpd49KyI0C6a5SnYYIb2D0JZ7PqaWVYQszWweBfyMbBOftEoXXOymkSNHdV4%2F2qiXWbrmzXER1IMjBFinTBnToE8s%2BFqbQlWBl7RRvidzkEvTItdPVkAmLLtjDSguBEopJWX9Q8%2BjOGVgbVC4CxVT8S20dfcyV4cc4bP2AjriaHx37dQRf9nSv8jmifi0G9xhp&X-Amz-Signature=b01ae9aebc6d94e1b20b656f34a7290424030d292394d1a4f17124c3fd0d20f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655YUN67Z%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAMmB4oQeqTCgjUWAFUASeDVchtY9sqO%2BTCjy7ZKba3IAiEAr%2Fi5XwFw7z%2FrJpwBEV1pMYs7eKpXpqPMH965G6RDD8wqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMU6f%2B8rOyzM38Q8eircA6X7arUELmo7JFTPO3Z%2Bq%2FfUsSHz6y3fqa%2FNtOrinOQE%2BRGYL%2BJsyfIDJTRaLFA9R2w%2FMi0BNCtTVvpLVymQ1LQEMLh5eOXy7v8wjXWGwDF9gT8%2FDbq9O61MHUZI3%2FOgYu02kqhCGSRbLf3rj4xOXlt5VVJCsnHRAf3u8D2SVn0DUOW86V6nIzhbPHPWHlpAaYi85Do9rdIQieor3q1xe3Bs9lSvWvZ9Od36JxlyrEU9BlFGkZmhjawvQTvm7bQaH9OiXmTPNwuTKDMlRX%2B18UVuWu2c%2FyjyP1N4H7RG67VYcNMjpCpxbOLZN5%2BOHC9NmtXb7JPGH0ISZIpiZcLtP17ezEjkeNnFylLZJcNjAKm%2B%2FgJQNx0FC%2BJOtgWn1yDM6davVdjUtSLkvBcj%2F19uOZeAdGGhsKPhv2E7Zyk%2B26hdMuKNWxVVC4peGGvkOayoZkYAGZfY58vAQKhrc2d%2B7kOGnG8fEFBZGAl0KhRwOSvF%2FwjPqwlI5zLL0gbnNrU0tHX2AHQAzPaXG6%2BxLaxWcAz3AczU8SkHdHmdbQoCd7Sx0%2F4P4ZRnyKmwadu3MIJ4VRfp%2FF9MEi1jdHnhACH0a1mjWNVcGS1V45PuXWbL47KOwjNeWqLjP8s75uk9MLL76b8GOqUBQrxImnlr%2BiGK14R1gmXAXa%2Bi7jtoJ24O7sU9UogUhqlSA8yFk0jnY6lsocrPpYUKAYaEYqSWFeqNJtiSuwJOp1LhgaYQkkO1A92Rq6fiWggo9hhdm7FLZR1GTM4aYsQAYuBXwBiIweEoqXYJiXQbmbl%2FlEwMhm3L9Q6GEUZZTGR9Cn6Vts7hBjD0RCNnI9Thg8Ogpu%2Blgb5OrJoCThbK68EE9mDz&X-Amz-Signature=1aed6dcc290f62d9284c320c94b229725a24b53cbfa9f97d09773faf0f69d5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X4T3AOE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCO975W%2B7svxe5vfx9rVkhT7COOyUlLk6p3OWS9BjV%2FKgIgQm5aXx30TUa0Zi5hL%2FcYQhIK7dFeTV0l5I6vbmI4sWAqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzxAWzo5PO6ixRp7SrcA0BmGugAV%2FrUpZrtjKiVKs0%2B1CdFSdm6DEXPlQNWCl%2B9HuPXfcY36SbmaHOpuf2%2F5jgS7xaqfD3EIz6640d8Wi1MuhmIMHlIUBqWdqia4CexhR1THMYUm2T3vk0QXPGU2GfATLLia%2B5JjkYaOQUvGI61seBO%2Fzs8r6Om9IdTFPK1%2B23t3mC42hhWz4JqQdx08RKb1dNi98xMLWkM0De9CCmGlJXDw7sD2EbDBLlJP%2FT2FeSu7YWQRHgRuhVotXdXBLSVdWGYTvc5CL9ibCftK1J7O28l0nL6QVpHlLjx1mBTcaOHVi%2FXQLQjB2kbdQROAy%2B7%2Fx2QOewtS53tDs1MXwu50FZeGHVcFLmlMHtcr0DA%2FPF5FFFngRPtOFaZzO%2FQ7USvbTkwvqltRblsnFsKGW6xLXXg7iQYjDdLWD2pA1UQDGHKwJ3H8So1kyxI545aF5AQNFLxQ%2BCuCtZISYbytTI0X8XQ8vMfcTiYIzg2zMxhms6oRQaUF%2Fp1i5pENk2hqfic%2BoWWSSZ20NHOges5LikkySpEVj%2FEsSzIdsro2H7NCbDb83wkEWS4BX8yaVijIppHtlAsD2uGWYTw2YG1TSXb2MtDWUZ8%2FdwyeGwRTuoK0U4qWGVedYtMSrFOMID76b8GOqUByRxtMEHjIBZ5F24Ejk%2B%2BF74Zq7RxLdmddpFkGBKWeouUfqMlOmFqqWEXlu0sgQczuLZn0dSHUg8fzHrnEK70zGCKRIpF%2FxiiIE%2FRHfPDPBQO%2FuvSjIZ8NrHjJcZFGr1e7okQ4F4i5EG0PPXeQQayj8cTnWvZ8HSKiaXiP9QWjex%2BoTK%2BL4oULcFNd0osTmHcktOPB6emJoujaYDB9tQK6H8EO8zU&X-Amz-Signature=96d198244b91c7e3284a1c1c9f046d67f797a521725ce885f32554c537636515&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BF6UR4L%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDVoQdBMO7b4QKP56E5qx0psxM6zuiqbHa55aL3u2ncuwIhAKYDddWeARaj39l3SvpTcG20c7P6MPbhc2Xo5gcI8tQdKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7rZw0Qhozn%2FkfUwYq3AOMLj4Z1ylCxwi7kzs8zHi69rBrbClBr7%2Fmz%2BZvAUt8vym2O8HIgCbAmLShM39sl0AbbTR%2BdEk0I4hBU%2B8XxaPzofMpPck2dAYneEP%2BX4%2FnAYc1whhtrBXfaDCCZGQiehkjmE1Ld6CF1DYYIo%2Bu7L2r04cjUQp6ptV4HVijrfpAZeOH%2BKvhV%2B7SS1Eb%2FcvnKGu0xRTZkCS7TrcqmI2Oe6g54enn736%2F%2BJceOacMPk24RpgyK99z4EyQT4dGAhSsdpswJmy8QE4fNBjiFYpjhK%2BcIIyIi%2FYpbvoMEuiGEcmhDId1pYmisYF8cHk0ietdlC2wwMcidAe3G6%2B%2FWRs5ga4BoAbcUCgBfFmIzacQEiOsTPs4RbPQBBIpLXCPuX7RWySra5yER5rC0qE%2F9FHk9l7o776h9WhvhLAPcfDZm%2Bb38lvJxU1ihDpA6tEnBhs0KpczZ493HotsBEKr8E6yoa0GTcpa6wSMp7dMYqDPOkMIKcNOY8vPW9VhFS0qYDUkDk%2BmRPfRqG82YjpqFWKz%2FEwayDhNRWZYbf%2Fivy%2FkA94mM60T5KNb9L8A4dbPgXiozR0AeYr634jSQ6QhfTvXl83ABThC0fSOc%2BpCZTifVIDGGAvflk8%2Fw7PH4H%2FGYjDh%2B%2Bm%2FBjqkAU8vDjWEovCxPHZfIyYdOptaDCcpd49KyI0C6a5SnYYIb2D0JZ7PqaWVYQszWweBfyMbBOftEoXXOymkSNHdV4%2F2qiXWbrmzXER1IMjBFinTBnToE8s%2BFqbQlWBl7RRvidzkEvTItdPVkAmLLtjDSguBEopJWX9Q8%2BjOGVgbVC4CxVT8S20dfcyV4cc4bP2AjriaHx37dQRf9nSv8jmifi0G9xhp&X-Amz-Signature=f7aaa5c20e589e8b22033ede9d189a5dd50191d103b7b8fc7f846690e437945b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
