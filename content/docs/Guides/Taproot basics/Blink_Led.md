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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAZ5WT4C%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCY9bD70vHLTXqLdukPW3jFeaHkmayAr1OJy%2Fqwnx4bIwIgMwKlYR151HwdS%2BX3BFJQxFzw1mdvxYjev8VUALJA4QoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFT1IA2krhTnRJtfuCrcA0%2ByuzI71heiPdEuUO3Sx8%2FNwSRVbDgwG9jsFHCdK7%2BZsHHOZYhO4JWob7kzUeUhjp3uzXlIKgzU1eHJ5VcTMuOo8MxkTOcLqmMmRUNRxf7RnzJ7Mg%2B02E0dauk1exGIzy7Qjh9ljdPMi41x5s1pJuxD6SWLAFlYSP4shyoUemCfMb7zr3h74EHcrRwsVuZ54Y%2FpIy6mM%2FAWZQrvV0VEvY2bScaTELd1CwDIXBmAQdEye08yiyNfS%2BnraNDY1aLjRuGpVU1I%2BNVukmvj8Xj5BF%2BB6MdZseT7a8NBq91pMIJufQgyIvZ5GiVDg49R4NlmmNGs53lIqEmzMa6TY1ry6%2FTA7NfZ%2FMWLw49MvNIzlu4R%2B97QO1CInW76dbNMNewqk6zhtsQyr4ecT6wUjnhH%2FHzb1Z1HceKoPpikwY1N4%2FZ2jVKQPOR3UAi6V%2Bz4xFmS1uGcpK6bMxSUErvn5%2FhpA1FKSsUBQKsIL1rILI4AFaObwd5AaPNQISH7Rga8EI5Qw2icUailIsBHJsGoWPkXQhH0W5FLRpH3Uc5d0F%2FffbQ%2Ft4ZiDncJMpj0%2FxJ3tquBUMatl16LWUmYphRq431Sshm7S7gnt66okKW0AgTNAo%2FvTD9lU3Ic7%2F14v%2BAgMJv71r0GOqUB6M5jK5ejZr2Y9XvVhAFMZnfzKBmZibULdIG7aalmKWCMpAKRIS4R4NygfJAsqe%2BBk1NTJRboaddPQIvLWnxrpBdV0mses1xB4vbPew6d5oIo3iHkO9hH0WrdFAHsx01i3qAmdyMYh1%2BQf9QCPGUpw%2BI3TsyZGgiQDKxPLggbSeJCp%2FSGb0g8%2BOo4m0KHS%2FbEFC4QvxXDMZ8QaUXFjTvn3fXINLZY&X-Amz-Signature=85b7c841306bfc5343979da28bac1bb7f7e734909fb2124d85c03e162a4caf0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNMLBYX%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDtsn%2FWRpEarXbkeuWP%2FIaBfC%2BmQi1uFUiL6hZGdHYiQAIgLAN7U1lSAdN13Wx95AtQ8A4Fv9U5hrcrQ1ck2GJ6dooqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0D6iZfRVT0Lb50ICrcA9k7O5UKkn97Jytxa02DFc2AgxbQ%2Fs386IffOL69em5vvH3Xb3ar3Vxo1T8m8blDuq39vn%2FFPxNwSRPyezgkKAepRLcuBN%2BIoBpApXrS0E5jGMPNrTofBmLtDZ2eLlbTFvozHF4mUD%2F9Y4szj0uo4hlU3q7hl9z1CwXI%2BCvWdS3q4rJUdaXbCL0abKxQCormPck1UJtVVho7dvXO%2FnOZlEVJXtrWenNGS%2F3Cy41NV9e4SMDeQcO9cuDkIpV9COauOCHXDjVJiMwrxQ0p%2Fv0HAFZJHVdXRvbBzFb%2FpxkyYveckRZV2kQQfYM%2BhWRRx4%2BbBenV9xr44tn8EdzJoGjVp6xW%2FD98i4CjDO1gxM80hFvxda2Xf%2Fph%2BBSlbaF6pIDVyhefS3tJtD6WZzIUoPaF8WJMEtQaraziZGcRQioxg484Q%2BpYstjpTz1FguyZSn2otd7sNk58ibhdoesfcNkSTKppW0VL2ibQWYAVjAmeKql%2BLJiF%2FOLJBCqKOhmrZs7qgU0CmZEYc2ySJbLh5TE63vJVu%2B5RxKvuToyy8B%2Bh8RlluCdSsdpQ0QvcYcMeNa2maqI7C2eP3V3lkcT7r5ZeDoMRK%2BDXQ530IkQQCQ3uzNMBgoLdFlIawn8ci%2FtrMPb71r0GOqUBS0B27IkC%2B%2B%2FbvE21kBYsF1Qh%2F7uyqr1cfCOWMvHy52EyEj6uWVqHFoLPQ5RgiOjNtgYpAXmJhJaL3nscU0wBQOPnjfuj1BG4lIv88NslZnk2P%2FpLzx2CGdM8BfDFfg3I52HdRSAkD%2FQJBEKg%2BvG9SkQp2odqUq7wxXiZwS1szMqnZoT6iXCflnLPn35v03vABjcDaXmQI0oFOpsgJJOlmlZvJi7h&X-Amz-Signature=99e5ec347041e79d6f7365e66e0a34494e68159fc65e8260643cd59e2da8708e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
