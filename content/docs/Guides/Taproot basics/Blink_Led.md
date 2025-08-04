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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW7DVZXX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDcZlnRX0qQTFmfRjm8WkbL9BkoZ6n9jljWOy2JlH1znwIgHtaQcBeVKWsWQN8GfnYwNEPRmTdbSWEvQXwXy34k9Wgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDqjtfcgSqfAri46UCrcA1WI1W%2F3ijQD8x5xGZN7iFaCJBwwyBHgNTJ72zKtWiqoQh68cJ%2FfhRrMo%2BtEDm7RFC4Z%2FaCSx6HMcagzVMuJ5X4j%2F84pvw0GMM7PHcaev2jF1mrYeZkcb%2Bjv57WX%2FWU0M2b7wCxtEL%2BlldgW7Wlt71xD6SW4nUyNsINt5aYwruEMjoovXW6JxrX4fy0sgUfWwVFRlRSrX7r6iTAN0T52N07V0v60i3WxB%2Bj5gWEfaHK0TKGhQhiQxV0BiRc%2F1kiz9ex5r3O5K%2Bzh%2FhMLYeecy5cW1SrgYEaHPWQ1Cbdl0ydXOx90Ndj2XhAbXRyqQNb%2BgpeI%2FjVCoGjTo9JkG5d%2BxlyBKd8%2B3K1DcPwRvpJC5llrmqfF4JtM0Q%2FvzcWL%2FzWzWJuHtsH6LH7KOzesa2F%2BOPlyiynigC0IszS9%2BOHPd851AaNl3jQJ9G6CvVmrTR0zpO2KqtGjDg8NGbXDdAOqrLlUQR8skiK4yBuA59rgwZctzxxeX%2B3vkUqGYgILdceDuSotoIY7howIFl3IkBWHDyKDYkS7hG3wzO7NtCkHLDA3wiFql%2BsEsfHx%2BljQpi7GfjKRv7hTCyu2aBtDdYsfDuSTNPs%2FtVFUWkEVktbU3e%2BZwFGiyCHAbgd7pvdtMKHcwcQGOqUBwyBaJZDa1P7Ab6YTOVsqMxZ4FU%2BRfogWYnVPDQD1ZpFBS5nx5O1YVOj1fKrPYDP1DVeLrGjboJGwrHUvXsnVaSB6CPJtYmhxbETp%2BtPen902jQkvA7cxjK8l9q8k1sNbIvMCVzPzrfgfnVz6tl5%2F3XfyKSCxSJxd%2FKXKiCrMJvDipgZKXfpRoGJsz3OFv7%2BOVfCe4mV53JOLO61Nls4UGHKq13E6&X-Amz-Signature=2ad8172a42e4a22199d150188497080b77481951e94616643ca4e567fce62401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YG7AKDM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFUUTRDW12SNuPoEbF8H2%2B6bUKxkp%2BQaWwTiDDNU8BwPAiBxE5jLrMlIxzt8t1runEiluxnstsJpIxco5VNtzx%2FikCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM7Lz1NdiYx3Cxv7ZtKtwDmzjlPklblNfDbH1USQkW7RLcm9EmoKe%2Fw6FI3RZxWgMn9xk3PmgEVlSb%2FYjC%2F%2Bf9hQtXL1nliduqnpC2Wt%2F77GlkX4j6z1jaElfa%2Bj0YPAQCJShl91e%2FCrbcCNzkUAyykGmiCkqcKZ3cer1xMj6%2FubNGskBHkh8JgmbIZh6xCiD9WDypApiMKPX91cqR2WoYS1apZY%2BB29xFtnGSDBBakNiXabN%2FhSYS5adDDd8NhVQ9RnC7f60e491N62o3BtHMN37sYNZdH2S2sN77L%2F7eqSaG5ByYpKqxgcRD7fJab9Z59V4%2FWAoQmfRlMGe9%2BMBeovZN1pYwLZ493yHgGU083zIjulEHX2WfQV4FDC8Z91hByx6mBBVeXZmDeskq8T0mC11IQ2LfG25ekmNgmJgv5IZcx3sxsreW0FLCZk%2BqZRcAkogEZArYWkwMQFruP6Mdf%2FGq%2B7Cmb8M0HpmOVJLlcIQ2YBEk5SVvYWiCYBLRAqfnbTQU62HPIWMQNseJ7fs8whSYKJHfy18mJNOujz1mTUo3fltyEwbpQz4pmbeasNkkAU6AOa3zNTAmtexEnSNiDd5093oI%2FG4ADCb9Gm4K3nVBVniWMrqLomMjAaZ86zNThmEsTWEQDrbDLksw8dvBxAY6pgGlI%2BUfCmP%2BJUpk5NMUhP%2B6FyPbgYtCkhGt79bV1bYpi0pX8aGYzJkkH2EgrCDmWJb5TGmX7X0X0tbFj4vnR8%2Bj6gP46o2WlimtTkphWAystTEfdX8xAKc4jMVfiBcFqriO6cfzgRqyodGnNm%2BTmrdkbKWrsQYdmS1s%2BkJhUSBZERSv0JKOS3VOpswAUlng%2F9gJ%2FOQ8TkypGb3P%2BL0IrEDrWdyBO5AL&X-Amz-Signature=f89558c9c08d776bc7fc1b3603fcd278f8ff68c433acb010803f2764e1ae4e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
