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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPRWKBKC%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIQCP7%2BQprTA8HHTpIKyUEyoXMj2sJNqv9%2B7%2FcSEbNMOqHQIfc6JFLv0%2BkSOg3S8onFtGsmDDoI3hC3aBhC0%2FHkRR%2FSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMFwPnL70b5QSaaf54KtwDZu1sKbA4Z7NBx0p6AXDFKuj10yDtJl7gxogm2Cl5%2BI1WM2PRYxyaubIGyYiEr5HSPO%2FwpO%2FZS789OxRemklDZhReAs2llBTZyZIPpqAksJYRil4l%2BUIEokkYMdSdjg5tvzUKn1J6CKjiRIskP2Ur1QWcolayxeR5gnCbm31Ex6bZKjpbOGyn6Lk2FMv1srC0ki5zeFOic1sDtlO4de7CS7PYndZ7vgI3sELr9JUkWL5qcufVOP2Bv89tldz71TATKUc3PzQVJprQEYcGAIxxuG9yt5PUCn37Lek2Le7N5JaQ6XyehvfT8kMSdJ8%2BM6DaPjXperRwZKTDutsEhIs3z9BXI3jqADGBtXLq8ehaKRxRdFGtV8JeodgGFBvxaXA6XZrYmJQYd7dZlieoMRla%2BruADwh14x0En0S8kffc3YzjGXa6kKp8yJ%2BzupatH4EHb6frPKzBtmndRDY0tHgqSqk4noU95WK9%2Fewr6%2BzBN2Xu6mVBHmYT4ZxTDiadMYwwaea%2BTwbnpoWU0vy9zTW9IYsctpVSG1qZcr0h7EClWdBcYNSFVL%2Be5OSQEvKYrcUEcmuS9chWtgErm%2F%2F9vhNO%2BzgrXIQs1sY5BJy4DrX%2Ba8bmNX2%2B2wEcpqNAcNswivu2wgY6pgHu0LlroayM0mw5PgKCXQ5EcBvDNiq58nOTNTxD%2FcZMntKpvD8F6etSQ%2Fo2GCyQSaBGRtaRrcQ2hPZWdLuc9vc7tD8n8ZbY9nUDLhEt3OJ3feHSFbsNQJMrX0lyUgU16X1CbGiIKiwkO6AoNoT46MDE5dowrT3RQjQKWfEZPj4m8ihxfMt7DwNlfWWR7ILC0lFYaz%2FWV%2FYCChjGbiHObAT8b0MqFMZA&X-Amz-Signature=fc0d3fc1b65a2af7c4c0640cc354062303ca6d97772ba39b77572423dda924de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXHDZ7V%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIHIYr%2BqTCsJlRLRm5UdG2GSYApDGj2sJY9%2BJtJ96QE%2BnAiAv6xhkKZLS3RZKRo36WBZIy8WiJYW4xXlJ7g04ez5olSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM%2BZQatZgvzSXBcN%2F6KtwDik%2BYmRplYqMhjcG73FG3kvlnzkD7NZPsc2f3L%2FScv53LX8Ja3bprpVmuvhTcLEOq0WOU80rzsrn8QK211PEIsjaZNookSVCsPKOimbx3YQosmK8lw6U2p2S%2F1WEpt5jaBOKgNzcamLYzvSSRf3vQsGjugltkUTHp%2BNtEHVZ7pmF6om0xgEs%2BbUYIlrmbVTPh0XCPzrMHXsyzXOx0OZG7w3qdDm5oOxgUA%2BcmROqdPw2jBhQodW0kPpWk%2BqlGW6CqBJQrVstEa%2Fef%2FQdj8ypb0kU1VFfzAWjRCJteZueRklBAc%2BibCCI%2FYWKiXC0Kdjx95w6rXZUK8SxqiR143AqUSm2bFoZiOJA2jSWL6xaasgK95vScSqhmGMZHbjULtqicm53Id%2F%2ByR%2BYKw433xHq0lNLHf%2Flzj%2FjN1cTh7nyFxdD2YQAsutxOyRRk0LpB5ud2DbXYSU7HvjK%2BTG23zLd0IancEdlXbkd6cxzd95TFKecpD8BqwmHGxd1bYnQJ71QVBj5dEtgHVE6nl62vsPIh41WWaSDYs80kx8wgx3Vu%2B3SYnGctUY5QAfHnjqBQQOgCtYpIcO77Kc0BGV1bU177FL5E2uXZj7CGxZZsIZQRyckQru%2BTqUqAECbUrLQw9Pq2wgY6pgFoJFT95aiilfQ240U9AkQDJsxRLm%2B8ISUJt76gQS%2Fi6f05RAPJsUdJ%2FPFBfVUEjai5ovzE74SQV%2F9SHx%2F%2FdYmcMLMbbQqfGTtld7n%2BtD1ctsRpK3b2ipMjTJdM640YQEjqzF53PZVQ7Vf1xwoyMDR22msBQjSXqUVMUM4EXHMOrR5W8i%2BKQ8ZrBHpm9X678Zyhfepp%2BC7tmKATGwj2mfYPMty3YBBP&X-Amz-Signature=049e14802c7ab92fbe4087ff8ab7f0ee8e9c00efac264d6d508625a077094cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
