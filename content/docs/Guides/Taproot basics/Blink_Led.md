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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SC6YYPB%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD%2FEEFHQtYocG8pZ%2Bw4C5X1ho626ARShaJ272MNr1nh9gIgR1l2g5d8RMVTOxTUOgHZPRXVEEpBmpmhV3hGH3zVh%2Fcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEJdN3R643kW7Fz2yircA4K%2FuGiJaPPFwBQEBiummr%2BOGoeD3XArZRDZi01rFujCHb3%2FxOkfOVjUEICQhCBLsYgC8G7Zx9WVkzZSYrM%2Fz1HXu3sRJxF7FF2SpXblsL4g5rARtbSLvyIvVXrLlfelbv0Jn42qAFDsmqBAEpOdma0tOh5ShbDovxPAQmLeG%2FiRHCTR4RfCxDH6EyCvbU8VveuzUdtT7rVejTXKH%2Fs6SpWGiqZz%2FaVB0mEnG5N7x0BtxxePB%2FAVC1JunkgOSjBt%2F%2FyPe0t4jG58h7TFll%2FZ9hVNOOk%2Fh8et7Vumq3OEwK9EgDxjrM6ibABJ%2FK0HvOuEIJKBjdAnB%2F2k4ZbV7XbZZTKhEMazjidiWkJA01T3Kw91lA4HfieNxWhrggC2wwBYg4Kc0ha7pflqCtzTLLb9oMZZ4vR3rLaa2JfXDFvuBOJANWRQqf%2BI0h9RS8cMlsxzhalm6sD%2Bt3yv%2FT2Qo35uQkHka67P976I3g34ShIsirq6NlbgFAaWmZBlzf%2BgBK1Y7ZtMu4%2BOah0Ac1Bqap9vE%2BNoftKJNkDXtRbkA2rlJ5NZ1mFGPdNep51TanrDxes8vYtIBLB3%2B2VSOqDQse7%2Fa13aMX1FFM3elQ8ki4oAdltwECMCjEi5qh%2BuNmrnMJOGosMGOqUBtXUDknHfHDIlHt4wtRyF8QKjySZZeqWUXM9vXVWasbtDGjhMACVjSJSMcSx2Y9QLnH5V1gl9gyuzz9hRQWipSCab5PwtP5vAHf2Qi%2FGj29MGPag88i7qRI%2Bb4CGhuWR1BbpTU5Zebn8kwkAX%2Bmf612Q%2Bz%2BCJfn%2B88%2Bnx3s%2BHf%2B55rWs5vbIB1ePgLOKXqIvShKzxiI0V%2F9O05XazAYE18x%2Foujfg&X-Amz-Signature=1a136ba17cf4d9e22dbada3ac39cebb049e277b66e6704182935b364187b9073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMNO4YHT%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCRBFWRGgj6Pa0N7su3R0kvue46HheqJ82hpr96ok2VVAIgYDOK51grtcazX7uZE41YeCGsRcN7SDKGr20aykcVBXcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKoBY%2FUH5N9IL8Zy%2BSrcA9HEuJtR7zVGVZGj0wbyIdRtZRupDLPqNgLehXtP1Lt8GK36ggIxlmatbbWImpE4AAgoDRscoBck0J7QK0%2BukJmh5c0fbzrFJpEcJ06cAjxy4R9ilZ0dnmO7cYtR7xEmRyt%2FrM15uYFJTpEu4iicva1elCo%2FtzfLWj%2F9nTM3dQFw7G8oRCtc3xjAKRDAdmf1PfOXQKOUbUxJebB3F6wdy6YZ7oxKdnr3Pu6cO12fApyyrK7orBvrgHpdHVlGTdyA43UVw7CWKGY%2Bo32H3TdPrEvA42OXASJigFo%2BWalcCuXyJXkz0KzdD7gTEva7NMUJmVVkyYzSDOV28z3qadvtfKJ%2B7r34IXgueYgYCg5SwQ97U8H5RrnrO5SBPBfD102BH11R0nvk4G3sLuUdl6WdqCAK%2FRVY9pvIb3pEtIBIByCAl4w%2BNikDPN0N3rOeK5DD2L4WmLkZU8xCcBkVO5pBdXSabya8xNo%2BRHukcGjlbJzrkeh2Twc4CooikmLhwF6JFZ32KNv%2BWmzXNn%2FXQv2GtIh6Ikjd3UvdIaMOEch7XZy4LulkvsvzlcEhNa4fS3TTm6VakrTtGxGijglE%2F5GsJ801RGs2NHFWSJohwektDoQYSGqa6DF037LwHl6QMIeOosMGOqUBIHz2DFs755LJoF1aCOFOcIimdE6shgc899mfCdtGdJjv2dWY%2BBJE1GS0B5GrZNOivSRmc79pvRdNiUIBnNvx%2F4wv%2FdjzXW0kSUuQ6Cc1Z1fw6vhmZ2KfbJuceEda%2FA3BintsAdlHDeoFJk03ku%2FZIjYIN9s%2BMor%2BJy4jySMmt4hOyTa5HaUFyGK2ireLrlo9N1CAI4og10FJQWF18Ermm7nbB117&X-Amz-Signature=f0d7534a0cc54ff21af0acb8634a26ea4e710c99ea86a9c9b98ef7096ee7064a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
