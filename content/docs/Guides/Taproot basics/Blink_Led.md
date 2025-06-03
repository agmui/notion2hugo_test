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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRZYXVBR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHbN6eCjE02TA6r6NVABQzjIMqISgOCXsZ4CixR%2BKXvNAiAqwQBNM3twcmXRX%2B0Au8QWjXJuJCDT%2F9KUzfPdCqwd7yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMc9WV3Y4uWV%2FjEuR2KtwDyzKzRW8S3qyYnn9iOAe7uTWVRCK8NxnCj53BRSE1n6CzNu7ODNxof0gxTNRnXqud4hUOda5B0W7t11hoi4zpWTaCRM%2F%2B3CjX3vHPXjgHmI5VIDoWANu%2FEYAff8j9htilpK6puq%2BNYsHxqUqpYckpav1jG6Dc0eOb%2BxmFzJadoX0LWEbdvvx0D2kqJfbV%2BU8z3zrCWX77p2xKwC%2Fnm1secr%2F8fVCK3CSDWooaKnwtchYLmv%2FNIFgWhNTc3fxAv4QpXuPgl6WxH8bLVtC79606I2nDE%2F5GUgPOlDEHtVTB2fKiYkSMWrE118sJILHUjxW3nUQJ5lj4XRjkUVsSqlsgAOUC1yQ95kNj9ARS3vZkV%2FpEF01nhyM%2BQQ8v2jgwYx4K45glCI5ybIPhDeEDil%2FaWc8vb8BQyHZrv6nlQ3aQhXUp5NokbUh5vipjVtCnRjtmgVkl4k0QoUwZVd7NueF3s198%2BUEmUbjvuqaceNE%2BN9%2FXnxq29F9jluCdVEMU9B4vda1ERwwERky5wih78Ox8vzAbNrRo3tHyvIxrr4eUjZpatBNHx4a2qpjL5Odq4ojMNq4ifkpYRD%2FWbTWUSkh0zLUgXCXi%2BAgb7ejHA%2FUJKjjojWa9j8uSuQu4CL4wgqD8wQY6pgG%2BGnFluMuz6fOUmMSbvYXdHQoJvLnZeNvfAwR9Tvfu8pxSEWCLb08k4lGXWzyC9O6afk3cOwMpGJiWCv0VkS7aeABQYfbjO3XGMjHLV%2BX0KbwU06aYb4IjgSYzHt6TH%2BwepM0c3abiyZZPazeD60%2BQzGJ59Cm%2B0Ld%2Btpk9kWqr0Z%2FQ68YCpt%2BEHXylhK%2BUnFdNWsEKqu%2BTw9OWtLfbyoiOBDRBAVMf&X-Amz-Signature=e303ad3a43523a2af6546624d67f0e635a6f041e3f3fc7221dc6b6d0f3cd8014&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y67FX2YA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIF%2BTHTGdR5dOuJSJy5TcZY94ryJKJ6Cibo97znZqYROwAiBnc5oR7g%2BZkJTWA%2Bin7ZfQgsfgLWnJ%2Fmmk%2B1cdN5K2QCr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMJwU2Tc0RrwpRUdthKtwDoudhVx7xWZZobHmyEaSD6jdUuJcdxCgVakmLmjhnUS%2B16dNawg9Z%2F71XVu9CeWzP4%2FA4VEiUpUbMJk%2FjdtMqi6NzN74CXMeiJIFcwL2oALDvwyr%2BH%2FPXkDoxmFC4eGebPh7rRt8DNY95M3mXXPAHT7GBOCLaMwOO7H%2FTyMHfP2Aekj9ge0YoN9wDbBOMQAKPgcy9kc3ThcygYEMX37QZOWHCuetHNjvUDstO3yFGKRRfpG5ursjKQuibiw3AVP6%2BCtHltxTAt8AcqoX%2FzsdQP%2BcW6ITUbePIJblHkbhC1EuPOh3TwYsNpiZSrzdL8Y2kFQoXYk4J6islLRCqvMCZCZpVxMXp04lcE%2B5%2B%2FKawpXuLMmkpMSg41UqCTpLFoTUm14d7qUKlfES2aZivyFv3qV%2Bkn%2FHAMvMLscAfeIOsZlAg1XFuJ6R5DQD%2BsJGKJcdOZQK9AaSCW5tBNVarUwkp%2FVDoJ61Ap%2FsYLEqILGtuXypeLmONce1g%2BU8GcHL1KJMUEnj1%2FJWHKYoZ9U4V0EQLo5cU9vbNA4vj%2B5WCZd5GkizeaYlURTqI7DJXZ%2BL9MLAiyiD75yoNugAh6UNcySE1xsRSReT9JFhtBFqMlJlIvihPXXT3ulGEGPSHk3UwvqD8wQY6pgEyWEnDKnxIufHoeOJ75yKs8Ks%2Bhv9hP32LWRUI4%2F%2FoXicOVriYE3RvespKTAD43EssZQQw74S%2B%2B4SR%2BBIBVSDracFJfnXs0vgLFdl7UgfuF%2FBHGV8%2BydJGwhzw1OTcyBm5%2BLO7XwaEUrjrHSdisKijhWOUHjMweoGD7hLfTUhjHjqF2B6T%2BAodoWIvU9Gay%2BAyNJC30VquhJTvSpIM4tFbUk3GgjCP&X-Amz-Signature=0ddda6af8dfa856ecfa23dcf53209432ae81f3ac94841a52bfff9973f34f4766&X-Amz-SignedHeaders=host&x-id=GetObject)

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
