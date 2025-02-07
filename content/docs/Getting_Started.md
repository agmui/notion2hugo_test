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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AC2ZB5A%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIG%2Bvn%2FxU2CMCf%2FsF%2FGx4XO9fq3NPlh3J6YNcLZrB4AkoAiEAjHFjACc7nElLB%2FymSuj8cl5hDKY2DzEe2zgv0dWbtDYq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDrsID9a8b5d63jkAyrcA6N1xgdVislF2o5cYgpiZSms63x9icmsmDzPQaxT02lX%2B19WH1XL9Y6fc5xz3%2FxfjMJJXD6dNW0hc9pNmhkZIXb1lCTNZRZZvKgdUAU7so7hX8dN2XXFsjLOKmX46c3LBt2GuF9ffXhsrjb%2BetOTdTjPbsE50Owil5DDDglKr7US7RzcB98somaeMUex4gNjeRcVR2C%2BO1cW49EJT%2BGxOAlrl9AJN5IUKw5P%2BxuS59Ilv3z2Lf4oN6Z%2BCbzVDu7kUCg%2BjQEh8bh5hfPeIPs6uwrK9kETO12PkM7MHtiGZTCPxqcfJelDouMm6%2BotL5Pn1Xyd6o1lWbGfQA%2BNHVtLHlNsBNlBlGaSKfN6nrVmtHiF6UQ7pxy0L8yNZSOk9yljIg13fT1ynze38OK6HNswATUG1JClh6srpKFI2zH%2Bu82XMWrXqXdoto%2BZP1FB%2BWrzSuP2gX2vlpDUoBYTGcPPdIuU3gEzYyHhKwEFKHNkoVH7QbnCvpxBWGFL4oykGGoczy%2F%2BW%2FqvRhKvPjFGyblVH439v8GPD%2B85De3TrvQFb%2Flaog1YwKAirCEP7%2BN97oRVCU1tqbHexQeDzUDJ45pEpkjwrS9l5wBbU3tfl2F5aTKH9D3B%2F%2BwTORfYN2waMLailr0GOqUBB9pad%2FZUO%2FyVmYULx0QMXs31P%2Bly5p3%2F4djyGI%2FcYMkyIDWyzYZ8vskzrTGEEkXKjjNhwlYF2cXuXI44Ni%2BVXAOfNTc0WjZ%2FekHdMpCaZqLpmyImEj8JTxgVz%2BPbkBf1Hh4i%2Bp1vv7r4DL3H%2BJl4fSPBhQVEsooHJvnKLscbvcJnZvnoCTULanw5lRpuatiuUeeC%2BbzhV18mm%2FWITKLRbPe2wh7g&X-Amz-Signature=a62a2cc0f0d7eef95b49b120c4307546d9c4238ebba3de066ebf3a7f2dd0940f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AC2ZB5A%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIG%2Bvn%2FxU2CMCf%2FsF%2FGx4XO9fq3NPlh3J6YNcLZrB4AkoAiEAjHFjACc7nElLB%2FymSuj8cl5hDKY2DzEe2zgv0dWbtDYq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDrsID9a8b5d63jkAyrcA6N1xgdVislF2o5cYgpiZSms63x9icmsmDzPQaxT02lX%2B19WH1XL9Y6fc5xz3%2FxfjMJJXD6dNW0hc9pNmhkZIXb1lCTNZRZZvKgdUAU7so7hX8dN2XXFsjLOKmX46c3LBt2GuF9ffXhsrjb%2BetOTdTjPbsE50Owil5DDDglKr7US7RzcB98somaeMUex4gNjeRcVR2C%2BO1cW49EJT%2BGxOAlrl9AJN5IUKw5P%2BxuS59Ilv3z2Lf4oN6Z%2BCbzVDu7kUCg%2BjQEh8bh5hfPeIPs6uwrK9kETO12PkM7MHtiGZTCPxqcfJelDouMm6%2BotL5Pn1Xyd6o1lWbGfQA%2BNHVtLHlNsBNlBlGaSKfN6nrVmtHiF6UQ7pxy0L8yNZSOk9yljIg13fT1ynze38OK6HNswATUG1JClh6srpKFI2zH%2Bu82XMWrXqXdoto%2BZP1FB%2BWrzSuP2gX2vlpDUoBYTGcPPdIuU3gEzYyHhKwEFKHNkoVH7QbnCvpxBWGFL4oykGGoczy%2F%2BW%2FqvRhKvPjFGyblVH439v8GPD%2B85De3TrvQFb%2Flaog1YwKAirCEP7%2BN97oRVCU1tqbHexQeDzUDJ45pEpkjwrS9l5wBbU3tfl2F5aTKH9D3B%2F%2BwTORfYN2waMLailr0GOqUBB9pad%2FZUO%2FyVmYULx0QMXs31P%2Bly5p3%2F4djyGI%2FcYMkyIDWyzYZ8vskzrTGEEkXKjjNhwlYF2cXuXI44Ni%2BVXAOfNTc0WjZ%2FekHdMpCaZqLpmyImEj8JTxgVz%2BPbkBf1Hh4i%2Bp1vv7r4DL3H%2BJl4fSPBhQVEsooHJvnKLscbvcJnZvnoCTULanw5lRpuatiuUeeC%2BbzhV18mm%2FWITKLRbPe2wh7g&X-Amz-Signature=29dbc87b5426ca48b9ad6b4c00b1fc7857f560d96dab9977ceca99f93d6712ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKMMZNDJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDOuMdZ3IqfzDCsZawn8ypFTfSrCqyTEHvUyxapkqIb8wIhAKd1htzZF6R1292ifNd5CJ7grRzTG%2BvXq4XbSOS3oAauKv8DCG4QABoMNjM3NDIzMTgzODA1IgyDhptmybkkwv%2FuV64q3AOlU7QL8L4sQHJg%2FXXOT2r%2BbOAveWXV9sZCkCFa%2BshMBpws45wEm3n7qjKbU7qt%2BImFvZd41ikGEXc%2FyDZl6gQdOVJF8%2B8cICTdF1wv1Mc8og2u6ArQAyGWMy%2BZuiTjOyeV2vnxORqtFjqGQHFgZbeUpopZorqvumqr7Vavhef6TCVteVq%2FiHGxh%2Ff5ZUpBrIFi1CX4mOFW3dpFlumfTl4PXbcpA8Cc3afsCHrerMKOo5x0zeEvLVQIvRFAD%2BuRfugBaEmw1MzMbdMz1wf%2BtCJa%2BWECraXNjkQ5T%2BR%2F%2FoxVruWWIEdXu49MzcMXNGKCNJ%2BqmIEv6%2B60lH9DgWyH%2BjE8VclTHi%2FQrRBLPwWvg4tdKB%2FkxkSEedHB5yOZzhB7DR1a8h%2FP136T5anOb1QrtsXNyC5wd5hgyj0l8I1fTsfsnljCdUCv7iu4DdQhGW8MsYkYHqmCyIKH3VZeOkMlOvqhz0%2FwPqha9SS30SzbNEM1WxbhsBw2L7vqIXjCzNoqYOqPF28zZDMHvdTUyGKz5WYBsMJcOlhowU57UvVlHm14PvsV9cxnoC8wqZ7NM71Lu4MKb7Jlc6aajaYd4SslAKkeESKFs7%2FQw95wHRsiMIfdbZ19Fg%2FtDdQ8mhzesDCSo5a9BjqkAaHR%2FZL3UN5Mvf3Kl2MCaaaslcIVPC2fDka756Px3zzG9T6mUQIyLCHURD50wdgljhRCsGOSZH7axtnT6MUaNdY6rkhKrxXd7NmH1OMQFITpEVuAUgS5flrzA1z5dyiSJct8XHadzxiklomARLZkLXUfjvlECv4jOmCywLOYgzmu%2F4Bp7LUJ4WfIHw%2BJ7HwXk58BBser7VwHAK1lbgdZwB7uic5W&X-Amz-Signature=b03a86c7fe7670a74d2b93f53812ee1870037598438be285b79686d9d449f623&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM5AMALL%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBiRKuwEwWz6%2B8qB1ALTi%2Bzt2tll8eV%2FH2j4Fvkpv4i0AiAd%2B1ZU547Fgj%2BOvioUUoJYLfrARZG0%2FZdJJh0Q0lmrKSr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMdHPvSG90YZfQ6bzLKtwDl7USEugoho28zOSkJp9LEbSGys87dVeKwd4XZBa%2BLf4TJADa8ZEfb%2FRGP5hjD5bR8syOdF9JJFlsYrYHkEOJ%2Fmntml%2Br8x5VTBmc%2F6Oxkw7M%2BycL9ok1SEpcba59AvaBEJ4%2B1vumaierbed%2FXjvWkBQVIdWc4xRV3WPEzJFFPWc8Pu%2FqRr3VWlzIC%2FqMXhDoytmzRQBrL92kTdbLIR%2FmpiLrdHQk99p9YQMOZh%2FvvRzVStXN%2Bp9TXz30hSh48h5KQbgap09NHZzpzVw8dqB3ya2QS2l%2F8MKvsK3Kf6uiONRZPI%2BFtGsJPOIEULofBpEamRVHRZ5mvF22EOL2Q8wHDttul6b74lZwb3R7qbJOyb8FrHrGj1eTQ5kiuc73V4fpzlydx1mpHE8YxdCGlmAAzgoIr4dYSsXr6OU2O0gULUbcTj7ym7Rovz6UN%2BgQifyq8KOaxygZyRIwePQ11gWPZdhUOzu1ivTF6G0mWEyXwPTwkVCkYXi7p%2BWAKxAWJwreEYdJoN%2Fm5KCf%2B0UNrCmILxIr7GvScTIbAHhSzjRv2l5J71QplZ%2F3Iwq4F0LP1ibegkFfhZ5Lskc5jGCs%2FVJTuMd5DmTIpQdHKV9U2i2AXdEz753ZY72%2BVylxoKQwqqKWvQY6pgFAj73fhma2V4OyZ84haKBIP1rLHBZzKFh%2F2FpWswaKcghRkOaa6u8MXHn29ui4QUMU7HGSozFP58OTXgl%2BM%2BcdUOEq%2BrS5FDX%2Bxw9G3%2F3BF04fMmneUGg12%2FypKBqv4lYDT3DAEPy1QC0iTBrqCHPua51XQeLxRsa6m5O3v5%2FYzlwtMqGJPxpH7GUphk92dRlFi%2FDRrsB%2BDduztZ3iHf3iVRpO852d&X-Amz-Signature=07add14fa2527672a31d8b8733bcbd52b647a2196e460c3d900978c9048d5b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AC2ZB5A%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIG%2Bvn%2FxU2CMCf%2FsF%2FGx4XO9fq3NPlh3J6YNcLZrB4AkoAiEAjHFjACc7nElLB%2FymSuj8cl5hDKY2DzEe2zgv0dWbtDYq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDrsID9a8b5d63jkAyrcA6N1xgdVislF2o5cYgpiZSms63x9icmsmDzPQaxT02lX%2B19WH1XL9Y6fc5xz3%2FxfjMJJXD6dNW0hc9pNmhkZIXb1lCTNZRZZvKgdUAU7so7hX8dN2XXFsjLOKmX46c3LBt2GuF9ffXhsrjb%2BetOTdTjPbsE50Owil5DDDglKr7US7RzcB98somaeMUex4gNjeRcVR2C%2BO1cW49EJT%2BGxOAlrl9AJN5IUKw5P%2BxuS59Ilv3z2Lf4oN6Z%2BCbzVDu7kUCg%2BjQEh8bh5hfPeIPs6uwrK9kETO12PkM7MHtiGZTCPxqcfJelDouMm6%2BotL5Pn1Xyd6o1lWbGfQA%2BNHVtLHlNsBNlBlGaSKfN6nrVmtHiF6UQ7pxy0L8yNZSOk9yljIg13fT1ynze38OK6HNswATUG1JClh6srpKFI2zH%2Bu82XMWrXqXdoto%2BZP1FB%2BWrzSuP2gX2vlpDUoBYTGcPPdIuU3gEzYyHhKwEFKHNkoVH7QbnCvpxBWGFL4oykGGoczy%2F%2BW%2FqvRhKvPjFGyblVH439v8GPD%2B85De3TrvQFb%2Flaog1YwKAirCEP7%2BN97oRVCU1tqbHexQeDzUDJ45pEpkjwrS9l5wBbU3tfl2F5aTKH9D3B%2F%2BwTORfYN2waMLailr0GOqUBB9pad%2FZUO%2FyVmYULx0QMXs31P%2Bly5p3%2F4djyGI%2FcYMkyIDWyzYZ8vskzrTGEEkXKjjNhwlYF2cXuXI44Ni%2BVXAOfNTc0WjZ%2FekHdMpCaZqLpmyImEj8JTxgVz%2BPbkBf1Hh4i%2Bp1vv7r4DL3H%2BJl4fSPBhQVEsooHJvnKLscbvcJnZvnoCTULanw5lRpuatiuUeeC%2BbzhV18mm%2FWITKLRbPe2wh7g&X-Amz-Signature=bc74c4ad0d50e60198a298fd5a0e2f444df7501d52d6262dd165842019b214dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
