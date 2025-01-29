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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZONTC3AE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhbDH5CvhwsPaLB8TdXJrtSblizvxDoah0rReFbHaepAiEA0Rm4PHYfy%2BTqEqhVyHO%2B%2FIiiHgIIQx4yAM3U7pZbCt8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjKDihLad7dFZ0OfSrcAyHrVrAEx8AqZmnM2UtRa%2BhGCyAqs5D2xU5ZnG4prmJOu8IMG7iDn52NygZUZK2mW2ZMfKI4E6LubXzZIhY4TuzYtWQXyO9BVijMSANrnrMP6XXrHSn%2BG3C4lirdLKnBbfCI32MBPYJ5K7ilyvvZ0PVAr32gGnr5C3epcebDGRAneYygVkOVAg77jdcvlvGaG9%2BrMotRXv6X%2FsjwUhwCGbHuAms63irSySSb7e4EJ3ahN1QFUszSe07ZEmnbP3SkTAUjyXptTfOiAgsD4b%2B298BEb0EuW%2BwEpYgZmnbOSi1mOynV1a3Ph2fafwHEz3Pe5rHtTlBzSZXXzgvu1SxxGX3GN6Uj4iCW8E2y2Bqp30C2n%2B6l8ZJ9xn4bqs4%2BBrL1OOKWf3qPCUFPiOaAnrMeyUsxWZR8H%2BsY2DzGTTQXjqzblt0M%2BiWSaipxG3T4UrexjPEGXI1RMTtYRQOOOlkEc6Ry5LkxWKM6%2BCVxoB98wty4UudwHpb6GYg2PdPLIuhPmPENPyTu9mQm5muPA7%2BKt925LQ2bQLVM8UxjO0dCqArItPK9oGgobLd5t6pgjTVsddGSYFHquctPUPFV9SmYSz5lBIJM8feUr090NH7D8rJuPTC4os4EzGgfyWcFMN7M6LwGOqUBlUgDPj0G5pJUj2UBx1vtfiDApXUjBDZrT65SyWIKj1ZCf7CWSIivQxz0%2F1onE6JRmW%2BvrYIAsboa%2FRVVMWbcY0jlVr1DZLIVBtXGNM%2BlfbQgvZlXBtvzc72QG5nnjUp3i%2FML5bHfXF%2BJMslFMCDDnERLkmDQhAVWuw%2BDrn9YCTDPAQNf6Z%2F5cC7eqAkQul7s6ha%2BePnLikBwGL%2BREAAPzxbigEwA&X-Amz-Signature=c655e22b5fa1bd8d485b36dc1b2fe0e5c63108af5be4b96e4aeaeaeaa5b39fba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU5VTW7W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaRtoC3UEsTJDjxxs8dXHV7RSq9mlysXPZNUk%2B6E6%2FhgIgX1qkP2%2FENvlSwj0j50CVIrgQWx9IVB9LWbqbQUng9Q0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3EQ6yqbhdsDhHRoSrcA6J54MFglvEL8Y4bFEXZMXXZDTlV0bmgRGzzWj6iXqK13CQ3Se8VSeQaHlnzZI98dBuyp6F57eiA9JCgzaVBrfa3n1OyCgfoaxM%2F0XMpI0taY0F7UkU2rDoRioHmoWGCKjq9C1bIWA9sz%2BgO91lHxT8sFXkHXXZxd7Zges5An652pwn7i8S49alFjIcfkty1QLLKq%2B8C4j3dUaoodglOcWzqsYNds2%2BZkVLwFEDLHAeVTS1TIYdTWv2%2FNsHj4duKFiHMYnFnUrI51Rq%2BV3FmXyoMrzxr7QXR9NjVKYrtYpBhS56tyt5OexQx2jzxv4gM%2FO%2FP71aYFddM%2FHqqMXIBvjZ7%2FGau8ZtquX748Moav6%2Bto4Q9RWJNs634ivtrvDEWXiIEo6xgVbyDKYCmvdLW1pa%2BqviF6k5i9%2BaNi1apVCeGsT5P2FbLCmx2xOcWjT5bJaGeQpmOs9Lr%2B9Zi6pmBPNhuTE%2FKn8YsYK0nYrTq4njnd9GGVWLfeQ9mqDpvat9NodKUq6BVAnIj386Zpvla6rg0fN36mZyF9nu8anW%2FofdiGk5yzu5voDqFnEEjNqsvSb1cI3jfsI8wcalDkpB%2BStC8T8Bz6uEk1jH5LOeGTL3K5KrWnHiHWZ5ffFNWMJDM6LwGOqUB6AyaZDswAY6zH6moLdv5iD0YXcR7QdOkKTYewJn9WrCENKvllQshGda8CRFBsuUWf6VLtK3n%2FS5ClhVW0FpuvuhbMKwK8gdwcA8d%2FyQG68FjVEQlu9n1c4GwyTNJFwiGKPouy3940SfPdRoPLQBMMWJvmQVxRuhntx%2BdhrBo9W2zN%2Bl5ft8RA5NfDDyXGvT2zUKQLuS%2BdIzteT3WVvPS7zL1frAz&X-Amz-Signature=bac5fe020f37f716cdbf7dd1d4d5e5997ff1f447afa29f29023c3f5cde20c3e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
