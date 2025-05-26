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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GUUUYEU%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDCB3xEyXb4eTd%2BOg1wZPpuklfPexM8c2P19Qc0WnbwLwIhAOyV2Ohz4bLPM9Yuxw5sQpO%2F82PjjT9Bn%2BD2F2TF8m%2BRKv8DCDsQABoMNjM3NDIzMTgzODA1IgxHATF%2FKUngXQiWh0kq3AMywyN8tOFvAsFLB4ycDe27eTHTCdLkVNvnOwESFjQkaRP0JxTjoQNOzJYbEhwpmCeOqSzFkAvOBasBDrD8NKjZq9qYv4cPYwHzhyH%2F%2FXA1NM%2BYQ5azEm9t%2B75wTAh1bxC4ZOx4Cws%2BIRj3o9KpVyuh51irKjyZFZGgsANHg2bfjiil%2FZLj8wxIWLfKyEgqydHWERrqK35HoleOK1S8hDSGCGq9xvBrsNrLUVxs2XzRvsjuJa3ODVaDpuJkjxJl6bxywVPo%2BdWpnhoxlRT90MU8qfOWmPVND9Yg%2Bb9LhgatcSKkwRkBiRoUQhl4ekxqZORhNncvdC9wnNxQGjYDqRpkTAGGtZWJP%2BIzSpHsmJk2IfFWCnRS2WpI6AE%2FyCNTGCURuRb8JCkAM7TCSffcG3Xgz%2Fyy5oE%2BmvFCx0O%2FGWkHDt2O5X5YdYTef15VSD%2BQ86L%2BnFuaTn5LuFjvTOh47Bu7qgpiaG9Ht4AJUKbkS9FPEXeSwleY8TxMfFi0ZPakPj4hd9CKxIW%2Bk%2BYa8FpjSx8xtfRqgmcBKcwU6h8PD6%2FVL1r8%2FPKMCZkhP4GNbEFhjutCHK4oTeefhSKIpl3gRWN4XOJdve39ZLdSeHVOEpV7tov37vXp8fIwK8nJ%2BjDons%2FBBjqkAaZdbXnDNPfM9fPqyfnJJa1CYDomNRRbRO9WaE%2FUdrnYAWYfLKKIqVep2QZSaXvV2bQXvm1fPhuyFhKrnaD49J8%2FZfDDZie0dLVKkmqS4VvoKoScoW9YJHxmMAu9rE%2FlaZqlP0amAEH4uET2%2Bec7%2BLhPkhHi0bPKICP8s%2FcVRZam%2BXZ7DkOkZiUVjR5U87LOYOJqsXe5KeC6%2B1e5ztZnjO6PB88n&X-Amz-Signature=ef4e44b55ba0ddf72c1cf7d07987866bad6e0a4445bb9dbd613ca3e4d9bc3234&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622ZODTNM%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD%2FLgPgTgBUDfQN0HyLgl5K1PBbMBASr60jRjhFjnBP9QIhAOaW5nUMXDUXRm7TmDQskv8NiClhYvTOvg1%2BheWq%2FVFGKv8DCDsQABoMNjM3NDIzMTgzODA1IgyiVg%2BMLWHiVOivDfAq3AOnnfRWgeMmwpsMba2WAzLatWvdfAvxuTmtTGHYt0o7BLJPBw%2FR9vToOU9LcbhaFNP70uAoMtP6UCsJDpA5rhT5BX7UzQRCZWd%2F24gHCipPdAzB7B2O1cX6pTmEAqzEHxJfuVhwcNLhtONUzYuvD7h26vhBeCV97xsTyKJ94P5wfte0tplIYRnIfOBHGC79KNQX%2FbPcbNC6rwZYApdITJs0wfdkN%2FWwxK90sjGKi0tck6fA1K%2FfNltH5c6STiqon4%2Fa%2FBly4cF2ChjOfVI3dim%2BDIaONPGv3nif4Zju2SCSJisIs5VzsLKDXiLevjOcRRRE9AaKsaQl7NS5k6BALI3KumEztrt2zA%2BoozBpTgdltLGxs%2FVn%2BAp5N2GgjgXdAyaN6WwRhCFNHuv4rK2Jj56DZ5IuJJA9VHLvU538gEhYe7B3J2xQmOLki9LbRf7wt4LRFmSb3cXQUHlreJdXWQodlAF1lgAqBhMt7guNagedmpaT3gpDdPP1AAuLILuSFgtzoUYVosN%2BedaK6jGtQh4apEC5BahiRZC%2BioUwkrQKHHXX4OBKKQYDqpOHDAe6PdRw8R%2B0bThuNaonUemQ7O9DEnhU8feHfXy9mFsQMzY8DKtkubvLMMWa%2B7y3%2BTD6nc%2FBBjqkAbV365G03noPLw74l7wYVjr6Bbm1u5zd%2BJBoNBT5BVUo%2B2BEjXCdVIoRe9Y2scec70OISIGyq%2FHc%2FKYpeavqP05qIJgrsVGDP1t3MGf3zrESnvNIolT4dU%2BSKb2eBx4n4KXgLo37XjDJMkWFjCJsOCvvqBLvYWDulElK2jyhElR77tgVqGYqcuOdmPiEEDT8VjDt0AFW%2FEmi6UlU06u%2Fn%2B2NVxnJ&X-Amz-Signature=f3a36b8a39e032af8f5198d4aeabd70e4cae355d19e60e4c86e03172ba602016&X-Amz-SignedHeaders=host&x-id=GetObject)

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
