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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WADNKQNH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZfOIwvKkSqNJ7z66V5r0csk8kPHo0eegxpxOj0%2F213AiBACou6cDl3HJSs8OY3JOnYmmYeyfp83sfXPXKeypdhpCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMJ8jwhyKHPWSCmd0AKtwDgu9oX7SzNTqjLayQ0FPXNUNe4%2B%2BMGjRDPwVT90b4vA2oOoAPQf0wVyFfGT2jbpfnVSwcd627VZjqWXSRuK0LFriFpMeoQC27%2BxCnL9taL%2FH9p%2FJj0XTzjMa235ol4FNzu5NbmRbSOoVfK5tZb3pEQb4ZNYpM6ea03uQrGnA%2BHLjwzDG%2FXLFw1iJSMyIlo6HuijWyR7wDDy%2BQcyMpMkacrGQDrTEbEs6QEkanUx3Uh9UrE1yKP9dF5VzGwifWfDuieqnR0JAUTWQcU45uUCViPDrWi9svV0gVXl1ujoOD6lbzJp0phO%2BIUO0%2BHiiX1AamPNOLgFwngBJj2U1M3%2B7SK6LwjLQMRq8Jku7NXrllBXpXiy1IjjxmXnr%2BXNVZ%2BgkYRkgNMdVc%2Bv1xRspAX74Urmb%2FQ8jfW2LoWnaAUiO%2Fg8O7brYklXRykvw6Bolp4QzNj2GwRQmz9SDrmOtTHwfpYD6aDjcqQyjmF1FE1V2pP06V0j6dq1dbluDVuDcfhOcURDk3XDRHwuP37DY3wIFzaNkBTzqe4fx0uOZVUXCRw0kOUc%2FpmT%2FKVkNs2U7nr0vgVAXaC8Qt9pVb5RV50fpetVNmBukpklVdJ9JWeejfXbuTezKMctoaaqMDi70w2PSgvgY6pgHF17z4tjO0eeK7wNuijLhUFvG%2B7FWn3kvInqMaxIKqHBKGpNkKw%2FVl0ZEvQrwtb87tithdTpbdZI13%2FUqEd5XXTJiHc7DbByTdmIlfdDVip%2F3OZFZ6UhGHi2ldDeSGGPwDYp5ARJaV%2BeMyWIw3cfq49xhhMD1GE23I51a03jiwgdOortuSG78GOOUJ8w2IT7rmT%2F7gSJEWcsF542vJrWJG2vDqIbCS&X-Amz-Signature=aee9601d302837576922d55e76a3ba59a5a8f6a1a53a6d1de01fc79684bc753d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BHAJ5RT%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyzDev3ypiESHWNSAw0T1645uV4kJBkdiUuhRbQwwRrAiEAllYNazw43Yd27hPvm0GAty%2Fx3l9QquaPyCjZ%2F3Oe94Eq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDJFWquy4QJCF%2B5XE6yrcA8udtfWnOF2C7o0Wob9LWU%2FTEMGJUXgERac8cGYXzwHtmstyBDnkeObOl7UGmRqKdy8Eu7iJcPynLdopXq30bTUDNUSO4c5MySS0mePtWrRp7C9oDG7FnobezIrgf0uWngTB1Dhy%2FfR5%2Fk5sjhM3K4kAlLBjqNavvM39kO%2Fdjinrd1%2BGoIPfFjINsFTdPa%2F7%2F1gUFtgDvW5ioEA6cKCb%2BatofDU2fOlWD0VPTx9d0dU%2Fk5csDmCzDlErVcg0WKPCYMFApm5QSAdY2L5MX1Q6nq7OJUuuXJCOh4qzVez5LKNmeOmz39sVu3mNR4cUoQXldR%2FnfOc68zpajC2y1B2Rcgz%2FlOlZ7t0onBZlSlr%2Bg2DohEyYNMdG4mYdf8yVJCc%2BCJCS1Atn4HtmqqfebqDyAfaA7ekhtBw8k7mYG3JMKObj7JuEgvzbv2Xi3FUEZqJFV%2BwVZDE8%2Fx43nuArgO%2Bdg%2Bkhb8PCzwFRFa%2FQDU5GdjyAtd%2BMnXRHUhuDX%2FcDH7d%2BDnIYy%2FyZ55m52EyHw85WdsKYRo%2Beph4ghtSzlO52bOz4cyyNSpjClgav9aXwMMkKGqv5lNVn2%2Ba4u4wzFZKyh4sv%2F2mS6iA5bVJ%2BQduCizyBuj%2FKhn4Qkxm0AgNgMN30oL4GOqUBWzadNUj6v%2BQ5ApgP0XDoB6KNjxYwf1seepzifdbG3MZmYWCjO7jZpCCfU3OFHqxV%2F70%2Bo8EpUVnYqcHNLCA%2FAO%2BHYSPJu989BEzT5MBnHKAe%2BrwWtEFLEXv9GGq3j4a6vtY%2Fxgx6lEzoVGmUnOYybJEMxuoN1YOqQs%2BAVJ28k2n1U0XAe2rQwMI0WGf6TDFSdZUSwHLfQremlrRlyiO06i9udObx&X-Amz-Signature=3f606c5fe2566f3b335a91b3fc1b3819aa6d3f7ff13dc9a257eb9d0684c377ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
