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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUCFNJEE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCOlZq5TtkcVnLAgSWGpm1Bm6mLhxap6I5YQmAUKaxnVQIgGsrjWFhmYBH5YtF1e6GfJSNuYxi4%2BOtL%2FL4CzKcSPlQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKgOolT3tFoLqVkmvCrcA%2Ft5F5ZBkFpQUZTdPd7v9rC94oG8eccHBb%2BsKHE0M53vUhnN7IkBJ3wKYViCfWWjdEh6x%2BCFUCOMfCdF0wk5sdMrjer%2BoXwe0CrnRn6ziDyjf%2FUAe6eGJrrmPvI%2FKMKsBPO1Lcr%2BPPUYTNYI3OTHg473Himn%2FGiG7da02%2BcAYIfTCosFhMj9VKcsTyYK9kWB9xs%2F9Lt873yyYckT9nN3CtCvpxZEmQ8nqzVywPgrxCp9reBtXnT0%2F%2BCz4fbjDhFpzhSAeJOA7HcHSGeKfLaTa7ES8QkRYWCAu4LBtfKSbE6OtTALH6H5vLNugm3yIw9E1dreEEGhd2NfkZHv%2FZk%2FVEaLizqH2zA3NKRK0EFSt8Rvdkrxvhu3UHqgC6c7NDiZIDsotjEvWL5Ko9mNgvnbpehk%2BANcrVlaaEDhKXPjbfOMT5S0KGJvrErnssjZCoqoZqOaPMIzNJ8BaJZGaj4ZNjqBTbGoG5mi3vefeca9I7DyerBYoJMFLsEEqyKvS9IeU1Yit3MsM97aQ25p5y6CWbooxx%2BGIGgla8iYru7HMPTFFKE4odzZCl9V3yMAGdIhyAQVZ1%2FYKNtmbh4z%2BWTxyDpGg1bMFTU3%2B6HcVFxoeCGQvAaSvZ51GgqUhwFuMN2Ghr0GOqUB%2BfOqFRER147vFONidRpMWiX0YePLeGVGeHEshSYFWHkwFUBJ1nUsAB%2BxXd6HzXAKrKmv3vBPZTzyFwfuSS8l3h%2BxnYlmQSG22dtyWjWS5CS9z7USV6EIIxDoxWY%2BVKMjeD76n%2Fk2JxrqjueQ%2BXBtbqjYbclFwfodliY9gvrEUmeOlnOz%2BdT3Akbs%2FZ2jKCH75%2FCBgTz0is9cdxABtOUQhNY%2F%2FgPd&X-Amz-Signature=76ea4b72343331aa5e674c8cc1c8eb2d551eb9e5b5d19c94d509f6558e6abe83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGPUBELI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGvCoGhhp4fYfHhfKOq%2Br2kHo1manH8C80r30bv09HJRAiBCGC4k5KC19Sc7Wbt8zMp%2FMytQ1PSgN0RCdV3g5kFs5yr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMwHefN3IyXRP%2F0iDxKtwDwQ7PgJ44mjvuYY%2BEkZZOXi563KNiwt0134FDPNyBUyaHqnSgpik2HXCL5XQ3Ia%2FZvGC%2B%2FWXtd9cicN3Fug9KYV0lm5YKJBK2zfEEuJUJ5QCfmpIbNs%2Buopr2ogwYcm6hWDm8n%2B7DC2uyYNmRVSdWIBMEw%2B0N5M3Dc4N8n2i73qRktu6b5Ua0EhvKv8IgtREZxVI3iKDPHuqO4G0Wt1q9h12gGV5If5puQwdx2B7E9SKZgzm6VRAeMi0HwVuyvu8bmKleUVSVvLCZiZ9inYu7UguX4udaUd%2BdKxKLNUDUwqvrCyTChbmkY4tJVdO6VTFxuo%2Fb9v%2BnOTirM6j5Mwt4EHynMClg6v0eX5YNP4n2k7MhurKFsIoI8aOfmchkWisu9OV7I%2BMPe9n%2BSx1oxTZoyR4rMvubb6kRxkGzAs%2B%2Fhhc5u%2BQ1dqjkEv7Dp%2FmLvdQkWdYHwOZpGbn8jZUxEmmpaZYKaUIMq7Mp46KrEX7xHSTKz8%2FZxTenYrqR%2BBdOTDksiAkfenWVj9DNSVTOJaciAyeDTo0zEEjg8zmZrkw8PHx2kINIS80McTaWcxMPMmq72ISPKv7C2zeGYyZgn35kj%2FQmAH%2BBGnF5vMpeYmRyZNzgo4TrY923z33vjr8wkYaGvQY6pgEH0Kr0rLh3D717rrJ1smRyhSqBlp1TpPmxj69BqAd4kDoCAzeIa1i8OqbqCww3oEhtJF3gPuBeM5e4JWjlR4kUV5GF8m6bOPIC8rAOuKboqFUkaDpQRhg71WCK4%2BlMNBKu0EfJBkvweK227NkUjBVNXxd3O%2BbeAe%2FtKXf4YD7uIL1sXoRkdrRMKYCJj6%2Fk0JPdGBrIdHxxflYGFY6bk0shu43dVmCY&X-Amz-Signature=b10816a37e9de6166e4814cc61e0eace4586f55ae7473c3defbaffd9996e9d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
