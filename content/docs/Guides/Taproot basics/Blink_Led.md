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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TOE2WQ5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIE3I062ULoQPBhFaGXbojE8Mf0CgG47Gqbxr1wevVnfcAiBpBgX0ZRteSb9ce1O1omOy97xedEoyqGr02IocrHHqHiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9tzf4EB5FLoCCIpUKtwD%2B%2FrSzW6Ouolu2XH9oT3nk6QQeAzWspCNnw8%2F6xaNuA3yRRmWlHaNN2z3DOYryeubhgWpIAntsI%2B8cBvuVwtuqt8X758wHNApqL4hyTlVJixcE%2FGUq%2BsnDDmGv2YfthzfmpatuqUfVhd6%2BpV2N%2F1Uj4DMFe4tNKrPZay966N8MMTlTVyC0x2UNnIjhz7sxYRCNUNslXkB5mWQeS49%2BscPSndf%2FNI1q69gn5t5YwdMrD2jLurjLMvFsqTjbPmfC3b1xzS2%2B%2FrBmTUtOfWx6J%2BS22xs8D2M8WX475GYMQFFTOWIrZJb30D48R6Wk9dKgYwQ0k9Vcy%2BHplyN8plFJg9Nesy4JlgLCrV%2FO%2B3cfu35Ez5gCytxCBTP86oqVcfK%2BqkzfG8%2FZdavKXsulfZKNElg%2Fz0uBWl%2BqL9KQse2dMldR4cM6JNWeUonAsrd9uciItiYP0l1TVLyZtv4VRWaxUnI3xQdYCFIfhNuplFcCjlciwewIJK2ITJLseHx%2FQdFq4LURw6CkVESK2SXhEjabHDVN66UmQADGorHNeLUcMgQ4%2BKh1jVBMZiARYbEcte76EhtDTOlxmCHZjSyNuQB3QCLUr9XlHliuhjgQieLWU0mdYzuGDgGSQuaIlU2ToMwk8PhvwY6pgErogWf2zGuFbcus5qEGBghGFcH9xxXuuKw9Pd8L9MuNwBdev9UiooP58P%2FzQFMWCI1VSDo6s0tQWkYtSKxIrdFVF4mJubq5EvIsb0YRVG47a9E6uS78QanPJk8zyHHQjndZ%2BS7lz1f6QS9%2B3OgZGNWoZpUkJB0xOB5ZMBxB9gmpEn8AOGq98S%2Fk8CiLrcYOwmYFIbBZFCMwau4IaeO6SjxTW9rJq9t&X-Amz-Signature=3372d6112469951ec60dcc4a6957be01ab8c4cd4ffcd5accc7be2c866f675156&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NU5YKL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDQieVrjJtnEV7oUvvwZkgHvElDBFEFFextFwVOvRMgUAIhAPtgcdDgmIXzMLj6kV6DiX58xF6IYQUCOzPRPbkughwtKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNf45qLXosOWWOE4Qq3AOkKF26IRRH67%2BVkrLyGXdaDQchABLiFl5yjs5BKhuxXJF4hkuWjT2v0woejLwJPNHEyoC6ZhnJLvyLPSlPTIXyl%2BmyZoojAnD8wvX2ZgdA61yqMxHjfg3CUhDPmSn%2B6v1ggnzKJfbyprAVpIpPw0LiI52g7ESzyh5A09OW%2BPsmBircFTKyF3JnFIuAiaEjfHNrPy2xduQJjxJsJDORzE5zZ%2FVb6AMNqQdNWoFBzrpjUzgdFyCuucZOCZaz70N%2FhDTh5m0LK20I8CRoOnd1n7ePlGKn%2FZUngIX9TBjLIpjWNhjvPje63fFifCWFybXCGZolGwd7uS97aCGumqgkDOOhClGQUIq9mBW7%2BzvfKIEy575ML3WI0mZxaZnG%2BgkQll2oN2tfavm9KdtHINUBdcyqoUpBN6RxJ3y8RuZEJlVA0PNUMWRwQUN1hNRHQHPD2g8Yvrzgv0%2FsYl5RzbVH%2F3ojC4pMljZcT2yeKoatEEVxkow05Psy3h9SBzZ3ThQIeC0wRPTAMSNs9g%2BdmW97QjdvuOTZbZ4jYYPEbHc37K%2B%2B%2BubhXsqjrRfrATCWkPlCWRQNyvWRAlH6lwYv6tWZHHFLY9I9k5lsVVHWyQ1muqJhQs3BQKwIbJu%2BQ92KzTDcwuG%2FBjqkATtxKDSI3fix%2BzmijcTC50FH7SJU3DNik54SFCBRbx8%2BTVbAcL%2F3X2KsA29szc5D39kMKjqBR0k%2Fk%2FLe7aNxdt%2FTGWMw4P0qF76Ep6%2B6fzBDnDh4bv1088aPTbHXnDswyrYliyJbbY8en7812J%2F%2FbaNPlZQH4LZhTSYFIos4NWy2TWIhqDdbkHFtTc2mg1cIQlRtSN7HLHlEjFSkIAW5gHupfTZW&X-Amz-Signature=904f2dd8b8e2eb6a448daa7a96211072b326fba25b45ad6b1a6df931983d3d93&X-Amz-SignedHeaders=host&x-id=GetObject)

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
