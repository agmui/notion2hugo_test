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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPCCIVY7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFxtHUY7jRFgekgaL0AhQQSuwZvJxTYD4TpgvxsVGa%2FlAiA9iZNExVaxdm40ExIIddla2%2FuMEKHEa%2FXlSpoEIeoWuSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMpGMFSniK8qbacCe0KtwDe6Glm8HRXmZdZeOmWJ3QnMMkXZB93VEOiqRiwlOYfkweSEPedTXGB%2FVA0xu1SyEa42O%2FhPW6S2mDkmTafE8gCMrv5sTz1FIgHxCrmyIZpO1Mh3RzSRANi090v3W78ZNRWqlZdiopw8KMVNLcd8Fo9UIBpPl%2FMvQwFwBRGWXbp4IhqCAN%2BbAAtHHW57mbjrUR99x4dqTQ%2BmvhcbyVxQjX5C5p95ChIgTMfKMLcEuv6hQiC1fIxleAp14gdeWJNOgj7uJmNrWzxx%2FxHrl%2BWG2YzVZfCz9XcuvAnUy5YwRU0v3Ai9kmUOH6I8F0QIP%2FbLEgtLEOVY7uIDno1ZXfYzUSUkXeJTto%2Fhgm66RmlaiO4i3fYVQOdAKYlcnSTz7EJ5%2FjWEcZUsUfI6pcJ4h4bZEXHVkL8vQy87j1cXDUKOnr42vz%2F%2BPPFIJlvzoJLqhEmlTbCdA2gfOdNPKzDPKCg78OAmUMRj8URvaBtfKWHgVbGNKtCN24f9lhxX1RX9Ud1eyTLju4W14goAOXtoXb%2Fklb0c%2BOPCEH06yjux6wXsKH33KmRT2Sb28hRosprwlD5dzdmj1zgUIxRDJcAf8lqCFScRnwdxdTIen7rmZMz5xA0WD75c1QTL4droBQryAwmviLxAY6pgGiK%2BKt58IxYtDjtioO0%2FCzY5tUBp7FC4KKgx5TmHWBFz0EOSoWJ9xKqUnxICkuO4s9IHj25A758KBa9QcuEygbdNf%2FgTrZhAvKirT58%2BKBwijuASBV9Wk2tyud8k1%2BmJm5a9B%2F2q9Skuhmdw7SNj5Vtq3P5LKkF5FI25%2Fgk22U8U%2BgRL1LUu54WTmB99Y7L2ivijbC4gKTgL6f7clVci3sO93JX2Ju&X-Amz-Signature=4375004c677112d26cf4cb9a349f27ece511bcda0b264d901bde331c82f46755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPCCIVY7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFxtHUY7jRFgekgaL0AhQQSuwZvJxTYD4TpgvxsVGa%2FlAiA9iZNExVaxdm40ExIIddla2%2FuMEKHEa%2FXlSpoEIeoWuSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMpGMFSniK8qbacCe0KtwDe6Glm8HRXmZdZeOmWJ3QnMMkXZB93VEOiqRiwlOYfkweSEPedTXGB%2FVA0xu1SyEa42O%2FhPW6S2mDkmTafE8gCMrv5sTz1FIgHxCrmyIZpO1Mh3RzSRANi090v3W78ZNRWqlZdiopw8KMVNLcd8Fo9UIBpPl%2FMvQwFwBRGWXbp4IhqCAN%2BbAAtHHW57mbjrUR99x4dqTQ%2BmvhcbyVxQjX5C5p95ChIgTMfKMLcEuv6hQiC1fIxleAp14gdeWJNOgj7uJmNrWzxx%2FxHrl%2BWG2YzVZfCz9XcuvAnUy5YwRU0v3Ai9kmUOH6I8F0QIP%2FbLEgtLEOVY7uIDno1ZXfYzUSUkXeJTto%2Fhgm66RmlaiO4i3fYVQOdAKYlcnSTz7EJ5%2FjWEcZUsUfI6pcJ4h4bZEXHVkL8vQy87j1cXDUKOnr42vz%2F%2BPPFIJlvzoJLqhEmlTbCdA2gfOdNPKzDPKCg78OAmUMRj8URvaBtfKWHgVbGNKtCN24f9lhxX1RX9Ud1eyTLju4W14goAOXtoXb%2Fklb0c%2BOPCEH06yjux6wXsKH33KmRT2Sb28hRosprwlD5dzdmj1zgUIxRDJcAf8lqCFScRnwdxdTIen7rmZMz5xA0WD75c1QTL4droBQryAwmviLxAY6pgGiK%2BKt58IxYtDjtioO0%2FCzY5tUBp7FC4KKgx5TmHWBFz0EOSoWJ9xKqUnxICkuO4s9IHj25A758KBa9QcuEygbdNf%2FgTrZhAvKirT58%2BKBwijuASBV9Wk2tyud8k1%2BmJm5a9B%2F2q9Skuhmdw7SNj5Vtq3P5LKkF5FI25%2Fgk22U8U%2BgRL1LUu54WTmB99Y7L2ivijbC4gKTgL6f7clVci3sO93JX2Ju&X-Amz-Signature=e546c2c7df66b50891b9ae9a6749089cd7e2f19c3a0a9ea67beed7ae043c285b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPCCIVY7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFxtHUY7jRFgekgaL0AhQQSuwZvJxTYD4TpgvxsVGa%2FlAiA9iZNExVaxdm40ExIIddla2%2FuMEKHEa%2FXlSpoEIeoWuSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMpGMFSniK8qbacCe0KtwDe6Glm8HRXmZdZeOmWJ3QnMMkXZB93VEOiqRiwlOYfkweSEPedTXGB%2FVA0xu1SyEa42O%2FhPW6S2mDkmTafE8gCMrv5sTz1FIgHxCrmyIZpO1Mh3RzSRANi090v3W78ZNRWqlZdiopw8KMVNLcd8Fo9UIBpPl%2FMvQwFwBRGWXbp4IhqCAN%2BbAAtHHW57mbjrUR99x4dqTQ%2BmvhcbyVxQjX5C5p95ChIgTMfKMLcEuv6hQiC1fIxleAp14gdeWJNOgj7uJmNrWzxx%2FxHrl%2BWG2YzVZfCz9XcuvAnUy5YwRU0v3Ai9kmUOH6I8F0QIP%2FbLEgtLEOVY7uIDno1ZXfYzUSUkXeJTto%2Fhgm66RmlaiO4i3fYVQOdAKYlcnSTz7EJ5%2FjWEcZUsUfI6pcJ4h4bZEXHVkL8vQy87j1cXDUKOnr42vz%2F%2BPPFIJlvzoJLqhEmlTbCdA2gfOdNPKzDPKCg78OAmUMRj8URvaBtfKWHgVbGNKtCN24f9lhxX1RX9Ud1eyTLju4W14goAOXtoXb%2Fklb0c%2BOPCEH06yjux6wXsKH33KmRT2Sb28hRosprwlD5dzdmj1zgUIxRDJcAf8lqCFScRnwdxdTIen7rmZMz5xA0WD75c1QTL4droBQryAwmviLxAY6pgGiK%2BKt58IxYtDjtioO0%2FCzY5tUBp7FC4KKgx5TmHWBFz0EOSoWJ9xKqUnxICkuO4s9IHj25A758KBa9QcuEygbdNf%2FgTrZhAvKirT58%2BKBwijuASBV9Wk2tyud8k1%2BmJm5a9B%2F2q9Skuhmdw7SNj5Vtq3P5LKkF5FI25%2Fgk22U8U%2BgRL1LUu54WTmB99Y7L2ivijbC4gKTgL6f7clVci3sO93JX2Ju&X-Amz-Signature=6f42d1ebba1e530364d7ea256c45c05ba375fb5d514d6ba9115f47549c67043d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHW5J5R%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDJmYg7edOr%2Bc9jgQAWxBTIIWXoHxXKs8RgR%2BjUN24wtAiEA7ACUp78O0aOBFQ3jk%2F1sIUFZK%2BEvE%2BZwHhexr%2Bpjoicq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCylUkB0ec8lZlCy%2FSrcA6v5QfJBi2%2B6wEDZMUoIntzVnd%2F7HNjsfjKQ447BSjRj%2BT72cmJjZP4zLkAREGXsw%2BfnOcGQOcjsQwqWDEAFQy%2BU8bhecUGS7WV35Vp2AA3RUzRn3TmrXMpZihMnejM74zjdIyOqF10ujq4vNK9DZ3zcSTadJ5X0Qyg5%2B%2Bjuw4g0jhBcoJZ1iZq30F4o9dan%2F9ax8aramZN45t%2Bc0i0MLF5CEpwJdPvYwryiWYK%2F%2FefK40g3Vm5eSo2h1ODsRxkNF291dVW%2BGpt0P0poAS9CLMFbZOowF6AziiCB%2FLiunLDK39HMmejL9OmfZtQM%2BIzruArM%2Bs9JsZzjskqCXIxKQ6bupztT9Hn66xEGC%2BGG7ULDl6c73ubrpw6TLHm2luxY9xk7ojC5IhsBwIhY8TKXqL83VlSwfJC3n5can5qaO9XXum7M0r4fKiOm%2Fq0z80FtnmUI8bPUYsK52Rj5l93wu3pXEe%2BQFz8z7lpTQmd2OLgLHkGClTdiEl%2Bmry4t5O10BWylqzcKu5GCe2gNWQg1uPTiGYGrZWvGZkj3JlQeejUEQdmVWzbVWFolxck4WWb8MAO%2FpjyjidBbuHMjoorj78x80aETavoOiobDOCbUvqJ1xatHf1j%2Fn5YpEQhWMPz3i8QGOqUBAnoYHhxGeV0xGnjCsZQelLDdFS2ELzqPqyki1RlzIrB7xZq1gSji7Czhl9f0uxcgqAv6vv5JN5MACzird9tKAxmzDybAWPxvoxrJ03HcZY%2Bt30WXf17l97N0Na2yHJFFTzBTQgXzaV32LA933%2BqwvhufAGhyr0%2FGisujePrSSCJ%2BU7fzHTLFmD7m75uW7K%2Fiv%2FgfDODC%2BgaHkU1y6GnfmxMjEBiI&X-Amz-Signature=0f524dea5a776a37ec425fc5da9d241c81c7da33694c14c6c85b165e8a171ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLWIRXHY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCJ16Dwv50%2FUUOVeoMbPaAtyAi%2FXDCAyEZeK716%2Bl%2FlSQIgL6TljYJB%2FigZALdkRw1OWkGOuCdOcjo9VK17nSpWz0cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOZ%2BKbqLvZG81%2FitXCrcA6b6lAY00vHu%2FCmr3vTLgZ%2BE%2BF9g2uugU6qAOonqmipqpBtDBzchXVwtPDq9Ni6jFlgkGPmu9xj2Msy57g5LuhHrX%2FxQnxb6%2B4gdAqstNBdJAXYa86VTW%2BPdQ88HJoT6VwRZr59KRrjuqR8p%2FPHR195hRTI%2Bj%2BOHMjODFjodgkNedH3excQalMeB5kbESf1Sgl3rpMoAUATUI6zN623eADx%2BLovRdzuhuiEl48n9D9YiHjl%2BxHn3E%2F2cYmmDYt1f%2BAKr9Ahidcfy6XEeQcCKZPRWA5o14x3uaUcmQc4emQdIjBAGzst8WMDwQQi7srPoXaIp%2FPY%2FPIdyi6lJYkqC86%2B9b2cHFmQbpdnF9qS%2BcwqHolKylH5Gk%2Bgjo5AT6wRUwfIPZ85gleUk%2FR4uc6VvDUU3EDvtvOskxS9z5aVdsI5a%2FiGCpCEqPjSiK7cT1D2m0lks6fgbxMoQ4R%2FC3%2BhB%2B2OOuQvnCPSDytev26DweZGgL9o2aaDYKiyRnZv1URpZqz8m4n%2BlkUHA6qyoe52W9u6Wb2oHJ7FoYwmDJbApNv2GmvgV%2FkOhDSY3mPEmK9UNKd6Y6QuThPXys81ufrWXOzbt0H1uW3USekkulA6tSjILRqkPStpbJMCQXd4TMNv3i8QGOqUBcFuh5W1GtqdXAKjmp7lItNMnPRBN4x169t84RfUpTy6pi5Tvl%2Fbsmugkh0kNBNX21%2FeB9588tYaAJs%2B2RQpw%2Ba7vcxiZskXS%2F2nRPQh0E%2FA45ytbjjcuPf8i8M%2BNvMLmJZCWkSr%2F9Beuv679%2Bo8zK5iuKVLAKUADJcqaDMHaPFxrPrAAAi6c00Nn3CbnGXc015EFbM9uMOOnDr7UfQDXLO75YU%2BU&X-Amz-Signature=e29494118616d46e2f67c97f107669af3b43a13628eb5a31ad6f68f4e06f7577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPCCIVY7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFxtHUY7jRFgekgaL0AhQQSuwZvJxTYD4TpgvxsVGa%2FlAiA9iZNExVaxdm40ExIIddla2%2FuMEKHEa%2FXlSpoEIeoWuSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMpGMFSniK8qbacCe0KtwDe6Glm8HRXmZdZeOmWJ3QnMMkXZB93VEOiqRiwlOYfkweSEPedTXGB%2FVA0xu1SyEa42O%2FhPW6S2mDkmTafE8gCMrv5sTz1FIgHxCrmyIZpO1Mh3RzSRANi090v3W78ZNRWqlZdiopw8KMVNLcd8Fo9UIBpPl%2FMvQwFwBRGWXbp4IhqCAN%2BbAAtHHW57mbjrUR99x4dqTQ%2BmvhcbyVxQjX5C5p95ChIgTMfKMLcEuv6hQiC1fIxleAp14gdeWJNOgj7uJmNrWzxx%2FxHrl%2BWG2YzVZfCz9XcuvAnUy5YwRU0v3Ai9kmUOH6I8F0QIP%2FbLEgtLEOVY7uIDno1ZXfYzUSUkXeJTto%2Fhgm66RmlaiO4i3fYVQOdAKYlcnSTz7EJ5%2FjWEcZUsUfI6pcJ4h4bZEXHVkL8vQy87j1cXDUKOnr42vz%2F%2BPPFIJlvzoJLqhEmlTbCdA2gfOdNPKzDPKCg78OAmUMRj8URvaBtfKWHgVbGNKtCN24f9lhxX1RX9Ud1eyTLju4W14goAOXtoXb%2Fklb0c%2BOPCEH06yjux6wXsKH33KmRT2Sb28hRosprwlD5dzdmj1zgUIxRDJcAf8lqCFScRnwdxdTIen7rmZMz5xA0WD75c1QTL4droBQryAwmviLxAY6pgGiK%2BKt58IxYtDjtioO0%2FCzY5tUBp7FC4KKgx5TmHWBFz0EOSoWJ9xKqUnxICkuO4s9IHj25A758KBa9QcuEygbdNf%2FgTrZhAvKirT58%2BKBwijuASBV9Wk2tyud8k1%2BmJm5a9B%2F2q9Skuhmdw7SNj5Vtq3P5LKkF5FI25%2Fgk22U8U%2BgRL1LUu54WTmB99Y7L2ivijbC4gKTgL6f7clVci3sO93JX2Ju&X-Amz-Signature=fa48ac865ac3c2eac04662b0feff17a095f831f14851af5441a6c0b391c5b7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
