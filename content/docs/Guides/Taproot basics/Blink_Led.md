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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FYF2TQ5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD1ODr3InF6qVThjs7NzmeWEuP7BivP9rw6IFRUvvzUGQIhAJzReoMqH1eFl0YxnhTVXuLNm593KjCMVRnpVDfcUtsMKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvFW6%2F10J49Y3Etqcq3AOp36vZID9Y%2FCo2dexOjQbgZZCmUIRZ0k3I7Pc8FtaQFmxZ0kHZZk4AkRuV1UwFc%2BnlGu89mPvj2C1mfHo9eb897BsaXV2nlVNLP0963AcCFdNgHllCSwHaCmZd2vR3HPea0zODGvWl8v%2Fai928vOMQ6hRN1xMS59mbnGx9s9e2amfrcVwH94pzWC1%2FlRZMZ07kAFNu09MMr7r6YrjYaAicGIdzNHzdwQZ1UXQmJzTLbdjLSoT5sNw%2B0N1u79vZ7%2B0kLUWLTCKuHWe%2BDnxQQJKLU6%2F8pZLP9ma9hAiYW7DUZ3jft28AeAbhZe9UUKQr9wwY8OFcpN0FVMoL5YPU4MF5Wq2Rzj95349v%2B9TZxIteqygX1Lf0kQmF4KCAxLU1RkFPsVnaGhrTYHVHG0uVQbGMWf0SxX%2BjBR24zfoK0dZRM%2BrgPzV6QC8rWN8priPcGn8FEdcmZgckcq8r%2F5nwB9Wm2MgRcwHsNs%2BKV4jS1xaVYUyfVuEfbqX71tfRt9O6046b54ZQZMzxCB2EOEq8zcIZNDr8gJ8y7foEmkCFJ1SUx8WsdXqHiHGhsYbduwrjTph7VIeA8NayEcaINZ9iQUWQ57zA8bxM9DB%2Ftf0QajUVugCMDTT9ee3WBbzXWjC6juPCBjqkASUqszoD4GxH6YPJGNQVotjDYTY2%2BRcK%2BtVeavYXJRrwy%2Fcc07z2Pw9XcIL%2F265zS12pbWI68HNJSZoOlo2HrDlzx0uDSeEQ2V1eNXQMVWFP4Si9ipUjDigdSa2g5CHBBCXJk6yfYX7ZNWU1Y%2FxgfHu9gSwKg6eGpmFKhSXLRc28aXk7b0AkNlGhgH3fj161pAnft2jYy1ketfCVkHMGMLv8lxP2&X-Amz-Signature=cb4ab52963913b9bc977680961126048389742af0cb68ef8896cb82b6bd15095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652NUAE32%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQC1c5XrRG6tUl%2BIeMjUHsOT2%2BGw0xoHOoBcpVtWNNmUGgIhALIcTjkmM0bkW1zJgZ7WHaLq5A7ho08xwogIn8UrxbNXKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyINhgvPN7y7zatKLwq3AP5rWWqb1wfMbFL4u7tTQT6EG3YcZjDC8hJGA8yIe6bOBe0XjFW70lpn5fiPOQTu2pVT6fK94AIXWqNcgaZ5Smrm5rlwQ7Dk%2Fa45hDshlCoPnJT5Iih%2FYPU2djnPsICnCRb7VlDcoJ55WZUpdqne7NbaBGqvmHVyTrYZRyKxoQy9fqAbnhFt1VoFR0HheP0XsmhI5fbSZFe1eshrGeV%2BO%2Bn2%2B7AGhYd%2FedvAC9fdH91TeUKg2XRs%2FE78OnbX36zsf%2Bu0Oe62ahUCzGODb%2BPsES%2BFOmwlN2eYwviyBN33TF8K4hs8L6z0XFyLSfi8V32Ir3cBigt3Cu2QHgeFC4bOOlgSdAYsgXSd2QBcFb5evxFdmj41J5lVkOwg1qqwbKZ9B2dg0hnne9CcnAgl4jNKBNt1TcmQcaZxc4s6KJVYX5UYYxyGTQ%2FTwxDzBYTEUVEfLtsEUh1giIl4gg2ikTnQSH2G41qgsIuQEr3W1D%2F3JrVXKjDdtXycAPT14WXQw5qSEDGhuRk8XA1OohXn7tmvmbHLO8kJG2YSWJVf4rTwcwU7nw5%2F0MaPmzgZTDj6S%2FIdJkCouAIynXE%2BHtoySx2K%2F%2BSMi4dHit0p%2Bbp4T0t24MkxmaPLO1b3Xg7xt0RwjC3p%2BLCBjqkARk9L%2BYcKtvT9S5IoIqdsr8xlpqvWlgfEF5k3Y3PYViSiyODbyRONE9qEiJrDy7ix%2FV%2FWrh0I6fqMa56Ejs4wavhMUze5OHaXg36tesqOk9b%2BgMcbmz5XFXxJwsO6JordEJt9G8%2BXqFqGQsRypxLT%2FmK8rUgBrsq3yDoN2yN73Sm6KgDaWnE6PaBGJWf2qI%2ByghAwwExHIRHOnyL5a07G%2FDC6Mzk&X-Amz-Signature=b6b786a04a19ebba4d52751455f4b9d68bd274f100e8d267dedb067657b5cec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
