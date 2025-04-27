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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T65ITLC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE114%2Fh7BCLbr2m0qaKmbkhFasngNrZ7BDYWTHksgRDrAiBlM1j52Cve2RB%2Fy0TiG4GeN8k09v7nzeCn3xltSXOTiSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMkO5LiQcsdoIA943pKtwDcj7tcSsDM1x%2Fr4fusw79eJwgGSKeX8D%2Frypzh%2FBc%2F3o5ODbIF6FA9Jxe8DUcKo9AK42GyGNAjDGs%2BY1%2BQ4j%2BJcU671haEa8UnTWdTY2WgJKhDcpzspeHtdOWrVPa00SGapFwcSedRrkL%2FYEDMt9stpn%2FmqIrgNaY8%2FYeXXNDA3obkoHiKm9CYHEsxs%2FpERemOqS0J1E96yLpt3YECxcucZoZV8KTfDbrc3hfHJA4bJLFzpYKyYBCkodWaYWdZmqX7sduEhJpb8b3O8lKFahUJbKb2dED%2F6VXE%2FY9wOY%2FDDiqNnXj2oc6z0SGfa6waOZZsxM%2BRgxg6F%2FCDr%2Fqnw%2FCNkD9tWpY8uq18S4ku0N7UDe1qlQXtYxo4h0yjeQ9RqnJXlnT6JD3qig1Iw6A2PmGPSSE9gTNJs087b%2BG8hPNReEwweYpsyvj3ahy9WXgQRj8V2UdpgBHiJUErRdGmp2Gakl6%2FPgpbzT%2BOuLh1NX87Rf%2BNr4dq07wjhnv6SFE0XKwMhbuMy3rZJt5LCncAxND5beaw3NYnRzEoq1g6Iv9%2FXKbL3Sj7pGNyKEbHHZNry9Dn2gX%2BloBSTgziJHIY%2FTIqw6CyMzkF37pJcGoFUZbYduEN19emnwamWwBQCYw8Oy2wAY6pgHid8Kzaf7csaeLOKyazwMs93PQanuPbUtxM%2FOYHmq1Y4bIok5awpTsbUId9Urr8RoXf5W7p0X6hLosBGHeH2IDz23zLMoeSCErzWLN0obEI2zmSWPgp7j5vm23tzQD%2FZ%2BkmHrv4tfj9t9OfdlYdmwUtmMaBmTzEMExniDDjyQ%2F8cAg%2BqocTdVchR2ePFc9wKjvxnp2wOQqpMzm4vTcpAW1J2AJGj7Q&X-Amz-Signature=1a9981af60e3e71631a971a5b95b0d624996f378804fb657ed34e7315dad1db2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GB6JJ6Z%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVfVTBSYXXbUz8DiOmsdDm1fGok%2FfXweyy1gtcdJQtugIgPPLBZUCLDaetFWIQF9Zx49k0i28crDo9legurCp%2FEwsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFTLcyShFtKQCMpGuCrcA6UwL26g2qVlLQqiM89uZXleRZ9NbBfraSY8kToJqONcAydKh91u493%2FxJu171cH0%2F09yP6QEFjIZIv1jgr7HAwYGOqTippd3MdJKcIXsH%2FtXQRPgf1ij0ZmVoIRnNgWuR6j1FunxzfdREWwTmdxLnhw1Qn8Tm4rQ06gx2dJTdgDwL7QruluVdhCBxJJVwgVkqZ8tOiBSrlPaCa0hdOAlJeibxZSY1aJY%2F%2FiFZJ5UfAMZZ2mxDYZWVvaAO1t2fvYPLWbN9%2BsAxktwf%2BiEMVJJEM%2BfqyKozLV5Ll6RBdlvl9C8FHqMt90jyh1S%2BoEz7tZtEsnmwYB3HAhnsvEX0SZpL36fRHAIze6qWSxQ9VogyHrBq4P6xMZK0tCTIJkvojLc17R5aRKjt4vuRJMhD2uSElw2Zv94qhlvU%2FwEWuwpnrkPQ4%2FDTjrCHivPD%2BwJFpvn52tcfnwkbbjui9byKyCl7JgmaTdr6zZ4xIIoeOYxc0DO9%2B2wM46fQqa5ZTLqfIdhZxP11SwFioqgn%2Fjqip74JjDx1pmuvJp0ozC%2BBFVDzN6GW3nWV5EwoSEvTNi9QnFq58qskOOqlYBCDi9O%2F7mVlgyqDvZR0nn5a8GX578GYSoN%2FgolxJhoeG%2Fwt%2B6MJLttsAGOqUBLo3df74ZLVwsX7bNP%2FyBZjKG6KJhtlsIBtNRMw%2BwN8s%2B58DD94bpvrAth9C3PO2%2Baw07ImfABeuJz7rL71B9EHGtp1IQ8Z%2Fulc8P6nk5bm4%2BSUM9qXdE9MFZ09tkKtjzCpROSGH8QfoerCNDGgpzofyalnkdwsPouMW8%2BGUZ11rSvaw4FZRY0U%2BLVlKRvnmS577jYU7zM%2FyzqNYYh7YdK6zQhusc&X-Amz-Signature=aa10943059f3d7487258cdf759c3921c4ddda8531ca3332b39ba8d447f8949bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
