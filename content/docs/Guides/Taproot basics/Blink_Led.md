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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V24V3CDX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC47Oc%2Bm5WgNzaloBKCf3UVAxlzdFaM5at9E6W5S%2BjHIwIhALb%2FRhzmC0xePhy1IeGMfWE2ftto5fkWJBi5sKu5QAXyKv8DCBAQABoMNjM3NDIzMTgzODA1IgyAnqA1OI5UGePOPZoq3ANtgRGkcilghcz7WgD%2FCDMIsYMOiZu7jQ0qjW5GDyVvdqJbnBXxJ%2FeWqzKDFq4nPY5og3wROePFMA2I6VkRUFzIyEknyK6zA%2FhvH5Mk2JxOpGp3bLTfB56D1bFzyviSPIjziWjfl0HzgHi6BK2vW9QK1Hjlx3F41YRffje7f48wwJCsit6iJl%2FGhHKbGUBHAktWP6YQUHRO7d5BQVYXnI3sPCkWoeowBumOzYB227SWZVAI%2B30BXCn%2Fuuq5q7p2qfP2sKVGl5BjPvZRbzi3sQN8MYGQtn6nCDEyuXeTwXN8LgBwzvBkTGQ%2FmJYs4O2Zx%2BxOLiF2MwCAqvEIwH5ooJG5wClleFUDFAFrQN%2BdJ0anE4J0KwjJqx2RI%2FnPpOBkexS0dzaljj6mxEDWbt9L3tC9z1fRN33juPsRfu4WPFG5jPIHYlmwGgLQvU%2BHBCykHawSOtn1Qbkq8Jnh236jKdxNd2BYMVKadGD9RmsuoFjoTE%2B7L9aqhWVSGqRedsy0CS2XcmgYsD5gNqV2jH6Cg2%2FVn1aFgSpeTMgJKKONTKI2l%2BI%2FdDgmB9kyYhm51mEbvbjJQNJmZQGt1GAvJD7IMmtC37D8OjvsfHT5UBBcM7%2BoIDjpEcH3ZrdRMqZsSzC82IG9BjqkAT9sMumViOMlshjj4GxEmVonLvsAz4QSH8QqGlfmxt9NosLvk1CsaWv%2BgaDuQ26vbWmYJ056hhPGBNghK5yjkFMsSamzs%2FyerCZi2S9AqWHIlCKgK%2BemcSLfrXRaa4C%2BYlzKvc88Rh9Enz7g%2FXFYby6wUFFT1q%2FF9xLRElVUSNCFE0k7qWmo65LYEC8XPq5ZHzz29mj71vElIu63caqEF%2F5%2BD6x1&X-Amz-Signature=36f859a6c8eb69147ee7c74b32bdd59f67eca0c4aba638950bab7c847cf9b5bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3ITVLV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP%2FkxdnhIReXXg%2ButScu0mE5JPY8QUIT5pyZIy4Sk55AiEAixFIma7PXXF8XxSHJJfkdKRx6adMW72q4oQ0MRGrMrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOL3phvhKhsw6zVm%2FSrcA24ZoGUnR1FNPK503Y6RDroIh8b2cAoVdcSNWTDzmQmgY%2BtEbOx%2BBSDSG3G5qXS3Nds93nJDakhbtMD0p47ar1osbXTKRXsKrZj4LHYs2C%2BNB%2BV8VZvM%2Bs%2F2XjlGV%2B6HXR%2BnAotSamtQSpCeWzvbP%2BYu4xSH7IX9tx3G%2BiSrPQTMtGTi54X2LgF%2FiAXKCaHnYYKpeeSl3ndIsHtKdWg8L9nfNkOaPExs3gO7EnD844fNrDvAOvMFvAWgE2LrmR5JaJkg%2BZ764rFkP86vEMZLByo2x8d7a6%2B6znF6lVkSMJNHXXSU9EpghE3YqwwMoExnJY5EN7Qu01FmNR6EEfZ5PVReBtyTNlYS5Lnd0NOTq7zEw%2BrQNAudacx5216ScalEZmwqL%2F85Qri1h7ZUPlxvXjhPxlezJD4BYb6HOnTwxAtjNOu%2Bip5dR%2BJgCJ4nnsn2hGvazqBRV22%2FkDvPpDoj0zNvvFVG7FS%2BRAmMxRGEAowXsbmYmzN2NnLOMN1EBwIiEbE%2FiL5LojxVCFC9sPFWwroHEiIruHWJYAIDxoZ%2Fpx5HvCrhyfnN70jtTKxBHV8RKGFKsL53kBoZwQR91UE9q6%2BYKVlHTe8btPrCpamMf7XCxuucO0rHktYOriYIMN3Ygb0GOqUBXm206IxHGUyB5BfSk8BNKciIH8fG%2BxqhFKqgTYmmx7R8F%2FiP3cXSzgiN7a8PQmDPJH8O2w8KvjT716b4A6YwyER%2FoLciTVInDusOf48FTLoJ%2B6ODg%2Fo7XV5H8J7uzXQiLdGlsiUTlRVUhKbPixPu9itLYmI1cHkKY3%2BaiBSqd5fZ7Xx4NseP60CILmdCphu6Vp8vx%2BSpD0%2BLldi5k%2Fnt1gG2k4Kz&X-Amz-Signature=1f036501a06c6b8ae8485659cd29d1a70dedb8d5e1b037a361e1a264a36cee4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
