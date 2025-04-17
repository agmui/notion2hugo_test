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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNGGZCH3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHQuzFVZlNIxU73pu1DFgRsIYU1vj87fxaGChn3tyiMAiEAq4ibnc%2BPqbwWfftuFtZBIYPuWiMbRXUVrvZwpoWit9wq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDKUUS9rwDHRZMi4QaSrcA2SXOoeRJAlpr7JviPcykHT2RaTrh6K57LO4rafCbkMatDDTdJkPpIxrZL5plvOg2nPFHvrxXyW88r%2FVnxQ7KwBpo5ju7D54JktfZa6NM91Nf%2FV0AU38Pd4fmQ2U0GHQdSyF6lc3N%2FLdRpGQwfs6stn42Z1K9oF6C4HmpYcJPKV%2FY4Vt2yMxzyQWH3ugp3%2Fp0c5oCVVqR5hmtNX%2BkGyPbi%2BORvpKZ0%2BJjd1Eo4fojv0G7DNwzB7WiyeRyVEQnHblnyA%2BsV0gHxFjAzMvPaG8px%2BL5BTpbfYAMbKFVCnbRrtX3xaYBejaUrXY3le28mh0cYTsESQKhUOKZyK%2BnKtct1mUs4mdL3DHvEtNpl%2BVXgKN%2Bicbh%2Bp2VpPXC2oLHgMydnmSSKb5IxkUEATFuWoDtIMO6uchOP0W7RrWiC%2Bl%2FVYB8OfNPnRDvTNSLGdj8Dff2Od7BPbvZ%2Fx%2BVfVEIpLtyCD5qScqE1IlnTpC3y3Y3bGnnRHoNhCydMTaInGjMuqUm0okl17b6Kumbf6E8NUHvMxnPZz%2BNrJbsvKBLBtAjSvwsRbZJzxylNLTMPKNVQ9m6lQT3X%2B1dKh%2BjaaHybd5S11kgr0FKHQeBH6kLmjpP6kdgkCBhH8CG6s7rXsnMJuUgsAGOqUB3A%2BtnQMW5TTDZP2odiuuXpQzVWiT7gQFE6jQK3XnI45IZNmgJuIGMvlZPFDjBzcnYntFpdJnZ1sx1FXM%2F1iv%2BaGMYOvJSGbzZ0F4%2FHdNdB5Try%2FS%2BB6Od8AvQkgXyqDpYUOIajt9TE6Ieh%2FKZaN%2B8qaR7%2B4eLf7MBmuB7l3yVCAbVcgEOstyUcRiaeDrPo5%2FNLfHc28dqVJzagHPDmU5FySVuwkl&X-Amz-Signature=8e72a8d12abc0f9fa88ec25d9bd81e426c01bf51d9419a9ce65860c86d9ae09e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNGGZCH3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHQuzFVZlNIxU73pu1DFgRsIYU1vj87fxaGChn3tyiMAiEAq4ibnc%2BPqbwWfftuFtZBIYPuWiMbRXUVrvZwpoWit9wq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDKUUS9rwDHRZMi4QaSrcA2SXOoeRJAlpr7JviPcykHT2RaTrh6K57LO4rafCbkMatDDTdJkPpIxrZL5plvOg2nPFHvrxXyW88r%2FVnxQ7KwBpo5ju7D54JktfZa6NM91Nf%2FV0AU38Pd4fmQ2U0GHQdSyF6lc3N%2FLdRpGQwfs6stn42Z1K9oF6C4HmpYcJPKV%2FY4Vt2yMxzyQWH3ugp3%2Fp0c5oCVVqR5hmtNX%2BkGyPbi%2BORvpKZ0%2BJjd1Eo4fojv0G7DNwzB7WiyeRyVEQnHblnyA%2BsV0gHxFjAzMvPaG8px%2BL5BTpbfYAMbKFVCnbRrtX3xaYBejaUrXY3le28mh0cYTsESQKhUOKZyK%2BnKtct1mUs4mdL3DHvEtNpl%2BVXgKN%2Bicbh%2Bp2VpPXC2oLHgMydnmSSKb5IxkUEATFuWoDtIMO6uchOP0W7RrWiC%2Bl%2FVYB8OfNPnRDvTNSLGdj8Dff2Od7BPbvZ%2Fx%2BVfVEIpLtyCD5qScqE1IlnTpC3y3Y3bGnnRHoNhCydMTaInGjMuqUm0okl17b6Kumbf6E8NUHvMxnPZz%2BNrJbsvKBLBtAjSvwsRbZJzxylNLTMPKNVQ9m6lQT3X%2B1dKh%2BjaaHybd5S11kgr0FKHQeBH6kLmjpP6kdgkCBhH8CG6s7rXsnMJuUgsAGOqUB3A%2BtnQMW5TTDZP2odiuuXpQzVWiT7gQFE6jQK3XnI45IZNmgJuIGMvlZPFDjBzcnYntFpdJnZ1sx1FXM%2F1iv%2BaGMYOvJSGbzZ0F4%2FHdNdB5Try%2FS%2BB6Od8AvQkgXyqDpYUOIajt9TE6Ieh%2FKZaN%2B8qaR7%2B4eLf7MBmuB7l3yVCAbVcgEOstyUcRiaeDrPo5%2FNLfHc28dqVJzagHPDmU5FySVuwkl&X-Amz-Signature=5d8a62275ffd6450d8d7eb7c5aafe3790fb5d80ef1288a742f50c2f9d81a2edc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LK27AA7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNcs3wIikIS09Jc6idIy0iNDDnwqrO5oQFrQEINey1ywIhAJ3d7dsauFHbegyzvPB3tJtZs6k2EKED2hla98DcubVtKv8DCFYQABoMNjM3NDIzMTgzODA1Igz1NEIHM4Sk1cLxx84q3APYtoTpwEPC3wRrFypK2WIgA3pywbwihRe3LE1ivu1Vh1HGtEUfOxTCfpQHQsl9uh9aFvEzPOdCG7TqPV8Xo9LwF43nsUJ4vB7NIc6m719cYI3BpCnHQeaj3AkxT93HQY7IELNnoj0uFuj01EtYAU5leYt1T1XSr0MYkKaI2wfC1Js15SckK8oVuFygVlQ7XKOIQHfcazVL0IENa7vQbKXTg9O%2FJ%2F0M8wf5W5rO2wngeMZJZXUMlvF9gSYCgUAu79UBisEOxUltfGE51l39bUe4ofMoE9EH9EDprnTQEIbH4t48jwYHuFWSoTIGqAcXc9doP9S8eJ8hS6jp6CQJbiW7L4wSXlIxF4aNt4HXg15tZMP4v1ZF0QU%2FzPQMYNK%2BRg0g8M1gSX32fgAESrDWWQoePPjuipvVs3dGEeENETEGl7z%2FdfrxvWidjeozCBbb0plHizulilCVOPpy%2B5H0p%2FUFiReRecucnrG0ySTi0oRFSDEefZM%2ByC7wQLTtfopCTwxMf7cjXHDD8twXjdVy40M4YKKrTR%2B%2BzXkrWhkvhrLQYED84PshLhJVAbi92SeeQGfYWP6Ov0GMLM4EqGd1hhyfOTVVIw2vzahjuy8NqDwLPYHHSW%2FjtUJbBXse8DCxlILABjqkAaiYe5lIZQUjSS6uOvd998sf7VD93MoXqFpii0NmGIrUVtr9Qjp8yXiIv2mpSqfGfOWeXI27CvzCNh32aU%2BW0l8Iue9RAlCKtX%2FChh9TrzCAMQBopNuVyHaM2BU98zwEI7cFhh%2FMAWjXet3YuqIV7owgzZ8dmKQJLrFIJi67EKUCBeF%2F4kIy3vj6LLV5pnsZCKwaNlz29HhNNSQVFMntz0cSGoK4&X-Amz-Signature=b371ecb616c04a1d5ef5fe1062f3f66cc9b62e117ad1b13c2d94f3956fc41afb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MNM6QVC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAElD5QX2wyuTz2s696Z6ProI%2BB06CosAml4xD%2FoHm6EAiAf8xPhjqIVXPB3%2FhQU%2B4iDDorfP7KYKceloAtVlzP7uSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMgqpxadLlLbG%2BVUjmKtwDZhqQ1hiLcgA6gNtw5WrdSzVa5%2BXFu2i4UhDNTivfZII3e%2Fu26ymo1k42xDIjyapSdlRCbkNVhtS8%2BIxwvHdkE%2FvISL5NopHOJlNsjlJw7gKg%2BqauIyaEZ1sec3EA8DyIwPEDLrtSfEBn7ksKnap%2BPHR%2FygLyhE1OgZUJRwek3rKi0%2B8rgReuPJfEj3yudtgLmdwKjvqILd5MFWVxQCEOewkzByK5wL%2Bfcs75BQsQIdch0dk5hx88xYQQtnj5PZWpPgXjhdlWYdtUkLnO7X6BfIu4EBO8uysa3HDMErbg%2BC9kvWoZERHETLvF%2FFZs6iAqBF8KfNnbMlFeP1douaawdhfIF6XARHp5ZZFEd8HF%2BPNAUE7UExwyYqow2MMXRtdFAjO10QCOC0W0PCvUYvBRoE2OUHyAIOsseNvt185i%2FokMUnSoYMHoguNMzNZLmtExWSceiDQ1La1KlK6hIlIl5D9XF9ZSEd4N%2BsNWovmxC%2B%2F%2FNU3iC3fZLgQe6W%2Bg3NPw90WZFcfccpKTTT07tRYOnMQIyjvk4bfVxntGUqbnfYeKixbacsT2Lnq6akECOCVG0o%2FJ%2BYSGj7QRBJ0vTU6%2BjsoZHmVO4Sf%2FpWEAp2%2BaGY4DtGKx%2BwI2H17TDv8wrpSCwAY6pgFq8ynyVI7EcG%2Fn9g9esv%2FQQoT4nwue4hNHuCbEepgGZs%2F9KNrpVeHYy%2Fxc%2BiokHzc7Qgb5l5ZrxOrgVU06w88yk%2FVtkvftdvgJgVEAUTVHN3DKwfEACUdWht%2F0giBL1GPxYLb%2BtXv1kVf%2FdNJRCwuCYLwgGGjl0d6KDud6dL4MZuHJhGq8gTk%2FDuY%2FiNybf4titshuaRt51kph8TtfHXee3qc8kDvQ&X-Amz-Signature=88d1a3d028329c9cc7abba2fd87d8d6d46814f26a59bfebac8190e65cb18cdaa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNGGZCH3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHQuzFVZlNIxU73pu1DFgRsIYU1vj87fxaGChn3tyiMAiEAq4ibnc%2BPqbwWfftuFtZBIYPuWiMbRXUVrvZwpoWit9wq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDKUUS9rwDHRZMi4QaSrcA2SXOoeRJAlpr7JviPcykHT2RaTrh6K57LO4rafCbkMatDDTdJkPpIxrZL5plvOg2nPFHvrxXyW88r%2FVnxQ7KwBpo5ju7D54JktfZa6NM91Nf%2FV0AU38Pd4fmQ2U0GHQdSyF6lc3N%2FLdRpGQwfs6stn42Z1K9oF6C4HmpYcJPKV%2FY4Vt2yMxzyQWH3ugp3%2Fp0c5oCVVqR5hmtNX%2BkGyPbi%2BORvpKZ0%2BJjd1Eo4fojv0G7DNwzB7WiyeRyVEQnHblnyA%2BsV0gHxFjAzMvPaG8px%2BL5BTpbfYAMbKFVCnbRrtX3xaYBejaUrXY3le28mh0cYTsESQKhUOKZyK%2BnKtct1mUs4mdL3DHvEtNpl%2BVXgKN%2Bicbh%2Bp2VpPXC2oLHgMydnmSSKb5IxkUEATFuWoDtIMO6uchOP0W7RrWiC%2Bl%2FVYB8OfNPnRDvTNSLGdj8Dff2Od7BPbvZ%2Fx%2BVfVEIpLtyCD5qScqE1IlnTpC3y3Y3bGnnRHoNhCydMTaInGjMuqUm0okl17b6Kumbf6E8NUHvMxnPZz%2BNrJbsvKBLBtAjSvwsRbZJzxylNLTMPKNVQ9m6lQT3X%2B1dKh%2BjaaHybd5S11kgr0FKHQeBH6kLmjpP6kdgkCBhH8CG6s7rXsnMJuUgsAGOqUB3A%2BtnQMW5TTDZP2odiuuXpQzVWiT7gQFE6jQK3XnI45IZNmgJuIGMvlZPFDjBzcnYntFpdJnZ1sx1FXM%2F1iv%2BaGMYOvJSGbzZ0F4%2FHdNdB5Try%2FS%2BB6Od8AvQkgXyqDpYUOIajt9TE6Ieh%2FKZaN%2B8qaR7%2B4eLf7MBmuB7l3yVCAbVcgEOstyUcRiaeDrPo5%2FNLfHc28dqVJzagHPDmU5FySVuwkl&X-Amz-Signature=e9a2082a2d3741496dd3e0cd5d98eada9e5bb54aeeda02be4a38db5d8d242858&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
