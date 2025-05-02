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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKX7CJ3C%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIDrD4WpSkX6J444Zm35ateDyyc86i0DBFQbI0dx5M7B8AiEAk2Q2M21XIQOq8MSv94rbZD1%2BRlliVt2lvNyuHFuVo4cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTsX9VW5klQka%2F1hCrcA03gAgzheFN7uMF5cOLWt7vwZrzt97ztvxSwABgE5sTkryJ7ih9QZxtniENqlTFenXkPc5jRYdprwPQ%2B%2FUGdTn43BAv9fFtI%2BmR0ukfsAhNFlFY1vvJdNf%2FvhE7CDVQmDeZO3c38XqnCXJoT762SaRsc0JIGpmpysGXmNSIwBFSU46Q%2Bjt305ObtpeClQ0cSNa%2Bcf4qVy3y%2F9pKsiVfeG5%2BcEZlwmyP3%2BpxIgJNKLfatF3nNNDBmUDnG%2BYPF4h5VaH7%2B2v97MNynRh5NGDka6Lp7dDIDF9TjarOdWX%2F%2FAm3cCqX6mvsxXRbfts863cBOrlWWTGCJaobOoW82pUOOgYzYXgej%2FzfKiVm4l8LTd%2F0ttkXGi%2BDlUF3bU7w8R7%2Bd3nEsf27xKYQ2yVGRY6pC%2BmbcRBJsUHWtEnfIBNAMqNMX3EPaBf67IBEcpQStmtk%2FqJmUUg%2FNMK5GBNLcmYDtL3MuXxnugV35BKNWImn6QXD2kyRl19vKkeyMWOOv8gPD7GnUT9Vfx1cUhc9jFHCAg%2FdC07cHFxeeqh3Fx9qh8HAR8k0hTFfJxh%2F7D46rNBMYuv4RCMN6ewIQCYD%2FIw6Cu5TBLIdx0knYGZ4whoQTILzKxF4nq89CW6YAwIZ7MK%2Fk08AGOqUBR0SJaDLfp9y6oIVyxHIl3uY656XbGLP%2BFpC6WZHpNszIqhVfPqhQ2%2FcSrq2g11Nq3msLn%2Bt2PLXKUoTbro85jzJHEuihafsBfV7O0okSN%2F4exy4Zs3pLCAscYiEZ6NreBO0iIa0FDThcXI3IKhalIR%2B92MtmUINVc4u7l4ukQ8pQhKl8Z1aBHwTvzzb4s79xa8S1r2m3tpovbX4er7wcesSk1nuz&X-Amz-Signature=135b545c46777ac28dd598b1f67ca016330690744f6fea80e9df8136ca2047ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCFWYPT%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDJGrFNQtwm6MJezsPM5vppR%2BNVCaEg6ZA%2BuCKMM1v3YQIhAO6oxDwH9uosdJqByhvgMFDi2Xh33Rs%2FVCkf2%2FL6XQccKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEohPVWNi55zvnat0q3AMdJN2jxl69KSiil1l8KBDvJHNcVWT%2Fxy94LBjzbKOHwjMxvzuRJPMcY8VVioXMtgY0ApHrq%2F0tlh4HgBdd9zitRm6EVvCv9RS2gvodWDmD1c8%2BmHHy5YMt29mtET%2BxYrZIpeQD%2BP2ZLmMA3KR3yQBLuEb0n5kIC8ke8ctm0goTUsdK80gVC6hsp0Cu1V4RN8LrTSjAA78NECGM0yriZSDqfNx1lB4HJp46lP%2FUJGLxx3yM%2FyrjltIxbKf2N%2FCawmERoE91UOA1dp%2FvLLSgZs5Y6k51yp2hcWbHxp1wrcqPOuEM%2BWF%2BfSRgraK5uUNqVbQPEjkzGyJuAob3Umi38%2FsmQKkw0PAA8fC1T4XclAFdIQjKOk1NL%2FuCIfW6mnJZlvy2B1oKAatqFW8d00TuggdBDe%2BXWf0vdVHn%2BGPz4KNuC%2BaM1%2BzdHSo2K7HCzFjGiMhBWczJZIQr8zSEJL1iiS%2FlhilVz0TelKG51QeV7%2BuaJokFyV8xSaL4F%2BqvfDBTfKctznx2bcpX1cSFfElhagofWttpmVq%2B5zsjas4u6vbyd6maQNYP%2BRfIWGbiEjh%2FpY8rezrpbODUrgBQVM05P0r9PfmL8GS4oHgq0Ea%2Bbguf5YRHIwYfGjnIaUwWATCa5NPABjqkAVbQBjzAcWE1poQ8SlFfA9GYYBKLYF%2Fn9zhbKCH75d0wB3hI7TOTiSJhUEnt6RHl1t07DNtBKoysZFaak%2BsgmRJaW47uGHxEqmxFYlxq2g33jIkRLh9A%2FmH5neOVvNlsoYyn4zS%2B4ZY%2F%2FZxJQzdQ%2F1j1BPG0hLxLol%2FQhibQpMKZ%2FeHLJpLiFGUsVuLBZJ0v622QBCaNRquTMDODi5cB1oxFDLGG&X-Amz-Signature=7235e8a33a69574058673e2181c9eff19b08fd837f19071c85d46c74e3171678&X-Amz-SignedHeaders=host&x-id=GetObject)

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
