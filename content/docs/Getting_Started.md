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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHLXQYP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEVGS13sV90kz3D4D2uxSVH0QSWdo5zU6eME3AUwprNpAiBOIYxmBD4Rvd1WtGkh9a%2BbW8EjWs9vYHuX24%2BRTxxPyir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMktGnir6rC830d3qkKtwDhJ%2B19cENJqdmgI5HU450P0bkWsAzbgF6GwCrk%2BChgH%2Fb1MuAfrwsf7YLbyDykb7gsVNh0mg8jaYi%2BPDsVu6y3Y25to7t0%2B8NSXMBVqUhK4ReCu%2B%2F9elzrTvkOYsccp0gnX25Jlyrghg3CHbHIMvQc5hqcsrMcv3%2FVzd1L%2F2s4On%2BMCDYgs5ntmJfOC1QAS53Xa32jRfMV3B0VeRagq6fBaifqXi3b7qivBEYhZh1PqLFfGJptwgG1J6cf7jQqVLmyAO1YF4TsuLmw4IQLOeu2jvOpOzB1gU3YxD5IeAw9e0Tryu9uqKfpqgycmNE%2Bg%2B5UsaqcA1CuMSm%2FunugBJIjV8mEgiZ6uvWTyCAWNlLvKjR%2FnXt8ioWJAIdqLWHqhIcocgfbGKqtPm00AFLOAYeaonRIQ5n82aKv96e83tURyN2vFPVZxveiR3sz%2Fca%2FsfM26PYtTNni9HoCuVMZv8VoymvTDqFJzSbH8aH%2BmmH65oR0mv8J1i8KwNyRQuxte7Vt%2FDFsbgOdwrg7wzfGZtyMCkNzzexmS58JqQQt7eqZUGL9gwAFWPADPY5lZ%2BXT0c0tiW%2FiUvt8zXL5NdUQcxxbuqrfq1QPTNRKs7%2BL466LP%2Bhu0yOwjm40VMTVTwwoobdwAY6pgFySLHyjHjXRMtLyscI0CvW8hnUbY5Fg7FxulmsORd0esGsD%2Fk2FtfjEHBkxV6e870FmW7Z7L2KElEBI4HyneoIBKoDxtaXlGHLkY5vvS0ojgflJWbVtQqjiJUVJFRQb4O1%2B6aqbyipTjN9LcSIEqv2sOYaHxHZztCXADXTbhk6tt4Rs7ZmtRICLyvMy%2FBxFGsCyng601I891IymaUmq4gvtkn3x4yr&X-Amz-Signature=7039518889be70247d3fd6022ff531078ad068f9b5d225ce9844de24cddc2754&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHLXQYP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEVGS13sV90kz3D4D2uxSVH0QSWdo5zU6eME3AUwprNpAiBOIYxmBD4Rvd1WtGkh9a%2BbW8EjWs9vYHuX24%2BRTxxPyir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMktGnir6rC830d3qkKtwDhJ%2B19cENJqdmgI5HU450P0bkWsAzbgF6GwCrk%2BChgH%2Fb1MuAfrwsf7YLbyDykb7gsVNh0mg8jaYi%2BPDsVu6y3Y25to7t0%2B8NSXMBVqUhK4ReCu%2B%2F9elzrTvkOYsccp0gnX25Jlyrghg3CHbHIMvQc5hqcsrMcv3%2FVzd1L%2F2s4On%2BMCDYgs5ntmJfOC1QAS53Xa32jRfMV3B0VeRagq6fBaifqXi3b7qivBEYhZh1PqLFfGJptwgG1J6cf7jQqVLmyAO1YF4TsuLmw4IQLOeu2jvOpOzB1gU3YxD5IeAw9e0Tryu9uqKfpqgycmNE%2Bg%2B5UsaqcA1CuMSm%2FunugBJIjV8mEgiZ6uvWTyCAWNlLvKjR%2FnXt8ioWJAIdqLWHqhIcocgfbGKqtPm00AFLOAYeaonRIQ5n82aKv96e83tURyN2vFPVZxveiR3sz%2Fca%2FsfM26PYtTNni9HoCuVMZv8VoymvTDqFJzSbH8aH%2BmmH65oR0mv8J1i8KwNyRQuxte7Vt%2FDFsbgOdwrg7wzfGZtyMCkNzzexmS58JqQQt7eqZUGL9gwAFWPADPY5lZ%2BXT0c0tiW%2FiUvt8zXL5NdUQcxxbuqrfq1QPTNRKs7%2BL466LP%2Bhu0yOwjm40VMTVTwwoobdwAY6pgFySLHyjHjXRMtLyscI0CvW8hnUbY5Fg7FxulmsORd0esGsD%2Fk2FtfjEHBkxV6e870FmW7Z7L2KElEBI4HyneoIBKoDxtaXlGHLkY5vvS0ojgflJWbVtQqjiJUVJFRQb4O1%2B6aqbyipTjN9LcSIEqv2sOYaHxHZztCXADXTbhk6tt4Rs7ZmtRICLyvMy%2FBxFGsCyng601I891IymaUmq4gvtkn3x4yr&X-Amz-Signature=b7abff804387cbdd6720cd9c6d35ec975cec3dc0ffbbd8f5c3cba7febe714588&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHLXQYP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEVGS13sV90kz3D4D2uxSVH0QSWdo5zU6eME3AUwprNpAiBOIYxmBD4Rvd1WtGkh9a%2BbW8EjWs9vYHuX24%2BRTxxPyir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMktGnir6rC830d3qkKtwDhJ%2B19cENJqdmgI5HU450P0bkWsAzbgF6GwCrk%2BChgH%2Fb1MuAfrwsf7YLbyDykb7gsVNh0mg8jaYi%2BPDsVu6y3Y25to7t0%2B8NSXMBVqUhK4ReCu%2B%2F9elzrTvkOYsccp0gnX25Jlyrghg3CHbHIMvQc5hqcsrMcv3%2FVzd1L%2F2s4On%2BMCDYgs5ntmJfOC1QAS53Xa32jRfMV3B0VeRagq6fBaifqXi3b7qivBEYhZh1PqLFfGJptwgG1J6cf7jQqVLmyAO1YF4TsuLmw4IQLOeu2jvOpOzB1gU3YxD5IeAw9e0Tryu9uqKfpqgycmNE%2Bg%2B5UsaqcA1CuMSm%2FunugBJIjV8mEgiZ6uvWTyCAWNlLvKjR%2FnXt8ioWJAIdqLWHqhIcocgfbGKqtPm00AFLOAYeaonRIQ5n82aKv96e83tURyN2vFPVZxveiR3sz%2Fca%2FsfM26PYtTNni9HoCuVMZv8VoymvTDqFJzSbH8aH%2BmmH65oR0mv8J1i8KwNyRQuxte7Vt%2FDFsbgOdwrg7wzfGZtyMCkNzzexmS58JqQQt7eqZUGL9gwAFWPADPY5lZ%2BXT0c0tiW%2FiUvt8zXL5NdUQcxxbuqrfq1QPTNRKs7%2BL466LP%2Bhu0yOwjm40VMTVTwwoobdwAY6pgFySLHyjHjXRMtLyscI0CvW8hnUbY5Fg7FxulmsORd0esGsD%2Fk2FtfjEHBkxV6e870FmW7Z7L2KElEBI4HyneoIBKoDxtaXlGHLkY5vvS0ojgflJWbVtQqjiJUVJFRQb4O1%2B6aqbyipTjN9LcSIEqv2sOYaHxHZztCXADXTbhk6tt4Rs7ZmtRICLyvMy%2FBxFGsCyng601I891IymaUmq4gvtkn3x4yr&X-Amz-Signature=d618ef78a12e8976c49bfd20ab213e1b3306d9ab1efb6ec6c0c212dee646c565&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGTHLGC%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDQGdEGTvufDmv7g%2Fd2Pl40W2RbXHMsH2YkGGviZta%2BVAiA4hTJDT7uzAlgZrvZYIJHD2xAUQ%2FkLEs93mcnFoN0IWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMrq%2FlfnuRjKA8J6nDKtwDLoVWN9T9FXwT5K7as%2FOUY%2FxyHSueX1kPvi6Fwu9oS%2Bq8k1MDWBoZ6NWriykR8dGYY18G7Z5qnMTMiAKE1Wmqtq1lKgJo5exNuK%2BnfqDumkhHYOnyPmmxxj%2BQQJkkYqdW%2BgOzL9XsG0YFhVOoFMc0aIBmuAnn21T9fYBeIiZt6YBhgxdbI6nq%2Bt8gvvwXTK%2F5O3A1zXPhJy3cxMaPRKj4mPRZBa2AUFRvVA6IEicrnzKpYYFUy1NVwLTh80t9kHNIQGUvRdp865O%2Fc5Zu3HqZr6%2BKJ3to8Nha6z5MrdJJeE8EdCMQ3xtNMxf9pHK4ODGm%2Bw7V034eYCcEFGPNzmOe0UUsPgFTpw4mHJ7KqJVlVZPRMJfa7DQZCJbEa%2FH2drBgUq84HrIKZlQhTqMDKdqEteGfjMpGU1BxuHnrQ21OiCcUsntGO7UBjHWHNQdIDMOMSNuifFL4H4KaijQpeo8%2FTnJbUxoe1aSDCJmd20Nal9c3lugdoVDpuifDsW4iu75lYzVt5gp8n9ubsAsV0B7ZyN5%2BBAQ12K0xLLiE79iK%2Bch3sTvNMKRupZ4fQE8fKCb%2BdJOkBfItvGeT6IWDp7u8DtXW%2ByjkTH4oiSEInic4hQmYcjhVAsyCCxAeF6cwg97cwAY6pgGiOuh2rPV7HnOXXTiLtOlV6VuLBfW9C9EXMR8fHD42WpQMf8UcyNsMTsEoVP4VBzc513w8Q%2BACme8yUnw52PMIuKx13HG9HTUG8gV1CgzmNqKxpYh9li3OVI1ht3swbaGENt5kYF7tbffb0zSIq3s%2FwGWbmPEW3DZcT1rRu7Fmf9qa1bUYkL94LkTH5TvEAuo8nRpyzwdnt2MzKDtYcLyceRpO5BFn&X-Amz-Signature=82b5ba741ff679a79519f9953e9d6fb6073dd118f6120aaf217d8979839136f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CZGRVDY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHZ5QfKm9DfLp2SgfpsmpXZfcgZrB438Y7%2BnPFE9T5iqAiEAs6eX9KBNdKJ3LM3ZfpexMyz55dS9py6B74wVVgt4j2Iq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDE%2Bb61YLwYpOGC6DGyrcAwDvCW9DMpHahX3V898N8eo2IiNUBwObulKfAtBvrRBeBzdL0K4ehSisrvTNXHqnVuJaYxjHK%2BFWBnDidhHnkC9t4nP9Zaen2jLQJMTJu5HPn6EajwanmBDwPm84YStfQyJ2vtOt9frP9zMEcJSNUq%2FR72t2zj23hks6lY1k%2B7YOn3YSyx0QIGVznhdyqyOZWwcPSrzLWVCW61tli8OoAjm1nwWvoZ8LWz040dKOfl7NGrEK4UujSvqOSbv%2FbeKLG9hSuATdbaJDhxskCWZ7SUTJ5O4Ilg%2FKvvGYx0Zzr42nkrVO3vMFcY2YMU6mFxpmE1eo9D7JqK7txyzx7mJ4DI5jMDB5yKBuIme0cw3G6yi1sjbPwPKj%2F512RzR0Xcbo3kgoDF3c1So63RjPcV%2FVpwjseA6iiwy9QqyihWVN%2BHcER2v3y%2BMFOXu3PAJxyrl8IT8XcRpo4iAi%2BXGWwqdB4P1vooT9npXAFbgT5t5B5g%2BJ4CHZuTFvYgMgXxuLGEdQQdXXLTfvsUVc%2FwuxMC%2BLyhCiYJl%2Bu9L5YRq2RvggdLxkcZwkr%2FQvbdvH1%2FuquXsdr6DBky7roMAtomaUh41TC0H5Q0i8LcEeoqY1iBQENV2DSjS9Yt9XhqHRMNVLMOOP3cAGOqUBwol1pZwG2ktpsIX%2BcrjwgHUxgrN23eMJsFZIHQiP8s2r1j1hM3uD4sOfi2MHnus8%2FLtlG1orsyOM4Si%2F9hwQXQoGYcdQt6rofxgiWgHrPs7WhiJerTrR5KE5Sk%2F7LY8tGVHnQu3PWHMef1z3%2FuBczFLKBfb0AZG5DIKe2opqNMfz%2B4w4VGWwj45FzYSUZxWixkDL3B0%2BntKhr%2B9YdrTuUKmoPfuF&X-Amz-Signature=8ab44d2aaf9987c94e38c5708d6371a65d9127f9b8f6b7e6cc363a11a2e2e9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHLXQYP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIEVGS13sV90kz3D4D2uxSVH0QSWdo5zU6eME3AUwprNpAiBOIYxmBD4Rvd1WtGkh9a%2BbW8EjWs9vYHuX24%2BRTxxPyir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMktGnir6rC830d3qkKtwDhJ%2B19cENJqdmgI5HU450P0bkWsAzbgF6GwCrk%2BChgH%2Fb1MuAfrwsf7YLbyDykb7gsVNh0mg8jaYi%2BPDsVu6y3Y25to7t0%2B8NSXMBVqUhK4ReCu%2B%2F9elzrTvkOYsccp0gnX25Jlyrghg3CHbHIMvQc5hqcsrMcv3%2FVzd1L%2F2s4On%2BMCDYgs5ntmJfOC1QAS53Xa32jRfMV3B0VeRagq6fBaifqXi3b7qivBEYhZh1PqLFfGJptwgG1J6cf7jQqVLmyAO1YF4TsuLmw4IQLOeu2jvOpOzB1gU3YxD5IeAw9e0Tryu9uqKfpqgycmNE%2Bg%2B5UsaqcA1CuMSm%2FunugBJIjV8mEgiZ6uvWTyCAWNlLvKjR%2FnXt8ioWJAIdqLWHqhIcocgfbGKqtPm00AFLOAYeaonRIQ5n82aKv96e83tURyN2vFPVZxveiR3sz%2Fca%2FsfM26PYtTNni9HoCuVMZv8VoymvTDqFJzSbH8aH%2BmmH65oR0mv8J1i8KwNyRQuxte7Vt%2FDFsbgOdwrg7wzfGZtyMCkNzzexmS58JqQQt7eqZUGL9gwAFWPADPY5lZ%2BXT0c0tiW%2FiUvt8zXL5NdUQcxxbuqrfq1QPTNRKs7%2BL466LP%2Bhu0yOwjm40VMTVTwwoobdwAY6pgFySLHyjHjXRMtLyscI0CvW8hnUbY5Fg7FxulmsORd0esGsD%2Fk2FtfjEHBkxV6e870FmW7Z7L2KElEBI4HyneoIBKoDxtaXlGHLkY5vvS0ojgflJWbVtQqjiJUVJFRQb4O1%2B6aqbyipTjN9LcSIEqv2sOYaHxHZztCXADXTbhk6tt4Rs7ZmtRICLyvMy%2FBxFGsCyng601I891IymaUmq4gvtkn3x4yr&X-Amz-Signature=8e9b517d8a5ba842f3ce085646fa0e00a6fe1ae368ec77475c0e081323551c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
