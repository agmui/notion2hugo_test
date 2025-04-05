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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642RPLTI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDZFxRw235NZJ8pkRFIZwA0Nz7S3mH7xHCOZdChMVbiAiEAv%2BgOBKw1EHUwOG%2FgVb1bscCtPMNRqcDCK51iTHqcx%2Fkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAGyS6U6n6U91e7erSrcA%2Baz2inBzQX3pmjLXEVaOvNUwkFw8ecn1qtdrLsjhqhxtuNH5Yw%2BXtAnDrUvmBRcnkKKwIfo0tI0L9vjxZo3QbF87MHCmD5CFDIWuBggZ0CfjwvIiCD5yooxQZPPAwRZSO16XuusmVoLMsna9z6xC3hrqNdutmFGFS37lPtNrkyfYg4LZdOSSstWQS7bIpwOntRxlp9LffIDQ79%2BRfx8H2MSIe9L6HpjOpAYfwMKLma%2FCfoAycdPj8I4X9Lb6OLbPsBysAobUdhZCEM4xPL06t0vLDJRAzLGwhGPxTcgNlqyhoHw33%2By6zdC3d8BBfek5nfhf0Flphp2lbVLzxtT3uXQR1TipNPo%2Bho6jXfYPr8DOSLPdyaxNSM0awPlvtCvty8LhV7GO4X3qJaJ90Z1iu8C%2F4ksfQNOiic4pGjk%2B7IbQXVkKMoLiJJkCGs3Fw7YSsiOvAuyZ0a%2BG%2BQZIXmwlH954spj6Wzhk0S6cCNKtVQ5HisPkZ%2BAUjJP%2Fj4o7Y6Ga0PTk8avBBdNE%2BdU50CX9k3TDe%2FuFm14fwdsnZIepmNsY3tMfOPqadOAzk7f0dfIZWSki5mEksQCJONsYMJYYVdGHfmhKta4kpT7ujaVtf5g3%2BK%2B9UzFHxA1LjeeMKO%2BxL8GOqUBfiOh%2Fmy8eSvbWybcDXjsUvAYaJIWfuP72yFLdoWyR2Bmm7C5AUFh%2FDF20ZA2sMwPfN63U6cVefvWOazeK4sWCgHMA5MmNgDkKH68zNZYBonI%2FQMF7mvEzGYsSRC3zjmFu59JRkYUnLvsUuPlMyHXc5FD1ocqC9T7vRXyX41resH4z0T8yPoCuh59qxutc57VJR17h7f31UnB8AzvYwdAnDcQiMGY&X-Amz-Signature=0676370fce3004504b39aa32900ed0a23ad5288d8dea38fecb58eca2118a7561&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642RPLTI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDZFxRw235NZJ8pkRFIZwA0Nz7S3mH7xHCOZdChMVbiAiEAv%2BgOBKw1EHUwOG%2FgVb1bscCtPMNRqcDCK51iTHqcx%2Fkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAGyS6U6n6U91e7erSrcA%2Baz2inBzQX3pmjLXEVaOvNUwkFw8ecn1qtdrLsjhqhxtuNH5Yw%2BXtAnDrUvmBRcnkKKwIfo0tI0L9vjxZo3QbF87MHCmD5CFDIWuBggZ0CfjwvIiCD5yooxQZPPAwRZSO16XuusmVoLMsna9z6xC3hrqNdutmFGFS37lPtNrkyfYg4LZdOSSstWQS7bIpwOntRxlp9LffIDQ79%2BRfx8H2MSIe9L6HpjOpAYfwMKLma%2FCfoAycdPj8I4X9Lb6OLbPsBysAobUdhZCEM4xPL06t0vLDJRAzLGwhGPxTcgNlqyhoHw33%2By6zdC3d8BBfek5nfhf0Flphp2lbVLzxtT3uXQR1TipNPo%2Bho6jXfYPr8DOSLPdyaxNSM0awPlvtCvty8LhV7GO4X3qJaJ90Z1iu8C%2F4ksfQNOiic4pGjk%2B7IbQXVkKMoLiJJkCGs3Fw7YSsiOvAuyZ0a%2BG%2BQZIXmwlH954spj6Wzhk0S6cCNKtVQ5HisPkZ%2BAUjJP%2Fj4o7Y6Ga0PTk8avBBdNE%2BdU50CX9k3TDe%2FuFm14fwdsnZIepmNsY3tMfOPqadOAzk7f0dfIZWSki5mEksQCJONsYMJYYVdGHfmhKta4kpT7ujaVtf5g3%2BK%2B9UzFHxA1LjeeMKO%2BxL8GOqUBfiOh%2Fmy8eSvbWybcDXjsUvAYaJIWfuP72yFLdoWyR2Bmm7C5AUFh%2FDF20ZA2sMwPfN63U6cVefvWOazeK4sWCgHMA5MmNgDkKH68zNZYBonI%2FQMF7mvEzGYsSRC3zjmFu59JRkYUnLvsUuPlMyHXc5FD1ocqC9T7vRXyX41resH4z0T8yPoCuh59qxutc57VJR17h7f31UnB8AzvYwdAnDcQiMGY&X-Amz-Signature=0af2e550cbab15cce0da0d66bae1e502d7e5982d75d7f591259517c7877faef0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4DSDS65%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOMkbwwaLmwUs%2BeYMAAHjfONi0qNvw3wFvCW%2BNGLv3dAIgZ9qyNE5zcmtmHZszCHyUizbot87ww4YQXWg3ME7Ss5Uq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDSbczDglPDIMdx9pircAzpL5bOpvyWl3VBctsvBrFS9TrACPUNzR0oLQGaaHCjlfCpv81cgY8mwyK3nCowXF3qtCGEQyOQtqDlFPNbHEKj%2BQQPFPVduPrsWaTwDqFEXmf8uVGhqlW%2Fesfj3x8wXAWfeMiIw6rf%2FPIw%2B2fthr52tR%2FIt1LUQRjHVvcyBWY0Bw3qWSqSZ6GC%2By70Iy02nrb0Uppwj8qec1zP5ZtpRgnMX62XDK9TC3ogMKCeORi9Kh7TFnQOUi1dOaWiFZ39C9EF992lRsuQlSjkpev8cCAWSANNNRtj1mvYTcKfYAbnkD%2F5XIHnVQzvOmHWRimVBDSIGyo8ftBEY9fjtEhB%2BLTnHfOS5Ga7kUQNJ9qy6W3KMVMkjRCwbNg%2Fx%2Be8Lf%2B0PveMLbuNcZR07ZcZg0Wy5nyeXAJcGOg37UjAAfWfcVpLjJbYdAd9UmK1N4aG3m7QQnP7UctnpNECzpJsiPjqmQRWs3f77rsVzEHv%2Bvoaq6za7DKoUmehHXlwZw9lCWJFFaBtIgiDvJN%2Fo0KHWos4X80YyfvMyWm9abwvbxbs2FyZGWoTbB%2BBgkkxH3y2T%2BLuRnxBb30JEqRvfQ9HSmqNy1HjWla03jKzCMEqZR%2BrHufDuJC4ldNW7NtiH8V66MLCKxb8GOqUB1dEtZR8YcoAE0t%2F4IoIb4rU9nHM1u51aqC6WlAtx5Or39z%2FTwB00B%2FK6XJtIadutGL4IqWdEa6W5v5nWhSUMuXURNRXVKkeeOvQAmQKdLo%2BUM0G%2F5x0HnTpefx7ALEYEMVnh2yQ%2FC4HQEESdgwHUN1Mvfr9%2Fza24IDbBiiUgGvkBhd0GsdDY4jIt%2FrYyrJCedfdtz5sDnXyRcoDS7YTQ3tbTLfdk&X-Amz-Signature=2323cd859db6e835a54270f051fa4512df9f5c63055a74814dd96379b8eb410f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWR4RMUG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXnN2F%2BuFES5eCx2F5w7zRw3VvG9cht%2FwKFAFj2CZvtAiALV7leXNou2mTCfLbi2qg3Azk9TsAr9NW%2FmpFrEPGwZyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMgivbbd%2Fyw%2Bxh0lXsKtwDVVoHHee%2B2Qf7uxiVkPt0Ph2Pe3ToHtRgqosXJXrijohtq6lTQjA%2Ffe0KOFo7mz1ZT%2FBHstARKbzK1UFQi0WyduA9YvX3WVjza5fuvw%2BZv1SMMwN39DyEe0OxQ3UMrpIeollU9xTwxMfd%2Fo1j93ryGNK8YmP4U4kaUB%2BpCYTMhXw%2Bo1ot6OYCr7kSN0pklzIyRUemoaNOb%2F0woF78oU64hSiYIsDyye0UpzYWGGPMfVIhFUSM%2FF5AArNPvM48D0YDOHtTLU5vMHVdI1QAQknnMhlqurbreogT55DepoJBsVqYqTJdwfuyRSLFWMVLPtWNFFHI18BHdYWCtAihKfFANT8TN80eotnCuG6k9wBKyoYmly6lVK35Nh6VNlgwwgZ7NsWpWpB8RFI95%2FeIcW13ZkBVJFYZVsxuHeNnEhio1TJ4t9ipRAxdytJ%2Fb9%2FaPiBn6glk5g2Bkb19xrZxq4vPYHV1696UMTLXnX8fXHjlNKL7uL8KntwBG%2FwzG6k6G4d5VUDy3fqhBR6PfccefMoorhElD74UeylA1z518jONYTDHt%2BpJstAMH7CI5HK9NFoGQr%2FkqxS5fIkdjKHQ2XSXWKLxEfxNbOPzsG18AL9pjM300AD1hFNEUZWz5TUwrIXFvwY6pgGuBUwNuUonveZUgq7oynEyyLTJg3E2ru%2B7W%2BEZBGRDiEOpL%2B%2BEHAGgUyS3RBLV3KW3cq6Kca9%2Bjr0S9oj7gtbWrxRcs%2FC%2BP6rTlGgvc59RJSQKkYym7GIeqj3hDwMhxqb2XmOBo7kv6fHFBqidGDogUNEM1ZDIteTkTQA6ACYbV1j5ixYWeM9FUYNz1ak2CppCHlm8HPh6ZIK8WyssOq5sZ%2BNYnTqM&X-Amz-Signature=9896d921eadff4d9b13404c56eb0cf092a0c29b9e7ad671d278723502dca0021&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642RPLTI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDZFxRw235NZJ8pkRFIZwA0Nz7S3mH7xHCOZdChMVbiAiEAv%2BgOBKw1EHUwOG%2FgVb1bscCtPMNRqcDCK51iTHqcx%2Fkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAGyS6U6n6U91e7erSrcA%2Baz2inBzQX3pmjLXEVaOvNUwkFw8ecn1qtdrLsjhqhxtuNH5Yw%2BXtAnDrUvmBRcnkKKwIfo0tI0L9vjxZo3QbF87MHCmD5CFDIWuBggZ0CfjwvIiCD5yooxQZPPAwRZSO16XuusmVoLMsna9z6xC3hrqNdutmFGFS37lPtNrkyfYg4LZdOSSstWQS7bIpwOntRxlp9LffIDQ79%2BRfx8H2MSIe9L6HpjOpAYfwMKLma%2FCfoAycdPj8I4X9Lb6OLbPsBysAobUdhZCEM4xPL06t0vLDJRAzLGwhGPxTcgNlqyhoHw33%2By6zdC3d8BBfek5nfhf0Flphp2lbVLzxtT3uXQR1TipNPo%2Bho6jXfYPr8DOSLPdyaxNSM0awPlvtCvty8LhV7GO4X3qJaJ90Z1iu8C%2F4ksfQNOiic4pGjk%2B7IbQXVkKMoLiJJkCGs3Fw7YSsiOvAuyZ0a%2BG%2BQZIXmwlH954spj6Wzhk0S6cCNKtVQ5HisPkZ%2BAUjJP%2Fj4o7Y6Ga0PTk8avBBdNE%2BdU50CX9k3TDe%2FuFm14fwdsnZIepmNsY3tMfOPqadOAzk7f0dfIZWSki5mEksQCJONsYMJYYVdGHfmhKta4kpT7ujaVtf5g3%2BK%2B9UzFHxA1LjeeMKO%2BxL8GOqUBfiOh%2Fmy8eSvbWybcDXjsUvAYaJIWfuP72yFLdoWyR2Bmm7C5AUFh%2FDF20ZA2sMwPfN63U6cVefvWOazeK4sWCgHMA5MmNgDkKH68zNZYBonI%2FQMF7mvEzGYsSRC3zjmFu59JRkYUnLvsUuPlMyHXc5FD1ocqC9T7vRXyX41resH4z0T8yPoCuh59qxutc57VJR17h7f31UnB8AzvYwdAnDcQiMGY&X-Amz-Signature=308bb2b0afd0b8ed55016ed048ea8332c72d2a34e5f4e82fe75fb7a78e605c55&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
