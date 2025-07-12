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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQ7FLA2%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDznUeSvn7cU4s9Q6cIPc0D8YPi79XYxhlDY7Zi495UjAiAG%2FJSCsNfUfNFqBY2UD%2Fn%2F15wiowArRO2KNiGptU8XliqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUGqf7fObFNw%2BqvGVKtwDK6uvVY2fKvfntuMyQmHuQt4Oi%2F%2B9cQC9pWwmmET1gddVfPUuJ4p9U4C6pqQpIeKJzZeqxcI07sa4G51bsRifFlLz30Ta2VB6Kw0X%2FteDqCC7zVwh4QC4ikQ7St2I354QCaqVuF8jAQlsBREc983tLf6fcouo2haOc3Y3eZH5npQ2o2%2Fj6GTIU5uUB%2FuBjAg0k89YKKEBltgYUa9fZxHejs2j%2FzWVqSVj4r%2FTfp0s718%2FqgQ2A%2BB6jqNGIdaqwqHZJbAs%2BiNsI%2FLHMyD%2BxJlkoX5GaJ%2BZ3MidpsKQBPZtMO%2BPXhOP1FKsxhYJqjBtrl%2F5M%2F8yBzPEl7E2%2FerHY2R4ttl0vPnmKaGa3xzxYCkTrjN4UFlUxwJVHrt%2FYqKAyZ%2B8QIwoot274cO%2F0Oxfvqv%2BbzuLcMqjCqEKJnTl94h2rXUozs7H0I9YJ4ASxzdCSXBXxB04hcBWAQSpQarpMH34TRKlBIz2z%2F6eduhjBfEEM7x2oyRcC5rbfVXLCZO3F8HzqXXRg80klqsSFmNTSMT0t6qVj1ydfBqaSFurxOqWbwiqeZoAuKc8BCTiOACk5FSBHF3FBulvLHE8RKMsOwrTQQB%2FTxM5%2FR5Tpy0WFF6eytDpxeC6kxoAB8g2SWcwvbXGwwY6pgE0bS5wAkYokKFQc5k1iiu1XUlp0UatggUGOeiirbJu%2BnjAMGJ00wS%2BDcTXehlkHcUa%2BaDIzJuSRt%2BJVwDBoj7vzVxcUmA9iVKWXLhKGzaZ0Hq0wHHoJ%2BHbpBXU%2FW7tDTV%2FPCoi%2F7vsRHFhD3SuUQ3gCtODpW%2FOVPpiaLqzQXlpA4nx8Dkym7EL%2B1OfZWG7haytO6yTN7C7fgaNSJNV%2F0d03vpeIy1z&X-Amz-Signature=4bf61236e9317aa57a03ef93fdebb2f8ed33047e9c2a8c3a383e5405f2d03f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYIHF5G6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR4iaTj5o5XhEKOR1xQE5SucS1V3Cg9T71srjd3vkCCwIgUAOvo%2BTGaiVydxjWkpeXypscB9qdivQUYoUF%2B6TacioqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8U07yCyb3r%2F1w7mCrcA1DJTBvrwqC4PwD%2Fbf9aSDJcuUN6AnPU5FVtmPVSqeHLVHyf%2BUVT1Eg8va37EpZtjL72ELN1pdC9D%2BPKideItT0HFVqMLRze4%2B8HRDojU7TxuGtOZPMmuLRwkCxyLwR7%2BUv78fPX4mW0QxafZkjyx4rl86%2Bq%2Fi2ltt53t89wBNfLCWtfnnwymjqQC9eRPfQYZqdCUMdWkvZ5US7oE3ugdExHMWOktt8mPaY6aIqkBWAZRq9xtOr9GifLtaUKxOHkSN5aJ7%2FXuf5IBTglXx4YF%2B69NzQ3RLDMQaZYRTcItp7Zc36kvgbirFX6X0BvWN8lZ9vTeQknDseQ5aH95Ul1KccY8gjcjBRRbmUjA0skzXVqUeUE9g1QRtlCjLCHGJTSFmXN7owEW189WdsF2Wun4TPJLvLMfmbgiwOAjeSKqmsqiSmhCo03J4Z5XmmmL7aeFw%2FqHyfHusbVGZUg0SDXW8u%2BCwTAuaBzaNCZwr4Hk3Ts0q0%2B%2B8DP2QvO8X6HaD09II42B5EN0yPht1SNT%2BpQtdquGPoyME0A1EKkAqRIJk06i54RR9p7VWQNYlmhgqCNl8bBCXYtn56NpmyB7%2BY%2BH8iTWSwzIWB94EhDI3I6GpSCcK91IWzSmlKWVQbsMNG1xsMGOqUBnIWrd5Fmgp%2BIZ2lVuzgnLbqrslazCPid%2Bw6cJhYKa%2FqkNS%2F8wzyh8z%2FIsMvyHpILFnH9DcpPtuHcT0Vfhnghco5MDjOWq4Wus9Y3J5yg0NM3DxWoI0zYmPuwmAbo3REQR2nvKTbgv72xbUacRP%2BDzE0W%2BO5VV6CAA43TivRaYBFRHLH1nUW%2FDiT8NZwdUNhrOyTeQoyRh05div%2F74XnDYIjAGQ9t&X-Amz-Signature=86e598507e95994e3df8b9e9b900890af8688dbf2cf86d5ba4b633ddb91ff7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
