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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZYL7HT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxu3jBEjnMjlZXvfS5biPGmFC8mvVmucuxXi%2F%2FDJGyhAiBtoc6BqVR9HhFLtYTPHSfmFknZvnWNvsf0s04GtWlMvyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMrWfE15byyXG6vAWLKtwDGrbOwKGvZ8w9158SOiPsqVdvkxB2RE0q4pbxFdIaNCXFOY59hvUHXq7iIPTPi1%2FnZ%2BG1fCtcSTQMRnkU7fUL4e1Rda%2FK6it26lDup%2BbdsKJGb37IqVQpGXqHoOQfJ7LwZ%2Bo1nNXed7MKJtXfH1d1YuEsDgSXsDkJb1jTWbxU7NgB9EbL%2F0fTpIYkJlW7eN81aEYfxm%2BhUh5NFP6bEXv5KSLsS66QOrSPdVUaZ6gojwAsltQm31m%2B1G5FZbIwPrmTpHzmklA9eZhOp%2BnDSUl3wSaakJ1NbIaQtAMKfPlvbvA%2Fbwx2Eud0N9AWC%2BThAyd51B8EPpSBXdrxzUXc45WItn6KysH3uDFKKdBbqk%2Fm1ic8sD2%2BAJyw6rlxbU3L7VnRHk55Nwplh47vIEcO%2Fh%2FwbCQIM2lGVUMgV7rqb9cSwMd%2By%2BCx2ChYDyG2tJDMgUYxR3xL2EQaUNdAanSCEYVb3GlDLKDhdEcVdt42W57Ef4xmpuYz%2FHwlM5KdreqBHVXgtX2NdZYeoCYJo3zgtB7VWHq41m94%2B%2B%2F25fbdhM9%2FS4lB%2BHmOdvuswxb8uZITsWKjmdZrGCYXF7AMH82B4Ewf%2BLJxjiJb8DXojJkTpIc3lEbFjDO2cbKgcY7qGIQwyY%2BHwAY6pgHFoOwkgyQyJ1xupE7h19DMXT2SJ%2FcRiCMMDMVb%2F50lq6OEyUZWgCGbQNhe%2FvVzBb3DPrkfz0bIZVRSXKWkanw5sxcm7jeD%2FUSKkFrEerYHgKttYZi7vtWBLc4uyo%2FL3i3CWiuDs06bxtnL94ageOi8n2K1kEVgfg3ER3i0zv8jNHQnwTIWZ0n7JqhfBIKnKRKL2WGv%2BPkj1pqtPL0XVNkuo5Mw8TlG&X-Amz-Signature=6c22b54a6efacb2a8db9dba59ba77e8f81050f8d7f593120a49c0c90e86508e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZYL7HT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxu3jBEjnMjlZXvfS5biPGmFC8mvVmucuxXi%2F%2FDJGyhAiBtoc6BqVR9HhFLtYTPHSfmFknZvnWNvsf0s04GtWlMvyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMrWfE15byyXG6vAWLKtwDGrbOwKGvZ8w9158SOiPsqVdvkxB2RE0q4pbxFdIaNCXFOY59hvUHXq7iIPTPi1%2FnZ%2BG1fCtcSTQMRnkU7fUL4e1Rda%2FK6it26lDup%2BbdsKJGb37IqVQpGXqHoOQfJ7LwZ%2Bo1nNXed7MKJtXfH1d1YuEsDgSXsDkJb1jTWbxU7NgB9EbL%2F0fTpIYkJlW7eN81aEYfxm%2BhUh5NFP6bEXv5KSLsS66QOrSPdVUaZ6gojwAsltQm31m%2B1G5FZbIwPrmTpHzmklA9eZhOp%2BnDSUl3wSaakJ1NbIaQtAMKfPlvbvA%2Fbwx2Eud0N9AWC%2BThAyd51B8EPpSBXdrxzUXc45WItn6KysH3uDFKKdBbqk%2Fm1ic8sD2%2BAJyw6rlxbU3L7VnRHk55Nwplh47vIEcO%2Fh%2FwbCQIM2lGVUMgV7rqb9cSwMd%2By%2BCx2ChYDyG2tJDMgUYxR3xL2EQaUNdAanSCEYVb3GlDLKDhdEcVdt42W57Ef4xmpuYz%2FHwlM5KdreqBHVXgtX2NdZYeoCYJo3zgtB7VWHq41m94%2B%2B%2F25fbdhM9%2FS4lB%2BHmOdvuswxb8uZITsWKjmdZrGCYXF7AMH82B4Ewf%2BLJxjiJb8DXojJkTpIc3lEbFjDO2cbKgcY7qGIQwyY%2BHwAY6pgHFoOwkgyQyJ1xupE7h19DMXT2SJ%2FcRiCMMDMVb%2F50lq6OEyUZWgCGbQNhe%2FvVzBb3DPrkfz0bIZVRSXKWkanw5sxcm7jeD%2FUSKkFrEerYHgKttYZi7vtWBLc4uyo%2FL3i3CWiuDs06bxtnL94ageOi8n2K1kEVgfg3ER3i0zv8jNHQnwTIWZ0n7JqhfBIKnKRKL2WGv%2BPkj1pqtPL0XVNkuo5Mw8TlG&X-Amz-Signature=36ae9431c934f2cd2a208a2cacd5a45fcd18bdde8eb126255b2c9345be3291e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBIU4NL2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnd%2BMCk4dFhIPMB%2BKm4pyKzCE82n6ynqMbSo66rjRWzwIgQnNsqEStqHDCqcJTjgOvYFwB6aMxyNzm042IifqW0Ikq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDKD8fzctZg8xs%2FvzlSrcA1DdawkZJ%2FYZaqWvlB9DAo%2F%2FeEWrARREkzJH9%2BoCeHAV0IPcAv2pH9GGaOLiE6ESGpvih1J7bmaB2R2AznkIBM2mMBNxb5hBHIP3UWJCrRBnb%2FI4YSNSCAodiNgdpWMTcDhNWqHEVTyksP5OETuK%2BgAhcClS5y2UTp7BSCQFh8CZD6ldf0XeTNDVAifb6zz0s%2Fy87vUm4hF4XzuA39BH9qd3v7pbaFrXLQtLBEEJWqjG6d3E1aqgfusp%2BlriP%2FMxmBkLl630vIARgsusFh3QMr9lIGgKLgA87fr5eCIgj0kOX1Z9h07mmLFgwHiPrmMUm%2Fa2%2B006Cs2M2wEAKawhl3uDLAAutq%2FG9FaxnajGM0qThzRPRqF3klmiqx71g7vFo3WUu3rtUV%2FPon9qvEHw9XG2Vr9pnIlCSq9es1EV759rWkwbEuSqYB4U7dOWnXJkOvSlABSVRGiEGTpf11rYro33icVXqGnGInOAN53f%2B4F3u8Iv%2BYd1B9OPKqypkrStwwvDzHUZnaFYk5fomQD4IyqsW6JFTbsTkqD7rYvVUfUCGyx38J2WmT1Keszx6hbZpVPs1NMfku%2Fv7HKP%2F0S2hZ7cSu4RBLX5WywGIKAhY6I6tEcNtMMRc%2Fp0NrB4MNmOh8AGOqUBNtFSYvf1d1vG%2FtOr0qTjQYnKt9WYxhgkJ0q1seVwdSZI8wx0g%2BNepnQdkaGyLyhEXjiS3JsJfPulzJG7EaygJjyvSvFWcdqr7V64g0LttfAN2S1VQe73WBMKZjIgIh8fNK0rZAoU8S31evohB45rH%2FLu7Lx1DCHR3%2BgHk6uc6QT6YLxeMXj1sNagtxk%2BL4s8xkduOeSKSE4QyClypQRS83KZmTLz&X-Amz-Signature=86e0d998cf530debc8f8a7f48590a1848b770d1e2ffa43ba035b82858ec041d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3KM4KM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUc0o5igIYS9HPyUHWYgqhPIpE4LsFhJ7A2KdNB8QQxAiAM5bT%2FUlRWmickMBon4AL%2FPwNwNrH3Un8k%2Fm2Knrcogir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMZGHii9yEX0vV8R6zKtwDuGWjA2nTLFvCiNf%2FcFnVVhoBlgzWb%2FwGHV9siGwhX%2Bplv2aEo5toNV23G5Hy1%2FThjucUmnYJM1LcWy8hQxj%2F1CPmfMbCJHcJh649IOGysHhxbXa8yizwRCpbxaqqqdWAwDdV1nsC3ylje9cAWkzfYTi3xc9ns5n8eDqHhQZSbVXiuRNNag%2BNW7Z3RCZbBoG3klQ%2FTv%2Feaeyi2HKpsAcgAc1tqikJYASzQQJBQaMgYriR%2FQcktc5spsCqGtdieroSGpUwz5iZ2WftWVoCuladFlWw9fprTWxx29iabWKheMeyJ0HDXDLPPAC%2BYk3gGK%2F65d0X6Q5HKfTawzQVdIWeWfONGuVKxKAgxdPuSLWsE%2Fj02jNUv%2BQaMog%2FgdIzDbesfnI4Reu8CPzZTyfKWP%2Bj%2BVvbSyohr%2BE6a4kcrWHnMHhu1Tcq0%2FEfTPZDglGxQZDab3wo4MaQ0CZhpAYFzasEOCJx36YYoip8de6Myr3vIcPP7FrjzVZGZUjCSjJUNj2heJ62WEqQBwsfeNf%2F6WCIslw6HSOEfTnymwMFaoXpLNENn0hAKzzw6DFBe7kYCM%2FGkYzLrtITNj0ufqR69%2Bg7C4g1QdPLN7%2BI%2Fv1GXwXyDgCHJa%2FHI5oyu5HCzK0wp4%2BHwAY6pgEVVxiyiP9KUC8nyxgvSyBMRDdXdedkNLF0NX%2F1vkv5kC%2BOCm7OEcPluNWUa0eBWdbiWJ8z%2FgFR%2BtB5VZ44qTF5y3PzVzovWx%2FxaJg%2B3sZsuw6vCjtIb%2BMxpF%2B1T8cXCFHSiqvq33VjbzT7Na%2FXFQdUbuW7%2BUkasIvaEW4w%2FqSEzz5GSB91IQr%2F6tGkYv5YV4VtPwYUZUAlqB%2FDlQQMuEnZxoM%2Blb8x&X-Amz-Signature=3a2de38a98ad6dbfeecbb63ad7250e4484cb117463b9da19543c35c26bd86363&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZYL7HT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxu3jBEjnMjlZXvfS5biPGmFC8mvVmucuxXi%2F%2FDJGyhAiBtoc6BqVR9HhFLtYTPHSfmFknZvnWNvsf0s04GtWlMvyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMrWfE15byyXG6vAWLKtwDGrbOwKGvZ8w9158SOiPsqVdvkxB2RE0q4pbxFdIaNCXFOY59hvUHXq7iIPTPi1%2FnZ%2BG1fCtcSTQMRnkU7fUL4e1Rda%2FK6it26lDup%2BbdsKJGb37IqVQpGXqHoOQfJ7LwZ%2Bo1nNXed7MKJtXfH1d1YuEsDgSXsDkJb1jTWbxU7NgB9EbL%2F0fTpIYkJlW7eN81aEYfxm%2BhUh5NFP6bEXv5KSLsS66QOrSPdVUaZ6gojwAsltQm31m%2B1G5FZbIwPrmTpHzmklA9eZhOp%2BnDSUl3wSaakJ1NbIaQtAMKfPlvbvA%2Fbwx2Eud0N9AWC%2BThAyd51B8EPpSBXdrxzUXc45WItn6KysH3uDFKKdBbqk%2Fm1ic8sD2%2BAJyw6rlxbU3L7VnRHk55Nwplh47vIEcO%2Fh%2FwbCQIM2lGVUMgV7rqb9cSwMd%2By%2BCx2ChYDyG2tJDMgUYxR3xL2EQaUNdAanSCEYVb3GlDLKDhdEcVdt42W57Ef4xmpuYz%2FHwlM5KdreqBHVXgtX2NdZYeoCYJo3zgtB7VWHq41m94%2B%2B%2F25fbdhM9%2FS4lB%2BHmOdvuswxb8uZITsWKjmdZrGCYXF7AMH82B4Ewf%2BLJxjiJb8DXojJkTpIc3lEbFjDO2cbKgcY7qGIQwyY%2BHwAY6pgHFoOwkgyQyJ1xupE7h19DMXT2SJ%2FcRiCMMDMVb%2F50lq6OEyUZWgCGbQNhe%2FvVzBb3DPrkfz0bIZVRSXKWkanw5sxcm7jeD%2FUSKkFrEerYHgKttYZi7vtWBLc4uyo%2FL3i3CWiuDs06bxtnL94ageOi8n2K1kEVgfg3ER3i0zv8jNHQnwTIWZ0n7JqhfBIKnKRKL2WGv%2BPkj1pqtPL0XVNkuo5Mw8TlG&X-Amz-Signature=0302af9a7d9f94a7eab091aeec2581d2d1f2391fa2f2f08bdb5e549f6349b620&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
