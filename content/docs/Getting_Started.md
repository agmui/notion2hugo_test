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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBHNMYD%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC%2F%2BrOk0eDkliR4FjJrqGcInIkXbg3JWT8WYeQ0uU5mhgIhAKNzLu9rx7CvT93wIqgcL4qOVVx%2B4fyx1L7DdiDxoBkCKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPC%2B%2B%2BIIAFcRbwkD0q3AOKs9uMTFoni8g9Xk0gSYaxH1IMUqrOE1L1sIhDl8YQ4DwyPiapvOfjWK8Mga4heECqQJFmC2gfMVReRSL1aiFseDiFfMdL6f8%2FxnPrDKaf4Q%2BD8THhCHsDWtbXv0VDfwsxR%2BeHz0qwMobD9bHnIXEjaDYDlI%2FE%2FTMh7pTGrbD5WX4MIcgOcpQ6B8qAJ1SqFHNgKBXqnLWANq4lv1sGry9ELwwf%2FwJWRsV9Q8PVS8EYcl7zqs2WsAllUqanjSz1Qn171fCvxIIXFhcde080ZBz1mD6Tvff6FoEKSua1vPt6GL93CWTToMZdFBFrvqji0MziQs6pr%2FeeIaaLYqNWOoEznrR456kLq%2BS7%2FE2qlyjPyT40v7rLfY%2BX5kTyPp9fHu2%2FlzrZ%2F8yiWRaUrZSYwhCTTxJgV74ZQkZKAQuth2CaiW99f35Tt%2ByY%2Fi7qbUJdi%2B6vPxdbMDqL%2BLLafn2bbjCvLirg1spYp63V7ls97MfrYatIuluVMZnMo%2FZFVpnabA5BmN3slmH2B6em0UNYqBrkvzQRM%2B%2BTHIlIFr8nEhLJD8sR2jW2ikZPWfxIAtOquDJ6ki%2FYo2aq%2BV1hHJJ7XMoOA8d3bc6j6RsquTJ3q%2FvvMTa13JI%2BRrQlOk8%2F8DD4lOu%2FBjqkAbO0%2By8eNHFTJrRcaYN0U7MgTLmJXc0AuRYwAXpMWB48i%2FJWdKld%2FepvUgYwnhphZTDZ7fn8av1vua9rPFUnMA%2BIA1lQOR1SNsVVa3e7IY3ik3BHPT6U7BrAT%2F4o9tf4wZoP9qy5w1%2BvgHqc%2F9wOQwjVDx7B46TnVSX2iVjnJ50uqfla7cTaY8b5GyfNQIyQM4eupMYboHC6SkxXW1lOL5MEVwNd&X-Amz-Signature=a5e1c57fa719f4875b1b46556adc8de36248523e704e8de6670d8d7a7c0c7a09&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBHNMYD%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC%2F%2BrOk0eDkliR4FjJrqGcInIkXbg3JWT8WYeQ0uU5mhgIhAKNzLu9rx7CvT93wIqgcL4qOVVx%2B4fyx1L7DdiDxoBkCKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPC%2B%2B%2BIIAFcRbwkD0q3AOKs9uMTFoni8g9Xk0gSYaxH1IMUqrOE1L1sIhDl8YQ4DwyPiapvOfjWK8Mga4heECqQJFmC2gfMVReRSL1aiFseDiFfMdL6f8%2FxnPrDKaf4Q%2BD8THhCHsDWtbXv0VDfwsxR%2BeHz0qwMobD9bHnIXEjaDYDlI%2FE%2FTMh7pTGrbD5WX4MIcgOcpQ6B8qAJ1SqFHNgKBXqnLWANq4lv1sGry9ELwwf%2FwJWRsV9Q8PVS8EYcl7zqs2WsAllUqanjSz1Qn171fCvxIIXFhcde080ZBz1mD6Tvff6FoEKSua1vPt6GL93CWTToMZdFBFrvqji0MziQs6pr%2FeeIaaLYqNWOoEznrR456kLq%2BS7%2FE2qlyjPyT40v7rLfY%2BX5kTyPp9fHu2%2FlzrZ%2F8yiWRaUrZSYwhCTTxJgV74ZQkZKAQuth2CaiW99f35Tt%2ByY%2Fi7qbUJdi%2B6vPxdbMDqL%2BLLafn2bbjCvLirg1spYp63V7ls97MfrYatIuluVMZnMo%2FZFVpnabA5BmN3slmH2B6em0UNYqBrkvzQRM%2B%2BTHIlIFr8nEhLJD8sR2jW2ikZPWfxIAtOquDJ6ki%2FYo2aq%2BV1hHJJ7XMoOA8d3bc6j6RsquTJ3q%2FvvMTa13JI%2BRrQlOk8%2F8DD4lOu%2FBjqkAbO0%2By8eNHFTJrRcaYN0U7MgTLmJXc0AuRYwAXpMWB48i%2FJWdKld%2FepvUgYwnhphZTDZ7fn8av1vua9rPFUnMA%2BIA1lQOR1SNsVVa3e7IY3ik3BHPT6U7BrAT%2F4o9tf4wZoP9qy5w1%2BvgHqc%2F9wOQwjVDx7B46TnVSX2iVjnJ50uqfla7cTaY8b5GyfNQIyQM4eupMYboHC6SkxXW1lOL5MEVwNd&X-Amz-Signature=1ce9a1c78f7684e37e0ef618b66bca1d721f95f2535ac6a6e4132c71b0527dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTVJTU65%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCTD26eMxTBzTiCWi6sgzlppJPf3HFaArsqPPqBQDfX6wIgNTjEAlWUw0dqsRzC0O1rRqxHYWb38ECRcrn5rEwaqLYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGV8%2B7QzVPSr7sbQhircAybLZeIM0%2FzbLiG9unIHKitVWtsI1xIuLxXTka4LZPKj9Yy2q2ZJW%2Fdy0aSK4uX9aUFFinU8kmdHkf9dYgLKFhR6qKpZf1U6w%2BqStAAUoyKZejjG2qZDpwe%2FZK2NOlwN8WfAiU3gawaHulbeXwzWqPVc0h8vvTW27CUIL3lkT7HIKZAHtFvU2J%2FcuPGq2JuJh%2BJ2hZs3urFhlhAq9KuxYyld5vRVfXIiQtpueSc75zX9AAE7gEVurkvA0slSEnFfwlzRMrQiKWMiP2te3GAYP%2FzLcebzkG6Tl3drmaLkTj4zkvZ1ryQt%2F28Wg6PWpDOk8GRuD7ikWxl%2BtpzwEbzyKFQzduO12Ing2js2zMYvMnPwtHoopIxm5Ra7sTzEJqGXBf2sfETtAgaofVRWuGGuLOYF86JCCVNPX6Y5Q%2FAsZhdsEiqYpJjmTcWerCJbd80fpDFD%2BsE3r90AF9rtZQLM2T9lOESxjp1xF8XSYIHW6XRP97gGGSMyk8PR3em50VDQV1K0gXv7NdU7380KU%2BynDHRlqtkYbpulNg5PymHKJ%2FFOI8xynl6V03PHTFGbTXzg1Q9sHXARELkthlp7uoXE86VuU2%2BDvLWfY5EdpEOvV25OSmhGzav68k9U%2Bd7lMI6V678GOqUBn9ZN0%2BccAasWhA0Uma4yrTAmuTTlwpE5ktXrEdflI%2FJxfVYbKF27klWJTpdwCauEuQhQnR1Ka9IgDh3zp6tZ7Yd0217g8Y6MqYzJh%2BVc46zLTHajyCNqNyQl63S5yuf3IuF87d6tLuklzriLzL%2Bapx1RxSpTyn7walimvBLRQpgYNI%2FA%2Ft4pS%2FqM%2BJq3UEP68wS9UgCKuRU2zi6S803a1kQGZlm%2B&X-Amz-Signature=d844a330229193172f538e3dddfe3ba5f2591e2f749e610574700bd26820b1a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UMBXCAO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFsBktELPFkpU%2Bpnouirsj4kyU1DG2mCHQICajqguOJVAiBfBjYJzrd5FH33Qb3kvk5aTwOV7QxEC8lKlyVouy8t3SqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTuz0Kvti2%2BF1nHuvKtwDcLzOTggr5WHmtIUt%2Fd9%2F3SdzQYO7mZocupSXEe%2BSSuvAApcb945bcjuUfAePJjqVKot1ZsYys1rBGKNh0l0PBDHa1U5ulO%2FnIUPSU79HnuegK2nC8A2oXmu%2B5brodQ%2FtSQzZPWOZF9DrNc5brpM4xXrjkOfGXlr8%2B0sWbWT%2FDVvM71kwKowcFJ2e5Y5g7AqAyEc85MnHjgdJmM3ZuG7ORASmT%2FeRK%2Fr8uS3Kj0FiVoJSswnsoNeN2AlhRFHlyCftsF1MLiq1XUHmQ5THWwker3qKeKVsN6EQ43kAK94HfJ%2B2ToABkjk1dZ85UeAdMp%2BTeCnh1izYq5Q%2FwhBUvUuogQPvBy%2B4q7OXt8BmNgjxMjfaMxQXbZStQLRrmCurw71OAw%2FIkrD%2F6pjsgGtXuiBInykHZzp3W8D2Is2fTFIeaC1HLhduZFQKsY1RnYRuf5w215ycxaBU0BLGO%2B5NL%2B9UKteTWdDJtJDVkOE3vm%2Fg0lky7rxmcFk49Tf1Kj%2BG0OF%2FgVUxbQZjIZHxnib1w73Ms86yq%2F0sup0B8ywLZdw8LMbUedChPsP359TO0OPzZJ6JHafeuCWt2RP82vFaXGwnpi0t7aVf6FoAasQN3OfdNa6fP9pZzbGJKlLvvAUwhJXrvwY6pgEsZaVdzbPkhR3MeIwIaNCGadYidqLIup2XgoQFcq7lnPvSLiQGbEOV6Pk9ArkYbNMoI1KWR95oZ%2FSCunZ%2FqLK%2Be%2BsiWqIoDoDZnyHULUCQ65YdWYbOUuj916BL3pmp75Lm3eEP%2BQpbrvS3cet28cLpwdBXbso9S4TABFYmaUFwHXfOfC1qwrKpuDudhIWZza4v5bzw2diTot4bj%2BgZsI4GCNMR6vhd&X-Amz-Signature=00385749a5a11476d2c320d84746aa09df3858fc6878835646c6e5d0734db915&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKBHNMYD%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC%2F%2BrOk0eDkliR4FjJrqGcInIkXbg3JWT8WYeQ0uU5mhgIhAKNzLu9rx7CvT93wIqgcL4qOVVx%2B4fyx1L7DdiDxoBkCKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPC%2B%2B%2BIIAFcRbwkD0q3AOKs9uMTFoni8g9Xk0gSYaxH1IMUqrOE1L1sIhDl8YQ4DwyPiapvOfjWK8Mga4heECqQJFmC2gfMVReRSL1aiFseDiFfMdL6f8%2FxnPrDKaf4Q%2BD8THhCHsDWtbXv0VDfwsxR%2BeHz0qwMobD9bHnIXEjaDYDlI%2FE%2FTMh7pTGrbD5WX4MIcgOcpQ6B8qAJ1SqFHNgKBXqnLWANq4lv1sGry9ELwwf%2FwJWRsV9Q8PVS8EYcl7zqs2WsAllUqanjSz1Qn171fCvxIIXFhcde080ZBz1mD6Tvff6FoEKSua1vPt6GL93CWTToMZdFBFrvqji0MziQs6pr%2FeeIaaLYqNWOoEznrR456kLq%2BS7%2FE2qlyjPyT40v7rLfY%2BX5kTyPp9fHu2%2FlzrZ%2F8yiWRaUrZSYwhCTTxJgV74ZQkZKAQuth2CaiW99f35Tt%2ByY%2Fi7qbUJdi%2B6vPxdbMDqL%2BLLafn2bbjCvLirg1spYp63V7ls97MfrYatIuluVMZnMo%2FZFVpnabA5BmN3slmH2B6em0UNYqBrkvzQRM%2B%2BTHIlIFr8nEhLJD8sR2jW2ikZPWfxIAtOquDJ6ki%2FYo2aq%2BV1hHJJ7XMoOA8d3bc6j6RsquTJ3q%2FvvMTa13JI%2BRrQlOk8%2F8DD4lOu%2FBjqkAbO0%2By8eNHFTJrRcaYN0U7MgTLmJXc0AuRYwAXpMWB48i%2FJWdKld%2FepvUgYwnhphZTDZ7fn8av1vua9rPFUnMA%2BIA1lQOR1SNsVVa3e7IY3ik3BHPT6U7BrAT%2F4o9tf4wZoP9qy5w1%2BvgHqc%2F9wOQwjVDx7B46TnVSX2iVjnJ50uqfla7cTaY8b5GyfNQIyQM4eupMYboHC6SkxXW1lOL5MEVwNd&X-Amz-Signature=6179f088491c7998195cbbdd63fe88f989704eeb375e94cab09fbc12fab6fd6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
