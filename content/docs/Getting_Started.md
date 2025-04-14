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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWABQ4P6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCbmoNHQUtX4CMYXXFV6xgaHUHbAByAsIjOlEUY65HZJQIhAPO%2FoRiuMAaZjlHAlWw1ZfRAGn3IUAPfmfVhpRndbTblKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUXnfq5H1BetROTbgq3AOXNfd4x0BAGsSxXHVzyuhQIVodqntlsmqhxeApqZ2qTL8M8C5%2FMplqh0x%2FjUqsQzsdM05Src5q2n7K83Ra%2BpzdCuL%2Ff4ncz6j9%2FtAasrtAn4ai5kqTO7QKiiZE0svrgYiIHgH9btgqjeJnOuudKcU2D0nGTq4ja5PoiwT55t4QxBm1WuS3FlzT90LtOJZO7gln03HriZwohVpgXCbeKyZoMttjoDRNfR22IoI394DIQawFQ6k4t4BV6NpD7lCu%2Be6LbkAPIwSno8uJMWe6FTr5XujfuNqOb6P%2FbyOXKv%2FXZ7%2Fngr6bwEw2IBaVKD1%2F%2BIrV3aD5AhHQCZf4%2BXlk91nuuzG4vl0AKXndaWRv2yG4YPyFxUReBlqFiBBmSSfxtVIm5TJbLNz3r750TQfG0qmKhqm%2FNjZNviTuU8qFYzBFb%2F%2FrVHRDSaLLdjgxmRnxI7evhVrg4v%2Bvyp8C13H3XOJUMRiu1ShD5tKs5F8nA3ro7ODYFlKT%2FG2RepZd%2Bz4sLULz%2Bi47XrIQS6Vjo98v5dYRtL4ulY9%2Fz%2B4JQOukhVf7nJGaPJZmDrnPTa8QyPVzoqOqHTPyV80TtbcrQEV2p73A79i3mL4NkufiA%2BEAmc4ZdnqbeWcxAuDx9iJyaTCFgvG%2FBjqkAWkVckoD0cPuoTgG0ZQZODmjGR1NNv1pNla8m%2FsT1V2YcuUk1rEC0YQc80dFIjEpGhdMZZ4FPfgoxIGO%2BR%2FxmpoQoZK0ch74jI9pXzcRokphkC9OyxIbk%2BhYf0o688ZZfMu24gd%2FSpP3Q6Cqu8O7m44Uq6r1z%2FqrvS0LFZF0sYatWb6fYjjDtOuTGtx9886N9WOrYixufef99kLjIjlmHHvK3H7l&X-Amz-Signature=da2990ed68728eedd709cdddecb7fe1548e9f2bd2f579a300bc07a237f39a017&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWABQ4P6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCbmoNHQUtX4CMYXXFV6xgaHUHbAByAsIjOlEUY65HZJQIhAPO%2FoRiuMAaZjlHAlWw1ZfRAGn3IUAPfmfVhpRndbTblKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUXnfq5H1BetROTbgq3AOXNfd4x0BAGsSxXHVzyuhQIVodqntlsmqhxeApqZ2qTL8M8C5%2FMplqh0x%2FjUqsQzsdM05Src5q2n7K83Ra%2BpzdCuL%2Ff4ncz6j9%2FtAasrtAn4ai5kqTO7QKiiZE0svrgYiIHgH9btgqjeJnOuudKcU2D0nGTq4ja5PoiwT55t4QxBm1WuS3FlzT90LtOJZO7gln03HriZwohVpgXCbeKyZoMttjoDRNfR22IoI394DIQawFQ6k4t4BV6NpD7lCu%2Be6LbkAPIwSno8uJMWe6FTr5XujfuNqOb6P%2FbyOXKv%2FXZ7%2Fngr6bwEw2IBaVKD1%2F%2BIrV3aD5AhHQCZf4%2BXlk91nuuzG4vl0AKXndaWRv2yG4YPyFxUReBlqFiBBmSSfxtVIm5TJbLNz3r750TQfG0qmKhqm%2FNjZNviTuU8qFYzBFb%2F%2FrVHRDSaLLdjgxmRnxI7evhVrg4v%2Bvyp8C13H3XOJUMRiu1ShD5tKs5F8nA3ro7ODYFlKT%2FG2RepZd%2Bz4sLULz%2Bi47XrIQS6Vjo98v5dYRtL4ulY9%2Fz%2B4JQOukhVf7nJGaPJZmDrnPTa8QyPVzoqOqHTPyV80TtbcrQEV2p73A79i3mL4NkufiA%2BEAmc4ZdnqbeWcxAuDx9iJyaTCFgvG%2FBjqkAWkVckoD0cPuoTgG0ZQZODmjGR1NNv1pNla8m%2FsT1V2YcuUk1rEC0YQc80dFIjEpGhdMZZ4FPfgoxIGO%2BR%2FxmpoQoZK0ch74jI9pXzcRokphkC9OyxIbk%2BhYf0o688ZZfMu24gd%2FSpP3Q6Cqu8O7m44Uq6r1z%2FqrvS0LFZF0sYatWb6fYjjDtOuTGtx9886N9WOrYixufef99kLjIjlmHHvK3H7l&X-Amz-Signature=ee8b2baeb3b9e117e6f169cff6a205fbd8e178aeead91a68edc3f75eeb5a4c61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGHFEH2G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDdnOCOCAxgVI2QV9cOzZg%2BtmAhva9VPODBjjyVayUEfAiEAt%2FFjQMHKIDxutPlwZSvJX0EWvRD9ohNHhv1tNGsLJaEqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGUc%2B%2FnNIS389l8%2FircA4AtNEIFhljbnXlcGrNpca7XQaWV4rLJ5oIe1NX2voqF%2FyZ9DTS6c9xeuYJZDjzdRzCMUBU79UrDigtX%2FREJloe9DHI7VqqKuIMNJrJwu5OjP4q3JycDOh62hwjmMYUZnx%2BaEyACgStcR0UnXPNcrq1%2F3GbkCFc9ynsZ%2BpVa4lUIUpp%2FTHDLsUDZ35c0RA0YSkXoqGN5S9YtKSqKBBEVXJBBsxgVFkfcl3OiYwOHXCLYipmbfvH6w3OZqDqfV9euyQlVDZ1gmruWl9%2B%2BY28rATKfBfOg1DQmC30nOSTiGBd%2Bu1fo8xUAFS1zzmktb%2B2dej0Mqz%2FtYVyzI%2BxB0%2BDou8ofeahEYu2%2B5SND%2BUidJOGj7PnCqUdyGyDZ1dqN3D4BOfk6sIwxTLu%2F5WE0eMdgp2hhqo0vSgz9rDwDebvKMusMcUmZSFLROlLADs7ifVlHHDnHYUrmNbs3TfQ%2FG213FrrfDe9nE2Lo8vEThvSJmvtcc4oKiilnem3TPUP3%2B%2B9ps%2FhCPcX%2FbrUyYQtrJzacIt1WpnLQidbQw2MGCyPbqZPjC8CKblRn4YefO%2FnJ6%2BW9iX3KRrPmSJxHWdIM2hfQc7tADtCR0bGHA6KCb1IVwL8te5suJ%2Bf%2BgEWvEkjoMKCC8b8GOqUBsGDi5z8ovJn77s94Aa9rFz0nf4%2FXFs9BbmIg2n5v7SbmSGVA4cDdg8vPgDv3EXbAMyMm71tesuXzmmJGDg67mY7AjCPugwH8kVFm%2BrGdygWFsuFnA8hVuLBZjV5cZ33uHxZ7T8S7W1Hxx5nvg%2BLCtiX45zB0x97w8exUUHOmqDbV2wTKadt8SH06YwKiWNAZhceCSN1OMwG3KA7Byw8zAeKN32b7&X-Amz-Signature=8672dc9c30bd7d6e97842f093f0b50af931b1ca117998e5291653037def7859c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646QGTF5K%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCMcfkx1WUZApctPy7GT9SVH6jSIVizajh7K7KYp8TrbQIhANZXTcCRwqstzR3jv%2F%2BuZkiDjpMXqN%2BFhEgX5nAsWLktKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx37hl1EyIFlS3Y3Aq3APxL6709%2BC9SorkPtv7HjyRBqp4n57vs9sRkeBLjl5K%2FtRH1bM4%2BEcGeqb0emXFn4xulSDw0V9x%2F9NaJAW1cPNOVV%2BTUKol09nK0rDhJGRBGhBs6VEUnrdWyUd2bXVZnqO4jZzJYfoR7zh8mIeJoWEkxxnOBu%2FFHhAOr8yQGeNSngPGLt2Optlff5Ca2BO%2FFyJoc5SEx9sZqJdWo11Bxa%2Fwa8oVSnAxrp9f5KX1Je0cSKExhaqPV%2BQm5%2FPzLlI2MdO9nUebQjXxzdnl20K%2FooPihKXWRMrWZ7G3PoNWD4DnYApjTeRi%2FbHS6%2BtIxhU7NNRGipEoCD%2BSiNpIfzYhJTm4tiirj%2B3cHpbCK5ONRrDDiKcweVbhQI0%2FUp8j8EqdhC1kYf5LNs6AJD4EH04yxhLDb3jZef1kmj3fZOoW8Pvd0pQ6ypkUd33wdGKx%2FZE0n1658J4%2BuKFxCLBwZpMEgfHJm0C6bKXDwoOcvfCAa6%2F4654%2Fw3xQiENAAya8woZWau7om2Xuxw52%2Fc4FQ2LXcR%2BvSonH8h%2FJ68IMQ%2BfZECBMn%2Fr%2BIkgjLAQQe4N9qlWk62EEaOv5KbhZiwfHfD89fySyvUbYEZ3t9aPT5NsJf4uEDth3XgFz%2Fishl14GgzDygfG%2FBjqkAZcrmzJ%2FPApFBc4LdvSHiWDJeyWaK1%2B6rEQKSiwA8iuxkIOR4jLlsd3kep%2FRjOSBwi4ZLhrIz4Iqn5MT2Uk5NK2GHYZixN8pqGYk9Gx62Y8E3gXMt6Fk%2BSM2vVa%2BSkMxWPmH0bAvMG%2B0atSmtV%2FqXp7cMDD1pVLUSVYI%2BQGuDqP2pbBjImKX4hWG3%2FAO%2BJ%2FVlomThHTS6YKtixJO57IUkdNKPq%2B%2F&X-Amz-Signature=35d1b3f66c4678efcb0a48ca537dd11e19708d2925528ddaa6193629e15ec06f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWABQ4P6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCbmoNHQUtX4CMYXXFV6xgaHUHbAByAsIjOlEUY65HZJQIhAPO%2FoRiuMAaZjlHAlWw1ZfRAGn3IUAPfmfVhpRndbTblKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUXnfq5H1BetROTbgq3AOXNfd4x0BAGsSxXHVzyuhQIVodqntlsmqhxeApqZ2qTL8M8C5%2FMplqh0x%2FjUqsQzsdM05Src5q2n7K83Ra%2BpzdCuL%2Ff4ncz6j9%2FtAasrtAn4ai5kqTO7QKiiZE0svrgYiIHgH9btgqjeJnOuudKcU2D0nGTq4ja5PoiwT55t4QxBm1WuS3FlzT90LtOJZO7gln03HriZwohVpgXCbeKyZoMttjoDRNfR22IoI394DIQawFQ6k4t4BV6NpD7lCu%2Be6LbkAPIwSno8uJMWe6FTr5XujfuNqOb6P%2FbyOXKv%2FXZ7%2Fngr6bwEw2IBaVKD1%2F%2BIrV3aD5AhHQCZf4%2BXlk91nuuzG4vl0AKXndaWRv2yG4YPyFxUReBlqFiBBmSSfxtVIm5TJbLNz3r750TQfG0qmKhqm%2FNjZNviTuU8qFYzBFb%2F%2FrVHRDSaLLdjgxmRnxI7evhVrg4v%2Bvyp8C13H3XOJUMRiu1ShD5tKs5F8nA3ro7ODYFlKT%2FG2RepZd%2Bz4sLULz%2Bi47XrIQS6Vjo98v5dYRtL4ulY9%2Fz%2B4JQOukhVf7nJGaPJZmDrnPTa8QyPVzoqOqHTPyV80TtbcrQEV2p73A79i3mL4NkufiA%2BEAmc4ZdnqbeWcxAuDx9iJyaTCFgvG%2FBjqkAWkVckoD0cPuoTgG0ZQZODmjGR1NNv1pNla8m%2FsT1V2YcuUk1rEC0YQc80dFIjEpGhdMZZ4FPfgoxIGO%2BR%2FxmpoQoZK0ch74jI9pXzcRokphkC9OyxIbk%2BhYf0o688ZZfMu24gd%2FSpP3Q6Cqu8O7m44Uq6r1z%2FqrvS0LFZF0sYatWb6fYjjDtOuTGtx9886N9WOrYixufef99kLjIjlmHHvK3H7l&X-Amz-Signature=a1955091d0a435ef70340e3a4d1544162bd590b1e265b59b3f5f16cad420377e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
