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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWBNPCS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDDGsopWyzZqMdRrj7vk%2BV67inC1Bsx7fQjYTCNreoZLwIhANaF6aLOLYzeyqiljCOhw6ku0jG7hmfrFlbgecbQ%2FFrSKv8DCFUQABoMNjM3NDIzMTgzODA1IgyUyGwlHf%2Bq%2B0xx88wq3AOoKLsfPw0%2B%2FFNuU8F4sN6NZ7aTLrVHV6jmlckdcoFzoxHxlfsZX3bncQxFdgTKbkqabIrRBQh2VP%2FPscyMsBJPu596O1zzl10N51UP6k4rjhGQbwsfEugesI%2BzcvPUlvVKZXeX5DHu%2FVtjt8dfJyKhytrrqkIq9gGZtBIoV%2BlPxplMRrOFrhBeZCVFAfROueGAmAOPJsh2mUgN6qruVI8O1JmUo2XxQSkQ5SCRRFwLp%2F9msB6fJEy%2F0WDIOBSmoSJ9IW1arYJLOZBdYCc%2BIVytKZmx2Xn0PwX%2FfeJbpR%2FQDHk8xB%2BY%2Bq8bl5alH8AUgEZRUw39JIvHXEi%2FxCzUHVNfwqCXkdE8s9k9qrEOnuy974hlEYOg%2BbdeTY%2F67aqyzix%2FaBjwp3LAiVg12jk6koEbs0msSxpLU4bRSLIs9JVDTXauPk6Ib%2BtqOKEvrWw4qOGt8DqjJDuL6nc0WSGIj98JE2hJ1lEsLe3ZqO226%2BqjryBY6Jt3cfaA141UpCnD6ACvTNWDdxdR5xLWBy8YztHuyuHqrQFFFu2PBkHwyOXaERW9JGhHePNW%2FruSOcZ57pPzDjbSCMp%2B3Jgv2qWa443Pi8WSf3XYB6jdJs5KpSXFFYAI%2BI3yuJG%2FQoMUQzCnxMW9BjqkAQp1oD%2BXUbITEB5OaihKjTYeMW%2F3cduIBq8K%2FF6x6RAosCewNgrJCtlrcqqYamQhOIZpEqybMkx3NRoW7h5SBsd6T73CgSPEPpN0m1b2rR%2FxKpUPI6f9TDCpUZhVofzcx24WKMhBY1w0RxBYxB1jLX6afEpgXvRSCOAuK%2BdwoEWtEwRrJLa586%2B%2FpYpUAyNx6ognNPjEznQtSeTLeuh%2F6OH7X6Tp&X-Amz-Signature=baef096c20fb1cab7f2671eaf832c5c70ea406f068a4e76988e25b924c39a62c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWBNPCS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDDGsopWyzZqMdRrj7vk%2BV67inC1Bsx7fQjYTCNreoZLwIhANaF6aLOLYzeyqiljCOhw6ku0jG7hmfrFlbgecbQ%2FFrSKv8DCFUQABoMNjM3NDIzMTgzODA1IgyUyGwlHf%2Bq%2B0xx88wq3AOoKLsfPw0%2B%2FFNuU8F4sN6NZ7aTLrVHV6jmlckdcoFzoxHxlfsZX3bncQxFdgTKbkqabIrRBQh2VP%2FPscyMsBJPu596O1zzl10N51UP6k4rjhGQbwsfEugesI%2BzcvPUlvVKZXeX5DHu%2FVtjt8dfJyKhytrrqkIq9gGZtBIoV%2BlPxplMRrOFrhBeZCVFAfROueGAmAOPJsh2mUgN6qruVI8O1JmUo2XxQSkQ5SCRRFwLp%2F9msB6fJEy%2F0WDIOBSmoSJ9IW1arYJLOZBdYCc%2BIVytKZmx2Xn0PwX%2FfeJbpR%2FQDHk8xB%2BY%2Bq8bl5alH8AUgEZRUw39JIvHXEi%2FxCzUHVNfwqCXkdE8s9k9qrEOnuy974hlEYOg%2BbdeTY%2F67aqyzix%2FaBjwp3LAiVg12jk6koEbs0msSxpLU4bRSLIs9JVDTXauPk6Ib%2BtqOKEvrWw4qOGt8DqjJDuL6nc0WSGIj98JE2hJ1lEsLe3ZqO226%2BqjryBY6Jt3cfaA141UpCnD6ACvTNWDdxdR5xLWBy8YztHuyuHqrQFFFu2PBkHwyOXaERW9JGhHePNW%2FruSOcZ57pPzDjbSCMp%2B3Jgv2qWa443Pi8WSf3XYB6jdJs5KpSXFFYAI%2BI3yuJG%2FQoMUQzCnxMW9BjqkAQp1oD%2BXUbITEB5OaihKjTYeMW%2F3cduIBq8K%2FF6x6RAosCewNgrJCtlrcqqYamQhOIZpEqybMkx3NRoW7h5SBsd6T73CgSPEPpN0m1b2rR%2FxKpUPI6f9TDCpUZhVofzcx24WKMhBY1w0RxBYxB1jLX6afEpgXvRSCOAuK%2BdwoEWtEwRrJLa586%2B%2FpYpUAyNx6ognNPjEznQtSeTLeuh%2F6OH7X6Tp&X-Amz-Signature=22d12f8659df39fb0a7c0f596927c0fa09160729f0f6602d228338e068f2c6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPYAFK2T%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCvB7%2BpcEhGBlRQeTgJZ1O%2BXsU6xrZyFMpCU66ll%2FmFgQIhANblA%2FkOHo8wgvgMbApGEYdsoN3RkYmUhahwIhM0F9%2BPKv8DCFUQABoMNjM3NDIzMTgzODA1IgyhEnWIIRzNAQDNx24q3AMswgUxBz4388YdH5%2F1brzJHX3v9MmVnzgjAdGTDFtNEtDXQ7V7pkCXXsQDyHtAT8bHkJJnAqVa76t2CT0fAhlcBokfgBZ%2F%2Bklv2QtZ91Lyd95rqPTQ%2FhU45Awzd5ka4YosaYw5a9rNScfiaVMf86CoyOkBDDFEGYaDcqenTWuWVhQKd3NS5hxXMj5nzhVT6hCUVLDlatCe7zhvX9WVjw8qNLmYOM0F5z9lIx8abNRYqNvjbE%2BsQlL7vSdwYNPzrY2zXXlbKRMeCX3IzSOu3LcLnyXyG1gecANEu%2Fs3Cy68%2BNPQKKkzLVIpA6irxZYoH9CuRmMhEVIm6a9FJx9hj02%2FhFHfLXm5EBYxVu%2FYj1zxwWAyYL22mEcBU6u1DSoA8vTCxegEEoheR%2BBdioRq4IxxCmOVa4c7%2Bs1LytT9jHLZ%2FbTOrmn4nQgiAIdZnFjO%2F2qyOy2fpmz0nr3vKs%2Bc8qQxhvlE5vbMBVAA%2FujwX8EfPnH4o8MYBYfzKNTO%2BJhFnd0NNNQza%2ByManA70Fb4EvSUnFC1yFukFJFqIgPg%2FEmi%2FT%2BsO8%2FqymUcFWVayIqOx0odRhT3bNBNai3Ge5Hfws6jfa%2BH8rQBlD%2BeZzHvlODT10zigDtpQ0Pi7yl8RDC3xMW9BjqkAZx9d1TmaG9a2coZyWQph%2BYnYaWt4f4C58gBHMBuWoAybvOf6k00XRrI7TOV8t0WO0ZdQxy0e4wsvCG3fgpeSeSrbjbHCEL1lAYEOLjkPlouw59vwvjhFDUkMIS31UVWaQfNe0IOyRNKtbuqRBMxeHKWde1iIHkVZrZ4kez%2BjgCmvb8WIV8pu2I4YeusA2pbSJgu4SFv953fuXnJwT3yhmSoRfRl&X-Amz-Signature=aef8c8d6d726bb738bb395437516f4c9483dcd4d6f6b4674e6047fb8ab184c61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LJ5S54Z%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDU9mYTYArpDHlPE7xb4e234BUO2anAlMNi5Y98kzk%2FcAiEAhXUmFrYZuymChKDbiIlJik5lTl0beD8PyQhgnCVKKEYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHurze4ovJbUPornFCrcA0CngPZzoylUFMLFYkINOPhUC7EbyjvyQ16Z%2B7qyZaa01sj3UHOu0HQ%2FdZsharYXQ4cLAZcyLWstI0BJ1l1nhdAx7LZ8vbx3zG6K5AoBwk2PhYYhD1UOL5GSjWpGBvJKNw0vI10UbEUEps5XzJA4UxM0tXmo5cu0UodgZ22T95hQkempwG14aC1Tpmu%2FLFTDN3q4%2BI88I%2F2B2%2FiVuLqxl0k163Rs9kuqlO2odGWjaMfehBT66NjwVbV7yyjRk%2FxI8ZLYvB2HzmzyF92gXX5ly0oOqn8JuMz8HveZAGBOPkREY70N2ztg6e1ieXfAFJ4WhdON0q3CBo7Lyd7Ly80fiJa3kT2MB46hBwQl9H2oBNOPJA5jEcvq9PHBeIqtThZBja0Urt61HmtW30QHGBNVorRStN4PVKk1YC0C1DIHyII9H3kYw%2FCmSPY%2B5urblhPHIujZ1AgrE1Bs7BV%2FXYspENtO%2BonmImF3tSDyJKU%2BSp%2FIIw7O4yAl%2FH1BzpsrCFsT%2FnBYi%2FxPTa1K2cVKqmOC2XvvDul%2BxAmXSRknuJkd%2BENXbRtbF8PaM0OWBFgFf72qdjA%2BCJF5wr%2FOpAn28BVMER7VOYAgEw9DRx74SO5Y8MPz4etqnQwA4t4wQyf%2FMNjDxb0GOqUBckzqyqNRxpf77U5Tjfkt7H64j01HPIuv5J%2BBaqe6m%2FkCuYj8ygUEnODEJyR3BLee7QCoUiwieTiAt0b6mHJV8PapVROSIWeY4uHuYlWNnW4p88qQCy3%2FrMAyAzmj08nudcPlq5%2B1Sk3N10rOc65jR1gk8LkJjpgbwlnZosHbW5Av7TMu8XD9d7doU595j%2FLPVDgFjCNW7i9PgDZgwpVUUzPw6yYD&X-Amz-Signature=b04e5d67592b90ee0704102c4b20e6c93566ac7d3745dfc1efb761646e5a336e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CWBNPCS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDDGsopWyzZqMdRrj7vk%2BV67inC1Bsx7fQjYTCNreoZLwIhANaF6aLOLYzeyqiljCOhw6ku0jG7hmfrFlbgecbQ%2FFrSKv8DCFUQABoMNjM3NDIzMTgzODA1IgyUyGwlHf%2Bq%2B0xx88wq3AOoKLsfPw0%2B%2FFNuU8F4sN6NZ7aTLrVHV6jmlckdcoFzoxHxlfsZX3bncQxFdgTKbkqabIrRBQh2VP%2FPscyMsBJPu596O1zzl10N51UP6k4rjhGQbwsfEugesI%2BzcvPUlvVKZXeX5DHu%2FVtjt8dfJyKhytrrqkIq9gGZtBIoV%2BlPxplMRrOFrhBeZCVFAfROueGAmAOPJsh2mUgN6qruVI8O1JmUo2XxQSkQ5SCRRFwLp%2F9msB6fJEy%2F0WDIOBSmoSJ9IW1arYJLOZBdYCc%2BIVytKZmx2Xn0PwX%2FfeJbpR%2FQDHk8xB%2BY%2Bq8bl5alH8AUgEZRUw39JIvHXEi%2FxCzUHVNfwqCXkdE8s9k9qrEOnuy974hlEYOg%2BbdeTY%2F67aqyzix%2FaBjwp3LAiVg12jk6koEbs0msSxpLU4bRSLIs9JVDTXauPk6Ib%2BtqOKEvrWw4qOGt8DqjJDuL6nc0WSGIj98JE2hJ1lEsLe3ZqO226%2BqjryBY6Jt3cfaA141UpCnD6ACvTNWDdxdR5xLWBy8YztHuyuHqrQFFFu2PBkHwyOXaERW9JGhHePNW%2FruSOcZ57pPzDjbSCMp%2B3Jgv2qWa443Pi8WSf3XYB6jdJs5KpSXFFYAI%2BI3yuJG%2FQoMUQzCnxMW9BjqkAQp1oD%2BXUbITEB5OaihKjTYeMW%2F3cduIBq8K%2FF6x6RAosCewNgrJCtlrcqqYamQhOIZpEqybMkx3NRoW7h5SBsd6T73CgSPEPpN0m1b2rR%2FxKpUPI6f9TDCpUZhVofzcx24WKMhBY1w0RxBYxB1jLX6afEpgXvRSCOAuK%2BdwoEWtEwRrJLa586%2B%2FpYpUAyNx6ognNPjEznQtSeTLeuh%2F6OH7X6Tp&X-Amz-Signature=80e1caadbc586c4d6ce4465aff450297cd906be4009a223a4271a610a75f3a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
