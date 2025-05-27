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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ3TQ2GB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqMgJ3C52QpzMQBv469I6TwZgCFNQ3CYnj3UlD%2FkRczAiB9qN5bygAYi02HaNCBQ9t%2F%2FTIqxM0pXul5akTF0Y3THir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM4Y31YIAgJaAcyTHMKtwDTT0M46EzsroyMVH9Q45B1Aw9RWQaOdBCasY5X%2BrrWQ%2Bsz1pN0n7ZEbViCXqNPhS3iJ8DTi%2Bnml46kksku1udnJEi7mhurlX77G0kewWIWvYolEb8XnxTHafI0mXKuDrirR4F1GsUWwEeurUlXWETBScnAEwIb05GuSUKu1x0OCgB9KexUQuyPnUX5trW3Wll%2BQsJDXbTIxYqUUPdkWLdZb8y8k%2BbjN%2BFJNVdnEzVzdFf4V99HroIZMm8e3hqIgxIRsYn0M2JiW10ej8bytF9JNBTjGbUXpibzwhg%2BsUTH1PfWY78j%2FXqh3DWUQL8UvlWTHh6T5gfXY4%2FpKuNXMMFJkjuR%2FcKrflwc2Dwx0aAAw0O57tPE3jqkOzDDpKcsiACFzIzTNDyinDyqNXNenneuCmvR1UAGTfnpaqKpbTPEpI6OAmMSUMtcuKR%2FJxjzwCcR%2BeashMxa6h%2BUVEQuJCrpWo2456va2qs1XVq%2F4snV4F2SvLlJtQxwxzGyZ1JG6fb0C6GSeBQwVun1of5biP%2FSKqrrINhEyvty2D0mGGDGKClNM5%2BJYS6L7HpGQa4KB75Zezqx62%2Fv5wRenQZBWO890x4Agj8njhVyshc2jX0C3fIHHJtGd0otLKsf7Ywk9PTwQY6pgFzMNVlL%2FvccwWLbwXYI75vJQKAAhEYkvYny8tdro0OEhzIDYCUKEEN4OamJwsZWnUBdgYwa2ay%2FXva7S3AF8R6G2MGxAjFIZZ8q8YrO%2FmLgFGrKIhSP4O%2Brn3qUIDQkMQc97vRDWkQlc7tvd1hl2ypEW33%2FJhXYAedud0MjMlwhvtR7YZSA7jzUtp2lYv0exCWcidMYs7Zn4VZZRYsrjaQ2V%2FcTQD%2F&X-Amz-Signature=f474a607e9aea1152d9f72ca6a4fff6d0ee468fba0a8ba3d67ec6730cb726e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ3TQ2GB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqMgJ3C52QpzMQBv469I6TwZgCFNQ3CYnj3UlD%2FkRczAiB9qN5bygAYi02HaNCBQ9t%2F%2FTIqxM0pXul5akTF0Y3THir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM4Y31YIAgJaAcyTHMKtwDTT0M46EzsroyMVH9Q45B1Aw9RWQaOdBCasY5X%2BrrWQ%2Bsz1pN0n7ZEbViCXqNPhS3iJ8DTi%2Bnml46kksku1udnJEi7mhurlX77G0kewWIWvYolEb8XnxTHafI0mXKuDrirR4F1GsUWwEeurUlXWETBScnAEwIb05GuSUKu1x0OCgB9KexUQuyPnUX5trW3Wll%2BQsJDXbTIxYqUUPdkWLdZb8y8k%2BbjN%2BFJNVdnEzVzdFf4V99HroIZMm8e3hqIgxIRsYn0M2JiW10ej8bytF9JNBTjGbUXpibzwhg%2BsUTH1PfWY78j%2FXqh3DWUQL8UvlWTHh6T5gfXY4%2FpKuNXMMFJkjuR%2FcKrflwc2Dwx0aAAw0O57tPE3jqkOzDDpKcsiACFzIzTNDyinDyqNXNenneuCmvR1UAGTfnpaqKpbTPEpI6OAmMSUMtcuKR%2FJxjzwCcR%2BeashMxa6h%2BUVEQuJCrpWo2456va2qs1XVq%2F4snV4F2SvLlJtQxwxzGyZ1JG6fb0C6GSeBQwVun1of5biP%2FSKqrrINhEyvty2D0mGGDGKClNM5%2BJYS6L7HpGQa4KB75Zezqx62%2Fv5wRenQZBWO890x4Agj8njhVyshc2jX0C3fIHHJtGd0otLKsf7Ywk9PTwQY6pgFzMNVlL%2FvccwWLbwXYI75vJQKAAhEYkvYny8tdro0OEhzIDYCUKEEN4OamJwsZWnUBdgYwa2ay%2FXva7S3AF8R6G2MGxAjFIZZ8q8YrO%2FmLgFGrKIhSP4O%2Brn3qUIDQkMQc97vRDWkQlc7tvd1hl2ypEW33%2FJhXYAedud0MjMlwhvtR7YZSA7jzUtp2lYv0exCWcidMYs7Zn4VZZRYsrjaQ2V%2FcTQD%2F&X-Amz-Signature=9226a3d2a3d98957a9419a02f9f57bf4fe20288667f59ae0a1a40342bd636c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ3TQ2GB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqMgJ3C52QpzMQBv469I6TwZgCFNQ3CYnj3UlD%2FkRczAiB9qN5bygAYi02HaNCBQ9t%2F%2FTIqxM0pXul5akTF0Y3THir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM4Y31YIAgJaAcyTHMKtwDTT0M46EzsroyMVH9Q45B1Aw9RWQaOdBCasY5X%2BrrWQ%2Bsz1pN0n7ZEbViCXqNPhS3iJ8DTi%2Bnml46kksku1udnJEi7mhurlX77G0kewWIWvYolEb8XnxTHafI0mXKuDrirR4F1GsUWwEeurUlXWETBScnAEwIb05GuSUKu1x0OCgB9KexUQuyPnUX5trW3Wll%2BQsJDXbTIxYqUUPdkWLdZb8y8k%2BbjN%2BFJNVdnEzVzdFf4V99HroIZMm8e3hqIgxIRsYn0M2JiW10ej8bytF9JNBTjGbUXpibzwhg%2BsUTH1PfWY78j%2FXqh3DWUQL8UvlWTHh6T5gfXY4%2FpKuNXMMFJkjuR%2FcKrflwc2Dwx0aAAw0O57tPE3jqkOzDDpKcsiACFzIzTNDyinDyqNXNenneuCmvR1UAGTfnpaqKpbTPEpI6OAmMSUMtcuKR%2FJxjzwCcR%2BeashMxa6h%2BUVEQuJCrpWo2456va2qs1XVq%2F4snV4F2SvLlJtQxwxzGyZ1JG6fb0C6GSeBQwVun1of5biP%2FSKqrrINhEyvty2D0mGGDGKClNM5%2BJYS6L7HpGQa4KB75Zezqx62%2Fv5wRenQZBWO890x4Agj8njhVyshc2jX0C3fIHHJtGd0otLKsf7Ywk9PTwQY6pgFzMNVlL%2FvccwWLbwXYI75vJQKAAhEYkvYny8tdro0OEhzIDYCUKEEN4OamJwsZWnUBdgYwa2ay%2FXva7S3AF8R6G2MGxAjFIZZ8q8YrO%2FmLgFGrKIhSP4O%2Brn3qUIDQkMQc97vRDWkQlc7tvd1hl2ypEW33%2FJhXYAedud0MjMlwhvtR7YZSA7jzUtp2lYv0exCWcidMYs7Zn4VZZRYsrjaQ2V%2FcTQD%2F&X-Amz-Signature=694debef35d071b8f1306bd46e159a1c2f94399abfe48270076e909f32421eea&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JXUBFVD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCicjf%2FEyOSYM4S%2FYvjrCoEO8YtWGPb3Zdzhe7LSm8lwIhAPJMN%2FP%2FbRPPfMJQjriP%2BWqGhtXPu%2B1f5LiV9dFzM%2Fq3Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwyyBmkhCAmwGOcApkq3AOsVduyKjteFblU09u1INcpxApsqefR7Sb32pUPjD98lUALuefRPH7UEsy3krgEh6a7MDqTFgM9JbTwjA2xBHCUlLSBVVdQ0mKNyqxabH52GTJLnztS%2FwaxGMGoKZRAKG0lV3trIXr1qQFZFngvd9XGI1hYBFiRB0k7%2FNzHrqjb%2Beo4KNp01HFa3Ab5yP9x6N4qXVnGuh%2Bu0CscDH74v8cJlRIdGkypjr5%2BDRfwSBpykQHdkf1cRyM0NzdVT4jy5hDZS7Xil66cXl%2FaGfnh%2FlVL%2FXG0AzAJJpkGGQ6RCrGphyZyuR8piw%2B0iENbPQ1B8zAd6%2BsT%2FCLkmNnel8IcVlks2JDGqpvWRj82zTmShCmEFnNz9aJv1kzRSYSH4NtSLq7hE8DjMmq3dfNly4J3ox%2FAVCv55GzuvoNqz6tliwNvO6eRQYsn3%2FCAOiauaBRy0W3wc9o8OueX5ODM66UakbYy24IoPMyhdCYtdMsoNX%2FPJwS%2FuACHf%2FyDUfbiGfsmmSYpaLcBs3OWXJdb4hIwj98QRzj9kfUSc4POv%2BsG6N%2FQkSN4QbsAIMNzuOIdcbr95DxA2yzgn3leFtkMZSQmGQ8mzrWkdB8rVKIZ2ogEDaydgqBlGvlDSYwHOzReaTCn09PBBjqkAW%2BLRpnAWlo7H5qCbdoKhj%2BGr1jxGRne1kDetohV3NfPy%2BNRnaY1NnFMy6mU6irhgzVbwAcqhagbrAZrSHQJ4f6QxQsh0Q%2BbH2CUE%2FYV923mPnOCidx6SmE8z4vqXIu0%2BbVmG3e8cqgWHmN%2BZRS0NCXTuN0hOL%2FN6JY%2BODP6s7EFcPPlE%2FnkYghMIXRH9DtbQtm8TVlhvE4YpUuvq4ar1YGDb6%2FL&X-Amz-Signature=4c879156a026f4e832418035aac725b055f9fbd50c80bb3bbbde88c1823a0813&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GK2RZPO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGYTsVV1pPwuwkXeD85TOUicM%2Fj1Ik2BuwEQVL2%2FKVagIgHhrRVFzi%2BkgY5bWRD8VBtlZw67lhBwuUnKN%2FZyVCsV8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPjP%2BANEUIFMzuLMmCrcA3dzKlTSzAqthBJbHYV66G%2BqI%2BQHgL1mfb7qui12FOMjGvdIm4fl1P5s1aJJDXRf8ackxvMhzOq3GkrvwfiVlcOglDy4Z6GxUdinG%2F2gGkwrlho7uA3bEtHl7wnldMkXFWfKUPRZnAdrQhZCBUg87%2Boj4Y2Sekh38dulnUKtGcCDxwFYRvuNGDUjef6OvEuBv6wMDXQcouSARhKcpB94gE5j9ot1yzniOHwKjjUYSqjmuQfTzWIvnRaUDa5bF%2BHKeIRmWM1gPbsEtpmh6ZhCl4Azw9qv4qBOzU1gj8ol76PjH1jvDjl9nJmA2xQ2ibID7Q%2BsotY3861HUBk6%2FwApmYFX8wa0BtvIfFWeptOtVrQY96tFUMsSZfbo3LWNYPi%2BVDpE%2B3OtSy4lbb0pEoGtsYTKyl8IgNVd4AW1aLe6b1OCGZ0adMjaTk%2BMDeODx%2F%2FDXe53xsrSl7Jc3z%2FMlaXtUWc30%2FKV%2BI4XlS8IIm00iXtmFMyLVZeamlcaXE6Jq3nSonhbFyaEC%2BLCFYqQZPF77fdTd94eyO7PpQikj3VXjqCxj2rBTEMiscMN4nfi2T6X2yPAkuKo0G53%2F1dnKJesLenv6jI5EaTrZh66kcQq1oSYsJFeBW5TY5s54wqKMJ3T08EGOqUBQj2rwES0oG7WR1HNhmsM19dO6WCJHJzKb7%2Bk9SlkRCF0MuG2g2Wmimc4poDcdQsk1AiJzHtU3lxKDTxPtQOHPDpMayMWH%2BkQ75irsUKEP7028FjpM3Ot%2FXRpGp7SM8wCtYY4J3zoXF%2B9tVWjxTPpnPFvT9AYMm0lBBaAYxLKVuI4UpdPr%2BMdEEXtUYb0%2BsVn9mZZQvJtpl%2BRv3FW%2FNCsOu7KtPQA&X-Amz-Signature=dcc5e032ce2754d93a1ba0ee6f5eeaf7ef318844b0d1e4475cc172d31479ffe7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ3TQ2GB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqMgJ3C52QpzMQBv469I6TwZgCFNQ3CYnj3UlD%2FkRczAiB9qN5bygAYi02HaNCBQ9t%2F%2FTIqxM0pXul5akTF0Y3THir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM4Y31YIAgJaAcyTHMKtwDTT0M46EzsroyMVH9Q45B1Aw9RWQaOdBCasY5X%2BrrWQ%2Bsz1pN0n7ZEbViCXqNPhS3iJ8DTi%2Bnml46kksku1udnJEi7mhurlX77G0kewWIWvYolEb8XnxTHafI0mXKuDrirR4F1GsUWwEeurUlXWETBScnAEwIb05GuSUKu1x0OCgB9KexUQuyPnUX5trW3Wll%2BQsJDXbTIxYqUUPdkWLdZb8y8k%2BbjN%2BFJNVdnEzVzdFf4V99HroIZMm8e3hqIgxIRsYn0M2JiW10ej8bytF9JNBTjGbUXpibzwhg%2BsUTH1PfWY78j%2FXqh3DWUQL8UvlWTHh6T5gfXY4%2FpKuNXMMFJkjuR%2FcKrflwc2Dwx0aAAw0O57tPE3jqkOzDDpKcsiACFzIzTNDyinDyqNXNenneuCmvR1UAGTfnpaqKpbTPEpI6OAmMSUMtcuKR%2FJxjzwCcR%2BeashMxa6h%2BUVEQuJCrpWo2456va2qs1XVq%2F4snV4F2SvLlJtQxwxzGyZ1JG6fb0C6GSeBQwVun1of5biP%2FSKqrrINhEyvty2D0mGGDGKClNM5%2BJYS6L7HpGQa4KB75Zezqx62%2Fv5wRenQZBWO890x4Agj8njhVyshc2jX0C3fIHHJtGd0otLKsf7Ywk9PTwQY6pgFzMNVlL%2FvccwWLbwXYI75vJQKAAhEYkvYny8tdro0OEhzIDYCUKEEN4OamJwsZWnUBdgYwa2ay%2FXva7S3AF8R6G2MGxAjFIZZ8q8YrO%2FmLgFGrKIhSP4O%2Brn3qUIDQkMQc97vRDWkQlc7tvd1hl2ypEW33%2FJhXYAedud0MjMlwhvtR7YZSA7jzUtp2lYv0exCWcidMYs7Zn4VZZRYsrjaQ2V%2FcTQD%2F&X-Amz-Signature=a3e0cfd100ef5dc84496bda2993d8cf3af95f0a87fd36a9c70dd5491cfd6d070&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
