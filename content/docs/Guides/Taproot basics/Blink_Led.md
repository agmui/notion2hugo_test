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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V4XOUSL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCEjvwHfoc%2FGI8L3Ewho1kcQk2i1Xq0yXWj0WFclo%2FRZwIhAJLSXn3hZzUTYnsNdGLylFU7l8eEbr561juEBw9Ik2NKKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmebXUfX4kle2AfOsq3AO05q8TEzFpXotuX0kFHKvsvmSSrcsgxO0ulVGrtRUXkLNqCj%2BykUUduAW4SbtdnDoEk0wOQt60RkWZha3MrcJarfeG2ZKBE6kVAzduuftuzAvoaEtgBUOelBuVy6rxmyh%2F3HQP0OBkBI2TKWzFtuRFCaPchmpXJTNk%2FU0feM3FkU6pEiPw6N9NEqQxvw81CnKW7n%2FB75U2y53dZjJJhAAJPpA7ywrd56FzshWNN2cpTDoGKJEq24b%2FcgIsERBgW6Jv0oku0XU7mVktXsbGecXYlfdrHq%2BczlE3xURPX1LGcKMtIa0d%2F4olwcFnXVgl0EW1Nm2t52DoTZ1P9bWJ5kTP669LcXm55HXz6H923V6FfwrNEELfszdcSEa6QT182nl40bs%2FW7ZXcQz3iHp56Uv46MdtHbfC02eCbmUjAlUdqlZjTJBjds60sPheujmM8UWJCwkGbn5nh7CGIt7o7Dh6UIQkcHX%2FG3ACDLt%2BLOMgZicM0FQDlNDIdeQnoAxt6jqlWBbzQY1kS%2B%2F%2B0NVyadwhTk2LibaFTGw5FyD1TSd6OwArA1OB%2F0O7gyD6RjiHJZ1FRDQ%2Bmm0y9yk8hh8acXFfMk3yPBoOKE6UQ2swTYvIdkXjmcrhsrbTifJF6zC%2Fr9u%2FBjqkAYm%2FblXKZZcMuQaUesRzA%2BrurdKkxrwHCE3wMBVrzGFvJejGD%2BprhnOfHwXmhfVwAbG84dNpA0vLQ99L5te1cGhP3srLSoQ25uLsyFG3cN2usRkoGgqHTgwn0hOroxaH5Cn0PFHzd5MoAOWGHqw6cfIMa629VUn8z024dAv6YH%2FoSYpSfWAG%2B30QT6Es4jvnILy%2BxLPrSACLxoUt0AdxYjDoBLlK&X-Amz-Signature=d6f7bf8b743be2ba839fc2a709a7b3fdc7ebdc7310ff70c479b2506b77992816&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOENULXO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDFyYY6gnNvecLW9hhgP2wLRXBOVQhuhKsq37%2Bx5tNfvgIhANrzzQR4ZNXTZBRDWbsbu5ANEvrWJTIlDPVupOnV58NaKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMrD4IVfS%2F7M6DyuIq3AMO5omYUrqLOgOOh9jX3%2FPAROqu%2FbEuGhZzSi%2FX87oIKzo3SQ8fIIHw1uOepHaKFmOlCREGEttV4er81ZWeycXAQzs3edGJZmF8RcLutc2MIrfgsU2LDcWHlVXt%2FueONQxCHHCFgJ%2BLnCAr%2F661F4nJiQPjLWlZ4%2BDgyZAsfRasFtXsGBUQ7Q9dIOKkbRD4C0G0xwulvHHsMmyRUtpYuSsW80mGtpJ6aRd0C%2B39MrKhgXjq20lAGcRr5Z1ebmClBg5oeZ%2FBAsGvtdKwV0UzXp8w1MI3Ft25J4u1xweIv%2F3BrrQG9VMHfC1UTT%2BkdJaiwhE72pV9w2CyCSTcgONoMXpxVRr1MfA3jsRNhwpBaPGT0SC9D3Hrm8ks3u4M8ODD1%2BzuBpq%2BTBHhKBUPHuWvSfQ3wruIAdr1zV23KdxnNty9Bkr5Jc%2BldWw0Fic3yVLNyo0CcH4tJI0kxNYiq5V284kouE%2F%2B9ONSqcpYi9%2FxvjOniSiAeOPIpx3pVvpqVrH1tt1qXCX2nQ0sq3MhCRS0zAiv1mNqL4jYGvbuph0rRBmCgMut4O8gi1tPU2Uh7%2FRvMHSrlGSFo0qXYbUMMBD67MfriSvJX9UmJtHnHK4c7YzMd12VrVsT%2Fne4YD7UZzCTr9u%2FBjqkASBCnRa3DOp1vbUei6V%2BVFE2%2FOGJMdpQiNUyM23eKyfsTX5LsrauSwXOjWbqLdSZousXvKXYpITML%2F1nF6ZL3bOlABF5bPMFLzO%2BJxpFamWujjA1ZzijQXJhVA0%2BDRkqs5w7zUD91jtq89VvIvVuYFaT81LSoNDmDHeXfYdnk4oodgVpY5%2B2x4pU4IPIoddrAC1GUtr7En8P3sVLvRVw4Dlvt8k9&X-Amz-Signature=f6f8fd9eb645c4e72b7706988081ee047c1782f592db390d9c4ffcd1b0c51d02&X-Amz-SignedHeaders=host&x-id=GetObject)

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
