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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663D3WSTR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG%2B1m6kWNPpOFuz1HOJWfriDbUqzNMhX1wgcYe9U0bQAIgDgfybsw%2BPFVNAyiU6lPwzBkCyVYBcUNB8Thnuvs0dRYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKo7raPUWlWsRZIVzyrcA%2BF6kFpxnS6V2vvqqqdvYW1u4lRJn2IEayJ9GQxrSGBJv8XD6mK8h6k6xxyi1AVRBKfhGKCyEpYd3sJA68IaEBTHDPfqln6kZql1Tsltz7s2hjR2OGJCODhjJS6FD6Ykj%2B1C%2FbuYEPMF1oGe%2BDowRz%2Fb3Aq30u6QiEwY%2B1NXSCab%2B%2Bb8FVbpPGNzbAm86DGoibQDrlWcPyJgnEj0fv%2B4b54f5LZ3%2FCr%2BqDudXboe571hQ0%2BxU%2B6oIJCi76At2D%2BFgYBVKk%2BbrfUPrLDU%2BWatyPNLN5iCoh35IjAWwaywwiagBttzwsbwB0Nadj4zoRKNE83UVZgVTPQSfoCrwYzKWHeB3%2F4pxORhqyJp2Xrkt2OENHXcVECgAwEfHAVRID9bCXyz%2BmRUM9kTq01TOVa37ZZp%2BUeOkUL9bh%2FZNlCjTqKkKDVVp3vECthdNknkaty53sXCN818rQXBNrqA%2BWqpMpw8sfivrIKEKOeEUXhj77vBuROxsZ95C28FyOVrdSkQTyE5PlL7005693YR5FwC8Ff40zHkzAgxK8cc72u3HdTI5mW0YkYMwITN11JdmgfX7%2FEfiB1PHIjjPmDCLY5SEeIjfCQfW6C4cM1SRzV6ArsuckS2HgglAKsyqu0kMOiiicMGOqUBd2U%2FUELmOsD4YoDA41amwT2EWHiMEr1hTTNNGk4gftPdqNU0ZiUIKYpApFN8KofIWAK6sf%2FELmKz3rpCOOYLXOvokA%2Fbc5p7e2W81MC8qLUOcOFetCOGyMluJ5NoOc1LB1L5M7sjGyEFHkcW2e9RCkjEiu5HOGZ1q95%2FLCTNUQcaP1Zi0vtLwviS7cdnb16Ztu1BvdHQ%2BeNcSlS2tpfdDEa54ayL&X-Amz-Signature=f486c2802c8f4140286b37d8970e629918a1e61307b453b1732e62ba261cad4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663D3WSTR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG%2B1m6kWNPpOFuz1HOJWfriDbUqzNMhX1wgcYe9U0bQAIgDgfybsw%2BPFVNAyiU6lPwzBkCyVYBcUNB8Thnuvs0dRYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKo7raPUWlWsRZIVzyrcA%2BF6kFpxnS6V2vvqqqdvYW1u4lRJn2IEayJ9GQxrSGBJv8XD6mK8h6k6xxyi1AVRBKfhGKCyEpYd3sJA68IaEBTHDPfqln6kZql1Tsltz7s2hjR2OGJCODhjJS6FD6Ykj%2B1C%2FbuYEPMF1oGe%2BDowRz%2Fb3Aq30u6QiEwY%2B1NXSCab%2B%2Bb8FVbpPGNzbAm86DGoibQDrlWcPyJgnEj0fv%2B4b54f5LZ3%2FCr%2BqDudXboe571hQ0%2BxU%2B6oIJCi76At2D%2BFgYBVKk%2BbrfUPrLDU%2BWatyPNLN5iCoh35IjAWwaywwiagBttzwsbwB0Nadj4zoRKNE83UVZgVTPQSfoCrwYzKWHeB3%2F4pxORhqyJp2Xrkt2OENHXcVECgAwEfHAVRID9bCXyz%2BmRUM9kTq01TOVa37ZZp%2BUeOkUL9bh%2FZNlCjTqKkKDVVp3vECthdNknkaty53sXCN818rQXBNrqA%2BWqpMpw8sfivrIKEKOeEUXhj77vBuROxsZ95C28FyOVrdSkQTyE5PlL7005693YR5FwC8Ff40zHkzAgxK8cc72u3HdTI5mW0YkYMwITN11JdmgfX7%2FEfiB1PHIjjPmDCLY5SEeIjfCQfW6C4cM1SRzV6ArsuckS2HgglAKsyqu0kMOiiicMGOqUBd2U%2FUELmOsD4YoDA41amwT2EWHiMEr1hTTNNGk4gftPdqNU0ZiUIKYpApFN8KofIWAK6sf%2FELmKz3rpCOOYLXOvokA%2Fbc5p7e2W81MC8qLUOcOFetCOGyMluJ5NoOc1LB1L5M7sjGyEFHkcW2e9RCkjEiu5HOGZ1q95%2FLCTNUQcaP1Zi0vtLwviS7cdnb16Ztu1BvdHQ%2BeNcSlS2tpfdDEa54ayL&X-Amz-Signature=23ea379209694ec8314d48a920b4c43ef0f29f5497aa35403c8239079896b2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663D3WSTR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG%2B1m6kWNPpOFuz1HOJWfriDbUqzNMhX1wgcYe9U0bQAIgDgfybsw%2BPFVNAyiU6lPwzBkCyVYBcUNB8Thnuvs0dRYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKo7raPUWlWsRZIVzyrcA%2BF6kFpxnS6V2vvqqqdvYW1u4lRJn2IEayJ9GQxrSGBJv8XD6mK8h6k6xxyi1AVRBKfhGKCyEpYd3sJA68IaEBTHDPfqln6kZql1Tsltz7s2hjR2OGJCODhjJS6FD6Ykj%2B1C%2FbuYEPMF1oGe%2BDowRz%2Fb3Aq30u6QiEwY%2B1NXSCab%2B%2Bb8FVbpPGNzbAm86DGoibQDrlWcPyJgnEj0fv%2B4b54f5LZ3%2FCr%2BqDudXboe571hQ0%2BxU%2B6oIJCi76At2D%2BFgYBVKk%2BbrfUPrLDU%2BWatyPNLN5iCoh35IjAWwaywwiagBttzwsbwB0Nadj4zoRKNE83UVZgVTPQSfoCrwYzKWHeB3%2F4pxORhqyJp2Xrkt2OENHXcVECgAwEfHAVRID9bCXyz%2BmRUM9kTq01TOVa37ZZp%2BUeOkUL9bh%2FZNlCjTqKkKDVVp3vECthdNknkaty53sXCN818rQXBNrqA%2BWqpMpw8sfivrIKEKOeEUXhj77vBuROxsZ95C28FyOVrdSkQTyE5PlL7005693YR5FwC8Ff40zHkzAgxK8cc72u3HdTI5mW0YkYMwITN11JdmgfX7%2FEfiB1PHIjjPmDCLY5SEeIjfCQfW6C4cM1SRzV6ArsuckS2HgglAKsyqu0kMOiiicMGOqUBd2U%2FUELmOsD4YoDA41amwT2EWHiMEr1hTTNNGk4gftPdqNU0ZiUIKYpApFN8KofIWAK6sf%2FELmKz3rpCOOYLXOvokA%2Fbc5p7e2W81MC8qLUOcOFetCOGyMluJ5NoOc1LB1L5M7sjGyEFHkcW2e9RCkjEiu5HOGZ1q95%2FLCTNUQcaP1Zi0vtLwviS7cdnb16Ztu1BvdHQ%2BeNcSlS2tpfdDEa54ayL&X-Amz-Signature=41ebb292e58a55bcf1acf95bbd71437708435809be98279f15f761a25f315f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RATDEB7%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2FjqFv%2FBhpjYcNYP1mkwS7UVbSzB5Wy4VEyjmrb%2BRUQIgCk5NN835E2wk5Q3MAZzmwuRPs09dPt3%2FEABe1ybSS3QqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEHk4g2%2BlS82bKrByrcAzsmdgOyRKAnYDLJnrXYH%2Bc27p%2F3lbFjerRhYqE4tqpdv6WMpdArtUevBqwhPepbjq9Fp0g8dHKrcSM1VWDQ6WSwdTD4eqygqsiyMLvj2ZFHGj%2F%2B7kx1gviw2ImRnXUuE9FbfNA6REcooT4KwjdFEEbTXp6yOu9LSqYFJDO1YggfO7f%2F%2BgRN0N0JJ9HNmMXNTkcATkuWwJW1%2B3aavdruGhga0CbbwS%2Bqz3uc4lF0uKSjpUefZiKTAOPHciB6ioSEi6EcuidSLOiFMuKo3tqo2RTy8BhzS77SEQlg0cVG%2FW9BBX4j%2B3FcaTf4yA4sce%2BTUdGsu5wz1OG%2FxvEycTF0PsSHXBVD4E%2FjNnek25x%2BVEa88kkzWWOSBjhzyusIqT1i6v3%2FLdP9fjJU5zapdh%2BqU4FDsDBkTOBIA7nUpJRBBAMvkIgW3XBz7HnAc3GtxBt8kkgq5cZT6x%2F%2BbiyfUfMfTrD%2BrF36jKvkGDD5TomHZxDDU9xGEVFrAmR06h96%2Bo4bL1BQMD2o3kXFwlBATbdVnNlojV64YHXGjn9%2Bj0uz9QgWRLWoonr0jdAbxNRTj6cQfK%2Bv55%2B3CF06Dha65mIb6ytlqm0BcdKiz7AZmLnGLZDfspsMiqRgb7bzAYS4MKSjicMGOqUBo%2FTg2N53L2R5C2MhMO0W%2F%2BB5HSC8AajU4dBHc9wXm7%2BqSxzafw5I1vdhBZlETPOX0Q7db47lNde1dN1SZM0shfWce73JACzchRmLqIQs%2FjSxnvPF%2B1JgjCr2SLHp21t244z4fJLrtgCfMIZiuIe1s4%2FH%2F%2BC2CqMvjJDH3Qloh35VRhaNob7lLMtlvmrDKjypp3ZeS1GA%2BIP6oTp2b2ws2NiLxUwZ&X-Amz-Signature=a7ba742300ba21c85ead901c38667301c5a05ff9dc72385eaf006e30ab40e65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLMOR72X%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsh1fy003r9fS15%2FTorA9kt8vZYx0nqTOJHpv0U%2F%2FaJwIgZSakCLXZYjeY5NIO32x4w%2B6tbfYBlEVzeew6KE2Y8soqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKiga318MsCGt56bSrcA11yrRu%2Fb51tdJgaHn%2BJXMI2geNQfdVII4Sfq2VaXC7y8ccUufxVbc9sS%2FI1u6Vyu4fiYnhvI25qnpfyjzPoVWSvOi3gz0cuNHl2nqyLZa5rESbNjhgGqa7n08UAuyvBXAPq%2FI0s46VeGF%2Bs%2Fj6eAJFE7PVZaUDiYpAJfjwp%2FiF4YEHX6ZVesQLEfxuwtfHkO8glqBUln2WGSoH3DB61sZUthCQXDH5g2CLhR%2B22%2B7OJYed4yxfin%2BxeIBt6vXyKWTwnV5bPra%2F3vnRvtax5GhskCONFqTiKo0S%2FdCpdRvfIxIBw%2F6LM8uk3s2FDTIeyIvnEQLH2KWg1C%2FCPqZlhOeBbVDtolM3ogTzn0fpwgeFyIJXPZ18zpcAL%2BD9tQMaIWGsLQWnlCDNWABJgFYLJQyCrTninITl%2FiMYvKL3cTf3FyxraEiHV%2Fo1XP2VwPqmZDb%2FboCTqIH920tI8%2Fmxj2zVI5oZiv0CAcR7FndOaybdyjrnm8wvK%2FkKOHLrDVLpR2TleC1sP0J166WKmAPB%2FuPovS0yQr2mgEE6gWSWdFxqFeZ1cNcGUZOPNUitV2IeJfFkfHgqu%2BMgY0TDGuWqBLjTW%2FdKpG2%2FD73nkLNX0UvnN3%2ByJ4%2BXRi2QQGh6iMJuiicMGOqUBwXc5z4Mv9kAwAnwjXjeRi%2FYTEqvtpGd5Bx3evFve6Q9J7DLwMud%2BcgJS3eYuO3B4L%2FIRcUmTbeqq4ouggZZJe6w0S6GWMyIvx51ITkq%2BmoAzGwdf19fGNz%2BlJvQ1OjWRmlxZwofPNEEZKkAZyNT6yQESam%2BYMFq74SdLGSTIYR3JIMJvKGWLULDr8FGFa9IPQyucoxMicglAHAwEHsG5ZRKCl6h%2B&X-Amz-Signature=7bed04e33aa2c9c67f0bc306b677481e21088531336fb17cb5f10a57d8c53ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663D3WSTR%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG%2B1m6kWNPpOFuz1HOJWfriDbUqzNMhX1wgcYe9U0bQAIgDgfybsw%2BPFVNAyiU6lPwzBkCyVYBcUNB8Thnuvs0dRYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKo7raPUWlWsRZIVzyrcA%2BF6kFpxnS6V2vvqqqdvYW1u4lRJn2IEayJ9GQxrSGBJv8XD6mK8h6k6xxyi1AVRBKfhGKCyEpYd3sJA68IaEBTHDPfqln6kZql1Tsltz7s2hjR2OGJCODhjJS6FD6Ykj%2B1C%2FbuYEPMF1oGe%2BDowRz%2Fb3Aq30u6QiEwY%2B1NXSCab%2B%2Bb8FVbpPGNzbAm86DGoibQDrlWcPyJgnEj0fv%2B4b54f5LZ3%2FCr%2BqDudXboe571hQ0%2BxU%2B6oIJCi76At2D%2BFgYBVKk%2BbrfUPrLDU%2BWatyPNLN5iCoh35IjAWwaywwiagBttzwsbwB0Nadj4zoRKNE83UVZgVTPQSfoCrwYzKWHeB3%2F4pxORhqyJp2Xrkt2OENHXcVECgAwEfHAVRID9bCXyz%2BmRUM9kTq01TOVa37ZZp%2BUeOkUL9bh%2FZNlCjTqKkKDVVp3vECthdNknkaty53sXCN818rQXBNrqA%2BWqpMpw8sfivrIKEKOeEUXhj77vBuROxsZ95C28FyOVrdSkQTyE5PlL7005693YR5FwC8Ff40zHkzAgxK8cc72u3HdTI5mW0YkYMwITN11JdmgfX7%2FEfiB1PHIjjPmDCLY5SEeIjfCQfW6C4cM1SRzV6ArsuckS2HgglAKsyqu0kMOiiicMGOqUBd2U%2FUELmOsD4YoDA41amwT2EWHiMEr1hTTNNGk4gftPdqNU0ZiUIKYpApFN8KofIWAK6sf%2FELmKz3rpCOOYLXOvokA%2Fbc5p7e2W81MC8qLUOcOFetCOGyMluJ5NoOc1LB1L5M7sjGyEFHkcW2e9RCkjEiu5HOGZ1q95%2FLCTNUQcaP1Zi0vtLwviS7cdnb16Ztu1BvdHQ%2BeNcSlS2tpfdDEa54ayL&X-Amz-Signature=e0bbfdada65b552711932d0bdd230ff94f7b97b3f181f7108cbc881a2b7f07d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
