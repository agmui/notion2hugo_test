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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ25F2M7%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEN7L%2BlFmgErutebg384BngFyt3RDQqxHisg6n9WpZsgAiAyUKkI%2BeRMHcXXkXr0xdSw7cHiRKuAHadbJxkgg2rr4Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMRMWdfY11Y8%2BNj7SGKtwDP1qql6m3LAQBY8kyeeaAI9FsdgAOwQpygTo%2F1OXCJb3RBk96oAVmPTrmctvXhCGFf2CHVbc0j9Bme1I8aMz2dq1uBViISRW5p5EYU9MAJCqZ1R4V49ifB0ljeHTO%2FOXsia%2BQE3l42NQ3aNVH8mz3DLN1vyOxxZC4MazY7cWgosRmCwffEVOO4u6T59OP123WDV9ibGbHXOa%2BXY4IZmT3ZqO3rhcOSBaMKt0qisVuMUqOFmUncXi3ygv1CFdFZJqA1R6%2FNM5s%2B1ZMz6PV4%2BKE3Di5zm%2FhDWK5uIsjcdimwRgYEBOfh8cwhdk8JlGNdIitwpmt1lh4ZfAs8evuVM0HNs7vbMQAuvqMNxAmrwmQdubXBuY6ND4w6UbdXftN3s36XhBJ0E0K2rvZSThdIwkiZ8omUd0g6hBudzSkExgSfJ1wWrhL1EW7bcl1OUHYZWTzS7FONl89Q3lp324JsUbdc2piJBmZUALIgcZ7zm48HpMgYTSPherrxWgeub6tKc2yfXMr0%2F4RVXIR44ze6J3Q%2BfyKMst2absbNWWwv0i3IdD7AWDPlaVmGbMhe9v6vFKh%2FcFY89QA6IPWOhnKmtIwVXQo3Noq6ICmWz1zypQlWOccfwCGWLeQcu1zkAIwu46dwwY6pgHkavO3tvc2ERP%2BirUB%2FhX3o5wj24gPTz1tOH9csw4zg1aRF5%2FuBd%2B0gbZ3LuvSeB6rFYisOEsuuNxKWeRqZam5BcvOlBIg7zMf1u7ZO0R4wU31NhhsAnIzJTJ99h%2FqP8Jl5XM6Gt%2BHWkGu8yKVKfNgvLOISms8e0L25N1CnEb0hrmYT6cTR4MijxXzJjQ6PCKdH0NVac%2BG2aFX6iYK5y53l7hIuHFb&X-Amz-Signature=636e49c7b75084f715b5046969c12f0771783d88459b4dce80b2fff7a1cf4f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JRXJLPD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCliDKUhLRK3bjeo7puoNAQtMdHKa4hHrVLDd7p6hOBrgIgStD2ktfIwN2NsOoclQkgeOD9kAn94I2Qctofi8aaWuEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDBVgzVz3bsjoFSKnCyrcAxi51QjPef1BFIBkXRcBJhbMJuBfM957RAAfZx0lm4%2BI%2FLz03ecL23U7VYzRYuMhPsYTk6kQErugzBDyzUVCrw3cmapKeQs%2FxfP15qbVLgBG3ecevST86%2FXPrGOrcznTRKOI2IUQPn22IQ06BuwmepyT00UzkoyrRSvF2NnmPX4eH9UHbZ9Zd7hsLhyVsR5rj0yRmO2g3oyl98210ZVw2YdH7LKw8l%2Fo6SaBGRpfWFO0SqV85KkEyoRk0nbCNfPiFQMEpN83liDYzng1dsRVqcJM4GSYg%2Fj1HVHPfqlT5tAn59hXsQX2fDJOF0k8uP%2Btn29a%2FFfcw1IwlV51K4TnzoCc7JBjH%2FVsPBujZLcP65RQ8%2BBssmzlJCWWJIUbfcJfFfJrU2iv4hem0QDhSoT%2FMY7sL71OCWiz3sd1N%2FS8bxh5r5QD2wkK449DVVSXl3AYn1XM7tYVV9Ms5K3HXhb4hjV%2B4O%2Fs9dnMJlcUN04CGCIBGsjRr6EY%2BitCYYLMz5FnIxwovsVI08A2m5O9JU%2FVxafF3uEbrQcXObtNy6W3fwHRYyeRvm2V8VcpA3M048%2FG3jgt9I9CDoidLLkfeOJYKVvz1JoLYHh9hXQXCQg9xxFoZ%2FQLYlbEzpGInY39MMKOncMGOqUBHFd8PYvLsSCtviMpw%2FXvwGww3cK5z%2FAYkWD%2BzwLck88%2FCrBSKnLCfZPBJ652r0VMSbdS%2FBwWZqc6NiVidhDVqh89yn9CFeJvk9ksbBlaWZqNPot3WqkulFE3BB2DZRCYgmy5YsPILzig4Aj4UFxQVtL3LgNC%2BPFpvStBafF6mFfFEE%2BCcWsM5RyiEKLM9JDEUaquHQHk7W%2Flr0y33NThM%2FpRa%2BMv&X-Amz-Signature=b562c291ae7eff3ec6a7a30c5041563aff927083ca024949b72d0ca6501cb395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
