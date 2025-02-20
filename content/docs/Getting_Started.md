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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YOB4JN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg5BRvZ1fFvWMb4YWJh0XsX9FQypmB%2FyGDdtx7Gw7epgIhAJH4avQXw6S8VcuPQ%2B6YH4J4bMORVCuD2DkN6G6t1Yb4KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpho5hJVzuEeuK3r0q3AMi2l4sWY8iWFdcRoVIZpDH5zR0BxlWLdkzp%2ByrhAVfhYAxXf7fgvo0XT8daa0iWIaX1gOVL%2BWzpD9ZmhEoVlzYxfrSga1wv7dsLpCxWS7fJM1z%2BuG31AwtPfM7nj5LKET1hb1oTjY6jJNTcaUbGYc4Ud7wzZUkDRI%2FIAs5QH6z1QiAcRiaLlP%2FsRkQYNgxpNTNreIF1ns%2BbSYfqZT5MbRV7mbFk880%2F2qnKCrI7nuOMFuqqIG8uACOor%2BDxxaS7JR2TGn9oXB5S1sSdF5YBKAd6UQv6qghAM8%2B0bLxUjMb1O8S89Q6hENKBoxz07TnbQtwBOjrbNX4QuaqDJ7STXYpO03MW9XmO8ZxbeFG0r7XPIoELmJlElISfBktbhJi%2Fa63G5zyhOjWqUljlhjgkFCggqSQL1XpIGJ4wTqImZx51rqw2PpUdXbOKCc6Ue3QtjF3n084qekm2WEDqNurGsJN604jxha0fzFNjSmBJAJWG%2B%2BBolAHSQthQaXct%2B8aYIc0noDpc2NXYomWbSuS6B%2FZlgUpCcz9DR%2B9syIEzNgHD0VaDNGX7xMIW8d8TlMM3aPRx2S0agoMnThQDlHz5DG%2F%2FZTEpfbA0xo0Xa%2BHRs22CaYgMRygS1wBvYPnTjDP39q9BjqkAUKPpCFjZdPDcJIwv1tAgkA9b%2FqWI%2BnecJYyrlge5qxtspKS%2F0%2Fp3uv8DkyN6h8vvvz%2Fv7axcjt57ht4010qzE2x5H5mjj6hBeOxNSxQD7sDgJVi1D5NiK26z8tYJCOkq9KljXhSIwBzfHdRo0JTpMp7536TvEHPU%2FVHhe9mlfRdTlfNVD%2BYRfPgpdCwWRJBIm6vr9xOzafuEyyz%2BverDUPZ%2Bs%2BO&X-Amz-Signature=174b6c24850ffb54b429ec417fbe5734bff1297830e3a458ce782ac14e43472c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YOB4JN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg5BRvZ1fFvWMb4YWJh0XsX9FQypmB%2FyGDdtx7Gw7epgIhAJH4avQXw6S8VcuPQ%2B6YH4J4bMORVCuD2DkN6G6t1Yb4KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpho5hJVzuEeuK3r0q3AMi2l4sWY8iWFdcRoVIZpDH5zR0BxlWLdkzp%2ByrhAVfhYAxXf7fgvo0XT8daa0iWIaX1gOVL%2BWzpD9ZmhEoVlzYxfrSga1wv7dsLpCxWS7fJM1z%2BuG31AwtPfM7nj5LKET1hb1oTjY6jJNTcaUbGYc4Ud7wzZUkDRI%2FIAs5QH6z1QiAcRiaLlP%2FsRkQYNgxpNTNreIF1ns%2BbSYfqZT5MbRV7mbFk880%2F2qnKCrI7nuOMFuqqIG8uACOor%2BDxxaS7JR2TGn9oXB5S1sSdF5YBKAd6UQv6qghAM8%2B0bLxUjMb1O8S89Q6hENKBoxz07TnbQtwBOjrbNX4QuaqDJ7STXYpO03MW9XmO8ZxbeFG0r7XPIoELmJlElISfBktbhJi%2Fa63G5zyhOjWqUljlhjgkFCggqSQL1XpIGJ4wTqImZx51rqw2PpUdXbOKCc6Ue3QtjF3n084qekm2WEDqNurGsJN604jxha0fzFNjSmBJAJWG%2B%2BBolAHSQthQaXct%2B8aYIc0noDpc2NXYomWbSuS6B%2FZlgUpCcz9DR%2B9syIEzNgHD0VaDNGX7xMIW8d8TlMM3aPRx2S0agoMnThQDlHz5DG%2F%2FZTEpfbA0xo0Xa%2BHRs22CaYgMRygS1wBvYPnTjDP39q9BjqkAUKPpCFjZdPDcJIwv1tAgkA9b%2FqWI%2BnecJYyrlge5qxtspKS%2F0%2Fp3uv8DkyN6h8vvvz%2Fv7axcjt57ht4010qzE2x5H5mjj6hBeOxNSxQD7sDgJVi1D5NiK26z8tYJCOkq9KljXhSIwBzfHdRo0JTpMp7536TvEHPU%2FVHhe9mlfRdTlfNVD%2BYRfPgpdCwWRJBIm6vr9xOzafuEyyz%2BverDUPZ%2Bs%2BO&X-Amz-Signature=8a0080fc70f876079693fa5bf4dd50e0bffe4abddcd3c0c06167185f63a5ace2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JGZ2VMM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApI4tZX%2F6kj%2Bja1MPHkk7yaRvnXBIxKt1IX%2FpkT36ENAiBssZR7JZzwfv3OtyLLPxkM2jVcrIAMicktJNXRSfO1jCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOUIqZVYoXYhrj3lSKtwD%2BbwePgmwXPGSXDs7HAM6thUFzIE1QuqAhULn54f7ebXd6RGK5hn3r7RVwa0I8aNZvX7Vntha4srIpkm6wPhaxjhTuI%2B9RPM2sMZA89xIt%2B%2FMGDwy%2FBas2dq0YPglEtrEoJwJVqjU0%2BZ0XGvLMEW7wYhpYwLpZtjKjrjlTzWJ2BVtckcgNoRh2389OTFQkfWtiBV0ErEqg9bdurYTFf4kZvz98BZhvGQNiA2R88Spu8Jl6drGTD0dfDPIllHHncgq8g2h8ZNJ9MYuiO3zft9wKddlgq9UiZdxXWCoQEYXxTz3ZQzXDtGj9C%2FjMn37qkODj1krbuCLJg8WWcrPKjnxKcZwQmMxY684L2Nuysle3n%2F8YP6bDX3fDcYCnzDEU0HrShz9SWjDRlrpbT4eQSWGWFA4E6CwUFoHNNo%2F4tun%2B3%2FlqHHcdC0KCo0aldGiGL4fRgvk4mGNXsY8%2FkoQQYnvfIgzRHWr2Aje1gK5Imlx8pmlBcbDZ6JL%2FpjeydqG2eUpK23HHiAOAJOF%2FmpkNB1DpF1DO3kPpcD5Fnp1KqIDPRuywPHKRb8wanHPGfG%2BJrELkPiqnajiWJ6dcW0ROJwxRkimigN8gtwcQ8HSJ%2BeAnpAhtFabhGafira5RNcwwt%2FavQY6pgGpUQZVHzwHzeTJy%2Fj9XA8INeOa%2F8c3yBUQ%2BV1XccK9aTKvMCfRXE49V17imNHOsbiV7zWC6tQOiAonYEk8Z6tQLwUDL1bAczjFoC9YNrttyadD5I3fNNRFozc78cTD%2B8kE5UDXFImyj8yzwt4JOjuA6bZQrxocI7FmQHN0LAtDat0PrQAsmf4sv85Rqh4AGRb4pcAc4f0DxxeCWyrAqDw42IoH59vE&X-Amz-Signature=e4f2faa2891118d65d60a714a4fc916c8ef252d54b9df28655a80652eab01a87&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT4HO6ZJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5iRFp9JyURaaevlPXVPZKxcB86eZR7PFW%2FBZnabcKdAiBB4eTP7awiDxY4HaFsj5SZcOqqlVrUlj1d02h31GgJYyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk3OzJny94qX8qmOqKtwDO9UsS08iPhU2FtHnY4JLBbHxiEzkZbosh1hsDzVRauSOWI4qWgYS8YWWOKbu75mCK9uqoFzKPUrFVG2l4JOnwWP9N7xqCJeHuQffjI%2FtjmwQrqpaD9hTehnWBgunT5eqgoBG9xK%2FfF%2F6dAhU6vBIigYNMolIyWuRdqA0aSuJ1%2FJCj0FdFljyT%2B2DL%2BkJnaabsgWHH6VCyc6%2F%2F3TenM5R6ebEa57CezqGJk0ubhm3NcM9VqEdXK9C7hVA%2FVrhmyn4FFzRP6Swml6E77f%2BEc9sTKPzD7h9Wy6uXu9BPNh2oAtvIX2DoeulYPldjZdY6IoxnOQuGHISzZG%2FYpv%2BP9IbYjdFaXYfFwNQIoFAp6RNM16HZ6Am8JS6jmP5VtuzouYoYurIjX0abFRc704sn6%2B24e6OWeUiGFGmaDAY6yvoCtxNkNR%2BcXdlUBwsqARFcyizIQaSxyV0dTxvmQbwxHEOJ17tk7FTtVD7EfKfiMGcjpML3FJ%2Fy51m%2FCqkmwGN7eIK1CpPWJ7xcFkB9uJWG0SSOWXBVkFHFBvs5ImFBFWuRmk3AyfIzqgXVV2a6VqInt4yHNggTy39ZNdBTodChdG9CFEKIzo0Mu6oeTF1fklo0JmDzGwf6MmVaN8x3v0w6N7avQY6pgEDgbLrX%2BoMfJEdLg9J8Snan0MOCC6qJyrG3u%2F7frSGAZHNHnw6coFTBLlxGipSoLNRdpcQcHeIY5VbwUXNLKh0tY%2BaOiNlnpLpsbmrVD0lnsshd7THS0mDFt%2BNQ0%2F41wmZr8by4cECcyaY0IiIOiLopq305nT6PsmPpI%2FcZFsonE%2FaxseeomuhOFlyMRkEnZKwav3caV%2FQv4%2BNSsgDfys7bBYU3H6y&X-Amz-Signature=de6cde4056a33bb66dabacca8611d3abf363f46e6b2bc063c75439b8555450f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3YOB4JN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg5BRvZ1fFvWMb4YWJh0XsX9FQypmB%2FyGDdtx7Gw7epgIhAJH4avQXw6S8VcuPQ%2B6YH4J4bMORVCuD2DkN6G6t1Yb4KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxpho5hJVzuEeuK3r0q3AMi2l4sWY8iWFdcRoVIZpDH5zR0BxlWLdkzp%2ByrhAVfhYAxXf7fgvo0XT8daa0iWIaX1gOVL%2BWzpD9ZmhEoVlzYxfrSga1wv7dsLpCxWS7fJM1z%2BuG31AwtPfM7nj5LKET1hb1oTjY6jJNTcaUbGYc4Ud7wzZUkDRI%2FIAs5QH6z1QiAcRiaLlP%2FsRkQYNgxpNTNreIF1ns%2BbSYfqZT5MbRV7mbFk880%2F2qnKCrI7nuOMFuqqIG8uACOor%2BDxxaS7JR2TGn9oXB5S1sSdF5YBKAd6UQv6qghAM8%2B0bLxUjMb1O8S89Q6hENKBoxz07TnbQtwBOjrbNX4QuaqDJ7STXYpO03MW9XmO8ZxbeFG0r7XPIoELmJlElISfBktbhJi%2Fa63G5zyhOjWqUljlhjgkFCggqSQL1XpIGJ4wTqImZx51rqw2PpUdXbOKCc6Ue3QtjF3n084qekm2WEDqNurGsJN604jxha0fzFNjSmBJAJWG%2B%2BBolAHSQthQaXct%2B8aYIc0noDpc2NXYomWbSuS6B%2FZlgUpCcz9DR%2B9syIEzNgHD0VaDNGX7xMIW8d8TlMM3aPRx2S0agoMnThQDlHz5DG%2F%2FZTEpfbA0xo0Xa%2BHRs22CaYgMRygS1wBvYPnTjDP39q9BjqkAUKPpCFjZdPDcJIwv1tAgkA9b%2FqWI%2BnecJYyrlge5qxtspKS%2F0%2Fp3uv8DkyN6h8vvvz%2Fv7axcjt57ht4010qzE2x5H5mjj6hBeOxNSxQD7sDgJVi1D5NiK26z8tYJCOkq9KljXhSIwBzfHdRo0JTpMp7536TvEHPU%2FVHhe9mlfRdTlfNVD%2BYRfPgpdCwWRJBIm6vr9xOzafuEyyz%2BverDUPZ%2Bs%2BO&X-Amz-Signature=9bffcf8ed66cf351f5b9b21256295b3a0cea19ee9a714e82455171879566a719&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
