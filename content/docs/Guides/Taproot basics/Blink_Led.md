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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XVG6BUP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIBX4EjuJ1RoqvYk9k2mX%2Fjb%2B2dPHgtqhriiGLbkdzsTrAiEApH2fiDigpA9OIWGLkvqT3sXh8ZfdA5%2B38vDzIawzItwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2Y2nDMPllidrA1vCrcA6qOURqRvO22kxw%2B8eRST9c7moKVBwL1DRPDXb2gUqpLDjgf4dQORTaJKGEd%2Fq6Cx%2Fd3TVvmQBCEt4MD1nkSwyhJYuEuIgH%2FZdhuzgh2Evw%2BFM%2BD42eDirgALeXXlGmNT8Ff16aqPecOzSnpY%2Bje%2F7d0yL8OP5SXSqr3vuTp75MJPUoeCkYoz%2BPUlGFwxHDATqcYKserusNt69DLmsHjpi%2F%2B2MrRC4Aom%2FAfCx7rbHJ3OLmpxGW0oUKjUsHlto4eznrQxq33oWL%2BgHZVjnkhP3wf4uOWqGidVnB81V%2F4mESSq8aYRcJwRbIbdhE9qeNgIKO9McLJTIVT7S2UwVjnHJ%2Fw0k6e7GTKAd3TNk7RAh0%2B8gXaaclKdj6%2F7gQZOyA403XxlgC8%2FnhCp8djrEdAs7nBRSJnn1ZGqsDBerRcuAzsZS0LOB7hAaExW2ly%2Bvvq7BJqgX2EVDoev2r501p5E1LHV2gi3T%2BmuHv2IYRRxMHBoe2J5GZsc%2Fznhf9wlAGKoPjSypazhR5hD5OynqpJP0OQYapA%2B%2Br7R8Y8UfGsBfF4ROLGj7OUgL6X1zrmoA%2BjVTctFY4U8CK2hGave%2BwtXkwnasCNK%2BIK0p6%2FGDbmeSWpfbKLW9Ao9ZkTfUe5MOrS1cQGOqUBt7g4dK1TFnvGCqMA2uBYOnroLNJbyQWb%2FF0F3%2BCFvc%2FUIUjaC2POMGNDVZUIyhH719zHFCNgA6PO%2B%2FgINKBoud%2F0lTJT0DD02BxCNFKCU1S5q3k9a89yvCJZSBW7rUsNAW56%2FlSBMeg5yQ3q2Zfo6gY7Wv60Lv1b%2BowqQvSPNH3ef1BVQ07WgQOpSae5Y6XeacEuzkEoYwQE4UtmXIwpPsOUlnkN&X-Amz-Signature=7cd0390c3afebe84b119421f6800a125d3f383f72086d1a2a692faa4a9e12540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FW75OYO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCh0jypY6aOzSD6zsyCLz2wtUhEVvzSPWZvyWBkzVrhUgIhAOuFdsGcNbDJEdsVWUauwwOizT9qooMt1kXFXxSK%2FlOxKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2aoz8wboEBob4yFEq3AM1EZSTTXrurcXidXeZjUz4xoR1kq8Jn582mIZlG4S2WbG%2BzllJ5aCOYviD4oDTLj1LUeDUDKyoUcJmWHCm2uatsalvjnj5XbUL854VnCG8W1gP%2B%2BIe8g3kPsdv31QoHCvEjuJgqdioEyxTL4KNd2iICSWDSNg8poWId7mkA87YuWvI%2BC%2FteiOh1xIxESrJDQ5loWteHSE5TbJSxghGftp3sXqlhe0n%2BfqyIw3GqpTDhfAHu6ZZgazcGjjsbTWOR3z26hkqQNV8JB0qA4EBJfj4jigWc5F7xyXkZ8XraQeKp5oVa4w4xB9oZc5EjCct57w7TUlqMYbkCrdV9YLwpitzfi5KNQOrGcG8EE9FxjzG3CBzoL9GNW71O9uQDxaCj3JaJw129ibuX9L8ICTi2Lj9HoqxqMmNsWQiiLoA9CkVlKkSyp4BfBIC4feXVh3DIaIyiB%2Bc2GFHx8dkzF%2BrSkNMfgcuwv0SEvDqWQbOn6CY0NDYYGDVAC36ZIvFHs80RoxrUkUYXpJx8IDJaDwVXe1yAGry0nTQ5HnqKonYyd%2BjA9RvcZu1foQZd3kjWh01VeM0xN1xukS%2FpDzeAGcF95PXGBjW79HzSIHlcL3iDdRpczFUlbdIS7i%2B5eDD9jDw0tXEBjqkAbmB9lcXprO0f2FWuJ3CmtPy%2BQruP7G%2BZDlDgBJ2dWHCidJ1WsQfFbLF7NWP%2FkRdNIWPfhIN7Zb%2F1V%2FYuCb0IWqTuRBqhh%2BmNLn5L2aWl8yI2Atqjqdm8bUt%2FA4iMpSUW8ilWFxeMcDFaaC1Ec1D6gMYP%2B%2Bgf311uhfWiTMuFxERmgGJc3NDDvyqMmn34wSdwo8OyO7nh4KlGSFJGNhKr1UfT3Ys&X-Amz-Signature=3232c690f8fde2e8d135da9a2f470ba0d4368cd3749e4f46b8616c13973c8212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
