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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRW7I5PD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXW94LXNzI7y6B71edOUsoO18K2Rz2iI0mBP1c0lAymAiEAxbToFFeB2mbnN%2BBSXhp6gY%2B6JH9dhAwQlnsNkC9mmr8qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq7ZodORobyz8DPsyrcA4ClFOJ0692i7r131YONHbNYDMTCzpMgAkUDO2889UGJx0L1XnW2pigjV9tGJ0a%2B87UTOvuaB9dmacchEPqxOtcXOl0%2Fli45lBipA%2Bgz6TZ07Vev1nJmFf8j0j%2BmTWcqoM5san4h1GEmm3zzWn4ruNYR8OFGYyZ4XslxETEA4QkrPpLl3U0YWVmp48LZFvF5dQNBQgmDjCXxTgYXBmhanpGEIjY3ESgixi3hQj94eaUyR0QozlHve1ie4iYW2pjQDRp6su3jvpOQz9vVH5o6%2BMsXewyyqqRKrswb3U%2Fni%2B1xP7q4pdutLw1lzvvh%2BJbu5TN2rtnlEp4TucYouCWstiOwxbZrleLR9LY8cm7NG%2Ft%2BL3NIilzTvqjgYgsc8xJCSAId3BE%2BuaoxpGVdMnuWj67kR%2FJm8BjKjPC%2BgErHwFeJfcd%2BrohruFfVxghnhkHLmSvsewWgJhtepuiSYbdaISXkWCt%2FvZy%2BxIaRTZ1aoe%2FAN7s3ka6GHtaij51qGZZGxZON5oiiHihBs0GO1HWiIyhxWhKBvm%2BZ2aKFirceQxd3tCwRGJzDq3hHph4xwjh2%2BCMQR6SxyI47sIHnCTAPpCVp7knkHFmXN%2BfRU3PhQzz74WugO1pUiw9FltgiMLihtMQGOqUB%2Bbl3FW%2FMXCUAZk6f2VY69nR7yoHHTEta0rtZs4Mxeoo4YZZS4XtfjrBQgyV6ru0QVO%2FWmX2GhOH9UKQhyl1hijwm0KuAlv%2BZbSAEZzElegCiS%2Fgj3yqmww1k%2BbUUfgQRpHyL2au9y8cPXJh5jHFZExI%2FIKeKA9w4P4Xa67sB1lkTLxV9u8cV8DoLtf2oQazZ5tSzC60v%2FTNP4Ph4Zi3KccTr7wIx&X-Amz-Signature=7eac08da49907f80946128dcc65ac17d601f2ac0a75efed47fd080e6d64be1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUY3SPU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICu%2BbcrpjWSgndCz3uYoWrI7wmB%2Fe5i1AA5SHBTy1EUxAiEAy6NPspIpf9c6rrTvqw4%2FYXUvskZeDPNNCpKnIKHq%2BdgqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJX3stxKO1F143D0WCrcAwYBeZiIg3V%2FRRmqORbDZ%2BuTEGZXVS4w8xqFsSdmUlrp8OosNVA0yWGBDho5YeB1ytcZLWJgpyj8QoHNmwrU84sYEqjXpdFDpv7QuFfzYsOQ7GY8ntgDk5U9GQxU4d5rwxAwy9YtVFVTy55qUTOysT2lKz4Rd%2BjUPJlguiKKi7NcH2RHr1VH0NFmftb%2FtuOE8Gpcru51PzoxQIDEOGmxWOBEywTNjv6rXGdgfcpNHwc7ZpWx7LQC4SXSRqJTKY2O0G2t2TBhj0xUGn0r%2FSVEiNPK1UtMiHjcNBBn0LLxO33mKs9ziBrhZheRSIBqZIeQkTqlC%2F5DqUPzVb5HauB%2F4CZNkxqaL4TK03LTg2fHxJ1GJMdOvB1YEyLRVEEMHDaGNYXZORCT9bwSEpPUo9dQ%2B%2FC%2F96HJREjSBbIfbwVj08WC%2BSUmAXmnPdqFfU7gIKcKE3fSTk8NP%2F7fZLfulAHlO9LaXcjKlwzj8%2FYXJTom%2FnJYHbpSMeCpYjMr%2ByWjg4AjqDi3vIgSZzViCsOcrg7Z52%2Fin9Tr5a%2BDYW1iEzAm05XLlQGiJXuOBUP4QjC%2Ba8PUXRqDS%2BXys0K0wxqr3%2BoDUjfEHopd%2F%2B%2Frl4BiyRcjMDECJXxGQD0YKMghqsA9MNqhtMQGOqUBLqePIawmfuBZ0rbnn4DyFG2sa1Rg%2FtnNuftYhxvhBpORwmb5Wfm9dmbeySbQBllT2cokcYsTjF6z8BTXZTkT4vz1uGfmEF70UHvo6uiMSGMWKWSoLqSlahG6jcmzWwkezWnJXTcr3sTCq6I3nFjTtH%2B2rhTfhM%2FgrdLZNERlY3PUuTsB0vEAifZmD2Atzea8NbsVpWi3rYSNiklcur1ect%2B2yMrk&X-Amz-Signature=6683c4ec91be6263f1a9420b3d2262fef8ba7833d72d0429dd76578557a38283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
