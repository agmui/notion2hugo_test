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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5LFXHGR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFb7zKZC7NXN9WeioXm9M9vpXHelvEW9%2F%2FINYVy2UtkRAiBuzvBRS51AGnXw%2BaqB1YYeXgtUgdezc8yQjfakjTba6SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn2NOVO8ry50kvAdzKtwDr9gbQdJgrNZHxEl%2BBkqPI8tpKnRqbnpHSlaQqwMcsbV68eeL%2Bu9Yzb7Qd73Mu6soaJY1LRYZBcG9CRUp2LJnWiRK1i7B7rI18mnT%2Fm8ybpcBYZUnpLjrj97EwxsQxVhJUCvz8MBa48AitI%2BebQgYrOZfUm8CeSCLpbgWpwsF59Ek3aVeq9pBehlvixvJBp2KFgn3WesHiKFOmi9EyBCYkNeIB6004dxfYWhj0XtjShPVJ4U8zPw1c1W5Wx4iloEysAeltbazyT5i8aEtgYEpLzyI0B1KLgg%2Fa2rHBG1SOAIbT1dWVVzGpHdZbdYlkFtHhvsl7FHb1N1p50POU0D5S%2FMD4Cg1WsW5EdHtCTjcQ4qMP71wKZ%2F4Z6Fi2FjtuzgAyYXXJyCvIXtDlqrMZPWDPNDlD7p%2FNeBMbcvJHgAdys7rqFjeDn5vXBf9dLdJdpELYWVdybc21EbDZXZtAllqZHjmTrEAN7vsEkXCGAcyoYfT4SBw1ActcS59741Z4awalYkoorAx9TLvHL3jRyl2SNyGg56j%2BS5x2H3zTasXo3sVyLc074GC0YMIbRCTQ4fKmmRlypF1OVNBnGc%2FJXmUwT9GT3nYwy8OgemWlE0W4sZXiETM63sm1pSmfDcwxcXqvAY6pgH9MKS4s0A1dofe3EAbNvWTRj1eqAsahR2o%2Bf9LbGTiiAqBjjoNvZ6y5Z12qobLclm0PxoU%2F%2FTv4%2FpmjYyjFj3tJvCbHU2FXedCsypA7zB85PPmi%2Bo1AadYwk%2FAxIDBeFkhCCFR8E6OfieVLOW8SNcIlZgCHFoXJbdi5AJGoBJwyqaqAQRjcMY8B5Drf7Uoy%2Bmm8A36WHRXuDpk%2B9EzEEUBNNfNKgcT&X-Amz-Signature=42b18f3ea52d96f83328370328d1316c2324c9378f56f1ea5313c1b7806f6c41&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFUAWENO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU06yBSJ1%2B5h5%2B9IFLF4GJoOMhUKJZpgWM3XJRC3UqHQIhAPoUfY7%2BfmqZjtt%2BLFsF3d7wY8tKwhFbMVR%2F03qvT2DoKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ2vvEvF5bLE%2FGCpUq3ANqr%2Bzidu4daGXJOpqduYxFZpnsanHPX619nuJDWiFLC25cjJs8fmFnDous7Ru2hNno0FGkcTB2DskAN2ub7X0ns7QaZ8k0%2FlK%2FWVdwkLEtn78HLcThx7UpFrc9rig08X0VmPjWMHqK%2F5PBxL545jLzxDrqwCk5WcgBs7mboHY64tvEbnVbonXRmqlNgVY8X70M8%2BbxepcMWon8i1NaznthrS6%2BjCwqetW2MgXXaOXEmjj8C%2Beu%2FyXYzYTjxjLOPqtW10nu0jnJyc4sJq%2FeoM7CKxXKeMThKtFwW1z4bElT3%2FwEgORpbmlQiJqwEpqePrlfUG9lQ4sCaEnc13taGSXC%2BOPpnamB0KGQsW4CDP5sE1oUiOYF5jmzIufpiOEgITQucp62BkfO6X4mAiiegbEs2hcN%2Ff6Cpx1yZynj2biOIOg4YnlUmAOyoXPrI92krxf6a0aYurvceG8818vPS05ScHGjGr3tzWsz5eFjVzFs13cijXHuROf3FL0b3rvrNRBj%2BetffSXNziwAoVfonS9QNnDzTCpJYZwRi1D%2Bxh53eZXECK%2FPfYvgnhyLIuE02CpjiiRHihL123yQJ48a6MeXZVNG08as15uIQViPVUTCYHGHqIOgCZpT7iOJNzDPxeq8BjqkARlALuhhjqz2aW2vYQjmntK48EA4F7GQ4%2BbSgv1Er4teKm6p08f0C1WAhQdPier3HO2TMQ4ZGDz9vWf%2F%2BLU7tset9Jq%2BhZGY3w3LgveOgziK7VvmW5krGTYZ7pfvQPm9TVy%2BpAQJdliiPcKDVxLj%2BDCLRX066XbM%2Bg1n0UqxiIiq2MKPVgtwJDw6laSigyACoBO9WKmybP%2B2ZRobeBGuDsDutLPg&X-Amz-Signature=0d85d0abafd573fc73e002f7dcc867a808364cc079235315667e488fd6b4717a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
