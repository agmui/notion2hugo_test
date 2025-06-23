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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D7QKPTN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCaDAcX8bJewf793SbUBVcgcFMSKvHB%2FUhwPUX4jN2kkwIgTj99zPKjpZfft15V%2BYCSeKanrdBhizKOAcbX91wZcbcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkl9%2BSxnzoF57MjkircAyl2Hdabcc0v6%2BJrGBLfr1I5AM6DehTpKAvKww7pJuXZCWAnZMHCqDxT4vbyNvvBAPTkSt6biQug%2Fkr4M3m7YfAUKC6cDsG9UhkoSJal7x3B0BJbDIeF5bzpBHKLmicr%2F0Mk1IPvNtWu6NfF%2BhvKPqFaMgZ4tdh%2BOotkWY7OmtYzDHWLcI78JzUFrAj2psrxOA1fNZYdrw5qE837A8GWI%2FuSuTWZs6mv0lHNuG95WeeSLZuUf2t002nHdHVf8YBOXvfrDrSRkq0XMcQ0V6Qhyhv65BWotu8WikQ5N9%2Bfyj9zzhlQ0JJ2G2qzzIPqlRHioQCb%2Fs8YwqsohO%2Bu7f24uwJg%2F6NTYbRGxZ6AURokxjZ04Y3XPyX%2FlTLuBSLCtV9FcYxU6%2BAojLklXmE3Jlavyi6YPnE7YkbAMY1lx49fku6X1o1WGlUQICdS7fbfCBM6%2F04QX1GY3JXEEILD7a1u5u39E%2BlzKIjmXGyuRpx9OJcOtpq19p1Ow0THlCozbSd%2B0uh6M2FWcr6VH8YNCXlEE3mJfy2pj7BD4gMhfsCdWqNQkkufPbkPHCVGPiSq8l7PXXDt47GHJtTjrRJZBVaiZObhFpJkd7P4l9gZP1W%2BFSjxgzjUD3ehSicNuDvZMMSv48IGOqUBnMhxEH9Xxh9zFHzKSKH7lNdXcEYY6w2njqKB5Z%2FCpLQh8jVfZMiYZSS%2BZgxNJKMLNMH9iV3DO9pjzpF0LqP%2FZbo%2BjUsz4jQn5mEtLMabNzmm4%2Frx5SitmsbfiLgrOc7oTqErDUmrSCW6Qe7wn7l7bflK1tEvYXggt1onhp6infwD5JWbsaoe1MBmgm5S3d4hvWLseHLd572VuBRLbWMPb1A4VK%2FW&X-Amz-Signature=596d33488fab11918471c1aefb00ef34726c9c3650cd5f83ab3605b7147e2b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YFPV3T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHB6Gyr5tW%2Fn3NiNCsdcV%2BVX5wYhSwN1Y56i%2BImceWJZAiBbNJboqgN%2BL3fxP%2BRvhjpxnhtsAbsw8mkwCd3z%2BWAOFiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTScWK%2B8GZbAL1o3%2BKtwDGQm6sx0yIwSe42o6F%2F%2FtkM6ykzFT3tkZwiDJI9IZyjqWP0AnQDLqQ%2BoxuEeE4OaQyMoDLrvhOZNZ%2BZxbuVAg776%2BRX%2B%2Fbp9Bruk1hRVSWMa21VRNbGHCO75uH1zAhJ4%2FVlpFZXeANoxVmTDCW6cBzbDo8hRDJTwq9%2Fgv27Sqt%2BTw0%2Bi98xRMDVOAYlGabaqLEZL%2BQfEHMNDXKmlf2Fd04wnBKW0fsSYXODep88aZk2QeFhkb0wVS1vIVvnx2vfUZwdfMVFJZAGYQscBx3KbvGLeBYNdTs2DzAqPkAiF7de5ZB8wzjzwGo7eyaPqF%2Bi6pvCQsfUI7kjE12oRmR9RPLVhT4hOshCOcDB1hrKFOHdPBF7aijMzZVWMTWmVTpJYAendGHqq23YJf%2F2%2B91bBWUximtdPOUzpPoGnmNrQowwtscRgBIYyL8ATuDLYxCiWdxvI2NuwJlN40SJy%2B3JZB3DsKhQEF1iD65o5BLHl3oCb8M0O%2Bv5FouPUj4stotrIDtlZAN4h31BBreWtpOc9Q%2FSHmoPlsqCAsBmGcfjNfVPQMzi%2BQH2K1babsg3xxj2PY9O8AsHbeNzSdhXwKSCXLugtu%2FXNk2rs%2BaSrITpi6c9DcUcel3zg6dULBEHww6drjwgY6pgH21zgmfSOl6YIDCTlckGbM%2Fp9fkYURVlnmIjaRfXR02tyBw0mI4RQhpTcjCS6rDADNejuXaTuENzdzx5ADt8HAQu3GyhEP0%2BHH4yov6Gc56n0w1dHHEdS%2FkAJ8YBAHI4QrElMYrgU1qheQpq%2FFs9xhpWGac2YJVilMrXPFhbFj1dFQIGgVLHV6%2BJl05%2B8NxgaEitYpfWz2Lm1PsXPnnfkuE20ViFtg&X-Amz-Signature=ace3ecef9497182d8184edbf935404c330218c1924e1edbef70a60fb4c2cfb5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
