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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJK2URKP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIB%2FQKUBKHAYQIu%2BIu61z5XwtTet58ittDQpKF%2Fl9tJKUAiEAo2THX1cj4O5AQ65ibY1EUAi3atpaXLylfd99%2B1pSoKMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPURswuiUTRFKh%2BMdircA4M4A9rY7C4Qp4n6MBTzENcchq5aIAq%2FRoKvyscNmrh4fIkei4D8ixhcBb93SOjH4HNikujoJO8YtpxTXvNTey%2FTSwF51z3IkI4dOqh14WtuN%2FtZaM%2FjLPqtl3qXk4B%2BEg0Gy3J48R55TvJDkYl24e1PUzm1I1bi5K6qfhpNk3Gatc5GC8Ys3LQ7VcuLcU5ipeiPAExLmR2HqN3vMKAvcONOIM6JXmUG2Fxmq0u3cMLqFFfKTmw8YkpC%2B%2FrKm2wqltJT5KvMu%2FOo8apTJvpBAJehltFV8qVZDdx8iF1Z1x3%2Bmz1pdrhEvgF6VbyeQH28W1F1t1NFT2DczRxauUWaaexs4KDoIpFXimk8j6ujMH7wdHkZ%2FoY%2FRTAdi4qPmrZcEg9YvnSuucQyQZYddWp1vyICRZjaX58DaWEsFpwTcZDQPNl6DukD17PT%2BIGFcLfUQTcOA0T14rJnHPtRn3LgWD63e6m%2FyJDOQS9aJjboMCdFmLIEvVQ6pObqE1PF%2BTgEVcxzzrXq8BEqbw3lujQpZDt%2FOrDdpCtQisdPgdO3XANwmUWtEuevMffW%2F7We%2BWhQK1pLO1%2BM3Aq%2BlSKGdhWAL55Zx3HvrKYq2RNlXf6Fz5Hw3AV1RHZnbbqzrIKQMLPpsMMGOqUBhbZyJPmYHvSJ8oyLQGRhFnfn%2BwYV54Sn%2FSpj5mQ2f1sdPQkOuJ2gCXh3CVNRASGwK75DHsROMOIoOylFfJZ7uVfkBDxca4QCmvrLTRBZJS1q8lHQshj9OD3UMXcFJhvnhZYkrauiFO0Sr2wbUbuli7bRLNmPCwtUtgFm8mG%2BQaZY2b3XlfT3Hjw29gvOPmVmZxPUXiNNJ%2FNhF0UBGnRJCv%2BdzhhJ&X-Amz-Signature=c840e9b9337357be3271612424216fcd2b8037847fff305f03f25b0e61b0c431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYX3THIS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGjNdsdB0c54kFp5ajU78Kg4minmW%2FRr71T1Vmjpjd8sAiEA6JXaabCPjNyUTWsXBW3ouH1PdcmswQKkqpe0hsz1ipkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDCdKPtoiDmLj7%2FQjyircA2Yz9Y0ZKhtjwwIUOdqqwR%2FM3sG0WQ4JFb3CdYKNvj9b5nIYdnOGHlVHOjdCeDU67waQWyK3UJd1qDavFawgao%2B6f1jJtEunViSGyVW4k5p4OUajOpbO0gBX%2BEtQyg1wb%2Brhb0jQciKFvQmuqAjXGtTG0VDEgJqkEgsgWa6f%2BQBrpmZ9pp4ARP6qTs1YT%2Bc287hh7Tu62ZiIzZ8wrtww%2FjGdlF4omknxJWfMgKmfteQeWXegBXSGmg0ZAw7WbwqVt%2BdAOygnBzkEVeu8uD%2BmLgIhkyvQwlUMWlxqnArmToIkxm7f9EP8wNHTk5ns4GUkF4XwOZbLRzmJPZB6pn0fWOROSi%2FIhVGpqnRRWloWEU9HtCEDtUGv3ziOoQn5x4dQHhob%2Faei6m53%2FscY42GlC9DpP8S%2FMIF2q8a5MdSIdReG0fxMCWV52g4d5xQ2Yl52y%2BpsUzpLYMqwJOCVa36anQR8eOMJeCoj4MyQNaun4nsLpTxgOcxQNBEs8V9tqs%2FPRRstaQq1JFR4dAVV4ucDpRpmKtBq3DAOcoi3dqsXmPuzgBT6pFvS3CJGIAYcj9PtCPOVSt%2FatldS1U0L%2BAzsFOQFyysQMMYPH2CUbW%2Fdf6DGVADCWHRG%2BISHezG2MPDpsMMGOqUBy0TFdDAWshVc8FtwBzh8ad93Mg%2FzI3j9NYj0id23jnJg0U77c2SqFE5XbA1m9iIXGsHKKq9YoPGXxoPTLqmQtmkr%2F7mEBfLFf7JcoJjit78MB8lWkXQGMspeV4VUQbjbMt0I6acZCPkYFaItE4KHEYZjoy%2FKvU88wxSm91ee53G30BGPA0LYys4%2FeNLmM1OMlw6uf79y4ggCGnh0iIv2c%2BCxZrlb&X-Amz-Signature=5ae389ef7a7132295391a1864f47863e2fb4c103565761604a40cf98ea1119a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
