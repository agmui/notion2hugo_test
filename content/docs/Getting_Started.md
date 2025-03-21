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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRVOIDJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDSAn%2BYx3f53kT41oQkjgiqYWVAysUhLoAEPBReeRY48AiEAmhiBlh%2BWzYFpFpsHc51%2BzG4L%2FFSgOiRDmHADHAbBUH0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQTScc0fJC7KaQLTSrcAxsKgDnXIo5NdF1tMNk5rTgf4BYM4%2B1jwmnnHGGoqtxngHSKjeKGgUnmWtIp3JRLdhqQc1w%2BvXysU%2FxuH3mYhDJENPpsT9QqxhlFYVGPHTNbJhJdUNNcX5n4pP58bff5ARnyfBex0Af2jPXWnSjlBFFkCHEw2uT5X8ETncL9p4pRgP1HePRIiknznA8KVx2XJIYWuSqSJIStxhYLyPlra56bAH4lylTI9P8OJN5vto%2Bkq8xvNm1zV4Ll2zmyS0e%2BAEZe%2BxsPWU%2FDFyKrd541eir2uEd2E4ODdfD20VoRv56IEAxzTdvabcSbh8v0GkCrW6pwQDEMdvyGN%2BCK7p0HWXPnKZ87I%2BCOoBmHbRQfqnSEHnzdkVlvqaYQNnMwkOGXSMg%2BLEmBPW%2FNLc6WyItI%2Fyjysu2EJdNkVRTA6Un1ByXxd4lc4qiQEPkc4mur3HMrIRHddC7jJJFGyiqoU1NzJnba%2Bcj9zNDjNwVgGqa0UXCbXixUxj2%2BO40%2F4VCelPUZt9SrcbMlb05BTgkBVqO03ufYpOAmgJIMzLVNMCQ3Zottgkwp8Axf8nzhchBXq2eZh363XfghWiqKgpwC27ehRc8VWM%2FE1Yv9zqKpq4LmmonaTm8A9zp9Z%2BcyNeEoMJjZ9L4GOqUBNaArOPOfjWQvkHt%2BWL5HjjwI3EC9LuQvMcYpi4WVbfXrKlWHoXIW0I%2FXfsuTFm%2FtFthKlAohhY2z8S%2BLiqJpbkf%2FDYdE5fTdOzR4qTeoU5szpOJ3S6BcG2ngJTttogDgEJCZMoT6bhNcKJwpEbiyLW%2BUunf3WqcY2Oz5uc6fVSmehLRxVaSSGtAQ6gFjARNUXPWn%2FTsgzLjuNwhUqxNbU%2BHKyH7W&X-Amz-Signature=30c78b3b47a6f4fe290b1efb7bc1870c5b429a014bd032e022e6aa7da6ce3553&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRVOIDJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDSAn%2BYx3f53kT41oQkjgiqYWVAysUhLoAEPBReeRY48AiEAmhiBlh%2BWzYFpFpsHc51%2BzG4L%2FFSgOiRDmHADHAbBUH0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQTScc0fJC7KaQLTSrcAxsKgDnXIo5NdF1tMNk5rTgf4BYM4%2B1jwmnnHGGoqtxngHSKjeKGgUnmWtIp3JRLdhqQc1w%2BvXysU%2FxuH3mYhDJENPpsT9QqxhlFYVGPHTNbJhJdUNNcX5n4pP58bff5ARnyfBex0Af2jPXWnSjlBFFkCHEw2uT5X8ETncL9p4pRgP1HePRIiknznA8KVx2XJIYWuSqSJIStxhYLyPlra56bAH4lylTI9P8OJN5vto%2Bkq8xvNm1zV4Ll2zmyS0e%2BAEZe%2BxsPWU%2FDFyKrd541eir2uEd2E4ODdfD20VoRv56IEAxzTdvabcSbh8v0GkCrW6pwQDEMdvyGN%2BCK7p0HWXPnKZ87I%2BCOoBmHbRQfqnSEHnzdkVlvqaYQNnMwkOGXSMg%2BLEmBPW%2FNLc6WyItI%2Fyjysu2EJdNkVRTA6Un1ByXxd4lc4qiQEPkc4mur3HMrIRHddC7jJJFGyiqoU1NzJnba%2Bcj9zNDjNwVgGqa0UXCbXixUxj2%2BO40%2F4VCelPUZt9SrcbMlb05BTgkBVqO03ufYpOAmgJIMzLVNMCQ3Zottgkwp8Axf8nzhchBXq2eZh363XfghWiqKgpwC27ehRc8VWM%2FE1Yv9zqKpq4LmmonaTm8A9zp9Z%2BcyNeEoMJjZ9L4GOqUBNaArOPOfjWQvkHt%2BWL5HjjwI3EC9LuQvMcYpi4WVbfXrKlWHoXIW0I%2FXfsuTFm%2FtFthKlAohhY2z8S%2BLiqJpbkf%2FDYdE5fTdOzR4qTeoU5szpOJ3S6BcG2ngJTttogDgEJCZMoT6bhNcKJwpEbiyLW%2BUunf3WqcY2Oz5uc6fVSmehLRxVaSSGtAQ6gFjARNUXPWn%2FTsgzLjuNwhUqxNbU%2BHKyH7W&X-Amz-Signature=5c47cd69dff36bd75e95bb8017d021eb1904fc3fd196ed125aa17e5642c3b7a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5XZ2C3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC6h7vMy2XAHYDgmjFh09DQabZyqkwRguVsS7ABWozllwIhAIBJCNQp%2BhhG5dXG%2Fjtdj2HaedmcWC5%2BNBagukXLCCMfKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywOBXiCaHlcNZBhhgq3AOR%2FvVv2tzYCBUKer2tG1SJbrUPtR%2F39cC%2FBU850gIxcKKE1t3LlQC435XkICTtnjCDxUw9mh0j5v%2BbbHv54vPV%2FKqrFV84sDTDAVYusXIlHTAcwKDt3XJg55y7ScW2ct6Salg7hu5rXwNXcdPqES7rB58p12S0loDCTHp2NgDLJoASbQU%2BfQzOAVVqad9NeqvM3Pbt1FftJja8kKAIut3MSzp6mv4cgpqAUeAc3GdTfzYj3Z7QWKuJ065qZ7EzOVLzajrW%2FwGRRdBKA4uO0%2F8nyAVOCR4IZqaxdKQXDOd2uJye%2FcxMVHy0f%2BohllNX3iSajrQ9JJuB7gZMa%2BWGMsvu%2Fr55motbTChE8gdf%2Bdop%2F9Tv96ST%2FZApBoUlmD0MlO7lFQVYcCmry1aUlGZMwJar%2BIdl%2BummYdB%2BLfhK8MQpsSu%2FK6BSEPG3QQckzQJwITABz9gCTQAKzb1cLYy0G4voxlat7WBpsFtzBQCoLMM%2FVkz%2F2AtCNetnHwX%2B0xEP3hwncswdThNkyCo4RvAVAVIG46PRFehD%2B4Y4A%2BF4E6%2FdwHQAvW1jhU6POWwhivfHLzdAHhDxJQ3tkP2%2FL1Gx4TXlWb4IPEqQKYYhV4Dza0%2FXzqaFQabLVFXpUPfj5zDw2PS%2BBjqkARRNims5EVn0i6IaJuwzntBplZBWSsNiJPRfcsoGEE6Jnqm1rV30%2FON1gTobU%2FzmzC3dCn%2Bw%2Bno2iud3ZHO7wiEFKYzPesE%2FOCHcXYIdS8ymmKOyhCEqdjKj2YMLxlnt3qtEipkI6scpdAKun9Imx5FxTpmPijzTFREAix4t87h4z8lS7AZWbc9sE%2FSagTzCwAHfDpotacQg9jeAVS4809bJHi7w&X-Amz-Signature=228799b3f33ee95045d09910e1cdea2d1e593f7a29f86e714e1c2dcbe8e50946&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUCV46UL%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAP3TVBLFY2wzY%2Fq584C8grQNRqYQpt1jBAA8Wv6vNEcAiEAvRKUNhWdTOd1DFFjG30dEfCqGPKcGKVxysZvFDRboGEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSQQ%2BcCK5%2FekMfCaCrcA%2FpiiRweL%2BNmTawNGi1pIrvhOfEqrGli%2BXufKFRt48vHD2epAFYbzX5AjxIjeaT0FgBs1RLDGszZ6Ull2dT%2FWi1CAuyuHatNAFXCftz%2Btajs15XclR9gOXCghYshYQ24CMWlloLj4E3kluKIExW1A7o4nBuIvtT3kUE1bpyf5rB2NXaw%2Fl%2BW1QCkQD%2BFACiI7A7wz1NmO37ZnSo5zFdmqG6PNAMriiQqBIPmfmlNMTBDhjU95p2Tp5B%2F04mQwCgVwLYLV0qs8KrLXnScJJPFeTIZySg98uRLGlMpBmKVqPQKRqSvfUSWZ0t890GqUtz2GnhhynbgvbnD02AITijMA9GhZesCSJIvRBcq2YUehH0HQwTfGy4Y9XC598a0m4uG9DyxoYzwZDe1zRbP9dwP7soZVEcofTj1WlNpPJYFmpRg%2B65HUAXlVTb3ObLk4nqcAkNWLglJnc%2BdcNp2GyiBfm4PikGEqOcC4IweODpA%2FzOMX%2FMhinanY7S5pWLgpl8uRWx3BiCmhf4twRBMir6p4vao%2FLPXSQcscfP%2BXdPgZN4Sn7rD6DKXV75L7XF7GIDDtECoAGqWuddHQglPNAvzTE2z%2BnPY6KtLUIohYOrg6qr%2FbvqUOlLay%2BTUNWpQMJbY9L4GOqUBo%2BLZJ9ggwZtwoRsX8sJrQnUg%2BI9TlJ2DCb6mRHQYvY4NuLDb2i9RWz%2BPN8xzs4Scgq4490zgXHQbdSXBZl4b3detf%2FjtvNqfG3r6goXSc7coi%2BMOMInLxLqrE5nbcGSq30jVKquIzgsQ0w5jSHn4s6wIpYZ2r72wDhCOpj9vbdbvlPUzmbLYKnMAAsDkQShzEtd21%2BbC2KYpIKWPx1N0xqil2Ykk&X-Amz-Signature=3fe2e741f3a6d4843e998619d436f16973567c282f5577b96d232f383f32e0ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCRVOIDJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDSAn%2BYx3f53kT41oQkjgiqYWVAysUhLoAEPBReeRY48AiEAmhiBlh%2BWzYFpFpsHc51%2BzG4L%2FFSgOiRDmHADHAbBUH0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQTScc0fJC7KaQLTSrcAxsKgDnXIo5NdF1tMNk5rTgf4BYM4%2B1jwmnnHGGoqtxngHSKjeKGgUnmWtIp3JRLdhqQc1w%2BvXysU%2FxuH3mYhDJENPpsT9QqxhlFYVGPHTNbJhJdUNNcX5n4pP58bff5ARnyfBex0Af2jPXWnSjlBFFkCHEw2uT5X8ETncL9p4pRgP1HePRIiknznA8KVx2XJIYWuSqSJIStxhYLyPlra56bAH4lylTI9P8OJN5vto%2Bkq8xvNm1zV4Ll2zmyS0e%2BAEZe%2BxsPWU%2FDFyKrd541eir2uEd2E4ODdfD20VoRv56IEAxzTdvabcSbh8v0GkCrW6pwQDEMdvyGN%2BCK7p0HWXPnKZ87I%2BCOoBmHbRQfqnSEHnzdkVlvqaYQNnMwkOGXSMg%2BLEmBPW%2FNLc6WyItI%2Fyjysu2EJdNkVRTA6Un1ByXxd4lc4qiQEPkc4mur3HMrIRHddC7jJJFGyiqoU1NzJnba%2Bcj9zNDjNwVgGqa0UXCbXixUxj2%2BO40%2F4VCelPUZt9SrcbMlb05BTgkBVqO03ufYpOAmgJIMzLVNMCQ3Zottgkwp8Axf8nzhchBXq2eZh363XfghWiqKgpwC27ehRc8VWM%2FE1Yv9zqKpq4LmmonaTm8A9zp9Z%2BcyNeEoMJjZ9L4GOqUBNaArOPOfjWQvkHt%2BWL5HjjwI3EC9LuQvMcYpi4WVbfXrKlWHoXIW0I%2FXfsuTFm%2FtFthKlAohhY2z8S%2BLiqJpbkf%2FDYdE5fTdOzR4qTeoU5szpOJ3S6BcG2ngJTttogDgEJCZMoT6bhNcKJwpEbiyLW%2BUunf3WqcY2Oz5uc6fVSmehLRxVaSSGtAQ6gFjARNUXPWn%2FTsgzLjuNwhUqxNbU%2BHKyH7W&X-Amz-Signature=f7e1ee701843e3afb4e2f5e48989e14a25b396fcd9548cfb6351f6283babe300&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
