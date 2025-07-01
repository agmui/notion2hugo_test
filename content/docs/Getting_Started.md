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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PTWB77%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2BJ%2FtjMnY4Caov6NU6VvzJ%2Bxj5%2B5b69nb2ATksvFa4wIgVl1U%2FSFC%2F4YNqA2KDJFgR55gC86VhxlW021AuqrlIsQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmvvZ7RjrlDVss4iircA05dyWTz0anUNcoGEP9VBgOCwvZLa0TsHcAMej4IToss%2FyUf7boTwyLTWCqZJ21B2%2FKzZm0e5TJ6AFE8qDjO1lrOIsmf1MR89zXc6MZt3TquDN74Lr1npzx4mg5Xms3%2BLA5xr2feUtcsHNvEE2Y4Be%2BX7F%2BBA3BtcL4QD1ivl5AFLVewrzKX6%2BE%2BndMrcpO%2FLOYICVvyy4%2BQ%2FRIr53EEl2ZHjE5qaBGT%2FSR7aZ4%2Bx1eoOcqHFtN8EbH%2F4Qpp939aNI8hfrMLRn4zZ7HDirsRSsT5XeKFlwTHaQie6aOxDVMKm%2F9Ozs5O1Tv33qG%2BiEzRJo3d6mUOmVQnDTaUPiUWmhfTuhHS9M6QuYZWBW2lMJyQNQu2Bb%2BehbpMjlQDZ2WzAMM%2F30ehLKPoyZPgzhMwfs51mvw427rhfzIVD9DGhfyB1PNF6e67x06S0%2BdmbpUpjpvo9vupXMWS%2BKeLPX1Kt3JZRzdo%2FhbLMTc5BwbsgZWlemdgKOcAxYQz%2FzYF0zMpqRr%2FUuBswf4A%2FytMFAV89Pg%2BmCZUNjMGIusxKOr0icaazEFNOKxH4cbzD04rlU%2BE8Z2F5t24M7dUGh0RwstGK2OAzuF%2FyID56BbgBBT4zFm1gXfGs5YSo3%2BaYqAtMJmkjcMGOqUB1sFt9bVDL0vVJPkIsr03kOSyRV5KbvAMjLLeOc1V3%2FtTW%2FxPjVVddrAWs%2BVYh4lAoHq5fiT5%2BO8XxtEZQJlvT58AVY86PG7fvvVyx7ZWrUje%2F%2BytEGjllZm5Jx68SHiK6L61elvzbB8vxE4huNKyLelffMWroKRz3%2F%2FKHUbxPQXyKypEIy0kVUwzerZ3xGM1%2BhkmqaIkTB%2FafS8rZGulY2OdeF7B&X-Amz-Signature=bd8fec59c70ce10aeb4e21f22bb74f411a6ec72a3604e640bcdcd7d3fe2da22a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PTWB77%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2BJ%2FtjMnY4Caov6NU6VvzJ%2Bxj5%2B5b69nb2ATksvFa4wIgVl1U%2FSFC%2F4YNqA2KDJFgR55gC86VhxlW021AuqrlIsQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmvvZ7RjrlDVss4iircA05dyWTz0anUNcoGEP9VBgOCwvZLa0TsHcAMej4IToss%2FyUf7boTwyLTWCqZJ21B2%2FKzZm0e5TJ6AFE8qDjO1lrOIsmf1MR89zXc6MZt3TquDN74Lr1npzx4mg5Xms3%2BLA5xr2feUtcsHNvEE2Y4Be%2BX7F%2BBA3BtcL4QD1ivl5AFLVewrzKX6%2BE%2BndMrcpO%2FLOYICVvyy4%2BQ%2FRIr53EEl2ZHjE5qaBGT%2FSR7aZ4%2Bx1eoOcqHFtN8EbH%2F4Qpp939aNI8hfrMLRn4zZ7HDirsRSsT5XeKFlwTHaQie6aOxDVMKm%2F9Ozs5O1Tv33qG%2BiEzRJo3d6mUOmVQnDTaUPiUWmhfTuhHS9M6QuYZWBW2lMJyQNQu2Bb%2BehbpMjlQDZ2WzAMM%2F30ehLKPoyZPgzhMwfs51mvw427rhfzIVD9DGhfyB1PNF6e67x06S0%2BdmbpUpjpvo9vupXMWS%2BKeLPX1Kt3JZRzdo%2FhbLMTc5BwbsgZWlemdgKOcAxYQz%2FzYF0zMpqRr%2FUuBswf4A%2FytMFAV89Pg%2BmCZUNjMGIusxKOr0icaazEFNOKxH4cbzD04rlU%2BE8Z2F5t24M7dUGh0RwstGK2OAzuF%2FyID56BbgBBT4zFm1gXfGs5YSo3%2BaYqAtMJmkjcMGOqUB1sFt9bVDL0vVJPkIsr03kOSyRV5KbvAMjLLeOc1V3%2FtTW%2FxPjVVddrAWs%2BVYh4lAoHq5fiT5%2BO8XxtEZQJlvT58AVY86PG7fvvVyx7ZWrUje%2F%2BytEGjllZm5Jx68SHiK6L61elvzbB8vxE4huNKyLelffMWroKRz3%2F%2FKHUbxPQXyKypEIy0kVUwzerZ3xGM1%2BhkmqaIkTB%2FafS8rZGulY2OdeF7B&X-Amz-Signature=6fe19118c4a6f77462cf2d4384c1d2bcacf7f254b38ae0a6486c4ab6da97a4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PTWB77%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2BJ%2FtjMnY4Caov6NU6VvzJ%2Bxj5%2B5b69nb2ATksvFa4wIgVl1U%2FSFC%2F4YNqA2KDJFgR55gC86VhxlW021AuqrlIsQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmvvZ7RjrlDVss4iircA05dyWTz0anUNcoGEP9VBgOCwvZLa0TsHcAMej4IToss%2FyUf7boTwyLTWCqZJ21B2%2FKzZm0e5TJ6AFE8qDjO1lrOIsmf1MR89zXc6MZt3TquDN74Lr1npzx4mg5Xms3%2BLA5xr2feUtcsHNvEE2Y4Be%2BX7F%2BBA3BtcL4QD1ivl5AFLVewrzKX6%2BE%2BndMrcpO%2FLOYICVvyy4%2BQ%2FRIr53EEl2ZHjE5qaBGT%2FSR7aZ4%2Bx1eoOcqHFtN8EbH%2F4Qpp939aNI8hfrMLRn4zZ7HDirsRSsT5XeKFlwTHaQie6aOxDVMKm%2F9Ozs5O1Tv33qG%2BiEzRJo3d6mUOmVQnDTaUPiUWmhfTuhHS9M6QuYZWBW2lMJyQNQu2Bb%2BehbpMjlQDZ2WzAMM%2F30ehLKPoyZPgzhMwfs51mvw427rhfzIVD9DGhfyB1PNF6e67x06S0%2BdmbpUpjpvo9vupXMWS%2BKeLPX1Kt3JZRzdo%2FhbLMTc5BwbsgZWlemdgKOcAxYQz%2FzYF0zMpqRr%2FUuBswf4A%2FytMFAV89Pg%2BmCZUNjMGIusxKOr0icaazEFNOKxH4cbzD04rlU%2BE8Z2F5t24M7dUGh0RwstGK2OAzuF%2FyID56BbgBBT4zFm1gXfGs5YSo3%2BaYqAtMJmkjcMGOqUB1sFt9bVDL0vVJPkIsr03kOSyRV5KbvAMjLLeOc1V3%2FtTW%2FxPjVVddrAWs%2BVYh4lAoHq5fiT5%2BO8XxtEZQJlvT58AVY86PG7fvvVyx7ZWrUje%2F%2BytEGjllZm5Jx68SHiK6L61elvzbB8vxE4huNKyLelffMWroKRz3%2F%2FKHUbxPQXyKypEIy0kVUwzerZ3xGM1%2BhkmqaIkTB%2FafS8rZGulY2OdeF7B&X-Amz-Signature=eb6ca51402da59361edecad2cf47fee9a401df059b5094695f54123039ea4851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMGQTRY%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUdV5I2wOhUYuok1PvjmYKph76zx%2BrXGF1EBKOHX07UAiEA12%2BMivI5zd%2BEQee%2BMcQeTjDAe77oxjk5KzzeEQlZSl0qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzChpphq9Tj7kq5HircA3iQNMWU5sgE64xrJ%2FCnGG1zTYCrjCLTnXLexyjc%2FWG8b%2B915uA7dBDnb4y5FJH5%2BiIXZgtyQe9%2BpQljIyeH%2BMYOc%2F4780bsd8bsJGketZREwOjD2wH8vxzi36FlDh%2B483Dthvi%2F7mdC5UmtQmGQJftuX8TuvkUdknjxEPpd3sDMHliMT3JPPX2aozHqL06kfaTWFw1qKN0YbXGVES0yYDIpo%2ByWBff%2BKMyKSbuRl%2FlA5iGg4zYw%2FNrt5q1wGrp1b%2Fqog%2BzcBd4TWRlgwxZZi8KN0pmJvr2rBTJe3lEkRXQprmkXUR2M%2Bdes6Ol2L0NEFCXs%2B3otwO7ls49YvIuC8pbXZnUhYaspezDTKkJm62ko25%2Bk%2F3wwJB%2B6u0ilXMAucVwHlcqmCLnQGakIoU%2B7HzjweWYgarZLGL%2B0Wsihnz4D%2Bu25WfpSSO2jlHW45xJWF1pvbcXYKqDbV6AKFA7yFle%2FpUep8X2z0HHIVVa6Z8eXeoafCKF4aK4A9HrmndvU7L%2BD2SDyIMYJGCSpw9SVnCjX%2FYiqjBZnFO%2FqA652iuZWwvHZYC9qbydiQlFS6pG5CzvDPTdNT91k30OGp%2Bd8BdOcrbQU01%2Ff7AS%2Bha4Tr98FIoXNZ4itbo%2Bd0bw7MKqjjcMGOqUBAfFDT4V2v55IulmiRJmrHLOK6dUMEC9NZwZRi3n%2BKWz6XLF2x0516ePbHUPPVFfuCD1EfbrwTtc6udlRkkeOTgRZZfSzl4JMi6g2zUd0WCm7d0MPec8suhvDEX3UoJcpvHinmFQ92sIAqC23AC%2Fp%2FA6tu1kLBkVfE4ccnBQNf4D6Y2xiHz5t2iCYZIq6FHJ0FU85IsrLkvowOejWwcXs0TrPOhHo&X-Amz-Signature=3c032f4acee6c7ad0ee87a96f0817f564b0d2c98e28baa3b6958b3827cb9cd41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QOPY4FR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0k7WFd2Qxi8ZqEQrvexRrHEmqyiHt2GTJIhoDLO5egIgHjrToucD2pfWM06MRxRZOsbuOAXpK8cCU4rIsdwwFScqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVl3fwuXpXWkvh8HCrcA1Mo%2Fe%2FjE1z2d5gwld3Fgbpqg5S%2F9b%2BIsx8mWDy30MVw%2Fx0NJ2vDFiXTlG4mNsyb662JA8Nj5RBBjltdJfvjRrcS2J%2FWoxRViYexm5Mt0%2FJDX%2FXDA%2BhuigpQXAvTJG%2BAEgc%2BHFgYKAyRhQGRmKJKwxwfnplkJwCCE%2BwpJEM8%2FOeFFgzKuI5BIlNVXUvlHr0ygXyV2BJRTyk%2FhQvJz6igfh2Zp0xLPoJKTm177NsAiS%2B07XleIZeZOc1At0cwBdFUGpuxfbBfHSHKteZtBFxlT53Q9DgF0ClvCDqitA9H4I%2FWwcLY6sVlHlWq3oOwl7FfGvswj9vT7QzpnE%2B5izLEFuTY%2FK9LetVHfOYVr%2F5pNFNFojsVWEVPaZnjr4AAmwYbSpM3d%2FbuFEATZq12Via5t8DezaZ5%2FVkWOqyJyaGlvHAWvcC3JNRjheljp3WEHQmCM1lfvlj2dETPFn0dbaSKjxYnLYpFk%2BeX6C05t0wsYu8G%2FSSVhfElLmbko0IvAz5uX0l6guIbeoCWaoPHmb7d3GdIo3EJwrU0BN1DpLvgPzuhbX1Gr%2For1S60ma8F6Xcgqr4keW0wg0UfU5Yv9WU1uXf5FIqVAOmKzgJflZPqj%2FKOADde63FnZ2TDjc3hMLOjjcMGOqUBPcwKgeH8q24ZD4UqBFkR%2B8BSEb4aeVBDTJT%2Fo%2B634Ab3eO7sMvo5ulTgQhinCVg8w%2FOwIik6m429HUWVcfQKLx6%2F1Xd0V2LkaRezL0A16a6FMkDmHeigq6%2BURPHJAX%2BbOoG4X3tto8oTKIC%2BGfKokrg5zg7iiTpTQ%2FjxrOL%2FnA1qiZAodao6CLSzbGxYMM%2BrkSioAUfzRD4h2c3tKOZ2OLmrQDNx&X-Amz-Signature=b2add324c2f149cf1e88bed7e875699bce80cddbaeef08e2096f95376ef7e26e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PTWB77%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2BJ%2FtjMnY4Caov6NU6VvzJ%2Bxj5%2B5b69nb2ATksvFa4wIgVl1U%2FSFC%2F4YNqA2KDJFgR55gC86VhxlW021AuqrlIsQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmvvZ7RjrlDVss4iircA05dyWTz0anUNcoGEP9VBgOCwvZLa0TsHcAMej4IToss%2FyUf7boTwyLTWCqZJ21B2%2FKzZm0e5TJ6AFE8qDjO1lrOIsmf1MR89zXc6MZt3TquDN74Lr1npzx4mg5Xms3%2BLA5xr2feUtcsHNvEE2Y4Be%2BX7F%2BBA3BtcL4QD1ivl5AFLVewrzKX6%2BE%2BndMrcpO%2FLOYICVvyy4%2BQ%2FRIr53EEl2ZHjE5qaBGT%2FSR7aZ4%2Bx1eoOcqHFtN8EbH%2F4Qpp939aNI8hfrMLRn4zZ7HDirsRSsT5XeKFlwTHaQie6aOxDVMKm%2F9Ozs5O1Tv33qG%2BiEzRJo3d6mUOmVQnDTaUPiUWmhfTuhHS9M6QuYZWBW2lMJyQNQu2Bb%2BehbpMjlQDZ2WzAMM%2F30ehLKPoyZPgzhMwfs51mvw427rhfzIVD9DGhfyB1PNF6e67x06S0%2BdmbpUpjpvo9vupXMWS%2BKeLPX1Kt3JZRzdo%2FhbLMTc5BwbsgZWlemdgKOcAxYQz%2FzYF0zMpqRr%2FUuBswf4A%2FytMFAV89Pg%2BmCZUNjMGIusxKOr0icaazEFNOKxH4cbzD04rlU%2BE8Z2F5t24M7dUGh0RwstGK2OAzuF%2FyID56BbgBBT4zFm1gXfGs5YSo3%2BaYqAtMJmkjcMGOqUB1sFt9bVDL0vVJPkIsr03kOSyRV5KbvAMjLLeOc1V3%2FtTW%2FxPjVVddrAWs%2BVYh4lAoHq5fiT5%2BO8XxtEZQJlvT58AVY86PG7fvvVyx7ZWrUje%2F%2BytEGjllZm5Jx68SHiK6L61elvzbB8vxE4huNKyLelffMWroKRz3%2F%2FKHUbxPQXyKypEIy0kVUwzerZ3xGM1%2BhkmqaIkTB%2FafS8rZGulY2OdeF7B&X-Amz-Signature=987e796661c59ad0c141d660e3f10d7f789746c86b1fd5d468cef6021f7eade6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
