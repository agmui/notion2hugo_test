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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCYONAZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEIfZhhsHJYfoycu%2FfabUtnYaELSGlP86rtTzcaFN47CAiAwQ50qyKUv0KbzKhTEIEU2O4tVK2tplFLGHwocYH6VXCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMfRXaprPzceGsvrtbKtwDliHfX8urh63UziqmJ9ls48%2FXh3zjDj4S29a4zTnoqqZEfZg9qiaZ%2FP%2FtCqEN3hzB1evXt4CIQ3NHspSDgnihqRmBTW%2Fgfv372iBVCS9ZTlmNkcVeRPKJsnveRaPknY6c6MiosSYYeVdot25Mfu0ho7tPVKAHc6N5QuGy82UNjwPEeYvHTpwut6gIOtdis3tNxV3ccExJYw1pfOX6jyxGNTRRQorEQQvzvCWu9fRqfAX2RLul47PYaqKYMZXRuAS2jBfrLxufGk%2FG1acMn4qXzjSBY3G6t7k5HOSc4mZDKscUEdBp0a5ScnUmWmx986sqmb5s1xwNYzZJzr7LSkg4CwBnyJXVQp4ShoTPfmEtEicu3d2YP5Au5aU28TPEnwT27T9xGcf1bf8J%2BU0C03Qzi%2F5T1SVH9lsIM1qsJlFEhnbGWf51IC4aOMbI3XdJps5doPwPyh4FTzVWd%2B8YqR%2BpjR0o6eZqJoM1YujXqskToL%2FDE7exl81ww0oG2eEWOrkeMlXH6oFuUNgR96w%2B%2FicOcYvgYIVPV%2Bybjevn16ZZi%2BgIVu3DMjumijU9Bc2M4VJuGINwySGhwdP5NTcepllqEA9PlBw00K%2BNh1NMnFp36hWwezpWRctuM4cEu1cwtLzJxAY6pgEtlKxnJeYXNoUAbTOucbrLkOOScO3vw1zswuBpE0nd926Ou9v%2FhOCbaAuby%2Ba30pt2eofDY%2FsqMFZCzcresRAEKEUa418aIZDzU2hNwTvFij2pOPN8QyZKgGLW03C%2F19HGvLcIcyUlTtKp%2FaRg8F5kT0tJNzY0Vbic9ff1woMC2LBU3G1RYw03UoQMzq41%2FO94s%2BniU9UAvtmxBcHm6P%2BqFi5%2BCP7W&X-Amz-Signature=3f143a0d199b31dfb294645696faf038c1306269a5961ea038f366b9cacf002a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L6WOTKT%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCtFu%2FaQCdQvAEdZh4iA2E%2FpKk8wYTCuFScGcd1eKxy1AIhAIeDfV4TGfVmd9Jf%2F95Z6dVuHGIJd%2FXkEPSlh8XTm6hQKv8DCGUQABoMNjM3NDIzMTgzODA1Igy37tYqYQ9LCPApEvoq3APUvargHpPg9Cu5cz8H8OEabcE9WEz6gC%2BpdqxD%2BjG%2Bi2UrY9tGdZ%2Bjk8P0QmnTVZfORxYOqUDA4SPnqkh8XwRQGcPQjHMHweXef7hTOxG7LYP8cb%2FCnvYVgzMaWdm51ykcZwRNxhQDSncZIdG0y9SdujXWHvSizyTH54aA9PWbX2pLZpv7w7W9FgpjX7tcGTBsikHCxoGejzmF4NOlsEhbnP3JjxS8e4z%2BGAHReOiWTSwoNuILdl0x%2FUl95tU94Fz0mw7oxjvfo9monoxjR6jNEuBsyalZKrcXKsFRFyN57F2zrww3%2BxPYeUp8m5NjoSd%2FzoOSclGVHvtHoSyOjvpcRKjDVC3YNV5NG1M6rHlI2b9H6cFGP%2BzYqoYtX3dGmCLU9HllpX6ensAWeCifokWHUEd%2B68Z3BE4YqVk4Ibk8dy8U6%2FNedUltJZ27RR6Q9M40Ps0BMVBA6DmcW6QfvQky9sfAxW2yJI01%2Fmg2lKE7iChJZWYeYPDi8rOzMfqYLouhBBi7IOryBMzApzXgDkQbaQV7oDmvJGynuFpdd2jqY%2Fm0C2LCPqMfGM4i6Hp9T2GLSne7iEkwx0a2ZwmAKFtu3mCzSO7pGqq8Ffa7Mgc2v1NSvTxmTH8a24gI3zDUu8nEBjqkAUvyjFzbweDrXH7zSYC8ckbf7z2gSTGOlUWW7%2Fr27JLUZlhx6%2FFrh%2Btwkrx97g65PU83P3580jYDGfjQTLIO3U5ttRjjXZhB2Fe1kt2UgNABQig6AxtkehMcEMl%2FR9dGiXoSx5M24OGui4YU0L%2FsCss6beBj6StEBMa7f7%2FOOY8TNgBAS61zjxKP0usF23g6%2Bf3zVd6MbQ0guzyrr7T2BI%2F7AWN7&X-Amz-Signature=23cc62136a90363bc4d2b048eed5c46b3e900de88e124d080f88ff943f674986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
