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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCPEV2II%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD7%2FUcJyhpXQwbrDHfvNxXaQd8s7mrKkO8ye%2BKXCAk99gIgGWljV1ZXr%2FDbcaKCf6OHXOJcsldHrnzhAMZQzhDM9FUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTBLw6fimxpi%2BxApSrcA6YYoyUzVd1iZrhc51gWrH1ULT6c7rRvoAAEiIMyvwMLRWhQB6ojKhBIIh0RhA0%2FlPnuzj1fwzk6ooxGM4InqMJ7HMsK9gW0Myfyjxu4CavMuqls5oy4TDPrdAqlODdtoB9qFghPYZiVseZe6RTMqqPo7kS9cnl8zXfBZopjllUZwym%2BtH1r11e1isS5lqMD7FuJiL8zcM1mdXl3FidOU240ZCpB%2FKkVp2UB0r%2Fa%2B4WYreOuJHdkI0UsLa%2FsdQtb2BS8bR0vHcAWpstLFc9YiZyHyjXnQWcKF0D%2BXsYZ6KSM4ruNg5IdO1rwO6VonBJ2dJGKnjmkUNSfhhpnP1U74kCxTFBRCM2kJUhuwipzpCLO64xlPNjVdvLwJaj1n%2BHe7HxEG9I2YjNYpRLaMwKKjl9LxGy6qN7Sq1VMD9akCbSk9pDEMuD5WkGlnQuMBJ%2BDAMGYAUdvpJGh6oOgrHrVAGMzQdItDF9%2FbbtHcWJId33pe0hOgaAeIKneRfIeS9u3Qu20nPZ%2Fpl7cu87Ac4UR%2Foli2nSdT34NNxDts%2FOt0dTQ1Ra3uxddy2yCkqlPkdCOBhR2Yr79xBQngARQLUBTxlof3VF%2F0BAv8PHWjL5PKJyD%2BxVRVGLC00eb2oZlMImH1sAGOqUBoZKZeq1%2Fm6sjJ21NabhQQKqre5rG55g0cuXn13epRIHxZAX%2FnIT5QCfQ2Kzby2%2Fw8kplxmpMO51StsOV3WmBSNLG8CMsmofrJX1dYs6t%2F%2Fo9w6A4%2FRhsfebL9q2j6FCOeZ99HVP8qDLegf0y6CchKOsyoF%2FLSZpC6K%2FDXbKJ1SA8voalLYyiOKtpFM6bs7OW8xhmpBPMdq%2BM9ilt5F6EqEFSO58w&X-Amz-Signature=c3db7e53c4a064bce3c0603952505a88271bb78073fb49e4b5a4d3cd0f4502c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRLMT6D%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD%2BuemO6aO9disNZOctqs0Y8iESx2P1cBl3u4w%2FhpUbwQIgeSmoJLFSL17BWloWey2Mb6btAJ4dcAvdR32%2BsHd7BmAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxFn%2BXLK85%2BWGzbdSrcAzPdP%2F9NmnGA6%2FKRJGqw%2Fpkuu71kA0E2xLhILqeYABO9v1lr1SOQfbUzuv8Hc1WkdBmaJewdw1Wfn3uuEYEmR91SSVXI1JHfntM93bebVq%2FFXZVO9WBcrrXCwSqXjHe9LnlNtogw4jQgJeHcr3IazyxdZ%2FwL5SOl1KzBe2HsZuEjzXhvRBovIJpq5ADp0pYIaqzsAmj4MryLz3ooBQIzSsElwrclHvIgWXg41KpnlstesC1tWkIOxVXIq8cgDJNiBTJrmjC9SXQrCfb7Z2yZvHJq6FgVXE%2F%2FUSTzhFqqdpYx%2FoJ6XPkrVGqOVWkJh1B6NOeZ0fq9i9iDHc43zsCoA%2FdD0JTaL%2FCBzfS%2FdOFXun3KkJ%2FbCoLp61mc1MwUiDeJ80cPbUypmZIRFJ7c0KOOGurVj60XmoVcbv8WaAiiG%2FuU%2FD%2FDOvQVnJyabU%2FZHoZ8boRrUNWSKpsImAvSbVykcmhuPpr65NhRzPwDcx1zpGLlkKS7Lw14Hbejcc0ZzIdku2K50biCtNebXBJwHUqTboUQVfgFO29ZfB8wQyyY7w2X4IVMplQByUuOgbiPvih%2FJWsX39Bz2fvKDiKolYx%2Bbngn3IVh2uJgGV%2FHsseY4pga8XqPF1IVhOXYbT7%2BMOmG1sAGOqUBkAMvsZg3zgozhg4knlsgMLRClDYaaAFLV2isRdYk7jzHsqNyxUj8ZowFCg7Tk3EGxEak9SehxhLSy%2BAvPyO31RF88PT5oZjEiJkdgjGlx%2F7BlSn%2Fp7lhruKWc%2FuHY2xA%2Fi5CBDdtvy%2BLUmeKYSFO86VeAcojRDMBen%2F%2F9tcfly0uo8j7Wfsjnk7yNJhuFcZnWO24PN%2BXgoVp4ZNH5gO5Rl21HDD0&X-Amz-Signature=f8dc5d373751f97d5996ceadb58fdb89b45017367c4d79580d979044c82ca6c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
