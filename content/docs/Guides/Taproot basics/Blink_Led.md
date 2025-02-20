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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X43YZAV%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEI%2BJGXGp6%2FcrAQeo6cLBwD1rcGfFgdWB96ZblCdZIQ5AiEArkupH%2FDv4ns%2F7oVamhCc5nvHGOoSOezgtFY3VwHvBs0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTW2jrkwgWcB2VOxyrcA9Bi1gcRhlWaD8eI1hO3cGVO3OfDMO3zkxl63yTXu4vKKI0bKZBilFvwFDynsG0u5knL7U2cHkBMjNOeJ3r8fOhAOhs3edVCqph%2F36dZtMb5UYWTO4DbVGbthE49HUIDYT9E%2FzFT0rtyhSIG5%2BtC04cJYJM08MDXVyS6oumJ81xdtHhA3g3RZ7VGYg%2BJlySzM5EwQCKtp3Xq3oKmWmZ64HArXMHK3F33V99lX2aMska1PIMk%2FjQ1bt%2BeTfHikUaZ6cQxDyg5Yke%2F9uu4kzjrkR%2Fr5jPUEgU2LezEiAEzT9%2Fg8yzYkekurGrZ%2FsRIuAqeTkPBF63wM5UlUmjn3dT7Wg2Nz181rRFlWw6zuL3UzC%2BIWfLQyb%2F2uRL7pMQQNRKBmg4oHljBFGp6arvM%2BmifxTkPtxwhE2xiC73wRGfmDcPK8%2FcFW8Zob5fcz14vR4KIFoh%2Fe5uYN2W7RblYVVqZqmmMEf%2BXYE7b6FnAkAu%2BW%2BQqFvACj7%2FKKxrEWqGCbsHXcVb1ijez7tNAlCg75g6nyloKWRH3O9GGtDIEPHrLrFniz5YGkKVZYuqPqJrQy8GXWudOcXhJxfUUu%2B2VxzZc9HkthI7zOzHroSHCFo1qjE0dAqzWYcoBT%2BJNkmKFMMCQ3L0GOqUBPnzTUhG4WQjhLFLEbXie6I551IDeU150UF2adBfSandxMIGYXtIQDzx%2FpjbzRRBhQkueVjJ0JklaRc56%2BDTo8vpn7fx6gNaUMjyfEK0q61R82NAypZPYQBkNerpWfuaxw4gf6mo16nK8IiZINQOhEeznuN06LoIj0oHGRIhpcmUj3q43IYQliq5L1rmGXd%2FAIRxUY2Wxmsb1OV%2FXIiEVSRAGFhux&X-Amz-Signature=e76f6c253192466f6908429b9e872cbb37fc76ac048a0891fc77515279045d21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBT3ERA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgHKGW6ylkJpEzFnh4eCA6vgCuosIi0o9XFzjcVQEQ1AiApjIxj6pO99c6DhktFyF0X93vrv3zQ2ugzJW7f8NeO0iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu0rqNUWN0ntV4t%2FIKtwD5xmkSefLhNDYdeJOe21DHjeQ1hZQYkkMbQl936HLg3AYS0IH2zntpNRB45xpsww4Ey8C%2BJBeryjamFlYd0kNtZI6kWwzJ2O4n3xadVWAbqeTZ%2FmUL8VIf7S6u1RxhJgmdPNRiMnpwLkXV37jhJhRF7P%2FxhsoZnJF60TIrOOHPDe7aFUBNx7bQRomBhSgCL5z%2FM2zjpk53g%2FSEUfBrUv5JMTpDGSMuagrFwjHSSxKj3NyZIJBnLYrvGLteIaRWR7hL7L0RMBzowkA4%2BZzqqsiponVhcGVDolLXBbdoPlmcsgHHtIq05GrRf1WRJICQJQqRkVjhm9GxRV3BEgG9ZnHd%2FerKq9bAk96gS%2BOe41L52MFHPPpzUvMkzzQj3m%2FTk0bnL8LyLHPvM20sROCjBtQuF6pRWOkeLdgmV8Myg4d8ja%2BHJhzbemVzP665M899pU%2BbyjBSd8IoJRq9WtGgGX2hVwC9lVFwqDoMFYY%2BoEgDVuGfQo931A88s0hcm1TPFIHhVytHFeXYjb9%2Bw%2BMbV%2FVLTTg3zXbX7%2FLLCIXJMAA%2BsruLUctdQvEaX2pw7I8GzgtoVV30kkWMDmIgT1H0N8QaMJj5iKdPuqpg9aFlsjcRnli%2FoJbqBjK%2FAjLNkIwnZHcvQY6pgHtl4CkQgw9NynaN%2BoQh7PQ5TnAnPEiZC4MQAY1LhTMAEPwhhK72fvwN5l9dRH%2F8adK%2BsEdRBYtnlMTUETo50yS%2B54aoSy2M32x2UXRekNVzxZZUTN0iqOhVMeOg%2FQ7VTi4Onn%2Fl%2FNFJcbxsqxpIsparyKKqxEbfAfr8j%2Bj6V22PwM0tcpcJcKEdabFpjOapgBGxUettsedkWy9h2n6zEOei47tZ0fz&X-Amz-Signature=5f8cd9566d29a3d14cde276a23273e4b72a9a1ee9aec8748cdd65b02fed48a16&X-Amz-SignedHeaders=host&x-id=GetObject)

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
