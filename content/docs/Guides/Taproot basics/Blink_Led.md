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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNMFUL4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIFM1eWWSJdrTXrYiCVO0znQGQoRYtHADTZkidDEYyMEdAiAK6pHarp2l7mgI%2FminSJjPvfdNvOUV2xyxHWX%2FjlVzpCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3KRMwjHK9fMy5YRdKtwDK3bmwMKog2TIJj7%2F1RGYnFSDKBdWN84hi08X40Fzu5dJQ31oMS9IRz7cYo3VOEKPs9ILBo2PgO8np1nx1MfZ4MrQIDy2bRBatMwFd6BxBH8a%2B%2BXaFrPgteIqDpsN5aAu%2Bi9jIPlo8LxNG6r3R6%2BcEId7ohF%2F6tP2slI0fn7I9PmtmRswUkws67uI%2BPmU41ECwuteDyW3AV9d021pibHlF190NAOM2BXujLxIl%2F4uafGew6xMB515KehLp8J%2Bjs1iSoqpTBJk9VhkR%2FJzam5KPLWXSUZU4aLN58g6rbiDTYIqpQM5g4tUf%2Fx3SnCSfYMIZ0YbhpJBt38O%2B6%2FrV0mKvvnID59EO%2BDt5Ijs8iAsTtNwyCKwyLKvWiBveYfl772yZ%2BFnA62JOOl55Zrf0OfOMWPMVYvnvTiUSpHr6PLrXEHX7N9Q2AcQhVLNH1WV86tDOhO8D4%2FMa4HOiyqm7iYWHV8IDnTRd6ClxC0dsbQQ2onOdkWUSMpeetsjky0lOxG7qHuPIuLnOdVaUbWq5rexcoaeeNpbO73idWNGN5wiDa7x%2FwiZ3T5xTMujs%2BrfHON2AShZabYswBY8VgLhWFE0gINHMUOPCaaMHrHdJTjenW3waF8DYc0v66MnDFMwyKbwvgY6pgEyhigvLYkBj4ESw2bjDdsMTsEOumyfgw3sWo9jwBnhKeyrFs7dIfmWOqIIXzEGFdpIyXdbTOUpnMUHIs0pWa4jhhhapIr%2FlAUon1LqL30VBbSV1L9VxfPg6WZyAtsSqcaGXa1SOj1BFKP0F3OnqtyRpM8RqjHHAUdJSuO%2Bf2UDCIJvBY8yebsQibCwdUKfjfsaSwS0o77%2FmCAQ8zeHBxS7BjPDKEBe&X-Amz-Signature=e70da0ac996fde116228cf9845501e3d8a29895a2401d89d4798844fa69d51d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXNGPX6N%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIFHvjJcLoZAFAraV0JkAdWQxN9G8tk3%2BL6b8%2F%2BmLJA3GAiAxu6%2F%2B%2Byyhi4Ptde13mbulNJiLrQXf8JYEvK9ZhxcHzSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1w6pbchPeNClVroeKtwDj%2BHaSDqFCVxPLHqwV5alMHHsx4M7xpZyfE14Cw3giqKNND52qrVC%2F%2BNePjdHddeTTRtSNFZ2kUGTG3SH%2Ff6%2FdjhGBFVoE1dssyZHRJ%2F3UjQNeqDBlmGHafDRq8c63owIRqt2cmlWqdQejQ2tHK4VRxXpA7PGj7CqMrCtFTdughUoH777tLzNKFu5klqrRNuiGO5YlQ7TAFcgd4H2asprNubcksQkHGkm9DONAW7hdVopWOjoGzcR1OaXrsQlp6M%2BtTkXWbFVVpyQ9GUN50LkdYItNLqVjQvt2Ygh73epm%2FFoIydCThhfvZ%2FYNHYqe6Lju%2FOEsRGHCGq9iNPjbC64D9Hq6yNcSCKcgCzJLw7H4aafp5B%2BZvB%2FGdZThGiHU01mc9i5PXL%2BPSQ%2BN30PRESarKBG2XBluAHqvxA0Qulbv0hyNWQZfPDsu%2FUScW%2Fu%2B1xwh0QhfT5v3iUFABtxAU25bf76qQP7%2Br5Sf5CHf7kty4%2FRhe752nadbaLRvYEYL4FANNZKY%2FvwJ4kw3o%2B%2Bu9ZgEJZZ%2FgqsNuAC4InuOS6NxI44dXSrMOKIqCzJZWS7m6uWRVBiB%2FJsGU6Y5hcAjdlZ%2BHDvssHdoiW8zF6anvciBXh0gJ6EUZmu4IWHOR4wuKXwvgY6pgGHVKMGJssb2UkxOcRTtcTInfEnI9%2FJKXAGLulrFAf5NX%2BeOkWun5NR1Z4VLGy5LlzEfg4OYlQ%2Bhw%2FOrzepKVfb%2F9J2wxkIP%2ByFfFDiCxRkkGlPK7vMPMBjlxDXC0L8Q7HISPcJL01%2F9bArEkWbHX1qucEKTqeR%2B22V1wVG883jD%2BI5b0P19ZT3fMpABX0GGCeKqy2%2BT4lsgpSYBg8oE%2BsuA%2FUHZC6m&X-Amz-Signature=e38630bb38e0e12eb8b8c935739c52d016645850f027b932709fb8297a98b7dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
