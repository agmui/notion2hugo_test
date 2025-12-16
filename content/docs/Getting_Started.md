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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHLRGHT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV1W3DCv3%2Bfl173TJ5mnMFPqi%2BFhw5fN4qPnHGRTxXlAIhAMxjdLz3xUOsowQJ1q7mjdZpTMbqQ5uG5UcK4gDigD3YKv8DCFkQABoMNjM3NDIzMTgzODA1Igw%2FmvgTa70%2BVIwxC4oq3AOTXsroV4Di5AV3WK5KL38KlpoKYaBQXTM0NllCcnNnOChaqbz14qukdiAvdQOHzPkRghp6Y4plv6h18XeBpQhnvQKA%2Fn%2BL7IjvYWS%2BkuIApfhUIEmZ5Q%2Bxg20qBsNVlyZhFla3av7nYCmGM8YXOK6E3Z1PYY4Z3jfEPKvrmkjTOIe5SFbz%2FppuM9nHPMme3B7yDklxNEcBX7QnwDl%2BCTmAPh3FXUvSfWYEgTeVLkkXhju8QuUqLE1cNeUawJIiuloVLJ7lpI76kvcG7pZX2aO4bhZ6syYN1gpolU07ngh5Ah24eHjxdSuRZ%2FHYGNjWJszjBW3d4IEoXoFs%2BajfCNaeyfYtaR8QbI8QRFwV0d9718V6crE6N1zaniox1%2B1b0jpr%2FXyPJ4%2FCRn3K7CO7GX5zwKRqdgvOPbKOy9dvHotmEB40LOmOPB11gRvOap8MkPMZKwu8GVBYIEtv8eVe5WHf%2BGssViNK5w8ELRQYVdt4oOzA%2FLqkg3KQloH2pygyMZjKeexLeRfahDNnk88tpAYUo514CEtqhpw%2F9vShAkhY0FJJiL7ZGsX1ncqLzhoqAOm6DUlrs%2Fh8DxgDKPEKhqf5xJuHBzlVoDq8KVi%2B6E6hdR7X5xSzZ60j%2FWI%2BxDCLyoLKBjqkAX%2F7YY0SKrJ77EvYPmpoYRqbIfU3uCW0q9RMON54ow3Xj1tFRfu3tSm4s4o0iH%2F4ulCnHGTbTQ%2Bgrw9535iASbKLGTLOrjCEdHjAj681yI3jFdgIfZ2a8v4m3dkiud4PmKlqXaNesytvBX2o5qD997Y5FDDUsWwVgppvNzBVZYiPCi2RmsnbvRKZ2dz0B1%2F%2BOxIP5aIZyIYfcePAHo6e0DkXpB%2Fh&X-Amz-Signature=e56dfcc9aa6c755d43987c2d64d8b6589e03acb66edd95083e5c83e0b01dc4e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHLRGHT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV1W3DCv3%2Bfl173TJ5mnMFPqi%2BFhw5fN4qPnHGRTxXlAIhAMxjdLz3xUOsowQJ1q7mjdZpTMbqQ5uG5UcK4gDigD3YKv8DCFkQABoMNjM3NDIzMTgzODA1Igw%2FmvgTa70%2BVIwxC4oq3AOTXsroV4Di5AV3WK5KL38KlpoKYaBQXTM0NllCcnNnOChaqbz14qukdiAvdQOHzPkRghp6Y4plv6h18XeBpQhnvQKA%2Fn%2BL7IjvYWS%2BkuIApfhUIEmZ5Q%2Bxg20qBsNVlyZhFla3av7nYCmGM8YXOK6E3Z1PYY4Z3jfEPKvrmkjTOIe5SFbz%2FppuM9nHPMme3B7yDklxNEcBX7QnwDl%2BCTmAPh3FXUvSfWYEgTeVLkkXhju8QuUqLE1cNeUawJIiuloVLJ7lpI76kvcG7pZX2aO4bhZ6syYN1gpolU07ngh5Ah24eHjxdSuRZ%2FHYGNjWJszjBW3d4IEoXoFs%2BajfCNaeyfYtaR8QbI8QRFwV0d9718V6crE6N1zaniox1%2B1b0jpr%2FXyPJ4%2FCRn3K7CO7GX5zwKRqdgvOPbKOy9dvHotmEB40LOmOPB11gRvOap8MkPMZKwu8GVBYIEtv8eVe5WHf%2BGssViNK5w8ELRQYVdt4oOzA%2FLqkg3KQloH2pygyMZjKeexLeRfahDNnk88tpAYUo514CEtqhpw%2F9vShAkhY0FJJiL7ZGsX1ncqLzhoqAOm6DUlrs%2Fh8DxgDKPEKhqf5xJuHBzlVoDq8KVi%2B6E6hdR7X5xSzZ60j%2FWI%2BxDCLyoLKBjqkAX%2F7YY0SKrJ77EvYPmpoYRqbIfU3uCW0q9RMON54ow3Xj1tFRfu3tSm4s4o0iH%2F4ulCnHGTbTQ%2Bgrw9535iASbKLGTLOrjCEdHjAj681yI3jFdgIfZ2a8v4m3dkiud4PmKlqXaNesytvBX2o5qD997Y5FDDUsWwVgppvNzBVZYiPCi2RmsnbvRKZ2dz0B1%2F%2BOxIP5aIZyIYfcePAHo6e0DkXpB%2Fh&X-Amz-Signature=757bc05081eb8016fcf08fc1ac6a7716406561caf8733c6f136917a561eae07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHLRGHT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV1W3DCv3%2Bfl173TJ5mnMFPqi%2BFhw5fN4qPnHGRTxXlAIhAMxjdLz3xUOsowQJ1q7mjdZpTMbqQ5uG5UcK4gDigD3YKv8DCFkQABoMNjM3NDIzMTgzODA1Igw%2FmvgTa70%2BVIwxC4oq3AOTXsroV4Di5AV3WK5KL38KlpoKYaBQXTM0NllCcnNnOChaqbz14qukdiAvdQOHzPkRghp6Y4plv6h18XeBpQhnvQKA%2Fn%2BL7IjvYWS%2BkuIApfhUIEmZ5Q%2Bxg20qBsNVlyZhFla3av7nYCmGM8YXOK6E3Z1PYY4Z3jfEPKvrmkjTOIe5SFbz%2FppuM9nHPMme3B7yDklxNEcBX7QnwDl%2BCTmAPh3FXUvSfWYEgTeVLkkXhju8QuUqLE1cNeUawJIiuloVLJ7lpI76kvcG7pZX2aO4bhZ6syYN1gpolU07ngh5Ah24eHjxdSuRZ%2FHYGNjWJszjBW3d4IEoXoFs%2BajfCNaeyfYtaR8QbI8QRFwV0d9718V6crE6N1zaniox1%2B1b0jpr%2FXyPJ4%2FCRn3K7CO7GX5zwKRqdgvOPbKOy9dvHotmEB40LOmOPB11gRvOap8MkPMZKwu8GVBYIEtv8eVe5WHf%2BGssViNK5w8ELRQYVdt4oOzA%2FLqkg3KQloH2pygyMZjKeexLeRfahDNnk88tpAYUo514CEtqhpw%2F9vShAkhY0FJJiL7ZGsX1ncqLzhoqAOm6DUlrs%2Fh8DxgDKPEKhqf5xJuHBzlVoDq8KVi%2B6E6hdR7X5xSzZ60j%2FWI%2BxDCLyoLKBjqkAX%2F7YY0SKrJ77EvYPmpoYRqbIfU3uCW0q9RMON54ow3Xj1tFRfu3tSm4s4o0iH%2F4ulCnHGTbTQ%2Bgrw9535iASbKLGTLOrjCEdHjAj681yI3jFdgIfZ2a8v4m3dkiud4PmKlqXaNesytvBX2o5qD997Y5FDDUsWwVgppvNzBVZYiPCi2RmsnbvRKZ2dz0B1%2F%2BOxIP5aIZyIYfcePAHo6e0DkXpB%2Fh&X-Amz-Signature=257e9b0f2980320eb9c45b4cf56d5665c2605d72cab6c45ed574fae2e2510a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD2HADYI%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXflmal9G9DDc8MiHAObV4Hl8%2BWDnE7tPqVTNuRYMkHAIhANpOK%2FCBO%2FLbnqNBh1%2BsF4DLRVowbVlnfrAVXIZIizcoKv8DCFkQABoMNjM3NDIzMTgzODA1IgzSD%2FmVH9EVymiuGekq3ANAt5TU1p7TsZPhO0be67CenRLBJVcW43K0LeDamVsuEaIUcj5gLAuvuMddnHSgYu%2B8cYOifN10lvbsA02Qhl36DrMM%2FfQrTJTMO78u9vpnqaC2C0jtj8FNs9iZfxbaIoGJ8IBSD7e3ThZk5FSDHcmRuYSkognwVMNcjy978EBdCneIHlQSfLs9r8FmWgK3Tk5Fv3MNhxoowvFEjgoaE0Ush5PPOxov7MvQ2FElLZ9KEHEZBfd2Id5ecunGUtkB8LtV9li2pr%2Feoht6do2YCyNJ33A79930yaAa6HtarJe1kp0ZzXXI8YaEMo8XJe4lDxVvkQL3TvUx41zlUcz0kxvyVh6Ib9sdvcotpmltGso5fruS%2BAgEvsoMmzPZAcRLIIXm1glzRzNktC5%2BXYF976WI8gP5JF77lRbpivdD0OPscVudg9ssnL6ausM0Tw%2Fjot6XOsfi97YxBCwHIUuPZ1fRQSnbdbMWb0RxVn73TVT2SBF19AnzMfmXhxAJ14hJxkf1lHCOd20GgiMNfDNTTHFHaaWi6GFAjS0Cll6Qp%2Fx8Nj6bNfgpQtJhBvXPevzYqQ8lCTHgKe4A0Mp6%2FmUVly223SaPF75GvLMHTKKD5DLY%2FPB1CP83PfF9DAz8hzCAyoLKBjqkASnISkTM6F78b9VTIp2te%2BwIxqfQ7%2FWToBk%2B47Gb%2BZOgxTtMu7QqhB56MLohgtvha3iQDhhDJ1rrq6vkQwnqKeJaL%2B2O1zx6vWul2PyCHvW1YfjMsqe3r9oIvfc%2BVHHwhknsKUkm8FuokVgfgloqXRkmQMH3TPaldLBRvvHDWuk2M3kOtrubpncpbEb7zHtGJsSr4gx7c%2FZWGdwdCNZvBj%2F3nrKp&X-Amz-Signature=f61d0db5a256f4a5a295c09cea1d0fe8882821d0be85edaa8fbc24d5ec7b75ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZJLQ6C%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFitsfeU45gz5OVgIFgwsGPCFiGqlAGZo4vRpAMTuopRAiBJia0X8MFeHH5LLvBDEugh4aIU9%2Fx4Ho%2BWG8gLD9JdXCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM6APl46fEogNgFxa%2BKtwD%2F00I4MQl0sUnLkjhyVCZGoXEgHn3llIyKAfISvQRo4UGl5mNSPKWe9vJH61392qey9MLh1tjcgH%2B7NP5Kw93YaNynXZNjgpWd6U4T2%2FXQcukJLFjJ0mS3p5ed6XrY9QfO9gQDeaa8EgkfebTngXSZsHDexnh7sR4jtnVm9XYD3%2F3M0O4elxFvy7zjgN21csNhBqt6IynxiEmVr5kcajQHL9zYl25Q5hzxqR5XaUnF%2FOROzb1Qc%2F%2FZVpW0QT5vNYu0e%2FxSqMrp%2FsvY7E1Eo4l%2FMPH8%2BB2JVu%2F%2FjRdN7qsFF4C9P00k32O2tzxeaYGD4bBYt3zda2KBTAGgLrw0%2Fzv9D%2FaLItqPWI7D16LBBSdq9c7F99ayKcXiNLIhhkU0U9du2fxliJaMCDIHEnLw2pDlDg725oZZ%2BH2OfhAuLXH3tQ1H05coOdImnLRn0%2FIo7xoWSG3Fr%2Fg7txFsRUggW4SwKHNDMH2sCvdlo%2BjGd1Oa4Vrj38%2F6dFuh9RLaw%2B2puk2l7rQGmL0hrkG04et5CXHgAR8tGdqF944fie9emNvZm%2FBOphRUPB4v0rbgAvRDTEKYS7HVlV16DNQF14oPQhDr4awD7VWHwzvFUbTKI5vLKDjDY00IC2Aip6Xffwwt8qCygY6pgEPctkjOZTTnU9gjKIn%2BcH4uzNw3u8Ljjwjf2aDEC7DVLZbqwBq4H1UwfCvWqwQcXJKfJvTyepzJDqLcz3vUa11CLCtBaNxa02iVTkAl%2FC7pjLBg1faJ0r1sVCSuLAnKJkqkx%2BHXFglsRCaexl9GhnopByxva1D05%2BORjqUPHvZRFGIoSK1PHJifbGQxAL01z9zAt68FEGkoCkknKot65aplfuYJhOl&X-Amz-Signature=d09649d475685be8fe81b169f54b23b2def5faa8946acca2145ac8f05e50f878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHLRGHT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV1W3DCv3%2Bfl173TJ5mnMFPqi%2BFhw5fN4qPnHGRTxXlAIhAMxjdLz3xUOsowQJ1q7mjdZpTMbqQ5uG5UcK4gDigD3YKv8DCFkQABoMNjM3NDIzMTgzODA1Igw%2FmvgTa70%2BVIwxC4oq3AOTXsroV4Di5AV3WK5KL38KlpoKYaBQXTM0NllCcnNnOChaqbz14qukdiAvdQOHzPkRghp6Y4plv6h18XeBpQhnvQKA%2Fn%2BL7IjvYWS%2BkuIApfhUIEmZ5Q%2Bxg20qBsNVlyZhFla3av7nYCmGM8YXOK6E3Z1PYY4Z3jfEPKvrmkjTOIe5SFbz%2FppuM9nHPMme3B7yDklxNEcBX7QnwDl%2BCTmAPh3FXUvSfWYEgTeVLkkXhju8QuUqLE1cNeUawJIiuloVLJ7lpI76kvcG7pZX2aO4bhZ6syYN1gpolU07ngh5Ah24eHjxdSuRZ%2FHYGNjWJszjBW3d4IEoXoFs%2BajfCNaeyfYtaR8QbI8QRFwV0d9718V6crE6N1zaniox1%2B1b0jpr%2FXyPJ4%2FCRn3K7CO7GX5zwKRqdgvOPbKOy9dvHotmEB40LOmOPB11gRvOap8MkPMZKwu8GVBYIEtv8eVe5WHf%2BGssViNK5w8ELRQYVdt4oOzA%2FLqkg3KQloH2pygyMZjKeexLeRfahDNnk88tpAYUo514CEtqhpw%2F9vShAkhY0FJJiL7ZGsX1ncqLzhoqAOm6DUlrs%2Fh8DxgDKPEKhqf5xJuHBzlVoDq8KVi%2B6E6hdR7X5xSzZ60j%2FWI%2BxDCLyoLKBjqkAX%2F7YY0SKrJ77EvYPmpoYRqbIfU3uCW0q9RMON54ow3Xj1tFRfu3tSm4s4o0iH%2F4ulCnHGTbTQ%2Bgrw9535iASbKLGTLOrjCEdHjAj681yI3jFdgIfZ2a8v4m3dkiud4PmKlqXaNesytvBX2o5qD997Y5FDDUsWwVgppvNzBVZYiPCi2RmsnbvRKZ2dz0B1%2F%2BOxIP5aIZyIYfcePAHo6e0DkXpB%2Fh&X-Amz-Signature=83e9f61e3b5f648e05f3b214b4d338e2bc5e28bfd3e24413b76bd0566c30d1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
