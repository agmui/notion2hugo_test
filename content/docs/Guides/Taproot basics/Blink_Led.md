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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNLUU3MG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUx%2B%2BUKhLKI2DvyNI%2F%2BH0DW%2FI0YNoSa51QpCzA8hW8PAiEA2mGSdh8dIS3rNqKRPb6Qf%2BP3kKEpukURKZv3MnYeX1Iq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIJ7AQLWp5naJ7Kz2ircA15I2zDOkgJlbmflgg6WLL2SSk9zAu57dc5rRiVqqDIe086KKnRvcYvy6xBTyAi7SOtilg%2Fu4Asa%2F4AuhA8sudDJ0ZW8FEI846%2F35obmrdxGElaBg6PNDIPV99DByBX%2BFJP55NLHV9r52JnBIMMzG%2FcRonZRPtt6cPZdOGi%2BH%2BDCYiFt7zVYEYLMEvozLLm44Mzjwlc0MbNZ9ekHm4TKtz%2BtwlRgCT%2F2iSMrpM0jj7k50K97hkcHkeQGIq6EGUaVI3MO9lZJIWfE5%2F2MqOw3gqxibBgECmf6hZ8vDLFUhY8vNymLCj38ZUgRH4Q%2Bo4nd9sTgViqWbtXkigu1fUIl7%2FAchEvnyWnvgAmp5r2w%2BhrEnBSb3dXtzYkbwB5TvO4P9pKC6bQWmjsg0e7VmAfMndqsTLtmkJbBcuAb9W1ZL9Iy%2BB%2BOKVzGpTpS%2B1FT58nhIzzgZsFm6gFAoAJGYzcUKQiIdSYWnirWwJWLJCehv0xoVSSTe7z%2F1yxk5AnoGmuX0W5nReB0CPXhUhZLkciufTjHWiSTM5rygqBAH3SjDtpqbGdZ4NoLXnbkM%2FwgYlI%2BuDBAu2c84h8cHH1XGWNBuGQfco2n7VGQI1pE0148NfkXG4Pz7SSMKB9ULiL0MLOr08EGOqUBA4pRRU4BjtIlaiYyq%2Fg%2B2eRhhwYHZNktznqqb8qkHghKE4sI%2FOwGpmfEU0JY8cxMtTp%2BOqVDK68QUv6QtlSCEkKZLFjm6WmCiDQ0jl3gvalmSh381d3TURxGrKJqjjF9joBQAmGJq%2FLzrVX%2BFJ8%2FYjKuB31BAxtHqHqb9GtxzfPYQz6PuTUxixJZNVX7Ed1n78cHwhZKFz%2FtYwIR7TK%2BWxYRX8Y2&X-Amz-Signature=3d185fbdb5016ab4f7a1e520d9d66878654903b2972d043bd4f26ecc24ec5a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XEHO3SM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpOZqKjoqaSjukvKRZ%2F1WLOOy8uKXB1PkACzwasEGgNAiB8Q4lT8V03REbzgGBmIF6AnQ%2BWrDyYopYdxwtlG%2FvZySr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMtOo%2Fln2hHAzZFwpQKtwDkI2GvQClPDN%2FYXLuVJTqTsQLu0ORdbPYm%2FggvUKQm4W9jRP0eCbtHAA%2B4x3tDd6alAQtJT6XWAFlmt8foW2IHP7eUDvSTdu%2F%2F93EAYKjhm5yIv7fdMQ7cS7Nj7vRT9R5fEJ3olYVmxHIun%2BKJAltAp2vvMbWcrnyhjbKzXHrlVZbyquC2NjU19aqgRGm5UqolrCGn2qJbh8AhSyjw3ZU0q7wXJwxlhLMy8utZ%2Bwaz8VBj4u6sYWQloza2jJYr0rXzaeniC7MuCBGA2VCuCggJoFFVrtS6nXWKZbSC7bRIZzmiwRtfPK%2FPqRmQB8cENCVTBoTTeY9qNaV5yXWPOiTBkbrKHQQPzmDVioZIdnlMN0gdiBeKR%2BpEo5BL9HGREyDrKNVL1%2B3eDJcnKfa%2FOunvG11xYZc1vAFHBCBFyKTkNPvs5fFI0GyLySDiEsnZn49yxv476WFQyhgC5Sn8Sih%2B5Dx6OC6PSQrXi2Qm90Dz2kR7wcp%2Bw69P1Jvx9X0ymK8N6bcCmiQuCUnLBkAxiN7pIBc4wuqeiTofXCAr6Lu1t%2BJaAo0KzjyYysbMMETBcRS92xyGeW1mSc5y2ebnEAMbwpfqEFc7YhpV7NB2h6DAkbhjK5V9Q7uxbnGh0Qws6vTwQY6pgGzqwoABrL%2B%2BuvOi9TBrmmk%2BAvnMZ0unxVce7f4903j4onM6qTX7BVzPebXlOQMbHdKRSNMQwEjKY0beiR43XbH6%2FNiq6rMhULwjEjA5B4yqM7JCONO1vNFCrs9wFcie0wjdevfwagYQSrFR%2Blx7MmrzfriMUpIzlRjAVicReRDnVZY%2BTeyRry4pkvv1dmej0Hv24rR6M2gDe3uX1NYzGqDp8I5OgOt&X-Amz-Signature=c7c8a58542719797896ef1b9791fa60a42414866b20e437bc443f18621182bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
