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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOXZYVMA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCGadeac8mVcGUmtyOIyaaTozek3zfZNV%2BO2GyHSTXqjwIhAP3t%2BKmNZz1ndSVVG8tHT4TF1WRnIWeeVviu18ogH40jKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU32Qw0Fu0hw1bCPwq3AP52DpZ6Eg%2FbgeAtvVgzV80rTWhe%2Bs9Fp0y7o97q2Kvn1%2FweBurOY4CeCarw4HBjaNvRk6Mydx7FOW7NwltY4lvXXJ%2F71xpHHvsShP5wN5fpRw5I0kwxeVfF7ca6HMTWdA6loQ44HSjWunsGZEk6qJ%2FkLUSkwbvUZf8BbbAJC7XGfzfqtGLCP33ZNelHofgS6AQetdjyee91cWhTM%2BOxIodYRD1qg52j8EuFaKcoMr3ZLe%2BKOlwf6KAMGMgmLxpdazwGLrzuG6BXEY6wjT5VYJ%2BcR8OrVJmkWNddK9UZCRH3WjihUthJvELyd0ga8JnU3VZChpXRqEfYdf%2FjxY%2F3NC0r%2BGAaVa6GddTPikvLVCJ9%2FCTNcLLjEYQEBEOJ3yrLe91pq%2F%2BNf1FpNOVQzJ8N8qcpvispzBT%2BwHsDpdoSroQTV%2FLHzmgJ%2FQMjXiSDJVU3SnCAyX1uHc8wE0j%2BPqeYos6Nk6Jv%2BPyDAqdpC1dme5Grx8qvcRzchhJTgnCCB0CtH1MidraWAqBd6gsjci5M5l2p2uzPerJsRrvtVF1xB1EZd6C4cIeYnp%2BqtVbpw71TE0AGluT9wSq3ISCK%2BXO6OXhhe%2FwHpuMWCDAAqHefDegTgR%2FPzYnSIiApe0yJzCntbO%2FBjqkATMMQVPmbJLN%2FypWiWI7k7A7sesDExiAMOk%2FtmWmtY0cCjPJRDmojDLKkM11GqkJ2kfNRvDtkNheL5dspbH%2FccUuAxsL49HYTySAzJWfGNy1vuYe0OhG%2FWkppXCGD1GfyQ3gqL7b21tBsx98XZq1SAJvdvnw9niUunTGzMrP7p%2Bb6x8lOI0bouWZclOqVMD5wT5X7sXwq%2FoueVicPyeBPW8GZtAP&X-Amz-Signature=87419a00039d16d6224ae35a9cc0706c711b97b7417a5babbb3a4da4f636a1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOXZYVMA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCGadeac8mVcGUmtyOIyaaTozek3zfZNV%2BO2GyHSTXqjwIhAP3t%2BKmNZz1ndSVVG8tHT4TF1WRnIWeeVviu18ogH40jKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU32Qw0Fu0hw1bCPwq3AP52DpZ6Eg%2FbgeAtvVgzV80rTWhe%2Bs9Fp0y7o97q2Kvn1%2FweBurOY4CeCarw4HBjaNvRk6Mydx7FOW7NwltY4lvXXJ%2F71xpHHvsShP5wN5fpRw5I0kwxeVfF7ca6HMTWdA6loQ44HSjWunsGZEk6qJ%2FkLUSkwbvUZf8BbbAJC7XGfzfqtGLCP33ZNelHofgS6AQetdjyee91cWhTM%2BOxIodYRD1qg52j8EuFaKcoMr3ZLe%2BKOlwf6KAMGMgmLxpdazwGLrzuG6BXEY6wjT5VYJ%2BcR8OrVJmkWNddK9UZCRH3WjihUthJvELyd0ga8JnU3VZChpXRqEfYdf%2FjxY%2F3NC0r%2BGAaVa6GddTPikvLVCJ9%2FCTNcLLjEYQEBEOJ3yrLe91pq%2F%2BNf1FpNOVQzJ8N8qcpvispzBT%2BwHsDpdoSroQTV%2FLHzmgJ%2FQMjXiSDJVU3SnCAyX1uHc8wE0j%2BPqeYos6Nk6Jv%2BPyDAqdpC1dme5Grx8qvcRzchhJTgnCCB0CtH1MidraWAqBd6gsjci5M5l2p2uzPerJsRrvtVF1xB1EZd6C4cIeYnp%2BqtVbpw71TE0AGluT9wSq3ISCK%2BXO6OXhhe%2FwHpuMWCDAAqHefDegTgR%2FPzYnSIiApe0yJzCntbO%2FBjqkATMMQVPmbJLN%2FypWiWI7k7A7sesDExiAMOk%2FtmWmtY0cCjPJRDmojDLKkM11GqkJ2kfNRvDtkNheL5dspbH%2FccUuAxsL49HYTySAzJWfGNy1vuYe0OhG%2FWkppXCGD1GfyQ3gqL7b21tBsx98XZq1SAJvdvnw9niUunTGzMrP7p%2Bb6x8lOI0bouWZclOqVMD5wT5X7sXwq%2FoueVicPyeBPW8GZtAP&X-Amz-Signature=cb129a9cc2d51bcba4a7baa92f103f5dd9f83f8687645f6b6214dc3918bac2e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG576XQS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCID9vblWPF%2FCtJitZVJEmVRr9cJsBElFX93zV4ghc4%2BgMAiByUjqp2ZCr2I4ZnAIvtmZVlY2Gus83zEZ4HejqPRF%2B0yqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJUM%2BUTRbZkzRD%2FOOKtwDnv0Fqg%2F0UNbYqOvxw3dOACiygBcUxg1cnzWtIeF2kCFpxMZaebqw6Oyr3%2FrXNfZmAmHZc5AlZcjKzErtqiaqWAc%2BzgODT51xTzKK%2FbNFAwcuzh9NaZAHe%2FKFJlMRlvgti0%2BIIwql4cwBJJ%2BY6NUIh9ViOUe62SnyX%2BzXfbqC7NBjCWGSXY8GEgOqjshf4tE44aoRUGriQ1ZEo0rMYZU%2B4b%2BYQptM7ESXendeox9mD%2BS5R8tF0N%2FZW%2BXt1dkzh2o20McdvhlldTZgtq9euAOfHEWRHjomCd8jpWg5RL8mAyWQNWJ1LQkde62zSNUt%2Be3JJ9mC53G0UNMhashQ2opJiRUtiTkHId5i0gL%2BZ9rur2ebsHmMUdneiaVrK4lVHH8lhXqACRBtQdoXWaq%2B3EAuzVNTTmm5SQAP38GtEMYoHk8qZuu89Us%2BeF6mKQ%2Bzm7GEMu03C6GYLtIBND2zrbMFkV8dwXcbt29zNt8H4ma54uGZE1y9BWyvVfxCCT9PIxMQItU%2Bk1N%2BykGFtmdsO6jc5RGFVdproED1ClLJabhKgbPdFxMReG3sq9B5boyvBekosPg0ZEQ1By9ghlvKU6VpFWRnd8y0lmo0RLARcKL8zY5jTIJUFwCp411F61sw77SzvwY6pgHCHuO6IXDg%2FhRjFk97K%2BSIU%2FO0%2BZIQC%2FWMWNskdSheZddEUXfq8Y7PqfdP61EqLUZMPn4zUJuIH7ieIqgQWnR%2FqYZhCJsZJJxjmfKGUeYyD41XF%2FepWtvpItiacTd5Toqh5ZF%2FKsCJ6OP5fn59ODmj5ocxYPQjh%2BA6d3pd0hXeGiRMXBXYp%2FTg71Qggjg5FPJXaXcpzXYqd5rwyBJJQI5pcnsGMbHf&X-Amz-Signature=64a2c07ec20096d89e26579b1e2120c649e56602d4fdbd04960a1107b293445b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRG3P2HZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHaD8LIH2A7RjcPNefi4ih9kxk2W%2FwzvH%2Bvdw%2FW94%2BlrAiEA4rhuuOkl13E85Db5KpcbDF9906whZjPhQCYXJDokM3QqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnlZKWyaih0gkZiUircA44JMzN4IJ0yQ8lWUedrFdjIE4IrUKRm6x387HiOcwrw97RS6iS8%2F7XuGdusaGa3ue1PidqkH%2FGRiRc%2BD6mBwqmFPi4ezHM6LWsFXWJACttQaqQUeF%2FVaNtszsIZKOM%2BlNutrF%2Fl8oKyV2O2YMYi8ikuGW1hlHmRG%2FuSWskIDMc3%2BzsopcJe4q7rthDyKFZcZe%2FvctCPAGHQ%2B%2FRSwp%2BAKfsClWWJuKULcWvQgHRfJlS1CFk%2BgwuvY%2BNFK15caNMA9HLJILW3Bqzlyc8bYsw3Tg3rgi36xaWVVpqr9CXv8ANskXlqoQM%2BU0xAGZy9fSb5Y2eXdpax%2Bm6OlAmaQkOtHgw8PWvKUpEbiTdpCAa2woPA8wfV6CKnN6SY7P6ihui7Z8QoaitLXSgQC4a55RdthyJWBVo392JPV1BScFCO2xS6rCXSGzFGnUKzvHCmMMvhGg86J7yxvfDzohujQTuvjRPOsuWWaJM4yc5DdHAEtwdUXwKj%2FWHjfQC0sTnD7EXl%2Bl76917NbQu%2Fl44QY289vpR%2BD5iyxi77xtbcL82da7raliUdwfAOP89u6P6xC7eG0PJvCZ9hqgeRjz0REwBi5Rfvc1QqlpZahT0Q0BytAwgYXEjW4r5vn75WyV5NMO%2B0s78GOqUBQNhRdA5xMqcVnR1Hh9NpNnF%2FjMT1hgAgdi5Jy1%2BfUlBXuC6gqXXQy8Fx1%2FstXjPMB%2BRbQW0edbY%2FyrZ0u9rulwVAfnYWGy9OEha4sjPxD1OK5aiVE%2BmJE9upV0yIgcbw49x3UqyjgwBozIyUBinTy23Zsh25mFN9HNgu9rwThL56CCFlCBP5x4JqsYRIS3N%2B6rFUMA4ai3TppnKj3A2svTlXHr7B&X-Amz-Signature=7f025450880dd8e46bf703bc88eb6cad1e12cb790df3e3f979bc7addaa93a4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOXZYVMA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCGadeac8mVcGUmtyOIyaaTozek3zfZNV%2BO2GyHSTXqjwIhAP3t%2BKmNZz1ndSVVG8tHT4TF1WRnIWeeVviu18ogH40jKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyU32Qw0Fu0hw1bCPwq3AP52DpZ6Eg%2FbgeAtvVgzV80rTWhe%2Bs9Fp0y7o97q2Kvn1%2FweBurOY4CeCarw4HBjaNvRk6Mydx7FOW7NwltY4lvXXJ%2F71xpHHvsShP5wN5fpRw5I0kwxeVfF7ca6HMTWdA6loQ44HSjWunsGZEk6qJ%2FkLUSkwbvUZf8BbbAJC7XGfzfqtGLCP33ZNelHofgS6AQetdjyee91cWhTM%2BOxIodYRD1qg52j8EuFaKcoMr3ZLe%2BKOlwf6KAMGMgmLxpdazwGLrzuG6BXEY6wjT5VYJ%2BcR8OrVJmkWNddK9UZCRH3WjihUthJvELyd0ga8JnU3VZChpXRqEfYdf%2FjxY%2F3NC0r%2BGAaVa6GddTPikvLVCJ9%2FCTNcLLjEYQEBEOJ3yrLe91pq%2F%2BNf1FpNOVQzJ8N8qcpvispzBT%2BwHsDpdoSroQTV%2FLHzmgJ%2FQMjXiSDJVU3SnCAyX1uHc8wE0j%2BPqeYos6Nk6Jv%2BPyDAqdpC1dme5Grx8qvcRzchhJTgnCCB0CtH1MidraWAqBd6gsjci5M5l2p2uzPerJsRrvtVF1xB1EZd6C4cIeYnp%2BqtVbpw71TE0AGluT9wSq3ISCK%2BXO6OXhhe%2FwHpuMWCDAAqHefDegTgR%2FPzYnSIiApe0yJzCntbO%2FBjqkATMMQVPmbJLN%2FypWiWI7k7A7sesDExiAMOk%2FtmWmtY0cCjPJRDmojDLKkM11GqkJ2kfNRvDtkNheL5dspbH%2FccUuAxsL49HYTySAzJWfGNy1vuYe0OhG%2FWkppXCGD1GfyQ3gqL7b21tBsx98XZq1SAJvdvnw9niUunTGzMrP7p%2Bb6x8lOI0bouWZclOqVMD5wT5X7sXwq%2FoueVicPyeBPW8GZtAP&X-Amz-Signature=e020a64b1006b5bc07a3cb8f0d94264a5bf290aa70c6898d7672762e1b4d4fce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
