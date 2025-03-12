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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PRB5NP%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIEzxbIL6aPloC9zHiH50kss1AUBzMU5uzZYHsl3oXRJVAiEAgc%2FUii%2F8jCaVJhtNZW6rAK0cM7F11ELkQ97z10NK6I8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfsFwTohnKKSRMemircA7IFxNDpbdB3W6wxp6bYWA%2Bu9RwJWWFZCvsIBjsb3yNDOuUHYc6897qpJmgXg4oXDsBs%2FDUlTsKlM%2BCDLCojmBy553%2FJLUg%2FSoZBtscD%2F%2F8L%2FHEF95bwqML81mRY4He24d1gHtytrP8srt2%2BneN3961GsspGuFkg3CGzkdBQD7VJphP7FkZgLeA3D3m6rp%2F70%2FhMhAHLj4i%2FgQXi2cabF3qkyjrgFEOh%2BzZqozCkZJBPiaP8pHEMv9rOTkbrLFC6JzkMu0s76YwbcHd%2B2QVK9TEsh%2BUZPBw1mJ1RXrJbZZKV%2FQc%2Fpjh3ywo5VUKqieC%2BqugHbn1ctePXcwV2uGgNxeDO%2BYNp61c09dnBVQm20AnrY5v5Y3JaS%2BpMxQxFAsavPO%2Fum8W4qxCeaGNtAmWBfz5XvwrLc4wXxzagR%2BUmu6NZFEhjRsrpc1JEu%2B06yPeJaUwN2IObMSaVb%2FFW2579WSqlSJtJVm0YXQo4s2cxkwNXJbHPVO1LICVtWs8TZ2C2JMF%2FPtGFsAXhgmtww4Uj5WsLE8Dd4H1hulj6rSBjYNtSc48Kq5qQ%2BS8ETBpN9LMDUUt1Gk0Zuly8VIKGbEc%2BZkvJOw%2BXOxTqTXPq47JmHkrVPo7YPxiWcmICt06xMJi7xL4GOqUBpdhLgTvXTbpMMHjUWhCShV6BgmLUi8s9WE0vlL6DwcpSiJ4462LJT%2F%2Fe6Dwa1cPrhV5mQjYvQZ3XVkQK5mxHF7OSMGsuexchusaVgfZWJeKmWaqcDkzoKpKMVfuSsrRa0tPFX6Js4q8GKAPTcAjTICw7oXr1RS1Xb2JsnGom1rrI7nJYu4YRzgndD%2F6z50%2BCT%2BWQuY7phzLhL1fRfLNJSnJuELuW&X-Amz-Signature=696e0f7207101e98e59bffe8431ca2accc7ae5dcd87c8e83913da6547b82abac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LDPESQH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAWx87CLUj%2FHEheXAf%2Fi9AnNDiLPaLx8ngmnZOxPTRO0AiEAof7jB0gm1vihVQnOaB%2FxF3%2BI4y%2BHyQUkXVjUO%2FN7P4IqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtb0cqPb86PyKJ7PyrcA4EHuEbt6DYQORAPDwAQYOFshwXbHA7E%2B%2FJgL66szRGS%2BXhXvR6vkubSyOXamnh1GEk9so2GVsY943oHpwy%2BZMqK6yP6pF4I62u8FdO7yDFwKfSo4BKauDg2j78%2FffWCkPLALcLeIQqbsxPx%2F8bLG4LkenrSRkhmU32Toi90%2BxsLnA3Pi9WUx6yyLlw1gXCKqIlQFUmlwWb94GfwRRVAbHNm2hms%2FZt5BH%2FSOPjlD5ypDSXipU21A%2FxqpsmUv81vEkKZWxcEc5%2FpMiuybJ8GG0XXqHipQHss9baD5GzB54WzjSnZCi2f6%2FUFvQuX%2F2S77JUIPnVVK7WGI7NSroQlWSmYJVHEg2sshJ%2FLlCRa9yh%2F2Jt8YTuo5lnDwf%2FQ42srZU%2Fi7AGwvuEgSsQZeTiU3Rtb1LOeSD%2FOuziWFuGAidm7%2BR50k8IizBDh2ejQSTTd5CINUcvHbMiInlyrha4b%2FRuT40fhVD7lqB7u3%2BUV7RgS6G%2BORMLW%2FcFWTLqqD9LXVMfXszcmus5YQQc2cAWtX4%2B5PyOUrrNpfASf9jb72TwUR6u0wxTUR6NkwFj8N7Pxnn3G%2BCmT8GYLlhHXyfcgkN4xgaso0z8KkFjbsOjZfHPW%2B1RqTO%2BqdZcqSXQWMIG7xL4GOqUBXI7%2BP%2F0oy5z%2BClmojUYxd68IOvr8ymCqvtLVFkWsGvfCpS0nhDkuaLKbmUJN3UYsdKIssKIIZTOVCgaQYR6mG%2F%2Fson4qJUSVPy8xamaG4sO9mReZtX9eueNlVX28YhLDXw8WHSCXH0jwsR0nEi5sNxHstwkXBXLpFShnQLyrxH4AkGbUjN1I3jsgS4wRaXGmczjCz6QHuwQAabwqbk4Vjp1Fkqmv&X-Amz-Signature=a74abd541e25a2f349504a72d512aef6c6afa340b780a881bd57d84c6d97b267&X-Amz-SignedHeaders=host&x-id=GetObject)

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
