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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDO7DRJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEN2AzejUS0UGb2RjUzs4a02Ecya81x%2FNpRW4mDL5QIEAiEAsrlT6mGKcM1wjGPFmkfaQzvRAiSC7dfl2B12qdn5nJYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMX13ZfunUS%2Fny9AIyrcA0saSFzJ7HXCEbnndKAHG%2BWW0BIFIW4hcqQHOlRy2alwmtoIkgJCS2%2Fg75MGCOpT71tzPUs%2Finh0BJeyAfO1PxPlryz3ZKiIn%2B0cnNp4kuYM0BIjwSt%2BVIyrwJGwtybAQlKa4S%2BJFgklvkXo0DyvVIESahD9nY9sNh9rOv%2FInWuxAHvS%2BfDhT%2BS5EwyRRnYBztoJF8LA7h2hDj%2FkY18MVyyOCHZ2mhvdeX0KAUGlj2%2FaiajW4g2BS9SFNTWAnIZHsz6wU2Yodt%2F%2FQDYJf8NvlnaMUBY4je7DKxGblS2GtVLrJCbszE%2BaVr69QUaoVp%2FtttINkHgCgdxHVIf0PQfUFGuHp4ibPn8IXtVaqvoUGw%2BM7jIRjs2DhTZrd0n2y9v7yD%2Bn5%2F2Nj2%2F8%2FrCHUfKFnZVgd%2F8kRBh0%2FM1Scc%2FrRtTtQbva6md0BH8u7mKAA27h22C9FDoXqo%2BFy4aRAlQyS5NLDmi86WZBX2l3e3De%2Be%2FWdu%2BZ8QT%2Fo8NzEalrZuSkiCDNO7VxyUrecibjUwEnFZ48COiNuuNWNmlDEL0cSocpIZNqukV%2FYU79NDsMm2JIIJ3SIUkZtKlNrVIpBwNqIFosDzejXGz0HnmFihivdjK16fm6rur5G0V0zmyRMOOUocAGOqUB%2F04%2FGrdiuaXYxwiO7bpQ6OTJXhB3vFFBywm3QMgkaSqhfa4L1S%2FpQDuzOl%2Bldq5TkNxwndyjLVxFEuG%2FE7KJudDhN7EhBaeTrei26UVdfJehKesvglRrVEtgOJmeegT0Ix0kRIKlJRU9ElQ79nw7ByAqNKH7XxtywDQLo1Vf05jEZ3TYMyxft1vqdpgfeQA1vgiJA8lQp3iUWdW%2B%2F7aFSdldslvY&X-Amz-Signature=b21f9eb999d2c31c0258e59d85e8e20ec95331bb001a022e8a5749582ca2967a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDO7DRJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEN2AzejUS0UGb2RjUzs4a02Ecya81x%2FNpRW4mDL5QIEAiEAsrlT6mGKcM1wjGPFmkfaQzvRAiSC7dfl2B12qdn5nJYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMX13ZfunUS%2Fny9AIyrcA0saSFzJ7HXCEbnndKAHG%2BWW0BIFIW4hcqQHOlRy2alwmtoIkgJCS2%2Fg75MGCOpT71tzPUs%2Finh0BJeyAfO1PxPlryz3ZKiIn%2B0cnNp4kuYM0BIjwSt%2BVIyrwJGwtybAQlKa4S%2BJFgklvkXo0DyvVIESahD9nY9sNh9rOv%2FInWuxAHvS%2BfDhT%2BS5EwyRRnYBztoJF8LA7h2hDj%2FkY18MVyyOCHZ2mhvdeX0KAUGlj2%2FaiajW4g2BS9SFNTWAnIZHsz6wU2Yodt%2F%2FQDYJf8NvlnaMUBY4je7DKxGblS2GtVLrJCbszE%2BaVr69QUaoVp%2FtttINkHgCgdxHVIf0PQfUFGuHp4ibPn8IXtVaqvoUGw%2BM7jIRjs2DhTZrd0n2y9v7yD%2Bn5%2F2Nj2%2F8%2FrCHUfKFnZVgd%2F8kRBh0%2FM1Scc%2FrRtTtQbva6md0BH8u7mKAA27h22C9FDoXqo%2BFy4aRAlQyS5NLDmi86WZBX2l3e3De%2Be%2FWdu%2BZ8QT%2Fo8NzEalrZuSkiCDNO7VxyUrecibjUwEnFZ48COiNuuNWNmlDEL0cSocpIZNqukV%2FYU79NDsMm2JIIJ3SIUkZtKlNrVIpBwNqIFosDzejXGz0HnmFihivdjK16fm6rur5G0V0zmyRMOOUocAGOqUB%2F04%2FGrdiuaXYxwiO7bpQ6OTJXhB3vFFBywm3QMgkaSqhfa4L1S%2FpQDuzOl%2Bldq5TkNxwndyjLVxFEuG%2FE7KJudDhN7EhBaeTrei26UVdfJehKesvglRrVEtgOJmeegT0Ix0kRIKlJRU9ElQ79nw7ByAqNKH7XxtywDQLo1Vf05jEZ3TYMyxft1vqdpgfeQA1vgiJA8lQp3iUWdW%2B%2F7aFSdldslvY&X-Amz-Signature=6fd30ab056cd3ab6c27978413665aaeb85b71b94b91e0774886411fbe3868dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676O4ZW4F%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIHQmOtJOogi%2Fu0G0rqbNkCAJVqdUmG1KzWjg%2BT%2Fc1MIkAiAkDt6gDZGJdy8WYFxRD6zugO3kex9kcfLoETg4MxcR%2FCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTDvoYeIKYKeRWpp6KtwD34B9AatdtPGtrZWhf3icUnzqH4xpfjAqqRGo4Q%2BTzckxwGLe4OieaReqtTCD7drOHlHFLgMRl1p7Q15Ka35QmmlJSWUiLiJWaa52JxN9%2BkWmMrdb88biKmp%2FJ0SffBXej3l%2FrgDtLZmJAcl1zuDm%2BW6T2%2FGdlf1%2FjY7WAzYXcEL0HKfDMzfb6BzK65iwAsVvEGhoj0ToNpwyrgLQiuFaauDsi1MS0UlJQE4SfvkyMyD2qMMEJrHzL0tktAHwdDBVj5iBhv5sh4tYWiSqEEB4ItlHNfXQkIoEjhjH9aFScv%2FuXvblIg%2BDyhoaMchyNQ0%2Bgleq7dTb%2BCLVK3PSFXC9aOyINYoyttE0BKw6lSLDy3txjW2cw1OU3qJXu8f62D5592%2FZfuyhoMMsBC65ZT0zt6VeXM29yYfEj9DjyMuHWuomu5ioGW6lj%2FoeHYVOAMUz1nPOAA6vKoLdjZ3fp2g7pvYzUtu7NetipBCLY5PjjDvNdZGjpgUqWxAIsjULaW5F8ITgiu262%2Bs9dPlx%2B0KJNktKII1cP%2B15YV0v5Sk%2Bbjbzz5vTcACmi3f%2Bebj92SK2peoJwkZN6ZydRDwRC5lUIULLME%2BGz4XF1KnA2ZbuUKS6MCtaq6A3uslgZAww%2BpGhwAY6pgGxCzWY3KgSvHrSKd4lh%2Bm%2FiqfSYvzJGI6Bng99dzBYKLqiiJSqbSzOZO%2Frz6kkqCHoJeYAQl7d6cvAqCU6PqypgCNGIfpjCVeqaRI81WMSAHpHn2rsLqU%2FSrxDg0TyZ0krkYCJLJBmj2GP4uJW9RI1xfHgHgXkHbRpp7qx4INQg0GD2cDMzc2ml9Y%2FJ94DUmdRkQE71bwN4rl0jauyyZm8wn7Nfdpn&X-Amz-Signature=1f0d0dae508115c2e4284c604dffaa4bf96bae4647a77325aa2faba79adec32d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJHR5X2V%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCHGjQ%2BOZzXn55lRgAqhdCldrLmv5vcrV0UlJqfcwQ10wIgbTCZpR%2FI2WbQVH5e5l%2BuGp07f2p%2BmSWsdQzgvvy3eGAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJ9IbnX1fBt%2FaRwECrcA4SMzSmVltqadPtAkN%2F9BIt84xsdsYB66EnqAe%2Bg7Vtp5sNU1eSEb0C8nNPMQlutwAm49bRlc3N9CWLhEwATIAMHHcuNV5%2Bz1HSO0mm6OTH3ekUp6NxbEM0tDvIT%2BZaYupStCG3t1VubjjIVTy6XZsFShBRR0NbOM2qwz4cerBZQBhGbL%2F%2BtQZ12KBtNGCLrRD7S2gGce0VKj9Tl1iJorDEqNXR3%2BhJV9vubaS8QXn%2FG5%2B1I2pKuEFG9azEqMMmn52Tgk6cyHK7t2l9269Aq1itb48PK1%2BrYP%2BnkzwKqRtaI6DlsYm1SPmNtWTznWjuFJY8pdgFwd9T%2BFhlRUHo5FdsBAfoYTbFNvJtCN48HdwQAwxXtv5mSwLF5V4WY3prM4TP%2FSQlVPkeRzlTjpvT1Pvzxl0oEJvLnlBGOHNhK1Ov3oezaHYUBaUfnpT0ymhtMvqb2Clu8JxQUz0N%2FLTnk4efMB7PTH336tGQtTmExEK%2BZcpvnRjSclvFIdXJpAjavgppdT%2F7AtCO3YtXB2sNCz9htgdxCW6CE7AZy9wpiJgh6tszsLWrHRCb5zMH1ac8RBvb%2FtgHRx1l8mVPvcVrO%2BEAN%2FF1jo9GkCkTVSrYf66VN4nlvMvnn%2B1UOt6ppMPnzoMAGOqUBhRg6WpbGcYxit6QWC06I0JSDMSRmKDVDAzaek9%2F9lrTR2hVCpBHhDVt0PaOKR2UeY8aYjdvWwP5Mnsgk%2BBf7YPeTOeHkA3VhUQDrmrdiu%2FfSeWdqzrt7TmXwSAVig6wMpYiRQycoVoaJEJsVRwPyfKDU7f%2FSVuhUwo7ZSTzcpSu5Ix68Mbdg2HoXypwE9KxW465VJnD1%2Fyynkfz3DvoA%2FI5E3erf&X-Amz-Signature=6a82eee1a14c7b403c1a7655a334f87e43a0794145b25973462b6aef2d0fafe0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDO7DRJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEN2AzejUS0UGb2RjUzs4a02Ecya81x%2FNpRW4mDL5QIEAiEAsrlT6mGKcM1wjGPFmkfaQzvRAiSC7dfl2B12qdn5nJYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMX13ZfunUS%2Fny9AIyrcA0saSFzJ7HXCEbnndKAHG%2BWW0BIFIW4hcqQHOlRy2alwmtoIkgJCS2%2Fg75MGCOpT71tzPUs%2Finh0BJeyAfO1PxPlryz3ZKiIn%2B0cnNp4kuYM0BIjwSt%2BVIyrwJGwtybAQlKa4S%2BJFgklvkXo0DyvVIESahD9nY9sNh9rOv%2FInWuxAHvS%2BfDhT%2BS5EwyRRnYBztoJF8LA7h2hDj%2FkY18MVyyOCHZ2mhvdeX0KAUGlj2%2FaiajW4g2BS9SFNTWAnIZHsz6wU2Yodt%2F%2FQDYJf8NvlnaMUBY4je7DKxGblS2GtVLrJCbszE%2BaVr69QUaoVp%2FtttINkHgCgdxHVIf0PQfUFGuHp4ibPn8IXtVaqvoUGw%2BM7jIRjs2DhTZrd0n2y9v7yD%2Bn5%2F2Nj2%2F8%2FrCHUfKFnZVgd%2F8kRBh0%2FM1Scc%2FrRtTtQbva6md0BH8u7mKAA27h22C9FDoXqo%2BFy4aRAlQyS5NLDmi86WZBX2l3e3De%2Be%2FWdu%2BZ8QT%2Fo8NzEalrZuSkiCDNO7VxyUrecibjUwEnFZ48COiNuuNWNmlDEL0cSocpIZNqukV%2FYU79NDsMm2JIIJ3SIUkZtKlNrVIpBwNqIFosDzejXGz0HnmFihivdjK16fm6rur5G0V0zmyRMOOUocAGOqUB%2F04%2FGrdiuaXYxwiO7bpQ6OTJXhB3vFFBywm3QMgkaSqhfa4L1S%2FpQDuzOl%2Bldq5TkNxwndyjLVxFEuG%2FE7KJudDhN7EhBaeTrei26UVdfJehKesvglRrVEtgOJmeegT0Ix0kRIKlJRU9ElQ79nw7ByAqNKH7XxtywDQLo1Vf05jEZ3TYMyxft1vqdpgfeQA1vgiJA8lQp3iUWdW%2B%2F7aFSdldslvY&X-Amz-Signature=838f654e297d66296317d55c43914c5295afc65529f0aecc36329db2d36f488a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
