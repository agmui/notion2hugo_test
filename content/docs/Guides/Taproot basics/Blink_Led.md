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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WCYQKSO%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEk7MiAZ%2FplwcHhsm0Bo9BRXqOQKxTWpQBQf2cNtpJZtAiA3iTVo1%2BAfS3ZsBUuSHHEfimVSHA8vn3433hhBtDTwBir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMdaf3l5Z44gBx8%2F4pKtwD%2B3EsD6hg46%2BWgXl7QlgmijmgQP2A8UMNkOZdNwX3zXgjW%2Be%2FjGAT%2FekGQhAoqeVxSv8GnNXJHFwAmNelsyVsxUj7cw2ZNC3XcdvOE9jg%2FJGpkbsqm%2F2m3MF04hCAnqqXTesTllIVxa22lIWoo6KPjGz4XZVeoxioox5MDJuuMtUUZDY3nVyqnBdpbaoGujzUdZofBRNvmfVQHycvFHPAgnDrZC0Ji1MlG7iLQYaWF%2BzO7IoUTiJw6A6oqEek3o7UDiphUuMh9BznVumHvZ8Owq%2FELIq4a8AW%2FOv06n%2BlxDboTnO%2FndF24vmap3CgAHnQ%2BqCO20OH%2BfjGlp8fV5RND1TYPEnHgtIf2%2ByMa5yklx%2B7FxnqS7QnvOt%2FvKFaG7AT2Kzy%2BxkqErvPGWpoSStzH53hazcqPwK%2FSdJxi0%2FLhbl5pC%2BvXbuJXPgm3osJp4NF9qoXZtKnG618AF%2Bo2n1KojGpx7KGiOrm4DBqYHw5lLtpquqekgwE3YfNoJKYYx7GyF93MDDq3C9aZ1YKGak7Bs3z7G1VsP2r4T4sOYh8ACMaucp0J5PCKDQVgFO64qRAqjxMGvd8%2BdnuDFTX81ptgGPBhiv9QACRbIGDgG6%2BwLQR57wgBWnI40U7SVcw4vmewQY6pgG4Yih%2BxvEzBqAoT0PFZOtZ44cbTtyQBc3ED0A4v4O88rAh3Fj3Z7p05vkmfqQFglKfo%2FTg3o8FHdq4w0GuqegIkwPgdjIZh4ntrzbCh%2ByW85rO1pB0xv%2BiUxwEHXcmWmohM%2BZSiV7WPcmAEGULgXbd2K4VhyVUYX%2F55Af%2FkdWLXXCVayeNDgXGxeKRlUWmtdbnv1aLmiojjG35LMYPF2AbxW%2BvXjHJ&X-Amz-Signature=d2c2407a1e5b90bb5cf914347e4f4f2eb766bc4a8e591c6eb333fea51d04daf7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LT3QKA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB92S9t0U7MP8uXWwoLiO1nR8oHPo1o3eADgDCDt7QzCAiEA5IdDEz0eho9y6gBf5AXQqUUzt8OnA5bA66HqB65jHV0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDKpb8z7znrHHO2SisircA7t0uHqfnx1GnrqyzBXSlDY7fnim8MWm%2BwYqoe5h1X3hkGRlYh2QBKw7sHi6Am2xSgfZHt7ENXfDWzEsvysxKMylURYqqldfkS8RX4xpymgEVo4c1J8OCB87eOJteCyGBFn3nVAaiQe7b%2BwaMEVeJcn9gkq87bB43l4N782fQtpDYlkiHfgeuPZkiw5ub8b0Kd1cH7COeYO3kP6U4UPMAY83Y7FYVZzz9wnYPO9NSSV7pc0IGzB6gxpfmWzNUmTq4xnb1bgc86xLkW4KCJ9Hner3v9FFxXBUCEm4ZOJUZDF905rfHDHIww82sDBWGb4O6mOrlixc3owSXvMzH4KffvoEfnmFmrmmVZUgVqnRNzRpjkJwQn692Hdi0hy0j65mu0ZxBSQ%2F%2BY0LFPdJLG9Dv0Lz%2BvJcwZVWLykKFwLmCGABhr%2BtnZTvCjpBpt03Yl81PItzWACobmZwpWiSOetwm%2BXQX2ZA7pN%2B42G1EKvmdBp0U7vbYrcYOC75ZgW0wRv9jcvG6mVvQEFik6GvAMDA8KrWdfy2y2k7TMnRBg4D6FHo4%2BLdgie%2FMyo8C%2F7yaJIk%2BGYtpHBevUsfPoLoBWRvni17KczeyPNT08TNbo6BcVXqeK7yTnqu03hRxhmOMOT4nsEGOqUBxp7dFK8nRNo%2FwytkmUINkbCVGo7QP0%2BmVC38u4NrM8B16imIbQkd3O8sPVsbGIAFLKmwcGocUXU2Z4JzXzS1kO8nN1JNPaD77PnUOOquwIY3CQRek0%2Bb%2BCm0MsYbu7i5BidYlhdRAhyy4Fnk7psQ1%2Fh5hdjOkAyPjr3awyFSpt4WuscOGFDfB5c9TUpb5LMN6h3USVDTj3In5NLMjy%2FgwZxCDR5q&X-Amz-Signature=281b4b9ddcf908dd32030745e11d52d570c9016465b552787f7039bb996974bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
