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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664SQ7PVE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FKKOgij9dmnZjtUkCWksozT%2BVmanZ6schljgnHiy6pAiBfX0y7ZhblNkhgKdu%2FIuNhN%2FHH%2Fi5a2btbIUFG42%2BkBCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3jvFd1MOFKROxO4TKtwDKJJofYD%2BtpZbp46Xip9U3E7%2FUrjA9zIy5TobMXoX5n4jDygQUGkv0mtwZ8U%2FHduDxNdB%2FxZVbnHShdFWFSJgDhRgpKl%2FZnSQl8R09rLcQZxrex77OSPTCfXJDmXDBjZaWc%2B2fLxKVciImG2zQsajXZGtRxO8GhY8wb7VGKdQcjZkEKQSFbPRFxjOsgsMIQPVhz0CPkYb7XYxie69k%2FRJQeI%2Bnu7sn9P5rTz9Zc8%2B8vb10w1oXxDFm5nRaP0nZg%2BFpvwhqs%2BFn3I5PbCZfAsyQfRY8gd6dMxul1GiOInFLRmyaMf505lzqofIO3eKr%2B3cQ4QbjQx2h1tI4%2F8BU4eH%2FMPRHkzi0H2t0fKsV6X5JrS0rmnK5auAwQtDecWg%2F27zLfm3AEHHPZ7TE8aevhsJSoqw%2FKgSZE%2F9tj8U7s3NJQvSKqaKm3qx6OByhQ%2Bo1LMvlk0Ykcq343Rhi20AIo4gVjQVnB2n%2B3khdM6XL4%2BtalnP1UUrskSqxdnqvPGY98XdxuXtx6hSyo8YbKUcGChDzEDlKjHKv6E1lCQdgjHBeeUY3WtbGHTUHUkK7uSjfzVNjQa%2FfiejDmGU2XFuruuW1bsLNuGIpg0WQLZhUYvcOeRXeWRX8LnZEcapvc8wlpWzwwY6pgFGjiuO9sv2qXT986R1TGKULbPjs%2B7VsXCrtW7ZN5dcirPtwNWFMTwv6cfJCeIsZXx0Nhb93XS3qfvHBQByedCIzh28BDKpw7LTg92PZW8%2Fu4UsMvEOQe3A%2BkNPY3yzgB0Q4mFRI64wX2hHhtu4svATdT%2FuN95cGcBrA9ux7gxg9kFXEdHvfXVTprnXOyEA1YmdmQEFLkVJZTaB7PGK4tWnorEhOvmn&X-Amz-Signature=f1c7db3e3d705fbc5d59648f3da1b0b53063167fd4823f7bfeb3010c0b3a720f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBASU2BV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiaItNovUmGaZBrrXmHj%2FFuURcKEj5d%2Fv%2F1RgSaEddaAiB4Vz7QomSA90eFfBNTiN9fNbRThG9t%2BNXVQcVLiaa7EyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjylYGYl023DVwKCpKtwD4O80jAXe6khMjngHi2KA6uR%2B8C0sJFvV8msQLp2yixQUEVZk1s%2BZp5dNioIpQa9c4Nv88FGsjIUM0o3fnuhxB804SkboGpJnpR%2Fn8TbPxkoMX1J1H5WvdL90mvCPOiB8VYmPZSCAA9lEVOf279lR7jlH18yJRWWTL1Y1kgU3vZGZBdRtp2wLqLl9VGPTDP8s%2FKrSllzO0Mm0SSYEftikCKTOtEbCXGeE1qy7mc7wwDejeTUAQ%2Fr%2FeH9aGQy4j0iPAmSNOMgZ4VyZ%2FjxQXX6D0C8Ttvlx0MGn9ATNL%2BeHiag44thR1RWwlu%2Bx%2FOaSgOMcUQWOSkD69PkGOpiUZfS%2BaBknwJDXT9ubJ1LBi1WSQQGc3fJCkw56K2JDKUZVZ5m%2FzUv%2F8Du4MUlgqlO7Xg9llSnP2oixcfGwqSmNUP%2BLF26EMn%2FfKK24Zjfge7HCRNf2Z7V2kWX4NogLINRf5DZU2AF8Y3fFc42YgRnuWhCDT%2BLaBbHlZkT%2BOO8gwqMfdpjcaUfT%2FErX20LUFMXPEgvUK%2Fo72LYPOZlTo4vAVBtDkZdvI1vVFWB3hB1axE2E4LSz6F4XrhW%2Fqj04Mfftvvl3%2BEevGCft1FVUzrTyyLlTDsb4iiU9FSV5U6wp50kw%2F5SzwwY6pgG4GPAdyASKMVB64ueVcGNgVjsB0wMN1d7gdv%2FVehLKhw96MhqXrGhAFs7ZabaKd2vizBVLhT9OYBupG2aKpygQ1imqTWzm%2BAVltoLS17En4neTCkacReBIuf3O9vpVvnss5I9bUhySdIVf7zlqKAc2W6HvZzS%2F89S%2FJILBynUVhhby4AFrHo0hxBmzJocS%2BPT8xHrkvWtBQdG%2Bc0dE6f6QPrqewG9V&X-Amz-Signature=acd12da9a8d7196083217c77ee2ad1b687953d8847289a23132076a8e700e7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
