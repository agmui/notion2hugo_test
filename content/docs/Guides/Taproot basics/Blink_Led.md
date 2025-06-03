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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJAB4OYX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBKgzMlTc%2FUUV6fZ2rYl3TvYr0%2FhGLecEHehLAOTwyMgAiEA2p2PIpJvr%2FjuyQa2CktpOPZFjKS0Irk6xNvU0e645PYq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCL0d6wSi5yOjaMC%2BSrcA9REVbnrTDNdn5yyQT%2FQg9L0vsggm%2BxR4nxd%2BLbaSRM1HUwj%2BNVBX29fHqwSIR39tR3NoBz0cDTFyw2QfhpII8x8WRDzGi1vS9x7xgwnNCXWhKjrgoGd9q3htOUdDj8Y6gInDci9BcdkIFJKT7%2FMH2UzJU8R5PHXbPrY6ATCM2eQjkK2tWkmJ2V6FT1NF2zZTFdXWwCneM5LOvEg9eYV2SEyOlNghoSDjaIRojJlmRd%2B9UTHJcxzN1lxl%2FzNwAw2Pbx4mjuEYfaJqx2Ek1GdIwrJnsj7Q3aUgx2nMgjnfZuo8smkJQSMrnD3vsw7DnMP%2F8FAoJqeGZYlgfbSSXGV8NIUuqOxcT0b%2FFYpcpvNC2gFEQ8QbV8GwAmF5B%2BhfaoXogyFEuNZ4lbtFYGdVwPGZvZagTY5W9YwsmJ42ehxIMAShf40kqW9%2BuMENY7TH8gOYE0jCl7YfmyJw1e7sfamzPj99%2BOBLEmAWLPRkBAFlhwyhNyBKplsBYsgBOXsPw3js0v5E%2BocJvllyj%2Fmv2ZqfM%2BBMT3clftHP4a4zCBDp9uaeGd%2Ba6o0oQ8QUKvmoAGlzOUdoAb34vtmDeT3bdE7QAt%2FQT75vNTKptULQlHLDog3KEvqGi3zY1bJWNuqMKjF%2BsEGOqUBjQI8UyNyL79kGRnR1rcpsDdzYDks5KMjsz0q4tN7wdmT%2FwTo5pQwQvQKMRvqAG2JoYqYHf4Xm3Dk72NlZG7AqOTHdZylbfrRm7jSLv0D5EPDq0jHPIbPJXmGm597wTjgHLRF0fFxxaXKqWnJt3qe9CuBIekzPRLPNJpEctsjJlxjvfUfDlbTb1UgS1ZeDO5grH15iS%2BVx11FIjiOc%2FcgF86eah1N&X-Amz-Signature=5933fee66ddf464c886e2f7c25638f3bf74a1fcc63fa82aeeaff1e28e1852e83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRS6PTGF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDa8EQu7mzMZyaKcDh7Z3%2BG1%2Bh3HHN4Bbo6BH8coopuSQIgSoM%2Bh%2BRu3Nnd8J7yV3%2FSvk2MpK3LZPCU2OADu9Ooz9cq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPS9STd1ex5ndATZKircAwYaf0zj7ikR8kIhBz5WsacmA1VkhYF%2FhXQGPRYkfecctMNL%2Fvg9ikP%2FivUuHHTG7UVg%2B4MJ5%2B9JWlzuCKwxRYkMSCvNQrXVDdQaRnC%2BFUvqpbRSDHlScyZjAOUQ5Tw3RmJSoNKiNA320ZXDxLPuq0X7qaSi404l%2Fs%2FsBKIszhyMlMv%2F%2F0sdzqA629%2BvktkuanjPcCaZ7TZWcmUy3CjV8rQkMk%2F1Uy6XnKTDlPEMPmoyvLbDkIH1L9dTwxVwqV3Hi5Q49dgff2%2BaGmZ%2B535yS4qnyc3Tfsb1%2BnqzBXsPEU2i6k0BrbiEsaxH1e8SDnt007Ca34wKSUqK5xri%2F7GMCjowuJbf0vShgU3ZS0p2N56r6kt%2FtmxyYznyWfRD0ytPv%2F9YTSt7%2F3NtJCz%2F8l4IkXiLBCfdtw3ZiyVYF3%2FoKkRlt7OzTT8KpF6vyYXVT3qKTMjkTh5hl9pOKj13jjYHT9Z8o7MQoyjMNay5S2l33oJYhKMgHx0Lkk5Tc4Fmev4%2BcN2ovdCZKR47cw2fx%2FsYEOEX%2FZi9B5G7iX6d3bWHBpJiySsUFdHrOyxFca7TMpn2LaQh5lWbSb%2Bxtdnq0l4PwBBuovXRLlemFJzdvL26JOckR4Tn2L62qxfQB8AOMLbF%2BsEGOqUBC%2BK7gQcoev20tRX5zH6En%2FeFg%2FkYqSSeJ844brb15xgj%2FPsYE0p4gotWViFny0FavlOEHrIz4hoptSKvk%2B8mzp1%2BLWvkX3NO8GkUJp3TyiTo6BHDPRS9QkRygc2etxm%2FuYd8o9FMiWl4p0ppSFh92nulxlseFatpTFn%2FqYdZgWfwmVo32YejXTjxtl9ZZzI8rzzi%2BToyePLTYEGdPpFpDd7rj9Ci&X-Amz-Signature=b56434a6a9ec856cd3eefd3c192449edd32970f931bb1c69ff8bbcc7b33913fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
