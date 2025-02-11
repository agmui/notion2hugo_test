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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNOHGCDF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgP%2BO9dailgKoCrwJaAd43pr2kJQVlODxB2zpuZdM8NwIhAKQGzZ7qKa57S7F041J4WLGw7eGRgkRcnqfLVGRE5E9GKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj%2FNxQNbzzyFEUQLQq3APfrJf3IGLOA%2BiOkZtO5BJ0Zhm3UjW%2FbNOZ8mLMTaycWuZayjnsC3LTBXO2If9mYR4oLoxU8BVEbxGUZZDi%2BYitYN%2Fhdnwqjkfw8QzQabYQ49JOB9QloKed1%2BLrl8IEzEbhajC2P6NjugYkLSQvzMkYDWG1tdfjQazmotMddTcppqhobS3mMo2JKEgkxQDrM%2B82oe%2BYqV86gc8lSg%2BXtuWiUBT33DQfndmMydkQVpOJ3NTlBdnJ2ADaGUeHmnkLXjI6Nd2CJ5987IWJOc83%2B92o62yW68dBe2J6oV8xEGA7dnN%2Bs6TLGVCXtID8WbHHlgoCXlnTfgrHtqqruxI4e8We7TzyAhbZ8r3eD7G7ci8yeKHljCcd%2F40P34mu5fJCnjMRot2lSt19QcvrirkdwgAsV2AaTON6RlSA6t2TUjcMi0VSDRZbIV70ZBbMpq7W5OEO3yAPEtC8%2FiNWCjypdmeX1zQsBrAXAzBVONVfLbmnucx8BCSIFm3D9E2xtnSIFJjBzeLz%2BYmqOdqK7Svbflch%2FikmsMYoMwc3jDaR8R%2BSNLnrH1qSQ2qpHDjQAwIO9jG5xsntp0cOfljYUojqOzmVtRcX7U55%2FtIBM6o4CbTbRpvad4lQ34bQ%2FGQsyjC3sqq9BjqkAZhkz2Fm9pkJFIlFmIoGKsPxHkRnOcdB7Mh2WGGWYeTMvsYdq6biet%2BNi9huHMCh8XlwdhOMqNBkWdomOXVXvG2DPwDBbK2TaYj%2FLhsYIWdR5f27o5Qygu%2FYfsLzid5LSm8j9zJdxN5neD5dSBRQe9NRC8Jh%2BSBWdxdkfUXjBarSq8Ma7%2B3sZse9bcnyRufWit3FZZCPCKeGOrT2sCn%2B4Am6FTfn&X-Amz-Signature=607fb6738d29fb789be127d7b22f3310542d63b4315599f3a5d723674527a3c1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNOHGCDF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgP%2BO9dailgKoCrwJaAd43pr2kJQVlODxB2zpuZdM8NwIhAKQGzZ7qKa57S7F041J4WLGw7eGRgkRcnqfLVGRE5E9GKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj%2FNxQNbzzyFEUQLQq3APfrJf3IGLOA%2BiOkZtO5BJ0Zhm3UjW%2FbNOZ8mLMTaycWuZayjnsC3LTBXO2If9mYR4oLoxU8BVEbxGUZZDi%2BYitYN%2Fhdnwqjkfw8QzQabYQ49JOB9QloKed1%2BLrl8IEzEbhajC2P6NjugYkLSQvzMkYDWG1tdfjQazmotMddTcppqhobS3mMo2JKEgkxQDrM%2B82oe%2BYqV86gc8lSg%2BXtuWiUBT33DQfndmMydkQVpOJ3NTlBdnJ2ADaGUeHmnkLXjI6Nd2CJ5987IWJOc83%2B92o62yW68dBe2J6oV8xEGA7dnN%2Bs6TLGVCXtID8WbHHlgoCXlnTfgrHtqqruxI4e8We7TzyAhbZ8r3eD7G7ci8yeKHljCcd%2F40P34mu5fJCnjMRot2lSt19QcvrirkdwgAsV2AaTON6RlSA6t2TUjcMi0VSDRZbIV70ZBbMpq7W5OEO3yAPEtC8%2FiNWCjypdmeX1zQsBrAXAzBVONVfLbmnucx8BCSIFm3D9E2xtnSIFJjBzeLz%2BYmqOdqK7Svbflch%2FikmsMYoMwc3jDaR8R%2BSNLnrH1qSQ2qpHDjQAwIO9jG5xsntp0cOfljYUojqOzmVtRcX7U55%2FtIBM6o4CbTbRpvad4lQ34bQ%2FGQsyjC3sqq9BjqkAZhkz2Fm9pkJFIlFmIoGKsPxHkRnOcdB7Mh2WGGWYeTMvsYdq6biet%2BNi9huHMCh8XlwdhOMqNBkWdomOXVXvG2DPwDBbK2TaYj%2FLhsYIWdR5f27o5Qygu%2FYfsLzid5LSm8j9zJdxN5neD5dSBRQe9NRC8Jh%2BSBWdxdkfUXjBarSq8Ma7%2B3sZse9bcnyRufWit3FZZCPCKeGOrT2sCn%2B4Am6FTfn&X-Amz-Signature=5954b34bcf0e6f1d16ba087b24bc0c56c5857afa412c68b9baf2b8d48a7df27f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3HB6I2M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1ZrJjWhxCMNsjRbQZXk9C64h265mCrtPV0Ge9KuqczAiEAn1pPVwVkwxXFaHocsNKJMmw%2BzuSDocz0iX7hAj1adqMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG7lUuwFIV65JEWVSrcA1NeDhTzHB9l3TgFyPG3t7DmBgf4eEqnt5wtdryOr2Tpx59H9YUxII42LRLMhpzpdju%2F6S8aasHQ48Nqc%2BPyCNmlJkBYtwKDRPCu7IF1IubTIBZNKTE5Qe6RUlc0opUYeUUrEeVCz6EtypAJzFNJ7UTMucNdxOKUQjZAJ8MCWcLWRNF8aWtUGED4paKW5dP0JFXaQXxFS20wifolC2jX2NB8VSpY5QH7BNsj9dRT419MBJrq5BvZIpTdgzcx8M2Uk52Fr50SnKqCCMRVnCdajN9cngg20UC%2BJUpryhw2aukiJW4hwhq19pM9M3nrM3oD9WS0UhXBVQoMRkaj4VSSmTIS3D8BMVUladtKDiUZLQnG72wEHdfM8PeKEYI23xM1L5TcK4HO6Qi9rpRD%2FW1mGqok%2BeJ06YtjmdUS2FQq9WSPyCVeYxgf8rSyXGh0EJykOQmh3KB8hgqQPD0eM%2FCmmr0OxYCutpVoEmRCKnevi1dBFFtdyoIKBW6Xb25JtjYVNcaGjQ3bAm26vQVKxDKVRpsqJ2YbojvPoP4NCyLLlLTWbssExsvmq7YmWT%2FGWQsNwua7Va0Og%2BcuPiaaf1X6moq7rE15owgdTg%2Bfj%2ByT8I%2Fo5p2javiYRrs05unSMKOyqr0GOqUBgRUPb0cLnAWPWgXZJWvnyPBek0MoLJEnDcBksAuFaiUV3ZQymi5IKSQC%2BabZj32a07UCmzlB0ptc%2FgXIPckQM8VYN1aImdCCNUa51p6kurN3UVjwc22yqZ1U5ImzhIUc37ByZZRKipXoQ038VCh0m%2FOnK1ajSZOj7DrhcaktD2zgUryyR0kr0V6UAu0YNLc22tL6pBywAF3XHGZ7r40EiVX5alA0&X-Amz-Signature=921f0734dcb71ef8b6db21f5f2661b6774976a31e1dd1db0fd0a1133ab83b34f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CNA7346%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8yfitIdEe5TdUTX34xY0AGwOSnw72s6gIkXWXgdRNCAiAEy%2BKRdAodGRTVJt3BOyRPcc2We1m3OGT2KZUvsrr7NSqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTmAG0IndCG7tLJnXKtwDDq0oQiy4CXBEMipAf3TbhZP4Z36%2FnMtu4lRU%2FxZZSULhS3TDiuTFAPPOMtUZ22Bmu4%2FX3nxSB8%2F7sWKBBneMc3g%2BsOS2OCv69Y1sFFfYWoAbcYZ9LTP4XTbQc7w6Z78Dc0Ge6R0Az5Noun1ZP2vGAafbpVuw0t9oxrr6UYaEvqa3vOXMzb3h0g5kSCxdrH5Yh81tNS%2BjAEmJ0TlGkJY1xiFKWzTIGDcHCDx8l%2FjivIAZwxBCaVx%2FYQ5r1FlJ%2BClYYyWEk4i3SdqcCxBJIA4MH%2FPpGW31Uyvhp7BmcdjjQytxYVkjOj9gYe8DaShpAWJWtAgGbFrONQfuXAjTibRwN3WUmnLzUxwYvTz%2BkkYJBxO1Tw0sQ5pe%2F%2FsQ01tsnv21KZSWVzV6MR44kV4EODd3Y7iuaJrwNKUSzAmHNdsoEuccvKGsHdTMKO2egPGw9Dlj9fz0qZXCbbQgje4Kww7I5Dbt3ejL9SROn2vhiLd%2FqFW9d40lXCoHPti%2Ff1qXh0JjeG%2FLz60UyDh3%2F1XF9eLuIXImxeCA5M7YRkUdcda2wuJ17rXCZmvwDFitoKyuuvIex4LDWQtAKi%2FEDN6mM8mcYjQzjlzjA7a9uf0B1AfAmt0Z7bs%2BsvsJPhBx2TUwzrKqvQY6pgFBphgjbmT4HqIvtZWnwhIjAgbTmw4npYAZOHLgs3BU1WeAKOyGeMwpM%2FRAWjj7LXFtqkwZ24LJdGok6b8h6EzyvE%2BT9GfG8%2FKrciH1%2FtX0VtoTKaEvQBSqDcB75O9fDdvti7zZGosMJfMD9QeKTofDQDVwIjv0JmdSR3lGd%2F5AlS4DCED9Nmst%2BCjGSLqWzPa2URKev4XcqDj8bNPWHnJWPhYGCVv5&X-Amz-Signature=94d5a1574436f55d81de8cb9bb87010eeae12100c945aa8c3555b9b7e5698453&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNOHGCDF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgP%2BO9dailgKoCrwJaAd43pr2kJQVlODxB2zpuZdM8NwIhAKQGzZ7qKa57S7F041J4WLGw7eGRgkRcnqfLVGRE5E9GKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj%2FNxQNbzzyFEUQLQq3APfrJf3IGLOA%2BiOkZtO5BJ0Zhm3UjW%2FbNOZ8mLMTaycWuZayjnsC3LTBXO2If9mYR4oLoxU8BVEbxGUZZDi%2BYitYN%2Fhdnwqjkfw8QzQabYQ49JOB9QloKed1%2BLrl8IEzEbhajC2P6NjugYkLSQvzMkYDWG1tdfjQazmotMddTcppqhobS3mMo2JKEgkxQDrM%2B82oe%2BYqV86gc8lSg%2BXtuWiUBT33DQfndmMydkQVpOJ3NTlBdnJ2ADaGUeHmnkLXjI6Nd2CJ5987IWJOc83%2B92o62yW68dBe2J6oV8xEGA7dnN%2Bs6TLGVCXtID8WbHHlgoCXlnTfgrHtqqruxI4e8We7TzyAhbZ8r3eD7G7ci8yeKHljCcd%2F40P34mu5fJCnjMRot2lSt19QcvrirkdwgAsV2AaTON6RlSA6t2TUjcMi0VSDRZbIV70ZBbMpq7W5OEO3yAPEtC8%2FiNWCjypdmeX1zQsBrAXAzBVONVfLbmnucx8BCSIFm3D9E2xtnSIFJjBzeLz%2BYmqOdqK7Svbflch%2FikmsMYoMwc3jDaR8R%2BSNLnrH1qSQ2qpHDjQAwIO9jG5xsntp0cOfljYUojqOzmVtRcX7U55%2FtIBM6o4CbTbRpvad4lQ34bQ%2FGQsyjC3sqq9BjqkAZhkz2Fm9pkJFIlFmIoGKsPxHkRnOcdB7Mh2WGGWYeTMvsYdq6biet%2BNi9huHMCh8XlwdhOMqNBkWdomOXVXvG2DPwDBbK2TaYj%2FLhsYIWdR5f27o5Qygu%2FYfsLzid5LSm8j9zJdxN5neD5dSBRQe9NRC8Jh%2BSBWdxdkfUXjBarSq8Ma7%2B3sZse9bcnyRufWit3FZZCPCKeGOrT2sCn%2B4Am6FTfn&X-Amz-Signature=160fdc759e350e256f0c87cd05dbcb46129589ce52dd6e170a3d4b7c785d92b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
