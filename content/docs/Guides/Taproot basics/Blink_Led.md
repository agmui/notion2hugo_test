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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZVP4SO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIF3bgDSEpztooncMhsBDZB1kOoGeQl%2Bh8JFPnkhebf1LAiAFi2sV%2BHq6204sDWdDihKHEqsvX7dk9x3Ufl95EI1HDSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMwD%2BvBIL6eenUQyzIKtwDlsdGJrwNCC6bJxQDtJdVK9shSMY5BEpg0uO%2BjW7ht42ijPOkKyH2k5fqw1fVDMRxRECR4PQzd26TbnasQ9pocScHbyUtVhTISO8qTmmEizR31HbgRQU7RgzIYY0dLI3wwcJ%2FCg97azp%2F%2BzC%2BqyCZkL3dCw7WmrQ63s0L5UeanSu8U1E%2BVBXLMtBXn7j5LSSZ%2BvgEIdBTWYqIInnEL0DFeC1cvd8N4nf2a91wG%2FyiX0E16vI%2Fr4xAdvJZJemlFD2RuH48qddrSFxge1MN%2FsDZw8E7LMtNqHtjxmFvOBRzANQqp7QD%2FUcvTrT6UFarKpc8W5nC849L%2FtCmxBSdWusmlHeDKdVWBgcuAsfQk%2BzTux37DzhX7zf9%2FXydiZFnsY%2BeQ3M7nR5AEIymoyhoMDoXZ0KifED6W1Jc3QKMIGPA%2BzLkE6HzDt%2FICMAe%2FpSY%2FMbhvzEf%2BvrlbbCg7MlCCMKWAuLBbuEO%2FP2C9zQDDzMqR1sn1feedD%2BS4LGs%2BOtyo%2FW5ynqvcrbD606rH3B3OXwcu3MHyOMgqCJRVuZp40O2wrxAW0MB4UPAzxYKloSbMJACki5QOfiQ1Wm3WAllmQW2uZ%2Ba2kUahqXiw9eAH4SQ%2BG3jDza%2BQ3q1DvBrdW0w9o%2FQwwY6pgHDa%2FrDzfBSfTLDr4Rkwisin3JXQNOMUiplX2xAj97hkKRTFa%2FKjDkHh0xfwEibWv1eCUCOgARjcKHMqauuATxBTr33Oni2l0vo9QUqeuOIB4MOVMwLgIKluhxrM0vEfozkdTdYFjOwo5guT%2FzyTQ8opE%2FOqf9Ld49L0cWjNpi%2F97QTipNq%2Fppg%2BVPF1FE8lmwoDvBf1orkpx4Lby3O3yGgMN1TevFy&X-Amz-Signature=a6876ff944205271ee6dbba80066cc0be0d0d141a78dd31ed8e88f00ae79c5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W72QPGJE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIE0v7UEdBjBS9GcGw4hoRaKB7L7Rk%2B%2F4Tv%2FxHxbMMnkZAiB5zgg%2BjYVA1KaMuU2KSKy731vRmg9Hz%2FmjzgnWj2Otiir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMVwMuPImMdyEdssBlKtwDMnzbDnu0fwCkEKtjf5lMvn5ZSakcFbM1g6n%2B52032DJHkx5TbpvzfVWjnOnWhO8spEN1u7M704nH2n3jXvk5CXtygvFy7pD9l8f4GLS57i680vcL3oDqKBOTx0YoOM25x8ntwjw9Rjx%2BTPipoLIYzs6grrLwFH5LDypafltugxQDWRGd05NJGEaAsQ5GlFOKVk0MaWPwqWIN3qO0raXA00LqKzdvwAxGQ5aTVoV1%2BiYMCNpTJc5tsAzjILiANO5eXMTA8usmyRbA8LkPKhh4eN8MnH6JFr8LnqcPPimuaxJU59Ry2xQKGWgo9B5%2FoezZ1VlLS4UgG6E2WRODkfsC7f8s788d8V085lR8Y%2BqJwBv7fQMZyXTUtbIWlQtjYy2YZhZLzuOng3dqNkcehIGLh%2B5aMPOKfY%2B5ZoNfBrKf1xkgFtGtMJk3g6GftruARzDJrBMGkVA1qa5WdjbkPlUzRTiNM54K164o8AkdQULESvaaHtu8CAjzjKeYUDZZraGKu%2FrisE%2B6YBXFvdLeNtXNOpgXZqGKCQ0OiS9Rz7aB28CFBSgdwAPV29KXEvN6zKGQmgai240sTJ2m%2FGXWfSkETn2%2B6xAv%2F3Sre77Fz81Om1Pg7%2BTM6rrbPIgXpHMwwI%2FQwwY6pgHQTm7mfe8EvxugZyIxxPWN0gKoPUQ34%2B9vzE7KgxgRh5Elk%2BcaQAMdh34oULKjfJL%2B6%2FcRiXcE2A3Dp1AUeh0zrZN%2FVdCw7pL0DEbmpHkTng3qCkfiG0eLZ68tlsR%2F6J4Mxsz6fs7aJRMpDvdaJoaZlsLBj3wrBYwo3khqh9W%2FN%2BvHM%2BbsjTqvk%2Fcp5K2ij0MwKMSvmyavBrTMG80Q%2FYvG4wYvTj8O&X-Amz-Signature=01ea6858b9c60ba882c20ed1a39d248112f93049af4824fafc68c4be8aebc406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
