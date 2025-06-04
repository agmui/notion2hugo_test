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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSBGV3K%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDwGSyQ1vLNshLMy9xy%2FewNetXmos8jbzQD5nrLwznRYAiEAiTkrYgQaXcU6GMZjeUuDkp9QMlEMCX5x4oeHil7ELFMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH7DBa8HPWrR8nTi5SrcAybm01aNGOc%2FMcVL24lDpbsWggmhlWUuGU2kLZogVNiEl5KxwhV%2BCj4EUpr10F%2Fy%2FBnrT9Hy%2FfWkc1nahkw6HrZ7MAGyRIrzs2xP%2FWDf33nowq47fx5d8R%2FWFgz%2F6Uyj82B5R1KHPicFz4IRPzIYQzzqSwzGuFMYjfBysouKHL9euPUHN3FL7KhheZ0GYvcSqZu7Fyl%2FQReGxWtaJ49uAqHDPFxLDtbTqm21V%2B%2BBxuPURwzrqfQQ6C2aIZ0hsXF2xB28q2VJgbtDl2NSFvjJag%2BDsi868AWtLIqw636%2BVBxYFnNRPhtHzEsNzlV%2FXpnkbP3y3DJDpqMSl6CwGImYWNeIcOYpZ9pj1bmsBhXce0KM%2BIUhqFOBtK0C7w1JkeGXZ3hgu1dQhp3u%2BygkEI2iYVB4Ee5Cm0ajZTz%2F%2FpF%2FiLaGiNopkT7JPv%2BMtIYfd5ue3FP4bUpXuibm6FqnLprZNpMitbBLLScj2N7szs2S6IGowW9FksvOUYHidh6HkB%2Bx304Q3ylygbuI0zIFes7abQCHDUw7npQLkgZwkWe%2FLv087vxqEvtOBZ3gNp6vp8fELSykNmHxTS7ZBPiqGySPWVuvgKF7eFGXxlnJCB4ULyi2U2%2BgR3xF8Cebry4eMPWtgsIGOqUBmCmJvwKk8CPboXAU4Hr6gMlpsXEw1X1dfN%2BguIRMl2C0Udrjf4olbLjS77OI9LmVDcgsoKvQ75o%2BQrXXheulQ5ic1R7SqLjc1Q9%2Fkr%2BZEHvfUDzazbhm%2B6HDRNicR8y3ROOjTHOIvCtHti9XK8aRO6MMamygGeVK%2FObtn1BVubKZkXL77hNoWLar6kK%2FJ8yCufXKqCER5O2qm9KQ9gKjWKjYC6Ti&X-Amz-Signature=a6f0b43890d369cb7856ea7e8fc206289ebd9e6496eadf1805cf7011de56c836&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IZCUBKN%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCHlI8AX3LAhlewJvMyiU9mDeuMW1Vudywj6ZRAg98d5AIgDscr1UWedwSMhbxUhqqmTg5gjqCZaL2skFYL1FxRjzMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNn%2FKoBGxqKEy8fIdSrcAyVMw8GQj385ZZj%2BQR5bFjMIV%2Btchg8Op%2BQETEwlYG9GWjOrydqRecFtzeK0Z9YCICeYeyTy1K%2FiMcCqF15CtpRMzssBcRHEYyY8YLv8WlwrC8FD8HFbzR2LacnJfVlzJXCtNnhz4qNRUm4Nqm9udocvNCOhmKX4TYg%2F2FMXHzvygnuIr%2BbWwVp2m6Y2vZR%2Fo7Ubn2S%2FcRrcGMe%2FMYJHgOofATbs6vzAv2M84fiodwC7%2FIGCBvgBweXwKjWlZWusTPjMhhbLTAA%2BVb%2FGabSbXelYwKa28Q47I7ePgIcZIArePIUgYgUBaLcnbmkyXPBwyH6xPjb2Zrfyba39wE4Xcles5md9%2F4UDGtir1AcuU3%2BYBvfPNX8jHVdj%2BOzklUSvbJvUFxo7OrzXzQjW70v%2F9TUEMaRSKzUJKD5yQSm8Q0TfA4pXmqU5%2FyVzQuSCFhXZMm2GYxnid8rqNZSvrWJN0WUuzweXWDuqVHOsYeanTvLHbd2u%2FM7AU65VwoeWokwHWhzRCxRH%2BTI7egpFwqFIQDC6OpOJUuQU8o460C6nDD1wzYzUKrxExKXPOALZ0nRbjLYgAPMCgUBOJfhW%2BvigsenVWefmNT4SY63xJEhudsX10s8rJWrkQ6w%2F%2BnqbMNqtgsIGOqUB8qXkpvzx%2B07gIZfQTCi0t51PCq3CKrvVJoTITMq%2FlD6pC4haSGI5yezLMUHDeicRdLFtWuWvcxQGG7k%2FeSFbVFTHIIr3fdwqw0CxAGRWfoKn%2FIkhsJ%2FFDx%2B%2FzUwW5OHtBK805mlESamzLhEktRjgbWdAtThrb%2F9hCJnPYm4bVVX0%2Focgf3MfgTauPZiNx%2BLU8M5VrgC3JIoNM2oxQynYCdCMmwmp&X-Amz-Signature=b8db589ae58b46fbc7a22676f2b4c42f2435dce980c33831d961a58b2182f4b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
