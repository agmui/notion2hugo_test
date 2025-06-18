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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFXCIXO%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDJDJOC2BVT9u4fk4Hcw4r1BsrddH5X00%2BB%2FbCrvt7dgIhAI0HqgZvy4eTa5%2F%2BC8K2aNPsXw1hDrDCsbCZ3hgrH0pJKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiZcyTksaItPX%2FZVEq3APiod9Vn%2Bhm7W3Qr%2B6r%2BljSfIbJPni%2BQIwHoOvaeo0KaVpb5OsJX3TkChm8AJGDxgMoWfrcpzkBXS19ZRN1mp1P1SApWoeTDKXhxFex2JuIcz6zUhcj5qRSdCtUuYmMZVhNXkrrpDQ9Qnl1cl44h1xTU9iiJyutodpsSDm5vshUXZbdCiWXO1jWDHRyYOmrN2dttbsmg5re8Tor7hwtAUAkg6VW%2BzAFEB%2BSiQ2YofOb%2FQSan7Mc%2FLRymT9ta7a%2FGpoNdGuar9R1EoPXYw8%2FZzW8CK%2FrJ9uGOqfxvmU7sbu%2Bk%2B%2F6Pg2XcqqxcWmPxfq9Efw8GRpMOzDlumn1gmONFv0l0Zx4WeWZa0Bmq4V4W9fHypLOsBmAlnsYR8QhC5R0%2F%2Bx6lEmCgoqAMa4GAmQ1%2FmWtjVpVN27imsJ91c%2Fss7RJQonls%2FqZWn24CNlJ7U39z%2F8S1ChU3bcRQfvheO4MTTkICO1MTlyVOP6N8hff%2BiEwRpRZU3FFnu%2FKN%2BKbYgPjR95q9xFhGdQHvd5ldOKacgkj305mSIZyeHappq8zZT1zdMXuKNxD6AiWRz37Uo25USml2iCO1svjX9votNdLEpCEcBwDFWFtJe%2BEbK1biTVr3iaSb9tt88n1viBTLTDIjcrCBjqkAYEDJEX0R0%2FS5hLSnc4oUtNrqVVh67oJ1MdRATKzDHAQ0FmnV80Mz%2FFHJnrjHbnB73WcsUYo0Cd2IpT0E1RdgtueMXcjMz2X0c%2F7cyITgI2g833oxNOyKOMMW6hCmWgks3%2BupEWyDtpGP5D78JPHu0HPPvbLJs%2BI%2F1T6wicuv0Cihh0nfwzJkRgZPoDsWeWDM70wQzwuwoduiVna5oDXw5zYyFoo&X-Amz-Signature=ae8ca1306fd9e0a43640b88942e7af8a1bbb563790a4947521ffc45ac2c62eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHBK3OOI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7u5FWEmgaWM0HBHaV2I%2BrY6TrJrM%2BI1hkO2AvG7xOOAiA8GFlqTbO0SRbNtu2lFQJb9IyfmEHKbIoM0YK3YaC2uiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeU0R164HJjv03y%2BmKtwDNzhjXfXQpA6I4mwSSj0r6C20Qu8yAdGTWGmd726inIwLpzyGGNiR3SsH9cG25aLrd%2BQle30Fi9QH9OnZr1NPiAquY92T8bzIevfcbyQwtQITZ%2B6BrvPiDAmWLQmojfltOD8Ra8vFaKbH3tCVp%2FtyBlkCHd7c2nhoqK%2FyfdPPiadEriWheYz%2FRhGx0aWU15pMMzONE3k0Nio9BgTITxD%2FbRXTEOIy3F5pvMjEgarYj%2FUbiEuwxBp5ALgYkzfxSvecukkKIYZG58COVIgqvp%2F6rkI8rJSFtOHHcDUYAL3iD6I4J%2BMaYGRNIynDSVdwsNFq3JF7WBGNPhl%2B%2BZSUKouClBHRmehI4sqyjQxMf%2B5PSE6DjREcaSfcIX9EL4HXWpuWFgHJX1DMdk9Vh5czVHk7yML1vAkTkDwxjFuT1VRMmXHMCCfmr8gYuCC5Crtb0YRvV5X4uCBO1nSio6z3QO4cIYTA2WLW2nh18BRmGHagoP7YysqSBFdznJ2Rikg5BR1DjT77JWrsHSHVX7qr8C74e2tPrDlIMBiIFwxG%2FGYs5vvaVIffYNvFTt9Ze3JWdpzY20peAbA%2BB9DC%2FRoiSC3lCcLHZNBbSFf%2BeK0mVF0C4%2FExzIFSmXMzyMkc3kkw9ozKwgY6pgE2nXfaWBsyB8uAEJdh42%2FbOvBF%2Bm1OKZDoliCXNgXPZQZrHd9YNVSeKZzpUmpyWHpcPs%2F4zkq3x5ipM62pJiktNMk1TiTplm1cp8zfZKEh6qfZhERBtOc9RYtnes7IIaMPRk%2F0Tuk1br0xlSMayiEO2hxFwKd1dGj%2F26gVax3r9WEQze0Y2zZc7lGkNjLBXjLJ8IvZSD8NTB0c4ZAwcJ2BmEkIhq5Z&X-Amz-Signature=839e6d8cd257269083b5198b515475e4b30d8b5fa906ed05ba732223f73fe87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
