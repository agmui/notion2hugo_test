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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUPREQ4M%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUXD4HAFYAqBorzdifVcQcQIU4lF7ueOhx1x%2FwM7SdtAiEAlAGXsue2Kt5vSlaBBcCy3rIvd2Wp0NtBW1%2FqEMUSQyAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHzulbeVciLSWiIxNyrcA4EdFjEha19X7DrmHaFMt9Bk9NFQ1aJGPsC01Jj5Cf6EB7CmJcHUgONbcYoI1JYDyAFFvKpLh8EL35H7HEAtQHBQ7y62g3nv5rwq5Xwp14HEfZz%2FaHj57MHLE2hFqEb%2FVq2GphMv2eGKMKDLtSS%2FoqcqPiraU96O0WJlUVGDJC%2Bh4hVDVwMooeQQzcL5HO%2BjpcyBbYgmbz05V9Boaa7yw9eD8myl4biRwL24bA0EcWQLn52y1SVhNzzeGDQtdOwegQ7lBWtq0xui9QpQp8O4YeRJDC75h%2Fvl9gsYTxYIwtHKWp1NWoQWeCmC8xQ1j8WuOTyVGn1DphetrdJ4c95ICpwIMpYUjE2Dox7pMwL6G5X4pzAi1v5Jau9IjYKUzfFQ%2FUkbmOcmaw65Mpm9uzEzMYr1IbRnW%2B9HBDSmhv6RSLVJXzSsm%2Fm6yBNMlUAs155701m60qcC1PWtI%2Fj%2F3VZX1M63JhfUcRCVm4Wkz0H89u7FT4shFJA1wr0HzUDs0MUn6GdArquuOmsq59JA4I67NJvd5olkEuy8mL6L1ZHy4OIoDCTTOe9c3ol0P7XT9UhCInoZh3EJHVnJ%2FRqesFbWH9gZ3XMecZUN9EzNZ1vHs%2FPvMS%2Fm8YV8S9saFvqRMLC4zb8GOqUB%2BgmId%2FvhvUOGZp62lG1guRfUIt%2Bq1DgtPuXC26l1v8AU9OGO4HTa1q46cIBUXO0FjiL%2BWAbIupvlhfkwlPWydxfnjLrqs6Lfy5c0PcoKRB%2Bll3o6XD%2BTtHEWsUHipzsOjqez1DjSxqFzFTOh4TfuM7%2Bnhidwcuxn7e15SNbCYY%2BQs9wi5xg%2FqVWpJYGBvS3o%2FqPY2fOeBnoBYd57ojuToTKNcSe0&X-Amz-Signature=0f4f19ab749b24d06f9a5400d50f00f045650d08f9cdb8843a3016c05181211a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CICDZIJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0p37qkBz4sanG%2Bwah62%2F5W8m0XLY%2B197IdNq4Or%2FueAiEAhzB0cY%2FMVUYgVbA9yPzEyjSR1pdNsLkNgkBQ3KQAQQMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDB%2FPosx7NvF%2BUClXGCrcA8iawb98DtzAcB1sDhxAKnFJ%2FubC8D0E5Qv%2FXUS3gF400x%2BQj8ozbP%2BKiq7lNvEJeAqbCaYG5AmlGxd64w0fhOq4sYJHP5LTtrInnak%2B4Wv3RS09MEVm47qlkU7NeH9q24TFVStBbTZSvKGKfemsJ3mdkuI5n4SxKxDhHURAnS5kwDaEZLKYsJhZ6cAFbynmdRP8t1H%2Bbk0IZBBzIo73ueV9wCJBZhGohJ7HLrEURXuK5kH70%2BdpekJLzNb1bNEG9q8AeQ%2F2xGmpWABPMsxd%2FDKGopRbTCQ%2Be9FI%2BLQYaz5olu6wQ1IJjQs%2FictfAS9iw7zfQBdfVXKp2tVAkTyP%2Bk6j2w%2B%2BUyEhucINuGrLADtWgXIMhwptSd7pugEVd5sx6ldZsUSleMYqSZiS%2Bpfs2tNDdnEvSIoDyjV%2FGqoG3O0S9U%2F0QJZeAdNgoc6LXgoUUbhlR4ALlX373uelM2OZEbgggzM0av9w17bs70JSKhLdDaQarCmByxrN78OkoREatYe0PuUH%2BzgX%2BPy%2BVX%2FM4AtL1rnSFv8Q2HUogAs9%2FxgUa1nWx6oYh1HMcpxKOrhhtBAKzRk0WG90eiZ5CuU7uEOIrZ%2BZRenFhyE9Cn%2BKq5%2FV%2Bv7jymoD98vXkkDTMP%2B5zb8GOqUBLEwfpWjBjKrenp3vjT%2FiwqPixfNJJspTMtSi34CR5WByFiqlOpEKI6R32pAknFOUgMQeg%2FWIs2kywakZWC8p1zbTXx5tuUlJVDFz%2BAbPNi%2BAWbtTbbVoLHPNXs5PA0Ce330uuk%2FjNLWqMMOXEVEOrwBiBAwxtXRNg3hMCOcnWBGC8eMWcnzCxA6aIn4rlBGLCUk6pEoNF0%2FtOacf%2FmQ%2FGn%2BepwxJ&X-Amz-Signature=73234ac28a7001f77228bb01f3c990cbbe1764a4a0d060d1c4660e4d42cf00d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
