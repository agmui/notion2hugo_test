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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPITHPIJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIH5VumyLT%2BoUmCyOKqQTUM8ROj5Nnlx4jsPYW1no3RMBAiEA%2B3ORCr%2BViyWxTk%2BfOQod5JLksr9%2Fvs2W%2F2VPgdnkZaAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDmXtgOMy7PieukYnCrcA6d0EDjXrc4fcoNu1%2Bw2clP1vhaC4dwn6fs5auRezL1ljJ5ECFWoResddQwXC5cNJV7jYcglHBSI%2F8CZbjX7a5WysgbhwpHYiTy8GV5f6dB53mU9UxU%2FIDANRB5h0W7UujrsZNliRwfIIqorTIqKumNQSOGRPG1phkuP8l%2Bl%2BGc2KuUYwaTI4pegLqos%2BpMGUpSRonvVqLN2jHFlr32yv2URlEV4soI%2B7GagTvKzz%2BgHP8%2F5FSYcyFgtPP4rXKCqPvhAmxz7gKTJPYmA4PGkBbUoZv1B93yJPy0gi%2FtRkQZeFuu0TrGRNADQB44smmuTBkv6LP92TtjrTlenwVsgnJanozAKihshnn4GQERvqqdqkYwHSJNu77wj59LNBiNnF4IoNJBMAOZCKW6ErJEjGLC6W4nNltzYAawySosLG27mhLR1mAvRWR0PBVfNJt8RljTUsbjBdFRRE4%2By8PMrEyRni1rQD2adIAMaMZS6Jxri7xB1bUzL2Wg6RSjjX3XgeoVTARZebzuEEpA0UdMgQ5k1ORtDTISoPxwAdtB7ZJ%2FhBTlLBCldgslOwl6hP5MiCGoDIH7ae6uE0pa87kpCd2NRGoM8imdIE%2BJf21Z9hyhboJknLtlYhGSaTKMCMPuWrMMGOqUBAAJY6JQ3KM55PeFPBvrkDXx8DPPHbdoMpcbdHmAYO6X9%2FbKsKsDJgRTOPNF8Go9ca9V4TtLX62or%2F9V83AKwrN%2BCWN1cv33gggzaRpM5okDRA%2F0xc3QApVN53ShVNxAAdYG4vk%2BZ9rNo0nOMM9hlmXbd0o54TToVvfDICru3n6j1pSOAiBUdCFsMLu9DocNjXBW0uik80iMDGecjvP3CTAaZtzKO&X-Amz-Signature=9d2aee032ab344a24cb176dee6eb43dc0401ae39687d9077abe1e435c8feb502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDJXQ5CY%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDtwcSrXmTLnVjTWPMfg%2B3%2BRx5HtJCW%2F%2FPU2skM9e%2Bg1QIhAJWEpM%2BkI0vkV5bWVh%2FIE4vCqIxVrhdWX1EgNSZaEgsUKv8DCGgQABoMNjM3NDIzMTgzODA1Igy8QmM0Se6diWimwXkq3AOOASmc3Br4IpCYtlRlGdgPZnf5hhiec8qEH89OQ%2BRFJoCeV5AikUc0qoYk4KY6Edeq4dr4QhLvNjMDIT8qbR52fdaFpNXOHYVH%2FLVDW2DDoT%2BxGi9rXOtpKD925x7EtDDHjACYmukrkL8LLm%2BZzLxojpyl6Qtsic6WeDSzEz6WsU0zVE7Uvi5OJRzXeBDScSZ3J4oOmjREiVdQmfhRSXWaObh5GaX%2BzthXJdLfBe95NXn7iKBclN9T3m%2BrGj5HVTKiLMt01Eo9Eb0sOWzPcV7Xu5%2FIU3WcZzqp2cZQf4AXIgtJQ2GzUiciWVvZIWlVZ%2BDLkX1Savsarfy3ALDLpcvqE1FBe8AkFmrteenNYV5LDMoEFIBWKJFX1Wkjuq3hUACKriJXLf8TZ6E6eZE4%2FEkPacWob5XCjjPkFVjws7gIqb5pFDOF5sEzezEBckfDCK%2FPlHQg%2BnwLWaksGlqgmgYkbuSZOI9dzLMottaJbD1ISsWDHtcIYUB3gHQVySvGXkbpUj%2BO5cUOLVRVrMTwrJa5BQbE%2FDA9Ob71B9fAZkU%2BFro0F%2F%2BFUuDX%2BAWFtnGZjQRzNkNDQPqji65X1Oy%2FufctOwLRUHmxQBvRY%2F1B4hdCQaUb0%2BINaKfXZj%2Bc6zDJiazDBjqkAZly6r7d9Be2zxPoqHoNuxBDdg8DFwnvXBxRmPzCBZoOw2tJp1MK5LCNROgwyCNvxmBkWToCpgbFMX4pVa2L3BL%2BIYgo6UDAvwf6FGtkaR1Fb0%2FkaLCUzEEPAw3l06Zo5j0XYGkt4TaAHyTV1jqCUWeBLj6YnqwnGVjLNnzNRwXzoQcIAe%2BZkwAIXtiOdpyc4leJg%2B5MCTd86WQyvrWXq1HqAyQ2&X-Amz-Signature=61d1b6ee9abe3861f6c079734fdb780d2b9788ebefaed94fa2dc91b519afb01d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
