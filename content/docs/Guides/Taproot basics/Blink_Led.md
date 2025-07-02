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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMK6ZNW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBv7YuFcqqOlBzaM8nvf%2FZe2vHjHvI%2Fax0Zby6HxFck%2FAiAtFm5sipTb1l5Z4IPeZ31ZrWothz0iY0SaKFb0MKWo%2BiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF7wuxrWrTL3eeqEwKtwDg7PjKOW1yzRaUxqq%2BsRDCKevC3xeknFBSe%2BkYxRlhOYzLgu%2FF2Lzv6MRGdan9CvdX0T%2F8hqvPev1rKX96AXyufBZJ1mvLc50c%2BATd5vbhC%2FtViwOTHQHyYILUU1ARDlopZicjH9mTypDlvpqtIpgI8FePpnF9j9aTuSFw181tnUk3M5wnWo7jPmcy5r%2FKcBUHOef7hKsx0iBolSpz6vO73iWtY%2Fc6gAN%2FwqgNMZ38JdrSLLpfmHfEovnlHQaW7mM%2FjLoybCOd0E3Qs22ezRAy1xc2UyouyKVnRhpO6iLt%2BjgmFYZYt16wiRIIDP%2FuL0M0h1UVGbynMCbqzKbXIwntt%2BHnmHpMwhnc%2BhmsFk%2FWglseYTcbE52m8d22ld%2BfPaHNoKKA%2Bu2y%2BvOdgj49RAk6S7FmjIeuluFuBEs%2BvYuz190hnPgewk0%2BMRjEOLIYB%2FiiCQGWS42JzF2Uq6VHLCVel%2FKAZUgTZcVydqOJ%2Bne7m2TtffJEGrkrYPsX7sw30D6AUN8rDaxQfFhUrU8dE2CDN3YNEE5hdNODsuz2nDApwOQk2mtmZ7RHeLlCbwZZEnMb%2FMnvizA%2F4jmeui06e7nDbZ68jWfpImZVEkS7wRGnTzWIE4OCEbZ%2FjRdHCsw5%2BmVwwY6pgGblp%2BIsUSMJGU3CCxXMhNHIQF4zP1vK8YSXlteYQBzrWQiVVfP49bFnvoaALnt6hA%2BBykA8pe2%2FkcLKd220FmRe0c6frpaUetlfQ%2FaMPa0%2FKQmDhs%2F8DhOuLJ1Ic9NHxVU0wgAL2WyXSQTf9k4OiWjOXZeBeWyfqSOUU56ssR2xRDyZOZLkHBH%2B%2Bcd0O35Lkgxt1uNHCvVaMNBKRP%2B7ARDBACkk0Cn&X-Amz-Signature=ddc91f73950c6218145a4d3f97b001d78be12ab3363b7fc96c77828eaf9804e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3DG23P%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKYZNC7fSqz5dzOjyV7q6lePbMTbUTT6liZk8fUm9kkQIgOJSUDRg3G4IZ7f5P6yp%2FZgmSy0Zvbl1eMVQiWg9QfvIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkXAQhdWF2prDr37yrcA%2BNFJQnWqKMDCgfc%2B8CNmdbgsDM8M9afqHsek59ECkauPplKusqni2y3tAY93%2FmdpDapaaxEXKk8sZZrUtTSSTMmLCsq7dThAtWOWxtangl94a8Of3SECKlc1Esq090bnKx9MUR3u%2FwpThJKC1VS47Ef2eMmKEYKU4hUX4q9LXfnRGEsrvJXlWI1p%2F%2B8JkkfqimXBGsDEVk7CuKBKm3il5tiwTfk8eHGrTdqfMm6NvpsFL6v0p%2Bg7sXNtUp88v6XjDzb3jVUf0HXZC1eFxYCXqxenB%2B1%2FCNe9188abEEO3BYK4X8uRFT26kLRwsB%2BuXpYPM9CXcxsQieDSIBU9v34EL1pjIiIJE7X21z5XIpD56AtqOa6Kc3qvJGvMU9SMUpZLmsIp%2BNcIUeYroEBuJJpJ8WIOS8dPiZqoNIgklezoPXReM0rx7honY%2F34d3n0kQb8z1lvLMBbg8xx06ph6HQAzAg9WVH%2B%2FpIgQKwE%2BH2E2iw8PBsOD4XUfQ9SMk%2BQ4kc6MfvKQnq5R28VOa%2FRWtgY%2FIzP2zg1H%2FQA5tVZG5I1MErAumNDHQ6XGNIESg5yHIw3rKiI1lafJpABVw6FPe9Z886U1W8ZJ3iHqNZekLCZmiRzPH%2BLtXGQ2sx7aXMMrqlcMGOqUBjLs73AQFel0I%2BTTFUr7XpIE%2FRV0WgeC7MtlV5iCXqjisqyJ8EvTOqD70gt47mwJo9%2FQYKx6uQ84GZROFQxwfrU2OqLZ53OGEKBWgHd7OiTKCgR7yLJ70wN5csG8J6E9T5PzRJvOMjixTDCH6QnhG5CIQ3XCagXe9ogXDHeIxYITOaA3L1nGDaGkvMHH4XvJxrStw7sQKFJlBQTtidfHocyUXxuUA&X-Amz-Signature=4f176fa01451a1eedde82bfe58949f8c051bc04c4076ef37f1d2ee7893ce831a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
