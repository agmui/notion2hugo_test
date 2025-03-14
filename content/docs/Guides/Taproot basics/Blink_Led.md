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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624SEDZLV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoj9pApqSheWAIxGq2hJKKlrkRQ2QIa86YyUn1jmmZUAiEA9%2FcXrYhLOfL3hQznc1hwp0ye6fZSmvNoJnOixam9lKAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6Z9bu1fTSD1cpeAircA%2F1HFSYZRRU3wOh1SRIPDAgJZe2LODb%2Foq5QEcFyhgT9TrbNbRjuQ2I27qNpapLF2b%2B%2BBlZVZTNWqUQXWry90pkwB78PxjkpFJnwV8R0OYktjpHZ0CV6MTI61s7eYPbQCDN9koMlA45aXGZAfpDm6iuKE%2Fr8JEbt499%2FeD91mcWCBL4HlP5Vbf91obmrVkmfRtpm4IDwVfxhum4GLKyRIkPTrbfVYe2%2FcnA8KfdrvbO28%2F67a2i988XR1hUjXNW0AN0COnnVmhNMGfDpUBJ%2BTAM%2FDoJ97EIabITI4RRgNLs7kkC1qo6YCXpNk8oM5NPocbrJRFS%2F8xGcSa90CWDbgdUn51GrCOuq91nhkdzR9cUosJ2fd%2F4OTmPvXAH3lcISbVC5RUEhYhlWxpokiw%2BzFcKBrOw6m1sN4fZyOp1cOp%2BKRcqrjHKLVe9epQH%2BiTNLx4v6qlb1V7FnAtIB1%2FLcTKTLDD5tUGMYlkw5E6%2F%2FCW7mMlGio7AzJgeEwyHMBDKo9Z0CIRFH6YLt7GckbA%2B2DKHP5%2B0Y4%2B%2F1zJJqajOVZsesBd3zDCHBa6lFJHsftW50qSwa8sMT34Zw3jYsYrtjY%2BrG62i8oNdywt4KldWH2Rqe1IHlSZnuF3Zrq5WAMMuLz74GOqUBI7QBDCdhXFzn0xAXlamJWrmF1g%2F5UPuH2qNJ1%2BvcWsAdxtc%2FzPxrcRe8YuIqHZ3zqv2%2F2iawcJHGnuSnB7tjiK7Cotvgha1JYfHJIwR%2F0s%2BclqDpsJ%2Fv2Q15vjRWUl%2FOBPhR2MpbwcvbzVucWbCkA0VzrfA%2F9LvsUpsO0J3lNAbpTnBD%2BNSig4pk7CAaVd8%2BkJJp7PeyJPc2Bu3KdvIze%2F0V6tu%2B&X-Amz-Signature=d2fee5bcee06ffa638303a0e8d36f4c2c5bc19b6fc2227e9f2d838645755fc22&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UABGO5P%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG3KIpdwIO99Iqu4hZ3dx7aWUx9Cl5uKR%2FutzXwhPhKAiEA2WXku3a5eTb0k4TXjFvy4Krjv9Yy1DGRbskCqfpDYHAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCitn5prYZezaXKw9ircAyvwPLed3%2Fc%2BtpcEubUZoCDb%2F5gh0PRCtL6d2DbNEeyuugmcYInCH2iwF6BcK567%2FUnBiZXrcLl3rxbCwATYqjbr07yb8CafaaUzlTfjPoEZkZ5b4sv0%2BZH5FTQgxN5EJEsQZTFbgStTWpI4YxAO%2FQJ41xDbtQSZY3IRBPpe6%2FGineEoCEfTKLRGWVTscgN3ESOVAXrB1D630C6vYoNP3VK2WVHP0wDAJAMHkpqT8bnPmrpd2IPp%2FJepHjAQLJgW93Phc8OFO8oehvBOA14p%2BNo25KoDHNERe8wqwwPqjdM5kDRXWgEZ4mbW16ce91L2TnckvpYAZtmO0p%2FLxU7Pe0pguFBX0hzznk07xB%2BC6UqOR2NE16KgMUya2U4zCT6AA83fHcOWHp%2BKrl2wWF0hfmL7S9o%2BU%2BB7swuccCCNPPE%2FJg0FZ0ZB27Ke2UPqmMUSFk1PqyRqBsN11aZzuSb8I3%2Brjl4VvJOTgWJzyB2GSzm39IoPG%2B%2BzqcPHYLVWfOc6HSGdZxjtCsotlA%2BqAO7VUxZYAGqyzmc%2FGVSVIkoKLDhejspm6hYl2QpOcMljBMmQw2q2E8k6d2RfF1J1n8WKgTZtUvLyzA%2Bq2H9x0UJxA6oQJ0BilpyDFUnhAE%2F8MN2Lz74GOqUBSqVb7uYEXcm%2BLjYxt9zKxCgbCz%2B0YjT4QOeW6sCiOQ1TlKMyXnobNhYDIVB%2FQW0CVGksjxVnC%2FXj4f8DI73cqZ47E06i2or9ysDk5R80E458snmq2Kzyx1YmMkFQQUm6ZfZKALWoFl1woNx7ZJkBmzZ%2Fsxop%2FtDffM4s4zG13deeCsiwy5e4%2FCllrsGg66HuxyQOUOOKYHWzFHgtntP98AhxoZPo&X-Amz-Signature=69487dee6d6178f29087bc0ddce6a59160693f50a6358bb0702542eb35e01f57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
