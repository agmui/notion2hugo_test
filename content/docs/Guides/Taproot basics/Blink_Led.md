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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPGTGZI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBgOdsss9gnIlqEwlt7MVMxYSOKYZvn2zRJB2dYuSijgIgLzBcCrNE0%2Ff3TlsAcxYaL%2BIcZgszM4M%2BucNuParQHRwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCFtTlG5fDl2qS9zircA5eNDvvNTbmFle%2BZ7eibTlTZBjoNWakfJlvHG%2BlXVnqwWMySzukEjGko4hjL1Zk%2BpvIE5Nd6r4Gw%2BGcK4CotFd2uik4Gt60fRv%2BOOlhaD53bZgT%2B%2F55nVDavecaWzl8WeXdTAcOCSoxNRzux3l830E1CCGYvmKhscIEEzZ2QWcKmSee0EHQze2bsxurafPPegTdlwT9HinxRMwnFMmrlHFkgqFu8kZGbvW05TOa2gmZOH0AXlrWEhuwml7wFYlwxIxdV%2F9vKLZzQJVDxlBSVqLdyE6bTATIddczh9RT1HJTsVH2oE9PXtP1mX9I3vxPeTCt8n2WJzD9u8Bi5QwimAvUU2Vd2rb5WTdq6U%2Fi5BwBiQklBvm36tmw0lt1b4iHSiT8TLNttrId8%2BZp%2FQfPpuSuLSlDdggB6jQQkaDcCX6Rc%2B1NFfugCapWTKv9TjjZkaEMyfN2ULRYbv%2Fs3ohbVT9U7Itiq0cNJkiJ%2BD%2Bu7kfmFnVbF913yfto6EXcTfjrjKiFEFeqVTi6v020ny%2BK6lSSURvT7Bqaprahy4ELUgqBVllZt8PUaCHkip9xXgvatz3NLDR0YVV2MMW%2BthTZJcTJsO32vHnL%2B3N7pV6zrLoVGMTsWXwhjyPkLShsKMK%2FP5L0GOqUBhcMxw0hIoYr4WEcpValP93M7Rkc7GmzVVp8CJ39H%2Fg5PFBHH1JXzXai1rqZcm7oojlFeiPAH2gG1dVF7N%2F2677kEmF7kQi9ho3YgXkeWzuQK%2FVu78PvIMGlnQqWgREm6umLBGXSJh%2BiWWpv3b0tDabDy8LXxt%2B8eT%2BK6Vr9AUDtcK1RP47tJ3gfYfDc73mFAFrRQihuvsWTa3YdzPuKHySaveneL&X-Amz-Signature=1e7a752f0b17b423ba91c77d8d0ce5d9078367eb0418532c5391bf8b901fff88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHSLO2X%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY5YPvqAZGF%2BNZNzh86b09qZEMPi9gdNbqcPeXnAEiyQIgQCf8Tg5lRtTiYiP6GoHQD6RtJKV%2FvwhZ2YK32xORqAoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaOrmMmNEBtlfn2%2BircAx3R1XtOBLBaP6WuF9mWqryfX98W7OIbexXMlxUvHqhmhu1Idj1AXWsbU%2FrHbgHhvYgd9dIvSSDQJSZSFZEKwU7s3NBUquvrJHINkL0QRJwWnFPAKsc7SeV4Y9bI3BtG5zfJRiGarqO6YtfGq2rjmbpMMI1SdnZkJ1vdeuZyaQQBkvWKdYKUP9C4zXnUKw0ums1jCa2dFhL%2FgwMCl1xhKpZ9bLYmFGaU%2FGAmbGUKTvRC78jljy81nbX9uDhzMIMaU2mWN7mvxFQ5ZuIhMlDYFtUfAynWnIg2vDTLw1Dz1RMktK7vfgPH3VIkJqtBexvaMykQIqQH768d9%2BYMWS4fl0usdNc5tl%2BUzFTsct2ZE3s7EKIVujjUrFiORdJEy76HEQdoeWSS%2F3KwNyf9LGfh%2BhIJp3LEYMVkMEXT25IrdSQ17%2FgpvV9NDIX663mtpo4iZYOyWx9JHx1FHe5cqaHhuyiWSrxNnU%2BE1eBxdEv3UFJcr70%2BezuOOZwJmQca6kPO9CS4HyYlo7OyniyI7KVsVSJHSMyP6zKxE7p86Lzd7OnQr9PHIqUjCxEHJDMtWVU2%2FLaMMg0B3MHTUkm0rDdWi5N9U7ySCZubLR4bUYMlML6be8DU%2BzBs4fCbZzBtMNrO5L0GOqUBnVC55BkflnvCdVGilKJ4sK3mdUpH%2BxpQufCkMxVDVIBvPvr%2BAZ0CyvuMNG%2FnG%2BFfzQ3jIT%2BqDbkes6ZV7QvZcIi%2F5%2B%2FXRKY%2FHjTsa0usiffOJdj%2BStllVKiqufX19AXfSqE4bIhP9a872tfRNDpvJi%2BxUuwem6LqVO0eNkww71JwM%2F0j%2B30ZcDzUaOm1QA7BUK5HyEo2t0pYdSm2W3xCAyDDn7as&X-Amz-Signature=b77488d98c5cd0d5be75d2ebb051d97fef7429397e702a5eb88fd651439f4eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
