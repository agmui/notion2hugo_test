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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UA2JTG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqlb9AzId3DlwKL4be9ueqhq3JLQU%2FZKEFvK71%2BBT2pAiEA%2FSBCa4JGrUKSsD3lsFqL0mVT%2FSuaE%2FIS2Rc11u7fpwUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1aWcPiRlvECzRgFircA25e1NFaQ6uBwr9ZBAUsyOzYZZAZGXtBAHkPdkhQ%2BQIkgTwLlw7V3u5ZDd1JlO27Tkca%2FC0%2B0OqhR%2FutOySGWhBPC88Ztp%2FbWnZIvpJvliOsVIbQfr3dgZwtUh9SB6jHUCo7qTcP0HtGlrdlW6zlgJOdzgAGcWqCZIFlik3cq2IaawnXVCg9nfrOlQ%2B2hvlobuB9oQxJTkaj3jZSNSZ0D51lYP5CEDX9gz%2B8eUz0IGwBzEwUmsUFSfOtdO8K4SYA4aOKSeR%2BW102Alleb6q9AJ8tTYcyoeGnq5dr5VC1byAv%2FxJXhEDTPdtKmlXs8S9AFqaLVLtpY%2BEcX1yBC%2BnIPqaOXgoIHZY1Us2wgEZ7n9EnCyx0aScwO5P%2FYHcO7sV%2BHiZH1t6aA7yUBuDA4StIhv5LAqtzNmsBrdUxKvZvJcPd7TRw%2FZlBiRAroKXARsOkduvHvT%2FLfViHWtF%2FJXjiBtwbn38S8gII6un%2BftpYXpCg5pByq3WR3EoGzMcVT9reTWJubfe0GvdFCks%2FlHZchl97LWTlDmGItTF4q81JoCKd07QG0qJ5A7fmcim0WzVr1LiOnqt2HTbXh59wgVuKWJw%2F%2BVL49892iHtEl7LBePLH6DkfBo%2B4nXFhhVGoMJ2s8sMGOqUBwNqwT9KCCl2wf4qNXc4DVDXDh6MjL5%2BxmUAquMqk%2Fu%2F4rKrHiz%2F%2Fo%2BvJwC92F3WC21%2FjbzSSgccyC89%2B1Ritsxh0Ql0AU%2BWUGd1bHVxI7FX45cWkgKFf4O%2FZb3wb4IsvNWPyIxvepxx8Q43O8iNXjtIqwncZfp5f0dXfKK6W4lLkYTIdBdmjxO3wHGge6wSVps9RcfoUqtozrul6mpNx4XT9BuFo&X-Amz-Signature=95beb936d5f1e21dd7c8718d8a80db380b0ae63078ba11c14ca1015767451d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UA2JTG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqlb9AzId3DlwKL4be9ueqhq3JLQU%2FZKEFvK71%2BBT2pAiEA%2FSBCa4JGrUKSsD3lsFqL0mVT%2FSuaE%2FIS2Rc11u7fpwUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1aWcPiRlvECzRgFircA25e1NFaQ6uBwr9ZBAUsyOzYZZAZGXtBAHkPdkhQ%2BQIkgTwLlw7V3u5ZDd1JlO27Tkca%2FC0%2B0OqhR%2FutOySGWhBPC88Ztp%2FbWnZIvpJvliOsVIbQfr3dgZwtUh9SB6jHUCo7qTcP0HtGlrdlW6zlgJOdzgAGcWqCZIFlik3cq2IaawnXVCg9nfrOlQ%2B2hvlobuB9oQxJTkaj3jZSNSZ0D51lYP5CEDX9gz%2B8eUz0IGwBzEwUmsUFSfOtdO8K4SYA4aOKSeR%2BW102Alleb6q9AJ8tTYcyoeGnq5dr5VC1byAv%2FxJXhEDTPdtKmlXs8S9AFqaLVLtpY%2BEcX1yBC%2BnIPqaOXgoIHZY1Us2wgEZ7n9EnCyx0aScwO5P%2FYHcO7sV%2BHiZH1t6aA7yUBuDA4StIhv5LAqtzNmsBrdUxKvZvJcPd7TRw%2FZlBiRAroKXARsOkduvHvT%2FLfViHWtF%2FJXjiBtwbn38S8gII6un%2BftpYXpCg5pByq3WR3EoGzMcVT9reTWJubfe0GvdFCks%2FlHZchl97LWTlDmGItTF4q81JoCKd07QG0qJ5A7fmcim0WzVr1LiOnqt2HTbXh59wgVuKWJw%2F%2BVL49892iHtEl7LBePLH6DkfBo%2B4nXFhhVGoMJ2s8sMGOqUBwNqwT9KCCl2wf4qNXc4DVDXDh6MjL5%2BxmUAquMqk%2Fu%2F4rKrHiz%2F%2Fo%2BvJwC92F3WC21%2FjbzSSgccyC89%2B1Ritsxh0Ql0AU%2BWUGd1bHVxI7FX45cWkgKFf4O%2FZb3wb4IsvNWPyIxvepxx8Q43O8iNXjtIqwncZfp5f0dXfKK6W4lLkYTIdBdmjxO3wHGge6wSVps9RcfoUqtozrul6mpNx4XT9BuFo&X-Amz-Signature=510ab5ed36fc299f8f296fde722e7e04cc15ee3a0623843be59e5cf7ba2bbce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UA2JTG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqlb9AzId3DlwKL4be9ueqhq3JLQU%2FZKEFvK71%2BBT2pAiEA%2FSBCa4JGrUKSsD3lsFqL0mVT%2FSuaE%2FIS2Rc11u7fpwUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1aWcPiRlvECzRgFircA25e1NFaQ6uBwr9ZBAUsyOzYZZAZGXtBAHkPdkhQ%2BQIkgTwLlw7V3u5ZDd1JlO27Tkca%2FC0%2B0OqhR%2FutOySGWhBPC88Ztp%2FbWnZIvpJvliOsVIbQfr3dgZwtUh9SB6jHUCo7qTcP0HtGlrdlW6zlgJOdzgAGcWqCZIFlik3cq2IaawnXVCg9nfrOlQ%2B2hvlobuB9oQxJTkaj3jZSNSZ0D51lYP5CEDX9gz%2B8eUz0IGwBzEwUmsUFSfOtdO8K4SYA4aOKSeR%2BW102Alleb6q9AJ8tTYcyoeGnq5dr5VC1byAv%2FxJXhEDTPdtKmlXs8S9AFqaLVLtpY%2BEcX1yBC%2BnIPqaOXgoIHZY1Us2wgEZ7n9EnCyx0aScwO5P%2FYHcO7sV%2BHiZH1t6aA7yUBuDA4StIhv5LAqtzNmsBrdUxKvZvJcPd7TRw%2FZlBiRAroKXARsOkduvHvT%2FLfViHWtF%2FJXjiBtwbn38S8gII6un%2BftpYXpCg5pByq3WR3EoGzMcVT9reTWJubfe0GvdFCks%2FlHZchl97LWTlDmGItTF4q81JoCKd07QG0qJ5A7fmcim0WzVr1LiOnqt2HTbXh59wgVuKWJw%2F%2BVL49892iHtEl7LBePLH6DkfBo%2B4nXFhhVGoMJ2s8sMGOqUBwNqwT9KCCl2wf4qNXc4DVDXDh6MjL5%2BxmUAquMqk%2Fu%2F4rKrHiz%2F%2Fo%2BvJwC92F3WC21%2FjbzSSgccyC89%2B1Ritsxh0Ql0AU%2BWUGd1bHVxI7FX45cWkgKFf4O%2FZb3wb4IsvNWPyIxvepxx8Q43O8iNXjtIqwncZfp5f0dXfKK6W4lLkYTIdBdmjxO3wHGge6wSVps9RcfoUqtozrul6mpNx4XT9BuFo&X-Amz-Signature=8b1a5abf2035ab707b49169d79c6c274cf9152e6eac0e2b9589501789e4503ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWYD6I6Q%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApyU3Lv7AX0vUWMBZVHUM7jBA8RKmY0PiJNMBJxfvVjAiAgNBjmbBWZEfR8TbZ4D0en0nL2rjadI4%2BAGWBWTnnuNCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIqxeYtlmO9VWa8pAKtwDucfvXmgWaqsdnT8HsKdGJi7nJ%2FnsA7OPVyA%2BbG2t%2B%2BzwYuo3bGgk6tIV91NTY6jM1UKIkahBuSQAkm6s7YFGUS7fzWA9FqvP5u4ViDrkEQ1vm1aAkrLQYX1Z3TwCzCghgZg8Mnes5IQQrEfLZmO%2BRvwFZ%2BjHeoKMyRAEhj4xaRjQI7YaSSpafj%2BP9DRYWs0h%2FmE4vHq7U2DGupPvD0me4iRVyOVUa64umVFI4xZ0JNKMB7elnJt%2By3Bq7s%2Bh44XfbenR5m38Xd%2BPEWbucwGZWQaw78sG9cqD90nudi7FiBHKc5V3wgv8mPO3VFcaQNrKfISmhCsiyEwOVqP1AePHiT7ER5scSaeWu7CA9c7OaMK%2BeWcwbBlxj%2FHGr0iod3b6%2FihB%2F1MIVFe%2BH2FBUiGZa2xlgItkQCYblKVvDDlKyAyOVS0CoLwVdRFtlqDgPPGPWEUZ1%2BCXQwjQ0x%2BflWmvGM1K%2B8nCeoy8bfeRcJWMJzbchp%2Bd7qKqa77F9jsPa9h6HYChz31iXbZXMU%2FL6hqkP85Bh6aMDk8i7crwLFw%2BuQqfQkPPcVxyE%2B2q3JQCsUEUgNuGKfnoGm7SIuDI6axbdP0Ze%2B9uyDnOQUxq2cQZunq%2FBJ2yblLHDDWpmvIw2azywwY6pgGm4cTTj2f6Q751n%2FjmDlCLF2GTf6nmTICmRXCIDiHckZ6uYKFKXmsjhtd%2B9ut9xhTgRfl9taExTbUP0rSnM9CNSd73jdupK%2BhJg%2FI6ejVYB8P77HwbxizupcLSysesWtII2EDKNUNFjC0cHN1dtfOuNC3FGKImj58XXQNV609ehxif7SEJpF0y4PWnqE0s6YlMeQU3uBguQ7%2BVPcxLR%2FeJStiiIaKI&X-Amz-Signature=cfc49c5ea2b66561f6217e8c81384f65fa8aae758802e7b38202c19a49ea33c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AO2AVKS%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7SRxngajewDIBTzhMJ6UC94oqUa8qTYhV8Ys1e%2FTSowIhALlh7RYiVQI2R3hFPAtPwE4n1HWCu6E1R5uHGbVUKmKbKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzC5NNw%2FqWhl%2B4cheMq3ANiUMZv3wDaipOML8aZ72f7k%2FdvK8MNLb9BQ8Z6LEUAOyQvul%2BxN0M8zaSkffBsISgtYy2R3Qy0PdILJCWcm57S3uAaoTsgHqqiS%2FF%2Ba9KvGDj2YknXTJr2ARO%2B1R%2BkxEfS4R%2F6odFUxorNXOsFahZxEMooZUJyFAUWqFAckPlcItlEXcRBkNnPfImHvsjxt2di8tZZwJ%2BSv2ALMhBbpiLlzSSV2BrdL%2FBc7bu3QKjLGlSL%2BSj1bdmxUCY7Zp%2FrCCw8jp%2FPbGze9ZajHdb2AaTKeevleJR%2B0YiCbZuV2LlVAr1rUJtE6JR7ESVCNPIqmvAXGbQ%2B9TnPSOemTxyHvBx%2B%2Bq4%2BoShK%2BADNOM0Dm9nV4kFcDNzyPeLT36ZPzojIHftkA51kzzvJ8hXe9E3ShsQnxL9xnEUn1CrN8bmqiJDD%2Fto2tPQNLsa9XKP7Wxtyxc9YXVRaEAk2BHCDNtEMqpenMxtZWSlqPChdU11my8jLK9cIa1%2FVhQwr51sU6%2Fa7%2F58g7GZttbvInYJfptBS%2BkilH98xAOfEWu6cuRdHbIhfssEC1DhCCH2MvFNDD%2BbuEfthXFj5hKKD2ED3aikEF%2BTvDmLfsShIPkx5rLXMlenSl8a%2Bdudzv0iw5qfF0TC%2Br%2FLDBjqkAUWLB3uyYdCGpB%2BgkQrVOtrm2zKKmROwbXD9MAwkR6JXr6EUKzr62bQuOTePbxiFQNid82C7QFlrMhR%2FGrzt2teD1Gk6Bhn%2B2XIzV8BRbYlnPrKpREM4eCIDKJlBGOAW3DWDw034Nt3%2BomUlH%2FHiMGV6xsv%2B9YNRQffm4WNJnPiKcUKG88lGgTSNl6g7xd2eVEGedF6i8is8J6WSAa%2FoG2W%2FsnJN&X-Amz-Signature=efc04a6ee978d6515cb8f9f817f7c08bd23bbf2f7b947c15b9969cbc7a74e6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UA2JTG%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqlb9AzId3DlwKL4be9ueqhq3JLQU%2FZKEFvK71%2BBT2pAiEA%2FSBCa4JGrUKSsD3lsFqL0mVT%2FSuaE%2FIS2Rc11u7fpwUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1aWcPiRlvECzRgFircA25e1NFaQ6uBwr9ZBAUsyOzYZZAZGXtBAHkPdkhQ%2BQIkgTwLlw7V3u5ZDd1JlO27Tkca%2FC0%2B0OqhR%2FutOySGWhBPC88Ztp%2FbWnZIvpJvliOsVIbQfr3dgZwtUh9SB6jHUCo7qTcP0HtGlrdlW6zlgJOdzgAGcWqCZIFlik3cq2IaawnXVCg9nfrOlQ%2B2hvlobuB9oQxJTkaj3jZSNSZ0D51lYP5CEDX9gz%2B8eUz0IGwBzEwUmsUFSfOtdO8K4SYA4aOKSeR%2BW102Alleb6q9AJ8tTYcyoeGnq5dr5VC1byAv%2FxJXhEDTPdtKmlXs8S9AFqaLVLtpY%2BEcX1yBC%2BnIPqaOXgoIHZY1Us2wgEZ7n9EnCyx0aScwO5P%2FYHcO7sV%2BHiZH1t6aA7yUBuDA4StIhv5LAqtzNmsBrdUxKvZvJcPd7TRw%2FZlBiRAroKXARsOkduvHvT%2FLfViHWtF%2FJXjiBtwbn38S8gII6un%2BftpYXpCg5pByq3WR3EoGzMcVT9reTWJubfe0GvdFCks%2FlHZchl97LWTlDmGItTF4q81JoCKd07QG0qJ5A7fmcim0WzVr1LiOnqt2HTbXh59wgVuKWJw%2F%2BVL49892iHtEl7LBePLH6DkfBo%2B4nXFhhVGoMJ2s8sMGOqUBwNqwT9KCCl2wf4qNXc4DVDXDh6MjL5%2BxmUAquMqk%2Fu%2F4rKrHiz%2F%2Fo%2BvJwC92F3WC21%2FjbzSSgccyC89%2B1Ritsxh0Ql0AU%2BWUGd1bHVxI7FX45cWkgKFf4O%2FZb3wb4IsvNWPyIxvepxx8Q43O8iNXjtIqwncZfp5f0dXfKK6W4lLkYTIdBdmjxO3wHGge6wSVps9RcfoUqtozrul6mpNx4XT9BuFo&X-Amz-Signature=5f12d17047d1b0ecf503062033d79dd831be9a358bc888c7c90d4fcbea2e77f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
