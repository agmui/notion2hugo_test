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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYXQ6F6F%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbTxTVxFIr6sjVhJIjhx4i8KhyjfetRE4rsspwsz6CqgIgHF7TDH7p6AoBx75J6LINfRU%2BrtZmcljxQTyyQ2%2BNZLkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYZ%2Bm0A1k5UHKLGdCrcAyRcbnUYXVeXf2JoA2eeqHXGEKG7DWmRMlmqRGyo1zX7qi7Gev58PmQendut%2FB%2FiaLRwtn8xI7SgNOdvsXsvleV%2BalvtLbCUUO1PxhdgsZjiWcG83Dc2Dh7SKSEgsrGgy%2FACDS76P8f03j8m7uBG8Y9DN97OCbRKW8ma1F2JxzO%2BC%2FEW%2BYJf%2FVEbDZGk9bT4CcUCkwWOkB%2FULgkbkaYRBZWRXfZTequipDAbqQorMxen6XkDAGub80z3OJIGbJ9hnyEd%2FPl01LmrcayN8hUMsHkZR6KmnwioQg%2Fb54d18RIR5dzAwG%2FuMduSDZXYSy%2B5FRK0zWBJi%2BTx3RhbHI9a8B%2BhVTc7eqajC1ENQmF7dony8EwvTlmTn8nw9boaADVC75Jyl7Is%2FipK6WtncvYFz%2BPsFOIjYKxd30o8RgoKSiVYvBkj0U9WPq0QBVynLlFtHuDRhPg9ofWNdXD7%2BGTcD8RgJ%2BLA8JT3qG9gl8jPFp2QmTZFZPxHAspAb1kTK8RwGD77Y20T53EKkB%2FUJXpq%2FWEtVzeKTK0aTLucFPF05duCBtFlF%2Fxdy5D2WnCVkLEx3sjKLQwrxHKbaiIIBa5jSPAAFCga42NttUg4COtN06Id18ACGybf9JdqxujKMKmB%2BsAGOqUBtJw8uCtWYfYzTQTyIhsHCsbmBgfoQU0wGbQQ5M%2FndDIYVAQyZTOtzk6lYk5OGda3pthwnxTneBpQmbaXqmq2Uic8Eo1XmCs8io%2FJAgOFEfxph1zh6Ohk4VpALskewYarJlHKofL2V1iMEeOyL1RwJwl69Lfj6by4ZZxw3iO%2BEbs2g5PZHOeRCsw5FSZPUABBnTlqsNPV7I0fszuarveh489zlLbE&X-Amz-Signature=79e90cce014e92f95bb81b6cf326ee54c2bc40fc1776d1d45ebc2a70ea84d470&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKH6OB4L%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuWtwxONwBN7xBECjrxCC2DGE4G1ccpYsp6NHUMIfrAAiB18zYEK0O6sNNEVNjGJc8YgrXRGSwEYT3Vbk%2B%2BZAnwGiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk6%2Bg47vCCsafySUTKtwDE1bAoeZEOS%2FxJizLdP7gDJl6qUOX1zz7wkqReR1iAjxnun4eEIw9ZEyio1fI0eFt%2BCy63BDIWgHL68SAXp8gnq8vnzRrF5lHfpqxC5qndRjCYIStDWzcE%2FpAPtbRdqPHO4kp1zExTASx6uxqhy14TBEvsYkcqA5VJl5AQNtc2TX6qczP2os0RQ80k9%2Fnjj7e9SKqGymC9BH5ez2jgmysn70YJrAFQdY1CSuUW96g941cDCv5GB%2F0WV%2FlIMT3n9D91Bv4ymISVsczhqPSBApuAi%2Br7RzFXDd3k8HAm%2BlbBaxwXJX1n768OXWIkvci9ly0PfIwl6G4bXNLDdGuqeZ2p5dhM7e6%2Fx3%2Bkj6sRt9L8aT0jhG%2BKxSdAg6kOjWy6YJ3WQD4zTMo31uWuK2PY8iXruP3TWFT0p6R5BxDFzynGWr6Q2A1sHP%2FpWJukZ95kX0zkPKrRsimcA0Nvb0DFlcAkEXNl1i2b9hcCgJ0dZCO6OINh2%2BxJONjpRV8wuNQHEkJvn7%2FQBv5ercwmsVOUJ7tkuwvkAK%2FyjAIkH9Fp%2Ft6tbXMwKaVayuK9181BD9veaODQL1SzIBMnjoCPtHXO6GmVMDDHCE0pMn0QWPZdonFepZHiipYC16quPQII6ownIH6wAY6pgGDflG3tarFeUMn3YaAuN03hzwDIpwWcY%2Bed2SErtFSmKAw%2FbqMiI0mUr1PUAZRDckR0pKCTmAjlHIW0nl4kQKlpoX%2BFQYkqD7VyLW5c1QEU1wQpx8DOaYzBJrpDjuzMw%2BYgjSR8oS3Vw3Mbezj%2F4BbFYqg7fR5XDINzz0aYf%2BLUyUTcHkhhrYWoLSlRqFkkgnRiXFJQPxuCNeiItzc4qA2r1jsg1Fj&X-Amz-Signature=9facfbd39a239bf8e358f6298fc3bec3616afcbc54f72ba2114ba1f8412bf912&X-Amz-SignedHeaders=host&x-id=GetObject)

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
