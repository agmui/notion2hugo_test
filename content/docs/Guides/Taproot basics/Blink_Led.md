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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPZMSXW3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFYaprhhFUgF927Lpwyk9rwzlKa2vKJpScrZE%2Bl7YJ6KAiEAnUO%2B0OD0IPVX71t7M9Y0MG4HSrFCZfE9GVyfRqbAWIkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDC4DII8lFeIe1nj2bircA1Njgf%2BCnFvC0obNmlndq6zwmQBPcYh4rmOE0TPsIII5cj9rMSFZWj6vzGDGEkhYe4rVTrN7cu1VAwgRE2BvzGCLO%2Fmia8vx6ykFNMcHE8Bo3SKw9d94bWlw%2F2Uv1WgR8VJwzTmOhqxuE3UgSAhHOShjUQgXjYxpk3NjzHCqDkVTU%2FDDFUwWzUR68UlTvXyHwaEmRPHzQUBCeE%2BoxKmuFRBc9ucdFJ13DUHAqUR3ikH5o%2BstCcS2MvcfwLqfwjvPgtx8M88LTJDLSiehYb8G4Vz5Tl1R6AhD6Awy9JlWxQCA12qhWIYhDUZnptd0Sd8lUScrWclBIh3zA8o4WKNW9fmRd91PjKRC2KhfbDe%2FThZ3dXa5%2BPu54hobKQy54kjiTwunHLH27dTalSdXX9N3pRKjJM0QxzjsTwzRFdHghSriDstfN5MaXhzxXrv5d%2F54u%2FPDSonVKbD1tnsomlgmk1MP0Tj%2BUfmGkX%2BJi5h9NTS%2BQqM0%2F%2F5bjDP43SgMCUdydL7rgiXgnofmnisUXVOCBqJ2IgnNZcZVDRlM8mlHA8aAMs6JrYc0UIMgbdgygeZijFa8%2BNc8XV9LAHi%2BZXzHugM45VP2R30%2FPDwDeZFWWqsN3brAuTbbnvWSyj8nMOid9cIGOqUB0d%2F5umhXkfyQqgflWdEKbNEMaEtMn5idGuKzgPvG7Iny%2BZPRN7%2F9wH4aviaLt9XLy8E3tBEvaZUdziVYW03q8Uzq5Yr2j2lkYeILekAJyPjNRF9SR6ltaYknD7X3OmCaE0lDjE%2Flx3U0JUIuzMs3a%2F8I2M0NK4o4CMH5vv1oYbGDFgxnqFMv0r4RPE05YA2TjFJyShnIBq9DIDG5TLQU%2BwfAbzsC&X-Amz-Signature=53a823d043b43b82e1a91d21c03f1acad6f3ade0dbaeee12fa36c55752d87056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ANEEKSR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGvG%2BFiWiDJBJ6v%2FrH2H%2FwzEC8%2By5naejfyTzlqFregSAiAnoQ1hfwvIEyVwEij8RihnN2sw7sltuLYbFYRjp5eSSSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMFOxLzHar8riwQ%2BfnKtwDqkasnnV5TeDE2F7otSDS%2F%2FaOB%2FmnqR8Bzkd8Rd0IxBLD5Gic6J0lQdf2CthNlLJ8CIFXsOGMLREvCBGsbUWrwczQXHDp8rGxt441YY7wKYlE1ZKsMN5AIO2lW%2FTge2674ooTReRk27iGrod14rcFwLwJE7wCqOj26Msm0VCspQuyCNtkPl2ZHZtDy%2BqcSNmbhKoYaNwlQ%2FJl3ZnBzTpiKrO1qyY3SUi26RGc1jIvsGMln2mgtOXRX1XQOChpVoyeyQlyveT8ZbwHa53vSzHmQxhoxD%2BVmInAX%2Bq6IaQPSnP3EOsI%2FaTQozlurOiZsTSb0l0dpAFjspj8fjo4nTwsrChwt6XhKrmQCuJKgz2HCf%2BAz1gd16T%2FvGwAcT%2BdwMgEAMcApWtpmrvCWOtuc3zYX9GZhjfvnfgGGjK48Gimf0IfmJteCv%2B67NfMHVZjdZdiGz3D9xCeNTI4EyXWObGCVAEFb6Uj0ISKX4adkNi8lAR4kXF8VFcYu0ggfSbrQvKNnJFCWNX5iKoi4aWY8ojzaKvzoh7c6Wxi6Znkg0qDxFG06VpMywKNNWEiLgPwUkcRQJQf53%2FmQAJUzsSCLzQAEsAy8gLfWX%2FG3MeGZBog79NhZ1XfnOZb7rO1SlYw2Zz1wgY6pgEeXY5WNwkBcyWLg%2BudU5S1M5v16zAjT%2F71DMrCto9fTWc5mLS3RoizzxZot3DlG6UTXqu4M39aKS4ArINL8XKskT04sx4P9MQowr1vSnPS8LvwQoTl%2F%2FsrZFVui7JSmOpnRi2RebQY0s1CgSAqDu4Cb%2Fuwlz%2BLhnyk3J6t%2Ft3PuEr520ysvzXiCLf10CoI0auaUY9x%2F0P%2BcRlnYL63XYyQXy5%2FFQ%2Bq&X-Amz-Signature=570407c14d78eba0df4d64937a776ea44b2a53c9caabb78e2134cc056a3eedfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
