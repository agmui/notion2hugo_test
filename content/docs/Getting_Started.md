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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIXHXO7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClqbyqU2qw5JzGEaNBj6rjcg3fdIUReDo4ZWOpOJ1Y%2BAiBjWZykvIXSmdZM0E7y0LI%2B0QV27tgmZcx4EnIw4GKthCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7cisrnXg1A7qFmQlKtwDLe%2B3Q%2B7YO06JHwy1cvcJykYLZS2Y%2Bx9AorGYFVh11Ca8SoT7fHex79NJn8i6P2kcJQSyM0EOrk3ev9Z8fbRkmxs%2BnSfP18PJ83IVHv%2F0OBzze2e32KnYy2vUXQDiV6zDxhXDHgmyBDr24TtFnfzqJsAlovAyLP2taW6Yf%2Fs8Hp1EOnUbtBhbgPID29u%2B5AzlVEl%2BfQyd0oDNTQ77CTVFMs5ds%2Fo9z%2BFkMy8i%2FvgZb854xgeQ6YTxOStXo9Umdp9zWxkMPEv4P67Mo9akCH441mn3JGVBLiVuArwp6MafAXgSpQ5nnsOqMlsj3qNYsldNhCOMXpKHV%2F02%2FZVuX3mCcSpB9YthpcNAWvE8aST4fNYML560%2BmYsoq%2BJtp%2FnXjkmFF7GYFNA%2BtlukfKTCMhQYF2pq1zKgU2phzx%2B%2BTiRWWeUIkSj0fWpHdsa9Q2mTKIUPZ5K1Ou0H93ZyoJuTkS48B1pZbRSbIo0gGoNSz3yMCPFtCBpBf0SB1ZiPgaH5w57BWUwreFy0kwdGUn0WK%2B%2FfklAlIl360JyKByTBSUurakrD0G7KoVR1IPy%2FziGkr0IVqj2oIf36GTzHXJhW%2Bie7IRPHoCb%2FXsWKt8vVn8EXT0OfKcuMKF6MeqE%2Btkw94CRwgY6pgFMlxm3Z0SdkTG5tIphTeekyyv643lW4%2BSifhcZPLYyPs4qWak7o2rjWB9Hr6BM%2FwgOR1UpWH6F7NyuuUV1bWgV%2BISDKwWOwocTvL3GVzr9kAKcx6ZFVZTb1NBEfhJLJDDGGhq1nFGcGwP5tal16xnWSv8E%2FVJPL6lvkunu7%2B%2Bk2G0Mh%2BFWjzkEhWyLLi5Mvh%2BB1Vf358OqpSajcqytftDbFvHakVxQ&X-Amz-Signature=9fbd4b80f1cd15f1a0838ac2c7a79083eaf00b8bf82892e37e11edc44ec19713&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIXHXO7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClqbyqU2qw5JzGEaNBj6rjcg3fdIUReDo4ZWOpOJ1Y%2BAiBjWZykvIXSmdZM0E7y0LI%2B0QV27tgmZcx4EnIw4GKthCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7cisrnXg1A7qFmQlKtwDLe%2B3Q%2B7YO06JHwy1cvcJykYLZS2Y%2Bx9AorGYFVh11Ca8SoT7fHex79NJn8i6P2kcJQSyM0EOrk3ev9Z8fbRkmxs%2BnSfP18PJ83IVHv%2F0OBzze2e32KnYy2vUXQDiV6zDxhXDHgmyBDr24TtFnfzqJsAlovAyLP2taW6Yf%2Fs8Hp1EOnUbtBhbgPID29u%2B5AzlVEl%2BfQyd0oDNTQ77CTVFMs5ds%2Fo9z%2BFkMy8i%2FvgZb854xgeQ6YTxOStXo9Umdp9zWxkMPEv4P67Mo9akCH441mn3JGVBLiVuArwp6MafAXgSpQ5nnsOqMlsj3qNYsldNhCOMXpKHV%2F02%2FZVuX3mCcSpB9YthpcNAWvE8aST4fNYML560%2BmYsoq%2BJtp%2FnXjkmFF7GYFNA%2BtlukfKTCMhQYF2pq1zKgU2phzx%2B%2BTiRWWeUIkSj0fWpHdsa9Q2mTKIUPZ5K1Ou0H93ZyoJuTkS48B1pZbRSbIo0gGoNSz3yMCPFtCBpBf0SB1ZiPgaH5w57BWUwreFy0kwdGUn0WK%2B%2FfklAlIl360JyKByTBSUurakrD0G7KoVR1IPy%2FziGkr0IVqj2oIf36GTzHXJhW%2Bie7IRPHoCb%2FXsWKt8vVn8EXT0OfKcuMKF6MeqE%2Btkw94CRwgY6pgFMlxm3Z0SdkTG5tIphTeekyyv643lW4%2BSifhcZPLYyPs4qWak7o2rjWB9Hr6BM%2FwgOR1UpWH6F7NyuuUV1bWgV%2BISDKwWOwocTvL3GVzr9kAKcx6ZFVZTb1NBEfhJLJDDGGhq1nFGcGwP5tal16xnWSv8E%2FVJPL6lvkunu7%2B%2Bk2G0Mh%2BFWjzkEhWyLLi5Mvh%2BB1Vf358OqpSajcqytftDbFvHakVxQ&X-Amz-Signature=106c8e8a1183399723d3a657b809b2d5fc2781eef61313dc363eed28ceb1d938&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIXHXO7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClqbyqU2qw5JzGEaNBj6rjcg3fdIUReDo4ZWOpOJ1Y%2BAiBjWZykvIXSmdZM0E7y0LI%2B0QV27tgmZcx4EnIw4GKthCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7cisrnXg1A7qFmQlKtwDLe%2B3Q%2B7YO06JHwy1cvcJykYLZS2Y%2Bx9AorGYFVh11Ca8SoT7fHex79NJn8i6P2kcJQSyM0EOrk3ev9Z8fbRkmxs%2BnSfP18PJ83IVHv%2F0OBzze2e32KnYy2vUXQDiV6zDxhXDHgmyBDr24TtFnfzqJsAlovAyLP2taW6Yf%2Fs8Hp1EOnUbtBhbgPID29u%2B5AzlVEl%2BfQyd0oDNTQ77CTVFMs5ds%2Fo9z%2BFkMy8i%2FvgZb854xgeQ6YTxOStXo9Umdp9zWxkMPEv4P67Mo9akCH441mn3JGVBLiVuArwp6MafAXgSpQ5nnsOqMlsj3qNYsldNhCOMXpKHV%2F02%2FZVuX3mCcSpB9YthpcNAWvE8aST4fNYML560%2BmYsoq%2BJtp%2FnXjkmFF7GYFNA%2BtlukfKTCMhQYF2pq1zKgU2phzx%2B%2BTiRWWeUIkSj0fWpHdsa9Q2mTKIUPZ5K1Ou0H93ZyoJuTkS48B1pZbRSbIo0gGoNSz3yMCPFtCBpBf0SB1ZiPgaH5w57BWUwreFy0kwdGUn0WK%2B%2FfklAlIl360JyKByTBSUurakrD0G7KoVR1IPy%2FziGkr0IVqj2oIf36GTzHXJhW%2Bie7IRPHoCb%2FXsWKt8vVn8EXT0OfKcuMKF6MeqE%2Btkw94CRwgY6pgFMlxm3Z0SdkTG5tIphTeekyyv643lW4%2BSifhcZPLYyPs4qWak7o2rjWB9Hr6BM%2FwgOR1UpWH6F7NyuuUV1bWgV%2BISDKwWOwocTvL3GVzr9kAKcx6ZFVZTb1NBEfhJLJDDGGhq1nFGcGwP5tal16xnWSv8E%2FVJPL6lvkunu7%2B%2Bk2G0Mh%2BFWjzkEhWyLLi5Mvh%2BB1Vf358OqpSajcqytftDbFvHakVxQ&X-Amz-Signature=7a88ccae989cee527b6f40b46a2127005624ef7266094beb7e83161d68f0074c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5XT7PI4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1sWaUhEyC99PHKWmLw%2FG%2B2Tq1l6E4X6DEUga4gVK96AiBFGiUABxHyp%2BKNMI5VwS8Jugqeok0RjX91xive8xk0iSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMNswJSxIvDGLGGglFKtwD4JY5Gs71nZi8SrAOJJLshC%2Ba2GHuhYlVwJZxQhtJBL6xSIzA3ZIJeViO4sTg3zh%2B9hXJWlZqTmiNKhittwIIbo9yDnRkh1epKNdXllSUsfyNAb7%2BvT5F7Co6SU6iv99m%2BSQ2q34BDT%2FMW%2BEO3Icw2jRDd1WbrNlA1scrctcKQXmrHKyYvQ9wVBBGa7JZUgVmXVfdjGJj2As%2FuGnASb%2BmxQ%2B%2BMtYistGrHp7cgV7KgmDy10%2B7lzcyVfw4kvu5EpswLpSKfVeHFRVZ3uH4oLjxsxW%2FKCapB1c7%2BkgjFhc2%2FORWj7RFQS2wZ25lkAQWcrBr%2Bnp47%2B34WnQbODiQ0VzJZw18QNRlNEUQyv%2FZSLfYd0N6%2FDq3OPLYlEtI7FpA51q%2BbHgFPTHeO4OBXF2EsDG6C%2FeHVATUQcbnqYbJRNnZDl8IyWS3zFYMU2lzQweVdxuJoRdKi0DUEh%2Fgz%2FEq1tMug7tgmi1ueH2D7O85zAySLHDm3IkMrKiFDL9jbiacEz%2BWIJmE6idLDfID9T%2FOJYNq%2FstSSQuxDyWiDqUaUcms7SlpehhYaAvIsEImOJTGnwrYLOxLbNeYwh1HPDy2A11NndsgTUKht3XrFSNjSsqWm%2BfCGiECt4W0eCZ8cYowo4GRwgY6pgFoDMFFqsqfJm7%2BLjgblfUvC6gZHBa%2B5CcCITHWK5eGfi4Ypa9qqxjstJHMAHHF0Tp%2FjgNXTEKKE1BsPg9%2BAR1A4mtbJV2YadAqvBGfZ%2FL6D0WK7oGSjEcL5KxPIx1Rr6MikuehkQA2knpNlbzZhbeoIGlIbxOGIfqUKBGY3qAU6S8WsA%2FiVtr1ATKmifA94ab%2BSrA6Q4Gk6lP9U7rQBFf%2BxQxRpl0s&X-Amz-Signature=ce4c4b2e7391e7f114bda33892e3ae5b41389288e8823a8c215d17f5c2340a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EDEYZEU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2H%2BzaIVswZDlypH3XGij2tzGqiQwdvw%2FAUPUTFiXZ5AiEA9QCZn4AZLxJY9BPmN4V4omIxDgFWKRJriv3YWZkSnfAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDHuDZMh3YjgH%2B1z3yrcAxkAe9%2BCH3I5KHzznrEhJzkTaMwg6VLCjNJFR0BMSD2QJWPnSN%2F3JHs1%2BliOjvDw5tNPVbw3sYqDbkatteuX4LDgT8hIIMsAv8kJOBtwsXkKjgoO0EIT4IjKj7RWUvEeeEld87mUQMuBK55GTxZ9myi2gbztIRdbjfU73LhZbPFnoQONMonXFm9wiehjMQEjCnA3giVfHaV55eGhaISdw7Ma2kDwpssWN5%2Febz7J3WPfsSSBgd6rpwi6wByYRVjKSfWqnG9a6STSzW74AUb9UgUgQDQGgFa6x55Yy5abK92ILxUkDEAatemv7GFvksNMQI%2FlniRWjLf8DDT%2FmeS7f%2BTT%2FOwdydq1BTu192aNXO9gXvsNkfOJts6YH2X54VXSxSJqLYinWAs1kYtoOSvdaG4ncBn%2BHIENIeIh0ZM3BETSLtBvw3thxnys%2FaG3LAAVRexlH41ZhHwq9%2BZaQgvFm93cEBzHWOmcFKnH87ngFjDGSI9XEc21tNFH%2FT5y0BkJL9iP2EI%2BH8CnTJbKeh8ElRB6yBfll7uvQNnf%2FAzCtNKRACduRotqVaMo89qVZkeq0EbT2Au8JQni2LD8Rys5%2FCXAcehjSWxBzmYtiMQmMoV8T72Pjh43qr5WrgguMI%2BBkcIGOqUB4xyX%2BuHeOOnIvllA93H6JCc3s2aHZpVvqg9WpoPh%2FbmOTlpcpjv0rytinBhm9FEsU5i%2Fk836Z1ztjMrIesjAO231EQwaQWtmUTV%2BBbzJhZ%2FKiNPBdJMuHQp5Axo7%2F0JDKfzm7wH1xTMCLLc%2B90h7eS0h3B2bIU1wiNInC5H%2BE5lGH4t1kWit%2FSkljL7MOVayHNfj0TREKEqXTz%2BFQeC88%2FH%2B9DEt&X-Amz-Signature=b2b06c7db0c19925569cef05bdccf67878630ef5cf000a06cadc3a2de628d636&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIXHXO7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClqbyqU2qw5JzGEaNBj6rjcg3fdIUReDo4ZWOpOJ1Y%2BAiBjWZykvIXSmdZM0E7y0LI%2B0QV27tgmZcx4EnIw4GKthCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7cisrnXg1A7qFmQlKtwDLe%2B3Q%2B7YO06JHwy1cvcJykYLZS2Y%2Bx9AorGYFVh11Ca8SoT7fHex79NJn8i6P2kcJQSyM0EOrk3ev9Z8fbRkmxs%2BnSfP18PJ83IVHv%2F0OBzze2e32KnYy2vUXQDiV6zDxhXDHgmyBDr24TtFnfzqJsAlovAyLP2taW6Yf%2Fs8Hp1EOnUbtBhbgPID29u%2B5AzlVEl%2BfQyd0oDNTQ77CTVFMs5ds%2Fo9z%2BFkMy8i%2FvgZb854xgeQ6YTxOStXo9Umdp9zWxkMPEv4P67Mo9akCH441mn3JGVBLiVuArwp6MafAXgSpQ5nnsOqMlsj3qNYsldNhCOMXpKHV%2F02%2FZVuX3mCcSpB9YthpcNAWvE8aST4fNYML560%2BmYsoq%2BJtp%2FnXjkmFF7GYFNA%2BtlukfKTCMhQYF2pq1zKgU2phzx%2B%2BTiRWWeUIkSj0fWpHdsa9Q2mTKIUPZ5K1Ou0H93ZyoJuTkS48B1pZbRSbIo0gGoNSz3yMCPFtCBpBf0SB1ZiPgaH5w57BWUwreFy0kwdGUn0WK%2B%2FfklAlIl360JyKByTBSUurakrD0G7KoVR1IPy%2FziGkr0IVqj2oIf36GTzHXJhW%2Bie7IRPHoCb%2FXsWKt8vVn8EXT0OfKcuMKF6MeqE%2Btkw94CRwgY6pgFMlxm3Z0SdkTG5tIphTeekyyv643lW4%2BSifhcZPLYyPs4qWak7o2rjWB9Hr6BM%2FwgOR1UpWH6F7NyuuUV1bWgV%2BISDKwWOwocTvL3GVzr9kAKcx6ZFVZTb1NBEfhJLJDDGGhq1nFGcGwP5tal16xnWSv8E%2FVJPL6lvkunu7%2B%2Bk2G0Mh%2BFWjzkEhWyLLi5Mvh%2BB1Vf358OqpSajcqytftDbFvHakVxQ&X-Amz-Signature=d0df704a9dd0953a79b9d0d574441a34894d94b8d19dfa9784e4ca8b0cea9249&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
