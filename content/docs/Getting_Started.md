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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWETWIWY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCCW4N6%2FIIufqltKnPzT8cVaIEjRQtpkKJfk1Ut5R%2BwaAIhAPBBZl%2FjM4Lltx5ax5JFN%2BXbOgCrNPiW35%2FsM79IPedgKv8DCEwQABoMNjM3NDIzMTgzODA1IgwM618Gqw%2BYWYw6RUgq3AOvn8JU7Uh%2BBxYpNvvdfpplqIHQH8jUICgWPZVLgLUL%2F6cNs3VY6rQVa5JBzeJxnyqhXc083CfMz2bj7OXFXrtbNUJk3UNlVhs3A9PMfbzohsFHMqnCyKMt83qdNJQyHr6Qv2kd1Br5034X7F2w5Uxu6tXfz0CgPeajSi%2BTJrgT8wp3K3fZr%2FKo2O9tezkjuQDrjn53%2FwcOM%2Fot%2BkguAmWiSJdKmfeF0zwQ7cdgrbvHBefrgUR6pBPQUfG0a89LZsEnEmMSt0L0JNtv26zgt%2BIEUR5jVUPQl1Ya9wacgy7T8kkYN2Kg01EZ2%2BQAQ%2BUOoOX4YuipW%2FDFW7ScDHtRvkLI6%2FuJ54%2FCPlgHq4rjjV%2BTrPVQN%2FfSs1OsOgAOoN3%2FMJVllo6NNsbSj7L3nTsJgDPYZIFO2q0ZRIksvCB%2FjFgMijYfAIZo%2Blwc4zra5t3t1QMvwamD6bo0nDDWktrdPK%2FKA3TUuFRbnc3epcxYPDBIE0B6oJt0yt%2BAesLbyjsuYJIJxB4qhNr0b7MWUZ0gcKt%2BUhdgWfuUEcZ2GHUotVsFRzE83BwbP48Uh%2BiVnn6dWwDCxIi%2F6biJKZTpCy6ny1NMi1afNVPNeCVCTqGM7Fd2oUc3Nhrsblh7qpxdAjD3%2F6y%2BBjqkAYfIcyo8dO%2FwSdkgNIYrd%2B%2BJ1TujHwKhHbc8V2N6LJlXhr0IxyKxlufRZze%2BzKYBwPjdBme85mOl9elp8EwimEY%2Fz29O1lzW56lbqqQ2nOt6MoVNLpnUG6%2BYyAuJ5hobP5Fmcw1dMvBnsjwJPaSi5R6zLcRlX4GS4N3p3GjvevF10P58G%2FK9GG%2BBd0NL8ymXuavB%2FNmRmuo08bKA8HHl6909SuM3&X-Amz-Signature=12bd8da6f86122864806f704cc745a3f3ffeb5a1c9f16b6f5d8313fcc185cec2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWETWIWY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCCW4N6%2FIIufqltKnPzT8cVaIEjRQtpkKJfk1Ut5R%2BwaAIhAPBBZl%2FjM4Lltx5ax5JFN%2BXbOgCrNPiW35%2FsM79IPedgKv8DCEwQABoMNjM3NDIzMTgzODA1IgwM618Gqw%2BYWYw6RUgq3AOvn8JU7Uh%2BBxYpNvvdfpplqIHQH8jUICgWPZVLgLUL%2F6cNs3VY6rQVa5JBzeJxnyqhXc083CfMz2bj7OXFXrtbNUJk3UNlVhs3A9PMfbzohsFHMqnCyKMt83qdNJQyHr6Qv2kd1Br5034X7F2w5Uxu6tXfz0CgPeajSi%2BTJrgT8wp3K3fZr%2FKo2O9tezkjuQDrjn53%2FwcOM%2Fot%2BkguAmWiSJdKmfeF0zwQ7cdgrbvHBefrgUR6pBPQUfG0a89LZsEnEmMSt0L0JNtv26zgt%2BIEUR5jVUPQl1Ya9wacgy7T8kkYN2Kg01EZ2%2BQAQ%2BUOoOX4YuipW%2FDFW7ScDHtRvkLI6%2FuJ54%2FCPlgHq4rjjV%2BTrPVQN%2FfSs1OsOgAOoN3%2FMJVllo6NNsbSj7L3nTsJgDPYZIFO2q0ZRIksvCB%2FjFgMijYfAIZo%2Blwc4zra5t3t1QMvwamD6bo0nDDWktrdPK%2FKA3TUuFRbnc3epcxYPDBIE0B6oJt0yt%2BAesLbyjsuYJIJxB4qhNr0b7MWUZ0gcKt%2BUhdgWfuUEcZ2GHUotVsFRzE83BwbP48Uh%2BiVnn6dWwDCxIi%2F6biJKZTpCy6ny1NMi1afNVPNeCVCTqGM7Fd2oUc3Nhrsblh7qpxdAjD3%2F6y%2BBjqkAYfIcyo8dO%2FwSdkgNIYrd%2B%2BJ1TujHwKhHbc8V2N6LJlXhr0IxyKxlufRZze%2BzKYBwPjdBme85mOl9elp8EwimEY%2Fz29O1lzW56lbqqQ2nOt6MoVNLpnUG6%2BYyAuJ5hobP5Fmcw1dMvBnsjwJPaSi5R6zLcRlX4GS4N3p3GjvevF10P58G%2FK9GG%2BBd0NL8ymXuavB%2FNmRmuo08bKA8HHl6909SuM3&X-Amz-Signature=7282bf36b9afed6c4380fc9f9f081520b627916b0571ff9e00bd826784cc76f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHGXIY6P%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD19U7Yj7KMsAgGtdgRzVGQqCvzXOGHrITDSCtNxrCFuAIgCP%2BdUrGCYnjMmjmYqlfMQE19LbXSmuGJDL8vzc22b30q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKUgiTEgvxTrEQp1rCrcA3L4ND%2BvTtgPrjj17kUDFFuVGVfC0qh6PDBgnPu5yklnkG%2BNMR8fAnlX7ajPUuc%2Br%2BZo%2B20hutK%2FpQAm1jt2sra9EHXAYjZ47hNpfwwUHNLwPrOpnFZtMzcWx6kUS67bMyz4GOPU9l7zaKlkW3eZXCfbciUgKuaqv8CRGkrvq6q%2BEGRhGATG5QxNsR1lFPjnMsxxsGycFBZKM1Op4QqwmheOS29SJZkruPdPdEyUfHgjIrXsr%2F8TbrInTKfubuIFhsAnhtj8kdIafyArPqka7GDLrkKgvyLyjZ0IB7Jp5xzxEKs6WpO9d4Wv7izu2IpLD0s6df3edzGcn6OtJZ6lnLFmLlpbFZa6JS1pB7OR2LKCNp2vvZxJF%2Filk%2Bn0YD7ZgBqZ9Yj05RdApuKZan9k8dwQYZ8EsbulhnBaXWuF%2BYiTxwXxclnQyzJc%2BuklkyRJgupQ%2B9V4tw1Pr0x8CrDJXOynXoLdN%2FzQRH%2Bq7sfAdZOHzCGO17jnb7g0jt7SIFTNKpGctfvAg7VUYT7zolv2btHnNo7J9EI7ZogE7ee4N3J1wOaEBD1FryQEn%2BqOtlaMFQ11Hr9Yb46kECuxAURAXLQZr5LJTRUs8dY3CyJ0nYK6hs9TrtmJvmgqYWE4MKqArb4GOqUBtHP5RKQiYb9hhC8bbmfxHHQ7uFXvRLUsj3lXOJCLo3iPL08CyUj3hrAz2HNNH4BfctDcFWs%2FfePvkOA3UxnZjR2jBDnnzvicVQOShgczrHLGuWZvAkNkeGgatgw7Y5K94E1KAWmUPohe1WE9kqrTtgMB%2BZ3rturtIcOD9rz1mndCdeH3ADJQtG9TjpbEeB0opBwpTuop3WWwYpCXLw0hayNuP99G&X-Amz-Signature=8d51ffd2ecd2fa34c58d58509fd91c6ad106d8167fd8e3e1f18ff5f3dfc9e8b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUNZKYU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDxV9sbIbs%2B32rVR5RGgr6kZXQTkRuFxjZUirQE3pSTOQIgPGvcfY3Kj6VgLirnFw7gDV99xadRC6mzCNRnSQeRjZcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAsxqUp9G76FCZtbOyrcA6xmiPOEq4%2BKaPMd3rqHYMqmIhvvyXyOHH2wd3KCiFNbAg2rV61dlQyVwwWp9dFi8WXPlA1ZZHMDHHPXE9OaPPFPc5AB2afxXf5QMCZ85v38sK7AE83JiQDzW1pAAvRTt3SH5nsOgl9VOHMVQ5TYo5Jo9P%2BG7lVVJMW5ukZ0SIl4XaPTl%2F2Of5PAGlotAOFai5BDvZhhFZtG2VOvpPOOcf4V5gxCjD6AyNesrzVKcQ%2FXvIugFNv%2FLfZ1CzmEV%2FO068m%2BYWhvfeA9908Wnby77CdRLG3qypxeIIn8nexmiOPY1SjHzWXDWNEuNBjBcZYw8w3AS67cmpCJXnwjUY5iJPxHAPhhky%2BObdqdk%2FNkV%2Bl1P7Y%2FnfKYP6QPkEsIwjdlUMmNH9dL4D%2BUVWQL2loULJ%2Ft2M5P27EOxhk2froCnEDHI0BMZhtuVVP58t0RrB61yJbII6Hjj1M3%2Byg15sUk4gZyeqXx181SqCbdAE8ExIChDiZgAAf9dgctswXb%2B%2F9jRs0zdlKZm5k%2BUlW1FSi%2FUdtltSMTWYwyVuYPXiQcD5R8ZoVTPK%2FMGlM5cCRPBu8zd1%2BB%2BNqwrkoUf2iZ4Uq8fT9zfyjCt8F4S%2BSQcnLSzQs6S9RrevbkvJPe1o2vMMv%2FrL4GOqUB7gnna4bemhtzGJGQR4B9udq1WvMrdiEsujiEda1flFujA%2F%2BDekWHwBaIgQH3jLur1bHSHWv5oX0qn92cNZ9m2ut1g%2BdUjRt%2FWRRJFuqjJJJ3KQbGwd%2F74pvJj46qf4dTHg2s73SnH2uoE834U4iIRF0urUM%2BAHyQ%2FejL0%2FHkoIcTYEMQWacHgtiIzUju9YHQATHjNc7aLMoNVT%2BPzIiRPcWS8n%2Fi&X-Amz-Signature=e197743224fc9564a039ea8e9cb35a990d211d28de55260daa5dd42babf676b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWETWIWY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCCW4N6%2FIIufqltKnPzT8cVaIEjRQtpkKJfk1Ut5R%2BwaAIhAPBBZl%2FjM4Lltx5ax5JFN%2BXbOgCrNPiW35%2FsM79IPedgKv8DCEwQABoMNjM3NDIzMTgzODA1IgwM618Gqw%2BYWYw6RUgq3AOvn8JU7Uh%2BBxYpNvvdfpplqIHQH8jUICgWPZVLgLUL%2F6cNs3VY6rQVa5JBzeJxnyqhXc083CfMz2bj7OXFXrtbNUJk3UNlVhs3A9PMfbzohsFHMqnCyKMt83qdNJQyHr6Qv2kd1Br5034X7F2w5Uxu6tXfz0CgPeajSi%2BTJrgT8wp3K3fZr%2FKo2O9tezkjuQDrjn53%2FwcOM%2Fot%2BkguAmWiSJdKmfeF0zwQ7cdgrbvHBefrgUR6pBPQUfG0a89LZsEnEmMSt0L0JNtv26zgt%2BIEUR5jVUPQl1Ya9wacgy7T8kkYN2Kg01EZ2%2BQAQ%2BUOoOX4YuipW%2FDFW7ScDHtRvkLI6%2FuJ54%2FCPlgHq4rjjV%2BTrPVQN%2FfSs1OsOgAOoN3%2FMJVllo6NNsbSj7L3nTsJgDPYZIFO2q0ZRIksvCB%2FjFgMijYfAIZo%2Blwc4zra5t3t1QMvwamD6bo0nDDWktrdPK%2FKA3TUuFRbnc3epcxYPDBIE0B6oJt0yt%2BAesLbyjsuYJIJxB4qhNr0b7MWUZ0gcKt%2BUhdgWfuUEcZ2GHUotVsFRzE83BwbP48Uh%2BiVnn6dWwDCxIi%2F6biJKZTpCy6ny1NMi1afNVPNeCVCTqGM7Fd2oUc3Nhrsblh7qpxdAjD3%2F6y%2BBjqkAYfIcyo8dO%2FwSdkgNIYrd%2B%2BJ1TujHwKhHbc8V2N6LJlXhr0IxyKxlufRZze%2BzKYBwPjdBme85mOl9elp8EwimEY%2Fz29O1lzW56lbqqQ2nOt6MoVNLpnUG6%2BYyAuJ5hobP5Fmcw1dMvBnsjwJPaSi5R6zLcRlX4GS4N3p3GjvevF10P58G%2FK9GG%2BBd0NL8ymXuavB%2FNmRmuo08bKA8HHl6909SuM3&X-Amz-Signature=00d9df8df832568ac3a3098904f5198ba7e2f9872b04fc19df3f5f7937be45b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
