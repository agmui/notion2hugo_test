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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQWOYTD4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCDqUh7kva3vArKUqK5Y0pmT03vITowd%2B9G6NpT0KsCSAIhAI%2FE525I1JXuLjz8z7v3GRbJWuzf0bryPSlvdFC1yONtKv8DCHAQABoMNjM3NDIzMTgzODA1IgxgUo7f01Kxj76q3lYq3APMC3q1X2EzSrkVZgao6NB2yH3E5Q6gFAEMFn3RtjlawTbVn%2BlE5MtxjX55QF9E4u7oZe%2FirZQzENkMfLI40IYfgvTx2Z5zRauK47dRW17ofpy4rRfrDk8YCCftrIzrtAAYomU8qOnM0%2FcetDPEmza%2B1v%2B%2FFIocRW7wsFrFQ5OEIeCOYvPc18B5%2B%2Ftb2FoFtwQWKLf0jXUT8wxrbt3vguD%2BaSTrWczRk9BpxDuY3or67PvF6YUZfK5Z5yu8MALrgSDXRo2jLjJ4Xb0J9bxNr%2BY2UwmGskeRMJ%2BR%2FgUA6mz0GB8HxUEHh5xxVmmuM1Xu67Eb%2FOHyl0Mm2sK4fEY9UzSUfyhgYOgTfxYtjZKxPNlXMRYDB3xi%2Bp15bhW8CFq57YfzdDWfNi5NA1Yj90QGWL3rEOVmS%2BqbogezHVnfceVQbphz5mxAXOybiozRq5rEJ2yOFD%2FumzzkaKxaAa4CeNUb3fjI48c4rBoUb%2BenI8Xw9zDnCbiR1YfdDEiTj4kNZ9qRuqeokt1IC%2FLAkacsIrtdCGaradrqOFuzbA9X4nWnuq03F5d4pV7bDUpTzpnS85%2FW0a6XpBRd5yoUMfKvTNXaE7hFRnNlRFZrs%2B9FyLZ9L0aE2l1jgt5s5%2FweijCz67S%2BBjqkAVxE8AJZhQZIrodGah94RiPKdh9zglFDQZZuOpBAgRtMqziSd2gS556tOWZupOCWKXQ7tPTiVuX4jc1qtivT8TXXmKxSZb4WlMWyvG94O3ttpdiO2J2Eu8chRe37x%2B%2FnwsgQmCfU1fx2w7SHr5DuZD8662RHE5nfwWmjncdj%2F1ppHPX%2BHwfG4CXN%2Fl15ew9f4LvO7yokvZGjgRgBICMR5NI425o1&X-Amz-Signature=35e13bcae46571c9d0c9fe617c6f6522f2b7ddd935b1dd800f41405c2a4f7f5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JG2MRGW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDUhPOo%2FQbW6uYmtDQg2aEVmQJ%2Fezy5qvKAggC%2F3AVvxAIgXxKCxNwZ7Uusi7XYPyS0%2BrQNkLh4293SwYl2j9mFjUAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBEfMrPGgAF%2FVk5oIyrcA5qK%2BGSfFE3nxtV0SNSNAYINl1FzTdIMtLKBOCF6z53Nrm%2BU%2FnLLHW3Yf67o78nyI9a86IqQbDLD5TQODCGBBuIwtsxEavZl3BjZnIwJRBUDMDrfjaHGuCfcYrctWq0h8XyhhhW8%2FHpoRJIieaJ8oQK7m8NYsoCAccZbs%2Bx%2B%2FYdPr0CaAKqWkPqzw1WYZNyFLVc1H8%2BCr%2Bf2H%2Bh3ovH0anYG7lGr3JOipJ%2FmYG9RD28kWiOYZkxdEAtYjtGL8fwlwQ7qW7G5eU%2Fp4gmfuV9sl71IIW%2FQ1SY2KGetWsC7BK7qKiEoukHq1Oiz6oJG4CcG%2FJHi8Q5oRdPwFuJL5N6zZuIO3Or3XhxRIVnYiGsLCYQ2sIpDTL0Rg3mETrdrSg%2Bf1%2FsOIYX0XDuuly2IwxE54a8203PMOFTdJ2xIS%2FeKHc7w7ZVVrwW%2BsTjJ%2B8YfZpZ4RLfQ05l%2BYYz0Zq%2Bz03MM7MgPBGzLZRoAHFXaePcSyTHK86yhsso918rVWtYQGnphpfDDuV%2B%2BmO7fmj0DfY6ONX%2FlwejFa4M%2BlYZmmYySQrz2Z5Tlw4HCSf%2Bv3hr06yxBdlICV0fdAm7USnZYq%2FBfRM%2FiT89VrGKSkKoLC3GacISSkMWsw1vefq1xFemnMO%2FItb4GOqUBBclB7zso9z7UP1HdMotse6XSh159hGk%2BsrFmY85T3pX6zlKju7QkCyLiUn6C45JzVSTdkaX1F%2BtaXyUFbVmXi9U46BybdmW2wHKdXo9b8%2FjupWIPCxu4LTtKGNkHudvOZgYm%2BKJBJ46nv%2F9BH8xJYzb%2BjeTeEkUipZBpdyYbabsecJo8supl%2Bl6OdNonI6GLc%2FynW9tUZ1wZifkzHFnkXR6IAV89&X-Amz-Signature=d0e8ddda49bc84de6126c75145245922ffdae3c4af7582d2e8b85ba2eb4213fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
