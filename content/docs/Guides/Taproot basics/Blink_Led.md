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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E7J4F6N%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCeZEWfidrFXEGnPyXshzPE4nHgewllX3yljVvjNjtViQIgDWBeQwkItJskw6XqDYeqjlMk5FMyR%2BfGBLr2HeOAPuQq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDKHDDqyuOY6vkCyoxCrcA8i2h86MBCWXfBkTb8i%2B6jSXE1m%2FtmKMPsw%2FmamS5tnnY6hDxFaDvKORr6cTRm1FFNcVrDqEe40wj9N2Ub%2FDc0dD1ElLP%2BdlzUov4Syz1EDPK%2FntMpja1JaunKIXsNroxS4W%2B9LX8NEAWFnEUrj0Kc%2F6l4Xe8PSVDPZK9EJgPJWjfGadaVSajTu19B6LfzyDdFx9oWDn8%2By%2Bo2bMRTQfKkD2%2FPu8r%2B0r5lGJtxJwriXhIW06SgtICdqFUFnHHAxbT14%2BKi29f2W%2B45xzDlsStMSauF4Cvx%2BYTcefCXOkPDvkfCCca4jRUGFPoOtmBME99JHRBmSKvdYb7%2FSUj2oH%2FSM3Is08Xgu2%2Fi%2BXfgXPX97WPLd3jfdUyoPlBPQmGAhwtCAu1L%2BBDBrMnnFt3XQClhTfsxmlQSiMBjaWJ66DFw9iL7bj17KDjr816HdzyIdBgtuEsM%2Bq0oVdSHg8mnKqf7XuKvnKU8o2iW7EpwA%2FJpV%2BD%2B%2B1N37veZsfCbH7m7fJAYkGrPcN4MCPIB6qR1qGHzOOLnbpY2NP6sIhXJUHMB8xRwZK1jOaA4BvxJSRjvEgH%2Fcohm0fcT4ymSs6Wsuy1DPOeV043YNpo92eheQkfFHbj%2Bs30PlO45L6921PMOSs0MsGOqUBSwbQdwdjBhz41WVxDpA%2BuSzT6Zpc1VXiBkNjM87vCHPCsGhh7%2BUidGvKgXFGbJrZ5YwyHmmxwypX5e%2FE75rAS4UTB%2FUspBkF6XX5VERSsqPsmG1qtodSIdA0m0IMUtrzgl0SALZ4VaFwnr6JH8LMu24qsvjZ9PuNa1EBEauxXY4n563SYYQheYdVsCACdYVS7roDhXW1H0pQoINRsmMqy%2ByhExjG&X-Amz-Signature=d79b9fa9d27562a0cb07091430d774694fa0ce29e65dac92fac221fd208fc240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV54Q6CI%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGQ92Yea838dXTOlf%2FmcZmpU5z2sqNN%2FQXK1NSy7cQgcAiEAsqc9ei2ol6xJ%2BylcjDpSydbqw6LZhfnPrJqyVxLAJJcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDMmmRKlKwbc3TgKfPSrcA17LcI5ogDxnOzjO6alDy%2FnAUu7m2%2F0gzBH8%2F278j1mZqI455ULqHNIaamBX0ExthJ6%2BLr6AmAKRK462tY1wGbmUfpuRI0ZfUAZXJp8R5OTmXMY11ZG8Y9ZCarAnYvdofZf1xBjaJEpatrEuSGp%2BhH7V6IkB5qRXqq1aNb1nOePaSVfmN85igQzNuokCJezWfPGhvCrpz49%2BuJoW1EM1M6Vb4ySkK6w98s8DxUDvmE66BXtJcww4Jl9oMEBTEYU15pUmJQPdCUeoGDLpGoG0SRCsxRROUSHlcvxiC%2FMjKvw8bV73pA33r8dAkzSETXHVzhYyw%2BPtXr%2FCPC7GeKnxTSs1IKetevrDqyQDXT2Fb7fah3DIJvS6y%2BHA9aS67%2BYxKeglBM0FTBHQ0Z6cRJFk1Uhz93ZK%2FfKa3gnqZcdwKT1pTKYx%2Bgn%2FXCm%2F4zCyegVWmqWqaNkXmp6ZkANphBz9WxHrYTDDuaqU8UaeERNEqAC2vDRcQpTexd5ufO95x4%2FthQwTka%2FX6%2F2rWPoxEx8V%2B8Wtu%2FGQ7c5vF4h7lSCXuYcyqw2JgwcPUEvkIgOJg8i19RWeSS%2BfLXtmzEcOM%2BiDbpI45D05k2FTDTp3dEDdPO0AWUG9epbDDOeVhs2HMOSs0MsGOqUBdWOsOhbMv%2Bqn%2F%2FelEAmRfwgd93b%2BFNnAMyKuirua9NukE4cA5gBpo%2FbNNHy71EapsueAmfKuCkV16LXiD5mzJzd%2B6NasGk0sgdnQlfG9j4BlyBJzrHRpnFRd%2FSmCjFcNWwDrO9yHF9GCg%2BjhLY7ZlmHzrp2oXcQiyBhckwB2hUkiEgoyMHh%2BXM09YhzHGrq6gdwHOv3rYWf8RIx7fDps4XHR%2F4Xr&X-Amz-Signature=238023ed0a276494441e4f921a5a9ec974161982c6076dbc57f3e73502ade46a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
