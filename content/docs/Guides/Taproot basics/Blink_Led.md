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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVMLHIK%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIGfxpbIIwDsEXWou0vgjSOycVyD5nYGFH4FalDGEM8G6AiEA47sG%2FEFrOiNjFoYbuZficXAMa22SQrHpiJoeovnCFSYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDB7I%2FHJbPYG%2FSkBu2yrcA77f8TLQ4G86ejYKTXyvdvblY14fK7qEX4twQ4AtJUDyWSYNQA1EsniKWNX9SeM2i6SuOP0yP53mSJAGL6v81mgJU3Dz2FUKtwsdpqiRhT5dYzCDLbOqa6%2Fy56VlyS0tRs4pEpk0eZXasfYbWuVD11cRQswiROPBGpS2BQ6vBONNMix8nUoMEWK7cT2LjkYMOY5xkqhxPfZxyacmDc7uDue7Sus0bWBPYLPCEFftP%2FUt%2Bb6agfgXv3MZRV%2BTIHOXK3yP4vAmorsRRiIjzEGt6N428nYxiRjgC3AYXoXMFsgZ6j3c2zQxlddGIzBtPEfYEN0QE9M87TmdmToaaSe93a1IXiYnthHHhK%2BVbUXFzBa5UzaiXbaMDJLs2knK%2BKUkLcJksZUR6noaVDVryc%2FxR94YNo1JeJFtWHChlNZSjOxzmn2Lz7SgxE5C0RxmVSpsGHKj8%2F7ujRXs1zxlbYFwpereizn8owZbkdNr4%2Bo%2BN6SODo3Q7kSzg5Gab4Q3xlgwTi%2BlmrR3757bhwc9oNRPOZ2lEQHJLBFNcgjLHNpu6vOxrl3J1sFrN%2BL1tDQ3T7YZI1aFSTQbgjR0lvB%2Fp%2FJPl5Ud%2FPfRwGy4NGy0LVWAlLvURdB%2BBecw%2F1zzVMSRMN%2BHyb0GOqUBhoMTU3K3ufHJaF9wsJwYIN%2BrXejCWRcvg%2BP0crQOj5%2FkylDCkevDF88tdjJ9lxNmb%2ByqfHt5EJ69Y7fei7gpJXF819K4JegXSEIMNWDbAMdFN5MGaAmVSuKJ5VgOAVbyPyGZDKlbRW%2BNPz1w7sa5I7pmuzLJqX7ZKs8hZSbUKVV7dUK5tUAO4bBkxklzOH9neExUaBrRkdSdYH%2F3kLqeL0dXDN91&X-Amz-Signature=871899c321ebf05d5659c5a37df937e2f4248b4e056e0e968cb2d01780631e19&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG2TZEAE%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEEw5uaYZ86kRJUvNggPgFcQ%2FXiGI2wcOzE5rxeXCjnKAiEAk0bnUi3EeEeEROfiHYrpIOwTls21VkXU81LXIywqWeUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKJ10n8Dj050fv1IKCrcA8NU%2FYuAXISTiTFQghaK5Lu%2FU6iJQYIMIpIbi%2FjvJfa2uWfsBOWc6NaYQK%2BW9SBSRwgEou2yFv6sboZs7rswto7WC81%2F6hzwoj2K1RjpPN0P6%2Fu4Sf8gwLwUsSz9tsAhGeTdNEh2w%2FQDoJENqyD3SZJ91N75IT0MDoCV%2BPHTyIk2hrnEXiNy%2FvgjsqMCgnoXkIFm36jgyEz%2B%2FeVPIQc5jd3VC6IPo5%2BiiPqpSY5Gm3MVij1J73bgJ3xhmp7AzXzm%2Bw0ugqa%2BYOR4r8a4NtjAvJhLtP1oGeGgrq99E3ppWznjdbzZgP40wsowrHYjgLIKrLMnCab5aPikvPpm6IBN1vBebwFgqD79lL3ZIXBF%2BPujMzNQd%2FRiFsKdh1j49jeqWevLIQ%2Bl9YY0eoni%2BH0BS0TbM9b6cj%2F1esTpYHwU4KLHBULT2VCNrZEz733HDPQ1l%2BT2TtYj6pntSAzqzWoZSl%2FG1QywF5ews348CkuOKEhdJKg1mDibYMA9UaLQGJ6yDrM5H9%2Baiac21AlfF3P2sPu5n7St8rvt9VKxK1%2B7YMn3WoRjW0uad6HWEi%2FTEdcqHERr0JVDwHkfVXYOisNATzqharCsGsKNSlBBUVKtkdRGbaN6DJxT%2Foyi1T%2BGMJWIyb0GOqUB%2FsBHjWhKOzaBfGfNhQvf4zN7qjWnQ22EtrvQgj1Bsk4yCjFKuaxffgzMQMIAtP06tJiRElZycflN0uvarEKeolT0cwPIbiAJlUiZplwhyuJjtqOAcUdLihu19SZKRQUdfwxk%2BuOakkCVEWDaAvelcOwAXOwynShGatsG%2B%2F922HI3I3jtC5PhyBDHQ0AeU84W%2BouCwIxnml2GAmhBrWs4HW66zRMm&X-Amz-Signature=ee77d2f3c2baabfaaac49d07b7bd88ff234d5b6b1aac63dbb944141d3ed52470&X-Amz-SignedHeaders=host&x-id=GetObject)

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
