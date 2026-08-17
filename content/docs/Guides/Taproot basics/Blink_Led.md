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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CCYIF5H%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHsqpYTAxIIHdNxzlzrg3z1ogUu7HNtcE%2F5ZTaxKEr%2BuAiBcH2%2BdwizRK2npyl3q%2BvVwrW8%2F22wFn15tke67R%2B9NeCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMxXBNtZbe9YQiBnq%2FKtwDUWbP%2F4XlIosxVaKmkl8rFgJhFOaNIyB9rOThKcEthoHh6OcL90DyBIaqvUj8XP%2B6hk0auwWoI2CGlcdG4V5VN%2F6GDoL1iQUHmA2yhzGcoOh36FMhaBkGEk2DobsYDznL53PtbHOSwFo3uezi9QYWPR6THuFO9YDEDHYlhQ3E8BmwuIjKzt2k48Jt0dI7SW8ZanXAjUe7fVCHwXw67W4xEfkpTNhNN4JdcEaKaIpvkuwq1%2F7oekUQcew9bENEnKvmE5FZFJL86SjMZ%2Fj5YLr7LcmOD429ptscDof%2B8YaVvhULSo7DKU5sFUAtAs5F2cDHBFQLtcI2wKuiDLO7DmQvcRw0%2BRsmtcT3nTvTmo5HECCctwem75QU%2FTayBn1wVLLq41x0TR1lNp3ViF6b6P5mz7j9EmBIuBtGMjRbgc2c1R5SQQQupmlDDiA23D0KYbU0dIFQsRxQMesMBxbs8jhHOdyp7CXeH%2BcuE%2FadgETAIjNBbRX5sIMhT%2BFTX%2F6W2ZS2CZ3HUMTe8XzLOWLpvRe4Xnx0pji%2BomCRZ4UlTmfqK4YAbaHbb1hmyv9gmCjdIGxDeAkoxJGA6t9xs24Qq03LPr3yH0cTOMyoITC6N4r5cA%2Fv%2FKYYBBO%2FWsoM2OQw762J1AY6pgEeaaUsKhQEkvLGwruQ6w4GGhy3eVuXxs58siBKueT77crgmSwUJLBQSW6Y0od78Dyql68GMBuzeXCx1KfB1XO9427Be%2FICsXe10SI7Sjxm742C22bPYlknY663BaYBGNB%2BdYCl7JakAikeqWLc%2BXoUTxvyy7V2A5CekaeMzvR4J3VS%2B%2Fcg06dAz15hib5oIP5m0kxnHKe7gLmsWOJ%2BgNrSEiN5SHO3&X-Amz-Signature=41ce6784199a55bbb3f32168d01b137f3fe0921fbd425c893112e061db1c4f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PHKMQBO%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC11k5J1s%2FDI2hPtRbEGxScwivYlWxx0h9ftXpFf7wzQQIhAJ7Z%2B6DmLetaXwH9KUXlt0y4c083tRd7IThkhKAIpyqZKv8DCDoQABoMNjM3NDIzMTgzODA1IgxevSx7w5rvojOGqvEq3AN8kuNdQAvbyu6cL7MmmK7n9Q3ZJdhLdzqaJwCZWX81rOI1KRPFsl3X2I%2BVkM3GKkD7A%2FXjJQN5PA1qqq4Ic2uMQuYW9IlcNUmuDg2zcVmSXkCf2gNNEPXJqKf%2F4%2FS8QiqDNjiD6iRFk5NMNu1k76rSXdAPxfkD2Lki3zI%2Fb1X5bd6ajoFmL0Tq0BjGLAng6KJxeNbE0B6U1ZU%2FsB%2BjaEUo23yDDhnfkYWx1bTMGU2WgaElsmY7CyLKbCzxlhKV8aDplAg1v9GNEKhL3x2C9bhe80l3KxD8ovIzMgE4qOEJ3Pr%2F1sl0sALLNrYi0ArHDG%2Bl%2FBMpJZfRPzGYD1PH32iPIRdn9mkdXDmsY1vVyluqLH5Zr9Av2xC60qdYNrtkPUdqo0N2jI4M0gzj32p4aWEbUqL57GpXedqjDnYxScHyJ5O4qKFq7BbZnm3Oes2l%2FeKW6JorAcqErdYaSr1kKIqt7TcQC3T93YqzPtDPPX22CKXiVvE4TWzI7qc9lFyW3V5Mbu1F47om3n9%2B%2BZ4S2CJH2olOPaIwUWCGxKRaL%2BleBNwsQ%2Bjag682mijY1%2FypAZ8AzKWhkzWSqRMqAXcxbdRBvcpU3kMqyJVsZ3iTeCceXO9bXwyOBdK8CiK1pjDTronUBjqkAUdcjIIhAqgHZYE5wxhYHNzi2oCACkV1NwigYlP%2B6cyRBFjnDz1RRWyHuE5alQZ%2Fpgti1aHs8%2BqI2nB5mCBeVDzz5Ux5eA4R8VJrpGTEQ8fQqi9ilRRdZdW9E%2FV3sQS%2BJzgeljJC0W7YjptHpBwMDJMJIv%2BIZeCvKUfFZ4n2PIFD%2BDzmpQlGDIyHilZJEaLpq8QehrBhnF01s9MQHab29ax4Tdza&X-Amz-Signature=41ac20c8ebb5fff1a69d860f3c1cafadeae26362e484b3a567f46620c640ec11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
