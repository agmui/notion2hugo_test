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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EETNT5P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCeii%2BkT74%2FqJhMVtvJlPhWaiEZ8ppE3w707eBCrfOWcwIhAKPFoY8ynTat3bNb%2BnHZXWVOTP8FD3jsUeojAmLFTsQSKv8DCHYQABoMNjM3NDIzMTgzODA1IgxCyQMoS99hqAppU%2Bsq3APdxlnMGouvOxC0qXGdvmlcCElSF5wkQQd%2B7rbxRLVhd7kwEtX8w1qZ4z%2BKIt7matbOqh3aJA1Dd76vZRX0%2BidGmxanCbN72IgrOigselnr9jjFAz4MQDarXt2cMyXBqzoJ4IO45cjL%2BuXP61w6a0mUKIYBvpMAAGfm%2BaHArAR110TaLg7%2B5fdlvltATqUY6gfU2bX%2Ftu9MQAI9fezIkG009uW9TRAZCsu8AOWsFPjk89mjIHWbyZtvm3bMCA%2BAxeibrxr2ETY7X2%2B5M3PxLpZ4SNat%2Bu3ZL0cXNJwUCcVPDYjdmRNZ0OHi3befvxk09Om7D2wqkd%2BAl339TW1JvXCdJiaU1ReBcQ2Kuzu2HgEVMYVeKDccwL%2BK5fh0iiCydRSdfbK0MhXtENMCDdbaXV3yyMFgJ4E52OSe9cL5RmgxHcIcvg%2Fodi2qXa448I3QRPUW2XtxbHHc4kqIRoX6LWsfyg5aECIIYg0iCH9dmGt%2F7s3u4PDQ9BZuDn28JZj9figBZFiH6JimAwN3DVo44sX1cyxFifFMXSIFrcwgXFN1l%2Bv2jL%2FtcRqSGIxbGMV5yGArx0rg6h0sCzIl7XBa90e2T6OPH2j9oUfBfDDoLPtD5dCzwNE3IwY0p4I49jDSjJi9BjqkAcPKqV8r6xEZRUP9HGuLqy62%2F%2Fo2ceB8WGwUlFH5IgoZB6%2FOOUngSrzxTR%2BeDZVgP8U1yv8erDVP7gzObdpbBaGGOE0hyoDRCLsKKXzgQFEH0KSnAGs7i7LkqMpvw7q6zklzmMHJ5GzVlcFVreKnBPIja7KZkxX32VeEjZaaIIBFp2YIHKA9ZnYo29i7PUwOeEeijPpkc0wKJ8WQPc%2Ffcgs%2B3T97&X-Amz-Signature=df2807fa9ce1775963839d1bcfb28103411c3d9446e8fd54686d71e465fed249&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EETNT5P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCeii%2BkT74%2FqJhMVtvJlPhWaiEZ8ppE3w707eBCrfOWcwIhAKPFoY8ynTat3bNb%2BnHZXWVOTP8FD3jsUeojAmLFTsQSKv8DCHYQABoMNjM3NDIzMTgzODA1IgxCyQMoS99hqAppU%2Bsq3APdxlnMGouvOxC0qXGdvmlcCElSF5wkQQd%2B7rbxRLVhd7kwEtX8w1qZ4z%2BKIt7matbOqh3aJA1Dd76vZRX0%2BidGmxanCbN72IgrOigselnr9jjFAz4MQDarXt2cMyXBqzoJ4IO45cjL%2BuXP61w6a0mUKIYBvpMAAGfm%2BaHArAR110TaLg7%2B5fdlvltATqUY6gfU2bX%2Ftu9MQAI9fezIkG009uW9TRAZCsu8AOWsFPjk89mjIHWbyZtvm3bMCA%2BAxeibrxr2ETY7X2%2B5M3PxLpZ4SNat%2Bu3ZL0cXNJwUCcVPDYjdmRNZ0OHi3befvxk09Om7D2wqkd%2BAl339TW1JvXCdJiaU1ReBcQ2Kuzu2HgEVMYVeKDccwL%2BK5fh0iiCydRSdfbK0MhXtENMCDdbaXV3yyMFgJ4E52OSe9cL5RmgxHcIcvg%2Fodi2qXa448I3QRPUW2XtxbHHc4kqIRoX6LWsfyg5aECIIYg0iCH9dmGt%2F7s3u4PDQ9BZuDn28JZj9figBZFiH6JimAwN3DVo44sX1cyxFifFMXSIFrcwgXFN1l%2Bv2jL%2FtcRqSGIxbGMV5yGArx0rg6h0sCzIl7XBa90e2T6OPH2j9oUfBfDDoLPtD5dCzwNE3IwY0p4I49jDSjJi9BjqkAcPKqV8r6xEZRUP9HGuLqy62%2F%2Fo2ceB8WGwUlFH5IgoZB6%2FOOUngSrzxTR%2BeDZVgP8U1yv8erDVP7gzObdpbBaGGOE0hyoDRCLsKKXzgQFEH0KSnAGs7i7LkqMpvw7q6zklzmMHJ5GzVlcFVreKnBPIja7KZkxX32VeEjZaaIIBFp2YIHKA9ZnYo29i7PUwOeEeijPpkc0wKJ8WQPc%2Ffcgs%2B3T97&X-Amz-Signature=0a809c3e21b54ac55c094982cd187f3bede22a50acd1729ac43d3f8c6a409583&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZQPJTYY%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBNfV47MeA1KBBzht%2B6474jC7R2koMjue6b0vtDi%2BGwJAiEAlcaKJ4BueXK%2B%2Bh7MwGTuraCMYJl%2F3QJVXs4GzheR%2By8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDO%2B2%2BH9qIrkF5BegmyrcA14bI2xJhS15dlwB7jkPjKVlN8r00tE5%2FM6ZxL1Pvf5aF9olPiqRwGxDUA05NZyK%2B5%2FudU%2B1d0mdtpUUVRQwFnVbG5sNdQQZlwDhmRbA4IgsRT2nF14GLwN0X8zz4b%2FRHNJa3iJppdr876jHPW%2BV2CXu291jW83ZJ%2Fn%2BoSOSQjhZSzz7jHViFk%2FKK20MroxgfLZ1STfqzSchaikYqNvtHBj1ByGGT%2BFHAGtxAw9x4mFJwHMSRJ5nmb4YX3Ao%2FHXTeGNGehwVLNC93NFhWh44Yxj3MtBBpXKLJpM9RjufWZQKyWctReUTC3h41ucI%2FVWdcDDH3RbtIzfXpPF0H0Wbw7HvD%2FfaNKY6iVRV5HRg3SWwuC6LoK2b1MRiICSPMLa6TSfux%2FIur24IkDjoDcGpeiqyZ8fuCgdxkB83hzIu1YG8V4K0N6YVLrfq0J2%2FLdwFx4KQ6uoUaPtxFYPrEgTnRy35rV37QqA%2BvSW0HwV%2BHZqsMUzN2zS6FwJpciBFUmyLFBSUjVWCY8POfry7Oi3Y9I6crS9q6LHSdVuXdIx5HGhh%2FGupxWJLZRRKE1ZASgQ8bXxgNJnDcGA%2FoYuYPmncMmYdDd2LCjsdDKzwScBdEH%2Bt%2BCzsJr3K2EfyFuQyMP6MmL0GOqUBX0Pf1NynJrxNUcTOXFFOip10KGiIVjk49P%2FFCOw9Y%2FHXR%2FHGtkSTUX4NtKQKqcZlMC633ZGIfnMSO6%2BkoEz0cqFJxdHSv9%2BXyF%2FP0EsC8vLUlX8rwYDFOKHnVF%2B77K4gAjuMilrlIye1J%2Fl7JdX%2F%2BWHpWE6ZadZfU3j6nKaYrzSdIWt0BQlIQQrOvd4xEkqHpelK1QRcPkVem8LLTjDVQPN4B6qD&X-Amz-Signature=737d67742ca4af63d7648068869f368547b53a3e21d08d5bbabb69f54b05b05b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FIJR3DB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBthCcNwhOTMp6b5O0TnTV%2BactMoCR4xQPi6LWTuRPcLAiEAm%2BCt%2Bfbl88ujoZXbHCGkjTximhvMMpXyBf4vGsaI1Eoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCvFyiL0mtW9fm4J%2BSrcA2j97BezM4kU0fzd4qTofRqgfJDwONmPjvaWTmWcDDTxWPdsBhBCMwZNYhyGnEEK8C1l9DGuTAvrm22EvaU4cW81YeHJrTdKTrssJt54JtAK%2FlpKMr5WjlFIn6zZq2XGrfUbKOaYzKW23D0Fy10G9FAWWKAa0E2d4dNFQtuMIR9O6ANr9iGzFNPDhCcc1UtxKVunkcen57pU0CsnzVdLvxET9vrXynmWDyyU1DOaJwhgMQNIhC3NqRCcCngz%2Bh%2B45IrnxaS%2FQE6g1ycOq6UUqOReKUHmUf0fC4sYi1wcqYscuBFoTgv1G7MWoiW24XM3UKsLnpRd82hSA%2BoxbE15L0s6fg3MZrcoDGGFY932LL9zL1o2p5HJntbV0mvf56DH%2F6smFpnOKP2CKwlPY7UeqqBGGrjs5dl4Zn5hffP88bW%2Fc2ahq%2FDRiW1pEbpJDuz%2BItpfpTLi9qmcMeb2hneDPUk3dCit4La5XC9nRt%2FuBefYgCUODCOlgR0s6m5BXUwbRxCgP%2BvLnAG3IT%2BPDkLKnroPxlhUBnHETsKmqka%2Fto2ItpIPbDDdPbFOHavLb3hxKMRP6LDAekOoVaiqOddNGA1N%2Bnx%2FprXMH7ZFFvlAp97yMpwQu1ByQxBQGUvOMOWMmL0GOqUBw6YfRSES4Z7xGh90oOGTMHzlxqwbOUtl%2FaZhotcqLBJ2LNT621dO4VR9G5CmKg8nhL363u%2BMotlYvBbZWBMrGE1jKgtO%2BWjfKk4%2FNrUaB700QulT2dZks0pAz5v4QwauSVMO9%2BBDQ238oGki%2FE5DeTsdz1zlMgV8sPigyZKwEtYG3vR%2B7QJko1iBFkTO9zB47exV3xZVv2tdoRbdlu2Xt7zSJfJV&X-Amz-Signature=0cb0c9dd3ffd1db7fa3bc4eef51931b626400909249a5b3d55d850e176b1e21f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EETNT5P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCeii%2BkT74%2FqJhMVtvJlPhWaiEZ8ppE3w707eBCrfOWcwIhAKPFoY8ynTat3bNb%2BnHZXWVOTP8FD3jsUeojAmLFTsQSKv8DCHYQABoMNjM3NDIzMTgzODA1IgxCyQMoS99hqAppU%2Bsq3APdxlnMGouvOxC0qXGdvmlcCElSF5wkQQd%2B7rbxRLVhd7kwEtX8w1qZ4z%2BKIt7matbOqh3aJA1Dd76vZRX0%2BidGmxanCbN72IgrOigselnr9jjFAz4MQDarXt2cMyXBqzoJ4IO45cjL%2BuXP61w6a0mUKIYBvpMAAGfm%2BaHArAR110TaLg7%2B5fdlvltATqUY6gfU2bX%2Ftu9MQAI9fezIkG009uW9TRAZCsu8AOWsFPjk89mjIHWbyZtvm3bMCA%2BAxeibrxr2ETY7X2%2B5M3PxLpZ4SNat%2Bu3ZL0cXNJwUCcVPDYjdmRNZ0OHi3befvxk09Om7D2wqkd%2BAl339TW1JvXCdJiaU1ReBcQ2Kuzu2HgEVMYVeKDccwL%2BK5fh0iiCydRSdfbK0MhXtENMCDdbaXV3yyMFgJ4E52OSe9cL5RmgxHcIcvg%2Fodi2qXa448I3QRPUW2XtxbHHc4kqIRoX6LWsfyg5aECIIYg0iCH9dmGt%2F7s3u4PDQ9BZuDn28JZj9figBZFiH6JimAwN3DVo44sX1cyxFifFMXSIFrcwgXFN1l%2Bv2jL%2FtcRqSGIxbGMV5yGArx0rg6h0sCzIl7XBa90e2T6OPH2j9oUfBfDDoLPtD5dCzwNE3IwY0p4I49jDSjJi9BjqkAcPKqV8r6xEZRUP9HGuLqy62%2F%2Fo2ceB8WGwUlFH5IgoZB6%2FOOUngSrzxTR%2BeDZVgP8U1yv8erDVP7gzObdpbBaGGOE0hyoDRCLsKKXzgQFEH0KSnAGs7i7LkqMpvw7q6zklzmMHJ5GzVlcFVreKnBPIja7KZkxX32VeEjZaaIIBFp2YIHKA9ZnYo29i7PUwOeEeijPpkc0wKJ8WQPc%2Ffcgs%2B3T97&X-Amz-Signature=d3f272a4b9c7e637aa64d5c78f2c759a7ae2f4b27a2008bb8b51ba5693b3bcaf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
