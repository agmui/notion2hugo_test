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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR7Q2QGN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCcMxMPARj%2B7F7OYZU3BPqCxmQhfVx7yUWxJbnm0phOAiBHgmjxSgRUSCdvWsSsEQkgvcTDs4iHMmltrMjs0VN%2FHir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM7LanJvOllh%2FB1UhfKtwDnX8hZnrnQreCs3rwfBA4afMGfnlCGj8YtGOlpHcpFKYz6ZNHNSMkClZreQb%2BNtjzezqrDsyxa8g1YOo4xh7pFGbkoAZX2qOLL6dnlRr29SJ%2BskjC778fwe8QCMuR2uNsiNbWf2VvT2f8Q%2B6eWx%2BWNBmzopRuoh3uyqhmAIpae%2BWU43Er1XR95dFRkMEvwmpHD264XDdJ4VG4HhxAGayOUYhkWHRdlUBD1hkHooupIzmhbmeRisR3LKwGqAvr7j0uVFCc3yzFkcQzMJS7Joubwz5mGP7qvGvyPE7trVNtWn9woQ7Pzbm1na2%2BADHTGhXavpdjQY1dyR7s6YD4Zc4wNpOu%2BRxTOdElHYYz80MwAMGrYXgWA%2BgJbHy2Gmgcjczqbr5o4pSuQxQjL3X6F0ltOYoJJFYSW09ByFh52C0GyosjMQSRu3WqKYwMMlugQlZMFmdFEg9WUVgHTX%2B3n77tSbsdFbaWgfk4hweIbHHndf6t%2FORUU8pO%2B0XFrENsznPiZX1svWrUA82vq9Ejui59upJ6xeHRedcwefyzLc2gForzkyarc6155lcU88VPwQYhl6fvU0OotxOFYOVdf%2FU%2BXRGCIalz8o38C5SULLMTvFzd6dUyY%2FfVtEdIk%2Fcw9r%2B1wAY6pgFrJd%2FEYyv6iThNGMys%2FDt6hsQROfouJP6vl3y6CLnc0gnVD1BMOsNbITsLdnrcbD2fmkBHHTtny91GKrAUAmjLi7gN36kbT%2FQtdQUR%2BvbfHawrhPmXq4STGemZO3cxZUSxCkDp0I5YRh7rD0f4f6csRH9gRrVVhuIxPwCZNhWGMXWycyrDalsEeVo09m8N%2FU9nHgvmlSZ50DMHLd%2BuMvmKKb7XAbsn&X-Amz-Signature=7cfa201d75e8fe32996e1c02bc4d5d21cc820e8f7b8ef706c58e9762c0070430&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CD7VTEG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoLsAnwWVgcByC09t%2FeRl5QENFsNKOyBUgeRpZiH1YJAiEAlMsqajuyTC39FGdU8A4Ga5q%2F3BEh9LBn6rCbAtnwjyMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAgumQ8D%2F7Pmyo%2FU0CrcAzKnKn2luj%2FDGEXCTSu8%2BXiRI1xxf4R4RQ5lruDy9p2kq5mzYw%2BIa16EGhV9mb%2FC6%2BK0luVdcrYxGFJbR8PXcSEtNmOqaIOFQQuX8yKBkoMxgYfZ%2Fv%2Fe8UQejGZB%2BPDC3V%2FoZY6ZUk7pmbjEAc%2F7G61GtmtMrkibhdNAYoWcmvdCbMJI97HzoMvVStmvUkuEx6yZ9tFrzsPM1I7tv3l%2B0i81kHiFUj4GhX7VmN%2Ble52kaRCdsC%2F%2BynrPe6wXLQHzL%2BRlv3a7VUd9%2FPArevYeE9nPMgdZfixQjkk7Cyoq2gspAPKA2EYbcuQAMSca%2F6z%2BbwqdEdDiPvswtPfRp97alQ5ySTjTu%2FXof4R%2BAOZHZiPAYKyBWRTko0oxRuQ5RJl4tB4bmYScTI0MdFAMFUzDIio3qE6ujzs4KOH%2FJ%2BGs3zDtM%2BSp3r1Af%2B9TsnX15duOPX1MWulwrhhLGIbNV62a%2F%2Bj3XL4DQvjprFB7Ln65jB7Rgi4aJ0dnrA3pvlDpbveK5isDwL8lL72ybaZrgPa9unwzUBn8VGksiipPS3YEkH2bY9lDYJjySR%2BMuxDNYzgWodjejasbt37j%2FiEjdW%2F9lIuSnZHXZReybP35ILBlueI9YkQv%2Fj6E6%2F79XIsiMOu%2FtcAGOqUBADJoevs6l%2FFV9qDkH1hFvbb8tb%2FJpds%2FLup7ortBapP25XQMQwgp4lRbdwnoQoS7p%2BcPJ8s%2F3uEiN7zCaxsz8OAFSq5XmiQN%2B6WUAWbm8x5LIe5Aoq82Ih7sIZ1teTtSM4djj%2BBQP73lwNV1HNebMCd8qAEZsTKas%2BZ3SwkXQtVmxzKjOtQ4bqqmFJZANsues%2FtZrd%2FeCkUdhzTz6r6qVT2PwvAu&X-Amz-Signature=b50cf67a2110c1315b9e244370f43c53ce7e81629ea9c682242c2c1141f4d972&X-Amz-SignedHeaders=host&x-id=GetObject)

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
