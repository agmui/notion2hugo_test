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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6IAVG4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIBUAIhUG%2Fb%2FPBNvLFk%2Feasx8ddhroZNQ97MW2rQTVtA5AiADRjz5aEkUlwKSNliLjNHT9DugEdaBEull1iwS8bPvQCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMhrP%2Br3hMT1rnsZfWKtwDRYvuiY6%2FMQqDJ%2ByuOMwbm93iPxORX95ZtpGl7Nt0kdPII0GGUDpgUlctV41dhX%2BDVLjgxgJqFyO37d3Y7l%2F16lYSsoQghuPbXwE0GGLyQQI8xlEOXinthmCauLQ2XIY73jLlheCQoOLN92vxm8QcgUVyX%2BF9c5KCp2jkYV04K1B17XeZv6S8EMJOUV62r6LacQt787MY4Ekvb5Bl0e39%2FXTZaRbTp8QqEKIZfSbIGmb7deHsPfZ7eE4mjf%2F7s1rR0KESIxHkDAjGXqF907HV%2FVyvucyO0JYpVyAt9BPNQBnqTD%2FpWBtrcBdDOavqhUd0Po8ustF1ELY%2BRi3REd6hTtuDgtZobqHin%2FwsBQ7ug6kgH4vTwRcYy4JFF3QUYXui6gs3GO%2FsMP09du4kuh%2FcurPvLe4A3SY2SLCICNew4GlnqOmlV%2BfQ0%2B4aI4shyk2EUGdpMR91BUm6aVcZabi8I%2BTesDUuAFlGn2oqJbqugi5gNX7Iso8nzZitDoek0NFbjbAHdoK5dPeRX1M2HIlVN332z6yGMx66l7PHxRbEXV3DNwB2V4AZu3HQ%2FiZEjkM0YjIo7tzhaRzxumjvh0SsxjC6QP6t0OXa%2FhNuzLrdmz7v1u5y46UO5nbOT9gwhpXLvQY6pgFzJYvrtDnT%2FmqP8DfjxApLdJLBP4KYFGU4dfKMLMMkFjyjMIzctZ%2BQeD5UgG2UmN6e3c7tP7dodK29PeFq2qry3JLmsim6tj7fjRmvtJhYojo%2FzFAekakfu5nY%2BUu9fPZlh2Q%2Bpf5IIgMjhZgRQoT6UmLNwn4s3dD7uTpzgDXq8SLVn1wBfxvlHZAefx3QpX%2Bv5T%2FQ4R4LXlo9fi0in3qr3sx%2FqGiV&X-Amz-Signature=8931bf606c00e5c7e5ee4099010e489680bce19f6572551c2f5db260caf20664&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYOXSH5X%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDhxZxPVB3Myh0JyOTDuRJiKnkbJMrwO%2BeK6qj9JO%2FIWgIhANVj3f9mnXJCmQZxnvBbE%2B4me6sOKDxZFKxYVT05L6UwKv8DCG8QABoMNjM3NDIzMTgzODA1IgyGJZqzKkSuzvc4yEQq3APw3p%2FCT64tNf7wjoSFtidy7y7qjK0q%2BGitShoLK5WjuvzldBYFqDuXlJ64AY2l1%2FQmbYTkOWEL%2Ft7p8BVftoK5hAjpBHJZ08DAh0bQysoM6V2DL5uYdat6IIczx7fwk6ayoU5ygNiAS%2Bex25BiXnY0zubewFZgSwAghWEn%2F5skVaOPj1V5mQ%2B0E1AMM800D3TarbUZLhM3O4UlGxrF%2BkBcKKLNVJk6aiv2RkDPE5j57Zj%2BM9La%2BVP4a%2B8P6h1G0rCn3edNf46XzZ2Ve1oFTTKcesjxxJwblLIiNLgjz29lon8BZh0VjEbJJ%2F8Et7icgdGzNpiC1anyCwJn2c4w8TJ4apynJsogGX699qAJYvVB9h%2FBWoIbMypWj0kBokdI9ZCV%2F00igrJuuoQkfMLH9zs8qGS35ZT92XLgma3vYAYBMM2U4dMUSaSVeNeS7LfTRZ9MDzGoHPWuvhJTwM1O4Ne9SwtQNyYlAcuKnIlWVGjEfoAtMKGw8MGiVOpQXZWYmWgO59HcYgt2VIreTqrVj77uNtqLzW%2FwWjkT99ar%2FS%2FGrSUAKEqLOHm8tCjs%2FniGB3elPfHI9yeLoXektQihtDUWXgWZzuSAHvAzqOUq8luezr0m%2BfFAJKfdWzPPQTCKlcu9BjqkAZPrVjcG%2F2SwrHhtftGlQKEqcyLTzT663TxnqLETAzLTrmZaS2Bz7lkrDKt0lm2PYvOjuX2zkUahxQHZNiV%2B8i5P9TsDUHZGqFYpjLtfmMB5E434UvWzkwNenLAWe9XAaxxpY1JqulLZyuO0%2BUsTe4onxynm%2FyFwPqdOFjHkpuUo017272Ohmgsy%2BOtI2WP8RfLsf333mV171n462nYR97CT%2FCOq&X-Amz-Signature=d3d4e43c85537df4e73642b59c7679360afea7c785689fd33b859b575a80998d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
