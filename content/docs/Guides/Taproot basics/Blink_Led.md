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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AEQPVII%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjO1T8Oe4phX2vqsT48aRiuH9GIAe8XbJS%2F7nx8GGdpgIhAKPZY42QTTlwJYVqlgehgdVeC8IUaWEGDYrKn%2FHjSv%2FoKv8DCEoQABoMNjM3NDIzMTgzODA1Igzd%2BzQqEZzXND3qL34q3APqmqtQAfIE%2FtGDevtnUShb4mjWnv0JOgZucwMo5kHW6uynwN9PT5MDc7%2F%2F2TkxnNP4gmUIBroiN%2FWhzDk8VUUBJ4pM2zA7wio7XOEnsoi%2FPatZ%2B1gTEpIQjDpMbpAiw9UfLtvinVTS0lZhaF%2BcQC1ccbPDc8DvF7NZtORSfPDDWH%2BvNUiNckfR4qxECpKAnSiOp%2FL1hZ0K87NA%2BfOqitkrOrSvz1NCWuj1Rgk4AQbcAbTFm1ec0IQk9vNYnptLrUPqYDdYBcm9NCg%2FKUFd9YVyhp5LzD0PYPVv81CHS6ZOFASOqqJS7Sgqy%2B1k94LE1jTpIfzHuyAS1tc3dpJlv9lg3G0fj2rz1IUMRJZR8q6Nps7TgqP%2FRQP81AoFwhtLrULqlJl8xJEPaSjWbqyLUF52m7qSj1J%2BCmn5bfRBfs2pO0oAUN3zNKHuLRbgo2YwzWeu7RmM6KUq0zggtizHH1mCS%2BD72hXuS%2FF%2FxxSVP3O4Frnq1OmNZFUlRD%2FOnSz77gF4PtJetY%2Fw0K2FfVPh3tEBtXxjtf6tXmrBrRc3pyUElKVhj4CkJTF%2BCJAhjhNjUdCyOvVC%2F2VG151c6mrXOAH99UFsKVs4b8pHu4buBtAimWnvx05L77rEGbWd0jCzz53BBjqkAeY6HLMGXc%2BJ3RfdNNUOHSo9HZ2i6cdrbcdNH0Kd%2B0TJOPAqke7dVMIdRzQGa9dv24liBn57IX%2BVJBVzIEnmFPUcKm1UE6J5J%2B287JgdtFlutm3Ln1pKqkme1kSkMgHXZk%2BNiSIXarpJCENpSmYBPAg%2FWV2dJnMCGyKeo0Tg4ALu5U4AzHPet8ZQVMFDRoD3%2FRMUtm1efRL0DZoUu5mLxQ2HPK6W&X-Amz-Signature=e0d32f2ee3c28ef2456fe8b30ade06f86be24ac6e52385caaeb369a6c1681002&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPD3EES%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsLjf07BjbwZLKsBY4jZiiveUlxTGq48IhArOQeAOTbAIgeGH2wcvwn50AWubc%2BU8lphzAEWc15WKkDTJ2bhPgqxwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDEXbILglR2ylfHrJDyrcA5jPZ4sWvrQ5ZghX%2FL1%2FEL5l3mcYj5bkTKAKFDQR2xUCe5Ol%2Bj00lLJztoJGuKLzsj9Fu%2BwObumDqq3%2FETc2hrO0gse2mW7jXJlzgc%2Fc4o1U3XajLQsA73II2UjddlPAqpjKG1JktyKZM5%2Fic%2FQhW%2FVkhJZHOnA8rLdZ0i73H032Sir7ujKoiCLtcGaqNdLkU5W6SzoJDT1kxiGUqZIT935YB0v%2B%2Bikv0gKuwszc3YgnmxFRzkKowcT2SDrvzOf9KYx4jspz2Op5D4mOFgqwCprTY57l1ZSorr0Ou79%2B2%2Fe4t0KpV8qhDscS4DaZty%2BzsfL%2F26OPJKa7jK%2B1sB3FsgRGp90ggQcmqUxFm20LQwWO52MHb9Mxwcr7NF2bTpout2NLBweKgjapuRBwfdw8CG9PMP%2FK0Y5k3i9mJt97LvAyAFpIezOYlBzChGXxhqVls3qOYVu4otErIrHVR9pQG4v7oiq8lBdIUKI1toHqb3PpaZklTY88tCR2PQRwrOCuCvCxS5c297JF%2BqOk2gWXis7ITJCL9DfTmuRPmi1j1cAslU1ah3PsIp%2B3buEqtoZVfeB2UDPifIoGTdhcIrvcMralVuBA6cyLr3VC9PI%2FCjliwAk7kfQ90w2110RyMPXPncEGOqUBTyMd4ejWJ6gOuJjsqnEzdlAETRw2768MNgDq5l2hWedM2KkvxLUSQXG572rPb8F59eQB6rh62Zvt9iEQ%2B%2Fx%2BZhG78M5QPVlYtRNpqAzQEijScabPaLAHcnSesDbqoqKzv%2F2Rlru94f2AVyI%2BbaSc4A2gFU8%2F%2FwgSvOFQ%2BaAEVHQOM5VH72rhUnIVxel6qTTtMaY3av14Xdq2jBBvQOoSs0tp4LRd&X-Amz-Signature=47d209185e8021a8cc39e520253a4bc86132fc5ebeeef2e442b9d518262a8589&X-Amz-SignedHeaders=host&x-id=GetObject)

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
