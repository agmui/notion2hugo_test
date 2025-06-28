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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKPSBWC4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdE5ZyTK34J9%2FxQw2Xu2r3ZRXWGwwgKUZsfVVTxbq3XAIgDSaua3XA1sR%2F2164lM05iHpmIz%2FdX%2B3X1pu9KSJ7YH0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHkYrlRoYnxvn5tvSrcA7EAI%2Bg9VELPsx9Gdm0pRuNUo0UoCCQTlZWo7jlqwhZrHocOpnH5C4zcKT5hUdQe9VbQ7XgAps7xvYVyWrR3C91P%2FgGBeyWzpYD3nW33sNG%2FtKilcgL%2BHfGj3SFOwchVnMxm3Q2P7FvkjmXCaWW02j2g%2FWO24WpPYaCffCH7k9MZx3m3OpsA%2FXDtZH%2FUOh5COYfqWYbcWzC372ZC4KGVh0PfUDmMobXxqPEseN44D4CQ%2FXuiksI7UEthuduVjXgGgf9lxkCyJv6vpOLvIJkZW3cq42tK8N7HWw17XzaI6Syi%2FyNKJNKjPUS%2FxmUHlHYspqxQYxLafZy%2FY2jjFtIwMijlD5DPTExHEkR21Q7hn8NP%2FW4qSnTTRruW2CK%2FpdSeJNESqcYlV%2B8xtC4sLupneEvLPUFdoKosxa5Q%2BsTxCUtkfRyM%2FCGlVSjlMM%2FUo4tIWI62yhQe9WXiLgqhGeyI7y6f4rMxWGzhRC155vyr0keZUjCU9t30uGL5ADxdACzuGns8Lo0vhObuPZ6ydE2HyJRHSxH%2Bf60%2BaZKEeOhFJ4Alxf2ABV7h4Of3%2BXyK3FgmlIopJQaK8GwffUGh%2BPMMfNef6pzEa5ytNS7acIGjPBWsyJdwkLaHl%2FQFDCVzMJWbgMMGOqUBKDBM12By1yTTbr39azgJSWZtq%2BgW1xZI%2FgkuwBjrOPI1bTU%2BYGXSkzJ9rVTxqv21f2cSma2FdhMQGxXfgFSiUmnG8%2FzL%2FNdBBm3LyWFbKuC%2BmMno%2B%2FcrUfIKAabBgkQjMuQ7rLV6K%2FZM7xDrBB3YzMakZn%2BF8cTZP5ftpuCUKSmie1PHUy5rFbvS%2BlNfNxJ%2BF4VA%2FOcIcL0UVMep9WVwDRyTgcNN&X-Amz-Signature=04116e590fd484d81060ee8c9f922349601438576e3c09dd9b62b2f40c5c46bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P262LVP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmAyaxVAYiqLKcWJm7%2BB4QFZafe0DeomEbnSrWrV4tnAiEAyJXuGM1bkRHy2y4orPHxHFaB6zXP16NMU31%2BiKqxL8QqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9taizILj8lc9TExSrcA6s89W7bhFv3JiXYgVHXC59%2F6xgio5ml4pgYIokG2qn%2FfHuPJ5liGopaXwUbV3vJti%2Buv1C6ePUaoi3LUInwho6kZTdLdaXTrd%2F3A0Ml0qNlpdcOcRB%2F2HJnQEc%2F44OE%2BYcxNoe6v0feWKFHC%2Fyz1Ev%2B3nHdoiWvCH4dVNpSnTsK0CXc8ftCD%2BGScPWRtGguzrH%2FB77uT57uFI5s6ukEoOF09tL9lRUMGqK65%2FOKBNiUEJCucv35Smeb8otU%2BB%2B%2FTNF57Ulns%2Fc5Lfhjo0ri%2BVwrV6bmLiyIM0M09MGZbja4Ilu068mIWW7sRE05VB8DgcTFeLrmknhSvM8GOzL1j68qxFhMs5lnhT6UOJbFGcgUuyvFuiSntPvi3CIEhn2p3UTXEkj4o4tot%2B05LzfuFMc2cx%2BppQGeLpb3ZN6WLmNxpVZXwqMGE2poguKaSxu8U8xbZlQtEVNcGGgSinQ9WmVtuBZdYC%2BjzNk178cWSeIwFa9yDBdag7poaFCnYS0HDDiG4HCTjPQlGM5%2BN5HMT6gTImY5xojpSt9k6iazEn6v%2FUYBXEtdnr5oA%2B%2FB2K%2FKSzRAIu27Sgz6jajauyrYoC%2Bo7wN3V5GbKFPqoIRd%2B1K6GtOxQ477ourEVAVJMOyKgMMGOqUB1rQhZM0FricDBQxYjawJv3mYyUuC3lK90yTT0iOYlrgiFl2SwWD6o8mTInSKiW%2Bu46puxhnfQVRwFZdrC%2FY1Noqn2BOgCsxQ8NY0L8qLEpFzx7zf%2BVHnEW1e%2BM4GaEYARVJqxstYbMHcKJ1JdzZI0ilwTUZgdA7Nr3asZwSLi6at7EdE9FdUZSj%2FkobX0HNvGTDtW2b8hyLee7YLHtMENHECtHl5&X-Amz-Signature=6371f09bb8097a70274d57974e469e9659f216dd69675b91a5a785230b59e850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
