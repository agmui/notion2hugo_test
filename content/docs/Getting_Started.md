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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZINRZO%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCEqnQftY7BfmCNNIi5BG701%2FM2PoQqgPIDnrSoUyYicgIhAKvYSa3IQjN8h8vkPEpxV1GgNvS2wtAe598n9fPeXvgNKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQcxgdloCO5369oYoq3ANeNRuBHFGjNgXMVxXyggY4KUaZNj29WsUcCX7e%2FvP6uX60dfh0zfhJqYD2tJJGSvEp%2FQH7hfqcTJY4CDFU5lJUlPV5IzYw3RGwiwyXfVro8Urk%2FYMjcce3ILYdbmv4oBcLo2j0PUJtQG84IEHN%2Fo7oVvozeNtIKsUDQfCVtLWQ0nOhYbWefE2yO7PuHpchc0npFgQ8vfoQ8x508qn4KMO7bwgnZWtlzQUsO%2FdtLk15zTfbX5oIhOFbwsEP2P16gafTwJ0sv0kjHVQZ9y1bE%2F%2F8CFizLlm7mR8eh6KMgMnvWtXWt%2BpJ1iZS4wJ7iRLR4NGWFR40J35mvxUR1nkkd%2BVII3NIJxthvwbtG4ZkNaQ6%2F%2FKtPMg7W2GgmHxOt87Z6iANqNnQFP1DCkhei4VJrrD48AamDwWf9rs7L3a2bcj%2BPRl6lujkG%2BjCMm%2FR7z2upIFqGMKcH1GM723Q0vZw5zhzwhOnsBBQPYh1QCKi0JwCSyHt%2FnuSVEtKxlCMmyKuhoxFGDkL%2FUQgl4dHnhrhc5U%2BcblbNnSOqTG%2FiREleGJsBYPnFIkgDeno0UOTqgrzeOqa6RDM4ASBKSy1DCEYJUXmB4Cl6bU7J1QfYV4Riwwdl9TsVAN%2FkvRxQ5wUrDDEydPABjqkARBTN6h65Z6Y7trQmKmTNRFWdaV9cGHlvfhbF17fhFS8hiPkF4eFadZa%2FIyIich25n2wUxYlZwTg6mP%2F%2BB8w5cpeSDqTa%2BIby5tGeNdru%2Berfw2cxMROVaCqwUikE7uX3uGlz%2BYCC4WsJSEosRpP%2Bzmo6YN0W3XzZU%2BPYVnBTXrPVXx438cYa2FL1LHDGYJ41QqQVYZqCOpW47s0q0rqGWDwDWZF&X-Amz-Signature=4fdc4ee637a8cb426583b84679c0b8b78effaa6fdf74cce0e867bd01fb664134&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZINRZO%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCEqnQftY7BfmCNNIi5BG701%2FM2PoQqgPIDnrSoUyYicgIhAKvYSa3IQjN8h8vkPEpxV1GgNvS2wtAe598n9fPeXvgNKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQcxgdloCO5369oYoq3ANeNRuBHFGjNgXMVxXyggY4KUaZNj29WsUcCX7e%2FvP6uX60dfh0zfhJqYD2tJJGSvEp%2FQH7hfqcTJY4CDFU5lJUlPV5IzYw3RGwiwyXfVro8Urk%2FYMjcce3ILYdbmv4oBcLo2j0PUJtQG84IEHN%2Fo7oVvozeNtIKsUDQfCVtLWQ0nOhYbWefE2yO7PuHpchc0npFgQ8vfoQ8x508qn4KMO7bwgnZWtlzQUsO%2FdtLk15zTfbX5oIhOFbwsEP2P16gafTwJ0sv0kjHVQZ9y1bE%2F%2F8CFizLlm7mR8eh6KMgMnvWtXWt%2BpJ1iZS4wJ7iRLR4NGWFR40J35mvxUR1nkkd%2BVII3NIJxthvwbtG4ZkNaQ6%2F%2FKtPMg7W2GgmHxOt87Z6iANqNnQFP1DCkhei4VJrrD48AamDwWf9rs7L3a2bcj%2BPRl6lujkG%2BjCMm%2FR7z2upIFqGMKcH1GM723Q0vZw5zhzwhOnsBBQPYh1QCKi0JwCSyHt%2FnuSVEtKxlCMmyKuhoxFGDkL%2FUQgl4dHnhrhc5U%2BcblbNnSOqTG%2FiREleGJsBYPnFIkgDeno0UOTqgrzeOqa6RDM4ASBKSy1DCEYJUXmB4Cl6bU7J1QfYV4Riwwdl9TsVAN%2FkvRxQ5wUrDDEydPABjqkARBTN6h65Z6Y7trQmKmTNRFWdaV9cGHlvfhbF17fhFS8hiPkF4eFadZa%2FIyIich25n2wUxYlZwTg6mP%2F%2BB8w5cpeSDqTa%2BIby5tGeNdru%2Berfw2cxMROVaCqwUikE7uX3uGlz%2BYCC4WsJSEosRpP%2Bzmo6YN0W3XzZU%2BPYVnBTXrPVXx438cYa2FL1LHDGYJ41QqQVYZqCOpW47s0q0rqGWDwDWZF&X-Amz-Signature=92b652af3c9a79a664579680c7ceb76bd21feb307a3073f6a4723e56a62093e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZINRZO%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCEqnQftY7BfmCNNIi5BG701%2FM2PoQqgPIDnrSoUyYicgIhAKvYSa3IQjN8h8vkPEpxV1GgNvS2wtAe598n9fPeXvgNKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQcxgdloCO5369oYoq3ANeNRuBHFGjNgXMVxXyggY4KUaZNj29WsUcCX7e%2FvP6uX60dfh0zfhJqYD2tJJGSvEp%2FQH7hfqcTJY4CDFU5lJUlPV5IzYw3RGwiwyXfVro8Urk%2FYMjcce3ILYdbmv4oBcLo2j0PUJtQG84IEHN%2Fo7oVvozeNtIKsUDQfCVtLWQ0nOhYbWefE2yO7PuHpchc0npFgQ8vfoQ8x508qn4KMO7bwgnZWtlzQUsO%2FdtLk15zTfbX5oIhOFbwsEP2P16gafTwJ0sv0kjHVQZ9y1bE%2F%2F8CFizLlm7mR8eh6KMgMnvWtXWt%2BpJ1iZS4wJ7iRLR4NGWFR40J35mvxUR1nkkd%2BVII3NIJxthvwbtG4ZkNaQ6%2F%2FKtPMg7W2GgmHxOt87Z6iANqNnQFP1DCkhei4VJrrD48AamDwWf9rs7L3a2bcj%2BPRl6lujkG%2BjCMm%2FR7z2upIFqGMKcH1GM723Q0vZw5zhzwhOnsBBQPYh1QCKi0JwCSyHt%2FnuSVEtKxlCMmyKuhoxFGDkL%2FUQgl4dHnhrhc5U%2BcblbNnSOqTG%2FiREleGJsBYPnFIkgDeno0UOTqgrzeOqa6RDM4ASBKSy1DCEYJUXmB4Cl6bU7J1QfYV4Riwwdl9TsVAN%2FkvRxQ5wUrDDEydPABjqkARBTN6h65Z6Y7trQmKmTNRFWdaV9cGHlvfhbF17fhFS8hiPkF4eFadZa%2FIyIich25n2wUxYlZwTg6mP%2F%2BB8w5cpeSDqTa%2BIby5tGeNdru%2Berfw2cxMROVaCqwUikE7uX3uGlz%2BYCC4WsJSEosRpP%2Bzmo6YN0W3XzZU%2BPYVnBTXrPVXx438cYa2FL1LHDGYJ41QqQVYZqCOpW47s0q0rqGWDwDWZF&X-Amz-Signature=4061f34334c6ab29db4e26dfd2a00a61037173c20bca9ab80e643ae63bac41ce&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZCSCY7%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEkqySrAk0vK8eT4i82VW%2BWSV2umrQAVbQkFqpsYcGImAiA3TGAb8WI9VMWF1xYcHMzjitck3BcJdmsZAsY84P7XhCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiSO9tvowfh3rbhmIKtwD5fKTj7fxDpl4SCxW%2FiWsyCZ9rT9UzwEsjJwBZBo%2F2LZ7cfsSz4q71YFHEhzTDFqoEZiOBm5r8damRgYX6UeZopuDyFDWhJaBg6%2B2j%2BjfWsMQnmKfy5twG6LSQHY7dlUq%2Brj48OmzqxK6vSYXUWUczjY%2B3FlCHBwidJ6QAZAw4kvssnQ%2Bm3SvLg7jBHrWGy9ydqxSdGAoqpVIySH2XcpzJiKUAcYSWzGb2H4zt1W7WQtH5rsjVt%2BGA5QWlwajYJrRmF0CqS5MoRGNiLWmKoW%2BknBydhLKreXDWEv5oZn0j1kEJQ1OkD%2F44XBxs1%2BkLJOA24OageIBipISI%2FDxulX4qKGfZG4KWLyUDKiGNOtQ%2FypmUQXYgrp6%2B826cVsGvElpxp3e3CRxcBxRLdEYBDqUPYHv%2BgsgcS%2FoOyq57TUAUGgoJtzWftoWTN8LnTa%2B%2FBK3vbvFDLpKLHFBi4VQ9DqmX9%2BjYZO7m0dyKN2yPBYRPNd%2FuF6g5cTZANQ8X1QcSd%2By8aVLN3UkIKI7vDpsGN45LYs8nMfFkH5IOrQvIXUDXxlo6itxGQQ2u9c%2B1esa%2BBJOZlRSBq1oCCTzzP49XzoFtKngnbzLWqKE3i%2FNRJQ4sORBl%2F4l7%2FcF7%2BYruoow48jTwAY6pgHJt3yNfvYBC39SY21Hh2e90hG6y%2F5t%2F1qnIGGSetfU80Lenv%2F26Bf5YTyGXPg53oMtA1jBfeY6EiwYkzLSRdOcyYCPNjXUD9lIm8Se7hl8Bu5odcrfTXu1ZDhp9sNEeMO%2BA42Lwe8%2B92rELgzdz6BwsBliEa5bSOBV0ajkpHohMRIZ86iDBcHLOFVeyz5XdIgmaCEZu%2BvHSdYYCVZL1xpVtoE%2Fi%2FRA&X-Amz-Signature=974e4f8e781dc95d7234e2e9d89b6efb652fa795645dacae849292967c2730be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73YGF5Z%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDlsO7DgFdyk3BtrP6Xd9q7UIkyaY4Bd1fkofwp4csWqgIgM7E7Q%2FEz2KesW%2FKktdPAmsm%2F%2FNkhHjHUwFM7X6INQ2YqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzQI%2BaSpNZRcJeZhyrcAxSIiqK6jTXH0fxFFRogRBk5pUFYKXC6cczQKZtFeiSCvDkDRCd6x5Eq1ze179qzHZlUVviu0JH8VC0gUQydVBmLPgCb6c4zJhIG1HZVdNDd4ALvvE2JZ3r1Pxujkha0S8CaTOkxuehoASx0Y%2FfgzFrz7StDzruGau4pjbMUW%2B1trBwqqKr6LN66bP7xtQXJIHPt0IO0NHQIy5PhLhe93s0UfyI0z9QgqACfVeec1CgUhp5HNCLThQa2EkDksUplvRX2IzExIhZsiZoRWalHOy0%2FUZbqfvI4wu6kDsVf2%2FjkqcX4QiLD%2FUHGJ94FxIjrzydmvCjhqFZI18cDNzp49ocV51hEFbVGDZEmKzmzpT7TWAqmVkCr6yzSso6Djt3CH7csBub7ybHjhbK6kCxvLcZKAzlSXt6jXfD4YdyXRlvdCYHK8d%2FbReKToVyY5gG5eQsF%2Bcxlyv7rZmCR6FmceHAGTM8lViG%2Flp2vz%2B%2FPFkmud8olNt5pzoilI%2FpNIKqbFg1HYg892oybIAXpYz8pYok72BxzmyNVLTEZRpo%2FC%2ByFJ33qkhO%2FV7H6YtAmy1pX5YeaFsNHzQBqHiKi8AzgaA7Y4KzWOFGObjrVs7qZQ39Nw3ev3CqJSCvGjXaPMJvJ08AGOqUB26M4%2BcF6t7xtd%2Faev25oVhIPGdD%2F7Zx6TxEVUQH%2B78WAiUJqIB%2Ba1WLS6kPyNxknWyh%2Fqe18JPARwxtyEyv0jfj68fkQRkgDPIpVijS1ILwuhLNlcQ%2Bkmf9EdbLv5MRf5Wlp2RMEIqqcSW100GYwXcNMD2MSmYnHA2oGX30qzbqxIiu%2FG%2BOOKL1pWV7O44WIBkTHx8cLBtShzy6hUE2pXM%2FFRA2V&X-Amz-Signature=157b9214302b1a04a4ebc7df0d46e488570e5840c7437772c161f90aad8808da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZINRZO%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCEqnQftY7BfmCNNIi5BG701%2FM2PoQqgPIDnrSoUyYicgIhAKvYSa3IQjN8h8vkPEpxV1GgNvS2wtAe598n9fPeXvgNKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQcxgdloCO5369oYoq3ANeNRuBHFGjNgXMVxXyggY4KUaZNj29WsUcCX7e%2FvP6uX60dfh0zfhJqYD2tJJGSvEp%2FQH7hfqcTJY4CDFU5lJUlPV5IzYw3RGwiwyXfVro8Urk%2FYMjcce3ILYdbmv4oBcLo2j0PUJtQG84IEHN%2Fo7oVvozeNtIKsUDQfCVtLWQ0nOhYbWefE2yO7PuHpchc0npFgQ8vfoQ8x508qn4KMO7bwgnZWtlzQUsO%2FdtLk15zTfbX5oIhOFbwsEP2P16gafTwJ0sv0kjHVQZ9y1bE%2F%2F8CFizLlm7mR8eh6KMgMnvWtXWt%2BpJ1iZS4wJ7iRLR4NGWFR40J35mvxUR1nkkd%2BVII3NIJxthvwbtG4ZkNaQ6%2F%2FKtPMg7W2GgmHxOt87Z6iANqNnQFP1DCkhei4VJrrD48AamDwWf9rs7L3a2bcj%2BPRl6lujkG%2BjCMm%2FR7z2upIFqGMKcH1GM723Q0vZw5zhzwhOnsBBQPYh1QCKi0JwCSyHt%2FnuSVEtKxlCMmyKuhoxFGDkL%2FUQgl4dHnhrhc5U%2BcblbNnSOqTG%2FiREleGJsBYPnFIkgDeno0UOTqgrzeOqa6RDM4ASBKSy1DCEYJUXmB4Cl6bU7J1QfYV4Riwwdl9TsVAN%2FkvRxQ5wUrDDEydPABjqkARBTN6h65Z6Y7trQmKmTNRFWdaV9cGHlvfhbF17fhFS8hiPkF4eFadZa%2FIyIich25n2wUxYlZwTg6mP%2F%2BB8w5cpeSDqTa%2BIby5tGeNdru%2Berfw2cxMROVaCqwUikE7uX3uGlz%2BYCC4WsJSEosRpP%2Bzmo6YN0W3XzZU%2BPYVnBTXrPVXx438cYa2FL1LHDGYJ41QqQVYZqCOpW47s0q0rqGWDwDWZF&X-Amz-Signature=0b8014dc17ae04ba098705d2944c340419eb9863301009fa7474b0ad3f3e53a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
