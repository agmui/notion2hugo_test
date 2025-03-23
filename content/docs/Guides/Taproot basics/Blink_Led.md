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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO2LBASI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDM%2FdPAkxTpKgPAqB0G%2BATEMqOi1Po4vCoFBww%2Bb0y4xgIgRRemDYob04G8YumdE3PX1S1wAdXvJagu4BkXaCvKzfkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJbusRBln1OsYHtSrcA5aNkmHXA4E37e8tNF7lkJKlnvAO0dHkCeLCNGnwFb%2FdBWQBxSwsrXV63WpsnASpBDzQvWKLyAXEYR9xK065yJtA341Qm9x4hAzY5iTRw0nGDP9L6vUIDYMdO6UBcpap3%2Fh7qfl2VZI7DlOv9t9tbCjvs%2BwXg1sPBMSGEl%2FYl4b9DYjGZ0Sl%2BFw3YaeVdLO%2F6Rnx6UyHNDCu%2B%2BvyFDP62V022%2BtVV4vs%2BaRSIW3f%2FexKhWcxutjYtw1gdMjq5dCO%2FVjP1g94B7igJugWuIqKmR5DACOrxKUyciB9sHqyRS8yd7wffY%2F4gd%2BlLc98Vlki89tDM4j4791uYyjwTU5OCTTeuh0XF1yYS7dIsWxSOi3CpaTEla5IyrLNvJ5O1mUYaF%2BemOT8mKyEqEKq3s27JjpgRB4PPjePMTkku4I9808OyBncs9F6U7K2AtTagkvGJUWR8CbSWK9YfDxp8Hp2iJlgMJy9iLUp9zOLVhlZH5N3f6bPvSGLmt3l53ro85STxbN1Y06bPoU%2FB%2F01M8YF0DDtucoMz8xNgEomozZwWH8gkAtvnxmWkNiY2AKucXnp%2BLnKTJag5OTnGQ9oXpXWXyQ%2B9iTddh%2F2jw0hyUk%2ByVAQYRB8ECnERjNeJyYQMKTz%2Fr4GOqUBOeEpz1045W5yt8joZX12j%2FYE6KH1HlV2lvJ91Xu3fqmrJnhM6%2BU%2BZDivyAQWe%2B7OomQncLoQZFmp4qJJXd1nSo0iQKpXD9PU7VPlox9e%2BZsxMZ3LK65vCEF6VbRA4pVw31vl6s1Xy7QQSqzPw38869FqM%2BvmpChA95nwqjx9ZSDoNxkAR77xdp5u4x%2Be3vkMlfhZYO%2FlcYU52TRxv%2F%2Fc7ydmYwSq&X-Amz-Signature=b47b7b3a9e5cd07a4350909c40557848fa15d0a76a2a9b2dbca5bbeb96bcadca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBE45OA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIC%2FvaExlKlhKgMYbmfGrRnFp6%2BGJ%2FDg1j%2Bg2PnV9OktLAiBciHrAmKYI%2BcOq33P2reZBFftWl3quyCLZJ1i4LYIOKyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmY1Buo%2FsRCx9E85UKtwDPCCfB3LJqBsNozGO4XN1kIDJRwhE5xaQnxLMAbNH3tIkwyblE1cJVcNWuzo%2BudWORBiIxgHLgOg0XXThwjAxVlZm6tA2vhMp3j%2Bppmz9EZQxNH3bNhLsYHyXJDjD7IermKo38fmDRi3xMdBt2tpx5nqplRyOwYn%2FLHziorxCQCoZH21ZzKMsP41TfrYb7LZjHhnYm%2BLn%2B%2B2MePIubsq7WPRqXQ47MAZ8FJz1dglVJJlmAVnprxwyBZsfMZU6cwE95HmNHzRoUMIz9VLHNpjdbAqZVTgRsP4RljKYWU%2FzKy%2BuOrHkXRk%2B3so4x7xyn1vBAWxe8rPiDxJNlX7zCRffyeHeV3qe1I1QE8nINIlYMZmDulstRH9Wlg4DtgbemzYLryhChwq8gOPYV3BQY66eHRXWZxrxOA3Bmzm1LogGIYNrz14hzNZU1tJrcqX0t1LeajcUY%2BYjDDw0mFyzGxhpwIA9QBAJvpgNpkU8VyaqnY%2FuzHG4mzE8cIhFlDb6X4qyv6xTsNDebJ7JAklrzqan5VtzuFJmkXteq9sbUEtzIHQ5U45ct%2BZU%2BKioBP1PdCLq%2B2OSCJLcUR2MicrlbEtBV0FjaXwOxNU7Aken9VPw1JKlROwAY6Vsfk%2FXCugw9%2FL%2BvgY6pgElK%2FOKhP38sPtuxilVusTofE2%2FoWkKT5X44KfNitd5dfRoIL76cDCx31RIMf9%2B3FjRoOilsZcnvnx%2FbMC5R52%2B%2BILBFEp0qOnpSPNZUj8ac7E%2B2%2Fs%2BzliFEj02xTY0LNHItfX4%2B%2FGw%2FTYbO2EriZxD25CyD%2FDN3ESJCFet%2BfrUOoWNHwLYX7m9O0ydhqlIsWd7eQepd%2Fl%2Fq0aOWGovtmzX5Ww7CmeB&X-Amz-Signature=81c2946d583a007247b303c0e9b4e3797635f144665387ba43a75c27596065eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
