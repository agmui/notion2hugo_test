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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FZBIXSN%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBjUerMqiefIWbI7B4hOcLQ9z3dIKrPy41kjo3KwFW8fAiEAi6C8w5hre2AqLPF1IrPM2InXocP0WcKIaCyiuFBrL5cq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEzWXZCJhZCfbSsNeSrcA6GcbitG1YlA43MI4WEMvfPgr74M2nvgD7uIHDlusaD1tDzg%2B%2FEPIRn4km%2FbgKi7KMwbgtG0%2BkaM2QW3sOOyeF9JYz3721J7WcJFowLpXOXUN9RKFTmwC6TILFaMbSX5%2Flbiug4Zt8YRTTPHXzllTSMr4I2HLhx%2FKv5vslEuDr8IWlerL%2FQtHTRK3R%2FRFDgrwPRu865Q%2BID2%2FkoPuBejRaZaa3Qoszq0MEZzPEbUqjBZfXGOkyp6kFnOOCsKhTSjGE5%2FSqkHs1WIUWu5GtOBvkndQnABpgG4bhdBXFJIB%2BV6Iy98YDM12TopyKhwWV42rQzZoOSkKGjCPOfNd1R35vim3AQfsGkPyMqmSUpkHhIyLL6WH%2FyQGNvjZ%2FVtJWvkHxw5Z9TA8lsXiAlhs3HMQMcqqSrrgL1mpDSZfui6kGCEfVJnZoaRH7vjrDo9JBay9lHuqX2pQJO1zxirxzeDfsArl5t4lNy20L5HezpiF21Bd8ZyyUy8nqUygtN9VShs1x%2BmmzITDGxPEpc803KT3Ve52pIwRXgzjp246KuhpMNw9YJYRaFi4W9MCLw9ZyjDEqZJMDsapoy643cGgwzV6z%2Fm8lw%2BwoxZB%2FockrXb2Nqu%2BWWddQ%2FUwQXTd%2FPXMICr5sIGOqUB%2BguNQZ2AJsh463AJnmFy1Yw4jqiCRF7rzW0%2F9RVsgWKedXDP08hiXJMp7R9DOY9jumnAoEktuqKVeHoMMX4Wqi7JZsma%2FFk8KBNGVNCZp7yASMDi3H96nMENKevBhFgyFc7t8kepJBWbXmTtvRDqY6RezrtjIe5HvVWR%2BR2F4Yu9DBG3kVx5wLek0HK00sHRixokd62prI2zK9FkPsV033jkGpTv&X-Amz-Signature=252924fce8611bb924c9725a924cc6c5a57d8bd59910cae03f6442d48e5d6ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BATL63T%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQD1kuzmLvYOEE79lm%2B%2BaAAI%2F0SBZFVj%2BEYzJZtICntbUQIhAKA0zjlr%2FPXJsfjZWRCVKEAZEW4sKmd5nOgKzsid%2B27MKv8DCBsQABoMNjM3NDIzMTgzODA1Igy0ahhu3GcLK40b%2BbAq3ANCQtzVWeu9Fcl0GSIVsreQJvEv5WL3HGjCK1VAKWhX8T0RQvj1%2Bc%2B96cZa%2BpANwCB9Q%2BFqXC22vXSbF4gZyDM5vDccw1sV7kvGhK%2Bfqoga0D6zJ3I2RdmVlu3DJ97MgOYsas7uNSF%2FhNiZARuLvNgyk3aGGH6dtF5djT5NjKZDBu%2B%2Bh4OXmuvJPnpGyvEA1zHnp%2FfwK2%2Fl54o21UhUBy6M9R0zV3ftLaZjKd4MwvVLevhjwiF9mjabIeushurnZPIQ5efZqBdwkzSf0ftxXy0cEmj3UH0xzM9EhDznZCY2dIFLmN3IjxZP1lEqr8Qmadl9qVA18KqykOwfwHGL%2BJLLGAa2OG%2BGS01DJ687PXJGvWTEOwFdWoHZH%2BwxF0Rb%2FTV%2FSwLXzb0x6SUI26TG5Xqw%2FojYmQydVQ3A3rrBh51Jte6OKbpHgQoA3N1OiIGOuJv1im21JDwJdpxUBf0e8I2OELTaiemZR1OU3Sh5jkqDjMJwD6nAv8RcZspjcBnF1GKNVzIsFbGWNFKbFPengV48JsTwS%2FYjcE3QKgeaUuJZtGPkLRzh%2Fkmnu4tq5TjAZTcxKvioEFDsVODIvpt%2F6dAs19%2BUAS5yhK3XhZC6TCRTqq8DoIllVyMRcAk0IDCnq%2BbCBjqkAYGCO7edg%2Fv1uLM9gaYUG4DJJSuep4qkDByK1P2AZ9ipwZVe4l42o9kTYKiTHeKfdtq4JuCc%2Fa99GgbgeA82%2BjeG6crbSFGZaHYHLFfeodNcXK6CKt9i%2B1bCfTHSkbKqkoIw%2F02bKEh04myAlOqxK2HHsN65NPVEcPCjt0Rzghnr5AVOpLVR22kFxWnHBkKFeIJdOIZ%2Bs9thCDOy4IQNlGqQRqkz&X-Amz-Signature=3882c58dd65840ddb5cfe9540895d0df0339360259bd7bca23b816555a940294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
