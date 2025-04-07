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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEKW2PX7%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjjvZkrpnt4h0IyvlodMQ7Y1xa070En8HHnPCdNNEViAIhAOfRfdQIPJDjW0Fo9Qp6lF7F38YnLs%2F%2BjIZaEJCwJx2yKv8DCGUQABoMNjM3NDIzMTgzODA1IgwuqBESB7vdAI3W7Voq3AMDGLHZ540bx0ekuFx%2F2aIxkkkafUy9hHgFgw6uXb3a58IKZ2TBMm2YGIjEFiuVcgnjb4TiZdpJrAZ7xRTCYfC29WOhKk8s6L1VR5Waz7rxhkbcD7KssgIi4wr9TjNV9ds1chne37nbJlTAAwJVZ3xoxRY%2BT3rJ1qlPtJO%2BdfAEhIQ6SpubI2ye8P6faOwrAeJBOm4HxJVlQZdJqG1CusKI8HtIn6t%2B5XQ26pu9yZL%2F3nRiROixJVQw15q2f%2Bu9TzI3EfwNoWBJQkjPR2gogZcHxX2AH3z6l82cR8qKaonQKf%2FMrRafhOcVn%2FMSwtAPZnXKKlu7zSU8e4ICOzl6H19G17IU60sUpFVYvUR7PGviVdr9HjotTRPSDO25mDo%2BIFV9Vhz1bWAlDYsPOZiXZar2BXQbi%2BY%2BxaBUUYAjJhwgRsI4PfT2JSowwCJXudSqQxbHEnUjlb%2B8TkeAZVQhCpvbOBXqpZFFF0iQWaURmd7oXUmbvDVM8VSIaQQSFxiiZ6iGEhbSny2jzwFyeJh0894JUaDP%2FSZ3qHsC11D%2BpQ8SD1Abq0ifnTv96oja1pf8etUaFnGf5RAU1xBgLDwp3RzqLMmrm%2FNszzLRCCX%2FPzPN44IqVs6z5bWQ2r%2B7ITC05NC%2FBjqkAfAPVzylZiVcVVld2Ge13t6O8s4WqS4LGR2ea9hq2qZm7ofaackdKHCoETfSRXs8a1DPSzLEljBL5UGtauASnz9PfUyH06WAVCwE0PC4nteFfDUOwy%2Bi4SSKb3eSobsxUwk0QIoEhJQtJ2Wwv95Eq0O8nE1JET1JeHAm%2F4e06UlJ6gHbXWyHIGEGx1wXC0PVz83yWs8J0F%2FdwQ23y%2BhEqZAYOAcW&X-Amz-Signature=15e64c447755b845274ee34663c81741c41229796b134a13ec4feb40b9140b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEKW2PX7%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjjvZkrpnt4h0IyvlodMQ7Y1xa070En8HHnPCdNNEViAIhAOfRfdQIPJDjW0Fo9Qp6lF7F38YnLs%2F%2BjIZaEJCwJx2yKv8DCGUQABoMNjM3NDIzMTgzODA1IgwuqBESB7vdAI3W7Voq3AMDGLHZ540bx0ekuFx%2F2aIxkkkafUy9hHgFgw6uXb3a58IKZ2TBMm2YGIjEFiuVcgnjb4TiZdpJrAZ7xRTCYfC29WOhKk8s6L1VR5Waz7rxhkbcD7KssgIi4wr9TjNV9ds1chne37nbJlTAAwJVZ3xoxRY%2BT3rJ1qlPtJO%2BdfAEhIQ6SpubI2ye8P6faOwrAeJBOm4HxJVlQZdJqG1CusKI8HtIn6t%2B5XQ26pu9yZL%2F3nRiROixJVQw15q2f%2Bu9TzI3EfwNoWBJQkjPR2gogZcHxX2AH3z6l82cR8qKaonQKf%2FMrRafhOcVn%2FMSwtAPZnXKKlu7zSU8e4ICOzl6H19G17IU60sUpFVYvUR7PGviVdr9HjotTRPSDO25mDo%2BIFV9Vhz1bWAlDYsPOZiXZar2BXQbi%2BY%2BxaBUUYAjJhwgRsI4PfT2JSowwCJXudSqQxbHEnUjlb%2B8TkeAZVQhCpvbOBXqpZFFF0iQWaURmd7oXUmbvDVM8VSIaQQSFxiiZ6iGEhbSny2jzwFyeJh0894JUaDP%2FSZ3qHsC11D%2BpQ8SD1Abq0ifnTv96oja1pf8etUaFnGf5RAU1xBgLDwp3RzqLMmrm%2FNszzLRCCX%2FPzPN44IqVs6z5bWQ2r%2B7ITC05NC%2FBjqkAfAPVzylZiVcVVld2Ge13t6O8s4WqS4LGR2ea9hq2qZm7ofaackdKHCoETfSRXs8a1DPSzLEljBL5UGtauASnz9PfUyH06WAVCwE0PC4nteFfDUOwy%2Bi4SSKb3eSobsxUwk0QIoEhJQtJ2Wwv95Eq0O8nE1JET1JeHAm%2F4e06UlJ6gHbXWyHIGEGx1wXC0PVz83yWs8J0F%2FdwQ23y%2BhEqZAYOAcW&X-Amz-Signature=1ff705d77d0c8d366e78dae0608290af60e06ae28b5c7fd587f2c644ac949092&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKHNCQOC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdxaTOTPZEpkBtwv8aRPSHItybLpkHA3z2BiA6fOwR8AiEA3CkPdsfAa%2FcfX%2BQYVnWN9mZ1RliVZKcd0Bx8sd%2FaDUAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDB3XI4qlMATO7OMBdyrcA%2BOBMGeUmbfXI2LYR9lJdaBTxN4yJhC5JuG6j%2B5uz6fj8XPxf4ATXXV%2Bubj%2B%2F8xWbkbSvFG965fUGOEfG%2FBVL0C1oY9k7dmrsIT4uY2atQG39H54ogqTq7Fe4d%2B%2BmH2V7A0DD06PobX2%2BNdjRFZ8KSlKegyvIf10zEpwIjzSN2zI%2FD41zzRBTi%2BYbRqEruHuq377oIJVUmOyAc5PWNFLtkoUapp6ExGAgydWYTlc4wvMRzzD7TJMyUdKS2vudSIQOfgXwS5H1aqx%2BG3pds0WPKQsz4Bm901hpyI2KvKNPLAsywUO%2FuWtw8iQueILyEvaU1jWCKp2yiiRUA2nmB4Ulag9rZlehNXBoRV%2BK8JPyW%2Bqw5TAWc1BO21K5ynK09%2BU0WCEAQDV4GBnpCOBJmfyMuejtgDTZUbhP1mC3Q7iaOxMkMOfVAiSqVrGu65YrSJfQKWTSc9V1PnjZpLAJnP3%2BGMMKLu12HXNU3EB08zsvidPTJHCSL99LVG7ewJfITBVAPs7Jgwk6ZeQKIo9ltR4SR7%2B81GAiB9kyA%2BOms%2F1emuPbzrcKgG%2BnM52xMl7TbWxqSakA9CgER2%2FTK7u4kTwuq45KSimB4nuZKHZuBjLeREXIa4Tw%2Ft3fQzjpNL7MKLk0L8GOqUBfR6NfwyhHMF9BxgiuUGVmxOaDrhHFiAcIM7tG%2Fcz4TdQfegO1840l%2BHs98rrAqYBUDs%2FfUEVK634ieqWMGKHtzKJD3J%2F7avCHg5mcEMuFoWzPzNINdt%2FU0sf%2BbAkW8eQOLQzX46mPhyZ%2FT2Wjt65O9zAqXogoDkyfucmS%2Fuw%2F1sLW0nWXQMvuKSfBDGgQaLO6rltVF3AolLi5A5aFfiyEIIVqLOy&X-Amz-Signature=5eb379f796928a3852556da044b6e0d719769356e41a205f6e140d11393140f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UDZVAZ5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8L19llu8%2FxYLt9CDlaEOVWXc2%2FdtXO3gD8G2fjmGhKgIhAIRWGWOVTJRXL8ygZaTwweq8a0y71yL2BIwLfybIOTmGKv8DCGUQABoMNjM3NDIzMTgzODA1IgwKRtdChE1PUrnhgGQq3APjxrYM9kWfrSD%2BTIC%2F5OeZJz4xFzmK3k55GLXzFIUZjSqAG9HzcG8SMx7GXdB5Z7HcbRleCPnlo7VKm4vcMGN3mXSUt5Ah2cNQhBvnWixHsDTXKoieOUhBieXBQUXxVOvrgyCWW9ZaxoIx8wRggJs8C8d3edHXZxRqEQHl0dYU7Rw%2FWX2uKZV3baXgsU%2F4A9JQPTq9dJA71JzofPDeZ2Zj%2BquVO6Wq%2B2PYrtUvVGJtC8c6ZlKSGlhVLmr4zu3uwwsn9rjj1733leSAMzJffKrwyFedx556TsIY2ID6mkW4aTVjWTCDw98ppn6lQdXwpGbskxv16t51GaYyINnVeOkPsJ5Jb525GiljaDbWBotEJXNTBuFJ8FcjkkFVyap4solubbOLgCm19nkNm30Zy1PDJ04u5z3VEir%2FabptVFP5v8CDABxdUqYtotUmLXwqXS4W1yT71%2FYbAFY7VbWRXgZHtqzclWFWVKpWIadkfaNPrvLMeuIItsNBm48a%2BfBmQz52xqA0MYUHaKVSej26S4IjOiGT0Rb%2B0V71zCqHM1nCMF2IZtwjEyrA%2BbkeMIKetVuDRyFHVXgJvTfDjja8In6sGUlfpGGrqI7peURGedVrXDDtaItzDMsa55hhwzDH5NC%2FBjqkAcUK%2BS3VM%2Fm1hd9EJn9M4JoXv%2BHDQeuXH%2F%2FRPCQ6TMFg0Xz7Nytyxz4JegFZT24DzPaD3IUfm1lJO3hIO1ixfwFnxMicAZrVbanSJ7%2FgLS1GEhKt5WBeYbI3cGEEOmAviCjyQYl8ofOCBWKe9oMrpxe3otWrp5aPyIqJXb%2Fia3X3hV63UDJGllBfaFheAJadonarMZ6NQAcW1sQ%2F29%2BKJ%2FUAmhIL&X-Amz-Signature=5fa26a94a59ca6430257297d598bab7f1956a40a8927bda4ab92fd5e96007066&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEKW2PX7%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjjvZkrpnt4h0IyvlodMQ7Y1xa070En8HHnPCdNNEViAIhAOfRfdQIPJDjW0Fo9Qp6lF7F38YnLs%2F%2BjIZaEJCwJx2yKv8DCGUQABoMNjM3NDIzMTgzODA1IgwuqBESB7vdAI3W7Voq3AMDGLHZ540bx0ekuFx%2F2aIxkkkafUy9hHgFgw6uXb3a58IKZ2TBMm2YGIjEFiuVcgnjb4TiZdpJrAZ7xRTCYfC29WOhKk8s6L1VR5Waz7rxhkbcD7KssgIi4wr9TjNV9ds1chne37nbJlTAAwJVZ3xoxRY%2BT3rJ1qlPtJO%2BdfAEhIQ6SpubI2ye8P6faOwrAeJBOm4HxJVlQZdJqG1CusKI8HtIn6t%2B5XQ26pu9yZL%2F3nRiROixJVQw15q2f%2Bu9TzI3EfwNoWBJQkjPR2gogZcHxX2AH3z6l82cR8qKaonQKf%2FMrRafhOcVn%2FMSwtAPZnXKKlu7zSU8e4ICOzl6H19G17IU60sUpFVYvUR7PGviVdr9HjotTRPSDO25mDo%2BIFV9Vhz1bWAlDYsPOZiXZar2BXQbi%2BY%2BxaBUUYAjJhwgRsI4PfT2JSowwCJXudSqQxbHEnUjlb%2B8TkeAZVQhCpvbOBXqpZFFF0iQWaURmd7oXUmbvDVM8VSIaQQSFxiiZ6iGEhbSny2jzwFyeJh0894JUaDP%2FSZ3qHsC11D%2BpQ8SD1Abq0ifnTv96oja1pf8etUaFnGf5RAU1xBgLDwp3RzqLMmrm%2FNszzLRCCX%2FPzPN44IqVs6z5bWQ2r%2B7ITC05NC%2FBjqkAfAPVzylZiVcVVld2Ge13t6O8s4WqS4LGR2ea9hq2qZm7ofaackdKHCoETfSRXs8a1DPSzLEljBL5UGtauASnz9PfUyH06WAVCwE0PC4nteFfDUOwy%2Bi4SSKb3eSobsxUwk0QIoEhJQtJ2Wwv95Eq0O8nE1JET1JeHAm%2F4e06UlJ6gHbXWyHIGEGx1wXC0PVz83yWs8J0F%2FdwQ23y%2BhEqZAYOAcW&X-Amz-Signature=7905e1e30d1922a1cc9d31688e0f2fb70c17e224935845b5ecdcf5be5a9eadea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
