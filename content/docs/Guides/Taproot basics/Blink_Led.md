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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UYCBJK3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FSdeSxnHX3rTfyp60aQ7M%2F%2B451yopMhs8A94Y5%2FaK3AiEA8vDHeK%2Bx6pf%2Fkb4OMtvYO3NIqNH66Cdr1%2FCrG2ClcEsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSUhQCpsWUQNJ%2FkRircA5TGGYbqI1xeeweOymbGbaiMcyx%2FNeaq3J4BXVfjyr44z6hwrBWTtFGaGPV3MkDCqwj7Xnjshoi0lrP7lDRpK1MhEFqfKTaMD0iuTQk5vp2tEZa%2Bs9SUXIbxuuqQOgtoZgVGaACTCjxFBW5TLGH6SWmWVoYZAyzro30krDKUfUGDNd1q%2BuRJhz%2BI5w84etQO7YT0rN6tSy44Fa7ib9XOm05B5Hma54SIHgw%2BWb9cJbTUCwKZyxzro1dLKL6qzUPQC5xPkC%2BBIBERJy5AaLlqltJz1t6fhIupYGuoeV8Nd02qYwXrFGXVM5RyM7YuE1WBkP2%2BcGhjx28hVs%2FMjNzUAuOVw%2FJ5LwxXm%2BbQ%2BxMaEa4HPDKpSrY3yv4REL%2BKZVTv2WzrE1uA2VzR3dBIb0N8Kl3heC89dngvGy%2Fr%2Bo7xvYu2VaP02Z0XFTB9AJ2Ei6ksPTO1LkwcKPdSmYiKodd%2B4yvyp3L%2B92x1aiyWOgfZEg3l%2FPRN8UocTrJIMFMVslj%2Bh%2FFnXkplVyxCu65ir4NqNtcaPwbYpE87cyYQE7X4O%2FU9eJZJZztsxXt39s2BhLHhqP%2FWJEba%2BfbLtad2iXElSwwdfP3sCIyDNtvaLPcWVC1DtQD82CCHpruip8ljMJfw%2BMAGOqUBs4GWlxxWol75%2FNYUSSkrd7Z4yvNdktDfDzXxyPsycWqGhVxbZwBxM5yEsFUcZ2OcwgtK7jTzMaGgvwTMnYbWzAZtIm6c9Ycdk3iIb%2BaEzgXFPE6hD%2BwO%2F%2FT13404MSoQeshhxGrZ7Q9u3iY5p80DLtN5efpUNj3mizNWCtMdhLNoYrZIx%2Fh2kxTnznaTduNOft2qVoeI%2FZ2g0xpq3OA6zCKAM4lC&X-Amz-Signature=d8be2fba8de40d0c801f51bd360a57d093809512ff1a0b081090609a31d10c4c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKX2IJU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFYjxzh707m9TO0FH3xPYybZE%2FW5wEP9TlG6xTjghwXwIhAN%2FOyR9SWuiEYQtcI%2F69uQS7t7MovPG3fy6yQ1FiFAafKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaRQkIddb2ADwHJOoq3ANbR5aBqBvWr7nSVENNRE5ssjZFTDCe5NSG7DVcmwUrx%2BMax%2FeUf8SXWyc8nw5%2BVsIeXEmDZlTC%2BaDN9SFrFFI81pHO77ftKHro%2Bragm3RX%2FzqiIP%2Fz%2FmOIgrwsokfs0PnY6Ap3hGwMWm098vujYUytyWWiJVMxzPUuZm8qgZml5%2FfLCiJk7ulJJqMGpjDi8XbSfKU7iNZ310U3oIsjwWQMOL6RQxmGT1LX5tzyxtnvKYVG8%2F4XGh55ul4jQH2ctswFQCzwVyIzZp%2BntT%2F9zt6WCZz3G0t2MqhLbunOzHHcoTcN3hJjr5bEThv3cS1avfciUQcjyGvygOlkHgM1rt1i8l5bQVHGyAYQo9PSyZ2tAzrzL3sT2AYM3FKLD%2FHp6zSs%2F7rx1KNqq5t0TWZVcbfiv0JFsSEffRbWKHVpyWnc556e%2BUuoTD5F1abmMHAtIzsPb16AjWCBQ69yvB2a0OALaQ1Y4XGtSMrlRgxJSOrD%2FfR7u9MZpOmQetUGjlhgsZQ3iBDseKYB2XHYv7h0N2KHt1V9vZ19KEyGuI7nRChNjPhBsprSBi03QXoXCfz%2FOqphbhIiijvrkvgHeK17t6YY0Zw8M%2F4X9XzJpDWj18U2y%2BHllltux%2B0GrFqK%2BTCH8PjABjqkAZe9hUBiW40gNEHeWpIW43t8Nf3ZufYQoj1KXnSEURgSaHR2UX%2B5kyo7Lr9CaBSlDz5g7NrN97xNtbWrT4gesSC0mhssw8qUqfLgaIgssL2sv9ieU1qHP5wFAY4yIA985fP5aRRQx8jmWg5SuClh7aBdHbGxMZYQQgaygASFFVGWu12ADkKHmRiDLlUWoCHvuRqolbN2%2BuJoBmgoFwS9s1X9Dk2o&X-Amz-Signature=d0aca950ae17d64c984c37b0d7a1b020c034f0bf10d68e92501b1a00061fe71c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
