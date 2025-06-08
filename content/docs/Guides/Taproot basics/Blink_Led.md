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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLHXFOEP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLCH67jTJgQuqsl8letXFcdxAM0FyaJ%2BI2lLXagVvukAiEA4sX%2FbabkJ3kv7dESH89uycoPII9kBN7%2FSqdVuirN770qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5i6p3j3GVenRaNoCrcAy4JNGQpXevSVZNxoO8My9zBRFgZtbmwstBiViIqeFzYtCn%2F6kYiQyick6zRuRdw3RZD7jZzh2VEUnBrlmN8UitG%2BCsrSdEbekAWxtmtnKzVf60kAmNOLWxEBfpKyoPYQw%2Bk9s5KgQ8vCiMLVp9sA89uqviNZ3quZLOlf0xAD44Bw9AT%2BBif%2BiDDzC%2Fk9W8iywe2caXStS9yxCJqVyxjESaTmWFTtmtNXM4OJ53Cvm0%2F6E2aNlGQVVeasfDaavtTUcM%2Fc3EisDTjP9q19K8xwxggRHfUh2Q0%2BkXtM%2FomppCr9Tm77XoYilW1ppAItQTEZ9W1XKL4M9saYhyWmKck1LKtjIVhWYmMSr6ZLK3oCLZl0%2B3IpT4HWqxkNNdN9nlvcMufF4yjdBdRxsE2XIflfZCL%2B9%2F0K1HVvxImpJea80NZkFeotvJIXhC6Q4c3n%2BbR9HGrpXhOQ7iUkWJ0vR9aVsLtEkRQPBuQT5fUdz8ihVqqKKG2Xwa8068PrqcSsIZy6dvVwG9zgHg5b49a0B5DjDQo6TsEDbxjrtpoMnEi8bKCP8gJa%2FfSDIbjcPU1e876kh7%2BYZG%2Fd8qiVpoZMudibcj5BpjocWbo993Az3yKpbyPm1qjPrxPoQIogns%2FML2mlcIGOqUBwbzNK%2BAxohqGfAK3sVBmZG35aa9j7Nc5Mu3ythU6FVI8ADe%2FegHP366kLDEPEK0PHXRYvVhs69F0oVtZLr64JPbr2FN3mzX9S2%2BZHhLGsACFsLS%2BhYgkfFIj%2FGcKK9tfdSfJzBpR%2By4Ehs%2B%2BjmCc%2BQtI6Y4l2snIy5a28%2FLGjpiBTjJeImba54rOOsEZchqXqfq4prLdot3g9te%2Ful8gASGOkiaN&X-Amz-Signature=f83b65356052cc9bfcaacc07e852eece2ee6b59d25cfbc2c58f514befc73018d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7IBDX7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T110057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrBuPlpOtQ7RwHTHHh235VmUjHGbAtVMg7o5dL6lA6AIhAJEb%2Bjr5DiDz9cI3ehlhozERyA1GDFGL%2F%2FASCRNRrEpsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHAtdUV84zAtqM6ocq3AMVQtQsLyCrqbpJruGOroKSd2SoZIK%2Bxn8psO9Vp3Q2ymtaw6o2MTKhV7qwHlEpMhv9%2Fe3YRAkWZwOBf1Zk5viKry92e9h6fuysu8vyBSTuyStXvkC3r7AV4iE5GJFs2cX50yJckI%2BiXO37LtpDOacHkEEfn4WyO%2Fnd4uE05CUVJG%2B0zf%2FRFOXC%2F4oq2S9IE8C7w1UkLVu19YptiRaPKgOfSOUS%2BH4HCQwaBjzjMlF%2BjPDZZnFFCfgVdjvS4ShSY4hWYewH4CjfUAH%2FdFxVrie%2BYhuUAAJ6rRlCqdR94Eocy3AKeYDQaWVgAUOV0qf1Yd6NvgerQSdS1XhcF3RYfFTtCBcahz7FKZaq%2Bzf5B4WVKcySk9cGiFR8y9t%2BK3JgkBQxDpGDn%2FIOxEi8EjhveJ2PrD%2BnR4cyQa0GIDy%2BiFKf81SyO3mL41W54XGJ5zbMTf1Q57rycATzJztypqLTjXnctYUehNv5yxE8aup2cFcKZ%2FSJNV0BWYLqP1QUOwRD3FH6kXwXXUl5Pxnh7OBD9ZRc1QnqgcqvczJJ1ur2ybAPlOi%2BT4JhPIk5oUvv%2FYVzIC50YM4vQx1oxgMDQSorJbyOwNQdkE2vhW64MhgbUoW9wvevlqLyu1kLwt5%2BpDDdppXCBjqkAZnrXAHdUXmM4rHoGrDn8az4rn%2FHpSR7ysFr5zIWB79zcpc%2B4%2BFpx6yPYBU4e158B7RX1Ituwd6XEjxkGUylaCkgMCLa4n9PeNfKX5VHb3oWK6n3NSgvNfo1Clena8GIWiNYkNQrhGmuLt6k6ijvrRUbCSM3y%2B%2F9VHPtCtKCltQWCFwr1NeRo53xmiZvSf5lVvKD9n3WCkpue6LKqfgWeRxNomHB&X-Amz-Signature=3126c2fb3e189fe8d7a1ba3d98c24be3d003c98a9b9613298e8e61a00af1a5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
