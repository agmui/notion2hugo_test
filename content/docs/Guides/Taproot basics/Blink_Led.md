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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3I3BCE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCKWijvupjvdGr66ssbpD3dU5sDgTiKSqiYjUD786ynKQIgVMkcyPmTojAo4ZV7sihB5Q4C%2BWBS%2B4HYzEpc8nj9qFAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDF%2FtUuWwx0%2FrnfOrvSrcAyK44vv2P6%2BllAA3U6NKnzk%2FrfPVEO59YWH1FcWNcmW4MPAHA0WRVxEbHFHrkfIPMhhNP3t4XKf9Rb%2FHFyvDK9TUDm9YiMO0jMlKwJeDYbEMcDHugLKiIFt%2BuOqJGdNfpfY77M3mJmAw2FwkNpzeMUyAfvP%2F9QYlcWU3%2BwdqUMp9Kh8QTdEfOQFzHG8t0PgZgJLOopjKFbbeYK6r%2Bi6t24AxgDHR7fXW3wITqfWsgWZnftqRQmeCRq%2Blo7RA93H26hDG6XcOlqhfykfHmYtrp3kyZojX3dp2kwC6WHN0VduBdr3njt3%2FK6uqlIOPnW3f%2FKoNVyf6WI4q2U35TS2WWs6Jf4f71i54U1PFBOzFYGOEERjVh2vech4c9tVZTCGof5jW5Hp7Us4YvTfizVb2nkl5v1WjYApCDF690bsg%2Fc3J5Jllx1KLss%2Fdc%2FBCC5J78HDz946xJFI5b%2BM%2F4mWE2fyg8J%2BGHQD4RnS2g7wio05NrUUyd93qjqx84tDZwpNB5lMTTi%2FhleiR6kDprJ%2F6TWHTisfSP0tzxB6dWGBdAww%2BDiek8u97IGwolRrpRov2nGFotFCkMrLwqYC8%2Fw6Bp0%2Fq%2Bg4JZcv8boodqDtwMPpsp5AQofB4Z8RxnDA8MOjZvsIGOqUB3RMSTNrnipR6yvmSiXMbpzcD27EXAgU7HckHSgF9QuDAKrrVbAvEjC8U70%2FbXukL5WuH%2BSkNsvCrEoLfeWYs7Fz9%2FFuLdP4Ts5UUKvRL%2FpOnDz0QAVaDKHB5jeOdHqPXj5hI43ynyS3bcoGiv%2FBbygyPVTkvoEGZjQRC6yPrhzCJcFeeyXUdZjsKQpJS0MdHZTthC3KT4YbyuV84HZx24EutqCUA&X-Amz-Signature=a643633a2b5f36589669df9b38e118c00ff93bb80af871f5b166ec883f5f0c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GGS46L%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEUWZinhs%2FKVkmXtl88AlcgKer77gQX2VAcrSZ%2Bk0szVAiBwUffjAr7OGv6ZjmcJP%2Bn7rfATLYUKrjcuYegjwcUgFyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMt9c9eAeF17OQ2ItqKtwDQ1MK7QWoGnQxepb59Vs1IPdyyYsxmonlwCPpu7S7xQfcIPW%2FubZSL2Udx87iHKiM%2BSWg1SXlbEqttcSTITztPJrB72w3Lw5rjzcgDZfX%2BIT%2BsV%2BTSe%2Flk7bCM4R6vTA%2FpQUP4A7vWe7g43fe2ephdlI%2FefNvnKIox2SbQ2lxHvugvjtQdT3CxYnd7odt7d2nlZZIKMGBs1Q%2FUUWTrDKPADzzASWofMfbn4fwQXUpCC7ubJOJAKqECa6a%2BXfma4Txu8VzeU2iBkJeklIcO%2Fg%2FAGM%2B109KSQPRBq8LMMiAjPbBd%2FzECh3ju4d4GrI4YR7SZfrYrOmJ26F4CQRb7dobKib6fpYh3c4XRE4UdQ7Lh4wwdBLQf0K%2Bt8e3mDiFNDNguL6aFfOBAjVQDmQuFxL5Z93OgFVzhqP4fbX0Gjy8tOGvX4KzMIOzXjRL21e8Y9vLXtMD%2BnaszNz1SRhv5ya54TBnRUwurZ7lh77UZAaA2PZB4WljBpuBcmfjUmLEHdgum9xTnywAQyoIpRlNy4czE4zYPBAFonCylEoQr6ga6g9hBn%2F%2B%2BTs%2BWO68tOD5tXyrXnC2o%2BA9m5E3zZpQ9Xe1s7wXvjvJvTcWjhkgszDejah0dw0zajZ9SC%2Bq1WUw2%2Be%2BwgY6pgHyNKBNmV3DH0oC6SM2G6a4Q843fKgABuKUfXcAUL7%2F%2FN1VKlZs4vct4ZZ3u0K%2F%2FEraDXX0omkptgPsOQKyeiG%2Fv9%2B8V0Goam%2FsbZy6rwkCzye04rpTf4XeUk63zeljN35FcYa5hUCsGcijhEEEqDIjPdZfK%2B8ghQMv6AI%2F5Aa2InuEdHV0ZgykKZMvEweWrTDUYqEtkGLcmlC9E7%2F8tuBIzy%2FfLBXX&X-Amz-Signature=7a1d43d8097b0473d637ddb41edf1cbfe7096728787d6a01dd11d49737d5606d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
