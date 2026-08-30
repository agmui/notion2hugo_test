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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CLGTP2%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZVpRTaukubNa0g4nD62HRc5mHe%2BRzWUCWbIYcp0BuqAiEA52Lw1fdfqDG2ZQm4t9AGZ1yaORBkcSb7Bk9dBNVNIJ8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAKDKW9EZ2XZXr%2FG1CrcAw4orP6qTYZWjVYnxKSnPHICrdwZTSPwYHC2mc5PeeOqi06uG4mIYI4g5eDX6rUnX6kQH8QaYB0mXyA%2FvMio01HiyvnagmYWgmpLk8ZR8a%2Bjo5ISw7yhllPsCLUIvZfWPmR%2BSG4nY0C3EMaEvRvAJMsxvj1BcZ4bCAyFswvwEzxx%2FnSGSxu9TvxumiqfwmTqLXTGANQ6Rczvws5ukCR%2Bs8%2Fi2A%2BBnardR3MNrW%2BqdjIngboyzAExnfjh0NhkZdSbXpueLSq%2Bsy%2F4qXbzn%2Fp5v9hQ9rzt6ziujazeirDS8x17lZNMyJK1MitOFvrz8tymYkyL3gpmisk4nJo%2FrfCDmAkUFpY%2FI%2BICbBcPg2qdbkANghEqbfBbb5oBAcybS8TP4BiHAS0zYxDr6TWhSx%2Bw7DxQuNWr0GSJc%2BvrBR5Vx0hAohTgbL%2B6RAozCmVITlGTA%2FphKjRtaRNvbdUnoAn4uryswRgsPSkfBb8cUvowOb421fdoSFCsLX9fGKbbxzhSv6qaLWI0HqsTmJ17LatsxMMAyx7RB6pik6HwZK7tR98YCg5qotqydpZmlsowwcGYT7Cn%2B6mLmQNKyku6cWKnxjUgrD%2FKJTYrkIIMJaBPo9DamaqzB2FCg%2FRj1%2BTMMNvNztQGOqUBF%2BagFQq6XiFueba5lBNgNMkr3Piq%2FDcv%2B4zZf9mwrxGMkCa7PWxZNp9DrO45R54vDd5c2K3pnVGQ8YPoQ6E9Tuu5F96t0oZwv6IyH6ABNx%2FMIE1lAY3fWeVGLjP8M5PRszZAxETIPS%2Bi0pvlbZ7wjMuU6h4Bjetb6%2BVa15fJlLhMrbpYT%2Bwz1Zkdx0wCDUgZimy9QQMtP9Va%2Fb53mFj9Wj%2FDVB0E&X-Amz-Signature=2f62a131ca4a1c2839f1710c55a931a5d42c62cca3560e8bb6559919a3381d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZWOMZXM%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK3ZyIiIaV4FWX%2FewMseu6Wx6hB1ehMDAduvIXXwdrhgIgW3fz2b7VcQtYNGl5sSnCJoW9qaFMi42Mh%2FlFjUuP1X8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIoZ7fq9qEAaf3H2dyrcA9sAxOZzdEqp1Di0oHQSI2SnI%2FSmESoTmhc2K5sw6w1dITE%2BK%2BwgkS0lxsO%2BEqZFdMS5ht%2B1dnEA%2BgYbdQRcCNNibWWqkErE0UiZ9taATYmuE9OBPkmi6h9BT9NjpLT8lkutaFLm44dRhgt6KI3PY0StAV9Jc%2FvKYpKGXSiWjYiQp981gSlnBs95XZ45QXYtpZx%2FhoYUs5DcXehDJoaSbT0CrxPZd36Cs7s%2BYziFSZtNH1x3G0f%2FQt%2F4Gh6F6H035TS%2FHtDIK2mPDC792SGFxTRmR7X1EA49CJpV1jfu5xa%2BqbQFVZ3pN4IyPwONvPGNecXk%2BvyUlus0EoLZ3SWG4NfxAKXh2w9KvuP%2FQtuQDaZ%2F5o3UI%2BhiyfPBZnjuejhgx0rxW8o2IbFCIVYNKXRKUKImGmeI%2BuWs%2FVsvpkKxG%2BqgT%2BOLMs6VhrgIa9Fa9V%2BOrJ2PcwDODhFGg5RejC4Y4nSKkmlR%2FuPIgmrNg7aLKlUXWuLq23Q4QsHTG%2F45zoffqI0wKOVgF1ijVAnzt901w5eYC3DxgMJZ7DApXcFBu%2Bn3KMliMknRaIRjLbMRVmaRiLB5VD1ggHxdlIaJkXWcerdwPB4TN2JZX4n7GC91dA8%2FqVe8GRt2KBnl1FFFMNTMztQGOqUB63yfjd%2B0A2hkJnFzSXlp3ktXujgHRZTq%2BXmimLyXeDcUrVlGlTQ3rrrN6xzfEzkptJZIirAhygY74LCI4INJOWrmhf3PtdE2SPe9krhg6G3gqjvVFsmHY1A18vjzOb4rKQTfCNBpjXHg9mtpoM4FZdE7B5TG2%2B%2BsR0E835%2FgrvhCtc2ITX6JetapxoOUZpz1Ghu%2FvHkxruW3OVNvdQzHL9wsxnA8&X-Amz-Signature=15b576003f704fb019975375af14d732cb35986ca77dae4f4efa52c77d902bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
