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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGEJML3M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHE1KIKU1vDIgKBbFahEfLYKlERRvBwqmf773bT4lPLmAiBX%2BXBu9ACHncUIqJ9kFAGhdQti3QKCW%2FvI7045x23OUCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMr8dKLohP%2FIppnCMQKtwDgJDJ%2B3tgx4qHIylS%2F1M1liAsV3p8KVTYP%2Fp8ndiCSh%2FF%2BIhDN%2Bcj440yhwe3B0nQ6cnVxA%2FqmnZjQpww1zPIGFMG8Jp4Z32urnSOzpkExhit9fQQcPppChleFI700HmrG30SJ5Jakw1q141hh3th5VwKqAEyqqcjS8yR2tcrBeO4kGcmlpIS5ANV0Fo%2FGr95X7g9AQL%2FLBxsJk7nrVBUqpWcXz%2F09KGsqIRlZdGjIi%2F7Jl82TC5YhW76uN2bRY%2FwT5fUvhMG%2FEgffzmzgn7oGEK0IxmcPiNmpgd%2BCg%2BXHOe09Bvr9SSWNhthgd0OcZ4dOdUj6H%2BuUWcARAKk1j%2BoVwDfd3QwT0Y5vOp42TEFzIE8rg6%2Bw3%2FGuKad09lTHiH4fdPnqasxOzMclMnn49s1F1tmyBGWKQxssQn%2FUCH%2B3Rp2rtqzk4orb5TEUASjek0nbPVNGQHic2DXpdlGHfKPuF9Zyk4d%2BGNDgNg7eo3UxCZh7QQa2t8%2BQxDwfj%2Bsm55dv4VcMS9FRBEVsCEZcN6F6Kmheth18uZzK4fm3ucEff306WMgVVdxQ7N6uioSW1YipjUKtFyksI1CRL3exl6WVAfTFDfLvsvyZffEo3Jg4wrPeAbgqnbL1Oq5kv4w1JfowAY6pgGX0SzKL2Nna31mtCpIkQ8xQZUJ8jauo29SSyyBfK4GJkqUBfU6zHAB06Qjqa6kcTihrH2zqRAPAALKZW6vALPemYT7uXAHbv79ukSWNk5hgL8CNVeWqS8MOXmjbBkpKNM2DAIh5x1CDlkJ9pOXgFgVsqTd9RP0KfPAfXHltnp6PEXPhN3J4ngd5zE59ZSoGqNZmHKNcpcIFlFdEvVO5wHZEy0%2Bo005&X-Amz-Signature=fdc76b4b54ee84ca8aef87c971be3fb589d8578ad1861a5b41142789377d5873&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKW5YAH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1QLvab38G1urt2yTtii3mxi53r95WJBecazM5WhUFBwIgMTvddP7yiHYmotVBUHnko9JYGt1HmPJmMgWcbiTcuIAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDO69CSWeGZqt6tIhPCrcAwKTX79fSYnKkeHqpitLkXmqUX5%2FJwnTiGbqLzEv1n8EA7cp3JX3g6q5Xo2Bqr3oKG4awGGXCtp7mSBFtqkyhNmne8jyx9czX3uHIpsPN7KDerCG9JEdLoZjuIlyQQyw1WjDTbIvM71Z4dJ29L%2Bk37Aeyc8zCMkkchYx3NRp6b%2F8hWaJUZBwBxdCHWTFcF4H4P1JKS%2FqX%2BrcD%2FLz%2FrjgiaFRiJbbjcNA7Y9oQ4cTMTo0mTghEdhQnFvK9TYEVH%2BLbBUhXeZHh6WwbBey9x7RAKhstAF80oodbEHN5Cdpeodj4GvztZgmwWgxttxNgatI7OD5Dt9DA71BBJWk%2FJk%2FremL9AZ8TKHT1BDtTVJlq0bqgQWH9KMbTqfJ6XONEos%2FoACWfuVPeSHVN3wupVW9d1bEFgBZ41WQuPD7Xr9QmNYes5JHbXgGVQ5DEquXaioqi2WnVduUjePperykGi1F6eKF2ePBNRIEfdzCvz3yTgviKTctHygQpMGwINJ9X5BZyOPRS%2FgMTlTZGIZ%2FsUpR3sn%2Bdvdlo7pYtI9H1DF4Lnb78AnzhZ5Zg64cwBjTVg20S5xZiZ6SHBESm%2FqqeLpx6nwhWE4Y3GxEpPc0osnZDlEkiDkj2gm8qizWlkz7MPqX6MAGOqUBGNLbgcvdg1pBhrIlZWyDRZIFoMV%2FKE%2FBsH%2B%2FEnm5S%2FHM4RuMfaMB6bczAWQR6Uo2mPtUJ0wzYFIqq%2BsZjmK%2Fp%2Bhp98tixdCqfWKwjzAjfiLk47Q58x52rTmLlNUSIrHLNAjmaCfnnmPZH6EaaPLEZVOgIPCdXM4CKubdsz2UbwvgsNQ5%2FWhmIh%2FuiYKjltLjNs2zNY29l6KGyksYKSCtUgm867Wr&X-Amz-Signature=383b3408cf5b0a2f9ea97fafa1d349d7513d252cc496684ef0660996d311ca1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
