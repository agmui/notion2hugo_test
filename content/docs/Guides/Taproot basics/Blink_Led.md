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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYB7POYE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIE%2Fxz9iiS8Hg7OVsSDKmskVYYVIoh7GwcvzgDc33235dAiEAoJ0da23Oli9iDzxHRSI2mB7lwe2EPTHL1dg2lTh9wh0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG82t%2Bn0qgpk7I0cECrcA4RjKzMTaRgq33SVQo%2FBamA0YOnFqKOAmtJTEn4Yzis5BnobcVUab15YrKOvKwJB25r3P%2Bz3lfOkYVJNNf3KTmblP%2Fh9dlH4I0HokNu8OoRpPenmj%2BeMydou6jzY6rPWqBrSXwYc5YpXA1T4SXVj%2FRd%2F1SogAkbmoF%2BE8RCqxsNCSuH%2BvLcbWfsyREnLaymuykwYhr4EFqX6GzcBFGmjefA3fcscxGZ4yQKvX47XsANqKLN075L7FlAjRi6APP9UCg44HF5lowtzNy%2Fz8gg%2F6jv8xb8erDnwV2utPPJ7EbWgBIW4AXccBGLxelDjjS6V%2FYpa78PE%2FNcG0uJTLKC5Z43g2qX2FBtb%2Fw%2FqFk22%2FuodsrGfQiIDrV7TRKPg6ChhdrwuSfugCZvhyCZk1Lw3FRPxo6VkSytGl3Jo26SYmQ%2Bn5L%2FdPcG9NWoXRtKauh5m1d32vo7nqe3w56OyWM8KHxXd8pFRs5NT1ispTd%2FkEtp6luMvA1H7Yyy%2BOBKbufPSIDvb54DWG1zw7Mqgoh1DBmB5oGce43c7rPO0MDab2b%2Ff%2BvuiMp4Bwfs7yWk6uexmoMDxz7B4vverJZyufhEgdhrnxK3yxiUzmH1FgtkHDMUUh3IYR1TcNOwbvOGMMNaKs78GOqUBUYPDORUcl2CLdlStW9HtevWJfPFrWb8J3xeWql4WI%2BFwGn639SwN%2BSrmrrWLi3qrJsLjAY5d0yBwhgZFzZHRrAtZ2tDjCPXvM5%2Fhd96I%2B%2FPUyZItrnjvh8eGW3uwuMindYV%2Fgcqe901WkYxM%2BoQKE%2FPZ45qqQX494H%2Be2%2BzxzLzpkyqHOtnl09QcTYks%2BHtoUOc0%2B%2Fgxcv9TzKiVRdHDx%2BBaHkEi&X-Amz-Signature=070b0c29fd05814901f87df80b8ed1f50030a05171fed06005673c636f3eb269&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK472CZP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCoC4ayq%2By53gJOSJg1j21OBgyaQXpEDD4yO%2FCdsj9ikQIgGnfPO%2BJ%2BqB1W5ClF1twYIVrJm2gcBlaLjRVN%2B79lZL8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjz0q71lPnFYahZHyrcA3WQ6u%2FgZfhT5BPJEa1AHiqdw2%2FtRPa%2FSraDDKeTI3G7xhywizxtLZtiMlZYMExbMLhQ3hcV6B0cF%2F6bw7hJqISfeVkIaGJ1oVcEOFt7GeBR7faVqT2xzAc13y7Dc8bLiiCntYtFUz6zepM%2B0APgYHWJWwykAmy%2BepG8wah9m%2Bjjpi3p028KU9v4YgxOFoY0pLvR1RAri4iVF%2Bdx2jNMmWl9VJFSPKIS%2ByNydvAsxbdH4%2BupRmPw%2BOY6DK4WCHP%2FHBpXbJQ2Tmby4uQ6K9Zr7hhGWQpz4C152afobltK6b46bctXQeAD3%2BMuhyjDWCPw67UHkX2afdL7LWQok%2BgJo0QiOVC1XCdPK%2FblWrJL%2Bnh7ODEF4N4615ha0H9zCxfDh3lzhyJMMPNZSOD1JTSFvUvUwedagX7agdnsv2bMJRovDv7LvzJV5O6bJZZGR%2BF0BiBp6O2wLIzICCBH4BFNNS%2BvLK%2Fi%2BwQcfkrhAdd99w%2FMmNzehgQSqVf%2BeY9rR4ejxgobquzm7QDH%2BxaVfFtayFzJ580ihJO8tcdK04saPsgxRk3yaLYtLb2lhj%2BQ2n4%2FU50EohWSgM9lF7iWVpnrBjZhIbJlvUzo6JrdKNAmDCRf7NwGOwgUduHTfE0jMMyKs78GOqUBi5p9IFpa4qCAUY7hiOrAsfZ%2FG9YmzZEEOC%2BjwoYYAButsiKAdBgt7qGBIzOaLUMCNSeRfORZPIEJNZelytHOb%2FEZAgqU3BzvdS72unpajhUvO25XpRFi3RAyRtnlG7WWtuEPc%2F6H9zMyVJd4MLHXJl1Qo7EV0npXovAVnuXvJv1vueST7588AOhmXwJ3RJ4rESS9qU4mkWqWTQudp%2BEO0Qxko4Ts&X-Amz-Signature=e82ad11838afb821d0ad76ce04ca9b776b562997b07ead33c97d45654e202099&X-Amz-SignedHeaders=host&x-id=GetObject)

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
