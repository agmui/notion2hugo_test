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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNPFNVU%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCID5ZX4BREhoU99kjUo%2FycdjgCWgsz79HY4ErR%2FpklYe%2FAiAeTnm8lpykgUFlpxdQNJ31mN7acGxFw1rsS%2BGHJSd%2B0yr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM4lTefIirt8rYQFHwKtwDcblss5x%2FWmq4%2FVsaYRAtrX0sCRvp2br9mw0WW0NvbYOlxa8e%2BFLAmSW4STbUOSg7btsg7GcW3MV0HsbtR5HK7kLdhwx2Ks6V9rtUt87GYknsc1G4dq5xAgljfIVoor3cbTAhcYB0yIikhIDWi0rEJR4cIE%2F12Ghv%2FZK7eQ07EZo5J5UI6nhcOvOuFh1ZQqzTltsvLHH3ztLheoHV8Ohbc04nbXQqX5hdUI7s4l4eHLzomMM0zKjB8%2Byo0cfsjldOhMg61vlDQyzF5xwDpHTZ9rBRHH%2FRq1lkfdI4ZRmrgJQZ4vtrg2UUG3UR9ITPv9DOqjdGUuO0kIRo6bZ%2B0MxEDwWM9gysn6rCBAAsSxYlJ3hguWZKHX8qfoh8UqF8sFfmMd8g5bFbQtzGJSzhXWi%2BjLEGCnlM49m2qqCgmG5eC77b2yqzyz6G8kupX%2FFbZW5h%2FQV9hy5Dq7U%2FVXNDWEdZsAlxpoUglkiZzKq9TXQDF96NEhNannsky8eCmTkbW%2Fv5c7uRbOt38MsscJ02fTbr6wEmX9AQ%2BY%2FPHsjGjLXM5yZAxw7TZzCvLm0Rka8kQ9ONlkauFfrK7joqICQDA8CzIZwAYCtcTVeaDApTb8ndTZfn%2FwarkPNmVvS43Agwx%2FPkwgY6pgE1SjS7YB%2F%2B741oTBtf9uajuXjhxKbsM6ikDDDyIuvGoBDryaNoykFrSVlmQNme80%2BqF5wkF5t7rjaSJds2IkYU4hOut%2BiYWceUYcvc8WWW5g27AMd46MWk8UAZTIuswmPX3dGfHvSAvCpgZzeV%2BHVs00%2FEIa4h7h%2BvW0m00fwmeCEDrB%2FTEdQ2sNi2RHxbtc4OsrwjwA97AT0VgXGFP3RQQmdPqM5v&X-Amz-Signature=199b0d4af52627ca8fb223cbdad5a1763472498414ea8ba8b1619947c0b7804b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMS3ZXCD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIHWE5j1TIMNTiEA8idlLgWl3DQ37Sx9PDLAM0sKbC%2FZCAiEAui%2FE0hpYwCfby84IJnCV7A9jwct%2FdMpVFQTNTmh%2B6iwq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLkmDTZeybYk%2BqY3oCrcA%2FvBrTmJWAcxhhSIebUann0uEASw1g1lZLTSofFQhcF%2BsfEMwnYTj%2B68yBBiGyaOXxA9YqaS%2FgMqcU6DG6iyHE9p8zFI%2FiOwuC13B4rSIOslg7CmQz5LFhOCuTfX0sr38L%2Fbkek0zWfWbMR00zrpP%2B%2BGL8g3t7ETwFPKJP7EGpK1Dtl%2F627RepE%2B8urVQMkOo2rF%2Fg5V9maBeYLSq3lwR3VQirwy8sIoiy5RmXzNI1KfaFR%2F8CRS5DV4kpdb17fqOnCviE76Wa7ywkcsMiV91wsYBgDjV3BuppeL8kZ9bvcvEjKwztCLjdfGfWD5bpjebn9M04y75%2FqU8gbpZ3q78x0Ot1vhC8KsCwMNySKbdlTWn4o8ZA%2Bjsykjq42koHS9XIvGq4hzjyMbKh4JPvnps3vutWRYqvdw7QmRINWqJXBPgSL08urP1qzE%2Bw%2Bt%2FSN0glEGIa8YXnY8iTNuH8XAcS01%2FLNQghHySKgP%2FhTo2V9mExYjdSW5acWg43UC5ASLvdO2hNtQHRcX8UC9b2J0P10gDgeWF58qRyBOk%2Bb2slKgqxhAuvGh7mvED1Pc9hO5xnGQoHAYOk%2FA1H8Nvfmr4lBiOt%2FT1Q0PAAV7UgxVofOwlmLt2JmnwyjMlGLSMKfz5MIGOqUBWW6kYxUxV4rXPT9U%2B7a7A7r6YFNlzTbUHZG8N%2Bpc3qqW0T%2F%2Bm%2BNfGgzn5u%2BY1a1WhzP0LqJ34GvtVv6EUhVNZln7SILh10kH3o5TfHK%2BBzl3GSuktr7bOyjxaj9bkMORqfse3lxJlBR5AZ5aEqd66oVVZSJHH7Ya3W88KQJpBNphWJv79NBMBcLA%2B7Q%2B1mOK8aEAJwwQlFmgI8fioWW8yfL33P90&X-Amz-Signature=d01b4a741b24fe34ca30ad36cd112d9682962859dc9b75b6ed3cd74d96af0660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
