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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4DUE7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnz%2BCx%2F0pFE729%2FsCf5eDdEanGH6%2Fd2QSVw9Ar%2Fv7aHQIhAL%2BuOcpw1v9JujgAxPvHNBACfyCwF%2BVAPyrGZQ%2FZN4wmKv8DCC8QABoMNjM3NDIzMTgzODA1IgxZCXpoIEVlLdf%2BBYYq3AMMSCKvXYVwQUIM%2Fq8EzdrngC1wxqAxWMzggOmn25budFI7DaA6piRo8w%2FVrcpFgMiayG1GsuIkKVf2rXuZai18z8yQGVQi7NJyQKvt8gJAWPfg1Mt7eL58MTpmgz%2FZTquezo%2Fq9%2FuyvjEtcliVLu9rOOQTOgSdh2VBPdAhbdhqCL96RlPt82QqUhPDzCrRT9aeHCSzzV8M9ooO9PMu3l0l%2B4Iutt3vPQ2Fq9YSHtE%2FUqvc8gla7XrWyHG3WSEL2ez%2BTdcqI4owlwf1M2Yi2wWAeeu7Xc%2Bh%2BTXktuX9EmSCJmW4doVn7kSuDeJfLtJ2%2B68kQ3Zv7uP3qdk1cHVPOMpK7B78j3VHr%2FhFe4SClozWdxaJjifaZgrULOFI%2BGso1i7FNKaCS4pm5ysn9aln0Wln8thSV3TnhV2fORLzCDA2avPSeWKgeRGkcs14sfkkJR8F4zX0sZ3y1d5KZNrRxsfiu2KtlfeSPNVRJToGXx07cg0q1Ts4kMpFM3C2Ub3yC7S%2BHI6OzR3bZGTUXhs%2BBZONUfuGNqDSR3fS94NExElRLtsKXV8DegCFJa6Jjj8oVW2BK5Gb1fjP%2BYr1k0krlmOU1c3jIRHj%2BraplbiYyOeuxkYKHoaHQmNJZNW8PDDs0b3EBjqkAeq2BSC46ppOjBrDjKaYN2jdY4gxDhL7AICcypqRb1lBFk1uwSXZSrCUzYxjsE41UmemQkxyaGDLWoYCXkwB91qSv%2Bbg5kB3kL%2BuwPH9sBOscbnJUseY5dKSNX26sU4l%2BS%2Fnt9JZB3DxtKy2bpW0mra2AUBJZkGzmFvB93Np58IN2l%2FFyhiAXGhVOdP%2BEqp7eBOD64oxMrLunJGNX8SOxostmK5y&X-Amz-Signature=53940c9d6189b73da4ad5b6b3d258138347e84b9b193d8c8cf47b330f50caee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4DUE7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnz%2BCx%2F0pFE729%2FsCf5eDdEanGH6%2Fd2QSVw9Ar%2Fv7aHQIhAL%2BuOcpw1v9JujgAxPvHNBACfyCwF%2BVAPyrGZQ%2FZN4wmKv8DCC8QABoMNjM3NDIzMTgzODA1IgxZCXpoIEVlLdf%2BBYYq3AMMSCKvXYVwQUIM%2Fq8EzdrngC1wxqAxWMzggOmn25budFI7DaA6piRo8w%2FVrcpFgMiayG1GsuIkKVf2rXuZai18z8yQGVQi7NJyQKvt8gJAWPfg1Mt7eL58MTpmgz%2FZTquezo%2Fq9%2FuyvjEtcliVLu9rOOQTOgSdh2VBPdAhbdhqCL96RlPt82QqUhPDzCrRT9aeHCSzzV8M9ooO9PMu3l0l%2B4Iutt3vPQ2Fq9YSHtE%2FUqvc8gla7XrWyHG3WSEL2ez%2BTdcqI4owlwf1M2Yi2wWAeeu7Xc%2Bh%2BTXktuX9EmSCJmW4doVn7kSuDeJfLtJ2%2B68kQ3Zv7uP3qdk1cHVPOMpK7B78j3VHr%2FhFe4SClozWdxaJjifaZgrULOFI%2BGso1i7FNKaCS4pm5ysn9aln0Wln8thSV3TnhV2fORLzCDA2avPSeWKgeRGkcs14sfkkJR8F4zX0sZ3y1d5KZNrRxsfiu2KtlfeSPNVRJToGXx07cg0q1Ts4kMpFM3C2Ub3yC7S%2BHI6OzR3bZGTUXhs%2BBZONUfuGNqDSR3fS94NExElRLtsKXV8DegCFJa6Jjj8oVW2BK5Gb1fjP%2BYr1k0krlmOU1c3jIRHj%2BraplbiYyOeuxkYKHoaHQmNJZNW8PDDs0b3EBjqkAeq2BSC46ppOjBrDjKaYN2jdY4gxDhL7AICcypqRb1lBFk1uwSXZSrCUzYxjsE41UmemQkxyaGDLWoYCXkwB91qSv%2Bbg5kB3kL%2BuwPH9sBOscbnJUseY5dKSNX26sU4l%2BS%2Fnt9JZB3DxtKy2bpW0mra2AUBJZkGzmFvB93Np58IN2l%2FFyhiAXGhVOdP%2BEqp7eBOD64oxMrLunJGNX8SOxostmK5y&X-Amz-Signature=abf3939a55116dc8032f4181b79765b8e0a90745e09a2642305650f656f7b0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4DUE7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnz%2BCx%2F0pFE729%2FsCf5eDdEanGH6%2Fd2QSVw9Ar%2Fv7aHQIhAL%2BuOcpw1v9JujgAxPvHNBACfyCwF%2BVAPyrGZQ%2FZN4wmKv8DCC8QABoMNjM3NDIzMTgzODA1IgxZCXpoIEVlLdf%2BBYYq3AMMSCKvXYVwQUIM%2Fq8EzdrngC1wxqAxWMzggOmn25budFI7DaA6piRo8w%2FVrcpFgMiayG1GsuIkKVf2rXuZai18z8yQGVQi7NJyQKvt8gJAWPfg1Mt7eL58MTpmgz%2FZTquezo%2Fq9%2FuyvjEtcliVLu9rOOQTOgSdh2VBPdAhbdhqCL96RlPt82QqUhPDzCrRT9aeHCSzzV8M9ooO9PMu3l0l%2B4Iutt3vPQ2Fq9YSHtE%2FUqvc8gla7XrWyHG3WSEL2ez%2BTdcqI4owlwf1M2Yi2wWAeeu7Xc%2Bh%2BTXktuX9EmSCJmW4doVn7kSuDeJfLtJ2%2B68kQ3Zv7uP3qdk1cHVPOMpK7B78j3VHr%2FhFe4SClozWdxaJjifaZgrULOFI%2BGso1i7FNKaCS4pm5ysn9aln0Wln8thSV3TnhV2fORLzCDA2avPSeWKgeRGkcs14sfkkJR8F4zX0sZ3y1d5KZNrRxsfiu2KtlfeSPNVRJToGXx07cg0q1Ts4kMpFM3C2Ub3yC7S%2BHI6OzR3bZGTUXhs%2BBZONUfuGNqDSR3fS94NExElRLtsKXV8DegCFJa6Jjj8oVW2BK5Gb1fjP%2BYr1k0krlmOU1c3jIRHj%2BraplbiYyOeuxkYKHoaHQmNJZNW8PDDs0b3EBjqkAeq2BSC46ppOjBrDjKaYN2jdY4gxDhL7AICcypqRb1lBFk1uwSXZSrCUzYxjsE41UmemQkxyaGDLWoYCXkwB91qSv%2Bbg5kB3kL%2BuwPH9sBOscbnJUseY5dKSNX26sU4l%2BS%2Fnt9JZB3DxtKy2bpW0mra2AUBJZkGzmFvB93Np58IN2l%2FFyhiAXGhVOdP%2BEqp7eBOD64oxMrLunJGNX8SOxostmK5y&X-Amz-Signature=ed5264b84d8667919e66711abdc80e36befcd10c2d4fa32cd8698e22e530d772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GP767AU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjO2sf%2F2JnQFnkhTrliaB05Izsq6U1WyDJir%2FsvgipzAiEArzKna5iMyQmnf3scJpKCfVANWQJIgEcM9n%2FAX%2F1byZsq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDPTo0btqTWib5ix%2BnyrcA%2FehElCDLPyw321QgACjPfRoMku2dh85d5tHK7gd4myxZrcUb9QzyNZsJ%2BHhk0pXM2bcFpN2lx3UJIOiaMgeEQpH6EtMlnYdVPO64obcxXzO0edICQp0G9q82KopXxiJea5CALray6G%2FvjXhVTtLOHkhKRG5VIA512ohNfW0QZOdL6kSxyksA6X3KWB2PClrvtrZNwGW9fYlOUPn7KKI24j6m5ABk3Pi4Cc4AK4XxjE1YQNhNqUjpYv%2FXnCshMRFoXJXtaOY1Cw9KZiByB4m8A85ws2P0%2BkS1OlvuJelmaQEp99ex1vRfZx1uGb9OD%2FifhGZFD6uYRYXIcvn5U7wEpsXNubpsakgs3KSvMbKRSKkdEhzzMjB5WJdRdj04yBcf9Q8AB9w5noNEdyDrJesg7hvsKTg4x7Xc8YJNGEd3DKiGnC1iOsV%2FaCTORjL5vz1xn%2Bdkk1eKMjReQwwDXfo9MxMca2g1ayLIxkhugrOlACrs8Vw99m1xJVasyLX88J8yookyhHDbjxvasFdwp8huJ8HU981%2FHhonk%2B1cs71U4MIvOgesSYINrwbYfPYW8tfp0H8W4u1JZ4F7ifmcUT9mUQZG39h%2FbE5XnCAkNXUKZp%2FX%2BrDPrVIDaWz1SqfMLjSvcQGOqUBD0NgpCJEYIUeVh9HFt9ns77cZqLuxu0LffwLJYndqiUgvX%2FcZPBXWBWp3TTCwWsCsrvdmSurxoNWGhfeifE%2Fh8MiP1LH5dXeX%2BR5cOzaq6SNgeEQ9D431VDpLTtfbIzo4YP6otM4TdUkPaXqjWqXWqKTiteXHqXpmzFhz2s%2FPpkMQN%2BXl%2FgmkGmVTKtYj%2Bakm5%2FfaQEHAV19jl4K8l0zPjisslty&X-Amz-Signature=f3143e61554f80503b4f4b137870fdaa7c840e0a989c6ddc9f6a5eb1539635dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGWVXB3S%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBixXEwZ4YlxjJGPsUGh%2FfkKkYfPZHjcVrHwOnbG44SVAiBim9PV08lA2db2lNpGOzTkDDjpGZ1vBP7%2FF%2F4X0POpIir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMFXAYM80pN3Q2%2BeF3KtwDfUKYU9S%2FS1W44sxp7Tck12labgS6c7cwG2rVnWOBmwIiB0OweERSmx5c1sMPDtUvjYKiIPnSVKJZKEXNX515bhR%2F2uOxT9jD4nKxPhRAdM0%2B3mZAszL9Ir4KRwBox%2F9yaJ72X88IYtWp%2BbX0kW%2BSMLvG5WiaYD8b3XCfSC8ZOYrLorsb8r0Lj%2Bu5xv7cnNCwi7%2BE3%2FyC42LRujUNXbbQhuqdckyRxJOhVQ9BhzV2F4uCOfUqfhjbFriLT2gtv1LC8%2BkfyI%2F2U5L3cppB1Qsy%2FfiQPpkKnrS2UenLsOEZSImNKyidCCuEhUUpFUFtmA%2FXMXsu2tvVzkPBGmfMbQ2RZ4aaqazgGF5Ph6RuPlaCS%2Fh0%2BowiNF9Kfnayim%2FB41THy7GsPMHNYH0Oj4siqbRH9%2FKvBVP4RmbEsRhEDr0kzNd6jURYegrmQpfp8gOPqx96JgWavQwe1%2F2JmJF%2F5DfKZ%2FtpmR78Ppbc7WEMnqZvV0yBH6yc8CJIhaKm%2BZWLMRkJuvcEqK8rH%2FHC5HDwfZ7RuBC4DS1x0QU%2BT6O72HPf7pquwnDvyVoPA1NNT9joNpPj8oT%2FqkkLzmImk3CK6%2FSF2KRY%2FPtDdPEaCi5eujB3LG8aRalkdddK72rTK9Aw0dK9xAY6pgGXpx9L9fC3OD4gylHbaHIdWq0RzyAGkUdHDNYlF7Zdv%2FYmy%2BWQ9CYCbl5jsWum8RD3v0ueA%2FWeDn2zYSIprZl34V%2BwzRPN0DHM11ucBA4KlJ1XC6Mm9ypj5oi25kzfAAq64SeyC0RkcbzEq6zcY0d8TK2lnUMtm2IQqem4YYDeuEGqEdvgyaHPovsVep7w1ao%2Fky8cEl8CfIxol28facGw1i4SeX5x&X-Amz-Signature=e54c1d5c9bbcde09b6586645843dd8f9756ec3f7f19f2bc337cf046fe4568aac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4DUE7B%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnz%2BCx%2F0pFE729%2FsCf5eDdEanGH6%2Fd2QSVw9Ar%2Fv7aHQIhAL%2BuOcpw1v9JujgAxPvHNBACfyCwF%2BVAPyrGZQ%2FZN4wmKv8DCC8QABoMNjM3NDIzMTgzODA1IgxZCXpoIEVlLdf%2BBYYq3AMMSCKvXYVwQUIM%2Fq8EzdrngC1wxqAxWMzggOmn25budFI7DaA6piRo8w%2FVrcpFgMiayG1GsuIkKVf2rXuZai18z8yQGVQi7NJyQKvt8gJAWPfg1Mt7eL58MTpmgz%2FZTquezo%2Fq9%2FuyvjEtcliVLu9rOOQTOgSdh2VBPdAhbdhqCL96RlPt82QqUhPDzCrRT9aeHCSzzV8M9ooO9PMu3l0l%2B4Iutt3vPQ2Fq9YSHtE%2FUqvc8gla7XrWyHG3WSEL2ez%2BTdcqI4owlwf1M2Yi2wWAeeu7Xc%2Bh%2BTXktuX9EmSCJmW4doVn7kSuDeJfLtJ2%2B68kQ3Zv7uP3qdk1cHVPOMpK7B78j3VHr%2FhFe4SClozWdxaJjifaZgrULOFI%2BGso1i7FNKaCS4pm5ysn9aln0Wln8thSV3TnhV2fORLzCDA2avPSeWKgeRGkcs14sfkkJR8F4zX0sZ3y1d5KZNrRxsfiu2KtlfeSPNVRJToGXx07cg0q1Ts4kMpFM3C2Ub3yC7S%2BHI6OzR3bZGTUXhs%2BBZONUfuGNqDSR3fS94NExElRLtsKXV8DegCFJa6Jjj8oVW2BK5Gb1fjP%2BYr1k0krlmOU1c3jIRHj%2BraplbiYyOeuxkYKHoaHQmNJZNW8PDDs0b3EBjqkAeq2BSC46ppOjBrDjKaYN2jdY4gxDhL7AICcypqRb1lBFk1uwSXZSrCUzYxjsE41UmemQkxyaGDLWoYCXkwB91qSv%2Bbg5kB3kL%2BuwPH9sBOscbnJUseY5dKSNX26sU4l%2BS%2Fnt9JZB3DxtKy2bpW0mra2AUBJZkGzmFvB93Np58IN2l%2FFyhiAXGhVOdP%2BEqp7eBOD64oxMrLunJGNX8SOxostmK5y&X-Amz-Signature=e33aba5538bec00f3d42f1ac699c33096bf8eeaad10c740e72e2e25432e6597c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
