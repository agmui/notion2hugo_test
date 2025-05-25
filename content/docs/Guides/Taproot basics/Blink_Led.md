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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XIHDIJT%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCH7Gl%2BvuqrkPNTUDK0qBGMKNXXd64inZ3Jk9lL8m%2BaYAIgcAsJH7dGVvLUkqcZN0MgVqgUcA6%2FpDJYzGeFWBUO%2FgQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPXpYhdG%2FQJUnOI7ZCrcA%2FTtuJ7aMnb4PXUa7cfBQl9OHC%2BeYdRekJ6q2HKEHOdqZst%2B2GsE0ZOKD1asMsgJjTP8SrCC5pgFB2%2BiJdx0jAQ0f6qiedzoQt%2BOs1N0RRqqskSLu4coRXnEQ0OmJeLttPSFZy9niYDAGCnu5SlvT0%2BqveWCcHKE9k2IoREotvE9iE7bdi9dfsWHrQplQhOWngILkF84ecKOn2NEiBM1Ak8%2FgsJLf8F8SXQpmF%2BoJTYw5ulFfaZHqAJGkDEXXNuEo5MKoODACuCwjEDjUcKfqfAabNqN1tWQearJaAhmN3rWEqa5LE8XT9QpAKNF%2F1fZIOeQsLtDM3UaGvZ8G%2FLbFif3RFAg5cZLYgKqqh18I9V8aNCTRovwNKDkoG%2FBXO1nfT5dlfS%2BA%2FuSaBN8NbPvR%2B4LLBjduZFs7zrrTGNkpG3b2jeE4Sts44E2hATyt3vX47R9QGpoUd3CwU9b54YiivQvhMmr8ktUaH5t56jxGCS4dGOXSxewJdjG1PK3N58nU%2BKPxABffcirPl3t7bQHMlCuCL1OXnghU%2B0x7Vkp466vijW4Trt3v1x8mDqRurOFTk9MOxnwNJ7aRTN4clge9u%2F%2FQudm2Uy71z4qzfJjO6%2FU3e596i%2B3cNsTJHY0MLbFzcEGOqUBFFoJgKSLxw8HB36gXF5lBzywyzJ3L82ns%2FrMwfWUgFuNCFRXSONK6FbcD0PSYoLxAMxLUDUpOyjBm%2BUgiyBIeQ9s8poJmcXVds5U%2BXp2G9XJTXCtChI6Sv2lAPoCNgtpwLvoAHlkC97vfndaexgdTFsYlLwPajR%2FvTZJoZU%2BZ1rFDFUcDF1zfRag2I3gQamo6AzfELXJwjjhMDm%2BH68KnFDKdd1z&X-Amz-Signature=116dc1b4984a55bf97f4ce7e563bcdc9f46f147d4338be055b2d99e7348de2fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNRLIFKE%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDtc3QnAoJGUOBtl9uf4sPIatLL%2FW3vdLQcIhVf%2ByRFDAIgdHlS1ccRSKQgPftL3I4iObm9skDAcg1kLo%2BtjfAzYS8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG4NCk82U%2BBp2ulUcCrcA4h%2B1BxR%2FSz0RW8uG8m3maYtwGFfS%2FSI6pO1i%2BhBPQUHjoZeuoVw9UFM%2BgVcl7oi4ziuZ9BbtiMIQ%2BeG5X02MIsquGS0Rt7u7J2qMx%2Fdgl9QcwC88hn5JRueKQt8uXb5l%2BuhT4Emh5yblkdQPGcRie8marQ5FEsJuEsplp6biOLTzpiHz202Uf6%2B4pZAAXWtncvJwIhM6Y%2Bico6Bldy6KpXP0Bcf3F6SCRWO8nGJh8OxrOyMyn6A3ra1%2BX9tjfzMQEUFL3VUYzg8pjdkUp4ll7V0%2FJZCuvtZCO%2FoPFTft8Qi9S2Yegq8CiA%2BmdNlLL3iORr4uwLw4qbrOy360VoHZPquS6hru2BXBYvKX85Tqdnaj8cQY0Md8DhqKZR13tTeoI7fxy%2B%2BIXC5oZgXOTEHUjdwTitrbIVAzldYLK3LrRhbaX0dOAD1Km6gApNP8NbgLe67IPswAgy6zxN2YbfFTxGjlAthA6ELgN8hZjVzaG%2B7K8u9mPKwjU8Cv9IsQZSAhe57ZcxXK08hzjQEnXxBNpKXjmAWOUc76oJRgef2pndH2k70xeTsVEL8GZ3AZlA6Ap3Q8BiGFEuu4UycKPPpzZFOnm8EAzm1z%2BF0VJ5ZVKNQ9K78rgRgveJui523MLjFzcEGOqUBVXVN28Og9sEyB%2FBce%2BVbM9EYxL8RPpiRnkvHo9qLj%2B6VktB1vfylCfvOsTDrQLYz%2Fvs5M35FuBkDPDiw5Gq%2BtK%2B%2FUc%2BK4pEJCvuzEbKgiadVqmKYposD3sgSDRjyOR3JRUhB7gIaraOehOkymoD18V%2Bibu3EL25aytKYLxcsQyB7ZdwFwLho3zAmyuUEZSoRm7Wl0D411UD5Kx1rR7lSFHFLYMtt&X-Amz-Signature=d55bc41800965536b0522e84c79f7530949d813b4632aae72217b2d257bdab79&X-Amz-SignedHeaders=host&x-id=GetObject)

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
