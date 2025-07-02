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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDI3W2JO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPtWSHLDaSnIGrw%2BQN4dHe6Xed6VxHNCJORWtk2hqt3AiEAvbFEWwVusD02UncUY1T6CHOHEz8uQycgtB54pCbvXygqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlUpFZyQGxDKX0kRCrcAyojrZx1SOB8xJwC3WdrprFjyPAaiSeWzsDqOCKK83EZFG4MHegdTkXAW4Ln39UOb0g4LN8r%2FJTldFOKTQHASJfMdEhXGvbG5bxRrNcanCnelfaAZOc6SvftCtnnvRi0wx2UAl8Z67gj9oJHQ2tiNM57XR%2FUnxonqXMotddfvP6ZkeoSTlkbsq0bZmGLTC13K7T3zj5wFhXS5MuvGYNZt8fY%2Bjj1Oacjz%2B548cFMJmc35XlpH0hd5VbLbgHe%2BEAsv3Hv1uh0SrxXCA0sE6thLxCPlWDlK5M%2BLjo7uFruJFFdhGuJFtAnc%2FPal273Qwrqoy3uLMDfb3vvTT5tMLXHkbF9xdp2%2FhQYrSOkIXAZcd%2BhB9kWr7sY3ymhoXESNDI9ixS8oGRyM%2FEzaZAnDO%2FZGpx2gKekJgxsvC%2BJ2o3P8hoHSnwLqm2MYIeLveeNXSYLErR0g6sReFeRAuObaLWRp0ZSj5h%2B8by3qJk0aTFPv0ZIO51zanuyyQ5W4tOxtqd2EYeSRPypuzUBYWk4cdwosqeJZnok0oAaL6NupMJe8oyCA5co%2FnrDhg9Ks5lE3PH5dW%2Fw9AC81ynVWeFWDRyXK3goPLP2zzn%2BLFXiBsoVX0odfygsz4GkOaWKD6JtMODBlcMGOqUBb3b6Bki35xV%2BXc%2F4xneIhAgezdllMzjJ2eh1kRfLEpM3hmvpz6Fnu2EYzpWo1p3rlqnJxZg94BvPUEhTJAeUxs1glIupDCi%2FtKxkPvohTiOg8Wy08UIP8O4%2FMYMBlQMwtPfnrQHHm96JWk0oy6r408aN9LeKwK2fOP2R7lDK165PrJmRSSKlQz2jaexnZ61Hhumcvb%2BOlDVVA9%2FYCLiwIZUQ3GW%2F&X-Amz-Signature=5f61018353fcdd3a61f9263b353f399ea827a3f6740ae1e0dcc4c2c08d534cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AG5QHLQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiPTXflQBRNhoksjEoGQ7uuon58CjbVH4eWEDsMVCFlAiEAoDFSOVu1j%2BOHjLxhv6zyZ3IXB%2FFtNYvub5pBeQeAuGcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBd9ZWXkDzkFhCN3jyrcA%2BuZtoi6xd4ki58mVT3zbh%2FSRyMGOGLOLtIhOnBlsVrbc5lrsQaX0bB1J9unZrkxQZDlYkH80NSK2GAxD8A3ljUZATkbQxDSjWZsQf926FUtxWx1sIF4pr4AYyBQGcBdExpsh%2FRMrZc4DHYUGLlSt%2BZUHXUlyIGGu8IQvixsWvoUyommqBRT0dxuPLfhrRYJlo8yYCbp%2Fy9pCvMTEjUDLk2QKY%2Bp9xfMbSPwhbN0ACMeIDHjUn7Ef7xQSidHIQSINHQHvPXU5iSwFam1bhBU3WpRnZudGa0y3V2hOPWi3uQNDch%2BCwG%2BJZiN8%2Fgf4UL4HjJUWNt%2FK3TO8snGQlpweie64Rfvvkj%2BtvGaX9F7EPwHbEG2wEaK5rOv%2BEf1zLHxBgEdVE7LXEYDCIFsQmXciRB6cwQ7ZwXcrCHDVR9L0vG%2FeVevGf3frbwsCscJpvssKoA%2BA3qJJxCU%2FaP7HVMvFYtCZXAgWhnFUPiSiQk56LOpeSceGmT9jtfg%2F%2FuLc%2FLuaPfrCB5vbqTncuIUu1Qh4bsZ1aRpA2mIqg0hReDEPP4pcxXFE2ldC02RPrdu%2B7V7Y7mwcpFaRlqH6GNlNCXjeyDdnbHVzx88gM4mfGSrz9emFd%2BW%2Fhrl2WszqGHiMLvBlcMGOqUBKWRNz%2Fu18Ls1NbWc5VvGNFElQH%2BB36N%2BjOg%2BQOy8px3jmn5zbLgMoI9WPpbeBfzIomSfNUwwIXelMIAYP7QjKUlU%2Bih34nqN%2FQAAJhf%2BVYlIZe6cK%2FVbEnrpD4g7Px7l0y6AyrVkK50Y6MOnwyjYKi4IoAynPcYhKVqmyZk4OIJziyJ%2FUP37itdIklewZ0d6bD%2BgXOZUes9ICOhyaZXUriVc%2BF9z&X-Amz-Signature=2b9bb61bde58a6b82790156ab3745dbf7df96e3b9e70cc91394f61a14ef16fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
