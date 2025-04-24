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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HWEMNFU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaoEbxrcN1mHpa9SHS0a6tbgTGmzG3RY28FDh5%2BuDJEAIgaCAsqDf9xh4cUFP7i9%2FZEFL311CDE5uYxjvzsUBdh8Mq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDPQSXU6LwcoWmwa1EircA0vrwSuqEAkFUG75F29HjBOlj99A0Em6s%2FFlTGCStJj92WY328ywXCl67dxrGors6yfkWHzY5heW3c5QTJ7z7HrNjI0eMsxsJDUpP95kgGmWWD1OwJOj%2FZakHwHUSRaTLqURp4%2BrWS28vzGyYbKKDaNgxNLu00aZveH7X9FP0NWg%2FDu74%2Fd54TKt1chpgTN47%2BJLVxawOwUQtE5AE1jCsbHMswYDcQWY%2Bmcvli1C%2BM32RsJy07BrwGOf389q7%2F6Z6H%2FSsFR4D53%2BlnTdtjQp22fobmjOSHuSglC%2BMKRVLvTL01pPlfxY%2B4Xa4b2EC5Yyu2M8FwBsmGQLMLdiD72EgFCjJyKmxKaZXXZRDciPKaU7VnTEL%2F9E0ZKOJzbpHpxRiO7mISngz1iI27QGodrU0Vcvd4Otff5XC7LrFBwaskaG8Thiyo79jtotxacjqfLYAEIqWKam6TFOzeQRXgXfEkC7M6JpoE3CZEfwTP%2FdnfCWcUE9fEVKNDzA4BywH4Bok0%2Fb7exvlV3KBIdfVFpeZ4%2BaAYCtCs1JmALKxdeeOrqQzFmhxwpPu1sutoi0YHP%2FNMefSG5NeTuP8KhDBr7yOoBd8Q5H8jeeMlMBjIaqFfoa%2BH%2F%2Bp27YZ8sf7GB1MOa5qcAGOqUBGDU7sgaAc66S2BKVhBrZhJ7JIMWgOxXi6yZ2FoD2qDuL4b0JwonUUAoP2T3RQdkY%2BSn1NjrKG6M8lie0pONId3ZgaCWCVuPb9x2b%2BEgx4vMWoVZUYJbQM07ZcGU2cEv%2Bd87SmQdAujpKcgZE3bCjxI8a1sspz7rAnW4M8EAKRUhWofNlcqCav3Vq%2FEcgdrWji5qYC2tyf5QUgM7ZgRnbQnuGdcxG&X-Amz-Signature=edf0cc58001122d0799073c2c31b4a5a20a5424b63a6db13d7e56b4e42e9a01b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HWEMNFU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaoEbxrcN1mHpa9SHS0a6tbgTGmzG3RY28FDh5%2BuDJEAIgaCAsqDf9xh4cUFP7i9%2FZEFL311CDE5uYxjvzsUBdh8Mq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDPQSXU6LwcoWmwa1EircA0vrwSuqEAkFUG75F29HjBOlj99A0Em6s%2FFlTGCStJj92WY328ywXCl67dxrGors6yfkWHzY5heW3c5QTJ7z7HrNjI0eMsxsJDUpP95kgGmWWD1OwJOj%2FZakHwHUSRaTLqURp4%2BrWS28vzGyYbKKDaNgxNLu00aZveH7X9FP0NWg%2FDu74%2Fd54TKt1chpgTN47%2BJLVxawOwUQtE5AE1jCsbHMswYDcQWY%2Bmcvli1C%2BM32RsJy07BrwGOf389q7%2F6Z6H%2FSsFR4D53%2BlnTdtjQp22fobmjOSHuSglC%2BMKRVLvTL01pPlfxY%2B4Xa4b2EC5Yyu2M8FwBsmGQLMLdiD72EgFCjJyKmxKaZXXZRDciPKaU7VnTEL%2F9E0ZKOJzbpHpxRiO7mISngz1iI27QGodrU0Vcvd4Otff5XC7LrFBwaskaG8Thiyo79jtotxacjqfLYAEIqWKam6TFOzeQRXgXfEkC7M6JpoE3CZEfwTP%2FdnfCWcUE9fEVKNDzA4BywH4Bok0%2Fb7exvlV3KBIdfVFpeZ4%2BaAYCtCs1JmALKxdeeOrqQzFmhxwpPu1sutoi0YHP%2FNMefSG5NeTuP8KhDBr7yOoBd8Q5H8jeeMlMBjIaqFfoa%2BH%2F%2Bp27YZ8sf7GB1MOa5qcAGOqUBGDU7sgaAc66S2BKVhBrZhJ7JIMWgOxXi6yZ2FoD2qDuL4b0JwonUUAoP2T3RQdkY%2BSn1NjrKG6M8lie0pONId3ZgaCWCVuPb9x2b%2BEgx4vMWoVZUYJbQM07ZcGU2cEv%2Bd87SmQdAujpKcgZE3bCjxI8a1sspz7rAnW4M8EAKRUhWofNlcqCav3Vq%2FEcgdrWji5qYC2tyf5QUgM7ZgRnbQnuGdcxG&X-Amz-Signature=73ca110ef658b3e25da899d378683547d1cd62680d4d199d09ff80f045fb628e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ45DNUZ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjZf0dNWQjUqFkVCg0DZucc4ToY3yiRjnttVgnb0T3agIhANhpWHHCHUgh7geJg79%2FxRzF56H8%2BGD8%2F%2FBKeQNos0iUKv8DCBkQABoMNjM3NDIzMTgzODA1Igx2BIApDHQUhbSHWSMq3APByuamoQy1%2F%2BlO8930JQzeS5a2Ur8%2BusjWgz2h%2BuKOTrSM88EDx5%2B%2B6Xb7vqFfqrVjT55vBdGCOhIleOzC1f0WfLcTEMO8CXgz04SdJ5aNn3C1Y7F%2B8zURWScgWlqe3GMPYqFlUno26hPIP38hwNNB3KHDJQgbeoSF48Tl42%2BCPnJk4zSOd9caDcRQokNg4cOHWiiG9QsVyvYe11Aaw7zaZvnIKmF3PAMSeTvUUL85WnF1siyarKtX0%2B9c9oyUDHUcKq5KQrBbVysbzEAf%2BGIIl9nAQvHard17x5fmFR0x3Sk0GCoAIjSoyksd1MptvoQ8p19L43qZSO4BJAzS1KAR7XIgSTPTOCdFs8frMErkqMRBN4JPeX8zT1iaCWiMJfv9xHHpWZKzo7PL2yc7iFsjuArmOelEhHWPUbainesvbybV9vMUU7yMWX2VxEqpot0kKcqRwNyb1MTllvQ3wC3J2ty5wf3Gps7SiU351XgOJXZnB1P%2BjWIOivFNZlgPe1fessyqPvP8GawzjxNQwZ%2FWCOWmWVR%2BBvi9NH%2FEzLRw4ev5E%2Baj9eXr65Bb%2BudF1GHEh8NdMcvtugUWj0Mws0%2BttIr9RlFp7BOk8eJJHvMyUzAKWxiu6M%2Be6Bge6jCFuqnABjqkASUdHbKZNJ3UWkYFpdeRt3Mlq9V4pDFGh%2FcoAAgo%2BvQYOSsviSCKbEwcrnSQ08QORZaG15GgmyGKLNyjNBWVukN2357h0NiSVJOMyFGKt4%2Bd8zPN16hUxkQ7pxvbdCY8vxe5oNzjf1puL%2Fp8n3tB7KoiQ1%2Bs0C9DDg4gzz3MesVzUzlSTw7yle8xfAxVMJeOTjACixOa9VcWke0XJCiq1R%2B5UXmn&X-Amz-Signature=44b47f825f1edde16fe3e9de52032c196b4ed541ea86bd3cbcba5b2bfd09f3c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666QCNTCC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbJMddocgcua3zBrqlKjMHTmSi9HTZBEhBZD7sNKHXJAIhANRhozb%2FTO6RBe4EnZ%2F74CKnmcgs%2BOoujz7uHMane%2FLNKv8DCBkQABoMNjM3NDIzMTgzODA1Igz%2F%2Fx5v6o6CBhuyWowq3AMb6%2FFxQ%2FW%2BBPSbFzr%2FUWgcPnesEU5d2c5VEWUQHdZr5%2B2tIefBtUa8wL%2Bqk0q4X7hRW0dJp%2FUXRY0VNFc3CqltzhPNRRY6ovB5ZWrRMhP65WkcxQUwMVSJiHZtXg6bKjSyC7IPW5MLD5HIOiOOESAwjnP0ddrnag3rrTXnmlvS%2FNvyMtkiIaLRiWCMbJLrpeAFjMOET59FXHRacP8FxsPfhZ%2BeS0uA%2FCGPL3%2BIcYXS8%2FXZQ6qBt0DOZP%2Bj4RF88ImqZEk7b58bwgtNKEvyXJHp89FJgV7CdAvr8ac0l0hmTy%2B3MvTJS1oJXxhGetxtXYOpV665KQ8Jc7GOddcvaDOJFeHKsLqj%2FUt14G5X140FTav9C%2FUvJwM7duGMZWzx%2FHU9IA%2BU74l1Kp2%2FjjwsABlxJ%2FTuTFoqMAeigdC2%2BdQ4PdbAlgexulsHegCXBCarlgvHN1QfkvIbyo8K8NiwI04sMaNp5lns7k%2FCEqgmsUdEi5itjGG73Y17TM2qCuMZbxHbYZ87QUO9X%2BjfmY6jEkmbmEFv05Rj9%2FRva584u25IHEe0ZUsfrgMUkpgzLLG7%2BrR7TOEPRtgHabYdcEBlHS8uQtAKHnBrKd6VVM8yZJkB55KRuTF%2FZrHca25N1TDHuqnABjqkAcB5DvWOsZCGdpBTgcN34GVQGuNhHaPlUybqx5OCiUFqDzTgd%2Brq95aSGkkftzB%2BJtrHp%2FKhWG43YGFZR98oHlRLRvTN3AzHgb09xnYORJRAwD50iikWRiVfLf591jrOqBM%2FXtKYRoU%2FHtVCSHpEL4ShrtuPREnzObyDuIJ%2BLDXdhXY2E0GrUt%2BwSzC83Xl9VBiHYG0JBMf1jHAyxMK9vvJ0F%2BXe&X-Amz-Signature=a4f36577aab885e18548a1eff52eeacec9f5612cdba45726d6761c3376f0c171&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HWEMNFU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaoEbxrcN1mHpa9SHS0a6tbgTGmzG3RY28FDh5%2BuDJEAIgaCAsqDf9xh4cUFP7i9%2FZEFL311CDE5uYxjvzsUBdh8Mq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDPQSXU6LwcoWmwa1EircA0vrwSuqEAkFUG75F29HjBOlj99A0Em6s%2FFlTGCStJj92WY328ywXCl67dxrGors6yfkWHzY5heW3c5QTJ7z7HrNjI0eMsxsJDUpP95kgGmWWD1OwJOj%2FZakHwHUSRaTLqURp4%2BrWS28vzGyYbKKDaNgxNLu00aZveH7X9FP0NWg%2FDu74%2Fd54TKt1chpgTN47%2BJLVxawOwUQtE5AE1jCsbHMswYDcQWY%2Bmcvli1C%2BM32RsJy07BrwGOf389q7%2F6Z6H%2FSsFR4D53%2BlnTdtjQp22fobmjOSHuSglC%2BMKRVLvTL01pPlfxY%2B4Xa4b2EC5Yyu2M8FwBsmGQLMLdiD72EgFCjJyKmxKaZXXZRDciPKaU7VnTEL%2F9E0ZKOJzbpHpxRiO7mISngz1iI27QGodrU0Vcvd4Otff5XC7LrFBwaskaG8Thiyo79jtotxacjqfLYAEIqWKam6TFOzeQRXgXfEkC7M6JpoE3CZEfwTP%2FdnfCWcUE9fEVKNDzA4BywH4Bok0%2Fb7exvlV3KBIdfVFpeZ4%2BaAYCtCs1JmALKxdeeOrqQzFmhxwpPu1sutoi0YHP%2FNMefSG5NeTuP8KhDBr7yOoBd8Q5H8jeeMlMBjIaqFfoa%2BH%2F%2Bp27YZ8sf7GB1MOa5qcAGOqUBGDU7sgaAc66S2BKVhBrZhJ7JIMWgOxXi6yZ2FoD2qDuL4b0JwonUUAoP2T3RQdkY%2BSn1NjrKG6M8lie0pONId3ZgaCWCVuPb9x2b%2BEgx4vMWoVZUYJbQM07ZcGU2cEv%2Bd87SmQdAujpKcgZE3bCjxI8a1sspz7rAnW4M8EAKRUhWofNlcqCav3Vq%2FEcgdrWji5qYC2tyf5QUgM7ZgRnbQnuGdcxG&X-Amz-Signature=8d2eb0d1a9a26a46330eaf7140e47652e8da2a4a11fde06084e3798c47fc05bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
