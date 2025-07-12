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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTD25VC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhu3gd3AspfpE8ZOrnxYJtsvjxLlM2nnXvPgw7E0%2FKjgIhALX0iCxR1LTLYm1SG3vYGE8R6HVRY4YxI8YqRYODe8DlKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2EVPnMt2m%2FRp6Z84q3ANOBth%2FQp3xKASk8CAxbuSwQBrZs30HIxV724JTSo6OmFN1MRUakTqkqclEHzbs7eoro%2BHKvdqXjCzw%2FIpb%2B4QaLUpJE5JznySOS7m%2Bmb%2FstGiEB4iSkZkQLr648zgHa8kvv803Mxzu7hDlziTWdOCzA0qX%2B2QJd%2BzMEWaNDt27ip%2BIdXwOPnwpYw2Y4uPu3TiyjONnEO0lOUI04c6KMoDQuBm%2FEM9l1F%2FgKIFPx8q2Qj3MWgsB7IcWcs%2F7tvccDvEpgpLTUj6FYmCqaXpkyoG6APy9yO71TvQweqjN5bJcOGcE1A6mjctupoeZDFQAqZ%2BWDkhQu56KQJLTZLKVFnZViV3yQ%2Bc531hvlCvXMPFtEsN9Bo4Hi510OXIBp%2B0bFwTvWjtEfb%2B5wmTL6CiRp5gIqOmfOtJoDgG7%2BK3OE0AD1pzTyjg2%2BkS7ous1w7W9iwHPDNwRKlzwY6RnCFgtcZh%2BYDc3rFTkOJLgTYi9zBlRikaNO2R99%2BwImTnQSqghI5urERglTup%2BRinw4gr6HoJWwKYXZALPfrfRpMZBD8%2BCG7qqfOG1hSp%2Bp0sDmjdfwXE%2BaXjVoYxWtgiK30OJNgyFvUcjAjlR%2FpioxliZCu1T9LyQWsqaxtSKrFSmITDTrcvDBjqkAaGfDXaGZRWxAsYfQMVRBI75%2BK6%2BInw9C%2FJlcvxBIa4QhefqxjlEBGbwaR5TWN794nCQprEAkL3diBnGsNpnZ%2BHiDq022Smnk5RPU2jJMesTFB6XrmU9p%2BmTha%2BJjEyXaHMvjfcbkRQ%2F1arQt8Y5GSKEkf5qlgppWYBo3KP%2FMI6O8zE0QeEcj8JTTSeqcGEG8oNbZc0utwRw2KKrFJwn2T0JMFRj&X-Amz-Signature=409c149926179ca516786b8af3bc802f55b54be503556a1564be51feb8f8421b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ELXAZQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY4LL7Tzfsa1ZRe4wZYswLbL64JKagl6ah9FfSX94uVAiBY4CmJw4raflQDCaFkBhJAPLOwmon62A99NqFuvOpV%2FCqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOaAGMpmjX%2FXAg5TmKtwDYjL5lXyYO6XDY9p45I24rLAy87nFg%2FiGhlU9DRuuA63fJN6WjRE1d99kolOIKkNVd4z4HIu0Q9cnSiEftBKgbsLK2n%2FBykMxPQGI86h3nz7EIEh8wJuZjtN85z3LvxMKTOoviqeP4o8Pyeqk5azjqs02S7RCziWmbDqcOCFW4Zvlz%2BVYIrP8vvXUf4Ggjw5ieyYm4aSzVBAcF4jF%2FiVbktpFN9ECGQ3Bnjc33rcCiAIEvH3Z3SEnNtUWpVgtiAVf%2FsnV6SrgJx0mGamc%2B9vpUMO0glYYoRT%2F3OQOHPQEBcllX%2Fm5H8jZH0hWrE9Pjlhn%2FZNjwwmlcI5V9Mo46IJuU2s0IRM1t%2BwpSBiHg%2Bdm1kgWIzwrptMdteSqed6xcZZoEeUaIJe9FwtvjFcVLSaW%2BgqFmkX34YU4J7wImRnYXKL9%2Bvtp3gzy1BfTTWwgypXdcor3kSYODnWZGQ9Z011VPOly6Ku7icea3vT4NnRFOrjU3X4hSiucYtBsedqgqrapJ3Rguy4xeLfOLfrvXJ%2BLQrLY1FS2H6yQTMzXY1DCD524hOTujqcoCVcOpMKJoI8nzZXA4apZb53nvcAQm0vT9y%2BtHmmkJzTmG6KB0WyQm4KNWdm%2FDmLLA1gRtcUwtq7LwwY6pgHULtPt%2F91057nkmH716lq04SPsj1eG0v0dS%2FypcQcScH4MrAeb9iDC2M0fhEvxANG8hnmXA3cNpRxH3eILQujb1pDQdfuSd3CZIj%2FCW6k6t0K1b29cObbhlCQSGqgJg1UVHUBjAo6SBxqkWp6gASkxMxag1rrAQagjSSWt0vrmH5XTwoyAaZpK5YMLZR4V4D8Hr2P5S3P%2BPvZapF3tqKLsG7jI6SLz&X-Amz-Signature=d33180a9b6e746a5a1e903cc82f9970f03252c57c4b5b7a37e09b22e3df33c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
