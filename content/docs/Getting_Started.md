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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNSAXTH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa45z%2B2CrBD6TrrzW%2FdkryUqQ7CrqFZgHBadNcvRigEQIhAIPwnJCOtJGXmuJsDbSuxHrLNhIk%2F%2B8OcPYTho5eOy6NKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsmVOl7uUJ1%2F%2Fzu9Yq3ANfr995Qwvzf6FdBSNMrFzGHfe%2FdjDvUSFhk0j%2FRz85jU3jxIIkwnguqaM1QqVf6GYsHtiO8JIn6W4%2BxWHq3ZKS%2BtejWZAs43OIVKcNBSLdh8jkRkdwu0ZRl9TkBmYgLHfAKxmYLwk8nUr97UIZMljqOziLjteS49wPU0JGPdGEnV7L%2FsPc7KdUg2p18%2Bvbk5YNsU60jo8Q7tpwqvCR8O4s1vzkUt7xUX3DgyGUjrck1qqgxrM4RjxZTPZtqGxQXg2SF%2Bzl8Kf8lnJTchemJ2hje1w534AE3%2FN9Tsl4IB7t18R8kde%2B%2F9ErkXAZh1t9Gt8LnmSBfv5UqDU4jspFo7WXXvM%2BmlXTZM6Y4nBfJmE0s%2F92KWS92N3ZSMpnCrR%2FrP51AzS0dQSBv9auvPwv3gVSh7scFKEQIZRqnBFoEZzHInylyX%2BdBOZyftHeECTSyKKYPyf9Bl2ogoxLU3Hm7WMj4PeOZdZzZq7LSCvUErdVGpllowJUEcPpU91GRXiHD7Lb8NiHSMQigYYq4P6dwJGUfGHs7N7%2Fo9%2B85DdSOa0KghbKAcAKXGjeCOEXhBtysat5GQGfZXzWLT0oJtnEQd80Ep3PtktJwGa0CxKW713OAbZACgNa9u85EWBkrDDtrbHBBjqkAXpU%2FmXoII92RTyvCI9AcyaYrNBPwH%2FKL6d2AlGpTMr5ynXloQkU3XlIJ0gHfUiRb8Ca9PXu9OMPHG5JjhRsYKLgG6maOtOR6dvyB5OcKCZppNS1FkmAxtSIPHwBFxLW5kZGzaSqzkKt%2B0zVF3El3T8mAi77%2Bf%2Fs6AozeQv8xw4pn7XSmXLf%2B8K1LWtNfahUBaXnJPMnDZVtRz%2BRx9mvI%2Fbshdyf&X-Amz-Signature=6721e75b0cbaff4f0ab47b327cbfb592123f496844cd65640de3d12352860136&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNSAXTH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa45z%2B2CrBD6TrrzW%2FdkryUqQ7CrqFZgHBadNcvRigEQIhAIPwnJCOtJGXmuJsDbSuxHrLNhIk%2F%2B8OcPYTho5eOy6NKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsmVOl7uUJ1%2F%2Fzu9Yq3ANfr995Qwvzf6FdBSNMrFzGHfe%2FdjDvUSFhk0j%2FRz85jU3jxIIkwnguqaM1QqVf6GYsHtiO8JIn6W4%2BxWHq3ZKS%2BtejWZAs43OIVKcNBSLdh8jkRkdwu0ZRl9TkBmYgLHfAKxmYLwk8nUr97UIZMljqOziLjteS49wPU0JGPdGEnV7L%2FsPc7KdUg2p18%2Bvbk5YNsU60jo8Q7tpwqvCR8O4s1vzkUt7xUX3DgyGUjrck1qqgxrM4RjxZTPZtqGxQXg2SF%2Bzl8Kf8lnJTchemJ2hje1w534AE3%2FN9Tsl4IB7t18R8kde%2B%2F9ErkXAZh1t9Gt8LnmSBfv5UqDU4jspFo7WXXvM%2BmlXTZM6Y4nBfJmE0s%2F92KWS92N3ZSMpnCrR%2FrP51AzS0dQSBv9auvPwv3gVSh7scFKEQIZRqnBFoEZzHInylyX%2BdBOZyftHeECTSyKKYPyf9Bl2ogoxLU3Hm7WMj4PeOZdZzZq7LSCvUErdVGpllowJUEcPpU91GRXiHD7Lb8NiHSMQigYYq4P6dwJGUfGHs7N7%2Fo9%2B85DdSOa0KghbKAcAKXGjeCOEXhBtysat5GQGfZXzWLT0oJtnEQd80Ep3PtktJwGa0CxKW713OAbZACgNa9u85EWBkrDDtrbHBBjqkAXpU%2FmXoII92RTyvCI9AcyaYrNBPwH%2FKL6d2AlGpTMr5ynXloQkU3XlIJ0gHfUiRb8Ca9PXu9OMPHG5JjhRsYKLgG6maOtOR6dvyB5OcKCZppNS1FkmAxtSIPHwBFxLW5kZGzaSqzkKt%2B0zVF3El3T8mAi77%2Bf%2Fs6AozeQv8xw4pn7XSmXLf%2B8K1LWtNfahUBaXnJPMnDZVtRz%2BRx9mvI%2Fbshdyf&X-Amz-Signature=b1dac445d9ea75a0205fcaf428fac794eb4d00ee8c3b55f0368df026b4b77482&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNSAXTH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa45z%2B2CrBD6TrrzW%2FdkryUqQ7CrqFZgHBadNcvRigEQIhAIPwnJCOtJGXmuJsDbSuxHrLNhIk%2F%2B8OcPYTho5eOy6NKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsmVOl7uUJ1%2F%2Fzu9Yq3ANfr995Qwvzf6FdBSNMrFzGHfe%2FdjDvUSFhk0j%2FRz85jU3jxIIkwnguqaM1QqVf6GYsHtiO8JIn6W4%2BxWHq3ZKS%2BtejWZAs43OIVKcNBSLdh8jkRkdwu0ZRl9TkBmYgLHfAKxmYLwk8nUr97UIZMljqOziLjteS49wPU0JGPdGEnV7L%2FsPc7KdUg2p18%2Bvbk5YNsU60jo8Q7tpwqvCR8O4s1vzkUt7xUX3DgyGUjrck1qqgxrM4RjxZTPZtqGxQXg2SF%2Bzl8Kf8lnJTchemJ2hje1w534AE3%2FN9Tsl4IB7t18R8kde%2B%2F9ErkXAZh1t9Gt8LnmSBfv5UqDU4jspFo7WXXvM%2BmlXTZM6Y4nBfJmE0s%2F92KWS92N3ZSMpnCrR%2FrP51AzS0dQSBv9auvPwv3gVSh7scFKEQIZRqnBFoEZzHInylyX%2BdBOZyftHeECTSyKKYPyf9Bl2ogoxLU3Hm7WMj4PeOZdZzZq7LSCvUErdVGpllowJUEcPpU91GRXiHD7Lb8NiHSMQigYYq4P6dwJGUfGHs7N7%2Fo9%2B85DdSOa0KghbKAcAKXGjeCOEXhBtysat5GQGfZXzWLT0oJtnEQd80Ep3PtktJwGa0CxKW713OAbZACgNa9u85EWBkrDDtrbHBBjqkAXpU%2FmXoII92RTyvCI9AcyaYrNBPwH%2FKL6d2AlGpTMr5ynXloQkU3XlIJ0gHfUiRb8Ca9PXu9OMPHG5JjhRsYKLgG6maOtOR6dvyB5OcKCZppNS1FkmAxtSIPHwBFxLW5kZGzaSqzkKt%2B0zVF3El3T8mAi77%2Bf%2Fs6AozeQv8xw4pn7XSmXLf%2B8K1LWtNfahUBaXnJPMnDZVtRz%2BRx9mvI%2Fbshdyf&X-Amz-Signature=cd22d55acc68efa5eedf1c74e8f0251317d49ceee50d36c761b5e07a09d87103&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5YLLEP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOPC4v8gFsZtTJc9SM4wz%2BHeSm%2BNia5aob2EmkvGG1vgIgB7WOB2Pl64poos7U8jY%2FLKC2HE4XTZHpDikhennLIbIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9RSLzTJEVvoyp2KSrcAxDoxML2%2Bl%2Be08Al2N84IzYg8uVlN5WrgT31R25kU0%2FbATWP2%2BHG2L9bOi1BepQEz3MfguhIAfQHFxA5KfAVbxqSTreHKoh2pwG8MJ%2FuWs2peqkg2L7NGz1hYYm4pRnOwc9NntFG5ql6Z6FCFounQPkPICcWDZLiwDM4g9AB50WUcPrt0YJR%2BDxW5BS71OXk1mDKxkuPbhbJ2TbeU4Wul%2FXXBboREX2MSUYpD1h5EOrqJ3BWcAnytlwUhR5de68nP%2F89KRlJmRYpYjjVmyf8QZCK9B51nhEDRbHzRr7R5JZD6Pwxgpx7IAuwzbMbSu22snj0H34wttz03DOdve0M%2BaFfldozEtDbe3oyzPUq6geXR3BL9fjiJv09H%2FvJaE5oEkRDcWhceb6GGCKilUfkbl3DZkVC7U7hvaD03zfpLEyCPR7YEHtEa9D24vijMsXMCeJBN27esLVA7LF2uB1xkeaOLC3xX1Xk1%2BDEqGT0iHMsNJn4sOjb9Ij49BW4hTOS6Y0Vcpsmk%2BDcmjF8lANYx%2B44z1fFsfw%2FyoEyoIYxAPyfLdvED7GNYRM0MCumnSO9q9i8UC91412rKrwm9sBI0ody6Nz7Nj6wv91cScldN32EsQkf0KuRD8lQoj5DMIyuscEGOqUB22bGkiJ46pjJdYeqkhPnjQCTjd9UDbtzkylDgaEuHxHBVPHxSr1YyJMHDu0LCZJ3GeH8IuSovgxxxm6ggkGw6W8r7AtL2nfc%2BTZIlq3vg3vf4aXVkSrxTFv3aueE%2F8jf%2B3Q0Cvcz8vfOKwI0oiR48ka5%2BmA1jsjvP5uLbECoUnNQKa9r5EbwnVe%2BD9LbnXZeHE%2Fa4Vy1LOtjAEHhWRhg0YOO36y6&X-Amz-Signature=721041a6d572be461288417fc72cf7507318f7ccaf255d98252d0b0a02234b95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU4Y7XXK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4U0JhmC8aWYqYCSvJsuSpMEYBXjUK6tWt%2BB2KVQaSLAiEAgmOPJEA%2BAag8P3kbqNNfi7vUPtn4Jld92lfKNxG4FN8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQYNl8NhAVCKRvuaCrcA6kCeFO9NCGgeG7Rbz9uqgDhgu0GtPDSCilmk2Lp0k5CPIqaSv9WnVEmzUAvppXvdRmghIYqIjHsuEzsc%2BlpWl8ryi8HC6c%2F2TZpC8jGYyo73gYjqgOxi39WE0iWKbObyqm3qqA6M5ecUpA8KRP9mOuevCT7dRxq%2FSCckHKvs92GQTe7404lyifLgekfEtIqeJkR0PkxQ0zTbZqT4j931FuRMHY%2FukpT%2BaNx6l0fuC8n68Tbdeauttx4Bttj%2BV61pPM3j%2BxY8VWfZTfyF7iXgePFH%2F3g6hNfRjVxWtjFLFjiKqbSTmjNUYFIQjxhSgR2x%2B8wIzUc9rxtLpeV6UBGMByM49PIBjFOyctupGxj45kvrmHFl%2FcSMfK6gNcrwHPlAgChbUIjRZ2UHYxwchaUr4yhXhfvSYKIFkYZLdDuX8D2cmKiWtJUHaKoUYpo%2FHqkvODZSTrNwQV8HV3BqDNOqxJkRcxaRRIxJD30F316hsf7XXZ4aAIXJIz%2FQxYu4nRK2U5antzMwi9D1Zi1BeEtOTNk8OtU%2FDkdUd5StRKdH3Zm%2FLE71p45ammoMa91UQFPIiueYd3nXQp93hAONn228g3f5QtpbmV25S2pdMzT34VXnAxUbl%2FwKnQVqp5wMOqtscEGOqUBgI4%2FT1RxaVatkc4YTFjwVx2Rxhit%2BBO72S0Ka7tQ0SCNeEiD0cDa0xGZU9JYugFdhpsi3hA9seIeaHfQc9yv0Du9Y9T9BgoRmDVhHcwkES%2FvAHKVvB%2BhxdWCRbK9GHptg9cbJbgbx0nki2N9l13tYxz2ufK6rwNiOA0TA9f%2B9rmeQWXPqKTTkfZ8nL7HqApl7j1s7DsrbA2f7zIFRe2GlUluX%2Fpr&X-Amz-Signature=0643f3320cfefc049df56a479574b10aff116b84e995a65e58ae3b3b80cd8327&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNSAXTH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa45z%2B2CrBD6TrrzW%2FdkryUqQ7CrqFZgHBadNcvRigEQIhAIPwnJCOtJGXmuJsDbSuxHrLNhIk%2F%2B8OcPYTho5eOy6NKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsmVOl7uUJ1%2F%2Fzu9Yq3ANfr995Qwvzf6FdBSNMrFzGHfe%2FdjDvUSFhk0j%2FRz85jU3jxIIkwnguqaM1QqVf6GYsHtiO8JIn6W4%2BxWHq3ZKS%2BtejWZAs43OIVKcNBSLdh8jkRkdwu0ZRl9TkBmYgLHfAKxmYLwk8nUr97UIZMljqOziLjteS49wPU0JGPdGEnV7L%2FsPc7KdUg2p18%2Bvbk5YNsU60jo8Q7tpwqvCR8O4s1vzkUt7xUX3DgyGUjrck1qqgxrM4RjxZTPZtqGxQXg2SF%2Bzl8Kf8lnJTchemJ2hje1w534AE3%2FN9Tsl4IB7t18R8kde%2B%2F9ErkXAZh1t9Gt8LnmSBfv5UqDU4jspFo7WXXvM%2BmlXTZM6Y4nBfJmE0s%2F92KWS92N3ZSMpnCrR%2FrP51AzS0dQSBv9auvPwv3gVSh7scFKEQIZRqnBFoEZzHInylyX%2BdBOZyftHeECTSyKKYPyf9Bl2ogoxLU3Hm7WMj4PeOZdZzZq7LSCvUErdVGpllowJUEcPpU91GRXiHD7Lb8NiHSMQigYYq4P6dwJGUfGHs7N7%2Fo9%2B85DdSOa0KghbKAcAKXGjeCOEXhBtysat5GQGfZXzWLT0oJtnEQd80Ep3PtktJwGa0CxKW713OAbZACgNa9u85EWBkrDDtrbHBBjqkAXpU%2FmXoII92RTyvCI9AcyaYrNBPwH%2FKL6d2AlGpTMr5ynXloQkU3XlIJ0gHfUiRb8Ca9PXu9OMPHG5JjhRsYKLgG6maOtOR6dvyB5OcKCZppNS1FkmAxtSIPHwBFxLW5kZGzaSqzkKt%2B0zVF3El3T8mAi77%2Bf%2Fs6AozeQv8xw4pn7XSmXLf%2B8K1LWtNfahUBaXnJPMnDZVtRz%2BRx9mvI%2Fbshdyf&X-Amz-Signature=2e97fc8eb49face919c5c1acab5ebb27d5b2ae985d50715a293e74679f8d6b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
