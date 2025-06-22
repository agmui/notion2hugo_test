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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53XWMGC%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplLjpdNiNkba9JorDlobJSDs0eTKdV93Ym9Gmr5b7UwIgKpIQ7Zbjl2f43mISjwa7IpRMEv%2Bn798x10gODmMcNRIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGs7YqcEgulNcaUMhCrcAzABaOtmSiWYNh22GsHmffoU3JnYI2skIxvUuGflO1mIvuaCO%2FkSKK5bl4FmWOiG7ppLX670WViPxaGsA5CsX8cvzn6iCvA51eFa8sjMEiz2RYXaf0zw7lqTJJlt3V7SKtynj0vStVmaaa13TjuGJDq1Kkf6K%2BT68y3%2FcXDiNLh6W1ADNoFC%2Bjf8n%2FOS0LlIZ%2BZ%2B956M5Vr4NFZwbRlre4qSKZ%2BzHPuRJZqjNFPfVk0pajlMEkbdGkERJV3AdRnpGSSj91wwCc4A4p1%2FmzLPEjDAozE7XxCL5SFUKkBQcsP7ciV8oXmtQm1jo3EE67euFHxouLhPIEjxa2obCH1crx2SO7AtOwHRMuJL2JLf7tWOhhRIM0sDP3dwc26dCXw4uabud%2FMqL6nWj2KiMErz8eCBN%2FIjesHBz3tCkpCjceYcNkjnuVJs0D9izaSaU2L17OTrFQedbmD5IRbRS4DedFnsvvJQxL7JttDl3qbPbeXwwE2xphjG2u1wtonPyyu974wlVAgMZ5VS8T3OB0D2sze9xf4fZwcjGO3sc%2Fw3PmH3K9MnxF3VvT7zUUQGAtXI6iAI3KHFWn%2FC%2FVrPET2K4DPkgd3bPap8WMTl6BccmkXh2GkGjs263JXf8DGaMLKH3cIGOqUB42pj0JVtDfJcUB2MHB54rYsuHw0F5M5kt5lI%2FkA46zxA3ypgdRaNOjdM7P%2FTDMMxySSddtIGco95WBkU0CU9gTh2zLDMjWJ%2BBMtS2%2FXu5anXtUOYe50i5LF%2BWeqcGaMowZePsfZlHvAMPoAFZfxdVLod45WJ0Epc32bH9O8N7x6oCKTQni9LMiOK6BgcbZTQUZY84r6YvKL59%2BMzekbhxcjq4m5%2F&X-Amz-Signature=da4e782d527f6509811db5df49d2078b85bcd086cca8cc7ef19a72ca6f7c56ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFBIV5ZZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTVC5uRw8F6BBcnoCwL3gyWmnOn7Edt9LL0zm9b3mDcAIhAIgiKAsuaGX25vmXQu247aUj9k7TeBJVuarlMuK9V4t5KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2AJWRVG4JSW9bSxQq3APyHJ01gfInSjiO0QaoVefvQvFEZJHmb567hb6ghEIooEJOig%2F57AA2S%2F2QFR4x1zDH7jwSsxcSmc1rz8yTCqbQGAFT0cuObtU087D8RQWoWRiUKgdLp1lwIWKJMbNAihfi0fu3WyFHZF1QdAcfXfqqV8nEH5CvlBY%2F1wEoPHiIv0flxgW3tVXLeEjrwFtdjn8KJG37zRktZDRa50nHJBy%2FTbIsnKvCDsRGb3v8yCByYv3i6g09x6EbCG%2FWHTooBVHRo2gGccKBtci2KAYdIayNoy6rFwGi4LrJBLj2JR07eXNEfmqB3F2Q2HJWgHi6cUy%2B%2BAPyGLrWayYLCiiKoKehBLqQdOtFZwFfkBlfWH5J0i%2FN2R%2FlqE5nNdqrdiq%2F6ljjlWY%2FJO95yF9o9BjOF6XmGQo8SLBjJH2MW3gwEmdPfVim8yTnGDDxEcpYYvbxLG71VJ6ybvTgQB1pDDeQfxyep4CnvpyE8UIWSVGsHh1k59uLqb0BZvOtTpNsznn7EUu0XoxEhs%2Bsm9p%2FnGc34tzTBCXR3YX22%2F%2FpwVJTOsIZiv5sz1aE%2BAzokQ8eZTbJpH8KRdIGod8kB%2BQOpc8SmTlxvech9ydkG%2Bcome98y26H1t5MLpX9j44gWdlq7zDYh93CBjqkAbNZYRfar1Wicu8lg6IlBKNEjrgdwCr7%2FdeunimEQzvDLbM36wkPH34KRq11Nwb7LmRQO%2FAQG%2BZqEgerJlyH7IZYrmoJdIUbAVY7PUAnkn3%2BeB1yJ0ZbUmBUAK5t6v930mvWyC0j3zpXGxgkbEHJzffxiYQtmWNZ%2FkyTGS61cII%2FF6aRDTOr2HAZJz%2F8Gm8yh17Q6XL8V4TNSEsQf5wkXHJPPVVc&X-Amz-Signature=3eed75b7889d38bf0afb187c0e101188d1bbbfb28f004816bf4c5c55c657b235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
