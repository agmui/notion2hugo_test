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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6B5NKG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHzSEDAEawIbPJTs6Us1CmW2%2BilxtW4%2BoWhWIe5230SaAiAS8u4vQS08oHjafID6SxO1rNveuLQ9t5eAMxyxs9W4cCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmliM%2BBzPKzQwcewEKtwD7hUVnp75t8Opg4jgkQNapnOAdWlO3r%2F3wNDYy63G0CtW8EnY7VDV8fF4wRFYb7JCqOHj4ExmjKoAwroeDUayC%2BhlDsYcPRVOpJaJSrElpiT2eyc8tQqrePcwWX5fP42gI12WfbiX8yC48YezCnJtcWmXfcP3OPMPcTVMXKbRPDBhGVHZi6gI83IEYH2GlOOYdVwdJKjyudSlPn6frX5XYvuEsR7%2FP0MougihuEA1VtpYpnowxEiN0478RD5vzSdWA2GrPwapAsZ1lU5EyWql5yjv4bbGUttQr2mkpqYXf8zO6RBBc2yWqXdjztbLdBWJj0N5UZK0xQ20o6fyYo4QQuz1Y5ctn%2BBh1JWlPHUN4HNL0amsRNW1KJX081CziFop1Q4MGx%2BunMLa%2BmVpQ6H5SHXrL%2BFXC0MpJhSzbEbJSG6t84xlYyUB8tMCiJXVzq7wmDnRdtqmm2%2BB89EkGpRY9gowOMLZ1FMOGCoTBBPcM2wqFlNh2PYBsFN4%2FFY1boxXqCiH9Nv%2B4KbRcqDLKdMXjJ2tjKP92LotOhMw%2Bnwxm9kj6uShJTrgDUQ1M9Vf7xFYTGbm%2FFAGxCcb%2FsUupM7ejT%2BVeCfdO25d7zwcgyhEpZuE%2FzrlRuXtwE4NSlww6urHwAY6pgHsPiBVXZcmfooGJ2tbEF4%2BSqrfbK5e7mxsn2IgdyUewxV2efyCt7Pj3viraHoNCjMhoKxK6yoM1S7OYF5%2Bo63fqHxYFT4a%2BmKOqfK0VCCg1VPIqiZXikzNZHD%2F2r4vevlmLIAb6%2Bz3%2F9pR1KGZDxEbbbDMia0RnnSy4BFoBNnHUEsAz1S9W0dtdPWpTkrtYyWHyPn0nuTWtCnWoOkEPfD6qTDckvsQ&X-Amz-Signature=3b12a5ade408a4fe958d713194c41d3ac8a7bb0b8644886bbdddca9751c169d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HG7MXRW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIENQB6c5VJAFy%2Fc6QedlXWoVbLs0wXNJSQzdS3UIzXkqAiABIetz5%2BS5va209t3QjZz8z3Se8%2BPaTz0MKkcEQn8knyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHaEbHQStr5sIOaUmKtwDDCoi9fnBs2MXYR0f57x1Sbtm%2Fw3xuFcmQGSdbLMQHAI7z%2B6a%2FAotv1kF2ke6Z8Q7OoYxMa6l%2Bjhk108RFx30s37A7uzn4C3S5IMgaAai4ICMc67FUbYc%2F51AvU%2FNcVCdhDWKQp7pCjOBkwtkFk2EW7hvGzqs2oxBUbo0jt3HZpBZS2LVrW4GUnb5AZLFnwJJggNRd7gVDXQR7NBjgYIOygRV9si5xr8GrcmhTKD0p916uVz%2F%2FBJ%2BuSqnwgXSorCPtsUusnIND3j9DkjVGUCZ4MxT%2BtYGB%2FS4Yt3Wqa0ezkwToY4aAZNQDsxTXtCh5%2FRN0JNNv8RJ2sG7hcIWs%2F6TMk2GsLbpFQHFvWIWCZgiY3SD3%2BipvNAgilO4zcfE8Fxvb7znYPnO8xCL%2FDyV%2BKGkyEl%2Fic33h7BaKowf2sqFg1EzTBOrJlV5gBheDQ1fWwAWP%2BZEr0KVC7a%2F5SheHsj7Ixe4V56c0k4TPAAVBavuRdlUel2RAC8c4Oe5Ep7T5Cal570WRALtPH%2F3dRz9UxwlHtdhqWZcjSBCTdtNIsuGjDZpU%2F3d2%2Fbo2Ob1CXSDjUIvyhg9HXK%2FKgtuyqX6DE7mmr77Nl%2BvZlsMSifWIzDqXmjf09ZzpJvTGRfReE8w3uvHwAY6pgGYE8GlcOjL%2F%2FQWsnNhRmWBskfgYpgOe5LrskdSD9HG%2BOZs3d7fCOjCW4eRLXaSi%2Bi7PSM9otUGBKMmctUjGQsMpnOjsW3JQT1ReZWMx47uL%2Fvc6eRmbRyAMwvcS2%2FQOtegJ6dHZ5oQHmcSD40JlWX45xhVjhY9HSTfK3vwv1cQVz3bYY9hkQRP8impJ35G67spSzle8NxvicpdlO84XOBhU79lcIyY&X-Amz-Signature=9dadca4684449118db4bfca78f082a55d7400139b6a3f40f739058a2c980881b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
