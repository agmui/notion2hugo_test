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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KBSWXPB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIHLRU%2FBCi7595AgNcaxk7euMzT5tOsi4c0fNJZNs7bcEAiBxkZuZPT1A2S9EvgEna6TqPt1y7dh08d%2BxAnTreecI5yqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaFLRNIAn8OPzbD%2F7KtwDZRPANllNJ5BEPaBkW0Fh4dgK1UxLXak%2BhnQXlt94tDDqFm0H8sY%2FZS48Q1wGtLXb8zySElk3DSgr8kfU4oxa8Bi4mfQRQ9d0Noalo3HXcOBgVA%2BuIt%2Bkg5%2B8j7yf6pY5cbS3pKcJayLiqh3CQSn%2Bnp7KmE6Mbi2DSh3J%2FrfRzlimTvlV896Tyr%2BWCmmhcZEopGnRHqZNRSu9TQwhgek6Z57GLpnqfBXkAZvMgoXJahyqwkvK2f8BmJcLptqzvnkH5C0jqvIjy%2BlS%2Fr6FC%2B7gTGlgnktoK40s53zQu63QZXPs5QmiCqpzli2BY2F29HErShMVg0SmORK1f%2BRMFaWV3K4KGZmpMjfvpkf1T1h24z3o1%2Fl%2FpllITUs7KRebTWbu8Ky%2FxjhXT7oR4SBVevlpm9FRGQTMoi0hWXw7MQBHXRmBukgLVbz8cx8lS92w4%2BZP2LPXTxuZtcxz%2BKeZeIVrTkC4yAVAe465id%2BowRdNydklkvxdP1h0zyG%2Ft18G4T%2BSROtpkFkD4QRGIsCIBnJfjmP3YXb0dJl2Nu1AX%2BvLnUZsycl%2FfJgy0GqYdzjhwsz5IfTCIikOirbvnYRlAt8olj2lvsq16ZnjwnqI%2FOY%2BPYdHrjELal%2BTsmjAK8swwOXZvwY6pgGQzTZ5i2IEF7wpwHaq9U6VqS8RkgQCrK9VrdywhV2l6%2BuTOvIpO8%2FNByBG9zIMPQI20DTDkGhauX5s8hBMQ2%2FxMbzeVy2wKbneXQjuBLmCOlsLilonljPv2RgW3E0dpyZ0MMZGKBlQUUtbcFT9pWEixJK0rVfBSBdHBnM6ZMY282jjo%2FiGziMfia6rNtoVKbaKjoLk0PrGWCE0dQa5tmEcXFUJUQCO&X-Amz-Signature=1f4c9c419cbafc79821dfa33f447da80331896c0b716bac20ef352a96f105222&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOVEW2I%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCQKnrbGvTGdNZnJq4bsqriLitylxFsFklRkHiGfvcvSwIgHDgMp1I56jwLn9wF%2BU1tqnPQYPABW8IgTDv9cLAVKuEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBnd1AnFABMuggSeSrcAwSYDgXe28E0GVRyQc41Ah4uZ34CtG0ku4Bn3PqqZKmrRMe4HIEkOrDmd3fPFGIz9UsmvI%2BzJJGLJik8RhzyJtisKdm8mag9Zct2wySJ2Ciwb6oR09Hu7ypZ%2FBbE%2FwUt6vvqXoP9AiYVq7tCMuk3V6gJPclBHyiqNZhA82M3WrAXtJP6iVKsC2NLNCF5oLb9ik1%2B%2FfGulHbQ9C%2FezO7c2MFzU7zLIRgnKrJ%2Bd0G9tGZOFS%2FA61PQnoy2%2Fh2vAjy%2FMb0cp0BmeTqvJ4P2aFkX%2Bat1JxvODQMI7T3bZ2oUHTgI4RFT%2BJ%2F%2Fxcr057gMXlsay8%2FICgZJJhoII0Vj1u7z7Xc9%2Bw%2F%2FarRewiGEffIKSlJNylcEcZB%2FTd8HRIpe2Qo9UQjAmNgTiSbWj9ne0C7rjHVPVmq0PBjCOqh8D28IFrERNv1Vpgo%2BLSCowSRi5R%2F4mkX38OSHAfbi%2BBjHSRsdILoHW5P58%2BOTIL%2Bln%2BLrEocFX7aUfWgUlwaxL7ydGEQw7ne3jacbgLyuISwF15DYZ%2F1KNnUjGHD%2BtheoeUDAhFd1oX6EqLRN9TVniXxAWTpVkzelj7ntx4Ld9DMeInN22HUu%2Bq4DNm%2FPRn7fpTx4dZhZ0p0xtHBj6DqPs0BeMMvk2b8GOqUBhgaK4ogIzbbtqYoureLPdxBS9C%2F77tkyEA2hvDLjWJwzktmYpPjYXUJZPbpMqZcDS1wYaZ1f8m1mi5Peph6%2FUiFXVH9R7m8muSFr1aJlZBLzgpR3pWxW7d%2BUthVWjBKx%2BGgeGUJ4FHderBfhe9lAx7bCrT5lSCP5CeLjlMK%2FsgEpGK1utqh4EsyF9OvEzUDh1F5KJXfosAcC91m6qW%2B5cwkKw%2BkN&X-Amz-Signature=42977b35dc4be464fc83c3a66ad8efc919a03811245f357edbb20664b0030456&X-Amz-SignedHeaders=host&x-id=GetObject)

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
