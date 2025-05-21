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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W37NE3I%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrCj9H4%2FvFDdQ03yqJxnuB7yv%2BFnYRMdN3MJos44ESPQIgU63Tp3GQ9sPFQar4Aq25z8O2otE7tLWK3x%2BnwVCdB1cqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPb4x7x%2B2RE0n73yKCrcAw8epxprkmlhyB6zB2BRLadDCKcZbfvppFPxaCubgeIQsB2lwtradV%2FbHB6ADCRrHnURK8LxTWrhpiGdTVqImYQfL9lFOfRJCGqc%2Bjb%2BPaOJoEvM5twxS6nudvH5tkxcEPals6jxIUrkgpo8CWxXhyiHFounuf6UYnkBP6nMs8PXw5Ij5v5T4W2XnguFTsZD%2B7to39dsTI53CCsxU5L7kMx9XOSp8RLm9H8r8GYoxHvZmE4SfKE%2FwArzxqM%2FawqVSWU4W9rSA30p3caYK%2F%2FR%2FSCxWp0L82x0ZTh%2FDOjsYEiFSS5bOCt705lXN3DsjD6t%2FGl80SRXK%2FX%2FkDlttFcF2K0R4bEfAaq%2F%2FGDXiE950erZI6OT%2B98m4UvThIgbWFErAItdF8wWuDtSSt3w%2BD6OVNm9HvmFp3OAB%2FM9GY5KRbvRbqsClasVlzKxllK%2FyS6iSaiB%2BiP2oQgDmA8j0WkUhFnrW6YEyqi7Kp1yBToPKDYUQinhb960g708oORhX9VpOy%2FaEElQeDlv1CSphqb6Zvw2B0wsbcxTG131xJ0ZJOzc8Cr19EETdk0%2Bn6thSTHTpCqv8rg%2FdSF6IoAPQVmScrvm5yjwllaHeSqRxgjTbgE8WFmqPZQ6IMwvtrFMMIqvtcEGOqUBsoXXauc8J99Rulu09SZu69OqkR%2FJPjJrpoKAbFSZUw2X56Sshc%2Fi4W9EEpxUZS9%2Bxl00T9jr9HRwJhEDf8jaffIlWqU2nmRk%2BTypNUlqSkQeJoV0a4%2F6aSo8JPWq2cypOozHskNEyEdodC%2Boe6k3zoXq9j2jYJG48MY8HpjYvtxAJpNVW1SF4rxYhxO7X8EmfXGFsu6vEwLmPitnOxY4dG%2BRkkvE&X-Amz-Signature=6587e2cdb58dbb51ae50e9d6a1ace1a12f9a79f438df7fe7bf35588666a949be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7NEUVKN%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDteHZYLaioXbxMYOYpWfow9Ma%2FrFO%2BriTx1bwUirBeIQIhAKzYZ7yANmwxfcZXOUfbZFIMqpL%2FAIBLuAH9SPFmvQPnKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXa%2FQUNN0ucMZuirEq3ANjXX6hP27z1%2FUDXUhm3lAzjiFhl7FPmBkdWgPfpiFegqPMPqJGVw0Rx99JPIwe6uV%2Fsw3K8p0NTAlUQScxmdmHLSjh6uqS8A1Pdp7Ofx9v8JsXkkyVclGnFNbmWwVk5iE1QpXxLV6IkPlnVav03hXrkKH1pTb34lvHlHpI5ydQwcZBOJVkGqHKn7z4q9sGF33CjFbUy%2FjGxOJJ3AVTrmlsK0u6%2BUL5z2Zr4xbOqDiOZW1Cy13wLeveew87AdvEg3HcZLdEF4lEv6GzSl5A5KJ8uyetcqnMhi4H9V4g2qBQ72USI72d9K7p0i0I3t%2BzyypuLzDtOB771sGNeKTij0r5tl361Pm7%2FIMEyda4o0l8BuV3np0RhJ3zXsu15koDzXN8JfCdFD%2F5vFg4R9GdGdm9I%2Fa4Z35pJrUlKmr7p6puWUSmslu6MwwXOqHi3dA7VXj0m2QiOFAphcYlCc9xjoRHg2D5oh6PfdhI6vhRp7It1G7y3oz%2B%2BmjN%2FcyFmJULnCR6WvHVmEB4DrLryW52vafgz5LW59xOtUK06V028iw%2FTLBMe8ovsbWF9a2j3LsPKwGgf%2Fk4vuncksAtLBuqqCTOjtg%2F3T6Di7y87WvKn6vGTBiyUN%2BmpSNM49ue2DCbr7XBBjqkAfVfd3ATEPgRB5qvCaSYFLeBMYaruvxwbafiVLAlEBiNFDQGLmk7jnDdivMoGlYo38e0oCvYr%2F0D9Tx71kCvhE9as9xyx911t5QlTtyH4lJEmb84aoUv%2F6S%2FQ%2BbF7%2BZJ5vScpz3WvFnxbyvRTKiljJ%2F3u7%2Bil62Ms0HKhGrt062mgePaTNEm8hJZgje5qewF%2B1MI88Cxg%2BjCb2saQxpq1xbDwOGd&X-Amz-Signature=7a77437a3f48b4b4238bf04b495dbe092d2c100abd8d3338c8d3b01bd90a57af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
