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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5TOCDAK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCDxr2fDr6xDQlNAFwX073ylN%2FAQziMsYvpfjKw117KUQIhALyE%2B%2FzK1i1OHHNi3EKUtXV6WMNVfm70sKFC6q%2FvbXI8Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyGYsRi3g0R6zUceawq3ANhJjU6e%2BrBuSAVM1bukbBH09Na22aOxwLCUTWE32s5RrcVakpvbwpTc%2FgykFZ7l2vOOze%2BozdybzjK0DMU3B%2BNESNSbKm57lKURX4JgHXRkTtQPeH1dyJ6I2Emch06mDRbM6g811O9%2B%2F4LKaXQduYXOGop0K2NS8xKMNfaIXPNUmcDe8uQQMoreZRCHDys7DFIDG0jl6ZIpZCDh76NH0cRXSA2cjgz7XLrccwV6iJxKPntp8rT%2FUYkdtCyCbQUZaCiZ%2Bld8KHYIf7s6jFi4umqJdElTdWGSMVTa68NETGVDGWx7lHaWRt3n30fBxj9r2QbPmVE4dNeWvRmGoLzu7QNlZF0VH6UUKmzLug6ioaFXbCBAyzJGuwTqmmPWU828aHVSFYGI4uyScXvg4hy4EZ5nkXXrG%2B7aICAPMxWNh4%2BjtsUX6JN2EuqdBctZBLhxROsKkFhH0cDXvrA0NaEWdBRHn%2B3MKG0ol7rLFLC4n2ypvsIYjrP%2FoTjS7E8p390xBn6cBmhbDo4%2FiTbFlJJazXgYYjsofwIVmBod4VwFl3eSfC4vzbupOW6FQCe1A6BQD7DNIgVJ9DHlL9xn7ta3mf3oC6vn8%2FutD2qc0uO4kiWLoyWfSQxnNyE8dWMpTDp%2F%2FjCBjqkAb%2FW399lNLLgFxX7EpESRobfLR1XSmZxUlHCLPvgHMEWbNFWQoegIY0vPtCEYqdmwjr0naS9dakaKblLSFeqEPI19AhTruh%2FWXER8q4vpX514%2FCtlFC1FDubbMrhYGEfDtuRN9rRs28fVznYj%2FwAi%2BDl3rI64NrIpZ8kTK1j%2F9LHkuTU%2Fyt0%2F6LRsbc1U8eWuIEYApOU4cz4j6dJ3ikcvGyvutSw&X-Amz-Signature=d8c7516d7015cb4d27835b00c9ea312cd9a337c1a6a03d3fd147a2197fdaf768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SSAUPI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQClf4e748e8GOKj4QWs5Is99SFbxGgyGtKyYv0NEG3QiAIgbLB6MrVHlAIe4ZX8wT4RBaN4oEa2MO2bzzPlrIZbJmgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHIyfCKIwbOTTF641ircA4wUHTtqRD1FBfOaG82ANbmwwk0DjrOSMdO5lVfw3v5pKCQM9loEX8K3e7mXPMHYIEfKlyk6a1J29YFvvLh%2Bb2NE8F7OT5vs%2FY2SUByKhEBE4SlAkFaXQmbp6XEePPmeYKZLt256rVMDNtjW404eAahJutYXLiMgAfIOVhsrdd3NynxAOHGt%2FGn9%2FBz7W6x1Jr8NGPJY%2B2hNHxN64z8LFXWMacRRsJ0%2FZxeKQp2AFqgZbSUv9WWaqTmnhfpopuf9HLq6ZcPXuODlRPXrIa2mNStsEGqqlLlA9UhmWKgkzLihB9Ky%2BAifXB8egb6MhaJ3akx2qHv%2F5bprOv%2FzJeFTkVtBcEdqBJhs%2FSCIlAUk3Kft%2B88XCEHDKJM3ZuK0qjuvYweVyuScrE%2BXmeDjYZoXBhTqlrn6I08MC9tUukP46fjltXRSLA2ec44c%2FewFWfRkBGbRMaIYSD70f4CQXxmJMGQhzvYoHpY6XLfXtcqDVsdZ09RZUL5Cy53clbRXODi7cVYxe3CZakMddYXI8eitpQGIM7KvBm6mnZc0xWsS4uqg4burRhsgU3WbxZUKDwO8mPDVPk%2BukSuGMY1h%2FXzBAik7j8d%2BJq65ZmYbnW1LL8UDUcYygs2vQH6P2taSMOn3%2BMIGOqUB7HBCuwVswf%2FZmQSdcSvpD2%2BN6RLOCvCJOnDn2baGlRDR2ktruTwG7%2F%2BUJvPVJNojOh%2FINilYKpSNoEwI%2Fso%2BFGLmuSVQdJXD9Y7ZijoA6gkobs8ZzsJcpK7Ugf5W3xZNsUaRBBc5smLOUkR2zSOMVOUq9AXfgFrBOqtlb5uLa%2BBbZh%2FHBGOcIkfPBNAKUplTPPFnDNKu10mVoKkI1iYWK9yOL3CX&X-Amz-Signature=fe568d62e448f91568957771045b558bec5cabd5ef612878ee4abb93c1f4dcbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
