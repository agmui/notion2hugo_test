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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZVLEKR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dSJqPsPGUK9gAzii19CViDcYwvS9RyJ%2F6t61duEIwAIhANX%2Bm3TOWYtfauXV7j2zCv8vmNGlcTZgOtljoRuATr2AKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAkYkh%2FHXzqty22t8q3ANX95OJuA0QjhaFvtzEFCGhz2CNPB1giH%2BQpOOb%2BY2NI4s%2FkxM4bZ5GsyNYINyZC80PXpMTPkst%2FJQYVHvvwE%2F0r4dNo2QZFDWbtuZPxlbb2Hmrnr31IIy4uGJHr%2FCAik3%2FgGJ0aGC0a0%2FWXaeEstJuF5AowzO0lyse7CwSgWrvMXoswKuL0Vo%2FoEIiqQXssXooh2wNs8ttWRAdhCTRHso0elXoxQiWh65IPE1uML3HehrbQCzQUYeqGjwuXPT37lvGRL1JHWAY1nEEM75A5kFZFtPlitFTkvKO9VkWvmTZ5KZ%2Bopq1EaSf7rCrHpl%2FbHo%2BmAJtl2WsfaUZ2TPOmkKgUWaKGAuZ4AP6X1%2FZRqIgOb5mL5BkQaA1EtnKou1YOkKGlzyq9JP3BRLg371FTqwopUAdZtxChBJwi4dVxIKqe40IQDa7UAkBR9PylTNTMVpgkTmF5GDc8DUx1qfY%2F70HaTpxwuxnj1HxU7XAgqIUllaj0dMklkDr%2B4ljbtX%2FArskylwI6YQ06FK%2Bo8JC%2BpzTiw1J6FH4SItQTimwCumpHZcpFTprZaW4dnB%2FbjMXJoAgfTL0YlnftvM6hw9EKdQDbBaSC%2FlkZuxnFI7ZmZ%2BRr4AHRXcno6M0n4jouTDDosjDBjqkAUX%2B6089dQrHN7B97hB6zPN2K3Bohc4kJOLesQKjzBxjO0QZiXMjZGgdHj15GhNXGjx89mAPRibEuhL9tj83kdj2toIP3RpTcwTUD4GmqmQtGEbZD35JqAvjke2rdYaYJl2DlqNjSiV%2F3kAU%2BHzA9ZncUN5pTDExBqTbPvbPgS6L3WXy%2FJTxpB%2F%2FqR6aaPAgNyPOm7MYvSp4oUkA2%2FBBHw5BbkCr&X-Amz-Signature=3855a7b13d8d66e668a1aee3404a698e60e8d07e670b6cbfb62934c307c7213d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5CGFJR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T090839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsZCnwHJmg5Pdj8f8z3q%2F3n9021wB6OJEUDGr%2Bw5dx1AiEAmmOiQd0P2kxLDKc6Ul5JtIaoeXx9avAY%2FvueUpi0%2BSMqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCM7yIeXJrKQNKNNLircA3hCQEUR3lQ2xlixWJVTjwXXxLmrMdsLBXtNOtxPZwD%2BpEW1wztRN%2FlzuNS00ExzPOoQt5ZUJmGoWFVDNw0lYnLHQB91i68z96T5EOxOKlBTWjdn%2Bcs06iKZMsnT%2B%2FEoSo1%2FXDll2BLUTboRYAAbYlds0c7UMK7gPrYroUNskt3D4bS6SeyHwtfbcB6XTGe6lmiwDZBL%2BpGqsenI5OMI9JQgxnrSjsCwCq6q%2FqLeXD%2BfCm4OydcMU85%2F3EF5CW2pM7Rm9%2FQ30XYSd8IXdwVES%2BHBp8Gp0KsiI4RMkZ3ke6eBmcu26vBJ8SBwaduqP5PT%2BeWj2mHmYWucVX83v00wZ9hKOz1B3D1v9N2rdrKxGrRIK5rTPc6edJvOKHAmfp4Rm4WWlRjna4ckqkt1o07%2BhULMYna62LYP%2BpY7wsLObD0CEwB63zbQN7lAwgHFUeC7GuUzxLQoOI9nR2plR%2FAZ3A6K0pMYMkqM7gX3LqrgJnqCqiBWrGshziWhfbUZxznRKu%2BQMq81Z5yRW1oSh5jl1bBFk0AUyhg3pZQP8KCAiL4B0AUtpa49ctJPw4DTvZ%2FhEaNLTKi%2FCrbIkjkUpaisSaUdGlUhRfsIzi1qYb28hg3nUfu0FEWHZtDS3kIgMMOiyMMGOqUBMNmisz38909cM0KaqN5rV9bt%2F3qe2q9szxc2r1RvSQBEfmE3Hp4sepDHsx2T92CCukgmJZqgcz24W5HaGHiqe8Muk%2BRC4zMGTHYqjFhBbWfOvAhgOkOGugJoOk3RyTilHraLu1VQFGsAh7UnuTp1AeQatEkl%2BYQ%2Fdu1JjqqwUF7uvP2toJI2mFKKqaVn1sHwIgXq6rwuj7N%2FKbvKUbGiNZfexWcE&X-Amz-Signature=fada656202da103065830f4f05d09c285a17a74df6e5818156e54862fc825434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
