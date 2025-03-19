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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVX3OZR%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFIVhfgGl6nc8x2qVlCk9G4qNJ%2FbAcbNr2YNGCw7524YAiEAolFFxgJrpbRcavZd3UH5CJZuZvbsubJRsX2yeOKAIXcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAjlhXyWmc6b9zemkircA9ZATg%2BacOMb3EXJRLxZC5BjebfcIateMjzVMS2Afh0cFWDapP4TNEJTooS%2BLTAlcunaLWLvtkMiIkGJNQBUz%2FZK5VuWalrDutk%2F8J5cDnkM0XsgxoZx1XkJSo2VrPWqig6SMCbDIJSKUyG%2BGA5Fh7PNHG71yhUKl6qLd93FxL43D0Qr7I0Q5%2FI2kxF5Gy1lhy0CS9NckSrac3dy9TDiFN3o2QtuLKgFNPhWkYEbS3l7SK%2FT5M%2BLXq6auBb361XodwY0hiqDBHUO2gmTWx1pcqFG6wu7zGXyqqFwefJaVrVCTd1qoMzX8np%2B0%2BcTDAjI3rmtVV5obuXOzqd9iXjVEpndf5P%2FPV2RbYMQKDnAlxi6POLVmtinesG7wjRFdU%2BHNHGLPxCQWJHY9GgarcjhS%2FcgQz7Ua9fZvTD8keBAaC7rRriJ%2Bq%2F3gZux2RqpNvnOQnALNVOTVDa5N6VtBydupKJluDCRsEdvIcPx1jDLQSkk9d02Q7A6EnDILpHwnaNEYxoGhkPXtZ7xTnJ5W%2Bn7RQAoQpD2Vh%2F565yz91%2BxWnxpgwL%2BdydX75H0mm1o06d%2BAwo7K16fYB07xIHuhLvv%2BatO8CxMSELjfqc6YlcPzivTErgHircCvg%2B5nLZwMNXe6L4GOqUBsJChv9qfHy9PfEpbJ5cXqrB1e2QhNpR%2B4Afc0lifQBDJk8xq8w5p6Qx1hQxHs3AifOiW9sPtfvOmhs%2Bs%2FGBOTz%2FNu6tW6aGIkd2aWf%2FJ9IOpWo3L1uO6aTBiL%2B1so%2BTNlQ99f9NaRswR%2FFSp%2BLZZFwrUEtVzyFNBljsOg6UOIeD5St06ZCEsno%2F0knvAGlIMV594EmOkBCVu6S0TIGXIeBSe%2BS%2Be&X-Amz-Signature=f07ec355c85c2af1af5e00f1d26659041904617267737c1c52cc1f01d3cc8b23&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVX3OZR%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFIVhfgGl6nc8x2qVlCk9G4qNJ%2FbAcbNr2YNGCw7524YAiEAolFFxgJrpbRcavZd3UH5CJZuZvbsubJRsX2yeOKAIXcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAjlhXyWmc6b9zemkircA9ZATg%2BacOMb3EXJRLxZC5BjebfcIateMjzVMS2Afh0cFWDapP4TNEJTooS%2BLTAlcunaLWLvtkMiIkGJNQBUz%2FZK5VuWalrDutk%2F8J5cDnkM0XsgxoZx1XkJSo2VrPWqig6SMCbDIJSKUyG%2BGA5Fh7PNHG71yhUKl6qLd93FxL43D0Qr7I0Q5%2FI2kxF5Gy1lhy0CS9NckSrac3dy9TDiFN3o2QtuLKgFNPhWkYEbS3l7SK%2FT5M%2BLXq6auBb361XodwY0hiqDBHUO2gmTWx1pcqFG6wu7zGXyqqFwefJaVrVCTd1qoMzX8np%2B0%2BcTDAjI3rmtVV5obuXOzqd9iXjVEpndf5P%2FPV2RbYMQKDnAlxi6POLVmtinesG7wjRFdU%2BHNHGLPxCQWJHY9GgarcjhS%2FcgQz7Ua9fZvTD8keBAaC7rRriJ%2Bq%2F3gZux2RqpNvnOQnALNVOTVDa5N6VtBydupKJluDCRsEdvIcPx1jDLQSkk9d02Q7A6EnDILpHwnaNEYxoGhkPXtZ7xTnJ5W%2Bn7RQAoQpD2Vh%2F565yz91%2BxWnxpgwL%2BdydX75H0mm1o06d%2BAwo7K16fYB07xIHuhLvv%2BatO8CxMSELjfqc6YlcPzivTErgHircCvg%2B5nLZwMNXe6L4GOqUBsJChv9qfHy9PfEpbJ5cXqrB1e2QhNpR%2B4Afc0lifQBDJk8xq8w5p6Qx1hQxHs3AifOiW9sPtfvOmhs%2Bs%2FGBOTz%2FNu6tW6aGIkd2aWf%2FJ9IOpWo3L1uO6aTBiL%2B1so%2BTNlQ99f9NaRswR%2FFSp%2BLZZFwrUEtVzyFNBljsOg6UOIeD5St06ZCEsno%2F0knvAGlIMV594EmOkBCVu6S0TIGXIeBSe%2BS%2Be&X-Amz-Signature=0d4fff74b15518e364145f57b01d2dc65bfc3b9df0caf7bed35c2048fb62ace0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAH3KKNL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD6pTUY%2FQd8RL9Jei3oARx6V7gZKOoCiIVZSl6TywoiFgIhAK7r0b7omJZR3Lla3Pcn2yYWPbIJPfFtST20hTad1vTfKv8DCGwQABoMNjM3NDIzMTgzODA1Igxd8CbD6hqQ7IdcubIq3AMK%2B23qi5zrQORrUwtfKB8fTaJdn0BnF0a0LGg6PMedK8sAsaZoYAbgD%2BOK2z5kCGrp8gfrNOkB6X2tj%2BFwYpEZfpe39nwWtxAKv3J8Gv1SCH%2FdF19jdCPf%2FYm8p%2BfLjC7%2BipbySVCu9O5R%2Fee%2B25VxOW02ppzZl%2Bj8rrnavzTNJazD5BIoBPMcmDxqLZ21576tdHZp%2FCnETbVfQBY93SviZaG0Eo%2BaNqXH0avRKR9AE66LrO%2F2UWPu%2FND2LEjbIGcvy%2BnR7s0Qy%2Fx1PM3wOKalzFsLBRnMlnvbuJsVZIBWiI9g0gL8lOwgeLSpZKVkn60JBrUv5frkcWP3Khp7ely5pEzzTU92IK4l5VjjOXIKhvPD9ddmryildChGhLzesijvramApUXlEjC%2FmHleEVAELJU9ZBeosmAjKPYkZi%2FgP%2BKvbsKjqEtQIOr8bNABpSNxvmex1JvlmNM9eFwHQt5QY3M9ENsCau1%2FPUMZQYAX9i8Y4BxbvKCgh%2B8bjIwjyaQRYid4dl8W%2BrAPkx3qk06L%2FmrZB1KME6d5O3kX%2FLK3xVDYuw3a78z3YB57IpQ7P%2B789%2ByJhIg0J9u1xo%2BZwRtB27ZAIXxlnEyZ5XY5tP8DubI%2BZURvNVneXClhJjCN3ui%2BBjqkAbuaSTBhS6WYPC3GUL4kyY6JShFzlpy1VSjG7U2BRFJ%2F2FrdGwBQT2gshlcvafKAhpLrFWALiKN7JeK9EDcdY5pV0h1uY4zSp7b0h%2BswjeUnyAnmrO0Rt%2Bt6n42jacZgavnqFtAzJoQsUKzb4XXD4OLs1QxwOakge4LhPgZRToCjUXlpaA9w%2B4QOqMVsvOzCKJSC1VeHuQ%2FQC0KHRR8amVx9qQ3E&X-Amz-Signature=7322bd4d8159255af7809f42ae08f6d9fb90796b9cfdd7f26d4bdd606eeada56&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZICMUFB5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAW6V6cugqNdBdUGLwaCpPBJUv%2Bt4Y%2B%2Bfi1FxwpEAG6wAiEAwYuGLOJlcbWW9O8ZODaM6Xc0Ln55CeIatn98Gvy%2FX2Eq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOyFFa5dvPByA1tCaircA5Bkive45UG3ILe%2Ft38MTpIIwZ%2Fn4QBDiAmRqR0EHvUkpulCkFOxcvVBF7kp0gFYFGIYGz0mkS4f7n4NOsUSvrpm8r2G17CEu2ZCOTODMRh92fgAUSEWOSIs58CT2mD6A2v7%2FeKYWmoVJOWu4IMvKcJihnZIXarqs1tHw1X6ORlrbdVO2axkFr4R9Wdm9SfPFeODNnVEf6HvvqjXdK6plI7u1Zoxn4uVq0mrj0NQBhX%2BHTLEWWPSF3AehRfcAwL14l8gYO5uXSINckLmYSNu5O9a6hExoP2ZHka1qKLlv31nfoJ1uF3%2BXejTTs1C5uWQ4dHhwF%2F4Nk%2B9%2BqZ2jh8igVcg7mgqPEU%2B2f7XiofsJXUIm2H1MkjpFhYs4DGiM3lLfGi3uP5Pc7WF%2F6xDfjdO5md4tSKvGWzCOHqvIa7vE1T3R5jBETTayOdV8b3t1jRxu20grT7An5xatQLTgVoZko7m1jQN3RLbUISci21X6RhHZcoGIboMDy1Fka93PuUVDXT3ekWOtLogRZhfoOsyyq04He0HVtz9lsABNEbyFb1Zk%2FKhF0AUbhUUrNhJMfOQ5RiPLJSwepnNLHPWrz%2BFOCQnP1wFMWGYZTEKih5rOMCtcfO00bnne5CGeW1SMLzd6L4GOqUBy1dD0gswf9p1h6lyIu2IKqUR94XXz8sVkv27yJAcx46kaEppjunhH08QTq9ctrzUTt5a%2BuUORVAQOpeXm0eFJxwJZupdkpJmlb%2B9DAZeHXfxh2MfNBUeBQ3d5eMdom7kd%2BKhiFqMPc4M9mbLR3YvvGNEcrTBD%2FMtr8HMJWcq1lEzdAaZQYOT2bbW%2BcTF5S5cQI6TuH2tH92tngfiacHnCLlnL72y&X-Amz-Signature=c3a1586348a7e7df50b80e10af8b5ebbd80416807868bee26ea785ae3a02e3e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZVX3OZR%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFIVhfgGl6nc8x2qVlCk9G4qNJ%2FbAcbNr2YNGCw7524YAiEAolFFxgJrpbRcavZd3UH5CJZuZvbsubJRsX2yeOKAIXcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAjlhXyWmc6b9zemkircA9ZATg%2BacOMb3EXJRLxZC5BjebfcIateMjzVMS2Afh0cFWDapP4TNEJTooS%2BLTAlcunaLWLvtkMiIkGJNQBUz%2FZK5VuWalrDutk%2F8J5cDnkM0XsgxoZx1XkJSo2VrPWqig6SMCbDIJSKUyG%2BGA5Fh7PNHG71yhUKl6qLd93FxL43D0Qr7I0Q5%2FI2kxF5Gy1lhy0CS9NckSrac3dy9TDiFN3o2QtuLKgFNPhWkYEbS3l7SK%2FT5M%2BLXq6auBb361XodwY0hiqDBHUO2gmTWx1pcqFG6wu7zGXyqqFwefJaVrVCTd1qoMzX8np%2B0%2BcTDAjI3rmtVV5obuXOzqd9iXjVEpndf5P%2FPV2RbYMQKDnAlxi6POLVmtinesG7wjRFdU%2BHNHGLPxCQWJHY9GgarcjhS%2FcgQz7Ua9fZvTD8keBAaC7rRriJ%2Bq%2F3gZux2RqpNvnOQnALNVOTVDa5N6VtBydupKJluDCRsEdvIcPx1jDLQSkk9d02Q7A6EnDILpHwnaNEYxoGhkPXtZ7xTnJ5W%2Bn7RQAoQpD2Vh%2F565yz91%2BxWnxpgwL%2BdydX75H0mm1o06d%2BAwo7K16fYB07xIHuhLvv%2BatO8CxMSELjfqc6YlcPzivTErgHircCvg%2B5nLZwMNXe6L4GOqUBsJChv9qfHy9PfEpbJ5cXqrB1e2QhNpR%2B4Afc0lifQBDJk8xq8w5p6Qx1hQxHs3AifOiW9sPtfvOmhs%2Bs%2FGBOTz%2FNu6tW6aGIkd2aWf%2FJ9IOpWo3L1uO6aTBiL%2B1so%2BTNlQ99f9NaRswR%2FFSp%2BLZZFwrUEtVzyFNBljsOg6UOIeD5St06ZCEsno%2F0knvAGlIMV594EmOkBCVu6S0TIGXIeBSe%2BS%2Be&X-Amz-Signature=9d809eb17578cd28e97dff589daeb8883eb5d94e8286b68e6c1fbe67c496739d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
