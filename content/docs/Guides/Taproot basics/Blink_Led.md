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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJT2CE2O%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfLC%2BCkdTEBp7Gg4JLRPEcu3kIm4mMkkI6tUKniotuDAiEAjt5Vc695mjEXZFiVu9nk8JNeUliOEnCVcRWj%2FwkCFDcqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKUDx4jPN1hIfMHySrcA8lbl8CgsiqBMir0B1eoivj2ZeoWGGGt9zq78G%2BxpgLH8CxqX7koYjTmbbc5yo7rkpoX2wbJ49PnyYqZPCGeUomQOiX6ouZWaOByGiHEG59gp5BMPj%2Fvmyad8HAB5G%2BkvBWpcFnJMyi0ZlWWWocxDD3QUbA53ZLcWTGxqYysTDae%2BvNMin%2BSnZydgc0fznm5pBa%2FfUMjk1bdKC9H7YPSmsr2d2mzkuAPcEp0lgvygjVVSzFpaUgdXe1t1bH1mo2MS1c%2F1qQ7YDLRuFhPiINy3n21m7TNOFAIMAqR61wJ8ozr%2BxFWcNNskhfv%2B8bTee7ev6pYG329p%2FrjzVvDIo5yvQ4uemLVqoyjkcBCqYD9pfXezMOndaJPX4lC2nl2rrN3S%2FeNE2PdkqDwxy39gYCXZZbG1XKKPum8GK4MrJQ7uQKDyWrIKoRueIlXi3cb3fxUawVPX6mv3ajX5wCk%2BA9B%2FyzSMAJUbT0r%2BO7fKk07D7yfwmP7IO9HNaft%2BwOJnbd3jDDbQv7WR%2BEjz9Uec38V1vtGtAQjdGi39tqUJjrU9Cw%2FQetFlbsHoLOi6Ytqoq%2BHM%2FVzpxJwsy%2BLHrZfchDKj7%2FbiMXGsCpPjsjx2Zb%2BlFnKUJxk1%2FAeqt6XAOpVMP%2F5pb0GOqUBI1ym0ywNp0N4uAF8edrVwmj0Gqyq%2FbEMqH8%2BdIvqUKwBFxEHX284BGsN8hqF%2BRp74UiUiv9SUQNzC8kmbykfgGOli6KHmr1TmrkdoMr1FF7dY2eQZHSvXOjIc79vOBdRPUX4Borl0Y%2BQ3Y6F4sb0HGQLp7TcdRtIQs33vaiC1z7V5wKFmzI2gjYQhTcyUrXMASiKu%2FpeDvEAkjeeKjFccr3EJRBn&X-Amz-Signature=97dfa3a8fd49802b95c186d624e49d2bc290c2b890d9bf8394ecf8d6d0369332&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SATIAP%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChVGTLq5YSGO5bccpRCIcUQRGdfKEcNEFRJpBo6JneGwIhAPH69OQkZ97atkRkTEyGKOA%2BDhpx%2BJsJEzf6pniSVLtVKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgYviy1Ps4cZ%2FZ%2Bt4q3ANavUtUi%2FUl4lwX%2BoC1rTcxsSWbs69rNruzEFPZ1GsIFayWHYvxxvZ%2BmNGtLUZPEe1alY5%2BxmDCibMuUNSDSaMASXkErFdgab9aq6vPM6rh1MiuD9Ga31WtKuLFqbdztQ%2BzGoMKiAxdfOsA%2BI2Vlt91Q4N6h5d4V83ZUA0r%2B4q%2FNoS36Ad7%2BhjrW%2FamfGm5JlY9sUoyDphuKji2t%2BpfmJHlYMXVZ39U0uT7hdEvNNYwy6Kl3vmHBvNuq3O6paYlFuq5gIXe1Jlh5nLyP7ziCuXGA3Ph8ZtDuM4vwR1N42V85HLAOhYEBeD%2F7pkvyAiG3IVf5EFN8s41ST1eBV%2FFlCG8qlmF%2FcDKmI4Z9fNYT0tzMCmEt4%2BZzjgwV1saKhnVhlWirKdVUewlG4ZCmu%2BeJAN2O8pycOUASFO2E3aoMiFqOxY0t7SKd3OreVbGghRVkyUqfiaAq2wE%2BDYYUzPl1Vjg%2BwhY2ruxVe5Pt8CY5N6s5W0ea30wK76spM4O0ZnD9ucOMLA3cDsHabhb4%2FSSc16xzJpdykLIFtB%2FSEYfBJTy5BppVwurAA7%2Bvyrxe9OAVVdk%2BMTB%2Ftjw8C4XrRAi4lLbN43CG4EM%2ByhqKbpD4oZVfrpeBx0mx57ws9u31TDj%2BaW9BjqkAdZT7VchbM781%2B4G%2FVPacSAcLoRHBJ6aEtNhSebhCu%2BRSLz%2Bq27yDracp0KODaeZM111IGOvpGB8%2F%2BTqqx6hbCBSyEzwfj7Ov5OppFFn95LFouprFMQMGjx1wXTEXMbnA%2FvwnqFfoaGomN0czKVsgHMHlXhit0JQJ3HOhnA1pvA7tO8FxsaDFXD1C3LtI8I6XIPmv0girtUTJDw1cwz4xCIU0esc&X-Amz-Signature=b06633ce80d97911126f527dd19d6abd7aca8727ebd4e9740c88cf1ab3bc41e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
