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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCNKDBBV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDAnca19OGQS59UYo0UZHIGrGlKfnnS%2Fn9mWZ9snzS6PAiEArN0tVlbTvTpjVwqnu3Aq5kiMVMgWNY%2F%2FwZfZBZWPmPQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDAhqxU8e2WJslu%2BAlSrcAz2fnj0X%2BFRQ%2BNfbO6TDKE4pykaGo7zviNSDQCwulm37%2FKNN44VTS7NNiaTD8ss8AhK1x4PosHM2A9VwrmEY8RqHi3ahT0kXPqX3DDb1VlY1fZuz8rxOkupWHcUbkzlGdVjSwwhhU382VD3CxJFgwTINR2cqLygtcntUkaV6lXY5DDiDG%2BaNlV9z1vEEkpcm0usEoBOW1wRv%2FrGqzan7Z4jdby3G3IvLXK8RA8fUSH6IdGwIwyq5%2FYfEU42O%2Bwbjz5BUMpfYEMhrCz0ASh%2B4p%2Fu2JPb4W%2BGmOOTCXYCMYQi1klu0dfvB02kHOF996rQdD0gbWdtEfxZZ5N0g12Molckj04CnuY7efQhOF4KGYTDsLtfuKaYE7Vc9fEY56kgEywjxpmPiuztMI2piVjquAVwffplPNaoNlu3LHDWBmN5NPxjNLyiSSMQEZXeKUSPCNBOhTw%2Fb3bta3kEjuJrBEXCRmkO3Wl2YDjWUT5E1dR%2BBeNIct0Y1BoJdLrD63S5WfBBFmNzwOrofB9IkLH0FEtW8uv0yfXpd1wiHt%2BYlpHQaWZnNLHbUB6kvifMvZSsXdCVDLOYG0GZE%2B%2B6X8Dr3ZMlY5QolcjRxrQt0tq7Nqz2J%2BLj8cbFdrh8bDcDSMNDfnL8GOqUBGb0Or1V1C6C15ICd%2BkYGJFTSRvTp2cRXP1Mnfnh2IosK8jvX1N7r9s6xxU5EKr%2FnQsaylZsHcrmnPG%2BC1W%2Fz0xaEv8NBMFqPjgK5hPkrcgvTGzysshLuHCMkTN%2BwAMQjIaOpqI%2FB%2FQf2vv6b7X0kxmk7dak0JTm3lqYFkB2%2BWbCCddfub1UYjDIxn%2F%2B2IKokcAVPnk0OJlmOEEWykgRcDDCjXWGL&X-Amz-Signature=31e86a8f69cb33b559faa8d2fe455ed12eff6a96fdb097b32b9728e17b5543d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X725BLND%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCTLK2jOo2k9ko9K6j3tg%2B0vMemuQiYZtED9iM99rziEgIhALVL7Roa91iDaP9ECawapsvbwEClGId%2FDaNVt5zI%2BTw9Kv8DCGgQABoMNjM3NDIzMTgzODA1Igx0A9qDEgGkTsUQdUMq3AM3kqm95AoM%2BqcJN391titfq3JkpjcNx9CMzi%2FI3viLBJd5A7ftPdeia0Wej4lj7le%2B8x4Xh%2BQ02ECxaBfbO8L5beV6W%2F9fBEYGBNvVbLWEAUM4%2FzcMJiSOe0dIP75Gnnk8ZGGWyyZxjUOtSQCXZmOdfHFAIa%2FgxDE0NH2vWpX7FfOTqdN%2FBF1AyCSrn6fx4IyEQi1FwrxQsEgJPZwoqjpBPYBmf7tTllgFgT5NIHKL80lgITHcEnD80rfSr9UnNkwVO6g%2FDFQIO5nZOY4pbXSLbE8v701hBx5ELeUW0kUwivm3NAg6dN8lrXYV3MwhYwrc%2BJVwfAW2TG0aRiTq2J270MsdqK0Iw6eiKYSAZJJXaVrpUuVFetImSvfO2E2PmXp3Xe%2F2zJvIbtQItI8EH7cW1Gc8m%2B4%2BHgvVQS1vk%2FShkV4J5%2FSgAnljiUJs5q9OJA21EA1GdfBVygOJQrhTF97AoIFB4VqGEwXVB9tQwpkTLXoLRijukYyi%2BwzfqGGyEWAp4S3FijU2Uy3XaCHr2pB5XzaBeIpr41rrMSMvEoqQ6ew3Tz8M2Eh5qc64dVxgws5bc%2BTitPbu70I8Mz6xkcMrEZWLDhMyXwX2iA%2F2bKZ4TdtnH3i%2BTrRNJcs%2B%2FzCT35y%2FBjqkASUjaH2QFRV5yJalQnjF0e2Owr3GlTHTW3V0EoUq%2FFaOogkf1TrTRKePsZ6vDK6yJ%2BHIfPnm7FVFUo4zSb038B9IV3i7SRmTtISr8UbC2n%2B4npCXiL2CkXT2i9rQsVqPjh%2FFI07RWR1MbQ1kxe%2FlRtnTfDLKEQkInd6%2ByZVvjIFE3Do9u7WcrCMH6HgojOpESnBwCgV7yxq6uJuCxG76yV7RAUq0&X-Amz-Signature=07584a80d707e181bc07b8b31cb3011d125df81d54076870b9cd40c3e7ae57ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
