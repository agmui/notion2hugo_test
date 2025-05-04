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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5A64APY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCTuRoc89PLBNy15CUB2p8G%2BBD%2BQdcsBghZ%2FvwlxnVypQIgc98VuVf6S4o86RHrkcpkKU9xYmPHhVEBIPAlSvKd0Ocq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDI8fGHd1aITDYujeEyrcA1jqADhBwBIEmSyooh0hO4tOJtH7uhDjVJpd8EAx9HG0HtMSIRrYfTKvq09Q%2B8ItKy3TJhat%2BH2hkZXqtF1gvgJbBqX3EvkEmSmxpcgd3qtoR1VCjPqTunInzADLViWIZtyL%2FVV6eKCz7nd%2BFUgpQKnIsF0bBSrNcuqm5JyN8shs%2BRrAAZ7jy6dCdDSObWo6J%2Bcfsgt4NzRUDOGwlxePZ0tegjIFYfKwUdo9GJTqFaj4F8kyqiVmT8o0bs2pzbvvVMIYzwq2q%2FRlCzbsOPaJOK5TA2hJ9g8JDRGNS04uBeCuuMr%2ByBeXJA39y1pSGM%2FSuHwbWVzJo%2F8bGH9RIozdRnk8PBZWpLCCNofrtrmQnWjJ9UqWits3JJSwm5Wg17kGk6jILkjQSbtbc5RfUJMf%2Bi%2B599oXaEGTP8EKCBDM3YDl6Kz%2BjzwFoh25SlthuRzsjWBLbY9hMWWfGQ9abyblq7RydF1ppug5Xx0MEqna8W2JLz3D2yUZuh0ou%2Bh5UeoiLAoVhGGfBs%2B3bt5J0aReCQvk7gDFSFk8E9qrQTiLiUBcc%2B5IeXccWHJD1fWbAWSK7WXeBjRnwy3P6fXd4HRvyiitG7YLVoq6CwqIIaBpVXaON1MAAAN2JT4mRXQzMMOK3cAGOqUBfsR55QJXBB3X6ELpRmK%2BUKzYvdAMs7CziAQePTMFVEd%2FPugBQThT8puoFIprfV%2FxvuY57Lv3369N5bOEvP7tAwUIolXVDt1ViNfWv4qkUniGoW64n3t7d6hX0DgJnuQ7jbn9Xgrj62rOBPAKRbujlFUQpTPHhwiSh51lMcVSmIn%2BZcEOWtCvzwGajBpnujPFVjmmWgIU%2B1o2udrIIVTO9moPqygS&X-Amz-Signature=0fd3ffaf26836ca45e214c2b54ff4e22ececb81dc58fcbc13eff161bb0891964&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5A64APY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCTuRoc89PLBNy15CUB2p8G%2BBD%2BQdcsBghZ%2FvwlxnVypQIgc98VuVf6S4o86RHrkcpkKU9xYmPHhVEBIPAlSvKd0Ocq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDI8fGHd1aITDYujeEyrcA1jqADhBwBIEmSyooh0hO4tOJtH7uhDjVJpd8EAx9HG0HtMSIRrYfTKvq09Q%2B8ItKy3TJhat%2BH2hkZXqtF1gvgJbBqX3EvkEmSmxpcgd3qtoR1VCjPqTunInzADLViWIZtyL%2FVV6eKCz7nd%2BFUgpQKnIsF0bBSrNcuqm5JyN8shs%2BRrAAZ7jy6dCdDSObWo6J%2Bcfsgt4NzRUDOGwlxePZ0tegjIFYfKwUdo9GJTqFaj4F8kyqiVmT8o0bs2pzbvvVMIYzwq2q%2FRlCzbsOPaJOK5TA2hJ9g8JDRGNS04uBeCuuMr%2ByBeXJA39y1pSGM%2FSuHwbWVzJo%2F8bGH9RIozdRnk8PBZWpLCCNofrtrmQnWjJ9UqWits3JJSwm5Wg17kGk6jILkjQSbtbc5RfUJMf%2Bi%2B599oXaEGTP8EKCBDM3YDl6Kz%2BjzwFoh25SlthuRzsjWBLbY9hMWWfGQ9abyblq7RydF1ppug5Xx0MEqna8W2JLz3D2yUZuh0ou%2Bh5UeoiLAoVhGGfBs%2B3bt5J0aReCQvk7gDFSFk8E9qrQTiLiUBcc%2B5IeXccWHJD1fWbAWSK7WXeBjRnwy3P6fXd4HRvyiitG7YLVoq6CwqIIaBpVXaON1MAAAN2JT4mRXQzMMOK3cAGOqUBfsR55QJXBB3X6ELpRmK%2BUKzYvdAMs7CziAQePTMFVEd%2FPugBQThT8puoFIprfV%2FxvuY57Lv3369N5bOEvP7tAwUIolXVDt1ViNfWv4qkUniGoW64n3t7d6hX0DgJnuQ7jbn9Xgrj62rOBPAKRbujlFUQpTPHhwiSh51lMcVSmIn%2BZcEOWtCvzwGajBpnujPFVjmmWgIU%2B1o2udrIIVTO9moPqygS&X-Amz-Signature=4b6200eb880266ca27e416766de997be973235e837821baab583db694ef332ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5A64APY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCTuRoc89PLBNy15CUB2p8G%2BBD%2BQdcsBghZ%2FvwlxnVypQIgc98VuVf6S4o86RHrkcpkKU9xYmPHhVEBIPAlSvKd0Ocq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDI8fGHd1aITDYujeEyrcA1jqADhBwBIEmSyooh0hO4tOJtH7uhDjVJpd8EAx9HG0HtMSIRrYfTKvq09Q%2B8ItKy3TJhat%2BH2hkZXqtF1gvgJbBqX3EvkEmSmxpcgd3qtoR1VCjPqTunInzADLViWIZtyL%2FVV6eKCz7nd%2BFUgpQKnIsF0bBSrNcuqm5JyN8shs%2BRrAAZ7jy6dCdDSObWo6J%2Bcfsgt4NzRUDOGwlxePZ0tegjIFYfKwUdo9GJTqFaj4F8kyqiVmT8o0bs2pzbvvVMIYzwq2q%2FRlCzbsOPaJOK5TA2hJ9g8JDRGNS04uBeCuuMr%2ByBeXJA39y1pSGM%2FSuHwbWVzJo%2F8bGH9RIozdRnk8PBZWpLCCNofrtrmQnWjJ9UqWits3JJSwm5Wg17kGk6jILkjQSbtbc5RfUJMf%2Bi%2B599oXaEGTP8EKCBDM3YDl6Kz%2BjzwFoh25SlthuRzsjWBLbY9hMWWfGQ9abyblq7RydF1ppug5Xx0MEqna8W2JLz3D2yUZuh0ou%2Bh5UeoiLAoVhGGfBs%2B3bt5J0aReCQvk7gDFSFk8E9qrQTiLiUBcc%2B5IeXccWHJD1fWbAWSK7WXeBjRnwy3P6fXd4HRvyiitG7YLVoq6CwqIIaBpVXaON1MAAAN2JT4mRXQzMMOK3cAGOqUBfsR55QJXBB3X6ELpRmK%2BUKzYvdAMs7CziAQePTMFVEd%2FPugBQThT8puoFIprfV%2FxvuY57Lv3369N5bOEvP7tAwUIolXVDt1ViNfWv4qkUniGoW64n3t7d6hX0DgJnuQ7jbn9Xgrj62rOBPAKRbujlFUQpTPHhwiSh51lMcVSmIn%2BZcEOWtCvzwGajBpnujPFVjmmWgIU%2B1o2udrIIVTO9moPqygS&X-Amz-Signature=57cf4cd47fabd75c6bad89b5fcbe8456dab32cbfd56fa4f74becc0829552f392&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IGZXD7F%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCxZZ3iH6e6in4TlTSgm64zldrLvauuj3SuVLLvpYwo%2FAIhAOgyxC2JrEWPwAnbAUVq9BJ5YJxDhvOSr8Wxo9u0JeNLKv8DCBQQABoMNjM3NDIzMTgzODA1Igx3QmH5x0pWsqDECpYq3AP3eZsbDDc28xybn2ez7%2FIyUVEiPp0GeMut7A2jZid3zX9UX8Xm%2F%2BVcfGGxka5cmGUlLTslRRQb9g%2BJSXhC9v6BfOUIw%2FBSXbNewIEzHXqtBBXfXUANxs1tmhPqzeylB%2FU%2Bet4ewsiM%2FQJjLfyHUbS2MrWEbQ0SEygvCP6RVQXyaKnkSF2QyEmZNaU4eWjat58448voc61PR%2B%2FV%2Fzf9hX3N4FEnhia8FqSL%2FBuhIjxGWkji6W%2FysM8WJ3QWNaPYNy2iPYn3xwV%2BKoz%2BMxennfmoY%2FyhIjwOnNwWIsS08DXODFrr91kk2gcYWVnm3fvfBH8MLSgWH6yQHf739KKSLN6RlhZSeloP7QjS7SnpJ2uuF6mGWEhsLQHgXWkjK0ioyP2NvAwM3rktDEVTLCXZW8Ngb4MSaFU2HUE7MtRElBsTJ1txfivOi37E%2BTkwd5y%2FzLjycC%2Bk21I%2BIy9A5Ppq%2Bi3yQ2ufkgsHfkXQPl4O%2FmhUB%2BSBzc%2FR29Aq7dp4%2BuGdvYW72DxmcHGtWkYiiM7r6q0Yp7Ynxf9njeEQN9nnuoImuoRHzYk1dw4gZ3bO8BobY%2B45HBBGN8LjxaH%2BgwvXRrLrjRp7JeeT4vHNv%2BN3RzSd1EX2ooxMlMmenyoj5jCsjt3ABjqkARJ5H76U%2F1ltAhMwgVLqti9AlG2u6ciwPRp23At3uxYOGeQ6gO%2F1pLu18Dyi8eMbzzZtUcCquEcnkYEyZV2NIB9Kzmm9dtbgtcdeIMrftrFAO%2F8EuaorLaaVAOK5ChFEDPjTHUBUL7JT69pexUCVqJiNhCrXZhzEH43TRKsvhhwwA%2B0%2BCPHtIefmUiz3V%2F7x1JO8zVuQZs3%2BeyH6VIk%2FKI3%2FdG8U&X-Amz-Signature=01d991898f2a559afa13f2b5c97f484343b6ef3de42f1eeaa78bfba37ebf5141&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLSDKI76%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHmVhIEukIwgLYqd2OI6fYbykYfMG%2BaZTSVnpeDB68hdAiEAmGJYITYniCNcjIRBPnfigjlylWox3MrfnuvzC5%2FsWrQq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNfFQ9UTWMUT34WshyrcA00dE%2BfyCKZOlZfwu9tia9Uj5w0cs6GoEju8Ei9CTMVdQyyQC7OG4RJOU3qX3Tar7aP3Fjbe4M0ki62SckFgRtBgCm3Sf%2BlYs721QcWAbAYbmqlTSN726t6Kr0styic8skTSBuNfh7r1tZ3Kgs25wC7137h%2FuJrdSO%2FuS6go1A9TeEjjmo2m7mxvXj8eVujI2jQyDXp6w7lMIMjsoLCT3jWuaO4uvPrVv99VCkTKnuwamZfhYwKtfVLsVO0DRGcCcWIf8Zbaos49K0uaPkYp9AB%2B4p00gJs%2F6Ae%2B2TrPnPqvpv%2Fixcl0CtJ9Ihi3FivPNnkt%2FTQH8waDTORU4dOsZSuMpSXW%2FVRdS%2BIEtxwOwa%2F2LRc%2FiPiAlew4HXM76Kgq%2BCdQZokGAt0NUnaADvW662GQMZp4xFItNR29efo1wzUP8%2BhV6f%2FK8%2ButahSmYyyn7TbzR2pzDjlABfHnYwmpbj2qrdxtUH%2Fqg3%2F9EdlPrOBzECQjCkIqTOAt15ZhLlzKQV5R87PHkqDAJ5LFBOX1GMNtTf9MWuhvXz6UJFhFZ7O%2FedGaceqQfL5rmzJYtL%2BERAtogRWPSPjN5FBo0X9egKX2FAtp6ZLxUs13pcDI3OL3LT8oMIIasFapCThxMNDk3cAGOqUBbzexUSlUYI1w%2BpMrV14lbtZDA%2BTSM36ogqbFmGktzajOd8NQDza5kEVlN7anACxmoGhYYn0FdOjjaMHTVIqYaW3clEC7CU2rxjrpVvTKYrZgj2uvOirrj7p4flPsJkLvlhYHkg19jGBKKsJm1y%2F6%2F5Z3bzQzZBH7xoykHR4jCU0FQPlAK%2FrNl46Xteat8qel33cBF%2FuK3WaV3KRMQk1CXXpseQCB&X-Amz-Signature=fb14dbb7208e2e4c94a1bea383c367c081791118070bbe0782bd3185c1cf9db9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5A64APY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCTuRoc89PLBNy15CUB2p8G%2BBD%2BQdcsBghZ%2FvwlxnVypQIgc98VuVf6S4o86RHrkcpkKU9xYmPHhVEBIPAlSvKd0Ocq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDI8fGHd1aITDYujeEyrcA1jqADhBwBIEmSyooh0hO4tOJtH7uhDjVJpd8EAx9HG0HtMSIRrYfTKvq09Q%2B8ItKy3TJhat%2BH2hkZXqtF1gvgJbBqX3EvkEmSmxpcgd3qtoR1VCjPqTunInzADLViWIZtyL%2FVV6eKCz7nd%2BFUgpQKnIsF0bBSrNcuqm5JyN8shs%2BRrAAZ7jy6dCdDSObWo6J%2Bcfsgt4NzRUDOGwlxePZ0tegjIFYfKwUdo9GJTqFaj4F8kyqiVmT8o0bs2pzbvvVMIYzwq2q%2FRlCzbsOPaJOK5TA2hJ9g8JDRGNS04uBeCuuMr%2ByBeXJA39y1pSGM%2FSuHwbWVzJo%2F8bGH9RIozdRnk8PBZWpLCCNofrtrmQnWjJ9UqWits3JJSwm5Wg17kGk6jILkjQSbtbc5RfUJMf%2Bi%2B599oXaEGTP8EKCBDM3YDl6Kz%2BjzwFoh25SlthuRzsjWBLbY9hMWWfGQ9abyblq7RydF1ppug5Xx0MEqna8W2JLz3D2yUZuh0ou%2Bh5UeoiLAoVhGGfBs%2B3bt5J0aReCQvk7gDFSFk8E9qrQTiLiUBcc%2B5IeXccWHJD1fWbAWSK7WXeBjRnwy3P6fXd4HRvyiitG7YLVoq6CwqIIaBpVXaON1MAAAN2JT4mRXQzMMOK3cAGOqUBfsR55QJXBB3X6ELpRmK%2BUKzYvdAMs7CziAQePTMFVEd%2FPugBQThT8puoFIprfV%2FxvuY57Lv3369N5bOEvP7tAwUIolXVDt1ViNfWv4qkUniGoW64n3t7d6hX0DgJnuQ7jbn9Xgrj62rOBPAKRbujlFUQpTPHhwiSh51lMcVSmIn%2BZcEOWtCvzwGajBpnujPFVjmmWgIU%2B1o2udrIIVTO9moPqygS&X-Amz-Signature=9b16a88bc13e4fb83c2cd3db11e7f3f9f7723d019c98f967b46430917d3ac968&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
