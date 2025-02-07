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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH75QMYI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCmD0iEGhVyslNyrDMqpr91lT0SgUR1Y19IaiF3Y0V0TAIgQ%2FZuPXrGKRszyoA1Ocm4YR4vraqJQGmT1eETh6ias6gq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDPMhRyAu1mdnD%2FHryrcA9SqzpXHY7piCB1MMvwVksA5Y5lGGu0Fjxe86HmZEdaTHyza3TnfmV6Ir5XQE3RxzEB%2Fn6k9CuApCxqzWfZO1gVVjelxwy%2BcHAp4V88xPQetqJXiD3t1LspISmER%2FPxLfr%2BeSf2ZLszJycitXrQouuP7d%2Bfe2HwT5FRm5Bn%2BK%2ByiFsYN80wufZvzQQembayyXIpiLq0Zn6qwyAVtYRw7L1iCT8XKpUCDaZrNhqsh1Umw0uSn2y0IN7edydBFKQkIpwd0Mfb4pzy3llVAovkvDjkcZctKybgj6HW5q6KNW9%2BYKroMNkPOStoE3Ltx0wbdB1OpFnZ4yM24vfmzd7UUy14dvu8%2BYtkx2uZoqMwyDV%2FpKaDyIeyFzunuR0KcfSahLrUHDvJqYh2ljcG12DiiWZKYXuzlTjV7aKyFGqtIW3Li8SvmuUKlBREMl7Iaw90IpCKFxLJA3Bor8Z0Pv51e8zzfxV%2FbNys%2Fcztu5kyOLznYG%2FiXEMuDqtwT3%2BPOyOc92mR0J31Bqd3%2BR3Y30rjg%2BLRZtxUdQ%2BWdOyAWqS68UPB0S%2FZbyZMMe68fst%2BcSzo22pINf3qIYwQ2KVxkxBAKNle3XNrFzF%2FCbL6yzU7PCwggnqX3Hr1pY%2F4bdyybMNy2mb0GOqUBXNaZBSl4JfEMt2yG4x8GtgMU%2B0dtoWF42SWYfweJffN8SmbaEiaMvKAvHfUvMGHd1UKcMdyUHDoHXW8MMCmcaXFOCGLbl8T10XzNMn8tPiQj9uzcvz%2BWxn247megoK6oSNAy9%2FtSiQfE6mDYnzLR8jggrbOK9RxfML%2BeQ28IzO2Q6zZTXL0n8j1yqTQM3S%2BN0Ark%2BKBLASLl%2FL9AfZoYNdCpyyJB&X-Amz-Signature=944f0c74c21737b6614d78d23024db960c825b68886e14bda2013b11a203c229&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IKBUZV%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIB%2BKJ%2FPjZlvA%2FHBweIl8IMRui%2FYgICJEVrYXI3doVL%2FIAiAk7hIk116GA%2Fba0LoGt5wGN9%2FsOJvhNeJuUvaq7gLNXSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMyQnwxCoJ5qmcJ2oCKtwDiGJcxI9QG45GSA56uBEPHct3FPo49MZU%2BwP%2BkTimTuIgue0Fazt2pQRRbdSzRYK3r2W7Wl2EQo1blkNRuos6WXjJlq6oYAOT5QWFOrpKdA8g%2F4NEgdwGSME5HVlHn18x%2F88%2FjMs0hf79FO3edq3wiu2fzq84ZyK6uZvJsWQZ8mJOcBbTj83guNkdOjSCgZwT0OZ3DdiMbyTAcCBbd7O8H1BDuDKZKcIx3mhELDyRG5Kf7%2FyqJp4ToTEoUS9uVv8n06F5C27wZLA75J%2Bz2kirtOlv0rHdx7PW6CI626kbL%2F7VDb9LPy2HUV3YjwayVLBYLC%2Fs5tPUUxZ3YzFCqQOjyNa7E5vKLmlN%2FznNC7U8rUiOeF%2F1qn0wSJSNUqCEfschJ7des9LLIw6oAA%2FEY%2F2p5mF%2FGFI1ZZrUiOKiS1%2B1m6pj2ehOuaYbc0W2vmT8tHOx7a0yLZ7cyrsI3AynA4%2FBrfL5iJF5nV30XK%2BTJWdyIE4RCXQShUA10%2FQQUpKzvicd8VB4maxryyv6yTpQKf%2BBiVqjwTAKHcG9%2F7BNo%2BQWaS0M1Yj7%2FaN3eeXdmrmKUsRpqOkZYr8b60fo6%2FYii%2FsbSvAZGsPXHLiyYXTQqki79zPEy47S09EJdODwdzEwtraZvQY6pgEJjIOZ0aUz4lQRpU2mtBswxX3qB0wSJIrSY2yw1CW9%2FKYn4Zbdoiq%2F%2FnCbQu8FA0Q7RnROTzLC2K7oRhAfxxz7J4dXlpci%2FG8IXVcE1rA2Kxex00LA5UnPxx6xjc%2Fa0aqiTxdrldlgyyqGhB4Iuv0GA06Q%2B7xcXx6rrE%2BvdVb1TiHe5IF9ipGuy0xNjz0FR7uM8LE1cFF40hDoxBe7MjWe%2Fj4q7p3t&X-Amz-Signature=826adcad220dc0b6bcb7f51a315ccd28047eeabea7418054048f1258810e7245&X-Amz-SignedHeaders=host&x-id=GetObject)

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
