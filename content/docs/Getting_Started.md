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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLVNFPY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIG%2Fp5SC4rzHrK3PVTJu16EBaKaZGMS%2BmfpozFRnmovqlAiBiLYT3lN0z%2F7TdFOr%2FOEE8ZKyCBezFqPVDERdJYDyrBSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HPulnowcYx7iSGvKtwDu4YijW2IU6CavKxfS20%2BzoInv%2FdFROZWklVGsSvlaw%2F2sZPOAQpgrjzRSy01dU9YUY9XKm5BKcU6V0teZuMndoDZeNxRfP%2FjiN1GmzH7w2r3E0MCAFdcUVna07y5S31YqVq3GMtD4yCUNiwonHZu5B9J83kh8WzZ4wF2o18MsW98PExk1%2FKYO79wDSe4uILBA4aBE2z5Irsi45dHT9zgA%2BksEujqQsEKIhDrZ2GSWpVkCM2meBEdt27STKtSv6X%2B6CisBPdyt1s9a3KlFFMSoBOb1mpY60nkv4adq%2BZXkO8%2FQbhOlUL4L2OFlNrUWZvYByjFCnMgFuQQhEzv8c5SAArea4lQMR1bexZT%2BbkSk6HOk8VGgkuRq%2BJeIQTVbI3B3Hv7irQdO69z2hjjjmnNqDFwRNQbYKy6MDSy%2F3nhA%2FZgVyWYcaP1Df%2BM5kdfUO4bVka1dWR1jw7uh6%2FMM%2FoPQ%2FYUcfqdAU2Lw2N%2BKdLGKcZpwRTwY1dYL%2BaRuXv8eKOJ82%2FqI3d6gzlIVYlYkOE3z3Hory91kd8orMTbIhKwgWQKrjuAmMQ1EWHQuZYP5MZRTYts2oLNXAtg8AroCelWphmmLNykFyMftbYHjoFi%2BBu351le4O1R1bOsEq0w7runvwY6pgGObqOfBNg2%2Bp4WQsE4FVFRg%2FzSDixUg7U61uaDMyQfC49rnYXPbEPL0OzZJ3a6GUramYd1cUNh4%2BsLFApCx2%2B6q12zDTdiNHZZ4VZZYE3GEloQ%2BVxeKcbfvzoz5VOqiIku1vxlLgpuwQUfQFMiilYSUT6G4JsV6ihfye5fJ8FTZcVw%2Bt16X7ggmoBOB2xuDLVyViJMl9bTj1nQfIGJlZOPOMKQemog&X-Amz-Signature=28d41e31fcbeb685f2f086a4b705c7f48af173a26806f5793e26acd1297194a9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLVNFPY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIG%2Fp5SC4rzHrK3PVTJu16EBaKaZGMS%2BmfpozFRnmovqlAiBiLYT3lN0z%2F7TdFOr%2FOEE8ZKyCBezFqPVDERdJYDyrBSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HPulnowcYx7iSGvKtwDu4YijW2IU6CavKxfS20%2BzoInv%2FdFROZWklVGsSvlaw%2F2sZPOAQpgrjzRSy01dU9YUY9XKm5BKcU6V0teZuMndoDZeNxRfP%2FjiN1GmzH7w2r3E0MCAFdcUVna07y5S31YqVq3GMtD4yCUNiwonHZu5B9J83kh8WzZ4wF2o18MsW98PExk1%2FKYO79wDSe4uILBA4aBE2z5Irsi45dHT9zgA%2BksEujqQsEKIhDrZ2GSWpVkCM2meBEdt27STKtSv6X%2B6CisBPdyt1s9a3KlFFMSoBOb1mpY60nkv4adq%2BZXkO8%2FQbhOlUL4L2OFlNrUWZvYByjFCnMgFuQQhEzv8c5SAArea4lQMR1bexZT%2BbkSk6HOk8VGgkuRq%2BJeIQTVbI3B3Hv7irQdO69z2hjjjmnNqDFwRNQbYKy6MDSy%2F3nhA%2FZgVyWYcaP1Df%2BM5kdfUO4bVka1dWR1jw7uh6%2FMM%2FoPQ%2FYUcfqdAU2Lw2N%2BKdLGKcZpwRTwY1dYL%2BaRuXv8eKOJ82%2FqI3d6gzlIVYlYkOE3z3Hory91kd8orMTbIhKwgWQKrjuAmMQ1EWHQuZYP5MZRTYts2oLNXAtg8AroCelWphmmLNykFyMftbYHjoFi%2BBu351le4O1R1bOsEq0w7runvwY6pgGObqOfBNg2%2Bp4WQsE4FVFRg%2FzSDixUg7U61uaDMyQfC49rnYXPbEPL0OzZJ3a6GUramYd1cUNh4%2BsLFApCx2%2B6q12zDTdiNHZZ4VZZYE3GEloQ%2BVxeKcbfvzoz5VOqiIku1vxlLgpuwQUfQFMiilYSUT6G4JsV6ihfye5fJ8FTZcVw%2Bt16X7ggmoBOB2xuDLVyViJMl9bTj1nQfIGJlZOPOMKQemog&X-Amz-Signature=da40d4a1d47fe099a137c4b0990ab85a69299567515b88fea01bce5b7b104657&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKLTWIM%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDzDB7bSjLMsPcAx3S%2B8XmGD4l9KTkAVHBV3Hbwkw9O%2FAIhAPUQIDLnCjKnLplKf4EZXPMWsJlV0hlEYxcPm6lf5hJqKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8BG9UwnPBnhvPoRgq3AMuBdYZR79gM%2F169i3AP%2FMc7AfPncDEen1gLiHrLRxLf2cM9%2BuU37yRYkYVTZ4zyJPWFSTZuJmT1fIdzUHURdH5ucsMQgJU54vQXCr65em76Zx%2FhShKV5T2jiquj6ZqVm0a%2FMKv%2B7VDNJ6%2BCezNKXeIuY4jc2RaKYEd1dH9GG3HsN1T%2BCVRl%2BhKmsbGC9g1eMwgyg%2Bbv4kIwlyhlwTzh5g4xL6RSal4jqN66A0lNjUP5Cy%2BkywaMKBCXYIKCw9IxDICHXdsK3v9sU84v%2FCpWaTybqDMw0CnOf9C19LUvlP9L%2BnnE2ANPNsipbYBI%2Ffb1gLzY5O%2Bk%2BvbBC16B2YipBI8SwdJi7PAn%2F2OwZjhuqcsWetBuKgZLLae%2BeJzZGI6MdqHGVsBKFnohqKOehE%2FqBfHFVCK12yCWzQBONpNDWyywyNP2nO2Ga%2FeeWAaZ816W4A9wjuIo6WHCqmVMkUi%2FT%2FqFvasD7khDFvuLpu07MTwsI1mxc7m07p6yC%2FW1cX%2Fe0OLfi0GBnnpTpu4hFKNM%2BXA5snLXDtP2OcnDZYI2lhidladNh6zUtEoc1gxFDOpjNSNjuBwGeJeUG95EUV%2FT0GbsRE3hNag898asice%2FJERst9P%2FosBEpYvonJOgTC8u6e%2FBjqkAVSySglgmCk%2Fk%2FGbdLZzhob64mpWlCkSB301VtqQTUxSmJPx1MG7TKHnne40XNFQC9amsrJcxsI3F2Q4T65vP4x8RC9hUR%2BqqauDB%2BIY9MiBAkcwL7H%2Byo2GhshX1T5QE88MY0D6GGyVecnsq0QT2rl5W%2BL44L2W%2BmcwnDSGGl%2Ban0GxhoxJwo5%2BrT8yu50B22zeUFpuS7J1rxoSXfkDblF%2BtKGL&X-Amz-Signature=5ec09350838c14ea11cfa638603389d4f8b7ca7502af86c6f96dce2464ca1f70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGDJAGS6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD%2F6GTixnjV3dVRz7I1EViG8NVsMB%2BiA6HmeyHCfvmAEwIhAJ0QPrOqvYc47kf8%2FNB5%2BxNYJNlCp0YZzur6nAkWHKHsKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4zNjBukbzsViW6Iq3AOfaVpuwc2kXVu2FoVKuCRBZzQtOFRT9knz6TNncYswim%2BkvOAyMKjxSxgEvovHh7HfGiXfOJkaQjYEV%2FCZ0EwGnYZnAN1SY3A%2BGdjdRnhnS57Ikc2dIE2fjpYBEB2lBZaqXd6EDGOV%2FhmKh7F%2Be1ybCnyh%2Fq%2FvA2%2Byi4HFEKasdMdRNjsYImn3x2WqCh7%2BpS6BSdPmau61WjhnDFMJQTxsoEFbCXxpyYxWDL6oGGzj3yNzGgtiI2MrsHPYmpjD3z5H4Qc%2Betuz39ORNxZjz%2Fhk0%2FHRS2rky2HSvV0Y2u4c1VBIicavQ7z6qJTX86FlY3iTjAbN%2BbNIabv0A2T%2Bn5TvY%2FeBegt84PIp9M%2F6lY7vogkJF%2FzEZh6MarmvbMco%2F%2BFjlkEWWgv143wJGu5EMuaeVrQRwAN8C1O%2BS3RwpMkfRs3wS%2BR8rXfqrp3Jnvr4rRAZyV6vS5MiJuLLioEqyJpGDWdMpAQGPHqmq22t7lewVXa9UkBXY37KRFz7hLNM0nMcWHY5x36Qb1T2P1KXSG2w4eHDvLQVuK4tDMhOo92KjR3wqvO0eWaNPmqlk7OQCyxCs8GTCopKC%2Fd36XNkxzGRpm%2Brn8u7nWzE1ko%2B%2F1vl0gHPqOFBnu0zOtgK%2FzCou6e%2FBjqkAXmtwPQc0OElBWsVNn0OYSao20UZFEE%2FPjLzx9NYpiQIcqiNhoIWBFOeVQutR8uB1Z2rwh%2FFFugmvVyUG4n%2BBIxF7l6GWewF%2BWa4qly36BRVvPZUW7HSEatDA%2BUxwDpiMUocx0BvT7HgNftiyMidNbIqkXJ6dlxhDLkAQ7QwYofqk7JES9U2f%2BsIfA6f8dUPTjyCgHPo790PmBgXoiMaAfaoVics&X-Amz-Signature=a8257138d3849fdb017dc4ecec072dcb381053479233c17609c8434958b32ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLVNFPY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIG%2Fp5SC4rzHrK3PVTJu16EBaKaZGMS%2BmfpozFRnmovqlAiBiLYT3lN0z%2F7TdFOr%2FOEE8ZKyCBezFqPVDERdJYDyrBSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3HPulnowcYx7iSGvKtwDu4YijW2IU6CavKxfS20%2BzoInv%2FdFROZWklVGsSvlaw%2F2sZPOAQpgrjzRSy01dU9YUY9XKm5BKcU6V0teZuMndoDZeNxRfP%2FjiN1GmzH7w2r3E0MCAFdcUVna07y5S31YqVq3GMtD4yCUNiwonHZu5B9J83kh8WzZ4wF2o18MsW98PExk1%2FKYO79wDSe4uILBA4aBE2z5Irsi45dHT9zgA%2BksEujqQsEKIhDrZ2GSWpVkCM2meBEdt27STKtSv6X%2B6CisBPdyt1s9a3KlFFMSoBOb1mpY60nkv4adq%2BZXkO8%2FQbhOlUL4L2OFlNrUWZvYByjFCnMgFuQQhEzv8c5SAArea4lQMR1bexZT%2BbkSk6HOk8VGgkuRq%2BJeIQTVbI3B3Hv7irQdO69z2hjjjmnNqDFwRNQbYKy6MDSy%2F3nhA%2FZgVyWYcaP1Df%2BM5kdfUO4bVka1dWR1jw7uh6%2FMM%2FoPQ%2FYUcfqdAU2Lw2N%2BKdLGKcZpwRTwY1dYL%2BaRuXv8eKOJ82%2FqI3d6gzlIVYlYkOE3z3Hory91kd8orMTbIhKwgWQKrjuAmMQ1EWHQuZYP5MZRTYts2oLNXAtg8AroCelWphmmLNykFyMftbYHjoFi%2BBu351le4O1R1bOsEq0w7runvwY6pgGObqOfBNg2%2Bp4WQsE4FVFRg%2FzSDixUg7U61uaDMyQfC49rnYXPbEPL0OzZJ3a6GUramYd1cUNh4%2BsLFApCx2%2B6q12zDTdiNHZZ4VZZYE3GEloQ%2BVxeKcbfvzoz5VOqiIku1vxlLgpuwQUfQFMiilYSUT6G4JsV6ihfye5fJ8FTZcVw%2Bt16X7ggmoBOB2xuDLVyViJMl9bTj1nQfIGJlZOPOMKQemog&X-Amz-Signature=d249bfc7150afa076ec1b308d38b45f03f4f1b401c5d41870717fbf82e19d78c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
