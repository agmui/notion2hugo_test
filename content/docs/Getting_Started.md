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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5GA3R57%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuj6kYTOvHZkLpcjNP6dSC%2FFLANJONMIg94NPBJXHLzgIhAIPNsCXpG5VYh8hzX%2BprCDsvyZVMqAe6jBCbIy555LxsKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzmZALfR2Cob20zv8q3AOKL55DNHePvRQpc%2BSgsjr%2F58N4KZN8Fzt0T1W11TW3XUV2Uxxcvksqy2cpNbngfrapb5mS3xM2RlHwymeJovSgQTk0u5zWaex39g%2FjIAl38aig1SnPng1vB2DvWI6l0DH7PKsOpV4aIQrbpsbLdKCxIOR%2BscNrPvYfe99gc%2FiStYpyBQf7ImucpBr3LOuh5nR9TpXrTCFuxpRPBE5oA5EG4erh1Ga3MTLUjDD%2FJrjHOmM7ynXias%2Bbtj1j%2B0ruweVUC0a9Okhsfj43BKAS1pR6Ws%2BR6YzgpeJ5J%2FvEKV55jWwmngrpdIeOTGm8qoin4n4zSwAREmE3OvLKF3XP4%2Bm%2BcKAoOPgymmLwHoJ37Kzf5emzQudHeAYkihVr6cdrYfew3YOR7qrk6dvCpwpnmUxUuJCia6m4gMigUWVuGktLhfJB7doEykY37%2BqajTR%2Fndr6hV384jAFdYT1O4vk9BLNuTVl0CSc7Y5Tr0x5TGIXMiuOCmgl7aWAtKqD2mlVapUGXAL3XktVPNKPW2SAwSFSdV4BUg6FjSs4daflE%2Bcbf1fAsHunxzvoDWGp8Lg%2BI6dP%2B%2FpF7IJu1Bn1TR41ZKJF6DZjqEZIv0k1L7IzCFFgcuykyZd6Uwm3ywRnJjC0r83RBjqkAaVmJ0z%2BxRRTsx3OIhxyTvvrX4Jfx5n0Ba8C3ltRcNifNOl15pmHNTzFgqBvF5PEZNpMZVtGK68jz%2FU9nZHMfVkzPzxhw%2FuW8KOaBVJphDUkYv7nXRrm3DCo28Q8SGE5XwRSid0i1ICupKEBkvF%2Bju1tpWlkrNbi8T%2BCBQsZ0fGgu%2BoeNy%2FMmpRbImPr2LvYgPCBadd7iIDoHKvon3SmA5inzgu%2B&X-Amz-Signature=aa7bf37199be6b24e4d2bbc2b3081177ef5954750f8a1f59c8be12632a3b8456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5GA3R57%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuj6kYTOvHZkLpcjNP6dSC%2FFLANJONMIg94NPBJXHLzgIhAIPNsCXpG5VYh8hzX%2BprCDsvyZVMqAe6jBCbIy555LxsKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzmZALfR2Cob20zv8q3AOKL55DNHePvRQpc%2BSgsjr%2F58N4KZN8Fzt0T1W11TW3XUV2Uxxcvksqy2cpNbngfrapb5mS3xM2RlHwymeJovSgQTk0u5zWaex39g%2FjIAl38aig1SnPng1vB2DvWI6l0DH7PKsOpV4aIQrbpsbLdKCxIOR%2BscNrPvYfe99gc%2FiStYpyBQf7ImucpBr3LOuh5nR9TpXrTCFuxpRPBE5oA5EG4erh1Ga3MTLUjDD%2FJrjHOmM7ynXias%2Bbtj1j%2B0ruweVUC0a9Okhsfj43BKAS1pR6Ws%2BR6YzgpeJ5J%2FvEKV55jWwmngrpdIeOTGm8qoin4n4zSwAREmE3OvLKF3XP4%2Bm%2BcKAoOPgymmLwHoJ37Kzf5emzQudHeAYkihVr6cdrYfew3YOR7qrk6dvCpwpnmUxUuJCia6m4gMigUWVuGktLhfJB7doEykY37%2BqajTR%2Fndr6hV384jAFdYT1O4vk9BLNuTVl0CSc7Y5Tr0x5TGIXMiuOCmgl7aWAtKqD2mlVapUGXAL3XktVPNKPW2SAwSFSdV4BUg6FjSs4daflE%2Bcbf1fAsHunxzvoDWGp8Lg%2BI6dP%2B%2FpF7IJu1Bn1TR41ZKJF6DZjqEZIv0k1L7IzCFFgcuykyZd6Uwm3ywRnJjC0r83RBjqkAaVmJ0z%2BxRRTsx3OIhxyTvvrX4Jfx5n0Ba8C3ltRcNifNOl15pmHNTzFgqBvF5PEZNpMZVtGK68jz%2FU9nZHMfVkzPzxhw%2FuW8KOaBVJphDUkYv7nXRrm3DCo28Q8SGE5XwRSid0i1ICupKEBkvF%2Bju1tpWlkrNbi8T%2BCBQsZ0fGgu%2BoeNy%2FMmpRbImPr2LvYgPCBadd7iIDoHKvon3SmA5inzgu%2B&X-Amz-Signature=6216eefa4956a7b482fe452baae6bce7c79145cedeae782de4f28f909050bd3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5GA3R57%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuj6kYTOvHZkLpcjNP6dSC%2FFLANJONMIg94NPBJXHLzgIhAIPNsCXpG5VYh8hzX%2BprCDsvyZVMqAe6jBCbIy555LxsKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzmZALfR2Cob20zv8q3AOKL55DNHePvRQpc%2BSgsjr%2F58N4KZN8Fzt0T1W11TW3XUV2Uxxcvksqy2cpNbngfrapb5mS3xM2RlHwymeJovSgQTk0u5zWaex39g%2FjIAl38aig1SnPng1vB2DvWI6l0DH7PKsOpV4aIQrbpsbLdKCxIOR%2BscNrPvYfe99gc%2FiStYpyBQf7ImucpBr3LOuh5nR9TpXrTCFuxpRPBE5oA5EG4erh1Ga3MTLUjDD%2FJrjHOmM7ynXias%2Bbtj1j%2B0ruweVUC0a9Okhsfj43BKAS1pR6Ws%2BR6YzgpeJ5J%2FvEKV55jWwmngrpdIeOTGm8qoin4n4zSwAREmE3OvLKF3XP4%2Bm%2BcKAoOPgymmLwHoJ37Kzf5emzQudHeAYkihVr6cdrYfew3YOR7qrk6dvCpwpnmUxUuJCia6m4gMigUWVuGktLhfJB7doEykY37%2BqajTR%2Fndr6hV384jAFdYT1O4vk9BLNuTVl0CSc7Y5Tr0x5TGIXMiuOCmgl7aWAtKqD2mlVapUGXAL3XktVPNKPW2SAwSFSdV4BUg6FjSs4daflE%2Bcbf1fAsHunxzvoDWGp8Lg%2BI6dP%2B%2FpF7IJu1Bn1TR41ZKJF6DZjqEZIv0k1L7IzCFFgcuykyZd6Uwm3ywRnJjC0r83RBjqkAaVmJ0z%2BxRRTsx3OIhxyTvvrX4Jfx5n0Ba8C3ltRcNifNOl15pmHNTzFgqBvF5PEZNpMZVtGK68jz%2FU9nZHMfVkzPzxhw%2FuW8KOaBVJphDUkYv7nXRrm3DCo28Q8SGE5XwRSid0i1ICupKEBkvF%2Bju1tpWlkrNbi8T%2BCBQsZ0fGgu%2BoeNy%2FMmpRbImPr2LvYgPCBadd7iIDoHKvon3SmA5inzgu%2B&X-Amz-Signature=9be5a55aa538d10ccd4fd2e913b8a546142050fd47f9acdad81d5a583bb6283f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRXNATE%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEgKkFJ%2BME%2BaSa85ceWBTi7mK1qHRsC3OdYtEiYk%2FCcwIhAMJrU6sfvbpRANpQ6OLf5c4P4Q%2FoW2t8aI8TgL2bhG2rKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTaBvfUXVepgKDCEoq3ANoqcjyJOfnYNtbAxBf5irkTo%2ByH6Gr5dFEuXmiJwXy5m0TqBnjHjaUEoOl5zHWuhQr6FoC1f2onAY1u7Bc5FwBhP0DacsuXbuWMcVPF84%2Fx4Yq0v2q3lpxC1SOEo2ZTHkEj7vb1tpTTG9wxJxLkFXrAS3dUKZmyFsI8r9GbeUbyDyN7up%2Blm%2BdTQ5aG5oQ4MJXSyNqGG7HFIuJfu6gc%2FQ24n3kvEFNsvCySs4SVxZxzIfaSRhMyZdhm%2BAIF5%2F%2F%2BSm%2FWLo7URs7GJvGc7nQSWGsybXZw5i3y9awPYMuOG3Cn2rGjffXNjPzzc3vVOzXTscCfxhNJSrCt1TKIVRpBrFip1ZQx6JrhFfalzmCUkaNiq28DnmsifzRds0hKmyIXVXMYOJqExRx065zFdt8jchiaCRue0WgbudK29dX6KkH28h6dJ2IBxTjEnmX3iQYSXeT4xbJAP2G5%2BlN%2BQOpOfWcbtQiV1PAs0iEOW6hObB1%2BaqVr4dR9QDCtHGUV7sBlcv9xTLVkekIPxcS1VugIrGi7bUhyQonpE0wqf%2FE1ew2lGSQIfGg7Kk%2BXRXu1pp8Z8MnQAov2cbw5j7%2BCYsKIbbGNYWnPx1Ql%2FgeXwaooZ1%2Bp%2FmY8XjllutLVwPvEzDwsc3RBjqkAQ2zolNIHriAKy7kZpKMJjDgDJ8KVYbYwgzrT0%2BQnWfNLu3WEUfyKI9gcPAXmMjcZLSBisX%2Bc2lX%2BJLPNBbHZQ4xFhaz4VN0292BmaHsKfgeqAadcNGyMP9kAEmptcYGXDbuz77MjT3G64UQLJOG4%2BHfLJvNS6rk6TlhFhAViky4oeYnyKh88tlcGVduMYe5t1noEk0XqUJS8MmYzyj3W9dwqW2z&X-Amz-Signature=3f7ac5042b96f03d9b885a7ae6e689f9e71e6b1a0f2c709224b33b257dc0fb45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TFKQ3J%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3hGqhiT1lXVH3pQ7SVwsZO9cJ8R8qd6%2FInnKlN8HdOQIgIaqNBf6xtENXqKM13GwJGAz2aL0tPKvNztdN2azawsEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsdeQCX95Njd89eJSrcAwhS2iX5jWHIjhhMYJ8Qmzb1H5LDRBDa171nsSFijjXyTSqNebZV9ySkGFAmshRPvXKH2HZuLxEfUJ7t0uOUww4r%2FD4qN1Q5N82BT834U0hRa8MWTmnkdAoERAoiViwt6%2BleflTnySyj1pSBD%2Fvy81F%2FQGQ9RoeuHYLs5VsmkA9IbHLzcnLIafGFQCsNE3wNNKAZvCtxSJCh%2Ffd5tw3ri5oXyKOg59v3vikubrfAzEIEmCLyrMll5ygqHSBUXp%2BvIxfEuGeLHlRjS2meMtqibdKmvWjNC77o%2FDxVIcyqf6SBiIXdMnb0ZXaCdiPrrT92HfmlRE6oyANEevdNF1MkzMPubUxii%2BF0db6o9O1jrAbUStW2nYf5B9OKBq5kYP6usQOXpRyQC725NC5GGl9UgVHNXlEiwaLAjiMvzCwtPourJtkAfONMoJ%2BFzYyDvSxLZSW9zZtAUSbxutQtZa%2B3KhumQxdnTBTKd0ziLffTDkHAwADCKQ2FKsmO9O%2BvUD1o2AWuA9G37H2%2BgmmQF4kWxTf4gthBPf18Tibfvkh6GZX7naOaiI6l9V1tLZk3yJmTSdcO94WleR7Y6qwmXV6YIUSatCIOelWdGQP%2F0f58FPquU4g5uN9QC5fnCMrgMNWwzdEGOqUBep94Iph7qkUymwfof2mx%2BR7xWYpYAvJVoqOxjyWuMkXmMbsP1LES2JKYctwKpoiAY%2FV5Er8IzmgSOjIDoV%2BIEQ54pCI2WhDdIA28itzBgL4t2sHvgyj6WPNLuv4ifW1HoBlIoi0ufj2jx8Gk6%2BssBdyqPql0BuJndWXUmrEXu7kRwTtEw7tUYgv07wu9fv3Lue0QtPI%2F7%2Bo3ChSGqPOk4tuq6FuA&X-Amz-Signature=dfda13958414f5b0693209dc94cba773d1cddb1d490f45b09834db7a6a8424bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5GA3R57%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuj6kYTOvHZkLpcjNP6dSC%2FFLANJONMIg94NPBJXHLzgIhAIPNsCXpG5VYh8hzX%2BprCDsvyZVMqAe6jBCbIy555LxsKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzmZALfR2Cob20zv8q3AOKL55DNHePvRQpc%2BSgsjr%2F58N4KZN8Fzt0T1W11TW3XUV2Uxxcvksqy2cpNbngfrapb5mS3xM2RlHwymeJovSgQTk0u5zWaex39g%2FjIAl38aig1SnPng1vB2DvWI6l0DH7PKsOpV4aIQrbpsbLdKCxIOR%2BscNrPvYfe99gc%2FiStYpyBQf7ImucpBr3LOuh5nR9TpXrTCFuxpRPBE5oA5EG4erh1Ga3MTLUjDD%2FJrjHOmM7ynXias%2Bbtj1j%2B0ruweVUC0a9Okhsfj43BKAS1pR6Ws%2BR6YzgpeJ5J%2FvEKV55jWwmngrpdIeOTGm8qoin4n4zSwAREmE3OvLKF3XP4%2Bm%2BcKAoOPgymmLwHoJ37Kzf5emzQudHeAYkihVr6cdrYfew3YOR7qrk6dvCpwpnmUxUuJCia6m4gMigUWVuGktLhfJB7doEykY37%2BqajTR%2Fndr6hV384jAFdYT1O4vk9BLNuTVl0CSc7Y5Tr0x5TGIXMiuOCmgl7aWAtKqD2mlVapUGXAL3XktVPNKPW2SAwSFSdV4BUg6FjSs4daflE%2Bcbf1fAsHunxzvoDWGp8Lg%2BI6dP%2B%2FpF7IJu1Bn1TR41ZKJF6DZjqEZIv0k1L7IzCFFgcuykyZd6Uwm3ywRnJjC0r83RBjqkAaVmJ0z%2BxRRTsx3OIhxyTvvrX4Jfx5n0Ba8C3ltRcNifNOl15pmHNTzFgqBvF5PEZNpMZVtGK68jz%2FU9nZHMfVkzPzxhw%2FuW8KOaBVJphDUkYv7nXRrm3DCo28Q8SGE5XwRSid0i1ICupKEBkvF%2Bju1tpWlkrNbi8T%2BCBQsZ0fGgu%2BoeNy%2FMmpRbImPr2LvYgPCBadd7iIDoHKvon3SmA5inzgu%2B&X-Amz-Signature=37f3ea375fe3d213ba15a9ce45b52e6eeb0fc6a61b35d7d213953a50e290c022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
