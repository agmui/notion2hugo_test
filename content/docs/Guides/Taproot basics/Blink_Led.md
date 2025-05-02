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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQI3DSS%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCdgtdEoflH7xKgQWeOuGUMIWqdd%2BuDo%2Fb7sd%2BxwXvHpgIgaBv59C%2Fd6jDqrUIi7SkB9uuoN4ASfq9cp8Ec3rAaGoMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcYN8uYzbAC3aSXLyrcA9Cp0EXvx3KtTH%2F2gVHVSUgA1JSxvPa1ADtWwZqoBuG3IP1IuV4qTLJNNbSR00QN%2FNb8Ij9M2F62ubaXLUFSl%2FmZN58umvHKpxERhRJwjpVBxJPPmj4ezpdrooMrGvPL%2FvhCwS60Oq%2BUjHxR1KrT0eAXd6%2BD3AqnDZHlztr4k1LDMQAb%2FpMmhgwcQT7flA7uxsqB%2BfBjEE%2FHo2htrC%2FAi%2BRv4yBlllaG4z2Mu4FpTorxdlHTXjduNBKL8UwdOSgiUBvBNWeNGooLHVMUl3z95R5kA%2FzFokfTsW1VIpuSSOSlX8ddlZkLaKBOTPlrik41X638ah7K%2BKiiHDMje5VLDXwro%2F%2BmohU8qjwngR3PVkjWdbfSFGoXAbfhX4t%2BvcEBk0e4U1wun5Mel%2FhJAZ22W8E8XvRZndG0FpnlHzAlJLQm5ylURSR5uLKPo2T5nsjMVpnewwQSA0En0kLYdbgCLQgi9h0JL%2F2fEWJV%2BCrcWnfMBr%2BzIQbt2zK5O0mseuz73z9Z%2B%2BHObo5ac3oOLTmcIm82ERefI7U7EODWYEXlKJshCo86VdvKcY8iypnu4VnFBHpf8zL1VYUuyzcqfdlXnYdM1Sy0lHDzecnzL8UGLHdV2YAGv8mNB0FTBlDdMInl08AGOqUBIy4STy%2F3iJQ4A%2Fs0L5OA5Ip9iWlLXF2O172FZjGJEcXLWRkGHzMSTZyCIsXpzngDT01qrO5h6tfkBKzTd0l%2FtmRgZdF70ZHOHsrtVumplVHHgQkYuKrSQvveg8ZiKKTgAs158qYK1cjtyo5on1cyiLeCEYVSqWanOXY0XcbM5coGAF5C3kTRWuiKZqAf8GrKVsypz2Kc4TU%2B%2BAcq5wBavrozp%2Bhb&X-Amz-Signature=6216e4ec7d779cbcd1909a6e43d3231c8b4c0c2cc532409f5b682e97a74ed2ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRWFE27%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDQe66EY9jkDr3hxwCyOvIy2X%2FDSoTF8fEd736Ut%2B1wEQIgJeTe7wcDmrzyPfEg9Z8%2B5I7N%2B1Npq%2BrI01i%2BBbRNUpwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZqfPPLLzyqG8X7GyrcA0aO0Oc55UdzTbnX04LfoXgGWNlzN%2BZ0O0EHC2XT2U0p07Fl19xq7%2Fip45CIWPOKRnwO2L9zGQUsuTBIetGsR0RiqIBOr8%2FFIDoILj%2F6sXo11EC%2Fi2vncdtNMEwUaS9vX8tS0%2B%2F80bYQPSoUmM1XQbo6pFUavSuCnhciN3EAQ%2FgXT%2Fn7s64%2BA63J6ZXXYgoGjY8isGNblkn4RgX%2FcdlMaBsQeG0VRImsqWrt8Ull48Zn8LcaDH5IwR3tlHhmMVIk9tCF2xpQo3wOf0sRWszLQHp9EyygwM7BkisFpjD9n2GlaI%2BYT0lpVhHlOjn%2B3lTxlEnIDjmauKy1YgPfw62xhB%2BZLsfBqrLNXMc06gbTaBKvpJEKBaZiqPr4MPdrxY3xvAF3QuY8GygtWgNGrIG5Y90Hi0yWCK5e%2FIrPM%2FBpvOqoqDd18tO%2FktE4PnELnulQJGBUDdrbE6iYtB6Y67egrM0S8CT0H68wRVMO1b5sQTv8lEfJrSpBZ2MO8hDpaAvQSiGs%2F9Z6VkKG0q6RpwyV6f1E6TzhD96r%2Fv%2BFaV5KRCwO8qW3DzSpTlOUdl1gbdZOG%2BEJk%2FhPXElGE6MQpjdWUzs3ZSeZgMxXmCVbTshdvT2XczRmEt97guyRb9eoMIrl08AGOqUBZTMgEctrXiNswIt6XEx1ngHyrKpEdtSU9w6cSUzSMKu79yRXLxQGdmahxoPR7MOvafBKDNai6I3cpmm3sGZuAn71sXaDrf1aeuUsgKwZppUmMUWA2bm1b8SqCGrf%2BqaZn9u4QCx9%2BywXD18ivnN2wj48%2FhH96Sr5PJlUpY2nirknqBQ2KENNCk15RVEZ7ENNdJYeLJc6uBpymt62Rm0sEmlrTJRL&X-Amz-Signature=796da176a28e2a4a37311af201beb9dde6d546f30fa00ec1ac69f564c896a49e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
