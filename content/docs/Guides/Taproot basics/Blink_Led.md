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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKNBTPSI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAhxd130YbJhafQ0h0KZs6T5zGs%2F6HXrInaegd9t%2BxBmAiEA9VsG2X4zF2FeFhfBI4wk3BBLOI5sY779yOEtrA8e6skq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJOPxCudLSDkUXHCeSrcA5JJxTBZpU5eGyyx%2BGCdsLoddjVv8pMZbGnWFE6UREREV6k7aCAOjOZ%2FAsJvHPW0LrMxOTq5IqVHakZaiLD0KIQJyFImziezKrIWCqH8kM97A3B4xJLy%2BiECsbDTtAqDVsRFzmModsVtNlHOOvoLucefwtNrUYmH2QWuAvNo2quMdIBGmY%2FdvuPKtNSkGSmBXzKnYhGsRA0aJwBQz3fvkoRKXe44%2Byiq%2BeuzIlZyaPBTswvvBLPus6UYrT1qu1diNulb6GWyXgrfQQ3rP6mxqjgYtKoLXL%2BA6DX026FfY%2BfgKH3heSFTNvqa3kSv0M3t9nqCT1mBvjiMgTxCKeIJaIZk7gTn%2F0YhwUw6P6s4Gaa0Ro3BjNsQiRhyuCPNKLCoUgmfN%2BNMUCm3wOleWD9aXGAX%2FgC7Ja%2FjDHB8e7jvJePwULcA4IzjK%2B2%2BeXWRrHth5kF9fOUOakVNY2x54tAafPVYeNENzs2IqVBY7J3EbTp7jbEk%2FiKhfFPlBPTnk59T44VIa41AnqOYOUovpXInnlO878UINducnMTItOGwXK6KnU1BILl3ZKl3j3PMeT%2B0LkuBv%2Bj8VQhpSfWmWHsodAOtxTG5crh6cJwXGIKqXB1OJTrC81%2BfmuttHwX2ML%2BVoMMGOqUBBVV9mTZNmFdxGYL8%2B639uosJhy6tvbg2QpUpe20srvjpPpaIBfQWqZus0i61UDyVYKu0q3b6zxMCJaP6NvNY9akfXcXrha%2B2UWv3P0n80qdcFuwgecHwwZ38dw709rnEywgfyJmilgEETb2OOzXdRex5SC3Nhg2Ae8G9zJyYHGEOf9Ip3rLue4V3E8o%2BlU8dr6hIbU18%2FVo25o1T27trP9G3b2K7&X-Amz-Signature=042b770856de0896332a2badc7c2d3eafde8e4758dd2331ca81fffd67920a324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIJGLS4X%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDrrzvj5rbDRI1g%2BGWkQAjgu6EA8ZeHqAV4zrSj8W20SQIhAOv5UXGHt%2BV%2Bx%2FNxdMeZ7NtDQZMhjQilPkqsTsp0zHpYKv8DCDIQABoMNjM3NDIzMTgzODA1Igw%2FtNz%2BFEwfSh7vjkAq3AOFULV%2Fj%2BUmszdoj6mLfjdOpyDu879lQUot3YJ6IyLbtIs%2FLGvWPY0Ee3QcJf%2F0Hb7Cly9JkPIFM0ulinuakU3hTKT5bFySYmEi9sUNec%2FXXIdAycPORqCD9SCIOyN6ifwpH9XGHRgpqRXlkaOu7jzTuLTGjBHnu5iTE7PZJhAcY8qmP9t861Rf2UrnMz6zn6BV7jkoHwMEFW7yGIn2ImioBTN2yiU2y1oTtFKFG0mMtSDDTgo78HY%2FQGmhJ9Sv5kAMruNH9BQUKm1EZJpcrywV0SIvhehaefRbTytVBgvM4USsRjDvOgB5jNbgCaPbagZ3ax9x2VxSZIQfwqclZ7KJ4kSjhsSACiMG4v1c%2FvXWLcPMEcaq9czXTE64F7R10ATCYzXbsHbdFo3sFkdh8CPDT9wK7rK4X3J1dncyWDiMtPw9LoHVnydmzAUFVJA31D4oXuR6PteAbF2PN9lnDJK8x%2FL%2B4OVrXqMM%2BDxTzD%2BRhghpf8wCU1GXn1JUMteT8kaiAPYlaEpl4s8WJFipL3vI7CcWlUzjQoIbFh%2Ffl0bus1IgscLbgv5VKwMP3rZ9q%2Fnq43lsH6BeVcMdW6FjLxdvtS%2B9m31LCwY6SddJuGBXKCH8r2osNFj4zzWkjzDplaDDBjqkAcd229w8A3Ew7f%2B%2B74MzVNSRHqhtXKW%2BK%2BCEoLEeyPo%2FENBt68pPkl%2FWDA362FIjGtF5tDIXEsaDqL6d9kEywW6xwlCeXCk5e4du%2BM0o0oDcAyR7Q5nuPjkGMNofBtNChS3yXF1n7E7sUlQ5e7HdCbTfgljUnmt3Lu6rD3jiSqAJeFPJOoSHbiebvjk5LyB6E64DJd1CG5Qpl%2Fkxw4iBy4aogq6o&X-Amz-Signature=9ad875cf13becf6a5ab2c5f273c54bd0a25572651fb25b99435b49bd4ebde04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
