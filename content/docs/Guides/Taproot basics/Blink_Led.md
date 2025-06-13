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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTBKKTT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBWzSyJ1sTYPlA5UMR7OsZg7FtOZtN3HNuHJcNjdtNYsAiEA3O4egQpmL37J3TDGSesD%2F4grDh2Ya8STQKZxFMDwWb8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDAPhc25kaBAllO3%2BWSrcA%2FZY%2B9Zn51%2F%2Bo95HhkOlY6%2BLYTz9Q3TZe%2FNOnYThzJxsv%2Bkz7Uc5BF3FDJkNjJBz8bttnt2j1DP5o0fktrMO3LfDPPBp7vK9JpEMAKNVM3DRppQfKV42U3vxMx2tSPQLxGsH0htX%2FMUnNDryEXDbWTB%2BNmW3CZhNKiIRbrVWtXg8yAbiz4Ovn0vc%2F%2Fz0N7rjI4z6oTZEPQHoiYA5zrSLmMuB%2F%2BacIfdziNWBzXsz3mAzg7to5Nz0Ulmo8xxJGyzQPVfsrliymjfXL9E%2FbSwlhiCajxZiobBeKFOqgAN4a7bnWwSEgTnoMeN1f1af6bMxJiVwkkBO6n3i2myX%2BzmxE2oEMyERYpeQ9ivsUp%2BVVXI3NhuVauUXvHoZnZCtKE1ppB9nCvIMwnmNLZTXAJ0UejXs6hKmPkx6zwZGPNw8fAFEn8EDn%2FikMkbsEwWlObqRKffRDhMMqkc1EILwrtWZROuuR%2B7ZSqUHvYybwKsxaNQaAkP56Bvy3hIzR4%2FVteAEuBKTPgWulbqSPHJwtyqf1fAROE9paAHD0OKfilzRbhsWK7ReP22PZuts0bpc%2BX4oyQwm4v7HzjDbh6Thfa%2FQnOMIhvsFO1N2pS2P9I2QHPEwh2Yh6jNZDXG6EczDMICqsMIGOqUBlLTQp6QYZI%2BNsO3tZMFkYopjwpS8veYY97HzlqbRYG3BE0%2BkUmriuOe4beCtvO0QADqJtj7mGQY0sOH%2BUqYH6Z14dUoXXKwQYds%2FNzdXz9V7HhjigjRWZ8HpvIv8ZrmwLNoCimeU960k%2BCUBvfbsPTeJPSWzbS5PqHbJwJLMKhpmidkGiA7De0mGyx%2FM8L4uGOxyCIhqHMXVwfl02UKlQnzTCtcX&X-Amz-Signature=9da111402751d3ccfa146a4840f67d1b9d5161d2b03aca71b3e28e1051d1160d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HXMIZA%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC3XVzGLEYgDkwtJFks4fNwAoJY%2BofKQUCJgxXEYu8oGgIhAII3la6wOFwvdSk%2BCOILVZNvk964WBVXiC16ekMch4XxKv8DCBUQABoMNjM3NDIzMTgzODA1IgxUbrOBngTBooDxCy4q3AORd1cMIhTH0eUpATNRMskZ8p%2BcKL0pnQ79y7ioX3p3ITjGJ2NQKcNbT9SAoEGgVUtb%2B8pD2xWimlV3DZTH%2Bq9zk6qrL7%2B065NH8cuKi7TJ6Bi%2F8ZCvqhYr7RB0d9SgV%2F7v7Ru1W6m4Gi6Gn1qiKGW0fIeFcmRlRazvEQ%2BdPdLmepmKzQarW1eVdqMO%2Btz6t3I095KoZ3ig5CT%2B%2BjPyr23EtgZbqzijWvUOlu5EPjtVvNno%2FR42tSPrqIauHUZhI%2Badpz2B3uJAJw%2F1SPKO6ESKQYDxdHvILJztH%2Becxj9TWj88zxP03nChRwznpfZi3XGp4q2N51BVlqztdMWD8w5C5XiSyPhTKdkzNuhZl2rKkY0oKNhgOPZResn0tK5IHVzWfmihz9GdtY7ZecIb3B7913HwlBz1ZtLiKC%2BaltbblIQjgsM2mHFFE0%2FJc6EI2jO2udMTfNLuCRjZ9%2FForQ96jR3iOBMqWQTX1e5I3ac0lq2orUZ59fSpKCXbpsj8y0Tj21ZvNL089FChOLNQvGNO3gdUBIxZv0q1xyQTWhq8Gxs2TTGzwWoLtTzndNRHSaF8UXuRkbeljQ5ij7h5LyASq9vJ%2FTMLHFPlDycHHtBHEVA9Xjqx7IA17aeV1DCAqrDCBjqkAfpFdJkWrfYhYVUdyxkxSPcxWABni8UrEZwFfVYXNnfgC4Tz%2ByV1FQickfWJXyQpntmsq8ZpAkpo8IC6aqqIFK5MQQ7ClxcGG9OV%2FMol61gpPP%2BaIlCUks7MR1yNVToEyMJ94XnjcFu3WVUkl8kOEjztjlhRZ6Q9F7DRFRiAb32NPARsm27IbLGamYJ7lA6tHOalSFOeBUwe8kvyy8MbhyFw0%2BKF&X-Amz-Signature=d69ab9436e12fba8925359842f6822c4f1b1093b529a6ed5916ffac82341c4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
