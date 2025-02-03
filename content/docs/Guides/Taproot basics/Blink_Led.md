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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFAHBWF%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIGiCZnD%2BuAb%2Brac6gdQM3%2FmbWue13JD5AlFc17InDh%2BiAiEAzZw3qm3J2cv9Fz9Oi8qwb1hO4K8qnE4VAIqvdPUhoO0q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDLZXOkuFP0gdkoUUpSrcA3M0%2BGB5OI5pvXtGNL4P9p2%2BhWlh5ek0CWe9uepf4M21qeUWaetCRnlZN4t1yBIZU9xDalYM4LqYZk%2BJlEp9W7Ut7teEoUuVGDJS9NrcsN3BwbyAkB560zwgBZbfMMkaDtzUSszKWCpQQqOATxnzu%2FawXxndo%2Bg4EVIMyRnLhOpWKB0YhgMfbTWpNt%2By7C0VyPo2jOWLikvLB%2BNK8OnamxbdmKi4iJ%2BBEMiEttDyt6jSTiRndNVdpSfFyGpkt%2Btqvvuxxu4XkB%2BYa0yXxsOqfbHvC%2B6ADT7n7w9FWBf75Q2PsDlszEY%2BNHuZ3o5GFmMIWeJlGDN6gKo4BKlBxpOEADxUy9HpnKvaxqOKM7Bfnm6nqmbCUrGG6bJPOj%2BHgtpfFEclnD9%2Fx6LhBH0Fg3I29nbZbXq7VKXV%2BTVENBjFkC95jhCO7m0EOmQNI7FMmFaXcGAs7UD7NUOf%2BvmhPUfAKlOHnU82GKjB3hVk7C3PWfZqYKOu1X%2FSSta%2B5vPOldqWyexyGOH4vpUhJ52VWa328yMsE66F06L95L8M0ld%2FGy2Ol2kiG7eOkIeNERr9S8c%2BUMtW7OOjff7%2FI18s5EySTkuJhwly3FCoslaTiusL1A7cueILbxVg5lhOZrSBMLOVhb0GOqUBr25IaLP%2FhsFhDnXUlSrRKO6%2FfK5ECTpLf0pvEEMJHk3%2BCZskSAtAiS%2BrCU1UZtfbMp9DKVAPvCpdR2P1Ds4RmxLwiQJBngmpZHc61JHkP1VE%2BCAOdd8Bh2X4tQkUDWcm%2BaxCOoogG4WVTKmh5o4OunYTRI81jB4%2BwoLaq07YbvlWa7gjDIgUIVIrIDLygZDInsv584EP%2BsCfmQPRg4JdDmp0uex%2F&X-Amz-Signature=f798ff80342dc07c04fce47f28fb393e1999ff0be91827b60eafd5cce5db40a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LK6UUON%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC2JDVZgVjCeO9niI%2BAjUXUKJZqSx7jSqYh06U3dP23rwIhAIljR1bIlogiyxVtQSoQdK2vokcI7TYPDWRaZAxnyB2jKv8DCCAQABoMNjM3NDIzMTgzODA1Igz1HQxr95mH5WKYp28q3AO0PqGZJI%2B%2BAhPMFluFiLht7QBZ5QC%2BCL2oq%2FQ5jUU3stBfSFjnBc4JA9F1eJqy%2BjbuBu4JFP%2BR7G8hPQzNnVq%2BTOTUnkjOFUCGTQvhgm4SEhdwsgNxsFI3q50nUCeufbEv3Pjc2PZ51DuPzsXLGas1MC4tF6%2FDIoTDd9ZjrkZZYVNGRKkeys8hb0i3r4GNEgKxWzRgPV034%2FNJL7On1hFb3gdaX8q4I%2BKgCh%2B7hUB3kOtx%2FJUlQuz47ThcP49vBMrIVxsOXiEbm%2Blnhu%2Fx4CzsB%2FXe8bHUbOJB5Q%2FL1pUnG%2FkrqruOJSi70OD%2BQZZCpZNFcb62OoW7sWVij4RpiA7ZRCBk3C8d4NTBz4JYudAvpHWEn7mMQMMjibeE0eK9E9hst9%2FjTcPkpZB2MrVc1bC0RdYel2vBeP76ScxBXJJxdrtvQ4OjO3FiyB0QGMDtT1Cce3itVXYU6f3wqRKZl9z8DysfrTWYnPmme8MtfaGtke9Bwqb4LDGZN265ohiKVBVy%2BBEdxVmId4O4YOg2vx9ZXqXgg1yccl%2FtdK8hb8Ke%2FGpfhKktpRYJE5PNIzjDSLJBKBbf7qPUPVf2wPxQoRhZEK1G64fTXisyosghXmE9uU8a%2Bj2PsQaCONfnHTCMlYW9BjqkAZOfwfdsgd1Wcnyo81i1hGqYZuKcp7uv8Br%2Bgs1qh7D%2BwkAcbOppoqjt8RrYnvtopp%2Fo1oTD%2FKnHg8UoV%2F%2FR1ocYs5H3ekAadmZFNhKa7baJZzutaUMEycarS3h3w6L6MCbg%2B2n762JIcxuZQKhkd8i9kCXcCGScnn9JG8KS8l0zjjT3Jctm43TUJhKZVU2h47B5Uz80V8vhCRoPuVdX3nAwbNYZ&X-Amz-Signature=e989a5aa2149afa76f5d193998b063cc0b9a15e3a6aabc1945e9969cf21dc0ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
