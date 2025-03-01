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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667TSCDAY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD2IVJ5tNYz4QiFpUsFhf0hhcyRMde5ghigjGnkampNnQIhAJzy7vAWmjr8xnD%2Fj%2BRXoRmIwtz%2BbgfhFXGjRf%2FBFA6NKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDxwsPBvWt%2BBxPKD8q3AMJS5jSfTqZymfjcTrADgKCqNRAjWFQjImA8wKAIlVYzBFrGZetBPEkyYjFJtbXRJ7ef6hOEk%2FHH8Zd5Gp34PFIn1MauWk4tBUHJ68hwEUdPY4EkMbEwXmmFCgrA9dcYjM1uxrgVRnc4E1Kcv6Oh8G9ySdaO2%2FKR9hzeJvVq6DhezTEIzQEWbo1j0DZNFvVVhsDiiQznIaZnnIce%2BAeKUMI99P6vKghVKxH23Zy%2BrX%2FO7aZMXGD8Ln2Wq82FAfX7T8QuYlFfJHTDXKQ%2BpWXA5aFH62Ri70KGnkIZSW89IDrObNnu8DDCkr%2BbL4UsVkASzz2Q%2F4INHLObvwjHOiSqPzCsAMJa4i2EIXCnxT5z%2FjXncx6PateoFNqtddvn1IvSK5Mw6MNXHknLw4K2miGrFmAG1QsQaDj8sR1fckA2pedru3bBbV5%2FR30XMeHsUzjWXvNwuOKN6kfpJOjY4YyRlOUK9BCD5Sam42583X623YnHAkH3jjMfJ44cRxDQWwyBsjjfaZaJKu%2Fn%2BW28CPfczWsMatltBi%2Bb5Mz0C%2FRnVNsm7GFcTHKwsZQvJLIBS%2F9vh7vmoWLc%2BO5Q9s5DG86DAXVJ2QFxlmN%2B5THtQYOfSHI4tf1y%2Bf%2BdXJNF21tPjCTlYy%2BBjqkAdRgycbLMmRtlv315WVx8ZAQrt24KRZfYS8xPh0jTpxO%2BhzH4CyKhG%2FRGRNiLbsnIRL0TAt4%2BbCca8h%2F77wjspMYhBePMdwG0ZfUZtSSGsBFDiLH0Mkuks0d7jZT1jDr7%2F1zS5Rc1Ln7OLgVv8VlFvglmjFnGIHUrjXfqwz21hml4VMKDIcsAlVlDEOyirVp67gCbjupUyNFiQgibeX6hQA%2FqB1v&X-Amz-Signature=204d7ece24ffeb35f7265a24583c32f6caf7633ae27f6ba40f071484aad89bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGT34VMY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFsub4lqDRRzt%2F7Pg1cU98fRI9ZyxKEYqCiZAItYiRQBAiAc6HlSV0fTgiFnZ5G22N9YhiB5WSvxTnpnuMxkSp0V8yqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRBRQeizAX9TKmXXMKtwD6d3RV3WvToNMShT2XRHarc3jWd%2F8dvOvZfq7uNKhKLx4aHEzN%2BkOmeeF1%2FlZgclXryeiMSNQYG7207esf5dpE57%2BCbYOIX65BrP1rcBMnl8nzM13BsfiZteNN3g8EyoXoUHP9ed1LEuv%2Fw5ar5wmy6B9zvabz93LOnr%2ByPq6Okwo%2BMocBWUTYeFQpccne%2FdqhR2yQrgmmAMhu0LpcbbE%2F1a0vzsjduh38co%2FGVYPDGp9gg3S6DhPbV18Soxr6ntL0ZCMnKFTeN19XHlFxD40kubdmziZpO4EJ85OBrNGL%2BMumka1sHK5GQodXE2210UEfpvvgYPBk1aUG7nRmTnKR9OwWVzakezgnUPEZPYNqSNAJ5BJ4jVqjkM8fqfF19EdnOrMExfI2Je%2FXq7o0eDL%2FYOBPfHri3MSfjVuZJgFfXVicxLWOYmstr3hw%2B4erUM5BakaJQ7B43qaeenHmOm5DoODhmIuUCpoTRP18csSX5bvlSrFIXzzj06CkCEaq6lvBgKAoIRTuaZUmnNC33i%2FwDwItk3pZ6M1mY7HB1yUBoVQ6h2rX1MOfJEEkxTyRCv9iQiUwlMMdjwT3VILrqRcFir1SRCLZZCx4pOwrg%2F7vcLQTAwkFKS4eSqNJNgwwJWMvgY6pgHD0fOOtBI3QjLf39t7%2B6QXYX3NB8XE0Wd%2FJM%2BtguFZLXnFPFV61mkU1u8yvf3VIV2ROd6jTae%2FdPg3XrBl4QRjJMLngvJ%2BmqhiUFA1S6GSgzn7x4HfvhtRDRZMas%2BNb3EKvR5lKzwywuESI1k9fyf039Cdafoy67GH4aEr9h5tTpND1GQJNqmg535aTLrgslHMCyeRZsQpIOiTjCSMPCMZqz8yKhoH&X-Amz-Signature=8bf2075fa14cf90a6246349e8195502c14c2b89ea5b15e6604e9f828e32458b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
