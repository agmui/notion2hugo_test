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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6CKNSZL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBLuht4shFXui3tEca6ou9RUjwwSG3pm3EaFe5PkFN0ZAiAVPPVwNVRYlSQJU%2FjcqIA8DlAbr2aAoNTdJfdCOr0tHCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTa5eswn8KVTwop9zKtwDEKy2bYXysVmLpiZiMtwaym2KaTSV2PtksYd8EMAk3P8Bz9uNQAh%2B9aeovHI65kbLdAD61jqqjhLipCU2IEl3ly6pXR8K1oANq9G9Oc9p45ZvF9ysdpm9VVYLtsRgbtdVqhpFU1vGOnAviMlMHkQfqRwStMzyyfXkbcBX9iFWb3f233c2tgmIO5a%2F%2BRj2M80IJLj2n9h9Zojm%2BgPPeHz0JqZjtC4wpjKVE3EXBREpqwCiJVulu3jXubG1%2FV1cZgX%2Bf%2B3QK6EpTg%2BvAoz6HHSs449QpD%2FP3QX%2FFCym5CW5vp3UQqe%2Fk0XVcqdIUC00vMpalN1vIP1ngqqcLB31ouJJY3F3qLfFZ3ucj2iPtsNbjwnWP6h5gKihftiE4%2FTg%2F6K%2BlnxzWPfD5GNA0U8YfQRTbw6LFYJ%2BmaBpZRTUPnXuDTodUNst9EJ%2FOhl8xFzenIYOzggEqqcz2ScqqYNE6xh0lRcIA3SILFRIARbxfWbor1LwasXlLYNCCMlQlgqqn%2Bf33F3Uo8pIz%2BJ2F9zE2qOzOXAYYjulmZs054vgaZT7%2F0yNHU%2Fd7wBPxLgzOgn5AcRFOzdUmZsJtrpsSfh0fpjoRqbSQwkIw8JcV73IhZFpq5oTXQiT5IOOGDdLoQkwzqTGwAY6pgGSHBSNuErd8HNwVk%2F2w4fA2kaAL83WLZCuBvzjNwngg%2FB14UFlCBHEp0%2Bnjc3u31zub5GTQ7FZRnvgB6U62MNyQrs1%2Bbf8YosLvZfg69Qcl8qfzc5sD8CUae7lCdhfeIp67Z0kCDNCBsyWdGAczudWpbdKMeNKrowQG1hmswWX99qX0%2F2Lq8NkZ0hXMlrEkEdgxM%2BgldkW366TDM5jfrR44AxNPYMG&X-Amz-Signature=f1b07224fa7944fbe83ae9c274bed820c665d9f7465e81813018adbc9de7ccb9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4DLXKQR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDpVlBLnsqwtXR1Sz6P3IUnUBmWyS5LBDwbQrROxdMYVAiEAtJS0yCf6twDwGwGRrDBaJZXln2ukIQsKI0wQFZrh790qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInbaWZLWXUtJFaGRircAx3V4DQkDnDg%2BrgbhEpYfLV6nXSljO63uyqZft8UOPbsj9g0nSlZiv0cwpkbGbpbA%2FaVk7E4%2F9edwInOMxxePT6lyg6e0yKgQI9cFMuelM4x7GIjMOA2zf4AIyCgUtygryqYP%2BpUOkRmrxvKXaEmKA9s6VjI%2F%2BUtyxaWDIGfleTAkDdiDTTfhjT1AcOz1AB4GVKZaVPtiriJXcs47q8m5L7pa9PoeouhWsiNQ45xAQDSDkPg4rKQq%2FRNmtdMIM1BMGEVICFAdyS%2FFlkGCHT6vA7EJHCn54SldogUQAuK3FwdLqvsHzpXa9i9M4Zb2t0qQ2JEh12tpBP6EsxP8MxIP82GHJrhfgYsLfqTIJ09i6nMJ6lEbLR3p%2Bf90pqX%2Bw7rS8D9XnBQSDVcpfW7Ucf%2BK6y5ddUvU3M3Z2Q%2F%2BG%2FM31HfmZ9m3icnksETFKjlBlr4jBbl2TDzWz%2FVua3SMrXmyVDuWHFGJiX2dR2fuu4s0QL0he6BomDU874kOTFG7LGv%2B17zf0iUf%2B1KQdKib3%2B%2FB2HZbHPz9Msv9T69xiAbpztdwSA%2FYhhXT%2FGR4DYI4%2B6OXI1UzjprdHhBInflSM2hADfj3VNAhpi5vqmDqBbRRJvXQuF8QYTsdhAXPoVWMKWkxsAGOqUBK5LptnfUc5p%2FJTfK8lZ%2BfR2lIFNiglpn9DIHzt81RHqRgFnAMoDZcwwGGdnp%2B%2BMuiivINBf4WjO63DECMrwe0Xm02Gwd2Y0n%2FVoJjbQNM5CLufKi9nG112Nb6OwVUBsJ3ajcltLvBdMZiybhSTcOshin3zU8yUDyCAQb8XngOYkfY3TrgctPJ76S%2FQ0%2BJpyAnY4WQYnimkaguinukZMUAQySzgvt&X-Amz-Signature=91d846aa0a9cf57b25d4c55e492f216ad0c879ef0c6462a0bb94dd1be0d58d32&X-Amz-SignedHeaders=host&x-id=GetObject)

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
