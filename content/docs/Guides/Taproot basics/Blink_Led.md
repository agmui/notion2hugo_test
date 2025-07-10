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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AEKC74G%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZTNkgd2LZGij3NWqOvs0plcaNpi%2FFTBK2w5bnzBwspAiEAu9sKejYUHuDt4OBb26F33QnXmGHzfru43RWCl3nWhD8qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkovfXCO1%2FRqn8i%2BCrcA32mb8ahYbJsNPhsbKvUv%2F2TUjepngPfuWbJqx4VEBJivZy92grGIHEtaenC887DFzScsTS6%2FdaJUMnmfya%2BTyYvIFWCPLf6WdtAvUt1Jd%2FVCebwNouT7QnYBIjV99h%2FfFl49vbgxmvvlpI2PJ5KZWUyiFvYC504LevDoCMNjBxGO8PT8ofFPEd0I9W%2B938J1feqPiRX19WCyksCtRyOAnUT%2B%2Fv7HtfBH3cROXgXLVpe1yPAA39jIXDKPuZ%2FAV9c8Ni1t9UAlMQqYjo892yX%2B0K3SwuEIDAmobIDM9Pmt8L937%2B%2B%2F%2BqXiAEvFLmPQ4brqkjGdfX8kRo9O3%2BVlVCyS%2BxfxqlewYsELeeLWPitzMv%2BfG0XH%2B1Q1XVk2YPhvtNNqucJvrhFId9qC9xwKBUzb9bwQnvQfi3p2YDWPr04BzMkZN%2BNj2dY%2FPIQceMlirMUlue4veXQBqHtRaKiMIGkxSlUtP6Jeb%2BzzA5mHesNSrd%2Bmx1xmFlhiBGBKsaPVx%2BX2BtcSF6Q3%2F9tp2Uuy27MYIyF11hOGRe4bXOSlXBA1Yesq%2FndFqd4SKPtiGH%2FM1XwxdygV7ey8Du2kLVq6sFxUlRMkcyPiTrpvnvgISd52ZutnKYBFOoPhgXJBTWuMO7wu8MGOqUBIHg%2FqX7E9bbYSZzsMO%2Ffh3xxptIRH1BoCeWaDaMOV68oxOVFI92ODexQ7Zgb2l2Mn2uei8VR5KyOipC%2FaD1jyV4Qn8wacZqprJe0sL0Hge1FN7s1IkkPpPzH0fLuL3FXHdtYMwCH5IuN8KQ9PUZudLAhVIeLT%2BCRufSl5L2rTIVqaJSQhgx11ytn%2BnS9H4vgtCJ3baFh5ZeiBxNygZzAQhiLIxKi&X-Amz-Signature=2654baff36f99bf828e24df6b0bc5d38abb25f49b6faca8c9daef40052c24157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX5SGRPZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgMo49pQDEm%2Fb%2BA06IhFnLhZcbjIrlEj7Lz6pLIiitAAiEA0TXv9e2nGrs7PMI2kyNZvmO5%2B8g94Ab9o%2FmjZNu5Fz4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1MuIFXKIq6xXUniircA1ZEa%2F6geQw34PdTcbz%2BWXSak6b1Gy0rF0wIpATStKW0hGeBM6cpbDzXlTs%2FGEx4tjQ1A%2BbsT7d1mroW2Cf5hym3xn0RVshAjwxRI6oCa%2FddmOfJocQ39Dhq4MRCObxZEi8h5cN06CbnZPr62Ry1JMTsYoLj55k7RzIcMM6DPSLw%2FLE6xepzmupz9bXtA2GlpVeijXAXTr1ZNX1WzfWndyPlxQxoXCysMK1bYKWq4cxvReDZRQ4c5UPvhfrEkHy2z%2BQDxJsLNfKzx0G%2FO%2Fxg%2BHuX5EFUVnapdeYvmvL9diNdiLIK05uHB7DdITTiIzaHwg3onQpGyu8vJJB3H7LtfUYrrz7J46A%2FYEwEbajjsIf4HqV8I3zYDk5hY8yVtdqn%2FLPhWj7Ju61IBHXJ%2BojAn245McVYneKHCLRHRX%2F5b9xKXtJOY2jcRLEJclDcaM7UXkG%2Fs4rNDQ2QzG8aD2SGvT70ScrN1onsexHjMCVRsZP2UZ3OitK%2BjR0F9MIXjXSURa7dJxAcYbxQa%2FM%2BPayw81SNR%2Ffb2BgQF9Xnz%2BSml7FqocPxWcyrLoFoOL05Q7DyoMsApQRYJRAxyxEglhIU42y6J9JuDHznMmKh%2FskdCha4vkSpZRo7ehi85YhHMN%2Fwu8MGOqUBvYXzZoKKkW52vcbCwKIy9WILSKbosbVNrBm8IfJcfItpP2jk8IfzNQLQDgiUKPKHB2JPpJwq84iZlU%2Bev%2FNBZmKZyg8glCdmPfI9lDtIT6bJ2iv9X7nKK6pIYzK3KUJgnEr72ARNnUM9STeZ5b2Y0FvLgw1Gne28MNsv7tMWlthe2FlkKbGCs0XyN%2BBlvoWXXt4t6JDYzzS%2BDVmRGeNtIgu4wAVs&X-Amz-Signature=2ee4a5fe62bd91a6bb9e77a13c893ee9bc4e8a9ae41d7ddafa6a52b4374490fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
