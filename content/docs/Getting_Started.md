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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674Q5BJMX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCToffM2loFK3mpUJbUDjk%2B520Hjmx%2FHJJ1WnAaS7w1RgIhAOBqm1QvmqvhWMCHDTmmy8QgBumDU7fyjjdpxx%2F8upwTKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8Gv%2FaUQbxbpYe0k8q3AOxyLvejI%2B22PmPbGGzh107lEiIlk52lnDPL3Ru%2Bp1eCbjN84YHR9fSXxc%2FB4JxOfxUoSpkdxCDGIZTBTtEsuF1etCgi5gcrYbA0RzkblIBOo5qYLp%2B26BEKOCGntFZn5Xn6GuhMKVXAsxMUuGUy%2FY3BZzoFXb89wtP1wp3fLTVAc%2FvSAAEsedT8clj3T0E1NCGDfR5A8DCGfqQ8W6pORWk%2FX38abqaGwdQHLyI5AJoX7xL%2FczLETPBABFrP1ybhoBCStsbMtZx1HX5scw6Bu3zD1DBswBN74leOu%2FrqJB%2F8Q4ruw%2Fta2OC4kSr4YDOcRn9Qx4fp65QOxrxtrBgR1GQLrJf3GA5WwmDi8jsOONsvDr%2B0vJobboli0WU4Dt8uuH3HkKG1XPV8Nwo6i5arer8lxujk1Ataa6pdhbMatZrawKzkCszkmWBaUTe7Z%2BmmACeQQJosg8r5SNqPZiITywhniG1sqhH4%2F%2BJh0XRv7iSAYCaB5E7SalWws2e7cJfl9XCUOA8%2FrYs8nl48Oypm1rtapheR4X70w6FhmAy7GUhqqBTVCzUNPm%2Bmu4v%2BHC84%2BhWPkU60j%2BD4f2SpASoSdH42tSWr%2BmQGYM4t217GbOMMnhWCl5cZBSZOiTVezDt9trEBjqkAQ6R4UcqtxUYS8h%2BjdzrJ9ZgmQj8BBZztONxPPhWq2p36KkwMr6PWIirPyOg3XNYzZmDyODVI7tM8rZBqQ9R0Bw7ChgOsBWwSwGU7DmuG6LjVjyE0mfgmMQ7YpRY1yUHh9c7UCS%2B1NQi1KdY%2BJnRJ2z5jNpmN4ogt5K39bUo913oeOngp3DvHUEYbcOTp1ozaDSMC2NEb9eVAPiWmPUAXmy2SErc&X-Amz-Signature=838088c8785f8a088a0b3a75d628ebdbefe051fe57eb11773c60e739f65f957e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674Q5BJMX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCToffM2loFK3mpUJbUDjk%2B520Hjmx%2FHJJ1WnAaS7w1RgIhAOBqm1QvmqvhWMCHDTmmy8QgBumDU7fyjjdpxx%2F8upwTKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8Gv%2FaUQbxbpYe0k8q3AOxyLvejI%2B22PmPbGGzh107lEiIlk52lnDPL3Ru%2Bp1eCbjN84YHR9fSXxc%2FB4JxOfxUoSpkdxCDGIZTBTtEsuF1etCgi5gcrYbA0RzkblIBOo5qYLp%2B26BEKOCGntFZn5Xn6GuhMKVXAsxMUuGUy%2FY3BZzoFXb89wtP1wp3fLTVAc%2FvSAAEsedT8clj3T0E1NCGDfR5A8DCGfqQ8W6pORWk%2FX38abqaGwdQHLyI5AJoX7xL%2FczLETPBABFrP1ybhoBCStsbMtZx1HX5scw6Bu3zD1DBswBN74leOu%2FrqJB%2F8Q4ruw%2Fta2OC4kSr4YDOcRn9Qx4fp65QOxrxtrBgR1GQLrJf3GA5WwmDi8jsOONsvDr%2B0vJobboli0WU4Dt8uuH3HkKG1XPV8Nwo6i5arer8lxujk1Ataa6pdhbMatZrawKzkCszkmWBaUTe7Z%2BmmACeQQJosg8r5SNqPZiITywhniG1sqhH4%2F%2BJh0XRv7iSAYCaB5E7SalWws2e7cJfl9XCUOA8%2FrYs8nl48Oypm1rtapheR4X70w6FhmAy7GUhqqBTVCzUNPm%2Bmu4v%2BHC84%2BhWPkU60j%2BD4f2SpASoSdH42tSWr%2BmQGYM4t217GbOMMnhWCl5cZBSZOiTVezDt9trEBjqkAQ6R4UcqtxUYS8h%2BjdzrJ9ZgmQj8BBZztONxPPhWq2p36KkwMr6PWIirPyOg3XNYzZmDyODVI7tM8rZBqQ9R0Bw7ChgOsBWwSwGU7DmuG6LjVjyE0mfgmMQ7YpRY1yUHh9c7UCS%2B1NQi1KdY%2BJnRJ2z5jNpmN4ogt5K39bUo913oeOngp3DvHUEYbcOTp1ozaDSMC2NEb9eVAPiWmPUAXmy2SErc&X-Amz-Signature=83206c9ea39be1b7d88725ef3a66dca59745bb8cd60c9dc48dbf01ad0e6ad6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674Q5BJMX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCToffM2loFK3mpUJbUDjk%2B520Hjmx%2FHJJ1WnAaS7w1RgIhAOBqm1QvmqvhWMCHDTmmy8QgBumDU7fyjjdpxx%2F8upwTKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8Gv%2FaUQbxbpYe0k8q3AOxyLvejI%2B22PmPbGGzh107lEiIlk52lnDPL3Ru%2Bp1eCbjN84YHR9fSXxc%2FB4JxOfxUoSpkdxCDGIZTBTtEsuF1etCgi5gcrYbA0RzkblIBOo5qYLp%2B26BEKOCGntFZn5Xn6GuhMKVXAsxMUuGUy%2FY3BZzoFXb89wtP1wp3fLTVAc%2FvSAAEsedT8clj3T0E1NCGDfR5A8DCGfqQ8W6pORWk%2FX38abqaGwdQHLyI5AJoX7xL%2FczLETPBABFrP1ybhoBCStsbMtZx1HX5scw6Bu3zD1DBswBN74leOu%2FrqJB%2F8Q4ruw%2Fta2OC4kSr4YDOcRn9Qx4fp65QOxrxtrBgR1GQLrJf3GA5WwmDi8jsOONsvDr%2B0vJobboli0WU4Dt8uuH3HkKG1XPV8Nwo6i5arer8lxujk1Ataa6pdhbMatZrawKzkCszkmWBaUTe7Z%2BmmACeQQJosg8r5SNqPZiITywhniG1sqhH4%2F%2BJh0XRv7iSAYCaB5E7SalWws2e7cJfl9XCUOA8%2FrYs8nl48Oypm1rtapheR4X70w6FhmAy7GUhqqBTVCzUNPm%2Bmu4v%2BHC84%2BhWPkU60j%2BD4f2SpASoSdH42tSWr%2BmQGYM4t217GbOMMnhWCl5cZBSZOiTVezDt9trEBjqkAQ6R4UcqtxUYS8h%2BjdzrJ9ZgmQj8BBZztONxPPhWq2p36KkwMr6PWIirPyOg3XNYzZmDyODVI7tM8rZBqQ9R0Bw7ChgOsBWwSwGU7DmuG6LjVjyE0mfgmMQ7YpRY1yUHh9c7UCS%2B1NQi1KdY%2BJnRJ2z5jNpmN4ogt5K39bUo913oeOngp3DvHUEYbcOTp1ozaDSMC2NEb9eVAPiWmPUAXmy2SErc&X-Amz-Signature=d70805f50aa44f5d9069322610e4494365c97ef3324c5294e8c5eb98f1ff77b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7FFHIX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIArWjbE0Y%2F7WM57ZQplyGeRmgZu6xD1S2e%2FL4irtFQ7CAiBKBojm7CZay1We6RqVefPnRSU3meylR8bwwYDASsngkyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvuFDZsStMHwsh8sKtwDIL3gquYfZYq8J1NIW7YZfz0SiUcQWS%2FEM%2FgqQ8KiPbniHVZN5OgwjoWoey8rpkzZDZmUL7WyM5bmT3op3sxtf%2FHaK0hL6eGQfXrJd5VLKh8I42FNVY0OhlBuaN95ZnhtHDF1q%2Bf2AAwlhc3krUkOTjo5KZs6ZjAfjUsTyeGqmTQfbVCUGOGBYZCqW%2BYgw3CPKph4LhwosfCOMRDZy2CHLZx3vEAF83yPe7cJLojcEkZBb2g6nan5ymQO2wOV5zosSB1lp9lxwltYgH53YNjMFB%2F1vtOowrZ0RTr8CwardrrXizA%2F9fvYghl37yIHnb3udlZK3LpXq1%2FfapVg1zaTKYwh5ETKenWVSXTpOhnsM83xV6wxiul9YhbG4sCZ1xxYHWg2XNkyYQrMDXBiyjwBkVHW21R6qp7aU4d6Q6yI5PV2xF13lKeFgb9crE5h85VlbZrHAfZ8PSMwvS24v9M1r7VosF6tnSCzZk08Bx6My19ryvJ01p0UPQX1YssO43wx8KdG%2F%2BOykxh7sK6ib55yxchk7gDA9CI0HVrBYaMmkmCMu7oAf9uy8IFWAMFdkAmF7moszDgjr5ogwx6N5JAWDbBjLGg8qfdRj2gqaJWwY17EyQzsJxQ5Kv2GTI0wgfbaxAY6pgEYlmpDwzj51FPzED0P7XJyWncd41Ev%2FScPnwtwpDfgFVdE2rRlOE5RhNFzz%2FBmuVu1RXdf%2BnVuzUb%2Bb9FMTRNBNL%2FbpI0U1LQiaijLUBWg11zgMIQq07f6UkHHb8lxlV2oPrAb3lHjafzbOReAkkPd6HokMThSVPSvf0HxXko2zFVP9nRUsm6EDls%2FahUCsVyjdwXIVypncpFDgTxV2igoEy8O6XHf&X-Amz-Signature=21bf285e8ee170070aca213ad603319d17a23402c61951e6b81a70bcce5ee044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G56CXTE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBMFiqgNUoZCVIi3jGcHGst8BsBVzX0J1SZ%2F2toEYLgIAiB4t9ZgzuQkMgCYxhN9Rx0Ey7Ag4%2BozGYMF2pBLqkByoiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC5XhOrkupJs8lDjDKtwDWykMONdn4uueht%2BpKO2U8mK2NF1ArhG7JjBFQoJ1NL7n%2F5GHNQvDeQUQO2fyMo99dXkgXnEC1FiSB97qtGfKu67PbQW7c%2F3rpoTg9megeO3QVQzQjyc7qDGEXcc8ojxx%2B2xaTegleBm9iyv2KX7753hj9xEGvr%2FgrvtOi7k1nc5DNN10ahdmyOb3iEs7ntPDsb5%2BO9lK8RAF2%2B0NarP2T%2Fv%2BEf6Qg0e8KtthRbcd4PBtpqjlCkkLPqljS%2BQzAR74NsVDPZf9vavmfwUpre1D2%2B56wkhDRe3XxtHD1Gel%2B47UuveX2IBFixF2NI6iyiThgk4VyiNxraEprKTY2ec0mLuwjwVV%2Bk4BEC5nhJoX8OfampD%2F1bae8acjzkQw8nd3ss2mmM%2BKYq3a0ML7wksCAkiefT%2BDls4DjN3xNrupakg0vs1YYhAscvf22i%2Bay5WA70kKlp4SaP1%2FE3ite2pN2QUv1uCiHjn1JgjcEm5EGkR30hYIp8L5DsH5msnIhP7HUGhITB%2F%2F2exwtEO7urfEYHF1VH2jLnIfGDAzvm%2FkD%2B8pFrzZlkLTwPVeB6Q3GdJra0uBMM%2BJfj%2BqJx68LG8BCOE7mCsMa%2Bkch8HnjN%2FG4aRTCLXbBfygfSndwz8wyvbaxAY6pgGskjfTmT5MzF4SqHSFRTvGqxRG4nswmyHs4%2BeKdit%2FzalC%2F5RGQGTZMPJKzOuPfAmtKEk1g80yAAWUbBoWYV1BRaPrtu%2B91goM8TznKB8Z%2F0tb1LsK6Ku4U4h0mYfoDu%2Bp05NJO4TYA5V%2BlupbWN4YS0hgGRLLtLAXN4A%2Fbb%2F7WUMxmXpbLrL8yV5gA%2F022QgbibPjzVon5U%2FHK5kg9pwG6tbBp%2FAZ&X-Amz-Signature=f72dee5ba3cd632541b4420c364f6126d2c2a26eac83e295787e3aa970dcf5ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674Q5BJMX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCToffM2loFK3mpUJbUDjk%2B520Hjmx%2FHJJ1WnAaS7w1RgIhAOBqm1QvmqvhWMCHDTmmy8QgBumDU7fyjjdpxx%2F8upwTKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8Gv%2FaUQbxbpYe0k8q3AOxyLvejI%2B22PmPbGGzh107lEiIlk52lnDPL3Ru%2Bp1eCbjN84YHR9fSXxc%2FB4JxOfxUoSpkdxCDGIZTBTtEsuF1etCgi5gcrYbA0RzkblIBOo5qYLp%2B26BEKOCGntFZn5Xn6GuhMKVXAsxMUuGUy%2FY3BZzoFXb89wtP1wp3fLTVAc%2FvSAAEsedT8clj3T0E1NCGDfR5A8DCGfqQ8W6pORWk%2FX38abqaGwdQHLyI5AJoX7xL%2FczLETPBABFrP1ybhoBCStsbMtZx1HX5scw6Bu3zD1DBswBN74leOu%2FrqJB%2F8Q4ruw%2Fta2OC4kSr4YDOcRn9Qx4fp65QOxrxtrBgR1GQLrJf3GA5WwmDi8jsOONsvDr%2B0vJobboli0WU4Dt8uuH3HkKG1XPV8Nwo6i5arer8lxujk1Ataa6pdhbMatZrawKzkCszkmWBaUTe7Z%2BmmACeQQJosg8r5SNqPZiITywhniG1sqhH4%2F%2BJh0XRv7iSAYCaB5E7SalWws2e7cJfl9XCUOA8%2FrYs8nl48Oypm1rtapheR4X70w6FhmAy7GUhqqBTVCzUNPm%2Bmu4v%2BHC84%2BhWPkU60j%2BD4f2SpASoSdH42tSWr%2BmQGYM4t217GbOMMnhWCl5cZBSZOiTVezDt9trEBjqkAQ6R4UcqtxUYS8h%2BjdzrJ9ZgmQj8BBZztONxPPhWq2p36KkwMr6PWIirPyOg3XNYzZmDyODVI7tM8rZBqQ9R0Bw7ChgOsBWwSwGU7DmuG6LjVjyE0mfgmMQ7YpRY1yUHh9c7UCS%2B1NQi1KdY%2BJnRJ2z5jNpmN4ogt5K39bUo913oeOngp3DvHUEYbcOTp1ozaDSMC2NEb9eVAPiWmPUAXmy2SErc&X-Amz-Signature=81a750282d0ea47b112a5436ddeff443c4245b24c6d75ad165f65d2841df43aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
