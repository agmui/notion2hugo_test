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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FI2WCAC%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENmgA9BWgyaLeAx6CoHPLf8RvIQuVJ3eH51TkQSztH3AiEAozz1BjoaNeNeZSrEQr7ZL6gC5hVG20leTgvdBF4gMz8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCCOylAtFnxV1jlKVSrcA4fQXhXlEJ1uTaTJils%2FcvVGwLdY8Wl0S4fk0Z3AVhM8L5sMSb%2FGxey7%2FXwfibHYjzj7gptv%2BaaAf%2FeqnR5LSeFT%2BhFj5XJbwyXS6NtKd9uixBYNXh97wNM94mWgdCVNXJen9m2NBrljkvXnA0iB%2BxHy4K2QfqlN6nNBGUCW6cFhlo4dOi4i%2F%2FIbalLcyyYzt1Ba%2FXkrbRcsW0LmQS6rKXOzGd6BwOC9sCKbPGUwHuqjvhrXOpXvYHOv1NDF3TSOWScDLjwnegoatFHxY0QmFCk97H3k5SU8kxDGqBL6xFLGpyyWVi4D3xyotPBcw4XchYo0vlZesENkhykzGODZCk978WWOwoX%2BeAoucMmecSGJDb9UIx6uT%2FjUUqsJJuL6hoMoFfqVZ3A7FXSfQEPaN9w6Vflrnfdt44mSSjc1NlH4Ri0wABDhoseo8uB8FVaEUcyAjQKtOVxxN6DKMI5qIXWEctEwaqg2ucnfZtEh3L3cIn6yT1q0AM2v4qjnKchdzBczAlji6MH9PTNVQ7NPne3e7UdcK9xAC1s7raJ4crtO0vCsBGxpHx3h0QIhI6aYfCW3JInCsCoTCvg8sV7ke5Pdoa%2BqpyEppbij1yXs69stZre6uynjOWB0oXKKMIOghsAGOqUBk%2F%2BaxJ%2F6DJ5N4EvPoD4zKhvtmOSrhiPcYuMmizRM%2Bjc4xqHp1IAY1mRkrRZSGCbBlaZGRD%2B8iLuGL4sO3NDWCWwCskxhMegDbBxDH4YqhnaieE%2FaWpHQjlpG6PlfYEs74j1VBF8urPTowqu8YjHzBEDxBZN%2BaQq%2FIxab0u3VUyWikS7628be0DN5T3fEBkTRM46oizP8c3XmRBK22tpou7SrZJ%2FJ&X-Amz-Signature=09b7a3773fd4a332f55e6bef49fc36da46daa9bc0144b8c1e5d905c05f0cbce4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7J4MTY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo70QkpcY%2BZ9iesEGJT2YH2ALVOlYCa%2B8%2FNqYgR0774AiEAl9AKmbt7MfuRyLnxmOS0TCBdhfREjjHyiIEDMdfStzgq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDAK8tw9YDz6tZAfJyrcA9SFOkloHyRrwPZOOhMg24k92gAx1QUaVS27uaXM8WuWPDTBKK5x93PQsnj%2BSO%2F8wzIG7Qqswvvl5%2BHOcX5O7ndtDJPPLFhk8Mz2kkXMyBJ3IZK6%2Fn8OPJKCxUA6Y62EOsRzKNKEZ2Ml9htIbmFv%2FfDK2AqDBXJ%2BqLLLG307ECweU3uXGj2j5mroSxw%2BlJJEiqlGyqAmoGsOqgnDItxCpzXGeLy3TGi4NMqw06RHFzHJZC3uYwvYTMLUMKABcUERBwPJLovomA8hAzJXzUSjRc8fr2%2BO2FPyTxzTZ1nZAGLE6xvzCn0JWKiDTqFpTUNMSJsLEnvtAF485PZdZne8dsV%2BUh3RdygIZ1Db2%2FLCbRH4hhemEdAbzmLa8U461WRVi4QOmPzJz439uBA1GuNcYoEDryO2l5cvktcCjdW6v%2BTd75K7Wf%2Bsp9xxo6o83LWnJNuOuCec4ZU8p5iYEu7QERLMc1znfQntQvuoZliDqm%2FlJSrkh2l9gkj8HcuG8uhCYbmZiTGvx5TlgjCTUgSngwCCjinNl4O9ZgUFOLBP%2Fq6xTrCk0%2BN5pLxAz8yTSVoHtRhsm2F%2FjicmzNB%2FB5HWBA7PZLlITnmOUh8%2BIqC%2BhTSnTTJ26OvFXGL0he3kMLW9hsAGOqUBOB%2FuWwHqn7PHXhSAQft9l2svW6qRTCLouRaf1OOwKpL7ouwlqwwPxoprLHzWRJeD0yvYvFcyeVo258IG2XIP9hVAV%2FGB8eMMd88Jv6SlvsYQ6T2GKZx4ehvHrzaKCC8xiIbbubY0kVovBbjYfzVo2R372%2B%2B0wPH%2Fi8T7LeiGdcOjKLg2FEyOzsim%2FpJHdTpdT%2F8VaZEuCrd1YMMGY%2FG%2FtHDQO%2F7D&X-Amz-Signature=13853381bbc4ed0441acad67d75086581c96ead632c88c10ed33fd436ce0607f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
