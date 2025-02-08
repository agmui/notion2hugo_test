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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJR4PA7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHWZ5J3Mw%2BeTLQ%2Bl%2FwR8xm19VbZdWHiMjUrR0qPb2AEyAiBwqieDDKSNje9X%2F5MJ%2FnfYjE7XjCGEl8vlnQUtyKNKYyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5yJ2RVtDyaEnfeVaKtwD8u9onK2IW48sf3K5v%2FoAXkabNU%2FEDPPztFOIjwLEUHifmQWcsdXVUHoGGggQxSYecJcQ%2BW89alK6WiSZlElFh1YjuEFyg5gV810cJQeNn55tSqm4kVTlXNfnLUrXYTE4%2FMOTR1RLM13r15iH%2B6wEQNAJJXQVJRLDV2vibusmDyNHxaiAEmsF%2B129Ew97P87ki6%2F8SAmTqXnczQHUOpLanPCA9S%2F%2BZ3fxclUqNbD52xOkdfSCzwZFtkT1YFl%2BJKU2U3LBTesiXsDS1kGZHhnyRQwac%2Blz2khBOXBsu3VIlxHfv9GVzaV0E%2FmgRsnGmSvRqwHuUCB1mIvFbGOVloszfr3%2BBO2HRCSe%2FkAdoYZqHutzuVCZJz%2FE8pmcyRIEPfp%2Fch7RKWsjsmk57uJAEdLN9Pzs6rygHV5imR14Yo23%2FlCl8IYLGts9KGWUATS7vym7W28gxcXKxG4RXXp%2B3E1A%2FNpS9onyvmW%2BTovjUWohKG9WyF2b6JPwLYxhl0w5lX7BHgcOIKiaTFbap7aJrtzS%2BnNwVGj1TbBPlh%2FR3%2BCmgpUkJxoQC0no6mEKBy5srOkKMQ%2FEkxicaBMFa4tUa7Sj7l0kFa9T9%2BuhHUoa1vFqbQcN5gtoXoftF2k8oKwwvpCcvQY6pgH69jYIkrX7ThfYhRFyBGdCXhxMXW65M9wNG5yxQONuJfWbDBijFgO2loY1InGJnJ3IQqt9iLUFm4ZS7pXR3Q7P1EfHUEzrIMVwB8%2Fstwnn57I1fwjsLfQ9ZLREBk0sjN%2BnWTNQOhyrMb2u9OtTjdylxJeVVN7OyU%2BlQCcj15xyfdwgAvKvZ1QFkstYVv4TAPxfz8ufxbahX64Bh11Eq0ulDhs0u%2Fqa&X-Amz-Signature=c877cf8ee24a8c13c8ed37fce3ee7944ed800d94cd3eada9c1148564871c246e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJR4PA7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHWZ5J3Mw%2BeTLQ%2Bl%2FwR8xm19VbZdWHiMjUrR0qPb2AEyAiBwqieDDKSNje9X%2F5MJ%2FnfYjE7XjCGEl8vlnQUtyKNKYyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5yJ2RVtDyaEnfeVaKtwD8u9onK2IW48sf3K5v%2FoAXkabNU%2FEDPPztFOIjwLEUHifmQWcsdXVUHoGGggQxSYecJcQ%2BW89alK6WiSZlElFh1YjuEFyg5gV810cJQeNn55tSqm4kVTlXNfnLUrXYTE4%2FMOTR1RLM13r15iH%2B6wEQNAJJXQVJRLDV2vibusmDyNHxaiAEmsF%2B129Ew97P87ki6%2F8SAmTqXnczQHUOpLanPCA9S%2F%2BZ3fxclUqNbD52xOkdfSCzwZFtkT1YFl%2BJKU2U3LBTesiXsDS1kGZHhnyRQwac%2Blz2khBOXBsu3VIlxHfv9GVzaV0E%2FmgRsnGmSvRqwHuUCB1mIvFbGOVloszfr3%2BBO2HRCSe%2FkAdoYZqHutzuVCZJz%2FE8pmcyRIEPfp%2Fch7RKWsjsmk57uJAEdLN9Pzs6rygHV5imR14Yo23%2FlCl8IYLGts9KGWUATS7vym7W28gxcXKxG4RXXp%2B3E1A%2FNpS9onyvmW%2BTovjUWohKG9WyF2b6JPwLYxhl0w5lX7BHgcOIKiaTFbap7aJrtzS%2BnNwVGj1TbBPlh%2FR3%2BCmgpUkJxoQC0no6mEKBy5srOkKMQ%2FEkxicaBMFa4tUa7Sj7l0kFa9T9%2BuhHUoa1vFqbQcN5gtoXoftF2k8oKwwvpCcvQY6pgH69jYIkrX7ThfYhRFyBGdCXhxMXW65M9wNG5yxQONuJfWbDBijFgO2loY1InGJnJ3IQqt9iLUFm4ZS7pXR3Q7P1EfHUEzrIMVwB8%2Fstwnn57I1fwjsLfQ9ZLREBk0sjN%2BnWTNQOhyrMb2u9OtTjdylxJeVVN7OyU%2BlQCcj15xyfdwgAvKvZ1QFkstYVv4TAPxfz8ufxbahX64Bh11Eq0ulDhs0u%2Fqa&X-Amz-Signature=c7964932d64b09310ba7ffe78b7141bdf274146f0df2dccfe330af40a91afc38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MV7F5OX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHo5YdAs36ehK7HLZ8tPjL6xnJgxpYgPzmFabZy8uOcpAiATQG5BIePwId%2BT1SHyhA0A2QRQau7yrAQUDMPzmr%2FO7yqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIIIBGyWnySZ7SS0sKtwDm4njYg0Z2ZzMsqW8QbGq%2F5NKlpGy2fmTacslzN80PXvtwyctEtUvFxrWC%2F6oVDIRx8JuX3sE2ZaJghuhd3zlTXjjv9Msmhg%2FJwgB9XfwpO0fMHBPkkJySruWsrBfDSZvcCrk2dfYZA0Sv5j0ExLnsfzQ0PXPTxleGoUQGs5N02JvGj76GzP%2BvCLdOdicayMcTopz8i1XoYfQI%2Fg5F658QBB%2BcoazqkUeBFaB221dw5GBfu49jOthUsZDx8itb5B03C5b2qo1lok3uv38kpmIpve2C7hkl3UFKz8C5QHwOUI354RK7oMe%2BRsPKptnSzUWOozwnwbLZvr6e1AsaxWeh%2Bdz1o1CCeK6gXuePIUpON4Z2rUhbZiuky0rKqrX3ui4QFbUshw9bfsr0AfEuwa%2BIgJe2GODQ%2FexhQz2d9DDFSXKbYyyDIBXEDIJcfVzrOkOPKxu4XJ%2FMbksOBSE00rY4QgTtxB8vEGQPs%2B%2Fg2emxim1PtFCDkP2jZ%2FHuLHqAkDhyem3qZjAnz4tBV9s5XcMJ1en50QXiXEKAK3riGvaC9K%2BZwHzhKBGu0L4bF5Ick3UVfwfvvqTYm9dFf9ZdIIhsrXPGGeV%2BUdsSHdvU7pvUPoRuIG0k4hZ4K4%2BslQw5Y%2BcvQY6pgECrjMul6naZDybj%2BJ0O764HDb2MsAJQ8NmEb7l3VbVcuqGpzh4R3gRxLbs8DzAE4974esj7RlMGQGv9VbV7i0jtI3tIsZcmVyZkK%2F5wdQRAnCQTaAhabZADGnYAFpBUR1F9m6kZoTYRyaFwCmkTByNKQvXguQyyzLTEdhAG8vW7urEZB%2F2%2BPGzjt9y3hLrSfoAQqhDsu1AIN%2F2rb4%2BOZRfg5Z7xyCP&X-Amz-Signature=494dbaca6f5ef37e053dadb6fc6c0a57bdc32ecac9bd3c5fe9208a4dbd671a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKASCFX2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDisZIXFuanh%2B%2FX2NTrZHslSi%2FyPQQkUMV1jyk1lPagygIgO9hvBDs2NJuH1xLquAHL1apuVuIVwUyEjKVEByYIoeUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8bkoQNDkCvcfnTdyrcA0qqUGMq%2F5thMT1JTkUtmz%2Fih9B9PGMqgzKzT20dfPgZGiEBfYCB%2F7lRjsSCmZaklmk1u3a9gxq3sG4tNdgHV%2Bys%2BucMcyc0HnZM9ciNSOF1SGrvyw%2BfdyoZV%2FlNfrwslmY4iPVFfUJIJY8ltyGSoI%2BwGj7pcxfps5Z6O%2BbiixM%2FgXi3ZxNVPYnOMPD8D9OBpuFYO%2BwQm%2FfITKJcmzYakTZAPYcEGsWboD7Vyi6XRzxX%2BsAwQtGe8ErgDXkMHX213qL0XuMveyg4fut92d9wl69c%2F5tWhd%2FEkQoFThAmaJmEqrB4seisDz%2B7GU1%2F%2BOTLY2z6Pi6mxZOxtLi1WAgg1ztbdiYgvlQbVwQbX90RB4W4kZvvOelUee0nMSCj%2B9mUoC2k%2BDMP04c5FOTPf%2FonjMhKoETGjFIWkNqQS8mC2LyaDHU4w3jfBamLyIc%2F8T8QK1vkJ998ovh37g87dbBeOcXgblqrk3BIBKRNB%2FAUR2u8o%2B8wYmRvb9eKj0BoAL6lx1DLPxcwQ%2BRBzbROmgh9Df189A1hkKHZ9vgXNA2vjoZ5NEUh%2FNlXNH4pP%2BvoYWfdhm02klQqBOX%2BrC1QsCXv6Vbt8qQ%2ByB4ogr6dHt7c3IO9rHP%2Bvc461xzSW%2BC0MJiQnL0GOqUB0WC%2BhseDO7yrVcqQnI7INWYwwl4177mdDmkwOTaLPM3wxQxZs3HLIXQF%2BHtYzjdkEvZ7g5MLjoz4000QFTqbZmmL7K5vzUq50EhC9p7tCQXvWcFTC9yK4Uj8LxAnPIf7EP25eWPyownTxWDJEVABGHk92oZKlwzHM6d5ChD5uPiH4p6oGcRzR42cFKNrwEK9Y%2B3YWg3yE173zJzOwzVWY79kgdU0&X-Amz-Signature=caa26205f1dea5c1491a38c10c66ea1b903d226ce29ce446c238940ec899320b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJR4PA7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHWZ5J3Mw%2BeTLQ%2Bl%2FwR8xm19VbZdWHiMjUrR0qPb2AEyAiBwqieDDKSNje9X%2F5MJ%2FnfYjE7XjCGEl8vlnQUtyKNKYyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5yJ2RVtDyaEnfeVaKtwD8u9onK2IW48sf3K5v%2FoAXkabNU%2FEDPPztFOIjwLEUHifmQWcsdXVUHoGGggQxSYecJcQ%2BW89alK6WiSZlElFh1YjuEFyg5gV810cJQeNn55tSqm4kVTlXNfnLUrXYTE4%2FMOTR1RLM13r15iH%2B6wEQNAJJXQVJRLDV2vibusmDyNHxaiAEmsF%2B129Ew97P87ki6%2F8SAmTqXnczQHUOpLanPCA9S%2F%2BZ3fxclUqNbD52xOkdfSCzwZFtkT1YFl%2BJKU2U3LBTesiXsDS1kGZHhnyRQwac%2Blz2khBOXBsu3VIlxHfv9GVzaV0E%2FmgRsnGmSvRqwHuUCB1mIvFbGOVloszfr3%2BBO2HRCSe%2FkAdoYZqHutzuVCZJz%2FE8pmcyRIEPfp%2Fch7RKWsjsmk57uJAEdLN9Pzs6rygHV5imR14Yo23%2FlCl8IYLGts9KGWUATS7vym7W28gxcXKxG4RXXp%2B3E1A%2FNpS9onyvmW%2BTovjUWohKG9WyF2b6JPwLYxhl0w5lX7BHgcOIKiaTFbap7aJrtzS%2BnNwVGj1TbBPlh%2FR3%2BCmgpUkJxoQC0no6mEKBy5srOkKMQ%2FEkxicaBMFa4tUa7Sj7l0kFa9T9%2BuhHUoa1vFqbQcN5gtoXoftF2k8oKwwvpCcvQY6pgH69jYIkrX7ThfYhRFyBGdCXhxMXW65M9wNG5yxQONuJfWbDBijFgO2loY1InGJnJ3IQqt9iLUFm4ZS7pXR3Q7P1EfHUEzrIMVwB8%2Fstwnn57I1fwjsLfQ9ZLREBk0sjN%2BnWTNQOhyrMb2u9OtTjdylxJeVVN7OyU%2BlQCcj15xyfdwgAvKvZ1QFkstYVv4TAPxfz8ufxbahX64Bh11Eq0ulDhs0u%2Fqa&X-Amz-Signature=721f709d990933f2f74e3e7d03b742547fbf7ce72172a507bb6c4f43eae27cec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
