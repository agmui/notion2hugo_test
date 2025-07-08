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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QF5XQAT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FCygWKADXfRNI%2BylWwGKDdke%2Bg0bgYG%2Fmyo1YQyiPjAiBJq2BLAcMethsHAgn87Es4lseq%2BmVgBxc8j4cqoTy9iCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAdb9utZmPLyTeVWhKtwDWI%2BNcmsy7DC%2FqvdHIUjTQ1oKyvagxhaSRMqHcUnmIHJ6rJWMme08Si7It6CAq75twHTGWCwPb9kf2K5bUFXTMuNy3LscuDtFqMccwO1d43DcT%2FvPGByjJc8ncAui0zPKTbBFC4KIAUfQqfHpJxyE%2Bv%2BZKEkYksIA4bsijHAyUCT9Yy%2Fg9jwGUqmob10epm%2FJL8RlcnaKUb70uXG2PV4dEeE%2FLxic16gBtIqG3%2Byk%2B91lPnS64LpaBU0qihTbkuNoJ0vTJRDBk9vbRyW%2BghB13wsILgM86xcbUURWzctnsJYwjIdzwHJ1hmw%2FaEs5WQ7ULubhr8ATW9F1RAvjZTTX9OfwNyrm5cIAPFHMbDKXvzlggSVZ8scNmFT2SKNfnBw99S24Ka6p8BhsebTY19SDU8hoaDQBEWGEzelbN32fGMtxdD4WQK3eGBPn13aRMrYQKD1c7eGZAFTy4wdFzx%2FONkLlBvfShGC1K2iFHa74QsFoK8NeHWLfp0qbJKZdPsNIUMQ5FF7FmNoqHX1xPjyKfPTuRBfm%2F9E9Bn6y%2FzJxLlCMShJ9jcjWLR2fTnNcDsJvUsTZqj0t3vT1nBS2Ux2WTvGX%2BD4nDLhgsouooJN7DxP3mLWMFYoIikKV8qww2LO2wwY6pgGbTPdq8GmqqYEz8ImPsPfes16%2FR3jAjhdQB2zdOuIE13BWwuWDau5BX4zIDzFXa8bwr%2FbtMvIctPEcuzyIg7a%2BdK8mOMo6NIlBJNwPxiWdC74qvx35HTVv1HRQmdOXP5YWHH9RrlI872YU9y0Yw1HAvvGnf%2F9XSYjT9FLXk9ViTQes2SgUPrabilz1UqJn5GmdosOjlDjZBF%2FxS0DUz%2BGLeYtDoGyP&X-Amz-Signature=e9f6b94973c3bccc270461ef2fcc0a6245b6ca0073fbb8e28940abc4b8807027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QF5XQAT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FCygWKADXfRNI%2BylWwGKDdke%2Bg0bgYG%2Fmyo1YQyiPjAiBJq2BLAcMethsHAgn87Es4lseq%2BmVgBxc8j4cqoTy9iCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAdb9utZmPLyTeVWhKtwDWI%2BNcmsy7DC%2FqvdHIUjTQ1oKyvagxhaSRMqHcUnmIHJ6rJWMme08Si7It6CAq75twHTGWCwPb9kf2K5bUFXTMuNy3LscuDtFqMccwO1d43DcT%2FvPGByjJc8ncAui0zPKTbBFC4KIAUfQqfHpJxyE%2Bv%2BZKEkYksIA4bsijHAyUCT9Yy%2Fg9jwGUqmob10epm%2FJL8RlcnaKUb70uXG2PV4dEeE%2FLxic16gBtIqG3%2Byk%2B91lPnS64LpaBU0qihTbkuNoJ0vTJRDBk9vbRyW%2BghB13wsILgM86xcbUURWzctnsJYwjIdzwHJ1hmw%2FaEs5WQ7ULubhr8ATW9F1RAvjZTTX9OfwNyrm5cIAPFHMbDKXvzlggSVZ8scNmFT2SKNfnBw99S24Ka6p8BhsebTY19SDU8hoaDQBEWGEzelbN32fGMtxdD4WQK3eGBPn13aRMrYQKD1c7eGZAFTy4wdFzx%2FONkLlBvfShGC1K2iFHa74QsFoK8NeHWLfp0qbJKZdPsNIUMQ5FF7FmNoqHX1xPjyKfPTuRBfm%2F9E9Bn6y%2FzJxLlCMShJ9jcjWLR2fTnNcDsJvUsTZqj0t3vT1nBS2Ux2WTvGX%2BD4nDLhgsouooJN7DxP3mLWMFYoIikKV8qww2LO2wwY6pgGbTPdq8GmqqYEz8ImPsPfes16%2FR3jAjhdQB2zdOuIE13BWwuWDau5BX4zIDzFXa8bwr%2FbtMvIctPEcuzyIg7a%2BdK8mOMo6NIlBJNwPxiWdC74qvx35HTVv1HRQmdOXP5YWHH9RrlI872YU9y0Yw1HAvvGnf%2F9XSYjT9FLXk9ViTQes2SgUPrabilz1UqJn5GmdosOjlDjZBF%2FxS0DUz%2BGLeYtDoGyP&X-Amz-Signature=ff8a455f1b1099a9a48cb3425894a5c9079e803216abed8a55adb5a50e9e6653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QF5XQAT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FCygWKADXfRNI%2BylWwGKDdke%2Bg0bgYG%2Fmyo1YQyiPjAiBJq2BLAcMethsHAgn87Es4lseq%2BmVgBxc8j4cqoTy9iCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAdb9utZmPLyTeVWhKtwDWI%2BNcmsy7DC%2FqvdHIUjTQ1oKyvagxhaSRMqHcUnmIHJ6rJWMme08Si7It6CAq75twHTGWCwPb9kf2K5bUFXTMuNy3LscuDtFqMccwO1d43DcT%2FvPGByjJc8ncAui0zPKTbBFC4KIAUfQqfHpJxyE%2Bv%2BZKEkYksIA4bsijHAyUCT9Yy%2Fg9jwGUqmob10epm%2FJL8RlcnaKUb70uXG2PV4dEeE%2FLxic16gBtIqG3%2Byk%2B91lPnS64LpaBU0qihTbkuNoJ0vTJRDBk9vbRyW%2BghB13wsILgM86xcbUURWzctnsJYwjIdzwHJ1hmw%2FaEs5WQ7ULubhr8ATW9F1RAvjZTTX9OfwNyrm5cIAPFHMbDKXvzlggSVZ8scNmFT2SKNfnBw99S24Ka6p8BhsebTY19SDU8hoaDQBEWGEzelbN32fGMtxdD4WQK3eGBPn13aRMrYQKD1c7eGZAFTy4wdFzx%2FONkLlBvfShGC1K2iFHa74QsFoK8NeHWLfp0qbJKZdPsNIUMQ5FF7FmNoqHX1xPjyKfPTuRBfm%2F9E9Bn6y%2FzJxLlCMShJ9jcjWLR2fTnNcDsJvUsTZqj0t3vT1nBS2Ux2WTvGX%2BD4nDLhgsouooJN7DxP3mLWMFYoIikKV8qww2LO2wwY6pgGbTPdq8GmqqYEz8ImPsPfes16%2FR3jAjhdQB2zdOuIE13BWwuWDau5BX4zIDzFXa8bwr%2FbtMvIctPEcuzyIg7a%2BdK8mOMo6NIlBJNwPxiWdC74qvx35HTVv1HRQmdOXP5YWHH9RrlI872YU9y0Yw1HAvvGnf%2F9XSYjT9FLXk9ViTQes2SgUPrabilz1UqJn5GmdosOjlDjZBF%2FxS0DUz%2BGLeYtDoGyP&X-Amz-Signature=6c29e85b13ad9a73bd4996e1c0b17721d218416d022c75ae6a2c4639ec9f099c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q34YBHUV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMnIg3qLZpVuS2lHOEJEJ1FGetTQn5Lczx6c3HHxSXBAIhAILNTV9kGsjyspyRIIxLGj0Iek8NkD9Xm%2FB7QIZ%2BmxXVKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyipAChPq%2Bf1KBWmH0q3AMV7nJo3K2881hwU8a6LAhoBKhy4%2FFIO6kY6UhdSiA7vxVI22KcEbtRSIx9w1fVhhe5nFncXYR9lIqLuf20gqCCXZEoyIYdWgFo3P3G%2FCULXpBLrno%2BF2Jy%2BukM2LiSzKGEt42qpKlydGXXNu%2FEn4oGOPpJKi7J9Tob8VKHusLEwIj7j3TqJA3TgQfyL7lE5qybCTlE%2BRwI%2BjlEwz3rtGU1Sw1eVZFrT0L4InvmF83OrEIbBPRpL0m6ZZyEkUIXJgKcdhNmcqt41qLRqJhNzsBQVLIP5v%2BvNTCty9q2KVZeY7eGwSVNpQztvbGc6%2B4%2BzBDlfecY%2FRgrP70rWbep7IGHCPzQecdD%2FK06bo0rV28MVTbW820NPrBPJGvQ5tR2hykuqtJuvsWV6BqciSMdzz5uhy8uhi3cfwRCv271w2tYnP0h2n8kCLltMi6RHuIZCc%2FA1rfu1XtPayyJktTfTZH4mtKSJ5U1tnb%2B%2BakDMCqRKR3Ob7c6Wfz9oQ0MjnZg0RQBqU8LWNiA87WUjS%2FgP%2BBxlbZhgZBXdhAR3jut4LEfRPb6acYkz1kbwV4G2RtxxFMkRzYDyx6LOqpKGcJiODViSc%2FFC%2FTRgUOb%2BFiUdzwq1X4T558TzgDv3KECPjCUtLbDBjqkAcEnmegPDZ9289zECEEjTmUFUfgiWsiyu212DKAS%2FKwGDE4%2FUpNAukrHhOICxhH5pnjPmWRytj5QF%2Bwom%2Bpb7Ik2Erlq7MPsEAZ%2FIhTSocayhciZGqlmACBzPgw7Pkl2GFqzq2gN0ieT7UMsLPGch0XLp65eq0pP73uxQTdxlaMSkxGONqWUJU1JbzCH4%2FIdYyzFV%2BYqnlj7Rw8zN0dudC8FkvPQ&X-Amz-Signature=e0af5969c34f45a8ae660bd6c77f5527621652a052c04a61f07dd7575b2916ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEGUYLKD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0XpuoeX2K%2BeRxI5jEHjGDswTQIOB55%2FGrS1rT9nqwRAiEA%2BNeU8SyHNMKh5NbNSnEnhT8IqYCGFliF9S8qfV2P%2FvoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEOwGbnljlfqQvCcCrcAzeYq6WeQEAZtbSh9bHuGuJBQCeIpnOCsIMnQVPZQ5xSwHfhW8OlZ2pCQmidEUMM4Z72fru9CpGH8s5ep%2FVVPxscOZ%2FKjmGKyi4ZlhOQG3ufUaHlbvMIxO3wdl%2FQstnPGrZC526BPmJDIgQHVWm9CVXUq8cICHSEa6Kew55JYtqznEv7oW6KZOZ56by1sMMZ7cTYeL71PIANTuKpghoQeCmx8Y8otXtfOUFZ4jAptGoScWxEBH%2BgU1hSJzwM5YwPUhxsmadZ03tQHwLYIUrg3EgpNYR9NQRErDs%2Fkvv0qLMYhlcgF5X8geBDOmE9FM8l3t385%2B%2BubRZcwLy4yRaY1fh0Nlv0TaLguoYAmhc2BGdS7HyjQ8waf5nKSjWWzMWWeMtjGFqmNyB%2FYIGh%2BqRPu8oHawMMU%2Fs%2BYJn%2FZy3VVAiQHIEL1dSt89bcA7RJbGAlyaGmcLUiypXgukX7CG%2FXsgFUuOM19EJqSoAEC%2FBLikOGTEhQldlKZ1DWVy6wIbx76UVl0%2BFHVYMSEqEe02zoSZHy7ttFAXDQhdeisNnnUdxgy2BXK%2FdFcoUQsNbDVv8hmBBpioCsSYbC4xMc6bxJJkABN2uDaPs60EFXnZGOlJSPU9u2BxORpgz48Db4MKO0tsMGOqUBI7EWrdhYBvHJMbpvl%2FT9ktTYXeCIeqV09faAzpZkkXEOhi3SQ47sd03pbul0sCcHN3gG%2Boj0khYrnKRORyT2N7Xxd%2BChXLeIF%2BfNGPXnc2qOXgDL0wHHOowoSN2e2Vqw%2FQfNJ9WeNqjI2wP9iOSuYn1GoQHiEBXg1P85%2FnJm0uiXAZKJ2QtRcQBw%2FMS2QQe2s3Mufhy3QnWZAuRFeJxz9oMcxNpG&X-Amz-Signature=a13fb19535608341ae58224add51652bc70f5a52ab6e5d98c1dc165e6254f052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QF5XQAT%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FCygWKADXfRNI%2BylWwGKDdke%2Bg0bgYG%2Fmyo1YQyiPjAiBJq2BLAcMethsHAgn87Es4lseq%2BmVgBxc8j4cqoTy9iCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAdb9utZmPLyTeVWhKtwDWI%2BNcmsy7DC%2FqvdHIUjTQ1oKyvagxhaSRMqHcUnmIHJ6rJWMme08Si7It6CAq75twHTGWCwPb9kf2K5bUFXTMuNy3LscuDtFqMccwO1d43DcT%2FvPGByjJc8ncAui0zPKTbBFC4KIAUfQqfHpJxyE%2Bv%2BZKEkYksIA4bsijHAyUCT9Yy%2Fg9jwGUqmob10epm%2FJL8RlcnaKUb70uXG2PV4dEeE%2FLxic16gBtIqG3%2Byk%2B91lPnS64LpaBU0qihTbkuNoJ0vTJRDBk9vbRyW%2BghB13wsILgM86xcbUURWzctnsJYwjIdzwHJ1hmw%2FaEs5WQ7ULubhr8ATW9F1RAvjZTTX9OfwNyrm5cIAPFHMbDKXvzlggSVZ8scNmFT2SKNfnBw99S24Ka6p8BhsebTY19SDU8hoaDQBEWGEzelbN32fGMtxdD4WQK3eGBPn13aRMrYQKD1c7eGZAFTy4wdFzx%2FONkLlBvfShGC1K2iFHa74QsFoK8NeHWLfp0qbJKZdPsNIUMQ5FF7FmNoqHX1xPjyKfPTuRBfm%2F9E9Bn6y%2FzJxLlCMShJ9jcjWLR2fTnNcDsJvUsTZqj0t3vT1nBS2Ux2WTvGX%2BD4nDLhgsouooJN7DxP3mLWMFYoIikKV8qww2LO2wwY6pgGbTPdq8GmqqYEz8ImPsPfes16%2FR3jAjhdQB2zdOuIE13BWwuWDau5BX4zIDzFXa8bwr%2FbtMvIctPEcuzyIg7a%2BdK8mOMo6NIlBJNwPxiWdC74qvx35HTVv1HRQmdOXP5YWHH9RrlI872YU9y0Yw1HAvvGnf%2F9XSYjT9FLXk9ViTQes2SgUPrabilz1UqJn5GmdosOjlDjZBF%2FxS0DUz%2BGLeYtDoGyP&X-Amz-Signature=bbe564f8de4e1e6e6f418bc222de982ea415229863f324086f09f7d160cf40cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
