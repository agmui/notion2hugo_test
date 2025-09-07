---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NGJNNCH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCyhmnMKAnzvEZhok%2BmvjYMLryHcuRAK03Hviy06vn9bgIgfwuWN3Ed4f%2BfOLR0ki0SZOTZO8riraBclPctZeILdskqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGQj5gyDq7Fwv3SoSrcAyIUpyK7xajsOqLLG65VtQhcEmirJhXTqRDNr0ePMCrbWz7bgpUSJBeoG70xaNWnhGXuS0nkIwmSc1q8liiNQofi7n%2Fb5yD9tHyDqCX4YD%2F3LFY9ug0y8qWKAyP0J3s2EhZBiEPIzfYulvbl3AeEoSlfv4MheWTnGPDbDKtpPswbglqxHFkZxP%2B0CltrH62Ud6BGR0EGsDvrPkCgnxtAW%2Bi%2Bz%2BlkfKRi41rl2DQ60UPWLKZxnMn2CLhnrEbarPKY%2FyEOtd9CBsGa1TtqX62buJhpOEG5VgUxp96naFOmxRGt0MxeQ3FmCUJ5%2BOvjB9EmmA224NGzWx4j1BvUYVHqHM%2FStS90%2FSuQIrYUauaXZK1jagivK1cs%2B85tCCwQKbcssk4rDY5lXVqP1z6aDMDkqFlC21k2t8NJzJHsz%2BHNbyM%2B5JN0Xhr7Kklf0boWbiplagwdjCAGpspXMNSwXjlDe9wQZ20%2Fwzknxjq2iYvx2k9cBJmnZcQi1wAHCL%2BHgFyNe8vo3eLarhh%2B8rWaQdSmYQQAvTYNuuXCy4Ln7MMASNJ6Lr6ArzwYjbM3iCoaEsPcmNeSyJ2ux8KIceOk6RFFzBoiX6bDLJ0cgz8FdAiVxT%2FgSix2gWbjX3LCkMtUMJ%2FE8sUGOqUBFJ23ID3AguAgeLYmW7Na%2FYka0W3X8g%2F0Sdsz3LjfEKc3V0vYSeBnwPrvCt%2BxrWDsEaXReZzeNma5tI6qchFKzfPwH92jOm9OAUyf%2Bne5Bt6Gr%2B6TlKLsHLM7Ps2%2BmfD8QqY6KGfv9xJ235lwuQkDOd4Tmx%2FgIUk7aJJIoEwQk5zjMFH9IZF8PBrr3tT8UMVnYLTKut04s%2F6NrlEQZKGb0UnXybMm&X-Amz-Signature=218dcc09afe1b8e55c1fe808c1a6a874dbf5438e9dd2a38902d11d06b5d8cb28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NGJNNCH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCyhmnMKAnzvEZhok%2BmvjYMLryHcuRAK03Hviy06vn9bgIgfwuWN3Ed4f%2BfOLR0ki0SZOTZO8riraBclPctZeILdskqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGQj5gyDq7Fwv3SoSrcAyIUpyK7xajsOqLLG65VtQhcEmirJhXTqRDNr0ePMCrbWz7bgpUSJBeoG70xaNWnhGXuS0nkIwmSc1q8liiNQofi7n%2Fb5yD9tHyDqCX4YD%2F3LFY9ug0y8qWKAyP0J3s2EhZBiEPIzfYulvbl3AeEoSlfv4MheWTnGPDbDKtpPswbglqxHFkZxP%2B0CltrH62Ud6BGR0EGsDvrPkCgnxtAW%2Bi%2Bz%2BlkfKRi41rl2DQ60UPWLKZxnMn2CLhnrEbarPKY%2FyEOtd9CBsGa1TtqX62buJhpOEG5VgUxp96naFOmxRGt0MxeQ3FmCUJ5%2BOvjB9EmmA224NGzWx4j1BvUYVHqHM%2FStS90%2FSuQIrYUauaXZK1jagivK1cs%2B85tCCwQKbcssk4rDY5lXVqP1z6aDMDkqFlC21k2t8NJzJHsz%2BHNbyM%2B5JN0Xhr7Kklf0boWbiplagwdjCAGpspXMNSwXjlDe9wQZ20%2Fwzknxjq2iYvx2k9cBJmnZcQi1wAHCL%2BHgFyNe8vo3eLarhh%2B8rWaQdSmYQQAvTYNuuXCy4Ln7MMASNJ6Lr6ArzwYjbM3iCoaEsPcmNeSyJ2ux8KIceOk6RFFzBoiX6bDLJ0cgz8FdAiVxT%2FgSix2gWbjX3LCkMtUMJ%2FE8sUGOqUBFJ23ID3AguAgeLYmW7Na%2FYka0W3X8g%2F0Sdsz3LjfEKc3V0vYSeBnwPrvCt%2BxrWDsEaXReZzeNma5tI6qchFKzfPwH92jOm9OAUyf%2Bne5Bt6Gr%2B6TlKLsHLM7Ps2%2BmfD8QqY6KGfv9xJ235lwuQkDOd4Tmx%2FgIUk7aJJIoEwQk5zjMFH9IZF8PBrr3tT8UMVnYLTKut04s%2F6NrlEQZKGb0UnXybMm&X-Amz-Signature=969595eb92a9c1a57746b457fca09bbf062bb6cd18d1e875c8509e900028089b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NGJNNCH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCyhmnMKAnzvEZhok%2BmvjYMLryHcuRAK03Hviy06vn9bgIgfwuWN3Ed4f%2BfOLR0ki0SZOTZO8riraBclPctZeILdskqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGQj5gyDq7Fwv3SoSrcAyIUpyK7xajsOqLLG65VtQhcEmirJhXTqRDNr0ePMCrbWz7bgpUSJBeoG70xaNWnhGXuS0nkIwmSc1q8liiNQofi7n%2Fb5yD9tHyDqCX4YD%2F3LFY9ug0y8qWKAyP0J3s2EhZBiEPIzfYulvbl3AeEoSlfv4MheWTnGPDbDKtpPswbglqxHFkZxP%2B0CltrH62Ud6BGR0EGsDvrPkCgnxtAW%2Bi%2Bz%2BlkfKRi41rl2DQ60UPWLKZxnMn2CLhnrEbarPKY%2FyEOtd9CBsGa1TtqX62buJhpOEG5VgUxp96naFOmxRGt0MxeQ3FmCUJ5%2BOvjB9EmmA224NGzWx4j1BvUYVHqHM%2FStS90%2FSuQIrYUauaXZK1jagivK1cs%2B85tCCwQKbcssk4rDY5lXVqP1z6aDMDkqFlC21k2t8NJzJHsz%2BHNbyM%2B5JN0Xhr7Kklf0boWbiplagwdjCAGpspXMNSwXjlDe9wQZ20%2Fwzknxjq2iYvx2k9cBJmnZcQi1wAHCL%2BHgFyNe8vo3eLarhh%2B8rWaQdSmYQQAvTYNuuXCy4Ln7MMASNJ6Lr6ArzwYjbM3iCoaEsPcmNeSyJ2ux8KIceOk6RFFzBoiX6bDLJ0cgz8FdAiVxT%2FgSix2gWbjX3LCkMtUMJ%2FE8sUGOqUBFJ23ID3AguAgeLYmW7Na%2FYka0W3X8g%2F0Sdsz3LjfEKc3V0vYSeBnwPrvCt%2BxrWDsEaXReZzeNma5tI6qchFKzfPwH92jOm9OAUyf%2Bne5Bt6Gr%2B6TlKLsHLM7Ps2%2BmfD8QqY6KGfv9xJ235lwuQkDOd4Tmx%2FgIUk7aJJIoEwQk5zjMFH9IZF8PBrr3tT8UMVnYLTKut04s%2F6NrlEQZKGb0UnXybMm&X-Amz-Signature=0f57df0fa475b49554500a946c8e3b6922b267f4f72be4736ac196f5071fea48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU5RDYBF%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIB9VfI55qodfhTR4BIssZYXZIa%2BOTs5IclBdQkLY8%2BC3AiEAw86CBYnjxYBJQ61bKCrdkFCNsvEfLAzvqyU1HZH8a4cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNt8PRczxyfgqEZv8yrcA0oxGQNlDZZsz97SqoP3U9WufzLwL4lSyLDwkxC6V%2Fim2xjIQWyTkvYa5swK0JzU5W2qp%2Bp3Qg8TqWn3YjtD2L8eAaNIB%2Bk3iiZJqAkbhy5FMQenDS0rhbAPYjrifkgq%2BeCpWUoySEF6P8RJD9OTVDc8l5%2FJajUkRZrqZR5u18slsYH%2F7NszySKIwzUjxzUDJCBkBWkDfgvinISDtmhjRzpTQGhwaJWlkqthPtyKFqYNQlMbG6rab27OZpjN%2FPbr2u8ICbWp2FwynzuBs%2B2Tpn8EHgU5VJ1DKeoo3l72Zbj2xHMPCJjneUKwAfA%2FshYyTXupnTVaC0xgGzi43X3Xzdk11rtRUStKkqLlFzDSnfJiVzoNEJSsMsPKHBONW%2BpomaABYoNKKHt6ngUKbPTja6gwTgj6rXuEzGFpTLl%2FYw21dO8B6%2BK4%2F2ohBgZ9lTZTsFC%2B%2BZVu9p4%2BxRwNQ%2FvxnCUfF%2FWA1HSTK%2FffrMmY9ElFLlF9bFLHMTG6mtJd6VRqQjIcb48gF0FflvO4rck7rE3w3JD%2BjnD8Sc15ki5oWAYwRw5t6g9qT%2B63D6LdFW5o8aW7JK2GNi9%2FaiDV380Z4bd3eVIHIz5zUYAqjwGd%2Bv6iw4DKlq5m9MkZqtSsMO7D8sUGOqUBDseXSvH4ErLC64sIGIIE5PbItSlU1DCdB%2BETqcQJG4aDnco%2B4GZ0q10I5gHYSLgzlAqUvMJ5rBvQRHItLQ%2FYzTi5j6GcEWUR78u8LBqAFy8r1YY06IWnCt082NwV0iGRic179mdWWLd8g1RoxMG68OxszFl3OVnwhlFFSuWDvj24%2BzZAgZHMFDgiy%2Boy4JriblzI3L4ySLjHwdHm04Tvpq6HtniP&X-Amz-Signature=f58311a4990de6d7fbc3bfc545f2046e4db45d95067c47508e17cb523dc3e1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FG7DFWJ%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDFfsblfCWb8gfGVpbePg5YALF9uLEgfsqtLzQhNzoppAIgRxnjvy8GpOjHI31MNIXWo0RHxZo3NpVnuU%2BzPQX0OVQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWt51YklnKPfdoi3ircA54IAEC8bmAdt4Obu8zF1VAlxg0wKXJuz%2FaMG6P4OtfAuhtqcg9%2Bz8d6SWyAgnW8bnEfwa%2FQpuj7tHAJMUIsPGhoTIW4UDSTwXMuDXeF4YiH4aMZyCdu%2BZsKSF3l6j7l1j7r0DPVOyyCGRlLPmBLMh1SK6wklnTU8%2Fz%2BWYVCyYqW0VBItBjmPhRiuEtfp7zimunL1EbKcVq%2BUsf633LPc7vTbN89mR%2Fnfmd2Z3EYHm9caiRFxofsi9udiwF8UItz8exxL3NrXjoryJZHokoDj5uGFjIEi7KUTCvWSnw9%2F68IOHuvDIu095oSA6ksGI73QhzOPfYgvrzJ%2FR30NQOG1yOjq8sKZkUMpmW%2BT%2B5D4CCx%2F5IsodKpBlpVBy%2FHEx0wCTNyRGimXVuJC5RTzS2r0fIUcWBCvQ9S%2FYfFLE99V80HfYWdmfLcLVkEJgsYxNZP7PRBCcQi0u9lhMonRfjEeM8hbEgjzsHdBkReYVDHp6P6haX1BXbJ4ypTFr89VlOMxyL%2Fru9OZnfOHfxlzFZravAbmnQ%2F%2BPZJCHOly%2B3KUaRQBOAcZYTAve8j4NF886fezycNltn5se5Mpj5NUjpP9PAZdzR3e6j30G7%2FfdAIGimXTE83aTwhqgEssfspMKfE8sUGOqUBE4GBAk7faVH1csZnb7mq8lkYoe0OzILtSdq99U6xvdzKstq%2BC9joOQJ4THF2g6%2FUC%2F5JthQs%2BzY1va9VlRYWcbzyQM1N7l1Oaz5p7Xh9vRs%2FIziCO6DfFCBzSUjqLgvzEvFbAT65EyZuiYRaLUeGoTbSozi%2BYtvGCKUD2chsggZj%2BESyjJD3TJ9B2AI4zH9X75Dq1N%2Bi0AdhBVb8%2BNlWhmuwzeRd&X-Amz-Signature=f6a22aecb7969310331aa352b303a1fe11769e77104596b7f6a81bc7781c6ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NGJNNCH%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCyhmnMKAnzvEZhok%2BmvjYMLryHcuRAK03Hviy06vn9bgIgfwuWN3Ed4f%2BfOLR0ki0SZOTZO8riraBclPctZeILdskqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGGQj5gyDq7Fwv3SoSrcAyIUpyK7xajsOqLLG65VtQhcEmirJhXTqRDNr0ePMCrbWz7bgpUSJBeoG70xaNWnhGXuS0nkIwmSc1q8liiNQofi7n%2Fb5yD9tHyDqCX4YD%2F3LFY9ug0y8qWKAyP0J3s2EhZBiEPIzfYulvbl3AeEoSlfv4MheWTnGPDbDKtpPswbglqxHFkZxP%2B0CltrH62Ud6BGR0EGsDvrPkCgnxtAW%2Bi%2Bz%2BlkfKRi41rl2DQ60UPWLKZxnMn2CLhnrEbarPKY%2FyEOtd9CBsGa1TtqX62buJhpOEG5VgUxp96naFOmxRGt0MxeQ3FmCUJ5%2BOvjB9EmmA224NGzWx4j1BvUYVHqHM%2FStS90%2FSuQIrYUauaXZK1jagivK1cs%2B85tCCwQKbcssk4rDY5lXVqP1z6aDMDkqFlC21k2t8NJzJHsz%2BHNbyM%2B5JN0Xhr7Kklf0boWbiplagwdjCAGpspXMNSwXjlDe9wQZ20%2Fwzknxjq2iYvx2k9cBJmnZcQi1wAHCL%2BHgFyNe8vo3eLarhh%2B8rWaQdSmYQQAvTYNuuXCy4Ln7MMASNJ6Lr6ArzwYjbM3iCoaEsPcmNeSyJ2ux8KIceOk6RFFzBoiX6bDLJ0cgz8FdAiVxT%2FgSix2gWbjX3LCkMtUMJ%2FE8sUGOqUBFJ23ID3AguAgeLYmW7Na%2FYka0W3X8g%2F0Sdsz3LjfEKc3V0vYSeBnwPrvCt%2BxrWDsEaXReZzeNma5tI6qchFKzfPwH92jOm9OAUyf%2Bne5Bt6Gr%2B6TlKLsHLM7Ps2%2BmfD8QqY6KGfv9xJ235lwuQkDOd4Tmx%2FgIUk7aJJIoEwQk5zjMFH9IZF8PBrr3tT8UMVnYLTKut04s%2F6NrlEQZKGb0UnXybMm&X-Amz-Signature=0bc5f187494fd3068750fb72e7075cf4fba37e4d75a31db91fecf7721c512c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
