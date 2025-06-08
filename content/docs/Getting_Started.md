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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXCG3V3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTJoGCZMzBCRjgfHXxMsh8Lz4yZ7flKTnDVaElx5jL7AiEAzqslNqw8B633jZiii4H1iMzzhGvUeCf3T74QWU%2FKscEqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCILKOVQ7piRhruuuCrcA%2BW%2B7KdpXa7eEjwektQpVd7Bi0HU8IUbRtg1w4sejPgKWVXSy7GZXJEh6vmFfBSxGdgcW9zfWMxjQbUwhOSLCeiwcaRelPWXh1U6GHC9RCcTzZ9EwzRyxsmjmRVBJRvcInAsR14u2OzjY8SRxL5eW24NhMcAYAS1EQfkNJce2GWSoJSU7LmI0DER%2FpPjGGgs1B1wSzqEnBx%2Fuh9%2FWhmvE%2FbhrQcBIk085e9ATD12%2B3SXn1OZeZIuBi56oIA4FiEv7ZfpBqhSQZ8mz%2F%2B%2FEcYv7xA2mcOeFDdpPy4ybsz%2BP6TBE8GVWBMSnzyPjDCTwVkHRlyhDMWMYxwYh3w50sysh0kPgSyyEDBQZeoH4ASQsZAQ2iku0C363IsXSEvYn%2BngEJQTw%2BrK3dXJY5XrcrhPDIHH5U0bGiVw%2BdubB8P9TKsJ%2Fyyheuf9Ie4conMA5Ajc%2B0n3F8jIKgXFqn3r2BmICD3QD6ivlxRWLGjWBYJmp1I%2F%2BtuH1GlGlQVRf8LLoGPKs4FVqk5mQpQKrZCj%2FJgnI54ZPBazLiIu9J7jHF%2FyJinywolc9tRWAeKgkQmrHIApwZb9doe10htIIO3StejV%2F%2BoJBwcnHy0J5oxxjslneaKSI0smECQBqUY2%2FGWVMMnMk8IGOqUBOtJFd6p3G3JpQ0TRnmzSubTWTIxmzMKMWNJVI1pHrhrDhKuSHFC0asoJ0L%2FHo%2BF4Q3dnw1jAmq9E9%2FSDN8khHKJcOwqlNOP2yJM0xXxKAZacRGwLIU4j1uR8HM7M4v0Lt5GpMMW13FtAmUkloYHgOZLa0lNsULikVRr22Ay%2FRqEZx02GRZFJreLJODJG%2FEoTpJ3FPyUc9f66UYKcFK8ylHsigdvC&X-Amz-Signature=5ee5ea50d864f0fa65caf576928f4f5833793353fffdb3c59887b591adde3c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXCG3V3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTJoGCZMzBCRjgfHXxMsh8Lz4yZ7flKTnDVaElx5jL7AiEAzqslNqw8B633jZiii4H1iMzzhGvUeCf3T74QWU%2FKscEqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCILKOVQ7piRhruuuCrcA%2BW%2B7KdpXa7eEjwektQpVd7Bi0HU8IUbRtg1w4sejPgKWVXSy7GZXJEh6vmFfBSxGdgcW9zfWMxjQbUwhOSLCeiwcaRelPWXh1U6GHC9RCcTzZ9EwzRyxsmjmRVBJRvcInAsR14u2OzjY8SRxL5eW24NhMcAYAS1EQfkNJce2GWSoJSU7LmI0DER%2FpPjGGgs1B1wSzqEnBx%2Fuh9%2FWhmvE%2FbhrQcBIk085e9ATD12%2B3SXn1OZeZIuBi56oIA4FiEv7ZfpBqhSQZ8mz%2F%2B%2FEcYv7xA2mcOeFDdpPy4ybsz%2BP6TBE8GVWBMSnzyPjDCTwVkHRlyhDMWMYxwYh3w50sysh0kPgSyyEDBQZeoH4ASQsZAQ2iku0C363IsXSEvYn%2BngEJQTw%2BrK3dXJY5XrcrhPDIHH5U0bGiVw%2BdubB8P9TKsJ%2Fyyheuf9Ie4conMA5Ajc%2B0n3F8jIKgXFqn3r2BmICD3QD6ivlxRWLGjWBYJmp1I%2F%2BtuH1GlGlQVRf8LLoGPKs4FVqk5mQpQKrZCj%2FJgnI54ZPBazLiIu9J7jHF%2FyJinywolc9tRWAeKgkQmrHIApwZb9doe10htIIO3StejV%2F%2BoJBwcnHy0J5oxxjslneaKSI0smECQBqUY2%2FGWVMMnMk8IGOqUBOtJFd6p3G3JpQ0TRnmzSubTWTIxmzMKMWNJVI1pHrhrDhKuSHFC0asoJ0L%2FHo%2BF4Q3dnw1jAmq9E9%2FSDN8khHKJcOwqlNOP2yJM0xXxKAZacRGwLIU4j1uR8HM7M4v0Lt5GpMMW13FtAmUkloYHgOZLa0lNsULikVRr22Ay%2FRqEZx02GRZFJreLJODJG%2FEoTpJ3FPyUc9f66UYKcFK8ylHsigdvC&X-Amz-Signature=59e9332804d3e67f16af56e98b910065a1d7943f12c7e71ee283d57d87295595&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXCG3V3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTJoGCZMzBCRjgfHXxMsh8Lz4yZ7flKTnDVaElx5jL7AiEAzqslNqw8B633jZiii4H1iMzzhGvUeCf3T74QWU%2FKscEqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCILKOVQ7piRhruuuCrcA%2BW%2B7KdpXa7eEjwektQpVd7Bi0HU8IUbRtg1w4sejPgKWVXSy7GZXJEh6vmFfBSxGdgcW9zfWMxjQbUwhOSLCeiwcaRelPWXh1U6GHC9RCcTzZ9EwzRyxsmjmRVBJRvcInAsR14u2OzjY8SRxL5eW24NhMcAYAS1EQfkNJce2GWSoJSU7LmI0DER%2FpPjGGgs1B1wSzqEnBx%2Fuh9%2FWhmvE%2FbhrQcBIk085e9ATD12%2B3SXn1OZeZIuBi56oIA4FiEv7ZfpBqhSQZ8mz%2F%2B%2FEcYv7xA2mcOeFDdpPy4ybsz%2BP6TBE8GVWBMSnzyPjDCTwVkHRlyhDMWMYxwYh3w50sysh0kPgSyyEDBQZeoH4ASQsZAQ2iku0C363IsXSEvYn%2BngEJQTw%2BrK3dXJY5XrcrhPDIHH5U0bGiVw%2BdubB8P9TKsJ%2Fyyheuf9Ie4conMA5Ajc%2B0n3F8jIKgXFqn3r2BmICD3QD6ivlxRWLGjWBYJmp1I%2F%2BtuH1GlGlQVRf8LLoGPKs4FVqk5mQpQKrZCj%2FJgnI54ZPBazLiIu9J7jHF%2FyJinywolc9tRWAeKgkQmrHIApwZb9doe10htIIO3StejV%2F%2BoJBwcnHy0J5oxxjslneaKSI0smECQBqUY2%2FGWVMMnMk8IGOqUBOtJFd6p3G3JpQ0TRnmzSubTWTIxmzMKMWNJVI1pHrhrDhKuSHFC0asoJ0L%2FHo%2BF4Q3dnw1jAmq9E9%2FSDN8khHKJcOwqlNOP2yJM0xXxKAZacRGwLIU4j1uR8HM7M4v0Lt5GpMMW13FtAmUkloYHgOZLa0lNsULikVRr22Ay%2FRqEZx02GRZFJreLJODJG%2FEoTpJ3FPyUc9f66UYKcFK8ylHsigdvC&X-Amz-Signature=28b74716f4b22634dff3613e74b19716f68f435aefacdee3c440bed2dd68645a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JMWDTAF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcnNoKkUhPhgbXSPrBaaqEQXA0Z0mX2TyH96Y%2Bbcy9xAIhAPozEzaypaMkwMJY9Gvb0OEmPcLiv60heG4eC0vmiVnGKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7piJ1yDy6TnhL38Uq3AP%2FgfErhdQe0DNsLpS8DqyMsucSQqp9Vwns7SLju30cgPf2xjrCzpzgFKtbBET%2BNGVIUWahpRRrojM5IqC2fDu65QuQxLHTHT2s7lUBMDnwRMG5xmh82vtS6fOmYPpPIuTfOD4JANBmreRyR1KqfKN3k0o52XpxAZ563EttSH%2BkR61Szw04FChPy2ntKeWLI8mGU1wfysv8d%2B7ZjCeR8M2vLdBx1GmEvoGp%2F%2Bs2jUqE4AG8XWLN%2BzCHe3PrrNTwIMOwW3K%2BdSSyRUVw6JtJvvw8vLunDMoIy%2B6i4kl4MQnt%2FBkojDvqIyPuzhd4QnrZ%2BK16ZB1cSZrAkQVpXACTtSQUcYEyS1FKRDmdLzNLOV03jxbE3ySqfO26ZEBWYbdwzWcIyrP9rzKOslMxu5VotyM%2F3M0GbtVVmDnQd0mMFQDZJlo2X%2B%2Bj6FyV%2FXJuC2l6dV9GWCXZ3SD%2BpgHXiUkNXLYS3z01APXqB8WglPbrW524DV%2B0Y8aTI8d2MVBqkE5OdHgsbf8Tb92FWpZ7Da3TKU2jIBq0lE3rfxidfZhZ5BAwBy1EsZ88%2FyO3xpng83DEv3Lgwepkzo83edgJjC03GkmSPOQjNXBu5i7%2Bmk%2F%2F1OJzKAMQ2FZFKNlNycAM%2FzCHnZPCBjqkAYii3DfXmBgqXfDp11itnPGrjvWoAe1MNMAwDLKYUSAVs%2BoDwYMW%2BHiiIAxQzTwQyZbZuDLUlB%2BmBABXZPNQOJPWnk6uJ0fs8HuJiXxIRVSZ%2B4vDUYNYCSloSOxzUF1zmUtwZ6dI2zODxYdjmDrHj0O6%2F49nwHG%2BCvw3Bf3vSMbUe73el2SzNKTchUBLDsGpV%2F8xjpUaA%2FelAOYcsKR%2Boqn6ojT%2F&X-Amz-Signature=f652e20901a749f51d53d7523b38c647e520b880d7b9a6786664e2f20aff1bc5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ5JCN5L%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXF04bwsPlMF9VUFSOkAUZvT8UeFsM2yAin4fQ5l5TugIgdlaUrfOIc%2FUnsoSlcgIkFScyr5gFX5Q0B87iNWnt3coqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKU1qKIky5CpdEKJyrcAxHyoAuCQ4yLF2LulRft%2BmWs7twFEYXRN2kTfHfDH0l4o4S30JF4dccvd2u0mUo7VoDTdXQ3sBd%2BdpRBWyBU72tWYLIKB3UU51p0Yf4BJKd3G0RVfdEU%2FAr%2Fo%2FYrcMMJB5tv%2Fb6ePkFJWkPnUw%2B6g3PCwwEkf9Ad%2F4w1xhA%2Bmar2tPb1SITjt0%2Bikwbh4wFgWOIYJgsoW5cVJhpdHO8Pray2WXd8XwlTKbI23eam5T2fQ50yzPYHlVNUKhOy7m1s5RiJne%2BaYup4eywxingdD%2BqrgHUsNnW0RmsWFm0KdEcvvg%2BjfIaj%2Fy8dY7L%2BoSAOxhKtefhHQ7rLUL6dge9BQxc%2BaeWg6GNLE58spvYUNqpPaVhaiuaSiZ%2BAvoDrVEZu3LLIxgcCu%2BqsN04Z%2F0iQ2lLm2b24sesa%2FS6CzeQPCNkmI20fKy6WVcfPJrRx%2Fweg3voMpjjY3c4QD0FTQfjs4%2BO9X39aCd8wtpV04H8M0CvR1ShGArjFSIo6c4f7f9P6hR0c9d0Jti281hqZgUv%2BRpHN8q5fzWEXGa47InkYi1TCUsytO5zSfzmyni%2FEfLYghg2AaAi068UWKhJiilc%2FWJ41vQbsEaLU4rHo%2FPdKy0KrPCkj55pyF4RuL0efMKqzk8IGOqUBlB7%2FF2FiznhNyTJa3I2xNkDy0uvubzCNZ3cwes8nQTdtETcgLcuWTNFXxJ%2B%2B6%2BruSvEn6ZcOFXwFMzuV%2BpnWX0Sm3Ge9CwP5pBnyzucerWDYwOlI%2B4CMkEjvy%2BMocY7KhxDCF1EfAt%2BnH3X1XyFJbRN7RQzmLktPgFyXIjkVa3AWFJlVPVtw2FznVg78mhI7uTOBtmxqYGVO%2Bd9sKvnaRU76k6%2Bh&X-Amz-Signature=09a1af3d2fd66b0ed8b6faff90bcc9a854fe495445fce20ba533ed8ae0b262e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXCG3V3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTJoGCZMzBCRjgfHXxMsh8Lz4yZ7flKTnDVaElx5jL7AiEAzqslNqw8B633jZiii4H1iMzzhGvUeCf3T74QWU%2FKscEqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCILKOVQ7piRhruuuCrcA%2BW%2B7KdpXa7eEjwektQpVd7Bi0HU8IUbRtg1w4sejPgKWVXSy7GZXJEh6vmFfBSxGdgcW9zfWMxjQbUwhOSLCeiwcaRelPWXh1U6GHC9RCcTzZ9EwzRyxsmjmRVBJRvcInAsR14u2OzjY8SRxL5eW24NhMcAYAS1EQfkNJce2GWSoJSU7LmI0DER%2FpPjGGgs1B1wSzqEnBx%2Fuh9%2FWhmvE%2FbhrQcBIk085e9ATD12%2B3SXn1OZeZIuBi56oIA4FiEv7ZfpBqhSQZ8mz%2F%2B%2FEcYv7xA2mcOeFDdpPy4ybsz%2BP6TBE8GVWBMSnzyPjDCTwVkHRlyhDMWMYxwYh3w50sysh0kPgSyyEDBQZeoH4ASQsZAQ2iku0C363IsXSEvYn%2BngEJQTw%2BrK3dXJY5XrcrhPDIHH5U0bGiVw%2BdubB8P9TKsJ%2Fyyheuf9Ie4conMA5Ajc%2B0n3F8jIKgXFqn3r2BmICD3QD6ivlxRWLGjWBYJmp1I%2F%2BtuH1GlGlQVRf8LLoGPKs4FVqk5mQpQKrZCj%2FJgnI54ZPBazLiIu9J7jHF%2FyJinywolc9tRWAeKgkQmrHIApwZb9doe10htIIO3StejV%2F%2BoJBwcnHy0J5oxxjslneaKSI0smECQBqUY2%2FGWVMMnMk8IGOqUBOtJFd6p3G3JpQ0TRnmzSubTWTIxmzMKMWNJVI1pHrhrDhKuSHFC0asoJ0L%2FHo%2BF4Q3dnw1jAmq9E9%2FSDN8khHKJcOwqlNOP2yJM0xXxKAZacRGwLIU4j1uR8HM7M4v0Lt5GpMMW13FtAmUkloYHgOZLa0lNsULikVRr22Ay%2FRqEZx02GRZFJreLJODJG%2FEoTpJ3FPyUc9f66UYKcFK8ylHsigdvC&X-Amz-Signature=b24d9a2b7257b2fbcf29a3eefbd84aab442a8a9d48e30c78dbe7fd66d9ed5d95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
