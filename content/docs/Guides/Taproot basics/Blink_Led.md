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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMDLKNLF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCG1Qwww0qpADZlLtUVxkUB61zRlvVHLj883AHHTMH2jwIhAORlqf1Y8HfS9VBhng6l40RDA4Hbk3%2FDwmI9JvO3IRp0KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt92eGfxlAECS6Xksq3ANaRQ6Y6bNrYlV9mWI4YEeUnJvRNNMadX4TciKNywVTavhUnAKGtPHbbmfAsr%2FNk%2B%2BLo%2BNOFfhRRSDjioru1%2Fjcv7eoKwkBeDjL7eKr39p6RBvbGR14l1daov8alxKMExDYnncbj86uggXsBSKr8RRZE2D%2B%2BDAPZsuL07BLnnrJO%2FnnJh8htUAsWIRazjsJk%2F%2FOUoLTZuM46uxCupOoc026VjmjZrgmQSGYSNUUfbuLYUZvREqT%2FRnTlL7vcvbhfXQMlt1SyNtJKS6q9ZZ%2BKdZMmSkyTI3I4q7%2BZdJ1Nj5R%2Fz6%2BT%2BODhw0wMhQhzrssN%2BeJNiznCwVs%2BV1Hokw%2FMVTOFUjYsrh0T4zAXTQ6EB1Ewz3yS46yIQ1GzwOWb3o4vVz%2B6TORITQTkSk%2FNwb5ykOPOu2xH6bsHjVWpTpn01TbhCsYom72m0mYirClmyEHAsyKRceGjyjKPMDN3UKkwdNVi5kRGV5l%2FYHwoTDUnXJI6M7dhSdTnFQY%2BNPb8wlogrrKByEXtEDPynVupfM81qLYdlLAezvYEI%2FvpbOogFLLXAVZGCjckniKdd8npeXgM5WT%2BPRD0cg8NtUpBILEhn27xLXrLips6AysVPha8OlHFTXiuxdtCPxDA7tNazD%2B6e2%2BBjqkAcBNFG1aiyCTLGIAwTiBOmppIUuZYoqZ1cr9HkfkEtRB%2Bxy0HsXF87sXglhWIIlWRn8d38okwosnPrQbmnjhOPwb5zMuIPgZeKoCQjFw4GeeqSgD1uUXJvhkEQ3oncMxLB1Ch2ldIJghCfcf3%2FSnCe3ndyRFPL31guL5%2FQ1U2QFjF4SqYp%2BxV%2B771auG6XMoVh5enltvZFO%2BIyHCaD4yTFDKca93&X-Amz-Signature=c6ce90f68f10b5cd681aa07fbe46de679dee9625c2c337707b810bacc79d8780&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ATBP5CW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T021538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDh1aq4xz1l01ozxHEXgO45ADauhKBs2r%2Fo1uqz%2FGqT5wIgIlEAgeu6zmYi4lGHC3%2BlncPnH93ks3yGxGdNFcP0NHMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpHLolQLb0AlCtNLSrcA26RgyUDLEOrj4nzbWuOS1Iy%2FB5MiikiG2RyRftAJxPIeHAVwb8hzHOcrg%2FpHHkE%2FC9NrUV8IoaOTmpZg65OPKLFSqYiB%2FVdW7ObuIhXIx547lzuel%2BrHYKAKHqN%2FqxRmC4KoQxpUW5G3jIm2jtOd9VxZL04UzxYIViQcJdSvuQ1RFRQqsDGrHnmADQDm6KjzPFbrwOr5hhe7qvuNiuGSIduKYrmsmSqaWcluZdM%2BR4cnm2DrZ1Y7VhHHoN2FZPOcMn%2F4iuBZt3vh2IkwaeU0lOCJEee36G9xsddFRqISBPUgBWQ%2FJGhlPSctIwY%2F264LFirouzUvZAMmRig9Ur5o6ZmZhkJQRpvDpIdsOgjki%2F7vXY51RGt9W6ThvjttdIBmLocm%2BfZzJrP1AJ2fYJ4CP6jWSIgnRsoXF1Oj2aHI6OLIwx8Uc3JwRNzUet4zpCwPtveZOWkkONzN75%2FWpAn%2FaatfpBqCkWXZLfV6XInuxIsWggeKrvUtZ6jbNoKkZVCldopEKJrabyqPCA1oer%2F5IG5tkDC6IPLhNMSxwubMFRWNd99qv6MRjfvDZVc%2FOhk2zvXqUOCEguGDujhhR9bVtVXEun%2FdM%2Bg03dYPkHl0KsPXAlbDIEPxvN7injIMIPq7b4GOqUB7gqUOaRIGIEZby0j2RiuM6mO%2FfeisWyYuo42a0%2B7vbKoBLXWrBT9Hg8B1pH166YhxnW6oIQUdlEml6M5i13%2BzRpap0vzqV%2F9Enhr2X3ITqlRDmH3cPAEHYvlfeg7U6z9sEYbyo%2FrtV557ba5ymSCglee0WaLrl%2FBSSLFPitgrnbsuhGuUUjYwgf4X30xdXql%2FgHV3%2FzrGmBt1WUrPZYJIj5%2BA0kr&X-Amz-Signature=1f6f88d0219123cd5ab88169dd841323c8e33687c3df00c02fa51efc2f127fa0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
