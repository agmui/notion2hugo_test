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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OOUAHF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIC9ghKokrf3w2iGWxAv%2F%2Bp9q0Zm6T1N2k46AQSn4eofpAiEA9zezt%2B9JwQHB43b1wQNd10lRLXGD72AfP6zIbhyiEj0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJf01m2X7mhZgzuKhSrcAyKbNkL9LkgmPYZV5adbjraZx0ZMVTCJ0CQsEduiBD%2FZcOmrC4%2Bbo%2Bixnxp8Y%2F0L78wf%2BQqqVoy2IKtcVvppqA1nQ1kqOEgMOihF9pCMp5FdFNwCbGeGaD55LDilZbOMt%2B84cxn%2B%2BpuDpB5N6s4f1n4VdZeh08TDNB8x1d%2FIlEkUY3DpcXm917RHY8ysxjgbt6Ogpfj17HXu%2Fsjvi8uajqoi51v2MniVrPHv9tfUwJRD9kYptEmpkqGscV4l2NQP%2Fpdb%2B%2FXDTxDwZ7Pi%2FWR8ge%2BzkFnI8rhlUDzJHy1gNaaullLv4fVTy8ViVCsSalilBEs3eQ6l86ciO%2BOHX0%2B2E5LmNsz2OSeA2IgcMV7l905xyVD5DiKpmvwAtElTfwQjOpq%2Fk%2ByQoQRseb9tUmL2Idn314MOILYWaYIoG%2B6V%2FqN%2BWmKpIxzY%2Bjxga%2B7mSi9sByp9qewwJU5eUhp89zwqAG7d5ZulAZeJpjGDGG2fwcoOR6wrMpBXRlk4kUdD1KuNd1WdMs6zRP05So1vpLK%2BgeKndCy%2FSTdiKCspiu0%2BSpSagOwDclJj9NEL0idFhxa%2BoBtX6uWuDWdBYR1o4H24BkDAQtkzLNfy1%2B%2Ft%2FkMcDpVse7gtgXYXLUrxZSbOMOHenL8GOqUBtiJWbvChvlol8qtTiZsgft1XvbsNoShXkDqZoB2DVNdOIM%2Bpn7G7Gnn2dAQE9vFJF7rtSUTJwXMPlgpgbYBrsN0d8EbDv1DibeRlYftLia07OSnKMqaZx9ePPunwhk%2F81G3F5ulkyFf6xDYdy%2Bw%2BBKUCxOljhPXtP3M18m17hx3a8XFcVxTs2OZzAwOZtKhUUevu9VxM7SAlWhXv26smmydfmEYP&X-Amz-Signature=abc73d8ae9a94f3cc7930c77a3ab47a3fe69c06220d3cb831ed46499caec220d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OOUAHF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIC9ghKokrf3w2iGWxAv%2F%2Bp9q0Zm6T1N2k46AQSn4eofpAiEA9zezt%2B9JwQHB43b1wQNd10lRLXGD72AfP6zIbhyiEj0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJf01m2X7mhZgzuKhSrcAyKbNkL9LkgmPYZV5adbjraZx0ZMVTCJ0CQsEduiBD%2FZcOmrC4%2Bbo%2Bixnxp8Y%2F0L78wf%2BQqqVoy2IKtcVvppqA1nQ1kqOEgMOihF9pCMp5FdFNwCbGeGaD55LDilZbOMt%2B84cxn%2B%2BpuDpB5N6s4f1n4VdZeh08TDNB8x1d%2FIlEkUY3DpcXm917RHY8ysxjgbt6Ogpfj17HXu%2Fsjvi8uajqoi51v2MniVrPHv9tfUwJRD9kYptEmpkqGscV4l2NQP%2Fpdb%2B%2FXDTxDwZ7Pi%2FWR8ge%2BzkFnI8rhlUDzJHy1gNaaullLv4fVTy8ViVCsSalilBEs3eQ6l86ciO%2BOHX0%2B2E5LmNsz2OSeA2IgcMV7l905xyVD5DiKpmvwAtElTfwQjOpq%2Fk%2ByQoQRseb9tUmL2Idn314MOILYWaYIoG%2B6V%2FqN%2BWmKpIxzY%2Bjxga%2B7mSi9sByp9qewwJU5eUhp89zwqAG7d5ZulAZeJpjGDGG2fwcoOR6wrMpBXRlk4kUdD1KuNd1WdMs6zRP05So1vpLK%2BgeKndCy%2FSTdiKCspiu0%2BSpSagOwDclJj9NEL0idFhxa%2BoBtX6uWuDWdBYR1o4H24BkDAQtkzLNfy1%2B%2Ft%2FkMcDpVse7gtgXYXLUrxZSbOMOHenL8GOqUBtiJWbvChvlol8qtTiZsgft1XvbsNoShXkDqZoB2DVNdOIM%2Bpn7G7Gnn2dAQE9vFJF7rtSUTJwXMPlgpgbYBrsN0d8EbDv1DibeRlYftLia07OSnKMqaZx9ePPunwhk%2F81G3F5ulkyFf6xDYdy%2Bw%2BBKUCxOljhPXtP3M18m17hx3a8XFcVxTs2OZzAwOZtKhUUevu9VxM7SAlWhXv26smmydfmEYP&X-Amz-Signature=93939417cf2be2dd00ee69525d23fcfa5a920ce00faa56e2620e52e565d21635&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFXPMYM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCPh952ZjFwItWGdOFqo8GqM8aP7RGkhmBY5sG2Y5ay%2FAIgRwk7gGXJ3vQdw7xhLTyz27UwzR0%2FAhMvHQLjUCZPrEYq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCatWIki6RfzjyqkryrcA1qU02qrrqvsfdN1SAgJJHSP3H6lg4mOtmtJZTX1XCSI6T1nhF6G59lnYFGqdVlxHgl20%2FvtLHdzwOobG8Sb3RiWckRDceq5K48BsLQKohU7PeEak85wHqfF5KsVoWFdU0H8B1M5xDf0TEnZESxAkmRp%2B8WhGkANy4WXcklsn14xkm7fLBchFXK19bwTWMM9PmwlUyxDMKZW%2BvBG4HemTZVa9i6y%2Ft7MM1dx5RbEhYFVQg6kUmCUxuhOd8pd9Cvy7%2F7KRpCg7FbKuY%2F8igcCBo1g0q%2BS6MZW45L1vuEWx5nFVRgwe6sN4kGrClJiaRwMjhT8DPmYyIW8vn%2BOGegh8Z5QrcKmoUPI%2F93LfV1xYOIpnTHZtHOQyMKxCrZHRjIYyxOpwVIdK1Cu%2Byk%2F5aIj8r2YP1AH1IR30k6Y7zmQaBz%2FHo5cexZzl2UAh7WU%2ByawnKqOBDMlP7nnX8QgXnr4pKDJf7WrtoVOhrERIsdSvnfZMNdfaZomCosgj5fN2f8MfQMinbofRanvyp6IgM79Cg%2BYn2wGdbS6qhAmjckYX0ctbM1U2CMaFIynDpRTy5IXG678sjQFbSNFDdHQYHD1UvuIqmybfGrUoBj40NBFEbqCJuydzdeSlOMo%2Bzt4MPHenL8GOqUBisfJicHwIaYXg4OXPfAmMgxUFDEGVb8fNeK8WaxRkbdcPDq9rE315S7MURVyULbwWqH0yrFfLr3G18Y1fRuCZXPlTLiD1vUvQ1%2BOr0xKBbyp2HtBpHCklz3wjOo1Gw22weJC5VPQQhm2kdOTVZbbYBwrlnVriRpNIU5ojmVVWYl%2FHvAv0UNK4IhnzbVkVxgJiZ8CnpelZndeJv2dLW%2BbC0DH%2FVZM&X-Amz-Signature=fd8864b36d0839e4e7bd0691a3735fad73c426f5eda4b041b7a5a42f226dafad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPYXH5ZW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAned%2B4wqwlS3Z%2Bj5jmBwScognNOYbSN1u2C7rlr5AlAAiBV3aCQ5v%2FA1F4DYCHd1hmudkY1fhGuUx1x9%2BCLv%2F2sdir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMRD2nEt7K%2B9n8vFEQKtwDZDOUR7UCbeP4cRvUezchMJ0D3FnvzY8m8N%2FTOM0srRhST4DvoDuK3RXw1DPBum92ELh0T3aLzbb37%2Bdvex%2BBtFtgc0tS4UWb6L63bFdlpNBUyCPmnotJT1U3XhExxNjhs7kAI0CeftQeuM7SNzbQnCOHSJ0ZlkJwOCBmEOp6nbgwUQ2WDSbhESymCDBtBct4orAflRtTqdErodhpn1h%2BRPNw9am1a1KLLgQFG90ehDGd5dL2yhnBilBWYG7DQ5brRf4tZwPiTIDp6l304Le1ydRwDLvjh0%2FxANQ6mg8hYwWmuF%2BXSeh%2Bjf5bvecZKUZJba0Ev1blQ1G5xaTz708Z0sNRHET2OtiLCES3wx1B3wI%2BsJJkn8wYUJEiPrgmx1pHjIOQwQKkD06tTkVVDV9BepM0qSaJHotY%2FUNCzJqU%2FGOTWvdQ0snnunVxGU%2FNEip5K9JIqxph143fs1i7Vp0zcWP67Bwn9X%2B4%2B%2B9aIrzmhlpUbatjVqFkP09GOhTtZVh514JAPp0kJZjRNy6UaVxvO%2BCYMYQP0LE6%2B%2FJ%2B9s%2BoxzFqbRUHHPHd9mfl8AKDH%2BQ%2FKADnHO7DBF5moFEOqLNj8piBa3F882cHbYqrIDePAQPu1lYPEiTIV5LV6wow9N6cvwY6pgEM%2B3%2FwNoKrGBwnt61Czed%2BOGP0q0RxnAS731bekzLzSvKBXlzLNYHEuZdgeud0MqsDjwZAVV0VuFj7VJC%2F9GbiaciYLIvBIXLDiD8g6Hd2y1HUU6y%2BZoyjCSif3KvTVhz1NgDVFlN8lBv99IqmsyFXmQQvdYtUDxTgn4KGqjq8NfF8AZZ6hROcrHk%2BuY8REsFhuKE4AZW4jcBtaQ1kK4fjkzuLQZp8&X-Amz-Signature=e37658ae44eac22640deb180ff7c58aa40defb0c69b774e54f78a2173fb91573&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OOUAHF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIC9ghKokrf3w2iGWxAv%2F%2Bp9q0Zm6T1N2k46AQSn4eofpAiEA9zezt%2B9JwQHB43b1wQNd10lRLXGD72AfP6zIbhyiEj0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJf01m2X7mhZgzuKhSrcAyKbNkL9LkgmPYZV5adbjraZx0ZMVTCJ0CQsEduiBD%2FZcOmrC4%2Bbo%2Bixnxp8Y%2F0L78wf%2BQqqVoy2IKtcVvppqA1nQ1kqOEgMOihF9pCMp5FdFNwCbGeGaD55LDilZbOMt%2B84cxn%2B%2BpuDpB5N6s4f1n4VdZeh08TDNB8x1d%2FIlEkUY3DpcXm917RHY8ysxjgbt6Ogpfj17HXu%2Fsjvi8uajqoi51v2MniVrPHv9tfUwJRD9kYptEmpkqGscV4l2NQP%2Fpdb%2B%2FXDTxDwZ7Pi%2FWR8ge%2BzkFnI8rhlUDzJHy1gNaaullLv4fVTy8ViVCsSalilBEs3eQ6l86ciO%2BOHX0%2B2E5LmNsz2OSeA2IgcMV7l905xyVD5DiKpmvwAtElTfwQjOpq%2Fk%2ByQoQRseb9tUmL2Idn314MOILYWaYIoG%2B6V%2FqN%2BWmKpIxzY%2Bjxga%2B7mSi9sByp9qewwJU5eUhp89zwqAG7d5ZulAZeJpjGDGG2fwcoOR6wrMpBXRlk4kUdD1KuNd1WdMs6zRP05So1vpLK%2BgeKndCy%2FSTdiKCspiu0%2BSpSagOwDclJj9NEL0idFhxa%2BoBtX6uWuDWdBYR1o4H24BkDAQtkzLNfy1%2B%2Ft%2FkMcDpVse7gtgXYXLUrxZSbOMOHenL8GOqUBtiJWbvChvlol8qtTiZsgft1XvbsNoShXkDqZoB2DVNdOIM%2Bpn7G7Gnn2dAQE9vFJF7rtSUTJwXMPlgpgbYBrsN0d8EbDv1DibeRlYftLia07OSnKMqaZx9ePPunwhk%2F81G3F5ulkyFf6xDYdy%2Bw%2BBKUCxOljhPXtP3M18m17hx3a8XFcVxTs2OZzAwOZtKhUUevu9VxM7SAlWhXv26smmydfmEYP&X-Amz-Signature=6bb8b2fd95aaf5d0d84f9c92ae3e37469ae03467a80a997dcf31140294285f23&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
