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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQHJMGV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoupyJVL0qBUKZwx3C49FrUDF0e7OqkuwSpnxd73AnzwIhANOfXeH2y34Se1R1q5budpOapVemOAxkDIZKu6E5c1QFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUCiZx74N9G9Znb68q3AOxMtG7roWQgGTNU6iyjuGs6b8fGoyAw3gGK9%2FazPsbe3xsvGLfOHqejgOIWe%2FTQQ8tXlWNVs2RxY8TMA8Lrq%2BBk1fpk%2FAlU3x8bGL2ThDK6PEYRiZOuS8fTZPIPQReK%2BBkOqik%2BGv12iBu6CQE7Eed3O4tAAEk5sLteWttA8mb3EIvUqMZXt0wYzAhLiplQzvpLkk3X0vDtHkHkn3zcaJ%2BveFENSI2SEBBfzNd6qO%2B%2FtnmplG8HUrEAQRqcvRkV3pLpekGWsOaMkpedwf%2F9gFYm7Xtg1ptPsimzbTZtylVtOi0MdjlnU9SsDEMsk6pvUtVoONJbL5DKiAl3WkzvF6piRFz2ZI94uOwZWcVdZmNHLjqshzYvjkJ7RNJ01W9%2BLMc48UEJB%2Fwc%2BPrZbBkfYwER16%2B5B95tMSFtQXbIT9cEdUXH%2Bn%2FQe6K11QyCbrO5Y0NxPIHbCJ3%2FthF5OqZ%2FEQdhoVKkpmT0xAq97mgGkMraA9vZf1GfA2pl5Ar4q0TUZvc7o2LV0WvkhOT0glwJ0blzR7ilnDSIC7n5KaPC7u1crbNwsNdfeHxq3ZrNOuLU3KiwAgiKXHXQW5OkEY%2BHamIjXs3Bus2zP0O7oQGlqQU21jL6IN97PeiRsxS7jD0rbDBBjqkAbqghcNLDwjgE1YmtLJawvvlg%2BHr9vy1DmqMcsONrhXDohngXhmLoBKpU993F446%2Bwoq5YrS2TTpTtzHpNZKes%2Bs30D568iNp8Cqni3nWw2CsfdnzUxWUAWO0L30QqgP%2FnKGtRlGvFeYGFlRW%2FT98LoR1oQSyN4oIRuOulORchsFJ1%2B8Q2U%2BS%2F4VorBgyWQygX82VXScd1E4u9zYSx%2FW8zAxnLwR&X-Amz-Signature=37583991c2e2c1cee11fe4f7e0dfe562f81b495c0759c653cdee4ed45ca0be51&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQHJMGV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoupyJVL0qBUKZwx3C49FrUDF0e7OqkuwSpnxd73AnzwIhANOfXeH2y34Se1R1q5budpOapVemOAxkDIZKu6E5c1QFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUCiZx74N9G9Znb68q3AOxMtG7roWQgGTNU6iyjuGs6b8fGoyAw3gGK9%2FazPsbe3xsvGLfOHqejgOIWe%2FTQQ8tXlWNVs2RxY8TMA8Lrq%2BBk1fpk%2FAlU3x8bGL2ThDK6PEYRiZOuS8fTZPIPQReK%2BBkOqik%2BGv12iBu6CQE7Eed3O4tAAEk5sLteWttA8mb3EIvUqMZXt0wYzAhLiplQzvpLkk3X0vDtHkHkn3zcaJ%2BveFENSI2SEBBfzNd6qO%2B%2FtnmplG8HUrEAQRqcvRkV3pLpekGWsOaMkpedwf%2F9gFYm7Xtg1ptPsimzbTZtylVtOi0MdjlnU9SsDEMsk6pvUtVoONJbL5DKiAl3WkzvF6piRFz2ZI94uOwZWcVdZmNHLjqshzYvjkJ7RNJ01W9%2BLMc48UEJB%2Fwc%2BPrZbBkfYwER16%2B5B95tMSFtQXbIT9cEdUXH%2Bn%2FQe6K11QyCbrO5Y0NxPIHbCJ3%2FthF5OqZ%2FEQdhoVKkpmT0xAq97mgGkMraA9vZf1GfA2pl5Ar4q0TUZvc7o2LV0WvkhOT0glwJ0blzR7ilnDSIC7n5KaPC7u1crbNwsNdfeHxq3ZrNOuLU3KiwAgiKXHXQW5OkEY%2BHamIjXs3Bus2zP0O7oQGlqQU21jL6IN97PeiRsxS7jD0rbDBBjqkAbqghcNLDwjgE1YmtLJawvvlg%2BHr9vy1DmqMcsONrhXDohngXhmLoBKpU993F446%2Bwoq5YrS2TTpTtzHpNZKes%2Bs30D568iNp8Cqni3nWw2CsfdnzUxWUAWO0L30QqgP%2FnKGtRlGvFeYGFlRW%2FT98LoR1oQSyN4oIRuOulORchsFJ1%2B8Q2U%2BS%2F4VorBgyWQygX82VXScd1E4u9zYSx%2FW8zAxnLwR&X-Amz-Signature=a406cbc172e72fe004351281e8ccb528d32e2985820593af97f04aba95a02e76&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQHJMGV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoupyJVL0qBUKZwx3C49FrUDF0e7OqkuwSpnxd73AnzwIhANOfXeH2y34Se1R1q5budpOapVemOAxkDIZKu6E5c1QFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUCiZx74N9G9Znb68q3AOxMtG7roWQgGTNU6iyjuGs6b8fGoyAw3gGK9%2FazPsbe3xsvGLfOHqejgOIWe%2FTQQ8tXlWNVs2RxY8TMA8Lrq%2BBk1fpk%2FAlU3x8bGL2ThDK6PEYRiZOuS8fTZPIPQReK%2BBkOqik%2BGv12iBu6CQE7Eed3O4tAAEk5sLteWttA8mb3EIvUqMZXt0wYzAhLiplQzvpLkk3X0vDtHkHkn3zcaJ%2BveFENSI2SEBBfzNd6qO%2B%2FtnmplG8HUrEAQRqcvRkV3pLpekGWsOaMkpedwf%2F9gFYm7Xtg1ptPsimzbTZtylVtOi0MdjlnU9SsDEMsk6pvUtVoONJbL5DKiAl3WkzvF6piRFz2ZI94uOwZWcVdZmNHLjqshzYvjkJ7RNJ01W9%2BLMc48UEJB%2Fwc%2BPrZbBkfYwER16%2B5B95tMSFtQXbIT9cEdUXH%2Bn%2FQe6K11QyCbrO5Y0NxPIHbCJ3%2FthF5OqZ%2FEQdhoVKkpmT0xAq97mgGkMraA9vZf1GfA2pl5Ar4q0TUZvc7o2LV0WvkhOT0glwJ0blzR7ilnDSIC7n5KaPC7u1crbNwsNdfeHxq3ZrNOuLU3KiwAgiKXHXQW5OkEY%2BHamIjXs3Bus2zP0O7oQGlqQU21jL6IN97PeiRsxS7jD0rbDBBjqkAbqghcNLDwjgE1YmtLJawvvlg%2BHr9vy1DmqMcsONrhXDohngXhmLoBKpU993F446%2Bwoq5YrS2TTpTtzHpNZKes%2Bs30D568iNp8Cqni3nWw2CsfdnzUxWUAWO0L30QqgP%2FnKGtRlGvFeYGFlRW%2FT98LoR1oQSyN4oIRuOulORchsFJ1%2B8Q2U%2BS%2F4VorBgyWQygX82VXScd1E4u9zYSx%2FW8zAxnLwR&X-Amz-Signature=a61e0dfcaaf649196831b06ced5cd2e6efe15051c1880e1b4326395bb26f7bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP44Z4QN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BVwqPosZuMSP0toQO076iaGuy8%2FHzNXO7rdI8D%2BrqKAiB8yqPg%2Fuq2ozGg%2FGFnPgevJr21cpLB85Ol4fvF0isPuiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmzolFxKYzgumY945KtwD%2F%2B1uY8Zk%2Fz0FG4qqZBDnhH8pyWhNtgYf8HmOPvquYZZvodV8v5W9v%2BcocTHlZHp7bOmz39s4BYWupZ%2FM3BgAX%2BMXAy6Om%2B2Wc47%2F%2BKgc0%2BwwsaX5Y634L8GGodXvcp23PgW%2BjA1HpYQqyyv5VobHYuCIwqt5PorqWjwIYHhk%2F4YcWw4rQGJn7xSs4Z%2B646G0EJMbJM0QtFocGGvSWP%2BDUQ2QEJx%2B3Dk8UPKbEmTLDlMKsYsGuLPxRw84iHm%2FAlh9UxEXZttBwZx2MHRSkcitwYvt9mgO0DIgVFk3HMlqPeiAU3gW4F0KKsg1ZUn6G%2F7y1%2BmfLKFXs%2Bwzqp2BD%2BIOGlx6r%2F4D%2BJk7EkmV3HElZgoa1q3k4fNBz2pMkhaMaYef9HCcd%2BCBp%2BddHlGctaPVqdv%2FvJjkNcNWtdzbM3%2F3M%2FdrdSGn4dvi8%2FqEEuxmwB14iINCxKcX%2F3OsS643%2FneUNNU5aocBE0bK2NEazr8NPWefKIHafUPqkhJwLdeCm5pTtWWpGY2Mc6gyL9vrHdx3GJTIt2IYO5cti8nkx%2Bj%2Bwwu4BQ284RwL%2B7sDh6d1badGBCf4AxPYWZcBzmtZor2aOZqLH%2BF0qUux9TfSay1VsKDvIPVwmqtBtnqdDOsw462wwQY6pgHLTUR9YFll2vWNdUvCaW%2BD5P9x3XqKpeN1uIE8fNRoDie1WRzVVwoFOQzOwNDwSfVH4OWxf6ZkayhpneD%2B3J3OMUXPh%2BqazZiwZDkslG0HYOe7NuJlnRS3pPBC6Zsq1E9E79LcqAtvkE%2FFyKpcdl9VPn8jpXXo6U4ZOwWIF%2FdBuQdHvZ98rU2Ey3%2BYbQZPt5ZulJ%2FD%2BwgheNAk3O8juLh54yLwEor2&X-Amz-Signature=90763d2f01160d62e3665afe739b539df274ea2f6ac1d9817fc7504743ec83e9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TLJCCJO%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBquwvznP239WH52OrLqTgTUu30gExvWYgCtAETz8l%2BnAiADPwDtJhhjdGuBSek5FJG8SW9lEQtPD0LWOwpCNHrx0iqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4ndPeTnGAWDQZ3fdKtwD2zCS4QP2tKnmSSKWFYEiqdsdvl72FztVI2S8D62%2BCCNtNy4QgiITsANhzZ%2Fxx8SOn3IFdVL4oxAJe3mPFSfh3wZt5zwV4ikD5tjegXxH1%2FQCGqolKJoXE%2BqJNKrZmATygWsIz0gM7duD59p42gFzRUz1imQc3vmo7mtH75aX8aOZPexNrdAVpm8%2FXg3O6eDdD2rfPOZpHUQIVLwfFlzAsDe6gxGX5k3BWS60dAmL2DC4URRHKcFH%2FPSfJSLgfim3QkHUEI3co%2B%2BqdZSyQ7ZN%2F86dFVpEhncKoKlfg4TNO5QHboCH62wIjcmOVlaSOYRf4PzRkSUbPJFREFFW4P1xMA3wOR2JZts1DDjE52hLf67OGQFmeRZg4trLKqsQsr38vWxrANC9ccF%2B6VzTXEShE3QSqlKnjp1%2FYG%2Fm2OHZMzxdyZaq%2BEUMK8vTymlLealFNshw9H9W%2BjPYrBWhZPtDyoZVJujrLJw9V84Urd96ZPOcn%2FpL%2B2p79E8iU8qeIgVNw49yd7X%2BQcY%2FjHKx5M5n8KYdzBQVEbY9kbOFEpK0IosIP2VKdLdpTG5RuDPTiEIoEyv8N057H07zvY4z3FpP1g412m8DqExZSchgAuA3%2BtRUb3PnK%2BMp2CgpVW8w1aywwQY6pgGSSBDSNX7TR2L9uOH9ny6Ehjy7P2v4fi7OQ9cthBgj8YZ1FD6BUM2hRRJmuYCpQt8yISmdI6rJi%2B8nvNNCKR%2F0aP%2BIwcVGM3pB4FrFW7cgYimhGpJQqLvV2KStu7WiVuuUFOYBLLB%2FKPSAS7S2%2B%2F3sFp%2BVA3D9DxdZyJMsBEVGIsbajPmtTcgQo40aaAsf4FfAIUBseB1v%2FxbQ%2B%2FPnhYMTpMsYxQty&X-Amz-Signature=3efcd60cd1a9474df7a33fb551dcbbe7fb993edf5e77d0dc5e1c359fc94fd88c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQHJMGV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoupyJVL0qBUKZwx3C49FrUDF0e7OqkuwSpnxd73AnzwIhANOfXeH2y34Se1R1q5budpOapVemOAxkDIZKu6E5c1QFKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUCiZx74N9G9Znb68q3AOxMtG7roWQgGTNU6iyjuGs6b8fGoyAw3gGK9%2FazPsbe3xsvGLfOHqejgOIWe%2FTQQ8tXlWNVs2RxY8TMA8Lrq%2BBk1fpk%2FAlU3x8bGL2ThDK6PEYRiZOuS8fTZPIPQReK%2BBkOqik%2BGv12iBu6CQE7Eed3O4tAAEk5sLteWttA8mb3EIvUqMZXt0wYzAhLiplQzvpLkk3X0vDtHkHkn3zcaJ%2BveFENSI2SEBBfzNd6qO%2B%2FtnmplG8HUrEAQRqcvRkV3pLpekGWsOaMkpedwf%2F9gFYm7Xtg1ptPsimzbTZtylVtOi0MdjlnU9SsDEMsk6pvUtVoONJbL5DKiAl3WkzvF6piRFz2ZI94uOwZWcVdZmNHLjqshzYvjkJ7RNJ01W9%2BLMc48UEJB%2Fwc%2BPrZbBkfYwER16%2B5B95tMSFtQXbIT9cEdUXH%2Bn%2FQe6K11QyCbrO5Y0NxPIHbCJ3%2FthF5OqZ%2FEQdhoVKkpmT0xAq97mgGkMraA9vZf1GfA2pl5Ar4q0TUZvc7o2LV0WvkhOT0glwJ0blzR7ilnDSIC7n5KaPC7u1crbNwsNdfeHxq3ZrNOuLU3KiwAgiKXHXQW5OkEY%2BHamIjXs3Bus2zP0O7oQGlqQU21jL6IN97PeiRsxS7jD0rbDBBjqkAbqghcNLDwjgE1YmtLJawvvlg%2BHr9vy1DmqMcsONrhXDohngXhmLoBKpU993F446%2Bwoq5YrS2TTpTtzHpNZKes%2Bs30D568iNp8Cqni3nWw2CsfdnzUxWUAWO0L30QqgP%2FnKGtRlGvFeYGFlRW%2FT98LoR1oQSyN4oIRuOulORchsFJ1%2B8Q2U%2BS%2F4VorBgyWQygX82VXScd1E4u9zYSx%2FW8zAxnLwR&X-Amz-Signature=161a1fcfd55fdc55bc223f29e39b0d77c26b7e32c0d78e8c812141c01e727d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
