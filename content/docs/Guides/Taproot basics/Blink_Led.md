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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z53UT3Z%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmZuHi5S0p47l8Fhd7utWcJd6jn7CEZ4MQIJBCkwIGXAIhAMQ%2FZ35nL6voMCwtFgKBQVGODhQGZiDE6l8O5De27XBBKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznOjjHFlRPolM%2FzCwq3AObK%2BXD2zjnAJOnW7wuFV0pKDQSYkWV%2BwGw1jUuytO7YoLAZCYHSZepIl56XjxIw9iBeJJh6Ht%2FyApE7ZqtNJ1fpbTiM58LRpwwR2oqkaJ2q7uCd43RkXsKMGhgEiJH3OvrLFtOa22dhI9zPUJNkh3kCnCkqR4znAChEFgWjg9HSLsY7ciK98EFbaKQP20iXXk6s8Ga3vOak%2F1rAoZfDrsLWPchh%2BQaQLzmn1AuOqVn36DK0OYkAzyD8YZ9Pva0o4SeubYF%2BXlQRZlYZoFx8rnZMPId4yyCBdmvZyunOG0A11OspJJhv7qnp9MWdC4NfAQqncICEysokhHlj2wz5Bgy75YpAwZTDYDufLVqxpiKbW86GK0jNt95qJF3B9Xl8UIXUel5uKqrOe2WfOJ%2FLxFJW2I%2BxWePn46GswHpEBKnoz1683XJfLAm1K4UbJbSMgy4i%2Fix6D1agY%2FazgEczPQyOg0H%2BRbsVW7apsYdzxAc6bbzI%2F9fqAP4MYgf%2BAaTirlKks4i9LNRzs%2BVo6y%2FMNYk5Y0%2Bs0xS%2B1WpVmD9jktJ4WPjoUgkhmXn2oSjKTyzHSCji%2BknIkcI4CZIMXNRUUaj1HBONYHBzIGOhu%2BGPsQVagnsriNaCCFjA5z8gTDTnp6%2BBjqkAeYs4Y2CNq%2BT4fH9xm09fgw65v5eQiWh5kpMV3smjxlwzRC%2BwQNUbzySkT4K8gMnSQqU11vLR3aq1yFbJ4vSyotI7qGAp5N09Oy%2BynxAP%2FBvt4g9pn793r2DZE0cSeoCY1iVWIYmj3aHUZOl3lOOC7tFnF6dAANpa4n6Bdnjeos8jTGUgBiotWZpoPcd06ZfmUxTJvXLqn%2FDXQp1W7NwlitfuceF&X-Amz-Signature=37eb7a40f85ff60944dbd3900393095af783c7cf39474302b997df1dc0aef16b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PAFQW7D%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzrxX%2BrBBqhsInp84UtRcRQqPA5ab51GDgNPgNKJiHegIgBBapjenhyl5wxruR%2FL3Y8WaImo5r8FJzmNsz%2FAitVKIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfgcV79Mmt0Kib7iSrcA%2BG9I%2BHRUnJX5ae3veNCIzrMRFxNzceuSNr3XehKzXE4nEEGqLt04fk%2F4uTYmCeY2EiYlTS4GAwztLND%2FE9tM%2B9p0UtxOnr7mFeHDarLRLlziXWaNkHPcDqmc120P27lEslfcgY3MeW536RljJptlX5R035vZT6mFRtv%2BIF3fURGrGNPxKlcDzIxy9Uucq8TN3rdTrteV7u24Eto%2Fqxem03RpumLc33Nlt3f%2ByTzhGKw7lXKSODYoFwmaxoc0njEQpbVA3Ov9zS3Gg9jP9t5o0wAfC%2FRBnOMpQHRkteRQgNoXDXuv7QGJYDn9ciRT4zb4FNPVOvdM7f7V51oNJGS4OsAEU20iRAUswXQ9ySVJ3qxAM8AI6T9KU35bRW5V3iRy2%2FVv6WqwZ7MWS2BGwxwS1W5Nk9Up0YmNc%2FM4OB2xJMKrTcl6iLTQsA7Nfv7Cw%2F5Figdz57GTGEnM4k4x%2BWTch8zIc6JiZSwogvqO%2BHwoAGMG77%2BPx2G5YyReRrACbKUjBsYsJLszEZrz6l4hwBmtk98c%2BSyGciUo8xA%2BDSXtBtKULF491KruU%2Bu3YO%2FVYcekc%2Fg0%2FQZHNOAEhIcpC0TJP2iXn8EnDgT%2BFSCT0GmRAafTrjpcHMgzHxfEh9SMPOenr4GOqUB8EQLPfkPA1vMWnbTRvVdmmcBFxqG56q6d4K9vXwVlDzMSHqH4I%2BOuN3w9H8IsxEYJBIhv0rpNSFLrJ7chabqumHQwcokSI4k853d4G%2BfsBddrmMLdkIj0pJKH87Oo812m%2BKAaffbsIeQLrwSSGeJHBv2dT2CJl9L57RMgqamdDutKRdMHIh7XeHYhMXtfPZz9VYd21TMw3QNb98WxMRFXEihA0D5&X-Amz-Signature=f24db001d7d593442e81768b525512ba3a0c8da8425c2211036d6f8b123ef163&X-Amz-SignedHeaders=host&x-id=GetObject)

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
