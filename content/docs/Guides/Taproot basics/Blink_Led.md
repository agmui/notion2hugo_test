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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6PTV3HF%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCnmNq%2BTFTEMzSQWLb1JF2AqIY3JhDjr35o2Z0xYMQsQAIhAKeW8iB%2F1%2FH5VDaUFZA%2B%2BrS%2Bn%2BBFwJp6weftcdTENgbDKv8DCEQQABoMNjM3NDIzMTgzODA1Igx31NxlSy1jclO3g7Yq3APAkMYRYcXMiitAtWe4spR3HETdBwKWgbrtaGX4UKwavKExGrSh05amYcdZzv1UAESZtJwTEw6D8SVg%2F0c1g9bPbbVYKJiKVtU4DyzuaHEcQ%2BXUhq%2B8p%2FMdSzdLRRyLL%2FjC8WhCABts766TWmamKRgIZqDkSENpG27y2g3G8Gs8uGr2NeuVVVuoEvEY7ItoDMPrifl%2FWh%2FbFPJLPMhsDwh9wWQcK8cTaHQ7Fj9BI0jg2W9P%2FD5you4XD%2F0BKEB7v4EqWzxiAlcZkgVwpssmAvliqFBetIEije%2BJqDQfuaL6L307L%2FTF2ImlH8E9lG2h0XU7Vd5ykQ950KgYFlOtb1nf%2BVOyfKA7P3yS%2BUWbph4vwR1B1QaMwanu68t1gd9HTpYSCs%2BaglppifUkS%2BazMc7tKTu5LzB4lbSNFPF6FoVufcBalocuc8BPLpXGFOzizOc7s7eclL1VjTn694DqN2Nbh%2BeoVFJbfqQjDp1oidSK%2F2uAV8spTGVVw%2Btsi0jVD2afGHnuXofwwQUFW9oRfoPyqmUeBEySxRrVlC5MJlSvFbBk%2BAD4W0kKJI0thwGfFuAcYea4%2Bymh0rCQmlQkWu75IU%2B4hnjNCJ9chqQkbcp%2B8qmhC0WS39xMdEgC4jD1i429BjqkAaS2vCcJQzrL1du%2B6F2kMtTvCreKZ4eq%2BQiegFfCJxeVvqVZiXirBo%2FW36ga5vERKsZ0KPIrG5yhoBISVNWZoCB2wZV3xwGjezJH5WkvDejPcNp%2FqzVrVHcMNyzV38SMH%2B4F2QXoEdxN7TWqmXhOM2iuPjIBc2sJfQ8j57MXq2394ViSohSO%2BugxZE5D52gACqsMipDkbN4gpcRwlwBaWGhTKNpj&X-Amz-Signature=4c83830cb02d90de609579c6d903214e83d6e98fc206503b37a35bf9d369a1ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSEOH3C%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCfR1Z0Lp6aSEL9ZmisZF04I%2FmywyoL5fhD4iFTUqKpcwIhAKyV9%2BAZIquMl0uC8zemsQronwDBxPUu1VJxLm9Ce4BtKv8DCEQQABoMNjM3NDIzMTgzODA1IgwbgBkJpLQ%2B4gwJ9wcq3AN8zdpbd%2B9jRlp24jzEpgMMJxauaKbApCL%2FbGabommNf85zjZFN19PyJq41XfO%2BpyeBkUAVwTVMLmIIQaUxaSfWFGruBMNyWsz4W4tBFGDcD78R0xRN6b%2FUWImyToOlZ%2FTmkCb8fL3FK9I6fnLOpnmGqs2dKzY9oV9PbaugRFdJhsG9nEuCfMIMfkBHmMavTTqZDZmNI7evAKtAJIBzo8sJvRPJTr%2B%2BjtOK2BqFjV3N7JingDfBB1W0XHTPCU1nItRWD0We0AVujS%2FW5HBgD5vW3C%2FFcEKdqUAKTp4QHEPggFKv9AVV0CDriXhK1H%2BjMgJijh7SbJ5CaHkhMNSRFI4XDYgFx6HMEXoQw64iHj4X0GO4XPyKtK4nTX7WygavJOX%2B02qWViW4HZl69P5s2EUosbO%2BGvM098cp7jUNZUM1dZZ9rtg2yPDAFIK3JdL6GGq3HRPTPTy67oAuIXp48OgzUvcDaBkP5rf%2FQqjW0E3E%2BSji%2FXehd5tJp%2FlpvdAlt7PBuS%2BZq%2Bt%2BkEwwua%2FapMdxQmQeSyOA7ZJcZRn2fdE8sPAwEtYcQI36dk%2BbA3WT67Ic1K1KjXtgh0TCHqUVD38%2Fm%2FtMzWVjWsxxu0IT92B%2FgHnHPN4IV%2FPIIaeTxjDdjI29BjqkAZTIwkWWCIH1mb8o0ZsDxRHnEJBsOE%2FMV0ybT%2BJa3bql4bhIGyFYqFPg34oWC9l%2BNdVeDMoZiWDTDp7O8gzzYaesxAhNZ5F1r1iAjCaGO5h%2BdgET4kMUtdjXOwzD8yZfKaGz1Wr%2FOcBXvvAhvi782m9Sn%2BNAXbOkDLk0HbTVvprKzFknXoaWBnJVVWr3XEaI3Uyw1Z3Xixbbf0t6fRnBV4MKkdrY&X-Amz-Signature=6caeb69937e1e2ad1a35f9e9a94f12c1e6b171d89649614a249821ccdfd47c68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
