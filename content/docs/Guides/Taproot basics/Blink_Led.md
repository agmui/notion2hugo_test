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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QH4J33T%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjA3DXzbo2XLTWBLHi%2FzJDr%2Bi4exaMxqtyfjT%2BiYXUqQIhAJjEe34nccnGPAuavHPlamyWMkTrAlM7bRHNde7Xuc1WKv8DCE8QABoMNjM3NDIzMTgzODA1Igy3E4%2BlboldWVGzcNEq3AOOsxz0FkjdiK133g9YwfeZtwEQA35XV0d%2BReQLKeg3a0AE0Ykhtj6U3nlCYLyRTe77XpHLhZ1b%2B1X4Y8SIrRSnVp2iSNmkqmOXmbW1jUVAinIMuZuIrZdnzzPwGUA2K2xMT3S31jHrAC5lKD94bhmkdvAIWvMDWiDwSjsDxHFLixPzrFfxHB9C6p7TT17Xr2rjGuTKTBsAGRmI1ibfOli5nl4PVXEJhs9asnsQKibPxIVuPRuZoxnicriwCCMVNRyMdiXXpifacUZ5K64NzRoEMUGpGZr08j6U%2FI1dxoncw4QgQqMQ0c6tVVNsVRmB5FfaB%2FLx6vOevR5GGyD%2F8epVU8OcGqwoVL0NbKKFNmtF66h%2FWU8RMWEBhpzu4J7JyJPsuC%2FGyypRdGMwdrAtxpc5SuoHX2zFTKa3pmUsd0NGVdEwtqflk2naUnYKCFRbaOQszSlq0UdcFpBr0xqt9J%2FRTQFDUgCKcll3HHisQMLlOoS%2BNAuzAy2Td6Q7Y4R5ZB0%2FUxLyVPW0WbpfdmY%2BvTMVndL8Wv0eP2TxbNL%2BaqQ2Jks6%2F8AdtbdcaHarWNp8CezrYdKF%2BkS62PqYdFv5tDj8yaqDnvd%2B7JXBM1pQqeTK%2BL0rcsMqWRzV0P9NozDEoZe%2FBjqkAZikdKdHO4bxGB4UGSwwaTniBx2eYiBZ8%2F26yEW7O4JfAsNw%2BodhYvAu5UDAVShq%2BMbaRIZh4%2BITAP%2FwzLZcacAqtcddUt7npfadu9HSAoaUaOp80Le9P%2BPtYrjRhobqFWtp41IbxODToknTkwR9mM0j%2BUJpUFsTuOQ2CySHpE5DNapAkqX2L0UM5nTG7aaw3Sj%2BQCk%2Fy4MLN5VdfdE%2Fg%2F45aZaq&X-Amz-Signature=2438764e77f5069d6bff7c9ffe491c6873f44076ce7a515fde2b2fccab75d84e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGV257Z6%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHwZfqrXUw3Ti9VGZY%2BtGJb7vl2PaVC7vuRhFPdRMMzgCIDybmNeaJ%2FBlBhukn6HI6NiQ09Ls1Hwg6aF7bcfQ5giXKv8DCE8QABoMNjM3NDIzMTgzODA1IgzukASVSTZ7C6PmakUq3ANyTCttHtNNcZuFT2FUUwGer0T6Ru5UBn3F7Ngrztc9db%2ByEaBOX1lq5F8IhgkbNZ9VJOMOCwS1SCMbWWLRarVzZoIRkhdzfRzy1bI03lfN06g7uhqFBoaxnO69%2Bq2RA0oIlqL5kGR%2F2CEY9OS8nn%2BHIXqD%2B0IKiG1tICzUrpipcIFbvw4Ml6yLe8pfau4NamHmPWQhMYlvvxn8%2BcZyFgPWtfMPW7AXVj%2F35MlDW5UoQ%2BYvhDMXu5kJjHnO5pS0ZOLlnxDABAloGpiIshV0Sl%2FVnwzTN%2FLROP%2Bo2xa7y2%2FnqMGdl6BHH5MxykW4%2Bvcjt6Ox7URp08rZbKwJtrnmnHr9qDWwD0wZ1KwSMmd9xoXXsWDZxTL7poUJj1xv%2BaJqRPtpPeuvrYkfcEYGksxpXSeeYxjUhccJmWJbSUuuBKNS9tHUNI4cdemmrr09iU%2BWkswdXuGDjiELmTGlbAgKinn1KlUQf5KxuAHk7J5ayiJxbkBqfYYUdOSVisshOXUXoKYyPOSg7iGPinGtWwWTO1afyIJ5iaHgNSr4LOIN9hzqoQGo6ykC5srsDULd%2Fc5wB%2BER6UCW%2BitFi0Sx5qJ2IauPjlxs1yDO6wOqZFdxpvuiShlxH29CoY8rh7mYGjDOoZe%2FBjqnAVTz%2FN8eHT8tMMzhl8MOjsAqMbFgqQw8dBxYodkrXTOCpGCSQWIA%2BiksudQo0aPsVYUtIRdij1UtLeck4JScdbCN4utboQxr1ZqQto%2BiwuKrhfEfAxbTaU%2BSfBUuwcAorrkzhNNiJGAmbuweL%2FKkqhl7wdagKXPQXgpm0krZBI1wY4wXhfRPjzAwk7yuV6Tf%2FIjx1qp2Hnw%2BzX3C8XjT%2BJa5vWYhnzng&X-Amz-Signature=5aca633c04ca0fd865861ddee8f2cf743f2ec7159d92698a6a9136cb321e2da2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
