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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOWPW2ZT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuLzGu%2BlXX%2F%2FqDOIFmCScwN4JtqiYHvoAfVngce9MxEAiEAuL5VB11z1b1EaPFDiY0a%2F7%2F6AptagFu5BJ6I3QamBoQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMEml2nlXrV5WrPwuircAwfpk%2Bl1%2FpeL8nq1%2BgE9iVvw7%2BpkyFMnNm7tWbiWy5wVbMsVvsh1grxzmSAi%2BA2PEbquqskzaOC%2FeEmfjgGihhHi0TkoCU0My0Zu0rcR4Tf%2FwrY5vcF3j8iIvquoAUo6ItRcSojx4UIxoER7kqH%2B4ZHvlgBKnB%2Bqt0S7A9Ee2Dibuqv2hUjYuu7OSJWca%2BhOgXlCkm0VwGzBq84euuxpbfGXy8MQH9bvo3l5liNUag7fS1UNzevxgfNWHDO0%2BZLLF3lYAAX%2FGwIAUuWnrrLxr77cspSg2E2NUfgHkFbK7Q4Z44FybTWUvQaGwMtoRHfWm8xhszRzfG8z%2BzHgAavtuyYjYc9ZgT5Q8QTHjzafzaRM0xNWGheN0A5LBIszJgIp7AgN7r4hrqVLmPhex3r93kHcsjStIR4XevTy7ZUgC3Q3HwH8qDikkAJWPNC3SwutLEE31Jg9VFKvT0OBA3sDVnOufv8Om3nhXchqNfJ3Iv%2BvrkVXHExZAH72CFHjONHTL1Vi5B%2FIswAG6r11mSaPQzfmsrC5G6NIRtcJ1mVkRp6OH9iwLcEP2WNZKDHnQkmeBlickCifUTjtSTogyKMUvPE4sr8XvvUs2iADCo0tXQGGEXlIc2JK1UxQBTMzMJKw7L0GOqUBLVvS1OZexuJDDHDivaqhCxQUVcrXXWJxDf5gfr7PAICsP%2Ffy18B1UV7GwQ2Z8H4iBepA4w1ZDjsNmlpOeceUZKLUCOD5SNAfP%2B%2BF9CoaBwnZCngByQv0ZRj4uAEBEgZA5ALE4b2gb99QPDqI21lfu7qrGolLGFI6UtqbRYzwREhc8Mv8lfQOZbkkpIbM8KwqOfMMtxA8wyNUFNN2eA%2B%2FJnQe2eFH&X-Amz-Signature=9b88339d1a8bdb871a4565447d1265758003bb5def9148d6d643de8819ecc952&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOWPW2ZT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuLzGu%2BlXX%2F%2FqDOIFmCScwN4JtqiYHvoAfVngce9MxEAiEAuL5VB11z1b1EaPFDiY0a%2F7%2F6AptagFu5BJ6I3QamBoQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMEml2nlXrV5WrPwuircAwfpk%2Bl1%2FpeL8nq1%2BgE9iVvw7%2BpkyFMnNm7tWbiWy5wVbMsVvsh1grxzmSAi%2BA2PEbquqskzaOC%2FeEmfjgGihhHi0TkoCU0My0Zu0rcR4Tf%2FwrY5vcF3j8iIvquoAUo6ItRcSojx4UIxoER7kqH%2B4ZHvlgBKnB%2Bqt0S7A9Ee2Dibuqv2hUjYuu7OSJWca%2BhOgXlCkm0VwGzBq84euuxpbfGXy8MQH9bvo3l5liNUag7fS1UNzevxgfNWHDO0%2BZLLF3lYAAX%2FGwIAUuWnrrLxr77cspSg2E2NUfgHkFbK7Q4Z44FybTWUvQaGwMtoRHfWm8xhszRzfG8z%2BzHgAavtuyYjYc9ZgT5Q8QTHjzafzaRM0xNWGheN0A5LBIszJgIp7AgN7r4hrqVLmPhex3r93kHcsjStIR4XevTy7ZUgC3Q3HwH8qDikkAJWPNC3SwutLEE31Jg9VFKvT0OBA3sDVnOufv8Om3nhXchqNfJ3Iv%2BvrkVXHExZAH72CFHjONHTL1Vi5B%2FIswAG6r11mSaPQzfmsrC5G6NIRtcJ1mVkRp6OH9iwLcEP2WNZKDHnQkmeBlickCifUTjtSTogyKMUvPE4sr8XvvUs2iADCo0tXQGGEXlIc2JK1UxQBTMzMJKw7L0GOqUBLVvS1OZexuJDDHDivaqhCxQUVcrXXWJxDf5gfr7PAICsP%2Ffy18B1UV7GwQ2Z8H4iBepA4w1ZDjsNmlpOeceUZKLUCOD5SNAfP%2B%2BF9CoaBwnZCngByQv0ZRj4uAEBEgZA5ALE4b2gb99QPDqI21lfu7qrGolLGFI6UtqbRYzwREhc8Mv8lfQOZbkkpIbM8KwqOfMMtxA8wyNUFNN2eA%2B%2FJnQe2eFH&X-Amz-Signature=3fbdfd5a46f81c6755df42e446a71c8c07b611e9ae81f1dea9607140e872fa6f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YMXNIMR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDeylsbReU7w7P%2F7Q1%2BNhnF%2B9sKJRrRzIfqG2WhUWYWAiBPlD6wNho%2FEkNPG1C6VnlZnMatzGilB5ccAbuwgYKa5Sr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIM7EyuKTgQuoSgpad1KtwDaSbvnfeLbP5O2kfvVixmEA%2BCeZKrh5WvnpibkG0HiJj9ANfKUEzCcvu1%2FEZrFmUGxlJ512CuDhVZ5O2SecGGG6oeWddrpxS8ltaFDPqWRZe5rV7RL2ogqXgC%2Fp6IuGemIpCXaiPG8UVrV8sykJz%2BtTJJD%2FldcBAXx2UzXAEJ6CZGtoTrw9sLheToh%2BSzlsp3koWue9uiC9ZDsRCGCdd%2FDzm3qv3F%2B2J2%2Bd8%2BtBwhPcMw505KzZ34NVkqAkUjG8nf1D2NjQHcWFnR1DmBFBaEsTEhGZSdb7ZvHsVefdJshO5EaRHkmS0Mjt8GCpRq%2BEw%2BJCzjgsBb8mbJ%2BZV6E1rdvibnzKvtr6gk%2Ba9Bzr%2Fr7MYDoVCTrB1BzPdsjzPuqEvIn76DcUP4hcOwsozBdRurxLJhj%2BjWV4ztgxhxP8IGiQ8pnf24ufbqhPJe6y3QfnHK4shP1CiBXico8UYfxHRLCvqB9i1zO9VKpUtxHZLtnojHtc%2BvSyZ7T7aZxI9hlGxZ6IgHLEC1u3ahiWW5zS8D4fwq67E9II8TP2hxEDXJpseVa4KzWWBvlsoMZrq5WjxzxUuP%2FygyGMlbZwAAIIlst9r%2F5a9n8T9bwg0YW9Y3BHmynRIm0bovywSWWe0w6YbtvQY6pgFbbYvdiVQmVRgRqXfb5UjObSN91Www03Dx0pA34ZQBeTEwpc6foWMFJOqOLKZXvV8jtddMN5f4zYhSj9kmoE1gdb13K0siz%2B8w5V7ZP%2BRR1tY8tynjLIdhB051T6j7RiH4rHDuGZqa%2BTRTrEoUm8XVZv3MJoiYEOQ76v2qNygm62ETaH21EKV5mfd4gEDODlZdoWb3K%2BgaFsXbE%2FTaA5hEbITBPwk4&X-Amz-Signature=f33bcdfd0f13986d5ac1f7122ec66793f889b5e475efbb8e43799e3e23de29b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPHVVQK6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV4OBhUgzYpf3wKmtVoWfmUrn8jAGbx%2Bsd4X7kPkmk1wIhAN%2FVjvQl8DE3SWi%2FfhlyJRdS8Abe3%2Fgjw3tvio8M64KjKv8DCBcQABoMNjM3NDIzMTgzODA1Igx2TWE4vBCzy4bKm8Yq3AMTA9PFOsKJx2SPundN043v94OjpizAUIAudM5VXIRJU6qdvBJA5z9n4v8Kg8i5X5lU%2BpWe11OKUtjcMl53MwlA9Dhdklq7b6I%2Bj8Qj%2FqDoldocfv0cTrxMYd4Iz%2BhL52MhPQRiBuh3OO9JmfoMbQfp0fBnEZ9I2FF1roXe4EtiaoqQMGIWdOdROityigkc1UK31tsZJ44mbmCkRydmzC7vYdt1QwLQze1hyMm%2FfmsUb1w3NT84Fje9tX1B9pqVsLNEx%2FTMbp3Ei%2FD7Dd7u8SY7r6wqu8E0s4z6%2BTKhvalcR4TOIyIek0MR3koRn%2Bb8PIPt6HE3up7Q6u5BYSudzsP6yrZMBDBRD8McPmRxLyJa7MFmkhcSp2d9Lt%2FlyMpKA8f6Aa5fWEYfCryG6XdYI7vfCMsDxug14oVgkaEksUA1ADodSKjvI4sA9xZGCyZGW20BWYnxLRmeKxYPRhdP2iIHsOMSXszFt%2Bvrn3SHi7yyzNNsIfrEOxzD%2BrG%2F5naDM93NyXtHSX1QT80GsLFELXGgXjE9zXZ4LZqrK5Oiy2GHwhlN%2FB5zrU%2FpgRJW4QY0QyqBqIIEkmctbD5aIBPby8eedRXQEVt5J0wMXlZzXt%2BKDPQ0YUqTMoTldL7FEzDa0uy9BjqkAfLDQUX69SOt79h2HSBADaXa1UkYVhUbDKrj7AsWznnqvpRcE7C3kD1Xp1yOpL1QxvKKvm8zg0Y%2BKnOQppEb9tRnE2Q7oTtTKzolKeHzLNTbc81%2FFVT797k3sgT1HvPMX4yKXUPxOPXAA3dGXq8fd5Dy6GwBwjKpkyoDuDR7j8mLjDxIVxJRg9%2FjzFoctVDb6FSN%2B5PtzRW0R0Pobk06dE9EHthL&X-Amz-Signature=cb3b6d45c13c6e46691ae3f66dff2989383410df3436d9e5ba12e50a1ffdda54&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOWPW2ZT%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuLzGu%2BlXX%2F%2FqDOIFmCScwN4JtqiYHvoAfVngce9MxEAiEAuL5VB11z1b1EaPFDiY0a%2F7%2F6AptagFu5BJ6I3QamBoQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDMEml2nlXrV5WrPwuircAwfpk%2Bl1%2FpeL8nq1%2BgE9iVvw7%2BpkyFMnNm7tWbiWy5wVbMsVvsh1grxzmSAi%2BA2PEbquqskzaOC%2FeEmfjgGihhHi0TkoCU0My0Zu0rcR4Tf%2FwrY5vcF3j8iIvquoAUo6ItRcSojx4UIxoER7kqH%2B4ZHvlgBKnB%2Bqt0S7A9Ee2Dibuqv2hUjYuu7OSJWca%2BhOgXlCkm0VwGzBq84euuxpbfGXy8MQH9bvo3l5liNUag7fS1UNzevxgfNWHDO0%2BZLLF3lYAAX%2FGwIAUuWnrrLxr77cspSg2E2NUfgHkFbK7Q4Z44FybTWUvQaGwMtoRHfWm8xhszRzfG8z%2BzHgAavtuyYjYc9ZgT5Q8QTHjzafzaRM0xNWGheN0A5LBIszJgIp7AgN7r4hrqVLmPhex3r93kHcsjStIR4XevTy7ZUgC3Q3HwH8qDikkAJWPNC3SwutLEE31Jg9VFKvT0OBA3sDVnOufv8Om3nhXchqNfJ3Iv%2BvrkVXHExZAH72CFHjONHTL1Vi5B%2FIswAG6r11mSaPQzfmsrC5G6NIRtcJ1mVkRp6OH9iwLcEP2WNZKDHnQkmeBlickCifUTjtSTogyKMUvPE4sr8XvvUs2iADCo0tXQGGEXlIc2JK1UxQBTMzMJKw7L0GOqUBLVvS1OZexuJDDHDivaqhCxQUVcrXXWJxDf5gfr7PAICsP%2Ffy18B1UV7GwQ2Z8H4iBepA4w1ZDjsNmlpOeceUZKLUCOD5SNAfP%2B%2BF9CoaBwnZCngByQv0ZRj4uAEBEgZA5ALE4b2gb99QPDqI21lfu7qrGolLGFI6UtqbRYzwREhc8Mv8lfQOZbkkpIbM8KwqOfMMtxA8wyNUFNN2eA%2B%2FJnQe2eFH&X-Amz-Signature=3cd6fd6a76d612b7af8c8605a1842e8114e0c3174283e3e8098712a64cad4572&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
