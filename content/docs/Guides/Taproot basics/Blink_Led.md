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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFEBPOUW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqyouLLVfyV1sJM6hYtCJ0eXRo8bEFg0Nv4x%2FRLgx5yQIgCOWMZs%2FCRmxZqPqTNySCD0g7Q%2BDUx%2FVo%2FcDrKj9zFEAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEh5quFFj2FV%2BAY73yrcA6xEceDRcXNzy0beSEp9TGke%2BuVYFVGHhv7ffUQbFSuSHLzpnLZUcVJ7bWuH3gweNtL596DPHriDEzxiJqh1YQs5Gqy36gjbfGWwZAGF6uyWq29xzljtij5CHBuN%2BnieHydsRFzFM5iSILouMIa9HLE%2FbzhW5a7BeVf1rmbiE3nMnWefg6oHOnvzVA%2BYX8%2BBDe1lTSvDnFjPLMJg6TFj5ihT7vgG7IHAPZQkSiY7c5a0wmN5bD1sAjHbbbAIQNVhwEW93lfbWE0rXUvfSlVSqNBDOEYs83WbLuH8hU5ryxCcbT3aykVmgjaa94t%2FevmMOed9NlPCT7x0lEdkqQwmvulm91Xs6JZYheWZhsCNOWX4PNO7tA9Eb7nhnrRjKj5Eo%2BIJs8vWteW24AUIZygcYgOTs%2FB%2F6djeP14OtvgO%2B9QcigIkcZ5d1VF9Wf44VixJdXkvVY3e%2B90uzsErlxajCxhuNg%2FIwBOss7HAXpvRhtWOBdERLlDSq8vaiPEWGbB0WpQ7okuyjGNt89S9TCd6KVrGUnaQVV3%2BYm12Dr8j%2FcTUJIukBg%2B5cm51ypEsCcIEXWdd342xdFh7WwIu7QbEAQHdrvLcx0L9sTdHJcTI24AZiKNosTyCT21N76ZIMPGB2L4GOqUB3dMPWq%2B0mhdMz6uWO0zWfShYk6ZhJzR1MMbKASl%2Bx%2FPFzaKeew%2BvmhTKpPW84Eg40qJjJg3yD%2BMbqjArtqHOD%2BTWU9KQWo%2B%2FSHaAjhhyGOfKFlhe0KoEormPWE7GT7Fi6RZzBWqljSc3cwEz6my7vY%2FXNce8piDSJBK6S8lCFoJriIcpE18H6m0cOB8TusLCQcDda%2Fl8tAUNGEXrphUovAGsOM5W&X-Amz-Signature=8340b33b57bb9371af666b4ad99f4876fa0c902967218f196c7a3b939561369d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRHPXX4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjZwpKigWT%2FnZNeiHdjWYQwF3LUo7ItCdQWbPF9K0mpwIgfNKItifjRhC2nsPubKPIHN7BXB3Cdw5fbGBk9TnCxuMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEXtGjc%2B0CD2AmimwCrcAwYxGdVhh6MmnleSxfZHldfbK3JaN8ioo6gapBaAVD92H0sBAAUQhb6y0i%2BovYtnhD468wWNoUtGaR0RoBsM4ZYzmZs%2FGFsR2F8PZN8TMc8u2G%2BHcQASxsH8oj%2Fn4Ux5qVQKpa5y5kVW9TWgV72K0iREbk5mKRCogBr6gH5umQifSb5%2BzrC%2ByawgtAjtmTLNY0swGjg4GlWW%2BB1V06SQ%2F7Sd8PJONV4bUwAw7I1HMIb4aUh4ehouT8dFMNbkoYrUxtRb3AoL%2BlyY5z2jHJhdANNS5aPc5vw3Zy05smTe7pMDnO5okXTtracR7RlvWKfWPoiDK5lDBNcqyAM2WtxRRUUBVXEdokFhCO%2Fsa7qdsMl%2FCiMwkVpH%2FpdO3OFSsiwx%2FCvdccAZnhLGWhazXE61VnZmtsO6lEKgr94qs%2F%2Bvqh2zKs2d%2Fa9dfUlgmqLI%2FY9B7epo94WEvC%2Bstq6A%2F%2BXZaQ%2FAot6jmnIxFM7OGBL8LOyxwyZJIY9c9yRshfz7zm%2BgWvZpu942NIpuyuBAqLB4iqNkUlaGE5XNqlW2ZJ%2Bgc50DYgxhpjhtW6o7ZNbeB0ItEqj1ko%2FLc3HvhmoqnshWjrhTqAfJKmujlziavPUQ%2FN18xodOgc1oW7eqsQtwMKeO2L4GOqUBX2huj8LjKcOPuM5r8CijOSNZFIeIMmqg3bjNtMfTo9%2BX9PCPyo7xRsRCvR93G18UuCOXgzxv%2B7TusJHN6M40GoLo5XllIto1ojX7rkBNXpTUYrrHNJVcU2uIV0LzfoTiylRbVE7n4zwTiB%2F9x%2FAe5Y9yhsPpi4lIKJnCzKvXKbkB9EHiyOQ2sx9WsA5ZR1fFbq9ajqjbAPiHQybiIeBi%2FV51lnjj&X-Amz-Signature=30a4a6a58c4abe5070afafbf238fd50ded85bde1e43fa669afa0cf54c3f5564f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
