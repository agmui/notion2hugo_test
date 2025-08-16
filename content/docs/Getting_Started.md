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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFWPKEI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBh5kN%2F9dTgnAFnB2w9DrxVRr%2B1N70ktQs0IAbzbz2RBAiEAtUUbt2ixY0TYoEC1WZ28sBr3ZX9FCaPksm7pq9mw0xEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDd%2FWBo1voPn7YaVdCrcAyQlf80DwVDXSB2REvPy8Yi8bFmIvzWQzLS6VIVzj2EGgLupLpQKRf%2B6ctFvdCvGpn2WEzU4StiWGnSzy9CtkNj2%2BiZPZ%2FcTwmEjdaSHvGDsoM5%2B3u5szpl32szAGLzu9GI9WH5kMUjmW52TU9c0sMX2a%2B4f47b2ShsLggauL9YhP1c5XnQEWLJJ5pOBXR5RJiCsAFCi6w2lyCiFimj1v0M04WjEF5lnmc5jEWSJ5tusML2T%2F7hoErUHwcXbmdLie1v4sWmE%2Bi5Fb5sBmKHCY4KKU1wV936sIKNesEpuopH%2FL3L%2BX28Mv7yt3%2F9EVE1C0h4ZN9fa9UXIvraP%2F5WfS1GwNbvPor2x9Gt3QyalbReOpRIoN1CVbVAuhEfUeUqJ7h%2FyeSuB7d4M3HDUBvB7LYLeSOXaZqGKdhCbHavSCryiq0NmLVr1jP%2Fmkrs7jOgXebDwQv4%2Bi9VGxlObL1NkxtR7RQN2N056EfTKDCP7%2F%2BPXgoS%2FyjfLTlLgreu6YSR9JolmaKbzx4MT5d%2FhlUsHfDkMkP9Tpccf%2BT1SZlWmbYN8A0PKZ%2FpyJIA4WoWpZqkdvWBVHJzEobHZnTsRFYAm0hn5zCAaJvvM4fezyDp3gxPrPmzXrC5NB%2B0%2FEUQ0MM2dgsUGOqUBixOtWNVy4o5g7EWkvgaKe84ABeFffV%2FLTICpnrwIBn1046AdmdcWI104gLHeW8Uks1rORkGl5ZaqynW6JEDxEzxIXmrOtrwNobcwvGPfLhcFurkWbVY2hmnp3FBU6ePCgDfAmKHnPSD4OQ9TlBa2gKVPn25EGeq3f2amWdpRTmETjhaQ%2F1RpD8jWsOROurIEuu689%2BtFBmlZbwWfgpf3CBHRmb9B&X-Amz-Signature=69827298790a8ef829d25fcfeb941a08964e4c5a45b0c83ab37f481efdd07b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFWPKEI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBh5kN%2F9dTgnAFnB2w9DrxVRr%2B1N70ktQs0IAbzbz2RBAiEAtUUbt2ixY0TYoEC1WZ28sBr3ZX9FCaPksm7pq9mw0xEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDd%2FWBo1voPn7YaVdCrcAyQlf80DwVDXSB2REvPy8Yi8bFmIvzWQzLS6VIVzj2EGgLupLpQKRf%2B6ctFvdCvGpn2WEzU4StiWGnSzy9CtkNj2%2BiZPZ%2FcTwmEjdaSHvGDsoM5%2B3u5szpl32szAGLzu9GI9WH5kMUjmW52TU9c0sMX2a%2B4f47b2ShsLggauL9YhP1c5XnQEWLJJ5pOBXR5RJiCsAFCi6w2lyCiFimj1v0M04WjEF5lnmc5jEWSJ5tusML2T%2F7hoErUHwcXbmdLie1v4sWmE%2Bi5Fb5sBmKHCY4KKU1wV936sIKNesEpuopH%2FL3L%2BX28Mv7yt3%2F9EVE1C0h4ZN9fa9UXIvraP%2F5WfS1GwNbvPor2x9Gt3QyalbReOpRIoN1CVbVAuhEfUeUqJ7h%2FyeSuB7d4M3HDUBvB7LYLeSOXaZqGKdhCbHavSCryiq0NmLVr1jP%2Fmkrs7jOgXebDwQv4%2Bi9VGxlObL1NkxtR7RQN2N056EfTKDCP7%2F%2BPXgoS%2FyjfLTlLgreu6YSR9JolmaKbzx4MT5d%2FhlUsHfDkMkP9Tpccf%2BT1SZlWmbYN8A0PKZ%2FpyJIA4WoWpZqkdvWBVHJzEobHZnTsRFYAm0hn5zCAaJvvM4fezyDp3gxPrPmzXrC5NB%2B0%2FEUQ0MM2dgsUGOqUBixOtWNVy4o5g7EWkvgaKe84ABeFffV%2FLTICpnrwIBn1046AdmdcWI104gLHeW8Uks1rORkGl5ZaqynW6JEDxEzxIXmrOtrwNobcwvGPfLhcFurkWbVY2hmnp3FBU6ePCgDfAmKHnPSD4OQ9TlBa2gKVPn25EGeq3f2amWdpRTmETjhaQ%2F1RpD8jWsOROurIEuu689%2BtFBmlZbwWfgpf3CBHRmb9B&X-Amz-Signature=fae3ae09d40860141c26e1aebc56c364119bf6aecb7c81cddbb27161423dac56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFWPKEI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBh5kN%2F9dTgnAFnB2w9DrxVRr%2B1N70ktQs0IAbzbz2RBAiEAtUUbt2ixY0TYoEC1WZ28sBr3ZX9FCaPksm7pq9mw0xEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDd%2FWBo1voPn7YaVdCrcAyQlf80DwVDXSB2REvPy8Yi8bFmIvzWQzLS6VIVzj2EGgLupLpQKRf%2B6ctFvdCvGpn2WEzU4StiWGnSzy9CtkNj2%2BiZPZ%2FcTwmEjdaSHvGDsoM5%2B3u5szpl32szAGLzu9GI9WH5kMUjmW52TU9c0sMX2a%2B4f47b2ShsLggauL9YhP1c5XnQEWLJJ5pOBXR5RJiCsAFCi6w2lyCiFimj1v0M04WjEF5lnmc5jEWSJ5tusML2T%2F7hoErUHwcXbmdLie1v4sWmE%2Bi5Fb5sBmKHCY4KKU1wV936sIKNesEpuopH%2FL3L%2BX28Mv7yt3%2F9EVE1C0h4ZN9fa9UXIvraP%2F5WfS1GwNbvPor2x9Gt3QyalbReOpRIoN1CVbVAuhEfUeUqJ7h%2FyeSuB7d4M3HDUBvB7LYLeSOXaZqGKdhCbHavSCryiq0NmLVr1jP%2Fmkrs7jOgXebDwQv4%2Bi9VGxlObL1NkxtR7RQN2N056EfTKDCP7%2F%2BPXgoS%2FyjfLTlLgreu6YSR9JolmaKbzx4MT5d%2FhlUsHfDkMkP9Tpccf%2BT1SZlWmbYN8A0PKZ%2FpyJIA4WoWpZqkdvWBVHJzEobHZnTsRFYAm0hn5zCAaJvvM4fezyDp3gxPrPmzXrC5NB%2B0%2FEUQ0MM2dgsUGOqUBixOtWNVy4o5g7EWkvgaKe84ABeFffV%2FLTICpnrwIBn1046AdmdcWI104gLHeW8Uks1rORkGl5ZaqynW6JEDxEzxIXmrOtrwNobcwvGPfLhcFurkWbVY2hmnp3FBU6ePCgDfAmKHnPSD4OQ9TlBa2gKVPn25EGeq3f2amWdpRTmETjhaQ%2F1RpD8jWsOROurIEuu689%2BtFBmlZbwWfgpf3CBHRmb9B&X-Amz-Signature=1e331c7c1e870ce3dcaf9c8d122dd13663f27f3a33056146193be20c7641d0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q3YGX6N%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDSmW7vsNtLxejTKR66yZ29AOhMvVXIuY9ZqiFUwrzR%2BwIhAIXcNtEeM720Z6cqt3LLbU6CuujT1XISrKc4nIwxlhIuKv8DCHcQABoMNjM3NDIzMTgzODA1IgwFcvXLtcon8hyPHh4q3AMyxC%2BUsW8xCoO3EFs19%2FpweHgsxNFvwl1HIEqhm67EeQN0iS4JCWMGMgiYgJm2TGNOh6GaX6imddB%2FXZyBEHp%2FcwE3kyEUJASSzZ1qBbSk5SzuXcMzVW66IdNuR7nFihyV%2BW9aqXONaxqaPnj8Lf2ABaqDA4j3tYMA84hLo5YhXZf4xkbODSidDRpHFFcv4UAy%2Ba0V7WoUBokeeoB4DIBoc0GQwKU%2B7el2oUDmLVaJabBP6G5Q%2FweEyWZCr4fwcSVKRb4zrwYW%2BxuDnmGovvdlBduN23453XuqoD01YRfCBajs96UqjR%2FA9If3KWns%2B04otVDSrozCbCojwNGUkHAR1%2FU7IU%2BdJ7KLm70I9fyVEvZXbCUOiYQbKEkDoV3gVTOpjR0rkMMr6TRu2VUBmvh2MMJY2d4FrA9VQuTSKzKveD7eUH7rvFNI4nGqTSvf2kPT2cDdKLZZcxQJ2GG%2BiXLNROoRiNv%2BQdT11SWxipfBJwJ7h1WxM1Cn1A3%2BwQSpvvvHPSIzezA6QQxf6f7jR0RI7WxVFaXE%2BA5mXV1UCSARJYIOxYb4r4ZDUtZ4ewXysnGANxe0%2B5qbvyptOPfkms8%2BpAxfs1p6VFKN0ow0Db%2FryK28xXNNr4vb3OCEvDDSnYLFBjqkAdm3HUAh%2B7e2colaZRlmLFuLzJfkll7NIQ9JkuArgWrGwf8ZzLkyoAPUggeVc0r16TWprqXu1U%2FHKjhwKNLc%2BKQTj4jY3vWqmHiIM38oyHuqYHkJepiNtG0OLt8tbTHiUH1ykXtllTMEfBh1i%2Fq%2BNUbcvVG3yppn9HNzwbMuow4jJZChiiLnTONjQB75%2FuT7GdaRSh2Qhqi%2B8T%2Fn80B0fpUPusws&X-Amz-Signature=2dc091e0cdcb54aeea35a30bb7a9440921ec8a1888ad6aceeb6ca76ad1907d61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ7QJV6D%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDxTouysgw4FR393hgeB2g7VTS%2FJLIPAPuu2mXy724PHgIhAMqOyv1%2Bojp3MaV0a7Fbz8g5dt8asM6pMhedPhaxUog5Kv8DCHcQABoMNjM3NDIzMTgzODA1Igyi5nMhoU0N1zLfhZUq3AMmZ0E%2FM14hrxUozCqT38MZ9iN%2BfoaGzLZgyVZBu%2FFPVUexL1yQyyTmvcChj79gqBTCDvVGG4BXAZWyZ%2FiQL%2BF1BSA74omxtquDsV3ZljPZs2tdJ1cKDWcnRZ903Y%2FtWw%2FRqRNjih8K38ql123tR4jNrVXez1xEOQUsL2l0gP4mWV3yxYUeAol3w0PiFgib%2FfNNfH79%2BUGCwGsQi2OKCV4hgfQlhXpsnN0pZ1xEm4tkPmlkXt7olTPc%2F8c%2BVCqGNA%2B63wqg0HidM8yguMwgZogykG%2Bli%2F5tzmsFTykiUhukc81KhSjYFrwbTZrJjfKgOlTkDMGTz2YoOi424DCWI%2BZx4B4chYYMuWqtPzrz4Y7i0Oryj7RcX6vs%2B0u2INEFRD4cicJ1g4DYcWdMByccjpiJmH8GjUTzWBQT4QXpsLAiDP%2FmYDasJFwQxK7unSn4qO1RQye86mv4C4MENVmFC6yuciMReJer3i5HmzV%2F4ZPQdb%2B1DTYIkSCJ66AK7QIM2h8T3e3FIaXxZ%2BkB7KAsqkRJZ5JGpI2NQ7%2FlXWwZtysyuvmVxUPW4OyUHTbDbu8QY9vhpoVAv0Y0dipCCrjM8Bgdlv45CbtHLiX7DmJDEN%2FM2fng%2FlIhmh67h442MjDcmILFBjqkAcqqmdK0HhFMCvAK1rQATJxG7oRTJ0eR7cavYbDWoUU%2B4yyBJm7hb1RRigP6QtVKbrghmUMdYHW8kOost0mfVuz5vWvvgqFAq0LgitjyjhbG41sIrDCN4k8BaY7zo36SFW7g9CjuOZsLPPdRmBNZ0ti4JfIJAX3WRB%2BfYGgXvBsGuCRgF1ToCKNV4QPng5Q11EpIL3Medx7E%2F4b8wqehO75ne0%2Bm&X-Amz-Signature=e5707ee954aab1b4125dd0ebd043b406893c1e0fd1eb950b824be4d327169f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFWPKEI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBh5kN%2F9dTgnAFnB2w9DrxVRr%2B1N70ktQs0IAbzbz2RBAiEAtUUbt2ixY0TYoEC1WZ28sBr3ZX9FCaPksm7pq9mw0xEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDd%2FWBo1voPn7YaVdCrcAyQlf80DwVDXSB2REvPy8Yi8bFmIvzWQzLS6VIVzj2EGgLupLpQKRf%2B6ctFvdCvGpn2WEzU4StiWGnSzy9CtkNj2%2BiZPZ%2FcTwmEjdaSHvGDsoM5%2B3u5szpl32szAGLzu9GI9WH5kMUjmW52TU9c0sMX2a%2B4f47b2ShsLggauL9YhP1c5XnQEWLJJ5pOBXR5RJiCsAFCi6w2lyCiFimj1v0M04WjEF5lnmc5jEWSJ5tusML2T%2F7hoErUHwcXbmdLie1v4sWmE%2Bi5Fb5sBmKHCY4KKU1wV936sIKNesEpuopH%2FL3L%2BX28Mv7yt3%2F9EVE1C0h4ZN9fa9UXIvraP%2F5WfS1GwNbvPor2x9Gt3QyalbReOpRIoN1CVbVAuhEfUeUqJ7h%2FyeSuB7d4M3HDUBvB7LYLeSOXaZqGKdhCbHavSCryiq0NmLVr1jP%2Fmkrs7jOgXebDwQv4%2Bi9VGxlObL1NkxtR7RQN2N056EfTKDCP7%2F%2BPXgoS%2FyjfLTlLgreu6YSR9JolmaKbzx4MT5d%2FhlUsHfDkMkP9Tpccf%2BT1SZlWmbYN8A0PKZ%2FpyJIA4WoWpZqkdvWBVHJzEobHZnTsRFYAm0hn5zCAaJvvM4fezyDp3gxPrPmzXrC5NB%2B0%2FEUQ0MM2dgsUGOqUBixOtWNVy4o5g7EWkvgaKe84ABeFffV%2FLTICpnrwIBn1046AdmdcWI104gLHeW8Uks1rORkGl5ZaqynW6JEDxEzxIXmrOtrwNobcwvGPfLhcFurkWbVY2hmnp3FBU6ePCgDfAmKHnPSD4OQ9TlBa2gKVPn25EGeq3f2amWdpRTmETjhaQ%2F1RpD8jWsOROurIEuu689%2BtFBmlZbwWfgpf3CBHRmb9B&X-Amz-Signature=61585e22e0f0d566cba681ca9edbaf2b7044201895db6c7383607ed47f9767a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
