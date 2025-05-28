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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFY7TA3B%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYvlyxm%2FPlFS4wEkMe0xpUXIS2eC618QnOWNqcXmiwywIhAKXWaPu9Av41q%2F9UvU0UWCjsyR9ROyhcBOz6RWbxCYdxKv8DCG8QABoMNjM3NDIzMTgzODA1IgwRuCMPDmH%2FGTj4X1Eq3AMMmy0cTEB9y38jPZoKfKaFdGJWgw8A8CQsO1Ncm7jjG8L%2FBRciuJXSO3dKxLo6bkmxW1oxW3DV%2B4cCcAsIWJfErPqZEBUFnHCvygcoa5%2BrClMYUweOZSgr%2Fr4APl7XMPBo41MkNNeqLisymMrxbd0meO0leqTZQPX%2FTK80cIK9wc8MQuI2EY9C0c1kzE9n8DlQruUb4%2FLnXCUA6OXYiJ%2B22bvR5OMruJD8GAHflZH7s7u7EIwISIy5AVbauR6zF5jiq4nWszPCDn926Nccs1UWaXLj0hd2skMdrXri3jxIGUUxWarYaG7B73IfFGTJ4c6HiPeWtJP9PlHPfM1OD18zT6QnQKRL%2F7zIU7q5fVC6KNnoOykx634XmTSWMoyzdyVqiyxA%2BZDtgK%2FSdSxOt4cwdDFdDrrut0OCchtqzWDCdNRz5NDw2Q0vd2f4yXy%2BAyDqgzh5E0RGAAh4XQVkUbcNR0vL8ouy835rK7SVDw9ARVIz%2BIhoJzhB84gr7buSK7SJNADlUtR2OHA7KeNzpnt%2FNPhGSyAtAPlzHfEZAJPO4OjX7W4hJHjbAjF2h4%2Frnl9RUJJn3HzzU%2BFmSsINweRgyjiVKY7Lewzabc33m%2FEh%2Bkr6WWOuNsQmKra4BTDcw9rBBjqkAaKaarFXulz3q9CznOA0fdOeUIRl1uCztu8Hv%2B4m3BWadao%2BaVvXjf9oGND3yHG5xkaIqvK4uz8FqWi7WKIbGIzdtcuNlFpqhy98jQk%2BM5L%2FjdCR4GGHGW8nzRBZsjymZfo3qTQl%2Bo%2FvkiTCZdYySYAIaSb5Imx0qCTunQ5EOmGsQzDvohzMAKWl4M7uuWHuJYnhDVtQgPOKvIfSZo1LFW3Nvits&X-Amz-Signature=43e4c4d55704364ea12cb3e7055d5135a0ff708245daa5810fd2fe78ea44f1db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDPVDRC6%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBkBYdwuIX994mNwDY4MjOFfEWujJpCxVQl%2FhDi2Pc8AiBwM0dz5zewSCgqd3yskp8YWJlqLn0P3fKxcU5nuMnKkyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMDn1m0CT0rxtyP35OKtwDI1kakX7OZ9Fby5YLQhStCXm2kJh4YSobVkr46fpNOJ%2BXEV8UaFmjNCvKA0xj3HcAOeBal7Hdh7WLd13v7I6UBCkE3JDZbqrGXpRSEM6%2FiJ5u7zFsR1p77FD62gNpeNIUOrb8DvISqh72saTyd72OgbFyHPMecmOse93RERbeQFy4ZAfiRRGCHtYNhCwAnKjqktcFHUhHdTr5%2BZu92mdeipIvF58%2FsiJ7n%2FvtKJSe7GzUcNxVygNNBbEK%2Bs5gk0ZO1Vq0PYg86%2FLd1oOAhuZCQk5ukFnI%2BqiKF5dPV9x7crjVU35GYLJoo%2BfGOfzfVh7lPXcbpMBCLrZIdhVTnuvxOwv6FKJeABWDLKdqVayiVKkJiAH0KE08KREKklA%2FiSiKozrEQsJ2CdGCsxrdBkKoGfrsIpajB4kuHoFzLNVj9OVsaiyg1Xsddk69DdKC0bBmqfOGUWJ0owVhBvkv2gQc4kd2JwUA8Z8urnj9P4xmSmyG7G9mWAJJdABKSF0XBc1h0RElEK1LUYWXIf43yx2gZdibPUu6LUdXR1geUpmhDjXimAFMqrgBc5GX7pJqZA8jVOo%2FlMrm85yCznmpo3X0XuP84gI43DNAtv8GF1Fmbx4WXOc9mbK6xG%2FAA%2BMwzMTawQY6pgGRh%2FYJvzmHAXbUorN1qDN%2BuG%2FATMHkOCgG5YnnqCmD%2FPDmEzIRbVr7oHb8jWHchIB8GY82gQVbgTfwlGJg%2B3kSQxWDyccCSixJQdPZQtdadGuS7Y%2BmdQaD55FInweunB3sGaCCZO9esPcqpL8%2FOToDVZCfiBq6dTTawnTLGC54zkh5bW3La88qc25hrMLkdCwCGzGY3pbumBCYaDiIY4KkVx9jQDbp&X-Amz-Signature=d2e21a974248c169c09caaa9d3be1a74c2fe3eb1ec296dbf283e569f7f2cbdd2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
