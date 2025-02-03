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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJWEMBXS%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeni%2B2KvMNwyzvo6OCGwU%2FdQzFAWG5Uj1acNIi1%2FiHLgIhANzQqHxHu85feitrqgW%2BRUP0kxDbcmgpxT1nobDmoulyKv8DCBQQABoMNjM3NDIzMTgzODA1Igw4XywVl5wonTcKkRMq3AOFbJtNjAwJGjxjjuaxAJXUZRhKFGxDK6ZICK4JlbuX5xodrEM8fXzQtTY1%2Fh0cz4AK4lup4lggUGZQpgw6EA1DisnmbPmbAOBcEB2agDga4djb9ApivrgMby%2F1eUgJIkGw5DpEn%2FtsJWXiLeO905EJyoe%2FkEAXiP5e%2FGw9vvmtIYTeR%2FDeGXRFHJu2jGgZ%2Bl2swHhz35c3OBFNi2r5alu1ZPpSjI5aEbgPyXJRO1l%2F3ScbDXUfUlX1wOKZaf6w%2FmxtS9nDPCsp%2BupDJs928NNN5mj0bxM49aO%2Fz4YFK7rEmBLl1KQf6LuYwBMKPOAbT8ungzq52pIbJpcKFwI5INZ1OARbiDghbDhjogVrYvwY2xaQtwp23%2B2BQZI0IPWZoQfRTHmQDRBsLQxhztU52nWWd9IbmNvLeU%2FJojJ0vHFeSkJ5KzKbZ8iKrb4IWdDbs5paD4VU%2BMgi7oC1CrBFH%2FqsHfg%2FT9xPrRiyK2cUbdLGl%2BUawnM6ZOXQ3E0VRCv4vwS9zCkgtkvVMcCcTtEE05mQ2fEYDreJGG9foZeq%2FA%2B8l9e0yT7OwCgcJJ%2BoIVIODPHeP7g4vG5amlprBrvhkfHJbuFnDam3AbLvXLFvkz%2BVXQnhyN80FMVudq%2BH6jDBtoK9BjqkAbYMowi2cHy9WX9qHbjbSGnFtie3W6C8hj9qoB%2Fm3TYliXnXM9jXF0w3xldkRBwHPmDZdqZg0im1nLuXE8Tddrxr70B%2FVr4gQFo7cXTsUgo%2BRA4Aww0XA7Ofu4Jbb2wLaXfZL8I9VP8MZctvF1U7Z153ULXoqdIppgPnLgjWPoI1z6goxHYmjhgCviTC5Oe5CkuQNXk4PHflckXexLkLYZ6SAVRx&X-Amz-Signature=fc79806dfb5bcf5655688ea4a296eeb9c09d460b8f067b2b6a9bff6f3f4c0caf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJWEMBXS%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeni%2B2KvMNwyzvo6OCGwU%2FdQzFAWG5Uj1acNIi1%2FiHLgIhANzQqHxHu85feitrqgW%2BRUP0kxDbcmgpxT1nobDmoulyKv8DCBQQABoMNjM3NDIzMTgzODA1Igw4XywVl5wonTcKkRMq3AOFbJtNjAwJGjxjjuaxAJXUZRhKFGxDK6ZICK4JlbuX5xodrEM8fXzQtTY1%2Fh0cz4AK4lup4lggUGZQpgw6EA1DisnmbPmbAOBcEB2agDga4djb9ApivrgMby%2F1eUgJIkGw5DpEn%2FtsJWXiLeO905EJyoe%2FkEAXiP5e%2FGw9vvmtIYTeR%2FDeGXRFHJu2jGgZ%2Bl2swHhz35c3OBFNi2r5alu1ZPpSjI5aEbgPyXJRO1l%2F3ScbDXUfUlX1wOKZaf6w%2FmxtS9nDPCsp%2BupDJs928NNN5mj0bxM49aO%2Fz4YFK7rEmBLl1KQf6LuYwBMKPOAbT8ungzq52pIbJpcKFwI5INZ1OARbiDghbDhjogVrYvwY2xaQtwp23%2B2BQZI0IPWZoQfRTHmQDRBsLQxhztU52nWWd9IbmNvLeU%2FJojJ0vHFeSkJ5KzKbZ8iKrb4IWdDbs5paD4VU%2BMgi7oC1CrBFH%2FqsHfg%2FT9xPrRiyK2cUbdLGl%2BUawnM6ZOXQ3E0VRCv4vwS9zCkgtkvVMcCcTtEE05mQ2fEYDreJGG9foZeq%2FA%2B8l9e0yT7OwCgcJJ%2BoIVIODPHeP7g4vG5amlprBrvhkfHJbuFnDam3AbLvXLFvkz%2BVXQnhyN80FMVudq%2BH6jDBtoK9BjqkAbYMowi2cHy9WX9qHbjbSGnFtie3W6C8hj9qoB%2Fm3TYliXnXM9jXF0w3xldkRBwHPmDZdqZg0im1nLuXE8Tddrxr70B%2FVr4gQFo7cXTsUgo%2BRA4Aww0XA7Ofu4Jbb2wLaXfZL8I9VP8MZctvF1U7Z153ULXoqdIppgPnLgjWPoI1z6goxHYmjhgCviTC5Oe5CkuQNXk4PHflckXexLkLYZ6SAVRx&X-Amz-Signature=e9422d53c2b362c024d352ee7ce67d4bfb60b6c97fb659ae49a0805e71859338&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYFMOEK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4I8Ak3x8YsOIvFR3s83bUQ2Hcq0qTsChjUWYbyCh1wIhAP4Ok4%2BpDeL18SMybS3SvwrnNbQSKJ0cYB3OFr63XtrkKv8DCBQQABoMNjM3NDIzMTgzODA1IgwOFov%2BCkS3OQhbJ44q3AMcZOyETwOBtr5Z47a%2BaSUIuFEXmw03dxoL1UC4v591A90fiZmjkl2%2BUL9o6fkKTWgEz0IoVVguPd%2FJXaXH4X4YtzHvz7b23b5rHgwovG7rVw3p9T6yZwn0AluDEA35gtE9JfqS%2Fx%2BVbDKWG%2Bo0UlDBy4fuFACThaGtjvzlOoEG7sCYhF7r8HzTfMMp9jls5f6P2ZSjUuTZfDHVr9RNOnhUvIXXppGJvVTQO0s%2Fhb%2BXOSSYNJARUlCRJ7YGSThGmPOvDB%2FoUOHDeMrLcp7TNQg43w%2FHkHOUvIdRiI16wdwnSbW7kr6Rbc4fWVPL63QdvVGQqfcZeIjGuMUgMAEoOXueB%2FtqOMii3s%2FAfex50iJY%2BxVKX9PFkN9%2BCX%2FkLikr7Foohgpvc8XSTw%2BmFncGTaFZCShCOypoGJzbMFqZPNN2nuZPSb%2F1ggNMhYYfTsrOYeoc7G8hYDljBBG3Bja7HCIktQ9h53Oe%2FpogCMO8YyJqKUdSWDx%2BBKsBCXX3DXBF4DR%2FGbHR9ARBjiUad%2F8oe%2FwfdSOoWpgdWefDBVioOi9RUUruxTCVYHATUVPW22xUZNtEUnmEJ7Ktk4p0T5aKDa%2BGSXOqZrq1MnAV1ppCkdW%2FDI1J4X4VpLGMXCgHajCpt4K9BjqkAWNGtzLKggRxwj1WNSQRJyDO0a1gOVGBJBAvUgsmDaq7oGXsUkk2tYF9b64s4y3GP7O9GXkGDzaMbQOpT026L3G14%2B%2BoHyxJxOnpTbngy%2FVBP85VgLhr3621beFD8bV3NyfvPOFZVpNObECHQ7aeTfKhk3kBHDUiW65UZ4BsOwr8wJzVp3FnSQeeCS7P2OM61f1N86AWSuNFlhYUmaMbAb2DaOBb&X-Amz-Signature=cd55465c3a7a58bc24d0de8e35891ef024ae48c47aacb1c1b2d504b5287dd701&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6M2TO3%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDBtGJi1HCoGSdlhJHr1hP6gK4%2F1PtW%2Fvqlfe0fo5E1AIgDyLUwDwfYioSMM5P1eyeH2%2BsJnulvtobn01zREvgzngq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDCFxW4Kcw%2Fi9BDTYECrcA1hvGe18UfUHopSnOHKzBCyAqNJAfQ9gzFbm6nkepaXSKn2pzs7w2b5btUosLaXicnjaL7fzN0x1jDBS9PxzfyKTi4ehV4MSUKL%2FR50L9sexSMWHlie%2FKd9BkliUKiZ%2BkXBej0gSXlvXEiqBmxoqcwrOKV9jf3LRxayl3iMtk2z0%2BYHcBXtuLZ5%2B4DwahBb%2FqJJjdf22p31hAcqPY%2FLkqI00s4d0fEPgmY6xB3Xys%2BDiAm%2Brcf%2FaIyHHWhNNctgvhJQTtxlZuyrT9Elqpw3eTla0t53bVRcq2gmEnj3NI%2FwwMZLjmSBe0FDHjNiO4BwTHqNkTE7G59540xCOpNeu9Z06X8mmE1%2FK6qEXrAchL%2B5%2FQft2d%2FZRvjJsEa3gbK1srzPpD7HywEwymrgW1muf8LNnevdn8qpNpWKKQDrqFqagxuwNCzWgYUUNY64LZZzPXmiwjn1D1zFMrxWxWe5%2FvjalLtQrJ5IcTtci5ecbBNnyPLOrSU8NR1oLpdEMHwV7Dito6GVpaw7usKFC2RvqYsNAku%2FwWtfXgHTRZPdQlc%2FoFzX0q4TF4gFbLAlfFqtXeIq%2FSLzi%2BgCiDK197i9gzB5CxwPzhmkyxh1HwTXtXkPoPR7Y%2BEGAQg41vLkoMOC2gr0GOqUBEjmAIcRa8ifE253XuiKgRpUPSHTGmjsWWPTp3m46M9jzg%2Blgy8juQRMyY7CIM9t2hhvisnm0BlLPsfYU1plB6HmGFzCjPfTBUs%2FAwyYCpou4uHgHp4%2F884%2FzAxyfuyWdrAwLFSzHjBlrVp%2BUjjRsYAYQE8rYKdaqXvJpscY64%2F7wCAjiwTm60x%2BmDiAIYBjZV7xdzaaPs37M8n%2BKhLFHiKeUoMc5&X-Amz-Signature=6434566109532ca8c07c2c80a61aa521318d51f074410cb40b935bdda324d1d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJWEMBXS%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeni%2B2KvMNwyzvo6OCGwU%2FdQzFAWG5Uj1acNIi1%2FiHLgIhANzQqHxHu85feitrqgW%2BRUP0kxDbcmgpxT1nobDmoulyKv8DCBQQABoMNjM3NDIzMTgzODA1Igw4XywVl5wonTcKkRMq3AOFbJtNjAwJGjxjjuaxAJXUZRhKFGxDK6ZICK4JlbuX5xodrEM8fXzQtTY1%2Fh0cz4AK4lup4lggUGZQpgw6EA1DisnmbPmbAOBcEB2agDga4djb9ApivrgMby%2F1eUgJIkGw5DpEn%2FtsJWXiLeO905EJyoe%2FkEAXiP5e%2FGw9vvmtIYTeR%2FDeGXRFHJu2jGgZ%2Bl2swHhz35c3OBFNi2r5alu1ZPpSjI5aEbgPyXJRO1l%2F3ScbDXUfUlX1wOKZaf6w%2FmxtS9nDPCsp%2BupDJs928NNN5mj0bxM49aO%2Fz4YFK7rEmBLl1KQf6LuYwBMKPOAbT8ungzq52pIbJpcKFwI5INZ1OARbiDghbDhjogVrYvwY2xaQtwp23%2B2BQZI0IPWZoQfRTHmQDRBsLQxhztU52nWWd9IbmNvLeU%2FJojJ0vHFeSkJ5KzKbZ8iKrb4IWdDbs5paD4VU%2BMgi7oC1CrBFH%2FqsHfg%2FT9xPrRiyK2cUbdLGl%2BUawnM6ZOXQ3E0VRCv4vwS9zCkgtkvVMcCcTtEE05mQ2fEYDreJGG9foZeq%2FA%2B8l9e0yT7OwCgcJJ%2BoIVIODPHeP7g4vG5amlprBrvhkfHJbuFnDam3AbLvXLFvkz%2BVXQnhyN80FMVudq%2BH6jDBtoK9BjqkAbYMowi2cHy9WX9qHbjbSGnFtie3W6C8hj9qoB%2Fm3TYliXnXM9jXF0w3xldkRBwHPmDZdqZg0im1nLuXE8Tddrxr70B%2FVr4gQFo7cXTsUgo%2BRA4Aww0XA7Ofu4Jbb2wLaXfZL8I9VP8MZctvF1U7Z153ULXoqdIppgPnLgjWPoI1z6goxHYmjhgCviTC5Oe5CkuQNXk4PHflckXexLkLYZ6SAVRx&X-Amz-Signature=71f9b6a8702c026239deafa19c33082fccdbeef2d3617839bbdc3ec4bb463528&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
