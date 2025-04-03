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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE77FKUI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDH0L91PzGRNnGnwGVkTwQhaAxaMk%2BlQwVxAN%2F1NKXOLAIgSJPeSONV1nXbrlUr9nbJukvturVhEHE0uvE3uz2%2BrLEqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3WAA9pj7Y5qKbBlSrcAxH6%2FRQeJxrgkMNMoiUQGcV5bc7oj%2FA16LOubCRqbSCtx7ZbF7KtLwVg4fd%2FRxzgdQg6utZGDCjzPXQv36hHMAKa5TZr7bxSQzBuPIk%2B%2BgfMMO1CU7owSFGhP2I%2FrHYwbWg9jXr206ZHluEKIgAcPKv81g7NHV0MgoTdNm79wPSRjg2M7359Smc5lBDsvLSq36CI9XdcdSf%2BiAJmmYqJc2cOlvn7VJuOFtHcZgSd0aXF%2B3ruH53LajyeeQG3DDN8aJuDbrC8Y8pYXbhx%2FyfMUN5ckygOq3zlb7Q8hGRq%2FeSVr90ewLzgeatRS2GopNenIW%2F5TiRwTiWD%2FS%2FWhHRFwb7NPevgnXYYGoK%2FoHWsBB1lmOLzpEomhu%2Bye%2BSgplnIbGLSgDG82u%2BJZsWPwf9EpmgsqEZg8Z%2FwVl%2BjkiHEps9bzDvQfJ38opXahY1zZ7kEemb399TVe1ZPOVRYhSLMLQM5RPmAZqqBb1PYNc5aHWtHCJV0r23ghblu43IB20dgH%2Fe53m1nzcj4fyPSdJWwBWZAr95KvGock%2BSA1zwgayHlaS1AdbRMefjMTx0qm2gDjR6msGrGZ23Q7cUyHaUsctkF%2B5hyProhdycspiNnUcX2XRl3YCpodsh1B%2B%2FzMO6yur8GOqUB2FeLnlBhWppvr0Gs6WeB0oxZEQw58PvOJIdzuETzQMWTCUWQOE%2BjosJ6ISr07BSnrlmC3nJR%2FHOYF9hKJx9eL1T0UA3zS2ATIb2et10s31BFS5OSn48UgJPc5Zbo1gLdCim24v8DECPFfpTqkaDcsVBtWl2H8T4dfn86mdYPfgClv0BJc2kGU1Nka1oR9ORB%2FQAHf9DnRPmyeFXcDQder9mBMXvT&X-Amz-Signature=b9e2a19f3d37dd0a66a614a7a3029bcba7bb93362205883e7024d796c5cb0c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJWY7DH%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7vaC%2BCWFPrIxz%2F3YX5NjYq8R8IQQ6I%2BWeKSU5AzOGWAiBCHZqKvVMx4pnLyglFHCnD3u3ZLqpzHfb9cFexbDWUhCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyhNruJFb3vynSLWVKtwDswdmtlUaDJz%2F1ORcKmoYmsszQcJBjuEQ8Bt4VOF2ZodUK20W2qpk5%2FQIAvK07tQoGxbHy1KpAeDMVlAiy8JFoj8hO353eTRX0kOdA6xLUmZm8MyaNV5ThIHTbZ%2FYcr%2FRn69pRwYYHWpksDYwMj5JVpOe6ZK31hsKezs2rmLmrUG68sVqZ6UNzOn4pKaaNZFeJXAErUpm%2B9id7ukjHB0rrOt9a0yPq4guftXnh9QfAaji0o%2Ffur%2FHj7UAMx4F4i8Be4BRN9mT3P24tjHFT3kCDJNYILvpOWjzjv2c%2FnwHLSG%2FJlXt2omLgYaqmvWTi7J82mQIDnHe38aChuB6FmJpY1pKRyhysF4iwIy5tPBg8FNAozLvjJcMJ6khIUby2ot3EYet8j4Z3acUkN5qSpNFn46z7k8KRGt%2BFiKtgdCMKlJRzanDs8V6AZzK%2F46R8YaLZZmSXRZsCtvYP14BJn5aj96K%2FA0MOuVtcslKv0AH8OPwPZq7tmPXl9JTN2MBPhaIsSFXtcdFzPvW4TCABuhEMLz8fg9r6lGjE3pBk76OrYPyvoMTMM5d3GDOtxorrCjRlUkz39P8hrpgHPXEG3jdyvR8%2FMd3nQ%2BqSQCCSoTFDCVFr%2BGz%2BZt5RYfYxPww2LK6vwY6pgHlnAKtvdmX4yK0u9GqymZKKG6KUiWTuJOzYhvdGmF6p8%2FEu6bjxHGJ%2FgAPA1Y%2FGNpzfqYDZ%2F%2B9L2bLaKru1M%2BoMxpt3BY9%2BhavTCRdmKEUZdx2NZUpuIqVxJhFmpogYd0ErUdGKKea4Aa0J00DnNqgyG02YtwYKEvQaEsHGlf4hzG21Ew%2FAf18KxbEGmUXzyUB8waImtFLoIAYPghNr8PkRaiLJOsl&X-Amz-Signature=22d83d478ea87845796cce44b72483471d1944fed28e46580d43292c9eb79403&X-Amz-SignedHeaders=host&x-id=GetObject)

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
