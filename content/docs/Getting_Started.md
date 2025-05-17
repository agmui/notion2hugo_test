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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJKUJWR%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmlLG39VYcMsI796pETnLpyqU02XU%2BHMlW%2FNgSTfmD2AiBE99qmpSSJY%2B9dH6stEod0Tu%2F97NENxysNbW28bV07Tir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMjivJbrjS%2FmLMCk3vKtwD8EJrgeU4YJWT6LI3%2BAOI8gtWUVnO5Y3O67ZZY9n11iO5UWf2KPG%2BWBgJrsd%2F9rXj91digA%2Bdlm4yN%2BXAdcFdiD%2FlVF02GN3WpjGHAJlK00B5OTBFLM7Xa6LPFeQSWwo8MSW651OMnTDNKbUxEp4rTKYYMMM6lrwynTln%2Bxhi6GT%2FKnRvM7I%2Bpxp7mMlUImvvcH3PV3UJNt1CalV5f2GriF3Mg21VpsCbHpSdH8%2FAglxbhIe5gTUMEvRtsEcyIB1rqusmoxOMUue2TQUB2S0Eo3ruROsdyBEIcskMzomDYoVVvg2Oj46VC%2Bqi%2Bd%2FUKYzy%2BtNUWWmsB2yLET43rs%2BTtorqAcfC6kukUfJmwuvduVFeKN%2BwbIGF4D%2B0XD4E1aUi9xwiO4srGMZ5IiV6k87AolIiBznGoZToKNVvlhHjjCZJX5CbWW0GB0wnJMNfwIhlMmTlbDPnvT8wS0C6H3%2FaiZOPXozSXcHie77WBiLdN%2BJTQ47rjaGvxpNnMG9h3QgHP5vxgKBVwgsuKlyLzJN1YXD9%2FD0EOfRKN6PIhnHCYHOmoHt8O1Qca8J7p6Xt1baru%2FIDWXG55gId74XrG3TDVbGpcUG9x6OmM6QIUTAI%2BhdtXAqWwS9hlj%2BQNHMw7%2FejwQY6pgG86zO5usNOQqK36Wuzol2tniBL1ReaKP0pFrySw%2BZsHtr3WTT6QytRMaMl5nGz948HCCQSNrvQPnm72F%2Fo8W3nq79GM4PWD%2F4NnS3eb7zl612Ydp1XaGVpMOIFANLMX6S3wiiqK9bSRashjCOt%2B4mnJr9nRhB5h8ay3tDcoWp1N05gpbPPKFD6TqD4OImRK9dPumx7kFUdCrC%2Bjfr1lf3MbvsW61xh&X-Amz-Signature=171ce75e63b2f247e7940a128cafb0720277a4b030a69c208ae08d1e2267f572&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJKUJWR%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmlLG39VYcMsI796pETnLpyqU02XU%2BHMlW%2FNgSTfmD2AiBE99qmpSSJY%2B9dH6stEod0Tu%2F97NENxysNbW28bV07Tir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMjivJbrjS%2FmLMCk3vKtwD8EJrgeU4YJWT6LI3%2BAOI8gtWUVnO5Y3O67ZZY9n11iO5UWf2KPG%2BWBgJrsd%2F9rXj91digA%2Bdlm4yN%2BXAdcFdiD%2FlVF02GN3WpjGHAJlK00B5OTBFLM7Xa6LPFeQSWwo8MSW651OMnTDNKbUxEp4rTKYYMMM6lrwynTln%2Bxhi6GT%2FKnRvM7I%2Bpxp7mMlUImvvcH3PV3UJNt1CalV5f2GriF3Mg21VpsCbHpSdH8%2FAglxbhIe5gTUMEvRtsEcyIB1rqusmoxOMUue2TQUB2S0Eo3ruROsdyBEIcskMzomDYoVVvg2Oj46VC%2Bqi%2Bd%2FUKYzy%2BtNUWWmsB2yLET43rs%2BTtorqAcfC6kukUfJmwuvduVFeKN%2BwbIGF4D%2B0XD4E1aUi9xwiO4srGMZ5IiV6k87AolIiBznGoZToKNVvlhHjjCZJX5CbWW0GB0wnJMNfwIhlMmTlbDPnvT8wS0C6H3%2FaiZOPXozSXcHie77WBiLdN%2BJTQ47rjaGvxpNnMG9h3QgHP5vxgKBVwgsuKlyLzJN1YXD9%2FD0EOfRKN6PIhnHCYHOmoHt8O1Qca8J7p6Xt1baru%2FIDWXG55gId74XrG3TDVbGpcUG9x6OmM6QIUTAI%2BhdtXAqWwS9hlj%2BQNHMw7%2FejwQY6pgG86zO5usNOQqK36Wuzol2tniBL1ReaKP0pFrySw%2BZsHtr3WTT6QytRMaMl5nGz948HCCQSNrvQPnm72F%2Fo8W3nq79GM4PWD%2F4NnS3eb7zl612Ydp1XaGVpMOIFANLMX6S3wiiqK9bSRashjCOt%2B4mnJr9nRhB5h8ay3tDcoWp1N05gpbPPKFD6TqD4OImRK9dPumx7kFUdCrC%2Bjfr1lf3MbvsW61xh&X-Amz-Signature=20133c53ed41ff688cc4d145c7ea9660b32a30ad4aba8746b3cd0538d9346428&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJKUJWR%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmlLG39VYcMsI796pETnLpyqU02XU%2BHMlW%2FNgSTfmD2AiBE99qmpSSJY%2B9dH6stEod0Tu%2F97NENxysNbW28bV07Tir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMjivJbrjS%2FmLMCk3vKtwD8EJrgeU4YJWT6LI3%2BAOI8gtWUVnO5Y3O67ZZY9n11iO5UWf2KPG%2BWBgJrsd%2F9rXj91digA%2Bdlm4yN%2BXAdcFdiD%2FlVF02GN3WpjGHAJlK00B5OTBFLM7Xa6LPFeQSWwo8MSW651OMnTDNKbUxEp4rTKYYMMM6lrwynTln%2Bxhi6GT%2FKnRvM7I%2Bpxp7mMlUImvvcH3PV3UJNt1CalV5f2GriF3Mg21VpsCbHpSdH8%2FAglxbhIe5gTUMEvRtsEcyIB1rqusmoxOMUue2TQUB2S0Eo3ruROsdyBEIcskMzomDYoVVvg2Oj46VC%2Bqi%2Bd%2FUKYzy%2BtNUWWmsB2yLET43rs%2BTtorqAcfC6kukUfJmwuvduVFeKN%2BwbIGF4D%2B0XD4E1aUi9xwiO4srGMZ5IiV6k87AolIiBznGoZToKNVvlhHjjCZJX5CbWW0GB0wnJMNfwIhlMmTlbDPnvT8wS0C6H3%2FaiZOPXozSXcHie77WBiLdN%2BJTQ47rjaGvxpNnMG9h3QgHP5vxgKBVwgsuKlyLzJN1YXD9%2FD0EOfRKN6PIhnHCYHOmoHt8O1Qca8J7p6Xt1baru%2FIDWXG55gId74XrG3TDVbGpcUG9x6OmM6QIUTAI%2BhdtXAqWwS9hlj%2BQNHMw7%2FejwQY6pgG86zO5usNOQqK36Wuzol2tniBL1ReaKP0pFrySw%2BZsHtr3WTT6QytRMaMl5nGz948HCCQSNrvQPnm72F%2Fo8W3nq79GM4PWD%2F4NnS3eb7zl612Ydp1XaGVpMOIFANLMX6S3wiiqK9bSRashjCOt%2B4mnJr9nRhB5h8ay3tDcoWp1N05gpbPPKFD6TqD4OImRK9dPumx7kFUdCrC%2Bjfr1lf3MbvsW61xh&X-Amz-Signature=1e8fbd5f870f1194edfe81f9fe8a5cc24d58936629e128d706d730b3afa975b7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIT72FWF%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnLkVqV%2FGXkHrLkxfO0okwz6R%2BuuQUTuNMD3wvwB%2B1jwIgLeGxPxmskmJdHqEuIJwgKRuS7SuPSG3qhV6d89Eh3Q4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAVRljLe3meknQG%2FGSrcA1R6twyJ6NGPpwWg0shnP%2BUpGvJKzi8GMf1xfa0i6KvjJMdvUhyg8O9diyX6XBH8lw%2FUOyynobnzDcQWJTK%2F2lq78KGSeoXKRWwgpgQ0tGw7DZTxt49kGrH6mMgQ2c%2BKw5I%2BzNmDbeFabVu0cD9I9J2mv0IGq6k6mC2%2FUqXbxqhC1W9wBXvaQbH3cfr1BXgZG3qITY5uI%2FpIeeBZGc0kT3Q5pm%2FszWPKhAw3ggv6lVnAGFyM7BNLQy89BIQfHpfF%2FPEW%2BwJvti7IHNXkQZjtDP9j2IHtbUD9iuVhX5qUT%2FPaqRPhTXQgcuCtTIIGswelpVeelaBAuXOvAGZH7j43Qa7QS%2Bbl7teS4ve14O7yo07XSZ%2Fr0tF%2BKKEMCjfYTxI%2BlZdxjKkrOCohWIV94enTQmvcL1TK0pt7k%2FSHV48z1I4nZZTRor2J9h%2FdsFs48p2iUM9M4n5yrxXO7HDPi9xbP430jOLMPXc2KyDkDH4TkGzi40Q%2Bza9wW%2Bmcr8CMH2IalWAQP01KB1NCtNuA96Bmc9Cz0PIUybpbviLw7qHqx6%2BuyHZ%2FCP2KAtGAresUrQDVWnhb0QRyjzL2yp%2BwT4UJs5EebDrabDQUq7TqIY6qeQRTYyuvU7ILIn%2FFb3dhMKj3o8EGOqUBUvWb%2BCEguOs6s0FJisByJGnhNgbcJmOYJ8F5mPWm4pWwpiRxYiRWDl%2FQtz48db%2FVkCxP6ux6Xyi6H1NbV5%2BiAlypvGmYU3puXDzAQSRfSqjDQEoUYhoxMUUC3itr%2FN9b7Xb%2FSGx2jopZ0%2FVpblC3dTjrudDiqkzpR7VPbd%2Fw6c2Biny9GdOvidcUgiqAGt2nfINd99rN4TQnbz1XcTpJzKSLv9rZ&X-Amz-Signature=7415ee8c8397454023ada3340daf102b1cd225a599494b7e132200c38687c32d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RFHCMPK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERjWxJNaziQooo1r%2FcERtGxssG7Nbd2vBvhJ6i3dJpxAiABzngVtNb7G55ADTjvkgKy6d1OKBG4m2jnyr%2BWnpErQCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2FCeH81Sl2snSHBNpKtwDgbwGWOo3UaSCuGohq8cBd47Ay8WZeTmY%2FFgOl0LT7UF2dAc3vO0dQcoLsiTXcbtoJdnDgVJlD9TWg6LVUHKCGkofMcQClF77GRyx4vfLm9k3VWs%2BQd5%2BAglmtnGYVEe2fyaviQfpzW6J8Rs56icVNWa6SEq0LZ%2Fyt9tt0urHAoQ6FydU%2Bpn0BiMa07qwLBLqvm3NgCUoZY1Fr6fkt4H8Fx6EyopOQi76TWkqbp1z5s20wHtkW1hhqqfb8i3ETLcmhFBhxSFV39LKoEDe0xYGFOgSt6ur817lYmZEnYhiLShhtpn1di6Gj9cLu9ikFPtppu94KCAUImh9zWV7T3uJcTXeF0YJXI7rvNy0F3zWkP3Bqc9bQnHg6krQFAjiNeum%2B%2FdSR1%2B%2F1tuchzhaULPjQ6%2FTpkQ%2FokxmQBgNO92KFsG%2BzGf%2BUF6ISj2yNUfmBJ%2BeB7xzEePCJtwiFdWcAFtS7nVgtjDI8sEEUf80DpUzYIpAbzE0pCPocBl%2B3xzNrxYLlj7tNe9vriAwb68xMRxC%2ByECEmFuJ1eK7wiNdz4nM%2BgwFEOxzkWHbEgFOH%2BdyoHC1tN2Eul%2B5c6Ye0x050WNMYRuUVMQKir%2BBiy7NceuhEuQfQZt3Cq5%2Fz5Q3zgwn%2FejwQY6pgGgPYJV1Y7lBX2aysG7iKQEc7wUAFNwfqRtZTNz%2F%2BplcL1G7Lmuh%2B2tNxAm2mjKD5zGBYxQcU1ivtbGgfMxeiHWpWz95g3GwIky2yhsOdQVK8eHACgn%2Biec1nMnlk1AbACrirPJwfPz7xC6oham1XLgidhQnAZZtj5QXN4h8w69yChnHL7uXCNanmPh9qXWDfklnR%2FPaQtUAnYJUdaRhxsr5pDhEznC&X-Amz-Signature=75d5b0947392883c0480674b801e4df507095f291589f151c989a3ebff5fa746&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDJKUJWR%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmlLG39VYcMsI796pETnLpyqU02XU%2BHMlW%2FNgSTfmD2AiBE99qmpSSJY%2B9dH6stEod0Tu%2F97NENxysNbW28bV07Tir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMjivJbrjS%2FmLMCk3vKtwD8EJrgeU4YJWT6LI3%2BAOI8gtWUVnO5Y3O67ZZY9n11iO5UWf2KPG%2BWBgJrsd%2F9rXj91digA%2Bdlm4yN%2BXAdcFdiD%2FlVF02GN3WpjGHAJlK00B5OTBFLM7Xa6LPFeQSWwo8MSW651OMnTDNKbUxEp4rTKYYMMM6lrwynTln%2Bxhi6GT%2FKnRvM7I%2Bpxp7mMlUImvvcH3PV3UJNt1CalV5f2GriF3Mg21VpsCbHpSdH8%2FAglxbhIe5gTUMEvRtsEcyIB1rqusmoxOMUue2TQUB2S0Eo3ruROsdyBEIcskMzomDYoVVvg2Oj46VC%2Bqi%2Bd%2FUKYzy%2BtNUWWmsB2yLET43rs%2BTtorqAcfC6kukUfJmwuvduVFeKN%2BwbIGF4D%2B0XD4E1aUi9xwiO4srGMZ5IiV6k87AolIiBznGoZToKNVvlhHjjCZJX5CbWW0GB0wnJMNfwIhlMmTlbDPnvT8wS0C6H3%2FaiZOPXozSXcHie77WBiLdN%2BJTQ47rjaGvxpNnMG9h3QgHP5vxgKBVwgsuKlyLzJN1YXD9%2FD0EOfRKN6PIhnHCYHOmoHt8O1Qca8J7p6Xt1baru%2FIDWXG55gId74XrG3TDVbGpcUG9x6OmM6QIUTAI%2BhdtXAqWwS9hlj%2BQNHMw7%2FejwQY6pgG86zO5usNOQqK36Wuzol2tniBL1ReaKP0pFrySw%2BZsHtr3WTT6QytRMaMl5nGz948HCCQSNrvQPnm72F%2Fo8W3nq79GM4PWD%2F4NnS3eb7zl612Ydp1XaGVpMOIFANLMX6S3wiiqK9bSRashjCOt%2B4mnJr9nRhB5h8ay3tDcoWp1N05gpbPPKFD6TqD4OImRK9dPumx7kFUdCrC%2Bjfr1lf3MbvsW61xh&X-Amz-Signature=da1ed33c7c801f94227fe49197f6bb6e99ee225f2b6292f87ce46126051362f3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
