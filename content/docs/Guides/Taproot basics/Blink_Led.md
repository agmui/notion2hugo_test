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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZXSKW2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIASz54zePC%2F17IRqymxmquD96CdY8dv3Qsoq%2BqTsJL0FAiEA276zKl7%2FkScSHI5kcBZxkPz2sv9dOlxfQJrsFfEB4sAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvxZ2ew5Kvlrbv6kyrcAyIekhKqYTVgS%2Bt4f%2BOwv2gVKVr5wU5s8TNSv22c205FadLIunEpBUyjnlEozcXIyBv6mCbojhWpGH5zsuWjqDwtEXAMHGhaBIBOmUq%2BR7do2qytKFYXtEruuMYpkT5%2BHgbR5vRJRZVk5XpcDW3EYAvgEMruaubg6lYsKuw0x2M%2FwD5BtRp7MnNuCsHLeq0%2BzdCgFxDN27%2BtIOthtWtLgMW0PHtbTNIWrtUZJ6tOENSL8ZGvVKaONZyh2Zl4VQF2YhTkg0kxUnsUrE60TjrFt%2Femg%2FQyXZoVT96sCdXrH1kbvHlimooufOhbsm7wOB75p4gBDnKNdhDz8jjuhZMOy%2FccDiotIOGiWNGmwPy%2FmZR6dR3yv64YyazixQ3eFPXXC1dQWSpBNt3Vcq%2B%2Bj0IBW6gvJLQBwplY2Qsw1l0bKi%2Bo5%2BkDXfDN%2FbgGZ4BG%2BYWds%2FRO6WPF8ueAnH6fhXBPi6bq3pEkHLGou7Rv%2FGbqh716fZKJkHJ%2FU2eCsRlWnt%2FO4pURZ23AM2Rdmpsu95eEuhyTGiildA708ugDbBVhQRPqOSmNttCRXqpIkB3e0CKe07xJAa1T2%2F%2FAE0sJzUtBQseNhzpixGSWy3OPlomDUGJHgdUBfpesc%2BNV9sLNMP2joMAGOqUB8HI7%2BU7tlcINx%2FAkHKbOIw9lC6hnND1p9Lt%2BrJ%2F%2Bs3eEpbSy9Jd4iiH8Lp%2BjGmrWCm2Ftj%2Ff0GLGR8RNdctDXqrdwMhIIfz0C6fJUZdXX%2Fav49vVhf9m39G21whxz9Xf9fpz6EzIWGjux32bv7C3uhPok0ffETCN8CGxGWj0NCWp3UfaAlXngaVZh1JKKU%2Bc3UeeyCwxb4kFVW3E8N7SZxFLb0fD&X-Amz-Signature=6196957237d148bef4a72e33b4c03886cc9f851b793ad9f4016ffeda04b9af85&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBD65M2S%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIH7FiGGNzH8DVjwNHCVt4medOM408WkcsbcyjMhSqU9MAiEA5wgLUI2bm7fvM3l3bDpn%2Bg59dVwy5eoSENVj9Xb8r0YqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOx4L1Rve828PqTjircA55udmVeMOGBq4%2FrsoUXyiIlfUBGa9CfUGfVna65GTvu83CCHPjJPCOfP%2FvqVY8ZkVH2V6GqxH8KMSbhv39qOqpK4JRvkD1YXG%2FSiJcJvp25iFWKEMQuZ0eAReFQW9juLcGV2nTzwMCR%2BYKfUEDXMqxHPQw0oQQYTrcfPE110dwdDkmijQ%2BTJo1YCLELm%2FFv8Pm%2BgYOrJj97ZKot7PbvgGvx8FiJp4IhhzDJHKHmfi2mErzrCUFzCYI4OqRZzopWSC0z6N0620JB%2Bl2DsoQ6YqMQe9tTf39DFhVELbuk2qveYwNNqQU8ZC1n0xct8ByJ0rYTKqVzxKdBTM%2BCQkbdBV0aF4pPITPuuma9dqgw7gGcflG7Mp1EUjn4ZW68smv8IPiCA9tozNZHmv1%2BC7A0i%2BXAfieP0fJE7vjbdckYx4QZYWr8dU6aTmrwBA0oCsiO8O%2B1kUdhhxxfDOHgchuosDEDVrMV2SpqljeB2bmlDxTN1%2B7OfvbGAHdV3feqa9gmB4SI%2FkFStSR0Ei97C8OhG3rEwvsoGWIePyLzdg9cRPBgmuI6fGl72%2FG6ZFaBBmIPy01WPecxe3ZRvmHw3mFPVom5dker1CF18q4Dv69iu%2FGP8mkcj0v%2B5J2Ng4C%2BMJykoMAGOqUBbIQotOdtPDqvqrrqVvu7Y2OJ9rBu1jCjLDPDL1c%2BMV%2BHJScGWy%2BFZ6UoFq4iSCEQ7%2BhOUne53x16JaxCGqM%2BFzo6YhRQT%2FsX6CF9%2Bnvitv1o3lKdeE6QTaokBTYVoNvwpZLmmGEzlzMMac7TF%2F2d04lqKzsH52IZ2W6Wq22sJm0OdYSQ5ev2AyikKRMBBX1Bu2AhDampbOZQJ0Mihlu5wb8n5Q8i&X-Amz-Signature=3b00ef13a381e236ead0c961cbccf7f66a956031d6baa3360bd9496c5cf62d91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
