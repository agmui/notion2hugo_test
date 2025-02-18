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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACJEAGC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIH6784v8sKJ0arM58dmwcWPZiF1A02qlxndZJfiTSan7AiEA2IWW%2F4%2BjvL8%2F5Z0xvXd1biz3vwUuCt5BKEaBhIdTeL0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEe5wLUzuOzXbvM8%2BSrcAy%2BhLKR2COvJbZdASpV1FUIFk9KcvxnzL0T%2F%2BsvXku2oy3mtbEogkIMcJH0NLRCoqqL1PhEshOl8LjScDUmrXmn20XJe%2BowbUC0B0htCtFjA7iSiVB%2BmLxNg9T9ovBIF8WTHsrmr4%2BJFvVdSsPaGzYBMcLag8%2FDbQHRN0H5hyyULLMn4WOYCLVldqmvi3DaR54sUKhDIz7hhwDt7LRlJ3rZtrgUYQ3yUs2TxV2Dg2eFNH25SioRJT3lxHZrYi6E1JipqzdBuP0niRVFEkF8Ojwa88R626xIII4BvMXO7eDb6RGc73rEURQIQ%2BCcBS09fNxe5KE8utZ1aBKMyyPzkMEKXQQEIs9a7ocayA%2ByuNpCVIEq9I%2FNAuoyaiZqwjEsMiVTvCS1jMpjWJPim0BUHZ%2Fz7StFtJoIHkIhg%2FOjsge%2FaM%2BExHjxhTnf%2BdgeDAlE580RV9OJtgz1jfQ3gKCJkw8UVAgvwmIq1a%2B6SCSprhZGaP85Fj0v5Dhg0KRgm1TD5MHWCjjCYg1MuQ%2B0u%2B2YDHHGMrDudrf1dQnaBNO1O8a87gQZ19r0BZEQ3NUO3biiv%2FeMVNxMW1a2hMU49PQWmBuO5bbFYWqk8NOdkjlS4UeHqvYP3x8saIMXRqMFnMNDb0b0GOqUBJmlFRjOxsFto03CARarLyxhz%2FasXoNjpff067inQZzQn%2B7Fpou1m8%2FXIC5fr30GFJrsv5Z5wdRw0yjlfLFo9k7gXsULZXxohOsAXMf19eVwb4g30RKDyqmeeLshd6UcgwbbmQATnpaP33uNi%2Blw7hT2kRmLMgV0JvJVCeoZHe%2FsDm5wfRpaO9HssY4Co38fVFbZFdVSUVnpG%2B8OPP8KXvKQNwbr%2B&X-Amz-Signature=4053affd6b4a980e5a4a3e9526af7429d4c9fffeb9e7eb41306a489a159d33d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QBESF5E%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCS%2BOeRRXJ6l%2FcQ5NzKrNflWEWDdACoKBnql6PZRXCs9gIgcv%2FZmmj4lJxow6ksh0MWQGMsdyfuxlkMt8%2FDH6l1N0sqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChJAdqnwW8r04XVpyrcAzEqI4XPcx0hQ4SDvtp4%2F1G4neEdLNM%2FdWhyINPRjGJXRGoYM4ySzEQxKPEXofWYbN2XHs1BjfRI51nJIuLGxhCSPUxoBZeFBt8RQ3D77j82YRERg5WRt3zcuAanKtxj8T2nU7LsB1pglb7sBT%2Be%2BHgHC1l8ytr%2B%2FJDxdIhfl4kCdJ%2FeqnmHMzxytbLpZnibMIqEjKI5%2BlscSwi3tS4Vz1oW3JPWoNLYYFckjPAocVhwzjhpsIT%2FH1%2BqZCxhzmAHW8yVjfPZ63B5T2sTEo6zVgHAU4xEgFO5%2B1NwfNtOuMcf4i6Rxw8CN3kPKQdkx3nglJYE5Wybe7%2FtYqcN8RJq1sQbUreL5Uf6sZE5eUQE1zaYy77M4LCBzpPnN9T9BvXFr15P0%2BpK7dC3TH8RTq83zaPwqKeYH2nQmavg%2BBYWRopxId0NAL2KHZkHwsiRGRr2Qv7igXD0n5056u%2BH5bYYhd%2BGq3BkLx91JZixQTNgN5pI0UeweRQpoV3B1vy7AU1SB1MsABdB%2B7wGVNfKYw6A3NyZ1DZxyUtIzCF0jbv%2FFUWYarxEKkDjGDS2OtaQezw%2FdovPjLjX9JmI1biy%2FGTA74e0Le5szviSYi0JSOsX9tOCwyimNpvem3xYFPTFMJ7c0b0GOqUBs%2BNmM6zzhW53fCRr0Yai12FFtRGVPfPBhAISiIJnBxqhKEp5hpjAVX7iwGt2ga6SvZbPw6aIBMMOkzxerItAy9GnqSp3dbwEAHFtMPCFq6pKWwV0DaD715SBpgGOkS7eu16%2FerkEMRibQEjld5tYlgNi850kQ2T0hzxdtTlrJEPsFSZo13z4wE3x7c4oBCl%2FbHEtcnkIClQoi1NHb6O025gAehwL&X-Amz-Signature=e1d0b0edeafd72ceeb1588ea2dda22075017d2f4c14495103b23c85041c2eeee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
