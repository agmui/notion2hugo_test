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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675AFDOI2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJuJdjA5IIMeIupEZUlQBG0vDIZYwFerojgF3bI1lwOAiEAqI4CNAysGLvs5S1OSpubcdVDMJKOc5KI7nnWYNlvHIoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXSv1d34RFAfivceSrcA95rIESbwSKa8%2B1BAfnvYtFTccanOAq%2Fuux7n2VDN%2F2A9S1D2w8%2FbCVf5KoBSP3RQxs26ll%2BDiSTiZhvsgPB3CtK%2BOM3c4jjnU5Vj7xfo4a6t6Z%2FOh2%2BnkuDrg8TxhKWvJBOLXJO7QbrjoATGbGrcHe3dhRmq00NFuWmZH7kXAI6GJo44%2FlDduYXr8kKGgfY%2FIwgmF5hip85NQCMgjdjPHjd0yiJld4lrNf7htqwM4vDCpVwdSuvKMnw268wDXowHEqGgCNWvT1ep6rF8LomRtuZs50zezuJjxZlOSnt9INEhR4lf37%2F1gx7HUfEq3SwyCCuktz2cO0QSPaVTaDZEIjLxD6epCCcBNgM6hzOJRY63X2E9t0ssBZMuKbmalyikbgoMTq6Bn1U6pKI0%2F%2FjwsCrWF9BjT2RyS3NeeaI48sGGJUS1M%2FNtWoCNVYvP6o%2BgYhL91QhN9FdDKqIs%2FgJ5MhbCerA78WOY0lM0rvlGUAxsFvosoqMy9KhTox82EHtVTSs6Nb5VaDu4aROd7rE28syX6wv35u3u3FFJRy75P7Si0D7vm6GeOUGJRkMuMEBRUxUM3gHnJ55Qf5niTrf9eGvlE%2B19ifV7%2FPsxbn3g0Oy5CgeURWPMwnx5RvfMJHil8IGOqUB6cv0EZAf43hgX4Je6EUtihsKo0fO9iIDUcIKUEvSnM8mNvKG8GYLRUEtf5lk7OPwMxKAOIJlBBVN87%2FCho1cGFHExas%2Buo%2BascK%2BCmKIFSag74Y7rJ0g%2BENv8V7dIZMM5%2BI%2F9y8kB4CwaVnp5Fx5P4lwi8oVucYovk094NZ3uP1HB1FEtIvqs3HpSvfQjVcYHhCe5I7g%2B4jhAydhm0dIC%2FXn2z4h&X-Amz-Signature=99342203523175a578253e52f80a7c8f686dc255b2c04a9637615061a00b40dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675AFDOI2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJuJdjA5IIMeIupEZUlQBG0vDIZYwFerojgF3bI1lwOAiEAqI4CNAysGLvs5S1OSpubcdVDMJKOc5KI7nnWYNlvHIoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXSv1d34RFAfivceSrcA95rIESbwSKa8%2B1BAfnvYtFTccanOAq%2Fuux7n2VDN%2F2A9S1D2w8%2FbCVf5KoBSP3RQxs26ll%2BDiSTiZhvsgPB3CtK%2BOM3c4jjnU5Vj7xfo4a6t6Z%2FOh2%2BnkuDrg8TxhKWvJBOLXJO7QbrjoATGbGrcHe3dhRmq00NFuWmZH7kXAI6GJo44%2FlDduYXr8kKGgfY%2FIwgmF5hip85NQCMgjdjPHjd0yiJld4lrNf7htqwM4vDCpVwdSuvKMnw268wDXowHEqGgCNWvT1ep6rF8LomRtuZs50zezuJjxZlOSnt9INEhR4lf37%2F1gx7HUfEq3SwyCCuktz2cO0QSPaVTaDZEIjLxD6epCCcBNgM6hzOJRY63X2E9t0ssBZMuKbmalyikbgoMTq6Bn1U6pKI0%2F%2FjwsCrWF9BjT2RyS3NeeaI48sGGJUS1M%2FNtWoCNVYvP6o%2BgYhL91QhN9FdDKqIs%2FgJ5MhbCerA78WOY0lM0rvlGUAxsFvosoqMy9KhTox82EHtVTSs6Nb5VaDu4aROd7rE28syX6wv35u3u3FFJRy75P7Si0D7vm6GeOUGJRkMuMEBRUxUM3gHnJ55Qf5niTrf9eGvlE%2B19ifV7%2FPsxbn3g0Oy5CgeURWPMwnx5RvfMJHil8IGOqUB6cv0EZAf43hgX4Je6EUtihsKo0fO9iIDUcIKUEvSnM8mNvKG8GYLRUEtf5lk7OPwMxKAOIJlBBVN87%2FCho1cGFHExas%2Buo%2BascK%2BCmKIFSag74Y7rJ0g%2BENv8V7dIZMM5%2BI%2F9y8kB4CwaVnp5Fx5P4lwi8oVucYovk094NZ3uP1HB1FEtIvqs3HpSvfQjVcYHhCe5I7g%2B4jhAydhm0dIC%2FXn2z4h&X-Amz-Signature=5b765bca2d4ecae9ee202615ded2cb6bd099d59e50d7d38f23f5816770e9fda5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675AFDOI2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJuJdjA5IIMeIupEZUlQBG0vDIZYwFerojgF3bI1lwOAiEAqI4CNAysGLvs5S1OSpubcdVDMJKOc5KI7nnWYNlvHIoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXSv1d34RFAfivceSrcA95rIESbwSKa8%2B1BAfnvYtFTccanOAq%2Fuux7n2VDN%2F2A9S1D2w8%2FbCVf5KoBSP3RQxs26ll%2BDiSTiZhvsgPB3CtK%2BOM3c4jjnU5Vj7xfo4a6t6Z%2FOh2%2BnkuDrg8TxhKWvJBOLXJO7QbrjoATGbGrcHe3dhRmq00NFuWmZH7kXAI6GJo44%2FlDduYXr8kKGgfY%2FIwgmF5hip85NQCMgjdjPHjd0yiJld4lrNf7htqwM4vDCpVwdSuvKMnw268wDXowHEqGgCNWvT1ep6rF8LomRtuZs50zezuJjxZlOSnt9INEhR4lf37%2F1gx7HUfEq3SwyCCuktz2cO0QSPaVTaDZEIjLxD6epCCcBNgM6hzOJRY63X2E9t0ssBZMuKbmalyikbgoMTq6Bn1U6pKI0%2F%2FjwsCrWF9BjT2RyS3NeeaI48sGGJUS1M%2FNtWoCNVYvP6o%2BgYhL91QhN9FdDKqIs%2FgJ5MhbCerA78WOY0lM0rvlGUAxsFvosoqMy9KhTox82EHtVTSs6Nb5VaDu4aROd7rE28syX6wv35u3u3FFJRy75P7Si0D7vm6GeOUGJRkMuMEBRUxUM3gHnJ55Qf5niTrf9eGvlE%2B19ifV7%2FPsxbn3g0Oy5CgeURWPMwnx5RvfMJHil8IGOqUB6cv0EZAf43hgX4Je6EUtihsKo0fO9iIDUcIKUEvSnM8mNvKG8GYLRUEtf5lk7OPwMxKAOIJlBBVN87%2FCho1cGFHExas%2Buo%2BascK%2BCmKIFSag74Y7rJ0g%2BENv8V7dIZMM5%2BI%2F9y8kB4CwaVnp5Fx5P4lwi8oVucYovk094NZ3uP1HB1FEtIvqs3HpSvfQjVcYHhCe5I7g%2B4jhAydhm0dIC%2FXn2z4h&X-Amz-Signature=88b55de6a3ea6ccdadb97537ee51fe08fedf1dbd5368dbde1e71388a7a523021&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL3JWHXD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbFS%2B6d2y8faEpArX0ZD6ejkhFPmZBI2cN5VjI5XWNOAiATVvbqBpjXdtOuq%2FSESmgbRqTuNjLybPYCZ2SsDx6r3SqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9lsPvfpVaX76nR6OKtwDkHaBmFExGo41RBcVVB60u%2Bh5OCPiIyB%2BC%2BZNzj3Yp%2FUWeUzp%2FcjMMW1Yb4VI7G37Fd1HzLRNskNzrc7k7UE71CRKXZsQnTNQkuuLB1RoBeicNcNJ9YsRCgCnaddKH21TwsujIykEO7MHhS1w%2F91zW%2BbHX4JPi%2FqzOJvhQrD9CQRUVINIzIuHFxSDzZtl57m5PqDOdPzEEsYlQtIumKwwguXC83nt06Sru91krxXaNRuhDh7x4Tvy2oyplvJ6QUMJ73jpP84mwvrjxp4X2Wxqfyn4Qt%2Fkn58CLqSt7LgAFTukGR2FSTVD1ZjnO%2Ft2bz4K9SVwWV3mqejVbsSRlXEAsaDvOXra6vltqrkkdURs%2BaO8%2BjO%2Bt3K7K87Gs1zxTRFgziqce50HL8V5Q1wz%2FOtqz1ak8sSgn79jN00OiSmW%2F1%2F59ThrSeCrDQR1AeCIMjYu9lzEfqEoGhMol0mil6kgZBdybsO1guJoBa188dJW7kbL3mWiHl5yksLpJBn4o5Tbts8juy3vjnM9bU9Ja1OcNsn5hLybVk%2F6%2BpSGa5iF2IKbHfQTFji5ugNP7I2kP40cQgPRNMXKktJarkAzlmu%2FSNBimiXzRaGtjDq24XOjsRNFdPHpLPe93rwcjqYwxvuXwgY6pgHvIK8uDalqSPx0%2F3w%2Fno9Ygabcht6v4tbmlzFkhXOiamUMzT%2Bxg%2FtUGjDVpiWGwkBxiyejaBRuNgYztJopmR2Lsz7SdmCiI4gtWj%2F4myuohFq64CVm2FsdFzOu1vEODvEorkNsTluI9Eg%2BNryeikckqedsOgtnpKgfyeqjUxYtYjyzFA1HNt67idQ3z05z5lLxUQed%2FcZqWyAt1N5FkO0NRQUBPVuk&X-Amz-Signature=5911f9502d2d4acf5a270517492664ae3a63135c7fc3c65ed3044dd1ee4b0c79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTMFNIT%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAY4xhcGE5sCiT7pSg20fm4st4n76Mi%2BZNfaZHw9cuxmAiEA4trteO7amgkYK9qwWjl4wGs2VyBPBW03bpnH37WlbmAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGI5BHikdntXTWGhSrcAz11VeNxs9I8hgP%2Fbu15tBK4xOvg6FbaPMSs8o7rB8FmPVXd2wXCvYaK9KHrRjzieHZyq8Upo%2B9FIMq82x%2BqDvbFjXEW74R74TtwuUGW3LzJLCyu9SSm%2B%2BLTZ%2F9%2BbFbqQOgAeQbxTLdl4sezxkkQ6X0dWnPA1hFpxUJnES%2FPQK7JylWXW7U5AnCfaKcM%2BqPJU2c77toJV3X1Gv68hUIAfk73ESJiT0hE4PqZnh0vKr6e3bkgy9AXXTEBErpQj0tlLfls%2Bcxw9GQZPBTwCZBrgYHNZVDA2%2B82Mj2FMyGIInyjc79ad8yXsxWrFJXdxvSaQ68Pfgxf4kY1m%2Byre0ApFywK7%2Bf5Bvtf7kbxeb%2BgXQWzhF1cMv5Ezgk7d9OnB3er94RluqYH9TDOkKw1Eb2n5rSBY4ROEuIvuciOyY7B9%2FlzZ1GTNPuUgC13V%2FtfZZs%2FlxWkQrvbhh%2BJYQHWHF6KrBzKCBD6NM5cUKsJBFrUFa2sP6Lu8hNxrFUQWLVSvBo6PZVjv0QowrC44d1Y6AtQR0CjfOCqBVPc2LA%2FpxAyV6kDiaGTPWDQmw6NZzjU1xboNY90E05cJs3YbXEHBiEF%2FYPXkHnqrBPa458Ytu0uemN2ccUfUOg0gmwKHiFfMMPil8IGOqUBOVl432y0hfCYyhwJ%2BGBv9Ok3paCFmS7FBlRoOCmT0qS2W5CJrEY5SU%2BGhkk%2Bjpmbza75KqZPwEoeyl2JMNNhURFiHmiKOsTKttI4G13ePUdS%2FJPtB38TnACiZt0G2MNXTimXNV5BOxpDdx5LCX9lETnMxDbyZP2ByvHUEN21%2BFLl6jJyEPxec7ohqLkov6JZDZVABhLreK%2FwNyfmqLPytqBfmOlz&X-Amz-Signature=278ed88ab5c6e1c3768e474c075870b62668454127ddc576c8332cce07359d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675AFDOI2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJuJdjA5IIMeIupEZUlQBG0vDIZYwFerojgF3bI1lwOAiEAqI4CNAysGLvs5S1OSpubcdVDMJKOc5KI7nnWYNlvHIoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXSv1d34RFAfivceSrcA95rIESbwSKa8%2B1BAfnvYtFTccanOAq%2Fuux7n2VDN%2F2A9S1D2w8%2FbCVf5KoBSP3RQxs26ll%2BDiSTiZhvsgPB3CtK%2BOM3c4jjnU5Vj7xfo4a6t6Z%2FOh2%2BnkuDrg8TxhKWvJBOLXJO7QbrjoATGbGrcHe3dhRmq00NFuWmZH7kXAI6GJo44%2FlDduYXr8kKGgfY%2FIwgmF5hip85NQCMgjdjPHjd0yiJld4lrNf7htqwM4vDCpVwdSuvKMnw268wDXowHEqGgCNWvT1ep6rF8LomRtuZs50zezuJjxZlOSnt9INEhR4lf37%2F1gx7HUfEq3SwyCCuktz2cO0QSPaVTaDZEIjLxD6epCCcBNgM6hzOJRY63X2E9t0ssBZMuKbmalyikbgoMTq6Bn1U6pKI0%2F%2FjwsCrWF9BjT2RyS3NeeaI48sGGJUS1M%2FNtWoCNVYvP6o%2BgYhL91QhN9FdDKqIs%2FgJ5MhbCerA78WOY0lM0rvlGUAxsFvosoqMy9KhTox82EHtVTSs6Nb5VaDu4aROd7rE28syX6wv35u3u3FFJRy75P7Si0D7vm6GeOUGJRkMuMEBRUxUM3gHnJ55Qf5niTrf9eGvlE%2B19ifV7%2FPsxbn3g0Oy5CgeURWPMwnx5RvfMJHil8IGOqUB6cv0EZAf43hgX4Je6EUtihsKo0fO9iIDUcIKUEvSnM8mNvKG8GYLRUEtf5lk7OPwMxKAOIJlBBVN87%2FCho1cGFHExas%2Buo%2BascK%2BCmKIFSag74Y7rJ0g%2BENv8V7dIZMM5%2BI%2F9y8kB4CwaVnp5Fx5P4lwi8oVucYovk094NZ3uP1HB1FEtIvqs3HpSvfQjVcYHhCe5I7g%2B4jhAydhm0dIC%2FXn2z4h&X-Amz-Signature=8c462b87ea4064de761ac3bea5948b5df2424e1067bcb80fb2fd7f183a355bec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
