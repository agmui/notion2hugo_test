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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CAQOQYO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8pXoHLwUSPAf6EspLCybC4FTDgswPHSfn0x0oV0cTvAiEAs8SeESZO3dbU2Xti%2FIH7gT%2BsyFLDltROvja29nVhwEMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJidHifDxNivFXO17CrcAzzKP%2FknrFGswQqIVxGroXIz5GanwUrS6zYb6KdanOSWBd9xW6LNj3b8LxjCku5122v91tj9cm3XnnfkXz29UadicrZDPyfO9V8xemFMPn5NxPId3YBlFlaVLdNDN0AI%2FXjYn%2Fur9X%2B%2BZktAdrEAoVVQLu4VMSY%2BAN0SUMlE6eoHo8G8hp3dxnLc7NCN22j8jU3Tf2Tco9dtjaLbG3U%2BdDh1zIJqv9QEJrBlL8WgAwlTaYYYwNEtt6q6dEW2RKvo%2FFhIu4%2FhNtsJRSCZK1ptfyXFKfYpxC7NutoOuGCBU3Y6Ek4APUQDXyYdAF6DkoyGjG8NYQbMr6Uy3%2BrsYy1NWbyapp0uz5lOmcfUxMAHI8FJ124g9UKF2w0jMSbf4rHRJXqAiR6wFUjayUwUei1WjcKvhAgxgLLrxOMHvswvQu4u4xBFBN6G%2BmrRg9dI4fgBDeJYDUdYkiyO5JasWOINfamoVlvFz6wZS6tkeC78Y7tcxu3WWs788ANSlNdUxiSjj2RppsS5VSWspIZkgHaoaV%2FMDlEjAUfy0ZoN0JnPutyLnDPRTHdnEDEiuKdQCcmgE3BfuFdyi8yZ6hGj4CVApiZfWhuzFYRHVoM9VjiP%2FtoXQ%2BKVo9gZiC8TkAS9MPjw078GOqUBwuuUThbUyn1RJIpIKYr0vWAU0wSiim0aw37Bw6gYJ59eYqlM2FBBL%2FQCdxvMzQCvEY4aqMHy%2BMT3eGp%2F5U4LbA1HuzDK3JhfNXm%2FKH8V4NRakKXsXTsPnPld4DyHH%2FSBHdM9RoAbkjhy33zOaYUaK%2FQveTWST1QU08rQUgqyd3vQ9Ocq5KBBdXNtWt8bFMSlN%2BGakedv%2Bdok7GnYv1bcaTqv3VYt&X-Amz-Signature=b7c509d933db411e18482e30f15612ed05784b8ea9aa97ee5366d56f82df9c67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGRAS3Y%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG010nSGzyA6F%2B25h89PHtgemY5T4lTu%2BHfoNpNTrSIyAiEAmbFW%2Bk27wknfek7TwbraUfc7Se%2BLtNv4dOnUzk69quQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPkDf8qCYkqv0%2BNqCSrcA7Wq3xdlkt6pBf455HdgzVr%2BnveFfZKdCPZT8%2BxUsjOHNXxzjfHd%2FJBPFP0zgHlMLAjE5HbYBjUgu0EDyOCzqNzFiPm15ggcKL%2FV5aPZSda4vG%2F6h%2BZCilfej%2BKWbIcSSHHAh3CyhEC521imleHKp2fQ0uxKLFqDjXslYWOQeBUJI8T%2BpUHT%2F90QBB87183RZ7j%2B2o5%2B0iZd6XJuGaP%2FbXnfxfqBVKbiN8R%2BtoXMY5C%2BLWE2vt5AJXkowseUjcuL6MdOBRgQZ365EW26zmRI5zL0fLf3FjV%2F7yJeNKwUmhj5%2F%2F7rHEWBEu%2BaSbyqT1KP2jFod67icqURfC3IeT0pRDj6ymwSRcs8u7sy3WLrcA6SlAnCVX8I8ZV2ZMGA61WqK9kXf4LhcljocLff66SXHLCZL6WKzfdmXa1RRxP9b8vkB1i4EMNmhHWC45A3rJoH1A%2FDpVQaLAl7PUBafrZ04OLbapwUW%2F%2BNBxlEOSF6QtWIVfY%2BUrGKFFSoM9co7TQ1MUyB9fOsmGmcjSWO0seOGSaHD7c1SZrEPqRssKaraeceizBwNqnJrGDvCLK5gtL%2BOPnejkZ6%2FIYaGsbpSUP%2ByS%2F5WJ0o42Aa4LBGiRfVNmO5O%2FxdfQgsKnKFrVHwMJ3x078GOqUBT6s7Mh3yQk9bpBLW5gyA%2ByWVzlHQ7yyWXO0%2BJJHNoeEjDxSqmeRoMQsYCCNdwXy0IUfSsTXsXR%2B%2B%2FfWObFVJdkJDZUfo%2FMWIcTVOG21EmOfBwjaAOH8DS7wrKq2vBvhDoA38MJbGnWUngd1SIIlyhOVGR17tzoVXn%2BbTVDvbcNkBS4ii19qpwlU4aEgypcUoRX2hVxZ2DAKf1gKJq4a220g4Mnma&X-Amz-Signature=ee4ac6d114ce63fb928cc40a26390740efc1244d9175b7cc64af9f7164988a68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
