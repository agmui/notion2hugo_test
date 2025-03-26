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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVPH2ZQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKfEN05x1Hc%2BNBiN%2B5lVWz4nshHsipd9JBmy1Gn9U6GAIhANT687U4KcvfiLZIg%2FtHzFN6Oh2XWRhHnxYB3XUguIilKv8DCC4QABoMNjM3NDIzMTgzODA1IgzRVclFbuz6FD3Ee6cq3ANXRy7T4BXsuElXVvLwAMew9V062YYuVz8O0FLP4pw5BBJgkrE0uPNYUvc3JwuSzfCfiV0uQbQKyIxDOfgeMK98Wj5%2FGa0N5bH0QVYkHuo49TjUgCU7J1CTioRs00WvUSSW78TLIcpv77NdScT58RH4DoTAdqDB94%2BHv3Rjey5noLnWlR7tcY6%2FdShKjWwWzkMBbyJU1KGyqjoOiLVxejVKhjiHi9nNY0aPDSP5IwrUBN%2BEzqDMLaRGhRGzX%2Bkdl5VTCnd3wym4FHG6q%2FPQX9Az2OMX3KdMSK1U8LXxFg6MlAryZF4%2FlLMsXYsmCf2MdBSdeAU%2FX2H1k7PQYEM76yRwCgO3BL7JLjQP2cm8Gmx0RGWbyBJuyqeM56%2B5UI36Z03qNDEZfdpWvVfbYFKQ1kVrbiFnQwwRMkjla%2BQcu%2Bb%2F%2BFQx8HhzoTt3iBBG0vYqRCLijBn8wuPcEDSdRKXwFyg968LizXi70M55P5HpYk%2FNdlXnkAHZpq4dgRTT9JLbIaJdKhhln0uTZ4Hpylb3pMfNWBSdH4u3VoXr%2FQb%2BOfcl8phKDT%2BuwnD86Z5Cjidlax5Dcu4akD%2Fmd7C6lBkZq1j%2BmG0a3JAlNZj42bEFNQWa2f%2F2cXeXWbQG5kcSMzC%2F%2BY%2B%2FBjqkAUnRdLdvU9kxcKw89Vf2ZDW10tivL3GuUistUUOr6X949ZWwB5RnNnOHhzjHlLKTwRKr883U9c4rpJGxhrGMxijCfy7IkwZmUIrAmaJpXuQ63U41WdSxkqznNfg2RlmqJWm45YJb0dc3WhsJEtgsT7Hlmu9tHu%2B7K63cVA2DWaTdYMBLFOEjl6laMSGGOB83vZBgZwRYD0DOFQA4%2F8QKx7drouZW&X-Amz-Signature=c02418a12d4f7e723763fa23bc06da438ae4f06ac218f7a5154d6e0ff572e008&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIKXBV56%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWjzXm7gxH8Fps9nMqChuCTdoyCDKErXSycug6TjHiAwIhAMPdgm17E%2FxF2wmIt74Hf0nv8IKiZZWtbW6wnTquCixkKv8DCC4QABoMNjM3NDIzMTgzODA1Igyqo47vhQPrlSbnzW0q3AP%2BT6Efb8aiv0QbXEqtBI%2FUXr0xP7DMi%2BAsD0F7KwMfBCz%2BY0IP1w4aVolcaC6S3HvCjOx31WjdSoaL4ogYGfC8xStt3MauDQbvqyRRFvVFZ0TKxzWsGzQtHTFa5EszNnFQo6HyoE4ONahoxwIhid4ypAClkLCvCqXPN41kgat%2B1s9fct1Mzz4BZJgTgM4D%2BJyTVOaxwdWjvLIwh1fNNuVm1cGjVl7F3TfHScLxFPJoP9GLRN8iFs%2F3XnIFotOE6rRDzvvBv3ySceos4E3Bsl860T%2FSzLXDe92Mw80nx2%2FtvHZOdrR078Zu6c%2F1xhnQrWlA657uuf%2B5exZ8%2BShQ1lFbI3cO4uDkm0w5q9spH94CAX1ol8zNs1XP7Ilk8E0Js1OgCajXofN01ZUZsMny7kL5CIQQKmVhPCCpBNGaUt%2B7ozMiuNoHB6gBl4G2F2XoT0HDxU8yfzXSX9ZlITIWbeehu9XttOYuGrqznLW9bu3dSGkXQl7yeYdVW3LUsEPOUCpQqx2K6hN%2B2Ox1eLbD6VGcmW%2F6oYjua7JKccgKHkXnPUNZdRdQ2StbdbHbcu%2B4eAGyE4vi%2FuPXuA68W6FAq9XYYJ1AKvDDbK26KBJlRSIMd3VFrMCHvcIq2LXxGTC9%2BY%2B%2FBjqkAX%2FyPyR87grqOr7R%2FszR4d0q0TlnWvmUcZPbNZgnbq%2BO%2B9w8PuVfZ0faA9fEV9O%2B2WN499WZTVtM0ctK7n1VU5vzytDoezAAuU7p%2FpAZucdOz43Pid%2B4%2BMABKpAWkADdgE3KElI6oRX4TXX4ZdE%2FjzzHF7JER9kLRx4wrhsOmGbdMqm5zA8htz2C1XabyzgNz07jAEo%2B3QEtm3S5R89pplQG4xxL&X-Amz-Signature=e638a8d5e593cd3d22f918c00a04a6c4040c8edb2aee8ba178e257b1db646a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
