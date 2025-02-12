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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTZCDX5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOvUGHJrIOKA4qaVsM6gw8MI1aCECrADt%2BGHdTs3%2BedAiACNlWpJKTNEWLVOUC8ju6nK5wrJBtzuUvqUZTGahBBtCqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQwB%2BIXcWaQ0GrWFKtwD8XKnQriIHQ%2Bd1DUax%2BHINB3ULB2dMnoQXoGf5BIu6VAZA14J7Y1771WhV2YFFlYxAwDHIucflWMDVcZnDRxqq%2BE72XmdJYCrZNDoNrs5TMfJomv9WB1X1J50EFh9a140qxgLvfNSfU3uB94n55zXERJZiItLejKD84cMAPFKj%2BHeIapu%2FaBcZHqA0wP2VygzVIv7%2BpZDST2tU2T5AJ6dxQ1mO5AzVhfnfig%2BbjF2n15G%2FWU7Jv5%2BkQsP5n8wQXR4KEYZoJamqLDvGQitjLQdTeJ1MFM9JygaUHBDcWFtWDIWVIoE%2B0wyo2w3NCtk%2F5JiWv27Q1X7NeS8Q9Id%2B6Y0%2BSdhFsST7BEetbaN%2FcACzmru7OuR3%2FRU9xlBI6G6qaGENE7e1Ugq5neBQH%2FE4KQDC8qgZQ%2FG3xs9k8CJOFdEO8BDy02tt3CMqbrwJ09yJ4AQozB3W7sl%2BNFhUcFsqLir8Ke71%2FP4JXL26n4Sl%2BmWHdcN%2FmHD2j9JOh17A4qk4FD3Si0jKHZEzeKoB2fCi9wBC16f0ovmZ5jA5uNQyNXz116D8CoRZLaDwGLzsXuDg3FVH7m6IQfCslI5Bazh7KXAA584glVY1QuUgWlSqy1Bf6ETYxh73tOQJ5a73Csw6Ki0vQY6pgGOiG69qdQU%2F7sbJ%2F%2BaKXud4q0a5gFfIGC76PCRAN5ucnUmpKur3iOZ1nZXM6%2B5Ls%2BJLyVL8hi%2FdZ94zyxLp4iVp6IYE%2FCQNG0w9d%2BQ7kzvHRi1GnOwNkHeyXfmKuiSYv6cgcFVril1O5VX%2F0cgzI%2Fb1v%2FOesHK0AZq5rBYzKDLeYXyjnAoisX0XepSBDEBH8rU6NWzj25n4CgYx5day%2FbhOPHrVhrG&X-Amz-Signature=41e67c2cc295abc868627ca281441b14cd2928f9ddcc3ce4d624facb7ca44b40&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGPU2ADS%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv%2Fc5u%2FbKG2lz%2BX%2Bn8bt%2FhOsx9KooghILZ1XiRjev3dgIgKiAqaVQd%2BGVrUIrYaqB44y%2FCZ5aIOSjeSl6wUpwEpZgqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6NpAduv2ksPLzWpSrcA%2BQlsOp%2FHAVr4NTFym14abaqc%2BzUqyNCcTBXUDoxoB1QD3tadua8GPKDegU7Pj0hEYbUJnND%2B8s%2B3I%2B1YByaAq3WlqdQdas%2Fh0q9chFxVa7GtoKfVsqlP5taMaav4JqvevK9%2FrpfdCLiJuK1xGkjh1qy2KAyI4CuFdCQ%2FH4qQEdL%2B1ANuQYJpYksbkB3SfpmqNJKSb7pVgzd1MfebJPVa2N5cw44GlZ3lsXqZw4x%2FE0L3XGuDl%2BnkewOWxZBqyzElyhFK4CYeMcB9Mq5mow%2BLZahPgXTRUNES7BOygkWufIu%2FWKiaisr%2FxLQZ4YfcGmxPFFjH5HjghmMl2emYU4NJdJmGQfil5XsisSsZoVuPovHyde8dyUsTQWTQ72%2FU2074oODk6MKkl6g%2FLzP%2FABXDikHyBcopdQ%2FIVCvGyQaZkbmITjXj5oKoG28fVUPKPE8I%2Bmayme1D90k4sV%2Ftv%2BwXmWmhF0f9987%2BH0vz7UpDEAxK3RgAeGoeXSgwLRMW94FgHHbpOXB49254UXCPJ1IbyYJT6%2BRppXoo%2FSk%2F21NiP144eXQjzITb0VcVzqPGTT7ZwWeG%2FpDgDypSFq8wNFO%2BB50bAkiu01vose4qWVwUI5q48NhwuRUtVnh6P19MPGotL0GOqUBM4Xk7ATb%2B8%2FXa8A6oof09X0JAbbhZb266Xe8%2FapzXx12H3QLGYlff6GcM6ABJsiN4V%2B6VGjtD0viz317Nj3N1Mh%2Bm5Wf8ztvixWeR9cd1FzXGVtvjqXyUYzAgOd0JuqJ3PRS82LtJy1YR%2BMIoYQGTR%2B%2F%2Bdofd9EWsZxNulXK5byzoVYh9jFyJin%2FUODwmm%2FnMitARajC1uFjSu%2FJ%2F2DT%2FQhYh5dT&X-Amz-Signature=5514d1ce0441a80781806a12bc87a3e26d4e1179e3fbbf75a2d5650d0999b8b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
