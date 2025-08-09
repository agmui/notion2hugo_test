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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCN56UPF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzMz4uOrjqBIK1l1kYouCzfoI1HP8JDfVZ6bbdSs0g1AiEAv9pyUqAjsxpAbkI79vldSqQzJIZOw4UWneJFAF0X4m4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6wBDgOvz5FRR5qiSrcAyMigtAW7AV%2FAmVPyzDXtFl0SML2tm8USoyI%2BozzZrxO%2FdRkpUgsUzy1270p7Tu5cL9xdHcDebiTowUiGewO5Qxh%2Bton0KfjF7K8lI05lxMbpFcc27hsww69gK6KgUen4YVzTcKCYSX%2FZK31ztB4NWSIbXSiufeZE2hGGg0LSNYdmtbUKyODCIlHq8W60NkH9MrUVIrNYkEw8DvBfwDXKfmGSCcB1yELzLnYZBF2SPUlIn05Lj8KN7pi2SAZWdb8URla4N9vlGeSmYC0WCRv12kHtidRnRUeLqZ0Lnft0qAPcvJc%2BX%2BFo9lrjR74DAi2Q2xKBwYuZLq0qq0N13IA8LXFcxO2o%2B73lOPOZdSNQ3Mvv%2BS0eY97PKFBXDmOd2Q4%2BADa6YK%2BS%2B2jnxIBXdba%2FFdLYIMjoCpShMD6kCp3%2FStGiDm4Zl0G19LQApgITyoOvL5mYpS3vK4hfKtbAd5exAT15lKjJF6QMIcF0bvYXOTArsNysWnHONpaOMvQsJL9d2JiLGHj%2FYhjmu00y7Wqgja3lLK1zIhX39lJKG6LHFuqwPxuFAnJnq3kJa5JGRoQ8CQjHTtI5iJ9ZRZPlD0OuTQ9Ma7Ipkn6JG8USKAoBO4T4CDNtg7i%2FSZj11VWML2L38QGOqUBcT7XVtEyoQudeYax%2FOMThEo6xt6cbNTKoeFPWE38HmO18Z0l2fxklWALEM014X93dFecmXYR87onWKVVqAI1fk1u5gyJCB80Im46cjWW89axzTXO4CIf6EPRx85KhbPGOpD3aToIXX7xpGPOX3VxjGmoonwgh34OFyGoFvWwhFne5ceLGkAy8hVmf1%2B1mNE7W78Rlwkz%2F228QIWX6XHEQeeryo8N&X-Amz-Signature=f4232a28f1f75fa8bcf517a03a2b58aa02f27648195b6fa546891e1b0e3f2121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCN56UPF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzMz4uOrjqBIK1l1kYouCzfoI1HP8JDfVZ6bbdSs0g1AiEAv9pyUqAjsxpAbkI79vldSqQzJIZOw4UWneJFAF0X4m4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6wBDgOvz5FRR5qiSrcAyMigtAW7AV%2FAmVPyzDXtFl0SML2tm8USoyI%2BozzZrxO%2FdRkpUgsUzy1270p7Tu5cL9xdHcDebiTowUiGewO5Qxh%2Bton0KfjF7K8lI05lxMbpFcc27hsww69gK6KgUen4YVzTcKCYSX%2FZK31ztB4NWSIbXSiufeZE2hGGg0LSNYdmtbUKyODCIlHq8W60NkH9MrUVIrNYkEw8DvBfwDXKfmGSCcB1yELzLnYZBF2SPUlIn05Lj8KN7pi2SAZWdb8URla4N9vlGeSmYC0WCRv12kHtidRnRUeLqZ0Lnft0qAPcvJc%2BX%2BFo9lrjR74DAi2Q2xKBwYuZLq0qq0N13IA8LXFcxO2o%2B73lOPOZdSNQ3Mvv%2BS0eY97PKFBXDmOd2Q4%2BADa6YK%2BS%2B2jnxIBXdba%2FFdLYIMjoCpShMD6kCp3%2FStGiDm4Zl0G19LQApgITyoOvL5mYpS3vK4hfKtbAd5exAT15lKjJF6QMIcF0bvYXOTArsNysWnHONpaOMvQsJL9d2JiLGHj%2FYhjmu00y7Wqgja3lLK1zIhX39lJKG6LHFuqwPxuFAnJnq3kJa5JGRoQ8CQjHTtI5iJ9ZRZPlD0OuTQ9Ma7Ipkn6JG8USKAoBO4T4CDNtg7i%2FSZj11VWML2L38QGOqUBcT7XVtEyoQudeYax%2FOMThEo6xt6cbNTKoeFPWE38HmO18Z0l2fxklWALEM014X93dFecmXYR87onWKVVqAI1fk1u5gyJCB80Im46cjWW89axzTXO4CIf6EPRx85KhbPGOpD3aToIXX7xpGPOX3VxjGmoonwgh34OFyGoFvWwhFne5ceLGkAy8hVmf1%2B1mNE7W78Rlwkz%2F228QIWX6XHEQeeryo8N&X-Amz-Signature=c642e7328103d6bce4a2bc26f088da0ccd22ea25ccbf1cc30ba638a766886253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCN56UPF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzMz4uOrjqBIK1l1kYouCzfoI1HP8JDfVZ6bbdSs0g1AiEAv9pyUqAjsxpAbkI79vldSqQzJIZOw4UWneJFAF0X4m4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6wBDgOvz5FRR5qiSrcAyMigtAW7AV%2FAmVPyzDXtFl0SML2tm8USoyI%2BozzZrxO%2FdRkpUgsUzy1270p7Tu5cL9xdHcDebiTowUiGewO5Qxh%2Bton0KfjF7K8lI05lxMbpFcc27hsww69gK6KgUen4YVzTcKCYSX%2FZK31ztB4NWSIbXSiufeZE2hGGg0LSNYdmtbUKyODCIlHq8W60NkH9MrUVIrNYkEw8DvBfwDXKfmGSCcB1yELzLnYZBF2SPUlIn05Lj8KN7pi2SAZWdb8URla4N9vlGeSmYC0WCRv12kHtidRnRUeLqZ0Lnft0qAPcvJc%2BX%2BFo9lrjR74DAi2Q2xKBwYuZLq0qq0N13IA8LXFcxO2o%2B73lOPOZdSNQ3Mvv%2BS0eY97PKFBXDmOd2Q4%2BADa6YK%2BS%2B2jnxIBXdba%2FFdLYIMjoCpShMD6kCp3%2FStGiDm4Zl0G19LQApgITyoOvL5mYpS3vK4hfKtbAd5exAT15lKjJF6QMIcF0bvYXOTArsNysWnHONpaOMvQsJL9d2JiLGHj%2FYhjmu00y7Wqgja3lLK1zIhX39lJKG6LHFuqwPxuFAnJnq3kJa5JGRoQ8CQjHTtI5iJ9ZRZPlD0OuTQ9Ma7Ipkn6JG8USKAoBO4T4CDNtg7i%2FSZj11VWML2L38QGOqUBcT7XVtEyoQudeYax%2FOMThEo6xt6cbNTKoeFPWE38HmO18Z0l2fxklWALEM014X93dFecmXYR87onWKVVqAI1fk1u5gyJCB80Im46cjWW89axzTXO4CIf6EPRx85KhbPGOpD3aToIXX7xpGPOX3VxjGmoonwgh34OFyGoFvWwhFne5ceLGkAy8hVmf1%2B1mNE7W78Rlwkz%2F228QIWX6XHEQeeryo8N&X-Amz-Signature=a4284e58fad5bb32d7a9b14723d9284f7a6b498f1fd0d3675d95718766592644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZXWVTK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5bf9PlAiaqKmGml7KgkEffU7Ivsx2qPNilBwI0wrivwIga9%2FKmNyGhnQrc390evJQ4PqOG2VtPeZ27Y1rsCBPxIYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMtMFkUACmRcX8RTyrcA2s3lL2RSVW%2BNf8eN4WQZ0%2Fq5gDBJt1qH6m6pu2WRdt18J01fKTNa%2B9Ea8D5lJKt4qa87Oka0ieCMs43v8%2FWF%2BhcHG2qbcMifbw6Hdm8EdaOPK3%2F66pv9u3JsUKngQ2ARHAicC5IkDPso6HD1r%2FGoUuFZCjORhfKMcuF4%2BAbhrkrp2pHTyzx0E8%2B8C5ihSbB9Fu%2F4tlHp%2Fnckoo0c8rt9%2B4LNSPJvs9CkJurTdCwACq2HBWgm2v6wQ4yZQf2Cy22ZjmREpEH88pDsplSHwXHZ5wykPDr2HpgkS4QyEemsE4Axn4P28IIkKh%2BZHq5%2BjLYAY5WQ24OCYG%2BUJFnz9W%2FYx1u3figqyuKOzagoUKY2yAyAGXsUMV9r0fAfBxpzLN%2F8pOBE2EcsJIIgyQWEGXaxJOVbJpQOI6bL86Qt8W50EDFchlPRxoPF%2BYkAsbghsKDkDwpFStTP8M7qNXVaZK86zsKWl%2B1V9av8OQBb0oTDq8ByG6N%2BLOUqH%2F0Hell89Krkcpj8fAPzu1Y5Emfh%2FAJ%2BQLlB0obQlQ9aBVoRrs0S4lKjfqH1oFZmeae7Nb4Wt2WCoJoxJWkvT%2FPjtABTy%2BkyShGUoqApOl0lvfvoe%2FOB3ZI3vrzsdP%2BkC%2B7I71gMKuL38QGOqUBvCaO1hQJTpoFCkwkpcymLSM3r8dvCBP%2B0%2Fex5mVupbB668C8RJ%2BdykBvkYXFwuMj%2BT%2F45MGww2ETJnArwSX9MgPrWxbp0BLD%2BJbnEzsWSK89Hpa%2BlEe81uimw15PxMpBgYxab%2F5JaiA8pQ5OX%2Fy%2F5OR%2BhzkmAxaTfIwSMZ3lsoMKMgdxLeU4%2BwDcpI7sncZZqOfZWhOzYYdRDem7MfkkTwhFxqxU&X-Amz-Signature=b9b29bfb05ee23eefc875a39ed4cb4083471de74fe66ab105b7af30821553f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIV63FZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHll0L%2FVtQ6uizpwCY8Muxu2OpyHuzekUifotnC4g6uAiBfKINFjaaudCgdht0SYhUyHBfR8MnbqZ3LvaU3%2BJ5urCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfGcAlYXlt2I6UQjlKtwD2zkN5Cc04hf71Sk7p3Am3qVYcWjp6rDIYaDT%2BBMtvBlhX%2Be1iwjaFQ0UwGYqGgklJfADSGHSE2xI3CJx6lrw11J1dwWYexr3I29r2EcEHFqruy5GvIJvQnHv06TZT4KKWdOEKF45oFwuxR3XswNehACXMiTUeIlMhXU4Gkqq8LsVvY5mNcH%2Bob8pWLyaMTC28FvHYytsBCdG0FSbAr7THo7mmOHh%2FbQxZHMgPdqPr6Llu2%2BbMQSSwTxXcWMruBwTQeO5dj5wLppT5mIxHowqVqN%2F53cNDU4ODTbcuVOBaPPcyRsNg57hmSjWvHgGAEo1dtfs7DV6d8bNrEWWpVf0Rno5PWdvdL%2Fkf%2FdJ2DCh60SQFLUkhsC93zcBvf3TUaXhUu7FXmm24rcuszcv3e5Q1XQXzG170Y18ralc2cgT0mzAsIxrktvx1bEipb9yE3R9AOAS56sII%2F3QspR%2BKgJJgd1w5qUIMRf%2F%2BA%2FFs3or0NG7xl1Dv3lDCLYeCE%2BLQCY0z1HWhvy8etRJhu00BrGeEYugUC7MMLbxVTBnNSDkpi1d2u7lB6KjQiBNelo%2BAuN5OHTe3RTU5B5xsgxIo6H0P6QAl5TXQ7MKOrYmjuu32YzCQGLrtIHSUA9HQlMw2YvfxAY6pgEdAO9qsp4zLTODg4z3IPUfpzPDOR6B3nLOwJiaVaWxWfx1aSPHM2qZkYMgMpjj9d6lRRx9Uu187roIGlik6GExiJXJ0Si2phcjRf1qhuzK1t6Ed%2B7fKm2MysG6gfb2BVwNBCShMmJsd8WGfn9LTUGBZaMo37UdgY55gdm1AQHBEZEGCymUEvLn74q6AdeIN99Uj13yGzpAskpWxQMy4IfYkF5QU4Iz&X-Amz-Signature=34ef1fa9242dea45e156a76f0f591511001b776c6818825f48ee17a20a476805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCN56UPF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzMz4uOrjqBIK1l1kYouCzfoI1HP8JDfVZ6bbdSs0g1AiEAv9pyUqAjsxpAbkI79vldSqQzJIZOw4UWneJFAF0X4m4qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6wBDgOvz5FRR5qiSrcAyMigtAW7AV%2FAmVPyzDXtFl0SML2tm8USoyI%2BozzZrxO%2FdRkpUgsUzy1270p7Tu5cL9xdHcDebiTowUiGewO5Qxh%2Bton0KfjF7K8lI05lxMbpFcc27hsww69gK6KgUen4YVzTcKCYSX%2FZK31ztB4NWSIbXSiufeZE2hGGg0LSNYdmtbUKyODCIlHq8W60NkH9MrUVIrNYkEw8DvBfwDXKfmGSCcB1yELzLnYZBF2SPUlIn05Lj8KN7pi2SAZWdb8URla4N9vlGeSmYC0WCRv12kHtidRnRUeLqZ0Lnft0qAPcvJc%2BX%2BFo9lrjR74DAi2Q2xKBwYuZLq0qq0N13IA8LXFcxO2o%2B73lOPOZdSNQ3Mvv%2BS0eY97PKFBXDmOd2Q4%2BADa6YK%2BS%2B2jnxIBXdba%2FFdLYIMjoCpShMD6kCp3%2FStGiDm4Zl0G19LQApgITyoOvL5mYpS3vK4hfKtbAd5exAT15lKjJF6QMIcF0bvYXOTArsNysWnHONpaOMvQsJL9d2JiLGHj%2FYhjmu00y7Wqgja3lLK1zIhX39lJKG6LHFuqwPxuFAnJnq3kJa5JGRoQ8CQjHTtI5iJ9ZRZPlD0OuTQ9Ma7Ipkn6JG8USKAoBO4T4CDNtg7i%2FSZj11VWML2L38QGOqUBcT7XVtEyoQudeYax%2FOMThEo6xt6cbNTKoeFPWE38HmO18Z0l2fxklWALEM014X93dFecmXYR87onWKVVqAI1fk1u5gyJCB80Im46cjWW89axzTXO4CIf6EPRx85KhbPGOpD3aToIXX7xpGPOX3VxjGmoonwgh34OFyGoFvWwhFne5ceLGkAy8hVmf1%2B1mNE7W78Rlwkz%2F228QIWX6XHEQeeryo8N&X-Amz-Signature=4fe7db8c10b348192067170ef89f0b74e9a37aab7fa6ac82980376db38d82eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
