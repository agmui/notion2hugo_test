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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXY37HY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyIgadqDMz2MLDuFECvQ4o2UMAHBin%2FbFmdreViGQxoAIgPmxcZZFpJiQ2A6giRgfksMeQf8DiJJZmkMBhyfJbddYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDvAV3abcQ5Ko26VtCrcA4lSGQFQ%2BgpnAnUZTf9%2FnV1y%2BH3SDHVm2mqlghwjGEm0OCkPODyES6OABed5HV7%2FIlEAljuzFrI7HmtPesKd2ubJs6PjABCjiTvtJZNVrY1DSOY9RYpiAQ%2FDCTc4Aek46TpfudTgjfe3DVa64uDWFiH9SEz%2Fefc%2Fik4Vi0QtdYP7butgtfapboMWwddFIaRAOS2b9g0cWnGV8EE9r7%2F6TYZTQ9MHM0cVJsRp1%2BcTetMgCZlFiQpUMDAqKmxlx7DqR9q3%2By%2F930Ku2z4i7%2F63QoBPEjx3uzoeOEqTYf%2BfX7IxrqS0PZNocerBs%2FdqJINkLEhWfUKgSUca2Eum6NcQ8Q0KE3kjERJ6y%2FeF5qAh66WTLx39E1F1kYrcoHukGbwjGF7kK4VROqKkRXH3DVb01s7hpN8l1Oos0gP03Vgcv98srC%2BP3AGMoTmYQkQ7ad6rFqOAg5p14Sd7PYHcnayM8cXSQ%2Bo7EGpOEFtTXNDD%2Fy3MrfqEd0ThaoSdw6SQyXUPBKouQntvOWBcyJVr0drIjB6mMFYbblTtt%2BKRbT3Ef2MEpgDg8Y145XanXeFyt2IP2SogiIDJkJ2m4wLOsSokUzhza%2BabOSEQocjcqWleDm3wddZq6GfKUtXUGqhhMJuj4r4GOqUBw0331TKr%2BlBMeSgAQ20OKvCOG9TgP%2BFJ7Jj1ch3lucWIk4O1vJUCmyX2G%2B90YvyG0VTu9X7iPmhhjgHbwN3bhQGknN6pbfiLhec7%2BmfBZinb9gRSh5O%2F4OL8hIIvVEWvsB4rxDAboyDesfJo%2BVNGSGWzMeGapgpGEacLI3lmJF2tJYRQKWOi%2FqyAqTLSbzh2i6HGi4erm7o00yGVe2JnDc8j87zW&X-Amz-Signature=a7538c32392fd2229d9a47d7ff604030fadd1ed59e84d3e792a5868aa3de5c23&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXY37HY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyIgadqDMz2MLDuFECvQ4o2UMAHBin%2FbFmdreViGQxoAIgPmxcZZFpJiQ2A6giRgfksMeQf8DiJJZmkMBhyfJbddYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDvAV3abcQ5Ko26VtCrcA4lSGQFQ%2BgpnAnUZTf9%2FnV1y%2BH3SDHVm2mqlghwjGEm0OCkPODyES6OABed5HV7%2FIlEAljuzFrI7HmtPesKd2ubJs6PjABCjiTvtJZNVrY1DSOY9RYpiAQ%2FDCTc4Aek46TpfudTgjfe3DVa64uDWFiH9SEz%2Fefc%2Fik4Vi0QtdYP7butgtfapboMWwddFIaRAOS2b9g0cWnGV8EE9r7%2F6TYZTQ9MHM0cVJsRp1%2BcTetMgCZlFiQpUMDAqKmxlx7DqR9q3%2By%2F930Ku2z4i7%2F63QoBPEjx3uzoeOEqTYf%2BfX7IxrqS0PZNocerBs%2FdqJINkLEhWfUKgSUca2Eum6NcQ8Q0KE3kjERJ6y%2FeF5qAh66WTLx39E1F1kYrcoHukGbwjGF7kK4VROqKkRXH3DVb01s7hpN8l1Oos0gP03Vgcv98srC%2BP3AGMoTmYQkQ7ad6rFqOAg5p14Sd7PYHcnayM8cXSQ%2Bo7EGpOEFtTXNDD%2Fy3MrfqEd0ThaoSdw6SQyXUPBKouQntvOWBcyJVr0drIjB6mMFYbblTtt%2BKRbT3Ef2MEpgDg8Y145XanXeFyt2IP2SogiIDJkJ2m4wLOsSokUzhza%2BabOSEQocjcqWleDm3wddZq6GfKUtXUGqhhMJuj4r4GOqUBw0331TKr%2BlBMeSgAQ20OKvCOG9TgP%2BFJ7Jj1ch3lucWIk4O1vJUCmyX2G%2B90YvyG0VTu9X7iPmhhjgHbwN3bhQGknN6pbfiLhec7%2BmfBZinb9gRSh5O%2F4OL8hIIvVEWvsB4rxDAboyDesfJo%2BVNGSGWzMeGapgpGEacLI3lmJF2tJYRQKWOi%2FqyAqTLSbzh2i6HGi4erm7o00yGVe2JnDc8j87zW&X-Amz-Signature=5c8f163ea5b93175154dfa79e53ee4a2498a07d49d409bce912e8db39bd0f427&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JQY4NQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNzrOdBfFgpxg7nQ9YNJfzjmREb9Tbh%2FsQ%2Bl1qE3mwcwIhAJ8fDqUjISh8KRElLijEW%2BCwCvA8V6iO0FGZaRhLMVg4Kv8DCE4QABoMNjM3NDIzMTgzODA1IgyZ0alRdpRMr0P4zT8q3AP9vqt9ii4Uy6RTMlIVodkLQatHhuFUkvC4%2BYB7tnT9GHik9Xp7LV99lnTPKrZZoz9mYEFeTOPwu6ugKbGbOYwFDXPdsoY59nckdfAgdSS2a%2Brjrxr3Ft6EzeGFo5DwAaFQ32fsmaelThZVr7k03FFsUY8LDNd9axZw%2FEwVfx1D8f2tLLNX2PhXCwJKHDf0if3vtiDC5juGxWROVdxMIoDKSKwqYS6WO0OgZDRRIM45bCD7tC5VI%2Fe88msyUa6hCsD%2FKo0LXUqDHNXgiuMcHonyW0RkxBR76qI7kWqz%2FtHG3naSQTAgzzsOEV2OnTzWRnFlfVJn%2FwbgjsMbPeNWmF%2FLGihnmsAgy%2BwzPjdl1fk%2FYaEBI%2BIBoGD1GqMWXU3kAbo4Pw4HAeNTrje%2FeebIJKPIS%2BlNFr4I1ONOfsUZx9BQ%2FuzjvGH%2FLazZYm3FNijz4WEx5Pm8QFBHmIKA4AyV04%2BAHh1d7gCOmI%2Bnfi4RlF3w1YLpWuf9qPmTGHtKfjXqUH28Q9dr7T9kGbTpzAKIautk6SQynxl6WB6GoII%2FF5VKiFkEhZCFaqfSffeGc0eNLUaLqgqTboEs2I1w%2FWWaAc16yZsxVnB5ddE%2BEA%2F1p81eDyHM3MHdKM6mus7hETDCo%2BK%2BBjqkAfQteXRgt4Q52W6nTXxIE7sb8wj35PMDqwWWWzggUkblOliXvWTNN%2B%2B0%2F5CVz7NRX9hnujlGe6SBBWZEHsBtu4s4ziwcgfmV8DQihxpnd%2Btwz%2FkvdJxuSnB0%2BAtp%2FaYVZXBlSrGNvLqK5SQQ0pdovC9LIPgyqp4x1FmJktOhir6NlbgTrPAz2qqTlBV%2FDeah86v9bSiMbtDNVx2dNIeAsrh2oQcY&X-Amz-Signature=b6ee5813618219b223d2239ce592ec3b113ab840921ea24472e343638a6c1d74&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIHNDLW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvgvcAj07sbpGfpl5XjlRE%2FZIHO0tVC%2B8j7SVtuva1%2BAiBQjv4JTB%2Fc2D73sgTTanujBX%2Bbe5pf8OM%2B4EKNX2qaJyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM4hZEe9JWqi05S9CAKtwD8x27PoG2uCUVKPXua9Z03J51PC9It0xs%2BAvA4Ezstz%2F5kbN72bdVIR%2BQCcqP0Jn%2Fsvi4xvz3fl%2BAMKeL6frlbtS6PQsMQ6eP0eK9t8Gh3uD5Q5eec2OFiff0RPlVSfCXRiP1uuqHtvhFM%2F22TE0bAm5jJYrH3PGXamxI4%2BRC4lA6ONGOHXy8UFTofsUoAGdbuovo0ba5HfrDrXIXNQipAR9KTBeuk%2BmJYUSpVKqDtIIudCyvAUkeNaYiJG7x5qwvdHRszuvlH0O5I8%2Bci9pN3nnUtPokjFtJJhUyoYvA31eaR7ZKpIOofiHUKnX9MMWOogKOb7oEIvI54KEsytEvmqkweDRQ%2FQ3jiRUOCr3zrkr8wjRuN5LPsOOrDbRC%2B%2BL%2B%2BDZZC2mWWMWPtlLNHClWwqHIGX2ZDx36%2Fj1Legaey5o%2F3PzTCAG739BU5GCgpNuPBxf8RnJrEoVlGgASZOu00IiHocJbA0FNwb7OOS5HSp0uYJOzKideXIf8%2FSObVBOtfCWCwtq3xfQBmg7uPH%2FsoCRpb75g%2FBniyvJ8ugzAQaayuvvYKoPjLjJ0pOnx%2FSVaihKO0VD%2F7PZA80GrlSoAqiahWTrC87rX%2FaTfVx79X7JHZW1s3wmB212njUEwhKPivgY6pgEC9G1P%2B5vYYYWuBiqhH64b84cFOb1bP8svoUZ7JxMxgMXVN30YOS19UAG8wmOibvsV5Jd6T9VjAoyHnNF2oEYHszTqImW8yDNZQRvSYPUVGD5UCaIHLUtiqd3Yp4hG8fgZgGo2Aax9%2F9bvNNaxGWeZ07zyvPWvHqzhh2AshC6DFwMtsf6ozuRPcXQxQoYvUKX%2BVQpesPMaUFrOj1osjrtVy7Y%2F4PUV&X-Amz-Signature=ae81610bc48f5de64b8be932219fb2a753885e37ef5fb79612c687e9c38696c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BXY37HY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyIgadqDMz2MLDuFECvQ4o2UMAHBin%2FbFmdreViGQxoAIgPmxcZZFpJiQ2A6giRgfksMeQf8DiJJZmkMBhyfJbddYq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDvAV3abcQ5Ko26VtCrcA4lSGQFQ%2BgpnAnUZTf9%2FnV1y%2BH3SDHVm2mqlghwjGEm0OCkPODyES6OABed5HV7%2FIlEAljuzFrI7HmtPesKd2ubJs6PjABCjiTvtJZNVrY1DSOY9RYpiAQ%2FDCTc4Aek46TpfudTgjfe3DVa64uDWFiH9SEz%2Fefc%2Fik4Vi0QtdYP7butgtfapboMWwddFIaRAOS2b9g0cWnGV8EE9r7%2F6TYZTQ9MHM0cVJsRp1%2BcTetMgCZlFiQpUMDAqKmxlx7DqR9q3%2By%2F930Ku2z4i7%2F63QoBPEjx3uzoeOEqTYf%2BfX7IxrqS0PZNocerBs%2FdqJINkLEhWfUKgSUca2Eum6NcQ8Q0KE3kjERJ6y%2FeF5qAh66WTLx39E1F1kYrcoHukGbwjGF7kK4VROqKkRXH3DVb01s7hpN8l1Oos0gP03Vgcv98srC%2BP3AGMoTmYQkQ7ad6rFqOAg5p14Sd7PYHcnayM8cXSQ%2Bo7EGpOEFtTXNDD%2Fy3MrfqEd0ThaoSdw6SQyXUPBKouQntvOWBcyJVr0drIjB6mMFYbblTtt%2BKRbT3Ef2MEpgDg8Y145XanXeFyt2IP2SogiIDJkJ2m4wLOsSokUzhza%2BabOSEQocjcqWleDm3wddZq6GfKUtXUGqhhMJuj4r4GOqUBw0331TKr%2BlBMeSgAQ20OKvCOG9TgP%2BFJ7Jj1ch3lucWIk4O1vJUCmyX2G%2B90YvyG0VTu9X7iPmhhjgHbwN3bhQGknN6pbfiLhec7%2BmfBZinb9gRSh5O%2F4OL8hIIvVEWvsB4rxDAboyDesfJo%2BVNGSGWzMeGapgpGEacLI3lmJF2tJYRQKWOi%2FqyAqTLSbzh2i6HGi4erm7o00yGVe2JnDc8j87zW&X-Amz-Signature=ed4595154eef1ad486a64d513975b2aa73ebb6ce33d06d237c0d41d28a5936da&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
