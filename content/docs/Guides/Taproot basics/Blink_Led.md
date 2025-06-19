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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NS4ZM6Z%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BJSBupF9brT8WPcNPVrcO2gsjYJy%2Fh1v1z%2BS3QlMxQgIhANoZvGOpM%2FoCeEzS1QVo4fQZ2mg9dDCJzwsLVsiijDKoKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy00HJS0NCLNSgMgccq3AOS%2FWuVSH2R%2BpeF%2BVcoTRHl%2B0%2FEooUENdD9BazloqpcSGlQFJtFud3l2lHAwsr%2FTGzAvaE2g8w3yY10109PfquUr6ydxWqN1lyWRTWRz8QdFV6o10vD1CdkE097BtJ20yJ8vw53ouIjZyyxeWFLcZXAWPG5g6YiTGf8hXpWGhOvZ6Xl9Is7kBr6zQlLNjB0iul6ji7K%2Bwfbnd1jarOss%2B9W4pjsw4PxL9Op7W27SFixs6XH%2FOfo2bQrTTQObUaiMB5d2HKsaNqTWE1yKNjpyyD31V80K74jQJuT89ilU2yrnvH3CYjJLeqAu%2BO9oIf6uB0oCVS%2FtgVJcws6eI8XO%2BwrHMm2MqPByoi4H6Kro%2BaGMBDWzlKHj%2BwM9wQtYK%2FK44VYNd1YL6UD7icUHL137b%2Fld7NsKwHYH623II%2BLFH1ysmrc0tLBuTtc3RvSB%2BJQ5lX0dx%2Fbz%2B916Gs%2Fei2IWVTIkhf7KKxooBbQWWi5A5QF%2FFtkHbht62z8kp6k%2FpqtTklEiiFSpeub%2FypQRJInBU6J0WX6C3B3q8dRnJNJpkpZlhmuPSJMOlo5JldjEulqkHVIqDFAp6f25ceXvE6en%2FNwBJ5qSBAVxLAdzeqoHJt%2BAi1qNhrEjmdmCx8V9jCCidDCBjqkAUlCQxb%2BKhPoNKjB0xnpjZQty36fTAUQsh92sONc0z2iBhGydP39xT2lNVWhMszIsFQRBE5GlKM6gmEfd%2FBtsc6S5bnS6N45wNlhUJDFY9w5Z1Ol1oE2QJd7cb%2Bzlrf%2BfY8KbmJGFfLlpN8D3KGrEWqBQor1m%2FWOXi9jTqY2Bn9pBnuOnT%2BFlOlaf5v1En7t3vufJPIY8cUZXOOHgcPA9XtpfPhn&X-Amz-Signature=75b8cc33b4dfc381b32e63e8b3667350b282f222ca8e968fd20ed988672822d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOCY7K27%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T132428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVOgrPO%2F3kQJ8uQ7kjHIb8SxtZVJZgeM6SC8V5goqmUwIhAL0H4QthzuQ56wH16ZfwtdpGTtKkjqyjadmaxFzrrbr5KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUI4e6vaHxLDiJApsq3AN90YbD9wxx5mKUW1Lyg9N7KDWy0EXhSkUdVfox%2BN9hLQQegl6WhsOB%2BRNpDlAPvJOWg%2BAJFNWYz1FTCegEbRG8ui%2B2gsmOECmKFN5w1EJ322ZiUJijLp79Kkt6Ae4azRFKg%2BursRT%2BRT%2F8y4JN2dMZfh9CkVVHtR4%2FyHfPcjBWLn5ecCbXoDiuIRwm2oV7Hv3L%2BvqEtNazd1scTnAkVkc8L87s%2FQwJ9G34xjpr%2FWSoGaRIUngVbeiTEgobs8j0%2BWgkElpUPK4CjMAC5zWBfaBSvhETdch%2F4DWutkKK%2BhZg8NcXFTP5fyfE4TPd0vQvCxf4TazlY83QX5qM2i%2FcjcxZrx%2FvZmDsWVkLte0ypJsqRJ8BFCKqNhVMjgc7OqpIohb%2F4VlIonjQh9EktfZfVOKPPVVS%2BGwDesKwLZEuAAFSU%2BYMf%2F63zO3jFwrKk%2FUgNgV8Yk9bQT%2Bnj2pYoTIjfnKOG59ryablK4XIa%2FFnj5feGyWEriUDDHEIGjdXdbfR7nr98yEYdpd15NTI2RDJm%2F%2FcKp2gGAqLRdVhKbwOB%2FPCjFZShDZIMp5w9t7%2FkNSsN6cWHgNn6nO9cEi%2Bx3qpafPWlhUtAPINDgW6sMTzIQ2meyaV6VswWqu0Xxl8yjCnidDCBjqkAcGMwTtV2k4scrua8cHlEXr5HbT7WGjH3Tn4j4WR%2FH6MlWZNuoNrBtJZqMQZwI6T2ZGqqmCvgYASkMkcSsKs9x4%2BHbAiwhNYx%2BxBlHTOTg1Sa19nVzxCJF1WelCMrY5MWEPoifIkHSbsvd%2F0zghsWXGe0gCfA9JYG2i%2FEZlc%2BpjlaDqRLBgQb3sB%2FwBNOpcl6PIrD6ChraQu9NG%2BlILltfSdS7K7&X-Amz-Signature=b37148b1a6b63844d21eb4c9170787b0d0aa332f5f2011a42f5c3980b0d4b6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
