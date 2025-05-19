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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWHRQ6C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5wdl6rDEi%2FAbYy3LJ94BUF6vRNpz%2BYpkX3Gbbwj1RmAiAtOUqagT3PF2w%2Fw5X7Gp2MDVDwk29skq74n8lEJ6kj3yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQVvU%2BnUoMDkETzWKtwDGNYFYLXc1uhp0KyuT1MBNOm3AkYIfv4cheUtoW80HQYitXUNB4j4ie7tJFDTHRRyzonlTGJ7S2R408Mhkc3kIAdahtrOUgLzWRJjIBVJp%2FSGpiZ08Q%2BmUkp%2Ftnzm%2Fw%2FVhLveKkX8S4r00rqRLJe2lQr3SSY5bHxu3X8O1RKgUjBK3aZmLX8xgkANrlID76s3yZJ3y34b0%2BrKIAzlU4pMJuDLEi0WRGjMX9EdHG5lhBj9IEqbcxKh8VJQmWnqjBNuEI7dtBwcXZzrT211KakhUEPjc6TcQJuDP%2BdRWeEXmUswVGaPhh4BByRGzSakiyVBP5alAT9GdwzvvRqROTq4d2EwSslwnk5vjav25rLVhf2Iglz4dgBkZNf1ZaT569TpU1BSxNGLD36LmRzdGS9ibTxD7O1xFxqNCsoW1bf7duNCcCZjPwZyd0yOkV4LVgcNdwUvBJKgf6FFFol%2B%2FADhPRpeRGqL2pea4TM5qn5%2F6aBCMA%2BmrfpSzLnKzQuvDIaPAi5ucUZrHbUKMV1dzuBTGsOYJmTnEycoAavgyn3pZdmj49XGQY1gJ1eBg1KHybVJsXXOgVTjCn41%2BllGMwp64uAyoHHHFOfY1XoEQoWVdMgEWVW2fnkmqNORGwMwpOypwQY6pgGtVn%2BNzgwr3AWS%2FQYx8rVsh3Mvhhjh%2FlZcFtGp0atbbdR3JY5dDdjxNKOVzP3rfTL%2FkEkWjjF67JG%2FSwhJMXVzNNrZy4Rr43QmjWQ4qgmrSWdVnOWfzeHHOgjtccA4JwReJT2fiHMvH1sGW9zfDI%2FY5XPWtLKD0bQh2P%2BgBG9og8frUTzH6yrvUO50RHgi82RmnweGr31yHDsH7hl%2BCti0%2FQahDdSz&X-Amz-Signature=31a06d30f50d9cd02e5e0c112f79ef71209893565596f1706ec079a900691a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWHRQ6C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5wdl6rDEi%2FAbYy3LJ94BUF6vRNpz%2BYpkX3Gbbwj1RmAiAtOUqagT3PF2w%2Fw5X7Gp2MDVDwk29skq74n8lEJ6kj3yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQVvU%2BnUoMDkETzWKtwDGNYFYLXc1uhp0KyuT1MBNOm3AkYIfv4cheUtoW80HQYitXUNB4j4ie7tJFDTHRRyzonlTGJ7S2R408Mhkc3kIAdahtrOUgLzWRJjIBVJp%2FSGpiZ08Q%2BmUkp%2Ftnzm%2Fw%2FVhLveKkX8S4r00rqRLJe2lQr3SSY5bHxu3X8O1RKgUjBK3aZmLX8xgkANrlID76s3yZJ3y34b0%2BrKIAzlU4pMJuDLEi0WRGjMX9EdHG5lhBj9IEqbcxKh8VJQmWnqjBNuEI7dtBwcXZzrT211KakhUEPjc6TcQJuDP%2BdRWeEXmUswVGaPhh4BByRGzSakiyVBP5alAT9GdwzvvRqROTq4d2EwSslwnk5vjav25rLVhf2Iglz4dgBkZNf1ZaT569TpU1BSxNGLD36LmRzdGS9ibTxD7O1xFxqNCsoW1bf7duNCcCZjPwZyd0yOkV4LVgcNdwUvBJKgf6FFFol%2B%2FADhPRpeRGqL2pea4TM5qn5%2F6aBCMA%2BmrfpSzLnKzQuvDIaPAi5ucUZrHbUKMV1dzuBTGsOYJmTnEycoAavgyn3pZdmj49XGQY1gJ1eBg1KHybVJsXXOgVTjCn41%2BllGMwp64uAyoHHHFOfY1XoEQoWVdMgEWVW2fnkmqNORGwMwpOypwQY6pgGtVn%2BNzgwr3AWS%2FQYx8rVsh3Mvhhjh%2FlZcFtGp0atbbdR3JY5dDdjxNKOVzP3rfTL%2FkEkWjjF67JG%2FSwhJMXVzNNrZy4Rr43QmjWQ4qgmrSWdVnOWfzeHHOgjtccA4JwReJT2fiHMvH1sGW9zfDI%2FY5XPWtLKD0bQh2P%2BgBG9og8frUTzH6yrvUO50RHgi82RmnweGr31yHDsH7hl%2BCti0%2FQahDdSz&X-Amz-Signature=0840e203c4c0f767fcfec73ec6b6d32b7f0cb129f5961d987feb68e517931722&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWHRQ6C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5wdl6rDEi%2FAbYy3LJ94BUF6vRNpz%2BYpkX3Gbbwj1RmAiAtOUqagT3PF2w%2Fw5X7Gp2MDVDwk29skq74n8lEJ6kj3yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQVvU%2BnUoMDkETzWKtwDGNYFYLXc1uhp0KyuT1MBNOm3AkYIfv4cheUtoW80HQYitXUNB4j4ie7tJFDTHRRyzonlTGJ7S2R408Mhkc3kIAdahtrOUgLzWRJjIBVJp%2FSGpiZ08Q%2BmUkp%2Ftnzm%2Fw%2FVhLveKkX8S4r00rqRLJe2lQr3SSY5bHxu3X8O1RKgUjBK3aZmLX8xgkANrlID76s3yZJ3y34b0%2BrKIAzlU4pMJuDLEi0WRGjMX9EdHG5lhBj9IEqbcxKh8VJQmWnqjBNuEI7dtBwcXZzrT211KakhUEPjc6TcQJuDP%2BdRWeEXmUswVGaPhh4BByRGzSakiyVBP5alAT9GdwzvvRqROTq4d2EwSslwnk5vjav25rLVhf2Iglz4dgBkZNf1ZaT569TpU1BSxNGLD36LmRzdGS9ibTxD7O1xFxqNCsoW1bf7duNCcCZjPwZyd0yOkV4LVgcNdwUvBJKgf6FFFol%2B%2FADhPRpeRGqL2pea4TM5qn5%2F6aBCMA%2BmrfpSzLnKzQuvDIaPAi5ucUZrHbUKMV1dzuBTGsOYJmTnEycoAavgyn3pZdmj49XGQY1gJ1eBg1KHybVJsXXOgVTjCn41%2BllGMwp64uAyoHHHFOfY1XoEQoWVdMgEWVW2fnkmqNORGwMwpOypwQY6pgGtVn%2BNzgwr3AWS%2FQYx8rVsh3Mvhhjh%2FlZcFtGp0atbbdR3JY5dDdjxNKOVzP3rfTL%2FkEkWjjF67JG%2FSwhJMXVzNNrZy4Rr43QmjWQ4qgmrSWdVnOWfzeHHOgjtccA4JwReJT2fiHMvH1sGW9zfDI%2FY5XPWtLKD0bQh2P%2BgBG9og8frUTzH6yrvUO50RHgi82RmnweGr31yHDsH7hl%2BCti0%2FQahDdSz&X-Amz-Signature=38dc0e31d071fa117204b0f15febe1d43060e1960f515685c181d7ad919d92cc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXBW5GU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDry0LyCUjjaPmRMdGHucr1Z2NPuqJsCX0UfM64v%2FRgRQIhAJDx2tIHQkqJfl6VKlG7Xa6BuGfAUftzeP1LlY0vnR%2FdKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq1LVdn3nlTdor%2FV8q3APwdzdzMQ6CXkSBXGImiGcD8qZWT66XLejGUdP%2Bj%2FnNWgpinWONzeAsY4SBZBq4HgAXItfjHfxbIsEJLteYp3Cbg3BHksASdOsEEHlrJkSfDszFD%2FNnmLMqYOV0vlOpRwuG2GavDGMo5izww5LsOhAFYRp4FFUrmSsmGnXoXroFOHzkZAtYMbsleLZ7GzuVTe8f6Pe%2BdkC6lXhq1hK0wXdoC0Y8QeDufmdpDXacY8r1c6iaopIDjFx9%2FKPuHdhbl2DA6BNeJeox1nYrB3Uf%2Fh8%2Bt51Ivr%2FD70vZRZv%2FOTT4FEe9ek86M1gqRLa8SAACL5X%2Ff1AwnXAi%2FD3iw%2BKWAagXtzyAk%2FjJD5oHOzXPpO63WY76fs00onDGlz3x8jfbdURCXeZGn7PWarrf1tikH3dR%2F8nR35QxhmNcrVlxGGlSihDnB2oTE3IQ2rPLg5MBrNkcPNfpksBx2QJCUfBqkgW%2Bm19XYN0owt2Kf51bprIq%2BUb%2F1AsoKzEplzBsPWm8yRGmWbrRt1hTfrvqL37vMO5KeajyngJG8wfEYCUgixaF9lssRoRY72Myk2PmndGF6tL6tmmz1920wY%2BE80jWqPCHu5kdtIKkNHZ2TqVHIXY2JQSfiBTA7F28voVzfjCb7KnBBjqkAfz7ihL8aCXGeY19d8dpWLYPScuzv2p2vsHXDkhs07j5iEijESvFsKJehKTwSnkgVeX5ZCGaZxoWtD6KDu8dR%2Fby%2F10eNZO6hga15kYOp3yM3Zsu%2BXOTBA0KcfigdYzVSnkHOa9oIWY7l7Uq0btrcMe%2BgQiW1A%2F%2Bu84xnPAmDRfCR5cizKGwZyMGvr1vqAyhaEX0e2xn4Va4uGkd2zF5oWyr3vq2&X-Amz-Signature=6dfa2823cb96bf80a9a51b54e41108a0bc3c1f46222ced09627bb471f82481c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPSDO2XN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLlTAtIPEol0fooZN9Ab7DDCzldbsG7sjqcZpuHjqn5wIhANW0UVw3UbvRHuCGehw4LlF5JX3nIgOaPGTUnQbL0JozKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvPWTYa1WZK39SzAMq3ANgIrLR698tmqvhqAlqLV6pTE1Z6%2B3ZTsGdpDYNC5FQpNhN5mh8GXg6%2Fn%2BX%2BhJIOAQ%2BVZQ9M6Hs98QfM5Wo8G8OSiK6ritfM7CWWTJML9NHWWNW1uz6ee5RmncuZGOowEt3DLyVH2vnaSnUv5vXDrqZ%2FJ6PBxnlf2rPN%2BDc%2FeRQ65sIzZZwH4eaQHnXttTXK77%2FJQS9MnFaiSNorkcYbhRiMKKXJdhGZ6Yj5WVF%2F3kXcILFlM12vrCeNBXSmXoczBrpDJS3L44Z77GfpE%2BoeEBCe48hHa50ZvwstDGESBFl8brl2qsjWu8bdelVrGgjskhzC1w67Ag%2BafBOZkAJCDxkLkffD%2F4S8CGR7EWyr4eeVDlh%2FbWNxK8x1EymoazXs3n6ROPXxwAVrONi6mQmIUhH6%2BGA5oSk5c%2B0JG5S1NM2GsMd4C8T0mWD5z%2B8avZj9A7ENU%2BIJ6K06PJJLxTPoFSVyK%2FSX9E3tzEDzFCXO6OHgUOAqrXR%2Fpk0gR8fBGQ4zttu3NUvq9zUp%2B0PmDLSHgrtygIaiN%2B5D3M76%2FY3uCpZkG6Z%2BY1MuUKtLIqIK2Noc8mUW3LOP9IanfvZjR6Kvtfzgh3hIqb61psvvyieCkA17lQQC7aQAifEthZ4OTC57KnBBjqkAewUZGxnkKjNQeVzq1Pr0gOdBPytekq7Gc0i3wQaFrbXF1a4aidLXQrNdsh7fnefDKT%2FuXxlR4HWCPWusqCU3XFnitXaanUZReXbYw7uw22og40lYwffYT321YxR2KuZE%2FUroFwlMjtXw4ezP%2F36MU4tRuo37rX3%2F2mtcF9XpbTbNrIfP0sBZt8xyfAykmmsKJYoSTp5cpiEIpa%2Bu17Vm1Ckgs7a&X-Amz-Signature=7eb118483b72a1a29153ec24a3551ce8ad59226ded6aa8ca50279ab586ac8a32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWHRQ6C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5wdl6rDEi%2FAbYy3LJ94BUF6vRNpz%2BYpkX3Gbbwj1RmAiAtOUqagT3PF2w%2Fw5X7Gp2MDVDwk29skq74n8lEJ6kj3yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiQVvU%2BnUoMDkETzWKtwDGNYFYLXc1uhp0KyuT1MBNOm3AkYIfv4cheUtoW80HQYitXUNB4j4ie7tJFDTHRRyzonlTGJ7S2R408Mhkc3kIAdahtrOUgLzWRJjIBVJp%2FSGpiZ08Q%2BmUkp%2Ftnzm%2Fw%2FVhLveKkX8S4r00rqRLJe2lQr3SSY5bHxu3X8O1RKgUjBK3aZmLX8xgkANrlID76s3yZJ3y34b0%2BrKIAzlU4pMJuDLEi0WRGjMX9EdHG5lhBj9IEqbcxKh8VJQmWnqjBNuEI7dtBwcXZzrT211KakhUEPjc6TcQJuDP%2BdRWeEXmUswVGaPhh4BByRGzSakiyVBP5alAT9GdwzvvRqROTq4d2EwSslwnk5vjav25rLVhf2Iglz4dgBkZNf1ZaT569TpU1BSxNGLD36LmRzdGS9ibTxD7O1xFxqNCsoW1bf7duNCcCZjPwZyd0yOkV4LVgcNdwUvBJKgf6FFFol%2B%2FADhPRpeRGqL2pea4TM5qn5%2F6aBCMA%2BmrfpSzLnKzQuvDIaPAi5ucUZrHbUKMV1dzuBTGsOYJmTnEycoAavgyn3pZdmj49XGQY1gJ1eBg1KHybVJsXXOgVTjCn41%2BllGMwp64uAyoHHHFOfY1XoEQoWVdMgEWVW2fnkmqNORGwMwpOypwQY6pgGtVn%2BNzgwr3AWS%2FQYx8rVsh3Mvhhjh%2FlZcFtGp0atbbdR3JY5dDdjxNKOVzP3rfTL%2FkEkWjjF67JG%2FSwhJMXVzNNrZy4Rr43QmjWQ4qgmrSWdVnOWfzeHHOgjtccA4JwReJT2fiHMvH1sGW9zfDI%2FY5XPWtLKD0bQh2P%2BgBG9og8frUTzH6yrvUO50RHgi82RmnweGr31yHDsH7hl%2BCti0%2FQahDdSz&X-Amz-Signature=4f9a5f5f6681d0f60db317686cebb130e8d4b3faa524805284070dadc76af9c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
