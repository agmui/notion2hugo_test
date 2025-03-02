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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5TRO5H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIE3jlGWzt7l%2F1yZylF5UTNT8nyZep39ZLHGgbsLYWRTqAiBHVGWaqKZGnSmyOZl%2BiQCrrD2fiQozFaQIYvzYp0g8hyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIaPwagA3YcSQy56fKtwDUpyyA%2FiVjTt%2BgO3lSxlqwgtHsbJAuAtkGAtN%2BOSoBHjcdHWXDNrtJbVzKe8lLjlIrl06xKEjz1a6oWVXAbJ86D164lSsB4a%2Fsq21N7i9ew4kJ6nwQNtCE7XKceWt0qsxOiDS5HdblBvI1rcCmjHG7l%2BFyAREEpyYCR7kY5%2Fx2YFCYvx%2FnQDElYkLfV%2FaV%2FkvgNq0kTEXTJveaOq8%2BqeTtKqf5mV1e4e%2FOxDJjq6LfV4bqy8gIg9FHRLk0k3wwYGq87iqpbAemojuRHIGxUozx62%2Bc%2Fqx7uUoahjU6A6sC1WK%2FvReBQov5mn%2FK7IdxeZDOoYeoq61jCVmXb0LwBRmKe5Xkm2O2xAOu%2B0rT9m0f4vNKu2NlloW2ATSpTmYSWeVNAo6iPjsjAjBeEHzYe8Moj46QDqmKqUpYX3Km9Fhq3JDssm3eaw2k1NpsUMzhSgktdDg4jC%2F3fi1YRUp14BQ5fV69ZoS4n5JexdNg3WBUP34jxF5i%2FPRCxW4f3TZEKjhuBxIVMKrVjz7cyvIr7ZJ0Yhcy4A2osE3SQRnrVMhW%2FRmdrzDVtU2qSDLSUl7g1EKY47KtO2uD0uuy1%2Fnxyc3xHOlfw%2Bt0Hg2vJgbFoW%2BOdLkydADcFkAXgxV0H4wuvaOvgY6pgG4fk4zHrE9d%2B0aVI7nSGf%2BRDzMSX89LeY%2BFQ%2F%2B3WgxIVXAyyU7UJIMzygOyhJcjmuwdZHT2j2TswNoPURFht3Mg88K97n3gAU9uYpQxj4Zl2bf7y0BjjchnGqiOVr7q1WnjK2%2FSSInmD5iFP%2BzOAYtsQdMwjEu%2B9qxDKPvktNtztVWiNLaoxuDFvNWGOmDfYK39FB7RcApa8VtEIOBny96iXYsB6Ry&X-Amz-Signature=0fde068ee9241270cdb8d8d29da0733c581cdb2d00d99e9a31f6dcb70f374f95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOT2YQM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDDQFdzrjJcQIf4hDqaK1BEk4C8y3O3PGRCM25snUzRBgIgE9D4pOvvWZ8qS9%2BMrg5YdIT8CAPsa1%2BJoGyBOIOr8hIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2%2FmmHaoaVSWOfSuircAwTfaTCqXnKTnyDTeThLPqdLerVIZ563A8dG8NoHxnwYC1FkHDdE0nDy2EGkGMn2SDPGs4vwCrvZXPW6Gj900pP3qhozJsH2ZpXqAy5S93lvjO0I1alCvDt5OymI66ClBZuTi0VaezpUcBDdMAVQUBErFWJedyi58%2FIlNh60Eonlrwsaez%2FRfPeSf0d0lCLQhQwmEy9beapVNyMXM96cR1xaAinaQmOzgIOxCIcq%2FW1U%2Bqw4oTpov%2BSazkiJ57%2FZysiMYeYsvBC2q%2BF9O0bpyMxekDv4YIZtmC5V22gazbNGuu%2Bz%2BcIVMV7BUjFVXS2lI2vvzOnEvdPxYIpXI0KPcKr4zp2Eq%2FWCtsrQM8ukkep6FkSiGdh0SuWKlhOzprZm%2BQr%2FCCDcotowE89fPYRcR8qUYR6KkRPtzAWTUSkaEjU%2B1nnbL8L7akcZnpSdyuE3yO%2FmMMZVR7FUQImiNDw90FcqP0n2mkW8rHpi8hGJcROalWIZqCS8LbBIAy2Z%2BWN6XuetfS3QEyyk6etTGCL%2BkkaV%2FyQImo2xdbk1HwhySM8xSxZ3XhcyWz2U%2Bggk0t2khjHD9d5JOVQZu1vOY%2BWdXjU2k4iUVGJs8aJoWH%2BL4lYnbq2yOt6TTKSSTzYnMJD2jr4GOqUBAaquWEVxzz6ISE%2B9z6BarLhZI4V3KieQXAivxHZaSB503fo3OmuvYQpnx2cf5FEKBBTrJwRslcXCR3%2F4rmbMEWpURsGJE2i32opDKzmpuDP6pNNvCH0rqDrCepEBte6I5STXNWUqTsdYgcoYz37fI30xg9xDOIETQASkQViypb64v%2Fwz9J3j33Ek%2BzWIkJKQv1GWZQjlwqB1GYxAHInN2kxASnte&X-Amz-Signature=259a0e45530e88d4fbb050d73e3650590ba449c534ee9c58b724556679ebbeaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
