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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZJHW6T%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6oTdICuEF4jDmKkw3tKWGUzsEJnT5lv84zseojN6suAiArEtLS3nZuGcItT7I9b%2FyE5Q14C5QNemTrNityaW%2FTair%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMkOjqAJMHL18CkgY0KtwDwan0NA1drDhwzo5n%2BCHsWiOIARCGL9EhYHlb9gNlFJgOb86zeS01SHLm93n6%2BanMBd%2FwurEPsH3%2B4H3BvdWL2%2BiNzsmb8oSOSmsgGHPe7zL8qG4YD8i0u0qKFT3LsqLYu7UBHZyHtdci8xfUzWaS%2BSWSwJfUzKJdX4vXXS9qexEmsQa1%2BXd7BXvU%2B%2Bt1G3vnIW1d8fQYagNxqPADqxwnsA3bzeGzUAPfDUmA6ui4U6OW2GOOSasMl57qhZI1bn8TxBHSJIwhGTheOvrhhDn9WaFan6nTNJt%2FIE4BXPTHh3pQ4S6U22bdqeb1apz9jqra4aT2W6OVArZbk5M3ZD6%2Fr4wJSDf6Q%2FijB8keE%2BMO3LjasPnOceGQgVEeTOJkFPcB2AkBNAbaQaYFLC4JNa84Sdo9L9rsbPsGsETAq%2F7ZOKnC54h8Lqn4lIoZsFqDo%2B3as5J8wXoDFeAHxUTca%2Fe5gyVqFFUGhZrV7Uk3iY%2BenZgjqnThqdwVxAkTjLxCheXqXYkkziZ5XgL2KxjBzVpmZs7pAqa8tXO2WOcXDrysTpDeqaHM%2FelvtOhMTNvrW%2BLGoqgJwaVBL%2B6lV7W34vmIqW6sThKHPjt74rNdl6fBCem2DsHH9pj75ItfxpcwwpnpwAY6pgExsxFhn%2BHvpEJFg4P9%2F6cL8DgWsHG8%2BZz%2FJy5wtBlK%2BHbaOwCMOb1N1QqF9v7ILURmVJwlPXehb7%2BqMhmHxn4gNFCJ73wTwl0fG1zsmXDsUa%2BaREHJhe5n55N23vOszju%2FYFM7pNXgjhzHe%2Bp8%2FjjGF4XDHBI7EWnqfLAq%2Fa99J4OBHxWLPhtMgvAJDOzqcVnwxL0wa%2FSN3oOGoRvvWCZa7ZOvFcLe&X-Amz-Signature=950fcca34ba8cb36eef56d1a9c190ab6f6cfe6a9eab2411ee67efa0cc0acc67a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BB42OMC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDo%2FnxdWlKpFVgXMBGpgsM99KBS7g5lzQEAnoMGAC0cpAiEAivgC8k4b6vWTlj0%2Fsnld8j61zyqZL25%2Fk0prdgFsIQMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDjwgEhfyE6Nx55XtircA9zskI%2BvvRpkNfugFDOprNtrUskL%2FNlLwOGzKPa52M3ywufC1j4dy3tpk7hbr%2F%2FLKD1axD7tYVLZnm%2FeMiIRuhAg3jnosFp40cbaoeatTrWyNVZAdYQ3TmtdC6FQNe%2By%2BBCaheaOanCV99SHr0GZH7LdiHZJOvczeqApuXq5tnyeYp%2BtY3GIHKb49FT71o2G7BLLlITGXqjqtCvwB6io5gEJBYEL%2F8x1%2Bd5%2F91EGJrKPj%2F%2BCgp8rzc5Fw7MFO5MpbqJ9d9hFoY%2BIMyRHsURf1ruAnWRu6IlD%2F2JfGdEXdgBiyFDrNnU%2BssfyisdJhX6YrmteRzqdH9P9WV8%2FNiRWiXHnR3F0wygztiXReHSEa6UtbxsIYXg4slsBKwzna600ZSHFNK97uClP7Lh4CiI%2FkdU7NZEfw3IfVORZtrVS%2BpJUnsjqg1yyY9sFQIyx%2BtjFir4j9rRK%2FpQ4%2B%2FUuQgE7HEtkRkNpsnOeEr7GH76rTfN%2FEdGuu%2FW6cpW4h%2FVVvGhF15urstc1%2FNK%2B53nHSrzRRJTq7vGzBc88Hk%2BqQdMqmQwPMTrofGNE1ERhAsa3y89gv%2FQ7cXTUcSOT9EiACr%2FoXs5KcncEEOF%2BMcrNMaqEmG5DJs1AL4lUeKtNpkG%2BMOqa6cAGOqUBobMRKewdPWizOIyWlCWwVCUQDJsdr0r3GW7ddS2xnIIut5poYzEDQOx2remol80shBvvUYTBijSDA8qUwUfNSCdJgHqJY422BwhdhoWJ5eiMqHpjqU9lT5BnT%2BRp5pjAOlDwgzUPPpide5iesgWUEUJiKzyWHd0Gqk1ECVRizEvogiDZY3jkpWelxNjJ8SZI8Roqa4vjhh6lfINy8D1ynbe5ZrWV&X-Amz-Signature=ad0f6e8bb2e07c461dd9efb1fe7003a5bd9fbf706cadbfbe2fbab7321cd655ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
