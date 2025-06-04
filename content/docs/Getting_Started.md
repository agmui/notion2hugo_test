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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q524EUSP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFDuzDeF7d5ZdsZEKvJFrlV2z5mTfOYk8ovvXEuqByguAiA8ysShhk8VPgeOfl%2FM1NRqSk9tvmWGhDrBRQABOJEOgSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMmfMxuM%2BupcdREUh4KtwDZqacBMGEy4G%2FN8GDCg%2BeqqBxdooKVoSETBfU8PFFXYMgtPzdkJT7QZH18QvlFXZ4RkPT1VN74Jk9qUsjklBsVJmmOUYNeFZeOuQiY5zLYT4tNk7rMdPTOOSg5MQ%2FIb7Ca55tBMVjmG5x5xzjY%2BlvA%2Fz1ApczVlVx%2BRsUvZKZvHBPnzkvvv%2Fg2PxNCMlsZelnIxtEyD7SithwgJzJ5cJUZs%2F%2B9LsGqwwJtPBVBXCcB%2BP0Pc0BlDTxEGLgqIZaw8p%2FnZIPdT1ILa9OKf%2FXO635M3w%2FH1QmWsdYsBZo21FUCAf86KEHpQ0%2FRg12ybd9XAm25egYwvRr5YpMFEL0aa1yiyK0ZCTah26s6LaV3tflUAXy7fL9tjuYp716TiqHrk11wemk%2F%2F6gdmEdrwnSVE3SSaGz2H3kNhFF%2BW9sXTa6fO5QxONo9dLJWlKlI7g6ff%2FTrsd%2BVYipdoTxKBi%2B4xHrb%2F1qLocUEfvWHl3eSLA16aRqsZAnu3qS0R9Cc%2F%2B1f5TgxACyIzPIMLA8UIeHBWnxIz0bVLRRuN6ZbPz9SY2Z0A5zEKNFV3I2FE0xPlnVTv3BBi3GgHbXtZyyvrZk7aC%2FWqAoXPda3coOVDjwl1OZRm3jon7kT4qFTXLJS0gw1eX%2FwQY6pgFDqKeX%2FwnMgsGS7wsImiUXjoDAYHfSkXiSOCnoHWyVKzXM3Hy%2B%2FjEJSahQi1EclazAqB8A66rAgXq%2FRtLJKCL7yjeW%2BUa7n3fWismONm7n1C1rTob3kx5avU8xVErT3pdH73zwV%2F8UKIXghYe6piIlJnJrIprgI19VMraI00%2FbiksB525UuXbLbxecCVhR%2F6rVg5cFoK4sgwQNDcyNLtpQPbxnqVP7&X-Amz-Signature=4455a1418a9c1e8eb7ae20f01cd2f3bbd5f548804b0619ce77a1a8a2358f5d84&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q524EUSP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFDuzDeF7d5ZdsZEKvJFrlV2z5mTfOYk8ovvXEuqByguAiA8ysShhk8VPgeOfl%2FM1NRqSk9tvmWGhDrBRQABOJEOgSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMmfMxuM%2BupcdREUh4KtwDZqacBMGEy4G%2FN8GDCg%2BeqqBxdooKVoSETBfU8PFFXYMgtPzdkJT7QZH18QvlFXZ4RkPT1VN74Jk9qUsjklBsVJmmOUYNeFZeOuQiY5zLYT4tNk7rMdPTOOSg5MQ%2FIb7Ca55tBMVjmG5x5xzjY%2BlvA%2Fz1ApczVlVx%2BRsUvZKZvHBPnzkvvv%2Fg2PxNCMlsZelnIxtEyD7SithwgJzJ5cJUZs%2F%2B9LsGqwwJtPBVBXCcB%2BP0Pc0BlDTxEGLgqIZaw8p%2FnZIPdT1ILa9OKf%2FXO635M3w%2FH1QmWsdYsBZo21FUCAf86KEHpQ0%2FRg12ybd9XAm25egYwvRr5YpMFEL0aa1yiyK0ZCTah26s6LaV3tflUAXy7fL9tjuYp716TiqHrk11wemk%2F%2F6gdmEdrwnSVE3SSaGz2H3kNhFF%2BW9sXTa6fO5QxONo9dLJWlKlI7g6ff%2FTrsd%2BVYipdoTxKBi%2B4xHrb%2F1qLocUEfvWHl3eSLA16aRqsZAnu3qS0R9Cc%2F%2B1f5TgxACyIzPIMLA8UIeHBWnxIz0bVLRRuN6ZbPz9SY2Z0A5zEKNFV3I2FE0xPlnVTv3BBi3GgHbXtZyyvrZk7aC%2FWqAoXPda3coOVDjwl1OZRm3jon7kT4qFTXLJS0gw1eX%2FwQY6pgFDqKeX%2FwnMgsGS7wsImiUXjoDAYHfSkXiSOCnoHWyVKzXM3Hy%2B%2FjEJSahQi1EclazAqB8A66rAgXq%2FRtLJKCL7yjeW%2BUa7n3fWismONm7n1C1rTob3kx5avU8xVErT3pdH73zwV%2F8UKIXghYe6piIlJnJrIprgI19VMraI00%2FbiksB525UuXbLbxecCVhR%2F6rVg5cFoK4sgwQNDcyNLtpQPbxnqVP7&X-Amz-Signature=9846dd4b30690d3db06c70e5ad2b2e96b53fa097437744ed5218a802fac423e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q524EUSP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFDuzDeF7d5ZdsZEKvJFrlV2z5mTfOYk8ovvXEuqByguAiA8ysShhk8VPgeOfl%2FM1NRqSk9tvmWGhDrBRQABOJEOgSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMmfMxuM%2BupcdREUh4KtwDZqacBMGEy4G%2FN8GDCg%2BeqqBxdooKVoSETBfU8PFFXYMgtPzdkJT7QZH18QvlFXZ4RkPT1VN74Jk9qUsjklBsVJmmOUYNeFZeOuQiY5zLYT4tNk7rMdPTOOSg5MQ%2FIb7Ca55tBMVjmG5x5xzjY%2BlvA%2Fz1ApczVlVx%2BRsUvZKZvHBPnzkvvv%2Fg2PxNCMlsZelnIxtEyD7SithwgJzJ5cJUZs%2F%2B9LsGqwwJtPBVBXCcB%2BP0Pc0BlDTxEGLgqIZaw8p%2FnZIPdT1ILa9OKf%2FXO635M3w%2FH1QmWsdYsBZo21FUCAf86KEHpQ0%2FRg12ybd9XAm25egYwvRr5YpMFEL0aa1yiyK0ZCTah26s6LaV3tflUAXy7fL9tjuYp716TiqHrk11wemk%2F%2F6gdmEdrwnSVE3SSaGz2H3kNhFF%2BW9sXTa6fO5QxONo9dLJWlKlI7g6ff%2FTrsd%2BVYipdoTxKBi%2B4xHrb%2F1qLocUEfvWHl3eSLA16aRqsZAnu3qS0R9Cc%2F%2B1f5TgxACyIzPIMLA8UIeHBWnxIz0bVLRRuN6ZbPz9SY2Z0A5zEKNFV3I2FE0xPlnVTv3BBi3GgHbXtZyyvrZk7aC%2FWqAoXPda3coOVDjwl1OZRm3jon7kT4qFTXLJS0gw1eX%2FwQY6pgFDqKeX%2FwnMgsGS7wsImiUXjoDAYHfSkXiSOCnoHWyVKzXM3Hy%2B%2FjEJSahQi1EclazAqB8A66rAgXq%2FRtLJKCL7yjeW%2BUa7n3fWismONm7n1C1rTob3kx5avU8xVErT3pdH73zwV%2F8UKIXghYe6piIlJnJrIprgI19VMraI00%2FbiksB525UuXbLbxecCVhR%2F6rVg5cFoK4sgwQNDcyNLtpQPbxnqVP7&X-Amz-Signature=4858da181898c6ad1e3329c04708a4dfef2dc28cadbbe1ae8e75ccc60380ed25&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H4Z4DQ7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCID9SiLcwohHlFf1XV0DMcRuTyXebfb8pA4AgRewm8v%2BCAiAIU%2B%2FuBVN3m5R1xxTEqRqrv2N3XM6Lwkz%2BrFSV%2Fvjn0ir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMX9aaVJr2rSm2A0prKtwDWqkiAL%2BTfQEiotfcj5hT6NTf%2Fxiif5vVrQkCNkb3QZuGhbm%2FnlMHIXtTgfjEE1xoEfrZKXLHjUNFERl%2BOe1ncjnbQ4FI%2FSMxSLKm9iwzLoWd8qINrVPc4%2FM34KmjO4arAiOsDIw%2FfcN8uMI8GnSfPHqb4TUlztVsVlUqN%2BfMt5um%2BmbxxcKZABnLVj05ZyB0Z79Kj%2Fp3Y0f7s77vPb1%2BQV%2BQDFmt2Iu%2B2NmxEJj8URiEarnvTMO2u8ADio53muMtvP0CnzP1eNe4cruU5N1T9L6ZONECmVoILmVd1iRma3fzzsbXEzQnjdnWiKH3yR7nNZ%2Fy1%2FcxNAMk4rlZVINNnB%2FWuzk4gouCFMaaDHuPGFwzpiGG7yC7G4dA5jo8KqiFXUoM0LCk%2Bow6NWdJ4eHsVLahmJfTmYYKYzFdoPtgOdHF8ZiQLQFzPqf7f2kjNMsEIITCW%2B2ggGfcR6DvlaoxMX9E0gfEQ68213D8NS5BXntpfygN05SpSfSV0TcheUVzXT%2BloFZCQRVju3lRr7k4KUXagAOxXBE9aHeZsPsu5uMul9B%2FApeg96lUtYhv7DCKWMx030r9i7bqe3eZzTyk8Bwab4RPLptOJITvwqW9nO%2FtxPXxEJLAYVE46pAw4ub%2FwQY6pgEZjOd%2BX1GKqH9%2FyuodfMyjJiCNXTAlTkEChAVthGRVbWcvJ4JfxTU%2FJrZeQ7vllSknm5JqOVpgmU%2B%2BZNJSr9jTc4p5hGjtpaSEtGQ4rJeQoWhhgXJEJGnAxbgO0u52p7rNMaQkQzMYQ%2FEbHGqhsZDXjV0JZ%2BuY0MZnc3dh%2B7X84j%2Bu6X2cFwmQqlRZjfgQLDxKyxv4g0dINV26Xhovpfvf4zI46rUg&X-Amz-Signature=3cf46ff50a87078ce5872316e115489d1dc47b59cb37bab4841876bb0aa33d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSEHYFTK%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHcXildQojpHHZgb3nIB1ta%2B8tSWPiMABnhcFfj3R3kcAiB2MojEpfW2vY4CHNQKKpH0Xh%2BLcSnRPi2kx1JS%2F4sYuSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMswZhVQgW%2FcMrSzxjKtwDukYuJg5QiHreDGeRdQCmAmnqtNZWRdMl%2BqT1kSxJJeiNUJxaPGv8CsP4k9KCJt4bUxXD4OElKpq7qyYRVOPBZkB4QtBV6OWwNvCkrUt8SoicLQzAJBT0RZ%2BnhB8TOCKMK9e%2FFa3dmjNpy%2BL7aUdcxQdevTVctxkQlZhWXteC09%2BCcdSShww9ni%2BIKNJIa1TtB41j1IU79R3Fnzf%2FCM%2Bn7CF4B1nwxKHBhHpkW1A9eEWCyNhpdFbN5EX0HpKimYL6tjcsJmz2LXrhGpFAGgHApkutssVsrc8gRpdtEZblVTtLX1rH31tIigCWRtNoyw2CnGB7zCFxQ67JueHeIQEVXf8pDomjwxJbT04kYS179VtJJoSFrSHrxX%2BT4U1l7zxUkPMr04NbksRWd9qj9j9paxaRwvj64Je3rML9xqOcgLbZUeHmEs4gEP8uouL7sZIOYsxhz3ITLDE%2FMQw138PNbciAZNBWcULUpehsdroluJBDdDh9ArNAq1%2F6Get2ZDsVZPuxmQjbFyvm1TlrpLc9KKEF%2FIayFp1AhzVIAGE%2FhjnTQgDsY0uF3Yyi%2FUmEqcHSJMkDnAzM90hRgj5aNZSqUlJ5D0MuFbLBbuRd6xJp8VjoEt3pmAVRQ844XGQw2Of%2FwQY6pgHyR4qm1dZsyMSS5%2FJH4Yx7kWoQSy6WCQZ5180gA1bFE9cpPmWt8qPaG9nUcSHrT11Ap51u4%2Fjg8INQI1pdJ61zNXXxuxUqrWX6P2kkHlBM%2FS%2BtFzvb3%2BT6gQCY1ZJPSNMkhT3xdNjvUKrrcr%2FpIq5ErNq%2BJjG%2FfzZiJLUMZRy9SYQzqKiJV1r9iqZRFBeusrpBe3yzYCrLE%2BZM4g81NRb1VX4X4Ze8&X-Amz-Signature=d537a6b5f7d898c490b505240363ad402dc3e92a8b332f17c4d1a591ab934e76&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q524EUSP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFDuzDeF7d5ZdsZEKvJFrlV2z5mTfOYk8ovvXEuqByguAiA8ysShhk8VPgeOfl%2FM1NRqSk9tvmWGhDrBRQABOJEOgSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMmfMxuM%2BupcdREUh4KtwDZqacBMGEy4G%2FN8GDCg%2BeqqBxdooKVoSETBfU8PFFXYMgtPzdkJT7QZH18QvlFXZ4RkPT1VN74Jk9qUsjklBsVJmmOUYNeFZeOuQiY5zLYT4tNk7rMdPTOOSg5MQ%2FIb7Ca55tBMVjmG5x5xzjY%2BlvA%2Fz1ApczVlVx%2BRsUvZKZvHBPnzkvvv%2Fg2PxNCMlsZelnIxtEyD7SithwgJzJ5cJUZs%2F%2B9LsGqwwJtPBVBXCcB%2BP0Pc0BlDTxEGLgqIZaw8p%2FnZIPdT1ILa9OKf%2FXO635M3w%2FH1QmWsdYsBZo21FUCAf86KEHpQ0%2FRg12ybd9XAm25egYwvRr5YpMFEL0aa1yiyK0ZCTah26s6LaV3tflUAXy7fL9tjuYp716TiqHrk11wemk%2F%2F6gdmEdrwnSVE3SSaGz2H3kNhFF%2BW9sXTa6fO5QxONo9dLJWlKlI7g6ff%2FTrsd%2BVYipdoTxKBi%2B4xHrb%2F1qLocUEfvWHl3eSLA16aRqsZAnu3qS0R9Cc%2F%2B1f5TgxACyIzPIMLA8UIeHBWnxIz0bVLRRuN6ZbPz9SY2Z0A5zEKNFV3I2FE0xPlnVTv3BBi3GgHbXtZyyvrZk7aC%2FWqAoXPda3coOVDjwl1OZRm3jon7kT4qFTXLJS0gw1eX%2FwQY6pgFDqKeX%2FwnMgsGS7wsImiUXjoDAYHfSkXiSOCnoHWyVKzXM3Hy%2B%2FjEJSahQi1EclazAqB8A66rAgXq%2FRtLJKCL7yjeW%2BUa7n3fWismONm7n1C1rTob3kx5avU8xVErT3pdH73zwV%2F8UKIXghYe6piIlJnJrIprgI19VMraI00%2FbiksB525UuXbLbxecCVhR%2F6rVg5cFoK4sgwQNDcyNLtpQPbxnqVP7&X-Amz-Signature=7798e894d74c43e5b80b921dd98b088e2057d361db2de89124271add1af26340&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
