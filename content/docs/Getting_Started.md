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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5K4OKQU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDLD9y8qhqmdifXJCKzEFgt2oShBtDP7mEiHkrfJNi5ygIhAJatGsjWUVB59LNWHodnjoCH91GM2mOR8Klcilx9Ylp5KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyySqzsZlNGToW3UT8q3AN4a%2FYBiS5UKicIedMkUedTR2xeDWruc8bzMsW42EI5biJq%2Fkeac0FbtHCJ85qbtffMjTw3QK0nXm7Q0EwIxC36%2BmsnK%2FznNSRO6Z4ux3uCIk7M3qnejrG6akBC16rzoTc0%2BlBNVF5VR1L0ZV1PHFFq4AAm2ioZY7jmpzz7%2BVHr3fWcOREQ930xWS4IyFYmmuH1ozwNDRMj23btCXYWdzWRAwK7KmlsFS4o%2BsuCtJPAie3aTByjauH9ozjgAWO3zvaiw6bOEBiTRmf5XNogi6W53PHUzuU5bx7TRzItTK4TeeBXhcrAKNmG9vLxg1WrGm7BJ0n1B8Mb%2FKn%2Fubjx5SRKmKg88kCfR0HWyXX4%2FzfNqWq5SO0ZkHdxhIs3r1i%2F9BTwdJeTGks14Iw74lmlbAA1aiKTJtt3ebysJiJPYnNHKllLP7g9cPDT%2BRQN8%2Boxg%2Bka6O%2F5pT6X3dHLE2PaMGqEqL2fMNCEa7ruUpFc2a8mMJ9tHNlpt3FUF7kNKobN%2FpFkhOy2%2FhO3F%2B%2BW7YyvhvnvRG2jKfyWXmiMhd5%2BFZ1Xn4lEqcHKLUNJUTuABVZma7yrZQy0X5ZZCVlyPA5Se1HoBmmW7Of6OMSLHfXqWaQU%2FGPkqu2dBM%2B2sdSoATCqhZrABjqkAdcZyuTm0n93rhfgVykgWYGEfXN9Hc5sKPlEXHYWljmR5QQ9HX8diPC%2FZxh9HZlTF5v2xQfz6S6OYbZyy4K4uh7CBWqqGJF0tHk7%2Bl9i%2FsmA9Wl%2FQOd32vz4pGAoOxRCZvrDVecfHR5jeMLWf9RJ9DUBEd0pq8sw4anvsNuFL9YMzV%2Fm5ZYjX1DR0vrcWaguP9Yli2OLJFyMDS5guy5Thl4S6dMb&X-Amz-Signature=2def0e7bbd5200405c3cc91426c536b85bcb4f0c8a5cf3adf19de05efc5c0537&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5K4OKQU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDLD9y8qhqmdifXJCKzEFgt2oShBtDP7mEiHkrfJNi5ygIhAJatGsjWUVB59LNWHodnjoCH91GM2mOR8Klcilx9Ylp5KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyySqzsZlNGToW3UT8q3AN4a%2FYBiS5UKicIedMkUedTR2xeDWruc8bzMsW42EI5biJq%2Fkeac0FbtHCJ85qbtffMjTw3QK0nXm7Q0EwIxC36%2BmsnK%2FznNSRO6Z4ux3uCIk7M3qnejrG6akBC16rzoTc0%2BlBNVF5VR1L0ZV1PHFFq4AAm2ioZY7jmpzz7%2BVHr3fWcOREQ930xWS4IyFYmmuH1ozwNDRMj23btCXYWdzWRAwK7KmlsFS4o%2BsuCtJPAie3aTByjauH9ozjgAWO3zvaiw6bOEBiTRmf5XNogi6W53PHUzuU5bx7TRzItTK4TeeBXhcrAKNmG9vLxg1WrGm7BJ0n1B8Mb%2FKn%2Fubjx5SRKmKg88kCfR0HWyXX4%2FzfNqWq5SO0ZkHdxhIs3r1i%2F9BTwdJeTGks14Iw74lmlbAA1aiKTJtt3ebysJiJPYnNHKllLP7g9cPDT%2BRQN8%2Boxg%2Bka6O%2F5pT6X3dHLE2PaMGqEqL2fMNCEa7ruUpFc2a8mMJ9tHNlpt3FUF7kNKobN%2FpFkhOy2%2FhO3F%2B%2BW7YyvhvnvRG2jKfyWXmiMhd5%2BFZ1Xn4lEqcHKLUNJUTuABVZma7yrZQy0X5ZZCVlyPA5Se1HoBmmW7Of6OMSLHfXqWaQU%2FGPkqu2dBM%2B2sdSoATCqhZrABjqkAdcZyuTm0n93rhfgVykgWYGEfXN9Hc5sKPlEXHYWljmR5QQ9HX8diPC%2FZxh9HZlTF5v2xQfz6S6OYbZyy4K4uh7CBWqqGJF0tHk7%2Bl9i%2FsmA9Wl%2FQOd32vz4pGAoOxRCZvrDVecfHR5jeMLWf9RJ9DUBEd0pq8sw4anvsNuFL9YMzV%2Fm5ZYjX1DR0vrcWaguP9Yli2OLJFyMDS5guy5Thl4S6dMb&X-Amz-Signature=47da1b26e1573b8df104cffb512ba42515c4213c53767f18c0565498d3800e80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNYRLLWB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFoNOoE35C6rDy3jlmyNYjFXOWYYwmHEBlhlrW592M%2BrAiEAve62Wn90EBtAVfP0XmCU2yNzaxcC%2FBye73%2FnjfFDf1MqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHNANHPPi0SW8CBXyrcA4QOVrd%2B7UBXkGp5KHwSmQxyx3%2B9%2FTkBIcS1ehjfHQRB6N5upaLVAR9lhwr%2FpMxAO5%2BKz4%2FJQxl7AyGu1sjoBVu0KFuLvkFdVIrKuXhAed4jY4M9KCVm2Mwl6E8twNyV%2B1uyIAk1YJlHcKZGLBS06J5B8rndB3rIDuyKDxQi9lRZeB85niMjQMuqiblhHg0LOJX5x7uwOKWApDncm2AxNKa0%2FKojEyF4keZ%2FhPIXESfI9YhPbVc7T8qLZnj0SCEhIivAsW6luKnAKUQq7VKy24l%2BV7QvFSqZE7DC9I2Cb%2BBHRNtB%2FgR0mU%2BthUNmCs1K%2FR%2BjZQazdCgfSzy%2Bk0NYFhLz6RcbZPZ9Gf1Uaz2CfSKxmw3Wb2dYmQBGHl0vhkaQk0b8rsPiQUkrK5kFTe3BF7rDzKCCbj8zHjCa6VJWNHqPQ%2BSR4Dimthe3b6eTF%2BD3JHWjKpyFoUr25Z6x0SsAXIRT36UJDZVOAuo62JYL0EHWy6agy8VJVBAWm2q523FqHipZ5xQ6sp9Ee1pJ81qfyBQT5aBMZuHDc5TaLbEg54hV3XMuuJsyjMyrkmva4eS6CVcL4bwjZEeLsrIqPArv8okg4VLlkRbbzSP5n5%2F0aSbFqnGegqsoiSqYEkf1MKCFmsAGOqUBUcMfm31FxgAFkQF51mvzlM%2FGOsBM9kP4x4fBAPT6l%2BJ84jNP%2FI9KZBWW%2BLl%2F8vquahaA%2BdPQn0tJtC7GVmwxr%2BZFhnvnbxSeM2H%2FoexR2p7rDrN3GYubO%2BbQNyMkMVQvv%2BkAdNVP404phbSRSKFf0TodQ%2B%2BnMlK6MgOFKIf5xdkAw6bMfL7GhvRAdRAQ5GJUk6%2F27k9W%2B8uqcaRhni7GJ%2FAhkZIO&X-Amz-Signature=5e280d78b67e1ef3e02181a42bd93cc73c820089ac7796f037c939ffc801ff3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636EDRXOJ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIA5nb6fNfPR8ZJxeQQYk%2BfF3B1fXQV2%2FvvDD0r6teBE%2BAiAtWuHtZHPKQ6XmGX67P30u6O2Dnv%2Fi%2BdjcwmvnHLatLiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9EWx7WXAYMSKoct3KtwDFoPF%2Fc6ClJQFduwlyKsILb%2FZGE%2BDHDoyteTCCmrW4X7iZa1Dwx0yb8nWslJU26y3KeNSyupug46Kh7c%2FMulFyQ24n1r0%2BeGEU6jK0JDW2Xw0Fwqhk3gKohrCCtXssZbr2w8Xt8QSzRkaIpRT3vBGl8vQFoDqYJP0ZU7N%2FBk9NgUwIIMjemJRDXhsaJReSdi23sVQNw4FEdqn7xFBEpAX8q5ZHDXd%2FITpRxBij1Q3ZhLlJsdB3f%2F4bgN9YRXzJ8amSh%2Fg4159xzuUOvCs7PZlpAlX4JK4%2ByvkrJOGQq%2BKdm5irEY9BotGZB94KyShdv4OCQAOZirDz3hf%2BCnih1SER1BQox8%2BOepI8Q6z%2Bersm2YBununO8Q5xbASuhxO7wDUdmRsmkOkA2rvdMf5F0yIfqmufLZfplS2KcI6lPZOoqM64Ct%2FWRbzVvmcWOADf4%2F5R4taYuuFkDf%2F%2FQzgX9vm1zMpX8tzM%2FIrffLtNcckBA%2FvsEiXdCi9EaqXmkTFuJOIMW8%2FZL3a7ayUiM3uCE59%2Ftg5g%2FsckGjNYCCNtvku7kdpBgLiR6l%2BeN8iwI8LWXqOtzQeIwku6jF6eOHZOvqiQoOTMj%2FXtYYWIpw4sTInvxrhfIGYgfyX9zTZV4Iw9IWawAY6pgGDbd9y5HPjyLt%2BCH06lgKyCnZOXXVTYyhlPO51Y7dGV6e00YU1A%2FP99qdF0xTgZG3EhgfDsEZMYSBI3z7An%2F3%2BIskseTGFlHKfNzWHPmtyqVmZx3FjSTDvOXHfMRxVYpPBGEdyyqhLq9LmdQd0kAKinZSJUMl4eIeU6WlNqkicSuD4pjGHrBJ6VKJ%2FwM2AlLKrzoylyTTxK06U450fbUMdzuU97rxR&X-Amz-Signature=9a81ce8bc237ed846093bb1a9678156d9d56660a850a30460372b75c492d30a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5K4OKQU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDLD9y8qhqmdifXJCKzEFgt2oShBtDP7mEiHkrfJNi5ygIhAJatGsjWUVB59LNWHodnjoCH91GM2mOR8Klcilx9Ylp5KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyySqzsZlNGToW3UT8q3AN4a%2FYBiS5UKicIedMkUedTR2xeDWruc8bzMsW42EI5biJq%2Fkeac0FbtHCJ85qbtffMjTw3QK0nXm7Q0EwIxC36%2BmsnK%2FznNSRO6Z4ux3uCIk7M3qnejrG6akBC16rzoTc0%2BlBNVF5VR1L0ZV1PHFFq4AAm2ioZY7jmpzz7%2BVHr3fWcOREQ930xWS4IyFYmmuH1ozwNDRMj23btCXYWdzWRAwK7KmlsFS4o%2BsuCtJPAie3aTByjauH9ozjgAWO3zvaiw6bOEBiTRmf5XNogi6W53PHUzuU5bx7TRzItTK4TeeBXhcrAKNmG9vLxg1WrGm7BJ0n1B8Mb%2FKn%2Fubjx5SRKmKg88kCfR0HWyXX4%2FzfNqWq5SO0ZkHdxhIs3r1i%2F9BTwdJeTGks14Iw74lmlbAA1aiKTJtt3ebysJiJPYnNHKllLP7g9cPDT%2BRQN8%2Boxg%2Bka6O%2F5pT6X3dHLE2PaMGqEqL2fMNCEa7ruUpFc2a8mMJ9tHNlpt3FUF7kNKobN%2FpFkhOy2%2FhO3F%2B%2BW7YyvhvnvRG2jKfyWXmiMhd5%2BFZ1Xn4lEqcHKLUNJUTuABVZma7yrZQy0X5ZZCVlyPA5Se1HoBmmW7Of6OMSLHfXqWaQU%2FGPkqu2dBM%2B2sdSoATCqhZrABjqkAdcZyuTm0n93rhfgVykgWYGEfXN9Hc5sKPlEXHYWljmR5QQ9HX8diPC%2FZxh9HZlTF5v2xQfz6S6OYbZyy4K4uh7CBWqqGJF0tHk7%2Bl9i%2FsmA9Wl%2FQOd32vz4pGAoOxRCZvrDVecfHR5jeMLWf9RJ9DUBEd0pq8sw4anvsNuFL9YMzV%2Fm5ZYjX1DR0vrcWaguP9Yli2OLJFyMDS5guy5Thl4S6dMb&X-Amz-Signature=b1421d33b6a560d68e5b52abe37ab5b8118f72dae6040080a292f28148d1d0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
