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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPECRXZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtpPtnS8SHAEmgTaFyJ0WfTm2r3glP7%2BgKKqjfQ8Cc1gIgHZCMtqjpLG5XklijD2GpXLBQoTzyXGP4Ofko24XB04UqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfmbTa9Kv6cMIO6mircA2txRsRFtG032AsWk9iG823Q6dp1zhUqG3%2FSirNBV%2FzaXz6zbKPPE58GIS2BmQXetLwEnJTP55H4I4F6mTt%2BWTCHd89OQxJp1XLOWwIs92puDj7OkVbuQg02X5QCBdm4ZITPoUOSg%2Fq3%2BpN0sd95Vj5jiP8i88cuf13M6HKCcsUqWNLrbBeYQD8eoXZWoH%2BhWueL66OqClAgguFMJQfP%2B9RqS6g4Hjy3X3UX6%2FKy8yfAITDwl8yXZIOYdCmhl%2FsWxUuPXf3oA4ru5r8M5SjjZQvspniVTj%2FRigbWc21GnmZyWsMq2oDqNl%2Fgpzd2K5O%2BnDE8aDuPmXxRICgRPmsKinUDoodYGxNYqd%2BFDLwF2dPhmz%2F6kxjicUJDDuOwhLIXVYk3Qu6M5V12JgOipAlatLna8MuZHtmL610IhDWBw7U47JPtW1TLq8ObZWMIclPWXOKdzgctHnJy9aLurNdBQr0cuEW1nrXvnlj%2Fyy9jDMhDYwOrOxgPhA3%2FIQd8A3hMw2izqXJxIkkazxCvjMZA3AsvtIIWw9LeFRR6gDn4obIkX%2BfhG%2ByoRzgJ%2Fj8ZJiRltiDAagxxYS5VUHBi23HwgbEejN05XsBWwFwVku7tV6dpLUCWSUPA8JaJrhDvMPbpr70GOqUBhl7cwDNukly9vIhlExfgcUky4dOzTehmPlKKkZAJnc29G5g%2F%2F7mmqS8OXPNx6FaqJktwH1qSnT9Evyeoc0gIBsTyp51JDJ5WFFk05UINDdgVeA6kz9e2rPPXZ%2FCA0ejkK%2BHXbvWPHLi%2FLrR8kCiCMH%2BY60LZu2RR%2BtS0n5Igu6NS0NanTFtdk%2FrLuAxRKvuIgXozFTZbXCuW2jly2TvBQjkAM0W9&X-Amz-Signature=1753e367faf10cf10a52fca277f44f381782f05e6b4abf7bd2c1593a6f756594&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOGC6QM2%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBclb%2BvFeFMSnxoUiDoXVrn%2BopO7M5fQ4cmCFWvCM%2FnoAiEA9ssTpnViIS9ePw8C3Kplgv2zIpufLqnptpLFSSyYNKAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXkGSZ5aYhAOPXn4ircA2JfVPRV%2FlDiF3k4I9jqm92dbfkMr01XE%2B3k9WJ5IWXVZ2VggYBYS%2BzQ3ip8JYSv1AGyJz9ZAn9cnOZB%2FRHV%2FTXqaZqKkJHBUCTynEAchx68OBPvZIpreVz2TKk2Jw1y5KgCdyr53Tc9ne%2FizjQbEezZceXY9BOI2U1nqESmdE49h5vyHyDP%2FtB4JrpLPZuaFxZbfN7lXjbKPjWZqcFR9iT9vvKuC3v0aNOCC9FWpNr5RvzUWhMYgfiHKpY1RHRhIHvuCw7kNcuwJ5KleK6UVHpHjtfmGfGf0EtXpwH%2BHEkU76wx4cfMIchfwM6EYehx0bsbj8kSy9xBw1M7MnEbqUU0G5HiAfvA1PpLpRj0k%2B4SG%2BhDytRsRjzgJyZzALgLAp34beuZ4YNKOjYF18U28F2jnmoKAhDcuTbU9AOD28TxSpo3JlLloeeNhdgjCMt3BNRYGVFjMEgW1CqEGXdTX7f0UYiirJFDBZFKQlUnYlNqncq6jW6yJhxJ9UNvsms5vpBx4%2Feboe6JZldPAz66CCeR2lQj%2BEbjvn9YmTgWVPj8R%2Fxc%2BoTHRUTYGrwWSRcEiYQ2vnSsXsH9m9N3F6HmhqyEVdmp%2FUe%2FsT6yCpBGYQ%2BkYeGv1BloFPjhY83HMMDkr70GOqUBCAkz1Z0lLDqYbHxt%2BptJywWJAsX0bKB2tj9%2FmrSEu5%2BtkuAErkPyz41KC%2FLH7L0TAxACObxYz63XVDNFb9Np8wmV3q0PaQASbAlutY7vyOVrg1FsG6uDIczj0%2F2iB4BI8yZBh1ZDzXGNp9bDeSikJSUpwuyQaMwURdXQGe18U%2BKOzqjAiXB0BRxUHRqxGKdtEhpx4uj7vEaRRiMSVn8fFrNac6Ib&X-Amz-Signature=23208db6a59c8584b7f2f98f738589a24f4f73a221c1639ebd1f6127eb89db23&X-Amz-SignedHeaders=host&x-id=GetObject)

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
