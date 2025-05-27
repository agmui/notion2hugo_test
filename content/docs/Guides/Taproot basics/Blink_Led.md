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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBDBBJU%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZPr0eRN9DkouMiiZYXwC3TOlvNV37A%2BXuPRzJGh4b%2BQIhAMkcCGnrd%2FUMVQyODj1Zrl6c%2BmZ3b2p6YJ9OuCnd340xKv8DCGQQABoMNjM3NDIzMTgzODA1IgwxY55pn5iDO71fSSYq3ANsUgdMbaFzt%2BwlqlSGcyG81hxIko7dQZm1etXqJ5K4TTUE4E4YxPu%2FsxzV1gBj%2F34UPdhEajV4DbUrCu7yi%2BDBxv7o0VPmTh86J%2FxKAbgoezQCKTu9qSPcDFpFS95K9GVCQhD3KAqKb%2B6pKAFuh9hR9L8TPU%2BCy4wP55apQyHBcYjNj%2FtLBJrPTWF1RooO6zHtRNL6RR2v9t9ZJCGlnvycWpReZohTCT%2F6LOfwS%2BvSHowx4LmMCBjG77%2F3K8DI1o9F9SVOMkdZWPfL4Ad0BuqBw%2FOQiQFcB%2F2UroT%2FaTWdDgWNojv7yTzfp28t7zGOKdB8p7t7a8F1516asAn9koAGdDfHCd%2Fk6MvPeyA38Y2%2BoFJM57YKIiLEyTfXSfylkwaogz%2B6fQ0JPRt8omBPJ3e4vqctJm8IlcvXsuqVOquJW%2BUObtn3WXXGdrsoIbjTVAfUvMo7Uccbmxwp3i9ikCjCB7O0HgakKdXtWeBuuHIj6mRKayb1JmZwElQs7A%2BzDKiefg8eQJy9JCP0IiPpH2YKmY6%2BeZnUKdqxXB269nZY%2FNzkv6INLSN8UenXwhMxcEsxN1NAK1R%2BOm6OVd0vGcl6YqAN4oDNrdHuV8aZ3r%2BL2Kg2UyxdluiSHpO%2FajCDl9jBBjqkAX1%2FopiM8bHHaYocRyvblgmRViMCrAV7xqaCHRILdqjKnnXaTgHZzSdrE9s4%2FG9Ko7FC%2FJbB3eSmeuclGsytmoQoli018gbZuMJ93Tgp908t1eQhe4GWOqWr35vKiweSXIi93bUMMayfR0cvh2IlXbmY%2FoF0%2FghfNZBYDOkIA8Yso6xhBvunETQsPOlWYd80Xks2MRR%2B1FIUEOapT1jS4TFPXYO9&X-Amz-Signature=9adfe50dd4316c37d5280aad55ece8e6521c87d68e2a71b1a8853fae91f5b05b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXZM4R4%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPeu9ZBojauOGpQXizQF6vL21eie7uOZ9YEj%2Bh11jTVAiAWIQ%2BmGGW8weG%2BwP1UZo4uV%2ButElP%2Bim%2B4WgqOxkavSyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMS4epCC8wEXYjvDiqKtwD5tGHtnRo49vJD7sV10Y6JvZvqvFGpLMHlWxhA9P26vwim1WCpvfhWUIJJc23X2f%2FJtjKM5soDVkKhj4aVyPv70VXu5fycKClaK8%2B5C6niQsDatF1LYrdpGa7VipgJQe9m5MP2varuH1944ychNuLeVU43nmkrRUGq8jrDXSPa%2FknfWJsKz3hQirwTLp5zBeQM%2F13FcvqhEkaKxwSJFnrgIgQpppDFxkuAUW20BEyLGbvasQgv0ol5M4XOz%2FNf0S%2FCpzTFzpx6dtYMI3OI4nP%2FpR6poTaxiVGXJ%2Fp2NnEfFKpTrI9umoCYdPFyinEPKkaCm9vc98ij47gnFmwsdTXcPsOu2fvjx5vMs6OB%2FY9Rwv1Xy34RZQwV8H%2B9yiLHhgAzLNGuBLWkbVyCZwFhEnYw9ZS36M1F52lr5vizNb1mE4rK%2FA9eHF5SBu55G15wKl5QxpJu2vjdBke2RuSMe2KcSPxYhgKWWYD8XVxs%2FzwFN7%2BapowRJrqzHZMZVRAIXCzoscBPCqljzMfphCZWBMyest%2BwEpqsH1yVYIhjoYISP89GQwMUbgNiLybfyBpFT4jys43A%2FruBHih4IjFF2SkfqRN8KF6QvXjI1CMoJhnGa32q40JPEsWwqxXz2swvJbYwQY6pgGy4Jiru4gi9hx2%2BkClKSah%2BiGBmO9%2FU5dpnb2eTZ3cOYCtOfwKQQlXwtzFX8bDPBLqx7iOO6E5p3An%2BN3GfTsTRyKTVSPbxqJEIA0nf180bd68V2iEuua7MGIdMYuGimt9r%2FHSRF8ylJMJZplZFerFAdiu%2BVKUhg2pyTGf2LDHGUsnJIcv6n0cD%2BiBBbPQvo6VxyguM3e88vyULIEwkA9ywf1pQDl2&X-Amz-Signature=dc2510e4d26f7cbd7b1e457113169aaf838a60f592f13638be6c8eafc11f89a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
