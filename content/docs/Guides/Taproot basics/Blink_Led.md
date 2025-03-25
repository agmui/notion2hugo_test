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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SU6APT5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4eCfM2Um20r6wwJW53nm1elorXjHaxTa%2FNOHmqzRyRAIgKLtk0u3fOSto%2BgPRilFJ81%2F3yi3rMWBzP%2FIkWkIUcSYqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF3qVS6J9FPHcn77ircA4rqi2pHlenBdm0bMik6Ao8y3e5Ptquw5FjnNrSRI395WOZ4oYV5Vd8JQfwt3iSvOrg59jCKpxpXWDwPGu5LirqfSf6A9St9AfNBoAYtxjuBK3TcUb8pg5oraUyAEfdcZOdhdVixTAJ23FXl3yA6%2FJ70kr5dcq3ohne1oLc%2FcweNKxbx9qYxkBqodzNhw%2BAgpW0194TKqfXNA0nDfkOKBHAX9B96xsxqXJKzamCykqtr2zTbw72dyZakSeYQZXi%2FBlCL%2FlYSpyvc52dtKct%2BQYFsLFfHr1Fsz0qoQz3FhlBUqecNNHTpxnv40GtLHItgviJ%2B1%2FbA6xc7HZJ2qiZeXxqjB7XC3GTUrWl%2BRIBZ2m8GG3%2B2fAY%2BbA6i22htPZ3vw%2BjZUv9KR64bAVqpi9DAdBhaVw7D5mWYqn5Ov6mN2LyFdmcYVQWRx1QDQcRxed%2B14fQioh%2FR%2F4q77vLZV5M9iRYLDgzMGxfYQdW2tg55Jtfzdpsc9plzlQ4m30cgQKaIlejhNfX57LAHK3fg2xmVTVHifCnhNo4M3OtwGAWTp5eHApriUrwWehR8bo5MvqDssAYNuRDGC7H1u1ghz5dP6mE9f%2BqN3LVyIW8jWqNHpOfoypRP6ssQc7g1bjtGMMbxiL8GOqUBf%2FOud%2BI3Sm68hku5X2%2F1n6%2FNyjAzEgrSSnj8Gc%2FnN2dD15rwr6JM1TWdb6HRH4xlOsrnWRZ%2FH%2BXiclY2NqibrY8ii8qu0LkME1QR1%2F8K9gphhBE%2FlrcaLr3Ua5ceQDYJqkvnkkJUo8eesjB4zNUSPyaNIrDGfxQRY4T1%2FOGgt8pTiAsFJLs8iihsy305U5PeDkdGVGfEu1sI9xFT%2BmXaDGM%2F7S4T&X-Amz-Signature=608c61a84982d48144d2f6870614c45326753f7dfb64b4b7340289a14b7ca3de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NXH3HIU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCUm1hq261MOIOd8SVIAqoIdvWn4lntM7Ha%2F14lrGRhwIhAP7EieEcFWLYalnfZGCHOYuFgDLHo401Ens%2FKh5k46EAKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzuv9IbGwtjNsVwsJkq3AOz6EQRDzV0wzKn%2BqDb%2BX6RyF8ZZhMprMeMmBZBU1Y8ZksPfNnN6MqnBZH4j%2Fn%2FygPXuAJ1mFKOScXfnyhXufIgZybVL8kvpGNUO7pzR57p9CoZxzbjGQk1ynv7CnJR%2BPfKvu71it0uyWKBLK3U2%2Fu%2FP0DrohkAgG9KF9dygcPRM9KPY4paaoMHPIydUhU5NzTQ0nonxk7ToQXZOlP9DGC9Jc6vbm2ChfqGFNeHqpmi0F65n2aVdgQBEyYCg3eKQb38uGPb0JkBUSj3B0ImAJ4WltTIb%2FHcADF9VczFVT2sYNnBkV4sCEPhPD4dx%2FHpxHVkg5gLKMdu4XMOTAgXGFOH%2BnYwFY1mM6EOMWvWzmURkyGdQ97i6hMmbYGlhgei7kusAJrQTVnDRiAsWECPW8CY6KKCZpyPLZBvHrysB3JhAlbqzuOj4fa6up3SJ6S4M3mz9nMyBjrs8vICIabF%2FVsZJbb4cm9Fpg31RPY2OP6sdsYSvx8OEqIp0hbfqFhL6cW1hZmtbmQ2gjdu%2FD0IcfMYtYP7oQJPZmVxjOZtNXELYvyE35Ix%2BTaXV4Y1I6AaEQrXEkvtIggbhtjSso9FMViDJztd%2FvSE4bccoUhe8GubzHtprlVAgB1sbYtdyjDg8Yi%2FBjqkAZKp%2FArv7uw%2FaUjaS%2Fzj%2Bn4yMjv0nMnFgEWl8UgVK7mlczl68YTC6qfEko5lDLrKmxQUZ7Q2LJ%2F7%2BDBdntVxY3ZijU5BCGBgluIcaNXWd%2BsD6LpLPZ%2FaHXc9%2F1N2jHdUmrd9UMlX7VfKvfUWEQat9vu%2FhsPyygd5J2jDOMCEOAxK3cOultWEZR7ud8wQavCbmKmjU5PzNH2jlFeN8B1nJ2kSD3iZ&X-Amz-Signature=0067a724b282b1e2017c9759ba5f7d956bba8a58f0ae402dc9f731df4078e7ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
