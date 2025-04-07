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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKR4GBTV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEicovPBByrdQ34VF4KEvMXDKxMPbPSsUG%2BdF3bl8IcuAiEA2zUxuixD%2FoWRfnNDUzaU5J6Wr%2BTtWnIWv%2Bo463pESeoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFJ61XCT%2FETh0SbzuyrcA3BImL1QLP5HitTZXBAQlAZ%2BOkTIaB1TWtcI7hsajDH%2BY%2BO0HPvBgapbxpDQI2e4VgNIefQ5PQF8Dh%2B0%2F%2F7ZwiJPQTkB48ZjdgxEsm8VcHQimF0b1R%2FicSFXZi8Sl4nnD3ZGwoo%2BHN2J%2B%2BNi4nPcHPleLqIgaVqg08d5XWegHDFFDko0FaUqLm4fPKw1UqEklhMmtjpRfimbd7DLUBWT33lwrcyONI33Pj5U9lyXHCVrOsjqZ3qifbC29GdGIHAxEocbDiFHhjwFRmj74Z2hRgUSws6U%2FK2khZ4dWenIQe0%2BBIWmsqmpVeJgR5cFo%2FQDl75DJm8U5SJaftS%2FEijGaOR3zE4tI7Qswu89W%2BcfUq6eas9xa0r73E6vb605%2Fn%2BQyYszgk4fFIt5TYDrD5wX2RovnyJxYh1o7zi9HFNVRnuEYPtQghd0LkxSz6GmwInxVOawk7HBNVBPxF2hAZ42bOfPnmGxwOz%2B9iMmX1CdhO994imRm7A1fosfanfpMNOjyzeo9%2FIEarywKEiocRo%2BhUIcWg8ro1Vi5XmYd2QnvsbZKLqVff865mvDiC4HRoYvcfiERuCj%2F7Y6XAON8mp3C%2FLhpvyGAeBUpqt7SXrYc5wJFIIxJy5PGiKpFas7MIDrzb8GOqUBdY22BGxELAYPnCC%2BV2QHqmpluXhKxTkY1HaGyFCOBPoIfom%2BkBvvqkrRpB%2Fq7hP7h5dQFL6p5D%2FNMJLurclbnUMsP3%2BLSdyL4eiMqym2m9lWTS11TxjGTfdXrJl6VCa7gyVa86T7QQO2NNuwjWLuxlOJaBgY%2FSKYVbKSw9%2BQrgA0ILS6UHv5Lrjz01DdzjC6SpSkJFZ8dS7EdHRtv5MmFrpLK9yk&X-Amz-Signature=2e72ceeb788ba55fbc42c5950fd2ef5581b6c67a2cf994157e2eaecd94c035af&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKR4GBTV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEicovPBByrdQ34VF4KEvMXDKxMPbPSsUG%2BdF3bl8IcuAiEA2zUxuixD%2FoWRfnNDUzaU5J6Wr%2BTtWnIWv%2Bo463pESeoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFJ61XCT%2FETh0SbzuyrcA3BImL1QLP5HitTZXBAQlAZ%2BOkTIaB1TWtcI7hsajDH%2BY%2BO0HPvBgapbxpDQI2e4VgNIefQ5PQF8Dh%2B0%2F%2F7ZwiJPQTkB48ZjdgxEsm8VcHQimF0b1R%2FicSFXZi8Sl4nnD3ZGwoo%2BHN2J%2B%2BNi4nPcHPleLqIgaVqg08d5XWegHDFFDko0FaUqLm4fPKw1UqEklhMmtjpRfimbd7DLUBWT33lwrcyONI33Pj5U9lyXHCVrOsjqZ3qifbC29GdGIHAxEocbDiFHhjwFRmj74Z2hRgUSws6U%2FK2khZ4dWenIQe0%2BBIWmsqmpVeJgR5cFo%2FQDl75DJm8U5SJaftS%2FEijGaOR3zE4tI7Qswu89W%2BcfUq6eas9xa0r73E6vb605%2Fn%2BQyYszgk4fFIt5TYDrD5wX2RovnyJxYh1o7zi9HFNVRnuEYPtQghd0LkxSz6GmwInxVOawk7HBNVBPxF2hAZ42bOfPnmGxwOz%2B9iMmX1CdhO994imRm7A1fosfanfpMNOjyzeo9%2FIEarywKEiocRo%2BhUIcWg8ro1Vi5XmYd2QnvsbZKLqVff865mvDiC4HRoYvcfiERuCj%2F7Y6XAON8mp3C%2FLhpvyGAeBUpqt7SXrYc5wJFIIxJy5PGiKpFas7MIDrzb8GOqUBdY22BGxELAYPnCC%2BV2QHqmpluXhKxTkY1HaGyFCOBPoIfom%2BkBvvqkrRpB%2Fq7hP7h5dQFL6p5D%2FNMJLurclbnUMsP3%2BLSdyL4eiMqym2m9lWTS11TxjGTfdXrJl6VCa7gyVa86T7QQO2NNuwjWLuxlOJaBgY%2FSKYVbKSw9%2BQrgA0ILS6UHv5Lrjz01DdzjC6SpSkJFZ8dS7EdHRtv5MmFrpLK9yk&X-Amz-Signature=c2709a3671883e82e50f1b4b6d4f3343f97c9a429b2ad1d2d94dccbfc7fac7dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBW5GLLK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVkBtMBUtLTdP8i7DIqjwutEdHu0mSFFhHfvx%2B2Ipx2gIhAJR0pt%2FsXjYCJECApbmtTLClIeDSS0O5Q2L8FhWHaowZKv8DCFgQABoMNjM3NDIzMTgzODA1Igw59EUga0Zw9B%2Bp3Hsq3AMSiH6qBDCTsSDbBS%2BsKK%2FL%2BIh%2BIOSy4y88vul9fIpIqZCRUCVgBBi2o%2FNambkYM9WCzJ8zRrF9KQh1BHluCjKL138OUvNoHAOyoVfkrM5hF3yXzP%2B2pr44cH3cE7ETFUHaakElS%2FGhwkKUZWo3fPQ8jO7N1aBvNxV049Jm%2F%2Fv4c4%2FBd5qt6F3aam7fRDZabyRgQe77NWpshoG8V2hENEDbsjT41%2FfSkE5x1QbdlTS%2BPbQBlX5qkTjGtYEWeJPGszWjZ3IxMZC2P2%2BrFWsWqqCSpCj7TvkUxcPnvmDaVzg9V6YUUPRPszEwt0Ac%2F3qFBUzJ2Zoq4U%2BO%2F1EAYmgRHXY80uVR26LtjqUREVjQc69lcvaNk8V5LTx%2FTAZnDyu7TuGAbnpcoUwFszluozkQqdHFPcYWYg7me999mUlbK4ZH%2FD3HUcsYBHOvTP9rhOk0lg%2BhjqiArK%2F2RDhx4Ez4qE11rSC3bY%2BIr5ir%2B2Qp%2BAGCfY2HUZ%2F4Y5RdRMYI3Tk8gUa4EnVxlqc52cPNwOaKZ2hLYKQidbnKI4UV2LCnDQgT6A31WvLAkjy94nQ7kNf0RdqHtMVgjnUFJ1hLTgQWEoWAGd%2Fq0FlHHhEloLnT6WwVuTc6gpeKW%2F24H3Q%2BRjCZ682%2FBjqkARcG6WkvwAqHktBUWfL9LcLIZNoZbvYyFFX2QQGrIpcbYmtWmqXckHTW2qjWiA4iwI5RIUHUM7KMtDoSRDVwy1Hkq9TB50HOJLt8iRFNecvqqPRmzrf4oiH88G%2BDlBYcY8pFZKUTMJDxdlJjiQfQOaZFVYTyk6lWkV%2FL5K17HnElNVsSggDgRIyxyBLlVfaaPAotjqkte7RrBPY%2F3tqOzf0nQSVU&X-Amz-Signature=8eea6caf16f1741c2e2841320a1a08aa183ef79c4c2de1024f02247aa638ae98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VTQVABJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyS7BwF1mcaWC7h0fD6Bfq53YD%2BKQqTfDd2wZotj9McwIhAO2fU6bW%2Bn1z23EI0KWlrSwnEQ83c6s3eIFiK9PaqPIcKv8DCFgQABoMNjM3NDIzMTgzODA1Igz3CpXysN5lz9FPVVsq3AN2nRSZBDwDf8kNQ5iTyRX24rF0nOmrT%2BWQrjHPcAQu3MXuT3j9xzTP%2FEuIRXwLpjpc%2FL6Uk0395nlVQ10E%2B63CwcC4ORLyJllvMTdCGVe3s6sEy3Qg4nqEJcBlUc%2FBEW0nt601wnMbwBnZbtw286%2BtHg2rh0TvVTZMuwmBHy6%2Fp%2Bfc6uQsq6CNlhcyUCG9eqHt9coIH%2F25D6XYzsYOdjQi5lKers08ppzemFPeS%2F9SO2uCux%2BbjE6uFxfcNjXyL6pKjSL96I3PJ%2B1F0xsfjou9EpVLHxOE1VR%2B7AQUOtPxiuVg3xhtVPE6haWvNo4c2k3%2BJXQ31ERFXU41d62G1hKSE3SFa7OyTKfFw%2BQBDweKfrTJq%2FzQrq60Z3CW3v3zDbPcR9ueu7pE6NtnhKlfIY5zndHKHPki9qGLVK8pZbiwGVoRKxgUt1PUi8xGlU51GacfYLENOLqJcpZl403ybJrcdBCfhnE47Hw4HToXrXaYFIGgCjYwaF3mRC2P64HRvTKeQ3rBJAmsxFY8nlzhufemjkz0c5gLeb5KvuDytcUVAa1RoVlaBTzVZn%2B2y3wf6Z8EGV3oZ0YvpwCCyFeXS86ZeDVbqpv0tCAckvWkWQC0DFRlOFi6ayuf%2BIjbCzCF682%2FBjqkAVoSkur0QKOzFBzchQdcIoW%2BhMxnAVci1AbrnjA9BWEtD5x2ce0AuHiUaW8nKe9DTWnlnYihq9SS8eFaTMBMzyoRa2HfqvzUyPBYOAhS9jAxtlNIciQ%2BlD6HdGPfD%2FeZ%2FoYURe79wo9A7LLzd230AquXHTIsX3Udg4RgNku8su84Oq4xB1R0c3%2F16sKIDSfUbxLowUiWv9ygI0tAcODi%2BHa8QFy7&X-Amz-Signature=cc31f56c2fe86de1b2b3a7368651f2d84e4926b2bcb08972cf5db0b0f4d1d2b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKR4GBTV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEicovPBByrdQ34VF4KEvMXDKxMPbPSsUG%2BdF3bl8IcuAiEA2zUxuixD%2FoWRfnNDUzaU5J6Wr%2BTtWnIWv%2Bo463pESeoq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFJ61XCT%2FETh0SbzuyrcA3BImL1QLP5HitTZXBAQlAZ%2BOkTIaB1TWtcI7hsajDH%2BY%2BO0HPvBgapbxpDQI2e4VgNIefQ5PQF8Dh%2B0%2F%2F7ZwiJPQTkB48ZjdgxEsm8VcHQimF0b1R%2FicSFXZi8Sl4nnD3ZGwoo%2BHN2J%2B%2BNi4nPcHPleLqIgaVqg08d5XWegHDFFDko0FaUqLm4fPKw1UqEklhMmtjpRfimbd7DLUBWT33lwrcyONI33Pj5U9lyXHCVrOsjqZ3qifbC29GdGIHAxEocbDiFHhjwFRmj74Z2hRgUSws6U%2FK2khZ4dWenIQe0%2BBIWmsqmpVeJgR5cFo%2FQDl75DJm8U5SJaftS%2FEijGaOR3zE4tI7Qswu89W%2BcfUq6eas9xa0r73E6vb605%2Fn%2BQyYszgk4fFIt5TYDrD5wX2RovnyJxYh1o7zi9HFNVRnuEYPtQghd0LkxSz6GmwInxVOawk7HBNVBPxF2hAZ42bOfPnmGxwOz%2B9iMmX1CdhO994imRm7A1fosfanfpMNOjyzeo9%2FIEarywKEiocRo%2BhUIcWg8ro1Vi5XmYd2QnvsbZKLqVff865mvDiC4HRoYvcfiERuCj%2F7Y6XAON8mp3C%2FLhpvyGAeBUpqt7SXrYc5wJFIIxJy5PGiKpFas7MIDrzb8GOqUBdY22BGxELAYPnCC%2BV2QHqmpluXhKxTkY1HaGyFCOBPoIfom%2BkBvvqkrRpB%2Fq7hP7h5dQFL6p5D%2FNMJLurclbnUMsP3%2BLSdyL4eiMqym2m9lWTS11TxjGTfdXrJl6VCa7gyVa86T7QQO2NNuwjWLuxlOJaBgY%2FSKYVbKSw9%2BQrgA0ILS6UHv5Lrjz01DdzjC6SpSkJFZ8dS7EdHRtv5MmFrpLK9yk&X-Amz-Signature=c3fbef55c5d822432eb3bd75a5f5972b236ebdd7dcf54c581915236f92f4c5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
