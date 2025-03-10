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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7EXGJVH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHw20It%2BqK%2BKFsPq2yLsmF7Xshw7qLqtbGNl4abruKlyAiEA2lkYhqcUyLAGByksi2JLhbSRs4q3gYQK6GNo2BeHs%2BAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD39FKkqedtHllROFCrcA3GMcOjgossRv84vS4TCW9N06IOCy2KoID9r35mkV20gerfblYL40rMLAhJlTsuITQgvZnZdG98de85xBc2qWZ2RmVTlQv%2Fy3Pz%2FH%2FU%2FFFrEoJD9Mov0a6Gfmu8tNKNHbPjOo2G3vZOzsnn0JvfvYx37LxTxt4D%2FAYCSdMSfF7NpPf3TnfZupm6c7DzBy8u7hoCyEgAGVaORfZECMYzPq6%2BV6SXw1AIjLLvkZP9HvDduOXDWe73u6kUxXpzTGbrJhLfYKTI2BpMhEpkwB%2B2aRx22ECbcUc38ccBV2geEfUaThWbyUfU3dQ%2BLPNdwBeMtf%2BTeLWgNQJ5%2B3Th2Ve8GyaXERaf84SsVU6M%2FyfLoNjzgjMsk1z1HYXgJTFc4l7XIF4Z%2Bf%2B2sm3XBlngjjTzdBeIsBb92%2FODWpfoCHIL9YteBZGboLQ6yWH5q83y7QYCR6c5bgH33olO5CMTf3Q4psDxxOpsCsWHxcIp5i0r8dresSQMyoSuUt5umyS6bb0GLk97nmeqBWOsw7rtDm1MIIanFmTU1qVSdXaAMlWgA6BpmQjQl2cv%2BgT%2BLb9CbEcKx4UghvypnwAuF%2FCuTv5PUwwyXuOL%2FtdUHDfOvLVg6rPohB775vdS9GPXcQGHoMLOLvb4GOqUBk750aGk8Tj86ATHiUsxEbdIT5%2FoL3bpOgDe5Bi3rzbxdkIGdRMo5C8PEPQnMT6t1s3BaUOqZKkOAhjhc9dwS7Au%2BOJGjUNaQpKe6YQCvXsLzJFW7u3tX8Vxd0ipAmcheJpyT9wXR6OFP73wsXZ%2FZKVQee0Cyi2BpWZ8saEMK42%2B1JU4W3w75jOMg13OIClybTj6DOwMhtjC1wLkXOGavawxjgyO2&X-Amz-Signature=9b8ba7df33de9760978cdc74b87034429bc051d2adbe56022af1b66d6d10d61f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HQWPUEF%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDHt3lCvh6qV4bsLw4o2t6dyMwJX%2B6cfu77auKnU1kQeAIgScOSZLaoA3ISXYzdSHOIQj%2BUnl4vaUtDZt3Ct%2Fc6wbYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH55VZa82LV3%2F%2FFT5yrcA2MYtVyy5KOtP8cI1BiEaEOhTRD6b6kC9plYVlQhO1YLAEu5r9a%2Fy3WD5ly%2FffZiIS4UhGdJCyZk65hZrnNmwfeKix7MqWGZH1QS8hkpzoGqRPVIrpCXdYmxE%2FwuRI%2FeGS5qmSihpEPSMvIWrPUyQuCm2oPLoQmGz7uYBHZnBh0%2FpEyaHOllz5ow3sLys0I3RwYeU7lpECpgQ6B5lCD53kPCCGfKNlk3QYtQeHiDMu5HHoO6u0akN9srVW3gKGZqhsF3TRwUHI8udUCcZmiCQT9fw9KPx2kZzXoEHiA7DTEgaYuR2VOLbupsweeaCVR5WpgKcVPM6Qn81Bcww0zt%2BZvxXTiQ%2BMVO%2FOKBDOKLhK3oNIC9z5sUHVvuVPUVOooz7oHAfDcxgdyyFmG3tGWx8CFIuefXjEgGhOcv7DL8t6Jow70Jhov%2B44TkgnkF5BTRgOVvCmbm1zi6k22nUlqbwTi%2F%2BR%2FGBpEEKVXL0s4f8T7ym8his6Oa3fdToEzGYbeN9sQozG01aWMsfB6A5l%2F%2BABTFWQ58UETAnkNIKzumhwCvmnePAA96cG%2BTHyjkvMY9WuKb9jy2VR2gH%2FWroo%2FvXYwlZzU5RMa5SsYvq8TV1%2F9fcWTQwZ1oet%2B7m4Y4MLaLvb4GOqUBX4xRwsbN9GvEbVBJI0dWC%2Fl7xF0tadI0TeM2xJhJk%2FWq1DhgVVvMV6eN2wby195EbB%2FkGkM5RSYjFlUPDM252SOl%2BjWpOD6vQw1Er6320bxhx1UYftfgcWfO%2FwyhLC%2FOl4kTWyb9dko%2F4PcA1mZ%2F%2FaqOyN1DPrgFBVaM9B81NQSUD%2BOsVHtIReX2%2FnEqbRCxnLpffLhdg8RUKGhc2Qi6tIscobPf&X-Amz-Signature=ace0cddca61c09c0bdd7a380c1dd64b3dabc7b1ba45732b0df83a467a410f87a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
