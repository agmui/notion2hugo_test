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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZLJ54G2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF%2F5Mr1A7QvPN1vf5tU6GTvxgIAUEEWt%2FVTs%2BqIdlsRAiEA6Dx9Pk4QQZU%2BKhBrSot94CiWL2UoW3mml4%2B6NlAbgfwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDL%2BRA14NN7zwKSK1PircAxGwleEtzGqNx%2B6Rnz0UPNPimXsXzIg3EJtWJb8taVXO6pYTz%2B%2Brs%2FsZ9fL%2FtOdmKqeISSjRE7274%2BAOr3dgTDsrkUChGudkYN0ipkbZcO2mSgsOlvxArx0LkBJ8Oit9eOymD9HQABjDAsTWbv8J4rMI%2BVqN%2FixxV4g3ZXik560j2BhFgEhTwjfLybZxXsEVGTSPKgawRnqV7loQjznF3ui91yH9B6%2Bhyjz6F%2FbM12e4e37kZAmnCbgEMXZd2BCAfcckjU1qwb2JOf%2BeZBfygSGrTmeKqOm4D4gN7NS6lEADxc53fPHAOIeAmJKmgY8YkvEgSriue7JNajQdM6sVOkRgccF1Q5afy%2B5DqwVTDm0pJg29SyF3ncY0X0YpYOBjo%2Fk2oFC6bzhAUNb2iJi4t%2Fr4TulKJeyMuFw4K2yFYtwkaOqYg%2F5tPlIMHK8ziZh6IiByNjQucHeby5wROxpbk3zAUv38RuFFhELkIAy%2BIvTlr9EMkwyynWwbxz97INn1iyEhdAqdoBBAOClkjUzW1X0%2BKER52rUmKpGGmSaWLnYMQipL9GLKCDi%2FXm5%2FkzVsY%2FPUn%2B51FE2t%2BN1ZULJyE93sMgaoSB%2F9ICqLHFKOBBztbIVlAqfunnsakiiqMOzZ1cEGOqUBJuT0EJXuECVZAkH40N63P0UfE%2FHZfnLzaxGcc3roOGRQMHDgpDIMfW14EmAXq4N4y4BHQKJeYLzbaOyf%2B7AkckV9aK4%2BYqaDi5QP%2BCZFmYfreOX0zXNs47XgMjsoyptX0Jvi3hsXRwQQENdjE2HIMPw7QMQgXLfLF5c7y5kEgghODrgQitpvfEiLues0adao%2Br0vHo8Ttu2n1gzjOmCvgbguUnhE&X-Amz-Signature=ed1fa51328abf1f3c51989666a4bca8848097d9d59ad75b08e8066e092ad0fef&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZLJ54G2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF%2F5Mr1A7QvPN1vf5tU6GTvxgIAUEEWt%2FVTs%2BqIdlsRAiEA6Dx9Pk4QQZU%2BKhBrSot94CiWL2UoW3mml4%2B6NlAbgfwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDL%2BRA14NN7zwKSK1PircAxGwleEtzGqNx%2B6Rnz0UPNPimXsXzIg3EJtWJb8taVXO6pYTz%2B%2Brs%2FsZ9fL%2FtOdmKqeISSjRE7274%2BAOr3dgTDsrkUChGudkYN0ipkbZcO2mSgsOlvxArx0LkBJ8Oit9eOymD9HQABjDAsTWbv8J4rMI%2BVqN%2FixxV4g3ZXik560j2BhFgEhTwjfLybZxXsEVGTSPKgawRnqV7loQjznF3ui91yH9B6%2Bhyjz6F%2FbM12e4e37kZAmnCbgEMXZd2BCAfcckjU1qwb2JOf%2BeZBfygSGrTmeKqOm4D4gN7NS6lEADxc53fPHAOIeAmJKmgY8YkvEgSriue7JNajQdM6sVOkRgccF1Q5afy%2B5DqwVTDm0pJg29SyF3ncY0X0YpYOBjo%2Fk2oFC6bzhAUNb2iJi4t%2Fr4TulKJeyMuFw4K2yFYtwkaOqYg%2F5tPlIMHK8ziZh6IiByNjQucHeby5wROxpbk3zAUv38RuFFhELkIAy%2BIvTlr9EMkwyynWwbxz97INn1iyEhdAqdoBBAOClkjUzW1X0%2BKER52rUmKpGGmSaWLnYMQipL9GLKCDi%2FXm5%2FkzVsY%2FPUn%2B51FE2t%2BN1ZULJyE93sMgaoSB%2F9ICqLHFKOBBztbIVlAqfunnsakiiqMOzZ1cEGOqUBJuT0EJXuECVZAkH40N63P0UfE%2FHZfnLzaxGcc3roOGRQMHDgpDIMfW14EmAXq4N4y4BHQKJeYLzbaOyf%2B7AkckV9aK4%2BYqaDi5QP%2BCZFmYfreOX0zXNs47XgMjsoyptX0Jvi3hsXRwQQENdjE2HIMPw7QMQgXLfLF5c7y5kEgghODrgQitpvfEiLues0adao%2Br0vHo8Ttu2n1gzjOmCvgbguUnhE&X-Amz-Signature=d6e5a52560579e1506b0b4c6e09e8befb66e374c63628fe0075783c2d3137444&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZLJ54G2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF%2F5Mr1A7QvPN1vf5tU6GTvxgIAUEEWt%2FVTs%2BqIdlsRAiEA6Dx9Pk4QQZU%2BKhBrSot94CiWL2UoW3mml4%2B6NlAbgfwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDL%2BRA14NN7zwKSK1PircAxGwleEtzGqNx%2B6Rnz0UPNPimXsXzIg3EJtWJb8taVXO6pYTz%2B%2Brs%2FsZ9fL%2FtOdmKqeISSjRE7274%2BAOr3dgTDsrkUChGudkYN0ipkbZcO2mSgsOlvxArx0LkBJ8Oit9eOymD9HQABjDAsTWbv8J4rMI%2BVqN%2FixxV4g3ZXik560j2BhFgEhTwjfLybZxXsEVGTSPKgawRnqV7loQjznF3ui91yH9B6%2Bhyjz6F%2FbM12e4e37kZAmnCbgEMXZd2BCAfcckjU1qwb2JOf%2BeZBfygSGrTmeKqOm4D4gN7NS6lEADxc53fPHAOIeAmJKmgY8YkvEgSriue7JNajQdM6sVOkRgccF1Q5afy%2B5DqwVTDm0pJg29SyF3ncY0X0YpYOBjo%2Fk2oFC6bzhAUNb2iJi4t%2Fr4TulKJeyMuFw4K2yFYtwkaOqYg%2F5tPlIMHK8ziZh6IiByNjQucHeby5wROxpbk3zAUv38RuFFhELkIAy%2BIvTlr9EMkwyynWwbxz97INn1iyEhdAqdoBBAOClkjUzW1X0%2BKER52rUmKpGGmSaWLnYMQipL9GLKCDi%2FXm5%2FkzVsY%2FPUn%2B51FE2t%2BN1ZULJyE93sMgaoSB%2F9ICqLHFKOBBztbIVlAqfunnsakiiqMOzZ1cEGOqUBJuT0EJXuECVZAkH40N63P0UfE%2FHZfnLzaxGcc3roOGRQMHDgpDIMfW14EmAXq4N4y4BHQKJeYLzbaOyf%2B7AkckV9aK4%2BYqaDi5QP%2BCZFmYfreOX0zXNs47XgMjsoyptX0Jvi3hsXRwQQENdjE2HIMPw7QMQgXLfLF5c7y5kEgghODrgQitpvfEiLues0adao%2Br0vHo8Ttu2n1gzjOmCvgbguUnhE&X-Amz-Signature=eb149b94e0db09c9a901cb9041bd8f130bdc6b8de36b69dae5caac55229aaf0d&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WEYLG5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjO9sKk%2Bkp8Au5JmTUXEWCrsxK9YLpkYWtc1lf7oURFAiEA4ym1NHBXM4TwdbEVx4Y3%2FXowr8HFmIMb%2B%2Bc8Oov6UBEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDHbJqPS97Dxrj9VtiyrcA7J1cueppB%2B2gzno5pF9R3nWcYaqtA4uG40gFdtW5AAzk7uEfl2TZBI1n1M8o4R4cA6L2aeiyna3SEEm0l7BdcvvM4UGUxm%2F90%2FVxRSKSWK3Gp2ABVDPA9XwrYOV0XfbiTbYnRy9BE2NUFlco5Q3BdT2AWlNJiTywQloHOIv8zqbm4d5O7vleqRD1wvKPupI4vrSo0cKODcH6%2BjraCJXvXISp%2FFcNw1q2VY0TmQCgzOkBZn3OKt19oiQ8pPWsaioYrffRSd0i0BUqnpif9yOigiH3kQjqHoq1DPzAQOPpoqVAvk9bmv7lLFLmhyD2Rl61YbbPO%2F6VEE%2FxzwNWAxCQlc3ogQVZrmHE5ZCCwXqV8IFLyahEwsNPeaDJd%2FzxX16AwH3QfLtKgSIjYems9QhzPA5K7FXW5v4%2FLovI6YsonWfG1HI8GY4thIPmMZbALWUnI2Jt8cBJFeU9RJdPJkd17XSh5mozol3FAJ4a6eiOCZWbsLTvnBqvqVTZPY7%2FmLmSxzNgVwQHd3OIL%2BdXgd5QJX%2FnvmlTffvXsF2XLnM08SU0zXfsP1R%2FGNuOymyCgnrvxk0Vn%2FrrL8TGXj2%2FwWuHcNxGFbabTWUHQ%2BHw0i5VdY6LZxLEeIzAJp%2BEr%2B7MOHZ1cEGOqUBT%2BQ0uaW7CoiMSoXg%2FmxhhzB53MUHgxVtGziIeNLhEutOoBpaCWSfZ%2Bx3RP%2Fwg%2Bm1l%2FD6ALgBcIS3Xj%2B9AzrGpcISVoxO6pAYtOO5eelHVGh%2Bjp%2F6VOgJWD5f6t%2BQB%2F%2BG7r3su8cZgNYRNMC0cDedxlAbXmjwgX5WScB%2BvvgAEe2gW29ssSyUMbmynqqNb5eOf%2FZa%2FK1%2B%2BM66hgywdI12aeOqxCAF&X-Amz-Signature=d2576b2f46a00a2c8ed4d833f1a5104b274f9c7a25a955e375b62c092f5c1717&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNZIAFQB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7PUiz9t%2BYaKpf%2F9O9jTiiIjHaOiImVZfY%2FChGwc8yEAiEA4AC7P7NSkMmoqS6GOHSjT9CY1OZ7wmpynz16MhgZEdsq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPWInZJD9PgMf76PgSrcA3%2F2XhF47Ui5iYGHDxZFYknO4xBfId0x6sVULaVdIsXYEfj5PGQwUR%2B7i%2BZbHST%2Bn92AGL2ASvRUf3zqnllTLzyZ3mOWubh7xy8gozM83rhd7gxRvJ51xAtpmo9xocdGlWNdOs6tNeojHrhZHdMniZl6UJJdaWNz1YLf6Umh25k%2Bfdix%2B%2BQQQjDdmJmZD7aJmdIC%2BU3Gr1r4o%2BahJrlUtBsyP0e6HHO%2B2mq3jau2YjbP%2FZctyJmXICcOnzyVIpZGNJxTyDMJLSW6RuErxVriwI%2B27BbbbXdyZWD7zqWJ4IVPIU4CnxAkHIynKfXb1ju%2FQ53%2FvtoGmTp6YUUuzjIFnIPVUa4z3Lza%2FwcZAUgwEkrLJrMnqWef18MbQeIK2FInAcafvxGOFwYYFIm2Qj4Q4%2FubH7QRJXUFK0GAw9WFU4ZbVimaybdXCuMhVoNs37Cvl7u2MXL2YU%2Fr6l0lTLATktIn0TFMQ8UlOlDX8A4dMuiLH54ygxwFrsYerbualAiawrjpQqdKLwsjKF%2FEW6HrJJF6Z2nZ6hx4%2BnHxUPRucFVijvuDe6XOZayKRnd%2B1FZ9VJmKmL0hjTexW9LxUk%2FPWECwIMN%2FH%2Bopvjow8L0D6cihpVivlNTx7ihvomCzMMna1cEGOqUBGkE68AzdcF5tdi9DAryR%2B5w6c3UGcGNjq2qr%2F%2BcM5duWEOCCCHDyDFEX%2BtwOmJts7hTROWRmag6DeNjvEeaaNwtQLR5TanhkyexzFKEIwfHB5LcPDsO8IqDc9EviI%2BSiyAawQ0v2C3wnnJJwluwrwrazCiGwmndDkigJAMYKoX%2Bt3s9StIU6Cc5gVvM3%2Fn396LYK%2FsLdUOoNjWpMWY2YjMWnhUiS&X-Amz-Signature=a4bb31e34199eddb83bd1da239d6180f1dcc9a26c41928fa8481337712d462a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZLJ54G2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF%2F5Mr1A7QvPN1vf5tU6GTvxgIAUEEWt%2FVTs%2BqIdlsRAiEA6Dx9Pk4QQZU%2BKhBrSot94CiWL2UoW3mml4%2B6NlAbgfwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDL%2BRA14NN7zwKSK1PircAxGwleEtzGqNx%2B6Rnz0UPNPimXsXzIg3EJtWJb8taVXO6pYTz%2B%2Brs%2FsZ9fL%2FtOdmKqeISSjRE7274%2BAOr3dgTDsrkUChGudkYN0ipkbZcO2mSgsOlvxArx0LkBJ8Oit9eOymD9HQABjDAsTWbv8J4rMI%2BVqN%2FixxV4g3ZXik560j2BhFgEhTwjfLybZxXsEVGTSPKgawRnqV7loQjznF3ui91yH9B6%2Bhyjz6F%2FbM12e4e37kZAmnCbgEMXZd2BCAfcckjU1qwb2JOf%2BeZBfygSGrTmeKqOm4D4gN7NS6lEADxc53fPHAOIeAmJKmgY8YkvEgSriue7JNajQdM6sVOkRgccF1Q5afy%2B5DqwVTDm0pJg29SyF3ncY0X0YpYOBjo%2Fk2oFC6bzhAUNb2iJi4t%2Fr4TulKJeyMuFw4K2yFYtwkaOqYg%2F5tPlIMHK8ziZh6IiByNjQucHeby5wROxpbk3zAUv38RuFFhELkIAy%2BIvTlr9EMkwyynWwbxz97INn1iyEhdAqdoBBAOClkjUzW1X0%2BKER52rUmKpGGmSaWLnYMQipL9GLKCDi%2FXm5%2FkzVsY%2FPUn%2B51FE2t%2BN1ZULJyE93sMgaoSB%2F9ICqLHFKOBBztbIVlAqfunnsakiiqMOzZ1cEGOqUBJuT0EJXuECVZAkH40N63P0UfE%2FHZfnLzaxGcc3roOGRQMHDgpDIMfW14EmAXq4N4y4BHQKJeYLzbaOyf%2B7AkckV9aK4%2BYqaDi5QP%2BCZFmYfreOX0zXNs47XgMjsoyptX0Jvi3hsXRwQQENdjE2HIMPw7QMQgXLfLF5c7y5kEgghODrgQitpvfEiLues0adao%2Br0vHo8Ttu2n1gzjOmCvgbguUnhE&X-Amz-Signature=01ddf52c4bf4f73591518a7afd9827f87b0c7b36c2315d7814b1c669a74f8bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
