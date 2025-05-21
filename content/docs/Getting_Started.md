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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5QCZDM%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGolMe%2FT70KbrwRyvzMnvjsAuAfE%2FHN9yzFrCJhPdLW4AiB1Cuwga8LNyl3BLF49tMjmtvN2SQuLMM88C%2FXik9EPLSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMlIhLcK3Ug6PbSNuKtwDrj50mu10md4OC1PppFQORIrOPFYP5gJH%2BtTGQpdMjJZT%2Bw2pVXsaaAtJe1Xr2%2B4jMjgshmQs4cEbgFstIHrHH9A8XULG1ALA%2FgUKUvQklCYfNuKkIpUC212D27dK%2FrMaK4xzXJCe29AZzdtkUSINI0rNsQkf0zd4pzRDEM3dqPBzCTzmlNQMTD%2BXGO9ngKXtXhAZ3w09htD9AgU9SA8UJY6FjXdnFAJ0Kr%2BQc16KP%2FSy3Q2%2F9Wm%2B4ypqQJFgjY6fLx9KKJPDSXcuMN%2B95cAcE9HRHsMiT5SGinv4nljFSS8QUsulqQy%2BuxXQ18GnDqTfZ1iHEDQCrHHO3aItBvlpATCfpXpUmJVLazB4Whrd5E3fA%2F22vywOv%2FHKOml0%2Bg0Brv6fowQpZE8Q4NisTkTX8cpbtsmbFGVk%2FNCm79OZNyuzMkmyns6pxOPebBGUeB90eBvySL6CcJ6U6UNWqfp1M%2FWPGykdcfh1AAagfkx7ut7%2BYDOGKWh77tgqf9Csh4p5hDSPgzy72CscR%2F%2BcwnxkvZvGL5vlLxRnBPV2KrwBvISbGnFdAlaEoO%2BDedBEdtdbLZ2j%2FjTTr1Cvw%2F1uLcwTCcKZfTqRrQDslrmTP%2FdbnyCx7%2Bu202deVeWNA%2Fgw4dS2wQY6pgGOhYzAQtt%2BKAzRoVp5bIQmKm4jR8EchNf6W65MN4iiurPU3IhLtSPt7pdDsTJS9Y4UwhkNxcBlCVcSZFRrWbhBfk4CA%2FV7IfHk5Px7KzxwhjNuhZ4JpL5mymO3e8aQ4FH%2FRiAskGkkdmAR1C0xJflpnysRJpgQK4v6QVR0Oem68IoOj5CiIIuWkHK31kTemMch%2Fto2rWYQh%2B%2Fw%2Fci5yKZu5XeLUWRz&X-Amz-Signature=016383f983f06d569f850af7072777f00da6c04038953573b9d26a8992946ce7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5QCZDM%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGolMe%2FT70KbrwRyvzMnvjsAuAfE%2FHN9yzFrCJhPdLW4AiB1Cuwga8LNyl3BLF49tMjmtvN2SQuLMM88C%2FXik9EPLSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMlIhLcK3Ug6PbSNuKtwDrj50mu10md4OC1PppFQORIrOPFYP5gJH%2BtTGQpdMjJZT%2Bw2pVXsaaAtJe1Xr2%2B4jMjgshmQs4cEbgFstIHrHH9A8XULG1ALA%2FgUKUvQklCYfNuKkIpUC212D27dK%2FrMaK4xzXJCe29AZzdtkUSINI0rNsQkf0zd4pzRDEM3dqPBzCTzmlNQMTD%2BXGO9ngKXtXhAZ3w09htD9AgU9SA8UJY6FjXdnFAJ0Kr%2BQc16KP%2FSy3Q2%2F9Wm%2B4ypqQJFgjY6fLx9KKJPDSXcuMN%2B95cAcE9HRHsMiT5SGinv4nljFSS8QUsulqQy%2BuxXQ18GnDqTfZ1iHEDQCrHHO3aItBvlpATCfpXpUmJVLazB4Whrd5E3fA%2F22vywOv%2FHKOml0%2Bg0Brv6fowQpZE8Q4NisTkTX8cpbtsmbFGVk%2FNCm79OZNyuzMkmyns6pxOPebBGUeB90eBvySL6CcJ6U6UNWqfp1M%2FWPGykdcfh1AAagfkx7ut7%2BYDOGKWh77tgqf9Csh4p5hDSPgzy72CscR%2F%2BcwnxkvZvGL5vlLxRnBPV2KrwBvISbGnFdAlaEoO%2BDedBEdtdbLZ2j%2FjTTr1Cvw%2F1uLcwTCcKZfTqRrQDslrmTP%2FdbnyCx7%2Bu202deVeWNA%2Fgw4dS2wQY6pgGOhYzAQtt%2BKAzRoVp5bIQmKm4jR8EchNf6W65MN4iiurPU3IhLtSPt7pdDsTJS9Y4UwhkNxcBlCVcSZFRrWbhBfk4CA%2FV7IfHk5Px7KzxwhjNuhZ4JpL5mymO3e8aQ4FH%2FRiAskGkkdmAR1C0xJflpnysRJpgQK4v6QVR0Oem68IoOj5CiIIuWkHK31kTemMch%2Fto2rWYQh%2B%2Fw%2Fci5yKZu5XeLUWRz&X-Amz-Signature=4f71c520233f35eb6167aa0c6d5c068f6a4acb87ee49aa7afe203571104e113e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5QCZDM%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGolMe%2FT70KbrwRyvzMnvjsAuAfE%2FHN9yzFrCJhPdLW4AiB1Cuwga8LNyl3BLF49tMjmtvN2SQuLMM88C%2FXik9EPLSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMlIhLcK3Ug6PbSNuKtwDrj50mu10md4OC1PppFQORIrOPFYP5gJH%2BtTGQpdMjJZT%2Bw2pVXsaaAtJe1Xr2%2B4jMjgshmQs4cEbgFstIHrHH9A8XULG1ALA%2FgUKUvQklCYfNuKkIpUC212D27dK%2FrMaK4xzXJCe29AZzdtkUSINI0rNsQkf0zd4pzRDEM3dqPBzCTzmlNQMTD%2BXGO9ngKXtXhAZ3w09htD9AgU9SA8UJY6FjXdnFAJ0Kr%2BQc16KP%2FSy3Q2%2F9Wm%2B4ypqQJFgjY6fLx9KKJPDSXcuMN%2B95cAcE9HRHsMiT5SGinv4nljFSS8QUsulqQy%2BuxXQ18GnDqTfZ1iHEDQCrHHO3aItBvlpATCfpXpUmJVLazB4Whrd5E3fA%2F22vywOv%2FHKOml0%2Bg0Brv6fowQpZE8Q4NisTkTX8cpbtsmbFGVk%2FNCm79OZNyuzMkmyns6pxOPebBGUeB90eBvySL6CcJ6U6UNWqfp1M%2FWPGykdcfh1AAagfkx7ut7%2BYDOGKWh77tgqf9Csh4p5hDSPgzy72CscR%2F%2BcwnxkvZvGL5vlLxRnBPV2KrwBvISbGnFdAlaEoO%2BDedBEdtdbLZ2j%2FjTTr1Cvw%2F1uLcwTCcKZfTqRrQDslrmTP%2FdbnyCx7%2Bu202deVeWNA%2Fgw4dS2wQY6pgGOhYzAQtt%2BKAzRoVp5bIQmKm4jR8EchNf6W65MN4iiurPU3IhLtSPt7pdDsTJS9Y4UwhkNxcBlCVcSZFRrWbhBfk4CA%2FV7IfHk5Px7KzxwhjNuhZ4JpL5mymO3e8aQ4FH%2FRiAskGkkdmAR1C0xJflpnysRJpgQK4v6QVR0Oem68IoOj5CiIIuWkHK31kTemMch%2Fto2rWYQh%2B%2Fw%2Fci5yKZu5XeLUWRz&X-Amz-Signature=c9338f03837b5d0e0ddb073cff7abeec8db0e10242cdbbfdb8e54cf25e1515e4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GR3JNDW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDh76xRhG7HwRgNN%2BOvBllMlWMs2vi9%2Fed5J4EgEyb%2B8AiBgfhomQ4ctErAOqkS%2FRPM6%2B5wLZD5bEJh5boahbS4RKyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiIhGIndUh4ZQor19KtwDBRRgeFfx3j0Xo3ioPWx4r9Qjbjvh47MMjEsawZhW8jRy5%2BRG3tMoD67ceHYIzVdezCiC1MrabGHnE9kU6KZ%2B0xNJCPpMMNJCTlfhdjJIh6fZQ6eCeg3B6LbfSSCzAQoNRoCoP3r%2FzN1TgudXCv73duo8nqS92wIWbMgef4X8HmgPxB7STBR1WGY3k3qz44XmVfaN%2FH5y0rY7fkEf09LDSbEI8WZ%2FbDEgT3Y7gAZ1IXHDaKKhMFXiVRvohg0wFlUXShcUGst%2FanGnxTDH0bzbzKZoPMxnP7phM4cfWtYgsfhhSf1h%2FmLyJVTerKpe0ipY%2BR%2F3k0maUx0z35uOvBfdiexSa14DNAFBTVKYFLzoeJ2U4w0r4qeM1piH1beUuTkOiHXkn5S7ehD2yscnsAHZqhPcrbs%2BxmpENBvixVgP%2FMLlk1IdN%2BZzLqg7fI4KK8yqKCbKxWP2tKpOOaffSniVh6t%2FhYBwDS0IO0B5lSF5KzJcUyhGF8pZbHZ7s7ONd%2BWUi3CgdAEqYOIj%2FvjNVrJNDk8F5rs9NJ0ArEN%2FXqBXU3av7A%2FXNFpEEW6tvIpMl5HpddJv2l%2F00GcbUKDdFv879n3OIEkMfAON%2BpAPAniIVrBF%2BUQxKtzcS%2FjC60owndS2wQY6pgEXLXegzhT2RdDdjIejDPSDYvvegvpirOoBohviWfaAxW%2BT8Eq%2BzUSIZu%2BYcgV8k21opgyWZFn0jeNTO%2FAtvpORY37W%2F0g5R5FfcjZO8fCHPxejSTHx7%2BMlVg7mLlaAZAdlffrrF0kfI%2BF1GjCjv6Bs7kLKe5%2BtJJi93SZyLTLvcjJa%2Fw10bjIbbRHP29xBaRv2hoDVAZD0XcaJJo0zUSC3ugCSyLeE&X-Amz-Signature=26694e9d48fd7cc27589ee5f765eb0398417778087ccaf84fa7c5209433066ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QX4IDMN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIF50PJJLkl0B9gCVU7VhDATWgPLHv8S0rp6beNy6kcfEAiEAv54SJXbf57b7VfpmPeX6N%2FvQYgTld3SCEG%2BA6Fv9AlMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpQ1l3vDOZ%2BofopHyrcA2GB1LSGrGeLg9%2Bwzkl92LSfHNgZban19BwrnmVTARm3%2BCbLBW8KyDmb9sbCatwDz51BAVCbg3VIg2UupeUsBuW1JRVVl1xIR3OmKV70PTbILoaXCvnYm1V55%2BkaLfGRlKWFInpu%2FXI1zRXxFjGBV97k5VaOxbe%2B3z0OKW8o7x0syxovxV4t0aPb9SQQ3Oi02pt3fHxJP5YOOHhWdZWJb0kV1nQSYAOrvlCEIEotvhIeZwmjmMWgjMRTZMvZAOXilKYSkGsUoqErYLTR1u%2FJ3etW%2FgfTEYV27R5dhezsGW5zKwzThQjKOO%2BFZAbB8%2BaFcQXWBHXIMtNXgXlg5cJFzKfq%2FaTzo7%2B%2BX%2FZoSbgn1C5cmKzwwhu3GcuSNpJB7102IUD4CDhbkIGOUysXMmGF6vH8aN7kgN6xGEQBvV4sKjUFq2SJebAUXdy0jVq6NBLekiIreDZNTUfNIedYlf5%2Fxbzi0HGhPdnBDn3qbUPhEXnV8Ep3QJvXIvjQAXqJ429%2FMnsrD9J%2BK6GX6zUXhpXS5csYMGzF1L0gKaPQN2O%2F86J2haWyLUTq%2FK1oZhWIlCDLSBOGILcAUM81J4LMqjU6506lUTjAL2sfENPfunQCLb98sHShWYFLtmfnUo6mMObUtsEGOqUBSVv42XziaBHGjBydrIg12c50zUQPHpNDvGQClAbrbrHHV0sV0Cj%2B8NEWUd8CB5tl9eLdkYpJ4OonvBuCh9FNYxnkVXibEt3PhGNWvxdRZe9awmlPZEQJnjgSYrd%2FVYtpULgtn9Vn2eoK9usYvHwz6DQibqsjPs9xIYV31akp0fcBpfZtd9TmNgGz2EuGz29KGRBD7pI3S4789OZfyoGDIcWYE9mu&X-Amz-Signature=cf9026b0da3b2c32f0ef0ee14da2784c2a2194e9c81050c521178c1cad4bd525&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5QCZDM%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGolMe%2FT70KbrwRyvzMnvjsAuAfE%2FHN9yzFrCJhPdLW4AiB1Cuwga8LNyl3BLF49tMjmtvN2SQuLMM88C%2FXik9EPLSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMlIhLcK3Ug6PbSNuKtwDrj50mu10md4OC1PppFQORIrOPFYP5gJH%2BtTGQpdMjJZT%2Bw2pVXsaaAtJe1Xr2%2B4jMjgshmQs4cEbgFstIHrHH9A8XULG1ALA%2FgUKUvQklCYfNuKkIpUC212D27dK%2FrMaK4xzXJCe29AZzdtkUSINI0rNsQkf0zd4pzRDEM3dqPBzCTzmlNQMTD%2BXGO9ngKXtXhAZ3w09htD9AgU9SA8UJY6FjXdnFAJ0Kr%2BQc16KP%2FSy3Q2%2F9Wm%2B4ypqQJFgjY6fLx9KKJPDSXcuMN%2B95cAcE9HRHsMiT5SGinv4nljFSS8QUsulqQy%2BuxXQ18GnDqTfZ1iHEDQCrHHO3aItBvlpATCfpXpUmJVLazB4Whrd5E3fA%2F22vywOv%2FHKOml0%2Bg0Brv6fowQpZE8Q4NisTkTX8cpbtsmbFGVk%2FNCm79OZNyuzMkmyns6pxOPebBGUeB90eBvySL6CcJ6U6UNWqfp1M%2FWPGykdcfh1AAagfkx7ut7%2BYDOGKWh77tgqf9Csh4p5hDSPgzy72CscR%2F%2BcwnxkvZvGL5vlLxRnBPV2KrwBvISbGnFdAlaEoO%2BDedBEdtdbLZ2j%2FjTTr1Cvw%2F1uLcwTCcKZfTqRrQDslrmTP%2FdbnyCx7%2Bu202deVeWNA%2Fgw4dS2wQY6pgGOhYzAQtt%2BKAzRoVp5bIQmKm4jR8EchNf6W65MN4iiurPU3IhLtSPt7pdDsTJS9Y4UwhkNxcBlCVcSZFRrWbhBfk4CA%2FV7IfHk5Px7KzxwhjNuhZ4JpL5mymO3e8aQ4FH%2FRiAskGkkdmAR1C0xJflpnysRJpgQK4v6QVR0Oem68IoOj5CiIIuWkHK31kTemMch%2Fto2rWYQh%2B%2Fw%2Fci5yKZu5XeLUWRz&X-Amz-Signature=9e13753c3ee35f362346071072636db1f907ea39e62739807389ad59e62255c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
