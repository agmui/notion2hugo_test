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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTUWHRH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZKacE6GVTXSwa8sOAgm1nc1FRWWd9ah0sKN7zjAJA6gIhAOpfZrcH3uADozMQwQF6chjLQXJGgh5t3eNxQaYuC4psKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbM4BQAjwMF9mTpesq3APGbF%2BeTDYd4W2tNoyUS4ltQqNXHhXYBpjmINoeDg4ZIQ4OMs%2B2pn%2FcRbHu3oKq60KBBLNlEJ5vir6%2FovfLtSbkJQetzQUbE5IYrLyq1AoWI%2Fo5gmy5m%2FN6f%2FvkD5fjzZHiXbfcSVl%2FymrKtrYORp8n%2FvQUFXLTUsf1jsYQyp8PiRV%2FPqiJ%2F2XiR5AhZURNzNZGmkpmcQ9evOXt1IbLlalIps33Nbb5Pe1F2%2FQ0TwHJLEa6AOEIr0KZjXVNOrufkibaiHC1YNkbwdqbs1CNDmTqCalm9np085Cv9gN3sFrlPltQtwhmqlJva4cWS%2BTJv2z6TLYAMPXOXxIbkZBro%2B08ZKL53CasERI6WDG%2Bak6wCfZK5SXMjrZQHxMkBToV3QQZWnV%2BBfN%2Fs0cGoBV46rubf9nfmnEeOlvdeo2FDrKWkQoXggbkCLWSe9gT2NoDyH5JduIJC5o1bLQ6XhxhoWhCRCOFYw8BWcVRbxomJozR9%2Fg9qKn71EE9XP1sZ7FVPY2pUVPmRovtS8WEQEQ0Q7TWL1br4Mnv%2FVJgAzSBDHYnACkObVLt29WQqaQEg7sp2AciRa4R1X0xdlqbZBcXZr2YMV%2BX%2Fa9sSrITVnPTuyWYxNUw4TySL6glDbT2JTDu%2BJC%2BBjqkAeLcQcvzDuAyuM23471VWLrV3LaLf6NWacyGx8Z%2FDk2crzm5ih6bay%2BULKVx833H7NnR3R9QMIUq38lJLykJgPUlhKQKeZlVabzpm0ZTyOmSS9MFrmXO5%2BVauQJQllzlPVFPZNGVsIqBUEL6pv9QGT5i4Ue6etIJT8%2FX62eWZjieBY5YX8qRBjJ%2BUAoC7UcSYP2zm9cqqaXOx04VsAXhWB58FjCH&X-Amz-Signature=533d17c14decf0f156287062fa419415a5b317889e8f5b733010610079caf84d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTUWHRH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZKacE6GVTXSwa8sOAgm1nc1FRWWd9ah0sKN7zjAJA6gIhAOpfZrcH3uADozMQwQF6chjLQXJGgh5t3eNxQaYuC4psKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbM4BQAjwMF9mTpesq3APGbF%2BeTDYd4W2tNoyUS4ltQqNXHhXYBpjmINoeDg4ZIQ4OMs%2B2pn%2FcRbHu3oKq60KBBLNlEJ5vir6%2FovfLtSbkJQetzQUbE5IYrLyq1AoWI%2Fo5gmy5m%2FN6f%2FvkD5fjzZHiXbfcSVl%2FymrKtrYORp8n%2FvQUFXLTUsf1jsYQyp8PiRV%2FPqiJ%2F2XiR5AhZURNzNZGmkpmcQ9evOXt1IbLlalIps33Nbb5Pe1F2%2FQ0TwHJLEa6AOEIr0KZjXVNOrufkibaiHC1YNkbwdqbs1CNDmTqCalm9np085Cv9gN3sFrlPltQtwhmqlJva4cWS%2BTJv2z6TLYAMPXOXxIbkZBro%2B08ZKL53CasERI6WDG%2Bak6wCfZK5SXMjrZQHxMkBToV3QQZWnV%2BBfN%2Fs0cGoBV46rubf9nfmnEeOlvdeo2FDrKWkQoXggbkCLWSe9gT2NoDyH5JduIJC5o1bLQ6XhxhoWhCRCOFYw8BWcVRbxomJozR9%2Fg9qKn71EE9XP1sZ7FVPY2pUVPmRovtS8WEQEQ0Q7TWL1br4Mnv%2FVJgAzSBDHYnACkObVLt29WQqaQEg7sp2AciRa4R1X0xdlqbZBcXZr2YMV%2BX%2Fa9sSrITVnPTuyWYxNUw4TySL6glDbT2JTDu%2BJC%2BBjqkAeLcQcvzDuAyuM23471VWLrV3LaLf6NWacyGx8Z%2FDk2crzm5ih6bay%2BULKVx833H7NnR3R9QMIUq38lJLykJgPUlhKQKeZlVabzpm0ZTyOmSS9MFrmXO5%2BVauQJQllzlPVFPZNGVsIqBUEL6pv9QGT5i4Ue6etIJT8%2FX62eWZjieBY5YX8qRBjJ%2BUAoC7UcSYP2zm9cqqaXOx04VsAXhWB58FjCH&X-Amz-Signature=9a132a3fbd733325003af73b0405aa77f23df4ce0308fd060724793304c13a8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WT5SYMY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5hbBmlxHR9yzN4zJEE3CE4pXA75XoncZqV4pISUtGPAiA7NSoapYu5u%2Fi6bD3%2FSjD5N592DokfFBK2wkHofIybnCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQQIeWbCpbQ84e56gKtwDjgpSi3xXMz4D89jTbtmyb%2Bidk70MHeDZarFbnfmQVZwy0HE18a4BC%2FJmbIFjywmNhIw%2FnYizzCUhy%2FGSnTgCA06EnwoO6IzyoGggB%2FzNwCc54ydlx6WW43v5tTNO8gIitKbxwGNlXK3H0mfjPVmQvbsVpA6B3UxThyN6ZzycQm5oVqGDihwgG6g%2B3S0qnnhaSUMGlIjgdIdUEg73uzUGTCxwYKvxBbrW7h6uk2vYINnhIUCM2a4vWrHdSLjrKzqsn5irnIDem9kMls1Guf2bi0C5je6LYpDpHO9ejIZtN4Wch6lNPu%2Bh62N3KaIiXUAvF7R1rcn0XvOLiesUQGxY5rJQbJZO6j4BeXf1f9m%2FqoAcqzFOC8iyZMSjBmq97cIp8Eq6fzqcGDMvF3rFXYiY814rkCTPFw3jOzmNK9nen%2FKRDyh8NMIbeX6t6wtHm0aJ%2FwiVJZRzCWIG2AKtGlJstWjZGbExNucDA%2FL2xr37SEz4xGHQMli2scpeE9LIZ553fwMGXXEanys64G1k8uyjcKlzBPOOV3HycW95%2FGKQzR8lew%2BLoVchdpRnbsBS%2Fekb4pBMqJbT3rNXRk%2F8fANu4OQpdny9JJ4QPzi0rLcmqPSYc%2FVwfsVIViVIcNwwuPuQvgY6pgFkF5R1yTPjAKM8SyjFsDfmBecenNJRSOZtlrKFFx2OSeDbGy%2FKXgFFd7J1OGE%2FpcSvItQj6BD%2Bg%2F7snjvc9nbM78iV4TBrU9pSf%2Flqjw61x8J5K5ekTg5uVxNGmR10%2BYg9WYLShIdoU9UEEUJIQLdXul1jVxa4snezq5mSPHWQASdLpbAm3yIdf62NhLdCgHHwgp%2Ff4PupErIEXc7zR%2F8V%2FvpqQ0xm&X-Amz-Signature=2e8ac4e46020df9462a55ca3bc7f1682b2d51267d360ba383705e2f379121a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZLRTGBN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrcWmZwzfhA5UIqIyE%2Fx0tEFFFQf9ktA38OVG7DFjl8wIhAMeMo9cj0f6omlTjfULzAQp8b%2FvtlCNo1NirnsgDws6xKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgiZ2%2B%2Fuli3kLPTtEq3APFaLJb1jd30ycHwVXh4tMQn4rBW4RbBKdiYiYefn1EewkQQDBGJ96nhIsC3GOVGi0BiNB39fxFOmporCbY93wWfoa6i2%2BKoY%2B9k2JYKYruZWefRWTKO01OJ8BVxD4FuHgNHXD7lCufRwg4jyfkNBPszfHWgjnvO5h2ngrHQM9N432%2BTfJNgK8q6j%2BEiz3DXsC0vj8D%2FCIQiJLHHz4zKoWMKewA0pm4Qv%2Fxxmtof2cFyHaHN01oEJlTBD6Oe43YfcUErKWJrvEr%2B8%2FqpmLm4ZHj1NVNeY%2FOtHP5Po45OCIw2QkrPOdnt1jNAbm18xxpmDGdUG1b43mEjCgtqhGnWW0ltrsL2hKJef86vxZ6byQpb6pfC7Y2PKTJcVcBVmt7iQM%2BtaWMFz92248a7ye6CJJR2HgkMgtjue%2Bwqky%2FRoezOZ4pyRUASnxVzsJfLbEnMxkNreqrt%2Foxll3nY5ebuKf3Nsu%2BvrS2AGlT4W0uVpBBT6LZK4sQr2dS3D4IVaXjTDd%2FaSSYIJJrmrEvtRFYurV%2BKQOYHbqGrOHr1U%2Fp5ksjxLQyU%2Bp7nMzQBDMb2l2Vq4%2FUIMIUwkel4r6upmBHOne8hV5voiUTU07c5%2B0jJzsXL%2FZUvu%2FrpE6X%2FUL9tjCh%2FZC%2BBjqkAdlurKL8BkHHx5VpZfGIdxOzXAP0yZihSYrphxHz%2BvY5YKRmlkMw4AuNw0QE1XD4ROjsnU1EPyLj3Qq1xO3aLw2%2FX0GkAl%2BhiCQOmfjfgkxmb%2FMF7dmyi3H9xOgtRrt1QzGVSnlqUjiqZCOw0nSy14RuPoKN82c53XMZUyEQNxsc23A7k0jGOOKSsw6Qs37bH8Qdi2g2UiUbqaLsXIR%2BEumNq1sO&X-Amz-Signature=64013eae24efa72da98aeb1c47a3aa553ed42177613f8cd39b66448344f1e1d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTUWHRH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZKacE6GVTXSwa8sOAgm1nc1FRWWd9ah0sKN7zjAJA6gIhAOpfZrcH3uADozMQwQF6chjLQXJGgh5t3eNxQaYuC4psKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbM4BQAjwMF9mTpesq3APGbF%2BeTDYd4W2tNoyUS4ltQqNXHhXYBpjmINoeDg4ZIQ4OMs%2B2pn%2FcRbHu3oKq60KBBLNlEJ5vir6%2FovfLtSbkJQetzQUbE5IYrLyq1AoWI%2Fo5gmy5m%2FN6f%2FvkD5fjzZHiXbfcSVl%2FymrKtrYORp8n%2FvQUFXLTUsf1jsYQyp8PiRV%2FPqiJ%2F2XiR5AhZURNzNZGmkpmcQ9evOXt1IbLlalIps33Nbb5Pe1F2%2FQ0TwHJLEa6AOEIr0KZjXVNOrufkibaiHC1YNkbwdqbs1CNDmTqCalm9np085Cv9gN3sFrlPltQtwhmqlJva4cWS%2BTJv2z6TLYAMPXOXxIbkZBro%2B08ZKL53CasERI6WDG%2Bak6wCfZK5SXMjrZQHxMkBToV3QQZWnV%2BBfN%2Fs0cGoBV46rubf9nfmnEeOlvdeo2FDrKWkQoXggbkCLWSe9gT2NoDyH5JduIJC5o1bLQ6XhxhoWhCRCOFYw8BWcVRbxomJozR9%2Fg9qKn71EE9XP1sZ7FVPY2pUVPmRovtS8WEQEQ0Q7TWL1br4Mnv%2FVJgAzSBDHYnACkObVLt29WQqaQEg7sp2AciRa4R1X0xdlqbZBcXZr2YMV%2BX%2Fa9sSrITVnPTuyWYxNUw4TySL6glDbT2JTDu%2BJC%2BBjqkAeLcQcvzDuAyuM23471VWLrV3LaLf6NWacyGx8Z%2FDk2crzm5ih6bay%2BULKVx833H7NnR3R9QMIUq38lJLykJgPUlhKQKeZlVabzpm0ZTyOmSS9MFrmXO5%2BVauQJQllzlPVFPZNGVsIqBUEL6pv9QGT5i4Ue6etIJT8%2FX62eWZjieBY5YX8qRBjJ%2BUAoC7UcSYP2zm9cqqaXOx04VsAXhWB58FjCH&X-Amz-Signature=fb81c41354d28eec30b6d485bb41ab2c9d8d57b8bb0e95665e47dc0d84a71d70&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
