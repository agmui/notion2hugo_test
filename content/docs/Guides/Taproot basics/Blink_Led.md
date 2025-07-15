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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZHX347%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIC%2FsALkBrF6uuAG%2Fp4PKxB9bdjyP43Gp1hFZMGtNlR%2ByAiBLUhhfkdV2C6uJuHewO2TqEWOsrjB0osJJ8D5Ys%2BzjaSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMlBZ8ozSA1isyLClGKtwDv2E%2FCB3hoZoQUdSnyFw93%2B9M0zWk9REgFG%2FRf7YefG4FRHj%2Fv6BAYvCx13qaJr75MJSOT%2FNEEVSfKS%2B9%2BJp7V5ZMj2XNfvKdAorAvON7sYN4BHw%2FcHXZH9G6hEB3lXD8K3IeOk3WHGkV1dAndwBPiLEy4FioFRcFCqmivYgZJZRtCp38eaQbow0AGwxrkXdDZfFOPYpPu%2FmdyqeA9o8Nx2IPiZeG2dMwUrCjxj%2FZl5nH5OkaCh6oDF42cp%2Bb2xxlgYbqun9JQ0aqxOTDpAvtlE1zjYT5pA0c1F1J1eddpTX3MepEqpKm562sqd83VVQyOBUjZ6It2Hdb7%2FSSRz8Y6I6IGWHHJ9jEjq1YcgMkijE0ePpcutZYtcP1SWk17z7fbJPaqLBrFzUIB9RW3m2HXNWVUWXwuX2JBBfem%2BNpSFixCSQUpKVeWuqrkI8G10ca2IGtRnzgvK%2FGMdCUFLOLFnDGYQbS0fQHuI%2BgtJ9fomD8kOjQymZZP0AuQszPSAKugWNaOc0YQ7%2BRyd3Eqc34G1tX9g2BbKRPKepe%2FN9yIMh3nk%2BtGuEvnMulQSfzmbsdJMz0c8D6xqElseSK4hIH5alsgLyV%2FD6WYNcYnFxQs77NAAEnF30C0rX7FOswj9TXwwY6pgGlkLzhZc0R5Ho9BGIsWh4Yd5YodkkYtVLQY0GiFkVQtat5xVYnim8UKY%2F4BE81m91H6ot3uZkNpfQuOvCDHUNJSJVFea0uezE1DhB3Yss7A7lorZLLXcuGxkOwNA3id0oBm5wVaCApiwOunJMi57w3HyvcURWtoht6RNG2BIyUltAOi8YDA%2FxHpGHLlBOQb%2BY6U0%2FgVyTlfwXb9RzyXSymr4oYBL%2B7&X-Amz-Signature=9cb4406c4352383d054510ce693feded4ed9de34bfc5361b95d0e62d73caab5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JGNK4L%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDPEkCdj3F7xPyYItqK8SRT9bdKD2yMO8g1NEplWmVy7gIhALP2j6BiOb1obvgZnmUOfN1mdn%2BziCT7Vt9AbPVch367Kv8DCD8QABoMNjM3NDIzMTgzODA1IgzwQSan8EZ0RiDPhgEq3APre43W6lVnxB0Th3lCLxUYXBmVyQ4I8nnTcg8qDoTkLyadQ%2Bhy45%2BnHKZMRHScJ6%2FCcmXJKe5fl0bNf2fmZekMhqH%2FSqbxjNHwCZsdnN7PR9GiIykqs8HkjWvnnaRyQ1dsGUInKx88ca5ImukvXxqlCNvKSt6q%2BS31T9q5XFhIDEMUFTzBFqnYeFRWmkTFzptEZ6Qqp3xQpsztfzoKJG0Sgyby5E2ZNavfrzvUpyU068E6ktkZD%2FLMho2GspmDuMoPyphh0K%2FS67A4gVwOL3SFJn1nVTsJFOeWvR6FCC8u%2FLiMEsOZTBKme6cycpcnrtHfc%2B96HxNtRu6pIJjtUE8vh8Elda0479Sq58mxB4iWRAoWsD8EgZSqnZNsotuwve4ZlEb4VlVMYia1dEGtpTlhBpqFHXH4aLgBUGpah6uX%2Fth9D%2Fawj%2BrgRKYPWFC7t2J%2BLtkbTje9bheaw%2Fjxhx99HZkShd5KlCQzf5n1FnZoaLm3kVfuRzacV8WPM1SxxKM%2B1UqaznhsI7jPRWr9qqpZdUE8E9YX9yLDH%2B3TMqfdlohRS36vMQubSewosp9icWTCNv86niRyBpS3A47mZCxBZ80Wb%2BTwMD3M59%2F2noQrsNXfNUxN01NmV%2FKg8jCP1dfDBjqkAapWR2VE%2BW7nvqQ7%2FAkllYLRja%2FSzBdojXOhfE8O39Td6POa5eZOyk8KZPa%2B7JjOTHViVdYN%2FX4lKIp365RjY8Cd5AibEDCkz41WLjZp3HNgRzelHqFkfV%2FlkrnQGm4kURrk5%2B9i7Yze2%2BV6B7s0N4MLlKaN4LopRxNluseOfdOECcD%2BoEA%2FK9ofIK9LX0BV4swWT0HnL0FvzqnSWUPWPbTRyaAD&X-Amz-Signature=8b87d3fa96fe3cdfe5d566ea0d956f6f22db7470d1fac006cec9d23c108584e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
