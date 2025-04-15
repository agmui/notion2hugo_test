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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCJN5WP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3Y4uBRPOBpqeRK%2Bm%2BYym9EU%2B0kUGMHF%2F5LmYMppfeZAiA%2BvaiWzx1JC9R1D7qKDIFD%2FVB8O%2FGla1Pz%2FAleGgIAEyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMcnZYqKnXjadFKmNtKtwDrQJbf7%2BNz0BTmnyUt2fExQ4mmtxL5iBe6G60sE8iqF7ovt4Kk9S3gerfJQR4Z1BBX3ZItqPHkBZqvQTJfSx2oypl1MXH6wMbDmgx60Kbk%2FS%2FmqBZdJZBodZfTCbO9RWoNACtENt2zL0TlwEjrP6AiFxb%2FReeqdczTk%2Fe1Tk6sZjqF8xuk4kaBRjzd9jE4Zpq72SK8JDH9Yd1KGhAoqKC3JE44%2Fh3lD3V1UyKRiECka6q%2BdEwi9i5dNnVPbI%2F9riyi7Hbw%2BOjz25Sr22BrirZgsg1uBA4ejGaBVJ2XUEJtfpe1JqpA0aSut6OVjwsu2oYhHW7ofLw73WOnMzLb9SEP6IKoTsu7IX%2B7meKJzDgBqX3PenxsYWSgtcXonCuFwaEcQyyNxYrB57Mszio65hqEz2SVmTnVzOgdTMTBr6F4wdMb3nWY0IQeElHPsYw00CJ5MhwPH%2F0iEoDG65%2FpYyFym0ybsb6EH0g%2Bb7JWcg5QE9JkLmunQ5I%2Bme6%2F48GvSC7G6OP9hcu3oo%2FVcazad4EtGp9SsNjAIM6UzwJ3EwfP9EW2JR6dGMNqrK5TS2PJ3rhteiS%2FCEN3LTntgm0TadZ4WkxiruYPGY7SL8LurlkRD45kf1H%2B4d9Ei%2F%2FMg4w%2F573vwY6pgEfgx7vjF%2FyHi%2FKY0ey94Cw%2FTeiGzBdgj%2BkLnLPh%2BVCFFZKR3HOFhH5kfmdaQCVHdjisAc%2Fbb5VARYgUmJj4AdkjH1OBUtabsRMtG3wQC19FwjLuKPVNlzRrERR6Am3dJIFhRhBGHDpfg3Fkq5I%2FYAZezN2rMVjDmW4TYtOTmdTnGy%2B3IDuJ5v2r%2BI6oGRvh%2F3sgItt8uck1rC11FxSVZl7LrKj6Xt2&X-Amz-Signature=d78343a746eac103ba10f82a54ff0223416151c115f108f1f325b43e2bbae52f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVXQAVAP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FhUvg3ncMzEbT%2BHc%2BxKhHQuFZjfQEcvwhh%2FAO40scmAiEAqSBjrxXkCW7jsEJ6NZu7TewsTHJHa1KaaxnVVCBnc8Uq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJThHL36BWsfEeQtzyrcA2TAo2zjiOmrzrRRiAo2%2BbCchw9lnf3pJrBgR1sYHb8r3CUwGpK8lHpuBAwn67k7KiYEQ5YvRh7nkKUKNx2VHL4mSqgDn6Pw%2BxyiAUuZpk8r40pBGCU3MqHu96oqC5jTKhBGLLEbGbBujOmeJ3zNkCDx7YUaZcBMZXpM%2FZ6oTGK1bJdYr615a%2FQRcVmHdluwifI%2FpG1iKjnc7fu6JsXC0KtdKTOF0gZkC2OtkEhDqqxWVQzE3HNVJXFnbKObf5ONxWBPrrfqUy97cPxitsZv3P2y4z8Xxsa0kzHuJDU2R99HGJDXKYh9K1%2Btaf3OhF1bjH14%2FvrPLRZHYHH71QtcFWC6H4Mqjn7fzCfTe4ujxfEH957v4ZnUHMTlioq6OgXt6fCzHql1ELL%2Bf1JyAmfDlE3%2BwbM1V%2F7aJTT0iCyZWZyD%2BlJUpAQe7B1yICLxgAV%2BpXQPnVtq0pzWAHCj1cyhPaKV6vx7Opa%2FI5h%2BgtIhjWDNWYJ0QYJr7rHsjItRGlN6XM66hOd%2BbGuveMaR%2FjlGM53dVendsT1m%2B5WmAmXuuSFhQDmkI9M84SND6t4dzddfpzkwUU86CaYmVsHwf6Sp4Hd62A1%2FbiNNlMs3Gdc9ucVUh2KhgV1%2FsOFlUB6iMMy3978GOqUBbiakxk7eXxVsPE1AhkCNXl1RIjpRQt3DLMhqZItjJcNxju9TGeuePlg9JxsFm7RFkHW2Db6St13m2lQNLTZdoWDU%2FF4bI5aIVRCONCmwUqXDd9MSqQwpHYtX3WiALdrvxZZ0B2RRfvHfmwOOC1RZJvQpYwZDpfhzKAhGdXhx54%2BP3M%2FQd8K6%2BOoJIS17tERng%2FfqhiRX%2BmXPAQty7zZa9CtAeV8X&X-Amz-Signature=bf579f074dbdf558522869d4fb3dc33065babf871613689946ef247595a42722&X-Amz-SignedHeaders=host&x-id=GetObject)

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
