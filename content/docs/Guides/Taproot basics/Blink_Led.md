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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIOCECAR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRyDXgBouA8DqR1VMtFZoR3JkNxq9BoN40I87v%2FWDdwAIhAIuBlbeWwvZBNNWPMxuh1JjfwmSrKxG999Dotvc%2F3dVAKv8DCE0QABoMNjM3NDIzMTgzODA1IgwptGG%2FdTGaQW4f9Gkq3ANuKj8aeF6Hsg7iVELAjoyVWGtCrPc5md8%2BrApdbSlCLbbObawqHcVe2MPhRlgqrBxYbe0O7XDUVApfXnj06%2BsiOw%2F85zZDfH%2FNX1kaM9KjhwzX2dx9P4hLvUeOEAF%2Fpl4Bi4YHN%2FS1UTmzl9bCVcM3DaMB1Y%2B2jBEsZvUnqe%2FCCs%2FGdGsxBc4q7JDKboaQou127KCfCl0TbSlTgjcBnHS5bkkrA3D8Px5x%2BqZ8uK47HBa8KaQBN100%2FcjxvTsIVMpomGYiyD8VBV4Fpvja5cXkr3nFLskGn0gF4YHhrs4lECgIknpEofkuMohMRh%2FiluSMZoZ5ZYvp0DcKCw9uio16CdN4v2%2B8WU6opK%2FRw9z4KU97ej5eGPoEXbo9VxThBT8qe1Atl5Y%2B%2BJVV0iOacxTKZ7OIpfGlw8JsB3qDmWj8hnBWGsANnsG9w5xmXecYCJu9gZkKwBoZ3bGS2qODCCRfH%2F3ysTPDVjXXxi1maatZ%2FdhLVGS1YedCe92VFS0%2BUvKjhcjGLqlsriuz2Dc%2FJDpFadB608U3SpzVos78IjyRCNVbdUXfil5cG0moGV8mT8JANFTqLEblvcRmcfpXraSqOWkLn4FnRH56RWwDB6IxlOQU0yioZ%2FPOoKUC1DDC3Ja%2FBjqkAUZ54qXObT%2BKL1znqqRBrA5EP%2FBhHNmckZLqNZbqP5BShTXpG4r8OSE%2Bb0vAD3Fa1sVZ9E8upxES6gNu%2B9fLtf%2BQWbEf1n%2BWyup%2BQboLpCJa1A21ZXfrvQWYFX3pcjfchnHkcrziGVk5RznCOtCs0lGMGqdO64wPPS3TSepk%2BaKEuylnb0sbNRJycqKYaax%2FP53QA0GUpP4Aut%2FXmCDAqQP43WEj&X-Amz-Signature=d6c6f9439d7589a917a463fb2c1852995500f98f6b9cf33946f3a8f45245dd34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVBI72G%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUjuiVBqgtc0plo0QKeGii11ekLck0pRTNA6Zv%2B7dregIgF27N0T7RJGtHa7K55zplCde59rGkPnZv3R31PMlYhf4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEgw2%2BXqKxHfgWY40SrcA4hQ%2B2W9BB7yG0cDUzK0eGCNzLlbWzb6sjcKLfM9d7%2F1TRBXIsKsbZuvtXUV20pGKyxj39WapvkU7twve2s6PxJhdGujG5AHbuU0aYIJqQv3OSBM%2BgnuL%2FhWs%2BK1jG9z4b9eDViHS5K5NkGbkMuXkJmcENtQSSpjUwbyTxoJqHXq%2Fvpowd6nCs4yI6i69g6VyMEnumjh3bJRwSrOmU3Wfg7irR0ZcacarITE5TF67%2FGKXaunY%2BYltpUrsqASh42rNVzxRLOzS4DeKmks19x4266pYd3ySFzuz6HK%2FnFoU3fDGFzAGRlEVvSrDT0V%2BQAJ3OHhm920kX541xzMmzJ24slWZ4xch3HSiuyZ9flVmtgLG3LgS3ia5zUw4c3rjU9SvV9n6BTziMIh8Ek31US9xIXwBsHBU%2B9OhNgsid6%2Fshqu5R5Gl%2FYmCUzo4jpC10m%2Ft%2FC9iN%2F60GbsVrD2uxqC38n2rq6nCbPbvKs9AJSap1ZCNv7dWxkCpJfipEhf5G7z6Zl85yW2O3%2B1TgbuC6Yz%2F2YQY2kK4dWiwYRn5mbh9Ew22BZL%2FWbwHszr3SaHhZ2F94jKwB5yYhaBfs3Ha9CrcrDhFgFyHhNKsoARiD8fC%2Bk53ib%2FxmeE%2F50ngxVUMM7dlr8GOqUBRDc7dNXRAwbb3SJ5jk1rSNfx%2BxkQoA%2BnN37UCttfC7Mxp%2BGvDiHFcxN7ezbTZ%2FRVpu13Rt8CGpzDd6mXqVVu%2Bc3bTCxhplHbodkEEfnPk268dIbyLsOlUTItXvPrl1AfqpEclHfmUTBi3cVYs6okjb8ttldw%2B5fBqHSIeDKGjgaLYqrVJQ6sUcju87X%2BwhZGHDc71zB821I1ObEguGbSgvwqp8Ee&X-Amz-Signature=af7556d28239b4a64812819203690c7ab78bd8ce545df7312e369539a6ca150a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
