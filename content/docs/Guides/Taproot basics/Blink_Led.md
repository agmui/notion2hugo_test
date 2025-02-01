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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNXUFYYB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErZHmegkspusE%2FCkjk2KH2NJvidINBR6w4fxaI8Td2kAiEApcZGrbDk68ANoqnbtoPRJHGsEQ4zFbc%2Bi4RkC8uAQwYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi4kIK2IN3n95AwWyrcA54ulreCZ9Pw87ccAL4WRflVSybNxaxtPyy3QJ7BQRWpPb18uQw3PL6M2MesX4YGtsxa7v8Xm6t4gBX9vwUczWpQF%2BSGA%2Bg6oOy%2Fa2i2TuqLmZbhpEQpGFuEM93IUH4uQMcc9TBrfU0fBeYgb%2BNII5YRE7WoKquHO5EB6Q06IxshGJnm0sa30ad8RyW%2BsBUItFFj0g3PC6CVqAnGy1n1oaTbcku3DNA2S%2BSSSCz%2BM%2BgC49kTCaTvlM0fd3At6y9ZLpI5p6RKgTOL9Li1NeYmEQdQEDiDQJ3SE4wkf8L8I2Hny4QT4pggIxIOoFiquY%2BAK3lnkm35qHk2q6FSdEExl8lcduCcXgfcFqf7PlyS3lCJSJXKMXeQoE1XzlaL8J24qp4TMcjSMNdrrGYtGOW%2FF5JwdRLHTFlEWQ641GF2coHfUeSrABP8DnTb4ghngDQCDO1b1RSI5n%2Fj0j0GhewsSwIUt8BrJtE6UNquxnmDKS1cZgpZ50N3374EUaR9KDdEVX%2FkZJWpILztljT5GdUJJ5o%2BFztjbRIO9emjGdb2ditl9mk4wgq9qhmWQ3ZTleXhGZZtGskhO7G%2FKLofG79Ef2%2FnX9c1XFc5dojY%2FLiABvhtUGrXkIK9JECohTNXMMPE%2BLwGOqUBPqfKYF6HPwaM5JCwRi3pitEmhfj3y7WhbanpEMWR1mzoelmvn9hfu%2BxaWR10Um4US64vpPu9kD4MwiP2snFhXpB3SXatUO3MKo1yczipqrZKlwHD3bYOMfOm0QXpS29mMUWZEmoYi6nE7uofOn5t6hDWS58ZNKzemN%2F1eQSETpCC6cS6B1co3r1n%2BmsXZuKgr4BYo6hdQYlz4F6i5%2F9Rfvv%2BDNjF&X-Amz-Signature=5e52d032aed10c1390c94fd6b9628488cf322be1d7a74fd17f66eff70f881eef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XM6YNMH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBiPaCAHTbbgyieKtG8p4fbZKlrAs6ZNZYBukuV%2FP%2BOgIhAP%2BC0o1su%2BAj0nx0l9oUIAHMxcXMMwxVnJ%2FS3ofNpWcSKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcvWAvTG2%2BTb54GGUq3AMNaHz6%2B3HullbYZi89AvWR4JTf1uPn4nLMjvwpd55Ap5OfMVpbTdzaRm4keby5kfut8OxBNwhNC6NMWAYahuvVoZMgyqi6PAJlfu4Ai5vNF%2BQdVAplWix9HHjpA1uGnnVLh8TCFjkVNuYRNneJIBGbIojW0ySMst5ZbV0Gnr7c%2BEMMDvaSsTJh4avCRoRK1vxMXfUn4j%2F3MPwz2rGLw%2FfA%2FQ0UMae40bcq9%2BlkACYvRHQqH1iNzny3wm00n4CSdchWYYdjWf2hUmrAFHqICKeNUV69Z8fIWWEnVpk%2FWkDJbW10Q1nhYDijYA8S%2BCWYPJZydptup%2FABhcgRAhJYK8CJJsFJRTZgdgIR39LMh%2FAdGJRoI7qEo6wEvHw8ybc%2FEXK%2F%2FtzhWgy%2ByCLNYe2Y2QSADwhYJuMNkQ2qvko6b7Ig%2F7KdXss9aJYfWp6hxjr3iOETq5t34dBbkFFqzgjaq9osfez6gIvtO3DmKuM1umUxMaTconhTTUpVPnHhx57tlxeCedKQ5%2Fddyp8PCsdq6B1QHfxaEzcbSCSBfos14DmMlEWjOd7DLPdWNpSQYjh8PzBTzxvoKw5hXiJVvVyAJ628mNyE2WqdwHMhRg8AuBaqMLRyOmG5l5ZKkgkBbjDmyfi8BjqkATmWq7QMdoHG4H4e1mNdxSAmWvy9U9HWAc9GN5N%2BYnldlu%2FhhyoiuEjyJaYL%2FPxN23IQnSjaLHR0S2Up9JUeOTShjU%2B20WARlJn2sT2o%2FHwPBCvyyeK8%2Bi9j01ZUNdSv549jtrWQZQwur8xB66U%2FAlanS8MepEwK7T%2BEjfLc61uDeWuKPPgdRRNsvA%2FK6YOl%2FHl2zfcepWwEgfbupaQiNUfxRIj6&X-Amz-Signature=b14509e1cdd55be9304b764fef986c458ec1f23d841ce6a55a3000792b65b8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
