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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU6ARAGF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4kiMqeyj37HW91uWmleTFI1c8lm5rjQFzQw4Yh3KFnQIhAJkqvzPi%2F9geNEr6JNO%2FnCmsthfsddZirOA%2BySRUKr8iKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJ2kKfsYAkmgPs7R0q3ANbGbjrqvhtBlnA4SgiK6J%2Bx0owyBNWciDoZKFW17u3inXwfGqrBy7KQEOguBi9f%2F4QENAx3KmSYVJpSLN40t2vvjt8%2Bn%2FPgYupowXzyyAW1LOxNQZY%2BMlyDfoqKy18bZA7%2F1CiPndxSbizZX25tvIDS0cuQSL%2FAZrVUBmSRCDjkQQGFj2L%2BS02NmXkdx256r6zkgqztlAFuUk3ugn2C8cfprVpOfL76AuUU3KD08dKVuUjSziERu5FI44K0X50W8zvztfbCz1v7WYGfH%2FMEvpaqBkWnZzF6sFrBd6XQtDy70XAmZGmQYFKhbOS5%2BoS%2FyLTTb%2BncCbe4cP%2FofQmwVbv1SiPvKY1MyEob3PTQ4LJ2h0pVNvK%2BM4ZR2jTs5%2B5OUYxeItRxbGST%2FKyqTAb4mYhdIg041BUqTn0jpCbkEB134xrh61JEILnByJANZdNyUqj3IKk37NjcTcRhtDEoaazSAmkCYO2jk9rI8CMl5sXB5A37Mvb%2BnslWDgnE3ADFhD89Snvv0BiJt6xXQ7MqY%2FScnIIK%2Fhcea0B4EVnCw6OPF9DdJ%2Bc9W3YEI4Um%2F9WPhudRq3njDX1f6Aeo8x87LIdERcgf1fy4CrSEA294GO78AMc1%2Bx2ohAT0MceEDDAk%2FfDBjqkAQuWgJxjeUCdPFvJCcMc%2Fvy0dqdic%2Fcp9oxYYZUtahpX0uYG2uAEvShXxEAhyT%2FwK7EQ2S80rpSnQigKHM5UByUf0wFxgoyxx9p4VlNQowv5yCNpVOe4GqnVEWZrTPf0li8xFCAbMXxJDfAL1JiEP6jcsl%2BPNn4Da5daBekfc4KIjF2l6tkZXeIRNPUxOH78JfgYPs1wOH1LY0%2FwuQg9Z90VXTA0&X-Amz-Signature=38a63d69d46a3c388138f9706c3e51e19e26c22fccaec35aff78f37439fd18a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JH5FLEN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFAjF%2FJOawURFj1YmG1bJoNsseuAbSco79Enz4MDMvWAiBU46%2FnNghR%2F8mrx5I9aFmpPB8CWgmeD%2BlToKrvsSTnIyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj9REeBnUMWXQ%2F5rqKtwD01hRWVv%2BV0l4RjZ2%2FtGHnTvrJrZJ9DCzw0aOW9xpgzFEZfJ39mKjo%2FWGNvGT2LgQU%2Fo0EdxRuqi8FdmfxVSv8HKfovA7l3U70w%2BQw9pgy%2FWGFqVN8TIgBCcCUCc0gG72qpVZhjfpfhWwaJGqe1E%2FWHlDDg5UASzfl0QIux5lCnRYv2EH5qtBj6NpehZAgLGV7Xejuv14SM0KNAIrGaULfQwXNTkQhzRWjstbzcG0ik%2FhSN1%2FxxCDKiV4a8IwdAYEaOHIvEzZBkKfcZz98nI%2Be3HIpKN9jdm2vRVtLMyjfRvDGHLLajq5fTQ3dgLHIHyT7kd4OfKb1HB2%2FqSTcMq5T45ZRMKjGXenfwf9ucIK3M6XTOVRa8IUpBGVy2E%2FvW25794zYQBL0ddE4U3zu20x5G7YddzI0%2B%2F%2FVup93YWffM%2BaQTA1J7e7eK9V87DE27KQJm5%2F3k2z3%2Bxdz%2BkCyeiNk7KKegbcify%2BQ0vlJl4GUAqLb5KDvgdp9g%2BLBej8dXofCk9RLANjThEdTZt9wnllc8b9D3%2FaqkMyl%2F7jY6imhLZ2KKMIyYcx%2BOiyxDVBHWlY%2BMO5Q%2F%2F3xqtQ3uap%2Bo%2BloPZrxR8HhCg7HFfjkJ3uw%2FO588TnWWkPvIsBxE0wuZP3wwY6pgFrAVrZwyJLgpbQ%2Fd7EabUO7enbmp781oLHk37DTLXLaPdJguv07K%2FSO9PAbXMQgqFwd8plXc%2Fe8N0163iWrkKZqVCqo1UUm1s0od5GD1kjqtAlipSeRpAfexP3O4Pa8X321R1RPkQifh5kuMCiXYUQEOVmZZKWRVvn0HSsUplYSN%2Fmf%2ByKUjkz01p3x2MH07rldS2PLhNX3neb0fOIgj7p0TyQ62Fl&X-Amz-Signature=8c000525fc779def5a8df6c23e90f7408d5f5631bdf351aff3064d7518379db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
