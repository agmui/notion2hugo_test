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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMMDXNIK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY3ATn6H0Hs%2FZltguVGjEgxzPKkHAPlzLqN7VdLna7DgIgZONd2tkGpPnJwhyD%2Fg7sIO2Hc2lFM9%2FYf1%2FUmuxstNkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaSiODQIT%2BpDZguuyrcA4zjX99j7R9IK1VOvvAU05nfcVzbCAVFnLGA8fM7mBS79eZiwWatDEwUcqc1hxraNqiK8H%2FH9f9Be%2BRktrOIgp%2Bd2VQg%2BJbvmkN%2Flu6iP92VYHT25%2BPVormWf8ZEoyACLD0eMzS%2BZ%2Fo8az%2F19pn%2FTZEtKgPXGtiNb1m0UPVE0oHRbf8vvlqRyGvDSEu3cko3Qo%2BVHwrwe1yEn27RS%2F96%2FrU8uhxwUKPo831RDyHbGXAVhRKO8nKqtJqk9TjioLKP08%2BDOjqE1ndLu%2Bok1YPnV5AC02IP8Cmxk0%2BenZfho4Z6vpO%2B0yYVgEj7eyGE7vT%2Bk5YyaRJa6b217ux7XErN2i0PmY7RVR2XOe4ApO6eG%2B4pfReO8OijUjbhijpVVQZAsOLBiqlXxqDgoX%2BeOpRIvbvLTSquYg3tx0BWvBWBLo70vBnORd16T6SjA%2Fd5QVNw%2BAl2SGA3iT6MVy%2Fkg0YGzfkeOL73WktDvkroEdQ3fe1gmkuW5KU3975V5xaGqxdCggYpZwc8mCNQQzJQaid7Dmh%2BHzsxpCExG8CURY5iLXBNOxCpwmhuLwzt4FiuzYrTwU8imPiHAHm2iYH3QzbzedhmxFKvXmC%2B1iKXM9KZpPhtCQHkcnUvkf28ucMBMMjBp8QGOqUB%2Buzf93bfUBZFtEFKTGw6f05cfFUHiYjqgrr8LQ4rKi%2FBgl9c7vKGB6cRtj5NJkVpSLfoeODWlKCbd8v1LsESIDl3KIbM0xmABjcM1bxU2bE43r6h36MJ1ocT%2FgRdy5%2BmShRrXRKTRv3hJBoFmHPUV46T%2FG9D%2Flj16mrl2xdWkGDyZQAzRTvaB5VIBiGcj1Xs%2FOfqIVV4Z6QDrD3kWrDd0XqtEHXw&X-Amz-Signature=ac83fb8c67d085313033dff79e9a42514876b3bcea5ec2df6210bfcd5f58ba00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHB5J6B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdWnKk%2BdSxRIOuwjM0%2BtfrwrnaQPJQRuc3nzGmgWO7PAiBoPbyJelqQ5bSXD1%2FhKCG9xj2hydxrgyWfwxnJz0ewTiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTVww6WrWANRrsLHvKtwD3d6HjvIJHDJMjOEXyyCwBDvzBeWMtQAF8o0jqpmKsTBwnVh1rhIKffeq%2FyZ5KYtooMMKX94Dh6GTfYQ%2BJctFoPgfMTmiVfBdiwYjcm%2BnePvHvPE5ySTnnFrERj4axnNALUJEVTewLJ7wInefIGlOxBMATIB6zqjtcHgbBWh2X1%2FEKsB0DerdxSbQ9X0OYT6mfT6llvdu%2FPbFfQK1flpVLhhiADLEsrLZBhwJ%2B3vfiN97hdylailcRPtZHQIjPrqIhsBk7JaoUqgGS8LDTf4%2BIJGzONlcCMha%2FMjFOSL%2FpegVd%2Fe4XjDSrrH8PdaecHr2FQFtPxtKlfolvgn6vrWIjb%2Fnd5mkQkJ%2F7tMT9sBkJUhIObUxiVOqjSX3mLxE1QQfs%2BlgyBb16UH9IHuY2aPn9jL7%2BsiTggj%2BY4KpJuSmeZdJpzO82yGEunmCscltBu4bt%2B398w2QTQah2%2B%2BTDqh3dl3sQPjlGNWiNYDvoSaLClwA7Q3tcGtycZpZ0IkPgHfyCYhaiOyOEU86%2FjppeKQ0Ds59PtGAFlvTAAyQIsRCtl3xRac0XwCI%2F2EjMfMmUKluF9BnHsctSz3pYt7Jw%2F%2FRqarw%2FOCxRFXL3kzVtKWT31lORbKazo1viyP9algwv8GnxAY6pgG6waQGMKfr6urOGAdqO2%2BZ9W6A7ZaaLQCY88nFHALNiucPZlDILC7vJ3tod4PqlRjeSWgGCJV96pSnGsNdMehTmxJAVYZ%2BfNDpJLgdKz4PtdJbE%2B1GWkRlMpeC152xThA9s0bkhy9vFNhuC%2FXrewWjgG51Umx3FmcbtSMGL1BLGp%2FZMj3nfC5lB%2Fa2CDh1%2FmdmjQkEQD%2BLxx92iMiSgZ%2B91vPN%2BnSe&X-Amz-Signature=c28c9d05c06ea10c2a68e0e017c39448344921db2168a40494ad065fc934a143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
