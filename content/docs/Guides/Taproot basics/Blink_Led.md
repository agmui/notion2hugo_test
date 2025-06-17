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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIIY3JGA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHW63H2qKLQ3tf3zmhhZiRvi%2FsuxnKJYHjJnzs4d5gNFAiEAwS5lzghEWVpFxuVc%2BJXg95lI7L2JJ6dpiuJ5%2BO82kRUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD45xEbKQN5%2FIpIUDircA9zSemcJACQ91dN7VoIXm6U8YeVGRmWxJwg4UWVFk4XNNurqS6L7FI6wu6IMHvKcEb9WNxWgavsKuZQKECxBITYqL8kA1K1g3Ox5z8UerWbaVmmeAK0SHhHXE3hY9FFqPiMJRm5lyDbCaHJrrhdRZdD%2FUOrgiy2xVGBlcVqsXuvGce4VYcoCR97729e1Uw4rCRHEm3sdhLAIlSv8mTsRQFDCXV3U3EZiD50qmWsp%2BzpIPujkVO39a0k5epEkIMlyLrPCuQeiacOPKAOIK8SQ%2FECB1t%2BppkWkCYH5ji5k1wEypGa7A2AOuGz1%2BD8NuJOZESk%2FouzMmlAiQOIR044dC%2FZv5jWsiRg5Vju6qQxa0av8BQbpkCzCJYd80ZSuPFPprCHzLf5Kb43e2%2F6yBbvvWGBd5FNmR8c8AHEDTXbqD7ZX4fCo4fCb%2FfV%2BtKBtEVfDjguGu08%2F1Ai3vIOCbfa89jG%2BL4H%2FfX4rvjo3HGXInnAh3%2FFt8wzHoVK4coD3rmH%2FYxZ8pFxN20Wj7xR1639DGwQTcAJsEYBRPp7Ig1BM6xSCRLccz6tWsYC87zSLITPvE3OEVAXJJFg5dJXDJvAEyNq%2F%2FUT9%2FrFcqfPDNM7pgKJLcf9qkpOU5nBYzXdMMPW0xcIGOqUBcOLxQHKvGzHYVWgIHA8ujN34kFZ%2FZaiQRiQpWvy9nG7C8q9pNcD3m3eDT8UttUKeOmKncSiICpCV3i9D2C8oZqXd7KITg4lkV94e0%2FZb2C4i05Cobk2Ra0T%2FEchKngAxMNVMziAUEkWMuhtHzpwKQyNdKmrxlItE5vbd7smtI2NcQ0wCBNwU7WXyd994EMu2HtPI6gkJHtD%2FdHNvuTep0ZMHhfNd&X-Amz-Signature=e1e31196778b4b3cbcf9bef061487549c8cef3f1575aa6246bfaf28c2d6cb71a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QDOYSR%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxti9bqeBfvvM5eY%2Bog%2BFcbl7UkENJDBQzSFGWShxdBAiBP9MUAR6dubHc%2FmKDTjKQrPa3X%2FkX%2B3FrPoPTGyTnS5ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMixxw7%2By6SV6w%2FLgvKtwD%2FjmINC0XzlZGdT2%2BjMOOqpinEUa%2FCM0FJrfzLapzIDCdt67kryfDJkWrjwJh3CFrtwaUZaTzcKx5THkQ5ACGbmqarteLV8I1%2F5AK2VvYaiJ0XLPgZ4uwZ%2B1UjpuK4VmOLvSiJCX3HTZEHV3oZaLhaZEVC%2FPduaoSeYEKlcL%2FHNT89o4jdZdPNsGpjp%2FWa3ovBTRyEFcOUMTXgFbgrU4GCmf3t9bQ0G4n7IZHUmstkTkZi31%2BdOvcMxZV5ApwAM5IABzm6qYk%2BIAdftHFrIe2ESdwYO4yDpoAwh8u31x9e%2FF3KwIxSHsUviwLa2Hf2EY1f7fnqpSizuFYqmcI4wsAO4uTt9%2BwjbheZPNnuSnk4cDGaO0zdOPJbKWUHnAHcwioVJgT4WC6OmeyBBMUTVY5UEyvtDse%2BKvw3car%2FB09QpDKWzhtyWs22yEc540v0mVQY7fZArklnBEMvrc2AfNEq%2BMfc2PLZu7U6dtAxvsFqE4JZPcpQakC6xytZS7Rkjjs2%2FTM4Gbceq0kj0zxoJ0gSA3dK4j6wSpoGFxwTOYUjc7tGuWjEa0HrwHeb%2Bh0snCB1IO1IHJTPgcdJakMF18fQoTdRaral17XBOSylBHRPS3aEiocaRA8Mf64Lf4wyabFwgY6pgHl2nP%2BL8HE6oUWwszjqKXnDQeQ2qG4Sr7%2F3RUvPXjFgCTYSkywB%2BThQEKZRBAgpN1FAi%2Bj%2FrazOB%2FPONcJYI9djKfgUzgq2gD8kZA2T1UGH%2B51QEgZRj6gSEUFFJHJqKSV%2FDluOggx4bJJ9x02sc9ysX18iWV2KKrCsXAYt%2BOK8MLZ5c%2B6FWs3LiujuUnwufv9z%2BPFBuB9xRAotXAuMs5oVD3wyK55&X-Amz-Signature=aaba246ac4c45b10b2171049ed44b754636b6b9a6920cdc59161b9dc230768af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
