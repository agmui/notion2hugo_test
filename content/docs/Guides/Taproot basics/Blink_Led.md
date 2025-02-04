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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4GYCZXI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDkGBDSotYRgcaUh0ikIKJgGNYhKxlOV2cAGay8XmxXSAIgGW%2Fm7XGzm7SWmrfdrRAweG%2BeqhKnaGPkjObCinWYLNUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDgCT%2F7I9vEZSPaliCrcA0t%2BopWzisYKMmD%2Be0UCqRj2dDC5WAdv2dSxmWXNj74keO2ky1S6cr9fYlGYbL8uKjfXNMxzzVcCCp78kYs0kNqWyo1Zo5oW1NHmxcbs4zdNvHTZGuCsH%2FqlqyGrTMs6k3bH0H8oWOYIyg5%2FckcbeaUNcWU9ejcvjrPvW1POckCUWUjjLPQ7Cr1KcokKS1e%2BLtxeh2yAjsBACpTwifBWp8kDi%2BwXL5nP%2BwYP4chkqJOdCztLkUdxWg3tqeWeUrfIMWgQbhbmuaXszrNJInWn%2BRz1qXArygQw1miN77DskhvsqNCgnXaeW4CA9aiPxB05P4VSCRB8ADMExcSNJFqqqVt6v%2BxnYNwdi7APseVoVdVsRX7qPkz5yXJh3T5Az2gzbpg%2BkP66uTo9iPYvaMnRV%2BmK%2F1ckKhAE5nL3R8EgwoQcqSUoJ6%2B6vtFc2lQiX1Df95AZMZmZFB1fgAUOhzX%2BEYsuyI3kapKchc8tObXYuJiyP9fHPqcGLuMX%2BNzrvDkUlfJi2kdMiLhujQjVyzj0q80vAd7kOWP5Od8%2BhsPFQ0rtnRv8DOk%2FdWcnPRefTjHcwWAGCNtvqAbI9RNhIIgILPmBRyc8FcjblatU1zpK0ukGsOTEMm8%2Bd4p%2FBLcOMOCVhb0GOqUBoqUCNIF7k8DBr23c6mcLTYUQwDBmjkrngXVUVMJ%2BEtczmQVDJh4E2HwZatZ3tICMNnK5eicfRj4rQJcktUjdF6pviLBRTKsi3x4E5Xb1A69uJGQ3Qh6gXLIIfVB58sSVrj97O%2BBOuP%2F4Ef5BpJVa2i6WOhh3N8sRrDdBp21fFfpH%2FoQT6cCwJ3%2BiX%2FUh2cTgu%2BTeTjJk15HOlRGxBeRshj4qdMAG&X-Amz-Signature=f0d172e77b95d9f9684be4212e3b1281fd6c37c4d0b596b98571dd2ac9748c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7J6ALJQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQC4WxmbIberR%2B7aN8I%2B84KKvwzSzxIHiy7GSvT%2Fg3N8cQIhALfIOq2Bb6JjRIdoWZUI38L1yseIMpax42ZaYrmPjqayKv8DCCAQABoMNjM3NDIzMTgzODA1IgylEuGNtAUHq9iA49Uq3ANWGn%2B5tApFzI74Tn3WId432VHhh5aIfGYNS5bVNTRVHrzI419rl9noOzJfnpMuAT8OsUpVrHI3HQiyaJxFcg0HgCLU5wdEQtqMU4TL0FDxX1JP%2FnwvVV6FeESn2ckjr%2BDjUu8QNUou%2FHZwYdcNqoPWjZgVDznrmKR4UAk23mBcMaNfZozEZ%2BNqwUReCBA2jA%2BaEVAegdn%2FPDkbEikwLRSyrPlU%2Ff8tPFb1yPR0ZchW45o1Zskk6VBPmTuiLhbaH3WsboR4ifTTZKKGy22Pj9XWakDAr9NudXL3hH32PvUzIPvV6F4EqzCqy4AJDrFXhOKRMrDKwiWFAzjXLPJFpd1wwNmu2663H9Ou6VW8vXn0BlRmcthgJLO84aHFjjwmRXbg75ssmvhQTJC89ELjyplcDJsYVh7ENyZb7sjFMyVilHChtyvGMUv18PmNljWRFy0RGKK5jKL0NoRAjwTIEib4MY2jaUwZmcUSBJhoO6KtgCLpw%2BTKmDVuqCrbR4ne9hyVuBVAXxebAMUBa1n8HKDT%2FdQwWqbUMVND5%2ByiAPoRygKcJQL%2FNr81upl3dTV%2FMy8WOHTMwxasH8L19G%2BFkSIpsapx6qRGgtV4gVHGRaLYf%2Bd6hwKJNSDeN8KS1zCblYW9BjqkAWeJDDrfo1n9tZ42ckTTTdo4Nr7%2BogoT%2B3LRosP8vOjAVaWQBWAKaQUyONrmf13MoX6zz56C1oS1ILRNaa2do3zA1AOwIbWorUWTiJIsHEdEbPmLTB2p9XRYM3WXe9y31RYZFVdWZvzVIdnKHyOfuQYhP0%2F07QJ7RgG93glfcaXwoDMjk5GKIDyq573yRL81gRgGhpy6APP%2BEDrgxlYOu8TvEgP%2F&X-Amz-Signature=8bb344f63e41fc9377a1c544655b004662b9bb9825945b9b2a3f7d3b465c6e36&X-Amz-SignedHeaders=host&x-id=GetObject)

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
