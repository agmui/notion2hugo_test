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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY477A66%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBjMHh0FHqGK8leCv2yF3ZDgLIv8JwE0quRzE1kWAY5FAiEAjIGqlAUdwkOagJSfQJdCoVLnfbNgKbfW9uxGBcoo8Gsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDK9SDuHjjWuIk8K24SrcAzKdCsm0i2dzeTh1r4Pu8njf%2FkJQ1xlsiZkI3Kov2aZl6AxW%2Fn0lHzRz9HgHoxbUmMe%2FK5yp3qhtXBvXCKcjZpRLk5nRqpa0ebpZm%2BVCWg5PMKtXcC6era8fdmmE8LgS%2BUAHcB9gnooakIL1ImFf0WPLzvyhnfFK2NwXjv6Frh5LJ0Ehd2NnjLl8T7LsCavzVbtYAA3j0M3wlRxzNQxT9Avs8RmmZsA7lo0TDR5HkZBNdi11j6q09HgDeC1tvQpA%2BmoYO3w3BXW0Z93LFQq%2BEJZ9ZKDMMKMPSqUv0%2B0bmcZJgpDoRRlnZ8QxhYRC2j0qkoTrHVxW%2BR4tcEVQpotZ8UovsiG63eutLFoy6EEB%2FR9jl1ihkZkcmpwBkbdCX2zRG4bjYs59UAIM61KwfqzCqG%2BDI8r5zjJyiJZfhxrYYVw5X24BDMYPrN1AA4ccTjwszXfZ%2FcSUAGFSduKPyEk2YS7jiJ4l%2FCzo65xw9jYNXSXGcsegqlKryDy%2FN2KzRhUqyjI1ul5N7052NXNmcdEAixo11qvAD%2FYAnbkI98qwr6lNXy%2BlpeE7TOn8r7cRhIZc02Sxx0FN%2FcNQzWXMhynjI5%2BPOzQEBPL0vEkMfA%2BU81EjVTswjbqvDaExae%2BWMI647MIGOqUBmN3vXv1x77Sf5vpE0c8xCfA7DsgEESzV57r9GnHYd%2BYWqozO3G28AzJgCnddqQHYNkbOHGVY1JTKrIU6%2FHSgRep%2FwoXBQ7TcjVBznBTXX65tzmAAFWTYIvINxLWbW6bak%2BBHz4Y9EhK0RCEI5Ov58ihfUth7sDS9HGiOXXJoAh0fDLub57mHW5TujkYEIW%2Ft8Q3OP6bkIVqSbrZeU%2F%2BrV2rT%2FsDD&X-Amz-Signature=4247c3c46887ed1be4c373b117af327e960936697336aff2ba0de06cc5113544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRY3XLL%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIHK5vMeyW8DPv2wL1%2BqO4gpTDhmIq5%2BjTDevfW387iGOAiEAmel0td3boX71O4oX06H3Muom%2Fxh6k8vZkqDVHdIAT0sq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMaHaSDd6QKuLGlTSCrcA5G3w%2BKQlnOMfHjfE7ethWFdA7brunSZngR2PWmysKd3cSbxENPL%2F8%2BdVxdFZOsKMQBsY1JHM9wTyd1BrWXEeiBN6cqK8wRu6yxyNYebAeUHg%2BEETJL9JXu%2F%2FHA2hHExXTA%2BVx%2Fmy6MWy0XKfm05gArQbDoLttj6%2F8WNU8cSbNn9qc33k6s8BFaIdTWUvkwG64Xmfj%2BIeoJcJMVxBA4DTLdOoUZlwxz24ZVxNngUxZzhhwNH2ZOnwHQ0J4B2T4%2BwTQM%2F69H4HTwPs9wGDaCjupFoEV8W21ZVuoIB1Ph98X46ikOzIZcDtUJrMdCyiAXQlQ8IldZJjteB0GLc%2Fj7dCvtqWh%2Fq0FhQKrprlIdckfLBRLGjrFJtKYUWSUaHf1g0V3KWpPzYtXa3so1pqNrwTZ03t0BH8EwQzCCw%2FQR1H8901R2mrSL4MH0FQpIrPHF%2Fj%2FpUikwedMKu5906RxDWJ0AvBUiMe5Lm6%2Bl%2Bj41Xv6W0z0sqpj1kZegceppiVhaQSUCI1G9lQ8cMMYcHAOlZ4rmHnBfpV6jyt%2FcFWXtBjS2WhiY0iCS2DV9%2BFcx8hRpR7eqji6S0nwJ97DlEGsDjK76XrC4de%2FoAeb5Mkzm06nS9%2B5KUbKdzwUuti9w3MIG47MIGOqUB%2B9Q0faym9rv0L7t2GAnnWD9hBRUbPnQQ21MdYCFZwgJ210126T%2Fz7MZdkolZcJodiF2jqpJmPPB7Lyliskjfm%2FtlQnJAC5vcSec6o%2Fh2kbgVxB9EQnmW8uR2RR1D4%2Fz8lASBXy9RfAaqnALcCtuNOVxognOS6ouUD36%2B6TFhwUHlpzu4hcCry5K0n0q6DhaRE3ajiQAdHL1y76FHRjFuWNuwRwNl&X-Amz-Signature=807cc8597a254cadf5c2872fa6f0cc740841f79ec53b27ba4bd002b45e457b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
