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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2KJKWZD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIC8okai4YtCUpFet1mBFtxp4ZWu97NEQ8KY%2BT9tGMtFVAiEA3sdHFIJ6defGw9eetTtMAiJeYTlCUfWKA7ImG7t5d6EqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHqcN5SPbI3yS7hvCrcA8usIWmMwnoAFOZjPrbhXN8rwbRmBZRuTntnmX8QTlhi0%2FaAb%2FAZvDhaAwrjP1lpLERJHNuv%2Fel9v4zDsxYU34KDaxqR6n88SkSjzMtPJbIdgvtgNIOzDgN8kFOPi8FS7C9OpHG3X4RlDIOiJwkdpHLU10RAFy5i6X6%2B5VFDm6Aub5dvNcNnn4CKavdTSronj8hfQLFfyreqYhG3TJCDsPxgEDEEPI6YnPh4%2FqIR7oO47rgTHDcjolDZBmmDdOwObus3x6aH4wdjyOLhaWQsFy1Em6tgHSFfPn%2BbSQh%2FgBgqEDvYzVHxZxkYV3%2BuspcTdtos32UdfKdoWXNGRbenmDMH80NZiabt4Ggi4495t3M3Qbg9e6jUGOWXHTF5OP%2FU1ozIHykXYC9s5iuE9TZXPCnat1Xk5HZndRXyUIRXYlgyAOpNddvkilCFG0RjQwLjMzEpK4iC8qYS3h51q6coaVl1j2hhyx5gGg3MNeTHgdDiDyoo7E2vuDLsPtJAIGSfh8vzNMoHxHCzqL%2BiYTyC7PHml3lYOmhFA7wTb%2BjWbHBhnM3hK02vDvgAZicLGD4bpkXzON24AmSj440PMmYEDU0HHLMRXkvY2dOKfvQ2kNfIEndC3FEkE6NxBCq%2FMLHOh74GOqUBc0jLB5tohyamTqLcFWc1P2NliegVU%2B4On8dtvvuEwPJzi3gpkfmfAuPu8SqSnpx79y%2FaliTWkqJ2f%2F%2BuJxQm3V6keRF61hx%2BImP2ZALsoNoFaHUVG65lejPrNb%2F3NLcuqAHfSI0uOq24ZgOqYwg69pPsR3wVLINarRt%2BU5Jix6oGUn48hFcIOMVpRLzYDlItN9n8%2BuTfHJDOgfueC17dndXzo6tl&X-Amz-Signature=7f2b26d4504d3de3e3863c1e374bd369729dcb05217225dc61a6fe803477f001&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A6QMK5H%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCSzevf6vBx97aCR1%2BxZTFW166q7ntyXJT4OT5CTSBnkQIhAJB2OcjFXJ45982isVERYBp4ED3N2fdoXNjmMysprWWRKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydS3EVBUDZr%2BEmxnEq3AO6pfqJnB9O8M960ptDC3XINn4ovcx62xpFG7%2Bn9Wjsa4hptZF0ByG%2FoS%2BdWKOqtnyegBf9EPjhtU%2BOtc8p7yhYteZqUUDXnDB5Skus5jqaXw49FdvvHet9w%2F2M5K5qh%2BM1ZikAEO20RiZ%2BJVCG4miuLSndzRTH%2FIgoTWQM%2FwFOy1ggZjQB65jdgT8S2FBz3HRUsL6ZuZAotnTE2%2BhoN%2FAzKvoJLXfWLiRBfIzoarZ1C5Ur8rh2jkFBku1UeN4XiMMCtkx3aESQuHQzkeP%2F%2FShHhYlit9y4rJUq6L53p22yXqFOBTDX8kyQxNV9xqYBGp9%2FYjyn6YYrhMYZdFq%2BfRIzlPRUegN3p22%2BM1E%2BrKgFZaEgwkqBpfI8sZYA%2F%2B3%2BRJJz9YIiqOPZmuEC%2FgBCjLTHmXzdurqwRVMg93oKZ2%2F9mSwa%2BxH%2Ft4UTkR%2FjL%2FT226Zi4AiqOTgkIaD4VYP0YK4jp1ilPh9dtKSvHcc2cWpKjpKqQsrZheKGiJHTu7CGDH1oBMYlQj5XrSj466lQSrhivhbwy765dh%2B0Z9e2gDTwTMM3Lhmt1Ymzp0dk%2Bb6oodbEjIsfT0Y32%2BOoWCasdj8L9IyLWc0gAeQRUtxyMAIYwI35T3cZu%2BSPDxdWjDCBzoe%2BBjqkAdit7QyqJ2qtcx33hmrfWVw9aQnDWAl8AVrpQOfYjL3gq8mnardnzeUCYqfn66lICb3r7%2F0e3YKbAHQMlR1jyoL7X4PhhEKGcYvRFJnFzZRD3II0UrGlSfMcIykfYgiT5JKhPJSIXDma2X2cR%2FAUyR96w4NNBdhQ7%2Fl7aM7tGzRTjz0aYqKmEZzoGa6Ni4ESAVeCUGXceqysrAfbGPw6i%2B8XrnoY&X-Amz-Signature=051460bb0928f10ce24d1f96a80d304338d28594d19c794a658c57b87eb71ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
