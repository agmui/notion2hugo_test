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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO4SOAU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHppip3Mn5BVEcXYIrawjVMZIXqTiiKMiNwFXcrT8Z1uAiAYi2ZqAkhLI9yjQDJWn709oiyeJ1CKvlYFXlpUMFbquCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM6v111SFCjdQVJKr4KtwDAeVmyV5csZQbm7uegeo0grosAj20vIyGUg3X9SRrCJKCR7aRgymd4jOui4Mlbb3gFrq3WN1Fj6%2F%2Bw4pLlVn4SDEW0%2BDVxAaYU%2BrIzegsXJ9vq1BmaGr6JoyUEQK0r54BsQ5hlFiUVwgy6am%2FMp136%2B7V5zcirS98QKw0ujLu%2FSKgVOI2P42N1s0VWTHbebjHmRDde0Ik2IdTSIeLBIQlsq5sXErYzR7CW8v52ZskVr6xaO%2B52mp3KqjYyua%2Ftz2HkG4D8cOL4WEWT0U%2FDHHyE2FlkI6pbBf6rAKM9yOcKhJDCpr4mexFAaOrMZhwaZWe5nmQ2zsJXiU1V9ytfpWK3NunvuqekHFOdc0si2LwUixajlmqE%2F3oheTzMfGHYkkQEdKDrGYrAIaorqtzX7ZlcovT5Jv8K1Xf9ymTLgcTlhvU6IV3rZZenG9ydlw4P9Y3CnNF9vaoa4GWLcP5O4f8vjEnuXUqYyLbFuXj9kjv3cy8E%2FKhUTMjqZhIebkq0FDPdUy3RkWmZxtQ%2FgJIPJA5u%2BrRX%2FFgTYGZqG1eYqZ9CjmebXsbfzg6h7Lp1IYH6r%2B4AmBsXzBmTnUU8Yh9RstE686A4YiKatPGBXIXOTnJ4XEUbLJgZc2WayeOq3Mw1tXlvgY6pgHSTsuJIenvV%2BR%2FCEXsQljSoPBpbw452o1t%2FazMjw%2Fgq4hKJ4vus3SF9iAP8lLPsTva9kf%2Bkc6WYhrlJ57FpX9oV5yFi26tn1WhC714VprfSYUXwar8TnQvZQEOL50k77t4N9Sl2TiDbQpvLQxuLjNV0uV07Q5%2FPnWl2U%2Fm8QggQVU8TlzQaLqpX15tqZP3R49Y244uSPFGgNsTjE1kt42oZnMJQcRW&X-Amz-Signature=c815c886a4af796c0a339e0174239f36b93db472aa74b2f76b2327084a73e714&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO4SOAU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHppip3Mn5BVEcXYIrawjVMZIXqTiiKMiNwFXcrT8Z1uAiAYi2ZqAkhLI9yjQDJWn709oiyeJ1CKvlYFXlpUMFbquCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM6v111SFCjdQVJKr4KtwDAeVmyV5csZQbm7uegeo0grosAj20vIyGUg3X9SRrCJKCR7aRgymd4jOui4Mlbb3gFrq3WN1Fj6%2F%2Bw4pLlVn4SDEW0%2BDVxAaYU%2BrIzegsXJ9vq1BmaGr6JoyUEQK0r54BsQ5hlFiUVwgy6am%2FMp136%2B7V5zcirS98QKw0ujLu%2FSKgVOI2P42N1s0VWTHbebjHmRDde0Ik2IdTSIeLBIQlsq5sXErYzR7CW8v52ZskVr6xaO%2B52mp3KqjYyua%2Ftz2HkG4D8cOL4WEWT0U%2FDHHyE2FlkI6pbBf6rAKM9yOcKhJDCpr4mexFAaOrMZhwaZWe5nmQ2zsJXiU1V9ytfpWK3NunvuqekHFOdc0si2LwUixajlmqE%2F3oheTzMfGHYkkQEdKDrGYrAIaorqtzX7ZlcovT5Jv8K1Xf9ymTLgcTlhvU6IV3rZZenG9ydlw4P9Y3CnNF9vaoa4GWLcP5O4f8vjEnuXUqYyLbFuXj9kjv3cy8E%2FKhUTMjqZhIebkq0FDPdUy3RkWmZxtQ%2FgJIPJA5u%2BrRX%2FFgTYGZqG1eYqZ9CjmebXsbfzg6h7Lp1IYH6r%2B4AmBsXzBmTnUU8Yh9RstE686A4YiKatPGBXIXOTnJ4XEUbLJgZc2WayeOq3Mw1tXlvgY6pgHSTsuJIenvV%2BR%2FCEXsQljSoPBpbw452o1t%2FazMjw%2Fgq4hKJ4vus3SF9iAP8lLPsTva9kf%2Bkc6WYhrlJ57FpX9oV5yFi26tn1WhC714VprfSYUXwar8TnQvZQEOL50k77t4N9Sl2TiDbQpvLQxuLjNV0uV07Q5%2FPnWl2U%2Fm8QggQVU8TlzQaLqpX15tqZP3R49Y244uSPFGgNsTjE1kt42oZnMJQcRW&X-Amz-Signature=b97df7f460bff5445d6f2b8659f1486fa9c9e95ecb8164596a3ad0a51f4e7422&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QI3QADL%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCceajM6DY6OB7MIq3bf4jHVWmLZimsnTHb%2FbdJiFDI2gIgY3jo%2F70O0KfhuIeGhZmiKGdMwOiRwuajh5acz61ktLQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDPfhU9upRb0GkmibqyrcA%2FC7xKZgtx8QnlMYwVgNNhcCL2C94Q%2B2afCLQNpFvkIQyd6VZzodRtUw%2FQpbkiCjl1GzkgTVmu36iAeKLlrFiXZEf95ba21C2mRTP8tGU7C3Fq9R0YAB4y%2FBhIsuiBT2ZwKPBty%2Fmjs%2BgzZhHOB3OffyFfG1bN5dN4ifcy8BiZZFJqbGqRw4QQJgyHkNTpsXZvSGBMql8TGrQd20oBBTThzf%2BqrqXyheMVDO0YtuTsPTq8FovD7zYszTVj7j%2FDffcICHsIHnAmnAia5uBRVauWo7N50fDoke9IWD54wzrr%2FGQskVus3Vd7%2FajgbIOQF4Yv5XeocAwT02Q267F0liYhM0M6F5OKGL8HRfw%2FcCyD3K12kqz20Nc8mkThpvoPgxXR1cuOF3RnGE2QmIozbtqTcp%2FdBq2%2FhQBmv3SqegQN6Pd2Ix6wu1znJLz5JIYpkcBtH6zdUvVaUW%2BO2InRacTe2fC69YsgBaQSbxhSVZPDJmIRxxQoz7s6G%2FcFEbY733aAHkTLjyJK%2BWQHntqkz5zOSA%2BDJyZbcSW%2FJeZDGUvKuhd6nK%2Bi9SQI4KbCC%2BRVZo81AtKjk9N2PgRVZNrJe2BljfrJT0IzkD1lPP2j%2F%2F0D6d0DLSjgkNPJfyz77cMJPW5b4GOqUBzrj3ULVtIGxOSoxu24M63h09KSdFG%2F5S3F2L%2BhQlrE%2FbbID2NZUQNLtRBmpWRfErIoE1uLcuWB0zPY%2F04vEg65UildxxKIIQhtVUSOuVvIBa%2FhdV7Off8eaA036nkwasKrKJYxK77KwuuK7bNwDWd38ZCw8egEsJhyGGwa8Ej4JLZN0SpB4LJbGnN3Zv0ZMxts7SdcDBKcoY0nvFM42uHcuLTrgh&X-Amz-Signature=6391206a55be04205a47ac0d4443ecc7c3ea9960c06e40e7e8c83bcedea3d4be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBQVTUP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCH0yF34nklHCRy1dcAJ8hIwGJmxPoRZU9aqOsSItK%2FrAIhAP4RF2SgpHcg4yDVvt1tkzceUdxkMHuY%2BMjcEpZB8yDTKv8DCF4QABoMNjM3NDIzMTgzODA1Igx8Q5Qx7qlK%2FHUKVo4q3AMq10pg82AvjEAM54xmSZ%2BFdY9Rsi4Z7lw7nQ%2FZAdrlLjcJ9RyrTJaT3CihDiwy9W7PzR58P0fRJdPFECWklAwe7XYYgs93mkzyamhsSAtrIA8JBT%2FwUnYXIK8cNIEIcXlMBAoRjuCphTZ0TDa3l8wN2U%2FM2mBiv3nlci%2F5%2BrT%2Fo7Cbjm1IodLgXNtGCrKLbwB1Oy811uPNmHUv8WVl7kRmYK9vokyoX9PAlqZwYkXF0W07%2B9jhzy2amBXZdMMTSmyLN1KJUf21lU5c6BXr%2FY9KKz5h8ns8NjgrXuIIbfC9SZMIQs1YKrgfPdyNH0%2BQ6mw0iW%2BsiFm4ZkFX54Ur%2FQuqRAQVPfvFYbc8sGhkeXW4aS85CmhPkJlp6s7%2BddUzQoTfO8N8cQ5lWu3GpzaCD0GefnCYG8YFHN3W21qGFaBesYhZwHXD9GeJkQ5lU8dE8suuBRFBUw3a8zv%2FWf0vkIj95BKc8Nq8XryjInChEIFCIhp19pqYK%2FtiRj%2BdfftNPOyIWGbBWnA8I5sPF4PQ0QoUdICM%2FkdPUpwe9mHrr5Y3tbd05uV%2BzsBHiWpf5VWSrU%2FsBosIdYNpvPZMJyU34MDW0hty8Z9Hukelexe35mzRU1xACC3X248nUTbB4TDy1eW%2BBjqkAYjxOcYTF1%2Bq49jfPm2U6vgcv3Am2BQ1N2vlzXYY1Epns%2BC5wf1ULnT%2BO4oFwJfoCD%2B2CnG0exzhpyWe%2FKI5vEAkkVng5amCCo03eYNHizA301Wa2VNKDhZu3FPFDlVKrY99whwU9bClHwuD7%2FupXHGcUz3uOo4HYBZgMHP4xLy8CGZdkq8vLQrhEwV29TuIB5g8OTw5SuFAGpG901x3x7Jd92qf&X-Amz-Signature=e8d6b57430297f6bcdf1c92306fe85347bb5467fbe05d01189c0809642993a0d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THO4SOAU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIHppip3Mn5BVEcXYIrawjVMZIXqTiiKMiNwFXcrT8Z1uAiAYi2ZqAkhLI9yjQDJWn709oiyeJ1CKvlYFXlpUMFbquCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM6v111SFCjdQVJKr4KtwDAeVmyV5csZQbm7uegeo0grosAj20vIyGUg3X9SRrCJKCR7aRgymd4jOui4Mlbb3gFrq3WN1Fj6%2F%2Bw4pLlVn4SDEW0%2BDVxAaYU%2BrIzegsXJ9vq1BmaGr6JoyUEQK0r54BsQ5hlFiUVwgy6am%2FMp136%2B7V5zcirS98QKw0ujLu%2FSKgVOI2P42N1s0VWTHbebjHmRDde0Ik2IdTSIeLBIQlsq5sXErYzR7CW8v52ZskVr6xaO%2B52mp3KqjYyua%2Ftz2HkG4D8cOL4WEWT0U%2FDHHyE2FlkI6pbBf6rAKM9yOcKhJDCpr4mexFAaOrMZhwaZWe5nmQ2zsJXiU1V9ytfpWK3NunvuqekHFOdc0si2LwUixajlmqE%2F3oheTzMfGHYkkQEdKDrGYrAIaorqtzX7ZlcovT5Jv8K1Xf9ymTLgcTlhvU6IV3rZZenG9ydlw4P9Y3CnNF9vaoa4GWLcP5O4f8vjEnuXUqYyLbFuXj9kjv3cy8E%2FKhUTMjqZhIebkq0FDPdUy3RkWmZxtQ%2FgJIPJA5u%2BrRX%2FFgTYGZqG1eYqZ9CjmebXsbfzg6h7Lp1IYH6r%2B4AmBsXzBmTnUU8Yh9RstE686A4YiKatPGBXIXOTnJ4XEUbLJgZc2WayeOq3Mw1tXlvgY6pgHSTsuJIenvV%2BR%2FCEXsQljSoPBpbw452o1t%2FazMjw%2Fgq4hKJ4vus3SF9iAP8lLPsTva9kf%2Bkc6WYhrlJ57FpX9oV5yFi26tn1WhC714VprfSYUXwar8TnQvZQEOL50k77t4N9Sl2TiDbQpvLQxuLjNV0uV07Q5%2FPnWl2U%2Fm8QggQVU8TlzQaLqpX15tqZP3R49Y244uSPFGgNsTjE1kt42oZnMJQcRW&X-Amz-Signature=73835554e3948762b332c6fc97dcb6569e35fb6d6420b3fb2c3072f5e4639e35&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
