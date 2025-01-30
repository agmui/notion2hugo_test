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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVWZXKM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSi%2BCh8now1PXVjsud3hUGao4aghTalnYTV5T4kfSySQIgPTWy%2BbkO%2BgU9DJXpuLJdmzWqkk8zH0dSCOaYBPY3X6AqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZEN0BdVQi0G6VX6ircAwYfZAEOdNtqVYr8oqC1IQj9bPPvURaynbJ4bcoXNULsasCQ4ZmetyrklWRwAQtoWY%2BjyshvP3bOi%2F94MCkEmu6wVbr6qhfzvzmBEO5WfzvDKX0fgZ4uyMMpALTGdlvvtoltzg8HS7dLEuHUxDc0AzjcqvcroMSUfW32gVcApJbPSMX0DnjMG2zTcePJv74wAqzwDMmduNM8NvkCo1MxV5E%2FYgaGXVoKGQzvDOA%2B0xzQmH2HBAWRXsPrzXpON9QMfbH%2BtQFBxPJ0hgJs02%2B%2Fraa2l6GehIQF%2BOESN82uWIqMCaajJ1ujX8R2ElXjwPPk1z916qQEhvctzXGKXwaiXZYh5PaVhVntMZu3xzntDXGfjzxawNCw7iYxhkMJ59sP9vWvMYofWoAFK9v6Ih%2FxNL6v3GPRBuDFDgrG6pv3FYpzt8pUwiOIqQcmvA5h1%2BeWMKnPbjKG1jMCcAS75L4p5Qhsqlmvw4CLMmzhsQSMYSf4LGd%2FSUmE9JQqRDLBnGzqNwu4oXLrvg9kSljhnT2WP%2Fn3ZQnrJyxMmC%2F6qMBrueQw1uSpOUzjnv3Fw%2FYDLQtAe7QSFSjf6mZksgfmWLA%2Fw5FFTEVOLK%2BAKfX4wsgkGTCLMqitJJONdPbnUBY2MNSj7LwGOqUBLgTloIc13kieSYJ53wELMCqZinYCIzTMrkbWcAKLeGDPbP5BlkyBuheFzq739ljh%2FtJmlEDB1EqGZK9QzbFQ86CnE4sl3iPeXkVAiAe1TzknjtNUetUtVcfVWkKASz3DG4ZE%2FY%2Bx804HpKK9Aux8P5lq9RSD%2Fe0NSTropK85Dd%2B18M1CVpK9xt%2BuKfVNgJ0P2JlC66K4jOAI7Qg7z7yRjyDQtiFH&X-Amz-Signature=c066b5fde94f6b2b55d71feee3a05467cb5939f12e85630cdd2fa27f78d6c78b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGZNUSEQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXLYoij3Oqy%2FxexgrUX7A8gTfB%2FCLlqeF88GFCBer5vgIgNSuYtbduXH2e4Kne1y%2FekvBUj2sQkgEb7IMwfgWrBrAqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1mUFamoauP8QT%2BOyrcAz9v5oYGLjHpYhSEj0kVNq%2By%2BPgRuWLnL6fu5CLECsAgkAuDaP0p2aUWrsoEMcEAOv5xn%2BnATswdOFAPs2Z%2BWs%2BOsP%2BU17zR%2BKCJfnubS4mp4yNl3%2F382QumMA46nClfyTeVhpCRXXF4yj8ocrzELZqM0OxiEJ3bYhsC6OJG9g2s5uH21dA7vd0iqxqUicpI6l8g3T0kQV7tAfd8rj7Z1drIKo4mAxXLy%2BhuM21OVzTTburUZjTs4uTle1URgXtgWeQiKziHvJCe9w9Xp7TL2OzKobYBQgrqqNzn8b64dL3oY7ZFhGtsGLKJHh7MzOHMEovpCjtrUxjgwXufPiX5EkRihqxIYRXDtGdw%2BwT5fpAN935d1d89EvHFNtOGUxc%2FaxcOZUPQofXIec5kUyQlC5E9utdZ7LHLp%2Be8ES9ocL4itwuAMnv5%2BGp2VHrGotFoGTtKx89vCQdaibiv32Ebwlgph0MOdFabDTcoHcP2Ae3U8du73Zx5crrFNHIwwZSsRDE72ld7Nlm0zqRPOttS6PlwmawHlA4L%2BpRCK%2BXUtDKwPMeQwYQL3NHzO7mfC7yRZttWqXPRbOwsdznEVDT1d1yHtFHcfZZnfsmAnumegwu%2FoUIl0RqvmQzFRz5jMJqk7LwGOqUBCvoyEwwO9QeyZO738SxfGvFGUZBU3ECwFloZhALDr4ARxAB85h1JxnQ7TqqsFE%2FQezQsnIoYkiSUl5Iw9HtlSbNi%2FTNl0KguO3gJcSIllF%2F8SbhOuApmsHeJa6pUj%2FDG1rSI4fouC1VEZ1zi0Cw8ERERYIJSEHDQ00P5wpZ80JiZTQ4EJKV8HWIdlWOejINNgzXEgD38yUGsKfKlztjey2NmbApC&X-Amz-Signature=b9dccf49d7a80272917d8145192ff8741cd749a46b3e654e56ea59b2125df79d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
