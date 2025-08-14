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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUC66EYC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHXD0VW8jQ60TuJQUM0vLp3JTbZYwdpVICDWbRHtcdowIhAMtBPFWufLEm09VCf9jKv52w8cDM%2FbIJSKIYEAga%2FGcMKv8DCEAQABoMNjM3NDIzMTgzODA1IgzUh9bzysLSI480ve8q3AMWG2IgZx9Wl%2B5C7RYyLs0s2UT2jpAmy9rMQhStAzG9jYQVkPhwgF8ZNM6vhGUGUBc8xK10WXhqSGH9M2c79cQc9ETI%2FnakkkwDq4z2P4V7zTbhWFzqKAF13tB0gWd26Yvoj7bQGqO7XHASzxZrA4Hs9ovhNaTKQE%2Fe5jb0HkZSMuvvd8np81L%2Fk57wjgIWiMBZYoJi1Zh%2BKfrgDa%2BH%2Fzi6%2B2UqcQPBwYQ4qaFBg4QETXt3HX%2BN8CLBq%2FL7yMIlkvzAmVNcInElrhCneTx6zywed8Ovgt5%2Fz1OKcpizr7zSAj4c%2Fj5bcth3sxkaUHLy7b7CKyZxUMibLC9ENT%2F6yStjbThcsWZb%2FmHeG42N62s%2FnZO409XJKKmcoNpH3RX1KzSFRKIuqMEBoxcmOzj%2BKxW%2BEHAwKHnMLgOmre%2BJbaqvj%2B%2FtdK9Jtj3Yx75Ruiga6W1Ogemj66l%2Fgx2T5K%2BFV0pg8tZPIwKmsrhoHOiYjXoPYKCA%2Fi%2FGHlAHyI1v0Kh6WhyeZejS0q3mfS%2BUmOyen0cngwYtvFrhWHSbNQH84sgg3mEgkS8ERNgkRZmXIdQjSAnmEhuR%2BkrS6BCtKngJmErUjEGuJXzdsj0IoHsSv3q9t3ScZrjVF9vxq2iIRTDqiPbEBjqkAQ%2B9gFldwfqOiQ%2FfrpFpCv6gg1BL9N7fSA6piHkIRnmNn%2BxANCgqiS7bVLyxSIcGbeAnoDv30gsmMFxoAE8vc2SP%2FqytUGmu5FDP%2BDkkq%2FFVr9Uq3dQsDN475P7pMU0n92ZdU7CZ1jMMZiJ4HPtmmNi4AtmgptEspTZjyOK57XswpuhFtixmUsbsYvV9peKWxk3TfFHdgiw%2FykN2fhrWGAwe0yQf&X-Amz-Signature=761a37f6e0d8a00a266690347811a8b80684cf090b6aabc136e5b24512508e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSWRMLI7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB97tiOTy9QzfcnXL%2FrVo3TTGX5unOp6gaTDhZ7QqS0lAiB4NRX8bjtwmJB3ZbUuMbbO1%2BzfCWDDHvVinHe1RWauECr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMwCvESa4TURHEUCtLKtwDzWVOA0uRz7qURarc6Nm39LFKuQLFVqRfYmwwbu2vFUdhdLSq6PoI8Jl29IJo5S0Ii%2Fn6eFoQIcct3WtPR0fu62GF1dOvjFjQjknkPw0w7w78baAasflHDDckbYqVnFJYWQUyE8ocPNApO1QwjLwY0ygfsaSPtThxOf6JPodreSDK9tN%2BQ%2F9QkrO7l6LRaBhtm2s5T%2BvamFtxiCoUUIcwFO6DnzXdobxcD6l3CNx3f1CmZQ5v0RO7NrjT%2Bq6dp%2Fw3wdq3J%2B8aBZTfhpjyazFmrQkYd%2Bp8fCOonvqrI4wbJ2iQNJl%2BrjKSQjOuJYeenNtrl3oAKJ32bEa8lzsKg5eEBIHNepkschzoNHsutIrUwX3OAFQ6%2BI2OvLdpyk7WVo3huhd8Jcw%2BuRIFbGIPD4AuNfdbTowSsR6oWAd5RaeIsRlKsrOvV18XyKGBz3Lc7mrWvIYdXpKabAevOHJb3aStgIKP9oL9R%2FAWp8p9IPLux1nRPdvayaVk7XrYzRRoSnW6nN%2FvR9cnhYY5xBQLvYxXmi3PORzolHWHZVooJxoIaqILgqDEs9bhLVaa1D%2FesopC4TIXan0TevGJ1%2BNHtWxE59Dh63dzC4QxY1oGmXDg68iHQqT4rC8TDs4gOaMwyIn2xAY6pgFhNvu6J4sh8DeRVfzo7RestHGKAWOGduc23zzoTE75vXU0cUiZUB2T8QRfPYdq%2BVzSYO7wVnfjrsLwECmcDoFXd8Fe36dSQoDJq0lhGJfdO3t8bYGfKDi0eAGXB62ysRoOhSMMPPgg%2BC1GfNu6MZfWQO0X2Lnss6kzyJv1%2Bi7BE33lvZGhzTEJFJ%2BE9VaKFr7z3dB7wCxcuk3Iowf3fyfYXKNmtK4M&X-Amz-Signature=18d672f30f9d88b89e6c774ea44bf8731797a132b63a81540fde464878da25ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
