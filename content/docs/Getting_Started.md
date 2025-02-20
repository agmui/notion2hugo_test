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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZ6JQPL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlNnnE57INaKErjUhqMQRGHQ%2BAmZTJe4QVHLFA6%2BipMwIgPXkAMOUqZc5jHJTJ3GjPpuFJTMQKAbiSpdaxm56ai3oqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6EteLv4Hvcn2Nk2SrcA%2F2Pt8%2BuUfS7gPggABc%2F9LhgsucGyTWuHxswNAykWzo7IM7Kdw3%2FODSzcEoI5cq9dmeaeArKRE2RvIpoQn6C97DJa%2F703wLy0%2FCjRp4930xM9Uz%2BJ137VNuNxRZ51K6t0GYMDtF85QE3NIz5DKXDdKrUAnvSf8J7J7tgxHrt5QJU7cJ2GTMC7lilCYIk6YjpsLnrqUZfFV0qQWgmY2mvpi8NluQF3JG7aPa1epjV5Z34OVhl9bBRoXfemYCjMU8klYhTh3bf02dgLqyYaLh%2BlfzNVnItSxBTfrY6uk9NKLRU7AQuxvBjCZuVYRyNdUDybzxrPYhF1LmyvwshSdJucBjbUORMl%2FEO4UiJO87vBkwQN%2FpSOOdWCc28jtsh1lFRhpvs8%2BjVEohrp9Th8uDyQXnMaNxvKU3fn40bK%2BIur6Lm1z9OqY8CVE700GoOo2egP7NRYckO8Dgs6o0mQDzezxnNB7HDp5g9AMmLhtW%2BlTASqbZB7Dl5q3JDHNEyLRWpfpu0DCC7P%2F7BHS3GMnmrFuVDfor4krq8wtX7Agt8s2nwG7SX1nLoZpyq3ywiPCDLhTqxinsMZURup%2BHfuvMQfEBjuUW9ZerZXJUwEjoxhsUzBuCUY00KAr1EHMuZMO6N3r0GOqUBEUNQznvYTQxf5Xr3sMN38RVGtoYi7CDsU30uOyBJQPJZaa4JD5Ak%2BmOb%2BGZFLy1KcvdVzmHhm3cOedj3fuvgiCWoy1BqeVcAoLJD5PmC9bY9WsVSd19O%2BvjsKZ7x93bBIuLs9c%2Fri54qM5DXxouqT8L446djUia7l67Gb2FAV%2BMCVqmPm5nYXkOOBO3Dn7xi3lqvlspY6xpT6CJytkN3J89wZsgM&X-Amz-Signature=2b07c5796f34aa36dd9cdce516af0f7ac85586c1bcd43719d7e81b36a86b3665&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZ6JQPL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlNnnE57INaKErjUhqMQRGHQ%2BAmZTJe4QVHLFA6%2BipMwIgPXkAMOUqZc5jHJTJ3GjPpuFJTMQKAbiSpdaxm56ai3oqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6EteLv4Hvcn2Nk2SrcA%2F2Pt8%2BuUfS7gPggABc%2F9LhgsucGyTWuHxswNAykWzo7IM7Kdw3%2FODSzcEoI5cq9dmeaeArKRE2RvIpoQn6C97DJa%2F703wLy0%2FCjRp4930xM9Uz%2BJ137VNuNxRZ51K6t0GYMDtF85QE3NIz5DKXDdKrUAnvSf8J7J7tgxHrt5QJU7cJ2GTMC7lilCYIk6YjpsLnrqUZfFV0qQWgmY2mvpi8NluQF3JG7aPa1epjV5Z34OVhl9bBRoXfemYCjMU8klYhTh3bf02dgLqyYaLh%2BlfzNVnItSxBTfrY6uk9NKLRU7AQuxvBjCZuVYRyNdUDybzxrPYhF1LmyvwshSdJucBjbUORMl%2FEO4UiJO87vBkwQN%2FpSOOdWCc28jtsh1lFRhpvs8%2BjVEohrp9Th8uDyQXnMaNxvKU3fn40bK%2BIur6Lm1z9OqY8CVE700GoOo2egP7NRYckO8Dgs6o0mQDzezxnNB7HDp5g9AMmLhtW%2BlTASqbZB7Dl5q3JDHNEyLRWpfpu0DCC7P%2F7BHS3GMnmrFuVDfor4krq8wtX7Agt8s2nwG7SX1nLoZpyq3ywiPCDLhTqxinsMZURup%2BHfuvMQfEBjuUW9ZerZXJUwEjoxhsUzBuCUY00KAr1EHMuZMO6N3r0GOqUBEUNQznvYTQxf5Xr3sMN38RVGtoYi7CDsU30uOyBJQPJZaa4JD5Ak%2BmOb%2BGZFLy1KcvdVzmHhm3cOedj3fuvgiCWoy1BqeVcAoLJD5PmC9bY9WsVSd19O%2BvjsKZ7x93bBIuLs9c%2Fri54qM5DXxouqT8L446djUia7l67Gb2FAV%2BMCVqmPm5nYXkOOBO3Dn7xi3lqvlspY6xpT6CJytkN3J89wZsgM&X-Amz-Signature=1673b2630f310778cb89fba22311261c91fe880e9708edbb43266aaa1f035dcc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU34JDIZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVTVeQBI2PP%2BJKl6loKZsqpXzIk%2Fio476D%2Bl4npCk6dAiA%2F4p5XYFY6kUg02o8kpuvF3maCArttZ7FLW25QVgrWSyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTMUJbtMVETRjnbYlKtwDTGEWTuiTPIavXELU8GwKGyqa1V%2F3ue62UkB%2Fo4RTZ2QTT0uC4skHkvepGEkZD6OsSErbFh0%2Ffz9TIZ6Plm5h9SwcbK6bcb2PWOlmm8BOvTMycnT2h%2BkFMPSzx9f0bXYLp6LwSMt0XY5CHyNKNuRbd%2FnyQTK92aR4bsfw7WqHWSLLTlBXths0Ph9k%2BCdBMFgB4%2FSNLxOk%2FTwqDJc%2F6U7TS8th1uUCoiYW8QDrwlRVyaxvsFCwglJmYd51KPuIDk1ssXWigXKU3fItw4tGg04Q1noKaM6sR1%2B65HjOp9FDOlVFOJXGE9JSK7tj1YuRUa%2Bu0XCTizvH5dlFpphgan5kBI2HQa5SHibGBtOhM3CQ7j%2FavFjx8ftTY6BGaoZQZztI0oZpVQo%2Bs%2Bv2wSWdF%2FwJvLuMBqapDP0mkypAqelCd%2FdOJyn2VD%2BNEzqM0k59BkzzUx%2BeAOCHfvx9%2Fld%2F0nXk59g13kInUCWKf7OpMG5eeRJhe61wL67O2959wQqb9eL8UBOloMwJVedshBEVSeSojP%2FSAQxbg08s7dei1PWod5q8qutL2WmNlFee4znZ%2FMS59b7FiA6h85acPv6Qe3fFbWWVX%2FE62GxQmEBmEW1CFB96%2Beo%2Fs5inXwIvNy8w943evQY6pgEwZCZpYkCoou2Na%2F0dTEe9pZv4kMnWQ6ZVl1jJRGswTS5SMovmccsANk4W4gNQ%2BL9pIdC6CjN9KLxhIKYxSuJcGLajLq22Bka8003Tm0BUTV1S10z18AFDmOoL9tr%2FleY%2Fpf4%2FBkZiWweUcbbp1ZIlGTGv1p6WmJJApXUx6BgPkRcCQEmwq3NMk0z0oFe09ENvjJCIKgAA65lx9FAx8QkXuooSk%2FE3&X-Amz-Signature=9c954f6f1ce05888b600bba48fed06845c8b08b0fa4a9084fdfdb66a65afae0c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FYDZHXI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKmT89RfllABcxH78yxqi3D%2BnYlT%2BJ8uTjtZaFwKCKzQIhAKHwDZI5Pmxx1QwrpR9s%2Br%2BGP4mIEQMaDaZyFQjyaUJ0KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypGpVOU8worL6MM7Eq3APyn76T2cSohMPDltHBBB%2F0HTNnNTfXX5cW0x%2BPjjhNkY34Zw%2BLYwEJr0eqlopxtP7VlJUTLz5ThDKOwjXUD9aXVQURjow0IvImDzEbG%2B0i%2BtA4gnwl%2BQQkxqf1VW2%2FZre8GyFOaNk6n2g6Xbtw83mVAL8DP2UGWBEoBvqnM3N6KW6PolZ6A9lkCqTDm9oHASt5u77PQ5DJ%2FPLmKlGzDgcn2G3opOBa9EIZ9i2PLCpZeZ6pb%2BxDjk4tYscRjJ%2Ffq3nmLQ3lmtuOO4mq2SCE9nr9w1AU3o3NxX9mbf5vjvlC9ZSi2iAkw0LYM8yiCo%2Fw7WG3%2Fr%2BGqxX7kNHJOrWOwx%2Bd2zPjtC9T%2FeSrbRNBt3b06LzdwgckvatUJG4R4hZr8bY1UgxlSk0piq6X1NmAvkJx4VqZ83JTOVECopNRYWeiO9sCrxAcvjTyEkfIWDQmNt7jAaHfxD7b8tSvc%2FDhlwhp2IdZVqkClxRjkr%2FOMqblJ%2Fnlxhn%2FBeL3fcWNCC%2F0JeLhL2UgKxsbcMyAjk5ILdEme%2Flrei0W5eAWoHj8AcrhW5JjYBS1jGwh%2Ba6JUyL8F1FIJs9aQ7D3NmpC3FYqGZuqPCfb4KpdgxEGnoatWscFwb4EWMmDKiqmaivhEjCpjd69BjqkAYv6cb9vLF%2B7OeJk0CcxKE8%2FmnDzmJi9navfpYFS6rfXpJr5G06MQmDpiLwsiT921bsOF2yTwhOT7erHXfQUuS23mP3jLSNgRWDYGOteafz15W3oZ6Y9ZrloZ3a1Np8VZplLpXwxdFaclmzN1IV3kY9ViBqQsJu7Wfi0ee4JulXVZ5U89n%2Bu66vb7klvp4Sx6eGpYVP08e%2B5issBg3BQ9HPk%2Fuuu&X-Amz-Signature=335eb188405624de127475b560a68885f50e5f17b942a1ab39f2cacab0b5ddd4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZ6JQPL%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlNnnE57INaKErjUhqMQRGHQ%2BAmZTJe4QVHLFA6%2BipMwIgPXkAMOUqZc5jHJTJ3GjPpuFJTMQKAbiSpdaxm56ai3oqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6EteLv4Hvcn2Nk2SrcA%2F2Pt8%2BuUfS7gPggABc%2F9LhgsucGyTWuHxswNAykWzo7IM7Kdw3%2FODSzcEoI5cq9dmeaeArKRE2RvIpoQn6C97DJa%2F703wLy0%2FCjRp4930xM9Uz%2BJ137VNuNxRZ51K6t0GYMDtF85QE3NIz5DKXDdKrUAnvSf8J7J7tgxHrt5QJU7cJ2GTMC7lilCYIk6YjpsLnrqUZfFV0qQWgmY2mvpi8NluQF3JG7aPa1epjV5Z34OVhl9bBRoXfemYCjMU8klYhTh3bf02dgLqyYaLh%2BlfzNVnItSxBTfrY6uk9NKLRU7AQuxvBjCZuVYRyNdUDybzxrPYhF1LmyvwshSdJucBjbUORMl%2FEO4UiJO87vBkwQN%2FpSOOdWCc28jtsh1lFRhpvs8%2BjVEohrp9Th8uDyQXnMaNxvKU3fn40bK%2BIur6Lm1z9OqY8CVE700GoOo2egP7NRYckO8Dgs6o0mQDzezxnNB7HDp5g9AMmLhtW%2BlTASqbZB7Dl5q3JDHNEyLRWpfpu0DCC7P%2F7BHS3GMnmrFuVDfor4krq8wtX7Agt8s2nwG7SX1nLoZpyq3ywiPCDLhTqxinsMZURup%2BHfuvMQfEBjuUW9ZerZXJUwEjoxhsUzBuCUY00KAr1EHMuZMO6N3r0GOqUBEUNQznvYTQxf5Xr3sMN38RVGtoYi7CDsU30uOyBJQPJZaa4JD5Ak%2BmOb%2BGZFLy1KcvdVzmHhm3cOedj3fuvgiCWoy1BqeVcAoLJD5PmC9bY9WsVSd19O%2BvjsKZ7x93bBIuLs9c%2Fri54qM5DXxouqT8L446djUia7l67Gb2FAV%2BMCVqmPm5nYXkOOBO3Dn7xi3lqvlspY6xpT6CJytkN3J89wZsgM&X-Amz-Signature=8a758c2f7aeb739afead823adc8d93630f04d8ed1a74f883d40f29cb7521dcf9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
