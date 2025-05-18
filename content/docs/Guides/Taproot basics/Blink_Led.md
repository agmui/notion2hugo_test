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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CIPG7ZQ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx3UO1Z2Yt0D45e1eaZurqghHoZePu0rssMadPlIK8aAiAMe53btbMpo9BoHZLQhKRcas%2BSINnsKUNyTE19jyb%2B%2Bir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BvLKsWkJuI4J%2BOWlKtwD0LSB6dNKuEoDdwpS2WyeRZobIKzfSxInLZK%2FscKphzfqaw5VsRWnnbMfsQXHCTu%2BLoLEIT1o0ovGm3iS69WPlpw3D88C52avwT8hDO8MjXwem1Bfjb%2B9uIkP1Pw%2BeizL5s8vzSPfKL4wOdyhK2tMkKecVQb1sss%2BwAEBS8ODw7x7u0rydvCYNGChdXwq25ogQhEufcvDgdb%2BHIClwHF3UdNrvk5qKJJZnK%2BHnEJ7DYIB%2BXVCmWH4jLqhXKCFo64d%2Bhj%2BNfcOqeHdw3SFeEs%2FyMRXkPnJ9vn4RO7SqgOpQ8MH26bc2dWaU8zOullBUqjo00tZ13gyGcW4U3t3hzLN0%2BYmdnkDdcF1pKIBW4CVD%2BoXQLU3zfXjn1u0YH%2FnLa4BOENzG2jPeFLK8T3KA6%2FLthesb1i1YAmhl9DZ5WKjujCQumUOKmoyHcAFwDeoVuyemAZKgoijqC4cWha%2Fnnc%2FhuHF8Jr2RHD4m4nNr9rxRJmXcc1zVZJ0DNC4kiqWLtbsYmYR%2Bwvs8DVox%2BwW%2BemehyrKoHyLXVTb3aSicXOrhCxtN%2Bzo7glzhoBfy76PiX%2F3ypOf6IoeGoAwvowoQlB2O8u3kfVzdL0JqepMC5M4n%2FO%2FO0GvgYBKP6KC6h8wo5WnwQY6pgEvQtwEPEihRMXQL%2FpXMPft5kp74OInj7%2BnY9McOUVvlHJClMfi9CATfAvrCaJeQgQzojC3DH52G0viLTdVuKZBMO4rzEDwFX2Nzagc1GYMsWrr3xlxYw3MsXbavs5OrYTkeEFqIw%2BX30vdMKGNmKyPU3YyVplv7%2Bh2Zi7cwbltNM%2F2Bd3CLQReyLM%2F1HNP4OK5tjJLiXphrhdC5wZMTCINKezN7%2BPz&X-Amz-Signature=993f10f2413aca76de3fa7c6cb2a410f33b84a2340bcc38e84a2f6dda213a53c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BS43U6F%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOJiSxtsIRrp32mj9Jk2vTVmVMTdxpEsKM1tCyGCUcaQIgZDwRovfyto2PEEHEoavba6GLZkzWBgoFFH4owrlRG9Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLhY6QI2IGL3is8HkCrcA98GnG64R%2FPKZwOKN086oVld7aIgGyoae55ATrIiX5%2BIM6PcNaWXPKe4douuF%2FQ93cjW%2B9Yy0vOuZ5pJgCb6CpKe8et9CMM%2BHekonaqsT7R2fxgKSHJfa3KGRVlRdJUSe6lXs%2BGkNGO2ZNwp3Fe6cwNR%2FfuN80eGqzdZIKaXL4roHTOEhgK1eqwZRcEPQEj0EwRLnn4U0wml8h9ulGeQiWYmXHr2RbvTPljlv0aM32BhLJaQUUUI2VmlXSKhZ1hokKB4fL4obzubjI6NY4XIQXkxc3wdsBc1%2FsBTWVsQpN9tmJ8BqOVwPTYqi230qKokFhT7CwqxROhEnqylH149qzDD25ZCbTz4XespglY2nZ%2Btb4xtotq4Cp97dlGXx7em7dg5n4hGofJwBDvRQSweWLJ4ZriwQ%2B%2BWGqFq3qavjn3zsOo9yfxa46aCEJK6C0DWeiR4w7wm%2F8v5W6a%2F7YMx4I6kaw9JoUqsyx4hf8StWn97ampl%2B%2F3AyKcud42UWLdL4ASOEHOpw02T4AK2PLQDYZs5EsaNEDhrjClvARy%2FGEK2awI48T9uxuIW9klZ7jDeEQR4HEvXILoy%2BEU3qZ%2F7%2FfDeqnZxgQjQ484nToFgu13jJsTQB%2Blq81kXizuMMKfYp8EGOqUBunVhJRqGrgPp3vncM7Uv7Q7Eim2C%2FM%2FQik4Dqjc8BQdvndbHaAq3g5vzY4NIOz6adj97My8PntnsFCNL%2FBi6k1ckIk8tENcJG%2BMI0SRcW3%2F6WizRf%2FQPUJVamPXD9ZMQ%2FmXQAwakWlXIOkXzGVpAGCzGfwivqDEPWWGzw7WthsxAqmCq5FJkI6hRkjQuScARFpK3o5y3TDiHI%2BddHjL6Cvv19yt%2B&X-Amz-Signature=c9eea7914546f5c4966d70684071099f284eae9e41eb98ebe0948fb4133e0ff4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
