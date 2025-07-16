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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM7YZ6LR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQC4SxyHJd7d736Z9%2F69aC5hPwWxNCL9ABdhkoo4VXoZMAIhANbh%2FdPgZsxoU0UN90yAphMxGJdE3Ml3iCLmFbmMD4eIKv8DCFIQABoMNjM3NDIzMTgzODA1Igye5j%2FW6WV8Bn1xLIsq3ANjjy2K7NRREUfES5VfzmwouoLg91ucZV4yUaBb1CGxFlaNai22JQfcoIZnGOyO5lido0w5%2Bk1Di6GaXFDHbYwIP3zCHbZIvhhHHT45bxOy1QGar4ulY0IDKcAext0jK94Qgqe7jdYUWoFDJBocRQC62Rq8mC3T6b0pJXcC%2FEfdZO%2BixGW%2BETcqwcFjHwQ%2FyAgUmq2iycLLxs3Yvd9rYoXGsTg80SJ%2Bz9hWOvL%2FbMyKoV%2Bsz9EoSrooA%2Fa9YjOk%2BbW3nEIvF56e4%2FtI%2FgVahmFPwGZhYxhQAD8%2BMzPCDJho7OfEhRlrO7JYnqIVE6AJvs7KQAvZXR8t32hOzWGExH3xYRJvwsVKSXgsCWvYPp6S1wPe9BRawxbUNUaRbMUM%2BHTqnviiwxcgp9IdRDN3YjR6cE%2FnLFkbOFH6TT57UeVkOSROGezNKAfKrF1DfCL6tbmvJvSi5mkWK9fUKo%2FMNcza7%2BC5EJGSiPfYpUZE2OY2zV6Px0pkpMuDZQZuh2x16wVYAAASpI5h8dtx2ogu1UuOqYvXGJY8ar7ReNfiulSqFyGVOkcXRQtYnWafvJs9ucSksn9V%2BEVrXey77SYld5G8Tb4atmNX45vjRDQ%2FjXQgILkL%2F1iHE0cuucBqmTDu%2FdvDBjqkAY0yfUFAstK9t6Q6bXpTRHolK1BXhFSKEvVeL6S7xiVm%2B1%2FtZhthkO%2FA%2FaqCuPOAcT8ScfUWvS8Kc9iv7gouXb6QSGF72%2FOXQiLs0fHdF%2Fh9YnOelCUGmkxtvRYcY4TNnDa%2B95SfE%2FZVb2wfhZijpSY%2BFH87ikL%2Fu9KDL%2BSlHAvKoAMqgZ52mjFtZtGez84enetxzwqgLgx10rOetBCJ1l00skwE&X-Amz-Signature=e92c57321f27412a4b6ee5c2d7dce447d0f0bd15e07f445814f9f531c70c5710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKYUEJQ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDjIodE39GDSfyh7IcLyvyB8L2qsf3Tq%2BN7uwGHsFJyJAIgZNdf736F0kvywIW9oYCTL8prUk8E8Nlr%2FacHVWc63UEq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCRjHnfsFiAHP5BdSircA6r6VkFPMrwajZsY7eP6%2B2IpZLUN6AXNEMi8SwLDBW9Cbp9c1AKBYM0PO6ohTdxBCVBqpKjoGQ1kJk2qNTWwNUGOj9eUSUA1oBayOvd4v8RtV4wBG7jIKO5CH4b8U18tUZd82%2Bzn%2BaVs%2FC5ntJuZwWIU2m3bI%2FN7X0e25O%2Bn1nJUAgtVMJ0x7dRRfUDHqeGA1hYNxuXx6KnzWuFX0sVvK%2F09cEhEZlvRvCHsqDwcZ%2Fn0Vuz6Ocb7E1LLGfwoyY%2BqE4r3SAAVo07caS5f%2BZKmPdE4raTFu79kgBWVm58MW30K3gUX1IVi%2FnlXPb9lhjkIdSdhwc2ar6ZJI%2FTZkMYwkHmsmqdEdi0VsEQcDdn1NryNhEkoOt7YCcdtBoAO1FoNOFYPU8Ib8v%2F5ET3tG6lMjTjxfXmo%2BxWxpcjN4knQi7jgNndJL7Q6kjWNBvZlXrwlIX2hCF%2FpouPzHtettZ9IL6%2FJ%2BzZwX7RDlkW%2FhpbOFCcqfi5wufFB55kdx6DwGA%2BFnrtugT677%2FGTm1sqU7Ba6dZUjQOQ8fuYi%2B3wxvLYHespMp2i0%2FTN6zOkIYfaeQ1XDEchUEYHpYMtYmsfeigMsjjIz47z687fKd8Wn1haEs9OwebbsrTDs0pNzuzIML3928MGOqUBTQf1SstxROSFK%2FXCKCr4oHadqIB5i413ljdQr3ZAl8h36mXphZ8KikayjcsOCELXD0R%2Fk%2B%2FkIdy5kVOMf19axJv8FNwn%2FnItb0fALJQb%2BTfK26rJQDueu8LLue4QGuNtiAbUmGbyClosb2tdcPetwejLkg7Q5PoVzGp7OPjRX%2FoZLkEY3Oig4eU7RsIFUnkJPV4Mp%2F2f8bxxNAWSMbeIEqEJZM5%2F&X-Amz-Signature=8f6e97f2d9b1f114e4a9fcadab6f79e8eebd291ae0fe7e337a11cd3d6442fce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
