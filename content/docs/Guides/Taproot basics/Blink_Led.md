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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UMRMZT7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDth6L7LoRk5KegrB15vCTmv06lHpMq4WehEvdNxy6pqQIgU1UWXcHXVCpYc01c4nM236wHxUH25XRGylH2GH9UzAYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBG2%2F3%2B0ck%2BoxbhHhCrcA4qDL5OeieKNzumYaRpyo5WEL%2BYK%2BnOPmdlJ5cy8REXDLucHtg6T4Qb9mq0US11%2BkxNYgLsvKydn%2F0FPewRR7YvedFcc9IHIYrVmbLx6IxGc4IH6Wab9C2cQZuSkUZ%2FV2B%2BSLfSTxOSIQfH0ecsCL6d632o4P%2BXRMbSpdNnz63cvksgtjl483DJr9Fh9fVdY%2F6JwADXdGJtaBPx72QmsTJkGE3aIR4lDqWhLABxV6baMHYkhetY%2FbYIbq4OvTm8cKbaEKR%2FAUtHPh7%2FHTvIQy%2FsslSS9byPApKKnxzVly9ob%2FTDFW7sxe%2ByI2QXGt%2BtUuPf9jtpdhM1j51IJ7RYiG4i2newX3Eml0ljj4lBFdbkZOhS3bruyDBqW43qJFpf7u0LjY1bIQ6Acltl42btlaD%2FOg9q0ahjXXRRfq%2FpbcBASOwKaKK0OZ7rNzhmiP8JH198yHU2Jf33iDN2I08wnXBgWlm8cP1npFnUbSfsNn55lWmwAuwZOzef6iQEuu5PAMoaeJQdgdyJpVbzvW%2FOi69X5ao0K7YaqXjso8iIjJMgXPjr4gseF26w8k%2BkBtyvJIVSYhssfzrEBr2OIjUYHLYysQNuR%2BwZJGTeI9bvhvAW7R7JlXoHALHlFLyNzMJHMscEGOqUBb5dxIEgn7RKx3NpDLo%2BJwUsVYAHKk4RBlhqnCmY%2FbcTuYZdO%2FOb8%2B8%2F3CHXrAy2ce4pH06Z9qecMLWxVKlI0gmLAwSBbRBDqLkwDhCrOLhM9QfX1c%2BzbCyEuTcmYKWaRR2DKsgh0p2ZWu4joQxRuXpcl9I1YyfghxOOTykVZlCIFnIw%2BP9p7Fl136pyjDI8NRbib%2F5Z219SbI3mOnjwtAZw%2BNtvV&X-Amz-Signature=92262dab8b2eb49713edd8a9c9d1078d11130e57f7108656de397b323f3124fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4DREV7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlZN7pWRZOFDo9WCqrJcu6pWoH9sp5F1CPGlmuQfsvAAiBoX%2BBRZUMxr0NAOagw%2FcO1OhdG67889GZV97nXzLUTRSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWaHI91OWDYxcI8GGKtwDSconRmNE04FWhb1Ipsjm0hDX7CZLqV85dz1WH1ZTwEomZ%2FF2iGDbvFdYbb4E9k%2BsySZy39CObBKd465WSOlLfRlO40eP3Yk%2F9oA%2B%2BjreOK0mHXsf%2FHlzfm9rPCS7gol0l0NAe9qs6v6X3MA0oKYMkNWNeVLEkuYbyxzFS5hyUJSMLfMLYPDFLQG%2BF%2FQoXF%2FdOXCvznQQjr5KDgIqLcVDPueQVN3EXs90ZlCzojwL555fZnNFxNlhKORcOZAEbXqJuQrYdFqAcxXXP82j43xAtTDH1kAjecu9EiDqaGGdwEsnTbvAWypDPwYY1KLuqqgU32s8UMuLY%2FRCUMEj%2F99VaXFqcJ9Q6tTXeS880Yu9%2BOBF7o7L03dmLgI0BshJDYxEIVEuF5g%2FDfeOZdq0D4C4OtDZ1FwyhYW4S1Vyv6kUFHW2%2BYpPBDeitmXD5vXkBa1vMOF6EsPGmils8BoANC%2BdY2yB0rnskBjkEpntiflTm1nzM0ZZHP8zrGBHa791ZmQc1c5a5AT99HnRsNZCEEBx4srJuDq1UzKfhMnA4hLOO9HnUZbbq5l07CRncOMOxjYAjfdOlFaK6unDPhuN88mjF65%2BaSuAEvj7WWFW9ghkOBXVJWyRkAbQPsIHYUEwvq2xwQY6pgFg%2FBY5irNHX90nzfyVklTzxJZxXcQR%2Bw3o0si0apSawv3elhRHkOV1M%2FfSnJhLG7TZT9Kf7axa07THcgf57RTOFUudEKZSaJb4FYN%2FL3P7Ob65IraPg7x6cS2U9ZazVjtVlx6s8pTgMij0gWsj5x9giy%2BzWWIWKtv158O4FWXvX%2FQ5hmAZB1XzCevo8OkMK4CkE1oe4%2F8C880AINQmOY8cCTbxByE2&X-Amz-Signature=8d603c446ab2838f90f37e2b2c89046d611ede928d0ef49fd8ff5b51b9b551b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
