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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5PCKPPS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFjyCnThoAPRf4ONFw0C4JeuzJFuunMICXMH9JzTSulKAiACpvdxwuCbRcqD1lYSbg3BL6K0gJE7QBFNme%2FQ1cALkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMYQE%2BYSLYgEBLyQBKtwDYjySVnxO5AOyOxhnHo5mkT0Djz5Kk3DeBefbafNsARw0082A6g6KWoNYMjvxdLv%2FOmkl6xB1h2RTo8lqsP%2FrPrfsgg3PixcStYHLLfReClLpgOof2IyJa39nN74pSuDO0gAWDmM6ADrqr%2BYXeD427U2AaHiKuyo5DJ9N8zq9j4wLCl4SguqAo3tPip%2BQbZ8FHuvg00VoPHhNTY8WxvZ1iz3xWuN9iKTPdCsUNh4wKZEo0FbaDC7Dar76EzkOXZmFRu6zpiSPrZIsCUwBxX1yEYTYa7fdSlMsVC%2B7kHhdv7s127qcmb%2F50cLigExnOnAFcDcf0cMjMfeaS6by0gBcuw4QKucgMfPsHrgSr7tawjNJQz4TBZSZfMcW5QDNQ55FdmGdqh3oQxKpuOh4BRicyvbQZnOMv9KBC%2BlUizH5yJqQ%2BjfFQjisStJyHvBU1TRUlPDjhLLEbcLaGgEBw1uv4kxayMxJy%2BkAtlhyhOElBdsdT0Pe7omtYAagI76GozeJmMYeDTqnMXVZiiHE%2BEQPuLiKN1LNa6s11MmLMEFLbbJI4LheJsg3Z77ttFEU7oA5f9rWKkAHIvcLaCz2OTHQHqGxV9UHgedCWpYFP3QEfC3WWOxQ1JjJWaoOfsEwqpS6wQY6pgGw9ccQmnX53EnQGTT2mzKeUlAnl17IDQUOdgs%2FvRUmo3nkzVJ3lum0H1iOrkPxIOolYyD7XYl09JLRSAOmr3AcPP4Y%2FgfwtmYdc8y71MkC05SQIqRBACIPfs0q5PgcltRbhnGDuOyI7PndAz5WyuNS45G57O%2BIlXDBmb2cIcsZidPL0hbgGuKqy6yAl%2FOjmLUdEkellEEPSck2kGUIOCqVMXy3CBEm&X-Amz-Signature=6ad039a402765f0d0f2151cfa772ffceb9d38c14469e5f69fd3d94afb08e83cc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5PCKPPS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFjyCnThoAPRf4ONFw0C4JeuzJFuunMICXMH9JzTSulKAiACpvdxwuCbRcqD1lYSbg3BL6K0gJE7QBFNme%2FQ1cALkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMYQE%2BYSLYgEBLyQBKtwDYjySVnxO5AOyOxhnHo5mkT0Djz5Kk3DeBefbafNsARw0082A6g6KWoNYMjvxdLv%2FOmkl6xB1h2RTo8lqsP%2FrPrfsgg3PixcStYHLLfReClLpgOof2IyJa39nN74pSuDO0gAWDmM6ADrqr%2BYXeD427U2AaHiKuyo5DJ9N8zq9j4wLCl4SguqAo3tPip%2BQbZ8FHuvg00VoPHhNTY8WxvZ1iz3xWuN9iKTPdCsUNh4wKZEo0FbaDC7Dar76EzkOXZmFRu6zpiSPrZIsCUwBxX1yEYTYa7fdSlMsVC%2B7kHhdv7s127qcmb%2F50cLigExnOnAFcDcf0cMjMfeaS6by0gBcuw4QKucgMfPsHrgSr7tawjNJQz4TBZSZfMcW5QDNQ55FdmGdqh3oQxKpuOh4BRicyvbQZnOMv9KBC%2BlUizH5yJqQ%2BjfFQjisStJyHvBU1TRUlPDjhLLEbcLaGgEBw1uv4kxayMxJy%2BkAtlhyhOElBdsdT0Pe7omtYAagI76GozeJmMYeDTqnMXVZiiHE%2BEQPuLiKN1LNa6s11MmLMEFLbbJI4LheJsg3Z77ttFEU7oA5f9rWKkAHIvcLaCz2OTHQHqGxV9UHgedCWpYFP3QEfC3WWOxQ1JjJWaoOfsEwqpS6wQY6pgGw9ccQmnX53EnQGTT2mzKeUlAnl17IDQUOdgs%2FvRUmo3nkzVJ3lum0H1iOrkPxIOolYyD7XYl09JLRSAOmr3AcPP4Y%2FgfwtmYdc8y71MkC05SQIqRBACIPfs0q5PgcltRbhnGDuOyI7PndAz5WyuNS45G57O%2BIlXDBmb2cIcsZidPL0hbgGuKqy6yAl%2FOjmLUdEkellEEPSck2kGUIOCqVMXy3CBEm&X-Amz-Signature=1e526b6fe46010ae72dfc54bac233602a8eb0eca6bde9df50612848ff01681ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5PCKPPS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFjyCnThoAPRf4ONFw0C4JeuzJFuunMICXMH9JzTSulKAiACpvdxwuCbRcqD1lYSbg3BL6K0gJE7QBFNme%2FQ1cALkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMYQE%2BYSLYgEBLyQBKtwDYjySVnxO5AOyOxhnHo5mkT0Djz5Kk3DeBefbafNsARw0082A6g6KWoNYMjvxdLv%2FOmkl6xB1h2RTo8lqsP%2FrPrfsgg3PixcStYHLLfReClLpgOof2IyJa39nN74pSuDO0gAWDmM6ADrqr%2BYXeD427U2AaHiKuyo5DJ9N8zq9j4wLCl4SguqAo3tPip%2BQbZ8FHuvg00VoPHhNTY8WxvZ1iz3xWuN9iKTPdCsUNh4wKZEo0FbaDC7Dar76EzkOXZmFRu6zpiSPrZIsCUwBxX1yEYTYa7fdSlMsVC%2B7kHhdv7s127qcmb%2F50cLigExnOnAFcDcf0cMjMfeaS6by0gBcuw4QKucgMfPsHrgSr7tawjNJQz4TBZSZfMcW5QDNQ55FdmGdqh3oQxKpuOh4BRicyvbQZnOMv9KBC%2BlUizH5yJqQ%2BjfFQjisStJyHvBU1TRUlPDjhLLEbcLaGgEBw1uv4kxayMxJy%2BkAtlhyhOElBdsdT0Pe7omtYAagI76GozeJmMYeDTqnMXVZiiHE%2BEQPuLiKN1LNa6s11MmLMEFLbbJI4LheJsg3Z77ttFEU7oA5f9rWKkAHIvcLaCz2OTHQHqGxV9UHgedCWpYFP3QEfC3WWOxQ1JjJWaoOfsEwqpS6wQY6pgGw9ccQmnX53EnQGTT2mzKeUlAnl17IDQUOdgs%2FvRUmo3nkzVJ3lum0H1iOrkPxIOolYyD7XYl09JLRSAOmr3AcPP4Y%2FgfwtmYdc8y71MkC05SQIqRBACIPfs0q5PgcltRbhnGDuOyI7PndAz5WyuNS45G57O%2BIlXDBmb2cIcsZidPL0hbgGuKqy6yAl%2FOjmLUdEkellEEPSck2kGUIOCqVMXy3CBEm&X-Amz-Signature=52b08f605f7b9edf9c869b0d4c4521645950df89066136227c7d586050afecfc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPEQ4AY5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDwMs0IT%2BhPp1OEac3f%2BzslDth2YUq%2Fa2yybVTTdN2SnQIgau003qenvCwmk%2BpJLn4qD6BI51fCekAbMpW%2FBl6EVUUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxVAyoIZdpl6WS0MSrcA8JXdpfAv%2FOrYLcLdHMvIaw%2BlV77%2BWjA1yIMQb990tUkAn3OuGYwpwj7lh2UPLDtHzHk4PsUgQ%2FW8i%2BrMutNrU1g81xM5Ykr9SwzYnvGQic2fYHh7EsvB9Yh3g1OXUEU1jxPP6RkNqkQowUW7INkLhiwzZ%2BbivcR9G%2FZroo6sFPHv4M6NETtsBzBmodiPn96RU8V4Tj%2BWXHK7gWzNeeUMHo%2FR5rACcJFgJfVM3olWp8tg%2F9KTGSdSRtYJXgaXZ0TUN7AE7MWpus0Ec%2FBRWonS%2F6RPHKtWqStlYnBslVwqip58%2FQ0mmuE5YnJEDe3IrJ184ba19ZYwatzwKHqNNGbEvmlYIs4%2BKVF4GOmbEv49ELAFQZlAzPnOIk9ghzad0EMgACJ6Sa2m3gAPAimGMGIoQsZinvkC88Q%2F2AXxrzUxE%2ByTqmQMXfPoOQICKFeeU6k5BHR7PNMltGOqNp%2FWlSoJdnLxqYLxXWpW7%2FEA15ukBScCdyL%2F4JH%2FQuEScpNOe99J1QwWfJ7xv5s8E4EfFC%2B6wfMDXFkKgoBvrALf40SPpBefZkhq0pFeJWuoYOu%2FyYV6CIIcAvo3eSfvB48%2FDmBdmL%2FK2caDJKpOHXvNaICCJ42xp8amJIaXkk4bPQGMPiTusEGOqUBY7ja9Tq%2FtH9jt48Da52%2BQ6J5RbJ6y%2F8fDu1hUbeLr3JT5HmEynRXvp79VqndrBnE65lFI6l5KgAGHDW8hhNlm%2B2U3nY%2FZkPMRobNdrmV65krDht%2BowSLYcpNZpNf2EwHX3xzjoY8wLXQG1BBJ5j7Cyc1ambxzfu9ZjCRJkU0cusGAmKsfs9gG%2FsrvfQySdj4ZCgxd6lMBoXJNwNf15%2BQ0SUiIN3r&X-Amz-Signature=a6ca1e73f68295610639928d55bb84867ed055d922ffc6298b6bbd7f7765f710&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673CAA4B5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDY2k83BSE1JA2TwcoWiWeSLuNXP8NmFCTRCV38Nmec4wIhALKBeXaagu6jD%2FC9q3G7K3DABhwzCSWyCMamxSTYxji7KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2tfvu2YxuURhO9LMq3APo6bYjgxiXuFBucaQv5OWpeWoKjLoof1NqRzVxKAf%2BIK6ldE0HTd8nj6eP9idNnbpLiLlA6BLhnIvHF99ggp8XbiDcwepMwC7grSYagD1KfzqGBhUBjlB6EYEpZkJu71LHXwxps%2FD4AVJ0rm6NwlLo41D3eRktQ90%2BOD7YslEVo%2B7d2KqXG4TBcWLcl%2BpPfiKWftZMo8CZCaiO7QMTuh55XAyrkVFdjRSeSjEO0O%2BE8lBeHgmVuONaLUCvK5G9nmcYFoT3ikbkh5GHKbuyV%2BDDCNNbenLd2mK%2FhgZ0k89RBv05yqCpfeX%2BZaotlCttlPK%2Ft1KjB%2FeFiSiTrqfkRxgcinFiynNiYIwKAyqW8tCjZeFmU3xNteMRoZ1uGgzZ3%2BorazUWVoZatZzpqIsKgYmabi%2B%2FL72K2bEIpwREJTMRM9He6G1AotN5yeuR%2F8fadCAV8TCJ1bZJeRVvhPq2BkbIriC7OQLR%2B3lXxT%2BDqM0cCSOGhogSil3nBXcAmN7dgaurSoaIqIll%2B0%2BBxaJ77x%2BD32uwS%2F0IbNumDzFd9seJszA8V%2FwR5gVfxqz4AnD78ayTKBIHdWIjz6kYc7P0B7aRurVJIWe6NcjS34UQGmOsaGCHd4d920V9VzC80zCqlLrBBjqkAVybs9V9M%2FkMxuoTkDq%2B0xaTO4FBBlR%2FAezg3W79ZqkQt5qk9oU0MDzTb5Sm6TT%2FkCjqsunt%2FPRUdnHNTfrYNqdJK8c4r0MyyD05C6Z0iRvoR9tNfWNljGCEkzCR36pwqBhIfmB3Ye%2BXAdr4nxIfRamseZtllt0hYVdAWMQo7%2Bth2bcH%2F1ccQUlrw9rvrKsfVWatXuqNKbt3S04Dds0iZG7CLaoB&X-Amz-Signature=6df81c3f26d1d1007b5984b2c1b25962c744f56e7be9b4acc258a3bc6bff70f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5PCKPPS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIFjyCnThoAPRf4ONFw0C4JeuzJFuunMICXMH9JzTSulKAiACpvdxwuCbRcqD1lYSbg3BL6K0gJE7QBFNme%2FQ1cALkyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMYQE%2BYSLYgEBLyQBKtwDYjySVnxO5AOyOxhnHo5mkT0Djz5Kk3DeBefbafNsARw0082A6g6KWoNYMjvxdLv%2FOmkl6xB1h2RTo8lqsP%2FrPrfsgg3PixcStYHLLfReClLpgOof2IyJa39nN74pSuDO0gAWDmM6ADrqr%2BYXeD427U2AaHiKuyo5DJ9N8zq9j4wLCl4SguqAo3tPip%2BQbZ8FHuvg00VoPHhNTY8WxvZ1iz3xWuN9iKTPdCsUNh4wKZEo0FbaDC7Dar76EzkOXZmFRu6zpiSPrZIsCUwBxX1yEYTYa7fdSlMsVC%2B7kHhdv7s127qcmb%2F50cLigExnOnAFcDcf0cMjMfeaS6by0gBcuw4QKucgMfPsHrgSr7tawjNJQz4TBZSZfMcW5QDNQ55FdmGdqh3oQxKpuOh4BRicyvbQZnOMv9KBC%2BlUizH5yJqQ%2BjfFQjisStJyHvBU1TRUlPDjhLLEbcLaGgEBw1uv4kxayMxJy%2BkAtlhyhOElBdsdT0Pe7omtYAagI76GozeJmMYeDTqnMXVZiiHE%2BEQPuLiKN1LNa6s11MmLMEFLbbJI4LheJsg3Z77ttFEU7oA5f9rWKkAHIvcLaCz2OTHQHqGxV9UHgedCWpYFP3QEfC3WWOxQ1JjJWaoOfsEwqpS6wQY6pgGw9ccQmnX53EnQGTT2mzKeUlAnl17IDQUOdgs%2FvRUmo3nkzVJ3lum0H1iOrkPxIOolYyD7XYl09JLRSAOmr3AcPP4Y%2FgfwtmYdc8y71MkC05SQIqRBACIPfs0q5PgcltRbhnGDuOyI7PndAz5WyuNS45G57O%2BIlXDBmb2cIcsZidPL0hbgGuKqy6yAl%2FOjmLUdEkellEEPSck2kGUIOCqVMXy3CBEm&X-Amz-Signature=89967300123bca53ed8bb8239e3fe3cc103f5291cad3ac2c949516ee55212cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
