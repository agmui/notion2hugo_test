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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLIYDMS7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC%2BffYUMhT1keumyPNWQpDqy3o5krqzkuFnW5h8kle7KAIgJj4Hk2U4cwWgRFHaTZwlEJN265wLMK5hRP1WQEbACgIq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDG30R%2FLLvCkXvBo1nircA1XsyPcVNxew8cJoQxbHcQV9mDDLCmTDRukpGyjncb4Ih7KTGrhB2GCttc0%2F2moC0MCVM0leXlLjYPAL13VFvty8%2Bg30arWKi6UEhZUSEXb3imQAtzRvOo134TMqCoYNlJeMbb3zt0LUWUBo8csdY%2BMscm9QH4fesH8%2BnyQFoa0NrJnwmkpZK1GvtbPS6pKs5m0ODmcIfTUqlsgr%2FGT7g2ZjEzylK7qLeaXhnV8%2FnRSv1rUYRkMd%2FJOTNPl2R7DzhLhd1DX2Wg%2FyDtm1faqxvHbUToZCQsBUe4SXKKa7h5ot1fB9BlvEz%2FuSoL7JxUE3m6SDme%2F4H9a0retvOUChHThX4XY7ZLphRiDk5a46ctYVCla4NGra5jKuPnoj5%2BFaiZDD3eycVrR%2B6fyGaiiQ2xKJfV%2FiByRaQEJuQLZX9LKssH7vjikHmf5ngqZkXq2iR0T2P2iJG59cqhFXY%2FcAsOLCbqLo7D3MXeK0VRZZn8KYi%2FsigmT7BVrBObkj%2Bio7gJhw6xdBN9OgEC%2BpvaLCQMqo4PnRfK8vWd88pHat4OCmVx8ZwFXWtHR36asSWpd%2FP4H3fauUEWooXW0o%2BonJVWQhesKuwDI%2B1SDaOQlEa9nJjCPSbTSqvjl5i0IVML3Rj8QGOqUBJavXQHbAexymjAGyG11pAHlrb3JbNWibg5p7zwq9ApsJy4FVrKxhkEqxl7yYQ%2FFOOYYzbRmvfw10%2Fk0MxrBo1GjrO1K6tM27ZYiiGuexNFkpmnxP0cpEBkoZPrpq9GFoRy1oYSwAwmkqfNvmj%2BQY9pJazrJk2t6bdd8A%2FrFCn5KC7%2FTNDhtBHQMshVTlobjmXgaGBuJTrAZv4U0jdgkxnctIDAeY&X-Amz-Signature=3e959f1b3e405c5d02a2d9bbde7b1cea67f5b9427dd169819b9d20650eb2b047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FTFVB2V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGjWEjY%2BWvBAMV%2FGs5JXQk2pPmjmATYOT2%2BDg4rQ4sGHAiB2ddl8yXVleLEgVdKAjqX7ygZwkEZGcMUqdjkaLaec%2BCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM%2FYCpe56w%2BjyIcMy3KtwDaAsyyvkNT7H0TMZj4rnW8%2FCv9Fry5h5tBtr%2F5sCFLg0rsYT7qdkH7q%2F%2B2OrYewSnZhQ9l2Px%2BzJ3ieB1VnigR26fl1hedTL0nB0%2B4%2B3EuYAvFOUY2UMZX2B9zyHH0q26ht7pfwG4aoCgJKRIDUO%2BAsQq5XvaZCuRdKWTvcDfZ5RtPHPC%2BvwqAwDvMj0Tl2calaBI%2Fv%2FknbmYHen%2Bk1%2FzXzQVgfScpqn1ccpLcCjCC%2FC2ady8PMr8cg5Z8Q%2FQ4Ct39KWVUqPRS%2FPuMfl6Td5nMRhNlPdScYL5H64y%2BuRbb%2FthCcttuNStOjb6AriBffD3utSP4EGMOjzwlP80Py9Y6P4y4ff%2F%2Fq0fudTjHvY%2FpOx6QfDtVI%2BAaNaosvi62klcKd5PSfbzsIFA5qHFuLWJb%2BMrt2wrZHaKgLXfPzzlt681Ea16TzOAht3dX8n1i4AaWm0qptjy%2FP61cKAeQ5Gx8SJK%2B%2F6BvxKoJAzUsKtptShsl413LmK98b68i%2FhinB0ryIASae3ZAY4SBxSoj1tqJJSB5x6taznf8%2Btx16pMhn7rHqAxcfiGngVxVWIdtQzeCbPp7%2Bj5SOtCTBz1xvfjyZyplXDlwJ7rIqWwuaxzPyv7VzPECoqxx5Ag4isw69CPxAY6pgGhZQ7nGVIM3OXfwlQNZ6JciTgifj2za4GpbDSDmTyUxh9nRxkOBmcM6mBEccTYHAhqf8LSt%2BP%2FbiYJPbsYXKlGj6TJw6xA8jEOtofJujeQZTFcuV5ZXUcDlFj4cJ4%2Fso1xE4EKufIeKVI7hKrtdJFEg1r0ZOnaj0gc4Figock4oRtm%2Fx46zaqVuHVGALJK20V8N5GHtb0vrERbIZ6IFwUucyLMNSqP&X-Amz-Signature=a07aaa7466d1e260b75f43d0df2a83f9304460c3d08d5108b361a1c757666b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
