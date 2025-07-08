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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUHGGO76%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSCigKjnBSO7jUvCPIZxg6DCIQnTqYh8J6W6yyXRXdwwIgX0OTZoqUPhu3B%2FuDyFPsGuh%2BhPDUKLi3gDXUqfGFbzsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfZpIPuKf0JrEMA6ircA4v%2F%2BWxRSJ8uMa%2BwK9wIKS%2F%2B6u6gJnvo5fJRwwHwjQaBVIzQWgTcEmq8%2Fr6nCydbepJmnQfNg5OBZH2R4la5YK%2FzIgQ1cqQMcXIqvIUDmTvsSMxISWKhHvSI%2FY9xeEXiEHLZrHi%2FIrj7In4dyBUmYlYTfp0Qi86Nd0xnvAZsa92QP0aqsSZAAEkmithQ0i%2B2pAr%2BoVhWw2%2B5HVpxbkTqo7vNYJiXCL23gDDz6rf8dIaB7Zb3EJEKh8bSI5eUBXB1d%2BzKslGxddAXy0mTomWu5zKboSyWR8w8PDJSDqBczerwO%2BAFB2afym7hMbFxTr53WFz0bwdGrcWUmX1dN2A88Z%2FP%2FE%2FawTa%2Bvl%2F4HU5MMVc7hPRR%2Fz5WPUdKWjgIShhLAE8iDR1dyBF%2B9uOZz7EunaDOcY%2B%2FuwAwVAIUd2WhTRBztq7jarjXsXsW9iauun%2Fb5IoDawvGlSwvkRz84jqm%2FQu4%2Bj%2BaEpToCNOyXylN6%2BVpZcfTl4uMuqtRxGZSO2QtdHS9au4jTiA7jHa64nn%2FRbGhgGL6zkjpKDjXl4hvVSPCBlYxdr4qiG1Kli66gDT%2BTZW5zTYlnG3PpXDIH%2FdSGYpH4OhVXRBLOiJocH5buTOdzmj%2BbQS%2FTx8CiKxRMNqztsMGOqUBlc7%2F7fKaM8xwKcrnlGyNI5g3KZvQElMizEkT42u8Hm04nx6pykrE7sgbYExRn2Ir8wXxQi%2Bl4pvTkoxfa2TLK%2BV2rq3WLtrEmAWZyQGKYiNR%2FANTn1tsc%2BbttEgWkb9V3EVs9AH3SbhV04gLCsV17cZrpYFCJgFBt2H2jsYmPQSmauM97mZaSXL40weOJlhEF4r%2F9pY4n3ezGjwmBTfj9EjQ4kDR&X-Amz-Signature=af9c1ec780fa916799e5ee9c61bb9d76bd78c7b620d32754909cf9416335239f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEK6TRQ7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOxXO%2Bm%2BHo7jA9KEe8Hl3SSVeSLdZRFqu81oRemOHjsgIgKGRcLOXSlvlqWhrAQP5w9DnqdAd%2BUG4S0FZ7GxKlbBcqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYzclEf515Y9F5ityrcAzSqb5YNyEY8JGnqVPwHNTxreWrxn9YaJpmGebIZXCFHajvUzr%2BeZsZJCpNktKeCkM76D%2FARpsSMnJXO8m0%2B6YL32sppigTB3%2FJWmNIVnqeofGeZQuEZucdypu7KwVleiH2xkQzDBMl2%2FcvtXgl11nr%2BIZwU2lF9%2FL2EZu6wE2wZVGwsVXP063BkCif%2FvtDkjjgxss8BkHOyqDMuNM1%2Ff76T%2BsOAIY21RB22plSUchIyocgDqtJYdv%2FjG7cxqP8xg70sFSVLkQs6VUZsEJ5Q%2FWaoMMHV4tDGJrgBmgYIoMP5eIh9p4ahrEvTcLxMSLlD1U2AEigjC%2FbS5Ac26nvu7Xd71oYdXFOQVTfHrJZqLOX3lM5cS%2BGhxhJaOO1vVw291cirHhP8c76CYZrYOn5FiklCtsdzSkb1U0ZH%2BKXG8MRd75RroOh5BH1CayvTCgt34f1jOzB1pA6XRdpYWdVkxVtm0f%2FF6L68aIxV8Zxx5CHFHr%2B7g6vlyfmnkHzCaBip5s%2FQ7gNHGZqC8RNKFfNhLWp5x78H%2By03mBHT%2F7rjnxLMzqIV%2FzJctRWkuL7AVfuGawecxM02AMu%2FDHzuzuIhCe%2FJG2GHMeDbhNITxRBydLQIMoHN8h%2BBSBqzIa5HMKK0tsMGOqUBOrFdK7CosHpDVP9BXluyqO2%2FvtkThzvp5inWOBVrp9%2FfuEY8Q0uqIgkTpESh82IR8lWv3ztnAMv9%2FXjzMdjnzZhbB8TTlgjIM86E1S%2F%2FkC9KPnnYUiB840Qn34gXb4Q1o2TrOzDF0KO70J3fPAY2deXojR7FRBuC4mjQJ79%2BuAIoHpqDpXS9CI1cIJGJGtaBqlUNJ0uxMI%2FyThrd6wLeRP7JWXVC&X-Amz-Signature=1a3ebf1515419a8e47d66275f6f01e0a7ed0bb7fe7b853ff01842af99d949136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
