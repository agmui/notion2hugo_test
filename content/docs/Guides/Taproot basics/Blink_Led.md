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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URZSNZUZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAVK14jJADnZCLkiJjcsbJzC6X3M%2Bw9GJC%2F4bnwfEZbjAiEAlRcoDMUPnzL%2Feism0IPKKj10R%2B5guc9xfvTsQ9Ar8d4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeRuG3q8e6KuusbYircA4sTlitFyURdEXFpAnJ3RDvUhkjU%2BNjh7BhJKAQgktlrUFCdDicpltNWbzG2orOsa71fO5KYkEr4H%2FT07urEFZmhnE18RH02B1cPr1KpYy0HnZc4iV79g%2BMZCat0KAFYBN71D6Q5INE8Nh7w8ffcx1dQYh7Sl%2FyX%2BlAdYcIVCaZAd6TvXOJplL1bqAhM6zlfgJdVcJKAA%2FoyvXF8AFtQQrK51RqD2qhWXADPF%2B6cjtj7X24WvPwB90xsMGKOmP73tTqFRFSujWTBAP8ancnNJ9dlq1pz6xKeJ2x9Jp1SOcdpTqyP4XCEMbK%2FuQhoWQzMDmryqJybbSg2J1uBaLaYode14q%2FTkfRphvweX5xZmR2lMrqU3%2BuPn9ct5V52%2BNe6v%2FA8tO%2B0oDDld0BxPo9veKVRxR1yHkHYDVW4vGZM%2Fn16FujIISAfObTRybeDSwiOlfChy%2Bt4RjAjBzkpboRBIzp32ZAPYGewLL83SwS8smo7V1aJ5HpegKD3FJp%2BS8cbV6Qo%2BHbnJ8w4OG3jWu10NinPynd2Gllut3oc6JwiJ3h4xHVecZmqm1EQ%2Ff0TF1dGWqmhIIRFEjB5bTa9y4K%2B9krHabg7Gju6CcQtfFcikS0KrtPPTeaMtZc1RpAwMLaG8L4GOqUByYO3F1Vb2Hz3tDqchx3WtrmfBEXPfBTK2JRgZI00ek6QMStanJcAZjVikmc2avNhkNWHbqUlQvxi0IJgySF7TE6t4Ijoyz8Tvd82lLpLO4tg7S3aHfpXN5Rr5wUSvSC61r%2BGNEs9jtQs7VqhKtPukqkmT2EJyUYqVfvUf8p1o8cHSCyP3Eu46Dhbc%2B5J79ysSahy5fOWyDYMx63qJENI9sn2J3V1&X-Amz-Signature=7a335b23f3fd0db6f8f2f610777a9650f7ce51fc681148c149c5c7759203ea90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZQBJFN7%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHySyaz%2FQw4LW%2F120wLx%2FdTb6z6ADnqkYKT6WScuvBl8AiBMDhZNOJNQ8%2F5IIafArnPkIJVc087ObQdML5hnJbwPGSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK4HHBm%2BxdBPFZ6I2KtwD1EuzvdzoNyxtrNJtKUye1FdrWJxm0gE2U1BotP0Ets7CW5ra0YCJRYCAp3iGet%2BiouIhuzVsmiJ3J%2BUte8m3RJTZ4qG0m%2BhIpCeut9UZa6%2BioO4LUtfm8I1rT3O4b1yatNAlm8iR5UR%2FMYDPXvSS0%2FcRcd43Nkxv%2BOEB%2BTleD6BaawV%2FHjONmAcJ6cEbUt2qNChVjFMFH%2FEC733q16QnMgn59WG9uLZIM7MeDFZEU6%2BLjxClkQRN%2FqS%2Fj23%2F3bwmV73y4X930n7B5eZc4Ju0Fy%2F0JMXSICaFeUZ1qAsopkfBC5fKygC8VwWGFZyeNZLmc3JswMObvvEm02Mkq9jvcPeczoqRCLZDlANt9DapZMHPTnrq4GHALigg5TZIfm3ZEr2HO%2B5SWtJyiFMLGrfBIj922KHzQy9kufxNjc6NDte%2F%2BsAmBEF%2FOasYoZj4U7z4DMdGDjOEE6ghOsZ2BbFJLveQZK7UGbzoqTO6YW2l4M1s917Z9l09knWe6eFLsSeocH0ssSI7ASnL55kQejFQWgu7LDizO%2FGiCX%2F%2BlnuldC%2FMBOuh69vyQuYzaOlrjqVyp5qIVdYoLrCwFxcAZBJ0rVxHtblf6g456xKWplIbUiSBi093WDsYY2ETKgEw4IbwvgY6pgGoJTXYrz9du9bNVhn%2BJNrErkqq4cY89IKpmkNHFxNkg0PnB79F%2F7kon%2Fp5x0mYJ0OAaLkzYRpCb2NSq5R4QlDnr2foTHaQYjqRd6qCA1zpdNO8C0Fk6%2BskiUuFnwvGpCSP5l06lJuZzU7NEtlhRxNQZGLsJhsXG%2B7VxPZea%2BMfgQ0BtM59IS38MJ2D479na38zvQpRkuLOoAOkF3vFunTQmhSzb860&X-Amz-Signature=0a3beda73d698d98f60e6d2717e2457702dd8241b22de4453daf47d18a7070e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
