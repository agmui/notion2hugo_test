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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH476FSV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSWUXzDtVCyRWDL9LdGnj1l8mJgEEmyzVQHj3AKpZ76AiBbwZ3Bqbdp5g8Go46EAYjx%2B8SeNL54LP06JDo1wlccqiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxPsU3IK17G0D%2Bc1ZKtwDXN8jE79FuqnIJllCyu50jLPysTzIjokcj%2FMhc4BGr66gZjr%2FMTSHQQYhMdpm3xO6B2DMz3HEFkSMk0hIrvv31GtrRHiAsfip9biMxTWQZMm2Dy4NbIbzS6v3dc81gD97zhdmBONLL2RlOfE3rAET6kbRmLRyDZpRxWEyonKZg0LZUoa49V7PDmJYHHWBtHw7iGwrIP%2BrjxgLoG8aAKsh4pV4nYjwTkYmxbzJaUJnxhSJTnLI0QAoxUYohd6GZrsSYKZZ5JKWgBvMjw93xqrhvv6OzHegg7yMb8r75YgmQz%2FBi3OjhCG9f8uXEi3ZnOBX1Ah%2BM9LcApsTKD1a1MmNs9%2BhHlDt6XWXXpnE9TPA9zJvMJXDvG4mRse552Hb7gFGTsMYu4Ol6xaSloIkVDqquceufMSl%2F3o079Axj9EutHhU6x5wLKUCRQRrAi8aHSzQWfrmGZUMtNDoBINklswAGOkOK3qsZXprQat26Z9mMKxG86sir5BD6R76U6MB6OB%2FKhaapFqFTOKGoa%2BeHoXXWAA16hkTdl1ERMTJSU4KIEL8pL71k3actqVjYrOyqOt52cwx1H1wXTacD1kEM0Ai8q4%2BFUfC2OZGS%2FyveIVkDgooCm71L3s932%2BKt80wyNefvQY6pgGOE2Kh6TMtb1ANfH2VpuiAJwCTCV2IGWC5zJJqtIEHZFtICMwYOjImg3y4%2FeSPspTyLuk7I7pmxqcV1EUcl3DUj0Fg120shC1jMYBQlCcuDMakW6gJGmE%2FzHeoVFfnaDqSZnwh0QR%2FOVHLYiyZYrlGtsWaEzNBu8GbNUBU%2F8ZBS8dKe1YIGeXxP1F7%2B8J9Tl4D6WZ%2FJvgpb3C3Hx0bxoo3EcSX7rbt&X-Amz-Signature=1a66920e1ca8533b4031263a5136d516a882102df261b74d544851b886d7cfc2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH476FSV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSWUXzDtVCyRWDL9LdGnj1l8mJgEEmyzVQHj3AKpZ76AiBbwZ3Bqbdp5g8Go46EAYjx%2B8SeNL54LP06JDo1wlccqiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxPsU3IK17G0D%2Bc1ZKtwDXN8jE79FuqnIJllCyu50jLPysTzIjokcj%2FMhc4BGr66gZjr%2FMTSHQQYhMdpm3xO6B2DMz3HEFkSMk0hIrvv31GtrRHiAsfip9biMxTWQZMm2Dy4NbIbzS6v3dc81gD97zhdmBONLL2RlOfE3rAET6kbRmLRyDZpRxWEyonKZg0LZUoa49V7PDmJYHHWBtHw7iGwrIP%2BrjxgLoG8aAKsh4pV4nYjwTkYmxbzJaUJnxhSJTnLI0QAoxUYohd6GZrsSYKZZ5JKWgBvMjw93xqrhvv6OzHegg7yMb8r75YgmQz%2FBi3OjhCG9f8uXEi3ZnOBX1Ah%2BM9LcApsTKD1a1MmNs9%2BhHlDt6XWXXpnE9TPA9zJvMJXDvG4mRse552Hb7gFGTsMYu4Ol6xaSloIkVDqquceufMSl%2F3o079Axj9EutHhU6x5wLKUCRQRrAi8aHSzQWfrmGZUMtNDoBINklswAGOkOK3qsZXprQat26Z9mMKxG86sir5BD6R76U6MB6OB%2FKhaapFqFTOKGoa%2BeHoXXWAA16hkTdl1ERMTJSU4KIEL8pL71k3actqVjYrOyqOt52cwx1H1wXTacD1kEM0Ai8q4%2BFUfC2OZGS%2FyveIVkDgooCm71L3s932%2BKt80wyNefvQY6pgGOE2Kh6TMtb1ANfH2VpuiAJwCTCV2IGWC5zJJqtIEHZFtICMwYOjImg3y4%2FeSPspTyLuk7I7pmxqcV1EUcl3DUj0Fg120shC1jMYBQlCcuDMakW6gJGmE%2FzHeoVFfnaDqSZnwh0QR%2FOVHLYiyZYrlGtsWaEzNBu8GbNUBU%2F8ZBS8dKe1YIGeXxP1F7%2B8J9Tl4D6WZ%2FJvgpb3C3Hx0bxoo3EcSX7rbt&X-Amz-Signature=add0b70bd2eff422024d416dd09eb5631c9bcc4e38d000b15ad7478edfd7eb11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652OIJSIS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMtZR2zrKu%2BwJmBD4%2Fydi9PSn0uRVYoeK%2BMNK%2FY5vOJQIgbeg%2Btq9bY%2FBj%2BaBs8FyPbbpiwRCGUEzV7puc78sx83IqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEsFk81SEzHYC1hySrcAxJpgTRm8qdYGPD6TIm5Kw8Ef1WaeBkV3Xzr%2FR1RZ%2FYjMiFvDuLWXgPmQRQWConvnxrDcWrVHSeiVvBaLydH741TRxGdEpyUBsgbt1pS5K5j5kVO89loN0n6512jcFyT7dNkV0b5CIS8uc%2FXNSYx030dgsrkgTOl1YJ2crqT7avGk%2Byc7vpkSTvAoOBI%2BigYNvH4z9AQR785ur64MZdCP86JJ9CDMhxHzkxp%2F2wPw2TJSTqi5pwpfkZkpUFRjwMahnVAe7I0RbM9k3GTKZZswy9nTf8VQfKjceYDZ4MFAIqBt088AWruHjLd3SCYiBJJ1pa46g5mdkc28UmCGCDP5oUsi5Bh0R1o38sJpsi18tMVCLDTT7KU8kMPdmq8VyYx%2FGvriOg%2BsYlPsIrEtFXZUJfiiejqRd78t9C6aXQvgYfR9XgDbXGLqrqMU9y%2FyMCHZwgmvpsH0GKcTNqVm0oLEY1NP2Han09j6h9xKt8rJBVQlqrM1AjIey8a4M%2FnimnTX9urbj%2BXgzL4NkOhFx3KmRIHAPauRqQgtgakbTGV4CdXOKiHh2oqMTnzptg7RwYaESZ2xoqSwsYIPYO%2FzRxH%2FqQ61xLpZKJxWvSohf2Tz1pZzAXm0dftYQckb9exMKHYn70GOqUBX6oObF9ItZ76HrIJtKtabz39zWsmTNykL0UBJ753ZOK9JDw0OWaT%2B1AwcMJe7lWM9DZcAIxYDf%2B7fiexsqJoRb6DiQKzhJlo9T7LyExdrdMt5qKkuDgVRX83SsvX6fOVcMAFUU0B7I%2FII7qIbv3A8NS0tPwfMy6MXAd6WoqwnMk%2FbQXl2o9EeSOG1mV3trPt5o1sTJYbUKZz%2Frs4OZCwc858UO9N&X-Amz-Signature=7c3666af5791c1ff8bad228289d9eb689ed1eabb0f7cb55dbbc6a7cda34c868a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSQPPHU7%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7P%2BDx6W7cTAjO1o1CutPKmOhCVcKqQfezRlbDUTWFIAiBgShCaAc4uXkos%2Ff%2BhG4ZBBwyLYaFOvx6c8CqsByh5GCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGW%2BwQuNY5nJV9sNBKtwDiUO0e1sGydoTiJPTbYJwmr1Kye3RbhjUbfjSoiCq7HnXe%2B0n6R5tVYqwSvTN6OOOlFmop3XwsGovU17zxGso4wPHDKIzTmrXa8XCzvR33UVcKIr1XmXXs55sCPZPKCZ2IdSAIUesMea6%2FpEfinhYZtE%2FThMCmQHVNWS3IZw2Z0snOJ9uhN2INzFSd6qsVHB77R3EXS0Dpnw0aEncfZ8Eyr3BLQikst%2B0LrRhbXZiYYfQS3uGTcqbHS8I9hTm9NbeHdLjMZqjV76vLhjXXXkY8scgqdf0wSgIcuIDYF2umn37kE37RQWMRopwCbKsSrPwAFhF%2F0H2Wjh62JyLjmGLmDaHHe6RZhIwJlP78hzQXvnBzheVyQLInrbkoqH7jklwJEAiIoNRv%2BkdyGX%2B%2Fl%2BTBWh6h3VEbgTIjYlqziTNvVgsYNN6%2FZAW0kXOfGV3388iTss%2Fy4r8wYYglfFYY0dNT1LGT5ejU8pN2EuO21N1Jz%2FuYvECDxORdGGg9DLpdHuBNYKr5z4gWmWIlSZ51JtuG4O3bE%2FBh3WLhKheSKB6bak%2BttxV6mwdPodmQDMC2MqPpFeplQNPmh2g4BAKUp46L6brp02PtVfm6sOXM7bJhTJ5LRsX2blCv01%2BBV4wqtifvQY6pgFKLvPOtiKfIvDlbxjoHq0LCWfX8wyEHUvqPhTvKYXFcU2%2Bm9LnkiuecEnu4%2FB5RB0Bpm7vSjH0r%2FWmbaW1pKAIEYMZytqbFc4QwbUQqhcdeLAo%2FDBw%2BOalZLCHZ1PaYU1LUUvahaUHWUwz5lRDo%2FIcb76TSxI6Uhq3yeoLyKtlxEd2pewAC4SpyB2ISi5HFfaKdFjHw71eJd4mveZX0TxBTr8BT0lZ&X-Amz-Signature=5e6ae57e020a993214fb2515b13f9d82802dd148d1e587b5095eb18012017ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH476FSV%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSWUXzDtVCyRWDL9LdGnj1l8mJgEEmyzVQHj3AKpZ76AiBbwZ3Bqbdp5g8Go46EAYjx%2B8SeNL54LP06JDo1wlccqiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxPsU3IK17G0D%2Bc1ZKtwDXN8jE79FuqnIJllCyu50jLPysTzIjokcj%2FMhc4BGr66gZjr%2FMTSHQQYhMdpm3xO6B2DMz3HEFkSMk0hIrvv31GtrRHiAsfip9biMxTWQZMm2Dy4NbIbzS6v3dc81gD97zhdmBONLL2RlOfE3rAET6kbRmLRyDZpRxWEyonKZg0LZUoa49V7PDmJYHHWBtHw7iGwrIP%2BrjxgLoG8aAKsh4pV4nYjwTkYmxbzJaUJnxhSJTnLI0QAoxUYohd6GZrsSYKZZ5JKWgBvMjw93xqrhvv6OzHegg7yMb8r75YgmQz%2FBi3OjhCG9f8uXEi3ZnOBX1Ah%2BM9LcApsTKD1a1MmNs9%2BhHlDt6XWXXpnE9TPA9zJvMJXDvG4mRse552Hb7gFGTsMYu4Ol6xaSloIkVDqquceufMSl%2F3o079Axj9EutHhU6x5wLKUCRQRrAi8aHSzQWfrmGZUMtNDoBINklswAGOkOK3qsZXprQat26Z9mMKxG86sir5BD6R76U6MB6OB%2FKhaapFqFTOKGoa%2BeHoXXWAA16hkTdl1ERMTJSU4KIEL8pL71k3actqVjYrOyqOt52cwx1H1wXTacD1kEM0Ai8q4%2BFUfC2OZGS%2FyveIVkDgooCm71L3s932%2BKt80wyNefvQY6pgGOE2Kh6TMtb1ANfH2VpuiAJwCTCV2IGWC5zJJqtIEHZFtICMwYOjImg3y4%2FeSPspTyLuk7I7pmxqcV1EUcl3DUj0Fg120shC1jMYBQlCcuDMakW6gJGmE%2FzHeoVFfnaDqSZnwh0QR%2FOVHLYiyZYrlGtsWaEzNBu8GbNUBU%2F8ZBS8dKe1YIGeXxP1F7%2B8J9Tl4D6WZ%2FJvgpb3C3Hx0bxoo3EcSX7rbt&X-Amz-Signature=1da4fc3cbd4912204454a7b49ff691811973d82643e3eafdc08608a27207bafa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
