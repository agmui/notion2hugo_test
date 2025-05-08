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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664464FGO7%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOfbGokky6NZ%2BsFf0J%2Beqdu0Ouox3Rf436efEO7Yd8JAiEAuZAZSc3o11Bys5mAGwpWSMaTjIRSsW%2BdeEG%2FeMw6u1oq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEDwABk1Jobk9GhfuircAwomMaR%2Feggmouzp7N250sUZtQrmAg8%2Bqhkxk5AC4A%2FTVqmudXqTLIRla7n38MvT%2F%2Fg0W5cExLZPWByd3HTWBwbE3ukkcTevYa8Fz7cmDpJjOlKwLv%2BTRV%2FIu4Tun8f9DfYqLwp3Uy%2FlZtXovj7moZnjOCSYkQGu3ZQVAFZJvfMXjJ2eMLT4aKDblVxVZY00urB0QgghL5QgssD3awWpBtqcQp4LluknoF9ZHf7CuqjlRvV1mvBo6kc6vpTk47DcbfF%2FlbCJD%2FgyJs116b%2FTwNi5ViR%2Bh4eD5b7r5YOJO3tVHYtUZqb9p4OPqDRcoGFqz22RBoe3Icld4Dm0MkFZpTqZpfb7DxfNIjOaNDIyV72Et7ro7%2FAiRkg2tQMXg4FYhYGRGcjv1BTxgZoPLt656h4rbjb2jXq73jiiBJ9ML4g%2FY2rRRt7W88ZOEJzPWihTXqaHgz7DDtpw21TrNl0uxHpkZuDJhHKHhwHOMJzC4bei%2FKDViezmu3V9V8vuFioyk%2BbkIxEu1QyhfAt9ws1dyjQ%2BPdp906PHjOccb6e1IeBSFktctrFZZAGH6UOY%2FbDi6TL%2BcG7KhqlNGutr9LpHdjxySkPeQbKFDokzXL8KIcT4q%2B83bBAOa2lvf8oaMIKx8sAGOqUBQBDC19A8bT2MBM6MflGbq9BUtDUciQI1nlPiW3hQWTsshrekT%2BKotG2ENTlEJNmW7JTGjkK1coBwtOu7kP4Pr9ZhZKKR0HbB1DEJxVNXLSopewrgg2ABCF1ete0bhHmTLTSjsldufURc2cuYhxzUnfKlYVGEIxrRuVj8LQyns4uHHeNifyAvrCLwK3A348UeRaA4o2c47%2FGmIj8G3M8as33K64MK&X-Amz-Signature=d308ed3e73f83801bcfe578ede2e72256bbbe9d499d4ea6f563e3c4850a9ff73&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YVVZW7S%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBQuOvato6U0lEaiyLeaEOnCMgXHk8RCVVxj8qU4CoAgIgd926UQQeVjnUn%2B4dPS%2BriDrMm5Oe2G3GQQ1l95NUaegq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCSj5mtMJahiVWPerircA1eykkWQF5hPf0W2%2BP%2BFP22Y5LgdZiD1cil85wWhNxSSiWG1qBbI7tKwoEAmqsDj8jUSak2glxbmWm2iN%2Bc%2FUyZzjMRltqnDS28dwTzlJ3sZjLm7KJygl2mM%2F8xQj%2FmF1%2BCbhGNEZ01r67N8h%2Fj%2FiKEq3xjPuPAitQUTKb4FJle2VSRUl2pXtmEh95Ph8S0SUQJnjhvPv6Pa9b4v%2F%2FXEAvm5sH8pCDCCVw%2ByYqEZqWINxBJW1LBrcSh4%2FSvDd605oDGHv48nr8YNLqJYpyaMnx8Zt8tmVZOTHBXX%2B8Z6ZNqlz6esRqB6NZC8OHzPSkCfy6XBMxm%2B51KZ3FfarF0aAFZGY4xawZuq7Bu7dnAgpkdutmZAwbyehNO6egbIibuzognKqAkRgviUonblXcR1CfcSA0zwzdiGmspBwQkMzkvbx1g535j9dRiPbLULqjQcKa41V9TUjatqG%2FojFaPA5LfsEJDYiUWFhoQg6Pe4%2FPRgOWi%2F6pjkuhJyJnqwAeQ7yW7taymOrbE0fFMrBIL%2BmqlBj19JsG4ppKlza63E%2BlFEdTq65exgEOcHUezx3EXL%2FdzjKcxbdlpIhr98cSM0Q3YHTdYn3AbQQfZ%2Fp7WCw21343IDOXTRIaHNv8LgMISx8sAGOqUBSDFksdOGB0VPJ6uRHzKr9jojakmc9ugi1WXAAQ35V9CscgXcidTSeXVcdJeDBWSmyKTmfCLMTv74RhoJ6sLXCpIoiTsgBpVqT9bOXEUeaaqwPNhJ%2FjioQMDKQu%2BRfveoCkXTUa9eFmAjWxbX600mnk1KmvVn2c8O%2BVDySlzWeBOFXxJDpDB%2FUAig9auePqpaZyGcX8O5xlns379Uz1PiqVGqsbaG&X-Amz-Signature=b84cb6b7c2d54ed9067e0f51e5952949e64cb06b87891729b84469f25398bc43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
