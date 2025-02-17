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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R26X3RYN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCSiH8iDBk7FxFjiEKQ%2FS202LZTTocwuVR%2FV%2FlNKb8ZUAIhAOrNj7s%2FPswsOpt5Rz9A%2FaFr1LqMYzW74C2%2BbX38nVYWKv8DCH0QABoMNjM3NDIzMTgzODA1IgyxapvHXWCWV4DsWbUq3ANJW%2FJ6%2FdiACtnBVJyipeTjvp2182TcSYU1kJYuH5hkK02vOYmRpr%2B%2FKDIHAwVCqPbLYQSmpNNMxkry18jSvoZfJRQ3XPnnVlmuy88xm6IKo3h%2B6LgQ2TMSMMiInQqMKXmL5QP1fJbgO32Qf93wAo5bh137WQrn2S1ErDCZUL7DGWwUf3E5Eq7v4OmMFZBNv7oKwF0fVfPV92uo4PSyQZb5AWPqe%2BAmZ5fWBhRaYnDINsaNM8%2BzMr%2BQBI2hdUSZm2gN3GX%2BgG3yam1G8HGU5WU6nELGjxR2ksBdRk80aM1LPOcm9B01RzfThe8DRjyWMWz7WXyw10WOkTSo6H5RGsbun36ek34OZbg%2B7JKZWFuOSbSs19ubqO8%2FI4XKD9JRYb8D3C2JcMwcwVhhhCE8bBYlopiZWYkeLSsgJVmkWhN334EPLhgdG1y%2BywdszQ0%2FiAhW0W7L4ueZIaPaa9DY6rV7OTnpfFvs4hb0fz0xtGfIxcPwO53LuuBQjAwLGKg0l3BI0OK8orcAGj%2Fsp1L3zQsLbPKF9CJHMNYK%2FdiHjBxmyr8Ajltnp8yLTutC2O%2B0xklQc2MuumWK%2Fyl8S1MAS%2FOhjz9oDxjPZbDiRBbN43OQyM8hsvpqiSBfhuuMYjChps69BjqkAXxcFVS6EtTd%2B1rCAmFiX3yPUH1MUHxXRbUutbKzppiS%2BdzOiuh6OofXvyCJUjdVVsathL6RlFT2xTVSgxuS3UxA5FKzIIJIGOI3gohZFq9cl6askVrtHRbsGSXJCqOvxMOwp%2BbNacTnobsLm5DOR%2BNeydM5CK7%2Fqax7oGq9xK6eQIhTU%2F%2FcnHWyaCYql9ZMcn421PQi%2BGfqxYYUUkaMQbwbRpw9&X-Amz-Signature=92aea96ccd5f0062c888543d66b57d743da53fb6911d3d43845d928386129c48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KV7PYV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIG6I%2FLoPZdYbsZiRUVs1u2%2FIQbzAtlhx0Y%2FADFELQdF4AiBKMP6Xr6Moqmg%2BMq1m0aec70CC1Vvh7SCwvEpjMMbjGCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMiFKK8hkfkNjudNfeKtwDnPBeYZ9Lwr%2F%2FZAAiodVl8yWVQcdK7gI8mTFB9aXGmn%2BaS3uik9hcwzjBMMPBEmUQc7MD6UpnkzUG4xrGcq3khP0JXzyAxHIdFsxv19MM9poZJVOemCDZFVgEsh977mXqdxMOr4kU%2FjqREt%2FrH9O1w3%2Fc%2F4HeeFyei8UW5qk8hL0iyJIw3DpqJmj2F%2FhVKFRhN9MqPshgDY7AE2%2Fx9MyokGfOJjXyy4bEu%2FFANllMR6YLoIAgfeXJnyMrd3qxbkxLzU5gIh7pPbZpF5h7%2BRldMzrr4bHSA7bbUJmArTOHDtbr7HNRnduShM3Ij0kK5kOklKyufnfBgN2%2BQJyYFp1y5s3kgK3qPKqHZlPGnmHqWByCNsSgLMuubOsH2AP0G2Q2OyEmIdVlGlBr66bw3ph14fQ7HIQzPZw5HeJAahjpQOCjnZD1TeMbql0DKMWNAK1iYf80BHF6bju3ki8FdCHSwm%2BUOYNZObsUZxVRCdHiMeNmW1DpfbF6pdGTovVBuDjvVgI%2BqiieRmDRJS6kJPNuyTlfLfQrK4o4sPRIcXNDz8vUw%2F46aiwBWLxck0UYOfkS5Zp71G%2FUW6uYtSao%2BbnSlTnV9UmQtl2dmvGfRI2RphDMhwHIS63JSF8Ltj4wy6bOvQY6pgFN1KhqeZwfvWTh4DVoPGrF9rv6W3ZA1JZNb6jn%2B74ShY9WR8SJWrZLB0wBkp5UYKC7m%2FjX6emdY6pRMfU8bPmsV2kHMp3%2FbLiaR93Z%2F97FikH53EtSZcn%2F3d0fBLRgGYY11C6I3iOP%2Fval3x9xDfuuE9j36xLtCscoc7m9XTUyM66wmNc%2BuHKKyzy4Y5%2BwwtEh39UU5BTBZw6HLKckTsFVVLMAkvUb&X-Amz-Signature=7b342ad06502c29a61c58e2c1712ca6ae3d1161690c7a0ee9df61b2977dd8151&X-Amz-SignedHeaders=host&x-id=GetObject)

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
