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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXLEGWQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgNXKDeng6P1NGM%2FDV6dzyZQNSUnLXTtwzneM%2Fi4EZtAiEA4G9uzmYmNWh%2FdnGA9PJKoDfsvpbYkZgkYCeBOiNh%2Btoq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEZqJ5Qf5hM%2BdzytmSrcA6iGUJOARakqrNdi%2F%2FafrHflMhIpm8Ebja%2FGE7ICWR%2B%2B1AQyeTogTahXm%2BqCTSbtrGqigo1pnjAFMSLW0hb9QpYGj4cAWAxS%2Biohp5PGUXztG6aat%2BK96MCrs4MQaJjKSQ8L1%2BIVtCpm5xCx6IoAgNur5eDUPBSTTTIkhYNvZ4yKDXn4ZeUt%2FS3aWTN6MAvRehMcOFtoodsephRwToCfmsIR6GzGYb%2FUmbBn6lD%2FKQHZUhcJ2%2FRiBNAYkzu5TpA8fnvaiiMTKuepeRuYRuwJFvDDKVskxTXgD8TFZEdrfw4sCUpyNs%2B5k3IOq%2BNeB%2FyshKsjJ6qg7G%2FtOmH1z3%2F8FTOGAsk3zqw9jSqelOH%2F%2B4fMBijVLHU%2BPQp67c3RTe0e2d2kvonihxzHhaCvJwADx4kYGPdHgFVlTZBss71U08fqHOt%2Fiqs8O1frYfkGr94tm20nvwd4rYadyE4dHo8GjmXviR4JNHAl%2FW44wCez%2F3hix6YZ1vS2VDsFYQ%2BwItMJmmxmb47jA9zEDLWReizGuEyg6jejZMYMVKxDNMAfj1FSjEjlTeMiD1UpLoQ1Jgn1A58nBESwoc%2BB0IvE5dxRlwburS96c%2BFWjH75iL7IzB7eyQqvqLyZqIfZUBymMKCakL8GOqUB8w5FQm4ry3GznIPDSPeFFEgTAaLwuYh1WuwFmRhJ1YHGN%2BR0VTkTvGVOjLpcH%2BR2BKUwp8%2FZEKXEz9shCVy4ytGeRc7KHb6qYQpOykKsV%2F%2B0Dbm4VOOoa1JJNxs7Z53qLxYdMsWWJTChj%2FF5ABVdgcUjeosrOphvLPZ%2FfY9wMFxJsQiv1h9L1DwVsYGYFqIFrW3R5prdE0yeIjYpRQ0UO0rabRfb&X-Amz-Signature=124089c97f3c5a834ebbe33a16b7f3de1affc7f6e8ef8f95a39467b975644886&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CQKLQ7Y%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5QAdYZeBS1GYKuQUifnjY87zYhCz5kvewfgc6qi5qRQIgCA9dLo6etpmAz9grar0yo6A3faMNto6e8k0kKvOi%2Fpgq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIDfWNGiwJ%2Bz2JPifyrcA2ucs5bPxfihmwfiA%2FKfU71ZBPYaiT2PrmUSgsYBzBux6sDbX8pRwCP9badmpnJo3Ke8tXTRPi4fOUUEIjUZl%2FWaDLxA49OqkvFR5A2v9k9d%2BQkx%2Ff0dgkd6AnyvtcMwKkWb311TjBHKkaHdeg24QqfzweQXuWqajEKH1%2BgycOnI1JdTG4BDnNRU9BS5BaQ6%2BiUixF0XDJTQOm3pcjZFTtkDMl%2FYqkfijugs4eI7PRKWeqJ%2FZoaDk7PvhuZGVrkFKdCnZOIgA9DJndQE4MHF7gqkxthS9VaNYongflvzoNFtxqGEhrNQTEBNvOUlCt3X2PLSQBEAoXC%2BmjMyaqdOBbfy%2B04geDbzFQXSUICtV40SjQRj4qEy1feVRZQwbivFze8JoJgVfw6IvqeE6BktGRyYn3pyJ1ZDAzxuwwJ1uk7F2TZUdop0m3ULurFyipp9ZPZMFm86v9RuVkGuFfgEUDzxfuT%2BuB1SkyRrKVI4qUqWbxd7YbUN9qqW3V6vFgH4lK8g0DNp%2B2nI7AE7SDPTUfJSSt4IVuk38lZAg2eVFuFBoqNvmYTCHLctVhMJUDz%2B9ITlviIFVGnaCVBCvVA0K4HMOFoFllOeS8lDl11OpjneX1C5Jn567ngFuRqmMMGakL8GOqUBxHc1iLpGYTt5iHokUO1ESC2fJpjyro0GPmdL0cu4AcAdALv5t9RiPTBnVD9kpHiT4KwAE%2FtJXkCV%2BosQUN0vaiHvfYZgLUnsFH%2BC%2F8btlq5H9CaMaebxArUr8jq6WOSvMkOzJhv%2B1UIioJge0jBRY9P255w8D7N3TV46JRYpWXD4Qsf30bN9YMEHUzQlON5QiEdfreDEtV7uRlcVycmUr9jWk4nM&X-Amz-Signature=d6b069140e14fc6cf112b2165ebe143fd45717e17795a59758af35b3d505bf35&X-Amz-SignedHeaders=host&x-id=GetObject)

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
