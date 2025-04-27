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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EGHP2L%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGdG%2F4QdmrzK31u2xHmgULUVP%2BuNdTQOpohcdIB8DorAiBNMYjZYyP0Hsok9bhW1sL6guIqtEUg6o1beKMKl6CjgSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM6uUowvmbbz7dni4BKtwDDIke5oPVA2pSFL4UvSsUutVOgBPwiITRwVJm%2FtjLBUbLobhZ4wQPKdyK2Uk4zkbYYRCttFTnYUTHaOLr2TmrjkuFSTyLqB1C30I1%2FFW75uC0HaZ0iOdE2uGMGKNAuXtALeb0hUMlbxaegNp0pu1SPtpG7M1aUnu2RtULQ52jk1OyrCIErBvZAx8OgMSNJDftH%2FeTJdYAAaFIqV46c2VBJYUXNaNTu%2FAyfTREVXA%2BxjLkImEwcL37TX1DdPNRuG5UYTeJH0Olx1lcHW33KieuRCed92nlYquF4vpsEpRzAa7%2BxYfQPlpuhrmiEmIMxguYBpTB7yUGDTQGDDnEOwUPwO2GaS3Lyf%2B7wb0uGx%2BwOGUoHncSM3I1hDqsbHZp4CR91gXUQnws7eRT7K7n0iuWQkKDbCPUfa47gViv2tc0j695xes8TfsewwpTBqDbypHsuA%2FPr381cFfLXESpaQjlQrmbod4VxpUN7sVI0Masdn9AhzOc2cxbeQuE0kTdDyD0rxwXPu9tCzN4cWQ8bH0IXcl3UJ%2BSBoprCwQ0Hh2FcRRfxlGFYT6oImJ3T7QoCawNP4zABDjDf0y2fkx20w00q5CYcDEJoFvGrJ2gIw4nd%2BEUc7WtV5TyrjOQstMwkoy4wAY6pgHANr%2FRl0AJnz2NEPTJP2vtheGY5l99gOpI0IoBjAu9142pYe6dOY78CuHiVllpdeEQFGcl32Ii7FfiHbWWWTfDBm4Mo2Sxpitw%2BOnPW0fnqdgd%2BBRi2twD%2FnW2OrohSKu%2F2F6liSLmrONg2EorbeE%2F5UyEztPV9AuvsEzvWCZjR3dI3%2BBtsoz%2F41dhW1%2BgGJUOgBlPcCUBH7hL8AdG53vPNloZaXVD&X-Amz-Signature=dc02c1a578d06951cfa0d623668f7d6f3d8bffa9063d5a323743577fd2af905a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DV7AVTH%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BaTuHJnw1GxYioSXSycV82YaRMhQHRuEFn7GNhR7hUAiEA3jvtYuxyC%2FwmRLPl1OanlyEChXlybrG84ZBLusf3ebcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOwGcEt2R6LEMpZF1CrcA%2Bug%2BEmOm736NBFsiHeNDJfJtZkdM1SSNoGJ5krnujU7Jdnzo88U4ehLyP8JF4jCOzblkLNUFFdxCp%2Fw9V2eo%2BIQ56yJ5bW5xCThwctgLsLG5ZwkoZCOYKD%2FbUyf%2B5lsQ3ebT15x92AB1UMJe%2BPOldw%2BlHIVuUTYEAuJD62Rocz1EzqNITCpsFIbj%2Bq1rdIbFHrspQ7PinSAlbxE4zLDHCcb6WDsiArxXpQ3nyoBVv5ftrDNJOtew9sKNPh9VWFCgoDXA7VYebYrADWQhEkHIp5OKrN96BzSronKHTCEyDoCw%2B9X0rUPrzOdO8QJFTSgUT8lj9seAs9hTZFl%2BcuP%2Fz9FGOjSeUYVkhuanytPVyle%2Fi0ye%2FgtWELXgrNxGLSQhupPXnLdS9hf%2B3pWeFzmm8ShFwrTcrSsYg5L21mxCBO2tApBCsR8hb6io0yjGXiWCeEWRCPJb15G3Fi54S721hqgY4CEfsSwkii%2BGRfnTzC3pBu4weAg5l6jLfcErMfAQSiH%2BCLH3cOLQBUhNDUddg8MgCqJDTAumkJHE3Dtrp7i22inh%2FhuEoSUg1MIKFAhKCP%2FZ2smZXlqomoX9r6GPe5wyQCHeMa1cbeC0CsIhpJZjvn4aZkJqN8LWYOAMMHXuMAGOqUBxr3qRp26ixTEx1zR893WyXTQQk7qv7WfXiO%2Ba5Kpq92JL%2BYYmR%2F%2FCn%2BYmQaHDBvLBbyQDdt9IvLgMs50rRdbavmwhWRbBhpTvWvYfGSuxbNlolS4Aov041dANHXdoCV8dTAqXQ40hEka65Le89sIGaKKK3%2BuvZ4z9hUZAcykbHl4ROr2tHtdNXIIcPFrT80wT8shXoJ5cPUhBVq2q8UClv5Omjsg&X-Amz-Signature=8a0990820e1ee2b0b12b7159dec4ffac92f8af68e28dbac81da7ec0d4249cc44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
