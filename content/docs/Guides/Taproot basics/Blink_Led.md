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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPONO2BU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDf7Ff39L%2Bq6kXYsFm4ruB80Cc%2FqJrNuN2lAVshP144MQIgPNav%2BmlsjOkFyhrevYgRQt9VShgKAmDgugRRzWLmWvwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFlxgjTq9tkfyYNFTircA2nTqYTFaPDwqL4DPghbmiurn%2FZH1ZEUjx7w%2BPOpsg%2Bog9JMqVg0vVKvmT%2BGyDOlViZTB5fnxEMldUqtdTqTDaugNebmn83HcwiVsY%2FibpYdqItSeF1lUxqwthDIg8hEGYZlabv3xA4gxAb2THhUGBLtAI4aOlnSahz3BuvVOnv4%2BUPgylHmVD5o8s1ryTgFtQxb9%2FiPGLLKAWz0YqUEt%2FB8EcNu2vd3ICgE1qNcPPPVQYxM1uqgjyEZboLKXRzWwtt%2F%2FuBK2HtpmRikbqmAlJ4J9ZSq0ZcS7VDbmZDEn6oCBW1WW9RgGFCP7hsZKEK8gtmUMuTZShzPIEbzhhkPg6%2F%2B0Iwf1VcumCd1AePgjWjDJTrUSnAsoUGM8kgAYG6L23JQ4OY%2BCk5IF65VU7vj9HQQdfTMg0ARV%2BWAppGrtgrwkwM2gE3A9tUv4E%2FJRYcUf%2F0%2F34KCzU6xW1bmcIRPuyfjUxPNQfXkBbN8reFgDNXYtrHzZ0ylGMgh9naeLUkE1gDNo4ffEp4yJeEuYwbiHIrxp%2B9MWGwwUHsfbqv7l3YYKDAqlIFCQL895%2By7mh5eK3Q0YkhcJ%2BTjqwPXkrUpJtULjNw%2FqnN78ahq8ZPiBQY4cI72EwpCMxlZ4etrMO%2BKtL4GOqUByt%2FspcsDoo6PT0VlntK1jgXNMygc6oxZnNtsvnRviomDj%2Fae%2FhV7RMt8KyXJ%2FSnRV3CrM%2BQ43MJe9fq68zkIC%2FG6qAgYeoQdX7fwVG%2BJhfZF4VN6w3wW828A%2FQu%2FvMs8bhHddapTxvv6mAfDekXygSp3%2Btu3%2Bl3xSdVI9DdtELKU5QoGZPJ%2FVy%2BUgcadDOrann7qUBzazzLhUHtte39YgP3NUKlS&X-Amz-Signature=9cd8f6f2db2c2e775201a3d4932419ed03c7e7c47a170478968e6d056e58d160&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MQ5FFW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDx74Rl8ke415vxWlWxXsqjKwoUtPz8STMaugvyFt24xAiAN72GWPfFipCIVMxRpaq9lowL3htf0%2BlzRF2DZ0yfklCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM3v8yHenwlO%2BVcMOHKtwD8Zqr56EmGWI%2BbwJZOLpGBt05Bi0dM%2FO5ViAbfQ7ebOht7N7p9Y%2FHL7N%2FcP6ZpnixWpaw2Y5gmhoYKJSUdP7zyhpsL6A5NCg4gBMYstPmP3%2Bn2HxU9hqtrlIV8ZRxUdAjCOfhw6EFSnzt69maEx4sep9sW2udrxKqJ%2FI0LWOFjWXGu0bNZg1QhaZU2%2FyRytA8uBR3%2BMBorhi3cfDZWUv1l3yyOacoUbEkHCGXj4CUt2eCVGQRFZN3QJHzppSVb3vqWIDp%2BppXXiVtlC%2Fj3R4oB%2FwoUtR7x6i5GTiS8I6%2FETtSeYhNKtQLzIZ7OZUF3iZVW1mDVIU3FlW57vPEwNxkDy5nsiiEkf3ua8U1%2BRqkfLOdEWNDTMxutdO5xHnwLRGwQrJVefuFs4LBuYcbOiLTi2JlmlvkMjhXuqrAJ0PiiQhoUaPMvdpbjPZ7KjSOQlWAEx0eFMLXXeM1lgvNuLLHmT2JnmaKpYVdoSnx5gGsnsGt3exdoJ1r8%2FqPDHI1R4VNBfWHYXR4olaOpPJPm0prAQGiiv3sOU8gY3n96H2eEmUNXmhtJdGPd5dWwRB38bSr3fd04xDW%2FXlSBNWW3AJnLdWrI3%2BKugv09xQQMofQrhSwbAH9jgEEG4gw1uUwyYq0vgY6pgHoBBb8JR6mVOXOC0Bg7dr0iPPt6N80KbnS%2FsWFHowndGD3zx1nbGXVKmF2rVI%2Brnwv4SOTyMjzOSy5NHg7Hh47aYfh5jmabuTn1W0HrIWk5I9zYg0G4aH2nHvCRckPcoc8bKiesDJYfhSwDutqtbM3aZiVPZPwY0ag2nWYbb4hWmZjhxYlipNUdeqMBcW3FlhJ%2BFuskXNk92Ssx88j4tWDgooaIgDN&X-Amz-Signature=98539f9f15a9ac3aaddbc63f9b223b0afb93e162207a5faddcabb56e93cb52c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
