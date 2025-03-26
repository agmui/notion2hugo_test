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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AZANHW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcC1SHhtiNO4Y6e9aqMuvKB861xRQ%2FHBFw861T3mdYAIhAJ6xEJqBqGYjEUYUX93ay9Ff00ksK8FT4YxKXCICz0r0Kv8DCCEQABoMNjM3NDIzMTgzODA1IgzHqw0sOZyggGvTcoIq3ANyCwKoMEj3QzRPlDba9H%2B%2Bcx5Tv1ZDbggeCjHYxqJvD8PO4IiTYn7t%2BedCPWWz49bTpEqXcKgUrodnTSJqCg9Y2zDo8sZ3ZASF3UdvxmzsMNDRP3fNqsSsWan2pZ4zdq%2BIx7GNZv1cvNb5lS9v8dduRAUqZtEY6Ahn%2BKajcxbweLz4qNGK%2F1K%2F7L2VKjCYIg2IHJCb%2F1jWV%2BhvwrSzW09NLsZka1xwz64YjL9brbV3gYex6NQSHN6y%2FPWV4AFbuVW2gLdPgxHAaX1CN3tFc5zpcHCWEDx%2FdP2J%2FgsFOIQUikKh61FGYDM6LQZm5H7sF0xvR%2FKw4iKNxs8pY%2FskJL4kHtNBFkXkNE%2BZ9V%2FhCjQQEwKzNqOgN6A%2BR5OKftqUp34ivKeb7%2BmdtNZsxJjhj3iXiPynGh7FVsuT%2FWZHYqXSOdLgrhk2pRvbMRqnPBBuzFvf22vzUGGv1ZSeFPhbCljQznt8HYJXAYZSn2jscBWGYbcmNwckwA99MM6yAaFdNXCMEptmhwc5bdGJkD%2BcfafBAFgR29ziloweTBG6tOxHJ9AkZrqKen1wg0TbNIYryJDBswCij%2BFDUVNZIQm40zdMmk2sQdnCw%2FEJRQJHvl3v%2FVkTB1eIGtJLZAFoWTDhjo2%2FBjqkAdIBLYsZQVNjRVnTCUO%2BN9xV7RpUdtJlJdJQHzLgZWpK%2FcKkvgVAzE6LTL26139r0z9dQbp0BqAIHpeG2g1Z5zkrU2%2FqZT0PjSMRS9ok0YgaQ0ePUbKi5pAdPm6hbGkmHXhoVko%2BcWhHOoyx21%2FmNwed%2BlGW8VjtUzB0tsPtBbfQ1p3nQreB6efhF6IkweYYsgInaQ%2BydQftmsEn5ri95BQ%2FurlZ&X-Amz-Signature=7d83bef384e2a82679bd9f2cc4a4aeea6e8a1cfb980db446bea29c343b6fc3c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AZANHW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcC1SHhtiNO4Y6e9aqMuvKB861xRQ%2FHBFw861T3mdYAIhAJ6xEJqBqGYjEUYUX93ay9Ff00ksK8FT4YxKXCICz0r0Kv8DCCEQABoMNjM3NDIzMTgzODA1IgzHqw0sOZyggGvTcoIq3ANyCwKoMEj3QzRPlDba9H%2B%2Bcx5Tv1ZDbggeCjHYxqJvD8PO4IiTYn7t%2BedCPWWz49bTpEqXcKgUrodnTSJqCg9Y2zDo8sZ3ZASF3UdvxmzsMNDRP3fNqsSsWan2pZ4zdq%2BIx7GNZv1cvNb5lS9v8dduRAUqZtEY6Ahn%2BKajcxbweLz4qNGK%2F1K%2F7L2VKjCYIg2IHJCb%2F1jWV%2BhvwrSzW09NLsZka1xwz64YjL9brbV3gYex6NQSHN6y%2FPWV4AFbuVW2gLdPgxHAaX1CN3tFc5zpcHCWEDx%2FdP2J%2FgsFOIQUikKh61FGYDM6LQZm5H7sF0xvR%2FKw4iKNxs8pY%2FskJL4kHtNBFkXkNE%2BZ9V%2FhCjQQEwKzNqOgN6A%2BR5OKftqUp34ivKeb7%2BmdtNZsxJjhj3iXiPynGh7FVsuT%2FWZHYqXSOdLgrhk2pRvbMRqnPBBuzFvf22vzUGGv1ZSeFPhbCljQznt8HYJXAYZSn2jscBWGYbcmNwckwA99MM6yAaFdNXCMEptmhwc5bdGJkD%2BcfafBAFgR29ziloweTBG6tOxHJ9AkZrqKen1wg0TbNIYryJDBswCij%2BFDUVNZIQm40zdMmk2sQdnCw%2FEJRQJHvl3v%2FVkTB1eIGtJLZAFoWTDhjo2%2FBjqkAdIBLYsZQVNjRVnTCUO%2BN9xV7RpUdtJlJdJQHzLgZWpK%2FcKkvgVAzE6LTL26139r0z9dQbp0BqAIHpeG2g1Z5zkrU2%2FqZT0PjSMRS9ok0YgaQ0ePUbKi5pAdPm6hbGkmHXhoVko%2BcWhHOoyx21%2FmNwed%2BlGW8VjtUzB0tsPtBbfQ1p3nQreB6efhF6IkweYYsgInaQ%2BydQftmsEn5ri95BQ%2FurlZ&X-Amz-Signature=9b289a0f3714025df4705076a31ea6cc9e638dfd86429841a6cd4d2de41f04d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQE5MX7%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXa5LTJv0uDdkHTThFwQZ2I0RqDym0C7Gn%2BbP0iRWAoAiEAsOupQpKrDIHYmLeNKbJwI%2Bz9lTjWNPFCXN2ZkBvspswq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCR5OE4tS6DM90gylCrcAxJj0DI3s8vMwwuj46g9943%2FId2HndV1G6n9daV%2F8So8qLqqWmGSPTgksxadngC8OwOlwzWVP4IQAa5hOfeEOfXNfw6YL03NZNJALBRszcJACW%2FkNrBRr08g98XA%2FhiWpYqPyupi3WkNj5XQf8s6EJOj6sdKhu76V4I%2BHkv9py2rsHTXlka5%2BdG7iLD6Yplt93VYH3Bu02yPO4Vmv2Z4ZZtBK%2BmhoJO33W0OJVGQU7MbWBuG0F1jjHFJMAnAQTD1cBtg8rExu%2FbmErzPSI%2BB0S39prQKdeTMQalCA0b0xwbgb5vWv0GDvfh%2B%2FG1FsS2wozuetmOVbzo8sysvGaNFoY75SS9SHIm7fHgkVuwLXQ3pGR0KmNahnSCcxdVtePsaAW%2FVzdVZQcEOckbFlvDMsCOxhyvT2o0rxrj2IMTPE8%2FwWQnQNBRIASWL3BH0tkfYHzqXozSUEHsT3e89aIuMbJqetTBmcu22%2BT8INb6OiLi0t4TXS7N4KM4DIhPzU%2BEWUFPjaRaCWD0WvdisHSobY30m0X32auR0FuzQhorY9sjSIxPqWMHMVuDnm%2FjioPdMkoWoJ6YZaV4oa6fLlJan9rYtW2tuUv%2Fy3xa4gKr5zD%2B1Lu1hQ11HhZ34iqnWMKmOjb8GOqUBUhXzc0JIiGRzr3tiGuKjKsKiCRQ9Ektj%2B1cBF6ak3AgIMpMGqlA6FuU1ebkDCrdFwaAfbwgHdmqfKZFV5NhrysLZ2nUMU%2BhVfKCpFaavcK6esBknjX7DxYLqGOFwG53pMwe4XZEtEMCXBjGz0g81y39PO7nLSlPqy7tpmdEtSD6yQbYqKLTfZYiy84zoOJoGX3hjevkvydn2p4IyQFxzDLMQekRV&X-Amz-Signature=13bba30b182906757eddeff342ccd5e1d79d68583459be758bbe24da9cbbd48a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2JEH7T3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICG49N9FxgaBHc6jokBVCEhay89kZMGaubu%2BJ2uuam1rAiEAyua7BgeLVplJR4p22Ur6ZIkthzodzt2z%2F%2BN9JY47aS8q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDKMLCa7mWOkMQ%2BSHlCrcAxNr2zvg957FeM%2BfgLedAz1yvwZvdrtbEs4sFHTwdq%2BV%2Bu6C2xrD0Q4iaXN4bkKfvHSYYO3W35ndQ5XKABGotF7icDyxL%2Bq8JnluIHzOhb6WYpHUtB2%2BQgUG464OCRcU8inRBDrXMiKxLu5cDL8U0iEbOGhtol5mHvQbFhJjwV1sW7F4zDLY%2FdMkiaKWgV1engSJmVTj1lAkTi1jRtirTrx7NEHYU2fONJJwZo9yc7vL6ttOqzt7Z0D8g5VqsleI0DeB4JDJRwNW%2FPigcIQoIMjQo1Mb5009dfS949IsCdffRNXhr7DiIA0JpmyPtY6bOEMRRsvJU2uObc82P1piebiz3t%2BqrQhlK5ai1l745YXjirS89E8JIARQcC26VmLLnTYViBuD4Y%2Bsn%2FTmsvQpyUMZHHCJZZPXNWpJNVWkoE5oPm5Mognq1FVk2fwLEDFcnsaHdszWsPwO6LWHDQ6PPkWJVtnERwbFoiw5T99BXmb253pEp3wHy500srArLd7Pb5yuZjciK40xNcs9X5rShcKOkKbPtQmZ3TUIfrmdy0k%2FvV6LBybL4thB0JxQvaydCCDCLBq0okTCSwY1DzlBeDSAJkHWA%2B1kzueyb0x4MWGRnJTnF2ZimqZRrWb5MJ6Ojb8GOqUBGXJESETIWFwK8zf5ePZ0p35u6BP3yInO8GlWSdL27rgg8cEFAEeEDr4IP2oqDckzWZrYeMTb6oybT9UWMHBtQE%2FvDXKQuq5OZzsmRBq%2BiaZjnDLgTflvswI%2B%2FDoMb4bBE8v%2BYA3nvRbj5GLS8QhlivuNJgh3OcVfbNaXi%2B8PdHDOkpEtdQWAqK1y%2BIVr1j13Swvg0fL3KLOHbRGKVr6iWruZMBgG&X-Amz-Signature=5acfc296b063a5aa10e997db403a2d4a880d6a2d7503ddecc45bd41253199b99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AZANHW%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYcC1SHhtiNO4Y6e9aqMuvKB861xRQ%2FHBFw861T3mdYAIhAJ6xEJqBqGYjEUYUX93ay9Ff00ksK8FT4YxKXCICz0r0Kv8DCCEQABoMNjM3NDIzMTgzODA1IgzHqw0sOZyggGvTcoIq3ANyCwKoMEj3QzRPlDba9H%2B%2Bcx5Tv1ZDbggeCjHYxqJvD8PO4IiTYn7t%2BedCPWWz49bTpEqXcKgUrodnTSJqCg9Y2zDo8sZ3ZASF3UdvxmzsMNDRP3fNqsSsWan2pZ4zdq%2BIx7GNZv1cvNb5lS9v8dduRAUqZtEY6Ahn%2BKajcxbweLz4qNGK%2F1K%2F7L2VKjCYIg2IHJCb%2F1jWV%2BhvwrSzW09NLsZka1xwz64YjL9brbV3gYex6NQSHN6y%2FPWV4AFbuVW2gLdPgxHAaX1CN3tFc5zpcHCWEDx%2FdP2J%2FgsFOIQUikKh61FGYDM6LQZm5H7sF0xvR%2FKw4iKNxs8pY%2FskJL4kHtNBFkXkNE%2BZ9V%2FhCjQQEwKzNqOgN6A%2BR5OKftqUp34ivKeb7%2BmdtNZsxJjhj3iXiPynGh7FVsuT%2FWZHYqXSOdLgrhk2pRvbMRqnPBBuzFvf22vzUGGv1ZSeFPhbCljQznt8HYJXAYZSn2jscBWGYbcmNwckwA99MM6yAaFdNXCMEptmhwc5bdGJkD%2BcfafBAFgR29ziloweTBG6tOxHJ9AkZrqKen1wg0TbNIYryJDBswCij%2BFDUVNZIQm40zdMmk2sQdnCw%2FEJRQJHvl3v%2FVkTB1eIGtJLZAFoWTDhjo2%2FBjqkAdIBLYsZQVNjRVnTCUO%2BN9xV7RpUdtJlJdJQHzLgZWpK%2FcKkvgVAzE6LTL26139r0z9dQbp0BqAIHpeG2g1Z5zkrU2%2FqZT0PjSMRS9ok0YgaQ0ePUbKi5pAdPm6hbGkmHXhoVko%2BcWhHOoyx21%2FmNwed%2BlGW8VjtUzB0tsPtBbfQ1p3nQreB6efhF6IkweYYsgInaQ%2BydQftmsEn5ri95BQ%2FurlZ&X-Amz-Signature=78e9e03781c45a8c8f7730716bce4a19a01407664e071ea5b4e62f8a82f7c37b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
