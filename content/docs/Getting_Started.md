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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663IDC2IJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxlhp3EC7iI9%2Fej1dJW%2FDWfzIwPJ7b1b3zXRxIJviNcAIgMgPub7oUFd0QNS9xdwR1sgxzvk6ytalDkDEzp111JgAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPwhiJ1NphNdYlApfCrcA5NqBZuL6W5L9n930UjY5xTiJA9czoIA54kFcA8CelIVjF3FTdaGumkvzLpc8aV5%2BVhd%2FKBG48Y1XK0rfeLT4%2B8x%2BNSfodtdBVDy9HbuNeNob7ra5Nw691h0EwHc9jTcTRc4BVy2Dmtc9ZWKA%2FjbOE2vQjqJUOG879Gy81JpQItRoZLS04NI41LPES%2Fe7M8BXKQmkidtn8WlfTLs%2FhypQkZKrJYjZa3PqtW3Mpm8kHOifb5MSUkf4mvKcTC4P1l6mQlQF%2BImDc2qWyQMoWPV4nc7LBBjHJR9q86mjl%2Fmrl0hsC1ZEtOLvf0hP5fwnYZdVgVSnbLPAXGgJJ9GKWcMWMxLfrnm7CybsUyhh1rmrPxxsiBHiYEqQ%2FEV%2BeB9ODrLZdJRd7RpWjGoRG9nEq7cMEu5p9LCMpZUTBBknca2f6bsf6vbTvVnBTyDEvBurG750hczsjMNTTmF2bQmB74%2FW%2Bqdr9iQf0BG3tRPlabVjHu7ar%2F2JZ5axHT5hEY33twzAHvZcO4UpkQSDTclO70JBIgI58yewdNTSeAAmkFFttags%2Fe4leY29F9%2BwUWNvtPW%2BrHYrONjQiXyUQiEtQjPp1YFU4p6cbUYMrfsdCPRmIRHj9XBFrhbhIN21%2FcaMMOOicAGOqUBQn25w8XmBpRUHzPOeAy2MQ30MHz4luA7hEzHNSUMq2EiUGwQcMjuS65XYKNJUGsN01bj5IlHB6dgcnB81pjYHmlBG%2BeTVehaxYIm3AsFCP7WdtT1PuyeHQyIOgbK3RYX5gxBtgoyuU8tbUBdGDKtIFB63sAnxl0TMhodLy9fNSK5TCRCTKZd9VLhgiTQDfQszxgELUIshTtiWhgTDWy0ebTInjsG&X-Amz-Signature=fec5857ab0dda57d4061573a859d487a3731bc97610341bc02c39d3e788c14fc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663IDC2IJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxlhp3EC7iI9%2Fej1dJW%2FDWfzIwPJ7b1b3zXRxIJviNcAIgMgPub7oUFd0QNS9xdwR1sgxzvk6ytalDkDEzp111JgAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPwhiJ1NphNdYlApfCrcA5NqBZuL6W5L9n930UjY5xTiJA9czoIA54kFcA8CelIVjF3FTdaGumkvzLpc8aV5%2BVhd%2FKBG48Y1XK0rfeLT4%2B8x%2BNSfodtdBVDy9HbuNeNob7ra5Nw691h0EwHc9jTcTRc4BVy2Dmtc9ZWKA%2FjbOE2vQjqJUOG879Gy81JpQItRoZLS04NI41LPES%2Fe7M8BXKQmkidtn8WlfTLs%2FhypQkZKrJYjZa3PqtW3Mpm8kHOifb5MSUkf4mvKcTC4P1l6mQlQF%2BImDc2qWyQMoWPV4nc7LBBjHJR9q86mjl%2Fmrl0hsC1ZEtOLvf0hP5fwnYZdVgVSnbLPAXGgJJ9GKWcMWMxLfrnm7CybsUyhh1rmrPxxsiBHiYEqQ%2FEV%2BeB9ODrLZdJRd7RpWjGoRG9nEq7cMEu5p9LCMpZUTBBknca2f6bsf6vbTvVnBTyDEvBurG750hczsjMNTTmF2bQmB74%2FW%2Bqdr9iQf0BG3tRPlabVjHu7ar%2F2JZ5axHT5hEY33twzAHvZcO4UpkQSDTclO70JBIgI58yewdNTSeAAmkFFttags%2Fe4leY29F9%2BwUWNvtPW%2BrHYrONjQiXyUQiEtQjPp1YFU4p6cbUYMrfsdCPRmIRHj9XBFrhbhIN21%2FcaMMOOicAGOqUBQn25w8XmBpRUHzPOeAy2MQ30MHz4luA7hEzHNSUMq2EiUGwQcMjuS65XYKNJUGsN01bj5IlHB6dgcnB81pjYHmlBG%2BeTVehaxYIm3AsFCP7WdtT1PuyeHQyIOgbK3RYX5gxBtgoyuU8tbUBdGDKtIFB63sAnxl0TMhodLy9fNSK5TCRCTKZd9VLhgiTQDfQszxgELUIshTtiWhgTDWy0ebTInjsG&X-Amz-Signature=994c66079003cfca72ecdddc78a78b491e32c2d8313c0eeb93e43efd4a65aad5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664U7YUWP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpllONt0qcUByOt8bDDtab2pExnJbZHGMo0A4b4fgaowIgE%2FSKLTohJ%2BlS32J9NJgSumrctrDuSP9jKXrYAVPId5Mq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDB%2FB9gcz%2BogRVkgRkyrcA3mJFw1yuCN0U5PqnhJk0ORnv2joqyrTqyxAdYD2BGh%2F5BJJiI5aVzUF4lT1CXHuzqvJpDfEt5gyE6%2BKqHpqkRBTsHR4JzDAiNmo6UWPzZ%2FAlIlQeChbLPPLbMSmFL%2BOUQGaHz9l%2Flstoe3rpzqKkdOnCbLWLic%2FoQYAgHo4xknfGp8563Oo7EpukzIkO82%2Fmr7Heqn3Cg2ldYfANQtffX0dV0hIt1lub1s2B0tZmycsJ3AwrDmDuvYRJG0fiXP6lXCSGNFxVo8K33yCX%2FYpOXaEF7jFS%2BhVHLAk2BnWhWUfOGjqTBaMl6RQfiK00mYrQCzvllhzb0At2HQ6H8rZgGddz5qAWNDMXS8%2FBvCMfq0I7YLB2yRlVppxAs3a6KtmA%2BOLBf7Xb%2BHPB%2B6u8n16AGPMU%2B%2BR7ZkflM7M0RhYFQvq6uUje40BqkDxYMgiJLEX7WiU61g8iEkcx3ny3HK%2BQgK%2FuDpPwBxJ4%2FmSJj6ilLoZbA9kJC2Ox6a2m3imzfnbFzuiVOHssM9LunU5zw0cGA0ZnwKO5Fh9NK1M3iFcAKhKsCBitPuSDy1Vw88JAi6LpdBdlND1A06sTEeTsFyjrEUV85FFuUNDVMJ0jhBwel9U2KaJhCW34o0%2By1elMICOicAGOqUB%2Bh5pYPXhDCMi%2BRgUbAXDApbWQ8PTrVUoY6hKZzEKUQ4SdAYawBEdE8%2Bgz2s4x5Y8o4YjT3OnFMiDItJnREATmVInHyK71%2FYR4B%2F1dictcBFcReClSfjiFQmNiJbeTfic%2FUH9DYUPjTB%2BYT7cOtrrPJNO0IFW5PlNrTZxrBey%2FeP6MUUPXvEeGS9dSikYYk%2BvV4Shqi57Yc5rjEZ8iD%2FSOelu1RFC&X-Amz-Signature=1fb5ee4cc0b1a6610c050d91a3896b4c025af6a67c4a614b8330737b3497adb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AKBBX5E%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNj5NShz0RrrxW5UaZkQt%2FBgci4T5frOLWKt3Yftm3lAiBRDg707PGDRE6KBuQIp0SfrZ1QCB5FABOSjkpDQiDUayr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMEJPVJQZ5s11ctO5%2FKtwDqGgM0As%2FM9DhnIy%2FKDVlbmKYzbgNdhWixRVKeqJV93j5KifKMW%2BjAjHnOmZj55HKQBP8hOmUCvI7P1D8PZMnJYlY5kOkb0sPFGR%2F6B%2BqfKWqKCSEWU%2BjtAgM2ajvUN%2FkXSv4mj2of9J8tO7l9zVrO3iW%2BYi6Iu%2BPNU3hfi7DDaleAKrihAyBH5Rp%2FtSJKlurHj2hkku%2Bd1vrTQRCXh6lGpGfxN5pAZN8pvpFv2KQHS6D53b60q%2BAQWPYWN93UwIAPVgY9fyEDw11GyHF4r2I%2FwlFuWFqUSU%2BwyuAcsZMpRhhvvQj%2FfrmWIlgtRskZWrvQ036bTl65kN0GBW5eIwIoTVsljl9bLxHzxHDeI81A00qDK%2FMj2sA9jskuMwgAMr5cxfUQYtiK%2FtEOMgN%2BH0%2BH5Kxfs50Jcr%2B35HEi8SQ%2Bzcyeu1YDIUCocyRrmzE%2BV5To7QoJlQBD4AfF1rhuBb8pAWyopp%2BlSKM0WnTLhjaActrP9qoaHihFCaAILdG6HBBa9HFVMUoUI55PwN3ajbhdugllLVKbtVoHKk7qXnaIWKA1qyaBg1zwTeBUO33UKcBzmMOjowNu1aSom1CDYsAD3GjzVdF0i2%2FcwBYKzyM7W6NzW99k%2BLvbFuWjnEwpY6JwAY6pgE9CWlpiEnCsltgvI1l61C8EtImG5ozIV3mN2fPe1I4V6Lc08uULiLambJ5kTN1%2Fvx2Ij6ehkC70vV8p3e80nTQkfSnY6ibUqXCprN3gUqNONZk3c2o9APcRzzA9pl91khyaQ7qg0KOSEOkA9bVBGxPzFT4QLwvF%2BEOkhYoGd1hla5CJPEi4Wa8n3Ti%2BDO2roBcTm8MOZ%2FH0aEtPIkoqG7tw588vbMm&X-Amz-Signature=2b3e9ef73b9dcaae403715e501a5ce73bffe873445cd346ff4ebb5c14e58ae6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663IDC2IJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxlhp3EC7iI9%2Fej1dJW%2FDWfzIwPJ7b1b3zXRxIJviNcAIgMgPub7oUFd0QNS9xdwR1sgxzvk6ytalDkDEzp111JgAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPwhiJ1NphNdYlApfCrcA5NqBZuL6W5L9n930UjY5xTiJA9czoIA54kFcA8CelIVjF3FTdaGumkvzLpc8aV5%2BVhd%2FKBG48Y1XK0rfeLT4%2B8x%2BNSfodtdBVDy9HbuNeNob7ra5Nw691h0EwHc9jTcTRc4BVy2Dmtc9ZWKA%2FjbOE2vQjqJUOG879Gy81JpQItRoZLS04NI41LPES%2Fe7M8BXKQmkidtn8WlfTLs%2FhypQkZKrJYjZa3PqtW3Mpm8kHOifb5MSUkf4mvKcTC4P1l6mQlQF%2BImDc2qWyQMoWPV4nc7LBBjHJR9q86mjl%2Fmrl0hsC1ZEtOLvf0hP5fwnYZdVgVSnbLPAXGgJJ9GKWcMWMxLfrnm7CybsUyhh1rmrPxxsiBHiYEqQ%2FEV%2BeB9ODrLZdJRd7RpWjGoRG9nEq7cMEu5p9LCMpZUTBBknca2f6bsf6vbTvVnBTyDEvBurG750hczsjMNTTmF2bQmB74%2FW%2Bqdr9iQf0BG3tRPlabVjHu7ar%2F2JZ5axHT5hEY33twzAHvZcO4UpkQSDTclO70JBIgI58yewdNTSeAAmkFFttags%2Fe4leY29F9%2BwUWNvtPW%2BrHYrONjQiXyUQiEtQjPp1YFU4p6cbUYMrfsdCPRmIRHj9XBFrhbhIN21%2FcaMMOOicAGOqUBQn25w8XmBpRUHzPOeAy2MQ30MHz4luA7hEzHNSUMq2EiUGwQcMjuS65XYKNJUGsN01bj5IlHB6dgcnB81pjYHmlBG%2BeTVehaxYIm3AsFCP7WdtT1PuyeHQyIOgbK3RYX5gxBtgoyuU8tbUBdGDKtIFB63sAnxl0TMhodLy9fNSK5TCRCTKZd9VLhgiTQDfQszxgELUIshTtiWhgTDWy0ebTInjsG&X-Amz-Signature=512547729dd18b0c147fca042284ac0313cdfc6962236d1f27000879d3680e17&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
