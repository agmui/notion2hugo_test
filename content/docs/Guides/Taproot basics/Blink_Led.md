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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252R5SFG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIB8Z%2BFOEdfGxD9WEME3zB2lPpMEj%2FBA27giTF4lNQ69lAiEArTtpxs6KMkWI6svku73FC8G6TJOv9DJhfv1GO6nXRSEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDb4eqMqfH%2B6k66V%2ByrcA8rYEUFy7JWwaNdptC%2FXVuz%2FxgiIGNN%2F7j9nE60KcUTzDbvjpL%2Bne9eujmIDRf7Tdnq2I1uuNzsAVuJ%2B5KljOUZVMfshta%2BwjN1nIwfBYipYXOd71q3w8iiHULDG0cWL62tVUZz%2FRseQDSXsZpbsEjjBeiwihA4o1UuWs%2FAbgRI5uNLgzwUMUxknt8wuIrrzsvkux9zNe5Z6J0AG6wIDQdz10ncjfRzXw2%2BJ%2BFWHJ9isyWPvTD56gq2paOyF6nsQlrwY3pFQMRWl7FQ6aDEgkJDd%2B5FtDKiuD0C1K9gvrtDuUZi9VuwREEKuzl6nsT3JvHVyMHo2ohlu3WIFOOWBygx10LdGLTxKMUV1lTV99AK6sKpZXwZwz0t3urd7OWz%2BhpzgiYLPrAIcqZGXJb98vaGs4ySMw%2B%2FZGAADUm44ODiS%2BbE2bIko%2FoIbWmJd8uAG9270C1AeZL%2BAk%2BdIlV%2Ff5Kh2tmiN7pmmAidiJhib0GesDtfDeqHOY89zrMHmQH1TCJd0QqmQuOGrSsBHVjozNK6Sb253c3G9wbQGTezcdYxb0J6vWp9ceXESzgmpEhvvljat4re%2B8blQRqFI5%2BbwIW%2FululsWIgXAKh4KIQdN9Q0sfHcbnKZXSxtEVrCMOu%2B7MIGOqUBs3Ur3OQn8EFvx09jWToFUq3wZb0RCrKufN0VeEgjxztJ06BS1MomifRFdYRvX0lThtBHojbVUfq3FN7jZuJUAC%2FURVOtb08o%2By3ePi8TXUsULp%2FvAD37J%2FTah9Jnce8HPi5%2Bj23DbG0WGfAcUOWddu7ZrmIIiqDA%2FHVlD72lj2DaU6ted%2FNSzhdrc6tNfQYuLJPCbQBh%2FimLIJmki%2FhAn0KPqVfn&X-Amz-Signature=72e38a66046649b781aa6488d49ae5001b91a6dec6c5596a0ede48466d71ce10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O2X2GF5%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDKtc2bd0%2Fuo5te4TRMox1OeroxZR58oiEAyP8flPVxdwIhAOgzxk9Lj1LksSHIaDANqxO4K0RUuGkxuNuYUw%2B%2BNqfvKv8DCDcQABoMNjM3NDIzMTgzODA1Igyy1yFqatZBPZxVbocq3APlygBAwZCsamxwztkLWbonPOc9i%2BN27SGMzOE%2FaB26WBOUfCgUlgz%2BUHC76oHbCURqTLb1RBF7EBkOBAi99Gej%2ByAuZfvrYPhMh0v68vgxa7s%2B0Kngt2iEdc2oDzGY3yU0m2dxOEbOWk4GKp47j%2FV2lc%2Fnjbvf3iE8CHhR%2FDETQbr6QLjNFlaAuWV5txaZ4wd1RnkU1WMROinm17grZfVN8hu5QLoJ1%2BjqAA3oxo3562whk91BMdMfa9LXVU8NhEzeCjbEDLquv8T2bOuqqLI6Qw8Xzf%2B3e7MvwIVJl3WNXTmo90eUicUuFOZmmmL96JRrM9%2B4MiOZRuEG4gJM%2F1dV%2BNN%2BCy87rRhbTAD5o%2FT6JY9FgzmHwHMSyd8dTyrIsbgxPuwyAd59qnCBHuoySVNOJPMTRhQlY%2B5zFJUOPDO5hDJNU9OpUqOv5jNT%2FeSV0vYu4SInO3gbvsdgr4HYCuHm5MMC20ijxkkJfis%2BVdeFGmXHZWf19isWrZsyT%2FPKzSFgcNoPh7Gg934MvYh9Xesm3LOtJZjL9X%2B2vD921LBHMWcfth5lHyb7%2BbC8NTGjy66WjbfGZApod0q3O8283yX%2BMpg3mwyshMMwcMQGEd4hGUr%2FSYps4IWiZP6puzDJuezCBjqkAa%2F%2BuU4kQab9qIO%2FBXCcYHC5JN6BKTovofL3fejPVsGVDplKZjvRRQCTeq6auqX6x%2F%2FY27tWeQ5K32I9aXZgCZskKQMDqYYbaIJ%2BICDRZ2SyPwrkD0bCaNjE6Kf98DbkEBHG5ymkSqDq6Ir4pvmatOkcemRmTEZVprWZvRMOxgjsHqV83bxcLyvt4k5m8dq1uvt9SzbLbfnoCW%2BKbDkBiDw%2BvKeI&X-Amz-Signature=5c0e19c5d950b63ae3d61fb80e7386b22cf9857f86f938ad10f054d5dae5095e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
