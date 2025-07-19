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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6C2F2Y%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXQ7JtqN1hByYQr4aXNhgC0%2F39yKK5wOgKcgeADaZtjAiA4uPjmZU5FxUJ5lsSHUYZDC4R2BP8rNJAGiEOogtUB%2BCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHXcCJxZGdY9U5popKtwDjhE9UwDFnQP%2B9sICKhUoLTDwnHzhb6tSI2smtICqQGJeCoO%2BsC%2FLUxAKcqpq6KsBWChrl7nGb17AMVOm1ZrEBW6%2BIFeZq4CyCHltfxdOFR6%2B4wZue57MQFZIoDMOe%2FXkAkAD3ZiSb7%2BYAHTvqY6lKBP7Z%2B8RtdIysDvCgEG5Wd7Erj4aVDg%2FUYmNBv6qosp%2BufWM5P%2Fa5aj3xLfYSHcBwCEuxLInso4zyGlzVEpOzJyKB%2FDthXGRnvgvpX%2FgP7WCCLSod4p0W8hKSiKP5kTcqXJ%2FqB3igJyXaxu1Lbv7QVEuVK4LN6UqP8ty4z84gEMj1f07zcFAb2aAHl7LNr7A852LwusWTKR%2F2r1wggPoSdlhaicy%2BR9XWrihUw6688wA5lrcg797jLtfm49Q1rOdtVGhn1XMXK63SqLmcRSIWQFoyWt503Td7XprZ0A0dBbLmNPuLsEsZ%2B8p0aTUlMv0nyghXlYQUxigjjooaogm%2BuxYRl7gpCy%2FGQH5jDehhmypIyUL6c5ufih9TkjOPs6BlN8n5xJZaAr%2BLk0R6mWRNDEUIT2uyS%2BmhkB5F5WxOu%2Byca4QatcG4BqxxJp1bhv2b9%2BneG0B1jp5XAp9nokbbwyETksuUom8Givfxoww%2FKHswwY6pgEZ0a5TnqNF3m9fpt3IgHSexjDc68Q46UMAY%2BGsEl8HXGi3rIX8EQSs4o8KdXcG9m1dYB1Q07uFZY5pKNOq2eyvfADvEsdLux9Q1yIxouKi2%2FxFrsy%2FTozuQOHfsD%2Bvz9ycAXa0TsqRnqQs4rVMiC1wbWOV8TpOjFz5OJWc1gzKwXabzoGAJBaMKypEBPbGFktIEIKJ06IhkWCIb3sznUDqzWAAVwL9&X-Amz-Signature=740175ea85d5a508853f64baced80347844a1cd6b77c492cfa35180e484793ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVC7VHUB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPPsprLwtsY8Hj3lwHCs8XQ56nZixkR3B%2BRIuuMVM6bAIgOEpZw8fPpZISob9GJ2FqaeLXReiRMZjw08m1hpRShWkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2FyyKk60ri4UlMrmyrcA9hmvBSBvkey2o40CFGtGb%2BwtvbsZIjhsPrclXjD3lI47UvXlz46BSEk1kXtk%2FN0Y275P2e0hJFDQvcwWa6OsNtyScR8tFfx%2BnS6wa4GkVkwikugs0Cxafm3sd8F16eFFcLMiMW8k2xdpLOYPlFk4veiQOli938HYId3LYG9d50UnmYHa3oPSieEgMGt7vZWNh99KMZKBzN4YtDYiWtTryWSUJurm1Fn3CcnHYWAQnylChHCLAcxHRE7CEe3j1vzUsj0vuK1RedwyNeUoIWIObxB2AaZ2ZsLOJ%2BfByPa7Jg2CN0Gvg8wsymHFFSs8VQQiE5gxFxqkLMH0LpCmpevL4rID%2FTsmXOCUFeayu9I%2F4UwayqwVV5ERvLsg93t7BiBKPQjHUedxsztkeaV3Um1sZdq8zGab426POl7lr%2FF1%2Bjv3eruf3rE7XuBJiRjz4IgwiPlPHoBFN%2BuYiOHL%2Bv7uYAenRYJQBH%2B2QBsVRBw4FynW8kmiSg4mBNMSQTJ7eCyDQOoYEmsqpzg8fzFf08X1Xoa4SSacgbrl9OFLYr8v06ieaeGPd6Clx8HFRAHcJ8%2FNSKmzicieBJmPQ5rlCk6hRllzVdjD8mJmEK5Km%2BJB%2BohNSujjHapflsKyqA3MOmg7MMGOqUBVIjae0IU9PJ1W%2BVD3B7WBB1u%2FEAzr2MubTT9eohONi08WRst1RYjqpvQl8u6sLG5lJKMDB2rSyLvszw%2FDS63%2B4tYaphZNM%2FpYq62Tqg5J9MMSYDfFEYFIqpBhsZG20gadbQhZHtoaRgu8Cu8z0k%2BXU%2Bd8UYllsYSH0MnRVjGlJFbg4k8NHUGaD%2B%2B9PvZKXCGb3XaMAa0UwBi%2FBLAy8HQDD3evb49&X-Amz-Signature=d5dac499b794fd960ab4757b8a4529b1511331f6b9a38e00f5c194d39fb36fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
