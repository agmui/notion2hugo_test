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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELERQ3T%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH3TiCOm9SPER7R7UYUaYUDr%2FFBCXT58p8b9XkZpAc9wCIQCPu6zjO%2F9xB5Vjel5UvIlDHC%2FFo7awC452ORTt%2FjJBqiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS8M8JpBHmau3%2BGviKtwDI%2Bxoz6dYksBxKmEkIYLiNEeNYglajMAZK%2BwY2xmCvBcmLeww4e4doCIfCxxHb1W2irQye62HrL9xOFMkVpI6W9RXEa7rqDpawGyxPOsfMd8YxXJ3hZpxdBCtAe%2FMdWt%2FG2pw8sqiZP3lQG9DO3PAxAFLkYfKD24hLz8qntpNQdk4AbkV7aV%2FU6EmibqFONhmSORhbnHo2mu7mPQkPlPpSfPhCCSIXebScx0sz1qjYj0Wqa1Wt5H7%2BFgsW1ICYCNxM1ydOU35s%2F15rXkCbb%2B4bXqOMQFzWTsBGsy1pQu9qp3%2BbG8OF0GIf5B9H0s4PW8%2FNF0UudOsI7Ndo5uV7RSExAIqrph4wUgaGmMAORHeohYombm2NYtyKBYDEcAC%2BLEdZeJCzAp5iujE5Nazg5ecna9g00kbBahShP16mVrMgS%2BFuQVeVG%2F2F758xtKPeKHck1MkGOc5BrdtQTcOte%2BxX37S1oVGnAl6hlezzvxxW6l%2ByA1ahjFlQtxj00GowwZJEr2MWNBdJgT8L6vAWQE2oD9jJEYwWpqVhOVdpa34xFgezVZmjeuBEOV80a5kFi8A5PppJGbWXVDsoKqdMXzz4VqmdvZf%2BxVNPz1N3j%2BPxg1TRLul8m2sF7F3a0IwzZbxwwY6pgGvIF66oZfHpM6ceTRyDPEfz4UiXAJroNH42VUJDf4ILG%2F9DTJtxQTvliyTVztt%2FXNLiwVxTB4fqTqj4XYR2DxWv%2BU%2BXHpMcNomO4sa%2B4nRvTjp5tng%2F6kFRG8vX13vmh4A9fA3WyJ0jR8IrJPaVHo%2BNnYDzaTNOlA%2FYstRvIoNNqcvPvsAqusiNbQE%2FlwBXLrPRwQGfx6LKsmLsBTxhVn3T55%2B1KFn&X-Amz-Signature=1617df06bb99cd14ded853d00f25d6f70d08813a7cfede17606784828c8eecbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELERQ3T%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH3TiCOm9SPER7R7UYUaYUDr%2FFBCXT58p8b9XkZpAc9wCIQCPu6zjO%2F9xB5Vjel5UvIlDHC%2FFo7awC452ORTt%2FjJBqiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS8M8JpBHmau3%2BGviKtwDI%2Bxoz6dYksBxKmEkIYLiNEeNYglajMAZK%2BwY2xmCvBcmLeww4e4doCIfCxxHb1W2irQye62HrL9xOFMkVpI6W9RXEa7rqDpawGyxPOsfMd8YxXJ3hZpxdBCtAe%2FMdWt%2FG2pw8sqiZP3lQG9DO3PAxAFLkYfKD24hLz8qntpNQdk4AbkV7aV%2FU6EmibqFONhmSORhbnHo2mu7mPQkPlPpSfPhCCSIXebScx0sz1qjYj0Wqa1Wt5H7%2BFgsW1ICYCNxM1ydOU35s%2F15rXkCbb%2B4bXqOMQFzWTsBGsy1pQu9qp3%2BbG8OF0GIf5B9H0s4PW8%2FNF0UudOsI7Ndo5uV7RSExAIqrph4wUgaGmMAORHeohYombm2NYtyKBYDEcAC%2BLEdZeJCzAp5iujE5Nazg5ecna9g00kbBahShP16mVrMgS%2BFuQVeVG%2F2F758xtKPeKHck1MkGOc5BrdtQTcOte%2BxX37S1oVGnAl6hlezzvxxW6l%2ByA1ahjFlQtxj00GowwZJEr2MWNBdJgT8L6vAWQE2oD9jJEYwWpqVhOVdpa34xFgezVZmjeuBEOV80a5kFi8A5PppJGbWXVDsoKqdMXzz4VqmdvZf%2BxVNPz1N3j%2BPxg1TRLul8m2sF7F3a0IwzZbxwwY6pgGvIF66oZfHpM6ceTRyDPEfz4UiXAJroNH42VUJDf4ILG%2F9DTJtxQTvliyTVztt%2FXNLiwVxTB4fqTqj4XYR2DxWv%2BU%2BXHpMcNomO4sa%2B4nRvTjp5tng%2F6kFRG8vX13vmh4A9fA3WyJ0jR8IrJPaVHo%2BNnYDzaTNOlA%2FYstRvIoNNqcvPvsAqusiNbQE%2FlwBXLrPRwQGfx6LKsmLsBTxhVn3T55%2B1KFn&X-Amz-Signature=eec4efa303f0ee5364d5a21e9b5eae05fb744a3aef8f4ee9dd4f01a0df7893ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELERQ3T%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH3TiCOm9SPER7R7UYUaYUDr%2FFBCXT58p8b9XkZpAc9wCIQCPu6zjO%2F9xB5Vjel5UvIlDHC%2FFo7awC452ORTt%2FjJBqiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS8M8JpBHmau3%2BGviKtwDI%2Bxoz6dYksBxKmEkIYLiNEeNYglajMAZK%2BwY2xmCvBcmLeww4e4doCIfCxxHb1W2irQye62HrL9xOFMkVpI6W9RXEa7rqDpawGyxPOsfMd8YxXJ3hZpxdBCtAe%2FMdWt%2FG2pw8sqiZP3lQG9DO3PAxAFLkYfKD24hLz8qntpNQdk4AbkV7aV%2FU6EmibqFONhmSORhbnHo2mu7mPQkPlPpSfPhCCSIXebScx0sz1qjYj0Wqa1Wt5H7%2BFgsW1ICYCNxM1ydOU35s%2F15rXkCbb%2B4bXqOMQFzWTsBGsy1pQu9qp3%2BbG8OF0GIf5B9H0s4PW8%2FNF0UudOsI7Ndo5uV7RSExAIqrph4wUgaGmMAORHeohYombm2NYtyKBYDEcAC%2BLEdZeJCzAp5iujE5Nazg5ecna9g00kbBahShP16mVrMgS%2BFuQVeVG%2F2F758xtKPeKHck1MkGOc5BrdtQTcOte%2BxX37S1oVGnAl6hlezzvxxW6l%2ByA1ahjFlQtxj00GowwZJEr2MWNBdJgT8L6vAWQE2oD9jJEYwWpqVhOVdpa34xFgezVZmjeuBEOV80a5kFi8A5PppJGbWXVDsoKqdMXzz4VqmdvZf%2BxVNPz1N3j%2BPxg1TRLul8m2sF7F3a0IwzZbxwwY6pgGvIF66oZfHpM6ceTRyDPEfz4UiXAJroNH42VUJDf4ILG%2F9DTJtxQTvliyTVztt%2FXNLiwVxTB4fqTqj4XYR2DxWv%2BU%2BXHpMcNomO4sa%2B4nRvTjp5tng%2F6kFRG8vX13vmh4A9fA3WyJ0jR8IrJPaVHo%2BNnYDzaTNOlA%2FYstRvIoNNqcvPvsAqusiNbQE%2FlwBXLrPRwQGfx6LKsmLsBTxhVn3T55%2B1KFn&X-Amz-Signature=363ac3005a273c0e6dd87f4d5d810ff86570af3580adbb926b8dc7f6382e5e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5Z77I5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZFmNegyXWVxpGtjIVtYIFcWrXs0dGl1bKb%2FTSiNhe2gIhAI5SaaIpTDad2EFfCjqSdpBMYlQYLI4ZEU6kafe%2BIyOvKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwICIV9kD9gQi%2BYZ7oq3AMFitTk5zIB%2FkVl%2BInvSZjkO7Tu88b7VMndlvxPoRkA5Jd0LPQ%2BuimfSOQurIKQHpPhOYfOHcvYgigxuruOZcmNIaRInW7dVpLLOCmbPniT5J05GF%2FE1COif3WqRnaW%2FpcYFDysSIqE4rPKvsWG4KPpB7Bey5XnHwxfNxHBi2c22DguBuG%2BVm7A0t8O08J29ZTN3zLIrqXKS8WgqB3vGQAwQqcwIGtLiB3Z9djylZYXwPQUJUaDf3sBy6hQP4ncASO7ipyu4F3BVqBQSdv9SRoTNaz4EpDW95I%2FAt7M894xJ21UWDSnEcJ0tUEjZ4dd4GB91%2BbMEafSZoE9gUaqM%2BxjolR6aqdrkbv8wZm7XZ5RHzaPuWlZOptMvUIC2TDfYye0bPwEtoto8l24DKRIKc%2F0wZTHnUdl3alpbBZtGU6LN8VHeBiJya91wMEQaR6l4%2Fyre6heVbtafS7rXRcuomaw3eF08hOquylT1W201RvVP3d5tFx4nCw00LJdNMZTNAaes%2BhYV1sC1edh%2FBMzoGTgMibQGCDt8jajpiyfbKyv8ZOxZhSd21soR78sL7juYI6DvldRCm%2F6%2FvpMk7WvZQzzgNcQJmWGO%2BFOZ6Sxz%2BvKqwsP9ugH6YWikjt1xjDrj%2FHDBjqkAR%2FvU5qCuVtm2832H2MH94lJggF%2Fn29A442BOa66pGNbdpttskJrcXHnFeM0bPuMoPRq71UKtTC8z8F4zS2BbmLLvqBb0b2rxGo3eUHxSVSXl9DEHF7H2a3o7hdQX%2Ffip%2BSde81D001Tmkd0VO4V8hpdmOa1YQvQ3ZxBt32c45awhrE1m2bLmQy1Y8NBYeGZJagpNR8wM%2B3ZBwh1RAEVwOI0NeHI&X-Amz-Signature=71b6d34c48f4aca9679c2197b41ce6a68e3a0172649367c43199022503012edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LEOBZFT%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkiKqKhN7X3Sl%2FeeCGCZ8XATfBBBAYmTi9K%2B0xyd7t%2BAiArEQUKWxRz5GBAITieq4eR2piaMa5Xtu6EO9sULf4rGCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU%2FNLvligNNXxRrwMKtwD9d0Ro2C8vaNQemuoQKh5H0xxF%2FTlsC3ySioX%2Bum46M0ofcnAGMaJPLZ689LFLWl1%2Fx23t1546MVt1mYo1t9rb3G%2BqtOlP1vLWNlsIa6Q7KKmX0NP4BMDed%2Fp2e9esGY5OuCRJcvP8l0wKVuhMji9P5%2BkXvr3XkcX8jELezGIvYNe8%2FGtOXx%2BIUusxNyb08pNUvWKwfyZI0%2BSQNZm0mQduT9i9xRnm0VtNO%2BlKpspmRnel23%2BgXOpd1k3xvAsZzwenueTKCA%2F%2FsyVQtPjMAYQ6RM6vTVGfizplxQEU3hyquCJW8qmj7GiBeLkHgTFjQ077H%2B0iZobPzxJD9A%2FpEY%2B%2FcStreuIXO5xvomGZ0S6fwRlosaVtabb7g9iTmfuhMsZAKO1DIcdav5XwaJzcpI4GQ3D8vJNfDQjUitc1a%2BIuJ9rRPdO1BSA%2FcYwEnAyDxJTDeFcqjKPp5oWrKDsNKziA48Nd0GJfOG3j%2BDmkBCIzUaeV7WM7OokGmYhKfz71RtWYSx1wYjR90VxTV%2Bg5o8MHPLiToQZ%2B8fNJz4KhwhO2nG4O5fWvZQRSI3vA4TYiwwg67ROLCDKkD9eqP5dhpmqOlCvjQ3KQQX6BDPAW36i8UwgvTti0DyKAobmRWQwg5bxwwY6pgHXka%2FcCIkCion3W4Ka20kPTdEVaWQUKc34HSI914T7ixiTleC7MNokqKBNGPeJukLcWOniqvkJHdouQhp14D9mIEd5oPAVyvao6CVoqoVnQDFuLS7FzK9%2BQUctceCZYQ9llyW3ud9Geyc6GVjVDZcs6UZtYJ7NCXEVtA2IITrnK%2BDPlQi99HyJaUPvS1cpAhwT173yFCRCS891Uzc26MPexWnKJR5%2B&X-Amz-Signature=3de29f60a5277bc3fa4dec209d1c34f8aa27ccccf4c2cf9e8ba912538e7847d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VELERQ3T%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH3TiCOm9SPER7R7UYUaYUDr%2FFBCXT58p8b9XkZpAc9wCIQCPu6zjO%2F9xB5Vjel5UvIlDHC%2FFo7awC452ORTt%2FjJBqiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS8M8JpBHmau3%2BGviKtwDI%2Bxoz6dYksBxKmEkIYLiNEeNYglajMAZK%2BwY2xmCvBcmLeww4e4doCIfCxxHb1W2irQye62HrL9xOFMkVpI6W9RXEa7rqDpawGyxPOsfMd8YxXJ3hZpxdBCtAe%2FMdWt%2FG2pw8sqiZP3lQG9DO3PAxAFLkYfKD24hLz8qntpNQdk4AbkV7aV%2FU6EmibqFONhmSORhbnHo2mu7mPQkPlPpSfPhCCSIXebScx0sz1qjYj0Wqa1Wt5H7%2BFgsW1ICYCNxM1ydOU35s%2F15rXkCbb%2B4bXqOMQFzWTsBGsy1pQu9qp3%2BbG8OF0GIf5B9H0s4PW8%2FNF0UudOsI7Ndo5uV7RSExAIqrph4wUgaGmMAORHeohYombm2NYtyKBYDEcAC%2BLEdZeJCzAp5iujE5Nazg5ecna9g00kbBahShP16mVrMgS%2BFuQVeVG%2F2F758xtKPeKHck1MkGOc5BrdtQTcOte%2BxX37S1oVGnAl6hlezzvxxW6l%2ByA1ahjFlQtxj00GowwZJEr2MWNBdJgT8L6vAWQE2oD9jJEYwWpqVhOVdpa34xFgezVZmjeuBEOV80a5kFi8A5PppJGbWXVDsoKqdMXzz4VqmdvZf%2BxVNPz1N3j%2BPxg1TRLul8m2sF7F3a0IwzZbxwwY6pgGvIF66oZfHpM6ceTRyDPEfz4UiXAJroNH42VUJDf4ILG%2F9DTJtxQTvliyTVztt%2FXNLiwVxTB4fqTqj4XYR2DxWv%2BU%2BXHpMcNomO4sa%2B4nRvTjp5tng%2F6kFRG8vX13vmh4A9fA3WyJ0jR8IrJPaVHo%2BNnYDzaTNOlA%2FYstRvIoNNqcvPvsAqusiNbQE%2FlwBXLrPRwQGfx6LKsmLsBTxhVn3T55%2B1KFn&X-Amz-Signature=8885fb8eaa7bc86010f4ea639e72a93a2ae4a49b84867b9aa530e068d28f9c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
