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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VAFN6MR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCZCRU11gKgaNPA6ehRaNLiVpZKVyX%2FiFTjB27q1vY7%2FwIhAIccwYPNdB57D025DL%2F9pWbhATJW8Tx58MbOnFDPPp%2BzKv8DCCwQABoMNjM3NDIzMTgzODA1Igx7d%2BF7Giwz1EqgbBoq3AOX9Eh2lQiMjmWDLKRI2FDs8H6cKhwgmBm75QHC7i%2BZbsmAn9rSsGBSHYhwaqjpaAquHN0wAHUL%2FZmeZRYQF879OufT93TXKH4RK%2FQb0eO%2BZXyYMh5HXJPNssPm4m4u54w7PNca2bbP4elj%2Fm4lp8BKDYFb7So3DzL7TTsXfxYnODkKRxBT8Wr%2FSm%2BxILQ6tPEVaOG7VePHHvS07KXyWGaQHt1dPNZhs9G6vy0OOfc2JVe5%2F5wrBc1gtQBa%2FUs7pzHegkrpeFvah9KVPmK7UfNAkTbf%2Fj4GcwgXKQrxUEj8dKWuO1mKEYjhLL9DmTupkhlAtmxrKu7dNwuOZ0gJpGwkmuOiWmQzEQsYz%2BXkmseB1nTUMUefPHPaCsBM5QWRgyDz5yHhc0xK1tHbkyFmE0eus6GyFfAhEHYU0EjPc8C6X6bVNptNdKUq%2BsVgx4APFFk%2BdaxsgtbdmiOFn5GyUiZo2X7fGcxbLrirYEoyQnyXSy48UBb9t6%2FwSIzg25PFssTB3NQF9xJBfoyrn1IajOQayXgX3SUWLXHEGUTycbFIcUll6DcBHcPsZ%2B0TWSekfdFSfk3FmhdA3DzdhygmCJtdHbvRMvrm1Ce0U0FjUQj5MAtvzfNnxN44XFXf3zDjz4DCBjqkAVEIOle1SlZ7gIWAuPlqzAn9Qldl2Ce%2BDTrdVbGmAyGtsC2G1%2BamUjGfZWQe8wJbmhX%2F9D4tTVYZQsvr1Za8Q5w4T77YYUe04%2B%2BnjsGqPZ3Vy89jDd%2B3l9XIQFMH%2FDJbUI3ra1eDVGK5iRwYW3pd7PERYFxal%2Fk0BC%2FcRBgL4naiy%2Fr6HrmvFOflh4G3hm72CwssgdOS99NJL7DOXFiDc9i%2FYhd2&X-Amz-Signature=c6fc7fba53826e8f2738726e7c21e743d69e1711f44dd9eeb22f9d9ad492b008&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTQAVEZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFaEktKoXucK3Vkh0HmxSKGo8f5MP%2FIu6BFp%2BwPiiyYGAiEArc2DtVJpKbr2LgdsJqtUuACZTXwa2AG5%2BOeJdSiyK%2Fcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOclO2TKaXSLUBuPhircA4ZKVqQFgo2VDxPB%2F0f0CbE5GeIhX2quVml3O%2Fxif%2BBvmVmlv8nz6Vu5T69IciUN3B3a2qm2sPyP9R9Dqqu8GrQvof3mfUAs1BuHIExdSiLUb90lHYpculbIWSFccBD0nKOEPKDrgUnaAOtURg47h9azhbHEzTqrWrvn4iN1dEtoxIwcnLUVG62GI3NOA6UfuElMCJpcfQCKI9qQVn3DRwOilaoFtGJXOJpoHUZV3HwY98Tz0BeVI2aWAn3KenKOxHbhS4aiR63C%2FeNmEqh%2BOvKCiitfxr11oQfBfBztIhnF%2F9DClscnDpVraJWSfgd%2FanaGkDcqzoZNDnteMjvvF5iFHfWzoGnPlWQjy4P9ZLQsXLFk4Ucmk5MA7R%2BpgIo7GBPID1Krnk3Qi3ksAHG1i4dm3j%2FFCjw1eZ8pIxvGCTUdA%2FKaGcUidD68xQrIexWtuESGvQRHbvektvsIs8HPTzxXA1%2BDGOPG%2BEC%2BOkGpXsdS9G2XcPmwVbbtb94Kl0F3EfLQWOUOG8YNA0yxjp8nZvIgjNm5rE58%2BfnEImBSLXN8j11xr9i%2FrhJg2MnieFFTT9xAwt0hT7EwpE8uzBOkp%2BKxDzSM4JVO62VHForTEuQsIYB0ve5qKp%2F%2FfiPnMOzPgMIGOqUBm7tUrJ2qbdj%2Blx8UT%2BgKqjGWSlzMD35meGMGCcIRk0%2Fy2ipUQRVtMQKlUJOGtMZVFKI4HxeluwPnrHB0%2BRrxGGY5k%2F6kp1evPjDSm4RFdl0n98dXbzI7tR%2FWf6LLb0od6NSj%2FktZkokjbRrPBvbLFHTM%2B2naVMy9vNvYRko59EgDYa0WaucqWlsEU%2FukyP4LsJfghGjBBoitztoZkR5KMht760LR&X-Amz-Signature=4c418d9807be2289424c758e6c3c86b5a8a34db8a2a8344108fa5fc1625e7472&X-Amz-SignedHeaders=host&x-id=GetObject)

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
