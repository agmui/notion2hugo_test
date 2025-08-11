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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JSQHU6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSSWV%2FDmc3bE4Izaz4Ka4O0yYaxbM2mCZ7o8eSdkw2tQIgBu2NgRJ0e3fr0ZOp4RJ64WM4KLEAhLMW3Y7mIZcXGRsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeGnFJ6GnRSzyMscircA9fYtk3B3ewX9tMyL5cqdR3juU%2BzS6ssLtTRhKrYnxB1CSCj%2BK%2Bu18rMwqy%2FpEPeuQPICc4uNCNZ6UcdhLE7KdpPV3U8EVSsKdMddjM3svBI7jDhbCTKYfZVO%2B9v30XQzalgek0Hx5q1VYczbJxRpPU5dqd3qpdliuh7j5wAdBFPsPVyWm5tXHwFrYB7hH7bWFzB13zZ%2F7UBZ90wdcBnBbgr2rZxSAdD8NX63cdWS%2Fiy3EKtDsjww2TRL3QSgiztyS8tBOC7S5JD4yPcH3%2BHZdpmFFcv%2B7GEXHHjIABCQVwC%2BwH9jwY2IiXAOY2wyIJrvL0u5jDB9C0BwgiU4o%2F9mBwf56xWXBJRRULeUPto418dgnkS3ET1ZluyMRKOpOcbf%2BTBwYUY1H20EeHlCCVqybhrXZ3t1%2F3lZWXmrqZCCdE9sEVLVWVCjEkwxu53yOSE6MhO0MIv7jDfkH8GDz0nw%2FwFpy40FwrGKxr%2BC%2BwyKCQkQYDja8xjbmVmjEgoyCufvzftPiLNLpud3jH%2F5DnnfHoa%2BMiC6aJpPr3BKGI037ReqH3oglnMj6k6xiKDJYgLc0TVobQZ8Guc963fGY8MO%2BWgba%2BoOeN2s4u5axqp4X7qx73kPnuHIMiEH6PvMLPc5MQGOqUBKdCXz2K3Vo4ZlM3MriLt4P3KGoZksuxnq%2BWcl5LDZLkSIoCgNteSb%2BSIYxYrTo6WZALKCfp3bNcTrusxwjReDtNT0AVXWjA8ndxoQ3i%2FA5Soko4DnDJXp8mrlWJO%2FNF9PkRwiGuWDb5rhvco6npRtOYXeS2O87aJdT7QVdskJCEHfGF%2BujPavsE9mKnpimLINHli%2BjUAY39vJcgUCVtC5gwzsmPz&X-Amz-Signature=9a7478e96b9d9cd7684887eecfa306f44b7b4700bd5f529b59c81bf61ee067e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635JPZV3O%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnTgcnP%2B8vDyeCb5gw5PSDKAST%2FhPQ7c%2B64Y1v0a2UlAiBjzGJC20ETpMmHY74uzMjTyhB3NXAfAg6vRXF0dImyzSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcFa9ZczoM7QWnNRrKtwDbXM4vDyG4L0T3P7Z%2FTWqnZGIueZx%2BovqUyVUCmDJavS%2BwlC4c6lUYzpO9cANxsJwDzAC%2FXfPBkemQigIERe3uQeSuwbo7lgrQI5Xg3nsKW5S9ueWxWfEilsK%2F2iEKpyV1EAt4cXJX4t39dAB%2FESSfnKtGadd2TngAy0julYkj8eKbmlcLfOxTZqLgwgWriuhTjVBrFF9At5X9wuaxdeHoK67y0QB9zQ2eHU5EARLLzIQRaJ5ztSpTlJdYf5Zao9QstXLojQ%2Bm%2BoAR06sHenWJaYU5UQMPL4CtW7uYeDrzcfNg%2F3kuqTdKCBG%2BhF9ujHPYYjSXPSyWK4UJvfavW95hcHQXgps5gAccl9BCBXAJ9JEccsFubIrc6%2BjyrSIQQUKjMYfTA4CYs21rorxw%2F%2BKcR14b9mCelELGnB%2Bi3b7omDKUEmmJIcwLKm4gW%2FqXmnLsN2lI7K8TyS5ZnbvQj5WbJEshWF6uBZgGWNshx6Jq8vmwqaTR4fejf0%2FQgZBK5Dgp%2FFjjPak4uRZcTMJi6aZSlla%2F9i1PoFBhinnvtunp%2F3dhXt%2Bj0%2FKJ4OVJXC%2BY%2B3llFxOFn7lMD3jHN6W7zy40Q5JemK9vV%2FKwhAgLKsbLApq%2FVG91Akm2A0pwsww%2BNrkxAY6pgH11tbiuIt3jQp9RS%2Ftbj0BC7GbijBVhNkWpm%2FlDPwgWyqXiwFdCQoyFuj33VufXDRyPUbMugTXMe2I9Bo7RH4k2t7%2BjZBCRCbOG3VW0N3MH7M0lwsem0hg3mTNjowBRs3xfvqK%2B1X5mFQl6HNZmyna4XSD42gjVQK%2BlvfzeWNBej1A8obqUM0terocymC%2B%2BK0dmtEn49v8HWTk%2Fm2iJJuYQDxbtvG6&X-Amz-Signature=39f9f83ae66ac4b6eee7eaffe9c444e00ffa8bf4b4ab13df77ba88d9c61d8f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
