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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FMPXJP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdfmYp8cBh2BHq1LNpBVk9GPV8kvH9PZKZGFKhAW7AwAiBgstzuQJSqe2B8jNX%2Ftcg7lwbPwgH%2Buq8iIISvo9JtfSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMLisyzhjEcfZiwZ8rKtwDnDmFb1Qmkvf6f0pjo6HVJ8G%2BjzHdkX50icM5cZvVSXPpgNwoSFV32RwnxY5Bof5JMXXhWj22ywlN91VKzRN1T15XLKjGmBVrjuihildAWKXl4LprnMv%2BeD59Cf796oje0J4hOnSwjjBRyAI1fvjh3rRpDCIjuVizp2zAjOY3b8jhtIaPnLMME6LjjgHnIAd2qlumhz0TifWULwuc2Q0rocuC%2B7VA3nf%2B%2FXFNBsulePExZAwvpEwu0VoeGUsMpFfjajJqhSsc57y00RKzJMWSBOqVTxyKoXFEq%2Fuqf3nem9Zlk8eGl3iuFxxD%2Bvqo2ogaJBpwu8LIb1Dcmkc7a0wxGYmzBE1SwMWPccz9trj62855yBQu0pIOSNkNTAXRoDVxfdWsZEmkBD%2FbvHcIUSfdhYlo%2BWnYM%2FKuw%2BqoPA7U3CgZEEDHMUTpxtgWi0MXbv3mgb9DLu4P3%2BxTdUkhmwVyc0fhbYbfb8VVbQh8WWohYhgVr%2BmR2IkrgoifdqBMwdD4n7mwjOtBj6XMqAzQ9%2FFtpIkGhua0bAT1RXL0MaocZHoqvWnbJgN6nCYYU77hKRplTDbcYIus3oVmV4b5HAOi2gQ%2BW8Kde4IxOvVXrnCcF1Eg%2FEnKGSdscxKTaJIw4tbzvQY6pgGFJ3YKrhZWJGXYwOvd3T4C7WGpt9V3z6BpzQziZQhsd4a%2BcgIGog7F31QyEhhyNj0OzbUMdmXElUp7q21vziyRM%2BkQPpHEhAYpLgQzC1DTUJr9jtZxsvTuJ9eqgSNCy0bwBbc5pNJLLRUxNjRugmoutH%2F3%2BAtJnsjs7iRmxsSaEf8IRTbrpRIzx038Fcc6iv0m8Eoxg4d5jVGaED4FJq5qX7PNU8kk&X-Amz-Signature=90d15d4be5516d51808c98770f8534b40609186fe4814cbe055f6a389a612576&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBJ3LG2E%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDXz%2BBCZCLDZYM2%2FDfRPp6xP%2FHtXn1j3CD0SgKiTlN90AiEA9faAL3jcWd2aVxqYO7gP3ajT1tYiJ175JrJO7V%2B%2FsB8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIbCr9a8bgjohSKH0CrcAwM5T3jEIH9VNocDstpNxQ%2BH50Yhqvuj9tDyZJdQERNcy0xYPrwXqcLpvAt8Xmfkkq9HRTqO2sHAEB%2B7OJdbC6zrIHwMQrFRBfBJre2nLrPBUIit%2BjjEtRimTM16FMUfz%2BL%2BKz%2F9UB%2FLdpPDpLpBr1oRed2fJkcfeG9%2BT79FR9lHIc1iQYrJ1Rv%2FRpNBQNRUiYTpbgFoXhq1k3wR2tdR4ByR90vfuq%2BU13MFW9XbOw3pIfvWfx0XhtOEIH18LfPRt7zIl8WwBFnxu7Hy0iSw2bvji9SY%2Fb47EcfYrUJcQkqFjq3pLGV4XLqBulhRO8yyr%2FyR%2FGEyKXElBcM6%2FVhPygA0s09JZX8pSiyyw9335QlFH3kqZ2MPCMJAgoHsTJRj2RJjCSibeXd8tTsm3J3%2BxXcxrpJOMGsvIPdZENondrlHRH5KI5RTmePeInqWUy8pbrBzEwoafjgg010pehSAkzrirq3q6bs2uE4mPJuT88ucs%2FI9XsF%2FtI655my71mMdYGyP%2FL5lmKWwTDiKB4GRy1JTORl9HWeYo2tuG%2FDt76kHZ2BiIPkrhuQl0naUrIAZHVp%2FnB5pyu%2Fjqg0h%2BbEPTjrZwF1of7OkvvxHMIJhP3l5wVj57c6lknBPvva8MMHV870GOqUB1uGkY8NXpPDmQ11z0BjGms0x%2B1HoO9hPXJEoqxc4MDn52r60fUiVUW5nXW%2F%2BcK0QF5cTtU%2Bp2S7W8Kq%2B%2FKb%2BIn8nyn%2F8vs9pVqXtktgzpSur6tFcteV3sRBeB9Kc9OTDL8d%2FNDFb3A7W%2Btysh%2BxJY%2BFudO4cQ%2FY2%2FksfPgalEyqU8qkM4%2B7lCCEN6Z5CrZgIPjFzfJtGvXGuiAiZZRjnei%2BiakPH&X-Amz-Signature=a0623f17d8ffafd3033403af79d93a9b438bb6bcf4f1d8eacc140ba7e7119c50&X-Amz-SignedHeaders=host&x-id=GetObject)

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
