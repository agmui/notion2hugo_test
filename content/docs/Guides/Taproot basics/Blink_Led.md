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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBTDYDN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDz%2B36UUFEq1nsHqWqsJxrZtF1Riu%2BAdHR8GqFrCAZOBAiEA%2B8CJBgwZYB6i3rVkboyXNZHxe8GoPCn4eFYPyqTa26Yq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKaR1Y9uPu29VrE9CCrcA%2BqhJOPzDeUhbmk1MoFSRBS0xIKidrxf0Wb84QBhR12Vb0bIn6cHjy7FYUHGT7JdrF3vAeFy4B7hWDYN%2FFLBjI1eaTSC6HpBuSx48053NKK%2F9JdZoQW1P4l0lSsw9e1tAhPTpfL9ON%2FgDKwi3YCfG9JPFp0Nkj8wi8onqxDkH8%2F3ZKoD5HMWoaUQIuvSzjc%2FpdvTTg5Jkyjog6GUiMbaaioZpjzqC4GtQIvbFNVBX86W8yF5AB%2Fu5mi0qD2UAHmIJCWhoVWj%2F1wco0yWokhwM6KUvAxh0GKh4MvV5RS4GvBNiOATvzGvBHrzoQUnvg4xMK1sjPgbqCRhWrgVwhEfuDAj359dTP7xd5KINseiuv%2B0H9EpCq4rbXC2axTfIuz5IsmFBSBKxWQQQNR00m8D%2F8nkdf%2FMG3sbAosQDc7eatlJMaScoQWytExRWUE6SNXU1BvVwnunWM7Qk5Xh1ct8vzfhRkgQua8YxR82FGgsoF4x4BtpJ3nJQ%2FZuOkgBSFPZ596oKIB0wbytDxX4cWzzfvq2dDm907ZC4DN9lLBTa4%2Bh46MNBUsgUsJH07RQ7hasj4%2FBYYO1eekTxASXV6VJEre5%2FeSTKFzd64vB5csLFxWrUsrDzym18mKxUWtUMIyj%2BsQGOqUBw4XgpAJdcuJ9VOW%2Fo2bOEMXg6BhMmjuA8qe36g9incoTnVNpWUUjAfYJQBz4CMO%2BryMWhhimmZn%2F2iCq1NNVGT6Uho6lHePrlpHO2JHDxjimPNsLf8ur%2FGYfj7BXIYWuPvEhXzheMf5zeC7W8lnR9Xm59yz%2B8mpifK3B2Tr7eJ4xsG3hQtSytFQboHypBScUy4vA%2ByqRHvdqUJUTOnv3PM4jtQNO&X-Amz-Signature=3f6d9204ba351354a9a486f50d83cf2016e31d94d3d2e07bdce09e0769cb4674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJAXTPCX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIArSm01Cz9DyUTDch1G9aK5WRAUMGvug3LAA1B1phPfKAiEAyFhQ87rP6m%2ByxsqeKT5mUx6eQNs6NHXiruvL18LwCrYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDCikhJuztEO34gZUKCrcA1e9atP3jwjX09hzFDQ6UFDzkir15ggo9g7b6Ton4nBRf0UXk3AI%2F0fSlL0cSAvEb%2FjDd7m51EMN%2FuBSErMfdhxTkq6vzTli%2BiYgnfzD4SMmDZHKoERY9kCxlg4oJrtMbp98zYLzM3r2GzHSEdYbu%2Flt9x0qmSLZIJk2e6vFLxpneFkzIW0fs3hqsCqKVKOQ92TRRog4ltQi7PQCfpiaiJ8A3VzqAT8Mat0Mll9BFhIx0cJHwd19YW4WQWIaZYsQXW27tmvui3kC4CXgqSHWr%2BDLh9QWavz4wWE%2FboKv4z%2B1SuTBhz4sOMfZm6T%2FUqVblVstUKhJIoGdaw%2BkTO788qykj%2FzZE1SpAMRcdCbbqkWtcDkxuTvNzTFcGtflutCK%2FHlsHrFyd6kb3A21X%2B5bQJjQeQFRf7CJ%2BoFEdJoVw5R23d2pIXzSaAInsytfWVk95Qf%2Bs01LCYuCBBtcqJZAJnv33NWGcTyfGf%2FfYUma3h55YzuZyuMIMFVzrjgwsjzZpceHcVwoWKdgU62SOesFIZxgIrvHmvBVz8ypIBtO5ortmEoUr7LPEzVOGL2YsqJt25fbcXXr0SI8Lbvp3mzSYeJ7l1%2BMim3CdSfOH7G2X7k%2BV3W1otAv3sTJLoziMP%2Bi%2BsQGOqUBWAs2gHit%2FZ%2FjKQMkNfseRddUvgi6hrxqXK03YYjww7%2Bw0n1rVF2pJqd22ud%2F8ujzkyfrLYMB5YAwU4JfsOKgbRe2LpXnl3IuVRRIV6jGQ%2BiepnWxw3iA8PnP%2FkxXjP0Cz%2Bi39zWFixl5E7HwWVcK%2BznvFGirLn94X%2Fi0h8tqKVttCGdoypAHNCQJw%2FAdkIZa6LOhSpq%2Ftb0%2BV7%2FTxamfS0nROmVs&X-Amz-Signature=0707790b63251170d832be1dd4a182104eecc48d40654c6adf8041eb511bd490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
