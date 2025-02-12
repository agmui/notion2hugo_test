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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWYXPHPM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc7zF1WDMsMDVMmDiwS6Px8PRcpgRVC6YLUmvsyK0DeAIhAKc%2Fp3TWumA9JKIDL8ji7wsYvMyNcFaD%2FT77X3sYOpLeKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj5JcqfQ4SrzNGDYsq3AMfuphi0D0mX1lKHKGSr0f3g9JvR16ShVYgB2AQ5td6G%2FVRQTaZlSxplb0KBOTFTpQpK6lW3hzFt5NrDh0SNm1xbZ05VRpjKZNVo2JjKnsNrWDdieX5PT8gHAWw4hOGjTG%2FnUdpqiOWRhIYE5K35t38pK3a%2F8GKGCzTPce4IqpU1rU4qatt1CJ0pV1cmJOtOEO2IjxJ0Go9Gdiy9mVtu%2F%2B3JfWSHsvYtd3Wm7wtz7vdZ0elNBdY68h6XJxN%2FklpXGW6gPjsyv69KFZcaxcqFI7AQftQzCEmybH2D8nX%2BAWLr9c7eITsBMtVx9RkYyal6wFHvqYrp3UErxL%2FmHvCEOUaae0nsuwoG3GckPwPNlgOe4QFdudWB9VKhhxouQmef14tdnJMclHVlJv%2F9qwbQ6ICbhJoPtbp5EPXRCwxzAvhYau17ntSYBpGv9BuzOqLJpROpZ%2FLfdTUnzt%2BCoRpGa24S0%2BiBPUnVZvu7l71B6sA2MqSi4OrwaAykePTuYX0E944LkeZ9xmx5X4atBMjuf6DjajfwhbRkcLt70zwXbtwZgR6qNH52QYktij5eRe42fvQQXmtKtWrrVu%2FcFy8w%2FiMaIb6UsFWUUr6bJq2C9V669aHIZ3bmiH6bMHLfjCdprK9BjqkAfM0WX4P3131TEDL0OedGumpv%2FuNuki9dtN3X5alVKapR2JSUqICtPBJJBkMbCK2FxMWgD9WYzZTJzNkv2kjYlVT%2F1nj3Cjygt4JWqwNWRjkQtbE2blNkn2NM%2FN4Gf9JMTqugbcfoHkBr8qjarwvQiwOVw5guciZnznYm9NSFi%2FBZ9XQZi3Pvd%2B1264GD95WdlhMcR6WBQuBVHG56uQkXSkueTqg&X-Amz-Signature=8ff9018f183a6aa9a30460119f6b9b0c6e13673c115c7f013f2834d26bae6066&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWYXPHPM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc7zF1WDMsMDVMmDiwS6Px8PRcpgRVC6YLUmvsyK0DeAIhAKc%2Fp3TWumA9JKIDL8ji7wsYvMyNcFaD%2FT77X3sYOpLeKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj5JcqfQ4SrzNGDYsq3AMfuphi0D0mX1lKHKGSr0f3g9JvR16ShVYgB2AQ5td6G%2FVRQTaZlSxplb0KBOTFTpQpK6lW3hzFt5NrDh0SNm1xbZ05VRpjKZNVo2JjKnsNrWDdieX5PT8gHAWw4hOGjTG%2FnUdpqiOWRhIYE5K35t38pK3a%2F8GKGCzTPce4IqpU1rU4qatt1CJ0pV1cmJOtOEO2IjxJ0Go9Gdiy9mVtu%2F%2B3JfWSHsvYtd3Wm7wtz7vdZ0elNBdY68h6XJxN%2FklpXGW6gPjsyv69KFZcaxcqFI7AQftQzCEmybH2D8nX%2BAWLr9c7eITsBMtVx9RkYyal6wFHvqYrp3UErxL%2FmHvCEOUaae0nsuwoG3GckPwPNlgOe4QFdudWB9VKhhxouQmef14tdnJMclHVlJv%2F9qwbQ6ICbhJoPtbp5EPXRCwxzAvhYau17ntSYBpGv9BuzOqLJpROpZ%2FLfdTUnzt%2BCoRpGa24S0%2BiBPUnVZvu7l71B6sA2MqSi4OrwaAykePTuYX0E944LkeZ9xmx5X4atBMjuf6DjajfwhbRkcLt70zwXbtwZgR6qNH52QYktij5eRe42fvQQXmtKtWrrVu%2FcFy8w%2FiMaIb6UsFWUUr6bJq2C9V669aHIZ3bmiH6bMHLfjCdprK9BjqkAfM0WX4P3131TEDL0OedGumpv%2FuNuki9dtN3X5alVKapR2JSUqICtPBJJBkMbCK2FxMWgD9WYzZTJzNkv2kjYlVT%2F1nj3Cjygt4JWqwNWRjkQtbE2blNkn2NM%2FN4Gf9JMTqugbcfoHkBr8qjarwvQiwOVw5guciZnznYm9NSFi%2FBZ9XQZi3Pvd%2B1264GD95WdlhMcR6WBQuBVHG56uQkXSkueTqg&X-Amz-Signature=885fbb4676db0bb08409ad7a5deaf0b3495c22105c95c5850b9cd80ed9ce0a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NRJVP3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuMiuifgrIPX3b9XQri65LySDpKN2mqmLeYqdgleqeoAiAQ6yt0sNuLC4PU5VMucvttFFaeUJI1m%2BFPh9vrMdthVyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8HSSfwR9l0CwkEtKtwDqMfagTDrwC5jBKNPEA%2BEYIaFvzo9Boii4VVoNUNIAwuWRZU8seNtwMkloc%2FqJ7E3r5RPUzlYHpHwJDXIeN8JuBrnd%2FjvIYyaoB%2FAFGpHDUTdwztd2uklnjw%2FxNukAj2rZvSpMbgF1MzQVrWP1DRGfo5AID8ZkaBbKpy2Ch6i3FIXhRxtyhaeRLe%2B1pqOBWGGg%2B7Di8RfxPr2o6Gb8GvGohUTv82yZelBIwq8ne7Fa1E9E8jn%2Flx1bnxNaV9FcLniUIq%2FL5AZ1Fy6nXNzXNPCy5%2BgT7sjv4B5Dq0CpgfGJGjxBrBr4JJtgnJWsI8qjmslyMKzSIR47a763i7oMEoLVSCbgi9s2ws2aN3dK4zTZc5t03yY8U06Fdgdi%2Fv77TXVUoC%2FKjs4BpoBWMevi3K7M7iMymnqfLxhM0izwOAfrcRmTMaY%2Ft35TZqws0xvRCMCvjRPAYhXBmxp7L7wJek4BZWOZ1Jt1UHKQwrckfGM%2BCc%2FY%2BQHoOI%2B3HWLIbri%2FBDce4rAEpjYvoTZ50f8AZUmcEeUeRvsak04BFtTo7Z5KXAZFG3MPt21VlLcJWMuWEXMvDNnRyils%2FAztbFeT5501MW78YYocToJB0F7CITdHP3EX0Nljq6SX38lC4kwi6qyvQY6pgEWnkBP7tzLjIRHDAeMb3QtSocQ95%2FYtBMLRJvqZm%2BqtRhB5o%2F7LhyzGQVjKlTQFVX0w4%2FV5MAosVsf0kXDmej7i7UTO6flZW%2BxTQkx5wpUvgAxewGzAbtdrO4%2F6W1mp9tmyIxkNBgvOcl7vJCNA0xZCwZIVl6%2BeiieiT3Gmt32bhLJ6nHS%2FdiJDRUOeoSCKXetj228WBWV%2BzGKA2btZhJ2APOK8cd1&X-Amz-Signature=40720906f47776f2b79aae8b82189796e340d9535c1bce8a26d1b5b0436ac8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZG5MKV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHB7IsNp%2BAV9EWDAUOKiAP1g56zRPq%2Bl0hlgWadiX27MAiAWML769WZAL931YQXuxEecNnlaQa%2B%2BAeGRnzgKQ95L3SqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn1WBxj3PzvSqApuuKtwDD4nyCqVyS%2BvPxBfzTLduakt9Xa4zpNwP3AteFPtnFz7P8Coyq%2FgFc9ktG0jExnele24m4fIVspn%2BcbDcWrsMzq05GIgxh4XwRBLvI1lBayxK5fI5T0m2rUxcU5fuVa0RL0VUAYWXgxHOawEiKT2%2FSS0Fau%2BkeLPU5Gaqmc11vNFwNSpq%2FOA5pgsTU0pZjYBRWUzpuuYJ9vyDVlfnBgN0MPgy%2F50bgERYsy27ckcd7RrlYXC%2F3PchpBQ8R8TAiiq09%2FCQLNGMwHzS6DhLO%2Fy%2FRFQVQJUBMBDP8%2BbwYvEwOUnAI3VPQCHfYTcmOm80satRf7QqXsjlf00Ry3UC0bVG4fKV%2FjaG4JJWbFYrvjxUSOeCDPM8wqj7hM2LdYu74x5rkguJSMFW0JvrjRs%2F7a96U%2FtkY4w7Maj1%2Fp0WowprxCdupMWRM%2BNhw6BtaLmhzbQOTbqaHxR%2FGiWZLjoo%2FEETgwTmOrc5OmYiQOxkSmfxdX7HE49kPx7yqdobn2%2BCfi2Se%2BaynmpEC%2BH6hWKiLjcVTGGJ6E9po%2FJCp5DEx4yEq5vn7BxcIDxDskcZ9pvWbZ1a2lqGNVECuMg3YL9AYYEoitQ8%2BEJTZFc%2FON2%2BydWh3rU8yJZof39QJX%2Ftlw4w4LOyvQY6pgF6fKI3Z%2BwdNmiRs02pLDQnp5xGBYquI4vzczhuQJba3APW4G79rBfzyS2%2BI%2FV1dZmiVCYr7g9V1B4jCybJpLs6li0WEdWevA7GfMat2eRxyjD6U%2Bues61GsZwYBSnvtEQyCNJEmHE714yPaUQUFG%2BGYZLWiT9bIHqRiUy3xf35gOOKp4bcOxr3wvK4voL3bm7KMzh3DuBGV6Jfef%2FN7VoCwnQ8e3bJ&X-Amz-Signature=145f826c9c621842b43257ec6278544c624f484aedab815e8d7d590fc13785ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWYXPHPM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc7zF1WDMsMDVMmDiwS6Px8PRcpgRVC6YLUmvsyK0DeAIhAKc%2Fp3TWumA9JKIDL8ji7wsYvMyNcFaD%2FT77X3sYOpLeKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj5JcqfQ4SrzNGDYsq3AMfuphi0D0mX1lKHKGSr0f3g9JvR16ShVYgB2AQ5td6G%2FVRQTaZlSxplb0KBOTFTpQpK6lW3hzFt5NrDh0SNm1xbZ05VRpjKZNVo2JjKnsNrWDdieX5PT8gHAWw4hOGjTG%2FnUdpqiOWRhIYE5K35t38pK3a%2F8GKGCzTPce4IqpU1rU4qatt1CJ0pV1cmJOtOEO2IjxJ0Go9Gdiy9mVtu%2F%2B3JfWSHsvYtd3Wm7wtz7vdZ0elNBdY68h6XJxN%2FklpXGW6gPjsyv69KFZcaxcqFI7AQftQzCEmybH2D8nX%2BAWLr9c7eITsBMtVx9RkYyal6wFHvqYrp3UErxL%2FmHvCEOUaae0nsuwoG3GckPwPNlgOe4QFdudWB9VKhhxouQmef14tdnJMclHVlJv%2F9qwbQ6ICbhJoPtbp5EPXRCwxzAvhYau17ntSYBpGv9BuzOqLJpROpZ%2FLfdTUnzt%2BCoRpGa24S0%2BiBPUnVZvu7l71B6sA2MqSi4OrwaAykePTuYX0E944LkeZ9xmx5X4atBMjuf6DjajfwhbRkcLt70zwXbtwZgR6qNH52QYktij5eRe42fvQQXmtKtWrrVu%2FcFy8w%2FiMaIb6UsFWUUr6bJq2C9V669aHIZ3bmiH6bMHLfjCdprK9BjqkAfM0WX4P3131TEDL0OedGumpv%2FuNuki9dtN3X5alVKapR2JSUqICtPBJJBkMbCK2FxMWgD9WYzZTJzNkv2kjYlVT%2F1nj3Cjygt4JWqwNWRjkQtbE2blNkn2NM%2FN4Gf9JMTqugbcfoHkBr8qjarwvQiwOVw5guciZnznYm9NSFi%2FBZ9XQZi3Pvd%2B1264GD95WdlhMcR6WBQuBVHG56uQkXSkueTqg&X-Amz-Signature=803b7b44d2d54340c305afe9d46410c11ce6af894ebdb113428d7deba3fe0c05&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
