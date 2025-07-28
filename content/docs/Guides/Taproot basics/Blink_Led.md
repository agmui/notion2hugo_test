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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466424DD6M7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHp7Wju7S3NkDZVm9V%2BsE04xZEH9yikVmzVN%2BUuMvu6VAiEAioTEUFhoZXRrlwWRH6IfhCxEAoNIGdVFaFuYXb3b7PcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFh2rJenfzvA7uF3VircA%2BOtFdTzrk6iiUxD0u3U8sz36kwYvMh%2BVYbNmalkhc0PWZqweuzRmUJmTeX4wXkFyt3ckWVJJEWvqFbW8%2BolhkJbKh0skJ1xWHvtBYP%2BbkJnG%2FSazl95WKIw%2BTohU8xKqv1kcWym5fmC%2BaejayJxooqL1QKyx2M85rvQvLpviDCIClYPzxrtQ%2Bml%2Bzlha5Q3ZWiMqGgkY%2FpdEkbBpCv1oUChc6cS2eVrs5pXbNPK61I0l2YeMy4Zs5R4i7AIVWv43M9Nu4KScVC2lCCvC2%2FGDkmG5RvAbOWa7XAzm3VMQJ5A6hM%2FCp%2BYITB6F%2F7ghMzJd2mR7mld8jbllWzrdsG72x2%2BB7jXQE3WCflm4IrYll5sEC5BCpUyDtAGdx0iEhK8E3IhrZzC0trsa6JWRZTmx9cHXrmj4vACVKCobyJRmyeFWQUcFvSl%2Bf8NWE%2Bp4BjQeEQTUmBsncNy1vuH0tIxPXvN8eEpRBFQEmBCgvfviWek8ebo4faq5chKStoxgOHqrOnlX6F5x%2F0IxqeASvlcjY%2BWZ1EHLewbbVOxqccT5GTUHDqxg6Qf4GuAYv1ErciUKLE6SRcmghcJvCdUNbD5MPwhrSStkg7vh80%2FfEDi6QePzzpNh0R5MKMENF0HMJDSnsQGOqUB1rQHBlxQSVHqzmpeyPgb4AFaXWUOIjlzD3AS%2FXIx9cEZaKOwFg0xXojzGpnx7qfc1%2Bx9%2BH8asjNImgGeswLIiUTL%2BuQ3hgr7Q3urO1z9iJrEHdnM%2Bi6PIWxl9oksmuVAyg1a1t3KDREsZYb88yHQx3I8Sz3RflMvyIaMYZ4elt%2BouFErqDnXS3wlPSUojTvigkauwnBjbmco%2BRuaraygfQE%2FnkwS&X-Amz-Signature=1461a7fdde7ffa0bb6c9d8e28c5eac0fd4eadf1131aa46ed3a8ae75f43e9c5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652XLLX5Q%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDezAe0VwSKAKdcq%2Fn28UhjXDIgugfeBWxP7HqZBB9TigIhAIgW3io9ovxM5QEvPfb9h%2BRBewzyacpkXZsevR32uD2fKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr2Z%2FFSNTVN766Ou8q3AMPcJKtgeGZwqpnJHWaZ35Viq%2FktMZXzR9X43jKh%2BIQ6XIgOwJc5dGzqdwRUdVBmUn6P6HG0AScqw1LwmCI42C%2Fy%2BStatkRd9TJuqFenehZeU99%2FJVkVBd7WqhelXyAXXiVaK4pGsUIOeHLaM4A%2FR9nBkcOjDUryWaTdnXR5bxvy0XdLh6H7zGaWdjcGO7t9csMxJ%2FlLgcUBhVpgKZVogXSokI9NYXzB2CLivv%2FxUOjVaPI4FYCd6sdm9mlU8Y4F6Kt%2BvKQgqbNopPio%2BvqkTu24wtRcEwXheCKrSH3AeaMKbA4Qwl%2F05Z%2F7ntDc01xfxTZ4%2FgPNnqh7zA0Kp8creVo6vANHAclWgJ8QP9IBn1BLjugCJvawWFfXZM%2FSQoXc6%2BYppCnqfVLyt%2Fs86NyimW0SQD6oeKIAHboTlJXXeRxt909Sfgj7zkGCVAhq04BrgI4%2Fr8TYUANIw%2B%2FQ%2Bz5yA6jMlyiGic3NH7LL9QOz%2BDZfzXT4x6Qlh8MfR7d7m1zPaCbQZI2oE%2FjE9udWaSNrL0tYTSAbrL4RI67RoHsrALScs4WxT%2BM0N6YEQplSBAKDHeYUDr%2FjQKCGOgMg3KNDNrVfY%2FzS69mN4eoB93ZIXKTKutI6lHg0JhZ9vwmPTDf0Z7EBjqkAePBXG3v%2Fc4mf6NHkWxeBkv8HAH4lgVFQ%2Fho8sYi8s%2BM%2Fw%2B%2BASkQFNu%2FzFafS6k6k540NK6e1pAHhKrgoA4TCrYcmzcoNwUfHvdNnjUwSCTwfuD23pMM4HpDFWcrbrEyKieuEwjr%2FHd8%2BKicDfL7gXDW9mPSsK4AMB9m8rx9MpCJatBq%2BoGmHqgJYO67c6hlasL0LruUZZmgYthQt9%2BhsOBlivjS&X-Amz-Signature=c7713cfe9ccf370d3cb4dc7d02734030b4ae0d80b0485fbbf69e044f277834c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
