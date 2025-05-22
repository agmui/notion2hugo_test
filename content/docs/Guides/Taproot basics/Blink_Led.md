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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654JJHJDZ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCZ5fDATpxOrAM01Vtqr0NuCYs4c7AaBaslR%2Bl8fYpoegIgNdpHcp7gfU4bjAOm%2FDCR0EGDCXCtcwZAoUSPDgb9nuwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyTns5itUCcGWBoNCrcA11o0ZfusponTRFJCaW9yGp4kxDixcTAaqB3fG3nSawtMw%2BsyoUDb8%2Fa%2Fu%2Ffjl1sa%2FcCmkzYbZkkGNHbqSxth51v594syT0YiUXhVNlaRDK3421iYKN6zNfgbWJcU%2BE%2BLHzzudMCM6AroJdiTfZccQSx1gEU9E4g3cTbHo3G4DHmZOR9x%2Fdl8QAF7MYbngqDiIjtDbxNI0HnK84KME5bGUSB5zq5JZAFPhaCE1lvnLAWE4iKwCFL2MtsgZw9fW%2FH9gNzmqXe0LGwRsyRvLy2c2Ndp9%2BYoKQTEeYMExHJGnrNYUHG9dhABKF3DzTdFiCew%2B1wOVAL6TxJrx07jMPXtIRk03uleAHtuZhIh2wLvl%2BcdwfKN8FSpKXh2%2B%2BfQwHpdDEGU0ohQkd%2Bx3rqg9FTFG5DspK4r5TvbWUfnjkNdy2ucQlGhEm3S3aWurHlr3ytEjj9rjTeYEbTsT%2B50XJE%2Bu2MHtRO8drD%2B%2B3XuQjpcL2jQEhbXvayESLhlFTjv73stiumtTjpLoHA2Z9eaUqqwpYwfIYPl4f53q6icw8GssRFEGaAO%2F4mKWPAuG7WidWK%2BW6xUPRl4841RUHQxxYPrTk14d3YJ3Uu3xb3NiN%2FawzBcruOnWXfG32TdtwvMM%2FivMEGOqUB1%2FqC1iJ1%2FE%2FLIlmzyMve%2Bqlwii9go8lZk6GHBXdjcu92mOUSbKJ2wUeiTwcFVFOU4%2BkqdSxD0gwTtJu1poe%2FPZGIzbv98F%2F6UCJ9ldO%2FFNEHGu%2B2%2F02%2FRbMvQTvBKTauDeUSDQnHNOVFtKublbxg51DfSQjZN8a6p9aEeXDJG8UA%2FCS8FkZuNetpEUroDhZZtAYfUCIezDy3doOGlKkVRJnKN7vj&X-Amz-Signature=ffbed2a3db06f065625c81ce27a3aec4180055fe88f313be0dc6a930dcf2d23a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATKZ6PB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBHOt5Yb8YGm2enLpxmRSMVg9qIi1L1lgJjwz1NHCYhOAiBYdm8BKMDwWqgIzobr2iMboeVw6RKFf8F1yxiuCBL41CqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlpQcqUgbZ1Xf%2BqteKtwDBlabfhrFSapV%2FpZj3f0Pjk%2FH5JqdSgz9d2YbEx5Fo3oWCXYH%2BvRcUnv44PGbk1SM0Zr4rJhztuYOyciArOmknop2JarDNYAj56LjBVBPV3m4TWDEKUrQVDEO55rjcs2GNZ9MsGsGKuR2mrFIEAAcfhuQ4T3PzNbKYF0hwp0WkMr96ecq7H9QjdI4c11QfH73XUbQo3qJSsSNzDHRbFPFeS0rjYDj90HQB86TH0gSgCGXOEcfqKUkC5APQT%2BsN0HwZ2i8aVW5DAbIJ7AoehVKS5XgKEKtimpjRzHyvrMlhAt3%2BYe5cduUYbblP8Mso54ePsB9uoTiWLDx0zxDEBURI8Wv13cTnrqmjt%2F0rfsczKAPpz7gAoG%2FJXbPFCcLfl80ahAYC1UvMNF%2BUxYCF3l9gVmGLJdjW9Bf9NIDN8JypTPJXhTTDrhjUXrsf4VaxkvBKkCQ1%2Ba3sPz6Y7AaI4B6hqMEATWpvQQI11V0pNI4rGfPsSKc8xC1q88ty5LfsuNEWWfKxq1mCBHkEIuYpDMeT56H4DVhqcZvlo5HlHC8E5GPmbbPwCpYyCH%2BiYEj03o8hljEL34x2sx95Q%2FoD76QFVf%2Fw5wBnKVy8BzOVYqgFPNoJLnV5pWw89YnPC0wjfe8wQY6pgEUi1trS49WrT266z4fuSXVdFYwBBSw97faZxKmCeEu2FrosO6FV3sdQlGgxb20fnxBXPDSCrbNsj%2FeX4GBHPm9zolwlYuTeZqLN8Rn9T7dQwSt8LrKHP69a77x6GibF4p7gkveDhPkptw%2B9RfBbXJ7F9od7gCnbDvB2YqE4WDCsvKJ9jUEoloDDYgt5a8enyZooF9u71q8J3spLAV8dx0fOLF48KIu&X-Amz-Signature=a38de64da5461109595055b25290e567a11022f820ffece511e111a64f5f3d09&X-Amz-SignedHeaders=host&x-id=GetObject)

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
