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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HB3IXJH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRSdTjI7UYlopgMkC4OLcRnNT1u0DfAAURC56AmtnseAiEAsHO4k3eSOCyUYEF59zz7FJ%2F7hNi9ZX%2F777W9LYiVpasq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDHbMX80bKhbQe6KX%2BSrcAysEX1pmz3lVOWJI%2FfYKIW0jHLQTpzUQNzQQssmjTO6jkkodx8BfQY4M4%2B91RX8CACrYCtP8z9g3zMOmr%2FqJ2Bso3XrWBeEU41w%2Br6P1h8WpaSkfakVTTWISw4dsZhe%2Be6lLWaQEpi%2FtUJqfhAC1GOnm0ar68%2BHJg78jiDbSVm3OKJM5RxRcT8F7StSGlyHHBPbAYymO9VqcyPy%2Fcfjtre8fIX5EQOLhk1NSgMVi5vAoNCXNr9SW9kQCjNEqXEaVPMX6Dm7Wtc545TwSHq7mHNiS8ZVTwGcXAfNqbHKegEhj1w1zgV5c1C0oaYPs3209QWtUo%2B30TvsKHNgaw8X%2F3Mg0Bkxk0hnlo%2BD8%2BoDn20fNvg2BMe6RZLh%2BUT0kDdw01%2BsbO%2Fxq1yTWJIsQubPabCRr%2F69%2Fdwr%2FCxPYefCxvM6LDUCYpNW1snGa2YVWJN5oBpLl3EIocvXU%2FThV6caRyNSN73biXCZlgBinQrYKFvqebiA9U5XLFKyCEcJp%2BqaNoPbh7L9od9Ps0fXirNFIKfn%2FVVWOzY0VDRGQkF8tTfhew6s1vALwMmIEMNulEVPkyHDdLtUHsonQ%2BpCc5%2BkIYFQp1AYmDw84ernGb6NgypqmZ%2F9Qm8%2B%2Bhce2Q%2Bq%2FMMSipMEGOqUBuh0n7KVBMN7FHgbHqEg9zfc%2FQDNZGsPc4gnJD%2BUKqk6DkbJ09JYe6IA%2FlqnuVnj8XvtINEAwHPC0P2YfkLxoCF6xStxq8ThL7LCStxDwPNcnoud1a3jwAu0PUVzfQeMIhzVdW9C0IYoqMRx%2BpQvZfPMireSgiEcsrRYryPFkEdf04QkGQ7Q2FHJ2woi4CYaoL3e5UL5coJuBZgEc4OMlfUaI5Rd%2B&X-Amz-Signature=0aa69b6e7dac7eb8581d1d3331fe0d4f976e0723599b213174b53b49cb417708&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLY2AMTE%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGXB7qSRLAvRyxFqGZiCEk9eFe9G8tDn1G%2Bl16NxrCugIhAKolesNfecJudpvyp80m2TmSYAc7YtwH97CjA7MMPKxuKv8DCGcQABoMNjM3NDIzMTgzODA1IgzhFZBHjDAPQvseS9gq3AMe2U5le%2B%2BsxUIPYPN6yt1uP6pbBFd50SZdq2jzMY9ddXKknhRc7WlMvVrSy5w%2B7VbOYnrGjH5%2FvTg32qD232BD7wXSykUmMMm23z%2BXVUcthK6XdOYumL%2ByipQMsO8W4nPG%2BQnVSAs38nsiGSzsB9Br%2Fyr8VQdll%2FLPQyElUSyPqUrxcZaV79QJdnnO9Dc4Ikd27GfYyCb3%2Bic3q07MhFfSy2pNv9%2FixAbFH9NZmc9BanvTA3vAL83FCNI2KP6lyY08y4d5b0dP75ruLzw0C2FwyUbqRFxXGYoogAufvdGkO7y31tya%2FkFT9FG%2BsnVtrj1BAt5xDLJcUlGL%2B9jjlenXoVCbCgfWqhZh3%2BBs2rWwZju%2FgsWUansEZEjU8uE6OZ5zfEETmgmlGofp2Nr1Q1X%2FBR4jf9Mq3XIWCFpitGAoA3TC0uIFNvJWnDCDfG8K9iFS5FdKkMo1z7qIayjZ8MGJuie0o2kpE0kbew2PxJA34749jUOG5FvgBZUJtXLHRptepqrxvwoL7zVPpZtAlYvlPZpfoNNjnU8Xywau9dLVr6bqxb7x0bIn2fNhdgS%2B6mRubRCdM8AsLy7eLk1RpDI%2Fwz8P%2B%2F0qTlqlb1ptWuFh0LrMoTM73MtcfpclITDHkKTBBjqkARS9wHTGYVPCOrIFcc4GRCFPaRpTcNgUpmdNbWP20A2bMwaC6Ljg%2ByU%2BDLjcXrZXrgn21ei2OQb%2F5bocCWoC3M8wChH%2BBwOgWJ1qiQwHrjRZBY9B3ctNSu0bnNbRVCzP92vwBsec%2B8LXyP06g6%2BxdKRDn6t2shLL6V4hg0Hhb7k%2B%2BnvCV1zctpXqXG0k%2BmPBj7gz1vwcidg42iyPzU74Ya1esa%2Bb&X-Amz-Signature=176e8165735a06740f4c16e7bc74e9e5694af4ec8c89b0d6bd6819793d2ade8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
