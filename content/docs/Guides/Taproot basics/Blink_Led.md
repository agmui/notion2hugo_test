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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTBYOQCG%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDr3SUQv6oHSk5cYVqJAOjYH82yR%2BCPzCYMtkN7xMVE6gIge%2FrfZXKwSAsYMGOo1qBdzMkG2P5rQ5W4Anw1Q8rEXvgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDD3YH0YIGZteYf5TwircA84Qr78%2Fk7CVPooV8ot1P3mfRtRLE4Zc4UtmbSBHFnWWS5FDs%2BOkz6B524AQBJ3v1IH5FDmg7sedaegNqnnJ4%2BHaq7a6qSt2AaTj2YEgUxNdcQkMJiuFIc%2Fsdzl00yw1qS%2BBqww4AFyDPsf%2BRNmw6ZAuPlAhEEKLRL6k85FYKcLsS%2Bqy%2FU%2FIlP3krEMPjaULFvsVxpkkWnt8x2h6cdFYxlhfnvMMU6zOvFoj5WBGDHN4bm55W%2BTik80rEksBxc1cS%2FimHsE%2BCCqAc9mLDSlXdr2GWUrQfJOK%2FfMnWK5Yb0W9Ead%2BeTs46lnu%2Fkt7jjQGHNmV%2BspMM4L1tzPnNnSXx3KlJrWbbbZHgCxx1BLgXn5a2hN74VHwtuTgWFBu8jM98ShxU30b2RXf1aKPPSe6WB9DXdEwaA22CqtWO5gjw8SKjhqsa9DZ1VM5UdXc8UcinnXUPhhq6%2BbpFhWl%2BCOv%2B%2FWd0NM9Td45%2F0C5df%2FFNlWCNvaSrR3J65GstcrOoLcbc0pdc0EHY8YRQSTCt6gVXvjDhBBA6Eu4u43sVmYZUSDpNRu2g%2FF4OPoub8levIap4ZX07u%2BWzsbK2AUEgw%2FWeioZWANf3Nrat9qIJegKN7u8xcamgHTGBOwKrgAHMPTQj8QGOqUB2Whkb2hE8U9ezf6NtIYK1TEVT8yx080z3RYltJCJht8KBX4JaMLepLCAyVgi%2B7CBx3g4ob4L1nM1naqEFzgHJjkBjCO3BSF%2FMx3wp1A%2BRWT7mRe9jMWzgl7dX31R0Fnw7ErRD2kSVQXx1k7NTBQeAsx8pey3JRlEvt1WaOamHi3U6hu0ybVNNQirSTHmz5%2Bwt9QQYen3AC4VDLYzzCNdRorkzett&X-Amz-Signature=2a1b7d0a15733252f55e21fed3e929f0679b0a57e014b4798aa2ab54f5f8ea8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673TJWWLE%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQClimNNNrICa6kvF4STEHkoA6vnwT2ApptMbzxUAzojEgIgQNbnh7uT4GLhE7Tz4nwksRrgy1FLIS6%2BRs%2F5Vl6EkB0q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDDl%2BI3m%2FAkaToCXRNyrcA0UUq4RIrWefUpuq1ljowbFjGhsFtjBxC0MMKJiFJeaJzYzTKdrXOZVlrRvmR%2BNfKRoH83EXc7LGtBOCvD0899Td3W6RmRJO6CRnVsDtwVzCQYPrjyJAeZrQmUWlmjYjmHIt9XPDmLU%2FTdYy1ZogCShZrzGG6dLtGCriVnjnhZCUKPZKcIUkK05L1yLivxBHW4RzdcrZIjh%2BqTMdDhV%2B2lN478Xbjh4ll5%2BgSkDGs7vD803pxhOR0%2BdpKl27749mMEWMe9bk5UN07ydjz3OExzrESAtj9y4x1v9oqX4nzPB4HtB9eTPbuFOwP9VLhnzcln6FvH5ficpYqHO8UUUp7y6WcyjysIHcNHBqEkFk0XGN25vCvhiU%2BLa0XFAPH5dKfwlV2ZiQczo9uoWtk8tGoxCbApe9%2FQPdX4%2BtM8pDHIEIWxEbvBq1%2BdPzBoDszavRWPs0DFQjDKMEK%2FPReiWvpGW2EftgqOsx2p4%2FLq4OI9896HScczDgu8mzzU1j7GZyZx5ImQh6uHUTny9%2FMhdDiZjg%2BSbgXy%2FA%2B1I9CUM711XxQTgPKMi9PNx6Ou5vFJUfqvad9oNnWG49mSshY0kIVPc6BPIdjV1cGU899KOPnFVvnDwkVaVn%2BeoNE3MQMJvRj8QGOqUBnKNUEDcKnyHQ0STtnoCSgpiExqt2ErQLmzeJ6TKvax%2B%2F8Dph2QSVejXJ%2FBtuqUJYCTpcrTIzi8qxJOL%2FuHz32i8DYZrSVkeJ66zPqCag6Plj5Wbgy3bREvX1VlyicEa%2FxkoTr8vuNEZZs9yeps5Ho3EBAyUfLH%2FJiPyrDGJ%2Br%2BMF%2Fl12s%2FjE0SwtjdTW4N%2B%2BDWVRK4hmODIihk0jL9R8dlsPThcU&X-Amz-Signature=9a59a33048d108002837a9210efe4fb729c07db517f3248a77293ed8fd94d370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
