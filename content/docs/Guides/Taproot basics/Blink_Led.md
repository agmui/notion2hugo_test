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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSEUPU6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZ6OmIIofGA1LJNynzC%2FO5IMWpnGMZMGB570j9ghDI%2BAiEA53EKOArHc2xkYFNFZhn5Tvro35ZcVsoyBaxYdToBn3kqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQV9jTr6wV3t4%2BajircA%2BmKgtyKmswDshm7hwZnzkIVSLA85HP1lGHLKPV1sxhBKlk%2BYB8pcSNdCkxpsv%2BK%2Bo%2BTLIOM1pJCjI8WW9dyR6dCBMp8%2BTmQxbTOwg4qbWxxe9bBAPB6816rSXxmUjrXsFWGoCTWL5P3OOIWFoPcLNbeGrNLUdLgm6fZnwT7c5X80eSkjjZ8ZYPkdLi5f0R%2BVElBjFagpboEAdwMsNC1ulC4qwQC3sfPS37ZKWKfmWrxisHnLWJh4FCKrEthNsYI58dyxAQ0MSshVty6tcoG%2FVKzkmBq%2BTcqgbea18XkYWL4WLu9ekoKKgaONqFd5ephvwlSu1fpKX5%2B2I4f9IntBphnpWaLTs8U0RZxTXbeGLgCU%2Fw%2B75K9SsLVFGbpNco0CFpvgs%2FnbcOJUeLZoaIw9Gz6SzU0K69XV%2Fwa42rIyaWBtc8O%2B6lY%2BeDOLusMUs%2FfaDF9G40%2Byd3HHxWAzJMzmrsU2fiR0%2Bme73vwspKWeadWPu2rRZatlwjErRWEtDWDCbWFQSmg0GMTtYvd%2FB8Jzj4Oa6K%2FU8AhQqt7HC51voJjqlUl1zLdy2uLnEBxxbx9FyfWv9%2FAoQSaa7iU%2BkXf4Y9DItfsMopQpL6CPlRuv9hF0H%2BYV9PEQsBCv7TjMMqJn74GOqUB52YRG4QC2575h%2BgFKm8It7oZgU6IvgKVSx9acxyqN8oe%2BMK4566%2FxgWaWMH36bCTBiLlto52ecnFKVAdWQe70qTYStqJFaZm6SEifZEI4cto1s%2FHcI2NVzZCnACflus2uFOpWeUcFKWgWrNyie5i4EerQeBm7fXyy4cJ1FBSS5vLsp8Kfr5sY8epXE9NLMAA%2FxFdhlTgmzpzoHy%2Fdk8qaohTHQpo&X-Amz-Signature=b0e872dcdfb9c8d70c71c14c29ffaf35fb579cb1c221386f09d0b8e2c9ce737b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYZMG23%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmMxUUMgBjf2I5ZuPpIoBpYheGwQIC9gUrDdrAWHyWLQIgOXZF%2Bpbut8dfIhuySDDhs4c2XavpFYvUt0wz61H0sbkqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl1RQzX9QgbqWS6CircA53t0y95bXVjV8RBZGBkwyZ0rRh%2BU6nsVybb3KPO%2BaqOf6cC%2Ff%2FlsqUF0ZcX8GCxKThD7ewyhYPLiaTE%2B%2B2kOsV9%2B1u7BOxz4Ap6kY58wR2lOvk4UermeZAWWyfFz7x66AAa%2FYc%2BbKgGLI%2BeAFibF%2BUkN3jZYXLEE3Z6nCyzwDBP5B8v93heKnROAEGJ1r4fK10sgY508vCauBsWtr6jN9mVoMtrO6IZ0dBIRwh9z6kmESVvMtZ8HaIh4%2F8973YsTvEyIVXZdVQQs4z36KJD91oko4zAG9ixC5slXqiEfrVJtJp6U%2BN9wZS%2BARTWtjPq3%2Bzj6cZ3YdhzO%2BdUI7kYspLvAhkmt4nLO%2BkuFXQx2q8cZpI36JxnztGfQHmjfo0uPZDnI4PDy6x2sL0jFivOYhfMC8PlknbKKrtKSfCcADov8oSasiAReqMDmqrZ5S25AwHzUFkjX99rxqdNR5wozCf0PjrJSYnx4DJNdw8xSud0oX5LChKpVbR54C8OXy3YK9DsXv7X0aSB%2FMNyTiBZ4RouW%2B2%2F310U%2Flm4d3fI1hkh8WePPpe1ChTZ47cvCQlhk%2FHefE0Av3dfWfDRH9R9SBxETld%2F29P8ZZPHyIdb8vsQPu0l%2FM%2By6yksC%2FQVMMmJn74GOqUBDttnRhF724S4PJqGKozINcKmz84PcOpBw%2F9wkqvuIzh45V3gtZNxmBrRG%2FXAWNQsXCNFjqa0LH4FbhbUkcGr7QXU6niBMl3indRK11B5EIHikbOYAy%2BDNg2KKVCdjpxCWa0yeFn4WSvgCd5bWwLZShMfJ6mYjOJsrBnmU%2Fo9nQQ0szf5ZG8KYgqHrVcB1Loj%2F355QiN%2Fb44H7i1WhAzfZy2HLV4l&X-Amz-Signature=f879de4d75c3ec3d254796dfaf7f3272b50267c77ae57780a70252bf866a45cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
