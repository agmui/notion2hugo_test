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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWPCEL6T%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIHwBH4tsXH35LgjzWneZvw8uvaRRrrpcyMcY9CKJVFaPAiEAvvjW1u%2F3BqayUtikB24UiPr3fo7%2Bh2%2B8k8EcNl0q0m4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKBLXpWHjG0k4sDcsCrcA2fMEd9CufuVeAamrMWw3Qb%2FW%2FmI2%2FlTkuPZtNHkLNOrX2Li0R6Nk%2FZ8%2FhQZd4aJfTPdflgKmAF1bTHa5gs9POXwufak2TQW3ntHBYDD0QhUEA3Mvo3Rge6dp0FPe533oJ%2BOa7cgPU%2B58IMXDOR%2FcmYnR5xS0Z9PvKK5bYI6LWu2HyRrdzLX1905Bh3ZDgeEqcR7Y2G0NHxWUVsh3erePDctux5bk4f7s0Df4RuKV5oZl%2FpMrDlMXuw1B4qRgfw2fGOfgulgN%2FQnm9zJgfL9%2B3q6Akieq3PI3g2ThBfByz%2FXUPpuVXVd2TeLjICzL6cD4mM0LdiCARhlNbir911yxpdJ%2BV6Fm8rKe4GmLDpIQt6HBudhCdmiWMS%2B9kTTaYIwkoFnmSx7cntgGW3T9oWS5zut9K72fE41Yb3u03Bu8o8q4TYasTj7mwgR8tyI%2FaRWD5PYcjYA1hwE9Nss%2B8OZpNA781LSqt29V%2BcfOQAfdd95ougaiXTqdh5vG%2BGMNKHUhtpNe%2Fwti6uFTdXw9HtimyTrV0m6tLFO3KTwV6Y2I56RpobOB0BljfkFzzUSWlLxdZulw%2Bkqt%2BaZ9h%2B4%2B0d0QT3wZhHa0b7XKs2SqjAJRyUb96949B%2Fz8Ljln%2F35MMj05b4GOqUBjzhxEO06IUZbJqGyAcv6UZ4%2B3vwd7v8QUdYSWTn3VUXxN7WivkfgHVkIystheTkyB6EFkUzKiuPb6VgA0ux5YxPcf4QtfibUheK63u3EKMjTHY8rjj8IVzAM5YvCODLtVmH1roygQh6T1%2BzjB%2FI3eeLOUDp1nwZBIy6tPsX3ssVd6hBdcjbHhc65jMH9dNvXk1bOGu0SyN0T1WnxZtj%2Fk6vrvanc&X-Amz-Signature=03bf438a7842695b1641db6c28eeb40e80a407f0cd2eccbbae7ad98fd2d662d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWPCEL6T%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIHwBH4tsXH35LgjzWneZvw8uvaRRrrpcyMcY9CKJVFaPAiEAvvjW1u%2F3BqayUtikB24UiPr3fo7%2Bh2%2B8k8EcNl0q0m4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKBLXpWHjG0k4sDcsCrcA2fMEd9CufuVeAamrMWw3Qb%2FW%2FmI2%2FlTkuPZtNHkLNOrX2Li0R6Nk%2FZ8%2FhQZd4aJfTPdflgKmAF1bTHa5gs9POXwufak2TQW3ntHBYDD0QhUEA3Mvo3Rge6dp0FPe533oJ%2BOa7cgPU%2B58IMXDOR%2FcmYnR5xS0Z9PvKK5bYI6LWu2HyRrdzLX1905Bh3ZDgeEqcR7Y2G0NHxWUVsh3erePDctux5bk4f7s0Df4RuKV5oZl%2FpMrDlMXuw1B4qRgfw2fGOfgulgN%2FQnm9zJgfL9%2B3q6Akieq3PI3g2ThBfByz%2FXUPpuVXVd2TeLjICzL6cD4mM0LdiCARhlNbir911yxpdJ%2BV6Fm8rKe4GmLDpIQt6HBudhCdmiWMS%2B9kTTaYIwkoFnmSx7cntgGW3T9oWS5zut9K72fE41Yb3u03Bu8o8q4TYasTj7mwgR8tyI%2FaRWD5PYcjYA1hwE9Nss%2B8OZpNA781LSqt29V%2BcfOQAfdd95ougaiXTqdh5vG%2BGMNKHUhtpNe%2Fwti6uFTdXw9HtimyTrV0m6tLFO3KTwV6Y2I56RpobOB0BljfkFzzUSWlLxdZulw%2Bkqt%2BaZ9h%2B4%2B0d0QT3wZhHa0b7XKs2SqjAJRyUb96949B%2Fz8Ljln%2F35MMj05b4GOqUBjzhxEO06IUZbJqGyAcv6UZ4%2B3vwd7v8QUdYSWTn3VUXxN7WivkfgHVkIystheTkyB6EFkUzKiuPb6VgA0ux5YxPcf4QtfibUheK63u3EKMjTHY8rjj8IVzAM5YvCODLtVmH1roygQh6T1%2BzjB%2FI3eeLOUDp1nwZBIy6tPsX3ssVd6hBdcjbHhc65jMH9dNvXk1bOGu0SyN0T1WnxZtj%2Fk6vrvanc&X-Amz-Signature=10eeefca5f8000abea858df323a8064bcaca0b058e884c89c0c841cd6d24ad98&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626VB4N66%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIAMx9MlqONQOrjjJmkPYeabIO6KPRrVUzy7GEzC4TE74AiAyREgPZFNizfVLvkqj1l9zY58gtQmDYAAzf5%2FeB4lMsCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM5PQddL4%2Bhi3eyonRKtwDfAbMqlT2IC9Z%2F9bbqHDfbazLlys2g6r%2F3DqXAy1TkYMOKk2iIjTTi6EXr%2FqB0ZXZqisR0qA3vOAiW9Oi4p6UWUT2TyXV7UrHbCu28uW6pL0U1Fa%2BnE1QMaL0KYgjNl9TCfmPbUAZb%2BAkr5rpVmTxYGBQIRSXZtTeXhHgFKP7BZiDdp7%2Bm2g4Ngoj4IaXRmB2Bte3STj%2FW670V5nHbdmO5tjsIIHpvRxq%2FWD2GRn4GEMoGCmKl7hf3%2FTrYZPDI4tKChUpqtwNrb0RE2pM%2Fu0UIShUZXOwIdo6dY97Pm6mvMnuBEOBH9Jqsz46iEMOP8QGBjz1WPAbWBfu1F9Zf9%2Fkwurm742wKr2hWtu6dD5Ka3I0a8oxVtGuyPfejnMqbvh6e44ikRbguouHr%2F4M8mnsjvok48zxgthTGcrjGH5IGmnmkGZkMcfbU%2B2wd74%2FyUvdqM3dV%2F7ZP7YXCwbvMqVjKPQQ2mXxL2ah9Ole7iu0KcFx0HLoitZGxwXTr55IUNpT97Oj3OGF5Jxy1bnzhJ2rwGbZDdA2hghaxRBGj399vBOvw%2B1TBhtLgIG2%2FiZDCI4VeXI7gDyInaDBKqv%2FgGk%2FvdkEe5Z2X%2FrwpAnfQQdg1siEEAqYSjF1WK4ybHwwv%2FXlvgY6pgGW9e1iTLT%2FLy54szyl712Z3ditW61ItNXp98oTtwXuG%2FPM%2BG1kjUA%2Fv0tJft3YR555KMsfjh7t0xkWxmm9MF%2FFM6BQPyT7yvO5Ztm9%2FhzOE%2FMXKTnluSIK0pOwGqU52Xt1yBRJUvTboB0PjyIGgK0cz4oa%2FdHbSzA%2FVu12A1RV%2BLp%2FRjT8Itg%2Ff358zL%2FxFNO8lmWijST93lOd%2B6X1Z2hF9tFeUrhZ&X-Amz-Signature=ce01b74291ca5f35d5a4308cc1e4abdfc8656be4171f93aaf3760633d24ae8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOIAWPBV%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIDtEwMIkN7tlD8uEfd7WjXVO%2FftyPm0tas2J%2FHTO%2BcikAiBPXdw3Qpd5XwDl4bJaRSO6RZUtIOrJ%2FKbYjyJhtI0vsir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMpNw4hZ5TsyoU8rkrKtwDU%2Fd14iWJQCfdRJbNMGX1b4Zvc%2F9gpuX8Y9ao2TJVTbm2tpZyfiK%2BdZGT0dIVbLFMUIeQsV37IIlLIu9NunhzCMtSh9LQhqtbMrn89KfI2uxqj4OtcwHZwIibpveNaGYG3cWLg9Bv5CGRVRzUnb5vDlkgdusPCIZcsADs9NPASojW6V83AfD1BDjRnezj5bLWQrSP4EPZwrb29jV52Vqr92BR9197fBE3yOvCDvVwm%2FbmD0Qk6MocqToNvV%2FKr0JnMxOqy82mO4NL4Own2OAtQnYNTQrpwhUiY%2BK6liqRbp%2BqJo503ClWoj2wimbYAqbIFP%2F%2BY3aBZ8lFzPdXI%2BTgptHyYopd3k74E3YEv1zyMzWVNR08LuT4%2FQNFHNfWoxPXL8uEhPDzaTm39fOxMkb%2B%2BnXNXNuZ6X3ZzBcqpgSmX5env%2F7LHvijGXAn2dO98%2B0AQB0LTsxB7T0GLv5qjJslxaHT62mXHT9cqlFaUotNp%2BaTESvNEj6dmwvXRv0BnTelghcFFRNn%2BR852diGYJ%2BlT4fEqXyIpMz7uoI%2FzQpVQtiioAWidqxXd8lTFzubmKkJe4%2BNLoN4AO8M9AMbRS9L%2FWLsJUMooyvYyPi8w%2B0IW1f8ftVlytJfWTVllUww0%2FTlvgY6pgEKTPams%2Fim37sjpMl0jDRs%2BoFdMJNfITnmvCfKAnTG63gCoWB0zkEjJ7lxBSIyEydCKf7JELrvjRY7ixKJQG6hUKzOjfN7%2F1sqYFeYWBHGHcX5hrjAWcDzn8wIyJ9t38uPeZJ8gR6LwnKmM3QgREJgdU3G0HVQlT%2BrK2YEzHS79KsrJ%2F0w7%2B%2FVIDGDGQxst18NU9OAWTZAbFq8M%2BC3EZhmw%2F8Dwfu6&X-Amz-Signature=a709a1e623d1c609ec553328725d52e74abcfb907ce05498b31d0195e7b82381&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWPCEL6T%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIHwBH4tsXH35LgjzWneZvw8uvaRRrrpcyMcY9CKJVFaPAiEAvvjW1u%2F3BqayUtikB24UiPr3fo7%2Bh2%2B8k8EcNl0q0m4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKBLXpWHjG0k4sDcsCrcA2fMEd9CufuVeAamrMWw3Qb%2FW%2FmI2%2FlTkuPZtNHkLNOrX2Li0R6Nk%2FZ8%2FhQZd4aJfTPdflgKmAF1bTHa5gs9POXwufak2TQW3ntHBYDD0QhUEA3Mvo3Rge6dp0FPe533oJ%2BOa7cgPU%2B58IMXDOR%2FcmYnR5xS0Z9PvKK5bYI6LWu2HyRrdzLX1905Bh3ZDgeEqcR7Y2G0NHxWUVsh3erePDctux5bk4f7s0Df4RuKV5oZl%2FpMrDlMXuw1B4qRgfw2fGOfgulgN%2FQnm9zJgfL9%2B3q6Akieq3PI3g2ThBfByz%2FXUPpuVXVd2TeLjICzL6cD4mM0LdiCARhlNbir911yxpdJ%2BV6Fm8rKe4GmLDpIQt6HBudhCdmiWMS%2B9kTTaYIwkoFnmSx7cntgGW3T9oWS5zut9K72fE41Yb3u03Bu8o8q4TYasTj7mwgR8tyI%2FaRWD5PYcjYA1hwE9Nss%2B8OZpNA781LSqt29V%2BcfOQAfdd95ougaiXTqdh5vG%2BGMNKHUhtpNe%2Fwti6uFTdXw9HtimyTrV0m6tLFO3KTwV6Y2I56RpobOB0BljfkFzzUSWlLxdZulw%2Bkqt%2BaZ9h%2B4%2B0d0QT3wZhHa0b7XKs2SqjAJRyUb96949B%2Fz8Ljln%2F35MMj05b4GOqUBjzhxEO06IUZbJqGyAcv6UZ4%2B3vwd7v8QUdYSWTn3VUXxN7WivkfgHVkIystheTkyB6EFkUzKiuPb6VgA0ux5YxPcf4QtfibUheK63u3EKMjTHY8rjj8IVzAM5YvCODLtVmH1roygQh6T1%2BzjB%2FI3eeLOUDp1nwZBIy6tPsX3ssVd6hBdcjbHhc65jMH9dNvXk1bOGu0SyN0T1WnxZtj%2Fk6vrvanc&X-Amz-Signature=783662dcf8109b66db087f912b13a0706506a3209c5c8b7ac1f0be0cf39ec976&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
