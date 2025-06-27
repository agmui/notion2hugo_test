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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VG34EVE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICFOkOuwkXh4eAScbjygUloCg45dWz92hpj1Y4nmMdEbAiEAuQJjAssiAV%2FuX%2BWsjlBxyfEwUCiV6Jb8xuZyNcS1qIIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKitXX%2B7NSGHhYW1kircA5173NSbg0fGeyYqCvMB8SVeeni8gDy3GcPeWB7yFsip6qoq11XRCqaA6SSho%2FawrtIHIX1GIPH1WPFBnmY0G%2B0soKBLJyMhRqjDQztW2OEgfj1m2Wqf9JvpDDOJZiSMj1qRvrgYHKXdAzkrPTex3dii8IOdk5mwLJZEReeHBsTn7O6qZ38fk4Bm0abTAKS%2Fi3OSU%2BFDYWiGDP6CNQ6UwElW6ttFp%2FN0Sm4LYw4xice8VbK1hr7CNl4DxnmSi95cB8m4fvK9uQVYBoNtfQz1SxOGarfNrzuhqqsXIU68JfJbl76lY0pJb3k0TaevdKWMFQ%2B%2BQLJxAwmY%2B0tqVuJaU2oifGXFnHcr%2FfdLPpYFo0db0dJTrHBMqJVWpLJHogUdSm6GJ84MJaNahPRC5LXNXxj9ZZxiLdnMj2HJOwnDBI7QqjDJ4OEsnMBhjiDSvpahwLKftt%2BCcTkqqNhgGKOGc%2FQUjK4LbGODMvc9hn4JJdPTAtaK3fsIZcLyJ3T3ErCsV9MUDwJM9Q42ncKkMSUwwoxnS8A027NdqgrqyLUr3eVH4EaIC32u9z2Y40sqPDGTNnnp8D1ljm4uOudvqTj1uwEjvW4cpG5bPymfB%2BQK%2FNQX1MhsgFjZjP2bfjiYMOGm%2BsIGOqUBOjg5aGZIua%2Fq8UMRRdbz3MJA1UFZjad27ZhJ3fEIssXaR1Zd6Ah9U%2BXo1dEdE%2FOg3wsRqY%2BdNcnRSEQYjVUmDNYgmMj4CPmvaWQQjDk4AVBEtPUgfP4nujWu%2FQEdNVUhxBd3KT%2FwWQCnEJyuCmI6qqVdruIO7F1Bn8oYkvbkqzDSrn3QHkdpKorKuv9inxTAyWzJ5z5IQMUUJRJJBV%2Bxy%2BIvhB%2B7&X-Amz-Signature=75e815ded84b431b237e4089ea640eed2de5691f88aed818a6aa4ad02bf04a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGV5EMLH%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICKuIky8YWWgSx1XsvgZAjLKEs9kdIsg4eQy7DRPGQbhAiEAvooCX7JRatj%2BXjRswGzW0ZySwuPqD7%2BFLDI13ppTWmoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCYAZeUu%2FCBDYs%2BegircA4iSxpiD8M%2BGSl%2FtV87NzuQanaybdV3s64Lx1a0FR%2FS4VZ5PYBVwK%2F8yV4yp86QS9IwBfPaBw%2FQwBUbOUUXJWqQ%2BLoPDe4o4ktxFz2LuuSasaJsI79XJMqzeLhAm78StJ8EiWN9Bb04o64qunWIVv684HmHUirEdAO0pnsRb6vYptX3yIumD9c%2FxUxaKpywJzX%2BLDRgIXpkA1Nb42cAECxN9LvEzan9NfIX%2FZOfEGIEX%2B5GSui7re1ulqVAICvTQ5ZhxyeoIAT%2BklZKXBQvzYSkAWg6R9B5FIGkOLhI9I6Jcb5cFG9MfjO0TFyIFQYZt3FCB6igwwdvj5u5e4Wk1MRplrYmzkcTvO9pemD8Wr8C%2FgE5jflRvl6Xxqy9fsryc70CBZYNmeKrvbVMcQDu%2BaiNBIhsDr2MdzuIySDOKLc7GDddnfyp77yFobhlLhVkXa1XQ6FIX5wSIOZf7wFZfxBM2ZjrpW2j7Dsnbh2riOgrGcVvppNXjjMT2wjvDXHXAApd43aWILuqs5anPwiW5fy0wJK2evlT65A3BCQX1RVgajWkAo0IFWSP%2Bw5%2FngwXEeJ7Nx%2Bx9oLfDnYfnnnfzV0%2FWO2L2f%2B%2B1HUyzGdyaapGeO63NUvzm2N5WZ4IMMOil%2BsIGOqUB5TGrpy8u0Ox4opovnwHmxhgVx3Ru591misJQ5LvlAAPCerl33yTMoFWjGk24ZnbsFbc4nIRirO8PK%2BGy2ynYwKCglFZVlMpjng%2FTVoPpdKoUSAQJMEBRB6shWTJHzNrQBKOpTKiNXsSvdBpjONAMSzUg3lki84V%2BirFCBJRIqOJHkfUmI7JuRqQ0oF5cVflCGg1GJNjc6LM6ODTDLOp9Qztb57qc&X-Amz-Signature=242a2fb34667d39c3c67c70e9c384b17752e77555dec2646f2be59412d89f385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
