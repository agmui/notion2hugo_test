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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KNPLLI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIE1U39tovBYN1aVeiGE8sCDDJ2EyNId49h1oTLirq2JBAiB9XOZFGoJUE5Ma1yVQK%2FjPpzl8F2iQ41FBaT2zF%2FVw3Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMC%2FFJ%2BjwTe%2FXKcmIOKtwD8kFgj8N9bqSrArbQuhjjGTgMhD6rziZfyD5BJTFuvSwpf4aOhCwXyDxQtB5QFIeNpXMKKmxdukVjjamUMfQES0NJxb1sGQ%2FY%2BW2%2B3yqtTZJ%2FxlNkcKpZ3pzVIQiF5Q9EleKxkubiFCGk6Mm1L%2BFlVR06bLOGl2BzkmybSeDCH7dMwVV6ZG%2BDqmpBFPKqQuACfuEAdAC3Dr33AO8XdtD0kx%2FaorZHzt%2BVANJcpacgLu7dAFZqecvN3xemxWAioFrISerWs09K%2BpUXHmJ4XYq%2BAXEyy7JvqsGfoO%2F1AKP4Y9o87KduKMbXVBY36Xmx0%2FItkflKgybux4%2Bk%2BN99sVH%2B2naGAcaVFLa4c7oazOTlng6xAX7jBEBUkc%2BwQVmSj7fdOqW1alupbT%2FEY4LfhlCNknbVi4kEdjCn6%2Bj5JR24LBVGo18LzxDMBfXLhDqGup4JC4U5HX%2F6QlEQOGniTgSocPkv54FQImqUs%2FuutRGNZH%2FeQV41KYe9NFuZDPPr3YnAEcc9%2FXNIwz0OBwFcU68zPw2hiklguKmuhi%2Fii%2F7nhZSuDwZhdBDKfFfQNDb8KuNvvB5nXmlmEDfahYOe8hY8z63yjgqUBYMzyOm3DSYtvDYbaDTIdjjWtMPlsRownvuSvQY6pgEQRpw97QLbEIV1YfO61oYgS8Js2NGWwoquBUDhlXuw2UU0fzrLrRQ%2BcYMbMm5j%2BxEibJUtkV1irJsgc5Uv22v%2F7VtxBZxoYdPvdQX2wmJQGs3Xwyi%2Fhv4J4b9oE5wB%2FUhqwNgTwcF4Pc0ei6tSh7knnoZInm%2FvJGXjQd%2B1cbd8QTaeC7OJml4kBlOCd%2BvJsPFPqHU2jsy%2FT%2FMUApUl35MJYiycx1qg&X-Amz-Signature=531c908d70fedfe38b51e48d3fb73db60c3c6759221c0f904ef6c2bac4b28edb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKSVTTBA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIAWvqZJcBs7J3ar0Otnp6P%2B4kV7UpMsvmWnhVjRWOKF4AiEA8ynUGwwmhrTotmDD5gnib%2BrjOVIm7WAMO8Svex5j6BUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDK9N9x1iZy4umJU5ByrcA%2BkWndBDnP47is%2F9USLxxB8F2ybCBC1J%2BP%2BHdvaF6YwP%2BBc6PRFtJFi6kWmwdZ10oiSHrSHjtjzjACHksDfbZYnYi5nH8EtroxtbB9SAXRqzK%2FnUxUCKDSM%2F8hDHcB8GDMtTGTf%2FzhupPygoZbEpDxLj8%2FzfG7gslqCndcrdazv%2FMyWNw%2FZekfYbF1%2F56iNj3S0xVIgfoCcJgMhwRVZfuGK6P54y0SSVdo%2B9vdsaT6rQ93%2BACNmW3nS6meeoh5WhpIin402%2FsyhQY4POHxBWsD5ki86PYipA1R2f%2Bh11eppSaRQjxdXj45Sk7OsZ7QpjLqm6oXrW8WzuG3j5heDE4kunE1OW8KBUZjgyE3iN7NEIM3PJdSIiWhFTh%2BuBDT61NkrqZdpypJTUa8QFqmFLNvDcj%2BtfZiJfWqGJUm8VCVeQ%2BwEnaVhjtwyZP%2Fg8xbBqMkHk7ID2gAsrrQ92azlOXZJBar%2Bw0FQJY95zonlAZSc0uN0oIo6qbCqayqL7S55slbppjSmbgjqiiTD1Cv%2B4mgVZYizVW9%2Bo668PFVJkBR96VwplKeClAA5RcahSqO0gffAvAIWOU%2FvE7G%2BsD5NqTJuVF74AZECZ1PQLpLEP%2FhLqykzpUgIQW9tIvYYHMPf6kr0GOqUBw4C04Dx2mH%2BZ8%2Fy6sQLJZkFzqkIoJSwc7vwZMu4HUUts7U3nROrDLY2ybne50LrXWhBkhLeqHrUVG7zd%2BM00XWR8%2FeQdQGTuhqrxJXOD5l2eyqNZrbVn4FzH8PjZTslw7byZs7GyUYALMyd7sLjuWQ0y9qwa6beX2NGlVWP5LlzCGsFeIdXKFGFYebFErPcIOZThbBle8HJbgcumPODAqX%2FE66cD&X-Amz-Signature=0af56f56a3ece1b8280a99e24f0c817502c3f7548bf8144ce521c26642c84c80&X-Amz-SignedHeaders=host&x-id=GetObject)

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
