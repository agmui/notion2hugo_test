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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LU4UQR%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDn9D%2FFWBzf3iVyiQCTbqPG%2FXrPTGOq8mK2XM8dLmGPqwIhANObMZVCgu%2BCl916e5d3pGdnz0be6YEbdJFAlK9rFBnBKv8DCGcQABoMNjM3NDIzMTgzODA1IgyLcwRdhzrtQ35LGqgq3AOpa1E3GmuqetsR2Bfbca7RkFHqaaMACKL%2Fxjz2X0WMMTEC5FdWIv2zGnu32rpUsY2qGZvhEa7BtG6fMjI1bpyQKcXfaJRcRlgS4vqJwcmCgomEx%2FNRA4BzNN2ke%2B61ihirSeVOWtBBG3LxHZqwi2RqlScj0Ss61SLyKkY1uiO9jqLzk5lfoWdXW25WVslDKvPhQRSNgtFeOjgitpZ8YNzQK03iUCJxXlb32Kd47K%2FVeMdU2C%2BrvIFMRyMLUMTbfappB4WZn8%2Bd5Oa1XchUCF9kGfvXplKD5T5bgzDj4NBZmdKjfRvFhS5Df8AOT2M4oU1BTIX6Z%2BYA9Nesa3C06z%2BkI2Es2mWDrrNr%2BDhJ8Y34VeGLfYh7kx6E%2BoSgO3wY0NodQbUuXMHodUAExxxQgkJ9Q1fMRvfPNgErdRETR5ADaX0FPCjQ1ZKNgvulW3nEPdH3zy8oUt60Dphgk4B5PSEDtTaFWRg8bOteY0E%2FxrFTfIiEQkkA0ce4L9U8RrEql5Hw9jkZif5miC%2FEj%2BkxEKklNvlMGM%2F5hVfOXXPCBco6QLC0B2tdEusIo3FcRtyAdASF1tVGaMo7e%2FKcZhTZi7Ol%2BosMquoSrnL9oJPSBS6Wj7IcGlyQ4%2Bb4fxMQhDCl87K%2BBjqkAdivcm7rQLgkPfELbiV%2F0U1%2BAxtDAzyLCLyoDFHTfby%2BrPebQJyJwMXG5cY0n2p3PUmfEG%2F%2BQp2mkjfCbI6U9%2B8llG22O0JYFAt44cXLUHJ2snxHtLpAm%2Fld%2FWZH7IElcc6tVzvfHQxDZkojhkJ%2BpB0g8k6FYLMa%2B3OcML7blXZ4%2Fe6Rq4boXAF%2Bk9zPgx7DyTcVfPMoBds65amWU8U%2FgXMkfodV&X-Amz-Signature=266696837c67d8b865111179c45087ecd23cebdd764c02dcb369c9eb2b8a42b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5OEQDPH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIHYOU55VqjKA49kZwdKknzGluE3qwjENFUddpZSnvnZFAiA01G0eRflnh8piiMJVo4I3BU5tOhd8NEalrqAf8aYgUSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMapXNTKMRhq1EoVtKKtwD4xJwmRk2roOSrkZKNm1dyB7oYGiJwaQ0u0S3NG6fVkGvW%2BR33YP1Z35eVtO6Y%2FOjFJY7CnM7lI3MoJRZw238nab1Iw3dOiHyRZbB%2BgLqmUcPsfbMPyApvuWi58szdUZHBMPVT2oXUt7Io495pASJ0wrI4ScJCWkYyCnjdhoI3cAC0t3Egz7o%2Boh2igToz4UMrOYby6hxbbYwrrR1x9TQTowQq9daLL7OKyIqhHqscEYMbS1YWH5FMbYBaaVCbspmb4hQEDCXD8XJr0bE2G%2FOJitwLiNBdxvrYwvHm7tL%2F4VgRSoS8QWYFnpn%2BH2sLkTQkvNETQmr5JwokgFchKRgSJac%2BbcQ9RhHQQ1iVeXJ1XxiB5jHini%2BhaFwQhcyyBiMSl30%2FOJQd2vguhC6v5WTB%2BBzCOvNbHZttL8d%2Bv1wjswDNlSzaF7KM%2Bendpvc8Ru2vAkiEZErVyN2xEfC3pqqICmgRUCmtNRPooIz7Ovs7v4%2BX7K3eRXZkO6KyJsJrvAgWXU5OEmvu5yiabPo495Qpff0qCP%2Bng35k0%2FjtQsx3aH7WD4X9hryWU5agk%2FhE%2B1IMPiaS1UNES5EIAx46mOiakfnxswBBrz1A59yUQQRUzm5nlf4ESv8G320mGAwpfOyvgY6pgGJA7TctoNwEq1Xc8v0VajWISd%2FTE3R1uKACa0b%2By1LNp3FLXByBhHOHVjK185TbYlHXAC5xH%2FsaEwsWUfumQilxW3kKuMkpygNT65uGvvnuNVhW%2BbRvOF7w70li65KwRBuQBp%2BXFFX8Bs9v57qWJs7Wb2Meu7QPV6IH0xeITCeg2q0Qz7y3tj7ILrk3ndzcYOXpckfHmRKt4FItG1bSYTnxYIvAQid&X-Amz-Signature=779a345797ffdc67e0c1a8eb8fee3d358e5212e1f83cd0aa5682eb41f1ec0f68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
