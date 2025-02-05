---
sys:
  pageId: "657c74be-2e53-4116-9355-6ed4fd8300eb"
  createdTime: "2024-07-09T00:37:00.000Z"
  lastEditedTime: "2024-09-03T17:55:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Timers.md"
title: "Timers"
date: "2024-09-03T17:55:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 125
toc: false
icon: ""
---

Timers does what it says on the tin where it will execute some code when its set time has been reached.

{{< alert context="info" text="Note the Periodic timer in `taproot` and `modm` are not hardware timers. This means they are poll-based and do not interrupt the cpu when their timeout is reached. They have to be manually check if they are done." />}}

import libraries 

```cpp
**#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"**
```

import diver object and initialize the board

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
Board::initialize();     // initialize the whole board
```

create the timer object and have it go off every for 1000000 microseconds

```cpp
tap::arch::PeriodicMicroTimer RunTimer(1000000);  
```

initialize the led

```cpp
drivers->leds.init();
bool led_state = true;
```

turn the led on and off when the timer expires

```cpp
if(RunTimer.execute()){
	drivers->leds.set(tap::gpio::Leds::Red, led_state);
  led_state = !led_state;
 }
```

## Code

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"


int main(){

    src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
    Board::initialize();     // intalize the whole board

    tap::arch::PeriodicMicroTimer RunTimer(1000000);  

    drivers->leds.init();
    bool led_state = true;

    while(true){
        if(RunTimer.execute()){
            drivers->leds.set(tap::gpio::Leds::Red, led_state);
            led_state = !led_state;
        }
    }
}
```
