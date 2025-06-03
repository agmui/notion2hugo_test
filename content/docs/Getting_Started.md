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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EKXM27%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDjWVzwu4aSeqJbQk9j0hQPj8wMfZW8CYR7i1nDpN0xlwIgczfjV0WyP2%2F%2BmAoDP8L6YD%2BpQaZcOlae1KPIa%2BBUJGwq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK0DZkuzV5uMT%2FW7KircAyVuTaERMxJJpzwep8hjIs9Q8Agf1EJHWnEzmfLV6IRcx0UaQ3e15V3LSOYR2jWCFnEIR%2FF4xJE1HyeGVZa4Nu0Q0MUUQMw1a%2Bcv1DW4D%2FMQ%2F46cX8nhG5nmY9RO6mzNkLmdIeAYYFILbwutPX9m8Y%2BgM5k2NIY24EH0KQP15zHnXvlz79lHVGMBsOw9NU1VT54OL5ReSgrFhtD9un9uFGXIp2DoEx8CPDzEaPdqogdMbe3f%2BsdQy1uSrfEy%2BagEsn6vcE5QgK%2FJDIt6CN2T%2BYIbMiaH9u7bCP%2B4AsZvAGQDpen%2B4Gm0J0iJ%2FbjE8FelVV1IXUOYvKxIPeLhI8fjxuFWtDhefymutkqXGjF6CsaU2E7fS77mBF75xpxT7qTFdpI1OUFt%2BVtRTOLvkWcgyj%2BFmOrmyZkKNhZ4q0fQzpY6Rn1wkUbVAiYOSIOWFFbPx7GPX23bbJXFYLcGh4VRupJZtANq6SuN6Ytd2n63F1hh%2BjJgvOucdf4S%2BoHTx3%2BQelZ051nf82c%2FJgLAR3FGZkPBWugBT70eoAROQXC6ZF1Q0aOQC9I9sHe0xXzOdecZg3StoJnZ%2FPR7PTkBkMDC3bSlq70eC8EBwfmmmTNgxC%2Fzf7tZFURUQ%2BAEFT0aMJeG%2FcEGOqUB3bHPKKh%2FWGAhPCXya7sdw7EAtIDbHxNA1c1ilCrSzocB6exAdZUEFcUMlJDO51QOV3q8QUVU6mhCtTy3qXpCfX3raBC1iYWesVgyCK39wo5ZRuQ4GYO5NNXvgYxZpzXl6hd2K7d3KF9%2FCRkJAY%2F0jv7JxWc1C%2FCL0VcBPkigpCpI1NFrQiTLsdjfNKtXByD4jEkR6bOen%2FJeGc%2FwQjAZlt4m4lnY&X-Amz-Signature=2cb5940dd9098996c6f4e4f85e48c46e2fd57033c9e0ff36d822181b6f2eff2a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EKXM27%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDjWVzwu4aSeqJbQk9j0hQPj8wMfZW8CYR7i1nDpN0xlwIgczfjV0WyP2%2F%2BmAoDP8L6YD%2BpQaZcOlae1KPIa%2BBUJGwq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK0DZkuzV5uMT%2FW7KircAyVuTaERMxJJpzwep8hjIs9Q8Agf1EJHWnEzmfLV6IRcx0UaQ3e15V3LSOYR2jWCFnEIR%2FF4xJE1HyeGVZa4Nu0Q0MUUQMw1a%2Bcv1DW4D%2FMQ%2F46cX8nhG5nmY9RO6mzNkLmdIeAYYFILbwutPX9m8Y%2BgM5k2NIY24EH0KQP15zHnXvlz79lHVGMBsOw9NU1VT54OL5ReSgrFhtD9un9uFGXIp2DoEx8CPDzEaPdqogdMbe3f%2BsdQy1uSrfEy%2BagEsn6vcE5QgK%2FJDIt6CN2T%2BYIbMiaH9u7bCP%2B4AsZvAGQDpen%2B4Gm0J0iJ%2FbjE8FelVV1IXUOYvKxIPeLhI8fjxuFWtDhefymutkqXGjF6CsaU2E7fS77mBF75xpxT7qTFdpI1OUFt%2BVtRTOLvkWcgyj%2BFmOrmyZkKNhZ4q0fQzpY6Rn1wkUbVAiYOSIOWFFbPx7GPX23bbJXFYLcGh4VRupJZtANq6SuN6Ytd2n63F1hh%2BjJgvOucdf4S%2BoHTx3%2BQelZ051nf82c%2FJgLAR3FGZkPBWugBT70eoAROQXC6ZF1Q0aOQC9I9sHe0xXzOdecZg3StoJnZ%2FPR7PTkBkMDC3bSlq70eC8EBwfmmmTNgxC%2Fzf7tZFURUQ%2BAEFT0aMJeG%2FcEGOqUB3bHPKKh%2FWGAhPCXya7sdw7EAtIDbHxNA1c1ilCrSzocB6exAdZUEFcUMlJDO51QOV3q8QUVU6mhCtTy3qXpCfX3raBC1iYWesVgyCK39wo5ZRuQ4GYO5NNXvgYxZpzXl6hd2K7d3KF9%2FCRkJAY%2F0jv7JxWc1C%2FCL0VcBPkigpCpI1NFrQiTLsdjfNKtXByD4jEkR6bOen%2FJeGc%2FwQjAZlt4m4lnY&X-Amz-Signature=db4edee831db8e9295061c52e3e0b08098b36a317fda945882f270cf47258bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EKXM27%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDjWVzwu4aSeqJbQk9j0hQPj8wMfZW8CYR7i1nDpN0xlwIgczfjV0WyP2%2F%2BmAoDP8L6YD%2BpQaZcOlae1KPIa%2BBUJGwq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK0DZkuzV5uMT%2FW7KircAyVuTaERMxJJpzwep8hjIs9Q8Agf1EJHWnEzmfLV6IRcx0UaQ3e15V3LSOYR2jWCFnEIR%2FF4xJE1HyeGVZa4Nu0Q0MUUQMw1a%2Bcv1DW4D%2FMQ%2F46cX8nhG5nmY9RO6mzNkLmdIeAYYFILbwutPX9m8Y%2BgM5k2NIY24EH0KQP15zHnXvlz79lHVGMBsOw9NU1VT54OL5ReSgrFhtD9un9uFGXIp2DoEx8CPDzEaPdqogdMbe3f%2BsdQy1uSrfEy%2BagEsn6vcE5QgK%2FJDIt6CN2T%2BYIbMiaH9u7bCP%2B4AsZvAGQDpen%2B4Gm0J0iJ%2FbjE8FelVV1IXUOYvKxIPeLhI8fjxuFWtDhefymutkqXGjF6CsaU2E7fS77mBF75xpxT7qTFdpI1OUFt%2BVtRTOLvkWcgyj%2BFmOrmyZkKNhZ4q0fQzpY6Rn1wkUbVAiYOSIOWFFbPx7GPX23bbJXFYLcGh4VRupJZtANq6SuN6Ytd2n63F1hh%2BjJgvOucdf4S%2BoHTx3%2BQelZ051nf82c%2FJgLAR3FGZkPBWugBT70eoAROQXC6ZF1Q0aOQC9I9sHe0xXzOdecZg3StoJnZ%2FPR7PTkBkMDC3bSlq70eC8EBwfmmmTNgxC%2Fzf7tZFURUQ%2BAEFT0aMJeG%2FcEGOqUB3bHPKKh%2FWGAhPCXya7sdw7EAtIDbHxNA1c1ilCrSzocB6exAdZUEFcUMlJDO51QOV3q8QUVU6mhCtTy3qXpCfX3raBC1iYWesVgyCK39wo5ZRuQ4GYO5NNXvgYxZpzXl6hd2K7d3KF9%2FCRkJAY%2F0jv7JxWc1C%2FCL0VcBPkigpCpI1NFrQiTLsdjfNKtXByD4jEkR6bOen%2FJeGc%2FwQjAZlt4m4lnY&X-Amz-Signature=bbd4d1da1c8112c203f776c3e1dd64bceb370c3bc4aef5a3f6a398f8d0504943&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKHUHO3A%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICLgkmkGpzbcXeIOgBRicBs3ayEx%2FeixuZB1SUayht83AiEAhVISLgwgGZ16iZXbLzSm4SRMBxXceLxwH8difTjxNPkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDEUVaCaCAhiEAqoCjCrcA5Yr2w9gPFwxOTgYu0k2bqPRUo55jc2BHHx3SvfOJNwoxOvXfok%2BEmxHQU6MyGS%2B0mECKBfZJUajJ7BEOyWp0O%2FE0NdQUOs%2FzsfN4rpl6SXtDHX2Dhg%2FFNsqbluYtBrWJ4DhXzV6El%2FzaailAW7GDrTelzwhLAhVdjnJ0Lh74MekMGzN5dzE%2BhrWq8kWFuhiGYdazSII6eEa6KukexXCv%2BpiCVuhwRnT2NmtfWQFYuXTGHVI0R1a3l2eI7lHwWfSngAOpJy8VZraSHo06Ur2uzme8YFEPXI1lof8KqRL%2BriWCeXC4cBEezxtM9sonNc8OKamMyoiiy7nmQKu8QIM9Kfe%2BpXnoVPiWrbfOKMcJQG5vYoiA66WWVy4jLa8DqWJxbY3cVEZMY3QIcDbk93My7ZWZwdsg%2BXzQSEUnBM6fGTjqT6bT6B24qFObX8B%2Bx37ZF0gUXGY4SqR8m%2Bo142vS14V1%2B9ZAG96XYvUwiNN5m3G%2FbQ6HAW%2FMK6q9UqhW9VA4x9642Q9JrWF1iFTqdChMJGXnycy%2FWNRi0OZ50ONRQl5Km9UUbjffM9NS%2F%2BFG6ysBf99g8ROlfQwqWyR0tQ5%2FBMmoQrM%2BSy6gurcG5gw6KhC2ZiwhusAU13qO1vNMKmF%2FcEGOqUBG5tnPAxMgFHcHgqUq0fXmnNF56g1IAP1iRrvfNhQRhdGzHGO2YQjBW6kpSGwbbg2DSC7CfRuvpeeSiwK8thULEWyrcBp4qt1mkrhX1bnrYefHLMFVhkv1VGQZuJTTM1ZkcLGhjEJtzwW75HlC7cq%2BgSMZkEvSb2uQwEKPCx2kghiCDU3xC6dYYQjGBgm2ZABDJLd%2B7LGNFs8vo1aplWO79ulMBeR&X-Amz-Signature=901396fbd8f3c61795b0563a0dde311b7ce26090f6070f935362a1bbed3561bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EDUBAJD%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBy8XnQXLkiuGr1JjAD3dNV%2FhTcBJCKTd6G%2B4CWdmqW0AiAaXyaFo5VzVLCatsXhDDnJskZYzXfHJNIf5AMatf2uair%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMJgvMKvbzxZGMefvQKtwDrckSib%2FIo%2BAPIAcg2%2FzxM4CJ7DYHxTw8dboNmK9%2BNyQfaMB8TfkPOLVB5EHgsFC0bVofm5UDfcL8UVzedrWOLkJVSgTAeyPtnJGbN%2BMuC%2Fle3YTUtzIOQhRsXs%2FrV4FK2LsiryX2KtNKJAVNtePCRB%2BG4c%2Fiy3L2%2B6AqXqT3jKD0eEhYxOLt5Um4ScIPo0StbxQmXxU%2BSRtMNqxHhxG8PDOPMxugk6YOYNvJ3h%2FIz4h02jUAfnAwJYZTmPz5YEcaeEZJ4mUb8thICaBNf8hGOLKoQ%2BGiETdOF4fGjmuXND%2BbtodLI0qD3QAesZm37B6x3WPhtdEcQOmyZNDNlScBFj6MbDbj7B19ac8BVA5%2F1VLwHpdz%2F2N3VYTKD5u1NPvaYLCl3vlBcHruPI6d6H2h9DN%2B3pbDbydcF17pmbxotBWEJBuh4yFaZ1h%2Br13RQR%2FoIcDP%2Bbxw8rNWJKVM18I4Ymn96a7kX%2FZzwviLuHQmUiHM2cTugpZFH8u6iQRCDFD%2FWcbEwcNpyjizKnMYOuAEEs75NAOINOe8rWlre04ICjwaFQt1PkJPwdFceKK%2BjO9LBb%2B9gbRmo0jfgJSkHmulHCsPr5khKTNxyfY9wv5K26ttuUbWDXTyEaB9mHgwroX9wQY6pgF58KatdIMOX2P6WpqAaMm7zlR8ERxnO0YlXHZcon9dfzk90XGJECh33CxQlvGTMrdfDaFI99AsbTT9Jicqzg1UCVIy%2B%2FtVPsi%2Be2YOnUWH1khOqGkXMFdl2eDrKhed6jgbAXKhkt88x3AF5zDPM66lLBmGcuejB2xEvrDjJG9Hljd6%2B05VgB%2BhEs%2BgIfRNoVz4Wc39jIMw6suAzpryU90o2tPPFX74&X-Amz-Signature=cf9c8543bf4ff809ba1dd58f283b2f01561696e8fc9bd584856b565e1f45d4cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EKXM27%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDjWVzwu4aSeqJbQk9j0hQPj8wMfZW8CYR7i1nDpN0xlwIgczfjV0WyP2%2F%2BmAoDP8L6YD%2BpQaZcOlae1KPIa%2BBUJGwq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK0DZkuzV5uMT%2FW7KircAyVuTaERMxJJpzwep8hjIs9Q8Agf1EJHWnEzmfLV6IRcx0UaQ3e15V3LSOYR2jWCFnEIR%2FF4xJE1HyeGVZa4Nu0Q0MUUQMw1a%2Bcv1DW4D%2FMQ%2F46cX8nhG5nmY9RO6mzNkLmdIeAYYFILbwutPX9m8Y%2BgM5k2NIY24EH0KQP15zHnXvlz79lHVGMBsOw9NU1VT54OL5ReSgrFhtD9un9uFGXIp2DoEx8CPDzEaPdqogdMbe3f%2BsdQy1uSrfEy%2BagEsn6vcE5QgK%2FJDIt6CN2T%2BYIbMiaH9u7bCP%2B4AsZvAGQDpen%2B4Gm0J0iJ%2FbjE8FelVV1IXUOYvKxIPeLhI8fjxuFWtDhefymutkqXGjF6CsaU2E7fS77mBF75xpxT7qTFdpI1OUFt%2BVtRTOLvkWcgyj%2BFmOrmyZkKNhZ4q0fQzpY6Rn1wkUbVAiYOSIOWFFbPx7GPX23bbJXFYLcGh4VRupJZtANq6SuN6Ytd2n63F1hh%2BjJgvOucdf4S%2BoHTx3%2BQelZ051nf82c%2FJgLAR3FGZkPBWugBT70eoAROQXC6ZF1Q0aOQC9I9sHe0xXzOdecZg3StoJnZ%2FPR7PTkBkMDC3bSlq70eC8EBwfmmmTNgxC%2Fzf7tZFURUQ%2BAEFT0aMJeG%2FcEGOqUB3bHPKKh%2FWGAhPCXya7sdw7EAtIDbHxNA1c1ilCrSzocB6exAdZUEFcUMlJDO51QOV3q8QUVU6mhCtTy3qXpCfX3raBC1iYWesVgyCK39wo5ZRuQ4GYO5NNXvgYxZpzXl6hd2K7d3KF9%2FCRkJAY%2F0jv7JxWc1C%2FCL0VcBPkigpCpI1NFrQiTLsdjfNKtXByD4jEkR6bOen%2FJeGc%2FwQjAZlt4m4lnY&X-Amz-Signature=5df276c98f22859bf878f827f20bf7c6a13996908816e008313cd2a0b56d00a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
