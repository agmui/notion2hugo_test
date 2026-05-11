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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKEBQAO%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHveXdtvReBM4%2BpvkCV3uMUbt7wa6DUtDSpDzhH9p25xAiEA1NKUCDtcgawAD%2Bd%2Fxf4li5dDIrzrCbuAu1PaIALZclYq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDFimliLy0LjeJiZ%2B4ircAyzKvAaJQsH%2Fja%2FG4y5GQNdUEwgnoFHFQj4YSmq4eBiySE0kzNEN%2F5pGvxlpnkfMUYLyn%2FoLmcgnnMSatsYgESThSmbDmMaZW2G7qXYy%2BL4ECzor9zjU4dtRwAn%2FHaNVi4Fx6K8j5wI6mDsl5BScb0a3GQSJaJrAHEvaFxjfkw9Oen3FUVKiPZhQrusdtPZD1TcOQkZxacrJSpS5eAMVfb%2FxcQUMD%2BnoodxgMci4%2B%2B3z3Sk8bRNT1grKhkT%2BaHi2bBlPCcHMKvgfKwjYI96%2FRKa9BsEtC53Scv6pHEyRE4tU%2F%2FuB4VDAxDLkj0ySnZg0vbMKIdG0kmJRG7GWWBAt4j5uUXXmaj%2B%2FMdhAd0TKlRxwsgcnITwXmB67%2F%2BAz3Td5N6YW0UC5yXbmCicCheiQq0w0mP8XzXghd4CEL2hzZ%2FlRDTZqk3k%2Bs1SVUucQDrAkHHqqukgi089PZ6bjVGAh2V%2BjHkpjhmw%2BHcolekAZC1MXF0ulM%2F5DTcXK4oHcYh%2FBEYFl7PQAiFW3Y4EcbFdf4So5lSmnavW%2F2cj35f6GWtrLzieqF2L54CRaBTa093972T34O7WdYkpJIWPcJ91L%2FpNC3cyaekmmOqY0vYzhcDDLiBhfF1bp0ybyhexcMNyFhdAGOqUBE145bExDoFvvXxie6iWQfSJp6q%2FFEXEV9mEhRcYVYq7mnIdwBEYHy%2Fc%2Ftx67a4Ef0fFthZlxLMTf%2BV8x4lmTNnzAiHxY9aiBHXjwmXEvcsvHZvy8VzMxlEVo6G5Z7EQ96nuCI%2FNqBay%2Bkjz5W%2FvHD%2FEw5RyLmk6tegYUUy%2BST4AQHU%2FtbppV3SJpul%2FMpi7o4c6aabekW4EclS9tNnYoSOiszA8G&X-Amz-Signature=5806a1523aee714ab493254f06aa554f65fb6724b789ae33f0cb68a19f4ab09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKEBQAO%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHveXdtvReBM4%2BpvkCV3uMUbt7wa6DUtDSpDzhH9p25xAiEA1NKUCDtcgawAD%2Bd%2Fxf4li5dDIrzrCbuAu1PaIALZclYq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDFimliLy0LjeJiZ%2B4ircAyzKvAaJQsH%2Fja%2FG4y5GQNdUEwgnoFHFQj4YSmq4eBiySE0kzNEN%2F5pGvxlpnkfMUYLyn%2FoLmcgnnMSatsYgESThSmbDmMaZW2G7qXYy%2BL4ECzor9zjU4dtRwAn%2FHaNVi4Fx6K8j5wI6mDsl5BScb0a3GQSJaJrAHEvaFxjfkw9Oen3FUVKiPZhQrusdtPZD1TcOQkZxacrJSpS5eAMVfb%2FxcQUMD%2BnoodxgMci4%2B%2B3z3Sk8bRNT1grKhkT%2BaHi2bBlPCcHMKvgfKwjYI96%2FRKa9BsEtC53Scv6pHEyRE4tU%2F%2FuB4VDAxDLkj0ySnZg0vbMKIdG0kmJRG7GWWBAt4j5uUXXmaj%2B%2FMdhAd0TKlRxwsgcnITwXmB67%2F%2BAz3Td5N6YW0UC5yXbmCicCheiQq0w0mP8XzXghd4CEL2hzZ%2FlRDTZqk3k%2Bs1SVUucQDrAkHHqqukgi089PZ6bjVGAh2V%2BjHkpjhmw%2BHcolekAZC1MXF0ulM%2F5DTcXK4oHcYh%2FBEYFl7PQAiFW3Y4EcbFdf4So5lSmnavW%2F2cj35f6GWtrLzieqF2L54CRaBTa093972T34O7WdYkpJIWPcJ91L%2FpNC3cyaekmmOqY0vYzhcDDLiBhfF1bp0ybyhexcMNyFhdAGOqUBE145bExDoFvvXxie6iWQfSJp6q%2FFEXEV9mEhRcYVYq7mnIdwBEYHy%2Fc%2Ftx67a4Ef0fFthZlxLMTf%2BV8x4lmTNnzAiHxY9aiBHXjwmXEvcsvHZvy8VzMxlEVo6G5Z7EQ96nuCI%2FNqBay%2Bkjz5W%2FvHD%2FEw5RyLmk6tegYUUy%2BST4AQHU%2FtbppV3SJpul%2FMpi7o4c6aabekW4EclS9tNnYoSOiszA8G&X-Amz-Signature=a972f4601c758a3ff0ba697823e2b1b152e8cbe55b7a1fefe7d36871e96ca510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKEBQAO%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHveXdtvReBM4%2BpvkCV3uMUbt7wa6DUtDSpDzhH9p25xAiEA1NKUCDtcgawAD%2Bd%2Fxf4li5dDIrzrCbuAu1PaIALZclYq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDFimliLy0LjeJiZ%2B4ircAyzKvAaJQsH%2Fja%2FG4y5GQNdUEwgnoFHFQj4YSmq4eBiySE0kzNEN%2F5pGvxlpnkfMUYLyn%2FoLmcgnnMSatsYgESThSmbDmMaZW2G7qXYy%2BL4ECzor9zjU4dtRwAn%2FHaNVi4Fx6K8j5wI6mDsl5BScb0a3GQSJaJrAHEvaFxjfkw9Oen3FUVKiPZhQrusdtPZD1TcOQkZxacrJSpS5eAMVfb%2FxcQUMD%2BnoodxgMci4%2B%2B3z3Sk8bRNT1grKhkT%2BaHi2bBlPCcHMKvgfKwjYI96%2FRKa9BsEtC53Scv6pHEyRE4tU%2F%2FuB4VDAxDLkj0ySnZg0vbMKIdG0kmJRG7GWWBAt4j5uUXXmaj%2B%2FMdhAd0TKlRxwsgcnITwXmB67%2F%2BAz3Td5N6YW0UC5yXbmCicCheiQq0w0mP8XzXghd4CEL2hzZ%2FlRDTZqk3k%2Bs1SVUucQDrAkHHqqukgi089PZ6bjVGAh2V%2BjHkpjhmw%2BHcolekAZC1MXF0ulM%2F5DTcXK4oHcYh%2FBEYFl7PQAiFW3Y4EcbFdf4So5lSmnavW%2F2cj35f6GWtrLzieqF2L54CRaBTa093972T34O7WdYkpJIWPcJ91L%2FpNC3cyaekmmOqY0vYzhcDDLiBhfF1bp0ybyhexcMNyFhdAGOqUBE145bExDoFvvXxie6iWQfSJp6q%2FFEXEV9mEhRcYVYq7mnIdwBEYHy%2Fc%2Ftx67a4Ef0fFthZlxLMTf%2BV8x4lmTNnzAiHxY9aiBHXjwmXEvcsvHZvy8VzMxlEVo6G5Z7EQ96nuCI%2FNqBay%2Bkjz5W%2FvHD%2FEw5RyLmk6tegYUUy%2BST4AQHU%2FtbppV3SJpul%2FMpi7o4c6aabekW4EclS9tNnYoSOiszA8G&X-Amz-Signature=095895cea07d921ff93c5e1f833457a9e80378cbb49cedc26c7e1bc95b14e8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CSUS7VZ%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIB1l4%2FybpL%2BpCBCbkxKfNDMMChFkrJQHdDQMawi5ZaPTAiEAi7iD6xKpit5QPUdFQQaKrA%2FfLOcNRi59RS0kNbUImrcq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDNkVIS3mnmn1sBUxQircA4E%2Fg2KqNBAMkaFuOYkyNxV1nK9exnlZFehUO9JGVtJIcE7Y5eCc0KMSTu02gCTXbUL%2BM27FcUf11CbUOZ3hdEPaJGFbWIgyYsjivRuQK1I1GC6LPZLqBHlo91Ab5jLkBNDxMqlhEnjNZ1hg0eraBH88nxY9BGBIf5LnxIdEBKwV6U3Rq5nMonPW%2BBOGuhTtD%2Bo9hUwkKNkC0Mf8iIvACjh4%2BKbVwWOeE34v9kTMszQgf8BV58P1LeQ6ZayPlCI3%2Bj9WUgn8OzXTOixSANxhDNLWJQvlvRcVgUqPANZZ26hctye8zGt3saGFpjChDpaBGimcsCIvn3DZXX6TYmZo9lzdoMjpB1IukEqdsyTraUpCHu35wI6MT0YaV0dYJq2stHoIFPuKJxrQ67Q6zlaxOmnO0bwcgWzAALEY4DrHYZ7JgiKeXR%2BTjn9UsQry4ki5LhqsOHWX3dDuBE%2BqkwzrhXA7XaHuzPloMihr%2F9VBXBJDk5UyutWRKBDNEHGeyutPqNKFc1315uRTnK%2B59TtiNTImXSvj0fkQtMNIwXaWrSiyzcuonVDj%2FPU9mK73fQdC3pJHStWA924D11QvV%2FqknAGebveP3Im0mlRHq2ucARY%2BbMt2vLo0w1k4mYCTMKSFhdAGOqUBXP6gFQU2InTSN%2BhJm8vpEYkYudlH0ZBhhFi%2FqaIXIxxy8FKw3mnnWdcmwm7%2FlMjMtNMNlkRZAu1nNgdeBKENjeMkdQV%2FGtF6EWiqu7ncqMJtHnsxITeR0Jmd%2FL5LLFbZka7v8aLkJTLQgephRPhFG770XQnS%2F3CLuJ3xU0v%2BfJnmOWycbOjv7C%2B0ckmwYoGJrkkj9jB9hqfUt4bhZKVBAgKUsEgP&X-Amz-Signature=c5a5b787e85abb62dad6395967100dbe9d283651a79bf4899e8a7c52e2f65259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTNZCMN%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHFooi4Q%2FoqApknj2%2BRpyORBuS3HirBnpu%2Fp3Zc3f5kAAiEAiV2ZXTlZVsNHv79Be2%2B8aBbXPctGEXrXsCq%2BXo2hwP4q%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDJLlUJltAAeZttQnUyrcAzRmV0oFeHtLDPe210bxNtaK9hzHZmYAOK5oNtblTCgYpU49KCbBJNYHrEk30iBD6mHUg8MRZ2MbxpDxUT%2FirC91R930%2BCzJtR26SyfDBxTQUdKw4xG3%2BmlC1u4w%2BhgthTkucR9r%2BBGlcAR1rF%2FreC50cVRaaNixSeK4%2BrkETV9BZloJ83v1JRwQbDnGKjE%2B9qZT6Shh3jbYNadEqTa0pc0qYENpRBe27t2K0Fq2EzxhfHgWWH9Nd7QeYiqE7g2FJ5Sa0qHmM1GxHDu%2BvGAbrdW0FvDPUk3IakwbINSOlRx8ynZv2BcDAzRbJCIw%2B08y8pvmLYGcFPJ4wXcUdHfaq5mOfKOqH9FPy9BGbNB%2BiIn%2FrcnuQyggXkkcNHMZ9B6b5Go5KxNmKFxfsDI23Ko9r2J9cVh1peUVO59iMattvXbyXzvrsWlOGcztwX2bNudNMAzzEbrNwXRhTiKA%2BY%2Fp9IKbrurs%2FdtVGlRZoHiVM9mMFl0GHGYKQ%2Fij92aaxY8JX6xHSKgjM%2F7lD2kKfsvOECYeaAnVwBb8vT%2FlxRfhxJF765VFkoSQGxoV5fPTkIVbxmI06ND6Zcs%2FsCJT0fF6VyVnCmnflrTaIBbif4oT2jlMLfTCuwPJ7OAhhOTCML%2BFhdAGOqUBvoVjXULoilNfZQaJNq%2BTwXbf457nG6XD2ywOWUOOJt4qR0vbhsyUMrKr4j1DEYN%2FbP4%2F8uZTittkccLYtYZWXeL4Aj%2FnZP8OK%2BQrCcZBrKI4R8zKLlUYcJh1tJn%2F7Mq3P642BGrr8cXiEF9yJTiDzExUCinBgvBU1W3ymE8Vq22fm8%2BOidkwjRjJzO72%2FgSye5dq%2FE7hqTtHqeAEj%2F00mnelqEhP&X-Amz-Signature=361ce4e06093c0bc1f409f13fb51700a24003e905d52c05977270a9b9d916b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKEBQAO%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHveXdtvReBM4%2BpvkCV3uMUbt7wa6DUtDSpDzhH9p25xAiEA1NKUCDtcgawAD%2Bd%2Fxf4li5dDIrzrCbuAu1PaIALZclYq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDFimliLy0LjeJiZ%2B4ircAyzKvAaJQsH%2Fja%2FG4y5GQNdUEwgnoFHFQj4YSmq4eBiySE0kzNEN%2F5pGvxlpnkfMUYLyn%2FoLmcgnnMSatsYgESThSmbDmMaZW2G7qXYy%2BL4ECzor9zjU4dtRwAn%2FHaNVi4Fx6K8j5wI6mDsl5BScb0a3GQSJaJrAHEvaFxjfkw9Oen3FUVKiPZhQrusdtPZD1TcOQkZxacrJSpS5eAMVfb%2FxcQUMD%2BnoodxgMci4%2B%2B3z3Sk8bRNT1grKhkT%2BaHi2bBlPCcHMKvgfKwjYI96%2FRKa9BsEtC53Scv6pHEyRE4tU%2F%2FuB4VDAxDLkj0ySnZg0vbMKIdG0kmJRG7GWWBAt4j5uUXXmaj%2B%2FMdhAd0TKlRxwsgcnITwXmB67%2F%2BAz3Td5N6YW0UC5yXbmCicCheiQq0w0mP8XzXghd4CEL2hzZ%2FlRDTZqk3k%2Bs1SVUucQDrAkHHqqukgi089PZ6bjVGAh2V%2BjHkpjhmw%2BHcolekAZC1MXF0ulM%2F5DTcXK4oHcYh%2FBEYFl7PQAiFW3Y4EcbFdf4So5lSmnavW%2F2cj35f6GWtrLzieqF2L54CRaBTa093972T34O7WdYkpJIWPcJ91L%2FpNC3cyaekmmOqY0vYzhcDDLiBhfF1bp0ybyhexcMNyFhdAGOqUBE145bExDoFvvXxie6iWQfSJp6q%2FFEXEV9mEhRcYVYq7mnIdwBEYHy%2Fc%2Ftx67a4Ef0fFthZlxLMTf%2BV8x4lmTNnzAiHxY9aiBHXjwmXEvcsvHZvy8VzMxlEVo6G5Z7EQ96nuCI%2FNqBay%2Bkjz5W%2FvHD%2FEw5RyLmk6tegYUUy%2BST4AQHU%2FtbppV3SJpul%2FMpi7o4c6aabekW4EclS9tNnYoSOiszA8G&X-Amz-Signature=1278c0d9c65522253024d780204a7eb0ae6ed81702fdc3c2906819ae53fa314e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
