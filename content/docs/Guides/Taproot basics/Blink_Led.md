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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCW2IGSI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7sFuOv7ULY9GGXDD4NqOPdgZpUowJGj6UcsyvuUH46AiEA0el855R6P6z59gi%2FY2Udryhe6FCNYT%2F2K5R%2BmbQ8cU0qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7HfosPNTbShzKZTircA1wjqi%2FRM3DKZh%2FH4Y6Mtu7aRbCJN95DsJ6J96buBgM7Vt9IwgKj3YkPQ8y3%2FIXdhfucia0d8Dm7ajdsyR5l73rx%2FB8s7Y7QR%2FU4%2FOi1wjhBJaGl5OvTXY96qBRist8mN9c0Kz%2FB4BUaaNaLwZQw3PxYZRrgp%2F0oHG9Lxt4TfpqIE08FlVZUNB4xhA62ignrRn4X%2BA617zF0L4C3HYH5cAsZZCExh4T4eUDefCBHQzOZz6YCv%2F56BhhvY5mk7i3oRreMzRrZ3t2FRZnF2VzVEDmZSc%2Bvs9T44IJGRJG63MAxE8ZtjPW29Q5z283ss81UtrJbrBJo1nvbYIRLMAhY3vwo0RS8SXuuzLce34Y1%2FvsikOLri9%2F80OwD6N2qaP9al1x9LIA8CndHxsKISM2oJyICTomLWqhzlC1QHwvjDzJhIT5HYwMgIpNURh5ccp6FyO%2BaxhnY4aGWzi8MM5B1MxwrOF4F%2FWnhQ331brYtnQGfLxJ1hntsA%2BVB%2BJmS1g2wkUD%2BNv9B4BTaMqo8DBnYSCeH23IS4jXqWWLj7S8Ce5Ibi191%2BpWX%2BOs9fO4UEE%2FBny5Cew4rQTEpqUNMr6LWM37IxQsADzpHhdWXT6H99snHpxqc8l9W6LYg4HWpML%2Br77wGOqUBXGGy%2F5TGIrS8yEHqQY6PbYYRHRlcgs0Jl%2Bgsg3JpHxNCneiJHTKYurk0xxLGTCtf9kJJtZ3JIMBaKHzp3jnvthJMolbi7tmpjSivVAV9H2w8xOzz3h07ZWEOreQGB%2B9DyMECyQqR52Y%2FkMgECzjHPvIX00D1RQxZjos3BtbnMKy1MaoAXO5ZUPMjxcJKd2aU0xvXtydn5okaaj8wF5iyW%2BFPEg%2FP&X-Amz-Signature=1b3a6204ad44c86f0be0a87f8e056e4f9df4036eb0ff2389bef030d04f776d28&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA3PZAVJ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCXbFscXHouXvr9BtQZRNyEd1OhE0qMgLj1E8Kh3G4qAIgcRi2nPFUEaFNekKvdfdOY7B26YpyeWG0tiljdRkKYs4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjFPQBXTcgKtlYGIyrcA6iJ1J5qCnfJhaNmDzq6ctAwJbfh5zuIgtbJhnbzI0V5TKUyQe%2FZhTXM%2BeDLLoBqZvxkBJG8X6VLuBG1qGqmPlx6MojQRN0wTK%2BHg1VoqknUXCxF%2F0cfkawujoM4KXhjKlgTBHH7iLrduqdegvq4PYVUty3OX5MLLYX7ubaUFnN271c%2BaMVvaAB%2BXEsU8pnc2Wd8%2BdUm%2BZ49oftorYHaoG93UsWNvS%2F9%2FhkY9JnRcW%2B2oKknc3oTsa19SCaeJ3Iff%2F7xZYcKpLkFZR9C%2BBTIkN7WjE3l7CqUoxmWTc%2BewmzpYcixENApayT3PpvCNV%2BP0ScGTZ2CZyCwBwHcnW0URK%2BvN6b2HgePNr2X%2BTS1dYMUcUvnyacS6wBcCBlIJN4fTmMkVXmClwUvkF6welKs9xSX6TaxIcbJ4nc4INYOLFqVJilfkB4bhBDkfMs9UMdQJ2NcnxYfJjlF9bM4D2%2BQDrquJVJ1WQ1u34KmjnFFjZs%2B1qacSfsjodt1IEEb4jY5xwcRSGFQ5pdN1AAe6b8%2FgByUXymjlhWM6yuvSzUGNnWMhDm%2BVAK6LlXoyu2Aq0hgnV1B5je3uVd%2BXWL1FVo7qHANHmwA28j0CgnQwCYI8iXuzBGdYmvOKgk6wH7bMOGq77wGOqUBWyjUsLqQN7naUHF7TcSe0iQyGog2sllyRKLlvXAAehbnm3D%2BlOEXDGBcpH1%2BInFEpF7dZVddnuX4%2FrePNQFUgHaqgZnl0exsDJGeiJTz6msPcffS2o1YmkVKzV0EWVIfR1C78SQyeTNmImaByyqbD5j6YJC6zEtpOS4WxhLKVtQgx4Ea2YXhWTWJzYnfKfUgRN7Uq7FB7Jqv29KXgIfO%2FCvTQkcu&X-Amz-Signature=38c142fae470bd9de1e52067dc94c3abbfaa01b6b00e27d2632bbdc9f2c22a90&X-Amz-SignedHeaders=host&x-id=GetObject)

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
