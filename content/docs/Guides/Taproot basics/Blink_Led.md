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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YMVVWK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T180949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGynv2auHqOwTos%2Btn0pF8v2U2XECS6cUUpI5Y%2BSF1nAiEA3U8SkpR2UG7EzwkFjqHkejR8hVqmIA1JGGUQy1XZtpEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLawWHtXXwSbN4hJhCrcA48rVSzT59jXT4kooj%2BCZglj7gMFCfNxUHHkMasveHh22NX2FMDTkKNnjJOWA2ouvUkSHL2cdgAsqpSVSFh6fUJewdwECV64PhjLTaxZ3Abcb7bTNu8xUuYoth7wglUc%2Bzq6xmR7j3xjHn5Nlj3gUWkUSt0vBvdB%2BfkpRagt5wCLkhL70e08xCFPMts60ivBdKdmVTwunHFV0ndWIfy6iLmXoQVreQAHtVftrQQBSQ%2B%2FVA0hRbMnOtXeu8eTyn23NYHNFWJO1QURb9I64R32xiUZMTSpEo2nUZq4dHh29wxmw8nMPtlsz6Vgga3rwH1Ay%2FWwt0u3rFsaxUIsWZ4GB%2BOUlFYxAZtziHiwcnZd6zeqqgZlq6j55%2BZxb%2Fk%2FZMyG8NGNMez5aW8HsaT6UlERlEiN0FpAQB5LvAJMWWwsON6W1GZIoeBLu2zTwftLZyA8GUaO5x%2FR1Q%2BhirXAvScUJsVmVohfe%2FwGJcS9D2m%2FeHRlIv2cFrMl2P4ZPEGAMW2kDWEw%2F93GQJm3UD7Zji8dc9ARqkZhfrfcNVgKLj4M529feB3qAM7uMALrcgPQ%2BvSZfscHwhFojy4Y10d4%2BOa2liVle7Sr3NFmkd55fJ3y4QarVBzIvIJZtzxFrnd%2BMP%2BxucAGOqUBxO8Lo8sMPyjt1wKzCKZW18Yzwc0r6HiPbLa0bfw1Jd86iHmuATbH2HBZADiMkH0It%2Bl5i1H7ifo6Z64s80CfwHZ2RYKnzNyyOjOtNYxTFV%2FFkBm76ExJvrVWvJCLqSTewoEsODjQ1k582IBlRqZUCB9MvtFBE0CyzGvA%2B9gf4E4KJdZbKQ9%2FHPeYk%2FGoGMnEG9ycJMk6FqO2DFhiXT%2BMEv8PLZq4&X-Amz-Signature=052e1cd7c28309a740abe40f1e54c3456862d9fd9ee774346218f8d284f69e31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCSA24JF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNxec4rVioY8zculXFKdbXBCOVQHvrHqjbaU2RqkP%2F%2BAIgfI9V%2Bk5coXc%2BN6s%2BcSgVys9JJMMeeDQ4YQVZHAbal4Iq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDB9KmxX51cuygFHqbircA6fB52EMpK8jS1D5eP%2B06XJ8B%2B8P%2BMQymJXx0FPdE8RBLXDYVyImEb8jl726wJu8FH6LaX7R7WqJmOo%2BtWkeand%2BlyQmI4WQLyVImL8R1WQbMeJ%2Fhgaq8hlT%2FBpkTuws3frPs4hOoPlAeHAIW0NmjESGksLyY6AMGu60mhAp5f6R%2FFwCzPFHaGDe6xGEf%2BJyhYe7IzYjbYW%2BEJEmJDfZ7RNmh1AZewOvH6Zaz%2FxG%2B6kTMLsDQIIaIiiYUoRWoudXhhVl5325F7HoqDbOwY%2BiRCNhkgF3lFqw70I%2Fr02V7LFUWXvVEwjUGlNILyuM60%2FG4dDPswg12Wubo2AfiLCw60L95%2FDLO%2BYZ7NexjwDtuOsvII%2FHgtAkypToi0zDXk%2B%2B%2BryOUpYky48396TEkS16ON0Nsvm7IYceYGM8tV2pvo8VV76MRSZSTbXe8akv76uEN2N7s4rjrdCyCJoTAZ9lfc9BWbnLrOs4qH6W8RrWKZKnLCS0BQRt5%2FjgqeENA5%2F8NJcl68Y8VZBdPWvdTbOxkm54R3El1691eDNWahFlKZlwOnwo014RQtZniuDWMyzGjgfe2ObLuR9w7xMlZ0M9GOmW2C82wh7UxmR2BOmuWk5PX2iOOnwmLQbEGCdtMPWwucAGOqUBKE7b4JjXlABj4YUOoAk2eWhQ5MHdQ0fkhAFdOHvkcVwk73nwxrpCoFJwqXo%2FbHcjPG5rCHn4N%2BDV%2F6C5SJRwhjXl535WMdGDzNqiEi9anziqs5tZc3Wj1F7oMrRzzpDosaXpiHMxu9q5RX4uzHPsHXIerPLuB7zMnEYbfXXs95WY4dfmOdSyZpnX0N7J5jKblCCwzH5i%2Fe28Que4pwn1djV%2FQMxi&X-Amz-Signature=336d4fd3fdcf51d94a634dfb4919533f10dd6ac07a378afc956ee08f52f095e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
