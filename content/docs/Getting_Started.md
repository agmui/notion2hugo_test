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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJ55HAE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC66pHk%2F5%2FBsAK9kucEa3l7MYSD%2F44S36JOLWYCMTpJhQIhAPN7xLf9amjSDtt58bqvvxn45CGBzAq8v%2F72SnfiB9XhKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZu4SZn4qU8RoEpxQq3AOeFRQ%2BJOXpoFZafkpMyzqA4qUVwh768Gnj971m%2BHF%2FvrfMt05b4X%2Fd4xb2WAjq1Khk7409tNezPTg1c7e3bFbeJA5CNunNRSTSsGIN5yNwCZ9gbhDeO8UZV9rWnaJeRAVCG3mFH62tmA2%2BEeCcZ2wkd99ZBq5AtKu5B2cjiwn5x6X%2B%2BfW%2F%2FVwnslVVO%2BtFRdcu7ZKW4LRTza7KvtCxOdVkiRCI8s7E%2BtKpwoAJRFaXFL20XT7HHGhKukgkpiWy4aW3F9oM64clh9OEY25XaA28nZWb47OxhKviKhrR1NBXLtRVu%2BlThtiLAYeUxuJkYKDHsNhzZ6I2wW49NMwf2pKL9r%2BgZi2BHUw13eHWiQFjeRwsdK7VAT1eQ3BgUeNAnRU8%2FblXh2Jfc1AuL6voLP%2F6SGoSKRGq1hrLowQXr87sN2IK3ao6b2w8C5jCdfLjN6aMiOyHKIfAPuhJ94vIk5MQdlHhHMjzGW69Xci3NJ%2FEhesmD5ToDNAfMMUGzm26CQJMtF7pQrKdCrkmh4YmvpjigAyYQfCPHprEKXhS1P98McR%2Fy%2F%2FlyiZ16P6JysMIOhpZcH%2F3VZK16s7%2BhNHgDjpltAkvxrSbE8UTv%2FCmF3NNRiOkws66kQslrQFUwDD2hpnABjqkAZVnfVncpr4OCuxu90o4nDl8FEn%2BctAmlwEb4lefiBh91iZGWh41%2FRi7fyvqbEvw%2Btst5QithSWYvuvyCLFSi6%2Ba9%2Bh4oY2hmMR%2B9jKNIHOB%2F1cmJbWAt7TRul2v1Mxc9mXxTe0o24KPv1oCYbpugSUr%2BULGp%2B1osvkra%2BRQgsix6j7ACrnJSeM7UumZHfgR4RJuIdjKqD3oGvnx0kqdg5lOM3sY&X-Amz-Signature=197903b775b5824aed7c8195d52e8a1c27a424d78cf52c58bad4231e125bb2bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJ55HAE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC66pHk%2F5%2FBsAK9kucEa3l7MYSD%2F44S36JOLWYCMTpJhQIhAPN7xLf9amjSDtt58bqvvxn45CGBzAq8v%2F72SnfiB9XhKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZu4SZn4qU8RoEpxQq3AOeFRQ%2BJOXpoFZafkpMyzqA4qUVwh768Gnj971m%2BHF%2FvrfMt05b4X%2Fd4xb2WAjq1Khk7409tNezPTg1c7e3bFbeJA5CNunNRSTSsGIN5yNwCZ9gbhDeO8UZV9rWnaJeRAVCG3mFH62tmA2%2BEeCcZ2wkd99ZBq5AtKu5B2cjiwn5x6X%2B%2BfW%2F%2FVwnslVVO%2BtFRdcu7ZKW4LRTza7KvtCxOdVkiRCI8s7E%2BtKpwoAJRFaXFL20XT7HHGhKukgkpiWy4aW3F9oM64clh9OEY25XaA28nZWb47OxhKviKhrR1NBXLtRVu%2BlThtiLAYeUxuJkYKDHsNhzZ6I2wW49NMwf2pKL9r%2BgZi2BHUw13eHWiQFjeRwsdK7VAT1eQ3BgUeNAnRU8%2FblXh2Jfc1AuL6voLP%2F6SGoSKRGq1hrLowQXr87sN2IK3ao6b2w8C5jCdfLjN6aMiOyHKIfAPuhJ94vIk5MQdlHhHMjzGW69Xci3NJ%2FEhesmD5ToDNAfMMUGzm26CQJMtF7pQrKdCrkmh4YmvpjigAyYQfCPHprEKXhS1P98McR%2Fy%2F%2FlyiZ16P6JysMIOhpZcH%2F3VZK16s7%2BhNHgDjpltAkvxrSbE8UTv%2FCmF3NNRiOkws66kQslrQFUwDD2hpnABjqkAZVnfVncpr4OCuxu90o4nDl8FEn%2BctAmlwEb4lefiBh91iZGWh41%2FRi7fyvqbEvw%2Btst5QithSWYvuvyCLFSi6%2Ba9%2Bh4oY2hmMR%2B9jKNIHOB%2F1cmJbWAt7TRul2v1Mxc9mXxTe0o24KPv1oCYbpugSUr%2BULGp%2B1osvkra%2BRQgsix6j7ACrnJSeM7UumZHfgR4RJuIdjKqD3oGvnx0kqdg5lOM3sY&X-Amz-Signature=5d57d8e2ee2dc4c62f938b020a4700a9a1ceddc97d3f78f4dedd152a843f138d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466653K3MQG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGt92HjsD%2BQWTFtyHGOWs7lCw71q8l6dOJpdhCQ%2Bo1kAAiBScsvM6pA4LQeVr7kKhMDYOxhphIGm1u%2FsUPvpektH1yqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfmFQfm4Z5L8te7hfKtwDjEoX2M6hzamXQN5VxIvahjIMVRb5EkF%2B3CUJL%2BaAq95%2BlKtzEM1VMJc7VRIpeZQFH8bxN6%2BHHauGYliL6RXcEhkfPImmO9oBNGFtCPzJbSDAW%2BxRskx7iGhjCwa2jc0E7wCiLkMLebFaP%2F0ivWXeKx2735BMxUHup6tMlJBHYrHOq5YJEsIz%2Bmxfsns9Sv9WGfVuCN6KXYgnn2y6J%2FBw6TY3j%2FjAa3GaXgDzA40X1ejbaU35bywo8tYjPyORXqWNF2CXP6mFJzSmMwq3I8CisaNaHKzI8MY03mdEUU8aj%2FK4g0z68dekkDBVgk5QL7yto9Ius8gy5tR3WqxsFqcSUjYpPyVsMLSirIkALf8Vngv883u3Q4ReZQkcCQ8TviQ1lmG8Y0NlUm%2FJn%2FWJt3f6xBGJ64piuDGcnLTWtokptaFcahOxvhpWfx3qmX8%2F01dhuOoEDV0vS%2FzZzoHp7C1BqO7%2B7NV%2FTId1wEA9JYJ4zEscPdEhjIgPCWdX4VzaDjH%2BUQFmPenAxd%2BW3%2FKKCn6C9jJRIN5vDXDE0mTxWYl47Vn0wDxzVEEuW0Ceydb3ArwpUVvKfgy%2Bt6I74o%2BWNs6oIGRyPM9TDkeNOFUu%2Fne0iTGmdaV8lp2uXp0KxkYwkIeZwAY6pgFzi7vWQ0kTi4%2Bg7tPFxP44YnoO7I%2BK6WXIphCau786KDEghivyOLuVD04lqvfnsuC13ttrbJ0qs%2FAxe%2Fu9QGVTOD0fNtitfC3Zv2IpF85qWbDbn%2BmIbMJGw8IJvYp1Ic%2F0UkwIg7llsJzre6s95GcwLCVnHl5ua5%2B5iYtaNEjUKUCVV1kx1Ngzjg4cRa%2F%2FerAjBLgn5eOJHMNB%2Foe2NSQSKJo%2FqQxg&X-Amz-Signature=b6c02aa71074fe59185f172651b15fbd9d5312adc11ba4a1322b65c8a71eee91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63OE4IO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCvKnRnjWg0%2BX7d2d5cogFSzWCD0UoMUkFs9pKVlA4SCAIgCV314vYwDyL3mdx6cBnIdf6m5e9gvn0J5Lem56rJZPkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgTA9%2BflSu5xEEUgSrcAxZ0jfDm7ES8%2BQugOYP3yjdqunfo%2FBw2EZ%2F0jBV%2FqVX%2BEQbJdr9gDoEG3opq8aegCKK2FVkIXozE2nCFcC1K4kYANrYvG%2Fjt2zaulqP1%2Fycn4UQ2ckFriRWr2TGGVpCHXEgbVuLVRn%2BufeevwP1oBr8b%2BUOd%2FDc6JyBqtgojGmDztQfP5YSQVteyy7y8swhzSDlvnnPHk8Mca22KXPb%2B82gjAd%2FgUUKYlZBiUB23hn59yTglb6MAUJnlArIiAhZQbqClU6AtE05YovWU68nrW4a%2FTrVTPw7yuocPlnoNsFnw%2FSlu5rn29ErLv4INzakSoJC7SK7c4VH0D0vE4TCT2%2BDijtmQ%2BnkNkLfXmyk3HVgzXwTBwAtyyebwZq5ogP6BohcLobSK6lvKjHjyyuRh4uHVqMhPaqBGbr71b2UZI%2BrTPWDbvMnUR0SKj45rDoLkVRH9vc4v6JoJihloMONySJl2wlFRJqhCNdLHlDgh9d2S55NiA3rDnDBf8ZQEVREw8zFBUghQHMN3QR9uuViaWh4upRqOhnMyY7fAtn6EGTZwFwEDzxx%2BVEp1LR2UY23xLPmJYwyK0pCe8eC3dQQfgw2Mjfo0hoaJWK%2FbBre7EwmdsZcR6%2BgpV2pBg1FyMIaHmcAGOqUBhaf%2BJrO6%2B9W0HJFgxFBtRM4F%2BUEQp%2BUW6iMf11GRwUoTEeuUGHXy9UTVFfhyD%2B1pgfkzntMFdCQ956Yyas3YCfrP%2FYnkGaJtTgx0xvjb9XdYn%2Flav89RW56BKPBWb5W%2FMix835Tv3iAwxnrNFY9gmX%2Bsox7eOn%2BnpKQdqncUZzjUIPF9kkutcqG65%2FAawptuq1V3aFVeJFyCr%2FbViMhXaQiibyCZ&X-Amz-Signature=da9c0a15065e9ea083d8284a995c0b75f1010618fe06070e453a15f0242e4154&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJ55HAE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC66pHk%2F5%2FBsAK9kucEa3l7MYSD%2F44S36JOLWYCMTpJhQIhAPN7xLf9amjSDtt58bqvvxn45CGBzAq8v%2F72SnfiB9XhKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZu4SZn4qU8RoEpxQq3AOeFRQ%2BJOXpoFZafkpMyzqA4qUVwh768Gnj971m%2BHF%2FvrfMt05b4X%2Fd4xb2WAjq1Khk7409tNezPTg1c7e3bFbeJA5CNunNRSTSsGIN5yNwCZ9gbhDeO8UZV9rWnaJeRAVCG3mFH62tmA2%2BEeCcZ2wkd99ZBq5AtKu5B2cjiwn5x6X%2B%2BfW%2F%2FVwnslVVO%2BtFRdcu7ZKW4LRTza7KvtCxOdVkiRCI8s7E%2BtKpwoAJRFaXFL20XT7HHGhKukgkpiWy4aW3F9oM64clh9OEY25XaA28nZWb47OxhKviKhrR1NBXLtRVu%2BlThtiLAYeUxuJkYKDHsNhzZ6I2wW49NMwf2pKL9r%2BgZi2BHUw13eHWiQFjeRwsdK7VAT1eQ3BgUeNAnRU8%2FblXh2Jfc1AuL6voLP%2F6SGoSKRGq1hrLowQXr87sN2IK3ao6b2w8C5jCdfLjN6aMiOyHKIfAPuhJ94vIk5MQdlHhHMjzGW69Xci3NJ%2FEhesmD5ToDNAfMMUGzm26CQJMtF7pQrKdCrkmh4YmvpjigAyYQfCPHprEKXhS1P98McR%2Fy%2F%2FlyiZ16P6JysMIOhpZcH%2F3VZK16s7%2BhNHgDjpltAkvxrSbE8UTv%2FCmF3NNRiOkws66kQslrQFUwDD2hpnABjqkAZVnfVncpr4OCuxu90o4nDl8FEn%2BctAmlwEb4lefiBh91iZGWh41%2FRi7fyvqbEvw%2Btst5QithSWYvuvyCLFSi6%2Ba9%2Bh4oY2hmMR%2B9jKNIHOB%2F1cmJbWAt7TRul2v1Mxc9mXxTe0o24KPv1oCYbpugSUr%2BULGp%2B1osvkra%2BRQgsix6j7ACrnJSeM7UumZHfgR4RJuIdjKqD3oGvnx0kqdg5lOM3sY&X-Amz-Signature=d92b744d23199ac1668f7e765f108c56c5900050b7fa6e3dabb89875dcde154a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
