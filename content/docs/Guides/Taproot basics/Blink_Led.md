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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2O674YR%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIHl4AfbiYDzrBmDGUFy46IdjUwDQ1H9F4rQ4mlELN2RTAiEAgeG0SbMThM%2B7S6YU51AiR5ft9ZMcugeczAw2nmqy%2FjMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGNzOZmKbbFOiJ%2FHJCrcA6HA5zSop1VVaDjF%2BQVnpnm24ag0qvI%2FvRlcDxPnJ6QQVPE%2Bp0fAzXwhSAmz%2FiArXhwWbmRUtgXnN%2BfUBNiedOPxbeIHAz2%2F%2Bm8lxLsHsqYfHpuWHSxHhcQLQ9UuYFBpcLqK0sAvDPK%2FncsMMsAKW%2BtlPjJGsyghKz%2FjZWHSEb3EQNJZgaIyLDLlQEyFWY1ppjtKpDEhFGnI9GOwo6%2FklGsqUWKY4THZfpseTyd9JHs%2FH9ifb7NN1PaEFLfXeRcmFvgiAe0iBy6KgxYf2dfK2hwWxxbUASRee6iIwOQGmaufI%2BJqeeh%2FW3X%2BCBiYNccjVLbFLDS1Vp%2FjWJbfwXhDXJOiNfYdWtZfMWIwPp0uX4adQhSxULdY2BQJ40nNl7M8FPtoyNBoIzFq3mNLkzo9ma6rtjrv1nKoRyPx2f%2FO0GXQYyoULZxvWV7Hr1ZfgQgHvEtk9jP39HCy3jQYZojz0uwUi6kzqHE2H0EVXWjyUs7BPml%2BAl3ezcjJC2DBmSM7oiaNe%2FX%2BkqKi5WAgyXg1cH2J4iMLoSv%2FnzvtHbF8QC7axBG0aFtYzmaqC8lD%2FvwX2Q63u9qReijdULxid5pGIjrLbIS60LRnNiIe3N3bV6Uau8ofY83djr9HpzpKMNetucIGOqUBBxfK00Dd1grv8FMcZ9OIMyodONl9xasXOZ6Q5qrj1sfwX2hoFCC0Dvq3epUC2AX2pJGXxCKTg58gkO9r8AovCWKJQ8F1ZyqyIwDreQVZDzx0Jp00FoAvEQbZdfyVKQoBONSUS%2FOs02Kgo3uggKWQ4m5v7ZvERoVkLeRwXy2zaBkzHHLGN%2F4kw41fCjMEe8aUc8yUUEna40ED%2FUmuo%2FBjwdRnYeNr&X-Amz-Signature=957dc30f61f7a24210c794674cc957eb54e98fc6c58d5af85bb7898fbce40977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GG3IH3H%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFzOd1iU3P0HGpMGHDDCFNZwPAOw3lJJQqo7%2BWFEZnGmAiEA5v1i9lZK3ilhwfUwb8DRXBrgXsDk3CFvtKwLQxMfR5Qq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDB0zEW0v4DKDne5SPircA6k4Eqy5MGU%2BM795Ey3yYzfAZr71S79tCwHexLVrB1%2FXUD%2FH%2Fmhvw73%2Fdp%2BD36waEzJfeOG2jpqRVoHGoev%2Bz9lekHQYPG1udIuLijMWTFSVVQb9wVcYVh%2F9BIqg8DotMwJJLPwKPmQaQJynF8wNWe%2BaXBQJ8p%2FrdvDMc5v3e1Ne6G0V7gIxpNd15oF1h7%2FVuFRTzxAb66gujRj44c2lBjKQqkX0OR0E0XIgoOOgHHwUL4Jwmzw9wV2y5eB%2BygLk8nzK5s9X1jjpdqbCGCii6eHplcjGybNAZvQfrKUwDvgV2YmD009IiXfMXyajriERRFG1QgoSeiqJ8NO2OSFz9mwyTifd2iM6rb%2FeJ2HZuHhB7lF1MRXSVasnJEKxoSwlOi4IzPpr7Rjmx3nzWsgjQDrO8P8SJWaLl%2B7k7MDmOFKJMjcWfvR5MmJ7RD1IKTymTrdzEB7CUOsbz%2BoV7ne0o0%2BOezZtTvIJokZXM6WUjrJXHsDBVWVSEdEWQ30Kn4lh0UI7%2F%2Fj%2Bl%2FA7Qn2eR3Wb%2BehQjXwTCTtwaGIpwuIi6HECz1ZFCTHwpjq9sf0wOApBfWdPt6NV4FwrwBdLIdUahdqbwiwcpuEJqFh4%2FCUNlAbXAg33PZRowoRFIUVnMLStucIGOqUBw%2BhF3bQ7aKi8aeyZ5Sfx4udzLBN%2FtCXjT5zaei%2FH%2F4xiKILf8Fg%2FuJ%2BSCfOpshYMS8UH09Wun3yO2NLIZFqTh7kAbQlsTleBGbPibohObYw5lhygM46WoskTVGxHsDTf6LtjJPL0OUjg8AaWRcI2B0QvaPfwIsQFei1nBLmwHcUhotVAjGIxSvmyg0xtFv62%2B5TacNsP7Qkt9wtsI%2FgLUOOb%2BAqu&X-Amz-Signature=a12b42391d80ceb917eb78bd270404e3eb141799045122e806ce0631a638711f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
