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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UULJL6JB%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChSt2QINWNOsuDcI0A%2F5dP2DQkgGTw1C9uh8ppICdodAiAm%2BX%2Bk1urTY76sSwZThS%2B0HgvQSWN7WM%2FcpE1vqiiV%2ByqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI98zbQk0ykpV3jY%2BKtwDMPlpEFRUb7NxSvZqOu9ILM3Q5k4O3HYswb4YHPcLpmQfqKUgkFrLnPZHZwHj9gmU%2Bddxz4VEo9MrPy9yDUrq%2FL9WkU%2FlMwEQPBvtK8vT6A7HfMhPsqm906qBjpfcBbYbQeDTAaeGlyzlUZl0KSjgN7HmB6B6hyhpJdFO9TMUxj8VRj9rWTSnYD4NoeB%2BaxeUXnIapRXgQ1vwKpRjn5YVQSAfgz863qlhlKHkpd5lVJ8QRYMkTqDSyfzIB5bK8rNNjqWjdIANAMIeFKBy5a%2FDk%2BbeYrhTqqev%2Fk0Q%2FVAW%2BmhOWlmqINgL357sUmHu8t3Z553tVn23zVNvmdqNbcXANLBOZHrXa7Uz4kgN8yBRvxBQWZkHNtChuJu99FKOZmP8C%2FmdV1xJX8wqMwIyQtyt%2BDcUsuafXVbb%2Bxa0rZJpL3pVVUHjw1c%2B%2FcrqL1oXA%2F5IVZW3%2FtV2EukHglImQYjzIXjhr8en3TfjgaKu%2B6L7C8puOsyauqikW3Sc4GDI5jwZzCT%2FEE6nefNYJVtxZFLG0weyYlehuNFOh3s%2FlgGQ1NaDPhn%2BmoDLhqlrqOZTp4S5kLtFFlNu%2B0O%2B2ksNT2%2FqTQMMC2T5KF03TSEFsL2rU1R7SJ0p606U5%2BNqEhUw9trfwQY6pgFBY4bLfUGEJMh4Bo%2B0C4hhZ4%2F0aZLs7nulfwjuFTPsfPk93%2FACv9vxqFekqpGrPB1GE2qY9uTp%2BokbEu3NbpQ5Hux7QwxZbqcuC%2FnNPFXFsIetYQ9BpsYjUqnmo2ScGsnp0RWioMZr6vYLaoqB2%2FSJGHnyZhkLuurjgqMhUDlMWZOesd4p8uACEVpE9VnYS2mP%2BzapXDlHSttvDulMq3%2Bhd60lTrEH&X-Amz-Signature=081b6a468f6835bc346911c1d54f1d33eba81e4907f41718be6589dc9f18c78e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5LKC6DM%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUBZEZW33vN0OpoByhyurxyavAYXn5lDa7dv05GZO%2BiAiAR6aNc759IOYmmzww6YmHFVJsF%2BRZULFZbpl4iIX7jJSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNfFPVTXfPHiQEEkbKtwDBfbq%2F%2BfBbE0sjOlNUelhtrxqnnA0ngclGQQm4ajmhDuAZjGEirZY7Zwli1BiozyyQeeuVMFNa%2BrPhV5G3zp1k3abKz4XtCC2IrvPPQ2ISuHGxASQeUUDpaPM1Px6%2BHKp%2BZv34RDJmhP6KpWc2d%2FHGMLEon%2Fg5gV9PU9eYe8OzqxHx9S2%2FUFFksJQyYKsx0Vgc2B7ecEbMMMwYCH3iUPqMmEQL1VudJs2GmUd%2Fkud98EMiKtEYOuNA5dXGFtFjyLJgbGO%2FNm3j%2FrwyrmC0zX7cTPjZobyMwcG0AY0R%2FXGTTe6BggzdA7gzLkO%2FtIbSSBn3O8DtilFpUYV6wgALWmN2w5NJzqE07CTZEVuA%2BVcrn7C0GIHaeLT16BG2UP1n%2FzsTYXxF2svWvD3NZnL8zXaW2je0L%2F7250tle82QOnI7xUVVItLSe3CTTQeDjm2%2FGVvX8S7A04%2BKPXVt8Rci%2FygaO0G3xGfKfEK2QOVPOnfvxKM2EkQ%2B5TQoSDz8A5O7l5T%2BLulC0%2Bt%2BBCuKRRNr2F0VvUvio8B9OZsboB%2F7s5uW1alC0cx%2F%2BIfFk%2BN0DZPM7gwexHrgqFHygeSOA%2BAEClZbUiTHBRiKBCXAqzh7fvaIEwG2mvrr%2BZcaa04sZwwptrfwQY6pgEMmGBRvEykFrQBDWqAWNnWxGL7%2FKFSlI2xmW2YZzlI%2Fg%2FI5%2BIjt8Fa9Xgpv%2Bt%2Bi3GVlpRTlOgBdQPPS5U9zUQMeBg2mTxWLEKKXsvXyciOeKnpbACl6%2BijMlLCh9pn8SeyHi3OSZ%2B7Gv0Bc2hviQnWuM05fz4Uj6isOGkiGOr0AbuI4MtXZid%2BVJBSi3C95QUZzgxVxg0rJiaIOjV2jNDmrA3PBMo5&X-Amz-Signature=c12e82b1118b0bdf70b1fcd5c207886ca90cd1ed48aa56d7eefb43f718569818&X-Amz-SignedHeaders=host&x-id=GetObject)

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
