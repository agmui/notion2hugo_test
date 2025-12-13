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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGXNVW2%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDJPlGp2FOreZuWcF%2BGSrgVxYgp93364Sam5MDVj4hm8AIhANhrfwTLyZVWbh0Tl%2FaCXBfiFuls2WJ7dBWYNPCrakVrKv8DCBIQABoMNjM3NDIzMTgzODA1Igx%2FP7ZQ60jxkSaTs9Iq3AOTqqqw71n48vdhQcJqefDGf2FdbNonKwVgHQ5TRRLUy5KJwaJNVOQMO0hYkYWgOfRr6iIDG1GoASnAlDkzUqnoJK%2B633fWnyx1%2FdaC9zwrOGLkidDpmVcpokxudUeubC%2BurPGbzXxHACBPoTa0pRyTBSQyzVKaRdtVDYETckzq16LErvXiLfhqnlSiKERriSi1BREHNTLYXUoq6Z6RGmmWRCzsLgKY9mTjI5MS0WZ%2BFERm1lg4j0avFp1FDbrxYGBQE%2FxqgCflirt7wdQiuCnHUMJfxCy7iPQsD2WXCnFn8abc8xYI562CbGGii8UXLpVe2ktudsetTTi5KJL%2FkZ10XEG7uaYsnvHntg9921lGCOoewdMXNJXzXUfU4uzx2NrYRdqsoMZnRDO3tWr9k%2FF1uy4rbMBAAJxMqjLEkzhBEwb4FV8sYwXAXgW589sacWrcetbgSODCOmVX6xj6IGsvZH%2Ba5RUvTW2ijBkvyefG9BvfO6klJaOSS0tH8eqEjNXI%2BPNUeNNADH2WiYov%2BPQYhaQ54Bb0d%2BJ0nTIRDkRLwxW3CPkf2P2qEN5rGc4xJQ2Nmxpi0ipQQ1kEwVS4ZkJPI%2BOGAH%2FS5LA2FI0ZSEhXD4wwCs%2FIJsjyf5IZuTCI9PLJBjqkAa8d%2Fi4sjbmOjND19wNVH3z%2BhesZ%2BlMkg5a5l1P0nXaMacJp4v9R4LozbiNT4WHkzuP20jKRPbFuzKRGaAt5HnF1OyuUaecoZaP7SKBQ529lDrYE6a9jbaHlNMlTnWIW26bwrAPcSxZRgGEfWJjUP2No6t%2Bsq9tTpE%2BrshG2DEhAKbZKVyLac0U%2FUShCNjSvypsscW0k%2B05wSindkpwvGEaGxbxr&X-Amz-Signature=2d0582b56714b8bf9bf2432edd9d505b36cfa1f4b4e2add446d62d68eed2a2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGXNVW2%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDJPlGp2FOreZuWcF%2BGSrgVxYgp93364Sam5MDVj4hm8AIhANhrfwTLyZVWbh0Tl%2FaCXBfiFuls2WJ7dBWYNPCrakVrKv8DCBIQABoMNjM3NDIzMTgzODA1Igx%2FP7ZQ60jxkSaTs9Iq3AOTqqqw71n48vdhQcJqefDGf2FdbNonKwVgHQ5TRRLUy5KJwaJNVOQMO0hYkYWgOfRr6iIDG1GoASnAlDkzUqnoJK%2B633fWnyx1%2FdaC9zwrOGLkidDpmVcpokxudUeubC%2BurPGbzXxHACBPoTa0pRyTBSQyzVKaRdtVDYETckzq16LErvXiLfhqnlSiKERriSi1BREHNTLYXUoq6Z6RGmmWRCzsLgKY9mTjI5MS0WZ%2BFERm1lg4j0avFp1FDbrxYGBQE%2FxqgCflirt7wdQiuCnHUMJfxCy7iPQsD2WXCnFn8abc8xYI562CbGGii8UXLpVe2ktudsetTTi5KJL%2FkZ10XEG7uaYsnvHntg9921lGCOoewdMXNJXzXUfU4uzx2NrYRdqsoMZnRDO3tWr9k%2FF1uy4rbMBAAJxMqjLEkzhBEwb4FV8sYwXAXgW589sacWrcetbgSODCOmVX6xj6IGsvZH%2Ba5RUvTW2ijBkvyefG9BvfO6klJaOSS0tH8eqEjNXI%2BPNUeNNADH2WiYov%2BPQYhaQ54Bb0d%2BJ0nTIRDkRLwxW3CPkf2P2qEN5rGc4xJQ2Nmxpi0ipQQ1kEwVS4ZkJPI%2BOGAH%2FS5LA2FI0ZSEhXD4wwCs%2FIJsjyf5IZuTCI9PLJBjqkAa8d%2Fi4sjbmOjND19wNVH3z%2BhesZ%2BlMkg5a5l1P0nXaMacJp4v9R4LozbiNT4WHkzuP20jKRPbFuzKRGaAt5HnF1OyuUaecoZaP7SKBQ529lDrYE6a9jbaHlNMlTnWIW26bwrAPcSxZRgGEfWJjUP2No6t%2Bsq9tTpE%2BrshG2DEhAKbZKVyLac0U%2FUShCNjSvypsscW0k%2B05wSindkpwvGEaGxbxr&X-Amz-Signature=f5cb05430a2c4a19e9cf4f793374cc3c3c1a8bc5a3aac7f475bccfc5d546d4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGXNVW2%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDJPlGp2FOreZuWcF%2BGSrgVxYgp93364Sam5MDVj4hm8AIhANhrfwTLyZVWbh0Tl%2FaCXBfiFuls2WJ7dBWYNPCrakVrKv8DCBIQABoMNjM3NDIzMTgzODA1Igx%2FP7ZQ60jxkSaTs9Iq3AOTqqqw71n48vdhQcJqefDGf2FdbNonKwVgHQ5TRRLUy5KJwaJNVOQMO0hYkYWgOfRr6iIDG1GoASnAlDkzUqnoJK%2B633fWnyx1%2FdaC9zwrOGLkidDpmVcpokxudUeubC%2BurPGbzXxHACBPoTa0pRyTBSQyzVKaRdtVDYETckzq16LErvXiLfhqnlSiKERriSi1BREHNTLYXUoq6Z6RGmmWRCzsLgKY9mTjI5MS0WZ%2BFERm1lg4j0avFp1FDbrxYGBQE%2FxqgCflirt7wdQiuCnHUMJfxCy7iPQsD2WXCnFn8abc8xYI562CbGGii8UXLpVe2ktudsetTTi5KJL%2FkZ10XEG7uaYsnvHntg9921lGCOoewdMXNJXzXUfU4uzx2NrYRdqsoMZnRDO3tWr9k%2FF1uy4rbMBAAJxMqjLEkzhBEwb4FV8sYwXAXgW589sacWrcetbgSODCOmVX6xj6IGsvZH%2Ba5RUvTW2ijBkvyefG9BvfO6klJaOSS0tH8eqEjNXI%2BPNUeNNADH2WiYov%2BPQYhaQ54Bb0d%2BJ0nTIRDkRLwxW3CPkf2P2qEN5rGc4xJQ2Nmxpi0ipQQ1kEwVS4ZkJPI%2BOGAH%2FS5LA2FI0ZSEhXD4wwCs%2FIJsjyf5IZuTCI9PLJBjqkAa8d%2Fi4sjbmOjND19wNVH3z%2BhesZ%2BlMkg5a5l1P0nXaMacJp4v9R4LozbiNT4WHkzuP20jKRPbFuzKRGaAt5HnF1OyuUaecoZaP7SKBQ529lDrYE6a9jbaHlNMlTnWIW26bwrAPcSxZRgGEfWJjUP2No6t%2Bsq9tTpE%2BrshG2DEhAKbZKVyLac0U%2FUShCNjSvypsscW0k%2B05wSindkpwvGEaGxbxr&X-Amz-Signature=08f565daf0494388f1c32f0b63ff538cd6f7c161784470bbfcdc3b051932e953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD3C3LM5%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICv5M1j3cPPycDzCdWa85ucYiVTWnGpfD53HpNtklhmQAiEA0JJ8DDpYMlHe7TVWKK7BAoFtYAY%2F%2FbhH2MtyCRXnmn8q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDLpp9CrQwyCWfZZaKCrcA9fZvfHwWkjGW4eSNR8XUPI5%2F8AP8CBCscPXy3AtmMMbJvxBe6MjTjIuct0c7nUOfLiTLkfxOP7L3%2F0T7YFmC1Fbnr%2BflPs74OUSJ6JxXakCXT3UrBuQikbVkdNYqEz0LY4uYN8KFKfttCuvrf1zshEkmOuFHSsFTCqe%2BDcQjZVuspDjhyN2NSa%2B%2FDTIvsfLL%2B5Rb4%2BbHjDOpBdKXlIeDABw93oY80j%2FRXIyuh2ju5i%2BCEKgF2tx3rLLStExDDjXhAB8qMFCFvjuSRqMLz7MoNzNBdfOwYtKDIRunmkidVa2CvL7R8OrUMAVCWa%2ByQzXP2cRLkbd37CDM1dJG35peTnqVzQv66UXHvnmz1k7NGhhLBLgj0xaAYzNEQ78dCzHPIMn3dZJ%2B3h4hCrP%2FbPgV2YxZrOMNTq1CApEADfz5cPuDg3LJ%2BPYOt0dLUC%2Bpe%2BAXTjCWUccDDpuDdnFrdcx%2FTHIar%2BTI2jY%2FSd1Cp9eWIC434v8UdFsc0UvEuVxq4cyTnRdGYxEO4Vdkqz72irlQfkE94GlQLYWWHX9Q1%2BYB3Gk53W1Y3fvVHC23DYJQvtQfr97SS9hULhdT9zT7uip6XfHDymswMG67toYEg%2BS79eQM7MGXbjgTwt5B06YMK%2Fz8skGOqUBfjNUGMXTR6ve4hWP49ZwZVXXKAEDF4w9%2BBADC5w6GcNV3mGwfbpTUfTxQROK%2F6ddNKxxYYGwd9j761%2BkSDQByPid3E%2BVIS9eA3EdANVymw%2Fd1kb30i6phQWpbUe3W0XfTQ4e0u%2FZtWpqgYFo5dgArEfHKS9aAmQT8J1otxI%2BAtWXGwS%2BX2w05o8IvRqeV2y7IlSujqFPNB0t4BO00M50fwFUzFnB&X-Amz-Signature=68d0676c3cb7345a0e852a2afff4d1b63bf07fe71e9e3813eb805d5fbc293b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXFZTISB%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQD%2FOjqGtonVy%2F9y5tkqY8A3haGv9wgSeAuT0V%2FfD8AHTwIhAK6IRpsSr4bJ9W6rHA4vqO66tVWJR6m3g60B3n21S6VMKv8DCBIQABoMNjM3NDIzMTgzODA1Igzd93xSlcBhgbcbh5Aq3AN0vD9MbRSNrd%2B8GPEGYNoLnXhOLwqeuTttMxLNgw13X83674GWGg6GGdPtaFfz5mu9fPyyL5yYlEb4kU6edAj8OX0H45jCQOIrGwxcn6II1sxD1Sh%2Bgxd7BqESG5Iqgv281kL0TL6LUF0b4cOj2uza67I%2BmERyc1m1%2Bp101MmogPjdfrpw2sleevSl%2F4IwzhBq4itTSxJ7R4bPSu3zh9YZz1wuNNghl2WhHvxzfeae83OVs7K5wFvODZ7cdihcSUYAwaGhav3lBw%2BIzn5HsncBXhSWxUzKaH0zSmbqX4gF5Ghn%2BohgNQXNOzVVBQ4WnZ5Pw5xenLxdjfZBo3ij7Cs1s0isBPYef44qQTG1m%2F4uotm3FUrgAvDMLh5Sn376c5wftmk4wGfR143RVA4j0nGAVQ294QeGW%2BMblJ%2BmxYSKUXtxACN66%2FU3%2BSqHK4kiAnHVSHPtJws6VMGAoYwIjSEIsDI3p2foQnzKWFSd9D7PzZZiQ53zB%2BB5ZCjZ7Shlr2UsprtO43%2FqMdctqAXPh5%2FCjT6p1P3Ly0e7%2FYkl8%2FinvkmJq4iov0cnteWV6nHEzeX3RmBtOV%2FOBiy1x0FHIAWJRKrj6Dck0D2M6UyXeWntuRwJebuqduMh6xPT5zDq8%2FLJBjqkAf7OzMGfZrijiLh0v%2BmdIiRd5l20I61tRBZmdrglZlAOTp2uC29zzsMNvx39g1H03uW8%2BVBJkSt99IafHipQpF0CTq2JyUfqykjQAsVsWviFL%2B4ZXZS3xT9sgt7AWSvkzrxf8VoP0gnc8I9WxWtrYfXTRQ10Z%2FufCFVW7LDoZCu0iOXdwoe34xmnD5lCphGbFhRjQqDXOgjPLaBSMODB3FNaqrL2&X-Amz-Signature=2ed062e5bc04f3d58f3b68db315b3fb4487c196d7ad96e4a2330f7337fe878b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGXNVW2%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDJPlGp2FOreZuWcF%2BGSrgVxYgp93364Sam5MDVj4hm8AIhANhrfwTLyZVWbh0Tl%2FaCXBfiFuls2WJ7dBWYNPCrakVrKv8DCBIQABoMNjM3NDIzMTgzODA1Igx%2FP7ZQ60jxkSaTs9Iq3AOTqqqw71n48vdhQcJqefDGf2FdbNonKwVgHQ5TRRLUy5KJwaJNVOQMO0hYkYWgOfRr6iIDG1GoASnAlDkzUqnoJK%2B633fWnyx1%2FdaC9zwrOGLkidDpmVcpokxudUeubC%2BurPGbzXxHACBPoTa0pRyTBSQyzVKaRdtVDYETckzq16LErvXiLfhqnlSiKERriSi1BREHNTLYXUoq6Z6RGmmWRCzsLgKY9mTjI5MS0WZ%2BFERm1lg4j0avFp1FDbrxYGBQE%2FxqgCflirt7wdQiuCnHUMJfxCy7iPQsD2WXCnFn8abc8xYI562CbGGii8UXLpVe2ktudsetTTi5KJL%2FkZ10XEG7uaYsnvHntg9921lGCOoewdMXNJXzXUfU4uzx2NrYRdqsoMZnRDO3tWr9k%2FF1uy4rbMBAAJxMqjLEkzhBEwb4FV8sYwXAXgW589sacWrcetbgSODCOmVX6xj6IGsvZH%2Ba5RUvTW2ijBkvyefG9BvfO6klJaOSS0tH8eqEjNXI%2BPNUeNNADH2WiYov%2BPQYhaQ54Bb0d%2BJ0nTIRDkRLwxW3CPkf2P2qEN5rGc4xJQ2Nmxpi0ipQQ1kEwVS4ZkJPI%2BOGAH%2FS5LA2FI0ZSEhXD4wwCs%2FIJsjyf5IZuTCI9PLJBjqkAa8d%2Fi4sjbmOjND19wNVH3z%2BhesZ%2BlMkg5a5l1P0nXaMacJp4v9R4LozbiNT4WHkzuP20jKRPbFuzKRGaAt5HnF1OyuUaecoZaP7SKBQ529lDrYE6a9jbaHlNMlTnWIW26bwrAPcSxZRgGEfWJjUP2No6t%2Bsq9tTpE%2BrshG2DEhAKbZKVyLac0U%2FUShCNjSvypsscW0k%2B05wSindkpwvGEaGxbxr&X-Amz-Signature=c41107bc224be1f1c3b7060a3193c9fc3581caa700461a69e76ab33b5f07ab5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
