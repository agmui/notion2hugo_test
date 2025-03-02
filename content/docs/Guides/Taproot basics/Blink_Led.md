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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWVOO7F%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCmHxTjQiTOevjJKvWtupJO0B7kwlts6sYnHbAsuf3B3wIhAJ2SmyIHjeHC06HIW8dtaKWtrnS0nl9J4P61PtoQKOPIKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzpXMrTrzOskAJ2qwq3AM5jVz1PM2m9n6yxK9J0k9loxrJmoFHsc8OnbX2WhIw6J%2B34vLwVf8cC4CNO%2BJACu%2FHDWw7rt9Vzsm3697p0LbqdC4wI8sC81A87ll0Kh0YgS%2FPA%2FiV3ona36TIn%2FJe%2BqUe%2Bf4j%2FFEm0w3Nga3u0%2F5BU7IB%2BQOCBv5wSku4CnRUUEQhuGOmqM%2BtLKmSVeVO4%2Bj3A8BbSkVpwdQ1AFMAoSYLYuOk9FzOYnovKkV48IKCqjX8NucpHDnupJKYGipXnXCX70Mmexa6v5SFJMRuUzNtwD2%2BcW7h%2Fz4F6CORVOgrLd52oW83RAfFCyRJrUfILifj5L31GmW9DaqhYq3019%2ByR%2FT60Q%2FHrFANXXivDWpNzTjR%2BX%2BCM9fwaPk5Cva%2FDsC%2FRPIynYTVT3AZurnkd9fCvUmBk44qsGOgoxZ3cSks8lmszBwYLVT3WJehcAaKtnfRvO2JoU%2BABonj4IWeV2wmhW2FD6%2FVZVITrtI%2BN5lhVesDV9kYUffHtqn3FEnZbKz7MT23qs%2FRtpxpN%2BzwXwF0PY%2FS6ERuZkYr0SxI1ffCiNIk04knT7WNQRfmRODlxYqE3iKDBQgw2SC0xmQYi%2BYZtoAPLHi0BWY1K8CCDWWSl9Bce123k7SGsFke7zDi9o6%2BBjqkAUnlpxsxFforq0HrJDVf9041M8DduiJgZiaY919MY7quOlYJ8TsQ5dsbgS6QQcM%2FMaUIT0xAV9Q0QwwerKkFGVZDYHYGGOB99DrffSNjraePVkUKdn%2Bc0UsjiZRgfmTUgfh4j8MfRIwPnI6h0zdkIVpAoh7Duyq0wv%2Fl3vEfY5CDyEy8LgVfnLRt2Ji8F%2FHvBJxeBDQYY0GIg7dQfbduVk3sPVP%2F&X-Amz-Signature=825b8dcee487a08c73704620676cc07b065e0ac072fc95c963b19cd6b2df8609&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWCQTQIO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDiYZYN0MwK10R%2FfrYjo%2BLVLFYColFn4tK07uTX0Wz56QIhAIXXSB0vVuxf9spEXz%2FISpcDkEXYX4Ozqeuvk6OPrCaqKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXh6tMKa89lZSTHz4q3AMbq34kOYBdIQG1S%2FPY1E0%2B91yeV8gYHT3%2FNnEmKXP7Qu62GxKQs6DfxW9667xwtVY9OrtAdgbRrI5xb9nxkVcmOAI45smHoX94JAW1R%2BfAYhpkQ2juk7BCCOt%2Fqa%2BqH08OVVy5WhsPT0MnUlqoVnMKAESgwFzDGiAFcrMY0CJ319qBFFSm%2F0tdAzz6ymcq8pKCWCETaBUzOPyqP9DsFzDxWlEJmOcAEybqMLyAjruRUosevGXq2KWj0cnEEsEqnvXQR5oC4exiI9PoKsyKHl930GrrGM74jsFxTO7Wwo%2BA2aTi6WMRHYMp1F9TMwBJuFPNYhgqNSCxPyde6cePLNpAAwOeHJW%2BvypjseMV25cV9UP5%2FZKrl77ONb%2B0%2F46hMo46%2B5MxywCLRRXJ%2BLd8JEC3J7T3%2B07QnIOMtxrLRswFpAiUNv9InUHIlQtYQcGA68xn6Si84MlrERaFF3kIFYjGna8Vlf%2Bm8cfeX40AENs0gn9ANkg1zjAhyptBEvVoEhqHdYdth7vnyp%2BT9%2FGXZw07eEa2%2Bz2jwlkzPDuop2K1fu7b4LEu1se%2BWF3%2BhXcuzVgf0hquBALnWqNp2X2cAiopQbTLDg%2BSdUBIAI8S2XCuLNnr%2Fpm9QdQ1kfcQnzDH9o6%2BBjqkAbCZ%2F755v3a1Ymkk%2B%2FrVJOA4bMZWwiCWB9BsWxH%2BOz1U93Yks9LDzxl4CfrwdS9Mza7LQvsN%2BB7MI7WxgxkKk%2B5DWekUcqzhEdaWthPP%2B0bSBsUU%2Bm%2BlZPFslJKKtvKZmgv36dZWKtd5ileFOxmFw42CM3dy683kmGE%2Bv6OrBkLu2Vr0VxCt2OI2aqofZZevj7PL33badI0sTyVDRAODkdWDGoqD&X-Amz-Signature=8e23c4be6cbf4d72d5de6d7fd183d534e1d5198f9bca13a2643f8c8f14575f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
