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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PLQKBG5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpx36TJoKA71CFET5Q%2BjG8xxmUf0RmgODR9C6k4Ls3cAiEAoMJa8ZVOBW8D0k0ME9%2BmoL0W1sS4Y1Z36gQY6OncaUYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLqPdywoIMFRWdLj3SrcA6wgEix%2F%2BQ%2FlZclbNRMZnozZu1W7Q1I17UDVN2%2F7g59c3ScaCnOIAJYjPJ7wDpQmDvykK%2FnleTsrghrRv4pRTCGjTa18Sz4LgLllaQuHdMKmrgAsFQCpndiJxrkDDPjZ9vNueDabwcqckAlFdFd3XQnE9lKCgQEeZqUES29LseviipxWDirNQTGmwibY08rarh1JCnf5z4D24DNSdUndzcVQ81MWg4gCom41RDkq%2BL6zECszJGv4AIHo6kUhYsJ%2BKoiCxm67ySzVg81d%2FYx3Suzh6hvi8Nj3whnTETUpadLTmbbb0WmOnhKsTJqgvbpE1JA5wLkEqtTFlSKRwTeHfmf5T6TvTULorfEMuZOgiSZ0RUZmEX0G5SDr0J0Yp9v%2FTuCuuV3O9Di8BgPhll7pMu2ktP%2FD9zmuNgrRHNNS%2BO1lDHqpPdP4vw15DIK2zqXJeVTx6MTOytWkMd64DnqR7KZ9Q7zxyLi2msbskA5exZvP%2BB%2BKaKFqjFeNd2Qks1E0M1eG3zbv68FFZOihh8FTXNR1o2ASG7cRxoxb26R8TnE16BuAXcs3JWUGiBAl8nxFymY%2BRRw2J1bsmA1IuOESaqxsamK33cY93%2FOmZoPPgXK2Sl2lpCANljzhBTNhMMT%2B5cAGOqUBnBV%2F1usXyE4jHrLVIvQ0MYXZh%2FFyh379E3KqBQonJ0p9k2BoemJf2xmP4B1GlS81SMA7J2BeYZxfT9y8cLjprkMfYpHMu7ruJ0I6awJvlgUo1%2BC8nbghz%2BO3NcU%2FAyZOS9T1eNnAHVCRzK1YwRv%2BYis%2BnTjk5rCBO9nrdM3c30xFaGDm9kRBgMxzZfN%2BQoh0Vm8QrsZ68sDqtmYA6aPCMOMRys%2Bg&X-Amz-Signature=0ad57c8d578ee8ccce73703748da7e5d04ce75615a43c90fe659a228c426a508&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAC3IGSY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7EffaX97fKerXWOU8a%2F9oPEvec%2BQdbWjgf%2FqnnmJSFAIgaXvs7ZQr57b%2FdR4PvBzieEc%2F7OYAEzjV8VWpij48krQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDJvgUXPQFXgJm0uejircA2st%2Fr01n46xwClxMWQW20%2F2frNeZ8W%2BfnlRuyy%2BDNTXaRZpYaGMVS5GFz11HkY8sqUYqxxg2MlGNslV6hh7brPBiHLPqfI9cEy1HTLaadpvKbzZCEgukKJo3Z4LBj5y00vlQM2q38oOEoDh9VrLF5UpMyAJbKGrNoLiHSh7bR%2BNY%2BqOhTE4D4XburM%2F6ujic6vE%2BMWykxembQn7ozXJfPL2nzCCseYyepMbDLUZLb8OBVi4is%2BWw1oAW%2BpM0zfjUOvc%2FADWVPY8%2BE5E%2BXCYjwhp1OJ4c4oi3nXPyUWU1fgUnfvI99eJjvJz7mr8ooRvY5rITpaS48dIZ6EM26SQuBQ8zJKgp3MY8yb7o%2BBf8OBrWUp5aBf1seMAccEFpDH5eOqPs%2FXAkmNYS84ibsDZLeXfI3QCOn0snwhBum2lX7X34FMEZgoSi04Z3jT8njebJN5xwjKFzMt56fujS2%2FmWDLohGeAcpePVqzGZmdQWDUVx%2FqgjCtsajF0%2BHxL7rRA8rvHMPmsJvFLPzqgxJTYKahdZGePA9QZzSpGw2D7AL7JswbRsGny0yQVEu1bO%2FwyQuK3aHW9IeO3WfpsvrpRyXEFkHTE2Qoh0jFtpwv5t5CbQTezRWKGEV%2BkkjhnMMP%2B5cAGOqUBWh9F9hieIQbWGSb1YlszM8dk9Kgau26LYwL00TtOuQUtLDlW4rP0O%2FQ6SP3TrC85bmjgjyZ5EZ1aFC8EhF5QZ29Yz%2F0PD51on93rhqENALbBFMqkdVZZSBGrUcL237y62sbLqC%2BMdkmAUh1uUU21%2F7xyZIwj2lAco6Bqitxl3X%2BJPdf%2B67WjmZFq%2Fl%2FoBngLou1Y%2FiLeNmq5JrDkhyA4SPOW7Gov&X-Amz-Signature=6c33fe28815e66f6d875fcbc5f8611932681d63f91827a685928a0fb7612afcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
