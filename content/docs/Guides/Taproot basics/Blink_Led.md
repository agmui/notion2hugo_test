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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCJPVH4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdwkZQ07WVATZjmL74VDhEcWIgEepPtgXsCInwaroGGAiAJZLpH6YeIF6JLMgQf03RVL0TcdBpdH9WgJwDaoL624Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMSDkQH1WLXCiO5pafKtwD%2FCCZfYAq5%2FjsWM5nadznhrrvTqIxjasOhXNhmDaURKIYoh8ETFEjfvKlI78rWMvdu3ApTO6bzjFGUn1TTX4MFJx1TT2Wl2mKA5437SLJVPNoB6SjUx73IwfJ62TdMNwpcFOG8K67j3XhTSAIVQFzMrb7cxzIgxy2%2BYJ2nHICi4mfczAfIorJkkqnZDDuXUG10AAqnfgFg4%2FHe8CfibSbDlq%2FrHutBNZDa%2F10Nq4P7v7231UhpcJ1ToFfvUZ6BI4Zp0UlKhNFhla%2FmgCJRWzcsIO3NficpyHGzXZRYovkvuV6zZpyyIyyBuvYjPCIIP%2BICCKKFJUvGY151kuglaCChBCdnwWgxRoEPO092HWt%2FDusOU1i%2BuS3VR%2FtSg5%2FZnXikRAp8WkGkPvdx6ttd1mrM6Eao2Sy294W%2FJkdp632QdXPbvBuJtNq1RK41rNzaZDd0w7IHsRTOBF7548MpBxZse3Jc5lBGJXTRXoRH9nDnzt3ZwzWRLcNRay%2BsZ9f%2FFmibGnrznkx5Hy%2FenXHITrYh4WA%2FCz4ZOb0RZwhszWQW1Q6qEZO541pWYp0J8Ff6FgtMZ0kNvgIk2jqJaevHcbC94LTMSz2WJYHx%2FdI%2B6zXSsRcPCT9zzYc1AxNqAEw3uGbwQY6pgEerD55gPtQPPSw6G9IWAz%2FiPQiWshIL72C61xz603JzuemBARnBNf%2B7DMGDcvq2xE4HzUlnB%2FH8KRUhXvyI%2FZwoII6y%2FMjgeLFYxf%2FxeN2mI5qqJeeWn8XaF97jHNHtN7vxioHs2hA5yZVyCkoc2c4SUBKDdcFFBgBLz%2BZdIb8IDABLBY1HqG5BbzEiNpFoXTkjEznedKkA3IfYfbSZZGsQKk%2BRIdi&X-Amz-Signature=b915060cac93d7865acf753057dfec284a5f0507c1c636a480fb1155b76e4cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGAW3K4C%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUS7jisWiXtbKDRxDP3x9wRDZVDhLLjjBOzQemWedzlAiEAtgTU2%2FzcArcNyJi6%2BHmSAhbWixy9KJERplZ%2F5yqoYZcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDE5oAz6G2vRpl9cr9ircA0PYT8wdbSRX16oiVA6oCMc2OfmioYrI0JBxD2WjiU0CohhZuFqQtjuDYSWzIEOViLhG1Byp2z8Q3sB0uNyJY2NCTsSVpZFwsp30ZRFdUHmPETkr0eeJ7CNqJw%2BE9QTa1wWEoXRx4GQFlRs%2B%2Bq5fAGefHJEvwEkb054AwyQzF%2FVybSHsIgJ4tfxj4CkG2dV58q2QZ0YMWEd6pq5Yvu0karI2mLTSpygD9C1u%2BYU57pTItpa8YDhT%2BwdWGyfP0%2BXeSAjHF4uCp6vsdf7BzXUtv56AzjPiuw%2FX5EYvxxV4rTNdrZgwPh9b8Gqu%2FfWNISFgvm5HqACjwc2%2FtRoF7PF3b7XZawE4Ay%2FYsAnE%2FuIyPfqdiN8zVZqpSTm2VSZAp9PdigN1NL8q7P8eEn5%2BbdzPOr4cr%2FL0ZAVQljzzO0e0fxI93XNf%2B20kzEUTVW%2Fm4i7ldAiV7f8AkFA%2BzVOkN%2BKNubkbBSwc79v53srh2wZEVWVT7AI77NOn%2Fg6GrYGJtvSXTmFNPcSTtHzU5M7H71njf6lgcQke%2F0PjmPKxBVy3qI4PTBxGHztt2qnouWSKJN8WGF6fdK3ph1t7aEfXdm02vNTaf6cLt7k80J7tE%2FeSt8rojMmVCeSDVi8%2Bjir1MNTTm8EGOqUBtUEdEklj3OBKdjBic%2F%2Fw6Ez9aycgWLU9PY0TUED2etwZJFT%2BoLoeHKzVkxQUa4QWTi%2FCXhaTshplSDZs24Ex555Zcvoy%2FTu3NwYb3%2BQ3T3m2chtZtmYhMBMtJYlZn4nCZkVANnMs5g7kfydZozZLs1nf%2BZXAVQcBGmivdLKTedpn6iAtABDEl4qngwJRgzrz%2Bbs%2FT4iKHXGC4diwT7Z7Q%2B5wprwX&X-Amz-Signature=503785a3cb1fcbdb6ae8fa2c8d253317f13074065247a28c5c0a58d2b3e586d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
