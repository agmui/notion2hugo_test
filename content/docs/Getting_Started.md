---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FMTOWZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2BhY37yDNqVkbjntms5Xk2mTacYKRkE6XehHISrTLSAIhAK4Sv3FEu6XS6Js5wyowoQOZDvrVlien6F43AyeEOdVoKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn9IRp6H%2BxmUYHxBUq3AOfwE1WQO6E2Kg3FsnFko75fWGnZcb2knBByUx%2F50BsKpskIoOSLxkBedwFlL5x5KEEA%2Fe7cs3n7xJuPwdZivUborU5eDetkbYhiVBL1%2FKOjc2ioBVHEzHA%2B7xTzPQfrO2LHvP4IA7AwdeUDguqeNiso1ossCFGux%2BSi3C1I2p4bF7fAkXHV%2Fr3SRFQOFchNOOGBDBz4JQ2F0tIRwwboJWsFQEmY95B0dBFvmSVp4%2BWKqWRTKL3leqLch42mtgxQtYOqBPRYmhutjU51eyClOXP4NRN%2BqhbaWUxO7wi6l9azhIRUaDw1XdGc%2FB2mVd41v8QE%2BaVPePaBnSYk3ZlY3lnsV6ewyXVm1VYv%2Bzv0xSEXs2cRBhAf3I7z2NiOQV2yjIjxw5ua0nkP5ARXPEmzAJWFhfXNMtKxqJE463tg%2BOirMnuzeZ0aLhxyvWStTfp0I9bUZ4cPvc9eqQJYyEtXdURiqS0n6bmOTN%2F8Wzdv89aO7qBPN%2B1eYncyL5Nd8iq%2FQvljaYlJfmzvsolESBk2wgTrFETj9qU3jWI238Jj5ynv%2FKXJrXrPfDczLfZucaHHLlDBYx0L04YpKsnN7ltb3NzZiOuU8biXMq1QowsXh3VYcNd68NjTVVbXEjSKjCJ4enIBjqkARvBjdnP732NAuUbEFc2aNpJDl2sqi0lWURgZQyy%2B6z37eAo1DEsRrPM8D7IF18G1APb%2BI%2Fi1mwqLgwd2PEBBLplNUs8n%2BacpKb8P3GBsaoVbTceNbfshXGbVI%2F8WIT%2FXbriauy4J%2BIEPmgXbmL3XZtVFvf56NiTyBNKgnOK4Ei0z9hdolwlKMWENn%2BZJJFajhxM8zM%2BKht85T23VFqIh052YQtg&X-Amz-Signature=022dc90060b900b393d87ca4a47ce459391e521fb671cc9cbebd4498a1cc142f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FMTOWZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2BhY37yDNqVkbjntms5Xk2mTacYKRkE6XehHISrTLSAIhAK4Sv3FEu6XS6Js5wyowoQOZDvrVlien6F43AyeEOdVoKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn9IRp6H%2BxmUYHxBUq3AOfwE1WQO6E2Kg3FsnFko75fWGnZcb2knBByUx%2F50BsKpskIoOSLxkBedwFlL5x5KEEA%2Fe7cs3n7xJuPwdZivUborU5eDetkbYhiVBL1%2FKOjc2ioBVHEzHA%2B7xTzPQfrO2LHvP4IA7AwdeUDguqeNiso1ossCFGux%2BSi3C1I2p4bF7fAkXHV%2Fr3SRFQOFchNOOGBDBz4JQ2F0tIRwwboJWsFQEmY95B0dBFvmSVp4%2BWKqWRTKL3leqLch42mtgxQtYOqBPRYmhutjU51eyClOXP4NRN%2BqhbaWUxO7wi6l9azhIRUaDw1XdGc%2FB2mVd41v8QE%2BaVPePaBnSYk3ZlY3lnsV6ewyXVm1VYv%2Bzv0xSEXs2cRBhAf3I7z2NiOQV2yjIjxw5ua0nkP5ARXPEmzAJWFhfXNMtKxqJE463tg%2BOirMnuzeZ0aLhxyvWStTfp0I9bUZ4cPvc9eqQJYyEtXdURiqS0n6bmOTN%2F8Wzdv89aO7qBPN%2B1eYncyL5Nd8iq%2FQvljaYlJfmzvsolESBk2wgTrFETj9qU3jWI238Jj5ynv%2FKXJrXrPfDczLfZucaHHLlDBYx0L04YpKsnN7ltb3NzZiOuU8biXMq1QowsXh3VYcNd68NjTVVbXEjSKjCJ4enIBjqkARvBjdnP732NAuUbEFc2aNpJDl2sqi0lWURgZQyy%2B6z37eAo1DEsRrPM8D7IF18G1APb%2BI%2Fi1mwqLgwd2PEBBLplNUs8n%2BacpKb8P3GBsaoVbTceNbfshXGbVI%2F8WIT%2FXbriauy4J%2BIEPmgXbmL3XZtVFvf56NiTyBNKgnOK4Ei0z9hdolwlKMWENn%2BZJJFajhxM8zM%2BKht85T23VFqIh052YQtg&X-Amz-Signature=3d73078410266810b0bb870c2a78d76126b219156edbf4d402d48dcfe4e74657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FMTOWZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2BhY37yDNqVkbjntms5Xk2mTacYKRkE6XehHISrTLSAIhAK4Sv3FEu6XS6Js5wyowoQOZDvrVlien6F43AyeEOdVoKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn9IRp6H%2BxmUYHxBUq3AOfwE1WQO6E2Kg3FsnFko75fWGnZcb2knBByUx%2F50BsKpskIoOSLxkBedwFlL5x5KEEA%2Fe7cs3n7xJuPwdZivUborU5eDetkbYhiVBL1%2FKOjc2ioBVHEzHA%2B7xTzPQfrO2LHvP4IA7AwdeUDguqeNiso1ossCFGux%2BSi3C1I2p4bF7fAkXHV%2Fr3SRFQOFchNOOGBDBz4JQ2F0tIRwwboJWsFQEmY95B0dBFvmSVp4%2BWKqWRTKL3leqLch42mtgxQtYOqBPRYmhutjU51eyClOXP4NRN%2BqhbaWUxO7wi6l9azhIRUaDw1XdGc%2FB2mVd41v8QE%2BaVPePaBnSYk3ZlY3lnsV6ewyXVm1VYv%2Bzv0xSEXs2cRBhAf3I7z2NiOQV2yjIjxw5ua0nkP5ARXPEmzAJWFhfXNMtKxqJE463tg%2BOirMnuzeZ0aLhxyvWStTfp0I9bUZ4cPvc9eqQJYyEtXdURiqS0n6bmOTN%2F8Wzdv89aO7qBPN%2B1eYncyL5Nd8iq%2FQvljaYlJfmzvsolESBk2wgTrFETj9qU3jWI238Jj5ynv%2FKXJrXrPfDczLfZucaHHLlDBYx0L04YpKsnN7ltb3NzZiOuU8biXMq1QowsXh3VYcNd68NjTVVbXEjSKjCJ4enIBjqkARvBjdnP732NAuUbEFc2aNpJDl2sqi0lWURgZQyy%2B6z37eAo1DEsRrPM8D7IF18G1APb%2BI%2Fi1mwqLgwd2PEBBLplNUs8n%2BacpKb8P3GBsaoVbTceNbfshXGbVI%2F8WIT%2FXbriauy4J%2BIEPmgXbmL3XZtVFvf56NiTyBNKgnOK4Ei0z9hdolwlKMWENn%2BZJJFajhxM8zM%2BKht85T23VFqIh052YQtg&X-Amz-Signature=528533438b4ab332cb61aa839b32e2d6f4537f7ad8d2961064ddc74393fb9679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLYVHSY%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUPHV7Jb3OGHdKI5aSIIP4M01TZ%2FYvlEV1KSbxpSj0LAiEA%2FFfDzAKu7L1%2FVNX9lqRW4Eq6sKYZoct2PlGqE%2B62E5AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIH5pnCyEctyt07JASrcA%2FGQd8Fd%2FC1ITdgiX6d6IpEw12%2BRbWuQps5n2lSOe24HAokMmGO3Krq0W9Q3GV1S50N4Z4ZelO6hsf9LFmCsXz5UvA8koyVt4ThR44H2YL45R9h18dZbF9o0OVmHKnTdEq76QpEefEFg9RMO2g%2Foz6gEpT5x3cYENZOGHF%2ByxWt3yliNaLapcs9KmnKoSvDys0rxxOsZGU03h9NCH6WRUVtoDJY8NLfetrQbx%2FCb2FvYzkgcXypYxObeotKccuQwY6Ct6UiBEfU90Beg1LnRV74aQqXhVomN6e%2FbVQm%2BjP9rJfo%2FjVtiympC2B5BghQMTb8h1nFLeBiYyXnVfFoA48SyuiV0p7KT85GdKI37VvwfiqGoNj7FXMeWh6tIRNxYb5u3iaCNUEsV0kKhkYNfq1VcWFcJB2HGP1JWOvbLkQZtKtckiyI5g%2Bir%2F%2BOf2bPn5yHg1Dgj6cD8CBA2QZ6t9VZKCNUXyxKSm9htpBgNFQhb7i%2B1IJbsWEF%2FVN7YojuBE8PfntmCW0DetpYk3YBKr14Co5dJ17C6EFnDSgFmIaUZrTQHCiupNISRLZx2b%2BzBgi3UjUjL1HNSL8bshVLEFXYkVSYx6LJkQGd0lkv7oKt5%2BvNTwWb%2FFS8%2FD7h6MNTg6cgGOqUBhurLmJNtHHZpIs3CQRaZACoKGVs0OKFgC7ji3iYm2u6piAQkwakpRfxhKhlU0JJZmuu40Tp%2BmazvhCxQChIRYZ7qjyu6Fz6zQZQFxWH4fCDgXmT5l7b3%2FBrOTH%2BirvNucfeIRm%2B0J54LuZR5mTAXjgA1lZwzg3KWlqzEnc0P6XdQvV%2FDIXS5vTHSmkJ6squvQBYWCWzkH38F3ryGI2tNEymBxLAT&X-Amz-Signature=6120f680814100788fd2d858cded486fac49bef4d88607b2adac4577b4f2c128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLBA74I%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPduMhPR4chXpE4CIGMNPIibvW71%2Bx95pPHb0YvL4QiAIgCrMkeyw3T28hZxA5hijYY4I%2FcQh4CQ%2FOnn%2B92n%2B8J4sqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJFatd9phmfVDB7PircA8R%2BJ5bDKADh1%2BfKHjVhxMSaArqiKOEj8%2FozlNbINEdHN0hyjVlyQCijvXHYM1IpXIbfXwU1hX%2FnkxkZ%2FwH8w17NbDpma3g0zrwyrYFkMHRCtC4kC99sLGyvMlGAu%2B7ODAvf7QUc8IYzLUHHs71YUow5w2gldt3vX%2FymbMQdqfCflX7IEvwa5Yzq2DnoDb8KqvLM8m1wsIjz8stzF5Bc9oMkb2Rm2jIrnyES8CjJ0HXvfug0hxu22l3VaFE6f4DnTXJlpikI7h68EkHQyFJZqJTiGIhwus6azyeXvpWm%2Fx%2BF3bFdtKEhNnSNRh85%2B7fEdblubti%2BgahySHlg%2BXOMV38Z%2F2%2FWudFiY9Mxt53UNUrh%2BMP%2FINfOCCmIxk3X0GqTXWMjtfqA7LydjIyW9mIJn38gbj%2BXw3TT4JH5QWKpqq8%2BEfi4TMwTgkrAsbvbc6gHsyVQ070o0zM4f9Ocg5M%2FL59VbvM5g4gOzGRl7MQ%2FjUhVIQTlu%2FIp9u7NIeIqFjKwamcrLEToMQg2ybB9I9u1UuCnhiFpHh5KbHBz5T6d6Uk1WAkl%2B7q8jcuAXvQWcAnN8VFE9u4Bs41zrf5KnWxQrDkF%2FQv8gqN8NM%2FwH%2FwAqr4tEEgc2heRLh%2BYKaXOMIjh6cgGOqUBo5CsSgfk%2BdkS9FsrfxvLpKQrzkI4hyz8PBTxnjL5VPGKq40aia0QDzs1kXwOvsLp9WMaGDkE5oe9hk1vSz8%2FrTGNF8bTb%2BK9vbBkruO78itd7F0rzJkkB2n%2FeNIKtJEJLhW1kiwFye8aWYO%2FlmSPM0YvUmtJVyABxh3rbtlYtlVGcYEXptPH42t9aM8%2FNUUnDUxeOtppYMK2XXpkenmYZFzx1DJO&X-Amz-Signature=621c0820871852af2a79f51dc77bfb518d053d8419febe5bdf2455a7a785282f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FMTOWZ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz%2BhY37yDNqVkbjntms5Xk2mTacYKRkE6XehHISrTLSAIhAK4Sv3FEu6XS6Js5wyowoQOZDvrVlien6F43AyeEOdVoKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn9IRp6H%2BxmUYHxBUq3AOfwE1WQO6E2Kg3FsnFko75fWGnZcb2knBByUx%2F50BsKpskIoOSLxkBedwFlL5x5KEEA%2Fe7cs3n7xJuPwdZivUborU5eDetkbYhiVBL1%2FKOjc2ioBVHEzHA%2B7xTzPQfrO2LHvP4IA7AwdeUDguqeNiso1ossCFGux%2BSi3C1I2p4bF7fAkXHV%2Fr3SRFQOFchNOOGBDBz4JQ2F0tIRwwboJWsFQEmY95B0dBFvmSVp4%2BWKqWRTKL3leqLch42mtgxQtYOqBPRYmhutjU51eyClOXP4NRN%2BqhbaWUxO7wi6l9azhIRUaDw1XdGc%2FB2mVd41v8QE%2BaVPePaBnSYk3ZlY3lnsV6ewyXVm1VYv%2Bzv0xSEXs2cRBhAf3I7z2NiOQV2yjIjxw5ua0nkP5ARXPEmzAJWFhfXNMtKxqJE463tg%2BOirMnuzeZ0aLhxyvWStTfp0I9bUZ4cPvc9eqQJYyEtXdURiqS0n6bmOTN%2F8Wzdv89aO7qBPN%2B1eYncyL5Nd8iq%2FQvljaYlJfmzvsolESBk2wgTrFETj9qU3jWI238Jj5ynv%2FKXJrXrPfDczLfZucaHHLlDBYx0L04YpKsnN7ltb3NzZiOuU8biXMq1QowsXh3VYcNd68NjTVVbXEjSKjCJ4enIBjqkARvBjdnP732NAuUbEFc2aNpJDl2sqi0lWURgZQyy%2B6z37eAo1DEsRrPM8D7IF18G1APb%2BI%2Fi1mwqLgwd2PEBBLplNUs8n%2BacpKb8P3GBsaoVbTceNbfshXGbVI%2F8WIT%2FXbriauy4J%2BIEPmgXbmL3XZtVFvf56NiTyBNKgnOK4Ei0z9hdolwlKMWENn%2BZJJFajhxM8zM%2BKht85T23VFqIh052YQtg&X-Amz-Signature=beecf1d24a539ed082e8257523c838494f6fc103e9f225a2aa4c0a608e65643f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
