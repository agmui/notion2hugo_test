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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJDK2F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQ93jk8AeGn1RHSCZB8PIWuouZT3YCBC2VmQgvU5fjgIhAIux%2BmrHostLMcH8qlmvdulV4slZsDJTbaGCgmYf7OO%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPJRc3A1MDkV2FmLsq3AOxgnYGFdic8pQYMj9t0WO8GB53imOnysOQjwvUxQx9XO9lgXZiiYLy9aAgXufj2SqRDYZowUQbbYQGoFDn753jKSjctey9%2Bmfqhpg3W10h39%2B%2B6Eh300Spzm1quA2kCgt8%2BYx%2FvLGt1NMtTJL84shFsVo15NWxahMBnF%2B1fe7Q5bwXZOJIcnvUP1a0mV0mDjYMs2%2B6QzdrHt95WBxVBhwsEySHrNI6%2B6iJ9tRcVW9gybMSyQAXizNiqmSxzrY09FobyrQD9%2BFXQG8OIWmJ2vvixl7VX%2Bjz%2B8c8bqGVkR0DiWcmj8fx8ZdIb3%2Bsjt3%2BgbwdWl5Cx2l8G5Algz6FCybaMOqFIJqZ%2FvW8dDimVqiFKVWXyUOJz9vdx6s54vigrFJMK2YTrfCsFHu8iGxAX0M0rk%2FQiwo5JUDO6srRAJhQF7hf14PFyTInm7TAhNNWQthg3DJTxFyQs9aDufqEW9zPuvaS5sOTIWOeGmeuUdCbsGulz4gYy2fh0QKEfpWZIbqjsnNhtXTRbOaFGmeamso1J0%2Bp2SXMcKBchGG4t9oruZ1FRe80ymgatsf40vhjEoMeBamlzgBHGRiloReSd5w177DNRpJA8nOkuN0%2FL5P%2B7cCxZMW0qv%2FXcRUDzjCpk9K%2BBjqkAV%2FFX7gGqKrcELXi1VoU3lPY1plV%2FtxVYSlOOo45BGGTARHmAWrSUv0yMDWf59eI5kunnNlLv20EKQTcJRH5tlp88bo6kite%2F%2BxqrHJq0hj5x0bt0DzSo52o5X56f9lctDQi3kMcBmJynp7mO%2F4mSVMEfYxIaCVX9LH6zzMAKjkv%2FCaE%2Bg4EotlCZxDQ9YVQ8CpjthJ4oerLLLU8MNBA7HHZ%2FGPr&X-Amz-Signature=66bfe2a4c0da536ffd32c388ee339e432edf3df81c0ca4648805d4562fc7df15&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJDK2F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQ93jk8AeGn1RHSCZB8PIWuouZT3YCBC2VmQgvU5fjgIhAIux%2BmrHostLMcH8qlmvdulV4slZsDJTbaGCgmYf7OO%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPJRc3A1MDkV2FmLsq3AOxgnYGFdic8pQYMj9t0WO8GB53imOnysOQjwvUxQx9XO9lgXZiiYLy9aAgXufj2SqRDYZowUQbbYQGoFDn753jKSjctey9%2Bmfqhpg3W10h39%2B%2B6Eh300Spzm1quA2kCgt8%2BYx%2FvLGt1NMtTJL84shFsVo15NWxahMBnF%2B1fe7Q5bwXZOJIcnvUP1a0mV0mDjYMs2%2B6QzdrHt95WBxVBhwsEySHrNI6%2B6iJ9tRcVW9gybMSyQAXizNiqmSxzrY09FobyrQD9%2BFXQG8OIWmJ2vvixl7VX%2Bjz%2B8c8bqGVkR0DiWcmj8fx8ZdIb3%2Bsjt3%2BgbwdWl5Cx2l8G5Algz6FCybaMOqFIJqZ%2FvW8dDimVqiFKVWXyUOJz9vdx6s54vigrFJMK2YTrfCsFHu8iGxAX0M0rk%2FQiwo5JUDO6srRAJhQF7hf14PFyTInm7TAhNNWQthg3DJTxFyQs9aDufqEW9zPuvaS5sOTIWOeGmeuUdCbsGulz4gYy2fh0QKEfpWZIbqjsnNhtXTRbOaFGmeamso1J0%2Bp2SXMcKBchGG4t9oruZ1FRe80ymgatsf40vhjEoMeBamlzgBHGRiloReSd5w177DNRpJA8nOkuN0%2FL5P%2B7cCxZMW0qv%2FXcRUDzjCpk9K%2BBjqkAV%2FFX7gGqKrcELXi1VoU3lPY1plV%2FtxVYSlOOo45BGGTARHmAWrSUv0yMDWf59eI5kunnNlLv20EKQTcJRH5tlp88bo6kite%2F%2BxqrHJq0hj5x0bt0DzSo52o5X56f9lctDQi3kMcBmJynp7mO%2F4mSVMEfYxIaCVX9LH6zzMAKjkv%2FCaE%2Bg4EotlCZxDQ9YVQ8CpjthJ4oerLLLU8MNBA7HHZ%2FGPr&X-Amz-Signature=c991465b4adff2140e3f13558a953f78583e2ab1e819a2e8ad6978283fd3271d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPLAW53%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzpNtWNvQkLkNLymX8fkKR5CBeIGfxhSiFY1k3ypKEyAiBkEkbBSOH0xN25LARM%2F2QsLWGOgX9Nl81bFrkeGrHiTSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5sqewQ26%2FgNxwEQaKtwDKf8tgh4N6sCcGMRpBaxU3fWJ%2FrUIpW9Hw3m0LS%2BhGcD%2FpvAiRm1WsKThBVZ2KWy2CTATAzzmLZYunrkzE%2FXKlTtFPEadcB84BmGCnsinA6BkqHwUFo1C9GGyacOnXS4VFjhDQQ6z6vxoAAnhOkk4VIAghkFgbEI2RmbmI8q9rFDSVEWxeJgPJ8aNwDL5YL0hNGxmxcHXaiF4EFkHfSWyZKZv%2B8eM%2ByXz1H8VcePzhd3jij7YMFkvPjET2Q0KIGvx4Dv5TBAzJkIs5eXybgVFd1ltvzlVPIy0ue%2BUL%2FPQWrOR%2Fk8C%2Foihl6G8%2Bnt6Y%2FVVsEHKZ8u9xNEWbgvHY2Iv%2FEd%2FjpKTVVMrym3aObznhia%2FLD7B24KcZ%2B%2FvYZ75uA7xGIu%2BUTjj5t1YnJjzxJ210PyNXTXo5ilACxBuapi61JsVaIPLIDh3St9I1v82YexiKBQaR1NjHMZzt9IBmrxS2BA54q%2B5BobDzpyBuXlS2efT%2BUsrSX2ljPijvMXsuWMEeqmjBfsSiLY41LItuDCE0SvC2iwf%2FrQ4%2BX91CC7TEvy9BOOgxJq3NOGyMmf8sfG%2F7NE3XkIGqS%2BavXCX%2FeTjmVGEWclUs5wCqjpr4dJ7LFkz1%2F1AYG%2FHbZYjiLAwgJPSvgY6pgEM8BkRDOcRo2ukwF%2F4Y16MV%2FmeYY9p2yap4fgAOwb62oCAa2VM49iVLmguMKe4rYFO%2Bnq7t21vO6EwMfyzPg3%2BwixFr7JB7C5PFOXsCXBIREg3cXeAbKFL8QMV0J3cA%2Bbz%2BOVNasWjqnFP5AhNvFMYwOy20TnOfLekNF%2F1oF6SU8NwME9L0P4%2BEw3sRwBJvvCAANXkbQvUPji87Q%2FV30xCQoFwY5Ww&X-Amz-Signature=04ce78c5caa4a016d19048b0e990822d84e59bff4879c92b024ee2e16f006a84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SWIXUYE%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTy56IIdJSCaFW5DYboxaq5GbaGvkzn%2FHI1%2Bm3GL1wYgIhAJ9k7csyRwk5KWPd9GS3GeZedhNBiHx17ul%2Bcdr3uen8KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWQ2KxjiYjohHkLukq3ANgvKhFU4feuvnU660snC%2FNhvV7thcH6bvKRlQe6rmuS2iDMEjAY%2BdyTKEhgL5R1S%2BbHZoFznvLK9fqKUMcgYLNjn0it%2BmGo9RlXLmk2q9FxywtA8zk2c5IOEhsXia%2FHDrXfj13OLv2TwEvLyTKl0PSO8mWYGSacQjWvsXASbU6hAOOzGCpcjTD33U%2FFJCR43f9GM1thG1ERz1MTH2wUgYkoWyujJ%2Fw1BIghYNSCkffLAAU%2FirAVyZddln7KKGZzkJoLdnuK3fOj0rT06bwPPjXxKjnQ63gSw99hD9%2FozAhBPU6DWVcCrqVyg5y5%2Bj4wmh%2FSFFypqyMpzi2piQoSP%2BiJG1Y4r4jkXsDIh09BQ54WgYFx%2FiJ7oahfT8YYy9EOqPgRxGgPniEBP4m9VjvlJArrZmKIF%2BF4bwjUpVDAhsI5DhSFkUxX4c%2FtX0a9pyhvnNmNybyJ4%2BbIQh1SgF2lYUwYDcKEhpua9I%2B1fC%2BBp0fL7cOWZWjWDKMxkgKywisHK9mWnhshfzyy1v%2Bb3YNUb5BRiaH1bbZxzeN5bqxAEw8kJCQ%2B364lisVNmVKK70r4SJAekB%2BUuaV%2FKRLC7YntfIBaOHtkyLUacT7XN8v%2FSqxT4H9%2B2cHGTOnM7IhKTCEk9K%2BBjqkAY068TuoSclbG1FRyL3vb%2BqBBtMkjyo2Nxs0C6Ly2xuWVD7COzcCcI5IKN%2Fr4g%2FM2ULrfdrGV4A1K%2F4oVTmsQNZIQ9m1AkbNU9EIfdJVo9sI%2FGVs53QM4JhJcbvGoXyRjwFuTa3llwwGdzrrOJ6GV9mKstFPDCj0z5lTKJ80sico16%2BEpC63IDCQHOK%2BIJQZkuopSH7MCnTf9lFN9NV3FLFzitHW&X-Amz-Signature=9be8e082721f5f1439e128665781880eba8f16cde03346c70c6b3bb81c0ee784&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJDK2F5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQ93jk8AeGn1RHSCZB8PIWuouZT3YCBC2VmQgvU5fjgIhAIux%2BmrHostLMcH8qlmvdulV4slZsDJTbaGCgmYf7OO%2BKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPJRc3A1MDkV2FmLsq3AOxgnYGFdic8pQYMj9t0WO8GB53imOnysOQjwvUxQx9XO9lgXZiiYLy9aAgXufj2SqRDYZowUQbbYQGoFDn753jKSjctey9%2Bmfqhpg3W10h39%2B%2B6Eh300Spzm1quA2kCgt8%2BYx%2FvLGt1NMtTJL84shFsVo15NWxahMBnF%2B1fe7Q5bwXZOJIcnvUP1a0mV0mDjYMs2%2B6QzdrHt95WBxVBhwsEySHrNI6%2B6iJ9tRcVW9gybMSyQAXizNiqmSxzrY09FobyrQD9%2BFXQG8OIWmJ2vvixl7VX%2Bjz%2B8c8bqGVkR0DiWcmj8fx8ZdIb3%2Bsjt3%2BgbwdWl5Cx2l8G5Algz6FCybaMOqFIJqZ%2FvW8dDimVqiFKVWXyUOJz9vdx6s54vigrFJMK2YTrfCsFHu8iGxAX0M0rk%2FQiwo5JUDO6srRAJhQF7hf14PFyTInm7TAhNNWQthg3DJTxFyQs9aDufqEW9zPuvaS5sOTIWOeGmeuUdCbsGulz4gYy2fh0QKEfpWZIbqjsnNhtXTRbOaFGmeamso1J0%2Bp2SXMcKBchGG4t9oruZ1FRe80ymgatsf40vhjEoMeBamlzgBHGRiloReSd5w177DNRpJA8nOkuN0%2FL5P%2B7cCxZMW0qv%2FXcRUDzjCpk9K%2BBjqkAV%2FFX7gGqKrcELXi1VoU3lPY1plV%2FtxVYSlOOo45BGGTARHmAWrSUv0yMDWf59eI5kunnNlLv20EKQTcJRH5tlp88bo6kite%2F%2BxqrHJq0hj5x0bt0DzSo52o5X56f9lctDQi3kMcBmJynp7mO%2F4mSVMEfYxIaCVX9LH6zzMAKjkv%2FCaE%2Bg4EotlCZxDQ9YVQ8CpjthJ4oerLLLU8MNBA7HHZ%2FGPr&X-Amz-Signature=51fd63beb2be6a48f26b935e1cc56ee4335ec477dfb406a8a17b82b648332304&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
