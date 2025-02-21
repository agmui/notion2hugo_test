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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYHPZXS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bnFpGDNrRJigqHctCVJ4POWc9UKqJIjmFznB2UX16wIhAJEto735coYolV%2FKysVxqVKxFUNNAUl1k3aVRBrdXgYRKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9gYtfZgOrVTEq1FUq3AN1rZQQ07KuE%2BrsqsSfnDIA77rQvJYvVZAShoWC%2Fykeb1%2B2RtO8NGUpQrLZum2M2xedP5sa%2BqoAbOlaixZB%2FnAbR0Fzo1b720%2BNiXJFmt6Mx%2FSptqRcQ5DmsS8VGcuC0axCVAs4NHBnJJXqkPYw1hwZcyeZDcepLHk6vKOgg034zJT1C872Xih2TbuPhaCrWUbac2GWwiJB1ut72TsEFVlgyPm2OQ0UZ%2FeeuPQGlCIHD35RqgPFxrMKtXZBsqSuFm2QbiA2qv5Iy7jWX5GF04E5NXdVzAqLt0WCmXul1Q8Z%2FWhEud2QGknxN%2F4Y72CwDMEfjxhwF%2BAApbPwk%2FairCqbKG%2BvZxMnSTzmI9oG3tfYVHLdzH3Z%2B1whv8B44j5xHuaUjmzlb1eWrZRzV4eIFwiJutS4gf99JwQtXQrvrf4LZoAJMoZyTIA8a7DN%2BGhNwT5BJwr4hNU%2FuJkW4mmIAtNBSHC9C1fa4yDrvAwfPX4RTLGuBcYDkxhjkT3hlAXRTifFNG0Wi8viGCPu77F9ttNDOMmY031QvUH1tm190aJ8Dj%2BM1I3lXjofCeV0BvJrZYfnTwlb%2BZXtGakrZykTVIEt2zsxmnzaEOJ0wbaB6b6yAs9Nub2M%2BKC1lQcC8zDVo%2BC9BjqkAVMbFyR6oyLxX42XHZBrRhJe8ST2Txup09DDEJSXMYprrq%2FpbWLubaslFONIPajd1EpXHht0M%2FHcO3RRriIUihnAhG8%2BSf7pgT%2FBbAHSucqZH1KawUc6zSKGDRT87i1pCaV%2BrtNRJ1bpNS5gtHur2IiO2Cb0XB1MIwUZadjK%2FHrF3tuajxnS385bmnuIR5ecQ2CU28bMMHpM7AEFQE3lFDvQJGqY&X-Amz-Signature=02084962c6157c7dcd2d8513147ae1e02fa42533f7ca16c1571e1ce7d28d971a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYHPZXS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bnFpGDNrRJigqHctCVJ4POWc9UKqJIjmFznB2UX16wIhAJEto735coYolV%2FKysVxqVKxFUNNAUl1k3aVRBrdXgYRKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9gYtfZgOrVTEq1FUq3AN1rZQQ07KuE%2BrsqsSfnDIA77rQvJYvVZAShoWC%2Fykeb1%2B2RtO8NGUpQrLZum2M2xedP5sa%2BqoAbOlaixZB%2FnAbR0Fzo1b720%2BNiXJFmt6Mx%2FSptqRcQ5DmsS8VGcuC0axCVAs4NHBnJJXqkPYw1hwZcyeZDcepLHk6vKOgg034zJT1C872Xih2TbuPhaCrWUbac2GWwiJB1ut72TsEFVlgyPm2OQ0UZ%2FeeuPQGlCIHD35RqgPFxrMKtXZBsqSuFm2QbiA2qv5Iy7jWX5GF04E5NXdVzAqLt0WCmXul1Q8Z%2FWhEud2QGknxN%2F4Y72CwDMEfjxhwF%2BAApbPwk%2FairCqbKG%2BvZxMnSTzmI9oG3tfYVHLdzH3Z%2B1whv8B44j5xHuaUjmzlb1eWrZRzV4eIFwiJutS4gf99JwQtXQrvrf4LZoAJMoZyTIA8a7DN%2BGhNwT5BJwr4hNU%2FuJkW4mmIAtNBSHC9C1fa4yDrvAwfPX4RTLGuBcYDkxhjkT3hlAXRTifFNG0Wi8viGCPu77F9ttNDOMmY031QvUH1tm190aJ8Dj%2BM1I3lXjofCeV0BvJrZYfnTwlb%2BZXtGakrZykTVIEt2zsxmnzaEOJ0wbaB6b6yAs9Nub2M%2BKC1lQcC8zDVo%2BC9BjqkAVMbFyR6oyLxX42XHZBrRhJe8ST2Txup09DDEJSXMYprrq%2FpbWLubaslFONIPajd1EpXHht0M%2FHcO3RRriIUihnAhG8%2BSf7pgT%2FBbAHSucqZH1KawUc6zSKGDRT87i1pCaV%2BrtNRJ1bpNS5gtHur2IiO2Cb0XB1MIwUZadjK%2FHrF3tuajxnS385bmnuIR5ecQ2CU28bMMHpM7AEFQE3lFDvQJGqY&X-Amz-Signature=f756d6f8c026eff2066cf189b8775743c9703ee102df0c6391c3ced18326804b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHP2LVO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6IizwIPfaRyJjkQeyJNCksLb0lZ10cMfVs3SnH%2FYKFAiEA2uItBlLnuYOCgZhLQNp9%2BnI13yYqkTcCqK0bJ02xFbAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGisrxNqbNFuS3%2B6WyrcA4uNnRXUNve2Ggv0fCQMI9W8hycj9PLfrzA7hxIp%2B5fUSxpRAKOjWkerSqtQyknzTNWVMdnXOLece4q%2FWmzwcT1REdc61y5HyXY6Nth6YcftaTwHjfizoF55%2BznqO3ezhOukOuE%2BJac5rZU6Xhmvh4PI4UmbrUZf7ZYK%2BbLhNssJh71w7DPMp8uUQ9ki1%2BJHlGkSmYkXQHHqp4M1Q3qROwVD1bNYEoXD8nmK5rIcA8Oxs20mkkCk%2BTFkdHXj1Sij0a5cXaTJYLLkQ8kZkAK6TMMs92wmxa4eN20A5UUMc5m65zmyokX8C53SVbNt2cy82MmGts2rzhApU79lcKkD2tfEqYZZe1WGaUvTD9Wh9DCtPksWmWdE1M7RFZk8mI1Fj2jgb1DzJ%2FaHCbJck0s0GxEIdh3BpAnsLSXq1eLqSOOXea6cId08y3jpjcOtcFZuWKXF8%2FHHDBWqq9AEs4lHiejl0U2z5tbxeg%2FR%2BZYUEbGPIFJexvsFiFDgs5H4ErLe4dDnUDrVNEdndENHPLLu9bcd5z3asHVO%2FxO15lLj9ODtv7ffjee4V4rsV6AIPw1Y6RjgacmGvaxxwbbNpFb9oJdvN9Uw03EMGe1mCUSFkV6qPHQYyP7xcVVWmFc2MIuk4L0GOqUBzbdtH5eY6fjGn7AMhtap0y8uPyh4kRfbqDOw%2BbhObSq8Bg5g33fALkZtkgkjx6WA3OUQoLjWwrpZvYai2EnJoWCYTn8AoTjKDCutc6rNN1ovauwoLq%2F0YqM35f6mn82MyB%2BbjGsUQn7PzdZTYvBzxevf7f8wEKXG%2BxL6EuNutX23WDtX5ZUjOCYKaNkONjRU2uA85DXRFZaavPmnrMh%2Fmdr8E2Yc&X-Amz-Signature=78065020950f2f1de8ce29a63b5f17b91e2503e315d1068c2150013ed218d156&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727UA2YC%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHjjsc5ZJj29vtx0TOcMLoT6NDhrzpQO9rwUnJ%2FykZVAiEAnEkevmq2%2BUJs8FpvHbSEO97AzNO5onNyRC37eMrIfGAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWR9r%2F9YhQ7DcWVwCrcAx5p6%2FJjnA8t5OJt2pdxo8M9G0ZL5O0ZiD33vtwjgQbs316ZJ34RwYBiALrnbAE6rEqYRlHVVoQo4qDuSltyZQZUtIEuWEP9JMmx4uMeG3krjHt%2Bl3wVKYH1GqPeb4OutcirrugCWHp5RPBWUqskdMXyOL6ubRv8QlRwfP%2B0i%2BJvSag5Jy2ZrRzlEJhdNCQ2ioOuEDNO%2Be3sCSzWXPYQbPGfJ5w5MGzx2wMZDawhl8VkUXVxYbdvAjxZDOIQWcVfpx%2FxB0HaVNqj5dIVJ7xfy33WRm7XC1Ex4pqHkLRCLY0TYlpFNPf5xZiITCPvA3LyiYkPenLSpECAOqf26a0vlh8yFwhJbzZ4xKTdeCbRtYoys9G0RL4bH6Cnur%2Bvx29wX%2Fc6eh9t%2FxxjdmZn49QVI0JXHZl%2FBbH1k0VuiTLc9lnZFPGAbQeTA5FAOGMOcjwvWsdxZgBaQ3c%2BbtrDJ2kt7L1vcD%2BTHG%2BlomhDa%2BXA5uxWSmbvdKTQKSbbK0NncsNWWsIPjBQuAT3f2jeSYGwQ6PnDK2U7Hbjymn4TRyePpMtjT5zI111%2FkrhvLMZuBiwiwqqxf7sXoG%2BA%2B03p53VaFMD2D%2BWlwdkaSeSrFF%2FwbwYui7kAo2qOyvTDTllFMPui4L0GOqUBa5w7WqPmnmKUStrtFslLQP5R%2FGoL3l54YLLRhtwqJGDwXhAnHqRLCw9PKSMlU5ZWymDyX9z66oaTTUMPz9V%2FqkTrHpPR62PLrxPmHE3QWx5BDso4UBr9nzIGRK191%2FnrrFWrNkXe6iuPFzfiQXjwaHYV%2B0cGyxSzToKmAGYaKRj5pGETGWB8Z9A3dOUzOPqQZq1M6PLe3rde8Dgm4FHFjK4cA1cX&X-Amz-Signature=4044b39b678ca54f9feeebfa0dfc45a13522043c0b53f6cb471f9d47cd710495&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYHPZXS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9bnFpGDNrRJigqHctCVJ4POWc9UKqJIjmFznB2UX16wIhAJEto735coYolV%2FKysVxqVKxFUNNAUl1k3aVRBrdXgYRKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9gYtfZgOrVTEq1FUq3AN1rZQQ07KuE%2BrsqsSfnDIA77rQvJYvVZAShoWC%2Fykeb1%2B2RtO8NGUpQrLZum2M2xedP5sa%2BqoAbOlaixZB%2FnAbR0Fzo1b720%2BNiXJFmt6Mx%2FSptqRcQ5DmsS8VGcuC0axCVAs4NHBnJJXqkPYw1hwZcyeZDcepLHk6vKOgg034zJT1C872Xih2TbuPhaCrWUbac2GWwiJB1ut72TsEFVlgyPm2OQ0UZ%2FeeuPQGlCIHD35RqgPFxrMKtXZBsqSuFm2QbiA2qv5Iy7jWX5GF04E5NXdVzAqLt0WCmXul1Q8Z%2FWhEud2QGknxN%2F4Y72CwDMEfjxhwF%2BAApbPwk%2FairCqbKG%2BvZxMnSTzmI9oG3tfYVHLdzH3Z%2B1whv8B44j5xHuaUjmzlb1eWrZRzV4eIFwiJutS4gf99JwQtXQrvrf4LZoAJMoZyTIA8a7DN%2BGhNwT5BJwr4hNU%2FuJkW4mmIAtNBSHC9C1fa4yDrvAwfPX4RTLGuBcYDkxhjkT3hlAXRTifFNG0Wi8viGCPu77F9ttNDOMmY031QvUH1tm190aJ8Dj%2BM1I3lXjofCeV0BvJrZYfnTwlb%2BZXtGakrZykTVIEt2zsxmnzaEOJ0wbaB6b6yAs9Nub2M%2BKC1lQcC8zDVo%2BC9BjqkAVMbFyR6oyLxX42XHZBrRhJe8ST2Txup09DDEJSXMYprrq%2FpbWLubaslFONIPajd1EpXHht0M%2FHcO3RRriIUihnAhG8%2BSf7pgT%2FBbAHSucqZH1KawUc6zSKGDRT87i1pCaV%2BrtNRJ1bpNS5gtHur2IiO2Cb0XB1MIwUZadjK%2FHrF3tuajxnS385bmnuIR5ecQ2CU28bMMHpM7AEFQE3lFDvQJGqY&X-Amz-Signature=64e774157d5c70bc2c7aef06cf379be2ee51f9b77e98343b2773a10d24ee70af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
