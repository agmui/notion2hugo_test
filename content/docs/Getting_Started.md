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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLMEE5B%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIG3vK4caOg7t4I9V6NTf3wpfNNQH7GFEtJ3A2ifSmzwfAiA%2FNIbQ1Acn6Ljv16fm86uDv3vhVlZs%2FLRF5mPIQksfSSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAxNsQKAgBn6abFqdKtwDJHOWLuxaYTzrWoAG8L7UjAq99ylux7bPMCjFpeKNtn928sPLRwvdcoYETCn6woNLtrxu7gwk2hwRYDS6IcMSCrlj%2B2moC%2FcB%2B1nRvA7wZ%2Fjz3MiZcK%2F2NMWIma8bOp2ECsw4A8Qv0Z6LJUEiwsVa992SuRKEKVabTQiJAkRv0jpfHZtHdhKadW8oki7NbFhSCgQq9o51d%2FqiqYexXkX%2Fb3BxweEB2SdvoBvB6vyJkHQRiu%2FF2Y7NtR3F6yL72vz2WFpGx%2F14mUoyALriaY4gQDP3af29f%2FHE1Kr2pJyRaZqh0bz33dTDc%2FvwvMUt5Q3yHWaE5GC%2BJS3MQVFU3x5Ffm6OdHbXefNA8BuNZatIRw1mStumj%2BsNSwGdNjOQG6UPegV8J8QnV7ZZSr9Bl%2B8okl8hadyCBPAGmfaOSh%2BaH08tgCNfsIHsMcpe4VKbGz1gi9I5VA2A2uAz1OSnVU7Gzt3QoGXz13523TbOF%2Fzyy0KOR9VgNE%2BAB5uXwWyZqGrSIYU7wnsMMTK1Bpvn2vNhRGf431CD%2Bx1tcRmOv8s9CFc1LufsCJ1bcpuDHdSeekh5xnXFhv19ix7Qa0E0tLFsYCsJ7IkHOenhTHZY1jpsxjzn24KR1cguW6GVQMYwgumzvwY6pgE%2F0qcwv2I5TSmnZKXGl4xW1%2FGpHwFrZCMpo2Qz9EO2TaRNGUJISdmA6F5h3lGrq4Cnl22NlcS84zexlNN%2FPU0jHxTcmQ33a3ZeyC5BQbTFKW4FJSM7HDF0lj4xz3F1x60Kh1LtWb9xKvknzc7g6KJzbC4DtPZd%2BKrHl17YEhzIDyRY38Gcf2jDMOufImU2T9wJd4UQEoCJs8Uu%2Byslt9SS0pq1eTEO&X-Amz-Signature=483329821f8542b3badf4d3138b10496d95836fa68d3f76f7c14f29ff2f9766a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLMEE5B%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIG3vK4caOg7t4I9V6NTf3wpfNNQH7GFEtJ3A2ifSmzwfAiA%2FNIbQ1Acn6Ljv16fm86uDv3vhVlZs%2FLRF5mPIQksfSSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAxNsQKAgBn6abFqdKtwDJHOWLuxaYTzrWoAG8L7UjAq99ylux7bPMCjFpeKNtn928sPLRwvdcoYETCn6woNLtrxu7gwk2hwRYDS6IcMSCrlj%2B2moC%2FcB%2B1nRvA7wZ%2Fjz3MiZcK%2F2NMWIma8bOp2ECsw4A8Qv0Z6LJUEiwsVa992SuRKEKVabTQiJAkRv0jpfHZtHdhKadW8oki7NbFhSCgQq9o51d%2FqiqYexXkX%2Fb3BxweEB2SdvoBvB6vyJkHQRiu%2FF2Y7NtR3F6yL72vz2WFpGx%2F14mUoyALriaY4gQDP3af29f%2FHE1Kr2pJyRaZqh0bz33dTDc%2FvwvMUt5Q3yHWaE5GC%2BJS3MQVFU3x5Ffm6OdHbXefNA8BuNZatIRw1mStumj%2BsNSwGdNjOQG6UPegV8J8QnV7ZZSr9Bl%2B8okl8hadyCBPAGmfaOSh%2BaH08tgCNfsIHsMcpe4VKbGz1gi9I5VA2A2uAz1OSnVU7Gzt3QoGXz13523TbOF%2Fzyy0KOR9VgNE%2BAB5uXwWyZqGrSIYU7wnsMMTK1Bpvn2vNhRGf431CD%2Bx1tcRmOv8s9CFc1LufsCJ1bcpuDHdSeekh5xnXFhv19ix7Qa0E0tLFsYCsJ7IkHOenhTHZY1jpsxjzn24KR1cguW6GVQMYwgumzvwY6pgE%2F0qcwv2I5TSmnZKXGl4xW1%2FGpHwFrZCMpo2Qz9EO2TaRNGUJISdmA6F5h3lGrq4Cnl22NlcS84zexlNN%2FPU0jHxTcmQ33a3ZeyC5BQbTFKW4FJSM7HDF0lj4xz3F1x60Kh1LtWb9xKvknzc7g6KJzbC4DtPZd%2BKrHl17YEhzIDyRY38Gcf2jDMOufImU2T9wJd4UQEoCJs8Uu%2Byslt9SS0pq1eTEO&X-Amz-Signature=bc2e6720815e0e8613358c85e332c2df3ad7bf8ddfc791e7db3518887a9e3ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCJU5EH4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDNDtOizEuxWsdIpK8DWmJ%2BYrQX5C5LJgUrGgnuqYMeqQIhAIxhVDHWTvc%2FdNSZzsrbLNMYy5nmpeVW8f%2B3cydCyGdqKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwADisGcKt9IxKbLBgq3ANVM7cm7N8t8nsEdGct0bCtWjSMkJCHORGSk7IIwrnTBi8efrNhtRuYToBYBAuduhZR1Q0%2BIPwL%2FmEZ7IXhAh%2FDpJ7hHJZ0FendvPw2rtWPsSTbvsElVZhPmKOhQdPii6Kmq714fuL692cFwZySFMjZgott9gng8oHbdLtM7EZ4dviA7vD8SbqWr99q2O%2FH04YcB9a6KZfXXwstmrn8vxkScVGj1g0VakdmRYSmdMcM%2Bdj1W10DxDtmiRgkBcXqJAX%2F8caTKIs7KuTPaXpsmlmQPWYLqyipv0SjPh%2FIJVchm%2Bf7ZzD0iJE9uGisU41U1A4xiX7ZjL7oJUaIKt4dhcP%2FnjLOEupxCzT%2FoKcyFgwHve%2FVer%2FX5gF%2FTCZ5CmsZFMXlP4D7r6xpHrO%2FDClMoiYa3Ovo75BFbZAMo4dpRb5kl5g6Pj5pQuIM9NoT%2B9aNQAfIKgzsAwm6MqPePiZ0vtaiF3nB6OoQNvScgyBmEoE0LqfCVGl2rsx9SAwJn5u0CTFmF%2BbZRm%2Fs3HCV%2FlFdAakwhkND3eXC%2Bc41JiWPew1LPsEXHW3JuOx0g%2F0okl6VWpU021Mo1NRIqN0CNgC6zo9lYCKu4ZXp7%2B7XSICzE2KCkZtfpfZHfNS6D0jsKjDW57O%2FBjqkASlVj%2BurxnahGda2L%2BxQoGaf8ORF9FiTpPyjLJps3B4sykMgcF%2Bt04ota1GBldtqTULupWwYyhOfKbP81K1%2B%2FrghycVMdu7lKVIKID4RlqWyGWXxFaKbicTkcTzs2OhbBo1zNLb3OcGlT9kJFIXLOiCr82clL%2BdZ%2FJzIvPi2xrW13jAv5gorYKIuBgmW0ny5uNbtkrA0xKwxvTD8EO7EUhyOOGAS&X-Amz-Signature=193d5072c954d3d1ddf1df292aba1357f6f238d686bd56db2a66ab46782ed816&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4MA4VU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCtE0P7IplMzQ3l5NOagg%2BDUQz0%2F5wiFZaWDmNgoXIZxAIhAK%2Fhwj%2B8EPHQxXJ%2BkxrKiqHx6n6vNu4DE0OT%2Bs4lv69BKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPEroHr0BhCMRmaYcq3APL2VffEZty3D4kHwEPVGJweUF1oc56KHuHVxN2%2Fn2nBo2jwGvgmh2a5a8dpWax7LQuuCqSe9CHNjcWv9wbuSP9sUEI94JIsaQpLAsWoNSkrx8SHuUAxJ2W%2FvGT60PQfuFQHZ6NVgJgzTSI8wfq1qsb8i7qQbYIMEEaDmM3tTshs3TyW3bxSc4uINZjDeOWkUMwq%2FQqw2qkh%2FrcFnD98zjGV8DHMsoSurkFzdmldQh2QJaKoNbfJG3Hd2%2FyZvPP%2BM9z8dxQfGxGkhkAYan0n47XNbgQ8CEka4JajhxLy6ehQ5yqbfsu%2B%2BML36xtb0SsYBWdWZRjQuxAG84mgw%2F5HqoCKg19CLgH7ekTVBxbyaF2%2FJXALAXq7Twlz7sGz6%2BLy9VWoElq39y%2BhfqZ3uPg0R2l96njmEjWUBxAbp53A6SmedPcG%2BeQsMr8RTJJ7Mc%2FfZPqcpBsWA5thWJjcYaO5O%2Fem6O94ioeHLJ5ZJorud1%2BIW8KcIAWZh3O1XqFkIcGt7H12%2B3IPxhlcJKHyO%2FnY8SYENr6r6CVj6tSXD%2FPtti2LlJdpR8pR05QB02qM9lmcEgCPJGXVnvZ8H0B2GIDDWRu6J%2BKAdiikPQQhs8UdvMBWOWJzPb0B5xc3Q3xZTCm6LO%2FBjqkARWK0NZ8rnZM4khszAB0xVwGAgFS%2BxUxyuH%2BKXURiyGQMOM%2FQVMJyYMKyiJ0CoUAXssa1hO2DgMwVz0Qr9v21uS4%2FeOnozE8OKkuRUYHZeaGxhtxdyI8nLbyO7MGC5VwzPvMxv6WUZPr%2BIbuddBQTNx8lQV6lqEwresjeVnSUUGupUJ4wLRLv7flnXSzGzuH65B2cnho94uMPtuYM3c%2FxkxpQd5w&X-Amz-Signature=39b03d76cf90b0d35f487d5ee15911b86ef82c284be37b9d06874a192e1b4d67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLMEE5B%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIG3vK4caOg7t4I9V6NTf3wpfNNQH7GFEtJ3A2ifSmzwfAiA%2FNIbQ1Acn6Ljv16fm86uDv3vhVlZs%2FLRF5mPIQksfSSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAxNsQKAgBn6abFqdKtwDJHOWLuxaYTzrWoAG8L7UjAq99ylux7bPMCjFpeKNtn928sPLRwvdcoYETCn6woNLtrxu7gwk2hwRYDS6IcMSCrlj%2B2moC%2FcB%2B1nRvA7wZ%2Fjz3MiZcK%2F2NMWIma8bOp2ECsw4A8Qv0Z6LJUEiwsVa992SuRKEKVabTQiJAkRv0jpfHZtHdhKadW8oki7NbFhSCgQq9o51d%2FqiqYexXkX%2Fb3BxweEB2SdvoBvB6vyJkHQRiu%2FF2Y7NtR3F6yL72vz2WFpGx%2F14mUoyALriaY4gQDP3af29f%2FHE1Kr2pJyRaZqh0bz33dTDc%2FvwvMUt5Q3yHWaE5GC%2BJS3MQVFU3x5Ffm6OdHbXefNA8BuNZatIRw1mStumj%2BsNSwGdNjOQG6UPegV8J8QnV7ZZSr9Bl%2B8okl8hadyCBPAGmfaOSh%2BaH08tgCNfsIHsMcpe4VKbGz1gi9I5VA2A2uAz1OSnVU7Gzt3QoGXz13523TbOF%2Fzyy0KOR9VgNE%2BAB5uXwWyZqGrSIYU7wnsMMTK1Bpvn2vNhRGf431CD%2Bx1tcRmOv8s9CFc1LufsCJ1bcpuDHdSeekh5xnXFhv19ix7Qa0E0tLFsYCsJ7IkHOenhTHZY1jpsxjzn24KR1cguW6GVQMYwgumzvwY6pgE%2F0qcwv2I5TSmnZKXGl4xW1%2FGpHwFrZCMpo2Qz9EO2TaRNGUJISdmA6F5h3lGrq4Cnl22NlcS84zexlNN%2FPU0jHxTcmQ33a3ZeyC5BQbTFKW4FJSM7HDF0lj4xz3F1x60Kh1LtWb9xKvknzc7g6KJzbC4DtPZd%2BKrHl17YEhzIDyRY38Gcf2jDMOufImU2T9wJd4UQEoCJs8Uu%2Byslt9SS0pq1eTEO&X-Amz-Signature=b0faedaf29a7ff103b8886bb34c7a568b55d81357237627ef5e5be576d3a5a3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
