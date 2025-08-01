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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4DLRWBS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTy%2F%2BKHcV9sqo4mNCvDY2VNjueoDA070hCN94l3sX8ZAiB6SczqeTLeCV3oem%2FcirsAC7yZ2Q8zRIEatPuTkDYI%2BiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpvzGI6uGduq3EoeKtwDGBhnWoQH2MbXPtGS5BZQPiADy0ZX8xBOYK%2B99C%2FtYPP59mOlMMuvOCmYNlv8bLe30XMzdwivggeYRFvWJVcVQ9w9sLYKfgHfT2K4jD3Vc%2FvGR%2FgTpuuPBKGCAIU%2FKERsMBHOJmXwU54IeoQolkcsYBhAR%2B41GewoedZeHHk84xJ9dyY2rKOP%2BwpXw7CAsQ2YTAJlkmM8zUVhWE8JF2BIM9ykajAya30PhikpsUZTPICfUye3b3oQ4XZF4vKn1ApdlCxAJ5As3ZmxtODCI82wIggvHMBFYAQm4ZhmpUZBG0Q3YKKNqbf9ru3ai35lbpAKWro9RsJ%2BMmO8TiJ6OaSICZm1%2BBXqu1hTUqiU2qBDtCaz1dgtn6zU18j%2FPJOMnYV72vVvNM%2FpCnYmvJEs2A2EIyLPK9sYBcxeUe00PV%2BWhZTkvPh1pHpcmKH491AuvUGRz8kVN4I6xoht%2F4VIJT4DWfngIsmTi4HFqpOM54uSf%2Bt2AzQ%2F%2FjIl%2Blf0J85wn3%2F2gd2no0aLkC1ZxvaZ00%2B93EWymgOpxmZi5iduew6LuaceB5VvsVfVPw5EjeZIHdrWcyOVoIsCcmNw%2FnxkuvOQrUXSAhsjXabsexXbdwrvrp30BdAI6Av0X3M4IXkw3ZuxxAY6pgEz2YuzsHme6YBaIBH%2FLRPP92bzChc%2BNXdhACyohRYZ%2FnhGKy8G%2FUCY9Ew5RW3sY85Xa51x2%2B7fXWXnPHcvpXOfA3zKLPK1sK3HAmWf9UPXpHBEDZpQJbrNkFfSoG7BmDwSqMh9x9t%2FkOpnueEky003Ntp0yB9kIhvDzOudq2%2FEKLKqbTVayzwGKYI14DAmAuoQZAfQfeOWXb%2FvIzBQDvMqBU3EqP4f&X-Amz-Signature=0788ebd711683f60b91907bb7d24d536643fd8acbd1b293650ea24b3b0dac537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W2OJSAK%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf0sP7bqrdAoPbJ2Mz42rc%2FnFp3%2Fvq3Aba6B9jvT4BcgIhAIwbaaNqnGUdjDDtOlG%2FiP91PGUdQMEi3nuU5J8PwuPeKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ4XBdVd78ofwwvn4q3AOqsQ6rWB4R4ywOgLtrbjHwmgK4VA3fzbg%2F61dX0KKdM5LWAY5E%2FZPUSQtrqRsbIv4I8Nd3Lj7iXjVRcJ90sLCJd06zogH4PKwrkvYyIJJtCZiei5b3AwoJ8nPh8lOP7ajIyG%2FQEM8EMeUrgVUIw9QJsBbNCvcKn5ODXIF7K4r0Vq84HrnbTHoDBpFzGvtmGEJxu4rX2PF6Zqr2WSxivMh6qbSx6SL121jv6d1R32xE2JibHdnl2jmbBVxKF42RQVx1StYsADU%2FkcmEVNHuO1VUqmy5bF5B4WG%2BsPVVywBpZ7qEQgZLVpFicoZ%2B3L6XKQfg9%2F6zub7GUuzqkMZslqfRxKLuGC0oPOP829aZrVJf2WGMJIqU%2FRiroZX%2FJ0i1OiUjGh5xgotNaUtmuCH8loAerFI7vJjxsXrDXTELrfKC4gLLokiQzH1WIZHzB1DxS2YZwF6x%2B%2Ftt3UtKnXFrScG48kWzsAuA%2BRquYtZ%2Bv37KWMUXzjijgq81p4gcjMPeIbJdwR4mYvDFEi%2BBUESBiLvq8m33t0RJZWDcSLlrs3xHec69sKVADh6ck44E3GuBmsquGnTebTGVSjyl%2F%2BJbLQI07AYK47ghfIFDrDDQgi7mn5I%2BcpdkRESn4PyH3DCjnLHEBjqkAWjEY0AWHql0sUBDQASuYaw7mM1Lg5QBZ%2FUMMVIFhg1BSZdALWhhRZOpr85%2BDgt4etG5bZIw7SKr%2BV9g8R1E0is6FsnFjj4fUXPMugTbxyNzzE3pcKVUnsPSBfGzhte5jzAi0UBb1uoDOacUSzFpX6xf8Oewyu7x7r0ahZB1g5NliQcAqb13luBoHia9RruCIKGS3jVQLkCY2u6inVrmTHE8%2FHiG&X-Amz-Signature=b4ba738b244cbe627637b1c466c3368cca83c7c386fa20879ddbae0b592b9dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
