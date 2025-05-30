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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHF7FWOK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FEIf%2FsYEH%2F8I6PgOWqxlUNxtPLcye3vw%2F47YomOo66AIgEfjYoNrnLCEh8YidwCF9IwfKNAKPUE6G4a1%2BTSKjt10qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYJBOq%2FA4Kt6uyRLSrcA1rfyalO%2BvyQtqv4KGSWzFmZxfReEmwzzT58GkNsskFb3YZJ0VjGtyzCDNqfUY5%2BxKpcWjr9%2FOl%2BMjhxflSTODOVbewkAJ4OO7z%2BOAxeHSCm87o%2B%2BL8i161u77gcngyNS22KsZZ1v4AlDMEQfFmrrx475xq9NYaNqgFTJczjewvZhzTpRFED8SajaPyu61in8QfYYArlL9c9TIZvcqBxHibIMM9awU7YH8dLrlVmAd25LG14bt18Ji5SL7K%2BljpWux8fyoExVCdy3NmbnIZbxe6bldKToPdp7Y96ZLVEFSYlWnk0ySjazjBpiCjIcjycWP4uYerPN62mfljxOICZLIykL5lKBDOiHlROYq5kvzS%2FEJhNs2as74GQ5Fe5ooZpoDvu9InE2QIsJiwyeoGFRl2Lll2W9o4%2F%2BFm8dxgIngXGqfb4iTo0o77mEAHVI5uJXz9av03xirorU14p2sFqdtCf4Ko%2BZcVkpzNbu905LCVA8Sl3ijOp1t0%2FbymTK6FTfekg%2BiG6WGqGCWNdpYxMuNRQP96ieQP%2B%2B%2FjKETsvE%2BP0B%2F6JJNtRFkJ1bwoNYSpP7Vz4fTcfrvrc3cQKPBLSvFcjIKk81Lv58wtcVH%2FBfthZZTVqNjrNhSrNlNeLMJ%2BC5MEGOqUBo3VjCD%2BwAufss3HgtF9Iczr8fYkEuFSfmUGaVZHpVPrwT%2FgyfrclHUKT0F3fALr3LnE4kr8SCUUQYgxh02RgeYGGNyG8Tp6XQH7rjHUYAtcMZzZ3BqjN%2BzJoja0fZEWrgDQy%2FI6wZj8t1%2B1%2BRrqHifTmCyxLaJvGy7mmmU8rknj0ffAEfm0abFEtNiO5SnZ%2Fuk%2FrnFRrOavJhIfigfkpvS5rSxeZ&X-Amz-Signature=1968047f2072b125acbfbcab96a75620dfaab37cf25f02200b8320254c3bd290&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHF7FWOK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FEIf%2FsYEH%2F8I6PgOWqxlUNxtPLcye3vw%2F47YomOo66AIgEfjYoNrnLCEh8YidwCF9IwfKNAKPUE6G4a1%2BTSKjt10qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYJBOq%2FA4Kt6uyRLSrcA1rfyalO%2BvyQtqv4KGSWzFmZxfReEmwzzT58GkNsskFb3YZJ0VjGtyzCDNqfUY5%2BxKpcWjr9%2FOl%2BMjhxflSTODOVbewkAJ4OO7z%2BOAxeHSCm87o%2B%2BL8i161u77gcngyNS22KsZZ1v4AlDMEQfFmrrx475xq9NYaNqgFTJczjewvZhzTpRFED8SajaPyu61in8QfYYArlL9c9TIZvcqBxHibIMM9awU7YH8dLrlVmAd25LG14bt18Ji5SL7K%2BljpWux8fyoExVCdy3NmbnIZbxe6bldKToPdp7Y96ZLVEFSYlWnk0ySjazjBpiCjIcjycWP4uYerPN62mfljxOICZLIykL5lKBDOiHlROYq5kvzS%2FEJhNs2as74GQ5Fe5ooZpoDvu9InE2QIsJiwyeoGFRl2Lll2W9o4%2F%2BFm8dxgIngXGqfb4iTo0o77mEAHVI5uJXz9av03xirorU14p2sFqdtCf4Ko%2BZcVkpzNbu905LCVA8Sl3ijOp1t0%2FbymTK6FTfekg%2BiG6WGqGCWNdpYxMuNRQP96ieQP%2B%2B%2FjKETsvE%2BP0B%2F6JJNtRFkJ1bwoNYSpP7Vz4fTcfrvrc3cQKPBLSvFcjIKk81Lv58wtcVH%2FBfthZZTVqNjrNhSrNlNeLMJ%2BC5MEGOqUBo3VjCD%2BwAufss3HgtF9Iczr8fYkEuFSfmUGaVZHpVPrwT%2FgyfrclHUKT0F3fALr3LnE4kr8SCUUQYgxh02RgeYGGNyG8Tp6XQH7rjHUYAtcMZzZ3BqjN%2BzJoja0fZEWrgDQy%2FI6wZj8t1%2B1%2BRrqHifTmCyxLaJvGy7mmmU8rknj0ffAEfm0abFEtNiO5SnZ%2Fuk%2FrnFRrOavJhIfigfkpvS5rSxeZ&X-Amz-Signature=d7f7f267d6d4072ab7f2edfcf3f13bc126577c95656dc92cac7259be7167154d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHF7FWOK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FEIf%2FsYEH%2F8I6PgOWqxlUNxtPLcye3vw%2F47YomOo66AIgEfjYoNrnLCEh8YidwCF9IwfKNAKPUE6G4a1%2BTSKjt10qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYJBOq%2FA4Kt6uyRLSrcA1rfyalO%2BvyQtqv4KGSWzFmZxfReEmwzzT58GkNsskFb3YZJ0VjGtyzCDNqfUY5%2BxKpcWjr9%2FOl%2BMjhxflSTODOVbewkAJ4OO7z%2BOAxeHSCm87o%2B%2BL8i161u77gcngyNS22KsZZ1v4AlDMEQfFmrrx475xq9NYaNqgFTJczjewvZhzTpRFED8SajaPyu61in8QfYYArlL9c9TIZvcqBxHibIMM9awU7YH8dLrlVmAd25LG14bt18Ji5SL7K%2BljpWux8fyoExVCdy3NmbnIZbxe6bldKToPdp7Y96ZLVEFSYlWnk0ySjazjBpiCjIcjycWP4uYerPN62mfljxOICZLIykL5lKBDOiHlROYq5kvzS%2FEJhNs2as74GQ5Fe5ooZpoDvu9InE2QIsJiwyeoGFRl2Lll2W9o4%2F%2BFm8dxgIngXGqfb4iTo0o77mEAHVI5uJXz9av03xirorU14p2sFqdtCf4Ko%2BZcVkpzNbu905LCVA8Sl3ijOp1t0%2FbymTK6FTfekg%2BiG6WGqGCWNdpYxMuNRQP96ieQP%2B%2B%2FjKETsvE%2BP0B%2F6JJNtRFkJ1bwoNYSpP7Vz4fTcfrvrc3cQKPBLSvFcjIKk81Lv58wtcVH%2FBfthZZTVqNjrNhSrNlNeLMJ%2BC5MEGOqUBo3VjCD%2BwAufss3HgtF9Iczr8fYkEuFSfmUGaVZHpVPrwT%2FgyfrclHUKT0F3fALr3LnE4kr8SCUUQYgxh02RgeYGGNyG8Tp6XQH7rjHUYAtcMZzZ3BqjN%2BzJoja0fZEWrgDQy%2FI6wZj8t1%2B1%2BRrqHifTmCyxLaJvGy7mmmU8rknj0ffAEfm0abFEtNiO5SnZ%2Fuk%2FrnFRrOavJhIfigfkpvS5rSxeZ&X-Amz-Signature=3e036db6531a75cd91f33a021013fb162bc69a73af580e3523b1459171795253&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA2OJRFD%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFm8Pi%2FqkqOtrU80lauaBES2F7zhc3CyrfsYXWnwwVrAiBfTKtKxjYK5OSa1ddbQ%2FXkU31xqg5SoSAd1%2BxfuRzusCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy4%2FPV3l9BD%2BJlxFoKtwDW%2FbEFOUdBeMbP5xQ%2Blgh1MVq689GpTs8ygSoeGgyjBvx8xdGiIg9096d0N8V5ZVTxc329AqbIaPyalf5oDdDG1G2XxK4ggrYbihL3QK%2F1Oj0gNNXgTkA%2FVIw0vom28FMpivG4shBAxqjOAX0%2F3IW%2BZcYA2Ju2%2FtALBdLEzWD5tTtAr1tgZ91O6v6E9rYWBZ%2F025moy%2FjJmcZsImw0m9HNzyZq5vBhCe%2BKxMHku%2FQQDXnRAuKdc6HfvGj2HZrQ1k4Mfnvpesvr7RQwaLR852Q8XsHYBn6cqj1ywItXLV2EqgQQ1UZkw1QOVvd9cRndz7UdWe2sbkyE1SwupHiKSj%2BZCoGHx3cBaTkfXDrbYpk3OCyprUuWhvpsHXn2fqgeyzF9f3sVpu%2BvtbsrKxTsCJpnNjgf7L2y%2FAoj6yglZkfzwogMg2qX%2BkAqay3PK0v3rIwOFP3JKdW%2F9Tl7zXy3bgIT9aYp1dHbVZf3u9b67CqWorl3aKoAMxAT2%2FuGTY9iop9zYbESu2G3DdSfs%2B076ptkTb5EZaWU%2F5jgJtHamRwOCLnUQHG0bBNuQUjNh7Mt8S9zsXSXa%2F8kZiy%2B55JbFM1CpvmT5dcugfAkLhOEDMuqKgFCVteML7yAxQoDA4w0YLkwQY6pgG51SP9L0PEHtGZu0jlr60ZcaBvwDpgTgAmreB3AL7CxTujehqxIm0WmlahjkBbM14Xj65J6OEnzShmGAJ6h1Qo7i14b8dWDKC43LWPDH6v57pwXFaumgQ2mQISgMQQNtu8%2FeDpPVEW4Z7xc7WxgQfJX8QTWLqykNFfXiAdAte5EXx75108Ra37nZOWdYjGIywxqYDu35LKP3xpXymN0fdEr2mIvxIC&X-Amz-Signature=19381adb1fdf7956fdc6ad172a7ff8824cc424a9b8fc66e792f9564d26b54d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3PQHEM6%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYv15hVNaDZaAzTmE1rQFDvauDwiZRejEsz8rhQF2UGQIhAP9u5S4%2B0bHFb0qlblarCppPPT6rw%2BWB%2FbNpXQfQY2s7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1zyMr9tUloh7FVlgq3APwgH5rxwg2KKX9sNUlXTcOvyDaDTwjHAALHvv38QHgDJ0HZI6uUkdhVw3rghxGMDClEy306aa4lcxq4pVYpCuV9oXqL%2BUJL0yF0EZmVGHHHN%2FfOy1%2F92N37uqgobkPDcthB7rE17CQjwpdlh60deEebaU9vZq%2FJAI7q3tx85yJHA%2F7OGewa4UQuY4AwWiwr%2BTeO7n%2F%2FHQQnV4YbvQWBx0gs2zBsV3GYcvxWCylwI%2F22uucYCZpzwifsaKvhs95qN961ct%2BcfmwQmN2nkRCW0%2FQHXUbKXJhSAiPlbRHTRV%2FouZMwA83tgmwlvBfTmp7ObITksMxXI%2B8YWhE4qO9FouM5kim%2BCAWfmx%2BdO0J4Yn1U4SBwhVHxQXeqA7PpdW3kLwKhe%2Fs3MkB7522V1yzBg%2BPy94NNrvkDwroQwdscr%2BnD%2Baao%2FYjMMvchHtgD26inVM3aCu7QX6ZovtRwrsNFW2C4TkOYG5ukTZYE%2FkpkwqdBjlyRuwDTT%2BrziTwFFAHXAY8vtZ9B3nMhTi%2BcEmSepREkp%2FwNjq4u1lqtWfjE4LaFN%2BTnnwbBPXG6U7Y46dbH9IIId1OhrsZsxKDT3fy0KqxZjSgM0Y3ukPwDLDtOhvK6Yz3YLykgto8c1VVWjDYguTBBjqkAWq3Z9uw4YaPFk7ZPX17j9V3k8bZ66BG2dPD2HPlv2b%2BcyLNWTl0Q91ssxPcoQ%2F%2BRpPq5HTl2cmcZeSzf5a1Ef9DC9ugTJXVdtcuCguG2w2%2FUuN9uJZsQsE4lWbm4SdcQ2LnQbmCgrN3DD0vNPPK8%2FNUeckhkQwLCxhKriqyt%2F1G%2Ba7XjOnuvMGeBRbwtxFG%2FO3jwRkpAw0dUm3773SDber54CmA&X-Amz-Signature=0fae8b6a6455fd0ab42987288dc07420b037fd333528c4d675b0e9424a9b66ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHF7FWOK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FEIf%2FsYEH%2F8I6PgOWqxlUNxtPLcye3vw%2F47YomOo66AIgEfjYoNrnLCEh8YidwCF9IwfKNAKPUE6G4a1%2BTSKjt10qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYJBOq%2FA4Kt6uyRLSrcA1rfyalO%2BvyQtqv4KGSWzFmZxfReEmwzzT58GkNsskFb3YZJ0VjGtyzCDNqfUY5%2BxKpcWjr9%2FOl%2BMjhxflSTODOVbewkAJ4OO7z%2BOAxeHSCm87o%2B%2BL8i161u77gcngyNS22KsZZ1v4AlDMEQfFmrrx475xq9NYaNqgFTJczjewvZhzTpRFED8SajaPyu61in8QfYYArlL9c9TIZvcqBxHibIMM9awU7YH8dLrlVmAd25LG14bt18Ji5SL7K%2BljpWux8fyoExVCdy3NmbnIZbxe6bldKToPdp7Y96ZLVEFSYlWnk0ySjazjBpiCjIcjycWP4uYerPN62mfljxOICZLIykL5lKBDOiHlROYq5kvzS%2FEJhNs2as74GQ5Fe5ooZpoDvu9InE2QIsJiwyeoGFRl2Lll2W9o4%2F%2BFm8dxgIngXGqfb4iTo0o77mEAHVI5uJXz9av03xirorU14p2sFqdtCf4Ko%2BZcVkpzNbu905LCVA8Sl3ijOp1t0%2FbymTK6FTfekg%2BiG6WGqGCWNdpYxMuNRQP96ieQP%2B%2B%2FjKETsvE%2BP0B%2F6JJNtRFkJ1bwoNYSpP7Vz4fTcfrvrc3cQKPBLSvFcjIKk81Lv58wtcVH%2FBfthZZTVqNjrNhSrNlNeLMJ%2BC5MEGOqUBo3VjCD%2BwAufss3HgtF9Iczr8fYkEuFSfmUGaVZHpVPrwT%2FgyfrclHUKT0F3fALr3LnE4kr8SCUUQYgxh02RgeYGGNyG8Tp6XQH7rjHUYAtcMZzZ3BqjN%2BzJoja0fZEWrgDQy%2FI6wZj8t1%2B1%2BRrqHifTmCyxLaJvGy7mmmU8rknj0ffAEfm0abFEtNiO5SnZ%2Fuk%2FrnFRrOavJhIfigfkpvS5rSxeZ&X-Amz-Signature=b1ad94ae11c33f46ceb45b1c64c9d3ae5394666fde1bebcfdbea83bdcae80da7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
