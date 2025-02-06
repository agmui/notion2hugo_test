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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXOYSLR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHmUwz92bPOvp6hNobjSJmEepswzV2WumD3Q8yL9dbAKAiEAlu68GNju79KCzvTb8PEdrbFi3eUPxQjMWE0gHpf8E5cq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGscsZj%2B4nTBcoaI9SrcAymBLXwIHA3x%2FuyS%2FsiTCVGAHL7naW4IC%2Br0rDy3dNW8AIpnXJ7tuzJpfCHo1yGDoYiSK0mtYn%2BbUEr6IgBDizblE7HZTGuwv1%2BMpMlbrIdWH76wKhOqr4Ej240K656gBgyoTGh6ggR7lvSSKw8SNE3eMiaGzvG5OHc3jCov3aJ5te4KSP%2FAoT%2FVz%2F1b6ClRgGUDU2zYt5c2Aj%2BsdrAebfQEWZeCK3mtzIy46cpPymoBZaAvk1%2FH7WvNCbHOXWyjli3WzRVWgYgZhNk%2BANJ2RQc%2Bx9TMIUc6DtUejb%2FOAwUhE69X8LgbZA880rsQqIaQM%2BJ4f486%2FmOy6vhGJqGKeVcekPUuLMmb8sp0ydE%2Bl9N%2BspCD7KVfc7H4%2BAxl0bNcLT4Lnn8pS70DohUqW7CodKnC9pFy1AaTmBOL3N4qeJAg09FgaZnK0VkegLzkxbuPgr95SKnkT%2BIiwHQq2tf2v%2FRsY0np8Ybh%2B31Md%2Btsj44punXc5Vcv5gmbrJlE9QF9QpmqSpHpAxGEam5jVQNFRsqXK24TkpFFnjRN%2F1%2But2aNF0f%2B53vmzay%2BXff5IMct1lNzhTJ1IS6TeqXIAOt8gaOL%2FVXwilE7rGKqqDFmGkDtEhuxyptX0Lgs1JnXMO3sj70GOqUBwOu11ZHe7HBdebUySu9ztKDiEgwv5wGYquceUnf4qa8WkRTeo2KhLhkHjhT8H0tdCvTiHu06xsCS9Ja0q3wDDsk86cJRyDRQ%2BDwncJZFlOGOt9CcC4jTSDEhwFdCQXEV8t5PWM1qqhWzqZ8V5tNo03EuhxdmRtilHhvbexTccxnON6juC5rX7wPwxUmdzCcJLiXrzUsLxsb6UzbMMMCGErF4UUZn&X-Amz-Signature=ecf089f11f3568abe1529ead0e5865c664c7e24910a8ed7c06a4a2871a582f07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONDGLBA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB257pQj83H%2FHFbEJDxrFa6XmfCr%2BLHP9p%2FE4OncknWkAiEA3Rn%2FRTsPF4z1yeKFdDh%2BhLm1ElGQJlt1HXB%2FrK2wNKgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNEgGKCaj8EaRsoROCrcA8mhyrVpYFHpxE3WtDZMW5uT5OtmMflshT2OdX7f9oTfEdUkprlW7Uc8C%2F3VPxy6%2BK8RYYbS7FTloEz%2B%2BU9H20rL4mMdO5IQM6%2FvX%2F%2BF0xVuuEcsvG3CzIRKjLHqEmxe350jnwF9Zb7OmxrO64Cf0aNzqMr3PtU8wCKVzOg7Gf9NzR3H1Kb1FzYMFCKoHGlhVbn%2BdV51PozgPK9ynflshB%2FysZnE4xK2aHmN2JI5M55RD7elDJGjTscoaUB2zTQNifKXMDNG850fgF1xXvczQkNOEesk7qvnwAU%2B9FFFm58ehzBoB3HWsldg0%2FAustERSROzWZohfsj%2FsPZiGZsDDLERd9LIJP4dbfk%2BEv0VrxLVTFP3Oo5NhRt12kL7ngv11HlzsagixgBPRXLo4QjGXRjmYN7PY%2FtysrxVY9JVhWkBHTXnySBdWfsclOalVMg2Hg%2BmsdIxUPubR2ev%2FI0r%2ByiQAXtadaK9J%2BhlBhXbKYnDu67p1M52T12gX5YvgeH0PKjZuG1Nju7pPHALMersj8wUR3wtburndA1kD6YCkBo9Rhd8at%2B1ihv6t0cWs3GMv1sZ6oy66dR8JCheJjsklj1Vw93HLPPHuCLjgyFW2ahjpvNNwtMeC%2Fz0zc2tMNDsj70GOqUBvIzcgQWkAciaJvprqXLTIGur3rJlROaFvnrO5kjuRX1e3wbu5a3hDy8ejVAVftRz0rtPnY5VI3N%2BgTIkImMvVDhmvIJE2gM78EXxb8eVNkbpdm4G69a7urL2aCe9%2FLcSikqMBKXvV4H9Z%2B6z2OcB8DxoLu9N2weq2lySDL0j9%2FsOZBVAwqtYGYMI4YnXqbD3%2FBT2%2FDe95blrVPAFemOQjYci7cLB&X-Amz-Signature=a4deed0220def9c65e4687f2eb817f5d55e99ce725ae3c525712fb5fa0b6d7c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
