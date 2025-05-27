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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZO33LJL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaDA8jQlQaUs8NaeOi7KEUrmGfD5cFFhJsE%2FvZn7fw7gIgf0mrxzAcDgfz0Eyp6GsFHAqOKe6Oz%2FuTeFG1jMsoMWQq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAiANlL3Xzqncz3xHyrcAz5OrbWkrLqLldqi2w27EEaGEqy86THDeZdRlE633g%2Ba5hau3jcNx%2FDn4wzX8Pur6NSvhSUfEgfwH7eRfD0dC8fys22GJBPchJBPGRF6WPshPrpn1M%2Bn6rZsA5K4mgVtoncOZtcYkRSCuVZ7Q3YQ1vdirj%2BmqIl4Nm%2FGA4reWCLey%2F9OXhF4jGqA8a4HVmmjYPjlBTwNyFwg%2FpFqTnJB%2BhfanMr%2B0zVDzjMWj649w3wGNbDZmKQkEfAjQU1zFVePzOqrA0205z6phhboNgryMf2BPTphn4Aw7qnfOFh%2BPtg8vQxCj2hQHBNgQ2xPdLljGhFhaWfFV0l7DbZ8MYUqnjGWTdQK%2BBOLLxlkEHV10D2b2MZighY1GMth5jTPqSpKxthwMce4Z1ZkGnlp8n%2F%2BeoUBlzHUyjqd1PpOh6kUR3ll1MzYM37gE1uaW3kkD%2FnlMaFuuK%2Bc5TQi7SBDx7C%2Fg1u0iRGFs6Wpy4xBYrPyyyIHm2D%2BrGGxWA%2BXwGt1n%2BT0gFSYJGsRhTtAsxZ0wk1bU%2FmRhyfgT9m0ltHMhIi7T7w55Q5ATpNxsapA0ZB5eOWPWWXQNFt9yax%2Fr%2BnsJjOwyW2lTgoJ92Q2apkYFMtdLLHtLWgbed7DpWxkrZzOMMiQ1cEGOqUBTHgkdl4GFwIJaSYdug4gpFQ99r9lu0UYEkHsfbywwN6lA5EMO9e1Lzpz5%2BFv9kCqSegNHKEIi45iMdYetV1yVPnatYAZI1Cl5SyJ%2FIpTfBDaCJSBpB%2F2otKHXZDqC66AAbE0m5wbbd%2F0mEk8%2BSLcC37zQHOI0zQkC6jdOG0wdRRRslqKs5Yg%2FLG1w0fT6SkuAtGPJ2yNLCp2huWYuMVfBbPTLWqc&X-Amz-Signature=4ae6c804b4f1f9fbc89cd2f572a3ad61e555452dc76147a83fe5c606e42e0151&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP5DU2H7%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsNwXom6FITCl4FzQne0GemV7LqLTdRv2Vp2Hdt0VRsAiEAou3hAr0xxja1nriPsfxoR9%2Frqqea9ypVBlMRKbIlRUkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDCGVGPL0YRusV2edFCrcAzVBDqrpOGMNUz1SDwB18h8fUoJ71Qc6Ia%2F5ZSZwffwJmBsb9HHIgn1XrNNeonsmLTpwkwocm84UmCobc8s0LDcnZCkg86efbgnBcT8taaTzEF9ARn8CgS%2Fz5jJHBJxFf%2BIAQeDjciXRdOCCQQo0Lgr5zcZ1apBuJBH0j3%2Fb59QL3x0AlZJ2zs4QQg8TJsy90xhxgN3%2Bug7w7aLUIzdBDRUMk0QO0J39yY%2BXVUuNzzsS0DbCNAH43EqOjmqar%2FNdprwtwygnT7fmbrqwB%2BdEpZ84rhCr1%2F2smjFKM5kjFi2YB0unwm%2F36ZRvaiflxROcOPb7pAYeNi986qoFJ559z%2Bdrx%2FyxSIAxRzI6OT8HxBReAtm%2BR%2FxdKGJMTmx3TaXUddSb6VkyexKohp%2FsVYZjjW8t4KC6OTjtGYB%2BKMYYNs6iZK5ky%2BNyH0k1LTVM24UJwMoQumDwSwsbzDQMhhKJOmuaoRsWa5BcganH0eo19xsJJFRKAmHwb1WW9Al86qB49ih1YDsG8Nl1FDzmhk5mabs9M7O4bzZkRR0GT7CdPvs55DfHDn8%2FE1ey99c%2B1bmzWcsqh1bO3mNRoXzu5AhBdvIlX7tzh9WCgLq3VjWIbrCeWDnpMJ72k3cN7phCMNKQ1cEGOqUBE1ZzMguu6HkcQ%2Bg0PUsFm%2ByETAiYFW7Im2mSx7GJjM3BywPWSMLL54F0BbyqRIu20x6WvtA%2Bk0z%2BuKt2MIgk4RpDN08B8w3UANY0E3KHY%2FeR68b7ZwOEyb3jMTBoAEJ0DcdQYGgUIcPtUIByahkwFKOLwwBsRtacL6mzNan4%2FT6X47M%2BL4h7Xft%2Fmdo8RlXVygN86%2FbM%2BltKmlnFJqSC9tjJh9BJ&X-Amz-Signature=7d9a1d9ea2a88cfac14ee69df7b825ae1ed3be3d982cf7d96b34fb302f48ae4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
