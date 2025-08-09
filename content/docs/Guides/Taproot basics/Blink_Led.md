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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMDEXT4V%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIgGnHiB5N1rcz04A0qkER6KZgWSTBTR2e8L6ZeYfbVAiEAjt0T2SRY%2FFYo1UMGFQPKzv7VAx8SHWKHY%2BwRjf1oLhgqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKawY0WRHzLidr1pircA3BjbAycQNJE4%2Bw%2Fa79so2jWCBZ8R9XeY2u8VpiiBmwHtPsy12VZgSAWW9u1Lo7qUjD96WIrlJ%2FCaT%2FBVMVtc8MPBE3vXKgv9P9aGAAa%2ForrORdYANfbgRStC7utn%2B7PEkfuUjBoY5w3Ucx2MduPlmOy1MlgcYMZpgfBU%2BZhMb%2BCbuLT9yr7IQ8ozpAE5ECzsMJeobHl3FSZiJE14P1O8SEEnaAunh8gjwwdicNGjNVUxIV7QVu8nLBOR8y69gQbaAuYB8Dd%2BQ08WM7o%2B%2B99%2FtrguI2z5%2B9mouKNGYgNgGRTTutW48H49Rd4%2Ff6J7WLh9QAzP%2F1MhLo3%2BBWjT8VjbOD%2B6ok91Ik04Owevl6VVQJw5ODgYVB91dflD1cbeBNrGQQBIIuare8unvWSt8Ym3BNPd3JF9HI97b4OOEihhH1bd2bq8gTiZG4YeGZB5Q1ML8Ag%2FwjEtBW4FBF4CqLRvPaK%2BBdCOH%2FLcN5NKTmXW1VU248ptLX7BXt%2F4bSweEkXjUMSa8l8HmF9l1SxXjqDLZJX%2Fg6hqVLjwh8pJ4AyMNhNw92RAY02hkIrpRkf4Fs05abZLAqeXVGCZBEsVIrT8Tn2SgS2TA96JnJe2pH3oQ6v6RmZP8YXLmH36yRIMKeO3sQGOqUBKNq3rRgBa42PR36Jc4UFCiHlvgmwtHFHoPTj28TpuT8l20ZGETY2bo7hZRjDgsYd4xprq1p0%2BZUHrWvlXQUOXNCn45yk7V2%2FpGZzF43U6ru0UzhhEHXs7eujV%2BIekUMnPslI9xt%2Fd69UM2WNIaIazIPbjyCsgW7wI%2F8QapFbryKJO3AfkM%2BaulZ28yHZDon4R1PCRZBM3vSIfVsfenxX8kVBQN7g&X-Amz-Signature=9a68a7326fad007946b93b35b4465c6864b4902fc1ee983cdfe7152103e67ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRGCJEW3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSV0TrkIz%2F8UQMrsCeyb7kizZjRjCBip3EsY07C9LijAiEA9fge2%2B0B2uLXiEg%2B771kc1jKqZVZBhTMsXiYTCC%2FmhkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDahqn%2FL%2Fn6Xo0TvgSrcA2saZxrD1ntsVpZdwgefvuRtExY2BCLCo%2FOcDiO9HEqM27rHSqZH4LlBPm1%2BUW5hKztF7F9uTREJZIzbeMTNJ%2B6EQjjZlNJGh5SwFhBGILB5Zr5v%2B3MDmTBySACFumc84w%2BNsm1%2FQLS34DcKq5Wgo6LQilDR40TV9RN7oFfwNS1wTZmyWViPYpknG1iVSpkV7J%2FqA5zO2QL7VXT1JVxa6taIeqgDYJMf3iaU3oxDur9qofm25deUrAx0c3eO9p%2FobTobnnID4ZncYptKUcMceXJfFvvwSFhayaaC%2Bb5avexPs6aVI%2B6bHiBMIYloP%2FT0MCPBiC%2FoOWBibdc7vnKjThBFuUgOR3OP09VuL6U7lDg%2BU%2FJYdV3cPqoOFv7Ih06t9xtAy14bxg5rzd%2FIlqn0u2ZQHbz9iUgh6bWPeXmMtclUDembGskoLfZkyrqr0zBoIwl6Hn3QUHK2CINh%2Fzlsi2ObnQvf%2B%2FUdnlzFPL92axlZ3bWB2UTg%2Fq6HTQUsdAVNyNHktj6EKWbJBzcRAT0A7RwBRCY89YxtUTigrX%2FH6BWNdE%2BSo7NUxc5ec9ytrpkfwVhkH1lAwdCaX%2BuTvytM%2Fk4PS%2F8fbtkU7iw3ELfR7IiCJ0IT73NgjMX6j%2FTBMLOF3sQGOqUBhgYvuv4zvi55bP0W5iU7AHw8bEmn0wa%2Bz0KPQOM5g%2BXFRpgezEnLWo19M8iWV4OPwNma5%2FLBsa8buI64TRCYFF3KtCsW9WnwgBzIBD41%2FpR01djLwnV5maonlnpHvRmhsIOd7BAFBQQRP7NnnM9Yp%2BOCsmeh5aEpSBCUciR7J7Bo1o2PyY7ZKbbdyl3BoYnC1d2EBae2962Ayi5Zt4nCyOx8J4GC&X-Amz-Signature=0f7b3835ed94cad8ce5e8de343075f6a462524c982c10c5fa410db766d386166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
