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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMML7FAX%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZzjuj3Ba03e%2FPBmrVt4RpLoI5ZwOj4As2%2FJvZ4AmR4AiAbzTcJ7djaBotxaM%2BP%2BaKpeIwCyQYvggduttckncvjdir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMelJKTSp3p5jHq0S5KtwDAM1SXWTumCRejrvV34bfk1y1kX80t9asJbB2uVBxVPjzS7syhv1xD%2BsVBYkgBTCOQEIxmMlDlH6ny3UOL%2FXT7yCIuW9tQI8wJTGWVvC%2B2kK9xZDu4SUti6in60gHbDgBU3vzBvZGKHniMcmHnBUT06N5xvPC9GKwtvTAcDmr084wdIWdUHP%2FqLOo3zlUBn%2B85raVFmntHrN7hVK2a9cb4jfJDjYhKC7yqiljt9NXzcKNa3VzLd2O80uFskuj8id2mza%2B%2FiTkA%2BXfkGOJ3H3hL5efNnVmQF6HJYsRnIOKUyyJUoGnUg7MXHp%2BGgR4%2Bju89Cg9fiY5REEGK7jhLmIybys1EIgtgGcyCX4hfjVEv32FnVfN3Q63g4RbwqX6v%2FvLvHnGISW1JyrmYXEgoK2zOd1jO2XO1QZGuzlNh9RRiW7oqD6DUoYVdS0DzVBRFjJXQ%2BcEXdINfgOIJd5nSzk1%2BljSzX9u4SVCpuTjun1K62v9eOJx6s7XNfinJSg%2FLQXgCs3OKZ%2F67A68aWXHljdfQ0j%2FD1hkkVFAyrwU4PE1krzOiEXL9qhFbzw1vEZU9CAKv7fTVfEqfZKteKMCV1Mv8RFcclTv5pSlTR0ekLriAoDAurB1%2FsEkAMp0Ai0w1baiwQY6pgGE%2BgnIkJopEiiZNl8DP%2BR%2FVvLiviix8QVcVpXR0UfheOIzfdvT8lxQ9Jc1BejAs8aZvb0yivRAlYMU1b9bam6N9PKgCGyXgdusWujbiRzxhcs63hXCFpOxXveDGgYJcG7rpgiziHsvb8QwsVnx0oCp%2Bue0RK0UtEEvoGtuomXFK8kKhSxPZeRAb6hSePdUkbRNwUMLXBQBDnxbMogyVlOr0X8OuDzY&X-Amz-Signature=7b412fab3f8c525f6163548fee2e6400b568fd95fa39b116485af4b272cd4387&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMML7FAX%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZzjuj3Ba03e%2FPBmrVt4RpLoI5ZwOj4As2%2FJvZ4AmR4AiAbzTcJ7djaBotxaM%2BP%2BaKpeIwCyQYvggduttckncvjdir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMelJKTSp3p5jHq0S5KtwDAM1SXWTumCRejrvV34bfk1y1kX80t9asJbB2uVBxVPjzS7syhv1xD%2BsVBYkgBTCOQEIxmMlDlH6ny3UOL%2FXT7yCIuW9tQI8wJTGWVvC%2B2kK9xZDu4SUti6in60gHbDgBU3vzBvZGKHniMcmHnBUT06N5xvPC9GKwtvTAcDmr084wdIWdUHP%2FqLOo3zlUBn%2B85raVFmntHrN7hVK2a9cb4jfJDjYhKC7yqiljt9NXzcKNa3VzLd2O80uFskuj8id2mza%2B%2FiTkA%2BXfkGOJ3H3hL5efNnVmQF6HJYsRnIOKUyyJUoGnUg7MXHp%2BGgR4%2Bju89Cg9fiY5REEGK7jhLmIybys1EIgtgGcyCX4hfjVEv32FnVfN3Q63g4RbwqX6v%2FvLvHnGISW1JyrmYXEgoK2zOd1jO2XO1QZGuzlNh9RRiW7oqD6DUoYVdS0DzVBRFjJXQ%2BcEXdINfgOIJd5nSzk1%2BljSzX9u4SVCpuTjun1K62v9eOJx6s7XNfinJSg%2FLQXgCs3OKZ%2F67A68aWXHljdfQ0j%2FD1hkkVFAyrwU4PE1krzOiEXL9qhFbzw1vEZU9CAKv7fTVfEqfZKteKMCV1Mv8RFcclTv5pSlTR0ekLriAoDAurB1%2FsEkAMp0Ai0w1baiwQY6pgGE%2BgnIkJopEiiZNl8DP%2BR%2FVvLiviix8QVcVpXR0UfheOIzfdvT8lxQ9Jc1BejAs8aZvb0yivRAlYMU1b9bam6N9PKgCGyXgdusWujbiRzxhcs63hXCFpOxXveDGgYJcG7rpgiziHsvb8QwsVnx0oCp%2Bue0RK0UtEEvoGtuomXFK8kKhSxPZeRAb6hSePdUkbRNwUMLXBQBDnxbMogyVlOr0X8OuDzY&X-Amz-Signature=17f9d48e9b4721fde84f6eb4c5929abaed778bb1d98ebdf8e7aef9ee17c3f0d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMML7FAX%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZzjuj3Ba03e%2FPBmrVt4RpLoI5ZwOj4As2%2FJvZ4AmR4AiAbzTcJ7djaBotxaM%2BP%2BaKpeIwCyQYvggduttckncvjdir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMelJKTSp3p5jHq0S5KtwDAM1SXWTumCRejrvV34bfk1y1kX80t9asJbB2uVBxVPjzS7syhv1xD%2BsVBYkgBTCOQEIxmMlDlH6ny3UOL%2FXT7yCIuW9tQI8wJTGWVvC%2B2kK9xZDu4SUti6in60gHbDgBU3vzBvZGKHniMcmHnBUT06N5xvPC9GKwtvTAcDmr084wdIWdUHP%2FqLOo3zlUBn%2B85raVFmntHrN7hVK2a9cb4jfJDjYhKC7yqiljt9NXzcKNa3VzLd2O80uFskuj8id2mza%2B%2FiTkA%2BXfkGOJ3H3hL5efNnVmQF6HJYsRnIOKUyyJUoGnUg7MXHp%2BGgR4%2Bju89Cg9fiY5REEGK7jhLmIybys1EIgtgGcyCX4hfjVEv32FnVfN3Q63g4RbwqX6v%2FvLvHnGISW1JyrmYXEgoK2zOd1jO2XO1QZGuzlNh9RRiW7oqD6DUoYVdS0DzVBRFjJXQ%2BcEXdINfgOIJd5nSzk1%2BljSzX9u4SVCpuTjun1K62v9eOJx6s7XNfinJSg%2FLQXgCs3OKZ%2F67A68aWXHljdfQ0j%2FD1hkkVFAyrwU4PE1krzOiEXL9qhFbzw1vEZU9CAKv7fTVfEqfZKteKMCV1Mv8RFcclTv5pSlTR0ekLriAoDAurB1%2FsEkAMp0Ai0w1baiwQY6pgGE%2BgnIkJopEiiZNl8DP%2BR%2FVvLiviix8QVcVpXR0UfheOIzfdvT8lxQ9Jc1BejAs8aZvb0yivRAlYMU1b9bam6N9PKgCGyXgdusWujbiRzxhcs63hXCFpOxXveDGgYJcG7rpgiziHsvb8QwsVnx0oCp%2Bue0RK0UtEEvoGtuomXFK8kKhSxPZeRAb6hSePdUkbRNwUMLXBQBDnxbMogyVlOr0X8OuDzY&X-Amz-Signature=e69ec3f39516cd8118128158bc2545ac68797d4582815eb79af99ff4f007b7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DL45VUQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC36e5oHTDMdYBjvygYSm%2FvuEwHBrCzQ0xtF0%2B%2BYYYKQIhAJyWJkaXNf6FhURvSjK4fnlOywe7bHfu6iw56x3VZWGAKv8DCGIQABoMNjM3NDIzMTgzODA1Igx2X1UozQUabCr1r3kq3ANSq%2FtXqp1EZlDEsZP5emINhBSTc%2BkE9%2FdZvr3qvoj3vT8qurGY4YqHwFpOffOtPvaVaOqqVn2VsqTC24RteFYpsMKSdsd7dq2jzdcGGeUYxLfL3ZlzOlhmBCF%2FGpLGphljcLcHDNv1NI%2FUZQMxFtypvtnKgY4B%2BHZQXMo%2BmGhtGRTIFB6%2FUaYvxkct9xbBUIP7hYvkAsbzfrvbCwgagdSS%2BNdeMFwa931U7oEBbnqbYQNrFUasUP9BNigBwvU%2Fhh3Jcww7HAkZ%2B%2Fb3rv2G5yUaQ7YnHHA6eLI6ukcF%2BhVMxlo6853%2FJiAO8V8XOXCLtQiEWB8CAqhWrm9bjO2Ks339qa1NX3dzx3MKmzt6lFiffhNtiJqMR9u%2BoEzBCcJtiecud%2FBp3LQ2aUbm1MMlZCOJOa4mKVVMPyHi9jG96jcIxVoHbjb2cahZU5xCl3dgbhgIDb2tH1I%2FG4tc%2F6fXarojmVq3WseQIxOOoKbCjU7ArxdTsxI3rFh4dS73IcMhBVYoOMQ7CDVTLEeAyiUFnmWB3cb67BCxZw6AgzL6jGX61FGJPbB4s6ExAXJRxCMu5muDAmZP1Mj9AtzcfG5lakyp5rsqlrLzA78SYSUAgsIabvnr1go%2BUmDRiQrA%2BTDe8KLBBjqkAV3WxQ%2BVuss2gsKnbSgMlQjucldR0mS8EXMTL34OQ%2BuItKomb94ZFHy5G9POjbijmCR%2BJGPtRBEwoJ%2BSLvE2e4SfmnccBIz4uY20TvodA5qtWc8hQaF7c94YyhyUSmtcBpXGA3WR9QbJvGpqI6kGwOV1eAI1pozB3OKTjEeY1BO2GnFZe5XPtbKPwP5hUm3ctiqJ%2BByh5bsVpff0PmeQwmv78cHq&X-Amz-Signature=46db75bd1013b7449b8745707a7844ccd3e2d0fb56dc8bb6481d28ad22029179&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QPUTCWZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUDrX%2BzY%2B%2FRVyfIyNBPJurKzaz4qg34TvboKRplVnjaAIhAKeD0I%2B%2BaGW78zt3Cts5fvaUYLzPgu6zfHugEQoPvZvUKv8DCF8QABoMNjM3NDIzMTgzODA1Igzf4zvjPNIoRy02suUq3AMZLM3HGWNtadf5Z7iPLNs5tlPmCAxpzzVVJO7wzv%2BYf2p%2BeYygxllEDAXK3lN4G9iK47wevhM4uRYwncVDNUZmYU5GghxGYIiamBvQ%2FET9suC4yJZjwtzsj43OdFBUCp0uzE6z4DG%2BzIpiZhk4oIWlwMLKoTWxL%2FJBZ2xdpro0dwBeaFEZLGrKvIW0uiojFQhCLyBQocw0qOc%2B7LeIYsMUrU%2FKu3U2eT54gMv2N%2BnR1wWZFefBpT23TJaehtpeDcFHtXrA3fWeouFfpjMH5CI0cth%2BEszA%2Fn6Wrsp6A06OSNoMFzPDchCUmSutVmEIO8nRq%2FMQCP3a%2FhmGA3w0YinuezddK0ajW%2Bd7uF5Ka0KvFBUuo8cLmxXnX1LW4PFcWyfiv9nB1N2HyJSktjJMH9mTLzZc4mklBIft8y8TAnvaorVgMOLz%2Bu1yrFcN1rc2Pm8Eg%2F0PYMl38LqJ9LZjW87fmi15pEb8Y2QZcI%2FdJ%2FDQhgLq0vJda3ETxm9VnN7JpcVe7eCIEJFTvPRgAQAnsFqp9Ya6XAz9mSIVVCA1ZicFjwvrwv%2BQg9NLOK2wrqjJXXrLAxDdNL3SD2Em9pliq15WCar3hYuEqDOqVTal2OrDe7Ztiqkqm3F9P4wPjTD6tqLBBjqkAQ16rSztMjhGOe9A%2B8MJMtzKbDKpzwmdOhYJodVs%2FtPWW%2B%2FGSV7axqv7cjl9cKszNu9a6lX%2B8oFiLrPZAEiIaID%2FU2m%2FBjoFTgzzO34hI1ZeOGlM0dadC43Fv9vF72%2F%2Fh1SA2dFixcfKX0ZP45dQjAir9uxSrN1%2BmkdJq0gllPPg7njTX0%2FQ7Tcc%2BE%2BIr2YVCnKL1zffPAtNHdFzaO4jor1HPZWH&X-Amz-Signature=75fa422779d166630eb22a6bf7e8deffde598cef5e09ad017742c6780409dac8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMML7FAX%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T170143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZzjuj3Ba03e%2FPBmrVt4RpLoI5ZwOj4As2%2FJvZ4AmR4AiAbzTcJ7djaBotxaM%2BP%2BaKpeIwCyQYvggduttckncvjdir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMelJKTSp3p5jHq0S5KtwDAM1SXWTumCRejrvV34bfk1y1kX80t9asJbB2uVBxVPjzS7syhv1xD%2BsVBYkgBTCOQEIxmMlDlH6ny3UOL%2FXT7yCIuW9tQI8wJTGWVvC%2B2kK9xZDu4SUti6in60gHbDgBU3vzBvZGKHniMcmHnBUT06N5xvPC9GKwtvTAcDmr084wdIWdUHP%2FqLOo3zlUBn%2B85raVFmntHrN7hVK2a9cb4jfJDjYhKC7yqiljt9NXzcKNa3VzLd2O80uFskuj8id2mza%2B%2FiTkA%2BXfkGOJ3H3hL5efNnVmQF6HJYsRnIOKUyyJUoGnUg7MXHp%2BGgR4%2Bju89Cg9fiY5REEGK7jhLmIybys1EIgtgGcyCX4hfjVEv32FnVfN3Q63g4RbwqX6v%2FvLvHnGISW1JyrmYXEgoK2zOd1jO2XO1QZGuzlNh9RRiW7oqD6DUoYVdS0DzVBRFjJXQ%2BcEXdINfgOIJd5nSzk1%2BljSzX9u4SVCpuTjun1K62v9eOJx6s7XNfinJSg%2FLQXgCs3OKZ%2F67A68aWXHljdfQ0j%2FD1hkkVFAyrwU4PE1krzOiEXL9qhFbzw1vEZU9CAKv7fTVfEqfZKteKMCV1Mv8RFcclTv5pSlTR0ekLriAoDAurB1%2FsEkAMp0Ai0w1baiwQY6pgGE%2BgnIkJopEiiZNl8DP%2BR%2FVvLiviix8QVcVpXR0UfheOIzfdvT8lxQ9Jc1BejAs8aZvb0yivRAlYMU1b9bam6N9PKgCGyXgdusWujbiRzxhcs63hXCFpOxXveDGgYJcG7rpgiziHsvb8QwsVnx0oCp%2Bue0RK0UtEEvoGtuomXFK8kKhSxPZeRAb6hSePdUkbRNwUMLXBQBDnxbMogyVlOr0X8OuDzY&X-Amz-Signature=970a3daea84e0e93ebfa6129e3ee3cf6f9e2fc98929c0462237ccb75ed6a8536&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
