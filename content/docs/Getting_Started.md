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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4S7RKA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9h9vWL2N2fPqP3hGPRW1j0SuJhnvu6BKLgw7LeWiA6wIhAITU5fbT4qNBy5MNwzXvBoHUr0fPsgBC3h1FXcJIVqf0Kv8DCBMQABoMNjM3NDIzMTgzODA1IgziFWa%2FnXshA60L0vMq3AMjSFzv0clLeRVXhOteZ%2FV5j0MXPSk3YUI5h65xmEMXiL7rC5sY9LtPHW8Rwz3%2B1VGZsIngazby91nVuNQYW1wt2DCCTDniWDkPZ%2Fo21%2BXMDmRSyrzdl1p7bi02E%2BI89m7qDyqwn23cQNMvrzBAizxzKCjlQCPoSg20JKE0oUpV2E7XjxbgGcqBSfR7BcQx2e%2BwlohxOKUNm0acUZmVjFNYZljLpztg6eJQfN7tNpNiekwVNC0ZzSHaLQF3WyRt%2BSZzC3pUQxhmkT9YLCAKBgD%2F17ImaWp%2FEXKsVaE9Ck1vcrKgZ0WD8t5wfR9fyKue83zkPfyTC9cJTE%2BBUTVT68v8ur%2BqfbInoWmNgeGfte7skY4gik8xsOBcXdloFCPbwM3XajfVyPguwHs5uSe6jFHuUm%2BXepe%2Bu9dX6I9PG3l54zXW6%2B5nHoaPrWMCwAWew%2FsSlvKEuG%2BB3KOiYeg2ng0Od21SeuSYD3Je2Gqpd6%2FsM1N1xjssbL1epUOsxeknW1oIkdOtC%2BEjAhyKC1zFd2MwzBXCLc%2Bnhm4v%2BEWqqaw%2B68mBbhyAUEpIRO27GWHFBIrMaBp1uO7BpubgJTMuBMsiBI%2Fnlhaudk%2BcO2i7kU7ZasFoLAjRb5ae02KhIzC3hre9BjqkActvX1RVLThWpHgqdlj7nMZkNBTXMN%2BhjBC%2BINoIGXKG%2FQdibmr1c%2B2655gQ%2BK6E4xIoiH5nEl6loko0T4upRxHpAhppxb9%2Bt4qod9YtewaGhpnV0oRVxylkVBzcQYp6l1zvrZHfPqxLflbg6LFBYzYVBSoOtt%2BRHYzQDtA2Rxlx6oDX1%2FDWjRaZozkDMJ9Y7wD0pDcZEUDL4QIj8HmO19CcaVzr&X-Amz-Signature=e52a0a682a4027897bdc8545831657a6d84fdd4dc4ab44447f5c1299754e1f66&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4S7RKA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9h9vWL2N2fPqP3hGPRW1j0SuJhnvu6BKLgw7LeWiA6wIhAITU5fbT4qNBy5MNwzXvBoHUr0fPsgBC3h1FXcJIVqf0Kv8DCBMQABoMNjM3NDIzMTgzODA1IgziFWa%2FnXshA60L0vMq3AMjSFzv0clLeRVXhOteZ%2FV5j0MXPSk3YUI5h65xmEMXiL7rC5sY9LtPHW8Rwz3%2B1VGZsIngazby91nVuNQYW1wt2DCCTDniWDkPZ%2Fo21%2BXMDmRSyrzdl1p7bi02E%2BI89m7qDyqwn23cQNMvrzBAizxzKCjlQCPoSg20JKE0oUpV2E7XjxbgGcqBSfR7BcQx2e%2BwlohxOKUNm0acUZmVjFNYZljLpztg6eJQfN7tNpNiekwVNC0ZzSHaLQF3WyRt%2BSZzC3pUQxhmkT9YLCAKBgD%2F17ImaWp%2FEXKsVaE9Ck1vcrKgZ0WD8t5wfR9fyKue83zkPfyTC9cJTE%2BBUTVT68v8ur%2BqfbInoWmNgeGfte7skY4gik8xsOBcXdloFCPbwM3XajfVyPguwHs5uSe6jFHuUm%2BXepe%2Bu9dX6I9PG3l54zXW6%2B5nHoaPrWMCwAWew%2FsSlvKEuG%2BB3KOiYeg2ng0Od21SeuSYD3Je2Gqpd6%2FsM1N1xjssbL1epUOsxeknW1oIkdOtC%2BEjAhyKC1zFd2MwzBXCLc%2Bnhm4v%2BEWqqaw%2B68mBbhyAUEpIRO27GWHFBIrMaBp1uO7BpubgJTMuBMsiBI%2Fnlhaudk%2BcO2i7kU7ZasFoLAjRb5ae02KhIzC3hre9BjqkActvX1RVLThWpHgqdlj7nMZkNBTXMN%2BhjBC%2BINoIGXKG%2FQdibmr1c%2B2655gQ%2BK6E4xIoiH5nEl6loko0T4upRxHpAhppxb9%2Bt4qod9YtewaGhpnV0oRVxylkVBzcQYp6l1zvrZHfPqxLflbg6LFBYzYVBSoOtt%2BRHYzQDtA2Rxlx6oDX1%2FDWjRaZozkDMJ9Y7wD0pDcZEUDL4QIj8HmO19CcaVzr&X-Amz-Signature=c110426c482554f6e4e886d74ccfd1b4ebe93aa673808c8b9e78328b43a1aa11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y64GRATT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC08Ii5J%2FHTa9YSUygClBiZDLl5kCrtSGZcg78hmr6OkAIgUrX4aYMH73joLuz9dWQLUheXwlJvFc9c8apP%2FwA9kLEq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDIhbdnp4SXVzB7bUwSrcA6m%2B2qRk8tYHlRTyvfAV337zWYhlAmS1UNp60app822vDnKD%2Fuc1n8DnD0eKPCfx9Uxamnvb7YZrQj25fczYnkJlZ%2FtSgC9S5VF5VXa61rlnNDUIAyMwptF1qaQPwsWljAKVifpkmtxdQvqAnGx36KzTPtm0UchO%2FDcY3Cd4JSwLBOAlHyIvAxFRYJMf%2FuZtgytUDyvwLmB1VU%2FLY02%2FcUNQLsBiwsssUG2W%2FFJrjBaRAD8so0rYSHBZ7NH2l7GkDITE9P4puq3pQCH2skf9ubZj3FymRdhRdk3lnkUhV0jG%2BVzONjtpwORPkYsXdfCbDwPyOA9zM%2FCTGCW0C27Qd39aOK2rQEPAfcmiASPc8O4QX61PFMoSTI5ViK9d42i9YkUUHsUeugUWb67qFoHqUSpEKRfVXoEt4Ecer1vAZzCDfdBFsOwKu5Gz%2Br4dkqtW84oFHS3F8jbgVl2bJUrWABMXwrxVC%2B5DWArJpJHlhv2GegKlSmOCGHauH9jdb0mZNtX7RelJABM85ODG98mlFIHgpGBWN5tP%2BY92oqBYT7T2Lp2XF%2BAERe73mGuyXQwj0z2J5BvqsjESMI7oyeBQfiB9XX70zcSUKe05%2Fiax9CNt%2FGkRR9ilYA3tsMcWML6Gt70GOqUBym9xOnDr7xRyEUbTZykTOE1LNigttVzot6AUaunvPYoLHjrPOAwpJrlQI4Muti2VDiz8XFtMU1ruc1QYxkuwmtlj6GLjCWYL5KEl57N%2Fc1%2Fwxlgm6JemzKE5RWs4rDPobJT2ALalDnt%2BgUKDl6Ee4Kh8r8pAO8uzYpN5yMoZ2wSh39Vr4mb25dp0CxAmZZsYhpgXmPFz%2FTYTuh9a%2BS4Lz4XyhPF4&X-Amz-Signature=e4036a8d263febd88c1b22bdfa4d297693af80b42b7cc21fbb6cebcb44b700e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466636H4NJ7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6JKLww6oOR%2B3fr8rtLDFpX43h6VIlyCSH9mOdeKeTVAIhALkuKtAkJ73N026BB2xb%2F0PJxI4Ql1wJNoo5RmQCPHIbKv8DCBMQABoMNjM3NDIzMTgzODA1IgwX%2Bb4e4RQHyS7cIF4q3AN6ZVY353IR4vo2kS8Z32SEvwsBMnf%2FR%2BRBis%2BtshR0ZiLmgUrcV2Tnbe1IvmU3iwzu1X7%2Fww6CwFQDriQn6lt18oG387PdJmDTnawMD1hcdUk79D4cnGsqHsPk2hzYi4s5S4aKHdjzopSEJ3m28Gb2sSJJcnVabXcKsRT1byFQt7E9ZqaTQQvM0q7dvgsX2ZCabNgk413qDDeHiUCa8UhZPR%2B%2Bgcxodbm6K46polMNFYUzv6fPuRhEeQHsEPqU2KS1C3R0BhyJivscl1gB%2BN80Nqy2RqCeBhB8z41a6rTzEaEy0RiuJWNDRnAk8n1%2Bj9%2Bm0MaGaS3xR5KIai0eU%2FV%2FYudUAJtSpbkOu48pao4bb6MMsjWkCCNQTYKOB1kBhCqzM8Dzxo7MpxIzfV%2Fx6He2cyc%2FPyH2%2BSpKq1b3y9Lcxa64Wwv9LN4QtPVN8sULqTyv8rb3%2BVsTpUoa41pY4thfG4LAPI49IlwGnUQx%2BeatvsRxJ%2Fww3UxRFbv4MAVLA5Gf2NUGC4rFIoER42dtT%2FehgvDkQxGMb1JGaBXdLi9cTW1qoZcRQynNptsmkfIUh%2B4VUP3bUApQsxpGG6YABZIOOc7EKrkDn5HUlPXMFPhew78GA%2F3vIi4iTxfg3TC2hre9BjqkAYku3vJOSPqehHXwUciu1m%2B1gtqH5fhcVTQlxO0pFhtIzewb0Y2IZ0Cg2KArQ1jFElV0S4oUq2DGNlwpWHeNw3sr9uqJGA%2BGR2XSnAjBStLXgTR%2Bs7bxnf5m7VBfzn65TjY8ayG3c5cmYbXAfD9GAyFfCZ%2FFld4sbus3CnXkzqgn7nZerQUgTJJwoBIz2KsuJf7h4OvG3rKNbOsVrsWi%2FgOi8MQa&X-Amz-Signature=90a1d1aca3d16e5fe1e64bff00582c8b55d44f61b92e9040c909da7547e3878d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4S7RKA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9h9vWL2N2fPqP3hGPRW1j0SuJhnvu6BKLgw7LeWiA6wIhAITU5fbT4qNBy5MNwzXvBoHUr0fPsgBC3h1FXcJIVqf0Kv8DCBMQABoMNjM3NDIzMTgzODA1IgziFWa%2FnXshA60L0vMq3AMjSFzv0clLeRVXhOteZ%2FV5j0MXPSk3YUI5h65xmEMXiL7rC5sY9LtPHW8Rwz3%2B1VGZsIngazby91nVuNQYW1wt2DCCTDniWDkPZ%2Fo21%2BXMDmRSyrzdl1p7bi02E%2BI89m7qDyqwn23cQNMvrzBAizxzKCjlQCPoSg20JKE0oUpV2E7XjxbgGcqBSfR7BcQx2e%2BwlohxOKUNm0acUZmVjFNYZljLpztg6eJQfN7tNpNiekwVNC0ZzSHaLQF3WyRt%2BSZzC3pUQxhmkT9YLCAKBgD%2F17ImaWp%2FEXKsVaE9Ck1vcrKgZ0WD8t5wfR9fyKue83zkPfyTC9cJTE%2BBUTVT68v8ur%2BqfbInoWmNgeGfte7skY4gik8xsOBcXdloFCPbwM3XajfVyPguwHs5uSe6jFHuUm%2BXepe%2Bu9dX6I9PG3l54zXW6%2B5nHoaPrWMCwAWew%2FsSlvKEuG%2BB3KOiYeg2ng0Od21SeuSYD3Je2Gqpd6%2FsM1N1xjssbL1epUOsxeknW1oIkdOtC%2BEjAhyKC1zFd2MwzBXCLc%2Bnhm4v%2BEWqqaw%2B68mBbhyAUEpIRO27GWHFBIrMaBp1uO7BpubgJTMuBMsiBI%2Fnlhaudk%2BcO2i7kU7ZasFoLAjRb5ae02KhIzC3hre9BjqkActvX1RVLThWpHgqdlj7nMZkNBTXMN%2BhjBC%2BINoIGXKG%2FQdibmr1c%2B2655gQ%2BK6E4xIoiH5nEl6loko0T4upRxHpAhppxb9%2Bt4qod9YtewaGhpnV0oRVxylkVBzcQYp6l1zvrZHfPqxLflbg6LFBYzYVBSoOtt%2BRHYzQDtA2Rxlx6oDX1%2FDWjRaZozkDMJ9Y7wD0pDcZEUDL4QIj8HmO19CcaVzr&X-Amz-Signature=672dd1ed93996f6d65babd41e18ee8c1421a09c11dfa2dbdde4ed2c1680eb171&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
