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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T366OBXI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX2zYOqTZrAE4mt4pMQyr8UxBNhsjD3AdAKziw9V1FWgIhAKi6R7qJWXyCtdgg11X4iQErR3JgmOt8m1RJvH19JvlEKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqyAx6Ijo6rlRfuHIq3AMZC1mZbTlj0XP37R7Ht6eaF1smmDNPq0WcLVSqPzdmFxriGeAfj8jw576ZNj4js5xS8DpQ9u1cvYI7hz%2BdBNFvlgrZXnOQeDPriTGT5q%2FJOYJu2BEVe7rZXAAt9UW9n2IbSMDIFZW9A%2FJ%2Fkot10Q7HC3TzwgTb9u%2F9gb2V7kSdiVC08adR1lax70JFwkGJ9Ex7AJXcsODXHhB1p5IYmZNgnW%2BIDIPP6FKNKSX2b5piUBndTenv%2FfndIob40Pj0qtcDF%2BMgJJrLOv91l396541PRHh1EUce3PCsXGld4aYy5tnWvewMlij0zLclKUg3exB4GVFsNj16jaG%2BO7bOe8y5f8ccvrz1r47ESlFuwc2A7Xu5xs3IbkMqI37H%2BkkYr3O4wBWodXsuiFQrIng9wzK9ql2bUfgThxHYyHou0IjnZ2CC2w7p7rvzaLhy63TxoH0yttDAC5FTwb9fz%2B%2BelqRnGI9D1DBSS03UutwMlJK4zmhGj8NmvRI5W5SRShiDsVEeDr%2FaZYIjKUpmuK0uVNX2XZYlCffs7fTAY0D8VIvZEdOJZygwGpdqqgSGpmkyaFgIo%2Fg0iHdWLIYEWuM8HeJkbCLsYbRLGVfrFk0D%2BtgGWZar0eWlDeosz6uCLzD6vOK9BjqkAa12NN5Cvnucbwc2fieBoOrByTbwbHFCxQnMBkr%2F%2BTpK%2FY6s8P%2BJiglsz1fPRUdlaPOGJKOP5Q3vbeJ2wViP6Y%2F99HYM%2B5vG4ij9hyyh5M6HRelzWgDABR8NDDmMzJYD1HRK4R%2BLa31yCNTQ35fevWwMqoJIJeQhlX6EBHjw%2BmXnzXF00z%2BGIWLPlsxfr54ckCtxflirjTTGgl01vZ3wQ0eIiEhH&X-Amz-Signature=b161eeac9c766425887192e2807cf2d7413484643728661a8181a9c9a66bca93&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T366OBXI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX2zYOqTZrAE4mt4pMQyr8UxBNhsjD3AdAKziw9V1FWgIhAKi6R7qJWXyCtdgg11X4iQErR3JgmOt8m1RJvH19JvlEKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqyAx6Ijo6rlRfuHIq3AMZC1mZbTlj0XP37R7Ht6eaF1smmDNPq0WcLVSqPzdmFxriGeAfj8jw576ZNj4js5xS8DpQ9u1cvYI7hz%2BdBNFvlgrZXnOQeDPriTGT5q%2FJOYJu2BEVe7rZXAAt9UW9n2IbSMDIFZW9A%2FJ%2Fkot10Q7HC3TzwgTb9u%2F9gb2V7kSdiVC08adR1lax70JFwkGJ9Ex7AJXcsODXHhB1p5IYmZNgnW%2BIDIPP6FKNKSX2b5piUBndTenv%2FfndIob40Pj0qtcDF%2BMgJJrLOv91l396541PRHh1EUce3PCsXGld4aYy5tnWvewMlij0zLclKUg3exB4GVFsNj16jaG%2BO7bOe8y5f8ccvrz1r47ESlFuwc2A7Xu5xs3IbkMqI37H%2BkkYr3O4wBWodXsuiFQrIng9wzK9ql2bUfgThxHYyHou0IjnZ2CC2w7p7rvzaLhy63TxoH0yttDAC5FTwb9fz%2B%2BelqRnGI9D1DBSS03UutwMlJK4zmhGj8NmvRI5W5SRShiDsVEeDr%2FaZYIjKUpmuK0uVNX2XZYlCffs7fTAY0D8VIvZEdOJZygwGpdqqgSGpmkyaFgIo%2Fg0iHdWLIYEWuM8HeJkbCLsYbRLGVfrFk0D%2BtgGWZar0eWlDeosz6uCLzD6vOK9BjqkAa12NN5Cvnucbwc2fieBoOrByTbwbHFCxQnMBkr%2F%2BTpK%2FY6s8P%2BJiglsz1fPRUdlaPOGJKOP5Q3vbeJ2wViP6Y%2F99HYM%2B5vG4ij9hyyh5M6HRelzWgDABR8NDDmMzJYD1HRK4R%2BLa31yCNTQ35fevWwMqoJIJeQhlX6EBHjw%2BmXnzXF00z%2BGIWLPlsxfr54ckCtxflirjTTGgl01vZ3wQ0eIiEhH&X-Amz-Signature=ae5d294c484f036e7ef63830426cbc0fc5f064ed47c2608c3b6f61b3bcc9b064&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TN5KVXS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsWldoY53xtl3PC1sUPmCBYt2BKhMtD8eJ7F8bOyKVNAiBOH9wTuexUNpRMauX7HpQqUs1MXkbZjKgUYG5gG451sSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUchPw6FJvMY%2FOQQVKtwDcGXA%2FoTkhyKw8GNKh4xcqdia9bBH77oNjQltuBwYxI9usbTauwt7TXWGm5ti6ShwV4gl%2BLXprBdyJ1AJq5f9%2BF5EkF6z5XHEGe7BDU%2BT%2FbEeFkE19GH%2FLpykLYpEJaiCdQriToLE8w%2Fuqvtpz8LZ6JxAIIPP%2BfOSQ2yQt21W6Nnoe2n3bdR4n2BveamTA%2Fy2czRJR%2FQfajYHZPHQ3IOI4lp4JgSqLXcNYvi8OA1r80ddT1NblsP4hHS8%2FLf7s7tk0BP4IxZdnINLgF8KQqaDJtwJwslA%2Byx%2F3t7k1ynkv0Wk5Hs4ReHus9Fmg8k9xkiPuhbTDNKazCRdRMGqwTemgJagS2k9u78ksH%2FT%2B1Z4A9F99EUjD9J9Gzpxd%2BPBayxdQnU0dZqFLq%2Fu6Ypb73OTdzBjZv68xJggJCtqSL6X7fAu2oNl7bQXF7XzpDVNXZk9atpuy5YKtn8vdRZCgc4PqWTdVJNE6VxkjrJ2%2BTiXNeb1ak%2BatQzBvvn8kBj9%2BGIoZjHaiFBU%2BC9gZ3yqVOPScK38ydrj4wNrsK1ULtmLuZJEv9sffu4h00nJsOAlv8Vh56Z6AeIOXVDSB4RyOJnl16Nvx2gNCamEMwwsaTkglih8JmgOxzJMt838f%2F8w%2FOPivQY6pgHSFg11GDkHQMze5RyL5p0R5fp5FUnb8%2BOfSC5DufmwR6HwENuA0CNDK4cs7RJwePiWuhVHuOaqU6ExHo9aTtkmZ2FePm%2BbxezK40ptN5O7bxA%2BBzzTM%2B0XvNy4e1vNI9%2Fd%2FeP8IcDxObiEXBpcYGMqIrbQnUhJiUYQj0o6GDq3OtQOocC%2FqZfs2ruFgrwIC9KS7XCf99jLB4tKm1Ol5h8PJWKt7Zt2&X-Amz-Signature=a576ac0bc1cdeecc7d514ae62a31418490f8dc671966ca45e49e0ff215a06175&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WCI3JVC%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDYm0QIrwQnSbN0ZLBpxaQRlzTDumGdKgaJWR0k5BufAiAN6eweVOakzeHXdjyUWwhWysoscv%2FCcPAZ%2BPm8MMutryqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ090CSPADlr0KgEJKtwDYSY2FCv61SJbV0RuO2tLLUuEmFLw43qdV4w%2BJa0fEL051c5o1dTSDxx9dQFX6onYOV4kGpuc6R%2BKtpDIqH3qO44eThsFZ2TI7q48mAZ8%2FP8wG%2FwS4oq5kgFhzKeBWCVA8D2CQgPXK%2FxAVJGNpKbm8FRdhhjipcbNYhqy%2BYMRZcUyWbeP9bfiphoQDmViGhZuK4VTH9%2FyJFpZUrZSK6%2FBv4U59u6XL5r2hGiZVI0XTiuRa9E7RiDV%2F5sImnH3YtnMlXJKHNTtAo%2BiEC8pIUUAWsyPDSviphWkGM3ZpEI9k1DiVW%2BPuX%2Ft6EgvaTIyJdlzOwv%2Bbf3ZbFS%2Frnd0EbgtXrGoaDQxvAo3Qyga1lyvBCq004%2FL1q2mXAuoJFip0HxsLuNOdYIGrlWWHO1hGetNUdzRucO9DvzLKDxKyQwQ2qO6Ep0jMzFvutpJxHiEdK4SNB%2FIEbgafQlQgQTcyI4V9FfiAoL7EQNaxxuoCblO0cWMSxPCXvZeD2ZkcCbS%2Fo9iXej7JWV%2FIqm0mG0iCpjVrz2FGk87wl4J0VQaFFj2mxQjus6Oeo0H5ccLZkqJtld5yC1JF%2BUvJWNvaSCiiYVCbDQFLN5Ypz%2Bf8D3iVBbNLzFdBqV8a3bIupcGeTEwzuPivQY6pgEXt1JxL2QFoCSAvNDPI5wV52m%2B%2BeP1mz4CpCn%2F5bO76VVSOfipbT5LcZ20kSc%2F1gOiqk4BFSf7wxjyRoXuW36dNKUVfpZEEEsgM29qwSD8d5Vhf%2Bvtl4BBngpl5ODL%2BxnHOjcK2SqPqj%2BvyzkGaidf%2Fx6ElKn6kwSSHSujyaJ8IGy%2FuGwwqeGrTvTQnPdq7UX23buJEuOjBlJnuzownXKZ0fWRKHY6&X-Amz-Signature=ea9061fdda8bf4479d7ddc59ffbb0ffc4dbf07c5370421ab58ae31885358e5b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T366OBXI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX2zYOqTZrAE4mt4pMQyr8UxBNhsjD3AdAKziw9V1FWgIhAKi6R7qJWXyCtdgg11X4iQErR3JgmOt8m1RJvH19JvlEKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqyAx6Ijo6rlRfuHIq3AMZC1mZbTlj0XP37R7Ht6eaF1smmDNPq0WcLVSqPzdmFxriGeAfj8jw576ZNj4js5xS8DpQ9u1cvYI7hz%2BdBNFvlgrZXnOQeDPriTGT5q%2FJOYJu2BEVe7rZXAAt9UW9n2IbSMDIFZW9A%2FJ%2Fkot10Q7HC3TzwgTb9u%2F9gb2V7kSdiVC08adR1lax70JFwkGJ9Ex7AJXcsODXHhB1p5IYmZNgnW%2BIDIPP6FKNKSX2b5piUBndTenv%2FfndIob40Pj0qtcDF%2BMgJJrLOv91l396541PRHh1EUce3PCsXGld4aYy5tnWvewMlij0zLclKUg3exB4GVFsNj16jaG%2BO7bOe8y5f8ccvrz1r47ESlFuwc2A7Xu5xs3IbkMqI37H%2BkkYr3O4wBWodXsuiFQrIng9wzK9ql2bUfgThxHYyHou0IjnZ2CC2w7p7rvzaLhy63TxoH0yttDAC5FTwb9fz%2B%2BelqRnGI9D1DBSS03UutwMlJK4zmhGj8NmvRI5W5SRShiDsVEeDr%2FaZYIjKUpmuK0uVNX2XZYlCffs7fTAY0D8VIvZEdOJZygwGpdqqgSGpmkyaFgIo%2Fg0iHdWLIYEWuM8HeJkbCLsYbRLGVfrFk0D%2BtgGWZar0eWlDeosz6uCLzD6vOK9BjqkAa12NN5Cvnucbwc2fieBoOrByTbwbHFCxQnMBkr%2F%2BTpK%2FY6s8P%2BJiglsz1fPRUdlaPOGJKOP5Q3vbeJ2wViP6Y%2F99HYM%2B5vG4ij9hyyh5M6HRelzWgDABR8NDDmMzJYD1HRK4R%2BLa31yCNTQ35fevWwMqoJIJeQhlX6EBHjw%2BmXnzXF00z%2BGIWLPlsxfr54ckCtxflirjTTGgl01vZ3wQ0eIiEhH&X-Amz-Signature=10506247dff61ca8aab395cc2da093a688a95e787f7ce06d741aa7c87cee201d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
