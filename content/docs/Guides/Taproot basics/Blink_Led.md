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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VEWVVIJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnMvZ0cmmBAyhQdshsSRLIZUtgmPciaTGdM7%2FsbuEsEAiEA3%2FOpKhf5ElGvZOu8uVmYAm7DvtHfysR0Usl4wk%2BdWnwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDc7HnYP4l2wzSWPYSrcAynUvJPx2rvCFTVoh9kQasOHlBkiAZEe8aL1kx7n3Y%2F8OuWRzygWhjwxzi0yTEawgp4QzoH2i88XDo%2FKefDGct0Kou9MQN2OsNiqZI%2BTpXrUkEgFBb4UNKmPfbeb%2BqnxQQUD9DfZ6YTctrF%2BII672XNGxlGbWO3N54DTsEXImLMLJ8kYzrkXu5xccU9oLGYcYRwBs34g0bXnUl84noDOIJXHocgO0R8tLjqoqL6Rxh7PcpzTWM2YvdzBuPXNm74A%2F6RxU%2FCz25jPaYtd86%2BjNmInDn0b%2BM7M3IGVpFu7qYaXNaX1A8cyQG5yff3ZFCy79%2Fw5Ue7cJONwfx%2FNALcBFXBbqHN03AIeYTj0zm3KpQ13%2FddHA0ymStVB%2FmQfvKftbh099cV8D1p3OGe09l3N9NGRJR3WC8M%2FwQae3CvQIRtsAQ%2Bpgfw5UQzS0q6%2B3DZsrlI%2F7te%2BUTENNwg1Us6Ugpz%2BUHm%2BMleEH4cX517jr5xmGEf07%2F4X5BjLs1WY%2FMx2jbcjyWgeLzbHFdoM%2BctFTHi74sOlfWyTGGKrW4fGY4Z0aRK%2F%2BYTxlzI7XsTbEkixUP2j%2BZ5Rl6c3qHywcMSMIwxyqJZowCLFbBQXyJIaFPy0of5A1LMpzfuIq79eMJGT98MGOqUB6qcUW9wAeLo%2BoP%2BQ%2BDqxUB4bvSD7quHxSzM4ISOiLTVjEO5aJmqztWjhw2mcm4npZEyQ23Owx1HfinxVTcoNfIdq4%2BqqZSGhj%2FHXG2EGAehQYnuoM0cWRKlrJ4dzZSfe9kVoZ%2FuvUpTvkhXvC01vjV%2B5UlXsmrvoXzeevgj2h4DS7FJnA5PcqEgx4myvXCpDylnMUvzaZokWjmlXDrCM0BuTnfod&X-Amz-Signature=2c5d36fe44e74f30857bbbb68386059653fed3a1762b28acfb05adf2e97203fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DL4Y67S%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BxCTAmVsEcgWKKGeHCfGkKoggWfICr3TYtQ3rCY27MwIgcJa1wNxDnWVKAbXL%2BdKv1lp%2FvqD5vserDcjGGUl8%2F2sqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BC1Z0AKJ6H10MvaircA1yOqjpzBK9T78YZTO96j%2BI1pQGMBUyJrSg3LIRGAyDJP%2BNL2TppAkS3IWQdCTjf4NkED%2FiKMsoZ3v%2FSd36cFiCd31fP17Qa94ELuWpmdcZCsMPLoTUNqG%2BO4LkyiOBa7kMsWOKPYb5sJNrDko1xPSLjTt%2BYcdAJQu6SngD9fTgK0AskaEqpt2r26K1s0Z3kGY6bCxVVAGs00dKRDWHRSho%2BodGlvVL%2FavlkM6HwQrBVU3gQeue7MQsfcdfxBszzXyYe74UGmAkN09E1SONu7bWOsMbgPxTFo1IG0Eq17MelIvkyWWXOVw1dQzBpTNh78YC%2FCp58ArxRr6EEwo7y%2Bmnkx7CGkycyrUINYVmLIki%2FkyVfRn%2B7p70sOQyC4IjyEcb2E3ZFT2YB8TqXCrH2hR%2FTYj8XJMDw0%2BIpuF2utVlbqF4bPgtGTF9MhvKikljJac%2BQG0mQYIRfUXoraJUWOolETJzzhnBWeCdL4qDcUgCL5xxR1s89Lx065S6Y1BkQsnOqd1MogbeehF%2Fw1ANvnoXnNA5O46UP2wN8fZ1ZDbKWtRCkP6ZeW0jTl6f1of5KW%2FnDTzU5e7WXeKiIivk1XvRskm9NqUVXyBghbtphPRjNYqO2lYVw851ouNwgMIOT98MGOqUBVH7WMe%2BWeRfy0VXfZVkJi6b9KlfzEXJuMOi0%2FmVzfxGaOG%2FHxYE%2BxCSuV4pObRLd%2FJErw4QFjrd2HX8t0ia1Fs2gw2Q%2F9eRl7ijJBo3%2BpwL8kR%2BaQxHgYKESbW2rLlc8a0gKXWHsnoxtCnhxAp8Bp70a5Bgju4vwCPBTYVn1L6ilJ291jv6URFlYovLlSc1DzhV%2B12XkZn6ww%2F9TjBjgm5I8Sisb&X-Amz-Signature=41953b7d41cac246503bf35c421a6a98e673cf937d372dff9307cf7e01fcf4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
