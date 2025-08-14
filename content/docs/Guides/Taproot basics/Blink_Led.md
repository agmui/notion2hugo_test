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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ56FEKU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWeu%2FDtMMZ%2F%2BtUR6te9ICnDYNZJOG91010%2BS0A5sn3pQIgOZUQ5MvyKbATFayPMjXXBaQSAv3bE6Yfy%2FMQiiDm2WMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCUG8kBFPA%2FSetPCUircA3X0WZfv3YFd6UmeBFjKAKLzDWgP0tBB8KIJ7KScq7cNN9W5uYv96yNguShaaxGBrVuLg9v789QG9vGW%2BEdS9%2BBc7rtyEk632V8py66ZN1idsefu0hJyalTKSGMTi0i6RCMA%2BCsJtP8PfY1uQEMPZFPp5ES%2FFcG2RkJynIxtzVLCOhrZMIDCY46kiFC6i%2FYpQ%2FsRczjQic4gdRBchNlGtFMzA1eBbLNVHz5RB%2Bzp%2BHaSTbSgevt14QEqv1jUCa5CCTDz7wDjWfsco4%2B7TUsd2cNFLk8hW6w49A%2F6QyMcIvlZbye6hZTGsv6Gq%2B%2F6%2B8Ra%2FDKmRIUFqw4szcp6bMPkm7%2BdM9AWVGpnEH%2FjJ6qVHS4OtUTejeWRUBkxNA6sz7bjuEeecW08dzqaI6a%2F9WRnsc31ZDnUXmH6qeVQ%2BcgIdiy1GEFO8Zh1q8a7cKILCvlne%2BXbUH5uqJ3KrBC8G58FGojzuAp7k5%2FRX1LOm7TmM9qhILO34dPfTyQ%2BnoAsn89WONJof%2FNISPCabgJRfJzvncqwv43furSeOF3bZvD8Hospk6MKqLSmlq%2FuqLZfbxN060GHUyvWjgAFlCBcfEsuOb8BiT%2BfnKFQYttvypr4WM2F0mCGd2z%2ByweOGSoUMNXg9sQGOqUB9v3CdKgDlWnxAPpdUnDJ3xI3tNM5KjqH1YnyycuMaj4Kqqez9H7ZNy272Mo37cwQqXwnc3ggHJUu5J1eLWk8RyRhtOxo6woO8AQq8fsOof7ZH9i6KbE2YiYtIoHbwr9NzzL%2BXvtFXN1Pm7UfOh85fRjAEULUw1pwJZJMgZCpllDKYclqcK5bbZ%2BnLNv3QYaWhAXc8tq9nktWvrimAQP%2FMHZC2S0X&X-Amz-Signature=b1d4f14f6446baf47a8a749388157d8d69a3413652c9891ae01dc76a844440d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ7463BS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnwp%2FZlL21HYb3JiNRDYj6oRDr3IRINgEKq15GmAx06gIgR7Awl1kDM9p9CHFz1Non3M4EsSKqdf7fHznfTTIKnvUq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGBIsFDZ%2FSe5LOVgWCrcA4Rxj%2BowHjaQ4nTBtv%2F%2BHkVH8PVZ5VBbZyT%2BnhkkWnakHRhPfyVRV9TIabyb%2BRpuxfIMHdTqursYnkYYp3NTtsA2FOUnzk3%2FOoPxgSY2Ka3SJTahDtiP8XeOPEO%2FGUQfr4INtyIjUaOjN%2FOpVThR5po1mE2dgPRsEx1a99iYaijtSKCgdMuXn%2Bq1EK6J6oCiYzly%2BlqQALdW9Yd1aux%2BoNTlU9t4DDcd7FtIbsiltmZc6zn5Ouy3Klv5K0JYYiEjx93Us7e2X6F2rmJWwhdladG0GVXih2jwE90O%2Bk5983J9ORkTCIyBbRjiCjKop2tWhP0XMKsSKKmz4ls%2FuDMwIoYmHt8KzKC%2BzotT6o7mAoWFvRoSMN3JDBPhRdvpjx5zDqBRO6daVuYtFw9Vrp%2B6%2F3avhohQQuXY4Mpu87PuwIwJ4NF7MZ7uWQxKrrhjMiY%2FyaBHyKWBIgcQHGsd1B7lltDRfbByJDCs7R4hq6vsSrt98%2BO8m1eEJ%2Bq7Csn3ynmICsRHZKC92idhpdawdvVVzDcdkilcrr5f21wzav%2BiG4h4mWguEaNCDw9hMbG54tN%2FshowuqL8cO%2FBZSYtph%2FJrCul9a7WFeXgRLm%2BK3tHVxhU%2FQofdU6MFpGFq54iMPLf9sQGOqUBZdT0L0oRreLHwl51pheZUIW69HmHXq9YHaCWSoSeTnHQ73MjZrU8j3ZTWKbkcsIJyYA8vJ2WPVH%2FKumetReTgJU1Wr2c0OGfVgG%2Bp7nUDvjQK1fO%2FuQhKvczv2673XbZUSQ9KRlQkwe%2By%2FEiQkKlojLOBLPxOW%2Bpw2EWPKJ9Uyzu52kMYpZqFLpZMIcbo2R32C8kb%2FVT8kVgdxsoNpNjb%2FwFOzmL&X-Amz-Signature=6c503729e000345b78d47d153283c4f0d58319ced0fceebac6211351ae6d6b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
