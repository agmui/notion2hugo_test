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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIGOZJZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGC8fQabDsTp3OKbnNZU6pv%2BPZjABNn7emqrOGOumYicAiEA1mgMlsCKPLbcd5Iw0o4pWZ5%2F4on2DLSkTgh3lQtnN%2BMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO7uiJiZMQnz%2BfhSircA2pkT60O3g6fhTWNyawqcVuulMUWgFETvo2buc7TcNcC2Wc5engkpkPDykNIGnqbNAMaWCzTIBnhKGcdwUZf%2Bi%2FxNQXi1wYWqK5T6oPH3YuIKZK%2BpPDU29vtJUqn5ABEQ74ZfERjajP%2BgbjX0VWg1jhEPX5yVx%2Fu0ly5prIjW0grw16T7RoJTkyi0FvQfcHuPNVu3sqMwzNWxUSjHE4lthR42WIBSeWWH7s7yflJQRYRMO1NOY8aVVUxkvhkjXkQA%2Fg7DskBYGhFeaU12QnGumzKWqJ%2BGgqqxUwdrOk65liJ1v1bWM8Hi53aLOMhB7vrFFQkzWWpEd6GQoIxtyHv%2F6kROPibOHhss960%2BAb%2B5lnrsQYd0ceD6q4YAEoXSSHV3aC8hswUb3b6v%2FWKz4W4JMW%2BUD7fbmXjlhA%2FHinHV8fSa4x0oHuPPgGuDM%2BqZIHTXKLQ1w9%2B%2FwhaQDpHVd0P7zbsf4WwqcovvQ0PlX2OF%2FiQSkyy%2F1mQlEfHv2aUVpVD%2B6sGwrLqIZLmi%2Fau5AkZnfTyqPPAkwZ3KTl344MjAYnppZ3OVd5sbAODYVjALIjg3fBxTcX53nHiMZnlPq1lp%2F7CkLVBEc3PCHWv6QbGNQEvBj71ATtwQXaLvdRiMLOylsIGOqUBegtWeuax5a4bJP1iidU4%2FU7xsfo4nwKwJ6aqvPFXy0gpPkkXT9UTXb8FfLe2I9Lqd3QEzfAaavz7vDM6qoaa4GkgV5Z8oLr4vJ0jvsm%2BpiQ1Jn%2Fsrp9eTG7BZfir%2B0fqfx8rMxRR093zogZZqfuMNp7z9SwMD55jAye60jCQUgPuLb4rUi54JleLG3n%2B5dynR3H%2Fn3ypNHCRF4ijBewMYsfQhmWp&X-Amz-Signature=87f4c2e9f3197a49a824f6e7bb56ac518d4f484fb62c24419184444d41ef3504&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIGOZJZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGC8fQabDsTp3OKbnNZU6pv%2BPZjABNn7emqrOGOumYicAiEA1mgMlsCKPLbcd5Iw0o4pWZ5%2F4on2DLSkTgh3lQtnN%2BMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO7uiJiZMQnz%2BfhSircA2pkT60O3g6fhTWNyawqcVuulMUWgFETvo2buc7TcNcC2Wc5engkpkPDykNIGnqbNAMaWCzTIBnhKGcdwUZf%2Bi%2FxNQXi1wYWqK5T6oPH3YuIKZK%2BpPDU29vtJUqn5ABEQ74ZfERjajP%2BgbjX0VWg1jhEPX5yVx%2Fu0ly5prIjW0grw16T7RoJTkyi0FvQfcHuPNVu3sqMwzNWxUSjHE4lthR42WIBSeWWH7s7yflJQRYRMO1NOY8aVVUxkvhkjXkQA%2Fg7DskBYGhFeaU12QnGumzKWqJ%2BGgqqxUwdrOk65liJ1v1bWM8Hi53aLOMhB7vrFFQkzWWpEd6GQoIxtyHv%2F6kROPibOHhss960%2BAb%2B5lnrsQYd0ceD6q4YAEoXSSHV3aC8hswUb3b6v%2FWKz4W4JMW%2BUD7fbmXjlhA%2FHinHV8fSa4x0oHuPPgGuDM%2BqZIHTXKLQ1w9%2B%2FwhaQDpHVd0P7zbsf4WwqcovvQ0PlX2OF%2FiQSkyy%2F1mQlEfHv2aUVpVD%2B6sGwrLqIZLmi%2Fau5AkZnfTyqPPAkwZ3KTl344MjAYnppZ3OVd5sbAODYVjALIjg3fBxTcX53nHiMZnlPq1lp%2F7CkLVBEc3PCHWv6QbGNQEvBj71ATtwQXaLvdRiMLOylsIGOqUBegtWeuax5a4bJP1iidU4%2FU7xsfo4nwKwJ6aqvPFXy0gpPkkXT9UTXb8FfLe2I9Lqd3QEzfAaavz7vDM6qoaa4GkgV5Z8oLr4vJ0jvsm%2BpiQ1Jn%2Fsrp9eTG7BZfir%2B0fqfx8rMxRR093zogZZqfuMNp7z9SwMD55jAye60jCQUgPuLb4rUi54JleLG3n%2B5dynR3H%2Fn3ypNHCRF4ijBewMYsfQhmWp&X-Amz-Signature=9f98fd1dd7733f40e0ec635df24c9cc5e2680017bdbd85a5fc9288c1ea186d88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIGOZJZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGC8fQabDsTp3OKbnNZU6pv%2BPZjABNn7emqrOGOumYicAiEA1mgMlsCKPLbcd5Iw0o4pWZ5%2F4on2DLSkTgh3lQtnN%2BMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO7uiJiZMQnz%2BfhSircA2pkT60O3g6fhTWNyawqcVuulMUWgFETvo2buc7TcNcC2Wc5engkpkPDykNIGnqbNAMaWCzTIBnhKGcdwUZf%2Bi%2FxNQXi1wYWqK5T6oPH3YuIKZK%2BpPDU29vtJUqn5ABEQ74ZfERjajP%2BgbjX0VWg1jhEPX5yVx%2Fu0ly5prIjW0grw16T7RoJTkyi0FvQfcHuPNVu3sqMwzNWxUSjHE4lthR42WIBSeWWH7s7yflJQRYRMO1NOY8aVVUxkvhkjXkQA%2Fg7DskBYGhFeaU12QnGumzKWqJ%2BGgqqxUwdrOk65liJ1v1bWM8Hi53aLOMhB7vrFFQkzWWpEd6GQoIxtyHv%2F6kROPibOHhss960%2BAb%2B5lnrsQYd0ceD6q4YAEoXSSHV3aC8hswUb3b6v%2FWKz4W4JMW%2BUD7fbmXjlhA%2FHinHV8fSa4x0oHuPPgGuDM%2BqZIHTXKLQ1w9%2B%2FwhaQDpHVd0P7zbsf4WwqcovvQ0PlX2OF%2FiQSkyy%2F1mQlEfHv2aUVpVD%2B6sGwrLqIZLmi%2Fau5AkZnfTyqPPAkwZ3KTl344MjAYnppZ3OVd5sbAODYVjALIjg3fBxTcX53nHiMZnlPq1lp%2F7CkLVBEc3PCHWv6QbGNQEvBj71ATtwQXaLvdRiMLOylsIGOqUBegtWeuax5a4bJP1iidU4%2FU7xsfo4nwKwJ6aqvPFXy0gpPkkXT9UTXb8FfLe2I9Lqd3QEzfAaavz7vDM6qoaa4GkgV5Z8oLr4vJ0jvsm%2BpiQ1Jn%2Fsrp9eTG7BZfir%2B0fqfx8rMxRR093zogZZqfuMNp7z9SwMD55jAye60jCQUgPuLb4rUi54JleLG3n%2B5dynR3H%2Fn3ypNHCRF4ijBewMYsfQhmWp&X-Amz-Signature=0437cc9088880fbadfb12a9df2a99bff13f89ab98f5b870f33d65ad0114b699a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWQPLRV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaizQPUeKw%2FfH8MGA6DXt8%2FNHDC3NkV1U6tjBPlz8LaAiBvWGfmG1aac2QtEpTTjvZ%2FGwRT5UZqPLERtZWuwLAF%2FiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaKyIle8dezL3TY97KtwDOSVzmTHQ6a%2FHO%2F2QjxnQUECtK8aC8oDY3xJSzyCkRY3VECCiGqnS6doskqFAiTPCNSefqiwbsJ4bKmopv7iAGN6Ml%2FelG%2FJ0GAnTh5Nmq7HKtspe90xfokcwzDvAy%2F8YidJay2XlifuPKOZ0C5GkAEGN2vEMisQOOW6y3ahaqat%2Fgb7TEO8jPZK%2FfaSZzIYEH78Xydx3zFOVyUYtG8WfzTyANEFPpvB7O%2FR2FIPYnTOqMVUysetwb%2F%2BOUzfQ8h009gCYH07wyGlzBDxitMdqvCOLhrlojmZ%2FLH%2Bz8wSJt%2BMUBT%2FWjJ6jChvhRuIZT4KzvlMZGJF%2B7mCH5hSFroedAyqwcdeYy1y7EEuLQV%2FVUEZzI2Qd2F2BW8CblMHrHkO1F03KexE7KVHU7zfOhCTvjwVRVnVstrIHMwCtrIeduA88TzkgYVNhyODH4TktRTp5%2FwJZWZZ2WzDoTSOPrATqek4944L35l2wP4O25NR4K1GkpxWn62XQ7fTEdUPLin3IbsEwmsdzFHu5X1yWM9Df5zUOqWI9mtg0JbGzlOzlnLFwsxPN16bcMm4RXh3A1aZbrstwb%2BIki44qQvyI8RwGMLgOInJC%2FOgFQA1WIf34OYSz98lJIy8NUgsa2LcwvrKWwgY6pgFC8JNZnPlDsaEQqfFIzhfueaZT1h1HGORKHudeH%2BRhjG82%2BYWaGbznBzjhm142ZQPnE9yb92%2BNrzGfM25WS0Nd%2B0cCIbpGRpAmH8dtYgOt8IzHS%2FdjPEciMIhNDAK%2BnJEeBVqgnqmAyfsJyAf3NHckzZB0N00d7HfN%2Fjf0Tl3%2BIbX3GPND90Moq7BofXp72JEE5F7xSmy3mJaN%2FRD%2FJZ6FR3%2FYWHPy&X-Amz-Signature=9cdc9d062e467de8180a436736ce5478d6f33e58c2145e2c24c9260582b4bd44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S6KEVJF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJr%2BAHKXRDc6aCmKMxuD2PWOmLBihFOAC3me2Wt78FCAiEA8XXxoa4hAIJ%2FZcXowgndTerBd%2FeEfljdLvjG455LYK0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHUdCvCqb%2BNt6uvaCrcAz%2FR%2BXuDfe1lZYoA43OkBaV%2F%2FqyZPN9x7MgO4fMSiZ%2FftThTPtAfngWmUdnI4OKeIKi8yjx5EQXwwiROrzmsJAsxLRVwzRniraDyrRsoJB6E7qHDyougU8GNOJ7qvYNROK5T%2BK4IpFkn5%2FbSlGxzr056xrx52ThOJO0u9TzQ3Sk7kP664spXWeZ%2Ben%2BAFrjtOIK4SDxmYL%2BaZIIjTzbip32xTDtTHx8VHt0PjLLAwLU8g8iVQ%2BfU7j9yGhEX0W0P1yGtmk09RZe8XTuKe8QgcJoLNVrbhJrI6ZLWVPTlFF5oD01ifpxMPpPsrXOafKxE6v1wFzC%2FdouLCy%2B2dJoJp9LjosjUoXd2KD7tVyG53KFJweg2mAijj7TLYQNTcmObg86sNzV9J%2BRCIZ6o%2FxfRQZTviJN794O9FlazKgX1T%2FeBqRIMxqVUsSN%2BYe7ir5QlBGjxBBoDX0xYGXsZBKqVDv3qhnTXF67Tcl1kPV5OHqCLQJt0PdDKsGRQH1SnqR29KR%2BLgu6KUiWTUz%2BLzrJxE0AZeTxG4oEPb2nIfYO%2Br1Ncl7vg7BzaoHHiSbm5fFf9dIpkKGRKpyUIBBcvRjZiuTnl9FmQ8Wm9buhKqhkZ5vXo1m%2BABV8DOzCg7DICMPzplsIGOqUB9FZOIgxZO8CgdRCoIyH8DsTBV3Bq8j9mxP0wNdAoYqoqaXoBhrWBJCDbRV%2FAPKlaCN93pfaoxcD2gysKl1Fsj%2BhyUn5OlJ5vpp1xB5Oj2eSXmuLDvYziZl36HIyZwA7p3DwDkbMLd166t6M9pa1th5G4gsFm5YlaN5d%2FSqeOD6hz1TxD9YGdq9ENUo4g6Z8JRZ6ujn7P7KZK0DpMl65TgFnNc%2Fvw&X-Amz-Signature=276cef76d2ab8b4b4dd1b7879b84c7c2531e88757fde603754476641994bd2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UIGOZJZ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T190154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGC8fQabDsTp3OKbnNZU6pv%2BPZjABNn7emqrOGOumYicAiEA1mgMlsCKPLbcd5Iw0o4pWZ5%2F4on2DLSkTgh3lQtnN%2BMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO7uiJiZMQnz%2BfhSircA2pkT60O3g6fhTWNyawqcVuulMUWgFETvo2buc7TcNcC2Wc5engkpkPDykNIGnqbNAMaWCzTIBnhKGcdwUZf%2Bi%2FxNQXi1wYWqK5T6oPH3YuIKZK%2BpPDU29vtJUqn5ABEQ74ZfERjajP%2BgbjX0VWg1jhEPX5yVx%2Fu0ly5prIjW0grw16T7RoJTkyi0FvQfcHuPNVu3sqMwzNWxUSjHE4lthR42WIBSeWWH7s7yflJQRYRMO1NOY8aVVUxkvhkjXkQA%2Fg7DskBYGhFeaU12QnGumzKWqJ%2BGgqqxUwdrOk65liJ1v1bWM8Hi53aLOMhB7vrFFQkzWWpEd6GQoIxtyHv%2F6kROPibOHhss960%2BAb%2B5lnrsQYd0ceD6q4YAEoXSSHV3aC8hswUb3b6v%2FWKz4W4JMW%2BUD7fbmXjlhA%2FHinHV8fSa4x0oHuPPgGuDM%2BqZIHTXKLQ1w9%2B%2FwhaQDpHVd0P7zbsf4WwqcovvQ0PlX2OF%2FiQSkyy%2F1mQlEfHv2aUVpVD%2B6sGwrLqIZLmi%2Fau5AkZnfTyqPPAkwZ3KTl344MjAYnppZ3OVd5sbAODYVjALIjg3fBxTcX53nHiMZnlPq1lp%2F7CkLVBEc3PCHWv6QbGNQEvBj71ATtwQXaLvdRiMLOylsIGOqUBegtWeuax5a4bJP1iidU4%2FU7xsfo4nwKwJ6aqvPFXy0gpPkkXT9UTXb8FfLe2I9Lqd3QEzfAaavz7vDM6qoaa4GkgV5Z8oLr4vJ0jvsm%2BpiQ1Jn%2Fsrp9eTG7BZfir%2B0fqfx8rMxRR093zogZZqfuMNp7z9SwMD55jAye60jCQUgPuLb4rUi54JleLG3n%2B5dynR3H%2Fn3ypNHCRF4ijBewMYsfQhmWp&X-Amz-Signature=b058692d56025757628652b1c36934364c43d23ff5c58a7c0b34cd954dec8abe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
