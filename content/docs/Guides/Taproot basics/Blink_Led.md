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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPNDD72%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIB%2Fs8BudkME9mWapwX9gt7h4IVL4cSU9bqS62xF%2Fz%2FRjAiAOrEIMnDUBC%2F1n7Jdjxbc4NmDDfq1eAWeOO59CuFboViqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGJfqiHSg0m6TZz1iKtwDsNsV5LN6A51dH%2B%2BLZPtWQGHyASAEyBBDcGVIfamEBnYPX3TNV8XHtqpjuqlemigsSXdbp4f1aHp51cBYKC5lnFhlIuNDxMXCDCGO6%2FyC0vRpflzgWyiZGtT8X5lhmCnFnZBbBn%2Fjq6N3kwJJxqPojxepnq5Fxzj8B%2BKrJCUSK0BPbaBr3rCCTHG1hUwsTNvrvvQxA40HKwmL5URT8jnyBZXdz2SCLprYA1nACFzr0KuLWlr%2FsK1iC0dlY6M5e2Ab5SrfttqYV4w06sBbzOWStG1PNulgWwW16nBM2LW5pCEtpozLESQYriRo2eBPfqoWFz5sdhzaghHPPo2r86r2SNvpwKYnYatlEPkbvJ%2BadL9Ang1B2WLMObcFaCT0yuY3m5scFLniW36kVDtTbQpeRdmPIMpS8CHFliUC7Fk1Swkx6em0Y6%2Bsp8E1YNJfSNczuYfl1ltKaksA2zQF3DNkh8DHmiYNEpeFnLJqMKg%2FNXP3Vout0FqNFxOpviV7kO%2FkUvzQyNuSK2u4kfNP6qaQAT%2FiBw9av4NxWJEcKwvM5fBJJ3CPBT9NCqG9p91xH6ZMfKLNmN4K0jIHaFBSaqAG4VvMWP%2FL7hodsquWgfkOGnmYgHxDTeQ9jP1xl9IwjaGQwQY6pgGlAG3%2BA3G5W6LGM61kxc6GvI7yT6ClSiFgbdI1UgefDbFoyScVRtgvawP8D2CXikunIe1D9Ga%2BlQ%2F4Zn5sM4oa2YZramJykIGlxJCIp5nB1NbYuX8UfUDMZ%2F%2FMmXqY1Gv4lr%2BswNaHvcFJYXjZpcu3mlQwFvXsUGu1udEg45UnMVmoBfS2QfByqw%2B13jRlZVvb45tEhk0viNfR5JZUaOYWLOHWLNru&X-Amz-Signature=90a8058b9b79fbeacc176d759e0a4d004d0ad8c906a94abc08c7dce24f7ca768&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675PJGABI%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T041215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHXdNJlarfupsqPCil%2Fr%2Bzi3cl6ajxIxLysmxLIT2NNzAiBrgJ9jjHVUkvWmgGykFKIlEyi9G%2BWbVxuV3qyrtwByFyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiBel6iZprCjJJ7mlKtwD31ZoHvV6bm92GDMPghlnR2ui3vkaWBaQCY8xuTqhIvqovtALQERvec15i9YghR6k3FnLbd2x6vAXMrFsuFUad37EmbxgJkpTdDauQZAQgdCBN%2BtxGiWRa6%2FT7QPqHk0KgRH3BNx6XTQr6aX8Ua2%2BAGcgTZsu4AxReqWsvFoQYgPLiFBg5jRPL5KlG7NmFHNvBotSWRmS%2FJBJFx5aW9Lps2yyMAxBfC6v%2FDCiur3D02bpq9H9CEWrWV0hNigoxK%2F%2BFP4nHp%2FUZjLZ1ZXaQQL9Iimo4nPaUh0PC8RmZqrgCPLYRQgyTxqpSQquySgA76R8oeC6QoQLyOmjwk5%2FRH5aH3BjhneYxevG7hTXWTngRqTVxE6TrZxwbAh3RKG5spjp3JCYfhM0eYoc%2FSlK3GNNoXX0qCwCaO5hVCgXQvv3C5yJ3epo4QEjHeWBCs6JmQPnSGldGN12JZTPql9uEyHoBBKAki0OUkb62SCDv7L1hocYRixDYASOUZ%2FmycV3MvUUpQ3jB4deLS%2FZAsOykcSYsAxmgg33SvovB7BzBpetkMtOpCdw4rele1P%2FagCOLeBhbR%2BEzMFFjD7t5WtrI9Enmq%2FqPmCuszRjbw%2F40y21FVbhxBtKtyjgXJ2Mah0wxaGQwQY6pgE%2F%2F4nd4tbnFua2dY6NmXLIDvWzbTH%2BkY5epUVNi9ID1Z7Zwu7lBRPiiPXGCm43KP7jozA1fsvtlBMy1kbT9DnHOo7qpETq2uGGxG7BmYggwgCoRGaNIyfDyy%2FPwktfOrb7p3PWjYJt4S8U9mAeAXibX%2FW476phkKWIaUFKf8ZfO1Y6Seh8c%2FgTbiCKPRz1CXMmK3u2vDPRTjbJPpZ%2F5CDRJcrj%2FDco&X-Amz-Signature=7d09894366421b22dbff5347556225f07594373376c527f6496cfb54bae122c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
