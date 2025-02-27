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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLFVIRI%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIHroTyowcEBOtRJ51xI6GmH%2FXQuRVX6XsazlMhS36NdyAiEAxtn6OYYDtvJQwMxRiGRVTMCzprcNrD%2BLJU2HQoOAtDoq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDErQh7TobrV8BmkQyCrcAwk23odUrE8hZhmk1lrABF3XTbIilbwnuSMvipEBubfIey%2BtBS5tdYKqda6wMPqsO8dPeDh0reV73Mfaz%2FcWavEba7H9cyDFCx1NiH63vEurHod6qTJT6RMfT0V5KXa1%2Bcb5Rml9ADJoalBocZeFck7af6mDNVEiz5tpsMwiP5OrsKcrRx4NdlrJr8eHDeQIy11mFKzDuogM0FG%2FnU6L9WhY0hFG%2BnTkh0gDmfUNKJFAloEev2oJHDrSqNDxM8cSyyHth2M7x1KnIb5bGyCYVmvjzO%2B2RA2mT49MYHEIKktwjsiK5xxa5Nr7G03OF2jajzthQ%2FA5HBvwap1go2XbQGxpESJ7P%2FIW%2BjlLs6zRWLCcf7DZxX37IfP7xXhcQFMCudjmPTnPIZ5wyAcaNOGmT1HkQCixUjxh6JuB6Jmt6mVADNuBqF7YCXq9Y4CP627IaAECOurdyHALKWweAKasNCZb%2Bu6Uyfd6RYU1V9H%2Bdgw8bw3h8jVDuOdjQxffUcpm6eS3YuAfgTMBDB%2FXyAayvYH4%2BkLGJxzuUXSkwfjOGthIScQjG3W0AUOdx8ZyjkxmlIayjRKTGQqajA2Yn3fGRSx9gy2z0Ahdf%2FUgyONeXAHkdYR8BSJbXX0di%2B30MLe0gr4GOqUBiK9W1MxczzrFbc5fgyxVUyln1qyEM%2BMSX3XHVEWV8NduPc62BPS%2FzdIlArtv4dJsRuFAmsetPISqqQfZvIbVVY8D5NQsv6ljvtN6HuWWKHGUa3p7lWWg6hbUdySDqFES7po5xxTk7FRLeuf1DyybFKrhy847zF%2Bz1uO9N2mqT89bP2B5Hh6mDsWkMyLZrhtd%2B88GNHvP9BmCFvdvntxgxU4KeU60&X-Amz-Signature=1f75e0857d8cad4370d5f4845bafc87cfc5ec082e9313097f8f7298781432995&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPX7WPPF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDsjFDcw3NKxKQdcK%2FpB7xvuHOHHIH%2Fvni0loj3R%2BFRbwIhAJ2d2hpui7z28bdsOMh9S2P5KRlvkJDltUi%2BuYzHzKEKKv8DCHoQABoMNjM3NDIzMTgzODA1IgxBdCVOuNhUr11mHXIq3AOA9ytkkzWXvxkJutvWWiOnwUY0E51r65x7lWT8c3rWm2OReA%2BdQJGpbM8OZjP3vA3aexjVRNxMnrADtZx4jUCME8ZOBNE5UVnkqEl4mGnq1T%2BRfq6f2xab9vIy0XXZbpyoXIVUvPciAShegFd4UtIa1V1%2BZrxF%2BKSltY%2BJw10YRUaROhjaj9A%2Foq5BsGts40IXPLnO%2FAJztgndTU5fapWqUTYv%2FgAOCXm34HlsOU0oM2mxRu6muN4AMNWVFL9%2FlPIFVaDl1NJtpvevQw%2FKJkpeMmKoGpIOVTrmuwOzH9ZTGMxe15yIKJgm6UsaEorcNyLSSM0KIQRgDhVVWreMVMfiqDZRLx%2B8lLbl7MVQMReAS%2Bd7LBRiZcsRWhOIssj%2B3eaM98OgIEiBmv0nICuulzhbhCLGkRrAXjAliy%2Bj8Xg7fvEQc6OGjRtovtY0QsjcpcYXjuz9gXvhw06LH62EIv04Y1T4lf52Zrm0o4A32vAK3RzDs84oZ%2BQHM64XUZZq8v7WXUM5OHGuRBmAv%2BMY6eNe5Owz%2B2HGO4CtsDIBHmBTod4lvq2bY9kOZHkQHVGt7AoLRBX9u4iPFJmeU6lTHhUVwwYlA7tDCbQRlLm2hrFhxGU%2F%2Fw%2FlTUBDTPRBBTD%2BtIK%2BBjqkATzNHtUycfgq0msVO2CfzP5tGQVF1GHnbZXQEJPwRoDHTL4bA44gz5eqITXbNB9TwO3wuDOM32Du0wcPd6ERLl%2FiTm9xHQ0Nhzyg7SfxKS6lFzYGTAqJ9ubc4mMJ0BLghwwtCJRXhuykPJeHwNU51Oto3Dv5RTUITbRZemrI0mKayiom5JoAq8Pw%2B9JwKJUuzRaBLRYJxfvjdVF4ZEg84NOGSwKe&X-Amz-Signature=40a9659bcfde5aa245072717f842dc6e8b74f1e0def835a18953608a8ffbec60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
