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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4XY43Q%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBH3omZvYeqrwg4xAZPUXZX7L33cuTP%2FrJkTLzwNI1QlAiAfgDBdVy8m1K1jKa0UIQq2vlifDxwUO279Z1%2Fkk8QX3yqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKjKDeD9gYEQFcqGTKtwDn1Hvjw%2FqidDB3IxW3rh0hDBRGqy%2FIprx5rqeX%2FbSwauBf2v%2BWiBUdRmPuDHz2%2FJLF5wny3r%2B0EP0EqMG3DeorAlPcB5H%2FdE2Eyi8eJw9LPF5Fm8LGyvNbPuHr7ib9gtipuONkLNnZzCFQRysmPOZ5QDc01f6zybWRDxsyWLLBRHEChcl3Ieo3GJxiYjbxWuIfKFAwxWBG%2FrPRZS2NIN5KjgscNjVHIeckyzBlUVdmrHLCEuZlHGp0klxAZ2rX8umlbn7Gv%2FdUFcqyaOFIXlzqlBriZsuWgfTmFtNOhV3GfrkVy3kMEDHuOUc2cN%2BeHGaX3iPFepVRSsrOaV51XHYLTVqEKAerstRSrdh9fernsqKUa1g45AY8nZET8EK2UHnK%2BLtlr3aJ9trN7sqJ7qmfi8pBvAWmr5IKtQsqn4zz%2BAciuwyWhKkg27I8kAoOq%2FQF7p3jjP4GeYwpNrhPCPLKDxKrLqo9AEDIvKmBRMMsKSuEuTE7beUp0Yg4EBGIKi8LY4%2FWeP382eoc7rEcKgB%2BUmGj24hYlGe%2Boo6Cd1Uz758BkFRWHdKcuOOU8Ac7zPsCqvysokwk02txzwTpREXBzwvurtQSR2p1O8HT98izYic7OTd%2BegAJDADdQEwo5z2vgY6pgGvk9MoUNXO9bfh7T6WssLLXCZLlXdqAGiI78dJFwxN%2BeXlG9XNGY8tU12QSJFXCt9MEyqxJSz9q1KSXSmLCdIPAo2hZeItYKw2xh0H7%2Fm43pYXY5CqkYtd3lMcYOJq%2FKqwSJDDK0%2F%2BkfQcmBqxGXOO%2BWcQibgXf6CRuvcQVXvLWcTeBekyeTkbJd3yCdl2repNtw36Tv7Q0G5MM7ACIJsath4zEm%2Bq&X-Amz-Signature=73a1e0e909a64e7cde8406fbc249fa3311750c7d573d6be3f748c19ecc11a922&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ESGOTB%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQChRmnYEdZhvj6fMnwKNGWECgh9G0AOkawJoXGMcm9CogIhAK6jSUDIwcM%2BLfs0LHZZCaDGfJo%2FSUUrCeAd1urnFNClKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoKgQsjwaaRlrjdO0q3AP8rwwkB6CSJV6EHWSKkP5AzOt%2BQRJeM%2FCAVRtuqbZiWOH%2BtQDCtS10GkHlQRlE4RePnYvLskyei2viLW05fU1afBcTtL30tBoH511bnNkE3ekhtmEJ0MoqKH24CAFXeqa0TqmOBq36gvT0mDy9MTzK0ozG2GUmwsp7GyL%2FDdiwYkF3OCsjW7TPFsRcH%2Be0RH7qYu3VJ0rVNyVbyfjzElZwPf0NJvDWK0mDEJDxBGyK4NYvn0QFfJ%2F1z1o%2BNEC%2FdMyJ72WbgcKrPi6Ff%2FgYFj8Tn%2FudYdUD0i%2BuFAIlsCyFAkPivClXgYFDu5YCTGmtiOuUfe7B7sjj00WdkUDiNNIGV%2FuhDQwleRKD0cF9Evhq%2Fz1hvFT8zPuC7tDGvQWkgHFia8v%2BeOzpb%2BxCe%2FM%2FGiKV15Dm2PiYaw%2Fy1v3Dh3JZ3x3VMM%2FHr67SOxcZBnKYsqZRql0P9sC%2FXsEa%2FNxT8KWM7x9iksaIzDY%2Bn4yTy%2BkUhr7LgGTjsjlHvdGG59Tq%2Bmep28U6BZwDtWrIXZkM4lC4sMiyxtPUa9pMNnpj0NyR5V3EIMfC%2BFxcrZzCM9%2Bo0jtqdc3mAoPSbOFm3qpNPsBHn8V5Gy56w6J8yLAg4hAV2l1OetF%2F2DTAO6791zCPnPa%2BBjqkASNFQJmNvCAdXT4I1VgHf3NDpk4lSB8NuzGJx9yk9U3OEcYeMcmmFatzHhERCvf5PhVdXJ%2FQR8BaW3gm2%2BiKjtCx1bemq55lbOj5q9%2FXU9hx7D64b7aj1kQFX4iRkNzUkmQ0PDLVoDSJjgyBFQV2jQaovuDFAPOSR7H1XZtQghAwZyPsvxNseZvz0vqYxERYNS6%2F8t22uCObczTfiAUybNqwWpB4&X-Amz-Signature=25cd97b6111d5973924624e0861112a71602fd177c48ade9663d330df3260a05&X-Amz-SignedHeaders=host&x-id=GetObject)

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
