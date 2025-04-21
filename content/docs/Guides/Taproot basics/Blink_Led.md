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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7NI7V5G%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIEMfnu1f39Ck6%2B2EG7pufvgsRd4fCgGQHNCgXVEQ4%2Fw%2BAiEA11P1mtdN%2BAjVBbVSXzmOnypWYi%2BnmY82rEwxa7mLG0kqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3iYHem%2FCvVJwvGpCrcA5swUY0%2BbSeV2Z2D3D523EcH%2BRES6RDD2z%2Fah0qL6YJ7EyGjtg0kD6tveUSAAjB1Ck1RAdAXf1NkbGpx6rXX8qMfbI7y0eqvMt19JioPlTonFOhBIGutPp%2BP%2FN5Kh53L6apt0P6vMV3Fvh%2FirD0KNvEwXdihnMPNsxBpfAGtq1pEtP0uvqzlDjVShfW56xZvySgl5RhvIMTdk%2FBvpOWdW%2F8uegkKkiv4FzlepQwvHCkQgfeN9gnUxzsIy%2FgcqF%2Bp2KKDu9ttUSDJDI7Vij3Pk5gw1p5RdJHuXKFS6LbD2QT7nPjHBb2TC4ZgqU1abgyE9cJmU3I6axg%2BaYU3gsG%2F%2B8L3Seb0QZv0hk%2BjfwItnmQ7%2B99OwNFy%2BOmxU10u94x8Q4qh2h1UP4oRul1bBpqvce3Xd%2B9oja03yrRDhU%2Bz3wOVzJx2Q%2BtpTXma7OS7t48wGzZHC8mQO%2BtUL2YdLlbq90eDCTWaWAP1SwKlw1A5svvI5IVYHFVvyJK5NQq%2B90%2BPrN4P1RrwiW5c7RtdWGPwVhvnsAz4iZ7l42CnWJOCGKs7xsBY8lcRqTB%2FrbgyCx5tiRjleAWhBsNzkiKKCVNgXoZFZZmTj6Z7En4a7verTHoNJzAoacNxK8h9avOPMO75lsAGOqUB%2FfVz6%2BnLgg%2B16AgRj0VfEak9z%2BMPgIXin2WYkGa0joxmr0WbzD5Bj1fhmJiZIWxTnmnPze6AJVsZu8ilsMZMKSLHclaLAqpZBHCah6XLtPI6IwW1qJYbpW299G4cQQ1OtuFByL6IW15mu3QOrT%2BJDSoWJzdV%2Fu%2BAsklawuICtB30q8AB4aFVfNeCdpztdCY3fPAKaHNXUShQt3SffAjzcBAIIP%2Bb&X-Amz-Signature=f258503f6d1816d6a1a8390bf086f1a7cf990b4a48b50b36d4de136a4bad02ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFFHJPE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAOfFjDNhOGHR6TTVkgXi0kUGnFG62DrZBaME%2F9GelS2AiAdqYtI%2F%2BMC2tL0U5GAopJ9s9n0XN0B7THyDjzxgMmeLiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr5sD%2BH5Z3mfVjAH5KtwDE35KwcOcoOZ36t3y3ko9ahXEPHIcDIyU%2FHSnLtdcVm2l262zet0M1gpYD4Dm0LldNSbpi5y2X7u153RyDakdvNNsUvj%2BcnQCLnO8aW2ehifvIofwNi3%2Br9ix%2B2dpsTLKGLWbnbcw8N7uOWEHR4qy%2BRNf9oJ9l6f%2BOUp41exXA9qEvhZj9ZN3rokJkwcVWqYgq3f4SYBVMDzHYuwAiujJKuGW3zkef0L6lRomGayTU773a0uzhjAMR9iRMlvMgTekLniDHzl6Zt3pLzpU3FlUtPbObUBiwn2fQNUZUTqz9YifFiRXTBoSPOULYPoFwGqYPlqAeO%2Bu%2Bonr%2BcwA4t%2FqqCgxFeN8QMPMU9XjU21SvOo74suqu7GHHTgZmG5HILVYe1WYHD7U1%2FZQZsR27wXr8YoJ3hozlulM83iSDTUmKXt7HQjET%2FiNXPkpw7zUZMG2N8lo%2Ftq0AxzdQJ%2BjfxPBeQPPMfyGOn0tWJAFRSwkGkNL2SqsWn9HnOBC2OdoJfPbE0OQR3VUcRYdsvqtl6Z3iJLxCtSiYmufUr5rLwj%2F4ESk6VmkxvW5yn7IVTeKgdK%2Bq%2BzAx2Tm4ptuIL0CZoJtOOji4e6DmAiSyrKLd6aHhQg1mrxuXdXX3rn9gy0wgfyWwAY6pgFC4GSoKUhGgBy%2BVd2EWT%2BfKigB69zf%2FcQkLXWKvbVak%2Bl9RG8Wxfl1sGctJJ1uG9MhfwU1JjLlPaWu79qUJCpZcAzB3Wrsr4SJPOQ6wFHNjCa0cL3YRM4C1FGopsA%2FFy78Y8Bl4TxKaNxev6df8V1UpOM15MvpzKqtkGql1oTjwKM30mMQkqlObO249L4n9A4hRbTZRU3UJhy59ErF%2FOb5jsBXxsq%2B&X-Amz-Signature=5fa13bfdb3afcb84d35a95454c65ff4df756404fde243bc9a3296c38c1f53fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
