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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB4VVPRV%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFGqAwzm7jD6Srqeu5cdVpAQ9MTpwExjPSha0wZGETHiAiARygPgoU4vgNG%2FChf%2FA7DwzJp3eVnQhI3LSsr0ATnbtCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX9V9aP1lR1WTFH74KtwDYRt61xv%2Fl4UJ6t9ita2dooQuC5MSNHfW3EDmmt7Crk8SnHBxtuuFQFzcQ5VhgDnm5g6v5%2F%2BSwEJZphcC1O%2BZsGnbXR8GNZ%2BSHjbr0ybdasFG9QT94jbDqXOLW6do5W6te9hffgM%2BB%2FKBbfLf4FoYnfKZQ0p26VaAuh7nas5psRvUsBjDDc2ONrXEtAhNbtsiXLt0o04TMCj9eAqP1a1EEa2LiO%2FPxOPhYgIKdPUQfIqIs5B2bP33K077CEkCuxjFe61owr4kWRP5XK996gFv1L05eFWCoboOrRiBiCgzLlml2EaD9bG9ACMoad4%2F7HpcMO%2Bg2vDL8R9Jvx08Xzvwo6X46vaHd9ssEX6u0eMC7UMECgERFpPhUZZe7f7Yc9FBgogJyzL48yZBUIzlfItfiVjTUI7ck3I8hFi5NG2UpRXMDLl6SFapfBKHr6VQJeAjaO8Z8KE6%2FzIFmNREtAVO4AyxMu%2B%2FDmd1dQvhpUVnGxzo5AedUuNwdVaQdR3EjGeIVRDLSJP%2BAAZoLiAZN9g3Vms%2B8r7dGnf1lanwetdmHEoAWuLObuRpPOEM7clKk6m%2FfbjrFm0KUr73n%2FRvOFnHgZGdNoh3J8GUDWHMQmSvXcY57HmhBQRYYIIsmscwxY%2F6wwY6pgHk0WvT1J4HweO0Y7svvkJdn9QMWynntA%2B%2FQHrHXBZW5PbmA3TzZFBaqrjygZa8bBnkazM7IsNb5upi6KN%2BL5rrRn8QM06lO54U%2B9mIsG73IiuEJAE7%2Fd%2BkvI1JyipVCFnoaEmSu%2BqVaUG9ULS8lgJpEGSKvX8RR3RCBEMle0oAnWT%2BDC3CiJI0zPUa%2B4xOCImpvnRhhsQn0m2Hnzo4fd5xp%2Bfhj3o0&X-Amz-Signature=1769c139005941cf3cc1135a3af9dae37cbf44971686f86a362d2a6c0cd02e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URJFJ4PB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmu%2BBU62edbzvzBNWxl896%2FlbyqNKsiuy7fsq3EA1IlAiANWqnTIDqLE7RnPJzat41%2BV1KADrp6wB4%2FO28Wj833ByqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQsuonH1e2ydgVrAIKtwDDr0%2FWaCuHOWFnt3ZXsGiva%2FiPuHoonmTTLLdHa41mdQFXYnLSvJ4LdkcKi8f634pLWlrGqWvLt5ancKXtCYidLw0VjbORqAhJBP4CAKm0LnWEw0sH9DUTLEjQ1nsWi0wqvyOwn7GkMiF9b6TpnE5GZDHGpdXS0eTdr%2FZ%2B63zv387Li0C95ndDdGeYCsChobfjj9rvKeHIeU%2BCG9MI2hgAifKVAMQDnx8HYAvAEVuq6Vx%2Blq%2FO3ZcADa51SFwtfZzKICceAxy4K4NebUN3NmSS5%2F7Tz1siAx%2B5XBFrA6tkBlikfch4lZiU24MZkihR6XenYTfdmJXFl7WmIz%2Byh3WJDnBHvzRYrEmJE6FFAxohOLr31OngCXQWuYBM%2BzjFjiRI%2FNuqmZ4t0nsxMkhDh419EBxO4vrc7XgrX4FvrLm0fLo7DLv6AwrVqHLNTPXbqHadFwtNOjiQrh7X6eHRebYX4YPNlw%2FvgMeqX86axPox%2F5RUDNYsHIf2CajRkPxWFsl5r4YgJd3%2FcSf2pScInxKWpiaGDOq7oE4sY8meiEE8gOtnxzBMQ%2FTAGB4bXRcaSfW9srXEBtsc6rR1fGJfi0FQIrfLoPxkI3o4MhwRDhGSNnxtjn68SuS4O%2BgemMw%2B476wwY6pgFAgZ5KntGZXO5r9kIzz1qy8xKltFQ8YI0XWYXervU2%2FCCC5EqCyQr4fmdXD2v4EnlunHNJZDKVtzRWaznF87H9ncL4vRzYA75xWYUkwroz7qhRyunFh5aqeHS0w55YUQcVONX5ztSQqRVXnfJCvRUaWHLVuKfixG35Hxq4jsJDF8CubpfEaYEM8hQHuVEgTnA4HWD6NC30fhc4X4NrSO7jNMYwu0Cw&X-Amz-Signature=cca80e45dcb405ad0b5c7f2ad313b49fbb9eadccc092b5435baeaa60c6da5904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
