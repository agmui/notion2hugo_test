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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3QPNQE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsBUyUbra4Q2Ifu3%2BDZswg2UOejFNS1M1qgITjcRCYZgIhAKJrGXGyWnWI3YZ9aBM9taa2bjCuOVDOheXzl2INd3wuKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FHhJSK3c%2FwnsoFw0q3AM0bjlwYxUprzZzKLknVLlyChmW6dgZQ%2FZKSftIlxlqJ%2BJNCwwvETErXsJ4XvhTujHavbe%2Ft%2FNvAFVP0ypDDafxkj1BosQa1t1xr1LPv0eLsHzBP8OcyQlDcw2ikjYJ%2BkBodRH06E00lllWhGa1zJsTF2eg6%2FvvKuZzJSTbGNHvDEqa4gmYJzNu4b1VHSJj9c49dWKj7wSX0tpcaqYc%2BcLY9kWiUduoEzvVQyGI2ikbqtmKtJkDWOJ1EDlKWw5x0lS9pLxLS2guOsiKGC2zR9a0tGACby6NVFfSgDxXbTqFLnF3uawEL0TGRGufduxUVQyCfYxiNRLXDkwVT89nILEv%2Bq53pzux2KrubOD7jZjPusbeu9XM2AaB4zuP9hx6fHDfV8tHs%2FqONJ0suDQ4hk2ri5O%2BZs8AeudKCN2Vjeub3AgAws2xaVTpnc0sCmdSkIj8%2BAsXW%2BpfRcK9QE5Ep8jKm%2Bywm%2B%2FHoqf4ulnn48EcE87wr62VKa143Sxv4%2Fh0msqIpbL2wufOyy5%2FlOjQI2HJH2V6nSP%2FASUxstGgv76fcb%2Fpj9o7Hs9rIRHAui%2Be20DhHjcqPhn8kTzVIMV1Jo%2BDULwu3iUyTCHUFi%2BNg4Om92vXu4uiCW9EVPgFIzCG5v%2B8BjqkAVLDWXPVlALme42kD0irtv1nprBOj8sd6rsSMbeok0moJjDBc75xakUUXrq1LxixfXTVNK5BD320fIb7e0hzQ8rlFnOhKI9EaK0DjCPgm5OruLNbNzT7kQ%2FExSxg4F4VrHYQ8cHGOJMwwXQYkhKVwsfTLpBIvUhtKWoe8JkgOzoM0HSN%2BuEebqm6Eg8GnK7LCdcEFtatkzRaTfkXhsvEP4itnU0B&X-Amz-Signature=6ae71c9134f96e78bc8e469d0e6c217478b3b3e059937bf4be26ac7615eaa4cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RUBPZX7%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4boVbseMK0K6lsbosgl%2FdtfUfdcG1IULw1099wy4xZAIhAMm79%2BMhrLOWi7tkfdhnHeiLWJ6kqCIEEhk96RO4VDSMKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1KVmgNMSkuI0PV%2FIq3AOb1itlhiOCYyMCk23Jw6dT1SUX%2FQyAztwdwjCDMhh5mIFSYdkjT5nIwRT8oNCHhgLJuG4aPdr%2FrwVjqCaVBaf9w8F82EtVuByoiuhzNKq6szqsxy1NhV1OlrqQ8ewhS6CO6uZuFJZHV1BPQZdzXXS6DxU9%2FH1tzrGThrvi2VfAhGy%2BHt5i3fWizdASLjMlFpP%2BvViQ5Ic7k2bueQmWOa5m6AxDKFlE8nc3q7jMNZ0oTHyL7lomffQXTaxIoVvgUMpQQ9k6zrqDke7VOCUtChPFDIA36xvaHSTlJO%2B79L5Z69k2kHQpjyn8Puc6HYzpijEfiYpUWOgPcISjb0Gq6Z2UbW%2FdyFBjbGPAIHtzw8bmowWz78EGzoRYDuUAdu%2Fj3llFTf7dxBU2rKdx4nq0CIDPJYgrzYjtcg2zW2Vsks2cfqv9p4Ur2USMiZ3pSGW9Mq4JZcqUzLLHcQWDsx%2BzfLLCnKHZshciraFgtRDFOV7BVZFjAJOuDO76wvT4%2FvGdFfWSrudRw4KDIPG3pJgWknkxTcDhp4YRrTf4%2BQ7om4%2FwESQnoV8wtgVUrSUrrfReewMDTc%2B08cSA8kZHRxcrR5mYW%2FnHDMsRy44Z6yc55HMw87fTkUsIHv4Rq0FWazD45f%2B8BjqkAcV9OU%2BT6GDrojfg91UOXWDgLi%2FE1fthFdUdZYH%2F6YJHn%2FXbz7qnY8g9yKTul3DRsLYN96RtaDQXHAjG9FKhNR4xZJWPUGOzjevBZBa%2FUztwDYCpQdWXTkYptewNTFJ7Y6WgUM7KNAio2KKFeW%2B29jtI7EUyeNESypftjXInODTgtJkwwqT6Lc5%2B7OsrhUPgR00Mbl%2FYN4Fp%2FIce8P3oHGpFgf1g&X-Amz-Signature=be954dd103878112365cafbdc1fe3d1780f051630a3180a6ce6a768de3fefa42&X-Amz-SignedHeaders=host&x-id=GetObject)

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
