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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJGABAD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDE2wgZEtjPsbxQ4LKyWiWQIpxDXKzrgKtwYwH3hF9kIgIgLChR%2Bhmjcfl%2FkyHQIaPaNrgvGj0RwzIKVQbXo%2BG9qGUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLioy8goF7QNPFoISrcA%2FLd9rXL1V849H4ZExjTOxtE0nVsq%2FLTcVDzq9mBwNZsxUnn0hT2h2BnCdzrfi63u45USrY%2B7LSSJrxjV4WoGyD0xIwnC2JN16Ob9kCHsp32b9Pb%2FYvYo8rjUUdpaCnOYqulzU3WHynOAT4gDjvxaTr%2B3f1bFJPWWBoZhON8X3Dq4r0Mwqem5AobBBXow9zkAmpOd9qPDg%2FwlzdtpkqIaWvf6nX1xw7D2sX2Bi9e9rbsY1hM1Y0q5eLk3wI9GoVbpCZi7dzTg4CyquNWTiM1fCq1bxxQqSxoZ6nhIvjDZpTibREkE9mHs8zPv150ftBde1K77rjcE%2FcdeI9vqsLYKL2WLjBh3Puxo6BN%2BYutqckn4FBXJG5hO2SHidWJfNpwjMJ4rHMgiO8dM2%2FEA1RypFnZbucBuLQAPnXTRZYcTxCYBOo4uBEp3nvHXkMQLQOLM%2BzA1AW0KFZBoIGh5QaBglEvHvGMiTBFOyg5NZFDCKz7s6nhOw1QEVTEMDeUDX%2BoYgteJBBjT3tlt2TOPcNiRfsRHl2jgclh8xDqtMJcwffHohe3Thngxu1uuvrZr%2BvUqZDUO76KuSQ6uLjI5CVtbF7GZasP3nflY5YwBkYO7K8%2BSPha937ZkND6M7U2MOOjksAGOqUBr6%2BVtCslOtSrZhYYun%2FfCuaUT0kzJB8foXvBwyXWZI32o2jKaphsBm7eN0uxnfJN%2B7QewgGOmiGeFyk4F3gLaCtKbyVvf%2F8TSQ0KtIF7zpW0YPo3Ll%2BDbhZ9SAliRTDLMVJfJdM1lkA0I8hPM8vWwBeSF6yg6zSKVlndnhUiAoxdRg84Na9pEfd95RGCpPpd4uq%2BQtbojfyWwgx2YQfRtFGHWZHV&X-Amz-Signature=b5db6c26e8af0f307714e1ccdcb3f60d4075e98acfd556f171bb74c6a84aa390&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJGABAD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDE2wgZEtjPsbxQ4LKyWiWQIpxDXKzrgKtwYwH3hF9kIgIgLChR%2Bhmjcfl%2FkyHQIaPaNrgvGj0RwzIKVQbXo%2BG9qGUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLioy8goF7QNPFoISrcA%2FLd9rXL1V849H4ZExjTOxtE0nVsq%2FLTcVDzq9mBwNZsxUnn0hT2h2BnCdzrfi63u45USrY%2B7LSSJrxjV4WoGyD0xIwnC2JN16Ob9kCHsp32b9Pb%2FYvYo8rjUUdpaCnOYqulzU3WHynOAT4gDjvxaTr%2B3f1bFJPWWBoZhON8X3Dq4r0Mwqem5AobBBXow9zkAmpOd9qPDg%2FwlzdtpkqIaWvf6nX1xw7D2sX2Bi9e9rbsY1hM1Y0q5eLk3wI9GoVbpCZi7dzTg4CyquNWTiM1fCq1bxxQqSxoZ6nhIvjDZpTibREkE9mHs8zPv150ftBde1K77rjcE%2FcdeI9vqsLYKL2WLjBh3Puxo6BN%2BYutqckn4FBXJG5hO2SHidWJfNpwjMJ4rHMgiO8dM2%2FEA1RypFnZbucBuLQAPnXTRZYcTxCYBOo4uBEp3nvHXkMQLQOLM%2BzA1AW0KFZBoIGh5QaBglEvHvGMiTBFOyg5NZFDCKz7s6nhOw1QEVTEMDeUDX%2BoYgteJBBjT3tlt2TOPcNiRfsRHl2jgclh8xDqtMJcwffHohe3Thngxu1uuvrZr%2BvUqZDUO76KuSQ6uLjI5CVtbF7GZasP3nflY5YwBkYO7K8%2BSPha937ZkND6M7U2MOOjksAGOqUBr6%2BVtCslOtSrZhYYun%2FfCuaUT0kzJB8foXvBwyXWZI32o2jKaphsBm7eN0uxnfJN%2B7QewgGOmiGeFyk4F3gLaCtKbyVvf%2F8TSQ0KtIF7zpW0YPo3Ll%2BDbhZ9SAliRTDLMVJfJdM1lkA0I8hPM8vWwBeSF6yg6zSKVlndnhUiAoxdRg84Na9pEfd95RGCpPpd4uq%2BQtbojfyWwgx2YQfRtFGHWZHV&X-Amz-Signature=130e4ac5c44fd2d03a754dcedb6fdf699e199f31d3ffda44a0c85903621a4bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7KYHKPS%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC1BJXlWfBW5X8sJ%2BU7PWopTInAsTnpJtaA%2FmQpUceVQQIhAPEfJ%2FiokkrbgkAsMdHE3%2Fgg5hN585BTlRbUGLhFztMGKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBNFfU%2Bo8A1bjPw3Yq3ANhT2hyPo7krcQ%2FnIcJZopiz49g0GDJEutFPP5F1DsomRfVpRShBEbLGwzK2%2BiRTYHijsM%2BUChll93P4kHd7rzGkzyeK3WUqZcT%2BrQ8rjRC4%2FFsKl37D9WeYEjfaXW4WBNyAEqmMQWI7uHkCty4XcfZL8Pu%2Bn%2B4J89S6m%2FIUlPjV%2F7O%2BfxfwUTpUF4iJqkd0YgSpwkjPmPludtj6YAe%2FdcSfamftOUi75MGABBqPzczUYLPXaaFjWNtTpNUN2Dk%2FpfjNv%2Fjxsh%2BSnUYgr5fO1d4uhFsys5msWF1Hve%2BADWbt7fDjZBiEYUxD8fM%2BTOHm9m%2FbW2sP%2BN6KQB%2BxuSU5HTEsjc5G2BSLeCiVT8H8atKiytWogi0T6lOuiFB%2FB%2FFZMPoZcJ%2BrQDMl3PIEBv41J7cBfv1xFqW58TVCmDUMPiuxKmpWJ6nzvd470CvgvLHOw1pNc9yXEW7XhqAzqItl4TpS%2Fj4ypAQky5kL4wTQ02BMIDWZSwNjXCKjO4GVjEZjAk%2Fwdp6MZj5inPy0ssbtmD5zdnmmSG7OU80h4UdiUzZ7nCKvMIqbOzGGpdk3q5V47rODvmrtFO9WnA52j2aUamm8G1b6tcmsdqUeFG6AGPR%2FAOm8WGVJlFOtFQa4jCVpJLABjqkASuUav6JcnxxrXJni2b1%2FjQTksnXgMmyz%2F5sIGvtB%2Bt2nV%2FrfuF5aNMklWibk2i7JYreyW8b0jqpMohPat33RiCIGm%2BKUqyvP4WaZv19sMLlzF3nwWC3iDUmQibmMRnNVnCp4Y9vlttckjufC6W96IdjtlQTc1pwgTd4a943XUM7E8cE8G5OqHd8%2BKrem%2FHonKb0B6Zq%2BndWgEVFYU39ikrxi1p5&X-Amz-Signature=ebb3e0ba270e6c2d30fc4b4cb5a8bde1d57fcffe508945f15424e5d57977a44c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYGAL2I5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDG3nZzA32u3MeF8c3oa%2BAsTe5KsFly0e6y%2Bo1%2FHKKnZgIgGCzkvovx05kko9HUnwpilObZ8MAOYjRcSZLzuJy5LYsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGUKq6Vep%2BZOIsdwSrcA8uGdyJ%2B7G4uJtm%2Fij3z6gTyDXzWLtm8eMV0OyWy1M4oeOa%2Fv1X%2FtPQH4aDMoO%2BH0SaZs7gFHNoNVUQBlIKs3BGcsmoDYrlsw9SnbEXRJshrNmZjV%2B14wJJ2%2Fo0qf0I42nHssGtHHkODg0LSOyV3n0D5T5TxX0gIXVCJJXtJAGKxF6Ju4W5pYKv2T086GyAtCYUIJxRiv5hecEYCh3crV2inH0QetJ%2F5S9Of1Y%2BhkyARQzGFEt04i8jMytvG41EdJlPctkpQSIo2bflTwYYhUgvhZbRheur5UQAPH31BVhbLLGnXNMhYJ3EATeAIoakwJRDNjXXaZIuUYYo%2Fm%2F628qSDg5r57E2KKWJf2g0YYAelvh7AhbSHwLdDio8sKAgyVKbY3XwOROQ2B1qmPr2QxihNjv%2B8tsgbUNeN82EEGqXURsH1X4i2%2FTLQ8MI92vPg6UJvznqDdlgIzeEE1WH9RtjVcAhhI%2F1BZLL%2FPRW9kpkMH1NHWR52cWTqfUor9bUsBgZMyszlhvBHcZVy%2FDR8ToonBOL9vs3Q0iAWB0jqgCNpf4aj5OvaG5QtDEp3X9ScLNYbm%2Fzk64AImQR4r9Bmx%2F459Ba7pwpVPzslZftFmss1ybMG%2Fw%2B1A7FxCbHsMO6jksAGOqUBlazVjvYsT6hxC3i8kOnwk6QgnLZP3G7wk2AizCMQ63IvoN6hz9ZGlqajdLtUyy9tGgsb7frHMtw3LH7g9nI4B2bUK2FluoAsMNWsBpYiFkUFGS3%2Bep1h%2F7uSf9cOFwabYqOONZVYEaSJkwQStVj8bFbgb9clqBw9QMq4%2BV92gXcBpR1p5ka6zw3IkDIkwz%2BkpEDMstH9tmmKmoqtp9OmkK8Eodhn&X-Amz-Signature=f70dfc534c033f0f64e2bcd2bb933f3b4c8ab9973f89369f33a897e1d0a8068d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJGABAD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDE2wgZEtjPsbxQ4LKyWiWQIpxDXKzrgKtwYwH3hF9kIgIgLChR%2Bhmjcfl%2FkyHQIaPaNrgvGj0RwzIKVQbXo%2BG9qGUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLioy8goF7QNPFoISrcA%2FLd9rXL1V849H4ZExjTOxtE0nVsq%2FLTcVDzq9mBwNZsxUnn0hT2h2BnCdzrfi63u45USrY%2B7LSSJrxjV4WoGyD0xIwnC2JN16Ob9kCHsp32b9Pb%2FYvYo8rjUUdpaCnOYqulzU3WHynOAT4gDjvxaTr%2B3f1bFJPWWBoZhON8X3Dq4r0Mwqem5AobBBXow9zkAmpOd9qPDg%2FwlzdtpkqIaWvf6nX1xw7D2sX2Bi9e9rbsY1hM1Y0q5eLk3wI9GoVbpCZi7dzTg4CyquNWTiM1fCq1bxxQqSxoZ6nhIvjDZpTibREkE9mHs8zPv150ftBde1K77rjcE%2FcdeI9vqsLYKL2WLjBh3Puxo6BN%2BYutqckn4FBXJG5hO2SHidWJfNpwjMJ4rHMgiO8dM2%2FEA1RypFnZbucBuLQAPnXTRZYcTxCYBOo4uBEp3nvHXkMQLQOLM%2BzA1AW0KFZBoIGh5QaBglEvHvGMiTBFOyg5NZFDCKz7s6nhOw1QEVTEMDeUDX%2BoYgteJBBjT3tlt2TOPcNiRfsRHl2jgclh8xDqtMJcwffHohe3Thngxu1uuvrZr%2BvUqZDUO76KuSQ6uLjI5CVtbF7GZasP3nflY5YwBkYO7K8%2BSPha937ZkND6M7U2MOOjksAGOqUBr6%2BVtCslOtSrZhYYun%2FfCuaUT0kzJB8foXvBwyXWZI32o2jKaphsBm7eN0uxnfJN%2B7QewgGOmiGeFyk4F3gLaCtKbyVvf%2F8TSQ0KtIF7zpW0YPo3Ll%2BDbhZ9SAliRTDLMVJfJdM1lkA0I8hPM8vWwBeSF6yg6zSKVlndnhUiAoxdRg84Na9pEfd95RGCpPpd4uq%2BQtbojfyWwgx2YQfRtFGHWZHV&X-Amz-Signature=a826b6ed5b6630c85cb3c23f1e391c7f197de721357758fc84619576b8943647&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
