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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GGKDDM4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIAhCIhZ%2BLSPlDuG7KKPeKfWuplOblL5vXdON49u3ZigIgR%2BnzD%2FffTp8npdIDfBL6VL68ZiQVylOIO8DKqfPaLvkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHClGQBmuttcJ1LOXircAxD56lKL4N705Nk9YBZULdLPGo0BhMi45LRnYQ2sNG5xPuxhhfTLh5BTm4060adfVtBkD%2BWuFs%2FSe0qjwRi9fQeBCSZsCcgM3MCEP6mtmeb6Gc2IWf2fDgvXebxEiBazmUDK1Ac27nvniXqSEuqZepqH0USW%2Fe9wFT1%2FzU%2B%2BMfnjlEBH6Cu%2FnHTSxLB5YbdR%2BrHkEpJRSu42wQH9GdhG%2BLGGsRIbIdryR903JtfGk43ZqP%2Fc%2B3NEcRdEjyFMJzHEPSGNrpegCI9tdcWyWoCWMsd8Kbwob9%2BZGGLj4UL5JP5RcmNT2vjwkywYRZ7AQPBPvQWHI7H3AmwmAVzAZiiTOiLnj0ZOWWc6kpxLDlyOzRdjfidM4X32DrKF%2FNNp3IIjfxc742MHvbWygQDdv415MZdirNVvn8w%2BX1fSx9Lc0J%2BYKCE2ksaBEB%2FooBs%2FhoHTwtUc6cy%2BpCdvpJEFg4gJdt58oKVa0Nf8qB%2BW9dZFQB6paWL8E5KPq6iurqvIH6F8BNB8kVul5FwC4UdUAG1zVVEc%2Fi7FpbG232F3VpM4kH6Pl%2BlQiUzvWZQIBAZV1s4UUjg%2Bp7MY0lsWQf3%2F34CnaylSHT3h%2BAko11Zpgbajmf11hNR73wJv0lHXJRjKMI2x5sAGOqUBbMecTti4hrJlgqNUaGpsW%2Bmt%2F4ssCF1VRTPr%2FwXVfMdXTyGgJoEJxZ1ZEVhAxbQ%2BpgMq5GV1WbFzzlGf9rTSK%2F0sYplGAk4QPxjJut26fRebE1bAl4PZCAToAvEaf5OM3LMAuMkl0NqJls7COzrvYdQisdCeZOXZEFAXk6uDAjOy%2FUlFw3CNTTfLnHSjYsieUeYKYMEIJdBPS1wDb2aGpNvHDR5X&X-Amz-Signature=6fc3784c401bd15d65efdf25ee49fe998d87780fb05019b15c7cd6856f870c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOEO6W6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T061232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FKSZIN17p3yNvsFPjg9rkxHGeKiaAPk%2BWwCIUtxevQwIhAN581%2FnJTR2d8aENIb%2BjlLcZ3XV8BSZfxrJuHZw0oB5aKv8DCD4QABoMNjM3NDIzMTgzODA1IgzFgbx1gBlxL9kG2vYq3ANkOuR1SFjt36SL0qmNqzIGPQEhYGN7555ey9M2SU%2BtMhmZEsCpbdvnKrd%2FTrUJMEWhoem8SB6DZcOKSxLut10Tw1H2Q8VdBZYjnPPhS9qiApVgICK%2BKI71srgh5IQAHgDcFZXPWI7C3Fb9%2BWtCgbrNeWYlzN1Hof6YDrK1a6Gi1BBQkBr0AguEgXnZ8%2Fa4ovGfOHIP5Vcczu43jj9aBjCbWL9lM%2BC1CMcRnh6WwpjdpZxrAtWGxV%2FoNIeTD%2FPfi2fVhBPuVCUBpKDjyhXKsENy2JXYI6mZTx7aRUBfJg87It2L8lzPxFem7u9dTRozuD7KJtCot8TA7%2F6mOIK%2FpSrzFAErCnYF4th7OQrgAtwKTN5Nb%2F%2BAhc3Mmsr2ts%2BYalvwP6ieLd%2BPhc9HSDBvqZggGmGCDOI1oUDlTdHGg82q4MaoarRMg6eJ2IS%2F8QCUVkAQ07Yo6I3xKF9WwqP%2FrY3PXbC49uRrytyPAYQISWJ3eeiR%2BJbWTC9LRClMjCMRafajduXbEGwnG%2BscGmLC4P6GZvKHWaBA%2BQYx0qnd6tMP3Qpc7a8AXoHquXfYEbU5PWYvly%2B8A%2Bm%2Bz%2FyyspDby1pWrvifB6HyPuybnRcq6dN%2BaSqFeJYq3tzwTGL0ZTDlsObABjqkAepSG8yOYRVDgbekLVccgrLk%2BnBlUShzWrF0iP%2BXCKOEaBJbJ%2FROaFHCCuM9HoGMJCcjctl1A2F301gto3EiLSjrT%2ByhSLgFtey0zVLyzbDV8WLAnHFTBOvJUyAccuE4Jwv1gXlU3GhXvGfdPxCvn01RPM%2FhoNRRZDcgZbta1dDshBCSyW0HyUkAp4eBJpprS%2BwzIUB%2FPBWvkSwjHHvApNvb%2F6Bq&X-Amz-Signature=4168db14803fbe20f98050915c98ba64db6503bbe6071fb54aa8e943b2896d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
