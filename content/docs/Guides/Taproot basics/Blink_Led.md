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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL5B4WNY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIFJdb9nbhaN0cYu6ijalfbtgan5MLQhQVclsps5k%2BPJAAiA4fPVv5f3IWtKZ%2F7KnEf4I7zwwfL6JYty%2BfXVLS6W6YyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXfnSI8D3mbL5XIqyKtwDm6F4QnAwIu0ojFjNqoER2God%2BJeHiXqcWP%2Fg2sGz6sKgTszlpcgASL%2BK5PogtX5O1x8roVEopfAxMg3HJDL3LLVypBisj%2FcRaUWX%2F161pfUkzlxvrXcdccx%2BrfH19H8K84QA6VPFJrppy2b%2BBhEBpeqlzP7j9Y7vilGHyrqLqT3TEoypkWeG0VoAvldHhLuC9OQ6vGNBGFLrvfuAp%2FNYsj2N%2Bgpan0Wn3RJUPKr0cjIars1i3Llq91rqlpfSVzOuX0Tc0yoqpJnUnF0Cqz4CsJqeQoHNBctDZdC96ssrJ0YpaSqYRu%2Bcmf%2BpWjQ5X2FNjJP2pLLiIfrTZfqkktSALqeGVvmDaNGHtwU1UHJFZuYSXhRprxQQO1leIVx9EtUHKu%2Fd5RLLMCYn9RnwMfvqrBO%2BW6jzN%2FvJzR70dyC%2FRdl4QbSxHGSxyFN8W5uRH3rwKQLCOrR%2FRaDBop%2FDAyV%2F8M8d5ehfylVsdw%2B8wdUQCQb7ZV%2B7imAGIXqAkVy1NZTpMYe1hVYDM%2FdHIcquZENeWbQ9QMSVf%2Fyv58Wp2M1EwVFKu5iOXMtbERHFWqIPeNeFRPJ2EfExagH4%2F1%2F02FWupMvKA6FXzlO79EzR7ks9eGVkVMMGSPfanktGOx0witnBwQY6pgHo4nQglq09%2Fi3qGX0eZh9kI1cgYVaatu59cIOFb%2FVCe1jEqvzzm%2FMPY%2F1hgq8aD6sev1%2F2tCWqMwsjp9m41mNEifrBPRVKE5ewki0zklhpECk8jL%2BLEJrHJrNgN20soLNMmv8Irgg5dALnarYpmC%2B4Cl5H%2B7DzOVMPe7e7UuLbLTwhKtBICqGEyq73b3kEOqx9kMnlv9TCs%2BPmg7y8sfupozDr6qyU&X-Amz-Signature=e03fe8c3e9af53d82f6b211773077d48612101521b3e9edf46e15a95f768cc7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWRMWYBL%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T132137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD0%2B38ia1%2BIenl%2Fc%2F%2B%2BbQMDV8kIGSleTJ5ZCgchtzL4ewIgcFx7%2FJ%2B%2Bs%2FNMKjt9TKykwZf77nrtPNvXu13Svlx5AY8qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEinc%2Baz2VRX3oAtcircA6uTbokvIF4hNBcaiKchFGp3FP3rYod0bvYLCxMrQ3%2F0m5v7j8Gc8fbGfzh6YSTbnwgBgcI0zl%2FQ2gFd3bCeoFSponKiU3PASOThbzegi7H79F4Z3T%2BFdOQhYXhvfl4PZ0eu3KQd4R9i26SOJgeGV%2BD7rNZmyO3RipD0uhDng0G3LbLlsTliY5tRevVPXGLw%2BmheS7OfAviIaH54x0VhFNR2OcquJZAUnjAinAXD2Vf60%2BoaD0USKqcowf2sZGAdTxlQSn3IiPFeRAYgvVatMYM3GNV0BR%2FctwhExF3%2BFyRtq3j0qYdfoJozj1O2Ot7NyT7H36MV18P9OdJK1Xzy1kORMJr060TkUqcjmay%2BAweC%2BwJbuZRiAnSV7oWm1FjBmZvSlPSW7cHNN4zVJN%2FG3Iut8CqTyl4fsRUzBxqmMCjEuoBS0Cnmb0I9DdH5kcq3LhrXhoNfLFzQUhjrz70HCA7H%2BgJMkB9klCUjzQ0AYGU46UoiNX91x%2FZZYCUi3m6EvqDHaBZsNj2AeFfjulGOc%2B4cehGvsUPpjUTykx71cO54nD9wpOXPSMjfa8CG8whvcS1Z0F%2FkyLgFMKwwP%2Bh%2FwaZZICZo7JGSuXdWeuSKvDc%2BfUFnIAjNoR4VSzEUMKnZwcEGOqUB05djIVxi7hD%2BTNx%2F6VqlQ8qjb0G3k%2B9U9p7ObzMqqUS56GKjzTlyYdQi23JkRKbQyZDwVf3nieCK3EHy%2BFsNoIieQZrq9yBTtNu1kcigYlORvFNbdYqMUOUZsnfqYjFn3EIvu6%2BADE4kwQ2Dy%2FG86%2FsrSztJaJFjgLum1RcSNvOQ%2BOzGAQqxcuIAETzJwQPTAK2X8lc4MzkZnQ2RzAxdhWftLUIE&X-Amz-Signature=81c28580d3cbfcaedb79eb4e5c6df159798a8d254ec41dfdf1585b2698972331&X-Amz-SignedHeaders=host&x-id=GetObject)

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
