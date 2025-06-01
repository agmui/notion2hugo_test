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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JY7OGB2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBzd80vfg0e3Q67R%2FCRitzqdd8%2FP%2FT4IW9W4zoUq4Y3GAiEA7%2B%2Fb3Sz%2Bbp2FZ8M2QIjx%2FCNKUPhkIe%2FGIZOnPJGgvzYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGohdhuOsSBg0YKwgyrcA%2FTVGUbccsyvDmwLhPdUdgn%2B7izmhA929cMCRYweAjL9cV6hixBgwT4ZuI7rBLqThUgCSZk0uLjyodiP4VsMg7K0DdIs3wZT9Og36RE93V%2BzWHoW4OeQTTyiiCBmoyRxAdoJaq7yZYyDcFHtE0OeHMjcZEQQk0lAnoyUSn7sLEsUlv2nhoJ6Z3WFAzzpdTWcb2EI7lOeUYJ4EOQaQUTmc5oX1HUGnxh8pIecBHJVb44mjRbVu%2F651uER4nyyUvjZgfq%2BODB1j1WSKMSnHv%2BRTjLAEoP%2B41OiS2bWofyipCDhuCk7DBM3XvdkKVA7V%2BxHzk5p5e5jDAOmo9yyNw6mrY9PsUUxA6GZuTnXoOhTKYFVY8hjJ9sIIObOJmcRut9vaPl58Zp3Exg67STVGD8BiSIzrLONVKD2GPGUJPGZmfCUwtwQY%2BSJh%2BuHNQUNOyeH24p0AS0NHkjB%2Bc8a1NfmHXFAIh3SWlaSK%2FoHr9ZCzTKNDWyahbNNEb10fO7BNkmN53nBzpiZ3QSh%2F2UEg4oOD2RWNOgZ56PzmGbr%2FLFJlR2NJxuDEQbPHcz26sTd7t%2BiNN5NF6c8mUNAUxdeIxvpMprc8OmRM0b19mWraK54dfjmQDiQ7E5NDH9EsSgTMNrn7sEGOqUBiF63sHy98TpLHGN2JokiDVdNyaOJGO87R1ScNsF3cAuY%2BnCFEPDnN7fd65xJgTaBhaU%2BSQ2B2AdX78J8xxqnfXDB0YUALUlZRUH9WLYTxWGSKsQ6whxubvvVqss6XiqoiYAyDNXNkaxHt14RuhUxxvVYQMLXylm6I80PFwtHZAR0OlbfgpCamoSAufPsf9zQiZvqUAtuXsM04sVHjJ9Rc88ub2ja&X-Amz-Signature=add59360978dd6d440bccdec06d6c355a4f038a5bae9a5dd5d1b1fe5b3377229&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I7AFHXG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIB63Hl5m%2FuI3%2FAJJobt0quI3yPjI5ZSkU8ju0xvfBkFPAiA21%2BNf%2FXkwk%2FMc%2FDk%2FJc1wb8mdCcbO5FGPY6GkXTAKDiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbjFn1pKGj6LkZCD0KtwDEmdXq6J%2BckwQMY9IaJSrfU67QGzz0elDOOvR3gVBovF95kPm85%2BHVbGEXnx7lyz%2FFlNTcNzyoV56lvNb7AdDugkl5m5KWVy00l5yTOWw37hCp23xev%2FW7Bw%2FCqlLr8Njo%2BhFJiKDW4%2Fq5m3p%2BhluFAY9sOgds3mUzDtz%2BucyfZf97RKdrvHRBc%2BHPz4iDrUZ9LF%2F73iQjQSVAp5OZ%2BHyVhT8rHWNMZXrMBJMd8xvW%2BXxuQFxY7t4IBc7PXKiCc4ihhlnp8vxKuoTP8DkC8rGPUr%2FV%2FWdcF8ltM1LRRHI%2BejO5TRpg6LIh3bLGfQIRAS8uGQnPDZcDbHn%2Bap%2Fstw4xmBVFV8KkkB0fPyLbKoL0SwvB4csSsYT1JapoEQmJDrdrYhv1q0Lt6dYGB6ZTBE%2F0tj%2BDYRhM8pPM3w4F8byYfUhAj22hsFy5PaALInIEvEEKAzAKI3cZCGX47Z5hDE1BXgyXlvQrlb0O%2BqApNFl77KGbEI%2FJDSMJ%2Flc%2B2V41W9B0f1%2FEJVak3H4G9mC5LyT2SLAasArEMuISvlu6OLV3Ko8dxjk7r65VrhVjyF%2F7i%2FeNs2PjuXcwvtl3ct%2BIKhtjggLqO6oOIV0MwcG2UErWHPtr72eswcbu2CJpIEw2%2FLuwQY6pgFFl%2FZyW57LI8xJ2Slc5sTPnvsgMKXBCZWohSiFjQqxx1TSw6%2Bk3s2zccjvTvwVywrZtF0AFZh125MK5BGUILEDK%2F49ZKrQeOYQiYB8Xhx1S9UeG1AGdzoVzPzPHYQvSW%2FqUl5Fwa4eqG9Ow2Y3ySpk7PzfgVGaWU%2B8nDsTFs0hMuxOv3U%2B%2FrqI25thu0InC0HSgpFk%2FDlD2utWnsKK4hSMaWP58BDn&X-Amz-Signature=b27e5829f4c098433748bdca0a34d606ac21b5a67a0d2963484ad505a3c48478&X-Amz-SignedHeaders=host&x-id=GetObject)

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
