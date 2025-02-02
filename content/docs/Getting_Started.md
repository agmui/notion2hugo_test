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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB3JSP4V%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIW7lL9siVc4g8jsTKcaLDTFGCwjPXCSBUzbqQS%2BAScAiBHci2PK4PeIS64oqpIEF1tYYCb1u6vQ0gS83dZWfjqVSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9NOssAfEz4TaoJjKtwDdfOPcxVysivBeYl%2FgqihpJbZfeoCAC6qOA%2BdqBooJxmqdkW283AukGHXdzEnLD6eAram6HDrItJ7cXxCuSfst2x%2FcUh8tWLq6lFBGIzEaW3CTVirUwbHB9nGD9iiqIVSfUeHXbwkFAqyvyhTFuAeAm5vT04WQJzDuHiw7gUD11gmIeDSX9K6EsZkMPGNIjuek%2FmNO7TNlPDqvDotFrFj5XO1JyKY0P73yi75gbxPgy6b07UapmtBqkIdlSWjlluxcmSB%2FZOtiB0wj6mQ9H0mSKV56yf%2BokEEWQU3Gt0E%2Fu%2BCna61Su6GBUjmHbXQZreZ7rJQjUl8ZgNVxlc7h0IpZOdk2rmxOI%2BxZrgKbtUgW5HI8zAqVVUtUCd5ninsvagO%2Flik2pCXXBu2tRb99Ke%2B%2BI8jRRKEsFZLiZMq71jpGZTvuiTD3P71hPj9uCOe%2F8FX%2FYPlCraMyMp1tVDXB3Kkw3Kku2zMogGxzwE%2Bmnp8zGfZnQMJ29nK4UR5Cs4HIdUokGNyK5jy1gdz4nynJjefhI1jAUxkuFBGb6t9RWDDic%2FGJRqug7vkQHnimo%2FfFIMZgyNP8nKOPpNblLy0SLyReQJ3lNPK%2B4mP5lL3zXnpdZ6zBYvB6FtF7Huffasw%2FL39vAY6pgFWM3kbsh5PvhRm1XD4a2nPJsjcIVbAbcKaNAxGUY5KbMafzPbha1gSy1e0TpORWCRIuEsvvvoPaYhFq2C0J%2BttkpAE6ufQnigD6mSGE04XcGkYrmWiwUSOx%2FRxF9J5BN8ERlCS9sguNh5oTz%2BAvhfMm%2FYBDYXXAzQ%2BoPb0YJYKngQr8ubwZ7ryTxN%2F7RFM1DDLUg4IaBuPQu7Tkha3NoONpiYGQ9dx&X-Amz-Signature=ac6089d2d3a10c25553680d55280d15c94204d479d5dc0389d20585610a89f19&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB3JSP4V%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIW7lL9siVc4g8jsTKcaLDTFGCwjPXCSBUzbqQS%2BAScAiBHci2PK4PeIS64oqpIEF1tYYCb1u6vQ0gS83dZWfjqVSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9NOssAfEz4TaoJjKtwDdfOPcxVysivBeYl%2FgqihpJbZfeoCAC6qOA%2BdqBooJxmqdkW283AukGHXdzEnLD6eAram6HDrItJ7cXxCuSfst2x%2FcUh8tWLq6lFBGIzEaW3CTVirUwbHB9nGD9iiqIVSfUeHXbwkFAqyvyhTFuAeAm5vT04WQJzDuHiw7gUD11gmIeDSX9K6EsZkMPGNIjuek%2FmNO7TNlPDqvDotFrFj5XO1JyKY0P73yi75gbxPgy6b07UapmtBqkIdlSWjlluxcmSB%2FZOtiB0wj6mQ9H0mSKV56yf%2BokEEWQU3Gt0E%2Fu%2BCna61Su6GBUjmHbXQZreZ7rJQjUl8ZgNVxlc7h0IpZOdk2rmxOI%2BxZrgKbtUgW5HI8zAqVVUtUCd5ninsvagO%2Flik2pCXXBu2tRb99Ke%2B%2BI8jRRKEsFZLiZMq71jpGZTvuiTD3P71hPj9uCOe%2F8FX%2FYPlCraMyMp1tVDXB3Kkw3Kku2zMogGxzwE%2Bmnp8zGfZnQMJ29nK4UR5Cs4HIdUokGNyK5jy1gdz4nynJjefhI1jAUxkuFBGb6t9RWDDic%2FGJRqug7vkQHnimo%2FfFIMZgyNP8nKOPpNblLy0SLyReQJ3lNPK%2B4mP5lL3zXnpdZ6zBYvB6FtF7Huffasw%2FL39vAY6pgFWM3kbsh5PvhRm1XD4a2nPJsjcIVbAbcKaNAxGUY5KbMafzPbha1gSy1e0TpORWCRIuEsvvvoPaYhFq2C0J%2BttkpAE6ufQnigD6mSGE04XcGkYrmWiwUSOx%2FRxF9J5BN8ERlCS9sguNh5oTz%2BAvhfMm%2FYBDYXXAzQ%2BoPb0YJYKngQr8ubwZ7ryTxN%2F7RFM1DDLUg4IaBuPQu7Tkha3NoONpiYGQ9dx&X-Amz-Signature=393c5934e977aa6620e3aa2384dc57410e0a92b412c3976d448c43cb6cd5d19e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYXN7AO4%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbpXkjouNFld0Ox7H6MAwUIQCCvNaKtOrkowjzuyaDXQIgVJLMwJKAJm%2F3648IyFdC5lzMt7a1SWfOuaeZS%2B9DE4cqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJr9QwcwavX6TAIlyircAywugwTQyyke8hSGdAY%2F2q4FttWEMHEXlzsZ356aazQUC%2BGUzbW460HAu8KD6SWJ2FwqD%2FT%2FadufJYQPXszieIPNd80ffe0B%2BdwTTflyCOAsLm1mSTfTC%2FH16WNxQ7%2B%2BsGdnfSmpyJEEMnk%2BoCyj8LA4GQ8263Qou30gdNEQ9NdcyRyUg1RCUU91%2BPQ%2BE70kiz5X7EUKtcKzuu4MvrUaRARY95A6YitzYUiY7yadA3GZHu1DZjY%2BbaUcU3jPBcEGky9nRmiYPz1D6zqBU1XKSw7y%2FBGDXMRMxLdbY3NvqFKaITYbOk9kV4IDuKFjMrYH5qrMWN3q7FzTlQm40%2BRm%2BXvkHyqq5g5wd5szbkgzQYIGVQbsbuz7W12nAfiz6AKUoJWi%2FkrJK90z4fgJI8X%2BMg2JyJq4YUfYvqC8BXzx4pDYP%2B1bhvZl2qqbuUMtAGTVy9L%2BQgyAa2q5eyCWLldbKaW3Fr1GGltzlKbs6yNdm969d7aKWm%2Bobt5JX9GdFmyRdz2CljmkMUaU8Rp784nDwBSg3xV0Ahr0IgZV1fLaLUL8XdRSXD4hKtWRXXN2GdwU2Y5ELEB4qSEhewo%2BcLgEbLPrAIqLW41XrdF0c%2FGAglmSdOS8UtqqvkE%2BGJUtMJK%2B%2FbwGOqUBAaUsbcauAvBBR1ApjBHsUs1a9ySFvLLxFt%2Fzvk0%2Fdc4HfRD7OttpSrgnkO9jOdwXDVNi5Ngl3HgzdUiA2ssFRJ0R7gYa8xMLIW89kE38X6B5arZbqgQOJKFHgFr41AV%2FKErOZuYpJyI%2BqHrNThfRkxkcdrkIk9KXRa%2FzhgDA4VYriv%2FOnjekAesKCme1WP63yKI5qe58yn3T4HIurF%2BuPTCzSfeP&X-Amz-Signature=46c16fcd15f7b096bc4fc5f678abc8436bf8a6af070391033be348af3912b14c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AJ5JD5Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIALBku3sPrSCZmBqQ9txxYKOteOWcKXEPY4Lx%2FDuWs7VAiEA%2BFAISuhw9np97i0XpBG4MOFQhn8hLV63OriBM3p7VFYqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvcK%2F3nBa3QmXBuVyrcAwdQiykFbPdZ7GK7%2FVwu7cq3jhJY38Sh9%2F40hdElJI0tvErlAk1GMVauXTSRcOvvdsGS17ByljV42zQWykgsnIEFMC3FDs%2FoUaNknY2Z0x5vBTRfJUfK8K%2FaO0Go3i%2FPaytMFMyyGRd862IyqYvB8a9rKuGUPrDUMKR3Tw69E8il6XnssbFMXaO3EcHBFrGd0YMsv2qvRjCNs0Ue8H%2F3kfgfkfx7rW84bWuvLIJXyTNrF%2Bxqf9SPkvIWz1pjbHC1Ck%2Fe5lgzablcGJJ%2BCUU%2FMq5c2KKDKnseycGjDhWxvfnqyHkSxw7RKLdHoPNyR68kmseFxA%2Be96pdVY70pdpONjcjLfHEjTblTi7Z3OEV9fHZdVnmUSLNsF9Tv9XD5awtxsi3XEvOwxzNO1iD4ouzBkTCWoeGCqUYh58iy%2FNxPNB5bREhGvxAyoNPBIhqsxDeexLtaLu39Ug2iiAL9gFsqH1wkpgWV2FnUlGnp3b7hIjax0NwvSwUCWk6jcGVrEaG8quEfryrRhRsaXZYN7SmPAcqqlUj3NTWMZziU3l7JFi2o%2F7zj2nwPJQzYMqdayelXqrIvA2xL1T2mUZpfDwqy96C5EH8vuHv5UFWdQkLuFLhgt1STamHmLsHBlQVMJrD%2FbwGOqUBEbU5veDW%2BDBo7%2B9zmTfrnVM5lU%2BTmvvEuuSRdmiIr4NTVsf2aUiwtd4PXknGifJnCA2arbBuO1rwJywru%2Fvv%2FQBDYRY7xTzqABrwJcRuraTUHrC5m7kxAnpe2hXncYdhh1EYpcS69fH6VBpqyV1mCH9%2BsOrmEmSfylYMSdVPt6cBVq7XcVaBOiJoSRvfNsSD%2FWoBlD%2Bsv%2F4jfwBGSITL8kp%2BQpIa&X-Amz-Signature=d7a1cc93cb093339ce4058bf6378e52ccacfc06cf829ece2fbd37f9652eb2506&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB3JSP4V%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIW7lL9siVc4g8jsTKcaLDTFGCwjPXCSBUzbqQS%2BAScAiBHci2PK4PeIS64oqpIEF1tYYCb1u6vQ0gS83dZWfjqVSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK9NOssAfEz4TaoJjKtwDdfOPcxVysivBeYl%2FgqihpJbZfeoCAC6qOA%2BdqBooJxmqdkW283AukGHXdzEnLD6eAram6HDrItJ7cXxCuSfst2x%2FcUh8tWLq6lFBGIzEaW3CTVirUwbHB9nGD9iiqIVSfUeHXbwkFAqyvyhTFuAeAm5vT04WQJzDuHiw7gUD11gmIeDSX9K6EsZkMPGNIjuek%2FmNO7TNlPDqvDotFrFj5XO1JyKY0P73yi75gbxPgy6b07UapmtBqkIdlSWjlluxcmSB%2FZOtiB0wj6mQ9H0mSKV56yf%2BokEEWQU3Gt0E%2Fu%2BCna61Su6GBUjmHbXQZreZ7rJQjUl8ZgNVxlc7h0IpZOdk2rmxOI%2BxZrgKbtUgW5HI8zAqVVUtUCd5ninsvagO%2Flik2pCXXBu2tRb99Ke%2B%2BI8jRRKEsFZLiZMq71jpGZTvuiTD3P71hPj9uCOe%2F8FX%2FYPlCraMyMp1tVDXB3Kkw3Kku2zMogGxzwE%2Bmnp8zGfZnQMJ29nK4UR5Cs4HIdUokGNyK5jy1gdz4nynJjefhI1jAUxkuFBGb6t9RWDDic%2FGJRqug7vkQHnimo%2FfFIMZgyNP8nKOPpNblLy0SLyReQJ3lNPK%2B4mP5lL3zXnpdZ6zBYvB6FtF7Huffasw%2FL39vAY6pgFWM3kbsh5PvhRm1XD4a2nPJsjcIVbAbcKaNAxGUY5KbMafzPbha1gSy1e0TpORWCRIuEsvvvoPaYhFq2C0J%2BttkpAE6ufQnigD6mSGE04XcGkYrmWiwUSOx%2FRxF9J5BN8ERlCS9sguNh5oTz%2BAvhfMm%2FYBDYXXAzQ%2BoPb0YJYKngQr8ubwZ7ryTxN%2F7RFM1DDLUg4IaBuPQu7Tkha3NoONpiYGQ9dx&X-Amz-Signature=f960b18a606826b9ff0bed315e87f9962a8a21ee51ba3a7f77a78d75d589e353&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
