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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMGE7HT%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgftS4oeCi5ZZDGYVQpGvlXkXr6Vjk2YudDFe5oYmU0AiBsLknP9FVPAbvC0WXDd3u6EXj0WaAjX7VRAQo4aKr%2BISr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM%2B%2BXnXieGZd0ynWidKtwDYFIki5%2FlxlWq409S0g6dfe1jglaK%2F6wlucDYA2rYKsc5J02CDjB2EE2vpoO3QOLAK1VGLWpsFjpj5BUZAJVfLwTe6TLy4jazqcwxNVXfmHcKZkWKiiIl%2BW6kJmvH%2BzewBMYRmwJJJo3WPH%2BRN779zKsPVOiulVqozFH8aLGemBIACkQNUJYZmlpXlXOjcM8xa3NiU72wG37SxIjrjxQvylk9UycrL4ABI37OcqGzQTHNVkr%2BXJvK2hoEsgujza3%2FP%2BCB%2F91ia7O75zRaLkVehJucqncgb3r%2Bmw%2FrGz1QUfxndV5JpYAMIkutAWVqv%2FuwUFx3S7gtnjR0BtNDtqXHrcre2wr9N%2FxBS1mmL1lrnPQ0mZbJ9%2FPC6bbcs%2F%2FvnY6CwuDK1JyA5es%2B0lznWERk5k58gVhvLeVQEfolyfqqr%2BTiYmFpBTj4la%2FZdcV%2B50uXRaXFyl8aaRlbp41sABgmjeGAYSSZiohO9jOeQPSaYcxcZdHFe3isYCXc%2Bh0koQ8EFTSEkS5da5%2BOoYqTDr1GWDP2%2F9KrqtWBpS8cGf1cnlNdpWkComvoikRF4Bq%2BpWkwljw8Pv32zLHKnYJ2TS3%2FalLiipR2vfv%2FbL6DrGpXCVv%2B4YOAZkx1PX7aAu0w4djUvwY6pgGoZx5brSDAZe7fffNlx%2FiFMmZHP2nnvp2ulHDE5FEbK7%2B1HngHRBpudK07BPp18lUCidMdbnC7euAmU6%2BcO4rXXkC9uSeODbXb8K7OtH9dxdN18ICOVVTTke%2FpCtRby7PRznaMQBkWcdpdxQ4A1zy8oaivIgiq16TGHJ6KTcxB0a0fMwhilbpT%2BFV2VQXL5kVESEhHk1X8EKPXraYiHptmfjvKCBv7&X-Amz-Signature=ebaf157be9b9d62f0ecdc636677d54e3c2d7e233cb5fa860ef4e5308f3a0a477&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHESCBMX%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEeHkMA0e7O9pbMn67h35AMWFZW39mKflR6gU8KKHlHwIgeMrSSGulWTBbBVHfnxrDSRO1BmOjxGnYT0pxDMQr4nwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMJpho2hKjKq9X%2F5sircA4R8PI5miDMDoRg2BJJYVEZKyNbUJttIHbI696ZhjE86KHza1%2FsjXYT3gVNcMSP4IUIOPd5Edqblw4KeE1Hoc2woMD2GSfmMIZ2EA3cePXtrqkE9qxX%2BoUuml1bZ4tznwj0kfP%2Fks3w0pZkr%2FOcRpvKcEdT%2BXfbYCZck%2BgkGxoFX5nzs9Un3I4j4HkqwDWYZqfR9%2BXL0F8%2BjfEswZCY2xHNA%2FAiYKrb8OCEldsn1Qzc2K5UVpT5yFfBPWQNlpcS6hKasJjJNIN5iEUn7Gh4F4HPcgvqOL2nG2ofgN8lTtBs3aL%2BgF0xUOSouuMokhxmw3ioi5GwpgFTdSBTu%2BnVIZZ%2FBYfrMV1mTvRTCBiagHwa8dlZCsCk2kCW2cw6jxwovvZVlqoQqCXdXX6HgpKdNedaxYJOdpqbWecdppzBZLbaG3xVRHUcMgxwaPccNOsbNdiLNxqgtSh4hOOjioO5ppluMU7Ws%2F5ChcOmEHt91xOFhtIgb%2Few9OeaO4j2gNZbrwkJnjaREHB5652w91VNDWKd5WPIGizEPfWcj3wyyP7xbSh76b27vnCaNes%2FfxFliSQ%2Flju0hNEB7EztfvBTE1iiJqrS4CcmkjL1ppF5Hy2wl1h0oBzHk45BfYCRQMODX1L8GOqUB7KZk9L%2Fbe9x07ykrhT%2B%2FE8Xk%2BPDXDKP3skX1lAcYW%2FmYTGHYOAnic%2F4wE1iqC4K8tpI%2FQyiwY7WnpwfU35L8%2BZnUWb0WkQZaprf%2BAF0nPphnxGs1K8O6pum5G3DNGfMb1Dd15Y4iydvK68TvUTy4fgZ621yzi0nYM6HSdZ1GmXgzdBFukn9Age2HCQhfRYByjLJnMGF2vJggqN735wmHf4%2FcFAwK&X-Amz-Signature=0a6f7ffc6ed7691762093d58a37e5042f8a4e898c7ce0b9d48265a950a073b83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
