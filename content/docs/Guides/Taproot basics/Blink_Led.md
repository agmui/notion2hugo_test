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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7V622HP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPWM5cbsxmDzD3tfUTLpVsxyVrbDbnVTWEr3NLmsuBcAiAz%2BsWTwK05HRKckx9u0wp%2BaZh7URYMW%2BSyUltjuihLjiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrTFtxMyA0vPL8OUYKtwDgK9snJnLPM0cEy4BcAoHQN9lZfzwrJGpEJzAiyKy539z8TynXcXIOgqZoqhcsTffi%2FMlxsnMzirNxUk8RA5xPgdcFdOvioFmGf1iR9EAIT4KsvzJiyDxnsXl%2BsBx70rUK5plH6eAogSoHyfdnTnTvQBRiRovIaqv3GQhHMHqY5HNwKgLNAiUn4%2BJJvevrz2LMiJ9fRF53P5b161lj7ksSovkaCpcPpWs73KeU3%2BLwd9cT5T4m2SQgN0dsEQu7hCZYMfJzOicAOEjRXLhxcy3tbQapZt8lIUWC6MYunHay7QLpSUgVqBWr2RfMjEkDm%2Bd67uVhPdEmriH9zkOH%2BzbC2FX%2BYeN4ZLYFexa34%2FQwB0kqT9yTN5iN94dl4u4OHZZm%2BWbJk0pAHOOojLK%2FG6zTNsNGV2DNKaaaIuFEbnP8jn3%2FjB3b4ncBZMnIDdphmr2uu9ZHMVf72W9LoU17Veo6Vyty4ENVixYnlGg3wShCHijpJY4iBqnJEI7Rh3WbZUuTZqRxi0fx8ZkGymxznL5ebk8p7jKKtLUEJtIcpxt%2FKkrgH5Ts0hHmc%2BHyq00AGvyuwyvC2yKeoFa5hhc8FLrZAy7NeOijGEJefvdgrVhZLgu8Gk0ddCaHgUYj14w5q3OvgY6pgFv0aJ2CkQCWp3mWqlasGxqd%2F%2B3s5H%2BrHEma0shFthphT3PldomSyR%2F5ateFIkYZWxQU71A9JdlT%2BSg3MdNm%2B6gNutbbXtNJBSonFlKfnkf5iNFWjRBYhu8E%2Fdh7Euoa3rXmfml6lDaIQsKrzL4yZ6FE4gPGE7H1yEF7RoHfO9aA2i1%2FSvyTS6fwyLe8mSyNyClXLJiuTg5qyKRGQb3pXpTNakfa1Hx&X-Amz-Signature=d37ef15bf68e4eb474f15b6def1f196ae1649059fa869b5e711411b3e6b556cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLYFNXZU%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3y7lgWTR%2FfbtNIL5%2FSDv%2FH%2Bfo6WcFhMw6eex6yCIyFAiAHhE7X1NfovV0ZvXvrWCLPXKQapVmcc1w%2BLPMTa0Ch3CqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdQNAmAJngFOe9xq7KtwD59Zsig3VfnNubO0Ajy6%2FNoe7NCC9bQRb4GxkCpAz4XNV1AwqbnRVH%2BGA6UB1rF6W9o%2FT5KlgM5W6kRGiYcwp%2BJK9J8d0QIL0dW5IWqZVCdB98g0VZZatIBnOmZDVx8CSuqWRmpJuSao3xvYtrVKulc%2BcU9L6PUB6zJLLJeBjuPE1w%2FdAPzghd%2BzcM4EEBGyVNTvFueqTXP8aOvDxHFeQfWhjU%2Bee86N0lxAtQkXNJ8OrWaiNFnh1zjQT5TzgA0MTWeVqCFmWrkt8s1w6NkgGD3%2B0iZPT46sNMTbuNvEgfH%2BTDvjr4cXSPpWaaYjqpbqkg05Wp6YwfywyhZrmmKLxrESc%2FTgrfml64QGYMVSMmUtWoE7mKoTMIPGjBTNBBuUS4WaPFxFv9VUuWH%2B1l46bSZeAjxIlKYPKM0WW0Eb8vktBmnK7I9%2BuCwD%2B6Vsapv4sZlmqIXIs06NPhfUjFFXZHOavmOUn9uQYeOEPbQPL%2BFo8JoVGA77uCdIEpWYHKS937AM45PDdXvz8k4BKRx%2BXI%2BFMR%2Fv1utGZR2fNuEGLVIlBdYn92PPlS67adOIFYAfzpkHEMnxBCG5WLKqPr0fVeaYI%2Fl0eDUZZML2wAxvW16XUFdW3y8E%2FvJXEmCww%2Ba7OvgY6pgEPK3JOU%2F1lpubUOR04KfpVE2DdloQ2nztvmBqA%2BsEJfO4GmKGvOhPHjohV7iYXdIAyqBfsOqq0Kn46vZZZ1MqARgS0X%2BbP1Oj1NS8wSQTYtT67wYR%2FQJQNk8A39POUidKN539dhn2Ecy%2F8pkzbVvrCQ409U%2FG%2FI7OT%2BH17ZYUyyiEGYzTK2802RR4ytdk%2F24e9zUa%2BR61sv1x3%2B5a3HcGUHc2u4aFB&X-Amz-Signature=cc438854f09dc32257e55ddd57734b7733cc9173fa1f2be2787f1a9de6af99ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
