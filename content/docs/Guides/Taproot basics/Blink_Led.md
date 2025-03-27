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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTCLPBWM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR0YUqnT3slHQuupGLwsdeTPEHiDqvO0njJUxmrfMHkAiAup1Socv9IaAf41ibXdEG8sJ%2BGTgw%2B2dvk8HQk%2Bq6Sqir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMq9JYECCGGiAiWNqQKtwDXsc7%2BCK6royiqhSatFhoeDCZdqpWz8C07p0xlrSsR2xQL5mRIcWLH67SEoPC8CQn5CqHUOPijfakk2J5%2BrmuoT8NqNkiaqh7PTQnCpY%2F5AhDMUaNhU4wF33zsnFDBXQDXqoCANyDX7Lmr%2BOw0AhhVwH26vw6nY0gud7rWekW7psMFDKH98k%2B%2FJ0BC%2BJiZ1LdXKaL%2F%2FR9WD%2B2Qky9%2FLVZVhKEjTQtZGB%2FRXzyZtcHgY%2FPKGmACK9p24aTDQpVl5TkwypUVLU9iwNYPmJmytugxIKhdlZLNmM22buWsNn%2FikUTtU5SuyLGScc%2BqCBpy7FWZg%2BvZ3TjKat%2FXH8FuZQ0uGHHhNkeokMOotJDpfdMq0J2FPN%2BJHCHLlFTUcb4TCbRKO7FY2vBF5NJTtrT5Grh1o1HyzQsFACRH5eHlOvJJmo%2BHRh6PY5IIcqksIu6%2BT6mZy2X6CH66RfNaBKSDhc0crul6FYUv30QgX5Y3LYwEMxdsaf0cJcg4YAcaMzYAhQNbi9vdKeoFB%2Fo8TciKZvLpPF%2FiRHRcDYBbwmyZk4Jfh9ILeQUOtw8pVSqpRz%2BnYVLWAJFZmhoLsZXBP1jbvPRj%2FXeaZwYg0dHEOtYM%2FAsq2EEOV5JK2t6ZPQrvhQwkPeUvwY6pgHykAa1wpfNMc%2BK8rSCocje4xnfB%2B%2BCEE9psozrO9Nz5pa%2BLiEm6gC2xsAZGIl1K%2FYy%2BAgUMjt2ybjitN%2BGEWYI1qzd5fpgVPHKfQFOFu9PlPYFfds0HmvAZAAgY8sOt0OZ2S1BKGnzeddjv9rtw3BHSljpWBlPjL8x34mlR2YXEUXGsDrwL6BplmzUEPB6dJKRDRWFuti%2BjthEXKaPd5dSbD%2FolSDr&X-Amz-Signature=d892038450866abfbf0b2c129cbf45875353578d785e5268651ce66d7fa62f40&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PLW3PYB%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG57xiCTgQHanH7KUhFdjedZT53FJPamsL5zzMQ6wVHaAiEAs1%2FCqHxB8E3rpTvJb5miqGBBbw2pyYV8hCPxdLRsHdQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDEQQ8XPKJPj1F8PiyrcA1wgd1lIP9KvTBIeOiCbJqfcwFRxSp8Bz%2FRx%2FwTeTjYeA5hqmhWLUYSFK1IwjwK1AGpPAvJc2XQl67ZJ4hNgY4nt7%2BkUurt2pIucQHH6Cmz2BAkt85PchMjiagfxXCb1KduziwsOWUH9n96rTyC3%2FepPiPOSm%2BCWRulwwdy5l8Lg%2Bu1fsG8jJzA5tFKNIRCyfo7yLMD4itZevywIEPvrfmQ2YARunTiy%2Fi0TYz5486puJUasJgq%2FMVXCoKFqpRSEOwQ3CZP%2FEp6V6OucpUMsLWFYh%2Fd1UgNEfBt1w4fEJjjGGP9aZMPpXOPAfDSgFq%2Bcx9VwniMpV7iN5YcAfkh%2BbmEPzT%2BYPwDUOq39zeU4MR2iRp2itcGBg3UiTDy3qJF2xgJZMVVyVbIgghqrKVKVfb4GX82uN2NL49UoiK1LTV2UBnt9xCrw%2FNMHJ7e2%2BovL%2BdVpzACZSofy3oGLvKRwKJg03a6Ascf3M1YNTgaw1uC%2FV8gl7rg7DwIklxXVVMnAN25eBHizKWB0PAEldeTYPI6XOUwVxxPX1YQs4RMRcSqwKNGDlNtB19A%2BX0QI9Fs5WT2bdVqlrx9cdfoCMF22pBmrb0FreZR%2FgdVLXRk9Ims87jY5rIzgBVoglOKoMKH3lL8GOqUBeMd9iJZjR%2FcsoPZ4QAbvR0NsNfK%2B0jAy7ZfUjMo8CEDbuW2ikSFNhYVXfAe7H%2F298H2n4phENEHcbylg6GDmoNo1n9Y4Vko51Oa4RaOTIoye7q7Hvmjjdx5O4p0JgkH%2Bu6aXeqsZCuXqKHLEhMfd6XZRLgecfiDluClZugJ70hpidsGTQ5kg%2B%2Fe6%2FzGeR9frt8%2FTlvgcQaJ7RI8rCQjOtD9ljXvv&X-Amz-Signature=63a956b53efddc1408685e594186c8f9b612884685188c4206b815a888ab5ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
