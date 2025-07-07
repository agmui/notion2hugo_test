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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WZMRQTQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICyx7UU52s6piWF3P7V%2FPupPPnGA27lQ1VVDKrjQrzdhAiEAwB5Nwf%2FLc5iGhM41GXLaDoqAGQPbQTdkiOJfjvqetWUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDH8Blev3wwveYm1GyCrcAy6J8hupErtx8mS4nWiFro4Ihd1RMpq5AC0VcnSW5bczc9gTACFmh0eEbrSYIv%2BG4MbepVfbakrNNsl4k7r58CFcoBDEkbh1HmOnkcRGfzMZysxJRg1Ag7i0bYtzLA9JS5kfcn52B%2BZZ8rukitPURmGpiXxDHVVn7%2FK0ugi3olBDyr8EOPuNgHNcq7LTW5UPpzEWVjAQTuyOhMeXNFLqQMjEMIGyJlMlQAhZ44S%2FxGj3XknYkDy17tXKLZVuQP3hko1%2BTj2MK1vanUdgLafZtKVnX7hRQ8Nrrp7w0sH%2BQWLd%2BvrvmTIE5yx595nOjTjKdvvO0hO7uJbRKE1myBuGLMy4NDBRRpVeAyynNwQNMxjlfL5uuv%2Bxfc3is1R%2BiYYlt2fGzqpjcp%2FiMz4ofhwb%2FEz0oomN9Iu%2BxNarv%2FY24Wfn%2FFAqi24lojroKdJ9Uv%2FRgAZvYI9HuvorHYzsRmLRFmToU0W%2BPb7IrpNkQfhwNgvkuEudhloaEi%2BRNswqeJ9DU%2BcyxuoH7BidaUF0P49OpBtL25zSQZVW55u%2FBkejbTKggEOjqhljR4ndY%2BbO%2FwGGJZWhdqly6oVYY5VRcTVQ%2BnjfAlBzC%2BJeXuICajHkShicgb0O9FWYnNFPmvH7MN%2B4r8MGOqUBi8wM6Gwh3F3ZqIPSaCBiLc9rmSXnSt9tWAuCN4E0%2FAPfi4S8wFHV3MRZzpr3%2FWeZFvjym1E7JtQXcHuEN9zWzhDXa88FBm7sI8lkwlQZClFU4ftqtX6WxIcimqlryEl0BFebku%2B7AZdx83%2Bmjc7S1xylgW2eZ2Sv1%2FFInZ4MjK19kL4hQ41hpCBW4UugtclkUTV6dnDid%2Ba6KN0HgBpIzOdBTlXT&X-Amz-Signature=04963c9782563255b46f61b39cf035f10835cacf16e9a99d1e6b91328b07c16d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG2TINQE%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFNI%2BEXlIuawXA9sMQ9FW3UB4QqzVgUUabq6OWoJgJ6RAiEA4XWYQYIU58dUDpKItN6X2P39GjSuOvqIK1YqARTYoPkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLBpQZn8U6ficwcq%2BCrcAyXhHddAUabpuKsdwZzRNv3MhmWMt%2Fbah5vMVgvJIn1Ob6yCbh5YMMsFRnFD4DtY%2BNP07Rzo7c105HhyW07jxg6bhgOg45yuA4dD28%2FNEf7IUN5BLG9ktd4taaC7NJrVL6eEHcIJGQGsQGpQsLv6XyTYvRAuVWB4Uz0OiFU0Idq4lXupaVtArVLm49P0dqTUoCkdTgvAS13da%2Fwhs9jJxoDE3s784fak6NE5lDhT%2B20UKeyXbPqaXCf0GYeM%2BQ0Cajr2pF219UB20Fu7PIyY1K3Bi%2BS2Re%2FCOdjIQt6j3oy5XDBAlRorBPd6iif3VF4t9ppbOISk3k8%2FbYZVJ3gNsTk6L0U86f7824%2FSVvkcMv9fYQ5O8D6NzmP%2FUSxv4r3FjahjoXosOIo8T%2FB5KrQDsB7VhQbEP9l15cqXhQfrbwXo0ck2vL0q16ogKA1yoKwZsL23N6GakiYSgJh%2Ffp6QVB%2BmaIVPimrPcqzE9g%2BRNX1wMRTrqPodh%2FcxTz2qNMV1PtF5RURL08s5LZ3RMJwDtIoNnE%2B5I141zAm8Dd1CPYak8ITe79MYbu3LShbc%2BFusW24OWH1XLfUg6Ik09hwilhSG1ep6cEZnR2jhbHiLxw8vZFvJKmzDS04x1LhKMOK4r8MGOqUBkJpJ4eg16gSP128AwTjY8U4jDGi824YuvUfsN6UtQzvfCggh9cSO7y0Egf6zS7MSqk99UJDMAwF0gc8Sji1wE6D%2FVPtJFBFgLDGYMiO6tHdL1XnjG7fCSPPie2NzXfEydyQEviK2px7dmPyaxrb4ic2meTeSPCQKyaN3E8ppTrRsCp%2B5eWWw2fLBZUuTJboy56hGmsj7yzNEqlObfLsPSFBR1%2Bsk&X-Amz-Signature=95c6d29dbdc9e19b6fc251aeefe060a0664621c6715106ad3801dc44f85e010b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
