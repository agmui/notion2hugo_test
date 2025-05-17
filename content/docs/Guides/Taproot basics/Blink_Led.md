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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U756XHUY%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNFrBHSMr11P5oxfi2yowXwROCUD6B3HnJJqtQk6Z%2F0AiA3pwmD8vbedQAvF7TZImm8IiJWCZbHWDsDsEriak7PdCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM8Ke7QlEt%2FCRkn5x2KtwDUl0V2t7Ak%2FFaj5A97AnLtG2VaLEjz0EFbQzg64BNmfOogME4H5zk5pJOQ3tYM9oBD%2Fgy%2B2tKKgCgPxIe0KzhV%2FW29aZOnUL1ScHSe0wTRZbV1ucgKZVgcx2IPPWwe7imd73NPuvcwL8AZCHuGXD%2F4zdQOKoiz0Mii6YAsLkcs69zz9n3rJJ5hAFzl7I9%2FnU9Xcfu2QkCjj%2BKlYqvW7J6gjnBIbl0UVyalzjXArGbb9r0FTqW66INeeNe%2FUJzMz2M9jblAbebtEIKfqOyyRj629nnsEV%2FY8OoOK%2F0KCVKM%2BpnLP1AuAWEcH2NDchZwh6fJlZkB5ktvnBZJ16xSIxGqKmwRw16PSSq%2Fy252risGrdecw0tzbNHpZjCEmsqdmyYmwvothTRyTn2Ci5GtgE1DThxahiutMVj%2BdcMWWd4imZny%2FsA3lv9AIALzpRedn%2FJzPMTkcG9wKcCT8oFy37fBiomcsUaP%2FHNerD62Y87IjbyDj3gVQlVAppPuSwn8mKySD4jWUR6aFJAundr4%2BsbRYNEC1PmI850uYIpVQwuXAg1a8kcrfDwlTzGFRAs1i1J2WocZrYm7eenrcs5JFatlgBTng1H7Fq3O%2FHrcDweRrJzE2fmreqHzsTPZE0wsaugwQY6pgFAl3BwNIayxqoA6o0QuVsXMvklu8AtU9tMyP3b4fI91R%2BC0mcytlBK3BlHTay3%2FrEB9T17MtOIxy47khJ3B3rUkd2CszR63Rh3ZtOEoCCSw8aoYr92CxKNZVJQknhGHe41frjwbgRXK04mBf22zZ9EBTOS739i%2BV4RRG%2FiRUbMDGmGzND%2BTI7Pq2%2B%2B%2FcGIDfa%2F0ASOdtuLhW%2Fra3n56Tb8MZsdPx4q&X-Amz-Signature=7c9a506fab029fe7b1bf027cdeebd91dcc7e4eba49d48bc4ab8a1c67d8d00367&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GQYBFK%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF16oiq8XhzcX%2FK2npeiv1%2B2NwQrLVlxLIy3CLoZf1o4AiEAnH8Qeo7RDrTRt2aGxWbsK9OqCuhPmkjxHe6sixEuQnoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNcShXe8ZLuesZa%2BhircAxUhP%2FPrD9Iw5wz6KmjscVtTJ6XK%2B7gEbE1bs1F%2Fh%2F5hGYW5kLEwcDc9oR%2F2RF95ZA2Vw3zHjEqbKZ5X%2B0%2FpK6dLpAA3ktPsOmaxzKheAhhJLE8LTHrd7WP170dEJSxqO5ZqPf%2BjSOwdntzHjzx9pl%2Br%2FCWh6CxlSfjzPfZuFpZKicnUfqP49YEFXH1YcA7a6hV7vKana1PFDPmbNSC1y5sxCIGvwGlcXioKUVFsWBuzqh1ms7Rkc6o0Tj9YTXG2xzbEYF%2BQj3GVqhWWsHB0QjAuAIhgYnMh95qq9kTzflgadnruEs72zwyc9qU7Ohhn2oA9QUGqNRB81a68jiooSmVq7uOkCKScgLzPiLM%2BXX6P9rgxdKAj%2BUDrrHRRkkyRMKf7c%2B4mpnXPd3AJ3QrXt3tfxKHoUQzn20ZyNH9AJe37AY6gC50QPmWIOQlHXEYheihv2mb0TTaxwaip3uwxVjk9%2FC9fF04SjBSzAq767fhGh8M3lsE0o3KJkihAEnmRJz4pJqRQWr8x8vgIbjKGxArKbuqFfduRlkDT1Hw%2FTAi1X%2BF55zjlInPMMTfXK7z8QaAS%2Fnl1mFckamFHlBRT494YwUlCeFObZRrDQjQyYjSYOD7lMcFBDVMyT%2BPJMJqroMEGOqUBbms2w0EfkjUQkOm%2BUY4iw1XYN6AfB2HUjmKnsa1rpGq09HKHww%2BDp0l%2F2UEX6jkou3Lbjb6FcCt9jdN%2BFBHxBR1aFT%2B7vGLeJtx52uSNKHNZMfzxvOZW9SVlrO9bsf1FamFS11NzlZoYaLgfMURIZL%2Fson%2BgZly7gPnG596nUShhBYwFPIT9ddEE2NXZZbhgrGCt0c9R%2FKwo%2BVzPK%2FMjQalEl4i%2B&X-Amz-Signature=265c32c7a9c5960700b4ac201b585c4ea1254475eeb89435945cc4454e5d2c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
