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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IZ5JIUX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCICtGMwB22S%2FWcEnSYxHVf1FzmzEyv39Y8l0of14JeritAiEA53knmeGO1MF8EntqKfzv%2Fw2SFOp0xhJDt7%2BDCOo8sO8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBL6QQL2XkmtcZ%2BlLCrcA%2BsKX7989Nm2fZtqOFOlM5Ziss%2FTlsGp7gmsENjOWueo8p2pGxXsZingKRMyVrcEM71Dy6tivFVjQUzSl8zxPaUvt75a7FTLObEOnSREU6tO5yFIw6WsPttVuhOk6batZYrUK9D6jpkmyu2p16l%2BhlRipHODts3tp4Htk2fWTXGeRuXnH9NLcVTOZd8ipYpTorrGLfYuJzd3d8ImHxAWVuFQkX5ewCUyMhCAZ5YcPqFr%2F0Dy0ZXawAbd5Nb8KTtVrkSBSQ7poVjuQdXsufL%2Bj02W0t9AaMxyrAez4QkTUmT6S7VSbo5gwHtiImCwWEY9U%2BDE2IUN18D9BiPUsruXP4RtgPPsvOhkzruzrYpQhNHEEeKjVGbRyD7KYDq%2BIkBtjHoxcuJKuiK1GqNe8esqTAm%2Bm6gRImq0b%2BTQFaP8VgUMf0iqPSlH03yQD%2BErhT6hmstD5ZJDg9YNkSHM7zseY7UfT%2BHpv%2BCIvD4hztt3mkHB%2Bd30iyX2tsGpQvBCESN2kyHMJJoIkoLjZPuxvfmAg7ZfQZkz26q3IgzajWb5Fi8kHCJvReR%2FJK2Mu1Qet1MFrfnqBtdrQUhHaT%2BNsuSqhpzzqs79H9wwtItV9ZYiUOklDMt96IrSTu5rvCEsMIGJ5sIGOqUB0fKFjd1Ho5kzOkqH1pcoqDN1HtsqkyvmRod%2BBLXDLRHpHch2H0W%2FqIysLUNnlJ43I7GAoBWz%2BJpv6F7oMWOv8WqOAGDdP8hO1cKZwManyJauZgOtd0rEO290w0Vm0z1yA3k6FgYFaHI4bzFbkT9tZTJVDRIcpgEkSL%2F7m464WRG9H0bHamlbBxZ2nATFL%2FDhpTWrvjkjQgiK72OdfPFiyseQdVFv&X-Amz-Signature=15c52ce3a01e5da161f1f88ba72c25190f2c8fecbdb5c88254f8cd10ffb0a324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUBJPGZE%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDWNoV%2FqA4wdRT4pKiGQLen7c1eV%2FNAs1fGbwd5FZk8WQIgbOlWs1A7S5vvN3qstq8rcMSKirhqbXYmwaplCT9OqGoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLNJdUJ7CZfLOaRoBCrcAxXvMxVnr6kI0L3qHfZ%2F0W8XrP7yLf5e8Se5I5F73kXLPGzKlBkGUJvqe34d%2Fzb0aeuOGAqlbHSgIfXzqv6LvfLUmDCy62KUqsWnGhkDf3VnSzSZT9%2F8aALSR9lwUCdYw7OTXtqDp1L7tMumxOsDuQCJuIJ%2FseZIjpG7iAgRd0lY9U%2FDYuTgcYawZF3VRV70frMyDTvILmFG0Kf5cBScEayVetkLsQOFhus%2BcpjAiJT4Uwoo7oLMITvwiTArCV9odT8dkiraJkfN57McRmO4usEKrpY8tIqLz4ZBfAfj0yp0IIrwgDUCQB%2FZeDHkmV86NBp3D4Lo6st8VgIRu%2B2Ra4WUX%2F7h55uqPzcdGrzM74taWYpX5H2wn2DljX7xwLEPjXXxUkHVPDipHUkWfcF9m94%2B%2FHZUH5z9N2jZZQNuaXFngi73Fjv1ePeciX%2FtrH%2BFpL2mAvgBZM0E2fXWqXm0J2460lzHsEhxrrFINoXQD0mVDkyz02%2F%2FOKem72vxyieD8vYuKOk6HGqHUa08zjdzCl9BL1gFrL1g5C7hGyq0S3FBdAihNSFat%2F4fWzH27G0pmY4kt5iq9DpyAFIE8dbm8Z0J3dfPJ7Y9WmUOyAcpOVgLduUzMS90HltN%2FKJjMI6I5sIGOqUBRv5MUvNEoHgGj8o34x%2FVUyQZ7WsxMNwq%2FCmz%2Fpy%2F5ABJt5d6V24kVHzjuGlGuIK6QBz9GuE%2FHCUA8ssdKyXwG%2FNsLKJyEj1olf74uZwstd5fzZP1NckrJxfidD%2BoblIBuUSO9%2BnDA637D99FtEEpPJr6SLTUhQ7BdV5U5a8feUG6gfbfd6we0bxv%2BDzUCBX6RlC2oE8fGyKR40Sr19VWYLPs0%2BW7&X-Amz-Signature=30663a2a3993b20fdffbdd877d508e02ba53aac37fc7847bec3f2d0b6df25c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
