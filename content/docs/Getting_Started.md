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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6BPROEJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2nY%2BOPlIsxNHnsCKopcJHP5hK6s6CeC88%2BnNjYzZJxgIgBnqKYtTMiA5dXy0PmyQF7yAKzUlpts5vJ1KfZ90xq9EqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBbOrO3%2FdzpCX54sCrcA4899q537heiEK1Zl1om27M3XGPYGSe1F4cloptMWw%2BX0h%2FPPjbgR0xBa4eD9MEv0TTjDaJezVQRoikT0E3RI3cXLDY1DqwuWRXZVOTOGfx20YnCkiMHvkPd2qkuMBgwxbfmSa1sR63IvHV89O9%2FRhZhNiDYOh6CxDNRZl3QXiot97FJFWi77Ia5UCf6udHvI7lY%2Fb2joHwyosecTJBsto8%2BqYkzJw1NtmI8JMNkNkf7fx05wh9nHnwMRU6pASd%2BCxsMrQLr0ooXw1pDznya8q7eZlykiWspQt5Grvnemm5%2F4vDJbQwv9E4xKI2b%2F28h6nd%2Bnn9mkBu7bClUA2iuh8v5FMSSRgCwuxpQIrx1cZ4rGkxUEJ0HZbpAAYKOFjgGbGVKWhBWQzOAZY2hNxQC4SxxVz0nnFcVP72FP9pEXJ2U3VsiRfQCVs3sAWkmSymn9HPmH0iXK6N1ebTdBcjvi%2BQmt0wRfhGjY%2FUWp6MCKVAC%2F0SUAoCKYDRkM1dC9HNUDjgiUpX58786R%2FWpNUdJ977PP1zo549Xs92iYbet4%2FVRlBUwXjX3LQFNGtTccyaY5XY6pQmP3Ae4ILyjBC9BOvx3FUbOXrRqmF2a%2Ba18K0UsaulSxa%2F00pdcrsyjMN3rzr4GOqUBXnUq8WEwwqYRr4%2FVYABcm9sVcfEgqj8m3EvwoHoCcxF%2BNnG4oFbDehQa9cQ%2FJYvpHRQ9NzMjXwOYJ1xENeg22AI4Qu1gMGyeM0Ma6Hvaz4YPge5M%2BCkz9k0z40Rk%2FmJuNEMs0LOlyFdXZEZKW9g2%2B1%2BHwSaVtq%2Fv7hI%2FgR%2BSTvomOh%2BKhyhxfCbMjFFbZKNN0IaYhsE7JWReLyJmKK0JaFQYjNU3&X-Amz-Signature=13010079b7a65ff7e2c3a921514abbeb9af9f7cb53cd1eb5939013bbb40b7b5b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6BPROEJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2nY%2BOPlIsxNHnsCKopcJHP5hK6s6CeC88%2BnNjYzZJxgIgBnqKYtTMiA5dXy0PmyQF7yAKzUlpts5vJ1KfZ90xq9EqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBbOrO3%2FdzpCX54sCrcA4899q537heiEK1Zl1om27M3XGPYGSe1F4cloptMWw%2BX0h%2FPPjbgR0xBa4eD9MEv0TTjDaJezVQRoikT0E3RI3cXLDY1DqwuWRXZVOTOGfx20YnCkiMHvkPd2qkuMBgwxbfmSa1sR63IvHV89O9%2FRhZhNiDYOh6CxDNRZl3QXiot97FJFWi77Ia5UCf6udHvI7lY%2Fb2joHwyosecTJBsto8%2BqYkzJw1NtmI8JMNkNkf7fx05wh9nHnwMRU6pASd%2BCxsMrQLr0ooXw1pDznya8q7eZlykiWspQt5Grvnemm5%2F4vDJbQwv9E4xKI2b%2F28h6nd%2Bnn9mkBu7bClUA2iuh8v5FMSSRgCwuxpQIrx1cZ4rGkxUEJ0HZbpAAYKOFjgGbGVKWhBWQzOAZY2hNxQC4SxxVz0nnFcVP72FP9pEXJ2U3VsiRfQCVs3sAWkmSymn9HPmH0iXK6N1ebTdBcjvi%2BQmt0wRfhGjY%2FUWp6MCKVAC%2F0SUAoCKYDRkM1dC9HNUDjgiUpX58786R%2FWpNUdJ977PP1zo549Xs92iYbet4%2FVRlBUwXjX3LQFNGtTccyaY5XY6pQmP3Ae4ILyjBC9BOvx3FUbOXrRqmF2a%2Ba18K0UsaulSxa%2F00pdcrsyjMN3rzr4GOqUBXnUq8WEwwqYRr4%2FVYABcm9sVcfEgqj8m3EvwoHoCcxF%2BNnG4oFbDehQa9cQ%2FJYvpHRQ9NzMjXwOYJ1xENeg22AI4Qu1gMGyeM0Ma6Hvaz4YPge5M%2BCkz9k0z40Rk%2FmJuNEMs0LOlyFdXZEZKW9g2%2B1%2BHwSaVtq%2Fv7hI%2FgR%2BSTvomOh%2BKhyhxfCbMjFFbZKNN0IaYhsE7JWReLyJmKK0JaFQYjNU3&X-Amz-Signature=a5d8ec2f5bc61288b3a4259560d62c974d16209fa459504af92e6ff439c85125&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2TIKUXB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGNuXMn7DUD8KCm42DlqbBXIk1EqBIXUvs%2FGkQ84zs7AIgFPPrICNUNDmV35CbIUDRrmA6uhM%2FMIV3S1a3VeVRp74qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCi%2BqR%2Fwi34y6RQmCrcAyAaNQBMSLq6pC8bz%2B32nb8uDgM0sSvTzTTefsaLAi4E%2BnrUWF71NnoHya68wUJlLrbNsMj8tsCNGTytHpANmVJrYEacjaK3Oi9EZlbnMgB667h2pmWhU70wuILDqQOeVk%2FImWilLiTWwOBXFDzVw9UsX6JseoB2dsyHhKkSZHtC7J86aHVldFy2awVkK7xuOPpA6VzqhrLs7HH1%2B7I4oy4CehBaLQIVToUfDEObV6lZ4RPGcC9ilc8c6IwKwaI8Ug9yqElBNxZUtQJHwKpdt5UrsY26ZQEy2MEiB8HacQVCU9KEw0I2rrjsNk%2FqlWafbHDr0i8eEx4oriW8qWzoZBLgM341ZhryK72vTuJeMTZ%2FPF0%2B3phqV9hEihOVi9VsYpjPoJDCIM9S%2BMVfNsftdMX33KMBWAxsoiTZY8OYTLjQQ9UTXr8xMN8O5CF5p0WLzDqdWW5sFnPwEUv9cNa2vLVZI2qyEE3dOF9hhITbK206mpUGEouk6OMFNd1Cy1e8mZlmWAsl9Pe%2FJtHYGKFEnNVf6JE5L1xfGdF9%2Bdx5JPCwDUPLURGn8stMHX%2BeRRTZNzkzPGwAWqNTqZ4WWk7%2BziMwORgMQ4VUDTNtigClRg7JLuEHhsLjajpOs481MNrrzr4GOqUBtJZraGLOUJchgbGj%2B0CjWyDbkvEYR27Z0Ndaf2O%2FzdDZHx0BD%2BWSZP%2BGG3BTFWr5TuD3xHf0QpC1dalxYD2JTpzFzmS%2FFxgVRnxgIYxmAowH%2BNwDLCe5koseO3UreBEnvN8GZeaZtiE%2B6bJ9zUmqD9QYo5in0xK24HdomdwwoiZ3S3fyLLw38k8VuzrjTPprAn2zZDIxFpBhhzziLzyS%2B1Z%2FmGqU&X-Amz-Signature=a30133ec0f92552b3a7ca0f6b866a5f422a7b04f366b4e095573557d267ece86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66SBNWD%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAbq50O74ZjAxUMLZsNNhmHG%2BMm60XMDEJTLELWF3f6wIhAKUwYfYLx1jM%2B4yW8IiCUeYaVhu9FTlxgcQqRaWuciXPKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkHVoJtnj6r5EUPIMq3APdJMY4t%2BO1wh7GtBR767VWme7Nq58PK8npTa7LQW3fwP1zSD2fyQ1TbwOEGYurZAxa5vKfkYJ%2FYaCMPYKAWLIY039sZMjrxB7L1o4rypAZiE%2FmuoTcmlXyawXzOEtLxuzImQxfPdClktwxshy%2FkVR7%2B7FLOSa%2FPiv2jXKc5FnsSH9A8H3HfwoS9vPyFuOWvmrysAkOZr6HxWnnyDX%2Fet786Ytt5CPLcEhp2LQbotWlskmJgqw4C3v1nqSyRpRHK5MNWBWUYXddg%2F9r8rwLm4LDFPcJ9KwCzeWh6eecMZZmxJTqb8u0iVvfeI86QhJKnCOu06aiEr2SkEIDylTPmo9OKbOYJAQ0WJEl8At%2FApb2FbNzmszWrXt09CwMaozoE1gS4RBQVujhE%2F%2FOT7AxmZLjs5eo7vBjF%2FUX93ZxIdvyeCZdPHaYf3fxmCJOCEuIkTl1NVzVQl%2BtImAMlsv%2Bojx%2BCxyfV47yZU22gPRv%2BM3sx9Q%2F41Qp4KhLYLSzfvLE3bcSvjEpZ8k6d9NkbShoVb%2Fh%2FSxaTvj%2FKApQOvJtIKXlGjk4RadyA8Ev61RJvXXif4Gq67tKiYuYOxTor4bAit75NA0KE4ue2Lzcw%2B%2BolNgr%2FW8bVqaM2h8iszcz3DCU686%2BBjqkAQqT80YNJHl2sbD2oNGZ8tA9cQqBPHe4XG7uv2zohKYbCgotC9tE%2Bbsp%2BWeCbii%2Bz004WOGHgmKfuT83VMUmkb%2BiNgoe755FiR2v0nlBWtn7Smwo7oXI4K5wRvSRRo4mE%2FioGOtrqZbOm1G0xg7jhEyzyfjhff4I9tZQ%2FF%2FFxA9Z%2B7lKa15JW03VQ5P%2Fotwdje28t4nsZCIzk1aToKMiLmYsBONe&X-Amz-Signature=2d201e2812004d008aaa4adaaf89df95a8b0f16c1a8b45cafef0c91764c86fb2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6BPROEJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2nY%2BOPlIsxNHnsCKopcJHP5hK6s6CeC88%2BnNjYzZJxgIgBnqKYtTMiA5dXy0PmyQF7yAKzUlpts5vJ1KfZ90xq9EqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBbOrO3%2FdzpCX54sCrcA4899q537heiEK1Zl1om27M3XGPYGSe1F4cloptMWw%2BX0h%2FPPjbgR0xBa4eD9MEv0TTjDaJezVQRoikT0E3RI3cXLDY1DqwuWRXZVOTOGfx20YnCkiMHvkPd2qkuMBgwxbfmSa1sR63IvHV89O9%2FRhZhNiDYOh6CxDNRZl3QXiot97FJFWi77Ia5UCf6udHvI7lY%2Fb2joHwyosecTJBsto8%2BqYkzJw1NtmI8JMNkNkf7fx05wh9nHnwMRU6pASd%2BCxsMrQLr0ooXw1pDznya8q7eZlykiWspQt5Grvnemm5%2F4vDJbQwv9E4xKI2b%2F28h6nd%2Bnn9mkBu7bClUA2iuh8v5FMSSRgCwuxpQIrx1cZ4rGkxUEJ0HZbpAAYKOFjgGbGVKWhBWQzOAZY2hNxQC4SxxVz0nnFcVP72FP9pEXJ2U3VsiRfQCVs3sAWkmSymn9HPmH0iXK6N1ebTdBcjvi%2BQmt0wRfhGjY%2FUWp6MCKVAC%2F0SUAoCKYDRkM1dC9HNUDjgiUpX58786R%2FWpNUdJ977PP1zo549Xs92iYbet4%2FVRlBUwXjX3LQFNGtTccyaY5XY6pQmP3Ae4ILyjBC9BOvx3FUbOXrRqmF2a%2Ba18K0UsaulSxa%2F00pdcrsyjMN3rzr4GOqUBXnUq8WEwwqYRr4%2FVYABcm9sVcfEgqj8m3EvwoHoCcxF%2BNnG4oFbDehQa9cQ%2FJYvpHRQ9NzMjXwOYJ1xENeg22AI4Qu1gMGyeM0Ma6Hvaz4YPge5M%2BCkz9k0z40Rk%2FmJuNEMs0LOlyFdXZEZKW9g2%2B1%2BHwSaVtq%2Fv7hI%2FgR%2BSTvomOh%2BKhyhxfCbMjFFbZKNN0IaYhsE7JWReLyJmKK0JaFQYjNU3&X-Amz-Signature=859b890449aedb31c3eaf1bb424cb6970a4e25a90ddcdf488095af7b49f673a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
