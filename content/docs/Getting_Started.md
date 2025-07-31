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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUR7SFTD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPoLAKpfT%2FaCp6cc%2B8zpxOqCPDFVPm0FXz90K0RnRYBAiAIQF0NEfrfSpOwwJ%2FoGvyUm5P6VDYqAjYaKtAmgbTcdyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2B%2FmaMlFFvlkFhyMKtwDwAdIFVhK9F34kp8XBB0Qhxbx0YT3qzaxoEQY9oikORvARcVRT0JBTYtj18PDWa1wsl%2B5mtouYc8eZ2toXEaFUuLpgjFDXczMlSZhv29VcV8hcLMLYG41c2g0Trv%2FY4fMTf0oewVmZX2fTWrIJESRNLXjtlzE6gBRl%2BsPFpUccewPwB7AJGHrGn1RBvcs5HaSyrcSPjzN7IrATpoOHuLxGE1e%2FFqdIXKAxJJY%2FXek3isiCxJ6vfpAn2mTh8l4bauIVwQTVBMTYlPJKlllWNfP5FmG%2FVS05p5M7tdj74L2HGVadGGWWwoDFopKd7CYOVyGKdO6qd5pHiNNCZC4D2t07xbmvOa0e%2FOQnToOFRx9YiU6z5Ri3PG7JRGJj90KkvMzDtk4bQ9sAicwSsPL7Dh0xaznX3SETUkpd1paDLcuDlkKrLahr9BdLJu7YmEnqlAdg%2FH%2F1ccgvtJBK%2BxX7AGCEPrmI1z57XB%2BRZC83EEK8dhtQ%2BRz9RxYcNsLfhP5JhX0%2BHKtpk9fySls9jMuPoxQSILlZpP4XATUmvJW3lijctycE3GpqT54nWbx7oiIGboWGPBFd14m%2BuTtOlqtwkoKDzBY%2BagPNw3nLFpf44EHUGPF1rHlm7CXvVicNZ0w6cWtxAY6pgEOwvsRC6uBXjo4bQwR8NDfXM5cwF5Eg8MFExlzy8hpe0Ra6MRonjKuWVbPJLF6sGPASOzjBw6HWWbRCscr63uDdAmRybgfMYa1BNSAVq%2F6GObJg4ET3DCGNYxC%2BuRavUniEkfXiG7yKBPLGimDNk6%2BGEnzGWe%2BjhcNXvfi8LLGNuRUI73gWbNrTEoasv52QSEgF7NXLfmqg8erRZbkbiwX5k5XDrik&X-Amz-Signature=b00e70b6589b19b6de162efb5065cf1d50c77d2ffbda29134e806f4864e46b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUR7SFTD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPoLAKpfT%2FaCp6cc%2B8zpxOqCPDFVPm0FXz90K0RnRYBAiAIQF0NEfrfSpOwwJ%2FoGvyUm5P6VDYqAjYaKtAmgbTcdyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2B%2FmaMlFFvlkFhyMKtwDwAdIFVhK9F34kp8XBB0Qhxbx0YT3qzaxoEQY9oikORvARcVRT0JBTYtj18PDWa1wsl%2B5mtouYc8eZ2toXEaFUuLpgjFDXczMlSZhv29VcV8hcLMLYG41c2g0Trv%2FY4fMTf0oewVmZX2fTWrIJESRNLXjtlzE6gBRl%2BsPFpUccewPwB7AJGHrGn1RBvcs5HaSyrcSPjzN7IrATpoOHuLxGE1e%2FFqdIXKAxJJY%2FXek3isiCxJ6vfpAn2mTh8l4bauIVwQTVBMTYlPJKlllWNfP5FmG%2FVS05p5M7tdj74L2HGVadGGWWwoDFopKd7CYOVyGKdO6qd5pHiNNCZC4D2t07xbmvOa0e%2FOQnToOFRx9YiU6z5Ri3PG7JRGJj90KkvMzDtk4bQ9sAicwSsPL7Dh0xaznX3SETUkpd1paDLcuDlkKrLahr9BdLJu7YmEnqlAdg%2FH%2F1ccgvtJBK%2BxX7AGCEPrmI1z57XB%2BRZC83EEK8dhtQ%2BRz9RxYcNsLfhP5JhX0%2BHKtpk9fySls9jMuPoxQSILlZpP4XATUmvJW3lijctycE3GpqT54nWbx7oiIGboWGPBFd14m%2BuTtOlqtwkoKDzBY%2BagPNw3nLFpf44EHUGPF1rHlm7CXvVicNZ0w6cWtxAY6pgEOwvsRC6uBXjo4bQwR8NDfXM5cwF5Eg8MFExlzy8hpe0Ra6MRonjKuWVbPJLF6sGPASOzjBw6HWWbRCscr63uDdAmRybgfMYa1BNSAVq%2F6GObJg4ET3DCGNYxC%2BuRavUniEkfXiG7yKBPLGimDNk6%2BGEnzGWe%2BjhcNXvfi8LLGNuRUI73gWbNrTEoasv52QSEgF7NXLfmqg8erRZbkbiwX5k5XDrik&X-Amz-Signature=8e5b08a5c8363c9e66e024dfc3e11a3a66beba3958545186d07b670543dbbc8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUR7SFTD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPoLAKpfT%2FaCp6cc%2B8zpxOqCPDFVPm0FXz90K0RnRYBAiAIQF0NEfrfSpOwwJ%2FoGvyUm5P6VDYqAjYaKtAmgbTcdyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2B%2FmaMlFFvlkFhyMKtwDwAdIFVhK9F34kp8XBB0Qhxbx0YT3qzaxoEQY9oikORvARcVRT0JBTYtj18PDWa1wsl%2B5mtouYc8eZ2toXEaFUuLpgjFDXczMlSZhv29VcV8hcLMLYG41c2g0Trv%2FY4fMTf0oewVmZX2fTWrIJESRNLXjtlzE6gBRl%2BsPFpUccewPwB7AJGHrGn1RBvcs5HaSyrcSPjzN7IrATpoOHuLxGE1e%2FFqdIXKAxJJY%2FXek3isiCxJ6vfpAn2mTh8l4bauIVwQTVBMTYlPJKlllWNfP5FmG%2FVS05p5M7tdj74L2HGVadGGWWwoDFopKd7CYOVyGKdO6qd5pHiNNCZC4D2t07xbmvOa0e%2FOQnToOFRx9YiU6z5Ri3PG7JRGJj90KkvMzDtk4bQ9sAicwSsPL7Dh0xaznX3SETUkpd1paDLcuDlkKrLahr9BdLJu7YmEnqlAdg%2FH%2F1ccgvtJBK%2BxX7AGCEPrmI1z57XB%2BRZC83EEK8dhtQ%2BRz9RxYcNsLfhP5JhX0%2BHKtpk9fySls9jMuPoxQSILlZpP4XATUmvJW3lijctycE3GpqT54nWbx7oiIGboWGPBFd14m%2BuTtOlqtwkoKDzBY%2BagPNw3nLFpf44EHUGPF1rHlm7CXvVicNZ0w6cWtxAY6pgEOwvsRC6uBXjo4bQwR8NDfXM5cwF5Eg8MFExlzy8hpe0Ra6MRonjKuWVbPJLF6sGPASOzjBw6HWWbRCscr63uDdAmRybgfMYa1BNSAVq%2F6GObJg4ET3DCGNYxC%2BuRavUniEkfXiG7yKBPLGimDNk6%2BGEnzGWe%2BjhcNXvfi8LLGNuRUI73gWbNrTEoasv52QSEgF7NXLfmqg8erRZbkbiwX5k5XDrik&X-Amz-Signature=436e222a9e8457d979686426e2b2f9024422ff613c6acef778285abd9e1d577e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675T4MLZJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARfUsp8GNjOP%2Ftzq%2FGdABiGhWOUw1h7%2BN8sJnT8Tp36AiEAvbtAf2numPD4u60n3BtFED%2BgNf6PNl9n8w9V2Uf%2F%2BrkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuaSROi12ofBukyqSrcA6O5Hl2DMSJHmVBdAJn6uKImrWYnGo%2FbKCIOHuBj7o6S2HewUqTKpdpuK57vwqs3oDvbH2FbCdhsgdPmortN7T5VmLojq9CNpoK1%2BesLdVB8JRcIQy0Z65ukdu6buEN61%2F06PUn685ZJIKJVimHE7ufEhgi5vJPZM9NIfDxVml%2Fsl4qtS0%2FZDVmnRLbMOB1pbSYqg6Sbc6s0COcVcFrlM3l26%2BGnXuE0C5G1VxGJkK%2FKp0KWdJ1oymTdvRguSrs7T6bNDbrKs%2B0aSrDAHGhIoM8lWMPTZtSWViFh524ExaAayMh0bm3eO36TNxICc9V7xfllXwGcuZHkIaCgjr7lmejjyKVkDrVpfN1IDtvEvNRyVYGzP1Gp2aIFKzb3MiUC1kXu4gtTKBJiq0DStbUvUAmLSb1Fo3rAh%2FQtVEyzi5uRKnAEWRdewFqOGJNQRxGkAxbQCvQB5%2FeF5VjZRNQgSicwZqXX4kQTIG9yy1OArmxg4HO07fYXdDGi50Ggi72g5UVkTnhAyQkfYvSrzE%2Fk4w5j%2B0%2FwMKGwiujoAoIZYvAAnOeXhrfyBoObOIKpIk5XQJWtxMXUPSlGwun3KBSosXswjNOMgB71Yr1VowX8kgIcVvkNBARfNSFzb8dFMKvFrcQGOqUB3KJoeSsPoP7F0hJnsqsXztcsfN2I5lo5AsCoaJF%2FoLF7%2BlUFqHJuQaEFoTKa9jbkEY4Qw3wOyz5KmdEjf%2BqgGrb4B%2B30nQ%2F%2BwotcCdP6MR32x6BdPSH07mTWvheMM5GVhqyFH4fS8E9yFHDXVB%2FLMZN%2FeAwTURxcArKMDgc5q6qN9SQKnGYbL3s%2BN%2FOvG0eq5yUReni%2FE787XPtRxg%2BKwil45sAn&X-Amz-Signature=59749c2badab2ff6e776a8c084c0b53d375b841fb9a607049ed189af1e7bb112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR2LKALG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw%2FSLN%2FPTHVdES7e6W9RIrqVb85ciSzAGYP17w9MzcOwIgEnWxxaXFSWBInuySHjvO0AYMXwqAlVpiYUG64DtA6b8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApW79od8wI7g2XveSrcA%2BiMSM3BocGyfnONPyn1PFS%2B3fYnGb6t83YFckzTQpwLN16m7EGtP%2BsQnAMQR76qnOHzCZcXce7zo%2Fvh1tFf71ncFU4BH3B%2FGZEWDTufHyfki%2FOfDAsOWfzrPy7ujBBpbyuityBed%2BkN1I0dChsaIj5RSkIaujCLSjH%2Fzy7QEsRChRZCQ0BjcZbZcH8hYc0UDftzdbW3PiS9B49W4hhK42PAIgCj0wY4oKQzCXok5ADeCI%2FLfbkkq2UAejppKmrcnUjhZc9pPuUmFJj6CgCTh3db91Y4QZjZltHs7G9V1ufEUGYDnUmOtpHRaxXV3HjZvWCDBmb45ECyHpQZ0WQ7GRIsFYbMZb5WPnk%2B3EgSySgVziuTXudiz6Ae7bI4pTIHZ8wGGcOo5cw0wH1D91n0smudcFoQxb3bhTBFtFhPW6k49yIBSuy7hhEvvKTWSiyErKijj%2F2hAkOKZqZggYnhIPT2mwOPq0bN23R6OBUZPbFP%2FRtMSXch5OMHk4EoApgs1K9hnwFQiMzBHDr9DhT4cV4cXBdirsJ2fHLjnoOK8dt8UBwATRRsNnzebtT29WS9zjKgSFCuhJYS4SIRg5%2B4okG%2BFZ1gqfqj%2F5cOxW%2B5g6MH%2B36KSvz5y8rkCuqVMMHFrcQGOqUBjA4kjC0C0i1dJIw83tJjk5rLcmOuM7b4A1KnIAPlQuEcZ%2B180vUrfA4GcO4xQbZrEaqveI%2F4MbGAE%2FfN0rWAhaQ0gVY6Lbnpy3FHimELtxnxPAKtjwnuMUTG08iXBx%2B1OGhuHzbbJSX%2BGnn3nwE0sIWQ0YwSVQXg2KO%2FBHHribrJ6E5esBUaV1E2qB4bwk%2BBeR93hCfvZRBvbytxkz2a45yTVCra&X-Amz-Signature=b3a86db62dcfb3cae815f19ca4dd559329922e51cb30164bf26c63111070e595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUR7SFTD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPoLAKpfT%2FaCp6cc%2B8zpxOqCPDFVPm0FXz90K0RnRYBAiAIQF0NEfrfSpOwwJ%2FoGvyUm5P6VDYqAjYaKtAmgbTcdyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj%2B%2FmaMlFFvlkFhyMKtwDwAdIFVhK9F34kp8XBB0Qhxbx0YT3qzaxoEQY9oikORvARcVRT0JBTYtj18PDWa1wsl%2B5mtouYc8eZ2toXEaFUuLpgjFDXczMlSZhv29VcV8hcLMLYG41c2g0Trv%2FY4fMTf0oewVmZX2fTWrIJESRNLXjtlzE6gBRl%2BsPFpUccewPwB7AJGHrGn1RBvcs5HaSyrcSPjzN7IrATpoOHuLxGE1e%2FFqdIXKAxJJY%2FXek3isiCxJ6vfpAn2mTh8l4bauIVwQTVBMTYlPJKlllWNfP5FmG%2FVS05p5M7tdj74L2HGVadGGWWwoDFopKd7CYOVyGKdO6qd5pHiNNCZC4D2t07xbmvOa0e%2FOQnToOFRx9YiU6z5Ri3PG7JRGJj90KkvMzDtk4bQ9sAicwSsPL7Dh0xaznX3SETUkpd1paDLcuDlkKrLahr9BdLJu7YmEnqlAdg%2FH%2F1ccgvtJBK%2BxX7AGCEPrmI1z57XB%2BRZC83EEK8dhtQ%2BRz9RxYcNsLfhP5JhX0%2BHKtpk9fySls9jMuPoxQSILlZpP4XATUmvJW3lijctycE3GpqT54nWbx7oiIGboWGPBFd14m%2BuTtOlqtwkoKDzBY%2BagPNw3nLFpf44EHUGPF1rHlm7CXvVicNZ0w6cWtxAY6pgEOwvsRC6uBXjo4bQwR8NDfXM5cwF5Eg8MFExlzy8hpe0Ra6MRonjKuWVbPJLF6sGPASOzjBw6HWWbRCscr63uDdAmRybgfMYa1BNSAVq%2F6GObJg4ET3DCGNYxC%2BuRavUniEkfXiG7yKBPLGimDNk6%2BGEnzGWe%2BjhcNXvfi8LLGNuRUI73gWbNrTEoasv52QSEgF7NXLfmqg8erRZbkbiwX5k5XDrik&X-Amz-Signature=41ab43780aacecfcd8c881f64ff760cfd008ac8f2a135efef9f996ae8df693d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
