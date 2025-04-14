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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXPIEB7Z%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMj5xWzIWCEOw7DNKsr7tcVW%2BlioW0FXk6YynUmk8TWAiAEfKsS%2BgOtTjofWi2Xj6cVdzIAG2Dv%2BvPmkrNR%2BNE61Cr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIME8LuKfdCFUiHuT03KtwDkWeA8HHMG9evok%2BnXU4LRXLcIUtwGFnmZhtLADp%2FEFeq7x2M0ztrhKvMzBg61RLwmN%2BK7qoHbG1UmKwncKub7F0b77HAbNlrYLP9EgEGwjfTjDyRyepYhrJX1P46qNQmhFkN8iZeGCZnyCZ6tSGZ6jslShNxejFrmF1Iuoin7Xvb69B8z45g%2FZhR2Ydl0cLyR5ybbH5LE%2Bt6LkhUJpfMrJWbxtMZYB7fUGE2Sh9vFzobCdph0qK1CF6y6lxxN2%2BgFUMb4uPiSrOF2Nvd%2Bg7Ql9JQnRHDS5gIb%2FDzzdDqSzqB2Y%2FkkPwSyj%2BGUIp5aW%2Bil3QGXUdVgarqgMbo0EGMUGCte30Ru3dM9nTs9BDgDG%2BxdmxPIlUN3zt2MOXHusjQc%2FMbRtLY9ZyjrUeWg%2F6m4IPXMGmOtz9jz3mgC6xy0QYfIss%2Fq7maLFwWLSmBbtamyhmg4VEtgQk6o6Y6d3Y3I%2BlcUSPWsq5PKOtiBmoX7W4zdk5d9VO9wn1hoaPTxvp0Uuf18EZGMuW%2B%2FFsta0%2FutXof4%2F7hX9EZ1vMS47iOIXMZAsPxtWIWpybWJ%2BdlWQ0xD%2FXQl5qUvNjxyfZKl8mvS43EnzZmfQe9mYiFQiZoGA8cXNRq8TFpqykxYWowxqj0vwY6pgHh0CfjjfKO9tsnDerqtDVP%2BxoiJgyrIlzC3H9LHeXaBah3BRTWM2vrTBImmdR6OrLQto4W8Axfz%2BqiIiQMzu3DRdGveHMuDhOoLPb%2FjQpEFrGP6DAyzcUjgxhM4JA05TxnqAKDHYqv2cZIX4GOUeojecQYdLMAj2vnELCpQO9Id7MTvqjVZ%2Fc3UnbBvFVz%2FhNuRYPQTyjMvE9XjNLVLLH5n6PCes8J&X-Amz-Signature=ddaa709417aa65af2b9521a967a4b775818d6e11abe9d057e23eb846d3e95e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWVLJT7%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B9HIlvmZO9urIoYILXm0cQZFwIX4YvQkBSDdZ9vGGkwIgeCM%2B5idpDyDnfPtni7GPtRHlaedRgyu3zSbjD7Aag1Uq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJpjyI%2FB32AFPK638SrcA3oo8JZvid15WJid2VnQBj%2FZGznq8Mn3OFgsawXUsxHMLnUyt1y8snrapk6%2BNfyD2sZVY2TZ2Eo1UL%2FcMZUclpu7Z5nYbT2osDgredQSFn60NlOtN3pH5XpR%2FyH9uCKo4J7BIJ%2BDJjs3FAXFNtftcbcKuo6UgldHKFQuPwzm6lI6wxgfrPjGg16Yte3WwfvzdPrHD82BaXRxf5n7uG9Kvtyg7fe1JOgt27PFgJZCh7mLzUKGRBw6InlYs%2B68U65W%2BtD5kdoNDHoLjavExvnzqZH8%2B91%2Bs54fd%2FzIoQHNKAy%2Bq%2FE9mMDd7erLzNQL5dF7mMA8Tb0kpSYELfV1e%2FM7ciQuvmoQbi%2BsG4nUnUz0%2FhuxpyRbPZsuV975UoAE2kxs%2FjwNyn%2FGEYu2rRgq%2FY4rMUVyEPwBUsVcrN%2BTXMRmCRvepxyhnSU%2FVIH8KN02L5L2qStZLgsjkYfdyLMOeJ3amSKm8n72v0IHhIljwD%2FX8g7Wh3X5g2M0iKY3kWOgaLMOV6ghlPYx8HzuANMDfyN3mNQ3icLFQuZpkD4T1JuPbmksK9mUrWJltvFPfd%2FFPrSWBw6Xh7alzSKnreiHasxvG165q1ULrXe0sSMhYOQ97WVMQhHLd%2BatfdeP3umRMJeo9L8GOqUBEmQqTbQjxiAtrVqzNuEfRYwJRiq1tCT%2Bf%2FL7guKmFh9fZh1JsA9hEpjqD8JPGjhQxcbOl02hJN2f%2F%2B%2BBrfaeubKbuBnY%2BiqSDueNpxFVvfmHLKATh0bFbOYOEHBTVOs%2BZXWI%2B1NusTgQMXOdYqQ1%2BZOqp6ngLqt%2BrmXd5AjNah1wr4plGgQiPTuTmJ%2Bn4yglDRw8fyywf4AEDTeI54MKbH73%2BDy6&X-Amz-Signature=73e9f12128380d9b49d214cae5c975a211b8fdedbc728fef7a44b7833e3229cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
