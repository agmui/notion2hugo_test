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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KBAE6Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCr9eywDs9EPme0Wydk4gab3yXzxwS8kT4dJILrNQYStgIhAJ9yEXNRQJn%2BIE%2F7wbBcWHwyjyHUG4llfd7lIYQ%2BysrGKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaPeB462QXvfoReK8q3AMHT7mvYM2Vm6iYTHS88Yz%2BwMVdH7BcVcBw8QTpbx%2FsxyfM3eggeEPsJSxA9P4h0NgByBu2DWpEQE1LE1m4fsuXe4H%2F3Wdxy80NyWGVP1mNilq5pZYUNflgmL8chEt9s%2FFBh%2FE8s0eZgLoAkQUkFWEl9yOgtKqByqCwwbEjdJs5qUx81pApX7dLyIPPjd5PYc1zZLR0aMIlwtWOfbHrR0gbbfryDjw81aJ0%2F2qJoCBgh6xH2BsZu%2Bv00s3zuMzNKYb%2FlPhBcq14pBOPhT0%2Fy4dYxfEOMyI7msJmUnPnFn5mV02xhmVyRibSzL1PkJHwjjvDXrRxaZDym3EL855NQRLggQiSoDXuInA5APM6dkBLf0%2BFpv%2FCWV4aiywN0nQ91cAWM9kZSjYqHD3JJIaThii85%2B0ChLVyQTiW%2BIzE4zgNvFXcYnmHYDIKKfBT2hkkaT2TFGNAzx%2BUu%2BltoRDR8R3PMTdAtqPU49Kzc1Hllkx9J5Mw6aOWwQIbhH0yl5Jr7TtSgGJ4F1LCTKF1mTemUP99RE%2BQsgi8682XM3hfYp06bsGyMonajdAKlDaZ2c6Vy9y4AzMtELNlTXxO9c3%2B5WnAs2mUHL219WFg6Xhtev60RZMSOhtMlLigzWZFcTCknPa%2BBjqkASmxoC3jNJ7L9ut7jdoM5oVJaNCmCUTzObeSQqlVWAYpUgTWcDCwxDLhWKTl%2BOAghagojP2ehhy7M23YjHqMe2A54kdG3DfYhiQ3R7538iUYFkmZZfeQ9wsSsBgUmwszOEApcUktx%2BHxyCTicnmahsNiZZlF%2FN7QghfBcairoxjFqRj0ImmCEKGdQsRoRu918dgkwp3O2Def8ZMEcM1o%2BWiw3%2B%2BQ&X-Amz-Signature=ed9e69bff57a19ac1ad47413897a67e56caf140bc252ffddd0632cf80c91de45&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KBAE6Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCr9eywDs9EPme0Wydk4gab3yXzxwS8kT4dJILrNQYStgIhAJ9yEXNRQJn%2BIE%2F7wbBcWHwyjyHUG4llfd7lIYQ%2BysrGKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaPeB462QXvfoReK8q3AMHT7mvYM2Vm6iYTHS88Yz%2BwMVdH7BcVcBw8QTpbx%2FsxyfM3eggeEPsJSxA9P4h0NgByBu2DWpEQE1LE1m4fsuXe4H%2F3Wdxy80NyWGVP1mNilq5pZYUNflgmL8chEt9s%2FFBh%2FE8s0eZgLoAkQUkFWEl9yOgtKqByqCwwbEjdJs5qUx81pApX7dLyIPPjd5PYc1zZLR0aMIlwtWOfbHrR0gbbfryDjw81aJ0%2F2qJoCBgh6xH2BsZu%2Bv00s3zuMzNKYb%2FlPhBcq14pBOPhT0%2Fy4dYxfEOMyI7msJmUnPnFn5mV02xhmVyRibSzL1PkJHwjjvDXrRxaZDym3EL855NQRLggQiSoDXuInA5APM6dkBLf0%2BFpv%2FCWV4aiywN0nQ91cAWM9kZSjYqHD3JJIaThii85%2B0ChLVyQTiW%2BIzE4zgNvFXcYnmHYDIKKfBT2hkkaT2TFGNAzx%2BUu%2BltoRDR8R3PMTdAtqPU49Kzc1Hllkx9J5Mw6aOWwQIbhH0yl5Jr7TtSgGJ4F1LCTKF1mTemUP99RE%2BQsgi8682XM3hfYp06bsGyMonajdAKlDaZ2c6Vy9y4AzMtELNlTXxO9c3%2B5WnAs2mUHL219WFg6Xhtev60RZMSOhtMlLigzWZFcTCknPa%2BBjqkASmxoC3jNJ7L9ut7jdoM5oVJaNCmCUTzObeSQqlVWAYpUgTWcDCwxDLhWKTl%2BOAghagojP2ehhy7M23YjHqMe2A54kdG3DfYhiQ3R7538iUYFkmZZfeQ9wsSsBgUmwszOEApcUktx%2BHxyCTicnmahsNiZZlF%2FN7QghfBcairoxjFqRj0ImmCEKGdQsRoRu918dgkwp3O2Def8ZMEcM1o%2BWiw3%2B%2BQ&X-Amz-Signature=30ad0e2bbdd4d4ef68e19be43ae4567201b71aecc24b8fd3847227e02184cec8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L3V3UAA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIG2rXnVrvRiX7ExZcLpjPkY05D197gbgIgBlQL7x4LuJAiAmpo6mPng57Zu18vK4kPCPYQrs%2FiRxPGgUmJNdmXvWOyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM95ZYYVfOBgZnWgMcKtwDZG3bs16%2F8L%2B1F0RB9x4LHqv2tetx%2B5YQyB%2B4TJwvgimc2S8vgloDk4uuNt4Tk1V2stpJu8q8RIevBOsPg7WH1QFbaiRh4faZImXrmfz%2FQAp1UbhTQUAdr2zLhKIIePVsnDMXGQddeEZ7Y2Jjnv2pNRVJebkIv9PphQnRU7JEofFFpaPKiwLPUYvh2E%2Fr6Z%2BgG1SP%2BKeZnjH%2FjuHUC8gftVXGl9NPW6YfPDTMVmavO30h4szGi%2Bg0S%2ByD44whgc76YjoSQIVYSkmN1Ig4TiYHpjqxiETRtX3GsDKYQjLkM4UKcRGVfbVqmHgZIalqxclKvegnMT0%2FoIhMhGg3KYzxJ%2B0RARElHqYinoVfi%2BEA%2FPYiGqmPDAwRD63Lbi2wGz60adhqmPuOdXFwH%2FazBhcryrsA2XND10EE9Xpo%2FMRmi3YN6MFC%2B57Geon%2BoRLrhOjxPr%2BkKeNs%2Bjp2PTaLA5liKirL9de1PZhxlJpmoGi5g6FCTXslnoPwQYzPFixzq65R6jEHfC3dBla7%2FQ3sdrL0tehth81OvO%2Fc41z6dLcpVZFsaDaPoCFTNsRCn1EPuCTtka9g1hyA3ObEA%2FdUeCSigwwwZ%2F5J3wJEaOQObn%2FyWQahfAIuj4kWkFXMeFIwpZz2vgY6pgEWnT%2FlCn0vNPdED9cZQUHrSk4FZFFC67A6Aw9LH38X%2BlV8x%2Bh6g1z%2FQx%2F35HSJhRt6VL%2BJRSO5R6PfHW38n8lYTwyeyvW33euNzGUHiY3KM8YCQByTpeXZzkQZ3ClrD%2Fm0T6RHXoSYauP%2FUaonB8XeC4O5rnZnioQpxpgoG%2FJe%2BB6WhntC%2FPmB%2B2a7D2U6%2BxgzB9Y7ipBIp8VeYZiHj6QgcYoE1seY&X-Amz-Signature=ca0443b742ce89a932e9cd059c8973cc16a616c9e2772bf8b84a2f88e66a49ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYPVCYVI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGLOmDPpDeJG0RQ5%2FRCKLpyZTYofVqsiZZATnP7g%2FWcGAiAtZAx10DgXpsrQlEubanTt5lAS5iKJxpmtbsjLQQrruyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzW7kcEFiAhWXcm44KtwDxRQVf2LiIlG9m0FJSZT4ZiNhv%2ByImB3iYn6n%2B55dJUvt29F%2BgAAVEs2zQpF%2BVn9DcZpyPjZPFwTsU3z7SB9UytzjDH5wMODDNpf7W5e4LVDXrcGzmnoSNwsn%2BG%2FFEzFnEoibkmw7di3trBqSDblkN%2FxD5aw6rKUikr2s2W3aoUPj2kuGKjca7HKs7EE6YxveBj6NVfxWv4ty%2B9JwR%2FOiEJfynFQ27FAEkNCrhzuAcs4aQQeqJclNPGqHhFavSSeb9amlYHZYw961tr0%2FmmPv9qIiLwHkwwuWr%2FYG%2BjkOJ8axoZddxFtFUBHERmIMyVbihJp6GAZ6LAnntUSjnHUymflIWren9R6CI0FQ96j6cmUMtuqxy%2BiyKRarzybyM40rTskLcxRapi5Fo0akj99LUUiWnB6ezNL%2BrKeO69c8xUgVLTjOfKvO68irFkjfAAuwWXOrlRnGPgHlcW%2BV5gmKZvHH5Yuy7xenxJIIsRg7yJeuAGZaoejtlioPFXWt90BxBTrw6aNwIFmRL0LVeklAtOL7YJnmB4w5r%2BQV58P35cm5JZMWgQ0hw5%2BIonT1r3f5HtZo18iBvIhByd5%2FS6JToLEMPZ7EF972DNWIC1lzPLnNvPBfi0j4EdiyIagwxJv2vgY6pgHxVHszyHP63gHmXPJl8YP6dkahsltxK7iXJ38fki%2FCc1Xu9%2BXuTjCWEsKEGWWLkuv7ZRTTwrZajTZruWgBUs0GcYFCQx4yolUsToAsVAxl2eMVSTNhl9Y9Vlo8pHD4ApmHeEmLK%2BfzipzmseSE%2FWxQZZvffsAGQZ8uwYJO6vliUJCFLgaRL9pPf7PK8onqHJ9b%2Bi4fWtc5Io66Sy%2BL%2FPtrW195T8QI&X-Amz-Signature=896250f1f3e48cf39278c4160211f22e6f6a73349bedcaa4cf52634d17edca30&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KBAE6Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCr9eywDs9EPme0Wydk4gab3yXzxwS8kT4dJILrNQYStgIhAJ9yEXNRQJn%2BIE%2F7wbBcWHwyjyHUG4llfd7lIYQ%2BysrGKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaPeB462QXvfoReK8q3AMHT7mvYM2Vm6iYTHS88Yz%2BwMVdH7BcVcBw8QTpbx%2FsxyfM3eggeEPsJSxA9P4h0NgByBu2DWpEQE1LE1m4fsuXe4H%2F3Wdxy80NyWGVP1mNilq5pZYUNflgmL8chEt9s%2FFBh%2FE8s0eZgLoAkQUkFWEl9yOgtKqByqCwwbEjdJs5qUx81pApX7dLyIPPjd5PYc1zZLR0aMIlwtWOfbHrR0gbbfryDjw81aJ0%2F2qJoCBgh6xH2BsZu%2Bv00s3zuMzNKYb%2FlPhBcq14pBOPhT0%2Fy4dYxfEOMyI7msJmUnPnFn5mV02xhmVyRibSzL1PkJHwjjvDXrRxaZDym3EL855NQRLggQiSoDXuInA5APM6dkBLf0%2BFpv%2FCWV4aiywN0nQ91cAWM9kZSjYqHD3JJIaThii85%2B0ChLVyQTiW%2BIzE4zgNvFXcYnmHYDIKKfBT2hkkaT2TFGNAzx%2BUu%2BltoRDR8R3PMTdAtqPU49Kzc1Hllkx9J5Mw6aOWwQIbhH0yl5Jr7TtSgGJ4F1LCTKF1mTemUP99RE%2BQsgi8682XM3hfYp06bsGyMonajdAKlDaZ2c6Vy9y4AzMtELNlTXxO9c3%2B5WnAs2mUHL219WFg6Xhtev60RZMSOhtMlLigzWZFcTCknPa%2BBjqkASmxoC3jNJ7L9ut7jdoM5oVJaNCmCUTzObeSQqlVWAYpUgTWcDCwxDLhWKTl%2BOAghagojP2ehhy7M23YjHqMe2A54kdG3DfYhiQ3R7538iUYFkmZZfeQ9wsSsBgUmwszOEApcUktx%2BHxyCTicnmahsNiZZlF%2FN7QghfBcairoxjFqRj0ImmCEKGdQsRoRu918dgkwp3O2Def8ZMEcM1o%2BWiw3%2B%2BQ&X-Amz-Signature=72a4153844fe0b2fc52c48b87d4c380be317b42130c0935a1aaa682489818dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
