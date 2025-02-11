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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VYZ3LFG%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICd7RhcEZQa2n0Jf95ypGvYvcuIHC5MtnIEXck2fNGHhAiAvfUTPFifyT0df7qtB%2BVJadIkL866WoVx8ly59AZuW4CqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFbhUXc7pyzeIkXmIKtwDUOn6Cs5ofMWyCNwnBAIzqv%2Bpeoba%2BFwMlV2GOQkMwil1T11g63lUHNDU%2B4hPS2N9t1jxRmwSUN3TzN8J%2B1K%2F%2Bv2WlESvl%2Fbz%2FYOq87oeLiC%2FB9KCNUY0z9pLqpgcP%2Fh1CnaqHyXhdCpHo6zHSBZU99sKf%2BD7qW%2FFgfD0Jzb%2F8S%2B%2FMpGSp6UPsVx3LUGD5t5H5SzDJ23m%2B9B7JqEQoBfXPbiWy5fn9SmigT810sumc%2BG%2FAy%2FhkRjC8kruMcVoKk9oa66BEM1h4ASfNsfmILRdjJodGR4Zj%2BqU4V%2Fq1oaMD8eCynAh8D0Vf7GSfaRrXhZJ7j4qnClPQhm0PReezc6C9qYaTQ6LXm1sKavsk%2FPyeobH9T85v22SgFI7GEfsjbYYRj3VtKaTfOAPUDqVJWDsS%2BuVxHrsAKMcA5MOVqmVpoD8W0A7ill2YZkOWBvl%2FoSb%2BX5Fon%2FlhCfbUbIV1irXRCz7CJJfaD5fje4NCB2xmvAy9E1c2IGgWSxJBAw3BAe6jsUQHB6AHzM2g8m5GL0%2BeXI7J3d086ep3Lm4Lh3LrXlQqaq5y2N%2BXCiiqI4wKzabPb9h8nCs2P9dGIJ1me4diEg5%2FpAv%2FY6Fkp63ePjozyG7dGu9wblNS3IGpFIw9siuvQY6pgEO8mAew4Xb9jTRUzIe1GNGY6qKXB68jNnD8PWr2ckju%2FPmSTdZv4Sw7GJ6QNeqrCSNZpsA4sTeyLDUunuV%2BC9Zn6nBNK%2BT5t9SGVRdIN4p6CWBjhtsVppD2C1M3qvPJ0C%2Fjbo%2BvC7cNz3qBfBaVSnlC3mmWWeQmlxJmzD%2F77UD1nv6hg0VOLJp5F5JkCKzQDT0lEnZBLPqP1S9f6Xc1qi8h9%2BEV0P7&X-Amz-Signature=6e177777cecefbb2a07aeeeb226bb9d918a5b5e94d6af798ef2a481baab55ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXZZKEN%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7jkLFCMbQPWQS736PACwmEkJuaQeQbda7w3GIaq90RAIhAJeFQ9h3Ufg%2FfjbhoKJFzX6%2FxrOIHmtmrGgxcCToDCQiKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpfBbgSYo8zDjkYDAq3AP9VIcaO74HI746fteko8zlSbK0%2Fia2cGv8yDSffguFT%2FhwfR%2F0iwR77ctCDB8s%2FzMBx71T%2B3a4iLQeILTjcrhzWCikVZuB2zR8JIf%2FfqA87altTM4ksUXXJoFFFjq2%2BPv9%2F6Xp1JA5KfWi2coQJ9Qy64Fi9SGg%2BRRp1saEYkzimQqB%2Bjpr5GkGcTJtlPRkJIMWTqqnxDewKDP5sAHVmyrrlwuJEjjZyAS2r7qLRjn0B1DHDed389EnoYLXGVHG6fd669HCTjJv%2BhZFu1Ag2MGOJQr1zB8AhLPNEKPIe90SCDg1wZ6PjGXn8gKHrh7OiGWAtHJvH3LVHObHHaffrLBeN84eiA1eThbooe8vRLqQo2DigEQLSe4NoskvzE%2FxNUM9O57ERQ2GezWbiNq9xu8OA4ftoHion%2Bruuf8UyH60PYVwhCGLQYXUIKHUWPT6jEcNVfDMXMJKn7qnQx9dSUbD8NYd7YERE1TBxfR3%2BMVqGc6YsrijeD5hoHv8cUINK0JoMu%2B8AuRfcvSbO8WVY3ZET%2FiH8bhyX1oWXslHlj9xwkKQYgw5HBW3mc64OtNUmf%2BfJxf78Q7iatbKCxhCh7tNnu1%2BBKY11Pzl9KJOt1UdSsfZzWG01Mjm%2FOZdojDhyK69BjqkAVdkJHkR6lwMsxG9WY%2FQp5D%2F4GaeeHkVKZDV2%2BKgvKbPB0SFuNJPC1ke4IpnZBBpnhT8oHiorfqoXsDRMM0ElWVd%2FARtfWL9B8Kw2ZsoiX2lZauQWo7ZTOXrUgkM6p9%2BkhVrIcDYUXQxIC%2FCzF2766gpThYVQ6FOrsIVIvFPv3SUM5utbUgC75MJm1VgJnzc0Tv5U%2BjFf5Zees2iDw2I619PTP6a&X-Amz-Signature=c32c61f5f0e9167e046b1809baeec852ba6240811598a5eb2a0d8c1d583e1b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
