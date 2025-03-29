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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YL3QUJLJ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFVbH956MlEePZ97DP9Luq2ELUQArgT8jZ46JIkk4H0PAiEAkVqaHoRJbj71eT8yoGGWo1byqA%2BjYrmuT4aEq5wKwRAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGmlYPRIXBXEwKVl0SrcAyp5%2FdliEy2AZVy%2BXFJ92rBZwj7HEVb4FpmTAlUzUdlri0z41MQ9WITl50Qy5MYui73kgyEMRh6jZ2V%2FG1Ni%2Fe%2BehPHeX6ye8CqHFqZKye6qD2R1yXk8CWBC1oU7p%2FAEgaXlOlMSUDDhZNJVDnF56%2Fx3rTFon0GXaYbKC6fthhyM2ui%2BQCLEhanZXeB92mlnGtBrqi9VEub%2FA%2BzIUCjbSwp1NPWsr4J9iXsFhcA4xYcv9yO0MkjGpP7sOTrDIOJmVYaJGic7MmcPAcjUEckM8Bh42aJO1HwSL%2BpBwOoYxCzMZFJEtgqtX99PoKrQmXLuZxgs7OEqdMRnnoQ0WziavvCeogqBx9h9SHOenbORXbIz3fNpD%2B1TdwN9phCkqaiDR8bpsjkBHjj63defo59qUBJ%2FlQ6aMfzKlK9bL%2FYB9n9whg0y75z2trTV8WqAApkPhqLw4N%2FJbyzCckjKnObUkK4g6YHtstFQRm88oUSh5zUPOHIeEARW0rM42%2FY3OPanDD3fQvS11nqjsYoaBOf%2BHDrMTM8FQ4H2bx%2F96IVGGgpJkrUnTcMUH%2FQ9GQcswsTIB9%2BHI2hPY6DOz4IZSkTxGP73TLV55j6RQSyirAYZUD5jFdl9CZN9Ar5dwiGpMLrfnL8GOqUBpPTG7oIi5zSU1XXjveeH4xtDsM%2FE0MqZQOaM%2F8nDt8kx5cxOEU8SU9PoX2JC7BX%2FdSauJfSYUo8ynlY8v2Av7PM56ngsXPOLQWoBq8I6z3ZGaTPEu9K6siZkDAG69Xg8UK0w7D8eA%2BJiIkD7wag3ZQZd1cqNyHGpLg0jrrUvKFWgFSECz%2FDCP0KFt8XjvWeeSh4DcOpX0oCMGO0BClTN1MdKHVxM&X-Amz-Signature=c50f5f4e1a0b0a47bb628ec13a132d175a51ceb315141fc180fd43bebf36ced2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V67H3SAE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDlWfJdqT6y0OXCWN8Ok2BFMo8pZYXEGpejXHkS1%2BTJiAIgN8yY5qa4%2B9WykJn66I3KBldZiVyZPhGbRW%2F5deST64Aq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBhigefJTkvgFRQRxircA2t1Ov5wYFI33vu1zAak814yh8kzqC1TozItMTt8u%2BbVcLrH%2B698l41t8NI3P3kCfdzILljobx2BoEcEFPYCbgNlR0znqacGqqBTryJlHYBuKtK6dhpPQzB2EyudYQOElydhXFG7SugBmkgJV9GEmfBgAAEI6bBocyOjBQ0OrkFe%2FDT1Scb034%2FRCzVNCbIbdgoiA6391d4t4tLpWqwOWXdyJIE871cM9oqXB8EtdBBKMSDDj9nbXx%2FiNgU%2B5hivG0ReXkfdVz3%2Boitt80lNlKhLp4JcGcAg6yVAj3MQQRZrLq0bcopb6ZAAecmwmiajnkipOa0WGK4UXPuOgsxosgBsrD2QWNvyPVKi5wvPZUahQy5hYmTzLZ%2FfkIhQnmWAPpd804JQXWEPHfhIQcVa6Vjza3ji5ibAbb6Ab4KGsVDdVujrK%2BbRZfFmDnjuT2%2Fto%2BwSBRR1qnphfbtoRM%2BRAwjinXZjor3yZoK7soAgs6nlnjxYYr2ljQsFEPnXGMCJpb9doRUiKdRELP%2Fn6CfpNDlvUTo6J80y4qdIu3tJb2ajRla9NSUkWClHEORNI0mYb9z8tTyXlicBX08E13MCOhsOdJFHzM8g%2BEmHu9ev%2BScPEaVYfYO2oMp0yQWPMP%2FenL8GOqUBarqQIt%2BA%2FsZP6Oc4xzKL%2BvphWSl82KFut0fKPoILf0nJ9O1K2uuRI8dx1twQe9FPCJ0rK4v%2BUNlUzyPF2cl%2Bn293tysfwJoWA8VA54dq07hHT2D%2BO8lVDYjAwZPA%2By%2BUGVCYugaKT%2FJMb%2FkFDSyVapKJgHv3tVt5lQ9q0MOTcHr4tQbupZNLB%2FXhbzeHZsL0pdJarp8dzt1%2F8X0awCQCD1KAL22K&X-Amz-Signature=61d1839e7f9b184fecf299f606b33ba1cff317f7b26d74fb66a40877d7104764&X-Amz-SignedHeaders=host&x-id=GetObject)

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
