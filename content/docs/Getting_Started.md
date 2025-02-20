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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNE5SJQP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnlsbNsBSFdG7mr%2FAG3jgEdx7SGh4jbh6eHZj2aFccwQIhAM1lUVIx3wHkFQHICwIovLPRmRhaIIgzhjCz0ESAIJfEKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTUUEpoeb0eONZMAsq3AOWEBKs1JPsTdd4w%2B3xzedLrMcY%2FXgHEKpItKZ2nyUsijTLGhGYfi2Q7Q6gEIwtpN252%2FF30vyrtGTl3H%2B36c9fAAOPFeKdq8%2BbgGZbKcJfSja5W2yydb9bHf4s7veb%2FqX8X1URKRSRTP7B6icZhu3AHjqbef4Qg3xf7W1LBhpxCkKNx2dpCMakeEhPSDuXAk84BDf07Nam7pAC6%2F5Cyp23XIIxGunyBXX9q0Uhc0pGop9FsTAI0%2BIh4VCc4TvVutboKbkuUxTi0y1oV5P1OvICj%2F2cBf%2BgeyHsL6KEBlT9zdyxraEAZnmmWfWx0M%2FmIyEnWKb%2BeABfpvbBvGPU9T9YV1cfCREOEZ8SuIbn83hR7l50kiEGqeO8jdFjSCieeM%2FMDDxEanMQkeT%2Fqvau37yEfaKeUql1qqTloh%2BnEYxxW40EZoiV42Esb0IsJrBuDmtGBg3L%2BQlIKObVTWo6jBMmAYUg2usDKsSXBQOlVw2TPE01qO%2BLo0uox%2B4q%2BJkyxTJ9Iux7BVT0VR6zPrgoujlR%2FfqstGW4drteORTdKd8KcKbmyCRLnfUet%2FpP8R5yq2ZVOx4gb2lvkI%2FwjjvGf6VEsE4B5OP3O%2B865QRlwnsMz9LOu21aSQzYf9BeQDDI19u9BjqkAZGBzKXSIp7980iXG9Og%2FvHQGs7cFd%2BA%2FRTopOmNpEvM7vV5qIHw0CpCVEJxmHF0hI8YXmG2praDtrlqmZxU6hvETZyAZu%2BVT8hm%2FhQVCSe49yY0wEQz0pmlrxBOceDp1WKYh6WxpTW1yqdbMrpCXBmKF%2BHk7q0MPAo8UJm2Q5S4hk2VSQ5OOY6napFzg39wiJDFNleyG6R%2BafZgUozgKj81pXzh&X-Amz-Signature=889703b100a738937c76533212d78e3545189b547c11c169da8a18b993206964&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNE5SJQP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnlsbNsBSFdG7mr%2FAG3jgEdx7SGh4jbh6eHZj2aFccwQIhAM1lUVIx3wHkFQHICwIovLPRmRhaIIgzhjCz0ESAIJfEKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTUUEpoeb0eONZMAsq3AOWEBKs1JPsTdd4w%2B3xzedLrMcY%2FXgHEKpItKZ2nyUsijTLGhGYfi2Q7Q6gEIwtpN252%2FF30vyrtGTl3H%2B36c9fAAOPFeKdq8%2BbgGZbKcJfSja5W2yydb9bHf4s7veb%2FqX8X1URKRSRTP7B6icZhu3AHjqbef4Qg3xf7W1LBhpxCkKNx2dpCMakeEhPSDuXAk84BDf07Nam7pAC6%2F5Cyp23XIIxGunyBXX9q0Uhc0pGop9FsTAI0%2BIh4VCc4TvVutboKbkuUxTi0y1oV5P1OvICj%2F2cBf%2BgeyHsL6KEBlT9zdyxraEAZnmmWfWx0M%2FmIyEnWKb%2BeABfpvbBvGPU9T9YV1cfCREOEZ8SuIbn83hR7l50kiEGqeO8jdFjSCieeM%2FMDDxEanMQkeT%2Fqvau37yEfaKeUql1qqTloh%2BnEYxxW40EZoiV42Esb0IsJrBuDmtGBg3L%2BQlIKObVTWo6jBMmAYUg2usDKsSXBQOlVw2TPE01qO%2BLo0uox%2B4q%2BJkyxTJ9Iux7BVT0VR6zPrgoujlR%2FfqstGW4drteORTdKd8KcKbmyCRLnfUet%2FpP8R5yq2ZVOx4gb2lvkI%2FwjjvGf6VEsE4B5OP3O%2B865QRlwnsMz9LOu21aSQzYf9BeQDDI19u9BjqkAZGBzKXSIp7980iXG9Og%2FvHQGs7cFd%2BA%2FRTopOmNpEvM7vV5qIHw0CpCVEJxmHF0hI8YXmG2praDtrlqmZxU6hvETZyAZu%2BVT8hm%2FhQVCSe49yY0wEQz0pmlrxBOceDp1WKYh6WxpTW1yqdbMrpCXBmKF%2BHk7q0MPAo8UJm2Q5S4hk2VSQ5OOY6napFzg39wiJDFNleyG6R%2BafZgUozgKj81pXzh&X-Amz-Signature=334b85ec556b3ef33c4b32546e4434d406b4eadb595db3515bc76b3f6a23f17f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAHT574C%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMeouAjADPwz%2F2mUDIzIUBgT4urZphGXkAGsH0m5zQxAiAGx5sd7iM6iC%2F3P6UB3FJc2FkR6t%2FDW6FMz9ssa3gjkyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ41S8Vh%2Fcd0DkLX8KtwD7c%2B2SCGARumoUYQJAo6ckD%2FcKcvN9m7DOybqEconOEzXLuLVYgLf4Bax1PLlzQzobJD0nmS9EcocAECP7A%2BHh8IikGsYGCf3SSohTIhliinJo6%2BM6OzjAeFmGFJf5UxdHU1XgZXUF%2BxlSKtDFI%2B8y%2F9K%2BVm8Duxrdl1WsuKxLYxztLec5RTbAiq1oRa4AtMmNaJOMnlhlqbG4%2Br6IewFSHOaurisR25ZwRjdeng7yB8ijDWBX3aIwOH82QPvMQ2fVnae1GOdAkgJ10UW8qdhaIylQ5hFJXgolckS3lYCtP0b3FIcQLKOjduCsZIZj%2B5yXVsDGKHS8Pps4Y9yFsk%2BafgmcuaVy2WhBINkGn%2FXwQR5Gj6PCuX76mK6bVRzknF7xIv24U5Hq9T1v2lQ3ZYhBxzKLtlhv06qv2sKYMFpprCfLmjc4MKpBOqyvCkof85Xpb0%2B%2B8%2BeNjeDOg3iYwSQLD1qguf9sCq%2FLHJuv6M3NEbNwEw7KetMBV49KMkWNorTsPFZ8lkWXq55144Jo2baqoc7od0kZQvzemmCFpK1a2K5tJxjW0CL1FGxng0eRZYkSQxMlrsgyaINtOirOTULayEkukhaixtrFo6c05ule4fiesRkFKy1%2BsPjkIEwv9jbvQY6pgHVEpPO9Si8O74FfkibojErhUYt%2Fa0qdKMVZ0XPd0N%2FO7yqTnYHIdCF39fM%2FjzhaqkYzEt8SR4ot6niaVQ9tJcok6FNa8U0FgXM4xYZBRM7i0zOoTCcXdCl1ZEPqkYwaPtA3%2B4O5JZUHkQ8P5PvgQHk3LUEKaiMdLiJeSluCE2xiZg5LdYDkveSItwPxQHkeDDfYlKCT27hQuC9WrFUQ%2FLlL0aoi3t%2B&X-Amz-Signature=08a73760d43ae0169d20bf8360ec4fce321bd3e3959bbb2ae00d8860fda1d36d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW3QU5LA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtNE8ZjJkkbrUVt18Xzq%2BcI1BYdaqU9VfNqyMuMilhWAIgAuEKP0wUAoxPEFs%2Fwjjb0vXGFzuWxft6bWXcnASnRKMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPFlXli3YqDNjIK%2FSrcA95LGDURXhB8CxGnWVzmLLfvM773hvvbbHldWLm84taa6ye%2B1Y8PriSS4QwcrE9EY47xV7QjRH2dZ9h%2FMbFFhlfQIsx3v2qQAvRaAlxtJjFd9hX3ZHUoZ8od%2FWQNP6X8qDgZPerMhcQgrbIfJ3prSx7yXasXtFO8WR%2BWyROeyBLI7%2BLZLGQQxtSBYkv%2BKBhCQMn62dZk%2BCWhjXIfJoK4zr82aE93eGy5z%2BBECYZKwrohlS8l6ygWB%2FVJxMuymAf%2F0r9r0IJcWcpXqTLnYOEcCgbOQOx42CZR7XvdIZc3XgQWvymzJ4SxITYOl6ciuI9PkPln38srEJHC0sBuuadIYo8LW6x4coNTVR8Tk0r0FpOElYX3%2BM0BRBxDdxtH97hQlyP7E%2Bc%2Fe8LN8oVwuiek1BpTio3DeWpV0es3rWkvvftp1FGXrA%2FFm3O6q4Znt5DHFhFIjiQMxVIkjp2n%2B8Z%2BLod8Y%2B3kjIB2zbNXeuoxkO8F46VPzmrmv%2BMjHO3KQrQ8EIKrPLmtA1yroJ5kNIPl6%2B53L3dxNb2XiBWJ9veG%2B4tSxG9kZq%2FxqPm%2BnJ5WD%2BW0FIH5C2XDXvhOLYXXx5yJ3M5bmNgqIm3fyatRV4f3TrYN5Q%2FVZhmnmWwr1jHeMLnY270GOqUBS5lXxcF%2B%2FFwqrBoEc%2F%2FfvimoYRu7Nscy2Ypm8hisANYAckNYobvVT8FHiJT4hfeQPGp8YqQwAeQ5v8oRHw2speCMM%2FF4YujkQ7bt%2FtHir3XfA9PGCsmB67c6oK765l5SZGgJm%2F0MdsvPbDbh3ONcEyawzRwXNJG98NptVVS9O7UK8r9sVuwwTsc1%2BGWMyJPcrUv3pepKpISZID5gdSl%2BF6k81Y%2Bp&X-Amz-Signature=73416bcb3609257bf7a0f7f99075b1e6f858d6e48d15eed206d9404613e6a6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNE5SJQP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnlsbNsBSFdG7mr%2FAG3jgEdx7SGh4jbh6eHZj2aFccwQIhAM1lUVIx3wHkFQHICwIovLPRmRhaIIgzhjCz0ESAIJfEKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTUUEpoeb0eONZMAsq3AOWEBKs1JPsTdd4w%2B3xzedLrMcY%2FXgHEKpItKZ2nyUsijTLGhGYfi2Q7Q6gEIwtpN252%2FF30vyrtGTl3H%2B36c9fAAOPFeKdq8%2BbgGZbKcJfSja5W2yydb9bHf4s7veb%2FqX8X1URKRSRTP7B6icZhu3AHjqbef4Qg3xf7W1LBhpxCkKNx2dpCMakeEhPSDuXAk84BDf07Nam7pAC6%2F5Cyp23XIIxGunyBXX9q0Uhc0pGop9FsTAI0%2BIh4VCc4TvVutboKbkuUxTi0y1oV5P1OvICj%2F2cBf%2BgeyHsL6KEBlT9zdyxraEAZnmmWfWx0M%2FmIyEnWKb%2BeABfpvbBvGPU9T9YV1cfCREOEZ8SuIbn83hR7l50kiEGqeO8jdFjSCieeM%2FMDDxEanMQkeT%2Fqvau37yEfaKeUql1qqTloh%2BnEYxxW40EZoiV42Esb0IsJrBuDmtGBg3L%2BQlIKObVTWo6jBMmAYUg2usDKsSXBQOlVw2TPE01qO%2BLo0uox%2B4q%2BJkyxTJ9Iux7BVT0VR6zPrgoujlR%2FfqstGW4drteORTdKd8KcKbmyCRLnfUet%2FpP8R5yq2ZVOx4gb2lvkI%2FwjjvGf6VEsE4B5OP3O%2B865QRlwnsMz9LOu21aSQzYf9BeQDDI19u9BjqkAZGBzKXSIp7980iXG9Og%2FvHQGs7cFd%2BA%2FRTopOmNpEvM7vV5qIHw0CpCVEJxmHF0hI8YXmG2praDtrlqmZxU6hvETZyAZu%2BVT8hm%2FhQVCSe49yY0wEQz0pmlrxBOceDp1WKYh6WxpTW1yqdbMrpCXBmKF%2BHk7q0MPAo8UJm2Q5S4hk2VSQ5OOY6napFzg39wiJDFNleyG6R%2BafZgUozgKj81pXzh&X-Amz-Signature=6b181851780dccdcfde0fd80a6d83fcc60f4844a6ade3c1385b2ad076a9b83f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
