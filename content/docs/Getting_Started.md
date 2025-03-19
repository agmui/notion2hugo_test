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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAWWY34X%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD2%2BTKknxp2kB5QMVCnJpJ9RyiDEMKFB4Ontd81Q0kb%2BQIhAJr0uVcA4CUT8g4D8s64bxGxud%2BUQWhHY8pptxAo4F2vKv8DCHQQABoMNjM3NDIzMTgzODA1IgxqdBB%2Fdi5pSmv7Wl0q3AMWQJfx%2Fb3HVhn3msvofnP%2BxIoiKLmt5g90R9iC3RqVgm9TLQySnG3l7irCom%2BYSgq7c1kWWijCp8SrXYgxQW%2FmuAQvFJVMV1hSI7CozXbcZKGDfgryKMMZxTpegxJlUQfoWNflI3lnuvNAP%2F16jSnshLXU%2F%2Bf60ZMVUrX250rklh5zKDyeyXkLVcg%2Bso59xyCF3J9QNXjuZ%2FdHZQUx5asdOAePgkhg9I4XxJziZ6aGXgiHHpdEpl5O86QGC32M7t0gFRSMIRUTvJShD%2FFVoJKxRIIP%2FWzrQL2b8KSWwRFPkNFyuhGGv5D%2BS2iavxg7OqBwWvwmFv1ZJAhZvEeC7SHy9PZ4rAmqYABRo7vZvutC7ZcGCUqKVWcHA51HyQKvXpASUaT3DSDkTcns4fx3TGIeB6p69AUFSe5pJm%2BKYJVFr7SDq%2F7iUXpLSMiVTlM%2BHWxRoKMi4RA8pSxdmKdpAC3DWpjGl7zwqAHAKA6NnmO48cdFNqqTzMUq57sf%2FgKqQN6gsSZXt9WbN%2FkCkxd0ppJUzgeJlb6L%2BRDsNyq65r9IV8OutxUlMsRbxpgB1Akeer0EkYcnjRKNxNOrffMu2UytDKon3yj2IQYauvVDZaxEboPccLNlBuewTFEgvDCRwOq%2BBjqkAcJzF4%2FKh3hw7mBIJJeGrSdXF8XyPgE9spgwwCdhUsjzpq0k%2B%2FgITzKfjagMC3i0v0ergD7w6Okvfyt5Gfp0h3Uxhq2i7PgroWtAzGGirZ5UMO4oZVCeGmrViFoZlvWiRzvSP1F%2BNsBoolXeFeREkoqGpYuLIJZRMaPL5apDH2MPxv72ya5epan7x1kzFYzYP20k07IHYw4%2FsVYtvolITC%2FZxWxu&X-Amz-Signature=3d74755e31c17a1c9ca9e37b6e5b40ec19229030d6bacbb049294c0a46a5117e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAWWY34X%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD2%2BTKknxp2kB5QMVCnJpJ9RyiDEMKFB4Ontd81Q0kb%2BQIhAJr0uVcA4CUT8g4D8s64bxGxud%2BUQWhHY8pptxAo4F2vKv8DCHQQABoMNjM3NDIzMTgzODA1IgxqdBB%2Fdi5pSmv7Wl0q3AMWQJfx%2Fb3HVhn3msvofnP%2BxIoiKLmt5g90R9iC3RqVgm9TLQySnG3l7irCom%2BYSgq7c1kWWijCp8SrXYgxQW%2FmuAQvFJVMV1hSI7CozXbcZKGDfgryKMMZxTpegxJlUQfoWNflI3lnuvNAP%2F16jSnshLXU%2F%2Bf60ZMVUrX250rklh5zKDyeyXkLVcg%2Bso59xyCF3J9QNXjuZ%2FdHZQUx5asdOAePgkhg9I4XxJziZ6aGXgiHHpdEpl5O86QGC32M7t0gFRSMIRUTvJShD%2FFVoJKxRIIP%2FWzrQL2b8KSWwRFPkNFyuhGGv5D%2BS2iavxg7OqBwWvwmFv1ZJAhZvEeC7SHy9PZ4rAmqYABRo7vZvutC7ZcGCUqKVWcHA51HyQKvXpASUaT3DSDkTcns4fx3TGIeB6p69AUFSe5pJm%2BKYJVFr7SDq%2F7iUXpLSMiVTlM%2BHWxRoKMi4RA8pSxdmKdpAC3DWpjGl7zwqAHAKA6NnmO48cdFNqqTzMUq57sf%2FgKqQN6gsSZXt9WbN%2FkCkxd0ppJUzgeJlb6L%2BRDsNyq65r9IV8OutxUlMsRbxpgB1Akeer0EkYcnjRKNxNOrffMu2UytDKon3yj2IQYauvVDZaxEboPccLNlBuewTFEgvDCRwOq%2BBjqkAcJzF4%2FKh3hw7mBIJJeGrSdXF8XyPgE9spgwwCdhUsjzpq0k%2B%2FgITzKfjagMC3i0v0ergD7w6Okvfyt5Gfp0h3Uxhq2i7PgroWtAzGGirZ5UMO4oZVCeGmrViFoZlvWiRzvSP1F%2BNsBoolXeFeREkoqGpYuLIJZRMaPL5apDH2MPxv72ya5epan7x1kzFYzYP20k07IHYw4%2FsVYtvolITC%2FZxWxu&X-Amz-Signature=d09bcf71f16ffe35b8bb0495463389c52bf646af82202d1273694e0169f572e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AWWTWB2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIAD1vZ1V5WhY22I%2F8kISpWt24hs8HR6xwu98gMmsZIwKAiA%2Be01s02oRmSzvxfoVLS%2BDX%2FA%2B1nmB9JiPrJgklZ27nyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMUxHo3eALd%2FnO0IGLKtwD10eymhYy0HriUI5CRb5OeTPPzAdp5cA0%2F5kZtRVTo7OmwM%2FqhKFAqt2cHGljfOAiyQyKs%2FPpejNEQ6y7vFmpRxt4SgoPWPuggcxHC5nkb6BdAKN0o8Epr5tuaQoBlvTTfqoEVQiKp07RbZZe5N%2F00HBhwHk27d7fErtT6oc%2FW3AiproWxLZ2TKNpN%2BhGh4lrBaHN8MvGgEwANoz5kAZmmbT6nmMcf49o8sjumzCXNNZyNNIFBxBIujieeN7zfvq8tPcnHqjbXQfR9P0rygoVIyxbqqFK5J0Ys9UgNJXcHudlqqyenK6NJkjI%2BflwGj4lMOMh%2BMyOd7hsUMhqYpYlPnv2hAK9N2L2LlwPYj1ESO%2Ff3RehncuhCdn0%2FUr7Ztw6xI7DSxqxK4XSI69HxDFgfC8T5ZPXInthHfwO4RiP%2FeIWopBhReNcVOOWkSeWwPiRByrJ1Ft%2BTp5%2FhE73k5mcoZfcuJKwaCv0ch2iTaiotQH3tSXKD0rYJ4kKqjRY%2Bl71pxkT6iSI%2FEHr5guTGQdldos08%2FZjmtPCj8g%2FyerEzZw8cvmz2GE6bTF95HloY4%2F0NRANp7LsjZsYBtrW75XFhNRU6w8OwqrXxhTbMyBQ5FmoMJ9hfAO%2FvrJSm1swgsHqvgY6pgECrhP83Wr%2BYIF%2FoGSt8fOJ9J8zFdD56qPZzwpTwxASyYjiOpdwh0yXCape2ysimI8cOjsS20oEAG9R1RznJiy9hNPaQV%2FonUywZHV4HxPUJmF86SbdyXUVvXazDlPzaKfl957Bjg7CXXMG%2BNC5kdkMYiO7UVqs1%2BW7VjgTeHb7ACqmzdEhjTqwF%2ByhRuAIpzIFMZzfoskBJ0R%2FAJbj2V3%2Bom%2F%2B6PcP&X-Amz-Signature=bdd558850e5962909bbb678651b8d71f66b83662d249e8cf191cd39a1e3c7748&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5RNZAS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEiE6i4NiDDebsvT5WFP8TXY59ArAEy%2FN8jF8tXze40MAiB3BZpN%2FNt4AVlFAifn36CArrGs4C7YSAV%2FYOJ5PBmW%2BSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM846YmFr50tPEmonlKtwDzxSqKc%2Bs3yBnJGReRYrBQhRJykzGPMAUG%2BqoaivEg3fpwRpQQL%2FSqXqnjbKtVxjboL8%2FV%2BMCWSn5Oi8IZqN4FSpvllqyMG6S1pMOYEnm5q6mz7IJTZKDqHxX1OemzJoa6B1zuWh6TSNvm9oFftHhxqmRf0ib8fU03QVv9F%2BJlC9kpkoIo3ezXq%2BDrUonfOpIne8InVqEEbMF5b2zVhGanYmEBZHDetBT%2BFaOShyyyMs2vywmAz2Jny7G5r4hJwFlOa%2BX%2B9orhSZ7AJTVFMIr1g0vxgnXiQNFUyb6L8rQRvTb0RSqPX9ur6sLccLBw8gqfP8%2FwbeoPyh5cTig%2FctdZcd5DqvXO9np0AzBzQ3QmxoJ%2FYPpuviIwdpSLTB%2BNghwEH6WKs1MSTZFXHLTZogus3gy9iCWLHSHlC2FVCdPaAkBbMnybCeQ1VIboi4i7iLO%2FCh8x1%2BykxlRiqEnvJCZxD%2BSIyd87tpqsgEKbucMiEuOqdy1tUEgZIMff%2FHO4SKeUrG5qOgi99btgV4ez9IiAjFnf4e0Ws7OlL4UGoRHUtzZ3Xp03yckLAHuudrxKeWUw1HKDSMVhTGbqc4waFOJo17kw3AwVrlYBcDQB%2BELpHJG7ydWQ6XCS8VHxLkw9r%2FqvgY6pgF4JKZX%2BWwk2zUDK0IEVikmnslotT1CCspnpQd8x%2F3vmmdnCNNFpXdX7MF4hzhqFU8TzINtPGQfNw60X4wmiAidkgAfpW7ZKjEggpnqMi5xyeVn%2F2iwG6Nx43Q7Yeg6EUeFZQ7eAOL7J6d0BFlMw6grMvWBB0YqL%2BR1masT9WsE9ccyovb5JHyy1o4sEumDSB0ydkLqcoEJnieKn4UytpAMjOiZhoyG&X-Amz-Signature=8569caffa26e7faa35efa99643f17cfb165c44fa1bff205e8b51aea872ed0fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAWWY34X%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T110702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD2%2BTKknxp2kB5QMVCnJpJ9RyiDEMKFB4Ontd81Q0kb%2BQIhAJr0uVcA4CUT8g4D8s64bxGxud%2BUQWhHY8pptxAo4F2vKv8DCHQQABoMNjM3NDIzMTgzODA1IgxqdBB%2Fdi5pSmv7Wl0q3AMWQJfx%2Fb3HVhn3msvofnP%2BxIoiKLmt5g90R9iC3RqVgm9TLQySnG3l7irCom%2BYSgq7c1kWWijCp8SrXYgxQW%2FmuAQvFJVMV1hSI7CozXbcZKGDfgryKMMZxTpegxJlUQfoWNflI3lnuvNAP%2F16jSnshLXU%2F%2Bf60ZMVUrX250rklh5zKDyeyXkLVcg%2Bso59xyCF3J9QNXjuZ%2FdHZQUx5asdOAePgkhg9I4XxJziZ6aGXgiHHpdEpl5O86QGC32M7t0gFRSMIRUTvJShD%2FFVoJKxRIIP%2FWzrQL2b8KSWwRFPkNFyuhGGv5D%2BS2iavxg7OqBwWvwmFv1ZJAhZvEeC7SHy9PZ4rAmqYABRo7vZvutC7ZcGCUqKVWcHA51HyQKvXpASUaT3DSDkTcns4fx3TGIeB6p69AUFSe5pJm%2BKYJVFr7SDq%2F7iUXpLSMiVTlM%2BHWxRoKMi4RA8pSxdmKdpAC3DWpjGl7zwqAHAKA6NnmO48cdFNqqTzMUq57sf%2FgKqQN6gsSZXt9WbN%2FkCkxd0ppJUzgeJlb6L%2BRDsNyq65r9IV8OutxUlMsRbxpgB1Akeer0EkYcnjRKNxNOrffMu2UytDKon3yj2IQYauvVDZaxEboPccLNlBuewTFEgvDCRwOq%2BBjqkAcJzF4%2FKh3hw7mBIJJeGrSdXF8XyPgE9spgwwCdhUsjzpq0k%2B%2FgITzKfjagMC3i0v0ergD7w6Okvfyt5Gfp0h3Uxhq2i7PgroWtAzGGirZ5UMO4oZVCeGmrViFoZlvWiRzvSP1F%2BNsBoolXeFeREkoqGpYuLIJZRMaPL5apDH2MPxv72ya5epan7x1kzFYzYP20k07IHYw4%2FsVYtvolITC%2FZxWxu&X-Amz-Signature=12be6b0543b98c8db16466c3a7ba51ad6f7dead8c3bea59fbf9eae8732419c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
