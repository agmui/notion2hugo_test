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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYJUFPD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFESFYrsQmMPtrtMkX1CdMevNldTrBApaAObu0cR0upSAiEAs1L%2FWlvpFv4HYS4RHaRTql7rGSlLv6z3igyFYP0l4poq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEOLh3bXxZaZNA3M3ircA53HdWB6hM7iNpCSH1BBg8mg0v%2BCbFBqfGu1Q4wip8aU5PnpC3Usf0f91f5KU6MR6NjI3L0xzUNVARmXTpGLVMF2CxzFTI0StFc7g6HAvwzjiHZT4o77jAXw%2BBdjvVTdYgcuWQZtlDaZC%2F8Iimh2mYJvRTLiA0swJZ4gTIXFP1YrxE7XDfcyZZTiGsRgtLg6DOwd3cxN3lebjc6ZosBBbWR%2ByAgf%2BHGJs4hRqEaoHyC8I05BsfyuZ%2Bqyby1NZ%2ByKQWcWpjVNvRlGZC8Bi%2FyCmxj5iVqF9QHgT8yV%2FBrvqRXoidm9oYvCpk0htjONY%2BZvSw8oMZJrBd2VPvRapwwCyvHEV8%2FPpOltXawe7EAXKvn%2FbWNEsYrm6kmYl%2Fp7DpbHQ0KR2QvdAs2hsA6yTTbeWLiLZV42e5umSG6WMXj%2BvsHWml6MdqVP8DqtMHlu3HrkYqYrXLpYRDgDpWYFJATrpkz6%2Fx4wsmMJpd90NqosLlZjlQp7ve0GjzPIqWLLoFnyoEkf2U7ntMppUHLIEx%2FA50MlOjTHmK6tNXHAO5wNWr9Ams5Bf%2Fo01J7lT2CSAy4lSe1D4XHVqxTY7iI9U3WYxaFHG1dhjRyV2ea185A3Pvth87lXtn17lM1kWeUhMPPNp74GOqUBLFDh6V4uKpU2doPq5zKdPeuRK65ivcYSk1w7xgclz6vTQmbu5Jh8hSVLIT18CAfzxKhMv%2FNJg5p%2Bdmxcb6HhJ79PZfy2XRYAwAbLR7C2X61riBmy6RcZ8UMNEQ1fUOOp1W21WC92hb%2FjzJ6ZppFBAzWKEQ%2FPa%2FbEEeGir5wJBqNo3o4AFBrwV7xV4X%2BDJNbmCtn9tXtsrLNE5g%2FLa6J%2Fvi8fT%2BRD&X-Amz-Signature=b19a46f5936a2d9f8b536d5c59b610de044ab180b1eb97f98c03277e71cc83b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IVGP4CF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIBLaTBx5is7cxLhR%2FUeSJdZ1PFdUCoSf6YLhQL3CM3QIgJmVlQgRQMedDD8GiZzNEjPfNoQtlVSG1s96CYVKiF1Mq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP89RqD%2F2HSH%2FD44aCrcA%2FMNYCmqVUUXWjcrrnwP7yYcFlCOX0BCX%2B2%2BzRciQCzUGa3%2Bucb8KMboCAF66WTlaCX4EQ%2FZosVguCSGUFkAQRdH%2FdYgWVeGWyv0zjDJYqz4SHSPKWASo%2FCeZOtHek1s%2FwmT3xRLR0QUswW2cRNx0a90nL%2BqGDPWkDy2AX%2FE7lkPbVZZm5Ld66mXJAlN7I9Hh0M4YK3hDSbGPBEwDDNDQkKZE%2Bwv5pp%2BsfWf8R2Y%2FZ5EBrd9wkqj4HTqSks0%2BAFvqPcCdVk1fdXGAQ4zInEsj7MAMb0ncc4VdT3ssJsCyBk%2FYVfQvyQ7Yelgr56vpS4wiKdjJP2KFpeLqecrH4OML0KwpuvfParmagljftvRkZCGcoteLU21G2tBnyLa%2Bq4Khxny3qEY2mD56wkpNb0w0tZnzS5ddhw5on1lmyEEzQS433Jenu8M34Ex%2BqgvbaQgSCJI8Pn15AIPX%2FmK2WGj4LoZXD47hps7vVNXMoz8ZjOIcrFZyd1IcDJ1wbN2ARExx2e1iY45BTiZ7H9VvqzeZBPtcsRAtr4htvCGm0uo9%2F1H%2Fdbe9DsdAFCLgUstqM6VNtC3vQTISTq1Nh9VXbDwipKKFnTXbuAqkNpMP%2BfaKtidCbR6Sau3dFqeTY1%2BMLHOp74GOqUBkULccJgpBZ5k0rBxrOWBJqtP5e0dpfYkfhAseGwF%2Bg3qKGHGJpoUbeRap%2BwFr9rOhdMkWCbXWdajxo1axJxRsAbWtVUSL5%2BBV0702vzN8qloGbMISpLTNiqAZvVKN%2FSPJqvfVOtGXg3XgdszMV5aw359pEu5Ed2aTzLtGdiXuV7FQiGR%2FCGxTvzJ4EnDKWoienul0CGSteKTYDWopbP5z%2FwEYLjh&X-Amz-Signature=862a38843cbb1094f2718bc8b20ceecf3b60d5ccb81d5f085406ae511217a222&X-Amz-SignedHeaders=host&x-id=GetObject)

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
