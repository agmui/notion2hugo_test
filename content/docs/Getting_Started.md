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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EZCWN6H%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7nkNCDJJHotp10nhSUS3IsS1neHe7u4M%2FGtVnkSnVPAiEA14VK1a0eOHifYJc7WPwQUiO41ZvtOLc7192r1y%2B6GkYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN5AKoWBUfC3APpWircA4v7NVAgVWBJtpAvj0Md5VY51Oz%2FG8zfRmUdLToB5IIW3pRXzs69GDLf5re8Y6PdEU7wKDH2ogG0xijTGHFBquH7AtM%2BC7ycDoI0FlokA%2BH0I3QrY7mdJ10Cp4tolwtB4JzY5Ff6WsdUjBu4FncKFOMZ%2BuD6mcWLk3laTK6KunSgPPkwvYaCz%2FwBo52PMQV4Pbg03JMAFwq785EHCxZLJh%2BIw8pVog3NWwO%2Bm1W7zIMqzdddzhyxX8otJMi2XbEUHAlCIamy57synEJDVh9RmObDYQJWU4uS4SDvNmuNIFOk4u5tV2aQGhQ04bjQJO6VVwOvJGTFejwqItEAgb9m4cm21uLInSpWz8hCurWBsU0%2BWOwz7rcQH4rkoFUMswOcspKo7XQ2kGzXICuMyKD5EEFmF2WSOEQGJ5Byp1CV0dQ3hbrluXWtUBHUKZBBds4PDR%2FOSMdmiodzi9Du3XbjSnb%2B7wE9z30Dv5Z8qXmYGUVpAbhTq7mCutV4FyRNNC8Rloc7e%2BX6wsk98LuhTvGmfooB7kz1nSg2jhiFA1eGXPeHggLmyNyr1ox5rlyJ%2BlOE6%2Bm8HGzVdg72m4e1ump5x%2FU0VYbsJa4Et%2FeUuIiUoYV4R%2BDGDxufgfg1mlz3MPTOxMAGOqUBkjGu6%2Fx1EZxiKyt04u5F5lHvux8s1fNM81jgAP9mB%2FhwIadcSfy9%2FxOX0hGOxNmBdBAyl%2BvPuHgOGkI%2B1ItQLL%2BZDj187mv5LKkaquztblBVb1BrUIwPPrxka1a0obo6Ev31myjw2%2BMasl0X6oSH4%2FIjbqW0n%2Bc1rW36Wxnxt5B4%2Fvz9QzEN5u9DqqKa5zwWgptYCSNtfetMv2vgp%2BdoGnOSm6z0&X-Amz-Signature=67144d6f58380a67ca1b393ec1d8a71e3192d2ed5e0f0b3c6de12b238757cf00&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EZCWN6H%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7nkNCDJJHotp10nhSUS3IsS1neHe7u4M%2FGtVnkSnVPAiEA14VK1a0eOHifYJc7WPwQUiO41ZvtOLc7192r1y%2B6GkYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN5AKoWBUfC3APpWircA4v7NVAgVWBJtpAvj0Md5VY51Oz%2FG8zfRmUdLToB5IIW3pRXzs69GDLf5re8Y6PdEU7wKDH2ogG0xijTGHFBquH7AtM%2BC7ycDoI0FlokA%2BH0I3QrY7mdJ10Cp4tolwtB4JzY5Ff6WsdUjBu4FncKFOMZ%2BuD6mcWLk3laTK6KunSgPPkwvYaCz%2FwBo52PMQV4Pbg03JMAFwq785EHCxZLJh%2BIw8pVog3NWwO%2Bm1W7zIMqzdddzhyxX8otJMi2XbEUHAlCIamy57synEJDVh9RmObDYQJWU4uS4SDvNmuNIFOk4u5tV2aQGhQ04bjQJO6VVwOvJGTFejwqItEAgb9m4cm21uLInSpWz8hCurWBsU0%2BWOwz7rcQH4rkoFUMswOcspKo7XQ2kGzXICuMyKD5EEFmF2WSOEQGJ5Byp1CV0dQ3hbrluXWtUBHUKZBBds4PDR%2FOSMdmiodzi9Du3XbjSnb%2B7wE9z30Dv5Z8qXmYGUVpAbhTq7mCutV4FyRNNC8Rloc7e%2BX6wsk98LuhTvGmfooB7kz1nSg2jhiFA1eGXPeHggLmyNyr1ox5rlyJ%2BlOE6%2Bm8HGzVdg72m4e1ump5x%2FU0VYbsJa4Et%2FeUuIiUoYV4R%2BDGDxufgfg1mlz3MPTOxMAGOqUBkjGu6%2Fx1EZxiKyt04u5F5lHvux8s1fNM81jgAP9mB%2FhwIadcSfy9%2FxOX0hGOxNmBdBAyl%2BvPuHgOGkI%2B1ItQLL%2BZDj187mv5LKkaquztblBVb1BrUIwPPrxka1a0obo6Ev31myjw2%2BMasl0X6oSH4%2FIjbqW0n%2Bc1rW36Wxnxt5B4%2Fvz9QzEN5u9DqqKa5zwWgptYCSNtfetMv2vgp%2BdoGnOSm6z0&X-Amz-Signature=eba0b7631436cdfd2e70c4f0325bb9e76c360fca2e3c9e334c90198c16e449b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UISVDCI3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLez2rVEF7BuwHeazjTpCVPwfcVZJEi%2FvkfjampOcmzAIgKU%2BbZrZ9dHK0uQiRxao2Gii19SYbMooxiv1vjRowOrUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhiM79nfsEi%2B5fccyrcAzpZTN38l7DiYCutUalXtK2uNJFRVfvaaeY50jqEzrD%2B%2B1RsmE8DQn68zirpCLZoNWa6S1v7yUhLxuhoOX%2F%2FzQhxqjAiU2hD9ZJMdcwjuAFLMYwFTkbkACI2DNIjXwF2iTAo2WujtCm0XefhMjKTNpk1hSxAW2eNNS9QvtHlkoM%2FNEZCW5x0ZiDrP0Jt8UNKBcDkaC8IDBkUzrxsQZtHbuBEd8Ci2J9XAKqqSJvZQhBN1ryY%2FgNl5sosAeJzYxrUpwbxRvv1UxpRNnI%2FvkNGhIKkKfuL2crJ5PjxNlMgv0T7z5DXTYn6wfYtaTj87U0Q5nA2us9z0TwDnRhi0YQXHLkgySe8RKhXBZXfhOtb7tF8AJi%2BJLRBvF1kZV3hM44p7H%2B1prI6aA3aCCt9KY816IAPkeQ7ULTyqMjYn0nDgMuLFqDcMU4edzSLTw6ejGbvJSdekokLTrTaGsnurRFajcm%2Fq7L%2FPe7ay5PBtMpN9yFdzUhZNqOzBz%2BVFrBsYXnzIj3r%2BwwtB9EmkRbPGG3n4g6CFiDx%2FDf1v2YWdJO3%2BLrQzqWVf48M6oVcwkYsyexX5PxpQTHTg2wqFGw4y5fIN8IYFwJ%2BqYy3FFyUyic6e2qqlkeutkP6nGryzODCMJzPxMAGOqUB%2F0ZCcOivzTc2QOxMLDbUTuhHnFDEJBG1lyGuhFo%2FNyXBE6LJCWCaxgQaikpWCVLTNhHxjFzFRXg5RDRKPevmjTlyv86UetN9DGkmPXJWp7fbjaNMgSNOamT8hgSnc%2Btt1%2F%2B4W2ZjsFq42xwu7KW25ip3ONkUWKbNODZ04kPV7yXXfksKQkZOH88DHdNZReetadEMGWKKO0X08D0ToWZii59Hn6HJ&X-Amz-Signature=f220196092f30fefc97f5cf2c0811e23380bff2a37118bd171375db2bf6a79d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3NYKR4Z%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc%2BcdGi8Qi%2FqNMgafU363CfeBrDJOf8mHaNmVcc0C6PwIgBWugMJD7sRfFNbSqDkLKprWdIvGXyLhzMbVnKJmHa74qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDTrA4hi7CDYEdtLyrcA1hxMq%2F498dk%2FJLSwvWeO6AGA5NkBnWc02DsmzUFFizk8thLjNJnkgIDAysqhiaBFb9n3j%2F6URp9G6SOiZFcBhnZqauorgaG9LUej3gIHWii8vi%2BnfvhPJqV3k%2Fy59Jr%2BGZtFD0dgPylNl%2Bd4QycJgDkAn%2BgjEnBB8R8YzZ%2FVBotNCIBRqWyGFcvG1W%2BQJyDUPiLSSrpCVw%2By%2BB0xfTvl%2BRckHpm3NLaMKuIiQuQg7gtFl6iF0mp1Imy8w3h1Id%2Fyn7CepolSupRUaXYQpMgaG19iYLMNfOCgc3LbhD7AqYJ8IRVrqEsFwxYR8ISLJ8tBEAtcC5h3mGgGfC%2F9h4na0D4UdywotUXFJ%2F6Vi%2BqKSpCl5QXz5OiMvlhKqbi%2BZLpSBZUQeBh%2BlyoG9AKYkbpZBD8S89i83L2AfCGWebY5uOitBxrSqc4dfUD%2F29riqLYXLlOofkCOsPnx1CKGbIrZdG0GMmSHwqMRKYCsq54bdltUTqdQeVWCQgfk2VopFiEgD%2BlYSMdA6eI5kt9FSzYCyU9kCTxUUSQEILj5crnD878uiG4rZ9mFU8ioeQtBcuv9V9ilNoMHX1dAYhI7Cd1BwI4JDbGhoOF%2B%2FFzqLwlb1NZHkGgb6A8Rn6dzQZVMJTPxMAGOqUBa9Q2P1U60x2HVJ09i0w5friYdghFWy5dbAEBHxUCC8suNzyArGsmo7nJOcSIUQnfWugj2%2Fgrc8%2FANVIg7X%2FTmuH8dooaMQPEz87uLO7ytCcMaSgm%2B3jht67iOUEX6N%2Bo23HlkPdzVRRGIpJ%2F42001b5pWfYP72XFPUzR2SDijhgHWkbeiNXi11yn1IaLxpy8YoqsfQo5WbQZoCSGsbuByai2%2FW4X&X-Amz-Signature=bd6290769fd27267d8580546be63084faf1de363c53ea46f060da314f7312dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EZCWN6H%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7nkNCDJJHotp10nhSUS3IsS1neHe7u4M%2FGtVnkSnVPAiEA14VK1a0eOHifYJc7WPwQUiO41ZvtOLc7192r1y%2B6GkYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN5AKoWBUfC3APpWircA4v7NVAgVWBJtpAvj0Md5VY51Oz%2FG8zfRmUdLToB5IIW3pRXzs69GDLf5re8Y6PdEU7wKDH2ogG0xijTGHFBquH7AtM%2BC7ycDoI0FlokA%2BH0I3QrY7mdJ10Cp4tolwtB4JzY5Ff6WsdUjBu4FncKFOMZ%2BuD6mcWLk3laTK6KunSgPPkwvYaCz%2FwBo52PMQV4Pbg03JMAFwq785EHCxZLJh%2BIw8pVog3NWwO%2Bm1W7zIMqzdddzhyxX8otJMi2XbEUHAlCIamy57synEJDVh9RmObDYQJWU4uS4SDvNmuNIFOk4u5tV2aQGhQ04bjQJO6VVwOvJGTFejwqItEAgb9m4cm21uLInSpWz8hCurWBsU0%2BWOwz7rcQH4rkoFUMswOcspKo7XQ2kGzXICuMyKD5EEFmF2WSOEQGJ5Byp1CV0dQ3hbrluXWtUBHUKZBBds4PDR%2FOSMdmiodzi9Du3XbjSnb%2B7wE9z30Dv5Z8qXmYGUVpAbhTq7mCutV4FyRNNC8Rloc7e%2BX6wsk98LuhTvGmfooB7kz1nSg2jhiFA1eGXPeHggLmyNyr1ox5rlyJ%2BlOE6%2Bm8HGzVdg72m4e1ump5x%2FU0VYbsJa4Et%2FeUuIiUoYV4R%2BDGDxufgfg1mlz3MPTOxMAGOqUBkjGu6%2Fx1EZxiKyt04u5F5lHvux8s1fNM81jgAP9mB%2FhwIadcSfy9%2FxOX0hGOxNmBdBAyl%2BvPuHgOGkI%2B1ItQLL%2BZDj187mv5LKkaquztblBVb1BrUIwPPrxka1a0obo6Ev31myjw2%2BMasl0X6oSH4%2FIjbqW0n%2Bc1rW36Wxnxt5B4%2Fvz9QzEN5u9DqqKa5zwWgptYCSNtfetMv2vgp%2BdoGnOSm6z0&X-Amz-Signature=e0f4ed3e2c5d1e82a9bdf5a0544656de232878039260c225faf8239943d19b27&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
