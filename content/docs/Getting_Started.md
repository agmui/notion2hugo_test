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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q3RSJIK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDa%2Fs342HLnSFPA32Iq65a5d%2BFfGzMbBR3iWsoY1p2hIgIhALz05q8jvmc1uM04cJXcAwcNXBGcfiU%2FKAcOIhJFertzKv8DCDcQABoMNjM3NDIzMTgzODA1IgwUSj0yLNXIGzUqL5oq3APwLGL4qZcsWsJyZldEatz1AK90ddFrdMM4uGVxrRWxZP8kT%2BUTdK7q16sHRa1A%2FihfbdWoC0CV%2FQRR%2Fnx8VshYy9scdqQMDBxbFtz3Z0w7fecp0TzSDoV%2FnqMtUs1pnihKzCsFxQYUy9I38AGfFhT1dN9E5xfAbJW8Y%2BFyOzRhzKgZYUzkYkKm59BmnqRxDraKgEcntvimkNetDjNTvIcq2cfcafqYAK%2BgCKUJJbrNLy7FcTXEM0XiLVvb19KZra2gLJJXTSTpegNXgNMsqkwc3VFv%2Ba4spIZqouuMKPnxVrdqRb4BnLmpQJZpkx7Dijj1kL3sapyO1Qlnun4lnA6DmuUjx%2F4%2BHEHiPoggxdhMgd8zJYWcW3Zl0lwK1YusH6H2sZ36guJKg2z7i8P1yzhouwXXDT%2Brznt%2FS9zOXbRyzsoKDvsF%2FmELOiUqm4Zmhidtpw%2FfoDU%2FxbEDiyAcOEW8V1sdBmmaLPgkUl962eJL%2BDHJoUdY2YCqD8umxWMYqj%2Fu6MmRNXuG5DbYCKKd8MzaeNNCStGHmnHzBHTR6lT1MXpqDQr8VNyJ9coVmhpI%2B3X3tUDlzoJi5Ugw5ul2dHM6jfs0ywTwBPrkir3XA7q6af6ACO37TpbfFu8HDTDF99XDBjqkAWlGDEEOYwooeji90RAiHAz5iHM0De38ohgZdya1CWq%2Fz9Sm8vFWsZnoyUZBDKSEPKMDi%2F%2FeWXk2mS47LEu%2F0OU3TYrLNoxPnzco4ZO3%2BWrFyIEpB0BonJ34MdUgS8b3Dej0pUa00OtF5Lx4IBKDkslsqg2Xd2O5aAmkvtsyR219HHbi%2FuaP2fn9nwcTIH8DxyHRmY2pZscEkutgLGbRW7aoPhNi&X-Amz-Signature=44896a9d5853b04572c66d6adf6e6354201c468ebbe384a58c92f50af426b563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q3RSJIK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDa%2Fs342HLnSFPA32Iq65a5d%2BFfGzMbBR3iWsoY1p2hIgIhALz05q8jvmc1uM04cJXcAwcNXBGcfiU%2FKAcOIhJFertzKv8DCDcQABoMNjM3NDIzMTgzODA1IgwUSj0yLNXIGzUqL5oq3APwLGL4qZcsWsJyZldEatz1AK90ddFrdMM4uGVxrRWxZP8kT%2BUTdK7q16sHRa1A%2FihfbdWoC0CV%2FQRR%2Fnx8VshYy9scdqQMDBxbFtz3Z0w7fecp0TzSDoV%2FnqMtUs1pnihKzCsFxQYUy9I38AGfFhT1dN9E5xfAbJW8Y%2BFyOzRhzKgZYUzkYkKm59BmnqRxDraKgEcntvimkNetDjNTvIcq2cfcafqYAK%2BgCKUJJbrNLy7FcTXEM0XiLVvb19KZra2gLJJXTSTpegNXgNMsqkwc3VFv%2Ba4spIZqouuMKPnxVrdqRb4BnLmpQJZpkx7Dijj1kL3sapyO1Qlnun4lnA6DmuUjx%2F4%2BHEHiPoggxdhMgd8zJYWcW3Zl0lwK1YusH6H2sZ36guJKg2z7i8P1yzhouwXXDT%2Brznt%2FS9zOXbRyzsoKDvsF%2FmELOiUqm4Zmhidtpw%2FfoDU%2FxbEDiyAcOEW8V1sdBmmaLPgkUl962eJL%2BDHJoUdY2YCqD8umxWMYqj%2Fu6MmRNXuG5DbYCKKd8MzaeNNCStGHmnHzBHTR6lT1MXpqDQr8VNyJ9coVmhpI%2B3X3tUDlzoJi5Ugw5ul2dHM6jfs0ywTwBPrkir3XA7q6af6ACO37TpbfFu8HDTDF99XDBjqkAWlGDEEOYwooeji90RAiHAz5iHM0De38ohgZdya1CWq%2Fz9Sm8vFWsZnoyUZBDKSEPKMDi%2F%2FeWXk2mS47LEu%2F0OU3TYrLNoxPnzco4ZO3%2BWrFyIEpB0BonJ34MdUgS8b3Dej0pUa00OtF5Lx4IBKDkslsqg2Xd2O5aAmkvtsyR219HHbi%2FuaP2fn9nwcTIH8DxyHRmY2pZscEkutgLGbRW7aoPhNi&X-Amz-Signature=b552a9acfaccdc2da693f3115ae1f22031f3f114b9d46e3664bd3ca639bc5293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q3RSJIK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDa%2Fs342HLnSFPA32Iq65a5d%2BFfGzMbBR3iWsoY1p2hIgIhALz05q8jvmc1uM04cJXcAwcNXBGcfiU%2FKAcOIhJFertzKv8DCDcQABoMNjM3NDIzMTgzODA1IgwUSj0yLNXIGzUqL5oq3APwLGL4qZcsWsJyZldEatz1AK90ddFrdMM4uGVxrRWxZP8kT%2BUTdK7q16sHRa1A%2FihfbdWoC0CV%2FQRR%2Fnx8VshYy9scdqQMDBxbFtz3Z0w7fecp0TzSDoV%2FnqMtUs1pnihKzCsFxQYUy9I38AGfFhT1dN9E5xfAbJW8Y%2BFyOzRhzKgZYUzkYkKm59BmnqRxDraKgEcntvimkNetDjNTvIcq2cfcafqYAK%2BgCKUJJbrNLy7FcTXEM0XiLVvb19KZra2gLJJXTSTpegNXgNMsqkwc3VFv%2Ba4spIZqouuMKPnxVrdqRb4BnLmpQJZpkx7Dijj1kL3sapyO1Qlnun4lnA6DmuUjx%2F4%2BHEHiPoggxdhMgd8zJYWcW3Zl0lwK1YusH6H2sZ36guJKg2z7i8P1yzhouwXXDT%2Brznt%2FS9zOXbRyzsoKDvsF%2FmELOiUqm4Zmhidtpw%2FfoDU%2FxbEDiyAcOEW8V1sdBmmaLPgkUl962eJL%2BDHJoUdY2YCqD8umxWMYqj%2Fu6MmRNXuG5DbYCKKd8MzaeNNCStGHmnHzBHTR6lT1MXpqDQr8VNyJ9coVmhpI%2B3X3tUDlzoJi5Ugw5ul2dHM6jfs0ywTwBPrkir3XA7q6af6ACO37TpbfFu8HDTDF99XDBjqkAWlGDEEOYwooeji90RAiHAz5iHM0De38ohgZdya1CWq%2Fz9Sm8vFWsZnoyUZBDKSEPKMDi%2F%2FeWXk2mS47LEu%2F0OU3TYrLNoxPnzco4ZO3%2BWrFyIEpB0BonJ34MdUgS8b3Dej0pUa00OtF5Lx4IBKDkslsqg2Xd2O5aAmkvtsyR219HHbi%2FuaP2fn9nwcTIH8DxyHRmY2pZscEkutgLGbRW7aoPhNi&X-Amz-Signature=7d9df8317c1da3bb0466b48bfb7ca18a28c5d214733dffec249dfb690d90103a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEDOZ7HG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICJymJYAoaQqTw26QBtG05qqSN7Lg3rRGDa4trIwT2D3AiBCIiDfqLzb4xWq4LX2GSS5rP3a19hhwA0GH6IT3SuXjyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMhUXWUS%2Be3FcQpNm9KtwDjWFInXQB0crB9FqCWZ4wmLEOfm2%2FRqaMAniqVsFc4GVhBXSNnoYO4lsypyG44FEntReVS5IN6Iq7KLkRT76yTgCfFPKydAfnvYYgMCscrBgng20g6LVGg9JpBjpKhp9a4ASnduK4JZolvqM%2Bu%2BSers3mEtr%2FrU3fe6uDB99XNayNd%2Fgv1YJ5XH8Kl6fsc0MqDysG0b7DCsFO1x7EzLvTl0ZuhkcRX6DMF7E%2BznYu2mMWfeQCBrNUsegGcqp%2FGaCTmiB2fowY%2FWrrDtmPY3e%2BddrAT87pxphLgFJgr5X15hj9PV3Spk6ZW43nOfni9AXhKuT77lwkrf2iYworKnLa5TXRdbDWom6dOZwxmwmD%2BrPr89WWF8LP2ddOEudhjLwDAiS5VZFPh6N%2Fz5vEpLQpqRqXwhkIZm2F60j04wKdkOVe04fo%2FfqXo2sN%2F%2BNSFar5Q7mrebLOZlapBPkf0MbvEciVE0s47dcgZDM2c3fD6rKYYxzTjIwHbtqmADtIcerx1%2FLXWqg%2FNBWp0dAs9x3aW7xQnK0h3PXMx0s7X%2FZnopxD%2BW7sZpGhlPF%2BPqe%2BbyMM22vd6IcIYxyqDvBSzPlarMU%2FnGuuRrHgpOwuX%2ByTXXXV1d7DTA%2BYHTjQmyYw8ffVwwY6pgGAS15RIjshn89A1joB3ll44Yn%2BgpPqi3Xp%2F3Gbycs0ysnDU7wLE3AAvwiBHf2jskXG77eO7ozn%2BhUzDjRWZsCVVe1Wp5voSUubboiH0V9suOtcUiK2mWn%2Bh4BWlxYHFpsqDNYik6pAorxqtekB6DvJ1%2Bk8aX3hOh6sVqdn7Qvz1Jdj4Sz1omIdhYcoDzTy713BB6qR4EkPmHrzraR2dIi738TOnoID&X-Amz-Signature=c1eb3b03cd0809ea779bde068d578b596c180b949d47e52bfcca56d20f7263df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YION323A%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCYBxL4BeH6Ap3DdEq6tMB0D4aTc94xe%2FJy%2BFmgNZ6vfAIgdY89oVypVQpTLXzd6PEGRl9kM8ajPf8DYB3H192y3osq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPFmLffXkLZFGgKm6yrcA%2FwjOm0hZ%2BEdxL442k77a2S6Po5fuwBGLcNujBMDPRnQYOrGTe5yNZkzAuLeOWsj%2FVahHwW70i6mEr05ViDXimp%2Bzc6wVRmo5eAwyBjFPso1rfrS9vzStoGThzGfJEFAoFLI5Oqwlq5Z7unkAvt4iInYpyRTWeLl%2FshxmBUJluGcscnJyD%2Fnx33fOLLtpjLd6RDk1gqedIN2WFyxi6BJ%2FYRU0M17HY23MSkWmQDtCw7R%2Bm%2BOUEhHahh%2BfGgy98L01owTzD5yvaJ%2FqpWB1utqHPhI1QtB%2F649NlWFEIG7f1hAfT4spijoxjdh1eZqobvH8EnAO%2BLk2GcUyEuQRu3FBl9jStwnZOvxpFOPExaH6gGRwELLpp2QRp9kjg%2FXqZrA2%2BcqnnoL2%2F9hoqXp6yCKaIKn0OhXBs1QuhG1KV1bUfEc3vB60q1iDkiw6aU9EeV8GvTiP2EdaPj7Ya5eaIeFa7pierDeKGyTBRgqVxwLwpq2pbMWEMSGCtfHwW7tlMkc5yKiDD8ajpVLd2xNqRxJydqKhb0gPf1lMscBEZDRR3pvYtVAjm1DHHNa31dEOnJxPDMRJCvFtZOBCeRx%2Bmv9FZ2TUolJWc1pksYlneY1OeYYswXNEFEagCiiOQkRMLv31cMGOqUBlQSkKt2oJHeqxv4JSP6AT7K%2F2LelPNIAR%2BQH3M3pBzMi%2Bvmi4louOKB6QJrtFaC6z6EW7%2FR7%2BtK1gt631ry71RMOanMyQzbkZYXo2MU9G%2Bi2g6hfbbB1jiLLDDIcn7%2FgZfBX9RvEgFGIBr5GzAR9oUBV1YUusiFsHCe6mz%2FUZ%2BEv%2Fj69EdfVsdHdbKyHA6KzKv4FAIEsZMrdhjbTh8iKryK4dCkq&X-Amz-Signature=039c7c538d6d154c65a7fd10acfd941cc19aa8a7f6225936ad0dd83732fdf6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q3RSJIK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDa%2Fs342HLnSFPA32Iq65a5d%2BFfGzMbBR3iWsoY1p2hIgIhALz05q8jvmc1uM04cJXcAwcNXBGcfiU%2FKAcOIhJFertzKv8DCDcQABoMNjM3NDIzMTgzODA1IgwUSj0yLNXIGzUqL5oq3APwLGL4qZcsWsJyZldEatz1AK90ddFrdMM4uGVxrRWxZP8kT%2BUTdK7q16sHRa1A%2FihfbdWoC0CV%2FQRR%2Fnx8VshYy9scdqQMDBxbFtz3Z0w7fecp0TzSDoV%2FnqMtUs1pnihKzCsFxQYUy9I38AGfFhT1dN9E5xfAbJW8Y%2BFyOzRhzKgZYUzkYkKm59BmnqRxDraKgEcntvimkNetDjNTvIcq2cfcafqYAK%2BgCKUJJbrNLy7FcTXEM0XiLVvb19KZra2gLJJXTSTpegNXgNMsqkwc3VFv%2Ba4spIZqouuMKPnxVrdqRb4BnLmpQJZpkx7Dijj1kL3sapyO1Qlnun4lnA6DmuUjx%2F4%2BHEHiPoggxdhMgd8zJYWcW3Zl0lwK1YusH6H2sZ36guJKg2z7i8P1yzhouwXXDT%2Brznt%2FS9zOXbRyzsoKDvsF%2FmELOiUqm4Zmhidtpw%2FfoDU%2FxbEDiyAcOEW8V1sdBmmaLPgkUl962eJL%2BDHJoUdY2YCqD8umxWMYqj%2Fu6MmRNXuG5DbYCKKd8MzaeNNCStGHmnHzBHTR6lT1MXpqDQr8VNyJ9coVmhpI%2B3X3tUDlzoJi5Ugw5ul2dHM6jfs0ywTwBPrkir3XA7q6af6ACO37TpbfFu8HDTDF99XDBjqkAWlGDEEOYwooeji90RAiHAz5iHM0De38ohgZdya1CWq%2Fz9Sm8vFWsZnoyUZBDKSEPKMDi%2F%2FeWXk2mS47LEu%2F0OU3TYrLNoxPnzco4ZO3%2BWrFyIEpB0BonJ34MdUgS8b3Dej0pUa00OtF5Lx4IBKDkslsqg2Xd2O5aAmkvtsyR219HHbi%2FuaP2fn9nwcTIH8DxyHRmY2pZscEkutgLGbRW7aoPhNi&X-Amz-Signature=dc6631ef3ceb46765657600c12a0820ba1563519cdf05fa6d7ecb46db3699601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
