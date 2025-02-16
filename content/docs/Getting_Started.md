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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB4FF77S%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIA2l%2FAy4nF3ZahFdZEH09ZFKsV1AZkETu0wtUUAPoN%2BDAiEAuymePryDnNbLDmkFOwaKzn%2Bm8PWB8uBFNartpzykKSsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNVQIkAaJs5bKWx2jircA5JtO7BW0w%2FB1LfVRqOgZQAni21MeGfuwYLD3wTUyC%2B7u4COFRVI5Y4G9QPdbIa4BAknlJrYkaOMNflkAQft%2F1ZDTcHU6ZJNjRSf%2FRwkxysu1x7r23plIj8PO0lzm1eVeX0jTn%2FcwXa5Jj1k4mpxbHEFQ5Q%2BNLpUU8Yaea4G8CvWaMQH7i%2Bt%2BHwFXDlvndSKP9JQIqvh06y%2F5HCkCOB90yfJru4%2F7R8n1%2Bdv4Wtm%2B6haMDJZWu9PiYSd%2BaGINsH%2Frk%2FZWj5U1iu0NYrjFZQPyvhj6ZIZiXm%2FcooqL3shMWq6ScPab6OXdhUgaZ%2BsJhq%2FRkq3pWRL29357qL52ToCxuGYFRbw8vPj13h%2B3vuM4mHIFGl482MKqrnmChwcicni0tKU72eEsG2NgQjlfR%2FCc9CsTPgRH6V%2BJabQFfTauaLw4VfxwoaROi92Mst5wLpbPBRTTPiyv8DXEyzPRznV6xH3PdjdwmydTN%2Byy1sIOXUhKn8uEALfThiJ3fnu0AciqnoiJx82bTDcQlfh1cd83oYjdg2sGWPGj4PlJwuU%2B4IuHU4aCdfENHXXD3AlBV7mqz1X2SFOCzl6Yo5kr9NJTNTUebqr4YP0wp%2F%2BKRMTrmrdells%2B68riWBDMWjWMMX%2Bxb0GOqUBreiEf%2BArcqqTrJJSEEOQ%2F2Zwmn6qYOGqCQtk113GIfsvXgD59WOoiDn%2B53q%2FccAAmCK%2Fh4GaEDKmoq9YVsNoaDzA2MMaYWlG7LoRf%2BpfAGmkHemQV2V7%2FuQZMX36KZ9Kahp9ypb70TkLaZnN54Z33wQG4PnFimpVwBPMjM5f69EMmuj8qx9msp0lr8YPqa5EQVrOXgGW3Yz8vwgoFMTubRwinfzF&X-Amz-Signature=91d721cb6fb93a56454554ce0a4e4fb28ecc79b51d7243e232494e7f210ef50a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB4FF77S%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIA2l%2FAy4nF3ZahFdZEH09ZFKsV1AZkETu0wtUUAPoN%2BDAiEAuymePryDnNbLDmkFOwaKzn%2Bm8PWB8uBFNartpzykKSsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNVQIkAaJs5bKWx2jircA5JtO7BW0w%2FB1LfVRqOgZQAni21MeGfuwYLD3wTUyC%2B7u4COFRVI5Y4G9QPdbIa4BAknlJrYkaOMNflkAQft%2F1ZDTcHU6ZJNjRSf%2FRwkxysu1x7r23plIj8PO0lzm1eVeX0jTn%2FcwXa5Jj1k4mpxbHEFQ5Q%2BNLpUU8Yaea4G8CvWaMQH7i%2Bt%2BHwFXDlvndSKP9JQIqvh06y%2F5HCkCOB90yfJru4%2F7R8n1%2Bdv4Wtm%2B6haMDJZWu9PiYSd%2BaGINsH%2Frk%2FZWj5U1iu0NYrjFZQPyvhj6ZIZiXm%2FcooqL3shMWq6ScPab6OXdhUgaZ%2BsJhq%2FRkq3pWRL29357qL52ToCxuGYFRbw8vPj13h%2B3vuM4mHIFGl482MKqrnmChwcicni0tKU72eEsG2NgQjlfR%2FCc9CsTPgRH6V%2BJabQFfTauaLw4VfxwoaROi92Mst5wLpbPBRTTPiyv8DXEyzPRznV6xH3PdjdwmydTN%2Byy1sIOXUhKn8uEALfThiJ3fnu0AciqnoiJx82bTDcQlfh1cd83oYjdg2sGWPGj4PlJwuU%2B4IuHU4aCdfENHXXD3AlBV7mqz1X2SFOCzl6Yo5kr9NJTNTUebqr4YP0wp%2F%2BKRMTrmrdells%2B68riWBDMWjWMMX%2Bxb0GOqUBreiEf%2BArcqqTrJJSEEOQ%2F2Zwmn6qYOGqCQtk113GIfsvXgD59WOoiDn%2B53q%2FccAAmCK%2Fh4GaEDKmoq9YVsNoaDzA2MMaYWlG7LoRf%2BpfAGmkHemQV2V7%2FuQZMX36KZ9Kahp9ypb70TkLaZnN54Z33wQG4PnFimpVwBPMjM5f69EMmuj8qx9msp0lr8YPqa5EQVrOXgGW3Yz8vwgoFMTubRwinfzF&X-Amz-Signature=8a3251f60cf3c0d84fa542aacd2f6967810189874fe4c834a333df9346f423be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5JI3W5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHIWQdKXwHwM%2B97ru0EGebK%2BytpyZ9uPnAgbs5%2BGWS%2FoAiB8FoX7PQlzMI39nwfL06q262fEklkAPz3c2h1SEJGi%2Fir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMXBwbArecaZmil%2FPVKtwDczXoan7uEkmPRZHBVXKuWIBovQoGsy0SQ11eBJ8E01O3633wk2v%2BeHKkohPjYkStX6Zl5MGYBoKfBh1GcjnucNuIxDggSq%2Fn23KnQ0jUW691GlvZ%2BjcZ9GSuJVSTpAfL%2FkEJny1Y84SCWCmNGZ%2FhgWHALDJqQUvnlHKYEXO%2BTtmOpr1PFfSlWqimcXK8VsPNrYzdWWqw0%2Fdh1m%2Fanmd4yOVJnkmPNnrEFM7XIQXqi9AHA%2Fswd9n9W1EkYG9et6THpe9jYuPNQRuVr0HEQ3MOAZFy%2FGTCFc1MTxIiklhvkMVe9obhcXUywBK8BZWrrXQmszqtjpHbjeh%2BDsWQdX9VMm%2B6dHqj3fhBIbnkkGJXz00gcuwFHLqFdsdTKqD3QH1UEoo3ifvOxIKd0iIGSqFfGsutkO%2F1l6tK4pU3YiqCjoHgXD1fFkMyk%2Fn0%2B7ZwgsoUJzMucptQD11yAEt4CTv3sN7daxkcSOZmX%2BrnEOhFTHFKUflpkj5nANsSfTjzqucXg17fYfdtzLS%2Bjkpqzj8n5yAZBnzcGD9GuMMhy5fK%2F%2FLs1x3FgHoAvuSMgBAXZwebmIg3xBMVCsvPA66WbbT1tStt9sRd1ZgqZV5ig8P0uGGc91eLB1P45Qx4k2kwwP3FvQY6pgEif5f3o9mbWtnm1t%2FgvQUMvNzO9WCcXXJ4WsvZENdRWji3kR8kY3pPpkmW1l3BJyaR7CQY5CIou4KeYtNl99ReTfLhBQ7gHPLeeXhLu6xkB75ZiSvlE1PnJf2ISVZMOFDS3j1OY%2BPyJKMt%2B88lJWmFGNx7BUqOsGmZzWkc5mJS%2B0SJBtlJYiJczpSRLwJcEKW9kQsUhcyGl3pIorfILsdKzNGmvgGz&X-Amz-Signature=67f82f12ac427a2280884fd33e2feff3f3d90f7d271426fa2761df1f30bc0fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMPDHKM%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDkFp6K6LvqfytkBHvg3tVN458aj%2FyOT2%2FmbKqENxDqBgIgec8le8J90uysO6LiJ6ux85UUNQ46VLKQH1FqW27iCRIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCdj18qwH8KtnY0BpircAxHkTKpa2ahporZeI%2B2pxKKqydvfzLDxGO5zWZFF9UGxOsEAW%2BphDU1ahDv%2BmrIATd0YWDvnCxZmdW7hOfygG7ETM6FpwfVGM%2FgJcIKHUZyivSdiobgX3vQlZDKzFTO11spkJjW3bSIPLu60w2xJa%2BydbGuTX4jXPuLHdekx%2B%2BS0p8%2BILKhnGHDCHApFjqknx1TzsG7NC%2FVf%2Bxw0eo684xapSO9xVcMNxdOd3wNG9nRybWb%2FNEnLqWcREG7I30GvcRtQ9gEz7O%2Bjf6x7Ej5mdDrMUQu87zy%2FfWUHEuY99SQbwy3MzIyuUTDA1yigsQrTHvqfCv3WmSp0HDT8NEEMxfKVdeRydLcjpBGG6kNeLCkxxBHWtpSwo1lingpyMUDbZQz3e8x5KihWMpI5%2FCjOf4aY4jijyCaO6hrkVZht4TTzXM2%2F44pMY%2BZkzholagflWSLJh7K0%2BJmDfL2o64ExXm1doi87dI37NlSpQCpRwyHXMKvowPFdM7K%2Fl3LsnCkqBRx5w6N5hmO6yiRgAMTiCsC8oZ3vsAbCb18IyDsEaa0%2BwvC%2BiYsCA%2Bpd5QsuvtL%2Ff1fIT4FEkWDftlRLmSzCL%2Besu1ZCeLPhRuOYeHOpHhs6lKMFLOL%2BZoR996R%2BMMD9xb0GOqUBMxw7ZTw1QZ9A63wo9LrJEbkXZBOIH3kcBpDOY5RRVwGVgNhfFpgZQHFI7tKkq5Yh%2FuMg3VoDZuIEsy8OK9QLy62Ek%2BS47TvTT%2BldQ%2ByXZqm9haaTKo7XBq16izJr3sQtIwZeGbNHran6HI6HmTiFWK3n1lgWFAZ0HRqRPj26b50u6Mx6Cf7W006Ep5LIyYQsYYhVbai9GW3hD%2FqtoKCHq%2B%2B%2FbFbZ&X-Amz-Signature=f54073eb0caf34b0eb2ff9df38769478ceadb859260b5e3f32e5d70650825802&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB4FF77S%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIA2l%2FAy4nF3ZahFdZEH09ZFKsV1AZkETu0wtUUAPoN%2BDAiEAuymePryDnNbLDmkFOwaKzn%2Bm8PWB8uBFNartpzykKSsq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNVQIkAaJs5bKWx2jircA5JtO7BW0w%2FB1LfVRqOgZQAni21MeGfuwYLD3wTUyC%2B7u4COFRVI5Y4G9QPdbIa4BAknlJrYkaOMNflkAQft%2F1ZDTcHU6ZJNjRSf%2FRwkxysu1x7r23plIj8PO0lzm1eVeX0jTn%2FcwXa5Jj1k4mpxbHEFQ5Q%2BNLpUU8Yaea4G8CvWaMQH7i%2Bt%2BHwFXDlvndSKP9JQIqvh06y%2F5HCkCOB90yfJru4%2F7R8n1%2Bdv4Wtm%2B6haMDJZWu9PiYSd%2BaGINsH%2Frk%2FZWj5U1iu0NYrjFZQPyvhj6ZIZiXm%2FcooqL3shMWq6ScPab6OXdhUgaZ%2BsJhq%2FRkq3pWRL29357qL52ToCxuGYFRbw8vPj13h%2B3vuM4mHIFGl482MKqrnmChwcicni0tKU72eEsG2NgQjlfR%2FCc9CsTPgRH6V%2BJabQFfTauaLw4VfxwoaROi92Mst5wLpbPBRTTPiyv8DXEyzPRznV6xH3PdjdwmydTN%2Byy1sIOXUhKn8uEALfThiJ3fnu0AciqnoiJx82bTDcQlfh1cd83oYjdg2sGWPGj4PlJwuU%2B4IuHU4aCdfENHXXD3AlBV7mqz1X2SFOCzl6Yo5kr9NJTNTUebqr4YP0wp%2F%2BKRMTrmrdells%2B68riWBDMWjWMMX%2Bxb0GOqUBreiEf%2BArcqqTrJJSEEOQ%2F2Zwmn6qYOGqCQtk113GIfsvXgD59WOoiDn%2B53q%2FccAAmCK%2Fh4GaEDKmoq9YVsNoaDzA2MMaYWlG7LoRf%2BpfAGmkHemQV2V7%2FuQZMX36KZ9Kahp9ypb70TkLaZnN54Z33wQG4PnFimpVwBPMjM5f69EMmuj8qx9msp0lr8YPqa5EQVrOXgGW3Yz8vwgoFMTubRwinfzF&X-Amz-Signature=632c5d41b49baec2071682cd8dbf4cd31c9837fedae3c64fe4a10fe67d0d2902&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
