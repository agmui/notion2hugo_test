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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJ6N3QS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCPWeKBvOCQZs2CmRgFS0uOlVVZ%2F%2FJsfLPi79cc0%2FhSeQIhANxTXdNz36FyEZjnFO6qNyFMvS9UyobzWc39hU%2BhQdd%2FKv8DCEcQABoMNjM3NDIzMTgzODA1IgyMn3CZ3NoL7Oy9kysq3AMeraC7gEQ8E5jdU88mM09NOjwD3q%2BYzDCna8uCQRySmB%2BCy24adB9a9JE8u6NV8mLixAhe8TIEFFuNm%2FAqWOjLZcE8DNJAjANwb3OrgBYjkudoZRgy50cxq6Cg%2FAXXcFaRE6odHvNhRSJ2o2uBpfHpxzGkVeIaIBk3uX2lG4CWZpSEsbk06VSukdcUYouK8LstsI1Ogxt8JUG5s51tc4QjdCHejn6qdaiNnuk%2FlPC7qWZXFreic%2FXwQd7WzuGhVZOxwBP%2FfZPre5NdwBsAMi%2FJLm2vJ7WLjUV%2BZ%2FbTd%2FaeizVaKjeyfhcFXgXv7BJ2AEeg095luFE7lVmtCwwBpj4f4sBcUm%2Fo8iFKrvkyapnuCx8ShWCfV0yjWL9s12IFzJoB1oMz8s63L0yx1y9JLzBun0M%2BqmvCGb0t5YQN%2BpyvJQjWeymgbv33WYi7sZukufArX%2BvKNJO4%2FWuO26V%2FxZgNer41zzPMpgA4Tl9j5gqnJItjVRJtTl0ZppQxKxhRQxHetSbEt8a7VtPfcd02oVZzeDJVZV1%2FB3RKwrlg74ihgqElGdRxt5zWvBep0pxWCI85EyU4JpIugTziSM5Rh9i%2BshLU2l%2BZl2ez4tNNHRye9f2Wj27NO5tFXod2RzDS06TDBjqkAXrkN6tQchGiohxQghCAEIijh33Y9cwFU3Ckc8n6PhJch4sMYgz3YVfyXggzAuOb9i2BvVF1wF8WxWlb%2BEvK6Z9JGBoA1l1iprhD%2BA6kCu8POIQq%2FOvRmVMhzLnxB3xlbfE27iHPiL2vSVHo9MaikVO051ycMWivQytoC7NmIh88R0tZp63WyNWT71cpVd34CnQEL4tNl0RmCxZ%2Bom2IsOAUaaJw&X-Amz-Signature=95f649fb3c81b062948c5d9618374db2c928b0410e879f6c7b10379cb8f5057a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJ6N3QS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCPWeKBvOCQZs2CmRgFS0uOlVVZ%2F%2FJsfLPi79cc0%2FhSeQIhANxTXdNz36FyEZjnFO6qNyFMvS9UyobzWc39hU%2BhQdd%2FKv8DCEcQABoMNjM3NDIzMTgzODA1IgyMn3CZ3NoL7Oy9kysq3AMeraC7gEQ8E5jdU88mM09NOjwD3q%2BYzDCna8uCQRySmB%2BCy24adB9a9JE8u6NV8mLixAhe8TIEFFuNm%2FAqWOjLZcE8DNJAjANwb3OrgBYjkudoZRgy50cxq6Cg%2FAXXcFaRE6odHvNhRSJ2o2uBpfHpxzGkVeIaIBk3uX2lG4CWZpSEsbk06VSukdcUYouK8LstsI1Ogxt8JUG5s51tc4QjdCHejn6qdaiNnuk%2FlPC7qWZXFreic%2FXwQd7WzuGhVZOxwBP%2FfZPre5NdwBsAMi%2FJLm2vJ7WLjUV%2BZ%2FbTd%2FaeizVaKjeyfhcFXgXv7BJ2AEeg095luFE7lVmtCwwBpj4f4sBcUm%2Fo8iFKrvkyapnuCx8ShWCfV0yjWL9s12IFzJoB1oMz8s63L0yx1y9JLzBun0M%2BqmvCGb0t5YQN%2BpyvJQjWeymgbv33WYi7sZukufArX%2BvKNJO4%2FWuO26V%2FxZgNer41zzPMpgA4Tl9j5gqnJItjVRJtTl0ZppQxKxhRQxHetSbEt8a7VtPfcd02oVZzeDJVZV1%2FB3RKwrlg74ihgqElGdRxt5zWvBep0pxWCI85EyU4JpIugTziSM5Rh9i%2BshLU2l%2BZl2ez4tNNHRye9f2Wj27NO5tFXod2RzDS06TDBjqkAXrkN6tQchGiohxQghCAEIijh33Y9cwFU3Ckc8n6PhJch4sMYgz3YVfyXggzAuOb9i2BvVF1wF8WxWlb%2BEvK6Z9JGBoA1l1iprhD%2BA6kCu8POIQq%2FOvRmVMhzLnxB3xlbfE27iHPiL2vSVHo9MaikVO051ycMWivQytoC7NmIh88R0tZp63WyNWT71cpVd34CnQEL4tNl0RmCxZ%2Bom2IsOAUaaJw&X-Amz-Signature=a1b932db2d15caadaabcf8d5ea9fee449bae0cf1b7d29d71587d7a95b2e4dc97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJ6N3QS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCPWeKBvOCQZs2CmRgFS0uOlVVZ%2F%2FJsfLPi79cc0%2FhSeQIhANxTXdNz36FyEZjnFO6qNyFMvS9UyobzWc39hU%2BhQdd%2FKv8DCEcQABoMNjM3NDIzMTgzODA1IgyMn3CZ3NoL7Oy9kysq3AMeraC7gEQ8E5jdU88mM09NOjwD3q%2BYzDCna8uCQRySmB%2BCy24adB9a9JE8u6NV8mLixAhe8TIEFFuNm%2FAqWOjLZcE8DNJAjANwb3OrgBYjkudoZRgy50cxq6Cg%2FAXXcFaRE6odHvNhRSJ2o2uBpfHpxzGkVeIaIBk3uX2lG4CWZpSEsbk06VSukdcUYouK8LstsI1Ogxt8JUG5s51tc4QjdCHejn6qdaiNnuk%2FlPC7qWZXFreic%2FXwQd7WzuGhVZOxwBP%2FfZPre5NdwBsAMi%2FJLm2vJ7WLjUV%2BZ%2FbTd%2FaeizVaKjeyfhcFXgXv7BJ2AEeg095luFE7lVmtCwwBpj4f4sBcUm%2Fo8iFKrvkyapnuCx8ShWCfV0yjWL9s12IFzJoB1oMz8s63L0yx1y9JLzBun0M%2BqmvCGb0t5YQN%2BpyvJQjWeymgbv33WYi7sZukufArX%2BvKNJO4%2FWuO26V%2FxZgNer41zzPMpgA4Tl9j5gqnJItjVRJtTl0ZppQxKxhRQxHetSbEt8a7VtPfcd02oVZzeDJVZV1%2FB3RKwrlg74ihgqElGdRxt5zWvBep0pxWCI85EyU4JpIugTziSM5Rh9i%2BshLU2l%2BZl2ez4tNNHRye9f2Wj27NO5tFXod2RzDS06TDBjqkAXrkN6tQchGiohxQghCAEIijh33Y9cwFU3Ckc8n6PhJch4sMYgz3YVfyXggzAuOb9i2BvVF1wF8WxWlb%2BEvK6Z9JGBoA1l1iprhD%2BA6kCu8POIQq%2FOvRmVMhzLnxB3xlbfE27iHPiL2vSVHo9MaikVO051ycMWivQytoC7NmIh88R0tZp63WyNWT71cpVd34CnQEL4tNl0RmCxZ%2Bom2IsOAUaaJw&X-Amz-Signature=df84c3d7dfe72786f864b96b47fc57c4639e6ce6500ac3a87b87cf8339a1ea03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWOLBF5Z%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCqTGjTmWvFaaZyUY8SSjxW%2BshOKMTUoxBh475trPXWMAIgH55iXOC9iEGHhY7M3vzrHolv1eeElgSeB9jnctOWfNIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHYL0TctVAUUjjPB4SrcA1IZ%2B1GhPGMYBI%2F9FpRnQs9xen5MwMEbCHzI9cu4BTbcb0H%2FehzLQB4VctMKajumQVF1416t380ACfI%2Fip6ysCuc4Fn%2FjML%2FyWt4KC%2BPuGIxPKPGu3y%2B8Px%2BmKQIPuKiOb3MR73w8nqYykNb%2FlFBhT1j5qNTwP9D2oQ9B5neWPBAlPBsr13VHccCrIZGTjIrwdeBFEHO6H8p4EXEBSFnqmiZdhLH0OrO62zqNBctvYkuB1fC22h0cTXsKPJx%2FKGUowOXGFhHud2M6zMF2NZ3%2Fe1po1eNpVe6QxQ%2Bz6QwWQtAQlbJXi%2F5wISs3Ffd6luALUMrQ4hYdVWdSeCbQwOyZhjMSXvHzfHs%2B15b3p4cXBoj%2FrLvOYeqnJTB2PUuWGLJ7uj8uo%2B5wmDuzFWF%2B4fRDv2BrOvruzK%2Fy%2F3RWknhk2xchx6lpPYg6OYUBFTZdlvRwpuNeTZNqAqdm%2BpqGwY1Y3mV5XsY6t4wj%2FFN6Mv4sTUU7UVcS8%2Beo%2FIhiIbQuCfu%2FkXEjai0c63UdiwTlMeBiJ24oR%2B1LlsW8IryYNw38Fe3iPNwH2lN8jgYf51Rm1sLMDZJy38H2Yblu6eb5biQztreedOcK62Kolj4IwoWHAvDJw2q0kdxKoEkRQSPML%2FJpMMGOqUBV7v5oEJiwlGDzPUWxc%2FAOw9seaU%2B2oHYTGL5XpYpM698kNO3XEqXZKnGcmukOw54Ajy%2FJwdw88BuT1sL1o0y54rJ0CpRaGpNKRTGi2fSOb7vihuAeCiPMRYHoR65Us9ESUEh7Pau4HRbr3zG3lVgkHu2FjdyN%2BJweCc4HHBRn8A4f1V778Bs0etjwhyRclyBrZHaVWv%2BWu%2BNkbVpq4bQnGWnDFqZ&X-Amz-Signature=96687001854a5222a6094a490ef06841f3e5f66bf3948aae46c014aee935950e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWOLBF5Z%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCqTGjTmWvFaaZyUY8SSjxW%2BshOKMTUoxBh475trPXWMAIgH55iXOC9iEGHhY7M3vzrHolv1eeElgSeB9jnctOWfNIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHYL0TctVAUUjjPB4SrcA1IZ%2B1GhPGMYBI%2F9FpRnQs9xen5MwMEbCHzI9cu4BTbcb0H%2FehzLQB4VctMKajumQVF1416t380ACfI%2Fip6ysCuc4Fn%2FjML%2FyWt4KC%2BPuGIxPKPGu3y%2B8Px%2BmKQIPuKiOb3MR73w8nqYykNb%2FlFBhT1j5qNTwP9D2oQ9B5neWPBAlPBsr13VHccCrIZGTjIrwdeBFEHO6H8p4EXEBSFnqmiZdhLH0OrO62zqNBctvYkuB1fC22h0cTXsKPJx%2FKGUowOXGFhHud2M6zMF2NZ3%2Fe1po1eNpVe6QxQ%2Bz6QwWQtAQlbJXi%2F5wISs3Ffd6luALUMrQ4hYdVWdSeCbQwOyZhjMSXvHzfHs%2B15b3p4cXBoj%2FrLvOYeqnJTB2PUuWGLJ7uj8uo%2B5wmDuzFWF%2B4fRDv2BrOvruzK%2Fy%2F3RWknhk2xchx6lpPYg6OYUBFTZdlvRwpuNeTZNqAqdm%2BpqGwY1Y3mV5XsY6t4wj%2FFN6Mv4sTUU7UVcS8%2Beo%2FIhiIbQuCfu%2FkXEjai0c63UdiwTlMeBiJ24oR%2B1LlsW8IryYNw38Fe3iPNwH2lN8jgYf51Rm1sLMDZJy38H2Yblu6eb5biQztreedOcK62Kolj4IwoWHAvDJw2q0kdxKoEkRQSPML%2FJpMMGOqUBV7v5oEJiwlGDzPUWxc%2FAOw9seaU%2B2oHYTGL5XpYpM698kNO3XEqXZKnGcmukOw54Ajy%2FJwdw88BuT1sL1o0y54rJ0CpRaGpNKRTGi2fSOb7vihuAeCiPMRYHoR65Us9ESUEh7Pau4HRbr3zG3lVgkHu2FjdyN%2BJweCc4HHBRn8A4f1V778Bs0etjwhyRclyBrZHaVWv%2BWu%2BNkbVpq4bQnGWnDFqZ&X-Amz-Signature=c21b19e6df243da909e61a7e349e7c991aca3980c145e4457278247bfca3680c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJ6N3QS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCPWeKBvOCQZs2CmRgFS0uOlVVZ%2F%2FJsfLPi79cc0%2FhSeQIhANxTXdNz36FyEZjnFO6qNyFMvS9UyobzWc39hU%2BhQdd%2FKv8DCEcQABoMNjM3NDIzMTgzODA1IgyMn3CZ3NoL7Oy9kysq3AMeraC7gEQ8E5jdU88mM09NOjwD3q%2BYzDCna8uCQRySmB%2BCy24adB9a9JE8u6NV8mLixAhe8TIEFFuNm%2FAqWOjLZcE8DNJAjANwb3OrgBYjkudoZRgy50cxq6Cg%2FAXXcFaRE6odHvNhRSJ2o2uBpfHpxzGkVeIaIBk3uX2lG4CWZpSEsbk06VSukdcUYouK8LstsI1Ogxt8JUG5s51tc4QjdCHejn6qdaiNnuk%2FlPC7qWZXFreic%2FXwQd7WzuGhVZOxwBP%2FfZPre5NdwBsAMi%2FJLm2vJ7WLjUV%2BZ%2FbTd%2FaeizVaKjeyfhcFXgXv7BJ2AEeg095luFE7lVmtCwwBpj4f4sBcUm%2Fo8iFKrvkyapnuCx8ShWCfV0yjWL9s12IFzJoB1oMz8s63L0yx1y9JLzBun0M%2BqmvCGb0t5YQN%2BpyvJQjWeymgbv33WYi7sZukufArX%2BvKNJO4%2FWuO26V%2FxZgNer41zzPMpgA4Tl9j5gqnJItjVRJtTl0ZppQxKxhRQxHetSbEt8a7VtPfcd02oVZzeDJVZV1%2FB3RKwrlg74ihgqElGdRxt5zWvBep0pxWCI85EyU4JpIugTziSM5Rh9i%2BshLU2l%2BZl2ez4tNNHRye9f2Wj27NO5tFXod2RzDS06TDBjqkAXrkN6tQchGiohxQghCAEIijh33Y9cwFU3Ckc8n6PhJch4sMYgz3YVfyXggzAuOb9i2BvVF1wF8WxWlb%2BEvK6Z9JGBoA1l1iprhD%2BA6kCu8POIQq%2FOvRmVMhzLnxB3xlbfE27iHPiL2vSVHo9MaikVO051ycMWivQytoC7NmIh88R0tZp63WyNWT71cpVd34CnQEL4tNl0RmCxZ%2Bom2IsOAUaaJw&X-Amz-Signature=55a4a839556aaadfd2a95a759a1389218b8d1bc924b902912180d51e1512b173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
