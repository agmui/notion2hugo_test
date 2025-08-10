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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647GLJ4AT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbYGtltmoAdTK2UE4RsQASdygJYDmsLIY2hH8J30JpRAIhAOai1heI3GVR9FeNp6DMVZNdvP3NGYrTcstgVzcYjDekKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiaIJVlf82KWdof8wq3AP2E5Mr8lxA%2B4fdyxXMItO3uVU8hZdKzpWKso0citBSVcud0p1olXTbnhTs4On9%2FU9UogL0cBw%2FeuxVwG65FTAdUxCv1ZvtjkNDXJtPVC3XexuYub%2Fl4wpQPFL919hwtRLX98vtlXJ9Y522NHqpa7CExMWq%2F6WSCyF%2FjEMR4IGKz0%2Bzc8WCkK4YsFyqUx6GcNITt%2BsHEluR%2FJzEmKD%2FmE0%2BKa3tcJRyqAiZja7xQukD8%2Bpm0y1h0m6%2B8QxRppj7yhugrepYs5t%2BCfvt3QgsvgVC5hNRQdc70%2BPcj98iOCJC91TqJXZxh3CJJBAr2xGYo5H94h0qb88uy0%2BqImi7Ev30wOO2Fbb0c3C0laNXQx%2F4Ge5Pi5hUdN%2BPrx1fWqkNh%2BwT203gRJudfYIAOTdk%2FzfccQpBj8Rj7owkHi067thRnGYMhW082oKA753Mrsrj8AVZ7V83YdeWH1i6SV5o9twt51HWv4J4iD01hK76mCg9X4EIX5cPtnfYwGr1utAYSRrygPOeSbuLZ%2BQ8Vnyzd%2BjTCcP66hIklpoqzCVU%2BtaYvdbgyc3vS6T26nBpujEAWAMtb%2FGIzA6Lv%2Bnm%2B0Ond6SdUpdnL7JWKR6LQdPJycedHTA0R0POaHPB7a%2BzBDDHv%2BLEBjqkAQQBSMFETiBjJlK4gqgovZDT7qpSD0UkWLn5rf0j7JowfWjbF%2BKk21NdijK5%2FXWzSx%2F7QqLjDh69oZqbQ8u%2FkLUXgaD7FF0gKceTYD7c7ed8mRKtZp%2F0TX12Y%2B8myi4Z%2FlAAkqw3G%2BrUrrZBW8jHRN5tV7to9v2XpAN8CesPEB7Trg249KRwGGj%2BnAuW%2BbVFKQhUhmHmRJJrbE2izQYyBY2oUqc2&X-Amz-Signature=02821645745757f92c5ee8bb9a3290cacc483e85e5c9be60c28d1f3addddac6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647GLJ4AT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbYGtltmoAdTK2UE4RsQASdygJYDmsLIY2hH8J30JpRAIhAOai1heI3GVR9FeNp6DMVZNdvP3NGYrTcstgVzcYjDekKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiaIJVlf82KWdof8wq3AP2E5Mr8lxA%2B4fdyxXMItO3uVU8hZdKzpWKso0citBSVcud0p1olXTbnhTs4On9%2FU9UogL0cBw%2FeuxVwG65FTAdUxCv1ZvtjkNDXJtPVC3XexuYub%2Fl4wpQPFL919hwtRLX98vtlXJ9Y522NHqpa7CExMWq%2F6WSCyF%2FjEMR4IGKz0%2Bzc8WCkK4YsFyqUx6GcNITt%2BsHEluR%2FJzEmKD%2FmE0%2BKa3tcJRyqAiZja7xQukD8%2Bpm0y1h0m6%2B8QxRppj7yhugrepYs5t%2BCfvt3QgsvgVC5hNRQdc70%2BPcj98iOCJC91TqJXZxh3CJJBAr2xGYo5H94h0qb88uy0%2BqImi7Ev30wOO2Fbb0c3C0laNXQx%2F4Ge5Pi5hUdN%2BPrx1fWqkNh%2BwT203gRJudfYIAOTdk%2FzfccQpBj8Rj7owkHi067thRnGYMhW082oKA753Mrsrj8AVZ7V83YdeWH1i6SV5o9twt51HWv4J4iD01hK76mCg9X4EIX5cPtnfYwGr1utAYSRrygPOeSbuLZ%2BQ8Vnyzd%2BjTCcP66hIklpoqzCVU%2BtaYvdbgyc3vS6T26nBpujEAWAMtb%2FGIzA6Lv%2Bnm%2B0Ond6SdUpdnL7JWKR6LQdPJycedHTA0R0POaHPB7a%2BzBDDHv%2BLEBjqkAQQBSMFETiBjJlK4gqgovZDT7qpSD0UkWLn5rf0j7JowfWjbF%2BKk21NdijK5%2FXWzSx%2F7QqLjDh69oZqbQ8u%2FkLUXgaD7FF0gKceTYD7c7ed8mRKtZp%2F0TX12Y%2B8myi4Z%2FlAAkqw3G%2BrUrrZBW8jHRN5tV7to9v2XpAN8CesPEB7Trg249KRwGGj%2BnAuW%2BbVFKQhUhmHmRJJrbE2izQYyBY2oUqc2&X-Amz-Signature=b6cb00036490735574d528b1f9982a185ec5bc6ee3094f47a36c5897bf99fc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647GLJ4AT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbYGtltmoAdTK2UE4RsQASdygJYDmsLIY2hH8J30JpRAIhAOai1heI3GVR9FeNp6DMVZNdvP3NGYrTcstgVzcYjDekKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiaIJVlf82KWdof8wq3AP2E5Mr8lxA%2B4fdyxXMItO3uVU8hZdKzpWKso0citBSVcud0p1olXTbnhTs4On9%2FU9UogL0cBw%2FeuxVwG65FTAdUxCv1ZvtjkNDXJtPVC3XexuYub%2Fl4wpQPFL919hwtRLX98vtlXJ9Y522NHqpa7CExMWq%2F6WSCyF%2FjEMR4IGKz0%2Bzc8WCkK4YsFyqUx6GcNITt%2BsHEluR%2FJzEmKD%2FmE0%2BKa3tcJRyqAiZja7xQukD8%2Bpm0y1h0m6%2B8QxRppj7yhugrepYs5t%2BCfvt3QgsvgVC5hNRQdc70%2BPcj98iOCJC91TqJXZxh3CJJBAr2xGYo5H94h0qb88uy0%2BqImi7Ev30wOO2Fbb0c3C0laNXQx%2F4Ge5Pi5hUdN%2BPrx1fWqkNh%2BwT203gRJudfYIAOTdk%2FzfccQpBj8Rj7owkHi067thRnGYMhW082oKA753Mrsrj8AVZ7V83YdeWH1i6SV5o9twt51HWv4J4iD01hK76mCg9X4EIX5cPtnfYwGr1utAYSRrygPOeSbuLZ%2BQ8Vnyzd%2BjTCcP66hIklpoqzCVU%2BtaYvdbgyc3vS6T26nBpujEAWAMtb%2FGIzA6Lv%2Bnm%2B0Ond6SdUpdnL7JWKR6LQdPJycedHTA0R0POaHPB7a%2BzBDDHv%2BLEBjqkAQQBSMFETiBjJlK4gqgovZDT7qpSD0UkWLn5rf0j7JowfWjbF%2BKk21NdijK5%2FXWzSx%2F7QqLjDh69oZqbQ8u%2FkLUXgaD7FF0gKceTYD7c7ed8mRKtZp%2F0TX12Y%2B8myi4Z%2FlAAkqw3G%2BrUrrZBW8jHRN5tV7to9v2XpAN8CesPEB7Trg249KRwGGj%2BnAuW%2BbVFKQhUhmHmRJJrbE2izQYyBY2oUqc2&X-Amz-Signature=532b664cebaad0086bb350d1926d0d14586e281d278ba8c8cd10e32d282e1cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MP4PPHJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJxTnzT4eH8lIcLkn%2BCbDZtM0uCLC3ZN9E5KqW%2B%2FM0dAiA9%2B9PMiu%2Bgz13IzMBo9HGgk1Xdz8vNHXkpsvobjTMj2CqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzu8Zs1KJV42HBylNKtwDUlzXun5WLw%2F4GQD22BtPOWCoR7BhvrnRGjVxZbdTnMX9Hs2tc56hQ2i3NZ%2FtyvnyeiRQHcRZ5CvjjUUvfA0X9WI4fNTU0tChZbIRUtc2aAkZw9Gw0xhlPKgW5LZmeNlGFnHlkCHJmn3A0ZeQCuCDXfXjywUrBrhIzFyCwQMnYTqh2xFZ6Y1GOKD4FCfDso7qHp7V6Da4yrLy6RgtNwzM44ujhWkQJHvMiha3JB%2FAt6h8Qoh%2BOfM46ONc%2BVjxDsKY8W33E0Fg0hFMtmnhXbiCN1tlnrpSd1hU3CY%2FRikw2InutjauAP%2BiOI8uMJ5A7rvbLbygd5Hyscg7esuu5oenYuyHOjia5y%2BBTIylHh9U5Nr8DEOA5%2FUKc23YwwmxGfopA0TJefRQGSzBMLpkbAYGmwxHoJDAaAHgJHaYkulpdcbSdJh3fCh3TMBJZllWYWI6rapl50%2Fo7KTmMmf2VZCZKRjQkNM50Ye%2F1iACOkNcdjRxmjeh4mnNtVn7kLuV591DlwX0GNa0xsaH5nBniiV2qiqczQ%2FPtpPPzSwzgnRCsIhYAITYfseZuTva1nJpM8amvR70y9tQUf%2BHXhiCcUvk9GwEsOIA1Ju9X%2FUyTc6AV0EvnTCLSOsWht6JSWkwr7%2FixAY6pgHv52oqohPp94dw1RiPcdhXYYP8%2FsgiQd%2FDhKy3jmyPUhC6R6GPGx6qlDZd9rilF51SXeNgk2xppgvA0HsMe6E4EqRVnA%2B2hPtytMKMw6KDqJ0EsIwTLkjh2jL4%2FqF%2FgSldFuYGyThYQeRlvWKvxbAsocSH3yKFCwWoscu%2B1ztnUrM99IjslGroo6nkenQleCUkewJ8ErArW%2FRIzgofvaTnd5ovnf6V&X-Amz-Signature=b7edfca17c7a943584ea87e0be39ea42b7701b9debca1872bf5a541bc047ee1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDNM5M3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJvhUceLiZ3k%2BySyXNW0BUQhzyLCBiYjyfD3jbcy4o0AiAYrtAfa%2BsuLz2s2LgaApqwCrMEn7t04xV1Tn59zGQ64iqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUvAeaeIH6aMYSpjaKtwD2o%2FDbe%2FZFjQRRnO3Gt7z3Y6PJYfxnSzCOmT2ly%2FVLN4coG40vmX6DXL8CCgKzpXExA1wPyYLe7JJbl2iRhcLj1%2FeF2c6UB72263uPHjr6ua35vEK5SRntdhe3on8nS9dDHZ8Fn3kKhQOtw5Fogd1vty97Q73fFv9M%2BjDz3cX3um0xvcVCN%2B1HREPB3ZzbOJ62Ih6LOW7iRXx%2FrbHBBiHXHlDKVnBovNNbf4qW4u2YkTFMkoEvuHqksembOOpD2uIL32u7dr3tdl6JNi3xd1zXGjhSgJQUL%2FUB7Hoy%2FWXIDOV6zbNTsXmsWHwQAkRlvz9Kppx3RWUa2707kWSiFgoXITiwNOlVe%2FiRRZR8pR43mEiSGv%2FMTyraTSvS6KtJWeLo40EmAXu3g4058E0HTbzSJME1tVwS57WmY4%2FBE3xa9wMFNQNaAU44SwM2ABZpqV%2FqWqoyANdUHy8cWvk%2Bs0vAU%2BH8pr4hDI1uJXV1ngYDIQMN2SpE0bv0Z4eu4IB2FuuQeEso0rKlXqWo7jGWSMLVAZx%2BL%2Bber0gXLOu1fn3eoJAMcA9AHvKY0UlQUpZfAyQ6Y7aa7R3g%2FzMkFdnM50T%2Fk4CV2lE8hRGJunxxkTqPgXzEOY%2B4GPJ3mh9FBIww7%2FixAY6pgGcfWqG83LWva2gYPU2ng8n3JyzFeRNl9jYYoYJGVukJde2oiwO4C1ZDpMFkYYyH1yw0hRzlDHUiGjXQJw11eAXR1QbgJqma%2FLi%2FuyeGbLu%2BtHrQDRt0Wrj%2F5rx3Ggcpu5KskCyicDHpa4ZbnxBDfqZpyGRxLKuqEmHrMOZzhBmAIumS%2BxetY7SnjM0dNQmOoDGPY8FgkDl28GS0TWqdOHlAtalCdKe&X-Amz-Signature=2f274770d592463f73b15cc592a73147ec3d0744f597bf64c05150626213cddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647GLJ4AT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbYGtltmoAdTK2UE4RsQASdygJYDmsLIY2hH8J30JpRAIhAOai1heI3GVR9FeNp6DMVZNdvP3NGYrTcstgVzcYjDekKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiaIJVlf82KWdof8wq3AP2E5Mr8lxA%2B4fdyxXMItO3uVU8hZdKzpWKso0citBSVcud0p1olXTbnhTs4On9%2FU9UogL0cBw%2FeuxVwG65FTAdUxCv1ZvtjkNDXJtPVC3XexuYub%2Fl4wpQPFL919hwtRLX98vtlXJ9Y522NHqpa7CExMWq%2F6WSCyF%2FjEMR4IGKz0%2Bzc8WCkK4YsFyqUx6GcNITt%2BsHEluR%2FJzEmKD%2FmE0%2BKa3tcJRyqAiZja7xQukD8%2Bpm0y1h0m6%2B8QxRppj7yhugrepYs5t%2BCfvt3QgsvgVC5hNRQdc70%2BPcj98iOCJC91TqJXZxh3CJJBAr2xGYo5H94h0qb88uy0%2BqImi7Ev30wOO2Fbb0c3C0laNXQx%2F4Ge5Pi5hUdN%2BPrx1fWqkNh%2BwT203gRJudfYIAOTdk%2FzfccQpBj8Rj7owkHi067thRnGYMhW082oKA753Mrsrj8AVZ7V83YdeWH1i6SV5o9twt51HWv4J4iD01hK76mCg9X4EIX5cPtnfYwGr1utAYSRrygPOeSbuLZ%2BQ8Vnyzd%2BjTCcP66hIklpoqzCVU%2BtaYvdbgyc3vS6T26nBpujEAWAMtb%2FGIzA6Lv%2Bnm%2B0Ond6SdUpdnL7JWKR6LQdPJycedHTA0R0POaHPB7a%2BzBDDHv%2BLEBjqkAQQBSMFETiBjJlK4gqgovZDT7qpSD0UkWLn5rf0j7JowfWjbF%2BKk21NdijK5%2FXWzSx%2F7QqLjDh69oZqbQ8u%2FkLUXgaD7FF0gKceTYD7c7ed8mRKtZp%2F0TX12Y%2B8myi4Z%2FlAAkqw3G%2BrUrrZBW8jHRN5tV7to9v2XpAN8CesPEB7Trg249KRwGGj%2BnAuW%2BbVFKQhUhmHmRJJrbE2izQYyBY2oUqc2&X-Amz-Signature=158a8d16e05ae2987932476733337e8809acb242f5d875edcffd2997f655bf9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
