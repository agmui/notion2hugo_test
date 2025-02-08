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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNLWWLU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFG97VsYf6hx1sajpDbR%2BSI3y0iKq%2BfOywr1t8Z9EaKwAiBhdZKqxHcu75Zbde7scwnyZ5h39hXzEJSXAP2%2BDjYJBCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeLELsI8QB6EiXLLkKtwDr31il%2F4HTevREFO50BbEOARhbrM9beZkTqS7nqSTUXMS5vz4AAkau5Mf92B%2FL68IrrZ0rDbOTqV%2FMfEW%2FS9cerSITHhQ8upKdLQxFdrPuXPKvUu7VorFpdKfFFTMokIFDnls0dhR9sab1n%2F7RxpgmWo0OeIsJcff%2FKro12hkIeyilTy8bexWrJmhVTvN09eg4YkJXxypJ5WRX%2BepGi1ouYKpM6B8gzQ%2BK%2F5GlD63%2FxODXKqf9drXFsGtGVYjHtGRdjfM7akfHRYRrs1x6Z5%2FAQdQx106JDwLiiMR6J%2BBvd6pCqcwu6BUNpVimRvyWt276B22orZ0lJIipLLLzwB6k3YcT%2Fr6V%2F3YkUmy52t8bBWf8O5jwFeG5JtmIXeaKKQFkcKCvj7QD47JewPI4VG8U67mY7h76itHMoeg5pwaMRYS80LwgHCRBI96RXcWDT9dznLrl2gthhjAuFEYHCfpeUQSdfZ0PuLarRhimeCq5WW%2BsB4faDR9ymjwmFyPG0TvfRfgEOzmK8%2BAneKMVSyw%2F8MlMLk3cH%2BP9hg8WAomdC9jUXB4ALMdYzxx2%2Fxxk7kZIUsqmSOOQWdG9dYc0O1jzsWqWbiShLC18Yvj8F98mcc%2BW4ZgQKR1545OuwUwy%2BCevQY6pgFFzMozzjlgygEUznJ6FNUZD5M%2BdTNzFDwc9ep%2BsXyrKbL%2FyR3Lc4x4Ls7NuYkI9M1PuLOoENC63YNKITIger2bU6ImaYIzscSiT%2FdFqwxhoKjKUj7G1d9LvyvCOO4fXJDJ0i2d0tiqC6D3mAE%2FqoXnhSx06d8UzXorQc3CUTKMGSK4E9dTML6naL%2FwS%2FkssDpemcBijH4Pw3jMHTYGvLMHPMJ3%2FZa3&X-Amz-Signature=abbd679d367015a9e391b14bdb09ef07af864d18a74b320543b574f23289231d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNLWWLU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFG97VsYf6hx1sajpDbR%2BSI3y0iKq%2BfOywr1t8Z9EaKwAiBhdZKqxHcu75Zbde7scwnyZ5h39hXzEJSXAP2%2BDjYJBCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeLELsI8QB6EiXLLkKtwDr31il%2F4HTevREFO50BbEOARhbrM9beZkTqS7nqSTUXMS5vz4AAkau5Mf92B%2FL68IrrZ0rDbOTqV%2FMfEW%2FS9cerSITHhQ8upKdLQxFdrPuXPKvUu7VorFpdKfFFTMokIFDnls0dhR9sab1n%2F7RxpgmWo0OeIsJcff%2FKro12hkIeyilTy8bexWrJmhVTvN09eg4YkJXxypJ5WRX%2BepGi1ouYKpM6B8gzQ%2BK%2F5GlD63%2FxODXKqf9drXFsGtGVYjHtGRdjfM7akfHRYRrs1x6Z5%2FAQdQx106JDwLiiMR6J%2BBvd6pCqcwu6BUNpVimRvyWt276B22orZ0lJIipLLLzwB6k3YcT%2Fr6V%2F3YkUmy52t8bBWf8O5jwFeG5JtmIXeaKKQFkcKCvj7QD47JewPI4VG8U67mY7h76itHMoeg5pwaMRYS80LwgHCRBI96RXcWDT9dznLrl2gthhjAuFEYHCfpeUQSdfZ0PuLarRhimeCq5WW%2BsB4faDR9ymjwmFyPG0TvfRfgEOzmK8%2BAneKMVSyw%2F8MlMLk3cH%2BP9hg8WAomdC9jUXB4ALMdYzxx2%2Fxxk7kZIUsqmSOOQWdG9dYc0O1jzsWqWbiShLC18Yvj8F98mcc%2BW4ZgQKR1545OuwUwy%2BCevQY6pgFFzMozzjlgygEUznJ6FNUZD5M%2BdTNzFDwc9ep%2BsXyrKbL%2FyR3Lc4x4Ls7NuYkI9M1PuLOoENC63YNKITIger2bU6ImaYIzscSiT%2FdFqwxhoKjKUj7G1d9LvyvCOO4fXJDJ0i2d0tiqC6D3mAE%2FqoXnhSx06d8UzXorQc3CUTKMGSK4E9dTML6naL%2FwS%2FkssDpemcBijH4Pw3jMHTYGvLMHPMJ3%2FZa3&X-Amz-Signature=f8ca10c6c733d6f9e6895f2cbfb0521139fde9b262077f0bf6f7937bb8b6e9f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBBJZJF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDnDgfKB9mf%2FwPR%2BZ7b12QMo1%2BV%2BDaxQAkae0YJ3BqkhAIgZbp3ao2iVSXx0ia%2B%2BMJ19htuTGYxicCamSuaYH3iCPwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqp9K%2BEhTrZGkECHSrcA33KQLMrlhWfGPKZVzU9a%2BTdZdZWrZwuHNZWY7AHjS8dZVwCjiDImrnKFJnCtW6CAYjaOVrq95qUq30d3CKTZ7blCZMmrJmJUPK2D0668YlwAcM6lLbdOf5tptEt67GRh07hACEGi3cKOMzwMe7kfHA61W6uwRb2jcrbHjZd07lGbyDsn69p%2BEQBhOgER4yGrql06BvIUHuVNdI90iUXWrmz4jKwkuMfUFiKAZPLaFWCvlO84KXEkn20YttCTZJ%2F29ozqQytaeYzPr8TOqTa08F2sAA7GSmQSawG%2B%2FWHgt7EplhqOwoCSzt8wdAzDCUZFxBb5SAWQecf%2F8vpJ6MgzQQEm5sj1NZZsrRl4mj7tYhSz97wf7RM%2B5tecfZzwEl6qaui6WHDDDzjHupdAsC5af%2B2dpmTlT%2BsjOYAZQED77V98HDz2d0gda%2BF%2FGn0dCI%2B6O16McdN%2FfwdiVcxTav0t9IQ7MXtEjfdds%2BZ06JKbg%2B9PvB64It%2F6eBAHU6ykFtXNMmPI0FwBLKuA9tjItHBjimn0T1kQPWz%2FZ6ZzHJaJ6p81%2FFMxASgJMqoxUqrCeQC7%2BxLl7MQZB5TQoHcLH1PXdJX%2FM2VcKAXxnurVzGRubdmztDRJvywvXoRcPqDMKPhnr0GOqUBqqS9BGaba78XErTNyqAE9WjYYIqcPM1jwz48TKbk125UtYlYWnoYBXQH7ci2y0SB63DNW%2FKRMRIDaSQaY5EWoyP32CoDmp87BF7kDknAXeXfl7ZFvWwn%2BfhswlWKIsX5cTMGmwpQGfLJlPuEhpONNKynqJlmMz646HfYsf468X%2F0jkEi%2Fu06JhUu1Ypju7vd%2FE39Yx43sEm%2FRieCtQbh8CCpPbGC&X-Amz-Signature=156cca41bbe94880a93d7712421412c6314b0dfa467dff985d5608b7ce62b253&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPGUCJ7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD9psKu1WGbfU%2B678f2%2B4Kgcjs15biY%2BatSNp1ZKNbfIwIhAORYEXXYK84g8KmwnibAOlt047PVy%2BaAh7t6mfPYF1ahKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAX4Tno11TguRyGXcq3AMeEYaGYbnEQjDW2rZk0s2JpqogrBE5A5c4UU2PrJ1Fbz5I6YQGvleZePyFDMQprBZaF%2FErQ83YwUjf1X7g6KqX2qiSpy2ZAJmIOf6D3%2BjPvzzlbrJzwhN86eshK7z8dRoVa%2Bsn0EXZvaK4%2BheY1eGdNbPbcdiPhF478JYSaDkkHkaFBF6aqfYjnPQr%2FhwJ5Nmwm25j7EvLTRwpF6iTeNEr6FftlYkdWJB%2B3%2BACbavK42h7ecUTm6tNbfaFGOgVknqyPczne34BCuGL09tyUIB4HJ4gwVZSbSHK%2BbrGghEFq0tVhyZRonJfMZOrOQK5SiAwFo8ovLokiZv4iW%2FvLq77zdap6Ab1lWNF5JCSIL4PzhJKHF5DNHjD%2Bes5YG0OTEXZa%2BFOAGpuHm8LvmMY%2BUDyG3DWNefKCVnhdI0%2BQdYL5MIIYOmmL7Mt54WOkwVNbpOGWEGen6Mcv5kNl0%2BnHSEZTncBY5GI7WNt4d21HOcoOexwjhGV1NfqzKuSPK9sgMf1i3Z5xckwPFGNKf3uvegbYBZS8hn4DV72WTYVQoWvhJP%2FBOS2KEF2BTOwevtOfhbuf7Ee%2FxPRn%2FqxXP6hNBQIuwLHGedlsaa2jCYWohP4mIMlVgPqd0YgNaNZWTCx4Z69BjqkAdKLfIr9AguQTkpZSpMi44LtxgnMNJ4vYZGBrbJqFp4VAtjCQL%2FEdY2APaLdH6%2BsbuK7lNHpALswVwEgLq0zOe35tM%2FXZr6oXOG8lRXMMJ3jOatQOZYpKj6dk0XG1qfzRQpj%2FA0pJ6pD0VdsSXSnEjiesRrQVlLAKJFgU%2FAJ5RcNo53lZod%2Fxi91XBK5qrjZ2vEZNFEsA9GtZmVF0GkGaCa60KhL&X-Amz-Signature=13cdced72ccd962b44dd2e6add6beff7b896713f1e9a472063276336e064ac45&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNLWWLU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFG97VsYf6hx1sajpDbR%2BSI3y0iKq%2BfOywr1t8Z9EaKwAiBhdZKqxHcu75Zbde7scwnyZ5h39hXzEJSXAP2%2BDjYJBCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeLELsI8QB6EiXLLkKtwDr31il%2F4HTevREFO50BbEOARhbrM9beZkTqS7nqSTUXMS5vz4AAkau5Mf92B%2FL68IrrZ0rDbOTqV%2FMfEW%2FS9cerSITHhQ8upKdLQxFdrPuXPKvUu7VorFpdKfFFTMokIFDnls0dhR9sab1n%2F7RxpgmWo0OeIsJcff%2FKro12hkIeyilTy8bexWrJmhVTvN09eg4YkJXxypJ5WRX%2BepGi1ouYKpM6B8gzQ%2BK%2F5GlD63%2FxODXKqf9drXFsGtGVYjHtGRdjfM7akfHRYRrs1x6Z5%2FAQdQx106JDwLiiMR6J%2BBvd6pCqcwu6BUNpVimRvyWt276B22orZ0lJIipLLLzwB6k3YcT%2Fr6V%2F3YkUmy52t8bBWf8O5jwFeG5JtmIXeaKKQFkcKCvj7QD47JewPI4VG8U67mY7h76itHMoeg5pwaMRYS80LwgHCRBI96RXcWDT9dznLrl2gthhjAuFEYHCfpeUQSdfZ0PuLarRhimeCq5WW%2BsB4faDR9ymjwmFyPG0TvfRfgEOzmK8%2BAneKMVSyw%2F8MlMLk3cH%2BP9hg8WAomdC9jUXB4ALMdYzxx2%2Fxxk7kZIUsqmSOOQWdG9dYc0O1jzsWqWbiShLC18Yvj8F98mcc%2BW4ZgQKR1545OuwUwy%2BCevQY6pgFFzMozzjlgygEUznJ6FNUZD5M%2BdTNzFDwc9ep%2BsXyrKbL%2FyR3Lc4x4Ls7NuYkI9M1PuLOoENC63YNKITIger2bU6ImaYIzscSiT%2FdFqwxhoKjKUj7G1d9LvyvCOO4fXJDJ0i2d0tiqC6D3mAE%2FqoXnhSx06d8UzXorQc3CUTKMGSK4E9dTML6naL%2FwS%2FkssDpemcBijH4Pw3jMHTYGvLMHPMJ3%2FZa3&X-Amz-Signature=2f865ee057d9e391632b6cba4132524f564df11cd1361888cce700ddcf725542&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
