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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5MERQK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDg12boh9PqdBgQP1BDnJJxfPkwgpdgPYKisuZzIxlLaAiBuQ%2Bl0v%2BLFeOL1Ca833rwU3pRBwxnS%2FVssjaLqqW3KfyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNJwG4s2xX2mSQ2zxKtwDcudfZui2m9lRTxbtCw6lTdyTIMJT0BZO8WllayHWLtyxTdaVKAVQFjqhPQuCDmwprJOxqUtXAo3E53l0r9E3YsJWa1PYGtT%2FNPldQMG8pzVE%2FpFZhC9QIbBCpzARsfGx%2BSplzlWIZyXYLbLusqxFb0PFSbjw6iCgGzOz6boABfXMW9RNb9sr6p7M1TiABp9kNI%2B9LCBGvGMuBxidaDPHqKUg6OtjBex8suLX9RK9O%2FkEbd5qvYhp%2FMEJWlzvLkVAX6MhChL4jLplq0wCHr3wgdMepplE5j7zLY%2FL%2F7BDTog1OlUPm%2Bv%2BboSe1%2BpWzyE8rdapKc5wsA8H2%2Flr%2BVinyB83enj23stGk9JHLZ4Arx3bxWuZNpyzjjBXjUtKvCRK3cxpr7dKJl5hd%2FTMypm5YeTNZU9ZYprFIcOBbPyiDzkmPqVQ22oPodwBePaTWTVvcEZ9ASaXe9oqCHMYAX2FRTSGj6vXf7vLYuHFH1NVeFt%2B77Lvqwahd%2FmH%2B602OIGkma%2FRx5eSrVmm08Hd%2BkPIQNvNqmxdy%2BQ7wHH7fHbqRGA45YCbRWwGShcPxGcLK%2Fng7wxPP4f36eIqfPioquJ048YagClOuFFa9l1SNsXKa5RKnK6f7TQikyzoLrkw8a%2BFvgY6pgF36XnVSTLC0OEaNjYeWlBoDTJGpENI745wZmLCIxHjFJFwz%2FlOpMgjvDwP3JQb8quRJWkyfGi02E2lWMoCmbQNQ9RuJjk2ktDeZ17ffjwTlDWtB2d8gGZwQIpTeHz4rHg9leKi4JLuao0pX62z4XpsMsbzq2m8%2Fmk%2FVhzAtj0yEmMN2k1KyP2%2BVOQw%2Bv7la33H8XlDcj7Vpw0S4ht21eciXmJripiC&X-Amz-Signature=e0f322fdc520094f480fa8f8ee434d633b20ee47d90fa3ef39098b92e15ea521&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5MERQK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDg12boh9PqdBgQP1BDnJJxfPkwgpdgPYKisuZzIxlLaAiBuQ%2Bl0v%2BLFeOL1Ca833rwU3pRBwxnS%2FVssjaLqqW3KfyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNJwG4s2xX2mSQ2zxKtwDcudfZui2m9lRTxbtCw6lTdyTIMJT0BZO8WllayHWLtyxTdaVKAVQFjqhPQuCDmwprJOxqUtXAo3E53l0r9E3YsJWa1PYGtT%2FNPldQMG8pzVE%2FpFZhC9QIbBCpzARsfGx%2BSplzlWIZyXYLbLusqxFb0PFSbjw6iCgGzOz6boABfXMW9RNb9sr6p7M1TiABp9kNI%2B9LCBGvGMuBxidaDPHqKUg6OtjBex8suLX9RK9O%2FkEbd5qvYhp%2FMEJWlzvLkVAX6MhChL4jLplq0wCHr3wgdMepplE5j7zLY%2FL%2F7BDTog1OlUPm%2Bv%2BboSe1%2BpWzyE8rdapKc5wsA8H2%2Flr%2BVinyB83enj23stGk9JHLZ4Arx3bxWuZNpyzjjBXjUtKvCRK3cxpr7dKJl5hd%2FTMypm5YeTNZU9ZYprFIcOBbPyiDzkmPqVQ22oPodwBePaTWTVvcEZ9ASaXe9oqCHMYAX2FRTSGj6vXf7vLYuHFH1NVeFt%2B77Lvqwahd%2FmH%2B602OIGkma%2FRx5eSrVmm08Hd%2BkPIQNvNqmxdy%2BQ7wHH7fHbqRGA45YCbRWwGShcPxGcLK%2Fng7wxPP4f36eIqfPioquJ048YagClOuFFa9l1SNsXKa5RKnK6f7TQikyzoLrkw8a%2BFvgY6pgF36XnVSTLC0OEaNjYeWlBoDTJGpENI745wZmLCIxHjFJFwz%2FlOpMgjvDwP3JQb8quRJWkyfGi02E2lWMoCmbQNQ9RuJjk2ktDeZ17ffjwTlDWtB2d8gGZwQIpTeHz4rHg9leKi4JLuao0pX62z4XpsMsbzq2m8%2Fmk%2FVhzAtj0yEmMN2k1KyP2%2BVOQw%2Bv7la33H8XlDcj7Vpw0S4ht21eciXmJripiC&X-Amz-Signature=1864611f6a98c1c2676c39f7cff7bfa36187890e5ca9599da9036a30d4a5da37&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAD4RWI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCID1rCBcgbPa2drJcirauLy0EHMq8KSROJN7hkGuda8HcAiEA8YC7EwJ9B4qeor2q5eqQDbeSVvYl%2F%2FA018XeypbME54qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQEtBK%2FcGco0lurNircA8JQVnhZ1%2Bc0prtB%2BIPj5X3ybhukWDcQazpR7t9S9O5crXFDOkZcvZIZUyuKpkcmIsJkpGH7BAG1tVPxCUrhUIkbMF%2B11aL6nbXa9tLGUDZ%2Bn2N9Ii%2BJnQjljsC2OuWvfQdxh5g8Fsc3cBTTZ%2F%2FLMHixaB2qERMb8ZD4%2FuOu01pBg4iTvDy5nrbfeoY3usoQpSlHKqnb3buR8Gu0ZWytwSEoX2dFrwbYcyouS1Tcb8kNgpjK1EX3eWpbkwxtepAQ52Z%2BKkKXVqjEgEZk6xP8BMMCpWMiJjSnfcfynEkHt5JLBTDvC6v5yui5LG1rND44TIfyr2YaP8A7ruJs3AQ2cRMzw4FkIOwrh9Hi5UagNmow%2FoK2BSVzt5Wz1jrVszy4LJxHm%2FhxhNfeds9jlJ7QFjEfzaNjsSTo%2FJICNYp1VOEs3J%2F4h81fyoQplZNjgF3gxfp6KC9H1P2uUEEIvpR2Y1mU9s0Tn8VCDqS%2BKDvn5yR5atTLYddHZimbO3sHKwuvG8mKd7FcXrYWnCSJNv3Q%2FZUYCyQ%2FGe4RdlJnGM9cIyDnFqDvSEOWoAPkjXzxEBDXnZLbKaMjWEHA70%2FZn%2BbwQZt1QOhzX2YhN1R22vConbS81wtJWMJ8fvifOVxcMICwhb4GOqUBx9iguN55tQa289A7uSqSwUa88Gt8lA6WlTcr0iiX3yjo8fXMdjTVk6LUHqfTa6lXYkhoYmL%2FxW6Eo4wXjZc%2FCYLiL7Y6JSotubhKGsMHdgImwj6kPUkfUtwMcH%2B0PqsIQttUgfkNw0ZXECWiItkXsl88NWeGxK9z9KPvIF8%2Fq62sweivz03arEy8A0y1qpGg%2FlBgruJyQPTXV04%2FP4jlKtBoFo7r&X-Amz-Signature=06955479f75565b2b228fe3c9c7b3e4c8e6d410094950c98179cb74fa1fa3e16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHDRSRU%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDPMcVKawY4JLYz2DO8KD2rInmkaSvRggoooyic0Zjq0wIgbOHaf9PFygwzDd3vF8xx17g%2F5ycrUGqNTH1SSzTtdNEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrF4h%2FzdnPL2BUuJircA6zlCYW%2Fr4RltYFK0tqYrKJ806QJ5w6Lig8u5YToEV%2BaRTRsttiqj6tG8KugBYteF0n0gZcZdtLyFmY5QHAAIyw8z7AOpXt54BgBcpRhb21I3CoYHspC6mjZy%2FeLKgd8aYlUjdXuZXKCXo87SMDq0guYQZWIT35Y9S04UEdVKFqz5YyPzk4x8PJr%2BtVseDLl3mxkHHPlZJLMMhX3VJ0HiyDFs4myzoWr8E7Ue2%2F8XLUfOYiURJYYoUz5pm5XlWwVpqus6E5IbX8MPUj1djc7P8o0rUMyaZmjCgpnaJKkGEKhIV8YNLHq%2FI%2FuRn%2BkzveEOzm8JMJEEHG7y1Jl%2BgQJVdarlKyE%2BJpHiX29HB43tjR7YQDJ5c7WJ%2F62X9K3HqR83ls7AuOr0O%2BuRJQ1MQMiYEaFkWDK70S1ldrIvq5bahJ39vXx0uK27PpnYkHfjQipoNndrcvGV7fLiGCF38LyAR33PplSR5%2FZoLvifyp%2BCR86GgsjSOTu248MsJv6MQz9OCm5lq307t4I8FFPf7gtzZ0yJTGens2OyxAC1DbPyy2qgakk89MwvxZS5GFbL7HC4K9Wukidav6j00ch4oa%2FANE3GLkZ7KnzvQIgaVJRsz0YoHFV5S7S42W9WHSGMJOwhb4GOqUBt9dainRG%2FbEr50ZLNQOY0FjS281jG6hwaHg6tX%2Fy2ZDCF%2BB806j6OPvkK0CDuh6FjSF3WkGxfllgNjQNOtLOEGS3PPOLZRYIt6Cs%2BE9mthmFi%2BodkKhNjBynIfsepinNzEyEk%2Bmk4n7fg8mY0zeOMw%2BU8fJzhbB%2FkN68wJmJ8EJjsUAMotZs7eCRNlq7nrKms4l6kYa%2FupMgdl6zeM0TTVpNnpCX&X-Amz-Signature=110bccad3c2ac2ba39d152782cabe8c94140a8c7a6aab94005de4d3da456c318&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH5MERQK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDg12boh9PqdBgQP1BDnJJxfPkwgpdgPYKisuZzIxlLaAiBuQ%2Bl0v%2BLFeOL1Ca833rwU3pRBwxnS%2FVssjaLqqW3KfyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNJwG4s2xX2mSQ2zxKtwDcudfZui2m9lRTxbtCw6lTdyTIMJT0BZO8WllayHWLtyxTdaVKAVQFjqhPQuCDmwprJOxqUtXAo3E53l0r9E3YsJWa1PYGtT%2FNPldQMG8pzVE%2FpFZhC9QIbBCpzARsfGx%2BSplzlWIZyXYLbLusqxFb0PFSbjw6iCgGzOz6boABfXMW9RNb9sr6p7M1TiABp9kNI%2B9LCBGvGMuBxidaDPHqKUg6OtjBex8suLX9RK9O%2FkEbd5qvYhp%2FMEJWlzvLkVAX6MhChL4jLplq0wCHr3wgdMepplE5j7zLY%2FL%2F7BDTog1OlUPm%2Bv%2BboSe1%2BpWzyE8rdapKc5wsA8H2%2Flr%2BVinyB83enj23stGk9JHLZ4Arx3bxWuZNpyzjjBXjUtKvCRK3cxpr7dKJl5hd%2FTMypm5YeTNZU9ZYprFIcOBbPyiDzkmPqVQ22oPodwBePaTWTVvcEZ9ASaXe9oqCHMYAX2FRTSGj6vXf7vLYuHFH1NVeFt%2B77Lvqwahd%2FmH%2B602OIGkma%2FRx5eSrVmm08Hd%2BkPIQNvNqmxdy%2BQ7wHH7fHbqRGA45YCbRWwGShcPxGcLK%2Fng7wxPP4f36eIqfPioquJ048YagClOuFFa9l1SNsXKa5RKnK6f7TQikyzoLrkw8a%2BFvgY6pgF36XnVSTLC0OEaNjYeWlBoDTJGpENI745wZmLCIxHjFJFwz%2FlOpMgjvDwP3JQb8quRJWkyfGi02E2lWMoCmbQNQ9RuJjk2ktDeZ17ffjwTlDWtB2d8gGZwQIpTeHz4rHg9leKi4JLuao0pX62z4XpsMsbzq2m8%2Fmk%2FVhzAtj0yEmMN2k1KyP2%2BVOQw%2Bv7la33H8XlDcj7Vpw0S4ht21eciXmJripiC&X-Amz-Signature=0b278aba375a6fbb184eef0765378a91e48716dff44a55708e650ee7e0cf4f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
