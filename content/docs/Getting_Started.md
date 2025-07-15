---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZK6CX2X%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD0Xo1sDf%2F6rlMFC%2FXPobAgJEiUs2BEo7riemJjUEjipgIhANQ80hBEJUTba79VTPpoJ6OwEYRR3BGlDc1iNz4UT9fRKv8DCD0QABoMNjM3NDIzMTgzODA1Igxe2J0DQz4HtfngBfEq3APNOyVHuybvYuc2C5OPXBx4UMSDvIG9ul3gIJJqIwXN0NJ%2BHjd0kvmbWeLDAOwJ8uDrByG%2BOLzSgcuqfxqiB4aWAF2z%2Bw3wNwiydAT1cckvNeVG0FtVhpfj8Js%2FVMhVbeTRk4uqyEEiD69HbhJ4M%2BK41tVnABfd%2FtJxf79LpMbZU%2BYwxypCQj6NSfuoALudp5KcXBltvpMWzWVACRhEtsrpTdNXZYEHoYuldSJLyuKuqeHf2YXELlb%2FwEY%2F2vtbqjqapfnn4JH9UV765YxlvNLYQ4Y9ec6p3iYjteWIgyYqqVZhsFf9VjlVHNJvHlQ2FEUoqhy5c4G7laB0qLYh6mCiYXBLfnOkIJQhpLw3REAAHxxTdaz%2BTlJ4PnIk81j84jT3UUcdSQTG%2BA1TOYZts%2B811xmSZD9i7B1AX%2FtAyXHmCDZXV4JukvWl8KCiU34Z5zxtquRexLGBDswGe8izPl9YYDDSLTdSxdS1mxS3Jc7EhinfWBWPZG9uxQ%2BTIVKVrghVslQtPM0vzXqs8O2Yryt%2FqPAu%2BGTgSHauYZwaimMwusYjG7QgZcSeJrUiNdlCtV8m9O%2Fp0pO83SPkbsuY22IA7JkEbiiPlrtV6y7mKlClcuPM1jwmefjJUyWk0zDUqtfDBjqkAY0YBpIZxV4WMehmxyn0%2BbZpiVtJ517Eb4C0TyJIR0nyqCIfRRliWmDSW7hw%2BbkjN%2FWSMD7WJpNz9waYNaG8HIx9WG1rvTXdcxvYO5S1iDPv5ZDiX5S511J9s3nYfHpRJQRpfSZw%2FzTzANx1hpYLq8WOJ6kspwB0pTKv5csnmxJ64oK2T9fBGj3ovUAnFCE6bQwuAHRCA6Dtf58Pe7cxc08ZcRsZ&X-Amz-Signature=844873891fc098e1d8a30ee5eb9407681e80b2e6cde8f4d123f7851817c57d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZK6CX2X%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD0Xo1sDf%2F6rlMFC%2FXPobAgJEiUs2BEo7riemJjUEjipgIhANQ80hBEJUTba79VTPpoJ6OwEYRR3BGlDc1iNz4UT9fRKv8DCD0QABoMNjM3NDIzMTgzODA1Igxe2J0DQz4HtfngBfEq3APNOyVHuybvYuc2C5OPXBx4UMSDvIG9ul3gIJJqIwXN0NJ%2BHjd0kvmbWeLDAOwJ8uDrByG%2BOLzSgcuqfxqiB4aWAF2z%2Bw3wNwiydAT1cckvNeVG0FtVhpfj8Js%2FVMhVbeTRk4uqyEEiD69HbhJ4M%2BK41tVnABfd%2FtJxf79LpMbZU%2BYwxypCQj6NSfuoALudp5KcXBltvpMWzWVACRhEtsrpTdNXZYEHoYuldSJLyuKuqeHf2YXELlb%2FwEY%2F2vtbqjqapfnn4JH9UV765YxlvNLYQ4Y9ec6p3iYjteWIgyYqqVZhsFf9VjlVHNJvHlQ2FEUoqhy5c4G7laB0qLYh6mCiYXBLfnOkIJQhpLw3REAAHxxTdaz%2BTlJ4PnIk81j84jT3UUcdSQTG%2BA1TOYZts%2B811xmSZD9i7B1AX%2FtAyXHmCDZXV4JukvWl8KCiU34Z5zxtquRexLGBDswGe8izPl9YYDDSLTdSxdS1mxS3Jc7EhinfWBWPZG9uxQ%2BTIVKVrghVslQtPM0vzXqs8O2Yryt%2FqPAu%2BGTgSHauYZwaimMwusYjG7QgZcSeJrUiNdlCtV8m9O%2Fp0pO83SPkbsuY22IA7JkEbiiPlrtV6y7mKlClcuPM1jwmefjJUyWk0zDUqtfDBjqkAY0YBpIZxV4WMehmxyn0%2BbZpiVtJ517Eb4C0TyJIR0nyqCIfRRliWmDSW7hw%2BbkjN%2FWSMD7WJpNz9waYNaG8HIx9WG1rvTXdcxvYO5S1iDPv5ZDiX5S511J9s3nYfHpRJQRpfSZw%2FzTzANx1hpYLq8WOJ6kspwB0pTKv5csnmxJ64oK2T9fBGj3ovUAnFCE6bQwuAHRCA6Dtf58Pe7cxc08ZcRsZ&X-Amz-Signature=df51b15d75f29b1d1b7e47538bfb515bdfe661b4390f18736735265a9ed1bd2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZK6CX2X%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD0Xo1sDf%2F6rlMFC%2FXPobAgJEiUs2BEo7riemJjUEjipgIhANQ80hBEJUTba79VTPpoJ6OwEYRR3BGlDc1iNz4UT9fRKv8DCD0QABoMNjM3NDIzMTgzODA1Igxe2J0DQz4HtfngBfEq3APNOyVHuybvYuc2C5OPXBx4UMSDvIG9ul3gIJJqIwXN0NJ%2BHjd0kvmbWeLDAOwJ8uDrByG%2BOLzSgcuqfxqiB4aWAF2z%2Bw3wNwiydAT1cckvNeVG0FtVhpfj8Js%2FVMhVbeTRk4uqyEEiD69HbhJ4M%2BK41tVnABfd%2FtJxf79LpMbZU%2BYwxypCQj6NSfuoALudp5KcXBltvpMWzWVACRhEtsrpTdNXZYEHoYuldSJLyuKuqeHf2YXELlb%2FwEY%2F2vtbqjqapfnn4JH9UV765YxlvNLYQ4Y9ec6p3iYjteWIgyYqqVZhsFf9VjlVHNJvHlQ2FEUoqhy5c4G7laB0qLYh6mCiYXBLfnOkIJQhpLw3REAAHxxTdaz%2BTlJ4PnIk81j84jT3UUcdSQTG%2BA1TOYZts%2B811xmSZD9i7B1AX%2FtAyXHmCDZXV4JukvWl8KCiU34Z5zxtquRexLGBDswGe8izPl9YYDDSLTdSxdS1mxS3Jc7EhinfWBWPZG9uxQ%2BTIVKVrghVslQtPM0vzXqs8O2Yryt%2FqPAu%2BGTgSHauYZwaimMwusYjG7QgZcSeJrUiNdlCtV8m9O%2Fp0pO83SPkbsuY22IA7JkEbiiPlrtV6y7mKlClcuPM1jwmefjJUyWk0zDUqtfDBjqkAY0YBpIZxV4WMehmxyn0%2BbZpiVtJ517Eb4C0TyJIR0nyqCIfRRliWmDSW7hw%2BbkjN%2FWSMD7WJpNz9waYNaG8HIx9WG1rvTXdcxvYO5S1iDPv5ZDiX5S511J9s3nYfHpRJQRpfSZw%2FzTzANx1hpYLq8WOJ6kspwB0pTKv5csnmxJ64oK2T9fBGj3ovUAnFCE6bQwuAHRCA6Dtf58Pe7cxc08ZcRsZ&X-Amz-Signature=6b3d6f25675bdc6386bff2a2ffa35ac0fe2058ae9a69ecde259aaa43737caba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVJF4WU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCzH4P4eeMCE5DIaFEqbNJrx2FqqawqB8eJCseZ%2FsTY1QIgA8h1G6kK8TOVFlHTVv9ZDB28wYc9PUyi4ux3tbggvo4q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBWTgsDGHjSSE4cvGSrcAxVB6JHIOFzQVk%2FRKv%2Fl58Uiyrwv43Geix7%2BTOgmKXBqGhcttBsuPcZr3n3HP%2BoXm%2BQGdQ%2B7ljX33yvbiQTs7EJMHTmmyzRbB70NVQTv8zGv5MKEpxv3NW6xPCad8Prjd2HWkrnfpkGzKocOxIENZPnuNc4aP0Ilsks5TtEKVmlRQZWyKy90CmztWdEE%2BHZq9YliKM3DrO3TBoihbc6%2BiBdH7F79wKai8PPcpOMUya5KdXZYWLzWeiIBqs1eVELBLnLNdOjgVtnSoz%2FHiIOtYNEAYrEQx0iE%2BYeJRd7kJYYJkyugJhYy6bMjbvs4TNrWYzhP1RQIwSlu64%2FY5K6vwcqG3SjMTCAvYUoj0gHsP63K9Dv%2FYMuNU6v%2B%2Brrv6ado4qgGpkjMgaPuYrRnA6M8yOucb5hgzR3S7GUgZ4nS7D0WCShUGya4PfsswuVZF5x8OaeBKjEwyAPh39wUQJKwB9RVj6h1grhCQHZBk65TyX49nx7fgAL5pxvatDmvMBeQc%2FhFHtxHuXptqRtXeVbWPP1XkziMVAOrUl4XlcSheVsSHKYzpHcR0SEhUaZDwCAD2JSB4m2wKHv2BTvFy9D0TfZKofKS1xBcs4m95A3XZbuIv7l7vbeRq0m%2F9N6WMJur18MGOqUBWqc2My8jhwuYt%2FH0capT0Q3JW%2FNCjSolkU2sYOvinaduOCrjbqlq2dH%2F%2Bm85DHDzyrMzpc1QFA1M8Szruu65rDLYSf9pgfo2%2BtZWrB7%2BdmbBsCzueICpg0QGPwMx%2Be%2F4cN3ObYxf%2B147bakCLdobW6XUcGSyjp2UBIR4%2FF4W%2F9FYRkyQuv7HoOvq7r5CKBVLnaKizR6HWQQ7i6sJPa%2BiSGr8k3Kv&X-Amz-Signature=3b6d8574b8ce0fc3cf8851bb6edc3639b5c9a9c03065aa4a4518c22f3c12035b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2EOHSG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC8viaA0XDUGa9OdU59%2BB%2FoWAaw26uVYB7Cf5wZz3tIkgIgGc5WaYHX%2BX4rimtbrZMwO6TKcsnHxC7u9SsWlB93fJgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHE6NRJ9zYTBpisoJyrcAzievd7JcWZVWvaOeop3u4tYpjsfWk%2Bv2grtj%2B7Z7QIDYzntMVxSnGhGWvncR2dqA0OiTt3b%2B1jqpOzy6SEoinYnM8ptTt%2Br8HVhy%2BYe8gLRSkZeVF0u3sjQyZKG4Ib7VJLGyUAmVVQa4Y5LplC%2FmkDrYzFmfjCaeJn1bc6x8tMYY8CWQmndUQDdohJ3vpcbrzcTD0XazjFyQikqhK32IwOd4a26M2xX9LNXMdVh9odk7bhTlOx2Hwm0rFl6EOzNzUqpQUaCasaje2cUia3RKVgRTfYZo5%2BQiOs%2FwU0J8CcLygB4X2h4Oj%2FUayMQirh3kTtFcrXad2BhZ0YEtKkdQyiO1r%2BNcCUmNzO3ItHdF6j%2B%2FTKVoJtv1XA2TBvsaMG3nE8%2FWE12EaNVl3%2FlDiHm%2FwmZWH9TlsQk5TS54OTsZCNrhj0Vt7vacnYfQZTNyAlGuAinCk%2Bel3di%2FoB9I3%2F05KXse94A2TWQyGOLb4F%2BvI8XQx6SfJH%2FtYjCLXxCMLSbkfxYbSj64iZBf0uvUMn0GFJwY8FUDyKwenqE%2B1x5m5%2FaUYgL0tCUKQNxm86m54BJFsoYwSW3%2Bpwgk%2FDAgyS8pT%2FlziF19tiNh7y7ecS1fdQOi%2B2XopwpOyuKMjCZMNmq18MGOqUBngQk2tQ4NRO%2FKDFTZuR6MnqwqJJ1yoJyVffQT4dtLLklWvAFI2fx8B%2FBSykCrD0sXigN2uchDIr7hKTysFOuDKmijX9w8OTW5nMgsGFLnhgFz1wIENt0xPivQFu%2B0VGfQwaNSDX6vQdhMr3uhBx3gO1YOze5%2B5QAhTqz0Wn4HCBxcVQ%2B7Ze6M9YoEhJGPIk65j9kB%2BxQJ9o6I4Bx%2FZzPg6%2Fk3SEc&X-Amz-Signature=d40688a6ee93973fab29878d9567417d7e4338ede18e90bf3e84793e6394e88d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZK6CX2X%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD0Xo1sDf%2F6rlMFC%2FXPobAgJEiUs2BEo7riemJjUEjipgIhANQ80hBEJUTba79VTPpoJ6OwEYRR3BGlDc1iNz4UT9fRKv8DCD0QABoMNjM3NDIzMTgzODA1Igxe2J0DQz4HtfngBfEq3APNOyVHuybvYuc2C5OPXBx4UMSDvIG9ul3gIJJqIwXN0NJ%2BHjd0kvmbWeLDAOwJ8uDrByG%2BOLzSgcuqfxqiB4aWAF2z%2Bw3wNwiydAT1cckvNeVG0FtVhpfj8Js%2FVMhVbeTRk4uqyEEiD69HbhJ4M%2BK41tVnABfd%2FtJxf79LpMbZU%2BYwxypCQj6NSfuoALudp5KcXBltvpMWzWVACRhEtsrpTdNXZYEHoYuldSJLyuKuqeHf2YXELlb%2FwEY%2F2vtbqjqapfnn4JH9UV765YxlvNLYQ4Y9ec6p3iYjteWIgyYqqVZhsFf9VjlVHNJvHlQ2FEUoqhy5c4G7laB0qLYh6mCiYXBLfnOkIJQhpLw3REAAHxxTdaz%2BTlJ4PnIk81j84jT3UUcdSQTG%2BA1TOYZts%2B811xmSZD9i7B1AX%2FtAyXHmCDZXV4JukvWl8KCiU34Z5zxtquRexLGBDswGe8izPl9YYDDSLTdSxdS1mxS3Jc7EhinfWBWPZG9uxQ%2BTIVKVrghVslQtPM0vzXqs8O2Yryt%2FqPAu%2BGTgSHauYZwaimMwusYjG7QgZcSeJrUiNdlCtV8m9O%2Fp0pO83SPkbsuY22IA7JkEbiiPlrtV6y7mKlClcuPM1jwmefjJUyWk0zDUqtfDBjqkAY0YBpIZxV4WMehmxyn0%2BbZpiVtJ517Eb4C0TyJIR0nyqCIfRRliWmDSW7hw%2BbkjN%2FWSMD7WJpNz9waYNaG8HIx9WG1rvTXdcxvYO5S1iDPv5ZDiX5S511J9s3nYfHpRJQRpfSZw%2FzTzANx1hpYLq8WOJ6kspwB0pTKv5csnmxJ64oK2T9fBGj3ovUAnFCE6bQwuAHRCA6Dtf58Pe7cxc08ZcRsZ&X-Amz-Signature=d6f9130c813ce89456eee6ae21fccf69cac1fc1cafdd14d8c074dbf9229d5914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
