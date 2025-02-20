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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTQVKVT%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtY%2Ff01NRJjkVbLGivJhThWa51Cmc8PGPYMoz6X%2FacNAiEA8GKQfQ9hEEYWFGwpcgAfvm96%2BQs%2BR1WvvV22vlZ7Ju4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjl1K6zGM3gBayerCrcA4P1KmTMHF%2FJpi4gHiuoVbbcoPb7fAGQ54o%2BVn8JpslRsIVQQJ5%2FExFGJKqkFBfV6bUMhSZiGCc94tIXXoC4S5QfQIFM6UrV9jWENi4qiz197PSLVaYhhSfUFfWB0WpLPycAeyb6FNOIAPIJmhrGlxdidD0tlw4gtdBmon6Op76kwKXh6ftV0m6yVpuIun8qjMNjzTH94WdmeX0mMRQBcFGtM7XKdMag6H68J7J8oM5tQ4%2BrEwxrrTJWfAvJlW9Nx2EAgTrjRbfydhlRTBYAUhjQFolkau0pXjTslo2swzfGATA5ABYPziMvYUUA0XfB8F14123sB3O2wWDxNTY3IWhXGmEMEebAbfw%2Bk5P%2Fblpq75evMT%2FQfM1DZ0wOJjSt9ZD5Gotxl03cq4%2BQfDDgEYSZ7um2YiTpWFeNCKHAPKnvyHVukFw4xY22JBaXURevRbEt1INv%2BWbeAeCGks209Fho%2BqAoOVZOyunFzTpisqE1dRMh1fkTF%2BhpHRG4sZeUb94zbUbxgSuKmZisPl2Qqzw4iF%2FGaQ8P3fMfAOSffJTFTYPWeOdtbh5yzeIUy1kw5INChdCEvipsl6JwB4XB7lcT8c5wTyucNtaJhP1BAfvXjAP3eoow1XVfzz9cMOqN3r0GOqUBHGRxIMyM9roYm3ItOAAPd3mYIor4xFHZHNOkmi6Fo58rbO3sSM68twwoNAuKTR%2FAcz%2Fm97PuJNqYk7QdLqsKYYmPYNRX93MB4Dyk9aCkppUlC%2Feh88otQdYYO4kayhS%2FgNEQSW5c8I9ten3NoDR%2B9vhSc%2BbNiz0vHO6tSpsfs%2BPWAsONHnl2H1hYA77CVydrDQbqZnIZS1g4NR8duWcBvaN5dD4S&X-Amz-Signature=9acb804777a892c44ca2611da1b1af5b7fe7054748c671884d1a2e3393586f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNON4UYD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3GH9WmWZ4ppkqHT5Lip2tfdlhkYSAyZyFxPvVXHdp7wIgMBWeamPp5yVhdGbbEzGZ64FcVG9cl%2B3PAcrMvKchQl0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJVVatBpKK5PK9%2FKByrcAyVaLYv2Sj2u4hfmUWWt27lpga2rVt1CVevLTzjWIutTcLcXeeqjfnk%2FR1A9YtCHz2hQVPuHgG0lAB4qAmaoT3kYGLYdS5cl3nrlNGnTnhYeDEDGg0oeOvBRfEcKIFUlAd4lD336zJ14vfdWj0fJUNBJ0omdLStvAstNnjeaXxs365nu3elyLR4FLbLcTbRjw%2BqN3P2ml%2FpI0Z4OoAbWA%2FrLYm59w5TfXwg9GPTsuy%2FxCMe1YTxEJ190ZWCE9nbIWrxFkAKwtwyJiKETWgSKje%2FZ6s%2BfmWOu1AnyzZCEmZmQQf2GUboI9efy3TOFTpI7Qqw32O7ixy8boq4gZ2MrtIXV6uPetgH2Pi3QMgjkYLZXjE83Uqw%2B0YGwG5izHF8vdHyjvoWe309UE2N5KWk0tBVrjzLZuWcGbDE3WoJF9JN9AZBzB5A6lQVhF04BQjdy%2BoZHDbfThuoi4W3XXjKgbDvCJ2n58dMhu7qPWv%2Bl3KJXYjSrmzXHF7K6oRPW9IF4Q2EkdIa2FleWrFmxXjhBZhNbwG5Bam1kpuFNmTKlOHPqG0mQB9rtn9id4siCyc%2FceCWTYPeU0fiaTsFpdGFNmDqw%2Bb25AvMA5SE64WaisME5zCnL69OlSlq9%2B5o9MPKN3r0GOqUByJYqlelKTxyet3fYdTXOPH6VdJ6Zfp8HDb3uGxdwdAHmGTLSOWcO9XV7DzzZ3akyZk%2BL7qJ0vxCR2yDu%2F3gmjkWjTstTQMA0bI%2BqPxVQGEy%2BFuLAp57nhUgaqvnn0kwhk%2Ft%2BGDW5ARSq2d2HNEfc8pBgnF6qJ31%2Bh9SskUttP56ggFZKkEFptVLV8hCFY7pf4oSHGUO2UEIgKoKufpbJ09UJSgFi&X-Amz-Signature=adbaacdb99c698029e49bf1b5d0b65a8ebf78c35dfbd97405b2da57be5f9e6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
