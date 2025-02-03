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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPK2YZLE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDc8AZGwwK0c1O7dcnULxKfgXEqJVbueU7ForbBmnSemwIhAOADvL0549lU5l9Wc7TTjlqHbaSx%2BRRuVMeCLoncooVyKv8DCB8QABoMNjM3NDIzMTgzODA1IgxQ0Jupm46QqmfIduQq3AMpJwX3ebXOByqvddVXfxyD4v9A4dzZwJZHqLPom14LuLFT1xx2l37FEUCdSRUd2gGzvk0LzyFkE3Q60uU%2BlN8GrWx%2Bf8y0QMEr00Hfc4RVrUHYzsDwM46Ooydjcwj5hCciSKXOYRAcOFgzIYmqZUtkclZQb76wIfkfyniGjULt4QrMpc4ASeSqZ4UtzHa7TVn5y0nT0DneKf7TDyC0sxOFFZ8op3fwW%2FWTWV5nFVBnKnXRUeW4HKdivjhFlQ3Poqv8P61HDkxDInl0JZSJsyK1507VNkbsdc9J%2BZcr5mUu7PiQc5OK6NyzgT1neyRT6PVtFzLWPIczvFJpGKJeX2yl%2FHboRkUNVYu8YpUytBQ6m1D8j4O4vOHEe6OhoOuOviFmqAehrGCHgNnOjAgme7oaRO9QXe8%2F9YpiqYahzsLpIeDIDpv2%2BNhtm0iUPZZxYNBAFapd%2Bo%2BDmyppzh8LANDzHr%2FLFFciQ%2FBIUYNZpS7hUSKGu7%2B8bTC%2BKRr8YZr20SZc8Zto3eIjZkg9kHv%2BZZpJ1xmwfn4cs5J2ITp6sL00o2QG7XAfp%2BnldViqOBPXYueI%2BmvSHXsimXxXzIOF8bXeNyqe7GisbZSMxWPHrQhjGvlJ5Mnj0p1mbjnjrDD%2F%2BYS9BjqkAYvZZ4MNodmtaZQLmdr1%2Byyx03VJpHShHQXsIhuxHbn9SAOM9uD%2FrbMNmKiGoOjprLZbsRbBLbWnVIXEMTLpQtoe%2BB0XsmHadFx2kWLMqKWXOKfuCDVENsCuxqrCnD92ooM5J0IImbJITYOTsEsICws4IGKCFer3fKyqCzVF4iAtXAoK1pPLDSjziD1LQ2SXgX686yyrq%2Fz4lZY5ikM4xx27%2FqoB&X-Amz-Signature=2b245c5a4f0f9b52145309bcefe45eb72f80b77b2f3ba93be1fa9bba878ebe85&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVOHOH5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIBLtStRbIYjrkXIzMHsvcELubLPNPoi9NbHy3VtjZMTpAiEAi8XR67stdB8qNCIjlTzJAm%2BHW0jx4gyfpW8Eu1TuUX0q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDJvHYC3NWc4uE9RHDyrcAxx7vmJ%2BIiGsbVIe30D2xah%2BZLYUV%2FchsRifA5lpPxA5oNQAbsjgwXfxa30Gi9v%2FMF448fDh35QsZyGBT0DaboC0WUXfBRLfDgZkrLNviaQWQDaLc7ns4zdxEculaEQZxX5MAcMgh83q6ulbGOf1F%2FdTs8lP3OswS8JMN1IPNIFj3%2FjPUlkM5cBJDsjeFqhjITCtj9vHoQ5yNY8Tb8Y3elHL1mF8WLrbEVHG%2BhuQaOqQHVn3piM1p9MGZvmYbZ5vkIYxWMSFir4p95JXWGU7kOFH6sB8bSv95PUDN8cMk7gssYWNt2DWg77SolANKBnC339IGMwdMOli20srTsDDFoH100bqdfuHVZYgXjignYb6ovQJWQ2RTBpEkWw5lHlZ%2F2ExLSlRSSjst%2B6B7VJ3otevLOAvSyuhVscXz8%2BMTZCVQ0yHkntzvHdsEccxkTTUshC9xcHLw3h65SL3ld81En8YeyJlLw9fNRCRO7RtEkNMuZypgx6ctGhV1iJ8e0HdJLjIwoFYSqPEN5Pk4bt1UHgB%2BLotDmsD%2B%2BFjVFCznmOEvNGQT8qwfE4srYK9p3UK5CCqKG42GdoBKl1MSeE0pjjySvXC6L2qsTG%2FS0oYDKfYQDDl3QfKFan0kSY4MNr5hL0GOqUBrOqWzL3e65VMudBHHsXk1UPRVdd13hUUireX5QxW5XPjZ9OHv2aYmHqb3wPO4uZL2BxSsVIpcAbtiHbul3U13Eg32wZBoLeihjLwVQT5su0l0%2BenmaY7B5bHzCx6BhHsHhbiz5a%2FFdqPEsGicWXOTdxIPYOGnY%2FALka%2BC6YH%2F1ZeVO6VKBhs5lbWTyJNdj%2FygFWpOz%2BChIWd1Un8GwEGNu%2Fa1m8R&X-Amz-Signature=fb60cf2a26373be71b170c9bf2596363c415937bb85512f2b108594467776066&X-Amz-SignedHeaders=host&x-id=GetObject)

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
