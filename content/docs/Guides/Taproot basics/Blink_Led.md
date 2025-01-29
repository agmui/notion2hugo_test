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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673UDRDNN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1KpXzZzBXFolTAbnwcvuUSEVVVUQ2PqJGeCuPSLPVPAIhAMwglPka4FiT8zKy8WQpA%2B8iG%2Fh4aFniepWNVJokmXBTKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnsGw8CoyUftUNCP0q3APBfn1RsMs%2BK3sSnWoZXsr8ulXoov%2Bvj7cQL147hgLAAw9YNiPxGYrLsUfPFvDqR32TBQjwjvA2tJfiOQlzHu%2F4rH6umiYT7wfFI9txereXc9MRhPb%2BoyXXB%2BZ%2BazCsjSvP9AI0QNP9SbdXzse2mLq8fOWO7R3sUqJJfBQUuWmxMvqLT2QEqhFkUXNaxZrAGbu%2BYN15irs%2FRIaCFoFfvnyfRbNbfoLstqQjhsth4LsW%2BE2mkMWyLem%2B5d16X8e3PP7OZlKC6htBuzS3z2f5zNG9L8qwOSGc4zx5Gwcw0%2BbccspP6tG77bpB9t%2B2YW%2BLaBaEbQTH6EiKGuto%2BqKF3R9CqhJMjEZ3YwRa7RSXjFmqAOmqafPv6U95h7Dke0vNZlepxtYU3c%2Fu9fdlTVeeyamYJvPZ7zg8WQyczLuA6vh38L24JlPUz%2Fo0dEW1eIx8OaHyvU2T7W6un0ktEkpWNFdhw9xaGfnbzreiuD25pr1N8oGdDHkrjl7uwpHI3jUqT4jOKCaQXvD9gx6tpEDf36Fe1enHQWVQn9thrkP7zX%2BYlWk8qD%2FueueLxkwAgP0Z4mMDOCrWPQCfDw%2FCR2THBWmk1FHf9bLeEWrq0wzHMOwsnQ9QLSS5wVvgA%2BVkZjDOxeq8BjqkAcMmfzyvcuQEMeLr5%2Fm2yz7X%2FMk9zlp9zWjidcswoIeSk%2BcEAFyBR4Jnyi1ENNZOF8CjZu5b%2BnykzuuCu0MbiGjxVFHB1zL3opypCyaHEAGWIQ9ZDuTNEiuZkj5Olpm8UTPU3auY5iqrAmHHoRXyrLHGOrlSd042bb2N%2FAerR46OBxdLC0%2FGZoDmu37rKCG6Z7BovfF3UunOg4eepl%2FfLG2F9Xg%2B&X-Amz-Signature=0ca4d9119cb73ed15ac61891a84e67c9d9414fd0c5419a368b8d77840ad1796f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRQYQXG%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICl%2BAyrf7F5lprd8QZ7oALlw5AmmKxJau0Nfr2829VVkAiEAoY1qmL62Wi8dtIh4MxieHWeH3nBTPmxp4pdA4CzQwRoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcJdBvf761F1Wj%2FSyrcA2DZJwUWIdhSVl7cHQ2pAjtuvaZbvXF3d%2FOTb5wscZp4hl%2FEr09poG7hplZmLI%2FTlJXs%2F0LEAjlj7t8cKNGTVloWzc%2BOh0UHuecfbOCXM3IEnfJDDXupdrn1TjguP1Mf%2BgEE4LltuhmLfcAAkWdYR2GAuEYaeJpulB218DjL0YYYR9XFX9RIv4kS0pBKj9kV6RwdeBstDS6rdtCgevSq%2ByQsmZjWZ6sLnE2Ev%2BnbbhmCSoOlbLgd5VgpH%2FPaK9oQuxi0WDht5xj8dNQeLKkbUNYdpr0Ouq8GdFy87fww8r3i2zSh0PIcJbCRPsYW%2By36295xfxzzW%2Beb9QafqFo1%2FUAi4sR7SK4axIjdW5wvVg8tSl3Y6k23F4Pb5wOv0kaxISN2zeATHj3uloXx%2FjznFgbeWbVbRwqsfGoqRb9S8RZ0UIsons68KmWyrZ0lxBQ8qgD%2BZ2p8OifocrYZX2khgy6gDnb8f44nzq4VQL65U0teMdIo9ovvYuJu%2FMTKIkg%2FthlC0tCD5b2xxbiR4qZ7noHYBtBLXjPJ6WIbg3YR9mcstyecqnqPad3%2FMLrDIAgS0Y8%2B4TpyKJHQKJZNalyvGZnXMaQ7qM49s3H8U5LzAFrO404hOY332IqG2zG4MMrG6rwGOqUB4k5Ii4TphtX9u8kXwK6Wrr9bWf2mNJztmgku53AdtOJtxnZGXSRYUf8GPtVJhl%2FZf%2FOJV%2BGtHP6GRQ0jVEn6rryXnuqhjh7mEFS7DY8rVcmpFgR%2FLQZZhBmoMaZHjgwLX5fJPiAnH%2BxXqYkkrX0BFJXSliSkCYg1oa5K37YtHm7gQlsTpGeVEVkh5BlGr92h8NPW5pSEa%2F8H4QKXC1lPPHObNsc%2B&X-Amz-Signature=ce56b79d79108e2f232e4a37979ef0eece21d2607e8fa633ceb2bf175ba1886f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
