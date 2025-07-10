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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAY4A7V%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVMfMs%2FxmOoJ5lQs1xqWFSBgCeLNztIncnDuZCzqIgtAiBCPl%2BCQI2h21%2FmLoA3R3l5hk7gLwo%2FD%2B051pBuddZG8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0rVmWaIKLc%2FctUyKtwDApUJOv363ZNE8Thd1FfJ2uE%2BVOmDgWBcbDzm7TTixuVToFsR7QioebpqggiUQD0e2x%2FLhbfSFNFzT6UROX2%2FfyLPp8vaJrtb4rLOaGfnu7J2FIIaFjOJgV6%2FJu8C8uApJisIcWgpfVLpQwZhpTPmJud3RHGOYpTJFVWJtVUQZf2iDVt3Fz1Fa8X%2Fc4wR%2F%2FkpNv%2BrKk8IwWLtE8EgwQermzSiMdtFmf8X6LKheVNyf1Ae7pJpFxMHiy3qgUHSmZawcQC0NqahrT7k1g3jhsR%2BXWlJMHl0EeQjnUXO27f%2FCdE1IhDOYUGnHPTx0rgsEJ2QcZ9xmqskU23fqgP0s7OXN%2BobnMIikwCSywu0uEy3U5KwFZ31J%2BOz3w7csbWrzVbh69YbYmveCkUHqqGFW7p51xkB8vJrdXImgNve3NLuagh0J3jkFXjP%2BEasuIVUijjmXU3z0%2BEpF8KFdtTE29HP2XG0LNVH%2B3Nc5NsYqFY7skqcOSgKKOzUkiIYuRQH%2FrKRCpSFuVmSNDtQo%2Bui4tp4o7qEf%2B0J3xbbtlLNrgLvCV6o85gl1fJklPDVol%2B24YLz9zbyTA0CX4wymnwLYF%2BqXL%2F5ULlYk21G2wRgwmkn72pPQSoXEtYrKZwatVkwn%2F6%2BwwY6pgGS0F2eTJAcQCqC9qgyFN%2F1tLvW9v10fMecAOppPOnZsKEJRXTHVnUY0SFEApSMB%2FlZfNXAAYhOdDuGdo%2Bm%2B5AhTz4hUCrOyF8j7xfP%2Bicix6VFZocQh1IeSdibQwznqCBqBXFZ98vkWmQZRqKa1YfVy68bWvNg87JGbY0oGi1mtLpMVkqYfZYqbdgKhYG7rprQ2NuofQ3ungtmNeJyS%2BG9ystk1nwy&X-Amz-Signature=fa8378a8604e8b67266a5ef68ace4434a2cefbdb4d844cfa896723c9703729f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAY4A7V%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVMfMs%2FxmOoJ5lQs1xqWFSBgCeLNztIncnDuZCzqIgtAiBCPl%2BCQI2h21%2FmLoA3R3l5hk7gLwo%2FD%2B051pBuddZG8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0rVmWaIKLc%2FctUyKtwDApUJOv363ZNE8Thd1FfJ2uE%2BVOmDgWBcbDzm7TTixuVToFsR7QioebpqggiUQD0e2x%2FLhbfSFNFzT6UROX2%2FfyLPp8vaJrtb4rLOaGfnu7J2FIIaFjOJgV6%2FJu8C8uApJisIcWgpfVLpQwZhpTPmJud3RHGOYpTJFVWJtVUQZf2iDVt3Fz1Fa8X%2Fc4wR%2F%2FkpNv%2BrKk8IwWLtE8EgwQermzSiMdtFmf8X6LKheVNyf1Ae7pJpFxMHiy3qgUHSmZawcQC0NqahrT7k1g3jhsR%2BXWlJMHl0EeQjnUXO27f%2FCdE1IhDOYUGnHPTx0rgsEJ2QcZ9xmqskU23fqgP0s7OXN%2BobnMIikwCSywu0uEy3U5KwFZ31J%2BOz3w7csbWrzVbh69YbYmveCkUHqqGFW7p51xkB8vJrdXImgNve3NLuagh0J3jkFXjP%2BEasuIVUijjmXU3z0%2BEpF8KFdtTE29HP2XG0LNVH%2B3Nc5NsYqFY7skqcOSgKKOzUkiIYuRQH%2FrKRCpSFuVmSNDtQo%2Bui4tp4o7qEf%2B0J3xbbtlLNrgLvCV6o85gl1fJklPDVol%2B24YLz9zbyTA0CX4wymnwLYF%2BqXL%2F5ULlYk21G2wRgwmkn72pPQSoXEtYrKZwatVkwn%2F6%2BwwY6pgGS0F2eTJAcQCqC9qgyFN%2F1tLvW9v10fMecAOppPOnZsKEJRXTHVnUY0SFEApSMB%2FlZfNXAAYhOdDuGdo%2Bm%2B5AhTz4hUCrOyF8j7xfP%2Bicix6VFZocQh1IeSdibQwznqCBqBXFZ98vkWmQZRqKa1YfVy68bWvNg87JGbY0oGi1mtLpMVkqYfZYqbdgKhYG7rprQ2NuofQ3ungtmNeJyS%2BG9ystk1nwy&X-Amz-Signature=55234b30c6b87f7803125a5c8e0427b0188958743998c43d95f48b407a4862bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAY4A7V%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVMfMs%2FxmOoJ5lQs1xqWFSBgCeLNztIncnDuZCzqIgtAiBCPl%2BCQI2h21%2FmLoA3R3l5hk7gLwo%2FD%2B051pBuddZG8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0rVmWaIKLc%2FctUyKtwDApUJOv363ZNE8Thd1FfJ2uE%2BVOmDgWBcbDzm7TTixuVToFsR7QioebpqggiUQD0e2x%2FLhbfSFNFzT6UROX2%2FfyLPp8vaJrtb4rLOaGfnu7J2FIIaFjOJgV6%2FJu8C8uApJisIcWgpfVLpQwZhpTPmJud3RHGOYpTJFVWJtVUQZf2iDVt3Fz1Fa8X%2Fc4wR%2F%2FkpNv%2BrKk8IwWLtE8EgwQermzSiMdtFmf8X6LKheVNyf1Ae7pJpFxMHiy3qgUHSmZawcQC0NqahrT7k1g3jhsR%2BXWlJMHl0EeQjnUXO27f%2FCdE1IhDOYUGnHPTx0rgsEJ2QcZ9xmqskU23fqgP0s7OXN%2BobnMIikwCSywu0uEy3U5KwFZ31J%2BOz3w7csbWrzVbh69YbYmveCkUHqqGFW7p51xkB8vJrdXImgNve3NLuagh0J3jkFXjP%2BEasuIVUijjmXU3z0%2BEpF8KFdtTE29HP2XG0LNVH%2B3Nc5NsYqFY7skqcOSgKKOzUkiIYuRQH%2FrKRCpSFuVmSNDtQo%2Bui4tp4o7qEf%2B0J3xbbtlLNrgLvCV6o85gl1fJklPDVol%2B24YLz9zbyTA0CX4wymnwLYF%2BqXL%2F5ULlYk21G2wRgwmkn72pPQSoXEtYrKZwatVkwn%2F6%2BwwY6pgGS0F2eTJAcQCqC9qgyFN%2F1tLvW9v10fMecAOppPOnZsKEJRXTHVnUY0SFEApSMB%2FlZfNXAAYhOdDuGdo%2Bm%2B5AhTz4hUCrOyF8j7xfP%2Bicix6VFZocQh1IeSdibQwznqCBqBXFZ98vkWmQZRqKa1YfVy68bWvNg87JGbY0oGi1mtLpMVkqYfZYqbdgKhYG7rprQ2NuofQ3ungtmNeJyS%2BG9ystk1nwy&X-Amz-Signature=9f678e216ed7a8724fb83e89fe98ba39c5ff28adcb86abbbe596186a9403f90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4FVVWJM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFi2Iey0NqDDTzGY1%2BvtDmpd0wN7Hup2S1vJKJV7OH1yAiALQ2x3fWcbIHyu1M1J7tWiqYTRhGlBKxOk9SY8SLGL%2FiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeoTPCuadBDtxGQXKKtwDNyeErlO%2B2HoGhoyIcGqLL7gbM0%2BnkJhlZuj8i8bmvBRGspt2GaGvA3p%2FUPJ88ImpnmMBNT6etZaxsbwMhQoo%2FYGPmTwAUTOrRWeT%2BAW3ztesQa0zQap%2FTB0k8FJAlB6rgDPbxcSUsX0Fg4s0bJI8ZlHb3XqIDpMQzNQq3%2FZ4M%2B8YlYucw%2BrGy0SmiBDcn6I3kUJf6f6jEQyVqgufxFnHv0EtJVSYnFbqWjA37r%2Bzdzk3IxxrbqlOc3l664z3EitZX8TiS2sFD%2BH2544827yI4WYE4Ccq95JmCjyf6yR%2FDkzRveyNiucJBpa7Iih1XnW4%2F83IJaWF1yrHCe3UX9VFFrEEhZtvRQyFUUsKQJOZbjBCa%2Bhs9lsBhWzzfWwzlpLIo3jWxNH6CfFcvmFUWM0bFOFrjwmmkg%2Fu5QRRLkH59W0hNcuSGkobJpr7w95ObugkcEHWHRWHNHcrnqyll2u4hRrgraeWn7AQSB0kAA%2Fxt0T9JcvBeivAoF2XFTv3vWN3wRfSszKsvAtk06cZ6wVjrcvtqiLSMJdXL8W82BcWT7OROYoJslKPRVNR6DqgqESF%2BbM8Oq7Ppy3LyeNBN4WhMkvYPDrYst1zbu4db7ij4IglhjqbczVRxT70drkwif6%2BwwY6pgEQXBWDOuIOJJWVoB3jUfbj2%2F6oAJhKNnHsLUX6UmE3XtVIdG67hf0hE6ILouuMkiw6bfN9pvuRLGXZmJgJpwob5NDMQDZ%2F%2BaBnjw%2FnbiXm0pbsL9scJut2qMCY%2FF6Ab83POxBVGgX%2FzbBxQDCiWPEyxR1QsmMW%2FcwKLUfz4stSrPFGNWhjDnvAL92I0hYS72yqmzP6kCbcMANMia8DuuCDFnSFX8DC&X-Amz-Signature=8bf1acfa0de505a79506f213d53fa461fc003f6ef26b971137007c9682e3a467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6VECFZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T140950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP5alHj6xVMMYKM4JGA1c7X1xqgH9a2TficiA3op53PAiEA5lnz4o2tamCNt%2Bfwy51yWaf3%2FYst0Xaj1xfF%2BTpoqdkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQdyb0fMXJx1TW%2FfyrcAxifl0o0gK9%2FuJ4eTxO36l2W9BGXX2VblHGkHmhb24MWmcjwPN2FylgWRTTMgVwjrG6VOde%2BcYe0B5fNF7h6X9W1cbq1bY5%2Bp7I75DR9aVzswV9D39nNojkCWUJ%2BfI8vTb%2B4erE1TytTgpDMTcvZGcFSci6cFXlYgjAuI5IH4%2FbglcDLOGhT%2FdzJOv1NhT6%2F%2BRDsj7AT3pFkMQL8uR56pXyIIxjEbL9DosEXamK3tSoXH32cO9Sa0bQcMYHqM63K%2FuVYunRaUyLxX8%2BmaQneKtPUUFHXbgH1X1xxolA%2BonM%2FKzez5N74ZWsDgzXFTcHfOw4yHLxCtp2njPWc4Tpyg%2B6FubQ0lstdKsYRlWys6YBo2EscO1etMDy9tV59ZHR2XZlk8w8lUC6X%2BGg3fJPr0TW8HW0%2F4R633MdfRuR109TizpcwX6f%2BfuQ3WU5ukPhwfLRX1BnlruW28m5AF3H3v5PBJZIrRuUGzNd4P1kJAUaNgXUqS9f0Gbjl1IS4D54LCP%2BcNaCkp2y7Nj2NUrlKRhukeo24nDP77ilw8Q8c2STxGVNl1YY05DQ6HW1z%2F8fy1iFkTziMjWa9Kn6UE6LDnlLsiRRtKELtIoW4gfYf3ujbivKUWNIXISYikWn7MOn%2BvsMGOqUB5wOKHfPmBfvzWXDo9fODIG2ZYnVm1NTuuGiKTOo0c5JEnDwTzjNJ%2BqsI87mb7zjoG%2FTerORS479F6iDPK2lYUIGIg%2B7%2BHg3TeEERldMyQCiALhkb7%2Bt3HTMkBhXdB%2BoTCDhDm7DLJEOvo%2BfEvmv8oXcj9R%2B36bpczf2AVjhw1ZNu1anxNUtfgUPxRfzF3PT29jCmEj%2B1QQ99OHEbtysPzyFdF18M&X-Amz-Signature=1fa183badac7ed2f70563cf6ec0fe80e41c467b2877895f5b47f406fea3072a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAY4A7V%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVMfMs%2FxmOoJ5lQs1xqWFSBgCeLNztIncnDuZCzqIgtAiBCPl%2BCQI2h21%2FmLoA3R3l5hk7gLwo%2FD%2B051pBuddZG8yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh0rVmWaIKLc%2FctUyKtwDApUJOv363ZNE8Thd1FfJ2uE%2BVOmDgWBcbDzm7TTixuVToFsR7QioebpqggiUQD0e2x%2FLhbfSFNFzT6UROX2%2FfyLPp8vaJrtb4rLOaGfnu7J2FIIaFjOJgV6%2FJu8C8uApJisIcWgpfVLpQwZhpTPmJud3RHGOYpTJFVWJtVUQZf2iDVt3Fz1Fa8X%2Fc4wR%2F%2FkpNv%2BrKk8IwWLtE8EgwQermzSiMdtFmf8X6LKheVNyf1Ae7pJpFxMHiy3qgUHSmZawcQC0NqahrT7k1g3jhsR%2BXWlJMHl0EeQjnUXO27f%2FCdE1IhDOYUGnHPTx0rgsEJ2QcZ9xmqskU23fqgP0s7OXN%2BobnMIikwCSywu0uEy3U5KwFZ31J%2BOz3w7csbWrzVbh69YbYmveCkUHqqGFW7p51xkB8vJrdXImgNve3NLuagh0J3jkFXjP%2BEasuIVUijjmXU3z0%2BEpF8KFdtTE29HP2XG0LNVH%2B3Nc5NsYqFY7skqcOSgKKOzUkiIYuRQH%2FrKRCpSFuVmSNDtQo%2Bui4tp4o7qEf%2B0J3xbbtlLNrgLvCV6o85gl1fJklPDVol%2B24YLz9zbyTA0CX4wymnwLYF%2BqXL%2F5ULlYk21G2wRgwmkn72pPQSoXEtYrKZwatVkwn%2F6%2BwwY6pgGS0F2eTJAcQCqC9qgyFN%2F1tLvW9v10fMecAOppPOnZsKEJRXTHVnUY0SFEApSMB%2FlZfNXAAYhOdDuGdo%2Bm%2B5AhTz4hUCrOyF8j7xfP%2Bicix6VFZocQh1IeSdibQwznqCBqBXFZ98vkWmQZRqKa1YfVy68bWvNg87JGbY0oGi1mtLpMVkqYfZYqbdgKhYG7rprQ2NuofQ3ungtmNeJyS%2BG9ystk1nwy&X-Amz-Signature=fb352b64e0bdc5c50b2ac06a0075aee45ca8edc65317ca5e8e532eab36ebd6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
