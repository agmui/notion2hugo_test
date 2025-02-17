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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5QYZQ5Y%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDh4wLUUYnj6jMeE3nnrhtfoCK%2FpnYCXUDonCDA2dakFAIhALC5Uk%2FS3a2HJadJDdYkDTy1b8%2BKKV9O5I4ez6P61NijKv8DCHgQABoMNjM3NDIzMTgzODA1IgyI3wrVTXd8UZENDqsq3APpp6D8t7H7QnDXlX0bhd1oTsXVq2Hz6yoJyTpsj8TYQvklqUVnp5Q6cjwbJUuwltTw%2FPSbSBx2A3M1yXfASmClGIdI7BP09W4qelUkGBfGldwEfy5IJkjG99eh5ACXv5uLlWa%2B1Sf7fxl3uRK2xWSpTMwkJoGDmWS%2BQzd81B4E8AkI9P48n33I5C0ro1NMYcVzNnRc0YsJqLpu0jYllQNAv6uKCObhK7lGuDml6gkFNt9YucV5kz9zI47ukIAxtl59cjOR4%2BYQ3Bt4Su7wHlY%2Fj7uc8PUkCf1P2F9pWTIXcU5AtEMw6TSbbR1eRm27pB%2BPDJK7T6eoSt85jDGdEQ%2F1MUDCLw292lEo96H81bZgiik0scXnjgQDcJsJB3xLlL5uAJ9Weafp%2B5TI1CR8Go8ZL53xqc9hSdmYVz2L2GFf8LP4aeFWa4ccQ8hy479T4M3oadAmaUeJ8Zrz%2FjhwRL43QKBNbGBTvJWptQODVx6dlVEpXu7iJ90hbK6fXINuEBOIVuTtgg2N8LZ5XicZpjhdDQBNPcOT2grmXJjf5Lim1lZphS63GnapNJbR7wvAjEQQU4Gk320WiGS%2B8p99s0mgd5zfYgdEK1JQ4i87ZyHeLcSzap3wpN1perIQFjDJls29BjqkAZLsG7HPpqGsUEF%2BkvZJyXIEkeaDG9AE1FnqcCxBQqJCyTT8sBnCpXOyDDqE71CfLlMolzNyOMeNai7PV%2Bsn0nEquMvZ7ZY36xGk4HLjRinN3kqx97QYLuNSQPnhDuChmB6FLABM4o7akA6%2Bp6XTQnDCvu9P3udQzU1qKozFLCkbh%2BkVj0yh1LvYlY2HMdpZMpHRIvGUybx95tAvRCEXSMPjxOz0&X-Amz-Signature=3685f9d11641b6448f4f8ebf5328a44f7ac29a4f3a128a0be93fdb736aaaad4a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5QYZQ5Y%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDh4wLUUYnj6jMeE3nnrhtfoCK%2FpnYCXUDonCDA2dakFAIhALC5Uk%2FS3a2HJadJDdYkDTy1b8%2BKKV9O5I4ez6P61NijKv8DCHgQABoMNjM3NDIzMTgzODA1IgyI3wrVTXd8UZENDqsq3APpp6D8t7H7QnDXlX0bhd1oTsXVq2Hz6yoJyTpsj8TYQvklqUVnp5Q6cjwbJUuwltTw%2FPSbSBx2A3M1yXfASmClGIdI7BP09W4qelUkGBfGldwEfy5IJkjG99eh5ACXv5uLlWa%2B1Sf7fxl3uRK2xWSpTMwkJoGDmWS%2BQzd81B4E8AkI9P48n33I5C0ro1NMYcVzNnRc0YsJqLpu0jYllQNAv6uKCObhK7lGuDml6gkFNt9YucV5kz9zI47ukIAxtl59cjOR4%2BYQ3Bt4Su7wHlY%2Fj7uc8PUkCf1P2F9pWTIXcU5AtEMw6TSbbR1eRm27pB%2BPDJK7T6eoSt85jDGdEQ%2F1MUDCLw292lEo96H81bZgiik0scXnjgQDcJsJB3xLlL5uAJ9Weafp%2B5TI1CR8Go8ZL53xqc9hSdmYVz2L2GFf8LP4aeFWa4ccQ8hy479T4M3oadAmaUeJ8Zrz%2FjhwRL43QKBNbGBTvJWptQODVx6dlVEpXu7iJ90hbK6fXINuEBOIVuTtgg2N8LZ5XicZpjhdDQBNPcOT2grmXJjf5Lim1lZphS63GnapNJbR7wvAjEQQU4Gk320WiGS%2B8p99s0mgd5zfYgdEK1JQ4i87ZyHeLcSzap3wpN1perIQFjDJls29BjqkAZLsG7HPpqGsUEF%2BkvZJyXIEkeaDG9AE1FnqcCxBQqJCyTT8sBnCpXOyDDqE71CfLlMolzNyOMeNai7PV%2Bsn0nEquMvZ7ZY36xGk4HLjRinN3kqx97QYLuNSQPnhDuChmB6FLABM4o7akA6%2Bp6XTQnDCvu9P3udQzU1qKozFLCkbh%2BkVj0yh1LvYlY2HMdpZMpHRIvGUybx95tAvRCEXSMPjxOz0&X-Amz-Signature=1c93eb67091bfe77026520ae1e67feab90cc46c6548b9dae0fc07420c6bcf208&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUMQCVO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDOaO8KKZ70nszCW9jbDJMQEfFAXH8o%2FcHavENYHVZnhQIhAJ3qHl9rPRB6aii5GJoUIfzkj%2F0DPX4gM4GXt1NvaczVKv8DCHgQABoMNjM3NDIzMTgzODA1IgymE7AWiyUglR1F1dgq3AM3%2F6kFKsqjLkfhAMRev1L8MS8WULsrbV6mGoEFjP3WKW61SXDaI8On32ZB86ymW6L2SickMcXzMS6L25fkCWV1CIGcQE5StPHITtAEOOQ7WsAek0JcayYmDS0xsGk7GGDgZC4ub5uu6Mi2mZ0yRdpgI0ULAX8e7xh2Lmn%2Bg4EYmk2LuFJyBgN%2BwEY3SOosjgBJnwOd0G%2BeJA1TVL4v85lz7MYirO24rFmx02TpmllM2m2J43XfjYzfWa2wKXWGxzesrFkXP6BK2R3g6brbtY8GfK6TJ%2F7Uv8A%2FHnMe8LwaLGKPwbeqqg3Rh346s6x7hyJQTyibWvtc86%2BR1567BNXnen4Umyhfhd5y3gq1V7zKL13eQU6EADZNEzSY1Jhbh0dTiqXq789CS5EO8%2BTkAdkAGzwMZpowWXHnX8oMDGwcmeYcAUYrfMRociG219LxF1BEQeJHQLq4AJ%2Fc1i4fG75xxD0N12Z%2B9b%2FxxB89C2k29Wr7RoJk7S8RJ8hEYOL4mARMecDD6%2B%2B03K57NtE9eSOpetxbtwFIm9MyL69L8tE4Sdjb%2BHfk6A4cO4shj0RHiCIeF7TWUJTZNn1UrnpKFS04wqVfeb7T9J022buVtoqUasaJkW2t9w%2BhhdRy0jD1lc29BjqkASZdSdV%2B4Zd38%2Fb%2Bfncs8c2l9Zxc508LV6NTP5eVHh2XSw45Q1koaeymBbjgvtFnE3BkX0A1iaba%2FWxFOrj1BHYZ1jR%2F8b%2BBdAJA%2Fx6WgVthohSXyxV%2Fn%2BDE7OPoeJWp6yjNyyl701K9zrFZ3zNxBTgg41KUb2Ai6BQTLgV2a3GN%2BGoV%2BR%2B8HIWm0VhieiIH20t8uaKpO%2FP8%2BilPsmvDzo5kEUTG&X-Amz-Signature=0a694b044d1bd4ca1b54b73c05b25a7fe5b8929dc429614a40410f4a645e5b53&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URHFZUHS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCHLYDFz11C4dQFRfKwMgZ%2Br%2BX8L9RkYAJd2fyZg7p71AIhAI%2F2xUXENI%2B4dnGSlEO7u9Eu%2FJjlc9oOHnbJD%2B31SfbCKv8DCHgQABoMNjM3NDIzMTgzODA1Igxs7QeRoe8RLiPPCxkq3ANC8kbx7LxTgMeZ9MdJ52JltDIsXlpjwMAjBUTcU0zF5HNH1qUmD25nwGS3Kz2L6dMEJIV%2Fyi%2B7rxtvapwmdePz7f%2FxCyQPezxlJLYjY8Tvh3TYfcXRB%2BUbwUQrolcG%2Bz3tRlABVZ4roq83wVyyP0w6dCwtkAFrKxRw1Nt0uW1%2BXykfAsUgrWatVyj4TVV6QEx7Aq0RvN7230JVZDIlOG2Dg4qx3kfc7uHR2EP%2BzEFNE5H5Wiku1p7d5XdjjVXNGug0yL2MiQbb3qkcgWyD5dHuJvfepIQscaxb%2FlB2Oxdy1WyQfeqalRwnDHA7U8alXebcTktTKfNF3%2Bvds2yiNrFTDQSIhNNnnoQDcjKhegXJn9KkWNh4v1jobTMXQKt3AWXigFQv%2F72gXcspgwn07XMElL9WNee6%2F1qoE8VH%2B5OEbhkrP7I2plovtPiqU06P8yGpSFLYTLlSU85CbBnLN3xlJk4cdQqwwG11LLgu4iYzLjItjhoOZLR21wlxinbdpnqxS4ZxTolVgZigcyYUIBBG%2BUvJureimjNU7NyBgrV70kYrl0Wx0dJ1zFWLCo2WqrwlUM7eSF%2BSLskRkJIuf4jiFLp%2Bo3QqrFFL1PJCyzV0jCjtI3s5sMlHyayoQjDLls29BjqkATnWZV%2FJEbL36wrC4VrUOlrJ2G28pGRuy%2Fq6Ib5ZT%2BmTAEypRE233TKr21dkEZG3kARCWSMtm8ZiInmKUO29TJD7l5v6iwQxcgNfCAFAGmxFo%2Fh6pJ7Z2Ee%2FhJuqzMdbP8x%2BuiFDOuA0ZFcAfnRij5xN%2FrnNStRBcojuiF8tDR%2FidPCJUDdc2jviTHD72SZKdJbWtPGeuXr7L4SgBw%2BTEEmgrqBr&X-Amz-Signature=e0bfef1dc4936723a2c818128fefde1179053a72fd49fb57a62ec692837610d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5QYZQ5Y%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDh4wLUUYnj6jMeE3nnrhtfoCK%2FpnYCXUDonCDA2dakFAIhALC5Uk%2FS3a2HJadJDdYkDTy1b8%2BKKV9O5I4ez6P61NijKv8DCHgQABoMNjM3NDIzMTgzODA1IgyI3wrVTXd8UZENDqsq3APpp6D8t7H7QnDXlX0bhd1oTsXVq2Hz6yoJyTpsj8TYQvklqUVnp5Q6cjwbJUuwltTw%2FPSbSBx2A3M1yXfASmClGIdI7BP09W4qelUkGBfGldwEfy5IJkjG99eh5ACXv5uLlWa%2B1Sf7fxl3uRK2xWSpTMwkJoGDmWS%2BQzd81B4E8AkI9P48n33I5C0ro1NMYcVzNnRc0YsJqLpu0jYllQNAv6uKCObhK7lGuDml6gkFNt9YucV5kz9zI47ukIAxtl59cjOR4%2BYQ3Bt4Su7wHlY%2Fj7uc8PUkCf1P2F9pWTIXcU5AtEMw6TSbbR1eRm27pB%2BPDJK7T6eoSt85jDGdEQ%2F1MUDCLw292lEo96H81bZgiik0scXnjgQDcJsJB3xLlL5uAJ9Weafp%2B5TI1CR8Go8ZL53xqc9hSdmYVz2L2GFf8LP4aeFWa4ccQ8hy479T4M3oadAmaUeJ8Zrz%2FjhwRL43QKBNbGBTvJWptQODVx6dlVEpXu7iJ90hbK6fXINuEBOIVuTtgg2N8LZ5XicZpjhdDQBNPcOT2grmXJjf5Lim1lZphS63GnapNJbR7wvAjEQQU4Gk320WiGS%2B8p99s0mgd5zfYgdEK1JQ4i87ZyHeLcSzap3wpN1perIQFjDJls29BjqkAZLsG7HPpqGsUEF%2BkvZJyXIEkeaDG9AE1FnqcCxBQqJCyTT8sBnCpXOyDDqE71CfLlMolzNyOMeNai7PV%2Bsn0nEquMvZ7ZY36xGk4HLjRinN3kqx97QYLuNSQPnhDuChmB6FLABM4o7akA6%2Bp6XTQnDCvu9P3udQzU1qKozFLCkbh%2BkVj0yh1LvYlY2HMdpZMpHRIvGUybx95tAvRCEXSMPjxOz0&X-Amz-Signature=6932b28500b1165e81bcbea0c70652c455a2d8d2ab6cafa3e2c9a03479affb46&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
