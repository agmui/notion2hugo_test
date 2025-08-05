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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FTVXLLR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAqoVIH8yEEgnZZO3%2F2chE9AdR1QiQCUZ%2BQPG1m%2Bto0sAiBj0mXmzF0YxplhaCIGcoILkeNaaCeNIt4E04q81CMNYir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMMGZ5EJ0tE88bfDUhKtwD2URz2cyDm0Ah3wg0yJEd7gmJ3JVxXH2R%2F%2BOeAZ8V0LxFLPCaAeZr4zOtorOPO0gxxGAkMCF12n%2Fy0M1waEIshpCevM9WLmJ9ZDkxKYWXq0jWTRdAqW%2Bf1TaxZdoEbdgzXPK1Lr%2FDCPdZ98FO%2FFtwVTnoCnZ1%2Bbis2BGe59rPEbg7NcJ8OK%2BCZx5uQ86jnfu8KwTawJ1bcralYbw7V2Roo%2FcnzM8ky8A8UgGowKJIcAZX84Ckg92bVeKliconed%2FzdjQQUa6Vg0PrYbhu7e9kBrI%2FPAaAbdqR5gC5I1SJGsEyVQFpMuCIxwhHejPiwHkoiey0p0Lg6ub7oPcVwcsVOrsLvFNjhydIlN7Qt%2FOQNXl0Gsnmxel7PjM2b0%2BlunGmPM8KPVR%2Bs9h4LgEp05D4tf0r0BfxvrUn0Ga%2B5ep9mx5zckMUT3Cua7ihBzuj1VWWuvwPuIlJMACaaQ4r%2BCgriOfs%2BUfkWdj0MaSY%2ByEcps0Ge4aDt6zWVXqaD%2BLWZZtizWN%2Fzp0XbT2mUD6z0cR%2FktBRTKYTEb2omKQE44Gr%2FHmFPFNkbu0%2FdwQV91xyVeOXv9OzE%2FU3kpVQVlyEKy9qE9AwydD0w4PFPjdOmJBuQMp%2Be96Ne%2FWwIrXGem8wjPTExAY6pgF%2FZjktZ0Fr%2FtsY2XbSyyhla3hQZZohE14lVTIao6byolNcksfBf7j0N%2B9OKwLb5NJShHkPGqtDKfHD4vYoO5D9tYFRcRC38th0GiEOXeenvT4TRr9okEk9gDl2iS5jdPuaxNVYPOxJP5gKbK1KFJ2QjL1gWksVVXlrQ%2FEV2dQ%2BJNyImr56szcDcx3YAhs2hyI0yxTL6pqepfTH9wM9gb%2BJBpXlYWzl&X-Amz-Signature=b5a73e011c54126a574a509249d0ee446afe12fa9877d6484e0cfe0ea7678573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FTVXLLR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAqoVIH8yEEgnZZO3%2F2chE9AdR1QiQCUZ%2BQPG1m%2Bto0sAiBj0mXmzF0YxplhaCIGcoILkeNaaCeNIt4E04q81CMNYir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMMGZ5EJ0tE88bfDUhKtwD2URz2cyDm0Ah3wg0yJEd7gmJ3JVxXH2R%2F%2BOeAZ8V0LxFLPCaAeZr4zOtorOPO0gxxGAkMCF12n%2Fy0M1waEIshpCevM9WLmJ9ZDkxKYWXq0jWTRdAqW%2Bf1TaxZdoEbdgzXPK1Lr%2FDCPdZ98FO%2FFtwVTnoCnZ1%2Bbis2BGe59rPEbg7NcJ8OK%2BCZx5uQ86jnfu8KwTawJ1bcralYbw7V2Roo%2FcnzM8ky8A8UgGowKJIcAZX84Ckg92bVeKliconed%2FzdjQQUa6Vg0PrYbhu7e9kBrI%2FPAaAbdqR5gC5I1SJGsEyVQFpMuCIxwhHejPiwHkoiey0p0Lg6ub7oPcVwcsVOrsLvFNjhydIlN7Qt%2FOQNXl0Gsnmxel7PjM2b0%2BlunGmPM8KPVR%2Bs9h4LgEp05D4tf0r0BfxvrUn0Ga%2B5ep9mx5zckMUT3Cua7ihBzuj1VWWuvwPuIlJMACaaQ4r%2BCgriOfs%2BUfkWdj0MaSY%2ByEcps0Ge4aDt6zWVXqaD%2BLWZZtizWN%2Fzp0XbT2mUD6z0cR%2FktBRTKYTEb2omKQE44Gr%2FHmFPFNkbu0%2FdwQV91xyVeOXv9OzE%2FU3kpVQVlyEKy9qE9AwydD0w4PFPjdOmJBuQMp%2Be96Ne%2FWwIrXGem8wjPTExAY6pgF%2FZjktZ0Fr%2FtsY2XbSyyhla3hQZZohE14lVTIao6byolNcksfBf7j0N%2B9OKwLb5NJShHkPGqtDKfHD4vYoO5D9tYFRcRC38th0GiEOXeenvT4TRr9okEk9gDl2iS5jdPuaxNVYPOxJP5gKbK1KFJ2QjL1gWksVVXlrQ%2FEV2dQ%2BJNyImr56szcDcx3YAhs2hyI0yxTL6pqepfTH9wM9gb%2BJBpXlYWzl&X-Amz-Signature=5b7c751e7584674ad97d72f478b99adb5deb81481af4591a81e8f831e3770110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FTVXLLR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAqoVIH8yEEgnZZO3%2F2chE9AdR1QiQCUZ%2BQPG1m%2Bto0sAiBj0mXmzF0YxplhaCIGcoILkeNaaCeNIt4E04q81CMNYir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMMGZ5EJ0tE88bfDUhKtwD2URz2cyDm0Ah3wg0yJEd7gmJ3JVxXH2R%2F%2BOeAZ8V0LxFLPCaAeZr4zOtorOPO0gxxGAkMCF12n%2Fy0M1waEIshpCevM9WLmJ9ZDkxKYWXq0jWTRdAqW%2Bf1TaxZdoEbdgzXPK1Lr%2FDCPdZ98FO%2FFtwVTnoCnZ1%2Bbis2BGe59rPEbg7NcJ8OK%2BCZx5uQ86jnfu8KwTawJ1bcralYbw7V2Roo%2FcnzM8ky8A8UgGowKJIcAZX84Ckg92bVeKliconed%2FzdjQQUa6Vg0PrYbhu7e9kBrI%2FPAaAbdqR5gC5I1SJGsEyVQFpMuCIxwhHejPiwHkoiey0p0Lg6ub7oPcVwcsVOrsLvFNjhydIlN7Qt%2FOQNXl0Gsnmxel7PjM2b0%2BlunGmPM8KPVR%2Bs9h4LgEp05D4tf0r0BfxvrUn0Ga%2B5ep9mx5zckMUT3Cua7ihBzuj1VWWuvwPuIlJMACaaQ4r%2BCgriOfs%2BUfkWdj0MaSY%2ByEcps0Ge4aDt6zWVXqaD%2BLWZZtizWN%2Fzp0XbT2mUD6z0cR%2FktBRTKYTEb2omKQE44Gr%2FHmFPFNkbu0%2FdwQV91xyVeOXv9OzE%2FU3kpVQVlyEKy9qE9AwydD0w4PFPjdOmJBuQMp%2Be96Ne%2FWwIrXGem8wjPTExAY6pgF%2FZjktZ0Fr%2FtsY2XbSyyhla3hQZZohE14lVTIao6byolNcksfBf7j0N%2B9OKwLb5NJShHkPGqtDKfHD4vYoO5D9tYFRcRC38th0GiEOXeenvT4TRr9okEk9gDl2iS5jdPuaxNVYPOxJP5gKbK1KFJ2QjL1gWksVVXlrQ%2FEV2dQ%2BJNyImr56szcDcx3YAhs2hyI0yxTL6pqepfTH9wM9gb%2BJBpXlYWzl&X-Amz-Signature=d2beb38feb71edcab44e7c9cc381c0e9445e071e121880a6e32da21ba0a3a6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4YA4QDS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHWM4b3oQhZBhHICjULYCx9BVTiOcS6HB%2FzedA3%2FcCJQAiAJegFPT1YQBQVYvQ0vvwZGkl3%2BoljqtVtWzSwdX%2B7JZCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMJtLen0x6acI8g3d1KtwD29soN0cNfBG%2Bk6tayZGgqqLxpcRoeMdvOYzBMLH1MCpQ%2Fc2XFTbBq%2FcMxM8HyLSRoRC1K6xRLubh8g2BHz1LSqcoSJi5iMTiJeU07kO2M4BT9iha1Tg9Elgbgn0xdiEWXnfNlORHfCkHhMbqQhDMZpdem2psPxSYtAmuEcnIsOQXJ0qOM6%2BX1R3m90xJvyloWtpJ3W2pdzOOFgdzQxlqs4D5m%2B8cqwowL1HCP1UME8XuS8aUhMvwEXF%2BqNjBj78GKELZ9w6UEDoY2SvBqI5pN0gCIwEKYviw%2FnUDZxtTdYkgAiUMh4SMip4lwQjDLyO0exe1ji9KPpymfHH9Vd%2FV4v9gjLfFHzdkJL99QxuRSgA5IVlfwrdaCeYPFCUGvxDMnm4LuiwhABFnJm1gB01t6fTgEjWGCwZHQFzTlRoMmtfj9HcKRievZYYOzIKFe0snZlGZyrxAYLNUUmWGxzzhVNc0Jfn2atzn%2B6oxx%2BTZWJclvET7L2IL0nYwNv6RSvgfe9l34Ua2RTiwKOvvw5urJaNbizNf8pVzbR%2BRb2bYJ%2B0trCXmjAT3UhWmKzt6FtHdhazygWvuGIcfXhTMT0GV%2FbdqCnQxTsmmmf2gkaw8c9zcyS6wxxy%2FI%2BTi0zQw6PPExAY6pgGays8IN6YKwUuzzMa%2BLv6kPNg654P2KBx6YsoJOsVcZ350sMuSk27jca0Lyn2vF41o7uebtJIlsOoMUhVA5GcfvGFc0P7mPY1mb1cFhZFLqt80L6iOTcx1Vye6jxTbDdTh%2BbOlE2NNRx0Cwj1L68QtiIbeY92Pgcio1Zo%2F64b0dyyCV2jXJTiU4SP239aFsVubKR9%2F1p8NSq%2F8kYIsENvazdLLPxbq&X-Amz-Signature=ea42ae70cd86d97a73bc3683f7294ca9a171ffb92d9f38f97e70b59cf042d742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR6FSBIK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCI%2FwM5lmVr714lmN4ILQADv6OdQwEzpAD%2FW5VpSWG%2FxAIgJiGJXrJD5zafvuI5Yf6EFHHTc014wKqisGXLK%2BN8zKAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGKTVj0DwtzYmvKc%2ByrcA%2FlrH5r4E3OGxx4iHfR7OCnOkd4DCkMQJdpRejrafhuqVC8%2FUgqPDb45LtQJF1wwk0XMxVNKrmJIe82uarTz2TOl1ldutP7x0cu7Y0hZv82w7oAM841%2Bf4RbsH0F4QvTpI7nOXuONvSEuOSurFJptvqreYGIBGkiqYBFfiUWSoSN8od9G4MMVLbK1zc2MsidLRl6ccvwK0iXJuD9ZudGlIZ72H2z5L315gsL40Z%2B6u76ZUyiMXG37vDmbkELzRmUFwwU6Bt%2BO51MRXZbcW09fg0P5Q%2F1HUFA2TUmV9IvQlr82UncIr2itfG%2FLIlsLsrawk6apCDTtM9gJFMcvvoBLfOnLyWfNf6e1t8%2F3nSLKpIbvrTF8k1Hvw8m3YJJrfrDAm4t40smpjHXliD%2BGUpS5ITLkNVDBiY9wHouA%2FJp2KNBrIROW7KCKhzOKgBJvvxQNXvVIboDd7zSbNigbaO8Sli1FQhA%2Bsc8zaDEFRPDfRwxuYk9BtgfzRXAIOXYHoDHMgA1M47GXgD%2FNcoXvH8MPwJp%2BqVyu%2B2%2FXX6SQcUZn%2BHgvAe%2BtXoOrcsk9eDpPIlchfv6aOp3Azex1IoRwE%2B5ziH4x%2FJNaJTpwmbWi3F23ZydJc3jmTgQdQdgINJjMO70xMQGOqUB%2Bc2uDBVo2o0ta9kiRv156uRdPJn3Rb7Z%2B4FaeOV14Zl%2FKjGSghSqFsN%2F9fSWQYuxhS58xg%2F4nwJLcXCkqmq38Vf6EW1B4EgkErac98tcmIgkfpDfFGIj0JPQPiMYhvJQ5Nz4R5oGCTvLUj%2BTzhoMBo5Ass3yvT1vTG%2Bn5B%2FSmJVjzDrdjK%2F89xcYfcwi%2BR3K2zor6NSo88QVT03n7fzQf2gH2B4Y&X-Amz-Signature=f6d742459caea510114c26fd5bec28758a69b6e431fd5931235da2caad41d732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FTVXLLR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAqoVIH8yEEgnZZO3%2F2chE9AdR1QiQCUZ%2BQPG1m%2Bto0sAiBj0mXmzF0YxplhaCIGcoILkeNaaCeNIt4E04q81CMNYir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMMGZ5EJ0tE88bfDUhKtwD2URz2cyDm0Ah3wg0yJEd7gmJ3JVxXH2R%2F%2BOeAZ8V0LxFLPCaAeZr4zOtorOPO0gxxGAkMCF12n%2Fy0M1waEIshpCevM9WLmJ9ZDkxKYWXq0jWTRdAqW%2Bf1TaxZdoEbdgzXPK1Lr%2FDCPdZ98FO%2FFtwVTnoCnZ1%2Bbis2BGe59rPEbg7NcJ8OK%2BCZx5uQ86jnfu8KwTawJ1bcralYbw7V2Roo%2FcnzM8ky8A8UgGowKJIcAZX84Ckg92bVeKliconed%2FzdjQQUa6Vg0PrYbhu7e9kBrI%2FPAaAbdqR5gC5I1SJGsEyVQFpMuCIxwhHejPiwHkoiey0p0Lg6ub7oPcVwcsVOrsLvFNjhydIlN7Qt%2FOQNXl0Gsnmxel7PjM2b0%2BlunGmPM8KPVR%2Bs9h4LgEp05D4tf0r0BfxvrUn0Ga%2B5ep9mx5zckMUT3Cua7ihBzuj1VWWuvwPuIlJMACaaQ4r%2BCgriOfs%2BUfkWdj0MaSY%2ByEcps0Ge4aDt6zWVXqaD%2BLWZZtizWN%2Fzp0XbT2mUD6z0cR%2FktBRTKYTEb2omKQE44Gr%2FHmFPFNkbu0%2FdwQV91xyVeOXv9OzE%2FU3kpVQVlyEKy9qE9AwydD0w4PFPjdOmJBuQMp%2Be96Ne%2FWwIrXGem8wjPTExAY6pgF%2FZjktZ0Fr%2FtsY2XbSyyhla3hQZZohE14lVTIao6byolNcksfBf7j0N%2B9OKwLb5NJShHkPGqtDKfHD4vYoO5D9tYFRcRC38th0GiEOXeenvT4TRr9okEk9gDl2iS5jdPuaxNVYPOxJP5gKbK1KFJ2QjL1gWksVVXlrQ%2FEV2dQ%2BJNyImr56szcDcx3YAhs2hyI0yxTL6pqepfTH9wM9gb%2BJBpXlYWzl&X-Amz-Signature=efe6c187a1d8bebdc93e40a8417a7bb0e1e5f61cebf0a21d4fa13932b47064fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
