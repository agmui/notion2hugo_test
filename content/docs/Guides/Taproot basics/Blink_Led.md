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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDOQARE%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3B2xmVbL8Ws75Vuy7Y5BHgTQKTz5ClWMEZdo%2Ffy5OKAIhAORVQfF4jJigYfm53NbUIeAAL57NEjq3v6dSt5iqcsaDKv8DCCEQABoMNjM3NDIzMTgzODA1IgzSk3IKQxdEwOoQQa0q3AO1vIW%2BE%2BlKuZCDZV6nQgFlAP3hv9MM2Yc7N7UU6sGD%2F6MBa6S3J%2BXwXLp1pUxhtRW1DgfXJxmoTtBaJ4%2BGf8Puh8Xd0Hv9X4%2BLoTlZbGdtkNsLvjY5O1OVtL5U82Hb8Tk86Fh6JVVNSUv%2FriSCZSlK69atd5c3RoBYd8lv%2FU7w4ew7hEizNqI9zD47f9%2B2b1xxnrhRoS%2F%2BUpHhdfWf5Shn5QaL4blO6mMgWDFrAMmCdo3Z%2BoWN2Gs8BIVs9Ao0xGdeTlIOQWbilU951oZi2hTV5JE%2BKhor5gTJdfFOJJ7z6ftHKbJDO%2Fhd2T7XJiOqT7R9c3xNJBVPWvP2dXkZy6rZ7pwovxnlxSsqX%2FKlk0jU9HxDMcLtt1mxgxbsRMRFLyW8RLVcxW80cJfAEcQgnO%2BDCfYB2FiaFUbfXSELeHXfC9Ly7su95PriBpaZsm%2Bzima1hiGgukz%2BiGLW0aO8XQ07fke7qNfVXs8XEfDcOIz8%2BAzyOdoR%2F6AFRL82vwa5tFTB%2Fs6CxFw2rXB2w%2FfkV2InToMU9DUD3His8nJFRYX7NGp3DJGVBOZ1jPVarSmfejnvh%2B12VxgClAa4dvyMpgBbahLh6%2BUiFwvLqjsR3Vlal1I%2BxiX%2Bw5I4QeoitDCV0Y3GBjqkAVPu9BImXkjINS9te0fqa8bNYTcGHrLYiDnFIHWCelpkOzyHIeHdJ0R1KTNQYdqBagIq9ZcmcO6tREyVAe6Cqo7PmxbIIIxt8m%2F3q8lf1er%2FJNIsw5wfLWd4OJeeWU954YrGuJUyWT4h6I%2BXd0puD%2FAV6I0vJrPKgL4bxfuyg7TZVKYB2iD6GCIRj96dhMhTnDaytdMEm4L2ottGop4E9%2ByMvWvI&X-Amz-Signature=14f7c02a8d82ee63fb3a6f66fddbc8c8c90877d50ebd5bbdf9a5f0798d82cd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOPIIGOE%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1I6jOROMf8tNonXtWdujwdXlQnUV9DA7c%2BmhODsVVIAiBdSvo1Bm2F6sMRz7R%2Bfh4de7UeycnqRMxNPhpRajfCkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMPdOe5Rli5o4Xo81cKtwDwqQ%2F9LbbjSnG69QYcmiITN3B6ifMVhQhriCuH20zASSsGyXi%2F8H4d6KDCICpssuRsjs7Ds7KbyWVZi0%2Bz6wAVbLJtkfJhRFs4daAFRA4btnakoie%2BKm9y9hyj3xRxT2A%2BgltVeOxnZ0kycOZaK8y6Rv9xmn%2B12vremQOUNpiylA4cDlVXUS%2BWyXAK1XfxjMDRaJCY6Yw2CoBHp3E%2BYIUwZRu5kb0HNgkt63ZUUOgc7DN%2F4dMDGJrCY2wehb%2Baj6BJSg5nozs08Etdgmpke6MnNI6MluISamBRL2LawGYGIrazBmyw85KNZ5zSW57jXFiCnK58wQ1ePIzEPZx3C9ld2OWdSFmikeB%2FBJtnjJGtNRDc0gWMsZWkPuAu%2FPKefRDCRP6rRg4YqBbdP0Ye7W5b8kDqWjOrVZ65WXwk7Qxu%2B1a9sFR7UoLza0m9f9Jih6%2BLvHGZQK2H7STPaniAqPmI%2BnGgGK4glklz1hdzxUj%2B6xIBzXPB%2BfV3PxUIxm0l7PZYKTkYpK0acMKMVoY89KjBGDQXbPTeI%2Bh39K0fsdfcCYMzLYTP5WC5Qr7eUCDLtbSSF4PtiAYn67rachVgGI4j8MFOp4iDV3pnipC9nCI5ebk%2FnBjG0op3XgiEvswtdGNxgY6pgGuhqOl9sfBA4AMS31JcFDYCNo2c5E5DB7UcoO7rMJY58%2BghzgohapOqLoDeLbefIHKCfT9hmGrlV2NdBgx2GM%2FcmqHkxSRWxz23D6%2FMlZ9VPdYVd2AJpU9y6wxnXJg50syYmcq7kFqEWggsTOxqBkWOZ%2BY3jqcB%2FYhVwm2%2FNdQV1tGVRCqMQv%2FROwYPxQWODcppGEpdQlj6Ktaz%2B3NdItwKL524AUP&X-Amz-Signature=f7e703a38ce67fb2e618773b678a61f4343832cfab46ea18a70cce5598b85dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
