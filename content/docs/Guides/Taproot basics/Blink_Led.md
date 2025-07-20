---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXF5M3M2%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8usTY1HBK0lWghDcfWMBIHRx05ZqM8G0LB7e992t2BgIgICpOq72ddkHnvs7LSYj1CxSxkYfSyVsa4wAl8Al0nZ4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAqAPjMOn1nO%2Bx1HSrcA3sVLUviKgQQlOe0HN8fqfGMTCrp7iuN255SU2wW1jVz%2FkN6OdZ4MrYlqw1b5QrleKQ1XRxMF5eqMi2dGM%2BVPmHruA7PonV6%2BckSmPn%2BV%2BiMFJgXUAtrz%2BdehdvIbqMmKLUW12M8D8zGCCd4rWUDtURgRtL6Wcff4rn0ZqgVi9tiyYyrhgDIU1RFQ3Kkp1L6qx7rFf6IHYhuZID6kG615DczypDj9ACgYityjKXhejATvKRePUrXoHHuxl%2B2Vw7Ly5Xj9EuN%2FjbRd6ua7IhZwiUWNbD7N21GKAxcKmREBbR4y4ZHtlgE86%2B2f4qFNMsesxHUgTmnEGNJBnfzlPKQfQi9QvN7M%2FsYb8kH2KIUBcIPJTAWilKoktYIMdY4wYLG8WdW9X5MrIeWE2%2BtEUxn5GNty08%2FWfmCLys3ZdBLIoymSXyh0r25JGSeaoJsVPaC5et0DT%2Bn6f3oM4C5%2Fuet%2FBGYLdFeenYD0Gst9bME2iZdHLkZXr1D1vzz0%2F44dpflkt4aMB5bLz5cMfDvg%2BQOfJWVz%2F%2B7trJBjWWg%2B4h4BJcbIQ5XzZZuoiUTPDVIKYnovtd3SOenI9FoBTLwqsIFBGXi8d18x%2BJj2%2BiOC1WGVYlPQJiX0GiKtt8FpSGSMNW28sMGOqUBgxHokV3Tk%2F5MtvJPEW311Gz0TSMVguIzU%2BUMpMDTSQsDELhgkK4YDEYW5OqeFZCZu10HvGscR4W8iWRWAbT%2B%2B1aqdtOvcxCrQDetx0tFH9biEF%2F6a%2FpKjNBiVDB6N31XsRLsFbpEixXETx%2BuNtyai2OA5Nr6b1ndfxpuaRdOT4j3LERT2hEPZL%2FuCB8%2FabdyeKxfR9YlDwGz%2BfFP1K66j0m2JeYE&X-Amz-Signature=8a1a5b5f2ebe811294f33c9bacb798c12314af835a8a8ca01c5bc4af6abffce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHYHBRSJ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5HtZ%2FcA3OWS8hDMzwQvvogpnx%2FwfJvy0jpxb31zFwAAiEAg1SxRwsO5aoamQlXsWLwMghjoV4FbzjxgnxJbmmIRTAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATk5zXL5wkMif8fGCrcA1z1YVdLG1I%2FQJAiml2VPnRczPO2L2g6%2F%2FHSrsqabS%2B1juZMK1f2DVCevMGfJIv6uyBsB1nxhBfOu5BmnhMCP39dPZwm7MeNmQCIBCR3JpcBvUBeoPr8bA%2BYD8NUzZUW01bzeZXaBnz88uuXQA8czJzQ7yeTNlBte9XjTtK4AP0WXz3jMAINMtsR%2FYzNEgXOZLxS68sL2sq%2Burm9wRddmuvOK71VB6pwqWvaNdJzf%2FIuDG5Qp%2FX2EZdExQtQH6%2BvIBlvDME2o7%2BqttZ5mVyE88jR7HZTBwgVhW9pyq%2F30RbDW55OPTW3PB9gEG8CEYG%2FB77HB7dr%2BL%2BG7U4OU%2Fux7s5kyW7bR2lPvdHGRnFs93cv9kiwFBrhq1AV6E6LN3YYa1cHXINwZNddWoZWRlYaBZ4O0l1EyYXDWJ%2Bx3i9cIUd2tkV1nNyMdRgF0gkMTNMEkY%2B%2BikjFIYvgN6SJET7h9ZeixrwnlgKdhgvg8xHeSxm6bbjnEyTt7z5ZDIeECp%2FEC8F%2FBoHY6sl1KkvpfZWmgcQ4o1%2FiTNcdeL%2FVq9yNYhIe%2Fwzg1X%2FT91MQiDTEgG7ud3DrcWB4W%2FVQoQbTUbIkh1Zs9NQda9Ak5DmkQx%2BTg3peduiS4%2BE78Z5nPYfFMOa68sMGOqUB5DztKvFFp7xfTkEdm9nAthfgREE7Swzvujhi2hvJ4zsLtqhH6OFooCb1YfVlH3m6ED%2F%2BAIsJzCOCpDgGXKSKaPEAyJGGXHVW5D36uxAPHGf%2Fxqffh0ddQ2Zug4hYe6YkePnkR9roUdDvaRL3Jf%2Bo96QDS91qxfH3YxZTe%2BTolDMvk%2BTHNRoMYqoLRIvOyTpCBpLI4O36%2FqfoJj%2B85BdKfOktBE%2BB&X-Amz-Signature=b30561e3f6bd4bf540523d0d1b8d673974cd367cf7f5f8c601f1f8d93b9fb6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
