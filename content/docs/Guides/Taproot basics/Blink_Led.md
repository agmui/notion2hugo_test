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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOML3J7%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGPvPQ52sM3hPpGdJVQiFZpagb2t3z1lmrOYCeIftH72AiB19tucDXoHOFrgYY%2BzoiYCsid8by1q%2B8lgRcrh5MvCNiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwCIRscHCnEyL96u%2BKtwDMiPD8dsbWRWWbrNSdEQxrfwQ2dFc2nYPY2cbfNgrP0AamUrK%2BFjyOqOFP8nxFtR64gVv5AUDNBTXS9H1f%2F0lsBDcCpC4NnEo1UBIVHG46xjDnw7ju3Un1csXc9qfEKz9dipowGYi0%2BKlcOD50eV8erAKffnXudgkS7KcIk%2FfcfZXrjkARSbHemn3Fw27tgVWJq77oSdXZT5UInXNXnlrznvaWRyLMo9xGEPoOTCw5gS%2FL4YFGqg001sELKO3bijamR8%2Bs8Xr2pqo5PSrOh1BhDHRzw3JzDdNH5may5yhEFPFq46O8jaIg35D9GJae4o9LHg9inz5jZguIXINxLOhLktKuvPm5t3F8SFN70zEXtP3xcHaP2w1YRQKGe9YRlBX4r0aoThP9su1qAxBHoVmgBCQfVk64GJl3z8y1AxLNeAeR0Dss0%2BftmmDyrxOSFDUotUNfXmCQkxuvv2u2Pg%2F%2BzaoouXTuOzZp3R%2BhbHBcbjdYUSQaawOEvjO5Ho4%2FNt7%2Fi1tNpEqKjCX9oOfFSvjwV1ausCLPIz%2F6fxHXqSc9AFVJRzgd8erxNZCrcYzABb8SzoM5pkpH8rzpQBRNB%2FO6pJ83ihwuq9uRzZvM0Ek4zmUdoCZJob%2FOEtsQSMw0enwwQY6pgFVVUFijjFBl9umLQ5XSb%2BBkpwfQZHhx2TbSNqLDRHEG%2Bj36bG9Zko7jCNoT4Y9077Jhd2HqmC6z3V3T5hAUzw8In4a5ZaLL9yzDhodmkEoomMUJ4tns%2Fy6DUcsBQgiCUldNbc0kj60wmLgueArnzniKo%2FrVSWU49RDieliHVz7pRoQ0WZz3GySmx16Yb4nouo%2FG9VmaO1MQ8P2Nf5Unh5hrlEJkoWE&X-Amz-Signature=9aeb9e418278d49dad024315d7b0b42f61f74032720a856ea1c77c23bfc9e07f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTVROAT%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCE%2FY4bL%2FU2KdwJzfu%2Fzu9hJ6GW7aJ4ZlBxWE6xbr2PEAIgX682G1m2JHZogyH4Xw0sW%2BySpOhDcMuSpBpDR830DvkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIny6oqIaSewXzAq6yrcAw%2FVKZ%2FsP4zFzJGruPCWf%2Bzs5kI%2BwTHN%2FzTgOtuFCpLD2JQbYHqKmlSKSEobs6HqQ18N%2BxIpU1z971wvWJdqIqexoDspwHUO31q4oWngDIkrogs%2BxUAWzB%2FnZhrH4ABhrt78AyR92%2FHg2hZSTZ7Icgz84JfblnWUzGgbFN0VHcyJqXluUOskgbEjqQ%2B4GE1wD7sI7caZZB1ajbZX71Dyja3sLlqyBFKVhVK1iuPucqBAdFt%2BhEeeXDiVS6N4WtRToZw5xe7iJQicoon5RRo00a%2Bj%2FvHqh%2B8CxYCV2pReBO%2BaYFDZkhWa%2F2yFI%2Fti3EJguyJXi5s%2BFl8i1bL7Z4KewqJVf2gp770yjhYUsYvp3xTX9MeOGQIoM9BFfNBgB2booyTytc3WE3vtR%2BkPEpG00ksecRTmdXD2Df5DCvnmCIOXh1gCFdbdC7oivj5VCrkVIrQ7NK6uOxbaW4SNP78q0xuaaJ5hn7XEAb3IwiOtSqh0vAYeK6UfQivey%2FIVqdbgBbQ6yUxJE7Zn1hBMIzRkU0E1gZLkWJDu3CMjMIbmwaQ28PH6pwDmevBX%2FjSKRIVHjB9S1BMXRU5leX8Cm5PwXZDgH02nmxrPRvClanqANPTq5OhzQ%2BhGjX2nAprfMMzl8MEGOqUBOsmSlCraQbfRQBFHbRAYBFMhU2O8eieb7OkUbqqRpGtKJ2sjzHbBNvEPq%2FXFGtMK3xYK3wMw0PwZeIWrutWf08sMJodUGxU5BUL394Z2LA8eEtg8ETB8P8v2HGDZUPol31FCp00YblN2%2F2WWbE7XcKgN%2BKrwBalItA1sr3tpGTz5oM261FuN9DxhfJI26ee%2Btn7Z6KsoQX833RULZwqZDHzYiFQx&X-Amz-Signature=bb1aec9f87f88e93d91cb7a2aaca1c48f28f601231901f71ced60c038534459b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
