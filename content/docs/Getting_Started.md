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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IP3GRGS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdE888sGALqPmIn3KetRZJAr6RTZcQsvQp3nYO%2F%2BCIxAiAVkUVQ7KdKsv%2FbpK9x77fF3Q6kt3iMNfg1U9OWP3%2BJgSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMiNwQ5YGlwIH0kqFOKtwDxybWXviZQkZMZiNOYOPHA55wkS3LrTUyrnVBxHNjmQYaf3gjHXbj0QKemwS10VapcGXoxuloCkwW6zzNrndCOaSuPux4n7T6RBh3MMNYiHPbDo6hC7VZ9v%2BY9kMP0iVNR8qeebbtfh3CAzpFHaQq5bnx0KXElr1h86Swu%2BMpvdE%2F978IHxWwrswn8XF1xwc8S3LedsDPZbQ5ElulnRNgJl66keC6THG58Y3XbsDXCLHk31wYuLrOZYDDOh7crwkjlMBbqpRQYAs9ubGzk9g94PP4Itsvb%2Bs8o3pF50Kx2amuWuIEL4ZiMPvGOvtbpx4Fwph%2FKraFgV4tbfEz8yRVfuzYQLuwmHqH7MzbmWbcEJWJRFfqFdeAe11r3wU3eJ2d4SxI8g3i4qx9%2BNnjw7IjamJpeAPdpQS2CPJ3Nu%2B5GdltZmEXW3zB54qTmDOP0gSY96uJI1GsO15s%2FmEI%2FhKH2InCMK5aZDNhaJN8q%2FFadW24fg4pRN1QqaN9%2Bszm%2Fv7aWDscmvjwnuDWsYRvTO6YS%2FVhZ5llKQuywXJ2R8Civa%2B2SNivHgq6c0jbqMwKXuIn4gZGNEuBZR106XAY5vj%2FyuPqNUUb5XrZj2H7bIkh5W6%2BlOPveAO0Ey1obS8wjKeqvgY6pgEMv7kDQkKaMMhAKBSYHQVF6zfH55SI0tMQ09bEff3bpZV9BPb%2FWq5i%2FSahNGonOlVl%2FZpenLpXaMsSdLCNZGlAKxZx9EVL7RgVof0vo5fyj%2F%2BYEcJ2mekqNbBeBfYOQQYQ0z2Eulh2x53IGrP1%2FSGdKw7Yh2DKPgBmoq7QWevW4ROA90TnQSZ22TfT0j4VvHMnvynFBKFyazG3whf8bdsCHVKB%2F7Mu&X-Amz-Signature=2ad2b0ae3c7c9bd076286626df81076b981b5ac376a66250eed7a96b736f6ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IP3GRGS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdE888sGALqPmIn3KetRZJAr6RTZcQsvQp3nYO%2F%2BCIxAiAVkUVQ7KdKsv%2FbpK9x77fF3Q6kt3iMNfg1U9OWP3%2BJgSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMiNwQ5YGlwIH0kqFOKtwDxybWXviZQkZMZiNOYOPHA55wkS3LrTUyrnVBxHNjmQYaf3gjHXbj0QKemwS10VapcGXoxuloCkwW6zzNrndCOaSuPux4n7T6RBh3MMNYiHPbDo6hC7VZ9v%2BY9kMP0iVNR8qeebbtfh3CAzpFHaQq5bnx0KXElr1h86Swu%2BMpvdE%2F978IHxWwrswn8XF1xwc8S3LedsDPZbQ5ElulnRNgJl66keC6THG58Y3XbsDXCLHk31wYuLrOZYDDOh7crwkjlMBbqpRQYAs9ubGzk9g94PP4Itsvb%2Bs8o3pF50Kx2amuWuIEL4ZiMPvGOvtbpx4Fwph%2FKraFgV4tbfEz8yRVfuzYQLuwmHqH7MzbmWbcEJWJRFfqFdeAe11r3wU3eJ2d4SxI8g3i4qx9%2BNnjw7IjamJpeAPdpQS2CPJ3Nu%2B5GdltZmEXW3zB54qTmDOP0gSY96uJI1GsO15s%2FmEI%2FhKH2InCMK5aZDNhaJN8q%2FFadW24fg4pRN1QqaN9%2Bszm%2Fv7aWDscmvjwnuDWsYRvTO6YS%2FVhZ5llKQuywXJ2R8Civa%2B2SNivHgq6c0jbqMwKXuIn4gZGNEuBZR106XAY5vj%2FyuPqNUUb5XrZj2H7bIkh5W6%2BlOPveAO0Ey1obS8wjKeqvgY6pgEMv7kDQkKaMMhAKBSYHQVF6zfH55SI0tMQ09bEff3bpZV9BPb%2FWq5i%2FSahNGonOlVl%2FZpenLpXaMsSdLCNZGlAKxZx9EVL7RgVof0vo5fyj%2F%2BYEcJ2mekqNbBeBfYOQQYQ0z2Eulh2x53IGrP1%2FSGdKw7Yh2DKPgBmoq7QWevW4ROA90TnQSZ22TfT0j4VvHMnvynFBKFyazG3whf8bdsCHVKB%2F7Mu&X-Amz-Signature=924f39b96dab29613077c2e944b31c6da4437340d9a90859aee4083dc41b2f2e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673Y33IZR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD87urZZK%2FD1ALs9IMth9zKU4KQorcBPSGpQRVYgv%2FG3AIhAK4fPGN8zoHRs%2B3dl%2FiJ6DAuf%2FzZA03iJPX2%2BnaWkFdqKv8DCEAQABoMNjM3NDIzMTgzODA1Igz1D%2FJtOUcLsqJIlSkq3AOdlaHVzEq12unlHgkLnO8ZS%2FXaQ%2BJZ3bk10bUhqxZVIboAZomNZwpPErViGlVOnm8XJ%2FayY7MHc%2BtLYxGu2%2B5NM99g83N6P2auR0ts9ddGVdJy42BITYz54Pf6W3o3ijXQV2fmDSpB5bZP1pMA5vCEe7uY%2FMjjOElh1A9BvjUnEbre%2FhgiPmLfAJCvekCARuMiI21R0CUmE6bRJXWmluqg18mG6kIrVZ3mPxZBHWSqWbiWnqSDKysfjPrb6dFLpVwfW1oI3MKZYEPqXo7w4CgxWpqNoLfClndvvKKLYPEoxXx8u8Rap9zlNyD1ENMKdI3uHSh5siUzl7JV%2Bo29ertVsHB67ZX4MXiqzCnaaYvwHctg1H%2FpVu9bOsXPGwXLIiDsIKKibs0SJCOHU2MLOCV4sugYyTSLKsa6WG0PMC4F%2Brk7mu4edWSAtEdxVFEaFUTTO2JpfEO0%2FarA0E6fNMHZdoUaIZr5YX%2BnkFxkqfLKO0d5nkPr8FdR5K7ODUc1BmZb2ZcWiEB8VKmnrxkjYxNk31bcbIyJ12F75mw6MZ3pp0b%2Fm0gQ9gDtkCoxUfizc3R1MgdSmpR2ffiLfuR3NcII0K%2BxRfeBEticXJj62Oibp2INkG1EqoejFJm%2FqDCSp6q%2BBjqkARy9xqhmwA5YdJlH1ffTlIsrWQr%2F6P5iiI%2BIQ%2F7OXMxZzxD1NaGEL3QCqcq8Sgyw0tB5N6fYv8L9x1ACxf40%2Fbq0l09S%2FMZH3YXEODdtic%2BowOjeCYzJby4DrYcmeIVd7Ii5yh3WSKOk5T4cdGb3l7j0d8xfsqTodX3rTGJIfYRyi4EmlqVxQM7H9cfij%2FGLdTjg7MFf%2FvIFRdd5P3Lwg8wjPjEF&X-Amz-Signature=fd996f035d2f8a9b07c9df483c61d14b30d4a26e1873beca0907c21c4f64fb7f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4M57KSX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGj0uSokKZ7WOO4lGY%2F08NLHsMPa038as9sy2dojQdMbAiBDH17o%2FbOLXIdE6rTsU91d%2BxB6wpeDd6YIHqrDsIYomir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMq%2BzLz7Stni9RgDdVKtwD7xI82ucrWSax2W3LV2wBjrgCU4uAGcgyimtpHUNxg9UnfxQEiyO3l16pH8KYkEG4oHdws3vIk%2BvEVebH%2Bg6sJ7eDClaSzlJdG2gMyhK%2B1j8OJkch5BilnTHAxYJUeeYDFfPpWPRfn89HsmPMevsGQ13A1Ue%2Bl96CAb6ietfZ89boZTKIMJ1M%2BXVHhvlmSn0o%2FRDZKnjgEhtDPHK3Cx3jPZbVuc9aiooBHFVYsnsD0sjP0Jc%2Fpl3JkHJzpUQNriVNGnYGUylBhj2v3pRIew6IbPZAcyEx4gloiihpxEEW3xmadiFDQbTihWuB7Jpz3%2FqSCntmNZxPSQjRHw7tWbOsqIlHHgS3o28nFzp9Q1RsbGyRDfyyhkkjaYHTt5VICygmim6F308a9m%2BkTU0pYmZtDNKeEywcHT1kAnnYo5qopJbypl2o6cHIwYMKjSjwlSrAtjtRo0elq8Chli7ooibloS%2F18xf07be17eHtpssE38TdqCqRDdHAoACAdLSL5fdz8vhQeOt4VZd5l44nCRufpT4dQu4GVfQTl3hBV9f4NGPVicwWAKaNRyWyxYjA0S5Toj4Z01V4ysVY4hAfrmkG929v6tHsmOHJXzRgMeqCtCig%2B%2B2F2XhqlX%2FWmtgw2KeqvgY6pgF3cXBl%2BhVc3l5S817zfwKhrh97MWaRZmIEZ6oRBAjOPqlIHBmgySPbfj%2BPiGOVxFqhEk5hETccyT%2B3I97tUvX%2B%2BM7w9LPzOLISrKV9J%2FzmIay904QOoPW5d6GcHJOZJHn87kThSBFwS8nOKpGbKm5SU0c%2B4X5NFfvwu1sLhbrESbxZhbCVCSAsBy5%2FKeFKBVMdM59%2F6A%2FIow%2BsvUhh4ykV1TmC6KVQ&X-Amz-Signature=b8b55a6b11a8418e041811d77e20b9a61135082a61fe780f85f42a53764b19da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IP3GRGS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdE888sGALqPmIn3KetRZJAr6RTZcQsvQp3nYO%2F%2BCIxAiAVkUVQ7KdKsv%2FbpK9x77fF3Q6kt3iMNfg1U9OWP3%2BJgSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMiNwQ5YGlwIH0kqFOKtwDxybWXviZQkZMZiNOYOPHA55wkS3LrTUyrnVBxHNjmQYaf3gjHXbj0QKemwS10VapcGXoxuloCkwW6zzNrndCOaSuPux4n7T6RBh3MMNYiHPbDo6hC7VZ9v%2BY9kMP0iVNR8qeebbtfh3CAzpFHaQq5bnx0KXElr1h86Swu%2BMpvdE%2F978IHxWwrswn8XF1xwc8S3LedsDPZbQ5ElulnRNgJl66keC6THG58Y3XbsDXCLHk31wYuLrOZYDDOh7crwkjlMBbqpRQYAs9ubGzk9g94PP4Itsvb%2Bs8o3pF50Kx2amuWuIEL4ZiMPvGOvtbpx4Fwph%2FKraFgV4tbfEz8yRVfuzYQLuwmHqH7MzbmWbcEJWJRFfqFdeAe11r3wU3eJ2d4SxI8g3i4qx9%2BNnjw7IjamJpeAPdpQS2CPJ3Nu%2B5GdltZmEXW3zB54qTmDOP0gSY96uJI1GsO15s%2FmEI%2FhKH2InCMK5aZDNhaJN8q%2FFadW24fg4pRN1QqaN9%2Bszm%2Fv7aWDscmvjwnuDWsYRvTO6YS%2FVhZ5llKQuywXJ2R8Civa%2B2SNivHgq6c0jbqMwKXuIn4gZGNEuBZR106XAY5vj%2FyuPqNUUb5XrZj2H7bIkh5W6%2BlOPveAO0Ey1obS8wjKeqvgY6pgEMv7kDQkKaMMhAKBSYHQVF6zfH55SI0tMQ09bEff3bpZV9BPb%2FWq5i%2FSahNGonOlVl%2FZpenLpXaMsSdLCNZGlAKxZx9EVL7RgVof0vo5fyj%2F%2BYEcJ2mekqNbBeBfYOQQYQ0z2Eulh2x53IGrP1%2FSGdKw7Yh2DKPgBmoq7QWevW4ROA90TnQSZ22TfT0j4VvHMnvynFBKFyazG3whf8bdsCHVKB%2F7Mu&X-Amz-Signature=a96bb55b278677b586ac0a403ae24e79de6879c51a6a6c031a7785426479d912&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
