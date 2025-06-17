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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257G6JVM%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8I9sp8TJgnHjAjHTFOu3FokSTDqJQaprq%2FKHZfGzkVAIgZ8WHkunVY%2B5WMsUP%2BJTDRNWG7grLweJBJfkUdmfVtP8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJgKnQ2swzsaGb4pnCrcA4o%2Buqa1AD1eunbh%2B6K94b%2FGyYUfY6pwbO16SRha6Gw6s%2FcUlc4kkg6Ra0GG7b9lwxTFnm37WPgxqpqBlKm%2B2DQQZFoJJ4IU1KQquvTP0CqQp4faElOzvbHwj5a2tycUTenKftk5rASelzhhnQct4V0o0HlQyrbEZcHBLObTCPbngJiEBn3M3u1LBYXY6l2uixAbtFk5bwkWSfZycIxw2D%2B0KjepwQl7cPTORlCW6rv9wd4YRQDpkx654Qaq%2FADwxVvCKZjgLk4duGYamadt4Q9gB3YsQEMaqir2zg4QyfnHcZaL3gve863RkZUyZnzsujaN4GKQGPEtlEl%2B5gax6gAnGx7mjZsg3vljlfj0nS0OJJn82enHkGsv23dRh3UelnZdypRogbmm0n9tOYcQvaaE1iLvvjFUrq%2FO%2FTAzzL%2BLbsqAm22I9F%2B2Tv%2FmweiLyrHjbLWiJma%2F4VY58BaK62ADRTzfAnYpBe3P0reZryqgDONIwEHsUt5NTN%2Be8Ap%2B%2BsrNJ%2FvMRX7n3tD5%2FZWu3%2FIp4iAh4qJxEJ2lcUQsIHO017IieIwfU1%2FoZaI7zOc5X9e5sVz15%2FrTfe%2BRu5jxC6lnyWnl7uSm5fpnhZPVPq8%2ByWNrdRltYThNA6DJMKKJx8IGOqUB6pqy2PdcT086V5CQI7g7HsGVF9T8ebMJmrYTm%2FkgJeCHiA2cEeFJzOsudbpmwqtsPdXNf8YKw%2BF7O2cK0AYmM%2FI7r4Lt7iMMM88h2VMoSAKIzJBlTtybjvkSZTWO3EdWTZUHzYJsnmDbLpFsdIXHsH3PZUzX7W7iEoFWqzk3vfF6hAVySk5%2Bn5OK%2FBFfi7V6qq%2Bs45Uexo9zLJP6WB%2B%2FgxGX%2FAMp&X-Amz-Signature=5e655a78934e3fbac362eaeebcaae267fc9f4b67400eefdbfc97511ce079f75c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5CXHILR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuxySifmky5NA8R%2FIDLVxA7CmUPs8XPvNLKhCRJFDQVwIgN3Es%2FZ7%2BDDoljXfvHLYQTslEKkjCBEyMvtISwBQVnSwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBdbWSeXemInbFk7myrcA%2B1a%2FjBSkPJ8iVdyofHd%2BfIMPNIUvZPChJk9d1F1Ei6TLyvLxVOvyGrJAfUBRNtHjHghYhhRCN%2Bsjph2b9SiQ5Q8AOCdd3tGdkEHHQBotC8sDIwlknge7Rmc4wlSXq%2BzF1GK44xbecFLNrRo0UKAN6ZfATgIHD%2FWyVjIfxOjUR0DhwzON43ToMsApWPsq8LWXfMjxng57pgLyWHY%2B2uc%2BTALt%2B%2FuvLrvedlbMZtAam1KMSD8huY%2B%2FtyITBJ%2FFzIozfMIekkKU77hyYg3YeKjBB8pfNOVRkoN%2F6Wqvm7u%2F1YAWZMvJj%2B%2FkmkWfRKJtUyGnrKwY88FlTddomu5CSeuijzWxBfsjSu4Vsjpha5lxQt1rE4en4El4GUGNcQteW%2FtXEYEGHoA4IGlNeaQBNsEflAihdMRLsfYOdhU2ItQdQD%2FHy95uKXA%2Bn5mBfYH0jTJNYysIPjHGDRu%2Bq7Cdz7sTwGnkFPrBeVGPg2Tfkgeyhp8d56ie8L89I0d8Vpi%2B0qKD%2B7f%2BGyDhFkW%2FlXI3eV2jKa2EQdLAxUXxTI33UuRwZ3goeMEFJPNHSn0Udsfu4yMM4ULE3ULfJkleajmdK3u7ReCVX1OGxcqZH6eofzyJBigXBdvRjf5zlsNOfy7MMGJx8IGOqUBxc7yxod9%2Fw197LpaY5GYFG4C4oehfKFxFsfQUoo8ugky5IjvmJvavWoriEIXKEMzswpL64gayN8i6%2FDd7RIJpna3Mg342ZBSfROEF7chhX7NJIHYS1ElEQFNmASuycGaZwldLISWyI9xrU9sZUMA03YEZect0UXwiQQ1%2FcFOvCdJ76PkNlSmxugbU0uRqmW7Tcok%2FG6WAGz6JU2x8OEdeBjubPce&X-Amz-Signature=3213a9272249919d0817303e562a99060ea4c38ae8b8285a4ee9dd23bf923cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
