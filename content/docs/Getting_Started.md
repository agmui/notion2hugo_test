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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGKJTXA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFaF308NrOYGMiTpQy26e0bXlCyyAYx8432sr99Z%2F9xfAiEApBYvI4XCAldAPNtpItWpz%2FiMphyvWgj%2BlpTcmog9vK0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLWL5PC78RmOyyqLoCrcAx3RYvYByVKvVeFo9DlleUHKea4J0EQo15HnzbNaZIf6dxOTU219mLNHz0w6aaTIy2Wkh%2BnmfalCtBR%2B%2FOIIo6%2B9y2D0GDqvD46mAnxyud9WtXiaZFhmJKeb1m49958LFcZyNtsF7KXjqxlVGtrZlTHgZJCUwLNb7oB7NDf%2B9qk5PxoedT%2ByKFRhwceS3dnSShU5opU5mE3zKsexI02oF8FXmiadYIwzw%2FI0vd72rgXBRIf8Pfm7PIH2FT9mLSMsc7wF5zXQTIH%2BsvB%2BLNowFfqFqa9o9QIP1RhHYEsLf3qqxQfv8%2FrzrGJPg6iinms7OYIyVf4uRr9%2Bbex82civ4lZiPcFn7uixQtz2wQ%2FOcBV3%2BsISuze8pWN%2FnmtyXvhrlfbGuzH0K5B%2BMRQLw%2Fpw%2FrYruRptI7oGsDvgib%2F38aElZI8TgzMfcCDZmb1%2B%2FEvjHufuEmojMvvw25Agqj30uok9rAcG7Lgm7DwneVSDvUdXl0HVGCylK%2FQKIZLjAo0tby9p4lItfI4woNG9EBqqWYvbnG439BwBqEfsD%2BqYq4FB2kt5P6Z58cMBjyKOe1vBrjVeMiGTCWUBzZwAEiDVMLNjzVE1p30I8PHq0qoB9KuLxZnqiEtiXWNyoaXsMMPrlcEGOqUB5RplZ9oMg7i7GEENi4NSF5TMT63RG4tPwLh1g%2BkS%2FN1fPEBp%2FUkqA1o6FiNXGByY%2FiUsjDn5pZZOc1GlljySjibtcB46QwdThQytF0XqDJyrW%2BGRZ2dHLAtWNXaBSbmemT6QhJgvZ7RyfcNYnCQCxfLn52W%2BrM4%2BRncpLcSFVe3IB%2BMTfELT6vb9CJsZ4MBxG4eDZEZUc0hEp4lWtv8p5FoT%2BMmj&X-Amz-Signature=a95a9b80e76384cb62b86df18e18860ffd04769ca3b4eb1339ffa7eb5d98452e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGKJTXA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFaF308NrOYGMiTpQy26e0bXlCyyAYx8432sr99Z%2F9xfAiEApBYvI4XCAldAPNtpItWpz%2FiMphyvWgj%2BlpTcmog9vK0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLWL5PC78RmOyyqLoCrcAx3RYvYByVKvVeFo9DlleUHKea4J0EQo15HnzbNaZIf6dxOTU219mLNHz0w6aaTIy2Wkh%2BnmfalCtBR%2B%2FOIIo6%2B9y2D0GDqvD46mAnxyud9WtXiaZFhmJKeb1m49958LFcZyNtsF7KXjqxlVGtrZlTHgZJCUwLNb7oB7NDf%2B9qk5PxoedT%2ByKFRhwceS3dnSShU5opU5mE3zKsexI02oF8FXmiadYIwzw%2FI0vd72rgXBRIf8Pfm7PIH2FT9mLSMsc7wF5zXQTIH%2BsvB%2BLNowFfqFqa9o9QIP1RhHYEsLf3qqxQfv8%2FrzrGJPg6iinms7OYIyVf4uRr9%2Bbex82civ4lZiPcFn7uixQtz2wQ%2FOcBV3%2BsISuze8pWN%2FnmtyXvhrlfbGuzH0K5B%2BMRQLw%2Fpw%2FrYruRptI7oGsDvgib%2F38aElZI8TgzMfcCDZmb1%2B%2FEvjHufuEmojMvvw25Agqj30uok9rAcG7Lgm7DwneVSDvUdXl0HVGCylK%2FQKIZLjAo0tby9p4lItfI4woNG9EBqqWYvbnG439BwBqEfsD%2BqYq4FB2kt5P6Z58cMBjyKOe1vBrjVeMiGTCWUBzZwAEiDVMLNjzVE1p30I8PHq0qoB9KuLxZnqiEtiXWNyoaXsMMPrlcEGOqUB5RplZ9oMg7i7GEENi4NSF5TMT63RG4tPwLh1g%2BkS%2FN1fPEBp%2FUkqA1o6FiNXGByY%2FiUsjDn5pZZOc1GlljySjibtcB46QwdThQytF0XqDJyrW%2BGRZ2dHLAtWNXaBSbmemT6QhJgvZ7RyfcNYnCQCxfLn52W%2BrM4%2BRncpLcSFVe3IB%2BMTfELT6vb9CJsZ4MBxG4eDZEZUc0hEp4lWtv8p5FoT%2BMmj&X-Amz-Signature=dcd62c6c843ab05d911b17ad3680823f69c7427c3ebb811cb19b3c32f52a2a58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGKJTXA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFaF308NrOYGMiTpQy26e0bXlCyyAYx8432sr99Z%2F9xfAiEApBYvI4XCAldAPNtpItWpz%2FiMphyvWgj%2BlpTcmog9vK0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLWL5PC78RmOyyqLoCrcAx3RYvYByVKvVeFo9DlleUHKea4J0EQo15HnzbNaZIf6dxOTU219mLNHz0w6aaTIy2Wkh%2BnmfalCtBR%2B%2FOIIo6%2B9y2D0GDqvD46mAnxyud9WtXiaZFhmJKeb1m49958LFcZyNtsF7KXjqxlVGtrZlTHgZJCUwLNb7oB7NDf%2B9qk5PxoedT%2ByKFRhwceS3dnSShU5opU5mE3zKsexI02oF8FXmiadYIwzw%2FI0vd72rgXBRIf8Pfm7PIH2FT9mLSMsc7wF5zXQTIH%2BsvB%2BLNowFfqFqa9o9QIP1RhHYEsLf3qqxQfv8%2FrzrGJPg6iinms7OYIyVf4uRr9%2Bbex82civ4lZiPcFn7uixQtz2wQ%2FOcBV3%2BsISuze8pWN%2FnmtyXvhrlfbGuzH0K5B%2BMRQLw%2Fpw%2FrYruRptI7oGsDvgib%2F38aElZI8TgzMfcCDZmb1%2B%2FEvjHufuEmojMvvw25Agqj30uok9rAcG7Lgm7DwneVSDvUdXl0HVGCylK%2FQKIZLjAo0tby9p4lItfI4woNG9EBqqWYvbnG439BwBqEfsD%2BqYq4FB2kt5P6Z58cMBjyKOe1vBrjVeMiGTCWUBzZwAEiDVMLNjzVE1p30I8PHq0qoB9KuLxZnqiEtiXWNyoaXsMMPrlcEGOqUB5RplZ9oMg7i7GEENi4NSF5TMT63RG4tPwLh1g%2BkS%2FN1fPEBp%2FUkqA1o6FiNXGByY%2FiUsjDn5pZZOc1GlljySjibtcB46QwdThQytF0XqDJyrW%2BGRZ2dHLAtWNXaBSbmemT6QhJgvZ7RyfcNYnCQCxfLn52W%2BrM4%2BRncpLcSFVe3IB%2BMTfELT6vb9CJsZ4MBxG4eDZEZUc0hEp4lWtv8p5FoT%2BMmj&X-Amz-Signature=2084596300a91e49fb1bfa29dfeeb68e0aa53fc76866e72979ab1a33619fdbf6&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQG3KDZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFcv7KjBFA9v58PiCX9AG1%2BMEnmKV0pTwvuy9nobopMXAiAHb7pHvMtu%2B8397Gdh3qSIWS%2F%2B7uFdERoiHy6y7w40mSr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMNkMOyojucoYIRBVdKtwD1g9KJl8ZJGCTaROwHviFkmZ%2F4SLfkzSW80vGrMRdquAbbB8gXDaX7AbCyRJ5UQ681cxgT59bETMlK2XFgc9Wt8vATrQA137efugZ5FMtInE5b8vMOOXcyOPlPE9trTBo%2BKTJxknP%2B%2FWwy2EoG6exb3xitEyaytRwRVjWNgi9utQVjjhnGAqDxvrl%2Bf93LPaoKftS5Qt2fJ0NYYjw5a5q%2FnBXiiBOd61PbdrBlZA4Ol4xtrRm1lg6%2FIpis90BeV4%2Fu9U6JgHJd5RNRFwRPGWx2k0al6GJzQnpz%2F5viPXFSN2mMDPNytKOjVQVsRvZK54kcN4ig%2BdgfbHW8PE3RwYQnWlSSue1A066KBQoySP0mML0Bwe2bTWe44OguYhey6zkpjwDRthftEBOK7QKpFX%2B6lZa0y%2BucjeVzCvI3o3mNLGg5ZODPeFSAS8wTp8%2FQg6D5Ef%2FJNEeE9oBXKCmKgxwCPQvsJ1tWiVBuhG6rWLe0zf7RKcEHVrK%2Bc5gyrpTl66p842ovTGFfNtvB2gSIMiHjaaa0tewlqChekt4QYpkzteQo8dw7pIHkWISjO%2F6RcSUPsSTJ%2BT%2F3vlCWl05fhVsRBd7ufS8MLiYdNKJW4QKV5DUDv4PoGg8oYPuRtMwh%2BuVwQY6pgFfMrM8BTE7wBPVMg9k0n0i2847r8lFfHvDtTDs%2FYL5%2BpV0s3AdG1UJ8Te2IbS3AY1B%2B%2BN%2BdtUUAZd5RH1eDBcolQlnqDGOKVadgLw78MhTXy4j%2Bdda1RviNK9IOMjG0IWfjocsIjbWEyacMrjsNUAcSMVSEf8imLlXG2OH6rWxGP5FjG12ejbrDOjQ68TypLgdstaW8gTUrYI157GiYkNer3cA3ujh&X-Amz-Signature=0195efaa5b5e9b71ce3abbd3cfd88fe69c4e2f2bc116471a73dba4bcab65daeb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDY5XVVQ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDpckUMV35GWciV29aCqY00oPC9h8hpTMUqzNCuCAPnXgIgIh7z08ZBd9ZyTMwQ4UhO6Sbca4AqCQLK2NmeDesk5Y0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFEgSDhKy%2By4SidgNCrcAxifwF8rSOyz0QHRjTqtPWA4zHONzeyi6OYbI0UruTH01xSvyYehd3pydfKUzzCnPoa6ih1duONYtPPt%2FDVNjNgEnt65M9bIbHNQi5QynBBXckAjA03h%2FAzpAlhgfObBVfeG9%2FvPvBwhI6AITlKytLRag8yDLgAdlxRy4otxzBhts%2FCOlSAtULU%2F9lnX8Hgm2kY56yndn8p3aJ3OtF%2Fyl%2Fh0zns2c08se3unbG1VKUsWYx3vYDVDkzicbwyHI42p0Bar%2BU8%2F%2BDb8FBhozIhD4b%2Fc9sWCStmHoji1LEULATSIVRSzqonCpGkddZVVaMHEjf7v2zVki5FdH9nZkNyzI1prcTuU04HySVFT9Rck2TDxkOJHPhCCuI0aW3Tou5pUJJdhcU5nyybLAe0ShfTFRohRBp0%2FKjTPTSHS10Ht9v8Vh2XIz%2BMSbmUCYwV%2B6LGJ89DwO%2F4jmtJmYvhZyaaWwhGQIfsFB7QMV%2BWRqpm9ocZop%2BgBD65hkZXDqmd7%2FA90p3prBgzs1qfT0ThYiUr21wJHvvla41wU94PoP0CAURBfBidsIF3ky5ATR%2BoHGqurrzHOEBzDy9TbtoH%2FiQKsdjORHmeA1NNLCc52x2XnOVQbiIAdOwZY76y6pL3RMInqlcEGOqUBIuWYr3beH05b0p3X4ru8RdYg2K52wybri1cPozUUZIwa49E1e6ow8p%2FiywLtA6ySeHofHB4ivCZclCJLL9szlqL73mb%2FAs1OW%2BiKfw5BH0CXoxhIGh8pKH7b8z8Hx%2FFltVdUxQwgwzv4JXgrA2c69CHpAI%2FTQ8dSeAtwNrn9owBCNlka2Fv40LfdoucB76v%2FLi7TSZu8Dj4TJ7whN6Dws1tljnBw&X-Amz-Signature=71823818448a6794383097c479cc99e901284bae15163bd7f6541e963d18228c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGKJTXA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFaF308NrOYGMiTpQy26e0bXlCyyAYx8432sr99Z%2F9xfAiEApBYvI4XCAldAPNtpItWpz%2FiMphyvWgj%2BlpTcmog9vK0q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLWL5PC78RmOyyqLoCrcAx3RYvYByVKvVeFo9DlleUHKea4J0EQo15HnzbNaZIf6dxOTU219mLNHz0w6aaTIy2Wkh%2BnmfalCtBR%2B%2FOIIo6%2B9y2D0GDqvD46mAnxyud9WtXiaZFhmJKeb1m49958LFcZyNtsF7KXjqxlVGtrZlTHgZJCUwLNb7oB7NDf%2B9qk5PxoedT%2ByKFRhwceS3dnSShU5opU5mE3zKsexI02oF8FXmiadYIwzw%2FI0vd72rgXBRIf8Pfm7PIH2FT9mLSMsc7wF5zXQTIH%2BsvB%2BLNowFfqFqa9o9QIP1RhHYEsLf3qqxQfv8%2FrzrGJPg6iinms7OYIyVf4uRr9%2Bbex82civ4lZiPcFn7uixQtz2wQ%2FOcBV3%2BsISuze8pWN%2FnmtyXvhrlfbGuzH0K5B%2BMRQLw%2Fpw%2FrYruRptI7oGsDvgib%2F38aElZI8TgzMfcCDZmb1%2B%2FEvjHufuEmojMvvw25Agqj30uok9rAcG7Lgm7DwneVSDvUdXl0HVGCylK%2FQKIZLjAo0tby9p4lItfI4woNG9EBqqWYvbnG439BwBqEfsD%2BqYq4FB2kt5P6Z58cMBjyKOe1vBrjVeMiGTCWUBzZwAEiDVMLNjzVE1p30I8PHq0qoB9KuLxZnqiEtiXWNyoaXsMMPrlcEGOqUB5RplZ9oMg7i7GEENi4NSF5TMT63RG4tPwLh1g%2BkS%2FN1fPEBp%2FUkqA1o6FiNXGByY%2FiUsjDn5pZZOc1GlljySjibtcB46QwdThQytF0XqDJyrW%2BGRZ2dHLAtWNXaBSbmemT6QhJgvZ7RyfcNYnCQCxfLn52W%2BrM4%2BRncpLcSFVe3IB%2BMTfELT6vb9CJsZ4MBxG4eDZEZUc0hEp4lWtv8p5FoT%2BMmj&X-Amz-Signature=3b92bde605a954bba244b31e15804d748c96943eb56070e2ec5f081178c991a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
