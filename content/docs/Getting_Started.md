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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636EMW3Q2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE1r3%2FSDlN5wZsRcgdh2%2Bx3jeUSWx837TbEH2dqHDu3lAiEA83VIh2j8iu97YcJNxhWSisYZgINc7KssKBdPgX60xq8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKM3PYJ9HHsRheEaESrcA6GZGR10euRZPPxuT0htxtqQcwl9F1pPi0uWOjkxgq8s9%2BHJt8p4aGE3YfJyb6Yapu1sA3bgTad5xGQlTvXqZ5CciuVIEADzVm41CTC%2BT5k8TwZFZFg3TOxirdorj43LGU%2FsSGZCk%2FN88LT9JZ3%2F%2Fu%2BMsk52v%2FIpy%2BAN9mnkXKBVcpgIuoqbkkLuKenRcfmjA4oeYCZ%2FKNUfe%2BkK9BbUnnLl9JH6IahqxfcI1VdHgoSaeZwzdu3W940f6pp8nOFARNIfwd%2FVT6NBrEV6pQhdRfA4sfo9SykONC6GGxCqou7S0q0XAnCJ9GfN1he09dBMBN%2FdgHscMjSdHR8rDnRF%2BgYIQctt50oendmaZNXduuuL1xSbEWGsJoi7l44p%2BnSof90bZojwzFMsqnmnZgZaZANwc%2By%2BMxREDjQQuks831SxI2apOZQPdZ78PPRCbKNgoYu9RN%2F6l8g8e56q0SovR6CIQRtxs5htrVLAP%2FJR8RNzca2D1WDUpQ2qfFIsbj2ShCvDwFtW927Ytc4MGmszV%2FA8XL2R03H5rpXX7EEauH7lEUjA%2B6nNIXfSt67Z6n3nB23jNw4c5xAjtmdCnbDlpq4qCxcmPZe30x2h57FyMfEDn4hzoO5JIliO56KPMJu6i74GOqUBxEFZAoKrsuyfqfjApPyA3HAp4VcuNo1S3i4iYO7KXsOpcbBW%2FH%2BWZWA5s6xL%2FnUqMLLC52stgnGbL%2BA%2BglOFCzVKxAHmLuSrFjXBJ59JCXG5YQJPahFZ%2FRScB0r6P21zMuk8U58yhj%2B4%2BjOwweW9w4FR6MyijclXPHa241mSHJjCImvKrOUCum1OzjAJUrTw%2FiYyjcrsBAwUlrLCM65T2S1jLgTn&X-Amz-Signature=0690d3b13e27d5e7e0654764215ee0d9386bad0c99fa3a742ba99e6b5593f03a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636EMW3Q2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE1r3%2FSDlN5wZsRcgdh2%2Bx3jeUSWx837TbEH2dqHDu3lAiEA83VIh2j8iu97YcJNxhWSisYZgINc7KssKBdPgX60xq8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKM3PYJ9HHsRheEaESrcA6GZGR10euRZPPxuT0htxtqQcwl9F1pPi0uWOjkxgq8s9%2BHJt8p4aGE3YfJyb6Yapu1sA3bgTad5xGQlTvXqZ5CciuVIEADzVm41CTC%2BT5k8TwZFZFg3TOxirdorj43LGU%2FsSGZCk%2FN88LT9JZ3%2F%2Fu%2BMsk52v%2FIpy%2BAN9mnkXKBVcpgIuoqbkkLuKenRcfmjA4oeYCZ%2FKNUfe%2BkK9BbUnnLl9JH6IahqxfcI1VdHgoSaeZwzdu3W940f6pp8nOFARNIfwd%2FVT6NBrEV6pQhdRfA4sfo9SykONC6GGxCqou7S0q0XAnCJ9GfN1he09dBMBN%2FdgHscMjSdHR8rDnRF%2BgYIQctt50oendmaZNXduuuL1xSbEWGsJoi7l44p%2BnSof90bZojwzFMsqnmnZgZaZANwc%2By%2BMxREDjQQuks831SxI2apOZQPdZ78PPRCbKNgoYu9RN%2F6l8g8e56q0SovR6CIQRtxs5htrVLAP%2FJR8RNzca2D1WDUpQ2qfFIsbj2ShCvDwFtW927Ytc4MGmszV%2FA8XL2R03H5rpXX7EEauH7lEUjA%2B6nNIXfSt67Z6n3nB23jNw4c5xAjtmdCnbDlpq4qCxcmPZe30x2h57FyMfEDn4hzoO5JIliO56KPMJu6i74GOqUBxEFZAoKrsuyfqfjApPyA3HAp4VcuNo1S3i4iYO7KXsOpcbBW%2FH%2BWZWA5s6xL%2FnUqMLLC52stgnGbL%2BA%2BglOFCzVKxAHmLuSrFjXBJ59JCXG5YQJPahFZ%2FRScB0r6P21zMuk8U58yhj%2B4%2BjOwweW9w4FR6MyijclXPHa241mSHJjCImvKrOUCum1OzjAJUrTw%2FiYyjcrsBAwUlrLCM65T2S1jLgTn&X-Amz-Signature=e6efc2dca3f90c32e83dedd90cb7013a8204194b772051da13ad448a0775d372&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIJIW7KB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAIAKWGCAla%2Fz1PXeXZ0wqLwvijK23NezdAlp8LBmoePAiEA5OX4vfrtbHfUB8Zuzpy%2FOWQqkHE1rI0LzviIViAo8vQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8elQ6Su4oMA4cO0SrcAy0QnX4I1e3slTIson7uRevD7afnGF4lwCFIRY%2BhAdrDofMH%2Bo2yRjjVmd9dJd9DK73d%2FX1KBO1ySZJzBrJLusHsJch%2FJDBM3dVcHEaMZtP1XnKUUTWiIZ5D3OjM9WdpishaBwzM6hEhCIvEDJ3lLdiuWzHfBK7OrrauEtIbLEW%2BkrC4c4FSUB9w71fLirnpVosiYbI442NSa7o56yjkZrTn33bBwgplXdBbkOjcr25Y3Kqkt%2BC2lM3CdVqLwyMORdQHdkW%2Bdrsz0aFQTcJgUyyl%2Fm2L7DaRxgNzJMj1J2nXFUDsP5HcLDgv5cYbWqNawUNq9u58yUt7gZfU%2F%2B8i2MzR86Vv9Rgx4riQTitLMC3SoY0TFa4cI%2FVNX6Pw4%2BfPlmn8zObA5fyOdcUHnXXxUiKtqhonCaKWNm%2B2tztuR%2BSie9XUQ5aJvli6eGcooBqRtc3%2FwJp2r6kRchwVKxryQqA5C57K05Zte%2BzPU2XS%2Fem2iv9nzAZeoa2jQTvCtzo5qGNKkFEgcLsZybtl9%2FeULNmobcreAGN7S8YJ9NAfMZ%2BiSJtwedjYb6IonLhvDUB7B16yrK5UHZYmaqjbDA4Vi7R%2B3ZcxCnIKNxPg0JuSWQVBStQp5IKQRcr%2Bt6yBMLK6i74GOqUBqMgsvNGhP43JZtqrLKGQo6pNzMnwK7ecTnc3%2BJOhVdFhPeWKUkUwyTdKF4zhVUcet%2BATlDRj%2F8dG4faGtLDUw%2F6gvZJV0YrdWyeNr71WtbDpZ%2F6WUopU5NhVKN7sRB2ViPEAknx6vQjKdWzoMs2yjIMp%2FrnlgPmMF1hKmimDv8w8Rs3kbD4C46k3EcVbPBx761zpayvym0W86QLxX5CVOC6ohKuG&X-Amz-Signature=04cf2818ebddc073745ecaec749c4183964fcc1022b5aab14be74a5012ebac9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPBS7LVD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIEZ%2BPvGyZdc1Hgr%2FrbqOmuvBAqFqLd5Y%2FvC%2FyJ4g%2BlP%2FAiEArysb6sVps5hz9F4mCOMMSpmlhxz7AGc6bfp9LbahBHwqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFA8fmhXdtTnrI2NyyrcA31zOuo%2F6oJlccQVtB6vTgoFG%2BX1O38CamuNvoyuW7TgzJM2k7taPKIfg0qWEoJYJBrRnHVUU4BLIQocXB5itCxAX48PQZFjmpwhSF3oS5mfAX%2BpbkJ51hxlOXVz7gwCiI8p30BajzUY9yFJiQNdI43Sr1oSJfQ6eHG3LTae4XTtOzXMYz2GQfdeuz%2BQ04HNMkaZfiW5qQrR%2BBLtYSqi72A0GdiLqYXix2CuNxoAvz0YpNMTRPmdxG2eAlWGD6oIoKdL%2BHqxeJgfcynY9%2BL%2BpSjaV9JO7lBlwVVEZ3W79lTpr6RYiyXQBuC259bacovVh%2FK6U%2BfEaVi7I5d3o%2F4h3zKI%2F2CbTy3UdOC6n9w2t3y7pxsjRlv%2FVWiNy6dqvB80WneypkNQ0FequzFMk2P0m4WRbpJDwDy18VVX8lQKz93dD7biuSyapFdDHMm7fbsl4f%2Fh9PcmK7%2FRvtTyjQojLyiW%2B9syHDOmZNKiuyq1KQeLFtm%2BXz1sp6FPyXruHaQuUFZeUqqy1NIAJxkYwsoT3eXzFuCy3OeL%2Fu7SYOvg8tA5tqFZ2FkU%2B4JsYFdVnW9xOHz%2Fl3K3h4UgnkPZ8WMzt4lVtexDEBN7i%2FxOtw8byl7SxoCcZCI0OVmf1KUPMIq6i74GOqUBpbADADyXL4FZd37iFQeGwFv1mQCWGh%2BOWa1LxexCMRZc286E2LvLILtW1pptBMiq8OWra77pi4SgJG%2FXaxvoh0es%2BzZ84xIsRsM2IVC5PeYO4dSuh%2BZtNUZYoitI%2B1rnaRFcZbBxVoEe5zIVX0957tZ%2B6jEVNH3Bsgz05pJCrHYMj%2B5LnMKZThaz8Bzs1hmVgvOS17zLH0BFjDbj%2F%2F60Im4wCP7t&X-Amz-Signature=0e371986d2363f6ad50b50f2bbf2358355d3f941aefa964178b045b689b429a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636EMW3Q2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE1r3%2FSDlN5wZsRcgdh2%2Bx3jeUSWx837TbEH2dqHDu3lAiEA83VIh2j8iu97YcJNxhWSisYZgINc7KssKBdPgX60xq8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKM3PYJ9HHsRheEaESrcA6GZGR10euRZPPxuT0htxtqQcwl9F1pPi0uWOjkxgq8s9%2BHJt8p4aGE3YfJyb6Yapu1sA3bgTad5xGQlTvXqZ5CciuVIEADzVm41CTC%2BT5k8TwZFZFg3TOxirdorj43LGU%2FsSGZCk%2FN88LT9JZ3%2F%2Fu%2BMsk52v%2FIpy%2BAN9mnkXKBVcpgIuoqbkkLuKenRcfmjA4oeYCZ%2FKNUfe%2BkK9BbUnnLl9JH6IahqxfcI1VdHgoSaeZwzdu3W940f6pp8nOFARNIfwd%2FVT6NBrEV6pQhdRfA4sfo9SykONC6GGxCqou7S0q0XAnCJ9GfN1he09dBMBN%2FdgHscMjSdHR8rDnRF%2BgYIQctt50oendmaZNXduuuL1xSbEWGsJoi7l44p%2BnSof90bZojwzFMsqnmnZgZaZANwc%2By%2BMxREDjQQuks831SxI2apOZQPdZ78PPRCbKNgoYu9RN%2F6l8g8e56q0SovR6CIQRtxs5htrVLAP%2FJR8RNzca2D1WDUpQ2qfFIsbj2ShCvDwFtW927Ytc4MGmszV%2FA8XL2R03H5rpXX7EEauH7lEUjA%2B6nNIXfSt67Z6n3nB23jNw4c5xAjtmdCnbDlpq4qCxcmPZe30x2h57FyMfEDn4hzoO5JIliO56KPMJu6i74GOqUBxEFZAoKrsuyfqfjApPyA3HAp4VcuNo1S3i4iYO7KXsOpcbBW%2FH%2BWZWA5s6xL%2FnUqMLLC52stgnGbL%2BA%2BglOFCzVKxAHmLuSrFjXBJ59JCXG5YQJPahFZ%2FRScB0r6P21zMuk8U58yhj%2B4%2BjOwweW9w4FR6MyijclXPHa241mSHJjCImvKrOUCum1OzjAJUrTw%2FiYyjcrsBAwUlrLCM65T2S1jLgTn&X-Amz-Signature=b52de818a1144b07a283bb2bb053d26b172007cb13c57ee65ab6ed81df01261b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
