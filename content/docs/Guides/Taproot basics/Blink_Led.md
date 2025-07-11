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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6RB2OIL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F34H8H49QU%2FHKij6gey6pdZnWH0bwcIvQSPm%2BI9UjLAiEA7FGuEtpNd4ieK60Itug4jUOT82uKRLAC%2F5AW8UVdo7EqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCq4Pej7AE1UIjymyrcA%2FZ4Bhml85wGh8wZM95MLJ3RSox6kBtZspZZe55dkGjEjHtOg2mPL3jJToSihK69DMg3Egye%2B%2B5U%2BWeyjR09YO8iWlBy6%2B4ye9WWBfTtSjE1VHG6FWTfvj7ebwECIIlzeSpUtz0e0wLZeI4Vnpl%2FZchYOyXjz1YZOAKi3DEZFW6eWRiwvqnhrxM6stHDKNe0mPQnTBJgWQwgjPRWWpt5j0M%2B9mt%2Bp539CEcpsQSnUstM3igdilrz2i1dzvM5%2BWRiXw1bvO3i6MXvnqI6P6YD3RFy%2Br%2FRrf3PMfsXcA%2FnNy%2BejxkTFjoA5wFQG9j%2BU5H0P%2BTZSoFGVq6ZCswRZRk%2BzD8evIxSpMc%2B0b6d2ERGt4M%2Btd6yuhsUPsKhnb4TRQhDFE0T5FF3x0X6Ib7i1Ibl%2BO1aeTJNU0A3IGcb4AGWZBq3rCONsx3VekxyifWWTtJk0b9McxiiOZw80gdY8MMDPLgHHr2ktvSmFuvjGu1VZw1G0zxf9Z9jhRy416ZGI5JG7flPTTrxJbq67h8dE%2B3qt1zMB0VFLyG3dosqD6%2FBS1hRiJ6C3FIVWHcWH0IPcHwhEpK5TjVZemYs%2FdwkjFOeolj7RxIAbNWiomXSKz5KJXpbBZzF8rxz1CaJFR9zMNnUw8MGOqUBAWS%2FBQDpTbArO53kPXmYHlTJy2pDlTVVWPcb9aSesEk6H%2BHjrQiF5dMgXF3wo2BzNGgou41Z0GHXv%2FS3Ye%2FB0iNrUXtYJGzZuDUirygwuZPNxgpNbmUEJLny%2Fh0YfD3Ufh%2F2Cqiio%2Be7QJxx3381yr1Gn5y2hvPFfyPOmhxjclmwV%2F6aAITmENhiTAlOsRYChXKMc4%2BZo2Dl7RSkUG5B%2F3BU3PI7&X-Amz-Signature=6675e6a4dd303d1dfd88b7e7e25334cfa0109d08aea6abf3de33871ea2488252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNM2OOI5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgT89TpUee%2FQK3%2BO2%2BmVQJBmSKa0ECw3KE9gMY3TP9BgIgeeJcBJt8VI1%2FvzZkhtuX3SzOJRglvzSVJIswsC3fTdQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIsNMnryXbaP2puaeCrcA2eWDYK6SW6U9PVzuqlQV%2B5DcJQQT%2BXDBag5F4DHCX3K0YETJ6Vxns9illfAGdqIw4RV3LuG%2BaQOJjGzbZLs3c3wTi1c6g6wrQx85ERq7%2FzmePISCGkB0p1cy6gif8DIKdMrROEtsLeVZ8moervcRvPn2n4A34uuf1qWKMvqhDp%2B5Ue4xvixVngUsX9Wsr6lO0nK%2Fye1Pv1suvMUvXZ34CgYAaeEQzXQ0bZyqyUrb%2FcO%2B0oMvzZZfvmvLe7iAiFbRe7436EKts7aXeYODma4wAAgr9FTlJVgs1TLhkg6GIV7Y7yfukqYZRCKKZ%2F33dUZREXqRM%2FwyTPmmMsBPLE57A3FwslfbqvSUmjp4rl0x%2FwJBdmPuA3FZBJ137zFMKo1t1ZjGzzrkp5j0YMBA4p3nM3peHEM7SY5pytlxTartRsAD4L0Bwhg%2FhZRy1p3clB3N6pChpd00fSj6afL12FB7ZcbFyWSZmv0r%2FG5ijG%2B0FdMlKr37Xh%2Bhy%2FP9RB3EeIiYSlZ4GNomTNCR2a5oFCdnsgm47wCQn8ivGGIeHuAm9Xs4QellV3c%2FDXwD%2FUPxyoZfUyEUqIeKzx7LVrDzr9ITPObTaMsSKtJlrxtYOR9b0GhQs9w%2BkCkqXw2gcwgMIzUw8MGOqUBq1gPTGjisjte4YSPSvEZuEXMD%2BHdBGZiZ86pkCOYbYOAlqqV5lgLM%2BWRFNBcWA8xL1gZBMrxD7ejopc0qWClsrc3WayKA7Z3PyoCBES52CQNO7oeTskLXuAghbZCZFSkMzM%2Bcku%2FqAy00NmmrmDHF%2B4nSAxUB7vZDQwMNmeUJAqgqRjdKIaoJRGxaQevqGBkYPdn7ekNSI%2BEGeIQSOxa0Bp93kTi&X-Amz-Signature=e3787d1d90a55fc82101a443bd78d9cb5f2fd89ec9b013503c5c5a2d33c21984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
