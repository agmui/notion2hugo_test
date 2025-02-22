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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OYRYJPR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdIa88Zd7Bobdl16FcJYZu%2BXWYfJDHXXaGIw6oUYL9WAiEA7suanfbWWXjq2R0SllvE1Jv30qzHxqIPF8n98zXkdzcqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvwbV7DpMpHMm7ByyrcAwnLXMGfCV06sbo2FvSb5vcWVwPZSGIPMyda%2BQwmHE1GawchExmS28OzSe7sH5rJ6eW5wjJNzT6rxBnB1%2B9XD5VZBKiYHNKuKECs%2FIET%2BjWORo5arLy0xMPbc9WQgn5BRlC48M9sELCXh5N%2BJRUy4UE3OuaiqbD%2FYwpDJoCBBpVIvLyArVJzgpyibIMBknFtbSqJQpNjkokpIZjY4V0vmjX3Ioxv3nKYaF6%2BCJ2lXgZVkU1aCyBVnLT4DEZcU4TBLxMoPdyqeNxTqLJkjDMMAItvptEk66mScJ%2Fs09giLU5E2hPoX4Ux%2BClgtLeErARyzRBcO34LEDKMohFkOkJRtR16zjeQw%2FyEbZtpHajXgvsP%2BvCTN%2FNm0Oy9U%2FNMVWQ9ov%2FWHQw7unRelkHY3YLknx0NDJ3ci4ZgB8fxtzT%2FQptzdoK7P8xgqmlelU%2FK26c7zIrE3O9i%2F6mSBP2z7VKIqtW0l%2BwsS4DzX1ZLr9vym8djeGik6IQ8WyDEuCd9PFK%2F%2FtlGiUrtOJSSO4fCpIrf0LR4M87iIyxEy7F2Y%2FeMKfpWuW9%2BrlYFSXEYeL4960PHS76bihsss%2F7eWIrTB%2BIV0MaJali8cRvxvncwE0117Rhluas5sOzk2rSQqTjJMJbT570GOqUBLuR1Rei%2BKIX4mG%2BX9g9IHc8VwyeEidjLD0iHHVVTsrIATDEGMgs42yisrHsvpX3Br%2FNEuXajp0syuBUls1dMntm0R7b6YXatq0r6uY4%2Fau2KBoT0ZQ57t47nZ9t6JH7JiJdDWd9bqV%2F9WDjWmGWrYpiSRknC%2Fz%2Fme%2B4600K%2FaMzdw9xfM5zZXcQ8SsqGnPWWZrujL9rkIhJYj6d76lABhHfISoPq&X-Amz-Signature=ecd73e0d36b4ca7aee2e741f3f3786e325fe71a44967e99ef13fcc4912662fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCGKGHGT%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T180835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX1YFI9%2FR%2BCrcCPwLL1AfiYTDXFmgRrPLpFwDk6yY%2BbwIhANhS4AHOqLp8O%2FUtS7zx0k%2FFZjY01RGANh%2FKFxpoJ3a3KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdGRZnD0DZE%2BWG4G4q3APDoGzu2cuE4xi0fDTn0bNHEe3VpAJA8OXyU5ohE2W7ZzwzTfg3S5OnMKCaRe09bT6UYBjXC2%2FGNFsYNVDcPQqSNlLyt4FxPGvKQuO4dkBmY%2F4fSL7VhDxsq17vpEcshxL9qyuv43o%2FUzhhZOH5nyPDWydD%2F5fXGnvQ3HRJDLPrI%2FES7O5AKZQqG458P1SN8o5lPfAzgH%2Fc6SGbjH6iC%2BQw6DVMs9CqPluVnUY9Q0S4GAlQA0kB2%2B%2BQ8D8Xoy1XWMeAVyFXxwS5Bwuow5mXmqhUXWLD8UChIG0%2Bk64JOYPz4ooH9%2F%2FKvp%2BWhasn%2FaZFmv3hH2hnYj4BR3WCa4WlimSTKgu%2FX3aJFwnY6J2O6PXNStObA5OThmYZHE%2Fd15EbUGIUcufUQPbyV6Kv5gHN3w5hAJ4sVANZPWr5BBButjdlJJMfiLvODaB9OzzNgl0tVl17ZlMGPDACAlMv%2F3YIbPuh4k4pCB36s36Gg%2BxsfsXinFNVya1%2FWD4JjQ76FF0wsPA1JTUfbpiH%2BNFjdRCoTEFM336kx3Tf2k2BsPZaM4B6Ze8pH2lOCR%2Fxz5idTWAkahRVKjKK3j5B3lPJFcVLvmmXkp0kD9Vro%2FMdJMR7y8kFmk%2BlwXqTP1UTq7TJtTCXg%2Bi9BjqkAfzknfWpbVW96pdBODeJEmg1V28egwnYVHeNJXR9omVHyaf5A5PvwFwlWUlE0eB6zk29FiB7R6%2F36FRg%2FzwgnGrnauVlbuQSWTR%2F1ZME9c15oZ8BN3r%2FYZqSJ6EjUxBmXgG%2Bq22rRftLxpmoZwjngr%2FY%2Fb7OUJn0qKIfhdutdO%2F6nD2iuVfytXQEG52sMrqsuCSe%2F0KvSRJ9HuXc0GVG5hD%2BjudE&X-Amz-Signature=99688dbf096a5d315f20c5bc94424ff68123797393a61a9cbd921200e813eb38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
