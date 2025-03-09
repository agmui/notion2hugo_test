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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IPOM6JI%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCICf1%2FV7Q%2Bt1tV0OGLY3OYa8styUeyHz3xYUK8F1keciOAiAfSozv84Xc%2B9LtjVqAvHXsMaMreRWc0DVQKRwB9m3FLSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM1qn8fhkknlLseT99KtwDWTGODdumf8qsq%2FhJ%2B3vCMoiTKilp44cnbJdJRro5mBDWIZeEo8MBvEupCgNY%2B28oRqIAVgVleScNU4GDdEe21e2eIGfMTxKyk4%2FnMT42laDxMqK9lD2xGv1LGxPWG%2BIe53H9JVCykeOfue59RuDxsZWn62LCe3egxoxkM4%2FBM6mh2U67i%2Fgh6Mkz4u3DyBROQOhYpDH2PIrnL0JBCc3MKFGMp5piS2HWsgO5rMIY3T3kg3VsLtFp270apLyUKffvJgWFnNvQ3aKBdMhwBy6ikjdzY8KamwkcRMkkxNzuPPCoT32EKKDVesJZQf400gjtQYLihYhj3RUMG4SyzvCPFUE1w5X1NHZWJjT74xq1tzFy2uXAZwNIMwqwS4QIDqRG0TZX%2Bl8tm6hOkpZU7a5buGN8UwnnHv5B7JLvl4RQwfY8hOsZrA8PSHxy04GmRIcbRPiz6psOPFzxY4l2VQePTVU0UHBdvRt3ekmG7gkBJ%2FXzmZf9GLUQBVhej4dhVZrvpEKhoNHmVG3puu07OvmtsCFUu%2FSMlrUMmFw77CKCvxFUIFFESDe9b3PaR3uGIfUMs3aBRrrNV6gAWT5kBoAXRD3eP5b%2BDDmlDf8%2F2BA75w2I4UeqY5XzsBp97pcwnr%2B3vgY6pgEZvPLaEBpcmWrjuvaIlW01o%2BH6EuJG91N7Mxx0PDk81jigcBNXb0DcyTRe9T0WzFvdMU7Rl6zuAF7%2B2isllJVw0Kpc9uo322Bj3FoJ5yR9%2BcTv5qxC%2FIXNsHbNT48z3ErP1GTK%2F%2FCBCxCvgupgdwIuv0a47MRXM9S9UF6sKJFCP2E5OlUFPiflGPMw42XZiAswJ7weAzDJC8kahUw8JGiosKdLowyh&X-Amz-Signature=86063d91d009a2bb872112d22c065bc86cafa928ea450811e3081a9cede27438&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KWIRAVG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQD4AtGWSJhQ145GjIw7dQZa5lLDWxAoLFhyEAN0G9R1lgIhAJw5P39btrQkad%2BXAqXPzmO8CYzzSspOY0Id73kkitbJKv8DCHcQABoMNjM3NDIzMTgzODA1IgzeE8P%2FmMdOcZtA7QEq3AP9BK1thq3OUuBLrcYYc2OhHjppm9j1V4Zox1J0l8LnWiOCxg9kczSaH3vZceCDeBoGJUkY9AYBjtrHjJaqKj3naBhk%2FxNv0zOmG1uAb4LetObMX8wBG5gOTp4rSWgl7AdPhxKDDHENGBo%2FKbEYtnr%2BTMkWoGYmjGwoYQuboSVi19NBwCDhMKTo3UIRHcrMYyJ1litYlcTfGeNBG3feBC%2BDNmf%2Fws3Ekbvfdx6NChGrfzT8q8wQ4uKM5bBRlLV80SdW1Tl78txYHiBr%2BFU%2BQfphaKZuCtbWwifY%2F9PZPTEAEr%2FJNEQYrPquQR4rh243r8cJ4geiDIJ9nL8HExI9uvYP46ljFJ6j61bI8LMuXYzWHyBjcSTScIdCPXIwUhGdsjyfMo7jfbzzQ4gDSCF%2BPzDw42qmgxiXPNBpaZ8p3DChtmNR4jVA%2B%2BCHh4SsXEZ0XYHLSYaNrsIVfQjOY8GN23YcPLPfTMRwsap%2BVqAf1i8xyHoeb6jG5kV%2FkB2kA1asbIPPYoo0NJhWbWy2OHIveVW3j5f1OcfAGtzN9g3wcLBaj1hG3aZqCJjh2MJeksxEY73mz2jPql%2B8Egf8%2BggKo0bNzfnfrxqezwGJIfo3ofjvuJKCmjbo9VEkrPBGzDDkuba%2BBjqkAe1yQcjIGspdkJf48feqxltc5QdrLKlbGazJsai6G1n0gxEQm7%2BVqliG82XlU13ME%2FvvalGJwCAIhZgo00cVmyuwdSydAXe6RTEht4%2Fbv1Tc166c98mFFXweZctNNDErDWecFvJ2BNGQiBrWmzcU6kmtRw0QOiJxRiOJtsiFYLcPxmQc0DvRr8z0hOrUcoOBN074wisS926GeZneKMgzBUngqC2Z&X-Amz-Signature=c71199b7dca7cfb183236b3b116fd47342bb43c1a02b83f0ff7257fcff21caf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
