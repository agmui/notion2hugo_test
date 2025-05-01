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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXAHVAA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC9aeNP%2FIBYIcwRZoSym3F4ZS3p1jxGo1zr%2B1PjhGvouQIgSSkCfo9iuM%2BDiKh4onZoXnsc35%2FJWN01hJOh8njd8UIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdAxkE9XPRF2mQI%2FSrcAzIk5MdkZHDO8YaThthjQpbBi3ExGjFLSVxrBDGy58wwf%2FHBOMncB6BPG0PipIc6hQfUJNmyRBRVdehrdFTwvdcs%2BxftUQuA3f2rh14WGr7%2Br9OIR7782YgNHbXxqSq%2BNXbQ8AtpXxRcRjZIvdEcwB52d2LFl7eipyixzjE%2FqgSRkQoN562JJvIMXkNJdXDV%2FqpZyznOh0S7G94WTs95mqyes%2BOEpjxWKSN%2FIJkY%2Bx%2BYvr8rwFerA3iiWw1LJ5717k%2F8YpQ5CstiWH0Z4fTTLuq8XvJjI6xnUfEafzElHBCN8gUU560FiF8y8brYE5kLreZM%2FV6LxodMjfsdwcCNDPyLmdrW7mqJWz2enBaHjUgu1Deh70HVlidFgMRkT%2FsQZnbQASjIzEKrVWn7nKFGB0dTzyCW04kqH4zwpfkuYOyhFWDfxi5zHtOH%2FknkN9oq%2BlwFWlmro57AgEe3%2FDZbs7TO6VDqUBOi4iMUwZ3ADjwTCytcb6y%2FPfojDbQQjb3nQKCPOfRxNk8JE6JB9lHtiVqFsly0v5qphA29Pe2g42gbOn4XQmarwqdoUCqUrG0ZCLpAfJ74RPxKQKl7jFYYFJUdcpSyknjB3z0dfzrLcKOylGYdW48mhU2G%2Bax0MLurz8AGOqUBq4D%2Bt212jXsLzy9boxWtFQq%2B7t2s96QyR65zH4mT3advzwudBLhWlNKBzOXAbdriKsuVI05qxUcFJ5bJCwDDwwpq3K8ZwbNszWbplH1dk9l2u0c4Tfy5kEgBiXxate2pjyGoYGH%2F30LnkzTBebzUtCRHbToQ9Dtp%2FzgAAHhh9egUTriJSem4xt8fIAMT9wY1Nkvhr7%2FfomAoLkaQh5Suf8D11Uiu&X-Amz-Signature=5dbe4970dde8838825cdd5d3762def1a82bab26ab9cdc3b7731f4912257f2f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4AVAL2N%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCdDLkWHSNkT6Q6dWRCSvVpvuqPfZwaQOHZq1ZO5%2FsN%2BAIgU16h1xFa8gcXFOlZc%2BFLoDfmEfjBZvOg2G8WJc%2Bx6rkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvY6KBMJ%2BMY9gsyySrcA8INWrH90%2FM5HzF6dYYkNfK0Zf4n%2BjEy76MC%2BYUO6MOL5emkGUi96JTK4vRihUKKah%2BMhWdwrASWzcZ0quAUmcg11Eb7JRAetv98EaOhTRmyzp5d1ysVPHU9SnDKH6cdUhDnpU%2B0tk%2B31ddE5mO8X9GJBTK%2FWteYmIcTlWCwA2ulGK3286sEL2KU7C4b3fAY3Ye7ekp%2FwF7O7kQllFY5c4bF6LGjQtm0esq3f1PDmFjWN6QajHIKziQB2XrGNOxTe0ERAdhNonU9pgIym7hwBzRCrlEa2WvhX56XPdkbLm0aMMEbqeQkXPROueMdY9Nu3nIUcKOgabNhZS9QsXAm4oXggRVBrcNc479taMGaa6ivGvljw3dW55ImnawyhHeQFJdGhvbmxGlCQ%2FHJM1tJIyNg9yZ1BPHuvWM2QWXBeYPlMqwTb82yrkPKcq%2Fm99M3zEvsia5zOZJLFl%2FIQkm9qE4z5HNYo4oqO%2BQHPlpy2%2BtEBG88yxs7AvLQy6bV7kgygjTlTRXBmztE57sYtA3qsQgj7KmGqNq8bB3foCGp%2FlXkqQqhwI7elBVoUkeGI%2FxvLawckrx5v%2FuEDhW57vkxjUkX2kQ%2B92XO%2Boc%2FPBbOQ%2FNNQKi5ErBE7F%2B9kjGnMNarz8AGOqUB0iH%2B7vfaKqXnw9SPEqYxBJsEe3yYyYUtfjySC0EOSbfGFIFPtznDgTccKFauwt%2FXCY0%2F0JsxnIwB2r97f1HK2926VlwN0TNSEg%2BhflNerwmUUrn6pDuaHyzqn7%2BKZEYeCKlgZ7XZ%2FHPV1L3RZFngLVn%2FGIrF4SqyNQDgCYS21rYK1ct1PaX9HXi6EyxbvmbgyUVhfqIFVhhaEnc9CXdxK5NQSgRN&X-Amz-Signature=27dc7c47dedc888941f4bc955073446dc0c5ce45bded1d381166db308f55f85f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
