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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5EPCY7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIF1RnFMkfx86Qq4%2FAWvkO81p9f6E3vvJ15PjKE86iXVDAiBfn0mnppVnJNlm9bA41SL%2FxknzOQUw5xnhbvd0QFgzTyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMbDVAmH9xR%2FcnGtTNKtwDACMhu3LRKPJzbn3h4K1AWhtZWYzyR9hHuB%2BlKug%2FW69oWSapbGlP%2BJA2HPvmPSEOlmHFFjzWMJMJntTY8xmiEaiTjg948WekWqmH52ovT7e5eQBRT3xcO7QGQxvcW%2F8g9AWCYUBijei4GeTrIXzBTXLbFiL6HELfLuQihRlCR7MTmX8BHk%2BLcHUfDRTIFLB3HOHyn2O9nRBnGZxnytT57Sb%2BcJ9zxWOuoIATtTzhJvBMqasCdue86obPINey8pWb7pTQ9c%2BbQIGiaa2PNRs7PaUPqk85MKTSiL6nAVd3G1vKbYL5ZGooRXMW80kC2rLrqenEIEW60xS1v3bt8wj0DnFRlhiEpt8Havy1Mu2AEFj2SAVd4y%2FsTLssj%2BP1n94v88%2FLeneVlk9jhc%2FPS2zVdXFCZ4Wc5rOTFJ1BlGqez2MWvBXoshuGOJOHVQtz%2BICvrrtRFZOCjmAyYjavQcPAUnFHY%2FIDkh2h7KkcssLuoE58iSRtFTt0mIRBDAwEM5WcxNC9m%2B%2FwNsH9zWdC9lId%2BejeYldf%2B%2FWH%2F4hXTa7zXGd6NSeNjEKp3xBYS4gp9rx8FU7mUcQpPhg7NchTF75nSvYVWnn4UwvrcC1G8Tz81DNNBstE0Nwbo12fIxUwveyPvQY6pgH%2BjTnP8Wwa3P7qUYG9y1ZF7MCOvNDhxZsPwbqyEdbCFyuXeWSrItLRMv6iFfUqE5OvW5vgoAydd7AGfav21Ka0A3K1nmVWWI1aFl5eGKnZOx9hm8P4zyfvEXDFBaweQi2%2B1L1O8nHvein8nq1bTU2lbiZHat3Ejy8OtU255KqTf0eWdf%2F5F%2F2sJDQg0ut5lhUNqh8sm%2BcjaCRIIgZSzp815VywqQdW&X-Amz-Signature=a5a51d22c835cdefafd6572712700a894214e3a83141faa226c35cf04bbdb634&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CKUA4HB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD2gRElhVIqGsRdCLJwxm5mWDIJ5sPWhjKqbpNXGAapigIgc8V5Y4v5DRAu98c277%2BKJQbrhi8XxDYYXNTwelFFizgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEsXRfOdJ1likCFahCrcA%2FrxkRutuU4j7wOigzZMh7735qA0gpFaHCm%2BdmbTtrFvGpO2p1KoQHkn3fSRiY9%2F5r6ySArtGXq1Nftzsh6ebV4BsdIf6ajs1gxlb2WEPrabBsizV54%2FHyv%2BEke9mm8GnE1lt%2BVZLaOCKfmgV0qA1hT3UDofIkUVm3RYKJAs2qsTUnPBb0GlYsaKCVgwUuBFMB8f%2F35y1hPu9s97MhV0TaDh39CQRp9xnWbKNRucU8IUb%2BRQeA7Ln6J7jbRR5KJ0uZQwLQKcwUy7nwGcjGBbKv5%2FrL3mxv2ISWyRjFsPMqvIhQEjsyXS%2B6LdPDV3T9%2FUotI3Db3C8nG3S%2FSuOp6%2BwpzM69WimwYW1hr7lVtBhddGl5saMPHp2WjCrjrprkS8b1jAwLYMRaYLqUowmcGAfE88MsqhrorgTSYjqNk6eyCU0LOx8zqLvwawqn4%2BxH0%2Bu6gvQFzzfHWjVczOPtl3egvfEag3Fc9bqcjAqp7ydhe4RhRwwVRKNZI6Q7eHls6PXtALmNY89SrmsRa5OGn25msqt%2FCN9LR1ugd4bCsDdyBjFOP2j0sofvsVkcuxPrvMGMUSnFROhBcqfXGAENlcMPxsVQo5ShcFmhVJConE0UgGGU1gwPJbUnN4QdsLMLrsj70GOqUB%2FoHxz9cTTf8SXA7YyBkWKeZCnmGLemNTlBCB%2BtXalRbPQVHRHKeZLwgrWF8yPWHWlXLwG9MrB6xbXU46Hb7X%2FqdCA6eEI1vtuXVpZ%2FY1xXb4%2FOzdrGiO%2FPoUnRoM7KpPzAZ%2Banoum0hEmCIYAm0ARbShaa5Grs1x1O505hp30B81DCEV8BXuQlJ9CUVYI5XLGFlbXv7UoWbU4VPNkgQXXaFIEpG8&X-Amz-Signature=bf635fb89f387609e8280c72bc98108ad052763cd8ad0884eba69542181b0181&X-Amz-SignedHeaders=host&x-id=GetObject)

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
