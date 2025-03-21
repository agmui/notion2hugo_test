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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYN7ZFGQ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCgCLFn0b2phCEVzZJ580vHdtkO07YDsiRjU7FmGu1kgQIgE83VoABmnz00GCYXYsRZDVi8kLJ4Ye19imS4AjxIE84qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLKsXOyJytMkhdOPSrcA1zBeMiIdm5S3Jl0D2GXJcSm%2FCVlJkZZcVHb5vTD8DSDNthTtatwO0%2BvoLp1U5X%2FcqO819BLjDNkRwZlIgyQ2ZMlEd18oWIE8hFwlxMZ4HIue1XDx6BT3UMpkI2AWPBoadPQ8pTabL2FVMh7Vf9HvMJ59UWIQqoXmqPoJZGoNHczvkW5BOOIISigrYoPhY%2BvLv7Xh6SyA9s3r1Ttf%2BjSi%2BVWIFh7w38xtlo5GPWBBcZBoteE8vdl9FyJTEXWWJpS4yS0ilrq5Y2%2B%2B2s%2FIV3gEoJQT0IYMQX%2FrGl1vubegofKWDRTQ295X4m3MZKuiVHw9qGcfhjpTQzD8IWqsvP378U0pOkJ69tdvqiT2sqQlkbq0pG37xAym8OsQv2JID3Alsj1C6eMMPeV6Ji%2FH%2FczZYgzSc4inAlE%2F3Z1ohgftRmspPBdK%2Bk5hPQwXagmi9Eim3SmrQxwIf0rbpIz%2FbCK%2F7SYNzNYp2L0v6vkedq%2BdG4Vk8JnA0uPu3PMliZM7ecZlCwRUdDPjDHWjOSpIcqhwflC9oIQhjM4IT5llVQN%2BUuJUkBmAgaZqITPZq1t8pyDi8Ivufov1rxtH7Um3OMzgFRBCgqgcr0AcuY1BSRhuFv9i5Ke05AmZWId8jVmMLO69r4GOqUBHk9TGZji0Iflt4fdqXS2WR919CQrKhaEJ945m3e8yxD4%2FmaFp1WKjUjyF0cJ1P4tQ8NHGtI61IybUdrvB%2FCMzbCAsIChtM7V2Ho7l7FedrZ9zZPMIVtt1CUPPmcdWcVVKpg7OBE%2FmnxyKdpdU2rxnwKlILPBbfTafxGBIJZjElPs3rGLfLCiDEM1D94ZAKiDHjTSZlxI1zVzCIg%2BFggBIeQq7gE7&X-Amz-Signature=8223f8100d46ff6bb19730b27d455c8da1402d6dc72cb47aef78d2f6ff8b3a06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLGE4OS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIA%2BKE%2BYpe3rMOgecjgHZAe4WMzvuBMoPbhC5ujNhU21iAiA3EKY3UOhMFFeVCfTw0o7MYDkgwXx5s0SxbIyI0AlFcSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs83xiiTUkxwZbxIsKtwDc%2FHS8YlGNwG0C9LpF3QycOPHj46PJRe8YiBZiaps3uRGH%2BsKDE36Wqkbf9MiIbqDPcMcJcrJzwh3V2EVmAiQ1kKxgOFdobB2i9%2F8qotfthqOKPl1K9jOxEM%2FDHsgK7q9R4q30GOe4rZPqaGWaONs1IN7Ch3h6ahZ0084WH0S0RLiJfpLB6LtQOKYjhWPbY%2BiYrtpe%2B%2BZzGokbJounr6kOBsnK4055I%2BDpZQHxTjJ6w40SUi1QPl%2B9neHkgZD%2BPo0cnMep8S92z2XHYRF9hsL6eInRlj8sPrpnKG8ivEe%2FqtCeKbbOVEzYsRBUB8gXgNwoIcDx9NI0SoJzIM%2F9MYSEEHuCHSkCfQDsO1MS1JFQTw6EmZmcO3X6sE9oYTmCyaBZt%2BHsZrE6CXLaQNl1AuaQvYfueriogVU9aZG%2BuB4JcNAhJoF0j3HfQiI3rldiy3B%2BZtUfoxQjY%2BrF3Dim7fqmKu02lJX%2BwWIyaNJzgHK4JSgYkKtw%2Bo1d8kR64gO7NjlOyMh34L%2FR2ZO%2FvWwctTNkZRkYGBsLnko4Ehpr6CJQfG7b8PKCqSvDAM8PkZjg22gzwIVQE7%2F5EtWKpIcYk5vFolUYnlWQy12EynlF1iacDiRTiretVQx0326WHEwtbr2vgY6pgHKwbb7%2BSaHY1cpIKl4XSxyWMcfIftKPhx2UJbaT%2FOABJwuFeb9fZOO5CaxV8muy01POdUSAklO%2BrLsFmQIZs%2Bpf4PyxB%2BdAydf%2B8mE7v6olR%2FfGdYfGj%2B%2FvwN3OchcrhExfB9Z%2Bo5jegRz%2Fu9X7dDceZRm%2FKbUsjZRUc0wEeg13xGiLTk65y5fWmD6OHLwGPD5TCIkDWr4JKLidIZbVzcLkSAgXtpp&X-Amz-Signature=bf22942941fea7c2387faf5c8f8dd4a1dbd77d01c1b75d4173e82b32e1a75776&X-Amz-SignedHeaders=host&x-id=GetObject)

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
