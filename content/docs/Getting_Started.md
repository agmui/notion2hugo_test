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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGGSOLF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDStG1yFq%2BnaucFhNj%2FtnMh3Vi0Pag0dDRPrF%2FjXQKWrQIhALJt0Q1R5lBF3qD7EETJ55BaCWCt3rcTdS8tL%2BKS37IGKv8DCBcQABoMNjM3NDIzMTgzODA1Igzwzyj8FFYci900o3Mq3AOaBtVwQgL4L%2F2vccz01%2BRiy3Y49jI6OQJbp%2BZah3Hpuqs3m0LmXRsrTwAFf9LhOqJqBludOIe0R2O1M%2F5Q%2BuEhmxsTNBp2IMM%2BVK3boX%2FjWhGBvpfvOEVMBcffpvmO4bXX9m3ypldOmTF%2Blo4cfLSAW9wnp%2F6J3n8fqMPoiuJVT%2FfKXDwAOfkcNYK09dUCvFC%2Ffb6OhwB7dIZrCHKR2Wb2tQ6TV4JMGdgAKFPjOtBOvke%2FLnq2Wq8eTPik4KakCoyqIYaSATQXsJiCBqu39kAu%2Btp%2FZG0yo197vbBxG6Vn7YkPg1n77bDVm1UhcnMTUjwfrxCpNGqFdJiI8HHd9s4bqbdfm%2BayxfSGLPRPVPfgMnQpfy4dJyLMOwa5ikGi16h6hmUCIVf51D3vgnn95g6iSOKmJrSH0jtn3s09ma3Hk0IHmQoyDscFxzjcxnrajiNvmRCw0aJKqyX1M68TzKSuqE8i5zTLvG2mglKQBBPJOQI7j%2BdUIHGRcMdDVirrBEgzzGpAPBT%2BUHqk4crYLTKSHtZAoT%2B87%2Fxua9Hh4CPgn7gSsmN03iQ5bf6gpUeChPzWpie8f0vIl4gtUZqn2HNPgRy7i4ojY0stMPSoQaK09e20o3ZCKLt6JM96mzDBuKG%2BBjqkATjUuWv6UWqJTtXkJH%2BSDdmVDMH%2Bj1dO7PhitI96KJIoXv4wLeO0vkbMFWtEA3%2BPWHCjpOJKCW%2FGM4GN%2FRyCUatq6imAgii7%2FqoEGKVaKQIUHGzu3I9b%2FOYu5P9dUNnFfJqbP6YFV6BubXpi2Y8faCjKLMwmt7l20gipImf5HWgHpGMveEmWmnyBWzvoVwLd%2FV5VyhYZOJFyDIYh1%2BjJhhJL2EiL&X-Amz-Signature=f344a316fc80cf26f43d1e0204e94370292d353334cd52f214e4a93f03af0cff&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGGSOLF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDStG1yFq%2BnaucFhNj%2FtnMh3Vi0Pag0dDRPrF%2FjXQKWrQIhALJt0Q1R5lBF3qD7EETJ55BaCWCt3rcTdS8tL%2BKS37IGKv8DCBcQABoMNjM3NDIzMTgzODA1Igzwzyj8FFYci900o3Mq3AOaBtVwQgL4L%2F2vccz01%2BRiy3Y49jI6OQJbp%2BZah3Hpuqs3m0LmXRsrTwAFf9LhOqJqBludOIe0R2O1M%2F5Q%2BuEhmxsTNBp2IMM%2BVK3boX%2FjWhGBvpfvOEVMBcffpvmO4bXX9m3ypldOmTF%2Blo4cfLSAW9wnp%2F6J3n8fqMPoiuJVT%2FfKXDwAOfkcNYK09dUCvFC%2Ffb6OhwB7dIZrCHKR2Wb2tQ6TV4JMGdgAKFPjOtBOvke%2FLnq2Wq8eTPik4KakCoyqIYaSATQXsJiCBqu39kAu%2Btp%2FZG0yo197vbBxG6Vn7YkPg1n77bDVm1UhcnMTUjwfrxCpNGqFdJiI8HHd9s4bqbdfm%2BayxfSGLPRPVPfgMnQpfy4dJyLMOwa5ikGi16h6hmUCIVf51D3vgnn95g6iSOKmJrSH0jtn3s09ma3Hk0IHmQoyDscFxzjcxnrajiNvmRCw0aJKqyX1M68TzKSuqE8i5zTLvG2mglKQBBPJOQI7j%2BdUIHGRcMdDVirrBEgzzGpAPBT%2BUHqk4crYLTKSHtZAoT%2B87%2Fxua9Hh4CPgn7gSsmN03iQ5bf6gpUeChPzWpie8f0vIl4gtUZqn2HNPgRy7i4ojY0stMPSoQaK09e20o3ZCKLt6JM96mzDBuKG%2BBjqkATjUuWv6UWqJTtXkJH%2BSDdmVDMH%2Bj1dO7PhitI96KJIoXv4wLeO0vkbMFWtEA3%2BPWHCjpOJKCW%2FGM4GN%2FRyCUatq6imAgii7%2FqoEGKVaKQIUHGzu3I9b%2FOYu5P9dUNnFfJqbP6YFV6BubXpi2Y8faCjKLMwmt7l20gipImf5HWgHpGMveEmWmnyBWzvoVwLd%2FV5VyhYZOJFyDIYh1%2BjJhhJL2EiL&X-Amz-Signature=d81b03eeb794999bda23491afc2e0f42059b4a3c756e3c82b1e1acb393ab4c11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPJAT3N%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFdg5%2FsyXLL5jywAUS%2F9BOT6%2FXYlShdiIP3Y1pBWqqvQIhAOQv9%2BkX1eJJMklv17fWuW3Hn%2Fwn%2F%2FMayima3t1xaw6aKv8DCBcQABoMNjM3NDIzMTgzODA1IgxG%2FmxZmRuKaRQ%2BOmkq3ANTX6ZJu0lE9oQyekLPRuP4yz8Pww%2BB3nNZ6KSjWUcsyWvjaV7re%2BCANGKGuQrowqztOZl05hiADmijMkeW20ER0WQokpbPuas1iex29FpY8jaQF%2BXV3VJ8OIuXM7AnoNGCYnXLAd10mg1DD9k%2F%2ByMsweTBHnQCJhZ%2BYFQngXdRFTZo%2F4fR1Zwzs8pM476R1lfA%2F6Ok42ZIp%2BRadfNR%2FA60q2Rs6Mfip2ZSYZKp0rHSgSmsyc5IQ6zy%2F1qS9qkxYAPjOWxf7379517z%2BNkbiPS%2FL64%2FHgkqxclOAalDSNrSjkVQcBbpwR1%2Bh9sXhANgLdCZyaX%2F2SeX1ZSeT0AzVVpRRDSDkINan2Dz7dhdgv74aUNVTRFF415SIhvHWurRCv54vsHHygaezi7Z8ODEIIo%2BDppl9o78lqghyts%2F%2BpfUxAdX3p%2FQd%2FKAZ5oRj2fTpTKdZeh4lWwyTe8QLrdyGsmZ4ahjjp168I9JWNu8xZNvvWLZFka948Svj7WEqRD8HdCMOywC9RaZeb%2BfiHVItAgP%2Br83Tjx4fmZ9LqzADgL%2Broky2b1S%2F3%2FAAn6yCG3tKapnCKPm6aeAkYhhyFiH8OStZNQ%2F1fuFVZFzz3cHgC86ITmf7pftAVOIyf%2FeijDKuKG%2BBjqkAYztOj0foJwDDU3Hc%2FECiVD%2FYaFKQPfuhwzhFk4ZWWXv3N%2F9OhWl54BW5IWewairkPLfYi5CewVC%2Ff%2BW%2Beo9tMnfcpayie484oW1eXFUIVIZB3iYL5A796S%2FXsNtRZatcL2hqEN7EGSqF8c4R5QKm6UkQ1NXRn8AHxz40m7tpj2l9QMyJLPlKOwDOm49JgsCd5RHFc64DAni2ZYItg641rbMKIAr&X-Amz-Signature=75a1653b42e81950c57150eeff4201b24345f112ecbab34b3e2d800ba3e5aad3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLA5MRYF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1BSk5yv8BEBIXALTQA%2F2zVrOoJTK9pmGZPbEoWVHZOwIhAMVF1uu05i4OCW8FzTN6VMEkS8lrWWrSJKD1yvRQeiOIKv8DCBcQABoMNjM3NDIzMTgzODA1IgyO6K1wUJ5oqdpgt4Yq3AMPIKyR9BYoi45WeNjkFbEJmcZOLExpiMMxs1KqaTagxmcPLG9pYAkPPDlPqL8Dq4pDW%2BoRCWMwg25HBsPakEK0lPco1dlcK8lJ71K4Aw%2FxyUYEnDKAqDJ1wLTCidLtBplAIYVujUbnuBOlB7Z4Es9hMdS%2BEyF%2FfMz9AmTKf1AE5i5RzlSXhTAmB4F3CP1pGEDJhaWCQZ3Ug835RuM8stveM%2BSVufhSbWyzqYp%2FQHpPShHKUXUTvBi0fRX9ywcaV%2BL6NNqk8%2FF7Eo69Gabc%2FNts23AW1KQiCyTmKq%2B1HwHWsh3c0sQbJaNtNEds5fspctumbyq8Q48vLMoN%2BTGOaGxX2lfqsuP4R0aLAvVNBeQYPIj3DLxVjcKocCDhxT4ijpRTu7a0ESAUWP6bqbUeFzW8V3%2FNFTQQ2xcCxE6rXWRYrcnCkCve9BYcf%2B5hj95q5arpxNPQdc00LcVc%2Fqz%2Bs04NzKwyXOmuX62MMFIQjdvoGv35G59O2N4nPj%2FHa6SsEv1o8MY44g02DgHM6KuCNh256oVyG4K%2FkYn%2B73OeDO%2FkPUPykQDNka9YSNgIKAlvz%2FzPZzIUyCV%2F5IdOjuzeKRrXGzYvU0Y5GF2Q4ahDaYYVAiIjFq2WdCGk2N9k1DDKt6G%2BBjqkAfP44Q3OcxYjoNrsTukdeP8YIWuauDUWsj8xmxminD5OH1GnqMVIWdTS05EzVs9K5RNJuOV1SSHyQDbSQMAeed8644S0vq%2BnodmX1kzzoM%2Bv8ncCgK0jvRkaCBjNKvLi4m5ueY1fp05b57Cakj%2BRpGNuZBXFvh%2Fq1TJxewn4lEtoC2%2BsCDB3I3ickjewayy%2Fbk9N1BnR0Tm%2Fc2su822pbgoJQMpj&X-Amz-Signature=a22d2259e05bc6c115de4b5afaccb3ddfccb2e9afe06ab80ef41a763d7d78844&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGGSOLF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDStG1yFq%2BnaucFhNj%2FtnMh3Vi0Pag0dDRPrF%2FjXQKWrQIhALJt0Q1R5lBF3qD7EETJ55BaCWCt3rcTdS8tL%2BKS37IGKv8DCBcQABoMNjM3NDIzMTgzODA1Igzwzyj8FFYci900o3Mq3AOaBtVwQgL4L%2F2vccz01%2BRiy3Y49jI6OQJbp%2BZah3Hpuqs3m0LmXRsrTwAFf9LhOqJqBludOIe0R2O1M%2F5Q%2BuEhmxsTNBp2IMM%2BVK3boX%2FjWhGBvpfvOEVMBcffpvmO4bXX9m3ypldOmTF%2Blo4cfLSAW9wnp%2F6J3n8fqMPoiuJVT%2FfKXDwAOfkcNYK09dUCvFC%2Ffb6OhwB7dIZrCHKR2Wb2tQ6TV4JMGdgAKFPjOtBOvke%2FLnq2Wq8eTPik4KakCoyqIYaSATQXsJiCBqu39kAu%2Btp%2FZG0yo197vbBxG6Vn7YkPg1n77bDVm1UhcnMTUjwfrxCpNGqFdJiI8HHd9s4bqbdfm%2BayxfSGLPRPVPfgMnQpfy4dJyLMOwa5ikGi16h6hmUCIVf51D3vgnn95g6iSOKmJrSH0jtn3s09ma3Hk0IHmQoyDscFxzjcxnrajiNvmRCw0aJKqyX1M68TzKSuqE8i5zTLvG2mglKQBBPJOQI7j%2BdUIHGRcMdDVirrBEgzzGpAPBT%2BUHqk4crYLTKSHtZAoT%2B87%2Fxua9Hh4CPgn7gSsmN03iQ5bf6gpUeChPzWpie8f0vIl4gtUZqn2HNPgRy7i4ojY0stMPSoQaK09e20o3ZCKLt6JM96mzDBuKG%2BBjqkATjUuWv6UWqJTtXkJH%2BSDdmVDMH%2Bj1dO7PhitI96KJIoXv4wLeO0vkbMFWtEA3%2BPWHCjpOJKCW%2FGM4GN%2FRyCUatq6imAgii7%2FqoEGKVaKQIUHGzu3I9b%2FOYu5P9dUNnFfJqbP6YFV6BubXpi2Y8faCjKLMwmt7l20gipImf5HWgHpGMveEmWmnyBWzvoVwLd%2FV5VyhYZOJFyDIYh1%2BjJhhJL2EiL&X-Amz-Signature=2e917cee9b3ef283660d39f17107adf02628f30eee50f40c2b36c223e88dad3d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
