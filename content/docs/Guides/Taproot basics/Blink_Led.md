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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q5Z3P4B%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F6vjxl%2B%2FODmpzqo%2BKJKtDhCfl5YtkJIuQHTI8V8%2FMegIgUesomK%2F2qKj%2F4HBoUjZy5Z%2F4HziSekXOXHoSKXRCPEUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwbdmTg7SeP6CA7aCrcA%2BmY%2FJ7tLQcDoL2wYTHWpk8092kL%2BSW04JqePaDDKeaCxwHGLTgNJVWDBqtFka3VOz4GY7g9a5IzHwlzywcTgHeLFykKNbctDHiwWRfVtZDKmb%2BuqIGlK7lBjWiD7Q2dCsam1%2BqwHah7yu%2BLoQC%2BUw%2B%2BMjaKjT5yWOym2kW4MV0xI3iqmi5TJeNlKHPe6h%2F0Jl3C2v%2BdvE1cVyNHah%2BpeA10dk5b%2FzrFbgm7jRCKexJ4MRG4YPmp79uQYD9t7cCpHfMuvjCxknrBWs9eYMuQvRnw3T5Ody4YxH%2FpgcwplvCJRPpjhGSUv70MHn%2FhqsXsDaFBRaOAzKeDI5rZqS12Yu1mHTLL6ELVd0WMiJIZZwtMROJSssqKpZz5bgbVm%2BKXNfBMRKNlno5Pot3SukeYaoHkSMTy761k%2B6fHbgg5UxgU%2FA24KqccV%2BPIzTPVHyTtACHlCAZWlW5QWJvKBrS9HQqlu2AF6rzO6rVNd5zV1ZhgGr%2FRIV%2B3MxzTaZiLcoTThQSo2mCSfPVKFKgo7C6gSg6qY2YJmup7rov2HhAolAgIPKAXzTNM0PaFknkCwF5JTwtCoIJujKToPokYTpDGGcCQED%2FqaSBJOMOWY2wIffmCkxywYB4YOAAlOqy2MMfL6r0GOqUB2A%2Bf1bxRpHYD738zkkJ8pN5rPs5rznylpj%2Bx5KNrA5R3ylRtaV35fXGmfU7hfUcjfXuG6A3c1l1%2ByvsVDxt5Jp3uu6LiPR5RhNwQVy29yGYPvzVh%2FS5wwxRrIRRc%2FRehbqs9V3fSJvdbAJBL5V7gqvwSUVsOu%2Bsmf%2F1Olhoa7Jpa9mZ6VBwT4ZGYXgNsYMSme5Gw8MAgZzRel%2FTdhhRwzM7JdZ58&X-Amz-Signature=752a75ad96686c9b4fb10aec5a3b0e35d3d875cd4a60ff83b92da6fd6d89816d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VHEL7HG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5EQ2eZ8wRzL6Nm0ckVL3FW9cFAL%2BNc8XNP2oZDxiBnwIhAOCQ5RA2j4jNkCIIDAU78b2v6YvyMUJPPJSNu94ylLXEKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWF%2B3HOllwoRknarUq3APZDPu1Mw6xEjQ4r0JWptJmgqf4FReD8UWkzmX826j1wXDBdC8I0BWbuqBx796ZGIUIS3styMO%2FxNWfUFp3cWfGAbLtO0gnmvuE9xIFAKbhCErss3ifi41l8q5QgM11hk01sLVix3z6HT8YKFj7FES%2FRF%2Fs2eOMxsg5FzygE1cKKdpoqyoqUr1i%2Fn8UEli5D0Mnz%2FzuwOag2osfX5DiKtDzJdm4J8kwDcfmhwufWNsqDW2aBG5CpMgm3mkWaVkIXrcaqS4QnRG%2FtPkTa%2BAY268yiXos6SE1neKQiK5%2FniS2smXOI1NZ2isbdpJOByDvMrMFxzB%2BWTQC7mb5jto94JLiYKfU9upYep5G0OsSOaJBJebaUSB6sUPatBNPKiSQ8FLYkHkpNqBLKmvKsiSOSzNZvtZ1GDFbrczfh55AVGtlc2LtbMGT%2BKeYS8ILz07w70tGERwINTTzZ6KfRLTcZCbB0ELEdJrzFXrY5y0%2FFNK0KYTkl7DuDFwswfYstFuseZR%2FPgBv3IbuSDIOsusjNIdcs%2BnIOQukzX5hVRcIdFGBS%2B33YKXZa%2F866Y8x6PK%2BeB7C32%2BxWWK2jN7RZE6t3JY8lqZU%2FE89S62FyKVGbAiiuSZ0IvmZSIPe9K1zczDn%2BOq9BjqkAWcO0CSlD557AJy5%2Bi4eAVe7u6u74YryIqZx9XQ9WS9ClWZloplbQRIhcRtUoAjmgEGeBmp1fI60IzAKl4a1dX61aB5ne6u5O1qm%2FxCI5ZtvBNj3z7h%2FfxwD9BcOfRHoCUUuu2xkYbQBpNx6n6AONhXKvycShTqcoFxRKtNpY4yThG0HZmXvWxbRZ9Rqlv8pNW8Rn8Luo1sgHwgMbi%2BKpYltaak4&X-Amz-Signature=3d2e70b29ba5462ccf5b863eb48b3c43251d34a197b7b0023e30f7acbd0e2007&X-Amz-SignedHeaders=host&x-id=GetObject)

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
