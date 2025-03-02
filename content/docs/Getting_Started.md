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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSQGFM26%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDkTfDPYNxasJDBnUcUfqAafGXiChQv1avTZPhtVWuNogIgRZoWgf0yHJejWNiIWbpS9%2BLk9vb5zOblOYijHQjYpS4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdrX0u36qVA1agUUCrcAzLX67pbzxl7K11YxQ4SIhme17omnthUmYUKiUq9TA0L2Fr%2FniuOhi9%2FGqIXy0ADkSvT9%2BxBkj0fs0bkFQp%2BsbEJuvLY9kYUG9TeaftkRmCuCi8p6rAkR9aCBWBaE66MrhVwXoYHiZtdvqHyX40q3S9Ucc5AfvCY91mIwCeMmOxNLiD6PRlDZJCahIiI6J%2BdoFbPHHEImM8DN%2BHHuQvbRbLGcFs%2FsbbKZ2fztQLwMrP5xei1oxy1ce7roke5U0%2FgtV3BEi7hAxxViGf%2FGRPwW5hdmlpp%2BaiNnOHPlicWazAX1JAC86iVp8jDfO2YmVUkVODw97XPJeOw2Wr68Hj2mgcejtOWBW8eG%2BtbeVw8UOZxBQKzmnlH9djayxLPmUKBADoaQ7ulCCTesHSuxgeaQ6o8M3tkm3aUOfad2mQZukq6QH57cDAvdzwQegN3BoXmGS0dYrNtlAznb5ykFl0EDZsDYJRrBGo2OU6CLiTyAsYuXj3HmcaqLe90gcHifULNEZpzaa40BQr7FY%2Bvv34B%2Fd1kgLgoRnYk7j9IcKrktr73iRVuUs8M0gnQkS0VAMkgBR%2Fb%2BPkwc2kq2CCyHmNqBlHcdLsDGzR6Cfdx1yzkA9OVg1qoUp2jIVW6SGLhMJnYj74GOqUB6bNuQmszYaeUhYcdd%2BWKL3M57U7SXJpN%2BcSM3V9ZBQwBtIvsFz9REBwnUSfZg6vYwvNv61TmH%2FBe%2FDPFLqao6Ul0hJze8%2FWvPWrr5Feru1MjYJHwhVgIC4Ja%2FU1zJBokU5ATW1JaAdYV2A6JqNGFXHKtF1X5KP2DdhLxdw6Qj9pJXmBVwIhm1Fmammd1KRrOhK%2F%2FS86YTdyCGEq3hAaJot9aYALj&X-Amz-Signature=26849f8d3dcedd909935fe10bb3d6144ec0f577d0f6826d181b3f66ad7f5bc9d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSQGFM26%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDkTfDPYNxasJDBnUcUfqAafGXiChQv1avTZPhtVWuNogIgRZoWgf0yHJejWNiIWbpS9%2BLk9vb5zOblOYijHQjYpS4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdrX0u36qVA1agUUCrcAzLX67pbzxl7K11YxQ4SIhme17omnthUmYUKiUq9TA0L2Fr%2FniuOhi9%2FGqIXy0ADkSvT9%2BxBkj0fs0bkFQp%2BsbEJuvLY9kYUG9TeaftkRmCuCi8p6rAkR9aCBWBaE66MrhVwXoYHiZtdvqHyX40q3S9Ucc5AfvCY91mIwCeMmOxNLiD6PRlDZJCahIiI6J%2BdoFbPHHEImM8DN%2BHHuQvbRbLGcFs%2FsbbKZ2fztQLwMrP5xei1oxy1ce7roke5U0%2FgtV3BEi7hAxxViGf%2FGRPwW5hdmlpp%2BaiNnOHPlicWazAX1JAC86iVp8jDfO2YmVUkVODw97XPJeOw2Wr68Hj2mgcejtOWBW8eG%2BtbeVw8UOZxBQKzmnlH9djayxLPmUKBADoaQ7ulCCTesHSuxgeaQ6o8M3tkm3aUOfad2mQZukq6QH57cDAvdzwQegN3BoXmGS0dYrNtlAznb5ykFl0EDZsDYJRrBGo2OU6CLiTyAsYuXj3HmcaqLe90gcHifULNEZpzaa40BQr7FY%2Bvv34B%2Fd1kgLgoRnYk7j9IcKrktr73iRVuUs8M0gnQkS0VAMkgBR%2Fb%2BPkwc2kq2CCyHmNqBlHcdLsDGzR6Cfdx1yzkA9OVg1qoUp2jIVW6SGLhMJnYj74GOqUB6bNuQmszYaeUhYcdd%2BWKL3M57U7SXJpN%2BcSM3V9ZBQwBtIvsFz9REBwnUSfZg6vYwvNv61TmH%2FBe%2FDPFLqao6Ul0hJze8%2FWvPWrr5Feru1MjYJHwhVgIC4Ja%2FU1zJBokU5ATW1JaAdYV2A6JqNGFXHKtF1X5KP2DdhLxdw6Qj9pJXmBVwIhm1Fmammd1KRrOhK%2F%2FS86YTdyCGEq3hAaJot9aYALj&X-Amz-Signature=e8367f258d252b7435efaed3d0423ecb19704321096f52157cbce18743040552&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O4WEQ7C%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAtB7NH70Ol%2Fm7ZFO1SBvc%2FHZnfLmQ5Ne8HztgWZcUeWAiEAkaYm43cPlEsrWFmF7mYARvpgFXucnDwE1qg4urfbjcIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEKKglB7Aoc%2FGugtCrcAxszZiPvO5pdUsV2X%2FHgW3zGNPU4q4X%2BWmdG9AgU42WlBwJpPPLeKihARZJXcK9KZv3ptExqQlQQxQGfn5ACNxjfFkntMG4Soi5mLG9iTRZqqDP410qH7Y690ttRB74RkrXRz32x0PFrwFE35CP2Fg5RHWnMUUefJkn6tx3vSsHN0dFg8IhdPbgwVdVAUpjaCpot1Qq9i6aLR7hgWe%2BPDs1r1YgO364M4jApH43yFue0NHdGS2KXIneDczT5zeBaILOUV5z7rTG1UWDSVTE32SrkXM61a%2BgwtaZfXKiArldbDFhxd6r9%2FbkUSzTzNyZbvH62nO2B1TDZSWG0qySiLBz6TQv9eIUYri2w%2B%2FzpQg7BEI0JqCXawt%2F2wcq%2FcyILUtT77tPq1Fs71b%2F9cYT9xT5izphZSQ31RFdqHZUNTPo%2FrdugaCZUY7mwW19IBiofTe93YTDlOkV%2BDUR6Ik8BDT6xKJw4naWiAnOWuSnQZo8qJI8Ui9aixqR1o4KUTN3OH%2BktaywK%2BH9NzvpDEZ7lvneAf0Vv3VYxQl3RTZisT59EHIYwTqISLt9oJEFSZ2L4kU0Cw9bEWqWxDeeR9G3200gxt2jGz%2FLKpJzIp0otdjIKLONglih0%2Fpjt%2FUIRMNXXj74GOqUBHZwZ7H%2F2hdJgADe1f1ecosYBL3YqyjG3tOBD95TRSWS%2BiqXma5FDiteUrAkB5iRQN%2BzQxZ4fMoQ8cNBc6sduTFDnHnikleo5jg2f0j5tgp6VsuhyiwUn9ta7oGtzEitVCRT0kzrsY4TN%2BpKxPYt249i%2BBNwWIZEwKw0giDpVqQ%2FwANWL8xyxTc8pUr1xcJFECYAcdESE91R8T2xrwTHBcjliDM7w&X-Amz-Signature=2f7a29c2d5f339cac1fe3d49f0bd50a93baf56d58620a3904922b2d6daee737c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAH45GAS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIHOLfAerUbnr3ZfIrdLfwWA4VjjMI9%2BabtOiXZks2Ok0AiBx85SdrPohY%2BqrWGtTj3QnQP68TcYkeAEYU4Xn4NV4ESqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe9osPrMHpSIx4pcQKtwD4mz1gL1XySjQ2HAxmH6j%2Foly6kJS9cUXzMMEcy7TIZA5V2BOT6fTls8L%2BzwWYfi6q66U0HM5LJW3RsJWwdO2c%2FAC9Mv7olgm2wwrt0NRnfxi3JcBkb2TbLWNN1r6laBEI7Vg4xn55BW%2B9NvOKqbUm0Cv%2FSSowWx%2BRT0v6TGCsjMDDGPML0kF7P%2FVKpSUtkJvaLDI4t1INw7cJl96iOiCL62KiUsK6w2jkkbnU0XHRu6FGP4rUpYLd8SUgCwi%2B92mjjP9aj7dEQZwYuou2RKwzmvJMWY6GVP3GJQJrvWofMRN3QtXm7TKcYSfTWv9yPMinpMs5XVC63O7swfF995JdDzxRP%2B6aUkNUUhJnH8CTs%2BjK%2FOpO3dR3v73%2BlkrqG7k00XE8qoL8aBtRUMWea7tkTZPARTgpJRE%2F0E9bM9VE9qCce64mmEUCjbpgEOuDyVcpwXGJM89cnMtDKdBzZsTLH%2BIoTNBQQxyk9K4zvGZy%2FkxvHf5IhPuO5FrkGUIPmypgLyt8vrqEDihZ4LvoDPkteyDA9xcpLypoYz437lwYim1HT6Vr3sOQ666pi97UVNGyTHUp7keeVi3%2FFflcosXkh7VL4107Wb2QodqfMHixqW%2BVbsEAU6%2Bt8Vq09cw8tePvgY6pgHahPgialyPwYtKGdlTV9J2EKmJZdS5Fk6pd%2Fg6IWGMg03A7FurEn0azJoFluc40kKGML4GuH0oy6O1Fbt%2BTxXLA7tA2TmasiTa0ZvScvsK0pLcuQdas2hbkbSAYEcfB%2F6FI3JAXNa%2FlTLth3Rg05F1gVoJZHb7rwVhDZSimvaVA6e1053eZv4j%2FEi9KXjQQk7rkzyYnNNOf7%2BkbCcPVqLTvd4F2dKU&X-Amz-Signature=67cd044693fe5ddeb11bc6804d02c7c9029cd0ea721c01876a4c7a6b0a981f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSQGFM26%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDkTfDPYNxasJDBnUcUfqAafGXiChQv1avTZPhtVWuNogIgRZoWgf0yHJejWNiIWbpS9%2BLk9vb5zOblOYijHQjYpS4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdrX0u36qVA1agUUCrcAzLX67pbzxl7K11YxQ4SIhme17omnthUmYUKiUq9TA0L2Fr%2FniuOhi9%2FGqIXy0ADkSvT9%2BxBkj0fs0bkFQp%2BsbEJuvLY9kYUG9TeaftkRmCuCi8p6rAkR9aCBWBaE66MrhVwXoYHiZtdvqHyX40q3S9Ucc5AfvCY91mIwCeMmOxNLiD6PRlDZJCahIiI6J%2BdoFbPHHEImM8DN%2BHHuQvbRbLGcFs%2FsbbKZ2fztQLwMrP5xei1oxy1ce7roke5U0%2FgtV3BEi7hAxxViGf%2FGRPwW5hdmlpp%2BaiNnOHPlicWazAX1JAC86iVp8jDfO2YmVUkVODw97XPJeOw2Wr68Hj2mgcejtOWBW8eG%2BtbeVw8UOZxBQKzmnlH9djayxLPmUKBADoaQ7ulCCTesHSuxgeaQ6o8M3tkm3aUOfad2mQZukq6QH57cDAvdzwQegN3BoXmGS0dYrNtlAznb5ykFl0EDZsDYJRrBGo2OU6CLiTyAsYuXj3HmcaqLe90gcHifULNEZpzaa40BQr7FY%2Bvv34B%2Fd1kgLgoRnYk7j9IcKrktr73iRVuUs8M0gnQkS0VAMkgBR%2Fb%2BPkwc2kq2CCyHmNqBlHcdLsDGzR6Cfdx1yzkA9OVg1qoUp2jIVW6SGLhMJnYj74GOqUB6bNuQmszYaeUhYcdd%2BWKL3M57U7SXJpN%2BcSM3V9ZBQwBtIvsFz9REBwnUSfZg6vYwvNv61TmH%2FBe%2FDPFLqao6Ul0hJze8%2FWvPWrr5Feru1MjYJHwhVgIC4Ja%2FU1zJBokU5ATW1JaAdYV2A6JqNGFXHKtF1X5KP2DdhLxdw6Qj9pJXmBVwIhm1Fmammd1KRrOhK%2F%2FS86YTdyCGEq3hAaJot9aYALj&X-Amz-Signature=c3188dd255e6702bcde6ee49db707f886c68cc5fedf4ccd1698b89fd77eb73d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
