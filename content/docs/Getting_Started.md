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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHTOGGE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDtYDe%2BSZX6W%2B5rDaL46zdAge62nTl%2Fi8jjAAR87HazzQIgKUtrliWo5FO6aWtzJIMLGdd43s5nSU%2BM6hiC7HO6BtIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAN%2B3RJfEvYFQfN%2BuircA7kHFjEZ2IdrB%2FieGzE10rsEbGqpWuB3mhKAmRBcie2Krf64aBObu%2B%2FYJSXWDXfFPvWgwvo3YOymPJYCWkeH6Lh56%2BK6gcTJDiRZfbVIQs%2FGEvK74VozeEtQhjT%2B0uqoPSgnucUg%2FaAq9equInKiY599GMWuyWmURUte2GcG7CDQolgPhQGQIUSKVPprEjHtV3xjELOslk4ZlgzrK11MhmpcCSQPra0pVzxi8%2BBRKOT7WMyOHGejxW4THg5HC8qyQiv%2BaLL%2F77h%2F8LPuk23kxi%2B8yFh5DHpQJi17Kdpvj03MjRg3fgzuCymVXvTtpdiBF1GYC7BkSRf%2Bk9nGIgrnXpE3rkEa%2BzxzscuLKJaJPqPV6Q9ggNiIZQfJgVQJCVu%2FQ5eqtOxrbbkMAN9Dc4Fp%2FXAPOtgLuXgvZ%2FZ%2FD2q4p3PbidQW%2BgonEsrs0oC5Z9x8%2FiDR%2FdkRTzB2Knbg7PMSo%2BsmcXxqsr%2B21oySUEW%2Fl3qYmnDQuvEgIGzKM7atZ%2FGXi7nzKBSAF6cR5ed1uKf7zfYesBkjlMouZdxA8hwyfjtrYYIJVj1SivQEl8JwVWTj%2FrGh16oP93GfEY5RAmJWdU%2BpVrC%2BuzvsmLy%2FOfQaTrMwpOkTmTsx0%2BsGQLLYMO2Phb4GOqUBclK2Wp66TrNuV%2BP6i4tduL1aWEKZIcVskAgT1yWqC2hJ6MNv7MyEeKSGvY7F44s4awgY9LxwjDoB3FHyQtz9lGQTnOLJH8NsLxDWYYyAVkwb1XKYX%2F8m5TaHsnHMs3lM5e2XbPaBGwwrU5rvr9lNyLzz%2BOytN9L2HNutOHEpsNu8CZV6eSYn2hbENmqJxTVosvjwCOLXK6mRxST7%2Frg%2FWaUdazg6&X-Amz-Signature=09cd37066c690c93bf66f81b5d52ad5c79dbee42dee1b1dca6d0934822b3d916&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHTOGGE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDtYDe%2BSZX6W%2B5rDaL46zdAge62nTl%2Fi8jjAAR87HazzQIgKUtrliWo5FO6aWtzJIMLGdd43s5nSU%2BM6hiC7HO6BtIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAN%2B3RJfEvYFQfN%2BuircA7kHFjEZ2IdrB%2FieGzE10rsEbGqpWuB3mhKAmRBcie2Krf64aBObu%2B%2FYJSXWDXfFPvWgwvo3YOymPJYCWkeH6Lh56%2BK6gcTJDiRZfbVIQs%2FGEvK74VozeEtQhjT%2B0uqoPSgnucUg%2FaAq9equInKiY599GMWuyWmURUte2GcG7CDQolgPhQGQIUSKVPprEjHtV3xjELOslk4ZlgzrK11MhmpcCSQPra0pVzxi8%2BBRKOT7WMyOHGejxW4THg5HC8qyQiv%2BaLL%2F77h%2F8LPuk23kxi%2B8yFh5DHpQJi17Kdpvj03MjRg3fgzuCymVXvTtpdiBF1GYC7BkSRf%2Bk9nGIgrnXpE3rkEa%2BzxzscuLKJaJPqPV6Q9ggNiIZQfJgVQJCVu%2FQ5eqtOxrbbkMAN9Dc4Fp%2FXAPOtgLuXgvZ%2FZ%2FD2q4p3PbidQW%2BgonEsrs0oC5Z9x8%2FiDR%2FdkRTzB2Knbg7PMSo%2BsmcXxqsr%2B21oySUEW%2Fl3qYmnDQuvEgIGzKM7atZ%2FGXi7nzKBSAF6cR5ed1uKf7zfYesBkjlMouZdxA8hwyfjtrYYIJVj1SivQEl8JwVWTj%2FrGh16oP93GfEY5RAmJWdU%2BpVrC%2BuzvsmLy%2FOfQaTrMwpOkTmTsx0%2BsGQLLYMO2Phb4GOqUBclK2Wp66TrNuV%2BP6i4tduL1aWEKZIcVskAgT1yWqC2hJ6MNv7MyEeKSGvY7F44s4awgY9LxwjDoB3FHyQtz9lGQTnOLJH8NsLxDWYYyAVkwb1XKYX%2F8m5TaHsnHMs3lM5e2XbPaBGwwrU5rvr9lNyLzz%2BOytN9L2HNutOHEpsNu8CZV6eSYn2hbENmqJxTVosvjwCOLXK6mRxST7%2Frg%2FWaUdazg6&X-Amz-Signature=e131c3298619049045ae5878f78916cc9fdb184127d21b43c1e62811efaf54f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETXZGM5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIAZZNDziG%2BD0rJVbPqWzYAi8OkZp9MawKfKhWaRkFMq%2BAiB8fR1pZnp2Nqme5Ws6HSTWBUWFmiKi6Yskf8TMPcU9rCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdY2N3fPTaNrYVAYuKtwD2XviYklQl5ATM%2BJPCVP31BXHGxCFtfAXeusZX83ENxQsQ%2F2%2BpymgipKxs7nYlaa0SXPdVn1gtXBN2s1wQXIJG%2BuzlC3uMWIfa2bg6XGvDqU9zU7KKralEvJPUDnZqhBACGprvnTcbc33sDRdU1xfF1udosPGwx4WHxRwgJQOtZRPrPypQwzIaaJDSNjlGh372%2FnDZbcUf1H%2FsHRG5KtIgre1TNh13e3iBSAAizOuAY7ijxLLZKTn%2B66cbWx73%2FxtL8dHNl8Zu%2F1nDJDJmvHqtsta25lXzb%2FOoDa0I4J8LOgjZHwCNW20qs7YgzuvV1f7yrjSqX5O9H2NSKPRz6ICVjaz70hoDymYU7Q0POEDtYNk8%2Fdgrdx1il34RtRLTTrUZYiC1qtxdHWZPLk6zfVo7sxvLJ6mzibd6MXjFLg9vTwjwZ1DztDBSLwpFs5gSy3RppPjxS4EYpXhISPyt2PS1BE8alJOngJ0ht%2F0ef9scFZ3OlQraY1oIWDWe%2BLZfTbI5rle7nzOV1eXJQVp22f4fPijcD1Xu7EAn4MKYis4Ob27SQ%2F8ZnKTzIVmnPYnsVNt7IuVbmFCfAf3l%2BOobN3MfOwmp2IMcVa2a9rTnePVTCH5cEAjzMnoAx27Pn0wj5CFvgY6pgE0h%2FOOsYXOSEwlxBRNI%2FmGu%2F%2BRH6A8qpFCLKF5lx8%2ByyCG9ow9iws20jkTUslzfY93JS3Ada6Izmbxeoq%2FRw9ifBMShyNv8jtlejShgPGzBY%2F6JCADG1E5Y%2BM%2B0rEKVPgzvKzbBQe7hJ4A2u5JEiz1%2BC2zEJ4Ik925bQ59%2BFBw4OtK%2F6fKByvNDjcvk%2FaOi93OpGWVsM3Hup%2FyMyv%2FJ1Em4kILF8dV&X-Amz-Signature=f303676b569a3cec6f35d0083d53191225fe7016aa5768a298304bcae1889a19&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2UF3E75%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDgjBJPSCLOn%2B2dTkGiNsMDTN3TrH%2FUZTPn8rBKnrRxEwIhAJ648jk6H3XBbMtidODfeX3FDnRu7rm3E0o6pfWUUaMfKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGV%2F2q2kfxB9JY9o0q3APMQog4ap1whgF4eqaFS1NPGv0t%2B3Wkql4aRfjbOsmP7B%2FGdxVE5wP4Bw4dd53uQBXi0VKpDyyKpYi0cuZj%2B7lKS%2FJlwnK3zMw2CBvBJwKgVFpEM73Rc6k1ypzBsquPlGabtU3RWysnlfQjSXpRvFqnpIZLeCWYCxT8UXU8%2FFl6%2B1loCAw%2BbzGxmr3myt6%2Bo3apd2v%2FExVg4wPUGSCjFPjgvoH6HFSF5QSjljNSaiJV%2FySM26RBirSqXt2om5gMherDe%2B7mwJx1luDZth0MNrTxfWLiOPyD8ce4ySQgnAKPaCKatrHXqQLDV6VsjabeThsdowSB7CrAoTNYncd%2BjwLF6eiWSts7aW5q6lkuzpDSeHxTsWkbSPVpCuxUgXH7yZsUMCUxZp2GY6Inpn6aGJv6jDSjMFdWPBvheZDJA1ukWwaNgWswJ8ZozLoGd0LlGUwpKxj210AdNYnuslRba2U8BHB0WTI4GLetanMuEaASyVwBYTuf2e4t41tXX8cODsh6GJRBztUC9SDVrJKWnWzAeGqfyfFoxZmq%2FuzY5eu7znpBPVh66DRITEUI8RBKI8JjmXeBkMHq4RB83tvbHlQjReauLqtFg0F5aCDon8etBsO9oF5Q%2F2bQM37J9zCRoYW%2BBjqkAcR%2BxyfKmt7M%2FAg5kPfEnyrgTZtd3GS4LAOhGFNy%2FJLQ2BGoN%2B%2FzGtJeoojjYb2bKfuBV%2BV4WmlP0eS2M7Th2SUF6O9TIECYEoKVbIb1eTRlShDNpQ3G51Qap99l2CjRx%2B%2BUhpHlVeAnSod1payiEp5gcL%2Bh4wBhGO%2BeSSgs6VhIyzzyyk0PATmcOWtXnSqOnaj9lBGjkGEUD97e00mkV4mqhZy8&X-Amz-Signature=e68e00ac5ca8b2562018c414ab5b4f73c42a8d1419c4bcfe884c0d6b67b962f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHTOGGE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDtYDe%2BSZX6W%2B5rDaL46zdAge62nTl%2Fi8jjAAR87HazzQIgKUtrliWo5FO6aWtzJIMLGdd43s5nSU%2BM6hiC7HO6BtIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAN%2B3RJfEvYFQfN%2BuircA7kHFjEZ2IdrB%2FieGzE10rsEbGqpWuB3mhKAmRBcie2Krf64aBObu%2B%2FYJSXWDXfFPvWgwvo3YOymPJYCWkeH6Lh56%2BK6gcTJDiRZfbVIQs%2FGEvK74VozeEtQhjT%2B0uqoPSgnucUg%2FaAq9equInKiY599GMWuyWmURUte2GcG7CDQolgPhQGQIUSKVPprEjHtV3xjELOslk4ZlgzrK11MhmpcCSQPra0pVzxi8%2BBRKOT7WMyOHGejxW4THg5HC8qyQiv%2BaLL%2F77h%2F8LPuk23kxi%2B8yFh5DHpQJi17Kdpvj03MjRg3fgzuCymVXvTtpdiBF1GYC7BkSRf%2Bk9nGIgrnXpE3rkEa%2BzxzscuLKJaJPqPV6Q9ggNiIZQfJgVQJCVu%2FQ5eqtOxrbbkMAN9Dc4Fp%2FXAPOtgLuXgvZ%2FZ%2FD2q4p3PbidQW%2BgonEsrs0oC5Z9x8%2FiDR%2FdkRTzB2Knbg7PMSo%2BsmcXxqsr%2B21oySUEW%2Fl3qYmnDQuvEgIGzKM7atZ%2FGXi7nzKBSAF6cR5ed1uKf7zfYesBkjlMouZdxA8hwyfjtrYYIJVj1SivQEl8JwVWTj%2FrGh16oP93GfEY5RAmJWdU%2BpVrC%2BuzvsmLy%2FOfQaTrMwpOkTmTsx0%2BsGQLLYMO2Phb4GOqUBclK2Wp66TrNuV%2BP6i4tduL1aWEKZIcVskAgT1yWqC2hJ6MNv7MyEeKSGvY7F44s4awgY9LxwjDoB3FHyQtz9lGQTnOLJH8NsLxDWYYyAVkwb1XKYX%2F8m5TaHsnHMs3lM5e2XbPaBGwwrU5rvr9lNyLzz%2BOytN9L2HNutOHEpsNu8CZV6eSYn2hbENmqJxTVosvjwCOLXK6mRxST7%2Frg%2FWaUdazg6&X-Amz-Signature=ee3901507efd75973d656ea5c53eaafac9971938781c88d935acbf6b4f797294&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
