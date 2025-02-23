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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2SDNMB%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq4bqJ7fceAqsDURMg%2BqV3%2BNUEPzHFI1V6iBrw1E6QbwIhAJmPU0mihuNaw659YwSdLQeeL7PSti3lFUKchTcE60R4KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJctNu78m1aRSZBwAq3ANxaQm2wP9Mi6MtcbOITRKIf%2FIHlWO4vUYzwGGEJa94M%2F78z8NZykUnyf15uqzUA%2FJB3RSxW4XbQK8d3AbH1xmhwOcHiRSrHDbmuL9e26HHa2%2FdQKwYKGqfd5%2FYj3N3NWbWb%2Bu60pTDP%2Bt11qEsCTphzHm5Bf9bz0aE%2FnQb9KOt%2FKX0nSu1PX0LZkqcJU0JAc6eNeLJuoIpN2SXJtZBej6wkRcQ53OrYn7HHvHtoGWYWVawEMMmMUdHsTKjWdGzHgNjhrAjxmCE0%2FVP7xVEedahpgqufKnMJR%2B%2FQY1nu%2By%2F5vA5OQx4%2FedZeXkpkJb%2BHbPdxcFkHri8FdgnpFaoaeDw5YS0hT0A4guwOP8Wly7GCHrF4ihCxjQgEW1rN5DBU0Ft4xdme%2FQ4L6QGdO%2FlAGmRlMbD67%2Bh7qNPNKL4YUeAtGWSDUhjUjfLGn3zJiTKEtxQG%2FnaMf0VqyVfgIDJJsQYGFq3bAmlMwGXPFhtpYrINMvP4DXNXRwgbOSADVaVoCAu6wzunKBOAyXcpGii3VQFUtRZwNgg0qKZtsCCSREyarle%2BAHy82KJA9Hn5oWydJNv7DU5%2F5ASrNSPD24660E1PdAQ0sPO3SGzp1fVyoz%2Fppv94WUd7w2LyrHL3TDsxuq9BjqkAU05WmrcsPn5TJZgKLBJaSK3rWNy63s5qcdvXaTEXd3IuY4uZuIfVorAHdh5snv6LvKnGiyFk9nVOtgVCo%2BRy7J5MycGdC80aWsc5MFKM1QKfTnO82uzMK1%2B5cFxiKjSBuVVlb%2B1mTxbJVMkYTmt%2BIxAPUxI8U%2BgAo2KBZLqa6N3axXMhBWrYX6Og%2FjC6%2BfqCZ7v%2BLSdwkEqf%2FW7MUwfTxX9W1m7&X-Amz-Signature=53b674d5396c7a6a0cfaf692c0155892834e07fc7bb61f3abe4aaaf33d429263&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOI4DQIO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRLqy6791ulnnKgJGulSA5Xs10lmi7aTMgQ7pc6kbh1gIgZWS%2FpPI5XzzxWmoesObas9PPOKGeKKhpOPuInnk0yzEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCitZBRwpTRBlPM7CyrcA4gMB6kGG1B9g9jp0z6GE9myOcpEMJm3uLvMqYkspL8sR9CTLy%2Bk9PazB%2F2VJS2el9fqbFOqzh6zZT4DBwmLGy5zhdrUdqs7xQNMERGsEkog4PR9xbQ7mWRFNoSkrdh6RpIYSYaMT1LDqme5jmJwOpGo7xyg%2FWz1ghFZQsoEjRPsg5LqFlNt2ZA4Pkj2Q7hMfrOKJc%2Bj%2FMZ5LpJcRqKmDMfD3kg8UdkyFanI79ML3ha1uqJxrWXT7SCTk%2BzSa6rNfTLOYARfo8Wgr6VBhGBX%2BpyIzWZ6HGw87VKu%2FpvESoHTLzlsueDXDE6LOrCb5Sl38ov7laRkc3ydTvKM8%2BGtu1HwZt4i0ZVn6o8bB7LCiVoCi6FEsFeHApAh2Dx4H%2B1HX3RFweZPWFUlPhHX78%2FLVw5DTHJEJTkVIWA0XJElZqCi%2FgTCvrf7OgL%2F6LwleoPu5PYrlXUUmt55jZwNNhnM9mB1dg6XfPOVaNO99edkApE%2FuH1QpdJ9cf1xZ8Tmr4oU1K0mGYYJs8KanPUStQ3oDHRx2570QQXnnvN0m59o%2BZ0uEVeUQC2JerlH1qrsmUFb%2FtrU0AM0GbqFPg7COjBtyKp5MBbAPpP9lq0a0R%2FugR8k08kzQnT%2B6ghoe30fMKqp6r0GOqUB%2B8P%2BqihdgvyQYWOnDzuWcCe6IWI%2FuXNHvb1HOitMWeA25NS5eq32TleNsi%2BdL2S4rWL7cybvxGD%2FveBdmmAY24Is%2FXgQ5Gkuw%2Fx4pCDo00b7AyzigIbOOPqXmMtHcAjYhBJuJC8v565TUqVTQY8ivzf0Ca%2FMQONrkLg4X9KZ9n6%2FnsKEy005UWat%2BgKs6lEjwm7qf9gLS9MXHRuIjriHPJMbDnUG&X-Amz-Signature=9851f1f271f4cb3bcde71ef7492f648f2775fbcd374d9ae2af8413d9472e156d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
