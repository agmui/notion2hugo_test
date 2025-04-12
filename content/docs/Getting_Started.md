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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3YLYJWQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICnNbJd%2Fwj%2FfGX%2BD3KskAt3f3tP4RdoJ9AvRA0H89K0CAiAFSwHVyw7StMOumDd4TBajGDbXz32TghDyc0IooPPPbiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzuStQIp5zmQCmh9oKtwDvsIPWcAC2t5KBlgGVOrz%2BvQ7f9L2A%2FfFbIXls%2B3k4OmpssGIoFSxf%2BnD%2Fk4P0BJD%2B6DfitJDb04yhfqa%2FfH7qxY23PjKv6i2yhrJh6YIDvWd3Lk7PnX5slx77W%2B4jPxWglUVZ7M3TXK23SZYpDu2Ph4Omid1AzbSnVnxg3udU1eO7iAnXQU4e4Bva2g0VbqaF1P4z8odyrAZ4f5bw6ooU3DwNcfYFFjMLefPPR4yveYdFJWpwQG9SkPCPPgYlOwsBUkzLE5pf8KK%2BfftPP84Obu0iCX7%2FmczVtqcZXzYUPlRIohzip%2FGiGWFjQcSbpWgYmGMjBnf8kmm99H1nLk8ld1rSTM5MvjqOeiJZwO%2BI2OAObu9DVQyMiZl1zHAPc9yjDtff7A2o6WPTvUlIxlgzenTTuCPLHko1kiAESN1Zo3q%2FkFIghowrxA4DSzycj0sBvksig8hICeQeASY6M0q%2F9AIcZPmwAg%2FRl7K%2FSwfVU3gm6VrreqQIPs9wlgayibBSMsG%2BzWHFO5dQb%2Fg69dYHhrW0GBj0wA9pvdUml0qZI8%2FfhX08wgLxV5jseVsfS0ybwIddEitsVcekhowcSm6ayEi2kDgBRLI7BE5bs3rOzuQHUN65bRgjiinUdcwvo3ovwY6pgHsUe%2BT5QifFSCd4Wt0nfXHN9nnFLrly7IyZNkxXIhvze7xezK32UvQPInQ8bAGZtNH3iWgIVGn8FWsrzJ7ed7Jj5HXJd3GItE6FtzUGfL9dqJwD2VjCJ66FYFhj71tQmgsDsaZGedGlz%2FO9JscaFyPCx0R24tzshEgiGRv1%2FyfI%2BzVmMnCPvi2OAeTIw%2FLh2Uj7Gx1JjiYdrU%2Be2cb74T9h96oG2g3&X-Amz-Signature=fcad3fe1c2d77ee4c1a95c4541a87fb23692e70f85c7e7023ba4a2cae9c54878&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3YLYJWQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICnNbJd%2Fwj%2FfGX%2BD3KskAt3f3tP4RdoJ9AvRA0H89K0CAiAFSwHVyw7StMOumDd4TBajGDbXz32TghDyc0IooPPPbiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzuStQIp5zmQCmh9oKtwDvsIPWcAC2t5KBlgGVOrz%2BvQ7f9L2A%2FfFbIXls%2B3k4OmpssGIoFSxf%2BnD%2Fk4P0BJD%2B6DfitJDb04yhfqa%2FfH7qxY23PjKv6i2yhrJh6YIDvWd3Lk7PnX5slx77W%2B4jPxWglUVZ7M3TXK23SZYpDu2Ph4Omid1AzbSnVnxg3udU1eO7iAnXQU4e4Bva2g0VbqaF1P4z8odyrAZ4f5bw6ooU3DwNcfYFFjMLefPPR4yveYdFJWpwQG9SkPCPPgYlOwsBUkzLE5pf8KK%2BfftPP84Obu0iCX7%2FmczVtqcZXzYUPlRIohzip%2FGiGWFjQcSbpWgYmGMjBnf8kmm99H1nLk8ld1rSTM5MvjqOeiJZwO%2BI2OAObu9DVQyMiZl1zHAPc9yjDtff7A2o6WPTvUlIxlgzenTTuCPLHko1kiAESN1Zo3q%2FkFIghowrxA4DSzycj0sBvksig8hICeQeASY6M0q%2F9AIcZPmwAg%2FRl7K%2FSwfVU3gm6VrreqQIPs9wlgayibBSMsG%2BzWHFO5dQb%2Fg69dYHhrW0GBj0wA9pvdUml0qZI8%2FfhX08wgLxV5jseVsfS0ybwIddEitsVcekhowcSm6ayEi2kDgBRLI7BE5bs3rOzuQHUN65bRgjiinUdcwvo3ovwY6pgHsUe%2BT5QifFSCd4Wt0nfXHN9nnFLrly7IyZNkxXIhvze7xezK32UvQPInQ8bAGZtNH3iWgIVGn8FWsrzJ7ed7Jj5HXJd3GItE6FtzUGfL9dqJwD2VjCJ66FYFhj71tQmgsDsaZGedGlz%2FO9JscaFyPCx0R24tzshEgiGRv1%2FyfI%2BzVmMnCPvi2OAeTIw%2FLh2Uj7Gx1JjiYdrU%2Be2cb74T9h96oG2g3&X-Amz-Signature=a32cfaf36040ffd701a17f25f6b02d6b58230b391c13a456bde4550103b757d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYVMGY4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAgK9%2BymKMBKlifZlXIesYvXKPlNmkia5zMTkgVYvoyzAiBXXMj%2B%2FNCrwLgvu3Oe7KbieYVkDvhfy0wCmIjVrC%2FIzSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrQPWuD2miYh19fg2KtwDRWCHxmTQcXK26%2BIYNvthSnMuCFsnSKWQCKL%2Fsgl2mIlALvPYoCQBJVmPmAJ%2FNlYKmqQmpZ53izxFJXK5mXLGzxihvaH7xE5T0ErMhKD6Nzp2ifUzSGFU9FrrIVKcCKU3WwYZ2zjq%2ByQAzy5OMv7KaZt4Vbb0cCysT7d8ZtJZ4NYOEyIE%2B2MFjYkjqmaltwnbq1E5TjeA8P3YlPfH5dL8QjwjfueD7L8oANaPHQrHJN40c2nSSkrks2Zpz7%2BxCKwn3hK%2BINIVAy%2BGo%2Fd9w18oPaIkgD%2BNhVDtCXDE%2B6f6dAUgGY3bCvnFjyN%2B6%2Fobz04%2FxGrbGUll9xlyn6fTt3%2BRzk8avD3Ssb4C4nE5XdqQycrKbu3xap7zWwy9UOzSSR5lcXEdZqYhP%2FZ6Fg90Bv%2BpqEXj7TBfgHrKo02zy3PzPZ0hwM1NC5bPssiWtol1kJHaHNnyKgX6XuJSYRudEaUEo%2FFQfQVybUtfJ3pJpSHaRIUvwNc6Yrw1eD7whF%2FyCP817i%2B3Kua3EYtabfpB2GW7gGfPOHVWqQVHH68rvkptMShP1f6R%2FbWLjR7cYVtKdTIWOQA3bjT%2Fobh1Q3QVtLh82dEmq%2BTOaUP7FgVFufAN17KRcz30NHPvzE9%2BMVYwwY3ovwY6pgHoqBY5cdrvq5u0y3NOe8Cuiol40pNmB1gYNKlH%2FbqFcPb1ADpVsqyRW5sVTxOS6TpC%2FvtwPPkzx2Vzz7bHx5Mr9qLoLc0lU3M8eWDjchmkKhAJ1MPQ9FK3Z3VodtuhY1ElYyJ7QKc2YuSB52I%2FCIVVPGnsQzEfguvvw4eD6yEDBuWJdFj5CCDCPQwZBdd9HmGyh6b16Tod1QeWbjLyEc5msMlXcy%2FY&X-Amz-Signature=aff17e86a58c2f3adfb1bd8deaa843ca62b55ce6eb37e55f3b244e2d70ad1ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GLVQZAQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCkoPSpjh0lSgyrC%2FphOFlnSZnt%2FpSeij%2BsQTbwXUM2bAIgcpl%2FgULON8irxbumZhFuBR6P0UhFtqHqIMvIorSK8MYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJ%2BcjSXIxfgc8Cl5yrcAx5%2B3x3nm444TNP%2FepeVMrvHXRQ7h7wlDjd6gbzv3rYknfFiR%2BH2ayL7QZ3RbORa7b1Lb60ePk0QazQtPgKdXYmd93irwIK7%2BNHzW3M6i3fqeXf7tPQQevQGc45eZp5DHp0Zt7XduYfaZ65ltkJHvwj1qVz47K7weYRxCwFmgL0QV0FApu3F0uCklsaHCKCaR0lxSSR%2BHuWbRtQdymYJ34Qqoz8o7dZRgnJAMQkcBZVdJ81H88%2BT4EE4BxVnnY3mHSYjVOkiHRtIXwNTpyNP%2FLJADVAZX1goFrXYGX7waR3J4Dpe8Q4mKBmmbhIjmUKlCG4HVQ1hSHm%2Fjg9X%2B1h3nEZJPmVgWqq6gS77NkbPmzQK%2BjD2SB942FNsBSHbUyxPNYRvYya50VZwSFqh7HxWYkn5AWi5X2fWg7%2Bsr3XZXxJ15aUgq%2F%2BqPffwKGhOcxs98D%2Bm0abUpTdJWSn%2FvKqzjMLgdMJoR1NJfjQftFkrKMYWbuK%2FQTMpk%2Bx9ZdoqHcSbmKmGW1Ez88bgQJMQdluIknawDiFMYl1igHNcv%2BTzZXoYnByKklcxbDskgRClQP8kzHkMDZ1JLeYkxxsyi75toDhE6cfqSruen6CilSXI%2FGapoLArnm3erahfdQmQMImN6L8GOqUBks6yQO0DrSCs6zfIcFdiuFrzyfb8Kzf8%2BGMt1WnqG1xyNHNaL02wTHYLKNPWNRD%2BowTGdrA1ehxSq20R4gzvWi8tf0vPhYYhxBPdpHumqO9wat%2F34TnKi%2BxaEcKqjsSrrFVFG3G65vsyEkVzTjJhqOrFayEimBRa9h%2B5LYzPjgc10FxmF5Jh4CtER3sQJpBxcrT76UzwOdJ4Dv7ctvE61owy%2B%2FQI&X-Amz-Signature=e82da122991dd61dacb9abd07720170c460f60cce4f9597b279f0be58f4f145b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3YLYJWQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICnNbJd%2Fwj%2FfGX%2BD3KskAt3f3tP4RdoJ9AvRA0H89K0CAiAFSwHVyw7StMOumDd4TBajGDbXz32TghDyc0IooPPPbiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzuStQIp5zmQCmh9oKtwDvsIPWcAC2t5KBlgGVOrz%2BvQ7f9L2A%2FfFbIXls%2B3k4OmpssGIoFSxf%2BnD%2Fk4P0BJD%2B6DfitJDb04yhfqa%2FfH7qxY23PjKv6i2yhrJh6YIDvWd3Lk7PnX5slx77W%2B4jPxWglUVZ7M3TXK23SZYpDu2Ph4Omid1AzbSnVnxg3udU1eO7iAnXQU4e4Bva2g0VbqaF1P4z8odyrAZ4f5bw6ooU3DwNcfYFFjMLefPPR4yveYdFJWpwQG9SkPCPPgYlOwsBUkzLE5pf8KK%2BfftPP84Obu0iCX7%2FmczVtqcZXzYUPlRIohzip%2FGiGWFjQcSbpWgYmGMjBnf8kmm99H1nLk8ld1rSTM5MvjqOeiJZwO%2BI2OAObu9DVQyMiZl1zHAPc9yjDtff7A2o6WPTvUlIxlgzenTTuCPLHko1kiAESN1Zo3q%2FkFIghowrxA4DSzycj0sBvksig8hICeQeASY6M0q%2F9AIcZPmwAg%2FRl7K%2FSwfVU3gm6VrreqQIPs9wlgayibBSMsG%2BzWHFO5dQb%2Fg69dYHhrW0GBj0wA9pvdUml0qZI8%2FfhX08wgLxV5jseVsfS0ybwIddEitsVcekhowcSm6ayEi2kDgBRLI7BE5bs3rOzuQHUN65bRgjiinUdcwvo3ovwY6pgHsUe%2BT5QifFSCd4Wt0nfXHN9nnFLrly7IyZNkxXIhvze7xezK32UvQPInQ8bAGZtNH3iWgIVGn8FWsrzJ7ed7Jj5HXJd3GItE6FtzUGfL9dqJwD2VjCJ66FYFhj71tQmgsDsaZGedGlz%2FO9JscaFyPCx0R24tzshEgiGRv1%2FyfI%2BzVmMnCPvi2OAeTIw%2FLh2Uj7Gx1JjiYdrU%2Be2cb74T9h96oG2g3&X-Amz-Signature=9825c9b3d92965b0aa27bfef5f69b2c258fbee8d9f979a5caa00512f91b43777&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
